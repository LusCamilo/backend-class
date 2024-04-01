import { describe, expect, it } from "vitest";
import { makeSub } from "../factories/make-sub";
import { CalcException } from "../errors/calc-exception";

describe("division basic calculate", () => {
  it("should divide a - b", () => {
    const response = makeSub(4, 2).sub();
    expect(response).toEqual(expect.any(Number));
  });

  it("should return result equal 4", () => {
    const response = makeSub(6, 2).sub();
    expect(response).toEqual(4);
  });

  it("should return negative ", () => {
    const response = makeSub(9, 10).sub();
    expect(response).lessThanOrEqual(0);
  });

  it("should throw exception", () => {
    expect(() => makeSub(1, 2).subException()).throw(CalcException);
  });
});
