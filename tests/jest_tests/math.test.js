// math.test.js
const math = require("./math");

jest.mock("./math", () => ({
  add: jest.fn(),
}));

test("add function should be called with correct arguments", () => {
  math.add.mockImplementation((a, b) => a + b);

  const result = math.add(1, 2);

  expect(result).toBe(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

