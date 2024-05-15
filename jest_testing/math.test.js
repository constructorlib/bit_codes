// math.test.js
const math = require("./math");

// Mock the 'add' function from the 'math' module
jest.mock("./math", () => ({
  add: jest.fn(),
}));

test("add function should be called with correct arguments", () => {
  // Define the mock implementation for 'add'
  math.add.mockImplementation((a, b) => a + b);

  const result = math.add(1, 2);

  expect(result).toBe(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});
