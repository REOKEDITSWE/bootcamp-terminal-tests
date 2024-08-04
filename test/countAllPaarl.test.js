// test/countAllPaarl.test.js
import assert from "assert";
import { countAllPaarl } from "../countAllPaarl.js";

describe('The countAllPaarl function', function() {
  it('should return 2 for "CJ 123, CA 123, CJ 456"', function() {
    assert.strictEqual(countAllPaarl('CJ 123, CA 123, CJ 456'), 2);
  });

  it('should return 0 for "CA 123, CY 123"', function() {
    assert.strictEqual(countAllPaarl('CA 123, CY 123'), 0);
  });
});
