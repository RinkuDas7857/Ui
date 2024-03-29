(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [2077],
  {
    48450: (e) => {
      e.exports = {
        dialog: 'dialog-23lGwisF',
        dialogInner: 'dialogInner-23lGwisF',
        titleWrapper: 'titleWrapper-23lGwisF',
        title: 'title-23lGwisF',
        infoHint: 'infoHint-23lGwisF',
        form: 'form-23lGwisF',
        inputWrapper: 'inputWrapper-23lGwisF',
        input: 'input-23lGwisF',
        hint: 'hint-23lGwisF',
        error: 'error-23lGwisF',
      };
    },
    74818: (e, t, n) => {
      'use strict';
      function r(e) {
        return a(e, o);
      }
      function i(e) {
        return a(e, s);
      }
      function a(e, t) {
        const n = Object.entries(e).filter(t),
          r = {};
        for (const [e, t] of n) r[e] = t;
        return r;
      }
      function o(e) {
        const [t, n] = e;
        return 0 === t.indexOf('data-') && 'string' == typeof n;
      }
      function s(e) {
        return 0 === e[0].indexOf('aria-');
      }
      n.d(t, {
        filterDataProps: () => r,
        filterAriaProps: () => i,
        filterProps: () => a,
        isDataAttribute: () => o,
        isAriaAttribute: () => s,
      });
    },
    12028: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { showChangeIntervalDialog: () => M });
      var r = n(67294),
        i = n(73935),
        a = n(94184),
        o = n.n(a),
        s = n(79881),
        l = n(81829),
        u = n(11888),
        c = n(24287),
        d = n(32402),
        p = n(49775),
        g = n(33237);
      const m = (0, s.t)(
          'Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)'
        ),
        f = (0, s.t)(
          "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)"
        );
      function v(e) {
        const { className: t, isSecondsEnabled: n } = e;
        return r.createElement(p.Icon, {
          icon: g,
          className: o()('apply-common-tooltip', t),
          title: n ? f : m,
        });
      }
      var h = n(72454),
        w = n(1467);
      var E = n(35001),
        y = n(48450);
      function C(e) {
        const { initVal: t, selectOnInit: n, onClose: i } = e,
          a = (0, r.useRef)(null),
          [p, g] = (0, r.useState)(t.toUpperCase()),
          m = (0, r.useMemo)(() => (0, h.parseIntervalValue)(p), [p]),
          f = (function (e, t) {
            return (0, r.useMemo)(() => {
              let n = !t.error && (0, h.intervalIsSupported)(e);
              if (!n) return !1;
              const r = t.unit;
              if ('R' === r && t.qty > (0, w.getMaxResolutionValue)('R'))
                n = !1;
              else if (null === r || 'H' === r) {
                t.qty * ('H' === r ? 60 : 1) >
                  (0, w.getMaxResolutionValue)('1') && (n = !1);
              } else
                'S' === r
                  ? t.qty > (0, w.getMaxResolutionValue)('S') && (n = !1)
                  : 'T' === r && 1 !== t.qty && (n = !1);
              return n;
            }, [e, t]);
          })(p, m),
          C = (0, r.useMemo)(() => {
            if (!f) return null;
            const e = m.qty + (m.unit || '');
            return (0, w.getTranslatedResolutionModel)(e).hint;
          }, [f, m]);
        return (
          (0, r.useLayoutEffect)(() => {
            var e, t;
            n
              ? null === (e = a.current) || void 0 === e || e.select()
              : null === (t = a.current) || void 0 === t || t.focus();
          }, [n]),
          r.createElement(
            d.PopupDialog,
            {
              className: y.dialog,
              'data-dialog-name': 'change-interval-dialog',
              isOpened: !0,
              onClickOutside: i,
              onFocus: function () {
                var e;
                null === (e = a.current) || void 0 === e || e.focus();
              },
              onKeyDown: function (e) {
                27 === e.keyCode && (null == i || i());
              },
            },
            r.createElement(
              'div',
              { className: y.dialogInner },
              r.createElement(
                'div',
                { className: y.titleWrapper },
                r.createElement(
                  'div',
                  { className: y.title },
                  (0, s.t)('Change interval')
                ),
                r.createElement(v, {
                  className: y.infoHint,
                  isSecondsEnabled: (0, w.isSecondsEnabled)(),
                })
              ),
              r.createElement(
                'form',
                {
                  className: y.form,
                  onSubmit: function (e) {
                    e.preventDefault();
                    const t = c.linking.interval.value(),
                      n = E.Interval.normalize(p);
                    n &&
                      t !== n &&
                      f &&
                      ((r = n),
                      (0, w.setLastUsedResolution)(r),
                      c.linking.interval.setValue(r));
                    var r;
                    null == i || i();
                  },
                },
                r.createElement(l.InputControl, {
                  className: o()(y.inputWrapper, u.InputClasses.FontSizeLarge),
                  inputClassName: y.input,
                  type: 'text',
                  size: 'large',
                  reference: a,
                  value: p,
                  maxLength: 8,
                  intent: f ? void 0 : 'danger',
                  onChange: function (e) {
                    const { value: t } = e.target;
                    g(t.toUpperCase());
                  },
                })
              ),
              f
                ? r.createElement('div', { className: y.hint }, C)
                : r.createElement(
                    'div',
                    { className: o()(y.hint, y.error) },
                    (0, s.t)('Not applicable')
                  )
            )
          )
        );
      }
      var O = n(39518);
      function M(e) {
        if (
          O.dialogsOpenerManager.isOpened('ChangeIntervalDialog') ||
          O.dialogsOpenerManager.isOpened('SymbolSearch')
        )
          return;
        const t = document.createElement('div'),
          { initVal: n, selectOnInit: a, onClose: o } = e,
          s = r.createElement(C, {
            initVal: n,
            selectOnInit: a,
            onClose: function () {
              i.unmountComponentAtNode(t),
                O.dialogsOpenerManager.setAsClosed('ChangeIntervalDialog'),
                null == o || o();
            },
          });
        i.render(s, t),
          O.dialogsOpenerManager.setAsOpened('ChangeIntervalDialog');
      }
    },
    59726: (e, t, n) => {
      'use strict';
      function r(e, t, n, r, i) {
        function a(i) {
          if (e > i.timeStamp) return;
          const a = i.target;
          void 0 !== n &&
            null !== t &&
            null !== a &&
            a.ownerDocument === r &&
            (t.contains(a) || n(i));
        }
        return (
          i.click && r.addEventListener('click', a, !1),
          i.mouseDown && r.addEventListener('mousedown', a, !1),
          i.touchEnd && r.addEventListener('touchend', a, !1),
          i.touchStart && r.addEventListener('touchstart', a, !1),
          () => {
            r.removeEventListener('click', a, !1),
              r.removeEventListener('mousedown', a, !1),
              r.removeEventListener('touchend', a, !1),
              r.removeEventListener('touchstart', a, !1);
          }
        );
      }
      n.d(t, { addOutsideEventListener: () => r });
    },
    39518: (e, t, n) => {
      'use strict';
      n.d(t, { DialogsOpenerManager: () => r, dialogsOpenerManager: () => i });
      class r {
        constructor() {
          this._storage = new Map();
        }
        setAsOpened(e, t) {
          this._storage.set(e, t);
        }
        setAsClosed(e) {
          this._storage.delete(e);
        }
        isOpened(e) {
          return this._storage.has(e);
        }
        getDialogPayload(e) {
          return this._storage.get(e);
        }
      }
      const i = new r();
    },
    33237: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 8.5h1.5V14"/><circle fill="currentColor" cx="9" cy="5" r="1"/><path stroke="currentColor" d="M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"/></svg>';
    },
  },
]);
