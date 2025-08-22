var Ri = Object.defineProperty;
var zi = (i, e, t) => e in i ? Ri(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var gt = (i, e, t) => zi(i, typeof e != "symbol" ? e + "" : e, t);
import { forwardRef as Ui, useRef as zt, useEffect as ht, useImperativeHandle as Di, createElement as Ii } from "react";
function G() {
}
function Ai(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function ei(i) {
  return i();
}
function Ut() {
  return /* @__PURE__ */ Object.create(null);
}
function me(i) {
  i.forEach(ei);
}
function ti(i) {
  return typeof i == "function";
}
function ye(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Je;
function X(i, e) {
  return i === e ? !0 : (Je || (Je = document.createElement("a")), Je.href = e, i === Je.href);
}
function Pi(i) {
  return Object.keys(i).length === 0;
}
function Bi(i, e, t, n) {
  if (i) {
    const r = ii(i, e, t, n);
    return i[0](r);
  }
}
function ii(i, e, t, n) {
  return i[1] && n ? Ai(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function Fi(i, e, t, n) {
  return i[2], e.dirty;
}
function Gi(i, e, t, n, r, u) {
  if (r) {
    const a = ii(e, t, n, u);
    i.p(a, r);
  }
}
function ji(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function et(i) {
  return i ?? "";
}
function N(i, e) {
  i.appendChild(e);
}
function A(i, e, t) {
  i.insertBefore(e, t || null);
}
function I(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function z(i) {
  return document.createElement(i);
}
function ce(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function be(i) {
  return document.createTextNode(i);
}
function $() {
  return be(" ");
}
function Hi() {
  return be("");
}
function Q(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function Zi(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function l(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function qi(i) {
  return Array.from(i.childNodes);
}
function Fe(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Dt(i, e) {
  i.value = e ?? "";
}
function Ce(i, e, t) {
  i.classList.toggle(e, !!t);
}
function Qi(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let Ge;
function Be(i) {
  Ge = i;
}
function ni() {
  if (!Ge) throw new Error("Function called outside component initialization");
  return Ge;
}
function Ki(i) {
  ni().$$.on_destroy.push(i);
}
function ri() {
  const i = ni();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const u = Qi(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return r.slice().forEach((a) => {
        a.call(i, u);
      }), !u.defaultPrevented;
    }
    return !0;
  };
}
function Vi(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const Me = [], vt = [];
let We = [];
const It = [], Yi = /* @__PURE__ */ Promise.resolve();
let Lt = !1;
function Xi() {
  Lt || (Lt = !0, Yi.then(oi));
}
function _t(i) {
  We.push(i);
}
const bt = /* @__PURE__ */ new Set();
let Ne = 0;
function oi() {
  if (Ne !== 0)
    return;
  const i = Ge;
  do {
    try {
      for (; Ne < Me.length; ) {
        const e = Me[Ne];
        Ne++, Be(e), Ji(e.$$);
      }
    } catch (e) {
      throw Me.length = 0, Ne = 0, e;
    }
    for (Be(null), Me.length = 0, Ne = 0; vt.length; ) vt.pop()();
    for (let e = 0; e < We.length; e += 1) {
      const t = We[e];
      bt.has(t) || (bt.add(t), t());
    }
    We.length = 0;
  } while (Me.length);
  for (; It.length; )
    It.pop()();
  Lt = !1, bt.clear(), Be(i);
}
function Ji(i) {
  if (i.fragment !== null) {
    i.update(), me(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(_t);
  }
}
function xi(i) {
  const e = [], t = [];
  We.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), We = e;
}
const $e = /* @__PURE__ */ new Set();
let _e;
function Ae() {
  _e = {
    r: 0,
    c: [],
    p: _e
    // parent group
  };
}
function Pe() {
  _e.r || me(_e.c), _e = _e.p;
}
function P(i, e) {
  i && i.i && ($e.delete(i), i.i(e));
}
function q(i, e, t, n) {
  if (i && i.o) {
    if ($e.has(i)) return;
    $e.add(i), _e.c.push(() => {
      $e.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function At(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function $i(i, e) {
  q(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function en(i, e, t, n, r, u, a, o, d, c, f, L) {
  let b = i.length, E = u.length, g = b;
  const p = {};
  for (; g--; ) p[i[g].key] = g;
  const U = [], k = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), B = [];
  for (g = E; g--; ) {
    const w = L(r, u, g), _ = t(w);
    let S = a.get(_);
    S ? B.push(() => S.p(w, e)) : (S = c(_, w), S.c()), k.set(_, U[g] = S), _ in p && W.set(_, Math.abs(g - p[_]));
  }
  const K = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set();
  function M(w) {
    P(w, 1), w.m(o, f), a.set(w.key, w), f = w.first, E--;
  }
  for (; b && E; ) {
    const w = U[E - 1], _ = i[b - 1], S = w.key, D = _.key;
    w === _ ? (f = w.first, b--, E--) : k.has(D) ? !a.has(S) || K.has(S) ? M(w) : C.has(D) ? b-- : W.get(S) > W.get(D) ? (C.add(S), M(w)) : (K.add(D), b--) : (d(_, a), b--);
  }
  for (; b--; ) {
    const w = i[b];
    k.has(w.key) || d(w, a);
  }
  for (; E; ) M(U[E - 1]);
  return me(B), U;
}
function ve(i) {
  i && i.c();
}
function de(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), _t(() => {
    const u = i.$$.on_mount.map(ei).filter(ti);
    i.$$.on_destroy ? i.$$.on_destroy.push(...u) : me(u), i.$$.on_mount = [];
  }), r.forEach(_t);
}
function fe(i, e) {
  const t = i.$$;
  t.fragment !== null && (xi(t.after_update), me(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function tn(i, e) {
  i.$$.dirty[0] === -1 && (Me.push(i), Xi(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function we(i, e, t, n, r, u, a = null, o = [-1]) {
  const d = Ge;
  Be(i);
  const c = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: G,
    not_equal: r,
    bound: Ut(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: Ut(),
    dirty: o,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  a && a(c.root);
  let f = !1;
  if (c.ctx = t ? t(i, e.props || {}, (L, b, ...E) => {
    const g = E.length ? E[0] : b;
    return c.ctx && r(c.ctx[L], c.ctx[L] = g) && (!c.skip_bound && c.bound[L] && c.bound[L](g), f && tn(i, L)), b;
  }) : [], c.update(), f = !0, me(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const L = qi(e.target);
      c.fragment && c.fragment.l(L), L.forEach(I);
    } else
      c.fragment && c.fragment.c();
    e.intro && P(i.$$.fragment), de(i, e.target, e.anchor), oi();
  }
  Be(d);
}
class Ee {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    gt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    gt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    fe(this, 1), this.$destroy = G;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!ti(t))
      return G;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(t), () => {
      const r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Pi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const nn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(nn);
function rn(i) {
  let e, t;
  return {
    c() {
      e = ce("svg"), t = ce("path"), l(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), l(e, "viewBox", "0 0 14 14"), l(e, "width", "13"), l(e, "height", "13"), l(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      A(n, e, r), N(e, t);
    },
    p: G,
    i: G,
    o: G,
    d(n) {
      n && I(e);
    }
  };
}
class si extends Ee {
  constructor(e) {
    super(), we(this, e, null, rn, ye, {});
  }
}
function on(i) {
  let e, t;
  return {
    c() {
      e = ce("svg"), t = ce("path"), l(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), l(e, "viewBox", "0 0 30 30"), l(e, "fill", "none"), l(e, "xmlns", "http://www.w3.org/2000/svg"), l(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      A(n, e, r), N(e, t);
    },
    p: G,
    i: G,
    o: G,
    d(n) {
      n && I(e);
    }
  };
}
class li extends Ee {
  constructor(e) {
    super(), we(this, e, null, on, ye, {});
  }
}
function sn(i) {
  let e, t;
  return {
    c() {
      e = z("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), l(
        e,
        "title",
        /*placeType*/
        i[7]
      ), l(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      A(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && l(e, "src", t), r & /*placeType*/
      128 && l(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && l(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function ln(i) {
  let e, t;
  return {
    c() {
      e = z("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), l(
        e,
        "title",
        /*placeType*/
        i[7]
      ), l(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      A(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && l(e, "src", t), r & /*placeType*/
      128 && l(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && l(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function an(i) {
  let e, t;
  return {
    c() {
      e = z("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), l(
        e,
        "title",
        /*placeType*/
        i[7]
      ), l(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      A(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && l(e, "src", t), r & /*placeType*/
      128 && l(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && l(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function un(i) {
  let e, t;
  return {
    c() {
      e = z("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), l(
        e,
        "title",
        /*placeType*/
        i[7]
      ), l(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      A(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && l(e, "src", t), r & /*placeType*/
      128 && l(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && l(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function cn(i) {
  let e, t;
  return {
    c() {
      e = z("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), l(
        e,
        "title",
        /*placeType*/
        i[7]
      ), l(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      A(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && l(e, "src", t), r & /*placeType*/
      128 && l(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && l(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function dn(i) {
  let e, t;
  return {
    c() {
      e = z("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), l(
        e,
        "title",
        /*placeType*/
        i[7]
      ), l(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      A(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && l(e, "src", t), r & /*placeType*/
      128 && l(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && l(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function fn(i) {
  let e, t;
  return {
    c() {
      e = z("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || l(e, "src", t), l(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), l(
        e,
        "title",
        /*placeType*/
        i[7]
      ), l(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      A(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && l(e, "src", t), r & /*placeType*/
      128 && l(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && l(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function mn(i) {
  let e, t, n, r;
  return {
    c() {
      e = z("img"), X(e.src, t = /*imageUrl*/
      i[5]) || l(e, "src", t), l(
        e,
        "alt",
        /*category*/
        i[4]
      ), l(
        e,
        "title",
        /*placeType*/
        i[7]
      ), l(e, "class", "svelte-w9y5n9");
    },
    m(u, a) {
      A(u, e, a), n || (r = Q(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(u, a) {
      a & /*imageUrl*/
      32 && !X(e.src, t = /*imageUrl*/
      u[5]) && l(e, "src", t), a & /*category*/
      16 && l(
        e,
        "alt",
        /*category*/
        u[4]
      ), a & /*placeType*/
      128 && l(
        e,
        "title",
        /*placeType*/
        u[7]
      );
    },
    d(u) {
      u && I(e), n = !1, r();
    }
  };
}
function gn(i) {
  let e, t;
  return {
    c() {
      e = z("div"), l(e, "class", "sprite-icon svelte-w9y5n9"), l(e, "style", t = `
        width: ${/*spriteIcon*/
      i[6].width / te}px;
        height: ${/*spriteIcon*/
      i[6].height / te}px;
        background-image: url(${/*iconsBaseUrl*/
      i[3]}sprite${yt}.png);
        background-position: -${/*spriteIcon*/
      i[6].x / te}px -${/*spriteIcon*/
      i[6].y / te}px;
        background-size: ${ne.width / te}px ${ne.height / te}px;
      `), l(
        e,
        "title",
        /*placeType*/
        i[7]
      );
    },
    m(n, r) {
      A(n, e, r);
    },
    p(n, r) {
      r & /*spriteIcon, iconsBaseUrl*/
      72 && t !== (t = `
        width: ${/*spriteIcon*/
      n[6].width / te}px;
        height: ${/*spriteIcon*/
      n[6].height / te}px;
        background-image: url(${/*iconsBaseUrl*/
      n[3]}sprite${yt}.png);
        background-position: -${/*spriteIcon*/
      n[6].x / te}px -${/*spriteIcon*/
      n[6].y / te}px;
        background-size: ${ne.width / te}px ${ne.height / te}px;
      `) && l(e, "style", t), r & /*placeType*/
      128 && l(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function Pt(i) {
  let e, t;
  return {
    c() {
      e = z("span"), t = be(
        /*placeType*/
        i[7]
      ), l(e, "class", "secondary svelte-w9y5n9");
    },
    m(n, r) {
      A(n, e, r), N(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      128 && Fe(
        t,
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && I(e);
    }
  };
}
function hn(i) {
  let e, t, n, r, u, a, o, d, c, f = (
    /*isReverse*/
    (i[8] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), L, b, E = (
    /*showPlaceType*/
    i[2] === "always" || /*showPlaceType*/
    i[2] !== "never" && !/*feature*/
    i[0].address && !/*feature*/
    i[0].id.startsWith("road.") && !/*feature*/
    i[0].id.startsWith("address.") && !/*feature*/
    i[0].id.startsWith("postal_code.") && (!/*feature*/
    i[0].id.startsWith("poi.") || !/*imageUrl*/
    i[5]) && !/*isReverse*/
    i[8]
  ), g, p, U = (
    /*isReverse*/
    (i[8] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), k, W, B, K, C, M;
  function w(v, m) {
    return m & /*feature*/
    1 && (t = null), m & /*feature*/
    1 && (n = null), m & /*feature*/
    1 && (r = null), m & /*feature*/
    1 && (u = null), ne && /*spriteIcon*/
    v[6] ? gn : (
      /*imageUrl*/
      v[5] ? mn : (
        /*feature*/
        v[0].address ? fn : (t == null && (t = !!/*feature*/
        v[0].id.startsWith("road.")), t ? dn : (n == null && (n = !!/*feature*/
        v[0].id.startsWith("address.")), n ? cn : (r == null && (r = !!/*feature*/
        v[0].id.startsWith("postal_code.")), r ? un : (u == null && (u = !!/*feature*/
        v[0].id.startsWith("poi.")), u ? an : (
          /*isReverse*/
          v[8] ? ln : sn
        )))))
      )
    );
  }
  let _ = w(i, -1), S = _(i), D = E && Pt(i);
  return {
    c() {
      e = z("li"), S.c(), a = $(), o = z("span"), d = z("span"), c = z("span"), L = be(f), b = $(), D && D.c(), g = $(), p = z("span"), k = be(U), l(c, "class", "primary svelte-w9y5n9"), l(d, "class", "svelte-w9y5n9"), l(p, "class", "line2 svelte-w9y5n9"), l(o, "class", "texts svelte-w9y5n9"), l(e, "tabindex", "-1"), l(e, "role", "option"), l(e, "aria-selected", W = /*style*/
      i[1] === "selected"), l(e, "aria-checked", B = /*style*/
      i[1] === "picked"), l(e, "class", K = et(
        /*style*/
        i[1]
      ) + " svelte-w9y5n9");
    },
    m(v, m) {
      A(v, e, m), S.m(e, null), N(e, a), N(e, o), N(o, d), N(d, c), N(c, L), N(d, b), D && D.m(d, null), N(o, g), N(o, p), N(p, k), C || (M = [
        Q(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[13]
        ),
        Q(
          e,
          "focus",
          /*focus_handler*/
          i[15]
        ),
        Q(
          e,
          "click",
          /*click_handler*/
          i[16]
        )
      ], C = !0);
    },
    p(v, [m]) {
      _ === (_ = w(v, m)) && S ? S.p(v, m) : (S.d(1), S = _(v), S && (S.c(), S.m(e, a))), m & /*isReverse, feature*/
      257 && f !== (f = /*isReverse*/
      (v[8] ? (
        /*feature*/
        v[0].place_name
      ) : (
        /*feature*/
        v[0].place_name.replace(/,.*/, "")
      )) + "") && Fe(L, f), m & /*showPlaceType, feature, imageUrl, isReverse*/
      293 && (E = /*showPlaceType*/
      v[2] === "always" || /*showPlaceType*/
      v[2] !== "never" && !/*feature*/
      v[0].address && !/*feature*/
      v[0].id.startsWith("road.") && !/*feature*/
      v[0].id.startsWith("address.") && !/*feature*/
      v[0].id.startsWith("postal_code.") && (!/*feature*/
      v[0].id.startsWith("poi.") || !/*imageUrl*/
      v[5]) && !/*isReverse*/
      v[8]), E ? D ? D.p(v, m) : (D = Pt(v), D.c(), D.m(d, null)) : D && (D.d(1), D = null), m & /*isReverse, feature*/
      257 && U !== (U = /*isReverse*/
      (v[8] ? "" : (
        /*feature*/
        v[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Fe(k, U), m & /*style*/
      2 && W !== (W = /*style*/
      v[1] === "selected") && l(e, "aria-selected", W), m & /*style*/
      2 && B !== (B = /*style*/
      v[1] === "picked") && l(e, "aria-checked", B), m & /*style*/
      2 && K !== (K = et(
        /*style*/
        v[1]
      ) + " svelte-w9y5n9") && l(e, "class", K);
    },
    i: G,
    o: G,
    d(v) {
      v && I(e), S.d(), D && D.d(), C = !1, me(M);
    }
  };
}
const ai = typeof devicePixelRatio > "u" ? 1 : devicePixelRatio > 1.25, yt = ai ? "@2x" : "", te = ai ? 2 : 1;
let ne, xe;
function bn(i, e, t) {
  let n, r, u, { feature: a } = e, { style: o = "default" } = e, { showPlaceType: d } = e, { missingIconsCache: c } = e, { iconsBaseUrl: f } = e;
  const L = ri();
  let b, E, g, p;
  function U() {
    xe ?? (xe = fetch(`${f}sprite${yt}.json`).then((_) => _.json()).then((_) => {
      ne = _;
    }).catch(() => {
      ne = null;
    }));
  }
  function k() {
    E && c.add(E), W();
  }
  function W() {
    ne !== void 0 ? B() : (U(), xe == null || xe.then(B));
  }
  function B() {
    do {
      if (p--, t(4, b = n == null ? void 0 : n[p]), t(6, g = b ? ne == null ? void 0 : ne.icons[b] : void 0), g)
        break;
      t(5, E = b ? f + b.replace(/ /g, "_") + ".svg" : void 0);
    } while (p > -1 && (!E || c.has(E)));
  }
  function K(_) {
    Vi.call(this, i, _);
  }
  const C = () => k(), M = () => L("select", void 0), w = (_) => {
    document.activeElement !== _.target && L("select", void 0);
  };
  return i.$$set = (_) => {
    "feature" in _ && t(0, a = _.feature), "style" in _ && t(1, o = _.style), "showPlaceType" in _ && t(2, d = _.showPlaceType), "missingIconsCache" in _ && t(11, c = _.missingIconsCache), "iconsBaseUrl" in _ && t(3, f = _.iconsBaseUrl);
  }, i.$$.update = () => {
    var _, S, D, v, m;
    i.$$.dirty & /*feature*/
    1 && t(12, n = (_ = a.properties) == null ? void 0 : _.categories), i.$$.dirty & /*feature*/
    1 && t(8, r = a.place_type[0] === "reverse"), i.$$.dirty & /*feature*/
    1 && t(7, u = ((D = (S = a.properties) == null ? void 0 : S.categories) == null ? void 0 : D.join(", ")) ?? ((m = (v = a.properties) == null ? void 0 : v.place_type_name) == null ? void 0 : m[0]) ?? a.place_type[0]), i.$$.dirty & /*categories*/
    4096 && (p = (n == null ? void 0 : n.length) ?? 0, W());
  }, [
    a,
    o,
    d,
    f,
    b,
    E,
    g,
    u,
    r,
    L,
    k,
    c,
    n,
    K,
    C,
    M,
    w
  ];
}
class vn extends Ee {
  constructor(e) {
    super(), we(this, e, bn, hn, ye, {
      feature: 0,
      style: 1,
      showPlaceType: 2,
      missingIconsCache: 11,
      iconsBaseUrl: 3
    });
  }
}
function Ln(i) {
  let e;
  return {
    c() {
      e = z("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="loading-icon svelte-1ocfouu"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', l(e, "class", "svelte-1ocfouu");
    },
    m(t, n) {
      A(t, e, n);
    },
    p: G,
    i: G,
    o: G,
    d(t) {
      t && I(e);
    }
  };
}
class _n extends Ee {
  constructor(e) {
    super(), we(this, e, null, Ln, ye, {});
  }
}
function yn(i) {
  let e, t;
  return {
    c() {
      e = ce("svg"), t = ce("path"), l(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), l(e, "viewBox", "0 0 60.006 21.412"), l(e, "width", "14"), l(e, "height", "20"), l(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      A(n, e, r), N(e, t);
    },
    p: G,
    i: G,
    o: G,
    d(n) {
      n && I(e);
    }
  };
}
class wn extends Ee {
  constructor(e) {
    super(), we(this, e, null, yn, ye, {});
  }
}
function En(i) {
  let e, t, n;
  return {
    c() {
      e = ce("svg"), t = ce("circle"), n = ce("path"), l(t, "cx", "4.789"), l(t, "cy", "4.787"), l(t, "r", "3.85"), l(t, "class", "svelte-1aq105l"), l(n, "d", "M12.063 12.063 7.635 7.635"), l(n, "class", "svelte-1aq105l"), l(e, "xmlns", "http://www.w3.org/2000/svg"), l(e, "width", "13"), l(e, "height", "13"), l(e, "viewBox", "0 0 13 13"), l(e, "class", "svelte-1aq105l");
    },
    m(r, u) {
      A(r, e, u), N(e, t), N(e, n);
    },
    p: G,
    i: G,
    o: G,
    d(r) {
      r && I(e);
    }
  };
}
class Sn extends Ee {
  constructor(e) {
    super(), we(this, e, null, En, ye, {});
  }
}
function pn(i, e, t) {
  const n = e[1], r = e[0], u = n - r;
  return i === n && t ? i : ((i - r) % u + u) % u + r;
}
function Bt(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let De;
async function kn(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (De && r.cachedLocationExpiry && De.time + r.cachedLocationExpiry > Date.now()) {
          if (!De.coords)
            break e;
          return De.coords;
        }
        let u;
        try {
          return u = await new Promise((a, o) => {
            t.signal.addEventListener("abort", () => {
              o(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (d) => {
                a(
                  [d.coords.longitude, d.coords.latitude].map((c) => c.toFixed(6)).join(",")
                );
              },
              (d) => {
                o(d);
              },
              r
            );
          }), u;
        } catch {
        } finally {
          r.cachedLocationExpiry && (De = {
            time: Date.now(),
            coords: u
          });
        }
        if (t.signal.aborted)
          return;
      }
      if (r.type === "server-geolocation")
        return "ip";
      if (n && r.type === "map-center")
        return n[1].toFixed(6) + "," + n[2].toFixed(6);
    }
}
const Tn = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, Ft = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, Gt = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, jt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Ht = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, Zt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Nn(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((E) => Number(E.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), u = Math.abs(n), a = t > 0 ? "N" : "S", o = n > 0 ? "E" : "W";
    let d;
    i == "DD" && (d = `${r}° ${a}, ${u}° ${o}`);
    const c = Math.floor(r), f = Math.floor(u), L = (r - c) * 60, b = (u - f) * 60;
    if (i == "DM") {
      let E = qt(L, 3).toFixed(3).padStart(6, "0"), g = qt(b, 3).toFixed(3).padStart(6, "0");
      E.endsWith(".000") && g.endsWith(".000") && (E = E.replace(/\.000$/, ""), g = g.replace(/\.000$/, "")), d = `${c}° ${E}' ${a}, ${f}° ${g}' ${o}`;
    }
    if (i == "DMS") {
      const E = Math.floor(L), g = Math.floor(b);
      let p = ((L - E) * 60).toFixed(1).padStart(4, "0"), U = ((b - g) * 60).toFixed(1).padStart(4, "0");
      const k = E.toString().padStart(2, "0"), W = g.toString().padStart(2, "0");
      p.endsWith(".0") && U.endsWith(".0") && (p = p.replace(/\.0$/, ""), U = U.replace(/\.0$/, "")), d = `${c}° ${k}' ${p}" ${a}, ${f}° ${W}' ${U}" ${o}`;
    }
    return d;
  } else
    throw new Error("no decimal coordinates to convert");
}
function qt(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function wt(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", u = "", a = null, o = [], d = !1;
  if (Tn.test(i))
    throw new Error("invalid coordinate value");
  if (Ft.test(i))
    if (o = Ft.exec(i), d = Ie(o), d)
      t = Math.abs(o[1]) + o[2] / 60, Number(o[1]) < 0 && (t *= -1), n = Math.abs(o[3]) + o[4] / 60, Number(o[3]) < 0 && (n *= -1), a = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (Gt.test(i))
    if (o = Gt.exec(i), d = Ie(o), d) {
      if (t = o[2], n = o[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), a = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      o[1] ? (r = o[1], u = o[5]) : o[4] && (r = o[4], u = o[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (jt.test(i))
    if (o = jt.exec(i), d = Ie(o), d)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, a = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[9])), o[11] && (n += o[11] / 60), o[13] && (n += o[13].replace(",", ".") / 3600), parseInt(o[9]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[8]) : o[7] && (r = o[7], u = o[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Ht.test(i))
    if (o = Ht.exec(i), d = Ie(o), d)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, a = "DM"), o[6] && (t += o[6] / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12] / 60), o[14] && (n += o[14] / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[9]) : o[8] && (r = o[8], u = o[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Zt.test(i)) {
    if (o = Zt.exec(i), d = Ie(o), o.filter((c) => c).length <= 5)
      throw new Error("invalid coordinates format");
    if (d)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4].replace(",", ".") / 60, a = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12].replace(",", ".") / 60), o[14] && (n += o[14].replace(",", ".") / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[9]) : o[8] && (r = o[8], u = o[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (d) {
    if (Math.abs(n) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if (r && !u || !r && u)
      throw new Error("invalid coordinates value");
    if (r && r == u)
      throw new Error("invalid coordinates format");
    t.toString().includes(",") && (t = t.replace(",", ".")), n.toString().includes(",") && (n = n.replace(",", "."));
    let c = /S|SOUTH/i;
    c.test(r) && t > 0 && (t = -1 * t), c = /W|WEST/i, c.test(u) && n > 0 && (n = -1 * n);
    const f = o[0].trim();
    let L, b;
    const E = /[,/;\u0020]/g, g = f.match(E);
    if (g == null) {
      const k = Math.floor(i.length / 2);
      L = f.substring(0, k).trim(), b = f.substring(k).trim();
    } else {
      let k;
      g.length % 2 == 1 ? k = Math.floor(g.length / 2) : k = g.length / 2 - 1;
      let W = 0;
      if (k == 0)
        W = f.indexOf(g[0]), L = f.substring(0, W).trim(), b = f.substring(W + 1).trim();
      else {
        let B = 0, K = 0;
        for (; B <= k; )
          W = f.indexOf(g[B], K), K = W + 1, B++;
        L = f.substring(0, W).trim(), b = f.substring(W + 1).trim();
      }
    }
    const p = L.split(".");
    if (p.length == 2 && p[1] == 0 && p[1].length != 2)
      throw new Error("invalid coordinates format");
    const U = b.split(".");
    if (U.length == 2 && U[1] == 0 && U[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(L) || /^\d+$/.test(b))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), n = Number(Number(n).toFixed(e)), Object.freeze({
      verbatimCoordinates: f,
      verbatimLatitude: L,
      verbatimLongitude: b,
      decimalLatitude: t,
      decimalLongitude: n,
      decimalCoordinates: `${t},${n}`,
      originalFormat: a,
      closeEnough: Mn,
      toCoordinateFormat: Nn
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Ie(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let u = 0; u < r; u++) {
    const a = e[u], o = e[u + r], d = t.test(a) && t.test(o), c = n.test(a) && n.test(o), f = a == o;
    if (!(a == null && o == null)) {
      if (a == null || o == null)
        return !1;
      if (d || c || f)
        continue;
      return !1;
    }
  }
  return !0;
}
function Qt(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Mn(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return Qt(this.decimalLatitude, Number(e[0])) && Qt(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Cn = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
wt.to = Cn;
const Wn = [
  {
    verbatimCoordinates: "40.123, -74.123",
    verbatimLatitude: "40.123",
    verbatimLongitude: "-74.123"
  },
  {
    verbatimCoordinates: "40.123° N 74.123° W",
    verbatimLatitude: "40.123° N",
    verbatimLongitude: "74.123° W"
  },
  {
    verbatimCoordinates: "40.123° N 74.123° W",
    verbatimLatitude: "40.123° N",
    verbatimLongitude: "74.123° W"
  },
  {
    verbatimCoordinates: '40° 7´ 22.8" N 74° 7´ 22.8" W',
    verbatimLatitude: '40° 7´ 22.8" N',
    verbatimLongitude: '74° 7´ 22.8" W'
  },
  {
    verbatimCoordinates: "40° 7.38’ , -74° 7.38’",
    verbatimLatitude: "40° 7.38’",
    verbatimLongitude: "-74° 7.38’"
  },
  {
    verbatimCoordinates: "N40°7’22.8’’, W74°7’22.8’’",
    verbatimLatitude: "N40°7’22.8’’",
    verbatimLongitude: "W74°7’22.8’’"
  },
  {
    verbatimCoordinates: '40°7’22.8"N, 74°7’22.8"W',
    verbatimLatitude: '40°7’22.8"N',
    verbatimLongitude: '74°7’22.8"W'
  },
  {
    verbatimCoordinates: `40°7'22.8"N, 74°7'22.8"W`,
    verbatimLatitude: `40°7'22.8"N`,
    verbatimLongitude: `74°7'22.8"W`
  },
  {
    verbatimCoordinates: "40 7 22.8, -74 7 22.8",
    verbatimLatitude: "40 7 22.8",
    verbatimLongitude: "-74 7 22.8"
  },
  {
    verbatimCoordinates: "40.123 -74.123",
    verbatimLatitude: "40.123",
    verbatimLongitude: "-74.123"
  },
  {
    verbatimCoordinates: "40.123°,-74.123°",
    verbatimLatitude: "40.123°",
    verbatimLongitude: "-74.123°"
  },
  {
    verbatimCoordinates: "40.123N74.123W",
    verbatimLatitude: "40.123N",
    verbatimLongitude: "74.123W"
  },
  {
    verbatimCoordinates: "4007.38N7407.38W",
    verbatimLatitude: "4007.38N",
    verbatimLongitude: "7407.38W"
  },
  {
    verbatimCoordinates: '40°7’22.8"N, 74°7’22.8"W',
    verbatimLatitude: '40°7’22.8"N',
    verbatimLongitude: '74°7’22.8"W'
  },
  {
    verbatimCoordinates: "400722.8N740722.8W",
    verbatimLatitude: "400722.8N",
    verbatimLongitude: "740722.8W"
  },
  {
    verbatimCoordinates: "N 40 7.38 W 74 7.38",
    verbatimLatitude: "N 40 7.38",
    verbatimLongitude: "W 74 7.38"
  },
  {
    verbatimCoordinates: "40:7:22.8N 74:7:22.8W",
    verbatimLatitude: "40:7:22.8N",
    verbatimLongitude: "74:7:22.8W"
  },
  {
    verbatimCoordinates: "40:7:23N,74:7:23W",
    verbatimLatitude: "40:7:23N",
    verbatimLongitude: "74:7:23W",
    decimalLatitude: 40.1230555555,
    decimalLongitude: -74.1230555555
  },
  {
    verbatimCoordinates: '40°7’23"N 74°7’23"W',
    verbatimLatitude: '40°7’23"N',
    verbatimLongitude: '74°7’23"W',
    decimalLatitude: 40.1230555555,
    decimalLongitude: -74.12305555555555
  },
  {
    verbatimCoordinates: '40°7’23"S 74°7’23"E',
    verbatimLatitude: '40°7’23"S',
    verbatimLongitude: '74°7’23"E',
    decimalLatitude: -40.1230555555,
    decimalLongitude: 74.12305555555555
  },
  {
    verbatimCoordinates: '40°7’23" -74°7’23"',
    verbatimLatitude: '40°7’23"',
    verbatimLongitude: '-74°7’23"',
    decimalLatitude: 40.1230555555,
    decimalLongitude: -74.123055555
  },
  {
    verbatimCoordinates: '40d 7’ 23" N 74d 7’ 23" W',
    verbatimLatitude: '40d 7’ 23" N',
    verbatimLongitude: '74d 7’ 23" W',
    decimalLatitude: 40.1230555555,
    decimalLongitude: -74.123055555
  },
  {
    verbatimCoordinates: "40.123N 74.123W",
    verbatimLatitude: "40.123N",
    verbatimLongitude: "74.123W"
  },
  {
    verbatimCoordinates: "40° 7.38, -74° 7.38",
    verbatimLatitude: "40° 7.38",
    verbatimLongitude: "-74° 7.38"
  },
  {
    verbatimCoordinates: "40° 7.38, -74° 7.38",
    verbatimLatitude: "40° 7.38",
    verbatimLongitude: "-74° 7.38"
  },
  {
    verbatimCoordinates: "40 7 22.8; -74 7 22.8",
    verbatimLatitude: "40 7 22.8",
    verbatimLongitude: "-74 7 22.8"
  }
], On = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, Rn = [
  {
    verbatimCoordinates: `50°4'17.698"south, 14°24'2.826"east`,
    verbatimLatitude: `50°4'17.698"south`,
    verbatimLongitude: `14°24'2.826"east`,
    decimalLatitude: -50.07158277777778,
    decimalLongitude: 14.400785
  },
  {
    verbatimCoordinates: "50d4m17.698S 14d24m2.826E",
    verbatimLatitude: "50d4m17.698S",
    verbatimLongitude: "14d24m2.826E",
    decimalLatitude: -50.07158277777778,
    decimalLongitude: 14.400785
  },
  {
    verbatimCoordinates: "40:26:46N,79:56:55W",
    verbatimLatitude: "40:26:46N",
    verbatimLongitude: "79:56:55W",
    decimalLatitude: 40.44611111111111,
    decimalLongitude: -79.9486111111111
  },
  {
    verbatimCoordinates: "40:26:46.302N 79:56:55.903W",
    verbatimLatitude: "40:26:46.302N",
    verbatimLongitude: "79:56:55.903W",
    decimalLatitude: 40.446195,
    decimalLongitude: -79.94886194444445
  },
  {
    verbatimCoordinates: "40°26′47″N 79°58′36″W",
    verbatimLatitude: "40°26′47″N",
    verbatimLongitude: "79°58′36″W",
    decimalLatitude: 40.44638888888889,
    decimalLongitude: -79.97666666666667
  },
  {
    verbatimCoordinates: "40d 26′ 47″ N 79d 58′ 36″ W",
    verbatimLatitude: "40d 26′ 47″ N",
    verbatimLongitude: "79d 58′ 36″ W",
    decimalLatitude: 40.44638888888889,
    decimalLongitude: -79.97666666666667
  },
  {
    verbatimCoordinates: "40.446195N 79.948862W",
    verbatimLatitude: "40.446195N",
    verbatimLongitude: "79.948862W",
    decimalLatitude: 40.446195,
    decimalLongitude: -79.948862
  },
  {
    verbatimCoordinates: "40,446195° 79,948862°",
    verbatimLatitude: "40,446195°",
    verbatimLongitude: "79,948862°",
    decimalLatitude: 40.446195,
    decimalLongitude: 79.948862
  },
  {
    verbatimCoordinates: "40° 26.7717, -79° 56.93172",
    verbatimLatitude: "40° 26.7717",
    verbatimLongitude: "-79° 56.93172",
    decimalLatitude: 40.446195,
    decimalLongitude: -79.948862
  },
  {
    verbatimCoordinates: "40.446195, -79.948862",
    verbatimLatitude: "40.446195",
    verbatimLongitude: "-79.948862",
    decimalLatitude: 40.446195,
    decimalLongitude: -79.948862
  },
  {
    verbatimCoordinates: "40.123256; -74.123256",
    verbatimLatitude: "40.123256",
    verbatimLongitude: "-74.123256",
    decimalLatitude: 40.123256,
    decimalLongitude: -74.123256
  },
  {
    verbatimCoordinates: "18°24S 22°45E",
    verbatimLatitude: "18°24S",
    verbatimLongitude: "22°45E",
    decimalLatitude: -18.4,
    decimalLongitude: 22.75
  }
], zn = [
  {
    verbatimCoordinates: "10.432342S 10.6345345E",
    verbatimLatitude: "10.432342S",
    verbatimLongitude: "10.6345345E",
    decimalLatitude: -10.432342,
    decimalLongitude: 10.6345345
  },
  {
    verbatimCoordinates: "10.00S 10.00E",
    verbatimLatitude: "10.00S",
    verbatimLongitude: "10.00E",
    decimalLatitude: -10,
    decimalLongitude: 10
  },
  {
    verbatimCoordinates: "00.00S 01.00E",
    verbatimLatitude: "00.00S",
    verbatimLongitude: "01.00E",
    decimalLatitude: 0,
    decimalLongitude: 1
  },
  {
    verbatimCoordinates: "18.24S 22.45E",
    verbatimLatitude: "18.24S",
    verbatimLongitude: "22.45E",
    decimalLatitude: -18.4,
    decimalLongitude: 22.75
  },
  {
    verbatimCoordinates: "27deg 15min 45.2sec S 18deg 32min 53.7sec E",
    verbatimLatitude: "27deg 15min 45.2sec S",
    verbatimLongitude: "18deg 32min 53.7sec E",
    decimalLatitude: -27.262555555555554,
    decimalLongitude: 18.54825
  },
  {
    verbatimCoordinates: "-23.3245° S / 28.2344° E",
    verbatimLatitude: "-23.3245° S",
    verbatimLongitude: "28.2344° E",
    decimalLatitude: -23.3245,
    decimalLongitude: 28.2344
  },
  {
    verbatimCoordinates: "40° 26.7717 -79° 56.93172",
    verbatimLatitude: "40° 26.7717",
    verbatimLongitude: "-79° 56.93172",
    decimalLatitude: 40.446195,
    decimalLongitude: -79.948862
  },
  {
    verbatimCoordinates: "27.15.45S 18.32.53E",
    verbatimLatitude: "27.15.45S",
    verbatimLongitude: "18.32.53E",
    decimalLatitude: -27.2625,
    decimalLongitude: 18.548055
  },
  {
    verbatimCoordinates: "-27.15.45 18.32.53",
    verbatimLatitude: "-27.15.45",
    verbatimLongitude: "18.32.53",
    decimalLatitude: -27.2625,
    decimalLongitude: 18.548055
  },
  {
    verbatimCoordinates: "27.15.45.2S 18.32.53.4E",
    verbatimLatitude: "27.15.45.2S",
    verbatimLongitude: "18.32.53.4E",
    decimalLatitude: -27.262556,
    decimalLongitude: 18.548167
  },
  {
    verbatimCoordinates: "27.15.45,2S 18.32.53,4E",
    verbatimLatitude: "27.15.45,2S",
    verbatimLongitude: "18.32.53,4E",
    decimalLatitude: -27.262556,
    decimalLongitude: 18.548167
  },
  {
    verbatimCoordinates: "S23.43563 °  E22.45634 °",
    verbatimLatitude: "S23.43563 °",
    verbatimLongitude: "E22.45634 °",
    decimalLatitude: -23.43563,
    decimalLongitude: 22.45634
  },
  {
    verbatimCoordinates: "27,71372° S 23,07771° E",
    verbatimLatitude: "27,71372° S",
    verbatimLongitude: "23,07771° E",
    decimalLatitude: -27.71372,
    decimalLongitude: 23.07771
  },
  {
    verbatimCoordinates: "27.45.34 S 23.23.23 E",
    verbatimLatitude: "27.45.34 S",
    verbatimLongitude: "23.23.23 E",
    decimalLatitude: -27.759444,
    decimalLongitude: 23.38972222
  },
  {
    verbatimCoordinates: "S 27.45.34 E 23.23.23",
    verbatimLatitude: "S 27.45.34",
    verbatimLongitude: "E 23.23.23",
    decimalLatitude: -27.759444,
    decimalLongitude: 23.38972222
  },
  {
    verbatimCoordinates: "53 16.3863,4 52.8171",
    verbatimLatitude: "53 16.3863",
    verbatimLongitude: "4 52.8171",
    decimalLatitude: 53.273105,
    decimalLongitude: 4.88029
  },
  {
    verbatimCoordinates: "50 8.2914,-5 2.4447",
    verbatimLatitude: "50 8.2914",
    verbatimLongitude: "-5 2.4447",
    decimalLatitude: 50.13819,
    decimalLongitude: -5.040745
  },
  {
    verbatimCoordinates: "N 48° 30,6410', E 18° 57,4583'",
    verbatimLatitude: "N 48° 30,6410'",
    verbatimLongitude: "E 18° 57,4583'",
    decimalLatitude: 48.51068,
    decimalLongitude: 18.95764
  },
  {
    verbatimCoordinates: "1.23456, 18.33453",
    verbatimLatitude: "1.23456",
    verbatimLongitude: "18.33453",
    decimalLatitude: 1.23456,
    decimalLongitude: 18.33453
  }
];
function Un() {
  const i = [];
  return Wn.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...On });
  }), [...i, ...Rn, ...zn];
}
const Dn = Un();
wt.formats = Dn.map((i) => i.verbatimCoordinates);
const In = wt;
function Kt(i, e, t) {
  const n = i.slice();
  return n[97] = e[t], n[99] = t, n;
}
function Vt(i) {
  let e, t, n, r, u;
  return t = new si({}), {
    c() {
      e = z("button"), ve(t.$$.fragment), l(e, "type", "button"), l(
        e,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), l(e, "class", "svelte-bz0zu3");
    },
    m(a, o) {
      A(a, e, o), de(t, e, null), n = !0, r || (u = Q(
        e,
        "click",
        /*click_handler_2*/
        i[78]
      ), r = !0);
    },
    p(a, o) {
      (!n || o[0] & /*clearButtonTitle*/
      8) && l(
        e,
        "title",
        /*clearButtonTitle*/
        a[3]
      );
    },
    i(a) {
      n || (P(t.$$.fragment, a), n = !0);
    },
    o(a) {
      q(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && I(e), fe(t), r = !1, u();
    }
  };
}
function Yt(i) {
  let e, t;
  return e = new _n({}), {
    c() {
      ve(e.$$.fragment);
    },
    m(n, r) {
      de(e, n, r), t = !0;
    },
    i(n) {
      t || (P(e.$$.fragment, n), t = !0);
    },
    o(n) {
      q(e.$$.fragment, n), t = !1;
    },
    d(n) {
      fe(e, n);
    }
  };
}
function Xt(i) {
  let e, t, n, r, u;
  return t = new wn({}), {
    c() {
      e = z("button"), ve(t.$$.fragment), l(e, "type", "button"), l(
        e,
        "title",
        /*reverseButtonTitle*/
        i[10]
      ), l(e, "class", "svelte-bz0zu3"), Ce(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(a, o) {
      A(a, e, o), de(t, e, null), n = !0, r || (u = Q(
        e,
        "click",
        /*click_handler_3*/
        i[79]
      ), r = !0);
    },
    p(a, o) {
      (!n || o[0] & /*reverseButtonTitle*/
      1024) && l(
        e,
        "title",
        /*reverseButtonTitle*/
        a[10]
      ), (!n || o[0] & /*reverseActive*/
      1) && Ce(
        e,
        "active",
        /*reverseActive*/
        a[0]
      );
    },
    i(a) {
      n || (P(t.$$.fragment, a), n = !0);
    },
    o(a) {
      q(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && I(e), fe(t), r = !1, u();
    }
  };
}
function An(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, u, a, o = At(
    /*listFeatures*/
    i[13]
  );
  const d = (c) => (
    /*feature*/
    c[97].id + /*feature*/
    (c[97].address ? "," + /*feature*/
    c[97].address : "")
  );
  for (let c = 0; c < o.length; c += 1) {
    let f = Kt(i, o, c), L = d(f);
    n.set(L, t[c] = Jt(L, f));
  }
  return {
    c() {
      e = z("ul");
      for (let c = 0; c < t.length; c += 1)
        t[c].c();
      l(e, "class", "options svelte-bz0zu3"), l(e, "role", "listbox");
    },
    m(c, f) {
      A(c, e, f);
      for (let L = 0; L < t.length; L += 1)
        t[L] && t[L].m(e, null);
      r = !0, u || (a = [
        Q(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          i[27]
        ),
        Q(
          e,
          "blur",
          /*blur_handler_1*/
          i[83]
        ),
        Q(
          e,
          "keydown",
          /*handleKeyDown*/
          i[23]
        )
      ], u = !0);
    },
    p(c, f) {
      f[0] & /*listFeatures, showPlaceType, selectedItemIndex, picked, missingIconsCache, iconsBaseUrl, handleMouseEnter, pick*/
      102823936 && (o = At(
        /*listFeatures*/
        c[13]
      ), Ae(), t = en(t, f, d, 1, c, o, n, e, $i, Jt, null, Kt), Pe());
    },
    i(c) {
      if (!r) {
        for (let f = 0; f < o.length; f += 1)
          P(t[f]);
        r = !0;
      }
    },
    o(c) {
      for (let f = 0; f < t.length; f += 1)
        q(t[f]);
      r = !1;
    },
    d(c) {
      c && I(e);
      for (let f = 0; f < t.length; f += 1)
        t[f].d();
      u = !1, me(a);
    }
  };
}
function Pn(i) {
  let e, t, n, r, u, a;
  return t = new li({}), {
    c() {
      e = z("div"), ve(t.$$.fragment), n = $(), r = z("div"), u = be(
        /*noResultsMessage*/
        i[8]
      ), l(r, "class", "svelte-bz0zu3"), l(e, "class", "no-results svelte-bz0zu3");
    },
    m(o, d) {
      A(o, e, d), de(t, e, null), N(e, n), N(e, r), N(r, u), a = !0;
    },
    p(o, d) {
      (!a || d[0] & /*noResultsMessage*/
      256) && Fe(
        u,
        /*noResultsMessage*/
        o[8]
      );
    },
    i(o) {
      a || (P(t.$$.fragment, o), a = !0);
    },
    o(o) {
      q(t.$$.fragment, o), a = !1;
    },
    d(o) {
      o && I(e), fe(t);
    }
  };
}
function Bn(i) {
  let e = "", t;
  return {
    c() {
      t = be(e);
    },
    m(n, r) {
      A(n, t, r);
    },
    p: G,
    i: G,
    o: G,
    d(n) {
      n && I(t);
    }
  };
}
function Fn(i) {
  let e, t, n, r, u, a, o, d, c, f, L;
  return t = new li({}), d = new si({}), {
    c() {
      e = z("div"), ve(t.$$.fragment), n = $(), r = z("div"), u = be(
        /*errorMessage*/
        i[7]
      ), a = $(), o = z("button"), ve(d.$$.fragment), l(r, "class", "svelte-bz0zu3"), l(o, "class", "svelte-bz0zu3"), l(e, "class", "error svelte-bz0zu3");
    },
    m(b, E) {
      A(b, e, E), de(t, e, null), N(e, n), N(e, r), N(r, u), N(e, a), N(e, o), de(d, o, null), c = !0, f || (L = Q(
        o,
        "click",
        /*click_handler_4*/
        i[80]
      ), f = !0);
    },
    p(b, E) {
      (!c || E[0] & /*errorMessage*/
      128) && Fe(
        u,
        /*errorMessage*/
        b[7]
      );
    },
    i(b) {
      c || (P(t.$$.fragment, b), P(d.$$.fragment, b), c = !0);
    },
    o(b) {
      q(t.$$.fragment, b), q(d.$$.fragment, b), c = !1;
    },
    d(b) {
      b && I(e), fe(t), fe(d), f = !1, L();
    }
  };
}
function Jt(i, e) {
  var o;
  let t, n, r;
  function u() {
    return (
      /*mouseenter_handler*/
      e[81](
        /*i*/
        e[99]
      )
    );
  }
  function a() {
    return (
      /*select_handler*/
      e[82](
        /*feature*/
        e[97]
      )
    );
  }
  return n = new vn({
    props: {
      feature: (
        /*feature*/
        e[97]
      ),
      showPlaceType: (
        /*showPlaceType*/
        e[11]
      ),
      style: (
        /*selectedItemIndex*/
        e[15] === /*i*/
        e[99] ? "selected" : (
          /*picked*/
          ((o = e[14]) == null ? void 0 : o.id) === /*feature*/
          e[97].id ? "picked" : "default"
        )
      ),
      missingIconsCache: (
        /*missingIconsCache*/
        e[21]
      ),
      iconsBaseUrl: (
        /*iconsBaseUrl*/
        e[12]
      )
    }
  }), n.$on("mouseenter", u), n.$on("select", a), {
    key: i,
    first: null,
    c() {
      t = Hi(), ve(n.$$.fragment), this.first = t;
    },
    m(d, c) {
      A(d, t, c), de(n, d, c), r = !0;
    },
    p(d, c) {
      var L;
      e = d;
      const f = {};
      c[0] & /*listFeatures*/
      8192 && (f.feature = /*feature*/
      e[97]), c[0] & /*showPlaceType*/
      2048 && (f.showPlaceType = /*showPlaceType*/
      e[11]), c[0] & /*selectedItemIndex, listFeatures, picked*/
      57344 && (f.style = /*selectedItemIndex*/
      e[15] === /*i*/
      e[99] ? "selected" : (
        /*picked*/
        ((L = e[14]) == null ? void 0 : L.id) === /*feature*/
        e[97].id ? "picked" : "default"
      )), c[0] & /*iconsBaseUrl*/
      4096 && (f.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(f);
    },
    i(d) {
      r || (P(n.$$.fragment, d), r = !0);
    },
    o(d) {
      q(n.$$.fragment, d), r = !1;
    },
    d(d) {
      d && I(t), fe(n, d);
    }
  };
}
function Gn(i) {
  let e, t, n, r, u, a, o, d, c, f, L, b, E, g, p, U, k, W, B, K = !1;
  u = new Sn({});
  let C = !/*abortController*/
  i[20] && Vt(i), M = (
    /*abortController*/
    i[20] && Yt()
  ), w = (
    /*enableReverse*/
    i[6] === "button" && Xt(i)
  );
  const _ = (
    /*#slots*/
    i[70].default
  ), S = Bi(
    _,
    i,
    /*$$scope*/
    i[69],
    null
  ), D = [Fn, Bn, Pn, An], v = [];
  function m(y, j) {
    var le, Se;
    return (
      /*error*/
      y[19] ? 0 : !/*focusedDelayed*/
      y[16] && !/*keepListOpen*/
      y[4] ? 1 : (
        /*listFeatures*/
        ((le = y[13]) == null ? void 0 : le.length) === 0 ? 2 : (
          /*listFeatures*/
          (Se = y[13]) != null && Se.length && /*focusedDelayed*/
          (y[16] || /*keepListOpen*/
          y[4]) ? 3 : -1
        )
      )
    );
  }
  return ~(g = m(i)) && (p = v[g] = D[g](i)), {
    c() {
      e = $(), t = z("form"), n = z("div"), r = z("button"), ve(u.$$.fragment), a = $(), o = z("input"), d = $(), c = z("div"), C && C.c(), f = $(), M && M.c(), L = $(), w && w.c(), b = $(), S && S.c(), E = $(), p && p.c(), l(r, "class", "search-button svelte-bz0zu3"), l(r, "type", "button"), l(
        o,
        "placeholder",
        /*placeholder*/
        i[9]
      ), l(
        o,
        "aria-label",
        /*placeholder*/
        i[9]
      ), l(o, "class", "svelte-bz0zu3"), l(c, "class", "clear-button-container svelte-bz0zu3"), Ce(
        c,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), l(n, "class", "input-group svelte-bz0zu3"), l(t, "class", U = et(
        /*className*/
        i[2]
      ) + " svelte-bz0zu3"), Ce(
        t,
        "can-collapse",
        /*collapsed*/
        i[5] && /*searchValue*/
        i[1] === ""
      );
    },
    m(y, j) {
      A(y, e, j), A(y, t, j), N(t, n), N(n, r), de(u, r, null), N(n, a), N(n, o), i[72](o), Dt(
        o,
        /*searchValue*/
        i[1]
      ), N(n, d), N(n, c), C && C.m(c, null), N(c, f), M && M.m(c, null), N(n, L), w && w.m(n, null), N(n, b), S && S.m(n, null), N(t, E), ~g && v[g].m(t, null), k = !0, W || (B = [
        Q(
          r,
          "click",
          /*click_handler*/
          i[71]
        ),
        Q(
          o,
          "input",
          /*input_1_input_handler*/
          i[73]
        ),
        Q(
          o,
          "focus",
          /*focus_handler*/
          i[74]
        ),
        Q(
          o,
          "blur",
          /*blur_handler*/
          i[75]
        ),
        Q(
          o,
          "click",
          /*click_handler_1*/
          i[76]
        ),
        Q(
          o,
          "keydown",
          /*handleKeyDown*/
          i[23]
        ),
        Q(
          o,
          "input",
          /*handleInput*/
          i[24]
        ),
        Q(
          o,
          "change",
          /*change_handler*/
          i[77]
        ),
        Q(t, "submit", Zi(
          /*handleSubmit*/
          i[22]
        ))
      ], W = !0);
    },
    p(y, j) {
      (!k || j[0] & /*placeholder*/
      512) && l(
        o,
        "placeholder",
        /*placeholder*/
        y[9]
      ), (!k || j[0] & /*placeholder*/
      512) && l(
        o,
        "aria-label",
        /*placeholder*/
        y[9]
      ), j[0] & /*searchValue*/
      2 && o.value !== /*searchValue*/
      y[1] && Dt(
        o,
        /*searchValue*/
        y[1]
      ), /*abortController*/
      y[20] ? C && (Ae(), q(C, 1, 1, () => {
        C = null;
      }), Pe()) : C ? (C.p(y, j), j[0] & /*abortController*/
      1048576 && P(C, 1)) : (C = Vt(y), C.c(), P(C, 1), C.m(c, f)), /*abortController*/
      y[20] ? M ? j[0] & /*abortController*/
      1048576 && P(M, 1) : (M = Yt(), M.c(), P(M, 1), M.m(c, null)) : M && (Ae(), q(M, 1, 1, () => {
        M = null;
      }), Pe()), (!k || j[0] & /*searchValue*/
      2) && Ce(
        c,
        "displayable",
        /*searchValue*/
        y[1] !== ""
      ), /*enableReverse*/
      y[6] === "button" ? w ? (w.p(y, j), j[0] & /*enableReverse*/
      64 && P(w, 1)) : (w = Xt(y), w.c(), P(w, 1), w.m(n, b)) : w && (Ae(), q(w, 1, 1, () => {
        w = null;
      }), Pe()), S && S.p && (!k || j[2] & /*$$scope*/
      128) && Gi(
        S,
        _,
        y,
        /*$$scope*/
        y[69],
        k ? Fi(
          _,
          /*$$scope*/
          y[69],
          j,
          null
        ) : ji(
          /*$$scope*/
          y[69]
        ),
        null
      );
      let le = g;
      g = m(y), g === le ? ~g && v[g].p(y, j) : (p && (Ae(), q(v[le], 1, 1, () => {
        v[le] = null;
      }), Pe()), ~g ? (p = v[g], p ? p.p(y, j) : (p = v[g] = D[g](y), p.c()), P(p, 1), p.m(t, null)) : p = null), (!k || j[0] & /*className*/
      4 && U !== (U = et(
        /*className*/
        y[2]
      ) + " svelte-bz0zu3")) && l(t, "class", U), (!k || j[0] & /*className, collapsed, searchValue*/
      38) && Ce(
        t,
        "can-collapse",
        /*collapsed*/
        y[5] && /*searchValue*/
        y[1] === ""
      );
    },
    i(y) {
      k || (P(K), P(u.$$.fragment, y), P(C), P(M), P(w), P(S, y), P(p), k = !0);
    },
    o(y) {
      q(K), q(u.$$.fragment, y), q(C), q(M), q(w), q(S, y), q(p), k = !1;
    },
    d(y) {
      y && (I(e), I(t)), fe(u), i[72](null), C && C.d(), M && M.d(), w && w.d(), S && S.d(y), ~g && v[g].d(), W = !1, me(B);
    }
  };
}
function jn(i, e, t) {
  let n, r, u, { $$slots: a = {}, $$scope: o } = e;
  const d = {
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
    "poi.aerodrome": 13
  };
  let { class: c = void 0 } = e, { apiKey: f = void 0 } = e, { bbox: L = void 0 } = e, { clearButtonTitle: b = "clear" } = e, { clearOnBlur: E = !1 } = e, { clearListOnPick: g = !1 } = e, { keepListOpen: p = !1 } = e, { collapsed: U = !1 } = e, { country: k = void 0 } = e, { debounceSearch: W = 200 } = e, { enableReverse: B = "never" } = e, { errorMessage: K = "Something went wrong…" } = e, { filter: C = () => !0 } = e, { flyTo: M = !0 } = e, { fuzzyMatch: w = !0 } = e, { language: _ = void 0 } = e, { limit: S = void 0 } = e;
  const D = 41415112612;
  let { reverseGeocodingLimit: v = D } = e, { mapController: m = void 0 } = e, { minLength: y = 2 } = e, { noResultsMessage: j = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: le = "Search" } = e, { proximity: Se = [{ type: "server-geolocation" }] } = e, { reverseActive: ae = B === "always" } = e, { reverseButtonTitle: Et = "toggle reverse geocoding" } = e, { searchValue: V = "" } = e, { pickedResultStyle: je = "full-geometry" } = e, { showPlaceType: St = "if-needed" } = e, { showResultsWhileTyping: He = !0 } = e, { selectFirst: pe = !0 } = e, { flyToSelected: Ze = !1 } = e, { markerOnSelected: qe = !0 } = e, { types: tt = void 0 } = e;
  const pt = [];
  let { reverseGeocodingTypes: Qe = pt } = e, { exhaustiveReverseGeocoding: it = !1 } = e, { excludeTypes: nt = !1 } = e;
  const kt = void 0;
  let { reverseGeocodingExcludeTypes: Ke = kt } = e, { zoom: Ve = d } = e, { apiUrl: rt = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: ot = {} } = e, { iconsBaseUrl: Tt = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.1.7/icons/" } = e, { adjustUrlQuery: st = () => {
  } } = e, { adjustUrl: lt = () => {
  } } = e;
  function ui(s) {
    ie.focus(s);
  }
  function ci() {
    ie.blur();
  }
  function Nt(s, F = !0, H = !1) {
    t(1, V = s), F ? (t(15, O = -1), Ct()) : (Wt(void 0, !H, H), setTimeout(() => {
      ie.focus(), ie.select();
    }));
  }
  function di() {
    t(13, T = void 0), t(14, h = void 0), t(15, O = -1);
  }
  function fi() {
    t(64, Z = []), t(14, h = void 0);
  }
  let T, Z, h, Mt = "", ie, O = -1, re, Ye = [], Le, ke, Te, at, ue = !1;
  const mi = /* @__PURE__ */ new Set(), ge = ri();
  Ki(() => {
    m && (m.setEventHandler(void 0), m.indicateReverse(!1), m.setSelectedMarker(-1), m.setFeatures(void 0, void 0, !1));
  });
  function Ct(s) {
    if (t(17, ue = !1), ke && (clearTimeout(ke), ke = void 0), O > -1 && T)
      t(14, h = T[O]), t(1, V = h.place_type[0] === "reverse" ? h.place_name : h.place_name.replace(/,.*/, "")), t(19, re = void 0), t(64, Z = void 0), t(15, O = -1);
    else if (V) {
      const F = s || !ut(V);
      ct(V, { exact: !0 }).then(() => {
        t(64, Z = T), t(14, h = void 0), F && gi();
      }).catch((H) => t(19, re = H));
    }
  }
  function ut(s) {
    try {
      return In(s, 6);
    } catch {
      return !1;
    }
  }
  async function ct(s, { byId: F = !1, exact: H = !1 } = {}) {
    var x, oe, he;
    t(19, re = void 0), Le == null || Le.abort();
    const J = new AbortController();
    t(20, Le = J);
    try {
      const R = ut(s), Re = new URL(rt + "/" + encodeURIComponent(R ? R.decimalLongitude + "," + R.decimalLatitude : s) + ".json"), ee = Re.searchParams;
      _ !== void 0 && ee.set("language", Array.isArray(_) ? _.join(",") : _ ?? "");
      const [mt] = (m == null ? void 0 : m.getCenterAndZoom()) ?? [];
      let se = (x = !R || Qe === pt ? tt : Qe) == null ? void 0 : x.map((Y) => typeof Y == "string" ? Y : mt === void 0 || (Y[0] ?? 0) <= mt && mt < (Y[1] ?? 1 / 0) ? Y[2] : void 0).filter((Y) => Y !== void 0);
      se && (se = [...new Set(se)], ee.set("types", se.join(",")));
      const Rt = !R || Ke === kt ? nt : Ke;
      if (Rt && ee.set("excludeTypes", String(Rt)), L && ee.set("bbox", L.map((Y) => Y.toFixed(6)).join(",")), k && ee.set("country", Array.isArray(k) ? k.join(",") : k), !F && !R) {
        const Y = await kn(m, Se, J);
        Y && ee.set("proximity", Y), (H || !He) && ee.set("autocomplete", "false"), ee.set("fuzzyMatch", String(w));
      }
      const ze = v === D ? S : v;
      ze !== void 0 && ze > 1 && (se == null ? void 0 : se.length) !== 1 && console.warn("For reverse geocoding when limit > 1 then types must contain single value."), R ? (ze === 1 || ze !== void 0 && (it || (se == null ? void 0 : se.length) === 1)) && ee.set("limit", String(ze)) : S !== void 0 && ee.set("limit", String(S)), f && ee.set("key", f), st(ee), lt(Re);
      const Oi = Re.searchParams.get("types") === "" && Re.searchParams.get("excludeTypes") !== "true", Xe = Re.toString();
      if (Xe === Mt) {
        F ? (g && t(13, T = void 0), t(14, h = Ye[0])) : (t(13, T = Ye), ((oe = T[O]) == null ? void 0 : oe.id) !== (r == null ? void 0 : r.id) && t(15, O = -1));
        return;
      }
      Mt = Xe;
      let Ue;
      if (Oi)
        Ue = { type: "FeatureCollection", features: [] };
      else {
        const Y = await fetch(Xe, { signal: J.signal, ...ot });
        if (!Y.ok)
          throw new Error(await Y.text());
        Ue = await Y.json();
      }
      ge("response", { url: Xe, featureCollection: Ue }), F ? (g && t(13, T = void 0), t(14, h = Ue.features[0]), Ye = [h]) : (t(13, T = Ue.features.filter(C)), R && T.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + R.decimalLongitude + "_" + R.decimalLatitude,
        text: R.decimalLatitude + ", " + R.decimalLongitude,
        place_name: R.decimalLatitude + ", " + R.decimalLongitude,
        place_type: ["reverse"],
        center: [R.decimalLongitude, R.decimalLatitude],
        bbox: [
          R.decimalLongitude,
          R.decimalLatitude,
          R.decimalLongitude,
          R.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [R.decimalLongitude, R.decimalLatitude]
        }
      }), Ye = T, ((he = T[O]) == null ? void 0 : he.id) !== (r == null ? void 0 : r.id) && t(15, O = -1), R && ie.focus());
    } catch (R) {
      if (R && typeof R == "object" && "name" in R && R.name === "AbortError")
        return;
      throw R;
    } finally {
      J === Le && t(20, Le = void 0);
    }
  }
  function gi() {
    var J;
    if (!(Z != null && Z.length) || !M)
      return;
    const s = [180, 90, -180, -90], F = !Z.some((x) => !x.matching_text);
    let H;
    for (const x of Z) {
      const oe = Oe(x);
      if (H = H === void 0 ? oe : oe === void 0 ? H : Math.max(H, oe), F || !x.matching_text)
        for (const he of [0, 1, 2, 3])
          s[he] = Math[he < 2 ? "min" : "max"](s[he], ((J = x.bbox) == null ? void 0 : J[he]) ?? x.center[he % 2]);
    }
    m && Z.length > 0 && (h && s[0] === s[2] && s[1] === s[3] ? m.flyTo(h.center, Oe(h)) : m.fitBounds(Bt(s), 50, H));
  }
  function dt() {
    !h || !m || (!h.bbox || h.bbox[0] === h.bbox[2] && h.bbox[1] === h.bbox[3] ? m.flyTo(h.center, Oe(h)) : m.fitBounds(Bt(h.bbox), 50, Oe(h)));
  }
  function Oe(s) {
    var H;
    if (!s.bbox || s.bbox[0] !== s.bbox[2] && s.bbox[1] !== s.bbox[3])
      return;
    const F = s.id.replace(/\..*/, "");
    return (Array.isArray((H = s.properties) == null ? void 0 : H.categories) ? s.properties.categories.reduce(
      (J, x) => {
        const oe = Ve[F + "." + x];
        return J === void 0 ? oe : oe === void 0 ? J : Math.max(J, oe);
      },
      void 0
    ) : void 0) ?? Ve[F];
  }
  function hi(s) {
    t(0, ae = B === "always"), t(13, T = void 0), t(14, h = void 0), t(15, O = -1), Nt(s[1].toFixed(6) + ", " + pn(s[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function bi(s) {
    if (!T)
      return;
    let F = s.key === "ArrowDown" ? 1 : s.key === "ArrowUp" ? -1 : 0;
    F && (ie.focus(), t(17, ue = !0), s.preventDefault(), h && O === -1 && t(15, O = T.findIndex((H) => H.id === (h == null ? void 0 : h.id))), O === (h || pe ? 0 : -1) && F === -1 && t(15, O = T.length), t(15, O += F), O >= T.length && t(15, O = -1), O < 0 && (h || pe) && t(15, O = 0));
  }
  function Wt(s, F = !0, H = !1) {
    if (t(19, re = void 0), t(14, h = void 0), t(17, ue = !0), He || H) {
      if (ke && clearTimeout(ke), V.length < y)
        return;
      const J = V;
      ke = window.setTimeout(
        () => {
          ct(J).catch((x) => t(19, re = x));
        },
        F ? W : 0
      );
    } else
      t(13, T = void 0), t(19, re = void 0);
  }
  function ft(s) {
    h && (h == null ? void 0 : h.id) === (s == null ? void 0 : s.id) ? dt() : (t(14, h = s), t(1, V = s.place_name));
  }
  function Ot(s) {
    t(15, O = s);
  }
  function vi() {
    (!pe || h) && t(15, O = -1), Ze && dt();
  }
  const Li = () => ie.focus();
  function _i(s) {
    vt[s ? "unshift" : "push"](() => {
      ie = s, t(18, ie);
    });
  }
  function yi() {
    V = this.value, t(1, V), t(17, ue), t(31, E), t(16, Te);
  }
  const wi = () => t(17, ue = !0), Ei = () => t(17, ue = !1), Si = () => t(17, ue = !0), pi = () => t(14, h = void 0), ki = () => {
    t(1, V = ""), t(14, h = void 0), ie.focus();
  }, Ti = () => t(0, ae = !ae), Ni = () => t(19, re = void 0), Mi = (s) => Ot(s), Ci = (s) => ft(s), Wi = () => {
  };
  return i.$$set = (s) => {
    "class" in s && t(2, c = s.class), "apiKey" in s && t(29, f = s.apiKey), "bbox" in s && t(30, L = s.bbox), "clearButtonTitle" in s && t(3, b = s.clearButtonTitle), "clearOnBlur" in s && t(31, E = s.clearOnBlur), "clearListOnPick" in s && t(32, g = s.clearListOnPick), "keepListOpen" in s && t(4, p = s.keepListOpen), "collapsed" in s && t(5, U = s.collapsed), "country" in s && t(33, k = s.country), "debounceSearch" in s && t(34, W = s.debounceSearch), "enableReverse" in s && t(6, B = s.enableReverse), "errorMessage" in s && t(7, K = s.errorMessage), "filter" in s && t(35, C = s.filter), "flyTo" in s && t(36, M = s.flyTo), "fuzzyMatch" in s && t(37, w = s.fuzzyMatch), "language" in s && t(38, _ = s.language), "limit" in s && t(39, S = s.limit), "reverseGeocodingLimit" in s && t(40, v = s.reverseGeocodingLimit), "mapController" in s && t(41, m = s.mapController), "minLength" in s && t(42, y = s.minLength), "noResultsMessage" in s && t(8, j = s.noResultsMessage), "placeholder" in s && t(9, le = s.placeholder), "proximity" in s && t(43, Se = s.proximity), "reverseActive" in s && t(0, ae = s.reverseActive), "reverseButtonTitle" in s && t(10, Et = s.reverseButtonTitle), "searchValue" in s && t(1, V = s.searchValue), "pickedResultStyle" in s && t(44, je = s.pickedResultStyle), "showPlaceType" in s && t(11, St = s.showPlaceType), "showResultsWhileTyping" in s && t(45, He = s.showResultsWhileTyping), "selectFirst" in s && t(46, pe = s.selectFirst), "flyToSelected" in s && t(47, Ze = s.flyToSelected), "markerOnSelected" in s && t(48, qe = s.markerOnSelected), "types" in s && t(49, tt = s.types), "reverseGeocodingTypes" in s && t(50, Qe = s.reverseGeocodingTypes), "exhaustiveReverseGeocoding" in s && t(51, it = s.exhaustiveReverseGeocoding), "excludeTypes" in s && t(52, nt = s.excludeTypes), "reverseGeocodingExcludeTypes" in s && t(53, Ke = s.reverseGeocodingExcludeTypes), "zoom" in s && t(54, Ve = s.zoom), "apiUrl" in s && t(55, rt = s.apiUrl), "fetchParameters" in s && t(56, ot = s.fetchParameters), "iconsBaseUrl" in s && t(12, Tt = s.iconsBaseUrl), "adjustUrlQuery" in s && t(57, st = s.adjustUrlQuery), "adjustUrl" in s && t(58, lt = s.adjustUrl), "$$scope" in s && t(69, o = s.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    64 && t(0, ae = B === "always"), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && je !== "marker-only" && h && !h.address && h.geometry.type === "Point" && h.place_type[0] !== "reverse" && ct(h.id, { byId: !0 }).catch((s) => t(19, re = s)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, flyTo, clearListOnPick*/
    1058 | i.$$.dirty[2] & /*prevIdToFly*/
    8 && (m && h && h.id !== at && M && (dt(), g && t(13, T = void 0), t(64, Z = void 0), t(15, O = -1)), t(65, at = h == null ? void 0 : h.id)), i.$$.dirty[0] & /*focused, focusedDelayed*/
    196608 | i.$$.dirty[1] & /*clearOnBlur*/
    1 && setTimeout(() => {
      t(16, Te = ue), E && !Te && t(1, V = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    2048 && V.length < y && (t(13, T = void 0), t(19, re = void 0), t(64, Z = T)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex, picked*/
    57344 | i.$$.dirty[1] & /*selectFirst*/
    32768 && pe && T != null && T.length && O == -1 && !h && t(15, O = 0), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[2] & /*markedFeatures*/
    4 && Z !== T && t(64, Z = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    73729 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && m && m.setEventHandler((s) => {
      switch (s.type) {
        case "mapClick":
          ae && hi(s.coordinates);
          break;
        case "markerClick":
          {
            const F = T == null ? void 0 : T.find((H) => H.id === s.id);
            F && ft(F);
          }
          break;
        case "markerMouseEnter":
          Z && t(15, O = Te ? (T == null ? void 0 : T.findIndex((F) => F.id === s.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          Z && t(15, O = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    40960 && t(66, r = T == null ? void 0 : T[O]), i.$$.dirty[1] & /*mapController, flyTo, flyToSelected*/
    66592 | i.$$.dirty[2] & /*selected*/
    16 && m && r && M && Ze && m.flyTo(r.center, Oe(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && t(68, n = je === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    132096 | i.$$.dirty[2] & /*showPolygonMarker*/
    64 && (qe || m == null || m.setFeatures(void 0, void 0, n)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, markerOnSelected*/
    132096 | i.$$.dirty[2] & /*markedFeatures, selected, showPolygonMarker*/
    84 && m && qe && !Z && (m.setFeatures(r ? [r] : void 0, h, n), m.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures, showPolygonMarker*/
    68 && m && m.setFeatures(Z, h, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && Z && m && m.setSelectedMarker(O), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    1024 && m) {
      const s = ut(V);
      m.setReverseMarker(s ? [s.decimalLongitude, s.decimalLatitude] : void 0);
    }
    i.$$.dirty[2] & /*selected*/
    16 && ge("select", { feature: r }), i.$$.dirty[0] & /*picked*/
    16384 && ge("pick", { feature: h }), i.$$.dirty[0] & /*listFeatures, focusedDelayed, keepListOpen*/
    73744 && t(67, u = !!(T != null && T.length) && (Te || p)), i.$$.dirty[2] & /*optionsVisible*/
    32 && ge("optionsvisibilitychange", { optionsVisible: u }), i.$$.dirty[0] & /*listFeatures*/
    8192 && ge("featureslisted", { features: T }), i.$$.dirty[2] & /*markedFeatures*/
    4 && ge("featuresmarked", { features: Z }), i.$$.dirty[0] & /*reverseActive*/
    1 && ge("reversetoggle", { reverse: ae }), i.$$.dirty[0] & /*searchValue*/
    2 && ge("querychange", { query: V }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    1024 && m && m.indicateReverse(ae);
  }, [
    ae,
    V,
    c,
    b,
    p,
    U,
    B,
    K,
    j,
    le,
    Et,
    St,
    Tt,
    T,
    h,
    O,
    Te,
    ue,
    ie,
    re,
    Le,
    mi,
    Ct,
    bi,
    Wt,
    ft,
    Ot,
    vi,
    d,
    f,
    L,
    E,
    g,
    k,
    W,
    C,
    M,
    w,
    _,
    S,
    v,
    m,
    y,
    Se,
    je,
    He,
    pe,
    Ze,
    qe,
    tt,
    Qe,
    it,
    nt,
    Ke,
    Ve,
    rt,
    ot,
    st,
    lt,
    ui,
    ci,
    Nt,
    di,
    fi,
    Z,
    at,
    r,
    u,
    n,
    o,
    a,
    Li,
    _i,
    yi,
    wi,
    Ei,
    Si,
    pi,
    ki,
    Ti,
    Ni,
    Mi,
    Ci,
    Wi
  ];
}
class Hn extends Ee {
  constructor(e) {
    super(), we(
      this,
      e,
      jn,
      Gn,
      ye,
      {
        ZOOM_DEFAULTS: 28,
        class: 2,
        apiKey: 29,
        bbox: 30,
        clearButtonTitle: 3,
        clearOnBlur: 31,
        clearListOnPick: 32,
        keepListOpen: 4,
        collapsed: 5,
        country: 33,
        debounceSearch: 34,
        enableReverse: 6,
        errorMessage: 7,
        filter: 35,
        flyTo: 36,
        fuzzyMatch: 37,
        language: 38,
        limit: 39,
        reverseGeocodingLimit: 40,
        mapController: 41,
        minLength: 42,
        noResultsMessage: 8,
        placeholder: 9,
        proximity: 43,
        reverseActive: 0,
        reverseButtonTitle: 10,
        searchValue: 1,
        pickedResultStyle: 44,
        showPlaceType: 11,
        showResultsWhileTyping: 45,
        selectFirst: 46,
        flyToSelected: 47,
        markerOnSelected: 48,
        types: 49,
        reverseGeocodingTypes: 50,
        exhaustiveReverseGeocoding: 51,
        excludeTypes: 52,
        reverseGeocodingExcludeTypes: 53,
        zoom: 54,
        apiUrl: 55,
        fetchParameters: 56,
        iconsBaseUrl: 12,
        adjustUrlQuery: 57,
        adjustUrl: 58,
        focus: 59,
        blur: 60,
        setQuery: 61,
        clearList: 62,
        clearMap: 63
      },
      null,
      [-1, -1, -1, -1]
    );
  }
  get ZOOM_DEFAULTS() {
    return this.$$.ctx[28];
  }
  get focus() {
    return this.$$.ctx[59];
  }
  get blur() {
    return this.$$.ctx[60];
  }
  get setQuery() {
    return this.$$.ctx[61];
  }
  get clearList() {
    return this.$$.ctx[62];
  }
  get clearMap() {
    return this.$$.ctx[63];
  }
}
const xt = [
  "featuresListed",
  "featuresMarked",
  "optionsVisibilityChange",
  "pick",
  "queryChange",
  "response",
  "reverseToggle",
  "select"
], Zn = [
  "adjustUrlQuery",
  "adjustUrl",
  "apiKey",
  "apiUrl",
  "bbox",
  "class",
  "clearButtonTitle",
  "clearListOnPick",
  "clearOnBlur",
  "collapsed",
  "country",
  "debounceSearch",
  "enableReverse",
  "errorMessage",
  "excludeTypes",
  "reverseGeocodingExcludeTypes",
  "exhaustiveReverseGeocoding",
  "fetchParameters",
  "filter",
  "flyToSelected",
  "fuzzyMatch",
  "iconsBaseUrl",
  "keepListOpen",
  "language",
  "limit",
  "reverseGeocodingLimit",
  "mapController",
  "markerOnSelected",
  "minLength",
  "noResultsMessage",
  "pickedResultStyle",
  "placeholder",
  "proximity",
  "reverseActive",
  "reverseButtonTitle",
  "selectFirst",
  "showPlaceType",
  "showResultsWhileTyping",
  "types",
  "reverseGeocodingTypes",
  "zoom"
];
function $t(i) {
  return "on" + i[0].toUpperCase() + i.slice(1);
}
const Kn = Ui(function(e, t) {
  const n = zt(void 0), r = zt(void 0), u = { ...e };
  for (const a of xt)
    delete u[$t(a)];
  ht(() => {
    if (!n.current)
      throw new Error();
    const a = new Hn({
      target: n.current,
      props: u
    });
    return r.current = a, () => a.$destroy();
  }, []);
  for (const a of Zn)
    ht(() => {
      r.current && e[a] !== void 0 && r.current.$set({ [a]: e[a] });
    }, [e[a]]);
  for (const a of xt) {
    const o = e[$t(a)];
    ht(
      () => {
        var d;
        return o && ((d = r.current) == null ? void 0 : d.$on(a.toLowerCase(), (c) => {
          o(c.detail);
        }));
      },
      [o]
    );
  }
  return Di(t, () => ({
    setQuery: (a, o = !0) => {
      var d;
      return (d = r.current) == null ? void 0 : d.setQuery(a, o);
    },
    clearMap: () => {
      var a;
      return (a = r.current) == null ? void 0 : a.clearMap();
    },
    clearList: () => {
      var a;
      return (a = r.current) == null ? void 0 : a.clearList();
    },
    focus: (a) => {
      var o;
      return (o = r.current) == null ? void 0 : o.focus(a);
    },
    blur: () => {
      var a;
      return (a = r.current) == null ? void 0 : a.blur();
    },
    setReverseMode: (a) => {
      var o;
      return (o = r.current) == null ? void 0 : o.$set({ reverseActive: a });
    }
  })), Ii("div", { ref: n });
});
export {
  Kn as GeocodingControl
};
//# sourceMappingURL=react.js.map
