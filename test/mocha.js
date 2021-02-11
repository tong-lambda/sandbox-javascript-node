describe.skip("Top level describe", () => {
  before(async () => {
    console.log("before", "top level describe");
  });

  before(async () => {
    console.log("before 2", "top level describe");
  });

  beforeEach(async () => {
    console.log("before each", "top level describe");
  });

  beforeEach(async () => {
    console.log("before each 2", "top level describe");
  });

  after(async () => {
    console.log("after", "top level describe");
  });

  after(async () => {
    console.log("after 2", "top level describe");
  });

  afterEach(async () => {
    console.log("after each", "top level describe");
  });

  afterEach(async () => {
    console.log("after each 2", "top level describe");
  });

  it("should test 1", async () => {
    console.log("test 1", "top level describe");
  });

  it("should test 2", async () => {
    console.log("test 2", "top level describe");
  });

  it("should test 3", async () => {
    console.log("test 3", "top level describe");
  });

  describe("nested describe", () => {
    before(async () => {
      console.log("before", "nested describe");
    });

    before(async () => {
      console.log("before 2", "nested describe");
    });

    beforeEach(async () => {
      console.log("before each", "nested describe");
    });

    beforeEach(async () => {
      console.log("before each 2", "nested describe");
    });

    after(async () => {
      console.log("after", "nested describe");
    });

    after(async () => {
      console.log("after 2", "nested describe");
    });

    afterEach(async () => {
      console.log("after each", "nested describe");
    });

    afterEach(async () => {
      console.log("after each 2", "nested describe");
    });

    it("should test 1", async () => {
      console.log("test 1", "nested describe");
    });

    it("should test 2", async () => {
      console.log("test 2", "nested describe");
    });

    it("should test 3", async () => {
      console.log("test 3", "nested describe");
    });

    context("nested context", () => {
      before(async () => {
        console.log("before", "nested context");
      });

      before(async () => {
        console.log("before 2", "nested context");
      });

      beforeEach(async () => {
        console.log("before each", "nested context");
      });

      beforeEach(async () => {
        console.log("before each 2", "nested context");
      });

      after(async () => {
        console.log("after", "nested context");
      });

      after(async () => {
        console.log("after 2", "nested context");
      });

      afterEach(async () => {
        console.log("after each", "nested context");
      });

      afterEach(async () => {
        console.log("after each 2", "nested context");
      });

      it("should test 1", async () => {
        console.log("test 1", "nested context");
      });

      it("should test 2", async () => {
        console.log("test 2", "nested context");
      });

      it("should test 3", async () => {
        console.log("test 3", "nested context");
      });
    });
  });

  it("should test 4", async () => {
    console.log("test 4", "top level describe");
  });

  it("should test 5", async () => {
    console.log("test 5", "top level describe");
  });

  it("should test 6", async () => {
    console.log("test 6", "top level describe");
  });
});

describe.skip("top level describe #2", () => {
  it("should ", async () => {
    console.log("test 2");
  });
});
