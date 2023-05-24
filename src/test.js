const A = "$isServer";
const B = 1;
const F = null;
const H = 0;
const I = "document";
const M = "forEach";
const R = "length";
const T = "replace";
const W = "Date";
const Z = "Object";

const Bt = "i";
const Dt = "Jw8=";
const Et = "CwAUVlU=";
const Gt = "Jwo=";
const Ht = "Jx";
const It = "Jw0=";
const Jt = "url";
const Mt = "baseURL";
const Ot = "sort";
const Pt = "difftime";
const Rt = "qimai@2022&Technology";
const Tt = "defaults";
const Wt = "ej";
const Zt = "params";

const A1 = "match";
const C1 = "=([^;]*)(;|$)";
const D1 = "map";
const F1 = "atob";
const G1 = "decodeURIComponent";
const I1 = "join";
const J1 = "00";
const K1 = "from";
const M1 = "RegExp";
const O1 = "%";
const P1 = "cookie";
const Q1 = "btoa";
const T1 = "(^| )";
const U1 = "toString";
const V1 = "encodeURIComponent";
const W1 = "Buffer";
const X1 = "substr";
const Y1 = "0x";
const Z1 = "base64";
const N2 = "hasOwnProperty";

const b = "push";
const q = "charCodeAt";
const x = "default";
const k = "prototype";
const z = this; // 浏览器环境中为window

const j1 = "slice";
const q1 = "charCodeAt";
const a2 = 1000;
const g2 = "unescape";
const n3 = "xyz";
const t3 = "abcd";
const i7 = "keys";

const jt = "cv";
const qt = "oZ";
const zt = "nF";
const _t = "CwAUVkU=";
const $t = "GRcbWUhEChc=";
const $1 = "split";
const _ = "";

const i = {
  nF: function y(n, t, e) {
    for (var r = void 0 === e ? 2166136261 : e, a = H, i = n[R]; a < i; a++)
      r =
        (r ^= n[q1](a)) +
        ((r << B) + (r << 4) + (r << 7) + (r << 8) + (r << 24));
    return t ? (n3 + (r >>> H)[U1](16) + t3)[X1](-16) : r >>> H;
  },
  ej: function s(n) {
    var n = new z[M1](T1 + n + C1);
    return (n = z[I][P1][A1](n)) ? z[g2](n[2]) : F;
  },
  i: function p(n, t) {
    t = t || u();
    for (var e = (n = n[$1](_))[R], r = t[R], a = q1, i = H; i < e; i++)
      n[i] = o(n[i][a](H) ^ t[i % r][a](H));
    return n[I1](_);
  },
  cv: function v(t) {
    t = z[V1](t)[T](/%([0-9A-F]{2})/g, function (n, t) {
      return o(Y1 + t);
    });
    try {
      return z[Q1](t);
    } catch (n) {
      return z[W1][K1](t)[U1](Z1);
    }
  },
  oZ: function h(n, t) {
    t = t || u();
    for (var e = (n = n[$1](_))[R], r = t[R], a = q1, i = H; i < e; i++)
      n[i] = o(n[i][a](H) ^ t[(i + 10) % r][a](H));
    return n[I1](_);
  },
  Jx: function l(n) {
    return z[G1](
      (function (t) {
        try {
          return z[F1](t);
        } catch (n) {
          // return z[W1][K1](t, Z1)[U1]();
        }
      })(n)
        [$1](_)
        [D1](function (n) {
          return O1 + (J1 + n[q1](H)[U1](16))[j1](-2);
        })
        [I1](_)
    );
  },
};

function o(n) {
  (t = _),
    [f2, s2, d2, m2, l2, v2, p2, s2, l2, d2, h2, y2][M](function (n) {
      t += z[g2](w2 + n);
    });
  var t,
    e = t;
  return z[b2][e](n);
}


function beforeReq(t) {
  let d = i[zt](Rt, B);
  // c为Vue实例，这个变量为Vue.prototype.$isServer，这里直接赋值为false
  // let f = c[x][k][A];
  // let f = false;
  // c为Vue实例，这个变量为Vue.prototype.difftime，根据组件有所不同，这里直接赋值为610
  // let s = c[x][k][Pt];
  let s = 610;
  // let m = i[Bt](i[Ht](_t), d);
  // let l = i[Bt](i[Ht](Et), d);
  // let p =
  i[Bt](i[Ht](Gt), d),
    i[Bt](i[Ht](It), d),
    i[Bt](i[Ht](Dt), d),
    i[Bt](i[Ht]($t), d);
  try {
    // 下面将对e值计算没作用的代码注释掉
    // var n;
    // f ||
    //   F != s ||
    //   ((n = (0, i[Wt])(m)),
    //   (s = c[x][k][Pt] = -(0, i[Wt])(l) || +new z[W]() - a2 * n));
    var e,
      r = +new z[W]() - (s || H) - 1661224081041,
      a = [];
    void 0 === t[Zt] && (t[Zt] = {});
    z[Z][i7](t[Zt])[M](function (n) {
      if (n == p) return !B;
      t[Zt][N2](n) && a[b](t[Zt][n]);
    });
    a = a[Ot]()[I1](_);
    a = (0, i[jt])(a);
    a = (a += v + t[Jt][T](t[Mt], _)) + (v + r) + (v + 3);
    e = (0, i[jt])((0, i[qt])(a, d));
    // -B == t[Jt][j](p) &&
    //   (t[Jt] += (-B != t[Jt][j](Rn) ? Hn : Rn) + p + B1 + z[V1](e)),
    // t
    return e;
  } catch (t) {}
}

