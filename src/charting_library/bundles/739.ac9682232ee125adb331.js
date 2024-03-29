(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [739],
  {
    78443: (e) => {
      e.exports = {
        defaultsButtonText: 'defaultsButtonText-3mn75BN0',
        defaultsButtonItem: 'defaultsButtonItem-3mn75BN0',
        defaultsButtonIcon: 'defaultsButtonIcon-3mn75BN0',
      };
    },
    50559: (e) => {
      e.exports = {
        themesButtonText: 'themesButtonText-3nid3QQp',
        themesButtonIcon: 'themesButtonIcon-3nid3QQp',
        defaultsButtonText: 'defaultsButtonText-3nid3QQp',
        defaultsButtonItem: 'defaultsButtonItem-3nid3QQp',
      };
    },
    55241: (e) => {
      e.exports = { slider: 'slider-3RfwXbxu', inner: 'inner-3RfwXbxu' };
    },
    34344: (e) => {
      e.exports = {
        scrollWrap: 'scrollWrap-1KEqJy8_',
        tabsWrap: 'tabsWrap-1KEqJy8_',
        tabs: 'tabs-1KEqJy8_',
        withoutBorder: 'withoutBorder-1KEqJy8_',
        tab: 'tab-1KEqJy8_',
        withHover: 'withHover-1KEqJy8_',
        headerBottomSeparator: 'headerBottomSeparator-1KEqJy8_',
        fadeWithoutSlider: 'fadeWithoutSlider-1KEqJy8_',
        withBadge: 'withBadge-1KEqJy8_',
      };
    },
    16929: (e) => {
      e.exports = {
        tabs: 'tabs-3I2ohC86',
        tab: 'tab-3I2ohC86',
        noBorder: 'noBorder-3I2ohC86',
        disabled: 'disabled-3I2ohC86',
        active: 'active-3I2ohC86',
        defaultCursor: 'defaultCursor-3I2ohC86',
        slider: 'slider-3I2ohC86',
        content: 'content-3I2ohC86',
      };
    },
    58789: (e, t, r) => {
      'use strict';
      r.d(t, { StudyDefaultsManager: () => p });
      var a = r(67294),
        o = r(94184),
        n = r.n(o),
        s = r(49775),
        l = r(79881),
        i = r(19522),
        c = r(95860),
        u = r(22775),
        d = r(78443);
      const m = {
        reset: (0, l.t)('Reset settings'),
        saveAsDefault: (0, l.t)('Save as default'),
        defaults: (0, l.t)('Defaults'),
      };
      class p extends a.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleResetToDefaults = () => {
              this.props.model.restorePropertiesForSource(this.props.source);
            }),
            (this._handleSaveAsDefaults = () => {
              this.props.source.properties().saveDefaults();
            });
        }
        render() {
          const { mode: e } = this.props;
          return a.createElement(
            i.DisclosureMenu,
            {
              id: 'study-defaults-manager',
              className: n()('normal' === e && d.defaultsButtonText),
              hideArrowButton: 'compact' === e,
              buttonChildren: this._getPlaceHolderItem('compact' === e),
            },
            a.createElement(c.PopupMenuItem, {
              className: d.defaultsButtonItem,
              isActive: !1,
              label: m.reset,
              onClick: this._handleResetToDefaults,
            }),
            a.createElement(c.PopupMenuItem, {
              className: d.defaultsButtonItem,
              isActive: !1,
              label: m.saveAsDefault,
              onClick: this._handleSaveAsDefaults,
            })
          );
        }
        _getPlaceHolderItem(e) {
          return e
            ? a.createElement(s.Icon, {
                className: d.defaultsButtonIcon,
                icon: u,
              })
            : m.defaults;
        }
      }
    },
    3468: (e, t, r) => {
      'use strict';
      r.d(t, { FooterMenu: () => d });
      var a = r(67294),
        o = r(79881),
        n = r(49775),
        s = r(19522),
        l = r(68521),
        i = r(50559),
        c = r(22775);
      function u(e) {
        return e.isTabletWidth
          ? a.createElement(n.Icon, { className: i.themesButtonIcon, icon: c })
          : a.createElement(a.Fragment, null, (0, o.t)('Template'));
      }
      function d(e) {
        return a.createElement(
          l.MatchMedia,
          { rule: 'screen and (max-width: 768px)' },
          (t) =>
            a.createElement(
              s.DisclosureMenu,
              {
                className: !t && i.themesButtonText,
                hideArrowButton: t,
                buttonChildren: a.createElement(u, { isTabletWidth: t }),
              },
              e.children
            )
        );
      }
    },
    9927: (e, t, r) => {
      'use strict';
      r.d(t, { TemplateMenuItem: () => c });
      var a = r(67294),
        o = r(95860),
        n = r(14303),
        s = r(11086),
        l = r(96404),
        i = r(50559);
      function c(e) {
        const { name: t, onRemove: r, onClick: c } = e,
          [u, d] = (0, s.useHover)(),
          m = a.useCallback(() => c(t), [c, t]),
          p = a.useCallback(() => {
            r && r(t);
          }, [r, t]);
        return a.createElement(
          'div',
          { ...d },
          a.createElement(o.PopupMenuItem, {
            className: i.defaultsButtonItem,
            isActive: !1,
            label: t,
            onClick: m,
            toolbox:
              r &&
              a.createElement(n.RemoveButton, {
                hidden: !l.mobiletouch && !u,
                onClick: p,
              }),
          })
        );
      }
    },
    1706: (e, t, r) => {
      'use strict';
      r.d(t, { PropertiesEditorTab: () => c });
      var a = r(67294),
        o = r(63544);
      const n = {
          'Elliott Impulse Wave (12345)Degree': 'normal',
          'Elliott Triangle Wave (ABCDE)Degree': 'normal',
          'Elliott Triple Combo Wave (WXYXZ)Degree': 'normal',
          'Elliott Correction Wave (ABC)Degree': 'normal',
          'Elliott Double Combo Wave (WXY)Degree': 'normal',
          BarsPatternMode: 'normal',
          StudyInputSource: 'normal',
        },
        s = {
          TextText: 'big',
          AnchoredTextText: 'big',
          NoteText: 'big',
          AnchoredNoteText: 'big',
          CalloutText: 'big',
          BalloonText: 'big',
        };
      var l = r(35665),
        i = r(9102);
      function c(e) {
        const { page: t, pageRef: r, tableKey: c } = e;
        return a.createElement(
          o.ControlCustomHeightContext.Provider,
          { value: s },
          a.createElement(
            o.ControlCustomWidthContext.Provider,
            { value: n },
            t &&
              a.createElement(
                l.PropertyTable,
                { reference: r, key: c },
                t.definitions
                  .value()
                  .map((e) =>
                    a.createElement(i.Section, { key: e.id, definition: e })
                  )
              )
          )
        );
      }
    },
    54046: (e, t, r) => {
      'use strict';
      r.d(t, { FooterMenu: () => i });
      var a = r(67294),
        o = (r(37703), r(79881)),
        n = r(3468),
        s = r(9927);
      function l(e) {
        const { model: t, source: r } = e;
        return a.createElement(
          n.FooterMenu,
          null,
          a.createElement(s.TemplateMenuItem, {
            onClick: function () {
              t.restorePropertiesForSource(r);
            },
            name: (0, o.t)('Apply Defaults'),
          })
        );
      }
      function i(e) {
        return a.createElement(l, { ...e });
      }
    },
    77658: (e, t, r) => {
      'use strict';
      r.d(t, { DialogTabs: () => h });
      var a = r(67294),
        o = r(94184),
        n = r(41445),
        s = r(4598),
        l = r(55241);
      const i = (0, s.mergeThemes)(n.DEFAULT_SLIDER_THEME, l);
      var c = r(52444),
        u = r(96404),
        d = r(34344);
      const m = d,
        p = (0, n.factory)(function (e) {
          return a.createElement(
            'div',
            { className: i.slider, ref: e.reference },
            a.createElement('div', { className: i.inner })
          );
        });
      class h extends a.PureComponent {
        constructor() {
          super(...arguments),
            (this._createClickHandler = (e) => () => {
              this.props.onSelect(e);
            });
        }
        render() {
          const {
              theme: e = m,
              hiddenBottomBorders: t,
              fadedSlider: r = !0,
              ScrollComponent: n = c.HorizontalScroll,
            } = this.props,
            s = this._generateDialogTabs();
          return a.createElement(
            'div',
            { className: o(e.scrollWrap) },
            !t &&
              a.createElement('div', { className: e.headerBottomSeparator }),
            a.createElement(
              n,
              {
                isVisibleFade: u.mobiletouch,
                isVisibleButtons: !u.mobiletouch,
                isVisibleScrollbar: !1,
                fadeClassName: o({ [e.fadeWithoutSlider]: !r }),
              },
              a.createElement(
                'div',
                { className: e.tabsWrap },
                a.createElement(
                  p,
                  { className: o(e.tabs, t && e.withoutBorder) },
                  s
                )
              )
            )
          );
        }
        _generateDialogTabs() {
          const { activeTabId: e, tabs: t, theme: r = m } = this.props;
          return t.allIds.map((s) => {
            const l = e === s,
              i = t.byId[s].withNotificationsBadge;
            return a.createElement(
              n.SliderItem,
              {
                key: s,
                value: s,
                className: o(r.tab, !l && r.withHover, i && d.withBadge),
                isActive: l,
                onClick: this._createClickHandler(s),
              },
              t.byId[s].title
            );
          });
        }
      }
    },
    41445: (e, t, r) => {
      'use strict';
      r.d(t, {
        DEFAULT_SLIDER_THEME: () => l,
        SliderItem: () => i,
        factory: () => c,
      });
      var a = r(67294),
        o = r(94184),
        n = r(16282),
        s = r(16929);
      const l = s;
      function i(e) {
        const t = o(e.className, s.tab, {
          [s.active]: e.isActive,
          [s.disabled]: e.isDisabled,
          [s.defaultCursor]: !!e.shouldUseDefaultCursor,
          [s.noBorder]: !!e.noBorder,
        });
        return a.createElement(
          'div',
          {
            className: t,
            onClick: e.onClick,
            ref: e.reference,
            'data-type': 'tab-item',
            'data-value': e.value,
            'data-name': 'tab-item-' + e.value.toString().toLowerCase(),
          },
          e.children
        );
      }
      function c(e) {
        return class extends a.PureComponent {
          constructor() {
            super(...arguments), (this.activeTab = { current: null });
          }
          componentDidUpdate() {
            ((0, n.ensureNotNull)(this._slider).style.transition =
              'transform 350ms'),
              this._componentDidUpdate();
          }
          componentDidMount() {
            this._componentDidUpdate();
          }
          render() {
            const { className: t } = this.props,
              r = this._generateTabs();
            return a.createElement(
              'div',
              { className: o(t, s.tabs), 'data-name': this.props['data-name'] },
              r,
              a.createElement(e, {
                reference: (e) => {
                  this._slider = e;
                },
              })
            );
          }
          _generateTabs() {
            return (
              (this.activeTab.current = null),
              a.Children.map(this.props.children, (e) => {
                const t = e,
                  r = Boolean(t.props.isActive),
                  o = {
                    reference: (e) => {
                      r && (this.activeTab.current = e),
                        t.props.reference && t.props.reference(e);
                    },
                  };
                return a.cloneElement(t, o);
              })
            );
          }
          _componentDidUpdate() {
            const e = (0, n.ensureNotNull)(this._slider).style;
            if (this.activeTab.current) {
              const t = this.activeTab.current.offsetWidth,
                r = this.activeTab.current.offsetLeft;
              (e.transform = `translateX(${r}px)`),
                (e.width = t + 'px'),
                (e.opacity = '1');
            } else e.opacity = '0';
          }
        };
      }
      c(function (e) {
        return a.createElement('div', {
          className: s.slider,
          ref: e.reference,
        });
      });
    },
  },
]);
