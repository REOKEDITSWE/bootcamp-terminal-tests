// test/countAllFromTown.test.js
import assert from "assert";
import { countAllFromTown } from "../countAllFromTown.js";

describe('The countAllFromTown function', function() {
  it('should return 2 for "CA 123, CY 123, CA 456" with town code "CA"', function() {
    assert.strictEqual(countAllFromTown('CA 123, CY 123, CA 456', 'CA'), 2);
  });

  it('should return 0 for "CA 123, CY 123" with town code "CJ"', function() {
    assert.strictEqual(countAllFromTown('CA 123, CY 123', 'CJ'), 0);
  });
});
