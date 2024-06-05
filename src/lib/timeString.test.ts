import { describe } from "node:test";
import { timeString } from "./timeString";

describe("function timeString", () => {
  test("get correct time string", () => {
    expect(timeString(123)).toBe("02 : 03");
    expect(timeString(123)).toBeDefined();
  });
});
