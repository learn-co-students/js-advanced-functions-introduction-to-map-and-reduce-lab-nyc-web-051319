// Your code here
function mapToNegativize(ary){
  return ary.map(x => x * -1)
}

function mapToNoChange(ary){
  return ary.map(x => x)
}

function mapToDouble(ary){
  return ary.map(x => x * 2)
}

function mapToSquare(ary){
  return ary.map(x => x * x)
}

function reduceToTotal(ary, start=0){
  return ary.reduce(
    ((a,b) => a + b), start
  )
}

function reduceToAllTrue(ary){
  return ary.reduce(
    a => !!a
  )
}

function reduceToAnyTrue(ary){
  return ary.reduce(
    (a => !a), false
  )
}

trueArray = [ false, null, null, null, true]
falseArray = [ false, null, null, null]

console.log("Truthy Array:", reduceToAnyTrue(trueArray))
console.log("False Array:", reduceToAnyTrue(falseArray))
