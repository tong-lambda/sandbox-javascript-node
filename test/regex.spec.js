import assert from "assert";

describe("RegEx", function () {
  it("Should run exec() success", function () {
    const regex = /foo*/g;
    const str = "table football, foosball";
    let match = regex.exec(str);
    let index = [];
    while (match) {
      index.push(regex.lastIndex);
      match = regex.exec(str);
    }
    assert.deepStrictEqual(index, [9, 19]);
  });

  it("Should run exec() fail", function () {
    const str = "table dog, cat";
    const match = /foo*/g.exec(str);
    assert.deepStrictEqual(match, null);
    assert.deepStrictEqual(/foo*/g.lastIndex, 0);
  });

  it("Should run test()", function () {
    const str = "table football";
    const regex = /foo*/;
    const globalRegex = /foo*/g;

    assert.strictEqual(regex.test(str), true);
    assert.strictEqual(globalRegex.lastIndex, 0);
    assert.strictEqual(globalRegex.test(str), true);
    assert.strictEqual(globalRegex.lastIndex, 9);
    assert.strictEqual(globalRegex.test(str), false);
  });

  it("Should run match()", function () {
    const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
    const found = paragraph.match(/[A-Z]/g);
    assert.deepStrictEqual(found, ["T", "I"]);
  });

  it("Should run matchAll()", function () {
    const str = "test1test2";
    const array = [...str.matchAll(/t(e)(st(\d?))/g)];
    assert.deepStrictEqual(array[0].slice(0, 3), ["test1", "e", "st1"]);
    assert.deepStrictEqual(array[1].slice(0, 3), ["test2", "e", "st2"]);
  });

  it("Should run replace() and replaceAll()", function () {
    const p = "dog dog dog";
    const p1 = "Dog Dog Dog";
    assert.strictEqual(p.replace("dog", "monkey"), "monkey dog dog");
    assert.strictEqual(p1.replace(/Dog/i, "monkey"), "monkey Dog Dog");
    assert.strictEqual(p.replace(/dog/g, "monkey"), "monkey monkey monkey");
  });

  it("Should run search()", function () {
    const p = "The car.";
    // any character that is not a word character or whitespace
    const match = p.search(/[^\w\s]/g);
    //return the index of that character
    assert.strictEqual(match, 7);
    assert.strictEqual(p[match], ".");
  });

  it("Should run split()", function () {
    const str = "The quick brown fox jumps over the lazy dog.";
    const words = str.split(" ");
    assert.strictEqual(words[3], "fox");
    const chars = str.split("");
    assert.strictEqual(chars[8], "k");
  });

  it("Should run split() with regex", function () {
    const str = "Hi! How are you? Good.";
    //split by punctuations
    const words = str.split(/[^\w\s]/g);
    assert.deepStrictEqual(words, ["Hi", " How are you", " Good", ""]);
  });
});
