// test/totalPhoneBill.test.js
import assert from "assert";
import { totalPhoneBill } from "../totalPhoneBill.js";

describe('The totalPhoneBill function', function() {
  it('should return "R7.45" for "call, sms, call"', function() {
    assert.strictEqual(totalPhoneBill('call, sms, call'), 'R7.45');
  });

  it('should return "R1.30" for "sms, sms"', function() {
    assert.strictEqual(totalPhoneBill('sms, sms'), 'R1.30');
  });
});
