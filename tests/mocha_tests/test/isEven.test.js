const assert = require("assert");

// Function to be tested
function isEven(number) {
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }
  return number % 2 === 0;
}

describe("isEven", () => {
  it("identifies even numbers", () => {
    assert.strictEqual(isEven(4), true);
    assert.strictEqual(isEven(6), true);
  });

  it("identifies odd numbers", () => {
    assert.strictEqual(isEven(3), false);
    assert.strictEqual(isEven(5), false);
  });

  it("throws error for non-numeric input", () => {
    assert.throws(() => isEven("hello"), /Input must be a number/);
  });
});
