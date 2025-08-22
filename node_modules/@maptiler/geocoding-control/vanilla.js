var Fi = Object.defineProperty;
var ji = Object.getPrototypeOf;
var Gi = Reflect.get;
var Pt = (i) => {
  throw TypeError(i);
};
var Hi = (i, e, t) => e in i ? Fi(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var vt = (i, e, t) => Hi(i, typeof e != "symbol" ? e + "" : e, t), Lt = (i, e, t) => e.has(i) || Pt("Cannot " + t);
var re = (i, e, t) => (Lt(i, e, "read from private field"), t ? t.call(i) : e.get(i)), _t = (i, e, t) => e.has(i) ? Pt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), Bt = (i, e, t, n) => (Lt(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t), Ft = (i, e, t) => (Lt(i, e, "access private method"), t);
var jt = (i, e, t) => Gi(ji(i), t, e);
function j() {
}
function Zi(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function ai(i) {
  return i();
}
function Gt() {
  return /* @__PURE__ */ Object.create(null);
}
function he(i) {
  i.forEach(ai);
}
function li(i) {
  return typeof i == "function";
}
function Ee(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let $e;
function X(i, e) {
  return i === e ? !0 : ($e || ($e = document.createElement("a")), $e.href = e, i === $e.href);
}
function qi(i) {
  return Object.keys(i).length === 0;
}
function Qi(i, e, t, n) {
  if (i) {
    const r = ui(i, e, t, n);
    return i[0](r);
  }
}
function ui(i, e, t, n) {
  return i[1] && n ? Zi(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function Ki(i, e, t, n) {
  return i[2], e.dirty;
}
function Vi(i, e, t, n, r, l) {
  if (r) {
    const u = ui(e, t, n, l);
    i.p(u, r);
  }
}
function Yi(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function it(i) {
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
function R(i) {
  return document.createElement(i);
}
function fe(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function Le(i) {
  return document.createTextNode(i);
}
function ee() {
  return Le(" ");
}
function Xi() {
  return Le("");
}
function Q(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function Ji(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function a(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function xi(i) {
  return Array.from(i.childNodes);
}
function Ge(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Ht(i, e) {
  i.value = e ?? "";
}
function Oe(i, e, t) {
  i.classList.toggle(e, !!t);
}
function $i(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let He;
function je(i) {
  He = i;
}
function ci() {
  if (!He) throw new Error("Function called outside component initialization");
  return He;
}
function en(i) {
  ci().$$.on_destroy.push(i);
}
function di() {
  const i = ci();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const l = $i(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return r.slice().forEach((u) => {
        u.call(i, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function tn(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const We = [], wt = [];
let ze = [];
const Zt = [], nn = /* @__PURE__ */ Promise.resolve();
let Et = !1;
function rn() {
  Et || (Et = !0, nn.then(fi));
}
function St(i) {
  ze.push(i);
}
const yt = /* @__PURE__ */ new Set();
let Ce = 0;
function fi() {
  if (Ce !== 0)
    return;
  const i = He;
  do {
    try {
      for (; Ce < We.length; ) {
        const e = We[Ce];
        Ce++, je(e), sn(e.$$);
      }
    } catch (e) {
      throw We.length = 0, Ce = 0, e;
    }
    for (je(null), We.length = 0, Ce = 0; wt.length; ) wt.pop()();
    for (let e = 0; e < ze.length; e += 1) {
      const t = ze[e];
      yt.has(t) || (yt.add(t), t());
    }
    ze.length = 0;
  } while (We.length);
  for (; Zt.length; )
    Zt.pop()();
  Et = !1, yt.clear(), je(i);
}
function sn(i) {
  if (i.fragment !== null) {
    i.update(), he(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(St);
  }
}
function on(i) {
  const e = [], t = [];
  ze.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), ze = e;
}
const tt = /* @__PURE__ */ new Set();
let we;
function Be() {
  we = {
    r: 0,
    c: [],
    p: we
    // parent group
  };
}
function Fe() {
  we.r || he(we.c), we = we.p;
}
function P(i, e) {
  i && i.i && (tt.delete(i), i.i(e));
}
function q(i, e, t, n) {
  if (i && i.o) {
    if (tt.has(i)) return;
    tt.add(i), we.c.push(() => {
      tt.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function qt(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function an(i, e) {
  q(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function ln(i, e, t, n, r, l, u, s, d, c, f, L) {
  let b = i.length, E = l.length, g = b;
  const p = {};
  for (; g--; ) p[i[g].key] = g;
  const D = [], k = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), B = [];
  for (g = E; g--; ) {
    const w = L(r, l, g), _ = t(w);
    let S = u.get(_);
    S ? B.push(() => S.p(w, e)) : (S = c(_, w), S.c()), k.set(_, D[g] = S), _ in p && W.set(_, Math.abs(g - p[_]));
  }
  const K = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set();
  function M(w) {
    P(w, 1), w.m(s, f), u.set(w.key, w), f = w.first, E--;
  }
  for (; b && E; ) {
    const w = D[E - 1], _ = i[b - 1], S = w.key, U = _.key;
    w === _ ? (f = w.first, b--, E--) : k.has(U) ? !u.has(S) || K.has(S) ? M(w) : C.has(U) ? b-- : W.get(S) > W.get(U) ? (C.add(S), M(w)) : (K.add(U), b--) : (d(_, u), b--);
  }
  for (; b--; ) {
    const w = i[b];
    k.has(w.key) || d(w, u);
  }
  for (; E; ) M(D[E - 1]);
  return he(B), D;
}
function _e(i) {
  i && i.c();
}
function me(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), St(() => {
    const l = i.$$.on_mount.map(ai).filter(li);
    i.$$.on_destroy ? i.$$.on_destroy.push(...l) : he(l), i.$$.on_mount = [];
  }), r.forEach(St);
}
function ge(i, e) {
  const t = i.$$;
  t.fragment !== null && (on(t.after_update), he(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function un(i, e) {
  i.$$.dirty[0] === -1 && (We.push(i), rn(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Se(i, e, t, n, r, l, u = null, s = [-1]) {
  const d = He;
  je(i);
  const c = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: j,
    not_equal: r,
    bound: Gt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: Gt(),
    dirty: s,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  u && u(c.root);
  let f = !1;
  if (c.ctx = t ? t(i, e.props || {}, (L, b, ...E) => {
    const g = E.length ? E[0] : b;
    return c.ctx && r(c.ctx[L], c.ctx[L] = g) && (!c.skip_bound && c.bound[L] && c.bound[L](g), f && un(i, L)), b;
  }) : [], c.update(), f = !0, he(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const L = xi(e.target);
      c.fragment && c.fragment.l(L), L.forEach(I);
    } else
      c.fragment && c.fragment.c();
    e.intro && P(i.$$.fragment), me(i, e.target, e.anchor), fi();
  }
  je(d);
}
class pe {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    vt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    vt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ge(this, 1), this.$destroy = j;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!li(t))
      return j;
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
    this.$$set && !qi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const cn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(cn);
function dn(i) {
  let e, t;
  return {
    c() {
      e = fe("svg"), t = fe("path"), a(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), a(e, "viewBox", "0 0 14 14"), a(e, "width", "13"), a(e, "height", "13"), a(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      A(n, e, r), N(e, t);
    },
    p: j,
    i: j,
    o: j,
    d(n) {
      n && I(e);
    }
  };
}
class mi extends pe {
  constructor(e) {
    super(), Se(this, e, null, dn, Ee, {});
  }
}
function fn(i) {
  let e, t;
  return {
    c() {
      e = fe("svg"), t = fe("path"), a(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), a(e, "viewBox", "0 0 30 30"), a(e, "fill", "none"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "class", "svelte-d2loi5");
    },
    m(n, r) {
      A(n, e, r), N(e, t);
    },
    p: j,
    i: j,
    o: j,
    d(n) {
      n && I(e);
    }
  };
}
class gi extends pe {
  constructor(e) {
    super(), Se(this, e, null, fn, Ee, {});
  }
}
function mn(i) {
  let e, t;
  return {
    c() {
      e = R("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "area.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), a(
        e,
        "title",
        /*placeType*/
        i[7]
      ), a(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      A(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "area.svg") && a(e, "src", t), r & /*placeType*/
      128 && a(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && a(
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
function gn(i) {
  let e, t;
  return {
    c() {
      e = R("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "reverse.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), a(
        e,
        "title",
        /*placeType*/
        i[7]
      ), a(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      A(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "reverse.svg") && a(e, "src", t), r & /*placeType*/
      128 && a(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && a(
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
function hn(i) {
  let e, t;
  return {
    c() {
      e = R("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "poi.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), a(
        e,
        "title",
        /*placeType*/
        i[7]
      ), a(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      A(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "poi.svg") && a(e, "src", t), r & /*placeType*/
      128 && a(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && a(
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
function bn(i) {
  let e, t;
  return {
    c() {
      e = R("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), a(
        e,
        "title",
        /*placeType*/
        i[7]
      ), a(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      A(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && a(e, "src", t), r & /*placeType*/
      128 && a(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && a(
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
function vn(i) {
  let e, t;
  return {
    c() {
      e = R("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "street.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), a(
        e,
        "title",
        /*placeType*/
        i[7]
      ), a(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      A(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "street.svg") && a(e, "src", t), r & /*placeType*/
      128 && a(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && a(
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
function Ln(i) {
  let e, t;
  return {
    c() {
      e = R("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "road.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), a(
        e,
        "title",
        /*placeType*/
        i[7]
      ), a(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      A(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "road.svg") && a(e, "src", t), r & /*placeType*/
      128 && a(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && a(
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
function _n(i) {
  let e, t;
  return {
    c() {
      e = R("img"), X(e.src, t = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || a(e, "src", t), a(
        e,
        "alt",
        /*placeType*/
        i[7]
      ), a(
        e,
        "title",
        /*placeType*/
        i[7]
      ), a(e, "class", "svelte-w9y5n9");
    },
    m(n, r) {
      A(n, e, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !X(e.src, t = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && a(e, "src", t), r & /*placeType*/
      128 && a(
        e,
        "alt",
        /*placeType*/
        n[7]
      ), r & /*placeType*/
      128 && a(
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
function yn(i) {
  let e, t, n, r;
  return {
    c() {
      e = R("img"), X(e.src, t = /*imageUrl*/
      i[5]) || a(e, "src", t), a(
        e,
        "alt",
        /*category*/
        i[4]
      ), a(
        e,
        "title",
        /*placeType*/
        i[7]
      ), a(e, "class", "svelte-w9y5n9");
    },
    m(l, u) {
      A(l, e, u), n || (r = Q(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(l, u) {
      u & /*imageUrl*/
      32 && !X(e.src, t = /*imageUrl*/
      l[5]) && a(e, "src", t), u & /*category*/
      16 && a(
        e,
        "alt",
        /*category*/
        l[4]
      ), u & /*placeType*/
      128 && a(
        e,
        "title",
        /*placeType*/
        l[7]
      );
    },
    d(l) {
      l && I(e), n = !1, r();
    }
  };
}
function wn(i) {
  let e, t;
  return {
    c() {
      e = R("div"), a(e, "class", "sprite-icon svelte-w9y5n9"), a(e, "style", t = `
        width: ${/*spriteIcon*/
      i[6].width / ie}px;
        height: ${/*spriteIcon*/
      i[6].height / ie}px;
        background-image: url(${/*iconsBaseUrl*/
      i[3]}sprite${pt}.png);
        background-position: -${/*spriteIcon*/
      i[6].x / ie}px -${/*spriteIcon*/
      i[6].y / ie}px;
        background-size: ${se.width / ie}px ${se.height / ie}px;
      `), a(
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
      n[6].width / ie}px;
        height: ${/*spriteIcon*/
      n[6].height / ie}px;
        background-image: url(${/*iconsBaseUrl*/
      n[3]}sprite${pt}.png);
        background-position: -${/*spriteIcon*/
      n[6].x / ie}px -${/*spriteIcon*/
      n[6].y / ie}px;
        background-size: ${se.width / ie}px ${se.height / ie}px;
      `) && a(e, "style", t), r & /*placeType*/
      128 && a(
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
function Qt(i) {
  let e, t;
  return {
    c() {
      e = R("span"), t = Le(
        /*placeType*/
        i[7]
      ), a(e, "class", "secondary svelte-w9y5n9");
    },
    m(n, r) {
      A(n, e, r), N(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      128 && Ge(
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
function En(i) {
  let e, t, n, r, l, u, s, d, c, f = (
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
  ), g, p, D = (
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
    1 && (l = null), se && /*spriteIcon*/
    v[6] ? wn : (
      /*imageUrl*/
      v[5] ? yn : (
        /*feature*/
        v[0].address ? _n : (t == null && (t = !!/*feature*/
        v[0].id.startsWith("road.")), t ? Ln : (n == null && (n = !!/*feature*/
        v[0].id.startsWith("address.")), n ? vn : (r == null && (r = !!/*feature*/
        v[0].id.startsWith("postal_code.")), r ? bn : (l == null && (l = !!/*feature*/
        v[0].id.startsWith("poi.")), l ? hn : (
          /*isReverse*/
          v[8] ? gn : mn
        )))))
      )
    );
  }
  let _ = w(i, -1), S = _(i), U = E && Qt(i);
  return {
    c() {
      e = R("li"), S.c(), u = ee(), s = R("span"), d = R("span"), c = R("span"), L = Le(f), b = ee(), U && U.c(), g = ee(), p = R("span"), k = Le(D), a(c, "class", "primary svelte-w9y5n9"), a(d, "class", "svelte-w9y5n9"), a(p, "class", "line2 svelte-w9y5n9"), a(s, "class", "texts svelte-w9y5n9"), a(e, "tabindex", "-1"), a(e, "role", "option"), a(e, "aria-selected", W = /*style*/
      i[1] === "selected"), a(e, "aria-checked", B = /*style*/
      i[1] === "picked"), a(e, "class", K = it(
        /*style*/
        i[1]
      ) + " svelte-w9y5n9");
    },
    m(v, m) {
      A(v, e, m), S.m(e, null), N(e, u), N(e, s), N(s, d), N(d, c), N(c, L), N(d, b), U && U.m(d, null), N(s, g), N(s, p), N(p, k), C || (M = [
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
      _ === (_ = w(v, m)) && S ? S.p(v, m) : (S.d(1), S = _(v), S && (S.c(), S.m(e, u))), m & /*isReverse, feature*/
      257 && f !== (f = /*isReverse*/
      (v[8] ? (
        /*feature*/
        v[0].place_name
      ) : (
        /*feature*/
        v[0].place_name.replace(/,.*/, "")
      )) + "") && Ge(L, f), m & /*showPlaceType, feature, imageUrl, isReverse*/
      293 && (E = /*showPlaceType*/
      v[2] === "always" || /*showPlaceType*/
      v[2] !== "never" && !/*feature*/
      v[0].address && !/*feature*/
      v[0].id.startsWith("road.") && !/*feature*/
      v[0].id.startsWith("address.") && !/*feature*/
      v[0].id.startsWith("postal_code.") && (!/*feature*/
      v[0].id.startsWith("poi.") || !/*imageUrl*/
      v[5]) && !/*isReverse*/
      v[8]), E ? U ? U.p(v, m) : (U = Qt(v), U.c(), U.m(d, null)) : U && (U.d(1), U = null), m & /*isReverse, feature*/
      257 && D !== (D = /*isReverse*/
      (v[8] ? "" : (
        /*feature*/
        v[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && Ge(k, D), m & /*style*/
      2 && W !== (W = /*style*/
      v[1] === "selected") && a(e, "aria-selected", W), m & /*style*/
      2 && B !== (B = /*style*/
      v[1] === "picked") && a(e, "aria-checked", B), m & /*style*/
      2 && K !== (K = it(
        /*style*/
        v[1]
      ) + " svelte-w9y5n9") && a(e, "class", K);
    },
    i: j,
    o: j,
    d(v) {
      v && I(e), S.d(), U && U.d(), C = !1, he(M);
    }
  };
}
const hi = typeof devicePixelRatio > "u" ? 1 : devicePixelRatio > 1.25, pt = hi ? "@2x" : "", ie = hi ? 2 : 1;
let se, et;
function Sn(i, e, t) {
  let n, r, l, { feature: u } = e, { style: s = "default" } = e, { showPlaceType: d } = e, { missingIconsCache: c } = e, { iconsBaseUrl: f } = e;
  const L = di();
  let b, E, g, p;
  function D() {
    et ?? (et = fetch(`${f}sprite${pt}.json`).then((_) => _.json()).then((_) => {
      se = _;
    }).catch(() => {
      se = null;
    }));
  }
  function k() {
    E && c.add(E), W();
  }
  function W() {
    se !== void 0 ? B() : (D(), et == null || et.then(B));
  }
  function B() {
    do {
      if (p--, t(4, b = n == null ? void 0 : n[p]), t(6, g = b ? se == null ? void 0 : se.icons[b] : void 0), g)
        break;
      t(5, E = b ? f + b.replace(/ /g, "_") + ".svg" : void 0);
    } while (p > -1 && (!E || c.has(E)));
  }
  function K(_) {
    tn.call(this, i, _);
  }
  const C = () => k(), M = () => L("select", void 0), w = (_) => {
    document.activeElement !== _.target && L("select", void 0);
  };
  return i.$$set = (_) => {
    "feature" in _ && t(0, u = _.feature), "style" in _ && t(1, s = _.style), "showPlaceType" in _ && t(2, d = _.showPlaceType), "missingIconsCache" in _ && t(11, c = _.missingIconsCache), "iconsBaseUrl" in _ && t(3, f = _.iconsBaseUrl);
  }, i.$$.update = () => {
    var _, S, U, v, m;
    i.$$.dirty & /*feature*/
    1 && t(12, n = (_ = u.properties) == null ? void 0 : _.categories), i.$$.dirty & /*feature*/
    1 && t(8, r = u.place_type[0] === "reverse"), i.$$.dirty & /*feature*/
    1 && t(7, l = ((U = (S = u.properties) == null ? void 0 : S.categories) == null ? void 0 : U.join(", ")) ?? ((m = (v = u.properties) == null ? void 0 : v.place_type_name) == null ? void 0 : m[0]) ?? u.place_type[0]), i.$$.dirty & /*categories*/
    4096 && (p = (n == null ? void 0 : n.length) ?? 0, W());
  }, [
    u,
    s,
    d,
    f,
    b,
    E,
    g,
    l,
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
class pn extends pe {
  constructor(e) {
    super(), Se(this, e, Sn, En, Ee, {
      feature: 0,
      style: 1,
      showPlaceType: 2,
      missingIconsCache: 11,
      iconsBaseUrl: 3
    });
  }
}
function kn(i) {
  let e;
  return {
    c() {
      e = R("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="loading-icon svelte-1ocfouu"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', a(e, "class", "svelte-1ocfouu");
    },
    m(t, n) {
      A(t, e, n);
    },
    p: j,
    i: j,
    o: j,
    d(t) {
      t && I(e);
    }
  };
}
class Tn extends pe {
  constructor(e) {
    super(), Se(this, e, null, kn, Ee, {});
  }
}
function Nn(i) {
  let e, t;
  return {
    c() {
      e = fe("svg"), t = fe("path"), a(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), a(e, "viewBox", "0 0 60.006 21.412"), a(e, "width", "14"), a(e, "height", "20"), a(e, "class", "svelte-en2qvf");
    },
    m(n, r) {
      A(n, e, r), N(e, t);
    },
    p: j,
    i: j,
    o: j,
    d(n) {
      n && I(e);
    }
  };
}
class Mn extends pe {
  constructor(e) {
    super(), Se(this, e, null, Nn, Ee, {});
  }
}
function Cn(i) {
  let e, t, n;
  return {
    c() {
      e = fe("svg"), t = fe("circle"), n = fe("path"), a(t, "cx", "4.789"), a(t, "cy", "4.787"), a(t, "r", "3.85"), a(t, "class", "svelte-1aq105l"), a(n, "d", "M12.063 12.063 7.635 7.635"), a(n, "class", "svelte-1aq105l"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "width", "13"), a(e, "height", "13"), a(e, "viewBox", "0 0 13 13"), a(e, "class", "svelte-1aq105l");
    },
    m(r, l) {
      A(r, e, l), N(e, t), N(e, n);
    },
    p: j,
    i: j,
    o: j,
    d(r) {
      r && I(e);
    }
  };
}
class Wn extends pe {
  constructor(e) {
    super(), Se(this, e, null, Cn, Ee, {});
  }
}
function On(i, e, t) {
  const n = e[1], r = e[0], l = n - r;
  return i === n && t ? i : ((i - r) % l + l) % l + r;
}
function Kt(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let Ae;
async function zn(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (Ae && r.cachedLocationExpiry && Ae.time + r.cachedLocationExpiry > Date.now()) {
          if (!Ae.coords)
            break e;
          return Ae.coords;
        }
        let l;
        try {
          return l = await new Promise((u, s) => {
            t.signal.addEventListener("abort", () => {
              s(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (d) => {
                u(
                  [d.coords.longitude, d.coords.latitude].map((c) => c.toFixed(6)).join(",")
                );
              },
              (d) => {
                s(d);
              },
              r
            );
          }), l;
        } catch {
        } finally {
          r.cachedLocationExpiry && (Ae = {
            time: Date.now(),
            coords: l
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
const Rn = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, Vt = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, Yt = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, Xt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Jt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, xt = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Dn(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((E) => Number(E.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), l = Math.abs(n), u = t > 0 ? "N" : "S", s = n > 0 ? "E" : "W";
    let d;
    i == "DD" && (d = `${r}° ${u}, ${l}° ${s}`);
    const c = Math.floor(r), f = Math.floor(l), L = (r - c) * 60, b = (l - f) * 60;
    if (i == "DM") {
      let E = $t(L, 3).toFixed(3).padStart(6, "0"), g = $t(b, 3).toFixed(3).padStart(6, "0");
      E.endsWith(".000") && g.endsWith(".000") && (E = E.replace(/\.000$/, ""), g = g.replace(/\.000$/, "")), d = `${c}° ${E}' ${u}, ${f}° ${g}' ${s}`;
    }
    if (i == "DMS") {
      const E = Math.floor(L), g = Math.floor(b);
      let p = ((L - E) * 60).toFixed(1).padStart(4, "0"), D = ((b - g) * 60).toFixed(1).padStart(4, "0");
      const k = E.toString().padStart(2, "0"), W = g.toString().padStart(2, "0");
      p.endsWith(".0") && D.endsWith(".0") && (p = p.replace(/\.0$/, ""), D = D.replace(/\.0$/, "")), d = `${c}° ${k}' ${p}" ${u}, ${f}° ${W}' ${D}" ${s}`;
    }
    return d;
  } else
    throw new Error("no decimal coordinates to convert");
}
function $t(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function kt(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", l = "", u = null, s = [], d = !1;
  if (Rn.test(i))
    throw new Error("invalid coordinate value");
  if (Vt.test(i))
    if (s = Vt.exec(i), d = Pe(s), d)
      t = Math.abs(s[1]) + s[2] / 60, Number(s[1]) < 0 && (t *= -1), n = Math.abs(s[3]) + s[4] / 60, Number(s[3]) < 0 && (n *= -1), u = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (Yt.test(i))
    if (s = Yt.exec(i), d = Pe(s), d) {
      if (t = s[2], n = s[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), u = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      s[1] ? (r = s[1], l = s[5]) : s[4] && (r = s[4], l = s[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (Xt.test(i))
    if (s = Xt.exec(i), d = Pe(s), d)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, u = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, u = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[9])), s[11] && (n += s[11] / 60), s[13] && (n += s[13].replace(",", ".") / 3600), parseInt(s[9]) < 0 && (n = -1 * n), s[1] ? (r = s[1], l = s[8]) : s[7] && (r = s[7], l = s[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Jt.test(i))
    if (s = Jt.exec(i), d = Pe(s), d)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4] / 60, u = "DM"), s[6] && (t += s[6] / 3600, u = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[10])), s[12] && (n += s[12] / 60), s[14] && (n += s[14] / 3600), parseInt(s[10]) < 0 && (n = -1 * n), s[1] ? (r = s[1], l = s[9]) : s[8] && (r = s[8], l = s[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (xt.test(i)) {
    if (s = xt.exec(i), d = Pe(s), s.filter((c) => c).length <= 5)
      throw new Error("invalid coordinates format");
    if (d)
      t = Math.abs(parseInt(s[2])), s[4] && (t += s[4].replace(",", ".") / 60, u = "DM"), s[6] && (t += s[6].replace(",", ".") / 3600, u = "DMS"), parseInt(s[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(s[10])), s[12] && (n += s[12].replace(",", ".") / 60), s[14] && (n += s[14].replace(",", ".") / 3600), parseInt(s[10]) < 0 && (n = -1 * n), s[1] ? (r = s[1], l = s[9]) : s[8] && (r = s[8], l = s[16]);
    else
      throw new Error("invalid coordinates format");
  }
  if (d) {
    if (Math.abs(n) >= 180)
      throw new Error("invalid longitude value");
    if (Math.abs(t) >= 90)
      throw new Error("invalid latitude value");
    if (r && !l || !r && l)
      throw new Error("invalid coordinates value");
    if (r && r == l)
      throw new Error("invalid coordinates format");
    t.toString().includes(",") && (t = t.replace(",", ".")), n.toString().includes(",") && (n = n.replace(",", "."));
    let c = /S|SOUTH/i;
    c.test(r) && t > 0 && (t = -1 * t), c = /W|WEST/i, c.test(l) && n > 0 && (n = -1 * n);
    const f = s[0].trim();
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
    const D = b.split(".");
    if (D.length == 2 && D[1] == 0 && D[1].length != 2)
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
      originalFormat: u,
      closeEnough: Un,
      toCoordinateFormat: Dn
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function Pe(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let l = 0; l < r; l++) {
    const u = e[l], s = e[l + r], d = t.test(u) && t.test(s), c = n.test(u) && n.test(s), f = u == s;
    if (!(u == null && s == null)) {
      if (u == null || s == null)
        return !1;
      if (d || c || f)
        continue;
      return !1;
    }
  }
  return !0;
}
function ei(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Un(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return ei(this.decimalLatitude, Number(e[0])) && ei(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const In = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
kt.to = In;
const An = [
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
], Pn = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, Bn = [
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
], Fn = [
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
function jn() {
  const i = [];
  return An.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...Pn });
  }), [...i, ...Bn, ...Fn];
}
const Gn = jn();
kt.formats = Gn.map((i) => i.verbatimCoordinates);
const Hn = kt;
function ti(i, e, t) {
  const n = i.slice();
  return n[97] = e[t], n[99] = t, n;
}
function ii(i) {
  let e, t, n, r, l;
  return t = new mi({}), {
    c() {
      e = R("button"), _e(t.$$.fragment), a(e, "type", "button"), a(
        e,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), a(e, "class", "svelte-bz0zu3");
    },
    m(u, s) {
      A(u, e, s), me(t, e, null), n = !0, r || (l = Q(
        e,
        "click",
        /*click_handler_2*/
        i[78]
      ), r = !0);
    },
    p(u, s) {
      (!n || s[0] & /*clearButtonTitle*/
      8) && a(
        e,
        "title",
        /*clearButtonTitle*/
        u[3]
      );
    },
    i(u) {
      n || (P(t.$$.fragment, u), n = !0);
    },
    o(u) {
      q(t.$$.fragment, u), n = !1;
    },
    d(u) {
      u && I(e), ge(t), r = !1, l();
    }
  };
}
function ni(i) {
  let e, t;
  return e = new Tn({}), {
    c() {
      _e(e.$$.fragment);
    },
    m(n, r) {
      me(e, n, r), t = !0;
    },
    i(n) {
      t || (P(e.$$.fragment, n), t = !0);
    },
    o(n) {
      q(e.$$.fragment, n), t = !1;
    },
    d(n) {
      ge(e, n);
    }
  };
}
function ri(i) {
  let e, t, n, r, l;
  return t = new Mn({}), {
    c() {
      e = R("button"), _e(t.$$.fragment), a(e, "type", "button"), a(
        e,
        "title",
        /*reverseButtonTitle*/
        i[10]
      ), a(e, "class", "svelte-bz0zu3"), Oe(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(u, s) {
      A(u, e, s), me(t, e, null), n = !0, r || (l = Q(
        e,
        "click",
        /*click_handler_3*/
        i[79]
      ), r = !0);
    },
    p(u, s) {
      (!n || s[0] & /*reverseButtonTitle*/
      1024) && a(
        e,
        "title",
        /*reverseButtonTitle*/
        u[10]
      ), (!n || s[0] & /*reverseActive*/
      1) && Oe(
        e,
        "active",
        /*reverseActive*/
        u[0]
      );
    },
    i(u) {
      n || (P(t.$$.fragment, u), n = !0);
    },
    o(u) {
      q(t.$$.fragment, u), n = !1;
    },
    d(u) {
      u && I(e), ge(t), r = !1, l();
    }
  };
}
function Zn(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, l, u, s = qt(
    /*listFeatures*/
    i[13]
  );
  const d = (c) => (
    /*feature*/
    c[97].id + /*feature*/
    (c[97].address ? "," + /*feature*/
    c[97].address : "")
  );
  for (let c = 0; c < s.length; c += 1) {
    let f = ti(i, s, c), L = d(f);
    n.set(L, t[c] = si(L, f));
  }
  return {
    c() {
      e = R("ul");
      for (let c = 0; c < t.length; c += 1)
        t[c].c();
      a(e, "class", "options svelte-bz0zu3"), a(e, "role", "listbox");
    },
    m(c, f) {
      A(c, e, f);
      for (let L = 0; L < t.length; L += 1)
        t[L] && t[L].m(e, null);
      r = !0, l || (u = [
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
      ], l = !0);
    },
    p(c, f) {
      f[0] & /*listFeatures, showPlaceType, selectedItemIndex, picked, missingIconsCache, iconsBaseUrl, handleMouseEnter, pick*/
      102823936 && (s = qt(
        /*listFeatures*/
        c[13]
      ), Be(), t = ln(t, f, d, 1, c, s, n, e, an, si, null, ti), Fe());
    },
    i(c) {
      if (!r) {
        for (let f = 0; f < s.length; f += 1)
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
      l = !1, he(u);
    }
  };
}
function qn(i) {
  let e, t, n, r, l, u;
  return t = new gi({}), {
    c() {
      e = R("div"), _e(t.$$.fragment), n = ee(), r = R("div"), l = Le(
        /*noResultsMessage*/
        i[8]
      ), a(r, "class", "svelte-bz0zu3"), a(e, "class", "no-results svelte-bz0zu3");
    },
    m(s, d) {
      A(s, e, d), me(t, e, null), N(e, n), N(e, r), N(r, l), u = !0;
    },
    p(s, d) {
      (!u || d[0] & /*noResultsMessage*/
      256) && Ge(
        l,
        /*noResultsMessage*/
        s[8]
      );
    },
    i(s) {
      u || (P(t.$$.fragment, s), u = !0);
    },
    o(s) {
      q(t.$$.fragment, s), u = !1;
    },
    d(s) {
      s && I(e), ge(t);
    }
  };
}
function Qn(i) {
  let e = "", t;
  return {
    c() {
      t = Le(e);
    },
    m(n, r) {
      A(n, t, r);
    },
    p: j,
    i: j,
    o: j,
    d(n) {
      n && I(t);
    }
  };
}
function Kn(i) {
  let e, t, n, r, l, u, s, d, c, f, L;
  return t = new gi({}), d = new mi({}), {
    c() {
      e = R("div"), _e(t.$$.fragment), n = ee(), r = R("div"), l = Le(
        /*errorMessage*/
        i[7]
      ), u = ee(), s = R("button"), _e(d.$$.fragment), a(r, "class", "svelte-bz0zu3"), a(s, "class", "svelte-bz0zu3"), a(e, "class", "error svelte-bz0zu3");
    },
    m(b, E) {
      A(b, e, E), me(t, e, null), N(e, n), N(e, r), N(r, l), N(e, u), N(e, s), me(d, s, null), c = !0, f || (L = Q(
        s,
        "click",
        /*click_handler_4*/
        i[80]
      ), f = !0);
    },
    p(b, E) {
      (!c || E[0] & /*errorMessage*/
      128) && Ge(
        l,
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
      b && I(e), ge(t), ge(d), f = !1, L();
    }
  };
}
function si(i, e) {
  var s;
  let t, n, r;
  function l() {
    return (
      /*mouseenter_handler*/
      e[81](
        /*i*/
        e[99]
      )
    );
  }
  function u() {
    return (
      /*select_handler*/
      e[82](
        /*feature*/
        e[97]
      )
    );
  }
  return n = new pn({
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
  }), n.$on("mouseenter", l), n.$on("select", u), {
    key: i,
    first: null,
    c() {
      t = Xi(), _e(n.$$.fragment), this.first = t;
    },
    m(d, c) {
      A(d, t, c), me(n, d, c), r = !0;
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
      d && I(t), ge(n, d);
    }
  };
}
function Vn(i) {
  let e, t, n, r, l, u, s, d, c, f, L, b, E, g, p, D, k, W, B, K = !1;
  l = new Wn({});
  let C = !/*abortController*/
  i[20] && ii(i), M = (
    /*abortController*/
    i[20] && ni()
  ), w = (
    /*enableReverse*/
    i[6] === "button" && ri(i)
  );
  const _ = (
    /*#slots*/
    i[70].default
  ), S = Qi(
    _,
    i,
    /*$$scope*/
    i[69],
    null
  ), U = [Kn, Qn, qn, Zn], v = [];
  function m(y, G) {
    var ue, ke;
    return (
      /*error*/
      y[19] ? 0 : !/*focusedDelayed*/
      y[16] && !/*keepListOpen*/
      y[4] ? 1 : (
        /*listFeatures*/
        ((ue = y[13]) == null ? void 0 : ue.length) === 0 ? 2 : (
          /*listFeatures*/
          (ke = y[13]) != null && ke.length && /*focusedDelayed*/
          (y[16] || /*keepListOpen*/
          y[4]) ? 3 : -1
        )
      )
    );
  }
  return ~(g = m(i)) && (p = v[g] = U[g](i)), {
    c() {
      e = ee(), t = R("form"), n = R("div"), r = R("button"), _e(l.$$.fragment), u = ee(), s = R("input"), d = ee(), c = R("div"), C && C.c(), f = ee(), M && M.c(), L = ee(), w && w.c(), b = ee(), S && S.c(), E = ee(), p && p.c(), a(r, "class", "search-button svelte-bz0zu3"), a(r, "type", "button"), a(
        s,
        "placeholder",
        /*placeholder*/
        i[9]
      ), a(
        s,
        "aria-label",
        /*placeholder*/
        i[9]
      ), a(s, "class", "svelte-bz0zu3"), a(c, "class", "clear-button-container svelte-bz0zu3"), Oe(
        c,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), a(n, "class", "input-group svelte-bz0zu3"), a(t, "class", D = it(
        /*className*/
        i[2]
      ) + " svelte-bz0zu3"), Oe(
        t,
        "can-collapse",
        /*collapsed*/
        i[5] && /*searchValue*/
        i[1] === ""
      );
    },
    m(y, G) {
      A(y, e, G), A(y, t, G), N(t, n), N(n, r), me(l, r, null), N(n, u), N(n, s), i[72](s), Ht(
        s,
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
          s,
          "input",
          /*input_1_input_handler*/
          i[73]
        ),
        Q(
          s,
          "focus",
          /*focus_handler*/
          i[74]
        ),
        Q(
          s,
          "blur",
          /*blur_handler*/
          i[75]
        ),
        Q(
          s,
          "click",
          /*click_handler_1*/
          i[76]
        ),
        Q(
          s,
          "keydown",
          /*handleKeyDown*/
          i[23]
        ),
        Q(
          s,
          "input",
          /*handleInput*/
          i[24]
        ),
        Q(
          s,
          "change",
          /*change_handler*/
          i[77]
        ),
        Q(t, "submit", Ji(
          /*handleSubmit*/
          i[22]
        ))
      ], W = !0);
    },
    p(y, G) {
      (!k || G[0] & /*placeholder*/
      512) && a(
        s,
        "placeholder",
        /*placeholder*/
        y[9]
      ), (!k || G[0] & /*placeholder*/
      512) && a(
        s,
        "aria-label",
        /*placeholder*/
        y[9]
      ), G[0] & /*searchValue*/
      2 && s.value !== /*searchValue*/
      y[1] && Ht(
        s,
        /*searchValue*/
        y[1]
      ), /*abortController*/
      y[20] ? C && (Be(), q(C, 1, 1, () => {
        C = null;
      }), Fe()) : C ? (C.p(y, G), G[0] & /*abortController*/
      1048576 && P(C, 1)) : (C = ii(y), C.c(), P(C, 1), C.m(c, f)), /*abortController*/
      y[20] ? M ? G[0] & /*abortController*/
      1048576 && P(M, 1) : (M = ni(), M.c(), P(M, 1), M.m(c, null)) : M && (Be(), q(M, 1, 1, () => {
        M = null;
      }), Fe()), (!k || G[0] & /*searchValue*/
      2) && Oe(
        c,
        "displayable",
        /*searchValue*/
        y[1] !== ""
      ), /*enableReverse*/
      y[6] === "button" ? w ? (w.p(y, G), G[0] & /*enableReverse*/
      64 && P(w, 1)) : (w = ri(y), w.c(), P(w, 1), w.m(n, b)) : w && (Be(), q(w, 1, 1, () => {
        w = null;
      }), Fe()), S && S.p && (!k || G[2] & /*$$scope*/
      128) && Vi(
        S,
        _,
        y,
        /*$$scope*/
        y[69],
        k ? Ki(
          _,
          /*$$scope*/
          y[69],
          G,
          null
        ) : Yi(
          /*$$scope*/
          y[69]
        ),
        null
      );
      let ue = g;
      g = m(y), g === ue ? ~g && v[g].p(y, G) : (p && (Be(), q(v[ue], 1, 1, () => {
        v[ue] = null;
      }), Fe()), ~g ? (p = v[g], p ? p.p(y, G) : (p = v[g] = U[g](y), p.c()), P(p, 1), p.m(t, null)) : p = null), (!k || G[0] & /*className*/
      4 && D !== (D = it(
        /*className*/
        y[2]
      ) + " svelte-bz0zu3")) && a(t, "class", D), (!k || G[0] & /*className, collapsed, searchValue*/
      38) && Oe(
        t,
        "can-collapse",
        /*collapsed*/
        y[5] && /*searchValue*/
        y[1] === ""
      );
    },
    i(y) {
      k || (P(K), P(l.$$.fragment, y), P(C), P(M), P(w), P(S, y), P(p), k = !0);
    },
    o(y) {
      q(K), q(l.$$.fragment, y), q(C), q(M), q(w), q(S, y), q(p), k = !1;
    },
    d(y) {
      y && (I(e), I(t)), ge(l), i[72](null), C && C.d(), M && M.d(), w && w.d(), S && S.d(y), ~g && v[g].d(), W = !1, he(B);
    }
  };
}
function Yn(i, e, t) {
  let n, r, l, { $$slots: u = {}, $$scope: s } = e;
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
  let { class: c = void 0 } = e, { apiKey: f = void 0 } = e, { bbox: L = void 0 } = e, { clearButtonTitle: b = "clear" } = e, { clearOnBlur: E = !1 } = e, { clearListOnPick: g = !1 } = e, { keepListOpen: p = !1 } = e, { collapsed: D = !1 } = e, { country: k = void 0 } = e, { debounceSearch: W = 200 } = e, { enableReverse: B = "never" } = e, { errorMessage: K = "Something went wrong…" } = e, { filter: C = () => !0 } = e, { flyTo: M = !0 } = e, { fuzzyMatch: w = !0 } = e, { language: _ = void 0 } = e, { limit: S = void 0 } = e;
  const U = 41415112612;
  let { reverseGeocodingLimit: v = U } = e, { mapController: m = void 0 } = e, { minLength: y = 2 } = e, { noResultsMessage: G = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: ue = "Search" } = e, { proximity: ke = [{ type: "server-geolocation" }] } = e, { reverseActive: ce = B === "always" } = e, { reverseButtonTitle: Nt = "toggle reverse geocoding" } = e, { searchValue: V = "" } = e, { pickedResultStyle: Ze = "full-geometry" } = e, { showPlaceType: Mt = "if-needed" } = e, { showResultsWhileTyping: qe = !0 } = e, { selectFirst: Te = !0 } = e, { flyToSelected: Qe = !1 } = e, { markerOnSelected: Ke = !0 } = e, { types: rt = void 0 } = e;
  const Ct = [];
  let { reverseGeocodingTypes: Ve = Ct } = e, { exhaustiveReverseGeocoding: st = !1 } = e, { excludeTypes: ot = !1 } = e;
  const Wt = void 0;
  let { reverseGeocodingExcludeTypes: Ye = Wt } = e, { zoom: Xe = d } = e, { apiUrl: at = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: lt = {} } = e, { iconsBaseUrl: Ot = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.1.7/icons/" } = e, { adjustUrlQuery: ut = () => {
  } } = e, { adjustUrl: ct = () => {
  } } = e;
  function vi(o) {
    ne.focus(o);
  }
  function Li() {
    ne.blur();
  }
  function zt(o, F = !0, H = !1) {
    t(1, V = o), F ? (t(15, O = -1), Dt()) : (Ut(void 0, !H, H), setTimeout(() => {
      ne.focus(), ne.select();
    }));
  }
  function _i() {
    t(13, T = void 0), t(14, h = void 0), t(15, O = -1);
  }
  function yi() {
    t(64, Z = []), t(14, h = void 0);
  }
  let T, Z, h, Rt = "", ne, O = -1, oe, Je = [], ye, Ne, Me, dt, de = !1;
  const wi = /* @__PURE__ */ new Set(), be = di();
  en(() => {
    m && (m.setEventHandler(void 0), m.indicateReverse(!1), m.setSelectedMarker(-1), m.setFeatures(void 0, void 0, !1));
  });
  function Dt(o) {
    if (t(17, de = !1), Ne && (clearTimeout(Ne), Ne = void 0), O > -1 && T)
      t(14, h = T[O]), t(1, V = h.place_type[0] === "reverse" ? h.place_name : h.place_name.replace(/,.*/, "")), t(19, oe = void 0), t(64, Z = void 0), t(15, O = -1);
    else if (V) {
      const F = o || !ft(V);
      mt(V, { exact: !0 }).then(() => {
        t(64, Z = T), t(14, h = void 0), F && Ei();
      }).catch((H) => t(19, oe = H));
    }
  }
  function ft(o) {
    try {
      return Hn(o, 6);
    } catch {
      return !1;
    }
  }
  async function mt(o, { byId: F = !1, exact: H = !1 } = {}) {
    var $, ae, ve;
    t(19, oe = void 0), ye == null || ye.abort();
    const x = new AbortController();
    t(20, ye = x);
    try {
      const z = ft(o), De = new URL(at + "/" + encodeURIComponent(z ? z.decimalLongitude + "," + z.decimalLatitude : o) + ".json"), te = De.searchParams;
      _ !== void 0 && te.set("language", Array.isArray(_) ? _.join(",") : _ ?? "");
      const [bt] = (m == null ? void 0 : m.getCenterAndZoom()) ?? [];
      let le = ($ = !z || Ve === Ct ? rt : Ve) == null ? void 0 : $.map((Y) => typeof Y == "string" ? Y : bt === void 0 || (Y[0] ?? 0) <= bt && bt < (Y[1] ?? 1 / 0) ? Y[2] : void 0).filter((Y) => Y !== void 0);
      le && (le = [...new Set(le)], te.set("types", le.join(",")));
      const At = !z || Ye === Wt ? ot : Ye;
      if (At && te.set("excludeTypes", String(At)), L && te.set("bbox", L.map((Y) => Y.toFixed(6)).join(",")), k && te.set("country", Array.isArray(k) ? k.join(",") : k), !F && !z) {
        const Y = await zn(m, ke, x);
        Y && te.set("proximity", Y), (H || !qe) && te.set("autocomplete", "false"), te.set("fuzzyMatch", String(w));
      }
      const Ue = v === U ? S : v;
      Ue !== void 0 && Ue > 1 && (le == null ? void 0 : le.length) !== 1 && console.warn("For reverse geocoding when limit > 1 then types must contain single value."), z ? (Ue === 1 || Ue !== void 0 && (st || (le == null ? void 0 : le.length) === 1)) && te.set("limit", String(Ue)) : S !== void 0 && te.set("limit", String(S)), f && te.set("key", f), ut(te), ct(De);
      const Bi = De.searchParams.get("types") === "" && De.searchParams.get("excludeTypes") !== "true", xe = De.toString();
      if (xe === Rt) {
        F ? (g && t(13, T = void 0), t(14, h = Je[0])) : (t(13, T = Je), ((ae = T[O]) == null ? void 0 : ae.id) !== (r == null ? void 0 : r.id) && t(15, O = -1));
        return;
      }
      Rt = xe;
      let Ie;
      if (Bi)
        Ie = { type: "FeatureCollection", features: [] };
      else {
        const Y = await fetch(xe, { signal: x.signal, ...lt });
        if (!Y.ok)
          throw new Error(await Y.text());
        Ie = await Y.json();
      }
      be("response", { url: xe, featureCollection: Ie }), F ? (g && t(13, T = void 0), t(14, h = Ie.features[0]), Je = [h]) : (t(13, T = Ie.features.filter(C)), z && T.unshift({
        type: "Feature",
        properties: {},
        id: "reverse_" + z.decimalLongitude + "_" + z.decimalLatitude,
        text: z.decimalLatitude + ", " + z.decimalLongitude,
        place_name: z.decimalLatitude + ", " + z.decimalLongitude,
        place_type: ["reverse"],
        center: [z.decimalLongitude, z.decimalLatitude],
        bbox: [
          z.decimalLongitude,
          z.decimalLatitude,
          z.decimalLongitude,
          z.decimalLatitude
        ],
        geometry: {
          type: "Point",
          coordinates: [z.decimalLongitude, z.decimalLatitude]
        }
      }), Je = T, ((ve = T[O]) == null ? void 0 : ve.id) !== (r == null ? void 0 : r.id) && t(15, O = -1), z && ne.focus());
    } catch (z) {
      if (z && typeof z == "object" && "name" in z && z.name === "AbortError")
        return;
      throw z;
    } finally {
      x === ye && t(20, ye = void 0);
    }
  }
  function Ei() {
    var x;
    if (!(Z != null && Z.length) || !M)
      return;
    const o = [180, 90, -180, -90], F = !Z.some(($) => !$.matching_text);
    let H;
    for (const $ of Z) {
      const ae = Re($);
      if (H = H === void 0 ? ae : ae === void 0 ? H : Math.max(H, ae), F || !$.matching_text)
        for (const ve of [0, 1, 2, 3])
          o[ve] = Math[ve < 2 ? "min" : "max"](o[ve], ((x = $.bbox) == null ? void 0 : x[ve]) ?? $.center[ve % 2]);
    }
    m && Z.length > 0 && (h && o[0] === o[2] && o[1] === o[3] ? m.flyTo(h.center, Re(h)) : m.fitBounds(Kt(o), 50, H));
  }
  function gt() {
    !h || !m || (!h.bbox || h.bbox[0] === h.bbox[2] && h.bbox[1] === h.bbox[3] ? m.flyTo(h.center, Re(h)) : m.fitBounds(Kt(h.bbox), 50, Re(h)));
  }
  function Re(o) {
    var H;
    if (!o.bbox || o.bbox[0] !== o.bbox[2] && o.bbox[1] !== o.bbox[3])
      return;
    const F = o.id.replace(/\..*/, "");
    return (Array.isArray((H = o.properties) == null ? void 0 : H.categories) ? o.properties.categories.reduce(
      (x, $) => {
        const ae = Xe[F + "." + $];
        return x === void 0 ? ae : ae === void 0 ? x : Math.max(x, ae);
      },
      void 0
    ) : void 0) ?? Xe[F];
  }
  function Si(o) {
    t(0, ce = B === "always"), t(13, T = void 0), t(14, h = void 0), t(15, O = -1), zt(o[1].toFixed(6) + ", " + On(o[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function pi(o) {
    if (!T)
      return;
    let F = o.key === "ArrowDown" ? 1 : o.key === "ArrowUp" ? -1 : 0;
    F && (ne.focus(), t(17, de = !0), o.preventDefault(), h && O === -1 && t(15, O = T.findIndex((H) => H.id === (h == null ? void 0 : h.id))), O === (h || Te ? 0 : -1) && F === -1 && t(15, O = T.length), t(15, O += F), O >= T.length && t(15, O = -1), O < 0 && (h || Te) && t(15, O = 0));
  }
  function Ut(o, F = !0, H = !1) {
    if (t(19, oe = void 0), t(14, h = void 0), t(17, de = !0), qe || H) {
      if (Ne && clearTimeout(Ne), V.length < y)
        return;
      const x = V;
      Ne = window.setTimeout(
        () => {
          mt(x).catch(($) => t(19, oe = $));
        },
        F ? W : 0
      );
    } else
      t(13, T = void 0), t(19, oe = void 0);
  }
  function ht(o) {
    h && (h == null ? void 0 : h.id) === (o == null ? void 0 : o.id) ? gt() : (t(14, h = o), t(1, V = o.place_name));
  }
  function It(o) {
    t(15, O = o);
  }
  function ki() {
    (!Te || h) && t(15, O = -1), Qe && gt();
  }
  const Ti = () => ne.focus();
  function Ni(o) {
    wt[o ? "unshift" : "push"](() => {
      ne = o, t(18, ne);
    });
  }
  function Mi() {
    V = this.value, t(1, V), t(17, de), t(31, E), t(16, Me);
  }
  const Ci = () => t(17, de = !0), Wi = () => t(17, de = !1), Oi = () => t(17, de = !0), zi = () => t(14, h = void 0), Ri = () => {
    t(1, V = ""), t(14, h = void 0), ne.focus();
  }, Di = () => t(0, ce = !ce), Ui = () => t(19, oe = void 0), Ii = (o) => It(o), Ai = (o) => ht(o), Pi = () => {
  };
  return i.$$set = (o) => {
    "class" in o && t(2, c = o.class), "apiKey" in o && t(29, f = o.apiKey), "bbox" in o && t(30, L = o.bbox), "clearButtonTitle" in o && t(3, b = o.clearButtonTitle), "clearOnBlur" in o && t(31, E = o.clearOnBlur), "clearListOnPick" in o && t(32, g = o.clearListOnPick), "keepListOpen" in o && t(4, p = o.keepListOpen), "collapsed" in o && t(5, D = o.collapsed), "country" in o && t(33, k = o.country), "debounceSearch" in o && t(34, W = o.debounceSearch), "enableReverse" in o && t(6, B = o.enableReverse), "errorMessage" in o && t(7, K = o.errorMessage), "filter" in o && t(35, C = o.filter), "flyTo" in o && t(36, M = o.flyTo), "fuzzyMatch" in o && t(37, w = o.fuzzyMatch), "language" in o && t(38, _ = o.language), "limit" in o && t(39, S = o.limit), "reverseGeocodingLimit" in o && t(40, v = o.reverseGeocodingLimit), "mapController" in o && t(41, m = o.mapController), "minLength" in o && t(42, y = o.minLength), "noResultsMessage" in o && t(8, G = o.noResultsMessage), "placeholder" in o && t(9, ue = o.placeholder), "proximity" in o && t(43, ke = o.proximity), "reverseActive" in o && t(0, ce = o.reverseActive), "reverseButtonTitle" in o && t(10, Nt = o.reverseButtonTitle), "searchValue" in o && t(1, V = o.searchValue), "pickedResultStyle" in o && t(44, Ze = o.pickedResultStyle), "showPlaceType" in o && t(11, Mt = o.showPlaceType), "showResultsWhileTyping" in o && t(45, qe = o.showResultsWhileTyping), "selectFirst" in o && t(46, Te = o.selectFirst), "flyToSelected" in o && t(47, Qe = o.flyToSelected), "markerOnSelected" in o && t(48, Ke = o.markerOnSelected), "types" in o && t(49, rt = o.types), "reverseGeocodingTypes" in o && t(50, Ve = o.reverseGeocodingTypes), "exhaustiveReverseGeocoding" in o && t(51, st = o.exhaustiveReverseGeocoding), "excludeTypes" in o && t(52, ot = o.excludeTypes), "reverseGeocodingExcludeTypes" in o && t(53, Ye = o.reverseGeocodingExcludeTypes), "zoom" in o && t(54, Xe = o.zoom), "apiUrl" in o && t(55, at = o.apiUrl), "fetchParameters" in o && t(56, lt = o.fetchParameters), "iconsBaseUrl" in o && t(12, Ot = o.iconsBaseUrl), "adjustUrlQuery" in o && t(57, ut = o.adjustUrlQuery), "adjustUrl" in o && t(58, ct = o.adjustUrl), "$$scope" in o && t(69, s = o.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    64 && t(0, ce = B === "always"), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && Ze !== "marker-only" && h && !h.address && h.geometry.type === "Point" && h.place_type[0] !== "reverse" && mt(h.id, { byId: !0 }).catch((o) => t(19, oe = o)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, flyTo, clearListOnPick*/
    1058 | i.$$.dirty[2] & /*prevIdToFly*/
    8 && (m && h && h.id !== dt && M && (gt(), g && t(13, T = void 0), t(64, Z = void 0), t(15, O = -1)), t(65, dt = h == null ? void 0 : h.id)), i.$$.dirty[0] & /*focused, focusedDelayed*/
    196608 | i.$$.dirty[1] & /*clearOnBlur*/
    1 && setTimeout(() => {
      t(16, Me = de), E && !Me && t(1, V = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    2048 && V.length < y && (t(13, T = void 0), t(19, oe = void 0), t(64, Z = T)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex, picked*/
    57344 | i.$$.dirty[1] & /*selectFirst*/
    32768 && Te && T != null && T.length && O == -1 && !h && t(15, O = 0), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[2] & /*markedFeatures*/
    4 && Z !== T && t(64, Z = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    73729 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && m && m.setEventHandler((o) => {
      switch (o.type) {
        case "mapClick":
          ce && Si(o.coordinates);
          break;
        case "markerClick":
          {
            const F = T == null ? void 0 : T.find((H) => H.id === o.id);
            F && ht(F);
          }
          break;
        case "markerMouseEnter":
          Z && t(15, O = Me ? (T == null ? void 0 : T.findIndex((F) => F.id === o.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          Z && t(15, O = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    40960 && t(66, r = T == null ? void 0 : T[O]), i.$$.dirty[1] & /*mapController, flyTo, flyToSelected*/
    66592 | i.$$.dirty[2] & /*selected*/
    16 && m && r && M && Qe && m.flyTo(r.center, Re(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && t(68, n = Ze === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    132096 | i.$$.dirty[2] & /*showPolygonMarker*/
    64 && (Ke || m == null || m.setFeatures(void 0, void 0, n)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, markerOnSelected*/
    132096 | i.$$.dirty[2] & /*markedFeatures, selected, showPolygonMarker*/
    84 && m && Ke && !Z && (m.setFeatures(r ? [r] : void 0, h, n), m.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures, showPolygonMarker*/
    68 && m && m.setFeatures(Z, h, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && Z && m && m.setSelectedMarker(O), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    1024 && m) {
      const o = ft(V);
      m.setReverseMarker(o ? [o.decimalLongitude, o.decimalLatitude] : void 0);
    }
    i.$$.dirty[2] & /*selected*/
    16 && be("select", { feature: r }), i.$$.dirty[0] & /*picked*/
    16384 && be("pick", { feature: h }), i.$$.dirty[0] & /*listFeatures, focusedDelayed, keepListOpen*/
    73744 && t(67, l = !!(T != null && T.length) && (Me || p)), i.$$.dirty[2] & /*optionsVisible*/
    32 && be("optionsvisibilitychange", { optionsVisible: l }), i.$$.dirty[0] & /*listFeatures*/
    8192 && be("featureslisted", { features: T }), i.$$.dirty[2] & /*markedFeatures*/
    4 && be("featuresmarked", { features: Z }), i.$$.dirty[0] & /*reverseActive*/
    1 && be("reversetoggle", { reverse: ce }), i.$$.dirty[0] & /*searchValue*/
    2 && be("querychange", { query: V }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    1024 && m && m.indicateReverse(ce);
  }, [
    ce,
    V,
    c,
    b,
    p,
    D,
    B,
    K,
    G,
    ue,
    Nt,
    Mt,
    Ot,
    T,
    h,
    O,
    Me,
    de,
    ne,
    oe,
    ye,
    wi,
    Dt,
    pi,
    Ut,
    ht,
    It,
    ki,
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
    ke,
    Ze,
    qe,
    Te,
    Qe,
    Ke,
    rt,
    Ve,
    st,
    ot,
    Ye,
    Xe,
    at,
    lt,
    ut,
    ct,
    vi,
    Li,
    zt,
    _i,
    yi,
    Z,
    dt,
    r,
    l,
    n,
    s,
    u,
    Ti,
    Ni,
    Mi,
    Ci,
    Wi,
    Oi,
    zi,
    Ri,
    Di,
    Ui,
    Ii,
    Ai,
    Pi
  ];
}
let Xn = class extends pe {
  constructor(e) {
    super(), Se(
      this,
      e,
      Yn,
      Vn,
      Ee,
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
const Jn = new FinalizationRegistry((i) => {
  i.$destroy();
});
var J, nt, bi;
const Tt = class Tt extends EventTarget {
  constructor({ target: t, ...n }) {
    super();
    _t(this, nt);
    _t(this, J);
    Bt(this, J, new Xn({
      target: t,
      props: n
    }));
    for (const r of [
      "select",
      "pick",
      "featureslisted",
      "featuresmarked",
      "response",
      "optionsvisibilitychange",
      "reversetoggle",
      "querychange"
    ])
      re(this, J).$on(r, (l) => {
        Ft(this, nt, bi).call(this, r, l.detail);
      });
    re(this, J).$on("select", (r) => {
      const l = new CustomEvent(r.type, {
        detail: r.detail
      });
      this.dispatchEvent(l);
    }), Jn.register(this, re(this, J));
  }
  /**
   * Update the control options.
   *
   * @param options options to update
   */
  setOptions(t) {
    re(this, J).$set(t);
  }
  /**
   * Set the content of search input box.
   *
   * @param value text to set
   * @param submit perform the search
   */
  setQuery(t, n = !0) {
    var r;
    (r = re(this, J)) == null || r.setQuery(t, n);
  }
  /**
   * Clear geocoding search results from the map.
   */
  clearMap() {
    var t;
    (t = re(this, J)) == null || t.clearMap();
  }
  /**
   * Clear search result list.
   */
  clearList() {
    var t;
    (t = re(this, J)) == null || t.clearList();
  }
  /**
   * Set reverse geocoding mode.
   *
   * @param reverseActive reverse geocoding active
   */
  setReverseMode(t) {
    var n;
    (n = re(this, J)) == null || n.$set({ reverseActive: t });
  }
  /**
   * Focus the search input box.
   *
   * @param options [FocusOptions](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#options)
   */
  focus(t) {
    var n;
    (n = re(this, J)) == null || n.focus(t);
  }
  /**
   * Blur the search input box.
   */
  blur() {
    var t;
    (t = re(this, J)) == null || t.blur();
  }
  addEventListener(t, n, r) {
    super.addEventListener(t, n, r);
  }
  removeEventListener(t, n, r) {
    super.removeEventListener(t, n, r);
  }
  dispatchEvent(t) {
    return super.dispatchEvent(t);
  }
};
J = new WeakMap(), nt = new WeakSet(), bi = function(t, n) {
  return jt(Tt.prototype, this, "dispatchEvent").call(
    this,
    new CustomEvent(t, {
      detail: n
    })
  );
};
let oi = Tt;
export {
  oi as GeocodingControl
};
//# sourceMappingURL=vanilla.js.map
