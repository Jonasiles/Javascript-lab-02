//we can assign default parameters
function sayHello(name = 'Alice', salute = 'Hello'){
    return `${salute}, i'am ${name}, nice to meet you`
}

console.log(sayHello())
//Default parameters can be overwritten
console.log(sayHello('Bob','Hi'))