import { describe, expect, it } from "vitest";
import { makeMult } from "../factories/make-mult";
import { makeSum } from "../factories/make-sum";
import { CalcException } from "../errors/calc-exception";

describe("multiplication basic calculate", () => {
  it("should multiply a * b", () => {
    const response = makeMult(2, 5).Mult();
    expect(response).toEqual(expect.any(Number));
  });
  it("should return result equal 6", () => {
    const response = makeMult(1.2, 5).Mult();
    expect(response).toEqual(6);
  });
  it("should return negative", () => {
    const response = makeMult(-3, 2).Mult();
    expect(response).lessThan(0);
  });
  it("should return zero", () => {
    const response = makeMult(5, 0).Mult();
    expect(response).toEqual(0);
  });
  it("should throw exception", async () => {
    expect(() => makeSum(1, 2).sumException()).throw(CalcException);
  });
});
