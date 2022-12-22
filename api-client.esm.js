function Pt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ye = { exports: {} }, ve = { exports: {} }, Ge = function(t, r) {
  return function() {
    for (var s = new Array(arguments.length), o = 0; o < s.length; o++)
      s[o] = arguments[o];
    return t.apply(r, s);
  };
}, kt = Ge, we = Object.prototype.toString, Ee = function(e) {
  return function(t) {
    var r = we.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function D(e) {
  return e = e.toLowerCase(), function(r) {
    return Ee(r) === e;
  };
}
function Ce(e) {
  return Array.isArray(e);
}
function V(e) {
  return typeof e > "u";
}
function Ft(e) {
  return e !== null && !V(e) && e.constructor !== null && !V(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Ze = D("ArrayBuffer");
function Nt(e) {
  var t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ze(e.buffer), t;
}
function Tt(e) {
  return typeof e == "string";
}
function Ut(e) {
  return typeof e == "number";
}
function et(e) {
  return e !== null && typeof e == "object";
}
function W(e) {
  if (Ee(e) !== "object")
    return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var Dt = D("Date"), $t = D("File"), _t = D("Blob"), It = D("FileList");
function be(e) {
  return we.call(e) === "[object Function]";
}
function qt(e) {
  return et(e) && be(e.pipe);
}
function Lt(e) {
  var t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || we.call(e) === t || be(e.toString) && e.toString() === t);
}
var jt = D("URLSearchParams");
function Bt(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Mt() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Re(e, t) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Ce(e))
      for (var r = 0, n = e.length; r < n; r++)
        t.call(null, e[r], r, e);
    else
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && t.call(null, e[s], s, e);
}
function ge() {
  var e = {};
  function t(s, o) {
    W(e[o]) && W(s) ? e[o] = ge(e[o], s) : W(s) ? e[o] = ge({}, s) : Ce(s) ? e[o] = s.slice() : e[o] = s;
  }
  for (var r = 0, n = arguments.length; r < n; r++)
    Re(arguments[r], t);
  return e;
}
function Ht(e, t, r) {
  return Re(t, function(s, o) {
    r && typeof s == "function" ? e[o] = kt(s, r) : e[o] = s;
  }), e;
}
function Wt(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function Jt(e, t, r, n) {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function Vt(e, t, r) {
  var n, s, o, u = {};
  t = t || {};
  do {
    for (n = Object.getOwnPropertyNames(e), s = n.length; s-- > 0; )
      o = n[s], u[o] || (t[o] = e[o], u[o] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}
function zt(e, t, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  var n = e.indexOf(t, r);
  return n !== -1 && n === r;
}
function Xt(e) {
  if (!e)
    return null;
  var t = e.length;
  if (V(t))
    return null;
  for (var r = new Array(t); t-- > 0; )
    r[t] = e[t];
  return r;
}
var Kt = function(e) {
  return function(t) {
    return e && t instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), b = {
  isArray: Ce,
  isArrayBuffer: Ze,
  isBuffer: Ft,
  isFormData: Lt,
  isArrayBufferView: Nt,
  isString: Tt,
  isNumber: Ut,
  isObject: et,
  isPlainObject: W,
  isUndefined: V,
  isDate: Dt,
  isFile: $t,
  isBlob: _t,
  isFunction: be,
  isStream: qt,
  isURLSearchParams: jt,
  isStandardBrowserEnv: Mt,
  forEach: Re,
  merge: ge,
  extend: Ht,
  trim: Bt,
  stripBOM: Wt,
  inherits: Jt,
  toFlatObject: Vt,
  kindOf: Ee,
  kindOfTest: D,
  endsWith: zt,
  toArray: Xt,
  isTypedArray: Kt,
  isFileList: It
}, _ = b;
function Oe(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var tt = function(t, r, n) {
  if (!r)
    return t;
  var s;
  if (n)
    s = n(r);
  else if (_.isURLSearchParams(r))
    s = r.toString();
  else {
    var o = [];
    _.forEach(r, function(g, w) {
      g === null || typeof g > "u" || (_.isArray(g) ? w = w + "[]" : g = [g], _.forEach(g, function(v) {
        _.isDate(v) ? v = v.toISOString() : _.isObject(v) && (v = JSON.stringify(v)), o.push(Oe(w) + "=" + Oe(v));
      }));
    }), s = o.join("&");
  }
  if (s) {
    var u = t.indexOf("#");
    u !== -1 && (t = t.slice(0, u)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}, Qt = b;
function z() {
  this.handlers = [];
}
z.prototype.use = function(t, r, n) {
  return this.handlers.push({
    fulfilled: t,
    rejected: r,
    synchronous: n ? n.synchronous : !1,
    runWhen: n ? n.runWhen : null
  }), this.handlers.length - 1;
};
z.prototype.eject = function(t) {
  this.handlers[t] && (this.handlers[t] = null);
};
z.prototype.forEach = function(t) {
  Qt.forEach(this.handlers, function(n) {
    n !== null && t(n);
  });
};
var Yt = z, Gt = b, Zt = function(t, r) {
  Gt.forEach(t, function(s, o) {
    o !== r && o.toUpperCase() === r.toUpperCase() && (t[r] = s, delete t[o]);
  });
}, rt = b;
function q(e, t, r, n, s) {
  Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
rt.inherits(q, Error, {
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
var nt = q.prototype, st = {};
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
  st[e] = { value: e };
});
Object.defineProperties(q, st);
Object.defineProperty(nt, "isAxiosError", { value: !0 });
q.from = function(e, t, r, n, s, o) {
  var u = Object.create(nt);
  return rt.toFlatObject(e, u, function(g) {
    return g !== Error.prototype;
  }), q.call(u, e.message, t, r, n, s), u.name = e.name, o && Object.assign(u, o), u;
};
var j = q, at = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, P = b;
function er(e, t) {
  t = t || new FormData();
  var r = [];
  function n(o) {
    return o === null ? "" : P.isDate(o) ? o.toISOString() : P.isArrayBuffer(o) || P.isTypedArray(o) ? typeof Blob == "function" ? new Blob([o]) : Buffer.from(o) : o;
  }
  function s(o, u) {
    if (P.isPlainObject(o) || P.isArray(o)) {
      if (r.indexOf(o) !== -1)
        throw Error("Circular reference detected in " + u);
      r.push(o), P.forEach(o, function(g, w) {
        if (!P.isUndefined(g)) {
          var m = u ? u + "." + w : w, v;
          if (g && !u && typeof g == "object") {
            if (P.endsWith(w, "{}"))
              g = JSON.stringify(g);
            else if (P.endsWith(w, "[]") && (v = P.toArray(g))) {
              v.forEach(function(h) {
                !P.isUndefined(h) && t.append(m, n(h));
              });
              return;
            }
          }
          s(g, m);
        }
      }), r.pop();
    } else
      t.append(u, n(o));
  }
  return s(e), t;
}
var ot = er, te, xe;
function tr() {
  if (xe)
    return te;
  xe = 1;
  var e = j;
  return te = function(r, n, s) {
    var o = s.config.validateStatus;
    !s.status || !o || o(s.status) ? r(s) : n(new e(
      "Request failed with status code " + s.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    ));
  }, te;
}
var re, Pe;
function rr() {
  if (Pe)
    return re;
  Pe = 1;
  var e = b;
  return re = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(n, s, o, u, l, g) {
        var w = [];
        w.push(n + "=" + encodeURIComponent(s)), e.isNumber(o) && w.push("expires=" + new Date(o).toGMTString()), e.isString(u) && w.push("path=" + u), e.isString(l) && w.push("domain=" + l), g === !0 && w.push("secure"), document.cookie = w.join("; ");
      },
      read: function(n) {
        var s = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return s ? decodeURIComponent(s[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
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
  }(), re;
}
var nr = function(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}, sr = function(t, r) {
  return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
}, ar = nr, or = sr, it = function(t, r) {
  return t && !ar(r) ? or(t, r) : r;
}, ne, ke;
function ir() {
  if (ke)
    return ne;
  ke = 1;
  var e = b, t = [
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
  return ne = function(n) {
    var s = {}, o, u, l;
    return n && e.forEach(n.split(`
`), function(w) {
      if (l = w.indexOf(":"), o = e.trim(w.substr(0, l)).toLowerCase(), u = e.trim(w.substr(l + 1)), o) {
        if (s[o] && t.indexOf(o) >= 0)
          return;
        o === "set-cookie" ? s[o] = (s[o] ? s[o] : []).concat([u]) : s[o] = s[o] ? s[o] + ", " + u : u;
      }
    }), s;
  }, ne;
}
var se, Fe;
function ur() {
  if (Fe)
    return se;
  Fe = 1;
  var e = b;
  return se = e.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a"), s;
    function o(u) {
      var l = u;
      return r && (n.setAttribute("href", l), l = n.href), n.setAttribute("href", l), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return s = o(window.location.href), function(l) {
      var g = e.isString(l) ? o(l) : l;
      return g.protocol === s.protocol && g.host === s.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), se;
}
var ae, Ne;
function X() {
  if (Ne)
    return ae;
  Ne = 1;
  var e = j, t = b;
  function r(n) {
    e.call(this, n == null ? "canceled" : n, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return t.inherits(r, e, {
    __CANCEL__: !0
  }), ae = r, ae;
}
var oe, Te;
function cr() {
  return Te || (Te = 1, oe = function(t) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return r && r[1] || "";
  }), oe;
}
var ie, Ue;
function De() {
  if (Ue)
    return ie;
  Ue = 1;
  var e = b, t = tr(), r = rr(), n = tt, s = it, o = ir(), u = ur(), l = at, g = j, w = X(), m = cr();
  return ie = function(h) {
    return new Promise(function(G, k) {
      var F = h.data, N = h.headers, i = h.responseType, c;
      function f() {
        h.cancelToken && h.cancelToken.unsubscribe(c), h.signal && h.signal.removeEventListener("abort", c);
      }
      e.isFormData(F) && e.isStandardBrowserEnv() && delete N["Content-Type"];
      var a = new XMLHttpRequest();
      if (h.auth) {
        var p = h.auth.username || "", E = h.auth.password ? unescape(encodeURIComponent(h.auth.password)) : "";
        N.Authorization = "Basic " + btoa(p + ":" + E);
      }
      var y = s(h.baseURL, h.url);
      a.open(h.method.toUpperCase(), n(y, h.params, h.paramsSerializer), !0), a.timeout = h.timeout;
      function R() {
        if (!!a) {
          var x = "getAllResponseHeaders" in a ? o(a.getAllResponseHeaders()) : null, $ = !i || i === "text" || i === "json" ? a.responseText : a.response, U = {
            data: $,
            status: a.status,
            statusText: a.statusText,
            headers: x,
            config: h,
            request: a
          };
          t(function(ee) {
            G(ee), f();
          }, function(ee) {
            k(ee), f();
          }, U), a = null;
        }
      }
      if ("onloadend" in a ? a.onloadend = R : a.onreadystatechange = function() {
        !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(R);
      }, a.onabort = function() {
        !a || (k(new g("Request aborted", g.ECONNABORTED, h, a)), a = null);
      }, a.onerror = function() {
        k(new g("Network Error", g.ERR_NETWORK, h, a, a)), a = null;
      }, a.ontimeout = function() {
        var $ = h.timeout ? "timeout of " + h.timeout + "ms exceeded" : "timeout exceeded", U = h.transitional || l;
        h.timeoutErrorMessage && ($ = h.timeoutErrorMessage), k(new g(
          $,
          U.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
          h,
          a
        )), a = null;
      }, e.isStandardBrowserEnv()) {
        var H = (h.withCredentials || u(y)) && h.xsrfCookieName ? r.read(h.xsrfCookieName) : void 0;
        H && (N[h.xsrfHeaderName] = H);
      }
      "setRequestHeader" in a && e.forEach(N, function($, U) {
        typeof F > "u" && U.toLowerCase() === "content-type" ? delete N[U] : a.setRequestHeader(U, $);
      }), e.isUndefined(h.withCredentials) || (a.withCredentials = !!h.withCredentials), i && i !== "json" && (a.responseType = h.responseType), typeof h.onDownloadProgress == "function" && a.addEventListener("progress", h.onDownloadProgress), typeof h.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", h.onUploadProgress), (h.cancelToken || h.signal) && (c = function(x) {
        !a || (k(!x || x && x.type ? new w() : x), a.abort(), a = null);
      }, h.cancelToken && h.cancelToken.subscribe(c), h.signal && (h.signal.aborted ? c() : h.signal.addEventListener("abort", c))), F || (F = null);
      var Z = m(y);
      if (Z && ["http", "https", "file"].indexOf(Z) === -1) {
        k(new g("Unsupported protocol " + Z + ":", g.ERR_BAD_REQUEST, h));
        return;
      }
      a.send(F);
    });
  }, ie;
}
var ue, $e;
function fr() {
  return $e || ($e = 1, ue = null), ue;
}
var C = b, _e = Zt, Ie = j, dr = at, lr = ot, pr = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function qe(e, t) {
  !C.isUndefined(e) && C.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
}
function hr() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = De()), e;
}
function mr(e, t, r) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
var K = {
  transitional: dr,
  adapter: hr(),
  transformRequest: [function(t, r) {
    if (_e(r, "Accept"), _e(r, "Content-Type"), C.isFormData(t) || C.isArrayBuffer(t) || C.isBuffer(t) || C.isStream(t) || C.isFile(t) || C.isBlob(t))
      return t;
    if (C.isArrayBufferView(t))
      return t.buffer;
    if (C.isURLSearchParams(t))
      return qe(r, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
    var n = C.isObject(t), s = r && r["Content-Type"], o;
    if ((o = C.isFileList(t)) || n && s === "multipart/form-data") {
      var u = this.env && this.env.FormData;
      return lr(o ? { "files[]": t } : t, u && new u());
    } else if (n || s === "application/json")
      return qe(r, "application/json"), mr(t);
    return t;
  }],
  transformResponse: [function(t) {
    var r = this.transitional || K.transitional, n = r && r.silentJSONParsing, s = r && r.forcedJSONParsing, o = !n && this.responseType === "json";
    if (o || s && C.isString(t) && t.length)
      try {
        return JSON.parse(t);
      } catch (u) {
        if (o)
          throw u.name === "SyntaxError" ? Ie.from(u, Ie.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: fr()
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
C.forEach(["delete", "get", "head"], function(t) {
  K.headers[t] = {};
});
C.forEach(["post", "put", "patch"], function(t) {
  K.headers[t] = C.merge(pr);
});
var Se = K, gr = b, yr = Se, vr = function(t, r, n) {
  var s = this || yr;
  return gr.forEach(n, function(u) {
    t = u.call(s, t, r);
  }), t;
}, ce, Le;
function ut() {
  return Le || (Le = 1, ce = function(t) {
    return !!(t && t.__CANCEL__);
  }), ce;
}
var je = b, fe = vr, wr = ut(), Er = Se, Cr = X();
function de(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Cr();
}
var br = function(t) {
  de(t), t.headers = t.headers || {}, t.data = fe.call(
    t,
    t.data,
    t.headers,
    t.transformRequest
  ), t.headers = je.merge(
    t.headers.common || {},
    t.headers[t.method] || {},
    t.headers
  ), je.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(s) {
      delete t.headers[s];
    }
  );
  var r = t.adapter || Er.adapter;
  return r(t).then(function(s) {
    return de(t), s.data = fe.call(
      t,
      s.data,
      s.headers,
      t.transformResponse
    ), s;
  }, function(s) {
    return wr(s) || (de(t), s && s.response && (s.response.data = fe.call(
      t,
      s.response.data,
      s.response.headers,
      t.transformResponse
    ))), Promise.reject(s);
  });
}, O = b, ct = function(t, r) {
  r = r || {};
  var n = {};
  function s(m, v) {
    return O.isPlainObject(m) && O.isPlainObject(v) ? O.merge(m, v) : O.isPlainObject(v) ? O.merge({}, v) : O.isArray(v) ? v.slice() : v;
  }
  function o(m) {
    if (O.isUndefined(r[m])) {
      if (!O.isUndefined(t[m]))
        return s(void 0, t[m]);
    } else
      return s(t[m], r[m]);
  }
  function u(m) {
    if (!O.isUndefined(r[m]))
      return s(void 0, r[m]);
  }
  function l(m) {
    if (O.isUndefined(r[m])) {
      if (!O.isUndefined(t[m]))
        return s(void 0, t[m]);
    } else
      return s(void 0, r[m]);
  }
  function g(m) {
    if (m in r)
      return s(t[m], r[m]);
    if (m in t)
      return s(void 0, t[m]);
  }
  var w = {
    url: u,
    method: u,
    data: u,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: g
  };
  return O.forEach(Object.keys(t).concat(Object.keys(r)), function(v) {
    var h = w[v] || o, S = h(v);
    O.isUndefined(S) && h !== g || (n[v] = S);
  }), n;
}, le, Be;
function ft() {
  return Be || (Be = 1, le = {
    version: "0.27.2"
  }), le;
}
var Rr = ft().version, T = j, Ae = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
  Ae[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var Me = {};
Ae.transitional = function(t, r, n) {
  function s(o, u) {
    return "[Axios v" + Rr + "] Transitional option '" + o + "'" + u + (n ? ". " + n : "");
  }
  return function(o, u, l) {
    if (t === !1)
      throw new T(
        s(u, " has been removed" + (r ? " in " + r : "")),
        T.ERR_DEPRECATED
      );
    return r && !Me[u] && (Me[u] = !0, console.warn(
      s(
        u,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, u, l) : !0;
  };
};
function Sr(e, t, r) {
  if (typeof e != "object")
    throw new T("options must be an object", T.ERR_BAD_OPTION_VALUE);
  for (var n = Object.keys(e), s = n.length; s-- > 0; ) {
    var o = n[s], u = t[o];
    if (u) {
      var l = e[o], g = l === void 0 || u(l, o, e);
      if (g !== !0)
        throw new T("option " + o + " must be " + g, T.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new T("Unknown option " + o, T.ERR_BAD_OPTION);
  }
}
var Ar = {
  assertOptions: Sr,
  validators: Ae
}, dt = b, Or = tt, He = Yt, We = br, Q = ct, xr = it, lt = Ar, I = lt.validators;
function L(e) {
  this.defaults = e, this.interceptors = {
    request: new He(),
    response: new He()
  };
}
L.prototype.request = function(t, r) {
  typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Q(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var n = r.transitional;
  n !== void 0 && lt.assertOptions(n, {
    silentJSONParsing: I.transitional(I.boolean),
    forcedJSONParsing: I.transitional(I.boolean),
    clarifyTimeoutError: I.transitional(I.boolean)
  }, !1);
  var s = [], o = !0;
  this.interceptors.request.forEach(function(S) {
    typeof S.runWhen == "function" && S.runWhen(r) === !1 || (o = o && S.synchronous, s.unshift(S.fulfilled, S.rejected));
  });
  var u = [];
  this.interceptors.response.forEach(function(S) {
    u.push(S.fulfilled, S.rejected);
  });
  var l;
  if (!o) {
    var g = [We, void 0];
    for (Array.prototype.unshift.apply(g, s), g = g.concat(u), l = Promise.resolve(r); g.length; )
      l = l.then(g.shift(), g.shift());
    return l;
  }
  for (var w = r; s.length; ) {
    var m = s.shift(), v = s.shift();
    try {
      w = m(w);
    } catch (h) {
      v(h);
      break;
    }
  }
  try {
    l = We(w);
  } catch (h) {
    return Promise.reject(h);
  }
  for (; u.length; )
    l = l.then(u.shift(), u.shift());
  return l;
};
L.prototype.getUri = function(t) {
  t = Q(this.defaults, t);
  var r = xr(t.baseURL, t.url);
  return Or(r, t.params, t.paramsSerializer);
};
dt.forEach(["delete", "get", "head", "options"], function(t) {
  L.prototype[t] = function(r, n) {
    return this.request(Q(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
dt.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, u, l) {
      return this.request(Q(l || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: u
      }));
    };
  }
  L.prototype[t] = r(), L.prototype[t + "Form"] = r(!0);
});
var Pr = L, pe, Je;
function kr() {
  if (Je)
    return pe;
  Je = 1;
  var e = X();
  function t(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var n;
    this.promise = new Promise(function(u) {
      n = u;
    });
    var s = this;
    this.promise.then(function(o) {
      if (!!s._listeners) {
        var u, l = s._listeners.length;
        for (u = 0; u < l; u++)
          s._listeners[u](o);
        s._listeners = null;
      }
    }), this.promise.then = function(o) {
      var u, l = new Promise(function(g) {
        s.subscribe(g), u = g;
      }).then(o);
      return l.cancel = function() {
        s.unsubscribe(u);
      }, l;
    }, r(function(u) {
      s.reason || (s.reason = new e(u), n(s.reason));
    });
  }
  return t.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, t.prototype.subscribe = function(n) {
    if (this.reason) {
      n(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(n) : this._listeners = [n];
  }, t.prototype.unsubscribe = function(n) {
    if (!!this._listeners) {
      var s = this._listeners.indexOf(n);
      s !== -1 && this._listeners.splice(s, 1);
    }
  }, t.source = function() {
    var n, s = new t(function(u) {
      n = u;
    });
    return {
      token: s,
      cancel: n
    };
  }, pe = t, pe;
}
var he, Ve;
function Fr() {
  return Ve || (Ve = 1, he = function(t) {
    return function(n) {
      return t.apply(null, n);
    };
  }), he;
}
var me, ze;
function Nr() {
  if (ze)
    return me;
  ze = 1;
  var e = b;
  return me = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, me;
}
var Xe = b, Tr = Ge, J = Pr, Ur = ct, Dr = Se;
function pt(e) {
  var t = new J(e), r = Tr(J.prototype.request, t);
  return Xe.extend(r, J.prototype, t), Xe.extend(r, t), r.create = function(s) {
    return pt(Ur(e, s));
  }, r;
}
var A = pt(Dr);
A.Axios = J;
A.CanceledError = X();
A.CancelToken = kr();
A.isCancel = ut();
A.VERSION = ft().version;
A.toFormData = ot;
A.AxiosError = j;
A.Cancel = A.CanceledError;
A.all = function(t) {
  return Promise.all(t);
};
A.spread = Fr();
A.isAxiosError = Nr();
ve.exports = A;
ve.exports.default = A;
(function(e) {
  e.exports = ve.exports;
})(Ye);
const $r = /* @__PURE__ */ Pt(Ye.exports), _r = (e) => !!(e != 408 && e.toString().startsWith("4") || e == 500), Ir = (e) => e.response && e.response.status || qr(e.message), qr = (e) => typeof e == "string" && e.startsWith("timeout of") ? 408 : typeof e == "string" && e.startsWith("Network Error") ? 0 : 500, Lr = (e) => {
  var t, r;
  return ((r = (t = e.response) == null ? void 0 : t.data) == null ? void 0 : r.errors) || [];
}, jr = (e) => [
  {
    detail: e.message,
    status: "",
    code: "",
    title: "",
    meta: {},
    source: {}
  }
];
async function Br(e) {
  const t = Ir(e), r = {
    messages: _r(t) ? Lr(e) : jr(e),
    statusCode: t
  };
  return Promise.reject(r);
}
function ht(e) {
  return e.data["sw-context-token"] || e.data.contextToken || e.headers["sw-context-token"];
}
function Mr(e) {
  return function(t) {
    const r = ht(t);
    return r && e({ contextToken: r }, t.config), t;
  };
}
const Hr = {
  endpoint: "https://pwa-demo-api.shopware.com/prev/",
  accessToken: "SWSC40-LJTNO6COUEN7CJMXKLA",
  contextToken: "",
  languageId: "",
  defaultPaginationLimit: 10,
  timeout: 1e4
};
var mt = {}, Wr = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`), gt = "%[a-f0-9]{2}", Ke = new RegExp(gt, "gi"), Qe = new RegExp("(" + gt + ")+", "gi");
function ye(e, t) {
  try {
    return decodeURIComponent(e.join(""));
  } catch {
  }
  if (e.length === 1)
    return e;
  t = t || 1;
  var r = e.slice(0, t), n = e.slice(t);
  return Array.prototype.concat.call([], ye(r), ye(n));
}
function Jr(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    for (var t = e.match(Ke), r = 1; r < t.length; r++)
      e = ye(t, r).join(""), t = e.match(Ke);
    return e;
  }
}
function Vr(e) {
  for (var t = {
    "%FE%FF": "\uFFFD\uFFFD",
    "%FF%FE": "\uFFFD\uFFFD"
  }, r = Qe.exec(e); r; ) {
    try {
      t[r[0]] = decodeURIComponent(r[0]);
    } catch {
      var n = Jr(r[0]);
      n !== r[0] && (t[r[0]] = n);
    }
    r = Qe.exec(e);
  }
  t["%C2"] = "\uFFFD";
  for (var s = Object.keys(t), o = 0; o < s.length; o++) {
    var u = s[o];
    e = e.replace(new RegExp(u, "g"), t[u]);
  }
  return e;
}
var zr = function(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
  try {
    return e = e.replace(/\+/g, " "), decodeURIComponent(e);
  } catch {
    return Vr(e);
  }
}, Xr = (e, t) => {
  if (!(typeof e == "string" && typeof t == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (t === "")
    return [e];
  const r = e.indexOf(t);
  return r === -1 ? [e] : [
    e.slice(0, r),
    e.slice(r + t.length)
  ];
}, Kr = function(e, t) {
  for (var r = {}, n = Object.keys(e), s = Array.isArray(t), o = 0; o < n.length; o++) {
    var u = n[o], l = e[u];
    (s ? t.indexOf(u) !== -1 : t(u, l, e)) && (r[u] = l);
  }
  return r;
};
(function(e) {
  const t = Wr, r = zr, n = Xr, s = Kr, o = (i) => i == null, u = Symbol("encodeFragmentIdentifier");
  function l(i) {
    switch (i.arrayFormat) {
      case "index":
        return (c) => (f, a) => {
          const p = f.length;
          return a === void 0 || i.skipNull && a === null || i.skipEmptyString && a === "" ? f : a === null ? [...f, [m(c, i), "[", p, "]"].join("")] : [
            ...f,
            [m(c, i), "[", m(p, i), "]=", m(a, i)].join("")
          ];
        };
      case "bracket":
        return (c) => (f, a) => a === void 0 || i.skipNull && a === null || i.skipEmptyString && a === "" ? f : a === null ? [...f, [m(c, i), "[]"].join("")] : [...f, [m(c, i), "[]=", m(a, i)].join("")];
      case "colon-list-separator":
        return (c) => (f, a) => a === void 0 || i.skipNull && a === null || i.skipEmptyString && a === "" ? f : a === null ? [...f, [m(c, i), ":list="].join("")] : [...f, [m(c, i), ":list=", m(a, i)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const c = i.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (f) => (a, p) => p === void 0 || i.skipNull && p === null || i.skipEmptyString && p === "" ? a : (p = p === null ? "" : p, a.length === 0 ? [[m(f, i), c, m(p, i)].join("")] : [[a, m(p, i)].join(i.arrayFormatSeparator)]);
      }
      default:
        return (c) => (f, a) => a === void 0 || i.skipNull && a === null || i.skipEmptyString && a === "" ? f : a === null ? [...f, m(c, i)] : [...f, [m(c, i), "=", m(a, i)].join("")];
    }
  }
  function g(i) {
    let c;
    switch (i.arrayFormat) {
      case "index":
        return (f, a, p) => {
          if (c = /\[(\d*)\]$/.exec(f), f = f.replace(/\[\d*\]$/, ""), !c) {
            p[f] = a;
            return;
          }
          p[f] === void 0 && (p[f] = {}), p[f][c[1]] = a;
        };
      case "bracket":
        return (f, a, p) => {
          if (c = /(\[\])$/.exec(f), f = f.replace(/\[\]$/, ""), !c) {
            p[f] = a;
            return;
          }
          if (p[f] === void 0) {
            p[f] = [a];
            return;
          }
          p[f] = [].concat(p[f], a);
        };
      case "colon-list-separator":
        return (f, a, p) => {
          if (c = /(:list)$/.exec(f), f = f.replace(/:list$/, ""), !c) {
            p[f] = a;
            return;
          }
          if (p[f] === void 0) {
            p[f] = [a];
            return;
          }
          p[f] = [].concat(p[f], a);
        };
      case "comma":
      case "separator":
        return (f, a, p) => {
          const E = typeof a == "string" && a.includes(i.arrayFormatSeparator), y = typeof a == "string" && !E && v(a, i).includes(i.arrayFormatSeparator);
          a = y ? v(a, i) : a;
          const R = E || y ? a.split(i.arrayFormatSeparator).map((H) => v(H, i)) : a === null ? a : v(a, i);
          p[f] = R;
        };
      case "bracket-separator":
        return (f, a, p) => {
          const E = /(\[\])$/.test(f);
          if (f = f.replace(/\[\]$/, ""), !E) {
            p[f] = a && v(a, i);
            return;
          }
          const y = a === null ? [] : a.split(i.arrayFormatSeparator).map((R) => v(R, i));
          if (p[f] === void 0) {
            p[f] = y;
            return;
          }
          p[f] = [].concat(p[f], y);
        };
      default:
        return (f, a, p) => {
          if (p[f] === void 0) {
            p[f] = a;
            return;
          }
          p[f] = [].concat(p[f], a);
        };
    }
  }
  function w(i) {
    if (typeof i != "string" || i.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function m(i, c) {
    return c.encode ? c.strict ? t(i) : encodeURIComponent(i) : i;
  }
  function v(i, c) {
    return c.decode ? r(i) : i;
  }
  function h(i) {
    return Array.isArray(i) ? i.sort() : typeof i == "object" ? h(Object.keys(i)).sort((c, f) => Number(c) - Number(f)).map((c) => i[c]) : i;
  }
  function S(i) {
    const c = i.indexOf("#");
    return c !== -1 && (i = i.slice(0, c)), i;
  }
  function G(i) {
    let c = "";
    const f = i.indexOf("#");
    return f !== -1 && (c = i.slice(f)), c;
  }
  function k(i) {
    i = S(i);
    const c = i.indexOf("?");
    return c === -1 ? "" : i.slice(c + 1);
  }
  function F(i, c) {
    return c.parseNumbers && !Number.isNaN(Number(i)) && typeof i == "string" && i.trim() !== "" ? i = Number(i) : c.parseBooleans && i !== null && (i.toLowerCase() === "true" || i.toLowerCase() === "false") && (i = i.toLowerCase() === "true"), i;
  }
  function N(i, c) {
    c = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, c), w(c.arrayFormatSeparator);
    const f = g(c), a = /* @__PURE__ */ Object.create(null);
    if (typeof i != "string" || (i = i.trim().replace(/^[?#&]/, ""), !i))
      return a;
    for (const p of i.split("&")) {
      if (p === "")
        continue;
      let [E, y] = n(c.decode ? p.replace(/\+/g, " ") : p, "=");
      y = y === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(c.arrayFormat) ? y : v(y, c), f(v(E, c), y, a);
    }
    for (const p of Object.keys(a)) {
      const E = a[p];
      if (typeof E == "object" && E !== null)
        for (const y of Object.keys(E))
          E[y] = F(E[y], c);
      else
        a[p] = F(E, c);
    }
    return c.sort === !1 ? a : (c.sort === !0 ? Object.keys(a).sort() : Object.keys(a).sort(c.sort)).reduce((p, E) => {
      const y = a[E];
      return Boolean(y) && typeof y == "object" && !Array.isArray(y) ? p[E] = h(y) : p[E] = y, p;
    }, /* @__PURE__ */ Object.create(null));
  }
  e.extract = k, e.parse = N, e.stringify = (i, c) => {
    if (!i)
      return "";
    c = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, c), w(c.arrayFormatSeparator);
    const f = (y) => c.skipNull && o(i[y]) || c.skipEmptyString && i[y] === "", a = l(c), p = {};
    for (const y of Object.keys(i))
      f(y) || (p[y] = i[y]);
    const E = Object.keys(p);
    return c.sort !== !1 && E.sort(c.sort), E.map((y) => {
      const R = i[y];
      return R === void 0 ? "" : R === null ? m(y, c) : Array.isArray(R) ? R.length === 0 && c.arrayFormat === "bracket-separator" ? m(y, c) + "[]" : R.reduce(a(y), []).join("&") : m(y, c) + "=" + m(R, c);
    }).filter((y) => y.length > 0).join("&");
  }, e.parseUrl = (i, c) => {
    c = Object.assign({
      decode: !0
    }, c);
    const [f, a] = n(i, "#");
    return Object.assign(
      {
        url: f.split("?")[0] || "",
        query: N(k(i), c)
      },
      c && c.parseFragmentIdentifier && a ? { fragmentIdentifier: v(a, c) } : {}
    );
  }, e.stringifyUrl = (i, c) => {
    c = Object.assign({
      encode: !0,
      strict: !0,
      [u]: !0
    }, c);
    const f = S(i.url).split("?")[0] || "", a = e.extract(i.url), p = e.parse(a, { sort: !1 }), E = Object.assign(p, i.query);
    let y = e.stringify(E, c);
    y && (y = `?${y}`);
    let R = G(i.url);
    return i.fragmentIdentifier && (R = `#${c[u] ? m(i.fragmentIdentifier, c) : i.fragmentIdentifier}`), `${f}${y}${R}`;
  }, e.pick = (i, c, f) => {
    f = Object.assign({
      parseFragmentIdentifier: !0,
      [u]: !1
    }, f);
    const { url: a, query: p, fragmentIdentifier: E } = e.parseUrl(i, f);
    return e.stringifyUrl({
      url: a,
      query: s(p, c),
      fragmentIdentifier: E
    }, f);
  }, e.exclude = (i, c, f) => {
    const a = Array.isArray(c) ? (p) => !c.includes(p) : (p, E) => !c(p, E);
    return e.pick(i, a, f);
  };
})(mt);
const Qr = "separator", Yr = "|", Gr = !0, Zr = !1, en = (e) => typeof e == "string" ? e : mt.stringify(e, {
  arrayFormat: Qr,
  arrayFormatSeparator: Yr,
  skipNull: Gr,
  sort: Zr
});
function tn(e = {}) {
  const t = [];
  let r = {};
  const n = $r.create();
  function s() {
    n.defaults.baseURL = r.endpoint, r.timeout && (n.defaults.timeout = typeof r.timeout == "number" && r.timeout || typeof r.timeout == "string" && parseInt(r.timeout) || 0), n.defaults.headers.common["sw-include-seo-urls"] = "true", n.defaults.headers.common["sw-access-key"] = r.accessToken, n.defaults.paramsSerializer = en, r.contextToken ? n.defaults.headers.common["sw-context-token"] = r.contextToken : delete n.defaults.headers.common["sw-context-token"], r.languageId ? n.defaults.headers.common["sw-language-id"] = r.languageId : delete n.defaults.headers.common["sw-language-id"];
  }
  function o(w) {
    t.push(w);
  }
  const u = function(w = {}) {
    r = Object.assign(r, Hr, w), s();
  };
  u(e);
  const l = function(w, m) {
    r = Object.assign(r, w), !window && process.env.NODE_ENV !== "production" && !t.length && m && console.warn(
      `[shopware-6-api] After calling API method ${m.url} there is no "onConfigChange" listener. See https://shopware-pwa-docs.vuestorefront.io/landing/fundamentals/security.html#context-awareness`
    ), t.forEach((v) => v({ config: r })), s();
  }, g = {
    post: n.post,
    put: n.put,
    get: n.get,
    patch: n.patch,
    delete: n.delete
  };
  return n.interceptors.response.use(
    Mr(l),
    Br
  ), {
    onConfigChange: o,
    config: r,
    setup: u,
    update: l,
    invoke: g,
    defaults: n.defaults,
    _axiosInstance: n
  };
}
function rn(e = {}) {
  const {
    onConfigChange: t,
    config: r,
    setup: n,
    update: s,
    invoke: o,
    defaults: u,
    _axiosInstance: l
  } = tn(e);
  return {
    onConfigChange: t,
    config: r,
    setup: n,
    update: (g = {}) => {
      s(g);
    },
    invoke: o,
    defaults: u,
    _axiosInstance: l
  };
}
const d = rn(), nn = () => "/store-api/category", sn = (e) => `/store-api/category/${e}`, an = (e) => `/store-api/landing-page/${e}`, on = (e) => `/store-api/product-listing/${e}`, un = () => "/store-api/product", yt = (e) => `/store-api/product/${e}`, cn = (e) => `/store-api/product/${e}/reviews`, fn = () => "/store-api/search-suggest", dn = () => "/store-api/search", ln = () => "/store-api/account/address", Y = (e) => e ? `/store-api/account/address/${e}` : "/store-api/account/list-address", vt = (e, t) => `/store-api/account/address/default-${e}/${t}`, pn = (e) => vt("billing", e), hn = (e) => vt("shipping", e), mn = () => "/store-api/account/customer", gn = () => "/store-api/account/register", yn = () => "/store-api/account/change-profile", vn = () => "/store-api/account/login", wn = () => "/store-api/account/logout", wt = () => "/store-api/order", En = () => "/store-api/account/change-email", Cn = () => "/store-api/account/change-password", bn = () => "/store-api/account/recovery-password", Rn = () => "/store-api/account/recovery-password-confirm", Sn = () => "/store-api/account/register-confirm", An = (e) => `/store-api/account/change-payment-method/${e}`, Et = () => "/store-api/checkout/cart", M = () => "/store-api/checkout/cart/line-item", On = () => "/store-api/checkout/order", xn = () => "/store-api/order/state/cancel", Pn = () => "/store-api/order/payment", Ct = () => "/store-api/context", kn = () => "/store-api/currency", Fn = () => "/store-api/language", bt = () => "/store-api/country", Rt = () => "/store-api/payment-method", St = () => "/store-api/shipping-method", At = () => "/store-api/salutation", Hn = () => "/newsletter/subscribe", Wn = () => "/newsletter/unsubscribe", Nn = () => "/store-api/account/newsletter-recipient", Tn = () => "/store-api/pwa/page", Ot = () => "/store-api/seo-url", Un = (e, t) => `/store-api/navigation/${e}/${t}`, Dn = () => "/store-api/contact-form", $n = () => "/store-api/handle-payment", _n = () => "/store-api/newsletter/subscribe", Jn = () => "/store-api/newsletter/confirm", In = () => "/store-api/newsletter/unsubscribe", qn = () => "/store-api/customer/wishlist", Ln = (e) => `/store-api/customer/wishlist/add/${e}`, jn = (e) => `/store-api/customer/wishlist/delete/${e}`, Bn = () => "/store-api/customer/wishlist/merge";
async function Vn(e, t = d) {
  return (await t.invoke.post(
    nn(),
    e
  )).data;
}
async function zn(e, t = d) {
  return (await t.invoke.get(
    sn(e)
  )).data;
}
async function Xn(e, t = d) {
  return (await t.invoke.post(`${un()}`, {
    ...e || {}
  })).data;
}
async function Kn(e, t, r = d) {
  return (await r.invoke.post(
    `${on(e)}`,
    t
  )).data;
}
async function Qn(e, t = null, r = d) {
  return (await r.invoke.post(
    yt(e),
    t
  )).data;
}
async function Yn(e, t, r = d) {
  await r.invoke.post(
    `${yt(e)}/review`,
    t
  );
}
async function Gn(e, t, r = d) {
  return (await r.invoke.post(
    `${cn(e)}`,
    {
      ...t || {}
    }
  )).data;
}
async function Zn(e, t = d) {
  return (await t.invoke.post(
    gn(),
    e
  )).data;
}
async function es({ username: e, password: t } = {}, r = d) {
  const n = await r.invoke.post(vn(), {
    username: e,
    password: t
  });
  return { contextToken: n.data["sw-context-token"] || n.data.contextToken };
}
async function ts(e = d) {
  await e.invoke.post(wn());
}
async function rs(e = {}, t = d) {
  try {
    return (await t.invoke.post(
      mn(),
      e
    )).data;
  } catch (r) {
    const n = r;
    if (n.statusCode === 403)
      return null;
    throw new Error("Unexpected getCustomerResponse. " + n);
  }
}
async function ns(e = {}, t = d) {
  return (await t.invoke.post(
    Y(),
    e
  )).data;
}
async function ss(e = {}, t = d) {
  return (await t.invoke.post(
    wt(),
    e
  )).data.orders;
}
async function as(e, t = d) {
  return (await t.invoke.get(
    Y(e)
  )).data.data;
}
async function os(e, t = d) {
  return (await t.invoke.post(
    ln(),
    e
  )).data;
}
async function is(e, t = d) {
  return (await t.invoke.patch(
    Y(e.id),
    e
  )).data;
}
async function us(e, t = d) {
  await t.invoke.delete(Y(e));
}
async function cs(e, t = d) {
  return (await t.invoke.patch(
    pn(e)
  )).data;
}
async function fs(e, t = d) {
  return (await t.invoke.patch(
    hn(e)
  )).data;
}
async function ds(e, t = d) {
  await t.invoke.post(En(), e);
}
async function ls(e, t = d) {
  await t.invoke.post(
    Cn(),
    e
  );
}
async function ps(e, t = d) {
  e && !e.storefrontUrl && (e.storefrontUrl = t.config.endpoint), await t.invoke.post(bn(), e);
}
async function hs(e, t = d) {
  !e || await t.invoke.post(Rn(), {
    newPasswordConfirm: e.newPassword,
    ...e
  });
}
async function ms(e, t = d) {
  await t.invoke.post(yn(), e);
}
async function gs(e, t = d) {
  return (await t.invoke.post(
    Sn(),
    e
  )).data;
}
async function ys(e, t = d) {
  return (await t.invoke.post(
    An(e)
  )).data;
}
async function vs(e = d) {
  return (await e.invoke.post(
    Nn()
  )).data;
}
async function B(e, t) {
  const r = await t.invoke.patch(Ct(), e);
  return { contextToken: ht(r) };
}
async function ws(e = d) {
  const { data: t } = await e.invoke.get(Ct());
  return t;
}
function Es(e, t = d) {
  return B({ shippingAddressId: e }, t);
}
function Cs(e, t = d) {
  return B({ billingAddressId: e }, t);
}
async function bs(e = d) {
  const { data: t } = await e.invoke.get(
    kn()
  );
  return t;
}
async function Rs(e, t = d) {
  return await B({ currencyId: e }, t);
}
async function Ss(e = d) {
  const { data: t } = await e.invoke.get(
    Fn()
  );
  return t;
}
async function As(e, t = d) {
  return await B({ languageId: e }, t);
}
async function Os(e = d) {
  const { data: t } = await e.invoke.get(
    bt()
  );
  return t;
}
async function xs(e = d) {
  return (await e.invoke.get(At())).data;
}
async function Ps(e = d, t = {}) {
  return (await e.invoke.get(
    Rt(),
    {
      params: t
    }
  )).data;
}
async function ks(e, t = d) {
  var n;
  const { data: r } = await t.invoke.get(
    Rt(),
    {
      params: {
        "filter[id]": e
      }
    }
  );
  return (n = r == null ? void 0 : r.elements) == null ? void 0 : n[0];
}
async function Fs(e, t = d) {
  return await B({ paymentMethodId: e }, t);
}
async function Ns(e = d, t = {}) {
  return (await e.invoke.get(
    St(),
    {
      params: t
    }
  )).data;
}
async function Ts(e, t = d) {
  var n;
  const { data: r } = await t.invoke.get(
    St(),
    {
      params: {
        "filter[id]": e
      }
    }
  );
  return (n = r == null ? void 0 : r.elements) == null ? void 0 : n[0];
}
async function Us(e, t = d) {
  return await B({ shippingMethodId: e }, t);
}
async function Ds(e, t = d) {
  var n;
  const { data: r } = await t.invoke.get(
    bt(),
    {
      params: {
        "filter[id]": e
      }
    }
  );
  return (n = r == null ? void 0 : r.elements) == null ? void 0 : n[0];
}
async function $s(e, t = d) {
  var n;
  const { data: r } = await t.invoke.get(
    At(),
    {
      params: {
        "filter[id]": e
      }
    }
  );
  return (n = r == null ? void 0 : r.elements) == null ? void 0 : n[0];
}
async function _s(e = d) {
  return { contextToken: (await e.invoke.post(Et())).data["sw-context-token"] };
}
async function Is(e = d) {
  return (await e.invoke.get(Et())).data;
}
async function qs(e, t, r = d) {
  const s = {
    quantity: t || 1,
    type: "product",
    referencedId: e,
    id: e
  };
  return (await r.invoke.post(
    M(),
    {
      items: [s]
    }
  )).data;
}
async function Ls(e, t = 1, r = d) {
  const n = {
    items: [
      {
        id: e,
        quantity: parseInt(t.toString(), 10)
      }
    ]
  };
  return (await r.invoke.patch(
    M(),
    n
  )).data;
}
async function js(e, t = d) {
  return (await t.invoke.delete(
    `${M()}?ids[]=${e}`
  )).data;
}
async function Bs(e, t = d) {
  const r = {
    type: "promotion",
    referencedId: e
  };
  return (await t.invoke.post(
    M(),
    {
      items: [r]
    }
  )).data;
}
async function Ms(e, t = d) {
  return (await t.invoke.post(
    M(),
    {
      items: e
    }
  )).data;
}
async function Hs({
  requestActiveId: e,
  requestRootId: t,
  depth: r,
  buildTree: n,
  searchCriteria: s
}, o = d) {
  return (await o.invoke.post(
    Un(e, t),
    {
      ...s || {},
      depth: r,
      buildTree: n
    }
  )).data;
}
function Mn({
  address: e,
  payload: t
}, r = d) {
  return r.invoke.post(e, t);
}
function Ws({ address: e }, t = d) {
  return t.invoke.get(e);
}
async function Js(e, t, r = d) {
  return (await r.invoke.post(Tn(), {
    path: e,
    ...t
  })).data;
}
async function Vs(e, t, r = d) {
  const n = an(e), s = await r.invoke.post(n, t);
  return s == null ? void 0 : s.data;
}
async function zs(e, t, r = d) {
  return t && (r.defaults.headers.common["sw-language-id"] = t), (await r.invoke.post(Ot(), {
    filter: [
      {
        type: "equals",
        field: "foreignKey",
        value: e
      }
    ],
    includes: {
      seo_url: ["seoPathInfo"]
    }
  })).data;
}
async function Xs(e, t = d) {
  return (await Mn(
    {
      address: Ot(),
      payload: e
    },
    t
  )).data;
}
async function Ks(e, t = d) {
  return (await t.invoke.post(
    On(),
    e
  )).data;
}
async function Qs(e, t = d) {
  if (!(e != null && e.orderId))
    throw new Error("handlePayment method requires orderId");
  return navigator != null && navigator.userAgent.includes("WebKit") && typeof sessionStorage < "u" && sessionStorage.setItem(
    "sw-context-token",
    t.config.contextToken
  ), (await t.invoke.get($n(), {
    params: e
  })).data;
}
async function Ys(e, t, r = d) {
  var s, o, u;
  return (u = (o = (s = (await r.invoke.post(
    wt(),
    Object.assign({}, t, {
      filter: [
        {
          type: "equals",
          field: "id",
          value: e
        }
      ]
    })
  )).data) == null ? void 0 : s.orders) == null ? void 0 : o.elements) == null ? void 0 : u[0];
}
async function Gs(e, t = d) {
  return (await t.invoke.post(xn(), {
    orderId: e
  })).data;
}
async function Zs(e, t, r = d) {
  return (await r.invoke.post(
    Pn(),
    {
      orderId: e,
      paymentMethodId: t
    }
  )).data;
}
async function ea(e, t = d) {
  return (await t.invoke.post(
    `${dn()}?search=${encodeURIComponent(
      (e == null ? void 0 : e.query) || ""
    )}`,
    e
  )).data;
}
async function ta(e, t = d) {
  return (await t.invoke.post(
    `${fn()}?search=${encodeURIComponent(
      (e == null ? void 0 : e.query) || ""
    )}`,
    e
  )).data;
}
async function ra(e, t = d) {
  await t.invoke.post(Dn(), e);
}
async function na(e, t = d) {
  await t.invoke.post(
    _n(),
    Object.assign({}, { option: "subscribe" }, e)
  );
}
async function sa(e, t = d) {
  await t.invoke.post(
    In(),
    e
  );
}
async function aa(e, t = d) {
  return (await t.invoke.post(
    Ln(e)
  )).data;
}
async function oa(e, t = d) {
  return (await t.invoke.post(
    qn(),
    e
  )).data;
}
async function ia(e, t = d) {
  return (await t.invoke.delete(
    jn(e)
  )).data;
}
async function ua(e, t = d) {
  return (await t.invoke.post(
    Bn(),
    { productIds: e }
  )).data;
}
const ca = d.config, fa = d.setup, da = d.update, la = d.onConfigChange;
export {
  Ms as addCartItems,
  Yn as addProductReview,
  qs as addProductToCart,
  Bs as addPromotionCode,
  aa as addWishlistProduct,
  Gs as cancelOrder,
  Ls as changeCartItemQuantity,
  Zs as changeOrderPaymentMethod,
  _s as clearCart,
  ca as config,
  gs as confirmAccountRegistration,
  hs as confirmPasswordReset,
  os as createCustomerAddress,
  rn as createInstance,
  Ks as createOrder,
  us as deleteCustomerAddress,
  Ln as getAddWishlistProductEndpoint,
  Os as getAvailableCountries,
  bs as getAvailableCurrencies,
  Ss as getAvailableLanguages,
  Ps as getAvailablePaymentMethods,
  xs as getAvailableSalutations,
  Ns as getAvailableShippingMethods,
  xn as getCancelOrderEndpoint,
  Is as getCart,
  Vn as getCategories,
  zn as getCategory,
  sn as getCategoryDetailsEndpoint,
  nn as getCategoryEndpoint,
  Kn as getCategoryProducts,
  Pn as getChangeOrderPaymentMethodEndpoint,
  Et as getCheckoutCartEndpoint,
  M as getCheckoutCartLineItemEndpoint,
  On as getCheckoutOrderEndpoint,
  Js as getCmsPage,
  Rn as getConfirmPasswordResetEndpoint,
  Dn as getContactFormEndpoint,
  bt as getContextCountryEndpoint,
  kn as getContextCurrencyEndpoint,
  Ct as getContextEndpoint,
  Fn as getContextLanguageEndpoint,
  Rt as getContextPaymentMethodEndpoint,
  At as getContextSalutationEndpoint,
  St as getContextShippingMethodEndpoint,
  rs as getCustomer,
  Sn as getCustomerAccountConfirmEndpoint,
  ln as getCustomerAddAddressEndpoint,
  as as getCustomerAddress,
  Y as getCustomerAddressEndpoint,
  ns as getCustomerAddresses,
  pn as getCustomerDefaultBillingAddressEndpoint,
  hn as getCustomerDefaultShippingAddressEndpoint,
  yn as getCustomerDetailsUpdateEndpoint,
  mn as getCustomerEndpoint,
  vn as getCustomerLoginEndpoint,
  wn as getCustomerLogoutEndpoint,
  wt as getCustomerOrderEndpoint,
  ss as getCustomerOrders,
  gn as getCustomerRegisterEndpoint,
  bn as getCustomerResetPasswordEndpoint,
  En as getCustomerUpdateEmailEndpoint,
  Cn as getCustomerUpdatePasswordEndpoint,
  An as getCustomerUpdatePaymentMethodEndpoint,
  qn as getGetWishlistProductsEndpoint,
  Vs as getLandingPage,
  an as getLandingPageDetailsEndpoint,
  Bn as getMergeWishlistProductsEndpoint,
  Nn as getNewsletterRecipientEndpoint,
  Hn as getNewsletterSubscribeEndpoint,
  Wn as getNewsletterUnsubscribeEndpoint,
  Ys as getOrderDetails,
  Tn as getPageResolverEndpoint,
  ks as getPaymentMethodDetails,
  Qn as getProduct,
  yt as getProductDetailsEndpoint,
  un as getProductEndpoint,
  on as getProductListingEndpoint,
  Gn as getProductReviews,
  cn as getProductReviewsEndpoint,
  Xn as getProducts,
  jn as getRemoveWishlistProductEndpoint,
  dn as getSearchEndpoint,
  Xs as getSeoUrl,
  Ot as getSeoUrlEndpoint,
  zs as getSeoUrls,
  ws as getSessionContext,
  Ts as getShippingMethodDetails,
  Hs as getStoreNavigation,
  Un as getStoreNavigationEndpoint,
  Jn as getStoreNewsletterConfirmEndpoint,
  _n as getStoreNewsletterSubscribeEndpoint,
  In as getStoreNewsletterUnsubscribeEndpoint,
  fn as getSuggestSearchEndpoint,
  Ds as getUserCountry,
  $s as getUserSalutation,
  oa as getWishlistProducts,
  Qs as handlePayment,
  $n as handlePaymentEndpoint,
  Ws as invokeGet,
  Mn as invokePost,
  vs as isNewsletterSubscriber,
  es as login,
  ts as logout,
  ua as mergeWishlistProducts,
  na as newsletterSubscribe,
  sa as newsletterUnsubscribe,
  la as onConfigChange,
  Zn as register,
  js as removeCartItem,
  ia as removeWishlistProduct,
  ps as resetPassword,
  ea as searchProducts,
  ta as searchSuggestedProducts,
  ra as sendContactForm,
  Cs as setCurrentBillingAddress,
  Rs as setCurrentCurrency,
  As as setCurrentLanguage,
  Fs as setCurrentPaymentMethod,
  Es as setCurrentShippingAddress,
  Us as setCurrentShippingMethod,
  cs as setDefaultCustomerBillingAddress,
  ys as setDefaultCustomerPaymentMethod,
  fs as setDefaultCustomerShippingAddress,
  fa as setup,
  da as update,
  is as updateCustomerAddress,
  ds as updateEmail,
  ls as updatePassword,
  ms as updateProfile
};
