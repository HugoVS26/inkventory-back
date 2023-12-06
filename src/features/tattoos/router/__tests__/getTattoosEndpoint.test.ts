import request from "supertest";
import app from "../../../../server/app";
import "../../../../server/index";
import { type TattooStructure } from "../../types";
import Tattoo from "../../model/Tattoos";
import tattoosMock from "../../mocks/tattoosMock";

describe("Given a GET /tattoos endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with status code 200 with MissSita's and Nissaco's tattoos in the response's body", async () => {
      const path = "/tattoos";
      const expectedStatusCode = 200;

      await Tattoo.create(tattoosMock[0]);
      await Tattoo.create(tattoosMock[1]);

      const response = await request(app).get(path).expect(expectedStatusCode);

      const responseBody = response.body as { tattoos: TattooStructure[] };

      responseBody.tattoos.forEach((tattoos, tattooPosition) => {
        expect(tattoos).toHaveProperty(
          "artist",
          tattoosMock[tattooPosition].artist,
        );
      });
    });
  });
});
