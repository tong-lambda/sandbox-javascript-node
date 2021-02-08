const assert = require("assert");

describe("Falsy values", function () {
  it("Should return a complete list of falsy values.", function () {
    assert.strictEqual(isValueFalsy(false), true);
    assert.strictEqual(isValueFalsy(0), true);
    assert.strictEqual(isValueFalsy(""), true);
    assert.strictEqual(isValueFalsy(null), true);
    assert.strictEqual(isValueFalsy(undefined), true);
    assert.strictEqual(isValueFalsy(NaN), true);
  });
  it("Should return a list of truthy values.", function () {
    assert.strictEqual(isValueFalsy(true), false);
    assert.strictEqual(isValueFalsy({}), false);
    assert.strictEqual(isValueFalsy([]), false);
    assert.strictEqual(isValueFalsy("0"), false);
    assert.strictEqual(isValueFalsy("false"), false);
    assert.strictEqual(isValueFalsy(-42), false);
    assert.strictEqual(isValueFalsy(12n), false);
    assert.strictEqual(isValueFalsy(3.14), false);
    assert.strictEqual(isValueFalsy(-3.14), false);
    assert.strictEqual(isValueFalsy(Infinity), false);
    assert.strictEqual(isValueFalsy(-Infinity), false);
  });
});

function isValueFalsy(value) {
  if (value) {
    return false;
  } else {
    return true;
  }
}
