let mapToNegativize = function(array){
  let negativeArray = []
  for (let i = 0; i < array.length; i++){
  		negativeArray.push(array[i] * -1)
  	}
	return negativeArray
}

let mapToNoChange = function(array){
  let newArray = []
  for (let i = 0; i < array.length; i++){
  		newArray.push(array[i])
  	}
	return newArray
}

let mapToDouble = function(array){
  let newArray = []
  for(let i = 0; i < array.length; i++){
    newArray.push(array[i] * 2)
  }
  return newArray
}

let mapToSquare = function(array){
  let newArray = []
  for(let i = 0; i < array.length; i++){
    newArray.push(Math.pow(array[i], 2))
  }
  return newArray
}

let reduceToTotal = function(array, startingPoint){
  let value = startingPoint || 0
  for(let i = 0; i < array.length; i++){
    value += array[i]
  }
  return value
}

let reduceToAllTrue = function(array){
  for(let i = 0; i < array.length; i++){
    if (!array[i]) return false
  }
  return true
}

let reduceToAnyTrue = function(array){
  for(let i = 0; i < array.length; i++){
    if (array[i]) return true
  }
  return false
}
