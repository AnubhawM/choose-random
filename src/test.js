import jsv from 'jsverify'

import { chooseRandom } from './lib'

describe('chooseRandom', () => {
  it('Should return an array', () => {
    jsv.assertForall('array nat', (arr) => {
      return Array.isArray(chooseRandom(arr))
    })
  })
  it('Should not mutate the array', () => {
    jsv.assertForall('array nat', (arr) => {
      const arrBefore = arr
      chooseRandom(arr)
      return arrBefore === arr
    })
  })
  it('Should default to return an empty array', () => {
    jsv.assert(() => {
      return chooseRandom().length === 0
    })
  })
  it('Should return an array with length equal to the given number (if provided)', () => {
    jsv.assertForall('array nat', (arr) => {
      if (arr.length === 0 || arr.length === 1) {
        // Here the numItems value given to chooseRandom is irrelevent as
        // an array of length 0 or 1 should just return the given array
        // with no possibility of randomization.
        return arr === chooseRandom(arr, 948672894968) &&
          arr === chooseRandom(arr, 0) &&
          arr === chooseRandom(arr)
      }
      const random = chooseRandom(arr, 2)
      return random.length === 2
    })
  })
})
