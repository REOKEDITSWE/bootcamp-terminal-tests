// test/regCheck.test.js
import assert from "assert";
import { regCheck } from "../regCheck.js";

describe('The regCheck function', function() {
  it('should return true for a registration number that ends with GP', function() {
    assert.strictEqual(regCheck('DV 23 NB GP', 'GP'), true);
  });

  it('should return false for a registration number that does not end with GP', function() {
    assert.strictEqual(regCheck('DV 23 NB MP', 'GP'), false);
  });
});
