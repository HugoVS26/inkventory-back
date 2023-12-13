import request from "supertest";
import "../../../../server/index";
import Tattoos from "../../model/Tattoos";
import app from "../../../../server/app";
import modifiedTattooMock from "../../mocks/modifiedTattooMock";
import { type TattooStructure } from "../../types";

describe("Given a PATCH /tattoos/6571a7dd81f419ec2f6fc541 endpoint", () => {
  describe("When it receives a request with a valid id '6571a7dd81f419ec2f6fc541'", () => {
    test("Then it should respond with status 200 and the favourite email of 'Toni Donaire''s tattoo modified", async () => {
      const path = "/tattoos/6571a7dd81f419ec2f6fc541";
      const expectedStatusCode = 200;
      const expectedEmail = "tattoodonaire@hotmail.com";

      await Tattoos.create(modifiedTattooMock);

      const response = await request(app)
        .patch(path)
        .expect(expectedStatusCode);

      const responseBody = response.body as { tattoo: TattooStructure };

      expect(responseBody.tattoo).toHaveProperty("email", expectedEmail);
    });
  });

  describe("When it receives a request with an invalid id", () => {
    test("Then it should respond with a status code 400 and a 'Couldn't modify the tattoo.' error", async () => {
      const path = "/tattoos/wrong-id";
      const expectedStatusCode = 400;
      const expectedError = { error: "Couldn't modify the tattoo." };

      const response = await request(app)
        .patch(path)
        .expect(expectedStatusCode);

      const responseBody = response.body as { error: TattooStructure };

      expect(responseBody).toStrictEqual(expectedError);
    });
  });
});
