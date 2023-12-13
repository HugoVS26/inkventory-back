import app from "../../../../server/app";
import "../../../../server/index";
import request from "supertest";
import { type TattooStructure } from "../../types";
import tattoosMock from "../../mocks/tattoosMock";
import Tattoos from "../../model/Tattoos";

describe("Given a GET method '/tattoos/:id' endpoint", () => {
  describe("When it receives a Request with a valid id in the body", () => {
    const expectedStatus = 200;
    const tattoooMock = tattoosMock[0];
    const tattooIdMock = tattoosMock[0]._id;
    const path = `/tattoos/${tattooIdMock.toString()}`;

    test("Then it should responds with the tattoo that corresponds to that id", async () => {
      const expectedMessage = "The tattoo has been created succesfully";

      await Tattoos.create(tattoooMock);

      const response = await request(app).get(path).expect(expectedStatus);

      const responseBody = response.body as {
        tattoo: TattooStructure;
      };

      expect(responseBody).toHaveProperty("tattoo");
    });
  });

  describe("When it receives a Request with an incorrect id in the body", () => {
    const expectedStatus = 404;
    const wrongTattooId = "wrong-id";
    const path = `/tattoos/${wrongTattooId}`;

    test("Then the response should have a 404 status code and the message 'Couldn't find the tattoo' on it's body", async () => {
      const expectedMessage = "Couldn't find the tattoo";

      const response = await request(app).get(path).expect(expectedStatus);

      const responseBody = response.body as {
        tattoo: TattooStructure;
      };

      expect(responseBody).toHaveProperty("error", expectedMessage);
    });
  });
});
