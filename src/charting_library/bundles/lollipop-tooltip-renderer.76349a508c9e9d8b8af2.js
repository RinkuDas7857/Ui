(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [9039],
  {
    67891: function (e, t) {
      var n, o, r;
      (o = [t]),
        void 0 ===
          (r =
            'function' ==
            typeof (n = function (e) {
              'use strict';
              function t(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                  return n;
                }
                return Array.from(e);
              }
              Object.defineProperty(e, '__esModule', { value: !0 });
              var n = !1;
              if ('undefined' != typeof window) {
                var o = {
                  get passive() {
                    n = !0;
                  },
                };
                window.addEventListener('testPassive', null, o),
                  window.removeEventListener('testPassive', null, o);
              }
              var r =
                  'undefined' != typeof window &&
                  window.navigator &&
                  window.navigator.platform &&
                  /iP(ad|hone|od)/.test(window.navigator.platform),
                a = [],
                l = !1,
                s = -1,
                i = void 0,
                c = void 0,
                u = function (e) {
                  return a.some(function (t) {
                    return !(
                      !t.options.allowTouchMove || !t.options.allowTouchMove(e)
                    );
                  });
                },
                d = function (e) {
                  var t = e || window.event;
                  return (
                    !!u(t.target) ||
                    1 < t.touches.length ||
                    (t.preventDefault && t.preventDefault(), !1)
                  );
                },
                m = function () {
                  setTimeout(function () {
                    void 0 !== c &&
                      ((document.body.style.paddingRight = c), (c = void 0)),
                      void 0 !== i &&
                        ((document.body.style.overflow = i), (i = void 0));
                  });
                };
              (e.disableBodyScroll = function (e, o) {
                if (r) {
                  if (!e)
                    return void console.error(
                      'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
                    );
                  if (
                    e &&
                    !a.some(function (t) {
                      return t.targetElement === e;
                    })
                  ) {
                    var m = { targetElement: e, options: o || {} };
                    (a = [].concat(t(a), [m])),
                      (e.ontouchstart = function (e) {
                        1 === e.targetTouches.length &&
                          (s = e.targetTouches[0].clientY);
                      }),
                      (e.ontouchmove = function (t) {
                        var n, o, r, a;
                        1 === t.targetTouches.length &&
                          ((o = e),
                          (a = (n = t).targetTouches[0].clientY - s),
                          !u(n.target) &&
                            ((o && 0 === o.scrollTop && 0 < a) ||
                            ((r = o) &&
                              r.scrollHeight - r.scrollTop <= r.clientHeight &&
                              a < 0)
                              ? d(n)
                              : n.stopPropagation()));
                      }),
                      l ||
                        (document.addEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0
                        ),
                        (l = !0));
                  }
                } else {
                  (v = o),
                    setTimeout(function () {
                      if (void 0 === c) {
                        var e = !!v && !0 === v.reserveScrollBarGap,
                          t =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        e &&
                          0 < t &&
                          ((c = document.body.style.paddingRight),
                          (document.body.style.paddingRight = t + 'px'));
                      }
                      void 0 === i &&
                        ((i = document.body.style.overflow),
                        (document.body.style.overflow = 'hidden'));
                    });
                  var p = { targetElement: e, options: o || {} };
                  a = [].concat(t(a), [p]);
                }
                var v;
              }),
                (e.clearAllBodyScrollLocks = function () {
                  r
                    ? (a.forEach(function (e) {
                        (e.targetElement.ontouchstart = null),
                          (e.targetElement.ontouchmove = null);
                      }),
                      l &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0
                        ),
                        (l = !1)),
                      (a = []),
                      (s = -1))
                    : (m(), (a = []));
                }),
                (e.enableBodyScroll = function (e) {
                  if (r) {
                    if (!e)
                      return void console.error(
                        'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.'
                      );
                    (e.ontouchstart = null),
                      (e.ontouchmove = null),
                      (a = a.filter(function (t) {
                        return t.targetElement !== e;
                      })),
                      l &&
                        0 === a.length &&
                        (document.removeEventListener(
                          'touchmove',
                          d,
                          n ? { passive: !1 } : void 0
                        ),
                        (l = !1));
                  } else
                    1 === a.length && a[0].targetElement === e
                      ? (m(), (a = []))
                      : (a = a.filter(function (t) {
                          return t.targetElement !== e;
                        }));
                });
            })
              ? n.apply(t, o)
              : n) || (e.exports = r);
    },
    99838: (e) => {
      e.exports = {
        drawer: 'drawer-zv4KaX-F',
        drawerItem: 'drawerItem-zv4KaX-F',
        menuWrap: 'menuWrap-zv4KaX-F',
        menuBox: 'menuBox-zv4KaX-F',
        card: 'card-zv4KaX-F',
        mini: 'mini-zv4KaX-F',
        fadeTop: 'fadeTop-zv4KaX-F',
        fadeBottom: 'fadeBottom-zv4KaX-F',
      };
    },
    34811: (e) => {
      e.exports = {
        content: 'content-SNaRagqV',
        titleWrapper: 'titleWrapper-SNaRagqV',
        title: 'title-SNaRagqV',
        subtitle: 'subtitle-SNaRagqV',
        text: 'text-SNaRagqV',
        icon: 'icon-SNaRagqV',
        group: 'group-SNaRagqV',
        groupIcon: 'groupIcon-SNaRagqV',
        beforeMarketOpen: 'beforeMarketOpen-SNaRagqV',
        afterMarketClose: 'afterMarketClose-SNaRagqV',
        groupTitle: 'groupTitle-SNaRagqV',
        groupRow: 'groupRow-SNaRagqV',
        groupCell: 'groupCell-SNaRagqV',
        link: 'link-SNaRagqV',
        mob: 'mob-SNaRagqV',
        mini: 'mini-SNaRagqV',
      };
    },
    64526: (e) => {
      e.exports = {
        wrap: 'wrap-164vy-kj',
        positionBottom: 'positionBottom-164vy-kj',
        backdrop: 'backdrop-164vy-kj',
        drawer: 'drawer-164vy-kj',
        positionLeft: 'positionLeft-164vy-kj',
      };
    },
    14391: (e, t, n) => {
      'use strict';
      n.r(t),
        n.d(t, { LollipopCardType: () => M, showLollipopTooltip: () => T });
      var o = n(67294),
        r = n(73935),
        a = n(16282),
        l = n(94184),
        s = n.n(l);
      function i(e, t, n) {
        (0, o.useEffect)(() => {
          const o = new IntersectionObserver(
            (e) => {
              e[e.length - 1].intersectionRatio < 0.25 ? n() : t();
            },
            {
              threshold: [0, 0.25, 0.5, 0.75, 1],
              root: null,
              rootMargin: '0px',
            }
          );
          return e.current && o.observe(e.current), () => o.disconnect();
        }, []);
      }
      var c = n(68521),
        u = n(57374),
        d = n(94004),
        m = n(76420),
        p = n(42998),
        v = n(79424),
        f = n(47903);
      const g = (0, o.forwardRef)((e, t) => {
        const {
            onClose: n,
            onForceClose: r,
            onClickOutside: a,
            customCloseSubscriptions: l = [],
            ...s
          } = e,
          i = (0, o.useRef)(null),
          c = (0, o.useCallback)(
            (e) => {
              27 === (0, p.hashFromEvent)(e) && r();
            },
            [r]
          ),
          u = (0, o.useCallback)(() => {
            (0, v.globalCloseMenu)(), r();
          }, [r]),
          d = (0, o.useCallback)(() => {
            i.current && i.current.focus({ preventScroll: !0 });
          }, []);
        return (
          (0, o.useEffect)(() => {
            const e =
              ((t = u),
              window.addEventListener('scroll', t),
              () => window.removeEventListener('scroll', t));
            var t;
            const n =
              l &&
              (function (e, t) {
                for (const n of e) n.subscribe(null, t);
                return () => {
                  for (const n of e) n.unsubscribe(null, t);
                };
              })(l, u);
            return () => {
              e(), (0, f.isFunction)(n) && n();
            };
          }, [l, u]),
          o.createElement(
            m.PopupMenu,
            {
              isOpened: !0,
              tabIndex: -1,
              reference: (e) => {
                'function' == typeof t
                  ? t(e)
                  : (0, f.isObject)(t) && (t.current = e),
                  (i.current = e);
              },
              onClose: n,
              onClickOutside: a,
              onKeyDown: c,
              onOpen: d,
              ...s,
            },
            e.children
          )
        );
      });
      var h,
        w = n(4598),
        E = n(90901),
        C = n(49775),
        y = n(34811);
      function b(e) {
        const { name: t, value: n, style: r, valueRightIcon: a } = e;
        return o.createElement(
          'div',
          { key: t, className: y.groupRow, style: r },
          o.createElement(
            'div',
            { className: y.groupCell },
            o.createElement('span', { className: y.text }, t)
          ),
          o.createElement(
            'div',
            { className: y.groupCell },
            o.createElement('span', { className: y.text }, n),
            a &&
              o.createElement(C.Icon, {
                icon: a.iconContent,
                className: s()(
                  y.groupIcon,
                  a.iconClass,
                  'apply-common-tooltip'
                ),
                title: a.tooltipText,
              })
          )
        );
      }
      function k(e) {
        const { text: t, href: n, onClick: r } = e;
        return o.createElement(
          'a',
          {
            href: n,
            onClick:
              r &&
              ((e) => {
                e.preventDefault(), r();
              }),
            className: y.link,
          },
          t
        );
      }
      function S(e) {
        var t;
        const { content: n = [], subTitle: r, cardType: a, anchor: l } = e,
          i = n.map((e) => {
            const { title: t, content: n } = e;
            return o.createElement(
              'div',
              { key: `${t}:${n.length}`, className: y.group },
              t && o.createElement('span', { className: y.groupTitle }, t),
              n.map((e) => o.createElement(b, { key: e.name, ...e }))
            );
          }),
          c = a ? s()(y.content, y[a]) : y.content,
          u =
            'string' == typeof r
              ? r
              : r.map((e) => o.createElement(b, { key: e.name, ...e }));
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            'div',
            { className: c },
            o.createElement(
              'div',
              { className: y.titleWrapper },
              e.tooltipIcon &&
                o.createElement(C.Icon, {
                  icon: e.tooltipIcon,
                  className: y.icon,
                  style: {
                    color:
                      null === (t = e.style) || void 0 === t ? void 0 : t.color,
                  },
                }),
              o.createElement('span', { className: y.title }, e.title)
            ),
            o.createElement('span', { className: y.subtitle }, u),
            i.length > 0 && o.createElement('div', null, i),
            l &&
              o.createElement(
                'div',
                { className: y.group },
                o.createElement(k, { ...l })
              )
          )
        );
      }
      !(function (e) {
        (e[(e.BeforeMarketOpen = y.beforeMarketOpen)] = 'BeforeMarketOpen'),
          (e[(e.AfterMarketClose = y.afterMarketClose)] = 'AfterMarketClose');
      })(h || (h = {}));
      var N = n(99838);
      const x = (0, w.mergeThemes)(E.DEFAULT_MENU_THEME, {
        menuWrap: N.menuWrap,
        menuBox: N.menuBox,
      });
      function D(e) {
        const {
            tooltips: t,
            onClose: n,
            onForceClose: r,
            onClickOutside: a,
            position: l,
            customCloseSubscriptions: m,
            showScrollFades: p,
            cardType: v,
          } = e,
          f = (0, o.useRef)(null),
          h = (0, o.useRef)(null),
          w = (0, o.useRef)(null),
          E = (0, o.useRef)(null),
          [C, y] = (0, o.useState)('100%'),
          b = (e) => {
            null !== e && y(e.clientWidth + 'px');
          },
          [k, D] = (0, o.useState)(!1);
        i(
          w,
          () => D(!1),
          () => D(!0)
        );
        const R = { display: k ? 'block' : 'none', width: C },
          [T, O] = (0, o.useState)(!1);
        i(
          E,
          () => O(!1),
          () => O(!0)
        );
        const B = { display: T ? 'block' : 'none', width: C },
          F = v ? s()(N.card, N[v]) : N.card;
        return o.createElement(
          d.DrawerManager,
          null,
          o.createElement(
            c.MatchMedia,
            { rule: 'screen and (max-width: 419px)' },
            (e) =>
              e
                ? o.createElement(
                    u.Drawer,
                    {
                      className: N.drawer,
                      onClose: r || n,
                      position: 'Bottom',
                    },
                    t.map((e, t) =>
                      o.createElement(
                        'div',
                        { key: '' + t, className: N.drawerItem },
                        o.createElement(S, { cardType: M.Mobile, ...e })
                      )
                    )
                  )
                : o.createElement(
                    g,
                    {
                      position: l,
                      theme: x,
                      onClose: n,
                      onForceClose: r || n,
                      onClickOutside: a,
                      customCloseSubscriptions: m,
                    },
                    p &&
                      o.createElement(
                        o.Fragment,
                        null,
                        o.createElement('div', {
                          ref: f,
                          className: N.fadeTop,
                          style: R,
                        }),
                        o.createElement('div', { ref: w })
                      ),
                    o.createElement(
                      'div',
                      { ref: b },
                      t.map((e, t) => {
                        var n;
                        return o.createElement(
                          'div',
                          {
                            key: '' + t,
                            className: F,
                            style: {
                              borderColor:
                                null === (n = e.style) || void 0 === n
                                  ? void 0
                                  : n.color,
                            },
                          },
                          o.createElement(S, { cardType: v, ...e })
                        );
                      })
                    ),
                    p &&
                      o.createElement(
                        o.Fragment,
                        null,
                        o.createElement('div', { ref: E }),
                        o.createElement('div', {
                          ref: h,
                          className: N.fadeBottom,
                          style: B,
                        })
                      )
                  )
          )
        );
      }
      var M;
      !(function (e) {
        (e.Mobile = 'mob'), (e.Minimal = 'mini');
      })(M || (M = {}));
      let R = null;
      function T(e) {
        if (!e.items.length) return;
        const t = {
          tooltips: e.items,
          onClose: O,
          onForceClose: () => {
            O(), 'function' == typeof e.onCustomClose && e.onCustomClose();
          },
          onClickOutside: e.onClickOutside,
          position: B.bind(null, e.position),
          customCloseSubscriptions: e.customCloseSubscriptions,
          showScrollFades: e.showScrollFades,
          cardType: e.cardType,
        };
        null === R &&
          ((R = document.createElement('div')), document.body.appendChild(R)),
          r.render(o.createElement(D, { ...t }), R);
      }
      function O() {
        null !== R && (r.unmountComponentAtNode(R), R.remove(), (R = null));
      }
      function B(e, t, n) {
        const o = e.target,
          r = o.getBoundingClientRect(),
          l = r.width - e.targetSize.w,
          s = r.height - e.targetSize.h,
          i = (0, a.ensureNotNull)(o.closest('.chart-container')),
          c = i.getBoundingClientRect(),
          u = (0, a.ensureNotNull)(i.parentElement).getBoundingClientRect(),
          d = r.left + e.point.x + l,
          m = Math.round(d - t / 2),
          p = Math.min(m + t, c.right, u.right);
        let v,
          f,
          g = Math.max(p - t, c.left, u.left);
        g + t >= u.right && (g = u.right - t);
        const h = c.bottom - (r.top + e.point.y + s),
          w = c.height - h - e.marginTop;
        return (
          w < n
            ? ((f = e.marginTop + c.top), (v = Math.max(w, 0)))
            : (f = c.height + c.top - h - n),
          { x: g, y: f, overrideHeight: v }
        );
      }
    },
    59726: (e, t, n) => {
      'use strict';
      function o(e, t, n, o, r) {
        function a(r) {
          if (e > r.timeStamp) return;
          const a = r.target;
          void 0 !== n &&
            null !== t &&
            null !== a &&
            a.ownerDocument === o &&
            (t.contains(a) || n(r));
        }
        return (
          r.click && o.addEventListener('click', a, !1),
          r.mouseDown && o.addEventListener('mousedown', a, !1),
          r.touchEnd && o.addEventListener('touchend', a, !1),
          r.touchStart && o.addEventListener('touchstart', a, !1),
          () => {
            o.removeEventListener('click', a, !1),
              o.removeEventListener('mousedown', a, !1),
              o.removeEventListener('touchend', a, !1),
              o.removeEventListener('touchstart', a, !1);
          }
        );
      }
      n.d(t, { addOutsideEventListener: () => o });
    },
    94004: (e, t, n) => {
      'use strict';
      n.d(t, { DrawerManager: () => r, DrawerContext: () => a });
      var o = n(67294);
      class r extends o.PureComponent {
        constructor(e) {
          super(e),
            (this._addDrawer = () => {
              const e = this.state.currentDrawer + 1;
              return this.setState({ currentDrawer: e }), e;
            }),
            (this._removeDrawer = () => {
              const e = this.state.currentDrawer - 1;
              return this.setState({ currentDrawer: e }), e;
            }),
            (this.state = { currentDrawer: 0 });
        }
        render() {
          return o.createElement(
            a.Provider,
            {
              value: {
                addDrawer: this._addDrawer,
                removeDrawer: this._removeDrawer,
                currentDrawer: this.state.currentDrawer,
              },
            },
            this.props.children
          );
        }
      }
      const a = o.createContext(null);
    },
    57374: (e, t, n) => {
      'use strict';
      n.d(t, { Drawer: () => p });
      var o = n(67294),
        r = n(16282),
        a = n(94184),
        l = n(67891),
        s = n(75761),
        i = n(4735),
        c = n(94004),
        u = n(43367),
        d = n(94884),
        m = n(64526);
      function p(e) {
        const {
            position: t = 'Bottom',
            onClose: n,
            children: p,
            className: v,
            theme: f = m,
          } = e,
          g = (0, r.ensureNotNull)((0, o.useContext)(c.DrawerContext)),
          [h, w] = (0, o.useState)(0),
          E = (0, o.useRef)(null),
          C = (0, o.useContext)(d.CloseDelegateContext);
        return (
          (0, o.useEffect)(() => {
            const e = (0, r.ensureNotNull)(E.current);
            return (
              e.focus({ preventScroll: !0 }),
              C.subscribe(g, n),
              (0, s.setFixedBodyState)(!0),
              u.CheckMobile.iOS() && (0, l.disableBodyScroll)(e),
              w(g.addDrawer()),
              () => {
                C.unsubscribe(g, n);
                const t = g.removeDrawer();
                u.CheckMobile.iOS() && (0, l.enableBodyScroll)(e),
                  0 === t && (0, s.setFixedBodyState)(!1);
              }
            );
          }, []),
          o.createElement(
            i.Portal,
            null,
            o.createElement(
              'div',
              { className: a(m.wrap, m['position' + t]) },
              h === g.currentDrawer &&
                o.createElement('div', { className: m.backdrop, onClick: n }),
              o.createElement(
                'div',
                {
                  className: a(m.drawer, f.drawer, m['position' + t], v),
                  ref: E,
                  tabIndex: -1,
                  'data-name': e['data-name'],
                },
                p
              )
            )
          )
        );
      }
    },
    76420: (e, t, n) => {
      'use strict';
      n.d(t, { PopupMenu: () => c });
      var o = n(67294),
        r = n(73935),
        a = n(4735),
        l = n(90901),
        s = n(94884),
        i = n(47165);
      function c(e) {
        const {
            controller: t,
            children: n,
            isOpened: c,
            closeOnClickOutside: u = !0,
            doNotCloseOn: d,
            onClickOutside: m,
            onClose: p,
            ...v
          } = e,
          f = (0, o.useContext)(s.CloseDelegateContext),
          g = (0, i.useOutsideEvent)({
            handler: function (e) {
              m && m(e);
              if (!u) return;
              if (d && e.target instanceof Node) {
                const t = r.findDOMNode(d);
                if (t instanceof Node && t.contains(e.target)) return;
              }
              p();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return c
          ? o.createElement(
              a.Portal,
              {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                pointerEvents: 'none',
              },
              o.createElement(
                'span',
                {
                  ref: g,
                  style: {
                    pointerEvents: 'auto',
                  },
                },
                o.createElement(
                  l.Menu,
                  {
                    ...v,
                    onClose: p,
                    onScroll: function (t) {
                      const { onScroll: n } = e;
                      n && n(t);
                    },
                    customCloseDelegate: f,
                    ref: t,
                  },
                  n
                )
              )
            )
          : null;
      }
    },
    4598: (e, t, n) => {
      'use strict';
      function o(e, t, n = {}) {
        const o = Object.assign({}, t);
        for (const r of Object.keys(t)) {
          const a = n[r] || r;
          a in e && (o[r] = [e[a], t[r]].join(' '));
        }
        return o;
      }
      function r(e, t, n = {}) {
        return Object.assign({}, e, o(e, t, n));
      }
      n.d(t, { weakComposeClasses: () => o, mergeThemes: () => r });
    },
  },
]);
