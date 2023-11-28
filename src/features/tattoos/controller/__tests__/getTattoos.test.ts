import type { Request, Response } from "express";
import { type TattoosRepository } from "../../repository/types";
import TattoosController from "../TattoosController";
import tattoosMock from "../../mocks/tattoosMock";

describe("Given the method getTattoos in TattooController", () => {
  describe("When it is call with a Response as a parameter", () => {
    const tattooMockRepository: TattoosRepository = {
      getTattoos: jest.fn().mockReturnValue(tattoosMock),
    };
    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("then it should call status with 200 as a Code", async () => {
      const expectedCode = 200;
      const tattooController = new TattoosController(tattooMockRepository);

      await tattooController.getTattoos(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedCode);
    });

    test("then it should call json with MissSita's and Nissaco's tattoos", async () => {
      const expectedMessage = { tattoos: tattoosMock };
      const tattoosController = new TattoosController(tattooMockRepository);

      await tattoosController.getTattoos(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
