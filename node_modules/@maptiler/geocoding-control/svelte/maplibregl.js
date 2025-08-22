import * as maplibregl from "maplibre-gl";
import { crateClasses, } from "./MapLibreBasedGeocodingControl";
export { createMapLibreGlMapController } from "./maplibregl-controller";
const { MapLibreBasedGeocodingControl, events } = crateClasses(maplibregl.Evented, maplibregl);
export class GeocodingControl extends MapLibreBasedGeocodingControl {
    onAdd(map) {
        return super.onAddInt(map);
    }
}
export const SelectEvent = events.SelectEvent;
export const FeaturesListedEvent = events.FeaturesListedEvent;
export const FeaturesMarkedEvent = events.FeaturesMarkedEvent;
export const OptionsVisibilityChangeEvent = events.OptionsVisibilityChangeEvent;
export const PickEvent = events.PickEvent;
export const QueryChangeEvent = events.QueryChangeEvent;
export const ResponseEvent = events.ResponseEvent;
export const ReverseToggleEvent = events.ReverseToggleEvent;
