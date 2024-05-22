function add(a, b) {
  return a + b;
}

describe("add function mocking", () => {
  it("add function should be called with correct arguments", () => {
    // Spy on the add function
    spyOn(window, "add").and.callThrough();

    // Call the add function
    const result = add(1, 2);

    // Assertions
    expect(result).toBe(3);
    expect(window.add).toHaveBeenCalledWith(1, 2);
  });
});
