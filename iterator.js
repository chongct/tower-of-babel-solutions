// Iterator for of
const max = process.argv[2]
let FizzBuzz = {
  [Symbol.iterator]() {
    // let pre = 0, cur = 1;
    // return {
    //   next() {
    //     [pre, cur] = [cur, pre + cur]
    //     if (pre < 1000) return { done: false, value: pre }
    //     return { done: true }
    //   }
    // }

    let number = 0
    return {
      next() {
        number += 1
        if (number <= max) {
          if (number % 3 === 0 && number % 5 === 0) {
            return { done: false, value: "FizzBuzz" }
          } else if (number % 3 === 0) {
            return { done: false, value: "Fizz" }
          } else if (number % 5 === 0) {
            return { done: false, value: "Buzz" }
          } else {
            return { done: false, value: number }
          }
        } else {
          return { done: true }
        }
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n)
}
