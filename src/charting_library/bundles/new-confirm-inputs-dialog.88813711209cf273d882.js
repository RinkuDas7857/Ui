(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [3030],
  {
    2125: (t) => {
      t.exports = {
        separator: 'separator-3wSrFLTr',
        scrollable: 'scrollable-3wSrFLTr',
      };
    },
    19932: (t, e, n) => {
      'use strict';
      n.r(e), n.d(e, { ConfirmInputsDialogRenderer: () => f });
      var i = n(73935),
        o = n(67294),
        r = n(79881),
        s = n(7591),
        c = n(79424),
        l = n(73991),
        u = n(4093),
        a = n(5729),
        p = n.n(a),
        d = n(43367),
        h = n(2125);
      function m(t) {
        const {
            title: e,
            confirmInputs: n,
            inputsProperty: i,
            model: a,
            confirmInputsType: m,
            onCancel: f,
            onSubmit: y,
            onClose: S,
            onStudyInputChange: C,
          } = t,
          [I, b] = (0, o.useState)(!0),
          _ = (0, o.useMemo)(function () {
            const t = new (p())();
            return {
              isInputsStudy: !0,
              symbolsResolved: () => t,
              resolvedSymbolInfoBySymbol: () => null,
              tempProperties: i,
            };
          }, []),
          w = (0, o.useRef)(null),
          [D, g] = (0, o.useState)(E());
        return (
          (0, o.useEffect)(() => {
            if (!d.CheckMobile.any() && I && 'symbol' === m && w.current) {
              const t = w.current.querySelector('input');
              t && t.focus();
            }
          }, [I]),
          o.createElement(s.AdaptiveConfirmDialog, {
            dataName: 'confirm-inputs-dialog',
            title: e,
            isOpened: I,
            onSubmit: function () {
              y(i.state().inputs), T();
            },
            onCancel: f,
            onClickOutside: T,
            onClose: T,
            render: () =>
              o.createElement(
                o.Fragment,
                null,
                o.createElement('div', { className: h.separator }),
                o.createElement(
                  l.TouchScrollContainer,
                  { className: h.scrollable, onScroll: v },
                  o.createElement(u.InputsTabContent, {
                    reference: w,
                    property: i,
                    model: a,
                    study: _,
                    inputs: n,
                    onStudyInputChange: P,
                  })
                )
              ),
            defaultActionOnClose: 'none',
            submitButtonText: (0, r.t)('Apply'),
            submitButtonDisabled: D,
            submitOnEnterKey: !1,
          })
        );
        function v() {
          c.globalCloseDelegate.fire();
        }
        function T() {
          b(!1), S();
        }
        function E() {
          const { inputs: t } = i.state();
          for (const e of n)
            if ('symbol' === e.type && !e.optional && '' === t[e.id]) return !0;
          return !1;
        }
        function P(t, e) {
          null == C || C(t, e), g(E());
        }
      }
      class f {
        constructor(t, e, n, o, r, s, c, l) {
          (this._container = document.createElement('div')),
            (this._handleClose = () => {
              i.unmountComponentAtNode(this._container), this._onClose();
            }),
            (this._title = t),
            (this._confirmInputs = e),
            (this._model = r),
            (this._confirmInputsType = o),
            (this._onSubmit = s),
            (this._onClose = c),
            (this._onStudyInputChange = l),
            (this._inputsProperty = n);
        }
        show() {
          i.render(
            o.createElement(m, {
              title: this._title,
              confirmInputs: this._confirmInputs,
              inputsProperty: this._inputsProperty,
              model: this._model,
              confirmInputsType: this._confirmInputsType,
              onSubmit: this._onSubmit,
              onCancel: () => {},
              onClose: this._handleClose,
              onStudyInputChange: this._onStudyInputChange,
            }),
            this._container
          );
        }
      }
    },
    6825: (t, e, n) => {
      'use strict';
      n.r(e), n.d(e, { selectInputValuesOnChart: () => c });
      var i = n(16282),
        o = n(53312),
        r = n(79881),
        s = n(36135);
      o.colorsPalette['color-cold-gray-500'];
      async function c(t, e, n, o) {
        let c;
        const l = (0, s.getInputGroups)(e);
        t.model().model();
        for await (const t of l)
          await u(t).catch((t) => {
            throw new Error(t);
          });
        return { customSourceId: void 0, destPane: c };
        async function u(t) {
          if ((0, s.isGroup)(t))
            if ((0, s.isInputInlines)(t)) {
              const e = (function (t) {
                if (2 !== t.length || t[0].type === t[1].type) return null;
                return 'price' === t[0].type
                  ? { price: t[0], time: t[1] }
                  : { price: t[1], time: t[0] };
              })(t.children);
              if (e) {
                const { time: n, price: i } = e,
                  s = n.inline
                    ? (0, r.t)(
                        'Set the "{inputInline}" time and price for "{studyShortDescription}"',
                        {
                          replace: {
                            inputInline: n.inline,
                            studyShortDescription: o,
                          },
                        }
                      )
                    : (0, r.t)(
                        'Set the time and price for "{studyShortDescription}"',
                        { replace: { studyShortDescription: o } }
                      );
                await p(t, 'all', s, n.id, i.id);
              } else for await (const e of t.children) await a(e);
            } else for await (const e of t.children) await u(e);
          else await a(t);
        }
        async function a(t) {
          const e = 'time' === t.type,
            n = e ? 'time' : 'price',
            i = t.name
              ? (0, r.t)(
                  'Set the "{inputTitle}" time for "{studyShortDescription}"',
                  { replace: { inputTitle: t.name, studyShortDescription: o } }
                )
              : (0, r.t)('Set the time for "{studyShortDescription}"', {
                  replace: { studyShortDescription: o },
                }),
            s = t.name
              ? (0, r.t)(
                  'Set the "{inputTitle}" price for "{studyShortDescription}"',
                  { replace: { inputTitle: t.name, studyShortDescription: o } }
                )
              : (0, r.t)('Set the price for "{studyShortDescription}"', {
                  replace: { studyShortDescription: o },
                }),
            c = e ? i : s,
            l = e ? t.id : void 0,
            u = e ? void 0 : t.id;
          await p(t, n, c, l, u);
        }
        async function p(e, o, r, s, l) {
          const u = await t.requestSelectPoint(
            { pointType: o, pane: c, lineColor: void 0 },
            r
          );
          void 0 === c && (c = u.pane);
          const a = n.childs().inputs;
          a &&
            (s &&
              (0, i.ensureDefined)(a.child(s)).setValue(
                1e3 * (u.point.time || 0)
              ),
            l && (0, i.ensureDefined)(a.child(l)).setValue(u.point.price));
        }
      }
    },
  },
]);
