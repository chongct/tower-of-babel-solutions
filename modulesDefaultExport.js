// Modules default export
import Math from './Math2'; // destructuring an object
var arg1 = process.argv[2];
var arg2 = process.argv[3];

console.log(Math.PI);
console.log(Math.sqrt(+arg1));
console.log(Math.square(+arg2));
