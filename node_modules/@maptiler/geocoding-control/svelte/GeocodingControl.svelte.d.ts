import { SvelteComponent } from "svelte";
import type { BBox, EnableReverse, Feature, FeatureCollection, MapController, PickedResultStyle, ProximityRule, ShowPlaceType, TypeRule } from "./types";
declare const __propDef: {
    props: {
        ZOOM_DEFAULTS?: Record<string, number>;
        class?: string | undefined;
        apiKey?: string | undefined;
        bbox?: BBox | undefined;
        clearButtonTitle?: string;
        clearOnBlur?: boolean;
        clearListOnPick?: boolean;
        keepListOpen?: boolean;
        collapsed?: boolean;
        country?: string | string[] | undefined;
        debounceSearch?: number;
        enableReverse?: EnableReverse;
        errorMessage?: string;
        filter?: (feature: Feature) => boolean;
        flyTo?: boolean;
        fuzzyMatch?: boolean;
        language?: string | string[] | null | undefined;
        limit?: number | undefined;
        reverseGeocodingLimit?: number | undefined;
        mapController?: MapController | undefined;
        minLength?: number;
        noResultsMessage?: string;
        placeholder?: string;
        proximity?: ProximityRule[] | null | undefined;
        reverseActive?: boolean;
        reverseButtonTitle?: string;
        searchValue?: string;
        pickedResultStyle?: PickedResultStyle;
        showPlaceType?: ShowPlaceType;
        showResultsWhileTyping?: boolean;
        selectFirst?: boolean;
        flyToSelected?: boolean;
        markerOnSelected?: boolean;
        types?: TypeRule[] | undefined;
        reverseGeocodingTypes?: TypeRule[] | undefined;
        exhaustiveReverseGeocoding?: boolean;
        excludeTypes?: boolean;
        reverseGeocodingExcludeTypes?: boolean | undefined;
        zoom?: Record<string, number>;
        apiUrl?: string;
        fetchParameters?: RequestInit;
        iconsBaseUrl?: string;
        /**
           * @deprecated use `adjustUrl`
           */ adjustUrlQuery?: (sp: URLSearchParams) => void;
        /**
           * Adjust geocoding URL before the fetch.
           */ adjustUrl?: (url: URL) => void;
        focus?: (options?: FocusOptions) => void;
        blur?: () => void;
        setQuery?: (value: string, submit?: boolean, reverse?: boolean) => void;
        clearList?: () => void;
        clearMap?: () => void;
    };
    events: {
        featureslisted: CustomEvent<{
            features: Feature[] | undefined;
        }>;
        featuresmarked: CustomEvent<{
            features: Feature[] | undefined;
        }>;
        optionsvisibilitychange: CustomEvent<{
            optionsVisible: boolean;
        }>;
        pick: CustomEvent<{
            feature: Feature | undefined;
        }>;
        querychange: CustomEvent<{
            query: string;
        }>;
        response: CustomEvent<{
            url: string;
            featureCollection: FeatureCollection;
        }>;
        reversetoggle: CustomEvent<{
            reverse: boolean;
        }>;
        select: CustomEvent<{
            feature: Feature | undefined;
        }>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type GeocodingControlProps = typeof __propDef.props;
export type GeocodingControlEvents = typeof __propDef.events;
export type GeocodingControlSlots = typeof __propDef.slots;
export default class GeocodingControl extends SvelteComponent<GeocodingControlProps, GeocodingControlEvents, GeocodingControlSlots> {
    get ZOOM_DEFAULTS(): Record<string, number>;
    get focus(): (options?: FocusOptions) => void;
    get blur(): () => void;
    get setQuery(): (value: string, submit?: boolean, reverse?: boolean) => void;
    get clearList(): () => void;
    get clearMap(): () => void;
}
export {};
