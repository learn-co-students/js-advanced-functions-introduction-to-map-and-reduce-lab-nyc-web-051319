// Your code here
function mapToNegativize(sourceArray) {
  const newArray = []
  sourceArray.forEach(element => {
    newArray.push(-element)
  })
  return newArray
}

function mapToNoChange(sourceArray) {
  return sourceArray
}

function mapToDouble(sourceArray) {
  const newArray = []
  sourceArray.forEach(element => {
    newArray.push(element * 2)
  })
  return newArray
}

function mapToSquare(sourceArray) {
  const newArray = []
  sourceArray.forEach(element => {
    newArray.push(element ** 2)
  })
  return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint
  sourceArray.forEach(element => {
    total += element
  })
  return total
}

function reduceToAllTrue(sourceArray) {
  const newArray = []
  const arrayLength = sourceArray.length
  sourceArray.forEach(element => {
    if (element) {
      newArray.push(element)
    }
  })
  if (newArray.length === arrayLength) {
    return true
  } else {
    return false
  }
}

function reduceToAnyTrue(sourceArray) {
  const newArray = []
  const arrayLength = sourceArray.length
  sourceArray.forEach(element => {
    if (element) {
      newArray.push(element)
    }
  })
  if (newArray.length > 0) {
    return true
  } else {
    return false
  }
}
