import type { Map } from "maplibre-gl";
import * as maplibregl from "maplibre-gl";
import { type MapLibreBaseControlOptions } from "./MapLibreBasedGeocodingControl";
export { createMapLibreGlMapController } from "./maplibregl-controller";
type Options = MapLibreBaseControlOptions & {
    /**
     * Maptiler API key. Optional if used with MapTiler SDK.
     */
    apiKey?: string;
};
declare const MapLibreBasedGeocodingControl: {
    new (options?: Options): {
        "__#1@#gc"?: import("./GeocodingControl.svelte").default;
        "__#1@#options": Options;
        "__#1@#container"?: HTMLElement;
        onAddInt(map: Map): HTMLElement;
        on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): maplibregl.Subscription;
        once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
        off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): /*elided*/ any;
        listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
        setOptions(options: Options): void;
        setQuery(value: string, submit?: boolean): void;
        clearMap(): void;
        clearList(): void;
        setReverseMode(reverseActive: boolean): void;
        focus(options?: FocusOptions): void;
        blur(): void;
        onRemove(): void;
        _listeners: maplibregl.Listeners;
        _oneTimeListeners: maplibregl.Listeners;
        _eventedParent: maplibregl.Evented;
        _eventedParentData: any | (() => any);
        fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
        setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
    };
};
export declare class GeocodingControl extends MapLibreBasedGeocodingControl implements maplibregl.IControl {
    onAdd(map: Map): HTMLElement;
}
export declare const SelectEvent: {
    new (target: {
        "__#1@#gc"?: import("./GeocodingControl.svelte").default;
        "__#1@#options": Options;
        "__#1@#container"?: HTMLElement;
        onAddInt(map: Map): HTMLElement;
        on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): maplibregl.Subscription;
        once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
        off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): /*elided*/ any;
        listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
        setOptions(options: Options): void;
        setQuery(value: string, submit?: boolean): void;
        clearMap(): void;
        clearList(): void;
        setReverseMode(reverseActive: boolean): void;
        focus(options?: FocusOptions): void;
        blur(): void;
        onRemove(): void;
        _listeners: maplibregl.Listeners;
        _oneTimeListeners: maplibregl.Listeners;
        _eventedParent: maplibregl.Evented;
        _eventedParentData: any | (() => any);
        fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
        setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
    }, details: {
        feature: import("./types").Feature | undefined;
    }): {
        feature: import("./types").Feature | undefined;
        readonly type: "select";
        readonly target: {
            "__#1@#gc"?: import("./GeocodingControl.svelte").default;
            "__#1@#options": Options;
            "__#1@#container"?: HTMLElement;
            onAddInt(map: Map): HTMLElement;
            on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: /*elided*/ any;
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void): maplibregl.Subscription;
            once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                select: /*elided*/ any;
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
            off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: /*elided*/ any;
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void): /*elided*/ any;
            listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
            setOptions(options: Options): void;
            setQuery(value: string, submit?: boolean): void;
            clearMap(): void;
            clearList(): void;
            setReverseMode(reverseActive: boolean): void;
            focus(options?: FocusOptions): void;
            blur(): void;
            onRemove(): void;
            _listeners: maplibregl.Listeners;
            _oneTimeListeners: maplibregl.Listeners;
            _eventedParent: maplibregl.Evented;
            _eventedParentData: any | (() => any);
            fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
            setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
        };
    };
};
export declare const FeaturesListedEvent: {
    new (target: {
        "__#1@#gc"?: import("./GeocodingControl.svelte").default;
        "__#1@#options": Options;
        "__#1@#container"?: HTMLElement;
        onAddInt(map: Map): HTMLElement;
        on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): maplibregl.Subscription;
        once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
        off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): /*elided*/ any;
        listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
        setOptions(options: Options): void;
        setQuery(value: string, submit?: boolean): void;
        clearMap(): void;
        clearList(): void;
        setReverseMode(reverseActive: boolean): void;
        focus(options?: FocusOptions): void;
        blur(): void;
        onRemove(): void;
        _listeners: maplibregl.Listeners;
        _oneTimeListeners: maplibregl.Listeners;
        _eventedParent: maplibregl.Evented;
        _eventedParentData: any | (() => any);
        fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
        setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
    }, features: import("./types").Feature[] | undefined): {
        features: import("./types").Feature[] | undefined;
        readonly type: "featureslisted";
        readonly target: {
            "__#1@#gc"?: import("./GeocodingControl.svelte").default;
            "__#1@#options": Options;
            "__#1@#container"?: HTMLElement;
            onAddInt(map: Map): HTMLElement;
            on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: /*elided*/ any;
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void): maplibregl.Subscription;
            once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: /*elided*/ any;
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
            off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: /*elided*/ any;
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void): /*elided*/ any;
            listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
            setOptions(options: Options): void;
            setQuery(value: string, submit?: boolean): void;
            clearMap(): void;
            clearList(): void;
            setReverseMode(reverseActive: boolean): void;
            focus(options?: FocusOptions): void;
            blur(): void;
            onRemove(): void;
            _listeners: maplibregl.Listeners;
            _oneTimeListeners: maplibregl.Listeners;
            _eventedParent: maplibregl.Evented;
            _eventedParentData: any | (() => any);
            fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
            setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
        };
    };
};
export declare const FeaturesMarkedEvent: {
    new (target: {
        "__#1@#gc"?: import("./GeocodingControl.svelte").default;
        "__#1@#options": Options;
        "__#1@#container"?: HTMLElement;
        onAddInt(map: Map): HTMLElement;
        on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): maplibregl.Subscription;
        once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
        off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): /*elided*/ any;
        listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
        setOptions(options: Options): void;
        setQuery(value: string, submit?: boolean): void;
        clearMap(): void;
        clearList(): void;
        setReverseMode(reverseActive: boolean): void;
        focus(options?: FocusOptions): void;
        blur(): void;
        onRemove(): void;
        _listeners: maplibregl.Listeners;
        _oneTimeListeners: maplibregl.Listeners;
        _eventedParent: maplibregl.Evented;
        _eventedParentData: any | (() => any);
        fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
        setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
    }, features: import("./types").Feature[] | undefined): {
        features: import("./types").Feature[] | undefined;
        readonly type: "featuresmarked";
        readonly target: {
            "__#1@#gc"?: import("./GeocodingControl.svelte").default;
            "__#1@#options": Options;
            "__#1@#container"?: HTMLElement;
            onAddInt(map: Map): HTMLElement;
            on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: /*elided*/ any;
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void): maplibregl.Subscription;
            once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: /*elided*/ any;
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
            off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: /*elided*/ any;
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void): /*elided*/ any;
            listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
            setOptions(options: Options): void;
            setQuery(value: string, submit?: boolean): void;
            clearMap(): void;
            clearList(): void;
            setReverseMode(reverseActive: boolean): void;
            focus(options?: FocusOptions): void;
            blur(): void;
            onRemove(): void;
            _listeners: maplibregl.Listeners;
            _oneTimeListeners: maplibregl.Listeners;
            _eventedParent: maplibregl.Evented;
            _eventedParentData: any | (() => any);
            fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
            setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
        };
    };
};
export declare const OptionsVisibilityChangeEvent: {
    new (target: {
        "__#1@#gc"?: import("./GeocodingControl.svelte").default;
        "__#1@#options": Options;
        "__#1@#container"?: HTMLElement;
        onAddInt(map: Map): HTMLElement;
        on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): maplibregl.Subscription;
        once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
        off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): /*elided*/ any;
        listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
        setOptions(options: Options): void;
        setQuery(value: string, submit?: boolean): void;
        clearMap(): void;
        clearList(): void;
        setReverseMode(reverseActive: boolean): void;
        focus(options?: FocusOptions): void;
        blur(): void;
        onRemove(): void;
        _listeners: maplibregl.Listeners;
        _oneTimeListeners: maplibregl.Listeners;
        _eventedParent: maplibregl.Evented;
        _eventedParentData: any | (() => any);
        fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
        setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
    }, optionsVisible: boolean): {
        optionsVisible: boolean;
        readonly type: "optionsvisibilitychange";
        readonly target: {
            "__#1@#gc"?: import("./GeocodingControl.svelte").default;
            "__#1@#options": Options;
            "__#1@#container"?: HTMLElement;
            onAddInt(map: Map): HTMLElement;
            on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: /*elided*/ any;
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void): maplibregl.Subscription;
            once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: /*elided*/ any;
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
            off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: /*elided*/ any;
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void): /*elided*/ any;
            listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
            setOptions(options: Options): void;
            setQuery(value: string, submit?: boolean): void;
            clearMap(): void;
            clearList(): void;
            setReverseMode(reverseActive: boolean): void;
            focus(options?: FocusOptions): void;
            blur(): void;
            onRemove(): void;
            _listeners: maplibregl.Listeners;
            _oneTimeListeners: maplibregl.Listeners;
            _eventedParent: maplibregl.Evented;
            _eventedParentData: any | (() => any);
            fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
            setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
        };
    };
};
export declare const PickEvent: {
    new (target: {
        "__#1@#gc"?: import("./GeocodingControl.svelte").default;
        "__#1@#options": Options;
        "__#1@#container"?: HTMLElement;
        onAddInt(map: Map): HTMLElement;
        on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): maplibregl.Subscription;
        once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
        off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): /*elided*/ any;
        listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
        setOptions(options: Options): void;
        setQuery(value: string, submit?: boolean): void;
        clearMap(): void;
        clearList(): void;
        setReverseMode(reverseActive: boolean): void;
        focus(options?: FocusOptions): void;
        blur(): void;
        onRemove(): void;
        _listeners: maplibregl.Listeners;
        _oneTimeListeners: maplibregl.Listeners;
        _eventedParent: maplibregl.Evented;
        _eventedParentData: any | (() => any);
        fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
        setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
    }, feature: import("./types").Feature | undefined): {
        feature: import("./types").Feature | undefined;
        readonly type: "pick";
        readonly target: {
            "__#1@#gc"?: import("./GeocodingControl.svelte").default;
            "__#1@#options": Options;
            "__#1@#container"?: HTMLElement;
            onAddInt(map: Map): HTMLElement;
            on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: /*elided*/ any;
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void): maplibregl.Subscription;
            once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: /*elided*/ any;
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
            off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: /*elided*/ any;
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void): /*elided*/ any;
            listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
            setOptions(options: Options): void;
            setQuery(value: string, submit?: boolean): void;
            clearMap(): void;
            clearList(): void;
            setReverseMode(reverseActive: boolean): void;
            focus(options?: FocusOptions): void;
            blur(): void;
            onRemove(): void;
            _listeners: maplibregl.Listeners;
            _oneTimeListeners: maplibregl.Listeners;
            _eventedParent: maplibregl.Evented;
            _eventedParentData: any | (() => any);
            fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
            setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
        };
    };
};
export declare const QueryChangeEvent: {
    new (target: {
        "__#1@#gc"?: import("./GeocodingControl.svelte").default;
        "__#1@#options": Options;
        "__#1@#container"?: HTMLElement;
        onAddInt(map: Map): HTMLElement;
        on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): maplibregl.Subscription;
        once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
        off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): /*elided*/ any;
        listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
        setOptions(options: Options): void;
        setQuery(value: string, submit?: boolean): void;
        clearMap(): void;
        clearList(): void;
        setReverseMode(reverseActive: boolean): void;
        focus(options?: FocusOptions): void;
        blur(): void;
        onRemove(): void;
        _listeners: maplibregl.Listeners;
        _oneTimeListeners: maplibregl.Listeners;
        _eventedParent: maplibregl.Evented;
        _eventedParentData: any | (() => any);
        fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
        setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
    }, query: string): {
        query: string;
        readonly type: "querychange";
        readonly target: {
            "__#1@#gc"?: import("./GeocodingControl.svelte").default;
            "__#1@#options": Options;
            "__#1@#container"?: HTMLElement;
            onAddInt(map: Map): HTMLElement;
            on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: /*elided*/ any;
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void): maplibregl.Subscription;
            once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: /*elided*/ any;
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
            off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: /*elided*/ any;
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void): /*elided*/ any;
            listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
            setOptions(options: Options): void;
            setQuery(value: string, submit?: boolean): void;
            clearMap(): void;
            clearList(): void;
            setReverseMode(reverseActive: boolean): void;
            focus(options?: FocusOptions): void;
            blur(): void;
            onRemove(): void;
            _listeners: maplibregl.Listeners;
            _oneTimeListeners: maplibregl.Listeners;
            _eventedParent: maplibregl.Evented;
            _eventedParentData: any | (() => any);
            fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
            setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
        };
    };
};
export declare const ResponseEvent: {
    new (target: {
        "__#1@#gc"?: import("./GeocodingControl.svelte").default;
        "__#1@#options": Options;
        "__#1@#container"?: HTMLElement;
        onAddInt(map: Map): HTMLElement;
        on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): maplibregl.Subscription;
        once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
        off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): /*elided*/ any;
        listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
        setOptions(options: Options): void;
        setQuery(value: string, submit?: boolean): void;
        clearMap(): void;
        clearList(): void;
        setReverseMode(reverseActive: boolean): void;
        focus(options?: FocusOptions): void;
        blur(): void;
        onRemove(): void;
        _listeners: maplibregl.Listeners;
        _oneTimeListeners: maplibregl.Listeners;
        _eventedParent: maplibregl.Evented;
        _eventedParentData: any | (() => any);
        fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
        setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
    }, url: string, featureCollection: import("./types").FeatureCollection): {
        url: string;
        featureCollection: import("./types").FeatureCollection;
        readonly type: "response";
        readonly target: {
            "__#1@#gc"?: import("./GeocodingControl.svelte").default;
            "__#1@#options": Options;
            "__#1@#container"?: HTMLElement;
            onAddInt(map: Map): HTMLElement;
            on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: /*elided*/ any;
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void): maplibregl.Subscription;
            once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: /*elided*/ any;
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
            off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: /*elided*/ any;
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void): /*elided*/ any;
            listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
            setOptions(options: Options): void;
            setQuery(value: string, submit?: boolean): void;
            clearMap(): void;
            clearList(): void;
            setReverseMode(reverseActive: boolean): void;
            focus(options?: FocusOptions): void;
            blur(): void;
            onRemove(): void;
            _listeners: maplibregl.Listeners;
            _oneTimeListeners: maplibregl.Listeners;
            _eventedParent: maplibregl.Evented;
            _eventedParentData: any | (() => any);
            fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
            setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
        };
    };
};
export declare const ReverseToggleEvent: {
    new (target: {
        "__#1@#gc"?: import("./GeocodingControl.svelte").default;
        "__#1@#options": Options;
        "__#1@#container"?: HTMLElement;
        onAddInt(map: Map): HTMLElement;
        on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): maplibregl.Subscription;
        once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
        off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
            select: {
                feature: import("./types").Feature | undefined;
                readonly type: "select";
                readonly target: /*elided*/ any;
            };
            featureslisted: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: /*elided*/ any;
            };
            featuresmarked: {
                features: import("./types").Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: /*elided*/ any;
            };
            optionsvisibilitychange: {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: /*elided*/ any;
            };
            pick: {
                feature: import("./types").Feature | undefined;
                readonly type: "pick";
                readonly target: /*elided*/ any;
            };
            querychange: {
                query: string;
                readonly type: "querychange";
                readonly target: /*elided*/ any;
            };
            response: {
                url: string;
                featureCollection: import("./types").FeatureCollection;
                readonly type: "response";
                readonly target: /*elided*/ any;
            };
            reversetoggle: {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: /*elided*/ any;
            };
        }[T]) => void): /*elided*/ any;
        listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
        setOptions(options: Options): void;
        setQuery(value: string, submit?: boolean): void;
        clearMap(): void;
        clearList(): void;
        setReverseMode(reverseActive: boolean): void;
        focus(options?: FocusOptions): void;
        blur(): void;
        onRemove(): void;
        _listeners: maplibregl.Listeners;
        _oneTimeListeners: maplibregl.Listeners;
        _eventedParent: maplibregl.Evented;
        _eventedParentData: any | (() => any);
        fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
        setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
    }, reverse: boolean): {
        reverse: boolean;
        readonly type: "reversetoggle";
        readonly target: {
            "__#1@#gc"?: import("./GeocodingControl.svelte").default;
            "__#1@#options": Options;
            "__#1@#container"?: HTMLElement;
            onAddInt(map: Map): HTMLElement;
            on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: /*elided*/ any;
            }[T]) => void): maplibregl.Subscription;
            once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: /*elided*/ any;
            }[T]) => void) | undefined): Promise<unknown> | /*elided*/ any;
            off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: import("./types").Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: import("./types").Feature | undefined;
                    readonly type: "pick";
                    readonly target: /*elided*/ any;
                };
                querychange: {
                    query: string;
                    readonly type: "querychange";
                    readonly target: /*elided*/ any;
                };
                response: {
                    url: string;
                    featureCollection: import("./types").FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: /*elided*/ any;
            }[T]) => void): /*elided*/ any;
            listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
            setOptions(options: Options): void;
            setQuery(value: string, submit?: boolean): void;
            clearMap(): void;
            clearList(): void;
            setReverseMode(reverseActive: boolean): void;
            focus(options?: FocusOptions): void;
            blur(): void;
            onRemove(): void;
            _listeners: maplibregl.Listeners;
            _oneTimeListeners: maplibregl.Listeners;
            _eventedParent: maplibregl.Evented;
            _eventedParentData: any | (() => any);
            fire(event: maplibregl.Event | string, properties?: any): /*elided*/ any;
            setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): /*elided*/ any;
        };
    };
};
