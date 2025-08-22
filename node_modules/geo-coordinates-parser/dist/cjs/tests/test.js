"use strict";
// when adding new formats, make sure to add them to testformats.js, and not to testFormats.json
// use makeTestFormatsJSON.js to make testFormats.json
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const converter_js_1 = __importDefault(require("../converter.js"));
const testformats_js_1 = __importDefault(require("./testformats.js"));
const failFormats_js_1 = __importDefault(require("./failFormats.js"));
let allPassed = true;
//FORMATS THAT SHOULD BE CONVERTED
for (const t of testformats_js_1.default) {
    try {
        const converted = (0, converter_js_1.default)(t.verbatimCoordinates, 8);
        const testDecimalCoordsString = `${t.decimalLatitude},${t.decimalLongitude}`;
        //check the calculation is correct
        if (!converted.closeEnough(testDecimalCoordsString)) {
            console.log("Error in decimal conversion");
            console.log(t.verbatimCoordinates);
            console.log(t.decimalLatitude);
            console.log(t.decimalLongitude);
            allPassed = false;
        }
        //check the verbatim coords are correct
        if (converted.verbatimLatitude != t.verbatimLatitude || converted.verbatimLongitude != t.verbatimLongitude) {
            console.log("Error in verbatim extraction");
            console.log('For', t.verbatimCoordinates);
            console.log('got', converted.verbatimLatitude, 'should be ', t.verbatimLatitude);
            console.log('got', converted.verbatimLongitude, 'should be', t.verbatimLongitude);
            allPassed = false;
        }
    }
    catch (err) {
        console.log("Failed to convert the following format");
        console.log(t.verbatimCoordinates);
        console.log(err.message);
        allPassed = false;
    }
}
//FORMATS THAT SHOULD NOT BE CONVERTED
const converting = [];
for (let f of failFormats_js_1.default) {
    try {
        const converted = (0, converter_js_1.default)(f);
        converting.push(f);
        allPassed = false;
    }
    catch (_a) {
        //nothing here
    }
}
if (converting.length) {
    console.log("The following coordinates should NOT have converted successfully: " + converting.join(' | '));
}
if (allPassed) {
    console.log("all formats successfully converted");
}
