import assert from "assert";

describe("Loops", function () {
  it("Should use do...while... statement", function () {
    function usingDoWhile(i) {
      let result = 0;
      do {
        i += 1;
        result += i;
      } while (i < 5);
      return result;
    }
    const result = usingDoWhile(0);
    assert.strictEqual(result, 15);
  });

  it("Should use while statement", function () {
    let n = 0;
    let x = 0;
    while (n < 3) {
      n++;
      x += n;
    }
    assert.strictEqual(x, 6);
  });

  it("Should use break statement", function () {
    let a = [1, 2, 3];
    let result;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === 3) {
        break;
      }
      result = i;
    }
    assert.strictEqual(result, 1);
  });

  it("Should use continue statement", function () {
    let a = [1, 2, 3];
    let result = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] == 2) {
        continue;
      }
      result.push(a[i]);
    }
    assert.deepStrictEqual(result, [1, 3]);
  });

  //Loop through the properties of an object
  it("Should use for...in statement", function () {
    const car = { make: "Ford", model: "Mustang" };
    let result = "";
    for (let x in car) {
      result += car[x] + " ";
    }
    assert.strictEqual(result, "Ford Mustang ");

    const arr = [3, 5, 7];
    arr.foo = "hello";
    let x = [];
    for (let i in arr) {
      x.push(i);
    }
    assert.deepStrictEqual(x, ["0", "1", "2", "foo"]);
  });

  it("Should use for...of statement", function () {
    const arr = [3, 5, 7];
    arr.foo = "hello";
    let x = [];
    for (let i of arr) {
      x.push(i);
    }
    assert.deepStrictEqual(x, [3, 5, 7]);
  });
});
