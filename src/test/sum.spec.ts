import { describe, expect, it } from "vitest";
import { CalcException } from "../errors/calc-exception";
import { makeSum } from "../factories/make-sum";

describe("sum basic calculate", () => {
  it("should sum a + b", () => {
    const result = makeSum(1, 2).sum();
    expect(result).toEqual(expect.any(Number));
  });

  it("should return result equal 4", () => {
    const result = makeSum(2, 2).sum();
    expect(result).toEqual(4);
  });

  it("should not return negative ", () => {
    const result = makeSum(-9, 10).sum();
    expect(result).greaterThanOrEqual(0);
  });

  it("should throw exception", async () => {
    expect(() => makeSum(1, 2).sumException()).throw(CalcException)
  });
});
