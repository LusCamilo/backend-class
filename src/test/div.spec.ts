import { describe, expect, it } from "vitest";
import { makeDiv } from "../factories/make-div";
import { CalcException } from "../errors/calc-exception";

describe("division basic calculate", () => {
  it("should divide a / b", () => {
    const response = makeDiv(4, 2).div();
    expect(response).toEqual(expect.any(Number));
  });

  it("should return result equal 4", () => {
    const response = makeDiv(8, 2).div();
    expect(response).toEqual(4);
  });
  it("should return result equal infinity", () => {
    const response = makeDiv(2, 0).div();
    expect(response).toEqual(Infinity);
  });
  it("should return result equal NaN", () => {
    const response = makeDiv(0, 0).div();
    expect(response).toEqual(NaN);
  });
  it("should throw exception", async () => {
    expect(() => makeDiv(1, 2).divException()).throw(CalcException);
  });
});
