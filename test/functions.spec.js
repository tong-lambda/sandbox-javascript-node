import {
  square,
  canTakeObject,
  calculateSquare,
  factorial,
  map,
  f,
  canAccessGlobalVar,
  getScore,
  addSquares,
  outside,
  A,
  namingConflict,
  createPet,
  useArgumentsObject,
  useDefaultParams,
  useRestParams,
  useArrowFunction,
  functionObject,
  variableHoisting as variableHoisting,
  convertStringToNumbers,
} from "../src/functions.js";
import assert from "assert";

describe("Test functions", function () {
  it("Should return the result of square function", function () {
    assert.strictEqual(square(5), 25);
  });

  it("Should return the result of canTakeObject function", function () {
    const mycar = { make: "Honda", model: "Accord", year: 1998 };
    canTakeObject(mycar);
    assert.strictEqual(mycar.make, "Toyota");
  });

  it("Should return the result of calculateSquare function", function () {
    assert.strictEqual(calculateSquare(6), 36);
  });

  it("Should return the result of factorial function", function () {
    assert.strictEqual(factorial(3), 6);
  });

  it("Should return the result of map function", function () {
    const numbers = [-1, 0, 1, 2, 5];
    const result = map(f, numbers);
    assert.deepStrictEqual(result, [-1, 0, 1, 8, 125]);
  });

  it("Should return the result of canAccessGlobalVar function", function () {
    assert.strictEqual(canAccessGlobalVar(), 2);
  });

  it("Should return the result of getScore function", function () {
    assert.strictEqual(getScore(), "globalName scored 700");
  });

  it("Should return the result of addSquares function", function () {
    assert.strictEqual(addSquares(3, 4), 25);
  });

  it("Should return the result of outside function", function () {
    const fn_inside = outside(8);
    const result1 = fn_inside(4);
    assert.strictEqual(result1, 2);

    const result2 = outside(10)(20);
    assert.strictEqual(result2, 0.5);
  });

  it("Should return the result of A function", function () {
    assert.strictEqual(A(3)(2)(1), 6);
  });

  it("Should return the result of namingConflict function", function () {
    assert.strictEqual(namingConflict()(10), 20);
  });

  it("Should return the result of createPet function", function () {
    let pet = createPet("John");
    assert.strictEqual(pet.getName(), "John");
    pet.setName("Oliver");
    pet.setSex("female");
    assert.strictEqual(pet.getName(), "Oliver");
    assert.strictEqual(pet.getSex(), "female");
  });

  it("Should return the result of usingArgumentsObject function", function () {
    const result = useArgumentsObject(", ", "red", "orange", "blue");
    assert.strictEqual(result, "red, orange, blue, ");
  });

  it("Should return the result of useDefaultParams function", function () {
    assert.strictEqual(useDefaultParams(5), 5);
    assert.strictEqual(useDefaultParams(5, 2), 10);
  });

  it("Should return the result of useRestParams function", function () {
    const result = useRestParams(2, 1, 2, 3);
    assert.deepStrictEqual(result, [2, 4, 6]);
  });

  it("Should return the result of useArrowFunction function", function () {
    const words = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
    const result = useArrowFunction(words);
    assert.deepStrictEqual(result, [8, 6, 7, 9]);
  });

  it("should demonstrate how this is handled in arrow functions vs standard functions", async () => {
    assert.strictEqual(functionObject.arrowFunction(), NaN);
    assert.strictEqual(functionObject.standardFunction(), 5);
    assert.deepStrictEqual(functionObject.arrowThisInheritance(), [10, 12]);
    assert.throws(() => functionObject.standardThisInheritance());
  });
});

describe("Variable scope and function hoisting", function () {
  describe("#variableHosting", function () {
    it("Should log varialbe x before x is declared.", function () {
      assert.strictEqual(variableHoisting()(), 6);
    });
  });

  describe("Convert string to numbers", function () {
    describe("#convertStringToNumbers", function () {
      it("Should return numbers.", function () {
        assert.deepStrictEqual(convertStringToNumbers("3", "3"), {
          ingeter: 3,
          float: 3,
        });
      });
    });
  });
});
