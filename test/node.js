import { expect } from "chai";
import { isArguments } from "lodash";
let fs = require("fs");
const os = require("os");
const path = require("path");
const process = require("process");

describe("Errors", function () {
  it("Should return error", function () {
    function throwError() {
      throw new Error("oh no!");
    }
    expect(() => throwError()).to.throw("oh no!");
  });
});

describe("OS", function () {
  it("Should use os.arch()", function () {
    expect(os.arch()).to.equal("x64");
  });
  it("Should use os.homedir()", function () {
    console.log(os.homedir());
  });
});

describe("Path", function () {
  it("Should use path.basename()", function () {
    expect(path.basename("/foo/bar/baz/asdf/quux.html")).to.equal("quux.html");
  });
  it("Should use path.dirname()", function () {
    expect(path.dirname("/foo/bar/baz/asdf/quux.html")).to.equal(
      "/foo/bar/baz/asdf"
    );
  });
  it("Should use path.format()", function () {
    const pathObj = {
      root: "/ignored",
      dir: "/home/user/dir",
      base: "file.txt",
    };
    expect(path.format(pathObj)).to.equal("/home/user/dir/file.txt");
  });
  it("Should use path.isAbsolute()", function () {
    expect(path.isAbsolute("/foo/bar")).to.equal(true);
    expect(path.isAbsolute("/baz/..")).to.equal(true);
    expect(path.isAbsolute("qux/")).to.equal(false);
    expect(path.isAbsolute(".")).to.equal(false);
  });
});

describe.only("File System", function () {
  const fileContent = "Hello content!";
  const currentFolder = process.cwd();
  const file1 = currentFolder + "/test-folder/fs_test_file.txt";
  const file2 =
    "/Users/tongzhang/lambda/sandbox-javascript-node/test-folder/fs_test_file1.txt";
  beforeEach(function () {
    fs.appendFile(file1, fileContent, function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  });
  it("Should use fs.rename()", function () {
    if (!fs.existsSync(file1)) {
      throw new Error(`File ${file1} does not exist.`);
    }

    fs.rename(file1, file2, (err) => {
      if (err) throw err;
      console.log("Renaming completed.");
    });
    fs.unlink(file2, function (err) {
      if (err) throw err;
      console.log("file2 deleted!");
    });
  });

  it("Should use fs.Dir()", function () {
    async function print(path) {
      const dir = await fs.promises.opendir(path);
      for await (const dirent of dir) {
        console.log(dirent.name);
      }
    }
    print("./").catch(console.error);
  });

  it("Should use fs.Stats()", function () {
    const pathsToCheck = [file1, file2];

    for (let i = 0; i < pathsToCheck.length; i++) {
      fs.stat(pathsToCheck[i], function (err, stats) {
        console.log(stats);
      });
    }
  });

  it.skip("Should use fs.readfile()", function () {
    fs.readFile(file1, "utf8", (err, data) => {
      if (err) throw err;
      expect(data).to.equal(fileContent);
    });
  });

  it("Should use fs.write()", function () {
    fs.writeFile(file1, "write to file " + new Date(), (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });
  afterEach(function () {
    if (fs.existsSync(file1)) {
      fs.unlink(file1, function (err) {
        if (err) throw err;
        console.log(`${file1} deleted!`);
      });
    }
  });
});
