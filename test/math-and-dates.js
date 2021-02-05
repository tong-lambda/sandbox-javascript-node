const assert = require("assert");

const a = -8;
const b = 25;

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
  const unixTimeZero = "01 Jan 1970 00:00:00 GMT";
  let birthday;

  beforeEach(function () {
    birthday = new Date("August 19, 2020 23:15:30");
  });

  it("Should run Date()", function () {
    date1 = new Date("January 1, 2021 03:09:00");
    date2 = new Date("2021-01-01T03:09:00");
    date3 = Date("2021-01-01T03:09:00");
    // The only correct way to instantiate a new Date object is by using the new operator,
    // otherwise it returns a string.
    assert.strictEqual(typeof date1, "object");
    assert.strictEqual(typeof date3, "string");

    assert.strictEqual(date1 === date2, false);
    assert.strictEqual(date1 == date2, false);
    assert.strictEqual(date1.getTime() === date2.getTime(), true);
    assert.strictEqual(date1 - date2, 0);
  });
  //   Static Methods
  //   This assertion runs no longer than 1 second
  it("Should run Date.now()", function () {
    const start = Date.now();
    assert.strictEqual(Math.floor((Date.now() - start) / 1000), 0);
  });
  //It parses a string representation of a date, and returns
  // the number of milliseconds since January 1, 1970, 00:00:00 UTC
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
  // Get day of the month, range 1-31
  it("Should return getDate()", function () {
    assert.strictEqual(birthday.getDate(), 19);
  });
  // Get day of week, range 0-4
  it("Should return getDay()", function () {
    assert.strictEqual(birthday.getDay(), 3);
  });
  it("Should return getFullYear()", function () {
    assert.strictEqual(birthday.getFullYear(), 2020);
  });
  it("Should return getHours()", function () {
    assert.strictEqual(birthday.getHours(), 23);
  });
  it("Should return getMinutes()", function () {
    assert.strictEqual(birthday.getMinutes(), 15);
  });
  // Get the month, range 0-11
  it("Should return getMonth()", function () {
    assert.strictEqual(birthday.getMonth(), 7);
  });
  it("Should return getSeconds()", function () {
    assert.strictEqual(birthday.getSeconds(), 30);
  });
  // Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC.
  it("Should return getTime()", function () {
    assert.strictEqual(birthday.getTime(), 1597904130000);
  });
  it("Should return getTimezoneOffset()", function () {
    assert.strictEqual(birthday.getTimezoneOffset() / 60, 7);
  });
  it("Should return getUTCDate()", function () {
    assert.strictEqual(birthday.getUTCDate(), 20);
  });
  it("Should return getUTCDay()", function () {
    assert.strictEqual(birthday.getUTCDay(), 4);
  });
  // Usually returns 2-3 digits
  it("Should return getYear()", function () {
    assert.strictEqual(birthday.getYear(), 120);
  });
  // Usually returns 4 digits
  it("Should return getFullYear()", function () {
    assert.strictEqual(birthday.getFullYear(), 2020);
  });
  it("Should set the day of the date using setDate()", function () {
    birthday.setDate(24);
    assert.strictEqual(birthday.getDate(), 24);
  });
  it("Should set the day of the date using setFullYear()", function () {
    birthday.setFullYear(2021);
    assert.strictEqual(birthday.getFullYear(), 2021);
  });
  it("Should set the day of the date using setMonth()", function () {
    birthday.setMonth(0);
    assert.strictEqual(birthday.getMonth(), 0);
  });
  it("Should return toDateString()", function () {
    assert.strictEqual(birthday.toDateString(), "Wed Aug 19 2020");
  });
  it("Should return toISOString()", function () {
    assert.strictEqual(birthday.toISOString(), "2020-08-20T06:15:30.000Z");
  });
  it("Should return toJSON()", function () {
    assert.strictEqual(birthday.toJSON(), "2020-08-20T06:15:30.000Z");
  });
  it("Should return toUTCString()", function () {
    assert.strictEqual(birthday.toUTCString(), "Thu, 20 Aug 2020 06:15:30 GMT");
  });
  it("Should return toLocaleDateString()", function () {
    assert.strictEqual(birthday.toLocaleDateString(), "8/19/2020");
  });
  it("Should return toLocaleTimeString()", function () {
    assert.strictEqual(birthday.toLocaleTimeString(), "11:15:30 PM");
  });
  it("Should return toString()", function () {
    assert.strictEqual(
      birthday.toString(),
      "Wed Aug 19 2020 23:15:30 GMT-0700 (Pacific Daylight Time)"
    );
  });
  it("Should return toTimeString()", function () {
    assert.strictEqual(
      birthday.toTimeString(),
      "23:15:30 GMT-0700 (Pacific Daylight Time)"
    );
  });
  it("Should return valueOf()", function () {
    assert.strictEqual(birthday.valueOf(), birthday.getTime());
  });
});
