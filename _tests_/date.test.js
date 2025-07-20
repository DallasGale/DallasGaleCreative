const { test, describe, it } = require("node:test");
const assert = require("node:assert");

async function runTests() {
  const formatSecondsModule = await import("../src/js/date/formatSeconds.mjs");
  const meridiemModule = await import("../src/js/date/meridiemIndicator.mjs");
  const parseDayModule = await import("../src/js/date/parseDay.mjs");
  const diurnalPeriodsModule = await import("../src/js/date/diurnalPeriods.mjs");
  const daySuffixModule = await import("../src/js/date/daySuffix.mjs");
  const formatHourModule = await import("../src/js/date/formatHour.mjs");

  const formatSeconds = formatSecondsModule.default;
  const meridiemIndicator = meridiemModule.default;
  const parseDay = parseDayModule.default;
  const diurnalPeriods = diurnalPeriodsModule.default;
  const daySuffix = daySuffixModule.default;
  const formatHour = formatHourModule.default;

  describe("meridiemIndicator() returns correct am or pm ", () => {
    it("returns PM #1", () => {
      assert.strictEqual(meridiemIndicator(12), "pm");
    });

    it("returns PM #2", () => {
      assert.strictEqual(meridiemIndicator(23), "pm");
    });

    it("returns PM #3", () => {
      assert.strictEqual(meridiemIndicator(15), "pm");
    });

    it("returns AM #1", () => {
      assert.strictEqual(meridiemIndicator(0), "am");
    });

    it("returns AM #2", () => {
      assert.strictEqual(meridiemIndicator(5), "am");
    });

    it("returns AM #3", () => {
      assert.strictEqual(meridiemIndicator(11), "am");
    });
  });

  describe("formatSeconds() returns double digit seconds", () => {
    it("returns double digit #1", () => {
      assert.strictEqual(formatSeconds(0), "00");
    });

    it("returns double digit #2", () => {
      assert.strictEqual(formatSeconds(6), "06");
    });
    it("returns double digit #2", () => {
      assert.strictEqual(formatSeconds(10), 10);
    });
  });

  describe("parseDay() returns human-readable day", () => {
    it("returns invalid day", () => {
      assert.strictEqual(parseDay(7), "invalid day");
    });

    it("returns monday", () => {
      assert.strictEqual(parseDay(1), "monday");
    });

    it("returns tuesday", () => {
      assert.strictEqual(parseDay(2), "tuesday");
    });

    it("returns wednesday", () => {
      assert.strictEqual(parseDay(3), "wednesday");
    });

    it("returns thursday", () => {
      assert.strictEqual(parseDay(4), "thursday");
    });

    it("returns friday", () => {
      assert.strictEqual(parseDay(5), "friday");
    });

    it("returns saturday", () => {
      assert.strictEqual(parseDay(6), "saturday");
    });

    it("returns sunday", () => {
      assert.strictEqual(parseDay(0), "sunday");
    });
  });

  describe("diurnalPeriods() returns a message appropriate for time of day", () => {
    it("returns morning #1", () => {
      assert.strictEqual(diurnalPeriods(9), "morning");
    });
    it("returns morning #2", () => {
      assert.strictEqual(diurnalPeriods(3), "evening");
    });
    it("returns afternoon #1", () => {
      assert.strictEqual(diurnalPeriods(12), "afternoon");
    });
    it("returns afternoon #2", () => {
      assert.strictEqual(diurnalPeriods(17), "afternoon");
    });
    it("returns evening #1", () => {
      assert.strictEqual(diurnalPeriods(23), "evening");
    });
    it("returns evening #2", () => {
      assert.strictEqual(diurnalPeriods(18), "evening");
    });
    it("returns evening #2", () => {
      assert.strictEqual(diurnalPeriods(0), "evening");
    });
  });

  describe("daySuffix() returns the correct suffix for a date", () => {
    it("21st", () => {
      assert.strictEqual(daySuffix(21), "st");
    });
    it("1st", () => {
      assert.strictEqual(daySuffix(1), "st");
    });
    it("18th", () => {
      assert.strictEqual(daySuffix(18), "th");
    });
    it("3rd", () => {
      assert.strictEqual(daySuffix(3), "rd");
    });
    it("2nd", () => {
      assert.strictEqual(daySuffix(2), "nd");
    });
    it("30th", () => {
      assert.strictEqual(daySuffix(30), "th");
    });
    it("17th", () => {
      assert.strictEqual(daySuffix(17), "th");
    });
  });

   describe("formatHour() returns 12hr conversion of 24hr time", () => {
    it("21", () => {
      assert.strictEqual(formatHour(21), 9);
    });
    it("1", () => {
      assert.strictEqual(formatHour(1), 1);
    });
    it("18", () => {
      assert.strictEqual(formatHour(18), 6);
    });
    it("3", () => {
      assert.strictEqual(formatHour(3), 3);
    });
    it("0", () => {
      assert.strictEqual(formatHour(0), 12);
    });
  });
}

runTests().catch(console.error);
