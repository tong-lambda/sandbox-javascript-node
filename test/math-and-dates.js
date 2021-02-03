const assert = require("assert");

const a = -8;
const b = 25;

const unixTimeZero = "01 Jan 1970 00:00:00 GMT";
const birthday = new Date("August 19, 2020 23:15:30");

describe("Math", function () {
  it("Should return abs(a)", function () {
    assert.strictEqual(Math.abs(a), 8);
  });
  it("Shoud return power(b, 0.5)", function () {
    assert.strictEqual(Math.pow(b, 0.5), 5);
  });
  // Negative numbers don't have a real square root)
  // due to "even" and "odd" roots laying close to each other,
  // and limits in the floating number precision,
  // negative bases with fractional exponents always return NaN
  it("Shoud return power(a, 1/3)", function () {
    assert.strictEqual(Math.pow(a, 1 / 3), NaN);
  });
  it("Should return exp(0)", function () {
    assert.strictEqual(Math.exp(0), 1);
  });
  it("Should return exp(1)", function () {
    assert.strictEqual(Math.exp(1), Math.E);
  });
  it("Should return log10(100000)", function () {
    assert.strictEqual(Math.log10(100000), 5);
  });
  it("Should return floor(5.95)", function () {
    assert.strictEqual(Math.floor(5.95), 5);
  });
  it("Should return floor(-5.95)", function () {
    assert.strictEqual(Math.floor(-5.95), -6);
  });
  it("Should return ceil(5.05)", function () {
    assert.strictEqual(Math.ceil(5.05), 6);
  });
  it("Should return ceil(-7.000005)", function () {
    assert.strictEqual(Math.ceil(-7.000005), -7);
  });
  it("Should return min of numbers", function () {
    assert.strictEqual(Math.min(1, 3, -10), -10);
  });
  it("Should return max of numbers", function () {
    assert.strictEqual(Math.max(1, 3, -10), 3);
  });
  it("Should return a random number between 0 and 1", function () {
    const x = Math.random();
    assert.strictEqual(x * Math.floor(x), 0);
  });
  it("Should return round(0.9)", function () {
    assert.strictEqual(Math.round(0.9), 1);
  });
  it("Should return round(-2.1)", function () {
    assert.strictEqual(Math.round(-2.1), -2);
  });
  it("Should return trunc(2.9)", function () {
    assert.strictEqual(Math.trunc(2.9), 2);
  });
  it("Should return trunc(-2.9)", function () {
    assert.strictEqual(Math.trunc(-2.9), -2);
  });
  it("Should return sqrt(b)", function () {
    assert.strictEqual(Math.sqrt(b), 5);
  });
  it("Should return sqrt(a)", function () {
    assert.strictEqual(Math.sqrt(a), NaN);
  });
  it("Should return cbrt(a)", function () {
    assert.strictEqual(Math.cbrt(a), -2);
  });
  it("Should return the sign of a", function () {
    assert.strictEqual(Math.sign(a), -1);
  });
  it("Should return the sign of b", function () {
    assert.strictEqual(Math.sign(b), 1);
  });
});

describe("Dates", function () {
  it("Should run Date()", function () {
    date1 = new Date("January 1, 2021 03:09:00");
    date2 = new Date("2021-01-01T03:09:00");
    date3 = Date("2021-01-01T03:09:00");
    // The only correct way to instantiate a new Date object is by using the new operator,
    // otherwise it returns a string.
    assert.strictEqual(typeof date1, "object");
    assert.strictEqual(typeof date3, "string");

    assert.strictEqual(date1 === date2, false);
    assert.strictEqual(date1 - date2, 0);
  });
  //   Static Methods
  //   This assertion runs no longer than 1 second
  it("Should run Date.now()", function () {
    const start = Date.now();
    console.log(start);
    assert.strictEqual(Math.floor((Date.now() - start) / 1000), 0);
  });
  it("Should run Date.parse()", function () {
    assert.strictEqual(Date.parse(unixTimeZero), 0);
  });
  it("Should run Date.UTC()", function () {
    date1 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
    date2 = new Date("1899-12-31T00:00:00.000Z");

    // The second param represents month which starts from 0, not 1
    date3 = new Date(Date.UTC(2021, 0, 2, 3, 4, 5));
    date4 = new Date("2021-01-02T03:04:05.000Z");
    assert.strictEqual(date1 - date2, 0);
    assert.strictEqual(date3 - date4, 0);
  });
  // Instance Methods
  it("Should return Date.prototype.getDate()", function () {
    assert.strictEqual(birthday.getDate(), 19);
  });
});