// i[Wt]
function sf(n) {
  n = new RegExp("(^| )" + n + "=([^;]*)(;|$)");
  return (n = document.cookie.match(n)) ? unescape(n[2]) : F;
}


// 加密 i[jt]
function vf(t) {
  t = encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function (n, t) {
    return ofn("0x" + t);
  });
  try {
    return btoa(t);
  } catch (n) {
    return Buffer.from(t).toString("base64");
  }
}
// 解密 i[qt]
function hf(n, t) {
  // t = t || u();
  for (
    let e = (n = n.split("")).length, r = t.length, a = "charCodeAt", i = 0;
    i < e;
    i++
  ) {
    n[i] = ofn(n[i][a](0) ^ t[(i + 10) % r][a](0));
  }
  return n.join("");
}

function ofn(n) {
  (t = ""),
    [
      "66",
      "72",
      "6f",
      "6d",
      "43",
      "68",
      "61",
      "72",
      "43",
      "6f",
      "64",
      "65",
    ].forEach(function (n) {
      t += unescape("%u00" + n);
    });
  var t,
    e = t;
  return String[e](n);
}

/************************* 下面是计算d, p需要的函数 ********************/
// i[zt]
function yf(n, t, e) {
  for (var r = void 0 === e ? 2166136261 : e, a = 0, i = n.length; a < i; a++)
    r =
      (r ^= n.charCodeAt(a)) +
      ((r << 1) + (r << 4) + (r << 7) + (r << 8) + (r << 24));
  return t ? ("xyz" + (r >>> 0).toString(16) + "abcd").substr(-16) : r >>> 0;
}

// i[Bt]
function pf(n, t) {
  // t = t || u();
  for (
    let e = (n = n.split("")).length, r = t.length, a = "charCodeAt", i = 0;
    i < e;
    i++
  )
    n[i] = String.fromCharCode(n[i][a](0) ^ t[i % r][a](0));
  return n.join("");
}
// i[Ht]
function lf(n) {
  return decodeURIComponent(
    (function (t) {
      try {
        return atob(t);
      } catch (n) {
        return z["Buffer"]["from"](t, "base64").toString();
      }
    })(n)
      .split("")
      .map(function (n) {
        return "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
}

function beforeRequest(t) {
  var d = "xyz517cda96abcd"; //d = i[zt](Rt, B) = yf("qimai@2022&Technology", 1) = "xyz517cda96abcd",
  s = 610;                  // s = c[x][k][Pt] = Vue.prototype.difftime，根据组件有所不同，这里测试的页面为610
  p = "analysis";           // p = (i[Bt](i[Ht](Gt), d),i[Bt](i[Ht](It), d),i[Bt](i[Ht](Dt), d),i[Bt](i[Ht]($t), d)) 
                            //   = (pf(lf("Jwo="),d),pf(lf("Jw0=", d),pf(lf("Jw8=", d),pf(lf(""GRcbWUhEChc="", d)) 
                            //   = "analysis"
  var v = "@#";             // v = i[Bt](i[Ht](Nt), d) = pf(lf("OFo="), d) = "@#"
  try {
    let e,
      r = +new Date() - (s || 0) - 1661224081041,
      a = [];
    void 0 === t.params && (t.params = {});
    Object.keys(t.params).forEach(function (n) {
      if (n == p) return !B;
      t.params.hasOwnProperty(n) && a.push(t.params[n]);
    });
    a = a.sort().join("");
    a = vf(a);
    a = (a += v + t.url.replace(t.baseURL, "")) + (v + r) + (v + 3);
    e = vf(hf(a, d));
    return e;
  } catch (t) {}
}
// 输入请求参数
let analysis = beforeRequest({
  url: "/app/comment",
  baseURL: "https://api.qimai.cn",
  params: { appid: "1658934469", country: "cn", page: 1 },
});

console.log(analysis);
