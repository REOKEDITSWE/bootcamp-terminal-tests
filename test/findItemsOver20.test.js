import { findItemsOver20 } from "../findItemsOver20.js";
import assert from "assert";

describe("findItemsOver20 function", () => {
  it("should return items with quantity greater than 20", () => {
    const items = [
      { name: "item1", qty: 10 },
      { name: "item2", qty: 30 },
      { name: "item3", qty: 25 },
    ];
    const result = findItemsOver20(items);
    assert.deepStrictEqual(result, [
      { name: "item2", qty: 30 },
      { name: "item3", qty: 25 },
    ]);
  });

  it("should return an empty array if no items have quantity over 20", () => {
    const items = [
      { name: "item1", qty: 10 },
      { name: "item2", qty: 5 },
    ];
    const result = findItemsOver20(items);
    assert.deepStrictEqual(result, []);
  });
});
