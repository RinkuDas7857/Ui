(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [6780],
  {
    18368: (e) => {
      e.exports = { scrollable: 'scrollable-2w4-r8AL' };
    },
    35971: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { SourcePropertiesEditorRenderer: () => A });
      i(79881);
      var s = i(67294),
        o = i(73935),
        n = i(18437),
        r = i(16282),
        a = i(43367),
        l = i(64222),
        c = i.n(l),
        h = i(7591),
        d = i(79424),
        u = i(77658),
        _ = i(54046),
        p = i(73991),
        g = i(67945),
        m = i(58789),
        b = i(17e3),
        C = i(95975),
        P = i(76117),
        v = i(39951),
        f = i(68521),
        y = i(1706),
        S = i(18368);
      class I extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._activePageRef = s.createRef()),
            (this._getActionPageById = (e) => {
              if (!e) return;
              const { pages: t } = this.props;
              return t.find((t) => t.id.toLowerCase() === e.toLowerCase());
            }),
            (this._onChangeActivePageDefinitions = () => {
              this.setState({ tableKey: Date.now() }, () => {
                this._requestResize && this._requestResize();
              });
            }),
            (this._renderFooterLeft = () => {
              const { source: e, model: t } = this.props;
              return (0, g.isLineTool)(e)
                ? s.createElement(_.FooterMenu, { source: e, model: t })
                : s.createElement(
                    f.MatchMedia,
                    { rule: 'screen and (max-width: 428px)' },
                    (i) =>
                      (0, b.isStudy)(e) &&
                      s.createElement(m.StudyDefaultsManager, {
                        model: t,
                        source: e,
                        mode: i ? 'compact' : 'normal',
                      })
                  );
            }),
            (this._subscribe = (e) => {
              e && e.definitions.subscribe(this._onChangeActivePageDefinitions);
            }),
            (this._unsubscribe = (e) => {
              e &&
                e.definitions.unsubscribe(this._onChangeActivePageDefinitions);
            }),
            (this._getActiveTabSettingsName = () => {
              const { source: e } = this.props;
              return e instanceof C.Series
                ? 'properties_dialog.active_tab.chart'
                : e instanceof P.LineDataSource
                ? 'properties_dialog.active_tab.drawing'
                : e instanceof v.Study
                ? 'properties_dialog.active_tab.study'
                : '';
            }),
            (this._handleSelectPage = (e) => {
              const { activePageId: t } = this.state,
                i = this._getActionPageById(t),
                s = this._getActionPageById(e),
                o = this._getActiveTabSettingsName();
              t !== e &&
                (this._unsubscribe(i),
                o && c().setValue(o, e),
                this._subscribe(s),
                this.setState({ activePageId: e, tableKey: Date.now() }, () => {
                  this._requestResize && this._requestResize(),
                    this._focusActivePageFirstTextInput();
                }));
            }),
            (this._handleScroll = () => {
              d.globalCloseDelegate.fire();
            }),
            (this._handleSubmit = () => {
              this.props.onSubmit(), this._closePopupDialog();
            }),
            (this._closePopupDialog = () => {
              window.lineToolPropertiesToolbar &&
                window.lineToolPropertiesToolbar.refresh(),
                this.props.onClose();
            });
          const { pages: t } = this.props;
          let i;
          if (this._getActionPageById(this.props.activePageId))
            i = (0, r.ensureDefined)(this.props.activePageId);
          else {
            const e = c().getValue(this._getActiveTabSettingsName(), ''),
              s = this._getActionPageById(e);
            i = s ? s.id : t[0].id;
          }
          (this.state = { activePageId: i, tableKey: Date.now() }),
            window.lineToolPropertiesToolbar &&
              window.lineToolPropertiesToolbar.hide();
        }
        componentDidMount() {
          const { activePageId: e } = this.state,
            t = this._getActionPageById(e);
          this._focusActivePageFirstTextInput(), this._subscribe(t);
        }
        componentWillUnmount() {
          const { activePageId: e } = this.props,
            t = this._getActionPageById(e);
          clearTimeout(this._timeout), this._unsubscribe(t);
        }
        render() {
          var e;
          const { source: t, onCancel: i } = this.props,
            { activePageId: o } = this.state,
            n =
              (null === (e = t.properties().title) || void 0 === e
                ? void 0
                : e.value()) || t.title();
          return s.createElement(h.AdaptiveConfirmDialog, {
            dataName: 'source-properties-editor',
            title: n,
            isOpened: !0,
            onSubmit: this._handleSubmit,
            onCancel: i,
            onClickOutside: this._handleSubmit,
            onClose: this._closePopupDialog,
            footerLeftRenderer: this._renderFooterLeft,
            render: this._renderChildren(o),
            submitOnEnterKey: !1,
          });
        }
        _renderChildren(e) {
          return ({ requestResize: t }) => {
            this._requestResize = t;
            const { pages: i } = this.props,
              o = {
                allIds: i.map((e) => e.id),
                byId: i.reduce(
                  (e, t) => ({ ...e, [t.id]: { title: t.title } }),
                  {}
                ),
              },
              n = i.find((t) => t.id === e);
            return s.createElement(
              s.Fragment,
              null,
              s.createElement(u.DialogTabs, {
                activeTabId: e,
                onSelect: this._handleSelectPage,
                tabs: o,
              }),
              s.createElement(
                p.TouchScrollContainer,
                { className: S.scrollable, onScroll: this._handleScroll },
                s.createElement(y.PropertiesEditorTab, {
                  page: n,
                  pageRef: this._activePageRef,
                  tableKey: this.state.tableKey,
                })
              )
            );
          };
        }
        _focusActivePageFirstTextInput() {
          if (!a.CheckMobile.any() && this._activePageRef.current) {
            const e = this._activePageRef.current.querySelector(
              'input[type=text],textarea'
            );
            e &&
              (this._timeout = setTimeout(() => {
                e.focus();
              }, 0));
          }
        }
      }
      var T = i(58738);
      class A extends T.DialogRenderer {
        constructor(e) {
          super(),
            (this._timeout = null),
            (this._handleClose = () => {
              o.unmountComponentAtNode(this._container),
                this._setVisibility(!1),
                this._onClose && this._onClose(),
                this._subscription.unsubscribe(
                  this,
                  this._handleCollectionChanged
                );
            }),
            (this._handleSubmit = () => {
              const e = this._source;
              (0, g.isLineTool)(e) &&
                e.hasAlert.value() &&
                setTimeout(() => {
                  e.areLocalAndServerAlertsMismatch() && e.synchronizeAlert(!0);
                });
            }),
            (this._handleCancel = () => {
              this._model.undoToCheckpoint(this._checkpoint);
            }),
            (this._propertyPages = e.propertyPages),
            (this._model = e.model),
            (this._activePageId = e.activePageId),
            (this._onClose = e.onClose),
            (this._source = e.source),
            (this._checkpoint = this._ensureCheckpoint(e.undoCheckPoint)),
            (this._subscription = this._model
              .model()
              .dataSourceCollectionChanged()),
            this._subscription.subscribe(this, this._handleCollectionChanged);
        }
        hide(e) {
          e ? this._handleCancel() : this._handleSubmit(), this._handleClose();
        }
        isVisible() {
          return this.visible().value();
        }
        show() {
          o.render(
            s.createElement(I, {
              source: this._source,
              onSubmit: this._handleSubmit,
              onClose: this._handleClose,
              onCancel: this._handleCancel,
              pages: this._propertyPages,
              model: this._model,
              activePageId: this._activePageId,
            }),
            this._container
          ),
            this._setVisibility(!0),
            n.emit('drawings_settings_dialog', {
              objectType: 'drawing',
              scriptTitle: this._source.title(),
            });
        }
        _handleCollectionChanged() {
          null === this._timeout &&
            (this._timeout = setTimeout(() => {
              this._closeDialogIfSourceIsDeleted(), (this._timeout = null);
            }));
        }
        _closeDialogIfSourceIsDeleted() {
          null === this._model.model().dataSourceForId(this._source.id()) &&
            this._handleClose();
        }
        _ensureCheckpoint(e) {
          return void 0 === e && (e = this._model.createUndoCheckpoint()), e;
        }
      }
    },
    88114: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { SourcesPropertiesEditorRenderer: () => f });
      var s = i(67294),
        o = i(73935),
        n = i(79881),
        r = i(90963),
        a = i(58738);
      const l = function () {};
      var c = i(77658),
        h = i(73991),
        d = i(7591),
        u = i(3468),
        _ = i(9927),
        p = i(1706);
      const g = (0, n.t)('Apply Defaults'),
        m = (0, n.t)('Selected Drawings'),
        b = {
          allIds: ['visibility'],
          byId: { visibility: { title: (0, n.t)('Visibility') } },
        };
      function C(e) {
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(c.DialogTabs, {
            activeTabId: 'visibility',
            tabs: b,
            onSelect: l,
          }),
          s.createElement(
            h.TouchScrollContainer,
            null,
            s.createElement(p.PropertiesEditorTab, {
              page: e.page,
              tableKey: 'visibility',
            })
          )
        );
      }
      function P(e) {
        const {
          propertyPage: t,
          onSubmit: i,
          onCancel: o,
          onClose: n,
          onApplyDefaults: r,
        } = e;
        return s.createElement(d.AdaptiveConfirmDialog, {
          dataName: 'sources-properties-editor',
          title: m,
          isOpened: !0,
          onSubmit: i,
          onCancel: o,
          onClickOutside: n,
          onClose: n,
          footerLeftRenderer: function () {
            return s.createElement(
              u.FooterMenu,
              null,
              s.createElement(_.TemplateMenuItem, { onClick: r, name: g })
            );
          },
          render: function () {
            return s.createElement(C, { page: t });
          },
          submitOnEnterKey: !1,
        });
      }
      const v = new r.TranslatedString(
        'apply factory defaults to selected sources',
        (0, n.t)('apply factory defaults to selected sources')
      );
      class f extends a.DialogRenderer {
        constructor(e) {
          super(),
            (this._dataSourceChangedPromise = null),
            (this._submitHandler = () => {
              Promise.resolve().then(() => {
                this._sources.map((e) => {
                  e.areLocalAndServerAlertsMismatch() && e.synchronizeAlert(!0);
                });
              }),
                this._close();
            }),
            (this._cancelHandler = () => {
              this._undoModel.undoToCheckpoint(this._undoCheckpoint);
            }),
            (this._closeHandler = () => {
              this._close();
            }),
            (this._applyDefaultsHandler = () => {
              this._undoModel.beginUndoMacro(v),
                this._sources.forEach((e) => {
                  this._undoModel.restorePropertiesForSource(e);
                }),
                this._undoModel.endUndoMacro();
            }),
            (this._dataSourceCollectionChangedHandler = () => {
              null === this._dataSourceChangedPromise &&
                (this._dataSourceChangedPromise = Promise.resolve().then(() => {
                  const e = this._undoModel.model();
                  this._sources.find(
                    (t) => null === e.dataSourceForId(t.id())
                  ) && this._close(),
                    (this._dataSourceChangedPromise = null);
                }));
            }),
            (this._sources = e.sources),
            (this._propertyPage = e.propertyPage),
            (this._undoModel = e.undoModel),
            (this._undoCheckpoint = this._undoModel.createUndoCheckpoint()),
            this._undoModel
              .model()
              .dataSourceCollectionChanged()
              .subscribe(this, this._dataSourceCollectionChangedHandler);
        }
        destroy() {
          this._close();
        }
        show() {
          this._isVisible() || (this._mount(), this._setVisibility(!0));
        }
        hide() {
          this._isVisible() && (this._unmount(), this._setVisibility(!1));
        }
        _mount() {
          o.render(
            s.createElement(P, {
              propertyPage: this._propertyPage,
              onSubmit: this._submitHandler,
              onCancel: this._cancelHandler,
              onClose: this._closeHandler,
              onApplyDefaults: this._applyDefaultsHandler,
            }),
            this._container
          );
        }
        _unmount() {
          o.unmountComponentAtNode(this._container);
        }
        _isVisible() {
          return this.visible().value();
        }
        _close() {
          this.hide(),
            this._undoModel
              .model()
              .dataSourceCollectionChanged()
              .unsubscribe(this, this._dataSourceCollectionChangedHandler);
        }
      }
    },
  },
]);
