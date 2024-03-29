(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [4013],
  {
    8863: (e) => {
      e.exports = {
        scrollable: 'scrollable-FNPZI_Xo',
        content: 'content-FNPZI_Xo',
        row: 'row-FNPZI_Xo',
        title: 'title-FNPZI_Xo',
        control: 'control-FNPZI_Xo',
      };
    },
    84954: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { ToolWidgetIntervalsAddDialog: () => v });
      var l = n(67294),
        o = n(79881),
        a = n(7591),
        c = n(45221),
        r = n(81829),
        s = n(79424),
        i = n(73991),
        m = n(24084),
        u = n(8863);
      const d = m.INTERVALS.map((e) => ({ value: e.name, content: e.label }));
      function v(e) {
        const { onAdd: t, onClose: n, onUnmount: v } = e,
          [N, f] = (0, l.useState)(m.INTERVALS[0].name),
          [C, E] = (0, l.useState)('1');
        return (
          (0, l.useEffect)(
            () => () => {
              v && v();
            },
            []
          ),
          l.createElement(a.AdaptiveConfirmDialog, {
            dataName: 'add-custom-interval-dialog',
            title: (0, o.t)('Add custom time interval'),
            isOpened: !0,
            onSubmit: function () {
              t(C, N), n();
            },
            onCancel: n,
            onClickOutside: n,
            onClose: n,
            render: () =>
              l.createElement(
                i.TouchScrollContainer,
                { className: u.scrollable, onScroll: b },
                l.createElement(
                  'div',
                  { className: u.content },
                  l.createElement(
                    'div',
                    { className: u.row },
                    l.createElement(
                      'div',
                      { className: u.title },
                      (0, o.t)('Type')
                    ),
                    l.createElement(c.Select, {
                      id: 'metric-items',
                      className: u.control,
                      value: N,
                      items: d,
                      onChange: p,
                    })
                  ),
                  l.createElement(
                    'div',
                    { className: u.row },
                    l.createElement(
                      'div',
                      { className: u.title },
                      (0, o.t)('Interval')
                    ),
                    l.createElement(r.InputControl, {
                      className: u.control,
                      inputMode: 'numeric',
                      maxLength: 6,
                      value: C,
                      onChange: g,
                    })
                  )
                )
              ),
            defaultActionOnClose: 'none',
            submitButtonText: (0, o.t)('Add'),
            submitOnEnterKey: !1,
            fullScreen: !0,
          })
        );
        function g(e) {
          const { value: t } = e.currentTarget;
          /^[0-9]*$/.test(t) && E(t);
        }
        function b() {
          s.globalCloseDelegate.fire();
        }
        function p(e) {
          f(e);
        }
      }
    },
  },
]);
