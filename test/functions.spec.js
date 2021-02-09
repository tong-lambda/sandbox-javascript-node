import {
  square,
  canTakeObject,
  calculateSquare,
  factorial,
  map,
  f,
} from "../src/functions.js";
import assert from "assert";

describe("Test functions", function () {
  it("Should return the result of square function", function () {
    assert.strictEqual(square(5), 25);
  });

  it("Should return the result of canTakeObject function", function () {
    const mycar = { make: "Honda", model: "Accord", year: 1998 };
    canTakeObject(mycar);
    assert.strictEqual(mycar.make, "Toyota");
  });

  it("Should return the result of calculateSquare function", function () {
    assert.strictEqual(calculateSquare(6), 36);
  });

  it("Should return the result of factorial function", function () {
    assert.strictEqual(factorial(3), 6);
  });
  it("Should return the result of map function", function () {
    const numbers = [-1, 0, 1, 2, 5];
    const result = map(f, numbers);
    console.log(result);
    assert.strictEqual(result.length, 5);
    assert.strictEqual(result[0], -1);
    assert.strictEqual(result[1], 0);
    assert.strictEqual(result[2], 1);
    assert.strictEqual(result[3], 8);
    assert.strictEqual(result[4], 125);
  });
});
