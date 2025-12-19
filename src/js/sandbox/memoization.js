// 1. Create a function that takes another function as an arg.
// 2. add an inner object variable that stores the keys of arg fn.

function memo(fn) {
  const cache = {}

  return function(...args) {
    // console.log(...args)
    // unique key
    const key = JSON.stringify(args)
    // console.log({key})
    
    if (key in cache) {
      // console.log("cached: ", cache[key])
      return cache[key];
    } 

    // The fn.apply(this..) makes sure that the 
    // memoized fn behaves just like the original
    // EG: this makes sure the object/cached objects are the same reference!!!
    const result = fn.apply(this, args);

    cache[key] = result
    return result
  };
}

module.exports = memo;