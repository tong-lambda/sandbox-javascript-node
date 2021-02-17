import assert from "assert";

describe("Map", function () {
  it("Should explore CRUD methods in map", function () {
    let sayings = new Map();
    sayings.set("dog", "woof");
    sayings.set("cat", "meow");
    sayings.set("elephant", "toot");
    sayings.set(1, "number");
    console.log(sayings);
    assert.strictEqual(sayings.size, 4);
    assert.strictEqual(sayings.get("cat"), "meow");
    assert.strictEqual(sayings.get("fox"), undefined);
    assert.strictEqual(sayings.has("dog"), true);
    assert.strictEqual(sayings.has("fox"), false);
    sayings.delete("dog");
    sayings.delete(1);
    assert.strictEqual(sayings.has("dog"), false);
    assert.strictEqual(sayings.has(1), false);
    sayings.clear();
    assert.strictEqual(sayings.size, 0);
  });
});

describe("Set", function () {
  it("Should explore CRUD methods in set", function () {
    let mySet = new Set();
    mySet.add(1);
    mySet.add("some text");
    mySet.add("foo");
    console.log(mySet);

    assert.strictEqual(mySet.has(1), true);
    mySet.delete("foo");
    assert.strictEqual(mySet.size, 2);
  });
});

describe("Objects", function () {
  it("Should explore methods in objects", function () {
    let myCar1 = new Object();
    myCar1.make = "Ford";
    myCar1.model = "Mustang";
    myCar1.year = 1969;

    let myCar2 = {
      make: "Ford",
      model: "Mustang",
      year: 1969,
    };

    assert.deepStrictEqual(myCar1, myCar2);
    assert.strictEqual(myCar1.make, "Ford");
    assert.strictEqual(myCar1["year"], 1969);
    assert.strictEqual(myCar1.color, undefined);
    assert.deepStrictEqual(Object.keys(myCar2), ["make", "model", "year"]);
    assert.deepStrictEqual(Object.getOwnPropertyNames(myCar2), [
      "make",
      "model",
      "year",
    ]);
  });

  it("Should define an object", function () {
    function Car(make, model, year, owner) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.owner = owner;
      this.displayCar = displayCar;
    }

    function displayCar() {
      const result = `A Beautiful ${this.year} ${this.make} ${this.model}.`;
      return result;
    }

    const car1 = new Car("Toyota", "Camery", 1990, "Kate");
    const car2 = new Car("Toyota", "Camery", 1990, "Kate");
    const car3 = car1;

    assert.strictEqual(car1.displayCar(), "A Beautiful 1990 Toyota Camery.");
    //Comparing objects
    assert.strictEqual(car1 == car2, false);
    assert.strictEqual(car1 === car2, false);
    assert.strictEqual(car1 == car3, true);
    assert.strictEqual(car1 === car3, true);
  });

  it("Should create objects and add methods to it", function () {
    const Manager = {
      name: "John",
      age: 27,
      job: "Software Engineer",
    };

    const Intern = {
      name: "Ben",
      age: 21,
      job: "Software Engineer Intern",
    };

    function sayHi() {
      return `Hello, my name is ${this.name}.`;
    }

    Manager.sayHi = sayHi;
    Intern.sayHi = sayHi;

    assert.strictEqual(Manager.sayHi(), "Hello, my name is John.");
    assert.strictEqual(Intern.sayHi(), "Hello, my name is Ben.");
  });

  it("Should use getter and setter", function () {
    let o = {
      a: 7,
      get b() {
        return this.a + 1;
      },
      set c(x) {
        this.a = x / 2;
      },
    };

    assert.strictEqual(o.a, 7);
    assert.strictEqual(o.b, 8);
    o.c = 50;
    assert.strictEqual(o.a, 25);
    // Delete a property
    delete o.a;
    assert.strictEqual("a" in o, false);
  });
});
