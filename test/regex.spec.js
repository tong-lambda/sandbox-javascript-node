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
    const regex = /foo*/g;
    const str = "table dog, cat";
    const match = regex.exec(str);
    assert.deepStrictEqual(match, null);
    assert.deepStrictEqual(regex.lastIndex, 0);
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
    const regex = /[A-Z]/g;
    const found = paragraph.match(regex);
    assert.deepStrictEqual(found, ["T", "I"]);
  });

  it("Should run matchAll()", function () {
    const regexp = /t(e)(st(\d?))/g;
    const str = "test1test2";

    const array = [...str.matchAll(regexp)];
    assert.deepStrictEqual(array[0].slice(0, 3), ["test1", "e", "st1"]);
    assert.deepStrictEqual(array[1].slice(0, 3), ["test2", "e", "st2"]);
  });

  it("Should run replace() and replaceAll()", function () {
    const p = "dog dog dog";
    const p1 = "Dog Dog Dog";
    const regex = /Dog/i;
    const regex1 = /dog/g;
    assert.strictEqual(p.replace("dog", "monkey"), "monkey dog dog");
    assert.strictEqual(p1.replace(regex, "monkey"), "monkey Dog Dog");
    assert.strictEqual(p.replace(regex1, "monkey"), "monkey monkey monkey");
  });

  it("Should run search()", function () {
    const p = "The car.";
    // any character that is not a word character or whitespace
    const regex = /[^\w\s]/g;
    const match = p.search(regex);
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
    const regex = /[^\w\s]/g;
    //split by punctuations
    const words = str.split(regex);
    assert.deepStrictEqual(words, ["Hi", " How are you", " Good", ""]);
  });
});
