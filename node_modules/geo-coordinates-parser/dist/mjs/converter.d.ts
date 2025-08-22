export default converter;
/**
 * Function for converting coordinates in a variety of formats to decimal coordinates
 * @param {string} coordsString The coordinates string to convert
 * @param {number} [decimalPlaces] The number of decimal places for converted coordinates; default is 5
 * @returns {{verbatimCoordinates: string, decimalCoordinates: string, decimalLatitude: number, decimalLongitude: number, closeEnough: function(string): boolean, toCoordinateFormat: toCoordinateFormat}}
 */
declare function converter(coordsString: string, decimalPlaces?: number | undefined): {
    verbatimCoordinates: string;
    decimalCoordinates: string;
    decimalLatitude: number;
    decimalLongitude: number;
    closeEnough: (arg0: string) => boolean;
    toCoordinateFormat: typeof toCoordinateFormat;
};
declare namespace converter {
    export { to };
}
import toCoordinateFormat from './toCoordinateFormat.js';
declare const to: Readonly<{
    DMS: "DMS";
    DM: "DM";
    DD: "DD";
}>;
