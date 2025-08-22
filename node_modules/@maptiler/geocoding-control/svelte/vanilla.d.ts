import type { ControlOptions, DispatcherType, MapController } from "./types";
type Options = ControlOptions & {
    mapController?: MapController;
};
interface GeocodingControlEvent<T> extends CustomEvent<T> {
    readonly target: GeocodingControl;
    readonly currentTarget: GeocodingControl;
}
type CustomEventListenerOrEventListenerObject<K extends keyof CustomEventMap> = ((evt: CustomEventMap[K]) => void) | {
    handleEvent(object: CustomEventMap[K]): void;
};
type CustomEventMap = {
    [T in keyof DispatcherType]: GeocodingControlEvent<DispatcherType[T]>;
};
export declare class GeocodingControl extends EventTarget {
    #private;
    constructor({ target, ...options }: Options & {
        target: HTMLElement;
    });
    /**
     * Update the control options.
     *
     * @param options options to update
     */
    setOptions(options: Partial<Options>): void;
    /**
     * Set the content of search input box.
     *
     * @param value text to set
     * @param submit perform the search
     */
    setQuery(value: string, submit?: boolean): void;
    /**
     * Clear geocoding search results from the map.
     */
    clearMap(): void;
    /**
     * Clear search result list.
     */
    clearList(): void;
    /**
     * Set reverse geocoding mode.
     *
     * @param reverseActive reverse geocoding active
     */
    setReverseMode(reverseActive: boolean): void;
    /**
     * Focus the search input box.
     *
     * @param options [FocusOptions](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#options)
     */
    focus(options?: FocusOptions): void;
    /**
     * Blur the search input box.
     */
    blur(): void;
    addEventListener<K extends keyof CustomEventMap>(type: K, callback: CustomEventListenerOrEventListenerObject<K> | null, options?: AddEventListenerOptions | boolean): void;
    removeEventListener<K extends keyof CustomEventMap>(type: K, callback: CustomEventListenerOrEventListenerObject<K> | null, options?: EventListenerOptions | boolean): void;
    dispatchEvent<K extends keyof CustomEventMap>(event: CustomEventMap[K]): boolean;
}
export {};
