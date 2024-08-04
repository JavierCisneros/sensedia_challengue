import { GET } from "../app/api/days/route";
import { describe, expect, it } from "vitest";
describe("API days", () => {
  it("should return 200", async () => {
    const response = await GET();
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body).toHaveProperty("days");
  });
  it("should return an array of random days", async () => {
    const response = await GET();
    const body = await response.json();
    expect(body.days).toBeInstanceOf(Array);
  });
});
