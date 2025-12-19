const {  describe, it, test } = require("node:test");
const  memo  = require("./memoization")
const assert = require("node:assert");

function person(name, age) {
  return {
    name,
    age
  };
}

const memoizedFunction = memo(person)

describe("memo()", () => {
  it("should return the correct object", () => {
    const result = memoizedFunction("Dallas", 39)
    assert.deepStrictEqual(result, { name: 'Dallas', age: 39 });
  })

  it("should return un-cached / new object results for same inputs", () => {

    const result1 = person("Dallas", 39)
    const result2 = person("Dallas", 39)

    assert.deepStrictEqual(result1, { name: "Dallas", age: 39})
    assert.deepStrictEqual(result2, { name: "Dallas", age: 39})

    // This is the test the determines a cached object result
    assert.notStrictEqual(result1, result2)
  })
  it("should return cached  results for same inputs", () => {
    const result1 = memoizedFunction("Dallas", 39)
    const result2 = memoizedFunction("Dallas", 39)

    // This is the test the determines a cached object result
    assert.strictEqual(result1, result2)
  })
})
