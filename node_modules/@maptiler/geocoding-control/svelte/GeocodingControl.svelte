<script>import { createEventDispatcher, onDestroy } from "svelte";
import { default as ClearIcon } from "./ClearIcon.svelte";
import { default as FailIcon } from "./FailIcon.svelte";
import { default as FeatureItem } from "./FeatureItem.svelte";
import { default as LoadingIcon } from "./LoadingIcon.svelte";
import MarkerIcon from "./MarkerIcon.svelte";
import { default as ReverseGeocodingIcon } from "./ReverseGeocodingIcon.svelte";
import { default as SearchIcon } from "./SearchIcon.svelte";
import { unwrapBbox, wrapNum } from "./geoUtils";
import { getProximity } from "./proximity";
import { convert } from "geo-coordinates-parser";
export const ZOOM_DEFAULTS = {
    continental_marine: 4,
    country: 4,
    major_landform: 8,
    region: 5,
    subregion: 6,
    county: 7,
    joint_municipality: 8,
    joint_submunicipality: 9,
    municipality: 10,
    municipal_district: 11,
    locality: 12,
    neighbourhood: 13,
    place: 14,
    postal_code: 14,
    road: 16,
    poi: 17,
    address: 18,
    "poi.peak": 15,
    "poi.shop": 18,
    "poi.cafe": 18,
    "poi.restaurant": 18,
    "poi.aerodrome": 13,
    // TODO add many more
};
let className = undefined;
export { className as class };
export let apiKey = undefined;
export let bbox = undefined;
export let clearButtonTitle = "clear";
export let clearOnBlur = false;
export let clearListOnPick = false;
export let keepListOpen = false;
export let collapsed = false;
export let country = undefined;
export let debounceSearch = 200;
export let enableReverse = "never";
export let errorMessage = "Something went wrong…";
export let filter = () => true;
export let flyTo = true;
export let fuzzyMatch = true;
export let language = undefined;
export let limit = undefined;
const COPY_LIMIT = +41415112612;
export let reverseGeocodingLimit = COPY_LIMIT;
export let mapController = undefined;
export let minLength = 2;
export let noResultsMessage = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!";
export let placeholder = "Search";
export let proximity = [
    { type: "server-geolocation" },
];
export let reverseActive = enableReverse === "always";
export let reverseButtonTitle = "toggle reverse geocoding";
export let searchValue = "";
export let pickedResultStyle = "full-geometry";
export let showPlaceType = "if-needed";
export let showResultsWhileTyping = true;
export let selectFirst = true;
export let flyToSelected = false;
export let markerOnSelected = true;
export let types = undefined;
const COPY_TYPES = [];
export let reverseGeocodingTypes = COPY_TYPES;
export let exhaustiveReverseGeocoding = false;
export let excludeTypes = false;
const COPY_EXCLUDE_TYPES = undefined;
export let reverseGeocodingExcludeTypes = COPY_EXCLUDE_TYPES;
export let zoom = ZOOM_DEFAULTS;
export let apiUrl = "https://api.maptiler.com/geocoding";
export let fetchParameters = {};
export let iconsBaseUrl = "https://cdn.maptiler.com/maptiler-geocoding-control/v" +
    "2.1.7" +
    "/icons/";
/**
 * @deprecated use `adjustUrl`
 */
export let adjustUrlQuery = () => { };
/**
 * Adjust geocoding URL before the fetch.
 */
export let adjustUrl = () => { };
/**
 * Focus the search input box.
 *
 * @param options [FocusOptions](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#options)
 */
export function focus(options) {
    input.focus(options);
}
/**
 * Blur the search input box.
 */
export function blur() {
    input.blur();
}
/**
 * Set the content of search input box.
 *
 * @param value text to set
 * @param submit perform the search
 */
export function setQuery(value, submit = true, reverse = false) {
    searchValue = value;
    if (submit) {
        selectedItemIndex = -1;
        handleSubmit();
    }
    else {
        handleInput(undefined, !reverse, reverse);
        setTimeout(() => {
            input.focus();
            input.select();
        });
    }
}
/**
 * Clear search result list.
 */
export function clearList() {
    listFeatures = undefined;
    picked = undefined;
    selectedItemIndex = -1;
}
/**
 * Clear geocoding search results from the map.
 */
