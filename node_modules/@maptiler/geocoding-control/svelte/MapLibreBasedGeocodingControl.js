import GeocodingControlComponent from "./GeocodingControl.svelte";
import { createMapLibreGlMapController, } from "./maplibregl-controller";
export { createMapLibreGlMapController, } from "./maplibregl-controller";
export function crateClasses(Evented, maplibreGl, getExtraProps) {
    // NOTE We can't use Maplibre `Event` - see https://github.com/maplibre/maplibre-gl-js/issues/5015
    class Event {
        type;
        target;
        constructor(target, type) {
            this.type = type;
            this.target = target;
        }
    }
    class SelectEvent extends Event {
        feature;
        constructor(target, details) {
            super(target, "select");
            Object.assign(this, details);
        }
    }
    class FeaturesListedEvent extends Event {
        features;
        constructor(target, features) {
            super(target, "featureslisted");
            this.features = features;
        }
    }
    class FeaturesMarkedEvent extends Event {
        features;
        constructor(target, features) {
            super(target, "featuresmarked");
            this.features = features;
        }
    }
    class OptionsVisibilityChangeEvent extends Event {
        optionsVisible;
        constructor(target, optionsVisible) {
            super(target, "optionsvisibilitychange");
            this.optionsVisible = optionsVisible;
        }
    }
    class PickEvent extends Event {
        feature;
        constructor(target, feature) {
            super(target, "pick");
            this.feature = feature;
        }
    }
    class QueryChangeEvent extends Event {
        query;
        constructor(target, query) {
            super(target, "querychange");
            this.query = query;
        }
    }
    class ResponseEvent extends Event {
        url;
        featureCollection;
        constructor(target, url, featureCollection) {
            super(target, "response");
            this.url = url;
            this.featureCollection = featureCollection;
        }
    }
    class ReverseToggleEvent extends Event {
        reverse;
        constructor(target, reverse) {
            super(target, "reversetoggle");
            this.reverse = reverse;
        }
    }
    class MapLibreBasedGeocodingControl extends Evented {
        #gc;
        #options;
        #container;
        constructor(options = {}) {
            super();
            this.#options = options;
        }
        onAddInt(map) {
            const div = document.createElement("div");
            div.className =
                "mapboxgl-ctrl-geocoder mapboxgl-ctrl maplibregl-ctrl-geocoder maplibregl-ctrl mapboxgl-ctrl-group";
            const { marker, showResultMarkers, flyTo, fullGeometryStyle, ...restOptions } = this.#options;
            const flyToOptions = typeof flyTo === "boolean" ? {} : flyTo;
            const mapController = createMapLibreGlMapController(map, maplibreGl, marker, showResultMarkers, flyToOptions, flyToOptions, fullGeometryStyle);
            const props = {
                mapController,
                flyTo: flyTo === undefined ? true : !!flyTo,
                apiKey: "", // just to satisfy apiKey; TODO find a better solution
                ...getExtraProps?.(map, div),
                ...restOptions,
            };
            if (!props.apiKey) {
                console.warn("No MapTiler Cloud API key was provided, some or all geocoding requests may fail");
            }
            this.#gc = new GeocodingControlComponent({ target: div, props });
            this.#gc.$on("select", (event) => {
                this.fire(new SelectEvent(this, event.detail));
            });
            this.#gc.$on("pick", (event) => {
                this.fire(new PickEvent(this, event.detail.feature));
            });
            this.#gc.$on("featureslisted", (event) => {
                this.fire(new FeaturesListedEvent(this, event.detail.features));
            });
            this.#gc.$on("featuresmarked", (event) => {
                this.fire(new FeaturesMarkedEvent(this, event.detail.features));
            });
            this.#gc.$on("response", (event) => {
                this.fire(new ResponseEvent(this, event.detail.url, event.detail.featureCollection));
            });
            this.#gc.$on("optionsvisibilitychange", (event) => {
                this.fire(new OptionsVisibilityChangeEvent(this, event.detail.optionsVisible));
            });
            this.#gc.$on("reversetoggle", (event) => {
                this.fire(new ReverseToggleEvent(this, event.detail.reverse));
            });
            this.#gc.$on("querychange", (event) => {
                this.fire(new QueryChangeEvent(this, event.detail.query));
            });
            this.#container = div;
            return div;
        }
        on(type, listener) {
            return super.on(type, listener);
        }
        once(type, listener) {
            return super.once(type, listener);
        }
        off(type, listener) {
            return super.off(type, listener);
        }
        listens(type) {
            return super.listens(type);
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
            this.#gc = undefined;
            this.#container?.parentNode?.removeChild(this.#container);
        }
    }
    const events = {
        SelectEvent,
        FeaturesListedEvent,
        FeaturesMarkedEvent,
        OptionsVisibilityChangeEvent,
        PickEvent,
        QueryChangeEvent,
        ResponseEvent,
        ReverseToggleEvent,
    };
    return {
        MapLibreBasedGeocodingControl,
        events,
    };
}
