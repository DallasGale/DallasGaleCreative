const memo = require("./memoization")


function person(name, age) {
  return {
    name,
    age
  };
}


const memoizedFunction = memo(person)



console.log(memoizedFunction("dallas", 30))
console.log(memoizedFunction("dallas", 32))
console.log(memoizedFunction("dallas", 30))
console.log(memoizedFunction("tom", 20))