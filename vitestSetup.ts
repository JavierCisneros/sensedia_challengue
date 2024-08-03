import { beforeAll, vi } from "vitest";

//Mocking the router
beforeAll(() => {
  vi.mock("next/router", () => require("next-router-mock"));
  vi.mock("next/link", () => require("next-router-mock"));
});
