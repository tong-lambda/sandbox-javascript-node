import assert from "assert";

describe("Promises", function () {
  it("Should implement async function", async function () {
    function resolveAfterSometime() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("resolved");
        }, 200);
      });
    }

    async function asyncCall() {
      console.log("calling");
      const result = await resolveAfterSometime();
      // expected output: "resolved"
      return result;
    }

    const result = await asyncCall();
    assert.strictEqual(asyncCall() instanceof Promise, true);
    assert.strictEqual(result, "resolved");
  });

  it("Should return a promise by creating an async function", async function () {
    async function foo() {
      return 1;
    }
    assert.strictEqual(foo() instanceof Promise, true);
    assert.strictEqual(await foo(), 1);
  });

  it("Async function should return a promise", async function () {
    async function shouldThrow(shouldThrow) {
      if (!shouldThrow) {
        console.log("This is not an error.");
      } else {
        throw new Error("Whoops");
      }
    }

    assert.rejects(() => shouldThrow(true));
  });

  it("Should handle errors for async function", async function () {
    async function handleError(shouldThrow) {
      try {
        if (handleError) await Promise.reject("Whoops");
        else return "This is not an error.";
      } catch (erro) {
        return "Caught error";
      }
    }
    assert.strictEqual(await handleError(true), "Caught error");
  });

  it("Should use promise.all() with all success cases", async function () {
    let p1 = Promise.resolve(3);
    let p2 = 1337;
    let p3 = new Promise((resolve) => {
      setTimeout(() => {
        resolve("foo");
      }, 100);
    });
    const result = await Promise.all([p1, p2, p3]).then((values) => {
      return values;
    });
    assert.deepStrictEqual(result, [3, 1337, "foo"]);
  });

  it("Should return error when promise.all() has a failure", async function () {
    let p1 = Promise.resolve(3);
    let p2 = new Promise((resolve, reject) => {
      reject(new Error("reject"));
    });
    let p3 = new Promise((resolve) => {
      setTimeout(() => {
        resolve("foo");
      }, 100);
    });
    const result = await Promise.all([p1, p2, p3])
      .then((values) => {
        return values;
      })
      .catch((error) => {
        return error.message;
      });
    assert.deepStrictEqual(result, "reject");
  });
});
