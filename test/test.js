const request = require("supertest");
const app = require("../index.js")
describe("GET /", () => {
    it("first messaeg from vaibhav test ", (done) => {
      request(app).get("/").expect("Hello world from vaibhav", done);
    })
  });