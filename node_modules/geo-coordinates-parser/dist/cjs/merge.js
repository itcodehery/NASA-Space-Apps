"use strict";
//adds the formats to the convert object
//we need to use this as the source for the npm package so that the formats are not included in the bundle
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const converter_js_1 = __importDefault(require("./converter.js"));
const testformats_js_1 = __importDefault(require("./tests/testformats.js"));
converter_js_1.default.formats = testformats_js_1.default.map(format => format.verbatimCoordinates);
exports.convert = converter_js_1.default;
