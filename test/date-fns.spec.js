import { compareAsc, format, isValid } from "date-fns";
import { expect } from "chai";

describe("Explore date-fns", function () {
  it("Should use format()", function () {
    expect(format(new Date(2014, 1, 11), "yyyy-MM-dd")).to.equal("2014-02-11");
  });

  it("Should use sort()", function () {
    const dates = [
      new Date(1995, 6, 2),
      new Date(1987, 1, 11),
      new Date(1989, 6, 10),
    ];
    dates.sort(compareAsc);
    const years = dates.map((x) => format(x, "yyyy"));
    expect(years).to.deep.equal(["1987", "1989", "1995"]);
  });

  it("Should use isValid()", function () {
    expect(isValid("2021-01-01")).to.equal(false);
    expect(isValid(new Date("2021-01-01"))).to.equal(true);
  });
});
