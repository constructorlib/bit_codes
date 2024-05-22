// palindrome.js
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

test("returns true for a simple palindrome", () => {
  expect(isPalindrome("madam")).toBe(true);
});

test("returns false for a non-palindrome", () => {
  expect(isPalindrome("hello")).toBe(false);
});

test("ignores case and non-alphanumeric characters", () => {
  expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
});

test("returns true for an empty string", () => {
  expect(isPalindrome("")).toBe(true);
});

test("returns true for a single character", () => {
  expect(isPalindrome("a")).toBe(true);
});
