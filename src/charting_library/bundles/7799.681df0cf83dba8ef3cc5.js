(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [7799],
  {
    75831: (e) => {
      e.exports = {
        itemRow: 'itemRow-1SBAfF8E',
        favoriteButton: 'favoriteButton-1SBAfF8E',
        active: 'active-1SBAfF8E',
        selected: 'selected-1SBAfF8E',
        mobile: 'mobile-1SBAfF8E',
        itemInfo: 'itemInfo-1SBAfF8E',
        title: 'title-1SBAfF8E',
        details: 'details-1SBAfF8E',
        itemInfoWithPadding: 'itemInfoWithPadding-1SBAfF8E',
        favorite: 'favorite-1SBAfF8E',
        removeButton: 'removeButton-1SBAfF8E',
      };
    },
    65561: (e) => {
      e.exports = { scrollWrap: 'scrollWrap-2LZ1ZhWc' };
    },
    53123: (e) => {
      e.exports = {
        wrap: 'wrap-3C3rxkDX',
        'wrap--horizontal': 'wrap--horizontal-3C3rxkDX',
        bar: 'bar-3C3rxkDX',
        barInner: 'barInner-3C3rxkDX',
        'barInner--horizontal': 'barInner--horizontal-3C3rxkDX',
        'bar--horizontal': 'bar--horizontal-3C3rxkDX',
      };
    },
    69560: (e) => {
      e.exports = {
        favorite: 'favorite-I_fAY9V2',
        disabled: 'disabled-I_fAY9V2',
        active: 'active-I_fAY9V2',
        checked: 'checked-I_fAY9V2',
      };
    },
    66549: (e) => {
      e.exports = {
        'tablet-small-breakpoint': 'screen and (max-width: 428px)',
        item: 'item-2IihgTnv',
        hovered: 'hovered-2IihgTnv',
        isDisabled: 'isDisabled-2IihgTnv',
        isActive: 'isActive-2IihgTnv',
        shortcut: 'shortcut-2IihgTnv',
        toolbox: 'toolbox-2IihgTnv',
        withIcon: 'withIcon-2IihgTnv',
        icon: 'icon-2IihgTnv',
        labelRow: 'labelRow-2IihgTnv',
        label: 'label-2IihgTnv',
        showOnHover: 'showOnHover-2IihgTnv',
      };
    },
    15169: (e) => {
      e.exports = {
        button: 'button-3B9fDLtm',
        disabled: 'disabled-3B9fDLtm',
        active: 'active-3B9fDLtm',
        hidden: 'hidden-3B9fDLtm',
      };
    },
    62638: (e, t, n) => {
      'use strict';
      n.d(t, { DialogContentItem: () => v });
      var o = n(67294),
        r = n(94184),
        i = n.n(r),
        l = n(43367),
        s = n(65043),
        c = n(14303);
      function a(e) {
        const { url: t, ...n } = e;
        return t
          ? o.createElement('a', { ...n, href: t })
          : o.createElement('div', { ...n });
      }
      var u = n(75831);
      function v(e) {
        const {
          title: t,
          subtitle: n,
          removeBtnLabel: r,
          onClick: v,
          onClickFavorite: f,
          onClickRemove: m,
          isActive: h,
          isSelected: g,
          isFavorite: b,
          isMobile: p = !1,
          showFavorite: E = !0,
          ...C
        } = e;
        return o.createElement(
          a,
          {
            ...C,
            className: i()(
              u.itemRow,
              h && !g && u.active,
              p && u.mobile,
              g && u.selected
            ),
            onClick: d.bind(null, v),
            'data-role': 'list-item',
            'data-active': h,
          },
          E &&
            f &&
            o.createElement(s.FavoriteButton, {
              className: i()(
                u.favoriteButton,
                b && u.favorite,
                l.CheckMobile.any() && u.mobile
              ),
              isActive: h && !g,
              isFilled: b,
              onClick: d.bind(null, f),
              'data-name': 'list-item-favorite-button',
              'data-favorite': b,
            }),
          o.createElement(
            'div',
            { className: i()(u.itemInfo, !E && u.itemInfoWithPadding) },
            o.createElement(
              'div',
              {
                className: i()(u.title, h && !g && u.active, p && u.mobile),
                'data-name': 'list-item-title',
              },
              t
            ),
            o.createElement(
              'div',
              { className: i()(u.details, h && !g && u.active, p && u.mobile) },
              n
            )
          ),
          o.createElement(c.RemoveButton, {
            className: u.removeButton,
            isActive: h && !g,
            onClick: d.bind(null, m),
            'data-name': 'list-item-remove-button',
            title: r,
          })
        );
      }
      function d(e, t) {
        t.defaultPrevented || (t.preventDefault(), e(t));
      }
    },
    27947: (e, t, n) => {
      'use strict';
      n.d(t, { OverlayScrollContainer: () => f });
      var o = n(67294),
        r = n(94184),
        i = n.n(r),
        l = n(16282),
        s = n(57968),
        c = n(76553);
      const a = n(53123);
      function u(e) {
        const {
            size: t,
            scrollSize: n,
            clientSize: r,
            scrollProgress: u,
            onScrollProgressChange: v,
            horizontal: d,
            theme: f = a,
            onDragStart: m,
            onDragEnd: h,
            minBarSize: g = 40,
          } = e,
          b = (0, o.useRef)(null),
          p = (0, o.useRef)(null),
          [E, C] = (0, o.useState)(!1),
          w = (0, o.useRef)(0);
        (0, o.useEffect)(() => {
          const e = (0, l.ensureNotNull)(b.current).ownerDocument;
          return (
            E
              ? (m && m(),
                e &&
                  (e.addEventListener('mousemove', x),
                  e.addEventListener('mouseup', L)))
              : h && h(),
            () => {
              e &&
                (e.removeEventListener('mousemove', x),
                e.removeEventListener('mouseup', L));
            }
          );
        }, [E]);
        const N = t / n || 0,
          k = r * N || 0,
          S = Math.max(k, g),
          D = (t - S) / (t - k),
          I = (function (e) {
            if ((0, c.isRtl)() && d) return e - n + r;
            return e;
          })((0, s.clamp)(u, 0, n - t));
        return o.createElement(
          'div',
          {
            ref: b,
            className: i()(f.wrap, d && f['wrap--horizontal']),
            style: { [d ? 'width' : 'height']: t },
            onMouseDown: function (e) {
              if (e.isDefaultPrevented()) return;
              e.preventDefault();
              const o = (0, l.ensureNotNull)(p.current).getBoundingClientRect();
              w.current = (d ? o.width : o.height) / 2;
              const r = n - t;
              let i =
                B(e.nativeEvent, (0, l.ensureNotNull)(b.current)) - w.current;
              i < 0
                ? ((i = 0),
                  (w.current = B(
                    e.nativeEvent,
                    (0, l.ensureNotNull)(b.current)
                  )))
                : i > r * N * D &&
                  ((i = r * N * D),
                  (w.current =
                    B(e.nativeEvent, (0, l.ensureNotNull)(b.current)) - i));
              v(i / N / D), C(!0);
            },
          },
          o.createElement(
            'div',
            {
              ref: p,
              className: i()(f.bar, d && f['bar--horizontal']),
              style: {
                [d ? 'minWidth' : 'minHeight']: g,
                [d ? 'width' : 'height']: S,
                transform: `translate${d ? 'X' : 'Y'}(${I * N * D || 0}px)`,
              },
              onMouseDown: function (e) {
                e.preventDefault(),
                  (w.current = B(
                    e.nativeEvent,
                    (0, l.ensureNotNull)(p.current)
                  )),
                  C(!0);
              },
            },
            o.createElement('div', {
              className: i()(f.barInner, d && f['barInner--horizontal']),
            })
          )
        );
        function x(e) {
          const t = B(e, (0, l.ensureNotNull)(b.current)) - w.current;
          v(t / N / D);
        }
        function L(e) {
          C(!1);
        }
        function B(e, t) {
          const n = t.getBoundingClientRect();
          return d ? e.clientX - n.left : e.clientY - n.top;
        }
      }
      var v = n(11086),
        d = n(65561);
      function f(e) {
        const {
            reference: t,
            className: n,
            containerHeight: i = 0,
            containerWidth: l = 0,
            contentHeight: s = 0,
            contentWidth: c = 0,
            scrollPosTop: a = 0,
            scrollPosLeft: f = 0,
            onVerticalChange: m,
            onHorizontalChange: h,
            visible: g,
          } = e,
          [b, p] = (0, v.useHover)(),
          [E, C] = (0, o.useState)(!1),
          w = i < s,
          N = l < c,
          k = w && N ? 8 : 0;
        return o.createElement(
          'div',
          {
            ...p,
            ref: t,
            className: r(n, d.scrollWrap),
            style: { visibility: g || b || E ? 'visible' : 'hidden' },
          },
          w &&
            o.createElement(u, {
              size: i - k,
              scrollSize: s - k,
              clientSize: i - k,
              scrollProgress: a,
              onScrollProgressChange: function (e) {
                m && m(e);
              },
              onDragStart: S,
              onDragEnd: D,
            }),
          N &&
            o.createElement(u, {
              size: l - k,
              scrollSize: c - k,
              clientSize: l - k,
              scrollProgress: f,
              onScrollProgressChange: function (e) {
                h && h(e);
              },
              onDragStart: S,
              onDragEnd: D,
              horizontal: !0,
            })
        );
        function S() {
          C(!0);
        }
        function D() {
          C(!1);
        }
      }
    },
    65043: (e, t, n) => {
      'use strict';
      n.d(t, { FavoriteButton: () => v });
      var o = n(79881),
        r = n(67294),
        i = n(94184),
        l = n(49775),
        s = n(72579),
        c = n(23204),
        a = n(69560);
      const u = {
        add: (0, o.t)('Add to favorites'),
        remove: (0, o.t)('Remove from favorites'),
      };
      function v(e) {
        const { className: t, isFilled: n, isActive: o, onClick: v, ...d } = e;
        return r.createElement(l.Icon, {
          ...d,
          className: i(
            a.favorite,
            'apply-common-tooltip',
            n && a.checked,
            o && a.active,
            t
          ),
          icon: n ? s : c,
          onClick: v,
          title: n ? u.remove : u.add,
        });
      }
    },
    88098: (e, t, n) => {
      'use strict';
      n.d(t, { useDimensions: () => r });
      var o = n(67294);
      function r() {
        const [e, t] = (0, o.useState)(null);
        return [
          (0, o.useCallback)(
            (n) => {
              (n.width === (null == e ? void 0 : e.width) &&
                n.height === e.height) ||
                t(n);
            },
            [e]
          ),
          e,
        ];
      }
    },
    11086: (e, t, n) => {
      'use strict';
      n.d(t, {
        hoverMouseEventFilter: () => i,
        useAccurateHover: () => l,
        useHover: () => r,
      });
      var o = n(67294);
      function r() {
        const [e, t] = (0, o.useState)(!1);
        return [
          e,
          {
            onMouseOver: function (e) {
              i(e) && t(!0);
            },
            onMouseOut: function (e) {
              i(e) && t(!1);
            },
          },
        ];
      }
      function i(e) {
        return !e.currentTarget.contains(e.relatedTarget);
      }
      function l(e) {
        const [t, n] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            const t = (t) => {
              if (null === e.current) return;
              const o = e.current.contains(t.target);
              n(o);
            };
            return (
              document.addEventListener('mouseover', t),
              () => document.removeEventListener('mouseover', t)
            );
          }, []),
          t
        );
      }
    },
    77400: (e, t, n) => {
      'use strict';
      n.d(t, { useOverlayScroll: () => c });
      var o = n(67294),
        r = n(16282),
        i = n(11086),
        l = n(43367);
      const s = { onMouseOver: () => {}, onMouseOut: () => {} };
      function c(e, t = l.CheckMobile.any()) {
        const n = (0, o.useRef)(null),
          c = e || (0, o.useRef)(null),
          [a, u] = (0, i.useHover)(),
          [v, d] = (0, o.useState)({
            reference: n,
            containerHeight: 0,
            containerWidth: 0,
            contentHeight: 0,
            contentWidth: 0,
            scrollPosTop: 0,
            scrollPosLeft: 0,
            onVerticalChange: function (e) {
              d((t) => ({ ...t, scrollPosTop: e })),
                ((0, r.ensureNotNull)(c.current).scrollTop = e);
            },
            onHorizontalChange: function (e) {
              d((t) => ({ ...t, scrollPosLeft: e })),
                ((0, r.ensureNotNull)(c.current).scrollLeft = e);
            },
            visible: a,
          }),
          f = (0, o.useCallback)(() => {
            if (!c.current) return;
            const {
                clientHeight: e,
                scrollHeight: t,
                scrollTop: o,
                clientWidth: r,
                scrollWidth: i,
                scrollLeft: l,
              } = c.current,
              s = n.current ? n.current.offsetTop : 0;
            d((n) => ({
              ...n,
              containerHeight: e - s,
              contentHeight: t - s,
              scrollPosTop: o,
              containerWidth: r,
              contentWidth: i,
              scrollPosLeft: l,
            }));
          }, []);
        function m() {
          d((e) => ({
            ...e,
            scrollPosTop: (0, r.ensureNotNull)(c.current).scrollTop,
            scrollPosLeft: (0, r.ensureNotNull)(c.current).scrollLeft,
          }));
        }
        return (
          (0, o.useEffect)(() => {
            a && f(), d((e) => ({ ...e, visible: a }));
          }, [a]),
          (0, o.useEffect)(() => {
            const e = c.current;
            return (
              e && e.addEventListener('scroll', m),
              () => {
                e && e.removeEventListener('scroll', m);
              }
            );
          }, [c]),
          [v, t ? s : u, c, f]
        );
      }
    },
    95860: (e, t, n) => {
      'use strict';
      n.d(t, {
        DEFAULT_POPUP_MENU_ITEM_THEME: () => a,
        PopupMenuItem: () => d,
      });
      var o = n(67294),
        r = n(94184),
        i = n(79424),
        l = n(87438),
        s = n(74818),
        c = n(66549);
      const a = c;
      function u(e) {
        const { reference: t, ...n } = e,
          r = { ...n, ref: t };
        return o.createElement(e.href ? 'a' : 'div', r);
      }
      function v(e) {
        e.stopPropagation();
      }
      function d(e) {
        const {
            id: t,
            role: n,
            'aria-selected': a,
            className: d,
            title: f,
            labelRowClassName: m,
            labelClassName: h,
            shortcut: g,
            forceShowShortcuts: b,
            icon: p,
            isActive: E,
            isDisabled: C,
            isHovered: w,
            appearAsDisabled: N,
            label: k,
            link: S,
            showToolboxOnHover: D,
            target: I,
            rel: x,
            toolbox: L,
            reference: B,
            onMouseOut: M,
            onMouseOver: P,
            suppressToolboxClick: A = !0,
            theme: T = c,
          } = e,
          z = (0, s.filterDataProps)(e),
          O = (0, o.useRef)(null);
        return o.createElement(
          u,
          {
            ...z,
            id: t,
            role: n,
            'aria-selected': a,
            className: r(d, T.item, p && T.withIcon, {
              [T.isActive]: E,
              [T.isDisabled]: C || N,
              [T.hovered]: w,
            }),
            title: f,
            href: S,
            target: I,
            rel: x,
            reference: function (e) {
              (O.current = e), 'function' == typeof B && B(e);
              'object' == typeof B && (B.current = e);
            },
            onClick: function (t) {
              const {
                dontClosePopup: n,
                onClick: o,
                onClickArg: r,
                trackEventObject: s,
              } = e;
              if (C) return;
              s && (0, l.trackEvent)(s.category, s.event, s.label);
              o && o(r, t);
              n || (0, i.globalCloseMenu)();
            },
            onContextMenu: function (t) {
              const { trackEventObject: n, trackRightClick: o } = e;
              n &&
                o &&
                (0, l.trackEvent)(n.category, n.event, n.label + '_rightClick');
            },
            onMouseUp: function (t) {
              const { trackEventObject: n, trackMouseWheelClick: o } = e;
              if (1 === t.button && S && n) {
                let e = n.label;
                o && (e += '_mouseWheelClick'),
                  (0, l.trackEvent)(n.category, n.event, e);
              }
            },
            onMouseOver: P,
            onMouseOut: M,
          },
          void 0 !== p &&
            o.createElement('div', {
              className: T.icon,
              dangerouslySetInnerHTML: { __html: p },
            }),
          o.createElement(
            'div',
            { className: r(T.labelRow, m) },
            o.createElement('div', { className: r(T.label, h) }, k)
          ),
          (void 0 !== g || b) &&
            o.createElement(
              'div',
              { className: T.shortcut },
              (H = g) && H.split('+').join(' + ')
            ),
          void 0 !== L &&
            o.createElement(
              'div',
              {
                onClick: A ? v : void 0,
                className: r(T.toolbox, { [T.showOnHover]: D }),
              },
              L
            )
        );
        var H;
      }
    },
    76420: (e, t, n) => {
      'use strict';
      n.d(t, { PopupMenu: () => a });
      var o = n(67294),
        r = n(73935),
        i = n(4735),
        l = n(90901),
        s = n(94884),
        c = n(47165);
      function a(e) {
        const {
            controller: t,
            children: n,
            isOpened: a,
            closeOnClickOutside: u = !0,
            doNotCloseOn: v,
            onClickOutside: d,
            onClose: f,
            ...m
          } = e,
          h = (0, o.useContext)(s.CloseDelegateContext),
          g = (0, c.useOutsideEvent)({
            handler: function (e) {
              d && d(e);
              if (!u) return;
              if (v && e.target instanceof Node) {
                const t = r.findDOMNode(v);
                if (t instanceof Node && t.contains(e.target)) return;
              }
              f();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return a
          ? o.createElement(
              i.Portal,
              {
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                pointerEvents: 'none',
              },
              o.createElement(
                'span',
                { ref: g, style: { pointerEvents: 'auto' } },
                o.createElement(
                  l.Menu,
                  {
                    ...m,
                    onClose: f,
                    onScroll: function (t) {
                      const { onScroll: n } = e;
                      n && n(t);
                    },
                    customCloseDelegate: h,
                    ref: t,
                  },
                  n
                )
              )
            )
          : null;
      }
    },
    14303: (e, t, n) => {
      'use strict';
      n.d(t, { RemoveButton: () => u });
      var o = n(79881),
        r = n(67294),
        i = n(94184),
        l = n(49775),
        s = n(36535),
        c = n(15169);
      const a = { remove: (0, o.t)('Remove') };
      function u(e) {
        const {
          className: t,
          isActive: n,
          onClick: o,
          title: u,
          hidden: v,
          'data-name': d = 'remove-button',
          ...f
        } = e;
        return r.createElement(l.Icon, {
          ...f,
          'data-name': d,
          className: i(
            c.button,
            'apply-common-tooltip',
            n && c.active,
            v && c.hidden,
            t
          ),
          icon: s,
          onClick: o,
          title: u || a.remove,
        });
      }
    },
    36535: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>';
    },
    72579: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>';
    },
    23204: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>';
    },
  },
]);
