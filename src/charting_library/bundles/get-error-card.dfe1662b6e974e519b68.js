(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [139],
  {
    58211: (e) => {
      e.exports = {
        errorCard: 'errorCard-1ZTLibqo',
        errorCard__icon: 'errorCard__icon-1ZTLibqo',
        errorCard_size_big: 'errorCard_size_big-1ZTLibqo',
        errorCard__message: 'errorCard__message-1ZTLibqo',
        errorCardRendererContainer: 'errorCardRendererContainer-1ZTLibqo',
      };
    },
    49775: (e, r, t) => {
      'use strict';
      t.d(r, { Icon: () => n });
      var o = t(67294);
      const n = o.forwardRef((e, r) => {
        const { icon: t = '', ...n } = e;
        return o.createElement('span', {
          ...n,
          ref: r,
          dangerouslySetInnerHTML: { __html: t },
        });
      });
    },
    39450: (e, r, t) => {
      'use strict';
      t.r(r),
        t.d(r, {
          ErrorCard: () => v,
          ResizableErrorCard: () => C,
          ErrorCardRenderer: () => g,
        });
      var o = t(67294),
        n = t(73935),
        s = t(58848),
        a = t(94184),
        i = t.n(a),
        c = t(49775),
        d = (t(79881), t(58413)),
        l = t(44186),
        h = t(58211);
      const u = {
          ghost: { 1: d, 2: l },
          'stop-hand': { 1: void 0, 2: void 0 },
        },
        v = o.forwardRef((e, r) => {
          const { icon: t, message: n, size: s = 1 } = e;
          return o.createElement(
            'div',
            {
              ref: r,
              className: i()(h.errorCard, 2 === s && h.errorCard_size_big),
            },
            o.createElement(c.Icon, {
              icon: t && u[t][s],
              className: h.errorCard__icon,
            }),
            o.createElement('div', { className: h.errorCard__message }, n)
          );
        });
      function C(e) {
        const { icon: r, message: t } = e,
          n = o.useRef(null),
          [a, i] = o.useState(1);
        return (
          o.useEffect(() => {
            const e = n.current;
            if (e) {
              const r = new ResizeObserver((0, s.default)(c, 150));
              return r.observe(e), () => r.disconnect();
            }
          }, []),
          o.createElement(v, { ref: n, message: t, icon: r, size: a })
        );
        function c() {
          const e = n.current;
          e && (e.clientWidth < 200 || e.clientHeight < 200 ? i(1) : i(2));
        }
      }
      class g {
        constructor() {
          this._state = {
            message: null,
            icon: void 0,
            backgroundColor: null,
            textColor: null,
          };
          const e = document.createElement('div');
          e.classList.add(h.errorCardRendererContainer), (this.container = e);
        }
        destroy() {
          n.unmountComponentAtNode(this.container);
        }
        update(e) {
          (this._state = Object.assign({}, this._state, e)),
            this._updateContainer(),
            this._render();
        }
        _updateContainer() {
          const { backgroundColor: e, textColor: r } = this._state;
          this.container.style.setProperty('--backgroundColor', e),
            this.container.style.setProperty('--textColor', r);
        }
        _render() {
          const { message: e, icon: r } = this._state;
          n.render(
            e
              ? o.createElement(C, { message: e, icon: r })
              : o.createElement(o.Fragment, null),
            this.container
          );
        }
      }
    },
    44186: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120"><path fill="currentColor" d="M24 39a35 35 0 0 1 70 0v77H78v-12H66v9H51V94H39l-.05 21v1H24V39zM59 6a33 33 0 0 0-33 33v75h10.95L37 93v-1h16v19h11v-9h16v12h12V39A33 33 0 0 0 59 6zm-9 36a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm20 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>';
    },
    58413: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="72" height="72"><path fill="currentColor" d="M15 24a21 21 0 1 1 42 0v45H46v-7h-6v5h-9V56h-6v13H15V24zM36 5a19 19 0 0 0-19 19v43h6V54h10v11h5v-5h10v7h7V24A19 19 0 0 0 36 5z"/><circle fill="currentColor" cx="29.5" cy="24.5" r="1.5"/><circle fill="currentColor" cx="42.5" cy="24.5" r="1.5"/></svg>';
    },
  },
]);
