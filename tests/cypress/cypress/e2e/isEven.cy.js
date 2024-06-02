function isEven(number) {
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }
  return number % 2 === 0;
}

describe("isEven function", () => {
  it("identifies even numbers", () => {
    expect(isEven(4)).to.equal(true);
    expect(isEven(6)).to.equal(true);
  });

  it("identifies odd numbers", () => {
    expect(isEven(3)).to.equal(false);
    expect(isEven(5)).to.equal(false);
  });

  it("throws error for non-numeric input", () => {
    expect(() => isEven("hello")).to.throw("Input must be a number");
  });
});
