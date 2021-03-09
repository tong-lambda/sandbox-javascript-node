import { expect } from "chai";
import util from "util";

describe("Util", function () {
  it("Should use util.format()", function () {
    expect(util.format(1, 2, 3)).to.equal("1 2 3");
    expect(util.format("%s:%s", "foo", "bar")).to.equal("foo:bar");
    expect(util.format("%s:%s", "foo")).to.equal("foo:%s");
    expect(util.format("%s:%s", "foo", "bar", "baz")).to.equal("foo:bar baz");
  });

  it("Should use util.types", function () {
    expect(util.types.isBooleanObject(false)).to.equal(false);
    expect(util.types.isBooleanObject(true)).to.equal(false);
    expect(util.types.isBooleanObject(new Boolean(false))).to.equal(true);
    expect(util.types.isBooleanObject(new Boolean(true))).to.equal(true);
    expect(util.types.isBooleanObject(Boolean(false))).to.equal(false);
    expect(util.types.isBooleanObject(Boolean(true))).to.equal(false);
    expect(util.types.isDate(new Date())).to.equal(true);
    expect(util.types.isRegExp(/abc/)).to.equal(true);
    expect(util.types.isSet(new Set())).to.equal(true);
  });
});

describe("Timer", function () {
  it("Should use setTimeOut", function (done) {
    const start = Date.now();
    setTimeout(() => {
      console.log(Date.now() - start);
      done();
    }, 1000);
  });

  it("Should use setTimeOut", function () {
    const start = Date.now();
    const setTimeOutPromise = new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    setTimeOutPromise.then((value) => {
      console.log(Date.now() - start);
    });
    return setTimeOutPromise;
  });

  it("Should use setTimeOut", async function () {
    const start = Date.now();
    const setTimeOutPromise = new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    await setTimeOutPromise;
    console.log(Date.now() - start);
  });
});
