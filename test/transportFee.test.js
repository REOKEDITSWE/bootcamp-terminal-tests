import { transportFee } from "../transportFee.js";
import assert from "assert";

describe("transportFee function", () => {
  it("should return R20 for times between 6 and 9", () => {
    assert.strictEqual(transportFee(7), 'R20');
  });

  it("should return R15 for times between 9 and 18", () => {
    assert.strictEqual(transportFee(10), 'R15');
  });

  it("should return R10 for times after 18", () => {
    assert.strictEqual(transportFee(19), 'R10');
  });

  it("should return R10 for times before 6", () => {
    assert.strictEqual(transportFee(5), 'R10');
  });
});
