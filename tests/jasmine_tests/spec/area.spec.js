function calculateArea(length, width) {
  if (length <= 0 || width <= 0) {
    throw new Error("Length and width must be positive numbers");
  }
  return length * width;
}

describe("calculateArea", () => {
  it("calculates area of a rectangle with valid positive values", () => {
    const length = 5;
    const width = 3;
    const expectedArea = length * width;

    const actualArea = calculateArea(length, width);

    expect(actualArea).toBe(expectedArea);
  });

  it("throws an error for non-positive length", () => {
    const length = -2;
    const width = 5;

    expect(() => calculateArea(length, width)).toThrowError(
      "Length and width must be positive numbers"
    );
  });

  it("throws an error for non-positive width", () => {
    const length = 5;
    const width = -1;

    expect(() => calculateArea(length, width)).toThrowError(
      "Length and width must be positive numbers"
    );
  });
});
