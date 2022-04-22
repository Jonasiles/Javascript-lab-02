/*
functions are declared with the 'function'
*/

function sum(a,b){
    var result = a + b
    return result
}

//Normal call
console.log(sum(3,4))
//More parameters are ignored
console.log(sum(3,4,8,5,4))
//Missing parameters are ignored
console.log(sum(3))
