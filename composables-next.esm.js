import { computed as v, inject as M, ref as T, unref as Ie, provide as L, watch as sn, onMounted as Et, reactive as Pt, effectScope as an, markRaw as on, resolveComponent as un } from "vue";
const cn = /\d/, ln = ["-", "_", "/", "."];
function dn(e = "") {
  if (!cn.test(e))
    return e.toUpperCase() === e;
}
function fn(e, t) {
  const n = t != null ? t : ln, r = [];
  if (!e || typeof e != "string")
    return r;
  let s = "", a, o;
  for (const c of e) {
    const g = n.includes(c);
    if (g === !0) {
      r.push(s), s = "", a = void 0;
      continue;
    }
    const f = dn(c);
    if (o === !1) {
      if (a === !1 && f === !0) {
        r.push(s), s = c, a = f;
        continue;
      }
      if (a === !0 && f === !1 && s.length > 1) {
        const d = s[s.length - 1];
        r.push(s.slice(0, Math.max(0, s.length - 1))), s = d + c, a = f;
        continue;
      }
    }
    s += c, a = f, o = g;
  }
  return r.push(s), r;
}
function pn(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function hn(e) {
  return e ? (Array.isArray(e) ? e : fn(e)).map((t) => pn(t)).join("") : "";
}
const Da = "frontend.detail.page", qa = "frontend.navigation.page", Ma = "frontend.landing.page";
function La(e) {
  const { getConfigValue: t } = vn(e), n = v(() => ({
    minHeight: t("minHeight")
  })), r = v(() => ({
    href: t("url"),
    target: t("newTab") ? "_blank" : "_self"
  })), s = v(() => {
    var f, d;
    return {
      newTab: (f = e.data) == null ? void 0 : f.newTab,
      url: (d = e.data) == null ? void 0 : d.url
    };
  }), a = v(() => {
    const f = {};
    return s.value.url && (f.href = s.value.url), s.value.newTab && (f.target = "blank", f.rel = "noopener noreferrer"), f;
  }), o = "", c = v(() => {
    var f, d, y, h, w, O, S;
    return {
      src: (d = (f = e.data) == null ? void 0 : f.media) == null ? void 0 : d.url,
      alt: (h = (y = e.data) == null ? void 0 : y.media) == null ? void 0 : h.fileName,
      srcset: ((S = (O = (w = e.data) == null ? void 0 : w.media) == null ? void 0 : O.thumbnails) == null ? void 0 : S.reduce(
        (A, m, i) => `${A}${i != 0 ? "," : ""} ${m.url} ${m.width}w`,
        o
      )) || ""
    };
  }), g = v(
    () => t("displayMode") || "initial"
  );
  return {
    containerStyle: n,
    anchorAttrs: r,
    imageAttrs: c,
    imageContainerAttrs: a,
    imageLink: s,
    displayMode: g
  };
}
function vn(e) {
  return {
    getConfigValue: (n) => {
      var r;
      return (r = e.config[n]) == null ? void 0 : r.value;
    }
  };
}
function k() {
  const e = M("shopware", null);
  if (!e)
    throw new Error("Shopware context is not available.");
  return {
    apiInstance: e.apiInstance
  };
}
function Q(e, t) {
  const r = !!(t != null && t.context) ? T(Ie(t == null ? void 0 : t.context)) : M(e, T());
  return L(e, r), t != null && t.replace && (r.value = Ie(t.replace)), r;
}
function gn(e) {
  const t = Q("category", { context: e });
  if (!t.value)
    throw new Error("Category context is not provided.");
  return {
    category: v(() => t.value)
  };
}
function mn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var St = { exports: {} }, Ne = { exports: {} }, At = function(t, n) {
  return function() {
    for (var s = new Array(arguments.length), a = 0; a < s.length; a++)
      s[a] = arguments[a];
    return t.apply(n, s);
  };
}, yn = At, ke = Object.prototype.toString, Ue = function(e) {
  return function(t) {
    var n = ke.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function J(e) {
  return e = e.toLowerCase(), function(n) {
    return Ue(n) === e;
  };
}
function $e(e) {
  return Array.isArray(e);
}
function se(e) {
  return typeof e > "u";
}
function wn(e) {
  return e !== null && !se(e) && e.constructor !== null && !se(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var bt = J("ArrayBuffer");
function Cn(e) {
  var t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && bt(e.buffer), t;
}
function En(e) {
  return typeof e == "string";
}
function Pn(e) {
  return typeof e == "number";
}
function Ot(e) {
  return e !== null && typeof e == "object";
}
function ne(e) {
  if (Ue(e) !== "object")
    return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var Sn = J("Date"), An = J("File"), bn = J("Blob"), On = J("FileList");
function _e(e) {
  return ke.call(e) === "[object Function]";
}
function Rn(e) {
  return Ot(e) && _e(e.pipe);
}
function xn(e) {
  var t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || ke.call(e) === t || _e(e.toString) && e.toString() === t);
}
var In = J("URLSearchParams");
function Tn(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Fn() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function De(e, t) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), $e(e))
      for (var n = 0, r = e.length; n < r; n++)
        t.call(null, e[n], n, e);
    else
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e);
}
function Te() {
  var e = {};
  function t(s, a) {
    ne(e[a]) && ne(s) ? e[a] = Te(e[a], s) : ne(s) ? e[a] = Te({}, s) : $e(s) ? e[a] = s.slice() : e[a] = s;
  }
  for (var n = 0, r = arguments.length; n < r; n++)
    De(arguments[n], t);
  return e;
}
function Nn(e, t, n) {
  return De(t, function(s, a) {
    n && typeof s == "function" ? e[a] = yn(s, n) : e[a] = s;
  }), e;
}
function kn(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function Un(e, t, n, r) {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, n && Object.assign(e.prototype, n);
}
function $n(e, t, n) {
  var r, s, a, o = {};
  t = t || {};
  do {
    for (r = Object.getOwnPropertyNames(e), s = r.length; s-- > 0; )
      a = r[s], o[a] || (t[a] = e[a], o[a] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}
function _n(e, t, n) {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  var r = e.indexOf(t, n);
  return r !== -1 && r === n;
}
function Dn(e) {
  if (!e)
    return null;
  var t = e.length;
  if (se(t))
    return null;
  for (var n = new Array(t); t-- > 0; )
    n[t] = e[t];
  return n;
}
var qn = function(e) {
  return function(t) {
    return e && t instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), _ = {
  isArray: $e,
  isArrayBuffer: bt,
  isBuffer: wn,
  isFormData: xn,
  isArrayBufferView: Cn,
  isString: En,
  isNumber: Pn,
  isObject: Ot,
  isPlainObject: ne,
  isUndefined: se,
  isDate: Sn,
  isFile: An,
  isBlob: bn,
  isFunction: _e,
  isStream: Rn,
  isURLSearchParams: In,
  isStandardBrowserEnv: Fn,
  forEach: De,
  merge: Te,
  extend: Nn,
  trim: Tn,
  stripBOM: kn,
  inherits: Un,
  toFlatObject: $n,
  kindOf: Ue,
  kindOfTest: J,
  endsWith: _n,
  toArray: Dn,
  isTypedArray: qn,
  isFileList: On
}, z = _;
function We(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Rt = function(t, n, r) {
  if (!n)
    return t;
  var s;
  if (r)
    s = r(n);
  else if (z.isURLSearchParams(n))
    s = n.toString();
  else {
    var a = [];
    z.forEach(n, function(g, f) {
      g === null || typeof g > "u" || (z.isArray(g) ? f = f + "[]" : g = [g], z.forEach(g, function(y) {
        z.isDate(y) ? y = y.toISOString() : z.isObject(y) && (y = JSON.stringify(y)), a.push(We(f) + "=" + We(y));
      }));
    }), s = a.join("&");
  }
  if (s) {
    var o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}, Mn = _;
function oe() {
  this.handlers = [];
}
oe.prototype.use = function(t, n, r) {
  return this.handlers.push({
    fulfilled: t,
    rejected: n,
    synchronous: r ? r.synchronous : !1,
    runWhen: r ? r.runWhen : null
  }), this.handlers.length - 1;
};
oe.prototype.eject = function(t) {
  this.handlers[t] && (this.handlers[t] = null);
};
oe.prototype.forEach = function(t) {
  Mn.forEach(this.handlers, function(r) {
    r !== null && t(r);
  });
};
var Ln = oe, Bn = _, jn = function(t, n) {
  Bn.forEach(t, function(s, a) {
    a !== n && a.toUpperCase() === n.toUpperCase() && (t[n] = s, delete t[a]);
  });
}, xt = _;
function X(e, t, n, r, s) {
  Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
xt.inherits(X, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var It = X.prototype, Tt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(e) {
  Tt[e] = { value: e };
});
Object.defineProperties(X, Tt);
Object.defineProperty(It, "isAxiosError", { value: !0 });
X.from = function(e, t, n, r, s, a) {
  var o = Object.create(It);
  return xt.toFlatObject(e, o, function(g) {
    return g !== Error.prototype;
  }), X.call(o, e.message, t, n, r, s), o.name = e.name, a && Object.assign(o, a), o;
};
var K = X, Ft = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, B = _;
function Wn(e, t) {
  t = t || new FormData();
  var n = [];
  function r(a) {
    return a === null ? "" : B.isDate(a) ? a.toISOString() : B.isArrayBuffer(a) || B.isTypedArray(a) ? typeof Blob == "function" ? new Blob([a]) : Buffer.from(a) : a;
  }
  function s(a, o) {
    if (B.isPlainObject(a) || B.isArray(a)) {
      if (n.indexOf(a) !== -1)
        throw Error("Circular reference detected in " + o);
      n.push(a), B.forEach(a, function(g, f) {
        if (!B.isUndefined(g)) {
          var d = o ? o + "." + f : f, y;
          if (g && !o && typeof g == "object") {
            if (B.endsWith(f, "{}"))
              g = JSON.stringify(g);
            else if (B.endsWith(f, "[]") && (y = B.toArray(g))) {
              y.forEach(function(h) {
                !B.isUndefined(h) && t.append(d, r(h));
              });
              return;
            }
          }
          s(g, d);
        }
      }), n.pop();
    } else
      t.append(o, r(a));
  }
  return s(e), t;
}
var Nt = Wn, pe, He;
function Hn() {
  if (He)
    return pe;
  He = 1;
  var e = K;
  return pe = function(n, r, s) {
    var a = s.config.validateStatus;
    !s.status || !a || a(s.status) ? n(s) : r(new e(
      "Request failed with status code " + s.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    ));
  }, pe;
}
var he, Ve;
function Vn() {
  if (Ve)
    return he;
  Ve = 1;
  var e = _;
  return he = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(r, s, a, o, c, g) {
        var f = [];
        f.push(r + "=" + encodeURIComponent(s)), e.isNumber(a) && f.push("expires=" + new Date(a).toGMTString()), e.isString(o) && f.push("path=" + o), e.isString(c) && f.push("domain=" + c), g === !0 && f.push("secure"), document.cookie = f.join("; ");
      },
      read: function(r) {
        var s = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return s ? decodeURIComponent(s[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), he;
}
var Jn = function(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}, zn = function(t, n) {
  return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t;
}, Gn = Jn, Yn = zn, kt = function(t, n) {
  return t && !Gn(n) ? Yn(t, n) : n;
}, ve, Je;
function Qn() {
  if (Je)
    return ve;
  Je = 1;
  var e = _, t = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return ve = function(r) {
    var s = {}, a, o, c;
    return r && e.forEach(r.split(`
`), function(f) {
      if (c = f.indexOf(":"), a = e.trim(f.substr(0, c)).toLowerCase(), o = e.trim(f.substr(c + 1)), a) {
        if (s[a] && t.indexOf(a) >= 0)
          return;
        a === "set-cookie" ? s[a] = (s[a] ? s[a] : []).concat([o]) : s[a] = s[a] ? s[a] + ", " + o : o;
      }
    }), s;
  }, ve;
}
var ge, ze;
function Xn() {
  if (ze)
    return ge;
  ze = 1;
  var e = _;
  return ge = e.isStandardBrowserEnv() ? function() {
    var n = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a"), s;
    function a(o) {
      var c = o;
      return n && (r.setAttribute("href", c), c = r.href), r.setAttribute("href", c), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return s = a(window.location.href), function(c) {
      var g = e.isString(c) ? a(c) : c;
      return g.protocol === s.protocol && g.host === s.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), ge;
}
var me, Ge;
function ie() {
  if (Ge)
    return me;
  Ge = 1;
  var e = K, t = _;
  function n(r) {
    e.call(this, r == null ? "canceled" : r, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return t.inherits(n, e, {
    __CANCEL__: !0
  }), me = n, me;
}
var ye, Ye;
function Zn() {
  return Ye || (Ye = 1, ye = function(t) {
    var n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return n && n[1] || "";
  }), ye;
}
var we, Qe;
function Xe() {
  if (Qe)
    return we;
  Qe = 1;
  var e = _, t = Hn(), n = Vn(), r = Rt, s = kt, a = Qn(), o = Xn(), c = Ft, g = K, f = ie(), d = Zn();
  return we = function(h) {
    return new Promise(function(O, S) {
      var A = h.data, m = h.headers, i = h.responseType, p;
      function u() {
        h.cancelToken && h.cancelToken.unsubscribe(p), h.signal && h.signal.removeEventListener("abort", p);
      }
      e.isFormData(A) && e.isStandardBrowserEnv() && delete m["Content-Type"];
      var l = new XMLHttpRequest();
      if (h.auth) {
        var C = h.auth.username || "", I = h.auth.password ? unescape(encodeURIComponent(h.auth.password)) : "";
        m.Authorization = "Basic " + btoa(C + ":" + I);
      }
      var b = s(h.baseURL, h.url);
      l.open(h.method.toUpperCase(), r(b, h.params, h.paramsSerializer), !0), l.timeout = h.timeout;
      function U() {
        if (!!l) {
          var x = "getAllResponseHeaders" in l ? a(l.getAllResponseHeaders()) : null, N = !i || i === "text" || i === "json" ? l.responseText : l.response, F = {
            data: N,
            status: l.status,
            statusText: l.statusText,
            headers: x,
            config: h,
            request: l
          };
          t(function(V) {
            O(V), u();
          }, function(V) {
            S(V), u();
          }, F), l = null;
        }
      }
      if ("onloadend" in l ? l.onloadend = U : l.onreadystatechange = function() {
        !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(U);
      }, l.onabort = function() {
        !l || (S(new g("Request aborted", g.ECONNABORTED, h, l)), l = null);
      }, l.onerror = function() {
        S(new g("Network Error", g.ERR_NETWORK, h, l, l)), l = null;
      }, l.ontimeout = function() {
        var N = h.timeout ? "timeout of " + h.timeout + "ms exceeded" : "timeout exceeded", F = h.transitional || c;
        h.timeoutErrorMessage && (N = h.timeoutErrorMessage), S(new g(
          N,
          F.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
          h,
          l
        )), l = null;
      }, e.isStandardBrowserEnv()) {
        var R = (h.withCredentials || o(b)) && h.xsrfCookieName ? n.read(h.xsrfCookieName) : void 0;
        R && (m[h.xsrfHeaderName] = R);
      }
      "setRequestHeader" in l && e.forEach(m, function(N, F) {
        typeof A > "u" && F.toLowerCase() === "content-type" ? delete m[F] : l.setRequestHeader(F, N);
      }), e.isUndefined(h.withCredentials) || (l.withCredentials = !!h.withCredentials), i && i !== "json" && (l.responseType = h.responseType), typeof h.onDownloadProgress == "function" && l.addEventListener("progress", h.onDownloadProgress), typeof h.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", h.onUploadProgress), (h.cancelToken || h.signal) && (p = function(x) {
        !l || (S(!x || x && x.type ? new f() : x), l.abort(), l = null);
      }, h.cancelToken && h.cancelToken.subscribe(p), h.signal && (h.signal.aborted ? p() : h.signal.addEventListener("abort", p))), A || (A = null);
      var E = d(b);
      if (E && ["http", "https", "file"].indexOf(E) === -1) {
        S(new g("Unsupported protocol " + E + ":", g.ERR_BAD_REQUEST, h));
        return;
      }
      l.send(A);
    });
  }, we;
}
var Ce, Ze;
function Kn() {
  return Ze || (Ze = 1, Ce = null), Ce;
}
var $ = _, Ke = jn, et = K, er = Ft, tr = Nt, nr = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function tt(e, t) {
  !$.isUndefined(e) && $.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
function rr() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Xe()), e;
}
function sr(e, t, n) {
  if ($.isString(e))
    try {
      return (t || JSON.parse)(e), $.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
var ue = {
  transitional: er,
  adapter: rr(),
  transformRequest: [function(t, n) {
    if (Ke(n, "Accept"), Ke(n, "Content-Type"), $.isFormData(t) || $.isArrayBuffer(t) || $.isBuffer(t) || $.isStream(t) || $.isFile(t) || $.isBlob(t))
      return t;
    if ($.isArrayBufferView(t))
      return t.buffer;
    if ($.isURLSearchParams(t))
      return tt(n, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
    var r = $.isObject(t), s = n && n["Content-Type"], a;
    if ((a = $.isFileList(t)) || r && s === "multipart/form-data") {
      var o = this.env && this.env.FormData;
      return tr(a ? { "files[]": t } : t, o && new o());
    } else if (r || s === "application/json")
      return tt(n, "application/json"), sr(t);
    return t;
  }],
  transformResponse: [function(t) {
    var n = this.transitional || ue.transitional, r = n && n.silentJSONParsing, s = n && n.forcedJSONParsing, a = !r && this.responseType === "json";
    if (a || s && $.isString(t) && t.length)
      try {
        return JSON.parse(t);
      } catch (o) {
        if (a)
          throw o.name === "SyntaxError" ? et.from(o, et.ERR_BAD_RESPONSE, this, null, this.response) : o;
      }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Kn()
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
$.forEach(["delete", "get", "head"], function(t) {
  ue.headers[t] = {};
});
$.forEach(["post", "put", "patch"], function(t) {
  ue.headers[t] = $.merge(nr);
});
var qe = ue, ar = _, or = qe, ir = function(t, n, r) {
  var s = this || or;
  return ar.forEach(r, function(o) {
    t = o.call(s, t, n);
  }), t;
}, Ee, nt;
function Ut() {
  return nt || (nt = 1, Ee = function(t) {
    return !!(t && t.__CANCEL__);
  }), Ee;
}
var rt = _, Pe = ir, ur = Ut(), cr = qe, lr = ie();
function Se(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new lr();
}
var dr = function(t) {
  Se(t), t.headers = t.headers || {}, t.data = Pe.call(
    t,
    t.data,
    t.headers,
    t.transformRequest
  ), t.headers = rt.merge(
    t.headers.common || {},
    t.headers[t.method] || {},
    t.headers
  ), rt.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(s) {
      delete t.headers[s];
    }
  );
  var n = t.adapter || cr.adapter;
  return n(t).then(function(s) {
    return Se(t), s.data = Pe.call(
      t,
      s.data,
      s.headers,
      t.transformResponse
    ), s;
  }, function(s) {
    return ur(s) || (Se(t), s && s.response && (s.response.data = Pe.call(
      t,
      s.response.data,
      s.response.headers,
      t.transformResponse
    ))), Promise.reject(s);
  });
}, q = _, $t = function(t, n) {
  n = n || {};
  var r = {};
  function s(d, y) {
    return q.isPlainObject(d) && q.isPlainObject(y) ? q.merge(d, y) : q.isPlainObject(y) ? q.merge({}, y) : q.isArray(y) ? y.slice() : y;
  }
  function a(d) {
    if (q.isUndefined(n[d])) {
      if (!q.isUndefined(t[d]))
        return s(void 0, t[d]);
    } else
      return s(t[d], n[d]);
  }
  function o(d) {
    if (!q.isUndefined(n[d]))
      return s(void 0, n[d]);
  }
  function c(d) {
    if (q.isUndefined(n[d])) {
      if (!q.isUndefined(t[d]))
        return s(void 0, t[d]);
    } else
      return s(void 0, n[d]);
  }
  function g(d) {
    if (d in n)
      return s(t[d], n[d]);
    if (d in t)
      return s(void 0, t[d]);
  }
  var f = {
    url: o,
    method: o,
    data: o,
    baseURL: c,
    transformRequest: c,
    transformResponse: c,
    paramsSerializer: c,
    timeout: c,
    timeoutMessage: c,
    withCredentials: c,
    adapter: c,
    responseType: c,
    xsrfCookieName: c,
    xsrfHeaderName: c,
    onUploadProgress: c,
    onDownloadProgress: c,
    decompress: c,
    maxContentLength: c,
    maxBodyLength: c,
    beforeRedirect: c,
    transport: c,
    httpAgent: c,
    httpsAgent: c,
    cancelToken: c,
    socketPath: c,
    responseEncoding: c,
    validateStatus: g
  };
  return q.forEach(Object.keys(t).concat(Object.keys(n)), function(y) {
    var h = f[y] || a, w = h(y);
    q.isUndefined(w) && h !== g || (r[y] = w);
  }), r;
}, Ae, st;
function _t() {
  return st || (st = 1, Ae = {
    version: "0.27.2"
  }), Ae;
}
var fr = _t().version, H = K, Me = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
  Me[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var at = {};
Me.transitional = function(t, n, r) {
  function s(a, o) {
    return "[Axios v" + fr + "] Transitional option '" + a + "'" + o + (r ? ". " + r : "");
  }
  return function(a, o, c) {
    if (t === !1)
      throw new H(
        s(o, " has been removed" + (n ? " in " + n : "")),
        H.ERR_DEPRECATED
      );
    return n && !at[o] && (at[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, o, c) : !0;
  };
};
function pr(e, t, n) {
  if (typeof e != "object")
    throw new H("options must be an object", H.ERR_BAD_OPTION_VALUE);
  for (var r = Object.keys(e), s = r.length; s-- > 0; ) {
    var a = r[s], o = t[a];
    if (o) {
      var c = e[a], g = c === void 0 || o(c, a, e);
      if (g !== !0)
        throw new H("option " + a + " must be " + g, H.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new H("Unknown option " + a, H.ERR_BAD_OPTION);
  }
}
var hr = {
  assertOptions: pr,
  validators: Me
}, Dt = _, vr = Rt, ot = Ln, it = dr, ce = $t, gr = kt, qt = hr, G = qt.validators;
function Z(e) {
  this.defaults = e, this.interceptors = {
    request: new ot(),
    response: new ot()
  };
}
Z.prototype.request = function(t, n) {
  typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ce(this.defaults, n), n.method ? n.method = n.method.toLowerCase() : this.defaults.method ? n.method = this.defaults.method.toLowerCase() : n.method = "get";
  var r = n.transitional;
  r !== void 0 && qt.assertOptions(r, {
    silentJSONParsing: G.transitional(G.boolean),
    forcedJSONParsing: G.transitional(G.boolean),
    clarifyTimeoutError: G.transitional(G.boolean)
  }, !1);
  var s = [], a = !0;
  this.interceptors.request.forEach(function(w) {
    typeof w.runWhen == "function" && w.runWhen(n) === !1 || (a = a && w.synchronous, s.unshift(w.fulfilled, w.rejected));
  });
  var o = [];
  this.interceptors.response.forEach(function(w) {
    o.push(w.fulfilled, w.rejected);
  });
  var c;
  if (!a) {
    var g = [it, void 0];
    for (Array.prototype.unshift.apply(g, s), g = g.concat(o), c = Promise.resolve(n); g.length; )
      c = c.then(g.shift(), g.shift());
    return c;
  }
  for (var f = n; s.length; ) {
    var d = s.shift(), y = s.shift();
    try {
      f = d(f);
    } catch (h) {
      y(h);
      break;
    }
  }
  try {
    c = it(f);
  } catch (h) {
    return Promise.reject(h);
  }
  for (; o.length; )
    c = c.then(o.shift(), o.shift());
  return c;
};
Z.prototype.getUri = function(t) {
  t = ce(this.defaults, t);
  var n = gr(t.baseURL, t.url);
  return vr(n, t.params, t.paramsSerializer);
};
Dt.forEach(["delete", "get", "head", "options"], function(t) {
  Z.prototype[t] = function(n, r) {
    return this.request(ce(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
Dt.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, o, c) {
      return this.request(ce(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  Z.prototype[t] = n(), Z.prototype[t + "Form"] = n(!0);
});
var mr = Z, be, ut;
function yr() {
  if (ut)
    return be;
  ut = 1;
  var e = ie();
  function t(n) {
    if (typeof n != "function")
      throw new TypeError("executor must be a function.");
    var r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    var s = this;
    this.promise.then(function(a) {
      if (!!s._listeners) {
        var o, c = s._listeners.length;
        for (o = 0; o < c; o++)
          s._listeners[o](a);
        s._listeners = null;
      }
    }), this.promise.then = function(a) {
      var o, c = new Promise(function(g) {
        s.subscribe(g), o = g;
      }).then(a);
      return c.cancel = function() {
        s.unsubscribe(o);
      }, c;
    }, n(function(o) {
      s.reason || (s.reason = new e(o), r(s.reason));
    });
  }
  return t.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, t.prototype.subscribe = function(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }, t.prototype.unsubscribe = function(r) {
    if (!!this._listeners) {
      var s = this._listeners.indexOf(r);
      s !== -1 && this._listeners.splice(s, 1);
    }
  }, t.source = function() {
    var r, s = new t(function(o) {
      r = o;
    });
    return {
      token: s,
      cancel: r
    };
  }, be = t, be;
}
var Oe, ct;
function wr() {
  return ct || (ct = 1, Oe = function(t) {
    return function(r) {
      return t.apply(null, r);
    };
  }), Oe;
}
var Re, lt;
function Cr() {
  if (lt)
    return Re;
  lt = 1;
  var e = _;
  return Re = function(n) {
    return e.isObject(n) && n.isAxiosError === !0;
  }, Re;
}
var dt = _, Er = At, re = mr, Pr = $t, Sr = qe;
function Mt(e) {
  var t = new re(e), n = Er(re.prototype.request, t);
  return dt.extend(n, re.prototype, t), dt.extend(n, t), n.create = function(s) {
    return Mt(Pr(e, s));
  }, n;
}
var D = Mt(Sr);
D.Axios = re;
D.CanceledError = ie();
D.CancelToken = yr();
D.isCancel = Ut();
D.VERSION = _t().version;
D.toFormData = Nt;
D.AxiosError = K;
D.Cancel = D.CanceledError;
D.all = function(t) {
  return Promise.all(t);
};
D.spread = wr();
D.isAxiosError = Cr();
Ne.exports = D;
Ne.exports.default = D;
(function(e) {
  e.exports = Ne.exports;
})(St);
const Ar = /* @__PURE__ */ mn(St.exports);
var Lt = {}, br = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), Bt = "%[a-f0-9]{2}", ft = new RegExp(Bt, "gi"), pt = new RegExp("(" + Bt + ")+", "gi");
function Fe(e, t) {
  try {
    return decodeURIComponent(e.join(""));
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var n = e.slice(0, t), r = e.slice(t);
  return Array.prototype.concat.call([], Fe(n), Fe(r));
}
function Or(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(ft), n = 1; n < t.length; n++)
      e = Fe(t, n).join(""), t = e.match(ft);
    return e;
  }
}
function Rr(e) {
  for (var t = {
    "%FE%FF": "\uFFFD\uFFFD",
    "%FF%FE": "\uFFFD\uFFFD"
  }, n = pt.exec(e); n; ) {
    try {
      t[n[0]] = decodeURIComponent(n[0]);
    } catch {
      var r = Or(n[0]);
      r !== n[0] && (t[n[0]] = r);
    }
    n = pt.exec(e);
  }
  t["%C2"] = "\uFFFD";
  for (var s = Object.keys(t), a = 0; a < s.length; a++) {
    var o = s[a];
    e = e.replace(new RegExp(o, "g"), t[o]);
  }
  return e;
}
var xr = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return Rr(e);
  }
}, Ir = (e, t) => {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "")
    return [e];
  const n = e.indexOf(t);
  return n === -1 ? [e] : [
    e.slice(0, n),
    e.slice(n + t.length)
  ];
}, Tr = function(e, t) {
  for (var n = {}, r = Object.keys(e), s = Array.isArray(t), a = 0; a < r.length; a++) {
    var o = r[a], c = e[o];
    (s ? t.indexOf(o) !== -1 : t(o, c, e)) && (n[o] = c);
  }
  return n;
};
(function(e) {
  const t = br, n = xr, r = Ir, s = Tr, a = (i) => i == null, o = Symbol("encodeFragmentIdentifier");
  function c(i) {
    switch (i.arrayFormat) {
      case "index":
        return (p) => (u, l) => {
          const C = u.length;
          return l === void 0 || i.skipNull && l === null || i.skipEmptyString && l === "" ? u : l === null ? [...u, [d(p, i), "[", C, "]"].join("")] : [
            ...u,
            [d(p, i), "[", d(C, i), "]=", d(l, i)].join("")
          ];
        };
      case "bracket":
        return (p) => (u, l) => l === void 0 || i.skipNull && l === null || i.skipEmptyString && l === "" ? u : l === null ? [...u, [d(p, i), "[]"].join("")] : [...u, [d(p, i), "[]=", d(l, i)].join("")];
      case "colon-list-separator":
        return (p) => (u, l) => l === void 0 || i.skipNull && l === null || i.skipEmptyString && l === "" ? u : l === null ? [...u, [d(p, i), ":list="].join("")] : [...u, [d(p, i), ":list=", d(l, i)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const p = i.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (u) => (l, C) => C === void 0 || i.skipNull && C === null || i.skipEmptyString && C === "" ? l : (C = C === null ? "" : C, l.length === 0 ? [[d(u, i), p, d(C, i)].join("")] : [[l, d(C, i)].join(i.arrayFormatSeparator)]);
      }
      default:
        return (p) => (u, l) => l === void 0 || i.skipNull && l === null || i.skipEmptyString && l === "" ? u : l === null ? [...u, d(p, i)] : [...u, [d(p, i), "=", d(l, i)].join("")];
    }
  }
  function g(i) {
    let p;
    switch (i.arrayFormat) {
      case "index":
        return (u, l, C) => {
          if (p = /\[(\d*)\]$/.exec(u), u = u.replace(/\[\d*\]$/, ""), !p) {
            C[u] = l;
            return;
          }
          C[u] === void 0 && (C[u] = {}), C[u][p[1]] = l;
        };
      case "bracket":
        return (u, l, C) => {
          if (p = /(\[\])$/.exec(u), u = u.replace(/\[\]$/, ""), !p) {
            C[u] = l;
            return;
          }
          if (C[u] === void 0) {
            C[u] = [l];
            return;
          }
          C[u] = [].concat(C[u], l);
        };
      case "colon-list-separator":
        return (u, l, C) => {
          if (p = /(:list)$/.exec(u), u = u.replace(/:list$/, ""), !p) {
            C[u] = l;
            return;
          }
          if (C[u] === void 0) {
            C[u] = [l];
            return;
          }
          C[u] = [].concat(C[u], l);
        };
      case "comma":
      case "separator":
        return (u, l, C) => {
          const I = typeof l == "string" && l.includes(i.arrayFormatSeparator), b = typeof l == "string" && !I && y(l, i).includes(i.arrayFormatSeparator);
          l = b ? y(l, i) : l;
          const U = I || b ? l.split(i.arrayFormatSeparator).map((R) => y(R, i)) : l === null ? l : y(l, i);
          C[u] = U;
        };
      case "bracket-separator":
        return (u, l, C) => {
          const I = /(\[\])$/.test(u);
          if (u = u.replace(/\[\]$/, ""), !I) {
            C[u] = l && y(l, i);
            return;
          }
          const b = l === null ? [] : l.split(i.arrayFormatSeparator).map((U) => y(U, i));
          if (C[u] === void 0) {
            C[u] = b;
            return;
          }
          C[u] = [].concat(C[u], b);
        };
      default:
        return (u, l, C) => {
          if (C[u] === void 0) {
            C[u] = l;
            return;
          }
          C[u] = [].concat(C[u], l);
        };
    }
  }
  function f(i) {
    if (typeof i != "string" || i.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function d(i, p) {
    return p.encode ? p.strict ? t(i) : encodeURIComponent(i) : i;
  }
  function y(i, p) {
    return p.decode ? n(i) : i;
  }
  function h(i) {
    return Array.isArray(i) ? i.sort() : typeof i == "object" ? h(Object.keys(i)).sort((p, u) => Number(p) - Number(u)).map((p) => i[p]) : i;
  }
  function w(i) {
    const p = i.indexOf("#");
    return p !== -1 && (i = i.slice(0, p)), i;
  }
  function O(i) {
    let p = "";
    const u = i.indexOf("#");
    return u !== -1 && (p = i.slice(u)), p;
  }
  function S(i) {
    i = w(i);
    const p = i.indexOf("?");
    return p === -1 ? "" : i.slice(p + 1);
  }
  function A(i, p) {
    return p.parseNumbers && !Number.isNaN(Number(i)) && typeof i == "string" && i.trim() !== "" ? i = Number(i) : p.parseBooleans && i !== null && (i.toLowerCase() === "true" || i.toLowerCase() === "false") && (i = i.toLowerCase() === "true"), i;
  }
  function m(i, p) {
    p = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, p), f(p.arrayFormatSeparator);
    const u = g(p), l = /* @__PURE__ */ Object.create(null);
    if (typeof i != "string" || (i = i.trim().replace(/^[?#&]/, ""), !i))
      return l;
    for (const C of i.split("&")) {
      if (C === "")
        continue;
      let [I, b] = r(p.decode ? C.replace(/\+/g, " ") : C, "=");
      b = b === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(p.arrayFormat) ? b : y(b, p), u(y(I, p), b, l);
    }
    for (const C of Object.keys(l)) {
      const I = l[C];
      if (typeof I == "object" && I !== null)
        for (const b of Object.keys(I))
          I[b] = A(I[b], p);
      else
        l[C] = A(I, p);
    }
    return p.sort === !1 ? l : (p.sort === !0 ? Object.keys(l).sort() : Object.keys(l).sort(p.sort)).reduce((C, I) => {
      const b = l[I];
      return Boolean(b) && typeof b == "object" && !Array.isArray(b) ? C[I] = h(b) : C[I] = b, C;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = S, e.parse = m, e.stringify = (i, p) => {
    if (!i)
      return "";
    p = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, p), f(p.arrayFormatSeparator);
    const u = (b) => p.skipNull && a(i[b]) || p.skipEmptyString && i[b] === "", l = c(p), C = {};
    for (const b of Object.keys(i))
      u(b) || (C[b] = i[b]);
    const I = Object.keys(C);
    return p.sort !== !1 && I.sort(p.sort), I.map((b) => {
      const U = i[b];
      return U === void 0 ? "" : U === null ? d(b, p) : Array.isArray(U) ? U.length === 0 && p.arrayFormat === "bracket-separator" ? d(b, p) + "[]" : U.reduce(l(b), []).join("&") : d(b, p) + "=" + d(U, p);
    }).filter((b) => b.length > 0).join("&");
  }, e.parseUrl = (i, p) => {
    p = Object.assign({
      decode: !0
    }, p);
    const [u, l] = r(i, "#");
    return Object.assign(
      {
        url: u.split("?")[0] || "",
        query: m(S(i), p)
      },
      p && p.parseFragmentIdentifier && l ? { fragmentIdentifier: y(l, p) } : {}
    );
  }, e.stringifyUrl = (i, p) => {
    p = Object.assign({
      encode: !0,
      strict: !0,
      [o]: !0
    }, p);
    const u = w(i.url).split("?")[0] || "", l = e.extract(i.url), C = e.parse(l, { sort: !1 }), I = Object.assign(C, i.query);
    let b = e.stringify(I, p);
    b && (b = `?${b}`);
    let U = O(i.url);
    return i.fragmentIdentifier && (U = `#${p[o] ? d(i.fragmentIdentifier, p) : i.fragmentIdentifier}`), `${u}${b}${U}`;
  }, e.pick = (i, p, u) => {
    u = Object.assign({
      parseFragmentIdentifier: !0,
      [o]: !1
    }, u);
    const { url: l, query: C, fragmentIdentifier: I } = e.parseUrl(i, u);
    return e.stringifyUrl({
      url: l,
      query: s(C, p),
      fragmentIdentifier: I
    }, u);
  }, e.exclude = (i, p, u) => {
    const l = Array.isArray(p) ? (C) => !p.includes(C) : (C, I) => !p(C, I);
    return e.pick(i, l, u);
  };
})(Lt);
const Fr = (e) => !!(e != 408 && e.toString().startsWith("4") || e == 500), Nr = (e) => e.response && e.response.status || kr(e.message), kr = (e) => typeof e == "string" && e.startsWith("timeout of") ? 408 : typeof e == "string" && e.startsWith("Network Error") ? 0 : 500, Ur = (e) => {
  var t, n;
  return ((n = (t = e.response) == null ? void 0 : t.data) == null ? void 0 : n.errors) || [];
}, $r = (e) => [
  {
    detail: e.message,
    status: "",
    code: "",
    title: "",
    meta: {},
    source: {}
  }
];
async function _r(e) {
  const t = Nr(e), n = {
    messages: Fr(t) ? Ur(e) : $r(e),
    statusCode: t
  };
  return Promise.reject(n);
}
function jt(e) {
  return e.data["sw-context-token"] || e.data.contextToken || e.headers["sw-context-token"];
}
function Dr(e) {
  return function(t) {
    const n = jt(t);
    return n && e({ contextToken: n }, t.config), t;
  };
}
const qr = {
  endpoint: "https://pwa-demo-api.shopware.com/prev/",
  accessToken: "SWSC40-LJTNO6COUEN7CJMXKLA",
  contextToken: "",
  languageId: "",
  defaultPaginationLimit: 10,
  timeout: 1e4
}, Mr = "separator", Lr = "|", Br = !0, jr = !1, Wr = (e) => typeof e == "string" ? e : Lt.stringify(e, {
  arrayFormat: Mr,
  arrayFormatSeparator: Lr,
  skipNull: Br,
  sort: jr
});
function Hr(e = {}) {
  const t = [];
  let n = {};
  const r = Ar.create();
  function s() {
    r.defaults.baseURL = n.endpoint, n.timeout && (r.defaults.timeout = typeof n.timeout == "number" && n.timeout || typeof n.timeout == "string" && parseInt(n.timeout) || 0), r.defaults.headers.common["sw-include-seo-urls"] = "true", r.defaults.headers.common["sw-access-key"] = n.accessToken, r.defaults.paramsSerializer = Wr, n.contextToken ? r.defaults.headers.common["sw-context-token"] = n.contextToken : delete r.defaults.headers.common["sw-context-token"], n.languageId ? r.defaults.headers.common["sw-language-id"] = n.languageId : delete r.defaults.headers.common["sw-language-id"];
  }
  function a(f) {
    t.push(f);
  }
  const o = function(f = {}) {
    n = Object.assign(n, qr, f), s();
  };
  o(e);
  const c = function(f, d) {
    n = Object.assign(n, f), process.env.NODE_ENV !== "production" && !t.length && d && console.warn(
      `[shopware-6-api] After calling API method ${d.url} there is no "onConfigChange" listener. See https://shopware-pwa-docs.vuestorefront.io/landing/fundamentals/security.html#context-awareness`
    ), t.forEach((y) => y({ config: n })), s();
  }, g = {
    post: r.post,
    put: r.put,
    get: r.get,
    patch: r.patch,
    delete: r.delete
  };
  return r.interceptors.response.use(
    Dr(c),
    _r
  ), {
    onConfigChange: a,
    config: n,
    setup: o,
    update: c,
    invoke: g,
    defaults: r.defaults,
    _axiosInstance: r
  };
}
function Vr(e = {}) {
  const {
    onConfigChange: t,
    config: n,
    setup: r,
    update: s,
    invoke: a,
    defaults: o,
    _axiosInstance: c
  } = Hr(e);
  return {
    onConfigChange: t,
    config: n,
    setup: r,
    update: (g = {}) => {
      s(g);
    },
    invoke: a,
    defaults: o,
    _axiosInstance: c
  };
}
const P = Vr(), Jr = () => "/store-api/category", zr = (e) => `/store-api/category/${e}`, Gr = (e) => `/store-api/landing-page/${e}`, Yr = (e) => `/store-api/product-listing/${e}`, Wt = () => "/store-api/product", ae = (e) => `/store-api/product/${e}`, Qr = (e) => `/store-api/product/${e}/reviews`, Xr = () => "/store-api/search", Zr = () => "/store-api/account/address", Le = (e) => e ? `/store-api/account/address/${e}` : "/store-api/account/list-address", Ht = (e, t) => `/store-api/account/address/default-${e}/${t}`, Kr = (e) => Ht("billing", e), es = (e) => Ht("shipping", e), ts = () => "/store-api/account/customer", ns = () => "/store-api/account/register", rs = () => "/store-api/account/change-profile", ss = () => "/store-api/account/login", as = () => "/store-api/account/logout", Vt = () => "/store-api/order", os = () => "/store-api/account/change-email", is = () => "/store-api/account/change-password", us = () => "/store-api/account/recovery-password", cs = (e) => `/store-api/account/change-payment-method/${e}`, ls = () => "/store-api/checkout/cart", le = () => "/store-api/checkout/cart/line-item", ds = () => "/store-api/checkout/order", fs = () => "/store-api/order/state/cancel", ps = () => "/store-api/order/payment", Jt = () => "/store-api/context", zt = () => "/store-api/country", hs = () => "/store-api/payment-method", vs = () => "/store-api/shipping-method", Gt = () => "/store-api/salutation", gs = () => "/store-api/account/newsletter-recipient", ms = () => "/store-api/seo-url", ys = (e, t) => `/store-api/navigation/${e}/${t}`, ws = () => "/store-api/handle-payment", Cs = () => "/store-api/newsletter/subscribe", Es = () => "/store-api/newsletter/unsubscribe", Ps = () => "/store-api/customer/wishlist", Ss = (e) => `/store-api/customer/wishlist/add/${e}`, As = (e) => `/store-api/customer/wishlist/delete/${e}`, bs = () => "/store-api/customer/wishlist/merge";
async function Os(e, t = P) {
  return (await t.invoke.post(
    Jr(),
    e
  )).data;
}
async function Rs(e, t = P) {
  return (await t.invoke.post(`${Wt()}`, {
    ...e || {}
  })).data;
}
async function xs(e, t, n = P) {
  return (await n.invoke.post(
    `${Yr(e)}`,
    t
  )).data;
}
async function Yt(e, t = null, n = P) {
  return (await n.invoke.post(
    ae(e),
    t
  )).data;
}
async function Is(e, t, n = P) {
  await n.invoke.post(
    `${ae(e)}/review`,
    t
  );
}
async function Ts(e, t, n = P) {
  return (await n.invoke.post(
    `${Qr(e)}`,
    {
      ...t || {}
    }
  )).data;
}
async function Fs(e, t = P) {
  return (await t.invoke.post(
    ns(),
    e
  )).data;
}
async function Ns({ username: e, password: t } = {}, n = P) {
  const r = await n.invoke.post(ss(), {
    username: e,
    password: t
  });
  return { contextToken: r.data["sw-context-token"] || r.data.contextToken };
}
async function ks(e = P) {
  await e.invoke.post(as());
}
async function Us(e = {}, t = P) {
  try {
    return (await t.invoke.post(
      ts(),
      e
    )).data;
  } catch (n) {
    const r = n;
    if (r.statusCode === 403)
      return null;
    throw new Error("Unexpected getCustomerResponse. " + r);
  }
}
async function $s(e = {}, t = P) {
  return (await t.invoke.post(
    Le(),
    e
  )).data;
}
async function _s(e = {}, t = P) {
  return (await t.invoke.post(
    Vt(),
    e
  )).data.orders;
}
async function Ds(e, t = P) {
  return (await t.invoke.post(
    Zr(),
    e
  )).data;
}
async function qs(e, t = P) {
  return (await t.invoke.patch(
    Le(e.id),
    e
  )).data;
}
async function Ms(e, t = P) {
  await t.invoke.delete(Le(e));
}
async function Ls(e, t = P) {
  return (await t.invoke.patch(
    Kr(e)
  )).data;
}
async function Bs(e, t = P) {
  return (await t.invoke.patch(
    es(e)
  )).data;
}
async function js(e, t = P) {
  await t.invoke.post(os(), e);
}
async function Ws(e, t = P) {
  await t.invoke.post(
    is(),
    e
  );
}
async function Hs(e, t = P) {
  e && !e.storefrontUrl && (e.storefrontUrl = t.config.endpoint), await t.invoke.post(us(), e);
}
async function Vs(e, t = P) {
  await t.invoke.post(rs(), e);
}
async function Js(e, t = P) {
  return (await t.invoke.post(
    cs(e)
  )).data;
}
async function zs(e = P) {
  return (await e.invoke.post(
    gs()
  )).data;
}
async function ee(e, t) {
  const n = await t.invoke.patch(Jt(), e);
  return { contextToken: jt(n) };
}
async function Gs(e = P) {
  const { data: t } = await e.invoke.get(Jt());
  return t;
}
function Ys(e, t = P) {
  return ee({ shippingAddressId: e }, t);
}
function Qs(e, t = P) {
  return ee({ billingAddressId: e }, t);
}
async function Xs(e, t = P) {
  return await ee({ currencyId: e }, t);
}
async function Zs(e, t = P) {
  return await ee({ languageId: e }, t);
}
async function Ks(e = P) {
  const { data: t } = await e.invoke.get(
    zt()
  );
  return t;
}
async function ea(e = P) {
  return (await e.invoke.get(Gt())).data;
}
async function ta(e = P, t = {}) {
  return (await e.invoke.get(
    hs(),
    {
      params: t
    }
  )).data;
}
async function na(e, t = P) {
  return await ee({ paymentMethodId: e }, t);
}
async function ra(e = P, t = {}) {
  return (await e.invoke.get(
    vs(),
    {
      params: t
    }
  )).data;
}
async function sa(e, t = P) {
  return await ee({ shippingMethodId: e }, t);
}
async function aa(e, t = P) {
  var r;
  const { data: n } = await t.invoke.get(
    zt(),
    {
      params: {
        "filter[id]": e
      }
    }
  );
  return (r = n == null ? void 0 : n.elements) == null ? void 0 : r[0];
}
async function oa(e, t = P) {
  var r;
  const { data: n } = await t.invoke.get(
    Gt(),
    {
      params: {
        "filter[id]": e
      }
    }
  );
  return (r = n == null ? void 0 : n.elements) == null ? void 0 : r[0];
}
async function ia(e = P) {
  return (await e.invoke.get(ls())).data;
}
async function ua(e, t, n = P) {
  const s = {
    quantity: t || 1,
    type: "product",
    referencedId: e,
    id: e
  };
  return (await n.invoke.post(
    le(),
    {
      items: [s]
    }
  )).data;
}
async function Qt(e, t = 1, n = P) {
  const r = {
    items: [
      {
        id: e,
        quantity: parseInt(t.toString(), 10)
      }
    ]
  };
  return (await n.invoke.patch(
    le(),
    r
  )).data;
}
async function Xt(e, t = P) {
  return (await t.invoke.delete(
    `${le()}?ids[]=${e}`
  )).data;
}
async function ca(e, t = P) {
  const n = {
    type: "promotion",
    referencedId: e
  };
  return (await t.invoke.post(
    le(),
    {
      items: [n]
    }
  )).data;
}
async function la({
  requestActiveId: e,
  requestRootId: t,
  depth: n,
  buildTree: r,
  searchCriteria: s
}, a = P) {
  return (await a.invoke.post(
    ys(e, t),
    {
      ...s || {},
      depth: n,
      buildTree: r
    }
  )).data;
}
function de({
  address: e,
  payload: t
}, n = P) {
  return n.invoke.post(e, t);
}
function da({ address: e }, t = P) {
  return t.invoke.get(e);
}
async function fa(e, t, n = P) {
  const r = Gr(e), s = await n.invoke.post(r, t);
  return s == null ? void 0 : s.data;
}
async function pa(e, t = P) {
  return (await de(
    {
      address: ms(),
      payload: e
    },
    t
  )).data;
}
async function ha(e, t = P) {
  return (await t.invoke.post(
    ds(),
    e
  )).data;
}
async function Zt(e, t = P) {
  if (!(e != null && e.orderId))
    throw new Error("handlePayment method requires orderId");
  return navigator != null && navigator.userAgent.includes("WebKit") && typeof sessionStorage < "u" && sessionStorage.setItem(
    "sw-context-token",
    t.config.contextToken
  ), (await t.invoke.get(ws(), {
    params: e
  })).data;
}
async function va(e, t, n = P) {
  var s, a, o;
  return (o = (a = (s = (await n.invoke.post(
    Vt(),
    Object.assign({}, t, {
      filter: [
        {
          type: "equals",
          field: "id",
          value: e
        }
      ]
    })
  )).data) == null ? void 0 : s.orders) == null ? void 0 : a.elements) == null ? void 0 : o[0];
}
async function ga(e, t = P) {
  return (await t.invoke.post(fs(), {
    orderId: e
  })).data;
}
async function Kt(e, t, n = P) {
  return (await n.invoke.post(
    ps(),
    {
      orderId: e,
      paymentMethodId: t
    }
  )).data;
}
async function ma(e, t = P) {
  return (await t.invoke.post(
    `${Xr()}?search=${encodeURIComponent(
      (e == null ? void 0 : e.query) || ""
    )}`,
    e
  )).data;
}
async function ya(e, t = P) {
  await t.invoke.post(
    Cs(),
    Object.assign({}, { option: "subscribe" }, e)
  );
}
async function wa(e, t = P) {
  await t.invoke.post(
    Es(),
    e
  );
}
async function Ca(e, t = P) {
  return (await t.invoke.post(
    Ss(e)
  )).data;
}
async function Ea(e, t = P) {
  return (await t.invoke.post(
    Ps(),
    e
  )).data;
}
async function Pa(e, t = P) {
  return (await t.invoke.delete(
    As(e)
  )).data;
}
async function Sa(e, t = P) {
  return (await t.invoke.post(
    bs(),
    { productIds: e }
  )).data;
}
P.config;
P.setup;
P.update;
P.onConfigChange;
const Be = {
  associations: {
    media: {},
    cmsPage: {
      associations: {
        sections: {
          associations: {
            blocks: {
              associations: {
                slots: {
                  associations: {
                    block: {
                      associations: {
                        slots: {
                          associations: {}
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
function Ba() {
  const { apiInstance: e } = k();
  async function t(n, r) {
    const s = r != null && r.withCmsAssociations ? Be : {};
    return (await de(
      {
        address: zr(n),
        payload: s
      },
      e
    )).data;
  }
  return {
    search: t
  };
}
function Aa(e) {
  return (e == null ? void 0 : e.apiAlias) === "product" || (e == null ? void 0 : e.type) === "product";
}
function ba(e) {
  var t, n, r;
  return Aa(e) && (((n = (t = e == null ? void 0 : e.cover) == null ? void 0 : t.media) == null ? void 0 : n.url) || ((r = e == null ? void 0 : e.cover) == null ? void 0 : r.url)) || "";
}
function Y(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.translated) == null ? void 0 : n[t]) || (e == null ? void 0 : e[t]) || "";
}
function ht(e) {
  var n;
  if (!e || !((n = e.calculatedPrices) != null && n.length))
    return [];
  const t = e.calculatedPrices.length;
  return e.calculatedPrices.map(({ unitPrice: r, quantity: s }, a) => ({
    label: a === t - 1 ? `from ${s}` : `to ${s}`,
    quantity: s,
    unitPrice: r
  }));
}
function Oa(e) {
  switch (e.resourceType) {
    case "frontend.detail.page":
      return e.product;
    case "frontend.navigation.page":
      return e.category;
    case "frontend.landing.page":
      return e.landingPage;
  }
}
const vt = (e, t) => ({
  label: Y(t, "name") || e,
  code: e,
  ...t
});
function Ra(e) {
  return e.entities !== void 0;
}
function gt(e) {
  if (!e)
    return [];
  const t = [];
  for (const [n, r] of Object.entries(e))
    if (n === "properties" && Ra(r))
      for (const s of r.entities)
        t.push(vt(n, s));
    else
      ["properties", "options"].includes(n) || t.push(vt(n, r));
  return t;
}
function ja() {
  var d, y;
  const { apiInstance: e } = k(), { configurator: t, product: n } = Ua();
  if (!n.value)
    throw new Error(
      "Product configurator cannot be used without the product context."
    );
  const r = T({}), s = T(!!((d = n.value.options) != null && d.length)), a = v(() => {
    var h;
    return (h = n.value) == null ? void 0 : h.parentId;
  }), o = v(() => t.value || []), c = (h) => {
    const w = o.value.find((O) => {
      var A;
      return !!((A = O.options) == null ? void 0 : A.find(
        (m) => m.id === h
      ));
    });
    return Y(w, "name");
  };
  return (y = n.value.optionIds) == null || y.forEach((h) => {
    const w = c(h);
    w && (r.value[w] = h);
  }), {
    handleChange: async (h, w, O) => {
      r.value = Object.assign({}, r.value, {
        [h]: w
      }), typeof O == "function" && await O();
    },
    findVariantForSelectedOptions: async (h) => {
      var O, S;
      const w = [
        {
          type: "equals",
          field: "parentId",
          value: a.value
        },
        ...Object.values(h || r.value).map((A) => ({
          type: "equals",
          field: "optionIds",
          value: A
        }))
      ];
      try {
        e && (e.defaults.headers.common["sw-include-seo-urls"] = "true");
        const A = await de(
          {
            address: Wt(),
            payload: {
              limit: 1,
              filter: w,
              includes: {
                product: ["id", "translated", "productNumber", "seoUrls"],
                seo_url: ["seoPathInfo"]
              },
              associations: {
                seoUrls: {}
              }
            }
          },
          e
        );
        return (S = (O = A == null ? void 0 : A.data) == null ? void 0 : O.elements) == null ? void 0 : S[0];
      } catch (A) {
        console.error("SwProductDetails:findVariantForSelectedOptions", A);
      }
    },
    isLoadingOptions: s,
    getOptionGroups: o,
    getSelectedOptions: r
  };
}
function Wa(e) {
  const { apiInstance: t } = k(), n = T([]), r = async (a = {}) => {
    var c;
    const o = await Ts(
      e.value.id,
      void 0,
      t
    );
    n.value = (c = o.elements) != null ? c : [];
  }, s = async (a) => {
    await Is(e.value.id, a, t);
  };
  return {
    productReviews: v(() => n.value),
    loadProductReviews: r,
    addReview: s
  };
}
function Ha(e, t) {
  const n = t.associationContext, { apiInstance: r } = k(), s = T(!1), a = T([]), o = async (c) => {
    s.value = !0;
    const g = c.method || "get";
    try {
      if (g && g === "get") {
        const d = await da(
          {
            address: `${ae(
              e.value.id
            )}/${n}${c.searchParams || ""}`
          },
          r
        );
        a.value = d == null ? void 0 : d.data;
        return;
      }
      const f = await de(
        {
          address: `${ae(
            e.value.id
          )}/${n}`,
          payload: c
        },
        r
      );
      a.value = f == null ? void 0 : f.data;
    } catch (f) {
      console.error(
        "[useProductAssociations][loadAssociations][error]:",
        f
      );
    } finally {
      s.value = !1;
    }
  };
  return {
    isLoading: v(() => s.value),
    productAssociations: v(() => a.value || []),
    loadAssociations: o
  };
}
function Va(e) {
  function t(n) {
    return e.slots.find((r) => r.slot === n);
  }
  return {
    block: e,
    getSlotContent: t
  };
}
function Ja(e) {
  function t(n) {
    return e.blocks.filter(
      (r) => r.sectionPosition === n
    );
  }
  return {
    section: e,
    getPositionContent: t
  };
}
function za(e) {
  const t = (e == null ? void 0 : e.type) || "main-navigation", { apiInstance: n } = k(), r = M(
    `swNavigation-${t}`,
    T([])
  );
  L(`swNavigation-${t}`, r);
  const s = v(() => r.value);
  async function a({ depth: o }) {
    try {
      const c = await la(
        {
          requestActiveId: t,
          requestRootId: t,
          searchCriteria: {},
          depth: o
        },
        n
      );
      return r.value = c || [], r.value;
    } catch (c) {
      return r.value = [], console.error("[useNavigation][loadNavigationElements]", c), [];
    }
  }
  return {
    navigationElements: s,
    loadNavigationElements: a
  };
}
function fe() {
  const { apiInstance: e } = k(), t = M("swCart", T());
  L("swCart", t);
  async function n() {
    const m = await ia(e);
    return t.value = m, m;
  }
  async function r(m) {
    const i = await ua(
      m.id,
      m.quantity,
      e
    );
    return t.value = i, i;
  }
  async function s(m) {
    const i = await Xt(m.id, e);
    t.value = i;
  }
  async function a(m) {
    const i = await Qt(
      m.id,
      m.quantity,
      e
    );
    t.value = i;
  }
  async function o(m) {
    if (m) {
      const i = await ca(m, e);
      t.value = i;
    }
  }
  async function c() {
    if (!d.value.length)
      return [];
    const m = await Rs(
      {
        ids: d.value.map(({ referencedId: i }) => i).filter(String)
      },
      e
    );
    return (m == null ? void 0 : m.elements) || [];
  }
  const g = v(() => d.value.filter(
    (m) => m.type === "promotion"
  )), f = v(() => t.value), d = v(() => f.value ? f.value.lineItems || [] : []), y = v(() => d.value.reduce(
    (m, i) => i.type === "product" ? i.quantity + m : m,
    0
  )), h = v(() => y.value <= 0), w = v(() => f.value && f.value.price && f.value.price.totalPrice || 0), O = v(() => {
    var i, p, u, l;
    return ((l = (u = (p = (i = f.value) == null ? void 0 : i.deliveries) == null ? void 0 : p[0]) == null ? void 0 : u.shippingCosts) == null ? void 0 : l.totalPrice) || 0;
  }), S = v(() => {
    var i, p;
    return ((p = (i = f.value) == null ? void 0 : i.price) == null ? void 0 : p.positionPrice) || 0;
  }), A = v(
    () => {
      var m;
      return ((m = f.value) == null ? void 0 : m.errors) && Object.values(f.value.errors) || [];
    }
  );
  return {
    addProduct: r,
    addPromotionCode: o,
    appliedPromotionCodes: g,
    cart: f,
    cartItems: d,
    changeProductQuantity: a,
    count: y,
    refreshCart: n,
    removeItem: s,
    totalPrice: w,
    shippingTotal: O,
    subtotal: S,
    cartErrors: A,
    getProductItemsSeoUrlsData: c,
    isEmpty: h
  };
}
function Ga(e) {
  if (!e)
    throw new Error("[useCartItem] mandatory cartItem argument is missing.");
  const { apiInstance: t } = k(), { refreshCart: n } = fe(), r = v(() => e.quantity), s = v(() => ba(e)), a = v(() => {
    var S;
    return (S = e.price) == null ? void 0 : S.unitPrice;
  }), o = v(
    () => {
      var S;
      return ((S = e.price) == null ? void 0 : S.listPrice) && e.price.unitPrice;
    }
  ), c = v(
    () => {
      var S;
      return e.type === "product" && ((S = e.payload) == null ? void 0 : S.options) || [];
    }
  ), g = v(() => {
    var S;
    return (S = e.deliveryInformation) == null ? void 0 : S.stock;
  }), f = v(() => e.type), d = v(() => e.type === "product"), y = v(() => e.type === "promotion");
  async function h() {
    await Xt(e.id, t), n();
  }
  async function w(S) {
    await Qt(
      e.id,
      S,
      t
    ), n();
  }
  async function O() {
    if (!!e.referencedId)
      try {
        return (await Yt(
          e.referencedId,
          {},
          t
        )).product;
      } catch (S) {
        console.error(
          "[useCart][getProductItemsSeoUrlsData]",
          S.messages
        );
      }
  }
  return {
    changeItemQuantity: w,
    removeItem: h,
    getProductItemSeoUrlData: O,
    itemRegularPrice: a,
    itemSpecialPrice: o,
    itemOptions: c,
    itemStock: g,
    itemQuantity: r,
    itemType: f,
    itemImageThumbnailUrl: s,
    isProduct: d,
    isPromotion: y
  };
}
var mt;
const xa = typeof window < "u";
xa && ((mt = window == null ? void 0 : window.navigator) == null ? void 0 : mt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Ia(e, t, n = {}) {
  const {
    flush: r = "sync",
    deep: s = !1,
    immediate: a = !0
  } = n;
  return Array.isArray(t) || (t = [t]), sn(e, (o) => t.forEach((c) => c.value = o), { flush: r, deep: s, immediate: a });
}
function je() {
  const { apiInstance: e } = k(), { userFromContext: t, refreshSessionContext: n } = en(), r = Q("customer");
  Ia(t, r, {
    immediate: !0
  });
  const { getStorefrontUrl: s } = rn(), { refreshCart: a } = fe(), o = v(
    () => {
      var R, E;
      return ((E = (R = y.value) == null ? void 0 : R.defaultPaymentMethod) == null ? void 0 : E.translated) || null;
    }
  ), c = v(
    () => {
      var R;
      return ((R = y.value) == null ? void 0 : R.defaultBillingAddress) || null;
    }
  ), g = v(
    () => {
      var R;
      return ((R = y.value) == null ? void 0 : R.defaultShippingAddress) || null;
    }
  ), f = T(null), d = T(null), y = v(() => r.value);
  async function h({
    username: R,
    password: E
  } = {}) {
    await Ns({ username: R, password: E }, e), await n(), a();
  }
  async function w(R) {
    const E = await Fs(
      { ...R, storefrontUrl: s() },
      e
    );
    return r.value = E, await n(), E;
  }
  async function O() {
    await ks(e), await n(), a();
  }
  async function S(R = {}) {
    try {
      const E = await Us(
        Object.assign(
          {},
          R
        ),
        e
      );
      r.value = E;
    } catch (E) {
      r.value = void 0, console.error("[useUser][refreshUser]", E);
    }
  }
  async function A(R) {
    f.value = await aa(R, e);
  }
  async function m(R) {
    d.value = await oa(R, e);
  }
  async function i(R) {
    await Vs(R, e);
  }
  async function p(R) {
    await js(R, e);
  }
  async function u(R) {
    await Js(R, e);
  }
  const l = v(
    () => {
      var R;
      return ((R = y.value) == null ? void 0 : R.defaultBillingAddressId) || null;
    }
  ), C = v(
    () => {
      var R;
      return ((R = y.value) == null ? void 0 : R.defaultShippingAddressId) || null;
    }
  ), I = v(() => {
    var R;
    return !!((R = y.value) != null && R.id) && !!y.value.active;
  }), b = v(
    () => {
      var R;
      return !!((R = y.value) != null && R.id) && !y.value.guest;
    }
  ), U = v(() => {
    var R;
    return !!((R = y.value) != null && R.guest);
  });
  return {
    login: h,
    register: w,
    user: y,
    isLoggedIn: I,
    isCustomerSession: b,
    isGuestSession: U,
    refreshUser: S,
    logout: O,
    updateEmail: p,
    updatePersonalInfo: i,
    setDefaultPaymentMethod: u,
    loadSalutation: m,
    salutation: d,
    loadCountry: A,
    country: f,
    defaultBillingAddressId: l,
    defaultShippingAddressId: C,
    userDefaultPaymentMethod: o,
    userDefaultBillingAddress: c,
    userDefaultShippingAddress: g
  };
}
const yt = T(""), wt = T(1), Ta = 2;
function Fa() {
  function e(s) {
    t(s.currencySymbol), n(s.currencyPosition);
  }
  function t(s) {
    yt.value = s;
  }
  function n(s) {
    wt.value = s;
  }
  function r(s) {
    if (typeof s > "u")
      return "";
    let a = [
      (+s).toFixed(Ta),
      yt.value
    ];
    return wt.value === 0 && (a = a.reverse()), a.join(" ");
  }
  return {
    init: e,
    getFormattedPrice: r
  };
}
function en(e) {
  const { apiInstance: t } = k(), { init: n } = Fa(), r = Q("swSessionContext", {
    replace: e
  }), s = v(() => r.value), a = async () => {
    try {
      const u = await Gs(t);
      r.value = u, n({
        currencyPosition: u.currency.position,
        currencySymbol: u.currency.symbol
      });
    } catch (u) {
      console.error("[UseSessionContext][refreshSessionContext]", u);
    }
  }, o = v(
    () => {
      var u;
      return ((u = s.value) == null ? void 0 : u.shippingMethod) || null;
    }
  ), c = async (u = {}) => {
    if (!(u != null && u.id))
      throw new Error(
        "You need to provide shipping method id in order to set shipping method."
      );
    await sa(u.id, t), await a();
  }, g = v(
    () => {
      var u;
      return ((u = s.value) == null ? void 0 : u.paymentMethod) || null;
    }
  ), f = async (u = {}) => {
    if (!(u != null && u.id))
      throw new Error(
        "You need to provide payment method id in order to set payment method."
      );
    await na(u.id, t), await a();
  }, d = v(() => {
    var u;
    return ((u = s.value) == null ? void 0 : u.currency) || null;
  }), y = async (u = {}) => {
    if (!u.id) {
      console.error(
        "You need to provide currency id in order to set currency.",
        u
      );
      return;
    }
    await Xs(u.id, t), await a();
  }, h = async (u = {}) => {
    !u.id || (await Zs(u.id, t), await a());
  }, w = v(
    () => {
      var u, l;
      return ((l = (u = s.value) == null ? void 0 : u.customer) == null ? void 0 : l.activeShippingAddress) || null;
    }
  ), O = async (u) => {
    if (!(u != null && u.id))
      throw new Error(
        "You need to provide address id in order to set the address."
      );
    await Ys(u.id, t), a();
  }, S = v(
    () => {
      var u, l;
      return ((l = (u = s.value) == null ? void 0 : u.customer) == null ? void 0 : l.activeBillingAddress) || null;
    }
  ), A = async (u) => {
    if (!(u != null && u.id))
      throw new Error(
        "You need to provide address id in order to set the address."
      );
    await Qs(u.id, t), a();
  }, m = v(
    () => {
      var u, l;
      return (l = (u = s.value) == null ? void 0 : u.salesChannel) == null ? void 0 : l.countryId;
    }
  ), i = v(() => {
    var u, l;
    return (l = (u = s.value) == null ? void 0 : u.context) == null ? void 0 : l.taxState;
  }), p = v(() => {
    var u;
    return (u = s.value) == null ? void 0 : u.customer;
  });
  return {
    sessionContext: s,
    refreshSessionContext: a,
    selectedShippingMethod: o,
    setShippingMethod: c,
    selectedPaymentMethod: g,
    setPaymentMethod: f,
    currency: d,
    setCurrency: y,
    activeShippingAddress: w,
    setActiveShippingAddress: O,
    activeBillingAddress: S,
    setActiveBillingAddress: A,
    countryId: m,
    taxState: i,
    userFromContext: p,
    setLanguage: h
  };
}
function Ya(e) {
  const t = v(() => Ie(e)), { addProduct: n, cartItems: r, refreshCart: s } = fe(), a = T(1);
  async function o() {
    a.value || (a.value = 1);
    const d = await n({
      id: t.value.id,
      quantity: a.value
    });
    return a.value = 1, s(), d;
  }
  const c = v(() => {
    var d;
    return (d = t.value) == null ? void 0 : d.stock;
  }), g = v(() => {
    var d;
    return (d = t.value) == null ? void 0 : d.availableStock;
  }), f = v(
    () => r.value.some(
      (d) => {
        var y;
        return d.referencedId === ((y = t.value) == null ? void 0 : y.id);
      }
    )
  );
  return {
    addToCart: o,
    quantity: a,
    getStock: c,
    getAvailableStock: g,
    isInCart: f
  };
}
function Qa() {
  const e = M(
    "swNotifications",
    T([])
  );
  L("swNotifications", e);
  function t(a) {
    var o;
    e.value = ((o = e.value) == null ? void 0 : o.filter(({ id: c }) => c !== a)) || [];
  }
  function n() {
    e.value = [];
  }
  function r() {
    return new Date().getTime();
  }
  async function s(a, o) {
    const c = o.timeout || 2500, g = !!o.persistent;
    e.value = e.value || [];
    const f = r();
    e.value.push({
      id: f,
      type: o.type || "info",
      message: a
    }), g || setTimeout(() => {
      t(f);
    }, c);
  }
  return {
    removeOne: t,
    removeAll: n,
    pushInfo: (a, o = {}) => s(a, { ...o, type: "info" }),
    pushSuccess: (a, o = {}) => s(a, { ...o, type: "success" }),
    pushWarning: (a, o = {}) => s(a, { ...o, type: "warning" }),
    pushError: (a, o = {}) => s(a, { ...o, type: "danger" }),
    notifications: v(() => e.value || [])
  };
}
function Xa() {
  const { apiInstance: e } = k();
  return {
    search: async (n, r) => {
      const s = (r == null ? void 0 : r.withCmsAssociations) && Be;
      return await fa(
        n,
        s || {},
        e
      );
    }
  };
}
function xe(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function te(e, ...t) {
  if (!t.length)
    return e;
  const n = t.shift();
  if (n === void 0)
    return e;
  if (xe(e) && xe(n))
    for (const r in n)
      xe(n[r]) ? (e[r] || Object.assign(e, { [r]: {} }), te(e[r], n[r])) : Object.assign(e, { [r]: n[r] });
  return te(e, ...t);
}
function Na(e) {
  var s;
  const t = (e == null ? void 0 : e.listingType) || "categoryListing", { apiInstance: n } = k();
  let r;
  if (t === "productSearchListing")
    r = async (a) => ma(a, n);
  else {
    const { category: a } = gn(), o = ((s = a.value) == null ? void 0 : s.id) || (e == null ? void 0 : e.categoryId);
    r = async (c) => {
      if (!o)
        throw new Error(
          "[useListing][search] Search category id does not exist."
        );
      return xs(o, c, n);
    };
  }
  return ka({
    listingKey: t,
    searchMethod: r,
    searchDefaults: (e == null ? void 0 : e.defaultSearchCriteria) || {}
  });
}
function ka({
  searchMethod: e,
  searchDefaults: t,
  listingKey: n
}) {
  const r = T(!1), s = T(!1), a = M(`useListingInitial-${n}`, T());
  L(`useListingInitial-${n}`, a);
  const o = M(`useListingApplied-${n}`, T());
  L(`useListingApplied-${n}`, o);
  const c = v(() => a.value), g = async (E) => {
    var x, N, F, j;
    if (((N = (x = E == null ? void 0 : E.currentFilters) == null ? void 0 : x.manufacturer) == null ? void 0 : N.length) || ((j = (F = E == null ? void 0 : E.currentFilters) == null ? void 0 : F.properties) == null ? void 0 : j.length)) {
      r.value = !0;
      const V = await e({
        query: E.currentFilters.search || void 0
      });
      E = Object.assign({}, E, {
        aggregations: V == null ? void 0 : V.aggregations
      });
    }
    a.value = E, o.value = null, r.value = !1;
  }, f = async (E) => {
    r.value = !0;
    try {
      const x = te({}, t, E), N = await e(x);
      return N;
    } catch (x) {
      throw x;
    } finally {
      r.value = !1;
    }
  };
  async function d(E, x) {
    r.value = !0;
    try {
      const N = te({}, t, E), [F, j] = await Promise.all([
        e(N),
        e({
          query: N.query,
          includes: { product_listing: ["aggregations"] }
        })
      ]);
      o.value = Object.assign({}, F, {
        aggregations: Object.assign(
          {},
          F == null ? void 0 : F.aggregations,
          j == null ? void 0 : j.aggregations
        )
      });
    } catch (N) {
      throw N;
    } finally {
      r.value = !1;
    }
  }
  const y = async () => {
    var E;
    s.value = !0;
    try {
      const x = {
        p: u.value + 1
      }, N = te({}, t, x), F = await e(N);
      o.value = {
        ...h.value,
        page: F.page,
        elements: [
          ...((E = h.value) == null ? void 0 : E.elements) || [],
          ...F.elements
        ]
      };
    } catch (x) {
      throw x;
    } finally {
      s.value = !1;
    }
  }, h = v(() => o.value || c.value), w = v(() => {
    var E;
    return ((E = h.value) == null ? void 0 : E.elements) || [];
  }), O = v(() => {
    var E;
    return ((E = h.value) == null ? void 0 : E.total) || 0;
  }), S = v(() => {
    var E;
    return ((E = h.value) == null ? void 0 : E.limit) || (t == null ? void 0 : t.limit) || 10;
  }), A = v(
    () => Math.ceil(O.value / S.value)
  ), m = v(() => {
    var x, N;
    const E = Object.values(((x = h.value) == null ? void 0 : x.sortings) || {});
    return ((N = h.value) == null ? void 0 : N.availableSortings) || E;
  }), i = v(
    () => {
      var E;
      return (E = h.value) == null ? void 0 : E.sorting;
    }
  );
  async function p(E) {
    await d({
      order: E
    });
  }
  const u = v(() => {
    var E;
    return ((E = h.value) == null ? void 0 : E.page) || 1;
  }), l = async (E) => {
    await d({
      p: E || 1
    });
  }, C = v(() => {
    var E;
    return gt((E = c.value) == null ? void 0 : E.aggregations);
  }), I = v(() => {
    var E, x;
    return gt(
      ((E = o.value) == null ? void 0 : E.aggregations) || ((x = h.value) == null ? void 0 : x.aggregations)
    );
  }), b = v(() => {
    var N;
    const E = {}, x = {
      ...(N = h.value) == null ? void 0 : N.currentFilters
    };
    return Object.keys(x).forEach((F) => {
      if (!!x[F] && F !== "navigationId") {
        if (F === "price") {
          x[F].min && (E["min-price"] = x[F].min), x[F].max && (E["max-price"] = x[F].max);
          return;
        }
        F !== "p" && (E[F] = x[F]);
      }
    }), E;
  }), U = (E) => {
    const x = Object.assign({}, b.value, E, {
      query: b.value.search
    });
    return o.value.currentFilters = x, d(x);
  }, R = () => {
    const E = Object.assign(
      {
        manufacturer: [],
        properties: [],
        price: { min: 0, max: 0 },
        search: b.value.search
      },
      t
    );
    return o.value.currentFilters = E, d({ query: b.value.search });
  };
  return {
    getInitialListing: c,
    setInitialListing: g,
    initSearch: f,
    search: d,
    getCurrentListing: h,
    getElements: w,
    getSortingOrders: m,
    getCurrentSortingOrder: i,
    changeCurrentSortingOrder: p,
    getCurrentPage: u,
    changeCurrentPage: l,
    getTotal: O,
    getTotalPagesCount: A,
    getLimit: S,
    getInitialFilters: C,
    getAvailableFilters: I,
    getCurrentFilters: b,
    setCurrentFilters: U,
    loading: v(() => r.value),
    loadMore: y,
    loadingMore: v(() => s.value),
    resetFilters: R
  };
}
function Ua(e, t) {
  const n = Q("product", { context: e });
  if (!n.value)
    throw new Error("Product context is not provided");
  const r = Q("configurator", {
    context: e && t
  });
  function s(a) {
    n.value = Object.assign({}, n.value, a);
  }
  return {
    product: v(() => n.value),
    configurator: v(() => r.value),
    changeVariant: s
  };
}
function Za() {
  const { apiInstance: e } = k();
  return {
    search: async (n, r) => {
      const s = (r == null ? void 0 : r.withCmsAssociations) && Be;
      return await Yt(n, s, e);
    }
  };
}
function Ka() {
  const { apiInstance: e } = k(), { refreshCart: t } = fe(), {
    sessionContext: n,
    selectedPaymentMethod: r,
    selectedShippingMethod: s,
    setShippingMethod: a,
    setPaymentMethod: o
  } = en(), c = M("swShippingMethods", T());
  L("swShippingMethods", c);
  const g = M("swPaymentMethods", T());
  L("swPaymentMethods", g);
  const f = v(() => c.value || []), d = v(() => g.value || []);
  async function y({ forceReload: A } = { forceReload: !1 }) {
    if (f.value.length && !A)
      return f;
    const m = await ra(e, {
      onlyAvailable: !0
    });
    return c.value = (m == null ? void 0 : m.elements) || [], f;
  }
  async function h({ forceReload: A } = { forceReload: !1 }) {
    if (d.value.length && !A)
      return d;
    const m = await ta(e, {
      onlyAvailable: !0
    });
    return g.value = (m == null ? void 0 : m.elements) || [], d;
  }
  async function w(A) {
    try {
      return await ha(A, e);
    } catch (m) {
      throw m;
    } finally {
      t();
    }
  }
  const O = v(
    () => {
      var A, m;
      return (m = (A = n.value) == null ? void 0 : A.shippingLocation) == null ? void 0 : m.address;
    }
  ), S = v(
    () => {
      var A, m;
      return (m = (A = n.value) == null ? void 0 : A.customer) == null ? void 0 : m.activeBillingAddress;
    }
  );
  return {
    getPaymentMethods: h,
    paymentMethods: d,
    getShippingMethods: y,
    shippingMethods: f,
    createOrder: w,
    shippingAddress: O,
    billingAddress: S,
    selectedShippingMethod: s,
    setShippingMethod: a,
    selectedPaymentMethod: r,
    setPaymentMethod: o
  };
}
function eo() {
  const { apiInstance: e } = k(), t = M("swSalutations", T());
  L("swSalutations", t);
  const n = T(null), r = async () => {
    try {
      const { elements: o } = await ea(e);
      t.value = o;
    } catch (o) {
      const c = o;
      n.value = c.messages;
    }
  }, s = async () => {
    t.value || await r();
  }, a = v(() => t.value || []);
  return Et(s), {
    mountedCallback: s,
    fetchSalutations: r,
    getSalutations: a
  };
}
function to() {
  const { apiInstance: e } = k(), t = M("swCountries", T());
  L("swCountries", t);
  async function n() {
    const { elements: a } = await Ks(e);
    t.value = a;
  }
  const r = v(() => {
    var a;
    return (a = t.value) != null ? a : [];
  }), s = async () => {
    t.value || await n();
  };
  return Et(s), {
    mountedCallback: s,
    fetchCountries: n,
    getCountries: r
  };
}
const $a = {
  associations: {
    lineItems: {
      associations: {
        cover: {}
      }
    },
    addresses: {},
    deliveries: {
      associations: {
        shippingMethod: {}
      }
    },
    transactions: {
      associations: {
        paymentMethod: {}
      },
      sort: "-createdAt"
    }
  }
};
function no(e) {
  const { apiInstance: t } = k(), n = M("swOrderDetails", T());
  L("swOrderDetails", n);
  const r = v(
    () => {
      var m, i, p;
      return (p = (i = (m = n.value) == null ? void 0 : m.transactions) == null ? void 0 : i[0]) == null ? void 0 : p.paymentMethod;
    }
  ), s = v(
    () => {
      var m, i, p;
      return (p = (i = (m = n.value) == null ? void 0 : m.deliveries) == null ? void 0 : i[0]) == null ? void 0 : p.shippingMethod;
    }
  ), a = T(), o = v(() => {
    var m, i, p, u, l, C;
    return {
      email: (i = (m = n.value) == null ? void 0 : m.orderCustomer) == null ? void 0 : i.email,
      firstName: (u = (p = n.value) == null ? void 0 : p.orderCustomer) == null ? void 0 : u.firstName,
      lastName: (C = (l = n.value) == null ? void 0 : l.orderCustomer) == null ? void 0 : C.lastName
    };
  }), c = v(
    () => {
      var m, i;
      return (i = (m = n.value) == null ? void 0 : m.addresses) == null ? void 0 : i.find(
        ({ id: p }) => p === n.value.billingAddressId
      );
    }
  ), g = v(
    () => {
      var m, i, p;
      return (p = (i = (m = n.value) == null ? void 0 : m.deliveries) == null ? void 0 : i[0]) == null ? void 0 : p.shippingOrderAddress;
    }
  ), f = v(() => {
    var m;
    return (m = n.value) == null ? void 0 : m.shippingTotal;
  }), d = v(() => {
    var m, i;
    return (i = (m = n.value) == null ? void 0 : m.price) == null ? void 0 : i.positionPrice;
  }), y = v(() => {
    var m, i;
    return (i = (m = n.value) == null ? void 0 : m.price) == null ? void 0 : i.totalPrice;
  }), h = v(() => {
    var m, i;
    return (i = (m = n.value) == null ? void 0 : m.stateMachineState) == null ? void 0 : i.name;
  });
  async function w() {
    const m = await va(
      e,
      $a,
      t
    );
    n.value = m != null ? m : null;
  }
  async function O(m, i, p) {
    const u = await Zt(
      {
        orderId: e,
        finishUrl: m,
        errorUrl: i,
        paymentDetails: p
      },
      t
    );
    a.value = u == null ? void 0 : u.redirectUrl;
  }
  async function S() {
    await ga(e, t), await w();
  }
  async function A(m) {
    await Kt(e, m, t), await w();
  }
  return {
    order: v(() => n.value),
    status: h,
    total: y,
    subtotal: d,
    shippingCosts: f,
    shippingAddress: g,
    billingAddress: c,
    personalDetails: o,
    paymentUrl: a,
    shippingMethod: s,
    paymentMethod: r,
    loadOrderDetails: w,
    handlePayment: O,
    cancel: S,
    changePaymentMethod: A
  };
}
function ro(e) {
  const { apiInstance: t } = k(), n = v(
    () => {
      var f, d;
      return (d = (f = e.value) == null ? void 0 : f.transactions) == null ? void 0 : d.find((y) => {
        var h;
        return ((h = y.paymentMethod) == null ? void 0 : h.active) === !0;
      });
    }
  ), r = v(() => {
    var f;
    return (f = n.value) == null ? void 0 : f.paymentMethod;
  }), s = T(), a = v(() => {
    var f;
    return (f = n.value) == null ? void 0 : f.stateMachineState;
  }), o = v(
    () => {
      var f, d, y, h;
      return ((d = (f = n.value) == null ? void 0 : f.paymentMethod) == null ? void 0 : d.asynchronous) && ((h = (y = n.value) == null ? void 0 : y.paymentMethod) == null ? void 0 : h.afterOrderEnabled);
    }
  );
  async function c(f, d, y) {
    var w;
    if (!e.value)
      return;
    const h = await Zt(
      {
        orderId: (w = e.value) == null ? void 0 : w.id,
        finishUrl: f,
        errorUrl: d,
        paymentDetails: y
      },
      t
    );
    return s.value = h == null ? void 0 : h.redirectUrl, h;
  }
  async function g(f) {
    var d;
    !e.value || Kt((d = e.value) == null ? void 0 : d.id, f, t);
  }
  return {
    isAsynchronous: o,
    activeTransaction: n,
    state: a,
    paymentUrl: s,
    paymentMethod: r,
    handlePayment: c,
    changePaymentMethod: g
  };
}
const W = T([]);
function tn() {
  const e = () => {
    localStorage.setItem(
      "sw-wishlist-items",
      JSON.stringify(W.value)
    );
  }, t = () => {
    var g;
    if (typeof window < "u" && localStorage)
      return JSON.parse((g = localStorage.getItem("sw-wishlist-items")) != null ? g : "[]");
  };
  async function n(g) {
    var f;
    W.value = (f = W.value) == null ? void 0 : f.filter(
      (d) => d != g
    ), e();
  }
  async function r(g) {
    W.value.includes(g) || (W.value.push(g), e());
  }
  async function s() {
    W.value = [], e();
  }
  function a() {
    const g = t();
    Array.isArray(g) && g.length && (W.value = g);
  }
  const o = v(() => W.value), c = v(() => o.value.length);
  return {
    getWishlistProducts: a,
    addToWishlist: r,
    removeFromWishlist: n,
    clearWishlist: s,
    items: o,
    count: c
  };
}
const Ct = T([]);
function nn() {
  const { apiInstance: e } = k();
  async function t(c) {
    await Ca(c, e), r();
  }
  async function n(c) {
    await Pa(c, e), r();
  }
  async function r() {
    const c = await Ea(void 0, e);
    Ct.value = [
      ...c.products.elements.map((g) => g.id)
    ];
  }
  async function s(c) {
    await Sa(c, e);
  }
  const a = v(() => Ct.value), o = v(() => a.value.length);
  return {
    getWishlistProducts: r,
    addToWishlistSync: t,
    removeFromWishlistSync: n,
    mergeWishlistProducts: s,
    items: a,
    count: o
  };
}
function so() {
  const e = T(""), t = Na({
    listingType: "productSearchListing"
  }), n = async (r = {}) => {
    const s = {
      query: e.value,
      ...r
    };
    return t.search(s, {
      preventRouteChange: !0
    });
  };
  return {
    searchTerm: e,
    loading: t.loading,
    search: n,
    loadMore: t.loadMore,
    getProducts: t.getElements,
    getTotal: t.getTotal
  };
}
function ao() {
  const { apiInstance: e } = k(), t = Pt({
    resetPassword: [],
    updatePassword: []
  });
  async function n(s) {
    try {
      t.updatePassword = [], await Ws(s, e);
    } catch (a) {
      return t.updatePassword = a.messages, !1;
    }
    return !0;
  }
  async function r(s) {
    try {
      await Hs(s, e);
    } catch (a) {
      return t.resetPassword = a.messages, !1;
    }
    return !0;
  }
  return {
    updatePassword: n,
    resetPassword: r,
    errors: t
  };
}
function oo() {
  const { apiInstance: e } = k(), t = T([]), n = async (s = {}) => {
    const a = await _s(s, e);
    t.value = a == null ? void 0 : a.elements;
  };
  return {
    orders: t,
    changeCurrentPage: async (s) => await n({ page: +s }),
    loadOrders: n
  };
}
function io(e, t) {
  const n = an(!0), r = n.run(() => Pt({
    interceptors: {}
  })), s = on({
    install(a, o) {
      s._a = a, a.config.globalProperties.$shopware = s, a.provide("shopware", s), o != null && o.enableDevtools && typeof window < "u";
    },
    _a: e,
    _e: n,
    apiInstance: t.apiInstance,
    state: r
  });
  return t != null && t.enableDevtools && typeof window < "u", s;
}
function uo() {
  const { apiInstance: e } = k(), { isGuestSession: t } = je(), n = M(
    "swCustomerAddresses",
    T([])
  );
  L("swCustomerAddresses", n);
  async function r(f = {}) {
    const { elements: d } = await $s(f, e);
    n.value = d;
  }
  async function s(f) {
    const d = await Ds(f, e);
    return await r(), t.value || (await c(d.id), await g(d.id)), d;
  }
  async function a(f) {
    const d = await qs(f, e);
    return await r(), d;
  }
  async function o(f) {
    const d = Ms(f, e);
    return await r(), d;
  }
  async function c(f) {
    return await Ls(f, e);
  }
  async function g(f) {
    return await Bs(f, e);
  }
  return {
    customerAddresses: v(() => n.value || []),
    loadCustomerAddresses: r,
    createCustomerAddress: s,
    updateCustomerAddress: a,
    deleteCustomerAddress: o,
    setDefaultCustomerBillingAddress: c,
    setDefaultCustomerShippingAddress: g
  };
}
function co(e) {
  const t = v(
    () => {
      var w;
      return (w = e.value) == null ? void 0 : w.calculatedCheapestPrice;
    }
  ), n = v(
    () => {
      var w, O, S, A;
      return ((O = (w = e.value) == null ? void 0 : w.calculatedPrices) == null ? void 0 : O.length) > 0 ? (S = e.value) == null ? void 0 : S.calculatedPrices[0] : (A = e.value) == null ? void 0 : A.calculatedPrice;
    }
  ), r = v(
    () => {
      var w;
      return (w = n == null ? void 0 : n.value) == null ? void 0 : w.referencePrice;
    }
  ), s = v(
    () => {
      var w, O, S;
      return ((O = (w = e.value) == null ? void 0 : w.variantListingConfig) == null ? void 0 : O.displayParent) && ((S = e.value) == null ? void 0 : S.parentId) === null;
    }
  ), a = v(
    () => {
      var w, O;
      return ((O = (w = e.value) == null ? void 0 : w.calculatedPrices) == null ? void 0 : O.length) > 1 || !!(s.value && o.value);
    }
  ), o = v(
    () => {
      var w, O, S, A, m, i, p;
      return !!e.value.parentId && ((O = (w = e.value) == null ? void 0 : w.cheapestPrice) == null ? void 0 : O.hasRange) && !!((A = (S = e.value) == null ? void 0 : S.cheapestPrice) != null && A.parentId) && ((m = n == null ? void 0 : n.value) == null ? void 0 : m.unitPrice) !== ((i = t == null ? void 0 : t.value) == null ? void 0 : i.unitPrice) && ((p = t == null ? void 0 : t.value) == null ? void 0 : p.unitPrice);
    }
  ), c = v(() => {
    var w;
    return a.value && ht(e.value).length > 1 ? ((w = e.value) == null ? void 0 : w.calculatedPrices.reduce(
      (S, A) => A.unitPrice < S.unitPrice ? A : S
    )) || t.value : n.value;
  }), g = v(
    () => {
      var w;
      return (w = c.value) == null ? void 0 : w.unitPrice;
    }
  ), f = v(
    () => {
      var w;
      return (w = c.value) == null ? void 0 : w.totalPrice;
    }
  ), d = v(
    () => c.value
  ), y = v(
    () => {
      var w, O;
      return !!((O = (w = c.value) == null ? void 0 : w.listPrice) != null && O.percentage);
    }
  ), h = v(() => ht(e.value));
  return {
    price: d,
    totalPrice: f,
    unitPrice: g,
    displayFromVariants: o,
    displayFrom: a,
    tierPrices: h,
    referencePrice: r,
    isListPrice: y
  };
}
function rn() {
  const { apiInstance: e } = k();
  function t() {
    var r;
    const n = e.config.endpoint ? e.config.endpoint.slice(0, -1) : void 0;
    return (r = n != null ? n : window.location.origin) != null ? r : "";
  }
  return {
    getStorefrontUrl: t
  };
}
function lo(e) {
  const t = Oa(e), n = v(() => {
    let r = [];
    const s = Y(t, "keywords"), a = Y(t, "metaDescription"), o = Y(t, "metaTitle");
    return s && r.push({ name: "keywords", content: s }), a && r.push({ name: "description", content: a }), o && r.push({ name: "title", content: o }), r;
  });
  return {
    title: v(() => Y(t, "name")),
    meta: n
  };
}
function fo() {
  const { apiInstance: e } = k(), { getStorefrontUrl: t } = rn();
  async function n(a) {
    return await ya(
      {
        ...a,
        storefrontUrl: t()
      },
      e
    );
  }
  async function r(a) {
    return await wa(
      {
        email: a
      },
      e
    );
  }
  async function s() {
    return (await zs(e)).status !== "optOut";
  }
  return {
    newsletterSubscribe: n,
    newsletterUnsubscribe: r,
    isNewsletterSubscriber: s
  };
}
function po(e) {
  const t = Q("navigation", { context: e }), n = v(() => {
    var s;
    return (s = t.value) == null ? void 0 : s.routeName;
  }), r = v(() => {
    var s;
    return ((s = t.value) == null ? void 0 : s.foreignKey) || "";
  });
  return {
    navigationContext: v(() => t.value),
    routeName: n,
    foreignKey: r
  };
}
function ho() {
  const { apiInstance: e } = k();
  async function t(n) {
    var o;
    if (n === "/") {
      const c = await Os(
        {
          includes: {
            category: ["id"]
          },
          filter: [
            {
              type: "equals",
              field: "level",
              value: "1"
            },
            {
              type: "equals",
              field: "path",
              value: null
            },
            {
              type: "equals",
              field: "parentId",
              value: null
            }
          ]
        },
        e
      );
      return {
        routeName: "frontend.navigation.page",
        foreignKey: c.elements[0].id
      };
    }
    const r = n.startsWith("/navigation/") || n.startsWith("/detail/") || n.startsWith("/landingPage/"), s = r ? n : n.substring(1);
    return (o = (await pa(
      {
        filter: [
          {
            type: "equals",
            field: r ? "pathInfo" : "seoPathInfo",
            value: s
          }
        ]
      },
      e
    )).elements) == null ? void 0 : o[0];
  }
  return {
    resolvePath: t
  };
}
function vo() {
  const { isLoggedIn: e, isGuestSession: t } = je(), n = v(
    () => e.value && !t.value
  ), {
    getWishlistProducts: r,
    items: s,
    clearWishlist: a
  } = tn(), {
    getWishlistProducts: o,
    items: c,
    mergeWishlistProducts: g
  } = nn(), f = async () => {
    n.value ? await o() : await r();
  }, d = () => {
    a();
  }, y = async () => {
    var O;
    (O = s.value) != null && O.length && (await g(s.value), d()), o();
  }, h = v(
    () => n.value ? c.value : s.value
  ), w = v(() => h.value.length);
  return {
    mergeWishlistProducts: y,
    getWishlistProducts: f,
    clearWishlist: d,
    items: h,
    count: w
  };
}
function go(e) {
  const { isLoggedIn: t } = je(), {
    addToWishlist: n,
    removeFromWishlist: r,
    items: s
  } = tn(), {
    addToWishlistSync: a,
    removeFromWishlistSync: o,
    items: c
  } = nn();
  async function g() {
    t.value ? await o(e.value.id) : await r(e.value.id);
  }
  async function f() {
    t.value ? await a(e.value.id) : await n(e.value.id);
  }
  const d = v(
    () => {
      var y, h;
      return t.value ? (y = c.value) == null ? void 0 : y.includes(e.value.id) : (h = s.value) == null ? void 0 : h.includes(e.value.id);
    }
  );
  return {
    addToWishlist: f,
    removeFromWishlist: g,
    isInWishlist: d
  };
}
function mo(e) {
  const t = e.type, n = e.apiAlias === "cms_block" ? "Block" : e.apiAlias === "cms_section" ? "Section" : "Element", r = hn(`Cms-${n}-${t}`);
  try {
    const s = un(r);
    return {
      componentName: t,
      isResolved: s !== t,
      resolvedComponent: typeof s != "string" ? s : void 0
    };
  } catch (s) {
    return {
      componentName: t,
      resolvedComponent: void 0,
      resolved: !1,
      error: s.message
    };
  }
}
function yo() {
  return {};
}
export {
  qa as CATEGORY_ROUTE_NAME,
  Ma as LANDING_PAGE_ROUTE_NAME,
  Da as PRODUCT_ROUTE_NAME,
  ka as createListingComposable,
  io as createShopwareContext,
  yo as getDefaultApiParams,
  mo as resolveCmsComponent,
  Ya as useAddToCart,
  uo as useAddress,
  fe as useCart,
  Ga as useCartItem,
  gn as useCategory,
  Ba as useCategorySearch,
  Ka as useCheckout,
  Va as useCmsBlock,
  vn as useCmsElementConfig,
  La as useCmsElementImage,
  lo as useCmsMeta,
  Ja as useCmsSection,
  to as useCountries,
  oo as useCustomerOrders,
  ao as useCustomerPassword,
  rn as useInternationalization,
  Xa as useLandingSearch,
  Na as useListing,
  tn as useLocalWishlist,
  za as useNavigation,
  po as useNavigationContext,
  ho as useNavigationSearch,
  fo as useNewsletter,
  Qa as useNotifications,
  no as useOrderDetails,
  ro as useOrderPayment,
  Fa as usePrice,
  Ua as useProduct,
  Ha as useProductAssociations,
  ja as useProductConfigurator,
  co as useProductPrice,
  Wa as useProductReviews,
  Za as useProductSearch,
  so as useProductSearchSuggest,
  go as useProductWishlist,
  eo as useSalutations,
  en as useSessionContext,
  k as useShopwareContext,
  nn as useSyncWishlist,
  je as useUser,
  vo as useWishlist
};
