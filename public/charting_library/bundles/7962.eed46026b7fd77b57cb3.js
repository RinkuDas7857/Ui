(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [7962],
  {
    31877: (e) => {
      e.exports = {
        button: 'button-2Vpz_LXc',
        hover: 'hover-2Vpz_LXc',
        isInteractive: 'isInteractive-2Vpz_LXc',
        isGrouped: 'isGrouped-2Vpz_LXc',
        newStyles: 'newStyles-2Vpz_LXc',
        isActive: 'isActive-2Vpz_LXc',
        isOpened: 'isOpened-2Vpz_LXc',
        isDisabled: 'isDisabled-2Vpz_LXc',
        text: 'text-2Vpz_LXc',
        icon: 'icon-2Vpz_LXc',
      };
    },
    51492: (e) => {
      e.exports = {
        button: 'button-1SoiPS-f',
        hover: 'hover-1SoiPS-f',
        arrow: 'arrow-1SoiPS-f',
        arrowWrap: 'arrowWrap-1SoiPS-f',
        newStyles: 'newStyles-1SoiPS-f',
        isOpened: 'isOpened-1SoiPS-f',
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
    2632: (e) => {
      e.exports = { icon: 'icon-19OjtB6A', dropped: 'dropped-19OjtB6A' };
    },
    19330: (e, t, o) => {
      o.d(t, {
        VerticalAttachEdge: () => r,
        HorizontalAttachEdge: () => i,
        VerticalDropDirection: () => n,
        HorizontalDropDirection: () => a,
        getPopupPositioner: () => l,
      });
      var r,
        i,
        n,
        a,
        s = o(16282);
      !(function (e) {
        (e[(e.Top = 0)] = 'Top'), (e[(e.Bottom = 1)] = 'Bottom');
      })(r || (r = {})),
        (function (e) {
          (e[(e.Left = 0)] = 'Left'), (e[(e.Right = 1)] = 'Right');
        })(i || (i = {})),
        (function (e) {
          (e[(e.FromTopToBottom = 0)] = 'FromTopToBottom'), (e[(e.FromBottomToTop = 1)] = 'FromBottomToTop');
        })(n || (n = {})),
        (function (e) {
          (e[(e.FromLeftToRight = 0)] = 'FromLeftToRight'), (e[(e.FromRightToLeft = 1)] = 'FromRightToLeft');
        })(a || (a = {}));
      const c = {
        verticalAttachEdge: r.Bottom,
        horizontalAttachEdge: i.Left,
        verticalDropDirection: n.FromTopToBottom,
        horizontalDropDirection: a.FromLeftToRight,
        verticalMargin: 0,
        horizontalMargin: 0,
        matchButtonAndListboxWidths: !1,
      };
      function l(e, t) {
        return (o, l) => {
          const p = (0, s.ensureNotNull)(e).getBoundingClientRect(),
            {
              verticalAttachEdge: d = c.verticalAttachEdge,
              verticalDropDirection: h = c.verticalDropDirection,
              horizontalAttachEdge: u = c.horizontalAttachEdge,
              horizontalDropDirection: m = c.horizontalDropDirection,
              horizontalMargin: w = c.horizontalMargin,
              verticalMargin: v = c.verticalMargin,
              matchButtonAndListboxWidths: g = c.matchButtonAndListboxWidths,
            } = t,
            D = d === r.Top ? -1 * v : v,
            f = u === i.Right ? p.right : p.left,
            b = d === r.Top ? p.top : p.bottom,
            C = { x: f - (m === a.FromRightToLeft ? o : 0) + w, y: b - (h === n.FromBottomToTop ? l : 0) + D };
          return g && (C.overrideWidth = p.width), C;
        };
      }
    },
    47218: (e, t, o) => {
      o.d(t, { DEFAULT_TOOL_WIDGET_BUTTON_THEME: () => c, ToolWidgetButton: () => l });
      var r = o(67294),
        i = o(94184),
        n = o(49775),
        a = o(19470),
        s = o(31877);
      const c = s,
        l = r.forwardRef((e, t) => {
          const {
              icon: o,
              isActive: c,
              isOpened: l,
              isDisabled: p,
              isGrouped: d,
              isHovered: h,
              onClick: u,
              text: m,
              textBeforeIcon: w,
              title: v,
              theme: g = s,
              className: D,
              forceInteractive: f,
              'data-name': b,
              ...C
            } = e,
            T = i(D, g.button, v && 'apply-common-tooltip', {
              [g.isActive]: c,
              [g.isOpened]: l,
              [g.isInteractive]: (f || Boolean(u)) && !p,
              [g.isDisabled]: p,
              [g.isGrouped]: d,
              [g.hover]: h,
              [g.newStyles]: a.hasNewHeaderToolbarStyles,
            }),
            _ =
              o &&
              ('string' == typeof o ? r.createElement(n.Icon, { className: g.icon, icon: o }) : r.cloneElement(o, { className: i(g.icon, o.props.className) }));
          return r.createElement(
            'div',
            { ...C, ref: t, 'data-role': 'button', className: T, onClick: p ? void 0 : u, title: v, 'data-name': b },
            w && m && r.createElement('div', { className: i('js-button-text', g.text) }, m),
            _,
            !w && m && r.createElement('div', { className: i('js-button-text', g.text) }, m)
          );
        });
    },
    67842: (e, t, o) => {
      o.d(t, { ToolWidgetMenu: () => m });
      var r = o(67294),
        i = o(94184),
        n = o(76420),
        a = o(88262),
        s = o(74818),
        c = o(94004),
        l = o(57374),
        p = o(19330),
        d = o(68521),
        h = o(19470),
        u = o(51492);
      class m extends r.PureComponent {
        constructor(e) {
          super(e),
            (this._wrapperRef = null),
            (this._controller = r.createRef()),
            (this._handleWrapperRef = (e) => {
              (this._wrapperRef = e), this.props.reference && this.props.reference(e);
            }),
            (this._handleClick = (e) => {
              e.target instanceof Node &&
                e.currentTarget.contains(e.target) &&
                (this._handleToggleDropdown(), this.props.onClick && this.props.onClick(e, !this.state.isOpened));
            }),
            (this._handleToggleDropdown = (e) => {
              const { onClose: t, onOpen: o } = this.props,
                { isOpened: r } = this.state,
                i = 'boolean' == typeof e ? e : !r;
              this.setState({ isOpened: i }), i && o && o(), !i && t && t();
            }),
            (this._handleClose = () => {
              this.close();
            }),
            (this.state = { isOpened: !1 });
        }
        render() {
          const {
              id: e,
              arrow: t,
              content: o,
              isDisabled: n,
              isDrawer: c,
              isShowTooltip: l,
              title: p,
              className: u,
              hotKey: m,
              theme: w,
              drawerBreakpoint: v,
            } = this.props,
            { isOpened: g } = this.state,
            D = i(u, w.button, { 'apply-common-tooltip': l || !n, [w.isDisabled]: n, [w.isOpened]: g, [w.newStyles]: h.hasNewHeaderToolbarStyles });
          return r.createElement(
            'div',
            {
              id: e,
              className: D,
              onClick: n ? void 0 : this._handleClick,
              title: p,
              'data-tooltip-hotkey': m,
              ref: this._handleWrapperRef,
              'data-role': 'button',
              ...(0, s.filterDataProps)(this.props),
            },
            o,
            t &&
              r.createElement(
                'div',
                { className: w.arrow },
                r.createElement('div', { className: w.arrowWrap }, r.createElement(a.ToolWidgetCaret, { dropped: g }))
              ),
            this.state.isOpened && (v ? r.createElement(d.MatchMedia, { rule: v }, (e) => this._renderContent(e)) : this._renderContent(c))
          );
        }
        close() {
          this._handleToggleDropdown(!1);
        }
        update() {
          null !== this._controller.current && this._controller.current.update();
        }
        _renderContent(e) {
          const { menuDataName: t, minWidth: o, menuClassName: i, maxHeight: a, drawerPosition: s = 'Bottom', children: d } = this.props,
            { isOpened: h } = this.state,
            u = {
              horizontalMargin: this.props.horizontalMargin || 0,
              verticalMargin: this.props.verticalMargin || 2,
              verticalAttachEdge: this.props.verticalAttachEdge,
              horizontalAttachEdge: this.props.horizontalAttachEdge,
              verticalDropDirection: this.props.verticalDropDirection,
              horizontalDropDirection: this.props.horizontalDropDirection,
              matchButtonAndListboxWidths: this.props.matchButtonAndListboxWidths,
            },
            m = Boolean(h && e && s),
            w = (function (e) {
              return 'function' == typeof e;
            })(d)
              ? d({ isDrawer: m })
              : d;
          return m
            ? r.createElement(c.DrawerManager, null, r.createElement(l.Drawer, { onClose: this._handleClose, position: s, 'data-name': t }, w))
            : r.createElement(
                n.PopupMenu,
                {
                  controller: this._controller,
                  closeOnClickOutside: this.props.closeOnClickOutside,
                  doNotCloseOn: this,
                  isOpened: h,
                  minWidth: o,
                  onClose: this._handleClose,
                  position: (0, p.getPopupPositioner)(this._wrapperRef, u),
                  className: i,
                  maxHeight: a,
                  'data-name': t,
                },
                w
              );
        }
      }
      m.defaultProps = { arrow: !0, closeOnClickOutside: !0, theme: u };
    },
    19470: (e, t, o) => {
      o.d(t, { hasNewHeaderToolbarStyles: () => r });
      o(27490);
      const r = !1;
    },
    94004: (e, t, o) => {
      o.d(t, { DrawerManager: () => i, DrawerContext: () => n });
      var r = o(67294);
      class i extends r.PureComponent {
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
          return r.createElement(
            n.Provider,
            { value: { addDrawer: this._addDrawer, removeDrawer: this._removeDrawer, currentDrawer: this.state.currentDrawer } },
            this.props.children
          );
        }
      }
      const n = r.createContext(null);
    },
    57374: (e, t, o) => {
      o.d(t, { Drawer: () => u });
      var r = o(67294),
        i = o(16282),
        n = o(94184),
        a = o(67891),
        s = o(75761),
        c = o(4735),
        l = o(94004),
        p = o(43367),
        d = o(94884),
        h = o(64526);
      function u(e) {
        const { position: t = 'Bottom', onClose: o, children: u, className: m, theme: w = h } = e,
          v = (0, i.ensureNotNull)((0, r.useContext)(l.DrawerContext)),
          [g, D] = (0, r.useState)(0),
          f = (0, r.useRef)(null),
          b = (0, r.useContext)(d.CloseDelegateContext);
        return (
          (0, r.useEffect)(() => {
            const e = (0, i.ensureNotNull)(f.current);
            return (
              e.focus({ preventScroll: !0 }),
              b.subscribe(v, o),
              (0, s.setFixedBodyState)(!0),
              p.CheckMobile.iOS() && (0, a.disableBodyScroll)(e),
              D(v.addDrawer()),
              () => {
                b.unsubscribe(v, o);
                const t = v.removeDrawer();
                p.CheckMobile.iOS() && (0, a.enableBodyScroll)(e), 0 === t && (0, s.setFixedBodyState)(!1);
              }
            );
          }, []),
          r.createElement(
            c.Portal,
            null,
            r.createElement(
              'div',
              { className: n(h.wrap, h['position' + t]) },
              g === v.currentDrawer && r.createElement('div', { className: h.backdrop, onClick: o }),
              r.createElement('div', { className: n(h.drawer, w.drawer, h['position' + t], m), ref: f, tabIndex: -1, 'data-name': e['data-name'] }, u)
            )
          )
        );
      }
    },
    88262: (e, t, o) => {
      o.d(t, { ToolWidgetCaret: () => c });
      var r = o(67294),
        i = o(94184),
        n = o(49775),
        a = o(2632),
        s = o(85533);
      function c(e) {
        const { dropped: t, className: o } = e;
        return r.createElement(n.Icon, { className: i(o, a.icon, { [a.dropped]: t }), icon: s });
      }
    },
    85533: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>';
    },
  },
]);
