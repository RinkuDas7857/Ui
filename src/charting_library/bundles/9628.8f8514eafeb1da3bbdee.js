(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [9628],
  {
    66246: (e) => {
      e.exports = { wrap: 'wrap-3JkbcgoB', input: 'input-3JkbcgoB' };
    },
    44035: (e) => {
      e.exports = { icon: 'icon-26rGYU-z' };
    },
    39628: (e, n, t) => {
      'use strict';
      t.d(n, { TimeInput: () => O });
      var u = t(43367),
        r = t(67294),
        o = t(94184),
        c = t.n(o),
        l = t(16282),
        a = t(66213),
        s = t(92136),
        i = t(81829),
        f = t(49775),
        p = t(44035),
        h = t(10130);
      function d(e) {
        return r.createElement(f.Icon, { className: p.icon, icon: h });
      }
      var v = t(15965),
        g = t(66246);
      var m = t(47165),
        E = t(57968);
      const N = {
        0: { pattern: /\d/ },
        9: { pattern: /\d/, optional: !0 },
        '#': { pattern: /\d/, recursive: !0 },
        A: { pattern: /[a-zA-Z0-9]/ },
        S: { pattern: /[a-zA-Z]/ },
      };
      function b(e, n, t) {
        const u = [],
          r = t;
        let o = 0,
          c = 0;
        const l = e.length,
          a = r.length;
        let s = -1,
          i = 0;
        const f = [],
          p = l - 1,
          h = [];
        let d;
        for (; o < l && c < a; ) {
          const t = e.charAt(o),
            l = r.charAt(c),
            a = N[t];
          a
            ? (l.match(a.pattern)
                ? (u.push(l),
                  a.recursive &&
                    (-1 === s ? (s = o) : o === p && o !== s && (o = s - 1),
                    p === s && (o -= 1)),
                  (o += 1))
                : l === d
                ? (i--, (d = void 0))
                : a.optional
                ? ((o += 1), (c -= 1))
                : a.fallback
                ? (u.push(a.fallback), (o += 1), (c -= 1))
                : h.push({ p: c, v: l, e: a.pattern }),
              (c += 1))
            : (n || u.push(t),
              l === t ? (f.push(c), (c += 1)) : ((d = t), f.push(c + i), i++),
              (o += 1));
        }
        const v = e.charAt(p);
        l !== a + 1 || N[v] || u.push(v);
        const g = u.join('');
        return [
          g,
          (function (e, n) {
            const t = {};
            for (let e = 0; e < n.length; e++) t[n[e] + 0] = 1;
            return t;
          })(0, f),
          h,
        ];
      }
      function C(e, n, t) {
        const u = (function (e) {
            let n = !0;
            for (let t = 0; t < e.length; t++) {
              const u = N[e.charAt(t)];
              if (u && u.recursive) {
                n = !1;
                break;
              }
            }
            return n ? e.length : void 0;
          })(e),
          [o, c] = b(e, !1, n),
          [a, s] = (0, r.useState)(o),
          [i, f] = (0, r.useState)(0),
          [p, h] = (0, r.useState)(!1),
          d = (0, r.useRef)(c),
          v = (0, r.useRef)(a);
        return (
          (0, r.useEffect)(() => {
            const [t, u] = b(e, !1, n);
            s(t), g(u);
          }, [n, e]),
          (0, r.useLayoutEffect)(() => {
            const e = (0, l.ensureNotNull)(t.current);
            p && (e.setSelectionRange(i, i), h(!1)), f(S(e));
          }, [p]),
          [
            n,
            v,
            {
              onChange: function () {
                const n = (0, l.ensureNotNull)(t.current),
                  u = n.value,
                  [r, o] = b(e, !1, u);
                s(r), (v.current = r);
                const c = g(o),
                  p = (function (e, n, t, u, r, o) {
                    if (e !== n) {
                      const c = n.length,
                        l = e.length;
                      let a = 0,
                        s = 0,
                        i = 0,
                        f = 0,
                        p = 0;
                      for (p = u; p < c && r[p]; p++) s++;
                      for (p = u - 1; p >= 0 && r[p]; p--) a++;
                      for (p = u - 1; p >= 0; p--) r[p] && i++;
                      for (p = t - 1; p >= 0; p--) o[p] && f++;
                      if (u > l) u = 10 * c;
                      else if (t >= u && t !== l) {
                        if (o[u]) {
                          const e = u;
                          (u -= f - i), r[(u -= a)] && (u = e);
                        }
                      } else u > t && ((u += i - f), (u += s));
                    }
                    return u;
                  })(a, r, i, S(n), o, c);
                f(p), h(!0);
              },
              onSelect: function () {
                const e = (0, l.ensureNotNull)(t.current);
                f(S(e));
              },
              maxLength: u,
            },
          ]
        );
        function g(e) {
          const n = d.current;
          return (d.current = e), n;
        }
      }
      function S(e) {
        return e.selectionStart || 0;
      }
      function w(e) {
        const { value: n, mask: t, onChange: u, ...o } = e,
          c = (0, r.useRef)(null),
          [l, a, s] = C(t, n, c);
        return (
          (0, r.useLayoutEffect)(() => {
            void 0 !== e.reference && (e.reference.current = c.current);
          }, [e.reference]),
          r.createElement(i.InputControl, {
            ...o,
            maxLength: s.maxLength,
            value: l,
            autoComplete: 'off',
            reference: function (e) {
              c.current = e;
            },
            onChange: function () {
              s.onChange(), u(a.current);
            },
            onSelect: s.onSelect,
          })
        );
      }
      var k = t(42998),
        x = t(76420),
        y = t(95860),
        R = t(49382);
      const B = (() => {
        const e = [];
        for (let n = 0; n < 24; ++n)
          for (let t = 0; t < 60; t += 15) {
            const [u, r] = [D(n.toString()), D(t.toString())],
              o = `${u}:${r}`,
              c = F(o) ? o : L(o);
            e.push(c);
          }
        return e;
      })();
      function I(e) {
        let n = !1;
        const t = (0, r.useRef)(null),
          u = (0, r.useRef)(null),
          o = (0, r.useRef)(null),
          a = (0, r.useRef)(null),
          [i, f] = (0, v.useFocus)(),
          [p, h] = (0, r.useState)(e.value),
          g = A(p),
          N = F(g) ? g : L(g),
          [b, C] = (0, r.useState)(N),
          S =
            i ||
            T().some((e) => null !== e && e.contains(document.activeElement));
        (0, r.useLayoutEffect)(() => h(e.value), [e.value]),
          (0, r.useLayoutEffect)(() => C(N), [p, S]),
          (0, r.useEffect)(() => V(b === N ? 'auto' : 'smooth'), [b]);
        const I = (0, R.lowerbound)(B, N, (e, n) => e < n);
        let D = B;
        B[I] !== N && ((D = [...B]), D.splice(I, 0, N));
        const M = (0, m.useOutsideEvent)({
          mouseDown: !0,
          touchStart: !0,
          handler: function (e) {
            null !== u.current &&
              S &&
              e.target instanceof Node &&
              null !== o.current &&
              !o.current.contains(e.target) &&
              u.current.blur();
          },
        });
        return r.createElement(
          'div',
          {
            className: c()(e.className),
            onKeyDown: function (e) {
              if (e.defaultPrevented) return;
              const n = (0, k.hashFromEvent)(e.nativeEvent);
              if (38 === n) {
                e.preventDefault();
                const n = (D.indexOf(b) + D.length - 1) % D.length;
                C(D[n]);
              }
              if (40 === n) {
                e.preventDefault();
                const n = (D.indexOf(b) + D.length + 1) % D.length;
                C(D[n]);
              }
            },
            onFocus: function (e) {
              H(e) || f.onFocus(e);
            },
            onBlur: function (e) {
              H(e) || f.onBlur(e);
            },
            ref: M,
          },
          r.createElement(w, {
            disabled: e.disabled,
            name: e.name,
            endSlot: r.createElement(
              s.EndSlot,
              { icon: !0 },
              r.createElement(d, null)
            ),
            reference: u,
            containerReference: t,
            mask: '09:00',
            value: p,
            onFocus: function (e) {
              setTimeout(J, 0);
            },
            onBlur: function (e) {
              H(e) || O(p);
            },
            onChange: function (n) {
              h(n), e.onInput && e.onInput(n);
            },
            onKeyDown: function (e) {
              if (e.defaultPrevented) return;
              const n = (0, k.hashFromEvent)(e.nativeEvent);
              13 === n &&
                (e.preventDefault(),
                O(b),
                (0, l.ensureNotNull)(u.current).blur());
              27 === n &&
                (e.preventDefault(), (0, l.ensureNotNull)(u.current).blur());
            },
          }),
          r.createElement(
            x.PopupMenu,
            {
              onOpen: function () {
                V();
              },
              onClose: function () {},
              position: function () {
                const e = (0, l.ensureNotNull)(
                    t.current
                  ).getBoundingClientRect(),
                  n = window.innerHeight - e.bottom,
                  u = e.top;
                let r = 231,
                  o = e.bottom;
                if (r > u && r > n) {
                  const t = (0, E.clamp)(r, 0, u),
                    c = (0, E.clamp)(r, 0, n);
                  (r = Math.max(t, c)), (o = t > c ? e.top - t : e.bottom);
                } else r > n && (o = e.top - r);
                return {
                  x: e.left,
                  y: o,
                  overrideWidth: e.width,
                  overrideHeight: r,
                };
              },
              closeOnClickOutside: !1,
              isOpened: S,
              tabIndex: -1,
              reference: o,
            },
            D.map((e) =>
              r.createElement(y.PopupMenuItem, {
                key: e,
                label: e,
                isActive: e === N,
                isHovered: e === b,
                reference: e === b ? $ : void 0,
                onClick: z,
                onClickArg: e,
              })
            )
          )
        );
        function O(t) {
          const u = A(t),
            r = F(u) ? u : L(u);
          h(r), n || ((n = !0), e.onChange(r));
        }
        function $(e) {
          a.current = e;
        }
        function z(e) {
          O((0, l.ensureDefined)(e)), (0, l.ensureNotNull)(o.current).blur();
        }
        function H(e) {
          return (
            i &&
            (null !== P(document.activeElement) || null !== P(e.relatedTarget))
          );
        }
        function P(e) {
          return (
            (e instanceof Node &&
              T().find((n) => null !== n && n.contains(e))) ||
            null
          );
        }
        function T() {
          return [o.current, u.current];
        }
        function V(e = 'auto') {
          if (null !== a.current) {
            const n = (0, l.ensureNotNull)(o.current).getBoundingClientRect(),
              t = a.current.getBoundingClientRect();
            (n.top > t.top || n.bottom < t.bottom) &&
              a.current.scrollIntoView({ behavior: e });
          }
        }
        function J() {
          const e = u.current;
          if (null !== e) {
            const n = e.value || '';
            e.setSelectionRange(0, n.length);
          }
        }
      }
      function A(e) {
        const [n = '', t = ''] = e.split(':'),
          [u, r] = [D(n), M(t)];
        return `${u}:${r}`;
      }
      function F(e) {
        return /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/g.test(e);
      }
      function L(e) {
        const [n, t] = e.split(':'),
          [u, r] = [
            (0, E.clamp)(parseInt(n), 0, 23),
            (0, E.clamp)(parseInt(t), 0, 59),
          ],
          [o, c] = [D(u.toString()), M(r.toString())];
        return `${o}:${c}`;
      }
      function D(e) {
        return e.slice(0, 2).padStart(2, '0');
      }
      function M(e) {
        return e.slice(0, 2).padEnd(2, '0');
      }
      const O = u.CheckMobile.any()
        ? function (e) {
            const { onChange: n, onFocus: t, value: u, className: o, ...f } = e,
              p = (0, r.useRef)(null),
              [h, m] = (0, v.useFocus)(),
              E = (0, a.createSafeMulticastEventHandler)(m.onBlur, function () {
                p.current && u && (p.current.defaultValue = u);
              });
            return (
              (0, r.useLayoutEffect)(() => {
                p.current && u && (p.current.defaultValue = u);
              }, []),
              (0, r.useLayoutEffect)(() => {
                p.current && u && (p.current.value = u);
              }, [u]),
              r.createElement(
                'div',
                { className: c()(g.wrap, o) },
                r.createElement(i.InputControl, {
                  ...f,
                  type: 'text',
                  endSlot: r.createElement(
                    s.EndSlot,
                    { icon: !0 },
                    r.createElement(d, null)
                  ),
                  value: u,
                  highlight: h,
                  intent: h ? 'primary' : void 0,
                  onFocus: function (e) {
                    (0, l.ensureNotNull)(p.current).focus(), t && t(e);
                  },
                  onChange: function () {},
                }),
                r.createElement('input', {
                  ...m,
                  disabled: e.disabled,
                  className: g.input,
                  type: 'time',
                  onBlur: E,
                  onChange: function (e) {
                    const { value: t } = e.currentTarget;
                    n && t && n(t);
                  },
                  ref: p,
                })
              )
            );
          }
        : I;
    },
    10130: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"><path fill="currentColor" d="M1 8.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0zM8.5 0a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM9 9V3H8v5H5v1h4z"/></svg>';
    },
  },
]);
