"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toCoordinateFormat_js_1 = __importDefault(require("../toCoordinateFormat.js"));
let test = {
    decimalCoordinates: '-24.3456, 28.92435',
    toCoordinateFormat: toCoordinateFormat_js_1.default
};
console.log(test.decimalCoordinates, '==', test.toCoordinateFormat('DMS'));
test.decimalCoordinates = '-25.76887,28.26939';
console.log(test.decimalCoordinates, '==', test.toCoordinateFormat('DMS'));
console.log(test.decimalCoordinates, '==', test.toCoordinateFormat('DM'));
console.log(test.decimalCoordinates, '==', test.toCoordinateFormat('DD'));
test.decimalCoordinates = '-25.815928, 28.070318';
console.log(test.decimalCoordinates, '==', test.toCoordinateFormat('DM'));
test.decimalCoordinates = '-25.000, 28.000';
console.log(test.decimalCoordinates, '==', test.toCoordinateFormat('DMS'));
console.log(test.decimalCoordinates, '==', test.toCoordinateFormat('DM'));
