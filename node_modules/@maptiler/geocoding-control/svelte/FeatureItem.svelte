<script context="module">"use strict";
const hidpi = typeof devicePixelRatio === "undefined" ? 1 : devicePixelRatio > 1.25;
const scaleUrl = hidpi ? "@2x" : "";
const scaleFactor = hidpi ? 2 : 1;
let sprites;
let spritePromise;
</script>

<script>import { createEventDispatcher } from "svelte";
export let feature;
export let style = "default";
export let showPlaceType;
export let missingIconsCache;
export let iconsBaseUrl;
$: categories = feature.properties?.categories;
$: isReverse = feature.place_type[0] === "reverse";
const dispatch = createEventDispatcher();
let category;
let imageUrl;
let spriteIcon;
let index;
$: placeType =
    feature.properties?.categories?.join(", ") ??
        feature.properties?.place_type_name?.[0] ??
        feature.place_type[0];
$: {
    index = categories?.length ?? 0;
    loadIcon();
}
function loadSprites() {
    spritePromise ??= fetch(`${iconsBaseUrl}sprite${scaleUrl}.json`)
        .then((response) => response.json())
        .then((data) => {
        sprites = data;
    })
        .catch(() => {
        sprites = null;
    });
}
function handleImgError() {
    if (imageUrl) {
        missingIconsCache.add(imageUrl);
    }
    loadIcon();
}
function loadIcon() {
    if (sprites !== undefined) {
        loadIcon2();
    }
    else {
        loadSprites();
        spritePromise?.then(loadIcon2);
    }
}
function loadIcon2() {
    do {
        index--;
        category = categories?.[index];
        spriteIcon = category ? sprites?.icons[category] : undefined;
        if (spriteIcon) {
            break;
        }
        imageUrl = category
            ? iconsBaseUrl + category.replace(/ /g, "_") + ".svg"
            : undefined;
    } while (index > -1 && (!imageUrl || missingIconsCache.has(imageUrl)));
}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<li
  tabindex="-1"
  role="option"
  aria-selected={style === "selected"}
  aria-checked={style === "picked"}
  class={style}
  on:mouseenter
  on:focus={() => dispatch("select", undefined)}
  on:click={(ev) => {
    // this is to trigger the event if we click on focused item
    if (document.activeElement !== ev.target) {
      dispatch("select", undefined);
    }
  }}
>
  {#if sprites && spriteIcon}
    <div
      class="sprite-icon"
      style={`
        width: ${spriteIcon.width / scaleFactor}px;
        height: ${spriteIcon.height / scaleFactor}px;
        background-image: url(${iconsBaseUrl}sprite${scaleUrl}.png);
        background-position: -${spriteIcon.x / scaleFactor}px -${spriteIcon.y / scaleFactor}px;
        background-size: ${sprites.width / scaleFactor}px ${sprites.height / scaleFactor}px;
      `}
      title={placeType}
    />
  {:else if imageUrl}
    <img
      src={imageUrl}
      alt={category}
      title={placeType}
      on:error={() => handleImgError()}
    />
  {:else if feature.address}
    <img
      src={iconsBaseUrl + "housenumber.svg"}
      alt={placeType}
      title={placeType}
    />
  {:else if feature.id.startsWith("road.")}
    <img src={iconsBaseUrl + "road.svg"} alt={placeType} title={placeType} />
  {:else if feature.id.startsWith("address.")}
    <img src={iconsBaseUrl + "street.svg"} alt={placeType} title={placeType} />
  {:else if feature.id.startsWith("postal_code.")}
    <img
      src={iconsBaseUrl + "postal_code.svg"}
      alt={placeType}
      title={placeType}
    />
  {:else if feature.id.startsWith("poi.")}
    <img src={iconsBaseUrl + "poi.svg"} alt={placeType} title={placeType} />
  {:else if isReverse}
    <img src={iconsBaseUrl + "reverse.svg"} alt={placeType} title={placeType} />
  {:else}
    <img src={iconsBaseUrl + "area.svg"} alt={placeType} title={placeType} />
  {/if}

  <span class="texts">
    <span>
      <span class="primary">
        {isReverse ? feature.place_name : feature.place_name.replace(/,.*/, "")}
      </span>

      {#if showPlaceType === "always" || (showPlaceType !== "never" && !feature.address && !feature.id.startsWith("road.") && !feature.id.startsWith("address.") && !feature.id.startsWith("postal_code.") && (!feature.id.startsWith("poi.") || !imageUrl) && !isReverse)}
        <span class="secondary">
          {placeType}
        </span>
      {/if}
    </span>

    <span class="line2">
      {isReverse ? "" : feature.place_name.replace(/[^,]*,?\s*/, "")}
    </span>
  </span>
</li>

<style>.sprite-icon {
  align-self: center;
  justify-self: center;
  opacity: 0.75;
  background-repeat: no-repeat;
}

li {
  text-align: left;
  cursor: default;
  display: grid;
  grid-template-columns: 40px 1fr;
  color: var(--color-text);
  padding: 8px 0px;
  font-size: 14px;
  line-height: 18px;
  min-width: fit-content;
  outline: 0;
}
li:first-child {
  padding-top: 10px;
}
li:last-child {
  padding-bottom: 10px;
}
li.picked {
  background-color: #e7edff;
}
li.picked .secondary {
  color: #96a4c7;
  padding-left: 4px;
}
li.picked .line2 {
  color: #96a4c7;
}
li.selected {
  background-color: #f3f6ff;
}
li.selected {
  animation: backAndForth 5s linear infinite;
}
li.selected .primary {
  color: #2b8bfb;
}
li.selected .secondary {
  color: #a2adc7;
  padding-left: 4px;
}
li.selected .line2 {
  color: #a2adc7;
}
li > img {
  align-self: center;
  justify-self: center;
  opacity: 0.75;
}

.texts {
  padding: 0 17px 0 0;
}
.texts > * {
  white-space: nowrap;
  display: block;
  min-width: fit-content;
}

.primary {
  font-weight: 600;
}

.secondary {
  color: #aeb6c7;
  padding-left: 4px;
}

.line2 {
  color: #aeb6c7;
}

@keyframes backAndForth {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(0);
  }
  45% {
    transform: translateX(calc(-100% + 270px));
  }
  55% {
    transform: translateX(calc(-100% + 270px));
  }
  90% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(0);
  }
}</style>
