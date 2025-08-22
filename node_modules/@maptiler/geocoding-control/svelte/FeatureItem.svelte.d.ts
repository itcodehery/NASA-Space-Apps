import { SvelteComponent } from "svelte";
import type { Feature, ShowPlaceType } from "./types";
declare const __propDef: {
    props: {
        feature: Feature;
        style?: "selected" | "picked" | "default";
        showPlaceType: ShowPlaceType;
        missingIconsCache: Set<string>;
        iconsBaseUrl: string;
    };
    events: {
        mouseenter: MouseEvent;
        select: CustomEvent<undefined>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type FeatureItemProps = typeof __propDef.props;
export type FeatureItemEvents = typeof __propDef.events;
export type FeatureItemSlots = typeof __propDef.slots;
export default class FeatureItem extends SvelteComponent<FeatureItemProps, FeatureItemEvents, FeatureItemSlots> {
}
export {};
