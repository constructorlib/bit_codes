const assert = require("assert");
const sinon = require("sinon");

// Wrap the function in an object
const math = {
  add(a, b) {
    return a + b;
  },
};

describe("add function mocking", () => {
  it("add function should be called with correct arguments", () => {
    // Spy on the add function
    const addSpy = sinon.spy(math, "add");

    // Call the add function
    const result = math.add(1, 2);
    assert.strictEqual(result, 3);
    assert(addSpy.calledWith(1, 2));

    // Restore the original function
    addSpy.restore();
  });
});
