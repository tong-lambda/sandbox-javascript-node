import { expect } from "chai";

describe("Process", function () {
  it("Should use process.arch", function () {
    expect(process.arch).to.equal("x64");
  });

  it("Should use process.config", function () {
    console.log(process.config);
  });

  it("Should use process.cpuUsage", function () {
    const startUsage = process.cpuUsage();
    console.log(startUsage);
    const now = Date.now();
    while (Date.now() - now < 500);
    console.log(process.cpuUsage(startUsage));
  });

  it("Should use process.env", function () {
    console.log(process.env);
  });

  it("Should use process.execPath", function () {
    console.log(process.execPath);
  });

  it("Should use process.memoryUsage()", function () {
    console.log(process.memoryUsage());
  });

  it("Should use process.versions", function () {
    console.log(process.versions);
  });
});
