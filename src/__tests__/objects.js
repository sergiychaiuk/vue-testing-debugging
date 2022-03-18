import { countriesCollection, johnDoe } from '../utilities.js'

test('Check available countries', () => {
  expect(countriesCollection).toContain('Nigeria')
})

test('Check user info', () => {
  expect(johnDoe).toEqual(expect.objectContaining({
    age: 26,
    occupation: 'Accountant'
  }))
})
