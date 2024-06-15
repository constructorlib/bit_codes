const assert = require("assert");

// Function to be tested
function isOdd(num) {
  return num % 2 !== 0;
}

describe("isOdd", () => {
  it("returns true for an odd number", () => {
    assert.strictEqual(isOdd(1), true);
  });

  it("returns false for an even number", () => {
    assert.strictEqual(isOdd(2), false);
  });

  it("returns true for a large odd number", () => {
    assert.strictEqual(isOdd(999999), true);
  });

  it("returns false for a large even number", () => {
    assert.strictEqual(isOdd(1000000), false);
  });

  it("returns true for negative odd numbers", () => {
    assert.strictEqual(isOdd(-3), true);
  });

  it("returns false for negative even numbers", () => {
    assert.strictEqual(isOdd(-4), false);
  });

  it("returns false for zero", () => {
    assert.strictEqual(isOdd(0), false);
  });
});
