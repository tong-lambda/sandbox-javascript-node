import calculateArea from "../src/modules/square.js";
import assert from "assert";
// let calculateArea = require("../src/modules/square.js");
// import assert from 'assert';

describe("Test modules", function () {
  it("Should return total area", function () {
    const testSquare = calculateArea(6);
    assert.strictEqual(testSquare, 36);
  });
});
