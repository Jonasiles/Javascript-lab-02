function superSum(){
    result = 0
    var numberOfParams = arguments.length
    for(var i = 0; i < numberOfParams; i++){

        if(typeof(arguments[i]) == 'number' && !isNaN(arguments[i])){
            result += arguments[i]
        }
        
    }
    return result
}

console.log(superSum(1,2,3,4,5,6,7,8,9))

console.log(superSum(true,12,undefined,15,NaN))