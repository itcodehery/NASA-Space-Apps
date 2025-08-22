import * as L from "leaflet";
import GeocodingControlComponent from "./GeocodingControl.svelte";
import { createLeafletMapController } from "./leaflet-controller";
export { createLeafletMapController } from "./leaflet-controller";
/**
 * Leaflet mixins https://leafletjs.com/reference.html#class
 * for TypeScript https://www.typescriptlang.org/docs/handbook/mixins.html
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class EventedControl extends L.Control {
}
L.Util.extend(EventedControl.prototype, L.Evented.prototype);
export class GeocodingControl extends EventedControl {
    #gc;
    #options;
    constructor(options) {
        super(options);
        this.#options = options;
    }
    onAdd(map) {
        const div = document.createElement("div");
        div.className = "leaflet-ctrl-geocoder";
        L.DomEvent.disableClickPropagation(div);
        L.DomEvent.disableScrollPropagation(div);
        const { marker, showResultMarkers, flyTo, fullGeometryStyle, position, ...restOptions } = this.#options;
        const flyToOptions = typeof flyTo === "boolean" ? {} : flyTo;
        const mapController = createLeafletMapController(map, marker, showResultMarkers, flyToOptions, flyToOptions, fullGeometryStyle);
        this.#gc = new GeocodingControlComponent({
            target: div,
            props: {
                mapController,
                flyTo: flyTo === undefined ? true : !!flyTo,
                ...restOptions,
            },
        });
        const eventNames = {
            select: undefined,
            pick: undefined,
            featureslisted: undefined,
            featuresmarked: undefined,
            response: undefined,
            optionsvisibilitychange: undefined,
            reversetoggle: undefined,
            querychange: undefined,
        };
        for (const eventName in eventNames) {
            this.#gc.$on(eventName, (event) => this.fire(eventName, event.detail));
        }
        return div;
    }
    /**
     * Update the control options.
     *
     * @param options options to update
     */
    setOptions(options) {
        Object.assign(this.#options, options);
        const { marker, showResultMarkers, flyTo, fullGeometryStyle, ...restOptions } = this.#options;
        this.#gc?.$set(restOptions);
    }
    /**
     * Set the content of search input box.
     *
     * @param value text to set
     * @param submit perform the search
     */
    setQuery(value, submit = true) {
        this.#gc?.setQuery(value, submit);
    }
    /**
     * Clear geocoding search results from the map.
     */
    clearMap() {
        this.#gc?.clearMap();
    }
    /**
     * Clear search result list.
     */
    clearList() {
        this.#gc?.clearList();
    }
    /**
     * Set reverse geocoding mode.
     *
     * @param reverseActive reverse geocoding active
     */
    setReverseMode(reverseActive) {
        this.#gc?.$set({ reverseActive });
    }
    /**
     * Focus the search input box.
     *
     * @param options [FocusOptions](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#options)
     */
    focus(options) {
        this.#gc?.focus(options);
    }
    /**
     * Blur the search input box.
     */
    blur() {
        this.#gc?.blur();
    }
    onRemove() {
        this.#gc?.$destroy();
    }
}
function createControl(...params) {
    return new GeocodingControl(...params);
}
if (window.L &&
    typeof window.L === "object" &&
    typeof window.L.control === "function") {
    window.L.control.maptilerGeocoding = createControl;
}
