import { type NextFunction, type Response } from "express";
import { type TattooRequestWithId } from "../../types";
import type TattoosMongooseRepository from "../../repository/TattoosMongooseRepository";
import TattoosController from "../TattoosController";
import type CustomError from "../../../../server/CustomError/CustomError";
import tattoosMock from "../../mocks/tattoosMock";
import modifiedTattooMock from "../../mocks/modifiedTattooMock";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given an TattoosController's modifyTattoo method", () => {
  const req: Pick<TattooRequestWithId, "body" | "params"> = {
    body: tattoosMock[0],
    params: { tattooId: "6571a7dd81f419ec2f6fc541" },
  };
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next: NextFunction = jest.fn();
  const modifiedTattoo = modifiedTattooMock;

  describe("When it receives a request with an tattoo id '6571a7dd81f419ec2f6fc541', and a 'Toni Donaire' tattoo and a response", () => {
    const tattooRepository: Pick<TattoosMongooseRepository, "modifyTattoo"> = {
      modifyTattoo: jest.fn().mockResolvedValue(modifiedTattoo),
    };

    test("Then it should call the response's status method with 200", async () => {
      const expectedStatusCode = 200;

      const tattoosController = new TattoosController(
        tattooRepository as TattoosMongooseRepository,
      );

      await tattoosController.modifyTattoo(
        req as TattooRequestWithId,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with the 'Toni Donaire' tattoo modified", async () => {
      const tattoosController = new TattoosController(
        tattooRepository as TattoosMongooseRepository,
      );

      await tattoosController.modifyTattoo(
        req as TattooRequestWithId,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({ tattoo: modifiedTattooMock });
    });
  });

  describe("When it receives a request with a tattoo id, an tattoo and a response and there is an error", () => {
    test("Then it should call its next function with a custom error 'Couldn't modify the tattoo.'", async () => {
      const expectedStatusCode = 400;
      const expectedErrorMessage = "Couldn't modify the tattoo.";
      const expectedError: Pick<CustomError, "statusCode" | "message"> = {
        statusCode: expectedStatusCode,
        message: expectedErrorMessage,
      };

      const tattoosRepository: Pick<TattoosMongooseRepository, "modifyTattoo"> =
        {
          modifyTattoo: jest.fn().mockRejectedValue(null),
        };

      const tattoosController = new TattoosController(
        tattoosRepository as TattoosMongooseRepository,
      );

      await tattoosController.modifyTattoo(
        req as TattooRequestWithId,
        res as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });
  });
});
