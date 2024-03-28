import { describe, expect, it } from "vitest";
import { CalcException } from "../errors/calc-exception";
import { makeSum } from "../factories/make-sum";

describe("sum basic calculate", () => {
  it("should sum a + b", () => {
    const response = makeSum(1, 2).sum();
    expect(response).toEqual(expect.any(Number));
  });

  it("should return result equal 4", () => {
    const response = makeSum(2, 2).sum();
    expect(response).toEqual(4);
  });

  it("should not return negative ", () => {
    const response = makeSum(-9, 10).sum();
    expect(response).greaterThanOrEqual(0);
  });

  it("should throw exception", async () => {
    expect(() => makeSum(1, 2).sumException()).throw(CalcException)
  });
});
