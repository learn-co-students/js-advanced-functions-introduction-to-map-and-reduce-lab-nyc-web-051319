// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map(x => x * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(x => x)
}

function mapToDouble(sourceArray) {
    return sourceArray.map(x => x*2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(x => x*x)
}

function reduceToTotal(sourceArray, startingPoint= 0) {
   let total = startingPoint
   for (let i=0; i < sourceArray.length; i++) {
       total += sourceArray[i]
   }
   return total
}

function reduceToAllTrue(sourceArray) {
    let allTrue = true 
    for (let i =0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) {
            allTrue = false 
            return allTrue
        }
    }
    return allTrue
}

function reduceToAnyTrue(sourceArray) {
    let allFalse = false 
    for (let i =0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            allFalse = true 
            return allFalse
        }
    }
    return allFalse
}

// function reduceToAnyTrue(arr) {
//     let isFalse = false
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//             isFalse = true;
//             return isFalse
//         }
//     }
//     return isFalse;
// }