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
