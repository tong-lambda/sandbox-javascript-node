import {
  default as squareArea,
  name as squareName,
} from "../src/modules/square.js";
import {
  default as circleArea,
  name as circleName,
} from "../src/modules/circle.js";
import calculateTotalArea from "../src/main.js";
import assert from "assert";

describe("Test modules", function () {
  it("Should return square area", function () {
    console.log(squareName);
    const testSquare = squareArea(6);
    assert.strictEqual(testSquare, 36);
  });
  it("Should return circle area", function () {
    console.log(circleName);
    const testCircle = circleArea(6);
    assert.strictEqual(testCircle, 113.04);
  });
  it("Should return total area", function () {
    const testTotal = calculateTotalArea(6, 6);
    assert.strictEqual(Math.round(testTotal), 149);
  });
});
