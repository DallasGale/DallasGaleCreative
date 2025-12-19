const {  describe, it, test } = require("node:test");
const  myName  = require(".")
const assert = require("node:assert");


describe("myName()", () => {
  it("should return a name", () => {
    const result = myName("Dallas")
    assert.strictEqual(result, "Dallas");
  })
})
