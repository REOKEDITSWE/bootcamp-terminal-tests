// test/greet.test.js
import assert from "assert";
import { greet } from "../greet.js";

describe('The greet function', function() {
  it('should greet Reo correctly', function() {
    assert.strictEqual(greet('Reo'), 'Hello, Reo');
  });

  it('should greet Karen correctly', function() {
    assert.strictEqual(greet('Bowen'), 'Hello, Bowen');
  });
});
