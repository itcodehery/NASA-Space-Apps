var ct = Object.defineProperty;
var at = (i, t, e) => t in i ? ct(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var M = (i, t, e) => at(i, typeof t != "symbol" ? t + "" : t, e);
import { Feature as se } from "ol";
import { Point as Re, Polygon as Fe, MultiPolygon as qe, GeometryCollection as pt, LineString as De, MultiLineString as ze } from "ol/geom";
import gt from "ol/layer/Vector";
import { fromLonLat as me, transformExtent as yt, toLonLat as Ue, getUserProjection as mt } from "ol/proj";
import dt from "ol/source/Vector";
import Ve from "ol/style/Fill";
import xt from "ol/style/Icon";
import $e from "ol/style/Stroke";
import wt from "ol/style/Style";
import Et from "ol/style/Text";
function Se(i, t, e = {}) {
  const n = { type: "Feature" };
  return (e.id === 0 || e.id) && (n.id = e.id), e.bbox && (n.bbox = e.bbox), n.properties = t || {}, n.geometry = i, n;
}
function Be(i, t, e = {}) {
  for (const r of i) {
    if (r.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (r[r.length - 1].length !== r[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let f = 0; f < r[r.length - 1].length; f++)
      if (r[r.length - 1][f] !== r[0][f])
        throw new Error("First and last Position are not equivalent.");
  }
  return Se({
    type: "Polygon",
    coordinates: i
  }, t, e);
}
function Ce(i, t = {}) {
  const e = { type: "FeatureCollection" };
  return t.id && (e.id = t.id), t.bbox && (e.bbox = t.bbox), e.features = i, e;
}
function rt(i, t, e = {}) {
  return Se({
    type: "MultiPolygon",
    coordinates: i
  }, t, e);
}
function st(i, t, e) {
  if (i !== null)
    for (var n, r, f, a, c, E, d, T = 0, b = 0, P, N = i.type, _ = N === "FeatureCollection", L = N === "Feature", A = _ ? i.features.length : 1, V = 0; V < A; V++) {
      d = _ ? i.features[V].geometry : L ? i.geometry : i, P = d ? d.type === "GeometryCollection" : !1, c = P ? d.geometries.length : 1;
      for (var S = 0; S < c; S++) {
        var F = 0, B = 0;
        if (a = P ? d.geometries[S] : d, a !== null) {
          E = a.coordinates;
          var W = a.type;
          switch (T = 0, W) {
            case null:
              break;
            case "Point":
              if (t(
                E,
                b,
                V,
                F,
                B
              ) === !1)
                return !1;
              b++, F++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < E.length; n++) {
                if (t(
                  E[n],
                  b,
                  V,
                  F,
                  B
                ) === !1)
                  return !1;
                b++, W === "MultiPoint" && F++;
              }
              W === "LineString" && F++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < E.length; n++) {
                for (r = 0; r < E[n].length - T; r++) {
                  if (t(
                    E[n][r],
                    b,
                    V,
                    F,
                    B
                  ) === !1)
                    return !1;
                  b++;
                }
                W === "MultiLineString" && F++, W === "Polygon" && B++;
              }
              W === "Polygon" && F++;
              break;
            case "MultiPolygon":
              for (n = 0; n < E.length; n++) {
                for (B = 0, r = 0; r < E[n].length; r++) {
                  for (f = 0; f < E[n][r].length - T; f++) {
                    if (t(
                      E[n][r][f],
                      b,
                      V,
                      F,
                      B
                    ) === !1)
                      return !1;
                    b++;
                  }
                  B++;
                }
                F++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < a.geometries.length; n++)
                if (st(a.geometries[n], t) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Ge(i, t) {
  var e, n, r, f, a, c, E, d, T, b, P = 0, N = i.type === "FeatureCollection", _ = i.type === "Feature", L = N ? i.features.length : 1;
  for (e = 0; e < L; e++) {
    for (c = N ? i.features[e].geometry : _ ? i.geometry : i, d = N ? i.features[e].properties : _ ? i.properties : {}, T = N ? i.features[e].bbox : _ ? i.bbox : void 0, b = N ? i.features[e].id : _ ? i.id : void 0, E = c ? c.type === "GeometryCollection" : !1, a = E ? c.geometries.length : 1, r = 0; r < a; r++) {
      if (f = E ? c.geometries[r] : c, f === null) {
        if (t(
          null,
          P,
          d,
          T,
          b
        ) === !1)
          return !1;
        continue;
      }
      switch (f.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (t(
            f,
            P,
            d,
            T,
            b
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (n = 0; n < f.geometries.length; n++)
            if (t(
              f.geometries[n],
              P,
              d,
              T,
              b
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    P++;
  }
}
function St(i, t) {
  Ge(i, function(e, n, r, f, a) {
    var c = e === null ? null : e.type;
    switch (c) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return t(
          Se(e, r, { bbox: f, id: a }),
          n,
          0
        ) === !1 ? !1 : void 0;
    }
    var E;
    switch (c) {
      case "MultiPoint":
        E = "Point";
        break;
      case "MultiLineString":
        E = "LineString";
        break;
      case "MultiPolygon":
        E = "Polygon";
        break;
    }
    for (var d = 0; d < e.coordinates.length; d++) {
      var T = e.coordinates[d], b = {
        type: E,
        coordinates: T
      };
      if (t(Se(b, r), n, d) === !1)
        return !1;
    }
  });
}
function vt(i, t = {}) {
  if (i.bbox != null && t.recompute !== !0)
    return i.bbox;
  const e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return st(i, (n) => {
    e[0] > n[0] && (e[0] = n[0]), e[1] > n[1] && (e[1] = n[1]), e[2] < n[0] && (e[2] = n[0]), e[3] < n[1] && (e[3] = n[1]);
  }), e;
}
var Ke = vt, bt = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, _e = Math.ceil, j = Math.floor, X = "[BigNumber Error] ", Xe = X + "Number primitive has more than 15 significant digits: ", ee = 1e14, C = 14, We = 9007199254740991, Oe = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], ue = 1e7, Y = 1e9;
function ot(i) {
  var t, e, n, r = S.prototype = { constructor: S, toString: null, valueOf: null }, f = new S(1), a = 20, c = 4, E = -7, d = 21, T = -1e7, b = 1e7, P = !1, N = 1, _ = 0, L = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, A = "0123456789abcdefghijklmnopqrstuvwxyz", V = !0;
  function S(s, o) {
    var l, m, h, g, w, u, p, x, y = this;
    if (!(y instanceof S)) return new S(s, o);
    if (o == null) {
      if (s && s._isBigNumber === !0) {
        y.s = s.s, !s.c || s.e > b ? y.c = y.e = null : s.e < T ? y.c = [y.e = 0] : (y.e = s.e, y.c = s.c.slice());
        return;
      }
      if ((u = typeof s == "number") && s * 0 == 0) {
        if (y.s = 1 / s < 0 ? (s = -s, -1) : 1, s === ~~s) {
          for (g = 0, w = s; w >= 10; w /= 10, g++) ;
          g > b ? y.c = y.e = null : (y.e = g, y.c = [s]);
          return;
        }
        x = String(s);
      } else {
        if (!bt.test(x = String(s))) return n(y, x, u);
        y.s = x.charCodeAt(0) == 45 ? (x = x.slice(1), -1) : 1;
      }
      (g = x.indexOf(".")) > -1 && (x = x.replace(".", "")), (w = x.search(/e/i)) > 0 ? (g < 0 && (g = w), g += +x.slice(w + 1), x = x.substring(0, w)) : g < 0 && (g = x.length);
    } else {
      if (q(o, 2, A.length, "Base"), o == 10 && V)
        return y = new S(s), Z(y, a + y.e + 1, c);
      if (x = String(s), u = typeof s == "number") {
        if (s * 0 != 0) return n(y, x, u, o);
        if (y.s = 1 / s < 0 ? (x = x.slice(1), -1) : 1, S.DEBUG && x.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Xe + s);
      } else
        y.s = x.charCodeAt(0) === 45 ? (x = x.slice(1), -1) : 1;
      for (l = A.slice(0, o), g = w = 0, p = x.length; w < p; w++)
        if (l.indexOf(m = x.charAt(w)) < 0) {
          if (m == ".") {
            if (w > g) {
              g = p;
              continue;
            }
          } else if (!h && (x == x.toUpperCase() && (x = x.toLowerCase()) || x == x.toLowerCase() && (x = x.toUpperCase()))) {
            h = !0, w = -1, g = 0;
            continue;
          }
          return n(y, String(s), u, o);
        }
      u = !1, x = e(x, o, 10, y.s), (g = x.indexOf(".")) > -1 ? x = x.replace(".", "") : g = x.length;
    }
    for (w = 0; x.charCodeAt(w) === 48; w++) ;
    for (p = x.length; x.charCodeAt(--p) === 48; ) ;
    if (x = x.slice(w, ++p)) {
      if (p -= w, u && S.DEBUG && p > 15 && (s > We || s !== j(s)))
        throw Error(Xe + y.s * s);
      if ((g = g - w - 1) > b)
        y.c = y.e = null;
      else if (g < T)
        y.c = [y.e = 0];
      else {
        if (y.e = g, y.c = [], w = (g + 1) % C, g < 0 && (w += C), w < p) {
          for (w && y.c.push(+x.slice(0, w)), p -= C; w < p; )
            y.c.push(+x.slice(w, w += C));
          w = C - (x = x.slice(w)).length;
        } else
          w -= p;
        for (; w--; x += "0") ;
        y.c.push(+x);
      }
    } else
      y.c = [y.e = 0];
  }
  S.clone = ot, S.ROUND_UP = 0, S.ROUND_DOWN = 1, S.ROUND_CEIL = 2, S.ROUND_FLOOR = 3, S.ROUND_HALF_UP = 4, S.ROUND_HALF_DOWN = 5, S.ROUND_HALF_EVEN = 6, S.ROUND_HALF_CEIL = 7, S.ROUND_HALF_FLOOR = 8, S.EUCLID = 9, S.config = S.set = function(s) {
    var o, l;
    if (s != null)
      if (typeof s == "object") {
        if (s.hasOwnProperty(o = "DECIMAL_PLACES") && (l = s[o], q(l, 0, Y, o), a = l), s.hasOwnProperty(o = "ROUNDING_MODE") && (l = s[o], q(l, 0, 8, o), c = l), s.hasOwnProperty(o = "EXPONENTIAL_AT") && (l = s[o], l && l.pop ? (q(l[0], -1e9, 0, o), q(l[1], 0, Y, o), E = l[0], d = l[1]) : (q(l, -1e9, Y, o), E = -(d = l < 0 ? -l : l))), s.hasOwnProperty(o = "RANGE"))
          if (l = s[o], l && l.pop)
            q(l[0], -1e9, -1, o), q(l[1], 1, Y, o), T = l[0], b = l[1];
          else if (q(l, -1e9, Y, o), l)
            T = -(b = l < 0 ? -l : l);
          else
            throw Error(X + o + " cannot be zero: " + l);
        if (s.hasOwnProperty(o = "CRYPTO"))
          if (l = s[o], l === !!l)
            if (l)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                P = l;
              else
                throw P = !l, Error(X + "crypto unavailable");
            else
              P = l;
          else
            throw Error(X + o + " not true or false: " + l);
        if (s.hasOwnProperty(o = "MODULO_MODE") && (l = s[o], q(l, 0, 9, o), N = l), s.hasOwnProperty(o = "POW_PRECISION") && (l = s[o], q(l, 0, Y, o), _ = l), s.hasOwnProperty(o = "FORMAT"))
          if (l = s[o], typeof l == "object") L = l;
          else throw Error(X + o + " not an object: " + l);
        if (s.hasOwnProperty(o = "ALPHABET"))
          if (l = s[o], typeof l == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(l))
            V = l.slice(0, 10) == "0123456789", A = l;
          else
            throw Error(X + o + " invalid: " + l);
      } else
        throw Error(X + "Object expected: " + s);
    return {
      DECIMAL_PLACES: a,
      ROUNDING_MODE: c,
      EXPONENTIAL_AT: [E, d],
      RANGE: [T, b],
      CRYPTO: P,
      MODULO_MODE: N,
      POW_PRECISION: _,
      FORMAT: L,
      ALPHABET: A
    };
  }, S.isBigNumber = function(s) {
    if (!s || s._isBigNumber !== !0) return !1;
    if (!S.DEBUG) return !0;
    var o, l, m = s.c, h = s.e, g = s.s;
    e: if ({}.toString.call(m) == "[object Array]") {
      if ((g === 1 || g === -1) && h >= -1e9 && h <= Y && h === j(h)) {
        if (m[0] === 0) {
          if (h === 0 && m.length === 1) return !0;
          break e;
        }
        if (o = (h + 1) % C, o < 1 && (o += C), String(m[0]).length == o) {
          for (o = 0; o < m.length; o++)
            if (l = m[o], l < 0 || l >= ee || l !== j(l)) break e;
          if (l !== 0) return !0;
        }
      }
    } else if (m === null && h === null && (g === null || g === 1 || g === -1))
      return !0;
    throw Error(X + "Invalid BigNumber: " + s);
  }, S.maximum = S.max = function() {
    return B(arguments, -1);
  }, S.minimum = S.min = function() {
    return B(arguments, 1);
  }, S.random = function() {
    var s = 9007199254740992, o = Math.random() * s & 2097151 ? function() {
      return j(Math.random() * s);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(l) {
      var m, h, g, w, u, p = 0, x = [], y = new S(f);
      if (l == null ? l = a : q(l, 0, Y), w = _e(l / C), P)
        if (crypto.getRandomValues) {
          for (m = crypto.getRandomValues(new Uint32Array(w *= 2)); p < w; )
            u = m[p] * 131072 + (m[p + 1] >>> 11), u >= 9e15 ? (h = crypto.getRandomValues(new Uint32Array(2)), m[p] = h[0], m[p + 1] = h[1]) : (x.push(u % 1e14), p += 2);
          p = w / 2;
        } else if (crypto.randomBytes) {
          for (m = crypto.randomBytes(w *= 7); p < w; )
            u = (m[p] & 31) * 281474976710656 + m[p + 1] * 1099511627776 + m[p + 2] * 4294967296 + m[p + 3] * 16777216 + (m[p + 4] << 16) + (m[p + 5] << 8) + m[p + 6], u >= 9e15 ? crypto.randomBytes(7).copy(m, p) : (x.push(u % 1e14), p += 7);
          p = w / 7;
        } else
          throw P = !1, Error(X + "crypto unavailable");
      if (!P)
        for (; p < w; )
          u = o(), u < 9e15 && (x[p++] = u % 1e14);
      for (w = x[--p], l %= C, w && l && (u = Oe[C - l], x[p] = j(w / u) * u); x[p] === 0; x.pop(), p--) ;
      if (p < 0)
        x = [g = 0];
      else {
        for (g = -1; x[0] === 0; x.splice(0, 1), g -= C) ;
        for (p = 1, u = x[0]; u >= 10; u /= 10, p++) ;
        p < C && (g -= C - p);
      }
      return y.e = g, y.c = x, y;
    };
  }(), S.sum = function() {
    for (var s = 1, o = arguments, l = new S(o[0]); s < o.length; ) l = l.plus(o[s++]);
    return l;
  }, e = /* @__PURE__ */ function() {
    var s = "0123456789";
    function o(l, m, h, g) {
      for (var w, u = [0], p, x = 0, y = l.length; x < y; ) {
        for (p = u.length; p--; u[p] *= m) ;
        for (u[0] += g.indexOf(l.charAt(x++)), w = 0; w < u.length; w++)
          u[w] > h - 1 && (u[w + 1] == null && (u[w + 1] = 0), u[w + 1] += u[w] / h | 0, u[w] %= h);
      }
      return u.reverse();
    }
    return function(l, m, h, g, w) {
      var u, p, x, y, v, R, O, k, D = l.indexOf("."), U = a, I = c;
      for (D >= 0 && (y = _, _ = 0, l = l.replace(".", ""), k = new S(m), R = k.pow(l.length - D), _ = y, k.c = o(
        oe(J(R.c), R.e, "0"),
        10,
        h,
        s
      ), k.e = k.c.length), O = o(l, m, h, w ? (u = A, s) : (u = s, A)), x = y = O.length; O[--y] == 0; O.pop()) ;
      if (!O[0]) return u.charAt(0);
      if (D < 0 ? --x : (R.c = O, R.e = x, R.s = g, R = t(R, k, U, I, h), O = R.c, v = R.r, x = R.e), p = x + U + 1, D = O[p], y = h / 2, v = v || p < 0 || O[p + 1] != null, v = I < 4 ? (D != null || v) && (I == 0 || I == (R.s < 0 ? 3 : 2)) : D > y || D == y && (I == 4 || v || I == 6 && O[p - 1] & 1 || I == (R.s < 0 ? 8 : 7)), p < 1 || !O[0])
        l = v ? oe(u.charAt(1), -U, u.charAt(0)) : u.charAt(0);
      else {
        if (O.length = p, v)
          for (--h; ++O[--p] > h; )
            O[p] = 0, p || (++x, O = [1].concat(O));
        for (y = O.length; !O[--y]; ) ;
        for (D = 0, l = ""; D <= y; l += u.charAt(O[D++])) ;
        l = oe(l, x, u.charAt(0));
      }
      return l;
    };
  }(), t = /* @__PURE__ */ function() {
    function s(m, h, g) {
      var w, u, p, x, y = 0, v = m.length, R = h % ue, O = h / ue | 0;
      for (m = m.slice(); v--; )
        p = m[v] % ue, x = m[v] / ue | 0, w = O * p + x * R, u = R * p + w % ue * ue + y, y = (u / g | 0) + (w / ue | 0) + O * x, m[v] = u % g;
      return y && (m = [y].concat(m)), m;
    }
    function o(m, h, g, w) {
      var u, p;
      if (g != w)
        p = g > w ? 1 : -1;
      else
        for (u = p = 0; u < g; u++)
          if (m[u] != h[u]) {
            p = m[u] > h[u] ? 1 : -1;
            break;
          }
      return p;
    }
    function l(m, h, g, w) {
      for (var u = 0; g--; )
        m[g] -= u, u = m[g] < h[g] ? 1 : 0, m[g] = u * w + m[g] - h[g];
      for (; !m[0] && m.length > 1; m.splice(0, 1)) ;
    }
    return function(m, h, g, w, u) {
      var p, x, y, v, R, O, k, D, U, I, G, $, ye, Le, Me, te, he, H = m.s == h.s ? 1 : -1, K = m.c, z = h.c;
      if (!K || !K[0] || !z || !z[0])
        return new S(
          // Return NaN if either NaN, or both Infinity or 0.
          !m.s || !h.s || (K ? z && K[0] == z[0] : !z) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            K && K[0] == 0 || !z ? H * 0 : H / 0
          )
        );
      for (D = new S(H), U = D.c = [], x = m.e - h.e, H = g + x + 1, u || (u = ee, x = Q(m.e / C) - Q(h.e / C), H = H / C | 0), y = 0; z[y] == (K[y] || 0); y++) ;
      if (z[y] > (K[y] || 0) && x--, H < 0)
        U.push(1), v = !0;
      else {
        for (Le = K.length, te = z.length, y = 0, H += 2, R = j(u / (z[0] + 1)), R > 1 && (z = s(z, R, u), K = s(K, R, u), te = z.length, Le = K.length), ye = te, I = K.slice(0, te), G = I.length; G < te; I[G++] = 0) ;
        he = z.slice(), he = [0].concat(he), Me = z[0], z[1] >= u / 2 && Me++;
        do {
          if (R = 0, p = o(z, I, te, G), p < 0) {
            if ($ = I[0], te != G && ($ = $ * u + (I[1] || 0)), R = j($ / Me), R > 1)
              for (R >= u && (R = u - 1), O = s(z, R, u), k = O.length, G = I.length; o(O, I, k, G) == 1; )
                R--, l(O, te < k ? he : z, k, u), k = O.length, p = 1;
            else
              R == 0 && (p = R = 1), O = z.slice(), k = O.length;
            if (k < G && (O = [0].concat(O)), l(I, O, G, u), G = I.length, p == -1)
              for (; o(z, I, te, G) < 1; )
                R++, l(I, te < G ? he : z, G, u), G = I.length;
          } else p === 0 && (R++, I = [0]);
          U[y++] = R, I[0] ? I[G++] = K[ye] || 0 : (I = [K[ye]], G = 1);
        } while ((ye++ < Le || I[0] != null) && H--);
        v = I[0] != null, U[0] || U.splice(0, 1);
      }
      if (u == ee) {
        for (y = 1, H = U[0]; H >= 10; H /= 10, y++) ;
        Z(D, g + (D.e = y + x * C - 1) + 1, w, v);
      } else
        D.e = x, D.r = +v;
      return D;
    };
  }();
  function F(s, o, l, m) {
    var h, g, w, u, p;
    if (l == null ? l = c : q(l, 0, 8), !s.c) return s.toString();
    if (h = s.c[0], w = s.e, o == null)
      p = J(s.c), p = m == 1 || m == 2 && (w <= E || w >= d) ? xe(p, w) : oe(p, w, "0");
    else if (s = Z(new S(s), o, l), g = s.e, p = J(s.c), u = p.length, m == 1 || m == 2 && (o <= g || g <= E)) {
      for (; u < o; p += "0", u++) ;
      p = xe(p, g);
    } else if (o -= w, p = oe(p, g, "0"), g + 1 > u) {
      if (--o > 0) for (p += "."; o--; p += "0") ;
    } else if (o += g - u, o > 0)
      for (g + 1 == u && (p += "."); o--; p += "0") ;
    return s.s < 0 && h ? "-" + p : p;
  }
  function B(s, o) {
    for (var l, m, h = 1, g = new S(s[0]); h < s.length; h++)
      m = new S(s[h]), (!m.s || (l = fe(g, m)) === o || l === 0 && g.s === o) && (g = m);
    return g;
  }
  function W(s, o, l) {
    for (var m = 1, h = o.length; !o[--h]; o.pop()) ;
    for (h = o[0]; h >= 10; h /= 10, m++) ;
    return (l = m + l * C - 1) > b ? s.c = s.e = null : l < T ? s.c = [s.e = 0] : (s.e = l, s.c = o), s;
  }
  n = /* @__PURE__ */ function() {
    var s = /^(-?)0([xbo])(?=\w[\w.]*$)/i, o = /^([^.]+)\.$/, l = /^\.([^.]+)$/, m = /^-?(Infinity|NaN)$/, h = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(g, w, u, p) {
      var x, y = u ? w : w.replace(h, "");
      if (m.test(y))
        g.s = isNaN(y) ? null : y < 0 ? -1 : 1;
      else {
        if (!u && (y = y.replace(s, function(v, R, O) {
          return x = (O = O.toLowerCase()) == "x" ? 16 : O == "b" ? 2 : 8, !p || p == x ? R : v;
        }), p && (x = p, y = y.replace(o, "$1").replace(l, "0.$1")), w != y))
          return new S(y, x);
        if (S.DEBUG)
          throw Error(X + "Not a" + (p ? " base " + p : "") + " number: " + w);
        g.s = null;
      }
      g.c = g.e = null;
    };
  }();
  function Z(s, o, l, m) {
    var h, g, w, u, p, x, y, v = s.c, R = Oe;
    if (v) {
      e: {
        for (h = 1, u = v[0]; u >= 10; u /= 10, h++) ;
        if (g = o - h, g < 0)
          g += C, w = o, p = v[x = 0], y = j(p / R[h - w - 1] % 10);
        else if (x = _e((g + 1) / C), x >= v.length)
          if (m) {
            for (; v.length <= x; v.push(0)) ;
            p = y = 0, h = 1, g %= C, w = g - C + 1;
          } else
            break e;
        else {
          for (p = u = v[x], h = 1; u >= 10; u /= 10, h++) ;
          g %= C, w = g - C + h, y = w < 0 ? 0 : j(p / R[h - w - 1] % 10);
        }
        if (m = m || o < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        v[x + 1] != null || (w < 0 ? p : p % R[h - w - 1]), m = l < 4 ? (y || m) && (l == 0 || l == (s.s < 0 ? 3 : 2)) : y > 5 || y == 5 && (l == 4 || m || l == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (g > 0 ? w > 0 ? p / R[h - w] : 0 : v[x - 1]) % 10 & 1 || l == (s.s < 0 ? 8 : 7)), o < 1 || !v[0])
          return v.length = 0, m ? (o -= s.e + 1, v[0] = R[(C - o % C) % C], s.e = -o || 0) : v[0] = s.e = 0, s;
        if (g == 0 ? (v.length = x, u = 1, x--) : (v.length = x + 1, u = R[C - g], v[x] = w > 0 ? j(p / R[h - w] % R[w]) * u : 0), m)
          for (; ; )
            if (x == 0) {
              for (g = 1, w = v[0]; w >= 10; w /= 10, g++) ;
              for (w = v[0] += u, u = 1; w >= 10; w /= 10, u++) ;
              g != u && (s.e++, v[0] == ee && (v[0] = 1));
              break;
            } else {
              if (v[x] += u, v[x] != ee) break;
              v[x--] = 0, u = 1;
            }
        for (g = v.length; v[--g] === 0; v.pop()) ;
      }
      s.e > b ? s.c = s.e = null : s.e < T && (s.c = [s.e = 0]);
    }
    return s;
  }
  function re(s) {
    var o, l = s.e;
    return l === null ? s.toString() : (o = J(s.c), o = l <= E || l >= d ? xe(o, l) : oe(o, l, "0"), s.s < 0 ? "-" + o : o);
  }
  return r.absoluteValue = r.abs = function() {
    var s = new S(this);
    return s.s < 0 && (s.s = 1), s;
  }, r.comparedTo = function(s, o) {
    return fe(this, new S(s, o));
  }, r.decimalPlaces = r.dp = function(s, o) {
    var l, m, h, g = this;
    if (s != null)
      return q(s, 0, Y), o == null ? o = c : q(o, 0, 8), Z(new S(g), s + g.e + 1, o);
    if (!(l = g.c)) return null;
    if (m = ((h = l.length - 1) - Q(this.e / C)) * C, h = l[h]) for (; h % 10 == 0; h /= 10, m--) ;
    return m < 0 && (m = 0), m;
  }, r.dividedBy = r.div = function(s, o) {
    return t(this, new S(s, o), a, c);
  }, r.dividedToIntegerBy = r.idiv = function(s, o) {
    return t(this, new S(s, o), 0, 1);
  }, r.exponentiatedBy = r.pow = function(s, o) {
    var l, m, h, g, w, u, p, x, y, v = this;
    if (s = new S(s), s.c && !s.isInteger())
      throw Error(X + "Exponent not an integer: " + re(s));
    if (o != null && (o = new S(o)), u = s.e > 14, !v.c || !v.c[0] || v.c[0] == 1 && !v.e && v.c.length == 1 || !s.c || !s.c[0])
      return y = new S(Math.pow(+re(v), u ? s.s * (2 - de(s)) : +re(s))), o ? y.mod(o) : y;
    if (p = s.s < 0, o) {
      if (o.c ? !o.c[0] : !o.s) return new S(NaN);
      m = !p && v.isInteger() && o.isInteger(), m && (v = v.mod(o));
    } else {
      if (s.e > 9 && (v.e > 0 || v.e < -1 || (v.e == 0 ? v.c[0] > 1 || u && v.c[1] >= 24e7 : v.c[0] < 8e13 || u && v.c[0] <= 9999975e7)))
        return g = v.s < 0 && de(s) ? -0 : 0, v.e > -1 && (g = 1 / g), new S(p ? 1 / g : g);
      _ && (g = _e(_ / C + 2));
    }
    for (u ? (l = new S(0.5), p && (s.s = 1), x = de(s)) : (h = Math.abs(+re(s)), x = h % 2), y = new S(f); ; ) {
      if (x) {
        if (y = y.times(v), !y.c) break;
        g ? y.c.length > g && (y.c.length = g) : m && (y = y.mod(o));
      }
      if (h) {
        if (h = j(h / 2), h === 0) break;
        x = h % 2;
      } else if (s = s.times(l), Z(s, s.e + 1, 1), s.e > 14)
        x = de(s);
      else {
        if (h = +re(s), h === 0) break;
        x = h % 2;
      }
      v = v.times(v), g ? v.c && v.c.length > g && (v.c.length = g) : m && (v = v.mod(o));
    }
    return m ? y : (p && (y = f.div(y)), o ? y.mod(o) : g ? Z(y, _, c, w) : y);
  }, r.integerValue = function(s) {
    var o = new S(this);
    return s == null ? s = c : q(s, 0, 8), Z(o, o.e + 1, s);
  }, r.isEqualTo = r.eq = function(s, o) {
    return fe(this, new S(s, o)) === 0;
  }, r.isFinite = function() {
    return !!this.c;
  }, r.isGreaterThan = r.gt = function(s, o) {
    return fe(this, new S(s, o)) > 0;
  }, r.isGreaterThanOrEqualTo = r.gte = function(s, o) {
    return (o = fe(this, new S(s, o))) === 1 || o === 0;
  }, r.isInteger = function() {
    return !!this.c && Q(this.e / C) > this.c.length - 2;
  }, r.isLessThan = r.lt = function(s, o) {
    return fe(this, new S(s, o)) < 0;
  }, r.isLessThanOrEqualTo = r.lte = function(s, o) {
    return (o = fe(this, new S(s, o))) === -1 || o === 0;
  }, r.isNaN = function() {
    return !this.s;
  }, r.isNegative = function() {
    return this.s < 0;
  }, r.isPositive = function() {
    return this.s > 0;
  }, r.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, r.minus = function(s, o) {
    var l, m, h, g, w = this, u = w.s;
    if (s = new S(s, o), o = s.s, !u || !o) return new S(NaN);
    if (u != o)
      return s.s = -o, w.plus(s);
    var p = w.e / C, x = s.e / C, y = w.c, v = s.c;
    if (!p || !x) {
      if (!y || !v) return y ? (s.s = -o, s) : new S(v ? w : NaN);
      if (!y[0] || !v[0])
        return v[0] ? (s.s = -o, s) : new S(y[0] ? w : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          c == 3 ? -0 : 0
        ));
    }
    if (p = Q(p), x = Q(x), y = y.slice(), u = p - x) {
      for ((g = u < 0) ? (u = -u, h = y) : (x = p, h = v), h.reverse(), o = u; o--; h.push(0)) ;
      h.reverse();
    } else
      for (m = (g = (u = y.length) < (o = v.length)) ? u : o, u = o = 0; o < m; o++)
        if (y[o] != v[o]) {
          g = y[o] < v[o];
          break;
        }
    if (g && (h = y, y = v, v = h, s.s = -s.s), o = (m = v.length) - (l = y.length), o > 0) for (; o--; y[l++] = 0) ;
    for (o = ee - 1; m > u; ) {
      if (y[--m] < v[m]) {
        for (l = m; l && !y[--l]; y[l] = o) ;
        --y[l], y[m] += ee;
      }
      y[m] -= v[m];
    }
    for (; y[0] == 0; y.splice(0, 1), --x) ;
    return y[0] ? W(s, y, x) : (s.s = c == 3 ? -1 : 1, s.c = [s.e = 0], s);
  }, r.modulo = r.mod = function(s, o) {
    var l, m, h = this;
    return s = new S(s, o), !h.c || !s.s || s.c && !s.c[0] ? new S(NaN) : !s.c || h.c && !h.c[0] ? new S(h) : (N == 9 ? (m = s.s, s.s = 1, l = t(h, s, 0, 3), s.s = m, l.s *= m) : l = t(h, s, 0, N), s = h.minus(l.times(s)), !s.c[0] && N == 1 && (s.s = h.s), s);
  }, r.multipliedBy = r.times = function(s, o) {
    var l, m, h, g, w, u, p, x, y, v, R, O, k, D, U, I = this, G = I.c, $ = (s = new S(s, o)).c;
    if (!G || !$ || !G[0] || !$[0])
      return !I.s || !s.s || G && !G[0] && !$ || $ && !$[0] && !G ? s.c = s.e = s.s = null : (s.s *= I.s, !G || !$ ? s.c = s.e = null : (s.c = [0], s.e = 0)), s;
    for (m = Q(I.e / C) + Q(s.e / C), s.s *= I.s, p = G.length, v = $.length, p < v && (k = G, G = $, $ = k, h = p, p = v, v = h), h = p + v, k = []; h--; k.push(0)) ;
    for (D = ee, U = ue, h = v; --h >= 0; ) {
      for (l = 0, R = $[h] % U, O = $[h] / U | 0, w = p, g = h + w; g > h; )
        x = G[--w] % U, y = G[w] / U | 0, u = O * x + y * R, x = R * x + u % U * U + k[g] + l, l = (x / D | 0) + (u / U | 0) + O * y, k[g--] = x % D;
      k[g] = l;
    }
    return l ? ++m : k.splice(0, 1), W(s, k, m);
  }, r.negated = function() {
    var s = new S(this);
    return s.s = -s.s || null, s;
  }, r.plus = function(s, o) {
    var l, m = this, h = m.s;
    if (s = new S(s, o), o = s.s, !h || !o) return new S(NaN);
    if (h != o)
      return s.s = -o, m.minus(s);
    var g = m.e / C, w = s.e / C, u = m.c, p = s.c;
    if (!g || !w) {
      if (!u || !p) return new S(h / 0);
      if (!u[0] || !p[0]) return p[0] ? s : new S(u[0] ? m : h * 0);
    }
    if (g = Q(g), w = Q(w), u = u.slice(), h = g - w) {
      for (h > 0 ? (w = g, l = p) : (h = -h, l = u), l.reverse(); h--; l.push(0)) ;
      l.reverse();
    }
    for (h = u.length, o = p.length, h - o < 0 && (l = p, p = u, u = l, o = h), h = 0; o; )
      h = (u[--o] = u[o] + p[o] + h) / ee | 0, u[o] = ee === u[o] ? 0 : u[o] % ee;
    return h && (u = [h].concat(u), ++w), W(s, u, w);
  }, r.precision = r.sd = function(s, o) {
    var l, m, h, g = this;
    if (s != null && s !== !!s)
      return q(s, 1, Y), o == null ? o = c : q(o, 0, 8), Z(new S(g), s, o);
    if (!(l = g.c)) return null;
    if (h = l.length - 1, m = h * C + 1, h = l[h]) {
      for (; h % 10 == 0; h /= 10, m--) ;
      for (h = l[0]; h >= 10; h /= 10, m++) ;
    }
    return s && g.e + 1 > m && (m = g.e + 1), m;
  }, r.shiftedBy = function(s) {
    return q(s, -9007199254740991, We), this.times("1e" + s);
  }, r.squareRoot = r.sqrt = function() {
    var s, o, l, m, h, g = this, w = g.c, u = g.s, p = g.e, x = a + 4, y = new S("0.5");
    if (u !== 1 || !w || !w[0])
      return new S(!u || u < 0 && (!w || w[0]) ? NaN : w ? g : 1 / 0);
    if (u = Math.sqrt(+re(g)), u == 0 || u == 1 / 0 ? (o = J(w), (o.length + p) % 2 == 0 && (o += "0"), u = Math.sqrt(+o), p = Q((p + 1) / 2) - (p < 0 || p % 2), u == 1 / 0 ? o = "5e" + p : (o = u.toExponential(), o = o.slice(0, o.indexOf("e") + 1) + p), l = new S(o)) : l = new S(u + ""), l.c[0]) {
      for (p = l.e, u = p + x, u < 3 && (u = 0); ; )
        if (h = l, l = y.times(h.plus(t(g, h, x, 1))), J(h.c).slice(0, u) === (o = J(l.c)).slice(0, u))
          if (l.e < p && --u, o = o.slice(u - 3, u + 1), o == "9999" || !m && o == "4999") {
            if (!m && (Z(h, h.e + a + 2, 0), h.times(h).eq(g))) {
              l = h;
              break;
            }
            x += 4, u += 4, m = 1;
          } else {
            (!+o || !+o.slice(1) && o.charAt(0) == "5") && (Z(l, l.e + a + 2, 1), s = !l.times(l).eq(g));
            break;
          }
    }
    return Z(l, l.e + a + 1, c, s);
  }, r.toExponential = function(s, o) {
    return s != null && (q(s, 0, Y), s++), F(this, s, o, 1);
  }, r.toFixed = function(s, o) {
    return s != null && (q(s, 0, Y), s = s + this.e + 1), F(this, s, o);
  }, r.toFormat = function(s, o, l) {
    var m, h = this;
    if (l == null)
      s != null && o && typeof o == "object" ? (l = o, o = null) : s && typeof s == "object" ? (l = s, s = o = null) : l = L;
    else if (typeof l != "object")
      throw Error(X + "Argument not an object: " + l);
    if (m = h.toFixed(s, o), h.c) {
      var g, w = m.split("."), u = +l.groupSize, p = +l.secondaryGroupSize, x = l.groupSeparator || "", y = w[0], v = w[1], R = h.s < 0, O = R ? y.slice(1) : y, k = O.length;
      if (p && (g = u, u = p, p = g, k -= g), u > 0 && k > 0) {
        for (g = k % u || u, y = O.substr(0, g); g < k; g += u) y += x + O.substr(g, u);
        p > 0 && (y += x + O.slice(g)), R && (y = "-" + y);
      }
      m = v ? y + (l.decimalSeparator || "") + ((p = +l.fractionGroupSize) ? v.replace(
        new RegExp("\\d{" + p + "}\\B", "g"),
        "$&" + (l.fractionGroupSeparator || "")
      ) : v) : y;
    }
    return (l.prefix || "") + m + (l.suffix || "");
  }, r.toFraction = function(s) {
    var o, l, m, h, g, w, u, p, x, y, v, R, O = this, k = O.c;
    if (s != null && (u = new S(s), !u.isInteger() && (u.c || u.s !== 1) || u.lt(f)))
      throw Error(X + "Argument " + (u.isInteger() ? "out of range: " : "not an integer: ") + re(u));
    if (!k) return new S(O);
    for (o = new S(f), x = l = new S(f), m = p = new S(f), R = J(k), g = o.e = R.length - O.e - 1, o.c[0] = Oe[(w = g % C) < 0 ? C + w : w], s = !s || u.comparedTo(o) > 0 ? g > 0 ? o : x : u, w = b, b = 1 / 0, u = new S(R), p.c[0] = 0; y = t(u, o, 0, 1), h = l.plus(y.times(m)), h.comparedTo(s) != 1; )
      l = m, m = h, x = p.plus(y.times(h = x)), p = h, o = u.minus(y.times(h = o)), u = h;
    return h = t(s.minus(l), m, 0, 1), p = p.plus(h.times(x)), l = l.plus(h.times(m)), p.s = x.s = O.s, g = g * 2, v = t(x, m, g, c).minus(O).abs().comparedTo(
      t(p, l, g, c).minus(O).abs()
    ) < 1 ? [x, m] : [p, l], b = w, v;
  }, r.toNumber = function() {
    return +re(this);
  }, r.toPrecision = function(s, o) {
    return s != null && q(s, 1, Y), F(this, s, o, 2);
  }, r.toString = function(s) {
    var o, l = this, m = l.s, h = l.e;
    return h === null ? m ? (o = "Infinity", m < 0 && (o = "-" + o)) : o = "NaN" : (s == null ? o = h <= E || h >= d ? xe(J(l.c), h) : oe(J(l.c), h, "0") : s === 10 && V ? (l = Z(new S(l), a + h + 1, c), o = oe(J(l.c), l.e, "0")) : (q(s, 2, A.length, "Base"), o = e(oe(J(l.c), h, "0"), 10, s, m, !0)), m < 0 && l.c[0] && (o = "-" + o)), o;
  }, r.valueOf = r.toJSON = function() {
    return re(this);
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, i != null && S.set(i), S;
}
function Q(i) {
  var t = i | 0;
  return i > 0 || i === t ? t : t - 1;
}
function J(i) {
  for (var t, e, n = 1, r = i.length, f = i[0] + ""; n < r; ) {
    for (t = i[n++] + "", e = C - t.length; e--; t = "0" + t) ;
    f += t;
  }
  for (r = f.length; f.charCodeAt(--r) === 48; ) ;
  return f.slice(0, r + 1 || 1);
}
function fe(i, t) {
  var e, n, r = i.c, f = t.c, a = i.s, c = t.s, E = i.e, d = t.e;
  if (!a || !c) return null;
  if (e = r && !r[0], n = f && !f[0], e || n) return e ? n ? 0 : -c : a;
  if (a != c) return a;
  if (e = a < 0, n = E == d, !r || !f) return n ? 0 : !r ^ e ? 1 : -1;
  if (!n) return E > d ^ e ? 1 : -1;
  for (c = (E = r.length) < (d = f.length) ? E : d, a = 0; a < c; a++) if (r[a] != f[a]) return r[a] > f[a] ^ e ? 1 : -1;
  return E == d ? 0 : E > d ^ e ? 1 : -1;
}
function q(i, t, e, n) {
  if (i < t || i > e || i !== j(i))
    throw Error(X + (n || "Argument") + (typeof i == "number" ? i < t || i > e ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(i));
}
function de(i) {
  var t = i.c.length - 1;
  return Q(i.e / C) == t && i.c[t] % 2 != 0;
}
function xe(i, t) {
  return (i.length > 1 ? i.charAt(0) + "." + i.slice(1) : i) + (t < 0 ? "e" : "e+") + t;
}
function oe(i, t, e) {
  var n, r;
  if (t < 0) {
    for (r = e + "."; ++t; r += e) ;
    i = r + i;
  } else if (n = i.length, ++t > n) {
    for (r = e, t -= n; --t; r += e) ;
    i += r;
  } else t < n && (i = i.slice(0, t) + "." + i.slice(t));
  return i;
}
var ne = ot(), Tt = class {
  constructor(i) {
    M(this, "key");
    M(this, "left", null);
    M(this, "right", null);
    this.key = i;
  }
}, ce = class extends Tt {
  constructor(i) {
    super(i);
  }
}, Pt = class {
  constructor() {
    M(this, "size", 0);
    M(this, "modificationCount", 0);
    M(this, "splayCount", 0);
  }
  splay(i) {
    const t = this.root;
    if (t == null)
      return this.compare(i, i), -1;
    let e = null, n = null, r = null, f = null, a = t;
    const c = this.compare;
    let E;
    for (; ; )
      if (E = c(a.key, i), E > 0) {
        let d = a.left;
        if (d == null || (E = c(d.key, i), E > 0 && (a.left = d.right, d.right = a, a = d, d = a.left, d == null)))
          break;
        e == null ? n = a : e.left = a, e = a, a = d;
      } else if (E < 0) {
        let d = a.right;
        if (d == null || (E = c(d.key, i), E < 0 && (a.right = d.left, d.left = a, a = d, d = a.right, d == null)))
          break;
        r == null ? f = a : r.right = a, r = a, a = d;
      } else
        break;
    return r != null && (r.right = a.left, a.left = f), e != null && (e.left = a.right, a.right = n), this.root !== a && (this.root = a, this.splayCount++), E;
  }
  splayMin(i) {
    let t = i, e = t.left;
    for (; e != null; ) {
      const n = e;
      t.left = n.right, n.right = t, t = n, e = t.left;
    }
    return t;
  }
  splayMax(i) {
    let t = i, e = t.right;
    for (; e != null; ) {
      const n = e;
      t.right = n.left, n.left = t, t = n, e = t.right;
    }
    return t;
  }
  _delete(i) {
    if (this.root == null || this.splay(i) != 0) return null;
    let e = this.root;
    const n = e, r = e.left;
    if (this.size--, r == null)
      this.root = e.right;
    else {
      const f = e.right;
      e = this.splayMax(r), e.right = f, this.root = e;
    }
    return this.modificationCount++, n;
  }
  addNewRoot(i, t) {
    this.size++, this.modificationCount++;
    const e = this.root;
    if (e == null) {
      this.root = i;
      return;
    }
    t < 0 ? (i.left = e, i.right = e.right, e.right = null) : (i.right = e, i.left = e.left, e.left = null), this.root = i;
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
    return (i, t) => i < t ? -1 : i > t ? 1 : 0;
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
}, it, nt, ve = class pe extends Pt {
  constructor(e, n) {
    super();
    M(this, "root", null);
    M(this, "compare");
    M(this, "validKey");
    M(this, it, "[object Set]");
    this.compare = e ?? this.defaultCompare(), this.validKey = n ?? ((r) => r != null && r != null);
  }
  delete(e) {
    return this.validKey(e) ? this._delete(e) != null : !1;
  }
  deleteAll(e) {
    for (const n of e)
      this.delete(n);
  }
  forEach(e) {
    const n = this[Symbol.iterator]();
    let r;
    for (; r = n.next(), !r.done; )
      e(r.value, r.value, this);
  }
  add(e) {
    const n = this.splay(e);
    return n != 0 && this.addNewRoot(new ce(e), n), this;
  }
  addAndReturn(e) {
    const n = this.splay(e);
    return n != 0 && this.addNewRoot(new ce(e), n), this.root.key;
  }
  addAll(e) {
    for (const n of e)
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
  lastBefore(e) {
    if (e == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(e) < 0) return this.root.key;
    let r = this.root.left;
    if (r == null) return null;
    let f = r.right;
    for (; f != null; )
      r = f, f = r.right;
    return r.key;
  }
  firstAfter(e) {
    if (e == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(e) > 0) return this.root.key;
    let r = this.root.right;
    if (r == null) return null;
    let f = r.left;
    for (; f != null; )
      r = f, f = r.left;
    return r.key;
  }
  retainAll(e) {
    const n = new pe(this.compare, this.validKey), r = this.modificationCount;
    for (const f of e) {
      if (r != this.modificationCount)
        throw "Concurrent modification during iteration.";
      this.validKey(f) && this.splay(f) == 0 && n.add(this.root.key);
    }
    n.size != this.size && (this.root = n.root, this.size = n.size, this.modificationCount++);
  }
  lookup(e) {
    return !this.validKey(e) || this.splay(e) != 0 ? null : this.root.key;
  }
  intersection(e) {
    const n = new pe(this.compare, this.validKey);
    for (const r of this)
      e.has(r) && n.add(r);
    return n;
  }
  difference(e) {
    const n = new pe(this.compare, this.validKey);
    for (const r of this)
      e.has(r) || n.add(r);
    return n;
  }
  union(e) {
    const n = this.clone();
    return n.addAll(e), n;
  }
  clone() {
    const e = new pe(this.compare, this.validKey);
    return e.size = this.size, e.root = this.copyNode(this.root), e;
  }
  copyNode(e) {
    if (e == null) return null;
    function n(f, a) {
      let c, E;
      do {
        if (c = f.left, E = f.right, c != null) {
          const d = new ce(c.key);
          a.left = d, n(c, d);
        }
        if (E != null) {
          const d = new ce(E.key);
          a.right = d, f = E, a = d;
        }
      } while (E != null);
    }
    const r = new ce(e.key);
    return n(e, r), r;
  }
  toSet() {
    return this.clone();
  }
  entries() {
    return new Mt(this.wrap());
  }
  keys() {
    return this[Symbol.iterator]();
  }
  values() {
    return this[Symbol.iterator]();
  }
  [(nt = Symbol.iterator, it = Symbol.toStringTag, nt)]() {
    return new Lt(this.wrap());
  }
}, lt = class {
  constructor(i) {
    M(this, "tree");
    M(this, "path", new Array());
    M(this, "modificationCount", null);
    M(this, "splayCount");
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
        let e = this.tree.getRoot();
        for (; e != null; )
          this.path.push(e), e = e.left;
        return this.path.length > 0;
      }
      throw "Concurrent modification during iteration.";
    }
    if (!this.path.length) return !1;
    this.splayCount != this.tree.getSplayCount() && this.rebuildPath(this.path[this.path.length - 1].key);
    let i = this.path[this.path.length - 1], t = i.right;
    if (t != null) {
      for (; t != null; )
        this.path.push(t), t = t.left;
      return !0;
    }
    for (this.path.pop(); this.path.length && this.path[this.path.length - 1].right === i; )
      i = this.path.pop();
    return this.path.length > 0;
  }
}, Lt = class extends lt {
  getValue(i) {
    return i.key;
  }
}, Mt = class extends lt {
  getValue(i) {
    return [i.key, i.key];
  }
}, ut = (i) => () => i, Ne = (i) => {
  const t = i ? (e, n) => n.minus(e).abs().isLessThanOrEqualTo(i) : ut(!1);
  return (e, n) => t(e, n) ? 0 : e.comparedTo(n);
};
function Rt(i) {
  const t = i ? (e, n, r, f, a) => e.exponentiatedBy(2).isLessThanOrEqualTo(
    f.minus(n).exponentiatedBy(2).plus(a.minus(r).exponentiatedBy(2)).times(i)
  ) : ut(!1);
  return (e, n, r) => {
    const f = e.x, a = e.y, c = r.x, E = r.y, d = a.minus(E).times(n.x.minus(c)).minus(f.minus(c).times(n.y.minus(E)));
    return t(d, f, a, c, E) ? 0 : d.comparedTo(0);
  };
}
var _t = (i) => i, Ot = (i) => {
  if (i) {
    const t = new ve(Ne(i)), e = new ve(Ne(i)), n = (f, a) => a.addAndReturn(f), r = (f) => ({
      x: n(f.x, t),
      y: n(f.y, e)
    });
    return r({ x: new ne(0), y: new ne(0) }), r;
  }
  return _t;
}, Ae = (i) => ({
  set: (t) => {
    le = Ae(t);
  },
  reset: () => Ae(i),
  compare: Ne(i),
  snap: Ot(i),
  orient: Rt(i)
}), le = Ae(), ae = (i, t) => i.ll.x.isLessThanOrEqualTo(t.x) && t.x.isLessThanOrEqualTo(i.ur.x) && i.ll.y.isLessThanOrEqualTo(t.y) && t.y.isLessThanOrEqualTo(i.ur.y), Ie = (i, t) => {
  if (t.ur.x.isLessThan(i.ll.x) || i.ur.x.isLessThan(t.ll.x) || t.ur.y.isLessThan(i.ll.y) || i.ur.y.isLessThan(t.ll.y))
    return null;
  const e = i.ll.x.isLessThan(t.ll.x) ? t.ll.x : i.ll.x, n = i.ur.x.isLessThan(t.ur.x) ? i.ur.x : t.ur.x, r = i.ll.y.isLessThan(t.ll.y) ? t.ll.y : i.ll.y, f = i.ur.y.isLessThan(t.ur.y) ? i.ur.y : t.ur.y;
  return { ll: { x: e, y: r }, ur: { x: n, y: f } };
}, we = (i, t) => i.x.times(t.y).minus(i.y.times(t.x)), ft = (i, t) => i.x.times(t.x).plus(i.y.times(t.y)), be = (i) => ft(i, i).sqrt(), Ct = (i, t, e) => {
  const n = { x: t.x.minus(i.x), y: t.y.minus(i.y) }, r = { x: e.x.minus(i.x), y: e.y.minus(i.y) };
  return we(r, n).div(be(r)).div(be(n));
}, Nt = (i, t, e) => {
  const n = { x: t.x.minus(i.x), y: t.y.minus(i.y) }, r = { x: e.x.minus(i.x), y: e.y.minus(i.y) };
  return ft(r, n).div(be(r)).div(be(n));
}, Ye = (i, t, e) => t.y.isZero() ? null : { x: i.x.plus(t.x.div(t.y).times(e.minus(i.y))), y: e }, Ze = (i, t, e) => t.x.isZero() ? null : { x: e, y: i.y.plus(t.y.div(t.x).times(e.minus(i.x))) }, At = (i, t, e, n) => {
  if (t.x.isZero()) return Ze(e, n, i.x);
  if (n.x.isZero()) return Ze(i, t, e.x);
  if (t.y.isZero()) return Ye(e, n, i.y);
  if (n.y.isZero()) return Ye(i, t, e.y);
  const r = we(t, n);
  if (r.isZero()) return null;
  const f = { x: e.x.minus(i.x), y: e.y.minus(i.y) }, a = we(f, t).div(r), c = we(f, n).div(r), E = i.x.plus(c.times(t.x)), d = e.x.plus(a.times(n.x)), T = i.y.plus(c.times(t.y)), b = e.y.plus(a.times(n.y)), P = E.plus(d).div(2), N = T.plus(b).div(2);
  return { x: P, y: N };
}, ie = class ht {
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(t, e) {
    M(this, "point");
    M(this, "isLeft");
    M(this, "segment");
    M(this, "otherSE");
    M(this, "consumedBy");
    t.events === void 0 ? t.events = [this] : t.events.push(this), this.point = t, this.isLeft = e;
  }
  // for ordering sweep events in the sweep event queue
  static compare(t, e) {
    const n = ht.comparePoints(t.point, e.point);
    return n !== 0 ? n : (t.point !== e.point && t.link(e), t.isLeft !== e.isLeft ? t.isLeft ? 1 : -1 : Pe.compare(t.segment, e.segment));
  }
  // for ordering points in sweep line order
  static comparePoints(t, e) {
    return t.x.isLessThan(e.x) ? -1 : t.x.isGreaterThan(e.x) ? 1 : t.y.isLessThan(e.y) ? -1 : t.y.isGreaterThan(e.y) ? 1 : 0;
  }
  link(t) {
    if (t.point === this.point)
      throw new Error("Tried to link already linked events");
    const e = t.point.events;
    for (let n = 0, r = e.length; n < r; n++) {
      const f = e[n];
      this.point.events.push(f), f.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const t = this.point.events.length;
    for (let e = 0; e < t; e++) {
      const n = this.point.events[e];
      if (n.segment.consumedBy === void 0)
        for (let r = e + 1; r < t; r++) {
          const f = this.point.events[r];
          f.consumedBy === void 0 && n.otherSE.point.events === f.otherSE.point.events && n.segment.consume(f.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const t = [];
    for (let e = 0, n = this.point.events.length; e < n; e++) {
      const r = this.point.events[e];
      r !== this && !r.segment.ringOut && r.segment.isInResult() && t.push(r);
    }
    return t;
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
  getLeftmostComparator(t) {
    const e = /* @__PURE__ */ new Map(), n = (r) => {
      const f = r.otherSE;
      e.set(r, {
        sine: Ct(this.point, t.point, f.point),
        cosine: Nt(this.point, t.point, f.point)
      });
    };
    return (r, f) => {
      e.has(r) || n(r), e.has(f) || n(f);
      const { sine: a, cosine: c } = e.get(r), { sine: E, cosine: d } = e.get(f);
      return a.isGreaterThanOrEqualTo(0) && E.isGreaterThanOrEqualTo(0) ? c.isLessThan(d) ? 1 : c.isGreaterThan(d) ? -1 : 0 : a.isLessThan(0) && E.isLessThan(0) ? c.isLessThan(d) ? -1 : c.isGreaterThan(d) ? 1 : 0 : E.isLessThan(a) ? -1 : E.isGreaterThan(a) ? 1 : 0;
    };
  }
}, It = class ke {
  constructor(t) {
    M(this, "events");
    M(this, "poly");
    M(this, "_isExteriorRing");
    M(this, "_enclosingRing");
    this.events = t;
    for (let e = 0, n = t.length; e < n; e++)
      t[e].segment.ringOut = this;
    this.poly = null;
  }
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(t) {
    const e = [];
    for (let n = 0, r = t.length; n < r; n++) {
      const f = t[n];
      if (!f.isInResult() || f.ringOut) continue;
      let a = null, c = f.leftSE, E = f.rightSE;
      const d = [c], T = c.point, b = [];
      for (; a = c, c = E, d.push(c), c.point !== T; )
        for (; ; ) {
          const P = c.getAvailableLinkedEvents();
          if (P.length === 0) {
            const L = d[0].point, A = d[d.length - 1].point;
            throw new Error(
              `Unable to complete output ring starting at [${L.x}, ${L.y}]. Last matching segment found ends at [${A.x}, ${A.y}].`
            );
          }
          if (P.length === 1) {
            E = P[0].otherSE;
            break;
          }
          let N = null;
          for (let L = 0, A = b.length; L < A; L++)
            if (b[L].point === c.point) {
              N = L;
              break;
            }
          if (N !== null) {
            const L = b.splice(N)[0], A = d.splice(L.index);
            A.unshift(A[0].otherSE), e.push(new ke(A.reverse()));
            continue;
          }
          b.push({
            index: d.length,
            point: c.point
          });
          const _ = c.getLeftmostComparator(a);
          E = P.sort(_)[0].otherSE;
          break;
        }
      e.push(new ke(d));
    }
    return e;
  }
  getGeom() {
    let t = this.events[0].point;
    const e = [t];
    for (let d = 1, T = this.events.length - 1; d < T; d++) {
      const b = this.events[d].point, P = this.events[d + 1].point;
      le.orient(b, t, P) !== 0 && (e.push(b), t = b);
    }
    if (e.length === 1) return null;
    const n = e[0], r = e[1];
    le.orient(n, t, r) === 0 && e.shift(), e.push(e[0]);
    const f = this.isExteriorRing() ? 1 : -1, a = this.isExteriorRing() ? 0 : e.length - 1, c = this.isExteriorRing() ? e.length : -1, E = [];
    for (let d = a; d != c; d += f)
      E.push([e[d].x.toNumber(), e[d].y.toNumber()]);
    return E;
  }
  isExteriorRing() {
    if (this._isExteriorRing === void 0) {
      const t = this.enclosingRing();
      this._isExteriorRing = t ? !t.isExteriorRing() : !0;
    }
    return this._isExteriorRing;
  }
  enclosingRing() {
    return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
  }
  /* Returns the ring that encloses this one, if any */
  _calcEnclosingRing() {
    var r, f;
    let t = this.events[0];
    for (let a = 1, c = this.events.length; a < c; a++) {
      const E = this.events[a];
      ie.compare(t, E) > 0 && (t = E);
    }
    let e = t.segment.prevInResult(), n = e ? e.prevInResult() : null;
    for (; ; ) {
      if (!e) return null;
      if (!n) return e.ringOut;
      if (n.ringOut !== e.ringOut)
        return ((r = n.ringOut) == null ? void 0 : r.enclosingRing()) !== e.ringOut ? e.ringOut : (f = e.ringOut) == null ? void 0 : f.enclosingRing();
      e = n.prevInResult(), n = e ? e.prevInResult() : null;
    }
  }
}, He = class {
  constructor(i) {
    M(this, "exteriorRing");
    M(this, "interiorRings");
    this.exteriorRing = i, i.poly = this, this.interiorRings = [];
  }
  addInterior(i) {
    this.interiorRings.push(i), i.poly = this;
  }
  getGeom() {
    const i = this.exteriorRing.getGeom();
    if (i === null) return null;
    const t = [i];
    for (let e = 0, n = this.interiorRings.length; e < n; e++) {
      const r = this.interiorRings[e].getGeom();
      r !== null && t.push(r);
    }
    return t;
  }
}, kt = class {
  constructor(i) {
    M(this, "rings");
    M(this, "polys");
    this.rings = i, this.polys = this._composePolys(i);
  }
  getGeom() {
    const i = [];
    for (let t = 0, e = this.polys.length; t < e; t++) {
      const n = this.polys[t].getGeom();
      n !== null && i.push(n);
    }
    return i;
  }
  _composePolys(i) {
    var e;
    const t = [];
    for (let n = 0, r = i.length; n < r; n++) {
      const f = i[n];
      if (!f.poly)
        if (f.isExteriorRing()) t.push(new He(f));
        else {
          const a = f.enclosingRing();
          a != null && a.poly || t.push(new He(a)), (e = a == null ? void 0 : a.poly) == null || e.addInterior(f);
        }
    }
    return t;
  }
}, Bt = class {
  constructor(i, t = Pe.compare) {
    M(this, "queue");
    M(this, "tree");
    M(this, "segments");
    this.queue = i, this.tree = new ve(t), this.segments = [];
  }
  process(i) {
    const t = i.segment, e = [];
    if (i.consumedBy)
      return i.isLeft ? this.queue.delete(i.otherSE) : this.tree.delete(t), e;
    i.isLeft && this.tree.add(t);
    let n = t, r = t;
    do
      n = this.tree.lastBefore(n);
    while (n != null && n.consumedBy != null);
    do
      r = this.tree.firstAfter(r);
    while (r != null && r.consumedBy != null);
    if (i.isLeft) {
      let f = null;
      if (n) {
        const c = n.getIntersection(t);
        if (c !== null && (t.isAnEndpoint(c) || (f = c), !n.isAnEndpoint(c))) {
          const E = this._splitSafely(n, c);
          for (let d = 0, T = E.length; d < T; d++)
            e.push(E[d]);
        }
      }
      let a = null;
      if (r) {
        const c = r.getIntersection(t);
        if (c !== null && (t.isAnEndpoint(c) || (a = c), !r.isAnEndpoint(c))) {
          const E = this._splitSafely(r, c);
          for (let d = 0, T = E.length; d < T; d++)
            e.push(E[d]);
        }
      }
      if (f !== null || a !== null) {
        let c = null;
        f === null ? c = a : a === null ? c = f : c = ie.comparePoints(
          f,
          a
        ) <= 0 ? f : a, this.queue.delete(t.rightSE), e.push(t.rightSE);
        const E = t.split(c);
        for (let d = 0, T = E.length; d < T; d++)
          e.push(E[d]);
      }
      e.length > 0 ? (this.tree.delete(t), e.push(i)) : (this.segments.push(t), t.prev = n);
    } else {
      if (n && r) {
        const f = n.getIntersection(r);
        if (f !== null) {
          if (!n.isAnEndpoint(f)) {
            const a = this._splitSafely(n, f);
            for (let c = 0, E = a.length; c < E; c++)
              e.push(a[c]);
          }
          if (!r.isAnEndpoint(f)) {
            const a = this._splitSafely(r, f);
            for (let c = 0, E = a.length; c < E; c++)
              e.push(a[c]);
          }
        }
      }
      this.tree.delete(t);
    }
    return e;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(i, t) {
    this.tree.delete(i);
    const e = i.rightSE;
    this.queue.delete(e);
    const n = i.split(t);
    return n.push(e), i.consumedBy === void 0 && this.tree.add(i), n;
  }
}, Gt = class {
  constructor() {
    M(this, "type");
    M(this, "numMultiPolys");
  }
  run(i, t, e) {
    ge.type = i;
    const n = [new je(t, !0)];
    for (let d = 0, T = e.length; d < T; d++)
      n.push(new je(e[d], !1));
    if (ge.numMultiPolys = n.length, ge.type === "difference") {
      const d = n[0];
      let T = 1;
      for (; T < n.length; )
        Ie(n[T].bbox, d.bbox) !== null ? T++ : n.splice(T, 1);
    }
    if (ge.type === "intersection")
      for (let d = 0, T = n.length; d < T; d++) {
        const b = n[d];
        for (let P = d + 1, N = n.length; P < N; P++)
          if (Ie(b.bbox, n[P].bbox) === null) return [];
      }
    const r = new ve(ie.compare);
    for (let d = 0, T = n.length; d < T; d++) {
      const b = n[d].getSweepEvents();
      for (let P = 0, N = b.length; P < N; P++)
        r.add(b[P]);
    }
    const f = new Bt(r);
    let a = null;
    for (r.size != 0 && (a = r.first(), r.delete(a)); a; ) {
      const d = f.process(a);
      for (let T = 0, b = d.length; T < b; T++) {
        const P = d[T];
        P.consumedBy === void 0 && r.add(P);
      }
      r.size != 0 ? (a = r.first(), r.delete(a)) : a = null;
    }
    le.reset();
    const c = It.factory(f.segments);
    return new kt(c).getGeom();
  }
}, ge = new Gt(), Te = ge, Ft = 0, Pe = class Ee {
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(t, e, n, r) {
    M(this, "id");
    M(this, "leftSE");
    M(this, "rightSE");
    M(this, "rings");
    M(this, "windings");
    M(this, "ringOut");
    M(this, "consumedBy");
    M(this, "prev");
    M(this, "_prevInResult");
    M(this, "_beforeState");
    M(this, "_afterState");
    M(this, "_isInResult");
    this.id = ++Ft, this.leftSE = t, t.segment = this, t.otherSE = e, this.rightSE = e, e.segment = this, e.otherSE = t, this.rings = n, this.windings = r;
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
  static compare(t, e) {
    const n = t.leftSE.point.x, r = e.leftSE.point.x, f = t.rightSE.point.x, a = e.rightSE.point.x;
    if (a.isLessThan(n)) return 1;
    if (f.isLessThan(r)) return -1;
    const c = t.leftSE.point.y, E = e.leftSE.point.y, d = t.rightSE.point.y, T = e.rightSE.point.y;
    if (n.isLessThan(r)) {
      if (E.isLessThan(c) && E.isLessThan(d)) return 1;
      if (E.isGreaterThan(c) && E.isGreaterThan(d)) return -1;
      const b = t.comparePoint(e.leftSE.point);
      if (b < 0) return 1;
      if (b > 0) return -1;
      const P = e.comparePoint(t.rightSE.point);
      return P !== 0 ? P : -1;
    }
    if (n.isGreaterThan(r)) {
      if (c.isLessThan(E) && c.isLessThan(T)) return -1;
      if (c.isGreaterThan(E) && c.isGreaterThan(T)) return 1;
      const b = e.comparePoint(t.leftSE.point);
      if (b !== 0) return b;
      const P = t.comparePoint(e.rightSE.point);
      return P < 0 ? 1 : P > 0 ? -1 : 1;
    }
    if (c.isLessThan(E)) return -1;
    if (c.isGreaterThan(E)) return 1;
    if (f.isLessThan(a)) {
      const b = e.comparePoint(t.rightSE.point);
      if (b !== 0) return b;
    }
    if (f.isGreaterThan(a)) {
      const b = t.comparePoint(e.rightSE.point);
      if (b < 0) return 1;
      if (b > 0) return -1;
    }
    if (!f.eq(a)) {
      const b = d.minus(c), P = f.minus(n), N = T.minus(E), _ = a.minus(r);
      if (b.isGreaterThan(P) && N.isLessThan(_)) return 1;
      if (b.isLessThan(P) && N.isGreaterThan(_)) return -1;
    }
    return f.isGreaterThan(a) ? 1 : f.isLessThan(a) || d.isLessThan(T) ? -1 : d.isGreaterThan(T) ? 1 : t.id < e.id ? -1 : t.id > e.id ? 1 : 0;
  }
  static fromRing(t, e, n) {
    let r, f, a;
    const c = ie.comparePoints(t, e);
    if (c < 0)
      r = t, f = e, a = 1;
    else if (c > 0)
      r = e, f = t, a = -1;
    else
      throw new Error(
        `Tried to create degenerate segment at [${t.x}, ${t.y}]`
      );
    const E = new ie(r, !0), d = new ie(f, !1);
    return new Ee(E, d, [n], [a]);
  }
  /* When a segment is split, the rightSE is replaced with a new sweep event */
  replaceRightSE(t) {
    this.rightSE = t, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
  }
  bbox() {
    const t = this.leftSE.point.y, e = this.rightSE.point.y;
    return {
      ll: { x: this.leftSE.point.x, y: t.isLessThan(e) ? t : e },
      ur: { x: this.rightSE.point.x, y: t.isGreaterThan(e) ? t : e }
    };
  }
  /* A vector from the left point to the right */
  vector() {
    return {
      x: this.rightSE.point.x.minus(this.leftSE.point.x),
      y: this.rightSE.point.y.minus(this.leftSE.point.y)
    };
  }
  isAnEndpoint(t) {
    return t.x.eq(this.leftSE.point.x) && t.y.eq(this.leftSE.point.y) || t.x.eq(this.rightSE.point.x) && t.y.eq(this.rightSE.point.y);
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
  comparePoint(t) {
    return le.orient(this.leftSE.point, t, this.rightSE.point);
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
  getIntersection(t) {
    const e = this.bbox(), n = t.bbox(), r = Ie(e, n);
    if (r === null) return null;
    const f = this.leftSE.point, a = this.rightSE.point, c = t.leftSE.point, E = t.rightSE.point, d = ae(e, c) && this.comparePoint(c) === 0, T = ae(n, f) && t.comparePoint(f) === 0, b = ae(e, E) && this.comparePoint(E) === 0, P = ae(n, a) && t.comparePoint(a) === 0;
    if (T && d)
      return P && !b ? a : !P && b ? E : null;
    if (T)
      return b && f.x.eq(E.x) && f.y.eq(E.y) ? null : f;
    if (d)
      return P && a.x.eq(c.x) && a.y.eq(c.y) ? null : c;
    if (P && b) return null;
    if (P) return a;
    if (b) return E;
    const N = At(f, this.vector(), c, t.vector());
    return N === null || !ae(r, N) ? null : le.snap(N);
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
  split(t) {
    const e = [], n = t.events !== void 0, r = new ie(t, !0), f = new ie(t, !1), a = this.rightSE;
    this.replaceRightSE(f), e.push(f), e.push(r);
    const c = new Ee(
      r,
      a,
      this.rings.slice(),
      this.windings.slice()
    );
    return ie.comparePoints(c.leftSE.point, c.rightSE.point) > 0 && c.swapEvents(), ie.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n && (r.checkForConsuming(), f.checkForConsuming()), e;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const t = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = t, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let e = 0, n = this.windings.length; e < n; e++)
      this.windings[e] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(t) {
    let e = this, n = t;
    for (; e.consumedBy; ) e = e.consumedBy;
    for (; n.consumedBy; ) n = n.consumedBy;
    const r = Ee.compare(e, n);
    if (r !== 0) {
      if (r > 0) {
        const f = e;
        e = n, n = f;
      }
      if (e.prev === n) {
        const f = e;
        e = n, n = f;
      }
      for (let f = 0, a = n.rings.length; f < a; f++) {
        const c = n.rings[f], E = n.windings[f], d = e.rings.indexOf(c);
        d === -1 ? (e.rings.push(c), e.windings.push(E)) : e.windings[d] += E;
      }
      n.rings = null, n.windings = null, n.consumedBy = e, n.leftSE.consumedBy = e.leftSE, n.rightSE.consumedBy = e.rightSE;
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
      const t = this.prev.consumedBy || this.prev;
      this._beforeState = t.afterState();
    }
    return this._beforeState;
  }
  afterState() {
    if (this._afterState !== void 0) return this._afterState;
    const t = this.beforeState();
    this._afterState = {
      rings: t.rings.slice(0),
      windings: t.windings.slice(0),
      multiPolys: []
    };
    const e = this._afterState.rings, n = this._afterState.windings, r = this._afterState.multiPolys;
    for (let c = 0, E = this.rings.length; c < E; c++) {
      const d = this.rings[c], T = this.windings[c], b = e.indexOf(d);
      b === -1 ? (e.push(d), n.push(T)) : n[b] += T;
    }
    const f = [], a = [];
    for (let c = 0, E = e.length; c < E; c++) {
      if (n[c] === 0) continue;
      const d = e[c], T = d.poly;
      if (a.indexOf(T) === -1)
        if (d.isExterior) f.push(T);
        else {
          a.indexOf(T) === -1 && a.push(T);
          const b = f.indexOf(d.poly);
          b !== -1 && f.splice(b, 1);
        }
    }
    for (let c = 0, E = f.length; c < E; c++) {
      const d = f[c].multiPoly;
      r.indexOf(d) === -1 && r.push(d);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const t = this.beforeState().multiPolys, e = this.afterState().multiPolys;
    switch (Te.type) {
      case "union": {
        const n = t.length === 0, r = e.length === 0;
        this._isInResult = n !== r;
        break;
      }
      case "intersection": {
        let n, r;
        t.length < e.length ? (n = t.length, r = e.length) : (n = e.length, r = t.length), this._isInResult = r === Te.numMultiPolys && n < r;
        break;
      }
      case "xor": {
        const n = Math.abs(t.length - e.length);
        this._isInResult = n % 2 === 1;
        break;
      }
      case "difference": {
        const n = (r) => r.length === 1 && r[0].isSubject;
        this._isInResult = n(t) !== n(e);
        break;
      }
    }
    return this._isInResult;
  }
}, Je = class {
  constructor(i, t, e) {
    M(this, "poly");
    M(this, "isExterior");
    M(this, "segments");
    M(this, "bbox");
    if (!Array.isArray(i) || i.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = t, this.isExterior = e, this.segments = [], typeof i[0][0] != "number" || typeof i[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const n = le.snap({ x: new ne(i[0][0]), y: new ne(i[0][1]) });
    this.bbox = {
      ll: { x: n.x, y: n.y },
      ur: { x: n.x, y: n.y }
    };
    let r = n;
    for (let f = 1, a = i.length; f < a; f++) {
      if (typeof i[f][0] != "number" || typeof i[f][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      const c = le.snap({ x: new ne(i[f][0]), y: new ne(i[f][1]) });
      c.x.eq(r.x) && c.y.eq(r.y) || (this.segments.push(Pe.fromRing(r, c, this)), c.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = c.x), c.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = c.y), c.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = c.x), c.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = c.y), r = c);
    }
    (!n.x.eq(r.x) || !n.y.eq(r.y)) && this.segments.push(Pe.fromRing(r, n, this));
  }
  getSweepEvents() {
    const i = [];
    for (let t = 0, e = this.segments.length; t < e; t++) {
      const n = this.segments[t];
      i.push(n.leftSE), i.push(n.rightSE);
    }
    return i;
  }
}, qt = class {
  constructor(i, t) {
    M(this, "multiPoly");
    M(this, "exteriorRing");
    M(this, "interiorRings");
    M(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Je(i[0], this, !0), this.bbox = {
      ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y },
      ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y }
    }, this.interiorRings = [];
    for (let e = 1, n = i.length; e < n; e++) {
      const r = new Je(i[e], this, !1);
      r.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = r.bbox.ll.x), r.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = r.bbox.ll.y), r.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = r.bbox.ur.x), r.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = r.bbox.ur.y), this.interiorRings.push(r);
    }
    this.multiPoly = t;
  }
  getSweepEvents() {
    const i = this.exteriorRing.getSweepEvents();
    for (let t = 0, e = this.interiorRings.length; t < e; t++) {
      const n = this.interiorRings[t].getSweepEvents();
      for (let r = 0, f = n.length; r < f; r++)
        i.push(n[r]);
    }
    return i;
  }
}, je = class {
  constructor(i, t) {
    M(this, "isSubject");
    M(this, "polys");
    M(this, "bbox");
    if (!Array.isArray(i))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof i[0][0][0] == "number" && (i = [i]);
    } catch {
    }
    this.polys = [], this.bbox = {
      ll: { x: new ne(Number.POSITIVE_INFINITY), y: new ne(Number.POSITIVE_INFINITY) },
      ur: { x: new ne(Number.NEGATIVE_INFINITY), y: new ne(Number.NEGATIVE_INFINITY) }
    };
    for (let e = 0, n = i.length; e < n; e++) {
      const r = new qt(i[e], this);
      r.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = r.bbox.ll.x), r.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = r.bbox.ll.y), r.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = r.bbox.ur.x), r.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = r.bbox.ur.y), this.polys.push(r);
    }
    this.isSubject = t;
  }
  getSweepEvents() {
    const i = [];
    for (let t = 0, e = this.polys.length; t < e; t++) {
      const n = this.polys[t].getSweepEvents();
      for (let r = 0, f = n.length; r < f; r++)
        i.push(n[r]);
    }
    return i;
  }
}, Dt = (i, ...t) => Te.run("union", i, t), zt = (i, ...t) => Te.run("difference", i, t);
le.set;
function Ut(i) {
  const t = [];
  if (Ge(i, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least two features");
  const e = i.features[0].properties || {}, n = zt(t[0], ...t.slice(1));
  return n.length === 0 ? null : n.length === 1 ? Be(n[0], e) : rt(n, e);
}
var Vt = Ut;
function $t(i) {
  if (!i) throw new Error("geojson is required");
  var t = [];
  return St(i, function(e) {
    t.push(e);
  }), Ce(t);
}
var Kt = $t;
function Xt(i, t = {}) {
  const e = [];
  if (Ge(i, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least 2 geometries");
  const n = Dt(e[0], ...e.slice(1));
  return n.length === 0 ? null : n.length === 1 ? Be(n[0], t.properties) : rt(n, t.properties);
}
var Wt = Xt;
function Qe(i) {
  const t = [...i];
  return t[2] < t[0] && (Math.abs((t[0] + t[2] + 360) / 2) > Math.abs((t[0] - 360 + t[2]) / 2) ? t[0] -= 360 : t[2] += 360), t;
}
function et(i, t) {
  const e = Vt(
    Ce([
      Be([
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
  if (!e)
    return;
  e.properties = { isMask: !0 };
  const n = Qe(Ke(i)), r = (n[2] - n[0]) / 360 / 1e3, f = n[0] < -180, a = n[2] > 180, c = Kt(i);
  if (c.features.length > 1 && (f || a))
    for (const E of c.features) {
      const d = Qe(Ke(E));
      if (a && d[0] < -180 + r)
        for (const T of E.geometry.coordinates)
          for (const b of T)
            b[0] += 360 - r;
      if (f && d[2] > 180 - r)
        for (const T of E.geometry.coordinates)
          for (const b of T)
            b[0] -= 360 - r;
    }
  t(
    Ce([
      c.features.length < 2 ? i : Wt(c) ?? i,
      e
    ])
  );
}
const tt = "EPSG:4326";
function Yt(i) {
  var f;
  const t = i.getProperties(), { isMask: e } = t, n = (f = i.getGeometry()) == null ? void 0 : f.getType(), r = e ? 0 : n === "LineString" || n === "MultiLineString" ? 3 : 2;
  return new wt({
    stroke: e ? void 0 : new $e({
      color: "#3170fe",
      lineDash: [r, r],
      width: r,
      lineCap: "butt"
    }),
    fill: e ? new Ve({
      color: "#00000020"
    }) : void 0,
    image: new xt({
      src: `/icons/marker_${t.isReverse ? "reverse" : t.isSelected ? "selected" : "unselected"}.svg`,
      anchor: [0.5, 1]
    }),
    zIndex: t.isSelected ? 2 : t.isReverse ? 0 : 1,
    text: t.isSelected && t.tooltip ? new Et({
      backgroundFill: new Ve({ color: "white" }),
      text: t.tooltip,
      offsetY: -40,
      backgroundStroke: new $e({
        color: "white",
        lineJoin: "round",
        width: 3
      }),
      padding: [2, 0, 0, 2]
    }) : void 0
  });
}
function oi(i, t = {}, e = {}, n = Yt) {
  let r = -1, f, a, c, E = !1;
  const d = new gt({
    updateWhileAnimating: !0
  });
  i.addLayer(d);
  const T = new dt({});
  d.setSource(T), d.setStyle(n), i.on("click", (_) => {
    i.forEachFeatureAtPixel(_.pixel, (L) => {
      const A = L.getId();
      if (A)
        return _.stopPropagation(), a == null || a({ type: "markerClick", id: A }), L;
    });
  }), i.on("pointermove", (_) => {
    const L = i.forEachFeatureAtPixel(_.pixel, (A) => A.getId());
    f !== L && (f && (a == null || a({
      type: "markerMouseLeave",
      id: f
    })), L && (a == null || a({
      type: "markerMouseEnter",
      id: L
    })), i.getTargetElement().style.cursor = L ? "pointer" : E ? "crosshair" : "", f = L);
  });
  function b() {
    return mt() ?? i.getView().getProjection();
  }
  function P(_) {
    return _.transform(tt, b());
  }
  const N = (_) => {
    a == null || a({
      type: "mapClick",
      coordinates: Ue(_.coordinate, b())
    });
  };
  return {
    setEventHandler(_) {
      _ ? (a = _, i.on("click", N)) : (a = void 0, i.un("click", N));
    },
    flyTo(_, L) {
      i.getView().animate({
        center: me(_, b()),
        ...L ? { zoom: L } : {},
        duration: 2e3,
        ...t
      });
    },
    fitBounds(_, L, A) {
      i.getView().fit(yt(_, tt, b()), {
        padding: [L, L, L, L],
        ...A ? { maxZoom: A } : {},
        duration: 2e3,
        ...e
      });
    },
    indicateReverse(_) {
      E = _, i.getTargetElement().style.cursor = _ ? "crosshair" : "";
    },
    setReverseMarker(_) {
      c ? _ ? c.getGeometry().setCoordinates(
        me(_, b())
      ) : (T.removeFeature(c), c.dispose(), c = void 0) : _ && (c = new se(
        new Re(me(_, b()))
      ), c.setProperties({ isReverse: !0 }), T.addFeature(c));
    },
    setFeatures(_, L, A) {
      function V(S) {
        var F;
        if (S)
          for (const B of S.features) {
            const W = B.geometry.type === "Polygon" ? new Fe(B.geometry.coordinates) : B.geometry.type === "MultiPolygon" ? new qe(B.geometry.coordinates) : null;
            W && T.addFeature(
              new se({
                isMask: !!((F = B.properties) != null && F.isMask),
                geometry: P(W)
              })
            );
          }
      }
      T.clear(), c && T.addFeature(c);
      e: if (L) {
        let S = !1;
        if (L.geometry.type === "GeometryCollection") {
          const F = L.geometry.geometries.map(
            (B) => B.type === "Polygon" ? new Fe(B.coordinates) : B.type === "MultiPolygon" ? new qe(B.coordinates) : null
          ).filter((B) => !!B);
          if (F.length > 0)
            T.addFeature(
              new se(P(new pt(F)))
            ), S = !0;
          else
            for (const B of L.geometry.geometries)
              B.type === "LineString" ? (T.addFeature(
                new se(
                  P(new De(B.coordinates))
                )
              ), S = !0) : B.type === "MultiLineString" && T.addFeature(
                new se(
                  P(new ze(B.coordinates))
                )
              ), S = !0;
        }
        if (!S) {
          if (L.geometry.type === "Polygon")
            et(L, V);
          else if (L.geometry.type === "MultiPolygon")
            et(L, V);
          else if (L.geometry.type === "LineString") {
            T.addFeature(
              new se(
                P(new De(L.geometry.coordinates))
              )
            );
            break e;
          } else if (L.geometry.type === "MultiLineString") {
            T.addFeature(
              new se(
                P(new ze(L.geometry.coordinates))
              )
            );
            break e;
          }
        }
        if (!A && !L.geometry.type.endsWith("Point"))
          break e;
        T.addFeature(new se(P(new Re(L.center))));
      }
      for (const S of _ ?? []) {
        if (S === L)
          continue;
        const F = new se(
          new Re(me(S.center, b()))
        );
        F.setId(S.id), F.setProperties({
          fuzzy: !!S.matching_text,
          tooltip: S.place_type[0] === "reverse" ? S.place_name : S.place_name.replace(/,.*/, "")
        }), T.addFeature(F);
      }
    },
    setSelectedMarker(_) {
      var V, S, F;
      const L = T.getFeatures(), A = (V = L[0]) != null && V.getProperties().isReverse ? 1 : 0;
      r > -1 && ((S = L[r + A]) == null || S.setProperties({
        isSelected: !1
      })), _ > -1 && ((F = L[_ + A]) == null || F.setProperties({
        isSelected: !0
      })), r = _;
    },
    getCenterAndZoom() {
      const _ = i.getView(), L = _.getCenter(), A = _.getZoom();
      if (!(!L || A === void 0))
        return [A, ...Ue(L, b())];
    }
  };
}
export {
  oi as createOpenLayersMapController
};
//# sourceMappingURL=openlayers-controller.js.map
