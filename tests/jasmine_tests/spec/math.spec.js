// Define the add function
function add(a, b) {
  return a + b;
}

// Describe the add function
describe("add function", () => {
  // Test case: should add two numbers correctly
  it("should add two numbers correctly", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  // Test case: should handle negative numbers correctly
  it("should handle negative numbers correctly", () => {
    const result = add(-2, 3);
    expect(result).toBe(1);
  });

  // Test case: should return 0 when adding 0 to a number
  it("should return 0 when adding 0 to a number", () => {
    const result = add(5, 0);
    expect(result).toBe(5);
  });

  // Test case: should add two floating point numbers correctly
  it("should add two floating point numbers correctly", () => {
    const result = add(0.1, 0.2);
    expect(result).toBeCloseTo(0.3);
  });
});
