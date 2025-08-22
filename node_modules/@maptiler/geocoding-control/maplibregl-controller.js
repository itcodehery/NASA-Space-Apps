var Lt = Object.defineProperty;
var Tt = (n, e, t) => e in n ? Lt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var M = (n, e, t) => Tt(n, typeof e != "symbol" ? e + "" : e, t);
function we(n, e, t = {}) {
  const i = { type: "Feature" };
  return (t.id === 0 || t.id) && (i.id = t.id), t.bbox && (i.bbox = t.bbox), i.properties = e || {}, i.geometry = n, i;
}
function Ke(n, e, t = {}) {
  for (const r of n) {
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
  return we({
    type: "Polygon",
    coordinates: n
  }, e, t);
}
function Ee(n, e = {}) {
  const t = { type: "FeatureCollection" };
  return e.id && (t.id = e.id), e.bbox && (t.bbox = e.bbox), t.features = n, t;
}
function gt(n, e, t = {}) {
  return we({
    type: "MultiPolygon",
    coordinates: n
  }, e, t);
}
var Mt = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, Be = Math.ceil, J = Math.floor, Z = "[BigNumber Error] ", Ze = Z + "Number primitive has more than 15 significant digits: ", ee = 1e14, C = 14, We = 9007199254740991, Ge = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], le = 1e7, W = 1e9;
function pt(n) {
  var e, t, i, r = S.prototype = { constructor: S, toString: null, valueOf: null }, u = new S(1), y = 20, c = 4, E = -7, h = 21, b = -1e7, _ = 1e7, T = !1, O = 1, G = 0, F = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, L = "0123456789abcdefghijklmnopqrstuvwxyz", N = !0;
  function S(s, o) {
    var l, m, a, p, w, f, g, x, d = this;
    if (!(d instanceof S)) return new S(s, o);
    if (o == null) {
      if (s && s._isBigNumber === !0) {
        d.s = s.s, !s.c || s.e > _ ? d.c = d.e = null : s.e < b ? d.c = [d.e = 0] : (d.e = s.e, d.c = s.c.slice());
        return;
      }
      if ((f = typeof s == "number") && s * 0 == 0) {
        if (d.s = 1 / s < 0 ? (s = -s, -1) : 1, s === ~~s) {
          for (p = 0, w = s; w >= 10; w /= 10, p++) ;
          p > _ ? d.c = d.e = null : (d.e = p, d.c = [s]);
          return;
        }
        x = String(s);
      } else {
        if (!Mt.test(x = String(s))) return i(d, x, f);
        d.s = x.charCodeAt(0) == 45 ? (x = x.slice(1), -1) : 1;
      }
      (p = x.indexOf(".")) > -1 && (x = x.replace(".", "")), (w = x.search(/e/i)) > 0 ? (p < 0 && (p = w), p += +x.slice(w + 1), x = x.substring(0, w)) : p < 0 && (p = x.length);
    } else {
      if (D(o, 2, L.length, "Base"), o == 10 && N)
        return d = new S(s), V(d, y + d.e + 1, c);
      if (x = String(s), f = typeof s == "number") {
        if (s * 0 != 0) return i(d, x, f, o);
        if (d.s = 1 / s < 0 ? (x = x.slice(1), -1) : 1, S.DEBUG && x.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Ze + s);
      } else
        d.s = x.charCodeAt(0) === 45 ? (x = x.slice(1), -1) : 1;
      for (l = L.slice(0, o), p = w = 0, g = x.length; w < g; w++)
        if (l.indexOf(m = x.charAt(w)) < 0) {
          if (m == ".") {
            if (w > p) {
              p = g;
              continue;
            }
          } else if (!a && (x == x.toUpperCase() && (x = x.toLowerCase()) || x == x.toLowerCase() && (x = x.toUpperCase()))) {
            a = !0, w = -1, p = 0;
            continue;
          }
          return i(d, String(s), f, o);
        }
      f = !1, x = t(x, o, 10, d.s), (p = x.indexOf(".")) > -1 ? x = x.replace(".", "") : p = x.length;
    }
    for (w = 0; x.charCodeAt(w) === 48; w++) ;
    for (g = x.length; x.charCodeAt(--g) === 48; ) ;
    if (x = x.slice(w, ++g)) {
      if (g -= w, f && S.DEBUG && g > 15 && (s > We || s !== J(s)))
        throw Error(Ze + d.s * s);
      if ((p = p - w - 1) > _)
        d.c = d.e = null;
      else if (p < b)
        d.c = [d.e = 0];
      else {
        if (d.e = p, d.c = [], w = (p + 1) % C, p < 0 && (w += C), w < g) {
          for (w && d.c.push(+x.slice(0, w)), g -= C; w < g; )
            d.c.push(+x.slice(w, w += C));
          w = C - (x = x.slice(w)).length;
        } else
          w -= g;
        for (; w--; x += "0") ;
        d.c.push(+x);
      }
    } else
      d.c = [d.e = 0];
  }
  S.clone = pt, S.ROUND_UP = 0, S.ROUND_DOWN = 1, S.ROUND_CEIL = 2, S.ROUND_FLOOR = 3, S.ROUND_HALF_UP = 4, S.ROUND_HALF_DOWN = 5, S.ROUND_HALF_EVEN = 6, S.ROUND_HALF_CEIL = 7, S.ROUND_HALF_FLOOR = 8, S.EUCLID = 9, S.config = S.set = function(s) {
    var o, l;
    if (s != null)
      if (typeof s == "object") {
        if (s.hasOwnProperty(o = "DECIMAL_PLACES") && (l = s[o], D(l, 0, W, o), y = l), s.hasOwnProperty(o = "ROUNDING_MODE") && (l = s[o], D(l, 0, 8, o), c = l), s.hasOwnProperty(o = "EXPONENTIAL_AT") && (l = s[o], l && l.pop ? (D(l[0], -1e9, 0, o), D(l[1], 0, W, o), E = l[0], h = l[1]) : (D(l, -1e9, W, o), E = -(h = l < 0 ? -l : l))), s.hasOwnProperty(o = "RANGE"))
          if (l = s[o], l && l.pop)
            D(l[0], -1e9, -1, o), D(l[1], 1, W, o), b = l[0], _ = l[1];
          else if (D(l, -1e9, W, o), l)
            b = -(_ = l < 0 ? -l : l);
          else
            throw Error(Z + o + " cannot be zero: " + l);
        if (s.hasOwnProperty(o = "CRYPTO"))
          if (l = s[o], l === !!l)
            if (l)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                T = l;
              else
                throw T = !l, Error(Z + "crypto unavailable");
            else
              T = l;
          else
            throw Error(Z + o + " not true or false: " + l);
        if (s.hasOwnProperty(o = "MODULO_MODE") && (l = s[o], D(l, 0, 9, o), O = l), s.hasOwnProperty(o = "POW_PRECISION") && (l = s[o], D(l, 0, W, o), G = l), s.hasOwnProperty(o = "FORMAT"))
          if (l = s[o], typeof l == "object") F = l;
          else throw Error(Z + o + " not an object: " + l);
        if (s.hasOwnProperty(o = "ALPHABET"))
          if (l = s[o], typeof l == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(l))
            N = l.slice(0, 10) == "0123456789", L = l;
          else
            throw Error(Z + o + " invalid: " + l);
      } else
        throw Error(Z + "Object expected: " + s);
    return {
      DECIMAL_PLACES: y,
      ROUNDING_MODE: c,
      EXPONENTIAL_AT: [E, h],
      RANGE: [b, _],
      CRYPTO: T,
      MODULO_MODE: O,
      POW_PRECISION: G,
      FORMAT: F,
      ALPHABET: L
    };
  }, S.isBigNumber = function(s) {
    if (!s || s._isBigNumber !== !0) return !1;
    if (!S.DEBUG) return !0;
    var o, l, m = s.c, a = s.e, p = s.s;
    e: if ({}.toString.call(m) == "[object Array]") {
      if ((p === 1 || p === -1) && a >= -1e9 && a <= W && a === J(a)) {
        if (m[0] === 0) {
          if (a === 0 && m.length === 1) return !0;
          break e;
        }
        if (o = (a + 1) % C, o < 1 && (o += C), String(m[0]).length == o) {
          for (o = 0; o < m.length; o++)
            if (l = m[o], l < 0 || l >= ee || l !== J(l)) break e;
          if (l !== 0) return !0;
        }
      }
    } else if (m === null && a === null && (p === null || p === 1 || p === -1))
      return !0;
    throw Error(Z + "Invalid BigNumber: " + s);
  }, S.maximum = S.max = function() {
    return $(arguments, -1);
  }, S.minimum = S.min = function() {
    return $(arguments, 1);
  }, S.random = function() {
    var s = 9007199254740992, o = Math.random() * s & 2097151 ? function() {
      return J(Math.random() * s);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(l) {
      var m, a, p, w, f, g = 0, x = [], d = new S(u);
      if (l == null ? l = y : D(l, 0, W), w = Be(l / C), T)
        if (crypto.getRandomValues) {
          for (m = crypto.getRandomValues(new Uint32Array(w *= 2)); g < w; )
            f = m[g] * 131072 + (m[g + 1] >>> 11), f >= 9e15 ? (a = crypto.getRandomValues(new Uint32Array(2)), m[g] = a[0], m[g + 1] = a[1]) : (x.push(f % 1e14), g += 2);
          g = w / 2;
        } else if (crypto.randomBytes) {
          for (m = crypto.randomBytes(w *= 7); g < w; )
            f = (m[g] & 31) * 281474976710656 + m[g + 1] * 1099511627776 + m[g + 2] * 4294967296 + m[g + 3] * 16777216 + (m[g + 4] << 16) + (m[g + 5] << 8) + m[g + 6], f >= 9e15 ? crypto.randomBytes(7).copy(m, g) : (x.push(f % 1e14), g += 7);
          g = w / 7;
        } else
          throw T = !1, Error(Z + "crypto unavailable");
      if (!T)
        for (; g < w; )
          f = o(), f < 9e15 && (x[g++] = f % 1e14);
      for (w = x[--g], l %= C, w && l && (f = Ge[C - l], x[g] = J(w / f) * f); x[g] === 0; x.pop(), g--) ;
      if (g < 0)
        x = [p = 0];
      else {
        for (p = -1; x[0] === 0; x.splice(0, 1), p -= C) ;
        for (g = 1, f = x[0]; f >= 10; f /= 10, g++) ;
        g < C && (p -= C - g);
      }
      return d.e = p, d.c = x, d;
    };
  }(), S.sum = function() {
    for (var s = 1, o = arguments, l = new S(o[0]); s < o.length; ) l = l.plus(o[s++]);
    return l;
  }, t = /* @__PURE__ */ function() {
    var s = "0123456789";
    function o(l, m, a, p) {
      for (var w, f = [0], g, x = 0, d = l.length; x < d; ) {
        for (g = f.length; g--; f[g] *= m) ;
        for (f[0] += p.indexOf(l.charAt(x++)), w = 0; w < f.length; w++)
          f[w] > a - 1 && (f[w + 1] == null && (f[w + 1] = 0), f[w + 1] += f[w] / a | 0, f[w] %= a);
      }
      return f.reverse();
    }
    return function(l, m, a, p, w) {
      var f, g, x, d, v, P, R, I, U = l.indexOf("."), K = y, A = c;
      for (U >= 0 && (d = G, G = 0, l = l.replace(".", ""), I = new S(m), P = I.pow(l.length - U), G = d, I.c = o(
        se(H(P.c), P.e, "0"),
        10,
        a,
        s
      ), I.e = I.c.length), R = o(l, m, a, w ? (f = L, s) : (f = s, L)), x = d = R.length; R[--d] == 0; R.pop()) ;
      if (!R[0]) return f.charAt(0);
      if (U < 0 ? --x : (P.c = R, P.e = x, P.s = p, P = e(P, I, K, A, a), R = P.c, v = P.r, x = P.e), g = x + K + 1, U = R[g], d = a / 2, v = v || g < 0 || R[g + 1] != null, v = A < 4 ? (U != null || v) && (A == 0 || A == (P.s < 0 ? 3 : 2)) : U > d || U == d && (A == 4 || v || A == 6 && R[g - 1] & 1 || A == (P.s < 0 ? 8 : 7)), g < 1 || !R[0])
        l = v ? se(f.charAt(1), -K, f.charAt(0)) : f.charAt(0);
      else {
        if (R.length = g, v)
          for (--a; ++R[--g] > a; )
            R[g] = 0, g || (++x, R = [1].concat(R));
        for (d = R.length; !R[--d]; ) ;
        for (U = 0, l = ""; U <= d; l += f.charAt(R[U++])) ;
        l = se(l, x, f.charAt(0));
      }
      return l;
    };
  }(), e = /* @__PURE__ */ function() {
    function s(m, a, p) {
      var w, f, g, x, d = 0, v = m.length, P = a % le, R = a / le | 0;
      for (m = m.slice(); v--; )
        g = m[v] % le, x = m[v] / le | 0, w = R * g + x * P, f = P * g + w % le * le + d, d = (f / p | 0) + (w / le | 0) + R * x, m[v] = f % p;
      return d && (m = [d].concat(m)), m;
    }
    function o(m, a, p, w) {
      var f, g;
      if (p != w)
        g = p > w ? 1 : -1;
      else
        for (f = g = 0; f < p; f++)
          if (m[f] != a[f]) {
            g = m[f] > a[f] ? 1 : -1;
            break;
          }
      return g;
    }
    function l(m, a, p, w) {
      for (var f = 0; p--; )
        m[p] -= f, f = m[p] < a[p] ? 1 : 0, m[p] = f * w + m[p] - a[p];
      for (; !m[0] && m.length > 1; m.splice(0, 1)) ;
    }
    return function(m, a, p, w, f) {
      var g, x, d, v, P, R, I, U, K, A, B, X, Se, Ie, ke, te, ge, j = m.s == a.s ? 1 : -1, Y = m.c, z = a.c;
      if (!Y || !Y[0] || !z || !z[0])
        return new S(
          // Return NaN if either NaN, or both Infinity or 0.
          !m.s || !a.s || (Y ? z && Y[0] == z[0] : !z) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            Y && Y[0] == 0 || !z ? j * 0 : j / 0
          )
        );
      for (U = new S(j), K = U.c = [], x = m.e - a.e, j = p + x + 1, f || (f = ee, x = Q(m.e / C) - Q(a.e / C), j = j / C | 0), d = 0; z[d] == (Y[d] || 0); d++) ;
      if (z[d] > (Y[d] || 0) && x--, j < 0)
        K.push(1), v = !0;
      else {
        for (Ie = Y.length, te = z.length, d = 0, j += 2, P = J(f / (z[0] + 1)), P > 1 && (z = s(z, P, f), Y = s(Y, P, f), te = z.length, Ie = Y.length), Se = te, A = Y.slice(0, te), B = A.length; B < te; A[B++] = 0) ;
        ge = z.slice(), ge = [0].concat(ge), ke = z[0], z[1] >= f / 2 && ke++;
        do {
          if (P = 0, g = o(z, A, te, B), g < 0) {
            if (X = A[0], te != B && (X = X * f + (A[1] || 0)), P = J(X / ke), P > 1)
              for (P >= f && (P = f - 1), R = s(z, P, f), I = R.length, B = A.length; o(R, A, I, B) == 1; )
                P--, l(R, te < I ? ge : z, I, f), I = R.length, g = 1;
            else
              P == 0 && (g = P = 1), R = z.slice(), I = R.length;
            if (I < B && (R = [0].concat(R)), l(A, R, B, f), B = A.length, g == -1)
              for (; o(z, A, te, B) < 1; )
                P++, l(A, te < B ? ge : z, B, f), B = A.length;
          } else g === 0 && (P++, A = [0]);
          K[d++] = P, A[0] ? A[B++] = Y[Se] || 0 : (A = [Y[Se]], B = 1);
        } while ((Se++ < Ie || A[0] != null) && j--);
        v = A[0] != null, K[0] || K.splice(0, 1);
      }
      if (f == ee) {
        for (d = 1, j = K[0]; j >= 10; j /= 10, d++) ;
        V(U, p + (U.e = d + x * C - 1) + 1, w, v);
      } else
        U.e = x, U.r = +v;
      return U;
    };
  }();
  function k(s, o, l, m) {
    var a, p, w, f, g;
    if (l == null ? l = c : D(l, 0, 8), !s.c) return s.toString();
    if (a = s.c[0], w = s.e, o == null)
      g = H(s.c), g = m == 1 || m == 2 && (w <= E || w >= h) ? be(g, w) : se(g, w, "0");
    else if (s = V(new S(s), o, l), p = s.e, g = H(s.c), f = g.length, m == 1 || m == 2 && (o <= p || p <= E)) {
      for (; f < o; g += "0", f++) ;
      g = be(g, p);
    } else if (o -= w, g = se(g, p, "0"), p + 1 > f) {
      if (--o > 0) for (g += "."; o--; g += "0") ;
    } else if (o += p - f, o > 0)
      for (p + 1 == f && (g += "."); o--; g += "0") ;
    return s.s < 0 && a ? "-" + g : g;
  }
  function $(s, o) {
    for (var l, m, a = 1, p = new S(s[0]); a < s.length; a++)
      m = new S(s[a]), (!m.s || (l = fe(p, m)) === o || l === 0 && p.s === o) && (p = m);
    return p;
  }
  function q(s, o, l) {
    for (var m = 1, a = o.length; !o[--a]; o.pop()) ;
    for (a = o[0]; a >= 10; a /= 10, m++) ;
    return (l = m + l * C - 1) > _ ? s.c = s.e = null : l < b ? s.c = [s.e = 0] : (s.e = l, s.c = o), s;
  }
  i = /* @__PURE__ */ function() {
    var s = /^(-?)0([xbo])(?=\w[\w.]*$)/i, o = /^([^.]+)\.$/, l = /^\.([^.]+)$/, m = /^-?(Infinity|NaN)$/, a = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(p, w, f, g) {
      var x, d = f ? w : w.replace(a, "");
      if (m.test(d))
        p.s = isNaN(d) ? null : d < 0 ? -1 : 1;
      else {
        if (!f && (d = d.replace(s, function(v, P, R) {
          return x = (R = R.toLowerCase()) == "x" ? 16 : R == "b" ? 2 : 8, !g || g == x ? P : v;
        }), g && (x = g, d = d.replace(o, "$1").replace(l, "0.$1")), w != d))
          return new S(d, x);
        if (S.DEBUG)
          throw Error(Z + "Not a" + (g ? " base " + g : "") + " number: " + w);
        p.s = null;
      }
      p.c = p.e = null;
    };
  }();
  function V(s, o, l, m) {
    var a, p, w, f, g, x, d, v = s.c, P = Ge;
    if (v) {
      e: {
        for (a = 1, f = v[0]; f >= 10; f /= 10, a++) ;
        if (p = o - a, p < 0)
          p += C, w = o, g = v[x = 0], d = J(g / P[a - w - 1] % 10);
        else if (x = Be((p + 1) / C), x >= v.length)
          if (m) {
            for (; v.length <= x; v.push(0)) ;
            g = d = 0, a = 1, p %= C, w = p - C + 1;
          } else
            break e;
        else {
          for (g = f = v[x], a = 1; f >= 10; f /= 10, a++) ;
          p %= C, w = p - C + a, d = w < 0 ? 0 : J(g / P[a - w - 1] % 10);
        }
        if (m = m || o < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        v[x + 1] != null || (w < 0 ? g : g % P[a - w - 1]), m = l < 4 ? (d || m) && (l == 0 || l == (s.s < 0 ? 3 : 2)) : d > 5 || d == 5 && (l == 4 || m || l == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (p > 0 ? w > 0 ? g / P[a - w] : 0 : v[x - 1]) % 10 & 1 || l == (s.s < 0 ? 8 : 7)), o < 1 || !v[0])
          return v.length = 0, m ? (o -= s.e + 1, v[0] = P[(C - o % C) % C], s.e = -o || 0) : v[0] = s.e = 0, s;
        if (p == 0 ? (v.length = x, f = 1, x--) : (v.length = x + 1, f = P[C - p], v[x] = w > 0 ? J(g / P[a - w] % P[w]) * f : 0), m)
          for (; ; )
            if (x == 0) {
              for (p = 1, w = v[0]; w >= 10; w /= 10, p++) ;
              for (w = v[0] += f, f = 1; w >= 10; w /= 10, f++) ;
              p != f && (s.e++, v[0] == ee && (v[0] = 1));
              break;
            } else {
              if (v[x] += f, v[x] != ee) break;
              v[x--] = 0, f = 1;
            }
        for (p = v.length; v[--p] === 0; v.pop()) ;
      }
      s.e > _ ? s.c = s.e = null : s.e < b && (s.c = [s.e = 0]);
    }
    return s;
  }
  function re(s) {
    var o, l = s.e;
    return l === null ? s.toString() : (o = H(s.c), o = l <= E || l >= h ? be(o, l) : se(o, l, "0"), s.s < 0 ? "-" + o : o);
  }
  return r.absoluteValue = r.abs = function() {
    var s = new S(this);
    return s.s < 0 && (s.s = 1), s;
  }, r.comparedTo = function(s, o) {
    return fe(this, new S(s, o));
  }, r.decimalPlaces = r.dp = function(s, o) {
    var l, m, a, p = this;
    if (s != null)
      return D(s, 0, W), o == null ? o = c : D(o, 0, 8), V(new S(p), s + p.e + 1, o);
    if (!(l = p.c)) return null;
    if (m = ((a = l.length - 1) - Q(this.e / C)) * C, a = l[a]) for (; a % 10 == 0; a /= 10, m--) ;
    return m < 0 && (m = 0), m;
  }, r.dividedBy = r.div = function(s, o) {
    return e(this, new S(s, o), y, c);
  }, r.dividedToIntegerBy = r.idiv = function(s, o) {
    return e(this, new S(s, o), 0, 1);
  }, r.exponentiatedBy = r.pow = function(s, o) {
    var l, m, a, p, w, f, g, x, d, v = this;
    if (s = new S(s), s.c && !s.isInteger())
      throw Error(Z + "Exponent not an integer: " + re(s));
    if (o != null && (o = new S(o)), f = s.e > 14, !v.c || !v.c[0] || v.c[0] == 1 && !v.e && v.c.length == 1 || !s.c || !s.c[0])
      return d = new S(Math.pow(+re(v), f ? s.s * (2 - _e(s)) : +re(s))), o ? d.mod(o) : d;
    if (g = s.s < 0, o) {
      if (o.c ? !o.c[0] : !o.s) return new S(NaN);
      m = !g && v.isInteger() && o.isInteger(), m && (v = v.mod(o));
    } else {
      if (s.e > 9 && (v.e > 0 || v.e < -1 || (v.e == 0 ? v.c[0] > 1 || f && v.c[1] >= 24e7 : v.c[0] < 8e13 || f && v.c[0] <= 9999975e7)))
        return p = v.s < 0 && _e(s) ? -0 : 0, v.e > -1 && (p = 1 / p), new S(g ? 1 / p : p);
      G && (p = Be(G / C + 2));
    }
    for (f ? (l = new S(0.5), g && (s.s = 1), x = _e(s)) : (a = Math.abs(+re(s)), x = a % 2), d = new S(u); ; ) {
      if (x) {
        if (d = d.times(v), !d.c) break;
        p ? d.c.length > p && (d.c.length = p) : m && (d = d.mod(o));
      }
      if (a) {
        if (a = J(a / 2), a === 0) break;
        x = a % 2;
      } else if (s = s.times(l), V(s, s.e + 1, 1), s.e > 14)
        x = _e(s);
      else {
        if (a = +re(s), a === 0) break;
        x = a % 2;
      }
      v = v.times(v), p ? v.c && v.c.length > p && (v.c.length = p) : m && (v = v.mod(o));
    }
    return m ? d : (g && (d = u.div(d)), o ? d.mod(o) : p ? V(d, G, c, w) : d);
  }, r.integerValue = function(s) {
    var o = new S(this);
    return s == null ? s = c : D(s, 0, 8), V(o, o.e + 1, s);
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
    var l, m, a, p, w = this, f = w.s;
    if (s = new S(s, o), o = s.s, !f || !o) return new S(NaN);
    if (f != o)
      return s.s = -o, w.plus(s);
    var g = w.e / C, x = s.e / C, d = w.c, v = s.c;
    if (!g || !x) {
      if (!d || !v) return d ? (s.s = -o, s) : new S(v ? w : NaN);
      if (!d[0] || !v[0])
        return v[0] ? (s.s = -o, s) : new S(d[0] ? w : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          c == 3 ? -0 : 0
        ));
    }
    if (g = Q(g), x = Q(x), d = d.slice(), f = g - x) {
      for ((p = f < 0) ? (f = -f, a = d) : (x = g, a = v), a.reverse(), o = f; o--; a.push(0)) ;
      a.reverse();
    } else
      for (m = (p = (f = d.length) < (o = v.length)) ? f : o, f = o = 0; o < m; o++)
        if (d[o] != v[o]) {
          p = d[o] < v[o];
          break;
        }
    if (p && (a = d, d = v, v = a, s.s = -s.s), o = (m = v.length) - (l = d.length), o > 0) for (; o--; d[l++] = 0) ;
    for (o = ee - 1; m > f; ) {
      if (d[--m] < v[m]) {
        for (l = m; l && !d[--l]; d[l] = o) ;
        --d[l], d[m] += ee;
      }
      d[m] -= v[m];
    }
    for (; d[0] == 0; d.splice(0, 1), --x) ;
    return d[0] ? q(s, d, x) : (s.s = c == 3 ? -1 : 1, s.c = [s.e = 0], s);
  }, r.modulo = r.mod = function(s, o) {
    var l, m, a = this;
    return s = new S(s, o), !a.c || !s.s || s.c && !s.c[0] ? new S(NaN) : !s.c || a.c && !a.c[0] ? new S(a) : (O == 9 ? (m = s.s, s.s = 1, l = e(a, s, 0, 3), s.s = m, l.s *= m) : l = e(a, s, 0, O), s = a.minus(l.times(s)), !s.c[0] && O == 1 && (s.s = a.s), s);
  }, r.multipliedBy = r.times = function(s, o) {
    var l, m, a, p, w, f, g, x, d, v, P, R, I, U, K, A = this, B = A.c, X = (s = new S(s, o)).c;
    if (!B || !X || !B[0] || !X[0])
      return !A.s || !s.s || B && !B[0] && !X || X && !X[0] && !B ? s.c = s.e = s.s = null : (s.s *= A.s, !B || !X ? s.c = s.e = null : (s.c = [0], s.e = 0)), s;
    for (m = Q(A.e / C) + Q(s.e / C), s.s *= A.s, g = B.length, v = X.length, g < v && (I = B, B = X, X = I, a = g, g = v, v = a), a = g + v, I = []; a--; I.push(0)) ;
    for (U = ee, K = le, a = v; --a >= 0; ) {
      for (l = 0, P = X[a] % K, R = X[a] / K | 0, w = g, p = a + w; p > a; )
        x = B[--w] % K, d = B[w] / K | 0, f = R * x + d * P, x = P * x + f % K * K + I[p] + l, l = (x / U | 0) + (f / K | 0) + R * d, I[p--] = x % U;
      I[p] = l;
    }
    return l ? ++m : I.splice(0, 1), q(s, I, m);
  }, r.negated = function() {
    var s = new S(this);
    return s.s = -s.s || null, s;
  }, r.plus = function(s, o) {
    var l, m = this, a = m.s;
    if (s = new S(s, o), o = s.s, !a || !o) return new S(NaN);
    if (a != o)
      return s.s = -o, m.minus(s);
    var p = m.e / C, w = s.e / C, f = m.c, g = s.c;
    if (!p || !w) {
      if (!f || !g) return new S(a / 0);
      if (!f[0] || !g[0]) return g[0] ? s : new S(f[0] ? m : a * 0);
    }
    if (p = Q(p), w = Q(w), f = f.slice(), a = p - w) {
      for (a > 0 ? (w = p, l = g) : (a = -a, l = f), l.reverse(); a--; l.push(0)) ;
      l.reverse();
    }
    for (a = f.length, o = g.length, a - o < 0 && (l = g, g = f, f = l, o = a), a = 0; o; )
      a = (f[--o] = f[o] + g[o] + a) / ee | 0, f[o] = ee === f[o] ? 0 : f[o] % ee;
    return a && (f = [a].concat(f), ++w), q(s, f, w);
  }, r.precision = r.sd = function(s, o) {
    var l, m, a, p = this;
    if (s != null && s !== !!s)
      return D(s, 1, W), o == null ? o = c : D(o, 0, 8), V(new S(p), s, o);
    if (!(l = p.c)) return null;
    if (a = l.length - 1, m = a * C + 1, a = l[a]) {
      for (; a % 10 == 0; a /= 10, m--) ;
      for (a = l[0]; a >= 10; a /= 10, m++) ;
    }
    return s && p.e + 1 > m && (m = p.e + 1), m;
  }, r.shiftedBy = function(s) {
    return D(s, -9007199254740991, We), this.times("1e" + s);
  }, r.squareRoot = r.sqrt = function() {
    var s, o, l, m, a, p = this, w = p.c, f = p.s, g = p.e, x = y + 4, d = new S("0.5");
    if (f !== 1 || !w || !w[0])
      return new S(!f || f < 0 && (!w || w[0]) ? NaN : w ? p : 1 / 0);
    if (f = Math.sqrt(+re(p)), f == 0 || f == 1 / 0 ? (o = H(w), (o.length + g) % 2 == 0 && (o += "0"), f = Math.sqrt(+o), g = Q((g + 1) / 2) - (g < 0 || g % 2), f == 1 / 0 ? o = "5e" + g : (o = f.toExponential(), o = o.slice(0, o.indexOf("e") + 1) + g), l = new S(o)) : l = new S(f + ""), l.c[0]) {
      for (g = l.e, f = g + x, f < 3 && (f = 0); ; )
        if (a = l, l = d.times(a.plus(e(p, a, x, 1))), H(a.c).slice(0, f) === (o = H(l.c)).slice(0, f))
          if (l.e < g && --f, o = o.slice(f - 3, f + 1), o == "9999" || !m && o == "4999") {
            if (!m && (V(a, a.e + y + 2, 0), a.times(a).eq(p))) {
              l = a;
              break;
            }
            x += 4, f += 4, m = 1;
          } else {
            (!+o || !+o.slice(1) && o.charAt(0) == "5") && (V(l, l.e + y + 2, 1), s = !l.times(l).eq(p));
            break;
          }
    }
    return V(l, l.e + y + 1, c, s);
  }, r.toExponential = function(s, o) {
    return s != null && (D(s, 0, W), s++), k(this, s, o, 1);
  }, r.toFixed = function(s, o) {
    return s != null && (D(s, 0, W), s = s + this.e + 1), k(this, s, o);
  }, r.toFormat = function(s, o, l) {
    var m, a = this;
    if (l == null)
      s != null && o && typeof o == "object" ? (l = o, o = null) : s && typeof s == "object" ? (l = s, s = o = null) : l = F;
    else if (typeof l != "object")
      throw Error(Z + "Argument not an object: " + l);
    if (m = a.toFixed(s, o), a.c) {
      var p, w = m.split("."), f = +l.groupSize, g = +l.secondaryGroupSize, x = l.groupSeparator || "", d = w[0], v = w[1], P = a.s < 0, R = P ? d.slice(1) : d, I = R.length;
      if (g && (p = f, f = g, g = p, I -= p), f > 0 && I > 0) {
        for (p = I % f || f, d = R.substr(0, p); p < I; p += f) d += x + R.substr(p, f);
        g > 0 && (d += x + R.slice(p)), P && (d = "-" + d);
      }
      m = v ? d + (l.decimalSeparator || "") + ((g = +l.fractionGroupSize) ? v.replace(
        new RegExp("\\d{" + g + "}\\B", "g"),
        "$&" + (l.fractionGroupSeparator || "")
      ) : v) : d;
    }
    return (l.prefix || "") + m + (l.suffix || "");
  }, r.toFraction = function(s) {
    var o, l, m, a, p, w, f, g, x, d, v, P, R = this, I = R.c;
    if (s != null && (f = new S(s), !f.isInteger() && (f.c || f.s !== 1) || f.lt(u)))
      throw Error(Z + "Argument " + (f.isInteger() ? "out of range: " : "not an integer: ") + re(f));
    if (!I) return new S(R);
    for (o = new S(u), x = l = new S(u), m = g = new S(u), P = H(I), p = o.e = P.length - R.e - 1, o.c[0] = Ge[(w = p % C) < 0 ? C + w : w], s = !s || f.comparedTo(o) > 0 ? p > 0 ? o : x : f, w = _, _ = 1 / 0, f = new S(P), g.c[0] = 0; d = e(f, o, 0, 1), a = l.plus(d.times(m)), a.comparedTo(s) != 1; )
      l = m, m = a, x = g.plus(d.times(a = x)), g = a, o = f.minus(d.times(a = o)), f = a;
    return a = e(s.minus(l), m, 0, 1), g = g.plus(a.times(x)), l = l.plus(a.times(m)), g.s = x.s = R.s, p = p * 2, v = e(x, m, p, c).minus(R).abs().comparedTo(
      e(g, l, p, c).minus(R).abs()
    ) < 1 ? [x, m] : [g, l], _ = w, v;
  }, r.toNumber = function() {
    return +re(this);
  }, r.toPrecision = function(s, o) {
    return s != null && D(s, 1, W), k(this, s, o, 2);
  }, r.toString = function(s) {
    var o, l = this, m = l.s, a = l.e;
    return a === null ? m ? (o = "Infinity", m < 0 && (o = "-" + o)) : o = "NaN" : (s == null ? o = a <= E || a >= h ? be(H(l.c), a) : se(H(l.c), a, "0") : s === 10 && N ? (l = V(new S(l), y + a + 1, c), o = se(H(l.c), l.e, "0")) : (D(s, 2, L.length, "Base"), o = t(se(H(l.c), a, "0"), 10, s, m, !0)), m < 0 && l.c[0] && (o = "-" + o)), o;
  }, r.valueOf = r.toJSON = function() {
    return re(this);
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, n != null && S.set(n), S;
}
function Q(n) {
  var e = n | 0;
  return n > 0 || n === e ? e : e - 1;
}
function H(n) {
  for (var e, t, i = 1, r = n.length, u = n[0] + ""; i < r; ) {
    for (e = n[i++] + "", t = C - e.length; t--; e = "0" + e) ;
    u += e;
  }
  for (r = u.length; u.charCodeAt(--r) === 48; ) ;
  return u.slice(0, r + 1 || 1);
}
function fe(n, e) {
  var t, i, r = n.c, u = e.c, y = n.s, c = e.s, E = n.e, h = e.e;
  if (!y || !c) return null;
  if (t = r && !r[0], i = u && !u[0], t || i) return t ? i ? 0 : -c : y;
  if (y != c) return y;
  if (t = y < 0, i = E == h, !r || !u) return i ? 0 : !r ^ t ? 1 : -1;
  if (!i) return E > h ^ t ? 1 : -1;
  for (c = (E = r.length) < (h = u.length) ? E : h, y = 0; y < c; y++) if (r[y] != u[y]) return r[y] > u[y] ^ t ? 1 : -1;
  return E == h ? 0 : E > h ^ t ? 1 : -1;
}
function D(n, e, t, i) {
  if (n < e || n > t || n !== J(n))
    throw Error(Z + (i || "Argument") + (typeof n == "number" ? n < e || n > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
}
function _e(n) {
  var e = n.c.length - 1;
  return Q(n.e / C) == e && n.c[e] % 2 != 0;
}
function be(n, e) {
  return (n.length > 1 ? n.charAt(0) + "." + n.slice(1) : n) + (e < 0 ? "e" : "e+") + e;
}
function se(n, e, t) {
  var i, r;
  if (e < 0) {
    for (r = t + "."; ++e; r += t) ;
    n = r + n;
  } else if (i = n.length, ++e > i) {
    for (r = t, e -= i; --e; r += t) ;
    n += r;
  } else e < i && (n = n.slice(0, e) + "." + n.slice(e));
  return n;
}
var ie = pt(), Pt = class {
  constructor(n) {
    M(this, "key");
    M(this, "left", null);
    M(this, "right", null);
    this.key = n;
  }
}, pe = class extends Pt {
  constructor(n) {
    super(n);
  }
}, Rt = class {
  constructor() {
    M(this, "size", 0);
    M(this, "modificationCount", 0);
    M(this, "splayCount", 0);
  }
  splay(n) {
    const e = this.root;
    if (e == null)
      return this.compare(n, n), -1;
    let t = null, i = null, r = null, u = null, y = e;
    const c = this.compare;
    let E;
    for (; ; )
      if (E = c(y.key, n), E > 0) {
        let h = y.left;
        if (h == null || (E = c(h.key, n), E > 0 && (y.left = h.right, h.right = y, y = h, h = y.left, h == null)))
          break;
        t == null ? i = y : t.left = y, t = y, y = h;
      } else if (E < 0) {
        let h = y.right;
        if (h == null || (E = c(h.key, n), E < 0 && (y.right = h.left, h.left = y, y = h, h = y.right, h == null)))
          break;
        r == null ? u = y : r.right = y, r = y, y = h;
      } else
        break;
    return r != null && (r.right = y.left, y.left = u), t != null && (t.left = y.right, y.right = i), this.root !== y && (this.root = y, this.splayCount++), E;
  }
  splayMin(n) {
    let e = n, t = e.left;
    for (; t != null; ) {
      const i = t;
      e.left = i.right, i.right = e, e = i, t = e.left;
    }
    return e;
  }
  splayMax(n) {
    let e = n, t = e.right;
    for (; t != null; ) {
      const i = t;
      e.right = i.left, i.left = e, e = i, t = e.right;
    }
    return e;
  }
  _delete(n) {
    if (this.root == null || this.splay(n) != 0) return null;
    let t = this.root;
    const i = t, r = t.left;
    if (this.size--, r == null)
      this.root = t.right;
    else {
      const u = t.right;
      t = this.splayMax(r), t.right = u, this.root = t;
    }
    return this.modificationCount++, i;
  }
  addNewRoot(n, e) {
    this.size++, this.modificationCount++;
    const t = this.root;
    if (t == null) {
      this.root = n;
      return;
    }
    e < 0 ? (n.left = t, n.right = t.right, t.right = null) : (n.right = t, n.left = t.left, t.left = null), this.root = n;
  }
  _first() {
    const n = this.root;
    return n == null ? null : (this.root = this.splayMin(n), this.root);
  }
  _last() {
    const n = this.root;
    return n == null ? null : (this.root = this.splayMax(n), this.root);
  }
  clear() {
    this.root = null, this.size = 0, this.modificationCount++;
  }
  has(n) {
    return this.validKey(n) && this.splay(n) == 0;
  }
  defaultCompare() {
    return (n, e) => n < e ? -1 : n > e ? 1 : 0;
  }
  wrap() {
    return {
      getRoot: () => this.root,
      setRoot: (n) => {
        this.root = n;
      },
      getSize: () => this.size,
      getModificationCount: () => this.modificationCount,
      getSplayCount: () => this.splayCount,
      setSplayCount: (n) => {
        this.splayCount = n;
      },
      splay: (n) => this.splay(n),
      has: (n) => this.has(n)
    };
  }
}, at, ht, Re = class de extends Rt {
  constructor(t, i) {
    super();
    M(this, "root", null);
    M(this, "compare");
    M(this, "validKey");
    M(this, at, "[object Set]");
    this.compare = t ?? this.defaultCompare(), this.validKey = i ?? ((r) => r != null && r != null);
  }
  delete(t) {
    return this.validKey(t) ? this._delete(t) != null : !1;
  }
  deleteAll(t) {
    for (const i of t)
      this.delete(i);
  }
  forEach(t) {
    const i = this[Symbol.iterator]();
    let r;
    for (; r = i.next(), !r.done; )
      t(r.value, r.value, this);
  }
  add(t) {
    const i = this.splay(t);
    return i != 0 && this.addNewRoot(new pe(t), i), this;
  }
  addAndReturn(t) {
    const i = this.splay(t);
    return i != 0 && this.addNewRoot(new pe(t), i), this.root.key;
  }
  addAll(t) {
    for (const i of t)
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
    const i = new de(this.compare, this.validKey), r = this.modificationCount;
    for (const u of t) {
      if (r != this.modificationCount)
        throw "Concurrent modification during iteration.";
      this.validKey(u) && this.splay(u) == 0 && i.add(this.root.key);
    }
    i.size != this.size && (this.root = i.root, this.size = i.size, this.modificationCount++);
  }
  lookup(t) {
    return !this.validKey(t) || this.splay(t) != 0 ? null : this.root.key;
  }
  intersection(t) {
    const i = new de(this.compare, this.validKey);
    for (const r of this)
      t.has(r) && i.add(r);
    return i;
  }
  difference(t) {
    const i = new de(this.compare, this.validKey);
    for (const r of this)
      t.has(r) || i.add(r);
    return i;
  }
  union(t) {
    const i = this.clone();
    return i.addAll(t), i;
  }
  clone() {
    const t = new de(this.compare, this.validKey);
    return t.size = this.size, t.root = this.copyNode(this.root), t;
  }
  copyNode(t) {
    if (t == null) return null;
    function i(u, y) {
      let c, E;
      do {
        if (c = u.left, E = u.right, c != null) {
          const h = new pe(c.key);
          y.left = h, i(c, h);
        }
        if (E != null) {
          const h = new pe(E.key);
          y.right = h, u = E, y = h;
        }
      } while (E != null);
    }
    const r = new pe(t.key);
    return i(t, r), r;
  }
  toSet() {
    return this.clone();
  }
  entries() {
    return new Ot(this.wrap());
  }
  keys() {
    return this[Symbol.iterator]();
  }
  values() {
    return this[Symbol.iterator]();
  }
  [(ht = Symbol.iterator, at = Symbol.toStringTag, ht)]() {
    return new Ct(this.wrap());
  }
}, yt = class {
  constructor(n) {
    M(this, "tree");
    M(this, "path", new Array());
    M(this, "modificationCount", null);
    M(this, "splayCount");
    this.tree = n, this.splayCount = n.getSplayCount();
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    return this.moveNext() ? { done: !1, value: this.current() } : { done: !0, value: null };
  }
  current() {
    if (!this.path.length) return null;
    const n = this.path[this.path.length - 1];
    return this.getValue(n);
  }
  rebuildPath(n) {
    this.path.splice(0, this.path.length), this.tree.splay(n), this.path.push(this.tree.getRoot()), this.splayCount = this.tree.getSplayCount();
  }
  findLeftMostDescendent(n) {
    for (; n != null; )
      this.path.push(n), n = n.left;
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
    let n = this.path[this.path.length - 1], e = n.right;
    if (e != null) {
      for (; e != null; )
        this.path.push(e), e = e.left;
      return !0;
    }
    for (this.path.pop(); this.path.length && this.path[this.path.length - 1].right === n; )
      n = this.path.pop();
    return this.path.length > 0;
  }
}, Ct = class extends yt {
  getValue(n) {
    return n.key;
  }
}, Ot = class extends yt {
  getValue(n) {
    return [n.key, n.key];
  }
}, dt = (n) => () => n, qe = (n) => {
  const e = n ? (t, i) => i.minus(t).abs().isLessThanOrEqualTo(n) : dt(!1);
  return (t, i) => e(t, i) ? 0 : t.comparedTo(i);
};
function Nt(n) {
  const e = n ? (t, i, r, u, y) => t.exponentiatedBy(2).isLessThanOrEqualTo(
    u.minus(i).exponentiatedBy(2).plus(y.minus(r).exponentiatedBy(2)).times(n)
  ) : dt(!1);
  return (t, i, r) => {
    const u = t.x, y = t.y, c = r.x, E = r.y, h = y.minus(E).times(i.x.minus(c)).minus(u.minus(c).times(i.y.minus(E)));
    return e(h, u, y, c, E) ? 0 : h.comparedTo(0);
  };
}
var At = (n) => n, It = (n) => {
  if (n) {
    const e = new Re(qe(n)), t = new Re(qe(n)), i = (u, y) => y.addAndReturn(u), r = (u) => ({
      x: i(u.x, e),
      y: i(u.y, t)
    });
    return r({ x: new ie(0), y: new ie(0) }), r;
  }
  return At;
}, De = (n) => ({
  set: (e) => {
    oe = De(e);
  },
  reset: () => De(n),
  compare: qe(n),
  snap: It(n),
  orient: Nt(n)
}), oe = De(), ye = (n, e) => n.ll.x.isLessThanOrEqualTo(e.x) && e.x.isLessThanOrEqualTo(n.ur.x) && n.ll.y.isLessThanOrEqualTo(e.y) && e.y.isLessThanOrEqualTo(n.ur.y), Ue = (n, e) => {
  if (e.ur.x.isLessThan(n.ll.x) || n.ur.x.isLessThan(e.ll.x) || e.ur.y.isLessThan(n.ll.y) || n.ur.y.isLessThan(e.ll.y))
    return null;
  const t = n.ll.x.isLessThan(e.ll.x) ? e.ll.x : n.ll.x, i = n.ur.x.isLessThan(e.ur.x) ? n.ur.x : e.ur.x, r = n.ll.y.isLessThan(e.ll.y) ? e.ll.y : n.ll.y, u = n.ur.y.isLessThan(e.ur.y) ? n.ur.y : e.ur.y;
  return { ll: { x: t, y: r }, ur: { x: i, y: u } };
}, Me = (n, e) => n.x.times(e.y).minus(n.y.times(e.x)), mt = (n, e) => n.x.times(e.x).plus(n.y.times(e.y)), Ce = (n) => mt(n, n).sqrt(), kt = (n, e, t) => {
  const i = { x: e.x.minus(n.x), y: e.y.minus(n.y) }, r = { x: t.x.minus(n.x), y: t.y.minus(n.y) };
  return Me(r, i).div(Ce(r)).div(Ce(i));
}, Bt = (n, e, t) => {
  const i = { x: e.x.minus(n.x), y: e.y.minus(n.y) }, r = { x: t.x.minus(n.x), y: t.y.minus(n.y) };
  return mt(r, i).div(Ce(r)).div(Ce(i));
}, je = (n, e, t) => e.y.isZero() ? null : { x: n.x.plus(e.x.div(e.y).times(t.minus(n.y))), y: t }, He = (n, e, t) => e.x.isZero() ? null : { x: t, y: n.y.plus(e.y.div(e.x).times(t.minus(n.x))) }, Gt = (n, e, t, i) => {
  if (e.x.isZero()) return He(t, i, n.x);
  if (i.x.isZero()) return He(n, e, t.x);
  if (e.y.isZero()) return je(t, i, n.y);
  if (i.y.isZero()) return je(n, e, t.y);
  const r = Me(e, i);
  if (r.isZero()) return null;
  const u = { x: t.x.minus(n.x), y: t.y.minus(n.y) }, y = Me(u, e).div(r), c = Me(u, i).div(r), E = n.x.plus(c.times(e.x)), h = t.x.plus(y.times(i.x)), b = n.y.plus(c.times(e.y)), _ = t.y.plus(y.times(i.y)), T = E.plus(h).div(2), O = b.plus(_).div(2);
  return { x: T, y: O };
}, ne = class xt {
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(e, t) {
    M(this, "point");
    M(this, "isLeft");
    M(this, "segment");
    M(this, "otherSE");
    M(this, "consumedBy");
    e.events === void 0 ? e.events = [this] : e.events.push(this), this.point = e, this.isLeft = t;
  }
  // for ordering sweep events in the sweep event queue
  static compare(e, t) {
    const i = xt.comparePoints(e.point, t.point);
    return i !== 0 ? i : (e.point !== t.point && e.link(t), e.isLeft !== t.isLeft ? e.isLeft ? 1 : -1 : Ne.compare(e.segment, t.segment));
  }
  // for ordering points in sweep line order
  static comparePoints(e, t) {
    return e.x.isLessThan(t.x) ? -1 : e.x.isGreaterThan(t.x) ? 1 : e.y.isLessThan(t.y) ? -1 : e.y.isGreaterThan(t.y) ? 1 : 0;
  }
  link(e) {
    if (e.point === this.point)
      throw new Error("Tried to link already linked events");
    const t = e.point.events;
    for (let i = 0, r = t.length; i < r; i++) {
      const u = t[i];
      this.point.events.push(u), u.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const e = this.point.events.length;
    for (let t = 0; t < e; t++) {
      const i = this.point.events[t];
      if (i.segment.consumedBy === void 0)
        for (let r = t + 1; r < e; r++) {
          const u = this.point.events[r];
          u.consumedBy === void 0 && i.otherSE.point.events === u.otherSE.point.events && i.segment.consume(u.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const e = [];
    for (let t = 0, i = this.point.events.length; t < i; t++) {
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
    const t = /* @__PURE__ */ new Map(), i = (r) => {
      const u = r.otherSE;
      t.set(r, {
        sine: kt(this.point, e.point, u.point),
        cosine: Bt(this.point, e.point, u.point)
      });
    };
    return (r, u) => {
      t.has(r) || i(r), t.has(u) || i(u);
      const { sine: y, cosine: c } = t.get(r), { sine: E, cosine: h } = t.get(u);
      return y.isGreaterThanOrEqualTo(0) && E.isGreaterThanOrEqualTo(0) ? c.isLessThan(h) ? 1 : c.isGreaterThan(h) ? -1 : 0 : y.isLessThan(0) && E.isLessThan(0) ? c.isLessThan(h) ? -1 : c.isGreaterThan(h) ? 1 : 0 : E.isLessThan(y) ? -1 : E.isGreaterThan(y) ? 1 : 0;
    };
  }
}, $t = class ze {
  constructor(e) {
    M(this, "events");
    M(this, "poly");
    M(this, "_isExteriorRing");
    M(this, "_enclosingRing");
    this.events = e;
    for (let t = 0, i = e.length; t < i; t++)
      e[t].segment.ringOut = this;
    this.poly = null;
  }
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(e) {
    const t = [];
    for (let i = 0, r = e.length; i < r; i++) {
      const u = e[i];
      if (!u.isInResult() || u.ringOut) continue;
      let y = null, c = u.leftSE, E = u.rightSE;
      const h = [c], b = c.point, _ = [];
      for (; y = c, c = E, h.push(c), c.point !== b; )
        for (; ; ) {
          const T = c.getAvailableLinkedEvents();
          if (T.length === 0) {
            const F = h[0].point, L = h[h.length - 1].point;
            throw new Error(
              `Unable to complete output ring starting at [${F.x}, ${F.y}]. Last matching segment found ends at [${L.x}, ${L.y}].`
            );
          }
          if (T.length === 1) {
            E = T[0].otherSE;
            break;
          }
          let O = null;
          for (let F = 0, L = _.length; F < L; F++)
            if (_[F].point === c.point) {
              O = F;
              break;
            }
          if (O !== null) {
            const F = _.splice(O)[0], L = h.splice(F.index);
            L.unshift(L[0].otherSE), t.push(new ze(L.reverse()));
            continue;
          }
          _.push({
            index: h.length,
            point: c.point
          });
          const G = c.getLeftmostComparator(y);
          E = T.sort(G)[0].otherSE;
          break;
        }
      t.push(new ze(h));
    }
    return t;
  }
  getGeom() {
    let e = this.events[0].point;
    const t = [e];
    for (let h = 1, b = this.events.length - 1; h < b; h++) {
      const _ = this.events[h].point, T = this.events[h + 1].point;
      oe.orient(_, e, T) !== 0 && (t.push(_), e = _);
    }
    if (t.length === 1) return null;
    const i = t[0], r = t[1];
    oe.orient(i, e, r) === 0 && t.shift(), t.push(t[0]);
    const u = this.isExteriorRing() ? 1 : -1, y = this.isExteriorRing() ? 0 : t.length - 1, c = this.isExteriorRing() ? t.length : -1, E = [];
    for (let h = y; h != c; h += u)
      E.push([t[h].x.toNumber(), t[h].y.toNumber()]);
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
    for (let y = 1, c = this.events.length; y < c; y++) {
      const E = this.events[y];
      ne.compare(e, E) > 0 && (e = E);
    }
    let t = e.segment.prevInResult(), i = t ? t.prevInResult() : null;
    for (; ; ) {
      if (!t) return null;
      if (!i) return t.ringOut;
      if (i.ringOut !== t.ringOut)
        return ((r = i.ringOut) == null ? void 0 : r.enclosingRing()) !== t.ringOut ? t.ringOut : (u = t.ringOut) == null ? void 0 : u.enclosingRing();
      t = i.prevInResult(), i = t ? t.prevInResult() : null;
    }
  }
}, Je = class {
  constructor(n) {
    M(this, "exteriorRing");
    M(this, "interiorRings");
    this.exteriorRing = n, n.poly = this, this.interiorRings = [];
  }
  addInterior(n) {
    this.interiorRings.push(n), n.poly = this;
  }
  getGeom() {
    const n = this.exteriorRing.getGeom();
    if (n === null) return null;
    const e = [n];
    for (let t = 0, i = this.interiorRings.length; t < i; t++) {
      const r = this.interiorRings[t].getGeom();
      r !== null && e.push(r);
    }
    return e;
  }
}, qt = class {
  constructor(n) {
    M(this, "rings");
    M(this, "polys");
    this.rings = n, this.polys = this._composePolys(n);
  }
  getGeom() {
    const n = [];
    for (let e = 0, t = this.polys.length; e < t; e++) {
      const i = this.polys[e].getGeom();
      i !== null && n.push(i);
    }
    return n;
  }
  _composePolys(n) {
    var t;
    const e = [];
    for (let i = 0, r = n.length; i < r; i++) {
      const u = n[i];
      if (!u.poly)
        if (u.isExteriorRing()) e.push(new Je(u));
        else {
          const y = u.enclosingRing();
          y != null && y.poly || e.push(new Je(y)), (t = y == null ? void 0 : y.poly) == null || t.addInterior(u);
        }
    }
    return e;
  }
}, Dt = class {
  constructor(n, e = Ne.compare) {
    M(this, "queue");
    M(this, "tree");
    M(this, "segments");
    this.queue = n, this.tree = new Re(e), this.segments = [];
  }
  process(n) {
    const e = n.segment, t = [];
    if (n.consumedBy)
      return n.isLeft ? this.queue.delete(n.otherSE) : this.tree.delete(e), t;
    n.isLeft && this.tree.add(e);
    let i = e, r = e;
    do
      i = this.tree.lastBefore(i);
    while (i != null && i.consumedBy != null);
    do
      r = this.tree.firstAfter(r);
    while (r != null && r.consumedBy != null);
    if (n.isLeft) {
      let u = null;
      if (i) {
        const c = i.getIntersection(e);
        if (c !== null && (e.isAnEndpoint(c) || (u = c), !i.isAnEndpoint(c))) {
          const E = this._splitSafely(i, c);
          for (let h = 0, b = E.length; h < b; h++)
            t.push(E[h]);
        }
      }
      let y = null;
      if (r) {
        const c = r.getIntersection(e);
        if (c !== null && (e.isAnEndpoint(c) || (y = c), !r.isAnEndpoint(c))) {
          const E = this._splitSafely(r, c);
          for (let h = 0, b = E.length; h < b; h++)
            t.push(E[h]);
        }
      }
      if (u !== null || y !== null) {
        let c = null;
        u === null ? c = y : y === null ? c = u : c = ne.comparePoints(
          u,
          y
        ) <= 0 ? u : y, this.queue.delete(e.rightSE), t.push(e.rightSE);
        const E = e.split(c);
        for (let h = 0, b = E.length; h < b; h++)
          t.push(E[h]);
      }
      t.length > 0 ? (this.tree.delete(e), t.push(n)) : (this.segments.push(e), e.prev = i);
    } else {
      if (i && r) {
        const u = i.getIntersection(r);
        if (u !== null) {
          if (!i.isAnEndpoint(u)) {
            const y = this._splitSafely(i, u);
            for (let c = 0, E = y.length; c < E; c++)
              t.push(y[c]);
          }
          if (!r.isAnEndpoint(u)) {
            const y = this._splitSafely(r, u);
            for (let c = 0, E = y.length; c < E; c++)
              t.push(y[c]);
          }
        }
      }
      this.tree.delete(e);
    }
    return t;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(n, e) {
    this.tree.delete(n);
    const t = n.rightSE;
    this.queue.delete(t);
    const i = n.split(e);
    return i.push(t), n.consumedBy === void 0 && this.tree.add(n), i;
  }
}, Ut = class {
  constructor() {
    M(this, "type");
    M(this, "numMultiPolys");
  }
  run(n, e, t) {
    me.type = n;
    const i = [new et(e, !0)];
    for (let h = 0, b = t.length; h < b; h++)
      i.push(new et(t[h], !1));
    if (me.numMultiPolys = i.length, me.type === "difference") {
      const h = i[0];
      let b = 1;
      for (; b < i.length; )
        Ue(i[b].bbox, h.bbox) !== null ? b++ : i.splice(b, 1);
    }
    if (me.type === "intersection")
      for (let h = 0, b = i.length; h < b; h++) {
        const _ = i[h];
        for (let T = h + 1, O = i.length; T < O; T++)
          if (Ue(_.bbox, i[T].bbox) === null) return [];
      }
    const r = new Re(ne.compare);
    for (let h = 0, b = i.length; h < b; h++) {
      const _ = i[h].getSweepEvents();
      for (let T = 0, O = _.length; T < O; T++)
        r.add(_[T]);
    }
    const u = new Dt(r);
    let y = null;
    for (r.size != 0 && (y = r.first(), r.delete(y)); y; ) {
      const h = u.process(y);
      for (let b = 0, _ = h.length; b < _; b++) {
        const T = h[b];
        T.consumedBy === void 0 && r.add(T);
      }
      r.size != 0 ? (y = r.first(), r.delete(y)) : y = null;
    }
    oe.reset();
    const c = $t.factory(u.segments);
    return new qt(c).getGeom();
  }
}, me = new Ut(), Oe = me, zt = 0, Ne = class Pe {
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(e, t, i, r) {
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
    this.id = ++zt, this.leftSE = e, e.segment = this, e.otherSE = t, this.rightSE = t, t.segment = this, t.otherSE = e, this.rings = i, this.windings = r;
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
    const i = e.leftSE.point.x, r = t.leftSE.point.x, u = e.rightSE.point.x, y = t.rightSE.point.x;
    if (y.isLessThan(i)) return 1;
    if (u.isLessThan(r)) return -1;
    const c = e.leftSE.point.y, E = t.leftSE.point.y, h = e.rightSE.point.y, b = t.rightSE.point.y;
    if (i.isLessThan(r)) {
      if (E.isLessThan(c) && E.isLessThan(h)) return 1;
      if (E.isGreaterThan(c) && E.isGreaterThan(h)) return -1;
      const _ = e.comparePoint(t.leftSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
      const T = t.comparePoint(e.rightSE.point);
      return T !== 0 ? T : -1;
    }
    if (i.isGreaterThan(r)) {
      if (c.isLessThan(E) && c.isLessThan(b)) return -1;
      if (c.isGreaterThan(E) && c.isGreaterThan(b)) return 1;
      const _ = t.comparePoint(e.leftSE.point);
      if (_ !== 0) return _;
      const T = e.comparePoint(t.rightSE.point);
      return T < 0 ? 1 : T > 0 ? -1 : 1;
    }
    if (c.isLessThan(E)) return -1;
    if (c.isGreaterThan(E)) return 1;
    if (u.isLessThan(y)) {
      const _ = t.comparePoint(e.rightSE.point);
      if (_ !== 0) return _;
    }
    if (u.isGreaterThan(y)) {
      const _ = e.comparePoint(t.rightSE.point);
      if (_ < 0) return 1;
      if (_ > 0) return -1;
    }
    if (!u.eq(y)) {
      const _ = h.minus(c), T = u.minus(i), O = b.minus(E), G = y.minus(r);
      if (_.isGreaterThan(T) && O.isLessThan(G)) return 1;
      if (_.isLessThan(T) && O.isGreaterThan(G)) return -1;
    }
    return u.isGreaterThan(y) ? 1 : u.isLessThan(y) || h.isLessThan(b) ? -1 : h.isGreaterThan(b) ? 1 : e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  }
  static fromRing(e, t, i) {
    let r, u, y;
    const c = ne.comparePoints(e, t);
    if (c < 0)
      r = e, u = t, y = 1;
    else if (c > 0)
      r = t, u = e, y = -1;
    else
      throw new Error(
        `Tried to create degenerate segment at [${e.x}, ${e.y}]`
      );
    const E = new ne(r, !0), h = new ne(u, !1);
    return new Pe(E, h, [i], [y]);
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
    const t = this.bbox(), i = e.bbox(), r = Ue(t, i);
    if (r === null) return null;
    const u = this.leftSE.point, y = this.rightSE.point, c = e.leftSE.point, E = e.rightSE.point, h = ye(t, c) && this.comparePoint(c) === 0, b = ye(i, u) && e.comparePoint(u) === 0, _ = ye(t, E) && this.comparePoint(E) === 0, T = ye(i, y) && e.comparePoint(y) === 0;
    if (b && h)
      return T && !_ ? y : !T && _ ? E : null;
    if (b)
      return _ && u.x.eq(E.x) && u.y.eq(E.y) ? null : u;
    if (h)
      return T && y.x.eq(c.x) && y.y.eq(c.y) ? null : c;
    if (T && _) return null;
    if (T) return y;
    if (_) return E;
    const O = Gt(u, this.vector(), c, e.vector());
    return O === null || !ye(r, O) ? null : oe.snap(O);
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
    const t = [], i = e.events !== void 0, r = new ne(e, !0), u = new ne(e, !1), y = this.rightSE;
    this.replaceRightSE(u), t.push(u), t.push(r);
    const c = new Pe(
      r,
      y,
      this.rings.slice(),
      this.windings.slice()
    );
    return ne.comparePoints(c.leftSE.point, c.rightSE.point) > 0 && c.swapEvents(), ne.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), i && (r.checkForConsuming(), u.checkForConsuming()), t;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const e = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let t = 0, i = this.windings.length; t < i; t++)
      this.windings[t] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(e) {
    let t = this, i = e;
    for (; t.consumedBy; ) t = t.consumedBy;
    for (; i.consumedBy; ) i = i.consumedBy;
    const r = Pe.compare(t, i);
    if (r !== 0) {
      if (r > 0) {
        const u = t;
        t = i, i = u;
      }
      if (t.prev === i) {
        const u = t;
        t = i, i = u;
      }
      for (let u = 0, y = i.rings.length; u < y; u++) {
        const c = i.rings[u], E = i.windings[u], h = t.rings.indexOf(c);
        h === -1 ? (t.rings.push(c), t.windings.push(E)) : t.windings[h] += E;
      }
      i.rings = null, i.windings = null, i.consumedBy = t, i.leftSE.consumedBy = t.leftSE, i.rightSE.consumedBy = t.rightSE;
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
    const t = this._afterState.rings, i = this._afterState.windings, r = this._afterState.multiPolys;
    for (let c = 0, E = this.rings.length; c < E; c++) {
      const h = this.rings[c], b = this.windings[c], _ = t.indexOf(h);
      _ === -1 ? (t.push(h), i.push(b)) : i[_] += b;
    }
    const u = [], y = [];
    for (let c = 0, E = t.length; c < E; c++) {
      if (i[c] === 0) continue;
      const h = t[c], b = h.poly;
      if (y.indexOf(b) === -1)
        if (h.isExterior) u.push(b);
        else {
          y.indexOf(b) === -1 && y.push(b);
          const _ = u.indexOf(h.poly);
          _ !== -1 && u.splice(_, 1);
        }
    }
    for (let c = 0, E = u.length; c < E; c++) {
      const h = u[c].multiPoly;
      r.indexOf(h) === -1 && r.push(h);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const e = this.beforeState().multiPolys, t = this.afterState().multiPolys;
    switch (Oe.type) {
      case "union": {
        const i = e.length === 0, r = t.length === 0;
        this._isInResult = i !== r;
        break;
      }
      case "intersection": {
        let i, r;
        e.length < t.length ? (i = e.length, r = t.length) : (i = t.length, r = e.length), this._isInResult = r === Oe.numMultiPolys && i < r;
        break;
      }
      case "xor": {
        const i = Math.abs(e.length - t.length);
        this._isInResult = i % 2 === 1;
        break;
      }
      case "difference": {
        const i = (r) => r.length === 1 && r[0].isSubject;
        this._isInResult = i(e) !== i(t);
        break;
      }
    }
    return this._isInResult;
  }
}, Qe = class {
  constructor(n, e, t) {
    M(this, "poly");
    M(this, "isExterior");
    M(this, "segments");
    M(this, "bbox");
    if (!Array.isArray(n) || n.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = t, this.segments = [], typeof n[0][0] != "number" || typeof n[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const i = oe.snap({ x: new ie(n[0][0]), y: new ie(n[0][1]) });
    this.bbox = {
      ll: { x: i.x, y: i.y },
      ur: { x: i.x, y: i.y }
    };
    let r = i;
    for (let u = 1, y = n.length; u < y; u++) {
      if (typeof n[u][0] != "number" || typeof n[u][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      const c = oe.snap({ x: new ie(n[u][0]), y: new ie(n[u][1]) });
      c.x.eq(r.x) && c.y.eq(r.y) || (this.segments.push(Ne.fromRing(r, c, this)), c.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = c.x), c.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = c.y), c.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = c.x), c.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = c.y), r = c);
    }
    (!i.x.eq(r.x) || !i.y.eq(r.y)) && this.segments.push(Ne.fromRing(r, i, this));
  }
  getSweepEvents() {
    const n = [];
    for (let e = 0, t = this.segments.length; e < t; e++) {
      const i = this.segments[e];
      n.push(i.leftSE), n.push(i.rightSE);
    }
    return n;
  }
}, Ft = class {
  constructor(n, e) {
    M(this, "multiPoly");
    M(this, "exteriorRing");
    M(this, "interiorRings");
    M(this, "bbox");
    if (!Array.isArray(n))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Qe(n[0], this, !0), this.bbox = {
      ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y },
      ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y }
    }, this.interiorRings = [];
    for (let t = 1, i = n.length; t < i; t++) {
      const r = new Qe(n[t], this, !1);
      r.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = r.bbox.ll.x), r.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = r.bbox.ll.y), r.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = r.bbox.ur.x), r.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = r.bbox.ur.y), this.interiorRings.push(r);
    }
    this.multiPoly = e;
  }
  getSweepEvents() {
    const n = this.exteriorRing.getSweepEvents();
    for (let e = 0, t = this.interiorRings.length; e < t; e++) {
      const i = this.interiorRings[e].getSweepEvents();
      for (let r = 0, u = i.length; r < u; r++)
        n.push(i[r]);
    }
    return n;
  }
}, et = class {
  constructor(n, e) {
    M(this, "isSubject");
    M(this, "polys");
    M(this, "bbox");
    if (!Array.isArray(n))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof n[0][0][0] == "number" && (n = [n]);
    } catch {
    }
    this.polys = [], this.bbox = {
      ll: { x: new ie(Number.POSITIVE_INFINITY), y: new ie(Number.POSITIVE_INFINITY) },
      ur: { x: new ie(Number.NEGATIVE_INFINITY), y: new ie(Number.NEGATIVE_INFINITY) }
    };
    for (let t = 0, i = n.length; t < i; t++) {
      const r = new Ft(n[t], this);
      r.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = r.bbox.ll.x), r.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = r.bbox.ll.y), r.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = r.bbox.ur.x), r.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = r.bbox.ur.y), this.polys.push(r);
    }
    this.isSubject = e;
  }
  getSweepEvents() {
    const n = [];
    for (let e = 0, t = this.polys.length; e < t; e++) {
      const i = this.polys[e].getSweepEvents();
      for (let r = 0, u = i.length; r < u; r++)
        n.push(i[r]);
    }
    return n;
  }
}, Vt = (n, ...e) => Oe.run("union", n, e), Kt = (n, ...e) => Oe.run("difference", n, e);
oe.set;
function wt(n, e, t) {
  if (n !== null)
    for (var i, r, u, y, c, E, h, b = 0, _ = 0, T, O = n.type, G = O === "FeatureCollection", F = O === "Feature", L = G ? n.features.length : 1, N = 0; N < L; N++) {
      h = G ? n.features[N].geometry : F ? n.geometry : n, T = h ? h.type === "GeometryCollection" : !1, c = T ? h.geometries.length : 1;
      for (var S = 0; S < c; S++) {
        var k = 0, $ = 0;
        if (y = T ? h.geometries[S] : h, y !== null) {
          E = y.coordinates;
          var q = y.type;
          switch (b = 0, q) {
            case null:
              break;
            case "Point":
              if (e(
                E,
                _,
                N,
                k,
                $
              ) === !1)
                return !1;
              _++, k++;
              break;
            case "LineString":
            case "MultiPoint":
              for (i = 0; i < E.length; i++) {
                if (e(
                  E[i],
                  _,
                  N,
                  k,
                  $
                ) === !1)
                  return !1;
                _++, q === "MultiPoint" && k++;
              }
              q === "LineString" && k++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (i = 0; i < E.length; i++) {
                for (r = 0; r < E[i].length - b; r++) {
                  if (e(
                    E[i][r],
                    _,
                    N,
                    k,
                    $
                  ) === !1)
                    return !1;
                  _++;
                }
                q === "MultiLineString" && k++, q === "Polygon" && $++;
              }
              q === "Polygon" && k++;
              break;
            case "MultiPolygon":
              for (i = 0; i < E.length; i++) {
                for ($ = 0, r = 0; r < E[i].length; r++) {
                  for (u = 0; u < E[i][r].length - b; u++) {
                    if (e(
                      E[i][r][u],
                      _,
                      N,
                      k,
                      $
                    ) === !1)
                      return !1;
                    _++;
                  }
                  $++;
                }
                k++;
              }
              break;
            case "GeometryCollection":
              for (i = 0; i < y.geometries.length; i++)
                if (wt(y.geometries[i], e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Xe(n, e) {
  var t, i, r, u, y, c, E, h, b, _, T = 0, O = n.type === "FeatureCollection", G = n.type === "Feature", F = O ? n.features.length : 1;
  for (t = 0; t < F; t++) {
    for (c = O ? n.features[t].geometry : G ? n.geometry : n, h = O ? n.features[t].properties : G ? n.properties : {}, b = O ? n.features[t].bbox : G ? n.bbox : void 0, _ = O ? n.features[t].id : G ? n.id : void 0, E = c ? c.type === "GeometryCollection" : !1, y = E ? c.geometries.length : 1, r = 0; r < y; r++) {
      if (u = E ? c.geometries[r] : c, u === null) {
        if (e(
          null,
          T,
          h,
          b,
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
            T,
            h,
            b,
            _
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (i = 0; i < u.geometries.length; i++)
            if (e(
              u.geometries[i],
              T,
              h,
              b,
              _
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    T++;
  }
}
function Xt(n, e) {
  Xe(n, function(t, i, r, u, y) {
    var c = t === null ? null : t.type;
    switch (c) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return e(
          we(t, r, { bbox: u, id: y }),
          i,
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
    for (var h = 0; h < t.coordinates.length; h++) {
      var b = t.coordinates[h], _ = {
        type: E,
        coordinates: b
      };
      if (e(we(_, r), i, h) === !1)
        return !1;
    }
  });
}
function Yt(n, e = {}) {
  const t = [];
  if (Xe(n, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least 2 geometries");
  const i = Vt(t[0], ...t.slice(1));
  return i.length === 0 ? null : i.length === 1 ? Ke(i[0], e.properties) : gt(i, e.properties);
}
var Et = Yt;
function ve() {
}
function vt(n) {
  return n();
}
function tt() {
  return /* @__PURE__ */ Object.create(null);
}
function Ae(n) {
  n.forEach(vt);
}
function St(n) {
  return typeof n == "function";
}
function Zt(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Wt(n) {
  return Object.keys(n).length === 0;
}
function jt(n, e) {
  n.appendChild(e);
}
function Ht(n, e, t) {
  n.insertBefore(e, t || null);
}
function _t(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function nt(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function ue(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function Jt(n) {
  return Array.from(n.childNodes);
}
function Le(n, e, t) {
  n.classList.toggle(e, !!t);
}
let Ye;
function xe(n) {
  Ye = n;
}
const ae = [], it = [];
let he = [];
const rt = [], Qt = /* @__PURE__ */ Promise.resolve();
let Fe = !1;
function en() {
  Fe || (Fe = !0, Qt.then(bt));
}
function Ve(n) {
  he.push(n);
}
const $e = /* @__PURE__ */ new Set();
let ce = 0;
function bt() {
  if (ce !== 0)
    return;
  const n = Ye;
  do {
    try {
      for (; ce < ae.length; ) {
        const e = ae[ce];
        ce++, xe(e), tn(e.$$);
      }
    } catch (e) {
      throw ae.length = 0, ce = 0, e;
    }
    for (xe(null), ae.length = 0, ce = 0; it.length; ) it.pop()();
    for (let e = 0; e < he.length; e += 1) {
      const t = he[e];
      $e.has(t) || ($e.add(t), t());
    }
    he.length = 0;
  } while (ae.length);
  for (; rt.length; )
    rt.pop()();
  Fe = !1, $e.clear(), xe(n);
}
function tn(n) {
  if (n.fragment !== null) {
    n.update(), Ae(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Ve);
  }
}
function nn(n) {
  const e = [], t = [];
  he.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), he = e;
}
const rn = /* @__PURE__ */ new Set();
function sn(n, e) {
  n && n.i && (rn.delete(n), n.i(e));
}
function on(n, e, t) {
  const { fragment: i, after_update: r } = n.$$;
  i && i.m(e, t), Ve(() => {
    const u = n.$$.on_mount.map(vt).filter(St);
    n.$$.on_destroy ? n.$$.on_destroy.push(...u) : Ae(u), n.$$.on_mount = [];
  }), r.forEach(Ve);
}
function ln(n, e) {
  const t = n.$$;
  t.fragment !== null && (nn(t.after_update), Ae(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function un(n, e) {
  n.$$.dirty[0] === -1 && (ae.push(n), en(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function fn(n, e, t, i, r, u, y = null, c = [-1]) {
  const E = Ye;
  xe(n);
  const h = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: ve,
    not_equal: r,
    bound: tt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (E ? E.$$.context : [])),
    // everything else
    callbacks: tt(),
    dirty: c,
    skip_bound: !1,
    root: e.target || E.$$.root
  };
  y && y(h.root);
  let b = !1;
  if (h.ctx = t(n, e.props || {}, (_, T, ...O) => {
    const G = O.length ? O[0] : T;
    return h.ctx && r(h.ctx[_], h.ctx[_] = G) && (!h.skip_bound && h.bound[_] && h.bound[_](G), b && un(n, _)), T;
  }), h.update(), b = !0, Ae(h.before_update), h.fragment = i(h.ctx), e.target) {
    if (e.hydrate) {
      const _ = Jt(e.target);
      h.fragment && h.fragment.l(_), _.forEach(_t);
    } else
      h.fragment && h.fragment.c();
    e.intro && sn(n.$$.fragment), on(n, e.target, e.anchor), bt();
  }
  xe(E);
}
class cn {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    M(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    M(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ln(this, 1), this.$destroy = ve;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!St(t))
      return ve;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(t), () => {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Wt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const an = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(an);
function hn(n) {
  let e, t, i;
  return {
    c() {
      e = nt("svg"), t = nt("path"), ue(t, "stroke-width", "4"), ue(t, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), ue(t, "class", "svelte-gzo3ar"), ue(e, "width", i = /*displayIn*/
      n[0] === "list" ? 20 : void 0), ue(e, "viewBox", "0 0 70 85"), ue(e, "fill", "none"), ue(e, "class", "svelte-gzo3ar"), Le(
        e,
        "in-map",
        /*displayIn*/
        n[0] !== "list"
      ), Le(
        e,
        "list-icon",
        /*displayIn*/
        n[0] === "list"
      );
    },
    m(r, u) {
      Ht(r, e, u), jt(e, t);
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
    i: ve,
    o: ve,
    d(r) {
      r && _t(e);
    }
  };
}
function gn(n, e, t) {
  let { displayIn: i } = e;
  return n.$$set = (r) => {
    "displayIn" in r && t(0, i = r.displayIn);
  }, [i];
}
class pn extends cn {
  constructor(e) {
    super(), fn(this, e, gn, hn, Zt, { displayIn: 0 });
  }
}
function yn(n, e = {}) {
  if (n.bbox != null && e.recompute !== !0)
    return n.bbox;
  const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return wt(n, (i) => {
    t[0] > i[0] && (t[0] = i[0]), t[1] > i[1] && (t[1] = i[1]), t[2] < i[0] && (t[2] = i[0]), t[3] < i[1] && (t[3] = i[1]);
  }), t;
}
var st = yn;
function dn(n) {
  const e = [];
  if (Xe(n, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least two features");
  const t = n.features[0].properties || {}, i = Kt(e[0], ...e.slice(1));
  return i.length === 0 ? null : i.length === 1 ? Ke(i[0], t) : gt(i, t);
}
var mn = dn;
function xn(n) {
  if (!n) throw new Error("geojson is required");
  var e = [];
  return Xt(n, function(t) {
    e.push(t);
  }), Ee(e);
}
var wn = xn;
function ot(n) {
  const e = [...n];
  return e[2] < e[0] && (Math.abs((e[0] + e[2] + 360) / 2) > Math.abs((e[0] - 360 + e[2]) / 2) ? e[0] -= 360 : e[2] += 360), e;
}
function lt(n, e) {
  const t = mn(
    Ee([
      Ke([
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]),
      n
    ])
  );
  if (!t)
    return;
  t.properties = { isMask: !0 };
  const i = ot(st(n)), r = (i[2] - i[0]) / 360 / 1e3, u = i[0] < -180, y = i[2] > 180, c = wn(n);
  if (c.features.length > 1 && (u || y))
    for (const E of c.features) {
      const h = ot(st(E));
      if (y && h[0] < -180 + r)
        for (const b of E.geometry.coordinates)
          for (const _ of b)
            _[0] += 360 - r;
      if (u && h[2] > 180 - r)
        for (const b of E.geometry.coordinates)
          for (const _ of b)
            _[0] -= 360 - r;
    }
  e(
    Ee([
      c.features.length < 2 ? n : Et(c) ?? n,
      t
    ])
  );
}
const ut = {
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
}, Te = "mtlr-gc-full-geom", ft = "mtlr-gc-full-geom-fill", ct = "mtlr-gc-full-geom-line";
function vn(n, e, t = !0, i = !0, r = {}, u = {}, y = ut) {
  let c;
  const E = [];
  let h, b, _;
  function T() {
    if (!n.loaded) {
      n.once("load", T);
      return;
    }
    const L = y ? y === !0 ? ut : y : void 0;
    if (!(L != null && L.fill) && !(L != null && L.line))
      return;
    const N = n.getSource(Te);
    if (N)
      N.setData(_ ?? Ee([]));
    else if (_)
      n.addSource(Te, {
        type: "geojson",
        data: _
      });
    else
      return;
    !n.getLayer(ft) && (L != null && L.fill) && n.addLayer({
      ...L == null ? void 0 : L.fill,
      id: ft,
      type: "fill",
      source: Te
    }), !n.getLayer(ct) && (L != null && L.line) && n.addLayer({
      ...L == null ? void 0 : L.line,
      id: ct,
      type: "line",
      source: Te
    });
  }
  function O(L) {
    _ = L, T();
  }
  n.on("styledata", () => {
    setTimeout(() => {
      _ && T();
    });
  });
  const G = (L) => {
    c == null || c({
      type: "mapClick",
      coordinates: [L.lngLat.lng, L.lngLat.lat]
    });
  };
  function F(L = !1) {
    if (!e)
      throw new Error();
    const N = document.createElement("div");
    return L && N.classList.add("marker-interactive"), new pn({
      props: { displayIn: "maplibre" },
      target: N
    }), new e.Marker({ element: N, offset: [1, -13] });
  }
  return {
    setEventHandler(L) {
      L ? (c = L, n.on("click", G)) : (c = void 0, n.off("click", G));
    },
    flyTo(L, N) {
      n.flyTo({ center: L, ...N ? { zoom: N } : {}, ...r });
    },
    fitBounds(L, N, S) {
      n.fitBounds(
        [
          [L[0], L[1]],
          [L[2], L[3]]
        ],
        { padding: N, ...S ? { maxZoom: S } : {}, ...u }
      );
    },
    indicateReverse(L) {
      n.getCanvasContainer().style.cursor = L ? "crosshair" : "";
    },
    setReverseMarker(L) {
      !e || !t || (b ? L ? b.setLngLat(L) : (b.remove(), b = void 0) : L && (t instanceof Function ? b = t(n) ?? void 0 : (b = (typeof t == "object" ? new e.Marker(t) : F()).setLngLat(L).addTo(n), b.getElement().classList.add("marker-reverse"))));
    },
    setFeatures(L, N, S) {
      for (const k of E)
        k.remove();
      if (E.length = 0, O(void 0), !!e) {
        e: if (N) {
          let k = !1;
          if (N.geometry.type === "GeometryCollection") {
            const $ = N.geometry.geometries.filter(
              (q) => q.type === "Polygon" || q.type === "MultiPolygon"
            );
            t: if ($.length > 0) {
              const q = Et(
                Ee($.map((V) => we(V)))
              );
              if (!q)
                break t;
              lt(
                {
                  ...N,
                  geometry: q.geometry
                },
                O
              ), k = !0;
            } else {
              const q = N.geometry.geometries.filter(
                (V) => V.type === "LineString" || V.type === "MultiLineString"
              );
              q.length > 0 && (O({
                ...N,
                geometry: { type: "GeometryCollection", geometries: q }
              }), k = !0);
            }
          }
          if (!k) {
            if (N.geometry.type === "Polygon" || N.geometry.type === "MultiPolygon")
              lt(N, O);
            else if (N.geometry.type === "LineString" || N.geometry.type === "MultiLineString") {
              O(N);
              break e;
            }
          }
          if (!S && !N.geometry.type.endsWith("Point"))
            break e;
          if (t instanceof Function) {
            const $ = t(n, N);
            $ && E.push($);
          } else t && E.push(
            typeof t == "object" ? new e.Marker(t) : F().setLngLat(N.center).addTo(n)
          );
        }
        if (i)
          for (const k of L ?? []) {
            if (k === N)
              continue;
            let $;
            if (i instanceof Function) {
              if ($ = i(n, k), !$)
                continue;
            } else
              $ = (typeof i == "object" ? new e.Marker(i) : F(!0)).setLngLat(k.center).setPopup(
                new e.Popup({
                  offset: [1, -27],
                  closeButton: !1,
                  closeOnMove: !0,
                  className: "maptiler-gc-popup"
                }).setText(
                  k.place_type[0] === "reverse" ? k.place_name : k.place_name.replace(/,.*/, "")
                )
              ).addTo(n);
            const q = $.getElement();
            q.addEventListener("click", (V) => {
              V.stopPropagation(), c == null || c({ type: "markerClick", id: k.id });
            }), q.addEventListener("mouseenter", () => {
              c == null || c({ type: "markerMouseEnter", id: k.id }), $.togglePopup();
            }), q.addEventListener("mouseleave", () => {
              c == null || c({ type: "markerMouseLeave", id: k.id }), $.togglePopup();
            }), E.push($);
          }
      }
    },
    setSelectedMarker(L) {
      h && h.getElement().classList.toggle("marker-selected", !1), h = L > -1 ? E[L] : void 0, h == null || h.getElement().classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const L = n.getCenter();
      return [n.getZoom(), L.lng, L.lat];
    }
  };
}
export {
  vn as createMapLibreGlMapController
};
//# sourceMappingURL=maplibregl-controller.js.map
