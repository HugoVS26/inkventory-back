import app from "../../../../server/app";
import "../../../../server/index";
import "../../../../setupTests";
import request from "supertest";
import tattoosMock from "../../mocks/tattoosMock";

describe("Given a POST method '/tattoos/add' endpoint", () => {
  describe("When it receives a valid tattoo in the body's request", () => {
    const path = "/tattoos/add";
    const expectedStatus = 201;
    const { _id, ...tattooMockWithouId } = tattoosMock[0];

    test("Then it should call the response's method status code with 201 Status Code and the 'The tattoo has been created succesfully' message", async () => {
      const expectedMessage = "The tattoo has been created succesfully";

      const response = await request(app)
        .post(path)
        .send(tattooMockWithouId)
        .expect(expectedStatus);

      expect(response.body.message).toStrictEqual(expectedMessage);
    });

    test("Then it should call the response method with Status Code 201 and the new tattoo created in the response's body", async () => {
      const expectedNewTattooProperty = "addedTattoo";
      const response = await request(app)
        .post(path)
        .send(tattooMockWithouId)
        .expect(expectedStatus);

      expect(response.body).toHaveProperty(expectedNewTattooProperty);
    });
  });

  describe("When it receives an invalid tattoo in the body's request", () => {
    test("Then it should call the response's method 400 and the message 'Error creating the new tattoo'", async () => {
      const path = "/tattoos/add";
      const expectedStatus = 400;
      const expectedMessage = "Error creating the new tattoo";
      const invalidTattoo = {};

      const response = await request(app)
        .post(path)
        .send(invalidTattoo)
        .expect(expectedStatus);

      expect(response.body).toHaveProperty("error", expectedMessage);
    });
  });
});