export function clearMap() {
    markedFeatures = [];
    picked = undefined;
}
let listFeatures;
let markedFeatures;
let picked;
let lastSearchUrl = "";
let input;
let selectedItemIndex = -1;
let error;
let cachedFeatures = [];
let abortController;
let searchTimeoutRef;
let focusedDelayed;
let prevIdToFly;
let focused = false;
const missingIconsCache = new Set();
const dispatch = createEventDispatcher();
$: reverseActive = enableReverse === "always";
$: if (pickedResultStyle !== "marker-only" &&
    picked &&
    !picked.address &&
    picked.geometry.type === "Point" &&
    picked.place_type[0] !== "reverse") {
    search(picked.id, { byId: true }).catch((err) => (error = err));
}
$: {
    if (mapController && picked && picked.id !== prevIdToFly && flyTo) {
        goToPicked();
        if (clearListOnPick) {
            listFeatures = undefined;
        }
        markedFeatures = undefined;
        selectedItemIndex = -1;
    }
    prevIdToFly = picked?.id;
}
$: if (mapController && selected && flyTo && flyToSelected) {
    mapController.flyTo(selected.center, computeZoom(selected));
}
$: showPolygonMarker =
    pickedResultStyle === "full-geometry-including-polygon-center-marker";
// if markerOnSelected was dynamically changed to false
$: if (!markerOnSelected) {
    mapController?.setFeatures(undefined, undefined, showPolygonMarker);
}
$: if (mapController && markerOnSelected && !markedFeatures) {
    mapController.setFeatures(selected ? [selected] : undefined, picked, showPolygonMarker);
    mapController.setSelectedMarker(selected ? 0 : -1);
}
$: if (markedFeatures !== listFeatures) {
    markedFeatures = undefined;
}
$: if (mapController) {
    mapController.setFeatures(markedFeatures, picked, showPolygonMarker);
}
$: if (searchValue.length < minLength) {
    listFeatures = undefined;
    error = undefined;
    markedFeatures = listFeatures;
}
// highlight selected marker
$: if (markedFeatures && mapController) {
    mapController.setSelectedMarker(selectedItemIndex);
}
// close dropdown in the next cycle so that the selected item event has the chance to fire
$: setTimeout(() => {
    focusedDelayed = focused;
    if (clearOnBlur && !focusedDelayed) {
        searchValue = "";
    }
});
$: if (selectFirst &&
    listFeatures?.length &&
    selectedItemIndex == -1 &&
    !picked) {
    selectedItemIndex = 0;
}
$: selected = listFeatures?.[selectedItemIndex];
$: if (mapController) {
    const coords = isQueryReverse(searchValue);
    mapController.setReverseMarker(coords ? [coords.decimalLongitude, coords.decimalLatitude] : undefined);
}
$: dispatch("select", { feature: selected });
$: dispatch("pick", { feature: picked });
$: optionsVisible =
    !!listFeatures?.length && (focusedDelayed || keepListOpen);
