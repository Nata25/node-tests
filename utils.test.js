const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  const result = utils.add(33, 11);
  expect(result).toBeA('number');
  expect(result).toBe(44);
});

it('should square a number', () => {
  const result = utils.square(4);
  // if (result !== 16) {
    // throw new Error(`Expected 9 but got ${result}`);
  // }
  expect(result).toBeA('number');
  expect(result).toBe(16);
});

it('should be included in object', () => {
  expect({
    name: 'Natalya',
    age: 35
  }).toInclude({
    age: 35
  });
});

it('should verify first and last names are set', () => {
  const user = {
    age: 30,
    location: 'Ukraine',
  };

  const updatedUser = utils.setName(user, 'Natalia Ivanova');

  expect(updatedUser).toBeA('object');

  expect(updatedUser).toInclude({
    firstName: 'Natalia',
    lastName: 'Ivanova'
  });
});
