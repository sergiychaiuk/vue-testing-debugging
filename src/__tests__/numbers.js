import { addNumbers } from '../utilities.js'

test('Check the addition of numbers', () => {
  expect(addNumbers(4, 5)).toEqual(9)
})

test('Adding floating point numbers', () => {
  expect(addNumbers(0.4, 0.5)).toEqual(0.9)
})

test('Adding floating point numbers (fix error)', () => {
  expect(addNumbers(0.1, 0.2)).toBeCloseTo(0.3)
})
