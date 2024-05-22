function calculateArea(length, width) {
  if (length <= 0 || width <= 0) {
    throw new Error("Length and width must be positive numbers");
  }
  return length * width;
}

// calculateArea.test.js (or similar filename)

test("calculates area of a rectangle", () => {
  // Valid input - positive values
  const length = 5;
  const width = 3;
  const expectedArea = length * width;

  const actualArea = calculateArea(length, width);

  expect(actualArea).toBe(expectedArea);
});

test("throws error for non-positive length", () => {
  // Invalid input - negative length
  const length = -2;
  const width = 5;

  expect(() => calculateArea(length, width)).toThrowError(
    "Length and width must be positive numbers"
  );
});

test("throws error for non-positive width", () => {
  // Invalid input - negative width
  const length = 5;
  const width = -1;

  expect(() => calculateArea(length, width)).toThrowError(
    "Length and width must be positive numbers"
  );
});
