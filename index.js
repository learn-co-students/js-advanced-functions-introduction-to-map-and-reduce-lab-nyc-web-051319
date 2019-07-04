function mapToNegativize(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] * -1)
    }
    return newArr
}

function mapToNoChange(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i])
        
    }
    return newArr
}

function mapToDouble(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] * 2)
        
    }
    return newArr
}

function mapToSquare(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] * array[i])
        
    }
    return newArr
}

function reduceToTotal(array, memo = 0) {
    let total = memo
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === false) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            return true
        }      
    }
    return false
}