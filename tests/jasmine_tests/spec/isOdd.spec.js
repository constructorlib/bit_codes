function isOdd(num) {
  return num % 2 !== 0;
}

describe("isOdd", () => {
  it("returns true for an odd number", () => {
    expect(isOdd(1)).toBe(true);
  });

  it("returns false for an even number", () => {
    expect(isOdd(2)).toBe(false);
  });

  it("returns true for a large odd number", () => {
    expect(isOdd(999999)).toBe(true);
  });

  it("returns false for a large even number", () => {
    expect(isOdd(1000000)).toBe(false);
  });

  it("returns true for negative odd numbers", () => {
    expect(isOdd(-3)).toBe(true);
  });

  it("returns false for negative even numbers", () => {
    expect(isOdd(-4)).toBe(false);
  });

  it("returns false for zero", () => {
    expect(isOdd(0)).toBe(false);
  });
});
