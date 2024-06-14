const assert = require("assert");
function calculateArea(length, width) {
  if (length <= 0 || width <= 0) {
    throw new Error("Length and width must be positive numbers");
  }
  return length * width;
}
describe("calculateArea", () => {
  it("calculates area of a rectangle with positive length and width", () => {
    const length = 5;
    const width = 3;
    const expectedArea = length * width;

    const actualArea = calculateArea(length, width);

    assert.strictEqual(actualArea, expectedArea);
  });
  it("throws an error for non-positive length", () => {
    const length = -2;
    const width = 5;
    assert.throws(
      () => calculateArea(length, width),
      /Length and width must be positive numbers/
    );
  });
  it("throws an error for non-positive width", () => {
    const length = 5;
    const width = -1;
    assert.throws(
      () => calculateArea(length, width),
      /Length and width must be positive numbers/
    );
  });
});
