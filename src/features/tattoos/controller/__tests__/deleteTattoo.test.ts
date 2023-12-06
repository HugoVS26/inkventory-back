import type { NextFunction, Request, Response } from "express";
import { type TattoosRepository } from "../../repository/types";
import TattoosController from "../TattoosController";
import tattoosMock from "../../mocks/tattoosMock";
import type CustomError from "../../../../server/CustomError/CustomError";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given the method deleteTattoo in TattooController", () => {
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  const next = jest.fn();

  describe("When it is call with a Request as a parameter with a correct tattoo id", () => {
    const tattooId = "6564db84aa515e7823b31e58";

    const req: Partial<Request> = {
      params: { id: tattooId },
    };

    const tattooMockRepository: TattoosRepository = {
      getTattoos: jest.fn(),
      deleteTattoo: jest.fn(),
    };

    const tattoosController = new TattoosController(tattooMockRepository);

    test("Then it should call response's status method with 200 as StatusCode", async () => {
      const expectedCode = 200;

      await tattoosController.deleteTattoo(
        req as Request<{ id: string }>,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(expectedCode);
    });

    test("Then it should call the responses's json method with 'The tattoo has been deleted' as message", async () => {
      const expectedErrorMessage = "The tattoo has been deleted";

      await tattoosController.deleteTattoo(
        req as Request<{ id: string }>,
        res as Response,
        next as NextFunction,
      );

      expect(res.json).toHaveBeenCalledWith({ message: expectedErrorMessage });
    });
  });

  describe("When it receives a Request with an incorrect tattoo id", () => {
    test("Then it should call the Next function with an error", async () => {
      const wrongTattooId = "invalidId";
      const expectedError: Partial<CustomError> = {
        message: "Error deleting the tattoo",
        statusCode: 400,
      };

      const tattooMockRepository: TattoosRepository = {
        getTattoos: jest.fn(),
        deleteTattoo: jest.fn().mockRejectedValue(expectedError),
      };

      const req: Partial<Request> = {
        params: { id: wrongTattooId },
      };

      const tattoosController = new TattoosController(tattooMockRepository);

      await tattoosController.deleteTattoo(
        req as Request<{ id: string }>,
        res as Response,
        next as NextFunction,
      );

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});
