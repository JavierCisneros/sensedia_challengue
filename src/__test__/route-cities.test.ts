import { GET } from "../app/api/cities/route";
import { describe, expect, it } from "vitest";
describe("API cities", () => {
  it("should return 200", async () => {
    const response = await GET();
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body).toHaveProperty("cities");
  });

  it("should return a random city", async () => {
    const response = await GET();
    const body = await response.json();
    expect(body.cities).toBeDefined();
  });
});
