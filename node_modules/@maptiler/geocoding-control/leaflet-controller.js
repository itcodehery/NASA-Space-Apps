var Pt = Object.defineProperty;
var Ot = (t, e, n) => e in t ? Pt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var C = (t, e, n) => Ot(t, typeof e != "symbol" ? e + "" : e, n);
import * as ce from "leaflet";
function Ee(t, e, n = {}) {
  const i = { type: "Feature" };
  return (n.id === 0 || n.id) && (i.id = n.id), n.bbox && (i.bbox = n.bbox), i.properties = e || {}, i.geometry = t, i;
}
function Ze(t, e, n = {}) {
  for (const r of t) {
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
  return Ee({
    type: "Polygon",
    coordinates: t
  }, e, n);
}
function ve(t, e = {}) {
  const n = { type: "FeatureCollection" };
  return e.id && (n.id = e.id), e.bbox && (n.bbox = e.bbox), n.features = t, n;
}
function gt(t, e, n = {}) {
  return Ee({
    type: "MultiPolygon",
    coordinates: t
  }, e, n);
}
function yt(t, e, n) {
  if (t !== null)
    for (var i, r, u, a, h, E, p, _ = 0, b = 0, M, T = t.type, L = T === "FeatureCollection", B = T === "Feature", q = L ? t.features.length : 1, I = 0; I < q; I++) {
      p = L ? t.features[I].geometry : B ? t.geometry : t, M = p ? p.type === "GeometryCollection" : !1, h = M ? p.geometries.length : 1;
      for (var v = 0; v < h; v++) {
        var N = 0, $ = 0;
        if (a = M ? p.geometries[v] : p, a !== null) {
          E = a.coordinates;
          var K = a.type;
          switch (_ = 0, K) {
            case null:
              break;
            case "Point":
              if (e(
                E,
                b,
                I,
                N,
                $
              ) === !1)
                return !1;
              b++, N++;
              break;
            case "LineString":
            case "MultiPoint":
              for (i = 0; i < E.length; i++) {
                if (e(
                  E[i],
                  b,
                  I,
                  N,
                  $
                ) === !1)
                  return !1;
                b++, K === "MultiPoint" && N++;
              }
              K === "LineString" && N++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (i = 0; i < E.length; i++) {
                for (r = 0; r < E[i].length - _; r++) {
                  if (e(
                    E[i][r],
                    b,
                    I,
                    N,
                    $
                  ) === !1)
                    return !1;
                  b++;
                }
                K === "MultiLineString" && N++, K === "Polygon" && $++;
              }
              K === "Polygon" && N++;
              break;
            case "MultiPolygon":
              for (i = 0; i < E.length; i++) {
                for ($ = 0, r = 0; r < E[i].length; r++) {
                  for (u = 0; u < E[i][r].length - _; u++) {
                    if (e(
                      E[i][r][u],
                      b,
                      I,
                      N,
                      $
                    ) === !1)
                      return !1;
                    b++;
                  }
                  $++;
                }
                N++;
              }
              break;
            case "GeometryCollection":
              for (i = 0; i < a.geometries.length; i++)
                if (yt(a.geometries[i], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Ye(t, e) {
  var n, i, r, u, a, h, E, p, _, b, M = 0, T = t.type === "FeatureCollection", L = t.type === "Feature", B = T ? t.features.length : 1;
  for (n = 0; n < B; n++) {
    for (h = T ? t.features[n].geometry : L ? t.geometry : t, p = T ? t.features[n].properties : L ? t.properties : {}, _ = T ? t.features[n].bbox : L ? t.bbox : void 0, b = T ? t.features[n].id : L ? t.id : void 0, E = h ? h.type === "GeometryCollection" : !1, a = E ? h.geometries.length : 1, r = 0; r < a; r++) {
      if (u = E ? h.geometries[r] : h, u === null) {
        if (e(
          null,
          M,
          p,
          _,
          b
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
            p,
            _,
            b
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (i = 0; i < u.geometries.length; i++)
            if (e(
              u.geometries[i],
              M,
              p,
              _,
              b
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
function Rt(t, e) {
  Ye(t, function(n, i, r, u, a) {
    var h = n === null ? null : n.type;
    switch (h) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          Ee(n, r, { bbox: u, id: a }),
          i,
          0
        ) === !1 ? !1 : void 0;
    }
    var E;
    switch (h) {
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
    for (var p = 0; p < n.coordinates.length; p++) {
      var _ = n.coordinates[p], b = {
        type: E,
        coordinates: _
      };
      if (e(Ee(b, r), i, p) === !1)
        return !1;
    }
  });
}
function Nt(t, e = {}) {
  if (t.bbox != null && e.recompute !== !0)
    return t.bbox;
  const n = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return yt(t, (i) => {
    n[0] > i[0] && (n[0] = i[0]), n[1] > i[1] && (n[1] = i[1]), n[2] < i[0] && (n[2] = i[0]), n[3] < i[1] && (n[3] = i[1]);
  }), n;
}
var qe = Nt;
function At(t) {
  if (!t)
    throw new Error("geojson is required");
  switch (t.type) {
    case "Feature":
      return dt(t);
    case "FeatureCollection":
      return It(t);
    case "Point":
    case "LineString":
    case "Polygon":
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "GeometryCollection":
      return We(t);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function dt(t) {
  const e = { type: "Feature" };
  return Object.keys(t).forEach((n) => {
    switch (n) {
      case "type":
      case "properties":
      case "geometry":
        return;
      default:
        e[n] = t[n];
    }
  }), e.properties = mt(t.properties), t.geometry == null ? e.geometry = null : e.geometry = We(t.geometry), e;
}
function mt(t) {
  const e = {};
  return t && Object.keys(t).forEach((n) => {
    const i = t[n];
    typeof i == "object" ? i === null ? e[n] = null : Array.isArray(i) ? e[n] = i.map((r) => r) : e[n] = mt(i) : e[n] = i;
  }), e;
}
function It(t) {
  const e = { type: "FeatureCollection" };
  return Object.keys(t).forEach((n) => {
    switch (n) {
      case "type":
      case "features":
        return;
      default:
        e[n] = t[n];
    }
  }), e.features = t.features.map((n) => dt(n)), e;
}
function We(t) {
  const e = { type: t.type };
  return t.bbox && (e.bbox = t.bbox), t.type === "GeometryCollection" ? (e.geometries = t.geometries.map((n) => We(n)), e) : (e.coordinates = xt(t.coordinates), e);
}
function xt(t) {
  const e = t;
  return typeof e[0] != "object" ? e.slice() : e.map((n) => xt(n));
}
var kt = At, Bt = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, Be = Math.ceil, j = Math.floor, Z = "[BigNumber Error] ", He = Z + "Number primitive has more than 15 significant digits: ", ee = 1e14, R = 14, je = 9007199254740991, Ge = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], le = 1e7, Y = 1e9;
function wt(t) {
  var e, n, i, r = v.prototype = { constructor: v, toString: null, valueOf: null }, u = new v(1), a = 20, h = 4, E = -7, p = 21, _ = -1e7, b = 1e7, M = !1, T = 1, L = 0, B = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, q = "0123456789abcdefghijklmnopqrstuvwxyz", I = !0;
  function v(s, o) {
    var l, m, c, y, w, f, g, x, d = this;
    if (!(d instanceof v)) return new v(s, o);
    if (o == null) {
      if (s && s._isBigNumber === !0) {
        d.s = s.s, !s.c || s.e > b ? d.c = d.e = null : s.e < _ ? d.c = [d.e = 0] : (d.e = s.e, d.c = s.c.slice());
        return;
      }
      if ((f = typeof s == "number") && s * 0 == 0) {
        if (d.s = 1 / s < 0 ? (s = -s, -1) : 1, s === ~~s) {
          for (y = 0, w = s; w >= 10; w /= 10, y++) ;
          y > b ? d.c = d.e = null : (d.e = y, d.c = [s]);
          return;
        }
        x = String(s);
      } else {
        if (!Bt.test(x = String(s))) return i(d, x, f);
        d.s = x.charCodeAt(0) == 45 ? (x = x.slice(1), -1) : 1;
      }
      (y = x.indexOf(".")) > -1 && (x = x.replace(".", "")), (w = x.search(/e/i)) > 0 ? (y < 0 && (y = w), y += +x.slice(w + 1), x = x.substring(0, w)) : y < 0 && (y = x.length);
    } else {
      if (F(o, 2, q.length, "Base"), o == 10 && I)
        return d = new v(s), W(d, a + d.e + 1, h);
      if (x = String(s), f = typeof s == "number") {
        if (s * 0 != 0) return i(d, x, f, o);
        if (d.s = 1 / s < 0 ? (x = x.slice(1), -1) : 1, v.DEBUG && x.replace(/^0\.0*|\./, "").length > 15)
          throw Error(He + s);
      } else
        d.s = x.charCodeAt(0) === 45 ? (x = x.slice(1), -1) : 1;
      for (l = q.slice(0, o), y = w = 0, g = x.length; w < g; w++)
        if (l.indexOf(m = x.charAt(w)) < 0) {
          if (m == ".") {
            if (w > y) {
              y = g;
              continue;
            }
          } else if (!c && (x == x.toUpperCase() && (x = x.toLowerCase()) || x == x.toLowerCase() && (x = x.toUpperCase()))) {
            c = !0, w = -1, y = 0;
            continue;
          }
          return i(d, String(s), f, o);
        }
      f = !1, x = n(x, o, 10, d.s), (y = x.indexOf(".")) > -1 ? x = x.replace(".", "") : y = x.length;
    }
    for (w = 0; x.charCodeAt(w) === 48; w++) ;
    for (g = x.length; x.charCodeAt(--g) === 48; ) ;
    if (x = x.slice(w, ++g)) {
      if (g -= w, f && v.DEBUG && g > 15 && (s > je || s !== j(s)))
        throw Error(He + d.s * s);
      if ((y = y - w - 1) > b)
        d.c = d.e = null;
      else if (y < _)
        d.c = [d.e = 0];
      else {
        if (d.e = y, d.c = [], w = (y + 1) % R, y < 0 && (w += R), w < g) {
          for (w && d.c.push(+x.slice(0, w)), g -= R; w < g; )
            d.c.push(+x.slice(w, w += R));
          w = R - (x = x.slice(w)).length;
        } else
          w -= g;
        for (; w--; x += "0") ;
        d.c.push(+x);
      }
    } else
      d.c = [d.e = 0];
  }
  v.clone = wt, v.ROUND_UP = 0, v.ROUND_DOWN = 1, v.ROUND_CEIL = 2, v.ROUND_FLOOR = 3, v.ROUND_HALF_UP = 4, v.ROUND_HALF_DOWN = 5, v.ROUND_HALF_EVEN = 6, v.ROUND_HALF_CEIL = 7, v.ROUND_HALF_FLOOR = 8, v.EUCLID = 9, v.config = v.set = function(s) {
    var o, l;
    if (s != null)
      if (typeof s == "object") {
        if (s.hasOwnProperty(o = "DECIMAL_PLACES") && (l = s[o], F(l, 0, Y, o), a = l), s.hasOwnProperty(o = "ROUNDING_MODE") && (l = s[o], F(l, 0, 8, o), h = l), s.hasOwnProperty(o = "EXPONENTIAL_AT") && (l = s[o], l && l.pop ? (F(l[0], -1e9, 0, o), F(l[1], 0, Y, o), E = l[0], p = l[1]) : (F(l, -1e9, Y, o), E = -(p = l < 0 ? -l : l))), s.hasOwnProperty(o = "RANGE"))
          if (l = s[o], l && l.pop)
            F(l[0], -1e9, -1, o), F(l[1], 1, Y, o), _ = l[0], b = l[1];
          else if (F(l, -1e9, Y, o), l)
            _ = -(b = l < 0 ? -l : l);
          else
            throw Error(Z + o + " cannot be zero: " + l);
        if (s.hasOwnProperty(o = "CRYPTO"))
          if (l = s[o], l === !!l)
            if (l)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                M = l;
              else
                throw M = !l, Error(Z + "crypto unavailable");
            else
              M = l;
          else
            throw Error(Z + o + " not true or false: " + l);
        if (s.hasOwnProperty(o = "MODULO_MODE") && (l = s[o], F(l, 0, 9, o), T = l), s.hasOwnProperty(o = "POW_PRECISION") && (l = s[o], F(l, 0, Y, o), L = l), s.hasOwnProperty(o = "FORMAT"))
          if (l = s[o], typeof l == "object") B = l;
          else throw Error(Z + o + " not an object: " + l);
        if (s.hasOwnProperty(o = "ALPHABET"))
          if (l = s[o], typeof l == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(l))
            I = l.slice(0, 10) == "0123456789", q = l;
          else
            throw Error(Z + o + " invalid: " + l);
      } else
        throw Error(Z + "Object expected: " + s);
    return {
      DECIMAL_PLACES: a,
      ROUNDING_MODE: h,
      EXPONENTIAL_AT: [E, p],
      RANGE: [_, b],
      CRYPTO: M,
      MODULO_MODE: T,
      POW_PRECISION: L,
      FORMAT: B,
      ALPHABET: q
    };
  }, v.isBigNumber = function(s) {
    if (!s || s._isBigNumber !== !0) return !1;
    if (!v.DEBUG) return !0;
    var o, l, m = s.c, c = s.e, y = s.s;
    e: if ({}.toString.call(m) == "[object Array]") {
      if ((y === 1 || y === -1) && c >= -1e9 && c <= Y && c === j(c)) {
        if (m[0] === 0) {
          if (c === 0 && m.length === 1) return !0;
          break e;
        }
        if (o = (c + 1) % R, o < 1 && (o += R), String(m[0]).length == o) {
          for (o = 0; o < m.length; o++)
            if (l = m[o], l < 0 || l >= ee || l !== j(l)) break e;
          if (l !== 0) return !0;
        }
      }
    } else if (m === null && c === null && (y === null || y === 1 || y === -1))
      return !0;
    throw Error(Z + "Invalid BigNumber: " + s);
  }, v.maximum = v.max = function() {
    return $(arguments, -1);
  }, v.minimum = v.min = function() {
    return $(arguments, 1);
  }, v.random = function() {
    var s = 9007199254740992, o = Math.random() * s & 2097151 ? function() {
      return j(Math.random() * s);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(l) {
      var m, c, y, w, f, g = 0, x = [], d = new v(u);
      if (l == null ? l = a : F(l, 0, Y), w = Be(l / R), M)
        if (crypto.getRandomValues) {
          for (m = crypto.getRandomValues(new Uint32Array(w *= 2)); g < w; )
            f = m[g] * 131072 + (m[g + 1] >>> 11), f >= 9e15 ? (c = crypto.getRandomValues(new Uint32Array(2)), m[g] = c[0], m[g + 1] = c[1]) : (x.push(f % 1e14), g += 2);
          g = w / 2;
        } else if (crypto.randomBytes) {
          for (m = crypto.randomBytes(w *= 7); g < w; )
            f = (m[g] & 31) * 281474976710656 + m[g + 1] * 1099511627776 + m[g + 2] * 4294967296 + m[g + 3] * 16777216 + (m[g + 4] << 16) + (m[g + 5] << 8) + m[g + 6], f >= 9e15 ? crypto.randomBytes(7).copy(m, g) : (x.push(f % 1e14), g += 7);
          g = w / 7;
        } else
          throw M = !1, Error(Z + "crypto unavailable");
      if (!M)
        for (; g < w; )
          f = o(), f < 9e15 && (x[g++] = f % 1e14);
      for (w = x[--g], l %= R, w && l && (f = Ge[R - l], x[g] = j(w / f) * f); x[g] === 0; x.pop(), g--) ;
      if (g < 0)
        x = [y = 0];
      else {
        for (y = -1; x[0] === 0; x.splice(0, 1), y -= R) ;
        for (g = 1, f = x[0]; f >= 10; f /= 10, g++) ;
        g < R && (y -= R - g);
      }
      return d.e = y, d.c = x, d;
    };
  }(), v.sum = function() {
    for (var s = 1, o = arguments, l = new v(o[0]); s < o.length; ) l = l.plus(o[s++]);
    return l;
  }, n = /* @__PURE__ */ function() {
    var s = "0123456789";
    function o(l, m, c, y) {
      for (var w, f = [0], g, x = 0, d = l.length; x < d; ) {
        for (g = f.length; g--; f[g] *= m) ;
        for (f[0] += y.indexOf(l.charAt(x++)), w = 0; w < f.length; w++)
          f[w] > c - 1 && (f[w + 1] == null && (f[w + 1] = 0), f[w + 1] += f[w] / c | 0, f[w] %= c);
      }
      return f.reverse();
    }
    return function(l, m, c, y, w) {
      var f, g, x, d, S, P, O, k, D = l.indexOf("."), U = a, A = h;
      for (D >= 0 && (d = L, L = 0, l = l.replace(".", ""), k = new v(m), P = k.pow(l.length - D), L = d, k.c = o(
        se(H(P.c), P.e, "0"),
        10,
        c,
        s
      ), k.e = k.c.length), O = o(l, m, c, w ? (f = q, s) : (f = s, q)), x = d = O.length; O[--d] == 0; O.pop()) ;
      if (!O[0]) return f.charAt(0);
      if (D < 0 ? --x : (P.c = O, P.e = x, P.s = y, P = e(P, k, U, A, c), O = P.c, S = P.r, x = P.e), g = x + U + 1, D = O[g], d = c / 2, S = S || g < 0 || O[g + 1] != null, S = A < 4 ? (D != null || S) && (A == 0 || A == (P.s < 0 ? 3 : 2)) : D > d || D == d && (A == 4 || S || A == 6 && O[g - 1] & 1 || A == (P.s < 0 ? 8 : 7)), g < 1 || !O[0])
        l = S ? se(f.charAt(1), -U, f.charAt(0)) : f.charAt(0);
      else {
        if (O.length = g, S)
          for (--c; ++O[--g] > c; )
            O[g] = 0, g || (++x, O = [1].concat(O));
        for (d = O.length; !O[--d]; ) ;
        for (D = 0, l = ""; D <= d; l += f.charAt(O[D++])) ;
        l = se(l, x, f.charAt(0));
      }
      return l;
    };
  }(), e = /* @__PURE__ */ function() {
    function s(m, c, y) {
      var w, f, g, x, d = 0, S = m.length, P = c % le, O = c / le | 0;
      for (m = m.slice(); S--; )
        g = m[S] % le, x = m[S] / le | 0, w = O * g + x * P, f = P * g + w % le * le + d, d = (f / y | 0) + (w / le | 0) + O * x, m[S] = f % y;
      return d && (m = [d].concat(m)), m;
    }
    function o(m, c, y, w) {
      var f, g;
      if (y != w)
        g = y > w ? 1 : -1;
      else
        for (f = g = 0; f < y; f++)
          if (m[f] != c[f]) {
            g = m[f] > c[f] ? 1 : -1;
            break;
          }
      return g;
    }
    function l(m, c, y, w) {
      for (var f = 0; y--; )
        m[y] -= f, f = m[y] < c[y] ? 1 : 0, m[y] = f * w + m[y] - c[y];
      for (; !m[0] && m.length > 1; m.splice(0, 1)) ;
    }
    return function(m, c, y, w, f) {
      var g, x, d, S, P, O, k, D, U, A, G, V, be, Ie, ke, te, ge, J = m.s == c.s ? 1 : -1, X = m.c, z = c.c;
      if (!X || !X[0] || !z || !z[0])
        return new v(
          // Return NaN if either NaN, or both Infinity or 0.
          !m.s || !c.s || (X ? z && X[0] == z[0] : !z) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            X && X[0] == 0 || !z ? J * 0 : J / 0
          )
        );
      for (D = new v(J), U = D.c = [], x = m.e - c.e, J = y + x + 1, f || (f = ee, x = Q(m.e / R) - Q(c.e / R), J = J / R | 0), d = 0; z[d] == (X[d] || 0); d++) ;
      if (z[d] > (X[d] || 0) && x--, J < 0)
        U.push(1), S = !0;
      else {
        for (Ie = X.length, te = z.length, d = 0, J += 2, P = j(f / (z[0] + 1)), P > 1 && (z = s(z, P, f), X = s(X, P, f), te = z.length, Ie = X.length), be = te, A = X.slice(0, te), G = A.length; G < te; A[G++] = 0) ;
        ge = z.slice(), ge = [0].concat(ge), ke = z[0], z[1] >= f / 2 && ke++;
        do {
          if (P = 0, g = o(z, A, te, G), g < 0) {
            if (V = A[0], te != G && (V = V * f + (A[1] || 0)), P = j(V / ke), P > 1)
              for (P >= f && (P = f - 1), O = s(z, P, f), k = O.length, G = A.length; o(O, A, k, G) == 1; )
                P--, l(O, te < k ? ge : z, k, f), k = O.length, g = 1;
            else
              P == 0 && (g = P = 1), O = z.slice(), k = O.length;
            if (k < G && (O = [0].concat(O)), l(A, O, G, f), G = A.length, g == -1)
              for (; o(z, A, te, G) < 1; )
                P++, l(A, te < G ? ge : z, G, f), G = A.length;
          } else g === 0 && (P++, A = [0]);
          U[d++] = P, A[0] ? A[G++] = X[be] || 0 : (A = [X[be]], G = 1);
        } while ((be++ < Ie || A[0] != null) && J--);
        S = A[0] != null, U[0] || U.splice(0, 1);
      }
      if (f == ee) {
        for (d = 1, J = U[0]; J >= 10; J /= 10, d++) ;
        W(D, y + (D.e = d + x * R - 1) + 1, w, S);
      } else
        D.e = x, D.r = +S;
      return D;
    };
  }();
  function N(s, o, l, m) {
    var c, y, w, f, g;
    if (l == null ? l = h : F(l, 0, 8), !s.c) return s.toString();
    if (c = s.c[0], w = s.e, o == null)
      g = H(s.c), g = m == 1 || m == 2 && (w <= E || w >= p) ? Te(g, w) : se(g, w, "0");
    else if (s = W(new v(s), o, l), y = s.e, g = H(s.c), f = g.length, m == 1 || m == 2 && (o <= y || y <= E)) {
      for (; f < o; g += "0", f++) ;
      g = Te(g, y);
    } else if (o -= w, g = se(g, y, "0"), y + 1 > f) {
      if (--o > 0) for (g += "."; o--; g += "0") ;
    } else if (o += y - f, o > 0)
      for (y + 1 == f && (g += "."); o--; g += "0") ;
    return s.s < 0 && c ? "-" + g : g;
  }
  function $(s, o) {
    for (var l, m, c = 1, y = new v(s[0]); c < s.length; c++)
      m = new v(s[c]), (!m.s || (l = fe(y, m)) === o || l === 0 && y.s === o) && (y = m);
    return y;
  }
  function K(s, o, l) {
    for (var m = 1, c = o.length; !o[--c]; o.pop()) ;
    for (c = o[0]; c >= 10; c /= 10, m++) ;
    return (l = m + l * R - 1) > b ? s.c = s.e = null : l < _ ? s.c = [s.e = 0] : (s.e = l, s.c = o), s;
  }
  i = /* @__PURE__ */ function() {
    var s = /^(-?)0([xbo])(?=\w[\w.]*$)/i, o = /^([^.]+)\.$/, l = /^\.([^.]+)$/, m = /^-?(Infinity|NaN)$/, c = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(y, w, f, g) {
      var x, d = f ? w : w.replace(c, "");
      if (m.test(d))
        y.s = isNaN(d) ? null : d < 0 ? -1 : 1;
      else {
        if (!f && (d = d.replace(s, function(S, P, O) {
          return x = (O = O.toLowerCase()) == "x" ? 16 : O == "b" ? 2 : 8, !g || g == x ? P : S;
        }), g && (x = g, d = d.replace(o, "$1").replace(l, "0.$1")), w != d))
          return new v(d, x);
        if (v.DEBUG)
          throw Error(Z + "Not a" + (g ? " base " + g : "") + " number: " + w);
        y.s = null;
      }
      y.c = y.e = null;
    };
  }();
  function W(s, o, l, m) {
    var c, y, w, f, g, x, d, S = s.c, P = Ge;
    if (S) {
      e: {
        for (c = 1, f = S[0]; f >= 10; f /= 10, c++) ;
        if (y = o - c, y < 0)
          y += R, w = o, g = S[x = 0], d = j(g / P[c - w - 1] % 10);
        else if (x = Be((y + 1) / R), x >= S.length)
          if (m) {
            for (; S.length <= x; S.push(0)) ;
            g = d = 0, c = 1, y %= R, w = y - R + 1;
          } else
            break e;
        else {
          for (g = f = S[x], c = 1; f >= 10; f /= 10, c++) ;
          y %= R, w = y - R + c, d = w < 0 ? 0 : j(g / P[c - w - 1] % 10);
        }
        if (m = m || o < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        S[x + 1] != null || (w < 0 ? g : g % P[c - w - 1]), m = l < 4 ? (d || m) && (l == 0 || l == (s.s < 0 ? 3 : 2)) : d > 5 || d == 5 && (l == 4 || m || l == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (y > 0 ? w > 0 ? g / P[c - w] : 0 : S[x - 1]) % 10 & 1 || l == (s.s < 0 ? 8 : 7)), o < 1 || !S[0])
          return S.length = 0, m ? (o -= s.e + 1, S[0] = P[(R - o % R) % R], s.e = -o || 0) : S[0] = s.e = 0, s;
        if (y == 0 ? (S.length = x, f = 1, x--) : (S.length = x + 1, f = P[R - y], S[x] = w > 0 ? j(g / P[c - w] % P[w]) * f : 0), m)
          for (; ; )
            if (x == 0) {
              for (y = 1, w = S[0]; w >= 10; w /= 10, y++) ;
              for (w = S[0] += f, f = 1; w >= 10; w /= 10, f++) ;
              y != f && (s.e++, S[0] == ee && (S[0] = 1));
              break;
            } else {
              if (S[x] += f, S[x] != ee) break;
              S[x--] = 0, f = 1;
            }
        for (y = S.length; S[--y] === 0; S.pop()) ;
      }
      s.e > b ? s.c = s.e = null : s.e < _ && (s.c = [s.e = 0]);
    }
    return s;
  }
  function re(s) {
    var o, l = s.e;
    return l === null ? s.toString() : (o = H(s.c), o = l <= E || l >= p ? Te(o, l) : se(o, l, "0"), s.s < 0 ? "-" + o : o);
  }
  return r.absoluteValue = r.abs = function() {
    var s = new v(this);
    return s.s < 0 && (s.s = 1), s;
  }, r.comparedTo = function(s, o) {
    return fe(this, new v(s, o));
  }, r.decimalPlaces = r.dp = function(s, o) {
    var l, m, c, y = this;
    if (s != null)
      return F(s, 0, Y), o == null ? o = h : F(o, 0, 8), W(new v(y), s + y.e + 1, o);
    if (!(l = y.c)) return null;
    if (m = ((c = l.length - 1) - Q(this.e / R)) * R, c = l[c]) for (; c % 10 == 0; c /= 10, m--) ;
    return m < 0 && (m = 0), m;
  }, r.dividedBy = r.div = function(s, o) {
    return e(this, new v(s, o), a, h);
  }, r.dividedToIntegerBy = r.idiv = function(s, o) {
    return e(this, new v(s, o), 0, 1);
  }, r.exponentiatedBy = r.pow = function(s, o) {
    var l, m, c, y, w, f, g, x, d, S = this;
    if (s = new v(s), s.c && !s.isInteger())
      throw Error(Z + "Exponent not an integer: " + re(s));
    if (o != null && (o = new v(o)), f = s.e > 14, !S.c || !S.c[0] || S.c[0] == 1 && !S.e && S.c.length == 1 || !s.c || !s.c[0])
      return d = new v(Math.pow(+re(S), f ? s.s * (2 - _e(s)) : +re(s))), o ? d.mod(o) : d;
    if (g = s.s < 0, o) {
      if (o.c ? !o.c[0] : !o.s) return new v(NaN);
      m = !g && S.isInteger() && o.isInteger(), m && (S = S.mod(o));
    } else {
      if (s.e > 9 && (S.e > 0 || S.e < -1 || (S.e == 0 ? S.c[0] > 1 || f && S.c[1] >= 24e7 : S.c[0] < 8e13 || f && S.c[0] <= 9999975e7)))
        return y = S.s < 0 && _e(s) ? -0 : 0, S.e > -1 && (y = 1 / y), new v(g ? 1 / y : y);
      L && (y = Be(L / R + 2));
    }
    for (f ? (l = new v(0.5), g && (s.s = 1), x = _e(s)) : (c = Math.abs(+re(s)), x = c % 2), d = new v(u); ; ) {
      if (x) {
        if (d = d.times(S), !d.c) break;
        y ? d.c.length > y && (d.c.length = y) : m && (d = d.mod(o));
      }
      if (c) {
        if (c = j(c / 2), c === 0) break;
        x = c % 2;
      } else if (s = s.times(l), W(s, s.e + 1, 1), s.e > 14)
        x = _e(s);
      else {
        if (c = +re(s), c === 0) break;
        x = c % 2;
      }
      S = S.times(S), y ? S.c && S.c.length > y && (S.c.length = y) : m && (S = S.mod(o));
    }
    return m ? d : (g && (d = u.div(d)), o ? d.mod(o) : y ? W(d, L, h, w) : d);
  }, r.integerValue = function(s) {
    var o = new v(this);
    return s == null ? s = h : F(s, 0, 8), W(o, o.e + 1, s);
  }, r.isEqualTo = r.eq = function(s, o) {
    return fe(this, new v(s, o)) === 0;
  }, r.isFinite = function() {
    return !!this.c;
  }, r.isGreaterThan = r.gt = function(s, o) {
    return fe(this, new v(s, o)) > 0;
  }, r.isGreaterThanOrEqualTo = r.gte = function(s, o) {
    return (o = fe(this, new v(s, o))) === 1 || o === 0;
  }, r.isInteger = function() {
    return !!this.c && Q(this.e / R) > this.c.length - 2;
  }, r.isLessThan = r.lt = function(s, o) {
    return fe(this, new v(s, o)) < 0;
  }, r.isLessThanOrEqualTo = r.lte = function(s, o) {
    return (o = fe(this, new v(s, o))) === -1 || o === 0;
  }, r.isNaN = function() {
    return !this.s;
  }, r.isNegative = function() {
    return this.s < 0;
  }, r.isPositive = function() {
    return this.s > 0;
  }, r.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, r.minus = function(s, o) {
    var l, m, c, y, w = this, f = w.s;
    if (s = new v(s, o), o = s.s, !f || !o) return new v(NaN);
    if (f != o)
      return s.s = -o, w.plus(s);
    var g = w.e / R, x = s.e / R, d = w.c, S = s.c;
    if (!g || !x) {
      if (!d || !S) return d ? (s.s = -o, s) : new v(S ? w : NaN);
      if (!d[0] || !S[0])
        return S[0] ? (s.s = -o, s) : new v(d[0] ? w : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          h == 3 ? -0 : 0
        ));
    }
    if (g = Q(g), x = Q(x), d = d.slice(), f = g - x) {
      for ((y = f < 0) ? (f = -f, c = d) : (x = g, c = S), c.reverse(), o = f; o--; c.push(0)) ;
      c.reverse();
    } else
      for (m = (y = (f = d.length) < (o = S.length)) ? f : o, f = o = 0; o < m; o++)
        if (d[o] != S[o]) {
          y = d[o] < S[o];
          break;
        }
    if (y && (c = d, d = S, S = c, s.s = -s.s), o = (m = S.length) - (l = d.length), o > 0) for (; o--; d[l++] = 0) ;
    for (o = ee - 1; m > f; ) {
      if (d[--m] < S[m]) {
        for (l = m; l && !d[--l]; d[l] = o) ;
        --d[l], d[m] += ee;
      }
      d[m] -= S[m];
    }
    for (; d[0] == 0; d.splice(0, 1), --x) ;
    return d[0] ? K(s, d, x) : (s.s = h == 3 ? -1 : 1, s.c = [s.e = 0], s);
  }, r.modulo = r.mod = function(s, o) {
    var l, m, c = this;
    return s = new v(s, o), !c.c || !s.s || s.c && !s.c[0] ? new v(NaN) : !s.c || c.c && !c.c[0] ? new v(c) : (T == 9 ? (m = s.s, s.s = 1, l = e(c, s, 0, 3), s.s = m, l.s *= m) : l = e(c, s, 0, T), s = c.minus(l.times(s)), !s.c[0] && T == 1 && (s.s = c.s), s);
  }, r.multipliedBy = r.times = function(s, o) {
    var l, m, c, y, w, f, g, x, d, S, P, O, k, D, U, A = this, G = A.c, V = (s = new v(s, o)).c;
    if (!G || !V || !G[0] || !V[0])
      return !A.s || !s.s || G && !G[0] && !V || V && !V[0] && !G ? s.c = s.e = s.s = null : (s.s *= A.s, !G || !V ? s.c = s.e = null : (s.c = [0], s.e = 0)), s;
    for (m = Q(A.e / R) + Q(s.e / R), s.s *= A.s, g = G.length, S = V.length, g < S && (k = G, G = V, V = k, c = g, g = S, S = c), c = g + S, k = []; c--; k.push(0)) ;
    for (D = ee, U = le, c = S; --c >= 0; ) {
      for (l = 0, P = V[c] % U, O = V[c] / U | 0, w = g, y = c + w; y > c; )
        x = G[--w] % U, d = G[w] / U | 0, f = O * x + d * P, x = P * x + f % U * U + k[y] + l, l = (x / D | 0) + (f / U | 0) + O * d, k[y--] = x % D;
      k[y] = l;
    }
    return l ? ++m : k.splice(0, 1), K(s, k, m);
  }, r.negated = function() {
    var s = new v(this);
    return s.s = -s.s || null, s;
  }, r.plus = function(s, o) {
    var l, m = this, c = m.s;
    if (s = new v(s, o), o = s.s, !c || !o) return new v(NaN);
    if (c != o)
      return s.s = -o, m.minus(s);
    var y = m.e / R, w = s.e / R, f = m.c, g = s.c;
    if (!y || !w) {
      if (!f || !g) return new v(c / 0);
      if (!f[0] || !g[0]) return g[0] ? s : new v(f[0] ? m : c * 0);
    }
    if (y = Q(y), w = Q(w), f = f.slice(), c = y - w) {
      for (c > 0 ? (w = y, l = g) : (c = -c, l = f), l.reverse(); c--; l.push(0)) ;
      l.reverse();
    }
    for (c = f.length, o = g.length, c - o < 0 && (l = g, g = f, f = l, o = c), c = 0; o; )
      c = (f[--o] = f[o] + g[o] + c) / ee | 0, f[o] = ee === f[o] ? 0 : f[o] % ee;
    return c && (f = [c].concat(f), ++w), K(s, f, w);
  }, r.precision = r.sd = function(s, o) {
    var l, m, c, y = this;
    if (s != null && s !== !!s)
      return F(s, 1, Y), o == null ? o = h : F(o, 0, 8), W(new v(y), s, o);
    if (!(l = y.c)) return null;
    if (c = l.length - 1, m = c * R + 1, c = l[c]) {
      for (; c % 10 == 0; c /= 10, m--) ;
      for (c = l[0]; c >= 10; c /= 10, m++) ;
    }
    return s && y.e + 1 > m && (m = y.e + 1), m;
  }, r.shiftedBy = function(s) {
    return F(s, -9007199254740991, je), this.times("1e" + s);
  }, r.squareRoot = r.sqrt = function() {
    var s, o, l, m, c, y = this, w = y.c, f = y.s, g = y.e, x = a + 4, d = new v("0.5");
    if (f !== 1 || !w || !w[0])
      return new v(!f || f < 0 && (!w || w[0]) ? NaN : w ? y : 1 / 0);
    if (f = Math.sqrt(+re(y)), f == 0 || f == 1 / 0 ? (o = H(w), (o.length + g) % 2 == 0 && (o += "0"), f = Math.sqrt(+o), g = Q((g + 1) / 2) - (g < 0 || g % 2), f == 1 / 0 ? o = "5e" + g : (o = f.toExponential(), o = o.slice(0, o.indexOf("e") + 1) + g), l = new v(o)) : l = new v(f + ""), l.c[0]) {
      for (g = l.e, f = g + x, f < 3 && (f = 0); ; )
        if (c = l, l = d.times(c.plus(e(y, c, x, 1))), H(c.c).slice(0, f) === (o = H(l.c)).slice(0, f))
          if (l.e < g && --f, o = o.slice(f - 3, f + 1), o == "9999" || !m && o == "4999") {
            if (!m && (W(c, c.e + a + 2, 0), c.times(c).eq(y))) {
              l = c;
              break;
            }
            x += 4, f += 4, m = 1;
          } else {
            (!+o || !+o.slice(1) && o.charAt(0) == "5") && (W(l, l.e + a + 2, 1), s = !l.times(l).eq(y));
            break;
          }
    }
    return W(l, l.e + a + 1, h, s);
  }, r.toExponential = function(s, o) {
    return s != null && (F(s, 0, Y), s++), N(this, s, o, 1);
  }, r.toFixed = function(s, o) {
    return s != null && (F(s, 0, Y), s = s + this.e + 1), N(this, s, o);
  }, r.toFormat = function(s, o, l) {
    var m, c = this;
    if (l == null)
      s != null && o && typeof o == "object" ? (l = o, o = null) : s && typeof s == "object" ? (l = s, s = o = null) : l = B;
    else if (typeof l != "object")
      throw Error(Z + "Argument not an object: " + l);
    if (m = c.toFixed(s, o), c.c) {
      var y, w = m.split("."), f = +l.groupSize, g = +l.secondaryGroupSize, x = l.groupSeparator || "", d = w[0], S = w[1], P = c.s < 0, O = P ? d.slice(1) : d, k = O.length;
      if (g && (y = f, f = g, g = y, k -= y), f > 0 && k > 0) {
        for (y = k % f || f, d = O.substr(0, y); y < k; y += f) d += x + O.substr(y, f);
        g > 0 && (d += x + O.slice(y)), P && (d = "-" + d);
      }
      m = S ? d + (l.decimalSeparator || "") + ((g = +l.fractionGroupSize) ? S.replace(
        new RegExp("\\d{" + g + "}\\B", "g"),
        "$&" + (l.fractionGroupSeparator || "")
      ) : S) : d;
    }
    return (l.prefix || "") + m + (l.suffix || "");
  }, r.toFraction = function(s) {
    var o, l, m, c, y, w, f, g, x, d, S, P, O = this, k = O.c;
    if (s != null && (f = new v(s), !f.isInteger() && (f.c || f.s !== 1) || f.lt(u)))
      throw Error(Z + "Argument " + (f.isInteger() ? "out of range: " : "not an integer: ") + re(f));
    if (!k) return new v(O);
    for (o = new v(u), x = l = new v(u), m = g = new v(u), P = H(k), y = o.e = P.length - O.e - 1, o.c[0] = Ge[(w = y % R) < 0 ? R + w : w], s = !s || f.comparedTo(o) > 0 ? y > 0 ? o : x : f, w = b, b = 1 / 0, f = new v(P), g.c[0] = 0; d = e(f, o, 0, 1), c = l.plus(d.times(m)), c.comparedTo(s) != 1; )
      l = m, m = c, x = g.plus(d.times(c = x)), g = c, o = f.minus(d.times(c = o)), f = c;
    return c = e(s.minus(l), m, 0, 1), g = g.plus(c.times(x)), l = l.plus(c.times(m)), g.s = x.s = O.s, y = y * 2, S = e(x, m, y, h).minus(O).abs().comparedTo(
      e(g, l, y, h).minus(O).abs()
    ) < 1 ? [x, m] : [g, l], b = w, S;
  }, r.toNumber = function() {
    return +re(this);
  }, r.toPrecision = function(s, o) {
    return s != null && F(s, 1, Y), N(this, s, o, 2);
  }, r.toString = function(s) {
    var o, l = this, m = l.s, c = l.e;
    return c === null ? m ? (o = "Infinity", m < 0 && (o = "-" + o)) : o = "NaN" : (s == null ? o = c <= E || c >= p ? Te(H(l.c), c) : se(H(l.c), c, "0") : s === 10 && I ? (l = W(new v(l), a + c + 1, h), o = se(H(l.c), l.e, "0")) : (F(s, 2, q.length, "Base"), o = n(se(H(l.c), c, "0"), 10, s, m, !0)), m < 0 && l.c[0] && (o = "-" + o)), o;
  }, r.valueOf = r.toJSON = function() {
    return re(this);
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, t != null && v.set(t), v;
}
function Q(t) {
  var e = t | 0;
  return t > 0 || t === e ? e : e - 1;
}
function H(t) {
  for (var e, n, i = 1, r = t.length, u = t[0] + ""; i < r; ) {
    for (e = t[i++] + "", n = R - e.length; n--; e = "0" + e) ;
    u += e;
  }
  for (r = u.length; u.charCodeAt(--r) === 48; ) ;
  return u.slice(0, r + 1 || 1);
}
function fe(t, e) {
  var n, i, r = t.c, u = e.c, a = t.s, h = e.s, E = t.e, p = e.e;
  if (!a || !h) return null;
  if (n = r && !r[0], i = u && !u[0], n || i) return n ? i ? 0 : -h : a;
  if (a != h) return a;
  if (n = a < 0, i = E == p, !r || !u) return i ? 0 : !r ^ n ? 1 : -1;
  if (!i) return E > p ^ n ? 1 : -1;
  for (h = (E = r.length) < (p = u.length) ? E : p, a = 0; a < h; a++) if (r[a] != u[a]) return r[a] > u[a] ^ n ? 1 : -1;
  return E == p ? 0 : E > p ^ n ? 1 : -1;
}
function F(t, e, n, i) {
  if (t < e || t > n || t !== j(t))
    throw Error(Z + (i || "Argument") + (typeof t == "number" ? t < e || t > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(t));
}
function _e(t) {
  var e = t.c.length - 1;
  return Q(t.e / R) == e && t.c[e] % 2 != 0;
}
function Te(t, e) {
  return (t.length > 1 ? t.charAt(0) + "." + t.slice(1) : t) + (e < 0 ? "e" : "e+") + e;
}
function se(t, e, n) {
  var i, r;
  if (e < 0) {
    for (r = n + "."; ++e; r += n) ;
    t = r + t;
  } else if (i = t.length, ++e > i) {
    for (r = n, e -= i; --e; r += n) ;
    t += r;
  } else e < i && (t = t.slice(0, e) + "." + t.slice(e));
  return t;
}
var ie = wt(), Gt = class {
  constructor(t) {
    C(this, "key");
    C(this, "left", null);
    C(this, "right", null);
    this.key = t;
  }
}, ye = class extends Gt {
  constructor(t) {
    super(t);
  }
}, $t = class {
  constructor() {
    C(this, "size", 0);
    C(this, "modificationCount", 0);
    C(this, "splayCount", 0);
  }
  splay(t) {
    const e = this.root;
    if (e == null)
      return this.compare(t, t), -1;
    let n = null, i = null, r = null, u = null, a = e;
    const h = this.compare;
    let E;
    for (; ; )
      if (E = h(a.key, t), E > 0) {
        let p = a.left;
        if (p == null || (E = h(p.key, t), E > 0 && (a.left = p.right, p.right = a, a = p, p = a.left, p == null)))
          break;
        n == null ? i = a : n.left = a, n = a, a = p;
      } else if (E < 0) {
        let p = a.right;
        if (p == null || (E = h(p.key, t), E < 0 && (a.right = p.left, p.left = a, a = p, p = a.right, p == null)))
          break;
        r == null ? u = a : r.right = a, r = a, a = p;
      } else
        break;
    return r != null && (r.right = a.left, a.left = u), n != null && (n.left = a.right, a.right = i), this.root !== a && (this.root = a, this.splayCount++), E;
  }
  splayMin(t) {
    let e = t, n = e.left;
    for (; n != null; ) {
      const i = n;
      e.left = i.right, i.right = e, e = i, n = e.left;
    }
    return e;
  }
  splayMax(t) {
    let e = t, n = e.right;
    for (; n != null; ) {
      const i = n;
      e.right = i.left, i.left = e, e = i, n = e.right;
    }
    return e;
  }
  _delete(t) {
    if (this.root == null || this.splay(t) != 0) return null;
    let n = this.root;
    const i = n, r = n.left;
    if (this.size--, r == null)
      this.root = n.right;
    else {
      const u = n.right;
      n = this.splayMax(r), n.right = u, this.root = n;
    }
    return this.modificationCount++, i;
  }
  addNewRoot(t, e) {
    this.size++, this.modificationCount++;
    const n = this.root;
    if (n == null) {
      this.root = t;
      return;
    }
    e < 0 ? (t.left = n, t.right = n.right, n.right = null) : (t.right = n, t.left = n.left, n.left = null), this.root = t;
  }
  _first() {
    const t = this.root;
    return t == null ? null : (this.root = this.splayMin(t), this.root);
  }
  _last() {
    const t = this.root;
    return t == null ? null : (this.root = this.splayMax(t), this.root);
  }
  clear() {
    this.root = null, this.size = 0, this.modificationCount++;
  }
  has(t) {
    return this.validKey(t) && this.splay(t) == 0;
  }
  defaultCompare() {
    return (t, e) => t < e ? -1 : t > e ? 1 : 0;
  }
  wrap() {
    return {
      getRoot: () => this.root,
      setRoot: (t) => {
        this.root = t;
      },
      getSize: () => this.size,
      getModificationCount: () => this.modificationCount,
      getSplayCount: () => this.splayCount,
      setSplayCount: (t) => {
        this.splayCount = t;
      },
      splay: (t) => this.splay(t),
      has: (t) => this.has(t)
    };
  }
}, ht, pt, Pe = class me extends $t {
  constructor(n, i) {
    super();
    C(this, "root", null);
    C(this, "compare");
    C(this, "validKey");
    C(this, ht, "[object Set]");
    this.compare = n ?? this.defaultCompare(), this.validKey = i ?? ((r) => r != null && r != null);
  }
  delete(n) {
    return this.validKey(n) ? this._delete(n) != null : !1;
  }
  deleteAll(n) {
    for (const i of n)
      this.delete(i);
  }
  forEach(n) {
    const i = this[Symbol.iterator]();
    let r;
    for (; r = i.next(), !r.done; )
      n(r.value, r.value, this);
  }
  add(n) {
    const i = this.splay(n);
    return i != 0 && this.addNewRoot(new ye(n), i), this;
  }
  addAndReturn(n) {
    const i = this.splay(n);
    return i != 0 && this.addNewRoot(new ye(n), i), this.root.key;
  }
  addAll(n) {
    for (const i of n)
      this.add(i);
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
  lastBefore(n) {
    if (n == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(n) < 0) return this.root.key;
    let r = this.root.left;
    if (r == null) return null;
    let u = r.right;
    for (; u != null; )
      r = u, u = r.right;
    return r.key;
  }
  firstAfter(n) {
    if (n == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(n) > 0) return this.root.key;
    let r = this.root.right;
    if (r == null) return null;
    let u = r.left;
    for (; u != null; )
      r = u, u = r.left;
    return r.key;
  }
  retainAll(n) {
    const i = new me(this.compare, this.validKey), r = this.modificationCount;
    for (const u of n) {
      if (r != this.modificationCount)
        throw "Concurrent modification during iteration.";
      this.validKey(u) && this.splay(u) == 0 && i.add(this.root.key);
    }
    i.size != this.size && (this.root = i.root, this.size = i.size, this.modificationCount++);
  }
  lookup(n) {
    return !this.validKey(n) || this.splay(n) != 0 ? null : this.root.key;
  }
  intersection(n) {
    const i = new me(this.compare, this.validKey);
    for (const r of this)
      n.has(r) && i.add(r);
    return i;
  }
  difference(n) {
    const i = new me(this.compare, this.validKey);
    for (const r of this)
      n.has(r) || i.add(r);
    return i;
  }
  union(n) {
    const i = this.clone();
    return i.addAll(n), i;
  }
  clone() {
    const n = new me(this.compare, this.validKey);
    return n.size = this.size, n.root = this.copyNode(this.root), n;
  }
  copyNode(n) {
    if (n == null) return null;
    function i(u, a) {
      let h, E;
      do {
        if (h = u.left, E = u.right, h != null) {
          const p = new ye(h.key);
          a.left = p, i(h, p);
        }
        if (E != null) {
          const p = new ye(E.key);
          a.right = p, u = E, a = p;
        }
      } while (E != null);
    }
    const r = new ye(n.key);
    return i(n, r), r;
  }
  toSet() {
    return this.clone();
  }
  entries() {
    return new Ft(this.wrap());
  }
  keys() {
    return this[Symbol.iterator]();
  }
  values() {
    return this[Symbol.iterator]();
  }
  [(pt = Symbol.iterator, ht = Symbol.toStringTag, pt)]() {
    return new qt(this.wrap());
  }
}, Et = class {
  constructor(t) {
    C(this, "tree");
    C(this, "path", new Array());
    C(this, "modificationCount", null);
    C(this, "splayCount");
    this.tree = t, this.splayCount = t.getSplayCount();
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    return this.moveNext() ? { done: !1, value: this.current() } : { done: !0, value: null };
  }
  current() {
    if (!this.path.length) return null;
    const t = this.path[this.path.length - 1];
    return this.getValue(t);
  }
  rebuildPath(t) {
    this.path.splice(0, this.path.length), this.tree.splay(t), this.path.push(this.tree.getRoot()), this.splayCount = this.tree.getSplayCount();
  }
  findLeftMostDescendent(t) {
    for (; t != null; )
      this.path.push(t), t = t.left;
  }
  moveNext() {
    if (this.modificationCount != this.tree.getModificationCount()) {
      if (this.modificationCount == null) {
        this.modificationCount = this.tree.getModificationCount();
        let n = this.tree.getRoot();
        for (; n != null; )
          this.path.push(n), n = n.left;
        return this.path.length > 0;
      }
      throw "Concurrent modification during iteration.";
    }
    if (!this.path.length) return !1;
    this.splayCount != this.tree.getSplayCount() && this.rebuildPath(this.path[this.path.length - 1].key);
    let t = this.path[this.path.length - 1], e = t.right;
    if (e != null) {
      for (; e != null; )
        this.path.push(e), e = e.left;
      return !0;
    }
    for (this.path.pop(); this.path.length && this.path[this.path.length - 1].right === t; )
      t = this.path.pop();
    return this.path.length > 0;
  }
}, qt = class extends Et {
  getValue(t) {
    return t.key;
  }
}, Ft = class extends Et {
  getValue(t) {
    return [t.key, t.key];
  }
}, vt = (t) => () => t, Fe = (t) => {
  const e = t ? (n, i) => i.minus(n).abs().isLessThanOrEqualTo(t) : vt(!1);
  return (n, i) => e(n, i) ? 0 : n.comparedTo(i);
};
function Dt(t) {
  const e = t ? (n, i, r, u, a) => n.exponentiatedBy(2).isLessThanOrEqualTo(
    u.minus(i).exponentiatedBy(2).plus(a.minus(r).exponentiatedBy(2)).times(t)
  ) : vt(!1);
  return (n, i, r) => {
    const u = n.x, a = n.y, h = r.x, E = r.y, p = a.minus(E).times(i.x.minus(h)).minus(u.minus(h).times(i.y.minus(E)));
    return e(p, u, a, h, E) ? 0 : p.comparedTo(0);
  };
}
var zt = (t) => t, Ut = (t) => {
  if (t) {
    const e = new Pe(Fe(t)), n = new Pe(Fe(t)), i = (u, a) => a.addAndReturn(u), r = (u) => ({
      x: i(u.x, e),
      y: i(u.y, n)
    });
    return r({ x: new ie(0), y: new ie(0) }), r;
  }
  return zt;
}, De = (t) => ({
  set: (e) => {
    oe = De(e);
  },
  reset: () => De(t),
  compare: Fe(t),
  snap: Ut(t),
  orient: Dt(t)
}), oe = De(), de = (t, e) => t.ll.x.isLessThanOrEqualTo(e.x) && e.x.isLessThanOrEqualTo(t.ur.x) && t.ll.y.isLessThanOrEqualTo(e.y) && e.y.isLessThanOrEqualTo(t.ur.y), ze = (t, e) => {
  if (e.ur.x.isLessThan(t.ll.x) || t.ur.x.isLessThan(e.ll.x) || e.ur.y.isLessThan(t.ll.y) || t.ur.y.isLessThan(e.ll.y))
    return null;
  const n = t.ll.x.isLessThan(e.ll.x) ? e.ll.x : t.ll.x, i = t.ur.x.isLessThan(e.ur.x) ? t.ur.x : e.ur.x, r = t.ll.y.isLessThan(e.ll.y) ? e.ll.y : t.ll.y, u = t.ur.y.isLessThan(e.ur.y) ? t.ur.y : e.ur.y;
  return { ll: { x: n, y: r }, ur: { x: i, y: u } };
}, Me = (t, e) => t.x.times(e.y).minus(t.y.times(e.x)), St = (t, e) => t.x.times(e.x).plus(t.y.times(e.y)), Oe = (t) => St(t, t).sqrt(), Vt = (t, e, n) => {
  const i = { x: e.x.minus(t.x), y: e.y.minus(t.y) }, r = { x: n.x.minus(t.x), y: n.y.minus(t.y) };
  return Me(r, i).div(Oe(r)).div(Oe(i));
}, Kt = (t, e, n) => {
  const i = { x: e.x.minus(t.x), y: e.y.minus(t.y) }, r = { x: n.x.minus(t.x), y: n.y.minus(t.y) };
  return St(r, i).div(Oe(r)).div(Oe(i));
}, Qe = (t, e, n) => e.y.isZero() ? null : { x: t.x.plus(e.x.div(e.y).times(n.minus(t.y))), y: n }, et = (t, e, n) => e.x.isZero() ? null : { x: n, y: t.y.plus(e.y.div(e.x).times(n.minus(t.x))) }, Xt = (t, e, n, i) => {
  if (e.x.isZero()) return et(n, i, t.x);
  if (i.x.isZero()) return et(t, e, n.x);
  if (e.y.isZero()) return Qe(n, i, t.y);
  if (i.y.isZero()) return Qe(t, e, n.y);
  const r = Me(e, i);
  if (r.isZero()) return null;
  const u = { x: n.x.minus(t.x), y: n.y.minus(t.y) }, a = Me(u, e).div(r), h = Me(u, i).div(r), E = t.x.plus(h.times(e.x)), p = n.x.plus(a.times(i.x)), _ = t.y.plus(h.times(e.y)), b = n.y.plus(a.times(i.y)), M = E.plus(p).div(2), T = _.plus(b).div(2);
  return { x: M, y: T };
}, ne = class bt {
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(e, n) {
    C(this, "point");
    C(this, "isLeft");
    C(this, "segment");
    C(this, "otherSE");
    C(this, "consumedBy");
    e.events === void 0 ? e.events = [this] : e.events.push(this), this.point = e, this.isLeft = n;
  }
  // for ordering sweep events in the sweep event queue
  static compare(e, n) {
    const i = bt.comparePoints(e.point, n.point);
    return i !== 0 ? i : (e.point !== n.point && e.link(n), e.isLeft !== n.isLeft ? e.isLeft ? 1 : -1 : Ne.compare(e.segment, n.segment));
  }
  // for ordering points in sweep line order
  static comparePoints(e, n) {
    return e.x.isLessThan(n.x) ? -1 : e.x.isGreaterThan(n.x) ? 1 : e.y.isLessThan(n.y) ? -1 : e.y.isGreaterThan(n.y) ? 1 : 0;
  }
  link(e) {
    if (e.point === this.point)
      throw new Error("Tried to link already linked events");
    const n = e.point.events;
    for (let i = 0, r = n.length; i < r; i++) {
      const u = n[i];
      this.point.events.push(u), u.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const e = this.point.events.length;
    for (let n = 0; n < e; n++) {
      const i = this.point.events[n];
      if (i.segment.consumedBy === void 0)
        for (let r = n + 1; r < e; r++) {
          const u = this.point.events[r];
          u.consumedBy === void 0 && i.otherSE.point.events === u.otherSE.point.events && i.segment.consume(u.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const e = [];
    for (let n = 0, i = this.point.events.length; n < i; n++) {
      const r = this.point.events[n];
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
    const n = /* @__PURE__ */ new Map(), i = (r) => {
      const u = r.otherSE;
      n.set(r, {
        sine: Vt(this.point, e.point, u.point),
        cosine: Kt(this.point, e.point, u.point)
      });
    };
    return (r, u) => {
      n.has(r) || i(r), n.has(u) || i(u);
      const { sine: a, cosine: h } = n.get(r), { sine: E, cosine: p } = n.get(u);
      return a.isGreaterThanOrEqualTo(0) && E.isGreaterThanOrEqualTo(0) ? h.isLessThan(p) ? 1 : h.isGreaterThan(p) ? -1 : 0 : a.isLessThan(0) && E.isLessThan(0) ? h.isLessThan(p) ? -1 : h.isGreaterThan(p) ? 1 : 0 : E.isLessThan(a) ? -1 : E.isGreaterThan(a) ? 1 : 0;
    };
  }
}, Zt = class Ue {
  constructor(e) {
    C(this, "events");
    C(this, "poly");
    C(this, "_isExteriorRing");
    C(this, "_enclosingRing");
    this.events = e;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].segment.ringOut = this;
    this.poly = null;
  }
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(e) {
    const n = [];
    for (let i = 0, r = e.length; i < r; i++) {
      const u = e[i];
      if (!u.isInResult() || u.ringOut) continue;
      let a = null, h = u.leftSE, E = u.rightSE;
      const p = [h], _ = h.point, b = [];
      for (; a = h, h = E, p.push(h), h.point !== _; )
        for (; ; ) {
          const M = h.getAvailableLinkedEvents();
          if (M.length === 0) {
            const B = p[0].point, q = p[p.length - 1].point;
            throw new Error(
              `Unable to complete output ring starting at [${B.x}, ${B.y}]. Last matching segment found ends at [${q.x}, ${q.y}].`
            );
          }
          if (M.length === 1) {
            E = M[0].otherSE;
            break;
          }
          let T = null;
          for (let B = 0, q = b.length; B < q; B++)
            if (b[B].point === h.point) {
              T = B;
              break;
            }
          if (T !== null) {
            const B = b.splice(T)[0], q = p.splice(B.index);
            q.unshift(q[0].otherSE), n.push(new Ue(q.reverse()));
            continue;
          }
          b.push({
            index: p.length,
            point: h.point
          });
          const L = h.getLeftmostComparator(a);
          E = M.sort(L)[0].otherSE;
          break;
        }
      n.push(new Ue(p));
    }
    return n;
  }
  getGeom() {
    let e = this.events[0].point;
    const n = [e];
    for (let p = 1, _ = this.events.length - 1; p < _; p++) {
      const b = this.events[p].point, M = this.events[p + 1].point;
      oe.orient(b, e, M) !== 0 && (n.push(b), e = b);
    }
    if (n.length === 1) return null;
    const i = n[0], r = n[1];
    oe.orient(i, e, r) === 0 && n.shift(), n.push(n[0]);
    const u = this.isExteriorRing() ? 1 : -1, a = this.isExteriorRing() ? 0 : n.length - 1, h = this.isExteriorRing() ? n.length : -1, E = [];
    for (let p = a; p != h; p += u)
      E.push([n[p].x.toNumber(), n[p].y.toNumber()]);
    return E;
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
    for (let a = 1, h = this.events.length; a < h; a++) {
      const E = this.events[a];
      ne.compare(e, E) > 0 && (e = E);
    }
    let n = e.segment.prevInResult(), i = n ? n.prevInResult() : null;
    for (; ; ) {
      if (!n) return null;
      if (!i) return n.ringOut;
      if (i.ringOut !== n.ringOut)
        return ((r = i.ringOut) == null ? void 0 : r.enclosingRing()) !== n.ringOut ? n.ringOut : (u = n.ringOut) == null ? void 0 : u.enclosingRing();
      n = i.prevInResult(), i = n ? n.prevInResult() : null;
    }
  }
}, tt = class {
  constructor(t) {
    C(this, "exteriorRing");
    C(this, "interiorRings");
    this.exteriorRing = t, t.poly = this, this.interiorRings = [];
  }
  addInterior(t) {
    this.interiorRings.push(t), t.poly = this;
  }
  getGeom() {
    const t = this.exteriorRing.getGeom();
    if (t === null) return null;
    const e = [t];
    for (let n = 0, i = this.interiorRings.length; n < i; n++) {
      const r = this.interiorRings[n].getGeom();
      r !== null && e.push(r);
    }
    return e;
  }
}, Yt = class {
  constructor(t) {
    C(this, "rings");
    C(this, "polys");
    this.rings = t, this.polys = this._composePolys(t);
  }
  getGeom() {
    const t = [];
    for (let e = 0, n = this.polys.length; e < n; e++) {
      const i = this.polys[e].getGeom();
      i !== null && t.push(i);
    }
    return t;
  }
  _composePolys(t) {
    var n;
    const e = [];
    for (let i = 0, r = t.length; i < r; i++) {
      const u = t[i];
      if (!u.poly)
        if (u.isExteriorRing()) e.push(new tt(u));
        else {
          const a = u.enclosingRing();
          a != null && a.poly || e.push(new tt(a)), (n = a == null ? void 0 : a.poly) == null || n.addInterior(u);
        }
    }
    return e;
  }
}, Wt = class {
  constructor(t, e = Ne.compare) {
    C(this, "queue");
    C(this, "tree");
    C(this, "segments");
    this.queue = t, this.tree = new Pe(e), this.segments = [];
  }
  process(t) {
    const e = t.segment, n = [];
    if (t.consumedBy)
      return t.isLeft ? this.queue.delete(t.otherSE) : this.tree.delete(e), n;
    t.isLeft && this.tree.add(e);
    let i = e, r = e;
    do
      i = this.tree.lastBefore(i);
    while (i != null && i.consumedBy != null);
    do
      r = this.tree.firstAfter(r);
    while (r != null && r.consumedBy != null);
    if (t.isLeft) {
      let u = null;
      if (i) {
        const h = i.getIntersection(e);
        if (h !== null && (e.isAnEndpoint(h) || (u = h), !i.isAnEndpoint(h))) {
          const E = this._splitSafely(i, h);
          for (let p = 0, _ = E.length; p < _; p++)
            n.push(E[p]);
        }
      }
      let a = null;
      if (r) {
        const h = r.getIntersection(e);
        if (h !== null && (e.isAnEndpoint(h) || (a = h), !r.isAnEndpoint(h))) {
          const E = this._splitSafely(r, h);
          for (let p = 0, _ = E.length; p < _; p++)
            n.push(E[p]);
        }
      }
      if (u !== null || a !== null) {
        let h = null;
        u === null ? h = a : a === null ? h = u : h = ne.comparePoints(
          u,
          a
        ) <= 0 ? u : a, this.queue.delete(e.rightSE), n.push(e.rightSE);
        const E = e.split(h);
        for (let p = 0, _ = E.length; p < _; p++)
          n.push(E[p]);
      }
      n.length > 0 ? (this.tree.delete(e), n.push(t)) : (this.segments.push(e), e.prev = i);
    } else {
      if (i && r) {
        const u = i.getIntersection(r);
        if (u !== null) {
          if (!i.isAnEndpoint(u)) {
            const a = this._splitSafely(i, u);
            for (let h = 0, E = a.length; h < E; h++)
              n.push(a[h]);
          }
          if (!r.isAnEndpoint(u)) {
            const a = this._splitSafely(r, u);
            for (let h = 0, E = a.length; h < E; h++)
              n.push(a[h]);
          }
        }
      }
      this.tree.delete(e);
    }
    return n;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(t, e) {
    this.tree.delete(t);
    const n = t.rightSE;
    this.queue.delete(n);
    const i = t.split(e);
    return i.push(n), t.consumedBy === void 0 && this.tree.add(t), i;
  }
}, Jt = class {
  constructor() {
    C(this, "type");
    C(this, "numMultiPolys");
  }
  run(t, e, n) {
    xe.type = t;
    const i = [new it(e, !0)];
    for (let p = 0, _ = n.length; p < _; p++)
      i.push(new it(n[p], !1));
    if (xe.numMultiPolys = i.length, xe.type === "difference") {
      const p = i[0];
      let _ = 1;
      for (; _ < i.length; )
        ze(i[_].bbox, p.bbox) !== null ? _++ : i.splice(_, 1);
    }
    if (xe.type === "intersection")
      for (let p = 0, _ = i.length; p < _; p++) {
        const b = i[p];
        for (let M = p + 1, T = i.length; M < T; M++)
          if (ze(b.bbox, i[M].bbox) === null) return [];
      }
    const r = new Pe(ne.compare);
    for (let p = 0, _ = i.length; p < _; p++) {
      const b = i[p].getSweepEvents();
      for (let M = 0, T = b.length; M < T; M++)
        r.add(b[M]);
    }
    const u = new Wt(r);
    let a = null;
    for (r.size != 0 && (a = r.first(), r.delete(a)); a; ) {
      const p = u.process(a);
      for (let _ = 0, b = p.length; _ < b; _++) {
        const M = p[_];
        M.consumedBy === void 0 && r.add(M);
      }
      r.size != 0 ? (a = r.first(), r.delete(a)) : a = null;
    }
    oe.reset();
    const h = Zt.factory(u.segments);
    return new Yt(h).getGeom();
  }
}, xe = new Jt(), Re = xe, Ht = 0, Ne = class Ce {
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, n, i, r) {
    C(this, "id");
    C(this, "leftSE");
    C(this, "rightSE");
    C(this, "rings");
    C(this, "windings");
    C(this, "ringOut");
    C(this, "consumedBy");
    C(this, "prev");
    C(this, "_prevInResult");
    C(this, "_beforeState");
    C(this, "_afterState");
    C(this, "_isInResult");
    this.id = ++Ht, this.leftSE = e, e.segment = this, e.otherSE = n, this.rightSE = n, n.segment = this, n.otherSE = e, this.rings = i, this.windings = r;
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
  static compare(e, n) {
    const i = e.leftSE.point.x, r = n.leftSE.point.x, u = e.rightSE.point.x, a = n.rightSE.point.x;
    if (a.isLessThan(i)) return 1;
    if (u.isLessThan(r)) return -1;
    const h = e.leftSE.point.y, E = n.leftSE.point.y, p = e.rightSE.point.y, _ = n.rightSE.point.y;
    if (i.isLessThan(r)) {
      if (E.isLessThan(h) && E.isLessThan(p)) return 1;
      if (E.isGreaterThan(h) && E.isGreaterThan(p)) return -1;
      const b = e.comparePoint(n.leftSE.point);
      if (b < 0) return 1;
      if (b > 0) return -1;
      const M = n.comparePoint(e.rightSE.point);
      return M !== 0 ? M : -1;
    }
    if (i.isGreaterThan(r)) {
      if (h.isLessThan(E) && h.isLessThan(_)) return -1;
      if (h.isGreaterThan(E) && h.isGreaterThan(_)) return 1;
      const b = n.comparePoint(e.leftSE.point);
      if (b !== 0) return b;
      const M = e.comparePoint(n.rightSE.point);
      return M < 0 ? 1 : M > 0 ? -1 : 1;
    }
    if (h.isLessThan(E)) return -1;
    if (h.isGreaterThan(E)) return 1;
    if (u.isLessThan(a)) {
      const b = n.comparePoint(e.rightSE.point);
      if (b !== 0) return b;
    }
    if (u.isGreaterThan(a)) {
      const b = e.comparePoint(n.rightSE.point);
      if (b < 0) return 1;
      if (b > 0) return -1;
    }
    if (!u.eq(a)) {
      const b = p.minus(h), M = u.minus(i), T = _.minus(E), L = a.minus(r);
      if (b.isGreaterThan(M) && T.isLessThan(L)) return 1;
      if (b.isLessThan(M) && T.isGreaterThan(L)) return -1;
    }
    return u.isGreaterThan(a) ? 1 : u.isLessThan(a) || p.isLessThan(_) ? -1 : p.isGreaterThan(_) ? 1 : e.id < n.id ? -1 : e.id > n.id ? 1 : 0;
  }
  static fromRing(e, n, i) {
    let r, u, a;
    const h = ne.comparePoints(e, n);
    if (h < 0)
      r = e, u = n, a = 1;
    else if (h > 0)
      r = n, u = e, a = -1;
    else
      throw new Error(
        `Tried to create degenerate segment at [${e.x}, ${e.y}]`
      );
    const E = new ne(r, !0), p = new ne(u, !1);
    return new Ce(E, p, [i], [a]);
  }
  /* When a segment is split, the rightSE is replaced with a new sweep event */
  replaceRightSE(e) {
    this.rightSE = e, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
  }
  bbox() {
    const e = this.leftSE.point.y, n = this.rightSE.point.y;
    return {
      ll: { x: this.leftSE.point.x, y: e.isLessThan(n) ? e : n },
      ur: { x: this.rightSE.point.x, y: e.isGreaterThan(n) ? e : n }
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
    return oe.orient(this.leftSE.point, e, this.rightSE.point);
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
    const n = this.bbox(), i = e.bbox(), r = ze(n, i);
    if (r === null) return null;
    const u = this.leftSE.point, a = this.rightSE.point, h = e.leftSE.point, E = e.rightSE.point, p = de(n, h) && this.comparePoint(h) === 0, _ = de(i, u) && e.comparePoint(u) === 0, b = de(n, E) && this.comparePoint(E) === 0, M = de(i, a) && e.comparePoint(a) === 0;
    if (_ && p)
      return M && !b ? a : !M && b ? E : null;
    if (_)
      return b && u.x.eq(E.x) && u.y.eq(E.y) ? null : u;
    if (p)
      return M && a.x.eq(h.x) && a.y.eq(h.y) ? null : h;
    if (M && b) return null;
    if (M) return a;
    if (b) return E;
    const T = Xt(u, this.vector(), h, e.vector());
    return T === null || !de(r, T) ? null : oe.snap(T);
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
    const n = [], i = e.events !== void 0, r = new ne(e, !0), u = new ne(e, !1), a = this.rightSE;
    this.replaceRightSE(u), n.push(u), n.push(r);
    const h = new Ce(
      r,
      a,
      this.rings.slice(),
      this.windings.slice()
    );
    return ne.comparePoints(h.leftSE.point, h.rightSE.point) > 0 && h.swapEvents(), ne.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), i && (r.checkForConsuming(), u.checkForConsuming()), n;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const e = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let n = 0, i = this.windings.length; n < i; n++)
      this.windings[n] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(e) {
    let n = this, i = e;
    for (; n.consumedBy; ) n = n.consumedBy;
    for (; i.consumedBy; ) i = i.consumedBy;
    const r = Ce.compare(n, i);
    if (r !== 0) {
      if (r > 0) {
        const u = n;
        n = i, i = u;
      }
      if (n.prev === i) {
        const u = n;
        n = i, i = u;
      }
      for (let u = 0, a = i.rings.length; u < a; u++) {
        const h = i.rings[u], E = i.windings[u], p = n.rings.indexOf(h);
        p === -1 ? (n.rings.push(h), n.windings.push(E)) : n.windings[p] += E;
      }
      i.rings = null, i.windings = null, i.consumedBy = n, i.leftSE.consumedBy = n.leftSE, i.rightSE.consumedBy = n.rightSE;
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
    const n = this._afterState.rings, i = this._afterState.windings, r = this._afterState.multiPolys;
    for (let h = 0, E = this.rings.length; h < E; h++) {
      const p = this.rings[h], _ = this.windings[h], b = n.indexOf(p);
      b === -1 ? (n.push(p), i.push(_)) : i[b] += _;
    }
    const u = [], a = [];
    for (let h = 0, E = n.length; h < E; h++) {
      if (i[h] === 0) continue;
      const p = n[h], _ = p.poly;
      if (a.indexOf(_) === -1)
        if (p.isExterior) u.push(_);
        else {
          a.indexOf(_) === -1 && a.push(_);
          const b = u.indexOf(p.poly);
          b !== -1 && u.splice(b, 1);
        }
    }
    for (let h = 0, E = u.length; h < E; h++) {
      const p = u[h].multiPoly;
      r.indexOf(p) === -1 && r.push(p);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const e = this.beforeState().multiPolys, n = this.afterState().multiPolys;
    switch (Re.type) {
      case "union": {
        const i = e.length === 0, r = n.length === 0;
        this._isInResult = i !== r;
        break;
      }
      case "intersection": {
        let i, r;
        e.length < n.length ? (i = e.length, r = n.length) : (i = n.length, r = e.length), this._isInResult = r === Re.numMultiPolys && i < r;
        break;
      }
      case "xor": {
        const i = Math.abs(e.length - n.length);
        this._isInResult = i % 2 === 1;
        break;
      }
      case "difference": {
        const i = (r) => r.length === 1 && r[0].isSubject;
        this._isInResult = i(e) !== i(n);
        break;
      }
    }
    return this._isInResult;
  }
}, nt = class {
  constructor(t, e, n) {
    C(this, "poly");
    C(this, "isExterior");
    C(this, "segments");
    C(this, "bbox");
    if (!Array.isArray(t) || t.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = n, this.segments = [], typeof t[0][0] != "number" || typeof t[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const i = oe.snap({ x: new ie(t[0][0]), y: new ie(t[0][1]) });
    this.bbox = {
      ll: { x: i.x, y: i.y },
      ur: { x: i.x, y: i.y }
    };
    let r = i;
    for (let u = 1, a = t.length; u < a; u++) {
      if (typeof t[u][0] != "number" || typeof t[u][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      const h = oe.snap({ x: new ie(t[u][0]), y: new ie(t[u][1]) });
      h.x.eq(r.x) && h.y.eq(r.y) || (this.segments.push(Ne.fromRing(r, h, this)), h.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = h.x), h.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = h.y), h.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = h.x), h.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = h.y), r = h);
    }
    (!i.x.eq(r.x) || !i.y.eq(r.y)) && this.segments.push(Ne.fromRing(r, i, this));
  }
  getSweepEvents() {
    const t = [];
    for (let e = 0, n = this.segments.length; e < n; e++) {
      const i = this.segments[e];
      t.push(i.leftSE), t.push(i.rightSE);
    }
    return t;
  }
}, jt = class {
  constructor(t, e) {
    C(this, "multiPoly");
    C(this, "exteriorRing");
    C(this, "interiorRings");
    C(this, "bbox");
    if (!Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new nt(t[0], this, !0), this.bbox = {
      ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y },
      ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y }
    }, this.interiorRings = [];
    for (let n = 1, i = t.length; n < i; n++) {
      const r = new nt(t[n], this, !1);
      r.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = r.bbox.ll.x), r.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = r.bbox.ll.y), r.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = r.bbox.ur.x), r.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = r.bbox.ur.y), this.interiorRings.push(r);
    }
    this.multiPoly = e;
  }
  getSweepEvents() {
    const t = this.exteriorRing.getSweepEvents();
    for (let e = 0, n = this.interiorRings.length; e < n; e++) {
      const i = this.interiorRings[e].getSweepEvents();
      for (let r = 0, u = i.length; r < u; r++)
        t.push(i[r]);
    }
    return t;
  }
}, it = class {
  constructor(t, e) {
    C(this, "isSubject");
    C(this, "polys");
    C(this, "bbox");
    if (!Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof t[0][0][0] == "number" && (t = [t]);
    } catch {
    }
    this.polys = [], this.bbox = {
      ll: { x: new ie(Number.POSITIVE_INFINITY), y: new ie(Number.POSITIVE_INFINITY) },
      ur: { x: new ie(Number.NEGATIVE_INFINITY), y: new ie(Number.NEGATIVE_INFINITY) }
    };
    for (let n = 0, i = t.length; n < i; n++) {
      const r = new jt(t[n], this);
      r.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = r.bbox.ll.x), r.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = r.bbox.ll.y), r.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = r.bbox.ur.x), r.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = r.bbox.ur.y), this.polys.push(r);
    }
    this.isSubject = e;
  }
  getSweepEvents() {
    const t = [];
    for (let e = 0, n = this.polys.length; e < n; e++) {
      const i = this.polys[e].getSweepEvents();
      for (let r = 0, u = i.length; r < u; r++)
        t.push(i[r]);
    }
    return t;
  }
}, Qt = (t, ...e) => Re.run("union", t, e), en = (t, ...e) => Re.run("difference", t, e);
oe.set;
function tn(t, e = {}) {
  const n = [];
  if (Ye(t, (r) => {
    n.push(r.coordinates);
  }), n.length < 2)
    throw new Error("Must have at least 2 geometries");
  const i = Qt(n[0], ...n.slice(1));
  return i.length === 0 ? null : i.length === 1 ? Ze(i[0], e.properties) : gt(i, e.properties);
}
var _t = tn;
function Ve(t) {
  const e = [...t];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
function Se() {
}
function Tt(t) {
  return t();
}
function rt() {
  return /* @__PURE__ */ Object.create(null);
}
function Ae(t) {
  t.forEach(Tt);
}
function Lt(t) {
  return typeof t == "function";
}
function nn(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function rn(t) {
  return Object.keys(t).length === 0;
}
function sn(t, e) {
  t.appendChild(e);
}
function on(t, e, n) {
  t.insertBefore(e, n || null);
}
function Mt(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function st(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function ue(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function ln(t) {
  return Array.from(t.childNodes);
}
function Le(t, e, n) {
  t.classList.toggle(e, !!n);
}
let Je;
function we(t) {
  Je = t;
}
const he = [], ot = [];
let pe = [];
const lt = [], un = /* @__PURE__ */ Promise.resolve();
let Ke = !1;
function fn() {
  Ke || (Ke = !0, un.then(Ct));
}
function Xe(t) {
  pe.push(t);
}
const $e = /* @__PURE__ */ new Set();
let ae = 0;
function Ct() {
  if (ae !== 0)
    return;
  const t = Je;
  do {
    try {
      for (; ae < he.length; ) {
        const e = he[ae];
        ae++, we(e), cn(e.$$);
      }
    } catch (e) {
      throw he.length = 0, ae = 0, e;
    }
    for (we(null), he.length = 0, ae = 0; ot.length; ) ot.pop()();
    for (let e = 0; e < pe.length; e += 1) {
      const n = pe[e];
      $e.has(n) || ($e.add(n), n());
    }
    pe.length = 0;
  } while (he.length);
  for (; lt.length; )
    lt.pop()();
  Ke = !1, $e.clear(), we(t);
}
function cn(t) {
  if (t.fragment !== null) {
    t.update(), Ae(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Xe);
  }
}
function an(t) {
  const e = [], n = [];
  pe.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), pe = e;
}
const hn = /* @__PURE__ */ new Set();
function pn(t, e) {
  t && t.i && (hn.delete(t), t.i(e));
}
function gn(t, e, n) {
  const { fragment: i, after_update: r } = t.$$;
  i && i.m(e, n), Xe(() => {
    const u = t.$$.on_mount.map(Tt).filter(Lt);
    t.$$.on_destroy ? t.$$.on_destroy.push(...u) : Ae(u), t.$$.on_mount = [];
  }), r.forEach(Xe);
}
function yn(t, e) {
  const n = t.$$;
  n.fragment !== null && (an(n.after_update), Ae(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function dn(t, e) {
  t.$$.dirty[0] === -1 && (he.push(t), fn(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function mn(t, e, n, i, r, u, a = null, h = [-1]) {
  const E = Je;
  we(t);
  const p = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: Se,
    not_equal: r,
    bound: rt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (E ? E.$$.context : [])),
    // everything else
    callbacks: rt(),
    dirty: h,
    skip_bound: !1,
    root: e.target || E.$$.root
  };
  a && a(p.root);
  let _ = !1;
  if (p.ctx = n(t, e.props || {}, (b, M, ...T) => {
    const L = T.length ? T[0] : M;
    return p.ctx && r(p.ctx[b], p.ctx[b] = L) && (!p.skip_bound && p.bound[b] && p.bound[b](L), _ && dn(t, b)), M;
  }), p.update(), _ = !0, Ae(p.before_update), p.fragment = i(p.ctx), e.target) {
    if (e.hydrate) {
      const b = ln(e.target);
      p.fragment && p.fragment.l(b), b.forEach(Mt);
    } else
      p.fragment && p.fragment.c();
    e.intro && pn(t.$$.fragment), gn(t, e.target, e.anchor), Ct();
  }
  we(E);
}
class xn {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    C(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    C(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    yn(this, 1), this.$destroy = Se;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!Lt(n))
      return Se;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !rn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const wn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(wn);
function En(t) {
  let e, n, i;
  return {
    c() {
      e = st("svg"), n = st("path"), ue(n, "stroke-width", "4"), ue(n, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), ue(n, "class", "svelte-gzo3ar"), ue(e, "width", i = /*displayIn*/
      t[0] === "list" ? 20 : void 0), ue(e, "viewBox", "0 0 70 85"), ue(e, "fill", "none"), ue(e, "class", "svelte-gzo3ar"), Le(
        e,
        "in-map",
        /*displayIn*/
        t[0] !== "list"
      ), Le(
        e,
        "list-icon",
        /*displayIn*/
        t[0] === "list"
      );
    },
    m(r, u) {
      on(r, e, u), sn(e, n);
    },
    p(r, [u]) {
      u & /*displayIn*/
      1 && i !== (i = /*displayIn*/
      r[0] === "list" ? 20 : void 0) && ue(e, "width", i), u & /*displayIn*/
      1 && Le(
        e,
        "in-map",
        /*displayIn*/
        r[0] !== "list"
      ), u & /*displayIn*/
      1 && Le(
        e,
        "list-icon",
        /*displayIn*/
        r[0] === "list"
      );
    },
    i: Se,
    o: Se,
    d(r) {
      r && Mt(e);
    }
  };
}
function vn(t, e, n) {
  let { displayIn: i } = e;
  return t.$$set = (r) => {
    "displayIn" in r && n(0, i = r.displayIn);
  }, [i];
}
class Sn extends xn {
  constructor(e) {
    super(), mn(this, e, vn, En, nn, { displayIn: 0 });
  }
}
function bn(t) {
  const e = [];
  if (Ye(t, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const n = t.features[0].properties || {}, i = en(e[0], ...e.slice(1));
  return i.length === 0 ? null : i.length === 1 ? Ze(i[0], n) : gt(i, n);
}
var _n = bn;
function Tn(t) {
  if (!t) throw new Error("geojson is required");
  var e = [];
  return Rt(t, function(n) {
    e.push(n);
  }), ve(e);
}
var Ln = Tn;
function ut(t, e) {
  const n = _n(
    ve([
      Ze([
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]),
      t
    ])
  );
  if (!n)
    return;
  n.properties = { isMask: !0 };
  const i = Ve(qe(t)), r = (i[2] - i[0]) / 360 / 1e3, u = i[0] < -180, a = i[2] > 180, h = Ln(t);
  if (h.features.length > 1 && (u || a))
    for (const E of h.features) {
      const p = Ve(qe(E));
      if (a && p[0] < -180 + r)
        for (const _ of E.geometry.coordinates)
          for (const b of _)
            b[0] += 360 - r;
      if (u && p[2] > 180 - r)
        for (const _ of E.geometry.coordinates)
          for (const b of _)
            b[0] -= 360 - r;
    }
  e(
    ve([
      h.features.length < 2 ? t : _t(h) ?? t,
      n
    ])
  );
}
const ft = (t) => {
  var i, r, u;
  const e = (i = t == null ? void 0 : t.geometry) == null ? void 0 : i.type, n = (r = t == null ? void 0 : t.properties) != null && r.isMask ? 0 : e === "LineString" || e === "MultiLineString" ? 3 : 2;
  return {
    color: "#3170fe",
    fillColor: "#000",
    fillOpacity: (u = t == null ? void 0 : t.properties) != null && u.isMask ? 0.1 : 0,
    weight: n,
    dashArray: [n, n],
    lineCap: "butt"
  };
};
function Cn(t, e = !0, n = !0, i = {}, r = {}, u = ft) {
  let a;
  const h = [];
  let E, p;
  const _ = ce.geoJSON(void 0, {
    style: u === !0 ? ft : u === !1 ? void 0 : u ?? void 0,
    interactive: !1
  }).addTo(t), b = (T) => {
    a == null || a({
      type: "mapClick",
      coordinates: [T.latlng.lng, T.latlng.lat]
    });
  };
  function M(T, L = !1) {
    const B = document.createElement("div");
    return new Sn({ props: { displayIn: "leaflet" }, target: B }), new ce.Marker(T, {
      interactive: L,
      icon: new ce.DivIcon({
        html: B,
        className: "",
        iconAnchor: [12, 26],
        iconSize: [25, 30],
        tooltipAnchor: [1, -24]
      })
    });
  }
  return {
    setEventHandler(T) {
      T ? (a = T, t.on("click", b)) : (a = void 0, t.off("click", b));
    },
    flyTo(T, L) {
      t.flyTo([T[1], T[0]], L, { duration: 2, ...i });
    },
    fitBounds(T, L, B) {
      t.flyToBounds(
        [
          [T[1], T[0]],
          [T[3], T[2]]
        ],
        {
          padding: [L, L],
          duration: 2,
          ...B ? { maxZoom: B } : {},
          ...r
        }
      );
    },
    indicateReverse(T) {
      t.getContainer().style.cursor = T ? "crosshair" : "";
    },
    setReverseMarker(T) {
      var B;
      if (!e)
        return;
      const L = T && [T[1], T[0]];
      p ? L ? p.setLatLng(L) : (p.remove(), p = void 0) : L && (e instanceof Function ? p = e(t) ?? void 0 : (p = (typeof e == "object" ? new ce.Marker(L, e) : M(L)).addTo(t), (B = p.getElement()) == null || B.classList.add("marker-reverse")));
    },
    setFeatures(T, L, B) {
      function q(I) {
        _.clearLayers(), I && _.addData(I);
      }
      for (const I of h)
        I.remove();
      h.length = 0, q();
      e: if (L) {
        let I = !1;
        if (L.geometry.type === "GeometryCollection") {
          const v = L.geometry.geometries.filter(
            (N) => N.type === "Polygon" || N.type === "MultiPolygon"
          );
          t: if (v.length > 0) {
            const N = _t(
              ve(v.map(($) => Ee($)))
            );
            if (!N)
              break t;
            ut(
              {
                ...L,
                geometry: N.geometry
              },
              q
            ), I = !0;
          } else {
            const N = L.geometry.geometries.filter(
              ($) => $.type === "LineString" || $.type === "MultiLineString"
            );
            N.length > 0 && (q({
              ...L,
              geometry: { type: "GeometryCollection", geometries: N }
            }), I = !0);
          }
        }
        if (!I) {
          if (L.geometry.type === "Polygon" || L.geometry.type === "MultiPolygon")
            ut(L, (v) => {
              if (!v)
                return;
              const N = [...v.features], $ = Ve(qe(L)), K = $[2] - $[0];
              $[0] - K / 4 < -180 && N.push(...ct(v, -360).features), $[2] + K / 4 > 180 && N.push(...ct(v, 360).features), q(ve(N));
            });
          else if (L.geometry.type === "LineString" || L.geometry.type === "MultiLineString") {
            q(L);
            break e;
          }
        }
        if (!B && !L.geometry.type.endsWith("Point"))
          break e;
        if (e instanceof Function) {
          const v = e(t, L);
          v && h.push(v.addTo(t));
        } else if (e) {
          const v = [L.center[1], L.center[0]];
          h.push(
            typeof e == "object" ? new ce.Marker(v, e) : M(v).addTo(t)
          );
        }
      }
      if (n)
        for (const I of T ?? []) {
          if (I === L)
            continue;
          const v = [
            I.center[1],
            I.center[0]
          ];
          let N;
          if (n instanceof Function) {
            if (N = n(t, I), !N)
              continue;
          } else
            N = (typeof n == "object" ? new ce.Marker(v, n) : M(v, !0)).addTo(t).bindTooltip(
              I.place_type[0] === "reverse" ? I.place_name : I.place_name.replace(/,.*/, ""),
              {
                direction: "top"
              }
            );
          const $ = N.getElement();
          $ && ($.addEventListener("click", (K) => {
            K.stopPropagation(), a == null || a({ type: "markerClick", id: I.id });
          }), $.addEventListener("mouseenter", () => {
            a == null || a({ type: "markerMouseEnter", id: I.id });
          }), $.addEventListener("mouseleave", () => {
            a == null || a({ type: "markerMouseLeave", id: I.id });
          }), $.classList.toggle("marker-fuzzy", !!I.matching_text)), h.push(N);
        }
    },
    setSelectedMarker(T) {
      var L, B;
      E && ((L = E.getElement()) == null || L.classList.toggle("marker-selected", !1)), E = T > -1 ? h[T] : void 0, (B = E == null ? void 0 : E.getElement()) == null || B.classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const T = t.getCenter();
      return [t.getZoom(), T.lng, T.lat];
    }
  };
}
function ct(t, e) {
  const n = kt(t);
  for (const i of n.features)
    if (i.geometry.type == "MultiPolygon")
      for (const r of i.geometry.coordinates)
        at(r, e);
    else
      at(i.geometry.coordinates, e);
  return n;
}
function at(t, e) {
  for (const n of t)
    for (const i of n)
      i[0] += e;
}
export {
  Cn as createLeafletMapController
};
//# sourceMappingURL=leaflet-controller.js.map
