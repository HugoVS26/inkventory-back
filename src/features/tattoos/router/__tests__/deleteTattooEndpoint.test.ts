import app from "../../../../server/app";
import "../../../../server/index";
import request from "supertest";
import { type TattooStructure } from "../../types";

describe("Given a DELETE method '/tattoos/delete/:id' endpoint", () => {
  describe("When it receives a Request with a correct tattoo id", () => {
    test("Then it should Response with a 200 status code and method json with message 'The tattoo has been deleted ' ", async () => {
      const expectedStatusCode = 200;

      const path = "/tattoos/delete/6564db84aa515e7823b31e58";
      const response = await request(app)
        .delete(path)
        .expect(expectedStatusCode);

      const responseBody = response.body as { tattoos: TattooStructure[] };

      expect(responseBody).toStrictEqual({
        message: "The tattoo has been deleted",
      });
    });
  });

  describe("When it receives a Request with an incorrect tattoo id 'not-an-id'", () => {
    test("Then it should return a Response with 400 status code and 'Error deleting the tattoo' error message", async () => {
      const expectedStatusCode = 400;

      const path = "/tattoos/delete/not-an-id";
      const expectedErrorMessage = "Error deleting the tattoo";

      const response = await request(app)
        .delete(path)
        .expect(expectedStatusCode);

      const responseBody = response.body as { tattoos: TattooStructure[] };

      expect(responseBody).toHaveProperty("error", expectedErrorMessage);
    });
  });
});
