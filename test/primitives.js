const assert = require("assert");

describe("Primitives tests", function () {
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
    it("Should return a number type", function () {
      assert.strictEqual(typeof 999, "number");
    });
    it("Should return a bigInt", function () {
      assert.strictEqual(typeof Number.MAX_SAFE_INTEGER, "number");
    });
    it("Should convert a number to number", function () {
      assert.strictEqual(Number(999), 999);
    });
    it("Should convert string to number", function () {
      assert.strictEqual(Number("999"), 999);
    });
    it("Should convert decimal to number", function () {
      assert.strictEqual(Number("999.99"), 999.99);
    });
    it("Should convert a boolean into a number", function () {
      assert.strictEqual(Number(true), 1);
      assert.strictEqual(Number(false), 0);
    });
  });

  describe("Strings", function () {
    it("Should return a string type", function () {
      assert.strictEqual(typeof "test string", "string");
    });
    it("Should convert a number to string", function () {
      assert.strictEqual(String(999), "999");
    });
    it("Should convert a boolean to string", function () {
      assert.strictEqual(String(true), "true");
      assert.strictEqual(String(false), "false");
    });
    it("Should return substring", function () {
      const string = "test string";
      const substring = string.substr(1, 2);
      assert.strictEqual(substring, "es");
    });
  });

  describe("Null", function () {
    it("The type of null is object", function () {
      assert.strictEqual(typeof null, "object");
    });
    it("Null is falsy", function () {
      assert.strictEqual(Boolean(null), false);
    });
    it("Variable is null when specifically assigned", function () {
      let testVar = null;
      assert.strictEqual(testVar, null);
    });
  });

  describe("Undefined", function () {
    it("The type of undefined is undefined", function () {
      assert.strictEqual(typeof undefined, "undefined");
    });
    it("Null is not strictly equals to undefined", function () {
      assert.notStrictEqual(null, undefined);
    });
    it("Undefined is falsy", function () {
      assert.strictEqual(Boolean(undefined), false);
    });
    it("Null loosely equals to undefined", function () {
      assert.strictEqual(null == undefined, true);
    });
    it("Variable is undefined when no value assigned", function () {
      let testVar;
      assert.strictEqual(testVar, undefined);
    });
  });

  describe("Differences between null and undefined", function () {
    let logHi = (str = "hi") => {
      return str;
    };
    it("Should return null when passing in null as param", function () {
      assert.strictEqual(logHi(null), null);
    });
    it("Should return hi when passing in undefined as param", function () {
      assert.strictEqual(logHi(undefined), "hi");
    });
  });

  describe("Symbols", function () {
    const symbol1 = Symbol("foobar");
    const symbol2 = Symbol("foobar");
    it("Symbol1 and symbol2 are not equal since symbols are unique", function () {
      assert.strictEqual(symbol1 === symbol2, false);
    });

    // Examples of well-known symbols
    it("Should return the first index of the searched word", function () {
      assert.strictEqual("foobar".search("bar"), 3);
    });
  });
});
