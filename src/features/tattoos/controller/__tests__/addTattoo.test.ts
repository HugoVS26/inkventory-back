import type { NextFunction, Request, Response } from "express";
import { type TattoosRepository } from "../../repository/types";
import tattoosMock from "../../mocks/tattoosMock";
import { type TattooRequestWithoutId } from "../../types";
import TattoosController from "../TattoosController";

describe("Given the method addTattoo in TattoosController", () => {
  const tattoosRepository: TattoosRepository = {
    getTattoos: jest.fn(),
    deleteTattoo: jest.fn(),
    addTattoo: jest.fn().mockResolvedValue(tattoosMock[0]),
  };

  const req: Pick<TattooRequestWithoutId, "body"> = {
    body: tattoosMock[0],
  };
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next = jest.fn();
  const tattoosController = new TattoosController(tattoosRepository);

  describe("When it receives a Request with a correct tattoo on its body", () => {
    test("Then it should call the response's method with a 201 as StatusCode", async () => {
      const expectedStatusCode = 201;

      await tattoosController.addTattoo(
        req as TattooRequestWithoutId,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the responses's json method with the message 'The tattoo has been created succesfully' and the created tattoo", async () => {
      const expectedMessage = "The tattoo has been created succesfully";
      const expectedResult = {
        addedTattoo: tattoosMock[0],
        message: expectedMessage,
      };

      await tattoosController.addTattoo(
        req as TattooRequestWithoutId,
        res as Response,
        next as NextFunction,
      );

      expect(res.json).toHaveBeenCalledWith(expectedResult);
    });
  });

  describe("When it receives a Request with an incorrect tattoo on its body", () => {
    test("Then it should call the Next function with the message 'Error creating the new tattoo'", async () => {
      const expectedErrorMessage = "Error creating the new tattoo";

      const tattoosRepository: TattoosRepository = {
        getTattoos: jest.fn(),
        deleteTattoo: jest.fn(),
        addTattoo: jest.fn().mockRejectedValue(expectedErrorMessage),
      };

      const tattoosController = new TattoosController(tattoosRepository);

      await tattoosController.addTattoo(
        req as TattooRequestWithoutId,
        res as Response,
        next as NextFunction,
      );

      expect(next).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
