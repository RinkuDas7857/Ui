(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [4940],
  {
    33467: (e) => {
      e.exports = {
        menuWrap: 'menuWrap-g78rwseC',
        isMeasuring: 'isMeasuring-g78rwseC',
        scrollWrap: 'scrollWrap-g78rwseC',
        momentumBased: 'momentumBased-g78rwseC',
        menuBox: 'menuBox-g78rwseC',
        isHidden: 'isHidden-g78rwseC',
      };
    },
    68521: (e, t, n) => {
      'use strict';
      n.d(t, { MatchMedia: () => s });
      var r = n(67294);
      class s extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._handleChange = () => {
              this.forceUpdate();
            }),
            (this.state = { query: window.matchMedia(this.props.rule) });
        }
        componentDidMount() {
          this._subscribe(this.state.query);
        }
        componentDidUpdate(e, t) {
          this.state.query !== t.query &&
            (this._unsubscribe(t.query), this._subscribe(this.state.query));
        }
        componentWillUnmount() {
          this._unsubscribe(this.state.query);
        }
        render() {
          return this.props.children(this.state.query.matches);
        }
        static getDerivedStateFromProps(e, t) {
          return e.rule !== t.query.media
            ? { query: window.matchMedia(e.rule) }
            : null;
        }
        _subscribe(e) {
          e.addListener(this._handleChange);
        }
        _unsubscribe(e) {
          e.removeListener(this._handleChange);
        }
      }
    },
    97873: (e, t, n) => {
      'use strict';
      n.d(t, { MenuContext: () => r });
      const r = n(67294).createContext(null);
    },
    90901: (e, t, n) => {
      'use strict';
      n.d(t, { DEFAULT_MENU_THEME: () => _, Menu: () => g });
      var r = n(67294),
        s = n(94184),
        i = n.n(s),
        o = n(16282),
        l = n(57968),
        a = n(39197),
        u = n(78106),
        c = n(79424),
        h = n(90071),
        d = n(60934),
        p = n(2291),
        m = n(97873),
        f = n(33467);
      const _ = f;
      class g extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._containerRef = null),
            (this._scrollWrapRef = null),
            (this._raf = null),
            (this._manager = new h.OverlapManager()),
            (this._hotkeys = null),
            (this._scroll = 0),
            (this._handleContainerRef = (e) => {
              (this._containerRef = e),
                this.props.reference &&
                  ('function' == typeof this.props.reference &&
                    this.props.reference(e),
                  'object' == typeof this.props.reference &&
                    (this.props.reference.current = e));
            }),
            (this._handleScrollWrapRef = (e) => {
              (this._scrollWrapRef = e),
                'function' == typeof this.props.scrollWrapReference &&
                  this.props.scrollWrapReference(e),
                'object' == typeof this.props.scrollWrapReference &&
                  (this.props.scrollWrapReference.current = e);
            }),
            (this._handleMeasure = (e) => {
              var t, n, r;
              if (this.state.isMeasureValid) return;
              const { position: s } = this.props,
                i = (0, o.ensureNotNull)(this._containerRef);
              let a = i.getBoundingClientRect();
              const u = document.documentElement.clientHeight,
                c = document.documentElement.clientWidth;
              let h = u - 0;
              const d = a.height > h;
              if (d) {
                ((0, o.ensureNotNull)(this._scrollWrapRef).style.overflowY =
                  'scroll'),
                  (a = i.getBoundingClientRect());
              }
              const { width: p, height: m } = a,
                f = 'function' == typeof s ? s(p, m, u) : s,
                _ =
                  c -
                  (null !== (t = f.overrideWidth) && void 0 !== t ? t : p) -
                  0,
                g = (0, l.clamp)(f.x, 0, Math.max(0, _)),
                v =
                  u -
                  (null !== (n = f.overrideHeight) && void 0 !== n ? n : m) -
                  0;
              let C = (0, l.clamp)(f.y, 0, Math.max(0, v));
              f.forbidCorrectYCoord && C < f.y && ((h -= f.y - C), (C = f.y)),
                this.setState(
                  {
                    appearingMenuHeight:
                      null !== (r = f.overrideHeight) && void 0 !== r
                        ? r
                        : d
                        ? h
                        : void 0,
                    appearingMenuWidth: f.overrideWidth,
                    appearingPosition: { x: g, y: C },
                    isMeasureValid: !0,
                  },
                  () => {
                    this._restoreScrollPosition(), e && e();
                  }
                );
            }),
            (this._restoreScrollPosition = () => {
              const e = document.activeElement,
                t = (0, o.ensureNotNull)(this._containerRef);
              if (null !== e && t.contains(e))
                try {
                  e.scrollIntoView();
                } catch (e) {}
              else
                (0, o.ensureNotNull)(this._scrollWrapRef).scrollTop =
                  this._scroll;
            }),
            (this._resizeForced = () => {
              this.setState({
                appearingMenuHeight: void 0,
                appearingMenuWidth: void 0,
                appearingPosition: void 0,
                isMeasureValid: void 0,
              });
            }),
            (this._resize = () => {
              null === this._raf &&
                (this._raf = requestAnimationFrame(() => {
                  this.setState({
                    appearingMenuHeight: void 0,
                    appearingMenuWidth: void 0,
                    appearingPosition: void 0,
                    isMeasureValid: void 0,
                  }),
                    (this._raf = null);
                }));
            }),
            (this._handleGlobalClose = () => {
              this.props.onClose();
            }),
            (this._handleSlot = (e) => {
              this._manager.setContainer(e);
            }),
            (this._handleScroll = () => {
              this._scroll = (0, o.ensureNotNull)(
                this._scrollWrapRef
              ).scrollTop;
            }),
            (this.state = {});
        }
        componentDidMount() {
          this._handleMeasure(this.props.onOpen);
          const { customCloseDelegate: e = c.globalCloseDelegate } = this.props;
          e.subscribe(this, this._handleGlobalClose),
            window.addEventListener('resize', this._resize);
          const t = null !== this.context;
          this._hotkeys ||
            t ||
            ((this._hotkeys = d.createGroup({ desc: 'Popup menu' })),
            this._hotkeys.add({
              desc: 'Close',
              hotkey: 27,
              handler: () => this._handleGlobalClose(),
            }));
        }
        componentDidUpdate() {
          this._handleMeasure();
        }
        componentWillUnmount() {
          const { customCloseDelegate: e = c.globalCloseDelegate } = this.props;
          e.unsubscribe(this, this._handleGlobalClose),
            window.removeEventListener('resize', this._resize),
            this._hotkeys && (this._hotkeys.destroy(), (this._hotkeys = null)),
            null !== this._raf &&
              (cancelAnimationFrame(this._raf), (this._raf = null));
        }
        render() {
          const {
              id: e,
              role: t,
              'aria-labelledby': n,
              'aria-activedescendant': s,
              children: o,
              minWidth: l,
              theme: c = f,
              className: h,
              maxHeight: d,
              onMouseOver: _,
              onMouseOut: g,
              onKeyDown: C,
              onFocus: b,
              onBlur: M,
            } = this.props,
            {
              appearingMenuHeight: y,
              appearingMenuWidth: x,
              appearingPosition: W,
              isMeasureValid: w,
            } = this.state;
          return r.createElement(
            m.MenuContext.Provider,
            { value: this },
            r.createElement(
              p.SubmenuHandler,
              null,
              r.createElement(
                u.SlotContext.Provider,
                { value: this._manager },
                r.createElement(
                  'div',
                  {
                    id: e,
                    role: t,
                    'aria-labelledby': n,
                    'aria-activedescendant': s,
                    className: i()(h, c.menuWrap, !w && c.isMeasuring),
                    style: {
                      height: y,
                      left: W && W.x,
                      minWidth: l,
                      position: 'fixed',
                      top: W && W.y,
                      width: x,
                    },
                    'data-name': this.props['data-name'],
                    ref: this._handleContainerRef,
                    onScrollCapture: this.props.onScroll,
                    onContextMenu: a.preventDefaultForContextMenu,
                    tabIndex: this.props.tabIndex,
                    onMouseOver: _,
                    onMouseOut: g,
                    onKeyDown: C,
                    onFocus: b,
                    onBlur: M,
                  },
                  r.createElement(
                    'div',
                    {
                      className: i()(
                        c.scrollWrap,
                        !this.props.noMomentumBasedScroll && c.momentumBased
                      ),
                      style: {
                        overflowY: void 0 !== y ? 'scroll' : 'auto',
                        maxHeight: d,
                      },
                      onScrollCapture: this._handleScroll,
                      ref: this._handleScrollWrapRef,
                    },
                    r.createElement(v, { className: c.menuBox }, o)
                  )
                )
              ),
              r.createElement(u.Slot, { reference: this._handleSlot })
            )
          );
        }
        update(e) {
          e ? this._resizeForced() : this._resize();
        }
      }
      function v(e) {
        const t = (0, o.ensureNotNull)((0, r.useContext)(p.SubmenuContext)),
          n = r.useRef(null);
        return r.createElement(
          'div',
          {
            ref: n,
            className: e.className,
            onMouseOver: function (e) {
              if (
                !(
                  null !== t.current &&
                  e.target instanceof Node &&
                  ((r = e.target),
                  null === (s = n.current) || void 0 === s
                    ? void 0
                    : s.contains(r))
                )
              )
                return;
              var r, s;
              t.isSubmenuNode(e.target) || t.setCurrent(null);
            },
            'data-name': 'menu-inner',
          },
          e.children
        );
      }
      g.contextType = p.SubmenuContext;
    },
    94884: (e, t, n) => {
      'use strict';
      n.d(t, { CloseDelegateContext: () => i });
      var r = n(67294),
        s = n(79424);
      const i = r.createContext(s.globalCloseDelegate);
    },
    2291: (e, t, n) => {
      'use strict';
      n.d(t, { SubmenuContext: () => s, SubmenuHandler: () => i });
      var r = n(67294);
      const s = r.createContext(null);
      function i(e) {
        const [t, n] = (0, r.useState)(null),
          i = (0, r.useRef)(null),
          o = (0, r.useRef)(new Map());
        return (
          (0, r.useEffect)(
            () => () => {
              null !== i.current && clearTimeout(i.current);
            },
            []
          ),
          r.createElement(
            s.Provider,
            {
              value: {
                current: t,
                setCurrent: function (e) {
                  null !== i.current &&
                    (clearTimeout(i.current), (i.current = null));
                  null === t
                    ? n(e)
                    : (i.current = setTimeout(() => {
                        (i.current = null), n(e);
                      }, 100));
                },
                registerSubmenu: function (e, t) {
                  return (
                    o.current.set(e, t),
                    () => {
                      o.current.delete(e);
                    }
                  );
                },
                isSubmenuNode: function (e) {
                  return Array.from(o.current.values()).some((t) => t(e));
                },
              },
            },
            e.children
          )
        );
      }
    },
  },
]);
