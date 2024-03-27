import { CalcException } from "./errors/calc-exception";

export class Sum {
  a: number;
  b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  sum() {
    return this.a + this.b;
  }

  sumException() {
    throw new CalcException();
  }
}

export class Div {
  a: number;
  b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  div() {
    return this.a / this.b;
  }

  divException() {
    throw new CalcException();
  }
}

export class Sub {
  a: number;
  b: number;
  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  sub() {
    return this.a - this.b;
  }
  
  subException() {
    throw new CalcException();
  }
}

export class Mult {
  a: number;
  b: number;
  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  Mult() {
    return this.a * this.b;
  }
  
  MultException() {
    throw new CalcException();
  }
}
