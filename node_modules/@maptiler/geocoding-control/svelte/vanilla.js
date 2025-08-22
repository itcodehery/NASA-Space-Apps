import GeocodingControlComponent from "./GeocodingControl.svelte";
const finalizationRegistry = new FinalizationRegistry((gc) => {
    gc.$destroy();
});
export class GeocodingControl extends EventTarget {
    #gc;
    constructor({ target, ...options }) {
        super();
        this.#gc = new GeocodingControlComponent({
            target,
            props: options,
        });
        for (const eventName of [
            "select",
            "pick",
            "featureslisted",
            "featuresmarked",
            "response",
            "optionsvisibilitychange",
            "reversetoggle",
            "querychange",
        ]) {
            this.#gc.$on(eventName, (event) => {
                // Use the new `emit` method for type-safe dispatching
                this.#emit(eventName, event.detail);
            });
        }
        this.#gc.$on("select", (event) => {
            const geocodingEvent = new CustomEvent(event.type, {
                detail: event.detail,
            });
            this.dispatchEvent(geocodingEvent);
        });
        finalizationRegistry.register(this, this.#gc);
    }
    /**
     * Update the control options.
     *
     * @param options options to update
     */
    setOptions(options) {
        this.#gc.$set(options);
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
    addEventListener(type, callback, options) {
        super.addEventListener(type, callback, options);
    }
    removeEventListener(type, callback, options) {
        super.removeEventListener(type, callback, options);
    }
    dispatchEvent(event) {
        return super.dispatchEvent(event);
    }
    #emit(type, detail) {
        return super.dispatchEvent(new CustomEvent(type, {
            detail,
        }));
    }
}
