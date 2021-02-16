import assert from "assert";

// A few ways of creating array
const array1 = [1, 2, 3, 4, 5];
const array2 = Array(1, 2, 3);
export const array3 = new Array(1, 2, 3);

//Assign array to a property of an object
let obj1 = {};
obj1.prop = [1, 2, 3];
let obj2 = { prop: [1, 2, 3] };

//Creating array with float/fractional
const fractionalArray1 = Array.of(9.3);
const fractionalArray2 = [9.3];

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

  it("Should use common iteration", function () {
    const colors1 = ["red", "green", "blue"];
    for (let i = 0; i < colors1.length; i++) {
      console.log(colors1[i]);
    }
  });

  it("Should call forEach()", function () {
    const colors1 = ["red", "green", "blue"];
    for (let i = 0; i < colors1.length; i++) {
      console.log(colors1[i]);
    }
  });

  it("Should call forEach() using arrow functions", function () {
    const colors = ["red", "green", "blue"];
    colors.forEach((color) => console.log(color));
  });

  it("Should call map()", function () {
    const a1 = ["a", "b", "c"];
    const a2 = a1.map((i) => {
      return i.toUpperCase();
    });
    assert.deepStrictEqual(a2, ["A", "B", "C"]);
  });

  it("Should call filter()", function () {
    const a1 = ["a", 10, "b", 20, "c", 30];
    const a2 = a1.filter((i) => {
      return typeof i === "number";
    });
    assert.deepStrictEqual(a2, [10, 20, 30]);
  });

  it("Should call every()", function () {
    function isNumber(value) {
      return typeof value === "number";
    }
    const a1 = [1, 2, 3];
    assert.strictEqual(a1.every(isNumber), true);
    const a2 = [1, "2", 3];
    assert.strictEqual(a2.every(isNumber), false);
  });

  it("Should call some()", function () {
    function isNumber(value) {
      return typeof value === "number";
    }
    const a1 = [1, 2, 3];
    assert.strictEqual(a1.some(isNumber), true);
    const a2 = [1, "2", 3];
    assert.strictEqual(a2.some(isNumber), true);
    const a3 = ["1", "2", "3"];
    assert.strictEqual(a3.some(isNumber), false);
  });

  it("Should call reduce()", function () {
    const a = [10, 20, 30];
    let total = a.reduce((accomulator, currentValue) => {
      return accomulator + currentValue;
    }, 0);
    assert.strictEqual(total, 60);
  });
});
