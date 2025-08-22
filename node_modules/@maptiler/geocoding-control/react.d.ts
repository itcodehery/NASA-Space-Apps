import type { ControlOptions, DispatcherTypeCC, MapController } from "./types";
type EventNames = keyof DispatcherTypeCC;
type EventHandlerFnName<T extends EventNames> = `on${Capitalize<T>}`;
type CallbackProperties<T> = {
    [K in keyof T as EventHandlerFnName<Extract<K, EventNames>>]?: (event: T[K]) => void;
};
type MapControllerProp = {
    mapController?: MapController;
};
export type Props = ControlOptions & CallbackProperties<DispatcherTypeCC> & MapControllerProp;
export type Methods = {
    /**
     * Blur the search input box.
     */
    blur(): void;
    /**
     * Focus the search input box.
     *
     * @param options [FocusOptions](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#options)
     */
    focus(options?: FocusOptions): void;
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
};
declare const ReactGeocodingControl: import("react").ForwardRefExoticComponent<ControlOptions & CallbackProperties<DispatcherTypeCC> & MapControllerProp & import("react").RefAttributes<Methods>>;
export { ReactGeocodingControl as GeocodingControl };
