import { Sum } from "..";

export function makeSum(a: number, b: number): Sum {
    const sum = new Sum(a, b)
    return sum
} 