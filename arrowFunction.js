// Arrow function
var inputs = process.argv.slice(2)
var result = inputs.map(element => element[0].toUpperCase()).reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(result)
