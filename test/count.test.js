const count = require('./count');

test('counts characters in string', () => {
  expect(count("hello")).toBe(5);
});