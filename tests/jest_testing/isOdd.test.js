function isOdd(num) {
  return num % 2 !== 0;
}

test("returns true for an odd number", () => {
  expect(isOdd(1)).toBe(true);
});

test("returns false for an even number", () => {
  expect(isOdd(2)).toBe(false);
});

test("returns true for a large odd number", () => {
  expect(isOdd(999999)).toBe(true);
});

test("returns false for a large even number", () => {
  expect(isOdd(1000000)).toBe(false);
});

test("returns true for negative odd numbers", () => {
  expect(isOdd(-3)).toBe(true);
});

test("returns false for negative even numbers", () => {
  expect(isOdd(-4)).toBe(false);
});

test("returns false for zero", () => {
  expect(isOdd(0)).toBe(false);
});
