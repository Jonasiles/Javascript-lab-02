var oneNum = 1
var oneStr= '1'
//the == operator perfoms a cast before comparing
// So, don't use it

if(oneNum == oneStr){
    console.log('Son iguales!')
}else{
    console.log('Son diferentes!')
}

//Use the '===' instead
// parseInt() takes a string and tries to convert the values to a number
//parseFloat('1.23') // 1.23
if(oneNum === parseInt(oneStr)){
    console.log('Son iguales!')
}else{
    console.log('Son diferentes!')
}