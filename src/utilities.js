function addNumbers (a, b) {
  return a + b
}

const countriesCollection = [
  'United States',
  'United Kingdom',
  'Nigeria',
  'India',
  'China'
]

function asyncPrint () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello world')
    }, 2000)
  })
}

const johnDoe = {
  name: 'John Doe',
  age: 26,
  sex: 'male',
  occupation: 'Accountant'
}

module.exports = {
  addNumbers,
  countriesCollection,
  johnDoe,
  asyncPrint
}
