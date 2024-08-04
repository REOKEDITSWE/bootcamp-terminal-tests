import assert from "assert";
import { findItemsOver } from "../findItemsOver.js";

describe("The findItemsOver function", function () {

    it("should return all items with quantity greater than the specified threshold", function () {
        const items = [
            { name: "apples", qty: 10 },
            { name: "pears", qty: 37 },
            { name: "bananas", qty: 27 },
            { name: "grapes", qty: 5 }
        ];
        const threshold = 20;
        const result = findItemsOver(items, threshold);
        assert.deepEqual(result, [
            { name: "pears", qty: 37 },
            { name: "bananas", qty: 27 }
        ]);
    });

    it("should return an empty array if no items have quantity greater than the specified threshold", function () {
        const items = [
            { name: "apples", qty: 10 },
            { name: "pears", qty: 7 },
            { name: "bananas", qty: 15 },
            { name: "grapes", qty: 5 }
        ];
        const threshold = 20;
        const result = findItemsOver(items, threshold);
        assert.deepEqual(result, []);
    });

    it("should return all items with quantity greater than the specified threshold when all items meet the criteria", function () {
        const items = [
            { name: "apples", qty: 30 },
            { name: "pears", qty: 45 },
            { name: "bananas", qty: 27 },
            { name: "grapes", qty: 22 }
        ];
        const threshold = 20;
        const result = findItemsOver(items, threshold);
        assert.deepEqual(result, [
            { name: "apples", qty: 30 },
            { name: "pears", qty: 45 },
            { name: "bananas", qty: 27 },
            { name: "grapes", qty: 22 }
        ]);
    });
    
    it("should return an empty array if the items array is empty", function () {
        const items = [];
        const threshold = 20;
        const result = findItemsOver(items, threshold);
        assert.deepEqual(result, []);
    });

    it("should return an empty array if all items have quantity less than or equal to the specified threshold", function () {
        const items = [
            { name: "apples", qty: 10 },
            { name: "pears", qty: 15 },
            { name: "bananas", qty: 5 }
        ];
        const threshold = 20;
        const result = findItemsOver(items, threshold);
        assert.deepEqual(result, []);
    });
});
