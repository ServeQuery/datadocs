(window.webpackJsonp = window.webpackJsonp || []).push([[0], []]);
!(function (e) {
  function t(t) {
    for (
      var r, l, a = t[0], s = t[1], u = t[2], f = 0, p = [];
      f < a.length;
      f++
    )
      (l = a[f]),
        Object.prototype.hasOwnProperty.call(o, l) && o[l] && p.push(o[l][0]),
        (o[l] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    for (c && c(t); p.length; ) p.shift()();
    return i.push.apply(i, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, a = 1; a < n.length; a++) {
        var s = n[a];
        0 !== o[s] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = l((l.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { 8: 0 },
    i = [];
  function l(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, l), (n.l = !0), n.exports;
  }
  (l.e = function (e) {
    var t = [],
      n = o[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function (t, r) {
          n = o[e] = [t, r];
        });
        t.push((n[2] = r));
        var i,
          a = document.createElement("script");
        (a.charset = "utf-8"),
          (a.timeout = 120),
          l.nc && a.setAttribute("nonce", l.nc),
          (a.src = (function (e) {
            return (
              l.p +
              "assets/js/" +
              ({ 9: "vendors~docsearch" }[e] || e) +
              "." +
              {
                1: "4cf93525",
                2: "cc1498ed",
                3: "43a4f8b6",
                4: "f08101d4",
                5: "ee41f281",
                6: "6f9d5413",
                7: "a14c2095",
                9: "19933dad",
                10: "4c86d087",
                11: "74beb395",
                12: "f1c05ad9",
                13: "0fcd0c7f",
                14: "de87e3ae",
                15: "db5e06a7",
                16: "24bfe88f",
                17: "eb2869e6",
                18: "41c19cd3",
                19: "337caa79",
                20: "2afb5c6f",
                21: "375f51f2",
                22: "55e67d05",
                23: "8dad78ad",
                24: "b2f1aa2b",
                25: "599498ea",
                26: "65b729b0",
                27: "16fb9cda",
                28: "de3dcb71",
                29: "bd6dc83b",
                30: "a3c88fad",
                31: "2f810d02",
                32: "a6ec738f",
                33: "6f7e622e",
                34: "4efe643b",
                35: "60cea66b",
                36: "c99eebc7",
                37: "2ec74e66",
                38: "9f7f30f6",
                39: "a2ff12eb",
                40: "aa1d088e",
                41: "69b1f2f9",
                42: "65f99106",
                43: "58f5582d",
                44: "8be177d8",
                45: "79ebf826",
                46: "1eee149f",
                47: "1242c6c5",
                48: "b2baaaba",
              }[e] +
              ".js"
            );
          })(e));
        var s = new Error();
        i = function (t) {
          (a.onerror = a.onload = null), clearTimeout(u);
          var n = o[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                i = t && t.target && t.target.src;
              (s.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + i + ")"),
                (s.name = "ChunkLoadError"),
                (s.type = r),
                (s.request = i),
                n[1](s);
            }
            o[e] = void 0;
          }
        };
        var u = setTimeout(function () {
          i({ type: "timeout", target: a });
        }, 12e4);
        (a.onerror = a.onload = i), document.head.appendChild(a);
      }
    return Promise.all(t);
  }),
    (l.m = e),
    (l.c = r),
    (l.d = function (e, t, n) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (l.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.t = function (e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (l.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          l.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (l.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return l.d(t, "a", t), t;
    }),
    (l.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = "/DataDocs/"),
    (l.oe = function (e) {
      throw (console.error(e), e);
    });
  var a = (window.webpackJsonp = window.webpackJsonp || []),
    s = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var u = 0; u < a.length; u++) t(a[u]);
  var c = s;
  i.push([97, 0]), n();
})([
  function (e, t, n) {
    "use strict";
    var r = function (e) {
      return e && e.Math === Math && e;
    };
    e.exports =
      r("object" == typeof globalThis && globalThis) ||
      r("object" == typeof window && window) ||
      r("object" == typeof self && self) ||
      r("object" == typeof global && global) ||
      r("object" == typeof this && this) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  },
  function (e, t, n) {
    "use strict";
    var r = "object" == typeof document && document.all;
    e.exports =
      void 0 === r && void 0 !== r
        ? function (e) {
            return "function" == typeof e || e === r;
          }
        : function (e) {
            return "function" == typeof e;
          };
  },
  function (e, t, n) {
    "use strict";
    var r = n(25),
      o = Function.prototype,
      i = o.call,
      l = r && o.bind.bind(i, i);
    e.exports = r
      ? l
      : function (e) {
          return function () {
            return i.apply(e, arguments);
          };
        };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t) {
    var n = Array.isArray;
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = !r(function () {
      return (
        7 !==
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : r(e);
    };
  },
  function (e, t, n) {
    var r = n(64),
      o = "object" == typeof self && self && self.Object === Object && self,
      i = r || o || Function("return this")();
    e.exports = i;
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      o = n(34),
      i = r({}.hasOwnProperty);
    e.exports =
      Object.hasOwn ||
      function (e, t) {
        return i(o(e), t);
      };
  },
  function (e, t, n) {
    var r = n(161),
      o = n(164);
    e.exports = function (e, t) {
      var n = o(e, t);
      return r(n) ? n : void 0;
    };
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n, r, o, i, l, a) {
      var s,
        u = "function" == typeof e ? e.options : e;
      if (
        (t && ((u.render = t), (u.staticRenderFns = n), (u._compiled = !0)),
        r && (u.functional = !0),
        i && (u._scopeId = "data-v-" + i),
        l
          ? ((s = function (e) {
              (e =
                e ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent &&
                  this.parent.$vnode &&
                  this.parent.$vnode.ssrContext)) ||
                "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                (e = __VUE_SSR_CONTEXT__),
                o && o.call(this, e),
                e && e._registeredComponents && e._registeredComponents.add(l);
            }),
            (u._ssrRegister = s))
          : o &&
            (s = a
              ? function () {
                  o.call(
                    this,
                    (u.functional ? this.parent : this).$root.$options
                      .shadowRoot
                  );
                }
              : o),
        s)
      )
        if (u.functional) {
          u._injectStyles = s;
          var c = u.render;
          u.render = function (e, t) {
            return s.call(t), c(e, t);
          };
        } else {
          var f = u.beforeCreate;
          u.beforeCreate = f ? [].concat(f, s) : [s];
        }
      return { exports: e, options: u };
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  function (e, t) {
    e.exports = function (e) {
      return null != e && "object" == typeof e;
    };
  },
  function (e, t, n) {
    var r = n(14),
      o = n(146),
      i = n(147),
      l = r ? r.toStringTag : void 0;
    e.exports = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : l && l in Object(e)
        ? o(e)
        : i(e);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(5),
      o = n(15),
      i = n(26);
    e.exports = r
      ? function (e, t, n) {
          return o.f(e, t, i(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  function (e, t, n) {
    var r = n(7).Symbol;
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    var r = n(5),
      o = n(57),
      i = n(106),
      l = n(58),
      a = n(48),
      s = TypeError,
      u = Object.defineProperty,
      c = Object.getOwnPropertyDescriptor;
    t.f = r
      ? i
        ? function (e, t, n) {
            if (
              (l(e),
              (t = a(t)),
              l(n),
              "function" == typeof e &&
                "prototype" === t &&
                "value" in n &&
                "writable" in n &&
                !n.writable)
            ) {
              var r = c(e, t);
              r &&
                r.writable &&
                ((e[t] = n.value),
                (n = {
                  configurable:
                    "configurable" in n ? n.configurable : r.configurable,
                  enumerable: "enumerable" in n ? n.enumerable : r.enumerable,
                  writable: !1,
                }));
            }
            return u(e, t, n);
          }
        : u
      : function (e, t, n) {
          if ((l(e), (t = a(t)), l(n), o))
            try {
              return u(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n) throw new s("Accessors not supported");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      o = r({}.toString),
      i = r("".slice);
    e.exports = function (e) {
      return i(o(e), 8, -1);
    };
  },
  function (e, t, n) {
    var r = n(151),
      o = n(152),
      i = n(153),
      l = n(154),
      a = n(155);
    function s(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    (s.prototype.clear = r),
      (s.prototype.delete = o),
      (s.prototype.get = i),
      (s.prototype.has = l),
      (s.prototype.set = a),
      (e.exports = s);
  },
  function (e, t, n) {
    var r = n(66);
    e.exports = function (e, t) {
      for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
      return -1;
    };
  },
  function (e, t, n) {
    var r = n(9)(Object, "create");
    e.exports = r;
  },
  function (e, t, n) {
    var r = n(173);
    e.exports = function (e, t) {
      var n = e.__data__;
      return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
    };
  },
  function (e, t, n) {
    var r = n(43);
    e.exports = function (e) {
      if ("string" == typeof e || r(e)) return e;
      var t = e + "";
      return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
    };
  },
  function (e, t, n) {
    var r, o;
    /* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
     * @license MIT */ void 0 ===
      (o =
        "function" ==
        typeof (r = function () {
          var e,
            t,
            n = { version: "0.2.0" },
            r = (n.settings = {
              minimum: 0.08,
              easing: "ease",
              positionUsing: "",
              speed: 200,
              trickle: !0,
              trickleRate: 0.02,
              trickleSpeed: 800,
              showSpinner: !0,
              barSelector: '[role="bar"]',
              spinnerSelector: '[role="spinner"]',
              parent: "body",
              template:
                '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
            });
          function o(e, t, n) {
            return e < t ? t : e > n ? n : e;
          }
          function i(e) {
            return 100 * (-1 + e);
          }
          (n.configure = function (e) {
            var t, n;
            for (t in e)
              void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (r[t] = n);
            return this;
          }),
            (n.status = null),
            (n.set = function (e) {
              var t = n.isStarted();
              (e = o(e, r.minimum, 1)), (n.status = 1 === e ? null : e);
              var s = n.render(!t),
                u = s.querySelector(r.barSelector),
                c = r.speed,
                f = r.easing;
              return (
                s.offsetWidth,
                l(function (t) {
                  "" === r.positionUsing &&
                    (r.positionUsing = n.getPositioningCSS()),
                    a(
                      u,
                      (function (e, t, n) {
                        var o;
                        return (
                          ((o =
                            "translate3d" === r.positionUsing
                              ? { transform: "translate3d(" + i(e) + "%,0,0)" }
                              : "translate" === r.positionUsing
                              ? { transform: "translate(" + i(e) + "%,0)" }
                              : { "margin-left": i(e) + "%" }).transition =
                            "all " + t + "ms " + n),
                          o
                        );
                      })(e, c, f)
                    ),
                    1 === e
                      ? (a(s, { transition: "none", opacity: 1 }),
                        s.offsetWidth,
                        setTimeout(function () {
                          a(s, {
                            transition: "all " + c + "ms linear",
                            opacity: 0,
                          }),
                            setTimeout(function () {
                              n.remove(), t();
                            }, c);
                        }, c))
                      : setTimeout(t, c);
                }),
                this
              );
            }),
            (n.isStarted = function () {
              return "number" == typeof n.status;
            }),
            (n.start = function () {
              n.status || n.set(0);
              var e = function () {
                setTimeout(function () {
                  n.status && (n.trickle(), e());
                }, r.trickleSpeed);
              };
              return r.trickle && e(), this;
            }),
            (n.done = function (e) {
              return e || n.status
                ? n.inc(0.3 + 0.5 * Math.random()).set(1)
                : this;
            }),
            (n.inc = function (e) {
              var t = n.status;
              return t
                ? ("number" != typeof e &&
                    (e = (1 - t) * o(Math.random() * t, 0.1, 0.95)),
                  (t = o(t + e, 0, 0.994)),
                  n.set(t))
                : n.start();
            }),
            (n.trickle = function () {
              return n.inc(Math.random() * r.trickleRate);
            }),
            (e = 0),
            (t = 0),
            (n.promise = function (r) {
              return r && "resolved" !== r.state()
                ? (0 === t && n.start(),
                  e++,
                  t++,
                  r.always(function () {
                    0 == --t ? ((e = 0), n.done()) : n.set((e - t) / e);
                  }),
                  this)
                : this;
            }),
            (n.render = function (e) {
              if (n.isRendered()) return document.getElementById("nprogress");
              u(document.documentElement, "nprogress-busy");
              var t = document.createElement("div");
              (t.id = "nprogress"), (t.innerHTML = r.template);
              var o,
                l = t.querySelector(r.barSelector),
                s = e ? "-100" : i(n.status || 0),
                c = document.querySelector(r.parent);
              return (
                a(l, {
                  transition: "all 0 linear",
                  transform: "translate3d(" + s + "%,0,0)",
                }),
                r.showSpinner ||
                  ((o = t.querySelector(r.spinnerSelector)) && p(o)),
                c != document.body && u(c, "nprogress-custom-parent"),
                c.appendChild(t),
                t
              );
            }),
            (n.remove = function () {
              c(document.documentElement, "nprogress-busy"),
                c(document.querySelector(r.parent), "nprogress-custom-parent");
              var e = document.getElementById("nprogress");
              e && p(e);
            }),
            (n.isRendered = function () {
              return !!document.getElementById("nprogress");
            }),
            (n.getPositioningCSS = function () {
              var e = document.body.style,
                t =
                  "WebkitTransform" in e
                    ? "Webkit"
                    : "MozTransform" in e
                    ? "Moz"
                    : "msTransform" in e
                    ? "ms"
                    : "OTransform" in e
                    ? "O"
                    : "";
              return t + "Perspective" in e
                ? "translate3d"
                : t + "Transform" in e
                ? "translate"
                : "margin";
            });
          var l = (function () {
              var e = [];
              function t() {
                var n = e.shift();
                n && n(t);
              }
              return function (n) {
                e.push(n), 1 == e.length && t();
              };
            })(),
            a = (function () {
              var e = ["Webkit", "O", "Moz", "ms"],
                t = {};
              function n(n) {
                return (
                  (n = n
                    .replace(/^-ms-/, "ms-")
                    .replace(/-([\da-z])/gi, function (e, t) {
                      return t.toUpperCase();
                    })),
                  t[n] ||
                    (t[n] = (function (t) {
                      var n = document.body.style;
                      if (t in n) return t;
                      for (
                        var r,
                          o = e.length,
                          i = t.charAt(0).toUpperCase() + t.slice(1);
                        o--;

                      )
                        if ((r = e[o] + i) in n) return r;
                      return t;
                    })(n))
                );
              }
              function r(e, t, r) {
                (t = n(t)), (e.style[t] = r);
              }
              return function (e, t) {
                var n,
                  o,
                  i = arguments;
                if (2 == i.length)
                  for (n in t)
                    void 0 !== (o = t[n]) && t.hasOwnProperty(n) && r(e, n, o);
                else r(e, i[1], i[2]);
              };
            })();
          function s(e, t) {
            return (
              ("string" == typeof e ? e : f(e)).indexOf(" " + t + " ") >= 0
            );
          }
          function u(e, t) {
            var n = f(e),
              r = n + t;
            s(n, t) || (e.className = r.substring(1));
          }
          function c(e, t) {
            var n,
              r = f(e);
            s(e, t) &&
              ((n = r.replace(" " + t + " ", " ")),
              (e.className = n.substring(1, n.length - 1)));
          }
          function f(e) {
            return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
          }
          function p(e) {
            e && e.parentNode && e.parentNode.removeChild(e);
          }
          return n;
        })
          ? r.call(t, n, t, e)
          : r) || (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(45).f,
      i = n(13),
      l = n(93),
      a = n(33),
      s = n(60),
      u = n(121);
    e.exports = function (e, t) {
      var n,
        c,
        f,
        p,
        d,
        h = e.target,
        g = e.global,
        v = e.stat;
      if ((n = g ? r : v ? r[h] || a(h, {}) : r[h] && r[h].prototype))
        for (c in t) {
          if (
            ((p = t[c]),
            (f = e.dontCallGetSet ? (d = o(n, c)) && d.value : n[c]),
            !u(g ? c : h + (v ? "." : "#") + c, e.forced) && void 0 !== f)
          ) {
            if (typeof p == typeof f) continue;
            s(p, f);
          }
          (e.sham || (f && f.sham)) && i(p, "sham", !0), l(n, c, p, e);
        }
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(25),
      o = Function.prototype.call;
    e.exports = r
      ? o.bind(o)
      : function () {
          return o.apply(o, arguments);
        };
  },
  function (e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = !r(function () {
      var e = function () {}.bind();
      return "function" != typeof e || e.hasOwnProperty("prototype");
    });
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(46),
      o = n(28);
    e.exports = function (e) {
      return r(o(e));
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(47),
      o = TypeError;
    e.exports = function (e) {
      if (r(e)) throw new o("Can't call method on " + e);
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(1),
      i = function (e) {
        return o(e) ? e : void 0;
      };
    e.exports = function (e, t) {
      return arguments.length < 2 ? i(r[e]) : r[e] && r[e][t];
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      o = n(103),
      i = TypeError;
    e.exports = function (e) {
      if (r(e)) return e;
      throw new i(o(e) + " is not a function");
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(54),
      i = n(8),
      l = n(56),
      a = n(52),
      s = n(51),
      u = r.Symbol,
      c = o("wks"),
      f = s ? u.for || u : (u && u.withoutSetter) || l;
    e.exports = function (e) {
      return i(c, e) || (c[e] = a && i(u, e) ? u[e] : f("Symbol." + e)), c[e];
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(55),
      o = n(0),
      i = n(33),
      l = (e.exports = o["__core-js_shared__"] || i("__core-js_shared__", {}));
    (l.versions || (l.versions = [])).push({
      version: "3.36.1",
      mode: r ? "pure" : "global",
      copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",
      source: "https://github.com/zloirock/core-js",
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = Object.defineProperty;
    e.exports = function (e, t) {
      try {
        o(r, e, { value: t, configurable: !0, writable: !0 });
      } catch (n) {
        r[e] = t;
      }
      return t;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(28),
      o = Object;
    e.exports = function (e) {
      return o(r(e));
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(118);
    e.exports = function (e) {
      return r(e.length);
    };
  },
  function (e, t, n) {
    var r = n(145),
      o = n(11),
      i = Object.prototype,
      l = i.hasOwnProperty,
      a = i.propertyIsEnumerable,
      s = r(
        (function () {
          return arguments;
        })()
      )
        ? r
        : function (e) {
            return o(e) && l.call(e, "callee") && !a.call(e, "callee");
          };
    e.exports = s;
  },
  function (e, t, n) {
    var r = n(9)(n(7), "Map");
    e.exports = r;
  },
  function (e, t) {
    e.exports = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
  },
  function (e, t, n) {
    var r = n(165),
      o = n(172),
      i = n(174),
      l = n(175),
      a = n(176);
    function s(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    (s.prototype.clear = r),
      (s.prototype.delete = o),
      (s.prototype.get = i),
      (s.prototype.has = l),
      (s.prototype.set = a),
      (e.exports = s);
  },
  function (e, t) {
    e.exports = function (e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (e) {
          n[++t] = e;
        }),
        n
      );
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
      );
    };
  },
  function (e, t, n) {
    var r = n(4),
      o = n(43),
      i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      l = /^\w*$/;
    e.exports = function (e, t) {
      if (r(e)) return !1;
      var n = typeof e;
      return (
        !(
          "number" != n &&
          "symbol" != n &&
          "boolean" != n &&
          null != e &&
          !o(e)
        ) ||
        l.test(e) ||
        !i.test(e) ||
        (null != t && e in Object(t))
      );
    };
  },
  function (e, t, n) {
    var r = n(12),
      o = n(11);
    e.exports = function (e) {
      return "symbol" == typeof e || (o(e) && "[object Symbol]" == r(e));
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(5),
      o = n(24),
      i = n(99),
      l = n(26),
      a = n(27),
      s = n(48),
      u = n(8),
      c = n(57),
      f = Object.getOwnPropertyDescriptor;
    t.f = r
      ? f
      : function (e, t) {
          if (((e = a(e)), (t = s(t)), c))
            try {
              return f(e, t);
            } catch (e) {}
          if (u(e, t)) return l(!o(i.f, e, t), e[t]);
        };
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      o = n(3),
      i = n(16),
      l = Object,
      a = r("".split);
    e.exports = o(function () {
      return !l("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" === i(e) ? a(e, "") : l(e);
        }
      : l;
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return null == e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(100),
      o = n(49);
    e.exports = function (e) {
      var t = r(e, "string");
      return o(t) ? t : t + "";
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(29),
      o = n(1),
      i = n(50),
      l = n(51),
      a = Object;
    e.exports = l
      ? function (e) {
          return "symbol" == typeof e;
        }
      : function (e) {
          var t = r("Symbol");
          return o(t) && i(t.prototype, a(e));
        };
  },
  function (e, t, n) {
    "use strict";
    var r = n(2);
    e.exports = r({}.isPrototypeOf);
  },
  function (e, t, n) {
    "use strict";
    var r = n(52);
    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (e, t, n) {
    "use strict";
    var r = n(53),
      o = n(3),
      i = n(0).String;
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !o(function () {
        var e = Symbol("symbol detection");
        return (
          !i(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && r && r < 41)
        );
      });
  },
  function (e, t, n) {
    "use strict";
    var r,
      o,
      i = n(0),
      l = n(101),
      a = i.process,
      s = i.Deno,
      u = (a && a.versions) || (s && s.version),
      c = u && u.v8;
    c && (o = (r = c.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
      !o &&
        l &&
        (!(r = l.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
        (r = l.match(/Chrome\/(\d+)/)) &&
        (o = +r[1]),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    var r = n(32);
    e.exports = function (e, t) {
      return r[e] || (r[e] = t || {});
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = !1;
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      o = 0,
      i = Math.random(),
      l = r((1).toString);
    e.exports = function (e) {
      return "Symbol(" + (void 0 === e ? "" : e) + ")_" + l(++o + i, 36);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(5),
      o = n(3),
      i = n(105);
    e.exports =
      !r &&
      !o(function () {
        return (
          7 !==
          Object.defineProperty(i("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(6),
      o = String,
      i = TypeError;
    e.exports = function (e) {
      if (r(e)) return e;
      throw new i(o(e) + " is not an object");
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = {};
  },
  function (e, t, n) {
    "use strict";
    var r = n(8),
      o = n(112),
      i = n(45),
      l = n(15);
    e.exports = function (e, t, n) {
      for (var a = o(t), s = l.f, u = i.f, c = 0; c < a.length; c++) {
        var f = a[c];
        r(e, f) || (n && r(n, f)) || s(e, f, u(t, f));
      }
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(117);
    e.exports = function (e) {
      var t = +e;
      return t != t || 0 === t ? 0 : r(t);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(128),
      o = n(6),
      i = n(28),
      l = n(129);
    e.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e,
              t = !1,
              n = {};
            try {
              (e = r(Object.prototype, "__proto__", "set"))(n, []),
                (t = n instanceof Array);
            } catch (e) {}
            return function (n, r) {
              return (
                i(n), l(r), o(n) ? (t ? e(n, r) : (n.__proto__ = r), n) : n
              );
            };
          })()
        : void 0);
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
      return e;
    };
  },
  function (e, t) {
    var n =
      "object" == typeof global && global && global.Object === Object && global;
    e.exports = n;
  },
  function (e, t, n) {
    var r = n(17),
      o = n(156),
      i = n(157),
      l = n(158),
      a = n(159),
      s = n(160);
    function u(e) {
      var t = (this.__data__ = new r(e));
      this.size = t.size;
    }
    (u.prototype.clear = o),
      (u.prototype.delete = i),
      (u.prototype.get = l),
      (u.prototype.has = a),
      (u.prototype.set = s),
      (e.exports = u);
  },
  function (e, t) {
    e.exports = function (e, t) {
      return e === t || (e != e && t != t);
    };
  },
  function (e, t, n) {
    var r = n(12),
      o = n(38);
    e.exports = function (e) {
      if (!o(e)) return !1;
      var t = r(e);
      return (
        "[object Function]" == t ||
        "[object GeneratorFunction]" == t ||
        "[object AsyncFunction]" == t ||
        "[object Proxy]" == t
      );
    };
  },
  function (e, t) {
    var n = Function.prototype.toString;
    e.exports = function (e) {
      if (null != e) {
        try {
          return n.call(e);
        } catch (e) {}
        try {
          return e + "";
        } catch (e) {}
      }
      return "";
    };
  },
  function (e, t, n) {
    var r = n(177),
      o = n(11);
    e.exports = function e(t, n, i, l, a) {
      return (
        t === n ||
        (null == t || null == n || (!o(t) && !o(n))
          ? t != t && n != n
          : r(t, n, i, l, e, a))
      );
    };
  },
  function (e, t, n) {
    var r = n(71),
      o = n(180),
      i = n(72);
    e.exports = function (e, t, n, l, a, s) {
      var u = 1 & n,
        c = e.length,
        f = t.length;
      if (c != f && !(u && f > c)) return !1;
      var p = s.get(e),
        d = s.get(t);
      if (p && d) return p == t && d == e;
      var h = -1,
        g = !0,
        v = 2 & n ? new r() : void 0;
      for (s.set(e, t), s.set(t, e); ++h < c; ) {
        var m = e[h],
          y = t[h];
        if (l) var b = u ? l(y, m, h, t, e, s) : l(m, y, h, e, t, s);
        if (void 0 !== b) {
          if (b) continue;
          g = !1;
          break;
        }
        if (v) {
          if (
            !o(t, function (e, t) {
              if (!i(v, t) && (m === e || a(m, e, n, l, s))) return v.push(t);
            })
          ) {
            g = !1;
            break;
          }
        } else if (m !== y && !a(m, y, n, l, s)) {
          g = !1;
          break;
        }
      }
      return s.delete(e), s.delete(t), g;
    };
  },
  function (e, t, n) {
    var r = n(39),
      o = n(178),
      i = n(179);
    function l(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
    }
    (l.prototype.add = l.prototype.push = o),
      (l.prototype.has = i),
      (e.exports = l);
  },
  function (e, t) {
    e.exports = function (e, t) {
      return e.has(t);
    };
  },
  function (e, t, n) {
    var r = n(190),
      o = n(196),
      i = n(78);
    e.exports = function (e) {
      return i(e) ? r(e) : o(e);
    };
  },
  function (e, t, n) {
    (function (e) {
      var r = n(7),
        o = n(192),
        i = t && !t.nodeType && t,
        l = i && "object" == typeof e && e && !e.nodeType && e,
        a = l && l.exports === i ? r.Buffer : void 0,
        s = (a ? a.isBuffer : void 0) || o;
      e.exports = s;
    }).call(this, n(75)(e));
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t) {
    var n = /^(?:0|[1-9]\d*)$/;
    e.exports = function (e, t) {
      var r = typeof e;
      return (
        !!(t = null == t ? 9007199254740991 : t) &&
        ("number" == r || ("symbol" != r && n.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
      );
    };
  },
  function (e, t, n) {
    var r = n(193),
      o = n(194),
      i = n(195),
      l = i && i.isTypedArray,
      a = l ? o(l) : r;
    e.exports = a;
  },
  function (e, t, n) {
    var r = n(67),
      o = n(41);
    e.exports = function (e) {
      return null != e && o(e.length) && !r(e);
    };
  },
  function (e, t, n) {
    var r = n(9)(n(7), "Set");
    e.exports = r;
  },
  function (e, t, n) {
    var r = n(38);
    e.exports = function (e) {
      return e == e && !r(e);
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return function (n) {
        return null != n && n[e] === t && (void 0 !== t || e in Object(n));
      };
    };
  },
  function (e, t, n) {
    var r = n(83),
      o = n(21);
    e.exports = function (e, t) {
      for (var n = 0, i = (t = r(t, e)).length; null != e && n < i; )
        e = e[o(t[n++])];
      return n && n == i ? e : void 0;
    };
  },
  function (e, t, n) {
    var r = n(4),
      o = n(42),
      i = n(206),
      l = n(209);
    e.exports = function (e, t) {
      return r(e) ? e : o(e, t) ? [e] : i(l(e));
    };
  },
  function (e, t, n) {},
  function (e, t, n) {},
  function (e, t, n) {},
  function (e, t, n) {
    var r = n(143),
      o = n(148),
      i = n(218),
      l = n(226),
      a = n(235),
      s = n(92),
      u = i(function (e) {
        var t = s(e);
        return a(t) && (t = void 0), l(r(e, 1, a, !0), o(t, 2));
      });
    e.exports = u;
  },
  function (e, t, n) {
    "use strict";
    /*!
     * escape-html
     * Copyright(c) 2012-2013 TJ Holowaychuk
     * Copyright(c) 2015 Andreas Lubbe
     * Copyright(c) 2015 Tiancheng "Timothy" Gu
     * MIT Licensed
     */ var r = /["'&<>]/;
    e.exports = function (e) {
      var t,
        n = "" + e,
        o = r.exec(n);
      if (!o) return n;
      var i = "",
        l = 0,
        a = 0;
      for (l = o.index; l < n.length; l++) {
        switch (n.charCodeAt(l)) {
          case 34:
            t = "&quot;";
            break;
          case 38:
            t = "&amp;";
            break;
          case 39:
            t = "&#39;";
            break;
          case 60:
            t = "&lt;";
            break;
          case 62:
            t = "&gt;";
            break;
          default:
            continue;
        }
        a !== l && (i += n.substring(a, l)), (a = l + 1), (i += t);
      }
      return a !== l ? i + n.substring(a, l) : i;
    };
  },
  function (e, t) {
    var n = /^\s+|\s+$/g,
      r = /^[-+]0x[0-9a-f]+$/i,
      o = /^0b[01]+$/i,
      i = /^0o[0-7]+$/i,
      l = parseInt,
      a =
        "object" == typeof global &&
        global &&
        global.Object === Object &&
        global,
      s = "object" == typeof self && self && self.Object === Object && self,
      u = a || s || Function("return this")(),
      c = Object.prototype.toString,
      f = Math.max,
      p = Math.min,
      d = function () {
        return u.Date.now();
      };
    function h(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t);
    }
    function g(e) {
      if ("number" == typeof e) return e;
      if (
        (function (e) {
          return (
            "symbol" == typeof e ||
            ((function (e) {
              return !!e && "object" == typeof e;
            })(e) &&
              "[object Symbol]" == c.call(e))
          );
        })(e)
      )
        return NaN;
      if (h(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = h(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = e.replace(n, "");
      var a = o.test(e);
      return a || i.test(e) ? l(e.slice(2), a ? 2 : 8) : r.test(e) ? NaN : +e;
    }
    e.exports = function (e, t, n) {
      var r,
        o,
        i,
        l,
        a,
        s,
        u = 0,
        c = !1,
        v = !1,
        m = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function y(t) {
        var n = r,
          i = o;
        return (r = o = void 0), (u = t), (l = e.apply(i, n));
      }
      function b(e) {
        return (u = e), (a = setTimeout(_, t)), c ? y(e) : l;
      }
      function w(e) {
        var n = e - s;
        return void 0 === s || n >= t || n < 0 || (v && e - u >= i);
      }
      function _() {
        var e = d();
        if (w(e)) return x(e);
        a = setTimeout(
          _,
          (function (e) {
            var n = t - (e - s);
            return v ? p(n, i - (e - u)) : n;
          })(e)
        );
      }
      function x(e) {
        return (a = void 0), m && r ? y(e) : ((r = o = void 0), l);
      }
      function k() {
        var e = d(),
          n = w(e);
        if (((r = arguments), (o = this), (s = e), n)) {
          if (void 0 === a) return b(s);
          if (v) return (a = setTimeout(_, t)), y(s);
        }
        return void 0 === a && (a = setTimeout(_, t)), l;
      }
      return (
        (t = g(t) || 0),
        h(n) &&
          ((c = !!n.leading),
          (i = (v = "maxWait" in n) ? f(g(n.maxWait) || 0, t) : i),
          (m = "trailing" in n ? !!n.trailing : m)),
        (k.cancel = function () {
          void 0 !== a && clearTimeout(a), (u = 0), (r = s = o = a = void 0);
        }),
        (k.flush = function () {
          return void 0 === a ? l : x(d());
        }),
        k
      );
    };
  },
  function (e, t, n) {
    !(function () {
      "use strict";
      e.exports = {
        polyfill: function () {
          var e = window,
            t = document;
          if (
            !("scrollBehavior" in t.documentElement.style) ||
            !0 === e.__forceSmoothScrollPolyfill__
          ) {
            var n,
              r = e.HTMLElement || e.Element,
              o = {
                scroll: e.scroll || e.scrollTo,
                scrollBy: e.scrollBy,
                elementScroll: r.prototype.scroll || a,
                scrollIntoView: r.prototype.scrollIntoView,
              },
              i =
                e.performance && e.performance.now
                  ? e.performance.now.bind(e.performance)
                  : Date.now,
              l =
                ((n = e.navigator.userAgent),
                new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n)
                  ? 1
                  : 0);
            (e.scroll = e.scrollTo =
              function () {
                void 0 !== arguments[0] &&
                  (!0 !== s(arguments[0])
                    ? h.call(
                        e,
                        t.body,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : e.scrollX || e.pageXOffset,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : e.scrollY || e.pageYOffset
                      )
                    : o.scroll.call(
                        e,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : e.scrollX || e.pageXOffset,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : e.scrollY || e.pageYOffset
                      ));
              }),
              (e.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (s(arguments[0])
                    ? o.scrollBy.call(
                        e,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : 0,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                      )
                    : h.call(
                        e,
                        t.body,
                        ~~arguments[0].left + (e.scrollX || e.pageXOffset),
                        ~~arguments[0].top + (e.scrollY || e.pageYOffset)
                      ));
              }),
              (r.prototype.scroll = r.prototype.scrollTo =
                function () {
                  if (void 0 !== arguments[0])
                    if (!0 !== s(arguments[0])) {
                      var e = arguments[0].left,
                        t = arguments[0].top;
                      h.call(
                        this,
                        this,
                        void 0 === e ? this.scrollLeft : ~~e,
                        void 0 === t ? this.scrollTop : ~~t
                      );
                    } else {
                      if (
                        "number" == typeof arguments[0] &&
                        void 0 === arguments[1]
                      )
                        throw new SyntaxError("Value could not be converted");
                      o.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : "object" != typeof arguments[0]
                          ? ~~arguments[0]
                          : this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : void 0 !== arguments[1]
                          ? ~~arguments[1]
                          : this.scrollTop
                      );
                    }
                }),
              (r.prototype.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (!0 !== s(arguments[0])
                    ? this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior,
                      })
                    : o.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left + this.scrollLeft
                          : ~~arguments[0] + this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top + this.scrollTop
                          : ~~arguments[1] + this.scrollTop
                      ));
              }),
              (r.prototype.scrollIntoView = function () {
                if (!0 !== s(arguments[0])) {
                  var n = p(this),
                    r = n.getBoundingClientRect(),
                    i = this.getBoundingClientRect();
                  n !== t.body
                    ? (h.call(
                        this,
                        n,
                        n.scrollLeft + i.left - r.left,
                        n.scrollTop + i.top - r.top
                      ),
                      "fixed" !== e.getComputedStyle(n).position &&
                        e.scrollBy({
                          left: r.left,
                          top: r.top,
                          behavior: "smooth",
                        }))
                    : e.scrollBy({
                        left: i.left,
                        top: i.top,
                        behavior: "smooth",
                      });
                } else
                  o.scrollIntoView.call(
                    this,
                    void 0 === arguments[0] || arguments[0]
                  );
              });
          }
          function a(e, t) {
            (this.scrollLeft = e), (this.scrollTop = t);
          }
          function s(e) {
            if (
              null === e ||
              "object" != typeof e ||
              void 0 === e.behavior ||
              "auto" === e.behavior ||
              "instant" === e.behavior
            )
              return !0;
            if ("object" == typeof e && "smooth" === e.behavior) return !1;
            throw new TypeError(
              "behavior member of ScrollOptions " +
                e.behavior +
                " is not a valid value for enumeration ScrollBehavior."
            );
          }
          function u(e, t) {
            return "Y" === t
              ? e.clientHeight + l < e.scrollHeight
              : "X" === t
              ? e.clientWidth + l < e.scrollWidth
              : void 0;
          }
          function c(t, n) {
            var r = e.getComputedStyle(t, null)["overflow" + n];
            return "auto" === r || "scroll" === r;
          }
          function f(e) {
            var t = u(e, "Y") && c(e, "Y"),
              n = u(e, "X") && c(e, "X");
            return t || n;
          }
          function p(e) {
            for (; e !== t.body && !1 === f(e); ) e = e.parentNode || e.host;
            return e;
          }
          function d(t) {
            var n,
              r,
              o,
              l,
              a = (i() - t.startTime) / 468;
            (l = a = a > 1 ? 1 : a),
              (n = 0.5 * (1 - Math.cos(Math.PI * l))),
              (r = t.startX + (t.x - t.startX) * n),
              (o = t.startY + (t.y - t.startY) * n),
              t.method.call(t.scrollable, r, o),
              (r === t.x && o === t.y) || e.requestAnimationFrame(d.bind(e, t));
          }
          function h(n, r, l) {
            var s,
              u,
              c,
              f,
              p = i();
            n === t.body
              ? ((s = e),
                (u = e.scrollX || e.pageXOffset),
                (c = e.scrollY || e.pageYOffset),
                (f = o.scroll))
              : ((s = n), (u = n.scrollLeft), (c = n.scrollTop), (f = a)),
              d({
                scrollable: s,
                method: f,
                startTime: p,
                startX: u,
                startY: c,
                x: r,
                y: l,
              });
          }
        },
      };
    })();
  },
  function (e, t, n) {
    "use strict";
    var r = n(23),
      o = n(34),
      i = n(35),
      l = n(140),
      a = n(142);
    r(
      {
        target: "Array",
        proto: !0,
        arity: 1,
        forced:
          n(3)(function () {
            return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
          }) ||
          !(function () {
            try {
              Object.defineProperty([], "length", { writable: !1 }).push();
            } catch (e) {
              return e instanceof TypeError;
            }
          })(),
      },
      {
        push: function (e) {
          var t = o(this),
            n = i(t),
            r = arguments.length;
          a(n + r);
          for (var s = 0; s < r; s++) (t[n] = arguments[s]), n++;
          return l(t, n), n;
        },
      }
    );
  },
  function (e, t) {
    e.exports = function (e) {
      var t = null == e ? 0 : e.length;
      return t ? e[t - 1] : void 0;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      o = n(15),
      i = n(95),
      l = n(33);
    e.exports = function (e, t, n, a) {
      a || (a = {});
      var s = a.enumerable,
        u = void 0 !== a.name ? a.name : t;
      if ((r(n) && i(n, u, a), a.global)) s ? (e[t] = n) : l(t, n);
      else {
        try {
          a.unsafe ? e[t] && (s = !0) : delete e[t];
        } catch (e) {}
        s
          ? (e[t] = n)
          : o.f(e, t, {
              value: n,
              enumerable: !1,
              configurable: !a.nonConfigurable,
              writable: !a.nonWritable,
            });
      }
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(134),
      o = String;
    e.exports = function (e) {
      if ("Symbol" === r(e))
        throw new TypeError("Cannot convert a Symbol value to a string");
      return o(e);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      o = n(3),
      i = n(1),
      l = n(8),
      a = n(5),
      s = n(107).CONFIGURABLE,
      u = n(108),
      c = n(109),
      f = c.enforce,
      p = c.get,
      d = String,
      h = Object.defineProperty,
      g = r("".slice),
      v = r("".replace),
      m = r([].join),
      y =
        a &&
        !o(function () {
          return 8 !== h(function () {}, "length", { value: 8 }).length;
        }),
      b = String(String).split("String"),
      w = (e.exports = function (e, t, n) {
        "Symbol(" === g(d(t), 0, 7) &&
          (t = "[" + v(d(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
          n && n.getter && (t = "get " + t),
          n && n.setter && (t = "set " + t),
          (!l(e, "name") || (s && e.name !== t)) &&
            (a ? h(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
          y &&
            n &&
            l(n, "arity") &&
            e.length !== n.arity &&
            h(e, "length", { value: n.arity });
        try {
          n && l(n, "constructor") && n.constructor
            ? a && h(e, "prototype", { writable: !1 })
            : e.prototype && (e.prototype = void 0);
        } catch (e) {}
        var r = f(e);
        return (
          l(r, "source") || (r.source = m(b, "string" == typeof t ? t : "")), e
        );
      });
    Function.prototype.toString = w(function () {
      return (i(this) && p(this).source) || u(this);
    }, "toString");
  },
  function (e, t, n) {
    var r = n(82);
    e.exports = function (e, t, n) {
      var o = null == e ? void 0 : r(e, t);
      return void 0 === o ? n : o;
    };
  },
  function (e, t, n) {
    e.exports = n(243);
  },
  function (e, t, n) {
    "use strict";
    var r = n(23),
      o = n(122).left,
      i = n(123),
      l = n(53);
    r(
      {
        target: "Array",
        proto: !0,
        forced: (!n(124) && l > 79 && l < 83) || !i("reduce"),
      },
      {
        reduce: function (e) {
          var t = arguments.length;
          return o(this, e, t, t > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !r.call({ 1: 2 }, 1);
    t.f = i
      ? function (e) {
          var t = o(this, e);
          return !!t && t.enumerable;
        }
      : r;
  },
  function (e, t, n) {
    "use strict";
    var r = n(24),
      o = n(6),
      i = n(49),
      l = n(102),
      a = n(104),
      s = n(31),
      u = TypeError,
      c = s("toPrimitive");
    e.exports = function (e, t) {
      if (!o(e) || i(e)) return e;
      var n,
        s = l(e, c);
      if (s) {
        if ((void 0 === t && (t = "default"), (n = r(s, e, t)), !o(n) || i(n)))
          return n;
        throw new u("Can't convert object to primitive value");
      }
      return void 0 === t && (t = "number"), a(e, t);
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports =
      ("undefined" != typeof navigator && String(navigator.userAgent)) || "";
  },
  function (e, t, n) {
    "use strict";
    var r = n(30),
      o = n(47);
    e.exports = function (e, t) {
      var n = e[t];
      return o(n) ? void 0 : r(n);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = String;
    e.exports = function (e) {
      try {
        return r(e);
      } catch (e) {
        return "Object";
      }
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(24),
      o = n(1),
      i = n(6),
      l = TypeError;
    e.exports = function (e, t) {
      var n, a;
      if ("string" === t && o((n = e.toString)) && !i((a = r(n, e)))) return a;
      if (o((n = e.valueOf)) && !i((a = r(n, e)))) return a;
      if ("string" !== t && o((n = e.toString)) && !i((a = r(n, e)))) return a;
      throw new l("Can't convert object to primitive value");
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(6),
      i = r.document,
      l = o(i) && o(i.createElement);
    e.exports = function (e) {
      return l ? i.createElement(e) : {};
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(5),
      o = n(3);
    e.exports =
      r &&
      o(function () {
        return (
          42 !==
          Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: !1,
          }).prototype
        );
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(5),
      o = n(8),
      i = Function.prototype,
      l = r && Object.getOwnPropertyDescriptor,
      a = o(i, "name"),
      s = a && "something" === function () {}.name,
      u = a && (!r || (r && l(i, "name").configurable));
    e.exports = { EXISTS: a, PROPER: s, CONFIGURABLE: u };
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      o = n(1),
      i = n(32),
      l = r(Function.toString);
    o(i.inspectSource) ||
      (i.inspectSource = function (e) {
        return l(e);
      }),
      (e.exports = i.inspectSource);
  },
  function (e, t, n) {
    "use strict";
    var r,
      o,
      i,
      l = n(110),
      a = n(0),
      s = n(6),
      u = n(13),
      c = n(8),
      f = n(32),
      p = n(111),
      d = n(59),
      h = a.TypeError,
      g = a.WeakMap;
    if (l || f.state) {
      var v = f.state || (f.state = new g());
      (v.get = v.get),
        (v.has = v.has),
        (v.set = v.set),
        (r = function (e, t) {
          if (v.has(e)) throw new h("Object already initialized");
          return (t.facade = e), v.set(e, t), t;
        }),
        (o = function (e) {
          return v.get(e) || {};
        }),
        (i = function (e) {
          return v.has(e);
        });
    } else {
      var m = p("state");
      (d[m] = !0),
        (r = function (e, t) {
          if (c(e, m)) throw new h("Object already initialized");
          return (t.facade = e), u(e, m, t), t;
        }),
        (o = function (e) {
          return c(e, m) ? e[m] : {};
        }),
        (i = function (e) {
          return c(e, m);
        });
    }
    e.exports = {
      set: r,
      get: o,
      has: i,
      enforce: function (e) {
        return i(e) ? o(e) : r(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!s(t) || (n = o(t)).type !== e)
            throw new h("Incompatible receiver, " + e + " required");
          return n;
        };
      },
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(1),
      i = r.WeakMap;
    e.exports = o(i) && /native code/.test(String(i));
  },
  function (e, t, n) {
    "use strict";
    var r = n(54),
      o = n(56),
      i = r("keys");
    e.exports = function (e) {
      return i[e] || (i[e] = o(e));
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(29),
      o = n(2),
      i = n(113),
      l = n(120),
      a = n(58),
      s = o([].concat);
    e.exports =
      r("Reflect", "ownKeys") ||
      function (e) {
        var t = i.f(a(e)),
          n = l.f;
        return n ? s(t, n(e)) : t;
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(114),
      o = n(119).concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return r(e, o);
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      o = n(8),
      i = n(27),
      l = n(115).indexOf,
      a = n(59),
      s = r([].push);
    e.exports = function (e, t) {
      var n,
        r = i(e),
        u = 0,
        c = [];
      for (n in r) !o(a, n) && o(r, n) && s(c, n);
      for (; t.length > u; ) o(r, (n = t[u++])) && (~l(c, n) || s(c, n));
      return c;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(27),
      o = n(116),
      i = n(35),
      l = function (e) {
        return function (t, n, l) {
          var a = r(t),
            s = i(a);
          if (0 === s) return !e && -1;
          var u,
            c = o(l, s);
          if (e && n != n) {
            for (; s > c; ) if ((u = a[c++]) != u) return !0;
          } else
            for (; s > c; c++)
              if ((e || c in a) && a[c] === n) return e || c || 0;
          return !e && -1;
        };
      };
    e.exports = { includes: l(!0), indexOf: l(!1) };
  },
  function (e, t, n) {
    "use strict";
    var r = n(61),
      o = Math.max,
      i = Math.min;
    e.exports = function (e, t) {
      var n = r(e);
      return n < 0 ? o(n + t, 0) : i(n, t);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = Math.ceil,
      o = Math.floor;
    e.exports =
      Math.trunc ||
      function (e) {
        var t = +e;
        return (t > 0 ? o : r)(t);
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(61),
      o = Math.min;
    e.exports = function (e) {
      var t = r(e);
      return t > 0 ? o(t, 9007199254740991) : 0;
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (e, t, n) {
    "use strict";
    t.f = Object.getOwnPropertySymbols;
  },
  function (e, t, n) {
    "use strict";
    var r = n(3),
      o = n(1),
      i = /#|\.prototype\./,
      l = function (e, t) {
        var n = s[a(e)];
        return n === c || (n !== u && (o(t) ? r(t) : !!t));
      },
      a = (l.normalize = function (e) {
        return String(e).replace(i, ".").toLowerCase();
      }),
      s = (l.data = {}),
      u = (l.NATIVE = "N"),
      c = (l.POLYFILL = "P");
    e.exports = l;
  },
  function (e, t, n) {
    "use strict";
    var r = n(30),
      o = n(34),
      i = n(46),
      l = n(35),
      a = TypeError,
      s = "Reduce of empty array with no initial value",
      u = function (e) {
        return function (t, n, u, c) {
          var f = o(t),
            p = i(f),
            d = l(f);
          if ((r(n), 0 === d && u < 2)) throw new a(s);
          var h = e ? d - 1 : 0,
            g = e ? -1 : 1;
          if (u < 2)
            for (;;) {
              if (h in p) {
                (c = p[h]), (h += g);
                break;
              }
              if (((h += g), e ? h < 0 : d <= h)) throw new a(s);
            }
          for (; e ? h >= 0 : d > h; h += g) h in p && (c = n(c, p[h], h, f));
          return c;
        };
      };
    e.exports = { left: u(!1), right: u(!0) };
  },
  function (e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = function (e, t) {
      var n = [][e];
      return (
        !!n &&
        r(function () {
          n.call(
            null,
            t ||
              function () {
                return 1;
              },
            1
          );
        })
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(16);
    e.exports = "process" === o(r.process);
  },
  function (e, t, n) {
    "use strict";
    var r = n(23),
      o = n(0),
      i = n(126),
      l = n(127),
      a = o.WebAssembly,
      s = 7 !== new Error("e", { cause: 7 }).cause,
      u = function (e, t) {
        var n = {};
        (n[e] = l(e, t, s)),
          r({ global: !0, constructor: !0, arity: 1, forced: s }, n);
      },
      c = function (e, t) {
        if (a && a[e]) {
          var n = {};
          (n[e] = l("WebAssembly." + e, t, s)),
            r(
              {
                target: "WebAssembly",
                stat: !0,
                constructor: !0,
                arity: 1,
                forced: s,
              },
              n
            );
        }
      };
    u("Error", function (e) {
      return function (t) {
        return i(e, this, arguments);
      };
    }),
      u("EvalError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      }),
      u("RangeError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      }),
      u("ReferenceError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      }),
      u("SyntaxError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      }),
      u("TypeError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      }),
      u("URIError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      }),
      c("CompileError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      }),
      c("LinkError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      }),
      c("RuntimeError", function (e) {
        return function (t) {
          return i(e, this, arguments);
        };
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(25),
      o = Function.prototype,
      i = o.apply,
      l = o.call;
    e.exports =
      ("object" == typeof Reflect && Reflect.apply) ||
      (r
        ? l.bind(i)
        : function () {
            return l.apply(i, arguments);
          });
  },
  function (e, t, n) {
    "use strict";
    var r = n(29),
      o = n(8),
      i = n(13),
      l = n(50),
      a = n(62),
      s = n(60),
      u = n(131),
      c = n(132),
      f = n(133),
      p = n(136),
      d = n(137),
      h = n(5),
      g = n(55);
    e.exports = function (e, t, n, v) {
      var m = v ? 2 : 1,
        y = e.split("."),
        b = y[y.length - 1],
        w = r.apply(null, y);
      if (w) {
        var _ = w.prototype;
        if ((!g && o(_, "cause") && delete _.cause, !n)) return w;
        var x = r("Error"),
          k = t(function (e, t) {
            var n = f(v ? t : e, void 0),
              r = v ? new w(e) : new w();
            return (
              void 0 !== n && i(r, "message", n),
              d(r, k, r.stack, 2),
              this && l(_, this) && c(r, this, k),
              arguments.length > m && p(r, arguments[m]),
              r
            );
          });
        if (
          ((k.prototype = _),
          "Error" !== b
            ? a
              ? a(k, x)
              : s(k, x, { name: !0 })
            : h &&
              "stackTraceLimit" in w &&
              (u(k, w, "stackTraceLimit"), u(k, w, "prepareStackTrace")),
          s(k, w),
          !g)
        )
          try {
            _.name !== b && i(_, "name", b), (_.constructor = k);
          } catch (e) {}
        return k;
      }
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      o = n(30);
    e.exports = function (e, t, n) {
      try {
        return r(o(Object.getOwnPropertyDescriptor(e, t)[n]));
      } catch (e) {}
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(130),
      o = String,
      i = TypeError;
    e.exports = function (e) {
      if (r(e)) return e;
      throw new i("Can't set " + o(e) + " as a prototype");
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(6);
    e.exports = function (e) {
      return r(e) || null === e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(15).f;
    e.exports = function (e, t, n) {
      n in e ||
        r(e, n, {
          configurable: !0,
          get: function () {
            return t[n];
          },
          set: function (e) {
            t[n] = e;
          },
        });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      o = n(6),
      i = n(62);
    e.exports = function (e, t, n) {
      var l, a;
      return (
        i &&
          r((l = t.constructor)) &&
          l !== n &&
          o((a = l.prototype)) &&
          a !== n.prototype &&
          i(e, a),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(94);
    e.exports = function (e, t) {
      return void 0 === e ? (arguments.length < 2 ? "" : t) : r(e);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(135),
      o = n(1),
      i = n(16),
      l = n(31)("toStringTag"),
      a = Object,
      s =
        "Arguments" ===
        i(
          (function () {
            return arguments;
          })()
        );
    e.exports = r
      ? i
      : function (e) {
          var t, n, r;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = a(e)), l))
            ? n
            : s
            ? i(t)
            : "Object" === (r = i(t)) && o(t.callee)
            ? "Arguments"
            : r;
        };
  },
  function (e, t, n) {
    "use strict";
    var r = {};
    (r[n(31)("toStringTag")] = "z"), (e.exports = "[object z]" === String(r));
  },
  function (e, t, n) {
    "use strict";
    var r = n(6),
      o = n(13);
    e.exports = function (e, t) {
      r(t) && "cause" in t && o(e, "cause", t.cause);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(13),
      o = n(138),
      i = n(139),
      l = Error.captureStackTrace;
    e.exports = function (e, t, n, a) {
      i && (l ? l(e, t) : r(e, "stack", o(n, a)));
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      o = Error,
      i = r("".replace),
      l = String(new o("zxcasd").stack),
      a = /\n\s*at [^:]*:[^\n]*/,
      s = a.test(l);
    e.exports = function (e, t) {
      if (s && "string" == typeof e && !o.prepareStackTrace)
        for (; t--; ) e = i(e, a, "");
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(3),
      o = n(26);
    e.exports = !r(function () {
      var e = new Error("a");
      return (
        !("stack" in e) ||
        (Object.defineProperty(e, "stack", o(1, 7)), 7 !== e.stack)
      );
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(5),
      o = n(141),
      i = TypeError,
      l = Object.getOwnPropertyDescriptor,
      a =
        r &&
        !(function () {
          if (void 0 !== this) return !0;
          try {
            Object.defineProperty([], "length", { writable: !1 }).length = 1;
          } catch (e) {
            return e instanceof TypeError;
          }
        })();
    e.exports = a
      ? function (e, t) {
          if (o(e) && !l(e, "length").writable)
            throw new i("Cannot set read only .length");
          return (e.length = t);
        }
      : function (e, t) {
          return (e.length = t);
        };
  },
  function (e, t, n) {
    "use strict";
    var r = n(16);
    e.exports =
      Array.isArray ||
      function (e) {
        return "Array" === r(e);
      };
  },
  function (e, t, n) {
    "use strict";
    var r = TypeError;
    e.exports = function (e) {
      if (e > 9007199254740991) throw r("Maximum allowed index exceeded");
      return e;
    };
  },
  function (e, t, n) {
    var r = n(63),
      o = n(144);
    e.exports = function e(t, n, i, l, a) {
      var s = -1,
        u = t.length;
      for (i || (i = o), a || (a = []); ++s < u; ) {
        var c = t[s];
        n > 0 && i(c)
          ? n > 1
            ? e(c, n - 1, i, l, a)
            : r(a, c)
          : l || (a[a.length] = c);
      }
      return a;
    };
  },
  function (e, t, n) {
    var r = n(14),
      o = n(36),
      i = n(4),
      l = r ? r.isConcatSpreadable : void 0;
    e.exports = function (e) {
      return i(e) || o(e) || !!(l && e && e[l]);
    };
  },
  function (e, t, n) {
    var r = n(12),
      o = n(11);
    e.exports = function (e) {
      return o(e) && "[object Arguments]" == r(e);
    };
  },
  function (e, t, n) {
    var r = n(14),
      o = Object.prototype,
      i = o.hasOwnProperty,
      l = o.toString,
      a = r ? r.toStringTag : void 0;
    e.exports = function (e) {
      var t = i.call(e, a),
        n = e[a];
      try {
        e[a] = void 0;
        var r = !0;
      } catch (e) {}
      var o = l.call(e);
      return r && (t ? (e[a] = n) : delete e[a]), o;
    };
  },
  function (e, t) {
    var n = Object.prototype.toString;
    e.exports = function (e) {
      return n.call(e);
    };
  },
  function (e, t, n) {
    var r = n(149),
      o = n(205),
      i = n(44),
      l = n(4),
      a = n(215);
    e.exports = function (e) {
      return "function" == typeof e
        ? e
        : null == e
        ? i
        : "object" == typeof e
        ? l(e)
          ? o(e[0], e[1])
          : r(e)
        : a(e);
    };
  },
  function (e, t, n) {
    var r = n(150),
      o = n(204),
      i = n(81);
    e.exports = function (e) {
      var t = o(e);
      return 1 == t.length && t[0][2]
        ? i(t[0][0], t[0][1])
        : function (n) {
            return n === e || r(n, e, t);
          };
    };
  },
  function (e, t, n) {
    var r = n(65),
      o = n(69);
    e.exports = function (e, t, n, i) {
      var l = n.length,
        a = l,
        s = !i;
      if (null == e) return !a;
      for (e = Object(e); l--; ) {
        var u = n[l];
        if (s && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++l < a; ) {
        var c = (u = n[l])[0],
          f = e[c],
          p = u[1];
        if (s && u[2]) {
          if (void 0 === f && !(c in e)) return !1;
        } else {
          var d = new r();
          if (i) var h = i(f, p, c, e, t, d);
          if (!(void 0 === h ? o(p, f, 3, i, d) : h)) return !1;
        }
      }
      return !0;
    };
  },
  function (e, t) {
    e.exports = function () {
      (this.__data__ = []), (this.size = 0);
    };
  },
  function (e, t, n) {
    var r = n(18),
      o = Array.prototype.splice;
    e.exports = function (e) {
      var t = this.__data__,
        n = r(t, e);
      return (
        !(n < 0) &&
        (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0)
      );
    };
  },
  function (e, t, n) {
    var r = n(18);
    e.exports = function (e) {
      var t = this.__data__,
        n = r(t, e);
      return n < 0 ? void 0 : t[n][1];
    };
  },
  function (e, t, n) {
    var r = n(18);
    e.exports = function (e) {
      return r(this.__data__, e) > -1;
    };
  },
  function (e, t, n) {
    var r = n(18);
    e.exports = function (e, t) {
      var n = this.__data__,
        o = r(n, e);
      return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
    };
  },
  function (e, t, n) {
    var r = n(17);
    e.exports = function () {
      (this.__data__ = new r()), (this.size = 0);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = this.__data__,
        n = t.delete(e);
      return (this.size = t.size), n;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return this.__data__.get(e);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return this.__data__.has(e);
    };
  },
  function (e, t, n) {
    var r = n(17),
      o = n(37),
      i = n(39);
    e.exports = function (e, t) {
      var n = this.__data__;
      if (n instanceof r) {
        var l = n.__data__;
        if (!o || l.length < 199)
          return l.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new i(l);
      }
      return n.set(e, t), (this.size = n.size), this;
    };
  },
  function (e, t, n) {
    var r = n(67),
      o = n(162),
      i = n(38),
      l = n(68),
      a = /^\[object .+?Constructor\]$/,
      s = Function.prototype,
      u = Object.prototype,
      c = s.toString,
      f = u.hasOwnProperty,
      p = RegExp(
        "^" +
          c
            .call(f)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    e.exports = function (e) {
      return !(!i(e) || o(e)) && (r(e) ? p : a).test(l(e));
    };
  },
  function (e, t, n) {
    var r,
      o = n(163),
      i = (r = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + r
        : "";
    e.exports = function (e) {
      return !!i && i in e;
    };
  },
  function (e, t, n) {
    var r = n(7)["__core-js_shared__"];
    e.exports = r;
  },
  function (e, t) {
    e.exports = function (e, t) {
      return null == e ? void 0 : e[t];
    };
  },
  function (e, t, n) {
    var r = n(166),
      o = n(17),
      i = n(37);
    e.exports = function () {
      (this.size = 0),
        (this.__data__ = {
          hash: new r(),
          map: new (i || o)(),
          string: new r(),
        });
    };
  },
  function (e, t, n) {
    var r = n(167),
      o = n(168),
      i = n(169),
      l = n(170),
      a = n(171);
    function s(e) {
      var t = -1,
        n = null == e ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    (s.prototype.clear = r),
      (s.prototype.delete = o),
      (s.prototype.get = i),
      (s.prototype.has = l),
      (s.prototype.set = a),
      (e.exports = s);
  },
  function (e, t, n) {
    var r = n(19);
    e.exports = function () {
      (this.__data__ = r ? r(null) : {}), (this.size = 0);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    };
  },
  function (e, t, n) {
    var r = n(19),
      o = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      var t = this.__data__;
      if (r) {
        var n = t[e];
        return "__lodash_hash_undefined__" === n ? void 0 : n;
      }
      return o.call(t, e) ? t[e] : void 0;
    };
  },
  function (e, t, n) {
    var r = n(19),
      o = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      var t = this.__data__;
      return r ? void 0 !== t[e] : o.call(t, e);
    };
  },
  function (e, t, n) {
    var r = n(19);
    e.exports = function (e, t) {
      var n = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t),
        this
      );
    };
  },
  function (e, t, n) {
    var r = n(20);
    e.exports = function (e) {
      var t = r(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = typeof e;
      return "string" == t || "number" == t || "symbol" == t || "boolean" == t
        ? "__proto__" !== e
        : null === e;
    };
  },
  function (e, t, n) {
    var r = n(20);
    e.exports = function (e) {
      return r(this, e).get(e);
    };
  },
  function (e, t, n) {
    var r = n(20);
    e.exports = function (e) {
      return r(this, e).has(e);
    };
  },
  function (e, t, n) {
    var r = n(20);
    e.exports = function (e, t) {
      var n = r(this, e),
        o = n.size;
      return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
    };
  },
  function (e, t, n) {
    var r = n(65),
      o = n(70),
      i = n(181),
      l = n(184),
      a = n(200),
      s = n(4),
      u = n(74),
      c = n(77),
      f = "[object Object]",
      p = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, n, d, h, g) {
      var v = s(e),
        m = s(t),
        y = v ? "[object Array]" : a(e),
        b = m ? "[object Array]" : a(t),
        w = (y = "[object Arguments]" == y ? f : y) == f,
        _ = (b = "[object Arguments]" == b ? f : b) == f,
        x = y == b;
      if (x && u(e)) {
        if (!u(t)) return !1;
        (v = !0), (w = !1);
      }
      if (x && !w)
        return (
          g || (g = new r()),
          v || c(e) ? o(e, t, n, d, h, g) : i(e, t, y, n, d, h, g)
        );
      if (!(1 & n)) {
        var k = w && p.call(e, "__wrapped__"),
          C = _ && p.call(t, "__wrapped__");
        if (k || C) {
          var S = k ? e.value() : e,
            O = C ? t.value() : t;
          return g || (g = new r()), h(S, O, n, d, g);
        }
      }
      return !!x && (g || (g = new r()), l(e, t, n, d, h, g));
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return this.__data__.set(e, "__lodash_hash_undefined__"), this;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return this.__data__.has(e);
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
        if (t(e[n], n, e)) return !0;
      return !1;
    };
  },
  function (e, t, n) {
    var r = n(14),
      o = n(182),
      i = n(66),
      l = n(70),
      a = n(183),
      s = n(40),
      u = r ? r.prototype : void 0,
      c = u ? u.valueOf : void 0;
    e.exports = function (e, t, n, r, u, f, p) {
      switch (n) {
        case "[object DataView]":
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case "[object ArrayBuffer]":
          return !(e.byteLength != t.byteLength || !f(new o(e), new o(t)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return i(+e, +t);
        case "[object Error]":
          return e.name == t.name && e.message == t.message;
        case "[object RegExp]":
        case "[object String]":
          return e == t + "";
        case "[object Map]":
          var d = a;
        case "[object Set]":
          var h = 1 & r;
          if ((d || (d = s), e.size != t.size && !h)) return !1;
          var g = p.get(e);
          if (g) return g == t;
          (r |= 2), p.set(e, t);
          var v = l(d(e), d(t), r, u, f, p);
          return p.delete(e), v;
        case "[object Symbol]":
          if (c) return c.call(e) == c.call(t);
      }
      return !1;
    };
  },
  function (e, t, n) {
    var r = n(7).Uint8Array;
    e.exports = r;
  },
  function (e, t) {
    e.exports = function (e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (e, r) {
          n[++t] = [r, e];
        }),
        n
      );
    };
  },
  function (e, t, n) {
    var r = n(185),
      o = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, n, i, l, a) {
      var s = 1 & n,
        u = r(e),
        c = u.length;
      if (c != r(t).length && !s) return !1;
      for (var f = c; f--; ) {
        var p = u[f];
        if (!(s ? p in t : o.call(t, p))) return !1;
      }
      var d = a.get(e),
        h = a.get(t);
      if (d && h) return d == t && h == e;
      var g = !0;
      a.set(e, t), a.set(t, e);
      for (var v = s; ++f < c; ) {
        var m = e[(p = u[f])],
          y = t[p];
        if (i) var b = s ? i(y, m, p, t, e, a) : i(m, y, p, e, t, a);
        if (!(void 0 === b ? m === y || l(m, y, n, i, a) : b)) {
          g = !1;
          break;
        }
        v || (v = "constructor" == p);
      }
      if (g && !v) {
        var w = e.constructor,
          _ = t.constructor;
        w == _ ||
          !("constructor" in e) ||
          !("constructor" in t) ||
          ("function" == typeof w &&
            w instanceof w &&
            "function" == typeof _ &&
            _ instanceof _) ||
          (g = !1);
      }
      return a.delete(e), a.delete(t), g;
    };
  },
  function (e, t, n) {
    var r = n(186),
      o = n(187),
      i = n(73);
    e.exports = function (e) {
      return r(e, i, o);
    };
  },
  function (e, t, n) {
    var r = n(63),
      o = n(4);
    e.exports = function (e, t, n) {
      var i = t(e);
      return o(e) ? i : r(i, n(e));
    };
  },
  function (e, t, n) {
    var r = n(188),
      o = n(189),
      i = Object.prototype.propertyIsEnumerable,
      l = Object.getOwnPropertySymbols,
      a = l
        ? function (e) {
            return null == e
              ? []
              : ((e = Object(e)),
                r(l(e), function (t) {
                  return i.call(e, t);
                }));
          }
        : o;
    e.exports = a;
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, r = null == e ? 0 : e.length, o = 0, i = []; ++n < r; ) {
        var l = e[n];
        t(l, n, e) && (i[o++] = l);
      }
      return i;
    };
  },
  function (e, t) {
    e.exports = function () {
      return [];
    };
  },
  function (e, t, n) {
    var r = n(191),
      o = n(36),
      i = n(4),
      l = n(74),
      a = n(76),
      s = n(77),
      u = Object.prototype.hasOwnProperty;
    e.exports = function (e, t) {
      var n = i(e),
        c = !n && o(e),
        f = !n && !c && l(e),
        p = !n && !c && !f && s(e),
        d = n || c || f || p,
        h = d ? r(e.length, String) : [],
        g = h.length;
      for (var v in e)
        (!t && !u.call(e, v)) ||
          (d &&
            ("length" == v ||
              (f && ("offset" == v || "parent" == v)) ||
              (p &&
                ("buffer" == v || "byteLength" == v || "byteOffset" == v)) ||
              a(v, g))) ||
          h.push(v);
      return h;
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
      return r;
    };
  },
  function (e, t) {
    e.exports = function () {
      return !1;
    };
  },
  function (e, t, n) {
    var r = n(12),
      o = n(41),
      i = n(11),
      l = {};
    (l["[object Float32Array]"] =
      l["[object Float64Array]"] =
      l["[object Int8Array]"] =
      l["[object Int16Array]"] =
      l["[object Int32Array]"] =
      l["[object Uint8Array]"] =
      l["[object Uint8ClampedArray]"] =
      l["[object Uint16Array]"] =
      l["[object Uint32Array]"] =
        !0),
      (l["[object Arguments]"] =
        l["[object Array]"] =
        l["[object ArrayBuffer]"] =
        l["[object Boolean]"] =
        l["[object DataView]"] =
        l["[object Date]"] =
        l["[object Error]"] =
        l["[object Function]"] =
        l["[object Map]"] =
        l["[object Number]"] =
        l["[object Object]"] =
        l["[object RegExp]"] =
        l["[object Set]"] =
        l["[object String]"] =
        l["[object WeakMap]"] =
          !1),
      (e.exports = function (e) {
        return i(e) && o(e.length) && !!l[r(e)];
      });
  },
  function (e, t) {
    e.exports = function (e) {
      return function (t) {
        return e(t);
      };
    };
  },
  function (e, t, n) {
    (function (e) {
      var r = n(64),
        o = t && !t.nodeType && t,
        i = o && "object" == typeof e && e && !e.nodeType && e,
        l = i && i.exports === o && r.process,
        a = (function () {
          try {
            var e = i && i.require && i.require("util").types;
            return e || (l && l.binding && l.binding("util"));
          } catch (e) {}
        })();
      e.exports = a;
    }).call(this, n(75)(e));
  },
  function (e, t, n) {
    var r = n(197),
      o = n(198),
      i = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
      if (!r(e)) return o(e);
      var t = [];
      for (var n in Object(e)) i.call(e, n) && "constructor" != n && t.push(n);
      return t;
    };
  },
  function (e, t) {
    var n = Object.prototype;
    e.exports = function (e) {
      var t = e && e.constructor;
      return e === (("function" == typeof t && t.prototype) || n);
    };
  },
  function (e, t, n) {
    var r = n(199)(Object.keys, Object);
    e.exports = r;
  },
  function (e, t) {
    e.exports = function (e, t) {
      return function (n) {
        return e(t(n));
      };
    };
  },
  function (e, t, n) {
    var r = n(201),
      o = n(37),
      i = n(202),
      l = n(79),
      a = n(203),
      s = n(12),
      u = n(68),
      c = u(r),
      f = u(o),
      p = u(i),
      d = u(l),
      h = u(a),
      g = s;
    ((r && "[object DataView]" != g(new r(new ArrayBuffer(1)))) ||
      (o && "[object Map]" != g(new o())) ||
      (i && "[object Promise]" != g(i.resolve())) ||
      (l && "[object Set]" != g(new l())) ||
      (a && "[object WeakMap]" != g(new a()))) &&
      (g = function (e) {
        var t = s(e),
          n = "[object Object]" == t ? e.constructor : void 0,
          r = n ? u(n) : "";
        if (r)
          switch (r) {
            case c:
              return "[object DataView]";
            case f:
              return "[object Map]";
            case p:
              return "[object Promise]";
            case d:
              return "[object Set]";
            case h:
              return "[object WeakMap]";
          }
        return t;
      }),
      (e.exports = g);
  },
  function (e, t, n) {
    var r = n(9)(n(7), "DataView");
    e.exports = r;
  },
  function (e, t, n) {
    var r = n(9)(n(7), "Promise");
    e.exports = r;
  },
  function (e, t, n) {
    var r = n(9)(n(7), "WeakMap");
    e.exports = r;
  },
  function (e, t, n) {
    var r = n(80),
      o = n(73);
    e.exports = function (e) {
      for (var t = o(e), n = t.length; n--; ) {
        var i = t[n],
          l = e[i];
        t[n] = [i, l, r(l)];
      }
      return t;
    };
  },
  function (e, t, n) {
    var r = n(69),
      o = n(96),
      i = n(212),
      l = n(42),
      a = n(80),
      s = n(81),
      u = n(21);
    e.exports = function (e, t) {
      return l(e) && a(t)
        ? s(u(e), t)
        : function (n) {
            var l = o(n, e);
            return void 0 === l && l === t ? i(n, e) : r(t, l, 3);
          };
    };
  },
  function (e, t, n) {
    var r = n(207),
      o =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      i = /\\(\\)?/g,
      l = r(function (e) {
        var t = [];
        return (
          46 === e.charCodeAt(0) && t.push(""),
          e.replace(o, function (e, n, r, o) {
            t.push(r ? o.replace(i, "$1") : n || e);
          }),
          t
        );
      });
    e.exports = l;
  },
  function (e, t, n) {
    var r = n(208);
    e.exports = function (e) {
      var t = r(e, function (e) {
          return 500 === n.size && n.clear(), e;
        }),
        n = t.cache;
      return t;
    };
  },
  function (e, t, n) {
    var r = n(39);
    function o(e, t) {
      if ("function" != typeof e || (null != t && "function" != typeof t))
        throw new TypeError("Expected a function");
      var n = function () {
        var r = arguments,
          o = t ? t.apply(this, r) : r[0],
          i = n.cache;
        if (i.has(o)) return i.get(o);
        var l = e.apply(this, r);
        return (n.cache = i.set(o, l) || i), l;
      };
      return (n.cache = new (o.Cache || r)()), n;
    }
    (o.Cache = r), (e.exports = o);
  },
  function (e, t, n) {
    var r = n(210);
    e.exports = function (e) {
      return null == e ? "" : r(e);
    };
  },
  function (e, t, n) {
    var r = n(14),
      o = n(211),
      i = n(4),
      l = n(43),
      a = r ? r.prototype : void 0,
      s = a ? a.toString : void 0;
    e.exports = function e(t) {
      if ("string" == typeof t) return t;
      if (i(t)) return o(t, e) + "";
      if (l(t)) return s ? s.call(t) : "";
      var n = t + "";
      return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r; )
        o[n] = t(e[n], n, e);
      return o;
    };
  },
  function (e, t, n) {
    var r = n(213),
      o = n(214);
    e.exports = function (e, t) {
      return null != e && o(e, t, r);
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return null != e && t in Object(e);
    };
  },
  function (e, t, n) {
    var r = n(83),
      o = n(36),
      i = n(4),
      l = n(76),
      a = n(41),
      s = n(21);
    e.exports = function (e, t, n) {
      for (var u = -1, c = (t = r(t, e)).length, f = !1; ++u < c; ) {
        var p = s(t[u]);
        if (!(f = null != e && n(e, p))) break;
        e = e[p];
      }
      return f || ++u != c
        ? f
        : !!(c = null == e ? 0 : e.length) && a(c) && l(p, c) && (i(e) || o(e));
    };
  },
  function (e, t, n) {
    var r = n(216),
      o = n(217),
      i = n(42),
      l = n(21);
    e.exports = function (e) {
      return i(e) ? r(l(e)) : o(e);
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return function (t) {
        return null == t ? void 0 : t[e];
      };
    };
  },
  function (e, t, n) {
    var r = n(82);
    e.exports = function (e) {
      return function (t) {
        return r(t, e);
      };
    };
  },
  function (e, t, n) {
    var r = n(44),
      o = n(219),
      i = n(221);
    e.exports = function (e, t) {
      return i(o(e, t, r), e + "");
    };
  },
  function (e, t, n) {
    var r = n(220),
      o = Math.max;
    e.exports = function (e, t, n) {
      return (
        (t = o(void 0 === t ? e.length - 1 : t, 0)),
        function () {
          for (
            var i = arguments, l = -1, a = o(i.length - t, 0), s = Array(a);
            ++l < a;

          )
            s[l] = i[t + l];
          l = -1;
          for (var u = Array(t + 1); ++l < t; ) u[l] = i[l];
          return (u[t] = n(s)), r(e, this, u);
        }
      );
    };
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    };
  },
  function (e, t, n) {
    var r = n(222),
      o = n(225)(r);
    e.exports = o;
  },
  function (e, t, n) {
    var r = n(223),
      o = n(224),
      i = n(44),
      l = o
        ? function (e, t) {
            return o(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: r(t),
              writable: !0,
            });
          }
        : i;
    e.exports = l;
  },
  function (e, t) {
    e.exports = function (e) {
      return function () {
        return e;
      };
    };
  },
  function (e, t, n) {
    var r = n(9),
      o = (function () {
        try {
          var e = r(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch (e) {}
      })();
    e.exports = o;
  },
  function (e, t) {
    var n = Date.now;
    e.exports = function (e) {
      var t = 0,
        r = 0;
      return function () {
        var o = n(),
          i = 16 - (o - r);
        if (((r = o), i > 0)) {
          if (++t >= 800) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    };
  },
  function (e, t, n) {
    var r = n(71),
      o = n(227),
      i = n(232),
      l = n(72),
      a = n(233),
      s = n(40);
    e.exports = function (e, t, n) {
      var u = -1,
        c = o,
        f = e.length,
        p = !0,
        d = [],
        h = d;
      if (n) (p = !1), (c = i);
      else if (f >= 200) {
        var g = t ? null : a(e);
        if (g) return s(g);
        (p = !1), (c = l), (h = new r());
      } else h = t ? [] : d;
      e: for (; ++u < f; ) {
        var v = e[u],
          m = t ? t(v) : v;
        if (((v = n || 0 !== v ? v : 0), p && m == m)) {
          for (var y = h.length; y--; ) if (h[y] === m) continue e;
          t && h.push(m), d.push(v);
        } else c(h, m, n) || (h !== d && h.push(m), d.push(v));
      }
      return d;
    };
  },
  function (e, t, n) {
    var r = n(228);
    e.exports = function (e, t) {
      return !!(null == e ? 0 : e.length) && r(e, t, 0) > -1;
    };
  },
  function (e, t, n) {
    var r = n(229),
      o = n(230),
      i = n(231);
    e.exports = function (e, t, n) {
      return t == t ? i(e, t, n) : r(e, o, n);
    };
  },
  function (e, t) {
    e.exports = function (e, t, n, r) {
      for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
        if (t(e[i], i, e)) return i;
      return -1;
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return e != e;
    };
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      for (var r = n - 1, o = e.length; ++r < o; ) if (e[r] === t) return r;
      return -1;
    };
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      for (var r = -1, o = null == e ? 0 : e.length; ++r < o; )
        if (n(t, e[r])) return !0;
      return !1;
    };
  },
  function (e, t, n) {
    var r = n(79),
      o = n(234),
      i = n(40),
      l =
        r && 1 / i(new r([, -0]))[1] == 1 / 0
          ? function (e) {
              return new r(e);
            }
          : o;
    e.exports = l;
  },
  function (e, t) {
    e.exports = function () {};
  },
  function (e, t, n) {
    var r = n(78),
      o = n(11);
    e.exports = function (e) {
      return o(e) && r(e);
    };
  },
  function (e, t, n) {
    "use strict";
    n(84);
  },
  function (e, t, n) {},
  function (e, t, n) {},
  function (e, t, n) {},
  function (e, t, n) {},
  function (e, t, n) {
    "use strict";
    n(85);
  },
  function (e, t, n) {
    "use strict";
    n(86);
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    /*!
     * Vue.js v2.7.16
     * (c) 2014-2023 Evan You
     * Released under the MIT License.
     */
    var r = Object.freeze({}),
      o = Array.isArray;
    function i(e) {
      return null == e;
    }
    function l(e) {
      return null != e;
    }
    function a(e) {
      return !0 === e;
    }
    function s(e) {
      return (
        "string" == typeof e ||
        "number" == typeof e ||
        "symbol" == typeof e ||
        "boolean" == typeof e
      );
    }
    function u(e) {
      return "function" == typeof e;
    }
    function c(e) {
      return null !== e && "object" == typeof e;
    }
    var f = Object.prototype.toString;
    function p(e) {
      return "[object Object]" === f.call(e);
    }
    function d(e) {
      return "[object RegExp]" === f.call(e);
    }
    function h(e) {
      var t = parseFloat(String(e));
      return t >= 0 && Math.floor(t) === t && isFinite(e);
    }
    function g(e) {
      return (
        l(e) && "function" == typeof e.then && "function" == typeof e.catch
      );
    }
    function v(e) {
      return null == e
        ? ""
        : Array.isArray(e) || (p(e) && e.toString === f)
        ? JSON.stringify(e, m, 2)
        : String(e);
    }
    function m(e, t) {
      return t && t.__v_isRef ? t.value : t;
    }
    function y(e) {
      var t = parseFloat(e);
      return isNaN(t) ? e : t;
    }
    function b(e, t) {
      for (
        var n = Object.create(null), r = e.split(","), o = 0;
        o < r.length;
        o++
      )
        n[r[o]] = !0;
      return t
        ? function (e) {
            return n[e.toLowerCase()];
          }
        : function (e) {
            return n[e];
          };
    }
    b("slot,component", !0);
    var w = b("key,ref,slot,slot-scope,is");
    function _(e, t) {
      var n = e.length;
      if (n) {
        if (t === e[n - 1]) return void (e.length = n - 1);
        var r = e.indexOf(t);
        if (r > -1) return e.splice(r, 1);
      }
    }
    var x = Object.prototype.hasOwnProperty;
    function k(e, t) {
      return x.call(e, t);
    }
    function C(e) {
      var t = Object.create(null);
      return function (n) {
        return t[n] || (t[n] = e(n));
      };
    }
    var S = /-(\w)/g,
      O = C(function (e) {
        return e.replace(S, function (e, t) {
          return t ? t.toUpperCase() : "";
        });
      }),
      T = C(function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }),
      j = /\B([A-Z])/g,
      $ = C(function (e) {
        return e.replace(j, "-$1").toLowerCase();
      });
    var A = Function.prototype.bind
      ? function (e, t) {
          return e.bind(t);
        }
      : function (e, t) {
          function n(n) {
            var r = arguments.length;
            return r
              ? r > 1
                ? e.apply(t, arguments)
                : e.call(t, n)
              : e.call(t);
          }
          return (n._length = e.length), n;
        };
    function E(e, t) {
      t = t || 0;
      for (var n = e.length - t, r = new Array(n); n--; ) r[n] = e[n + t];
      return r;
    }
    function P(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function L(e) {
      for (var t = {}, n = 0; n < e.length; n++) e[n] && P(t, e[n]);
      return t;
    }
    function R(e, t, n) {}
    var z = function (e, t, n) {
        return !1;
      },
      D = function (e) {
        return e;
      };
    function I(e, t) {
      if (e === t) return !0;
      var n = c(e),
        r = c(t);
      if (!n || !r) return !n && !r && String(e) === String(t);
      try {
        var o = Array.isArray(e),
          i = Array.isArray(t);
        if (o && i)
          return (
            e.length === t.length &&
            e.every(function (e, n) {
              return I(e, t[n]);
            })
          );
        if (e instanceof Date && t instanceof Date)
          return e.getTime() === t.getTime();
        if (o || i) return !1;
        var l = Object.keys(e),
          a = Object.keys(t);
        return (
          l.length === a.length &&
          l.every(function (n) {
            return I(e[n], t[n]);
          })
        );
      } catch (e) {
        return !1;
      }
    }
    function M(e, t) {
      for (var n = 0; n < e.length; n++) if (I(e[n], t)) return n;
      return -1;
    }
    function B(e) {
      var t = !1;
      return function () {
        t || ((t = !0), e.apply(this, arguments));
      };
    }
    function U(e, t) {
      return e === t ? 0 === e && 1 / e != 1 / t : e == e || t == t;
    }
    var F = ["component", "directive", "filter"],
      N = [
        "beforeCreate",
        "created",
        "beforeMount",
        "mounted",
        "beforeUpdate",
        "updated",
        "beforeDestroy",
        "destroyed",
        "activated",
        "deactivated",
        "errorCaptured",
        "serverPrefetch",
        "renderTracked",
        "renderTriggered",
      ],
      H = {
        optionMergeStrategies: Object.create(null),
        silent: !1,
        productionTip: !1,
        devtools: !1,
        performance: !1,
        errorHandler: null,
        warnHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: z,
        isReservedAttr: z,
        isUnknownElement: z,
        getTagNamespace: R,
        parsePlatformTagName: D,
        mustUseProp: z,
        async: !0,
        _lifecycleHooks: N,
      },
      W =
        /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
    function V(e) {
      var t = (e + "").charCodeAt(0);
      return 36 === t || 95 === t;
    }
    function q(e, t, n, r) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: !!r,
        writable: !0,
        configurable: !0,
      });
    }
    var Z = new RegExp("[^".concat(W.source, ".$_\\d]"));
    var G = "__proto__" in {},
      Y = "undefined" != typeof window,
      K = Y && window.navigator.userAgent.toLowerCase(),
      Q = K && /msie|trident/.test(K),
      X = K && K.indexOf("msie 9.0") > 0,
      J = K && K.indexOf("edge/") > 0;
    K && K.indexOf("android");
    var ee = K && /iphone|ipad|ipod|ios/.test(K);
    K && /chrome\/\d+/.test(K), K && /phantomjs/.test(K);
    var te,
      ne = K && K.match(/firefox\/(\d+)/),
      re = {}.watch,
      oe = !1;
    if (Y)
      try {
        var ie = {};
        Object.defineProperty(ie, "passive", {
          get: function () {
            oe = !0;
          },
        }),
          window.addEventListener("test-passive", null, ie);
      } catch (e) {}
    var le = function () {
        return (
          void 0 === te &&
            (te =
              !Y &&
              "undefined" != typeof global &&
              global.process &&
              "server" === global.process.env.VUE_ENV),
          te
        );
      },
      ae = Y && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    function se(e) {
      return "function" == typeof e && /native code/.test(e.toString());
    }
    var ue,
      ce =
        "undefined" != typeof Symbol &&
        se(Symbol) &&
        "undefined" != typeof Reflect &&
        se(Reflect.ownKeys);
    ue =
      "undefined" != typeof Set && se(Set)
        ? Set
        : (function () {
            function e() {
              this.set = Object.create(null);
            }
            return (
              (e.prototype.has = function (e) {
                return !0 === this.set[e];
              }),
              (e.prototype.add = function (e) {
                this.set[e] = !0;
              }),
              (e.prototype.clear = function () {
                this.set = Object.create(null);
              }),
              e
            );
          })();
    var fe = null;
    function pe(e) {
      void 0 === e && (e = null),
        e || (fe && fe._scope.off()),
        (fe = e),
        e && e._scope.on();
    }
    var de = (function () {
        function e(e, t, n, r, o, i, l, a) {
          (this.tag = e),
            (this.data = t),
            (this.children = n),
            (this.text = r),
            (this.elm = o),
            (this.ns = void 0),
            (this.context = i),
            (this.fnContext = void 0),
            (this.fnOptions = void 0),
            (this.fnScopeId = void 0),
            (this.key = t && t.key),
            (this.componentOptions = l),
            (this.componentInstance = void 0),
            (this.parent = void 0),
            (this.raw = !1),
            (this.isStatic = !1),
            (this.isRootInsert = !0),
            (this.isComment = !1),
            (this.isCloned = !1),
            (this.isOnce = !1),
            (this.asyncFactory = a),
            (this.asyncMeta = void 0),
            (this.isAsyncPlaceholder = !1);
        }
        return (
          Object.defineProperty(e.prototype, "child", {
            get: function () {
              return this.componentInstance;
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(),
      he = function (e) {
        void 0 === e && (e = "");
        var t = new de();
        return (t.text = e), (t.isComment = !0), t;
      };
    function ge(e) {
      return new de(void 0, void 0, void 0, String(e));
    }
    function ve(e) {
      var t = new de(
        e.tag,
        e.data,
        e.children && e.children.slice(),
        e.text,
        e.elm,
        e.context,
        e.componentOptions,
        e.asyncFactory
      );
      return (
        (t.ns = e.ns),
        (t.isStatic = e.isStatic),
        (t.key = e.key),
        (t.isComment = e.isComment),
        (t.fnContext = e.fnContext),
        (t.fnOptions = e.fnOptions),
        (t.fnScopeId = e.fnScopeId),
        (t.asyncMeta = e.asyncMeta),
        (t.isCloned = !0),
        t
      );
    }
    "function" == typeof SuppressedError && SuppressedError;
    var me = 0,
      ye = [],
      be = (function () {
        function e() {
          (this._pending = !1), (this.id = me++), (this.subs = []);
        }
        return (
          (e.prototype.addSub = function (e) {
            this.subs.push(e);
          }),
          (e.prototype.removeSub = function (e) {
            (this.subs[this.subs.indexOf(e)] = null),
              this._pending || ((this._pending = !0), ye.push(this));
          }),
          (e.prototype.depend = function (t) {
            e.target && e.target.addDep(this);
          }),
          (e.prototype.notify = function (e) {
            var t = this.subs.filter(function (e) {
              return e;
            });
            for (var n = 0, r = t.length; n < r; n++) {
              0, t[n].update();
            }
          }),
          e
        );
      })();
    be.target = null;
    var we = [];
    function _e(e) {
      we.push(e), (be.target = e);
    }
    function xe() {
      we.pop(), (be.target = we[we.length - 1]);
    }
    var ke = Array.prototype,
      Ce = Object.create(ke);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(
      function (e) {
        var t = ke[e];
        q(Ce, e, function () {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          var o,
            i = t.apply(this, n),
            l = this.__ob__;
          switch (e) {
            case "push":
            case "unshift":
              o = n;
              break;
            case "splice":
              o = n.slice(2);
          }
          return o && l.observeArray(o), l.dep.notify(), i;
        });
      }
    );
    var Se = Object.getOwnPropertyNames(Ce),
      Oe = {},
      Te = !0;
    function je(e) {
      Te = e;
    }
    var $e = { notify: R, depend: R, addSub: R, removeSub: R },
      Ae = (function () {
        function e(e, t, n) {
          if (
            (void 0 === t && (t = !1),
            void 0 === n && (n = !1),
            (this.value = e),
            (this.shallow = t),
            (this.mock = n),
            (this.dep = n ? $e : new be()),
            (this.vmCount = 0),
            q(e, "__ob__", this),
            o(e))
          ) {
            if (!n)
              if (G) e.__proto__ = Ce;
              else
                for (var r = 0, i = Se.length; r < i; r++) {
                  q(e, (a = Se[r]), Ce[a]);
                }
            t || this.observeArray(e);
          } else {
            var l = Object.keys(e);
            for (r = 0; r < l.length; r++) {
              var a;
              Pe(e, (a = l[r]), Oe, void 0, t, n);
            }
          }
        }
        return (
          (e.prototype.observeArray = function (e) {
            for (var t = 0, n = e.length; t < n; t++) Ee(e[t], !1, this.mock);
          }),
          e
        );
      })();
    function Ee(e, t, n) {
      return e && k(e, "__ob__") && e.__ob__ instanceof Ae
        ? e.__ob__
        : !Te ||
          (!n && le()) ||
          (!o(e) && !p(e)) ||
          !Object.isExtensible(e) ||
          e.__v_skip ||
          Be(e) ||
          e instanceof de
        ? void 0
        : new Ae(e, t, n);
    }
    function Pe(e, t, n, r, i, l, a) {
      void 0 === a && (a = !1);
      var s = new be(),
        u = Object.getOwnPropertyDescriptor(e, t);
      if (!u || !1 !== u.configurable) {
        var c = u && u.get,
          f = u && u.set;
        (c && !f) || (n !== Oe && 2 !== arguments.length) || (n = e[t]);
        var p = i ? n && n.__ob__ : Ee(n, !1, l);
        return (
          Object.defineProperty(e, t, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              var t = c ? c.call(e) : n;
              return (
                be.target && (s.depend(), p && (p.dep.depend(), o(t) && ze(t))),
                Be(t) && !i ? t.value : t
              );
            },
            set: function (t) {
              var r = c ? c.call(e) : n;
              if (U(r, t)) {
                if (f) f.call(e, t);
                else {
                  if (c) return;
                  if (!i && Be(r) && !Be(t)) return void (r.value = t);
                  n = t;
                }
                (p = i ? t && t.__ob__ : Ee(t, !1, l)), s.notify();
              }
            },
          }),
          s
        );
      }
    }
    function Le(e, t, n) {
      if (!Me(e)) {
        var r = e.__ob__;
        return o(e) && h(t)
          ? ((e.length = Math.max(e.length, t)),
            e.splice(t, 1, n),
            r && !r.shallow && r.mock && Ee(n, !1, !0),
            n)
          : t in e && !(t in Object.prototype)
          ? ((e[t] = n), n)
          : e._isVue || (r && r.vmCount)
          ? n
          : r
          ? (Pe(r.value, t, n, void 0, r.shallow, r.mock), r.dep.notify(), n)
          : ((e[t] = n), n);
      }
    }
    function Re(e, t) {
      if (o(e) && h(t)) e.splice(t, 1);
      else {
        var n = e.__ob__;
        e._isVue ||
          (n && n.vmCount) ||
          Me(e) ||
          (k(e, t) && (delete e[t], n && n.dep.notify()));
      }
    }
    function ze(e) {
      for (var t = void 0, n = 0, r = e.length; n < r; n++)
        (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), o(t) && ze(t);
    }
    function De(e) {
      return Ie(e, !0), q(e, "__v_isShallow", !0), e;
    }
    function Ie(e, t) {
      if (!Me(e)) {
        Ee(e, t, le());
        0;
      }
    }
    function Me(e) {
      return !(!e || !e.__v_isReadonly);
    }
    function Be(e) {
      return !(!e || !0 !== e.__v_isRef);
    }
    function Ue(e, t, n) {
      Object.defineProperty(e, n, {
        enumerable: !0,
        configurable: !0,
        get: function () {
          var e = t[n];
          if (Be(e)) return e.value;
          var r = e && e.__ob__;
          return r && r.dep.depend(), e;
        },
        set: function (e) {
          var r = t[n];
          Be(r) && !Be(e) ? (r.value = e) : (t[n] = e);
        },
      });
    }
    "".concat("watcher", " callback"),
      "".concat("watcher", " getter"),
      "".concat("watcher", " cleanup");
    var Fe;
    var Ne = (function () {
      function e(e) {
        void 0 === e && (e = !1),
          (this.detached = e),
          (this.active = !0),
          (this.effects = []),
          (this.cleanups = []),
          (this.parent = Fe),
          !e &&
            Fe &&
            (this.index = (Fe.scopes || (Fe.scopes = [])).push(this) - 1);
      }
      return (
        (e.prototype.run = function (e) {
          if (this.active) {
            var t = Fe;
            try {
              return (Fe = this), e();
            } finally {
              Fe = t;
            }
          } else 0;
        }),
        (e.prototype.on = function () {
          Fe = this;
        }),
        (e.prototype.off = function () {
          Fe = this.parent;
        }),
        (e.prototype.stop = function (e) {
          if (this.active) {
            var t = void 0,
              n = void 0;
            for (t = 0, n = this.effects.length; t < n; t++)
              this.effects[t].teardown();
            for (t = 0, n = this.cleanups.length; t < n; t++)
              this.cleanups[t]();
            if (this.scopes)
              for (t = 0, n = this.scopes.length; t < n; t++)
                this.scopes[t].stop(!0);
            if (!this.detached && this.parent && !e) {
              var r = this.parent.scopes.pop();
              r &&
                r !== this &&
                ((this.parent.scopes[this.index] = r), (r.index = this.index));
            }
            (this.parent = void 0), (this.active = !1);
          }
        }),
        e
      );
    })();
    function He(e) {
      var t = e._provided,
        n = e.$parent && e.$parent._provided;
      return n === t ? (e._provided = Object.create(n)) : t;
    }
    var We = C(function (e) {
      var t = "&" === e.charAt(0),
        n = "~" === (e = t ? e.slice(1) : e).charAt(0),
        r = "!" === (e = n ? e.slice(1) : e).charAt(0);
      return {
        name: (e = r ? e.slice(1) : e),
        once: n,
        capture: r,
        passive: t,
      };
    });
    function Ve(e, t) {
      function n() {
        var e = n.fns;
        if (!o(e)) return Tt(e, null, arguments, t, "v-on handler");
        for (var r = e.slice(), i = 0; i < r.length; i++)
          Tt(r[i], null, arguments, t, "v-on handler");
      }
      return (n.fns = e), n;
    }
    function qe(e, t, n, r, o, l) {
      var s, u, c, f;
      for (s in e)
        (u = e[s]),
          (c = t[s]),
          (f = We(s)),
          i(u) ||
            (i(c)
              ? (i(u.fns) && (u = e[s] = Ve(u, l)),
                a(f.once) && (u = e[s] = o(f.name, u, f.capture)),
                n(f.name, u, f.capture, f.passive, f.params))
              : u !== c && ((c.fns = u), (e[s] = c)));
      for (s in t) i(e[s]) && r((f = We(s)).name, t[s], f.capture);
    }
    function Ze(e, t, n) {
      var r;
      e instanceof de && (e = e.data.hook || (e.data.hook = {}));
      var o = e[t];
      function s() {
        n.apply(this, arguments), _(r.fns, s);
      }
      i(o)
        ? (r = Ve([s]))
        : l(o.fns) && a(o.merged)
        ? (r = o).fns.push(s)
        : (r = Ve([o, s])),
        (r.merged = !0),
        (e[t] = r);
    }
    function Ge(e, t, n, r, o) {
      if (l(t)) {
        if (k(t, n)) return (e[n] = t[n]), o || delete t[n], !0;
        if (k(t, r)) return (e[n] = t[r]), o || delete t[r], !0;
      }
      return !1;
    }
    function Ye(e) {
      return s(e)
        ? [ge(e)]
        : o(e)
        ? (function e(t, n) {
            var r,
              u,
              c,
              f,
              p = [];
            for (r = 0; r < t.length; r++)
              i((u = t[r])) ||
                "boolean" == typeof u ||
                ((c = p.length - 1),
                (f = p[c]),
                o(u)
                  ? u.length > 0 &&
                    (Ke((u = e(u, "".concat(n || "", "_").concat(r)))[0]) &&
                      Ke(f) &&
                      ((p[c] = ge(f.text + u[0].text)), u.shift()),
                    p.push.apply(p, u))
                  : s(u)
                  ? Ke(f)
                    ? (p[c] = ge(f.text + u))
                    : "" !== u && p.push(ge(u))
                  : Ke(u) && Ke(f)
                  ? (p[c] = ge(f.text + u.text))
                  : (a(t._isVList) &&
                      l(u.tag) &&
                      i(u.key) &&
                      l(n) &&
                      (u.key = "__vlist".concat(n, "_").concat(r, "__")),
                    p.push(u)));
            return p;
          })(e)
        : void 0;
    }
    function Ke(e) {
      return l(e) && l(e.text) && !1 === e.isComment;
    }
    function Qe(e, t) {
      var n,
        r,
        i,
        a,
        s = null;
      if (o(e) || "string" == typeof e)
        for (s = new Array(e.length), n = 0, r = e.length; n < r; n++)
          s[n] = t(e[n], n);
      else if ("number" == typeof e)
        for (s = new Array(e), n = 0; n < e; n++) s[n] = t(n + 1, n);
      else if (c(e))
        if (ce && e[Symbol.iterator]) {
          s = [];
          for (var u = e[Symbol.iterator](), f = u.next(); !f.done; )
            s.push(t(f.value, s.length)), (f = u.next());
        } else
          for (
            i = Object.keys(e), s = new Array(i.length), n = 0, r = i.length;
            n < r;
            n++
          )
            (a = i[n]), (s[n] = t(e[a], a, n));
      return l(s) || (s = []), (s._isVList = !0), s;
    }
    function Xe(e, t, n, r) {
      var o,
        i = this.$scopedSlots[e];
      i
        ? ((n = n || {}),
          r && (n = P(P({}, r), n)),
          (o = i(n) || (u(t) ? t() : t)))
        : (o = this.$slots[e] || (u(t) ? t() : t));
      var l = n && n.slot;
      return l ? this.$createElement("template", { slot: l }, o) : o;
    }
    function Je(e) {
      return En(this.$options, "filters", e, !0) || D;
    }
    function et(e, t) {
      return o(e) ? -1 === e.indexOf(t) : e !== t;
    }
    function tt(e, t, n, r, o) {
      var i = H.keyCodes[t] || n;
      return o && r && !H.keyCodes[t]
        ? et(o, r)
        : i
        ? et(i, e)
        : r
        ? $(r) !== t
        : void 0 === e;
    }
    function nt(e, t, n, r, i) {
      if (n)
        if (c(n)) {
          o(n) && (n = L(n));
          var l = void 0,
            a = function (o) {
              if ("class" === o || "style" === o || w(o)) l = e;
              else {
                var a = e.attrs && e.attrs.type;
                l =
                  r || H.mustUseProp(t, a, o)
                    ? e.domProps || (e.domProps = {})
                    : e.attrs || (e.attrs = {});
              }
              var s = O(o),
                u = $(o);
              s in l ||
                u in l ||
                ((l[o] = n[o]),
                i &&
                  ((e.on || (e.on = {}))["update:".concat(o)] = function (e) {
                    n[o] = e;
                  }));
            };
          for (var s in n) a(s);
        } else;
      return e;
    }
    function rt(e, t) {
      var n = this._staticTrees || (this._staticTrees = []),
        r = n[e];
      return (
        (r && !t) ||
          it(
            (r = n[e] =
              this.$options.staticRenderFns[e].call(
                this._renderProxy,
                this._c,
                this
              )),
            "__static__".concat(e),
            !1
          ),
        r
      );
    }
    function ot(e, t, n) {
      return it(e, "__once__".concat(t).concat(n ? "_".concat(n) : ""), !0), e;
    }
    function it(e, t, n) {
      if (o(e))
        for (var r = 0; r < e.length; r++)
          e[r] &&
            "string" != typeof e[r] &&
            lt(e[r], "".concat(t, "_").concat(r), n);
      else lt(e, t, n);
    }
    function lt(e, t, n) {
      (e.isStatic = !0), (e.key = t), (e.isOnce = n);
    }
    function at(e, t) {
      if (t)
        if (p(t)) {
          var n = (e.on = e.on ? P({}, e.on) : {});
          for (var r in t) {
            var o = n[r],
              i = t[r];
            n[r] = o ? [].concat(o, i) : i;
          }
        } else;
      return e;
    }
    function st(e, t, n, r) {
      t = t || { $stable: !n };
      for (var i = 0; i < e.length; i++) {
        var l = e[i];
        o(l)
          ? st(l, t, n)
          : l && (l.proxy && (l.fn.proxy = !0), (t[l.key] = l.fn));
      }
      return r && (t.$key = r), t;
    }
    function ut(e, t) {
      for (var n = 0; n < t.length; n += 2) {
        var r = t[n];
        "string" == typeof r && r && (e[t[n]] = t[n + 1]);
      }
      return e;
    }
    function ct(e, t) {
      return "string" == typeof e ? t + e : e;
    }
    function ft(e) {
      (e._o = ot),
        (e._n = y),
        (e._s = v),
        (e._l = Qe),
        (e._t = Xe),
        (e._q = I),
        (e._i = M),
        (e._m = rt),
        (e._f = Je),
        (e._k = tt),
        (e._b = nt),
        (e._v = ge),
        (e._e = he),
        (e._u = st),
        (e._g = at),
        (e._d = ut),
        (e._p = ct);
    }
    function pt(e, t) {
      if (!e || !e.length) return {};
      for (var n = {}, r = 0, o = e.length; r < o; r++) {
        var i = e[r],
          l = i.data;
        if (
          (l && l.attrs && l.attrs.slot && delete l.attrs.slot,
          (i.context !== t && i.fnContext !== t) || !l || null == l.slot)
        )
          (n.default || (n.default = [])).push(i);
        else {
          var a = l.slot,
            s = n[a] || (n[a] = []);
          "template" === i.tag ? s.push.apply(s, i.children || []) : s.push(i);
        }
      }
      for (var u in n) n[u].every(dt) && delete n[u];
      return n;
    }
    function dt(e) {
      return (e.isComment && !e.asyncFactory) || " " === e.text;
    }
    function ht(e) {
      return e.isComment && e.asyncFactory;
    }
    function gt(e, t, n, o) {
      var i,
        l = Object.keys(n).length > 0,
        a = t ? !!t.$stable : !l,
        s = t && t.$key;
      if (t) {
        if (t._normalized) return t._normalized;
        if (a && o && o !== r && s === o.$key && !l && !o.$hasNormal) return o;
        for (var u in ((i = {}), t))
          t[u] && "$" !== u[0] && (i[u] = vt(e, n, u, t[u]));
      } else i = {};
      for (var c in n) c in i || (i[c] = mt(n, c));
      return (
        t && Object.isExtensible(t) && (t._normalized = i),
        q(i, "$stable", a),
        q(i, "$key", s),
        q(i, "$hasNormal", l),
        i
      );
    }
    function vt(e, t, n, r) {
      var i = function () {
        var t = fe;
        pe(e);
        var n = arguments.length ? r.apply(null, arguments) : r({}),
          i = (n = n && "object" == typeof n && !o(n) ? [n] : Ye(n)) && n[0];
        return (
          pe(t),
          n && (!i || (1 === n.length && i.isComment && !ht(i))) ? void 0 : n
        );
      };
      return (
        r.proxy &&
          Object.defineProperty(t, n, {
            get: i,
            enumerable: !0,
            configurable: !0,
          }),
        i
      );
    }
    function mt(e, t) {
      return function () {
        return e[t];
      };
    }
    function yt(e) {
      return {
        get attrs() {
          if (!e._attrsProxy) {
            var t = (e._attrsProxy = {});
            q(t, "_v_attr_proxy", !0), bt(t, e.$attrs, r, e, "$attrs");
          }
          return e._attrsProxy;
        },
        get listeners() {
          e._listenersProxy ||
            bt((e._listenersProxy = {}), e.$listeners, r, e, "$listeners");
          return e._listenersProxy;
        },
        get slots() {
          return (function (e) {
            e._slotsProxy || _t((e._slotsProxy = {}), e.$scopedSlots);
            return e._slotsProxy;
          })(e);
        },
        emit: A(e.$emit, e),
        expose: function (t) {
          t &&
            Object.keys(t).forEach(function (n) {
              return Ue(e, t, n);
            });
        },
      };
    }
    function bt(e, t, n, r, o) {
      var i = !1;
      for (var l in t)
        l in e ? t[l] !== n[l] && (i = !0) : ((i = !0), wt(e, l, r, o));
      for (var l in e) l in t || ((i = !0), delete e[l]);
      return i;
    }
    function wt(e, t, n, r) {
      Object.defineProperty(e, t, {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return n[r][t];
        },
      });
    }
    function _t(e, t) {
      for (var n in t) e[n] = t[n];
      for (var n in e) n in t || delete e[n];
    }
    var xt = null;
    function kt(e, t) {
      return (
        (e.__esModule || (ce && "Module" === e[Symbol.toStringTag])) &&
          (e = e.default),
        c(e) ? t.extend(e) : e
      );
    }
    function Ct(e) {
      if (o(e))
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          if (l(n) && (l(n.componentOptions) || ht(n))) return n;
        }
    }
    function St(e, t, n, r, f, p) {
      return (
        (o(n) || s(n)) && ((f = r), (r = n), (n = void 0)),
        a(p) && (f = 2),
        (function (e, t, n, r, s) {
          if (l(n) && l(n.__ob__)) return he();
          l(n) && l(n.is) && (t = n.is);
          if (!t) return he();
          0;
          o(r) &&
            u(r[0]) &&
            (((n = n || {}).scopedSlots = { default: r[0] }), (r.length = 0));
          2 === s
            ? (r = Ye(r))
            : 1 === s &&
              (r = (function (e) {
                for (var t = 0; t < e.length; t++)
                  if (o(e[t])) return Array.prototype.concat.apply([], e);
                return e;
              })(r));
          var f, p;
          if ("string" == typeof t) {
            var d = void 0;
            (p = (e.$vnode && e.$vnode.ns) || H.getTagNamespace(t)),
              (f = H.isReservedTag(t)
                ? new de(H.parsePlatformTagName(t), n, r, void 0, void 0, e)
                : (n && n.pre) || !l((d = En(e.$options, "components", t)))
                ? new de(t, n, r, void 0, void 0, e)
                : _n(d, n, e, r, t));
          } else f = _n(t, n, e, r);
          return o(f)
            ? f
            : l(f)
            ? (l(p) &&
                (function e(t, n, r) {
                  (t.ns = n),
                    "foreignObject" === t.tag && ((n = void 0), (r = !0));
                  if (l(t.children))
                    for (var o = 0, s = t.children.length; o < s; o++) {
                      var u = t.children[o];
                      l(u.tag) &&
                        (i(u.ns) || (a(r) && "svg" !== u.tag)) &&
                        e(u, n, r);
                    }
                })(f, p),
              l(n) &&
                (function (e) {
                  c(e.style) && Nt(e.style);
                  c(e.class) && Nt(e.class);
                })(n),
              f)
            : he();
        })(e, t, n, r, f)
      );
    }
    function Ot(e, t, n) {
      _e();
      try {
        if (t)
          for (var r = t; (r = r.$parent); ) {
            var o = r.$options.errorCaptured;
            if (o)
              for (var i = 0; i < o.length; i++)
                try {
                  if (!1 === o[i].call(r, e, t, n)) return;
                } catch (e) {
                  jt(e, r, "errorCaptured hook");
                }
          }
        jt(e, t, n);
      } finally {
        xe();
      }
    }
    function Tt(e, t, n, r, o) {
      var i;
      try {
        (i = n ? e.apply(t, n) : e.call(t)) &&
          !i._isVue &&
          g(i) &&
          !i._handled &&
          (i.catch(function (e) {
            return Ot(e, r, o + " (Promise/async)");
          }),
          (i._handled = !0));
      } catch (e) {
        Ot(e, r, o);
      }
      return i;
    }
    function jt(e, t, n) {
      if (H.errorHandler)
        try {
          return H.errorHandler.call(null, e, t, n);
        } catch (t) {
          t !== e && $t(t, null, "config.errorHandler");
        }
      $t(e, t, n);
    }
    function $t(e, t, n) {
      if (!Y || "undefined" == typeof console) throw e;
      console.error(e);
    }
    var At,
      Et = !1,
      Pt = [],
      Lt = !1;
    function Rt() {
      Lt = !1;
      var e = Pt.slice(0);
      Pt.length = 0;
      for (var t = 0; t < e.length; t++) e[t]();
    }
    if ("undefined" != typeof Promise && se(Promise)) {
      var zt = Promise.resolve();
      (At = function () {
        zt.then(Rt), ee && setTimeout(R);
      }),
        (Et = !0);
    } else if (
      Q ||
      "undefined" == typeof MutationObserver ||
      (!se(MutationObserver) &&
        "[object MutationObserverConstructor]" !== MutationObserver.toString())
    )
      At =
        "undefined" != typeof setImmediate && se(setImmediate)
          ? function () {
              setImmediate(Rt);
            }
          : function () {
              setTimeout(Rt, 0);
            };
    else {
      var Dt = 1,
        It = new MutationObserver(Rt),
        Mt = document.createTextNode(String(Dt));
      It.observe(Mt, { characterData: !0 }),
        (At = function () {
          (Dt = (Dt + 1) % 2), (Mt.data = String(Dt));
        }),
        (Et = !0);
    }
    function Bt(e, t) {
      var n;
      if (
        (Pt.push(function () {
          if (e)
            try {
              e.call(t);
            } catch (e) {
              Ot(e, t, "nextTick");
            }
          else n && n(t);
        }),
        Lt || ((Lt = !0), At()),
        !e && "undefined" != typeof Promise)
      )
        return new Promise(function (e) {
          n = e;
        });
    }
    function Ut(e) {
      return function (t, n) {
        if ((void 0 === n && (n = fe), n))
          return (function (e, t, n) {
            var r = e.$options;
            r[t] = Tn(r[t], n);
          })(n, e, t);
      };
    }
    Ut("beforeMount"),
      Ut("mounted"),
      Ut("beforeUpdate"),
      Ut("updated"),
      Ut("beforeDestroy"),
      Ut("destroyed"),
      Ut("activated"),
      Ut("deactivated"),
      Ut("serverPrefetch"),
      Ut("renderTracked"),
      Ut("renderTriggered"),
      Ut("errorCaptured");
    var Ft = new ue();
    function Nt(e) {
      return (
        (function e(t, n) {
          var r,
            i,
            l = o(t);
          if (
            (!l && !c(t)) ||
            t.__v_skip ||
            Object.isFrozen(t) ||
            t instanceof de
          )
            return;
          if (t.__ob__) {
            var a = t.__ob__.dep.id;
            if (n.has(a)) return;
            n.add(a);
          }
          if (l) for (r = t.length; r--; ) e(t[r], n);
          else if (Be(t)) e(t.value, n);
          else for (i = Object.keys(t), r = i.length; r--; ) e(t[i[r]], n);
        })(e, Ft),
        Ft.clear(),
        e
      );
    }
    var Ht,
      Wt = 0,
      Vt = (function () {
        function e(e, t, n, r, o) {
          var i, l;
          (i = this),
            void 0 === (l = Fe && !Fe._vm ? Fe : e ? e._scope : void 0) &&
              (l = Fe),
            l && l.active && l.effects.push(i),
            (this.vm = e) && o && (e._watcher = this),
            r
              ? ((this.deep = !!r.deep),
                (this.user = !!r.user),
                (this.lazy = !!r.lazy),
                (this.sync = !!r.sync),
                (this.before = r.before))
              : (this.deep = this.user = this.lazy = this.sync = !1),
            (this.cb = n),
            (this.id = ++Wt),
            (this.active = !0),
            (this.post = !1),
            (this.dirty = this.lazy),
            (this.deps = []),
            (this.newDeps = []),
            (this.depIds = new ue()),
            (this.newDepIds = new ue()),
            (this.expression = ""),
            u(t)
              ? (this.getter = t)
              : ((this.getter = (function (e) {
                  if (!Z.test(e)) {
                    var t = e.split(".");
                    return function (e) {
                      for (var n = 0; n < t.length; n++) {
                        if (!e) return;
                        e = e[t[n]];
                      }
                      return e;
                    };
                  }
                })(t)),
                this.getter || (this.getter = R)),
            (this.value = this.lazy ? void 0 : this.get());
        }
        return (
          (e.prototype.get = function () {
            var e;
            _e(this);
            var t = this.vm;
            try {
              e = this.getter.call(t, t);
            } catch (e) {
              if (!this.user) throw e;
              Ot(e, t, 'getter for watcher "'.concat(this.expression, '"'));
            } finally {
              this.deep && Nt(e), xe(), this.cleanupDeps();
            }
            return e;
          }),
          (e.prototype.addDep = function (e) {
            var t = e.id;
            this.newDepIds.has(t) ||
              (this.newDepIds.add(t),
              this.newDeps.push(e),
              this.depIds.has(t) || e.addSub(this));
          }),
          (e.prototype.cleanupDeps = function () {
            for (var e = this.deps.length; e--; ) {
              var t = this.deps[e];
              this.newDepIds.has(t.id) || t.removeSub(this);
            }
            var n = this.depIds;
            (this.depIds = this.newDepIds),
              (this.newDepIds = n),
              this.newDepIds.clear(),
              (n = this.deps),
              (this.deps = this.newDeps),
              (this.newDeps = n),
              (this.newDeps.length = 0);
          }),
          (e.prototype.update = function () {
            this.lazy ? (this.dirty = !0) : this.sync ? this.run() : dn(this);
          }),
          (e.prototype.run = function () {
            if (this.active) {
              var e = this.get();
              if (e !== this.value || c(e) || this.deep) {
                var t = this.value;
                if (((this.value = e), this.user)) {
                  var n = 'callback for watcher "'.concat(this.expression, '"');
                  Tt(this.cb, this.vm, [e, t], this.vm, n);
                } else this.cb.call(this.vm, e, t);
              }
            }
          }),
          (e.prototype.evaluate = function () {
            (this.value = this.get()), (this.dirty = !1);
          }),
          (e.prototype.depend = function () {
            for (var e = this.deps.length; e--; ) this.deps[e].depend();
          }),
          (e.prototype.teardown = function () {
            if (
              (this.vm &&
                !this.vm._isBeingDestroyed &&
                _(this.vm._scope.effects, this),
              this.active)
            ) {
              for (var e = this.deps.length; e--; )
                this.deps[e].removeSub(this);
              (this.active = !1), this.onStop && this.onStop();
            }
          }),
          e
        );
      })();
    function qt(e, t) {
      Ht.$on(e, t);
    }
    function Zt(e, t) {
      Ht.$off(e, t);
    }
    function Gt(e, t) {
      var n = Ht;
      return function r() {
        var o = t.apply(null, arguments);
        null !== o && n.$off(e, r);
      };
    }
    function Yt(e, t, n) {
      (Ht = e), qe(t, n || {}, qt, Zt, Gt, e), (Ht = void 0);
    }
    var Kt = null;
    function Qt(e) {
      var t = Kt;
      return (
        (Kt = e),
        function () {
          Kt = t;
        }
      );
    }
    function Xt(e) {
      for (; e && (e = e.$parent); ) if (e._inactive) return !0;
      return !1;
    }
    function Jt(e, t) {
      if (t) {
        if (((e._directInactive = !1), Xt(e))) return;
      } else if (e._directInactive) return;
      if (e._inactive || null === e._inactive) {
        e._inactive = !1;
        for (var n = 0; n < e.$children.length; n++) Jt(e.$children[n]);
        en(e, "activated");
      }
    }
    function en(e, t, n, r) {
      void 0 === r && (r = !0), _e();
      var o = fe,
        i = Fe;
      r && pe(e);
      var l = e.$options[t],
        a = "".concat(t, " hook");
      if (l)
        for (var s = 0, u = l.length; s < u; s++) Tt(l[s], e, n || null, e, a);
      e._hasHookEvent && e.$emit("hook:" + t), r && (pe(o), i && i.on()), xe();
    }
    var tn = [],
      nn = [],
      rn = {},
      on = !1,
      ln = !1,
      an = 0;
    var sn = 0,
      un = Date.now;
    if (Y && !Q) {
      var cn = window.performance;
      cn &&
        "function" == typeof cn.now &&
        un() > document.createEvent("Event").timeStamp &&
        (un = function () {
          return cn.now();
        });
    }
    var fn = function (e, t) {
      if (e.post) {
        if (!t.post) return 1;
      } else if (t.post) return -1;
      return e.id - t.id;
    };
    function pn() {
      var e, t;
      for (sn = un(), ln = !0, tn.sort(fn), an = 0; an < tn.length; an++)
        (e = tn[an]).before && e.before(), (t = e.id), (rn[t] = null), e.run();
      var n = nn.slice(),
        r = tn.slice();
      (an = tn.length = nn.length = 0),
        (rn = {}),
        (on = ln = !1),
        (function (e) {
          for (var t = 0; t < e.length; t++)
            (e[t]._inactive = !0), Jt(e[t], !0);
        })(n),
        (function (e) {
          var t = e.length;
          for (; t--; ) {
            var n = e[t],
              r = n.vm;
            r &&
              r._watcher === n &&
              r._isMounted &&
              !r._isDestroyed &&
              en(r, "updated");
          }
        })(r),
        (function () {
          for (var e = 0; e < ye.length; e++) {
            var t = ye[e];
            (t.subs = t.subs.filter(function (e) {
              return e;
            })),
              (t._pending = !1);
          }
          ye.length = 0;
        })(),
        ae && H.devtools && ae.emit("flush");
    }
    function dn(e) {
      var t = e.id;
      if (null == rn[t] && (e !== be.target || !e.noRecurse)) {
        if (((rn[t] = !0), ln)) {
          for (var n = tn.length - 1; n > an && tn[n].id > e.id; ) n--;
          tn.splice(n + 1, 0, e);
        } else tn.push(e);
        on || ((on = !0), Bt(pn));
      }
    }
    function hn(e, t) {
      if (e) {
        for (
          var n = Object.create(null),
            r = ce ? Reflect.ownKeys(e) : Object.keys(e),
            o = 0;
          o < r.length;
          o++
        ) {
          var i = r[o];
          if ("__ob__" !== i) {
            var l = e[i].from;
            if (l in t._provided) n[i] = t._provided[l];
            else if ("default" in e[i]) {
              var a = e[i].default;
              n[i] = u(a) ? a.call(t) : a;
            } else 0;
          }
        }
        return n;
      }
    }
    function gn(e, t, n, i, l) {
      var s,
        u = this,
        c = l.options;
      k(i, "_uid")
        ? ((s = Object.create(i))._original = i)
        : ((s = i), (i = i._original));
      var f = a(c._compiled),
        p = !f;
      (this.data = e),
        (this.props = t),
        (this.children = n),
        (this.parent = i),
        (this.listeners = e.on || r),
        (this.injections = hn(c.inject, i)),
        (this.slots = function () {
          return (
            u.$slots || gt(i, e.scopedSlots, (u.$slots = pt(n, i))), u.$slots
          );
        }),
        Object.defineProperty(this, "scopedSlots", {
          enumerable: !0,
          get: function () {
            return gt(i, e.scopedSlots, this.slots());
          },
        }),
        f &&
          ((this.$options = c),
          (this.$slots = this.slots()),
          (this.$scopedSlots = gt(i, e.scopedSlots, this.$slots))),
        c._scopeId
          ? (this._c = function (e, t, n, r) {
              var l = St(s, e, t, n, r, p);
              return (
                l && !o(l) && ((l.fnScopeId = c._scopeId), (l.fnContext = i)), l
              );
            })
          : (this._c = function (e, t, n, r) {
              return St(s, e, t, n, r, p);
            });
    }
    function vn(e, t, n, r, o) {
      var i = ve(e);
      return (
        (i.fnContext = n),
        (i.fnOptions = r),
        t.slot && ((i.data || (i.data = {})).slot = t.slot),
        i
      );
    }
    function mn(e, t) {
      for (var n in t) e[O(n)] = t[n];
    }
    function yn(e) {
      return e.name || e.__name || e._componentTag;
    }
    ft(gn.prototype);
    var bn = {
        init: function (e, t) {
          if (
            e.componentInstance &&
            !e.componentInstance._isDestroyed &&
            e.data.keepAlive
          ) {
            var n = e;
            bn.prepatch(n, n);
          } else {
            (e.componentInstance = (function (e, t) {
              var n = { _isComponent: !0, _parentVnode: e, parent: t },
                r = e.data.inlineTemplate;
              l(r) &&
                ((n.render = r.render),
                (n.staticRenderFns = r.staticRenderFns));
              return new e.componentOptions.Ctor(n);
            })(e, Kt)).$mount(t ? e.elm : void 0, t);
          }
        },
        prepatch: function (e, t) {
          var n = t.componentOptions;
          !(function (e, t, n, o, i) {
            var l = o.data.scopedSlots,
              a = e.$scopedSlots,
              s = !!(
                (l && !l.$stable) ||
                (a !== r && !a.$stable) ||
                (l && e.$scopedSlots.$key !== l.$key) ||
                (!l && e.$scopedSlots.$key)
              ),
              u = !!(i || e.$options._renderChildren || s),
              c = e.$vnode;
            (e.$options._parentVnode = o),
              (e.$vnode = o),
              e._vnode && (e._vnode.parent = o),
              (e.$options._renderChildren = i);
            var f = o.data.attrs || r;
            e._attrsProxy &&
              bt(
                e._attrsProxy,
                f,
                (c.data && c.data.attrs) || r,
                e,
                "$attrs"
              ) &&
              (u = !0),
              (e.$attrs = f),
              (n = n || r);
            var p = e.$options._parentListeners;
            if (
              (e._listenersProxy &&
                bt(e._listenersProxy, n, p || r, e, "$listeners"),
              (e.$listeners = e.$options._parentListeners = n),
              Yt(e, n, p),
              t && e.$options.props)
            ) {
              je(!1);
              for (
                var d = e._props, h = e.$options._propKeys || [], g = 0;
                g < h.length;
                g++
              ) {
                var v = h[g],
                  m = e.$options.props;
                d[v] = Pn(v, m, t, e);
              }
              je(!0), (e.$options.propsData = t);
            }
            u && ((e.$slots = pt(i, o.context)), e.$forceUpdate());
          })(
            (t.componentInstance = e.componentInstance),
            n.propsData,
            n.listeners,
            t,
            n.children
          );
        },
        insert: function (e) {
          var t,
            n = e.context,
            r = e.componentInstance;
          r._isMounted || ((r._isMounted = !0), en(r, "mounted")),
            e.data.keepAlive &&
              (n._isMounted
                ? (((t = r)._inactive = !1), nn.push(t))
                : Jt(r, !0));
        },
        destroy: function (e) {
          var t = e.componentInstance;
          t._isDestroyed ||
            (e.data.keepAlive
              ? (function e(t, n) {
                  if (
                    !((n && ((t._directInactive = !0), Xt(t))) || t._inactive)
                  ) {
                    t._inactive = !0;
                    for (var r = 0; r < t.$children.length; r++)
                      e(t.$children[r]);
                    en(t, "deactivated");
                  }
                })(t, !0)
              : t.$destroy());
        },
      },
      wn = Object.keys(bn);
    function _n(e, t, n, s, u) {
      if (!i(e)) {
        var f = n.$options._base;
        if ((c(e) && (e = f.extend(e)), "function" == typeof e)) {
          var p;
          if (
            i(e.cid) &&
            void 0 ===
              (e = (function (e, t) {
                if (a(e.error) && l(e.errorComp)) return e.errorComp;
                if (l(e.resolved)) return e.resolved;
                var n = xt;
                if (
                  (n &&
                    l(e.owners) &&
                    -1 === e.owners.indexOf(n) &&
                    e.owners.push(n),
                  a(e.loading) && l(e.loadingComp))
                )
                  return e.loadingComp;
                if (n && !l(e.owners)) {
                  var r = (e.owners = [n]),
                    o = !0,
                    s = null,
                    u = null;
                  n.$on("hook:destroyed", function () {
                    return _(r, n);
                  });
                  var f = function (e) {
                      for (var t = 0, n = r.length; t < n; t++)
                        r[t].$forceUpdate();
                      e &&
                        ((r.length = 0),
                        null !== s && (clearTimeout(s), (s = null)),
                        null !== u && (clearTimeout(u), (u = null)));
                    },
                    p = B(function (n) {
                      (e.resolved = kt(n, t)), o ? (r.length = 0) : f(!0);
                    }),
                    d = B(function (t) {
                      l(e.errorComp) && ((e.error = !0), f(!0));
                    }),
                    h = e(p, d);
                  return (
                    c(h) &&
                      (g(h)
                        ? i(e.resolved) && h.then(p, d)
                        : g(h.component) &&
                          (h.component.then(p, d),
                          l(h.error) && (e.errorComp = kt(h.error, t)),
                          l(h.loading) &&
                            ((e.loadingComp = kt(h.loading, t)),
                            0 === h.delay
                              ? (e.loading = !0)
                              : (s = setTimeout(function () {
                                  (s = null),
                                    i(e.resolved) &&
                                      i(e.error) &&
                                      ((e.loading = !0), f(!1));
                                }, h.delay || 200))),
                          l(h.timeout) &&
                            (u = setTimeout(function () {
                              (u = null), i(e.resolved) && d(null);
                            }, h.timeout)))),
                    (o = !1),
                    e.loading ? e.loadingComp : e.resolved
                  );
                }
              })((p = e), f))
          )
            return (function (e, t, n, r, o) {
              var i = he();
              return (
                (i.asyncFactory = e),
                (i.asyncMeta = { data: t, context: n, children: r, tag: o }),
                i
              );
            })(p, t, n, s, u);
          (t = t || {}),
            qn(e),
            l(t.model) &&
              (function (e, t) {
                var n = (e.model && e.model.prop) || "value",
                  r = (e.model && e.model.event) || "input";
                (t.attrs || (t.attrs = {}))[n] = t.model.value;
                var i = t.on || (t.on = {}),
                  a = i[r],
                  s = t.model.callback;
                l(a)
                  ? (o(a) ? -1 === a.indexOf(s) : a !== s) &&
                    (i[r] = [s].concat(a))
                  : (i[r] = s);
              })(e.options, t);
          var d = (function (e, t, n) {
            var r = t.options.props;
            if (!i(r)) {
              var o = {},
                a = e.attrs,
                s = e.props;
              if (l(a) || l(s))
                for (var u in r) {
                  var c = $(u);
                  Ge(o, s, u, c, !0) || Ge(o, a, u, c, !1);
                }
              return o;
            }
          })(t, e);
          if (a(e.options.functional))
            return (function (e, t, n, i, a) {
              var s = e.options,
                u = {},
                c = s.props;
              if (l(c)) for (var f in c) u[f] = Pn(f, c, t || r);
              else l(n.attrs) && mn(u, n.attrs), l(n.props) && mn(u, n.props);
              var p = new gn(n, u, a, i, e),
                d = s.render.call(null, p._c, p);
              if (d instanceof de) return vn(d, n, p.parent, s, p);
              if (o(d)) {
                for (
                  var h = Ye(d) || [], g = new Array(h.length), v = 0;
                  v < h.length;
                  v++
                )
                  g[v] = vn(h[v], n, p.parent, s, p);
                return g;
              }
            })(e, d, t, n, s);
          var h = t.on;
          if (((t.on = t.nativeOn), a(e.options.abstract))) {
            var v = t.slot;
            (t = {}), v && (t.slot = v);
          }
          !(function (e) {
            for (var t = e.hook || (e.hook = {}), n = 0; n < wn.length; n++) {
              var r = wn[n],
                o = t[r],
                i = bn[r];
              o === i || (o && o._merged) || (t[r] = o ? xn(i, o) : i);
            }
          })(t);
          var m = yn(e.options) || u;
          return new de(
            "vue-component-".concat(e.cid).concat(m ? "-".concat(m) : ""),
            t,
            void 0,
            void 0,
            void 0,
            n,
            { Ctor: e, propsData: d, listeners: h, tag: u, children: s },
            p
          );
        }
      }
    }
    function xn(e, t) {
      var n = function (n, r) {
        e(n, r), t(n, r);
      };
      return (n._merged = !0), n;
    }
    var kn = R,
      Cn = H.optionMergeStrategies;
    function Sn(e, t, n) {
      if ((void 0 === n && (n = !0), !t)) return e;
      for (
        var r, o, i, l = ce ? Reflect.ownKeys(t) : Object.keys(t), a = 0;
        a < l.length;
        a++
      )
        "__ob__" !== (r = l[a]) &&
          ((o = e[r]),
          (i = t[r]),
          n && k(e, r) ? o !== i && p(o) && p(i) && Sn(o, i) : Le(e, r, i));
      return e;
    }
    function On(e, t, n) {
      return n
        ? function () {
            var r = u(t) ? t.call(n, n) : t,
              o = u(e) ? e.call(n, n) : e;
            return r ? Sn(r, o) : o;
          }
        : t
        ? e
          ? function () {
              return Sn(
                u(t) ? t.call(this, this) : t,
                u(e) ? e.call(this, this) : e
              );
            }
          : t
        : e;
    }
    function Tn(e, t) {
      var n = t ? (e ? e.concat(t) : o(t) ? t : [t]) : e;
      return n
        ? (function (e) {
            for (var t = [], n = 0; n < e.length; n++)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(n)
        : n;
    }
    function jn(e, t, n, r) {
      var o = Object.create(e || null);
      return t ? P(o, t) : o;
    }
    (Cn.data = function (e, t, n) {
      return n ? On(e, t, n) : t && "function" != typeof t ? e : On(e, t);
    }),
      N.forEach(function (e) {
        Cn[e] = Tn;
      }),
      F.forEach(function (e) {
        Cn[e + "s"] = jn;
      }),
      (Cn.watch = function (e, t, n, r) {
        if ((e === re && (e = void 0), t === re && (t = void 0), !t))
          return Object.create(e || null);
        if (!e) return t;
        var i = {};
        for (var l in (P(i, e), t)) {
          var a = i[l],
            s = t[l];
          a && !o(a) && (a = [a]), (i[l] = a ? a.concat(s) : o(s) ? s : [s]);
        }
        return i;
      }),
      (Cn.props =
        Cn.methods =
        Cn.inject =
        Cn.computed =
          function (e, t, n, r) {
            if (!e) return t;
            var o = Object.create(null);
            return P(o, e), t && P(o, t), o;
          }),
      (Cn.provide = function (e, t) {
        return e
          ? function () {
              var n = Object.create(null);
              return (
                Sn(n, u(e) ? e.call(this) : e),
                t && Sn(n, u(t) ? t.call(this) : t, !1),
                n
              );
            }
          : t;
      });
    var $n = function (e, t) {
      return void 0 === t ? e : t;
    };
    function An(e, t, n) {
      if (
        (u(t) && (t = t.options),
        (function (e, t) {
          var n = e.props;
          if (n) {
            var r,
              i,
              l = {};
            if (o(n))
              for (r = n.length; r--; )
                "string" == typeof (i = n[r]) && (l[O(i)] = { type: null });
            else if (p(n))
              for (var a in n) (i = n[a]), (l[O(a)] = p(i) ? i : { type: i });
            else 0;
            e.props = l;
          }
        })(t),
        (function (e, t) {
          var n = e.inject;
          if (n) {
            var r = (e.inject = {});
            if (o(n))
              for (var i = 0; i < n.length; i++) r[n[i]] = { from: n[i] };
            else if (p(n))
              for (var l in n) {
                var a = n[l];
                r[l] = p(a) ? P({ from: l }, a) : { from: a };
              }
            else 0;
          }
        })(t),
        (function (e) {
          var t = e.directives;
          if (t)
            for (var n in t) {
              var r = t[n];
              u(r) && (t[n] = { bind: r, update: r });
            }
        })(t),
        !t._base && (t.extends && (e = An(e, t.extends, n)), t.mixins))
      )
        for (var r = 0, i = t.mixins.length; r < i; r++)
          e = An(e, t.mixins[r], n);
      var l,
        a = {};
      for (l in e) s(l);
      for (l in t) k(e, l) || s(l);
      function s(r) {
        var o = Cn[r] || $n;
        a[r] = o(e[r], t[r], n, r);
      }
      return a;
    }
    function En(e, t, n, r) {
      if ("string" == typeof n) {
        var o = e[t];
        if (k(o, n)) return o[n];
        var i = O(n);
        if (k(o, i)) return o[i];
        var l = T(i);
        return k(o, l) ? o[l] : o[n] || o[i] || o[l];
      }
    }
    function Pn(e, t, n, r) {
      var o = t[e],
        i = !k(n, e),
        l = n[e],
        a = Dn(Boolean, o.type);
      if (a > -1)
        if (i && !k(o, "default")) l = !1;
        else if ("" === l || l === $(e)) {
          var s = Dn(String, o.type);
          (s < 0 || a < s) && (l = !0);
        }
      if (void 0 === l) {
        l = (function (e, t, n) {
          if (!k(t, "default")) return;
          var r = t.default;
          0;
          if (
            e &&
            e.$options.propsData &&
            void 0 === e.$options.propsData[n] &&
            void 0 !== e._props[n]
          )
            return e._props[n];
          return u(r) && "Function" !== Rn(t.type) ? r.call(e) : r;
        })(r, o, e);
        var c = Te;
        je(!0), Ee(l), je(c);
      }
      return l;
    }
    var Ln = /^\s*function (\w+)/;
    function Rn(e) {
      var t = e && e.toString().match(Ln);
      return t ? t[1] : "";
    }
    function zn(e, t) {
      return Rn(e) === Rn(t);
    }
    function Dn(e, t) {
      if (!o(t)) return zn(t, e) ? 0 : -1;
      for (var n = 0, r = t.length; n < r; n++) if (zn(t[n], e)) return n;
      return -1;
    }
    var In = { enumerable: !0, configurable: !0, get: R, set: R };
    function Mn(e, t, n) {
      (In.get = function () {
        return this[t][n];
      }),
        (In.set = function (e) {
          this[t][n] = e;
        }),
        Object.defineProperty(e, n, In);
    }
    function Bn(e) {
      var t = e.$options;
      if (
        (t.props &&
          (function (e, t) {
            var n = e.$options.propsData || {},
              r = (e._props = De({})),
              o = (e.$options._propKeys = []);
            e.$parent && je(!1);
            var i = function (i) {
              o.push(i);
              var l = Pn(i, t, n, e);
              Pe(r, i, l, void 0, !0), i in e || Mn(e, "_props", i);
            };
            for (var l in t) i(l);
            je(!0);
          })(e, t.props),
        (function (e) {
          var t = e.$options,
            n = t.setup;
          if (n) {
            var r = (e._setupContext = yt(e));
            pe(e), _e();
            var o = Tt(n, null, [e._props || De({}), r], e, "setup");
            if ((xe(), pe(), u(o))) t.render = o;
            else if (c(o))
              if (((e._setupState = o), o.__sfc)) {
                var i = (e._setupProxy = {});
                for (var l in o) "__sfc" !== l && Ue(i, o, l);
              } else for (var l in o) V(l) || Ue(e, o, l);
            else 0;
          }
        })(e),
        t.methods &&
          (function (e, t) {
            e.$options.props;
            for (var n in t) e[n] = "function" != typeof t[n] ? R : A(t[n], e);
          })(e, t.methods),
        t.data)
      )
        !(function (e) {
          var t = e.$options.data;
          p(
            (t = e._data =
              u(t)
                ? (function (e, t) {
                    _e();
                    try {
                      return e.call(t, t);
                    } catch (e) {
                      return Ot(e, t, "data()"), {};
                    } finally {
                      xe();
                    }
                  })(t, e)
                : t || {})
          ) || (t = {});
          var n = Object.keys(t),
            r = e.$options.props,
            o = (e.$options.methods, n.length);
          for (; o--; ) {
            var i = n[o];
            0, (r && k(r, i)) || V(i) || Mn(e, "_data", i);
          }
          var l = Ee(t);
          l && l.vmCount++;
        })(e);
      else {
        var n = Ee((e._data = {}));
        n && n.vmCount++;
      }
      t.computed &&
        (function (e, t) {
          var n = (e._computedWatchers = Object.create(null)),
            r = le();
          for (var o in t) {
            var i = t[o],
              l = u(i) ? i : i.get;
            0, r || (n[o] = new Vt(e, l || R, R, Un)), o in e || Fn(e, o, i);
          }
        })(e, t.computed),
        t.watch &&
          t.watch !== re &&
          (function (e, t) {
            for (var n in t) {
              var r = t[n];
              if (o(r)) for (var i = 0; i < r.length; i++) Wn(e, n, r[i]);
              else Wn(e, n, r);
            }
          })(e, t.watch);
    }
    var Un = { lazy: !0 };
    function Fn(e, t, n) {
      var r = !le();
      u(n)
        ? ((In.get = r ? Nn(t) : Hn(n)), (In.set = R))
        : ((In.get = n.get ? (r && !1 !== n.cache ? Nn(t) : Hn(n.get)) : R),
          (In.set = n.set || R)),
        Object.defineProperty(e, t, In);
    }
    function Nn(e) {
      return function () {
        var t = this._computedWatchers && this._computedWatchers[e];
        if (t) return t.dirty && t.evaluate(), be.target && t.depend(), t.value;
      };
    }
    function Hn(e) {
      return function () {
        return e.call(this, this);
      };
    }
    function Wn(e, t, n, r) {
      return (
        p(n) && ((r = n), (n = n.handler)),
        "string" == typeof n && (n = e[n]),
        e.$watch(t, n, r)
      );
    }
    var Vn = 0;
    function qn(e) {
      var t = e.options;
      if (e.super) {
        var n = qn(e.super);
        if (n !== e.superOptions) {
          e.superOptions = n;
          var r = (function (e) {
            var t,
              n = e.options,
              r = e.sealedOptions;
            for (var o in n) n[o] !== r[o] && (t || (t = {}), (t[o] = n[o]));
            return t;
          })(e);
          r && P(e.extendOptions, r),
            (t = e.options = An(n, e.extendOptions)).name &&
              (t.components[t.name] = e);
        }
      }
      return t;
    }
    function Zn(e) {
      this._init(e);
    }
    function Gn(e) {
      e.cid = 0;
      var t = 1;
      e.extend = function (e) {
        e = e || {};
        var n = this,
          r = n.cid,
          o = e._Ctor || (e._Ctor = {});
        if (o[r]) return o[r];
        var i = yn(e) || yn(n.options);
        var l = function (e) {
          this._init(e);
        };
        return (
          ((l.prototype = Object.create(n.prototype)).constructor = l),
          (l.cid = t++),
          (l.options = An(n.options, e)),
          (l.super = n),
          l.options.props &&
            (function (e) {
              var t = e.options.props;
              for (var n in t) Mn(e.prototype, "_props", n);
            })(l),
          l.options.computed &&
            (function (e) {
              var t = e.options.computed;
              for (var n in t) Fn(e.prototype, n, t[n]);
            })(l),
          (l.extend = n.extend),
          (l.mixin = n.mixin),
          (l.use = n.use),
          F.forEach(function (e) {
            l[e] = n[e];
          }),
          i && (l.options.components[i] = l),
          (l.superOptions = n.options),
          (l.extendOptions = e),
          (l.sealedOptions = P({}, l.options)),
          (o[r] = l),
          l
        );
      };
    }
    function Yn(e) {
      return e && (yn(e.Ctor.options) || e.tag);
    }
    function Kn(e, t) {
      return o(e)
        ? e.indexOf(t) > -1
        : "string" == typeof e
        ? e.split(",").indexOf(t) > -1
        : !!d(e) && e.test(t);
    }
    function Qn(e, t) {
      var n = e.cache,
        r = e.keys,
        o = e._vnode,
        i = e.$vnode;
      for (var l in n) {
        var a = n[l];
        if (a) {
          var s = a.name;
          s && !t(s) && Xn(n, l, r, o);
        }
      }
      i.componentOptions.children = void 0;
    }
    function Xn(e, t, n, r) {
      var o = e[t];
      !o || (r && o.tag === r.tag) || o.componentInstance.$destroy(),
        (e[t] = null),
        _(n, t);
    }
    (Zn.prototype._init = function (e) {
      var t = this;
      (t._uid = Vn++),
        (t._isVue = !0),
        (t.__v_skip = !0),
        (t._scope = new Ne(!0)),
        (t._scope.parent = void 0),
        (t._scope._vm = !0),
        e && e._isComponent
          ? (function (e, t) {
              var n = (e.$options = Object.create(e.constructor.options)),
                r = t._parentVnode;
              (n.parent = t.parent), (n._parentVnode = r);
              var o = r.componentOptions;
              (n.propsData = o.propsData),
                (n._parentListeners = o.listeners),
                (n._renderChildren = o.children),
                (n._componentTag = o.tag),
                t.render &&
                  ((n.render = t.render),
                  (n.staticRenderFns = t.staticRenderFns));
            })(t, e)
          : (t.$options = An(qn(t.constructor), e || {}, t)),
        (t._renderProxy = t),
        (t._self = t),
        (function (e) {
          var t = e.$options,
            n = t.parent;
          if (n && !t.abstract) {
            for (; n.$options.abstract && n.$parent; ) n = n.$parent;
            n.$children.push(e);
          }
          (e.$parent = n),
            (e.$root = n ? n.$root : e),
            (e.$children = []),
            (e.$refs = {}),
            (e._provided = n ? n._provided : Object.create(null)),
            (e._watcher = null),
            (e._inactive = null),
            (e._directInactive = !1),
            (e._isMounted = !1),
            (e._isDestroyed = !1),
            (e._isBeingDestroyed = !1);
        })(t),
        (function (e) {
          (e._events = Object.create(null)), (e._hasHookEvent = !1);
          var t = e.$options._parentListeners;
          t && Yt(e, t);
        })(t),
        (function (e) {
          (e._vnode = null), (e._staticTrees = null);
          var t = e.$options,
            n = (e.$vnode = t._parentVnode),
            o = n && n.context;
          (e.$slots = pt(t._renderChildren, o)),
            (e.$scopedSlots = n
              ? gt(e.$parent, n.data.scopedSlots, e.$slots)
              : r),
            (e._c = function (t, n, r, o) {
              return St(e, t, n, r, o, !1);
            }),
            (e.$createElement = function (t, n, r, o) {
              return St(e, t, n, r, o, !0);
            });
          var i = n && n.data;
          Pe(e, "$attrs", (i && i.attrs) || r, null, !0),
            Pe(e, "$listeners", t._parentListeners || r, null, !0);
        })(t),
        en(t, "beforeCreate", void 0, !1),
        (function (e) {
          var t = hn(e.$options.inject, e);
          t &&
            (je(!1),
            Object.keys(t).forEach(function (n) {
              Pe(e, n, t[n]);
            }),
            je(!0));
        })(t),
        Bn(t),
        (function (e) {
          var t = e.$options.provide;
          if (t) {
            var n = u(t) ? t.call(e) : t;
            if (!c(n)) return;
            for (
              var r = He(e),
                o = ce ? Reflect.ownKeys(n) : Object.keys(n),
                i = 0;
              i < o.length;
              i++
            ) {
              var l = o[i];
              Object.defineProperty(
                r,
                l,
                Object.getOwnPropertyDescriptor(n, l)
              );
            }
          }
        })(t),
        en(t, "created"),
        t.$options.el && t.$mount(t.$options.el);
    }),
      (function (e) {
        var t = {
            get: function () {
              return this._data;
            },
          },
          n = {
            get: function () {
              return this._props;
            },
          };
        Object.defineProperty(e.prototype, "$data", t),
          Object.defineProperty(e.prototype, "$props", n),
          (e.prototype.$set = Le),
          (e.prototype.$delete = Re),
          (e.prototype.$watch = function (e, t, n) {
            if (p(t)) return Wn(this, e, t, n);
            (n = n || {}).user = !0;
            var r = new Vt(this, e, t, n);
            if (n.immediate) {
              var o = 'callback for immediate watcher "'.concat(
                r.expression,
                '"'
              );
              _e(), Tt(t, this, [r.value], this, o), xe();
            }
            return function () {
              r.teardown();
            };
          });
      })(Zn),
      (function (e) {
        var t = /^hook:/;
        (e.prototype.$on = function (e, n) {
          var r = this;
          if (o(e)) for (var i = 0, l = e.length; i < l; i++) r.$on(e[i], n);
          else
            (r._events[e] || (r._events[e] = [])).push(n),
              t.test(e) && (r._hasHookEvent = !0);
          return r;
        }),
          (e.prototype.$once = function (e, t) {
            var n = this;
            function r() {
              n.$off(e, r), t.apply(n, arguments);
            }
            return (r.fn = t), n.$on(e, r), n;
          }),
          (e.prototype.$off = function (e, t) {
            var n = this;
            if (!arguments.length) return (n._events = Object.create(null)), n;
            if (o(e)) {
              for (var r = 0, i = e.length; r < i; r++) n.$off(e[r], t);
              return n;
            }
            var l,
              a = n._events[e];
            if (!a) return n;
            if (!t) return (n._events[e] = null), n;
            for (var s = a.length; s--; )
              if ((l = a[s]) === t || l.fn === t) {
                a.splice(s, 1);
                break;
              }
            return n;
          }),
          (e.prototype.$emit = function (e) {
            var t = this,
              n = t._events[e];
            if (n) {
              n = n.length > 1 ? E(n) : n;
              for (
                var r = E(arguments, 1),
                  o = 'event handler for "'.concat(e, '"'),
                  i = 0,
                  l = n.length;
                i < l;
                i++
              )
                Tt(n[i], t, r, t, o);
            }
            return t;
          });
      })(Zn),
      (function (e) {
        (e.prototype._update = function (e, t) {
          var n = this,
            r = n.$el,
            o = n._vnode,
            i = Qt(n);
          (n._vnode = e),
            (n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1)),
            i(),
            r && (r.__vue__ = null),
            n.$el && (n.$el.__vue__ = n);
          for (
            var l = n;
            l && l.$vnode && l.$parent && l.$vnode === l.$parent._vnode;

          )
            (l.$parent.$el = l.$el), (l = l.$parent);
        }),
          (e.prototype.$forceUpdate = function () {
            this._watcher && this._watcher.update();
          }),
          (e.prototype.$destroy = function () {
            var e = this;
            if (!e._isBeingDestroyed) {
              en(e, "beforeDestroy"), (e._isBeingDestroyed = !0);
              var t = e.$parent;
              !t ||
                t._isBeingDestroyed ||
                e.$options.abstract ||
                _(t.$children, e),
                e._scope.stop(),
                e._data.__ob__ && e._data.__ob__.vmCount--,
                (e._isDestroyed = !0),
                e.__patch__(e._vnode, null),
                en(e, "destroyed"),
                e.$off(),
                e.$el && (e.$el.__vue__ = null),
                e.$vnode && (e.$vnode.parent = null);
            }
          });
      })(Zn),
      (function (e) {
        ft(e.prototype),
          (e.prototype.$nextTick = function (e) {
            return Bt(e, this);
          }),
          (e.prototype._render = function () {
            var e = this,
              t = e.$options,
              n = t.render,
              r = t._parentVnode;
            r &&
              e._isMounted &&
              ((e.$scopedSlots = gt(
                e.$parent,
                r.data.scopedSlots,
                e.$slots,
                e.$scopedSlots
              )),
              e._slotsProxy && _t(e._slotsProxy, e.$scopedSlots)),
              (e.$vnode = r);
            var i,
              l = fe,
              a = xt;
            try {
              pe(e), (xt = e), (i = n.call(e._renderProxy, e.$createElement));
            } catch (t) {
              Ot(t, e, "render"), (i = e._vnode);
            } finally {
              (xt = a), pe(l);
            }
            return (
              o(i) && 1 === i.length && (i = i[0]),
              i instanceof de || (i = he()),
              (i.parent = r),
              i
            );
          });
      })(Zn);
    var Jn = [String, RegExp, Array],
      er = {
        KeepAlive: {
          name: "keep-alive",
          abstract: !0,
          props: { include: Jn, exclude: Jn, max: [String, Number] },
          methods: {
            cacheVNode: function () {
              var e = this.cache,
                t = this.keys,
                n = this.vnodeToCache,
                r = this.keyToCache;
              if (n) {
                var o = n.tag,
                  i = n.componentInstance,
                  l = n.componentOptions;
                (e[r] = { name: Yn(l), tag: o, componentInstance: i }),
                  t.push(r),
                  this.max &&
                    t.length > parseInt(this.max) &&
                    Xn(e, t[0], t, this._vnode),
                  (this.vnodeToCache = null);
              }
            },
          },
          created: function () {
            (this.cache = Object.create(null)), (this.keys = []);
          },
          destroyed: function () {
            for (var e in this.cache) Xn(this.cache, e, this.keys);
          },
          mounted: function () {
            var e = this;
            this.cacheVNode(),
              this.$watch("include", function (t) {
                Qn(e, function (e) {
                  return Kn(t, e);
                });
              }),
              this.$watch("exclude", function (t) {
                Qn(e, function (e) {
                  return !Kn(t, e);
                });
              });
          },
          updated: function () {
            this.cacheVNode();
          },
          render: function () {
            var e = this.$slots.default,
              t = Ct(e),
              n = t && t.componentOptions;
            if (n) {
              var r = Yn(n),
                o = this.include,
                i = this.exclude;
              if ((o && (!r || !Kn(o, r))) || (i && r && Kn(i, r))) return t;
              var l = this.cache,
                a = this.keys,
                s =
                  null == t.key
                    ? n.Ctor.cid + (n.tag ? "::".concat(n.tag) : "")
                    : t.key;
              l[s]
                ? ((t.componentInstance = l[s].componentInstance),
                  _(a, s),
                  a.push(s))
                : ((this.vnodeToCache = t), (this.keyToCache = s)),
                (t.data.keepAlive = !0);
            }
            return t || (e && e[0]);
          },
        },
      };
    !(function (e) {
      var t = {
        get: function () {
          return H;
        },
      };
      Object.defineProperty(e, "config", t),
        (e.util = {
          warn: kn,
          extend: P,
          mergeOptions: An,
          defineReactive: Pe,
        }),
        (e.set = Le),
        (e.delete = Re),
        (e.nextTick = Bt),
        (e.observable = function (e) {
          return Ee(e), e;
        }),
        (e.options = Object.create(null)),
        F.forEach(function (t) {
          e.options[t + "s"] = Object.create(null);
        }),
        (e.options._base = e),
        P(e.options.components, er),
        (function (e) {
          e.use = function (e) {
            var t = this._installedPlugins || (this._installedPlugins = []);
            if (t.indexOf(e) > -1) return this;
            var n = E(arguments, 1);
            return (
              n.unshift(this),
              u(e.install) ? e.install.apply(e, n) : u(e) && e.apply(null, n),
              t.push(e),
              this
            );
          };
        })(e),
        (function (e) {
          e.mixin = function (e) {
            return (this.options = An(this.options, e)), this;
          };
        })(e),
        Gn(e),
        (function (e) {
          F.forEach(function (t) {
            e[t] = function (e, n) {
              return n
                ? ("component" === t &&
                    p(n) &&
                    ((n.name = n.name || e),
                    (n = this.options._base.extend(n))),
                  "directive" === t && u(n) && (n = { bind: n, update: n }),
                  (this.options[t + "s"][e] = n),
                  n)
                : this.options[t + "s"][e];
            };
          });
        })(e);
    })(Zn),
      Object.defineProperty(Zn.prototype, "$isServer", { get: le }),
      Object.defineProperty(Zn.prototype, "$ssrContext", {
        get: function () {
          return this.$vnode && this.$vnode.ssrContext;
        },
      }),
      Object.defineProperty(Zn, "FunctionalRenderContext", { value: gn }),
      (Zn.version = "2.7.16");
    var tr = b("style,class"),
      nr = b("input,textarea,option,select,progress"),
      rr = b("contenteditable,draggable,spellcheck"),
      or = b("events,caret,typing,plaintext-only"),
      ir = b(
        "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"
      ),
      lr = "http://www.w3.org/1999/xlink",
      ar = function (e) {
        return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
      },
      sr = function (e) {
        return ar(e) ? e.slice(6, e.length) : "";
      },
      ur = function (e) {
        return null == e || !1 === e;
      };
    function cr(e) {
      for (var t = e.data, n = e, r = e; l(r.componentInstance); )
        (r = r.componentInstance._vnode) && r.data && (t = fr(r.data, t));
      for (; l((n = n.parent)); ) n && n.data && (t = fr(t, n.data));
      return (function (e, t) {
        if (l(e) || l(t)) return pr(e, dr(t));
        return "";
      })(t.staticClass, t.class);
    }
    function fr(e, t) {
      return {
        staticClass: pr(e.staticClass, t.staticClass),
        class: l(e.class) ? [e.class, t.class] : t.class,
      };
    }
    function pr(e, t) {
      return e ? (t ? e + " " + t : e) : t || "";
    }
    function dr(e) {
      return Array.isArray(e)
        ? (function (e) {
            for (var t, n = "", r = 0, o = e.length; r < o; r++)
              l((t = dr(e[r]))) && "" !== t && (n && (n += " "), (n += t));
            return n;
          })(e)
        : c(e)
        ? (function (e) {
            var t = "";
            for (var n in e) e[n] && (t && (t += " "), (t += n));
            return t;
          })(e)
        : "string" == typeof e
        ? e
        : "";
    }
    var hr = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML",
      },
      gr = b(
        "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"
      ),
      vr = b(
        "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
        !0
      ),
      mr = function (e) {
        return gr(e) || vr(e);
      };
    var yr = Object.create(null);
    var br = b("text,number,password,search,email,tel,url");
    var wr = Object.freeze({
        __proto__: null,
        createElement: function (e, t) {
          var n = document.createElement(e);
          return (
            "select" !== e ||
              (t.data &&
                t.data.attrs &&
                void 0 !== t.data.attrs.multiple &&
                n.setAttribute("multiple", "multiple")),
            n
          );
        },
        createElementNS: function (e, t) {
          return document.createElementNS(hr[e], t);
        },
        createTextNode: function (e) {
          return document.createTextNode(e);
        },
        createComment: function (e) {
          return document.createComment(e);
        },
        insertBefore: function (e, t, n) {
          e.insertBefore(t, n);
        },
        removeChild: function (e, t) {
          e.removeChild(t);
        },
        appendChild: function (e, t) {
          e.appendChild(t);
        },
        parentNode: function (e) {
          return e.parentNode;
        },
        nextSibling: function (e) {
          return e.nextSibling;
        },
        tagName: function (e) {
          return e.tagName;
        },
        setTextContent: function (e, t) {
          e.textContent = t;
        },
        setStyleScope: function (e, t) {
          e.setAttribute(t, "");
        },
      }),
      _r = {
        create: function (e, t) {
          xr(t);
        },
        update: function (e, t) {
          e.data.ref !== t.data.ref && (xr(e, !0), xr(t));
        },
        destroy: function (e) {
          xr(e, !0);
        },
      };
    function xr(e, t) {
      var n = e.data.ref;
      if (l(n)) {
        var r = e.context,
          i = e.componentInstance || e.elm,
          a = t ? null : i,
          s = t ? void 0 : i;
        if (u(n)) Tt(n, r, [a], r, "template ref function");
        else {
          var c = e.data.refInFor,
            f = "string" == typeof n || "number" == typeof n,
            p = Be(n),
            d = r.$refs;
          if (f || p)
            if (c) {
              var h = f ? d[n] : n.value;
              t
                ? o(h) && _(h, i)
                : o(h)
                ? h.includes(i) || h.push(i)
                : f
                ? ((d[n] = [i]), kr(r, n, d[n]))
                : (n.value = [i]);
            } else if (f) {
              if (t && d[n] !== i) return;
              (d[n] = s), kr(r, n, a);
            } else if (p) {
              if (t && n.value !== i) return;
              n.value = a;
            } else 0;
        }
      }
    }
    function kr(e, t, n) {
      var r = e._setupState;
      r && k(r, t) && (Be(r[t]) ? (r[t].value = n) : (r[t] = n));
    }
    var Cr = new de("", {}, []),
      Sr = ["create", "activate", "update", "remove", "destroy"];
    function Or(e, t) {
      return (
        e.key === t.key &&
        e.asyncFactory === t.asyncFactory &&
        ((e.tag === t.tag &&
          e.isComment === t.isComment &&
          l(e.data) === l(t.data) &&
          (function (e, t) {
            if ("input" !== e.tag) return !0;
            var n,
              r = l((n = e.data)) && l((n = n.attrs)) && n.type,
              o = l((n = t.data)) && l((n = n.attrs)) && n.type;
            return r === o || (br(r) && br(o));
          })(e, t)) ||
          (a(e.isAsyncPlaceholder) && i(t.asyncFactory.error)))
      );
    }
    function Tr(e, t, n) {
      var r,
        o,
        i = {};
      for (r = t; r <= n; ++r) l((o = e[r].key)) && (i[o] = r);
      return i;
    }
    var jr = {
      create: $r,
      update: $r,
      destroy: function (e) {
        $r(e, Cr);
      },
    };
    function $r(e, t) {
      (e.data.directives || t.data.directives) &&
        (function (e, t) {
          var n,
            r,
            o,
            i = e === Cr,
            l = t === Cr,
            a = Er(e.data.directives, e.context),
            s = Er(t.data.directives, t.context),
            u = [],
            c = [];
          for (n in s)
            (r = a[n]),
              (o = s[n]),
              r
                ? ((o.oldValue = r.value),
                  (o.oldArg = r.arg),
                  Lr(o, "update", t, e),
                  o.def && o.def.componentUpdated && c.push(o))
                : (Lr(o, "bind", t, e), o.def && o.def.inserted && u.push(o));
          if (u.length) {
            var f = function () {
              for (var n = 0; n < u.length; n++) Lr(u[n], "inserted", t, e);
            };
            i ? Ze(t, "insert", f) : f();
          }
          c.length &&
            Ze(t, "postpatch", function () {
              for (var n = 0; n < c.length; n++)
                Lr(c[n], "componentUpdated", t, e);
            });
          if (!i) for (n in a) s[n] || Lr(a[n], "unbind", e, e, l);
        })(e, t);
    }
    var Ar = Object.create(null);
    function Er(e, t) {
      var n,
        r,
        o = Object.create(null);
      if (!e) return o;
      for (n = 0; n < e.length; n++) {
        if (
          ((r = e[n]).modifiers || (r.modifiers = Ar),
          (o[Pr(r)] = r),
          t._setupState && t._setupState.__sfc)
        ) {
          var i = r.def || En(t, "_setupState", "v-" + r.name);
          r.def = "function" == typeof i ? { bind: i, update: i } : i;
        }
        r.def = r.def || En(t.$options, "directives", r.name);
      }
      return o;
    }
    function Pr(e) {
      return (
        e.rawName ||
        "".concat(e.name, ".").concat(Object.keys(e.modifiers || {}).join("."))
      );
    }
    function Lr(e, t, n, r, o) {
      var i = e.def && e.def[t];
      if (i)
        try {
          i(n.elm, e, n, r, o);
        } catch (r) {
          Ot(r, n.context, "directive ".concat(e.name, " ").concat(t, " hook"));
        }
    }
    var Rr = [_r, jr];
    function zr(e, t) {
      var n = t.componentOptions;
      if (
        !(
          (l(n) && !1 === n.Ctor.options.inheritAttrs) ||
          (i(e.data.attrs) && i(t.data.attrs))
        )
      ) {
        var r,
          o,
          s = t.elm,
          u = e.data.attrs || {},
          c = t.data.attrs || {};
        for (r in ((l(c.__ob__) || a(c._v_attr_proxy)) &&
          (c = t.data.attrs = P({}, c)),
        c))
          (o = c[r]), u[r] !== o && Dr(s, r, o, t.data.pre);
        for (r in ((Q || J) && c.value !== u.value && Dr(s, "value", c.value),
        u))
          i(c[r]) &&
            (ar(r)
              ? s.removeAttributeNS(lr, sr(r))
              : rr(r) || s.removeAttribute(r));
      }
    }
    function Dr(e, t, n, r) {
      r || e.tagName.indexOf("-") > -1
        ? Ir(e, t, n)
        : ir(t)
        ? ur(n)
          ? e.removeAttribute(t)
          : ((n =
              "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t),
            e.setAttribute(t, n))
        : rr(t)
        ? e.setAttribute(
            t,
            (function (e, t) {
              return ur(t) || "false" === t
                ? "false"
                : "contenteditable" === e && or(t)
                ? t
                : "true";
            })(t, n)
          )
        : ar(t)
        ? ur(n)
          ? e.removeAttributeNS(lr, sr(t))
          : e.setAttributeNS(lr, t, n)
        : Ir(e, t, n);
    }
    function Ir(e, t, n) {
      if (ur(n)) e.removeAttribute(t);
      else {
        if (
          Q &&
          !X &&
          "TEXTAREA" === e.tagName &&
          "placeholder" === t &&
          "" !== n &&
          !e.__ieph
        ) {
          var r = function (t) {
            t.stopImmediatePropagation(), e.removeEventListener("input", r);
          };
          e.addEventListener("input", r), (e.__ieph = !0);
        }
        e.setAttribute(t, n);
      }
    }
    var Mr = { create: zr, update: zr };
    function Br(e, t) {
      var n = t.elm,
        r = t.data,
        o = e.data;
      if (
        !(
          i(r.staticClass) &&
          i(r.class) &&
          (i(o) || (i(o.staticClass) && i(o.class)))
        )
      ) {
        var a = cr(t),
          s = n._transitionClasses;
        l(s) && (a = pr(a, dr(s))),
          a !== n._prevClass &&
            (n.setAttribute("class", a), (n._prevClass = a));
      }
    }
    var Ur,
      Fr = { create: Br, update: Br };
    function Nr(e, t, n) {
      var r = Ur;
      return function o() {
        var i = t.apply(null, arguments);
        null !== i && Vr(e, o, n, r);
      };
    }
    var Hr = Et && !(ne && Number(ne[1]) <= 53);
    function Wr(e, t, n, r) {
      if (Hr) {
        var o = sn,
          i = t;
        t = i._wrapper = function (e) {
          if (
            e.target === e.currentTarget ||
            e.timeStamp >= o ||
            e.timeStamp <= 0 ||
            e.target.ownerDocument !== document
          )
            return i.apply(this, arguments);
        };
      }
      Ur.addEventListener(e, t, oe ? { capture: n, passive: r } : n);
    }
    function Vr(e, t, n, r) {
      (r || Ur).removeEventListener(e, t._wrapper || t, n);
    }
    function qr(e, t) {
      if (!i(e.data.on) || !i(t.data.on)) {
        var n = t.data.on || {},
          r = e.data.on || {};
        (Ur = t.elm || e.elm),
          (function (e) {
            if (l(e.__r)) {
              var t = Q ? "change" : "input";
              (e[t] = [].concat(e.__r, e[t] || [])), delete e.__r;
            }
            l(e.__c) &&
              ((e.change = [].concat(e.__c, e.change || [])), delete e.__c);
          })(n),
          qe(n, r, Wr, Vr, Nr, t.context),
          (Ur = void 0);
      }
    }
    var Zr,
      Gr = {
        create: qr,
        update: qr,
        destroy: function (e) {
          return qr(e, Cr);
        },
      };
    function Yr(e, t) {
      if (!i(e.data.domProps) || !i(t.data.domProps)) {
        var n,
          r,
          o = t.elm,
          s = e.data.domProps || {},
          u = t.data.domProps || {};
        for (n in ((l(u.__ob__) || a(u._v_attr_proxy)) &&
          (u = t.data.domProps = P({}, u)),
        s))
          n in u || (o[n] = "");
        for (n in u) {
          if (((r = u[n]), "textContent" === n || "innerHTML" === n)) {
            if ((t.children && (t.children.length = 0), r === s[n])) continue;
            1 === o.childNodes.length && o.removeChild(o.childNodes[0]);
          }
          if ("value" === n && "PROGRESS" !== o.tagName) {
            o._value = r;
            var c = i(r) ? "" : String(r);
            Kr(o, c) && (o.value = c);
          } else if ("innerHTML" === n && vr(o.tagName) && i(o.innerHTML)) {
            (Zr = Zr || document.createElement("div")).innerHTML =
              "<svg>".concat(r, "</svg>");
            for (var f = Zr.firstChild; o.firstChild; )
              o.removeChild(o.firstChild);
            for (; f.firstChild; ) o.appendChild(f.firstChild);
          } else if (r !== s[n])
            try {
              o[n] = r;
            } catch (e) {}
        }
      }
    }
    function Kr(e, t) {
      return (
        !e.composing &&
        ("OPTION" === e.tagName ||
          (function (e, t) {
            var n = !0;
            try {
              n = document.activeElement !== e;
            } catch (e) {}
            return n && e.value !== t;
          })(e, t) ||
          (function (e, t) {
            var n = e.value,
              r = e._vModifiers;
            if (l(r)) {
              if (r.number) return y(n) !== y(t);
              if (r.trim) return n.trim() !== t.trim();
            }
            return n !== t;
          })(e, t))
      );
    }
    var Qr = { create: Yr, update: Yr },
      Xr = C(function (e) {
        var t = {},
          n = /:(.+)/;
        return (
          e.split(/;(?![^(]*\))/g).forEach(function (e) {
            if (e) {
              var r = e.split(n);
              r.length > 1 && (t[r[0].trim()] = r[1].trim());
            }
          }),
          t
        );
      });
    function Jr(e) {
      var t = eo(e.style);
      return e.staticStyle ? P(e.staticStyle, t) : t;
    }
    function eo(e) {
      return Array.isArray(e) ? L(e) : "string" == typeof e ? Xr(e) : e;
    }
    var to,
      no = /^--/,
      ro = /\s*!important$/,
      oo = function (e, t, n) {
        if (no.test(t)) e.style.setProperty(t, n);
        else if (ro.test(n))
          e.style.setProperty($(t), n.replace(ro, ""), "important");
        else {
          var r = lo(t);
          if (Array.isArray(n))
            for (var o = 0, i = n.length; o < i; o++) e.style[r] = n[o];
          else e.style[r] = n;
        }
      },
      io = ["Webkit", "Moz", "ms"],
      lo = C(function (e) {
        if (
          ((to = to || document.createElement("div").style),
          "filter" !== (e = O(e)) && e in to)
        )
          return e;
        for (
          var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0;
          n < io.length;
          n++
        ) {
          var r = io[n] + t;
          if (r in to) return r;
        }
      });
    function ao(e, t) {
      var n = t.data,
        r = e.data;
      if (!(i(n.staticStyle) && i(n.style) && i(r.staticStyle) && i(r.style))) {
        var o,
          a,
          s = t.elm,
          u = r.staticStyle,
          c = r.normalizedStyle || r.style || {},
          f = u || c,
          p = eo(t.data.style) || {};
        t.data.normalizedStyle = l(p.__ob__) ? P({}, p) : p;
        var d = (function (e, t) {
          var n,
            r = {};
          if (t)
            for (var o = e; o.componentInstance; )
              (o = o.componentInstance._vnode) &&
                o.data &&
                (n = Jr(o.data)) &&
                P(r, n);
          (n = Jr(e.data)) && P(r, n);
          for (var i = e; (i = i.parent); )
            i.data && (n = Jr(i.data)) && P(r, n);
          return r;
        })(t, !0);
        for (a in f) i(d[a]) && oo(s, a, "");
        for (a in d) (o = d[a]), oo(s, a, null == o ? "" : o);
      }
    }
    var so = { create: ao, update: ao },
      uo = /\s+/;
    function co(e, t) {
      if (t && (t = t.trim()))
        if (e.classList)
          t.indexOf(" ") > -1
            ? t.split(uo).forEach(function (t) {
                return e.classList.add(t);
              })
            : e.classList.add(t);
        else {
          var n = " ".concat(e.getAttribute("class") || "", " ");
          n.indexOf(" " + t + " ") < 0 &&
            e.setAttribute("class", (n + t).trim());
        }
    }
    function fo(e, t) {
      if (t && (t = t.trim()))
        if (e.classList)
          t.indexOf(" ") > -1
            ? t.split(uo).forEach(function (t) {
                return e.classList.remove(t);
              })
            : e.classList.remove(t),
            e.classList.length || e.removeAttribute("class");
        else {
          for (
            var n = " ".concat(e.getAttribute("class") || "", " "),
              r = " " + t + " ";
            n.indexOf(r) >= 0;

          )
            n = n.replace(r, " ");
          (n = n.trim())
            ? e.setAttribute("class", n)
            : e.removeAttribute("class");
        }
    }
    function po(e) {
      if (e) {
        if ("object" == typeof e) {
          var t = {};
          return !1 !== e.css && P(t, ho(e.name || "v")), P(t, e), t;
        }
        return "string" == typeof e ? ho(e) : void 0;
      }
    }
    var ho = C(function (e) {
        return {
          enterClass: "".concat(e, "-enter"),
          enterToClass: "".concat(e, "-enter-to"),
          enterActiveClass: "".concat(e, "-enter-active"),
          leaveClass: "".concat(e, "-leave"),
          leaveToClass: "".concat(e, "-leave-to"),
          leaveActiveClass: "".concat(e, "-leave-active"),
        };
      }),
      go = Y && !X,
      vo = "transition",
      mo = "transitionend",
      yo = "animation",
      bo = "animationend";
    go &&
      (void 0 === window.ontransitionend &&
        void 0 !== window.onwebkittransitionend &&
        ((vo = "WebkitTransition"), (mo = "webkitTransitionEnd")),
      void 0 === window.onanimationend &&
        void 0 !== window.onwebkitanimationend &&
        ((yo = "WebkitAnimation"), (bo = "webkitAnimationEnd")));
    var wo = Y
      ? window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : setTimeout
      : function (e) {
          return e();
        };
    function _o(e) {
      wo(function () {
        wo(e);
      });
    }
    function xo(e, t) {
      var n = e._transitionClasses || (e._transitionClasses = []);
      n.indexOf(t) < 0 && (n.push(t), co(e, t));
    }
    function ko(e, t) {
      e._transitionClasses && _(e._transitionClasses, t), fo(e, t);
    }
    function Co(e, t, n) {
      var r = Oo(e, t),
        o = r.type,
        i = r.timeout,
        l = r.propCount;
      if (!o) return n();
      var a = "transition" === o ? mo : bo,
        s = 0,
        u = function () {
          e.removeEventListener(a, c), n();
        },
        c = function (t) {
          t.target === e && ++s >= l && u();
        };
      setTimeout(function () {
        s < l && u();
      }, i + 1),
        e.addEventListener(a, c);
    }
    var So = /\b(transform|all)(,|$)/;
    function Oo(e, t) {
      var n,
        r = window.getComputedStyle(e),
        o = (r[vo + "Delay"] || "").split(", "),
        i = (r[vo + "Duration"] || "").split(", "),
        l = To(o, i),
        a = (r[yo + "Delay"] || "").split(", "),
        s = (r[yo + "Duration"] || "").split(", "),
        u = To(a, s),
        c = 0,
        f = 0;
      return (
        "transition" === t
          ? l > 0 && ((n = "transition"), (c = l), (f = i.length))
          : "animation" === t
          ? u > 0 && ((n = "animation"), (c = u), (f = s.length))
          : (f = (n =
              (c = Math.max(l, u)) > 0
                ? l > u
                  ? "transition"
                  : "animation"
                : null)
              ? "transition" === n
                ? i.length
                : s.length
              : 0),
        {
          type: n,
          timeout: c,
          propCount: f,
          hasTransform: "transition" === n && So.test(r[vo + "Property"]),
        }
      );
    }
    function To(e, t) {
      for (; e.length < t.length; ) e = e.concat(e);
      return Math.max.apply(
        null,
        t.map(function (t, n) {
          return jo(t) + jo(e[n]);
        })
      );
    }
    function jo(e) {
      return 1e3 * Number(e.slice(0, -1).replace(",", "."));
    }
    function $o(e, t) {
      var n = e.elm;
      l(n._leaveCb) && ((n._leaveCb.cancelled = !0), n._leaveCb());
      var r = po(e.data.transition);
      if (!i(r) && !l(n._enterCb) && 1 === n.nodeType) {
        for (
          var o = r.css,
            a = r.type,
            s = r.enterClass,
            f = r.enterToClass,
            p = r.enterActiveClass,
            d = r.appearClass,
            h = r.appearToClass,
            g = r.appearActiveClass,
            v = r.beforeEnter,
            m = r.enter,
            b = r.afterEnter,
            w = r.enterCancelled,
            _ = r.beforeAppear,
            x = r.appear,
            k = r.afterAppear,
            C = r.appearCancelled,
            S = r.duration,
            O = Kt,
            T = Kt.$vnode;
          T && T.parent;

        )
          (O = T.context), (T = T.parent);
        var j = !O._isMounted || !e.isRootInsert;
        if (!j || x || "" === x) {
          var $ = j && d ? d : s,
            A = j && g ? g : p,
            E = j && h ? h : f,
            P = (j && _) || v,
            L = j && u(x) ? x : m,
            R = (j && k) || b,
            z = (j && C) || w,
            D = y(c(S) ? S.enter : S);
          0;
          var I = !1 !== o && !X,
            M = Po(L),
            U = (n._enterCb = B(function () {
              I && (ko(n, E), ko(n, A)),
                U.cancelled ? (I && ko(n, $), z && z(n)) : R && R(n),
                (n._enterCb = null);
            }));
          e.data.show ||
            Ze(e, "insert", function () {
              var t = n.parentNode,
                r = t && t._pending && t._pending[e.key];
              r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(),
                L && L(n, U);
            }),
            P && P(n),
            I &&
              (xo(n, $),
              xo(n, A),
              _o(function () {
                ko(n, $),
                  U.cancelled ||
                    (xo(n, E), M || (Eo(D) ? setTimeout(U, D) : Co(n, a, U)));
              })),
            e.data.show && (t && t(), L && L(n, U)),
            I || M || U();
        }
      }
    }
    function Ao(e, t) {
      var n = e.elm;
      l(n._enterCb) && ((n._enterCb.cancelled = !0), n._enterCb());
      var r = po(e.data.transition);
      if (i(r) || 1 !== n.nodeType) return t();
      if (!l(n._leaveCb)) {
        var o = r.css,
          a = r.type,
          s = r.leaveClass,
          u = r.leaveToClass,
          f = r.leaveActiveClass,
          p = r.beforeLeave,
          d = r.leave,
          h = r.afterLeave,
          g = r.leaveCancelled,
          v = r.delayLeave,
          m = r.duration,
          b = !1 !== o && !X,
          w = Po(d),
          _ = y(c(m) ? m.leave : m);
        0;
        var x = (n._leaveCb = B(function () {
          n.parentNode &&
            n.parentNode._pending &&
            (n.parentNode._pending[e.key] = null),
            b && (ko(n, u), ko(n, f)),
            x.cancelled ? (b && ko(n, s), g && g(n)) : (t(), h && h(n)),
            (n._leaveCb = null);
        }));
        v ? v(k) : k();
      }
      function k() {
        x.cancelled ||
          (!e.data.show &&
            n.parentNode &&
            ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] =
              e),
          p && p(n),
          b &&
            (xo(n, s),
            xo(n, f),
            _o(function () {
              ko(n, s),
                x.cancelled ||
                  (xo(n, u), w || (Eo(_) ? setTimeout(x, _) : Co(n, a, x)));
            })),
          d && d(n, x),
          b || w || x());
      }
    }
    function Eo(e) {
      return "number" == typeof e && !isNaN(e);
    }
    function Po(e) {
      if (i(e)) return !1;
      var t = e.fns;
      return l(t)
        ? Po(Array.isArray(t) ? t[0] : t)
        : (e._length || e.length) > 1;
    }
    function Lo(e, t) {
      !0 !== t.data.show && $o(t);
    }
    var Ro = (function (e) {
      var t,
        n,
        r = {},
        u = e.modules,
        c = e.nodeOps;
      for (t = 0; t < Sr.length; ++t)
        for (r[Sr[t]] = [], n = 0; n < u.length; ++n)
          l(u[n][Sr[t]]) && r[Sr[t]].push(u[n][Sr[t]]);
      function f(e) {
        var t = c.parentNode(e);
        l(t) && c.removeChild(t, e);
      }
      function p(e, t, n, o, i, s, u) {
        if (
          (l(e.elm) && l(s) && (e = s[u] = ve(e)),
          (e.isRootInsert = !i),
          !(function (e, t, n, o) {
            var i = e.data;
            if (l(i)) {
              var s = l(e.componentInstance) && i.keepAlive;
              if (
                (l((i = i.hook)) && l((i = i.init)) && i(e, !1),
                l(e.componentInstance))
              )
                return (
                  d(e, t),
                  h(n, e.elm, o),
                  a(s) &&
                    (function (e, t, n, o) {
                      var i,
                        a = e;
                      for (; a.componentInstance; )
                        if (
                          ((a = a.componentInstance._vnode),
                          l((i = a.data)) && l((i = i.transition)))
                        ) {
                          for (i = 0; i < r.activate.length; ++i)
                            r.activate[i](Cr, a);
                          t.push(a);
                          break;
                        }
                      h(n, e.elm, o);
                    })(e, t, n, o),
                  !0
                );
            }
          })(e, t, n, o))
        ) {
          var f = e.data,
            p = e.children,
            v = e.tag;
          l(v)
            ? ((e.elm = e.ns
                ? c.createElementNS(e.ns, v)
                : c.createElement(v, e)),
              y(e),
              g(e, p, t),
              l(f) && m(e, t),
              h(n, e.elm, o))
            : a(e.isComment)
            ? ((e.elm = c.createComment(e.text)), h(n, e.elm, o))
            : ((e.elm = c.createTextNode(e.text)), h(n, e.elm, o));
        }
      }
      function d(e, t) {
        l(e.data.pendingInsert) &&
          (t.push.apply(t, e.data.pendingInsert),
          (e.data.pendingInsert = null)),
          (e.elm = e.componentInstance.$el),
          v(e) ? (m(e, t), y(e)) : (xr(e), t.push(e));
      }
      function h(e, t, n) {
        l(e) &&
          (l(n)
            ? c.parentNode(n) === e && c.insertBefore(e, t, n)
            : c.appendChild(e, t));
      }
      function g(e, t, n) {
        if (o(t)) {
          0;
          for (var r = 0; r < t.length; ++r) p(t[r], n, e.elm, null, !0, t, r);
        } else
          s(e.text) && c.appendChild(e.elm, c.createTextNode(String(e.text)));
      }
      function v(e) {
        for (; e.componentInstance; ) e = e.componentInstance._vnode;
        return l(e.tag);
      }
      function m(e, n) {
        for (var o = 0; o < r.create.length; ++o) r.create[o](Cr, e);
        l((t = e.data.hook)) &&
          (l(t.create) && t.create(Cr, e), l(t.insert) && n.push(e));
      }
      function y(e) {
        var t;
        if (l((t = e.fnScopeId))) c.setStyleScope(e.elm, t);
        else
          for (var n = e; n; )
            l((t = n.context)) &&
              l((t = t.$options._scopeId)) &&
              c.setStyleScope(e.elm, t),
              (n = n.parent);
        l((t = Kt)) &&
          t !== e.context &&
          t !== e.fnContext &&
          l((t = t.$options._scopeId)) &&
          c.setStyleScope(e.elm, t);
      }
      function w(e, t, n, r, o, i) {
        for (; r <= o; ++r) p(n[r], i, e, t, !1, n, r);
      }
      function _(e) {
        var t,
          n,
          o = e.data;
        if (l(o))
          for (
            l((t = o.hook)) && l((t = t.destroy)) && t(e), t = 0;
            t < r.destroy.length;
            ++t
          )
            r.destroy[t](e);
        if (l((t = e.children)))
          for (n = 0; n < e.children.length; ++n) _(e.children[n]);
      }
      function x(e, t, n) {
        for (; t <= n; ++t) {
          var r = e[t];
          l(r) && (l(r.tag) ? (k(r), _(r)) : f(r.elm));
        }
      }
      function k(e, t) {
        if (l(t) || l(e.data)) {
          var n,
            o = r.remove.length + 1;
          for (
            l(t)
              ? (t.listeners += o)
              : (t = (function (e, t) {
                  function n() {
                    0 == --n.listeners && f(e);
                  }
                  return (n.listeners = t), n;
                })(e.elm, o)),
              l((n = e.componentInstance)) &&
                l((n = n._vnode)) &&
                l(n.data) &&
                k(n, t),
              n = 0;
            n < r.remove.length;
            ++n
          )
            r.remove[n](e, t);
          l((n = e.data.hook)) && l((n = n.remove)) ? n(e, t) : t();
        } else f(e.elm);
      }
      function C(e, t, n, r) {
        for (var o = n; o < r; o++) {
          var i = t[o];
          if (l(i) && Or(e, i)) return o;
        }
      }
      function S(e, t, n, o, s, u) {
        if (e !== t) {
          l(t.elm) && l(o) && (t = o[s] = ve(t));
          var f = (t.elm = e.elm);
          if (a(e.isAsyncPlaceholder))
            l(t.asyncFactory.resolved)
              ? j(e.elm, t, n)
              : (t.isAsyncPlaceholder = !0);
          else if (
            a(t.isStatic) &&
            a(e.isStatic) &&
            t.key === e.key &&
            (a(t.isCloned) || a(t.isOnce))
          )
            t.componentInstance = e.componentInstance;
          else {
            var d,
              h = t.data;
            l(h) && l((d = h.hook)) && l((d = d.prepatch)) && d(e, t);
            var g = e.children,
              m = t.children;
            if (l(h) && v(t)) {
              for (d = 0; d < r.update.length; ++d) r.update[d](e, t);
              l((d = h.hook)) && l((d = d.update)) && d(e, t);
            }
            i(t.text)
              ? l(g) && l(m)
                ? g !== m &&
                  (function (e, t, n, r, o) {
                    var a,
                      s,
                      u,
                      f = 0,
                      d = 0,
                      h = t.length - 1,
                      g = t[0],
                      v = t[h],
                      m = n.length - 1,
                      y = n[0],
                      b = n[m],
                      _ = !o;
                    for (0; f <= h && d <= m; )
                      i(g)
                        ? (g = t[++f])
                        : i(v)
                        ? (v = t[--h])
                        : Or(g, y)
                        ? (S(g, y, r, n, d), (g = t[++f]), (y = n[++d]))
                        : Or(v, b)
                        ? (S(v, b, r, n, m), (v = t[--h]), (b = n[--m]))
                        : Or(g, b)
                        ? (S(g, b, r, n, m),
                          _ && c.insertBefore(e, g.elm, c.nextSibling(v.elm)),
                          (g = t[++f]),
                          (b = n[--m]))
                        : Or(v, y)
                        ? (S(v, y, r, n, d),
                          _ && c.insertBefore(e, v.elm, g.elm),
                          (v = t[--h]),
                          (y = n[++d]))
                        : (i(a) && (a = Tr(t, f, h)),
                          i((s = l(y.key) ? a[y.key] : C(y, t, f, h)))
                            ? p(y, r, e, g.elm, !1, n, d)
                            : Or((u = t[s]), y)
                            ? (S(u, y, r, n, d),
                              (t[s] = void 0),
                              _ && c.insertBefore(e, u.elm, g.elm))
                            : p(y, r, e, g.elm, !1, n, d),
                          (y = n[++d]));
                    f > h
                      ? w(e, i(n[m + 1]) ? null : n[m + 1].elm, n, d, m, r)
                      : d > m && x(t, f, h);
                  })(f, g, m, n, u)
                : l(m)
                ? (l(e.text) && c.setTextContent(f, ""),
                  w(f, null, m, 0, m.length - 1, n))
                : l(g)
                ? x(g, 0, g.length - 1)
                : l(e.text) && c.setTextContent(f, "")
              : e.text !== t.text && c.setTextContent(f, t.text),
              l(h) && l((d = h.hook)) && l((d = d.postpatch)) && d(e, t);
          }
        }
      }
      function O(e, t, n) {
        if (a(n) && l(e.parent)) e.parent.data.pendingInsert = t;
        else for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r]);
      }
      var T = b("attrs,class,staticClass,staticStyle,key");
      function j(e, t, n, r) {
        var o,
          i = t.tag,
          s = t.data,
          u = t.children;
        if (
          ((r = r || (s && s.pre)),
          (t.elm = e),
          a(t.isComment) && l(t.asyncFactory))
        )
          return (t.isAsyncPlaceholder = !0), !0;
        if (
          l(s) &&
          (l((o = s.hook)) && l((o = o.init)) && o(t, !0),
          l((o = t.componentInstance)))
        )
          return d(t, n), !0;
        if (l(i)) {
          if (l(u))
            if (e.hasChildNodes())
              if (l((o = s)) && l((o = o.domProps)) && l((o = o.innerHTML))) {
                if (o !== e.innerHTML) return !1;
              } else {
                for (var c = !0, f = e.firstChild, p = 0; p < u.length; p++) {
                  if (!f || !j(f, u[p], n, r)) {
                    c = !1;
                    break;
                  }
                  f = f.nextSibling;
                }
                if (!c || f) return !1;
              }
            else g(t, u, n);
          if (l(s)) {
            var h = !1;
            for (var v in s)
              if (!T(v)) {
                (h = !0), m(t, n);
                break;
              }
            !h && s.class && Nt(s.class);
          }
        } else e.data !== t.text && (e.data = t.text);
        return !0;
      }
      return function (e, t, n, o) {
        if (!i(t)) {
          var s,
            u = !1,
            f = [];
          if (i(e)) (u = !0), p(t, f);
          else {
            var d = l(e.nodeType);
            if (!d && Or(e, t)) S(e, t, f, null, null, o);
            else {
              if (d) {
                if (
                  (1 === e.nodeType &&
                    e.hasAttribute("data-server-rendered") &&
                    (e.removeAttribute("data-server-rendered"), (n = !0)),
                  a(n) && j(e, t, f))
                )
                  return O(t, f, !0), e;
                (s = e),
                  (e = new de(c.tagName(s).toLowerCase(), {}, [], void 0, s));
              }
              var h = e.elm,
                g = c.parentNode(h);
              if (
                (p(t, f, h._leaveCb ? null : g, c.nextSibling(h)), l(t.parent))
              )
                for (var m = t.parent, y = v(t); m; ) {
                  for (var b = 0; b < r.destroy.length; ++b) r.destroy[b](m);
                  if (((m.elm = t.elm), y)) {
                    for (var w = 0; w < r.create.length; ++w)
                      r.create[w](Cr, m);
                    var k = m.data.hook.insert;
                    if (k.merged)
                      for (var C = k.fns.slice(1), T = 0; T < C.length; T++)
                        C[T]();
                  } else xr(m);
                  m = m.parent;
                }
              l(g) ? x([e], 0, 0) : l(e.tag) && _(e);
            }
          }
          return O(t, f, u), t.elm;
        }
        l(e) && _(e);
      };
    })({
      nodeOps: wr,
      modules: [
        Mr,
        Fr,
        Gr,
        Qr,
        so,
        Y
          ? {
              create: Lo,
              activate: Lo,
              remove: function (e, t) {
                !0 !== e.data.show ? Ao(e, t) : t();
              },
            }
          : {},
      ].concat(Rr),
    });
    X &&
      document.addEventListener("selectionchange", function () {
        var e = document.activeElement;
        e && e.vmodel && No(e, "input");
      });
    var zo = {
      inserted: function (e, t, n, r) {
        "select" === n.tag
          ? (r.elm && !r.elm._vOptions
              ? Ze(n, "postpatch", function () {
                  zo.componentUpdated(e, t, n);
                })
              : Do(e, t, n.context),
            (e._vOptions = [].map.call(e.options, Bo)))
          : ("textarea" === n.tag || br(e.type)) &&
            ((e._vModifiers = t.modifiers),
            t.modifiers.lazy ||
              (e.addEventListener("compositionstart", Uo),
              e.addEventListener("compositionend", Fo),
              e.addEventListener("change", Fo),
              X && (e.vmodel = !0)));
      },
      componentUpdated: function (e, t, n) {
        if ("select" === n.tag) {
          Do(e, t, n.context);
          var r = e._vOptions,
            o = (e._vOptions = [].map.call(e.options, Bo));
          if (
            o.some(function (e, t) {
              return !I(e, r[t]);
            })
          )
            (e.multiple
              ? t.value.some(function (e) {
                  return Mo(e, o);
                })
              : t.value !== t.oldValue && Mo(t.value, o)) && No(e, "change");
        }
      },
    };
    function Do(e, t, n) {
      Io(e, t, n),
        (Q || J) &&
          setTimeout(function () {
            Io(e, t, n);
          }, 0);
    }
    function Io(e, t, n) {
      var r = t.value,
        o = e.multiple;
      if (!o || Array.isArray(r)) {
        for (var i, l, a = 0, s = e.options.length; a < s; a++)
          if (((l = e.options[a]), o))
            (i = M(r, Bo(l)) > -1), l.selected !== i && (l.selected = i);
          else if (I(Bo(l), r))
            return void (e.selectedIndex !== a && (e.selectedIndex = a));
        o || (e.selectedIndex = -1);
      }
    }
    function Mo(e, t) {
      return t.every(function (t) {
        return !I(t, e);
      });
    }
    function Bo(e) {
      return "_value" in e ? e._value : e.value;
    }
    function Uo(e) {
      e.target.composing = !0;
    }
    function Fo(e) {
      e.target.composing && ((e.target.composing = !1), No(e.target, "input"));
    }
    function No(e, t) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(t, !0, !0), e.dispatchEvent(n);
    }
    function Ho(e) {
      return !e.componentInstance || (e.data && e.data.transition)
        ? e
        : Ho(e.componentInstance._vnode);
    }
    var Wo = {
        model: zo,
        show: {
          bind: function (e, t, n) {
            var r = t.value,
              o = (n = Ho(n)).data && n.data.transition,
              i = (e.__vOriginalDisplay =
                "none" === e.style.display ? "" : e.style.display);
            r && o
              ? ((n.data.show = !0),
                $o(n, function () {
                  e.style.display = i;
                }))
              : (e.style.display = r ? i : "none");
          },
          update: function (e, t, n) {
            var r = t.value;
            !r != !t.oldValue &&
              ((n = Ho(n)).data && n.data.transition
                ? ((n.data.show = !0),
                  r
                    ? $o(n, function () {
                        e.style.display = e.__vOriginalDisplay;
                      })
                    : Ao(n, function () {
                        e.style.display = "none";
                      }))
                : (e.style.display = r ? e.__vOriginalDisplay : "none"));
          },
          unbind: function (e, t, n, r, o) {
            o || (e.style.display = e.__vOriginalDisplay);
          },
        },
      },
      Vo = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object],
      };
    function qo(e) {
      var t = e && e.componentOptions;
      return t && t.Ctor.options.abstract ? qo(Ct(t.children)) : e;
    }
    function Zo(e) {
      var t = {},
        n = e.$options;
      for (var r in n.propsData) t[r] = e[r];
      var o = n._parentListeners;
      for (var r in o) t[O(r)] = o[r];
      return t;
    }
    function Go(e, t) {
      if (/\d-keep-alive$/.test(t.tag))
        return e("keep-alive", { props: t.componentOptions.propsData });
    }
    var Yo = function (e) {
        return e.tag || ht(e);
      },
      Ko = function (e) {
        return "show" === e.name;
      },
      Qo = {
        name: "transition",
        props: Vo,
        abstract: !0,
        render: function (e) {
          var t = this,
            n = this.$slots.default;
          if (n && (n = n.filter(Yo)).length) {
            0;
            var r = this.mode;
            0;
            var o = n[0];
            if (
              (function (e) {
                for (; (e = e.parent); ) if (e.data.transition) return !0;
              })(this.$vnode)
            )
              return o;
            var i = qo(o);
            if (!i) return o;
            if (this._leaving) return Go(e, o);
            var l = "__transition-".concat(this._uid, "-");
            i.key =
              null == i.key
                ? i.isComment
                  ? l + "comment"
                  : l + i.tag
                : s(i.key)
                ? 0 === String(i.key).indexOf(l)
                  ? i.key
                  : l + i.key
                : i.key;
            var a = ((i.data || (i.data = {})).transition = Zo(this)),
              u = this._vnode,
              c = qo(u);
            if (
              (i.data.directives &&
                i.data.directives.some(Ko) &&
                (i.data.show = !0),
              c &&
                c.data &&
                !(function (e, t) {
                  return t.key === e.key && t.tag === e.tag;
                })(i, c) &&
                !ht(c) &&
                (!c.componentInstance || !c.componentInstance._vnode.isComment))
            ) {
              var f = (c.data.transition = P({}, a));
              if ("out-in" === r)
                return (
                  (this._leaving = !0),
                  Ze(f, "afterLeave", function () {
                    (t._leaving = !1), t.$forceUpdate();
                  }),
                  Go(e, o)
                );
              if ("in-out" === r) {
                if (ht(i)) return u;
                var p,
                  d = function () {
                    p();
                  };
                Ze(a, "afterEnter", d),
                  Ze(a, "enterCancelled", d),
                  Ze(f, "delayLeave", function (e) {
                    p = e;
                  });
              }
            }
            return o;
          }
        },
      },
      Xo = P({ tag: String, moveClass: String }, Vo);
    function Jo(e) {
      e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
    }
    function ei(e) {
      e.data.newPos = e.elm.getBoundingClientRect();
    }
    function ti(e) {
      var t = e.data.pos,
        n = e.data.newPos,
        r = t.left - n.left,
        o = t.top - n.top;
      if (r || o) {
        e.data.moved = !0;
        var i = e.elm.style;
        (i.transform = i.WebkitTransform =
          "translate(".concat(r, "px,").concat(o, "px)")),
          (i.transitionDuration = "0s");
      }
    }
    delete Xo.mode;
    var ni = {
      Transition: Qo,
      TransitionGroup: {
        props: Xo,
        beforeMount: function () {
          var e = this,
            t = this._update;
          this._update = function (n, r) {
            var o = Qt(e);
            e.__patch__(e._vnode, e.kept, !1, !0),
              (e._vnode = e.kept),
              o(),
              t.call(e, n, r);
          };
        },
        render: function (e) {
          for (
            var t = this.tag || this.$vnode.data.tag || "span",
              n = Object.create(null),
              r = (this.prevChildren = this.children),
              o = this.$slots.default || [],
              i = (this.children = []),
              l = Zo(this),
              a = 0;
            a < o.length;
            a++
          ) {
            if ((c = o[a]).tag)
              if (null != c.key && 0 !== String(c.key).indexOf("__vlist"))
                i.push(c),
                  (n[c.key] = c),
                  ((c.data || (c.data = {})).transition = l);
              else;
          }
          if (r) {
            var s = [],
              u = [];
            for (a = 0; a < r.length; a++) {
              var c;
              ((c = r[a]).data.transition = l),
                (c.data.pos = c.elm.getBoundingClientRect()),
                n[c.key] ? s.push(c) : u.push(c);
            }
            (this.kept = e(t, null, s)), (this.removed = u);
          }
          return e(t, null, i);
        },
        updated: function () {
          var e = this.prevChildren,
            t = this.moveClass || (this.name || "v") + "-move";
          e.length &&
            this.hasMove(e[0].elm, t) &&
            (e.forEach(Jo),
            e.forEach(ei),
            e.forEach(ti),
            (this._reflow = document.body.offsetHeight),
            e.forEach(function (e) {
              if (e.data.moved) {
                var n = e.elm,
                  r = n.style;
                xo(n, t),
                  (r.transform = r.WebkitTransform = r.transitionDuration = ""),
                  n.addEventListener(
                    mo,
                    (n._moveCb = function e(r) {
                      (r && r.target !== n) ||
                        (r && !/transform$/.test(r.propertyName)) ||
                        (n.removeEventListener(mo, e),
                        (n._moveCb = null),
                        ko(n, t));
                    })
                  );
              }
            }));
        },
        methods: {
          hasMove: function (e, t) {
            if (!go) return !1;
            if (this._hasMove) return this._hasMove;
            var n = e.cloneNode();
            e._transitionClasses &&
              e._transitionClasses.forEach(function (e) {
                fo(n, e);
              }),
              co(n, t),
              (n.style.display = "none"),
              this.$el.appendChild(n);
            var r = Oo(n);
            return this.$el.removeChild(n), (this._hasMove = r.hasTransform);
          },
        },
      },
    };
    function ri(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    (Zn.config.mustUseProp = function (e, t, n) {
      return (
        ("value" === n && nr(e) && "button" !== t) ||
        ("selected" === n && "option" === e) ||
        ("checked" === n && "input" === e) ||
        ("muted" === n && "video" === e)
      );
    }),
      (Zn.config.isReservedTag = mr),
      (Zn.config.isReservedAttr = tr),
      (Zn.config.getTagNamespace = function (e) {
        return vr(e) ? "svg" : "math" === e ? "math" : void 0;
      }),
      (Zn.config.isUnknownElement = function (e) {
        if (!Y) return !0;
        if (mr(e)) return !1;
        if (((e = e.toLowerCase()), null != yr[e])) return yr[e];
        var t = document.createElement(e);
        return e.indexOf("-") > -1
          ? (yr[e] =
              t.constructor === window.HTMLUnknownElement ||
              t.constructor === window.HTMLElement)
          : (yr[e] = /HTMLUnknownElement/.test(t.toString()));
      }),
      P(Zn.options.directives, Wo),
      P(Zn.options.components, ni),
      (Zn.prototype.__patch__ = Y ? Ro : R),
      (Zn.prototype.$mount = function (e, t) {
        return (function (e, t, n) {
          var r;
          (e.$el = t),
            e.$options.render || (e.$options.render = he),
            en(e, "beforeMount"),
            (r = function () {
              e._update(e._render(), n);
            }),
            new Vt(
              e,
              r,
              R,
              {
                before: function () {
                  e._isMounted && !e._isDestroyed && en(e, "beforeUpdate");
                },
              },
              !0
            ),
            (n = !1);
          var o = e._preWatchers;
          if (o) for (var i = 0; i < o.length; i++) o[i].run();
          return null == e.$vnode && ((e._isMounted = !0), en(e, "mounted")), e;
        })(
          this,
          (e =
            e && Y
              ? (function (e) {
                  if ("string" == typeof e) {
                    var t = document.querySelector(e);
                    return t || document.createElement("div");
                  }
                  return e;
                })(e)
              : void 0),
          t
        );
      }),
      Y &&
        setTimeout(function () {
          H.devtools && ae && ae.emit("init", Zn);
        }, 0);
    var oi = /[!'()*]/g,
      ii = function (e) {
        return "%" + e.charCodeAt(0).toString(16);
      },
      li = /%2C/g,
      ai = function (e) {
        return encodeURIComponent(e).replace(oi, ii).replace(li, ",");
      };
    function si(e) {
      try {
        return decodeURIComponent(e);
      } catch (e) {
        0;
      }
      return e;
    }
    var ui = function (e) {
      return null == e || "object" == typeof e ? e : String(e);
    };
    function ci(e) {
      var t = {};
      return (e = e.trim().replace(/^(\?|#|&)/, ""))
        ? (e.split("&").forEach(function (e) {
            var n = e.replace(/\+/g, " ").split("="),
              r = si(n.shift()),
              o = n.length > 0 ? si(n.join("=")) : null;
            void 0 === t[r]
              ? (t[r] = o)
              : Array.isArray(t[r])
              ? t[r].push(o)
              : (t[r] = [t[r], o]);
          }),
          t)
        : t;
    }
    function fi(e) {
      var t = e
        ? Object.keys(e)
            .map(function (t) {
              var n = e[t];
              if (void 0 === n) return "";
              if (null === n) return ai(t);
              if (Array.isArray(n)) {
                var r = [];
                return (
                  n.forEach(function (e) {
                    void 0 !== e &&
                      (null === e
                        ? r.push(ai(t))
                        : r.push(ai(t) + "=" + ai(e)));
                  }),
                  r.join("&")
                );
              }
              return ai(t) + "=" + ai(n);
            })
            .filter(function (e) {
              return e.length > 0;
            })
            .join("&")
        : null;
      return t ? "?" + t : "";
    }
    var pi = /\/?$/;
    function di(e, t, n, r) {
      var o = r && r.options.stringifyQuery,
        i = t.query || {};
      try {
        i = hi(i);
      } catch (e) {}
      var l = {
        name: t.name || (e && e.name),
        meta: (e && e.meta) || {},
        path: t.path || "/",
        hash: t.hash || "",
        query: i,
        params: t.params || {},
        fullPath: mi(t, o),
        matched: e ? vi(e) : [],
      };
      return n && (l.redirectedFrom = mi(n, o)), Object.freeze(l);
    }
    function hi(e) {
      if (Array.isArray(e)) return e.map(hi);
      if (e && "object" == typeof e) {
        var t = {};
        for (var n in e) t[n] = hi(e[n]);
        return t;
      }
      return e;
    }
    var gi = di(null, { path: "/" });
    function vi(e) {
      for (var t = []; e; ) t.unshift(e), (e = e.parent);
      return t;
    }
    function mi(e, t) {
      var n = e.path,
        r = e.query;
      void 0 === r && (r = {});
      var o = e.hash;
      return void 0 === o && (o = ""), (n || "/") + (t || fi)(r) + o;
    }
    function yi(e, t, n) {
      return t === gi
        ? e === t
        : !!t &&
            (e.path && t.path
              ? e.path.replace(pi, "") === t.path.replace(pi, "") &&
                (n || (e.hash === t.hash && bi(e.query, t.query)))
              : !(!e.name || !t.name) &&
                e.name === t.name &&
                (n ||
                  (e.hash === t.hash &&
                    bi(e.query, t.query) &&
                    bi(e.params, t.params))));
    }
    function bi(e, t) {
      if ((void 0 === e && (e = {}), void 0 === t && (t = {}), !e || !t))
        return e === t;
      var n = Object.keys(e).sort(),
        r = Object.keys(t).sort();
      return (
        n.length === r.length &&
        n.every(function (n, o) {
          var i = e[n];
          if (r[o] !== n) return !1;
          var l = t[n];
          return null == i || null == l
            ? i === l
            : "object" == typeof i && "object" == typeof l
            ? bi(i, l)
            : String(i) === String(l);
        })
      );
    }
    function wi(e) {
      for (var t = 0; t < e.matched.length; t++) {
        var n = e.matched[t];
        for (var r in n.instances) {
          var o = n.instances[r],
            i = n.enteredCbs[r];
          if (o && i) {
            delete n.enteredCbs[r];
            for (var l = 0; l < i.length; l++) o._isBeingDestroyed || i[l](o);
          }
        }
      }
    }
    var _i = {
      name: "RouterView",
      functional: !0,
      props: { name: { type: String, default: "default" } },
      render: function (e, t) {
        var n = t.props,
          r = t.children,
          o = t.parent,
          i = t.data;
        i.routerView = !0;
        for (
          var l = o.$createElement,
            a = n.name,
            s = o.$route,
            u = o._routerViewCache || (o._routerViewCache = {}),
            c = 0,
            f = !1;
          o && o._routerRoot !== o;

        ) {
          var p = o.$vnode ? o.$vnode.data : {};
          p.routerView && c++,
            p.keepAlive && o._directInactive && o._inactive && (f = !0),
            (o = o.$parent);
        }
        if (((i.routerViewDepth = c), f)) {
          var d = u[a],
            h = d && d.component;
          return h
            ? (d.configProps && xi(h, i, d.route, d.configProps), l(h, i, r))
            : l();
        }
        var g = s.matched[c],
          v = g && g.components[a];
        if (!g || !v) return (u[a] = null), l();
        (u[a] = { component: v }),
          (i.registerRouteInstance = function (e, t) {
            var n = g.instances[a];
            ((t && n !== e) || (!t && n === e)) && (g.instances[a] = t);
          }),
          ((i.hook || (i.hook = {})).prepatch = function (e, t) {
            g.instances[a] = t.componentInstance;
          }),
          (i.hook.init = function (e) {
            e.data.keepAlive &&
              e.componentInstance &&
              e.componentInstance !== g.instances[a] &&
              (g.instances[a] = e.componentInstance),
              wi(s);
          });
        var m = g.props && g.props[a];
        return (
          m && (ri(u[a], { route: s, configProps: m }), xi(v, i, s, m)),
          l(v, i, r)
        );
      },
    };
    function xi(e, t, n, r) {
      var o = (t.props = (function (e, t) {
        switch (typeof t) {
          case "undefined":
            return;
          case "object":
            return t;
          case "function":
            return t(e);
          case "boolean":
            return t ? e.params : void 0;
          default:
            0;
        }
      })(n, r));
      if (o) {
        o = t.props = ri({}, o);
        var i = (t.attrs = t.attrs || {});
        for (var l in o)
          (e.props && l in e.props) || ((i[l] = o[l]), delete o[l]);
      }
    }
    function ki(e, t, n) {
      var r = e.charAt(0);
      if ("/" === r) return e;
      if ("?" === r || "#" === r) return t + e;
      var o = t.split("/");
      (n && o[o.length - 1]) || o.pop();
      for (var i = e.replace(/^\//, "").split("/"), l = 0; l < i.length; l++) {
        var a = i[l];
        ".." === a ? o.pop() : "." !== a && o.push(a);
      }
      return "" !== o[0] && o.unshift(""), o.join("/");
    }
    function Ci(e) {
      return e.replace(/\/(?:\s*\/)+/g, "/");
    }
    var Si =
        Array.isArray ||
        function (e) {
          return "[object Array]" == Object.prototype.toString.call(e);
        },
      Oi = Ui,
      Ti = Pi,
      ji = function (e, t) {
        return Ri(Pi(e, t), t);
      },
      $i = Ri,
      Ai = Bi,
      Ei = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
    function Pi(e, t) {
      for (
        var n, r = [], o = 0, i = 0, l = "", a = (t && t.delimiter) || "/";
        null != (n = Ei.exec(e));

      ) {
        var s = n[0],
          u = n[1],
          c = n.index;
        if (((l += e.slice(i, c)), (i = c + s.length), u)) l += u[1];
        else {
          var f = e[i],
            p = n[2],
            d = n[3],
            h = n[4],
            g = n[5],
            v = n[6],
            m = n[7];
          l && (r.push(l), (l = ""));
          var y = null != p && null != f && f !== p,
            b = "+" === v || "*" === v,
            w = "?" === v || "*" === v,
            _ = n[2] || a,
            x = h || g;
          r.push({
            name: d || o++,
            prefix: p || "",
            delimiter: _,
            optional: w,
            repeat: b,
            partial: y,
            asterisk: !!m,
            pattern: x ? Di(x) : m ? ".*" : "[^" + zi(_) + "]+?",
          });
        }
      }
      return i < e.length && (l += e.substr(i)), l && r.push(l), r;
    }
    function Li(e) {
      return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function Ri(e, t) {
      for (var n = new Array(e.length), r = 0; r < e.length; r++)
        "object" == typeof e[r] &&
          (n[r] = new RegExp("^(?:" + e[r].pattern + ")$", Mi(t)));
      return function (t, r) {
        for (
          var o = "",
            i = t || {},
            l = (r || {}).pretty ? Li : encodeURIComponent,
            a = 0;
          a < e.length;
          a++
        ) {
          var s = e[a];
          if ("string" != typeof s) {
            var u,
              c = i[s.name];
            if (null == c) {
              if (s.optional) {
                s.partial && (o += s.prefix);
                continue;
              }
              throw new TypeError('Expected "' + s.name + '" to be defined');
            }
            if (Si(c)) {
              if (!s.repeat)
                throw new TypeError(
                  'Expected "' +
                    s.name +
                    '" to not repeat, but received `' +
                    JSON.stringify(c) +
                    "`"
                );
              if (0 === c.length) {
                if (s.optional) continue;
                throw new TypeError(
                  'Expected "' + s.name + '" to not be empty'
                );
              }
              for (var f = 0; f < c.length; f++) {
                if (((u = l(c[f])), !n[a].test(u)))
                  throw new TypeError(
                    'Expected all "' +
                      s.name +
                      '" to match "' +
                      s.pattern +
                      '", but received `' +
                      JSON.stringify(u) +
                      "`"
                  );
                o += (0 === f ? s.prefix : s.delimiter) + u;
              }
            } else {
              if (
                ((u = s.asterisk
                  ? encodeURI(c).replace(/[?#]/g, function (e) {
                      return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                    })
                  : l(c)),
                !n[a].test(u))
              )
                throw new TypeError(
                  'Expected "' +
                    s.name +
                    '" to match "' +
                    s.pattern +
                    '", but received "' +
                    u +
                    '"'
                );
              o += s.prefix + u;
            }
          } else o += s;
        }
        return o;
      };
    }
    function zi(e) {
      return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
    }
    function Di(e) {
      return e.replace(/([=!:$\/()])/g, "\\$1");
    }
    function Ii(e, t) {
      return (e.keys = t), e;
    }
    function Mi(e) {
      return e && e.sensitive ? "" : "i";
    }
    function Bi(e, t, n) {
      Si(t) || ((n = t || n), (t = []));
      for (
        var r = (n = n || {}).strict, o = !1 !== n.end, i = "", l = 0;
        l < e.length;
        l++
      ) {
        var a = e[l];
        if ("string" == typeof a) i += zi(a);
        else {
          var s = zi(a.prefix),
            u = "(?:" + a.pattern + ")";
          t.push(a),
            a.repeat && (u += "(?:" + s + u + ")*"),
            (i += u =
              a.optional
                ? a.partial
                  ? s + "(" + u + ")?"
                  : "(?:" + s + "(" + u + "))?"
                : s + "(" + u + ")");
        }
      }
      var c = zi(n.delimiter || "/"),
        f = i.slice(-c.length) === c;
      return (
        r || (i = (f ? i.slice(0, -c.length) : i) + "(?:" + c + "(?=$))?"),
        (i += o ? "$" : r && f ? "" : "(?=" + c + "|$)"),
        Ii(new RegExp("^" + i, Mi(n)), t)
      );
    }
    function Ui(e, t, n) {
      return (
        Si(t) || ((n = t || n), (t = [])),
        (n = n || {}),
        e instanceof RegExp
          ? (function (e, t) {
              var n = e.source.match(/\((?!\?)/g);
              if (n)
                for (var r = 0; r < n.length; r++)
                  t.push({
                    name: r,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null,
                  });
              return Ii(e, t);
            })(e, t)
          : Si(e)
          ? (function (e, t, n) {
              for (var r = [], o = 0; o < e.length; o++)
                r.push(Ui(e[o], t, n).source);
              return Ii(new RegExp("(?:" + r.join("|") + ")", Mi(n)), t);
            })(e, t, n)
          : (function (e, t, n) {
              return Bi(Pi(e, n), t, n);
            })(e, t, n)
      );
    }
    (Oi.parse = Ti),
      (Oi.compile = ji),
      (Oi.tokensToFunction = $i),
      (Oi.tokensToRegExp = Ai);
    var Fi = Object.create(null);
    function Ni(e, t, n) {
      t = t || {};
      try {
        var r = Fi[e] || (Fi[e] = Oi.compile(e));
        return (
          "string" == typeof t.pathMatch && (t[0] = t.pathMatch),
          r(t, { pretty: !0 })
        );
      } catch (e) {
        return "";
      } finally {
        delete t[0];
      }
    }
    function Hi(e, t, n, r) {
      var o = "string" == typeof e ? { path: e } : e;
      if (o._normalized) return o;
      if (o.name) {
        var i = (o = ri({}, e)).params;
        return i && "object" == typeof i && (o.params = ri({}, i)), o;
      }
      if (!o.path && o.params && t) {
        (o = ri({}, o))._normalized = !0;
        var l = ri(ri({}, t.params), o.params);
        if (t.name) (o.name = t.name), (o.params = l);
        else if (t.matched.length) {
          var a = t.matched[t.matched.length - 1].path;
          o.path = Ni(a, l, t.path);
        } else 0;
        return o;
      }
      var s = (function (e) {
          var t = "",
            n = "",
            r = e.indexOf("#");
          r >= 0 && ((t = e.slice(r)), (e = e.slice(0, r)));
          var o = e.indexOf("?");
          return (
            o >= 0 && ((n = e.slice(o + 1)), (e = e.slice(0, o))),
            { path: e, query: n, hash: t }
          );
        })(o.path || ""),
        u = (t && t.path) || "/",
        c = s.path ? ki(s.path, u, n || o.append) : u,
        f = (function (e, t, n) {
          void 0 === t && (t = {});
          var r,
            o = n || ci;
          try {
            r = o(e || "");
          } catch (e) {
            r = {};
          }
          for (var i in t) {
            var l = t[i];
            r[i] = Array.isArray(l) ? l.map(ui) : ui(l);
          }
          return r;
        })(s.query, o.query, r && r.options.parseQuery),
        p = o.hash || s.hash;
      return (
        p && "#" !== p.charAt(0) && (p = "#" + p),
        { _normalized: !0, path: c, query: f, hash: p }
      );
    }
    var Wi,
      Vi = function () {},
      qi = {
        name: "RouterLink",
        props: {
          to: { type: [String, Object], required: !0 },
          tag: { type: String, default: "a" },
          custom: Boolean,
          exact: Boolean,
          exactPath: Boolean,
          append: Boolean,
          replace: Boolean,
          activeClass: String,
          exactActiveClass: String,
          ariaCurrentValue: { type: String, default: "page" },
          event: { type: [String, Array], default: "click" },
        },
        render: function (e) {
          var t = this,
            n = this.$router,
            r = this.$route,
            o = n.resolve(this.to, r, this.append),
            i = o.location,
            l = o.route,
            a = o.href,
            s = {},
            u = n.options.linkActiveClass,
            c = n.options.linkExactActiveClass,
            f = null == u ? "router-link-active" : u,
            p = null == c ? "router-link-exact-active" : c,
            d = null == this.activeClass ? f : this.activeClass,
            h = null == this.exactActiveClass ? p : this.exactActiveClass,
            g = l.redirectedFrom ? di(null, Hi(l.redirectedFrom), null, n) : l;
          (s[h] = yi(r, g, this.exactPath)),
            (s[d] =
              this.exact || this.exactPath
                ? s[h]
                : (function (e, t) {
                    return (
                      0 ===
                        e.path
                          .replace(pi, "/")
                          .indexOf(t.path.replace(pi, "/")) &&
                      (!t.hash || e.hash === t.hash) &&
                      (function (e, t) {
                        for (var n in t) if (!(n in e)) return !1;
                        return !0;
                      })(e.query, t.query)
                    );
                  })(r, g));
          var v = s[h] ? this.ariaCurrentValue : null,
            m = function (e) {
              Zi(e) && (t.replace ? n.replace(i, Vi) : n.push(i, Vi));
            },
            y = { click: Zi };
          Array.isArray(this.event)
            ? this.event.forEach(function (e) {
                y[e] = m;
              })
            : (y[this.event] = m);
          var b = { class: s },
            w =
              !this.$scopedSlots.$hasNormal &&
              this.$scopedSlots.default &&
              this.$scopedSlots.default({
                href: a,
                route: l,
                navigate: m,
                isActive: s[d],
                isExactActive: s[h],
              });
          if (w) {
            if (1 === w.length) return w[0];
            if (w.length > 1 || !w.length)
              return 0 === w.length ? e() : e("span", {}, w);
          }
          if ("a" === this.tag)
            (b.on = y), (b.attrs = { href: a, "aria-current": v });
          else {
            var _ = (function e(t) {
              var n;
              if (t)
                for (var r = 0; r < t.length; r++) {
                  if ("a" === (n = t[r]).tag) return n;
                  if (n.children && (n = e(n.children))) return n;
                }
            })(this.$slots.default);
            if (_) {
              _.isStatic = !1;
              var x = (_.data = ri({}, _.data));
              for (var k in ((x.on = x.on || {}), x.on)) {
                var C = x.on[k];
                k in y && (x.on[k] = Array.isArray(C) ? C : [C]);
              }
              for (var S in y) S in x.on ? x.on[S].push(y[S]) : (x.on[S] = m);
              var O = (_.data.attrs = ri({}, _.data.attrs));
              (O.href = a), (O["aria-current"] = v);
            } else b.on = y;
          }
          return e(this.tag, b, this.$slots.default);
        },
      };
    function Zi(e) {
      if (
        !(
          e.metaKey ||
          e.altKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.defaultPrevented ||
          (void 0 !== e.button && 0 !== e.button)
        )
      ) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
          var t = e.currentTarget.getAttribute("target");
          if (/\b_blank\b/i.test(t)) return;
        }
        return e.preventDefault && e.preventDefault(), !0;
      }
    }
    var Gi = "undefined" != typeof window;
    function Yi(e, t, n, r, o) {
      var i = t || [],
        l = n || Object.create(null),
        a = r || Object.create(null);
      e.forEach(function (e) {
        !(function e(t, n, r, o, i, l) {
          var a = o.path,
            s = o.name;
          0;
          var u = o.pathToRegexpOptions || {},
            c = (function (e, t, n) {
              n || (e = e.replace(/\/$/, ""));
              if ("/" === e[0]) return e;
              if (null == t) return e;
              return Ci(t.path + "/" + e);
            })(a, i, u.strict);
          "boolean" == typeof o.caseSensitive &&
            (u.sensitive = o.caseSensitive);
          var f = {
            path: c,
            regex: Ki(c, u),
            components: o.components || { default: o.component },
            alias: o.alias
              ? "string" == typeof o.alias
                ? [o.alias]
                : o.alias
              : [],
            instances: {},
            enteredCbs: {},
            name: s,
            parent: i,
            matchAs: l,
            redirect: o.redirect,
            beforeEnter: o.beforeEnter,
            meta: o.meta || {},
            props:
              null == o.props
                ? {}
                : o.components
                ? o.props
                : { default: o.props },
          };
          o.children &&
            o.children.forEach(function (o) {
              var i = l ? Ci(l + "/" + o.path) : void 0;
              e(t, n, r, o, f, i);
            });
          n[f.path] || (t.push(f.path), (n[f.path] = f));
          if (void 0 !== o.alias)
            for (
              var p = Array.isArray(o.alias) ? o.alias : [o.alias], d = 0;
              d < p.length;
              ++d
            ) {
              0;
              var h = { path: p[d], children: o.children };
              e(t, n, r, h, i, f.path || "/");
            }
          s && (r[s] || (r[s] = f));
        })(i, l, a, e, o);
      });
      for (var s = 0, u = i.length; s < u; s++)
        "*" === i[s] && (i.push(i.splice(s, 1)[0]), u--, s--);
      return { pathList: i, pathMap: l, nameMap: a };
    }
    function Ki(e, t) {
      return Oi(e, [], t);
    }
    function Qi(e, t) {
      var n = Yi(e),
        r = n.pathList,
        o = n.pathMap,
        i = n.nameMap;
      function l(e, n, l) {
        var a = Hi(e, n, !1, t),
          u = a.name;
        if (u) {
          var c = i[u];
          if (!c) return s(null, a);
          var f = c.regex.keys
            .filter(function (e) {
              return !e.optional;
            })
            .map(function (e) {
              return e.name;
            });
          if (
            ("object" != typeof a.params && (a.params = {}),
            n && "object" == typeof n.params)
          )
            for (var p in n.params)
              !(p in a.params) &&
                f.indexOf(p) > -1 &&
                (a.params[p] = n.params[p]);
          return (a.path = Ni(c.path, a.params)), s(c, a, l);
        }
        if (a.path) {
          a.params = {};
          for (var d = 0; d < r.length; d++) {
            var h = r[d],
              g = o[h];
            if (Xi(g.regex, a.path, a.params)) return s(g, a, l);
          }
        }
        return s(null, a);
      }
      function a(e, n) {
        var r = e.redirect,
          o = "function" == typeof r ? r(di(e, n, null, t)) : r;
        if (
          ("string" == typeof o && (o = { path: o }),
          !o || "object" != typeof o)
        )
          return s(null, n);
        var a = o,
          u = a.name,
          c = a.path,
          f = n.query,
          p = n.hash,
          d = n.params;
        if (
          ((f = a.hasOwnProperty("query") ? a.query : f),
          (p = a.hasOwnProperty("hash") ? a.hash : p),
          (d = a.hasOwnProperty("params") ? a.params : d),
          u)
        ) {
          i[u];
          return l(
            { _normalized: !0, name: u, query: f, hash: p, params: d },
            void 0,
            n
          );
        }
        if (c) {
          var h = (function (e, t) {
            return ki(e, t.parent ? t.parent.path : "/", !0);
          })(c, e);
          return l(
            { _normalized: !0, path: Ni(h, d), query: f, hash: p },
            void 0,
            n
          );
        }
        return s(null, n);
      }
      function s(e, n, r) {
        return e && e.redirect
          ? a(e, r || n)
          : e && e.matchAs
          ? (function (e, t, n) {
              var r = l({ _normalized: !0, path: Ni(n, t.params) });
              if (r) {
                var o = r.matched,
                  i = o[o.length - 1];
                return (t.params = r.params), s(i, t);
              }
              return s(null, t);
            })(0, n, e.matchAs)
          : di(e, n, r, t);
      }
      return {
        match: l,
        addRoute: function (e, t) {
          var n = "object" != typeof e ? i[e] : void 0;
          Yi([t || e], r, o, i, n),
            n &&
              n.alias.length &&
              Yi(
                n.alias.map(function (e) {
                  return { path: e, children: [t] };
                }),
                r,
                o,
                i,
                n
              );
        },
        getRoutes: function () {
          return r.map(function (e) {
            return o[e];
          });
        },
        addRoutes: function (e) {
          Yi(e, r, o, i);
        },
      };
    }
    function Xi(e, t, n) {
      var r = t.match(e);
      if (!r) return !1;
      if (!n) return !0;
      for (var o = 1, i = r.length; o < i; ++o) {
        var l = e.keys[o - 1];
        l &&
          (n[l.name || "pathMatch"] =
            "string" == typeof r[o] ? si(r[o]) : r[o]);
      }
      return !0;
    }
    var Ji =
      Gi && window.performance && window.performance.now
        ? window.performance
        : Date;
    function el() {
      return Ji.now().toFixed(3);
    }
    var tl = el();
    function nl() {
      return tl;
    }
    function rl(e) {
      return (tl = e);
    }
    var ol = Object.create(null);
    function il() {
      "scrollRestoration" in window.history &&
        (window.history.scrollRestoration = "manual");
      var e = window.location.protocol + "//" + window.location.host,
        t = window.location.href.replace(e, ""),
        n = ri({}, window.history.state);
      return (
        (n.key = nl()),
        window.history.replaceState(n, "", t),
        window.addEventListener("popstate", sl),
        function () {
          window.removeEventListener("popstate", sl);
        }
      );
    }
    function ll(e, t, n, r) {
      if (e.app) {
        var o = e.options.scrollBehavior;
        o &&
          e.app.$nextTick(function () {
            var i = (function () {
                var e = nl();
                if (e) return ol[e];
              })(),
              l = o.call(e, t, n, r ? i : null);
            l &&
              ("function" == typeof l.then
                ? l
                    .then(function (e) {
                      dl(e, i);
                    })
                    .catch(function (e) {
                      0;
                    })
                : dl(l, i));
          });
      }
    }
    function al() {
      var e = nl();
      e && (ol[e] = { x: window.pageXOffset, y: window.pageYOffset });
    }
    function sl(e) {
      al(), e.state && e.state.key && rl(e.state.key);
    }
    function ul(e) {
      return fl(e.x) || fl(e.y);
    }
    function cl(e) {
      return {
        x: fl(e.x) ? e.x : window.pageXOffset,
        y: fl(e.y) ? e.y : window.pageYOffset,
      };
    }
    function fl(e) {
      return "number" == typeof e;
    }
    var pl = /^#\d/;
    function dl(e, t) {
      var n,
        r = "object" == typeof e;
      if (r && "string" == typeof e.selector) {
        var o = pl.test(e.selector)
          ? document.getElementById(e.selector.slice(1))
          : document.querySelector(e.selector);
        if (o) {
          var i = e.offset && "object" == typeof e.offset ? e.offset : {};
          t = (function (e, t) {
            var n = document.documentElement.getBoundingClientRect(),
              r = e.getBoundingClientRect();
            return { x: r.left - n.left - t.x, y: r.top - n.top - t.y };
          })(o, (i = { x: fl((n = i).x) ? n.x : 0, y: fl(n.y) ? n.y : 0 }));
        } else ul(e) && (t = cl(e));
      } else r && ul(e) && (t = cl(e));
      t &&
        ("scrollBehavior" in document.documentElement.style
          ? window.scrollTo({ left: t.x, top: t.y, behavior: e.behavior })
          : window.scrollTo(t.x, t.y));
    }
    var hl,
      gl =
        Gi &&
        ((-1 === (hl = window.navigator.userAgent).indexOf("Android 2.") &&
          -1 === hl.indexOf("Android 4.0")) ||
          -1 === hl.indexOf("Mobile Safari") ||
          -1 !== hl.indexOf("Chrome") ||
          -1 !== hl.indexOf("Windows Phone")) &&
        window.history &&
        "function" == typeof window.history.pushState;
    function vl(e, t) {
      al();
      var n = window.history;
      try {
        if (t) {
          var r = ri({}, n.state);
          (r.key = nl()), n.replaceState(r, "", e);
        } else n.pushState({ key: rl(el()) }, "", e);
      } catch (n) {
        window.location[t ? "replace" : "assign"](e);
      }
    }
    function ml(e) {
      vl(e, !0);
    }
    var yl = { redirected: 2, aborted: 4, cancelled: 8, duplicated: 16 };
    function bl(e, t) {
      return _l(
        e,
        t,
        yl.redirected,
        'Redirected when going from "' +
          e.fullPath +
          '" to "' +
          (function (e) {
            if ("string" == typeof e) return e;
            if ("path" in e) return e.path;
            var t = {};
            return (
              xl.forEach(function (n) {
                n in e && (t[n] = e[n]);
              }),
              JSON.stringify(t, null, 2)
            );
          })(t) +
          '" via a navigation guard.'
      );
    }
    function wl(e, t) {
      return _l(
        e,
        t,
        yl.cancelled,
        'Navigation cancelled from "' +
          e.fullPath +
          '" to "' +
          t.fullPath +
          '" with a new navigation.'
      );
    }
    function _l(e, t, n, r) {
      var o = new Error(r);
      return (o._isRouter = !0), (o.from = e), (o.to = t), (o.type = n), o;
    }
    var xl = ["params", "query", "hash"];
    function kl(e) {
      return Object.prototype.toString.call(e).indexOf("Error") > -1;
    }
    function Cl(e, t) {
      return kl(e) && e._isRouter && (null == t || e.type === t);
    }
    function Sl(e, t, n) {
      var r = function (o) {
        o >= e.length
          ? n()
          : e[o]
          ? t(e[o], function () {
              r(o + 1);
            })
          : r(o + 1);
      };
      r(0);
    }
    function Ol(e) {
      return function (t, n, r) {
        var o = !1,
          i = 0,
          l = null;
        Tl(e, function (e, t, n, a) {
          if ("function" == typeof e && void 0 === e.cid) {
            (o = !0), i++;
            var s,
              u = Al(function (t) {
                var o;
                ((o = t).__esModule ||
                  ($l && "Module" === o[Symbol.toStringTag])) &&
                  (t = t.default),
                  (e.resolved = "function" == typeof t ? t : Wi.extend(t)),
                  (n.components[a] = t),
                  --i <= 0 && r();
              }),
              c = Al(function (e) {
                var t = "Failed to resolve async component " + a + ": " + e;
                l || ((l = kl(e) ? e : new Error(t)), r(l));
              });
            try {
              s = e(u, c);
            } catch (e) {
              c(e);
            }
            if (s)
              if ("function" == typeof s.then) s.then(u, c);
              else {
                var f = s.component;
                f && "function" == typeof f.then && f.then(u, c);
              }
          }
        }),
          o || r();
      };
    }
    function Tl(e, t) {
      return jl(
        e.map(function (e) {
          return Object.keys(e.components).map(function (n) {
            return t(e.components[n], e.instances[n], e, n);
          });
        })
      );
    }
    function jl(e) {
      return Array.prototype.concat.apply([], e);
    }
    var $l =
      "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
    function Al(e) {
      var t = !1;
      return function () {
        for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
        if (!t) return (t = !0), e.apply(this, n);
      };
    }
    var El = function (e, t) {
      (this.router = e),
        (this.base = (function (e) {
          if (!e)
            if (Gi) {
              var t = document.querySelector("base");
              e = (e = (t && t.getAttribute("href")) || "/").replace(
                /^https?:\/\/[^\/]+/,
                ""
              );
            } else e = "/";
          "/" !== e.charAt(0) && (e = "/" + e);
          return e.replace(/\/$/, "");
        })(t)),
        (this.current = gi),
        (this.pending = null),
        (this.ready = !1),
        (this.readyCbs = []),
        (this.readyErrorCbs = []),
        (this.errorCbs = []),
        (this.listeners = []);
    };
    function Pl(e, t, n, r) {
      var o = Tl(e, function (e, r, o, i) {
        var l = (function (e, t) {
          "function" != typeof e && (e = Wi.extend(e));
          return e.options[t];
        })(e, t);
        if (l)
          return Array.isArray(l)
            ? l.map(function (e) {
                return n(e, r, o, i);
              })
            : n(l, r, o, i);
      });
      return jl(r ? o.reverse() : o);
    }
    function Ll(e, t) {
      if (t)
        return function () {
          return e.apply(t, arguments);
        };
    }
    (El.prototype.listen = function (e) {
      this.cb = e;
    }),
      (El.prototype.onReady = function (e, t) {
        this.ready
          ? e()
          : (this.readyCbs.push(e), t && this.readyErrorCbs.push(t));
      }),
      (El.prototype.onError = function (e) {
        this.errorCbs.push(e);
      }),
      (El.prototype.transitionTo = function (e, t, n) {
        var r,
          o = this;
        try {
          r = this.router.match(e, this.current);
        } catch (e) {
          throw (
            (this.errorCbs.forEach(function (t) {
              t(e);
            }),
            e)
          );
        }
        var i = this.current;
        this.confirmTransition(
          r,
          function () {
            o.updateRoute(r),
              t && t(r),
              o.ensureURL(),
              o.router.afterHooks.forEach(function (e) {
                e && e(r, i);
              }),
              o.ready ||
                ((o.ready = !0),
                o.readyCbs.forEach(function (e) {
                  e(r);
                }));
          },
          function (e) {
            n && n(e),
              e &&
                !o.ready &&
                ((Cl(e, yl.redirected) && i === gi) ||
                  ((o.ready = !0),
                  o.readyErrorCbs.forEach(function (t) {
                    t(e);
                  })));
          }
        );
      }),
      (El.prototype.confirmTransition = function (e, t, n) {
        var r = this,
          o = this.current;
        this.pending = e;
        var i,
          l,
          a = function (e) {
            !Cl(e) &&
              kl(e) &&
              (r.errorCbs.length
                ? r.errorCbs.forEach(function (t) {
                    t(e);
                  })
                : console.error(e)),
              n && n(e);
          },
          s = e.matched.length - 1,
          u = o.matched.length - 1;
        if (yi(e, o) && s === u && e.matched[s] === o.matched[u])
          return (
            this.ensureURL(),
            e.hash && ll(this.router, o, e, !1),
            a(
              (((l = _l(
                (i = o),
                e,
                yl.duplicated,
                'Avoided redundant navigation to current location: "' +
                  i.fullPath +
                  '".'
              )).name = "NavigationDuplicated"),
              l)
            )
          );
        var c = (function (e, t) {
            var n,
              r = Math.max(e.length, t.length);
            for (n = 0; n < r && e[n] === t[n]; n++);
            return {
              updated: t.slice(0, n),
              activated: t.slice(n),
              deactivated: e.slice(n),
            };
          })(this.current.matched, e.matched),
          f = c.updated,
          p = c.deactivated,
          d = c.activated,
          h = [].concat(
            (function (e) {
              return Pl(e, "beforeRouteLeave", Ll, !0);
            })(p),
            this.router.beforeHooks,
            (function (e) {
              return Pl(e, "beforeRouteUpdate", Ll);
            })(f),
            d.map(function (e) {
              return e.beforeEnter;
            }),
            Ol(d)
          ),
          g = function (t, n) {
            if (r.pending !== e) return a(wl(o, e));
            try {
              t(e, o, function (t) {
                !1 === t
                  ? (r.ensureURL(!0),
                    a(
                      (function (e, t) {
                        return _l(
                          e,
                          t,
                          yl.aborted,
                          'Navigation aborted from "' +
                            e.fullPath +
                            '" to "' +
                            t.fullPath +
                            '" via a navigation guard.'
                        );
                      })(o, e)
                    ))
                  : kl(t)
                  ? (r.ensureURL(!0), a(t))
                  : "string" == typeof t ||
                    ("object" == typeof t &&
                      ("string" == typeof t.path || "string" == typeof t.name))
                  ? (a(bl(o, e)),
                    "object" == typeof t && t.replace
                      ? r.replace(t)
                      : r.push(t))
                  : n(t);
              });
            } catch (e) {
              a(e);
            }
          };
        Sl(h, g, function () {
          Sl(
            (function (e) {
              return Pl(e, "beforeRouteEnter", function (e, t, n, r) {
                return (function (e, t, n) {
                  return function (r, o, i) {
                    return e(r, o, function (e) {
                      "function" == typeof e &&
                        (t.enteredCbs[n] || (t.enteredCbs[n] = []),
                        t.enteredCbs[n].push(e)),
                        i(e);
                    });
                  };
                })(e, n, r);
              });
            })(d).concat(r.router.resolveHooks),
            g,
            function () {
              if (r.pending !== e) return a(wl(o, e));
              (r.pending = null),
                t(e),
                r.router.app &&
                  r.router.app.$nextTick(function () {
                    wi(e);
                  });
            }
          );
        });
      }),
      (El.prototype.updateRoute = function (e) {
        (this.current = e), this.cb && this.cb(e);
      }),
      (El.prototype.setupListeners = function () {}),
      (El.prototype.teardown = function () {
        this.listeners.forEach(function (e) {
          e();
        }),
          (this.listeners = []),
          (this.current = gi),
          (this.pending = null);
      });
    var Rl = (function (e) {
      function t(t, n) {
        e.call(this, t, n), (this._startLocation = zl(this.base));
      }
      return (
        e && (t.__proto__ = e),
        (t.prototype = Object.create(e && e.prototype)),
        (t.prototype.constructor = t),
        (t.prototype.setupListeners = function () {
          var e = this;
          if (!(this.listeners.length > 0)) {
            var t = this.router,
              n = t.options.scrollBehavior,
              r = gl && n;
            r && this.listeners.push(il());
            var o = function () {
              var n = e.current,
                o = zl(e.base);
              (e.current === gi && o === e._startLocation) ||
                e.transitionTo(o, function (e) {
                  r && ll(t, e, n, !0);
                });
            };
            window.addEventListener("popstate", o),
              this.listeners.push(function () {
                window.removeEventListener("popstate", o);
              });
          }
        }),
        (t.prototype.go = function (e) {
          window.history.go(e);
        }),
        (t.prototype.push = function (e, t, n) {
          var r = this,
            o = this.current;
          this.transitionTo(
            e,
            function (e) {
              vl(Ci(r.base + e.fullPath)), ll(r.router, e, o, !1), t && t(e);
            },
            n
          );
        }),
        (t.prototype.replace = function (e, t, n) {
          var r = this,
            o = this.current;
          this.transitionTo(
            e,
            function (e) {
              ml(Ci(r.base + e.fullPath)), ll(r.router, e, o, !1), t && t(e);
            },
            n
          );
        }),
        (t.prototype.ensureURL = function (e) {
          if (zl(this.base) !== this.current.fullPath) {
            var t = Ci(this.base + this.current.fullPath);
            e ? vl(t) : ml(t);
          }
        }),
        (t.prototype.getCurrentLocation = function () {
          return zl(this.base);
        }),
        t
      );
    })(El);
    function zl(e) {
      var t = window.location.pathname,
        n = t.toLowerCase(),
        r = e.toLowerCase();
      return (
        !e ||
          (n !== r && 0 !== n.indexOf(Ci(r + "/"))) ||
          (t = t.slice(e.length)),
        (t || "/") + window.location.search + window.location.hash
      );
    }
    var Dl = (function (e) {
      function t(t, n, r) {
        e.call(this, t, n),
          (r &&
            (function (e) {
              var t = zl(e);
              if (!/^\/#/.test(t))
                return window.location.replace(Ci(e + "/#" + t)), !0;
            })(this.base)) ||
            Il();
      }
      return (
        e && (t.__proto__ = e),
        (t.prototype = Object.create(e && e.prototype)),
        (t.prototype.constructor = t),
        (t.prototype.setupListeners = function () {
          var e = this;
          if (!(this.listeners.length > 0)) {
            var t = this.router.options.scrollBehavior,
              n = gl && t;
            n && this.listeners.push(il());
            var r = function () {
                var t = e.current;
                Il() &&
                  e.transitionTo(Ml(), function (r) {
                    n && ll(e.router, r, t, !0), gl || Fl(r.fullPath);
                  });
              },
              o = gl ? "popstate" : "hashchange";
            window.addEventListener(o, r),
              this.listeners.push(function () {
                window.removeEventListener(o, r);
              });
          }
        }),
        (t.prototype.push = function (e, t, n) {
          var r = this,
            o = this.current;
          this.transitionTo(
            e,
            function (e) {
              Ul(e.fullPath), ll(r.router, e, o, !1), t && t(e);
            },
            n
          );
        }),
        (t.prototype.replace = function (e, t, n) {
          var r = this,
            o = this.current;
          this.transitionTo(
            e,
            function (e) {
              Fl(e.fullPath), ll(r.router, e, o, !1), t && t(e);
            },
            n
          );
        }),
        (t.prototype.go = function (e) {
          window.history.go(e);
        }),
        (t.prototype.ensureURL = function (e) {
          var t = this.current.fullPath;
          Ml() !== t && (e ? Ul(t) : Fl(t));
        }),
        (t.prototype.getCurrentLocation = function () {
          return Ml();
        }),
        t
      );
    })(El);
    function Il() {
      var e = Ml();
      return "/" === e.charAt(0) || (Fl("/" + e), !1);
    }
    function Ml() {
      var e = window.location.href,
        t = e.indexOf("#");
      return t < 0 ? "" : (e = e.slice(t + 1));
    }
    function Bl(e) {
      var t = window.location.href,
        n = t.indexOf("#");
      return (n >= 0 ? t.slice(0, n) : t) + "#" + e;
    }
    function Ul(e) {
      gl ? vl(Bl(e)) : (window.location.hash = e);
    }
    function Fl(e) {
      gl ? ml(Bl(e)) : window.location.replace(Bl(e));
    }
    var Nl = (function (e) {
        function t(t, n) {
          e.call(this, t, n), (this.stack = []), (this.index = -1);
        }
        return (
          e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.push = function (e, t, n) {
            var r = this;
            this.transitionTo(
              e,
              function (e) {
                (r.stack = r.stack.slice(0, r.index + 1).concat(e)),
                  r.index++,
                  t && t(e);
              },
              n
            );
          }),
          (t.prototype.replace = function (e, t, n) {
            var r = this;
            this.transitionTo(
              e,
              function (e) {
                (r.stack = r.stack.slice(0, r.index).concat(e)), t && t(e);
              },
              n
            );
          }),
          (t.prototype.go = function (e) {
            var t = this,
              n = this.index + e;
            if (!(n < 0 || n >= this.stack.length)) {
              var r = this.stack[n];
              this.confirmTransition(
                r,
                function () {
                  var e = t.current;
                  (t.index = n),
                    t.updateRoute(r),
                    t.router.afterHooks.forEach(function (t) {
                      t && t(r, e);
                    });
                },
                function (e) {
                  Cl(e, yl.duplicated) && (t.index = n);
                }
              );
            }
          }),
          (t.prototype.getCurrentLocation = function () {
            var e = this.stack[this.stack.length - 1];
            return e ? e.fullPath : "/";
          }),
          (t.prototype.ensureURL = function () {}),
          t
        );
      })(El),
      Hl = function (e) {
        void 0 === e && (e = {}),
          (this.app = null),
          (this.apps = []),
          (this.options = e),
          (this.beforeHooks = []),
          (this.resolveHooks = []),
          (this.afterHooks = []),
          (this.matcher = Qi(e.routes || [], this));
        var t = e.mode || "hash";
        switch (
          ((this.fallback = "history" === t && !gl && !1 !== e.fallback),
          this.fallback && (t = "hash"),
          Gi || (t = "abstract"),
          (this.mode = t),
          t)
        ) {
          case "history":
            this.history = new Rl(this, e.base);
            break;
          case "hash":
            this.history = new Dl(this, e.base, this.fallback);
            break;
          case "abstract":
            this.history = new Nl(this, e.base);
            break;
          default:
            0;
        }
      },
      Wl = { currentRoute: { configurable: !0 } };
    (Hl.prototype.match = function (e, t, n) {
      return this.matcher.match(e, t, n);
    }),
      (Wl.currentRoute.get = function () {
        return this.history && this.history.current;
      }),
      (Hl.prototype.init = function (e) {
        var t = this;
        if (
          (this.apps.push(e),
          e.$once("hook:destroyed", function () {
            var n = t.apps.indexOf(e);
            n > -1 && t.apps.splice(n, 1),
              t.app === e && (t.app = t.apps[0] || null),
              t.app || t.history.teardown();
          }),
          !this.app)
        ) {
          this.app = e;
          var n = this.history;
          if (n instanceof Rl || n instanceof Dl) {
            var r = function (e) {
              n.setupListeners(),
                (function (e) {
                  var r = n.current,
                    o = t.options.scrollBehavior;
                  gl && o && "fullPath" in e && ll(t, e, r, !1);
                })(e);
            };
            n.transitionTo(n.getCurrentLocation(), r, r);
          }
          n.listen(function (e) {
            t.apps.forEach(function (t) {
              t._route = e;
            });
          });
        }
      }),
      (Hl.prototype.beforeEach = function (e) {
        return ql(this.beforeHooks, e);
      }),
      (Hl.prototype.beforeResolve = function (e) {
        return ql(this.resolveHooks, e);
      }),
      (Hl.prototype.afterEach = function (e) {
        return ql(this.afterHooks, e);
      }),
      (Hl.prototype.onReady = function (e, t) {
        this.history.onReady(e, t);
      }),
      (Hl.prototype.onError = function (e) {
        this.history.onError(e);
      }),
      (Hl.prototype.push = function (e, t, n) {
        var r = this;
        if (!t && !n && "undefined" != typeof Promise)
          return new Promise(function (t, n) {
            r.history.push(e, t, n);
          });
        this.history.push(e, t, n);
      }),
      (Hl.prototype.replace = function (e, t, n) {
        var r = this;
        if (!t && !n && "undefined" != typeof Promise)
          return new Promise(function (t, n) {
            r.history.replace(e, t, n);
          });
        this.history.replace(e, t, n);
      }),
      (Hl.prototype.go = function (e) {
        this.history.go(e);
      }),
      (Hl.prototype.back = function () {
        this.go(-1);
      }),
      (Hl.prototype.forward = function () {
        this.go(1);
      }),
      (Hl.prototype.getMatchedComponents = function (e) {
        var t = e ? (e.matched ? e : this.resolve(e).route) : this.currentRoute;
        return t
          ? [].concat.apply(
              [],
              t.matched.map(function (e) {
                return Object.keys(e.components).map(function (t) {
                  return e.components[t];
                });
              })
            )
          : [];
      }),
      (Hl.prototype.resolve = function (e, t, n) {
        var r = Hi(e, (t = t || this.history.current), n, this),
          o = this.match(r, t),
          i = o.redirectedFrom || o.fullPath;
        return {
          location: r,
          route: o,
          href: (function (e, t, n) {
            var r = "hash" === n ? "#" + t : t;
            return e ? Ci(e + "/" + r) : r;
          })(this.history.base, i, this.mode),
          normalizedTo: r,
          resolved: o,
        };
      }),
      (Hl.prototype.getRoutes = function () {
        return this.matcher.getRoutes();
      }),
      (Hl.prototype.addRoute = function (e, t) {
        this.matcher.addRoute(e, t),
          this.history.current !== gi &&
            this.history.transitionTo(this.history.getCurrentLocation());
      }),
      (Hl.prototype.addRoutes = function (e) {
        this.matcher.addRoutes(e),
          this.history.current !== gi &&
            this.history.transitionTo(this.history.getCurrentLocation());
      }),
      Object.defineProperties(Hl.prototype, Wl);
    var Vl = Hl;
    function ql(e, t) {
      return (
        e.push(t),
        function () {
          var n = e.indexOf(t);
          n > -1 && e.splice(n, 1);
        }
      );
    }
    (Hl.install = function e(t) {
      if (!e.installed || Wi !== t) {
        (e.installed = !0), (Wi = t);
        var n = function (e) {
            return void 0 !== e;
          },
          r = function (e, t) {
            var r = e.$options._parentVnode;
            n(r) &&
              n((r = r.data)) &&
              n((r = r.registerRouteInstance)) &&
              r(e, t);
          };
        t.mixin({
          beforeCreate: function () {
            n(this.$options.router)
              ? ((this._routerRoot = this),
                (this._router = this.$options.router),
                this._router.init(this),
                t.util.defineReactive(
                  this,
                  "_route",
                  this._router.history.current
                ))
              : (this._routerRoot =
                  (this.$parent && this.$parent._routerRoot) || this),
              r(this, this);
          },
          destroyed: function () {
            r(this);
          },
        }),
          Object.defineProperty(t.prototype, "$router", {
            get: function () {
              return this._routerRoot._router;
            },
          }),
          Object.defineProperty(t.prototype, "$route", {
            get: function () {
              return this._routerRoot._route;
            },
          }),
          t.component("RouterView", _i),
          t.component("RouterLink", qi);
        var o = t.config.optionMergeStrategies;
        o.beforeRouteEnter =
          o.beforeRouteLeave =
          o.beforeRouteUpdate =
            o.created;
      }
    }),
      (Hl.version = "3.6.5"),
      (Hl.isNavigationFailure = Cl),
      (Hl.NavigationFailureType = yl),
      (Hl.START_LOCATION = gi),
      Gi && window.Vue && window.Vue.use(Hl);
    n(98);
    n(125), n(91);
    var Zl = {
        "components/AlgoliaSearchBox": () =>
          Promise.all([n.e(0), n.e(13)]).then(n.bind(null, 302)),
        "components/DropdownLink": () =>
          Promise.all([n.e(0), n.e(14)]).then(n.bind(null, 259)),
        "components/DropdownTransition": () =>
          Promise.all([n.e(0), n.e(19)]).then(n.bind(null, 247)),
        "components/Home": () =>
          Promise.all([n.e(0), n.e(16)]).then(n.bind(null, 285)),
        "components/NavLink": () => n.e(21).then(n.bind(null, 246)),
        "components/NavLinks": () =>
          Promise.all([n.e(0), n.e(12)]).then(n.bind(null, 270)),
        "components/Navbar": () =>
          Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 299)),
        "components/Page": () =>
          Promise.all([n.e(0), n.e(11)]).then(n.bind(null, 286)),
        "components/PageEdit": () =>
          Promise.all([n.e(0), n.e(17)]).then(n.bind(null, 272)),
        "components/PageNav": () =>
          Promise.all([n.e(0), n.e(15)]).then(n.bind(null, 273)),
        "components/Sidebar": () =>
          Promise.all([n.e(0), n.e(10)]).then(n.bind(null, 287)),
        "components/SidebarButton": () =>
          Promise.all([n.e(0), n.e(20)]).then(n.bind(null, 288)),
        "components/SidebarGroup": () =>
          Promise.all([n.e(0), n.e(3)]).then(n.bind(null, 271)),
        "components/SidebarLink": () =>
          Promise.all([n.e(0), n.e(18)]).then(n.bind(null, 260)),
        "components/SidebarLinks": () =>
          Promise.all([n.e(0), n.e(3)]).then(n.bind(null, 258)),
        "global-components/Badge": () =>
          Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 307)),
        "global-components/CodeBlock": () =>
          Promise.all([n.e(0), n.e(5)]).then(n.bind(null, 303)),
        "global-components/CodeGroup": () =>
          Promise.all([n.e(0), n.e(6)]).then(n.bind(null, 304)),
        "layouts/404": () => n.e(7).then(n.bind(null, 305)),
        "layouts/Layout": () =>
          Promise.all([n.e(0), n.e(1), n.e(2)]).then(n.bind(null, 306)),
        NotFound: () => n.e(7).then(n.bind(null, 305)),
        Layout: () =>
          Promise.all([n.e(0), n.e(1), n.e(2)]).then(n.bind(null, 306)),
      },
      Gl = {
        "v-10b260c9": () => n.e(22).then(n.bind(null, 308)),
        "v-17e79dcd": () => n.e(23).then(n.bind(null, 309)),
        "v-81db711c": () => n.e(25).then(n.bind(null, 310)),
        "v-43753112": () => n.e(24).then(n.bind(null, 311)),
        "v-48e9f192": () => n.e(26).then(n.bind(null, 312)),
        "v-c1fb6ea2": () => n.e(27).then(n.bind(null, 313)),
        "v-3fb44712": () => n.e(28).then(n.bind(null, 314)),
        "v-4ec6581e": () => n.e(31).then(n.bind(null, 315)),
        "v-4ef009b4": () => n.e(30).then(n.bind(null, 316)),
        "v-fc8ea098": () => n.e(29).then(n.bind(null, 317)),
        "v-a859c9b8": () => n.e(32).then(n.bind(null, 318)),
        "v-701e3fdc": () => n.e(34).then(n.bind(null, 319)),
        "v-e144841c": () => n.e(35).then(n.bind(null, 320)),
        "v-3cb1e35c": () => n.e(33).then(n.bind(null, 321)),
        "v-a2c9c78e": () => n.e(36).then(n.bind(null, 322)),
        "v-0b57ce39": () => n.e(37).then(n.bind(null, 323)),
        "v-18d03aaa": () => n.e(38).then(n.bind(null, 324)),
        "v-7d493ba0": () => n.e(39).then(n.bind(null, 325)),
        "v-86a1904c": () => n.e(40).then(n.bind(null, 326)),
        "v-7adbae99": () => n.e(41).then(n.bind(null, 327)),
        "v-6076d692": () => n.e(42).then(n.bind(null, 328)),
        "v-f63f189c": () => n.e(43).then(n.bind(null, 329)),
        "v-cb20cf9c": () => n.e(44).then(n.bind(null, 330)),
        "v-52c084dc": () => n.e(45).then(n.bind(null, 331)),
        "v-588f1a3e": () => n.e(46).then(n.bind(null, 332)),
        "v-10587132": () => n.e(47).then(n.bind(null, 333)),
        "v-1e5dcff0": () => n.e(48).then(n.bind(null, 334)),
      };
    function Yl(e) {
      const t = Object.create(null);
      return function (n) {
        return t[n] || (t[n] = e(n));
      };
    }
    const Kl = /-(\w)/g,
      Ql = Yl((e) => e.replace(Kl, (e, t) => (t ? t.toUpperCase() : ""))),
      Xl = /\B([A-Z])/g,
      Jl = Yl((e) => e.replace(Xl, "-$1").toLowerCase()),
      ea = Yl((e) => e.charAt(0).toUpperCase() + e.slice(1));
    function ta(e, t) {
      if (!t) return;
      if (e(t)) return e(t);
      return t.includes("-") ? e(ea(Ql(t))) : e(ea(t)) || e(Jl(t));
    }
    const na = Object.assign({}, Zl, Gl),
      ra = (e) => na[e],
      oa = (e) => Gl[e],
      ia = (e) => Zl[e],
      la = (e) => Zn.component(e);
    function aa(e) {
      return ta(oa, e);
    }
    function sa(e) {
      return ta(ia, e);
    }
    function ua(e) {
      return ta(ra, e);
    }
    function ca(e) {
      return ta(la, e);
    }
    function fa(...e) {
      return Promise.all(
        e
          .filter((e) => e)
          .map(async (e) => {
            if (!ca(e) && ua(e)) {
              const t = await ua(e)();
              Zn.component(e, t.default);
            }
          })
      );
    }
    function pa(e, t) {
      "undefined" != typeof window &&
        window.__VUEPRESS__ &&
        (window.__VUEPRESS__[e] = t);
    }
    var da = n(87),
      ha = n.n(da),
      ga = n(88),
      va = n.n(ga),
      ma = {
        created() {
          if (
            ((this.siteMeta = this.$site.headTags
              .filter(([e]) => "meta" === e)
              .map(([e, t]) => t)),
            this.$ssrContext)
          ) {
            const t = this.getMergedMetaTags();
            (this.$ssrContext.title = this.$title),
              (this.$ssrContext.lang = this.$lang),
              (this.$ssrContext.pageMeta = (e = t)
                ? e
                    .map((e) => {
                      let t = "<meta";
                      return (
                        Object.keys(e).forEach((n) => {
                          t += ` ${n}="${va()(e[n])}"`;
                        }),
                        t + ">"
                      );
                    })
                    .join("\n    ")
                : ""),
              (this.$ssrContext.canonicalLink = ba(this.$canonicalUrl));
          }
          var e;
        },
        mounted() {
          (this.currentMetaTags = [...document.querySelectorAll("meta")]),
            this.updateMeta(),
            this.updateCanonicalLink();
        },
        methods: {
          updateMeta() {
            (document.title = this.$title),
              (document.documentElement.lang = this.$lang);
            const e = this.getMergedMetaTags();
            this.currentMetaTags = wa(e, this.currentMetaTags);
          },
          getMergedMetaTags() {
            const e = this.$page.frontmatter.meta || [];
            return ha()(
              [{ name: "description", content: this.$description }],
              e,
              this.siteMeta,
              _a
            );
          },
          updateCanonicalLink() {
            ya(),
              this.$canonicalUrl &&
                document.head.insertAdjacentHTML(
                  "beforeend",
                  ba(this.$canonicalUrl)
                );
          },
        },
        watch: {
          $page() {
            this.updateMeta(), this.updateCanonicalLink();
          },
        },
        beforeDestroy() {
          wa(null, this.currentMetaTags), ya();
        },
      };
    function ya() {
      const e = document.querySelector("link[rel='canonical']");
      e && e.remove();
    }
    function ba(e = "") {
      return e ? `<link href="${e}" rel="canonical" />` : "";
    }
    function wa(e, t) {
      if (
        (t &&
          [...t]
            .filter((e) => e.parentNode === document.head)
            .forEach((e) => document.head.removeChild(e)),
        e)
      )
        return e.map((e) => {
          const t = document.createElement("meta");
          return (
            Object.keys(e).forEach((n) => {
              t.setAttribute(n, e[n]);
            }),
            document.head.appendChild(t),
            t
          );
        });
    }
    function _a(e) {
      for (const t of ["name", "property", "itemprop"])
        if (e.hasOwnProperty(t)) return e[t] + t;
      return JSON.stringify(e);
    }
    var xa = n(89),
      ka = {
        mounted() {
          window.addEventListener("scroll", this.onScroll);
        },
        methods: {
          onScroll: n.n(xa)()(function () {
            this.setActiveHash();
          }, 300),
          setActiveHash() {
            const e = [].slice.call(document.querySelectorAll(".sidebar-link")),
              t = [].slice
                .call(document.querySelectorAll(".header-anchor"))
                .filter((t) => e.some((e) => e.hash === t.hash)),
              n = Math.max(
                window.pageYOffset,
                document.documentElement.scrollTop,
                document.body.scrollTop
              ),
              r = Math.max(
                document.documentElement.scrollHeight,
                document.body.scrollHeight
              ),
              o = window.innerHeight + n;
            for (let e = 0; e < t.length; e++) {
              const i = t[e],
                l = t[e + 1],
                a =
                  (0 === e && 0 === n) ||
                  (n >= i.parentElement.offsetTop + 10 &&
                    (!l || n < l.parentElement.offsetTop - 10)),
                s = decodeURIComponent(this.$route.hash);
              if (a && s !== decodeURIComponent(i.hash)) {
                const n = i;
                if (o === r)
                  for (let n = e + 1; n < t.length; n++)
                    if (s === decodeURIComponent(t[n].hash)) return;
                return (
                  this.$vuepress.$set("disableScrollBehavior", !0),
                  void this.$router.replace(decodeURIComponent(n.hash), () => {
                    this.$nextTick(() => {
                      this.$vuepress.$set("disableScrollBehavior", !1);
                    });
                  })
                );
              }
            }
          },
        },
        beforeDestroy() {
          window.removeEventListener("scroll", this.onScroll);
        },
      },
      Ca = n(22),
      Sa = n.n(Ca),
      Oa = {
        mounted() {
          Sa.a.configure({ showSpinner: !1 }),
            this.$router.beforeEach((e, t, n) => {
              e.path === t.path || Zn.component(e.name) || Sa.a.start(), n();
            }),
            this.$router.afterEach(() => {
              Sa.a.done(), (this.isSidebarOpen = !1);
            });
        },
      },
      Ta = n(90),
      ja = n.n(Ta),
      $a = {
        mounted() {
          ja.a.polyfill();
        },
      },
      Aa = {
        props: {
          parent: Object,
          code: String,
          options: {
            align: String,
            color: String,
            backgroundTransition: Boolean,
            backgroundColor: String,
            successText: String,
            staticIcon: Boolean,
          },
        },
        data: () => ({
          success: !1,
          originalBackground: null,
          originalTransition: null,
        }),
        computed: {
          alignStyle() {
            let e = {};
            return (e[this.options.align] = "7.5px"), e;
          },
          iconClass() {
            return this.options.staticIcon ? "" : "hover";
          },
        },
        mounted() {
          (this.originalTransition = this.parent.style.transition),
            (this.originalBackground = this.parent.style.background);
        },
        beforeDestroy() {
          (this.parent.style.transition = this.originalTransition),
            (this.parent.style.background = this.originalBackground);
        },
        methods: {
          hexToRgb(e) {
            let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t
              ? {
                  r: parseInt(t[1], 16),
                  g: parseInt(t[2], 16),
                  b: parseInt(t[3], 16),
                }
              : null;
          },
          copyToClipboard(e) {
            if (navigator.clipboard)
              navigator.clipboard.writeText(this.code).then(
                () => {
                  this.setSuccessTransitions();
                },
                () => {}
              );
            else {
              let e = document.createElement("textarea");
              document.body.appendChild(e),
                (e.value = this.code),
                e.select(),
                document.execCommand("Copy"),
                e.remove(),
                this.setSuccessTransitions();
            }
          },
          setSuccessTransitions() {
            if (
              (clearTimeout(this.successTimeout),
              this.options.backgroundTransition)
            ) {
              this.parent.style.transition = "background 350ms";
              let e = this.hexToRgb(this.options.backgroundColor);
              this.parent.style.background = `rgba(${e.r}, ${e.g}, ${e.b}, 0.1)`;
            }
            (this.success = !0),
              (this.successTimeout = setTimeout(() => {
                this.options.backgroundTransition &&
                  ((this.parent.style.background = this.originalBackground),
                  (this.parent.style.transition = this.originalTransition)),
                  (this.success = !1);
              }, 500));
          },
        },
      },
      Ea = (n(236), n(10)),
      Pa = Object(Ea.a)(
        Aa,
        function () {
          var e = this,
            t = e._self._c;
          return t("div", { staticClass: "code-copy" }, [
            t(
              "svg",
              {
                class: e.iconClass,
                style: e.alignStyle,
                attrs: {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                },
                on: { click: e.copyToClipboard },
              },
              [
                t("path", { attrs: { fill: "none", d: "M0 0h24v24H0z" } }),
                e._v(" "),
                t("path", {
                  attrs: {
                    fill: e.options.color,
                    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z",
                  },
                }),
              ]
            ),
            e._v(" "),
            t(
              "span",
              { class: e.success ? "success" : "", style: e.alignStyle },
              [e._v("\n        " + e._s(e.options.successText) + "\n    ")]
            ),
          ]);
        },
        [],
        !1,
        null,
        "49140617",
        null
      ).exports,
      La =
        (n(237),
        [
          ma,
          ka,
          Oa,
          $a,
          {
            updated() {
              this.update();
            },
            methods: {
              update() {
                setTimeout(() => {
                  document
                    .querySelectorAll('div[class*="language-"] pre')
                    .forEach((e) => {
                      if (e.classList.contains("code-copy-added")) return;
                      let t = new (Zn.extend(Pa))();
                      (t.options = {
                        align: "bottom",
                        color: "#27b1ff",
                        backgroundTransition: !0,
                        backgroundColor: "#0075b8",
                        successText: "Copied!",
                        staticIcon: !1,
                      }),
                        (t.code = e.innerText),
                        (t.parent = e),
                        t.$mount(),
                        e.classList.add("code-copy-added"),
                        e.appendChild(t.$el);
                    });
                }, 100);
              },
            },
          },
        ]),
      Ra = {
        name: "GlobalLayout",
        computed: {
          layout() {
            const e = this.getLayout();
            return pa("layout", e), Zn.component(e);
          },
        },
        methods: {
          getLayout() {
            if (this.$page.path) {
              const e = this.$page.frontmatter.layout;
              return e &&
                (this.$vuepress.getLayoutAsyncComponent(e) ||
                  this.$vuepress.getVueComponent(e))
                ? e
                : "Layout";
            }
            return "NotFound";
          },
        },
      },
      za = Object(Ea.a)(
        Ra,
        function () {
          return (0, this._self._c)(this.layout, { tag: "component" });
        },
        [],
        !1,
        null,
        null,
        null
      ).exports;
    !(function (e, t, n) {
      switch (t) {
        case "components":
          e[t] || (e[t] = {}), Object.assign(e[t], n);
          break;
        case "mixins":
          e[t] || (e[t] = []), e[t].push(...n);
          break;
        default:
          throw new Error("Unknown option name.");
      }
    })(za, "mixins", La);
    const Da = [
        {
          name: "v-10b260c9",
          path: "/",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-10b260c9").then(n);
          },
        },
        { path: "/index.html", redirect: "/" },
        {
          name: "v-17e79dcd",
          path: "/about/",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-17e79dcd").then(n);
          },
        },
        { path: "/about/index.html", redirect: "/about/" },
        {
          name: "v-81db711c",
          path: "/about/sponsor.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-81db711c").then(n);
          },
        },
        {
          name: "v-43753112",
          path: "/about/company.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-43753112").then(n);
          },
        },
        {
          name: "v-48e9f192",
          path: "/guide/FAQ.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-48e9f192").then(n);
          },
        },
        {
          name: "v-c1fb6ea2",
          path: "/guide/",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-c1fb6ea2").then(n);
          },
        },
        { path: "/guide/index.html", redirect: "/guide/" },
        {
          name: "v-3fb44712",
          path: "/guide/api.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-3fb44712").then(n);
          },
        },
        {
          name: "v-4ec6581e",
          path: "/guide/contribute.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-4ec6581e").then(n);
          },
        },
        {
          name: "v-4ef009b4",
          path: "/guide/config.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-4ef009b4").then(n);
          },
        },
        {
          name: "v-fc8ea098",
          path: "/guide/cell.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-fc8ea098").then(n);
          },
        },
        {
          name: "v-a859c9b8",
          path: "/guide/data.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-a859c9b8").then(n);
          },
        },
        {
          name: "v-701e3fdc",
          path: "/guide/resource.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-701e3fdc").then(n);
          },
        },
        {
          name: "v-e144841c",
          path: "/guide/sheet.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-e144841c").then(n);
          },
        },
        {
          name: "v-3cb1e35c",
          path: "/guide/operate.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-3cb1e35c").then(n);
          },
        },
        {
          name: "v-a2c9c78e",
          path: "/",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-a2c9c78e").then(n);
          },
        },
        { path: "/index.html", redirect: "/" },
        {
          name: "v-0b57ce39",
          path: "/about/",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-0b57ce39").then(n);
          },
        },
        { path: "/about/index.html", redirect: "/about/" },
        {
          name: "v-18d03aaa",
          path: "/about/company.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-18d03aaa").then(n);
          },
        },
        {
          name: "v-7d493ba0",
          path: "/about/sponsor.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-7d493ba0").then(n);
          },
        },
        {
          name: "v-86a1904c",
          path: "/guide/FAQ.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-86a1904c").then(n);
          },
        },
        {
          name: "v-7adbae99",
          path: "/guide/",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-7adbae99").then(n);
          },
        },
        { path: "/guide/index.html", redirect: "/guide/" },
        {
          name: "v-6076d692",
          path: "/guide/api.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-6076d692").then(n);
          },
        },
        {
          name: "v-f63f189c",
          path: "/guide/cell.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-f63f189c").then(n);
          },
        },
        {
          name: "v-cb20cf9c",
          path: "/guide/config.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-cb20cf9c").then(n);
          },
        },
        {
          name: "v-52c084dc",
          path: "/guide/contribute.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-52c084dc").then(n);
          },
        },
        {
          name: "v-588f1a3e",
          path: "/guide/operate.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-588f1a3e").then(n);
          },
        },
        {
          name: "v-10587132",
          path: "/guide/resource.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-10587132").then(n);
          },
        },
        {
          name: "v-1e5dcff0",
          path: "/guide/sheet.html",
          component: za,
          beforeEnter: (e, t, n) => {
            fa("Layout", "v-1e5dcff0").then(n);
          },
        },
        { path: "*", component: za },
      ],
      Ia = {
        title: "",
        description: "",
        base: "/DataDocs/",
        headTags: [],
        pages: [
          {
            title: "Home",
            frontmatter: {
              home: !0,
              heroText: "DataDocs",
              tagline: "Configuration Document · API · Tutorial",
              actionText: "Get Started →",
              actionLink: "/guide/",
              features: [
                {
                  title: "Powerful Features",
                  details:
                    "Contains a large number of commonly used spreadsheet functions to replace your excel",
                },
                {
                  title: "Simple Configuration",
                  details: "Get started with minimal configuration",
                },
                {
                  title: "Open Source",
                  details:
                    "Community driven, work together to improve your ideas",
                },
              ],
              footer: "MIT Licensed | Copyright © 2020-present Mengshukeji",
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "Home" },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content: "https://servequery.github.io/datadocs/",
                },
                { name: "twitter:title", content: "Home" },
                {
                  name: "twitter:url",
                  content: "https://servequery.github.io/datadocs/",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/",
            relativePath: "README.md",
            key: "v-10b260c9",
            path: "/",
            lastUpdated: "5/17/2023, 4:50:54 PM",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "Meet the Team",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "Meet the Team" },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content: "https://servequery.github.io/datadocs/about/",
                },
                { name: "twitter:title", content: "Meet the Team" },
                {
                  name: "twitter:url",
                  content: "https://servequery.github.io/datadocs/about/",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/about/",
            relativePath: "about/README.md",
            key: "v-17e79dcd",
            path: "/about/",
            headers: [
              {
                level: 3,
                title: "Active Core Team Members",
                slug: "active-core-team-members",
              },
              {
                level: 3,
                title: "Community Partners",
                slug: "community-partners",
              },
            ],
            lastUpdated: "5/17/2023, 4:50:54 PM",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "Sponsor",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-02-20T03:05:43.000Z",
                },
                { property: "og:title", content: "Sponsor" },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/about/sponsor.html",
                },
                { name: "twitter:title", content: "Sponsor" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/about/sponsor.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/about/sponsor.html",
            relativePath: "about/sponsor.md",
            key: "v-81db711c",
            path: "/about/sponsor.html",
            headers: [
              { level: 2, title: "Why sponsor", slug: "why-sponsor" },
              { level: 2, title: "How to sponsor", slug: "how-to-sponsor" },
              {
                level: 3,
                title:
                  "What's the difference between Patreon and OpenCollective?",
                slug: "what-s-the-difference-between-patreon-and-opencollective",
              },
              { level: 2, title: "Sponsors List", slug: "sponsors-list" },
            ],
            lastUpdated: "2/20/2024, 11:05:43 AM",
            lastUpdatedTimestamp: 1708398343e3,
          },
          {
            title: "Community case",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "Community case" },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/about/company.html",
                },
                { name: "twitter:title", content: "Community case" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/about/company.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/about/company.html",
            relativePath: "about/company.md",
            key: "v-43753112",
            path: "/about/company.html",
            headers: [
              { level: 2, title: "Company Case", slug: "company-case" },
            ],
            lastUpdated: "5/17/2023, 4:50:54 PM",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "FAQ",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "FAQ" },
                { property: "og:type", content: "article" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/FAQ.html",
                },
                { name: "twitter:title", content: "FAQ" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/FAQ.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/FAQ.html",
            relativePath: "guide/FAQ.md",
            key: "v-48e9f192",
            path: "/guide/FAQ.html",
            headers: [
              {
                level: 2,
                title:
                  "What is the difference between data and celldata in luckysheetfile?",
                slug: "what-is-the-difference-between-data-and-celldata-in-luckysheetfile",
              },
              {
                level: 2,
                title: "What are the cell types?",
                slug: "what-are-the-cell-types",
              },
              {
                level: 2,
                title: "How to use DataDocs in Vue/React project?",
                slug: "how-to-use-datadocs-in-vue-react-project",
              },
              {
                level: 2,
                title:
                  "Why will the formula in the table not be triggered after initialization?",
                slug: "why-will-the-formula-in-the-table-not-be-triggered-after-initialization",
              },
              {
                level: 2,
                title: "Is the remote loading data loadUrl or updateUrl?",
                slug: "is-the-remote-loading-data-loadurl-or-updateurl",
              },
              {
                level: 2,
                title:
                  "What is the difference between index and order for each sheet page?",
                slug: "what-is-the-difference-between-index-and-order-for-each-sheet-page",
              },
              {
                level: 2,
                title:
                  "Why can’t I run the project directly under the dist folder?",
                slug: "why-can-t-i-run-the-project-directly-under-the-dist-folder",
              },
              {
                level: 2,
                title: "How to import and export excel?",
                slug: "how-to-import-and-export-excel",
              },
              {
                level: 2,
                title: "How to merge cells during initialization?",
                slug: "how-to-merge-cells-during-initialization",
              },
              {
                level: 2,
                title:
                  "How does 'DataDocs' save the data from the table to the database? Is there a soulution for storage and collaboration?",
                slug: "how-does-datadocs-save-the-data-from-the-table-to-the-database-is-there-a-soulution-for-storage-and-collaboration",
              },
              {
                level: 2,
                title:
                  "How to monitor cell hover or click events? how to monitor cellRenderAfter in real-time?",
                slug: "how-to-monitor-cell-hover-or-click-events-how-to-monitor-cellrenderafter-in-real-time",
              },
              {
                level: 2,
                title: "How to customize the top toolbar?",
                slug: "how-to-customize-the-top-toolbar",
              },
              {
                level: 2,
                title: "Does the project use jQuery?",
                slug: "does-the-project-use-jquery",
              },
              {
                level: 2,
                title: "How to add a field to a cell object?",
                slug: "how-to-add-a-field-to-a-cell-object",
              },
              {
                level: 2,
                title: "The toolbar icon is on the loading stage all the time.",
                slug: "the-toolbar-icon-is-on-the-loading-stage-all-the-time",
              },
              {
                level: 2,
                title: "Can't run Luckyexcel after package.",
                slug: "can-t-run-luckyexcel-after-package",
              },
              {
                level: 2,
                title:
                  "How to disable editing of cells？How to open sheet protection?",
                slug: "how-to-disable-editing-of-cells-how-to-open-sheet-protection",
              },
              {
                level: 2,
                title: "How to configure data validation?",
                slug: "how-to-configure-data-validation",
              },
              {
                level: 2,
                title: "Is there a case for using DataDocs with CDN?",
                slug: "is-there-a-case-for-using-datadocs-with-cdn",
              },
              {
                level: 2,
                title:
                  "how to limit the adaptive height of a picture in a cell？",
                slug: "how-to-limit-the-adaptive-height-of-a-picture-in-a-cell",
              },
              {
                level: 2,
                title:
                  "How to get the default row height and column width of the worksheet?",
                slug: "how-to-get-the-default-row-height-and-column-width-of-the-worksheet",
              },
              {
                level: 2,
                title:
                  "How to hide the add row button and the back to top button below the worksheet?",
                slug: "how-to-hide-the-add-row-button-and-the-back-to-top-button-below-the-worksheet",
              },
              {
                level: 2,
                title:
                  "How to hide the row and column headings of the worksheet?",
                slug: "how-to-hide-the-row-and-column-headings-of-the-worksheet",
              },
              {
                level: 2,
                title: "What method can be called to set config.merge?",
                slug: "what-method-can-be-called-to-set-config-merge",
              },
              {
                level: 2,
                title: "Why is the official new feature ineffective?",
                slug: "why-is-the-official-new-feature-ineffective",
              },
              {
                level: 2,
                title:
                  "npm run dev reported an error: ʻError: Cannot find module'rollup'`?",
                slug: "npm-run-dev-reported-an-error-ʻerror-cannot-find-module-rollup",
              },
              {
                level: 2,
                title:
                  "How to carry out secondary development of DataDocs in Vue project?",
                slug: "how-to-carry-out-secondary-development-of-datadocs-in-vue-project",
              },
              {
                level: 2,
                title: "Error reporting Store.createChart when creating chart?",
                slug: "error-reporting-store-createchart-when-creating-chart",
              },
              {
                level: 2,
                title: "Can cells add custom attributes?",
                slug: "can-cells-add-custom-attributes",
              },
              {
                level: 2,
                title:
                  "How to enter text starting with '='? For example, =currentDate('YYYY-MM-DD'), it will remove the function by default, how to prohibit the function?",
                slug: "how-to-enter-text-starting-with-for-example-currentdate-yyyy-mm-dd-it-will-remove-the-function-by-default-how-to-prohibit-the-function",
              },
              {
                level: 2,
                title: "Why does the create callback have no effect?",
                slug: "why-does-the-create-callback-have-no-effect",
              },
              {
                level: 2,
                title:
                  "When create, the first cell is selected by default, how to remove it?",
                slug: "when-create-the-first-cell-is-selected-by-default-how-to-remove-it",
              },
              {
                level: 2,
                title: "Where is the right-click event bound?",
                slug: "where-is-the-right-click-event-bound",
              },
              {
                level: 2,
                title: "How to add a custom toolbar?",
                slug: "how-to-add-a-custom-toolbar",
              },
              {
                level: 2,
                title: "How to add custom formulas?",
                slug: "how-to-add-custom-formulas",
              },
              {
                level: 2,
                title:
                  "Is there a similar loadData interface, I want to load 10 records first, and then dynamically load the data, these data are appended to the table?",
                slug: "is-there-a-similar-loaddata-interface-i-want-to-load-10-records-first-and-then-dynamically-load-the-data-these-data-are-appended-to-the-table",
              },
            ],
            lastUpdated: "5/17/2023, 4:50:54 PM",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "DataDocs",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-03-28T09:45:19.000Z",
                },
                {
                  property: "og:title",
                  content: "DataDocs",
                },
                { property: "og:type", content: "article" },
                {
                  property: "og:url",
                  content: "https://servequery.github.io/datadocs/guide/",
                },
                {
                  name: "twitter:title",
                  content: "DataDocs",
                },
                {
                  name: "twitter:url",
                  content: "https://servequery.github.io/datadocs/guide/",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/",
            relativePath: "guide/README.md",
            key: "v-c1fb6ea2",
            path: "/guide/",
            headers: [
              { level: 2, title: "Introduction", slug: "introduction" },
              { level: 2, title: "Demo", slug: "demo" },
              { level: 2, title: "Online Case", slug: "online-case" },
              { level: 2, title: "Features", slug: "features" },
              { level: 3, title: "🛠️Formatting", slug: "🛠️formatting" },
              { level: 3, title: "🧬Cells", slug: "🧬cells" },
              { level: 3, title: "🖱️Row & columns", slug: "🖱️row-columns" },
              { level: 3, title: "🔨Operation", slug: "🔨operation" },
              {
                level: 3,
                title: "⚙️Formulas & functions",
                slug: "⚙️formulas-functions",
              },
              { level: 3, title: "📐Tables", slug: "📐tables" },
              { level: 3, title: "📈Pivot table", slug: "📈pivot-table" },
              { level: 3, title: "📊Chart", slug: "📊chart" },
              { level: 3, title: "✍️Share", slug: "✍️share" },
              { level: 3, title: "📚Insert object", slug: "📚insert-object" },
              { level: 3, title: "⚡DataDocs", slug: "⚡datadocs" },
              { level: 3, title: "⏱️Coming soon", slug: "⏱️coming-soon" },
              {
                level: 2,
                title: "Development model",
                slug: "development-model",
              },
              { level: 3, title: "Requirements", slug: "requirements" },
              { level: 3, title: "Installation", slug: "installation" },
              { level: 3, title: "Development", slug: "development" },
              { level: 3, title: "Package", slug: "package" },
              { level: 2, title: "Steps for usage", slug: "steps-for-usage" },
              { level: 3, title: "First step", slug: "first-step" },
              { level: 3, title: "Second step", slug: "second-step" },
              { level: 3, title: "Third step", slug: "third-step" },
              { level: 2, title: "Structure", slug: "structure" },
              { level: 3, title: "Format", slug: "format" },
              { level: 3, title: "View method", slug: "view-method" },
              {
                level: 2,
                title: "Keyboard shortcuts",
                slug: "keyboard-shortcuts",
              },
              { level: 2, title: "Guide", slug: "guide" },
            ],
            lastUpdated: "3/28/2024, 5:45:19 PM",
            lastUpdatedTimestamp: 1711619119e3,
          },
          {
            title: "API",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "API" },
                { property: "og:type", content: "article" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/api.html",
                },
                { name: "twitter:title", content: "API" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/api.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/api.html",
            relativePath: "guide/api.md",
            key: "v-3fb44712",
            path: "/guide/api.html",
            headers: [
              { level: 2, title: "Cell operation", slug: "cell-operation" },
              {
                level: 3,
                title: "getCellValue(row, column [,setting])",
                slug: "getcellvalue-row-column-setting",
              },
              {
                level: 3,
                title: "setCellValue(row, column, value [,setting])",
                slug: "setcellvalue-row-column-value-setting",
              },
              {
                level: 3,
                title: "clearCell(row, column [,setting])",
                slug: "clearcell-row-column-setting",
              },
              {
                level: 3,
                title: "deleteCell(move, row, column [,setting])",
                slug: "deletecell-move-row-column-setting",
              },
              {
                level: 3,
                title: "setCellFormat(row, column, attr, value [,setting])",
                slug: "setcellformat-row-column-attr-value-setting",
              },
              {
                level: 3,
                title: "find(content [,setting])",
                slug: "find-content-setting",
              },
              {
                level: 3,
                title: "replace(content, replaceContent [,setting])",
                slug: "replace-content-replacecontent-setting",
              },
              {
                level: 3,
                title: "exitEditMode([,setting])",
                slug: "exiteditmode-setting",
              },
              {
                level: 2,
                title: "Row and column operations",
                slug: "row-and-column-operations",
              },
              {
                level: 3,
                title: "setHorizontalFrozen(isRange [,setting])",
                slug: "sethorizontalfrozen-isrange-setting",
              },
              {
                level: 3,
                title: "setVerticalFrozen(isRange [,setting])",
                slug: "setverticalfrozen-isrange-setting",
              },
              {
                level: 3,
                title: "setBothFrozen(isRange [,setting])",
                slug: "setbothfrozen-isrange-setting",
              },
              {
                level: 3,
                title: "cancelFrozen([setting])",
                slug: "cancelfrozen-setting",
              },
              {
                level: 3,
                title: "insertRow(row [,setting])",
                slug: "insertrow-row-setting",
              },
              {
                level: 3,
                title: "insertColumn( column [,setting])",
                slug: "insertcolumn-column-setting",
              },
              {
                level: 3,
                title: "deleteRow(rowStart, rowEnd [,setting])",
                slug: "deleterow-rowstart-rowend-setting",
              },
              {
                level: 3,
                title: "deleteColumn(columnStart, columnEnd [,setting])",
                slug: "deletecolumn-columnstart-columnend-setting",
              },
              {
                level: 3,
                title: "hideRow(rowStart, rowEnd [,setting])",
                slug: "hiderow-rowstart-rowend-setting",
              },
              {
                level: 3,
                title: "hideColumn(columnStart, columnEnd [,setting])(TODO)",
                slug: "hidecolumn-columnstart-columnend-setting-todo",
              },
              {
                level: 3,
                title: "showRow(rowStart, rowEnd [,setting])",
                slug: "showrow-rowstart-rowend-setting",
              },
              {
                level: 3,
                title: "showColumn(columnStart, columnEnd [,setting])(TODO)",
                slug: "showcolumn-columnstart-columnend-setting-todo",
              },
              {
                level: 3,
                title: "setRowHeight(rowInfo [,setting])",
                slug: "setrowheight-rowinfo-setting",
              },
              {
                level: 3,
                title: "setColumnWidth(columnInfo [,setting])",
                slug: "setcolumnwidth-columninfo-setting",
              },
              {
                level: 3,
                title: "getRowHeight(rowInfo [,setting])",
                slug: "getrowheight-rowinfo-setting",
              },
              {
                level: 3,
                title: "getColumnWidth(columnInfo [,setting])",
                slug: "getcolumnwidth-columninfo-setting",
              },
              {
                level: 3,
                title: "getDefaultRowHeight([,setting])",
                slug: "getdefaultrowheight-setting",
              },
              {
                level: 3,
                title: "getDefaultColWidth([,setting])",
                slug: "getdefaultcolwidth-setting",
              },
              {
                level: 2,
                title: "Selection operation",
                slug: "selection-operation",
              },
              { level: 3, title: "getRange()", slug: "getrange" },
              {
                level: 3,
                title: "getRangeWithFlatten()",
                slug: "getrangewithflatten",
              },
              {
                level: 3,
                title: "getRangeValuesWithFlatte()",
                slug: "getrangevalueswithflatte",
              },
              { level: 3, title: "getRangeAxis()", slug: "getrangeaxis" },
              {
                level: 3,
                title: "getRangeValue([setting])",
                slug: "getrangevalue-setting",
              },
              {
                level: 3,
                title: "getRangeHtml([setting])",
                slug: "getrangehtml-setting",
              },
              {
                level: 3,
                title: "getRangeJson(title [,setting])",
                slug: "getrangejson-title-setting",
              },
              {
                level: 3,
                title: "getRangeArray(dimensional [,setting])",
                slug: "getrangearray-dimensional-setting",
              },
              {
                level: 3,
                title: "getRangeDiagonal(type [,setting])",
                slug: "getrangediagonal-type-setting",
              },
              {
                level: 3,
                title: "getRangeBoolean([setting])",
                slug: "getrangeboolean-setting",
              },
              {
                level: 3,
                title: "setRangeShow(range [,setting])",
                slug: "setrangeshow-range-setting",
              },
              {
                level: 3,
                title: "setRangeValue(data [,setting])",
                slug: "setrangevalue-data-setting",
              },
              {
                level: 3,
                title: "setRangeFormat(attr, value [,setting])",
                slug: "setrangeformat-attr-value-setting",
              },
              {
                level: 3,
                title: "setRangeFilter(type [,setting])",
                slug: "setrangefilter-type-setting",
              },
              {
                level: 3,
                title: "setRangeMerge(type [,setting])",
                slug: "setrangemerge-type-setting",
              },
              {
                level: 3,
                title: "cancelRangeMerge( [setting])",
                slug: "cancelrangemerge-setting",
              },
              {
                level: 3,
                title: "setRangeSort(type [,setting])",
                slug: "setrangesort-type-setting",
              },
              {
                level: 3,
                title: "setRangeSortMulti(title, sort [,setting])",
                slug: "setrangesortmulti-title-sort-setting",
              },
              {
                level: 3,
                title:
                  "setRangeConditionalFormatDefault(conditionName, conditionValue [,setting])",
                slug: "setrangeconditionalformatdefault-conditionname-conditionvalue-setting",
              },
              {
                level: 3,
                title: "setRangeConditionalFormat(type [,setting])",
                slug: "setrangeconditionalformat-type-setting",
              },
              {
                level: 3,
                title: "deleteRangeConditionalFormat(itemIndex [,setting])",
                slug: "deleterangeconditionalformat-itemindex-setting",
              },
              {
                level: 3,
                title: "clearRange([setting])",
                slug: "clearrange-setting",
              },
              {
                level: 3,
                title: "deleteRange(move [,setting])",
                slug: "deleterange-move-setting",
              },
              {
                level: 3,
                title: "insertRange(move [,setting])",
                slug: "insertrange-move-setting",
              },
              {
                level: 3,
                title: "matrixOperation(type [,setting])",
                slug: "matrixoperation-type-setting",
              },
              {
                level: 3,
                title: "matrixCalculation(type, number [,setting])",
                slug: "matrixcalculation-type-number-setting",
              },
              {
                level: 2,
                title: "Worksheet operations",
                slug: "worksheet-operations",
              },
              { level: 3, title: "getAllSheets()", slug: "getallsheets" },
              {
                level: 3,
                title: "getLuckysheetfile()",
                slug: "getluckysheetfile",
              },
              {
                level: 3,
                title: "getSheet([setting])",
                slug: "getsheet-setting",
              },
              {
                level: 3,
                title: "getSheetData([setting])",
                slug: "getsheetdata-setting",
              },
              {
                level: 3,
                title: "getConfig([setting])",
                slug: "getconfig-setting",
              },
              {
                level: 3,
                title: "setConfig([setting])",
                slug: "setconfig-setting",
              },
              {
                level: 3,
                title: "updataSheet([setting])",
                slug: "updatasheet-setting",
              },
              {
                level: 3,
                title: "setSheetAdd([setting])",
                slug: "setsheetadd-setting",
              },
              {
                level: 3,
                title: "setSheetDelete([setting])",
                slug: "setsheetdelete-setting",
              },
              {
                level: 3,
                title: "setSheetCopy([setting])",
                slug: "setsheetcopy-setting",
              },
              {
                level: 3,
                title: "setSheetHide([setting])",
                slug: "setsheethide-setting",
              },
              {
                level: 3,
                title: "setSheetShow([setting])",
                slug: "setsheetshow-setting",
              },
              {
                level: 3,
                title: "setSheetActive(order [,setting])",
                slug: "setsheetactive-order-setting",
              },
              {
                level: 3,
                title: "setSheetName(name [,setting])",
                slug: "setsheetname-name-setting",
              },
              {
                level: 3,
                title: "setSheetColor(color [,setting])",
                slug: "setsheetcolor-color-setting",
              },
              {
                level: 3,
                title: "setSheetMove(type [,setting])",
                slug: "setsheetmove-type-setting",
              },
              {
                level: 3,
                title: "setSheetOrder(orderList [,setting])",
                slug: "setsheetorder-orderlist-setting",
              },
              {
                level: 3,
                title: "setSheetZoom(zoom [,setting])",
                slug: "setsheetzoom-zoom-setting",
              },
              {
                level: 3,
                title: "showGridLines([setting])",
                slug: "showgridlines-setting",
              },
              {
                level: 3,
                title: "hideGridLines([setting])",
                slug: "hidegridlines-setting",
              },
              {
                level: 2,
                title: "Workbook operations",
                slug: "workbook-operations",
              },
              {
                level: 3,
                title: "create(options [,setting])",
                slug: "create-options-setting",
              },
              {
                level: 3,
                title: "refresh([setting])",
                slug: "refresh-setting",
              },
              { level: 3, title: "scroll([setting])", slug: "scroll-setting" },
              { level: 3, title: "resize([setting])", slug: "resize-setting" },
              {
                level: 3,
                title: "destroy([setting])",
                slug: "destroy-setting",
              },
              {
                level: 3,
                title: "getScreenshot([setting])",
                slug: "getscreenshot-setting",
              },
              {
                level: 3,
                title: "setWorkbookName(name [,setting])",
                slug: "setworkbookname-name-setting",
              },
              {
                level: 3,
                title: "getWorkbookName(name [,setting])",
                slug: "getworkbookname-name-setting",
              },
              { level: 3, title: "undo([setting])", slug: "undo-setting" },
              { level: 3, title: "redo([setting])", slug: "redo-setting" },
              {
                level: 3,
                title: "refreshFormula([setting])",
                slug: "refreshformula-setting",
              },
              {
                level: 3,
                title: "refreshMenuButtonFocus([data],[r],[c],[success])",
                slug: "refreshmenubuttonfocus-data-r-c-success",
              },
              {
                level: 3,
                title: "checkTheStatusOfTheSelectedCells(type,status)",
                slug: "checkthestatusoftheselectedcells-type-status",
              },
              { level: 2, title: "Chart", slug: "chart" },
              {
                level: 3,
                title: "insertChart([setting])",
                slug: "insertchart-setting",
              },
              {
                level: 3,
                title: "setChart(chartId, attr, value [,setting])",
                slug: "setchart-chartid-attr-value-setting",
              },
              {
                level: 3,
                title: "getChart(chartId)",
                slug: "getchart-chartid",
              },
              {
                level: 3,
                title: "deleteChart(chartId [,setting])",
                slug: "deletechart-chartid-setting",
              },
              {
                level: 2,
                title: "Data Verification",
                slug: "data-verification",
              },
              {
                level: 3,
                title: "setDataVerification(option, [setting])",
                slug: "setdataverification-option-setting",
              },
              {
                level: 3,
                title: "deleteDataVerification([setting])",
                slug: "deletedataverification-setting",
              },
              {
                level: 2,
                title: "Worksheet Protection",
                slug: "worksheet-protection",
              },
              {
                level: 3,
                title: "setProtection(option, [setting])",
                slug: "setprotection-option-setting",
              },
              { level: 2, title: "Public method", slug: "public-method" },
              {
                level: 3,
                title: "transToCellData(data [,setting])",
                slug: "transtocelldata-data-setting",
              },
              {
                level: 3,
                title: "transToData(celldata [,setting])",
                slug: "transtodata-celldata-setting",
              },
              { level: 3, title: "toJson()", slug: "tojson" },
              { level: 2, title: "Legacy API", slug: "legacy-api" },
              {
                level: 3,
                title: "getcellvalue([r] [,c] [,data] [,type])",
                slug: "getcellvalue-r-c-data-type",
              },
              {
                level: 3,
                title: "getluckysheetfile()",
                slug: "getluckysheetfile-2",
              },
              { level: 3, title: "getconfig()", slug: "getconfig" },
              {
                level: 3,
                title: "getluckysheetselectsave()",
                slug: "getluckysheet-select-save",
              },
              {
                level: 3,
                title: "getdatabyselection([range] [,sheetOrder])",
                slug: "getdatabyselection-range-sheetorder",
              },
              {
                level: 3,
                title: "luckysheetrefreshgrid(scrollWidth, scrollHeight)",
                slug: "luckysheetrefreshgrid-scrollwidth-scrollheight",
              },
              {
                level: 3,
                title: "setcellvalue(r, c, d, v)",
                slug: "setcellvalue-r-c-d-v",
              },
              { level: 3, title: "jfrefreshgrid()", slug: "jfrefreshgrid" },
              {
                level: 3,
                title: "setluckysheetselectsave(v)",
                slug: "setluckysheet-select-save-v",
              },
              {
                level: 3,
                title: "selectHightlightShow()",
                slug: "selecthightlightshow",
              },
              { level: 3, title: "flowdata()", slug: "flowdata" },
              {
                level: 3,
                title: "buildGridData(file)",
                slug: "buildgriddata-file",
              },
              {
                level: 3,
                title: "getGridData(data)",
                slug: "getgriddata-data",
              },
            ],
            lastUpdated: "5/17/2023, 4:50:54 PM",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "Contribution guide",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "Contribution guide" },
                { property: "og:type", content: "article" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/contribute.html",
                },
                { name: "twitter:title", content: "Contribution guide" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/contribute.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/contribute.html",
            relativePath: "guide/contribute.md",
            key: "v-4ec6581e",
            path: "/guide/contribute.html",
            headers: [
              {
                level: 2,
                title: "Our code of conduct",
                slug: "our-code-of-conduct",
              },
              {
                level: 2,
                title: "How to participate in contributing?",
                slug: "how-to-participate-in-contributing",
              },
              {
                level: 2,
                title: "How to submit issues",
                slug: "how-to-submit-issues",
              },
              {
                level: 2,
                title: "How to claim Issues",
                slug: "how-to-claim-issues",
              },
              {
                level: 2,
                title: "How to submit code",
                slug: "how-to-submit-code",
              },
              {
                level: 2,
                title: "Code Specification",
                slug: "code-specification",
              },
              {
                level: 2,
                title: "How to contribute documents",
                slug: "how-to-contribute-documents",
              },
              {
                level: 2,
                title: "How to become DataDocs Committer",
                slug: "how-to-become-datadocs-committer",
              },
            ],
            lastUpdated: "5/17/2023, 4:50:54 PM",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "Overall configuration",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "Overall configuration" },
                { property: "og:type", content: "article" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/config.html",
                },
                { name: "twitter:title", content: "Overall configuration" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/config.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/config.html",
            relativePath: "guide/config.md",
            key: "v-4ef009b4",
            path: "/guide/config.html",
            headers: [
              { level: 2, title: "Basic Structure", slug: "basic-structure" },
              {
                level: 2,
                title: "Configuration item",
                slug: "configuration-item",
              },
              { level: 3, title: "container", slug: "container" },
              { level: 3, title: "title", slug: "title" },
              { level: 3, title: "lang", slug: "lang" },
              { level: 3, title: "gridKey", slug: "gridkey" },
              { level: 3, title: "loadUrl", slug: "loadurl" },
              { level: 3, title: "loadSheetUrl", slug: "loadsheeturl" },
              { level: 3, title: "allowUpdate", slug: "allowupdate" },
              { level: 3, title: "updateUrl", slug: "updateurl" },
              { level: 3, title: "updateImageUrl", slug: "updateimageurl" },
              { level: 3, title: "data", slug: "data" },
              { level: 3, title: "plugins", slug: "plugins" },
              { level: 3, title: "column", slug: "column" },
              { level: 3, title: "row", slug: "row" },
              { level: 3, title: "autoFormatw", slug: "autoformatw" },
              { level: 3, title: "accuracy", slug: "accuracy" },
              { level: 3, title: "allowCopy", slug: "allowcopy" },
              { level: 3, title: "showtoolbar", slug: "showtoolbar" },
              {
                level: 3,
                title: "showtoolbarConfig",
                slug: "showtoolbarconfig",
              },
              { level: 3, title: "showinfobar", slug: "showinfobar" },
              { level: 3, title: "showsheetbar", slug: "showsheetbar" },
              {
                level: 3,
                title: "showsheetbarConfig",
                slug: "showsheetbarconfig",
              },
              { level: 3, title: "showstatisticBar", slug: "showstatisticbar" },
              {
                level: 3,
                title: "showstatisticBarConfig",
                slug: "showstatisticbarconfig",
              },
              { level: 3, title: "enableAddRow", slug: "enableaddrow" },
              { level: 3, title: "enableAddBackTop", slug: "enableaddbacktop" },
              { level: 3, title: "userInfo", slug: "userinfo" },
              { level: 3, title: "userMenuItem", slug: "usermenuitem" },
              { level: 3, title: "myFolderUrl", slug: "myfolderurl" },
              { level: 3, title: "devicePixelRatio", slug: "devicepixelratio" },
              { level: 3, title: "functionButton", slug: "functionbutton" },
              {
                level: 3,
                title: "showConfigWindowResize",
                slug: "showconfigwindowresize",
              },
              { level: 3, title: "forceCalculation", slug: "forcecalculation" },
              {
                level: 3,
                title: "cellRightClickConfig",
                slug: "cellrightclickconfig",
              },
              {
                level: 3,
                title: "sheetRightClickConfig",
                slug: "sheetrightclickconfig",
              },
              { level: 3, title: "rowHeaderWidth", slug: "rowheaderwidth" },
              {
                level: 3,
                title: "columnHeaderHeight",
                slug: "columnheaderheight",
              },
              { level: 3, title: "sheetFormulaBar", slug: "sheetformulabar" },
              { level: 3, title: "defaultFontSize", slug: "defaultfontsize" },
              {
                level: 3,
                title: "limitSheetNameLength",
                slug: "limitsheetnamelength",
              },
              {
                level: 3,
                title: "defaultSheetNameMaxLength",
                slug: "defaultsheetnamemaxlength",
              },
              { level: 3, title: "pager", slug: "pager" },
              {
                level: 2,
                title: "Hook Function (TODO)",
                slug: "hook-function-todo",
              },
              { level: 2, title: "Cell", slug: "cell" },
              { level: 3, title: "cellEditBefore", slug: "celleditbefore" },
              { level: 3, title: "cellUpdateBefore", slug: "cellupdatebefore" },
              { level: 3, title: "cellUpdated", slug: "cellupdated" },
              { level: 3, title: "cellRenderBefore", slug: "cellrenderbefore" },
              { level: 3, title: "cellRenderAfter", slug: "cellrenderafter" },
              {
                level: 3,
                title: "cellAllRenderBefore",
                slug: "cellallrenderbefore",
              },
              {
                level: 3,
                title: "rowTitleCellRenderBefore",
                slug: "rowtitlecellrenderbefore",
              },
              {
                level: 3,
                title: "rowTitleCellRenderAfter",
                slug: "rowtitlecellrenderafter",
              },
              {
                level: 3,
                title: "columnTitleCellRenderBefore",
                slug: "columntitlecellrenderbefore",
              },
              {
                level: 3,
                title: "columnTitleCellRenderAfter",
                slug: "columntitlecellrenderafter",
              },
              { level: 2, title: "Selected area", slug: "selected-area" },
              { level: 3, title: "rangeSelect", slug: "rangeselect" },
              { level: 3, title: "rangeMoveBefore", slug: "rangemovebefore" },
              { level: 3, title: "rangeMoveAfter", slug: "rangemoveafter" },
              { level: 3, title: "rangeEditBefore", slug: "rangeeditbefore" },
              { level: 3, title: "rangeEditAfter", slug: "rangeeditafter" },
              { level: 3, title: "rangeCopyBefore", slug: "rangecopybefore" },
              { level: 3, title: "rangeCopyAfter", slug: "rangecopyafter" },
              { level: 3, title: "rangePasteBefore", slug: "rangepastebefore" },
              { level: 3, title: "rangePasteAfter", slug: "rangepasteafter" },
              { level: 3, title: "rangeCutBefore", slug: "rangecutbefore" },
              { level: 3, title: "rangeCutAfter", slug: "rangecutafter" },
              {
                level: 3,
                title: "rangeDeleteBefore",
                slug: "rangedeletebefore",
              },
              { level: 3, title: "rangeDeleteAfter", slug: "rangedeleteafter" },
              { level: 3, title: "rangeClearBefore", slug: "rangeclearbefore" },
              { level: 3, title: "rangeClearAfter", slug: "rangeclearafter" },
              { level: 3, title: "rangePullBefore", slug: "rangepullbefore" },
              { level: 3, title: "rangePullAfter", slug: "rangepullafter" },
              { level: 2, title: "Worksheet", slug: "worksheet" },
              {
                level: 3,
                title: "sheetCreatekBefore",
                slug: "sheetcreatekbefore",
              },
              { level: 3, title: "sheetCreateAfter", slug: "sheetcreateafter" },
              { level: 3, title: "sheetMoveBefore", slug: "sheetmovebefore" },
              { level: 3, title: "sheetMoveAfter", slug: "sheetmoveafter" },
              {
                level: 3,
                title: "sheetDeleteBefore",
                slug: "sheetdeletebefore",
              },
              { level: 3, title: "sheetDeleteAfter", slug: "sheetdeleteafter" },
              {
                level: 3,
                title: "sheetEditNameBefore",
                slug: "sheeteditnamebefore",
              },
              {
                level: 3,
                title: "sheetEditNameAfter",
                slug: "sheeteditnameafter",
              },
              {
                level: 3,
                title: "sheetEditColorBefore",
                slug: "sheeteditcolorbefore",
              },
              {
                level: 3,
                title: "sheetEditColorAfter",
                slug: "sheeteditcolorafter",
              },
              { level: 3, title: "sheetZoomBefore", slug: "sheetzoombefore" },
              { level: 3, title: "sheetZoomAfter", slug: "sheetzoomafter" },
              {
                level: 3,
                title: "sheetActivateBefore",
                slug: "sheetactivatebefore",
              },
              {
                level: 3,
                title: "sheetActivateAfter",
                slug: "sheetactivateafter",
              },
              {
                level: 3,
                title: "sheetDeactivateBefore",
                slug: "sheetdeactivatebefore",
              },
              {
                level: 3,
                title: "sheetDeactivateAfter",
                slug: "sheetdeactivateafter",
              },
              { level: 2, title: "Workbook", slug: "workbook" },
              {
                level: 3,
                title: "workbookCreateBefore",
                slug: "workbookcreatebefore",
              },
              {
                level: 3,
                title: "workbookCreateAfter",
                slug: "workbookcreateafter",
              },
              {
                level: 3,
                title: "workbookDestroyBefore",
                slug: "workbookdestroybefore",
              },
              {
                level: 3,
                title: "workbookDestroyAfter",
                slug: "workbookdestroyafter",
              },
              { level: 3, title: "updated", slug: "updated" },
              { level: 3, title: "resized", slug: "resized" },
              { level: 2, title: "Cooperative", slug: "cooperative" },
              {
                level: 3,
                title: "cooperativeMessage",
                slug: "cooperativemessage",
              },
              { level: 2, title: "Image", slug: "image" },
              {
                level: 3,
                title: "imageInsertBefore",
                slug: "imageinsertbefore",
              },
              { level: 3, title: "imageInsertAfter", slug: "imageinsertafter" },
              {
                level: 3,
                title: "imageUpdateBefore",
                slug: "imageupdatebefore",
              },
              { level: 3, title: "imageUpdateAfter", slug: "imageupdateafter" },
              {
                level: 3,
                title: "imageDeleteBefore",
                slug: "imagedeletebefore",
              },
              { level: 3, title: "imageDeleteAfter", slug: "imagedeleteafter" },
              { level: 2, title: "Comment", slug: "comment" },
              {
                level: 3,
                title: "commentInsertBefore",
                slug: "commentinsertbefore",
              },
              {
                level: 3,
                title: "commentInsertAfter",
                slug: "commentinsertafter",
              },
              {
                level: 3,
                title: "commentDeleteBefore",
                slug: "commentdeletebefore",
              },
              {
                level: 3,
                title: "commentDeleteAfter",
                slug: "commentdeleteafter",
              },
              {
                level: 3,
                title: "commentUpdateBefore",
                slug: "commentupdatebefore",
              },
              {
                level: 3,
                title: "commentUpdateAfter",
                slug: "commentupdateafter",
              },
              { level: 2, title: "Pivot table", slug: "pivot-table" },
              {
                level: 3,
                title: "pivotTableEditBefore",
                slug: "pivottableeditbefore",
              },
              {
                level: 3,
                title: "pivotTableEditAfter",
                slug: "pivottableeditafter",
              },
              { level: 2, title: "Freeze", slug: "freeze" },
              {
                level: 3,
                title: "frozenCreateBefore",
                slug: "frozencreatebefore",
              },
              {
                level: 3,
                title: "frozenCreateAfter",
                slug: "frozencreateafter",
              },
              {
                level: 3,
                title: "frozenCancelBefore",
                slug: "frozencancelbefore",
              },
              {
                level: 3,
                title: "frozenCancelAfter",
                slug: "frozencancelafter",
              },
              { level: 3, title: "fireMousedown", slug: "firemousedown" },
              { level: 2, title: "Pager", slug: "pager-2" },
              { level: 3, title: "onTogglePager", slug: "ontogglepager" },
            ],
            lastUpdated: "5/17/2023, 4:50:54 PM",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "Format attributes",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "Format attributes" },
                { property: "og:type", content: "article" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/cell.html",
                },
                { name: "twitter:title", content: "Format attributes" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/cell.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/cell.html",
            relativePath: "guide/cell.md",
            key: "v-fc8ea098",
            path: "/guide/cell.html",
            headers: [
              {
                level: 2,
                title: "Cell attributes table",
                slug: "cell-attributes-table",
              },
              { level: 2, title: "", slug: "cell-format" },
            ],
            lastUpdated: "5/17/2023, 4:50:54 PM",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "Table Data",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "Table Data" },
                { property: "og:type", content: "article" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/data.html",
                },
                { name: "twitter:title", content: "Table Data" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/data.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/data.html",
            relativePath: "guide/data.md",
            key: "v-a859c9b8",
            path: "/guide/data.html",
            headers: [
              { level: 2, title: "Get table data", slug: "get-table-data" },
              { level: 2, title: "name", slug: "name" },
              { level: 2, title: "color", slug: "color" },
              { level: 2, title: "index", slug: "index" },
              { level: 2, title: "status", slug: "status" },
              { level: 2, title: "order", slug: "order" },
              { level: 2, title: "hide", slug: "hide" },
              { level: 2, title: "row", slug: "row" },
              { level: 2, title: "column", slug: "column" },
              { level: 2, title: "scrollLeft", slug: "scrollleft" },
              { level: 2, title: "scrollTop", slug: "scrolltop" },
              { level: 2, title: "config", slug: "config" },
              { level: 3, title: "config.merge", slug: "config-merge" },
              { level: 3, title: "config.rowlen", slug: "config-rowlen" },
              { level: 3, title: "config.columnlen", slug: "config-columnlen" },
              { level: 3, title: "config.rowhidden", slug: "config-rowhidden" },
              { level: 3, title: "config.colhidden", slug: "config-colhidden" },
              {
                level: 3,
                title: "config.borderInfo",
                slug: "config-borderinfo",
              },
              { level: 2, title: "celldata", slug: "celldata" },
              {
                level: 2,
                title: "luckysheetselectsave",
                slug: "datadocs-select-save",
              },
              {
                level: 2,
                title: "luckysheetconditionformatsave",
                slug: "datadocs-conditionformat-save",
              },
              { level: 2, title: "calcChain", slug: "calcchain" },
              { level: 2, title: "isPivotTable", slug: "ispivottable" },
              { level: 2, title: "pivotTable", slug: "pivottable" },
              { level: 2, title: "filter_select", slug: "filter-select" },
              { level: 2, title: "filter", slug: "filter" },
              {
                level: 2,
                title: "luckysheetalternateformatsave",
                slug: "datadocs-alternateformat-save",
              },
              {
                level: 2,
                title: "luckysheetalternateformatsave_modelCustom",
                slug: "datadocs-alternateformat-save-modelcustom",
              },
              { level: 2, title: "chart", slug: "chart" },
              { level: 2, title: "visibledatarow", slug: "visibledatarow" },
              {
                level: 2,
                title: "visibledatacolumn",
                slug: "visibledatacolumn",
              },
              { level: 2, title: "ch_width", slug: "ch-width" },
              { level: 2, title: "rh_height", slug: "rh-height" },
              { level: 2, title: "Get sheet data", slug: "get-sheet-data" },
              { level: 2, title: "Update data", slug: "update-data" },
            ],
            lastUpdated: "5/17/2023, 4:50:54 PM",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "Tutorials and resources",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "Tutorials and resources" },
                { property: "og:type", content: "article" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/resource.html",
                },
                { name: "twitter:title", content: "Tutorials and resources" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/resource.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/resource.html",
            relativePath: "guide/resource.md",
            key: "v-701e3fdc",
            path: "/guide/resource.html",
            headers: [
              { level: 2, title: "Blog", slug: "blog" },
              { level: 2, title: "Front-end case", slug: "front-end-case" },
              { level: 3, title: "Community Case", slug: "community-case" },
              { level: 2, title: "Back-end case", slug: "back-end-case" },
              { level: 3, title: "Official case", slug: "official-case" },
              { level: 3, title: "Community Case", slug: "community-case-2" },
              {
                level: 2,
                title: "Learning Materials",
                slug: "learning-materials",
              },
            ],
            lastUpdated: "5/17/2023, 4:50:54 PM",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "Sheet Configuration",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "Sheet Configuration" },
                { property: "og:type", content: "article" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/sheet.html",
                },
                { name: "twitter:title", content: "Sheet Configuration" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/sheet.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/sheet.html",
            relativePath: "guide/sheet.md",
            key: "v-e144841c",
            path: "/guide/sheet.html",
            headers: [
              { level: 2, title: "Initial", slug: "initial" },
              { level: 3, title: "name", slug: "name" },
              { level: 3, title: "color", slug: "color" },
              { level: 3, title: "index", slug: "index" },
              { level: 3, title: "status", slug: "status" },
              { level: 3, title: "order", slug: "order" },
              { level: 3, title: "hide", slug: "hide" },
              { level: 3, title: "row", slug: "row" },
              { level: 3, title: "column", slug: "column" },
              { level: 3, title: "defaultRowHeight", slug: "defaultrowheight" },
              { level: 3, title: "defaultColWidth", slug: "defaultcolwidth" },
              { level: 3, title: "celldata", slug: "celldata" },
              { level: 3, title: "config", slug: "config" },
              { level: 3, title: "scrollLeft", slug: "scrollleft" },
              { level: 3, title: "scrollTop", slug: "scrolltop" },
              {
                level: 3,
                title: "luckysheetselectsave",
                slug: "datadocs-select-save",
              },
              { level: 3, title: "calcChain", slug: "calcchain" },
              { level: 3, title: "isPivotTable", slug: "ispivottable" },
              { level: 3, title: "pivotTable", slug: "pivottable" },
              { level: 3, title: "filter_select", slug: "filter-select" },
              { level: 3, title: "filter", slug: "filter" },
              {
                level: 3,
                title: "luckysheetalternateformatsave",
                slug: "datadocs-alternateformat-save",
              },
              {
                level: 3,
                title: "luckysheetalternateformatsave_modelCustom",
                slug: "datadocs-alternateformat-save-modelcustom",
              },
              {
                level: 3,
                title: "luckysheetconditionformatsave",
                slug: "datadocs-conditionformat-save",
              },
              { level: 3, title: "frozen", slug: "frozen" },
              { level: 3, title: "chart", slug: "chart" },
              { level: 3, title: "zoomRatio", slug: "zoomratio" },
              { level: 3, title: "image", slug: "image" },
              { level: 3, title: "showGridLines", slug: "showgridlines" },
              {
                level: 2,
                title: "debug information",
                slug: "debug-information",
              },
              { level: 3, title: "visibledatarow", slug: "visibledatarow" },
              {
                level: 3,
                title: "visibledatacolumn",
                slug: "visibledatacolumn",
              },
              { level: 3, title: "ch_width", slug: "ch-width" },
              { level: 3, title: "rh_height", slug: "rh-height" },
              { level: 3, title: "load", slug: "load" },
              { level: 3, title: "data", slug: "data" },
            ],
            lastUpdated: "5/17/2023, 4:50:54 PM",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "Table Operation",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "Table Operation" },
                { property: "og:type", content: "article" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/operate.html",
                },
                { name: "twitter:title", content: "Table Operation" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/operate.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/operate.html",
            relativePath: "guide/operate.md",
            key: "v-3cb1e35c",
            path: "/guide/operate.html",
            headers: [
              { level: 2, title: "Cell refresh", slug: "cell-refresh" },
              {
                level: 3,
                title: "single cell refresh",
                slug: "single-cell-refresh",
              },
              { level: 2, title: "Config operation", slug: "config-operation" },
              { level: 2, title: "General save", slug: "general-save" },
              {
                level: 2,
                title: "Function chain operation",
                slug: "function-chain-operation",
              },
              {
                level: 2,
                title: "Row and column operations",
                slug: "row-and-column-operations",
              },
              {
                level: 3,
                title: "Delete rows or columns",
                slug: "delete-rows-or-columns",
              },
              {
                level: 3,
                title: "Add rows or columns",
                slug: "add-rows-or-columns",
              },
              { level: 2, title: "Filter operating", slug: "filter-operating" },
              {
                level: 3,
                title: "Select filter condition",
                slug: "select-filter-condition",
              },
              { level: 3, title: "Clear filter", slug: "clear-filter" },
              { level: 3, title: "Restore filter", slug: "restore-filter" },
              { level: 2, title: "Sheet operation", slug: "sheet-operation" },
              { level: 3, title: "New sheet", slug: "new-sheet" },
              { level: 3, title: "Copy sheet", slug: "copy-sheet" },
              { level: 3, title: "Delete sheet", slug: "delete-sheet" },
              {
                level: 3,
                title: "restore from a deleted sheet",
                slug: "restore-from-a-deleted-sheet",
              },
              { level: 3, title: "Position", slug: "position" },
              {
                level: 3,
                title: "switch to the specified sheet",
                slug: "switch-to-the-specified-sheet",
              },
              {
                level: 2,
                title: "Sheet attributes (hide or show)",
                slug: "sheet-attributes-hide-or-show",
              },
              {
                level: 2,
                title: "Table information change",
                slug: "table-information-change",
              },
              { level: 3, title: "Table name", slug: "table-name" },
              { level: 3, title: "Thumbnail", slug: "thumbnail" },
              { level: 2, title: "Chart(TODO)", slug: "chart-todo" },
              { level: 3, title: "new chart", slug: "new-chart" },
              {
                level: 3,
                title: "move chart position",
                slug: "move-chart-position",
              },
              { level: 3, title: "zoom chart", slug: "zoom-chart" },
              {
                level: 3,
                title: "change the configuration of charts",
                slug: "change-the-configuration-of-charts",
              },
              {
                level: 2,
                title: "Backend return format",
                slug: "backend-return-format",
              },
            ],
            lastUpdated: "5/17/2023, 4:50:54 PM",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "Home",
            frontmatter: {
              home: !0,
              heroText: "DataDocs",
              tagline: "配置文档 · API · 教程",
              actionText: "快速上手 →",
              actionLink: "/guide/",
              features: [
                {
                  title: "功能强大",
                  details: "包含大量常用电子表格功能,替代你的excel",
                },
                { title: "配置简单", details: "最少的配置就能开始上手使用" },
                { title: "完全开源", details: "社区驱动,共同来完善你的想法" },
              ],
              footer: "MIT Licensed | Copyright © 2020-present Mengshukeji",
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "Home" },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content: "https://servequery.github.io/datadocs/",
                },
                { name: "twitter:title", content: "Home" },
                {
                  name: "twitter:url",
                  content: "https://servequery.github.io/datadocs/",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/",
            relativePath: "README.md",
            key: "v-a2c9c78e",
            path: "/",
            lastUpdated: "2023/5/17 16:50:54",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "认识团队",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "认识团队" },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content: "https://servequery.github.io/datadocs/about/",
                },
                { name: "twitter:title", content: "认识团队" },
                {
                  name: "twitter:url",
                  content: "https://servequery.github.io/datadocs/about/",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/about/",
            relativePath: "about/README.md",
            key: "v-0b57ce39",
            path: "/about/",
            headers: [
              { level: 2, title: "核心团队活跃成员", slug: "核心团队活跃成员" },
              { level: 2, title: "社区伙伴", slug: "社区伙伴" },
            ],
            lastUpdated: "2023/5/17 16:50:54",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "社区案例",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "社区案例" },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/about/company.html",
                },
                { name: "twitter:title", content: "社区案例" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/about/company.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/about/company.html",
            relativePath: "about/company.md",
            key: "v-18d03aaa",
            path: "/about/company.html",
            headers: [{ level: 2, title: "公司案例", slug: "公司案例" }],
            lastUpdated: "2023/5/17 16:50:54",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "赞助",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-02-20T03:05:43.000Z",
                },
                { property: "og:title", content: "赞助" },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/about/sponsor.html",
                },
                { name: "twitter:title", content: "赞助" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/about/sponsor.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/about/sponsor.html",
            relativePath: "about/sponsor.md",
            key: "v-7d493ba0",
            path: "/about/sponsor.html",
            headers: [
              { level: 2, title: "为什么赞助", slug: "为什么赞助" },
              { level: 2, title: "赞助方式", slug: "赞助方式" },
              {
                level: 3,
                title: "Patreon和OpenCollective有什么区别？",
                slug: "patreon和opencollective有什么区别",
              },
              { level: 2, title: "赞助者列表", slug: "赞助者列表" },
            ],
            lastUpdated: "2024/2/20 11:05:43",
            lastUpdatedTimestamp: 1708398343e3,
          },
          {
            title: "常见问题",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "常见问题" },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/FAQ.html",
                },
                { name: "twitter:title", content: "常见问题" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/FAQ.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/FAQ.html",
            relativePath: "guide/FAQ.md",
            key: "v-86a1904c",
            path: "/guide/FAQ.html",
            headers: [
              {
                level: 2,
                title: "luckysheetfile中的data和celldata有什么区别？",
                slug: "luckysheetfile中的data和celldata有什么区别",
              },
              {
                level: 2,
                title: "单元格的类型有哪些？",
                slug: "单元格的类型有哪些",
              },
              {
                level: 2,
                title: "如何在Vue/React项目中使用Luckysheet？",
                slug: "如何在vue-react项目中使用luckysheet",
              },
              {
                level: 2,
                title: "为什么初始化后表格里面的公式不会被触发？",
                slug: "为什么初始化后表格里面的公式不会被触发",
              },
              {
                level: 2,
                title: "远端加载数据是loadUrl还是updateUrl？",
                slug: "远端加载数据是loadurl还是updateurl",
              },
              {
                level: 2,
                title: "每个sheet页的index和order有什么区别？",
                slug: "每个sheet页的index和order有什么区别",
              },
              {
                level: 2,
                title: "dist文件夹下为什么不能直接运行项目？",
                slug: "dist文件夹下为什么不能直接运行项目",
              },
              {
                level: 2,
                title: "excel导入导出怎么做？",
                slug: "excel导入导出怎么做",
              },
              {
                level: 2,
                title: "初始化时合并单元格怎么做？",
                slug: "初始化时合并单元格怎么做",
              },
              {
                level: 2,
                title:
                  "Luckysheet如何把表格里的数据保存到数据库？有没有服务端存储和协作的解决方案？",
                slug: "luckysheet如何把表格里的数据保存到数据库-有没有服务端存储和协作的解决方案",
              },
              {
                level: 2,
                title:
                  "如何监听单元格hover或者点击事件？cellRenderAfter如何实时监听变化？",
                slug: "如何监听单元格hover或者点击事件-cellrenderafter如何实时监听变化",
              },
              {
                level: 2,
                title: "顶部的工具栏不支持自定义配置？",
                slug: "顶部的工具栏不支持自定义配置",
              },
              {
                level: 2,
                title: "项目使用了jQuery吗？",
                slug: "项目使用了jquery吗",
              },
              {
                level: 2,
                title: "如何为单元格对象新增字段？",
                slug: "如何为单元格对象新增字段",
              },
              {
                level: 2,
                title: "工具栏图标加载不出来？",
                slug: "工具栏图标加载不出来",
              },
              {
                level: 2,
                title: "Luckyexcel打包后不动？",
                slug: "luckyexcel打包后不动",
              },
              {
                level: 2,
                title: "单元格不可编辑如何控制？表格保护怎么操作？",
                slug: "单元格不可编辑如何控制-表格保护怎么操作",
              },
              {
                level: 2,
                title: "数据验证怎么配置？",
                slug: "数据验证怎么配置",
              },
              {
                level: 2,
                title: "Luckysheet通过引入CDN有案例吗？",
                slug: "luckysheet通过引入cdn有案例吗",
              },
              {
                level: 2,
                title: "请问一下图片怎么限制在单元格里面自适应高度？",
                slug: "请问一下图片怎么限制在单元格里面自适应高度",
              },
              {
                level: 2,
                title: "如何获取工作表默认的行高列宽？",
                slug: "如何获取工作表默认的行高列宽",
              },
              {
                level: 2,
                title: "如何隐藏工作表下方的添加行按钮和回到顶部按钮？",
                slug: "如何隐藏工作表下方的添加行按钮和回到顶部按钮",
              },
              {
                level: 2,
                title: "如何隐藏工作表的行标题和列标题？",
                slug: "如何隐藏工作表的行标题和列标题",
              },
              {
                level: 2,
                title: "调用什么方法能设置config.merge？",
                slug: "调用什么方法能设置config-merge",
              },
              {
                level: 2,
                title: "为什么官方公布的新功能没有效果？",
                slug: "为什么官方公布的新功能没有效果",
              },
              {
                level: 2,
                title: "npm run dev报错：Error: Cannot find module 'rollup'？",
                slug: "npm-run-dev报错-error-cannot-find-module-rollup",
              },
              {
                level: 2,
                title: "怎样在vue工程里对Luckysheet进行二次开发？",
                slug: "怎样在vue工程里对luckysheet进行二次开发",
              },
              {
                level: 2,
                title: "创建图表时候报错Store.createChart？",
                slug: "创建图表时候报错store-createchart",
              },
              {
                level: 2,
                title: "单元格能增加自定义属性吗？",
                slug: "单元格能增加自定义属性吗",
              },
              {
                level: 2,
                title:
                  "如何输入以'='开头的文本？例如=currentDate('YYYY-MM-DD')，它默认会去掉函数，函数怎么禁止？",
                slug: "如何输入以-开头的文本-例如-currentdate-yyyy-mm-dd-它默认会去掉函数-函数怎么禁止",
              },
              {
                level: 2,
                title: "create回调为什么没有效果？",
                slug: "create回调为什么没有效果",
              },
              {
                level: 2,
                title: "create的时候默认选中第一个单元格，怎么去除？",
                slug: "create的时候默认选中第一个单元格-怎么去除",
              },
              {
                level: 2,
                title: "右键事件绑定在哪？",
                slug: "右键事件绑定在哪",
              },
              {
                level: 2,
                title: "如何添加自定义工具栏？",
                slug: "如何添加自定义工具栏",
              },
              {
                level: 2,
                title: "如何添加自定义公式？",
                slug: "如何添加自定义公式",
              },
              {
                level: 2,
                title:
                  "有没有类似loadData接口，我想实现先加载10条记录，然后再动态加载数据，这些数据都追加到表格中？",
                slug: "有没有类似loaddata接口-我想实现先加载10条记录-然后再动态加载数据-这些数据都追加到表格中",
              },
            ],
            lastUpdated: "2023/5/17 16:50:54",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "DataDocs 已不再维护，推荐使用 Univer 替代",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-03-28T09:45:19.000Z",
                },
                {
                  property: "og:title",
                  content: "DataDocs 已不再维护，推荐使用 Univer 替代",
                },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content: "https://servequery.github.io/datadocs/guide/",
                },
                {
                  name: "twitter:title",
                  content: "DataDocs 已不再维护，推荐使用 Univer 替代",
                },
                {
                  name: "twitter:url",
                  content: "https://servequery.github.io/datadocs/guide/",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/",
            relativePath: "guide/README.md",
            key: "v-7adbae99",
            path: "/guide/",
            headers: [
              { level: 2, title: "基本介绍", slug: "基本介绍" },
              { level: 2, title: "Demo", slug: "demo" },
              { level: 2, title: "在线案例", slug: "在线案例" },
              { level: 2, title: "特性", slug: "特性" },
              { level: 3, title: "🛠️格式设置", slug: "🛠️格式设置" },
              { level: 3, title: "🧬单元格", slug: "🧬单元格" },
              { level: 3, title: "🖱️行和列操作", slug: "🖱️行和列操作" },
              { level: 3, title: "🔨操作体验", slug: "🔨操作体验" },
              { level: 3, title: "⚙️公式和函数", slug: "⚙️公式和函数" },
              { level: 3, title: "📐表格操作", slug: "📐表格操作" },
              { level: 3, title: "📈数据透视表", slug: "📈数据透视表" },
              { level: 3, title: "📊图表", slug: "📊图表" },
              { level: 3, title: "✍️分享及写作", slug: "✍️分享及写作" },
              { level: 3, title: "📚插入对象", slug: "📚插入对象" },
              { level: 3, title: "⚡Luckysheet专有", slug: "⚡luckysheet专有" },
              { level: 3, title: "⏱️未来开发计划", slug: "⏱️未来开发计划" },
              { level: 2, title: "开发模式", slug: "开发模式" },
              { level: 3, title: "环境", slug: "环境" },
              { level: 3, title: "安装", slug: "安装" },
              { level: 3, title: "开发", slug: "开发" },
              { level: 3, title: "打包", slug: "打包" },
              { level: 2, title: "使用步骤", slug: "使用步骤" },
              { level: 3, title: "第一步", slug: "第一步" },
              { level: 3, title: "第二步", slug: "第二步" },
              { level: 3, title: "第三步", slug: "第三步" },
              { level: 2, title: "整体结构", slug: "整体结构" },
              { level: 3, title: "格式", slug: "格式" },
              { level: 3, title: "查看方式", slug: "查看方式" },
              { level: 2, title: "快捷键", slug: "快捷键" },
              { level: 2, title: "指引", slug: "指引" },
            ],
            lastUpdated: "2024/3/28 17:45:19",
            lastUpdatedTimestamp: 1711619119e3,
          },
          {
            title: "API",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "API" },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/api.html",
                },
                { name: "twitter:title", content: "API" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/api.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/api.html",
            relativePath: "guide/api.md",
            key: "v-6076d692",
            path: "/guide/api.html",
            headers: [
              { level: 2, title: "单元格操作", slug: "单元格操作" },
              {
                level: 3,
                title: "getCellValue(row, column [,setting])",
                slug: "getcellvalue-row-column-setting",
              },
              {
                level: 3,
                title: "setCellValue(row, column, value [,setting])",
                slug: "setcellvalue-row-column-value-setting",
              },
              {
                level: 3,
                title: "clearCell(row, column [,setting])",
                slug: "clearcell-row-column-setting",
              },
              {
                level: 3,
                title: "deleteCell(move, row, column [,setting])",
                slug: "deletecell-move-row-column-setting",
              },
              {
                level: 3,
                title: "setCellFormat(row, column, attr, value [,setting])",
                slug: "setcellformat-row-column-attr-value-setting",
              },
              {
                level: 3,
                title: "find(content [,setting])",
                slug: "find-content-setting",
              },
              {
                level: 3,
                title: "replace(content, replaceContent [,setting])",
                slug: "replace-content-replacecontent-setting",
              },
              {
                level: 3,
                title: "exitEditMode([,setting])",
                slug: "exiteditmode-setting",
              },
              { level: 2, title: "行和列操作", slug: "行和列操作" },
              {
                level: 3,
                title: "setHorizontalFrozen(isRange [,setting])",
                slug: "sethorizontalfrozen-isrange-setting",
              },
              {
                level: 3,
                title: "setVerticalFrozen(isRange [,setting])",
                slug: "setverticalfrozen-isrange-setting",
              },
              {
                level: 3,
                title: "setBothFrozen(isRange [,setting])",
                slug: "setbothfrozen-isrange-setting",
              },
              {
                level: 3,
                title: "cancelFrozen([setting])",
                slug: "cancelfrozen-setting",
              },
              {
                level: 3,
                title: "insertRow(row [,setting])",
                slug: "insertrow-row-setting",
              },
              {
                level: 3,
                title: "insertColumn( column [,setting])",
                slug: "insertcolumn-column-setting",
              },
              {
                level: 3,
                title: "deleteRow(rowStart, rowEnd [,setting])",
                slug: "deleterow-rowstart-rowend-setting",
              },
              {
                level: 3,
                title: "deleteColumn(columnStart, columnEnd [,setting])",
                slug: "deletecolumn-columnstart-columnend-setting",
              },
              {
                level: 3,
                title: "hideRow(rowStart, rowEnd [,setting])",
                slug: "hiderow-rowstart-rowend-setting",
              },
              {
                level: 3,
                title: "hideColumn(columnStart, columnEnd [,setting])(TODO)",
                slug: "hidecolumn-columnstart-columnend-setting-todo",
              },
              {
                level: 3,
                title: "showRow(rowStart, rowEnd [,setting])",
                slug: "showrow-rowstart-rowend-setting",
              },
              {
                level: 3,
                title: "showColumn(columnStart, columnEnd [,setting])(TODO)",
                slug: "showcolumn-columnstart-columnend-setting-todo",
              },
              {
                level: 3,
                title: "setRowHeight(rowInfo [,setting])",
                slug: "setrowheight-rowinfo-setting",
              },
              {
                level: 3,
                title: "setColumnWidth(columnInfo [,setting])",
                slug: "setcolumnwidth-columninfo-setting",
              },
              {
                level: 3,
                title: "getRowHeight(rowInfo [,setting])",
                slug: "getrowheight-rowinfo-setting",
              },
              {
                level: 3,
                title: "getColumnWidth(columnInfo [,setting])",
                slug: "getcolumnwidth-columninfo-setting",
              },
              {
                level: 3,
                title: "getDefaultRowHeight([,setting])",
                slug: "getdefaultrowheight-setting",
              },
              {
                level: 3,
                title: "getDefaultColWidth([,setting])",
                slug: "getdefaultcolwidth-setting",
              },
              { level: 2, title: "选区操作", slug: "选区操作" },
              { level: 3, title: "getRange()", slug: "getrange" },
              {
                level: 3,
                title: "getRangeWithFlatten()",
                slug: "getrangewithflatten",
              },
              {
                level: 3,
                title: "getRangeValuesWithFlatte()",
                slug: "getrangevalueswithflatte",
              },
              { level: 3, title: "getRangeAxis()", slug: "getrangeaxis" },
              {
                level: 3,
                title: "getRangeValue([setting])",
                slug: "getrangevalue-setting",
              },
              {
                level: 3,
                title: "getRangeHtml([setting])",
                slug: "getrangehtml-setting",
              },
              {
                level: 3,
                title: "getRangeJson(title [,setting])",
                slug: "getrangejson-title-setting",
              },
              {
                level: 3,
                title: "getRangeArray(dimensional [,setting])",
                slug: "getrangearray-dimensional-setting",
              },
              {
                level: 3,
                title: "getRangeDiagonal(type [,setting])",
                slug: "getrangediagonal-type-setting",
              },
              {
                level: 3,
                title: "getRangeBoolean([setting])",
                slug: "getrangeboolean-setting",
              },
              {
                level: 3,
                title: "setRangeShow(range [,setting])",
                slug: "setrangeshow-range-setting",
              },
              {
                level: 3,
                title: "setRangeValue(data [,setting])",
                slug: "setrangevalue-data-setting",
              },
              {
                level: 3,
                title: "setRangeFormat(attr, value [,setting])",
                slug: "setrangeformat-attr-value-setting",
              },
              {
                level: 3,
                title: "setRangeFilter(type [,setting])",
                slug: "setrangefilter-type-setting",
              },
              {
                level: 3,
                title: "setRangeMerge(type [,setting])",
                slug: "setrangemerge-type-setting",
              },
              {
                level: 3,
                title: "cancelRangeMerge( [setting])",
                slug: "cancelrangemerge-setting",
              },
              {
                level: 3,
                title: "setRangeSort(type [,setting])",
                slug: "setrangesort-type-setting",
              },
              {
                level: 3,
                title: "setRangeSortMulti(title, sort [,setting])",
                slug: "setrangesortmulti-title-sort-setting",
              },
              {
                level: 3,
                title:
                  "setRangeConditionalFormatDefault(conditionName, conditionValue [,setting])",
                slug: "setrangeconditionalformatdefault-conditionname-conditionvalue-setting",
              },
              {
                level: 3,
                title: "setRangeConditionalFormat(type [,setting])",
                slug: "setrangeconditionalformat-type-setting",
              },
              {
                level: 3,
                title: "deleteRangeConditionalFormat(itemIndex [,setting])",
                slug: "deleterangeconditionalformat-itemindex-setting",
              },
              {
                level: 3,
                title: "clearRange([setting])",
                slug: "clearrange-setting",
              },
              {
                level: 3,
                title: "deleteRange(move [,setting])",
                slug: "deleterange-move-setting",
              },
              {
                level: 3,
                title: "insertRange(move [,setting])",
                slug: "insertrange-move-setting",
              },
              {
                level: 3,
                title: "matrixOperation(type [,setting])",
                slug: "matrixoperation-type-setting",
              },
              {
                level: 3,
                title: "matrixCalculation(type, number [,setting])",
                slug: "matrixcalculation-type-number-setting",
              },
              { level: 2, title: "工作表操作", slug: "工作表操作" },
              { level: 3, title: "getAllSheets()", slug: "getallsheets" },
              {
                level: 3,
                title: "getLuckysheetfile()",
                slug: "getluckysheetfile",
              },
              {
                level: 3,
                title: "getSheet([setting])",
                slug: "getsheet-setting",
              },
              {
                level: 3,
                title: "getSheetData([setting])",
                slug: "getsheetdata-setting",
              },
              {
                level: 3,
                title: "getConfig([setting])",
                slug: "getconfig-setting",
              },
              {
                level: 3,
                title: "setConfig(cfg, [setting])",
                slug: "setconfig-cfg-setting",
              },
              {
                level: 3,
                title: "updataSheet([setting])",
                slug: "updatasheet-setting",
              },
              {
                level: 3,
                title: "setSheetAdd([setting])",
                slug: "setsheetadd-setting",
              },
              {
                level: 3,
                title: "setSheetDelete([setting])",
                slug: "setsheetdelete-setting",
              },
              {
                level: 3,
                title: "setSheetCopy([setting])",
                slug: "setsheetcopy-setting",
              },
              {
                level: 3,
                title: "setSheetHide([setting])",
                slug: "setsheethide-setting",
              },
              {
                level: 3,
                title: "setSheetShow([setting])",
                slug: "setsheetshow-setting",
              },
              {
                level: 3,
                title: "setSheetActive(order [,setting])",
                slug: "setsheetactive-order-setting",
              },
              {
                level: 3,
                title: "setSheetName(name [,setting])",
                slug: "setsheetname-name-setting",
              },
              {
                level: 3,
                title: "setSheetColor(color [,setting])",
                slug: "setsheetcolor-color-setting",
              },
              {
                level: 3,
                title: "setSheetMove(type [,setting])",
                slug: "setsheetmove-type-setting",
              },
              {
                level: 3,
                title: "setSheetOrder(orderList [,setting])",
                slug: "setsheetorder-orderlist-setting",
              },
              {
                level: 3,
                title: "setSheetZoom(zoom [,setting])",
                slug: "setsheetzoom-zoom-setting",
              },
              {
                level: 3,
                title: "showGridLines([setting])",
                slug: "showgridlines-setting",
              },
              {
                level: 3,
                title: "hideGridLines([setting])",
                slug: "hidegridlines-setting",
              },
              { level: 2, title: "工作簿操作", slug: "工作簿操作" },
              { level: 3, title: "create(options)", slug: "create-options" },
              {
                level: 3,
                title: "refresh([setting])",
                slug: "refresh-setting",
              },
              { level: 3, title: "scroll([setting])", slug: "scroll-setting" },
              { level: 3, title: "resize([setting])", slug: "resize-setting" },
              {
                level: 3,
                title: "destroy([setting])",
                slug: "destroy-setting",
              },
              {
                level: 3,
                title: "getScreenshot([setting])",
                slug: "getscreenshot-setting",
              },
              {
                level: 3,
                title: "setWorkbookName(name [,setting])",
                slug: "setworkbookname-name-setting",
              },
              {
                level: 3,
                title: "getWorkbookName([,setting])",
                slug: "getworkbookname-setting",
              },
              { level: 3, title: "undo([setting])", slug: "undo-setting" },
              { level: 3, title: "redo([setting])", slug: "redo-setting" },
              {
                level: 3,
                title: "refreshFormula([success])",
                slug: "refreshformula-success",
              },
              {
                level: 3,
                title: "pagerInit([setting])",
                slug: "pagerinit-setting",
              },
              {
                level: 3,
                title: "refreshMenuButtonFocus([data],[r],[c],[success])",
                slug: "refreshmenubuttonfocus-data-r-c-success",
              },
              {
                level: 3,
                title: "checkTheStatusOfTheSelectedCells(type,status)",
                slug: "checkthestatusoftheselectedcells-type-status",
              },
              { level: 2, title: "图表", slug: "图表" },
              {
                level: 3,
                title: "insertChart([setting])",
                slug: "insertchart-setting",
              },
              {
                level: 3,
                title: "setChart(chartId, attr, value [,setting])",
                slug: "setchart-chartid-attr-value-setting",
              },
              {
                level: 3,
                title: "getChart(chartId)",
                slug: "getchart-chartid",
              },
              {
                level: 3,
                title: "deleteChart(chartId [,setting])",
                slug: "deletechart-chartid-setting",
              },
              { level: 2, title: "数据验证", slug: "数据验证" },
              {
                level: 3,
                title: "setDataVerification(optionItem, [setting])",
                slug: "setdataverification-optionitem-setting",
              },
              {
                level: 3,
                title: "deleteDataVerification([setting])",
                slug: "deletedataverification-setting",
              },
              { level: 2, title: "图片", slug: "图片" },
              {
                level: 3,
                title: "insertImage(src, [setting])",
                slug: "insertimage-src-setting",
              },
              {
                level: 3,
                title: "deleteImage([setting])",
                slug: "deleteimage-setting",
              },
              {
                level: 3,
                title: "getImageOption([setting])",
                slug: "getimageoption-setting",
              },
              { level: 2, title: "工作表保护", slug: "工作表保护" },
              {
                level: 3,
                title: "setProtection(option, [setting])",
                slug: "setprotection-option-setting",
              },
              { level: 2, title: "工具方法", slug: "工具方法" },
              {
                level: 3,
                title: "transToCellData(data [,setting])",
                slug: "transtocelldata-data-setting",
              },
              {
                level: 3,
                title: "transToData(celldata [,setting])",
                slug: "transtodata-celldata-setting",
              },
              { level: 3, title: "toJson()", slug: "tojson" },
              { level: 3, title: "changLang([lang])", slug: "changlang-lang" },
              { level: 3, title: "closeWebsocket()", slug: "closewebsocket" },
              {
                level: 3,
                title: "openSearchDialog()",
                slug: "opensearchdialog",
              },
              {
                level: 3,
                title: "getRangeByTxt([txt])",
                slug: "getrangebytxt-txt",
              },
              {
                level: 3,
                title: "getTxtByRange([range])",
                slug: "gettxtbyrange-range",
              },
              { level: 2, title: "旧版API", slug: "旧版api" },
              {
                level: 3,
                title: "getcellvalue([r] [,c] [,data] [,type])",
                slug: "getcellvalue-r-c-data-type",
              },
              {
                level: 3,
                title: "getluckysheetfile()",
                slug: "getluckysheetfile-2",
              },
              { level: 3, title: "getconfig()", slug: "getconfig" },
              {
                level: 3,
                title: "getluckysheetselectsave()",
                slug: "getluckysheet-select-save",
              },
              {
                level: 3,
                title: "getdatabyselection([range] [,sheetOrder])",
                slug: "getdatabyselection-range-sheetorder",
              },
              {
                level: 3,
                title: "luckysheetrefreshgrid(scrollWidth, scrollHeight)",
                slug: "luckysheetrefreshgrid-scrollwidth-scrollheight",
              },
              {
                level: 3,
                title: "setcellvalue(r, c, d, v)",
                slug: "setcellvalue-r-c-d-v",
              },
              { level: 3, title: "jfrefreshgrid()", slug: "jfrefreshgrid" },
              {
                level: 3,
                title: "setluckysheetselectsave(v)",
                slug: "setluckysheet-select-save-v",
              },
              {
                level: 3,
                title: "selectHightlightShow()",
                slug: "selecthightlightshow",
              },
              { level: 3, title: "flowdata()", slug: "flowdata" },
              {
                level: 3,
                title: "buildGridData(file)",
                slug: "buildgriddata-file",
              },
              {
                level: 3,
                title: "getGridData(data)",
                slug: "getgriddata-data",
              },
            ],
            lastUpdated: "2023/5/17 16:50:54",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "单元格",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "单元格" },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/cell.html",
                },
                { name: "twitter:title", content: "单元格" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/cell.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/cell.html",
            relativePath: "guide/cell.md",
            key: "v-f63f189c",
            path: "/guide/cell.html",
            headers: [
              { level: 2, title: "基本单元格", slug: "基本单元格" },
              {
                level: 3,
                title: "为什么会有原始值 v 和显示值 m 的区分？",
                slug: "为什么会有原始值-v-和显示值-m-的区分",
              },
              { level: 2, title: "合并单元格", slug: "合并单元格" },
              { level: 2, title: "含边框单元格", slug: "含边框单元格" },
              { level: 2, title: "简化的单元格数据", slug: "简化的单元格数据" },
              { level: 2, title: "单元格值格式", slug: "单元格值格式" },
              { level: 3, title: "可选择的设置如下", slug: "可选择的设置如下" },
            ],
            lastUpdated: "2023/5/17 16:50:54",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "整体配置",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "整体配置" },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/config.html",
                },
                { name: "twitter:title", content: "整体配置" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/config.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/config.html",
            relativePath: "guide/config.md",
            key: "v-cb20cf9c",
            path: "/guide/config.html",
            headers: [
              { level: 2, title: "基础结构", slug: "基础结构" },
              { level: 2, title: "配置项", slug: "配置项" },
              { level: 3, title: "container", slug: "container" },
              { level: 3, title: "title", slug: "title" },
              { level: 3, title: "lang", slug: "lang" },
              { level: 3, title: "gridKey", slug: "gridkey" },
              { level: 3, title: "loadUrl", slug: "loadurl" },
              { level: 3, title: "loadSheetUrl", slug: "loadsheeturl" },
              { level: 3, title: "allowUpdate", slug: "allowupdate" },
              { level: 3, title: "updateUrl", slug: "updateurl" },
              { level: 3, title: "updateImageUrl", slug: "updateimageurl" },
              { level: 3, title: "data", slug: "data" },
              { level: 3, title: "plugins", slug: "plugins" },
              { level: 3, title: "column", slug: "column" },
              { level: 3, title: "row", slug: "row" },
              { level: 3, title: "autoFormatw", slug: "autoformatw" },
              { level: 3, title: "accuracy", slug: "accuracy" },
              { level: 3, title: "allowCopy", slug: "allowcopy" },
              { level: 3, title: "showtoolbar", slug: "showtoolbar" },
              {
                level: 3,
                title: "showtoolbarConfig",
                slug: "showtoolbarconfig",
              },
              { level: 3, title: "showinfobar", slug: "showinfobar" },
              { level: 3, title: "showsheetbar", slug: "showsheetbar" },
              {
                level: 3,
                title: "showsheetbarConfig",
                slug: "showsheetbarconfig",
              },
              { level: 3, title: "showstatisticBar", slug: "showstatisticbar" },
              {
                level: 3,
                title: "showstatisticBarConfig",
                slug: "showstatisticbarconfig",
              },
              { level: 3, title: "enableAddRow", slug: "enableaddrow" },
              { level: 3, title: "addRowCount", slug: "addrowcount" },
              { level: 3, title: "enableAddBackTop", slug: "enableaddbacktop" },
              { level: 3, title: "userInfo", slug: "userinfo" },
              { level: 3, title: "userMenuItem", slug: "usermenuitem" },
              { level: 3, title: "myFolderUrl", slug: "myfolderurl" },
              { level: 3, title: "devicePixelRatio", slug: "devicepixelratio" },
              { level: 3, title: "functionButton", slug: "functionbutton" },
              {
                level: 3,
                title: "showConfigWindowResize",
                slug: "showconfigwindowresize",
              },
              { level: 3, title: "forceCalculation", slug: "forcecalculation" },
              {
                level: 3,
                title: "cellRightClickConfig",
                slug: "cellrightclickconfig",
              },
              {
                level: 3,
                title: "sheetRightClickConfig",
                slug: "sheetrightclickconfig",
              },
              { level: 3, title: "rowHeaderWidth", slug: "rowheaderwidth" },
              {
                level: 3,
                title: "columnHeaderHeight",
                slug: "columnheaderheight",
              },
              { level: 3, title: "sheetFormulaBar", slug: "sheetformulabar" },
              { level: 3, title: "defaultFontSize", slug: "defaultfontsize" },
              {
                level: 3,
                title: "limitSheetNameLength",
                slug: "limitsheetnamelength",
              },
              {
                level: 3,
                title: "defaultSheetNameMaxLength",
                slug: "defaultsheetnamemaxlength",
              },
              { level: 3, title: "pager", slug: "pager" },
              { level: 3, title: "uploadImage", slug: "uploadimage" },
              { level: 3, title: "imageUrlHandle", slug: "imageurlhandle" },
              { level: 2, title: "钩子函数", slug: "钩子函数" },
              { level: 2, title: "单元格", slug: "单元格" },
              { level: 3, title: "cellEditBefore", slug: "celleditbefore" },
              { level: 3, title: "cellUpdateBefore", slug: "cellupdatebefore" },
              { level: 3, title: "cellUpdated", slug: "cellupdated" },
              { level: 3, title: "cellRenderBefore", slug: "cellrenderbefore" },
              { level: 3, title: "cellRenderAfter", slug: "cellrenderafter" },
              {
                level: 3,
                title: "cellAllRenderBefore",
                slug: "cellallrenderbefore",
              },
              {
                level: 3,
                title: "rowTitleCellRenderBefore",
                slug: "rowtitlecellrenderbefore",
              },
              {
                level: 3,
                title: "rowTitleCellRenderAfter",
                slug: "rowtitlecellrenderafter",
              },
              {
                level: 3,
                title: "columnTitleCellRenderBefore",
                slug: "columntitlecellrenderbefore",
              },
              {
                level: 3,
                title: "columnTitleCellRenderAfter",
                slug: "columntitlecellrenderafter",
              },
              { level: 2, title: "鼠标钩子", slug: "鼠标钩子" },
              {
                level: 3,
                title: "cellMousedownBefore",
                slug: "cellmousedownbefore",
              },
              { level: 3, title: "cellMousedown", slug: "cellmousedown" },
              { level: 3, title: "sheetMousemove", slug: "sheetmousemove" },
              { level: 3, title: "sheetMouseup", slug: "sheetmouseup" },
              { level: 3, title: "scroll", slug: "scroll" },
              { level: 3, title: "cellDragStop", slug: "celldragstop" },
              {
                level: 2,
                title: "选区操作（包括单元格）",
                slug: "选区操作-包括单元格",
              },
              { level: 3, title: "rangeSelect", slug: "rangeselect" },
              { level: 3, title: "rangeMoveBefore", slug: "rangemovebefore" },
              { level: 3, title: "rangeMoveAfter", slug: "rangemoveafter" },
              { level: 3, title: "rangeEditBefore", slug: "rangeeditbefore" },
              { level: 3, title: "rangeEditAfter", slug: "rangeeditafter" },
              { level: 3, title: "rangeCopyBefore", slug: "rangecopybefore" },
              { level: 3, title: "rangeCopyAfter", slug: "rangecopyafter" },
              { level: 3, title: "rangePasteBefore", slug: "rangepastebefore" },
              { level: 3, title: "rangePasteAfter", slug: "rangepasteafter" },
              { level: 3, title: "rangeCutBefore", slug: "rangecutbefore" },
              { level: 3, title: "rangeCutAfter", slug: "rangecutafter" },
              {
                level: 3,
                title: "rangeDeleteBefore",
                slug: "rangedeletebefore",
              },
              { level: 3, title: "rangeDeleteAfter", slug: "rangedeleteafter" },
              { level: 3, title: "rangeClearBefore", slug: "rangeclearbefore" },
              { level: 3, title: "rangeClearAfter", slug: "rangeclearafter" },
              { level: 3, title: "rangePullBefore", slug: "rangepullbefore" },
              { level: 3, title: "rangePullAfter", slug: "rangepullafter" },
              { level: 2, title: "工作表", slug: "工作表" },
              {
                level: 3,
                title: "sheetCreateBefore",
                slug: "sheetcreatebefore",
              },
              { level: 3, title: "sheetCreateAfter", slug: "sheetcreateafter" },
              { level: 3, title: "sheetCopyBefore", slug: "sheetcopybefore" },
              { level: 3, title: "sheetCopyAfter", slug: "sheetcopyafter" },
              { level: 3, title: "sheetHideBefore", slug: "sheethidebefore" },
              { level: 3, title: "sheetHideAfter", slug: "sheethideafter" },
              { level: 3, title: "sheetShowBefore", slug: "sheetshowbefore" },
              { level: 3, title: "sheetShowAfter", slug: "sheetshowafter" },
              { level: 3, title: "sheetMoveBefore", slug: "sheetmovebefore" },
              { level: 3, title: "sheetMoveAfter", slug: "sheetmoveafter" },
              {
                level: 3,
                title: "sheetDeleteBefore",
                slug: "sheetdeletebefore",
              },
              { level: 3, title: "sheetDeleteAfter", slug: "sheetdeleteafter" },
              {
                level: 3,
                title: "sheetEditNameBefore",
                slug: "sheeteditnamebefore",
              },
              {
                level: 3,
                title: "sheetEditNameAfter",
                slug: "sheeteditnameafter",
              },
              {
                level: 3,
                title: "sheetEditColorBefore",
                slug: "sheeteditcolorbefore",
              },
              {
                level: 3,
                title: "sheetEditColorAfter",
                slug: "sheeteditcolorafter",
              },
              { level: 3, title: "sheetZoomBefore", slug: "sheetzoombefore" },
              { level: 3, title: "sheetZoomAfter", slug: "sheetzoomafter" },
              { level: 3, title: "sheetActivate", slug: "sheetactivate" },
              {
                level: 3,
                title: "sheetDeactivateBefore",
                slug: "sheetdeactivatebefore",
              },
              {
                level: 3,
                title: "sheetDeactivateAfter",
                slug: "sheetdeactivateafter",
              },
              {
                level: 3,
                title: "imageDeleteBefore",
                slug: "imagedeletebefore",
              },
              { level: 3, title: "imageDeleteAfter", slug: "imagedeleteafter" },
              { level: 2, title: "工作簿", slug: "工作簿" },
              {
                level: 3,
                title: "workbookCreateBefore",
                slug: "workbookcreatebefore",
              },
              {
                level: 3,
                title: "workbookCreateAfter",
                slug: "workbookcreateafter",
              },
              {
                level: 3,
                title: "workbookDestroyBefore",
                slug: "workbookdestroybefore",
              },
              {
                level: 3,
                title: "workbookDestroyAfter",
                slug: "workbookdestroyafter",
              },
              { level: 3, title: "updated", slug: "updated" },
              { level: 3, title: "resized", slug: "resized" },
              { level: 3, title: "scroll", slug: "scroll-2" },
              { level: 2, title: "协作消息", slug: "协作消息" },
              {
                level: 3,
                title: "cooperativeMessage",
                slug: "cooperativemessage",
              },
              { level: 2, title: "图片", slug: "图片" },
              {
                level: 3,
                title: "imageInsertBefore",
                slug: "imageinsertbefore",
              },
              { level: 3, title: "imageInsertAfter", slug: "imageinsertafter" },
              {
                level: 3,
                title: "imageUpdateBefore",
                slug: "imageupdatebefore",
              },
              { level: 3, title: "imageUpdateAfter", slug: "imageupdateafter" },
              {
                level: 3,
                title: "imageDeleteBefore",
                slug: "imagedeletebefore-2",
              },
              {
                level: 3,
                title: "imageDeleteAfter",
                slug: "imagedeleteafter-2",
              },
              { level: 2, title: "批注", slug: "批注" },
              {
                level: 3,
                title: "commentInsertBefore",
                slug: "commentinsertbefore",
              },
              {
                level: 3,
                title: "commentInsertAfter",
                slug: "commentinsertafter",
              },
              {
                level: 3,
                title: "commentDeleteBefore",
                slug: "commentdeletebefore",
              },
              {
                level: 3,
                title: "commentDeleteAfter",
                slug: "commentdeleteafter",
              },
              {
                level: 3,
                title: "commentUpdateBefore",
                slug: "commentupdatebefore",
              },
              {
                level: 3,
                title: "commentUpdateAfter",
                slug: "commentupdateafter",
              },
              { level: 2, title: "数据透视表", slug: "数据透视表" },
              {
                level: 3,
                title: "pivotTableEditBefore",
                slug: "pivottableeditbefore",
              },
              {
                level: 3,
                title: "pivotTableEditAfter",
                slug: "pivottableeditafter",
              },
              { level: 2, title: "冻结", slug: "冻结" },
              {
                level: 3,
                title: "frozenCreateBefore",
                slug: "frozencreatebefore",
              },
              {
                level: 3,
                title: "frozenCreateAfter",
                slug: "frozencreateafter",
              },
              {
                level: 3,
                title: "frozenCancelBefore",
                slug: "frozencancelbefore",
              },
              {
                level: 3,
                title: "frozenCancelAfter",
                slug: "frozencancelafter",
              },
              { level: 2, title: "打印", slug: "打印" },
              { level: 3, title: "printBefore", slug: "printbefore" },
              { level: 2, title: "旧版钩子函数", slug: "旧版钩子函数" },
              { level: 3, title: "fireMousedown", slug: "firemousedown" },
              { level: 2, title: "分页器", slug: "分页器" },
              { level: 3, title: "onTogglePager", slug: "ontogglepager" },
            ],
            lastUpdated: "2023/5/17 16:50:54",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "贡献指南",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "贡献指南" },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/contribute.html",
                },
                { name: "twitter:title", content: "贡献指南" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/contribute.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/contribute.html",
            relativePath: "guide/contribute.md",
            key: "v-52c084dc",
            path: "/guide/contribute.html",
            headers: [
              { level: 2, title: "我们的行为准则", slug: "我们的行为准则" },
              { level: 2, title: "如何参与贡献？", slug: "如何参与贡献" },
              { level: 2, title: "如何提交 Issues", slug: "如何提交-issues" },
              { level: 2, title: "如何认领 Issues", slug: "如何认领-issues" },
              { level: 2, title: "如何提交代码", slug: "如何提交代码" },
              { level: 2, title: "代码规范", slug: "代码规范" },
              { level: 2, title: "如何贡献文档", slug: "如何贡献文档" },
              {
                level: 2,
                title: "如何成为Luckysheet Committer",
                slug: "如何成为luckysheet-committer",
              },
            ],
            lastUpdated: "2023/5/17 16:50:54",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "表格操作",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "表格操作" },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/operate.html",
                },
                { name: "twitter:title", content: "表格操作" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/operate.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/operate.html",
            relativePath: "guide/operate.md",
            key: "v-588f1a3e",
            path: "/guide/operate.html",
            headers: [
              { level: 2, title: "单元格刷新", slug: "单元格刷新" },
              { level: 3, title: "单个单元格刷新", slug: "单个单元格刷新" },
              { level: 3, title: "范围单元格刷新", slug: "范围单元格刷新" },
              { level: 2, title: "config操作", slug: "config操作" },
              { level: 2, title: "通用保存", slug: "通用保存" },
              { level: 2, title: "函数链操作", slug: "函数链操作" },
              { level: 2, title: "行列操作", slug: "行列操作" },
              { level: 3, title: "删除行或列", slug: "删除行或列" },
              { level: 3, title: "增加行或列", slug: "增加行或列" },
              { level: 2, title: "筛选操作", slug: "筛选操作" },
              { level: 3, title: "清除筛选", slug: "清除筛选" },
              { level: 3, title: "恢复筛选", slug: "恢复筛选" },
              { level: 2, title: "sheet操作", slug: "sheet操作" },
              { level: 3, title: "新建sheet", slug: "新建sheet" },
              { level: 3, title: "复制sheet", slug: "复制sheet" },
              { level: 3, title: "删除sheet", slug: "删除sheet" },
              {
                level: 3,
                title: "删除sheet后恢复操作",
                slug: "删除sheet后恢复操作",
              },
              { level: 3, title: "调整sheet位置", slug: "调整sheet位置" },
              { level: 3, title: "切换到指定sheet", slug: "切换到指定sheet" },
              {
                level: 2,
                title: "sheet属性(隐藏或显示)",
                slug: "sheet属性-隐藏或显示",
              },
              { level: 2, title: "表格信息更改", slug: "表格信息更改" },
              { level: 3, title: "修改工作簿名称", slug: "修改工作簿名称" },
              { level: 2, title: "图表(TODO)", slug: "图表-todo" },
              { level: 3, title: "新增图表", slug: "新增图表" },
              { level: 3, title: "移动图表位置", slug: "移动图表位置" },
              { level: 3, title: "缩放图表", slug: "缩放图表" },
              { level: 3, title: "修改图表配置", slug: "修改图表配置" },
              { level: 2, title: "后端返回格式", slug: "后端返回格式" },
            ],
            lastUpdated: "2023/5/17 16:50:54",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "教程与资源",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "教程与资源" },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/resource.html",
                },
                { name: "twitter:title", content: "教程与资源" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/resource.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/resource.html",
            relativePath: "guide/resource.md",
            key: "v-10587132",
            path: "/guide/resource.html",
            headers: [
              { level: 2, title: "博客", slug: "博客" },
              { level: 2, title: "前端案例", slug: "前端案例" },
              { level: 3, title: "社区案例", slug: "社区案例" },
              { level: 2, title: "后端案例", slug: "后端案例" },
              { level: 3, title: "官方案例", slug: "官方案例" },
              { level: 3, title: "社区案例", slug: "社区案例-2" },
              { level: 2, title: "学习资料", slug: "学习资料" },
            ],
            lastUpdated: "2023/5/17 16:50:54",
            lastUpdatedTimestamp: 1684313454e3,
          },
          {
            title: "工作表配置",
            frontmatter: {
              meta: [
                {
                  property: "article:modified_time",
                  content: "2024-04-17T08:50:54.000Z",
                },
                { property: "og:title", content: "工作表配置" },
                { property: "og:type", content: "website" },
                {
                  property: "og:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/sheet.html",
                },
                { name: "twitter:title", content: "工作表配置" },
                {
                  name: "twitter:url",
                  content:
                    "https://servequery.github.io/datadocs/guide/sheet.html",
                },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:label1", content: "Written by" },
              ],
            },
            regularPath: "/guide/sheet.html",
            relativePath: "guide/sheet.md",
            key: "v-1e5dcff0",
            path: "/guide/sheet.html",
            headers: [
              { level: 2, title: "初始化配置", slug: "初始化配置" },
              { level: 3, title: "name", slug: "name" },
              { level: 3, title: "color", slug: "color" },
              { level: 3, title: "index", slug: "index" },
              { level: 3, title: "status", slug: "status" },
              { level: 3, title: "order", slug: "order" },
              { level: 3, title: "hide", slug: "hide" },
              { level: 3, title: "row", slug: "row" },
              { level: 3, title: "column", slug: "column" },
              { level: 3, title: "defaultRowHeight", slug: "defaultrowheight" },
              { level: 3, title: "defaultColWidth", slug: "defaultcolwidth" },
              { level: 3, title: "celldata", slug: "celldata" },
              { level: 3, title: "config", slug: "config" },
              { level: 3, title: "scrollLeft", slug: "scrollleft" },
              { level: 3, title: "scrollTop", slug: "scrolltop" },
              {
                level: 3,
                title: "luckysheetselectsave",
                slug: "datadocs-select-save",
              },
              { level: 3, title: "calcChain", slug: "calcchain" },
              { level: 3, title: "isPivotTable", slug: "ispivottable" },
              { level: 3, title: "pivotTable", slug: "pivottable" },
              { level: 3, title: "filter_select", slug: "filter-select" },
              { level: 3, title: "filter", slug: "filter" },
              {
                level: 3,
                title: "luckysheetalternateformatsave",
                slug: "datadocs-alternateformat-save",
              },
              {
                level: 3,
                title: "luckysheetalternateformatsave_modelCustom",
                slug: "datadocs-alternateformat-save-modelcustom",
              },
              {
                level: 3,
                title: "luckysheetconditionformatsave",
                slug: "datadocs-conditionformat-save",
              },
              { level: 3, title: "frozen", slug: "frozen" },
              { level: 3, title: "chart", slug: "chart" },
              { level: 3, title: "zoomRatio", slug: "zoomratio" },
              { level: 3, title: "image", slug: "image" },
              { level: 3, title: "showGridLines", slug: "showgridlines" },
              { level: 3, title: "dataVerification", slug: "dataverification" },
              { level: 2, title: "调试信息", slug: "调试信息" },
              { level: 3, title: "visibledatarow", slug: "visibledatarow" },
              {
                level: 3,
                title: "visibledatacolumn",
                slug: "visibledatacolumn",
              },
              { level: 3, title: "ch_width", slug: "ch-width" },
              { level: 3, title: "rh_height", slug: "rh-height" },
              { level: 3, title: "load", slug: "load" },
              { level: 3, title: "data", slug: "data" },
            ],
            lastUpdated: "2023/5/17 16:50:54",
            lastUpdatedTimestamp: 1684313454e3,
          },
        ],
        themeConfig: {
          domain: "https://servequery.github.io/datadocs",
          logo: "/img/logo.png",
          author: "DataDocs",
          repo: "mengshukeji/DataDocs",
          editLinks: !0,
          docsDir: "docs",
          smoothScroll: !0,
          locales: {
            "/": {
              selectText: "Languages",
              label: "English",
              ariaLabel: "Select language",
              editLinkText: "Edit this page on GitHub",
              lastUpdated: "Last Updated",
              serviceWorker: {
                updatePopup: {
                  message: "New content is available.",
                  buttonText: "Refresh",
                },
              },
              nav: [
                { text: "Home", link: "/" },
                { text: "Guide", link: "/guide/" },
                {
                  text: "Demo",
                  link: "https://servequery.github.io/datadocs/",
                },
                {
                  text: "More",
                  ariaLabel: "More",
                  items: [{ text: "About", link: "/about/" }],
                },
              ],
              sidebar: {
                "/guide/": [
                  "",
                  "config",
                  "sheet",
                  "cell",
                  "operate",
                  "api",
                  "resource",
                  "FAQ",
                  "contribute",
                ],
                "/about/": ["", "sponsor", "company"],
              },
            },
            "/": {
              selectText: "选择语言",
              label: "简体中文",
              ariaLabel: "选择语言",
              editLinkText: "在 GitHub 上编辑此页",
              lastUpdated: "上次更新",
              serviceWorker: {
                updatePopup: { message: "发现新内容可用.", buttonText: "刷新" },
              },
              nav: [
                { text: "首页", link: "/" },
                { text: "指南", link: "/guide/" },
                {
                  text: "演示",
                  link: "https://servequery.github.io/datadocs/",
                },
                {
                  text: "了解更多",
                  ariaLabel: "了解更多",
                  items: [{ text: "关于", link: "/about/" }],
                },
              ],
              sidebar: {
                "/guide/": [
                  "",
                  "config",
                  "sheet",
                  "cell",
                  "operate",
                  "api",
                  "resource",
                  "FAQ",
                  "contribute",
                ],
                "/about/": ["", "sponsor", "company"],
              },
            },
          },
        },
        locales: {
          "/": {
            lang: "en-US",
            title: "Data Docs",
            description: "DataDocs is an online spreadsheet database tool.",
            path: "/",
          },
          "/": {
            lang: "zh-CN",
            title: "Luckysheet文档",
            description:
              "DataDocs ，一款纯前端类似excel的在线表格，功能强大、配置简单、完全开源。本站包含官方配置文档,API,教程。",
            path: "/",
          },
        },
      };
    n(238);
    Zn.component("Badge", () =>
      Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 307))
    ),
      Zn.component("CodeBlock", () =>
        Promise.all([n.e(0), n.e(5)]).then(n.bind(null, 303))
      ),
      Zn.component("CodeGroup", () =>
        Promise.all([n.e(0), n.e(6)]).then(n.bind(null, 304))
      );
    n(239), n(240);
    function Ma(e) {
      const t = document.documentElement.getBoundingClientRect(),
        n = e.getBoundingClientRect();
      return { x: n.left - t.left, y: n.top - t.top };
    }
    var Ba = [
        {},
        ({ Vue: e }) => {
          e.mixin({
            computed: {
              $dataBlock() {
                return this.$options.__data__block__;
              },
            },
          });
        },
        {},
        {},
        ({ Vue: e, router: t }) => {
          t.options.scrollBehavior = (t, n, r) => {
            if (r) return window.scrollTo({ top: r.y, behavior: "smooth" });
            if (t.hash) {
              if (e.$vuepress.$get("disableScrollBehavior")) return !1;
              const n = document.querySelector(t.hash);
              return (
                !!n && window.scrollTo({ top: Ma(n).y, behavior: "smooth" })
              );
            }
            return window.scrollTo({ top: 0, behavior: "smooth" });
          };
        },
        ({ router: e }) => {
          "undefined" != typeof window &&
            (function () {
              var e = document.createElement("script"),
                t = window.location.protocol.split(":")[0];
              e.src =
                "https" === t
                  ? "https://zz.bdstatic.com/linksubmit/push.js"
                  : "http://push.zhanzhang.baidu.com/push.js";
              var n = document.getElementsByTagName("script")[0];
              n.parentNode.insertBefore(e, n);
            })();
        },
        ({ Vue: e }) => {
          e.component("CodeCopy", Pa);
        },
      ],
      Ua = [];
    class Fa extends class {
      constructor() {
        this.store = new Zn({ data: { state: {} } });
      }
      $get(e) {
        return this.store.state[e];
      }
      $set(e, t) {
        Zn.set(this.store.state, e, t);
      }
      $emit(...e) {
        this.store.$emit(...e);
      }
      $on(...e) {
        this.store.$on(...e);
      }
    } {}
    Object.assign(Fa.prototype, {
      getPageAsyncComponent: aa,
      getLayoutAsyncComponent: sa,
      getAsyncComponent: ua,
      getVueComponent: ca,
    });
    var Na = {
      install(e) {
        const t = new Fa();
        (e.$vuepress = t), (e.prototype.$vuepress = t);
      },
    };
    function Ha(e, t) {
      const n = t.toLowerCase();
      return e.options.routes.some((e) => e.path.toLowerCase() === n);
    }
    var Wa = {
        props: {
          pageKey: String,
          slotKey: { type: String, default: "default" },
        },
        render(e) {
          const t = this.pageKey || this.$parent.$page.key;
          return (
            pa("pageKey", t),
            Zn.component(t) || Zn.component(t, aa(t)),
            Zn.component(t) ? e(t) : e("")
          );
        },
      },
      Va = {
        functional: !0,
        props: { slotKey: String, required: !0 },
        render: (e, { props: t, slots: n }) =>
          e("div", { class: ["content__" + t.slotKey] }, n()[t.slotKey]),
      },
      qa = {
        computed: {
          openInNewWindowTitle() {
            return (
              this.$themeLocaleConfig.openNewWindowText || "(opens new window)"
            );
          },
        },
      },
      Za =
        (n(241),
        n(242),
        Object(Ea.a)(
          qa,
          function () {
            var e = this._self._c;
            return e("span", [
              e(
                "svg",
                {
                  staticClass: "icon outbound",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true",
                    focusable: "false",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 100 100",
                    width: "15",
                    height: "15",
                  },
                },
                [
                  e("path", {
                    attrs: {
                      fill: "currentColor",
                      d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z",
                    },
                  }),
                  this._v(" "),
                  e("polygon", {
                    attrs: {
                      fill: "currentColor",
                      points:
                        "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9",
                    },
                  }),
                ]
              ),
              this._v(" "),
              e("span", { staticClass: "sr-only" }, [
                this._v(this._s(this.openInNewWindowTitle)),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports),
      Ga = {
        functional: !0,
        render(e, { parent: t, children: n }) {
          if (t._isMounted) return n;
          t.$once("hook:mounted", () => {
            t.$forceUpdate();
          });
        },
      };
    (Zn.config.productionTip = !1),
      Zn.use(Vl),
      Zn.use(Na),
      Zn.mixin(
        (function (e, t, n = Zn) {
          !(function (e) {
            e.locales &&
              Object.keys(e.locales).forEach((t) => {
                e.locales[t].path = t;
              });
            Object.freeze(e);
          })(t),
            n.$vuepress.$set("siteData", t);
          const r = new (e(n.$vuepress.$get("siteData")))(),
            o = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(r)),
            i = {};
          return (
            Object.keys(o).reduce(
              (e, t) => (t.startsWith("$") && (e[t] = o[t].get), e),
              i
            ),
            { computed: i }
          );
        })(
          (e) =>
            class {
              setPage(e) {
                this.__page = e;
              }
              get $site() {
                return e;
              }
              get $themeConfig() {
                return this.$site.themeConfig;
              }
              get $frontmatter() {
                return this.$page.frontmatter;
              }
              get $localeConfig() {
                const { locales: e = {} } = this.$site;
                let t, n;
                for (const r in e)
                  "/" === r
                    ? (n = e[r])
                    : 0 === this.$page.path.indexOf(r) && (t = e[r]);
                return t || n || {};
              }
              get $siteTitle() {
                return this.$localeConfig.title || this.$site.title || "";
              }
              get $canonicalUrl() {
                const { canonicalUrl: e } = this.$page.frontmatter;
                return "string" == typeof e && e;
              }
              get $title() {
                const e = this.$page,
                  { metaTitle: t } = this.$page.frontmatter;
                if ("string" == typeof t) return t;
                const n = this.$siteTitle,
                  r = e.frontmatter.home
                    ? null
                    : e.frontmatter.title || e.title;
                return n ? (r ? r + " | " + n : n) : r || "VuePress";
              }
              get $description() {
                const e = (function (e) {
                  if (e) {
                    const t = e.filter((e) => "description" === e.name)[0];
                    if (t) return t.content;
                  }
                })(this.$page.frontmatter.meta);
                return (
                  e ||
                  this.$page.frontmatter.description ||
                  this.$localeConfig.description ||
                  this.$site.description ||
                  ""
                );
              }
              get $lang() {
                return (
                  this.$page.frontmatter.lang ||
                  this.$localeConfig.lang ||
                  "en-US"
                );
              }
              get $localePath() {
                return this.$localeConfig.path || "/";
              }
              get $themeLocaleConfig() {
                return (
                  (this.$site.themeConfig.locales || {})[this.$localePath] || {}
                );
              }
              get $page() {
                return this.__page
                  ? this.__page
                  : (function (e, t) {
                      for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        if (r.path.toLowerCase() === t.toLowerCase()) return r;
                      }
                      return { path: "", frontmatter: {} };
                    })(this.$site.pages, this.$route.path);
              }
            },
          Ia
        )
      ),
      Zn.component("Content", Wa),
      Zn.component("ContentSlotsDistributor", Va),
      Zn.component("OutboundLink", Za),
      Zn.component("ClientOnly", Ga),
      Zn.component("Layout", sa("Layout")),
      Zn.component("NotFound", sa("NotFound")),
      (Zn.prototype.$withBase = function (e) {
        const t = this.$site.base;
        return "/" === e.charAt(0) ? t + e.slice(1) : e;
      }),
      (window.__VUEPRESS__ = { version: "1.9.10", hash: "b418f33" }),
      (async function (e) {
        const t =
            "undefined" != typeof window && window.__VUEPRESS_ROUTER_BASE__
              ? window.__VUEPRESS_ROUTER_BASE__
              : Ia.routerBase || Ia.base,
          n = new Vl({
            base: t,
            mode: "history",
            fallback: !1,
            routes: Da,
            scrollBehavior: (e, t, n) =>
              n ||
              (e.hash
                ? !Zn.$vuepress.$get("disableScrollBehavior") && {
                    selector: decodeURIComponent(e.hash),
                  }
                : { x: 0, y: 0 }),
          });
        !(function (e) {
          e.beforeEach((t, n, r) => {
            if (Ha(e, t.path)) r();
            else if (/(\/|\.html)$/.test(t.path))
              if (/\/$/.test(t.path)) {
                const n = t.path.replace(/\/$/, "") + ".html";
                Ha(e, n) ? r(n) : r();
              } else r();
            else {
              const n = t.path + "/",
                o = t.path + ".html";
              Ha(e, o) ? r(o) : Ha(e, n) ? r(n) : r();
            }
          });
        })(n);
        const r = {};
        try {
          await Promise.all(
            Ba.filter((e) => "function" == typeof e).map((t) =>
              t({ Vue: Zn, options: r, router: n, siteData: Ia, isServer: e })
            )
          );
        } catch (e) {
          console.error(e);
        }
        return {
          app: new Zn(
            Object.assign(r, {
              router: n,
              render: (e) =>
                e("div", { attrs: { id: "app" } }, [
                  e("RouterView", { ref: "layout" }),
                  e(
                    "div",
                    { class: "global-ui" },
                    Ua.map((t) => e(t))
                  ),
                ]),
            })
          ),
          router: n,
        };
      })(!1).then(({ app: e, router: t }) => {
        t.onReady(() => {
          e.$mount("#app");
        });
      });
  },
]);
