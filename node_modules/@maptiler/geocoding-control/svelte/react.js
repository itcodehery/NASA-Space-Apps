import { createElement, forwardRef, useEffect, useImperativeHandle, useRef, } from "react";
import GeocodingControl from "./GeocodingControl.svelte";
const eventNames = [
    "featuresListed",
    "featuresMarked",
    "optionsVisibilityChange",
    "pick",
    "queryChange",
    "response",
    "reverseToggle",
    "select",
];
const propertyNames = [
    "adjustUrlQuery",
    "adjustUrl",
    "apiKey",
    "apiUrl",
    "bbox",
    "class",
    "clearButtonTitle",
    "clearListOnPick",
    "clearOnBlur",
    "collapsed",
    "country",
    "debounceSearch",
    "enableReverse",
    "errorMessage",
    "excludeTypes",
    "reverseGeocodingExcludeTypes",
    "exhaustiveReverseGeocoding",
    "fetchParameters",
    "filter",
    "flyToSelected",
    "fuzzyMatch",
    "iconsBaseUrl",
    "keepListOpen",
    "language",
    "limit",
    "reverseGeocodingLimit",
    "mapController",
    "markerOnSelected",
    "minLength",
    "noResultsMessage",
    "pickedResultStyle",
    "placeholder",
    "proximity",
    "reverseActive",
    "reverseButtonTitle",
    "selectFirst",
    "showPlaceType",
    "showResultsWhileTyping",
    "types",
    "reverseGeocodingTypes",
    "zoom",
];
function getEventFnName(name) {
    return ("on" +
        name[0].toUpperCase() +
        name.slice(1));
}
const ReactGeocodingControl = forwardRef(function ReactGeocodingControl(props, ref) {
    const divRef = useRef(undefined);
    const controlRef = useRef(undefined);
    const options = { ...props };
    for (const eventName of eventNames) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete options[getEventFnName(eventName)];
    }
    useEffect(() => {
        if (!divRef.current) {
            throw new Error();
        }
        const control = new GeocodingControl({
            target: divRef.current,
            props: options,
        });
        controlRef.current = control;
        return () => control.$destroy();
    }, []);
    // watch change on every option
    for (const propName of propertyNames) {
        useEffect(() => {
            if (controlRef.current && props[propName] !== undefined) {
                controlRef.current.$set({ [propName]: props[propName] });
            }
        }, [props[propName]]);
    }
    // attach event handlers
    for (const eventName of eventNames) {
        const eventHandlerFn = props[getEventFnName(eventName)];
        useEffect(() => eventHandlerFn &&
            controlRef.current?.$on(eventName.toLowerCase(), (e) => {
                eventHandlerFn(e.detail);
            }), [eventHandlerFn]);
    }
    useImperativeHandle(ref, () => ({
        setQuery: (value, submit = true) => controlRef.current?.setQuery(value, submit),
        clearMap: () => controlRef.current?.clearMap(),
        clearList: () => controlRef.current?.clearList(),
        focus: (options) => controlRef.current?.focus(options),
        blur: () => controlRef.current?.blur(),
        setReverseMode: (reverseActive) => controlRef.current?.$set({ reverseActive }),
    }));
    return createElement("div", { ref: divRef });
});
export { ReactGeocodingControl as GeocodingControl };
