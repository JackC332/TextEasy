const count = require('../src/count');

test('counts characters in string', () => {
  expect(count("hello")).toBe(5);
});