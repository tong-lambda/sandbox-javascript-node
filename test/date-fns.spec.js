import { compareAsc, format, isValid } from "date-fns";
import assert from "assert";

describe("Explore date-fns", function () {
  it("Should use format()", function () {
    assert.strictEqual(
      format(new Date(2014, 1, 11), "yyyy-MM-dd"),
      "2014-02-11"
    );
  });

  it("Should use sort()", function () {
    const dates = [
      new Date(1995, 6, 2),
      new Date(1987, 1, 11),
      new Date(1989, 6, 10),
    ];
    dates.sort(compareAsc);
    const years = dates.map((x) => format(x, "yyyy"));
    assert.deepStrictEqual(years, ["1987", "1989", "1995"]);
  });

  it("Should use isValid()", function () {
    assert.strictEqual(isValid("2021-01-01"), false);
    assert.strictEqual(isValid(new Date("2021-01-01")), true);
  });
});
