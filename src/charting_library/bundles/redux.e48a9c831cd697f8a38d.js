'use strict';
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [9685],
  {
    11666: (n, t, r) => {
      r.d(t, {
        A: () => P,
        B: () => g,
        C: () => K,
        D: () => b,
        E: () => f,
        F: () => q,
        G: () => Y,
        H: () => I,
        J: () => D,
        K: () => Q,
        L: () => nn,
        M: () => tn,
        N: () => $,
        O: () => en,
        P: () => R,
        Q: () => L,
        R: () => M,
        S: () => H,
        T: () => _,
        U: () => on,
        Y: () => X,
        _: () => V,
        a: () => U,
        a3: () => rn,
        b: () => F,
        d: () => G,
        e: () => x,
        f: () => B,
        g: () => z,
        h: () => J,
        i: () => E,
        j: () => T,
        k: () => i,
        l: () => m,
        m: () => A,
        n: () => k,
        o: () => p,
        p: () => l,
        q: () => y,
        r: () => v,
        s: () => O,
        t: () => a,
        u: () => s,
        v: () => S,
        y: () => w,
        z: () => C,
      });
      var e = r(12470),
        o = r(87462),
        c = r(52847);
      const u = function (n, t) {
        var r;
        void 0 === t && (t = !0);
        var o = new Promise(function (e) {
          r = setTimeout(e, n, t);
        });
        return (
          (o[e.CANCEL] = function () {
            clearTimeout(r);
          }),
          o
        );
      };
      var i = (function (n) {
          return function () {
            return n;
          };
        })(!0),
        a = function () {};
      var f = function (n) {
        return n;
      };
      'function' == typeof Symbol &&
        Symbol.asyncIterator &&
        Symbol.asyncIterator;
      var l = function (n, t) {
          (0, o.default)(n, t),
            Object.getOwnPropertySymbols &&
              Object.getOwnPropertySymbols(t).forEach(function (r) {
                n[r] = t[r];
              });
        },
        s = function (n, t) {
          var r;
          return (r = []).concat.apply(r, t.map(n));
        };
      function v(n, t) {
        var r = n.indexOf(t);
        r >= 0 && n.splice(r, 1);
      }
      function p(n) {
        var t = !1;
        return function () {
          t || ((t = !0), n());
        };
      }
      var d = function (n) {
          throw n;
        },
        h = function (n) {
          return { value: n, done: !0 };
        };
      function y(n, t, r) {
        void 0 === t && (t = d), void 0 === r && (r = 'iterator');
        var e = {
          meta: { name: r },
          next: n,
          throw: t,
          return: h,
          isSagaIterator: !0,
        };
        return (
          'undefined' != typeof Symbol &&
            (e[Symbol.iterator] = function () {
              return e;
            }),
          e
        );
      }
      function g(n, t) {
        var r = t.sagaStack;
        console.error(n), console.error(r);
      }
      var E = function (n) {
          return new Error(
            "\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " +
              n +
              '\n'
          );
        },
        A = function (n) {
          return Array.apply(null, new Array(n));
        },
        b = function (n) {
          return function (t) {
            return n(Object.defineProperty(t, e.SAGA_ACTION, { value: !0 }));
          };
        },
        C = function (n) {
          return n === e.TERMINATE;
        },
        w = function (n) {
          return n === e.TASK_CANCEL;
        },
        O = function (n) {
          return C(n) || w(n);
        };
      function m(n, t) {
        var r = Object.keys(n),
          e = r.length;
        var o,
          u = 0,
          i = (0, c.array)(n) ? A(e) : {},
          f = {};
        return (
          r.forEach(function (n) {
            var r = function (r, c) {
              o ||
                (c || O(r)
                  ? (t.cancel(), t(r, c))
                  : ((i[n] = r), ++u === e && ((o = !0), t(i))));
            };
            (r.cancel = a), (f[n] = r);
          }),
          (t.cancel = function () {
            o ||
              ((o = !0),
              r.forEach(function (n) {
                return f[n].cancel();
              }));
          }),
          f
        );
      }
      function T(n) {
        return { name: n.name || 'anonymous', location: S(n) };
      }
      function S(n) {
        return n[e.SAGA_LOCATION];
      }
      var N = { isEmpty: i, put: a, take: a };
      function j(n, t) {
        void 0 === n && (n = 10);
        var r = new Array(n),
          e = 0,
          o = 0,
          c = 0,
          u = function (t) {
            (r[o] = t), (o = (o + 1) % n), e++;
          },
          i = function () {
            if (0 != e) {
              var t = r[c];
              return (r[c] = null), e--, (c = (c + 1) % n), t;
            }
          },
          a = function () {
            for (var n = []; e; ) n.push(i());
            return n;
          };
        return {
          isEmpty: function () {
            return 0 == e;
          },
          put: function (i) {
            var f;
            if (e < n) u(i);
            else
              switch (t) {
                case 1:
                  throw new Error("Channel's Buffer overflow!");
                case 3:
                  (r[o] = i), (c = o = (o + 1) % n);
                  break;
                case 4:
                  (f = 2 * n),
                    (r = a()),
                    (e = r.length),
                    (o = r.length),
                    (c = 0),
                    (r.length = f),
                    (n = f),
                    u(i);
              }
          },
          take: i,
          flush: a,
        };
      }
      var k = function () {
          return N;
        },
        L = function (n) {
          return j(n, 3);
        },
        x = function (n) {
          return j(n, 4);
        },
        I = Object.freeze({
          __proto__: null,
          none: k,
          fixed: function (n) {
            return j(n, 1);
          },
          dropping: function (n) {
            return j(n, 2);
          },
          sliding: L,
          expanding: x,
        }),
        _ = 'TAKE',
        R = 'PUT',
        P = 'ALL',
        M = 'RACE',
        K = 'CALL',
        U = 'CPS',
        q = 'FORK',
        D = 'JOIN',
        F = 'CANCEL',
        H = 'SELECT',
        G = 'ACTION_CHANNEL',
        B = 'CANCELLED',
        z = 'FLUSH',
        Y = 'GET_CONTEXT',
        J = 'SET_CONTEXT',
        W = function (n, t) {
          var r;
          return (
            ((r = {})[e.IO] = !0),
            (r.combinator = !1),
            (r.type = n),
            (r.payload = t),
            r
          );
        };
      function Q(n, t) {
        return (
          void 0 === n && (n = '*'),
          (0, c.pattern)(n)
            ? W(_, { pattern: n })
            : (0, c.multicast)(n) && (0, c.notUndef)(t) && (0, c.pattern)(t)
            ? W(_, { channel: n, pattern: t })
            : (0, c.channel)(n)
            ? W(_, { channel: n })
            : void 0
        );
      }
      function X(n, t) {
        return (
          (0, c.undef)(t) && ((t = n), (n = void 0)),
          W(R, { channel: n, action: t })
        );
      }
      function V(n) {
        var t = W(P, n);
        return (t.combinator = !0), t;
      }
      function Z(n, t) {
        var r,
          e = null;
        return (
          (0, c.func)(n)
            ? (r = n)
            : ((0, c.array)(n)
                ? ((e = n[0]), (r = n[1]))
                : ((e = n.context), (r = n.fn)),
              e && (0, c.string)(r) && (0, c.func)(e[r]) && (r = e[r])),
          { context: e, fn: r, args: t }
        );
      }
      function $(n) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), e = 1;
          e < t;
          e++
        )
          r[e - 1] = arguments[e];
        return W(K, Z(n, r));
      }
      function nn(n) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), e = 1;
          e < t;
          e++
        )
          r[e - 1] = arguments[e];
        return W(q, Z(n, r));
      }
      function tn(n) {
        return void 0 === n && (n = e.SELF_CANCELLATION), W(F, n);
      }
      function rn(n) {
        void 0 === n && (n = f);
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), e = 1;
          e < t;
          e++
        )
          r[e - 1] = arguments[e];
        return W(H, { selector: n, args: r });
      }
      function en(n, t) {
        return W(G, { pattern: n, buffer: t });
      }
      var on = $.bind(null, u);
    },
    52847: (n, t, r) => {
      r.d(t, {
        array: () => a,
        channel: () => v,
        func: () => u,
        iterator: () => l,
        multicast: () => h,
        notUndef: () => c,
        pattern: () => s,
        promise: () => f,
        string: () => i,
        stringableFunc: () => p,
        symbol: () => d,
        undef: () => o,
      });
      var e = r(12470),
        o = function (n) {
          return null == n;
        },
        c = function (n) {
          return null != n;
        },
        u = function (n) {
          return 'function' == typeof n;
        },
        i = function (n) {
          return 'string' == typeof n;
        },
        a = Array.isArray,
        f = function (n) {
          return n && u(n.then);
        },
        l = function (n) {
          return n && u(n.next) && u(n.throw);
        },
        s = function n(t) {
          return t && (i(t) || d(t) || u(t) || (a(t) && t.every(n)));
        },
        v = function (n) {
          return n && u(n.take) && u(n.close);
        },
        p = function (n) {
          return u(n) && n.hasOwnProperty('toString');
        },
        d = function (n) {
          return (
            Boolean(n) &&
            'function' == typeof Symbol &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
          );
        },
        h = function (n) {
          return v(n) && n[e.MULTICAST];
        };
    },
    12470: (n, t, r) => {
      r.d(t, {
        CANCEL: () => o,
        CHANNEL_END_TYPE: () => c,
        IO: () => u,
        MATCH: () => i,
        MULTICAST: () => a,
        SAGA_ACTION: () => f,
        SAGA_LOCATION: () => d,
        SELF_CANCELLATION: () => l,
        TASK: () => s,
        TASK_CANCEL: () => v,
        TERMINATE: () => p,
      });
      var e = function (n) {
          return '@@redux-saga/' + n;
        },
        o = e('CANCEL_PROMISE'),
        c = e('CHANNEL_END'),
        u = e('IO'),
        i = e('MATCH'),
        a = e('MULTICAST'),
        f = e('SAGA_ACTION'),
        l = e('SELF_CANCELLATION'),
        s = e('TASK'),
        v = e('TASK_CANCEL'),
        p = e('TERMINATE'),
        d = e('LOCATION');
    },
    30797: (n, t, r) => {
      r.d(t, { buffers: () => i.H, default: () => J, eventChannel: () => j });
      var e = r(12470),
        o = r(87462),
        c = r(63366),
        u = r(52847),
        i = r(11666),
        a = r(15857);
      function f() {
        var n = {};
        return (
          (n.promise = new Promise(function (t, r) {
            (n.resolve = t), (n.reject = r);
          })),
          n
        );
      }
      const l = f;
      var s = [],
        v = 0;
      function p(n) {
        try {
          y(), n();
        } finally {
          g();
        }
      }
      function d(n) {
        s.push(n), v || (y(), E());
      }
      function h(n) {
        try {
          return y(), n();
        } finally {
          E();
        }
      }
      function y() {
        v++;
      }
      function g() {
        v--;
      }
      function E() {
        var n;
        for (g(); !v && void 0 !== (n = s.shift()); ) p(n);
      }
      var A = function (n) {
          return function (t) {
            return n.some(function (n) {
              return m(n)(t);
            });
          };
        },
        b = function (n) {
          return function (t) {
            return n(t);
          };
        },
        C = function (n) {
          return function (t) {
            return t.type === String(n);
          };
        },
        w = function (n) {
          return function (t) {
            return t.type === n;
          };
        },
        O = function () {
          return i.k;
        };
      function m(n) {
        var t =
          '*' === n
            ? O
            : (0, u.string)(n)
            ? C
            : (0, u.array)(n)
            ? A
            : (0, u.stringableFunc)(n)
            ? C
            : (0, u.func)(n)
            ? b
            : (0, u.symbol)(n)
            ? w
            : null;
        if (null === t) throw new Error('invalid pattern: ' + n);
        return t(n);
      }
      var T = { type: e.CHANNEL_END_TYPE },
        S = function (n) {
          return n && n.type === e.CHANNEL_END_TYPE;
        };
      function N(n) {
        void 0 === n && (n = (0, i.e)());
        var t = !1,
          r = [];
        return {
          take: function (e) {
            t && n.isEmpty()
              ? e(T)
              : n.isEmpty()
              ? (r.push(e),
                (e.cancel = function () {
                  (0, i.r)(r, e);
                }))
              : e(n.take());
          },
          put: function (e) {
            if (!t) {
              if (0 === r.length) return n.put(e);
              r.shift()(e);
            }
          },
          flush: function (r) {
            t && n.isEmpty() ? r(T) : r(n.flush());
          },
          close: function () {
            if (!t) {
              t = !0;
              var n = r;
              r = [];
              for (var e = 0, o = n.length; e < o; e++) {
                (0, n[e])(T);
              }
            }
          },
        };
      }
      function j(n, t) {
        void 0 === t && (t = (0, i.n)());
        var r,
          e = !1,
          o = N(t),
          c = function () {
            e || ((e = !0), (0, u.func)(r) && r(), o.close());
          };
        return (
          (r = n(function (n) {
            S(n) ? c() : o.put(n);
          })),
          (r = (0, i.o)(r)),
          e && r(),
          { take: o.take, flush: o.flush, close: c }
        );
      }
      function k() {
        var n,
          t,
          r,
          o,
          c,
          u,
          a =
            ((t = !1),
            (o = r = []),
            (c = function () {
              o === r && (o = r.slice());
            }),
            (u = function () {
              t = !0;
              var n = (r = o);
              (o = []),
                n.forEach(function (n) {
                  n(T);
                });
            }),
            ((n = {})[e.MULTICAST] = !0),
            (n.put = function (n) {
              if (!t)
                if (S(n)) u();
                else
                  for (var c = (r = o), i = 0, a = c.length; i < a; i++) {
                    var f = c[i];
                    f[e.MATCH](n) && (f.cancel(), f(n));
                  }
            }),
            (n.take = function (n, r) {
              void 0 === r && (r = O),
                t
                  ? n(T)
                  : ((n[e.MATCH] = r),
                    c(),
                    o.push(n),
                    (n.cancel = (0, i.o)(function () {
                      c(), (0, i.r)(o, n);
                    })));
            }),
            (n.close = u),
            n),
          f = a.put;
        return (
          (a.put = function (n) {
            n[e.SAGA_ACTION]
              ? f(n)
              : d(function () {
                  f(n);
                });
          }),
          a
        );
      }
      function L(n, t) {
        var r = n[e.CANCEL];
        (0, u.func)(r) && (t.cancel = r),
          n.then(t, function (n) {
            t(n, !0);
          });
      }
      var x,
        I = 0,
        _ = function () {
          return ++I;
        };
      function R(n) {
        n.isRunning() && n.cancel();
      }
      var P =
        (((x = {})[i.T] = function (n, t, r) {
          var o = t.channel,
            c = void 0 === o ? n.channel : o,
            i = t.pattern,
            a = t.maybe,
            f = function (n) {
              n instanceof Error
                ? r(n, !0)
                : !S(n) || a
                ? r(n)
                : r(e.TERMINATE);
            };
          try {
            c.take(f, (0, u.notUndef)(i) ? m(i) : null);
          } catch (n) {
            return void r(n, !0);
          }
          r.cancel = f.cancel;
        }),
        (x[i.P] = function (n, t, r) {
          var e = t.channel,
            o = t.action,
            c = t.resolve;
          d(function () {
            var t;
            try {
              t = (e ? e.put : n.dispatch)(o);
            } catch (n) {
              return void r(n, !0);
            }
            c && (0, u.promise)(t) ? L(t, r) : r(t);
          });
        }),
        (x[i.A] = function (n, t, r, e) {
          var o = e.digestEffect,
            c = I,
            a = Object.keys(t);
          if (0 !== a.length) {
            var f = (0, i.l)(t, r);
            a.forEach(function (n) {
              o(t[n], c, f[n], n);
            });
          } else r((0, u.array)(t) ? [] : {});
        }),
        (x[i.R] = function (n, t, r, e) {
          var o = e.digestEffect,
            c = I,
            a = Object.keys(t),
            f = (0, u.array)(t) ? (0, i.m)(a.length) : {},
            l = {},
            s = !1;
          a.forEach(function (n) {
            var t = function (t, e) {
              s ||
                (e || (0, i.s)(t)
                  ? (r.cancel(), r(t, e))
                  : (r.cancel(), (s = !0), (f[n] = t), r(f)));
            };
            (t.cancel = i.t), (l[n] = t);
          }),
            (r.cancel = function () {
              s ||
                ((s = !0),
                a.forEach(function (n) {
                  return l[n].cancel();
                }));
            }),
            a.forEach(function (n) {
              s || o(t[n], c, l[n], n);
            });
        }),
        (x[i.C] = function (n, t, r, e) {
          var o = t.context,
            c = t.fn,
            a = t.args,
            f = e.task;
          try {
            var l = c.apply(o, a);
            if ((0, u.promise)(l)) return void L(l, r);
            if ((0, u.iterator)(l))
              return void z(n, l, f.context, I, (0, i.j)(c), !1, r);
            r(l);
          } catch (n) {
            r(n, !0);
          }
        }),
        (x[i.a] = function (n, t, r) {
          var e = t.context,
            o = t.fn,
            c = t.args;
          try {
            var i = function (n, t) {
              (0, u.undef)(n) ? r(t) : r(n, !0);
            };
            o.apply(e, c.concat(i)), i.cancel && (r.cancel = i.cancel);
          } catch (n) {
            r(n, !0);
          }
        }),
        (x[i.F] = function (n, t, r, e) {
          var o = t.context,
            c = t.fn,
            a = t.args,
            f = t.detached,
            l = e.task,
            s = (function (n) {
              var t = n.context,
                r = n.fn,
                e = n.args;
              try {
                var o = r.apply(t, e);
                if ((0, u.iterator)(o)) return o;
                var c = !1;
                return (0, i.q)(function (n) {
                  return c
                    ? { value: n, done: !0 }
                    : ((c = !0), { value: o, done: !(0, u.promise)(o) });
                });
              } catch (n) {
                return (0, i.q)(function () {
                  throw n;
                });
              }
            })({ context: o, fn: c, args: a }),
            v = (function (n, t) {
              return n.isSagaIterator ? { name: n.meta.name } : (0, i.j)(t);
            })(s, c);
          h(function () {
            var t = z(n, s, l.context, I, v, f, void 0);
            f
              ? r(t)
              : t.isRunning()
              ? (l.queue.addTask(t), r(t))
              : t.isAborted()
              ? l.queue.abort(t.error())
              : r(t);
          });
        }),
        (x[i.J] = function (n, t, r, e) {
          var o = e.task,
            c = function (n, t) {
              if (n.isRunning()) {
                var r = { task: o, cb: t };
                (t.cancel = function () {
                  n.isRunning() && (0, i.r)(n.joiners, r);
                }),
                  n.joiners.push(r);
              } else n.isAborted() ? t(n.error(), !0) : t(n.result());
            };
          if ((0, u.array)(t)) {
            if (0 === t.length) return void r([]);
            var a = (0, i.l)(t, r);
            t.forEach(function (n, t) {
              c(n, a[t]);
            });
          } else c(t, r);
        }),
        (x[i.b] = function (n, t, r, o) {
          var c = o.task;
          t === e.SELF_CANCELLATION
            ? R(c)
            : (0, u.array)(t)
            ? t.forEach(R)
            : R(t),
            r();
        }),
        (x[i.S] = function (n, t, r) {
          var e = t.selector,
            o = t.args;
          try {
            r(e.apply(void 0, [n.getState()].concat(o)));
          } catch (n) {
            r(n, !0);
          }
        }),
        (x[i.d] = function (n, t, r) {
          var e = t.pattern,
            o = N(t.buffer),
            c = m(e),
            u = function t(r) {
              S(r) || n.channel.take(t, c), o.put(r);
            },
            i = o.close;
          (o.close = function () {
            u.cancel(), i();
          }),
            n.channel.take(u, c),
            r(o);
        }),
        (x[i.f] = function (n, t, r, e) {
          r(e.task.isCancelled());
        }),
        (x[i.g] = function (n, t, r) {
          t.flush(r);
        }),
        (x[i.G] = function (n, t, r, e) {
          r(e.task.context[t]);
        }),
        (x[i.h] = function (n, t, r, e) {
          var o = e.task;
          (0, i.p)(o.context, t), r();
        }),
        x);
      function M(n, t) {
        return n + '?' + t;
      }
      function K(n) {
        var t = n.name,
          r = n.location;
        return r ? t + '  ' + M(r.fileName, r.lineNumber) : t;
      }
      function U(n) {
        var t = (0, i.u)(function (n) {
          return n.cancelledTasks;
        }, n);
        return t.length
          ? ['Tasks cancelled due to error:'].concat(t).join('\n')
          : '';
      }
      var q = null,
        D = [],
        F = function (n) {
          (n.crashedEffect = q), D.push(n);
        },
        H = function () {
          (q = null), (D.length = 0);
        },
        G = function () {
          var n = D[0],
            t = D.slice(1),
            r = n.crashedEffect
              ? (function (n) {
                  var t = (0, i.v)(n);
                  return t ? t.code + '  ' + M(t.fileName, t.lineNumber) : '';
                })(n.crashedEffect)
              : null;
          return [
            'The above error occurred in task ' +
              K(n.meta) +
              (r ? ' \n when executing effect ' + r : ''),
          ]
            .concat(
              t.map(function (n) {
                return '    created by ' + K(n.meta);
              }),
              [U(D)]
            )
            .join('\n');
        };
      function B(n, t, r, o, c, u, a) {
        var f;
        void 0 === a && (a = i.t);
        var s,
          v,
          p = 0,
          d = null,
          h = [],
          y = Object.create(r),
          g = (function (n, t, r) {
            var e,
              o = [],
              c = !1;
            function u(n) {
              t(), f(), r(n, !0);
            }
            function a(t) {
              o.push(t),
                (t.cont = function (a, f) {
                  c ||
                    ((0, i.r)(o, t),
                    (t.cont = i.t),
                    f
                      ? u(a)
                      : (t === n && (e = a), o.length || ((c = !0), r(e))));
                });
            }
            function f() {
              c ||
                ((c = !0),
                o.forEach(function (n) {
                  (n.cont = i.t), n.cancel();
                }),
                (o = []));
            }
            return (
              a(n),
              {
                addTask: a,
                cancelAll: f,
                abort: u,
                getTasks: function () {
                  return o;
                },
              }
            );
          })(
            t,
            function () {
              h.push.apply(
                h,
                g.getTasks().map(function (n) {
                  return n.meta.name;
                })
              );
            },
            E
          );
        function E(t, r) {
          if (r) {
            if (((p = 2), F({ meta: c, cancelledTasks: h }), A.isRoot)) {
              var o = G();
              H(), n.onError(t, { sagaStack: o });
            }
            (v = t), d && d.reject(t);
          } else
            t === e.TASK_CANCEL ? (p = 1) : 1 !== p && (p = 3),
              (s = t),
              d && d.resolve(t);
          A.cont(t, r),
            A.joiners.forEach(function (n) {
              n.cb(t, r);
            }),
            (A.joiners = null);
        }
        var A =
          (((f = {})[e.TASK] = !0),
          (f.id = o),
          (f.meta = c),
          (f.isRoot = u),
          (f.context = y),
          (f.joiners = []),
          (f.queue = g),
          (f.cancel = function () {
            0 === p && ((p = 1), g.cancelAll(), E(e.TASK_CANCEL, !1));
          }),
          (f.cont = a),
          (f.end = E),
          (f.setContext = function (n) {
            (0, i.p)(y, n);
          }),
          (f.toPromise = function () {
            return (
              d || ((d = l()), 2 === p ? d.reject(v) : 0 !== p && d.resolve(s)),
              d.promise
            );
          }),
          (f.isRunning = function () {
            return 0 === p;
          }),
          (f.isCancelled = function () {
            return 1 === p || (0 === p && 1 === t.status);
          }),
          (f.isAborted = function () {
            return 2 === p;
          }),
          (f.result = function () {
            return s;
          }),
          (f.error = function () {
            return v;
          }),
          f);
        return A;
      }
      function z(n, t, r, o, c, a, f) {
        var l = n.finalizeRunEffect(function (t, r, o) {
          if ((0, u.promise)(t)) L(t, o);
          else if ((0, u.iterator)(t)) z(n, t, v.context, r, c, !1, o);
          else if (t && t[e.IO]) {
            (0, P[t.type])(n, t.payload, o, p);
          } else o(t);
        });
        d.cancel = i.t;
        var s = {
            meta: c,
            cancel: function () {
              0 === s.status && ((s.status = 1), d(e.TASK_CANCEL));
            },
            status: 0,
          },
          v = B(n, s, r, o, c, a, f),
          p = { task: v, digestEffect: h };
        return f && (f.cancel = v.cancel), d(), v;
        function d(n, r) {
          try {
            var c;
            r
              ? ((c = t.throw(n)), H())
              : (0, i.y)(n)
              ? ((s.status = 1),
                d.cancel(),
                (c = (0, u.func)(t.return)
                  ? t.return(e.TASK_CANCEL)
                  : { done: !0, value: e.TASK_CANCEL }))
              : (c = (0, i.z)(n)
                  ? (0, u.func)(t.return)
                    ? t.return()
                    : { done: !0 }
                  : t.next(n)),
              c.done
                ? (1 !== s.status && (s.status = 3), s.cont(c.value))
                : h(c.value, o, d);
          } catch (n) {
            if (1 === s.status) throw n;
            (s.status = 2), s.cont(n, !0);
          }
        }
        function h(t, r, e, o) {
          void 0 === o && (o = '');
          var c,
            u = _();
          function a(r, o) {
            c ||
              ((c = !0),
              (e.cancel = i.t),
              n.sagaMonitor &&
                (o
                  ? n.sagaMonitor.effectRejected(u, r)
                  : n.sagaMonitor.effectResolved(u, r)),
              o &&
                (function (n) {
                  q = n;
                })(t),
              e(r, o));
          }
          n.sagaMonitor &&
            n.sagaMonitor.effectTriggered({
              effectId: u,
              parentEffectId: r,
              label: o,
              effect: t,
            }),
            (a.cancel = i.t),
            (e.cancel = function () {
              c ||
                ((c = !0),
                a.cancel(),
                (a.cancel = i.t),
                n.sagaMonitor && n.sagaMonitor.effectCancelled(u));
            }),
            l(t, u, a);
        }
      }
      function Y(n, t) {
        var r = n.channel,
          e = void 0 === r ? k() : r,
          o = n.dispatch,
          c = n.getState,
          u = n.context,
          f = void 0 === u ? {} : u,
          l = n.sagaMonitor,
          s = n.effectMiddlewares,
          v = n.onError,
          p = void 0 === v ? i.B : v;
        for (
          var d = arguments.length, y = new Array(d > 2 ? d - 2 : 0), g = 2;
          g < d;
          g++
        )
          y[g - 2] = arguments[g];
        var E = t.apply(void 0, y);
        var A,
          b = _();
        if (
          (l &&
            ((l.rootSagaStarted = l.rootSagaStarted || i.t),
            (l.effectTriggered = l.effectTriggered || i.t),
            (l.effectResolved = l.effectResolved || i.t),
            (l.effectRejected = l.effectRejected || i.t),
            (l.effectCancelled = l.effectCancelled || i.t),
            (l.actionDispatched = l.actionDispatched || i.t),
            l.rootSagaStarted({ effectId: b, saga: t, args: y })),
          s)
        ) {
          var C = a.compose.apply(void 0, s);
          A = function (n) {
            return function (t, r, e) {
              return C(function (t) {
                return n(t, r, e);
              })(t);
            };
          };
        } else A = i.E;
        var w = {
          channel: e,
          dispatch: (0, i.D)(o),
          getState: c,
          sagaMonitor: l,
          onError: p,
          finalizeRunEffect: A,
        };
        return h(function () {
          var n = z(w, E, f, b, (0, i.j)(t), !0, void 0);
          return l && l.effectResolved(b, n), n;
        });
      }
      const J = function (n) {
        var t,
          r = void 0 === n ? {} : n,
          e = r.context,
          u = void 0 === e ? {} : e,
          a = r.channel,
          f = void 0 === a ? k() : a,
          l = r.sagaMonitor,
          s = (0, c.default)(r, ['context', 'channel', 'sagaMonitor']);
        function v(n) {
          var r = n.getState,
            e = n.dispatch;
          return (
            (t = Y.bind(
              null,
              (0, o.default)({}, s, {
                context: u,
                channel: f,
                dispatch: e,
                getState: r,
                sagaMonitor: l,
              })
            )),
            function (n) {
              return function (t) {
                l && l.actionDispatched && l.actionDispatched(t);
                var r = n(t);
                return f.put(t), r;
              };
            }
          );
        }
        return (
          (v.run = function () {
            return t.apply(void 0, arguments);
          }),
          (v.setContext = function (n) {
            (0, i.p)(u, n);
          }),
          v
        );
      };
    },
    34857: (n, t, r) => {
      r.d(t, {
        all: () => o._,
        call: () => o.N,
        cancel: () => o.M,
        fork: () => o.L,
        put: () => o.Y,
        select: () => o.a3,
        take: () => o.K,
        throttle: () => l,
      });
      var e = r(52847),
        o = r(11666),
        c = function (n) {
          return { done: !0, value: n };
        },
        u = {};
      function i(n) {
        return (0, e.channel)(n)
          ? 'channel'
          : (0, e.stringableFunc)(n)
          ? String(n)
          : (0, e.func)(n)
          ? n.name
          : String(n);
      }
      function a(n, t, r) {
        var e,
          i,
          a,
          f = t;
        function l(t, r) {
          if (f === u) return c(t);
          if (r && !i) throw ((f = u), r);
          e && e(t);
          var o = r ? n[i](r) : n[f]();
          return (
            (f = o.nextState),
            (a = o.effect),
            (e = o.stateUpdater),
            (i = o.errorState),
            f === u ? c(t) : a
          );
        }
        return (0, o.q)(
          l,
          function (n) {
            return l(null, n);
          },
          r
        );
      }
      function f(n, t, r) {
        for (
          var e = arguments.length, c = new Array(e > 3 ? e - 3 : 0), u = 3;
          u < e;
          u++
        )
          c[u - 3] = arguments[u];
        var f,
          l,
          s = { done: !1, value: (0, o.O)(t, (0, o.Q)(1)) },
          v = function () {
            return { done: !1, value: (0, o.K)(l) };
          },
          p = function (n) {
            return { done: !1, value: o.L.apply(void 0, [r].concat(c, [n])) };
          },
          d = { done: !1, value: (0, o.U)(n) },
          h = function (n) {
            return (f = n);
          },
          y = function (n) {
            return (l = n);
          };
        return a(
          {
            q1: function () {
              return { nextState: 'q2', effect: s, stateUpdater: y };
            },
            q2: function () {
              return { nextState: 'q3', effect: v(), stateUpdater: h };
            },
            q3: function () {
              return { nextState: 'q4', effect: p(f) };
            },
            q4: function () {
              return { nextState: 'q2', effect: d };
            },
          },
          'q1',
          'throttle(' + i(t) + ', ' + r.name + ')'
        );
      }
      function l(n, t, r) {
        for (
          var e = arguments.length, c = new Array(e > 3 ? e - 3 : 0), u = 3;
          u < e;
          u++
        )
          c[u - 3] = arguments[u];
        return o.L.apply(void 0, [f, n, t, r].concat(c));
      }
    },
    15857: (n, t, r) => {
      function e(n, t, r) {
        return (
          t in n
            ? Object.defineProperty(n, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = r),
          n
        );
      }
      function o(n, t) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(n);
          t &&
            (e = e.filter(function (t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable;
            })),
            r.push.apply(r, e);
        }
        return r;
      }
      function c(n) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                e(n, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  n,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return n;
      }
      function u(n) {
        return (
          'Minified Redux error #' +
          n +
          '; visit https://redux.js.org/Errors?code=' +
          n +
          ' for the full message or use the non-minified dev environment for full errors. '
        );
      }
      r.d(t, {
        applyMiddleware: () => y,
        bindActionCreators: () => d,
        combineReducers: () => v,
        compose: () => h,
        createStore: () => s,
      });
      var i =
          ('function' == typeof Symbol && Symbol.observable) || '@@observable',
        a = function () {
          return Math.random().toString(36).substring(7).split('').join('.');
        },
        f = {
          INIT: '@@redux/INIT' + a(),
          REPLACE: '@@redux/REPLACE' + a(),
          PROBE_UNKNOWN_ACTION: function () {
            return '@@redux/PROBE_UNKNOWN_ACTION' + a();
          },
        };
      function l(n) {
        if ('object' != typeof n || null === n) return !1;
        for (var t = n; null !== Object.getPrototypeOf(t); )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(n) === t;
      }
      function s(n, t, r) {
        var e;
        if (
          ('function' == typeof t && 'function' == typeof r) ||
          ('function' == typeof r && 'function' == typeof arguments[3])
        )
          throw new Error(u(0));
        if (
          ('function' == typeof t && void 0 === r && ((r = t), (t = void 0)),
          void 0 !== r)
        ) {
          if ('function' != typeof r) throw new Error(u(1));
          return r(s)(n, t);
        }
        if ('function' != typeof n) throw new Error(u(2));
        var o = n,
          c = t,
          a = [],
          v = a,
          p = !1;
        function d() {
          v === a && (v = a.slice());
        }
        function h() {
          if (p) throw new Error(u(3));
          return c;
        }
        function y(n) {
          if ('function' != typeof n) throw new Error(u(4));
          if (p) throw new Error(u(5));
          var t = !0;
          return (
            d(),
            v.push(n),
            function () {
              if (t) {
                if (p) throw new Error(u(6));
                (t = !1), d();
                var r = v.indexOf(n);
                v.splice(r, 1), (a = null);
              }
            }
          );
        }
        function g(n) {
          if (!l(n)) throw new Error(u(7));
          if (void 0 === n.type) throw new Error(u(8));
          if (p) throw new Error(u(9));
          try {
            (p = !0), (c = o(c, n));
          } finally {
            p = !1;
          }
          for (var t = (a = v), r = 0; r < t.length; r++) {
            (0, t[r])();
          }
          return n;
        }
        function E(n) {
          if ('function' != typeof n) throw new Error(u(10));
          (o = n), g({ type: f.REPLACE });
        }
        function A() {
          var n,
            t = y;
          return (
            ((n = {
              subscribe: function (n) {
                if ('object' != typeof n || null === n) throw new Error(u(11));
                function r() {
                  n.next && n.next(h());
                }
                return r(), { unsubscribe: t(r) };
              },
            })[i] = function () {
              return this;
            }),
            n
          );
        }
        return (
          g({ type: f.INIT }),
          ((e = { dispatch: g, subscribe: y, getState: h, replaceReducer: E })[
            i
          ] = A),
          e
        );
      }
      function v(n) {
        for (var t = Object.keys(n), r = {}, e = 0; e < t.length; e++) {
          var o = t[e];
          0, 'function' == typeof n[o] && (r[o] = n[o]);
        }
        var c,
          i = Object.keys(r);
        try {
          !(function (n) {
            Object.keys(n).forEach(function (t) {
              var r = n[t];
              if (void 0 === r(void 0, { type: f.INIT }))
                throw new Error(u(12));
              if (void 0 === r(void 0, { type: f.PROBE_UNKNOWN_ACTION() }))
                throw new Error(u(13));
            });
          })(r);
        } catch (n) {
          c = n;
        }
        return function (n, t) {
          if ((void 0 === n && (n = {}), c)) throw c;
          for (var e = !1, o = {}, a = 0; a < i.length; a++) {
            var f = i[a],
              l = r[f],
              s = n[f],
              v = l(s, t);
            if (void 0 === v) {
              t && t.type;
              throw new Error(u(14));
            }
            (o[f] = v), (e = e || v !== s);
          }
          return (e = e || i.length !== Object.keys(n).length) ? o : n;
        };
      }
      function p(n, t) {
        return function () {
          return t(n.apply(this, arguments));
        };
      }
      function d(n, t) {
        if ('function' == typeof n) return p(n, t);
        if ('object' != typeof n || null === n) throw new Error(u(16));
        var r = {};
        for (var e in n) {
          var o = n[e];
          'function' == typeof o && (r[e] = p(o, t));
        }
        return r;
      }
      function h() {
        for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
          t[r] = arguments[r];
        return 0 === t.length
          ? function (n) {
              return n;
            }
          : 1 === t.length
          ? t[0]
          : t.reduce(function (n, t) {
              return function () {
                return n(t.apply(void 0, arguments));
              };
            });
      }
      function y() {
        for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
          t[r] = arguments[r];
        return function (n) {
          return function () {
            var r = n.apply(void 0, arguments),
              e = function () {
                throw new Error(u(15));
              },
              o = {
                getState: r.getState,
                dispatch: function () {
                  return e.apply(void 0, arguments);
                },
              },
              i = t.map(function (n) {
                return n(o);
              });
            return (
              (e = h.apply(void 0, i)(r.dispatch)),
              c(c({}, r), {}, { dispatch: e })
            );
          };
        };
      }
    },
    22222: (n, t, r) => {
      function e(n, t) {
        return n === t;
      }
      function o(n, t, r) {
        if (null === t || null === r || t.length !== r.length) return !1;
        for (var e = t.length, o = 0; o < e; o++) if (!n(t[o], r[o])) return !1;
        return !0;
      }
      function c(n) {
        var t = Array.isArray(n[0]) ? n[0] : n;
        if (
          !t.every(function (n) {
            return 'function' == typeof n;
          })
        ) {
          var r = t
            .map(function (n) {
              return typeof n;
            })
            .join(', ');
          throw new Error(
            'Selector creators expect all input-selectors to be functions, instead received the following types: [' +
              r +
              ']'
          );
        }
        return t;
      }
      r.d(t, { createSelector: () => u });
      var u = (function (n) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), e = 1;
          e < t;
          e++
        )
          r[e - 1] = arguments[e];
        return function () {
          for (var t = arguments.length, e = Array(t), o = 0; o < t; o++)
            e[o] = arguments[o];
          var u = 0,
            i = e.pop(),
            a = c(e),
            f = n.apply(
              void 0,
              [
                function () {
                  return u++, i.apply(null, arguments);
                },
              ].concat(r)
            ),
            l = n(function () {
              for (var n = [], t = a.length, r = 0; r < t; r++)
                n.push(a[r].apply(null, arguments));
              return f.apply(null, n);
            });
          return (
            (l.resultFunc = i),
            (l.dependencies = a),
            (l.recomputations = function () {
              return u;
            }),
            (l.resetRecomputations = function () {
              return (u = 0);
            }),
            l
          );
        };
      })(function (n) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
          r = null,
          c = null;
        return function () {
          return (
            o(t, r, arguments) || (c = n.apply(null, arguments)),
            (r = arguments),
            c
          );
        };
      });
    },
    87462: (n, t, r) => {
      function e() {
        return (e =
          Object.assign ||
          function (n) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var e in r)
                Object.prototype.hasOwnProperty.call(r, e) && (n[e] = r[e]);
            }
            return n;
          }).apply(this, arguments);
      }
      r.d(t, { default: () => e });
    },
    63366: (n, t, r) => {
      function e(n, t) {
        if (null == n) return {};
        var r,
          e,
          o = {},
          c = Object.keys(n);
        for (e = 0; e < c.length; e++)
          (r = c[e]), t.indexOf(r) >= 0 || (o[r] = n[r]);
        return o;
      }
      r.d(t, { default: () => e });
    },
  },
]);