$: dispatch("optionsvisibilitychange", { optionsVisible });
$: dispatch("featureslisted", { features: listFeatures });
$: dispatch("featuresmarked", { features: markedFeatures });
$: dispatch("reversetoggle", { reverse: reverseActive });
$: dispatch("querychange", { query: searchValue });
$: if (mapController) {
    mapController.indicateReverse(reverseActive);
}
$: if (mapController) {
    mapController.setEventHandler((e) => {
        switch (e.type) {
            case "mapClick":
                if (reverseActive) {
                    handleReverse(e.coordinates);
                }
                break;
            case "markerClick":
                {
                    const feature = listFeatures?.find((feature) => feature.id === e.id);
                    if (feature) {
                        pick(feature);
                    }
                }
                break;
            case "markerMouseEnter":
                if (markedFeatures) {
                    selectedItemIndex = !focusedDelayed
                        ? -1
                        : (listFeatures?.findIndex((feature) => feature.id === e.id) ??
                            -1);
                }
                break;
            case "markerMouseLeave":
                if (markedFeatures) {
                    selectedItemIndex = -1;
                }
                break;
        }
    });
}
onDestroy(() => {
    if (mapController) {
        mapController.setEventHandler(undefined);
        mapController.indicateReverse(false);
        mapController.setSelectedMarker(-1);
        mapController.setFeatures(undefined, undefined, false);
    }
});
function handleSubmit(event) {
    focused = false;
    if (searchTimeoutRef) {
        clearTimeout(searchTimeoutRef);
        searchTimeoutRef = undefined;
    }
    if (selectedItemIndex > -1 && listFeatures) {
        picked = listFeatures[selectedItemIndex];
        searchValue =
            picked.place_type[0] === "reverse"
                ? picked.place_name
                : picked.place_name.replace(/,.*/, "");
        error = undefined;
        markedFeatures = undefined;
        selectedItemIndex = -1;
    }
    else if (searchValue) {
        const zoomTo = event || !isQueryReverse(searchValue);
        search(searchValue, { exact: true })
            .then(() => {
            markedFeatures = listFeatures;
            picked = undefined;
            if (zoomTo) {
                zoomToResults();
            }
        })
            .catch((err) => (error = err));
    }
}
function isQueryReverse(searchValue) {
    try {
        return convert(searchValue, 6);
    }
    catch {
        return false;
    }
}
async function search(searchValue, { byId = false, exact = false, } = {}) {
    error = undefined;
    abortController?.abort();
    const ac = new AbortController();
    abortController = ac;
    try {
        const isReverse = isQueryReverse(searchValue);
        const urlObj = new URL(apiUrl +
            "/" +
            encodeURIComponent(isReverse
                ? isReverse.decimalLongitude + "," + isReverse.decimalLatitude
                : searchValue) +
            ".json");
        const sp = urlObj.searchParams;
        if (language !== undefined) {
            sp.set("language", Array.isArray(language) ? language.join(",") : (language ?? ""));
        }
        const [zoom] = mapController?.getCenterAndZoom() ?? [];
        let effTypes = (!isReverse || reverseGeocodingTypes === COPY_TYPES
            ? types
            : reverseGeocodingTypes)
            ?.map((typeRule) => typeof typeRule === "string"
            ? typeRule
            : zoom === undefined ||
                ((typeRule[0] ?? 0) <= zoom && zoom < (typeRule[1] ?? Infinity))
                ? typeRule[2]
                : undefined)
            .filter((type) => type !== undefined);
        if (effTypes) {
            effTypes = [...new Set(effTypes)];
            sp.set("types", effTypes.join(","));
        }
        const effExcludeTypes = !isReverse || reverseGeocodingExcludeTypes === COPY_EXCLUDE_TYPES
            ? excludeTypes
            : reverseGeocodingExcludeTypes;
        if (effExcludeTypes) {
            sp.set("excludeTypes", String(effExcludeTypes));
        }
        if (bbox) {
            sp.set("bbox", bbox.map((c) => c.toFixed(6)).join(","));
        }
        if (country) {
            sp.set("country", Array.isArray(country) ? country.join(",") : country);
        }
        if (!byId && !isReverse) {
            const coords = await getProximity(mapController, proximity, ac);
            if (coords) {
                sp.set("proximity", coords);
            }
            if (exact || !showResultsWhileTyping) {
                sp.set("autocomplete", "false");
            }
            sp.set("fuzzyMatch", String(fuzzyMatch));
        }
        const effReverseGeocodingLimit = reverseGeocodingLimit === COPY_LIMIT ? limit : reverseGeocodingLimit;
        if (effReverseGeocodingLimit !== undefined &&
            effReverseGeocodingLimit > 1 &&
            effTypes?.length !== 1) {
            console.warn("For reverse geocoding when limit > 1 then types must contain single value.");
        }
        if (isReverse) {
            if (effReverseGeocodingLimit === 1 ||
                (effReverseGeocodingLimit !== undefined &&
                    (exhaustiveReverseGeocoding || effTypes?.length === 1))) {
                sp.set("limit", String(effReverseGeocodingLimit));
            }
        }
        else if (limit !== undefined) {
            sp.set("limit", String(limit));
        }
        if (apiKey) {
            sp.set("key", apiKey);
        }
        adjustUrlQuery(sp);
        adjustUrl(urlObj);
        const noTypes = urlObj.searchParams.get("types") === "" &&
            urlObj.searchParams.get("excludeTypes") !== "true";
        const url = urlObj.toString();
        if (url === lastSearchUrl) {
            if (byId) {
                if (clearListOnPick) {
                    listFeatures = undefined;
                }
                picked = cachedFeatures[0];
            }
            else {
                listFeatures = cachedFeatures;
                if (listFeatures[selectedItemIndex]?.id !== selected?.id) {
                    selectedItemIndex = -1;
                }
            }
            return;
        }
        lastSearchUrl = url;
        let featureCollection;
        if (noTypes) {
            featureCollection = { type: "FeatureCollection", features: [] };
        }
        else {
            const res = await fetch(url, {
                signal: ac.signal,
                ...fetchParameters,
            });
            if (!res.ok) {
                throw new Error(await res.text());
            }
            featureCollection = await res.json();
        }
        dispatch("response", { url, featureCollection });
        if (byId) {
            if (clearListOnPick) {
                listFeatures = undefined;
            }
            picked = featureCollection.features[0];
            cachedFeatures = [picked];
        }
        else {
            listFeatures = featureCollection.features.filter(filter);
            if (isReverse) {
                listFeatures.unshift({
                    type: "Feature",
                    properties: {},
                    id: "reverse_" +
                        isReverse.decimalLongitude +
                        "_" +
                        isReverse.decimalLatitude,
                    text: isReverse.decimalLatitude + ", " + isReverse.decimalLongitude,
                    place_name: isReverse.decimalLatitude + ", " + isReverse.decimalLongitude,
                    place_type: ["reverse"],
                    center: [isReverse.decimalLongitude, isReverse.decimalLatitude],
                    bbox: [
                        isReverse.decimalLongitude,
                        isReverse.decimalLatitude,
                        isReverse.decimalLongitude,
                        isReverse.decimalLatitude,
                    ],
                    geometry: {
                        type: "Point",
                        coordinates: [
                            isReverse.decimalLongitude,
                            isReverse.decimalLatitude,
                        ],
                    },
                });
            }
            cachedFeatures = listFeatures;
            if (listFeatures[selectedItemIndex]?.id !== selected?.id) {
                selectedItemIndex = -1;
            }
            if (isReverse) {
                input.focus();
            }
        }
    }
    catch (e) {
        if (e &&
            typeof e === "object" &&
            "name" in e &&
            e.name === "AbortError") {
            return;
        }
        throw e;
    }
    finally {
        if (ac === abortController) {
            abortController = undefined;
        }
    }
}
function zoomToResults() {
    if (!markedFeatures?.length || !flyTo) {
        return;
    }
    const bbox = [180, 90, -180, -90];
    const fuzzyOnly = !markedFeatures.some((feature) => !feature.matching_text);
    let allZoom;
    for (const feature of markedFeatures) {
        const featZoom = computeZoom(feature);
        allZoom =
            allZoom === undefined
                ? featZoom
                : featZoom === undefined
                    ? allZoom
                    : Math.max(allZoom, featZoom);
        if (fuzzyOnly || !feature.matching_text) {
            for (const i of [0, 1, 2, 3]) {
                bbox[i] = Math[i < 2 ? "min" : "max"](bbox[i], feature.bbox?.[i] ?? feature.center[i % 2]);
            }
        }
    }
    if (mapController && markedFeatures.length > 0) {
        if (picked && bbox[0] === bbox[2] && bbox[1] === bbox[3]) {
            mapController.flyTo(picked.center, computeZoom(picked));
        }
        else {
            mapController.fitBounds(unwrapBbox(bbox), 50, allZoom);
        }
    }
}
function goToPicked() {
    if (!picked || !mapController) {
        return;
    }
    if (!picked.bbox ||
        (picked.bbox[0] === picked.bbox[2] && picked.bbox[1] === picked.bbox[3])) {
        mapController.flyTo(picked.center, computeZoom(picked));
    }
    else {
        mapController.fitBounds(unwrapBbox(picked.bbox), 50, computeZoom(picked));
    }
}
function computeZoom(feature) {
    if (!feature.bbox ||
        (feature.bbox[0] !== feature.bbox[2] &&
            feature.bbox[1] !== feature.bbox[3])) {
        return undefined;
    }
    const index = feature.id.replace(/\..*/, "");
    return ((Array.isArray(feature.properties?.categories)
        ? feature.properties.categories.reduce((a, category) => {
            const b = zoom[index + "." + category];
            return a === undefined ? b : b === undefined ? a : Math.max(a, b);
        }, undefined)
        : undefined) ?? zoom[index]);
}
function handleReverse(coordinates) {
    reverseActive = enableReverse === "always";
    listFeatures = undefined;
    picked = undefined;
    selectedItemIndex = -1;
    setQuery(coordinates[1].toFixed(6) +
        ", " +
        wrapNum(coordinates[0], [-180, 180], true).toFixed(6), false, true);
}
function handleKeyDown(e) {
    if (!listFeatures) {
        return;
    }
    let dir = e.key === "ArrowDown" ? 1 : e.key === "ArrowUp" ? -1 : 0;
    if (!dir) {
        return;
    }
    input.focus();
    focused = true;
    e.preventDefault();
    if (picked && selectedItemIndex === -1) {
        selectedItemIndex = listFeatures.findIndex((listFeature) => listFeature.id === picked?.id);
    }
    if (selectedItemIndex === (picked || selectFirst ? 0 : -1) && dir === -1) {
        selectedItemIndex = listFeatures.length;
    }
    selectedItemIndex += dir;
    if (selectedItemIndex >= listFeatures.length) {
        selectedItemIndex = -1;
    }
    if (selectedItemIndex < 0 && (picked || selectFirst)) {
        selectedItemIndex = 0;
    }
}
function handleInput(_, debounce = true, reverse = false) {
    error = undefined;
    picked = undefined;
    focused = true;
    if (showResultsWhileTyping || reverse) {
        if (searchTimeoutRef) {
            clearTimeout(searchTimeoutRef);
        }
        if (searchValue.length < minLength) {
            return;
        }
        const sv = searchValue;
        searchTimeoutRef = window.setTimeout(() => {
            search(sv).catch((err) => (error = err));
        }, debounce ? debounceSearch : 0);
    }
    else {
        listFeatures = undefined;
        error = undefined;
    }
}
function pick(feature) {
    if (picked && picked?.id === feature?.id) {
        goToPicked();
    }
    else {
        picked = feature;
        searchValue = feature.place_name;
    }
}
function handleMouseEnter(index) {
    selectedItemIndex = index;
}
function handleMouseLeave() {
    if (!selectFirst || picked) {
        selectedItemIndex = -1;
    }
    // re-focus on picked
    if (flyToSelected) {
        goToPicked();
    }
}
</script>

