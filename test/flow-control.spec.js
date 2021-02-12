import {
  block,
  conditional,
  fruitPrice,
  throwError,
  tryCatchAndFinally,
} from "../src/flow-control.js";
import assert from "assert";

describe("Folw control", function () {
  describe("#block", function () {
    it("Shoud return the result of block", function () {
      assert.strictEqual(block(), 1);
    });
  });

  describe("#conditional", function () {
    context("When a truthy value is provided.", function () {
      it("Shoud return truthy", function () {
        assert.strictEqual(conditional("[]"), "truthy");
      });
    });
    context("When a falsy value is provided.", function () {
      it("Shoud return falsy", function () {
        assert.strictEqual(conditional(""), "falsy");
      });
    });
  });

  describe("#fruitPrice", function () {
    context("When a value Orange is provided.", function () {
      it("Shoud return Oranges fruit price", function () {
        assert.strictEqual(fruitPrice("Oranges"), "Oranges are $0.59 a pound.");
      });
    });
    context("When a value Apples is provided.", function () {
      it("Shoud return Apples fruit price", function () {
        assert.strictEqual(fruitPrice("Apples"), "Apples are $0.32 a pound.");
      });
    });
    context("When an unknown value is provided.", function () {
      it("Shoud return default fruit price", function () {
        assert.strictEqual(
          fruitPrice("Cherrys"),
          "Sorry, we are out of Cherrys."
        );
      });
    });
  });

  describe("#throwError", function () {
    it("Shoud throw error", function () {
      assert.throws(() => throwError());
    });
  });

  describe("#tryCatchAndFinally", function () {
    context("When a valid month number is provided.", function () {
      it("Should return the three letter month name.", function () {
        assert.deepStrictEqual(tryCatchAndFinally(1), {
          runsFinally: true,
          monthName: "Jan",
          errorMsg: undefined,
        });
      });
    });
    context("When a invalid month number is provided.", function () {
      it("Shoud throw error for invalid month", function () {
        assert.deepStrictEqual(tryCatchAndFinally(20), {
          runsFinally: true,
          monthName: undefined,
          errorMsg: "Invalid month number.",
        });
      });
    });
  });
});
