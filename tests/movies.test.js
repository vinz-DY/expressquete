const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return a movie by ID", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});


describe("GET /api/movies/:id", () => {
  it("should return all movies", async () => {
      const response = await request(app).get("/api/movies/4");
    
    expect(response.headers["content-type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
      
  });
});
