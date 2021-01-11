const coolFunction = require('./coolFunction');

test('Should get a cool thing', () => {
  expect(coolFunction()).toStrictEqual({ name: "Alex", favoriteColor: "blue", favoriteNumber: 10 });
});
