const computeAge = require('../src/computeAge');

test('should return 11 if birthday is not passed', () => {
    expect(computeAge(new Date(2000, 1, 17), new Date(2012, 0, 31))).toBe(11);
});

test('should return 12 if birthday passed', () => {
  expect(computeAge(new Date(2000, 1, 17), new Date(2012, 3, 31))).toBe(12);
});

test('should return 12 if it\'s birthday', () => {
  expect(computeAge(new Date(2000, 1, 17), new Date(2012, 1, 17))).toBe(12);
});

test('should throw Error if birthDate is not defined', () => {
  expect(() => computeAge(undefined, new Date(2012, 1, 17))).toThrowError("birthDate and currentDate must be defined");
});

test('should throw Error if birthDate is not defined', () => {
  expect(() => computeAge(new Date(2012, 1, 17), null)).toThrowError("birthDate and currentDate must be defined");
});



