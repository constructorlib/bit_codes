const assert = require("assert");

// Function to be tested
function sum(a, b) {
  return a + b;
}

describe("sum function", () => {
  it("adds 1 + 2 to equal 3", () => {
    const result = sum(1, 2);
    assert.strictEqual(result, 3);
  });
});
