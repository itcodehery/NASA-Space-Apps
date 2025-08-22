import * as L from "leaflet";
import type { BBox, Feature, MapEvent, Position } from "./types";
export declare function createLeafletMapController(map: L.Map, marker?: boolean | null | L.MarkerOptions | ((map: L.Map, feature?: Feature) => L.Marker | undefined | null), showResultMarkers?: boolean | null | L.MarkerOptions | ((map: L.Map, feature: Feature) => L.Marker | undefined | null), flyToOptions?: L.ZoomPanOptions | null, flyToBounds?: L.FitBoundsOptions | null, fullGeometryStyle?: null | boolean | L.PathOptions | L.StyleFunction): {
    setEventHandler(handler: undefined | ((e: MapEvent) => void)): void;
    flyTo(center: Position, zoom?: number): void;
    fitBounds(bbox: BBox, padding: number, maxZoom?: number): void;
    indicateReverse(reverse: boolean): void;
    setReverseMarker(coordinates?: Position): void;
    setFeatures(markedFeatures: Feature[] | undefined, picked: Feature | undefined, showPolygonMarker: boolean): void;
    setSelectedMarker(index: number): void;
    getCenterAndZoom(): [number, number, number];
};
