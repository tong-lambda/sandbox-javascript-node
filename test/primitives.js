const assert = require("assert");
describe("Primitives test", function () {
  describe("Booleans", function () {
    it("Should return true", function () {
      assert.strictEqual(true, true);
    });
    it("Should return false", function () {
      assert.strictEqual(false, false);
    });
    it("True should not equal false", function () {
      assert.notStrictEqual(false, true);
    });
  });

  describe("Numbers", function () {
    it("should return a number type", function () {
      assert.strictEqual(typeof 999, "number");
    });
    it("should convert a number to number", function () {
      assert.strictEqual(Number(999), 999);
    });
    it("should convert string to number", function () {
      assert.strictEqual(Number("999"), 999);
    });
    it("should convert decimal to number", function () {
      assert.strictEqual(Number("999.99"), 999.99);
    });
    it("should convert a boolean into a number", function () {
      assert.strictEqual(Number(true), 1);
      assert.strictEqual(Number(false), 0);
    });
  });
});
