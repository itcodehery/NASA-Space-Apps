import type * as maplibregl from "maplibre-gl";
import type { FillLayerSpecification, FitBoundsOptions, FlyToOptions, LineLayerSpecification, Map, Marker, MarkerOptions } from "maplibre-gl";
import type { BBox, Position } from "./types";
import type { Feature, MapEvent } from "./types.js";
export type MapLibreGL = Pick<typeof maplibregl, "Marker" | "Popup">;
export type FullGeometryStyle = {
    fill: Pick<FillLayerSpecification, "layout" | "paint" | "filter">;
    line: Pick<LineLayerSpecification, "layout" | "paint" | "filter">;
};
export declare function createMapLibreGlMapController(map: Map, maplibregl?: MapLibreGL | undefined, marker?: boolean | null | MarkerOptions | ((map: Map, feature?: Feature) => Marker | undefined | null), showResultMarkers?: boolean | null | MarkerOptions | ((map: Map, feature: Feature) => Marker | undefined | null), flyToOptions?: FlyToOptions | null, fitBoundsOptions?: FitBoundsOptions | null, fullGeometryStyle?: boolean | null | FullGeometryStyle): {
    setEventHandler(handler: undefined | ((e: MapEvent) => void)): void;
    flyTo(center: Position, zoom?: number): void;
    fitBounds(bbox: BBox, padding: number, maxZoom?: number): void;
    indicateReverse(reverse: boolean): void;
    setReverseMarker(coordinates?: Position): void;
    setFeatures(markedFeatures: Feature[] | undefined, picked: Feature | undefined, showPolygonMarker: boolean): void;
    setSelectedMarker(index: number): void;
    getCenterAndZoom(): [number, number, number];
};
