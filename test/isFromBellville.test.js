// test/isFromBellville.test.js
import assert from "assert";
import { isFromBellville } from "../isFromBellville.js";

describe('The isFromBellville function', function() {
  it('should return true for a registration number from Bellville', function() {
    assert.strictEqual(isFromBellville('CY 123'), true);
  });

  it('should return false for a registration number not from Bellville', function() {
    assert.strictEqual(isFromBellville('CJ 123'), false);
  });
});
