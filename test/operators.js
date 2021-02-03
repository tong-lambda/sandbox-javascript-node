const assert = require("assert");

let a = 2;
const b = 3;
let c = 10;
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
    it("Should return !bool1", function () {
      assert.strictEqual(!bool1, false);
    });
    it("Should return !!bool2", function () {
      assert.strictEqual(!!bool2, false);
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

  describe("% ** += -= ++ --", function () {
    it("Should return c % b", function () {
      assert.strictEqual(c % b, 1);
    });
    it("Should return b ** a", function () {
      assert.strictEqual(b ** a, 9);
    });
    it("Should return a += b", function () {
      assert.strictEqual((a += b), 5);
    });
    it("Should return a -= c", function () {
      assert.strictEqual((a -= c), -5);
    });
    it("Postfix++, asign x to y and then x increments by 1", function () {
      let x = 100;
      const y = x++;
      assert.strictEqual(x, 101);
      assert.strictEqual(y, 100);
    });
    it("Prefix++, x increments by 1 and then assign to y", function () {
      let x = 100;
      const y = ++x;
      assert.strictEqual(x, 101);
      assert.strictEqual(y, 101);
    });
    it("Postfix--, asign x to y and then c decrements by 1", function () {
      let x = 100;
      const y = x--;
      assert.strictEqual(x, 99);
      assert.strictEqual(y, 100);
    });
    it("Prefix--, x decrements by 1 and then assign to y", function () {
      let x = 100;
      const y = --x;
      assert.strictEqual(x, 99);
      assert.strictEqual(y, 99);
    });
  });

  describe("ternary operator", function () {
    let age = 20;
    let status = age >= 18 ? "adult" : "minor";
    it("Should return adult", function () {
      assert.strictEqual(status, "adult");
    });
  });
});
