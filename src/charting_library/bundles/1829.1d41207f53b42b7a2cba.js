(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [1829],
  {
    40266: (e) => {
      e.exports = {
        container: 'container-QDd7xRJ1',
        'intent-default': 'intent-default-QDd7xRJ1',
        focused: 'focused-QDd7xRJ1',
        readonly: 'readonly-QDd7xRJ1',
        disabled: 'disabled-QDd7xRJ1',
        'with-highlight': 'with-highlight-QDd7xRJ1',
        grouped: 'grouped-QDd7xRJ1',
        'adjust-position': 'adjust-position-QDd7xRJ1',
        'first-row': 'first-row-QDd7xRJ1',
        'first-col': 'first-col-QDd7xRJ1',
        stretch: 'stretch-QDd7xRJ1',
        'font-size-medium': 'font-size-medium-QDd7xRJ1',
        'font-size-large': 'font-size-large-QDd7xRJ1',
        'size-small': 'size-small-QDd7xRJ1',
        'size-medium': 'size-medium-QDd7xRJ1',
        'size-large': 'size-large-QDd7xRJ1',
        'intent-success': 'intent-success-QDd7xRJ1',
        'intent-warning': 'intent-warning-QDd7xRJ1',
        'intent-danger': 'intent-danger-QDd7xRJ1',
        'intent-primary': 'intent-primary-QDd7xRJ1',
        'border-none': 'border-none-QDd7xRJ1',
        'border-thin': 'border-thin-QDd7xRJ1',
        'border-thick': 'border-thick-QDd7xRJ1',
        'no-corner-top-left': 'no-corner-top-left-QDd7xRJ1',
        'no-corner-top-right': 'no-corner-top-right-QDd7xRJ1',
        'no-corner-bottom-right': 'no-corner-bottom-right-QDd7xRJ1',
        'no-corner-bottom-left': 'no-corner-bottom-left-QDd7xRJ1',
        highlight: 'highlight-QDd7xRJ1',
        shown: 'shown-QDd7xRJ1',
      };
    },
    16321: (e) => {
      e.exports = {
        'inner-slot': 'inner-slot-1cMNQxXi',
        interactive: 'interactive-1cMNQxXi',
        icon: 'icon-1cMNQxXi',
        'inner-middle-slot': 'inner-middle-slot-1cMNQxXi',
        'before-slot': 'before-slot-1cMNQxXi',
        'after-slot': 'after-slot-1cMNQxXi',
      };
    },
    93463: (e) => {
      e.exports = {
        input: 'input-saRppuvn',
        'with-start-slot': 'with-start-slot-saRppuvn',
        'with-end-slot': 'with-end-slot-saRppuvn',
      };
    },
    94618: (e, t, n) => {
      'use strict';
      n.d(t, { ControlGroupContext: () => o });
      const o = n(67294).createContext({
        isGrouped: !1,
        cellState: { isTop: !0, isRight: !0, isBottom: !0, isLeft: !0 },
      });
    },
    48413: (e, t, n) => {
      'use strict';
      function o(e) {
        let t = 0;
        return (
          (e.isTop && e.isLeft) || (t += 1),
          (e.isTop && e.isRight) || (t += 2),
          (e.isBottom && e.isLeft) || (t += 8),
          (e.isBottom && e.isRight) || (t += 4),
          t
        );
      }
      n.d(t, { getGroupCellRemoveRoundBorders: () => o });
    },
    11888: (e, t, n) => {
      'use strict';
      n.d(t, { ControlSkeleton: () => x, InputClasses: () => m });
      var o = n(67294),
        r = n(94184),
        s = n(16282),
        i = n(66364),
        l = n(74818),
        u = n(94618),
        a = n(48413);
      var c = n(40266),
        d = n.n(c);
      function f(e) {
        let t = '';
        return (
          0 !== e &&
            (1 & e && (t = r(t, d()['no-corner-top-left'])),
            2 & e && (t = r(t, d()['no-corner-top-right'])),
            4 & e && (t = r(t, d()['no-corner-bottom-right'])),
            8 & e && (t = r(t, d()['no-corner-bottom-left']))),
          t
        );
      }
      function h(e, t, n, o) {
        const {
            removeRoundBorder: s,
            className: i,
            intent: l = 'default',
            borderStyle: u = 'thin',
            size: c,
            highlight: h,
            disabled: p,
            readonly: m,
            stretch: g,
            noReadonlyStyles: R,
            isFocused: x,
          } = e,
          b = f(null != s ? s : (0, a.getGroupCellRemoveRoundBorders)(n));
        return r(
          d().container,
          d()['intent-' + l],
          d()['border-' + u],
          c && d()['size-' + c],
          b,
          h && d()['with-highlight'],
          p && d().disabled,
          m && !R && d().readonly,
          x && d().focused,
          g && d().stretch,
          t && d().grouped,
          !o && d()['adjust-position'],
          n.isTop && d()['first-row'],
          n.isLeft && d()['first-col'],
          i
        );
      }
      function p(e, t) {
        const { highlight: n, highlightRemoveRoundBorder: o } = e;
        if (!n) return d().highlight;
        const s = f(null != o ? o : (0, a.getGroupCellRemoveRoundBorders)(t));
        return r(d().highlight, d().shown, s);
      }
      const m = {
          FontSizeMedium: (0, s.ensureDefined)(d()['font-size-medium']),
          FontSizeLarge: (0, s.ensureDefined)(d()['font-size-large']),
        },
        g = { passive: !1 };
      function R(e, t) {
        const {
            id: n,
            role: r,
            onFocus: s,
            onBlur: a,
            onMouseOver: c,
            onMouseOut: d,
            onMouseDown: f,
            onMouseUp: m,
            onKeyDown: R,
            onClick: x,
            tabIndex: b,
            startSlot: D,
            middleSlot: v,
            endSlot: C,
            onWheel: M,
            onWheelNoPassive: w = null,
          } = e,
          {
            isGrouped: Q,
            cellState: S,
            disablePositionAdjustment: J = !1,
          } = (0, o.useContext)(u.ControlGroupContext),
          y = (function (e, t = null, n) {
            const r = (0, o.useRef)(null),
              s = (0, o.useRef)(null),
              i = (0, o.useCallback)(() => {
                if (null === r.current || null === s.current) return;
                const [e, t, n] = s.current;
                null !== t && r.current.addEventListener(e, t, n);
              }, []),
              l = (0, o.useCallback)(() => {
                if (null === r.current || null === s.current) return;
                const [e, t, n] = s.current;
                null !== t && r.current.removeEventListener(e, t, n);
              }, []),
              u = (0, o.useCallback)((e) => {
                l(), (r.current = e), i();
              }, []);
            return (
              (0, o.useEffect)(
                () => ((s.current = [e, t, n]), i(), l),
                [e, t, n]
              ),
              u
            );
          })('wheel', w, g);
        return o.createElement(
          'span',
          {
            id: n,
            role: r,
            className: h(e, Q, S, J),
            tabIndex: b,
            ref: (0, i.useMergedRefs)([t, y]),
            onFocus: s,
            onBlur: a,
            onMouseOver: c,
            onMouseOut: d,
            onMouseDown: f,
            onMouseUp: m,
            onKeyDown: R,
            onClick: x,
            onWheel: M,
            ...(0, l.filterDataProps)(e),
            ...(0, l.filterAriaProps)(e),
          },
          D,
          v,
          C,
          o.createElement('span', { className: p(e, S) })
        );
      }
      R.displayName = 'ControlSkeleton';
      const x = o.forwardRef(R);
    },
    92136: (e, t, n) => {
      'use strict';
      n.d(t, {
        StartSlot: () => l,
        MiddleSlot: () => u,
        EndSlot: () => a,
        AfterSlot: () => c,
      });
      var o = n(67294),
        r = n(94184),
        s = n(16321),
        i = n.n(s);
      function l(e) {
        const {
          className: t,
          interactive: n = !0,
          icon: s = !1,
          children: l,
        } = e;
        return o.createElement(
          'span',
          {
            className: r(
              i()['inner-slot'],
              n && i().interactive,
              s && i().icon,
              t
            ),
          },
          l
        );
      }
      function u(e) {
        const { className: t, children: n } = e;
        return o.createElement(
          'span',
          { className: r(i()['inner-slot'], i()['inner-middle-slot'], t) },
          n
        );
      }
      function a(e) {
        const {
          className: t,
          interactive: n = !0,
          icon: s = !1,
          children: l,
        } = e;
        return o.createElement(
          'span',
          {
            className: r(
              i()['inner-slot'],
              n && i().interactive,
              s && i().icon,
              t
            ),
          },
          l
        );
      }
      function c(e) {
        const { className: t, children: n } = e;
        return o.createElement(
          'span',
          { className: r(i()['after-slot'], t) },
          n
        );
      }
    },
    81829: (e, t, n) => {
      'use strict';
      n.d(t, { InputControl: () => x });
      var o = n(67294),
        r = n(94184),
        s = n(74818),
        i = n(66213),
        l = n(1130),
        u = n(66364),
        a = n(65686),
        c = n(15965),
        d = n(53563),
        f = n(11888),
        h = n(92136),
        p = n(93463),
        m = n.n(p);
      function g(e) {
        return !(0, s.isAriaAttribute)(e) && !(0, s.isDataAttribute)(e);
      }
      function R(e) {
        const {
            id: t,
            title: n,
            role: i,
            tabIndex: l,
            placeholder: u,
            name: a,
            type: c,
            value: d,
            defaultValue: p,
            draggable: R,
            autoComplete: x,
            autoFocus: b,
            maxLength: D,
            min: v,
            max: C,
            step: M,
            pattern: w,
            inputMode: Q,
            onSelect: S,
            onFocus: J,
            onBlur: y,
            onKeyDown: F,
            onKeyUp: N,
            onKeyPress: k,
            onChange: E,
            onDragStart: B,
            size: z = 'medium',
            className: I,
            inputClassName: A,
            disabled: L,
            readonly: P,
            containerTabIndex: K,
            startSlot: G,
            endSlot: T,
            reference: U,
            containerReference: O,
            onContainerFocus: X,
            ...j
          } = e,
          H = (0, s.filterProps)(j, g),
          W = {
            ...(0, s.filterAriaProps)(j),
            ...(0, s.filterDataProps)(j),
            id: t,
            title: n,
            role: i,
            tabIndex: l,
            placeholder: u,
            name: a,
            type: c,
            value: d,
            defaultValue: p,
            draggable: R,
            autoComplete: x,
            autoFocus: b,
            maxLength: D,
            min: v,
            max: C,
            step: M,
            pattern: w,
            inputMode: Q,
            onSelect: S,
            onFocus: J,
            onBlur: y,
            onKeyDown: F,
            onKeyUp: N,
            onKeyPress: k,
            onChange: E,
            onDragStart: B,
          };
        return o.createElement(f.ControlSkeleton, {
          ...H,
          disabled: L,
          readonly: P,
          tabIndex: K,
          className: r(m().container, I),
          size: z,
          ref: O,
          onFocus: X,
          startSlot: G,
          middleSlot: o.createElement(
            h.MiddleSlot,
            null,
            o.createElement('input', {
              ...W,
              className: r(
                m().input,
                A,
                G && m()['with-start-slot'],
                T && m()['with-end-slot']
              ),
              disabled: L,
              readOnly: P,
              ref: U,
            })
          ),
          endSlot: T,
        });
      }
      function x(e) {
        e = (0, a.useControl)(e);
        const {
            disabled: t,
            autoSelectOnFocus: n,
            tabIndex: r = 0,
            onFocus: s,
            onBlur: f,
            reference: h,
            containerReference: p = null,
          } = e,
          m = (0, o.useRef)(null),
          g = (0, o.useRef)(null),
          [x, b] = (0, c.useFocus)(),
          D = t ? void 0 : x ? -1 : r,
          v = t ? void 0 : x ? r : -1,
          {
            isMouseDown: C,
            handleMouseDown: M,
            handleMouseUp: w,
          } = (0, d.useIsMouseDown)(),
          Q = (0, i.createSafeMulticastEventHandler)(
            b.onFocus,
            function (e) {
              n && !C.current && (0, l.selectAllContent)(e.currentTarget);
            },
            s
          ),
          S = (0, i.createSafeMulticastEventHandler)(b.onBlur, f),
          J = (0, o.useCallback)(
            (e) => {
              (m.current = e),
                h &&
                  ('function' == typeof h && h(e),
                  'object' == typeof h && (h.current = e));
            },
            [m, h]
          );
        return o.createElement(R, {
          ...e,
          isFocused: x,
          containerTabIndex: D,
          tabIndex: v,
          onContainerFocus: function (e) {
            g.current === e.target && null !== m.current && m.current.focus();
          },
          onFocus: Q,
          onBlur: S,
          reference: J,
          containerReference: (0, u.useMergedRefs)([g, p]),
          onMouseDown: M,
          onMouseUp: w,
        });
      }
    },
    65686: (e, t, n) => {
      'use strict';
      n.d(t, { useControl: () => s });
      var o = n(66213),
        r = n(15965);
      function s(e) {
        const {
            onFocus: t,
            onBlur: n,
            intent: s,
            highlight: i,
            disabled: l,
          } = e,
          [u, a] = (0, r.useFocus)(),
          c = (0, o.createSafeMulticastEventHandler)(l ? void 0 : a.onFocus, t),
          d = (0, o.createSafeMulticastEventHandler)(l ? void 0 : a.onBlur, n);
        return {
          ...e,
          intent: s || (u ? 'primary' : 'default'),
          highlight: null != i ? i : u,
          onFocus: c,
          onBlur: d,
        };
      }
    },
    15965: (e, t, n) => {
      'use strict';
      n.d(t, { useFocus: () => r });
      var o = n(67294);
      function r(e) {
        const [t, n] = (0, o.useState)(!1);
        return [
          t,
          {
            onFocus: (0, o.useCallback)(
              function (t) {
                (void 0 !== e && e.current !== t.target) || n(!0);
              },
              [e]
            ),
            onBlur: (0, o.useCallback)(
              function (t) {
                (void 0 !== e && e.current !== t.target) || n(!1);
              },
              [e]
            ),
          },
        ];
      }
    },
    53563: (e, t, n) => {
      'use strict';
      n.d(t, { useIsMouseDown: () => r });
      var o = n(67294);
      function r() {
        const e = (0, o.useRef)(!1),
          t = (0, o.useCallback)(() => {
            e.current = !0;
          }, [e]),
          n = (0, o.useCallback)(() => {
            e.current = !1;
          }, [e]);
        return { isMouseDown: e, handleMouseDown: t, handleMouseUp: n };
      }
    },
    66364: (e, t, n) => {
      'use strict';
      n.d(t, { useMergedRefs: () => r });
      var o = n(67294);
      function r(e) {
        return (0, o.useCallback)(
          (function (e) {
            return (t) => {
              e.forEach((e) => {
                'function' == typeof e ? e(t) : null !== e && (e.current = t);
              });
            };
          })(e),
          e
        );
      }
    },
    1130: (e, t, n) => {
      'use strict';
      function o(e) {
        null !== e && e.setSelectionRange(0, e.value.length);
      }
      n.d(t, { selectAllContent: () => o });
    },
    66213: (e, t, n) => {
      'use strict';
      function o(...e) {
        return (t) => {
          for (const n of e) void 0 !== n && n(t);
        };
      }
      n.d(t, { createSafeMulticastEventHandler: () => o });
    },
  },
]);
