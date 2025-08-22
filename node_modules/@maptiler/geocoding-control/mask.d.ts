import type { Feature, FeatureCollection, MultiPolygon, Polygon } from "geojson";
export declare function setMask(picked: Feature<Polygon | MultiPolygon>, setData: (data?: FeatureCollection<Polygon | MultiPolygon>) => void): void;
