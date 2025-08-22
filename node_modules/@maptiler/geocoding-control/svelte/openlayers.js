import { Control } from "ol/control";
import BaseEvent from "ol/events/Event";
import GeocodingControlComponent from "./GeocodingControl.svelte";
import { createOpenLayersMapController } from "./openlayers-controller";
export { createOpenLayersMapController } from "./openlayers-controller";
export class GeocodingControl extends Control {
    #gc;
    #options;
    constructor(options) {
        const div = document.createElement("div");
        div.className = "ol-search";
        super({
            element: div,
            target: options.target,
        });
        const { flyTo, fullGeometryStyle, ...restOptions } = options;
        this.#gc = new GeocodingControlComponent({
            target: div,
            props: {
                flyTo: flyTo === undefined ? true : !!flyTo,
                ...restOptions,
            },
        });
        this.#gc.$on("select", (event) => {
            this.dispatchEvent(new SelectEvent(event.detail.feature));
        });
        this.#gc.$on("pick", (event) => {
            this.dispatchEvent(new PickEvent(event.detail.feature));
        });
        this.#gc.$on("featureslisted", (event) => {
            this.dispatchEvent(new FeaturesListedEvent(event.detail.features));
        });
        this.#gc.$on("featuresmarked", (event) => {
            this.dispatchEvent(new FeaturesMarkedEvent(event.detail.features));
        });
        this.#gc.$on("response", (event) => {
            this.dispatchEvent(new ResponseEvent(event.detail.url, event.detail.featureCollection));
        });
        this.#gc.$on("optionsvisibilitychange", (event) => {
            this.dispatchEvent(new OptionsVisibilityChangeEvent(event.detail.optionsVisible));
        });
        this.#gc.$on("reversetoggle", (event) => {
            this.dispatchEvent(new ReverseToggleEvent(event.detail.reverse));
        });
        this.#gc.$on("querychange", (event) => {
            this.dispatchEvent(new QueryChangeEvent(event.detail.query));
        });
        this.#options = options;
    }
    setMap(map) {
        super.setMap(map);
        if (map) {
            const { 
            // marker,
            // showResultMarkers,
            flyTo, fullGeometryStyle, } = this.#options;
            const mapController = createOpenLayersMapController(map, typeof flyTo === "boolean" ? undefined : flyTo, typeof flyTo === "boolean" ? undefined : flyTo, 
            // marker,
            // showResultMarkers,
            fullGeometryStyle);
            this.#gc?.$set({ mapController });
        }
    }
    /**
     * Update the control options.
     *
     * @param options options to update
     */
    setOptions(options) {
        Object.assign(this.#options, options);
        const { flyTo, fullGeometryStyle, ...restOptions } = this.#options;
        this.#gc?.$set({
            ...restOptions,
            flyTo: flyTo === undefined ? true : !!flyTo,
        });
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
}
export class SelectEvent extends BaseEvent {
    feature;
    constructor(feature) {
        super("select");
        this.feature = feature;
    }
}
export class FeaturesListedEvent extends BaseEvent {
    features;
    constructor(features) {
        super("featureslisted");
        this.features = features;
    }
}
export class FeaturesMarkedEvent extends BaseEvent {
    features;
    constructor(features) {
        super("featuresmarked");
        this.features = features;
    }
}
export class OptionsVisibilityChangeEvent extends BaseEvent {
    optionsVisible;
    constructor(optionsVisible) {
        super("optionsvisibilitychange");
        this.optionsVisible = optionsVisible;
    }
}
export class PickEvent extends BaseEvent {
    feature;
    constructor(feature) {
        super("pick");
        this.feature = feature;
    }
}
export class QueryChangeEvent extends BaseEvent {
    query;
    constructor(query) {
        super("querychange");
        this.query = query;
    }
}
export class ResponseEvent extends BaseEvent {
    url;
    featureCollection;
    constructor(url, featureCollection) {
        super("response");
        this.url = url;
        this.featureCollection = featureCollection;
    }
}
export class ReverseToggleEvent extends BaseEvent {
    reverse;
    constructor(reverse) {
        super("reversetoggle");
        this.reverse = reverse;
    }
}
