// test/isWeekday.test.js
import assert from "assert";
import { isWeekday } from "../isWeekday.js";

describe('The isWeekday function', function() {
  it('should return true for "Monday"', function() {
    assert.strictEqual(isWeekday('Monday'), true);
  });

  it('should return false for "Sunday"', function() {
    assert.strictEqual(isWeekday('Sunday'), false);
  });
});
