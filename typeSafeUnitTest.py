import unittest

def is_integer(num):
    return isinstance(num, int)

class TestIsInteger(unittest.TestCase):
    def test_integer(self):
        self.assertTrue(is_integer(5))
        self.assertTrue(is_integer(0))
        self.assertTrue(is_integer(-10))

    def test_non_integer(self):
        self.assertFalse(is_integer(5.5))
        self.assertFalse(is_integer("10"))
        self.assertFalse(is_integer([1, 2, 3]))
        self.assertFalse(is_integer({"a": 1, "b": 2}))

if __name__ == '__main__':
    unittest.main()
