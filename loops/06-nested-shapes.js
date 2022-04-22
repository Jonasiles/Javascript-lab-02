//for loops can be nested
var newLine = '\n'
for (var i = 0; i <= 10; i++){
    for (var j = 0; j <= 10; j++){
    newLine += (i == j) ? '*' : (i+j == 10) ? '*': ' '
}
newLine += '\n'
}
console.log(newLine)