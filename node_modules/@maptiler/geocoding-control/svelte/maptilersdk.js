import * as maptilersdk from "@maptiler/sdk";
import { crateClasses, } from "./MapLibreBasedGeocodingControl";
import { name, version } from "./info.json";
export { createMapLibreGlMapController } from "./maplibregl-controller";
const { MapLibreBasedGeocodingControl, events } = crateClasses(maptilersdk.Evented, maptilersdk, (map, div) => {
    const sdkConfig = {};
    if (!("getSdkConfig" in map && typeof map.getSdkConfig === "function")) {
        throw new Error("MapTiler SDK not detected");
    }
    const { primaryLanguage, apiKey } = map.getSdkConfig();
    sdkConfig.apiKey = apiKey;
    const match = /^([a-z]{2})($|_|-)/.exec(primaryLanguage);
    if (match) {
        sdkConfig.language = match[1];
    }
    div.className += " maptiler-ctrl";
    return sdkConfig;
});
export class GeocodingControl extends MapLibreBasedGeocodingControl {
    onAdd(map) {
        map.telemetry?.registerModule(name, version);
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
