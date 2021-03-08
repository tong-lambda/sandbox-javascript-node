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
  it("Should use path.join()", function () {
    expect(path.join("/foo", "bar", "baz/asdf", "quux", "..")).to.equal(
      "/foo/bar/baz/asdf"
    );
    expect(() => path.join("foo", {}, "bar")).to.throw(
      'The "path" argument must be of type string. Received an instance of Object'
    );
  });
});

describe("File System", function () {
  const unlinkAsync = promisify(fs.unlink);
  const renameAsync = promisify(fs.rename);
  const statAsync = promisify(fs.stat);
  const writeAsync = promisify(fs.write);
  const readAsync = promisify(fs.read);

  const fileContent = "Hello content!";
  const workingDirectory1 = process.cwd();
  const workingDirectory2 = __dirname;
  console.log("working directory 1", workingDirectory1);
  console.log("working directory 2", workingDirectory2);

  const file1 = path.join(workingDirectory1, "test/fs_test_file.txt");
  const file2 = path.join(workingDirectory2, "/fs_test_file1.txt");

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
      for (const dirent of dir) {
        console.log(dirent.name);
      }
    }
    await print("./").catch(console.error);
  });

  it("Should use fs.stat()", async function () {
    const pathsToCheck = [file1];

    for (let i = 0; i < pathsToCheck.length; i++) {
      const stats = await statAsync(pathsToCheck[i]);
      console.log(stats);
    }
  });

    it("Should use fs.readfile()", function (done) {
      fs.readFile(file1, "utf8", (err, data) => {
        if (err) return done(err);
        expect(data).to.equal(fileContent);
        done();
      });
    });

    it("Should use fs.write()", async function () {
      writeAsync(file1, "write to file " + new Date()).then(
        readAsync(file1, "utf8", (data) => {
          expect(data).to.contains("write to file");
        })
      );
    });
});
