/* There is a special value called 'arguments'
created automatically inside each function
*/

function seeArgs(){
    return arguments
}

console.log(seeArgs())
console.log(seeArgs('piña',1,true,NaN))