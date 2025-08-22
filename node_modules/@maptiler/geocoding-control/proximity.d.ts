import type { MapController, ProximityRule } from "./types";
export declare function getProximity(mapController: MapController | undefined, proximity: ProximityRule[] | null | undefined, ac: AbortController): Promise<string | undefined>;
