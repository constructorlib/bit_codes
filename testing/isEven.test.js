function isEven(number) {
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }
  return number % 2 === 0;
}

test("identifies even numbers", () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(6)).toBe(true);
});

test("identifies odd numbers", () => {
  expect(isEven(3)).toBe(false);
  expect(isEven(5)).toBe(false);
});

test("throws error for non-numeric input", () => {
  expect(() => isEven("hello")).toThrowError("Input must be a number");
});
