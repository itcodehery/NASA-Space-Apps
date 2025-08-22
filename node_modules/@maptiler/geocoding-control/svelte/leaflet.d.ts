import * as L from "leaflet";
import type { ControlOptions, DispatcherType, Feature } from "./types";
export { createLeafletMapController } from "./leaflet-controller";
type LeafletControlOptions = ControlOptions & L.ControlOptions & {
    /**
     * Marker to be added to the map at the location of the user-selected result using a default set of Marker options.
     *
     * - If `true` or `undefined` then a default marker will be used.\
     * - If the value is [MarkerOptions](https://leafletjs.com/reference.html#marker-option) then the marker will be constructed using these options.
     * - If the value is a function then it can create and configure custom [Marker](https://leafletjs.com/reference.html#marker),
     *     add it to the [Map](https://leafletjs.com/reference.html#map) and return it.
     *   Function accepts [Map](https://leafletjs.com/reference.html#map) and `Feature` as parameters.
     *   Feature is `undefined` for the reverse location marker.
     * - If `false` or `null` then no marker will be added to the map.
     *
     * Default value is `true`.
     */
    marker?: null | boolean | L.MarkerOptions | ((map: L.Map, feature?: Feature) => L.Marker | undefined | null);
    /**
     * Marker be added to the map at the location the geocoding results.
     *
     * - If `true` or `undefined` then a default marker will be used.
     * - If the value is [MarkerOptions](https://leafletjs.com/reference.html#marker-option) then the marker will be constructed using these options.
     * - If the value is a function then it can create and configure custom [Marker](https://leafletjs.com/reference.html#marker),
     *     add it to the [Map](https://leafletjs.com/reference.html#map) and return it.
     *   In this case the default pop-up won't be added to the marker.
     *   Function accepts [Map](https://leafletjs.com/reference.html#map) and `Feature` as parameters.
     * - If `false` or `null` then no marker will be added to the map.
     *
     * Default value is `true`.
     */
    showResultMarkers?: null | boolean | L.MarkerOptions | ((map: L.Map, feature: Feature) => L.Marker | undefined | null);
    /**
     * Animation to selected feature on the map.
     *
     * - If `false` or `null` then animating the map to a selected result is disabled.
     * - If `true` or `undefined` then animating the map will use the default animation parameters.
     * - If an [ZoomPanOptions](https://leafletjs.com/reference.html#zoom/pan-options)
     *     ` & `[FitBoundsOptions](https://leafletjs.com/reference.html#fitbounds-options) then it will be passed as options
     *     to the map [flyTo](https://leafletjs.com/reference.html#map-flyto)
     *     or [fitBounds](https://leafletjs.com/reference.html#map-fitbounds) method providing control over the animation of the transition.
     *
     * Default value is `true`.
     */
    flyTo?: null | boolean | (L.ZoomPanOptions & L.FitBoundsOptions);
    /**
     * Style for the full feature geometry.
     *
     * - If `false` or `null` then no full geometry is drawn.
     * - If `true` or `undefined` then default-styled full geometry is drawn.
     * - If an [PathOptions](https://leafletjs.com/reference.html#path-option) then it will be used to style the full geometry.
     * - If a function accepting a `Feature` and returning [PathOptions](https://leafletjs.com/reference.html#path-option)
     *     then it must teturn the style and will be used to style the full geometry.
     */
    fullGeometryStyle?: null | boolean | L.PathOptions | L.StyleFunction;
};
type LeafletEvent<T> = {
    type: T;
    target: GeocodingControl;
    sourceTarget: GeocodingControl;
};
type CustomEventMap = {
    [T in keyof DispatcherType]: DispatcherType[T] & LeafletEvent<T>;
};
/**
 * Leaflet mixins https://leafletjs.com/reference.html#class
 * for TypeScript https://www.typescriptlang.org/docs/handbook/mixins.html
 * @internal
 */
declare class EventedControl extends L.Control {
}
interface EventedControl extends L.Control {
    on<T extends keyof CustomEventMap>(type: T, fn: (event: CustomEventMap[T]) => void, context?: unknown): this;
    addEventListener<T extends keyof CustomEventMap>(type: T, fn: (event: CustomEventMap[T]) => void, context?: unknown): this;
    once<T extends keyof CustomEventMap>(type: T, fn: (event: CustomEventMap[T]) => void, context?: unknown): this;
    addOneTimeEventListener<T extends keyof CustomEventMap>(type: T, fn: (event: CustomEventMap[T]) => void, context?: unknown): this;
    off<T extends keyof CustomEventMap>(type?: T, fn?: (event: CustomEventMap[T]) => void, context?: unknown): this;
    off(eventMap?: {
        [T in keyof CustomEventMap]?: (event: CustomEventMap[T]) => void;
    }): this;
    removeEventListener<T extends keyof CustomEventMap>(type?: T, fn?: (event: CustomEventMap[T]) => void, context?: unknown): this;
    listens<T extends keyof CustomEventMap>(type: T, fn: (event: CustomEventMap[T]) => void, context?: unknown, propagate?: boolean): boolean;
    fire(type: string, data?: unknown, propagate?: boolean): this;
    addEventParent(obj: L.Evented): this;
    removeEventParent(obj: L.Evented): this;
    fireEvent(type: string, data?: unknown, propagate?: boolean): this;
    hasEventListeners<T extends keyof CustomEventMap>(type: T): boolean;
}
export declare class GeocodingControl extends EventedControl {
    #private;
    constructor(options: LeafletControlOptions);
    onAdd(map: L.Map): HTMLDivElement;
    /**
     * Update the control options.
     *
     * @param options options to update
     */
    setOptions(options: LeafletControlOptions): void;
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
    onRemove(): void;
}
