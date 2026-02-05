const {  describe, it } = require("node:test");
const assert = require("node:assert");

async function runTests() {
  const displayIconModule = await import("./displayIcon.mjs");
  const displayIcon = displayIconModule.default;

  const morningIconModule =  await import("../icons/morning.mjs");  
  const MorningIcon = morningIconModule.default;

  const afternoonIconModule =  await import("../icons/afternoon.mjs");  
  const AfternoonIcon = afternoonIconModule.default;

  const eveningIconModule =  await import("../icons/evening.mjs");  
  const EveningIcon = eveningIconModule.default;

  describe("displayIcon() todo", () => {
    it("returns the 'morning'icon", () => {
      assert.strictEqual(displayIcon("morning"), MorningIcon);
    });
    it("returns the 'afternoon'icon", () => {
      assert.strictEqual(displayIcon("afternoon"), AfternoonIcon);
    });
    it("returns the 'evening'icon", () => {
      assert.strictEqual(displayIcon("evening"), EveningIcon);
    });
  });

  
}

runTests().catch(console.error);
