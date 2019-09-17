export const chooseRandom = (array = [], numItems) => {
  if (array.length === 0 || array.length === 1) {
    return array
  }

  if (numItems === undefined || numItems < 1 || numItems > array.length) {
    let min = Math.ceil(1)
    let max = Math.floor(array.length)
    let numItems = Math.floor(Math.random() * (max - min + 1)) + min
  }

  if (numItems === 0) {
    let anotherArray = []
    anotherArray.push(...array)
    return anotherArray
  }

  let tempArray = []
  tempArray.push(...array)

  let randomIndices = []
  let alreadyIndexed = []

  for (let i = 0; i < numItems; ++i) {
    let randomIndex = Math.floor(Math.random() * array.length)
    if (!alreadyIndexed.includes(randomIndex)) {
      randomIndices.push(tempArray[randomIndex])
      alreadyIndexed.push(randomIndex)
    } else {
      --i
    }
  }

  return randomIndices
}
