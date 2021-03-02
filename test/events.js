import { expect } from "chai";
import EventEmitter from "events";

describe("Events", function () {
  let myEmitter;
  beforeEach(function () {
    class MyEmitter extends EventEmitter {}
    myEmitter = new MyEmitter();
  });

  it("Should use emit()", function () {
    myEmitter.on("event", () => {
      console.log("an event occurred!");
    });
    myEmitter.emit("event");

    myEmitter.on("event", (a, b) => {
      console.log(this === myEmitter);
    });
    myEmitter.emit("event", "a", "b");
  });

  it("Should call asynchronously", function () {
    myEmitter.on("event", (a, b) => {
      setImmediate(() => {
        console.log("this happens asynchronously");
      });
    });
    myEmitter.emit("event", "a", "b");
  });
  it("Should be called only once", function () {
    let m = 0;
    myEmitter.once("event", () => {
      console.log(++m);
      expect(m).to.equal(1);
    });
    myEmitter.emit("event");
    // Prints: 1
    myEmitter.emit("event");
    // Ignored
  });

  it("Should call error events", function () {
    myEmitter.on("error", (err) => {
      console.error("whoops! there was an error");
    });
    myEmitter.emit("error", new Error("whoops!"));
    // Prints: whoops! there was an error
  });

  it("Should call eventNames()", function () {
    myEmitter.on("foo", () => {});
    myEmitter.on("bar", () => {});

    const sym = Symbol("symbol");
    myEmitter.on(sym, () => {});
    expect(myEmitter.eventNames()).to.deep.equal(["foo", "bar", sym]);
  });
});
