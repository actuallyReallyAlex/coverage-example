const { add, divide, multiply, subtract } = require('./math');

test('Should add 1 and 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});


test('Should divide 100 and 2 to equal 50', () => {
  expect(divide(100, 2)).toBe(50);
});

test('Should multiply 5 and 10 to equal 50', () => {
  expect(multiply(5, 10)).toBe(50);
});

// test('Should subtract 6 from 10 to equal 4', () => {
//   expect(subtract(10, 6)).toBe(4);
// });