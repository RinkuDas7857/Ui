(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [7591],
  {
    43948: (e) => {
      e.exports = {
        button: 'button-xRobF0EE',
        content: 'content-xRobF0EE',
        'icon-only': 'icon-only-xRobF0EE',
        'color-brand': 'color-brand-xRobF0EE',
        'variant-primary': 'variant-primary-xRobF0EE',
        'variant-secondary': 'variant-secondary-xRobF0EE',
        'color-gray': 'color-gray-xRobF0EE',
        'color-green': 'color-green-xRobF0EE',
        'color-red': 'color-red-xRobF0EE',
        'size-xsmall': 'size-xsmall-xRobF0EE',
        'size-small': 'size-small-xRobF0EE',
        'size-medium': 'size-medium-xRobF0EE',
        'size-large': 'size-large-xRobF0EE',
        'size-xlarge': 'size-xlarge-xRobF0EE',
        'with-start-icon': 'with-start-icon-xRobF0EE',
        'with-end-icon': 'with-end-icon-xRobF0EE',
        'start-icon-wrap': 'start-icon-wrap-xRobF0EE',
        'end-icon-wrap': 'end-icon-wrap-xRobF0EE',
        animated: 'animated-xRobF0EE',
        stretch: 'stretch-xRobF0EE',
        grouped: 'grouped-xRobF0EE',
        'adjust-position': 'adjust-position-xRobF0EE',
        'first-row': 'first-row-xRobF0EE',
        'first-col': 'first-col-xRobF0EE',
        'no-corner-top-left': 'no-corner-top-left-xRobF0EE',
        'no-corner-top-right': 'no-corner-top-right-xRobF0EE',
        'no-corner-bottom-right': 'no-corner-bottom-right-xRobF0EE',
        'no-corner-bottom-left': 'no-corner-bottom-left-xRobF0EE',
      };
    },
    11905: (e) => {
      e.exports = {
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        footer: 'footer-KW8170fm',
        submitButton: 'submitButton-KW8170fm',
        buttons: 'buttons-KW8170fm',
      };
    },
    80511: (e, t, n) => {
      'use strict';
      n.d(t, { Button: () => R });
      var o = n(67294),
        r = n(94184),
        s = n(48413),
        a = n(49775),
        i = n(43948),
        c = n.n(i);
      function l(e) {
        const {
            color: t = 'brand',
            size: n = 'medium',
            variant: o = 'primary',
            stretch: a = !1,
            icon: i,
            startIcon: l,
            endIcon: u,
            iconOnly: m = !1,
            className: d,
            isGrouped: b,
            cellState: E,
            disablePositionAdjustment: p = !1,
          } = e,
          h = (function (e) {
            let t = '';
            return (
              0 !== e &&
                (1 & e && (t = r(t, c()['no-corner-top-left'])),
                2 & e && (t = r(t, c()['no-corner-top-right'])),
                4 & e && (t = r(t, c()['no-corner-bottom-right'])),
                8 & e && (t = r(t, c()['no-corner-bottom-left']))),
              t
            );
          })((0, s.getGroupCellRemoveRoundBorders)(E));
        return r(
          d,
          c().button,
          c()['size-' + n],
          c()['color-' + t],
          c()['variant-' + o],
          a && c().stretch,
          (i || l) && c()['with-start-icon'],
          u && c()['with-end-icon'],
          m && c()['icon-only'],
          h,
          b && c().grouped,
          b && !p && c()['adjust-position'],
          b && E.isTop && c()['first-row'],
          b && E.isLeft && c()['first-col']
        );
      }
      function u(e) {
        const {
            size: t,
            startIcon: n,
            icon: r,
            iconOnly: s,
            children: i,
            endIcon: l,
          } = e,
          u = null != n ? n : r;
        return o.createElement(
          o.Fragment,
          null,
          u &&
            'xsmall' !== t &&
            o.createElement(a.Icon, {
              icon: u,
              className: c()['start-icon-wrap'],
            }),
          i && o.createElement('span', { className: c().content }, i),
          l &&
            !s &&
            'xsmall' !== t &&
            o.createElement(a.Icon, {
              icon: l,
              className: c()['end-icon-wrap'],
            })
        );
      }
      var m = n(94618),
        d = n(74818);
      function b(e) {
        const {
          className: t,
          color: n,
          variant: o,
          size: r,
          stretch: s,
          animated: a,
          icon: i,
          iconOnly: c,
          startIcon: l,
          endIcon: u,
          ...m
        } = e;
        return {
          ...m,
          ...(0, d.filterDataProps)(e),
          ...(0, d.filterAriaProps)(e),
        };
      }
      function E(e) {
        const { reference: t, ...n } = e,
          {
            isGrouped: r,
            cellState: s,
            disablePositionAdjustment: a,
          } = (0, o.useContext)(m.ControlGroupContext),
          i = l({
            ...n,
            isGrouped: r,
            cellState: s,
            disablePositionAdjustment: a,
          });
        return o.createElement(
          'button',
          { ...b(n), className: i, ref: t },
          o.createElement(u, { ...n })
        );
      }
      function p(e = 'default') {
        switch (e) {
          case 'default':
            return 'primary';
          case 'stroke':
            return 'secondary';
        }
      }
      function h(e = 'primary') {
        switch (e) {
          case 'primary':
            return 'brand';
          case 'success':
            return 'green';
          case 'default':
            return 'gray';
          case 'danger':
            return 'red';
        }
      }
      function f(e = 'm') {
        switch (e) {
          case 's':
            return 'xsmall';
          case 'm':
            return 'small';
          case 'l':
            return 'large';
        }
      }
      function x(e) {
        const {
          intent: t,
          size: n,
          appearance: o,
          useFullWidth: r,
          icon: s,
          ...a
        } = e;
        return {
          ...a,
          color: h(t),
          size: f(n),
          variant: p(o),
          stretch: r,
          startIcon: s,
        };
      }
      function R(e) {
        return o.createElement(E, { ...x(e) });
      }
    },
    7591: (e, t, n) => {
      'use strict';
      n.d(t, { AdaptiveConfirmDialog: () => d });
      var o = n(67294),
        r = n(94184),
        s = n.n(r),
        a = n(80511),
        i = n(16282),
        c = n(79881),
        l = n(42998),
        u = n(93590),
        m = n(11905);
      class d extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._dialogRef = o.createRef()),
            (this._handleClose = () => {
              const {
                defaultActionOnClose: e,
                onSubmit: t,
                onCancel: n,
                onClose: o,
              } = this.props;
              switch (e) {
                case 'submit':
                  t();
                  break;
                case 'cancel':
                  n();
              }
              o();
            }),
            (this._handleCancel = () => {
              this.props.onCancel(), this.props.onClose();
            }),
            (this._handleKeyDown = (e) => {
              const {
                onSubmit: t,
                submitButtonDisabled: n,
                submitOnEnterKey: o,
              } = this.props;
              13 === (0, l.hashFromEvent)(e) &&
                o &&
                (e.preventDefault(), n || t());
            });
        }
        render() {
          const {
            render: e,
            onClose: t,
            onSubmit: n,
            onCancel: r,
            footerLeftRenderer: s,
            submitButtonText: a,
            submitButtonDisabled: i,
            defaultActionOnClose: c,
            submitOnEnterKey: l,
            ...m
          } = this.props;
          return o.createElement(u.AdaptivePopupDialog, {
            ...m,
            ref: this._dialogRef,
            onKeyDown: this._handleKeyDown,
            render: this._renderChildren(),
            onClose: this._handleClose,
          });
        }
        focus() {
          (0, i.ensureNotNull)(this._dialogRef.current).focus();
        }
        _renderChildren() {
          return (e) => {
            const {
              render: t,
              footerLeftRenderer: n,
              additionalButtons: r,
              submitButtonText: i,
              submitButtonDisabled: l,
              onSubmit: u,
              cancelButtonText: d,
              showCancelButton: b = !0,
              submitButtonClassName: E,
              cancelButtonClassName: p,
              buttonsWrapperClassName: h,
            } = this.props;
            return o.createElement(
              o.Fragment,
              null,
              t(e),
              o.createElement(
                'div',
                { className: m.footer },
                n && n(e.isSmallWidth),
                o.createElement(
                  'div',
                  { className: s()(m.buttons, h) },
                  r,
                  b &&
                    o.createElement(
                      a.Button,
                      {
                        className: p,
                        name: 'cancel',
                        appearance: 'stroke',
                        onClick: this._handleCancel,
                      },
                      null != d ? d : (0, c.t)('Cancel')
                    ),
                  o.createElement(
                    'span',
                    { className: m.submitButton },
                    o.createElement(
                      a.Button,
                      {
                        className: E,
                        disabled: l,
                        name: 'submit',
                        onClick: u,
                        'data-name': 'submit-button',
                      },
                      null != i ? i : (0, c.t)('Ok')
                    )
                  )
                )
              )
            );
          };
        }
      }
      d.defaultProps = { defaultActionOnClose: 'submit', submitOnEnterKey: !0 };
    },
  },
]);
