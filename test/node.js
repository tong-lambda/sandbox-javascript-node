import { expect } from "chai";
let fs = require("fs");
const os = require("os");
const path = require("path");

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
    expect(os.homedir()).to.equal("/Users/tongzhang");
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

describe("File System", function () {
  const file1 =
    "/Users/tongzhang/lambda/sandbox-javascript-node/test-folder/fs_test_file.txt";
  const file2 =
    "/Users/tongzhang/lambda/sandbox-javascript-node/test-folder/fs_test_file1.txt";
  it.skip("Should use fs.rename()", function () {
    fs.rename(file2, file1, (err) => {
      if (err) throw err;
      console.log("renamed complete");
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

  it("Should use fs.open()", function () {
    fs.open(file1, "r", (err, fd) => {
      if (err) {
        if (err.code === "ENOENT") {
          console.error("myfile does not exist");
          return;
        }

        throw err;
      }

      try {
        console.log("Runs here");
        console.log(fd);
      } finally {
        fs.close(fd, (err) => {
          if (err) throw err;
        });
      }
    });
  });

  it.skip("Should use fs.write()", function () {
    fs.writeFile(file1, "write to file " + new Date(), (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });
});
