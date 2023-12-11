import type { Request, Response, NextFunction } from "express";
import { type TattoosRepository } from "../../repository/types";
import TattoosController from "../TattoosController";
import type TattoosMongooseRepository from "../../repository/TattoosMongooseRepository";
import tattoosMock from "../../mocks/tattoosMock";
import { type TattooRequestById } from "../../types";
import type CustomError from "../../../../server/CustomError/CustomError";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given the method getTattooById in TattoosController", () => {
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next: NextFunction = jest.fn();
  const tattooMock = tattoosMock[0];

  describe("When it receives a Request with a valid tattoo id", () => {
    const req: Pick<Request, "params"> = {
      params: { tattooId: "6564db84aa515e7823b31e58" },
    };

    const tattooRepository: Pick<TattoosMongooseRepository, "getTattooById"> = {
      getTattooById: jest.fn().mockResolvedValue(tattooMock),
    };

    const tattooController = new TattoosController(
      tattooRepository as TattoosMongooseRepository,
    );

    test("Then it should call its response's status method with 200 Status Code", async () => {
      const expectedStatusCode = 200;

      await tattooController.getTattooById(
        req as TattooRequestById,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the responses's json method with the 'Toni Donaire' tattoo data in the response", async () => {
      await tattooController.getTattooById(
        req as TattooRequestById,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({ tattoo: tattooMock });
    });
  });

  describe("When it receives a Request with an incorrect tattoo id", () => {
    test("Then it should call its response's status method with 200 Status Code", async () => {
      const wrongTattooId = "invalidId";
      const expectedError: Partial<CustomError> = {
        message: "Couldn't find the tattoo",
        statusCode: 400,
      };
      const req: Pick<Request, "params"> = {
        params: { tattooId: wrongTattooId },
      };

      const tattooRepository: Pick<TattoosMongooseRepository, "getTattooById"> =
        {
          getTattooById: jest.fn().mockRejectedValue(expectedError),
        };

      const tattooController = new TattoosController(
        tattooRepository as TattoosMongooseRepository,
      );
      await tattooController.getTattooById(
        req as TattooRequestById,
        res as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});
