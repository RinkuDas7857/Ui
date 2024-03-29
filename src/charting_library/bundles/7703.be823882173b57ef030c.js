'use strict';
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [7703],
  {
    8679: (e, n, t) => {
      var r = t(21296),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        u = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        i = {};
      function s(e) {
        return r.isMemo(e) ? a : i[e.$$typeof] || o;
      }
      (i[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (i[r.Memo] = a);
      var c = Object.defineProperty,
        p = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        l = Object.getPrototypeOf,
        v = Object.prototype;
      e.exports = function e(n, t, r) {
        if ('string' != typeof t) {
          if (v) {
            var o = l(t);
            o && o !== v && e(n, o, r);
          }
          var a = p(t);
          f && (a = a.concat(f(t)));
          for (var i = s(n), h = s(t), m = 0; m < a.length; ++m) {
            var y = a[m];
            if (!(u[y] || (r && r[y]) || (h && h[y]) || (i && i[y]))) {
              var b = d(t, y);
              try {
                c(n, y, b);
              } catch (e) {}
            }
          }
        }
        return n;
      };
    },
    37703: (e, n, t) => {
      t.d(n, { Provider: () => c, connect: () => U });
      var r = t(67294),
        o = (t(45697), r.createContext(null));
      var u = function (e) {
          e();
        },
        a = function () {
          return u;
        },
        i = { notify: function () {} };
      var s = (function () {
        function e(e, n) {
          (this.store = e),
            (this.parentSub = n),
            (this.unsubscribe = null),
            (this.listeners = i),
            (this.handleChangeWrapper = this.handleChangeWrapper.bind(this));
        }
        var n = e.prototype;
        return (
          (n.addNestedSub = function (e) {
            return this.trySubscribe(), this.listeners.subscribe(e);
          }),
          (n.notifyNestedSubs = function () {
            this.listeners.notify();
          }),
          (n.handleChangeWrapper = function () {
            this.onStateChange && this.onStateChange();
          }),
          (n.isSubscribed = function () {
            return Boolean(this.unsubscribe);
          }),
          (n.trySubscribe = function () {
            this.unsubscribe ||
              ((this.unsubscribe = this.parentSub
                ? this.parentSub.addNestedSub(this.handleChangeWrapper)
                : this.store.subscribe(this.handleChangeWrapper)),
              (this.listeners = (function () {
                var e = a(),
                  n = null,
                  t = null;
                return {
                  clear: function () {
                    (n = null), (t = null);
                  },
                  notify: function () {
                    e(function () {
                      for (var e = n; e; ) e.callback(), (e = e.next);
                    });
                  },
                  get: function () {
                    for (var e = [], t = n; t; ) e.push(t), (t = t.next);
                    return e;
                  },
                  subscribe: function (e) {
                    var r = !0,
                      o = (t = { callback: e, next: null, prev: t });
                    return (
                      o.prev ? (o.prev.next = o) : (n = o),
                      function () {
                        r &&
                          null !== n &&
                          ((r = !1),
                          o.next ? (o.next.prev = o.prev) : (t = o.prev),
                          o.prev ? (o.prev.next = o.next) : (n = o.next));
                      }
                    );
                  },
                };
              })()));
          }),
          (n.tryUnsubscribe = function () {
            this.unsubscribe &&
              (this.unsubscribe(),
              (this.unsubscribe = null),
              this.listeners.clear(),
              (this.listeners = i));
          }),
          e
        );
      })();
      const c = function (e) {
        var n = e.store,
          t = e.context,
          u = e.children,
          a = (0, r.useMemo)(
            function () {
              var e = new s(n);
              return (
                (e.onStateChange = e.notifyNestedSubs),
                { store: n, subscription: e }
              );
            },
            [n]
          ),
          i = (0, r.useMemo)(
            function () {
              return n.getState();
            },
            [n]
          );
        (0, r.useEffect)(
          function () {
            var e = a.subscription;
            return (
              e.trySubscribe(),
              i !== n.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = null);
              }
            );
          },
          [a, i]
        );
        var c = t || o;
        return r.createElement(c.Provider, { value: a }, u);
      };
      var p = t(87462),
        f = t(63366),
        d = t(8679),
        l = t.n(d),
        v = t(72973),
        h =
          'undefined' != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement
            ? r.useLayoutEffect
            : r.useEffect,
        m = [],
        y = [null, null];
      function b(e, n) {
        var t = e[1];
        return [n.payload, t + 1];
      }
      function P(e, n, t) {
        h(function () {
          return e.apply(void 0, n);
        }, t);
      }
      function g(e, n, t, r, o, u, a) {
        (e.current = r),
          (n.current = o),
          (t.current = !1),
          u.current && ((u.current = null), a());
      }
      function w(e, n, t, r, o, u, a, i, s, c) {
        if (e) {
          var p = !1,
            f = null,
            d = function () {
              if (!p) {
                var e,
                  t,
                  d = n.getState();
                try {
                  e = r(d, o.current);
                } catch (e) {
                  (t = e), (f = e);
                }
                t || (f = null),
                  e === u.current
                    ? a.current || s()
                    : ((u.current = e),
                      (i.current = e),
                      (a.current = !0),
                      c({ type: 'STORE_UPDATED', payload: { error: t } }));
              }
            };
          (t.onStateChange = d), t.trySubscribe(), d();
          return function () {
            if (((p = !0), t.tryUnsubscribe(), (t.onStateChange = null), f))
              throw f;
          };
        }
      }
      var S = function () {
        return [null, 0];
      };
      function O(e, n) {
        void 0 === n && (n = {});
        var t = n,
          u = t.getDisplayName,
          a =
            void 0 === u
              ? function (e) {
                  return 'ConnectAdvanced(' + e + ')';
                }
              : u,
          i = t.methodName,
          c = void 0 === i ? 'connectAdvanced' : i,
          d = t.renderCountProp,
          h = void 0 === d ? void 0 : d,
          O = t.shouldHandleStateChanges,
          C = void 0 === O || O,
          E = t.storeKey,
          N = void 0 === E ? 'store' : E,
          M = (t.withRef, t.forwardRef),
          T = void 0 !== M && M,
          x = t.context,
          q = void 0 === x ? o : x,
          D = (0, f.default)(t, [
            'getDisplayName',
            'methodName',
            'renderCountProp',
            'shouldHandleStateChanges',
            'storeKey',
            'withRef',
            'forwardRef',
            'context',
          ]),
          R = q;
        return function (n) {
          var t = n.displayName || n.name || 'Component',
            o = a(t),
            u = (0, p.default)({}, D, {
              getDisplayName: a,
              methodName: c,
              renderCountProp: h,
              shouldHandleStateChanges: C,
              storeKey: N,
              displayName: o,
              wrappedComponentName: t,
              WrappedComponent: n,
            }),
            i = D.pure;
          var d = i
            ? r.useMemo
            : function (e) {
                return e();
              };
          function O(t) {
            var o = (0, r.useMemo)(
                function () {
                  var e = t.forwardedRef,
                    n = (0, f.default)(t, ['forwardedRef']);
                  return [t.context, e, n];
                },
                [t]
              ),
              a = o[0],
              i = o[1],
              c = o[2],
              l = (0, r.useMemo)(
                function () {
                  return a &&
                    a.Consumer &&
                    (0, v.isContextConsumer)(r.createElement(a.Consumer, null))
                    ? a
                    : R;
                },
                [a, R]
              ),
              h = (0, r.useContext)(l),
              O =
                Boolean(t.store) &&
                Boolean(t.store.getState) &&
                Boolean(t.store.dispatch);
            Boolean(h) && Boolean(h.store);
            var E = O ? t.store : h.store,
              N = (0, r.useMemo)(
                function () {
                  return (function (n) {
                    return e(n.dispatch, u);
                  })(E);
                },
                [E]
              ),
              M = (0, r.useMemo)(
                function () {
                  if (!C) return y;
                  var e = new s(E, O ? null : h.subscription),
                    n = e.notifyNestedSubs.bind(e);
                  return [e, n];
                },
                [E, O, h]
              ),
              T = M[0],
              x = M[1],
              q = (0, r.useMemo)(
                function () {
                  return O ? h : (0, p.default)({}, h, { subscription: T });
                },
                [O, h, T]
              ),
              D = (0, r.useReducer)(b, m, S),
              j = D[0][0],
              k = D[1];
            if (j && j.error) throw j.error;
            var B = (0, r.useRef)(),
              W = (0, r.useRef)(c),
              F = (0, r.useRef)(),
              $ = (0, r.useRef)(!1),
              H = d(
                function () {
                  return F.current && c === W.current
                    ? F.current
                    : N(E.getState(), c);
                },
                [E, j, c]
              );
            P(g, [W, B, $, c, H, F, x]),
              P(w, [C, E, T, N, W, B, $, F, x, k], [E, T, N]);
            var U = (0, r.useMemo)(
              function () {
                return r.createElement(n, (0, p.default)({}, H, { ref: i }));
              },
              [i, n, H]
            );
            return (0, r.useMemo)(
              function () {
                return C ? r.createElement(l.Provider, { value: q }, U) : U;
              },
              [l, U, q]
            );
          }
          var E = i ? r.memo(O) : O;
          if (((E.WrappedComponent = n), (E.displayName = o), T)) {
            var M = r.forwardRef(function (e, n) {
              return r.createElement(
                E,
                (0, p.default)({}, e, { forwardedRef: n })
              );
            });
            return (M.displayName = o), (M.WrappedComponent = n), l()(M, n);
          }
          return l()(E, n);
        };
      }
      function C(e, n) {
        return e === n
          ? 0 !== e || 0 !== n || 1 / e == 1 / n
          : e != e && n != n;
      }
      function E(e, n) {
        if (C(e, n)) return !0;
        if (
          'object' != typeof e ||
          null === e ||
          'object' != typeof n ||
          null === n
        )
          return !1;
        var t = Object.keys(e),
          r = Object.keys(n);
        if (t.length !== r.length) return !1;
        for (var o = 0; o < t.length; o++)
          if (
            !Object.prototype.hasOwnProperty.call(n, t[o]) ||
            !C(e[t[o]], n[t[o]])
          )
            return !1;
        return !0;
      }
      var N = t(15857);
      function M(e) {
        return function (n, t) {
          var r = e(n, t);
          function o() {
            return r;
          }
          return (o.dependsOnOwnProps = !1), o;
        };
      }
      function T(e) {
        return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps
          ? Boolean(e.dependsOnOwnProps)
          : 1 !== e.length;
      }
      function x(e, n) {
        return function (n, t) {
          t.displayName;
          var r = function (e, n) {
            return r.dependsOnOwnProps ? r.mapToProps(e, n) : r.mapToProps(e);
          };
          return (
            (r.dependsOnOwnProps = !0),
            (r.mapToProps = function (n, t) {
              (r.mapToProps = e), (r.dependsOnOwnProps = T(e));
              var o = r(n, t);
              return (
                'function' == typeof o &&
                  ((r.mapToProps = o),
                  (r.dependsOnOwnProps = T(o)),
                  (o = r(n, t))),
                o
              );
            }),
            r
          );
        };
      }
      const q = [
        function (e) {
          return 'function' == typeof e ? x(e) : void 0;
        },
        function (e) {
          return e
            ? void 0
            : M(function (e) {
                return { dispatch: e };
              });
        },
        function (e) {
          return e && 'object' == typeof e
            ? M(function (n) {
                return (0, N.bindActionCreators)(e, n);
              })
            : void 0;
        },
      ];
      const D = [
        function (e) {
          return 'function' == typeof e ? x(e) : void 0;
        },
        function (e) {
          return e
            ? void 0
            : M(function () {
                return {};
              });
        },
      ];
      function R(e, n, t) {
        return (0, p.default)({}, t, {}, e, {}, n);
      }
      const j = [
        function (e) {
          return 'function' == typeof e
            ? (function (e) {
                return function (n, t) {
                  t.displayName;
                  var r,
                    o = t.pure,
                    u = t.areMergedPropsEqual,
                    a = !1;
                  return function (n, t, i) {
                    var s = e(n, t, i);
                    return (
                      a ? (o && u(s, r)) || (r = s) : ((a = !0), (r = s)), r
                    );
                  };
                };
              })(e)
            : void 0;
        },
        function (e) {
          return e
            ? void 0
            : function () {
                return R;
              };
        },
      ];
      function k(e, n, t, r) {
        return function (o, u) {
          return t(e(o, u), n(r, u), u);
        };
      }
      function B(e, n, t, r, o) {
        var u,
          a,
          i,
          s,
          c,
          p = o.areStatesEqual,
          f = o.areOwnPropsEqual,
          d = o.areStatePropsEqual,
          l = !1;
        function v(o, l) {
          var v,
            h,
            m = !f(l, a),
            y = !p(o, u);
          return (
            (u = o),
            (a = l),
            m && y
              ? ((i = e(u, a)),
                n.dependsOnOwnProps && (s = n(r, a)),
                (c = t(i, s, a)))
              : m
              ? (e.dependsOnOwnProps && (i = e(u, a)),
                n.dependsOnOwnProps && (s = n(r, a)),
                (c = t(i, s, a)))
              : y
              ? ((v = e(u, a)),
                (h = !d(v, i)),
                (i = v),
                h && (c = t(i, s, a)),
                c)
              : c
          );
        }
        return function (o, p) {
          return l
            ? v(o, p)
            : ((i = e((u = o), (a = p))),
              (s = n(r, a)),
              (c = t(i, s, a)),
              (l = !0),
              c);
        };
      }
      function W(e, n) {
        var t = n.initMapStateToProps,
          r = n.initMapDispatchToProps,
          o = n.initMergeProps,
          u = (0, f.default)(n, [
            'initMapStateToProps',
            'initMapDispatchToProps',
            'initMergeProps',
          ]),
          a = t(e, u),
          i = r(e, u),
          s = o(e, u);
        return (u.pure ? B : k)(a, i, s, e, u);
      }
      function F(e, n, t) {
        for (var r = n.length - 1; r >= 0; r--) {
          var o = n[r](e);
          if (o) return o;
        }
        return function (n, r) {
          throw new Error(
            'Invalid value of type ' +
              typeof e +
              ' for ' +
              t +
              ' argument when connecting component ' +
              r.wrappedComponentName +
              '.'
          );
        };
      }
      function $(e, n) {
        return e === n;
      }
      function H(e) {
        var n = void 0 === e ? {} : e,
          t = n.connectHOC,
          r = void 0 === t ? O : t,
          o = n.mapStateToPropsFactories,
          u = void 0 === o ? D : o,
          a = n.mapDispatchToPropsFactories,
          i = void 0 === a ? q : a,
          s = n.mergePropsFactories,
          c = void 0 === s ? j : s,
          d = n.selectorFactory,
          l = void 0 === d ? W : d;
        return function (e, n, t, o) {
          void 0 === o && (o = {});
          var a = o,
            s = a.pure,
            d = void 0 === s || s,
            v = a.areStatesEqual,
            h = void 0 === v ? $ : v,
            m = a.areOwnPropsEqual,
            y = void 0 === m ? E : m,
            b = a.areStatePropsEqual,
            P = void 0 === b ? E : b,
            g = a.areMergedPropsEqual,
            w = void 0 === g ? E : g,
            S = (0, f.default)(a, [
              'pure',
              'areStatesEqual',
              'areOwnPropsEqual',
              'areStatePropsEqual',
              'areMergedPropsEqual',
            ]),
            O = F(e, u, 'mapStateToProps'),
            C = F(n, i, 'mapDispatchToProps'),
            N = F(t, c, 'mergeProps');
          return r(
            l,
            (0, p.default)(
              {
                methodName: 'connect',
                getDisplayName: function (e) {
                  return 'Connect(' + e + ')';
                },
                shouldHandleStateChanges: Boolean(e),
                initMapStateToProps: O,
                initMapDispatchToProps: C,
                initMergeProps: N,
                pure: d,
                areStatesEqual: h,
                areOwnPropsEqual: y,
                areStatePropsEqual: P,
                areMergedPropsEqual: w,
              },
              S
            )
          );
        };
      }
      const U = H();
      var A,
        K = t(73935);
      (A = K.unstable_batchedUpdates), (u = A);
    },
  },
]);
