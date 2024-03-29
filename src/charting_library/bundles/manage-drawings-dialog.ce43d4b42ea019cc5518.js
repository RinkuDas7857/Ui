(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [1702],
  {
    9134: (e) => {
      e.exports = { dialog: 'dialog-Gd2kEiLq', wrap: 'wrap-Gd2kEiLq' };
    },
    28098: (e, t, i) => {
      'use strict';
      i.r(t), i.d(t, { ManageDrawingsDialogRenderer: () => C });
      var s = i(67294),
        a = i(73935),
        n = i(79881),
        r = i(86573),
        o = i(468),
        l = i(93590),
        d = i(69117),
        h = i(9134);
      class c extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._dialogRef = s.createRef()),
            (this._renderChildren = (e) =>
              s.createElement(
                'div',
                { className: h.wrap },
                s.createElement(d.ManageDrawings, {
                  onInitialized: e.centerAndFit,
                  chartWidget: this._activeChartWidget,
                })
              ));
          const t = (0, r.service)(o.CHART_WIDGET_COLLECTION_SERVICE);
          (this._activeChartWidget = t.activeChartWidget.value()),
            (this.state = { layoutName: t.metaInfo.name.value() });
        }
        render() {
          return s.createElement(l.AdaptivePopupDialog, {
            className: h.dialog,
            dataName: 'manage-drawings-dialog',
            isOpened: !0,
            onClickOutside: this.props.onClose,
            onClose: this.props.onClose,
            ref: this._dialogRef,
            render: this._renderChildren,
            showSeparator: !0,
            title: (0, n.t)('Manage layout drawings'),
            subtitle: this.state.layoutName,
          });
        }
      }
      class C {
        constructor(e) {
          (this._container = document.createElement('div')),
            (this._isVisible = !1),
            (this._handleClose = () => {
              this._onClose && this._onClose(),
                a.unmountComponentAtNode(this._container),
                (this._isVisible = !1);
            }),
            (this._onClose = e);
        }
        hide() {
          this._handleClose();
        }
        isVisible() {
          return this._isVisible;
        }
        show() {
          a.render(
            s.createElement(c, { onClose: this._handleClose }),
            this._container
          ),
            (this._isVisible = !0);
        }
      }
    },
  },
]);
