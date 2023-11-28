import { type Request, type Response } from "express";
import PingController from "./PingController";

beforeAll(() => {
  jest.clearAllMocks();
});

describe("Given a PingController's method", () => {
  describe("When it receives a response", () => {
    const pingController = new PingController();
    const mock = jest.fn().mockReturnThis();
    const req = {};
    const mockResponse: Pick<Response, "status" | "json"> = {
      status: mock,
      json: jest.fn(),
    };

    test("Then it should call the response's method status with status 200", () => {
      const expectedStatusCode = 200;

      pingController.getPong(req as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's method json with 'Leeeeroy Jenkins!'", () => {
      const expectMessage = { message: "Leeeeroy Jenkins!" };

      pingController.getPong(req as Request, mockResponse as Response);

      expect(mockResponse.status(200).json).toHaveBeenCalledWith(expectMessage);
    });
  });
});
