var Kn = Object.defineProperty;
var Si = (i) => {
  throw TypeError(i);
};
var Yn = (i, e, t) => e in i ? Kn(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var O = (i, e, t) => Yn(i, typeof e != "symbol" ? e + "" : e, t), xi = (i, e, t) => e.has(i) || Si("Cannot " + t);
var ue = (i, e, t) => (xi(i, e, "read from private field"), t ? t.call(i) : e.get(i)), $t = (i, e, t) => e.has(i) ? Si("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), ei = (i, e, t, n) => (xi(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t);
import { Control as Qn } from "ol/control";
import Xe from "ol/events/Event";
import { Feature as ze } from "ol";
import { Point as ti, Polygon as Ti, MultiPolygon as Mi, GeometryCollection as Xn, LineString as Ni, MultiLineString as ki } from "ol/geom";
import Jn from "ol/layer/Vector";
import { fromLonLat as Ct, transformExtent as $n, toLonLat as Ci, getUserProjection as er } from "ol/proj";
import tr from "ol/source/Vector";
import Oi from "ol/style/Fill";
import ir from "ol/style/Icon";
import Ri from "ol/style/Stroke";
import nr from "ol/style/Style";
import rr from "ol/style/Text";
function se() {
}
function sr(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function an(i) {
  return i();
}
function Pi() {
  return /* @__PURE__ */ Object.create(null);
}
function Ve(i) {
  i.forEach(an);
}
function fn(i) {
  return typeof i == "function";
}
function rt(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Ot;
function pe(i, e) {
  return i === e ? !0 : (Ot || (Ot = document.createElement("a")), Ot.href = e, i === Ot.href);
}
function or(i) {
  return Object.keys(i).length === 0;
}
function lr(i, e, t, n) {
  if (i) {
    const r = cn(i, e, t, n);
    return i[0](r);
  }
}
function cn(i, e, t, n) {
  return i[1] && n ? sr(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function ur(i, e, t, n) {
  return i[2], e.dirty;
}
function ar(i, e, t, n, r, u) {
  if (r) {
    const a = cn(e, t, n, u);
    i.p(a, r);
  }
}
function fr(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function Wt(i) {
  return i ?? "";
}
function H(i, e) {
  i.appendChild(e);
}
function ee(i, e, t) {
  i.insertBefore(e, t || null);
}
function $(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function X(i) {
  return document.createElement(i);
}
function Fe(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function Ye(i) {
  return document.createTextNode(i);
}
function Le() {
  return Ye(" ");
}
function cr() {
  return Ye("");
}
function de(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function hr(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function x(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function dr(i) {
  return Array.from(i.childNodes);
}
function Tt(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Ii(i, e) {
  i.value = e ?? "";
}
function ct(i, e, t) {
  i.classList.toggle(e, !!t);
}
function gr(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let Mt;
function xt(i) {
  Mt = i;
}
function hn() {
  if (!Mt) throw new Error("Function called outside component initialization");
  return Mt;
}
function mr(i) {
  hn().$$.on_destroy.push(i);
}
function dn() {
  const i = hn();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const u = gr(
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
function pr(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const ft = [], si = [];
let ht = [];
const Ai = [], yr = /* @__PURE__ */ Promise.resolve();
let oi = !1;
function br() {
  oi || (oi = !0, yr.then(gn));
}
function li(i) {
  ht.push(i);
}
const ii = /* @__PURE__ */ new Set();
let at = 0;
function gn() {
  if (at !== 0)
    return;
  const i = Mt;
  do {
    try {
      for (; at < ft.length; ) {
        const e = ft[at];
        at++, xt(e), vr(e.$$);
      }
    } catch (e) {
      throw ft.length = 0, at = 0, e;
    }
    for (xt(null), ft.length = 0, at = 0; si.length; ) si.pop()();
    for (let e = 0; e < ht.length; e += 1) {
      const t = ht[e];
      ii.has(t) || (ii.add(t), t());
    }
    ht.length = 0;
  } while (ft.length);
  for (; Ai.length; )
    Ai.pop()();
  oi = !1, ii.clear(), xt(i);
}
function vr(i) {
  if (i.fragment !== null) {
    i.update(), Ve(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(li);
  }
}
function wr(i) {
  const e = [], t = [];
  ht.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), ht = e;
}
const At = /* @__PURE__ */ new Set();
let it;
function Et() {
  it = {
    r: 0,
    c: [],
    p: it
    // parent group
  };
}
function Lt() {
  it.r || Ve(it.c), it = it.p;
}
function ie(i, e) {
  i && i.i && (At.delete(i), i.i(e));
}
function fe(i, e, t, n) {
  if (i && i.o) {
    if (At.has(i)) return;
    At.add(i), it.c.push(() => {
      At.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Bi(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Er(i, e) {
  fe(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function Lr(i, e, t, n, r, u, a, s, m, c, v, _) {
  let M = i.length, C = u.length, N = M;
  const k = {};
  for (; N--; ) k[i[N].key] = N;
  const R = [], I = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), W = [];
  for (N = C; N--; ) {
    const A = _(r, u, N), o = t(A);
    let l = a.get(o);
    l ? W.push(() => l.p(A, e)) : (l = c(o, A), l.c()), I.set(o, R[N] = l), o in k && S.set(o, Math.abs(N - k[o]));
  }
  const z = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
  function F(A) {
    ie(A, 1), A.m(s, v), a.set(A.key, A), v = A.first, C--;
  }
  for (; M && C; ) {
    const A = R[C - 1], o = i[M - 1], l = A.key, f = o.key;
    A === o ? (v = A.first, M--, C--) : I.has(f) ? !a.has(l) || z.has(l) ? F(A) : D.has(f) ? M-- : S.get(l) > S.get(f) ? (D.add(l), F(A)) : (z.add(f), M--) : (m(o, a), M--);
  }
  for (; M--; ) {
    const A = i[M];
    I.has(A.key) || m(A, a);
  }
  for (; C; ) F(R[C - 1]);
  return Ve(W), R;
}
function Qe(i) {
  i && i.c();
}
function Ue(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), li(() => {
    const u = i.$$.on_mount.map(an).filter(fn);
    i.$$.on_destroy ? i.$$.on_destroy.push(...u) : Ve(u), i.$$.on_mount = [];
  }), r.forEach(li);
}
function qe(i, e) {
  const t = i.$$;
  t.fragment !== null && (wr(t.after_update), Ve(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function _r(i, e) {
  i.$$.dirty[0] === -1 && (ft.push(i), br(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function st(i, e, t, n, r, u, a = null, s = [-1]) {
  const m = Mt;
  xt(i);
  const c = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: se,
    not_equal: r,
    bound: Pi(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (m ? m.$$.context : [])),
    // everything else
    callbacks: Pi(),
    dirty: s,
    skip_bound: !1,
    root: e.target || m.$$.root
  };
  a && a(c.root);
  let v = !1;
  if (c.ctx = t ? t(i, e.props || {}, (_, M, ...C) => {
    const N = C.length ? C[0] : M;
    return c.ctx && r(c.ctx[_], c.ctx[_] = N) && (!c.skip_bound && c.bound[_] && c.bound[_](N), v && _r(i, _)), M;
  }) : [], c.update(), v = !0, Ve(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const _ = dr(e.target);
      c.fragment && c.fragment.l(_), _.forEach($);
    } else
      c.fragment && c.fragment.c();
    e.intro && ie(i.$$.fragment), Ue(i, e.target, e.anchor), gn();
  }
  xt(m);
}
class ot {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    O(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    O(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    qe(this, 1), this.$destroy = se;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!fn(t))
      return se;
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
    this.$$set && !or(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Sr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Sr);
function xr(i) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), x(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), x(e, "viewBox", "0 0 14 14"), x(e, "width", "13"), x(e, "height", "13"), x(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      ee(n, e, r), H(e, t);
    },
    p: se,
    i: se,
    o: se,
    d(n) {
      n && $(e);
    }
  };
}
class mn extends ot {
  constructor(e) {
    super(), st(this, e, null, xr, rt, {});
  }
}
function Tr(i) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), x(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), x(e, "viewBox", "0 0 30 30"), x(e, "fill", "none"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      ee(n, e, r), H(e, t);
    },
    p: se,
    i: se,
    o: se,
    d(n) {
      n && $(e);
    }
  };
}
class pn extends ot {
  constructor(e) {
    super(), st(this, e, null, Tr, rt, {});
  }
}
function Mr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Nr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function kr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Cr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Or(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Rr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Pr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || x(e, "src", t), x(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !pe(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && x(e, "src", t), r & /*placeType*/
      128 && x(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Ir(i) {
  let e, t, n, r;
  return {
    c() {
      e = X("img"), pe(e.src, t = /*imageUrl*/
      i[5]) || x(e, "src", t), x(
        e,
        "alt",
        /*category*/
        i[4]
      ), x(
        e,
        "title",
        /*placeType*/
        i[7]
      ), x(e, "class", "svelte-w9y5n9");
    },
    m(u, a) {
      ee(u, e, a), n || (r = de(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(u, a) {
      a & /*imageUrl*/
      32 && !pe(e.src, t = /*imageUrl*/
      u[5]) && x(e, "src", t), a & /*category*/
      16 && x(
        e,
        "alt",
        /*category*/
        u[4]
      ), a & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        u[7]
      );
    },
    d(u) {
      u && $(e), n = !1, r();
    }
  };
}
function Ar(i) {
  let e, t;
  return {
    c() {
      e = X("div"), x(e, "class", "sprite-icon svelte-w9y5n9"), x(e, "style", t = `
        width: ${/*spriteIcon*/
      i[6].width / Se}px;
        height: ${/*spriteIcon*/
      i[6].height / Se}px;
        background-image: url(${/*iconsBaseUrl*/
      i[3]}sprite${ui}.png);
        background-position: -${/*spriteIcon*/
      i[6].x / Se}px -${/*spriteIcon*/
      i[6].y / Se}px;
        background-size: ${Ce.width / Se}px ${Ce.height / Se}px;
      `), x(
        e,
        "title",
        /*placeType*/
        i[7]
      );
    },
    m(n, r) {
      ee(n, e, r);
    },
    p(n, r) {
      r & /*spriteIcon, iconsBaseUrl*/
      72 && t !== (t = `
        width: ${/*spriteIcon*/
      n[6].width / Se}px;
        height: ${/*spriteIcon*/
      n[6].height / Se}px;
        background-image: url(${/*iconsBaseUrl*/
      n[3]}sprite${ui}.png);
        background-position: -${/*spriteIcon*/
      n[6].x / Se}px -${/*spriteIcon*/
      n[6].y / Se}px;
        background-size: ${Ce.width / Se}px ${Ce.height / Se}px;
      `) && x(e, "style", t), r & /*placeType*/
      128 && x(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Gi(i) {
  let e, t;
  return {
    c() {
      e = X("span"), t = Ye(
        /*placeType*/
        i[7]
      ), x(e, "class", "secondary svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r), H(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      128 && Tt(
        t,
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && $(e);
    }
  };
}
function Br(i) {
  let e, t, n, r, u, a, s, m, c, v = (
    /*isReverse*/
    (i[8] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), _, M, C = (
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
  ), N, k, R = (
    /*isReverse*/
    (i[8] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), I, S, W, z, D, F;
  function A(g, h) {
    return h & /*feature*/
    1 && (t = null), h & /*feature*/
    1 && (n = null), h & /*feature*/
    1 && (r = null), h & /*feature*/
    1 && (u = null), Ce && /*spriteIcon*/
    g[6] ? Ar : (
      /*imageUrl*/
      g[5] ? Ir : (
        /*feature*/
        g[0].address ? Pr : (t == null && (t = !!/*feature*/
        g[0].id.startsWith("road.")), t ? Rr : (n == null && (n = !!/*feature*/
        g[0].id.startsWith("address.")), n ? Or : (r == null && (r = !!/*feature*/
        g[0].id.startsWith("postal_code.")), r ? Cr : (u == null && (u = !!/*feature*/
        g[0].id.startsWith("poi.")), u ? kr : (
          /*isReverse*/
          g[8] ? Nr : Mr
        )))))
      )
    );
  }
  let o = A(i, -1), l = o(i), f = C && Gi(i);
  return {
    c() {
      e = X("li"), l.c(), a = Le(), s = X("span"), m = X("span"), c = X("span"), _ = Ye(v), M = Le(), f && f.c(), N = Le(), k = X("span"), I = Ye(R), x(c, "class", "primary svelte-w9y5n9"), x(m, "class", "svelte-w9y5n9"), x(k, "class", "line2 svelte-w9y5n9"), x(s, "class", "texts svelte-w9y5n9"), x(e, "tabindex", "-1"), x(e, "role", "option"), x(e, "aria-selected", S = /*style*/
      i[1] === "selected"), x(e, "aria-checked", W = /*style*/
      i[1] === "picked"), x(e, "class", z = Wt(
        /*style*/
        i[1]
      ) + " svelte-w9y5n9");
    },
    m(g, h) {
      ee(g, e, h), l.m(e, null), H(e, a), H(e, s), H(s, m), H(m, c), H(c, _), H(m, M), f && f.m(m, null), H(s, N), H(s, k), H(k, I), D || (F = [
        de(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[13]
        ),
        de(
          e,
          "focus",
          /*focus_handler*/
          i[15]
        ),
        de(
          e,
          "click",
          /*click_handler*/
          i[16]
        )
      ], D = !0);
    },
    p(g, [h]) {
      o === (o = A(g, h)) && l ? l.p(g, h) : (l.d(1), l = o(g), l && (l.c(), l.m(e, a))), h & /*isReverse, feature*/
      257 && v !== (v = /*isReverse*/
      (g[8] ? (
        /*feature*/
        g[0].place_name
      ) : (
        /*feature*/
        g[0].place_name.replace(/,.*/, "")
      )) + "") && Tt(_, v), h & /*showPlaceType, feature, imageUrl, isReverse*/
      293 && (C = /*showPlaceType*/
      g[2] === "always" || /*showPlaceType*/
      g[2] !== "never" && !/*feature*/
      g[0].address && !/*feature*/
      g[0].id.startsWith("road.") && !/*feature*/
      g[0].id.startsWith("address.") && !/*feature*/
      g[0].id.startsWith("postal_code.") && (!/*feature*/
      g[0].id.startsWith("poi.") || !/*imageUrl*/
      g[5]) && !/*isReverse*/
      g[8]), C ? f ? f.p(g, h) : (f = Gi(g), f.c(), f.m(m, null)) : f && (f.d(1), f = null), h & /*isReverse, feature*/
      257 && R !== (R = /*isReverse*/
      (g[8] ? "" : (
        /*feature*/
        g[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Tt(I, R), h & /*style*/
      2 && S !== (S = /*style*/
      g[1] === "selected") && x(e, "aria-selected", S), h & /*style*/
      2 && W !== (W = /*style*/
      g[1] === "picked") && x(e, "aria-checked", W), h & /*style*/
      2 && z !== (z = Wt(
        /*style*/
        g[1]
      ) + " svelte-w9y5n9") && x(e, "class", z);
    },
    i: se,
    o: se,
    d(g) {
      g && $(e), l.d(), f && f.d(), D = !1, Ve(F);
    }
  };
}
const yn = typeof devicePixelRatio > "u" ? 1 : devicePixelRatio > 1.25, ui = yn ? "@2x" : "", Se = yn ? 2 : 1;
let Ce, Rt;
function Gr(i, e, t) {
  let n, r, u, { feature: a } = e, { style: s = "default" } = e, { showPlaceType: m } = e, { missingIconsCache: c } = e, { iconsBaseUrl: v } = e;
  const _ = dn();
  let M, C, N, k;
  function R() {
    Rt ?? (Rt = fetch(`${v}sprite${ui}.json`).then((o) => o.json()).then((o) => {
      Ce = o;
    }).catch(() => {
      Ce = null;
    }));
  }
  function I() {
    C && c.add(C), S();
  }
  function S() {
    Ce !== void 0 ? W() : (R(), Rt == null || Rt.then(W));
  }
  function W() {
    do {
      if (k--, t(4, M = n == null ? void 0 : n[k]), t(6, N = M ? Ce == null ? void 0 : Ce.icons[M] : void 0), N)
        break;
      t(5, C = M ? v + M.replace(/ /g, "_") + ".svg" : void 0);
    } while (k > -1 && (!C || c.has(C)));
  }
  function z(o) {
    pr.call(this, i, o);
  }
  const D = () => I(), F = () => _("select", void 0), A = (o) => {
    document.activeElement !== o.target && _("select", void 0);
  };
  return i.$$set = (o) => {
    "feature" in o && t(0, a = o.feature), "style" in o && t(1, s = o.style), "showPlaceType" in o && t(2, m = o.showPlaceType), "missingIconsCache" in o && t(11, c = o.missingIconsCache), "iconsBaseUrl" in o && t(3, v = o.iconsBaseUrl);
  }, i.$$.update = () => {
    var o, l, f, g, h;
    i.$$.dirty & /*feature*/
    1 && t(12, n = (o = a.properties) == null ? void 0 : o.categories), i.$$.dirty & /*feature*/
    1 && t(8, r = a.place_type[0] === "reverse"), i.$$.dirty & /*feature*/
    1 && t(7, u = ((f = (l = a.properties) == null ? void 0 : l.categories) == null ? void 0 : f.join(", ")) ?? ((h = (g = a.properties) == null ? void 0 : g.place_type_name) == null ? void 0 : h[0]) ?? a.place_type[0]), i.$$.dirty & /*categories*/
    4096 && (k = (n == null ? void 0 : n.length) ?? 0, S());
  }, [
    a,
    s,
    m,
    v,
    M,
    C,
    N,
    u,
    r,
    _,
    I,
    c,
    n,
    z,
    D,
    F,
    A
  ];
}
class Wr extends ot {
  constructor(e) {
    super(), st(this, e, Gr, Br, rt, {
      feature: 0,
      style: 1,
      showPlaceType: 2,
      missingIconsCache: 11,
      iconsBaseUrl: 3
    });
  }
}
function zr(i) {
  let e;
  return {
    c() {
      e = X("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="loading-icon svelte-1ocfouu"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', x(e, "class", "svelte-1ocfouu");
    },
    m(t, n) {
      ee(t, e, n);
    },
    p: se,
    i: se,
    o: se,
    d(t) {
      t && $(e);
    }
  };
}
class Dr extends ot {
  constructor(e) {
    super(), st(this, e, null, zr, rt, {});
  }
}
function Fr(i) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), x(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), x(e, "viewBox", "0 0 60.006 21.412"), x(e, "width", "14"), x(e, "height", "20"), x(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      ee(n, e, r), H(e, t);
    },
    p: se,
    i: se,
    o: se,
    d(n) {
      n && $(e);
    }
  };
}
class Ur extends ot {
  constructor(e) {
    super(), st(this, e, null, Fr, rt, {});
  }
}
function qr(i) {
  let e, t, n;
  return {
    c() {
      e = Fe("svg"), t = Fe("circle"), n = Fe("path"), x(t, "cx", "4.789"), x(t, "cy", "4.787"), x(t, "r", "3.85"), x(t, "class", "svelte-1aq105l"), x(n, "d", "M12.063 12.063 7.635 7.635"), x(n, "class", "svelte-1aq105l"), x(e, "xmlns", "http://www.w3.org/2000/svg"), x(e, "width", "13"), x(e, "height", "13"), x(e, "viewBox", "0 0 13 13"), x(e, "class", "svelte-1aq105l");
    },
    m(r, u) {
      ee(r, e, u), H(e, t), H(e, n);
    },
    p: se,
    i: se,
    o: se,
    d(r) {
      r && $(e);
    }
  };
}
class jr extends ot {
  constructor(e) {
    super(), st(this, e, null, qr, rt, {});
  }
}
function Vr(i, e, t) {
  const n = e[1], r = e[0], u = n - r;
  return i === n && t ? i : ((i - r) % u + u) % u + r;
}
function zt(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let yt;
async function Hr(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (yt && r.cachedLocationExpiry && yt.time + r.cachedLocationExpiry > Date.now()) {
          if (!yt.coords)
            break e;
          return yt.coords;
        }
        let u;
        try {
          return u = await new Promise((a, s) => {
            t.signal.addEventListener("abort", () => {
              s(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (m) => {
                a(
                  [m.coords.longitude, m.coords.latitude].map((c) => c.toFixed(6)).join(",")
                );
              },
              (m) => {
                s(m);
              },
              r
            );
          }), u;
        } catch {
        } finally {
          r.cachedLocationExpiry && (yt = {
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
const Zr = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, Wi = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, zi = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, Di = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Fi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, Ui = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Kr(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((C) => Number(C.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), u = Math.abs(n), a = t > 0 ? "N" : "S", s = n > 0 ? "E" : "W";
    let m;
    i == "DD" && (m = `${r}° ${a}, ${u}° ${s}`);
    const c = Math.floor(r), v = Math.floor(u), _ = (r - c) * 60, M = (u - v) * 60;
    if (i == "DM") {
      let C = qi(_, 3).toFixed(3).padStart(6, "0"), N = qi(M, 3).toFixed(3).padStart(6, "0");
      C.endsWith(".000") && N.endsWith(".000") && (C = C.replace(/\.000$/, ""), N = N.replace(/\.000$/, "")), m = `${c}° ${C}' ${a}, ${v}° ${N}' ${s}`;
    }
    if (i == "DMS") {
      const C = Math.floor(_), N = Math.floor(M);
      let k = ((_ - C) * 60).toFixed(1).padStart(4, "0"), R = ((M - N) * 60).toFixed(1).padStart(4, "0");
      const I = C.toString().padStart(2, "0"), S = N.toString().padStart(2, "0");
      k.endsWith(".0") && R.endsWith(".0") && (k = k.replace(/\.0$/, ""), R = R.replace(/\.0$/, "")), m = `${c}° ${I}' ${k}" ${a}, ${v}° ${S}' ${R}" ${s}`;
    }
    return m;
  } else
    throw new Error("no decimal coordinates to convert");
}
function qi(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function gi(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", u = "", a = null, s = [], m = !1;
  if (Zr.test(i))
    throw new Error("invalid coordinate value");
  if (Wi.test(i))
    if (s = Wi.exec(i), m = bt(s), m)
      t = Math.abs(s[1]) + s[2] / 60, Number(s[1]) < 0 && (t *= -1), n = Math.abs(s[3]) + s[4] / 60, Number(s[3]) < 0 && (n *= -1), a = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (zi.test(i))
    if (s = zi.exec(i), m = bt(s), m) {
      if (t = s[2], n = s[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), a = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      s[1] ? (r = s[1], u = s[5]) : s[4] && (r = s[4], u = s[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Di.test(i))
    if (s = Di.exec(i), m = bt(s), m)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, a = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, a = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[9])), s[11] && (n += s[11] / 60), s[13] && (n += s[13].replace(",", ".") / 3600), parseInt(s[9]) < 0 && (n = -1 * n), s[1] ? (r = s[1], u = s[8]) : s[7] && (r = s[7], u = s[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Fi.test(i))
    if (s = Fi.exec(i), m = bt(s), m)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, a = "DM"), s[6] && (t += s[6] / 3600, a = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[10])), s[12] && (n += s[12] / 60), s[14] && (n += s[14] / 3600), parseInt(s[10]) < 0 && (n = -1 * n), s[1] ? (r = s[1], u = s[9]) : s[8] && (r = s[8], u = s[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Ui.test(i)) {
    if (s = Ui.exec(i), m = bt(s), s.filter((c) => c).length <= 5)
      throw new Error("invalid coordinates format");
    if (m)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4].replace(",", ".") / 60, a = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, a = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[10])), s[12] && (n += s[12].replace(",", ".") / 60), s[14] && (n += s[14].replace(",", ".") / 3600), parseInt(s[10]) < 0 && (n = -1 * n), s[1] ? (r = s[1], u = s[9]) : s[8] && (r = s[8], u = s[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (m) {
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
    const v = s[0].trim();
    let _, M;
    const C = /[,/;\u0020]/g, N = v.match(C);
    if (N == null) {
      const I = Math.floor(i.length / 2);
      _ = v.substring(0, I).trim(), M = v.substring(I).trim();
    } else {
      let I;
      N.length % 2 == 1 ? I = Math.floor(N.length / 2) : I = N.length / 2 - 1;
      let S = 0;
      if (I == 0)
        S = v.indexOf(N[0]), _ = v.substring(0, S).trim(), M = v.substring(S + 1).trim();
      else {
        let W = 0, z = 0;
        for (; W <= I; )
          S = v.indexOf(N[W], z), z = S + 1, W++;
        _ = v.substring(0, S).trim(), M = v.substring(S + 1).trim();
      }
    }
    const k = _.split(".");
    if (k.length == 2 && k[1] == 0 && k[1].length != 2)
      throw new Error("invalid coordinates format");
    const R = M.split(".");
    if (R.length == 2 && R[1] == 0 && R[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(_) || /^\d+$/.test(M))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), n = Number(Number(n).toFixed(e)), Object.freeze({
      verbatimCoordinates: v,
      verbatimLatitude: _,
      verbatimLongitude: M,
      decimalLatitude: t,
      decimalLongitude: n,
      decimalCoordinates: `${t},${n}`,
      originalFormat: a,
      closeEnough: Yr,
      toCoordinateFormat: Kr
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function bt(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let u = 0; u < r; u++) {
    const a = e[u], s = e[u + r], m = t.test(a) && t.test(s), c = n.test(a) && n.test(s), v = a == s;
    if (!(a == null && s == null)) {
      if (a == null || s == null)
        return !1;
      if (m || c || v)
        continue;
      return !1;
    }
  }
  return !0;
}
function ji(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Yr(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return ji(this.decimalLatitude, Number(e[0])) && ji(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Qr = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
gi.to = Qr;
const Xr = [
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
], Jr = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, $r = [
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
], es = [
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
function ts() {
  const i = [];
  return Xr.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...Jr });
  }), [...i, ...$r, ...es];
}
const is = ts();
gi.formats = is.map((i) => i.verbatimCoordinates);
const ns = gi;
function Vi(i, e, t) {
  const n = i.slice();
  return n[97] = e[t], n[99] = t, n;
}
function Hi(i) {
  let e, t, n, r, u;
  return t = new mn({}), {
    c() {
      e = X("button"), Qe(t.$$.fragment), x(e, "type", "button"), x(
        e,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), x(e, "class", "svelte-bz0zu3");
    },
    m(a, s) {
      ee(a, e, s), Ue(t, e, null), n = !0, r || (u = de(
        e,
        "click",
        /*click_handler_2*/
        i[78]
      ), r = !0);
    },
    p(a, s) {
      (!n || s[0] & /*clearButtonTitle*/
      8) && x(
        e,
        "title",
        /*clearButtonTitle*/
        a[3]
      );
    },
    i(a) {
      n || (ie(t.$$.fragment, a), n = !0);
    },
    o(a) {
      fe(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && $(e), qe(t), r = !1, u();
    }
  };
}
function Zi(i) {
  let e, t;
  return e = new Dr({}), {
    c() {
      Qe(e.$$.fragment);
    },
    m(n, r) {
      Ue(e, n, r), t = !0;
    },
    i(n) {
      t || (ie(e.$$.fragment, n), t = !0);
    },
    o(n) {
      fe(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qe(e, n);
    }
  };
}
function Ki(i) {
  let e, t, n, r, u;
  return t = new Ur({}), {
    c() {
      e = X("button"), Qe(t.$$.fragment), x(e, "type", "button"), x(
        e,
        "title",
        /*reverseButtonTitle*/
        i[10]
      ), x(e, "class", "svelte-bz0zu3"), ct(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(a, s) {
      ee(a, e, s), Ue(t, e, null), n = !0, r || (u = de(
        e,
        "click",
        /*click_handler_3*/
        i[79]
      ), r = !0);
    },
    p(a, s) {
      (!n || s[0] & /*reverseButtonTitle*/
      1024) && x(
        e,
        "title",
        /*reverseButtonTitle*/
        a[10]
      ), (!n || s[0] & /*reverseActive*/
      1) && ct(
        e,
        "active",
        /*reverseActive*/
        a[0]
      );
    },
    i(a) {
      n || (ie(t.$$.fragment, a), n = !0);
    },
    o(a) {
      fe(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && $(e), qe(t), r = !1, u();
    }
  };
}
function rs(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, u, a, s = Bi(
    /*listFeatures*/
    i[13]
  );
  const m = (c) => (
    /*feature*/
    c[97].id + /*feature*/
    (c[97].address ? "," + /*feature*/
    c[97].address : "")
  );
  for (let c = 0; c < s.length; c += 1) {
    let v = Vi(i, s, c), _ = m(v);
    n.set(_, t[c] = Yi(_, v));
  }
  return {
    c() {
      e = X("ul");
      for (let c = 0; c < t.length; c += 1)
        t[c].c();
      x(e, "class", "options svelte-bz0zu3"), x(e, "role", "listbox");
    },
    m(c, v) {
      ee(c, e, v);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_] && t[_].m(e, null);
      r = !0, u || (a = [
        de(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          i[27]
        ),
        de(
          e,
          "blur",
          /*blur_handler_1*/
          i[83]
        ),
        de(
          e,
          "keydown",
          /*handleKeyDown*/
          i[23]
        )
      ], u = !0);
    },
    p(c, v) {
      v[0] & /*listFeatures, showPlaceType, selectedItemIndex, picked, missingIconsCache, iconsBaseUrl, handleMouseEnter, pick*/
      102823936 && (s = Bi(
        /*listFeatures*/
        c[13]
      ), Et(), t = Lr(t, v, m, 1, c, s, n, e, Er, Yi, null, Vi), Lt());
    },
    i(c) {
      if (!r) {
        for (let v = 0; v < s.length; v += 1)
          ie(t[v]);
        r = !0;
      }
    },
    o(c) {
      for (let v = 0; v < t.length; v += 1)
        fe(t[v]);
      r = !1;
    },
    d(c) {
      c && $(e);
      for (let v = 0; v < t.length; v += 1)
        t[v].d();
      u = !1, Ve(a);
    }
  };
}
function ss(i) {
  let e, t, n, r, u, a;
  return t = new pn({}), {
    c() {
      e = X("div"), Qe(t.$$.fragment), n = Le(), r = X("div"), u = Ye(
        /*noResultsMessage*/
        i[8]
      ), x(r, "class", "svelte-bz0zu3"), x(e, "class", "no-results svelte-bz0zu3");
    },
    m(s, m) {
      ee(s, e, m), Ue(t, e, null), H(e, n), H(e, r), H(r, u), a = !0;
    },
    p(s, m) {
      (!a || m[0] & /*noResultsMessage*/
      256) && Tt(
        u,
        /*noResultsMessage*/
        s[8]
      );
    },
    i(s) {
      a || (ie(t.$$.fragment, s), a = !0);
    },
    o(s) {
      fe(t.$$.fragment, s), a = !1;
    },
    d(s) {
      s && $(e), qe(t);
    }
  };
}
function os(i) {
  let e = "", t;
  return {
    c() {
      t = Ye(e);
    },
    m(n, r) {
      ee(n, t, r);
    },
    p: se,
    i: se,
    o: se,
    d(n) {
      n && $(t);
    }
  };
}
function ls(i) {
  let e, t, n, r, u, a, s, m, c, v, _;
  return t = new pn({}), m = new mn({}), {
    c() {
      e = X("div"), Qe(t.$$.fragment), n = Le(), r = X("div"), u = Ye(
        /*errorMessage*/
        i[7]
      ), a = Le(), s = X("button"), Qe(m.$$.fragment), x(r, "class", "svelte-bz0zu3"), x(s, "class", "svelte-bz0zu3"), x(e, "class", "error svelte-bz0zu3");
    },
    m(M, C) {
      ee(M, e, C), Ue(t, e, null), H(e, n), H(e, r), H(r, u), H(e, a), H(e, s), Ue(m, s, null), c = !0, v || (_ = de(
        s,
        "click",
        /*click_handler_4*/
        i[80]
      ), v = !0);
    },
    p(M, C) {
      (!c || C[0] & /*errorMessage*/
      128) && Tt(
        u,
        /*errorMessage*/
        M[7]
      );
    },
    i(M) {
      c || (ie(t.$$.fragment, M), ie(m.$$.fragment, M), c = !0);
    },
    o(M) {
      fe(t.$$.fragment, M), fe(m.$$.fragment, M), c = !1;
    },
    d(M) {
      M && $(e), qe(t), qe(m), v = !1, _();
    }
  };
}
function Yi(i, e) {
  var s;
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
  return n = new Wr({
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
          ((s = e[14]) == null ? void 0 : s.id) === /*feature*/
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
      t = cr(), Qe(n.$$.fragment), this.first = t;
    },
    m(m, c) {
      ee(m, t, c), Ue(n, m, c), r = !0;
    },
    p(m, c) {
      var _;
      e = m;
      const v = {};
      c[0] & /*listFeatures*/
      8192 && (v.feature = /*feature*/
      e[97]), c[0] & /*showPlaceType*/
      2048 && (v.showPlaceType = /*showPlaceType*/
      e[11]), c[0] & /*selectedItemIndex, listFeatures, picked*/
      57344 && (v.style = /*selectedItemIndex*/
      e[15] === /*i*/
      e[99] ? "selected" : (
        /*picked*/
        ((_ = e[14]) == null ? void 0 : _.id) === /*feature*/
        e[97].id ? "picked" : "default"
      )), c[0] & /*iconsBaseUrl*/
      4096 && (v.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(v);
    },
    i(m) {
      r || (ie(n.$$.fragment, m), r = !0);
    },
    o(m) {
      fe(n.$$.fragment, m), r = !1;
    },
    d(m) {
      m && $(t), qe(n, m);
    }
  };
}
function us(i) {
  let e, t, n, r, u, a, s, m, c, v, _, M, C, N, k, R, I, S, W, z = !1;
  u = new jr({});
  let D = !/*abortController*/
  i[20] && Hi(i), F = (
    /*abortController*/
    i[20] && Zi()
  ), A = (
    /*enableReverse*/
    i[6] === "button" && Ki(i)
  );
  const o = (
    /*#slots*/
    i[70].default
  ), l = lr(
    o,
    i,
    /*$$scope*/
    i[69],
    null
  ), f = [ls, os, ss, rs], g = [];
  function h(d, b) {
    var p, y;
    return (
      /*error*/
      d[19] ? 0 : !/*focusedDelayed*/
      d[16] && !/*keepListOpen*/
      d[4] ? 1 : (
        /*listFeatures*/
        ((p = d[13]) == null ? void 0 : p.length) === 0 ? 2 : (
          /*listFeatures*/
          (y = d[13]) != null && y.length && /*focusedDelayed*/
          (d[16] || /*keepListOpen*/
          d[4]) ? 3 : -1
        )
      )
    );
  }
  return ~(N = h(i)) && (k = g[N] = f[N](i)), {
    c() {
      e = Le(), t = X("form"), n = X("div"), r = X("button"), Qe(u.$$.fragment), a = Le(), s = X("input"), m = Le(), c = X("div"), D && D.c(), v = Le(), F && F.c(), _ = Le(), A && A.c(), M = Le(), l && l.c(), C = Le(), k && k.c(), x(r, "class", "search-button svelte-bz0zu3"), x(r, "type", "button"), x(
        s,
        "placeholder",
        /*placeholder*/
        i[9]
      ), x(
        s,
        "aria-label",
        /*placeholder*/
        i[9]
      ), x(s, "class", "svelte-bz0zu3"), x(c, "class", "clear-button-container svelte-bz0zu3"), ct(
        c,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), x(n, "class", "input-group svelte-bz0zu3"), x(t, "class", R = Wt(
        /*className*/
        i[2]
      ) + " svelte-bz0zu3"), ct(
        t,
        "can-collapse",
        /*collapsed*/
        i[5] && /*searchValue*/
        i[1] === ""
      );
    },
    m(d, b) {
      ee(d, e, b), ee(d, t, b), H(t, n), H(n, r), Ue(u, r, null), H(n, a), H(n, s), i[72](s), Ii(
        s,
        /*searchValue*/
        i[1]
      ), H(n, m), H(n, c), D && D.m(c, null), H(c, v), F && F.m(c, null), H(n, _), A && A.m(n, null), H(n, M), l && l.m(n, null), H(t, C), ~N && g[N].m(t, null), I = !0, S || (W = [
        de(
          r,
          "click",
          /*click_handler*/
          i[71]
        ),
        de(
          s,
          "input",
          /*input_1_input_handler*/
          i[73]
        ),
        de(
          s,
          "focus",
          /*focus_handler*/
          i[74]
        ),
        de(
          s,
          "blur",
          /*blur_handler*/
          i[75]
        ),
        de(
          s,
          "click",
          /*click_handler_1*/
          i[76]
        ),
        de(
          s,
          "keydown",
          /*handleKeyDown*/
          i[23]
        ),
        de(
          s,
          "input",
          /*handleInput*/
          i[24]
        ),
        de(
          s,
          "change",
          /*change_handler*/
          i[77]
        ),
        de(t, "submit", hr(
          /*handleSubmit*/
          i[22]
        ))
      ], S = !0);
    },
    p(d, b) {
      (!I || b[0] & /*placeholder*/
      512) && x(
        s,
        "placeholder",
        /*placeholder*/
        d[9]
      ), (!I || b[0] & /*placeholder*/
      512) && x(
        s,
        "aria-label",
        /*placeholder*/
        d[9]
      ), b[0] & /*searchValue*/
      2 && s.value !== /*searchValue*/
      d[1] && Ii(
        s,
        /*searchValue*/
        d[1]
      ), /*abortController*/
      d[20] ? D && (Et(), fe(D, 1, 1, () => {
        D = null;
      }), Lt()) : D ? (D.p(d, b), b[0] & /*abortController*/
      1048576 && ie(D, 1)) : (D = Hi(d), D.c(), ie(D, 1), D.m(c, v)), /*abortController*/
      d[20] ? F ? b[0] & /*abortController*/
      1048576 && ie(F, 1) : (F = Zi(), F.c(), ie(F, 1), F.m(c, null)) : F && (Et(), fe(F, 1, 1, () => {
        F = null;
      }), Lt()), (!I || b[0] & /*searchValue*/
      2) && ct(
        c,
        "displayable",
        /*searchValue*/
        d[1] !== ""
      ), /*enableReverse*/
      d[6] === "button" ? A ? (A.p(d, b), b[0] & /*enableReverse*/
      64 && ie(A, 1)) : (A = Ki(d), A.c(), ie(A, 1), A.m(n, M)) : A && (Et(), fe(A, 1, 1, () => {
        A = null;
      }), Lt()), l && l.p && (!I || b[2] & /*$$scope*/
      128) && ar(
        l,
        o,
        d,
        /*$$scope*/
        d[69],
        I ? ur(
          o,
          /*$$scope*/
          d[69],
          b,
          null
        ) : fr(
          /*$$scope*/
          d[69]
        ),
        null
      );
      let p = N;
      N = h(d), N === p ? ~N && g[N].p(d, b) : (k && (Et(), fe(g[p], 1, 1, () => {
        g[p] = null;
      }), Lt()), ~N ? (k = g[N], k ? k.p(d, b) : (k = g[N] = f[N](d), k.c()), ie(k, 1), k.m(t, null)) : k = null), (!I || b[0] & /*className*/
      4 && R !== (R = Wt(
        /*className*/
        d[2]
      ) + " svelte-bz0zu3")) && x(t, "class", R), (!I || b[0] & /*className, collapsed, searchValue*/
      38) && ct(
        t,
        "can-collapse",
        /*collapsed*/
        d[5] && /*searchValue*/
        d[1] === ""
      );
    },
    i(d) {
      I || (ie(z), ie(u.$$.fragment, d), ie(D), ie(F), ie(A), ie(l, d), ie(k), I = !0);
    },
    o(d) {
      fe(z), fe(u.$$.fragment, d), fe(D), fe(F), fe(A), fe(l, d), fe(k), I = !1;
    },
    d(d) {
      d && ($(e), $(t)), qe(u), i[72](null), D && D.d(), F && F.d(), A && A.d(), l && l.d(d), ~N && g[N].d(), S = !1, Ve(W);
    }
  };
}
function as(i, e, t) {
  let n, r, u, { $$slots: a = {}, $$scope: s } = e;
  const m = {
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
  let { class: c = void 0 } = e, { apiKey: v = void 0 } = e, { bbox: _ = void 0 } = e, { clearButtonTitle: M = "clear" } = e, { clearOnBlur: C = !1 } = e, { clearListOnPick: N = !1 } = e, { keepListOpen: k = !1 } = e, { collapsed: R = !1 } = e, { country: I = void 0 } = e, { debounceSearch: S = 200 } = e, { enableReverse: W = "never" } = e, { errorMessage: z = "Something went wrong…" } = e, { filter: D = () => !0 } = e, { flyTo: F = !0 } = e, { fuzzyMatch: A = !0 } = e, { language: o = void 0 } = e, { limit: l = void 0 } = e;
  const f = 41415112612;
  let { reverseGeocodingLimit: g = f } = e, { mapController: h = void 0 } = e, { minLength: d = 2 } = e, { noResultsMessage: b = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: p = "Search" } = e, { proximity: y = [{ type: "server-geolocation" }] } = e, { reverseActive: w = W === "always" } = e, { reverseButtonTitle: E = "toggle reverse geocoding" } = e, { searchValue: T = "" } = e, { pickedResultStyle: P = "full-geometry" } = e, { showPlaceType: B = "if-needed" } = e, { showResultsWhileTyping: V = !0 } = e, { selectFirst: K = !0 } = e, { flyToSelected: te = !1 } = e, { markerOnSelected: j = !0 } = e, { types: Z = void 0 } = e;
  const ce = [];
  let { reverseGeocodingTypes: Ge = ce } = e, { exhaustiveReverseGeocoding: Je = !1 } = e, { excludeTypes: $e = !1 } = e;
  const be = void 0;
  let { reverseGeocodingExcludeTypes: Oe = be } = e, { zoom: ge = m } = e, { apiUrl: he = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: J = {} } = e, { iconsBaseUrl: yi = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.1.7/icons/" } = e, { adjustUrlQuery: Vt = () => {
  } } = e, { adjustUrl: Ht = () => {
  } } = e;
  function xn(L) {
    Ne.focus(L);
  }
  function Tn() {
    Ne.blur();
  }
  function bi(L, ne = !0, oe = !1) {
    t(1, T = L), ne ? (t(15, Y = -1), wi()) : (Ei(void 0, !oe, oe), setTimeout(() => {
      Ne.focus(), Ne.select();
    }));
  }
  function Mn() {
    t(13, q = void 0), t(14, G = void 0), t(15, Y = -1);
  }
  function Nn() {
    t(64, le = []), t(14, G = void 0);
  }
  let q, le, G, vi = "", Ne, Y = -1, Re, Nt = [], et, lt, ut, Zt, We = !1;
  const kn = /* @__PURE__ */ new Set(), He = dn();
  mr(() => {
    h && (h.setEventHandler(void 0), h.indicateReverse(!1), h.setSelectedMarker(-1), h.setFeatures(void 0, void 0, !1));
  });
  function wi(L) {
    if (t(17, We = !1), lt && (clearTimeout(lt), lt = void 0), Y > -1 && q)
      t(14, G = q[Y]), t(1, T = G.place_type[0] === "reverse" ? G.place_name : G.place_name.replace(/,.*/, "")), t(19, Re = void 0), t(64, le = void 0), t(15, Y = -1);
    else if (T) {
      const ne = L || !Kt(T);
      Yt(T, { exact: !0 }).then(() => {
        t(64, le = q), t(14, G = void 0), ne && Cn();
      }).catch((oe) => t(19, Re = oe));
    }
  }
  function Kt(L) {
    try {
      return ns(L, 6);
    } catch {
      return !1;
    }
  }
  async function Yt(L, { byId: ne = !1, exact: oe = !1 } = {}) {
    var we, Pe, Ze;
    t(19, Re = void 0), et == null || et.abort();
    const ve = new AbortController();
    t(20, et = ve);
    try {
      const Q = Kt(L), gt = new URL(he + "/" + encodeURIComponent(Q ? Q.decimalLongitude + "," + Q.decimalLatitude : L) + ".json"), _e = gt.searchParams;
      o !== void 0 && _e.set("language", Array.isArray(o) ? o.join(",") : o ?? "");
      const [Jt] = (h == null ? void 0 : h.getCenterAndZoom()) ?? [];
      let Ie = (we = !Q || Ge === ce ? Z : Ge) == null ? void 0 : we.map((me) => typeof me == "string" ? me : Jt === void 0 || (me[0] ?? 0) <= Jt && Jt < (me[1] ?? 1 / 0) ? me[2] : void 0).filter((me) => me !== void 0);
      Ie && (Ie = [...new Set(Ie)], _e.set("types", Ie.join(",")));
      const _i = !Q || Oe === be ? $e : Oe;
      if (_i && _e.set("excludeTypes", String(_i)), _ && _e.set("bbox", _.map((me) => me.toFixed(6)).join(",")), I && _e.set("country", Array.isArray(I) ? I.join(",") : I), !ne && !Q) {
        const me = await Hr(h, y, ve);
        me && _e.set("proximity", me), (oe || !V) && _e.set("autocomplete", "false"), _e.set("fuzzyMatch", String(A));
      }
      const mt = g === f ? l : g;
      mt !== void 0 && mt > 1 && (Ie == null ? void 0 : Ie.length) !== 1 && console.warn("For reverse geocoding when limit > 1 then types must contain single value."), Q ? (mt === 1 || mt !== void 0 && (Je || (Ie == null ? void 0 : Ie.length) === 1)) && _e.set("limit", String(mt)) : l !== void 0 && _e.set("limit", String(l)), v && _e.set("key", v), Vt(_e), Ht(gt);
      const Zn = gt.searchParams.get("types") === "" && gt.searchParams.get("excludeTypes") !== "true", kt = gt.toString();
      if (kt === vi) {
        ne ? (N && t(13, q = void 0), t(14, G = Nt[0])) : (t(13, q = Nt), ((Pe = q[Y]) == null ? void 0 : Pe.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1));
        return;
      }
      vi = kt;
      let pt;
      if (Zn)
        pt = { type: "FeatureCollection", features: [] };
      else {
        const me = await fetch(kt, { signal: ve.signal, ...J });
        if (!me.ok)
          throw new Error(await me.text());
        pt = await me.json();
      }
      He("response", { url: kt, featureCollection: pt }), ne ? (N && t(13, q = void 0), t(14, G = pt.features[0]), Nt = [G]) : (t(13, q = pt.features.filter(D)), Q && q.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + Q.decimalLongitude + "_" + Q.decimalLatitude,
        text: Q.decimalLatitude + ", " + Q.decimalLongitude,
        place_name: Q.decimalLatitude + ", " + Q.decimalLongitude,
        place_type: ["reverse"],
        center: [Q.decimalLongitude, Q.decimalLatitude],
        bbox: [
          Q.decimalLongitude,
          Q.decimalLatitude,
          Q.decimalLongitude,
          Q.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [Q.decimalLongitude, Q.decimalLatitude]
        }
      }), Nt = q, ((Ze = q[Y]) == null ? void 0 : Ze.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1), Q && Ne.focus());
    } catch (Q) {
      if (Q && typeof Q == "object" && "name" in Q && Q.name === "AbortError")
        return;
      throw Q;
    } finally {
      ve === et && t(20, et = void 0);
    }
  }
  function Cn() {
    var ve;
    if (!(le != null && le.length) || !F)
      return;
    const L = [180, 90, -180, -90], ne = !le.some((we) => !we.matching_text);
    let oe;
    for (const we of le) {
      const Pe = dt(we);
      if (oe = oe === void 0 ? Pe : Pe === void 0 ? oe : Math.max(oe, Pe), ne || !we.matching_text)
        for (const Ze of [0, 1, 2, 3])
          L[Ze] = Math[Ze < 2 ? "min" : "max"](L[Ze], ((ve = we.bbox) == null ? void 0 : ve[Ze]) ?? we.center[Ze % 2]);
    }
    h && le.length > 0 && (G && L[0] === L[2] && L[1] === L[3] ? h.flyTo(G.center, dt(G)) : h.fitBounds(zt(L), 50, oe));
  }
  function Qt() {
    !G || !h || (!G.bbox || G.bbox[0] === G.bbox[2] && G.bbox[1] === G.bbox[3] ? h.flyTo(G.center, dt(G)) : h.fitBounds(zt(G.bbox), 50, dt(G)));
  }
  function dt(L) {
    var oe;
    if (!L.bbox || L.bbox[0] !== L.bbox[2] && L.bbox[1] !== L.bbox[3])
      return;
    const ne = L.id.replace(/\..*/, "");
    return (Array.isArray((oe = L.properties) == null ? void 0 : oe.categories) ? L.properties.categories.reduce(
      (ve, we) => {
        const Pe = ge[ne + "." + we];
        return ve === void 0 ? Pe : Pe === void 0 ? ve : Math.max(ve, Pe);
      },
      void 0
    ) : void 0) ?? ge[ne];
  }
  function On(L) {
    t(0, w = W === "always"), t(13, q = void 0), t(14, G = void 0), t(15, Y = -1), bi(L[1].toFixed(6) + ", " + Vr(L[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function Rn(L) {
    if (!q)
      return;
    let ne = L.key === "ArrowDown" ? 1 : L.key === "ArrowUp" ? -1 : 0;
    ne && (Ne.focus(), t(17, We = !0), L.preventDefault(), G && Y === -1 && t(15, Y = q.findIndex((oe) => oe.id === (G == null ? void 0 : G.id))), Y === (G || K ? 0 : -1) && ne === -1 && t(15, Y = q.length), t(15, Y += ne), Y >= q.length && t(15, Y = -1), Y < 0 && (G || K) && t(15, Y = 0));
  }
  function Ei(L, ne = !0, oe = !1) {
    if (t(19, Re = void 0), t(14, G = void 0), t(17, We = !0), V || oe) {
      if (lt && clearTimeout(lt), T.length < d)
        return;
      const ve = T;
      lt = window.setTimeout(
        () => {
          Yt(ve).catch((we) => t(19, Re = we));
        },
        ne ? S : 0
      );
    } else
      t(13, q = void 0), t(19, Re = void 0);
  }
  function Xt(L) {
    G && (G == null ? void 0 : G.id) === (L == null ? void 0 : L.id) ? Qt() : (t(14, G = L), t(1, T = L.place_name));
  }
  function Li(L) {
    t(15, Y = L);
  }
  function Pn() {
    (!K || G) && t(15, Y = -1), te && Qt();
  }
  const In = () => Ne.focus();
  function An(L) {
    si[L ? "unshift" : "push"](() => {
      Ne = L, t(18, Ne);
    });
  }
  function Bn() {
    T = this.value, t(1, T), t(17, We), t(31, C), t(16, ut);
  }
  const Gn = () => t(17, We = !0), Wn = () => t(17, We = !1), zn = () => t(17, We = !0), Dn = () => t(14, G = void 0), Fn = () => {
    t(1, T = ""), t(14, G = void 0), Ne.focus();
  }, Un = () => t(0, w = !w), qn = () => t(19, Re = void 0), jn = (L) => Li(L), Vn = (L) => Xt(L), Hn = () => {
  };
  return i.$$set = (L) => {
    "class" in L && t(2, c = L.class), "apiKey" in L && t(29, v = L.apiKey), "bbox" in L && t(30, _ = L.bbox), "clearButtonTitle" in L && t(3, M = L.clearButtonTitle), "clearOnBlur" in L && t(31, C = L.clearOnBlur), "clearListOnPick" in L && t(32, N = L.clearListOnPick), "keepListOpen" in L && t(4, k = L.keepListOpen), "collapsed" in L && t(5, R = L.collapsed), "country" in L && t(33, I = L.country), "debounceSearch" in L && t(34, S = L.debounceSearch), "enableReverse" in L && t(6, W = L.enableReverse), "errorMessage" in L && t(7, z = L.errorMessage), "filter" in L && t(35, D = L.filter), "flyTo" in L && t(36, F = L.flyTo), "fuzzyMatch" in L && t(37, A = L.fuzzyMatch), "language" in L && t(38, o = L.language), "limit" in L && t(39, l = L.limit), "reverseGeocodingLimit" in L && t(40, g = L.reverseGeocodingLimit), "mapController" in L && t(41, h = L.mapController), "minLength" in L && t(42, d = L.minLength), "noResultsMessage" in L && t(8, b = L.noResultsMessage), "placeholder" in L && t(9, p = L.placeholder), "proximity" in L && t(43, y = L.proximity), "reverseActive" in L && t(0, w = L.reverseActive), "reverseButtonTitle" in L && t(10, E = L.reverseButtonTitle), "searchValue" in L && t(1, T = L.searchValue), "pickedResultStyle" in L && t(44, P = L.pickedResultStyle), "showPlaceType" in L && t(11, B = L.showPlaceType), "showResultsWhileTyping" in L && t(45, V = L.showResultsWhileTyping), "selectFirst" in L && t(46, K = L.selectFirst), "flyToSelected" in L && t(47, te = L.flyToSelected), "markerOnSelected" in L && t(48, j = L.markerOnSelected), "types" in L && t(49, Z = L.types), "reverseGeocodingTypes" in L && t(50, Ge = L.reverseGeocodingTypes), "exhaustiveReverseGeocoding" in L && t(51, Je = L.exhaustiveReverseGeocoding), "excludeTypes" in L && t(52, $e = L.excludeTypes), "reverseGeocodingExcludeTypes" in L && t(53, Oe = L.reverseGeocodingExcludeTypes), "zoom" in L && t(54, ge = L.zoom), "apiUrl" in L && t(55, he = L.apiUrl), "fetchParameters" in L && t(56, J = L.fetchParameters), "iconsBaseUrl" in L && t(12, yi = L.iconsBaseUrl), "adjustUrlQuery" in L && t(57, Vt = L.adjustUrlQuery), "adjustUrl" in L && t(58, Ht = L.adjustUrl), "$$scope" in L && t(69, s = L.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    64 && t(0, w = W === "always"), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && P !== "marker-only" && G && !G.address && G.geometry.type === "Point" && G.place_type[0] !== "reverse" && Yt(G.id, { byId: !0 }).catch((L) => t(19, Re = L)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, flyTo, clearListOnPick*/
    1058 | i.$$.dirty[2] & /*prevIdToFly*/
    8 && (h && G && G.id !== Zt && F && (Qt(), N && t(13, q = void 0), t(64, le = void 0), t(15, Y = -1)), t(65, Zt = G == null ? void 0 : G.id)), i.$$.dirty[0] & /*focused, focusedDelayed*/
    196608 | i.$$.dirty[1] & /*clearOnBlur*/
    1 && setTimeout(() => {
      t(16, ut = We), C && !ut && t(1, T = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    2048 && T.length < d && (t(13, q = void 0), t(19, Re = void 0), t(64, le = q)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex, picked*/
    57344 | i.$$.dirty[1] & /*selectFirst*/
    32768 && K && q != null && q.length && Y == -1 && !G && t(15, Y = 0), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[2] & /*markedFeatures*/
    4 && le !== q && t(64, le = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    73729 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && h && h.setEventHandler((L) => {
      switch (L.type) {
        case "mapClick":
          w && On(L.coordinates);
          break;
        case "markerClick":
          {
            const ne = q == null ? void 0 : q.find((oe) => oe.id === L.id);
            ne && Xt(ne);
          }
          break;
        case "markerMouseEnter":
          le && t(15, Y = ut ? (q == null ? void 0 : q.findIndex((ne) => ne.id === L.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          le && t(15, Y = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    40960 && t(66, r = q == null ? void 0 : q[Y]), i.$$.dirty[1] & /*mapController, flyTo, flyToSelected*/
    66592 | i.$$.dirty[2] & /*selected*/
    16 && h && r && F && te && h.flyTo(r.center, dt(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && t(68, n = P === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    132096 | i.$$.dirty[2] & /*showPolygonMarker*/
    64 && (j || h == null || h.setFeatures(void 0, void 0, n)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, markerOnSelected*/
    132096 | i.$$.dirty[2] & /*markedFeatures, selected, showPolygonMarker*/
    84 && h && j && !le && (h.setFeatures(r ? [r] : void 0, G, n), h.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures, showPolygonMarker*/
    68 && h && h.setFeatures(le, G, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && le && h && h.setSelectedMarker(Y), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    1024 && h) {
      const L = Kt(T);
      h.setReverseMarker(L ? [L.decimalLongitude, L.decimalLatitude] : void 0);
    }
    i.$$.dirty[2] & /*selected*/
    16 && He("select", { feature: r }), i.$$.dirty[0] & /*picked*/
    16384 && He("pick", { feature: G }), i.$$.dirty[0] & /*listFeatures, focusedDelayed, keepListOpen*/
    73744 && t(67, u = !!(q != null && q.length) && (ut || k)), i.$$.dirty[2] & /*optionsVisible*/
    32 && He("optionsvisibilitychange", { optionsVisible: u }), i.$$.dirty[0] & /*listFeatures*/
    8192 && He("featureslisted", { features: q }), i.$$.dirty[2] & /*markedFeatures*/
    4 && He("featuresmarked", { features: le }), i.$$.dirty[0] & /*reverseActive*/
    1 && He("reversetoggle", { reverse: w }), i.$$.dirty[0] & /*searchValue*/
    2 && He("querychange", { query: T }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    1024 && h && h.indicateReverse(w);
  }, [
    w,
    T,
    c,
    M,
    k,
    R,
    W,
    z,
    b,
    p,
    E,
    B,
    yi,
    q,
    G,
    Y,
    ut,
    We,
    Ne,
    Re,
    et,
    kn,
    wi,
    Rn,
    Ei,
    Xt,
    Li,
    Pn,
    m,
    v,
    _,
    C,
    N,
    I,
    S,
    D,
    F,
    A,
    o,
    l,
    g,
    h,
    d,
    y,
    P,
    V,
    K,
    te,
    j,
    Z,
    Ge,
    Je,
    $e,
    Oe,
    ge,
    he,
    J,
    Vt,
    Ht,
    xn,
    Tn,
    bi,
    Mn,
    Nn,
    le,
    Zt,
    r,
    u,
    n,
    s,
    a,
    In,
    An,
    Bn,
    Gn,
    Wn,
    zn,
    Dn,
    Fn,
    Un,
    qn,
    jn,
    Vn,
    Hn
  ];
}
let fs = class extends ot {
  constructor(e) {
    super(), st(
      this,
      e,
      as,
      us,
      rt,
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
};
function Dt(i, e, t = {}) {
  const n = { type: "Feature" };
  return (t.id === 0 || t.id) && (n.id = t.id), t.bbox && (n.bbox = t.bbox), n.properties = e || {}, n.geometry = i, n;
}
function mi(i, e, t = {}) {
  for (const r of i) {
    if (r.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (r[r.length - 1].length !== r[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let u = 0; u < r[r.length - 1].length; u++)
      if (r[r.length - 1][u] !== r[0][u])
        throw new Error("First and last Position are not equivalent.");
  }
  return Dt({
    type: "Polygon",
    coordinates: i
  }, e, t);
}
function ai(i, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = i, t;
}
function bn(i, e, t = {}) {
  return Dt({
    type: "MultiPolygon",
    coordinates: i
  }, e, t);
}
function vn(i, e, t) {
  if (i !== null)
    for (var n, r, u, a, s, m, c, v = 0, _ = 0, M, C = i.type, N = C === "FeatureCollection", k = C === "Feature", R = N ? i.features.length : 1, I = 0; I < R; I++) {
      c = N ? i.features[I].geometry : k ? i.geometry : i, M = c ? c.type === "GeometryCollection" : !1, s = M ? c.geometries.length : 1;
      for (var S = 0; S < s; S++) {
        var W = 0, z = 0;
        if (a = M ? c.geometries[S] : c, a !== null) {
          m = a.coordinates;
          var D = a.type;
          switch (v = 0, D) {
            case null:
              break;
            case "Point":
              if (e(
                m,
                _,
                I,
                W,
                z
              ) === !1)
                return !1;
              _++, W++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < m.length; n++) {
                if (e(
                  m[n],
                  _,
                  I,
                  W,
                  z
                ) === !1)
                  return !1;
                _++, D === "MultiPoint" && W++;
              }
              D === "LineString" && W++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < m.length; n++) {
                for (r = 0; r < m[n].length - v; r++) {
                  if (e(
                    m[n][r],
                    _,
                    I,
                    W,
                    z
                  ) === !1)
                    return !1;
                  _++;
                }
                D === "MultiLineString" && W++, D === "Polygon" && z++;
              }
              D === "Polygon" && W++;
              break;
            case "MultiPolygon":
              for (n = 0; n < m.length; n++) {
                for (z = 0, r = 0; r < m[n].length; r++) {
                  for (u = 0; u < m[n][r].length - v; u++) {
                    if (e(
                      m[n][r][u],
                      _,
                      I,
                      W,
                      z
                    ) === !1)
                      return !1;
                    _++;
                  }
                  z++;
                }
                W++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < a.geometries.length; n++)
                if (vn(a.geometries[n], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function pi(i, e) {
  var t, n, r, u, a, s, m, c, v, _, M = 0, C = i.type === "FeatureCollection", N = i.type === "Feature", k = C ? i.features.length : 1;
  for (t = 0; t < k; t++) {
    for (s = C ? i.features[t].geometry : N ? i.geometry : i, c = C ? i.features[t].properties : N ? i.properties : {}, v = C ? i.features[t].bbox : N ? i.bbox : void 0, _ = C ? i.features[t].id : N ? i.id : void 0, m = s ? s.type === "GeometryCollection" : !1, a = m ? s.geometries.length : 1, r = 0; r < a; r++) {
      if (u = m ? s.geometries[r] : s, u === null) {
        if (e(
          null,
          M,
          c,
          v,
          _
        ) === !1)
          return !1;
        continue;
      }
      switch (u.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (e(
            u,
            M,
            c,
            v,
            _
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (n = 0; n < u.geometries.length; n++)
            if (e(
              u.geometries[n],
              M,
              c,
              v,
              _
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    M++;
  }
}
function cs(i, e) {
  pi(i, function(t, n, r, u, a) {
    var s = t === null ? null : t.type;
    switch (s) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          Dt(t, r, { bbox: u, id: a }),
          n,
          0
        ) === !1 ? !1 : void 0;
    }
    var m;
    switch (s) {
      case "MultiPoint":
        m = "Point";
        break;
      case "MultiLineString":
        m = "LineString";
        break;
      case "MultiPolygon":
        m = "Polygon";
        break;
    }
    for (var c = 0; c < t.coordinates.length; c++) {
      var v = t.coordinates[c], _ = {
        type: m,
        coordinates: v
      };
      if (e(Dt(_, r), n, c) === !1)
        return !1;
    }
  });
}
function hs(i, e = {}) {
  if (i.bbox != null && e.recompute !== !0)
    return i.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return vn(i, (n) => {
    t[0] > n[0] && (t[0] = n[0]), t[1] > n[1] && (t[1] = n[1]), t[2] < n[0] && (t[2] = n[0]), t[3] < n[1] && (t[3] = n[1]);
  }), t;
}
var Qi = hs, ds = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, ni = Math.ceil, Te = Math.floor, ye = "[BigNumber Error] ", Xi = ye + "Number primitive has more than 15 significant digits: ", ke = 1e14, U = 14, Ji = 9007199254740991, ri = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Ke = 1e7, Ee = 1e9;
function wn(i) {
  var e, t, n, r = S.prototype = { constructor: S, toString: null, valueOf: null }, u = new S(1), a = 20, s = 4, m = -7, c = 21, v = -1e7, _ = 1e7, M = !1, C = 1, N = 0, k = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, R = "0123456789abcdefghijklmnopqrstuvwxyz", I = !0;
  function S(o, l) {
    var f, g, h, d, b, p, y, w, E = this;
    if (!(E instanceof S)) return new S(o, l);
    if (l == null) {
      if (o && o._isBigNumber === !0) {
        E.s = o.s, !o.c || o.e > _ ? E.c = E.e = null : o.e < v ? E.c = [E.e = 0] : (E.e = o.e, E.c = o.c.slice());
        return;
      }
      if ((p = typeof o == "number") && o * 0 == 0) {
        if (E.s = 1 / o < 0 ? (o = -o, -1) : 1, o === ~~o) {
          for (d = 0, b = o; b >= 10; b /= 10, d++) ;
          d > _ ? E.c = E.e = null : (E.e = d, E.c = [o]);
          return;
        }
        w = String(o);
      } else {
        if (!ds.test(w = String(o))) return n(E, w, p);
        E.s = w.charCodeAt(0) == 45 ? (w = w.slice(1), -1) : 1;
      }
      (d = w.indexOf(".")) > -1 && (w = w.replace(".", "")), (b = w.search(/e/i)) > 0 ? (d < 0 && (d = b), d += +w.slice(b + 1), w = w.substring(0, b)) : d < 0 && (d = w.length);
    } else {
      if (re(l, 2, R.length, "Base"), l == 10 && I)
        return E = new S(o), F(E, a + E.e + 1, s);
      if (w = String(o), p = typeof o == "number") {
        if (o * 0 != 0) return n(E, w, p, l);
        if (E.s = 1 / o < 0 ? (w = w.slice(1), -1) : 1, S.DEBUG && w.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Xi + o);
      } else
        E.s = w.charCodeAt(0) === 45 ? (w = w.slice(1), -1) : 1;
      for (f = R.slice(0, l), d = b = 0, y = w.length; b < y; b++)
        if (f.indexOf(g = w.charAt(b)) < 0) {
          if (g == ".") {
            if (b > d) {
              d = y;
              continue;
            }
          } else if (!h && (w == w.toUpperCase() && (w = w.toLowerCase()) || w == w.toLowerCase() && (w = w.toUpperCase()))) {
            h = !0, b = -1, d = 0;
            continue;
          }
          return n(E, String(o), p, l);
        }
      p = !1, w = t(w, l, 10, E.s), (d = w.indexOf(".")) > -1 ? w = w.replace(".", "") : d = w.length;
    }
    for (b = 0; w.charCodeAt(b) === 48; b++) ;
    for (y = w.length; w.charCodeAt(--y) === 48; ) ;
    if (w = w.slice(b, ++y)) {
      if (y -= b, p && S.DEBUG && y > 15 && (o > Ji || o !== Te(o)))
        throw Error(Xi + E.s * o);
      if ((d = d - b - 1) > _)
        E.c = E.e = null;
      else if (d < v)
        E.c = [E.e = 0];
      else {
        if (E.e = d, E.c = [], b = (d + 1) % U, d < 0 && (b += U), b < y) {
          for (b && E.c.push(+w.slice(0, b)), y -= U; b < y; )
            E.c.push(+w.slice(b, b += U));
          b = U - (w = w.slice(b)).length;
        } else
          b -= y;
        for (; b--; w += "0") ;
        E.c.push(+w);
      }
    } else
      E.c = [E.e = 0];
  }
  S.clone = wn, S.ROUND_UP = 0, S.ROUND_DOWN = 1, S.ROUND_CEIL = 2, S.ROUND_FLOOR = 3, S.ROUND_HALF_UP = 4, S.ROUND_HALF_DOWN = 5, S.ROUND_HALF_EVEN = 6, S.ROUND_HALF_CEIL = 7, S.ROUND_HALF_FLOOR = 8, S.EUCLID = 9, S.config = S.set = function(o) {
    var l, f;
    if (o != null)
      if (typeof o == "object") {
        if (o.hasOwnProperty(l = "DECIMAL_PLACES") && (f = o[l], re(f, 0, Ee, l), a = f), o.hasOwnProperty(l = "ROUNDING_MODE") && (f = o[l], re(f, 0, 8, l), s = f), o.hasOwnProperty(l = "EXPONENTIAL_AT") && (f = o[l], f && f.pop ? (re(f[0], -1e9, 0, l), re(f[1], 0, Ee, l), m = f[0], c = f[1]) : (re(f, -1e9, Ee, l), m = -(c = f < 0 ? -f : f))), o.hasOwnProperty(l = "RANGE"))
          if (f = o[l], f && f.pop)
            re(f[0], -1e9, -1, l), re(f[1], 1, Ee, l), v = f[0], _ = f[1];
          else if (re(f, -1e9, Ee, l), f)
            v = -(_ = f < 0 ? -f : f);
          else
            throw Error(ye + l + " cannot be zero: " + f);
        if (o.hasOwnProperty(l = "CRYPTO"))
          if (f = o[l], f === !!f)
            if (f)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                M = f;
              else
                throw M = !f, Error(ye + "crypto unavailable");
            else
              M = f;
          else
            throw Error(ye + l + " not true or false: " + f);
        if (o.hasOwnProperty(l = "MODULO_MODE") && (f = o[l], re(f, 0, 9, l), C = f), o.hasOwnProperty(l = "POW_PRECISION") && (f = o[l], re(f, 0, Ee, l), N = f), o.hasOwnProperty(l = "FORMAT"))
          if (f = o[l], typeof f == "object") k = f;
          else throw Error(ye + l + " not an object: " + f);
        if (o.hasOwnProperty(l = "ALPHABET"))
          if (f = o[l], typeof f == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(f))
            I = f.slice(0, 10) == "0123456789", R = f;
          else
            throw Error(ye + l + " invalid: " + f);
      } else
        throw Error(ye + "Object expected: " + o);
    return {
      DECIMAL_PLACES: a,
      ROUNDING_MODE: s,
      EXPONENTIAL_AT: [m, c],
      RANGE: [v, _],
      CRYPTO: M,
      MODULO_MODE: C,
      POW_PRECISION: N,
      FORMAT: k,
      ALPHABET: R
    };
  }, S.isBigNumber = function(o) {
    if (!o || o._isBigNumber !== !0) return !1;
    if (!S.DEBUG) return !0;
    var l, f, g = o.c, h = o.e, d = o.s;
    e: if ({}.toString.call(g) == "[object Array]") {
      if ((d === 1 || d === -1) && h >= -1e9 && h <= Ee && h === Te(h)) {
        if (g[0] === 0) {
          if (h === 0 && g.length === 1) return !0;
          break e;
        }
        if (l = (h + 1) % U, l < 1 && (l += U), String(g[0]).length == l) {
          for (l = 0; l < g.length; l++)
            if (f = g[l], f < 0 || f >= ke || f !== Te(f)) break e;
          if (f !== 0) return !0;
        }
      }
    } else if (g === null && h === null && (d === null || d === 1 || d === -1))
      return !0;
    throw Error(ye + "Invalid BigNumber: " + o);
  }, S.maximum = S.max = function() {
    return z(arguments, -1);
  }, S.minimum = S.min = function() {
    return z(arguments, 1);
  }, S.random = function() {
    var o = 9007199254740992, l = Math.random() * o & 2097151 ? function() {
      return Te(Math.random() * o);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(f) {
      var g, h, d, b, p, y = 0, w = [], E = new S(u);
      if (f == null ? f = a : re(f, 0, Ee), b = ni(f / U), M)
        if (crypto.getRandomValues) {
          for (g = crypto.getRandomValues(new Uint32Array(b *= 2)); y < b; )
            p = g[y] * 131072 + (g[y + 1] >>> 11), p >= 9e15 ? (h = crypto.getRandomValues(new Uint32Array(2)), g[y] = h[0], g[y + 1] = h[1]) : (w.push(p % 1e14), y += 2);
          y = b / 2;
        } else if (crypto.randomBytes) {
          for (g = crypto.randomBytes(b *= 7); y < b; )
            p = (g[y] & 31) * 281474976710656 + g[y + 1] * 1099511627776 + g[y + 2] * 4294967296 + g[y + 3] * 16777216 + (g[y + 4] << 16) + (g[y + 5] << 8) + g[y + 6], p >= 9e15 ? crypto.randomBytes(7).copy(g, y) : (w.push(p % 1e14), y += 7);
          y = b / 7;
        } else
          throw M = !1, Error(ye + "crypto unavailable");
      if (!M)
        for (; y < b; )
          p = l(), p < 9e15 && (w[y++] = p % 1e14);
      for (b = w[--y], f %= U, b && f && (p = ri[U - f], w[y] = Te(b / p) * p); w[y] === 0; w.pop(), y--) ;
      if (y < 0)
        w = [d = 0];
      else {
        for (d = -1; w[0] === 0; w.splice(0, 1), d -= U) ;
        for (y = 1, p = w[0]; p >= 10; p /= 10, y++) ;
        y < U && (d -= U - y);
      }
      return E.e = d, E.c = w, E;
    };
  }(), S.sum = function() {
    for (var o = 1, l = arguments, f = new S(l[0]); o < l.length; ) f = f.plus(l[o++]);
    return f;
  }, t = /* @__PURE__ */ function() {
    var o = "0123456789";
    function l(f, g, h, d) {
      for (var b, p = [0], y, w = 0, E = f.length; w < E; ) {
        for (y = p.length; y--; p[y] *= g) ;
        for (p[0] += d.indexOf(f.charAt(w++)), b = 0; b < p.length; b++)
          p[b] > h - 1 && (p[b + 1] == null && (p[b + 1] = 0), p[b + 1] += p[b] / h | 0, p[b] %= h);
      }
      return p.reverse();
    }
    return function(f, g, h, d, b) {
      var p, y, w, E, T, P, B, V, K = f.indexOf("."), te = a, j = s;
      for (K >= 0 && (E = N, N = 0, f = f.replace(".", ""), V = new S(g), P = V.pow(f.length - K), N = E, V.c = l(
        De(xe(P.c), P.e, "0"),
        10,
        h,
        o
      ), V.e = V.c.length), B = l(f, g, h, b ? (p = R, o) : (p = o, R)), w = E = B.length; B[--E] == 0; B.pop()) ;
      if (!B[0]) return p.charAt(0);
      if (K < 0 ? --w : (P.c = B, P.e = w, P.s = d, P = e(P, V, te, j, h), B = P.c, T = P.r, w = P.e), y = w + te + 1, K = B[y], E = h / 2, T = T || y < 0 || B[y + 1] != null, T = j < 4 ? (K != null || T) && (j == 0 || j == (P.s < 0 ? 3 : 2)) : K > E || K == E && (j == 4 || T || j == 6 && B[y - 1] & 1 || j == (P.s < 0 ? 8 : 7)), y < 1 || !B[0])
        f = T ? De(p.charAt(1), -te, p.charAt(0)) : p.charAt(0);
      else {
        if (B.length = y, T)
          for (--h; ++B[--y] > h; )
            B[y] = 0, y || (++w, B = [1].concat(B));
        for (E = B.length; !B[--E]; ) ;
        for (K = 0, f = ""; K <= E; f += p.charAt(B[K++])) ;
        f = De(f, w, p.charAt(0));
      }
      return f;
    };
  }(), e = /* @__PURE__ */ function() {
    function o(g, h, d) {
      var b, p, y, w, E = 0, T = g.length, P = h % Ke, B = h / Ke | 0;
      for (g = g.slice(); T--; )
        y = g[T] % Ke, w = g[T] / Ke | 0, b = B * y + w * P, p = P * y + b % Ke * Ke + E, E = (p / d | 0) + (b / Ke | 0) + B * w, g[T] = p % d;
      return E && (g = [E].concat(g)), g;
    }
    function l(g, h, d, b) {
      var p, y;
      if (d != b)
        y = d > b ? 1 : -1;
      else
        for (p = y = 0; p < d; p++)
          if (g[p] != h[p]) {
            y = g[p] > h[p] ? 1 : -1;
            break;
          }
      return y;
    }
    function f(g, h, d, b) {
      for (var p = 0; d--; )
        g[d] -= p, p = g[d] < h[d] ? 1 : 0, g[d] = p * b + g[d] - h[d];
      for (; !g[0] && g.length > 1; g.splice(0, 1)) ;
    }
    return function(g, h, d, b, p) {
      var y, w, E, T, P, B, V, K, te, j, Z, ce, Ge, Je, $e, be, Oe, ge = g.s == h.s ? 1 : -1, he = g.c, J = h.c;
      if (!he || !he[0] || !J || !J[0])
        return new S(
          // Return NaN if either NaN, or both Infinity or 0.
          !g.s || !h.s || (he ? J && he[0] == J[0] : !J) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            he && he[0] == 0 || !J ? ge * 0 : ge / 0
          )
        );
      for (K = new S(ge), te = K.c = [], w = g.e - h.e, ge = d + w + 1, p || (p = ke, w = Me(g.e / U) - Me(h.e / U), ge = ge / U | 0), E = 0; J[E] == (he[E] || 0); E++) ;
      if (J[E] > (he[E] || 0) && w--, ge < 0)
        te.push(1), T = !0;
      else {
        for (Je = he.length, be = J.length, E = 0, ge += 2, P = Te(p / (J[0] + 1)), P > 1 && (J = o(J, P, p), he = o(he, P, p), be = J.length, Je = he.length), Ge = be, j = he.slice(0, be), Z = j.length; Z < be; j[Z++] = 0) ;
        Oe = J.slice(), Oe = [0].concat(Oe), $e = J[0], J[1] >= p / 2 && $e++;
        do {
          if (P = 0, y = l(J, j, be, Z), y < 0) {
            if (ce = j[0], be != Z && (ce = ce * p + (j[1] || 0)), P = Te(ce / $e), P > 1)
              for (P >= p && (P = p - 1), B = o(J, P, p), V = B.length, Z = j.length; l(B, j, V, Z) == 1; )
                P--, f(B, be < V ? Oe : J, V, p), V = B.length, y = 1;
            else
              P == 0 && (y = P = 1), B = J.slice(), V = B.length;
            if (V < Z && (B = [0].concat(B)), f(j, B, Z, p), Z = j.length, y == -1)
              for (; l(J, j, be, Z) < 1; )
                P++, f(j, be < Z ? Oe : J, Z, p), Z = j.length;
          } else y === 0 && (P++, j = [0]);
          te[E++] = P, j[0] ? j[Z++] = he[Ge] || 0 : (j = [he[Ge]], Z = 1);
        } while ((Ge++ < Je || j[0] != null) && ge--);
        T = j[0] != null, te[0] || te.splice(0, 1);
      }
      if (p == ke) {
        for (E = 1, ge = te[0]; ge >= 10; ge /= 10, E++) ;
        F(K, d + (K.e = E + w * U - 1) + 1, b, T);
      } else
        K.e = w, K.r = +T;
      return K;
    };
  }();
  function W(o, l, f, g) {
    var h, d, b, p, y;
    if (f == null ? f = s : re(f, 0, 8), !o.c) return o.toString();
    if (h = o.c[0], b = o.e, l == null)
      y = xe(o.c), y = g == 1 || g == 2 && (b <= m || b >= c) ? It(y, b) : De(y, b, "0");
    else if (o = F(new S(o), l, f), d = o.e, y = xe(o.c), p = y.length, g == 1 || g == 2 && (l <= d || d <= m)) {
      for (; p < l; y += "0", p++) ;
      y = It(y, d);
    } else if (l -= b, y = De(y, d, "0"), d + 1 > p) {
      if (--l > 0) for (y += "."; l--; y += "0") ;
    } else if (l += d - p, l > 0)
      for (d + 1 == p && (y += "."); l--; y += "0") ;
    return o.s < 0 && h ? "-" + y : y;
  }
  function z(o, l) {
    for (var f, g, h = 1, d = new S(o[0]); h < o.length; h++)
      g = new S(o[h]), (!g.s || (f = tt(d, g)) === l || f === 0 && d.s === l) && (d = g);
    return d;
  }
  function D(o, l, f) {
    for (var g = 1, h = l.length; !l[--h]; l.pop()) ;
    for (h = l[0]; h >= 10; h /= 10, g++) ;
    return (f = g + f * U - 1) > _ ? o.c = o.e = null : f < v ? o.c = [o.e = 0] : (o.e = f, o.c = l), o;
  }
  n = /* @__PURE__ */ function() {
    var o = /^(-?)0([xbo])(?=\w[\w.]*$)/i, l = /^([^.]+)\.$/, f = /^\.([^.]+)$/, g = /^-?(Infinity|NaN)$/, h = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(d, b, p, y) {
      var w, E = p ? b : b.replace(h, "");
      if (g.test(E))
        d.s = isNaN(E) ? null : E < 0 ? -1 : 1;
      else {
        if (!p && (E = E.replace(o, function(T, P, B) {
          return w = (B = B.toLowerCase()) == "x" ? 16 : B == "b" ? 2 : 8, !y || y == w ? P : T;
        }), y && (w = y, E = E.replace(l, "$1").replace(f, "0.$1")), b != E))
          return new S(E, w);
        if (S.DEBUG)
          throw Error(ye + "Not a" + (y ? " base " + y : "") + " number: " + b);
        d.s = null;
      }
      d.c = d.e = null;
    };
  }();
  function F(o, l, f, g) {
    var h, d, b, p, y, w, E, T = o.c, P = ri;
    if (T) {
      e: {
        for (h = 1, p = T[0]; p >= 10; p /= 10, h++) ;
        if (d = l - h, d < 0)
          d += U, b = l, y = T[w = 0], E = Te(y / P[h - b - 1] % 10);
        else if (w = ni((d + 1) / U), w >= T.length)
          if (g) {
            for (; T.length <= w; T.push(0)) ;
            y = E = 0, h = 1, d %= U, b = d - U + 1;
          } else
            break e;
        else {
          for (y = p = T[w], h = 1; p >= 10; p /= 10, h++) ;
          d %= U, b = d - U + h, E = b < 0 ? 0 : Te(y / P[h - b - 1] % 10);
        }
        if (g = g || l < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        T[w + 1] != null || (b < 0 ? y : y % P[h - b - 1]), g = f < 4 ? (E || g) && (f == 0 || f == (o.s < 0 ? 3 : 2)) : E > 5 || E == 5 && (f == 4 || g || f == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (d > 0 ? b > 0 ? y / P[h - b] : 0 : T[w - 1]) % 10 & 1 || f == (o.s < 0 ? 8 : 7)), l < 1 || !T[0])
          return T.length = 0, g ? (l -= o.e + 1, T[0] = P[(U - l % U) % U], o.e = -l || 0) : T[0] = o.e = 0, o;
        if (d == 0 ? (T.length = w, p = 1, w--) : (T.length = w + 1, p = P[U - d], T[w] = b > 0 ? Te(y / P[h - b] % P[b]) * p : 0), g)
          for (; ; )
            if (w == 0) {
              for (d = 1, b = T[0]; b >= 10; b /= 10, d++) ;
              for (b = T[0] += p, p = 1; b >= 10; b /= 10, p++) ;
              d != p && (o.e++, T[0] == ke && (T[0] = 1));
              break;
            } else {
              if (T[w] += p, T[w] != ke) break;
              T[w--] = 0, p = 1;
            }
        for (d = T.length; T[--d] === 0; T.pop()) ;
      }
      o.e > _ ? o.c = o.e = null : o.e < v && (o.c = [o.e = 0]);
    }
    return o;
  }
  function A(o) {
    var l, f = o.e;
    return f === null ? o.toString() : (l = xe(o.c), l = f <= m || f >= c ? It(l, f) : De(l, f, "0"), o.s < 0 ? "-" + l : l);
  }
  return r.absoluteValue = r.abs = function() {
    var o = new S(this);
    return o.s < 0 && (o.s = 1), o;
  }, r.comparedTo = function(o, l) {
    return tt(this, new S(o, l));
  }, r.decimalPlaces = r.dp = function(o, l) {
    var f, g, h, d = this;
    if (o != null)
      return re(o, 0, Ee), l == null ? l = s : re(l, 0, 8), F(new S(d), o + d.e + 1, l);
    if (!(f = d.c)) return null;
    if (g = ((h = f.length - 1) - Me(this.e / U)) * U, h = f[h]) for (; h % 10 == 0; h /= 10, g--) ;
    return g < 0 && (g = 0), g;
  }, r.dividedBy = r.div = function(o, l) {
    return e(this, new S(o, l), a, s);
  }, r.dividedToIntegerBy = r.idiv = function(o, l) {
    return e(this, new S(o, l), 0, 1);
  }, r.exponentiatedBy = r.pow = function(o, l) {
    var f, g, h, d, b, p, y, w, E, T = this;
    if (o = new S(o), o.c && !o.isInteger())
      throw Error(ye + "Exponent not an integer: " + A(o));
    if (l != null && (l = new S(l)), p = o.e > 14, !T.c || !T.c[0] || T.c[0] == 1 && !T.e && T.c.length == 1 || !o.c || !o.c[0])
      return E = new S(Math.pow(+A(T), p ? o.s * (2 - Pt(o)) : +A(o))), l ? E.mod(l) : E;
    if (y = o.s < 0, l) {
      if (l.c ? !l.c[0] : !l.s) return new S(NaN);
      g = !y && T.isInteger() && l.isInteger(), g && (T = T.mod(l));
    } else {
      if (o.e > 9 && (T.e > 0 || T.e < -1 || (T.e == 0 ? T.c[0] > 1 || p && T.c[1] >= 24e7 : T.c[0] < 8e13 || p && T.c[0] <= 9999975e7)))
        return d = T.s < 0 && Pt(o) ? -0 : 0, T.e > -1 && (d = 1 / d), new S(y ? 1 / d : d);
      N && (d = ni(N / U + 2));
    }
    for (p ? (f = new S(0.5), y && (o.s = 1), w = Pt(o)) : (h = Math.abs(+A(o)), w = h % 2), E = new S(u); ; ) {
      if (w) {
        if (E = E.times(T), !E.c) break;
        d ? E.c.length > d && (E.c.length = d) : g && (E = E.mod(l));
      }
      if (h) {
        if (h = Te(h / 2), h === 0) break;
        w = h % 2;
      } else if (o = o.times(f), F(o, o.e + 1, 1), o.e > 14)
        w = Pt(o);
      else {
        if (h = +A(o), h === 0) break;
        w = h % 2;
      }
      T = T.times(T), d ? T.c && T.c.length > d && (T.c.length = d) : g && (T = T.mod(l));
    }
    return g ? E : (y && (E = u.div(E)), l ? E.mod(l) : d ? F(E, N, s, b) : E);
  }, r.integerValue = function(o) {
    var l = new S(this);
    return o == null ? o = s : re(o, 0, 8), F(l, l.e + 1, o);
  }, r.isEqualTo = r.eq = function(o, l) {
    return tt(this, new S(o, l)) === 0;
  }, r.isFinite = function() {
    return !!this.c;
  }, r.isGreaterThan = r.gt = function(o, l) {
    return tt(this, new S(o, l)) > 0;
  }, r.isGreaterThanOrEqualTo = r.gte = function(o, l) {
    return (l = tt(this, new S(o, l))) === 1 || l === 0;
  }, r.isInteger = function() {
    return !!this.c && Me(this.e / U) > this.c.length - 2;
  }, r.isLessThan = r.lt = function(o, l) {
    return tt(this, new S(o, l)) < 0;
  }, r.isLessThanOrEqualTo = r.lte = function(o, l) {
    return (l = tt(this, new S(o, l))) === -1 || l === 0;
  }, r.isNaN = function() {
    return !this.s;
  }, r.isNegative = function() {
    return this.s < 0;
  }, r.isPositive = function() {
    return this.s > 0;
  }, r.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, r.minus = function(o, l) {
    var f, g, h, d, b = this, p = b.s;
    if (o = new S(o, l), l = o.s, !p || !l) return new S(NaN);
    if (p != l)
      return o.s = -l, b.plus(o);
    var y = b.e / U, w = o.e / U, E = b.c, T = o.c;
    if (!y || !w) {
      if (!E || !T) return E ? (o.s = -l, o) : new S(T ? b : NaN);
      if (!E[0] || !T[0])
        return T[0] ? (o.s = -l, o) : new S(E[0] ? b : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          s == 3 ? -0 : 0
        ));
    }
    if (y = Me(y), w = Me(w), E = E.slice(), p = y - w) {
      for ((d = p < 0) ? (p = -p, h = E) : (w = y, h = T), h.reverse(), l = p; l--; h.push(0)) ;
      h.reverse();
    } else
      for (g = (d = (p = E.length) < (l = T.length)) ? p : l, p = l = 0; l < g; l++)
        if (E[l] != T[l]) {
          d = E[l] < T[l];
          break;
        }
    if (d && (h = E, E = T, T = h, o.s = -o.s), l = (g = T.length) - (f = E.length), l > 0) for (; l--; E[f++] = 0) ;
    for (l = ke - 1; g > p; ) {
      if (E[--g] < T[g]) {
        for (f = g; f && !E[--f]; E[f] = l) ;
        --E[f], E[g] += ke;
      }
      E[g] -= T[g];
    }
    for (; E[0] == 0; E.splice(0, 1), --w) ;
    return E[0] ? D(o, E, w) : (o.s = s == 3 ? -1 : 1, o.c = [o.e = 0], o);
  }, r.modulo = r.mod = function(o, l) {
    var f, g, h = this;
    return o = new S(o, l), !h.c || !o.s || o.c && !o.c[0] ? new S(NaN) : !o.c || h.c && !h.c[0] ? new S(h) : (C == 9 ? (g = o.s, o.s = 1, f = e(h, o, 0, 3), o.s = g, f.s *= g) : f = e(h, o, 0, C), o = h.minus(f.times(o)), !o.c[0] && C == 1 && (o.s = h.s), o);
  }, r.multipliedBy = r.times = function(o, l) {
    var f, g, h, d, b, p, y, w, E, T, P, B, V, K, te, j = this, Z = j.c, ce = (o = new S(o, l)).c;
    if (!Z || !ce || !Z[0] || !ce[0])
      return !j.s || !o.s || Z && !Z[0] && !ce || ce && !ce[0] && !Z ? o.c = o.e = o.s = null : (o.s *= j.s, !Z || !ce ? o.c = o.e = null : (o.c = [0], o.e = 0)), o;
    for (g = Me(j.e / U) + Me(o.e / U), o.s *= j.s, y = Z.length, T = ce.length, y < T && (V = Z, Z = ce, ce = V, h = y, y = T, T = h), h = y + T, V = []; h--; V.push(0)) ;
    for (K = ke, te = Ke, h = T; --h >= 0; ) {
      for (f = 0, P = ce[h] % te, B = ce[h] / te | 0, b = y, d = h + b; d > h; )
        w = Z[--b] % te, E = Z[b] / te | 0, p = B * w + E * P, w = P * w + p % te * te + V[d] + f, f = (w / K | 0) + (p / te | 0) + B * E, V[d--] = w % K;
      V[d] = f;
    }
    return f ? ++g : V.splice(0, 1), D(o, V, g);
  }, r.negated = function() {
    var o = new S(this);
    return o.s = -o.s || null, o;
  }, r.plus = function(o, l) {
    var f, g = this, h = g.s;
    if (o = new S(o, l), l = o.s, !h || !l) return new S(NaN);
    if (h != l)
      return o.s = -l, g.minus(o);
    var d = g.e / U, b = o.e / U, p = g.c, y = o.c;
    if (!d || !b) {
      if (!p || !y) return new S(h / 0);
      if (!p[0] || !y[0]) return y[0] ? o : new S(p[0] ? g : h * 0);
    }
    if (d = Me(d), b = Me(b), p = p.slice(), h = d - b) {
      for (h > 0 ? (b = d, f = y) : (h = -h, f = p), f.reverse(); h--; f.push(0)) ;
      f.reverse();
    }
    for (h = p.length, l = y.length, h - l < 0 && (f = y, y = p, p = f, l = h), h = 0; l; )
      h = (p[--l] = p[l] + y[l] + h) / ke | 0, p[l] = ke === p[l] ? 0 : p[l] % ke;
    return h && (p = [h].concat(p), ++b), D(o, p, b);
  }, r.precision = r.sd = function(o, l) {
    var f, g, h, d = this;
    if (o != null && o !== !!o)
      return re(o, 1, Ee), l == null ? l = s : re(l, 0, 8), F(new S(d), o, l);
    if (!(f = d.c)) return null;
    if (h = f.length - 1, g = h * U + 1, h = f[h]) {
      for (; h % 10 == 0; h /= 10, g--) ;
      for (h = f[0]; h >= 10; h /= 10, g++) ;
    }
    return o && d.e + 1 > g && (g = d.e + 1), g;
  }, r.shiftedBy = function(o) {
    return re(o, -9007199254740991, Ji), this.times("1e" + o);
  }, r.squareRoot = r.sqrt = function() {
    var o, l, f, g, h, d = this, b = d.c, p = d.s, y = d.e, w = a + 4, E = new S("0.5");
    if (p !== 1 || !b || !b[0])
      return new S(!p || p < 0 && (!b || b[0]) ? NaN : b ? d : 1 / 0);
    if (p = Math.sqrt(+A(d)), p == 0 || p == 1 / 0 ? (l = xe(b), (l.length + y) % 2 == 0 && (l += "0"), p = Math.sqrt(+l), y = Me((y + 1) / 2) - (y < 0 || y % 2), p == 1 / 0 ? l = "5e" + y : (l = p.toExponential(), l = l.slice(0, l.indexOf("e") + 1) + y), f = new S(l)) : f = new S(p + ""), f.c[0]) {
      for (y = f.e, p = y + w, p < 3 && (p = 0); ; )
        if (h = f, f = E.times(h.plus(e(d, h, w, 1))), xe(h.c).slice(0, p) === (l = xe(f.c)).slice(0, p))
          if (f.e < y && --p, l = l.slice(p - 3, p + 1), l == "9999" || !g && l == "4999") {
            if (!g && (F(h, h.e + a + 2, 0), h.times(h).eq(d))) {
              f = h;
              break;
            }
            w += 4, p += 4, g = 1;
          } else {
            (!+l || !+l.slice(1) && l.charAt(0) == "5") && (F(f, f.e + a + 2, 1), o = !f.times(f).eq(d));
            break;
          }
    }
    return F(f, f.e + a + 1, s, o);
  }, r.toExponential = function(o, l) {
    return o != null && (re(o, 0, Ee), o++), W(this, o, l, 1);
  }, r.toFixed = function(o, l) {
    return o != null && (re(o, 0, Ee), o = o + this.e + 1), W(this, o, l);
  }, r.toFormat = function(o, l, f) {
    var g, h = this;
    if (f == null)
      o != null && l && typeof l == "object" ? (f = l, l = null) : o && typeof o == "object" ? (f = o, o = l = null) : f = k;
    else if (typeof f != "object")
      throw Error(ye + "Argument not an object: " + f);
    if (g = h.toFixed(o, l), h.c) {
      var d, b = g.split("."), p = +f.groupSize, y = +f.secondaryGroupSize, w = f.groupSeparator || "", E = b[0], T = b[1], P = h.s < 0, B = P ? E.slice(1) : E, V = B.length;
      if (y && (d = p, p = y, y = d, V -= d), p > 0 && V > 0) {
        for (d = V % p || p, E = B.substr(0, d); d < V; d += p) E += w + B.substr(d, p);
        y > 0 && (E += w + B.slice(d)), P && (E = "-" + E);
      }
      g = T ? E + (f.decimalSeparator || "") + ((y = +f.fractionGroupSize) ? T.replace(
        new RegExp("\\d{" + y + "}\\B", "g"),
        "$&" + (f.fractionGroupSeparator || "")
      ) : T) : E;
    }
    return (f.prefix || "") + g + (f.suffix || "");
  }, r.toFraction = function(o) {
    var l, f, g, h, d, b, p, y, w, E, T, P, B = this, V = B.c;
    if (o != null && (p = new S(o), !p.isInteger() && (p.c || p.s !== 1) || p.lt(u)))
      throw Error(ye + "Argument " + (p.isInteger() ? "out of range: " : "not an integer: ") + A(p));
    if (!V) return new S(B);
    for (l = new S(u), w = f = new S(u), g = y = new S(u), P = xe(V), d = l.e = P.length - B.e - 1, l.c[0] = ri[(b = d % U) < 0 ? U + b : b], o = !o || p.comparedTo(l) > 0 ? d > 0 ? l : w : p, b = _, _ = 1 / 0, p = new S(P), y.c[0] = 0; E = e(p, l, 0, 1), h = f.plus(E.times(g)), h.comparedTo(o) != 1; )
      f = g, g = h, w = y.plus(E.times(h = w)), y = h, l = p.minus(E.times(h = l)), p = h;
    return h = e(o.minus(f), g, 0, 1), y = y.plus(h.times(w)), f = f.plus(h.times(g)), y.s = w.s = B.s, d = d * 2, T = e(w, g, d, s).minus(B).abs().comparedTo(
      e(y, f, d, s).minus(B).abs()
    ) < 1 ? [w, g] : [y, f], _ = b, T;
  }, r.toNumber = function() {
    return +A(this);
  }, r.toPrecision = function(o, l) {
    return o != null && re(o, 1, Ee), W(this, o, l, 2);
  }, r.toString = function(o) {
    var l, f = this, g = f.s, h = f.e;
    return h === null ? g ? (l = "Infinity", g < 0 && (l = "-" + l)) : l = "NaN" : (o == null ? l = h <= m || h >= c ? It(xe(f.c), h) : De(xe(f.c), h, "0") : o === 10 && I ? (f = F(new S(f), a + h + 1, s), l = De(xe(f.c), f.e, "0")) : (re(o, 2, R.length, "Base"), l = t(De(xe(f.c), h, "0"), 10, o, g, !0)), g < 0 && f.c[0] && (l = "-" + l)), l;
  }, r.valueOf = r.toJSON = function() {
    return A(this);
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, i != null && S.set(i), S;
}
function Me(i) {
  var e = i | 0;
  return i > 0 || i === e ? e : e - 1;
}
function xe(i) {
  for (var e, t, n = 1, r = i.length, u = i[0] + ""; n < r; ) {
    for (e = i[n++] + "", t = U - e.length; t--; e = "0" + e) ;
    u += e;
  }
  for (r = u.length; u.charCodeAt(--r) === 48; ) ;
  return u.slice(0, r + 1 || 1);
}
function tt(i, e) {
  var t, n, r = i.c, u = e.c, a = i.s, s = e.s, m = i.e, c = e.e;
  if (!a || !s) return null;
  if (t = r && !r[0], n = u && !u[0], t || n) return t ? n ? 0 : -s : a;
  if (a != s) return a;
  if (t = a < 0, n = m == c, !r || !u) return n ? 0 : !r ^ t ? 1 : -1;
  if (!n) return m > c ^ t ? 1 : -1;
  for (s = (m = r.length) < (c = u.length) ? m : c, a = 0; a < s; a++) if (r[a] != u[a]) return r[a] > u[a] ^ t ? 1 : -1;
  return m == c ? 0 : m > c ^ t ? 1 : -1;
}
function re(i, e, t, n) {
  if (i < e || i > t || i !== Te(i))
    throw Error(ye + (n || "Argument") + (typeof i == "number" ? i < e || i > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(i));
}
function Pt(i) {
  var e = i.c.length - 1;
  return Me(i.e / U) == e && i.c[e] % 2 != 0;
}
function It(i, e) {
  return (i.length > 1 ? i.charAt(0) + "." + i.slice(1) : i) + (e < 0 ? "e" : "e+") + e;
}
function De(i, e, t) {
  var n, r;
  if (e < 0) {
    for (r = t + "."; ++e; r += t) ;
    i = r + i;
  } else if (n = i.length, ++e > n) {
    for (r = t, e -= n; --e; r += t) ;
    i += r;
  } else e < n && (i = i.slice(0, e) + "." + i.slice(e));
  return i;
}
var Be = wn(), gs = class {
  constructor(i) {
    O(this, "key");
    O(this, "left", null);
    O(this, "right", null);
    this.key = i;
  }
}, vt = class extends gs {
  constructor(i) {
    super(i);
  }
}, ms = class {
  constructor() {
    O(this, "size", 0);
    O(this, "modificationCount", 0);
    O(this, "splayCount", 0);
  }
  splay(i) {
    const e = this.root;
    if (e == null)
      return this.compare(i, i), -1;
    let t = null, n = null, r = null, u = null, a = e;
    const s = this.compare;
    let m;
    for (; ; )
      if (m = s(a.key, i), m > 0) {
        let c = a.left;
        if (c == null || (m = s(c.key, i), m > 0 && (a.left = c.right, c.right = a, a = c, c = a.left, c == null)))
          break;
        t == null ? n = a : t.left = a, t = a, a = c;
      } else if (m < 0) {
        let c = a.right;
        if (c == null || (m = s(c.key, i), m < 0 && (a.right = c.left, c.left = a, a = c, c = a.right, c == null)))
          break;
        r == null ? u = a : r.right = a, r = a, a = c;
      } else
        break;
    return r != null && (r.right = a.left, a.left = u), t != null && (t.left = a.right, a.right = n), this.root !== a && (this.root = a, this.splayCount++), m;
  }
  splayMin(i) {
    let e = i, t = e.left;
    for (; t != null; ) {
      const n = t;
      e.left = n.right, n.right = e, e = n, t = e.left;
    }
    return e;
  }
  splayMax(i) {
    let e = i, t = e.right;
    for (; t != null; ) {
      const n = t;
      e.right = n.left, n.left = e, e = n, t = e.right;
    }
    return e;
  }
  _delete(i) {
    if (this.root == null || this.splay(i) != 0) return null;
    let t = this.root;
    const n = t, r = t.left;
    if (this.size--, r == null)
      this.root = t.right;
    else {
      const u = t.right;
      t = this.splayMax(r), t.right = u, this.root = t;
    }
    return this.modificationCount++, n;
  }
  addNewRoot(i, e) {
    this.size++, this.modificationCount++;
    const t = this.root;
    if (t == null) {
      this.root = i;
      return;
    }
    e < 0 ? (i.left = t, i.right = t.right, t.right = null) : (i.right = t, i.left = t.left, t.left = null), this.root = i;
  }
  _first() {
    const i = this.root;
    return i == null ? null : (this.root = this.splayMin(i), this.root);
  }
  _last() {
    const i = this.root;
    return i == null ? null : (this.root = this.splayMax(i), this.root);
  }
  clear() {
    this.root = null, this.size = 0, this.modificationCount++;
  }
  has(i) {
    return this.validKey(i) && this.splay(i) == 0;
  }
  defaultCompare() {
    return (i, e) => i < e ? -1 : i > e ? 1 : 0;
  }
  wrap() {
    return {
      getRoot: () => this.root,
      setRoot: (i) => {
        this.root = i;
      },
      getSize: () => this.size,
      getModificationCount: () => this.modificationCount,
      getSplayCount: () => this.splayCount,
      setSplayCount: (i) => {
        this.splayCount = i;
      },
      splay: (i) => this.splay(i),
      has: (i) => this.has(i)
    };
  }
}, ln, un, Ft = class _t extends ms {
  constructor(t, n) {
    super();
    O(this, "root", null);
    O(this, "compare");
    O(this, "validKey");
    O(this, ln, "[object Set]");
    this.compare = t ?? this.defaultCompare(), this.validKey = n ?? ((r) => r != null && r != null);
  }
  delete(t) {
    return this.validKey(t) ? this._delete(t) != null : !1;
  }
  deleteAll(t) {
    for (const n of t)
      this.delete(n);
  }
  forEach(t) {
    const n = this[Symbol.iterator]();
    let r;
    for (; r = n.next(), !r.done; )
      t(r.value, r.value, this);
  }
  add(t) {
    const n = this.splay(t);
    return n != 0 && this.addNewRoot(new vt(t), n), this;
  }
  addAndReturn(t) {
    const n = this.splay(t);
    return n != 0 && this.addNewRoot(new vt(t), n), this.root.key;
  }
  addAll(t) {
    for (const n of t)
      this.add(n);
  }
  isEmpty() {
    return this.root == null;
  }
  isNotEmpty() {
    return this.root != null;
  }
  single() {
    if (this.size == 0) throw "Bad state: No element";
    if (this.size > 1) throw "Bad state: Too many element";
    return this.root.key;
  }
  first() {
    if (this.size == 0) throw "Bad state: No element";
    return this._first().key;
  }
  last() {
    if (this.size == 0) throw "Bad state: No element";
    return this._last().key;
  }
  lastBefore(t) {
    if (t == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(t) < 0) return this.root.key;
    let r = this.root.left;
    if (r == null) return null;
    let u = r.right;
    for (; u != null; )
      r = u, u = r.right;
    return r.key;
  }
  firstAfter(t) {
    if (t == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(t) > 0) return this.root.key;
    let r = this.root.right;
    if (r == null) return null;
    let u = r.left;
    for (; u != null; )
      r = u, u = r.left;
    return r.key;
  }
  retainAll(t) {
    const n = new _t(this.compare, this.validKey), r = this.modificationCount;
    for (const u of t) {
      if (r != this.modificationCount)
        throw "Concurrent modification during iteration.";
      this.validKey(u) && this.splay(u) == 0 && n.add(this.root.key);
    }
    n.size != this.size && (this.root = n.root, this.size = n.size, this.modificationCount++);
  }
  lookup(t) {
    return !this.validKey(t) || this.splay(t) != 0 ? null : this.root.key;
  }
  intersection(t) {
    const n = new _t(this.compare, this.validKey);
    for (const r of this)
      t.has(r) && n.add(r);
    return n;
  }
  difference(t) {
    const n = new _t(this.compare, this.validKey);
    for (const r of this)
      t.has(r) || n.add(r);
    return n;
  }
  union(t) {
    const n = this.clone();
    return n.addAll(t), n;
  }
  clone() {
    const t = new _t(this.compare, this.validKey);
    return t.size = this.size, t.root = this.copyNode(this.root), t;
  }
  copyNode(t) {
    if (t == null) return null;
    function n(u, a) {
      let s, m;
      do {
        if (s = u.left, m = u.right, s != null) {
          const c = new vt(s.key);
          a.left = c, n(s, c);
        }
        if (m != null) {
          const c = new vt(m.key);
          a.right = c, u = m, a = c;
        }
      } while (m != null);
    }
    const r = new vt(t.key);
    return n(t, r), r;
  }
  toSet() {
    return this.clone();
  }
  entries() {
    return new ys(this.wrap());
  }
  keys() {
    return this[Symbol.iterator]();
  }
  values() {
    return this[Symbol.iterator]();
  }
  [(un = Symbol.iterator, ln = Symbol.toStringTag, un)]() {
    return new ps(this.wrap());
  }
}, En = class {
  constructor(i) {
    O(this, "tree");
    O(this, "path", new Array());
    O(this, "modificationCount", null);
    O(this, "splayCount");
    this.tree = i, this.splayCount = i.getSplayCount();
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    return this.moveNext() ? { done: !1, value: this.current() } : { done: !0, value: null };
  }
  current() {
    if (!this.path.length) return null;
    const i = this.path[this.path.length - 1];
    return this.getValue(i);
  }
  rebuildPath(i) {
    this.path.splice(0, this.path.length), this.tree.splay(i), this.path.push(this.tree.getRoot()), this.splayCount = this.tree.getSplayCount();
  }
  findLeftMostDescendent(i) {
    for (; i != null; )
      this.path.push(i), i = i.left;
  }
  moveNext() {
    if (this.modificationCount != this.tree.getModificationCount()) {
      if (this.modificationCount == null) {
        this.modificationCount = this.tree.getModificationCount();
        let t = this.tree.getRoot();
        for (; t != null; )
          this.path.push(t), t = t.left;
        return this.path.length > 0;
      }
      throw "Concurrent modification during iteration.";
    }
    if (!this.path.length) return !1;
    this.splayCount != this.tree.getSplayCount() && this.rebuildPath(this.path[this.path.length - 1].key);
    let i = this.path[this.path.length - 1], e = i.right;
    if (e != null) {
      for (; e != null; )
        this.path.push(e), e = e.left;
      return !0;
    }
    for (this.path.pop(); this.path.length && this.path[this.path.length - 1].right === i; )
      i = this.path.pop();
    return this.path.length > 0;
  }
}, ps = class extends En {
  getValue(i) {
    return i.key;
  }
}, ys = class extends En {
  getValue(i) {
    return [i.key, i.key];
  }
}, Ln = (i) => () => i, fi = (i) => {
  const e = i ? (t, n) => n.minus(t).abs().isLessThanOrEqualTo(i) : Ln(!1);
  return (t, n) => e(t, n) ? 0 : t.comparedTo(n);
};
function bs(i) {
  const e = i ? (t, n, r, u, a) => t.exponentiatedBy(2).isLessThanOrEqualTo(
    u.minus(n).exponentiatedBy(2).plus(a.minus(r).exponentiatedBy(2)).times(i)
  ) : Ln(!1);
  return (t, n, r) => {
    const u = t.x, a = t.y, s = r.x, m = r.y, c = a.minus(m).times(n.x.minus(s)).minus(u.minus(s).times(n.y.minus(m)));
    return e(c, u, a, s, m) ? 0 : c.comparedTo(0);
  };
}
var vs = (i) => i, ws = (i) => {
  if (i) {
    const e = new Ft(fi(i)), t = new Ft(fi(i)), n = (u, a) => a.addAndReturn(u), r = (u) => ({
      x: n(u.x, e),
      y: n(u.y, t)
    });
    return r({ x: new Be(0), y: new Be(0) }), r;
  }
  return vs;
}, ci = (i) => ({
  set: (e) => {
    je = ci(e);
  },
  reset: () => ci(i),
  compare: fi(i),
  snap: ws(i),
  orient: bs(i)
}), je = ci(), wt = (i, e) => i.ll.x.isLessThanOrEqualTo(e.x) && e.x.isLessThanOrEqualTo(i.ur.x) && i.ll.y.isLessThanOrEqualTo(e.y) && e.y.isLessThanOrEqualTo(i.ur.y), hi = (i, e) => {
  if (e.ur.x.isLessThan(i.ll.x) || i.ur.x.isLessThan(e.ll.x) || e.ur.y.isLessThan(i.ll.y) || i.ur.y.isLessThan(e.ll.y))
    return null;
  const t = i.ll.x.isLessThan(e.ll.x) ? e.ll.x : i.ll.x, n = i.ur.x.isLessThan(e.ur.x) ? i.ur.x : e.ur.x, r = i.ll.y.isLessThan(e.ll.y) ? e.ll.y : i.ll.y, u = i.ur.y.isLessThan(e.ur.y) ? i.ur.y : e.ur.y;
  return { ll: { x: t, y: r }, ur: { x: n, y: u } };
}, Bt = (i, e) => i.x.times(e.y).minus(i.y.times(e.x)), _n = (i, e) => i.x.times(e.x).plus(i.y.times(e.y)), Ut = (i) => _n(i, i).sqrt(), Es = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return Bt(r, n).div(Ut(r)).div(Ut(n));
}, Ls = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return _n(r, n).div(Ut(r)).div(Ut(n));
}, $i = (i, e, t) => e.y.isZero() ? null : { x: i.x.plus(e.x.div(e.y).times(t.minus(i.y))), y: t }, en = (i, e, t) => e.x.isZero() ? null : { x: t, y: i.y.plus(e.y.div(e.x).times(t.minus(i.x))) }, _s = (i, e, t, n) => {
  if (e.x.isZero()) return en(t, n, i.x);
  if (n.x.isZero()) return en(i, e, t.x);
  if (e.y.isZero()) return $i(t, n, i.y);
  if (n.y.isZero()) return $i(i, e, t.y);
  const r = Bt(e, n);
  if (r.isZero()) return null;
  const u = { x: t.x.minus(i.x), y: t.y.minus(i.y) }, a = Bt(u, e).div(r), s = Bt(u, n).div(r), m = i.x.plus(s.times(e.x)), c = t.x.plus(a.times(n.x)), v = i.y.plus(s.times(e.y)), _ = t.y.plus(a.times(n.y)), M = m.plus(c).div(2), C = v.plus(_).div(2);
  return { x: M, y: C };
}, Ae = class Sn {
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(e, t) {
    O(this, "point");
    O(this, "isLeft");
    O(this, "segment");
    O(this, "otherSE");
    O(this, "consumedBy");
    e.events === void 0 ? e.events = [this] : e.events.push(this), this.point = e, this.isLeft = t;
  }
  // for ordering sweep events in the sweep event queue
  static compare(e, t) {
    const n = Sn.comparePoints(e.point, t.point);
    return n !== 0 ? n : (e.point !== t.point && e.link(t), e.isLeft !== t.isLeft ? e.isLeft ? 1 : -1 : jt.compare(e.segment, t.segment));
  }
  // for ordering points in sweep line order
  static comparePoints(e, t) {
    return e.x.isLessThan(t.x) ? -1 : e.x.isGreaterThan(t.x) ? 1 : e.y.isLessThan(t.y) ? -1 : e.y.isGreaterThan(t.y) ? 1 : 0;
  }
  link(e) {
    if (e.point === this.point)
      throw new Error("Tried to link already linked events");
    const t = e.point.events;
    for (let n = 0, r = t.length; n < r; n++) {
      const u = t[n];
      this.point.events.push(u), u.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const e = this.point.events.length;
    for (let t = 0; t < e; t++) {
      const n = this.point.events[t];
      if (n.segment.consumedBy === void 0)
        for (let r = t + 1; r < e; r++) {
          const u = this.point.events[r];
          u.consumedBy === void 0 && n.otherSE.point.events === u.otherSE.point.events && n.segment.consume(u.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const e = [];
    for (let t = 0, n = this.point.events.length; t < n; t++) {
      const r = this.point.events[t];
      r !== this && !r.segment.ringOut && r.segment.isInResult() && e.push(r);
    }
    return e;
  }
  /**
   * Returns a comparator function for sorting linked events that will
   * favor the event that will give us the smallest left-side angle.
   * All ring construction starts as low as possible heading to the right,
   * so by always turning left as sharp as possible we'll get polygons
   * without uncessary loops & holes.
   *
   * The comparator function has a compute cache such that it avoids
   * re-computing already-computed values.
   */
  getLeftmostComparator(e) {
    const t = /* @__PURE__ */ new Map(), n = (r) => {
      const u = r.otherSE;
      t.set(r, {
        sine: Es(this.point, e.point, u.point),
        cosine: Ls(this.point, e.point, u.point)
      });
    };
    return (r, u) => {
      t.has(r) || n(r), t.has(u) || n(u);
      const { sine: a, cosine: s } = t.get(r), { sine: m, cosine: c } = t.get(u);
      return a.isGreaterThanOrEqualTo(0) && m.isGreaterThanOrEqualTo(0) ? s.isLessThan(c) ? 1 : s.isGreaterThan(c) ? -1 : 0 : a.isLessThan(0) && m.isLessThan(0) ? s.isLessThan(c) ? -1 : s.isGreaterThan(c) ? 1 : 0 : m.isLessThan(a) ? -1 : m.isGreaterThan(a) ? 1 : 0;
    };
  }
}, Ss = class di {
  constructor(e) {
    O(this, "events");
    O(this, "poly");
    O(this, "_isExteriorRing");
    O(this, "_enclosingRing");
    this.events = e;
    for (let t = 0, n = e.length; t < n; t++)
      e[t].segment.ringOut = this;
    this.poly = null;
  }
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const u = e[n];
      if (!u.isInResult() || u.ringOut) continue;
      let a = null, s = u.leftSE, m = u.rightSE;
      const c = [s], v = s.point, _ = [];
      for (; a = s, s = m, c.push(s), s.point !== v; )
        for (; ; ) {
          const M = s.getAvailableLinkedEvents();
          if (M.length === 0) {
            const k = c[0].point, R = c[c.length - 1].point;
            throw new Error(
              `Unable to complete output ring starting at [${k.x}, ${k.y}]. Last matching segment found ends at [${R.x}, ${R.y}].`
            );
          }
          if (M.length === 1) {
            m = M[0].otherSE;
            break;
          }
          let C = null;
          for (let k = 0, R = _.length; k < R; k++)
            if (_[k].point === s.point) {
              C = k;
              break;
            }
          if (C !== null) {
            const k = _.splice(C)[0], R = c.splice(k.index);
            R.unshift(R[0].otherSE), t.push(new di(R.reverse()));
            continue;
          }
          _.push({
            index: c.length,
            point: s.point
          });
          const N = s.getLeftmostComparator(a);
          m = M.sort(N)[0].otherSE;
          break;
        }
      t.push(new di(c));
    }
    return t;
  }
  getGeom() {
    let e = this.events[0].point;
    const t = [e];
    for (let c = 1, v = this.events.length - 1; c < v; c++) {
      const _ = this.events[c].point, M = this.events[c + 1].point;
      je.orient(_, e, M) !== 0 && (t.push(_), e = _);
    }
    if (t.length === 1) return null;
    const n = t[0], r = t[1];
    je.orient(n, e, r) === 0 && t.shift(), t.push(t[0]);
    const u = this.isExteriorRing() ? 1 : -1, a = this.isExteriorRing() ? 0 : t.length - 1, s = this.isExteriorRing() ? t.length : -1, m = [];
    for (let c = a; c != s; c += u)
      m.push([t[c].x.toNumber(), t[c].y.toNumber()]);
    return m;
  }
  isExteriorRing() {
    if (this._isExteriorRing === void 0) {
      const e = this.enclosingRing();
      this._isExteriorRing = e ? !e.isExteriorRing() : !0;
    }
    return this._isExteriorRing;
  }
  enclosingRing() {
    return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
  }
  /* Returns the ring that encloses this one, if any */
  _calcEnclosingRing() {
    var r, u;
    let e = this.events[0];
    for (let a = 1, s = this.events.length; a < s; a++) {
      const m = this.events[a];
      Ae.compare(e, m) > 0 && (e = m);
    }
    let t = e.segment.prevInResult(), n = t ? t.prevInResult() : null;
    for (; ; ) {
      if (!t) return null;
      if (!n) return t.ringOut;
      if (n.ringOut !== t.ringOut)
        return ((r = n.ringOut) == null ? void 0 : r.enclosingRing()) !== t.ringOut ? t.ringOut : (u = t.ringOut) == null ? void 0 : u.enclosingRing();
      t = n.prevInResult(), n = t ? t.prevInResult() : null;
    }
  }
}, tn = class {
  constructor(i) {
    O(this, "exteriorRing");
    O(this, "interiorRings");
    this.exteriorRing = i, i.poly = this, this.interiorRings = [];
  }
  addInterior(i) {
    this.interiorRings.push(i), i.poly = this;
  }
  getGeom() {
    const i = this.exteriorRing.getGeom();
    if (i === null) return null;
    const e = [i];
    for (let t = 0, n = this.interiorRings.length; t < n; t++) {
      const r = this.interiorRings[t].getGeom();
      r !== null && e.push(r);
    }
    return e;
  }
}, xs = class {
  constructor(i) {
    O(this, "rings");
    O(this, "polys");
    this.rings = i, this.polys = this._composePolys(i);
  }
  getGeom() {
    const i = [];
    for (let e = 0, t = this.polys.length; e < t; e++) {
      const n = this.polys[e].getGeom();
      n !== null && i.push(n);
    }
    return i;
  }
  _composePolys(i) {
    var t;
    const e = [];
    for (let n = 0, r = i.length; n < r; n++) {
      const u = i[n];
      if (!u.poly)
        if (u.isExteriorRing()) e.push(new tn(u));
        else {
          const a = u.enclosingRing();
          a != null && a.poly || e.push(new tn(a)), (t = a == null ? void 0 : a.poly) == null || t.addInterior(u);
        }
    }
    return e;
  }
}, Ts = class {
  constructor(i, e = jt.compare) {
    O(this, "queue");
    O(this, "tree");
    O(this, "segments");
    this.queue = i, this.tree = new Ft(e), this.segments = [];
  }
  process(i) {
    const e = i.segment, t = [];
    if (i.consumedBy)
      return i.isLeft ? this.queue.delete(i.otherSE) : this.tree.delete(e), t;
    i.isLeft && this.tree.add(e);
    let n = e, r = e;
    do
      n = this.tree.lastBefore(n);
    while (n != null && n.consumedBy != null);
    do
      r = this.tree.firstAfter(r);
    while (r != null && r.consumedBy != null);
    if (i.isLeft) {
      let u = null;
      if (n) {
        const s = n.getIntersection(e);
        if (s !== null && (e.isAnEndpoint(s) || (u = s), !n.isAnEndpoint(s))) {
          const m = this._splitSafely(n, s);
          for (let c = 0, v = m.length; c < v; c++)
            t.push(m[c]);
        }
      }
      let a = null;
      if (r) {
        const s = r.getIntersection(e);
        if (s !== null && (e.isAnEndpoint(s) || (a = s), !r.isAnEndpoint(s))) {
          const m = this._splitSafely(r, s);
          for (let c = 0, v = m.length; c < v; c++)
            t.push(m[c]);
        }
      }
      if (u !== null || a !== null) {
        let s = null;
        u === null ? s = a : a === null ? s = u : s = Ae.comparePoints(
          u,
          a
        ) <= 0 ? u : a, this.queue.delete(e.rightSE), t.push(e.rightSE);
        const m = e.split(s);
        for (let c = 0, v = m.length; c < v; c++)
          t.push(m[c]);
      }
      t.length > 0 ? (this.tree.delete(e), t.push(i)) : (this.segments.push(e), e.prev = n);
    } else {
      if (n && r) {
        const u = n.getIntersection(r);
        if (u !== null) {
          if (!n.isAnEndpoint(u)) {
            const a = this._splitSafely(n, u);
            for (let s = 0, m = a.length; s < m; s++)
              t.push(a[s]);
          }
          if (!r.isAnEndpoint(u)) {
            const a = this._splitSafely(r, u);
            for (let s = 0, m = a.length; s < m; s++)
              t.push(a[s]);
          }
        }
      }
      this.tree.delete(e);
    }
    return t;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(i, e) {
    this.tree.delete(i);
    const t = i.rightSE;
    this.queue.delete(t);
    const n = i.split(e);
    return n.push(t), i.consumedBy === void 0 && this.tree.add(i), n;
  }
}, Ms = class {
  constructor() {
    O(this, "type");
    O(this, "numMultiPolys");
  }
  run(i, e, t) {
    St.type = i;
    const n = [new rn(e, !0)];
    for (let c = 0, v = t.length; c < v; c++)
      n.push(new rn(t[c], !1));
    if (St.numMultiPolys = n.length, St.type === "difference") {
      const c = n[0];
      let v = 1;
      for (; v < n.length; )
        hi(n[v].bbox, c.bbox) !== null ? v++ : n.splice(v, 1);
    }
    if (St.type === "intersection")
      for (let c = 0, v = n.length; c < v; c++) {
        const _ = n[c];
        for (let M = c + 1, C = n.length; M < C; M++)
          if (hi(_.bbox, n[M].bbox) === null) return [];
      }
    const r = new Ft(Ae.compare);
    for (let c = 0, v = n.length; c < v; c++) {
      const _ = n[c].getSweepEvents();
      for (let M = 0, C = _.length; M < C; M++)
        r.add(_[M]);
    }
    const u = new Ts(r);
    let a = null;
    for (r.size != 0 && (a = r.first(), r.delete(a)); a; ) {
      const c = u.process(a);
      for (let v = 0, _ = c.length; v < _; v++) {
        const M = c[v];
        M.consumedBy === void 0 && r.add(M);
      }
      r.size != 0 ? (a = r.first(), r.delete(a)) : a = null;
    }
    je.reset();
    const s = Ss.factory(u.segments);
    return new xs(s).getGeom();
  }
}, St = new Ms(), qt = St, Ns = 0, jt = class Gt {
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, t, n, r) {
    O(this, "id");
    O(this, "leftSE");
    O(this, "rightSE");
    O(this, "rings");
    O(this, "windings");
    O(this, "ringOut");
    O(this, "consumedBy");
    O(this, "prev");
    O(this, "_prevInResult");
    O(this, "_beforeState");
    O(this, "_afterState");
    O(this, "_isInResult");
    this.id = ++Ns, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = n, this.windings = r;
  }
  /* This compare() function is for ordering segments in the sweep
   * line tree, and does so according to the following criteria:
   *
   * Consider the vertical line that lies an infinestimal step to the
   * right of the right-more of the two left endpoints of the input
   * segments. Imagine slowly moving a point up from negative infinity
   * in the increasing y direction. Which of the two segments will that
   * point intersect first? That segment comes 'before' the other one.
   *
   * If neither segment would be intersected by such a line, (if one
   * or more of the segments are vertical) then the line to be considered
   * is directly on the right-more of the two left inputs.
   */
  static compare(e, t) {
    const n = e.leftSE.point.x, r = t.leftSE.point.x, u = e.rightSE.point.x, a = t.rightSE.point.x;
    if (a.isLessThan(n)) return 1;
    if (u.isLessThan(r)) return -1;
    const s = e.leftSE.point.y, m = t.leftSE.point.y, c = e.rightSE.point.y, v = t.rightSE.point.y;
    if (n.isLessThan(r)) {
      if (m.isLessThan(s) && m.isLessThan(c)) return 1;
      if (m.isGreaterThan(s) && m.isGreaterThan(c)) return -1;
      const _ = e.comparePoint(t.leftSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
      const M = t.comparePoint(e.rightSE.point);
      return M !== 0 ? M : -1;
    }
    if (n.isGreaterThan(r)) {
      if (s.isLessThan(m) && s.isLessThan(v)) return -1;
      if (s.isGreaterThan(m) && s.isGreaterThan(v)) return 1;
      const _ = t.comparePoint(e.leftSE.point);
      if (_ !== 0) return _;
      const M = e.comparePoint(t.rightSE.point);
      return M < 0 ? 1 : M > 0 ? -1 : 1;
    }
    if (s.isLessThan(m)) return -1;
    if (s.isGreaterThan(m)) return 1;
    if (u.isLessThan(a)) {
      const _ = t.comparePoint(e.rightSE.point);
      if (_ !== 0) return _;
    }
    if (u.isGreaterThan(a)) {
      const _ = e.comparePoint(t.rightSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
    }
    if (!u.eq(a)) {
      const _ = c.minus(s), M = u.minus(n), C = v.minus(m), N = a.minus(r);
      if (_.isGreaterThan(M) && C.isLessThan(N)) return 1;
      if (_.isLessThan(M) && C.isGreaterThan(N)) return -1;
    }
    return u.isGreaterThan(a) ? 1 : u.isLessThan(a) || c.isLessThan(v) ? -1 : c.isGreaterThan(v) ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  }
  static fromRing(e, t, n) {
    let r, u, a;
    const s = Ae.comparePoints(e, t);
    if (s < 0)
      r = e, u = t, a = 1;
    else if (s > 0)
      r = t, u = e, a = -1;
    else
      throw new Error(
        `Tried to create degenerate segment at [${e.x}, ${e.y}]`
      );
    const m = new Ae(r, !0), c = new Ae(u, !1);
    return new Gt(m, c, [n], [a]);
  }
  /* When a segment is split, the rightSE is replaced with a new sweep event */
  replaceRightSE(e) {
    this.rightSE = e, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
  }
  bbox() {
    const e = this.leftSE.point.y, t = this.rightSE.point.y;
    return {
      ll: { x: this.leftSE.point.x, y: e.isLessThan(t) ? e : t },
      ur: { x: this.rightSE.point.x, y: e.isGreaterThan(t) ? e : t }
    };
  }
  /* A vector from the left point to the right */
  vector() {
    return {
      x: this.rightSE.point.x.minus(this.leftSE.point.x),
      y: this.rightSE.point.y.minus(this.leftSE.point.y)
    };
  }
  isAnEndpoint(e) {
    return e.x.eq(this.leftSE.point.x) && e.y.eq(this.leftSE.point.y) || e.x.eq(this.rightSE.point.x) && e.y.eq(this.rightSE.point.y);
  }
  /* Compare this segment with a point.
   *
   * A point P is considered to be colinear to a segment if there
   * exists a distance D such that if we travel along the segment
   * from one * endpoint towards the other a distance D, we find
   * ourselves at point P.
   *
   * Return value indicates:
   *
   *   1: point lies above the segment (to the left of vertical)
   *   0: point is colinear to segment
   *  -1: point lies below the segment (to the right of vertical)
   */
  comparePoint(e) {
    return je.orient(this.leftSE.point, e, this.rightSE.point);
  }
  /**
   * Given another segment, returns the first non-trivial intersection
   * between the two segments (in terms of sweep line ordering), if it exists.
   *
   * A 'non-trivial' intersection is one that will cause one or both of the
   * segments to be split(). As such, 'trivial' vs. 'non-trivial' intersection:
   *
   *   * endpoint of segA with endpoint of segB --> trivial
   *   * endpoint of segA with point along segB --> non-trivial
   *   * endpoint of segB with point along segA --> non-trivial
   *   * point along segA with point along segB --> non-trivial
   *
   * If no non-trivial intersection exists, return null
   * Else, return null.
   */
  getIntersection(e) {
    const t = this.bbox(), n = e.bbox(), r = hi(t, n);
    if (r === null) return null;
    const u = this.leftSE.point, a = this.rightSE.point, s = e.leftSE.point, m = e.rightSE.point, c = wt(t, s) && this.comparePoint(s) === 0, v = wt(n, u) && e.comparePoint(u) === 0, _ = wt(t, m) && this.comparePoint(m) === 0, M = wt(n, a) && e.comparePoint(a) === 0;
    if (v && c)
      return M && !_ ? a : !M && _ ? m : null;
    if (v)
      return _ && u.x.eq(m.x) && u.y.eq(m.y) ? null : u;
    if (c)
      return M && a.x.eq(s.x) && a.y.eq(s.y) ? null : s;
    if (M && _) return null;
    if (M) return a;
    if (_) return m;
    const C = _s(u, this.vector(), s, e.vector());
    return C === null || !wt(r, C) ? null : je.snap(C);
  }
  /**
   * Split the given segment into multiple segments on the given points.
   *  * Each existing segment will retain its leftSE and a new rightSE will be
   *    generated for it.
   *  * A new segment will be generated which will adopt the original segment's
   *    rightSE, and a new leftSE will be generated for it.
   *  * If there are more than two points given to split on, new segments
   *    in the middle will be generated with new leftSE and rightSE's.
   *  * An array of the newly generated SweepEvents will be returned.
   *
   * Warning: input array of points is modified
   */
  split(e) {
    const t = [], n = e.events !== void 0, r = new Ae(e, !0), u = new Ae(e, !1), a = this.rightSE;
    this.replaceRightSE(u), t.push(u), t.push(r);
    const s = new Gt(
      r,
      a,
      this.rings.slice(),
      this.windings.slice()
    );
    return Ae.comparePoints(s.leftSE.point, s.rightSE.point) > 0 && s.swapEvents(), Ae.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n && (r.checkForConsuming(), u.checkForConsuming()), t;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const e = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let t = 0, n = this.windings.length; t < n; t++)
      this.windings[t] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(e) {
    let t = this, n = e;
    for (; t.consumedBy; ) t = t.consumedBy;
    for (; n.consumedBy; ) n = n.consumedBy;
    const r = Gt.compare(t, n);
    if (r !== 0) {
      if (r > 0) {
        const u = t;
        t = n, n = u;
      }
      if (t.prev === n) {
        const u = t;
        t = n, n = u;
      }
      for (let u = 0, a = n.rings.length; u < a; u++) {
        const s = n.rings[u], m = n.windings[u], c = t.rings.indexOf(s);
        c === -1 ? (t.rings.push(s), t.windings.push(m)) : t.windings[c] += m;
      }
      n.rings = null, n.windings = null, n.consumedBy = t, n.leftSE.consumedBy = t.leftSE, n.rightSE.consumedBy = t.rightSE;
    }
  }
  /* The first segment previous segment chain that is in the result */
  prevInResult() {
    return this._prevInResult !== void 0 ? this._prevInResult : (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null, this._prevInResult);
  }
  beforeState() {
    if (this._beforeState !== void 0) return this._beforeState;
    if (!this.prev)
      this._beforeState = {
        rings: [],
        windings: [],
        multiPolys: []
      };
    else {
      const e = this.prev.consumedBy || this.prev;
      this._beforeState = e.afterState();
    }
    return this._beforeState;
  }
  afterState() {
    if (this._afterState !== void 0) return this._afterState;
    const e = this.beforeState();
    this._afterState = {
      rings: e.rings.slice(0),
      windings: e.windings.slice(0),
      multiPolys: []
    };
    const t = this._afterState.rings, n = this._afterState.windings, r = this._afterState.multiPolys;
    for (let s = 0, m = this.rings.length; s < m; s++) {
      const c = this.rings[s], v = this.windings[s], _ = t.indexOf(c);
      _ === -1 ? (t.push(c), n.push(v)) : n[_] += v;
    }
    const u = [], a = [];
    for (let s = 0, m = t.length; s < m; s++) {
      if (n[s] === 0) continue;
      const c = t[s], v = c.poly;
      if (a.indexOf(v) === -1)
        if (c.isExterior) u.push(v);
        else {
          a.indexOf(v) === -1 && a.push(v);
          const _ = u.indexOf(c.poly);
          _ !== -1 && u.splice(_, 1);
        }
    }
    for (let s = 0, m = u.length; s < m; s++) {
      const c = u[s].multiPoly;
      r.indexOf(c) === -1 && r.push(c);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const e = this.beforeState().multiPolys, t = this.afterState().multiPolys;
    switch (qt.type) {
      case "union": {
        const n = e.length === 0, r = t.length === 0;
        this._isInResult = n !== r;
        break;
      }
      case "intersection": {
        let n, r;
        e.length < t.length ? (n = e.length, r = t.length) : (n = t.length, r = e.length), this._isInResult = r === qt.numMultiPolys && n < r;
        break;
      }
      case "xor": {
        const n = Math.abs(e.length - t.length);
        this._isInResult = n % 2 === 1;
        break;
      }
      case "difference": {
        const n = (r) => r.length === 1 && r[0].isSubject;
        this._isInResult = n(e) !== n(t);
        break;
      }
    }
    return this._isInResult;
  }
}, nn = class {
  constructor(i, e, t) {
    O(this, "poly");
    O(this, "isExterior");
    O(this, "segments");
    O(this, "bbox");
    if (!Array.isArray(i) || i.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = t, this.segments = [], typeof i[0][0] != "number" || typeof i[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const n = je.snap({ x: new Be(i[0][0]), y: new Be(i[0][1]) });
    this.bbox = {
      ll: { x: n.x, y: n.y },
      ur: { x: n.x, y: n.y }
    };
    let r = n;
    for (let u = 1, a = i.length; u < a; u++) {
      if (typeof i[u][0] != "number" || typeof i[u][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      const s = je.snap({ x: new Be(i[u][0]), y: new Be(i[u][1]) });
      s.x.eq(r.x) && s.y.eq(r.y) || (this.segments.push(jt.fromRing(r, s, this)), s.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = s.x), s.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = s.y), s.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = s.x), s.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = s.y), r = s);
    }
    (!n.x.eq(r.x) || !n.y.eq(r.y)) && this.segments.push(jt.fromRing(r, n, this));
  }
  getSweepEvents() {
    const i = [];
    for (let e = 0, t = this.segments.length; e < t; e++) {
      const n = this.segments[e];
      i.push(n.leftSE), i.push(n.rightSE);
    }
    return i;
  }
}, ks = class {
  constructor(i, e) {
    O(this, "multiPoly");
    O(this, "exteriorRing");
    O(this, "interiorRings");
    O(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new nn(i[0], this, !0), this.bbox = {
      ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y },
      ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y }
    }, this.interiorRings = [];
    for (let t = 1, n = i.length; t < n; t++) {
      const r = new nn(i[t], this, !1);
      r.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = r.bbox.ll.x), r.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = r.bbox.ll.y), r.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = r.bbox.ur.x), r.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = r.bbox.ur.y), this.interiorRings.push(r);
    }
    this.multiPoly = e;
  }
  getSweepEvents() {
    const i = this.exteriorRing.getSweepEvents();
    for (let e = 0, t = this.interiorRings.length; e < t; e++) {
      const n = this.interiorRings[e].getSweepEvents();
      for (let r = 0, u = n.length; r < u; r++)
        i.push(n[r]);
    }
    return i;
  }
}, rn = class {
  constructor(i, e) {
    O(this, "isSubject");
    O(this, "polys");
    O(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof i[0][0][0] == "number" && (i = [i]);
    } catch {
    }
    this.polys = [], this.bbox = {
      ll: { x: new Be(Number.POSITIVE_INFINITY), y: new Be(Number.POSITIVE_INFINITY) },
      ur: { x: new Be(Number.NEGATIVE_INFINITY), y: new Be(Number.NEGATIVE_INFINITY) }
    };
    for (let t = 0, n = i.length; t < n; t++) {
      const r = new ks(i[t], this);
      r.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = r.bbox.ll.x), r.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = r.bbox.ll.y), r.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = r.bbox.ur.x), r.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = r.bbox.ur.y), this.polys.push(r);
    }
    this.isSubject = e;
  }
  getSweepEvents() {
    const i = [];
    for (let e = 0, t = this.polys.length; e < t; e++) {
      const n = this.polys[e].getSweepEvents();
      for (let r = 0, u = n.length; r < u; r++)
        i.push(n[r]);
    }
    return i;
  }
}, Cs = (i, ...e) => qt.run("union", i, e), Os = (i, ...e) => qt.run("difference", i, e);
je.set;
function Rs(i) {
  const e = [];
  if (pi(i, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = i.features[0].properties || {}, n = Os(e[0], ...e.slice(1));
  return n.length === 0 ? null : n.length === 1 ? mi(n[0], t) : bn(n, t);
}
var Ps = Rs;
function Is(i) {
  if (!i) throw new Error("geojson is required");
  var e = [];
  return cs(i, function(t) {
    e.push(t);
  }), ai(e);
}
var As = Is;
function Bs(i, e = {}) {
  const t = [];
  if (pi(i, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const n = Cs(t[0], ...t.slice(1));
  return n.length === 0 ? null : n.length === 1 ? mi(n[0], e.properties) : bn(n, e.properties);
}
var Gs = Bs;
function sn(i, e) {
  const t = Ps(
    ai([
      mi([
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]),
      i
    ])
  );
  if (!t)
    return;
  t.properties = { isMask: !0 };
  const n = zt(Qi(i)), r = (n[2] - n[0]) / 360 / 1e3, u = n[0] < -180, a = n[2] > 180, s = As(i);
  if (s.features.length > 1 && (u || a))
    for (const m of s.features) {
      const c = zt(Qi(m));
      if (a && c[0] < -180 + r)
        for (const v of m.geometry.coordinates)
          for (const _ of v)
            _[0] += 360 - r;
      if (u && c[2] > 180 - r)
        for (const v of m.geometry.coordinates)
          for (const _ of v)
            _[0] -= 360 - r;
    }
  e(
    ai([
      s.features.length < 2 ? i : Gs(s) ?? i,
      t
    ])
  );
}
const on = "EPSG:4326";
function Ws(i) {
  var u;
  const e = i.getProperties(), { isMask: t } = e, n = (u = i.getGeometry()) == null ? void 0 : u.getType(), r = t ? 0 : n === "LineString" || n === "MultiLineString" ? 3 : 2;
  return new nr({
    stroke: t ? void 0 : new Ri({
      color: "#3170fe",
      lineDash: [r, r],
      width: r,
      lineCap: "butt"
    }),
    fill: t ? new Oi({
      color: "#00000020"
    }) : void 0,
    image: new ir({
      src: `/icons/marker_${e.isReverse ? "reverse" : e.isSelected ? "selected" : "unselected"}.svg`,
      anchor: [0.5, 1]
    }),
    zIndex: e.isSelected ? 2 : e.isReverse ? 0 : 1,
    text: e.isSelected && e.tooltip ? new rr({
      backgroundFill: new Oi({ color: "white" }),
      text: e.tooltip,
      offsetY: -40,
      backgroundStroke: new Ri({
        color: "white",
        lineJoin: "round",
        width: 3
      }),
      padding: [2, 0, 0, 2]
    }) : void 0
  });
}
function zs(i, e = {}, t = {}, n = Ws) {
  let r = -1, u, a, s, m = !1;
  const c = new Jn({
    updateWhileAnimating: !0
  });
  i.addLayer(c);
  const v = new tr({});
  c.setSource(v), c.setStyle(n), i.on("click", (N) => {
    i.forEachFeatureAtPixel(N.pixel, (k) => {
      const R = k.getId();
      if (R)
        return N.stopPropagation(), a == null || a({ type: "markerClick", id: R }), k;
    });
  }), i.on("pointermove", (N) => {
    const k = i.forEachFeatureAtPixel(N.pixel, (R) => R.getId());
    u !== k && (u && (a == null || a({
      type: "markerMouseLeave",
      id: u
    })), k && (a == null || a({
      type: "markerMouseEnter",
      id: k
    })), i.getTargetElement().style.cursor = k ? "pointer" : m ? "crosshair" : "", u = k);
  });
  function _() {
    return er() ?? i.getView().getProjection();
  }
  function M(N) {
    return N.transform(on, _());
  }
  const C = (N) => {
    a == null || a({
      type: "mapClick",
      coordinates: Ci(N.coordinate, _())
    });
  };
  return {
    setEventHandler(N) {
      N ? (a = N, i.on("click", C)) : (a = void 0, i.un("click", C));
    },
    flyTo(N, k) {
      i.getView().animate({
        center: Ct(N, _()),
        ...k ? { zoom: k } : {},
        duration: 2e3,
        ...e
      });
    },
    fitBounds(N, k, R) {
      i.getView().fit($n(N, on, _()), {
        padding: [k, k, k, k],
        ...R ? { maxZoom: R } : {},
        duration: 2e3,
        ...t
      });
    },
    indicateReverse(N) {
      m = N, i.getTargetElement().style.cursor = N ? "crosshair" : "";
    },
    setReverseMarker(N) {
      s ? N ? s.getGeometry().setCoordinates(
        Ct(N, _())
      ) : (v.removeFeature(s), s.dispose(), s = void 0) : N && (s = new ze(
        new ti(Ct(N, _()))
      ), s.setProperties({ isReverse: !0 }), v.addFeature(s));
    },
    setFeatures(N, k, R) {
      function I(S) {
        var W;
        if (S)
          for (const z of S.features) {
            const D = z.geometry.type === "Polygon" ? new Ti(z.geometry.coordinates) : z.geometry.type === "MultiPolygon" ? new Mi(z.geometry.coordinates) : null;
            D && v.addFeature(
              new ze({
                isMask: !!((W = z.properties) != null && W.isMask),
                geometry: M(D)
              })
            );
          }
      }
      v.clear(), s && v.addFeature(s);
      e: if (k) {
        let S = !1;
        if (k.geometry.type === "GeometryCollection") {
          const W = k.geometry.geometries.map(
            (z) => z.type === "Polygon" ? new Ti(z.coordinates) : z.type === "MultiPolygon" ? new Mi(z.coordinates) : null
          ).filter((z) => !!z);
          if (W.length > 0)
            v.addFeature(
              new ze(M(new Xn(W)))
            ), S = !0;
          else
            for (const z of k.geometry.geometries)
              z.type === "LineString" ? (v.addFeature(
                new ze(
                  M(new Ni(z.coordinates))
                )
              ), S = !0) : z.type === "MultiLineString" && v.addFeature(
                new ze(
                  M(new ki(z.coordinates))
                )
              ), S = !0;
        }
        if (!S) {
          if (k.geometry.type === "Polygon")
            sn(k, I);
          else if (k.geometry.type === "MultiPolygon")
            sn(k, I);
          else if (k.geometry.type === "LineString") {
            v.addFeature(
              new ze(
                M(new Ni(k.geometry.coordinates))
              )
            );
            break e;
          } else if (k.geometry.type === "MultiLineString") {
            v.addFeature(
              new ze(
                M(new ki(k.geometry.coordinates))
              )
            );
            break e;
          }
        }
        if (!R && !k.geometry.type.endsWith("Point"))
          break e;
        v.addFeature(new ze(M(new ti(k.center))));
      }
      for (const S of N ?? []) {
        if (S === k)
          continue;
        const W = new ze(
          new ti(Ct(S.center, _()))
        );
        W.setId(S.id), W.setProperties({
          fuzzy: !!S.matching_text,
          tooltip: S.place_type[0] === "reverse" ? S.place_name : S.place_name.replace(/,.*/, "")
        }), v.addFeature(W);
      }
    },
    setSelectedMarker(N) {
      var I, S, W;
      const k = v.getFeatures(), R = (I = k[0]) != null && I.getProperties().isReverse ? 1 : 0;
      r > -1 && ((S = k[r + R]) == null || S.setProperties({
        isSelected: !1
      })), N > -1 && ((W = k[N + R]) == null || W.setProperties({
        isSelected: !0
      })), r = N;
    },
    getCenterAndZoom() {
      const N = i.getView(), k = N.getCenter(), R = N.getZoom();
      if (!(!k || R === void 0))
        return [R, ...Ci(k, _())];
    }
  };
}
var ae, nt;
class uo extends Qn {
  constructor(t) {
    const n = document.createElement("div");
    n.className = "ol-search";
    super({
      element: n,
      target: t.target
    });
    $t(this, ae);
    $t(this, nt);
    const { flyTo: r, fullGeometryStyle: u, ...a } = t;
    ei(this, ae, new fs({
      target: n,
      props: {
        flyTo: r === void 0 ? !0 : !!r,
        ...a
      }
    })), ue(this, ae).$on("select", (s) => {
      this.dispatchEvent(new Ds(s.detail.feature));
    }), ue(this, ae).$on("pick", (s) => {
      this.dispatchEvent(new js(s.detail.feature));
    }), ue(this, ae).$on("featureslisted", (s) => {
      this.dispatchEvent(new Fs(s.detail.features));
    }), ue(this, ae).$on("featuresmarked", (s) => {
      this.dispatchEvent(new Us(s.detail.features));
    }), ue(this, ae).$on("response", (s) => {
      this.dispatchEvent(
        new Hs(s.detail.url, s.detail.featureCollection)
      );
    }), ue(this, ae).$on("optionsvisibilitychange", (s) => {
      this.dispatchEvent(
        new qs(s.detail.optionsVisible)
      );
    }), ue(this, ae).$on("reversetoggle", (s) => {
      this.dispatchEvent(new Zs(s.detail.reverse));
    }), ue(this, ae).$on("querychange", (s) => {
      this.dispatchEvent(new Vs(s.detail.query));
    }), ei(this, nt, t);
  }
  setMap(t) {
    var n;
    if (super.setMap(t), t) {
      const {
        // marker,
        // showResultMarkers,
        flyTo: r,
        fullGeometryStyle: u
      } = ue(this, nt), a = zs(
        t,
        typeof r == "boolean" ? void 0 : r,
        typeof r == "boolean" ? void 0 : r,
        // marker,
        // showResultMarkers,
        u
      );
      (n = ue(this, ae)) == null || n.$set({ mapController: a });
    }
  }
  /**
   * Update the control options.
   *
   * @param options options to update
   */
  setOptions(t) {
    var a;
    Object.assign(ue(this, nt), t);
    const { flyTo: n, fullGeometryStyle: r, ...u } = ue(this, nt);
    (a = ue(this, ae)) == null || a.$set({
      ...u,
      flyTo: n === void 0 ? !0 : !!n
    });
  }
  /**
   * Set the content of search input box.
   *
   * @param value text to set
   * @param submit perform the search
   */
  setQuery(t, n = !0) {
    var r;
    (r = ue(this, ae)) == null || r.setQuery(t, n);
  }
  /**
   * Clear geocoding search results from the map.
   */
  clearMap() {
    var t;
    (t = ue(this, ae)) == null || t.clearMap();
  }
  /**
   * Clear search result list.
   */
  clearList() {
    var t;
    (t = ue(this, ae)) == null || t.clearList();
  }
  /**
   * Set reverse geocoding mode.
   *
   * @param reverseActive reverse geocoding active
   */
  setReverseMode(t) {
    var n;
    (n = ue(this, ae)) == null || n.$set({ reverseActive: t });
  }
  /**
   * Focus the search input box.
   *
   * @param options [FocusOptions](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#options)
   */
  focus(t) {
    var n;
    (n = ue(this, ae)) == null || n.focus(t);
  }
  /**
   * Blur the search input box.
   */
  blur() {
    var t;
    (t = ue(this, ae)) == null || t.blur();
  }
  // onRemove() {
  //   this.#gc?.$destroy();
  // }
}
ae = new WeakMap(), nt = new WeakMap();
class Ds extends Xe {
  constructor(t) {
    super("select");
    O(this, "feature");
    this.feature = t;
  }
}
class Fs extends Xe {
  constructor(t) {
    super("featureslisted");
    O(this, "features");
    this.features = t;
  }
}
class Us extends Xe {
  constructor(t) {
    super("featuresmarked");
    O(this, "features");
    this.features = t;
  }
}
class qs extends Xe {
  constructor(t) {
    super("optionsvisibilitychange");
    O(this, "optionsVisible");
    this.optionsVisible = t;
  }
}
class js extends Xe {
  constructor(t) {
    super("pick");
    O(this, "feature");
    this.feature = t;
  }
}
class Vs extends Xe {
  constructor(t) {
    super("querychange");
    O(this, "query");
    this.query = t;
  }
}
class Hs extends Xe {
  constructor(t, n) {
    super("response");
    O(this, "url");
    O(this, "featureCollection");
    this.url = t, this.featureCollection = n;
  }
}
class Zs extends Xe {
  constructor(t) {
    super("reversetoggle");
    O(this, "reverse");
    this.reverse = t;
  }
}
export {
  Fs as FeaturesListedEvent,
  Us as FeaturesMarkedEvent,
  uo as GeocodingControl,
  qs as OptionsVisibilityChangeEvent,
  js as PickEvent,
  Vs as QueryChangeEvent,
  Hs as ResponseEvent,
  Zs as ReverseToggleEvent,
  Ds as SelectEvent,
  zs as createOpenLayersMapController
};
//# sourceMappingURL=openlayers.js.map
