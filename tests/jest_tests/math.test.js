function add(a, b) {
  return a + b;
}

describe("add function mocking", () => {
  it("add function should be called with correct arguments", () => {
    // Spy on the add function
    const addMock = jest
      .spyOn(global, "add")
      .mockImplementation((a, b) => a + b);
    // Call the add function
    const result = add(1, 2);
    expect(result).toBe(3);
    expect(addMock).toHaveBeenCalledWith(1, 2);
    // Restore the original function
    addMock.mockRestore();
  });
});
