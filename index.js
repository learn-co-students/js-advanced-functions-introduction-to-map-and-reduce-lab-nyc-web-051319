// Your code here
function mapToNegativize(sourceArray){
  return sourceArray.map(x => x * -1)
}

function mapToNoChange(sourceArray) {
  return sourceArray
}

function mapToDouble(sourceArray) {
  return sourceArray.map(x => x * 2)
}

function mapToSquare(sourceArray) {
  return sourceArray.map(x => x * x)
}

function reduceToTotal(sourceArray, startingPoint=0) {
  return sourceArray.reduce((accumulator, currentVal) => accumulator + currentVal, startingPoint)
}

function reduceToAllTrue(sourceArray) {
  return sourceArray.reduce(function(allTrue,element){
    allTrue = true
    if (element === false){
      allTrue = false
    }
    return allTrue
  })
}

function reduceToAnyTrue(sourceArray) {
  return sourceArray.reduce(function(anyTrue, element){
    anyTrue = false
    if (element === true){
      anyTrue = true
    }
    return anyTrue
  })
}
