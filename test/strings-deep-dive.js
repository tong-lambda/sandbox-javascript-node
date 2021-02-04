const assert = require("assert");

const sentence = "The quick brown dog Jumps over the lazy dog.";

describe("Strings deep dive", function () {
  it("Should return charAt(6)", function () {
    assert.strictEqual(sentence.charAt(6), "i");
  });
  it("Should return indexOf('dog')", function () {
    assert.strictEqual(sentence.indexOf("dog"), 16);
  });
  it("Should return lastIndexOf('dog')", function () {
    assert.strictEqual(sentence.lastIndexOf("dog"), 40);
  });
  it("Should return startsWith('The')", function () {
    assert.strictEqual(sentence.startsWith("The"), true);
  });
  it("Should return startsWith('the')", function () {
    assert.strictEqual(sentence.startsWith("the"), false);
  });
  it("Should return endsWith('.')", function () {
    assert.strictEqual(sentence.endsWith("."), true);
  });
  it("Should return includes('s o')", function () {
    assert.strictEqual(sentence.includes("s o"), true);
  });
  it("Should return str1.concat(str2)", function () {
    const str1 = "hello";
    const str2 = "world";
    assert.strictEqual(str1.concat(" ", str2), "hello world");
  });
  it("Should return split(' ')", function () {
    const words = sentence.split(" ");
    assert.strictEqual(words.length, 9);
  });
  it("Should return slice()", function () {
    assert.strictEqual(sentence.slice(0, 3), "The");
    assert.strictEqual(sentence.slice(-1), ".");
    assert.strictEqual(sentence.slice(-4, -1), "dog");
  });
  // start, end index
  it("Should return substring()", function () {
    assert.strictEqual(sentence.substring(0, 3), "The");
    assert.strictEqual(sentence.substring(sentence.length - 4), "dog.");
  });
  it("Should return match()", function () {
    assert.strictEqual(sentence.match(/[A-Z]/g).length, 2);
  });
  it("Should run replace()", function () {
    const newSentence = sentence.replace("brown", "green");
    // The origional string is unchanged
    assert.strictEqual(sentence.split(" ")[2], "brown");
    assert.strictEqual(newSentence.split(" ")[2], "green");
  });
});
