(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [6166],
  {
    57432: (e) => {
      e.exports = {
        container: 'container-RnpzRzG6',
        centerElement: 'centerElement-RnpzRzG6',
        text: 'text-RnpzRzG6',
      };
    },
    20348: (e) => {
      e.exports = {
        container: 'container-113jHcZc',
        content: 'content-113jHcZc',
        arrowHolder: 'arrowHolder-113jHcZc',
        'arrowHolder--below': 'arrowHolder--below-113jHcZc',
        'arrowHolder--above': 'arrowHolder--above-113jHcZc',
        'arrowHolder--before': 'arrowHolder--before-113jHcZc',
        'arrowHolder--after': 'arrowHolder--after-113jHcZc',
        'arrowHolder--above-fix': 'arrowHolder--above-fix-113jHcZc',
        'arrowHolder--before-rtl-fix': 'arrowHolder--before-rtl-fix-113jHcZc',
        'arrowHolder--after-ltr-fix': 'arrowHolder--after-ltr-fix-113jHcZc',
        label: 'label-113jHcZc',
        closeButton: 'closeButton-113jHcZc',
      };
    },
    49775: (e, t, r) => {
      'use strict';
      r.d(t, { Icon: () => o });
      var n = r(67294);
      const o = n.forwardRef((e, t) => {
        const { icon: r = '', ...o } = e;
        return n.createElement('span', {
          ...o,
          ref: t,
          dangerouslySetInnerHTML: { __html: r },
        });
      });
    },
    25057: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { ChartEventHintRenderer: () => p });
      var n = r(67294),
        o = r(73935),
        s = r(94184),
        i = r(49775),
        a = (r(4735), r(36535)),
        c = r(20348);
      n.PureComponent;
      function l(e) {
        const {
          className: t,
          containerClassName: r,
          contentClassName: o,
          reference: l,
          style: d,
          arrow: h = !0,
          arrowClassName: p,
          arrowReference: u,
          onClose: m,
          arrowStyle: w,
          children: _,
          ...f
        } = e;
        return n.createElement(
          'div',
          { ...f, className: t, ref: l, style: d },
          h && n.createElement('div', { className: p, ref: u, style: w }),
          n.createElement(
            'div',
            { className: s(c.container, r) },
            n.createElement('div', { className: s(c.content, o) }, _),
            m &&
              n.createElement(i.Icon, {
                className: c.closeButton,
                icon: a,
                onClick: m,
              })
          )
        );
      }
      var d = r(57432);
      function h(e) {
        const { text: t, onClose: r } = e;
        return n.createElement(
          'div',
          { className: d.container },
          n.createElement(
            'div',
            { className: d.centerElement },
            n.createElement(
              l,
              { arrow: !1, onClose: r },
              n.createElement('div', { className: d.text }, t)
            )
          )
        );
      }
      class p {
        constructor(e) {
          (this._wrap = document.createElement('div')), (this._container = e);
        }
        show(e, t) {
          if (!this._wrap) return;
          this.hide(), this._container.append(this._wrap);
          const r = {
            text: e,
            onClose: () => {
              t && t(), this.hide();
            },
          };
          o.render(n.createElement(h, { ...r }), this._wrap);
        }
        hide() {
          this._wrap &&
            (o.unmountComponentAtNode(this._wrap), this._wrap.remove());
        }
        destroy() {
          this.hide(), delete this._wrap;
        }
      }
    },
    90071: (e, t, r) => {
      'use strict';
      r.d(t, { OverlapManager: () => s, getRootOverlapManager: () => a });
      var n = r(16282);
      class o {
        constructor() {
          this._storage = [];
        }
        add(e) {
          this._storage.push(e);
        }
        remove(e) {
          this._storage = this._storage.filter((t) => e !== t);
        }
        has(e) {
          return this._storage.includes(e);
        }
        getItems() {
          return this._storage;
        }
      }
      class s {
        constructor(e = document) {
          (this._storage = new o()),
            (this._windows = new Map()),
            (this._index = 0),
            (this._document = e),
            (this._container = e.createDocumentFragment());
        }
        setContainer(e) {
          const t = this._container,
            r = null === e ? this._document.createDocumentFragment() : e;
          !(function (e, t) {
            Array.from(e.childNodes).forEach((e) => {
              e.nodeType === Node.ELEMENT_NODE && t.appendChild(e);
            });
          })(t, r),
            (this._container = r);
        }
        registerWindow(e) {
          this._storage.has(e) || this._storage.add(e);
        }
        ensureWindow(e, t = { position: 'fixed', direction: 'normal' }) {
          const r = this._windows.get(e);
          if (void 0 !== r) return r;
          this.registerWindow(e);
          const n = this._document.createElement('div');
          if (
            ((n.style.position = t.position),
            (n.style.zIndex = this._index.toString()),
            (n.dataset.id = e),
            void 0 !== t.index)
          ) {
            const e = this._container.childNodes.length;
            if (t.index >= e) this._container.appendChild(n);
            else if (t.index <= 0)
              this._container.insertBefore(n, this._container.firstChild);
            else {
              const e = this._container.childNodes[t.index];
              this._container.insertBefore(n, e);
            }
          } else
            'reverse' === t.direction
              ? this._container.insertBefore(n, this._container.firstChild)
              : this._container.appendChild(n);
          return this._windows.set(e, n), ++this._index, n;
        }
        unregisterWindow(e) {
          this._storage.remove(e);
          const t = this._windows.get(e);
          void 0 !== t &&
            (null !== t.parentElement && t.parentElement.removeChild(t),
            this._windows.delete(e));
        }
        getZindex(e) {
          const t = this.ensureWindow(e);
          return parseInt(t.style.zIndex || '0');
        }
        moveToTop(e) {
          if (this.getZindex(e) !== this._index) {
            this.ensureWindow(e).style.zIndex = (++this._index).toString();
          }
        }
        removeWindow(e) {
          this.unregisterWindow(e);
        }
      }
      const i = new WeakMap();
      function a(e = document) {
        const t = e.getElementById('overlap-manager-root');
        if (null !== t) return (0, n.ensureDefined)(i.get(t));
        {
          const t = new s(e),
            r = (function (e) {
              const t = e.createElement('div');
              return (
                (t.style.position = 'absolute'),
                (t.style.zIndex = (150).toString()),
                (t.style.top = '0px'),
                (t.style.left = '0px'),
                (t.id = 'overlap-manager-root'),
                t
              );
            })(e);
          return i.set(r, t), t.setContainer(r), e.body.appendChild(r), t;
        }
      }
    },
    4735: (e, t, r) => {
      'use strict';
      r.d(t, { Portal: () => c, PortalContext: () => l });
      var n = r(67294),
        o = r(73935),
        s = r(45259),
        i = r(90071),
        a = r(78106);
      class c extends n.PureComponent {
        constructor() {
          super(...arguments), (this._uuid = (0, s.guid)());
        }
        componentWillUnmount() {
          this._manager().removeWindow(this._uuid);
        }
        render() {
          const e = this._manager().ensureWindow(
            this._uuid,
            this.props.layerOptions
          );
          return (
            (e.style.top = this.props.top || ''),
            (e.style.bottom = this.props.bottom || ''),
            (e.style.left = this.props.left || ''),
            (e.style.right = this.props.right || ''),
            (e.style.pointerEvents = this.props.pointerEvents || ''),
            o.createPortal(
              n.createElement(l.Provider, { value: this }, this.props.children),
              e
            )
          );
        }
        moveToTop() {
          this._manager().moveToTop(this._uuid);
        }
        _manager() {
          return null === this.context
            ? (0, i.getRootOverlapManager)()
            : this.context;
        }
      }
      c.contextType = a.SlotContext;
      const l = n.createContext(null);
    },
    78106: (e, t, r) => {
      'use strict';
      r.d(t, { Slot: () => o, SlotContext: () => s });
      var n = r(67294);
      class o extends n.Component {
        shouldComponentUpdate() {
          return !1;
        }
        render() {
          return n.createElement('div', {
            style: { position: 'fixed', zIndex: 150, left: 0, top: 0 },
            ref: this.props.reference,
          });
        }
      }
      const s = n.createContext(null);
    },
    36535: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>';
    },
  },
]);
