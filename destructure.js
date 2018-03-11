var json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};

let {name, birth} = json;
let {first, family: familyName} = name;
let {year, month, day: birthDay} = birth;

// let {
//   name: {
//     family: familyName
//   },
//   birth: {
//     day: birthDay
//   }
// } = json

console.log(familyName);
console.log(birthDay);
