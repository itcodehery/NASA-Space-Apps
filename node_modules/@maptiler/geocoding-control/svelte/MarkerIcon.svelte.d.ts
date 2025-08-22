import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        displayIn: "list" | "leaflet" | "maplibre";
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type MarkerIconProps = typeof __propDef.props;
export type MarkerIconEvents = typeof __propDef.events;
export type MarkerIconSlots = typeof __propDef.slots;
export default class MarkerIcon extends SvelteComponent<MarkerIconProps, MarkerIconEvents, MarkerIconSlots> {
}
export {};
