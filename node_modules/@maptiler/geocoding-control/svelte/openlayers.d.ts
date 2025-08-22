import type { Map } from "ol";
import type { ObjectEvent } from "ol/Object";
import type { CombinedOnSignature, EventTypes } from "ol/Observable";
import type { AnimationOptions, FitOptions } from "ol/View";
import { Control } from "ol/control";
import type { Options } from "ol/control/Control";
import type { EventsKey } from "ol/events";
import BaseEvent from "ol/events/Event";
import type { StyleLike } from "ol/style/Style";
import type { FlatStyleLike } from "ol/style/flat";
import type { ControlOptions, Feature, FeatureCollection } from "./types";
export { createOpenLayersMapController } from "./openlayers-controller";
type OpenLayersControlOptions = ControlOptions & Options & {
    flyTo?: boolean | (AnimationOptions & FitOptions);
    fullGeometryStyle?: StyleLike | FlatStyleLike;
};
type CustomEventMap = {
    select: SelectEvent;
    featureslisted: FeaturesListedEvent;
    featuresmarked: FeaturesMarkedEvent;
    optionsvisibilitychange: OptionsVisibilityChangeEvent;
    pick: PickEvent;
    querychange: QueryChangeEvent;
    response: ResponseEvent;
    reversetoggle: ReverseToggleEvent;
};
type CustomObjectOnSignature<ReturnType> = {
    <K extends keyof CustomEventMap>(type: K, listener: (evt: CustomEventMap[K]) => void): ReturnType;
} & {
    (type: "propertychange", listener: (evt: ObjectEvent) => void): ReturnType;
} & CombinedOnSignature<EventTypes | "propertychange" | keyof CustomEventMap, ReturnType>;
export declare class GeocodingControl extends Control {
    #private;
    on: CustomObjectOnSignature<EventsKey>;
    once: CustomObjectOnSignature<EventsKey>;
    un: CustomObjectOnSignature<EventsKey>;
    constructor(options: OpenLayersControlOptions);
    setMap(map: Map | null): void;
    /**
     * Update the control options.
     *
     * @param options options to update
     */
    setOptions(options: OpenLayersControlOptions): void;
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
}
export declare class SelectEvent extends BaseEvent {
    feature: Feature | undefined;
    constructor(feature: Feature | undefined);
}
export declare class FeaturesListedEvent extends BaseEvent {
    features: Feature[] | undefined;
    constructor(features: Feature[] | undefined);
}
export declare class FeaturesMarkedEvent extends BaseEvent {
    features: Feature[] | undefined;
    constructor(features: Feature[] | undefined);
}
export declare class OptionsVisibilityChangeEvent extends BaseEvent {
    optionsVisible: boolean;
    constructor(optionsVisible: boolean);
}
export declare class PickEvent extends BaseEvent {
    feature: Feature | undefined;
    constructor(feature: Feature | undefined);
}
export declare class QueryChangeEvent extends BaseEvent {
    query: string;
    constructor(query: string);
}
export declare class ResponseEvent extends BaseEvent {
    url: string;
    featureCollection: FeatureCollection;
    constructor(url: string, featureCollection: FeatureCollection);
}
export declare class ReverseToggleEvent extends BaseEvent {
    reverse: boolean;
    constructor(reverse: boolean);
}
