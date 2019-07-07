// Your code here
function mapToNegativize(arr) {
  let newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.push(-arr[i])
  }
  return newArr
}

function mapToNoChange(arr) {
  let newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i])
  }
  return newArr
}

function mapToDouble(arr) {
  let newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2)
  }
  return newArr
}

function mapToSquare(arr) {
  let newArr = []
  for (var i = 0; i < arr.length; i++) {
    let newEl = arr[i] * arr[i]
    newArr.push(newEl)
  }
  return newArr
}

function reduceToTotal(arr, startingPoint=0) {
  let sum = startingPoint
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

function reduceToAllTrue(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === false) {
      return false
    }
  }
  return true
}

function reduceToAnyTrue(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      return true
    }
  }
  return false
}
