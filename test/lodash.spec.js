import assert from "assert";
import _ from "lodash";

describe("Lodash", function () {
  it("Should use chunk()", function () {
    const array = ["a", "b", "c", "d", "e"];
    assert.deepStrictEqual(_.chunk(array, 2), [["a", "b"], ["c", "d"], ["e"]]);
  });

  it("Should use compact()", function () {
    const array = [0, 1, "", 2, false, NaN, 3];
    assert.deepStrictEqual(_.compact(array), [1, 2, 3]);
  });

  it("Should use concat()", function () {
    const array = [1];
    const other = _.concat(array, 2, [3], [[4]]);
    assert.deepStrictEqual(other, [1, 2, 3, [4]]);
    assert.deepStrictEqual(array, [1]);
  });

  it("Should use difference()", function () {
    const array1 = [1, 2];
    const array2 = [2, 3];
    assert.deepStrictEqual(_.difference(array1, array2), [1]);
  });

  it("Should use drop() and dropRight()", function () {
    const array = [1, 2, 3];
    assert.deepStrictEqual(_.drop(array, 1), [2, 3]);
    assert.deepStrictEqual(_.drop(array, 2), [3]);
    assert.deepStrictEqual(_.drop(array, 5), []);

    assert.deepStrictEqual(_.dropRight(array, 1), [1, 2]);
    assert.deepStrictEqual(_.dropRight(array, 2), [1]);
    assert.deepStrictEqual(_.dropRight(array, 5), []);
  });

  it("Should use fill()", function () {
    const array = [1, 2, 3];
    assert.deepStrictEqual(_.fill(array, "a"), ["a", "a", "a"]);
    assert.deepStrictEqual(_.fill(Array(3), 2), [2, 2, 2]);
    assert.deepStrictEqual(_.fill([4, 6, 7, 20], "*", 1, 3), [4, "*", "*", 20]);
  });

  it("Should use findIndex(), find lastIndex()", function () {
    const users = [
      { user: "barney", active: false },
      { user: "fred", active: false },
      { user: "pebbles", active: true },
    ];
    const result = _.findIndex(users, (o) => o.user === "barney");
    assert.strictEqual(result, 0);
    assert.strictEqual(_.findIndex(users, { user: "fred", active: false }), 1);
    assert.strictEqual(_.findIndex(users, { user: "fred", active: true }), -1);
    assert.strictEqual(_.findIndex(users, "active"), 2);
    assert.strictEqual(
      _.findLastIndex(users, (o) => o.active === false),
      1
    );
  });

  it("Should use flatten() and flattenDeep()", function () {
    assert.deepStrictEqual(_.flatten([1, [2, [3, [4]], 5]]), [
      1,
      2,
      [3, [4]],
      5,
    ]);
    assert.deepStrictEqual(_.flattenDeep([1, [2, [3, [4]], 5]]), [
      1,
      2,
      3,
      4,
      5,
    ]);
  });

  it("Should use fromPairs()", function () {
    assert.deepStrictEqual(
      _.fromPairs([
        ["a", 1],
        ["b", 2],
      ]),
      { a: 1, b: 2 }
    );
  });

  it("Should use head()", function () {
    assert.deepStrictEqual(_.head([1, 2, 3]), 1);
    assert.deepStrictEqual(
      _.head([
        ["a", 1],
        ["b", 2],
      ]),
      ["a", 1]
    );
  });

  it("Should use indexOf()", function () {
    assert.strictEqual(_.indexOf([1, 2, 1, 2], 2), 1);
    assert.strictEqual(_.indexOf([1, 2, 1, 2], 2, 2), 3);
  });

  it("Should use last()", function () {
    assert.strictEqual(_.last([1, 2, 3]), 3);
  });
});
