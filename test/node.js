import { expect } from "chai";
import fs from "fs";
import os from "os";
import path from "path";
import process from "process";
import { promisify } from "util";

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

describe("File System", function () {
  const unlinkAsync = promisify(fs.unlink);
  const renameAsync = promisify(fs.rename);

  const fileContent = "Hello content!";
  const currentFolder = process.cwd();
  const file1 = currentFolder + "/test-folder/fs_test_file.txt";
  const file2 = currentFolder + "/test-folder/fs_test_file1.txt";
  console.log("P0", currentFolder);

  beforeEach(function (done) {
    fs.appendFile(file1, fileContent, function (err) {
      if (err) return done(err);
      console.log("Saved!");
      done();
    });
  });

  afterEach(async function () {
    if (fs.existsSync(file1)) {
      await unlinkAsync(file1);
      console.log(`${file1} deleted!`);
    }
  });

  it("Should use fs.rename()", async function () {
    if (!fs.existsSync(file1)) {
      throw new Error(`File ${file1} does not exist.`);
    }

    await renameAsync(file1, file2);
    console.log("Renaming completed.");

    await unlinkAsync(file2);
    console.log("file2 deleted!");
  });

  it("Should use fs.Dir()", async function () {
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

  it("Should use fs.readfile()", function (done) {
    fs.readFile(file1, "utf8", (err, data) => {
      if (err) return done(err);
      expect(data).to.equal(fileContent);
      done();
    });
  });

  it("Should use fs.write()", function (done) {
    fs.writeFile(file1, "write to file " + new Date(), (err) => {
      if (err) return done(err);
      console.log("The file has been saved!");
    });
    fs.readFile(file1, "utf8", (err, data) => {
      if (err) return done(err);
      expect(data).to.contains("write to file");
      done();
    });
  });
});
