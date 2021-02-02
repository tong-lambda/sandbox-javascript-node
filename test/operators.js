const assert = require("assert");
const a = 2;
const b = 3;
const c = 10;
const bool1 = true;
const bool2 = false;

describe("Operators tests", function () {
  describe("+ - * /", function () {
    it("Should return a + b", function () {
      assert.strictEqual(a + b, 5);
    });
    it("Should return b - a", function () {
      assert.strictEqual(b - a, 1);
    });
    it("Should return a * b", function () {
      assert.strictEqual(a * b, 6);
    });
    it("Should return c / a", function () {
      assert.strictEqual(c / a, 5);
    });
    it("Should return integer result of c / b", function () {
      assert.strictEqual(parseInt(c / b), 3);
    });
  });

  describe("&& || !", function () {
    it("Should return bool1 && bool2", function () {
      assert.strictEqual(bool1 && bool2, false);
    });
    it("Should return bool1 || bool2", function () {
      assert.strictEqual(bool1 || bool2, true);
    });
  });

  describe("=== !==", function () {
    it("Should return a === b", function () {
      assert.strictEqual(a === b, false);
    });
    it("Should return bool1 || bool2", function () {
      assert.strictEqual(a !== c, true);
    });
  });

  describe("condition operator", function () {
    let age = 20;
    let status = age >= 18 ? "adult" : "minor";
    it("Should return adult", function () {
      assert.strictEqual(status, "adult");
    });
  });
});
