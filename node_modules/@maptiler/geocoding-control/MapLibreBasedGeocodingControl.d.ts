import type { Evented, FitBoundsOptions, FlyToOptions, Map, Marker, MarkerOptions, Subscription } from "maplibre-gl";
import type { SvelteComponent } from "svelte";
import GeocodingControlComponent from "./GeocodingControl.svelte";
import { type FullGeometryStyle, type MapLibreGL } from "./maplibregl-controller";
import type { ControlOptions, Feature, FeatureCollection } from "./types";
export { createMapLibreGlMapController, type MapLibreGL, } from "./maplibregl-controller";
export type MapLibreBaseControlOptions = Omit<ControlOptions, "apiKey"> & {
    /**
     * Marker to be added to the map at the location of the user-selected result using a default set of Marker options.
     *
     * - If `true` or `undefined` then a default marker will be used.
     * - If the value is a [MarkerOptions](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MarkerOptions/) then the marker will be constructed using these options.
     * - If the value is a function then it can return instance of the [Marker](https://maplibre.org/maplibre-gl-js/docs/API/classes/Marker/).
     *   Function can accept `Feature` as a parameter which is `undefined` for the reverse location marker.
     * - If `false` or `null` then no marker will be added to the map.
     *
     * Requires that `options.maplibregl` also be set.
     *
     * Default value is `true`.
     */
    marker?: null | boolean | MarkerOptions | ((map: Map, feature?: Feature) => undefined | null | Marker);
    /**
     * Marker be added to the map at the location the geocoding results.
     *
     * - If `true` or `undefined` then a default marker will be used.
     * - If the value is a [MarkerOptions](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/MarkerOptions/) then the marker will be constructed using these options.
     * - If the value is a function then it can return instance of the [Marker](https://maplibre.org/maplibre-gl-js/docs/API/classes/Marker/).
     *   In this case the default pop-up won't be added to the marker.
     *   Function can accept `Feature` as a parameter.
     * - If `false` or `null` then no marker will be added to the map.
     *
     * Requires that `options.maplibregl` also be set.
     *
     * Default value is `true`.
     */
    showResultMarkers?: null | boolean | MarkerOptions | ((map: Map, feature: Feature) => undefined | null | Marker);
    /**
     * Animation to selected feature on the map.
     *
     * - If `false` or `null` then animating the map to a selected result is disabled.
     * - If `true` or `undefined` then animating the map will use the default animation parameters.
     * - If an [FlyToOptions](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/FlyToOptions/)
     *     ` & `[FitBoundsOptions](https://maplibre.org/maplibre-gl-js/docs/API/type-aliases/FitBoundsOptions/)
     *     then it will be passed as options to the map [flyTo](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#flyto)
     *     or [fitBounds](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#fitbounds) method providing control over the animation of the transition.
     *
     * Default value is `true`.
     */
    flyTo?: null | boolean | (FlyToOptions & FitBoundsOptions);
    /**
     * Style for full feature geometry GeoJSON.
     *
     * - If `false` or `null` then no full geometry is drawn.
     * - If `true` or `undefined` then default-styled full geometry is drawn.
     * - If an T then it must represent the style and will be used to style the full geometry.
     *
     * Default is the default style.
     */
    fullGeometryStyle?: null | boolean | FullGeometryStyle;
};
export type Props<T> = T extends SvelteComponent<infer P> ? P : never;
type EventedConstructor = new (...args: ConstructorParameters<typeof Evented>) => Evented;
export declare function crateClasses<OPTS extends MapLibreBaseControlOptions>(Evented: EventedConstructor, maplibreGl: MapLibreGL, getExtraProps?: (map: Map, div: HTMLElement) => Partial<Props<GeocodingControlComponent>>): {
    MapLibreBasedGeocodingControl: {
        new (options?: OPTS): {
            "__#1@#gc"?: GeocodingControlComponent;
            "__#1@#options": OPTS;
            "__#1@#container"?: HTMLElement;
            onAddInt(map: Map): HTMLElement;
            on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: {
                    feature: Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: Feature | undefined;
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
                    featureCollection: FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void): Subscription;
            once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                select: {
                    feature: Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: Feature | undefined;
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
                    featureCollection: FeatureCollection;
                    readonly type: "response";
                    readonly target: /*elided*/ any;
                };
                reversetoggle: {
                    reverse: boolean;
                    readonly type: "reversetoggle";
                    readonly target: /*elided*/ any;
                };
            }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
            off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                select: {
                    feature: Feature | undefined;
                    readonly type: "select";
                    readonly target: /*elided*/ any;
                };
                featureslisted: {
                    features: Feature[] | undefined;
                    readonly type: "featureslisted";
                    readonly target: /*elided*/ any;
                };
                featuresmarked: {
                    features: Feature[] | undefined;
                    readonly type: "featuresmarked";
                    readonly target: /*elided*/ any;
                };
                optionsvisibilitychange: {
                    optionsVisible: boolean;
                    readonly type: "optionsvisibilitychange";
                    readonly target: /*elided*/ any;
                };
                pick: {
                    feature: Feature | undefined;
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
                    featureCollection: FeatureCollection;
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
            /**
             * Update the control options.
             *
             * @param options options to update
             */
            setOptions(options: OPTS): void;
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
            _listeners: import("maplibre-gl").Listeners;
            _oneTimeListeners: import("maplibre-gl").Listeners;
            _eventedParent: Evented;
            _eventedParentData: any | (() => any);
            fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
            setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
        };
    };
    events: {
        SelectEvent: {
            new (target: {
                "__#1@#gc"?: GeocodingControlComponent;
                "__#1@#options": OPTS;
                "__#1@#container"?: HTMLElement;
                onAddInt(map: Map): HTMLElement;
                on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
                        readonly type: "response";
                        readonly target: /*elided*/ any;
                    };
                    reversetoggle: {
                        reverse: boolean;
                        readonly type: "reversetoggle";
                        readonly target: /*elided*/ any;
                    };
                }[T]) => void): Subscription;
                once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
                        readonly type: "response";
                        readonly target: /*elided*/ any;
                    };
                    reversetoggle: {
                        reverse: boolean;
                        readonly type: "reversetoggle";
                        readonly target: /*elided*/ any;
                    };
                }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
                off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
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
                /**
                 * Update the control options.
                 *
                 * @param options options to update
                 */
                setOptions(options: OPTS): void;
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
                _listeners: import("maplibre-gl").Listeners;
                _oneTimeListeners: import("maplibre-gl").Listeners;
                _eventedParent: Evented;
                _eventedParentData: any | (() => any);
                fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
                setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
            }, details: {
                feature: Feature | undefined;
            }): {
                feature: Feature | undefined;
                readonly type: "select";
                readonly target: {
                    "__#1@#gc"?: GeocodingControlComponent;
                    "__#1@#options": OPTS;
                    "__#1@#container"?: HTMLElement;
                    onAddInt(map: Map): HTMLElement;
                    on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                        select: /*elided*/ any;
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: {
                            optionsVisible: boolean;
                            readonly type: "optionsvisibilitychange";
                            readonly target: /*elided*/ any;
                        };
                        pick: {
                            feature: Feature | undefined;
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
                            featureCollection: FeatureCollection;
                            readonly type: "response";
                            readonly target: /*elided*/ any;
                        };
                        reversetoggle: {
                            reverse: boolean;
                            readonly type: "reversetoggle";
                            readonly target: /*elided*/ any;
                        };
                    }[T]) => void): Subscription;
                    once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                        select: /*elided*/ any;
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: {
                            optionsVisible: boolean;
                            readonly type: "optionsvisibilitychange";
                            readonly target: /*elided*/ any;
                        };
                        pick: {
                            feature: Feature | undefined;
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
                            featureCollection: FeatureCollection;
                            readonly type: "response";
                            readonly target: /*elided*/ any;
                        };
                        reversetoggle: {
                            reverse: boolean;
                            readonly type: "reversetoggle";
                            readonly target: /*elided*/ any;
                        };
                    }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
                    off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                        select: /*elided*/ any;
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: {
                            optionsVisible: boolean;
                            readonly type: "optionsvisibilitychange";
                            readonly target: /*elided*/ any;
                        };
                        pick: {
                            feature: Feature | undefined;
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
                            featureCollection: FeatureCollection;
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
                    /**
                     * Update the control options.
                     *
                     * @param options options to update
                     */
                    setOptions(options: OPTS): void;
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
                    _listeners: import("maplibre-gl").Listeners;
                    _oneTimeListeners: import("maplibre-gl").Listeners;
                    _eventedParent: Evented;
                    _eventedParentData: any | (() => any);
                    fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
                    setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
                };
            };
        };
        FeaturesListedEvent: {
            new (target: {
                "__#1@#gc"?: GeocodingControlComponent;
                "__#1@#options": OPTS;
                "__#1@#container"?: HTMLElement;
                onAddInt(map: Map): HTMLElement;
                on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
                        readonly type: "response";
                        readonly target: /*elided*/ any;
                    };
                    reversetoggle: {
                        reverse: boolean;
                        readonly type: "reversetoggle";
                        readonly target: /*elided*/ any;
                    };
                }[T]) => void): Subscription;
                once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
                        readonly type: "response";
                        readonly target: /*elided*/ any;
                    };
                    reversetoggle: {
                        reverse: boolean;
                        readonly type: "reversetoggle";
                        readonly target: /*elided*/ any;
                    };
                }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
                off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
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
                /**
                 * Update the control options.
                 *
                 * @param options options to update
                 */
                setOptions(options: OPTS): void;
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
                _listeners: import("maplibre-gl").Listeners;
                _oneTimeListeners: import("maplibre-gl").Listeners;
                _eventedParent: Evented;
                _eventedParentData: any | (() => any);
                fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
                setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
            }, features: Feature[] | undefined): {
                features: Feature[] | undefined;
                readonly type: "featureslisted";
                readonly target: {
                    "__#1@#gc"?: GeocodingControlComponent;
                    "__#1@#options": OPTS;
                    "__#1@#container"?: HTMLElement;
                    onAddInt(map: Map): HTMLElement;
                    on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: /*elided*/ any;
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: {
                            optionsVisible: boolean;
                            readonly type: "optionsvisibilitychange";
                            readonly target: /*elided*/ any;
                        };
                        pick: {
                            feature: Feature | undefined;
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
                            featureCollection: FeatureCollection;
                            readonly type: "response";
                            readonly target: /*elided*/ any;
                        };
                        reversetoggle: {
                            reverse: boolean;
                            readonly type: "reversetoggle";
                            readonly target: /*elided*/ any;
                        };
                    }[T]) => void): Subscription;
                    once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: /*elided*/ any;
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: {
                            optionsVisible: boolean;
                            readonly type: "optionsvisibilitychange";
                            readonly target: /*elided*/ any;
                        };
                        pick: {
                            feature: Feature | undefined;
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
                            featureCollection: FeatureCollection;
                            readonly type: "response";
                            readonly target: /*elided*/ any;
                        };
                        reversetoggle: {
                            reverse: boolean;
                            readonly type: "reversetoggle";
                            readonly target: /*elided*/ any;
                        };
                    }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
                    off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: /*elided*/ any;
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: {
                            optionsVisible: boolean;
                            readonly type: "optionsvisibilitychange";
                            readonly target: /*elided*/ any;
                        };
                        pick: {
                            feature: Feature | undefined;
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
                            featureCollection: FeatureCollection;
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
                    /**
                     * Update the control options.
                     *
                     * @param options options to update
                     */
                    setOptions(options: OPTS): void;
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
                    _listeners: import("maplibre-gl").Listeners;
                    _oneTimeListeners: import("maplibre-gl").Listeners;
                    _eventedParent: Evented;
                    _eventedParentData: any | (() => any);
                    fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
                    setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
                };
            };
        };
        FeaturesMarkedEvent: {
            new (target: {
                "__#1@#gc"?: GeocodingControlComponent;
                "__#1@#options": OPTS;
                "__#1@#container"?: HTMLElement;
                onAddInt(map: Map): HTMLElement;
                on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
                        readonly type: "response";
                        readonly target: /*elided*/ any;
                    };
                    reversetoggle: {
                        reverse: boolean;
                        readonly type: "reversetoggle";
                        readonly target: /*elided*/ any;
                    };
                }[T]) => void): Subscription;
                once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
                        readonly type: "response";
                        readonly target: /*elided*/ any;
                    };
                    reversetoggle: {
                        reverse: boolean;
                        readonly type: "reversetoggle";
                        readonly target: /*elided*/ any;
                    };
                }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
                off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
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
                /**
                 * Update the control options.
                 *
                 * @param options options to update
                 */
                setOptions(options: OPTS): void;
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
                _listeners: import("maplibre-gl").Listeners;
                _oneTimeListeners: import("maplibre-gl").Listeners;
                _eventedParent: Evented;
                _eventedParentData: any | (() => any);
                fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
                setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
            }, features: Feature[] | undefined): {
                features: Feature[] | undefined;
                readonly type: "featuresmarked";
                readonly target: {
                    "__#1@#gc"?: GeocodingControlComponent;
                    "__#1@#options": OPTS;
                    "__#1@#container"?: HTMLElement;
                    onAddInt(map: Map): HTMLElement;
                    on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
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
                            feature: Feature | undefined;
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
                            featureCollection: FeatureCollection;
                            readonly type: "response";
                            readonly target: /*elided*/ any;
                        };
                        reversetoggle: {
                            reverse: boolean;
                            readonly type: "reversetoggle";
                            readonly target: /*elided*/ any;
                        };
                    }[T]) => void): Subscription;
                    once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
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
                            feature: Feature | undefined;
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
                            featureCollection: FeatureCollection;
                            readonly type: "response";
                            readonly target: /*elided*/ any;
                        };
                        reversetoggle: {
                            reverse: boolean;
                            readonly type: "reversetoggle";
                            readonly target: /*elided*/ any;
                        };
                    }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
                    off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
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
                            feature: Feature | undefined;
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
                            featureCollection: FeatureCollection;
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
                    /**
                     * Update the control options.
                     *
                     * @param options options to update
                     */
                    setOptions(options: OPTS): void;
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
                    _listeners: import("maplibre-gl").Listeners;
                    _oneTimeListeners: import("maplibre-gl").Listeners;
                    _eventedParent: Evented;
                    _eventedParentData: any | (() => any);
                    fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
                    setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
                };
            };
        };
        OptionsVisibilityChangeEvent: {
            new (target: {
                "__#1@#gc"?: GeocodingControlComponent;
                "__#1@#options": OPTS;
                "__#1@#container"?: HTMLElement;
                onAddInt(map: Map): HTMLElement;
                on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
                        readonly type: "response";
                        readonly target: /*elided*/ any;
                    };
                    reversetoggle: {
                        reverse: boolean;
                        readonly type: "reversetoggle";
                        readonly target: /*elided*/ any;
                    };
                }[T]) => void): Subscription;
                once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
                        readonly type: "response";
                        readonly target: /*elided*/ any;
                    };
                    reversetoggle: {
                        reverse: boolean;
                        readonly type: "reversetoggle";
                        readonly target: /*elided*/ any;
                    };
                }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
                off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
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
                /**
                 * Update the control options.
                 *
                 * @param options options to update
                 */
                setOptions(options: OPTS): void;
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
                _listeners: import("maplibre-gl").Listeners;
                _oneTimeListeners: import("maplibre-gl").Listeners;
                _eventedParent: Evented;
                _eventedParentData: any | (() => any);
                fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
                setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
            }, optionsVisible: boolean): {
                optionsVisible: boolean;
                readonly type: "optionsvisibilitychange";
                readonly target: {
                    "__#1@#gc"?: GeocodingControlComponent;
                    "__#1@#options": OPTS;
                    "__#1@#container"?: HTMLElement;
                    onAddInt(map: Map): HTMLElement;
                    on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: /*elided*/ any;
                        pick: {
                            feature: Feature | undefined;
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
                            featureCollection: FeatureCollection;
                            readonly type: "response";
                            readonly target: /*elided*/ any;
                        };
                        reversetoggle: {
                            reverse: boolean;
                            readonly type: "reversetoggle";
                            readonly target: /*elided*/ any;
                        };
                    }[T]) => void): Subscription;
                    once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: /*elided*/ any;
                        pick: {
                            feature: Feature | undefined;
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
                            featureCollection: FeatureCollection;
                            readonly type: "response";
                            readonly target: /*elided*/ any;
                        };
                        reversetoggle: {
                            reverse: boolean;
                            readonly type: "reversetoggle";
                            readonly target: /*elided*/ any;
                        };
                    }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
                    off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: /*elided*/ any;
                        pick: {
                            feature: Feature | undefined;
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
                            featureCollection: FeatureCollection;
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
                    /**
                     * Update the control options.
                     *
                     * @param options options to update
                     */
                    setOptions(options: OPTS): void;
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
                    _listeners: import("maplibre-gl").Listeners;
                    _oneTimeListeners: import("maplibre-gl").Listeners;
                    _eventedParent: Evented;
                    _eventedParentData: any | (() => any);
                    fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
                    setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
                };
            };
        };
        PickEvent: {
            new (target: {
                "__#1@#gc"?: GeocodingControlComponent;
                "__#1@#options": OPTS;
                "__#1@#container"?: HTMLElement;
                onAddInt(map: Map): HTMLElement;
                on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
                        readonly type: "response";
                        readonly target: /*elided*/ any;
                    };
                    reversetoggle: {
                        reverse: boolean;
                        readonly type: "reversetoggle";
                        readonly target: /*elided*/ any;
                    };
                }[T]) => void): Subscription;
                once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
                        readonly type: "response";
                        readonly target: /*elided*/ any;
                    };
                    reversetoggle: {
                        reverse: boolean;
                        readonly type: "reversetoggle";
                        readonly target: /*elided*/ any;
                    };
                }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
                off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
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
                /**
                 * Update the control options.
                 *
                 * @param options options to update
                 */
                setOptions(options: OPTS): void;
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
                _listeners: import("maplibre-gl").Listeners;
                _oneTimeListeners: import("maplibre-gl").Listeners;
                _eventedParent: Evented;
                _eventedParentData: any | (() => any);
                fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
                setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
            }, feature: Feature | undefined): {
                feature: Feature | undefined;
                readonly type: "pick";
                readonly target: {
                    "__#1@#gc"?: GeocodingControlComponent;
                    "__#1@#options": OPTS;
                    "__#1@#container"?: HTMLElement;
                    onAddInt(map: Map): HTMLElement;
                    on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
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
                            featureCollection: FeatureCollection;
                            readonly type: "response";
                            readonly target: /*elided*/ any;
                        };
                        reversetoggle: {
                            reverse: boolean;
                            readonly type: "reversetoggle";
                            readonly target: /*elided*/ any;
                        };
                    }[T]) => void): Subscription;
                    once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
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
                            featureCollection: FeatureCollection;
                            readonly type: "response";
                            readonly target: /*elided*/ any;
                        };
                        reversetoggle: {
                            reverse: boolean;
                            readonly type: "reversetoggle";
                            readonly target: /*elided*/ any;
                        };
                    }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
                    off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
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
                            featureCollection: FeatureCollection;
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
                    /**
                     * Update the control options.
                     *
                     * @param options options to update
                     */
                    setOptions(options: OPTS): void;
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
                    _listeners: import("maplibre-gl").Listeners;
                    _oneTimeListeners: import("maplibre-gl").Listeners;
                    _eventedParent: Evented;
                    _eventedParentData: any | (() => any);
                    fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
                    setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
                };
            };
        };
        QueryChangeEvent: {
            new (target: {
                "__#1@#gc"?: GeocodingControlComponent;
                "__#1@#options": OPTS;
                "__#1@#container"?: HTMLElement;
                onAddInt(map: Map): HTMLElement;
                on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
                        readonly type: "response";
                        readonly target: /*elided*/ any;
                    };
                    reversetoggle: {
                        reverse: boolean;
                        readonly type: "reversetoggle";
                        readonly target: /*elided*/ any;
                    };
                }[T]) => void): Subscription;
                once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
                        readonly type: "response";
                        readonly target: /*elided*/ any;
                    };
                    reversetoggle: {
                        reverse: boolean;
                        readonly type: "reversetoggle";
                        readonly target: /*elided*/ any;
                    };
                }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
                off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
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
                /**
                 * Update the control options.
                 *
                 * @param options options to update
                 */
                setOptions(options: OPTS): void;
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
                _listeners: import("maplibre-gl").Listeners;
                _oneTimeListeners: import("maplibre-gl").Listeners;
                _eventedParent: Evented;
                _eventedParentData: any | (() => any);
                fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
                setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
            }, query: string): {
                query: string;
                readonly type: "querychange";
                readonly target: {
                    "__#1@#gc"?: GeocodingControlComponent;
                    "__#1@#options": OPTS;
                    "__#1@#container"?: HTMLElement;
                    onAddInt(map: Map): HTMLElement;
                    on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: {
                            optionsVisible: boolean;
                            readonly type: "optionsvisibilitychange";
                            readonly target: /*elided*/ any;
                        };
                        pick: {
                            feature: Feature | undefined;
                            readonly type: "pick";
                            readonly target: /*elided*/ any;
                        };
                        querychange: /*elided*/ any;
                        response: {
                            url: string;
                            featureCollection: FeatureCollection;
                            readonly type: "response";
                            readonly target: /*elided*/ any;
                        };
                        reversetoggle: {
                            reverse: boolean;
                            readonly type: "reversetoggle";
                            readonly target: /*elided*/ any;
                        };
                    }[T]) => void): Subscription;
                    once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: {
                            optionsVisible: boolean;
                            readonly type: "optionsvisibilitychange";
                            readonly target: /*elided*/ any;
                        };
                        pick: {
                            feature: Feature | undefined;
                            readonly type: "pick";
                            readonly target: /*elided*/ any;
                        };
                        querychange: /*elided*/ any;
                        response: {
                            url: string;
                            featureCollection: FeatureCollection;
                            readonly type: "response";
                            readonly target: /*elided*/ any;
                        };
                        reversetoggle: {
                            reverse: boolean;
                            readonly type: "reversetoggle";
                            readonly target: /*elided*/ any;
                        };
                    }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
                    off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: {
                            optionsVisible: boolean;
                            readonly type: "optionsvisibilitychange";
                            readonly target: /*elided*/ any;
                        };
                        pick: {
                            feature: Feature | undefined;
                            readonly type: "pick";
                            readonly target: /*elided*/ any;
                        };
                        querychange: /*elided*/ any;
                        response: {
                            url: string;
                            featureCollection: FeatureCollection;
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
                    /**
                     * Update the control options.
                     *
                     * @param options options to update
                     */
                    setOptions(options: OPTS): void;
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
                    _listeners: import("maplibre-gl").Listeners;
                    _oneTimeListeners: import("maplibre-gl").Listeners;
                    _eventedParent: Evented;
                    _eventedParentData: any | (() => any);
                    fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
                    setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
                };
            };
        };
        ResponseEvent: {
            new (target: {
                "__#1@#gc"?: GeocodingControlComponent;
                "__#1@#options": OPTS;
                "__#1@#container"?: HTMLElement;
                onAddInt(map: Map): HTMLElement;
                on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
                        readonly type: "response";
                        readonly target: /*elided*/ any;
                    };
                    reversetoggle: {
                        reverse: boolean;
                        readonly type: "reversetoggle";
                        readonly target: /*elided*/ any;
                    };
                }[T]) => void): Subscription;
                once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
                        readonly type: "response";
                        readonly target: /*elided*/ any;
                    };
                    reversetoggle: {
                        reverse: boolean;
                        readonly type: "reversetoggle";
                        readonly target: /*elided*/ any;
                    };
                }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
                off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
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
                /**
                 * Update the control options.
                 *
                 * @param options options to update
                 */
                setOptions(options: OPTS): void;
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
                _listeners: import("maplibre-gl").Listeners;
                _oneTimeListeners: import("maplibre-gl").Listeners;
                _eventedParent: Evented;
                _eventedParentData: any | (() => any);
                fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
                setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
            }, url: string, featureCollection: FeatureCollection): {
                url: string;
                featureCollection: FeatureCollection;
                readonly type: "response";
                readonly target: {
                    "__#1@#gc"?: GeocodingControlComponent;
                    "__#1@#options": OPTS;
                    "__#1@#container"?: HTMLElement;
                    onAddInt(map: Map): HTMLElement;
                    on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: {
                            optionsVisible: boolean;
                            readonly type: "optionsvisibilitychange";
                            readonly target: /*elided*/ any;
                        };
                        pick: {
                            feature: Feature | undefined;
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
                    }[T]) => void): Subscription;
                    once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: {
                            optionsVisible: boolean;
                            readonly type: "optionsvisibilitychange";
                            readonly target: /*elided*/ any;
                        };
                        pick: {
                            feature: Feature | undefined;
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
                    }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
                    off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: {
                            optionsVisible: boolean;
                            readonly type: "optionsvisibilitychange";
                            readonly target: /*elided*/ any;
                        };
                        pick: {
                            feature: Feature | undefined;
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
                    /**
                     * Update the control options.
                     *
                     * @param options options to update
                     */
                    setOptions(options: OPTS): void;
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
                    _listeners: import("maplibre-gl").Listeners;
                    _oneTimeListeners: import("maplibre-gl").Listeners;
                    _eventedParent: Evented;
                    _eventedParentData: any | (() => any);
                    fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
                    setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
                };
            };
        };
        ReverseToggleEvent: {
            new (target: {
                "__#1@#gc"?: GeocodingControlComponent;
                "__#1@#options": OPTS;
                "__#1@#container"?: HTMLElement;
                onAddInt(map: Map): HTMLElement;
                on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
                        readonly type: "response";
                        readonly target: /*elided*/ any;
                    };
                    reversetoggle: {
                        reverse: boolean;
                        readonly type: "reversetoggle";
                        readonly target: /*elided*/ any;
                    };
                }[T]) => void): Subscription;
                once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
                        readonly type: "response";
                        readonly target: /*elided*/ any;
                    };
                    reversetoggle: {
                        reverse: boolean;
                        readonly type: "reversetoggle";
                        readonly target: /*elided*/ any;
                    };
                }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
                off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                    select: {
                        feature: Feature | undefined;
                        readonly type: "select";
                        readonly target: /*elided*/ any;
                    };
                    featureslisted: {
                        features: Feature[] | undefined;
                        readonly type: "featureslisted";
                        readonly target: /*elided*/ any;
                    };
                    featuresmarked: {
                        features: Feature[] | undefined;
                        readonly type: "featuresmarked";
                        readonly target: /*elided*/ any;
                    };
                    optionsvisibilitychange: {
                        optionsVisible: boolean;
                        readonly type: "optionsvisibilitychange";
                        readonly target: /*elided*/ any;
                    };
                    pick: {
                        feature: Feature | undefined;
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
                        featureCollection: FeatureCollection;
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
                /**
                 * Update the control options.
                 *
                 * @param options options to update
                 */
                setOptions(options: OPTS): void;
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
                _listeners: import("maplibre-gl").Listeners;
                _oneTimeListeners: import("maplibre-gl").Listeners;
                _eventedParent: Evented;
                _eventedParentData: any | (() => any);
                fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
                setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
            }, reverse: boolean): {
                reverse: boolean;
                readonly type: "reversetoggle";
                readonly target: {
                    "__#1@#gc"?: GeocodingControlComponent;
                    "__#1@#options": OPTS;
                    "__#1@#container"?: HTMLElement;
                    onAddInt(map: Map): HTMLElement;
                    on<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: {
                            optionsVisible: boolean;
                            readonly type: "optionsvisibilitychange";
                            readonly target: /*elided*/ any;
                        };
                        pick: {
                            feature: Feature | undefined;
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
                            featureCollection: FeatureCollection;
                            readonly type: "response";
                            readonly target: /*elided*/ any;
                        };
                        reversetoggle: /*elided*/ any;
                    }[T]) => void): Subscription;
                    once<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener?: ((ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: {
                            optionsVisible: boolean;
                            readonly type: "optionsvisibilitychange";
                            readonly target: /*elided*/ any;
                        };
                        pick: {
                            feature: Feature | undefined;
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
                            featureCollection: FeatureCollection;
                            readonly type: "response";
                            readonly target: /*elided*/ any;
                        };
                        reversetoggle: /*elided*/ any;
                    }[T]) => void) | undefined): /*elided*/ any | Promise<unknown>;
                    off<T extends "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle">(type: T, listener: (ev: {
                        select: {
                            feature: Feature | undefined;
                            readonly type: "select";
                            readonly target: /*elided*/ any;
                        };
                        featureslisted: {
                            features: Feature[] | undefined;
                            readonly type: "featureslisted";
                            readonly target: /*elided*/ any;
                        };
                        featuresmarked: {
                            features: Feature[] | undefined;
                            readonly type: "featuresmarked";
                            readonly target: /*elided*/ any;
                        };
                        optionsvisibilitychange: {
                            optionsVisible: boolean;
                            readonly type: "optionsvisibilitychange";
                            readonly target: /*elided*/ any;
                        };
                        pick: {
                            feature: Feature | undefined;
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
                            featureCollection: FeatureCollection;
                            readonly type: "response";
                            readonly target: /*elided*/ any;
                        };
                        reversetoggle: /*elided*/ any;
                    }[T]) => void): /*elided*/ any;
                    listens(type: "pick" | "response" | "select" | "featureslisted" | "featuresmarked" | "optionsvisibilitychange" | "querychange" | "reversetoggle"): boolean;
                    /**
                     * Update the control options.
                     *
                     * @param options options to update
                     */
                    setOptions(options: OPTS): void;
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
                    _listeners: import("maplibre-gl").Listeners;
                    _oneTimeListeners: import("maplibre-gl").Listeners;
                    _eventedParent: Evented;
                    _eventedParentData: any | (() => any);
                    fire(event: import("maplibre-gl").Event | string, properties?: any): /*elided*/ any;
                    setEventedParent(parent?: Evented | null, data?: any | (() => any)): /*elided*/ any;
                };
            };
        };
    };
};