{#if false}
  <!-- This workaround is just to use marker styles. Bug in svlete/vite? Investigate. -->
  <MarkerIcon displayIn="list" />
{/if}

<form
  on:submit|preventDefault={handleSubmit}
  class:can-collapse={collapsed && searchValue === ""}
  class={className}
>
  <div class="input-group">
    <button class="search-button" type="button" on:click={() => input.focus()}>
      <SearchIcon />
    </button>

    <input
      bind:this={input}
      bind:value={searchValue}
      on:focus={() => (focused = true)}
      on:blur={() => (focused = false)}
      on:click={() => (focused = true)}
      on:keydown={handleKeyDown}
      on:input={handleInput}
      on:change={() => (picked = undefined)}
      {placeholder}
      aria-label={placeholder}
    />

    <div class="clear-button-container" class:displayable={searchValue !== ""}>
      {#if !abortController}
        <button
          type="button"
          on:click={() => {
            searchValue = "";
            picked = undefined;
            input.focus();
          }}
          title={clearButtonTitle}
        >
          <ClearIcon />
        </button>
      {/if}

      {#if abortController}
        <LoadingIcon />
      {/if}
    </div>

    {#if enableReverse === "button"}
      <button
        type="button"
        class:active={reverseActive}
        title={reverseButtonTitle}
        on:click={() => (reverseActive = !reverseActive)}
      >
        <ReverseGeocodingIcon />
      </button>
    {/if}

    <slot />
  </div>

  {#if error}
    <div class="error">
      <FailIcon />

      <div>{errorMessage}</div>

      <button on:click={() => (error = undefined)}>
        <ClearIcon />
      </button>
    </div>
  {:else if !focusedDelayed && !keepListOpen}
    {""}
  {:else if listFeatures?.length === 0}
    <div class="no-results">
      <FailIcon />

      <div>{noResultsMessage}</div>
    </div>
  {:else if listFeatures?.length && (focusedDelayed || keepListOpen)}
    <ul
      class="options"
      on:mouseleave={handleMouseLeave}
      on:blur={() => undefined}
      on:keydown={handleKeyDown}
      role="listbox"
    >
      {#each listFeatures as feature, i (feature.id + (feature.address ? "," + feature.address : ""))}
        <FeatureItem
          {feature}
          {showPlaceType}
          style={selectedItemIndex === i
            ? "selected"
            : picked?.id === feature.id
              ? "picked"
              : "default"}
          on:mouseenter={() => handleMouseEnter(i)}
          on:select={() => pick(feature)}
          {missingIconsCache}
          {iconsBaseUrl}
        />
      {/each}
    </ul>
  {/if}
</form>

<style>form {
  font-family: "Open Sans", "Ubuntu", "Helvetica Neue", Arial, Helvetica, sans-serif;
  position: relative;
  background-color: #fff;
  z-index: 10;
  border-radius: 4px;
  margin: 0;
  transition: max-width 0.25s;
  box-shadow: 0px 2px 5px rgba(51, 51, 89, 0.15);
  --color-text: #444952;
  --color-icon-button: #444952;
}
form, form *, form *:after, form *:before {
  box-sizing: border-box;
}
form.can-collapse {
  max-width: 29px;
}
form.can-collapse input::placeholder {
  transition: opacity 0.25s;
  opacity: 0;
}
form, form:focus-within, form:hover {
  width: 270px;
  max-width: 270px;
}
form input::placeholder, form:focus-within input::placeholder, form:hover input::placeholder {
  opacity: 1;
}

input {
  font: inherit;
  font-size: 14px;
  flex-grow: 1;
  min-height: 29px;
  background-color: transparent;
  color: #444952;
  white-space: nowrap;
  overflow: hidden;
  border: 0;
  margin: 0;
  padding: 0;
}
input:focus {
  color: #444952;
  outline: 0;
  outline: none;
  box-shadow: none;
}

ul,
div.error,
div.no-results {
  background-color: #fff;
  border-radius: 4px;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  top: calc(100% + 6px);
  overflow: hidden;
}

ul {
  font-size: 14px;
  line-height: 16px;
  box-shadow: 0px 5px 10px rgba(51, 51, 89, 0.15);
}

div.error,
div.no-results {
  font: inherit;
  line-height: 18px;
  font-size: 12px;
  display: flex;
  gap: 16px;
}

div.error {
  padding: 16px;
  font-weight: 600;
  color: #e25041;
  background-color: #fbeae8;
}
div.error div {
  flex-grow: 1;
}
div.error :global(svg) {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}
div.error button {
  flex-shrink: 0;
}
div.error button > :global(svg) {
  width: 13px;
  fill: #e25041;
}
div.error button:hover :global(svg), div.error button:active :global(svg) {
  fill: #444952;
}

div.no-results {
  padding: 14px 24px 14px 16px;
  font-weight: 400;
  color: #6b7c93;
  box-shadow: 0px 5px 10px rgba(51, 51, 89, 0.15);
}
div.no-results :global(svg) {
  margin-top: 4px;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  width: 30px;
  height: 30px;
}

:global(.leaflet-bottom) ul.options,
:global(.maplibregl-ctrl-bottom-left) ul.options,
:global(.maplibregl-ctrl-bottom-right) ul.options {
  top: auto;
  bottom: calc(100% + 6px);
}

button {
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  height: auto;
  width: auto;
}
button:hover {
  background-color: transparent;
}

button:hover :global(svg),
button:active :global(svg) {
  fill: #2b8bfb;
}

.input-group {
  display: flex;
  align-items: stretch;
  gap: 7px;
  padding-inline: 8px;
  border-radius: 4px;
  overflow: hidden;
}
.input-group:focus-within {
  outline: #2b8bfb solid 2px;
}

.search-button {
  flex-shrink: 0;
}

:global(.maplibregl-ctrl-geocoder:not(.maptiler-ctrl) .search-button svg) {
  width: 12px !important;
  transform: translate(0.5px, 0);
}

.clear-button-container {
  display: flex;
  display: none;
  position: relative;
  align-items: stretch;
}
.clear-button-container.displayable {
  display: flex;
  flex-shrink: 0;
}

:global(.maplibregl-ctrl-geocoder) {
  position: relative;
  z-index: 3;
}

:global(.maptiler-ctrl):not(:empty) {
  box-shadow: none;
}
:global(.maptiler-ctrl) .input-group {
  padding-inline: 8px;
  border: white solid 2px;
}
:global(.maptiler-ctrl) .input-group:focus-within {
  border: #2b8bfb solid 2px;
  outline: 0;
  outline: none;
}
:global(.maptiler-ctrl) form.can-collapse {
  max-width: 33px;
}
:global(.maptiler-ctrl) form, :global(.maptiler-ctrl) form:focus-within, :global(.maptiler-ctrl) form:hover {
  width: 270px;
  max-width: 270px;
}</style>
