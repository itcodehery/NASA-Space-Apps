var Un = Object.defineProperty;
var wi = (i) => {
  throw TypeError(i);
};
var qn = (i, e, t) => e in i ? Un(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var A = (i, e, t) => qn(i, typeof e != "symbol" ? e + "" : e, t), Ei = (i, e, t) => e.has(i) || wi("Cannot " + t);
var oe = (i, e, t) => (Ei(i, e, "read from private field"), t ? t.call(i) : e.get(i)), kt = (i, e, t) => e.has(i) ? wi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, t), gt = (i, e, t, n) => (Ei(i, e, "write to private field"), n ? n.call(i, t) : e.set(i, t), t);
import * as Li from "@maptiler/sdk";
function te() {
}
function Fn(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function en(i) {
  return i();
}
function _i() {
  return /* @__PURE__ */ Object.create(null);
}
function je(i) {
  i.forEach(en);
}
function tn(i) {
  return typeof i == "function";
}
function Qe(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
let Ot;
function me(i, e) {
  return i === e ? !0 : (Ot || (Ot = document.createElement("a")), Ot.href = e, i === Ot.href);
}
function jn(i) {
  return Object.keys(i).length === 0;
}
function Zn(i, e, t, n) {
  if (i) {
    const r = nn(i, e, t, n);
    return i[0](r);
  }
}
function nn(i, e, t, n) {
  return i[1] && n ? Fn(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function Hn(i, e, t, n) {
  return i[2], e.dirty;
}
function Vn(i, e, t, n, r, u) {
  if (r) {
    const a = nn(e, t, n, u);
    i.p(a, r);
  }
}
function Kn(i) {
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
function X(i) {
  return document.createElement(i);
}
function ke(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function Ke(i) {
  return document.createTextNode(i);
}
function Ee() {
  return Ke(" ");
}
function Yn() {
  return Ke("");
}
function he(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function Qn(i) {
  return function(e) {
    return e.preventDefault(), i.call(this, e);
  };
}
function S(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function Xn(i) {
  return Array.from(i.childNodes);
}
function St(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function Si(i, e) {
  i.value = e ?? "";
}
function Be(i, e, t) {
  i.classList.toggle(e, !!t);
}
function Jn(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
let xt;
function _t(i) {
  xt = i;
}
function rn() {
  if (!xt) throw new Error("Function called outside component initialization");
  return xt;
}
function $n(i) {
  rn().$$.on_destroy.push(i);
}
function sn() {
  const i = rn();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[e];
    if (r) {
      const u = Jn(
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
function er(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const ut = [], ii = [];
let at = [];
const xi = [], tr = /* @__PURE__ */ Promise.resolve();
let ni = !1;
function ir() {
  ni || (ni = !0, tr.then(on));
}
function ri(i) {
  at.push(i);
}
const $t = /* @__PURE__ */ new Set();
let lt = 0;
function on() {
  if (lt !== 0)
    return;
  const i = xt;
  do {
    try {
      for (; lt < ut.length; ) {
        const e = ut[lt];
        lt++, _t(e), nr(e.$$);
      }
    } catch (e) {
      throw ut.length = 0, lt = 0, e;
    }
    for (_t(null), ut.length = 0, lt = 0; ii.length; ) ii.pop()();
    for (let e = 0; e < at.length; e += 1) {
      const t = at[e];
      $t.has(t) || ($t.add(t), t());
    }
    at.length = 0;
  } while (ut.length);
  for (; xi.length; )
    xi.pop()();
  ni = !1, $t.clear(), _t(i);
}
function nr(i) {
  if (i.fragment !== null) {
    i.update(), je(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(ri);
  }
}
function rr(i) {
  const e = [], t = [];
  at.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), at = e;
}
const Bt = /* @__PURE__ */ new Set();
let rt;
function bt() {
  rt = {
    r: 0,
    c: [],
    p: rt
    // parent group
  };
}
function wt() {
  rt.r || je(rt.c), rt = rt.p;
}
function ne(i, e) {
  i && i.i && (Bt.delete(i), i.i(e));
}
function ae(i, e, t, n) {
  if (i && i.o) {
    if (Bt.has(i)) return;
    Bt.add(i), rt.c.push(() => {
      Bt.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Ti(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function sr(i, e) {
  ae(i, 1, 1, () => {
    e.delete(i.key);
  });
}
function or(i, e, t, n, r, u, a, o, g, c, E, _) {
  let M = i.length, R = u.length, k = M;
  const I = {};
  for (; k--; ) I[i[k].key] = k;
  const C = [], O = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), N = [];
  for (k = R; k--; ) {
    const W = _(r, u, k), s = t(W);
    let l = a.get(s);
    l ? N.push(() => l.p(W, e)) : (l = c(s, W), l.c()), O.set(s, C[k] = l), s in I && x.set(s, Math.abs(k - I[s]));
  }
  const P = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Set();
  function z(W) {
    ne(W, 1), W.m(o, E), a.set(W.key, W), E = W.first, R--;
  }
  for (; M && R; ) {
    const W = C[R - 1], s = i[M - 1], l = W.key, f = s.key;
    W === s ? (E = W.first, M--, R--) : O.has(f) ? !a.has(l) || P.has(l) ? z(W) : B.has(f) ? M-- : x.get(l) > x.get(f) ? (B.add(l), z(W)) : (P.add(f), M--) : (g(s, a), M--);
  }
  for (; M--; ) {
    const W = i[M];
    O.has(W.key) || g(W, a);
  }
  for (; R; ) z(C[R - 1]);
  return je(N), C;
}
function Ye(i) {
  i && i.c();
}
function Ue(i, e, t) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(e, t), ri(() => {
    const u = i.$$.on_mount.map(en).filter(tn);
    i.$$.on_destroy ? i.$$.on_destroy.push(...u) : je(u), i.$$.on_mount = [];
  }), r.forEach(ri);
}
function qe(i, e) {
  const t = i.$$;
  t.fragment !== null && (rr(t.after_update), je(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function lr(i, e) {
  i.$$.dirty[0] === -1 && (ut.push(i), ir(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Xe(i, e, t, n, r, u, a = null, o = [-1]) {
  const g = xt;
  _t(i);
  const c = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: te,
    not_equal: r,
    bound: _i(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (g ? g.$$.context : [])),
    // everything else
    callbacks: _i(),
    dirty: o,
    skip_bound: !1,
    root: e.target || g.$$.root
  };
  a && a(c.root);
  let E = !1;
  if (c.ctx = t ? t(i, e.props || {}, (_, M, ...R) => {
    const k = R.length ? R[0] : M;
    return c.ctx && r(c.ctx[_], c.ctx[_] = k) && (!c.skip_bound && c.bound[_] && c.bound[_](k), E && lr(i, _)), M;
  }) : [], c.update(), E = !0, je(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const _ = Xn(e.target);
      c.fragment && c.fragment.l(_), _.forEach(J);
    } else
      c.fragment && c.fragment.c();
    e.intro && ne(i.$$.fragment), Ue(i, e.target, e.anchor), on();
  }
  _t(g);
}
class Je {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    A(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    A(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    qe(this, 1), this.$destroy = te;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!tn(t))
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
    this.$$set && !jn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ur = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ur);
function ar(i) {
  let e, t;
  return {
    c() {
      e = ke("svg"), t = ke("path"), S(t, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), S(e, "viewBox", "0 0 14 14"), S(e, "width", "13"), S(e, "height", "13"), S(e, "class", "svelte-en2qvf");
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
class ln extends Je {
  constructor(e) {
    super(), Xe(this, e, null, ar, Qe, {});
  }
}
function fr(i) {
  let e, t;
  return {
    c() {
      e = ke("svg"), t = ke("path"), S(t, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), S(e, "viewBox", "0 0 30 30"), S(e, "fill", "none"), S(e, "xmlns", "http://www.w3.org/2000/svg"), S(e, "class", "svelte-d2loi5");
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
class un extends Je {
  constructor(e) {
    super(), Xe(this, e, null, fr, Qe, {});
  }
}
function cr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function hr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function dr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function gr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function mr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function pr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function yr(i) {
  let e, t;
  return {
    c() {
      e = X("img"), me(e.src, t = /*iconsBaseUrl*/
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
      8 && !me(e.src, t = /*iconsBaseUrl*/
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
function vr(i) {
  let e, t, n, r;
  return {
    c() {
      e = X("img"), me(e.src, t = /*imageUrl*/
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
      ee(u, e, a), n || (r = he(
        e,
        "error",
        /*error_handler*/
        i[14]
      ), n = !0);
    },
    p(u, a) {
      a & /*imageUrl*/
      32 && !me(e.src, t = /*imageUrl*/
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
function br(i) {
  let e, t;
  return {
    c() {
      e = X("div"), S(e, "class", "sprite-icon svelte-w9y5n9"), S(e, "style", t = `
        width: ${/*spriteIcon*/
      i[6].width / _e}px;
        height: ${/*spriteIcon*/
      i[6].height / _e}px;
        background-image: url(${/*iconsBaseUrl*/
      i[3]}sprite${si}.png);
        background-position: -${/*spriteIcon*/
      i[6].x / _e}px -${/*spriteIcon*/
      i[6].y / _e}px;
        background-size: ${Ne.width / _e}px ${Ne.height / _e}px;
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
      n[6].width / _e}px;
        height: ${/*spriteIcon*/
      n[6].height / _e}px;
        background-image: url(${/*iconsBaseUrl*/
      n[3]}sprite${si}.png);
        background-position: -${/*spriteIcon*/
      n[6].x / _e}px -${/*spriteIcon*/
      n[6].y / _e}px;
        background-size: ${Ne.width / _e}px ${Ne.height / _e}px;
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
function Mi(i) {
  let e, t;
  return {
    c() {
      e = X("span"), t = Ke(
        /*placeType*/
        i[7]
      ), S(e, "class", "secondary svelte-w9y5n9");
    },
    m(n, r) {
      ee(n, e, r), H(e, t);
    },
    p(n, r) {
      r & /*placeType*/
      128 && St(
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
function wr(i) {
  let e, t, n, r, u, a, o, g, c, E = (
    /*isReverse*/
    (i[8] ? (
      /*feature*/
      i[0].place_name
    ) : (
      /*feature*/
      i[0].place_name.replace(/,.*/, "")
    )) + ""
  ), _, M, R = (
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
  ), k, I, C = (
    /*isReverse*/
    (i[8] ? "" : (
      /*feature*/
      i[0].place_name.replace(/[^,]*,?\s*/, "")
    )) + ""
  ), O, x, N, P, B, z;
  function W(m, h) {
    return h & /*feature*/
    1 && (t = null), h & /*feature*/
    1 && (n = null), h & /*feature*/
    1 && (r = null), h & /*feature*/
    1 && (u = null), Ne && /*spriteIcon*/
    m[6] ? br : (
      /*imageUrl*/
      m[5] ? vr : (
        /*feature*/
        m[0].address ? yr : (t == null && (t = !!/*feature*/
        m[0].id.startsWith("road.")), t ? pr : (n == null && (n = !!/*feature*/
        m[0].id.startsWith("address.")), n ? mr : (r == null && (r = !!/*feature*/
        m[0].id.startsWith("postal_code.")), r ? gr : (u == null && (u = !!/*feature*/
        m[0].id.startsWith("poi.")), u ? dr : (
          /*isReverse*/
          m[8] ? hr : cr
        )))))
      )
    );
  }
  let s = W(i, -1), l = s(i), f = R && Mi(i);
  return {
    c() {
      e = X("li"), l.c(), a = Ee(), o = X("span"), g = X("span"), c = X("span"), _ = Ke(E), M = Ee(), f && f.c(), k = Ee(), I = X("span"), O = Ke(C), S(c, "class", "primary svelte-w9y5n9"), S(g, "class", "svelte-w9y5n9"), S(I, "class", "line2 svelte-w9y5n9"), S(o, "class", "texts svelte-w9y5n9"), S(e, "tabindex", "-1"), S(e, "role", "option"), S(e, "aria-selected", x = /*style*/
      i[1] === "selected"), S(e, "aria-checked", N = /*style*/
      i[1] === "picked"), S(e, "class", P = Dt(
        /*style*/
        i[1]
      ) + " svelte-w9y5n9");
    },
    m(m, h) {
      ee(m, e, h), l.m(e, null), H(e, a), H(e, o), H(o, g), H(g, c), H(c, _), H(g, M), f && f.m(g, null), H(o, k), H(o, I), H(I, O), B || (z = [
        he(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          i[13]
        ),
        he(
          e,
          "focus",
          /*focus_handler*/
          i[15]
        ),
        he(
          e,
          "click",
          /*click_handler*/
          i[16]
        )
      ], B = !0);
    },
    p(m, [h]) {
      s === (s = W(m, h)) && l ? l.p(m, h) : (l.d(1), l = s(m), l && (l.c(), l.m(e, a))), h & /*isReverse, feature*/
      257 && E !== (E = /*isReverse*/
      (m[8] ? (
        /*feature*/
        m[0].place_name
      ) : (
        /*feature*/
        m[0].place_name.replace(/,.*/, "")
      )) + "") && St(_, E), h & /*showPlaceType, feature, imageUrl, isReverse*/
      293 && (R = /*showPlaceType*/
      m[2] === "always" || /*showPlaceType*/
      m[2] !== "never" && !/*feature*/
      m[0].address && !/*feature*/
      m[0].id.startsWith("road.") && !/*feature*/
      m[0].id.startsWith("address.") && !/*feature*/
      m[0].id.startsWith("postal_code.") && (!/*feature*/
      m[0].id.startsWith("poi.") || !/*imageUrl*/
      m[5]) && !/*isReverse*/
      m[8]), R ? f ? f.p(m, h) : (f = Mi(m), f.c(), f.m(g, null)) : f && (f.d(1), f = null), h & /*isReverse, feature*/
      257 && C !== (C = /*isReverse*/
      (m[8] ? "" : (
        /*feature*/
        m[0].place_name.replace(/[^,]*,?\s*/, "")
      )) + "") && St(O, C), h & /*style*/
      2 && x !== (x = /*style*/
      m[1] === "selected") && S(e, "aria-selected", x), h & /*style*/
      2 && N !== (N = /*style*/
      m[1] === "picked") && S(e, "aria-checked", N), h & /*style*/
      2 && P !== (P = Dt(
        /*style*/
        m[1]
      ) + " svelte-w9y5n9") && S(e, "class", P);
    },
    i: te,
    o: te,
    d(m) {
      m && J(e), l.d(), f && f.d(), B = !1, je(z);
    }
  };
}
const an = typeof devicePixelRatio > "u" ? 1 : devicePixelRatio > 1.25, si = an ? "@2x" : "", _e = an ? 2 : 1;
let Ne, Rt;
function Er(i, e, t) {
  let n, r, u, { feature: a } = e, { style: o = "default" } = e, { showPlaceType: g } = e, { missingIconsCache: c } = e, { iconsBaseUrl: E } = e;
  const _ = sn();
  let M, R, k, I;
  function C() {
    Rt ?? (Rt = fetch(`${E}sprite${si}.json`).then((s) => s.json()).then((s) => {
      Ne = s;
    }).catch(() => {
      Ne = null;
    }));
  }
  function O() {
    R && c.add(R), x();
  }
  function x() {
    Ne !== void 0 ? N() : (C(), Rt == null || Rt.then(N));
  }
  function N() {
    do {
      if (I--, t(4, M = n == null ? void 0 : n[I]), t(6, k = M ? Ne == null ? void 0 : Ne.icons[M] : void 0), k)
        break;
      t(5, R = M ? E + M.replace(/ /g, "_") + ".svg" : void 0);
    } while (I > -1 && (!R || c.has(R)));
  }
  function P(s) {
    er.call(this, i, s);
  }
  const B = () => O(), z = () => _("select", void 0), W = (s) => {
    document.activeElement !== s.target && _("select", void 0);
  };
  return i.$$set = (s) => {
    "feature" in s && t(0, a = s.feature), "style" in s && t(1, o = s.style), "showPlaceType" in s && t(2, g = s.showPlaceType), "missingIconsCache" in s && t(11, c = s.missingIconsCache), "iconsBaseUrl" in s && t(3, E = s.iconsBaseUrl);
  }, i.$$.update = () => {
    var s, l, f, m, h;
    i.$$.dirty & /*feature*/
    1 && t(12, n = (s = a.properties) == null ? void 0 : s.categories), i.$$.dirty & /*feature*/
    1 && t(8, r = a.place_type[0] === "reverse"), i.$$.dirty & /*feature*/
    1 && t(7, u = ((f = (l = a.properties) == null ? void 0 : l.categories) == null ? void 0 : f.join(", ")) ?? ((h = (m = a.properties) == null ? void 0 : m.place_type_name) == null ? void 0 : h[0]) ?? a.place_type[0]), i.$$.dirty & /*categories*/
    4096 && (I = (n == null ? void 0 : n.length) ?? 0, x());
  }, [
    a,
    o,
    g,
    E,
    M,
    R,
    k,
    u,
    r,
    _,
    O,
    c,
    n,
    P,
    B,
    z,
    W
  ];
}
class Lr extends Je {
  constructor(e) {
    super(), Xe(this, e, Er, wr, Qe, {
      feature: 0,
      style: 1,
      showPlaceType: 2,
      missingIconsCache: 11,
      iconsBaseUrl: 3
    });
  }
}
function _r(i) {
  let e;
  return {
    c() {
      e = X("div"), e.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="loading-icon svelte-1ocfouu"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', S(e, "class", "svelte-1ocfouu");
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
class Sr extends Je {
  constructor(e) {
    super(), Xe(this, e, null, _r, Qe, {});
  }
}
function xr(i) {
  let e, t, n;
  return {
    c() {
      e = ke("svg"), t = ke("path"), S(t, "stroke-width", "4"), S(t, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), S(t, "class", "svelte-gzo3ar"), S(e, "width", n = /*displayIn*/
      i[0] === "list" ? 20 : void 0), S(e, "viewBox", "0 0 70 85"), S(e, "fill", "none"), S(e, "class", "svelte-gzo3ar"), Be(
        e,
        "in-map",
        /*displayIn*/
        i[0] !== "list"
      ), Be(
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
      1 && Be(
        e,
        "in-map",
        /*displayIn*/
        r[0] !== "list"
      ), u & /*displayIn*/
      1 && Be(
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
function Tr(i, e, t) {
  let { displayIn: n } = e;
  return i.$$set = (r) => {
    "displayIn" in r && t(0, n = r.displayIn);
  }, [n];
}
class Mr extends Je {
  constructor(e) {
    super(), Xe(this, e, Tr, xr, Qe, { displayIn: 0 });
  }
}
function Cr(i) {
  let e, t;
  return {
    c() {
      e = ke("svg"), t = ke("path"), S(t, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), S(e, "viewBox", "0 0 60.006 21.412"), S(e, "width", "14"), S(e, "height", "20"), S(e, "class", "svelte-en2qvf");
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
class Nr extends Je {
  constructor(e) {
    super(), Xe(this, e, null, Cr, Qe, {});
  }
}
function kr(i) {
  let e, t, n;
  return {
    c() {
      e = ke("svg"), t = ke("circle"), n = ke("path"), S(t, "cx", "4.789"), S(t, "cy", "4.787"), S(t, "r", "3.85"), S(t, "class", "svelte-1aq105l"), S(n, "d", "M12.063 12.063 7.635 7.635"), S(n, "class", "svelte-1aq105l"), S(e, "xmlns", "http://www.w3.org/2000/svg"), S(e, "width", "13"), S(e, "height", "13"), S(e, "viewBox", "0 0 13 13"), S(e, "class", "svelte-1aq105l");
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
class Or extends Je {
  constructor(e) {
    super(), Xe(this, e, null, kr, Qe, {});
  }
}
function Rr(i, e, t) {
  const n = e[1], r = e[0], u = n - r;
  return i === n && t ? i : ((i - r) % u + u) % u + r;
}
function zt(i) {
  const e = [...i];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
let mt;
async function Pr(i, e, t) {
  const n = i == null ? void 0 : i.getCenterAndZoom();
  for (const r of e ?? [])
    if (!(n && (r.minZoom != null && r.minZoom > n[0] || r.maxZoom != null && r.maxZoom < n[0]))) {
      if (r.type === "fixed")
        return r.coordinates.join(",");
      e: if (r.type === "client-geolocation") {
        if (mt && r.cachedLocationExpiry && mt.time + r.cachedLocationExpiry > Date.now()) {
          if (!mt.coords)
            break e;
          return mt.coords;
        }
        let u;
        try {
          return u = await new Promise((a, o) => {
            t.signal.addEventListener("abort", () => {
              o(Error("aborted"));
            }), navigator.geolocation.getCurrentPosition(
              (g) => {
                a(
                  [g.coords.longitude, g.coords.latitude].map((c) => c.toFixed(6)).join(",")
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
          r.cachedLocationExpiry && (mt = {
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
const Ir = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([6-9][0-9])\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*(EAST|WEST|[EW])?$/i, Ci = /^([+-]?[0-8]?[0-9])\s+([0-5]?[0-9]\.\d{3,})[\s,]{1,}([+-]?[0-1]?[0-9]?[0-9])\s+([0-5]?[0-9]\.\d{3,})$/, Ni = /^(NORTH|SOUTH|[NS])?[\s]*([+-]?[0-8]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(NORTH|SOUTH|[NS])?[\s]*[,/;]?[\s]*(EAST|WEST|[EW])?[\s]*([+-]?[0-1]?[0-9]?[0-9](?:[\.,]\d{3,}))[\s]*([•º°]?)[\s]*(EAST|WEST|[EW])?$/i, ki = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(\.)\s*([0-5]?[0-9])\s*(\.)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(EAST|WEST|[EW])?$/i, Oi = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*(D(?:EG)?(?:REES)?)\s*([0-5]?[0-9])\s*(M(?:IN)?(?:UTES)?)\s*((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(S(?:EC)?(?:ONDS)?)\s*(EAST|WEST|[EW])?$/i, Ri = /^(NORTH|SOUTH|[NS])?\s*([+-]?[0-8]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|’’|´´|["″”\.])?\s*(NORTH|SOUTH|[NS])?(?:\s*[,/;]\s*|\s*)(EAST|WEST|[EW])?\s*([+-]?[0-1]?[0-9]?[0-9])\s*([•º°\.:]|D(?:EG)?(?:REES)?)?\s*,?([0-5]?[0-9](?:[\.,]\d{1,})?)?\s*(['′´’\.:]|M(?:IN)?(?:UTES)?)?\s*,?((?:[0-5]?[0-9])(?:[\.,]\d{1,3})?)?\s*(''|′′|´´|’’|["″”\.])?\s*(EAST|WEST|[EW])?$/i;
function Ar(i) {
  if (!["DMS", "DM", "DD"].includes(i))
    throw new Error("invalid format specified");
  if (this.decimalCoordinates && this.decimalCoordinates.trim()) {
    const e = this.decimalCoordinates.split(",").map((R) => Number(R.trim())), t = Number(e[0]), n = Number(e[1]), r = Math.abs(t), u = Math.abs(n), a = t > 0 ? "N" : "S", o = n > 0 ? "E" : "W";
    let g;
    i == "DD" && (g = `${r}° ${a}, ${u}° ${o}`);
    const c = Math.floor(r), E = Math.floor(u), _ = (r - c) * 60, M = (u - E) * 60;
    if (i == "DM") {
      let R = Pi(_, 3).toFixed(3).padStart(6, "0"), k = Pi(M, 3).toFixed(3).padStart(6, "0");
      R.endsWith(".000") && k.endsWith(".000") && (R = R.replace(/\.000$/, ""), k = k.replace(/\.000$/, "")), g = `${c}° ${R}' ${a}, ${E}° ${k}' ${o}`;
    }
    if (i == "DMS") {
      const R = Math.floor(_), k = Math.floor(M);
      let I = ((_ - R) * 60).toFixed(1).padStart(4, "0"), C = ((M - k) * 60).toFixed(1).padStart(4, "0");
      const O = R.toString().padStart(2, "0"), x = k.toString().padStart(2, "0");
      I.endsWith(".0") && C.endsWith(".0") && (I = I.replace(/\.0$/, ""), C = C.replace(/\.0$/, "")), g = `${c}° ${O}' ${I}" ${a}, ${E}° ${x}' ${C}" ${o}`;
    }
    return g;
  } else
    throw new Error("no decimal coordinates to convert");
}
function Pi(i, e) {
  const t = Math.pow(10, e);
  return Math.round((i + Number.EPSILON) * t) / t;
}
function fi(i, e) {
  e || (e = 5), i = i.replace(/\s+/g, " ").trim();
  let t = null, n = null, r = "", u = "", a = null, o = [], g = !1;
  if (Ir.test(i))
    throw new Error("invalid coordinate value");
  if (Ci.test(i))
    if (o = Ci.exec(i), g = pt(o), g)
      t = Math.abs(o[1]) + o[2] / 60, Number(o[1]) < 0 && (t *= -1), n = Math.abs(o[3]) + o[4] / 60, Number(o[3]) < 0 && (n *= -1), a = "DM";
    else
      throw new Error("invalid coordinate format");
  else if (Ni.test(i))
    if (o = Ni.exec(i), g = pt(o), g) {
      if (t = o[2], n = o[6], t.includes(",") && (t = t.replace(",", ".")), n.includes(",") && (n = n.replace(",", ".")), a = "DD", Number(Math.round(t)) == Number(t))
        throw new Error("integer only coordinate provided");
      if (Number(Math.round(n)) == Number(n))
        throw new Error("integer only coordinate provided");
      o[1] ? (r = o[1], u = o[5]) : o[4] && (r = o[4], u = o[8]);
    } else
      throw new Error("invalid decimal coordinate format");
  else if (ki.test(i))
    if (o = ki.exec(i), g = pt(o), g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, a = "DM"), o[6] && (t += o[6].replace(",", ".") / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[9])), o[11] && (n += o[11] / 60), o[13] && (n += o[13].replace(",", ".") / 3600), parseInt(o[9]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[8]) : o[7] && (r = o[7], u = o[14]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Oi.test(i))
    if (o = Oi.exec(i), g = pt(o), g)
      t = Math.abs(parseInt(o[2])), o[4] && (t += o[4] / 60, a = "DM"), o[6] && (t += o[6] / 3600, a = "DMS"), parseInt(o[2]) < 0 && (t = -1 * t), n = Math.abs(parseInt(o[10])), o[12] && (n += o[12] / 60), o[14] && (n += o[14] / 3600), parseInt(o[10]) < 0 && (n = -1 * n), o[1] ? (r = o[1], u = o[9]) : o[8] && (r = o[8], u = o[16]);
    else
      throw new Error("invalid DMS coordinates format");
  else if (Ri.test(i)) {
    if (o = Ri.exec(i), g = pt(o), o.filter((c) => c).length <= 5)
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
    let c = /S|SOUTH/i;
    c.test(r) && t > 0 && (t = -1 * t), c = /W|WEST/i, c.test(u) && n > 0 && (n = -1 * n);
    const E = o[0].trim();
    let _, M;
    const R = /[,/;\u0020]/g, k = E.match(R);
    if (k == null) {
      const O = Math.floor(i.length / 2);
      _ = E.substring(0, O).trim(), M = E.substring(O).trim();
    } else {
      let O;
      k.length % 2 == 1 ? O = Math.floor(k.length / 2) : O = k.length / 2 - 1;
      let x = 0;
      if (O == 0)
        x = E.indexOf(k[0]), _ = E.substring(0, x).trim(), M = E.substring(x + 1).trim();
      else {
        let N = 0, P = 0;
        for (; N <= O; )
          x = E.indexOf(k[N], P), P = x + 1, N++;
        _ = E.substring(0, x).trim(), M = E.substring(x + 1).trim();
      }
    }
    const I = _.split(".");
    if (I.length == 2 && I[1] == 0 && I[1].length != 2)
      throw new Error("invalid coordinates format");
    const C = M.split(".");
    if (C.length == 2 && C[1] == 0 && C[1].length != 2)
      throw new Error("invalid coordinates format");
    if (/^\d+$/.test(_) || /^\d+$/.test(M))
      throw new Error("degree only coordinate/s provided");
    return t = Number(Number(t).toFixed(e)), n = Number(Number(n).toFixed(e)), Object.freeze({
      verbatimCoordinates: E,
      verbatimLatitude: _,
      verbatimLongitude: M,
      decimalLatitude: t,
      decimalLongitude: n,
      decimalCoordinates: `${t},${n}`,
      originalFormat: a,
      closeEnough: Br,
      toCoordinateFormat: Ar
    });
  } else
    throw new Error("coordinates pattern match failed");
}
function pt(i) {
  if (!isNaN(i[0]))
    return !1;
  const e = [...i];
  if (e.shift(), e.length % 2 > 0)
    return !1;
  const t = /^[-+]?\d+([\.,]\d+)?$/, n = /[eastsouthnorthwest]+/i, r = e.length / 2;
  for (let u = 0; u < r; u++) {
    const a = e[u], o = e[u + r], g = t.test(a) && t.test(o), c = n.test(a) && n.test(o), E = a == o;
    if (!(a == null && o == null)) {
      if (a == null || o == null)
        return !1;
      if (g || c || E)
        continue;
      return !1;
    }
  }
  return !0;
}
function Ii(i, e) {
  const t = Math.abs(i - e);
  return Number(t.toFixed(6)) <= 1e-5;
}
function Br(i) {
  if (!i)
    throw new Error("coords must be provided");
  if (i.includes(",")) {
    const e = i.split(",");
    if (Number(e[0]) == NaN || Number(e[1]) == NaN)
      throw new Error("coords are not valid decimals");
    return Ii(this.decimalLatitude, Number(e[0])) && Ii(this.decimalLongitude, e[1]);
  } else
    throw new Error("coords being tested must be separated by a comma");
}
const Wr = Object.freeze({
  DMS: "DMS",
  DM: "DM",
  DD: "DD"
});
fi.to = Wr;
const Gr = [
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
], Dr = {
  decimalLatitude: 40.123,
  decimalLongitude: -74.123
}, zr = [
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
], Ur = [
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
function qr() {
  const i = [];
  return Gr.forEach((e) => {
    e.decimalLatitude ? i.push(e) : i.push({ ...e, ...Dr });
  }), [...i, ...zr, ...Ur];
}
const Fr = qr();
fi.formats = Fr.map((i) => i.verbatimCoordinates);
const jr = fi;
function Ai(i, e, t) {
  const n = i.slice();
  return n[97] = e[t], n[99] = t, n;
}
function Bi(i) {
  let e, t, n, r, u;
  return t = new ln({}), {
    c() {
      e = X("button"), Ye(t.$$.fragment), S(e, "type", "button"), S(
        e,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), S(e, "class", "svelte-bz0zu3");
    },
    m(a, o) {
      ee(a, e, o), Ue(t, e, null), n = !0, r || (u = he(
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
      ae(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && J(e), qe(t), r = !1, u();
    }
  };
}
function Wi(i) {
  let e, t;
  return e = new Sr({}), {
    c() {
      Ye(e.$$.fragment);
    },
    m(n, r) {
      Ue(e, n, r), t = !0;
    },
    i(n) {
      t || (ne(e.$$.fragment, n), t = !0);
    },
    o(n) {
      ae(e.$$.fragment, n), t = !1;
    },
    d(n) {
      qe(e, n);
    }
  };
}
function Gi(i) {
  let e, t, n, r, u;
  return t = new Nr({}), {
    c() {
      e = X("button"), Ye(t.$$.fragment), S(e, "type", "button"), S(
        e,
        "title",
        /*reverseButtonTitle*/
        i[10]
      ), S(e, "class", "svelte-bz0zu3"), Be(
        e,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(a, o) {
      ee(a, e, o), Ue(t, e, null), n = !0, r || (u = he(
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
      1) && Be(
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
      ae(t.$$.fragment, a), n = !1;
    },
    d(a) {
      a && J(e), qe(t), r = !1, u();
    }
  };
}
function Zr(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), r, u, a, o = Ti(
    /*listFeatures*/
    i[13]
  );
  const g = (c) => (
    /*feature*/
    c[97].id + /*feature*/
    (c[97].address ? "," + /*feature*/
    c[97].address : "")
  );
  for (let c = 0; c < o.length; c += 1) {
    let E = Ai(i, o, c), _ = g(E);
    n.set(_, t[c] = Di(_, E));
  }
  return {
    c() {
      e = X("ul");
      for (let c = 0; c < t.length; c += 1)
        t[c].c();
      S(e, "class", "options svelte-bz0zu3"), S(e, "role", "listbox");
    },
    m(c, E) {
      ee(c, e, E);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_] && t[_].m(e, null);
      r = !0, u || (a = [
        he(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          i[27]
        ),
        he(
          e,
          "blur",
          /*blur_handler_1*/
          i[83]
        ),
        he(
          e,
          "keydown",
          /*handleKeyDown*/
          i[23]
        )
      ], u = !0);
    },
    p(c, E) {
      E[0] & /*listFeatures, showPlaceType, selectedItemIndex, picked, missingIconsCache, iconsBaseUrl, handleMouseEnter, pick*/
      102823936 && (o = Ti(
        /*listFeatures*/
        c[13]
      ), bt(), t = or(t, E, g, 1, c, o, n, e, sr, Di, null, Ai), wt());
    },
    i(c) {
      if (!r) {
        for (let E = 0; E < o.length; E += 1)
          ne(t[E]);
        r = !0;
      }
    },
    o(c) {
      for (let E = 0; E < t.length; E += 1)
        ae(t[E]);
      r = !1;
    },
    d(c) {
      c && J(e);
      for (let E = 0; E < t.length; E += 1)
        t[E].d();
      u = !1, je(a);
    }
  };
}
function Hr(i) {
  let e, t, n, r, u, a;
  return t = new un({}), {
    c() {
      e = X("div"), Ye(t.$$.fragment), n = Ee(), r = X("div"), u = Ke(
        /*noResultsMessage*/
        i[8]
      ), S(r, "class", "svelte-bz0zu3"), S(e, "class", "no-results svelte-bz0zu3");
    },
    m(o, g) {
      ee(o, e, g), Ue(t, e, null), H(e, n), H(e, r), H(r, u), a = !0;
    },
    p(o, g) {
      (!a || g[0] & /*noResultsMessage*/
      256) && St(
        u,
        /*noResultsMessage*/
        o[8]
      );
    },
    i(o) {
      a || (ne(t.$$.fragment, o), a = !0);
    },
    o(o) {
      ae(t.$$.fragment, o), a = !1;
    },
    d(o) {
      o && J(e), qe(t);
    }
  };
}
function Vr(i) {
  let e = "", t;
  return {
    c() {
      t = Ke(e);
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
function Kr(i) {
  let e, t, n, r, u, a, o, g, c, E, _;
  return t = new un({}), g = new ln({}), {
    c() {
      e = X("div"), Ye(t.$$.fragment), n = Ee(), r = X("div"), u = Ke(
        /*errorMessage*/
        i[7]
      ), a = Ee(), o = X("button"), Ye(g.$$.fragment), S(r, "class", "svelte-bz0zu3"), S(o, "class", "svelte-bz0zu3"), S(e, "class", "error svelte-bz0zu3");
    },
    m(M, R) {
      ee(M, e, R), Ue(t, e, null), H(e, n), H(e, r), H(r, u), H(e, a), H(e, o), Ue(g, o, null), c = !0, E || (_ = he(
        o,
        "click",
        /*click_handler_4*/
        i[80]
      ), E = !0);
    },
    p(M, R) {
      (!c || R[0] & /*errorMessage*/
      128) && St(
        u,
        /*errorMessage*/
        M[7]
      );
    },
    i(M) {
      c || (ne(t.$$.fragment, M), ne(g.$$.fragment, M), c = !0);
    },
    o(M) {
      ae(t.$$.fragment, M), ae(g.$$.fragment, M), c = !1;
    },
    d(M) {
      M && J(e), qe(t), qe(g), E = !1, _();
    }
  };
}
function Di(i, e) {
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
  return n = new Lr({
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
      t = Yn(), Ye(n.$$.fragment), this.first = t;
    },
    m(g, c) {
      ee(g, t, c), Ue(n, g, c), r = !0;
    },
    p(g, c) {
      var _;
      e = g;
      const E = {};
      c[0] & /*listFeatures*/
      8192 && (E.feature = /*feature*/
      e[97]), c[0] & /*showPlaceType*/
      2048 && (E.showPlaceType = /*showPlaceType*/
      e[11]), c[0] & /*selectedItemIndex, listFeatures, picked*/
      57344 && (E.style = /*selectedItemIndex*/
      e[15] === /*i*/
      e[99] ? "selected" : (
        /*picked*/
        ((_ = e[14]) == null ? void 0 : _.id) === /*feature*/
        e[97].id ? "picked" : "default"
      )), c[0] & /*iconsBaseUrl*/
      4096 && (E.iconsBaseUrl = /*iconsBaseUrl*/
      e[12]), n.$set(E);
    },
    i(g) {
      r || (ne(n.$$.fragment, g), r = !0);
    },
    o(g) {
      ae(n.$$.fragment, g), r = !1;
    },
    d(g) {
      g && J(t), qe(n, g);
    }
  };
}
function Yr(i) {
  let e, t, n, r, u, a, o, g, c, E, _, M, R, k, I, C, O, x, N, P = !1;
  u = new Or({});
  let B = !/*abortController*/
  i[20] && Bi(i), z = (
    /*abortController*/
    i[20] && Wi()
  ), W = (
    /*enableReverse*/
    i[6] === "button" && Gi(i)
  );
  const s = (
    /*#slots*/
    i[70].default
  ), l = Zn(
    s,
    i,
    /*$$scope*/
    i[69],
    null
  ), f = [Kr, Vr, Hr, Zr], m = [];
  function h(d, v) {
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
  return ~(k = h(i)) && (I = m[k] = f[k](i)), {
    c() {
      e = Ee(), t = X("form"), n = X("div"), r = X("button"), Ye(u.$$.fragment), a = Ee(), o = X("input"), g = Ee(), c = X("div"), B && B.c(), E = Ee(), z && z.c(), _ = Ee(), W && W.c(), M = Ee(), l && l.c(), R = Ee(), I && I.c(), S(r, "class", "search-button svelte-bz0zu3"), S(r, "type", "button"), S(
        o,
        "placeholder",
        /*placeholder*/
        i[9]
      ), S(
        o,
        "aria-label",
        /*placeholder*/
        i[9]
      ), S(o, "class", "svelte-bz0zu3"), S(c, "class", "clear-button-container svelte-bz0zu3"), Be(
        c,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), S(n, "class", "input-group svelte-bz0zu3"), S(t, "class", C = Dt(
        /*className*/
        i[2]
      ) + " svelte-bz0zu3"), Be(
        t,
        "can-collapse",
        /*collapsed*/
        i[5] && /*searchValue*/
        i[1] === ""
      );
    },
    m(d, v) {
      ee(d, e, v), ee(d, t, v), H(t, n), H(n, r), Ue(u, r, null), H(n, a), H(n, o), i[72](o), Si(
        o,
        /*searchValue*/
        i[1]
      ), H(n, g), H(n, c), B && B.m(c, null), H(c, E), z && z.m(c, null), H(n, _), W && W.m(n, null), H(n, M), l && l.m(n, null), H(t, R), ~k && m[k].m(t, null), O = !0, x || (N = [
        he(
          r,
          "click",
          /*click_handler*/
          i[71]
        ),
        he(
          o,
          "input",
          /*input_1_input_handler*/
          i[73]
        ),
        he(
          o,
          "focus",
          /*focus_handler*/
          i[74]
        ),
        he(
          o,
          "blur",
          /*blur_handler*/
          i[75]
        ),
        he(
          o,
          "click",
          /*click_handler_1*/
          i[76]
        ),
        he(
          o,
          "keydown",
          /*handleKeyDown*/
          i[23]
        ),
        he(
          o,
          "input",
          /*handleInput*/
          i[24]
        ),
        he(
          o,
          "change",
          /*change_handler*/
          i[77]
        ),
        he(t, "submit", Qn(
          /*handleSubmit*/
          i[22]
        ))
      ], x = !0);
    },
    p(d, v) {
      (!O || v[0] & /*placeholder*/
      512) && S(
        o,
        "placeholder",
        /*placeholder*/
        d[9]
      ), (!O || v[0] & /*placeholder*/
      512) && S(
        o,
        "aria-label",
        /*placeholder*/
        d[9]
      ), v[0] & /*searchValue*/
      2 && o.value !== /*searchValue*/
      d[1] && Si(
        o,
        /*searchValue*/
        d[1]
      ), /*abortController*/
      d[20] ? B && (bt(), ae(B, 1, 1, () => {
        B = null;
      }), wt()) : B ? (B.p(d, v), v[0] & /*abortController*/
      1048576 && ne(B, 1)) : (B = Bi(d), B.c(), ne(B, 1), B.m(c, E)), /*abortController*/
      d[20] ? z ? v[0] & /*abortController*/
      1048576 && ne(z, 1) : (z = Wi(), z.c(), ne(z, 1), z.m(c, null)) : z && (bt(), ae(z, 1, 1, () => {
        z = null;
      }), wt()), (!O || v[0] & /*searchValue*/
      2) && Be(
        c,
        "displayable",
        /*searchValue*/
        d[1] !== ""
      ), /*enableReverse*/
      d[6] === "button" ? W ? (W.p(d, v), v[0] & /*enableReverse*/
      64 && ne(W, 1)) : (W = Gi(d), W.c(), ne(W, 1), W.m(n, M)) : W && (bt(), ae(W, 1, 1, () => {
        W = null;
      }), wt()), l && l.p && (!O || v[2] & /*$$scope*/
      128) && Vn(
        l,
        s,
        d,
        /*$$scope*/
        d[69],
        O ? Hn(
          s,
          /*$$scope*/
          d[69],
          v,
          null
        ) : Kn(
          /*$$scope*/
          d[69]
        ),
        null
      );
      let p = k;
      k = h(d), k === p ? ~k && m[k].p(d, v) : (I && (bt(), ae(m[p], 1, 1, () => {
        m[p] = null;
      }), wt()), ~k ? (I = m[k], I ? I.p(d, v) : (I = m[k] = f[k](d), I.c()), ne(I, 1), I.m(t, null)) : I = null), (!O || v[0] & /*className*/
      4 && C !== (C = Dt(
        /*className*/
        d[2]
      ) + " svelte-bz0zu3")) && S(t, "class", C), (!O || v[0] & /*className, collapsed, searchValue*/
      38) && Be(
        t,
        "can-collapse",
        /*collapsed*/
        d[5] && /*searchValue*/
        d[1] === ""
      );
    },
    i(d) {
      O || (ne(P), ne(u.$$.fragment, d), ne(B), ne(z), ne(W), ne(l, d), ne(I), O = !0);
    },
    o(d) {
      ae(P), ae(u.$$.fragment, d), ae(B), ae(z), ae(W), ae(l, d), ae(I), O = !1;
    },
    d(d) {
      d && (J(e), J(t)), qe(u), i[72](null), B && B.d(), z && z.d(), W && W.d(), l && l.d(d), ~k && m[k].d(), x = !1, je(N);
    }
  };
}
function Qr(i, e, t) {
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
  let { class: c = void 0 } = e, { apiKey: E = void 0 } = e, { bbox: _ = void 0 } = e, { clearButtonTitle: M = "clear" } = e, { clearOnBlur: R = !1 } = e, { clearListOnPick: k = !1 } = e, { keepListOpen: I = !1 } = e, { collapsed: C = !1 } = e, { country: O = void 0 } = e, { debounceSearch: x = 200 } = e, { enableReverse: N = "never" } = e, { errorMessage: P = "Something went wrong…" } = e, { filter: B = () => !0 } = e, { flyTo: z = !0 } = e, { fuzzyMatch: W = !0 } = e, { language: s = void 0 } = e, { limit: l = void 0 } = e;
  const f = 41415112612;
  let { reverseGeocodingLimit: m = f } = e, { mapController: h = void 0 } = e, { minLength: d = 2 } = e, { noResultsMessage: v = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = e, { placeholder: p = "Search" } = e, { proximity: y = [{ type: "server-geolocation" }] } = e, { reverseActive: b = N === "always" } = e, { reverseButtonTitle: w = "toggle reverse geocoding" } = e, { searchValue: T = "" } = e, { pickedResultStyle: G = "full-geometry" } = e, { showPlaceType: D = "if-needed" } = e, { showResultsWhileTyping: Z = !0 } = e, { selectFirst: K = !0 } = e, { flyToSelected: ie = !1 } = e, { markerOnSelected: j = !0 } = e, { types: V = void 0 } = e;
  const fe = [];
  let { reverseGeocodingTypes: Ge = fe } = e, { exhaustiveReverseGeocoding: et = !1 } = e, { excludeTypes: tt = !1 } = e;
  const ye = void 0;
  let { reverseGeocodingExcludeTypes: Oe = ye } = e, { zoom: de = g } = e, { apiUrl: ce = "https://api.maptiler.com/geocoding" } = e, { fetchParameters: $ = {} } = e, { iconsBaseUrl: di = "https://cdn.maptiler.com/maptiler-geocoding-control/v2.1.7/icons/" } = e, { adjustUrlQuery: Zt = () => {
  } } = e, { adjustUrl: Ht = () => {
  } } = e;
  function vn(L) {
    Me.focus(L);
  }
  function bn() {
    Me.blur();
  }
  function gi(L, re = !0, le = !1) {
    t(1, T = L), re ? (t(15, Y = -1), pi()) : (yi(void 0, !le, le), setTimeout(() => {
      Me.focus(), Me.select();
    }));
  }
  function wn() {
    t(13, F = void 0), t(14, U = void 0), t(15, Y = -1);
  }
  function En() {
    t(64, ue = []), t(14, U = void 0);
  }
  let F, ue, U, mi = "", Me, Y = -1, Re, Ct = [], it, st, ot, Vt, De = !1;
  const Ln = /* @__PURE__ */ new Set(), Ze = sn();
  $n(() => {
    h && (h.setEventHandler(void 0), h.indicateReverse(!1), h.setSelectedMarker(-1), h.setFeatures(void 0, void 0, !1));
  });
  function pi(L) {
    if (t(17, De = !1), st && (clearTimeout(st), st = void 0), Y > -1 && F)
      t(14, U = F[Y]), t(1, T = U.place_type[0] === "reverse" ? U.place_name : U.place_name.replace(/,.*/, "")), t(19, Re = void 0), t(64, ue = void 0), t(15, Y = -1);
    else if (T) {
      const re = L || !Kt(T);
      Yt(T, { exact: !0 }).then(() => {
        t(64, ue = F), t(14, U = void 0), re && _n();
      }).catch((le) => t(19, Re = le));
    }
  }
  function Kt(L) {
    try {
      return jr(L, 6);
    } catch {
      return !1;
    }
  }
  async function Yt(L, { byId: re = !1, exact: le = !1 } = {}) {
    var be, Pe, He;
    t(19, Re = void 0), it == null || it.abort();
    const ve = new AbortController();
    t(20, it = ve);
    try {
      const Q = Kt(L), ct = new URL(ce + "/" + encodeURIComponent(Q ? Q.decimalLongitude + "," + Q.decimalLatitude : L) + ".json"), Le = ct.searchParams;
      s !== void 0 && Le.set("language", Array.isArray(s) ? s.join(",") : s ?? "");
      const [Jt] = (h == null ? void 0 : h.getCenterAndZoom()) ?? [];
      let Ie = (be = !Q || Ge === fe ? V : Ge) == null ? void 0 : be.map((ge) => typeof ge == "string" ? ge : Jt === void 0 || (ge[0] ?? 0) <= Jt && Jt < (ge[1] ?? 1 / 0) ? ge[2] : void 0).filter((ge) => ge !== void 0);
      Ie && (Ie = [...new Set(Ie)], Le.set("types", Ie.join(",")));
      const bi = !Q || Oe === ye ? tt : Oe;
      if (bi && Le.set("excludeTypes", String(bi)), _ && Le.set("bbox", _.map((ge) => ge.toFixed(6)).join(",")), O && Le.set("country", Array.isArray(O) ? O.join(",") : O), !re && !Q) {
        const ge = await Pr(h, y, ve);
        ge && Le.set("proximity", ge), (le || !Z) && Le.set("autocomplete", "false"), Le.set("fuzzyMatch", String(W));
      }
      const ht = m === f ? l : m;
      ht !== void 0 && ht > 1 && (Ie == null ? void 0 : Ie.length) !== 1 && console.warn("For reverse geocoding when limit > 1 then types must contain single value."), Q ? (ht === 1 || ht !== void 0 && (et || (Ie == null ? void 0 : Ie.length) === 1)) && Le.set("limit", String(ht)) : l !== void 0 && Le.set("limit", String(l)), E && Le.set("key", E), Zt(Le), Ht(ct);
      const zn = ct.searchParams.get("types") === "" && ct.searchParams.get("excludeTypes") !== "true", Nt = ct.toString();
      if (Nt === mi) {
        re ? (k && t(13, F = void 0), t(14, U = Ct[0])) : (t(13, F = Ct), ((Pe = F[Y]) == null ? void 0 : Pe.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1));
        return;
      }
      mi = Nt;
      let dt;
      if (zn)
        dt = { type: "FeatureCollection", features: [] };
      else {
        const ge = await fetch(Nt, { signal: ve.signal, ...$ });
        if (!ge.ok)
          throw new Error(await ge.text());
        dt = await ge.json();
      }
      Ze("response", { url: Nt, featureCollection: dt }), re ? (k && t(13, F = void 0), t(14, U = dt.features[0]), Ct = [U]) : (t(13, F = dt.features.filter(B)), Q && F.unshift({
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
      }), Ct = F, ((He = F[Y]) == null ? void 0 : He.id) !== (r == null ? void 0 : r.id) && t(15, Y = -1), Q && Me.focus());
    } catch (Q) {
      if (Q && typeof Q == "object" && "name" in Q && Q.name === "AbortError")
        return;
      throw Q;
    } finally {
      ve === it && t(20, it = void 0);
    }
  }
  function _n() {
    var ve;
    if (!(ue != null && ue.length) || !z)
      return;
    const L = [180, 90, -180, -90], re = !ue.some((be) => !be.matching_text);
    let le;
    for (const be of ue) {
      const Pe = ft(be);
      if (le = le === void 0 ? Pe : Pe === void 0 ? le : Math.max(le, Pe), re || !be.matching_text)
        for (const He of [0, 1, 2, 3])
          L[He] = Math[He < 2 ? "min" : "max"](L[He], ((ve = be.bbox) == null ? void 0 : ve[He]) ?? be.center[He % 2]);
    }
    h && ue.length > 0 && (U && L[0] === L[2] && L[1] === L[3] ? h.flyTo(U.center, ft(U)) : h.fitBounds(zt(L), 50, le));
  }
  function Qt() {
    !U || !h || (!U.bbox || U.bbox[0] === U.bbox[2] && U.bbox[1] === U.bbox[3] ? h.flyTo(U.center, ft(U)) : h.fitBounds(zt(U.bbox), 50, ft(U)));
  }
  function ft(L) {
    var le;
    if (!L.bbox || L.bbox[0] !== L.bbox[2] && L.bbox[1] !== L.bbox[3])
      return;
    const re = L.id.replace(/\..*/, "");
    return (Array.isArray((le = L.properties) == null ? void 0 : le.categories) ? L.properties.categories.reduce(
      (ve, be) => {
        const Pe = de[re + "." + be];
        return ve === void 0 ? Pe : Pe === void 0 ? ve : Math.max(ve, Pe);
      },
      void 0
    ) : void 0) ?? de[re];
  }
  function Sn(L) {
    t(0, b = N === "always"), t(13, F = void 0), t(14, U = void 0), t(15, Y = -1), gi(L[1].toFixed(6) + ", " + Rr(L[0], [-180, 180], !0).toFixed(6), !1, !0);
  }
  function xn(L) {
    if (!F)
      return;
    let re = L.key === "ArrowDown" ? 1 : L.key === "ArrowUp" ? -1 : 0;
    re && (Me.focus(), t(17, De = !0), L.preventDefault(), U && Y === -1 && t(15, Y = F.findIndex((le) => le.id === (U == null ? void 0 : U.id))), Y === (U || K ? 0 : -1) && re === -1 && t(15, Y = F.length), t(15, Y += re), Y >= F.length && t(15, Y = -1), Y < 0 && (U || K) && t(15, Y = 0));
  }
  function yi(L, re = !0, le = !1) {
    if (t(19, Re = void 0), t(14, U = void 0), t(17, De = !0), Z || le) {
      if (st && clearTimeout(st), T.length < d)
        return;
      const ve = T;
      st = window.setTimeout(
        () => {
          Yt(ve).catch((be) => t(19, Re = be));
        },
        re ? x : 0
      );
    } else
      t(13, F = void 0), t(19, Re = void 0);
  }
  function Xt(L) {
    U && (U == null ? void 0 : U.id) === (L == null ? void 0 : L.id) ? Qt() : (t(14, U = L), t(1, T = L.place_name));
  }
  function vi(L) {
    t(15, Y = L);
  }
  function Tn() {
    (!K || U) && t(15, Y = -1), ie && Qt();
  }
  const Mn = () => Me.focus();
  function Cn(L) {
    ii[L ? "unshift" : "push"](() => {
      Me = L, t(18, Me);
    });
  }
  function Nn() {
    T = this.value, t(1, T), t(17, De), t(31, R), t(16, ot);
  }
  const kn = () => t(17, De = !0), On = () => t(17, De = !1), Rn = () => t(17, De = !0), Pn = () => t(14, U = void 0), In = () => {
    t(1, T = ""), t(14, U = void 0), Me.focus();
  }, An = () => t(0, b = !b), Bn = () => t(19, Re = void 0), Wn = (L) => vi(L), Gn = (L) => Xt(L), Dn = () => {
  };
  return i.$$set = (L) => {
    "class" in L && t(2, c = L.class), "apiKey" in L && t(29, E = L.apiKey), "bbox" in L && t(30, _ = L.bbox), "clearButtonTitle" in L && t(3, M = L.clearButtonTitle), "clearOnBlur" in L && t(31, R = L.clearOnBlur), "clearListOnPick" in L && t(32, k = L.clearListOnPick), "keepListOpen" in L && t(4, I = L.keepListOpen), "collapsed" in L && t(5, C = L.collapsed), "country" in L && t(33, O = L.country), "debounceSearch" in L && t(34, x = L.debounceSearch), "enableReverse" in L && t(6, N = L.enableReverse), "errorMessage" in L && t(7, P = L.errorMessage), "filter" in L && t(35, B = L.filter), "flyTo" in L && t(36, z = L.flyTo), "fuzzyMatch" in L && t(37, W = L.fuzzyMatch), "language" in L && t(38, s = L.language), "limit" in L && t(39, l = L.limit), "reverseGeocodingLimit" in L && t(40, m = L.reverseGeocodingLimit), "mapController" in L && t(41, h = L.mapController), "minLength" in L && t(42, d = L.minLength), "noResultsMessage" in L && t(8, v = L.noResultsMessage), "placeholder" in L && t(9, p = L.placeholder), "proximity" in L && t(43, y = L.proximity), "reverseActive" in L && t(0, b = L.reverseActive), "reverseButtonTitle" in L && t(10, w = L.reverseButtonTitle), "searchValue" in L && t(1, T = L.searchValue), "pickedResultStyle" in L && t(44, G = L.pickedResultStyle), "showPlaceType" in L && t(11, D = L.showPlaceType), "showResultsWhileTyping" in L && t(45, Z = L.showResultsWhileTyping), "selectFirst" in L && t(46, K = L.selectFirst), "flyToSelected" in L && t(47, ie = L.flyToSelected), "markerOnSelected" in L && t(48, j = L.markerOnSelected), "types" in L && t(49, V = L.types), "reverseGeocodingTypes" in L && t(50, Ge = L.reverseGeocodingTypes), "exhaustiveReverseGeocoding" in L && t(51, et = L.exhaustiveReverseGeocoding), "excludeTypes" in L && t(52, tt = L.excludeTypes), "reverseGeocodingExcludeTypes" in L && t(53, Oe = L.reverseGeocodingExcludeTypes), "zoom" in L && t(54, de = L.zoom), "apiUrl" in L && t(55, ce = L.apiUrl), "fetchParameters" in L && t(56, $ = L.fetchParameters), "iconsBaseUrl" in L && t(12, di = L.iconsBaseUrl), "adjustUrlQuery" in L && t(57, Zt = L.adjustUrlQuery), "adjustUrl" in L && t(58, Ht = L.adjustUrl), "$$scope" in L && t(69, o = L.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[0] & /*enableReverse*/
    64 && t(0, b = N === "always"), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && G !== "marker-only" && U && !U.address && U.geometry.type === "Point" && U.place_type[0] !== "reverse" && Yt(U.id, { byId: !0 }).catch((L) => t(19, Re = L)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, flyTo, clearListOnPick*/
    1058 | i.$$.dirty[2] & /*prevIdToFly*/
    8 && (h && U && U.id !== Vt && z && (Qt(), k && t(13, F = void 0), t(64, ue = void 0), t(15, Y = -1)), t(65, Vt = U == null ? void 0 : U.id)), i.$$.dirty[0] & /*focused, focusedDelayed*/
    196608 | i.$$.dirty[1] & /*clearOnBlur*/
    1 && setTimeout(() => {
      t(16, ot = De), R && !ot && t(1, T = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    2048 && T.length < d && (t(13, F = void 0), t(19, Re = void 0), t(64, ue = F)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex, picked*/
    57344 | i.$$.dirty[1] & /*selectFirst*/
    32768 && K && F != null && F.length && Y == -1 && !U && t(15, Y = 0), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[2] & /*markedFeatures*/
    4 && ue !== F && t(64, ue = void 0), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    73729 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && h && h.setEventHandler((L) => {
      switch (L.type) {
        case "mapClick":
          b && Sn(L.coordinates);
          break;
        case "markerClick":
          {
            const re = F == null ? void 0 : F.find((le) => le.id === L.id);
            re && Xt(re);
          }
          break;
        case "markerMouseEnter":
          ue && t(15, Y = ot ? (F == null ? void 0 : F.findIndex((re) => re.id === L.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          ue && t(15, Y = -1);
          break;
      }
    }), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    40960 && t(66, r = F == null ? void 0 : F[Y]), i.$$.dirty[1] & /*mapController, flyTo, flyToSelected*/
    66592 | i.$$.dirty[2] & /*selected*/
    16 && h && r && z && ie && h.flyTo(r.center, ft(r)), i.$$.dirty[1] & /*pickedResultStyle*/
    8192 && t(68, n = G === "full-geometry-including-polygon-center-marker"), i.$$.dirty[1] & /*markerOnSelected, mapController*/
    132096 | i.$$.dirty[2] & /*showPolygonMarker*/
    64 && (j || h == null || h.setFeatures(void 0, void 0, n)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController, markerOnSelected*/
    132096 | i.$$.dirty[2] & /*markedFeatures, selected, showPolygonMarker*/
    84 && h && j && !ue && (h.setFeatures(r ? [r] : void 0, U, n), h.setSelectedMarker(r ? 0 : -1)), i.$$.dirty[0] & /*picked*/
    16384 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures, showPolygonMarker*/
    68 && h && h.setFeatures(ue, U, n), i.$$.dirty[0] & /*selectedItemIndex*/
    32768 | i.$$.dirty[1] & /*mapController*/
    1024 | i.$$.dirty[2] & /*markedFeatures*/
    4 && ue && h && h.setSelectedMarker(Y), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    1024 && h) {
      const L = Kt(T);
      h.setReverseMarker(L ? [L.decimalLongitude, L.decimalLatitude] : void 0);
    }
    i.$$.dirty[2] & /*selected*/
    16 && Ze("select", { feature: r }), i.$$.dirty[0] & /*picked*/
    16384 && Ze("pick", { feature: U }), i.$$.dirty[0] & /*listFeatures, focusedDelayed, keepListOpen*/
    73744 && t(67, u = !!(F != null && F.length) && (ot || I)), i.$$.dirty[2] & /*optionsVisible*/
    32 && Ze("optionsvisibilitychange", { optionsVisible: u }), i.$$.dirty[0] & /*listFeatures*/
    8192 && Ze("featureslisted", { features: F }), i.$$.dirty[2] & /*markedFeatures*/
    4 && Ze("featuresmarked", { features: ue }), i.$$.dirty[0] & /*reverseActive*/
    1 && Ze("reversetoggle", { reverse: b }), i.$$.dirty[0] & /*searchValue*/
    2 && Ze("querychange", { query: T }), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    1024 && h && h.indicateReverse(b);
  }, [
    b,
    T,
    c,
    M,
    I,
    C,
    N,
    P,
    v,
    p,
    w,
    D,
    di,
    F,
    U,
    Y,
    ot,
    De,
    Me,
    Re,
    it,
    Ln,
    pi,
    xn,
    yi,
    Xt,
    vi,
    Tn,
    g,
    E,
    _,
    R,
    k,
    O,
    x,
    B,
    z,
    W,
    s,
    l,
    m,
    h,
    d,
    y,
    G,
    Z,
    K,
    ie,
    j,
    V,
    Ge,
    et,
    tt,
    Oe,
    de,
    ce,
    $,
    Zt,
    Ht,
    vn,
    bn,
    gi,
    wn,
    En,
    ue,
    Vt,
    r,
    u,
    n,
    o,
    a,
    Mn,
    Cn,
    Nn,
    kn,
    On,
    Rn,
    Pn,
    In,
    An,
    Bn,
    Wn,
    Gn,
    Dn
  ];
}
let Xr = class extends Je {
  constructor(e) {
    super(), Xe(
      this,
      e,
      Qr,
      Yr,
      Qe,
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
function Tt(i, e, t = {}) {
  const n = { type: "Feature" };
  return (t.id === 0 || t.id) && (n.id = t.id), t.bbox && (n.bbox = t.bbox), n.properties = e || {}, n.geometry = i, n;
}
function ci(i, e, t = {}) {
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
  return Tt({
    type: "Polygon",
    coordinates: i
  }, e, t);
}
function Mt(i, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = i, t;
}
function fn(i, e, t = {}) {
  return Tt({
    type: "MultiPolygon",
    coordinates: i
  }, e, t);
}
var Jr = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, ei = Math.ceil, xe = Math.floor, pe = "[BigNumber Error] ", zi = pe + "Number primitive has more than 15 significant digits: ", Ce = 1e14, q = 14, Ui = 9007199254740991, ti = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], Ve = 1e7, we = 1e9;
function cn(i) {
  var e, t, n, r = x.prototype = { constructor: x, toString: null, valueOf: null }, u = new x(1), a = 20, o = 4, g = -7, c = 21, E = -1e7, _ = 1e7, M = !1, R = 1, k = 0, I = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, C = "0123456789abcdefghijklmnopqrstuvwxyz", O = !0;
  function x(s, l) {
    var f, m, h, d, v, p, y, b, w = this;
    if (!(w instanceof x)) return new x(s, l);
    if (l == null) {
      if (s && s._isBigNumber === !0) {
        w.s = s.s, !s.c || s.e > _ ? w.c = w.e = null : s.e < E ? w.c = [w.e = 0] : (w.e = s.e, w.c = s.c.slice());
        return;
      }
      if ((p = typeof s == "number") && s * 0 == 0) {
        if (w.s = 1 / s < 0 ? (s = -s, -1) : 1, s === ~~s) {
          for (d = 0, v = s; v >= 10; v /= 10, d++) ;
          d > _ ? w.c = w.e = null : (w.e = d, w.c = [s]);
          return;
        }
        b = String(s);
      } else {
        if (!Jr.test(b = String(s))) return n(w, b, p);
        w.s = b.charCodeAt(0) == 45 ? (b = b.slice(1), -1) : 1;
      }
      (d = b.indexOf(".")) > -1 && (b = b.replace(".", "")), (v = b.search(/e/i)) > 0 ? (d < 0 && (d = v), d += +b.slice(v + 1), b = b.substring(0, v)) : d < 0 && (d = b.length);
    } else {
      if (se(l, 2, C.length, "Base"), l == 10 && O)
        return w = new x(s), z(w, a + w.e + 1, o);
      if (b = String(s), p = typeof s == "number") {
        if (s * 0 != 0) return n(w, b, p, l);
        if (w.s = 1 / s < 0 ? (b = b.slice(1), -1) : 1, x.DEBUG && b.replace(/^0\.0*|\./, "").length > 15)
          throw Error(zi + s);
      } else
        w.s = b.charCodeAt(0) === 45 ? (b = b.slice(1), -1) : 1;
      for (f = C.slice(0, l), d = v = 0, y = b.length; v < y; v++)
        if (f.indexOf(m = b.charAt(v)) < 0) {
          if (m == ".") {
            if (v > d) {
              d = y;
              continue;
            }
          } else if (!h && (b == b.toUpperCase() && (b = b.toLowerCase()) || b == b.toLowerCase() && (b = b.toUpperCase()))) {
            h = !0, v = -1, d = 0;
            continue;
          }
          return n(w, String(s), p, l);
        }
      p = !1, b = t(b, l, 10, w.s), (d = b.indexOf(".")) > -1 ? b = b.replace(".", "") : d = b.length;
    }
    for (v = 0; b.charCodeAt(v) === 48; v++) ;
    for (y = b.length; b.charCodeAt(--y) === 48; ) ;
    if (b = b.slice(v, ++y)) {
      if (y -= v, p && x.DEBUG && y > 15 && (s > Ui || s !== xe(s)))
        throw Error(zi + w.s * s);
      if ((d = d - v - 1) > _)
        w.c = w.e = null;
      else if (d < E)
        w.c = [w.e = 0];
      else {
        if (w.e = d, w.c = [], v = (d + 1) % q, d < 0 && (v += q), v < y) {
          for (v && w.c.push(+b.slice(0, v)), y -= q; v < y; )
            w.c.push(+b.slice(v, v += q));
          v = q - (b = b.slice(v)).length;
        } else
          v -= y;
        for (; v--; b += "0") ;
        w.c.push(+b);
      }
    } else
      w.c = [w.e = 0];
  }
  x.clone = cn, x.ROUND_UP = 0, x.ROUND_DOWN = 1, x.ROUND_CEIL = 2, x.ROUND_FLOOR = 3, x.ROUND_HALF_UP = 4, x.ROUND_HALF_DOWN = 5, x.ROUND_HALF_EVEN = 6, x.ROUND_HALF_CEIL = 7, x.ROUND_HALF_FLOOR = 8, x.EUCLID = 9, x.config = x.set = function(s) {
    var l, f;
    if (s != null)
      if (typeof s == "object") {
        if (s.hasOwnProperty(l = "DECIMAL_PLACES") && (f = s[l], se(f, 0, we, l), a = f), s.hasOwnProperty(l = "ROUNDING_MODE") && (f = s[l], se(f, 0, 8, l), o = f), s.hasOwnProperty(l = "EXPONENTIAL_AT") && (f = s[l], f && f.pop ? (se(f[0], -1e9, 0, l), se(f[1], 0, we, l), g = f[0], c = f[1]) : (se(f, -1e9, we, l), g = -(c = f < 0 ? -f : f))), s.hasOwnProperty(l = "RANGE"))
          if (f = s[l], f && f.pop)
            se(f[0], -1e9, -1, l), se(f[1], 1, we, l), E = f[0], _ = f[1];
          else if (se(f, -1e9, we, l), f)
            E = -(_ = f < 0 ? -f : f);
          else
            throw Error(pe + l + " cannot be zero: " + f);
        if (s.hasOwnProperty(l = "CRYPTO"))
          if (f = s[l], f === !!f)
            if (f)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                M = f;
              else
                throw M = !f, Error(pe + "crypto unavailable");
            else
              M = f;
          else
            throw Error(pe + l + " not true or false: " + f);
        if (s.hasOwnProperty(l = "MODULO_MODE") && (f = s[l], se(f, 0, 9, l), R = f), s.hasOwnProperty(l = "POW_PRECISION") && (f = s[l], se(f, 0, we, l), k = f), s.hasOwnProperty(l = "FORMAT"))
          if (f = s[l], typeof f == "object") I = f;
          else throw Error(pe + l + " not an object: " + f);
        if (s.hasOwnProperty(l = "ALPHABET"))
          if (f = s[l], typeof f == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(f))
            O = f.slice(0, 10) == "0123456789", C = f;
          else
            throw Error(pe + l + " invalid: " + f);
      } else
        throw Error(pe + "Object expected: " + s);
    return {
      DECIMAL_PLACES: a,
      ROUNDING_MODE: o,
      EXPONENTIAL_AT: [g, c],
      RANGE: [E, _],
      CRYPTO: M,
      MODULO_MODE: R,
      POW_PRECISION: k,
      FORMAT: I,
      ALPHABET: C
    };
  }, x.isBigNumber = function(s) {
    if (!s || s._isBigNumber !== !0) return !1;
    if (!x.DEBUG) return !0;
    var l, f, m = s.c, h = s.e, d = s.s;
    e: if ({}.toString.call(m) == "[object Array]") {
      if ((d === 1 || d === -1) && h >= -1e9 && h <= we && h === xe(h)) {
        if (m[0] === 0) {
          if (h === 0 && m.length === 1) return !0;
          break e;
        }
        if (l = (h + 1) % q, l < 1 && (l += q), String(m[0]).length == l) {
          for (l = 0; l < m.length; l++)
            if (f = m[l], f < 0 || f >= Ce || f !== xe(f)) break e;
          if (f !== 0) return !0;
        }
      }
    } else if (m === null && h === null && (d === null || d === 1 || d === -1))
      return !0;
    throw Error(pe + "Invalid BigNumber: " + s);
  }, x.maximum = x.max = function() {
    return P(arguments, -1);
  }, x.minimum = x.min = function() {
    return P(arguments, 1);
  }, x.random = function() {
    var s = 9007199254740992, l = Math.random() * s & 2097151 ? function() {
      return xe(Math.random() * s);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(f) {
      var m, h, d, v, p, y = 0, b = [], w = new x(u);
      if (f == null ? f = a : se(f, 0, we), v = ei(f / q), M)
        if (crypto.getRandomValues) {
          for (m = crypto.getRandomValues(new Uint32Array(v *= 2)); y < v; )
            p = m[y] * 131072 + (m[y + 1] >>> 11), p >= 9e15 ? (h = crypto.getRandomValues(new Uint32Array(2)), m[y] = h[0], m[y + 1] = h[1]) : (b.push(p % 1e14), y += 2);
          y = v / 2;
        } else if (crypto.randomBytes) {
          for (m = crypto.randomBytes(v *= 7); y < v; )
            p = (m[y] & 31) * 281474976710656 + m[y + 1] * 1099511627776 + m[y + 2] * 4294967296 + m[y + 3] * 16777216 + (m[y + 4] << 16) + (m[y + 5] << 8) + m[y + 6], p >= 9e15 ? crypto.randomBytes(7).copy(m, y) : (b.push(p % 1e14), y += 7);
          y = v / 7;
        } else
          throw M = !1, Error(pe + "crypto unavailable");
      if (!M)
        for (; y < v; )
          p = l(), p < 9e15 && (b[y++] = p % 1e14);
      for (v = b[--y], f %= q, v && f && (p = ti[q - f], b[y] = xe(v / p) * p); b[y] === 0; b.pop(), y--) ;
      if (y < 0)
        b = [d = 0];
      else {
        for (d = -1; b[0] === 0; b.splice(0, 1), d -= q) ;
        for (y = 1, p = b[0]; p >= 10; p /= 10, y++) ;
        y < q && (d -= q - y);
      }
      return w.e = d, w.c = b, w;
    };
  }(), x.sum = function() {
    for (var s = 1, l = arguments, f = new x(l[0]); s < l.length; ) f = f.plus(l[s++]);
    return f;
  }, t = /* @__PURE__ */ function() {
    var s = "0123456789";
    function l(f, m, h, d) {
      for (var v, p = [0], y, b = 0, w = f.length; b < w; ) {
        for (y = p.length; y--; p[y] *= m) ;
        for (p[0] += d.indexOf(f.charAt(b++)), v = 0; v < p.length; v++)
          p[v] > h - 1 && (p[v + 1] == null && (p[v + 1] = 0), p[v + 1] += p[v] / h | 0, p[v] %= h);
      }
      return p.reverse();
    }
    return function(f, m, h, d, v) {
      var p, y, b, w, T, G, D, Z, K = f.indexOf("."), ie = a, j = o;
      for (K >= 0 && (w = k, k = 0, f = f.replace(".", ""), Z = new x(m), G = Z.pow(f.length - K), k = w, Z.c = l(
        ze(Se(G.c), G.e, "0"),
        10,
        h,
        s
      ), Z.e = Z.c.length), D = l(f, m, h, v ? (p = C, s) : (p = s, C)), b = w = D.length; D[--w] == 0; D.pop()) ;
      if (!D[0]) return p.charAt(0);
      if (K < 0 ? --b : (G.c = D, G.e = b, G.s = d, G = e(G, Z, ie, j, h), D = G.c, T = G.r, b = G.e), y = b + ie + 1, K = D[y], w = h / 2, T = T || y < 0 || D[y + 1] != null, T = j < 4 ? (K != null || T) && (j == 0 || j == (G.s < 0 ? 3 : 2)) : K > w || K == w && (j == 4 || T || j == 6 && D[y - 1] & 1 || j == (G.s < 0 ? 8 : 7)), y < 1 || !D[0])
        f = T ? ze(p.charAt(1), -ie, p.charAt(0)) : p.charAt(0);
      else {
        if (D.length = y, T)
          for (--h; ++D[--y] > h; )
            D[y] = 0, y || (++b, D = [1].concat(D));
        for (w = D.length; !D[--w]; ) ;
        for (K = 0, f = ""; K <= w; f += p.charAt(D[K++])) ;
        f = ze(f, b, p.charAt(0));
      }
      return f;
    };
  }(), e = /* @__PURE__ */ function() {
    function s(m, h, d) {
      var v, p, y, b, w = 0, T = m.length, G = h % Ve, D = h / Ve | 0;
      for (m = m.slice(); T--; )
        y = m[T] % Ve, b = m[T] / Ve | 0, v = D * y + b * G, p = G * y + v % Ve * Ve + w, w = (p / d | 0) + (v / Ve | 0) + D * b, m[T] = p % d;
      return w && (m = [w].concat(m)), m;
    }
    function l(m, h, d, v) {
      var p, y;
      if (d != v)
        y = d > v ? 1 : -1;
      else
        for (p = y = 0; p < d; p++)
          if (m[p] != h[p]) {
            y = m[p] > h[p] ? 1 : -1;
            break;
          }
      return y;
    }
    function f(m, h, d, v) {
      for (var p = 0; d--; )
        m[d] -= p, p = m[d] < h[d] ? 1 : 0, m[d] = p * v + m[d] - h[d];
      for (; !m[0] && m.length > 1; m.splice(0, 1)) ;
    }
    return function(m, h, d, v, p) {
      var y, b, w, T, G, D, Z, K, ie, j, V, fe, Ge, et, tt, ye, Oe, de = m.s == h.s ? 1 : -1, ce = m.c, $ = h.c;
      if (!ce || !ce[0] || !$ || !$[0])
        return new x(
          // Return NaN if either NaN, or both Infinity or 0.
          !m.s || !h.s || (ce ? $ && ce[0] == $[0] : !$) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            ce && ce[0] == 0 || !$ ? de * 0 : de / 0
          )
        );
      for (K = new x(de), ie = K.c = [], b = m.e - h.e, de = d + b + 1, p || (p = Ce, b = Te(m.e / q) - Te(h.e / q), de = de / q | 0), w = 0; $[w] == (ce[w] || 0); w++) ;
      if ($[w] > (ce[w] || 0) && b--, de < 0)
        ie.push(1), T = !0;
      else {
        for (et = ce.length, ye = $.length, w = 0, de += 2, G = xe(p / ($[0] + 1)), G > 1 && ($ = s($, G, p), ce = s(ce, G, p), ye = $.length, et = ce.length), Ge = ye, j = ce.slice(0, ye), V = j.length; V < ye; j[V++] = 0) ;
        Oe = $.slice(), Oe = [0].concat(Oe), tt = $[0], $[1] >= p / 2 && tt++;
        do {
          if (G = 0, y = l($, j, ye, V), y < 0) {
            if (fe = j[0], ye != V && (fe = fe * p + (j[1] || 0)), G = xe(fe / tt), G > 1)
              for (G >= p && (G = p - 1), D = s($, G, p), Z = D.length, V = j.length; l(D, j, Z, V) == 1; )
                G--, f(D, ye < Z ? Oe : $, Z, p), Z = D.length, y = 1;
            else
              G == 0 && (y = G = 1), D = $.slice(), Z = D.length;
            if (Z < V && (D = [0].concat(D)), f(j, D, V, p), V = j.length, y == -1)
              for (; l($, j, ye, V) < 1; )
                G++, f(j, ye < V ? Oe : $, V, p), V = j.length;
          } else y === 0 && (G++, j = [0]);
          ie[w++] = G, j[0] ? j[V++] = ce[Ge] || 0 : (j = [ce[Ge]], V = 1);
        } while ((Ge++ < et || j[0] != null) && de--);
        T = j[0] != null, ie[0] || ie.splice(0, 1);
      }
      if (p == Ce) {
        for (w = 1, de = ie[0]; de >= 10; de /= 10, w++) ;
        z(K, d + (K.e = w + b * q - 1) + 1, v, T);
      } else
        K.e = b, K.r = +T;
      return K;
    };
  }();
  function N(s, l, f, m) {
    var h, d, v, p, y;
    if (f == null ? f = o : se(f, 0, 8), !s.c) return s.toString();
    if (h = s.c[0], v = s.e, l == null)
      y = Se(s.c), y = m == 1 || m == 2 && (v <= g || v >= c) ? It(y, v) : ze(y, v, "0");
    else if (s = z(new x(s), l, f), d = s.e, y = Se(s.c), p = y.length, m == 1 || m == 2 && (l <= d || d <= g)) {
      for (; p < l; y += "0", p++) ;
      y = It(y, d);
    } else if (l -= v, y = ze(y, d, "0"), d + 1 > p) {
      if (--l > 0) for (y += "."; l--; y += "0") ;
    } else if (l += d - p, l > 0)
      for (d + 1 == p && (y += "."); l--; y += "0") ;
    return s.s < 0 && h ? "-" + y : y;
  }
  function P(s, l) {
    for (var f, m, h = 1, d = new x(s[0]); h < s.length; h++)
      m = new x(s[h]), (!m.s || (f = nt(d, m)) === l || f === 0 && d.s === l) && (d = m);
    return d;
  }
  function B(s, l, f) {
    for (var m = 1, h = l.length; !l[--h]; l.pop()) ;
    for (h = l[0]; h >= 10; h /= 10, m++) ;
    return (f = m + f * q - 1) > _ ? s.c = s.e = null : f < E ? s.c = [s.e = 0] : (s.e = f, s.c = l), s;
  }
  n = /* @__PURE__ */ function() {
    var s = /^(-?)0([xbo])(?=\w[\w.]*$)/i, l = /^([^.]+)\.$/, f = /^\.([^.]+)$/, m = /^-?(Infinity|NaN)$/, h = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(d, v, p, y) {
      var b, w = p ? v : v.replace(h, "");
      if (m.test(w))
        d.s = isNaN(w) ? null : w < 0 ? -1 : 1;
      else {
        if (!p && (w = w.replace(s, function(T, G, D) {
          return b = (D = D.toLowerCase()) == "x" ? 16 : D == "b" ? 2 : 8, !y || y == b ? G : T;
        }), y && (b = y, w = w.replace(l, "$1").replace(f, "0.$1")), v != w))
          return new x(w, b);
        if (x.DEBUG)
          throw Error(pe + "Not a" + (y ? " base " + y : "") + " number: " + v);
        d.s = null;
      }
      d.c = d.e = null;
    };
  }();
  function z(s, l, f, m) {
    var h, d, v, p, y, b, w, T = s.c, G = ti;
    if (T) {
      e: {
        for (h = 1, p = T[0]; p >= 10; p /= 10, h++) ;
        if (d = l - h, d < 0)
          d += q, v = l, y = T[b = 0], w = xe(y / G[h - v - 1] % 10);
        else if (b = ei((d + 1) / q), b >= T.length)
          if (m) {
            for (; T.length <= b; T.push(0)) ;
            y = w = 0, h = 1, d %= q, v = d - q + 1;
          } else
            break e;
        else {
          for (y = p = T[b], h = 1; p >= 10; p /= 10, h++) ;
          d %= q, v = d - q + h, w = v < 0 ? 0 : xe(y / G[h - v - 1] % 10);
        }
        if (m = m || l < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        T[b + 1] != null || (v < 0 ? y : y % G[h - v - 1]), m = f < 4 ? (w || m) && (f == 0 || f == (s.s < 0 ? 3 : 2)) : w > 5 || w == 5 && (f == 4 || m || f == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (d > 0 ? v > 0 ? y / G[h - v] : 0 : T[b - 1]) % 10 & 1 || f == (s.s < 0 ? 8 : 7)), l < 1 || !T[0])
          return T.length = 0, m ? (l -= s.e + 1, T[0] = G[(q - l % q) % q], s.e = -l || 0) : T[0] = s.e = 0, s;
        if (d == 0 ? (T.length = b, p = 1, b--) : (T.length = b + 1, p = G[q - d], T[b] = v > 0 ? xe(y / G[h - v] % G[v]) * p : 0), m)
          for (; ; )
            if (b == 0) {
              for (d = 1, v = T[0]; v >= 10; v /= 10, d++) ;
              for (v = T[0] += p, p = 1; v >= 10; v /= 10, p++) ;
              d != p && (s.e++, T[0] == Ce && (T[0] = 1));
              break;
            } else {
              if (T[b] += p, T[b] != Ce) break;
              T[b--] = 0, p = 1;
            }
        for (d = T.length; T[--d] === 0; T.pop()) ;
      }
      s.e > _ ? s.c = s.e = null : s.e < E && (s.c = [s.e = 0]);
    }
    return s;
  }
  function W(s) {
    var l, f = s.e;
    return f === null ? s.toString() : (l = Se(s.c), l = f <= g || f >= c ? It(l, f) : ze(l, f, "0"), s.s < 0 ? "-" + l : l);
  }
  return r.absoluteValue = r.abs = function() {
    var s = new x(this);
    return s.s < 0 && (s.s = 1), s;
  }, r.comparedTo = function(s, l) {
    return nt(this, new x(s, l));
  }, r.decimalPlaces = r.dp = function(s, l) {
    var f, m, h, d = this;
    if (s != null)
      return se(s, 0, we), l == null ? l = o : se(l, 0, 8), z(new x(d), s + d.e + 1, l);
    if (!(f = d.c)) return null;
    if (m = ((h = f.length - 1) - Te(this.e / q)) * q, h = f[h]) for (; h % 10 == 0; h /= 10, m--) ;
    return m < 0 && (m = 0), m;
  }, r.dividedBy = r.div = function(s, l) {
    return e(this, new x(s, l), a, o);
  }, r.dividedToIntegerBy = r.idiv = function(s, l) {
    return e(this, new x(s, l), 0, 1);
  }, r.exponentiatedBy = r.pow = function(s, l) {
    var f, m, h, d, v, p, y, b, w, T = this;
    if (s = new x(s), s.c && !s.isInteger())
      throw Error(pe + "Exponent not an integer: " + W(s));
    if (l != null && (l = new x(l)), p = s.e > 14, !T.c || !T.c[0] || T.c[0] == 1 && !T.e && T.c.length == 1 || !s.c || !s.c[0])
      return w = new x(Math.pow(+W(T), p ? s.s * (2 - Pt(s)) : +W(s))), l ? w.mod(l) : w;
    if (y = s.s < 0, l) {
      if (l.c ? !l.c[0] : !l.s) return new x(NaN);
      m = !y && T.isInteger() && l.isInteger(), m && (T = T.mod(l));
    } else {
      if (s.e > 9 && (T.e > 0 || T.e < -1 || (T.e == 0 ? T.c[0] > 1 || p && T.c[1] >= 24e7 : T.c[0] < 8e13 || p && T.c[0] <= 9999975e7)))
        return d = T.s < 0 && Pt(s) ? -0 : 0, T.e > -1 && (d = 1 / d), new x(y ? 1 / d : d);
      k && (d = ei(k / q + 2));
    }
    for (p ? (f = new x(0.5), y && (s.s = 1), b = Pt(s)) : (h = Math.abs(+W(s)), b = h % 2), w = new x(u); ; ) {
      if (b) {
        if (w = w.times(T), !w.c) break;
        d ? w.c.length > d && (w.c.length = d) : m && (w = w.mod(l));
      }
      if (h) {
        if (h = xe(h / 2), h === 0) break;
        b = h % 2;
      } else if (s = s.times(f), z(s, s.e + 1, 1), s.e > 14)
        b = Pt(s);
      else {
        if (h = +W(s), h === 0) break;
        b = h % 2;
      }
      T = T.times(T), d ? T.c && T.c.length > d && (T.c.length = d) : m && (T = T.mod(l));
    }
    return m ? w : (y && (w = u.div(w)), l ? w.mod(l) : d ? z(w, k, o, v) : w);
  }, r.integerValue = function(s) {
    var l = new x(this);
    return s == null ? s = o : se(s, 0, 8), z(l, l.e + 1, s);
  }, r.isEqualTo = r.eq = function(s, l) {
    return nt(this, new x(s, l)) === 0;
  }, r.isFinite = function() {
    return !!this.c;
  }, r.isGreaterThan = r.gt = function(s, l) {
    return nt(this, new x(s, l)) > 0;
  }, r.isGreaterThanOrEqualTo = r.gte = function(s, l) {
    return (l = nt(this, new x(s, l))) === 1 || l === 0;
  }, r.isInteger = function() {
    return !!this.c && Te(this.e / q) > this.c.length - 2;
  }, r.isLessThan = r.lt = function(s, l) {
    return nt(this, new x(s, l)) < 0;
  }, r.isLessThanOrEqualTo = r.lte = function(s, l) {
    return (l = nt(this, new x(s, l))) === -1 || l === 0;
  }, r.isNaN = function() {
    return !this.s;
  }, r.isNegative = function() {
    return this.s < 0;
  }, r.isPositive = function() {
    return this.s > 0;
  }, r.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, r.minus = function(s, l) {
    var f, m, h, d, v = this, p = v.s;
    if (s = new x(s, l), l = s.s, !p || !l) return new x(NaN);
    if (p != l)
      return s.s = -l, v.plus(s);
    var y = v.e / q, b = s.e / q, w = v.c, T = s.c;
    if (!y || !b) {
      if (!w || !T) return w ? (s.s = -l, s) : new x(T ? v : NaN);
      if (!w[0] || !T[0])
        return T[0] ? (s.s = -l, s) : new x(w[0] ? v : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          o == 3 ? -0 : 0
        ));
    }
    if (y = Te(y), b = Te(b), w = w.slice(), p = y - b) {
      for ((d = p < 0) ? (p = -p, h = w) : (b = y, h = T), h.reverse(), l = p; l--; h.push(0)) ;
      h.reverse();
    } else
      for (m = (d = (p = w.length) < (l = T.length)) ? p : l, p = l = 0; l < m; l++)
        if (w[l] != T[l]) {
          d = w[l] < T[l];
          break;
        }
    if (d && (h = w, w = T, T = h, s.s = -s.s), l = (m = T.length) - (f = w.length), l > 0) for (; l--; w[f++] = 0) ;
    for (l = Ce - 1; m > p; ) {
      if (w[--m] < T[m]) {
        for (f = m; f && !w[--f]; w[f] = l) ;
        --w[f], w[m] += Ce;
      }
      w[m] -= T[m];
    }
    for (; w[0] == 0; w.splice(0, 1), --b) ;
    return w[0] ? B(s, w, b) : (s.s = o == 3 ? -1 : 1, s.c = [s.e = 0], s);
  }, r.modulo = r.mod = function(s, l) {
    var f, m, h = this;
    return s = new x(s, l), !h.c || !s.s || s.c && !s.c[0] ? new x(NaN) : !s.c || h.c && !h.c[0] ? new x(h) : (R == 9 ? (m = s.s, s.s = 1, f = e(h, s, 0, 3), s.s = m, f.s *= m) : f = e(h, s, 0, R), s = h.minus(f.times(s)), !s.c[0] && R == 1 && (s.s = h.s), s);
  }, r.multipliedBy = r.times = function(s, l) {
    var f, m, h, d, v, p, y, b, w, T, G, D, Z, K, ie, j = this, V = j.c, fe = (s = new x(s, l)).c;
    if (!V || !fe || !V[0] || !fe[0])
      return !j.s || !s.s || V && !V[0] && !fe || fe && !fe[0] && !V ? s.c = s.e = s.s = null : (s.s *= j.s, !V || !fe ? s.c = s.e = null : (s.c = [0], s.e = 0)), s;
    for (m = Te(j.e / q) + Te(s.e / q), s.s *= j.s, y = V.length, T = fe.length, y < T && (Z = V, V = fe, fe = Z, h = y, y = T, T = h), h = y + T, Z = []; h--; Z.push(0)) ;
    for (K = Ce, ie = Ve, h = T; --h >= 0; ) {
      for (f = 0, G = fe[h] % ie, D = fe[h] / ie | 0, v = y, d = h + v; d > h; )
        b = V[--v] % ie, w = V[v] / ie | 0, p = D * b + w * G, b = G * b + p % ie * ie + Z[d] + f, f = (b / K | 0) + (p / ie | 0) + D * w, Z[d--] = b % K;
      Z[d] = f;
    }
    return f ? ++m : Z.splice(0, 1), B(s, Z, m);
  }, r.negated = function() {
    var s = new x(this);
    return s.s = -s.s || null, s;
  }, r.plus = function(s, l) {
    var f, m = this, h = m.s;
    if (s = new x(s, l), l = s.s, !h || !l) return new x(NaN);
    if (h != l)
      return s.s = -l, m.minus(s);
    var d = m.e / q, v = s.e / q, p = m.c, y = s.c;
    if (!d || !v) {
      if (!p || !y) return new x(h / 0);
      if (!p[0] || !y[0]) return y[0] ? s : new x(p[0] ? m : h * 0);
    }
    if (d = Te(d), v = Te(v), p = p.slice(), h = d - v) {
      for (h > 0 ? (v = d, f = y) : (h = -h, f = p), f.reverse(); h--; f.push(0)) ;
      f.reverse();
    }
    for (h = p.length, l = y.length, h - l < 0 && (f = y, y = p, p = f, l = h), h = 0; l; )
      h = (p[--l] = p[l] + y[l] + h) / Ce | 0, p[l] = Ce === p[l] ? 0 : p[l] % Ce;
    return h && (p = [h].concat(p), ++v), B(s, p, v);
  }, r.precision = r.sd = function(s, l) {
    var f, m, h, d = this;
    if (s != null && s !== !!s)
      return se(s, 1, we), l == null ? l = o : se(l, 0, 8), z(new x(d), s, l);
    if (!(f = d.c)) return null;
    if (h = f.length - 1, m = h * q + 1, h = f[h]) {
      for (; h % 10 == 0; h /= 10, m--) ;
      for (h = f[0]; h >= 10; h /= 10, m++) ;
    }
    return s && d.e + 1 > m && (m = d.e + 1), m;
  }, r.shiftedBy = function(s) {
    return se(s, -9007199254740991, Ui), this.times("1e" + s);
  }, r.squareRoot = r.sqrt = function() {
    var s, l, f, m, h, d = this, v = d.c, p = d.s, y = d.e, b = a + 4, w = new x("0.5");
    if (p !== 1 || !v || !v[0])
      return new x(!p || p < 0 && (!v || v[0]) ? NaN : v ? d : 1 / 0);
    if (p = Math.sqrt(+W(d)), p == 0 || p == 1 / 0 ? (l = Se(v), (l.length + y) % 2 == 0 && (l += "0"), p = Math.sqrt(+l), y = Te((y + 1) / 2) - (y < 0 || y % 2), p == 1 / 0 ? l = "5e" + y : (l = p.toExponential(), l = l.slice(0, l.indexOf("e") + 1) + y), f = new x(l)) : f = new x(p + ""), f.c[0]) {
      for (y = f.e, p = y + b, p < 3 && (p = 0); ; )
        if (h = f, f = w.times(h.plus(e(d, h, b, 1))), Se(h.c).slice(0, p) === (l = Se(f.c)).slice(0, p))
          if (f.e < y && --p, l = l.slice(p - 3, p + 1), l == "9999" || !m && l == "4999") {
            if (!m && (z(h, h.e + a + 2, 0), h.times(h).eq(d))) {
              f = h;
              break;
            }
            b += 4, p += 4, m = 1;
          } else {
            (!+l || !+l.slice(1) && l.charAt(0) == "5") && (z(f, f.e + a + 2, 1), s = !f.times(f).eq(d));
            break;
          }
    }
    return z(f, f.e + a + 1, o, s);
  }, r.toExponential = function(s, l) {
    return s != null && (se(s, 0, we), s++), N(this, s, l, 1);
  }, r.toFixed = function(s, l) {
    return s != null && (se(s, 0, we), s = s + this.e + 1), N(this, s, l);
  }, r.toFormat = function(s, l, f) {
    var m, h = this;
    if (f == null)
      s != null && l && typeof l == "object" ? (f = l, l = null) : s && typeof s == "object" ? (f = s, s = l = null) : f = I;
    else if (typeof f != "object")
      throw Error(pe + "Argument not an object: " + f);
    if (m = h.toFixed(s, l), h.c) {
      var d, v = m.split("."), p = +f.groupSize, y = +f.secondaryGroupSize, b = f.groupSeparator || "", w = v[0], T = v[1], G = h.s < 0, D = G ? w.slice(1) : w, Z = D.length;
      if (y && (d = p, p = y, y = d, Z -= d), p > 0 && Z > 0) {
        for (d = Z % p || p, w = D.substr(0, d); d < Z; d += p) w += b + D.substr(d, p);
        y > 0 && (w += b + D.slice(d)), G && (w = "-" + w);
      }
      m = T ? w + (f.decimalSeparator || "") + ((y = +f.fractionGroupSize) ? T.replace(
        new RegExp("\\d{" + y + "}\\B", "g"),
        "$&" + (f.fractionGroupSeparator || "")
      ) : T) : w;
    }
    return (f.prefix || "") + m + (f.suffix || "");
  }, r.toFraction = function(s) {
    var l, f, m, h, d, v, p, y, b, w, T, G, D = this, Z = D.c;
    if (s != null && (p = new x(s), !p.isInteger() && (p.c || p.s !== 1) || p.lt(u)))
      throw Error(pe + "Argument " + (p.isInteger() ? "out of range: " : "not an integer: ") + W(p));
    if (!Z) return new x(D);
    for (l = new x(u), b = f = new x(u), m = y = new x(u), G = Se(Z), d = l.e = G.length - D.e - 1, l.c[0] = ti[(v = d % q) < 0 ? q + v : v], s = !s || p.comparedTo(l) > 0 ? d > 0 ? l : b : p, v = _, _ = 1 / 0, p = new x(G), y.c[0] = 0; w = e(p, l, 0, 1), h = f.plus(w.times(m)), h.comparedTo(s) != 1; )
      f = m, m = h, b = y.plus(w.times(h = b)), y = h, l = p.minus(w.times(h = l)), p = h;
    return h = e(s.minus(f), m, 0, 1), y = y.plus(h.times(b)), f = f.plus(h.times(m)), y.s = b.s = D.s, d = d * 2, T = e(b, m, d, o).minus(D).abs().comparedTo(
      e(y, f, d, o).minus(D).abs()
    ) < 1 ? [b, m] : [y, f], _ = v, T;
  }, r.toNumber = function() {
    return +W(this);
  }, r.toPrecision = function(s, l) {
    return s != null && se(s, 1, we), N(this, s, l, 2);
  }, r.toString = function(s) {
    var l, f = this, m = f.s, h = f.e;
    return h === null ? m ? (l = "Infinity", m < 0 && (l = "-" + l)) : l = "NaN" : (s == null ? l = h <= g || h >= c ? It(Se(f.c), h) : ze(Se(f.c), h, "0") : s === 10 && O ? (f = z(new x(f), a + h + 1, o), l = ze(Se(f.c), f.e, "0")) : (se(s, 2, C.length, "Base"), l = t(ze(Se(f.c), h, "0"), 10, s, m, !0)), m < 0 && f.c[0] && (l = "-" + l)), l;
  }, r.valueOf = r.toJSON = function() {
    return W(this);
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, i != null && x.set(i), x;
}
function Te(i) {
  var e = i | 0;
  return i > 0 || i === e ? e : e - 1;
}
function Se(i) {
  for (var e, t, n = 1, r = i.length, u = i[0] + ""; n < r; ) {
    for (e = i[n++] + "", t = q - e.length; t--; e = "0" + e) ;
    u += e;
  }
  for (r = u.length; u.charCodeAt(--r) === 48; ) ;
  return u.slice(0, r + 1 || 1);
}
function nt(i, e) {
  var t, n, r = i.c, u = e.c, a = i.s, o = e.s, g = i.e, c = e.e;
  if (!a || !o) return null;
  if (t = r && !r[0], n = u && !u[0], t || n) return t ? n ? 0 : -o : a;
  if (a != o) return a;
  if (t = a < 0, n = g == c, !r || !u) return n ? 0 : !r ^ t ? 1 : -1;
  if (!n) return g > c ^ t ? 1 : -1;
  for (o = (g = r.length) < (c = u.length) ? g : c, a = 0; a < o; a++) if (r[a] != u[a]) return r[a] > u[a] ^ t ? 1 : -1;
  return g == c ? 0 : g > c ^ t ? 1 : -1;
}
function se(i, e, t, n) {
  if (i < e || i > t || i !== xe(i))
    throw Error(pe + (n || "Argument") + (typeof i == "number" ? i < e || i > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(i));
}
function Pt(i) {
  var e = i.c.length - 1;
  return Te(i.e / q) == e && i.c[e] % 2 != 0;
}
function It(i, e) {
  return (i.length > 1 ? i.charAt(0) + "." + i.slice(1) : i) + (e < 0 ? "e" : "e+") + e;
}
function ze(i, e, t) {
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
var We = cn(), $r = class {
  constructor(i) {
    A(this, "key");
    A(this, "left", null);
    A(this, "right", null);
    this.key = i;
  }
}, yt = class extends $r {
  constructor(i) {
    super(i);
  }
}, es = class {
  constructor() {
    A(this, "size", 0);
    A(this, "modificationCount", 0);
    A(this, "splayCount", 0);
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
        let c = a.left;
        if (c == null || (g = o(c.key, i), g > 0 && (a.left = c.right, c.right = a, a = c, c = a.left, c == null)))
          break;
        t == null ? n = a : t.left = a, t = a, a = c;
      } else if (g < 0) {
        let c = a.right;
        if (c == null || (g = o(c.key, i), g < 0 && (a.right = c.left, c.left = a, a = c, c = a.right, c == null)))
          break;
        r == null ? u = a : r.right = a, r = a, a = c;
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
}, Ji, $i, Ut = class Et extends es {
  constructor(t, n) {
    super();
    A(this, "root", null);
    A(this, "compare");
    A(this, "validKey");
    A(this, Ji, "[object Set]");
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
    return n != 0 && this.addNewRoot(new yt(t), n), this;
  }
  addAndReturn(t) {
    const n = this.splay(t);
    return n != 0 && this.addNewRoot(new yt(t), n), this.root.key;
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
    const n = new Et(this.compare, this.validKey), r = this.modificationCount;
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
    const n = new Et(this.compare, this.validKey);
    for (const r of this)
      t.has(r) && n.add(r);
    return n;
  }
  difference(t) {
    const n = new Et(this.compare, this.validKey);
    for (const r of this)
      t.has(r) || n.add(r);
    return n;
  }
  union(t) {
    const n = this.clone();
    return n.addAll(t), n;
  }
  clone() {
    const t = new Et(this.compare, this.validKey);
    return t.size = this.size, t.root = this.copyNode(this.root), t;
  }
  copyNode(t) {
    if (t == null) return null;
    function n(u, a) {
      let o, g;
      do {
        if (o = u.left, g = u.right, o != null) {
          const c = new yt(o.key);
          a.left = c, n(o, c);
        }
        if (g != null) {
          const c = new yt(g.key);
          a.right = c, u = g, a = c;
        }
      } while (g != null);
    }
    const r = new yt(t.key);
    return n(t, r), r;
  }
  toSet() {
    return this.clone();
  }
  entries() {
    return new is(this.wrap());
  }
  keys() {
    return this[Symbol.iterator]();
  }
  values() {
    return this[Symbol.iterator]();
  }
  [($i = Symbol.iterator, Ji = Symbol.toStringTag, $i)]() {
    return new ts(this.wrap());
  }
}, hn = class {
  constructor(i) {
    A(this, "tree");
    A(this, "path", new Array());
    A(this, "modificationCount", null);
    A(this, "splayCount");
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
}, ts = class extends hn {
  getValue(i) {
    return i.key;
  }
}, is = class extends hn {
  getValue(i) {
    return [i.key, i.key];
  }
}, dn = (i) => () => i, oi = (i) => {
  const e = i ? (t, n) => n.minus(t).abs().isLessThanOrEqualTo(i) : dn(!1);
  return (t, n) => e(t, n) ? 0 : t.comparedTo(n);
};
function ns(i) {
  const e = i ? (t, n, r, u, a) => t.exponentiatedBy(2).isLessThanOrEqualTo(
    u.minus(n).exponentiatedBy(2).plus(a.minus(r).exponentiatedBy(2)).times(i)
  ) : dn(!1);
  return (t, n, r) => {
    const u = t.x, a = t.y, o = r.x, g = r.y, c = a.minus(g).times(n.x.minus(o)).minus(u.minus(o).times(n.y.minus(g)));
    return e(c, u, a, o, g) ? 0 : c.comparedTo(0);
  };
}
var rs = (i) => i, ss = (i) => {
  if (i) {
    const e = new Ut(oi(i)), t = new Ut(oi(i)), n = (u, a) => a.addAndReturn(u), r = (u) => ({
      x: n(u.x, e),
      y: n(u.y, t)
    });
    return r({ x: new We(0), y: new We(0) }), r;
  }
  return rs;
}, li = (i) => ({
  set: (e) => {
    Fe = li(e);
  },
  reset: () => li(i),
  compare: oi(i),
  snap: ss(i),
  orient: ns(i)
}), Fe = li(), vt = (i, e) => i.ll.x.isLessThanOrEqualTo(e.x) && e.x.isLessThanOrEqualTo(i.ur.x) && i.ll.y.isLessThanOrEqualTo(e.y) && e.y.isLessThanOrEqualTo(i.ur.y), ui = (i, e) => {
  if (e.ur.x.isLessThan(i.ll.x) || i.ur.x.isLessThan(e.ll.x) || e.ur.y.isLessThan(i.ll.y) || i.ur.y.isLessThan(e.ll.y))
    return null;
  const t = i.ll.x.isLessThan(e.ll.x) ? e.ll.x : i.ll.x, n = i.ur.x.isLessThan(e.ur.x) ? i.ur.x : e.ur.x, r = i.ll.y.isLessThan(e.ll.y) ? e.ll.y : i.ll.y, u = i.ur.y.isLessThan(e.ur.y) ? i.ur.y : e.ur.y;
  return { ll: { x: t, y: r }, ur: { x: n, y: u } };
}, Wt = (i, e) => i.x.times(e.y).minus(i.y.times(e.x)), gn = (i, e) => i.x.times(e.x).plus(i.y.times(e.y)), qt = (i) => gn(i, i).sqrt(), os = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return Wt(r, n).div(qt(r)).div(qt(n));
}, ls = (i, e, t) => {
  const n = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, r = { x: t.x.minus(i.x), y: t.y.minus(i.y) };
  return gn(r, n).div(qt(r)).div(qt(n));
}, qi = (i, e, t) => e.y.isZero() ? null : { x: i.x.plus(e.x.div(e.y).times(t.minus(i.y))), y: t }, Fi = (i, e, t) => e.x.isZero() ? null : { x: t, y: i.y.plus(e.y.div(e.x).times(t.minus(i.x))) }, us = (i, e, t, n) => {
  if (e.x.isZero()) return Fi(t, n, i.x);
  if (n.x.isZero()) return Fi(i, e, t.x);
  if (e.y.isZero()) return qi(t, n, i.y);
  if (n.y.isZero()) return qi(i, e, t.y);
  const r = Wt(e, n);
  if (r.isZero()) return null;
  const u = { x: t.x.minus(i.x), y: t.y.minus(i.y) }, a = Wt(u, e).div(r), o = Wt(u, n).div(r), g = i.x.plus(o.times(e.x)), c = t.x.plus(a.times(n.x)), E = i.y.plus(o.times(e.y)), _ = t.y.plus(a.times(n.y)), M = g.plus(c).div(2), R = E.plus(_).div(2);
  return { x: M, y: R };
}, Ae = class mn {
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(e, t) {
    A(this, "point");
    A(this, "isLeft");
    A(this, "segment");
    A(this, "otherSE");
    A(this, "consumedBy");
    e.events === void 0 ? e.events = [this] : e.events.push(this), this.point = e, this.isLeft = t;
  }
  // for ordering sweep events in the sweep event queue
  static compare(e, t) {
    const n = mn.comparePoints(e.point, t.point);
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
        sine: os(this.point, e.point, u.point),
        cosine: ls(this.point, e.point, u.point)
      });
    };
    return (r, u) => {
      t.has(r) || n(r), t.has(u) || n(u);
      const { sine: a, cosine: o } = t.get(r), { sine: g, cosine: c } = t.get(u);
      return a.isGreaterThanOrEqualTo(0) && g.isGreaterThanOrEqualTo(0) ? o.isLessThan(c) ? 1 : o.isGreaterThan(c) ? -1 : 0 : a.isLessThan(0) && g.isLessThan(0) ? o.isLessThan(c) ? -1 : o.isGreaterThan(c) ? 1 : 0 : g.isLessThan(a) ? -1 : g.isGreaterThan(a) ? 1 : 0;
    };
  }
}, as = class ai {
  constructor(e) {
    A(this, "events");
    A(this, "poly");
    A(this, "_isExteriorRing");
    A(this, "_enclosingRing");
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
      const c = [o], E = o.point, _ = [];
      for (; a = o, o = g, c.push(o), o.point !== E; )
        for (; ; ) {
          const M = o.getAvailableLinkedEvents();
          if (M.length === 0) {
            const I = c[0].point, C = c[c.length - 1].point;
            throw new Error(
              `Unable to complete output ring starting at [${I.x}, ${I.y}]. Last matching segment found ends at [${C.x}, ${C.y}].`
            );
          }
          if (M.length === 1) {
            g = M[0].otherSE;
            break;
          }
          let R = null;
          for (let I = 0, C = _.length; I < C; I++)
            if (_[I].point === o.point) {
              R = I;
              break;
            }
          if (R !== null) {
            const I = _.splice(R)[0], C = c.splice(I.index);
            C.unshift(C[0].otherSE), t.push(new ai(C.reverse()));
            continue;
          }
          _.push({
            index: c.length,
            point: o.point
          });
          const k = o.getLeftmostComparator(a);
          g = M.sort(k)[0].otherSE;
          break;
        }
      t.push(new ai(c));
    }
    return t;
  }
  getGeom() {
    let e = this.events[0].point;
    const t = [e];
    for (let c = 1, E = this.events.length - 1; c < E; c++) {
      const _ = this.events[c].point, M = this.events[c + 1].point;
      Fe.orient(_, e, M) !== 0 && (t.push(_), e = _);
    }
    if (t.length === 1) return null;
    const n = t[0], r = t[1];
    Fe.orient(n, e, r) === 0 && t.shift(), t.push(t[0]);
    const u = this.isExteriorRing() ? 1 : -1, a = this.isExteriorRing() ? 0 : t.length - 1, o = this.isExteriorRing() ? t.length : -1, g = [];
    for (let c = a; c != o; c += u)
      g.push([t[c].x.toNumber(), t[c].y.toNumber()]);
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
      Ae.compare(e, g) > 0 && (e = g);
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
}, ji = class {
  constructor(i) {
    A(this, "exteriorRing");
    A(this, "interiorRings");
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
}, fs = class {
  constructor(i) {
    A(this, "rings");
    A(this, "polys");
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
        if (u.isExteriorRing()) e.push(new ji(u));
        else {
          const a = u.enclosingRing();
          a != null && a.poly || e.push(new ji(a)), (t = a == null ? void 0 : a.poly) == null || t.addInterior(u);
        }
    }
    return e;
  }
}, cs = class {
  constructor(i, e = jt.compare) {
    A(this, "queue");
    A(this, "tree");
    A(this, "segments");
    this.queue = i, this.tree = new Ut(e), this.segments = [];
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
          for (let c = 0, E = g.length; c < E; c++)
            t.push(g[c]);
        }
      }
      let a = null;
      if (r) {
        const o = r.getIntersection(e);
        if (o !== null && (e.isAnEndpoint(o) || (a = o), !r.isAnEndpoint(o))) {
          const g = this._splitSafely(r, o);
          for (let c = 0, E = g.length; c < E; c++)
            t.push(g[c]);
        }
      }
      if (u !== null || a !== null) {
        let o = null;
        u === null ? o = a : a === null ? o = u : o = Ae.comparePoints(
          u,
          a
        ) <= 0 ? u : a, this.queue.delete(e.rightSE), t.push(e.rightSE);
        const g = e.split(o);
        for (let c = 0, E = g.length; c < E; c++)
          t.push(g[c]);
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
}, hs = class {
  constructor() {
    A(this, "type");
    A(this, "numMultiPolys");
  }
  run(i, e, t) {
    Lt.type = i;
    const n = [new Hi(e, !0)];
    for (let c = 0, E = t.length; c < E; c++)
      n.push(new Hi(t[c], !1));
    if (Lt.numMultiPolys = n.length, Lt.type === "difference") {
      const c = n[0];
      let E = 1;
      for (; E < n.length; )
        ui(n[E].bbox, c.bbox) !== null ? E++ : n.splice(E, 1);
    }
    if (Lt.type === "intersection")
      for (let c = 0, E = n.length; c < E; c++) {
        const _ = n[c];
        for (let M = c + 1, R = n.length; M < R; M++)
          if (ui(_.bbox, n[M].bbox) === null) return [];
      }
    const r = new Ut(Ae.compare);
    for (let c = 0, E = n.length; c < E; c++) {
      const _ = n[c].getSweepEvents();
      for (let M = 0, R = _.length; M < R; M++)
        r.add(_[M]);
    }
    const u = new cs(r);
    let a = null;
    for (r.size != 0 && (a = r.first(), r.delete(a)); a; ) {
      const c = u.process(a);
      for (let E = 0, _ = c.length; E < _; E++) {
        const M = c[E];
        M.consumedBy === void 0 && r.add(M);
      }
      r.size != 0 ? (a = r.first(), r.delete(a)) : a = null;
    }
    Fe.reset();
    const o = as.factory(u.segments);
    return new fs(o).getGeom();
  }
}, Lt = new hs(), Ft = Lt, ds = 0, jt = class Gt {
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, t, n, r) {
    A(this, "id");
    A(this, "leftSE");
    A(this, "rightSE");
    A(this, "rings");
    A(this, "windings");
    A(this, "ringOut");
    A(this, "consumedBy");
    A(this, "prev");
    A(this, "_prevInResult");
    A(this, "_beforeState");
    A(this, "_afterState");
    A(this, "_isInResult");
    this.id = ++ds, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = n, this.windings = r;
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
    const o = e.leftSE.point.y, g = t.leftSE.point.y, c = e.rightSE.point.y, E = t.rightSE.point.y;
    if (n.isLessThan(r)) {
      if (g.isLessThan(o) && g.isLessThan(c)) return 1;
      if (g.isGreaterThan(o) && g.isGreaterThan(c)) return -1;
      const _ = e.comparePoint(t.leftSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
      const M = t.comparePoint(e.rightSE.point);
      return M !== 0 ? M : -1;
    }
    if (n.isGreaterThan(r)) {
      if (o.isLessThan(g) && o.isLessThan(E)) return -1;
      if (o.isGreaterThan(g) && o.isGreaterThan(E)) return 1;
      const _ = t.comparePoint(e.leftSE.point);
      if (_ !== 0) return _;
      const M = e.comparePoint(t.rightSE.point);
      return M < 0 ? 1 : M > 0 ? -1 : 1;
    }
    if (o.isLessThan(g)) return -1;
    if (o.isGreaterThan(g)) return 1;
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
      const _ = c.minus(o), M = u.minus(n), R = E.minus(g), k = a.minus(r);
      if (_.isGreaterThan(M) && R.isLessThan(k)) return 1;
      if (_.isLessThan(M) && R.isGreaterThan(k)) return -1;
    }
    return u.isGreaterThan(a) ? 1 : u.isLessThan(a) || c.isLessThan(E) ? -1 : c.isGreaterThan(E) ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  }
  static fromRing(e, t, n) {
    let r, u, a;
    const o = Ae.comparePoints(e, t);
    if (o < 0)
      r = e, u = t, a = 1;
    else if (o > 0)
      r = t, u = e, a = -1;
    else
      throw new Error(
        `Tried to create degenerate segment at [${e.x}, ${e.y}]`
      );
    const g = new Ae(r, !0), c = new Ae(u, !1);
    return new Gt(g, c, [n], [a]);
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
    return Fe.orient(this.leftSE.point, e, this.rightSE.point);
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
    const t = this.bbox(), n = e.bbox(), r = ui(t, n);
    if (r === null) return null;
    const u = this.leftSE.point, a = this.rightSE.point, o = e.leftSE.point, g = e.rightSE.point, c = vt(t, o) && this.comparePoint(o) === 0, E = vt(n, u) && e.comparePoint(u) === 0, _ = vt(t, g) && this.comparePoint(g) === 0, M = vt(n, a) && e.comparePoint(a) === 0;
    if (E && c)
      return M && !_ ? a : !M && _ ? g : null;
    if (E)
      return _ && u.x.eq(g.x) && u.y.eq(g.y) ? null : u;
    if (c)
      return M && a.x.eq(o.x) && a.y.eq(o.y) ? null : o;
    if (M && _) return null;
    if (M) return a;
    if (_) return g;
    const R = us(u, this.vector(), o, e.vector());
    return R === null || !vt(r, R) ? null : Fe.snap(R);
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
    const o = new Gt(
      r,
      a,
      this.rings.slice(),
      this.windings.slice()
    );
    return Ae.comparePoints(o.leftSE.point, o.rightSE.point) > 0 && o.swapEvents(), Ae.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n && (r.checkForConsuming(), u.checkForConsuming()), t;
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
        const o = n.rings[u], g = n.windings[u], c = t.rings.indexOf(o);
        c === -1 ? (t.rings.push(o), t.windings.push(g)) : t.windings[c] += g;
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
      const c = this.rings[o], E = this.windings[o], _ = t.indexOf(c);
      _ === -1 ? (t.push(c), n.push(E)) : n[_] += E;
    }
    const u = [], a = [];
    for (let o = 0, g = t.length; o < g; o++) {
      if (n[o] === 0) continue;
      const c = t[o], E = c.poly;
      if (a.indexOf(E) === -1)
        if (c.isExterior) u.push(E);
        else {
          a.indexOf(E) === -1 && a.push(E);
          const _ = u.indexOf(c.poly);
          _ !== -1 && u.splice(_, 1);
        }
    }
    for (let o = 0, g = u.length; o < g; o++) {
      const c = u[o].multiPoly;
      r.indexOf(c) === -1 && r.push(c);
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
}, Zi = class {
  constructor(i, e, t) {
    A(this, "poly");
    A(this, "isExterior");
    A(this, "segments");
    A(this, "bbox");
    if (!Array.isArray(i) || i.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = t, this.segments = [], typeof i[0][0] != "number" || typeof i[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const n = Fe.snap({ x: new We(i[0][0]), y: new We(i[0][1]) });
    this.bbox = {
      ll: { x: n.x, y: n.y },
      ur: { x: n.x, y: n.y }
    };
    let r = n;
    for (let u = 1, a = i.length; u < a; u++) {
      if (typeof i[u][0] != "number" || typeof i[u][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      const o = Fe.snap({ x: new We(i[u][0]), y: new We(i[u][1]) });
      o.x.eq(r.x) && o.y.eq(r.y) || (this.segments.push(jt.fromRing(r, o, this)), o.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = o.x), o.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = o.y), o.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = o.x), o.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = o.y), r = o);
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
}, gs = class {
  constructor(i, e) {
    A(this, "multiPoly");
    A(this, "exteriorRing");
    A(this, "interiorRings");
    A(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Zi(i[0], this, !0), this.bbox = {
      ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y },
      ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y }
    }, this.interiorRings = [];
    for (let t = 1, n = i.length; t < n; t++) {
      const r = new Zi(i[t], this, !1);
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
}, Hi = class {
  constructor(i, e) {
    A(this, "isSubject");
    A(this, "polys");
    A(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof i[0][0][0] == "number" && (i = [i]);
    } catch {
    }
    this.polys = [], this.bbox = {
      ll: { x: new We(Number.POSITIVE_INFINITY), y: new We(Number.POSITIVE_INFINITY) },
      ur: { x: new We(Number.NEGATIVE_INFINITY), y: new We(Number.NEGATIVE_INFINITY) }
    };
    for (let t = 0, n = i.length; t < n; t++) {
      const r = new gs(i[t], this);
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
}, ms = (i, ...e) => Ft.run("union", i, e), ps = (i, ...e) => Ft.run("difference", i, e);
Fe.set;
function pn(i, e, t) {
  if (i !== null)
    for (var n, r, u, a, o, g, c, E = 0, _ = 0, M, R = i.type, k = R === "FeatureCollection", I = R === "Feature", C = k ? i.features.length : 1, O = 0; O < C; O++) {
      c = k ? i.features[O].geometry : I ? i.geometry : i, M = c ? c.type === "GeometryCollection" : !1, o = M ? c.geometries.length : 1;
      for (var x = 0; x < o; x++) {
        var N = 0, P = 0;
        if (a = M ? c.geometries[x] : c, a !== null) {
          g = a.coordinates;
          var B = a.type;
          switch (E = 0, B) {
            case null:
              break;
            case "Point":
              if (e(
                g,
                _,
                O,
                N,
                P
              ) === !1)
                return !1;
              _++, N++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < g.length; n++) {
                if (e(
                  g[n],
                  _,
                  O,
                  N,
                  P
                ) === !1)
                  return !1;
                _++, B === "MultiPoint" && N++;
              }
              B === "LineString" && N++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < g.length; n++) {
                for (r = 0; r < g[n].length - E; r++) {
                  if (e(
                    g[n][r],
                    _,
                    O,
                    N,
                    P
                  ) === !1)
                    return !1;
                  _++;
                }
                B === "MultiLineString" && N++, B === "Polygon" && P++;
              }
              B === "Polygon" && N++;
              break;
            case "MultiPolygon":
              for (n = 0; n < g.length; n++) {
                for (P = 0, r = 0; r < g[n].length; r++) {
                  for (u = 0; u < g[n][r].length - E; u++) {
                    if (e(
                      g[n][r][u],
                      _,
                      O,
                      N,
                      P
                    ) === !1)
                      return !1;
                    _++;
                  }
                  P++;
                }
                N++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < a.geometries.length; n++)
                if (pn(a.geometries[n], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function hi(i, e) {
  var t, n, r, u, a, o, g, c, E, _, M = 0, R = i.type === "FeatureCollection", k = i.type === "Feature", I = R ? i.features.length : 1;
  for (t = 0; t < I; t++) {
    for (o = R ? i.features[t].geometry : k ? i.geometry : i, c = R ? i.features[t].properties : k ? i.properties : {}, E = R ? i.features[t].bbox : k ? i.bbox : void 0, _ = R ? i.features[t].id : k ? i.id : void 0, g = o ? o.type === "GeometryCollection" : !1, a = g ? o.geometries.length : 1, r = 0; r < a; r++) {
      if (u = g ? o.geometries[r] : o, u === null) {
        if (e(
          null,
          M,
          c,
          E,
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
            E,
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
              E,
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
function ys(i, e) {
  hi(i, function(t, n, r, u, a) {
    var o = t === null ? null : t.type;
    switch (o) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          Tt(t, r, { bbox: u, id: a }),
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
    for (var c = 0; c < t.coordinates.length; c++) {
      var E = t.coordinates[c], _ = {
        type: g,
        coordinates: E
      };
      if (e(Tt(_, r), n, c) === !1)
        return !1;
    }
  });
}
function vs(i, e = {}) {
  const t = [];
  if (hi(i, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const n = ms(t[0], ...t.slice(1));
  return n.length === 0 ? null : n.length === 1 ? ci(n[0], e.properties) : fn(n, e.properties);
}
var yn = vs;
function bs(i, e = {}) {
  if (i.bbox != null && e.recompute !== !0)
    return i.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return pn(i, (n) => {
    t[0] > n[0] && (t[0] = n[0]), t[1] > n[1] && (t[1] = n[1]), t[2] < n[0] && (t[2] = n[0]), t[3] < n[1] && (t[3] = n[1]);
  }), t;
}
var Vi = bs;
function ws(i) {
  const e = [];
  if (hi(i, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = i.features[0].properties || {}, n = ps(e[0], ...e.slice(1));
  return n.length === 0 ? null : n.length === 1 ? ci(n[0], t) : fn(n, t);
}
var Es = ws;
function Ls(i) {
  if (!i) throw new Error("geojson is required");
  var e = [];
  return ys(i, function(t) {
    e.push(t);
  }), Mt(e);
}
var _s = Ls;
function Ki(i, e) {
  const t = Es(
    Mt([
      ci([
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
  const n = zt(Vi(i)), r = (n[2] - n[0]) / 360 / 1e3, u = n[0] < -180, a = n[2] > 180, o = _s(i);
  if (o.features.length > 1 && (u || a))
    for (const g of o.features) {
      const c = zt(Vi(g));
      if (a && c[0] < -180 + r)
        for (const E of g.geometry.coordinates)
          for (const _ of E)
            _[0] += 360 - r;
      if (u && c[2] > 180 - r)
        for (const E of g.geometry.coordinates)
          for (const _ of E)
            _[0] -= 360 - r;
    }
  e(
    Mt([
      o.features.length < 2 ? i : yn(o) ?? i,
      t
    ])
  );
}
const Yi = {
  fill: {
    paint: {
      "fill-color": "#000",
      "fill-opacity": 0.1
    },
    filter: ["all", ["==", ["geometry-type"], "Polygon"], ["has", "isMask"]]
  },
  line: {
    layout: {
      "line-cap": "square"
    },
    paint: {
      "line-width": ["case", ["==", ["geometry-type"], "Polygon"], 2, 3],
      "line-dasharray": [1, 1],
      "line-color": "#3170fe"
    },
    filter: ["!", ["has", "isMask"]]
  }
}, At = "mtlr-gc-full-geom", Qi = "mtlr-gc-full-geom-fill", Xi = "mtlr-gc-full-geom-line";
function Ss(i, e, t = !0, n = !0, r = {}, u = {}, a = Yi) {
  let o;
  const g = [];
  let c, E, _;
  function M() {
    if (!i.loaded) {
      i.once("load", M);
      return;
    }
    const C = a ? a === !0 ? Yi : a : void 0;
    if (!(C != null && C.fill) && !(C != null && C.line))
      return;
    const O = i.getSource(At);
    if (O)
      O.setData(_ ?? Mt([]));
    else if (_)
      i.addSource(At, {
        type: "geojson",
        data: _
      });
    else
      return;
    !i.getLayer(Qi) && (C != null && C.fill) && i.addLayer({
      ...C == null ? void 0 : C.fill,
      id: Qi,
      type: "fill",
      source: At
    }), !i.getLayer(Xi) && (C != null && C.line) && i.addLayer({
      ...C == null ? void 0 : C.line,
      id: Xi,
      type: "line",
      source: At
    });
  }
  function R(C) {
    _ = C, M();
  }
  i.on("styledata", () => {
    setTimeout(() => {
      _ && M();
    });
  });
  const k = (C) => {
    o == null || o({
      type: "mapClick",
      coordinates: [C.lngLat.lng, C.lngLat.lat]
    });
  };
  function I(C = !1) {
    if (!e)
      throw new Error();
    const O = document.createElement("div");
    return C && O.classList.add("marker-interactive"), new Mr({
      props: { displayIn: "maplibre" },
      target: O
    }), new e.Marker({ element: O, offset: [1, -13] });
  }
  return {
    setEventHandler(C) {
      C ? (o = C, i.on("click", k)) : (o = void 0, i.off("click", k));
    },
    flyTo(C, O) {
      i.flyTo({ center: C, ...O ? { zoom: O } : {}, ...r });
    },
    fitBounds(C, O, x) {
      i.fitBounds(
        [
          [C[0], C[1]],
          [C[2], C[3]]
        ],
        { padding: O, ...x ? { maxZoom: x } : {}, ...u }
      );
    },
    indicateReverse(C) {
      i.getCanvasContainer().style.cursor = C ? "crosshair" : "";
    },
    setReverseMarker(C) {
      !e || !t || (E ? C ? E.setLngLat(C) : (E.remove(), E = void 0) : C && (t instanceof Function ? E = t(i) ?? void 0 : (E = (typeof t == "object" ? new e.Marker(t) : I()).setLngLat(C).addTo(i), E.getElement().classList.add("marker-reverse"))));
    },
    setFeatures(C, O, x) {
      for (const N of g)
        N.remove();
      if (g.length = 0, R(void 0), !!e) {
        e: if (O) {
          let N = !1;
          if (O.geometry.type === "GeometryCollection") {
            const P = O.geometry.geometries.filter(
              (B) => B.type === "Polygon" || B.type === "MultiPolygon"
            );
            t: if (P.length > 0) {
              const B = yn(
                Mt(P.map((z) => Tt(z)))
              );
              if (!B)
                break t;
              Ki(
                {
                  ...O,
                  geometry: B.geometry
                },
                R
              ), N = !0;
            } else {
              const B = O.geometry.geometries.filter(
                (z) => z.type === "LineString" || z.type === "MultiLineString"
              );
              B.length > 0 && (R({
                ...O,
                geometry: { type: "GeometryCollection", geometries: B }
              }), N = !0);
            }
          }
          if (!N) {
            if (O.geometry.type === "Polygon" || O.geometry.type === "MultiPolygon")
              Ki(O, R);
            else if (O.geometry.type === "LineString" || O.geometry.type === "MultiLineString") {
              R(O);
              break e;
            }
          }
          if (!x && !O.geometry.type.endsWith("Point"))
            break e;
          if (t instanceof Function) {
            const P = t(i, O);
            P && g.push(P);
          } else t && g.push(
            typeof t == "object" ? new e.Marker(t) : I().setLngLat(O.center).addTo(i)
          );
        }
        if (n)
          for (const N of C ?? []) {
            if (N === O)
              continue;
            let P;
            if (n instanceof Function) {
              if (P = n(i, N), !P)
                continue;
            } else
              P = (typeof n == "object" ? new e.Marker(n) : I(!0)).setLngLat(N.center).setPopup(
                new e.Popup({
                  offset: [1, -27],
                  closeButton: !1,
                  closeOnMove: !0,
                  className: "maptiler-gc-popup"
                }).setText(
                  N.place_type[0] === "reverse" ? N.place_name : N.place_name.replace(/,.*/, "")
                )
              ).addTo(i);
            const B = P.getElement();
            B.addEventListener("click", (z) => {
              z.stopPropagation(), o == null || o({ type: "markerClick", id: N.id });
            }), B.addEventListener("mouseenter", () => {
              o == null || o({ type: "markerMouseEnter", id: N.id }), P.togglePopup();
            }), B.addEventListener("mouseleave", () => {
              o == null || o({ type: "markerMouseLeave", id: N.id }), P.togglePopup();
            }), g.push(P);
          }
      }
    },
    setSelectedMarker(C) {
      c && c.getElement().classList.toggle("marker-selected", !1), c = C > -1 ? g[C] : void 0, c == null || c.getElement().classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const C = i.getCenter();
      return [i.getZoom(), C.lng, C.lat];
    }
  };
}
function xs(i, e, t) {
  var k, I, C;
  class n {
    constructor(x, N) {
      A(this, "type");
      A(this, "target");
      this.type = N, this.target = x;
    }
  }
  class r extends n {
    constructor(N, P) {
      super(N, "select");
      A(this, "feature");
      Object.assign(this, P);
    }
  }
  class u extends n {
    constructor(N, P) {
      super(N, "featureslisted");
      A(this, "features");
      this.features = P;
    }
  }
  class a extends n {
    constructor(N, P) {
      super(N, "featuresmarked");
      A(this, "features");
      this.features = P;
    }
  }
  class o extends n {
    constructor(N, P) {
      super(N, "optionsvisibilitychange");
      A(this, "optionsVisible");
      this.optionsVisible = P;
    }
  }
  class g extends n {
    constructor(N, P) {
      super(N, "pick");
      A(this, "feature");
      this.feature = P;
    }
  }
  class c extends n {
    constructor(N, P) {
      super(N, "querychange");
      A(this, "query");
      this.query = P;
    }
  }
  class E extends n {
    constructor(N, P, B) {
      super(N, "response");
      A(this, "url");
      A(this, "featureCollection");
      this.url = P, this.featureCollection = B;
    }
  }
  class _ extends n {
    constructor(N, P) {
      super(N, "reversetoggle");
      A(this, "reverse");
      this.reverse = P;
    }
  }
  class M extends i {
    constructor(N = {}) {
      super();
      kt(this, k);
      kt(this, I);
      kt(this, C);
      gt(this, I, N);
    }
    onAddInt(N) {
      const P = document.createElement("div");
      P.className = "mapboxgl-ctrl-geocoder mapboxgl-ctrl maplibregl-ctrl-geocoder maplibregl-ctrl mapboxgl-ctrl-group";
      const {
        marker: B,
        showResultMarkers: z,
        flyTo: W,
        fullGeometryStyle: s,
        ...l
      } = oe(this, I), f = typeof W == "boolean" ? {} : W, h = {
        mapController: Ss(
          N,
          e,
          B,
          z,
          f,
          f,
          s
        ),
        flyTo: W === void 0 ? !0 : !!W,
        apiKey: "",
        // just to satisfy apiKey; TODO find a better solution
        ...t == null ? void 0 : t(N, P),
        ...l
      };
      return h.apiKey || console.warn(
        "No MapTiler Cloud API key was provided, some or all geocoding requests may fail"
      ), gt(this, k, new Xr({ target: P, props: h })), oe(this, k).$on("select", (d) => {
        this.fire(new r(this, d.detail));
      }), oe(this, k).$on("pick", (d) => {
        this.fire(new g(this, d.detail.feature));
      }), oe(this, k).$on("featureslisted", (d) => {
        this.fire(new u(this, d.detail.features));
      }), oe(this, k).$on("featuresmarked", (d) => {
        this.fire(new a(this, d.detail.features));
      }), oe(this, k).$on("response", (d) => {
        this.fire(
          new E(
            this,
            d.detail.url,
            d.detail.featureCollection
          )
        );
      }), oe(this, k).$on("optionsvisibilitychange", (d) => {
        this.fire(
          new o(this, d.detail.optionsVisible)
        );
      }), oe(this, k).$on("reversetoggle", (d) => {
        this.fire(new _(this, d.detail.reverse));
      }), oe(this, k).$on("querychange", (d) => {
        this.fire(new c(this, d.detail.query));
      }), gt(this, C, P), P;
    }
    // TODO add backward type compatibility; in MapLibre v4 it returns `this`.
    on(N, P) {
      return super.on(N, P);
    }
    once(N, P) {
      return super.once(N, P);
    }
    off(N, P) {
      return super.off(N, P);
    }
    listens(N) {
      return super.listens(N);
    }
    /**
     * Update the control options.
     *
     * @param options options to update
     */
    setOptions(N) {
      var l;
      Object.assign(oe(this, I), N);
      const {
        marker: P,
        showResultMarkers: B,
        flyTo: z,
        fullGeometryStyle: W,
        ...s
      } = oe(this, I);
      (l = oe(this, k)) == null || l.$set(s);
    }
    /**
     * Set the content of search input box.
     *
     * @param value text to set
     * @param submit perform the search
     */
    setQuery(N, P = !0) {
      var B;
      (B = oe(this, k)) == null || B.setQuery(N, P);
    }
    /**
     * Clear geocoding search results from the map.
     */
    clearMap() {
      var N;
      (N = oe(this, k)) == null || N.clearMap();
    }
    /**
     * Clear search result list.
     */
    clearList() {
      var N;
      (N = oe(this, k)) == null || N.clearList();
    }
    /**
     * Set reverse geocoding mode.
     *
     * @param reverseActive reverse geocoding active
     */
    setReverseMode(N) {
      var P;
      (P = oe(this, k)) == null || P.$set({ reverseActive: N });
    }
    /**
     * Focus the search input box.
     *
     * @param options [FocusOptions](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#options)
     */
    focus(N) {
      var P;
      (P = oe(this, k)) == null || P.focus(N);
    }
    /**
     * Blur the search input box.
     */
    blur() {
      var N;
      (N = oe(this, k)) == null || N.blur();
    }
    onRemove() {
      var N, P, B;
      (N = oe(this, k)) == null || N.$destroy(), gt(this, k, void 0), (B = (P = oe(this, C)) == null ? void 0 : P.parentNode) == null || B.removeChild(oe(this, C));
    }
  }
  return k = new WeakMap(), I = new WeakMap(), C = new WeakMap(), {
    MapLibreBasedGeocodingControl: M,
    events: {
      SelectEvent: r,
      FeaturesListedEvent: u,
      FeaturesMarkedEvent: a,
      OptionsVisibilityChangeEvent: o,
      PickEvent: g,
      QueryChangeEvent: c,
      ResponseEvent: E,
      ReverseToggleEvent: _
    }
  };
}
const Ts = "@maptiler/geocoding-control", Ms = "2.1.7", { MapLibreBasedGeocodingControl: Cs, events: $e } = xs(
  Li.Evented,
  Li,
  (i, e) => {
    const t = {};
    if (!("getSdkConfig" in i && typeof i.getSdkConfig == "function"))
      throw new Error("MapTiler SDK not detected");
    const { primaryLanguage: n, apiKey: r } = i.getSdkConfig();
    t.apiKey = r;
    const u = /^([a-z]{2})($|_|-)/.exec(n);
    return u && (t.language = u[1]), e.className += " maptiler-ctrl", t;
  }
);
class Os extends Cs {
  onAdd(e) {
    var t;
    return (t = e.telemetry) == null || t.registerModule(Ts, Ms), super.onAddInt(e);
  }
}
const Rs = $e.SelectEvent, Ps = $e.FeaturesListedEvent, Is = $e.FeaturesMarkedEvent, As = $e.OptionsVisibilityChangeEvent, Bs = $e.PickEvent, Ws = $e.QueryChangeEvent, Gs = $e.ResponseEvent, Ds = $e.ReverseToggleEvent;
export {
  Ps as FeaturesListedEvent,
  Is as FeaturesMarkedEvent,
  Os as GeocodingControl,
  As as OptionsVisibilityChangeEvent,
  Bs as PickEvent,
  Ws as QueryChangeEvent,
  Gs as ResponseEvent,
  Ds as ReverseToggleEvent,
  Rs as SelectEvent,
  Ss as createMapLibreGlMapController
};
//# sourceMappingURL=maptilersdk.js.map
