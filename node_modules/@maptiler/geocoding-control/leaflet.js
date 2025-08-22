var Hn = Object.defineProperty;
var _i = (i) => {
  throw TypeError(i);
};
var Vn = (i, e, t) => e in i ? Hn(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var P = (i, e, t) => Vn(i, typeof e != "symbol" ? e + "" : e, t), Si = (i, e, t) => e.has(i) || _i("Cannot " + t);
var ve = (i, e, t) => (Si(i, e, "read from private field"), t ? t.call(i) : e.get(i)), Jt = (i, e, t) => e.has(i) ? _i("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), $t = (i, e, t, n) => (Si(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t);
import * as ke from "leaflet";
function te() {
}
function Kn(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function tn(i) {
  return i();
}
function xi() {
  return /* @__PURE__ */ Object.create(null);
}
function He(i) {
  i.forEach(tn);
}
function nn(i) {
  return typeof i == "function";
}
function Je(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Rt;
function ge(i, e) {
  return i === e ? !0 : (Rt || (Rt = document.createElement("a")), Rt.href = e, i === Rt.href);
}
function Yn(i) {
  return Object.keys(i).length === 0;
}
function Xn(i, e, t, n) {
  if (i) {
    const r = rn(i, e, t, n);
    return i[0](r);
  }
}
function rn(i, e, t, n) {
  return i[1] && n ? Kn(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function Qn(i, e, t, n) {
  return i[2], e.dirty;
}
function Jn(i, e, t, n, r, u) {
  if (r) {
    const a = rn(e, t, n, u);
    i.p(a, r);
  }
}
function $n(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function Dt(i) {
  return i ?? "";
}
function H(i, e) {
  i.appendChild(e);
}
function ee(i, e, t) {
  i.insertBefore(e, t || null);
}
function J(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function Q(i) {
  return document.createElement(i);
}
function Re(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function Xe(i) {
  return document.createTextNode(i);
}
function Le() {
  return Xe(" ");
}
function er() {
  return Xe("");
}
function ce(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function tr(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function S(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function ir(i) {
  return Array.from(i.childNodes);
}
function xt(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Ti(i, e) {
  i.value = e ?? "";
}
function We(i, e, t) {
  i.classList.toggle(e, !!t);
}
function nr(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let Tt;
function St(i) {
  Tt = i;
}
function sn() {
  if (!Tt) throw new Error("Function called outside component initialization");
  return Tt;
}
function rr(i) {
  sn().$$.on_destroy.push(i);
}
function on() {
  const i = sn();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const u = nr(
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
function sr(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const ft = [], ni = [];
let ct = [];
const Mi = [], or = /* @__PURE__ */ Promise.resolve();
let ri = !1;
function lr() {
  ri || (ri = !0, or.then(ln));
}
function si(i) {
  ct.push(i);
}
const ei = /* @__PURE__ */ new Set();
let at = 0;
function ln() {
  if (at !== 0)
    return;
  const i = Tt;
  do {
    try {
      for (; at < ft.length; ) {
        const e = ft[at];
        at++, St(e), ur(e.$$);
      }
    } catch (e) {
      throw ft.length = 0, at = 0, e;
    }
    for (St(null), ft.length = 0, at = 0; ni.length; ) ni.pop()();
    for (let e = 0; e < ct.length; e += 1) {
      const t = ct[e];
      ei.has(t) || (ei.add(t), t());
    }
    ct.length = 0;
  } while (ft.length);
  for (; Mi.length; )
    Mi.pop()();
  ri = !1, ei.clear(), St(i);
}
function ur(i) {
  if (i.fragment !== null) {
    i.update(), He(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(si);
  }
}
function ar(i) {
  const e = [], t = [];
  ct.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), ct = e;
}
const Bt = /* @__PURE__ */ new Set();
let st;
function wt() {
  st = {
    r: 0,
    c: [],
    p: st
    // parent group
  };
}
function Et() {
  st.r || He(st.c), st = st.p;
}
function ne(i, e) {
  i && i.i && (Bt.delete(i), i.i(e));
}
function ue(i, e, t, n) {
  if (i && i.o) {
    if (Bt.has(i)) return;
    Bt.add(i), st.c.push(() => {
      Bt.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Ci(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function fr(i, e) {
  ue(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function cr(i, e, t, n, r, u, a, o, g, f, L, x) {
  let C = i.length, N = u.length, M = C;
  const k = {};
  for (; M--; ) k[i[M].key] = M;
  const W = [], O = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), A = [];
  for (M = N; M--; ) {
    const I = x(r, u, M), s = t(I);
    let l = a.get(s);
    l ? A.push(() => l.p(I, e)) : (l = f(s, I), l.c()), O.set(s, W[M] = l), s in k && _.set(s, Math.abs(M - k[s]));
  }
  const z = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
  function U(I) {
    ne(I, 1), I.m(o, L), a.set(I.key, I), L = I.first, N--;
  }
  for (; C && N; ) {
    const I = W[N - 1], s = i[C - 1], l = I.key, c = s.key;
    I === s ? (L = I.first, C--, N--) : O.has(c) ? !a.has(l) || z.has(l) ? U(I) : D.has(c) ? C-- : _.get(l) > _.get(c) ? (D.add(l), U(I)) : (z.add(c), C--) : (g(s, a), C--);
  }
  for (; C--; ) {
    const I = i[C];
    O.has(I.key) || g(I, a);
  }
  for (; N; ) U(W[N - 1]);
  return He(A), W;
}
function Qe(i) {
  i && i.c();
}
function qe(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), si(() => {
    const u = i.$$.on_mount.map(tn).filter(nn);
    i.$$.on_destroy ? i.$$.on_destroy.push(...u) : He(u), i.$$.on_mount = [];
  }), r.forEach(si);
}
function Ze(i, e) {
  const t = i.$$;
  t.fragment !== null && (ar(t.after_update), He(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function hr(i, e) {
  i.$$.dirty[0] === -1 && (ft.push(i), lr(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function $e(i, e, t, n, r, u, a = null, o = [-1]) {
  const g = Tt;
  St(i);
  const f = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: te,
    not_equal: r,
    bound: xi(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (g ? g.$$.context : [])),
    // everything else
    callbacks: xi(),
    dirty: o,
    skip_bound: !1,
    root: e.target || g.$$.root
  };
  a && a(f.root);
  let L = !1;
  if (f.ctx = t ? t(i, e.props || {}, (x, C, ...N) => {
    const M = N.length ? N[0] : C;
    return f.ctx && r(f.ctx[x], f.ctx[x] = M) && (!f.skip_bound && f.bound[x] && f.bound[x](M), L && hr(i, x)), C;
  }) : [], f.update(), L = !0, He(f.before_update), f.fragment = n ? n(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const x = ir(e.target);
      f.fragment && f.fragment.l(x), x.forEach(J);
    } else
      f.fragment && f.fragment.c();
    e.intro && ne(i.$$.fragment), qe(i, e.target, e.anchor), ln();
  }
  St(g);
}
class et {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    P(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    P(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Ze(this, 1), this.$destroy = te;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!nn(t))
      return te;
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
    this.$$set && !Yn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const dr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(dr);
function gr(i) {
  let e, t;
  return {
    c() {
      e = Re("svg"), t = Re("path"), S(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), S(e, "viewBox", "0 0 14 14"), S(e, "width", "13"), S(e, "height", "13"), S(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      ee(n, e, r), H(e, t);
    },
    p: te,
    i: te,
    o: te,
    d(n) {
      n && J(e);
    }
  };
}
class un extends et {
  constructor(e) {
    super(), $e(this, e, null, gr, Je, {});
  }
}
function mr(i) {
  let e, t;
  return {
    c() {
      e = Re("svg"), t = Re("path"), S(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), S(e, "viewBox", "0 0 30 30"), S(e, "fill", "none"), S(e, "xmlns", "http://www.w3.org/2000/svg"), S(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      ee(n, e, r), H(e, t);
    },
    p: te,
    i: te,
    o: te,
    d(n) {
      n && J(e);
    }
  };
}
class an extends et {
  constructor(e) {
    super(), $e(this, e, null, mr, Je, {});
  }
}
function pr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || S(e, "src", t), S(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), S(
        e,
        "title",
        /*placeType*/
        i[7]
      ), S(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && S(e, "src", t), r & /*placeType*/
      128 && S(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && S(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && J(e);
    }
  };
}
function yr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || S(e, "src", t), S(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), S(
        e,
        "title",
        /*placeType*/
        i[7]
      ), S(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && S(e, "src", t), r & /*placeType*/
      128 && S(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && S(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && J(e);
    }
  };
}
function br(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || S(e, "src", t), S(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), S(
        e,
        "title",
        /*placeType*/
        i[7]
      ), S(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && S(e, "src", t), r & /*placeType*/
      128 && S(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && S(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && J(e);
    }
  };
}
function vr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || S(e, "src", t), S(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), S(
        e,
        "title",
        /*placeType*/
        i[7]
      ), S(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && S(e, "src", t), r & /*placeType*/
      128 && S(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && S(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && J(e);
    }
  };
}
function wr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || S(e, "src", t), S(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), S(
        e,
        "title",
        /*placeType*/
        i[7]
      ), S(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && S(e, "src", t), r & /*placeType*/
      128 && S(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && S(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && J(e);
    }
  };
}
function Er(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || S(e, "src", t), S(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), S(
        e,
        "title",
        /*placeType*/
        i[7]
      ), S(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && S(e, "src", t), r & /*placeType*/
      128 && S(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && S(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && J(e);
    }
  };
}
function Lr(i) {
  let e, t;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || S(e, "src", t), S(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), S(
        e,
        "title",
        /*placeType*/
        i[7]
      ), S(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !ge(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && S(e, "src", t), r & /*placeType*/
      128 && S(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && S(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && J(e);
    }
  };
}
function _r(i) {
  let e, t, n, r;
  return {
    c() {
      e = Q("img"), ge(e.src, t = /*imageUrl*/
      i[5]) || S(e, "src", t), S(
        e,
        "alt",
        /*category*/
        i[4]
      ), S(
        e,
        "title",
        /*placeType*/
        i[7]
      ), S(e, "class", "svelte-w9y5n9");
    },
    m(u, a) {
      ee(u, e, a), n || (r = ce(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(u, a) {
      a & /*imageUrl*/
      32 && !ge(e.src, t = /*imageUrl*/
      u[5]) && S(e, "src", t), a & /*category*/
      16 && S(
        e,
        "alt",
        /*category*/
        u[4]
      ), a & /*placeType*/
      128 && S(
        e,
        "title",
        /*placeType*/
        u[7]
      );
    },
    d(u) {
      u && J(e), n = !1, r();
    }
  };
}
function Sr(i) {
  let e, t;
  return {
    c() {
      e = Q("div"), S(e, "class", "sprite-icon svelte-w9y5n9"), S(e, "style", t = `
        width: ${/*spriteIcon*/
      i[6].width / Se}px;
        height: ${/*spriteIcon*/
      i[6].height / Se}px;
        background-image: url(${/*iconsBaseUrl*/
      i[3]}sprite${oi}.png);
        background-position: -${/*spriteIcon*/
      i[6].x / Se}px -${/*spriteIcon*/
      i[6].y / Se}px;
        background-size: ${Oe.width / Se}px ${Oe.height / Se}px;
      `), S(
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
      n[3]}sprite${oi}.png);
        background-position: -${/*spriteIcon*/
      n[6].x / Se}px -${/*spriteIcon*/
      n[6].y / Se}px;
        background-size: ${Oe.width / Se}px ${Oe.height / Se}px;
      `) && S(e, "style", t), r & /*placeType*/
      128 && S(
        e,
        "title",
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && J(e);
    }
  };
}
function Ni(i) {
  let e, t;
  return {
    c() {
      e = Q("span"), t = Xe(
        /*placeType*/
        i[7]
      ), S(e, "class", "secondary svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r), H(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      128 && xt(
        t,
        /*placeType*/
        n[7]
      );
    },
    d(n) {
      n && J(e);
    }
  };
}
function xr(i) {
  let e, t, n, r, u, a, o, g, f, L = (
    /*isReverse*/
    (i[8] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), x, C, N = (
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
  ), M, k, W = (
    /*isReverse*/
    (i[8] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), O, _, A, z, D, U;
  function I(m, h) {
    return h & /*feature*/
    1 && (t = null), h & /*feature*/
    1 && (n = null), h & /*feature*/
    1 && (r = null), h & /*feature*/
    1 && (u = null), Oe && /*spriteIcon*/
    m[6] ? Sr : (
      /*imageUrl*/
      m[5] ? _r : (
        /*feature*/
        m[0].address ? Lr : (t == null && (t = !!/*feature*/
        m[0].id.startsWith("road.")), t ? Er : (n == null && (n = !!/*feature*/
        m[0].id.startsWith("address.")), n ? wr : (r == null && (r = !!/*feature*/
        m[0].id.startsWith("postal_code.")), r ? vr : (u == null && (u = !!/*feature*/
        m[0].id.startsWith("poi.")), u ? br : (
          /*isReverse*/
          m[8] ? yr : pr
        )))))
      )
    );
  }
  let s = I(i, -1), l = s(i), c = N && Ni(i);
  return {
    c() {
      e = Q("li"), l.c(), a = Le(), o = Q("span"), g = Q("span"), f = Q("span"), x = Xe(L), C = Le(), c && c.c(), M = Le(), k = Q("span"), O = Xe(W), S(f, "class", "primary svelte-w9y5n9"), S(g, "class", "svelte-w9y5n9"), S(k, "class", "line2 svelte-w9y5n9"), S(o, "class", "texts svelte-w9y5n9"), S(e, "tabindex", "-1"), S(e, "role", "option"), S(e, "aria-selected", _ = /*style*/
      i[1] === "selected"), S(e, "aria-checked", A = /*style*/
      i[1] === "picked"), S(e, "class", z = Dt(
        /*style*/
        i[1]
      ) + " svelte-w9y5n9");
    },
    m(m, h) {
      ee(m, e, h), l.m(e, null), H(e, a), H(e, o), H(o, g), H(g, f), H(f, x), H(g, C), c && c.m(g, null), H(o, M), H(o, k), H(k, O), D || (U = [
        ce(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[13]
        ),
        ce(
          e,
          "focus",
          /*focus_handler*/
          i[15]
        ),
        ce(
          e,
          "click",
          /*click_handler*/
          i[16]
        )
      ], D = !0);
    },
    p(m, [h]) {
      s === (s = I(m, h)) && l ? l.p(m, h) : (l.d(1), l = s(m), l && (l.c(), l.m(e, a))), h & /*isReverse, feature*/
      257 && L !== (L = /*isReverse*/
      (m[8] ? (
        /*feature*/
        m[0].place_name
      ) : (
        /*feature*/
        m[0].place_name.replace(/,.*/, "")
      )) + "") && xt(x, L), h & /*showPlaceType, feature, imageUrl, isReverse*/
      293 && (N = /*showPlaceType*/
      m[2] === "always" || /*showPlaceType*/
      m[2] !== "never" && !/*feature*/
      m[0].address && !/*feature*/
      m[0].id.startsWith("road.") && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5]) && !/*isReverse*/
      m[8]), N ? c ? c.p(m, h) : (c = Ni(m), c.c(), c.m(g, null)) : c && (c.d(1), c = null), h & /*isReverse, feature*/
      257 && W !== (W = /*isReverse*/
      (m[8] ? "" : (
        /*feature*/
        m[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && xt(O, W), h & /*style*/
      2 && _ !== (_ = /*style*/
      m[1] === "selected") && S(e, "aria-selected", _), h & /*style*/
      2 && A !== (A = /*style*/
      m[1] === "picked") && S(e, "aria-checked", A), h & /*style*/
      2 && z !== (z = Dt(
        /*style*/
        m[1]
      ) + " svelte-w9y5n9") && S(e, "class", z);
    },
    i: te,
    o: te,
    d(m) {
      m && J(e), l.d(), c && c.d(), D = !1, He(U);
    }
  };
}
const fn = typeof devicePixelRatio > "u" ? 1 : devicePixelRatio > 1.25, oi = fn ? "@2x" : "", Se = fn ? 2 : 1;
let Oe, Pt;
function Tr(i, e, t) {
  let n, r, u, { feature: a } = e, { style: o = "default" } = e, { showPlaceType: g } = e, { missingIconsCache: f } = e, { iconsBaseUrl: L } = e;
  const x = on();
  let C, N, M, k;
  function W() {
    Pt ?? (Pt = fetch(`${L}sprite${oi}.json`).then((s) => s.json()).then((s) => {
      Oe = s;
    }).catch(() => {
      Oe = null;
    }));
  }
  function O() {
    N && f.add(N), _();
  }
  function _() {
    Oe !== void 0 ? A() : (W(), Pt == null || Pt.then(A));
  }
  function A() {
    do {
      if (k--, t(4, C = n == null ? void 0 : n[k]), t(6, M = C ? Oe == null ? void 0 : Oe.icons[C] : void 0), M)
        break;
      t(5, N = C ? L + C.replace(/ /g, "_") + ".svg" : void 0);
    } while (k > -1 && (!N || f.has(N)));
  }
  function z(s) {
    sr.call(this, i, s);
  }
  const D = () => O(), U = () => x("select", void 0), I = (s) => {
    document.activeElement !== s.target && x("select", void 0);
  };
  return i.$$set = (s) => {
    "feature" in s && t(0, a = s.feature), "style" in s && t(1, o = s.style), "showPlaceType" in s && t(2, g = s.showPlaceType), "missingIconsCache" in s && t(11, f = s.missingIconsCache), "iconsBaseUrl" in s && t(3, L = s.iconsBaseUrl);
  }, i.$$.update = () => {
    var s, l, c, m, h;
    i.$$.dirty & /*feature*/
    1 && t(12, n = (s = a.properties) == null ? void 0 : s.categories), i.$$.dirty & /*feature*/
    1 && t(8, r = a.place_type[0] === "reverse"), i.$$.dirty & /*feature*/
    1 && t(7, u = ((c = (l = a.properties) == null ? void 0 : l.categories) == null ? void 0 : c.join(", ")) ?? ((h = (m = a.properties) == null ? void 0 : m.place_type_name) == null ? void 0 : h[0]) ?? a.place_type[0]), i.$$.dirty & /*categories*/
    4096 && (k = (n == null ? void 0 : n.length) ?? 0, _());
  }, [
    a,
    o,
    g,
    L,
    C,
    N,
    M,
    u,
    r,
    x,
    O,
    f,
    n,
    z,
    D,
    U,
    I
  ];
}
class Mr extends et {
  constructor(e) {
    super(), $e(this, e, Tr, xr, Je, {
      feature: 0,
      style: 1,
      showPlaceType: 2,
      missingIconsCache: 11,
      iconsBaseUrl: 3
    });
  }
}
function Cr(i) {
  let e;
  return {
    c() {
      e = Q("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="loading-icon svelte-1ocfouu"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', S(e, "class", "svelte-1ocfouu");
    },
    m(t, n) {
      ee(t, e, n);
    },
    p: te,
    i: te,
    o: te,
    d(t) {
      t && J(e);
    }
  };
}
class Nr extends et {
  constructor(e) {
    super(), $e(this, e, null, Cr, Je, {});
  }
}
function kr(i) {
  let e, t, n;
  return {
    c() {
      e = Re("svg"), t = Re("path"), S(t, "stroke-width", "4"), S(t, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), S(t, "class", "svelte-gzo3ar"), S(e, "width", n = /*displayIn*/
      i[0] === "list" ? 20 : void 0), S(e, "viewBox", "0 0 70 85"), S(e, "fill", "none"), S(e, "class", "svelte-gzo3ar"), We(
        e,
        "in-map",
        /*displayIn*/
        i[0] !== "list"
      ), We(
        e,
        "list-icon",
        /*displayIn*/
        i[0] === "list"
      );
    },
    m(r, u) {
      ee(r, e, u), H(e, t);
    },
    p(r, [u]) {
      u & /*displayIn*/
      1 && n !== (n = /*displayIn*/
      r[0] === "list" ? 20 : void 0) && S(e, "width", n), u & /*displayIn*/
      1 && We(
        e,
        "in-map",
        /*displayIn*/
        r[0] !== "list"
      ), u & /*displayIn*/
      1 && We(
        e,
        "list-icon",
        /*displayIn*/
        r[0] === "list"
      );
    },
    i: te,
    o: te,
    d(r) {
      r && J(e);
    }
  };
}
function Or(i, e, t) {
  let { displayIn: n } = e;
  return i.$$set = (r) => {
    "displayIn" in r && t(0, n = r.displayIn);
  }, [n];
}
class Rr extends et {
  constructor(e) {
    super(), $e(this, e, Or, kr, Je, { displayIn: 0 });
  }
}
function Pr(i) {
  let e, t;
  return {
    c() {
      e = Re("svg"), t = Re("path"), S(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), S(e, "viewBox", "0 0 60.006 21.412"), S(e, "width", "14"), S(e, "height", "20"), S(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      ee(n, e, r), H(e, t);
    },
    p: te,
    i: te,
    o: te,
    d(n) {
      n && J(e);
    }
  };
}
class Ar extends et {
  constructor(e) {
    super(), $e(this, e, null, Pr, Je, {});
  }
}
function Ir(i) {
  let e, t, n;
  return {
    c() {
      e = Re("svg"), t = Re("circle"), n = Re("path"), S(t, "cx", "4.789"), S(t, "cy", "4.787"), S(t, "r", "3.85"), S(t, "class", "svelte-1aq105l"), S(n, "d", "M12.063 12.063 7.635 7.635"), S(n, "class", "svelte-1aq105l"), S(e, "xmlns", "http://www.w3.org/2000/svg"), S(e, "width", "13"), S(e, "height", "13"), S(e, "viewBox", "0 0 13 13"), S(e, "class", "svelte-1aq105l");
    },
    m(r, u) {
      ee(r, e, u), H(e, t), H(e, n);
    },
    p: te,
    i: te,
    o: te,
    d(r) {
      r && J(e);
    }
  };
}
class Br extends et {
  constructor(e) {
    super(), $e(this, e, null, Ir, Je, {});
  }
}
function Gr(i, e, t) {
  const n = e[1], r = e[0], u = n - r;
  return i === n && t ? i : ((i - r) % u + u) % u + r;
}
function Mt(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let pt;
async function Wr(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (pt && r.cachedLocationExpiry && pt.time + r.cachedLocationExpiry > Date.now()) {
          if (!pt.coords)
            break e;
          return pt.coords;
        }
        let u;
        try {
          return u = await new Promise((a, o) => {
            t.signal.addEventListener("abort", () => {
              o(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (g) => {
                a(
                  [g.coords.longitude, g.coords.latitude].map((f) => f.toFixed(6)).join(",")
                );
              },
              (g) => {
                o(g);
              },
              r
            );
          }), u;
        } catch {
        } finally {
          r.cachedLocationExpiry && (pt = {
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
const Dr = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, ki = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, Oi = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, Ri = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Pi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, Ai = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function zr(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((N) => Number(N.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), u = Math.abs(n), a = t > 0 ? "N" : "S", o = n > 0 ? "E" : "W";
    let g;
    i == "DD" && (g = `${r}° ${a}, ${u}° ${o}`);
    const f = Math.floor(r), L = Math.floor(u), x = (r - f) * 60, C = (u - L) * 60;
    if (i == "DM") {
      let N = Ii(x, 3).toFixed(3).padStart(6, "0"), M = Ii(C, 3).toFixed(3).padStart(6, "0");
      N.endsWith(".000") && M.endsWith(".000") && (N = N.replace(/\.000$/, ""), M = M.replace(/\.000$/, "")), g = `${f}° ${N}' ${a}, ${L}° ${M}' ${o}`;
    }
    if (i == "DMS") {
      const N = Math.floor(x), M = Math.floor(C);
      let k = ((x - N) * 60).toFixed(1).padStart(4, "0"), W = ((C - M) * 60).toFixed(1).padStart(4, "0");
      const O = N.toString().padStart(2, "0"), _ = M.toString().padStart(2, "0");
      k.endsWith(".0") && W.endsWith(".0") && (k = k.replace(/\.0$/, ""), W = W.replace(/\.0$/, "")), g = `${f}° ${O}' ${k}" ${a}, ${L}° ${_}' ${W}" ${o}`;
    }
    return g;
  } else
    throw new Error("no decimal coordinates to convert");
}
function Ii(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function hi(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", u = "", a = null, o = [], g = !1;
  if (Dr.test(i))
    throw new Error("invalid coordinate value");
  if (ki.test(i))
    if (o = ki.exec(i), g = yt(o), g)
      t = Math.abs(o[1]) + o[2] / 60, Number(o[1]) < 0 && (t *= -1), n = Math.abs(o[3]) + o[4] / 60, Number(o[3]) < 0 && (n *= -1), a = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (Oi.test(i))
    if (o = Oi.exec(i), g = yt(o), g) {
      if (t = o[2], n = o[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), a = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      o[1] ? (r = o[1], u = o[5]) : o[4] && (r = o[4], u = o[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Ri.test(i))
    if (o = Ri.exec(i), g = yt(o), g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, a = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[9])), o[11] && (n += o[11] / 60), o[13] && (n += o[13].replace(",", ".") / 3600), parseInt(o[9]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[8]) : o[7] && (r = o[7], u = o[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Pi.test(i))
    if (o = Pi.exec(i), g = yt(o), g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, a = "DM"), o[6] && (t += o[6] / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12] / 60), o[14] && (n += o[14] / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[9]) : o[8] && (r = o[8], u = o[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Ai.test(i)) {
    if (o = Ai.exec(i), g = yt(o), o.filter((f) => f).length <= 5)
      throw new Error("invalid coordinates format");
    if (g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4].replace(",", ".") / 60, a = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12].replace(",", ".") / 60), o[14] && (n += o[14].replace(",", ".") / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[9]) : o[8] && (r = o[8], u = o[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (g) {
    if (Math.abs(n) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if (r && !u || !r && u)
      throw new Error("invalid coordinates value");
    if (r && r == u)
      throw new Error("invalid coordinates format");
    t.toString().includes(",") && (t = t.replace(",", ".")), n.toString().includes(",") && (n = n.replace(",", "."));
    let f = /S|SOUTH/i;
    f.test(r) && t > 0 && (t = -1 * t), f = /W|WEST/i, f.test(u) && n > 0 && (n = -1 * n);
    const L = o[0].trim();
    let x, C;
    const N = /[,/;\u0020]/g, M = L.match(N);
    if (M == null) {
      const O = Math.floor(i.length / 2);
      x = L.substring(0, O).trim(), C = L.substring(O).trim();
    } else {
      let O;
      M.length % 2 == 1 ? O = Math.floor(M.length / 2) : O = M.length / 2 - 1;
      let _ = 0;
      if (O == 0)
        _ = L.indexOf(M[0]), x = L.substring(0, _).trim(), C = L.substring(_ + 1).trim();
      else {
        let A = 0, z = 0;
        for (; A <= O; )
          _ = L.indexOf(M[A], z), z = _ + 1, A++;
        x = L.substring(0, _).trim(), C = L.substring(_ + 1).trim();
      }
    }
    const k = x.split(".");
    if (k.length == 2 && k[1] == 0 && k[1].length != 2)
      throw new Error("invalid coordinates format");
    const W = C.split(".");
    if (W.length == 2 && W[1] == 0 && W[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(x) || /^\d+$/.test(C))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), n = Number(Number(n).toFixed(e)), Object.freeze({
      verbatimCoordinates: L,
      verbatimLatitude: x,
      verbatimLongitude: C,
      decimalLatitude: t,
      decimalLongitude: n,
      decimalCoordinates: `${t},${n}`,
      originalFormat: a,
      closeEnough: Ur,
      toCoordinateFormat: zr
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function yt(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let u = 0; u < r; u++) {
    const a = e[u], o = e[u + r], g = t.test(a) && t.test(o), f = n.test(a) && n.test(o), L = a == o;
    if (!(a == null && o == null)) {
      if (a == null || o == null)
        return !1;
      if (g || f || L)
        continue;
      return !1;
    }
  }
  return !0;
}
function Bi(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Ur(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return Bi(this.decimalLatitude, Number(e[0])) && Bi(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Fr = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
hi.to = Fr;
const qr = [
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
], Zr = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, jr = [
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
], Hr = [
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
function Vr() {
  const i = [];
  return qr.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...Zr });
  }), [...i, ...jr, ...Hr];
}
const Kr = Vr();
hi.formats = Kr.map((i) => i.verbatimCoordinates);
const Yr = hi;
function Gi(i, e, t) {
  const n = i.slice();
  return n[97] = e[t], n[99] = t, n;
}
function Wi(i) {
  let e, t, n, r, u;
  return t = new un({}), {
    c() {
      e = Q("button"), Qe(t.$$.fragment), S(e, "type", "button"), S(
        e,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), S(e, "class", "svelte-bz0zu3");
    },
    m(a, o) {
      ee(a, e, o), qe(t, e, null), n = !0, r || (u = ce(
        e,
        "click",
        /*click_handler_2*/
        i[78]
      ), r = !0);
    },
    p(a, o) {
      (!n || o[0] & /*clearButtonTitle*/
      8) && S(
        e,
        "title",
        /*clearButtonTitle*/
        a[3]
      );
    },
    i(a) {
      n || (ne(t.$$.fragment, a), n = !0);
    },
    o(a) {
      ue(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && J(e), Ze(t), r = !1, u();
    }
  };
}
function Di(i) {
  let e, t;
  return e = new Nr({}), {
    c() {
      Qe(e.$$.fragment);
    },
    m(n, r) {
      qe(e, n, r), t = !0;
    },
    i(n) {
      t || (ne(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ue(e.$$.fragment, n), t = !1;
    },
    d(n) {
      Ze(e, n);
    }
  };
}
function zi(i) {
  let e, t, n, r, u;
  return t = new Ar({}), {
    c() {
      e = Q("button"), Qe(t.$$.fragment), S(e, "type", "button"), S(
        e,
        "title",
        /*reverseButtonTitle*/
        i[10]
      ), S(e, "class", "svelte-bz0zu3"), We(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(a, o) {
      ee(a, e, o), qe(t, e, null), n = !0, r || (u = ce(
        e,
        "click",
        /*click_handler_3*/
        i[79]
      ), r = !0);
    },
    p(a, o) {
      (!n || o[0] & /*reverseButtonTitle*/
      1024) && S(
        e,
        "title",
        /*reverseButtonTitle*/
        a[10]
      ), (!n || o[0] & /*reverseActive*/
      1) && We(
        e,
        "active",
        /*reverseActive*/
        a[0]
      );
    },
    i(a) {
      n || (ne(t.$$.fragment, a), n = !0);
    },
    o(a) {
      ue(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && J(e), Ze(t), r = !1, u();
    }
  };
}
function Xr(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, u, a, o = Ci(
    /*listFeatures*/
    i[13]
  );
  const g = (f) => (
    /*feature*/
    f[97].id + /*feature*/
    (f[97].address ? "," + /*feature*/
    f[97].address : "")
  );
  for (let f = 0; f < o.length; f += 1) {
    let L = Gi(i, o, f), x = g(L);
    n.set(x, t[f] = Ui(x, L));
  }
  return {
    c() {
      e = Q("ul");
      for (let f = 0; f < t.length; f += 1)
        t[f].c();
      S(e, "class", "options svelte-bz0zu3"), S(e, "role", "listbox");
    },
    m(f, L) {
      ee(f, e, L);
      for (let x = 0; x < t.length; x += 1)
        t[x] && t[x].m(e, null);
      r = !0, u || (a = [
        ce(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          i[27]
        ),
        ce(
          e,
          "blur",
          /*blur_handler_1*/
          i[83]
        ),
        ce(
          e,
          "keydown",
          /*handleKeyDown*/
          i[23]
        )
      ], u = !0);
    },
    p(f, L) {
      L[0] & /*listFeatures, showPlaceType, selectedItemIndex, picked, missingIconsCache, iconsBaseUrl, handleMouseEnter, pick*/
      102823936 && (o = Ci(
        /*listFeatures*/
        f[13]
      ), wt(), t = cr(t, L, g, 1, f, o, n, e, fr, Ui, null, Gi), Et());
    },
    i(f) {
      if (!r) {
        for (let L = 0; L < o.length; L += 1)
          ne(t[L]);
        r = !0;
      }
    },
    o(f) {
      for (let L = 0; L < t.length; L += 1)
        ue(t[L]);
      r = !1;
    },
    d(f) {
      f && J(e);
      for (let L = 0; L < t.length; L += 1)
        t[L].d();
      u = !1, He(a);
    }
  };
}
function Qr(i) {
  let e, t, n, r, u, a;
  return t = new an({}), {
    c() {
      e = Q("div"), Qe(t.$$.fragment), n = Le(), r = Q("div"), u = Xe(
        /*noResultsMessage*/
        i[8]
      ), S(r, "class", "svelte-bz0zu3"), S(e, "class", "no-results svelte-bz0zu3");
    },
    m(o, g) {
      ee(o, e, g), qe(t, e, null), H(e, n), H(e, r), H(r, u), a = !0;
    },
    p(o, g) {
      (!a || g[0] & /*noResultsMessage*/
      256) && xt(
        u,
        /*noResultsMessage*/
        o[8]
      );
    },
    i(o) {
      a || (ne(t.$$.fragment, o), a = !0);
    },
    o(o) {
      ue(t.$$.fragment, o), a = !1;
    },
    d(o) {
      o && J(e), Ze(t);
    }
  };
}
function Jr(i) {
  let e = "", t;
  return {
    c() {
      t = Xe(e);
    },
    m(n, r) {
      ee(n, t, r);
    },
    p: te,
    i: te,
    o: te,
    d(n) {
      n && J(t);
    }
  };
}
function $r(i) {
  let e, t, n, r, u, a, o, g, f, L, x;
  return t = new an({}), g = new un({}), {
    c() {
      e = Q("div"), Qe(t.$$.fragment), n = Le(), r = Q("div"), u = Xe(
        /*errorMessage*/
        i[7]
      ), a = Le(), o = Q("button"), Qe(g.$$.fragment), S(r, "class", "svelte-bz0zu3"), S(o, "class", "svelte-bz0zu3"), S(e, "class", "error svelte-bz0zu3");
    },
    m(C, N) {
      ee(C, e, N), qe(t, e, null), H(e, n), H(e, r), H(r, u), H(e, a), H(e, o), qe(g, o, null), f = !0, L || (x = ce(
        o,
        "click",
        /*click_handler_4*/
        i[80]
      ), L = !0);
    },
    p(C, N) {
      (!f || N[0] & /*errorMessage*/
      128) && xt(
        u,
        /*errorMessage*/
        C[7]
      );
    },
    i(C) {
      f || (ne(t.$$.fragment, C), ne(g.$$.fragment, C), f = !0);
    },
    o(C) {
      ue(t.$$.fragment, C), ue(g.$$.fragment, C), f = !1;
    },
    d(C) {
      C && J(e), Ze(t), Ze(g), L = !1, x();
    }
  };
}
function Ui(i, e) {
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
  return n = new Mr({
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
      t = er(), Qe(n.$$.fragment), this.first = t;
    },
    m(g, f) {
      ee(g, t, f), qe(n, g, f), r = !0;
    },
    p(g, f) {
      var x;
      e = g;
      const L = {};
      f[0] & /*listFeatures*/
      8192 && (L.feature = /*feature*/
      e[97]), f[0] & /*showPlaceType*/
      2048 && (L.showPlaceType = /*showPlaceType*/
      e[11]), f[0] & /*selectedItemIndex, listFeatures, picked*/
      57344 && (L.style = /*selectedItemIndex*/
      e[15] === /*i*/
      e[99] ? "selected" : (
        /*picked*/
        ((x = e[14]) == null ? void 0 : x.id) === /*feature*/
        e[97].id ? "picked" : "default"
      )), f[0] & /*iconsBaseUrl*/
      4096 && (L.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(L);
    },
    i(g) {
      r || (ne(n.$$.fragment, g), r = !0);
    },
    o(g) {
      ue(n.$$.fragment, g), r = !1;
    },
    d(g) {
      g && J(t), Ze(n, g);
    }
  };
}
function es(i) {
  let e, t, n, r, u, a, o, g, f, L, x, C, N, M, k, W, O, _, A, z = !1;
  u = new Br({});
  let D = !/*abortController*/
  i[20] && Wi(i), U = (
    /*abortController*/
    i[20] && Di()
  ), I = (
    /*enableReverse*/
    i[6] === "button" && zi(i)
  );
  const s = (
    /*#slots*/
    i[70].default
  ), l = Xn(
    s,
    i,
    /*$$scope*/
    i[69],
    null
  ), c = [$r, Jr, Qr, Xr], m = [];
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
  return ~(M = h(i)) && (k = m[M] = c[M](i)), {
    c() {
      e = Le(), t = Q("form"), n = Q("div"), r = Q("button"), Qe(u.$$.fragment), a = Le(), o = Q("input"), g = Le(), f = Q("div"), D && D.c(), L = Le(), U && U.c(), x = Le(), I && I.c(), C = Le(), l && l.c(), N = Le(), k && k.c(), S(r, "class", "search-button svelte-bz0zu3"), S(r, "type", "button"), S(
        o,
        "placeholder",
        /*placeholder*/
        i[9]
      ), S(
        o,
        "aria-label",
        /*placeholder*/
        i[9]
      ), S(o, "class", "svelte-bz0zu3"), S(f, "class", "clear-button-container svelte-bz0zu3"), We(
        f,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), S(n, "class", "input-group svelte-bz0zu3"), S(t, "class", W = Dt(
        /*className*/
        i[2]
      ) + " svelte-bz0zu3"), We(
        t,
        "can-collapse",
        /*collapsed*/
        i[5] && /*searchValue*/
        i[1] === ""
      );
    },
    m(d, b) {
      ee(d, e, b), ee(d, t, b), H(t, n), H(n, r), qe(u, r, null), H(n, a), H(n, o), i[72](o), Ti(
        o,
        /*searchValue*/
        i[1]
      ), H(n, g), H(n, f), D && D.m(f, null), H(f, L), U && U.m(f, null), H(n, x), I && I.m(n, null), H(n, C), l && l.m(n, null), H(t, N), ~M && m[M].m(t, null), O = !0, _ || (A = [
        ce(
          r,
          "click",
          /*click_handler*/
          i[71]
        ),
        ce(
          o,
          "input",
          /*input_1_input_handler*/
          i[73]
        ),
        ce(
          o,
          "focus",
          /*focus_handler*/
          i[74]
        ),
        ce(
          o,
          "blur",
          /*blur_handler*/
          i[75]
        ),
        ce(
          o,
          "click",
          /*click_handler_1*/
          i[76]
        ),
        ce(
          o,
          "keydown",
          /*handleKeyDown*/
          i[23]
        ),
        ce(
          o,
          "input",
          /*handleInput*/
          i[24]
        ),
        ce(
          o,
          "change",
          /*change_handler*/
          i[77]
        ),
        ce(t, "submit", tr(
          /*handleSubmit*/
          i[22]
        ))
      ], _ = !0);
    },
    p(d, b) {
      (!O || b[0] & /*placeholder*/
      512) && S(
        o,
        "placeholder",
        /*placeholder*/
        d[9]
      ), (!O || b[0] & /*placeholder*/
      512) && S(
        o,
        "aria-label",
        /*placeholder*/
        d[9]
      ), b[0] & /*searchValue*/
      2 && o.value !== /*searchValue*/
      d[1] && Ti(
        o,
        /*searchValue*/
        d[1]
      ), /*abortController*/
      d[20] ? D && (wt(), ue(D, 1, 1, () => {
        D = null;
      }), Et()) : D ? (D.p(d, b), b[0] & /*abortController*/
      1048576 && ne(D, 1)) : (D = Wi(d), D.c(), ne(D, 1), D.m(f, L)), /*abortController*/
      d[20] ? U ? b[0] & /*abortController*/
      1048576 && ne(U, 1) : (U = Di(), U.c(), ne(U, 1), U.m(f, null)) : U && (wt(), ue(U, 1, 1, () => {
        U = null;
      }), Et()), (!O || b[0] & /*searchValue*/
      2) && We(
        f,
        "displayable",
        /*searchValue*/
        d[1] !== ""
      ), /*enableReverse*/
      d[6] === "button" ? I ? (I.p(d, b), b[0] & /*enableReverse*/
      64 && ne(I, 1)) : (I = zi(d), I.c(), ne(I, 1), I.m(n, C)) : I && (wt(), ue(I, 1, 1, () => {
        I = null;
      }), Et()), l && l.p && (!O || b[2] & /*$$scope*/
      128) && Jn(
        l,
        s,
        d,
        /*$$scope*/
        d[69],
        O ? Qn(
          s,
          /*$$scope*/
          d[69],
          b,
          null
        ) : $n(
          /*$$scope*/
          d[69]
        ),
        null
      );
      let p = M;
      M = h(d), M === p ? ~M && m[M].p(d, b) : (k && (wt(), ue(m[p], 1, 1, () => {
        m[p] = null;
      }), Et()), ~M ? (k = m[M], k ? k.p(d, b) : (k = m[M] = c[M](d), k.c()), ne(k, 1), k.m(t, null)) : k = null), (!O || b[0] & /*className*/
      4 && W !== (W = Dt(
        /*className*/
        d[2]
      ) + " svelte-bz0zu3")) && S(t, "class", W), (!O || b[0] & /*className, collapsed, searchValue*/
      38) && We(
        t,
        "can-collapse",
        /*collapsed*/
        d[5] && /*searchValue*/
        d[1] === ""
      );
    },
    i(d) {
      O || (ne(z), ne(u.$$.fragment, d), ne(D), ne(U), ne(I), ne(l, d), ne(k), O = !0);
    },
    o(d) {
      ue(z), ue(u.$$.fragment, d), ue(D), ue(U), ue(I), ue(l, d), ue(k), O = !1;
    },
    d(d) {
      d && (J(e), J(t)), Ze(u), i[72](null), D && D.d(), U && U.d(), I && I.d(), l && l.d(d), ~M && m[M].d(), _ = !1, He(A);
    }
  };
}
function ts(i, e, t) {
  let n, r, u, { $$slots: a = {}, $$scope: o } = e;
  const g = {
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
  let { class: f = void 0 } = e, { apiKey: L = void 0 } = e, { bbox: x = void 0 } = e, { clearButtonTitle: C = "clear" } = e, { clearOnBlur: N = !1 } = e, { clearListOnPick: M = !1 } = e, { keepListOpen: k = !1 } = e, { collapsed: W = !1 } = e, { country: O = void 0 } = e, { debounceSearch: _ = 200 } = e, { enableReverse: A = "never" } = e, { errorMessage: z = "Something went wrong…" } = e, { filter: D = () => !0 } = e, { flyTo: U = !0 } = e, { fuzzyMatch: I = !0 } = e, { language: s = void 0 } = e, { limit: l = void 0 } = e;
  const c = 41415112612;
  let { reverseGeocodingLimit: m = c } = e, { mapController: h = void 0 } = e, { minLength: d = 2 } = e, { noResultsMessage: b = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: p = "Search" } = e, { proximity: y = [{ type: "server-geolocation" }] } = e, { reverseActive: v = A === "always" } = e, { reverseButtonTitle: w = "toggle reverse geocoding" } = e, { searchValue: T = "" } = e, { pickedResultStyle: R = "full-geometry" } = e, { showPlaceType: B = "if-needed" } = e, { showResultsWhileTyping: j = !0 } = e, { selectFirst: K = !0 } = e, { flyToSelected: ie = !1 } = e, { markerOnSelected: Z = !0 } = e, { types: V = void 0 } = e;
  const ae = [];
  let { reverseGeocodingTypes: ze = ae } = e, { exhaustiveReverseGeocoding: tt = !1 } = e, { excludeTypes: it = !1 } = e;
  const pe = void 0;
  let { reverseGeocodingExcludeTypes: Pe = pe } = e, { zoom: he = g } = e, { apiUrl: fe = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: $ = {} } = e, { iconsBaseUrl: pi = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.1.7/icons/" } = e, { adjustUrlQuery: Zt = () => {
  } } = e, { adjustUrl: jt = () => {
  } } = e;
  function _n(E) {
    Ce.focus(E);
  }
  function Sn() {
    Ce.blur();
  }
  function yi(E, re = !0, oe = !1) {
    t(1, T = E), re ? (t(15, Y = -1), vi()) : (wi(void 0, !oe, oe), setTimeout(() => {
      Ce.focus(), Ce.select();
    }));
  }
  function xn() {
    t(13, q = void 0), t(14, G = void 0), t(15, Y = -1);
  }
  function Tn() {
    t(64, le = []), t(14, G = void 0);
  }
  let q, le, G, bi = "", Ce, Y = -1, Ae, kt = [], nt, lt, ut, Ht, Ue = !1;
  const Mn = /* @__PURE__ */ new Set(), Ve = on();
  rr(() => {
    h && (h.setEventHandler(void 0), h.indicateReverse(!1), h.setSelectedMarker(-1), h.setFeatures(void 0, void 0, !1));
  });
  function vi(E) {
    if (t(17, Ue = !1), lt && (clearTimeout(lt), lt = void 0), Y > -1 && q)
      t(14, G = q[Y]), t(1, T = G.place_type[0] === "reverse" ? G.place_name : G.place_name.replace(/,.*/, "")), t(19, Ae = void 0), t(64, le = void 0), t(15, Y = -1);
    else if (T) {
      const re = E || !Vt(T);
      Kt(T, { exact: !0 }).then(() => {
        t(64, le = q), t(14, G = void 0), re && Cn();
      }).catch((oe) => t(19, Ae = oe));
    }
  }
  function Vt(E) {
    try {
      return Yr(E, 6);
    } catch {
      return !1;
    }
  }
  async function Kt(E, { byId: re = !1, exact: oe = !1 } = {}) {
    var be, Ie, Ke;
    t(19, Ae = void 0), nt == null || nt.abort();
    const ye = new AbortController();
    t(20, nt = ye);
    try {
      const X = Vt(E), dt = new URL(fe + "/" + encodeURIComponent(X ? X.decimalLongitude + "," + X.decimalLatitude : E) + ".json"), _e = dt.searchParams;
      s !== void 0 && _e.set("language", Array.isArray(s) ? s.join(",") : s ?? "");
      const [Qt] = (h == null ? void 0 : h.getCenterAndZoom()) ?? [];
      let Be = (be = !X || ze === ae ? V : ze) == null ? void 0 : be.map((de) => typeof de == "string" ? de : Qt === void 0 || (de[0] ?? 0) <= Qt && Qt < (de[1] ?? 1 / 0) ? de[2] : void 0).filter((de) => de !== void 0);
      Be && (Be = [...new Set(Be)], _e.set("types", Be.join(",")));
      const Li = !X || Pe === pe ? it : Pe;
      if (Li && _e.set("excludeTypes", String(Li)), x && _e.set("bbox", x.map((de) => de.toFixed(6)).join(",")), O && _e.set("country", Array.isArray(O) ? O.join(",") : O), !re && !X) {
        const de = await Wr(h, y, ye);
        de && _e.set("proximity", de), (oe || !j) && _e.set("autocomplete", "false"), _e.set("fuzzyMatch", String(I));
      }
      const gt = m === c ? l : m;
      gt !== void 0 && gt > 1 && (Be == null ? void 0 : Be.length) !== 1 && console.warn("For reverse geocoding when limit > 1 then types must contain single value."), X ? (gt === 1 || gt !== void 0 && (tt || (Be == null ? void 0 : Be.length) === 1)) && _e.set("limit", String(gt)) : l !== void 0 && _e.set("limit", String(l)), L && _e.set("key", L), Zt(_e), jt(dt);
      const jn = dt.searchParams.get("types") === "" && dt.searchParams.get("excludeTypes") !== "true", Ot = dt.toString();
      if (Ot === bi) {
        re ? (M && t(13, q = void 0), t(14, G = kt[0])) : (t(13, q = kt), ((Ie = q[Y]) == null ? void 0 : Ie.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1));
        return;
      }
      bi = Ot;
      let mt;
      if (jn)
        mt = { type: "FeatureCollection", features: [] };
      else {
        const de = await fetch(Ot, { signal: ye.signal, ...$ });
        if (!de.ok)
          throw new Error(await de.text());
        mt = await de.json();
      }
      Ve("response", { url: Ot, featureCollection: mt }), re ? (M && t(13, q = void 0), t(14, G = mt.features[0]), kt = [G]) : (t(13, q = mt.features.filter(D)), X && q.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + X.decimalLongitude + "_" + X.decimalLatitude,
        text: X.decimalLatitude + ", " + X.decimalLongitude,
        place_name: X.decimalLatitude + ", " + X.decimalLongitude,
        place_type: ["reverse"],
        center: [X.decimalLongitude, X.decimalLatitude],
        bbox: [
          X.decimalLongitude,
          X.decimalLatitude,
          X.decimalLongitude,
          X.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [X.decimalLongitude, X.decimalLatitude]
        }
      }), kt = q, ((Ke = q[Y]) == null ? void 0 : Ke.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1), X && Ce.focus());
    } catch (X) {
      if (X && typeof X == "object" && "name" in X && X.name === "AbortError")
        return;
      throw X;
    } finally {
      ye === nt && t(20, nt = void 0);
    }
  }
  function Cn() {
    var ye;
    if (!(le != null && le.length) || !U)
      return;
    const E = [180, 90, -180, -90], re = !le.some((be) => !be.matching_text);
    let oe;
    for (const be of le) {
      const Ie = ht(be);
      if (oe = oe === void 0 ? Ie : Ie === void 0 ? oe : Math.max(oe, Ie), re || !be.matching_text)
        for (const Ke of [0, 1, 2, 3])
          E[Ke] = Math[Ke < 2 ? "min" : "max"](E[Ke], ((ye = be.bbox) == null ? void 0 : ye[Ke]) ?? be.center[Ke % 2]);
    }
    h && le.length > 0 && (G && E[0] === E[2] && E[1] === E[3] ? h.flyTo(G.center, ht(G)) : h.fitBounds(Mt(E), 50, oe));
  }
  function Yt() {
    !G || !h || (!G.bbox || G.bbox[0] === G.bbox[2] && G.bbox[1] === G.bbox[3] ? h.flyTo(G.center, ht(G)) : h.fitBounds(Mt(G.bbox), 50, ht(G)));
  }
  function ht(E) {
    var oe;
    if (!E.bbox || E.bbox[0] !== E.bbox[2] && E.bbox[1] !== E.bbox[3])
      return;
    const re = E.id.replace(/\..*/, "");
    return (Array.isArray((oe = E.properties) == null ? void 0 : oe.categories) ? E.properties.categories.reduce(
      (ye, be) => {
        const Ie = he[re + "." + be];
        return ye === void 0 ? Ie : Ie === void 0 ? ye : Math.max(ye, Ie);
      },
      void 0
    ) : void 0) ?? he[re];
  }
  function Nn(E) {
    t(0, v = A === "always"), t(13, q = void 0), t(14, G = void 0), t(15, Y = -1), yi(E[1].toFixed(6) + ", " + Gr(E[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function kn(E) {
    if (!q)
      return;
    let re = E.key === "ArrowDown" ? 1 : E.key === "ArrowUp" ? -1 : 0;
    re && (Ce.focus(), t(17, Ue = !0), E.preventDefault(), G && Y === -1 && t(15, Y = q.findIndex((oe) => oe.id === (G == null ? void 0 : G.id))), Y === (G || K ? 0 : -1) && re === -1 && t(15, Y = q.length), t(15, Y += re), Y >= q.length && t(15, Y = -1), Y < 0 && (G || K) && t(15, Y = 0));
  }
  function wi(E, re = !0, oe = !1) {
    if (t(19, Ae = void 0), t(14, G = void 0), t(17, Ue = !0), j || oe) {
      if (lt && clearTimeout(lt), T.length < d)
        return;
      const ye = T;
      lt = window.setTimeout(
        () => {
          Kt(ye).catch((be) => t(19, Ae = be));
        },
        re ? _ : 0
      );
    } else
      t(13, q = void 0), t(19, Ae = void 0);
  }
  function Xt(E) {
    G && (G == null ? void 0 : G.id) === (E == null ? void 0 : E.id) ? Yt() : (t(14, G = E), t(1, T = E.place_name));
  }
  function Ei(E) {
    t(15, Y = E);
  }
  function On() {
    (!K || G) && t(15, Y = -1), ie && Yt();
  }
  const Rn = () => Ce.focus();
  function Pn(E) {
    ni[E ? "unshift" : "push"](() => {
      Ce = E, t(18, Ce);
    });
  }
  function An() {
    T = this.value, t(1, T), t(17, Ue), t(31, N), t(16, ut);
  }
  const In = () => t(17, Ue = !0), Bn = () => t(17, Ue = !1), Gn = () => t(17, Ue = !0), Wn = () => t(14, G = void 0), Dn = () => {
    t(1, T = ""), t(14, G = void 0), Ce.focus();
  }, zn = () => t(0, v = !v), Un = () => t(19, Ae = void 0), Fn = (E) => Ei(E), qn = (E) => Xt(E), Zn = () => {
  };
  return i.$$set = (E) => {
    "class" in E && t(2, f = E.class), "apiKey" in E && t(29, L = E.apiKey), "bbox" in E && t(30, x = E.bbox), "clearButtonTitle" in E && t(3, C = E.clearButtonTitle), "clearOnBlur" in E && t(31, N = E.clearOnBlur), "clearListOnPick" in E && t(32, M = E.clearListOnPick), "keepListOpen" in E && t(4, k = E.keepListOpen), "collapsed" in E && t(5, W = E.collapsed), "country" in E && t(33, O = E.country), "debounceSearch" in E && t(34, _ = E.debounceSearch), "enableReverse" in E && t(6, A = E.enableReverse), "errorMessage" in E && t(7, z = E.errorMessage), "filter" in E && t(35, D = E.filter), "flyTo" in E && t(36, U = E.flyTo), "fuzzyMatch" in E && t(37, I = E.fuzzyMatch), "language" in E && t(38, s = E.language), "limit" in E && t(39, l = E.limit), "reverseGeocodingLimit" in E && t(40, m = E.reverseGeocodingLimit), "mapController" in E && t(41, h = E.mapController), "minLength" in E && t(42, d = E.minLength), "noResultsMessage" in E && t(8, b = E.noResultsMessage), "placeholder" in E && t(9, p = E.placeholder), "proximity" in E && t(43, y = E.proximity), "reverseActive" in E && t(0, v = E.reverseActive), "reverseButtonTitle" in E && t(10, w = E.reverseButtonTitle), "searchValue" in E && t(1, T = E.searchValue), "pickedResultStyle" in E && t(44, R = E.pickedResultStyle), "showPlaceType" in E && t(11, B = E.showPlaceType), "showResultsWhileTyping" in E && t(45, j = E.showResultsWhileTyping), "selectFirst" in E && t(46, K = E.selectFirst), "flyToSelected" in E && t(47, ie = E.flyToSelected), "markerOnSelected" in E && t(48, Z = E.markerOnSelected), "types" in E && t(49, V = E.types), "reverseGeocodingTypes" in E && t(50, ze = E.reverseGeocodingTypes), "exhaustiveReverseGeocoding" in E && t(51, tt = E.exhaustiveReverseGeocoding), "excludeTypes" in E && t(52, it = E.excludeTypes), "reverseGeocodingExcludeTypes" in E && t(53, Pe = E.reverseGeocodingExcludeTypes), "zoom" in E && t(54, he = E.zoom), "apiUrl" in E && t(55, fe = E.apiUrl), "fetchParameters" in E && t(56, $ = E.fetchParameters), "iconsBaseUrl" in E && t(12, pi = E.iconsBaseUrl), "adjustUrlQuery" in E && t(57, Zt = E.adjustUrlQuery), "adjustUrl" in E && t(58, jt = E.adjustUrl), "$$scope" in E && t(69, o = E.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    64 && t(0, v = A === "always"), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && R !== "marker-only" && G && !G.address && G.geometry.type === "Point" && G.place_type[0] !== "reverse" && Kt(G.id, { byId: !0 }).catch((E) => t(19, Ae = E)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, flyTo, clearListOnPick*/
    1058 | i.$$.dirty[2] & /*prevIdToFly*/
    8 && (h && G && G.id !== Ht && U && (Yt(), M && t(13, q = void 0), t(64, le = void 0), t(15, Y = -1)), t(65, Ht = G == null ? void 0 : G.id)), i.$$.dirty[0] & /*focused, focusedDelayed*/
    196608 | i.$$.dirty[1] & /*clearOnBlur*/
    1 && setTimeout(() => {
      t(16, ut = Ue), N && !ut && t(1, T = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    2048 && T.length < d && (t(13, q = void 0), t(19, Ae = void 0), t(64, le = q)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex, picked*/
    57344 | i.$$.dirty[1] & /*selectFirst*/
    32768 && K && q != null && q.length && Y == -1 && !G && t(15, Y = 0), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[2] & /*markedFeatures*/
    4 && le !== q && t(64, le = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    73729 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && h && h.setEventHandler((E) => {
      switch (E.type) {
        case "mapClick":
          v && Nn(E.coordinates);
          break;
        case "markerClick":
          {
            const re = q == null ? void 0 : q.find((oe) => oe.id === E.id);
            re && Xt(re);
          }
          break;
        case "markerMouseEnter":
          le && t(15, Y = ut ? (q == null ? void 0 : q.findIndex((re) => re.id === E.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          le && t(15, Y = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    40960 && t(66, r = q == null ? void 0 : q[Y]), i.$$.dirty[1] & /*mapController, flyTo, flyToSelected*/
    66592 | i.$$.dirty[2] & /*selected*/
    16 && h && r && U && ie && h.flyTo(r.center, ht(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && t(68, n = R === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    132096 | i.$$.dirty[2] & /*showPolygonMarker*/
    64 && (Z || h == null || h.setFeatures(void 0, void 0, n)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, markerOnSelected*/
    132096 | i.$$.dirty[2] & /*markedFeatures, selected, showPolygonMarker*/
    84 && h && Z && !le && (h.setFeatures(r ? [r] : void 0, G, n), h.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures, showPolygonMarker*/
    68 && h && h.setFeatures(le, G, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && le && h && h.setSelectedMarker(Y), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    1024 && h) {
      const E = Vt(T);
      h.setReverseMarker(E ? [E.decimalLongitude, E.decimalLatitude] : void 0);
    }
    i.$$.dirty[2] & /*selected*/
    16 && Ve("select", { feature: r }), i.$$.dirty[0] & /*picked*/
    16384 && Ve("pick", { feature: G }), i.$$.dirty[0] & /*listFeatures, focusedDelayed, keepListOpen*/
    73744 && t(67, u = !!(q != null && q.length) && (ut || k)), i.$$.dirty[2] & /*optionsVisible*/
    32 && Ve("optionsvisibilitychange", { optionsVisible: u }), i.$$.dirty[0] & /*listFeatures*/
    8192 && Ve("featureslisted", { features: q }), i.$$.dirty[2] & /*markedFeatures*/
    4 && Ve("featuresmarked", { features: le }), i.$$.dirty[0] & /*reverseActive*/
    1 && Ve("reversetoggle", { reverse: v }), i.$$.dirty[0] & /*searchValue*/
    2 && Ve("querychange", { query: T }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    1024 && h && h.indicateReverse(v);
  }, [
    v,
    T,
    f,
    C,
    k,
    W,
    A,
    z,
    b,
    p,
    w,
    B,
    pi,
    q,
    G,
    Y,
    ut,
    Ue,
    Ce,
    Ae,
    nt,
    Mn,
    vi,
    kn,
    wi,
    Xt,
    Ei,
    On,
    g,
    L,
    x,
    N,
    M,
    O,
    _,
    D,
    U,
    I,
    s,
    l,
    m,
    h,
    d,
    y,
    R,
    j,
    K,
    ie,
    Z,
    V,
    ze,
    tt,
    it,
    Pe,
    he,
    fe,
    $,
    Zt,
    jt,
    _n,
    Sn,
    yi,
    xn,
    Tn,
    le,
    Ht,
    r,
    u,
    n,
    o,
    a,
    Rn,
    Pn,
    An,
    In,
    Bn,
    Gn,
    Wn,
    Dn,
    zn,
    Un,
    Fn,
    qn,
    Zn
  ];
}
let is = class extends et {
  constructor(e) {
    super(), $e(
      this,
      e,
      ts,
      es,
      Je,
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
function Ct(i, e, t = {}) {
  const n = { type: "Feature" };
  return (t.id === 0 || t.id) && (n.id = t.id), t.bbox && (n.bbox = t.bbox), n.properties = e || {}, n.geometry = i, n;
}
function di(i, e, t = {}) {
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
  return Ct({
    type: "Polygon",
    coordinates: i
  }, e, t);
}
function Nt(i, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = i, t;
}
function cn(i, e, t = {}) {
  return Ct({
    type: "MultiPolygon",
    coordinates: i
  }, e, t);
}
function hn(i, e, t) {
  if (i !== null)
    for (var n, r, u, a, o, g, f, L = 0, x = 0, C, N = i.type, M = N === "FeatureCollection", k = N === "Feature", W = M ? i.features.length : 1, O = 0; O < W; O++) {
      f = M ? i.features[O].geometry : k ? i.geometry : i, C = f ? f.type === "GeometryCollection" : !1, o = C ? f.geometries.length : 1;
      for (var _ = 0; _ < o; _++) {
        var A = 0, z = 0;
        if (a = C ? f.geometries[_] : f, a !== null) {
          g = a.coordinates;
          var D = a.type;
          switch (L = 0, D) {
            case null:
              break;
            case "Point":
              if (e(
                g,
                x,
                O,
                A,
                z
              ) === !1)
                return !1;
              x++, A++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < g.length; n++) {
                if (e(
                  g[n],
                  x,
                  O,
                  A,
                  z
                ) === !1)
                  return !1;
                x++, D === "MultiPoint" && A++;
              }
              D === "LineString" && A++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < g.length; n++) {
                for (r = 0; r < g[n].length - L; r++) {
                  if (e(
                    g[n][r],
                    x,
                    O,
                    A,
                    z
                  ) === !1)
                    return !1;
                  x++;
                }
                D === "MultiLineString" && A++, D === "Polygon" && z++;
              }
              D === "Polygon" && A++;
              break;
            case "MultiPolygon":
              for (n = 0; n < g.length; n++) {
                for (z = 0, r = 0; r < g[n].length; r++) {
                  for (u = 0; u < g[n][r].length - L; u++) {
                    if (e(
                      g[n][r][u],
                      x,
                      O,
                      A,
                      z
                    ) === !1)
                      return !1;
                    x++;
                  }
                  z++;
                }
                A++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < a.geometries.length; n++)
                if (hn(a.geometries[n], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function gi(i, e) {
  var t, n, r, u, a, o, g, f, L, x, C = 0, N = i.type === "FeatureCollection", M = i.type === "Feature", k = N ? i.features.length : 1;
  for (t = 0; t < k; t++) {
    for (o = N ? i.features[t].geometry : M ? i.geometry : i, f = N ? i.features[t].properties : M ? i.properties : {}, L = N ? i.features[t].bbox : M ? i.bbox : void 0, x = N ? i.features[t].id : M ? i.id : void 0, g = o ? o.type === "GeometryCollection" : !1, a = g ? o.geometries.length : 1, r = 0; r < a; r++) {
      if (u = g ? o.geometries[r] : o, u === null) {
        if (e(
          null,
          C,
          f,
          L,
          x
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
            C,
            f,
            L,
            x
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (n = 0; n < u.geometries.length; n++)
            if (e(
              u.geometries[n],
              C,
              f,
              L,
              x
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    C++;
  }
}
function ns(i, e) {
  gi(i, function(t, n, r, u, a) {
    var o = t === null ? null : t.type;
    switch (o) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          Ct(t, r, { bbox: u, id: a }),
          n,
          0
        ) === !1 ? !1 : void 0;
    }
    var g;
    switch (o) {
      case "MultiPoint":
        g = "Point";
        break;
      case "MultiLineString":
        g = "LineString";
        break;
      case "MultiPolygon":
        g = "Polygon";
        break;
    }
    for (var f = 0; f < t.coordinates.length; f++) {
      var L = t.coordinates[f], x = {
        type: g,
        coordinates: L
      };
      if (e(Ct(x, r), n, f) === !1)
        return !1;
    }
  });
}
function rs(i, e = {}) {
  if (i.bbox != null && e.recompute !== !0)
    return i.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return hn(i, (n) => {
    t[0] > n[0] && (t[0] = n[0]), t[1] > n[1] && (t[1] = n[1]), t[2] < n[0] && (t[2] = n[0]), t[3] < n[1] && (t[3] = n[1]);
  }), t;
}
var li = rs;
function ss(i) {
  if (!i)
    throw new Error("geojson is required");
  switch (i.type) {
    case "Feature":
      return dn(i);
    case "FeatureCollection":
      return os(i);
    case "Point":
    case "LineString":
    case "Polygon":
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "GeometryCollection":
      return mi(i);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function dn(i) {
  const e = { type: "Feature" };
  return Object.keys(i).forEach((t) => {
    switch (t) {
      case "type":
      case "properties":
      case "geometry":
        return;
      default:
        e[t] = i[t];
    }
  }), e.properties = gn(i.properties), i.geometry == null ? e.geometry = null : e.geometry = mi(i.geometry), e;
}
function gn(i) {
  const e = {};
  return i && Object.keys(i).forEach((t) => {
    const n = i[t];
    typeof n == "object" ? n === null ? e[t] = null : Array.isArray(n) ? e[t] = n.map((r) => r) : e[t] = gn(n) : e[t] = n;
  }), e;
}
function os(i) {
  const e = { type: "FeatureCollection" };
  return Object.keys(i).forEach((t) => {
    switch (t) {
      case "type":
      case "features":
        return;
      default:
        e[t] = i[t];
    }
  }), e.features = i.features.map((t) => dn(t)), e;
}
function mi(i) {
  const e = { type: i.type };
  return i.bbox && (e.bbox = i.bbox), i.type === "GeometryCollection" ? (e.geometries = i.geometries.map((t) => mi(t)), e) : (e.coordinates = mn(i.coordinates), e);
}
function mn(i) {
  const e = i;
  return typeof e[0] != "object" ? e.slice() : e.map((t) => mn(t));
}
var ls = ss, us = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, ti = Math.ceil, Te = Math.floor, me = "[BigNumber Error] ", Fi = me + "Number primitive has more than 15 significant digits: ", Ne = 1e14, F = 14, qi = 9007199254740991, ii = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Ye = 1e7, we = 1e9;
function pn(i) {
  var e, t, n, r = _.prototype = { constructor: _, toString: null, valueOf: null }, u = new _(1), a = 20, o = 4, g = -7, f = 21, L = -1e7, x = 1e7, C = !1, N = 1, M = 0, k = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, W = "0123456789abcdefghijklmnopqrstuvwxyz", O = !0;
  function _(s, l) {
    var c, m, h, d, b, p, y, v, w = this;
    if (!(w instanceof _)) return new _(s, l);
    if (l == null) {
      if (s && s._isBigNumber === !0) {
        w.s = s.s, !s.c || s.e > x ? w.c = w.e = null : s.e < L ? w.c = [w.e = 0] : (w.e = s.e, w.c = s.c.slice());
        return;
      }
      if ((p = typeof s == "number") && s * 0 == 0) {
        if (w.s = 1 / s < 0 ? (s = -s, -1) : 1, s === ~~s) {
          for (d = 0, b = s; b >= 10; b /= 10, d++) ;
          d > x ? w.c = w.e = null : (w.e = d, w.c = [s]);
          return;
        }
        v = String(s);
      } else {
        if (!us.test(v = String(s))) return n(w, v, p);
        w.s = v.charCodeAt(0) == 45 ? (v = v.slice(1), -1) : 1;
      }
      (d = v.indexOf(".")) > -1 && (v = v.replace(".", "")), (b = v.search(/e/i)) > 0 ? (d < 0 && (d = b), d += +v.slice(b + 1), v = v.substring(0, b)) : d < 0 && (d = v.length);
    } else {
      if (se(l, 2, W.length, "Base"), l == 10 && O)
        return w = new _(s), U(w, a + w.e + 1, o);
      if (v = String(s), p = typeof s == "number") {
        if (s * 0 != 0) return n(w, v, p, l);
        if (w.s = 1 / s < 0 ? (v = v.slice(1), -1) : 1, _.DEBUG && v.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Fi + s);
      } else
        w.s = v.charCodeAt(0) === 45 ? (v = v.slice(1), -1) : 1;
      for (c = W.slice(0, l), d = b = 0, y = v.length; b < y; b++)
        if (c.indexOf(m = v.charAt(b)) < 0) {
          if (m == ".") {
            if (b > d) {
              d = y;
              continue;
            }
          } else if (!h && (v == v.toUpperCase() && (v = v.toLowerCase()) || v == v.toLowerCase() && (v = v.toUpperCase()))) {
            h = !0, b = -1, d = 0;
            continue;
          }
          return n(w, String(s), p, l);
        }
      p = !1, v = t(v, l, 10, w.s), (d = v.indexOf(".")) > -1 ? v = v.replace(".", "") : d = v.length;
    }
    for (b = 0; v.charCodeAt(b) === 48; b++) ;
    for (y = v.length; v.charCodeAt(--y) === 48; ) ;
    if (v = v.slice(b, ++y)) {
      if (y -= b, p && _.DEBUG && y > 15 && (s > qi || s !== Te(s)))
        throw Error(Fi + w.s * s);
      if ((d = d - b - 1) > x)
        w.c = w.e = null;
      else if (d < L)
        w.c = [w.e = 0];
      else {
        if (w.e = d, w.c = [], b = (d + 1) % F, d < 0 && (b += F), b < y) {
          for (b && w.c.push(+v.slice(0, b)), y -= F; b < y; )
            w.c.push(+v.slice(b, b += F));
          b = F - (v = v.slice(b)).length;
        } else
          b -= y;
        for (; b--; v += "0") ;
        w.c.push(+v);
      }
    } else
      w.c = [w.e = 0];
  }
  _.clone = pn, _.ROUND_UP = 0, _.ROUND_DOWN = 1, _.ROUND_CEIL = 2, _.ROUND_FLOOR = 3, _.ROUND_HALF_UP = 4, _.ROUND_HALF_DOWN = 5, _.ROUND_HALF_EVEN = 6, _.ROUND_HALF_CEIL = 7, _.ROUND_HALF_FLOOR = 8, _.EUCLID = 9, _.config = _.set = function(s) {
    var l, c;
    if (s != null)
      if (typeof s == "object") {
        if (s.hasOwnProperty(l = "DECIMAL_PLACES") && (c = s[l], se(c, 0, we, l), a = c), s.hasOwnProperty(l = "ROUNDING_MODE") && (c = s[l], se(c, 0, 8, l), o = c), s.hasOwnProperty(l = "EXPONENTIAL_AT") && (c = s[l], c && c.pop ? (se(c[0], -1e9, 0, l), se(c[1], 0, we, l), g = c[0], f = c[1]) : (se(c, -1e9, we, l), g = -(f = c < 0 ? -c : c))), s.hasOwnProperty(l = "RANGE"))
          if (c = s[l], c && c.pop)
            se(c[0], -1e9, -1, l), se(c[1], 1, we, l), L = c[0], x = c[1];
          else if (se(c, -1e9, we, l), c)
            L = -(x = c < 0 ? -c : c);
          else
            throw Error(me + l + " cannot be zero: " + c);
        if (s.hasOwnProperty(l = "CRYPTO"))
          if (c = s[l], c === !!c)
            if (c)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                C = c;
              else
                throw C = !c, Error(me + "crypto unavailable");
            else
              C = c;
          else
            throw Error(me + l + " not true or false: " + c);
        if (s.hasOwnProperty(l = "MODULO_MODE") && (c = s[l], se(c, 0, 9, l), N = c), s.hasOwnProperty(l = "POW_PRECISION") && (c = s[l], se(c, 0, we, l), M = c), s.hasOwnProperty(l = "FORMAT"))
          if (c = s[l], typeof c == "object") k = c;
          else throw Error(me + l + " not an object: " + c);
        if (s.hasOwnProperty(l = "ALPHABET"))
          if (c = s[l], typeof c == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(c))
            O = c.slice(0, 10) == "0123456789", W = c;
          else
            throw Error(me + l + " invalid: " + c);
      } else
        throw Error(me + "Object expected: " + s);
    return {
      DECIMAL_PLACES: a,
      ROUNDING_MODE: o,
      EXPONENTIAL_AT: [g, f],
      RANGE: [L, x],
      CRYPTO: C,
      MODULO_MODE: N,
      POW_PRECISION: M,
      FORMAT: k,
      ALPHABET: W
    };
  }, _.isBigNumber = function(s) {
    if (!s || s._isBigNumber !== !0) return !1;
    if (!_.DEBUG) return !0;
    var l, c, m = s.c, h = s.e, d = s.s;
    e: if ({}.toString.call(m) == "[object Array]") {
      if ((d === 1 || d === -1) && h >= -1e9 && h <= we && h === Te(h)) {
        if (m[0] === 0) {
          if (h === 0 && m.length === 1) return !0;
          break e;
        }
        if (l = (h + 1) % F, l < 1 && (l += F), String(m[0]).length == l) {
          for (l = 0; l < m.length; l++)
            if (c = m[l], c < 0 || c >= Ne || c !== Te(c)) break e;
          if (c !== 0) return !0;
        }
      }
    } else if (m === null && h === null && (d === null || d === 1 || d === -1))
      return !0;
    throw Error(me + "Invalid BigNumber: " + s);
  }, _.maximum = _.max = function() {
    return z(arguments, -1);
  }, _.minimum = _.min = function() {
    return z(arguments, 1);
  }, _.random = function() {
    var s = 9007199254740992, l = Math.random() * s & 2097151 ? function() {
      return Te(Math.random() * s);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(c) {
      var m, h, d, b, p, y = 0, v = [], w = new _(u);
      if (c == null ? c = a : se(c, 0, we), b = ti(c / F), C)
        if (crypto.getRandomValues) {
          for (m = crypto.getRandomValues(new Uint32Array(b *= 2)); y < b; )
            p = m[y] * 131072 + (m[y + 1] >>> 11), p >= 9e15 ? (h = crypto.getRandomValues(new Uint32Array(2)), m[y] = h[0], m[y + 1] = h[1]) : (v.push(p % 1e14), y += 2);
          y = b / 2;
        } else if (crypto.randomBytes) {
          for (m = crypto.randomBytes(b *= 7); y < b; )
            p = (m[y] & 31) * 281474976710656 + m[y + 1] * 1099511627776 + m[y + 2] * 4294967296 + m[y + 3] * 16777216 + (m[y + 4] << 16) + (m[y + 5] << 8) + m[y + 6], p >= 9e15 ? crypto.randomBytes(7).copy(m, y) : (v.push(p % 1e14), y += 7);
          y = b / 7;
        } else
          throw C = !1, Error(me + "crypto unavailable");
      if (!C)
        for (; y < b; )
          p = l(), p < 9e15 && (v[y++] = p % 1e14);
      for (b = v[--y], c %= F, b && c && (p = ii[F - c], v[y] = Te(b / p) * p); v[y] === 0; v.pop(), y--) ;
      if (y < 0)
        v = [d = 0];
      else {
        for (d = -1; v[0] === 0; v.splice(0, 1), d -= F) ;
        for (y = 1, p = v[0]; p >= 10; p /= 10, y++) ;
        y < F && (d -= F - y);
      }
      return w.e = d, w.c = v, w;
    };
  }(), _.sum = function() {
    for (var s = 1, l = arguments, c = new _(l[0]); s < l.length; ) c = c.plus(l[s++]);
    return c;
  }, t = /* @__PURE__ */ function() {
    var s = "0123456789";
    function l(c, m, h, d) {
      for (var b, p = [0], y, v = 0, w = c.length; v < w; ) {
        for (y = p.length; y--; p[y] *= m) ;
        for (p[0] += d.indexOf(c.charAt(v++)), b = 0; b < p.length; b++)
          p[b] > h - 1 && (p[b + 1] == null && (p[b + 1] = 0), p[b + 1] += p[b] / h | 0, p[b] %= h);
      }
      return p.reverse();
    }
    return function(c, m, h, d, b) {
      var p, y, v, w, T, R, B, j, K = c.indexOf("."), ie = a, Z = o;
      for (K >= 0 && (w = M, M = 0, c = c.replace(".", ""), j = new _(m), R = j.pow(c.length - K), M = w, j.c = l(
        Fe(xe(R.c), R.e, "0"),
        10,
        h,
        s
      ), j.e = j.c.length), B = l(c, m, h, b ? (p = W, s) : (p = s, W)), v = w = B.length; B[--w] == 0; B.pop()) ;
      if (!B[0]) return p.charAt(0);
      if (K < 0 ? --v : (R.c = B, R.e = v, R.s = d, R = e(R, j, ie, Z, h), B = R.c, T = R.r, v = R.e), y = v + ie + 1, K = B[y], w = h / 2, T = T || y < 0 || B[y + 1] != null, T = Z < 4 ? (K != null || T) && (Z == 0 || Z == (R.s < 0 ? 3 : 2)) : K > w || K == w && (Z == 4 || T || Z == 6 && B[y - 1] & 1 || Z == (R.s < 0 ? 8 : 7)), y < 1 || !B[0])
        c = T ? Fe(p.charAt(1), -ie, p.charAt(0)) : p.charAt(0);
      else {
        if (B.length = y, T)
          for (--h; ++B[--y] > h; )
            B[y] = 0, y || (++v, B = [1].concat(B));
        for (w = B.length; !B[--w]; ) ;
        for (K = 0, c = ""; K <= w; c += p.charAt(B[K++])) ;
        c = Fe(c, v, p.charAt(0));
      }
      return c;
    };
  }(), e = /* @__PURE__ */ function() {
    function s(m, h, d) {
      var b, p, y, v, w = 0, T = m.length, R = h % Ye, B = h / Ye | 0;
      for (m = m.slice(); T--; )
        y = m[T] % Ye, v = m[T] / Ye | 0, b = B * y + v * R, p = R * y + b % Ye * Ye + w, w = (p / d | 0) + (b / Ye | 0) + B * v, m[T] = p % d;
      return w && (m = [w].concat(m)), m;
    }
    function l(m, h, d, b) {
      var p, y;
      if (d != b)
        y = d > b ? 1 : -1;
      else
        for (p = y = 0; p < d; p++)
          if (m[p] != h[p]) {
            y = m[p] > h[p] ? 1 : -1;
            break;
          }
      return y;
    }
    function c(m, h, d, b) {
      for (var p = 0; d--; )
        m[d] -= p, p = m[d] < h[d] ? 1 : 0, m[d] = p * b + m[d] - h[d];
      for (; !m[0] && m.length > 1; m.splice(0, 1)) ;
    }
    return function(m, h, d, b, p) {
      var y, v, w, T, R, B, j, K, ie, Z, V, ae, ze, tt, it, pe, Pe, he = m.s == h.s ? 1 : -1, fe = m.c, $ = h.c;
      if (!fe || !fe[0] || !$ || !$[0])
        return new _(
          // Return NaN if either NaN, or both Infinity or 0.
          !m.s || !h.s || (fe ? $ && fe[0] == $[0] : !$) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            fe && fe[0] == 0 || !$ ? he * 0 : he / 0
          )
        );
      for (K = new _(he), ie = K.c = [], v = m.e - h.e, he = d + v + 1, p || (p = Ne, v = Me(m.e / F) - Me(h.e / F), he = he / F | 0), w = 0; $[w] == (fe[w] || 0); w++) ;
      if ($[w] > (fe[w] || 0) && v--, he < 0)
        ie.push(1), T = !0;
      else {
        for (tt = fe.length, pe = $.length, w = 0, he += 2, R = Te(p / ($[0] + 1)), R > 1 && ($ = s($, R, p), fe = s(fe, R, p), pe = $.length, tt = fe.length), ze = pe, Z = fe.slice(0, pe), V = Z.length; V < pe; Z[V++] = 0) ;
        Pe = $.slice(), Pe = [0].concat(Pe), it = $[0], $[1] >= p / 2 && it++;
        do {
          if (R = 0, y = l($, Z, pe, V), y < 0) {
            if (ae = Z[0], pe != V && (ae = ae * p + (Z[1] || 0)), R = Te(ae / it), R > 1)
              for (R >= p && (R = p - 1), B = s($, R, p), j = B.length, V = Z.length; l(B, Z, j, V) == 1; )
                R--, c(B, pe < j ? Pe : $, j, p), j = B.length, y = 1;
            else
              R == 0 && (y = R = 1), B = $.slice(), j = B.length;
            if (j < V && (B = [0].concat(B)), c(Z, B, V, p), V = Z.length, y == -1)
              for (; l($, Z, pe, V) < 1; )
                R++, c(Z, pe < V ? Pe : $, V, p), V = Z.length;
          } else y === 0 && (R++, Z = [0]);
          ie[w++] = R, Z[0] ? Z[V++] = fe[ze] || 0 : (Z = [fe[ze]], V = 1);
        } while ((ze++ < tt || Z[0] != null) && he--);
        T = Z[0] != null, ie[0] || ie.splice(0, 1);
      }
      if (p == Ne) {
        for (w = 1, he = ie[0]; he >= 10; he /= 10, w++) ;
        U(K, d + (K.e = w + v * F - 1) + 1, b, T);
      } else
        K.e = v, K.r = +T;
      return K;
    };
  }();
  function A(s, l, c, m) {
    var h, d, b, p, y;
    if (c == null ? c = o : se(c, 0, 8), !s.c) return s.toString();
    if (h = s.c[0], b = s.e, l == null)
      y = xe(s.c), y = m == 1 || m == 2 && (b <= g || b >= f) ? It(y, b) : Fe(y, b, "0");
    else if (s = U(new _(s), l, c), d = s.e, y = xe(s.c), p = y.length, m == 1 || m == 2 && (l <= d || d <= g)) {
      for (; p < l; y += "0", p++) ;
      y = It(y, d);
    } else if (l -= b, y = Fe(y, d, "0"), d + 1 > p) {
      if (--l > 0) for (y += "."; l--; y += "0") ;
    } else if (l += d - p, l > 0)
      for (d + 1 == p && (y += "."); l--; y += "0") ;
    return s.s < 0 && h ? "-" + y : y;
  }
  function z(s, l) {
    for (var c, m, h = 1, d = new _(s[0]); h < s.length; h++)
      m = new _(s[h]), (!m.s || (c = rt(d, m)) === l || c === 0 && d.s === l) && (d = m);
    return d;
  }
  function D(s, l, c) {
    for (var m = 1, h = l.length; !l[--h]; l.pop()) ;
    for (h = l[0]; h >= 10; h /= 10, m++) ;
    return (c = m + c * F - 1) > x ? s.c = s.e = null : c < L ? s.c = [s.e = 0] : (s.e = c, s.c = l), s;
  }
  n = /* @__PURE__ */ function() {
    var s = /^(-?)0([xbo])(?=\w[\w.]*$)/i, l = /^([^.]+)\.$/, c = /^\.([^.]+)$/, m = /^-?(Infinity|NaN)$/, h = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(d, b, p, y) {
      var v, w = p ? b : b.replace(h, "");
      if (m.test(w))
        d.s = isNaN(w) ? null : w < 0 ? -1 : 1;
      else {
        if (!p && (w = w.replace(s, function(T, R, B) {
          return v = (B = B.toLowerCase()) == "x" ? 16 : B == "b" ? 2 : 8, !y || y == v ? R : T;
        }), y && (v = y, w = w.replace(l, "$1").replace(c, "0.$1")), b != w))
          return new _(w, v);
        if (_.DEBUG)
          throw Error(me + "Not a" + (y ? " base " + y : "") + " number: " + b);
        d.s = null;
      }
      d.c = d.e = null;
    };
  }();
  function U(s, l, c, m) {
    var h, d, b, p, y, v, w, T = s.c, R = ii;
    if (T) {
      e: {
        for (h = 1, p = T[0]; p >= 10; p /= 10, h++) ;
        if (d = l - h, d < 0)
          d += F, b = l, y = T[v = 0], w = Te(y / R[h - b - 1] % 10);
        else if (v = ti((d + 1) / F), v >= T.length)
          if (m) {
            for (; T.length <= v; T.push(0)) ;
            y = w = 0, h = 1, d %= F, b = d - F + 1;
          } else
            break e;
        else {
          for (y = p = T[v], h = 1; p >= 10; p /= 10, h++) ;
          d %= F, b = d - F + h, w = b < 0 ? 0 : Te(y / R[h - b - 1] % 10);
        }
        if (m = m || l < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        T[v + 1] != null || (b < 0 ? y : y % R[h - b - 1]), m = c < 4 ? (w || m) && (c == 0 || c == (s.s < 0 ? 3 : 2)) : w > 5 || w == 5 && (c == 4 || m || c == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (d > 0 ? b > 0 ? y / R[h - b] : 0 : T[v - 1]) % 10 & 1 || c == (s.s < 0 ? 8 : 7)), l < 1 || !T[0])
          return T.length = 0, m ? (l -= s.e + 1, T[0] = R[(F - l % F) % F], s.e = -l || 0) : T[0] = s.e = 0, s;
        if (d == 0 ? (T.length = v, p = 1, v--) : (T.length = v + 1, p = R[F - d], T[v] = b > 0 ? Te(y / R[h - b] % R[b]) * p : 0), m)
          for (; ; )
            if (v == 0) {
              for (d = 1, b = T[0]; b >= 10; b /= 10, d++) ;
              for (b = T[0] += p, p = 1; b >= 10; b /= 10, p++) ;
              d != p && (s.e++, T[0] == Ne && (T[0] = 1));
              break;
            } else {
              if (T[v] += p, T[v] != Ne) break;
              T[v--] = 0, p = 1;
            }
        for (d = T.length; T[--d] === 0; T.pop()) ;
      }
      s.e > x ? s.c = s.e = null : s.e < L && (s.c = [s.e = 0]);
    }
    return s;
  }
  function I(s) {
    var l, c = s.e;
    return c === null ? s.toString() : (l = xe(s.c), l = c <= g || c >= f ? It(l, c) : Fe(l, c, "0"), s.s < 0 ? "-" + l : l);
  }
  return r.absoluteValue = r.abs = function() {
    var s = new _(this);
    return s.s < 0 && (s.s = 1), s;
  }, r.comparedTo = function(s, l) {
    return rt(this, new _(s, l));
  }, r.decimalPlaces = r.dp = function(s, l) {
    var c, m, h, d = this;
    if (s != null)
      return se(s, 0, we), l == null ? l = o : se(l, 0, 8), U(new _(d), s + d.e + 1, l);
    if (!(c = d.c)) return null;
    if (m = ((h = c.length - 1) - Me(this.e / F)) * F, h = c[h]) for (; h % 10 == 0; h /= 10, m--) ;
    return m < 0 && (m = 0), m;
  }, r.dividedBy = r.div = function(s, l) {
    return e(this, new _(s, l), a, o);
  }, r.dividedToIntegerBy = r.idiv = function(s, l) {
    return e(this, new _(s, l), 0, 1);
  }, r.exponentiatedBy = r.pow = function(s, l) {
    var c, m, h, d, b, p, y, v, w, T = this;
    if (s = new _(s), s.c && !s.isInteger())
      throw Error(me + "Exponent not an integer: " + I(s));
    if (l != null && (l = new _(l)), p = s.e > 14, !T.c || !T.c[0] || T.c[0] == 1 && !T.e && T.c.length == 1 || !s.c || !s.c[0])
      return w = new _(Math.pow(+I(T), p ? s.s * (2 - At(s)) : +I(s))), l ? w.mod(l) : w;
    if (y = s.s < 0, l) {
      if (l.c ? !l.c[0] : !l.s) return new _(NaN);
      m = !y && T.isInteger() && l.isInteger(), m && (T = T.mod(l));
    } else {
      if (s.e > 9 && (T.e > 0 || T.e < -1 || (T.e == 0 ? T.c[0] > 1 || p && T.c[1] >= 24e7 : T.c[0] < 8e13 || p && T.c[0] <= 9999975e7)))
        return d = T.s < 0 && At(s) ? -0 : 0, T.e > -1 && (d = 1 / d), new _(y ? 1 / d : d);
      M && (d = ti(M / F + 2));
    }
    for (p ? (c = new _(0.5), y && (s.s = 1), v = At(s)) : (h = Math.abs(+I(s)), v = h % 2), w = new _(u); ; ) {
      if (v) {
        if (w = w.times(T), !w.c) break;
        d ? w.c.length > d && (w.c.length = d) : m && (w = w.mod(l));
      }
      if (h) {
        if (h = Te(h / 2), h === 0) break;
        v = h % 2;
      } else if (s = s.times(c), U(s, s.e + 1, 1), s.e > 14)
        v = At(s);
      else {
        if (h = +I(s), h === 0) break;
        v = h % 2;
      }
      T = T.times(T), d ? T.c && T.c.length > d && (T.c.length = d) : m && (T = T.mod(l));
    }
    return m ? w : (y && (w = u.div(w)), l ? w.mod(l) : d ? U(w, M, o, b) : w);
  }, r.integerValue = function(s) {
    var l = new _(this);
    return s == null ? s = o : se(s, 0, 8), U(l, l.e + 1, s);
  }, r.isEqualTo = r.eq = function(s, l) {
    return rt(this, new _(s, l)) === 0;
  }, r.isFinite = function() {
    return !!this.c;
  }, r.isGreaterThan = r.gt = function(s, l) {
    return rt(this, new _(s, l)) > 0;
  }, r.isGreaterThanOrEqualTo = r.gte = function(s, l) {
    return (l = rt(this, new _(s, l))) === 1 || l === 0;
  }, r.isInteger = function() {
    return !!this.c && Me(this.e / F) > this.c.length - 2;
  }, r.isLessThan = r.lt = function(s, l) {
    return rt(this, new _(s, l)) < 0;
  }, r.isLessThanOrEqualTo = r.lte = function(s, l) {
    return (l = rt(this, new _(s, l))) === -1 || l === 0;
  }, r.isNaN = function() {
    return !this.s;
  }, r.isNegative = function() {
    return this.s < 0;
  }, r.isPositive = function() {
    return this.s > 0;
  }, r.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, r.minus = function(s, l) {
    var c, m, h, d, b = this, p = b.s;
    if (s = new _(s, l), l = s.s, !p || !l) return new _(NaN);
    if (p != l)
      return s.s = -l, b.plus(s);
    var y = b.e / F, v = s.e / F, w = b.c, T = s.c;
    if (!y || !v) {
      if (!w || !T) return w ? (s.s = -l, s) : new _(T ? b : NaN);
      if (!w[0] || !T[0])
        return T[0] ? (s.s = -l, s) : new _(w[0] ? b : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          o == 3 ? -0 : 0
        ));
    }
    if (y = Me(y), v = Me(v), w = w.slice(), p = y - v) {
      for ((d = p < 0) ? (p = -p, h = w) : (v = y, h = T), h.reverse(), l = p; l--; h.push(0)) ;
      h.reverse();
    } else
      for (m = (d = (p = w.length) < (l = T.length)) ? p : l, p = l = 0; l < m; l++)
        if (w[l] != T[l]) {
          d = w[l] < T[l];
          break;
        }
    if (d && (h = w, w = T, T = h, s.s = -s.s), l = (m = T.length) - (c = w.length), l > 0) for (; l--; w[c++] = 0) ;
    for (l = Ne - 1; m > p; ) {
      if (w[--m] < T[m]) {
        for (c = m; c && !w[--c]; w[c] = l) ;
        --w[c], w[m] += Ne;
      }
      w[m] -= T[m];
    }
    for (; w[0] == 0; w.splice(0, 1), --v) ;
    return w[0] ? D(s, w, v) : (s.s = o == 3 ? -1 : 1, s.c = [s.e = 0], s);
  }, r.modulo = r.mod = function(s, l) {
    var c, m, h = this;
    return s = new _(s, l), !h.c || !s.s || s.c && !s.c[0] ? new _(NaN) : !s.c || h.c && !h.c[0] ? new _(h) : (N == 9 ? (m = s.s, s.s = 1, c = e(h, s, 0, 3), s.s = m, c.s *= m) : c = e(h, s, 0, N), s = h.minus(c.times(s)), !s.c[0] && N == 1 && (s.s = h.s), s);
  }, r.multipliedBy = r.times = function(s, l) {
    var c, m, h, d, b, p, y, v, w, T, R, B, j, K, ie, Z = this, V = Z.c, ae = (s = new _(s, l)).c;
    if (!V || !ae || !V[0] || !ae[0])
      return !Z.s || !s.s || V && !V[0] && !ae || ae && !ae[0] && !V ? s.c = s.e = s.s = null : (s.s *= Z.s, !V || !ae ? s.c = s.e = null : (s.c = [0], s.e = 0)), s;
    for (m = Me(Z.e / F) + Me(s.e / F), s.s *= Z.s, y = V.length, T = ae.length, y < T && (j = V, V = ae, ae = j, h = y, y = T, T = h), h = y + T, j = []; h--; j.push(0)) ;
    for (K = Ne, ie = Ye, h = T; --h >= 0; ) {
      for (c = 0, R = ae[h] % ie, B = ae[h] / ie | 0, b = y, d = h + b; d > h; )
        v = V[--b] % ie, w = V[b] / ie | 0, p = B * v + w * R, v = R * v + p % ie * ie + j[d] + c, c = (v / K | 0) + (p / ie | 0) + B * w, j[d--] = v % K;
      j[d] = c;
    }
    return c ? ++m : j.splice(0, 1), D(s, j, m);
  }, r.negated = function() {
    var s = new _(this);
    return s.s = -s.s || null, s;
  }, r.plus = function(s, l) {
    var c, m = this, h = m.s;
    if (s = new _(s, l), l = s.s, !h || !l) return new _(NaN);
    if (h != l)
      return s.s = -l, m.minus(s);
    var d = m.e / F, b = s.e / F, p = m.c, y = s.c;
    if (!d || !b) {
      if (!p || !y) return new _(h / 0);
      if (!p[0] || !y[0]) return y[0] ? s : new _(p[0] ? m : h * 0);
    }
    if (d = Me(d), b = Me(b), p = p.slice(), h = d - b) {
      for (h > 0 ? (b = d, c = y) : (h = -h, c = p), c.reverse(); h--; c.push(0)) ;
      c.reverse();
    }
    for (h = p.length, l = y.length, h - l < 0 && (c = y, y = p, p = c, l = h), h = 0; l; )
      h = (p[--l] = p[l] + y[l] + h) / Ne | 0, p[l] = Ne === p[l] ? 0 : p[l] % Ne;
    return h && (p = [h].concat(p), ++b), D(s, p, b);
  }, r.precision = r.sd = function(s, l) {
    var c, m, h, d = this;
    if (s != null && s !== !!s)
      return se(s, 1, we), l == null ? l = o : se(l, 0, 8), U(new _(d), s, l);
    if (!(c = d.c)) return null;
    if (h = c.length - 1, m = h * F + 1, h = c[h]) {
      for (; h % 10 == 0; h /= 10, m--) ;
      for (h = c[0]; h >= 10; h /= 10, m++) ;
    }
    return s && d.e + 1 > m && (m = d.e + 1), m;
  }, r.shiftedBy = function(s) {
    return se(s, -9007199254740991, qi), this.times("1e" + s);
  }, r.squareRoot = r.sqrt = function() {
    var s, l, c, m, h, d = this, b = d.c, p = d.s, y = d.e, v = a + 4, w = new _("0.5");
    if (p !== 1 || !b || !b[0])
      return new _(!p || p < 0 && (!b || b[0]) ? NaN : b ? d : 1 / 0);
    if (p = Math.sqrt(+I(d)), p == 0 || p == 1 / 0 ? (l = xe(b), (l.length + y) % 2 == 0 && (l += "0"), p = Math.sqrt(+l), y = Me((y + 1) / 2) - (y < 0 || y % 2), p == 1 / 0 ? l = "5e" + y : (l = p.toExponential(), l = l.slice(0, l.indexOf("e") + 1) + y), c = new _(l)) : c = new _(p + ""), c.c[0]) {
      for (y = c.e, p = y + v, p < 3 && (p = 0); ; )
        if (h = c, c = w.times(h.plus(e(d, h, v, 1))), xe(h.c).slice(0, p) === (l = xe(c.c)).slice(0, p))
          if (c.e < y && --p, l = l.slice(p - 3, p + 1), l == "9999" || !m && l == "4999") {
            if (!m && (U(h, h.e + a + 2, 0), h.times(h).eq(d))) {
              c = h;
              break;
            }
            v += 4, p += 4, m = 1;
          } else {
            (!+l || !+l.slice(1) && l.charAt(0) == "5") && (U(c, c.e + a + 2, 1), s = !c.times(c).eq(d));
            break;
          }
    }
    return U(c, c.e + a + 1, o, s);
  }, r.toExponential = function(s, l) {
    return s != null && (se(s, 0, we), s++), A(this, s, l, 1);
  }, r.toFixed = function(s, l) {
    return s != null && (se(s, 0, we), s = s + this.e + 1), A(this, s, l);
  }, r.toFormat = function(s, l, c) {
    var m, h = this;
    if (c == null)
      s != null && l && typeof l == "object" ? (c = l, l = null) : s && typeof s == "object" ? (c = s, s = l = null) : c = k;
    else if (typeof c != "object")
      throw Error(me + "Argument not an object: " + c);
    if (m = h.toFixed(s, l), h.c) {
      var d, b = m.split("."), p = +c.groupSize, y = +c.secondaryGroupSize, v = c.groupSeparator || "", w = b[0], T = b[1], R = h.s < 0, B = R ? w.slice(1) : w, j = B.length;
      if (y && (d = p, p = y, y = d, j -= d), p > 0 && j > 0) {
        for (d = j % p || p, w = B.substr(0, d); d < j; d += p) w += v + B.substr(d, p);
        y > 0 && (w += v + B.slice(d)), R && (w = "-" + w);
      }
      m = T ? w + (c.decimalSeparator || "") + ((y = +c.fractionGroupSize) ? T.replace(
        new RegExp("\\d{" + y + "}\\B", "g"),
        "$&" + (c.fractionGroupSeparator || "")
      ) : T) : w;
    }
    return (c.prefix || "") + m + (c.suffix || "");
  }, r.toFraction = function(s) {
    var l, c, m, h, d, b, p, y, v, w, T, R, B = this, j = B.c;
    if (s != null && (p = new _(s), !p.isInteger() && (p.c || p.s !== 1) || p.lt(u)))
      throw Error(me + "Argument " + (p.isInteger() ? "out of range: " : "not an integer: ") + I(p));
    if (!j) return new _(B);
    for (l = new _(u), v = c = new _(u), m = y = new _(u), R = xe(j), d = l.e = R.length - B.e - 1, l.c[0] = ii[(b = d % F) < 0 ? F + b : b], s = !s || p.comparedTo(l) > 0 ? d > 0 ? l : v : p, b = x, x = 1 / 0, p = new _(R), y.c[0] = 0; w = e(p, l, 0, 1), h = c.plus(w.times(m)), h.comparedTo(s) != 1; )
      c = m, m = h, v = y.plus(w.times(h = v)), y = h, l = p.minus(w.times(h = l)), p = h;
    return h = e(s.minus(c), m, 0, 1), y = y.plus(h.times(v)), c = c.plus(h.times(m)), y.s = v.s = B.s, d = d * 2, T = e(v, m, d, o).minus(B).abs().comparedTo(
      e(y, c, d, o).minus(B).abs()
    ) < 1 ? [v, m] : [y, c], x = b, T;
  }, r.toNumber = function() {
    return +I(this);
  }, r.toPrecision = function(s, l) {
    return s != null && se(s, 1, we), A(this, s, l, 2);
  }, r.toString = function(s) {
    var l, c = this, m = c.s, h = c.e;
    return h === null ? m ? (l = "Infinity", m < 0 && (l = "-" + l)) : l = "NaN" : (s == null ? l = h <= g || h >= f ? It(xe(c.c), h) : Fe(xe(c.c), h, "0") : s === 10 && O ? (c = U(new _(c), a + h + 1, o), l = Fe(xe(c.c), c.e, "0")) : (se(s, 2, W.length, "Base"), l = t(Fe(xe(c.c), h, "0"), 10, s, m, !0)), m < 0 && c.c[0] && (l = "-" + l)), l;
  }, r.valueOf = r.toJSON = function() {
    return I(this);
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, i != null && _.set(i), _;
}
function Me(i) {
  var e = i | 0;
  return i > 0 || i === e ? e : e - 1;
}
function xe(i) {
  for (var e, t, n = 1, r = i.length, u = i[0] + ""; n < r; ) {
    for (e = i[n++] + "", t = F - e.length; t--; e = "0" + e) ;
    u += e;
  }
  for (r = u.length; u.charCodeAt(--r) === 48; ) ;
  return u.slice(0, r + 1 || 1);
}
function rt(i, e) {
  var t, n, r = i.c, u = e.c, a = i.s, o = e.s, g = i.e, f = e.e;
  if (!a || !o) return null;
  if (t = r && !r[0], n = u && !u[0], t || n) return t ? n ? 0 : -o : a;
  if (a != o) return a;
  if (t = a < 0, n = g == f, !r || !u) return n ? 0 : !r ^ t ? 1 : -1;
  if (!n) return g > f ^ t ? 1 : -1;
  for (o = (g = r.length) < (f = u.length) ? g : f, a = 0; a < o; a++) if (r[a] != u[a]) return r[a] > u[a] ^ t ? 1 : -1;
  return g == f ? 0 : g > f ^ t ? 1 : -1;
}
function se(i, e, t, n) {
  if (i < e || i > t || i !== Te(i))
    throw Error(me + (n || "Argument") + (typeof i == "number" ? i < e || i > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(i));
}
function At(i) {
  var e = i.c.length - 1;
  return Me(i.e / F) == e && i.c[e] % 2 != 0;
}
function It(i, e) {
  return (i.length > 1 ? i.charAt(0) + "." + i.slice(1) : i) + (e < 0 ? "e" : "e+") + e;
}
function Fe(i, e, t) {
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
var De = pn(), as = class {
  constructor(i) {
    P(this, "key");
    P(this, "left", null);
    P(this, "right", null);
    this.key = i;
  }
}, bt = class extends as {
  constructor(i) {
    super(i);
  }
}, fs = class {
  constructor() {
    P(this, "size", 0);
    P(this, "modificationCount", 0);
    P(this, "splayCount", 0);
  }
  splay(i) {
    const e = this.root;
    if (e == null)
      return this.compare(i, i), -1;
    let t = null, n = null, r = null, u = null, a = e;
    const o = this.compare;
    let g;
    for (; ; )
      if (g = o(a.key, i), g > 0) {
        let f = a.left;
        if (f == null || (g = o(f.key, i), g > 0 && (a.left = f.right, f.right = a, a = f, f = a.left, f == null)))
          break;
        t == null ? n = a : t.left = a, t = a, a = f;
      } else if (g < 0) {
        let f = a.right;
        if (f == null || (g = o(f.key, i), g < 0 && (a.right = f.left, f.left = a, a = f, f = a.right, f == null)))
          break;
        r == null ? u = a : r.right = a, r = a, a = f;
      } else
        break;
    return r != null && (r.right = a.left, a.left = u), t != null && (t.left = a.right, a.right = n), this.root !== a && (this.root = a, this.splayCount++), g;
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
}, $i, en, zt = class Lt extends fs {
  constructor(t, n) {
    super();
    P(this, "root", null);
    P(this, "compare");
    P(this, "validKey");
    P(this, $i, "[object Set]");
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
    return n != 0 && this.addNewRoot(new bt(t), n), this;
  }
  addAndReturn(t) {
    const n = this.splay(t);
    return n != 0 && this.addNewRoot(new bt(t), n), this.root.key;
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
    const n = new Lt(this.compare, this.validKey), r = this.modificationCount;
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
    const n = new Lt(this.compare, this.validKey);
    for (const r of this)
      t.has(r) && n.add(r);
    return n;
  }
  difference(t) {
    const n = new Lt(this.compare, this.validKey);
    for (const r of this)
      t.has(r) || n.add(r);
    return n;
  }
  union(t) {
    const n = this.clone();
    return n.addAll(t), n;
  }
  clone() {
    const t = new Lt(this.compare, this.validKey);
    return t.size = this.size, t.root = this.copyNode(this.root), t;
  }
  copyNode(t) {
    if (t == null) return null;
    function n(u, a) {
      let o, g;
      do {
        if (o = u.left, g = u.right, o != null) {
          const f = new bt(o.key);
          a.left = f, n(o, f);
        }
        if (g != null) {
          const f = new bt(g.key);
          a.right = f, u = g, a = f;
        }
      } while (g != null);
    }
    const r = new bt(t.key);
    return n(t, r), r;
  }
  toSet() {
    return this.clone();
  }
  entries() {
    return new hs(this.wrap());
  }
  keys() {
    return this[Symbol.iterator]();
  }
  values() {
    return this[Symbol.iterator]();
  }
  [(en = Symbol.iterator, $i = Symbol.toStringTag, en)]() {
    return new cs(this.wrap());
  }
}, yn = class {
  constructor(i) {
    P(this, "tree");
    P(this, "path", new Array());
    P(this, "modificationCount", null);
    P(this, "splayCount");
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
}, cs = class extends yn {
  getValue(i) {
    return i.key;
  }
}, hs = class extends yn {
  getValue(i) {
    return [i.key, i.key];
  }
}, bn = (i) => () => i, ui = (i) => {
  const e = i ? (t, n) => n.minus(t).abs().isLessThanOrEqualTo(i) : bn(!1);
  return (t, n) => e(t, n) ? 0 : t.comparedTo(n);
};
function ds(i) {
  const e = i ? (t, n, r, u, a) => t.exponentiatedBy(2).isLessThanOrEqualTo(
    u.minus(n).exponentiatedBy(2).plus(a.minus(r).exponentiatedBy(2)).times(i)
  ) : bn(!1);
  return (t, n, r) => {
    const u = t.x, a = t.y, o = r.x, g = r.y, f = a.minus(g).times(n.x.minus(o)).minus(u.minus(o).times(n.y.minus(g)));
    return e(f, u, a, o, g) ? 0 : f.comparedTo(0);
  };
}
var gs = (i) => i, ms = (i) => {
  if (i) {
    const e = new zt(ui(i)), t = new zt(ui(i)), n = (u, a) => a.addAndReturn(u), r = (u) => ({
      x: n(u.x, e),
      y: n(u.y, t)
    });
    return r({ x: new De(0), y: new De(0) }), r;
  }
  return gs;
}, ai = (i) => ({
  set: (e) => {
    je = ai(e);
  },
  reset: () => ai(i),
  compare: ui(i),
  snap: ms(i),
  orient: ds(i)
}), je = ai(), vt = (i, e) => i.ll.x.isLessThanOrEqualTo(e.x) && e.x.isLessThanOrEqualTo(i.ur.x) && i.ll.y.isLessThanOrEqualTo(e.y) && e.y.isLessThanOrEqualTo(i.ur.y), fi = (i, e) => {
  if (e.ur.x.isLessThan(i.ll.x) || i.ur.x.isLessThan(e.ll.x) || e.ur.y.isLessThan(i.ll.y) || i.ur.y.isLessThan(e.ll.y))
    return null;
  const t = i.ll.x.isLessThan(e.ll.x) ? e.ll.x : i.ll.x, n = i.ur.x.isLessThan(e.ur.x) ? i.ur.x : e.ur.x, r = i.ll.y.isLessThan(e.ll.y) ? e.ll.y : i.ll.y, u = i.ur.y.isLessThan(e.ur.y) ? i.ur.y : e.ur.y;
  return { ll: { x: t, y: r }, ur: { x: n, y: u } };
}, Gt = (i, e) => i.x.times(e.y).minus(i.y.times(e.x)), vn = (i, e) => i.x.times(e.x).plus(i.y.times(e.y)), Ut = (i) => vn(i, i).sqrt(), ps = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return Gt(r, n).div(Ut(r)).div(Ut(n));
}, ys = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return vn(r, n).div(Ut(r)).div(Ut(n));
}, Zi = (i, e, t) => e.y.isZero() ? null : { x: i.x.plus(e.x.div(e.y).times(t.minus(i.y))), y: t }, ji = (i, e, t) => e.x.isZero() ? null : { x: t, y: i.y.plus(e.y.div(e.x).times(t.minus(i.x))) }, bs = (i, e, t, n) => {
  if (e.x.isZero()) return ji(t, n, i.x);
  if (n.x.isZero()) return ji(i, e, t.x);
  if (e.y.isZero()) return Zi(t, n, i.y);
  if (n.y.isZero()) return Zi(i, e, t.y);
  const r = Gt(e, n);
  if (r.isZero()) return null;
  const u = { x: t.x.minus(i.x), y: t.y.minus(i.y) }, a = Gt(u, e).div(r), o = Gt(u, n).div(r), g = i.x.plus(o.times(e.x)), f = t.x.plus(a.times(n.x)), L = i.y.plus(o.times(e.y)), x = t.y.plus(a.times(n.y)), C = g.plus(f).div(2), N = L.plus(x).div(2);
  return { x: C, y: N };
}, Ge = class wn {
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(e, t) {
    P(this, "point");
    P(this, "isLeft");
    P(this, "segment");
    P(this, "otherSE");
    P(this, "consumedBy");
    e.events === void 0 ? e.events = [this] : e.events.push(this), this.point = e, this.isLeft = t;
  }
  // for ordering sweep events in the sweep event queue
  static compare(e, t) {
    const n = wn.comparePoints(e.point, t.point);
    return n !== 0 ? n : (e.point !== t.point && e.link(t), e.isLeft !== t.isLeft ? e.isLeft ? 1 : -1 : qt.compare(e.segment, t.segment));
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
        sine: ps(this.point, e.point, u.point),
        cosine: ys(this.point, e.point, u.point)
      });
    };
    return (r, u) => {
      t.has(r) || n(r), t.has(u) || n(u);
      const { sine: a, cosine: o } = t.get(r), { sine: g, cosine: f } = t.get(u);
      return a.isGreaterThanOrEqualTo(0) && g.isGreaterThanOrEqualTo(0) ? o.isLessThan(f) ? 1 : o.isGreaterThan(f) ? -1 : 0 : a.isLessThan(0) && g.isLessThan(0) ? o.isLessThan(f) ? -1 : o.isGreaterThan(f) ? 1 : 0 : g.isLessThan(a) ? -1 : g.isGreaterThan(a) ? 1 : 0;
    };
  }
}, vs = class ci {
  constructor(e) {
    P(this, "events");
    P(this, "poly");
    P(this, "_isExteriorRing");
    P(this, "_enclosingRing");
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
      let a = null, o = u.leftSE, g = u.rightSE;
      const f = [o], L = o.point, x = [];
      for (; a = o, o = g, f.push(o), o.point !== L; )
        for (; ; ) {
          const C = o.getAvailableLinkedEvents();
          if (C.length === 0) {
            const k = f[0].point, W = f[f.length - 1].point;
            throw new Error(
              `Unable to complete output ring starting at [${k.x}, ${k.y}]. Last matching segment found ends at [${W.x}, ${W.y}].`
            );
          }
          if (C.length === 1) {
            g = C[0].otherSE;
            break;
          }
          let N = null;
          for (let k = 0, W = x.length; k < W; k++)
            if (x[k].point === o.point) {
              N = k;
              break;
            }
          if (N !== null) {
            const k = x.splice(N)[0], W = f.splice(k.index);
            W.unshift(W[0].otherSE), t.push(new ci(W.reverse()));
            continue;
          }
          x.push({
            index: f.length,
            point: o.point
          });
          const M = o.getLeftmostComparator(a);
          g = C.sort(M)[0].otherSE;
          break;
        }
      t.push(new ci(f));
    }
    return t;
  }
  getGeom() {
    let e = this.events[0].point;
    const t = [e];
    for (let f = 1, L = this.events.length - 1; f < L; f++) {
      const x = this.events[f].point, C = this.events[f + 1].point;
      je.orient(x, e, C) !== 0 && (t.push(x), e = x);
    }
    if (t.length === 1) return null;
    const n = t[0], r = t[1];
    je.orient(n, e, r) === 0 && t.shift(), t.push(t[0]);
    const u = this.isExteriorRing() ? 1 : -1, a = this.isExteriorRing() ? 0 : t.length - 1, o = this.isExteriorRing() ? t.length : -1, g = [];
    for (let f = a; f != o; f += u)
      g.push([t[f].x.toNumber(), t[f].y.toNumber()]);
    return g;
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
    for (let a = 1, o = this.events.length; a < o; a++) {
      const g = this.events[a];
      Ge.compare(e, g) > 0 && (e = g);
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
}, Hi = class {
  constructor(i) {
    P(this, "exteriorRing");
    P(this, "interiorRings");
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
}, ws = class {
  constructor(i) {
    P(this, "rings");
    P(this, "polys");
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
        if (u.isExteriorRing()) e.push(new Hi(u));
        else {
          const a = u.enclosingRing();
          a != null && a.poly || e.push(new Hi(a)), (t = a == null ? void 0 : a.poly) == null || t.addInterior(u);
        }
    }
    return e;
  }
}, Es = class {
  constructor(i, e = qt.compare) {
    P(this, "queue");
    P(this, "tree");
    P(this, "segments");
    this.queue = i, this.tree = new zt(e), this.segments = [];
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
        const o = n.getIntersection(e);
        if (o !== null && (e.isAnEndpoint(o) || (u = o), !n.isAnEndpoint(o))) {
          const g = this._splitSafely(n, o);
          for (let f = 0, L = g.length; f < L; f++)
            t.push(g[f]);
        }
      }
      let a = null;
      if (r) {
        const o = r.getIntersection(e);
        if (o !== null && (e.isAnEndpoint(o) || (a = o), !r.isAnEndpoint(o))) {
          const g = this._splitSafely(r, o);
          for (let f = 0, L = g.length; f < L; f++)
            t.push(g[f]);
        }
      }
      if (u !== null || a !== null) {
        let o = null;
        u === null ? o = a : a === null ? o = u : o = Ge.comparePoints(
          u,
          a
        ) <= 0 ? u : a, this.queue.delete(e.rightSE), t.push(e.rightSE);
        const g = e.split(o);
        for (let f = 0, L = g.length; f < L; f++)
          t.push(g[f]);
      }
      t.length > 0 ? (this.tree.delete(e), t.push(i)) : (this.segments.push(e), e.prev = n);
    } else {
      if (n && r) {
        const u = n.getIntersection(r);
        if (u !== null) {
          if (!n.isAnEndpoint(u)) {
            const a = this._splitSafely(n, u);
            for (let o = 0, g = a.length; o < g; o++)
              t.push(a[o]);
          }
          if (!r.isAnEndpoint(u)) {
            const a = this._splitSafely(r, u);
            for (let o = 0, g = a.length; o < g; o++)
              t.push(a[o]);
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
}, Ls = class {
  constructor() {
    P(this, "type");
    P(this, "numMultiPolys");
  }
  run(i, e, t) {
    _t.type = i;
    const n = [new Ki(e, !0)];
    for (let f = 0, L = t.length; f < L; f++)
      n.push(new Ki(t[f], !1));
    if (_t.numMultiPolys = n.length, _t.type === "difference") {
      const f = n[0];
      let L = 1;
      for (; L < n.length; )
        fi(n[L].bbox, f.bbox) !== null ? L++ : n.splice(L, 1);
    }
    if (_t.type === "intersection")
      for (let f = 0, L = n.length; f < L; f++) {
        const x = n[f];
        for (let C = f + 1, N = n.length; C < N; C++)
          if (fi(x.bbox, n[C].bbox) === null) return [];
      }
    const r = new zt(Ge.compare);
    for (let f = 0, L = n.length; f < L; f++) {
      const x = n[f].getSweepEvents();
      for (let C = 0, N = x.length; C < N; C++)
        r.add(x[C]);
    }
    const u = new Es(r);
    let a = null;
    for (r.size != 0 && (a = r.first(), r.delete(a)); a; ) {
      const f = u.process(a);
      for (let L = 0, x = f.length; L < x; L++) {
        const C = f[L];
        C.consumedBy === void 0 && r.add(C);
      }
      r.size != 0 ? (a = r.first(), r.delete(a)) : a = null;
    }
    je.reset();
    const o = vs.factory(u.segments);
    return new ws(o).getGeom();
  }
}, _t = new Ls(), Ft = _t, _s = 0, qt = class Wt {
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, t, n, r) {
    P(this, "id");
    P(this, "leftSE");
    P(this, "rightSE");
    P(this, "rings");
    P(this, "windings");
    P(this, "ringOut");
    P(this, "consumedBy");
    P(this, "prev");
    P(this, "_prevInResult");
    P(this, "_beforeState");
    P(this, "_afterState");
    P(this, "_isInResult");
    this.id = ++_s, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = n, this.windings = r;
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
    const o = e.leftSE.point.y, g = t.leftSE.point.y, f = e.rightSE.point.y, L = t.rightSE.point.y;
    if (n.isLessThan(r)) {
      if (g.isLessThan(o) && g.isLessThan(f)) return 1;
      if (g.isGreaterThan(o) && g.isGreaterThan(f)) return -1;
      const x = e.comparePoint(t.leftSE.point);
      if (x < 0) return 1;
      if (x > 0) return -1;
      const C = t.comparePoint(e.rightSE.point);
      return C !== 0 ? C : -1;
    }
    if (n.isGreaterThan(r)) {
      if (o.isLessThan(g) && o.isLessThan(L)) return -1;
      if (o.isGreaterThan(g) && o.isGreaterThan(L)) return 1;
      const x = t.comparePoint(e.leftSE.point);
      if (x !== 0) return x;
      const C = e.comparePoint(t.rightSE.point);
      return C < 0 ? 1 : C > 0 ? -1 : 1;
    }
    if (o.isLessThan(g)) return -1;
    if (o.isGreaterThan(g)) return 1;
    if (u.isLessThan(a)) {
      const x = t.comparePoint(e.rightSE.point);
      if (x !== 0) return x;
    }
    if (u.isGreaterThan(a)) {
      const x = e.comparePoint(t.rightSE.point);
      if (x < 0) return 1;
      if (x > 0) return -1;
    }
    if (!u.eq(a)) {
      const x = f.minus(o), C = u.minus(n), N = L.minus(g), M = a.minus(r);
      if (x.isGreaterThan(C) && N.isLessThan(M)) return 1;
      if (x.isLessThan(C) && N.isGreaterThan(M)) return -1;
    }
    return u.isGreaterThan(a) ? 1 : u.isLessThan(a) || f.isLessThan(L) ? -1 : f.isGreaterThan(L) ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  }
  static fromRing(e, t, n) {
    let r, u, a;
    const o = Ge.comparePoints(e, t);
    if (o < 0)
      r = e, u = t, a = 1;
    else if (o > 0)
      r = t, u = e, a = -1;
    else
      throw new Error(
        `Tried to create degenerate segment at [${e.x}, ${e.y}]`
      );
    const g = new Ge(r, !0), f = new Ge(u, !1);
    return new Wt(g, f, [n], [a]);
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
    const t = this.bbox(), n = e.bbox(), r = fi(t, n);
    if (r === null) return null;
    const u = this.leftSE.point, a = this.rightSE.point, o = e.leftSE.point, g = e.rightSE.point, f = vt(t, o) && this.comparePoint(o) === 0, L = vt(n, u) && e.comparePoint(u) === 0, x = vt(t, g) && this.comparePoint(g) === 0, C = vt(n, a) && e.comparePoint(a) === 0;
    if (L && f)
      return C && !x ? a : !C && x ? g : null;
    if (L)
      return x && u.x.eq(g.x) && u.y.eq(g.y) ? null : u;
    if (f)
      return C && a.x.eq(o.x) && a.y.eq(o.y) ? null : o;
    if (C && x) return null;
    if (C) return a;
    if (x) return g;
    const N = bs(u, this.vector(), o, e.vector());
    return N === null || !vt(r, N) ? null : je.snap(N);
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
    const t = [], n = e.events !== void 0, r = new Ge(e, !0), u = new Ge(e, !1), a = this.rightSE;
    this.replaceRightSE(u), t.push(u), t.push(r);
    const o = new Wt(
      r,
      a,
      this.rings.slice(),
      this.windings.slice()
    );
    return Ge.comparePoints(o.leftSE.point, o.rightSE.point) > 0 && o.swapEvents(), Ge.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n && (r.checkForConsuming(), u.checkForConsuming()), t;
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
    const r = Wt.compare(t, n);
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
        const o = n.rings[u], g = n.windings[u], f = t.rings.indexOf(o);
        f === -1 ? (t.rings.push(o), t.windings.push(g)) : t.windings[f] += g;
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
    for (let o = 0, g = this.rings.length; o < g; o++) {
      const f = this.rings[o], L = this.windings[o], x = t.indexOf(f);
      x === -1 ? (t.push(f), n.push(L)) : n[x] += L;
    }
    const u = [], a = [];
    for (let o = 0, g = t.length; o < g; o++) {
      if (n[o] === 0) continue;
      const f = t[o], L = f.poly;
      if (a.indexOf(L) === -1)
        if (f.isExterior) u.push(L);
        else {
          a.indexOf(L) === -1 && a.push(L);
          const x = u.indexOf(f.poly);
          x !== -1 && u.splice(x, 1);
        }
    }
    for (let o = 0, g = u.length; o < g; o++) {
      const f = u[o].multiPoly;
      r.indexOf(f) === -1 && r.push(f);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const e = this.beforeState().multiPolys, t = this.afterState().multiPolys;
    switch (Ft.type) {
      case "union": {
        const n = e.length === 0, r = t.length === 0;
        this._isInResult = n !== r;
        break;
      }
      case "intersection": {
        let n, r;
        e.length < t.length ? (n = e.length, r = t.length) : (n = t.length, r = e.length), this._isInResult = r === Ft.numMultiPolys && n < r;
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
}, Vi = class {
  constructor(i, e, t) {
    P(this, "poly");
    P(this, "isExterior");
    P(this, "segments");
    P(this, "bbox");
    if (!Array.isArray(i) || i.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = t, this.segments = [], typeof i[0][0] != "number" || typeof i[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const n = je.snap({ x: new De(i[0][0]), y: new De(i[0][1]) });
    this.bbox = {
      ll: { x: n.x, y: n.y },
      ur: { x: n.x, y: n.y }
    };
    let r = n;
    for (let u = 1, a = i.length; u < a; u++) {
      if (typeof i[u][0] != "number" || typeof i[u][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      const o = je.snap({ x: new De(i[u][0]), y: new De(i[u][1]) });
      o.x.eq(r.x) && o.y.eq(r.y) || (this.segments.push(qt.fromRing(r, o, this)), o.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = o.x), o.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = o.y), o.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = o.x), o.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = o.y), r = o);
    }
    (!n.x.eq(r.x) || !n.y.eq(r.y)) && this.segments.push(qt.fromRing(r, n, this));
  }
  getSweepEvents() {
    const i = [];
    for (let e = 0, t = this.segments.length; e < t; e++) {
      const n = this.segments[e];
      i.push(n.leftSE), i.push(n.rightSE);
    }
    return i;
  }
}, Ss = class {
  constructor(i, e) {
    P(this, "multiPoly");
    P(this, "exteriorRing");
    P(this, "interiorRings");
    P(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Vi(i[0], this, !0), this.bbox = {
      ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y },
      ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y }
    }, this.interiorRings = [];
    for (let t = 1, n = i.length; t < n; t++) {
      const r = new Vi(i[t], this, !1);
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
}, Ki = class {
  constructor(i, e) {
    P(this, "isSubject");
    P(this, "polys");
    P(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof i[0][0][0] == "number" && (i = [i]);
    } catch {
    }
    this.polys = [], this.bbox = {
      ll: { x: new De(Number.POSITIVE_INFINITY), y: new De(Number.POSITIVE_INFINITY) },
      ur: { x: new De(Number.NEGATIVE_INFINITY), y: new De(Number.NEGATIVE_INFINITY) }
    };
    for (let t = 0, n = i.length; t < n; t++) {
      const r = new Ss(i[t], this);
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
}, xs = (i, ...e) => Ft.run("union", i, e), Ts = (i, ...e) => Ft.run("difference", i, e);
je.set;
function Ms(i, e = {}) {
  const t = [];
  if (gi(i, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const n = xs(t[0], ...t.slice(1));
  return n.length === 0 ? null : n.length === 1 ? di(n[0], e.properties) : cn(n, e.properties);
}
var En = Ms;
function Cs(i) {
  const e = [];
  if (gi(i, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = i.features[0].properties || {}, n = Ts(e[0], ...e.slice(1));
  return n.length === 0 ? null : n.length === 1 ? di(n[0], t) : cn(n, t);
}
var Ns = Cs;
function ks(i) {
  if (!i) throw new Error("geojson is required");
  var e = [];
  return ns(i, function(t) {
    e.push(t);
  }), Nt(e);
}
var Os = ks;
function Yi(i, e) {
  const t = Ns(
    Nt([
      di([
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
  const n = Mt(li(i)), r = (n[2] - n[0]) / 360 / 1e3, u = n[0] < -180, a = n[2] > 180, o = Os(i);
  if (o.features.length > 1 && (u || a))
    for (const g of o.features) {
      const f = Mt(li(g));
      if (a && f[0] < -180 + r)
        for (const L of g.geometry.coordinates)
          for (const x of L)
            x[0] += 360 - r;
      if (u && f[2] > 180 - r)
        for (const L of g.geometry.coordinates)
          for (const x of L)
            x[0] -= 360 - r;
    }
  e(
    Nt([
      o.features.length < 2 ? i : En(o) ?? i,
      t
    ])
  );
}
const Xi = (i) => {
  var n, r, u;
  const e = (n = i == null ? void 0 : i.geometry) == null ? void 0 : n.type, t = (r = i == null ? void 0 : i.properties) != null && r.isMask ? 0 : e === "LineString" || e === "MultiLineString" ? 3 : 2;
  return {
    color: "#3170fe",
    fillColor: "#000",
    fillOpacity: (u = i == null ? void 0 : i.properties) != null && u.isMask ? 0.1 : 0,
    weight: t,
    dashArray: [t, t],
    lineCap: "butt"
  };
};
function Rs(i, e = !0, t = !0, n = {}, r = {}, u = Xi) {
  let a;
  const o = [];
  let g, f;
  const L = ke.geoJSON(void 0, {
    style: u === !0 ? Xi : u === !1 ? void 0 : u ?? void 0,
    interactive: !1
  }).addTo(i), x = (N) => {
    a == null || a({
      type: "mapClick",
      coordinates: [N.latlng.lng, N.latlng.lat]
    });
  };
  function C(N, M = !1) {
    const k = document.createElement("div");
    return new Rr({ props: { displayIn: "leaflet" }, target: k }), new ke.Marker(N, {
      interactive: M,
      icon: new ke.DivIcon({
        html: k,
        className: "",
        iconAnchor: [12, 26],
        iconSize: [25, 30],
        tooltipAnchor: [1, -24]
      })
    });
  }
  return {
    setEventHandler(N) {
      N ? (a = N, i.on("click", x)) : (a = void 0, i.off("click", x));
    },
    flyTo(N, M) {
      i.flyTo([N[1], N[0]], M, { duration: 2, ...n });
    },
    fitBounds(N, M, k) {
      i.flyToBounds(
        [
          [N[1], N[0]],
          [N[3], N[2]]
        ],
        {
          padding: [M, M],
          duration: 2,
          ...k ? { maxZoom: k } : {},
          ...r
        }
      );
    },
    indicateReverse(N) {
      i.getContainer().style.cursor = N ? "crosshair" : "";
    },
    setReverseMarker(N) {
      var k;
      if (!e)
        return;
      const M = N && [N[1], N[0]];
      f ? M ? f.setLatLng(M) : (f.remove(), f = void 0) : M && (e instanceof Function ? f = e(i) ?? void 0 : (f = (typeof e == "object" ? new ke.Marker(M, e) : C(M)).addTo(i), (k = f.getElement()) == null || k.classList.add("marker-reverse")));
    },
    setFeatures(N, M, k) {
      function W(O) {
        L.clearLayers(), O && L.addData(O);
      }
      for (const O of o)
        O.remove();
      o.length = 0, W();
      e: if (M) {
        let O = !1;
        if (M.geometry.type === "GeometryCollection") {
          const _ = M.geometry.geometries.filter(
            (A) => A.type === "Polygon" || A.type === "MultiPolygon"
          );
          t: if (_.length > 0) {
            const A = En(
              Nt(_.map((z) => Ct(z)))
            );
            if (!A)
              break t;
            Yi(
              {
                ...M,
                geometry: A.geometry
              },
              W
            ), O = !0;
          } else {
            const A = M.geometry.geometries.filter(
              (z) => z.type === "LineString" || z.type === "MultiLineString"
            );
            A.length > 0 && (W({
              ...M,
              geometry: { type: "GeometryCollection", geometries: A }
            }), O = !0);
          }
        }
        if (!O) {
          if (M.geometry.type === "Polygon" || M.geometry.type === "MultiPolygon")
            Yi(M, (_) => {
              if (!_)
                return;
              const A = [..._.features], z = Mt(li(M)), D = z[2] - z[0];
              z[0] - D / 4 < -180 && A.push(...Qi(_, -360).features), z[2] + D / 4 > 180 && A.push(...Qi(_, 360).features), W(Nt(A));
            });
          else if (M.geometry.type === "LineString" || M.geometry.type === "MultiLineString") {
            W(M);
            break e;
          }
        }
        if (!k && !M.geometry.type.endsWith("Point"))
          break e;
        if (e instanceof Function) {
          const _ = e(i, M);
          _ && o.push(_.addTo(i));
        } else if (e) {
          const _ = [M.center[1], M.center[0]];
          o.push(
            typeof e == "object" ? new ke.Marker(_, e) : C(_).addTo(i)
          );
        }
      }
      if (t)
        for (const O of N ?? []) {
          if (O === M)
            continue;
          const _ = [
            O.center[1],
            O.center[0]
          ];
          let A;
          if (t instanceof Function) {
            if (A = t(i, O), !A)
              continue;
          } else
            A = (typeof t == "object" ? new ke.Marker(_, t) : C(_, !0)).addTo(i).bindTooltip(
              O.place_type[0] === "reverse" ? O.place_name : O.place_name.replace(/,.*/, ""),
              {
                direction: "top"
              }
            );
          const z = A.getElement();
          z && (z.addEventListener("click", (D) => {
            D.stopPropagation(), a == null || a({ type: "markerClick", id: O.id });
          }), z.addEventListener("mouseenter", () => {
            a == null || a({ type: "markerMouseEnter", id: O.id });
          }), z.addEventListener("mouseleave", () => {
            a == null || a({ type: "markerMouseLeave", id: O.id });
          }), z.classList.toggle("marker-fuzzy", !!O.matching_text)), o.push(A);
        }
    },
    setSelectedMarker(N) {
      var M, k;
      g && ((M = g.getElement()) == null || M.classList.toggle("marker-selected", !1)), g = N > -1 ? o[N] : void 0, (k = g == null ? void 0 : g.getElement()) == null || k.classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const N = i.getCenter();
      return [i.getZoom(), N.lng, N.lat];
    }
  };
}
function Qi(i, e) {
  const t = ls(i);
  for (const n of t.features)
    if (n.geometry.type == "MultiPolygon")
      for (const r of n.geometry.coordinates)
        Ji(r, e);
    else
      Ji(n.geometry.coordinates, e);
  return t;
}
function Ji(i, e) {
  for (const t of i)
    for (const n of t)
      n[0] += e;
}
class Ln extends ke.Control {
}
ke.Util.extend(Ln.prototype, ke.Evented.prototype);
var Ee, ot;
class Ps extends Ln {
  constructor(t) {
    super(t);
    Jt(this, Ee);
    Jt(this, ot);
    $t(this, ot, t);
  }
  onAdd(t) {
    const n = document.createElement("div");
    n.className = "leaflet-ctrl-geocoder", ke.DomEvent.disableClickPropagation(n), ke.DomEvent.disableScrollPropagation(n);
    const {
      marker: r,
      showResultMarkers: u,
      flyTo: a,
      fullGeometryStyle: o,
      position: g,
      ...f
    } = ve(this, ot), L = typeof a == "boolean" ? {} : a, x = Rs(
      t,
      r,
      u,
      L,
      L,
      o
    );
    $t(this, Ee, new is({
      target: n,
      props: {
        mapController: x,
        flyTo: a === void 0 ? !0 : !!a,
        ...f
      }
    }));
    const C = {
      select: void 0,
      pick: void 0,
      featureslisted: void 0,
      featuresmarked: void 0,
      response: void 0,
      optionsvisibilitychange: void 0,
      reversetoggle: void 0,
      querychange: void 0
    };
    for (const N in C)
      ve(this, Ee).$on(N, (M) => this.fire(N, M.detail));
    return n;
  }
  /**
   * Update the control options.
   *
   * @param options options to update
   */
  setOptions(t) {
    var g;
    Object.assign(ve(this, ot), t);
    const {
      marker: n,
      showResultMarkers: r,
      flyTo: u,
      fullGeometryStyle: a,
      ...o
    } = ve(this, ot);
    (g = ve(this, Ee)) == null || g.$set(o);
  }
  /**
   * Set the content of search input box.
   *
   * @param value text to set
   * @param submit perform the search
   */
  setQuery(t, n = !0) {
    var r;
    (r = ve(this, Ee)) == null || r.setQuery(t, n);
  }
  /**
   * Clear geocoding search results from the map.
   */
  clearMap() {
    var t;
    (t = ve(this, Ee)) == null || t.clearMap();
  }
  /**
   * Clear search result list.
   */
  clearList() {
    var t;
    (t = ve(this, Ee)) == null || t.clearList();
  }
  /**
   * Set reverse geocoding mode.
   *
   * @param reverseActive reverse geocoding active
   */
  setReverseMode(t) {
    var n;
    (n = ve(this, Ee)) == null || n.$set({ reverseActive: t });
  }
  /**
   * Focus the search input box.
   *
   * @param options [FocusOptions](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#options)
   */
  focus(t) {
    var n;
    (n = ve(this, Ee)) == null || n.focus(t);
  }
  /**
   * Blur the search input box.
   */
  blur() {
    var t;
    (t = ve(this, Ee)) == null || t.blur();
  }
  onRemove() {
    var t;
    (t = ve(this, Ee)) == null || t.$destroy();
  }
}
Ee = new WeakMap(), ot = new WeakMap();
function As(...i) {
  return new Ps(...i);
}
window.L && typeof window.L == "object" && typeof window.L.control == "function" && (window.L.control.maptilerGeocoding = As);
export {
  Ps as GeocodingControl,
  Rs as createLeafletMapController
};
//# sourceMappingURL=leaflet.js.map
