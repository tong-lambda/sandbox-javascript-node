import {
  array1,
  array2,
  array3,
  obj1,
  obj2,
  fractionalArray1,
  fractionalArray2,
} from "../src/arrays.js";
import assert from "assert";

describe("Explore arrays basic", function () {
  it("Should return array1, array2, array3", function () {
    assert.deepStrictEqual(array1, [1, 2, 3, 4, 5]);
    assert.deepStrictEqual(array2, [1, 2, 3]);
    assert.deepStrictEqual(array3, [1, 2, 3]);
    //access using property accessors
    assert.strictEqual(array1[2], 3);
    assert.strictEqual(array1["length"], 5);
  });

  it("Should return obj1, obj2", function () {
    assert.deepStrictEqual(obj1, { prop: [1, 2, 3] });
    assert.deepStrictEqual(obj2, { prop: [1, 2, 3] });
  });

  it("Should return fractionalArray1, fractionalArray2", function () {
    assert.deepStrictEqual(fractionalArray1, [9.3]);
    assert.deepStrictEqual(fractionalArray2, [9.3]);
  });
});

describe("Expore array methods", function () {
  let array1;
  let array2;
  let myArray;
  let reversedArray;
  beforeEach(function () {
    array1 = [1, 2, 3];
    array2 = ["a", "b", "c"];
    myArray = new Array("Wind", "Rain", "Fire");
    reversedArray = [3, 2, 1];
  });
  it("Should call concat()", function () {
    assert.deepStrictEqual(array1.concat(array2), [1, 2, 3, "a", "b", "c"]);
  });

  it("Should call join()", function () {
    assert.strictEqual(myArray.join(), "Wind,Rain,Fire");
  });

  it("Should call join('-')", function () {
    assert.strictEqual(myArray.join("-"), "Wind-Rain-Fire");
  });

  it("Should call push()", function () {
    array1.push(4);
    assert.deepStrictEqual(array1, [1, 2, 3, 4]);
  });

  it("Should call pop()", function () {
    array1.pop();
    assert.deepStrictEqual(array1, [1, 2]);
  });

  it("Should call shift()", function () {
    let element = array1.shift();
    assert.deepStrictEqual(element, 1);
    assert.deepStrictEqual(array1, [2, 3]);
  });

  it("Should call unshift()", function () {
    array1.unshift(4, 5);
    assert.deepStrictEqual(array1, [4, 5, 1, 2, 3]);
  });

  it("Should call slice()", function () {
    let slicedArray = array1.slice(1, 2);
    assert.deepStrictEqual(slicedArray, [2]);
    //slice() does not change the original array
    assert.deepStrictEqual(array1, [1, 2, 3]);
  });

  it("Should call splice()", function () {
    let longArray = new Array("1", "2", "3", "4", "5");
    //replaces 3 elements at index 1
    longArray.splice(1, 3, "a", "b", "c", "d");
    assert.deepStrictEqual(longArray, ["1", "a", "b", "c", "d", "5"]);
  });

  it("Should call reverse()", function () {
    reversedArray.reverse();
    assert.deepStrictEqual(reversedArray, [1, 2, 3]);
  });

  it("Should call sort()", function () {
    reversedArray.sort();
    assert.deepStrictEqual(reversedArray, [1, 2, 3]);
    myArray.sort();
    assert.deepStrictEqual(myArray, ["Fire", "Rain", "Wind"]);
  });

  it("Should call indexOf()", function () {
    assert.deepStrictEqual(myArray.indexOf("Rain"), 1);
    assert.deepStrictEqual(array3.indexOf("abc"), -1);
  });

  it("Should call lastIndexOf()", function () {
    const array3 = ["a", "a", "a"];
    assert.deepStrictEqual(array3.lastIndexOf("a"), 2);
  });
});
