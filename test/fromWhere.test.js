import assert from "assert";
import { fromWhere } from "../fromWhere.js";

describe("The fromWhere function", function () {

    it("should return 'Bellville' for registration numbers starting with 'CY'", function () {
        assert.equal(fromWhere("CY 123"), "Bellville");
    });

    it("should return 'Paarl' for registration numbers starting with 'CJ'", function () {
        assert.equal(fromWhere("CJ 456"), "Paarl");
    });

    it("should return 'Cape Town' for registration numbers starting with 'CA'", function () {
        assert.equal(fromWhere("CA 789"), "Cape Town");
    });

    it("should return 'Some other place!' for registration numbers starting with any other prefix", function () {
        assert.equal(fromWhere("ZN 123"), "Some other place!");
        assert.equal(fromWhere("MP 456"), "Some other place!");
        assert.equal(fromWhere("GP 789"), "Some other place!");
    });

    it("should return 'Some other place!' for an empty registration number", function () {
        assert.equal(fromWhere(""), "Some other place!");
    });

    it("should return 'Some other place!' for null or undefined registration numbers", function () {
        assert.equal(fromWhere(null), "Some other place!");
        assert.equal(fromWhere(undefined), "Some other place!");
    });
});
