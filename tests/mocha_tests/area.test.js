// const { expect } = require("chai");
const { expect } = chai;
// The function to test
function calculateArea(length, width) {
  if (length <= 0 || width <= 0) {
    throw new Error("Length and width must be positive numbers");
  }
  return length * width;
}

// Tests
describe("calculateArea", () => {
  it("calculates area of a rectangle with valid positive values", () => {
    const length = 5;
    const width = 3;
    const expectedArea = length * width;

    const actualArea = calculateArea(length, width);

    expect(actualArea).to.equal(expectedArea);
  });

  it("throws an error for non-positive length", () => {
    const length = -2;
    const width = 5;

    expect(() => calculateArea(length, width)).to.throw(
      "Length and width must be positive numbers"
    );
  });

  it("throws an error for non-positive width", () => {
    const length = 5;
    const width = -1;

    expect(() => calculateArea(length, width)).to.throw(
      "Length and width must be positive numbers"
    );
  });
});
