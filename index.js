// Your code here
function mapToNegativize(arr){
  return arr.map(x => x * -1)
}

function mapToNoChange(arr){
  return arr.map(x => x)
}

function mapToDouble(arr){
  return arr.map(x => x * 2)
}

function mapToSquare(arr){
  return arr.map(x => Math.pow(x, 2))
}

function reduceToTotal(arr, startingPoint = 0){
  let total = startingPoint;
  for (let i = 0; i < arr.length; i++){
    total += arr[i]
  }
  return total;
}

function reduceToAllTrue(arr){
  let isTrue = true
  for (let i = 0; i < arr.length; i++){
    if (!arr[i]){
      isTrue = false
      return isTrue
    }
  }
  return isTrue
}

function reduceToAnyTrue(arr){
  let isFalse = false
  for (let i = 0; i < arr.length; i++){
    if (arr[i]){
      isFalse = true;
      return isFalse
    }
  }
  return isFalse;
}
