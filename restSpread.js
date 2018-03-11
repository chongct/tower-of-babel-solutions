// Rest and spread
var rawArgs = process.argv.slice(2)
var args = []
// console.log(rawArgs)

rawArgs.forEach(val => {
  let commaSep = val.split(',')
  commaSep.forEach(val => {
    if (val != '') args.push(+val)
  })
})

var avg = (...array) => {
  let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue)
  let count = 0
  array.forEach(element => {
    count += 1
  })
  return sum / count
}
console.log(avg(...args))
