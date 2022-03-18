import { asyncPrint } from '../utilities.js'
import { printSomething } from '../testModule.js'

/* test('Test asynchronous printing', () => {
  return asyncPrint().then(data => {
    expect(data).toBe('Hello world')
  })
}) */

test('Test asynchronous printing', async () => {
  await expect(asyncPrint()).resolves.toBe('Hello world')
})
