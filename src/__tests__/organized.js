import { addNumbers, countriesCollection, johnDoe } from '../utilities.js'

describe('Unit tests', () => {
  describe('Testing string', () => {
    test('Find Substring', () => {
      expect("It's raining cats and dogs").toMatch(/fishes/)
    })
  })
  describe('Testing numeric values', () => {
    test('Check the addition of numbers', () => {
      expect(addNumbers(4, 5)).toEqual(9)
    })

    test('Adding floating point numbers', () => {
      expect(addNumbers(0.4, 0.5)).toEqual(0.9)
    })

    test('Adding floating point numbers (fix error)', () => {
      expect(addNumbers(0.1, 0.2)).toBeCloseTo(0.3)
    })
  })
  describe('Testing arrays and objects', () => {
    test('Check available countries', () => {
      expect(countriesCollection).toContain('Nigeria')
    })

    test('Check user info', () => {
      expect(johnDoe).toEqual(expect.objectContaining({
        age: 26,
        occupation: 'Accountant'
      }))
    })
  })
})
