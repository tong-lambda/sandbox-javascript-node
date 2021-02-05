const assert = require("assert");

const num = 0;
const obj = new String("0");
const str = "0";

describe("Equality and sameness", function () {
  it("Strict equality using ===", function () {
    assert.strictEqual(num === obj, false);
    assert.strictEqual(num === str, false);
    assert.strictEqual(null === undefined, false);
    assert.strictEqual(null === NaN, false);
  });
  it("Loose equality using ==", function () {
    assert.strictEqual(num == obj, true);
    assert.strictEqual(num == str, true);
    assert.strictEqual(null == undefined, true);
    assert.strictEqual(null == NaN, false);
  });
  it("Object.is()", function () {
    assert.strictEqual(Object.is(num, obj), false);
    assert.strictEqual(Object.is(num, str), false);
    assert.strictEqual(Object.is(null, undefined), false);
    assert.strictEqual(Object.is(null, NaN), false);
  });
});
