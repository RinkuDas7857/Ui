(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [9374],
  {
    52775: (e) => {
      e.exports = { body: 'body-2IgbkgW8' };
    },
    40935: (e) => {
      e.exports = { header: 'header-2ibjJG9Z', close: 'close-2ibjJG9Z' };
    },
    68699: (e) => {
      e.exports = { message: 'message-2dEP78zc', error: 'error-2dEP78zc' };
    },
    88721: (e) => {
      e.exports = {
        popupDialog: 'popupDialog-3lAYzTZu',
        content: 'content-3lAYzTZu',
        row: 'row-3lAYzTZu',
        column: 'column-3lAYzTZu',
        title: 'title-3lAYzTZu',
        value: 'value-3lAYzTZu',
        columnTitle: 'columnTitle-3lAYzTZu',
        columnValue: 'columnValue-3lAYzTZu',
      };
    },
    89260: (e) => {
      e.exports = { footer: 'footer-262p5tSK' };
    },
    74818: (e, t, n) => {
      'use strict';
      function o(e) {
        return i(e, s);
      }
      function r(e) {
        return i(e, a);
      }
      function i(e, t) {
        const n = Object.entries(e).filter(t),
          o = {};
        for (const [e, t] of n) o[e] = t;
        return o;
      }
      function s(e) {
        const [t, n] = e;
        return 0 === t.indexOf('data-') && 'string' == typeof n;
      }
      function a(e) {
        return 0 === e[0].indexOf('aria-');
      }
      n.d(t, {
        filterDataProps: () => o,
        filterAriaProps: () => r,
        filterProps: () => i,
        isDataAttribute: () => s,
        isAriaAttribute: () => a,
      });
    },
    35771: (e, t, n) => {
      'use strict';
      n.d(t, { SymbolInfoDialog: () => h });
      var o = n(79881),
        r = n(67294),
        i = n(32402),
        s = n(94184),
        a = n(40935),
        l = n(33173),
        c = n(49775);
      function u(e) {
        const t = e.hideIcon
          ? null
          : r.createElement(c.Icon, {
              className: a.close,
              icon: l,
              onClick: e.onClose,
            });
        return r.createElement(
          'div',
          {
            className: s(a.header, e.className),
            'data-dragg-area': !0,
            ref: e.reference,
          },
          e.children,
          t
        );
      }
      n(89260);
      var d = n(52775);
      function p(e) {
        return r.createElement(
          'div',
          { className: s(d.body, e.className), ref: e.reference },
          e.children
        );
      }
      n(47165), n(68699);
      var m = n(80556),
        f = n(18437),
        y = n(28164),
        D = n(88721);
      class h extends r.PureComponent {
        constructor() {
          super(...arguments), (this._close = () => this.props.onClose());
        }
        componentDidMount() {
          f.subscribe(y.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._close, null);
        }
        componentWillUnmount() {
          f.unsubscribe(y.CLOSE_POPUPS_AND_DIALOGS_COMMAND, this._close, null);
        }
        render() {
          return r.createElement(
            i.PopupDialog,
            {
              className: D.popupDialog,
              isOpened: this.props.isOpened,
              onClickOutside: this.props.onClose,
            },
            r.createElement(
              u,
              { onClose: this.props.onClose },
              (0, o.t)('Symbol Info')
            ),
            r.createElement(
              p,
              null,
              r.createElement(m.KeyboardDocumentListener, {
                keyCode: 27,
                handler: this.props.onClose,
              }),
              r.createElement(
                'div',
                { className: D.content, 'data-symbol-info-dialog-content': !0 },
                this._renderFields()
              )
            )
          );
        }
        _renderFields() {
          return this.props.fields
            ? this.props.fields.map((e, t) =>
                r.createElement(
                  'div',
                  { key: e.propName + t.toString(), className: D.row },
                  r.createElement(
                    'div',
                    { className: s(D.column, D.columnTitle) },
                    r.createElement('span', { className: D.title }, e.title)
                  ),
                  r.createElement(
                    'div',
                    { className: s(D.column, D.columnValue) },
                    r.createElement(
                      'span',
                      { className: D.value },
                      (function (e) {
                        const t = e.value || e.defValue || '-';
                        if (e.setHtml)
                          return r.createElement('span', {
                            dangerouslySetInnerHTML: { __html: t },
                          });
                        return t;
                      })(e)
                    )
                  )
                )
              )
            : [];
        }
      }
    },
    3344: (e, t, n) => {
      'use strict';
      n.d(t, { parseSessionHours: () => l });
      var o = n(59104),
        r = n(84540),
        i = n.n(r),
        s = n(76553);
      function a(e) {
        for (; e > i().minutesPerDay; ) e -= i().minutesPerDay;
        const t = e % 60,
          n = (e - t) / 60,
          r =
            (0, o.numberToStringWithLeadingZero)(n, 2) +
            ':' +
            (0, o.numberToStringWithLeadingZero)(t, 2);
        return (0, s.isRtl)() ? (0, s.startWithLTR)(r) : r;
      }
      function l(e, t, n) {
        const { weekDays: o, closed: r } = n;
        return t.map((t) => {
          const n = e.filter((e) => e.dayOfWeek() === t),
            s = o[t] + ' ';
          if (0 === n.length) return `${s}${r}`;
          return `${s}${n
            .map((e) => {
              const t = e.sessionStartDayOfWeek(),
                n = e.sessionStartDaysOffset(),
                r = (function (e, t) {
                  let n = e + t;
                  for (; n > i().SATURDAY; ) n -= i().SATURDAY;
                  return n;
                })(t, n === e.sessionEndDaysOffset() ? 0 : n),
                s = t !== e.dayOfWeek(),
                l = s && r !== e.dayOfWeek(),
                c = s ? o[t] : '',
                u = l ? o[r] : '';
              return `${a(e.start())}${c}-${a(e.start() + e.length())}${u}`;
            })
            .join(', ')}`;
        });
      }
    },
    69303: (e, t, n) => {
      'use strict';
      var o = n(79881).t,
        r = n(24287).linking,
        i = n(94975).availableTimezones,
        s = n(59104).PriceFormatter,
        a = n(45259),
        l = n(67294),
        c = n(73935),
        u = n(35771).SymbolInfoDialog,
        d = n(12125).SessionSpec,
        p = n(84540),
        m = n(17915).getQuoteSessionInstance,
        f = n(25436).createSeriesFormatter,
        y = n(2710).marketType,
        D = n(10426).getAdditionalSymbolInfoFields,
        h = n(3344).parseSessionHours;
      const v = n(27490);
      var E,
        A = n(75533).weekDaysMiniNames,
        S = [
          p.MONDAY,
          p.TUESDAY,
          p.WEDNESDAY,
          p.THURSDAY,
          p.FRIDAY,
          p.SATURDAY,
          p.SUNDAY,
        ],
        N = S.reduce(function (e, t) {
          return (e[t] = A[t]), e;
        }, {});
      function g(e) {
        return (
          !(function (e) {
            return e && e.type && 'economic' === e.type;
          })(e) &&
          !(function (e, t) {
            return e && e.listed_exchange && t.indexOf(e.listed_exchange) >= 0;
          })(e, ['QUANDL', 'BSE_EOD', 'NSE_EOD', 'LSE_EOD'])
        );
      }
      function k(e) {
        return e.minmove2 > 0 && !e.fractional && e.pricescale;
      }
      function b(e) {
        if (k(e))
          return new s(e.pricescale / e.minmove2).format(
            e.minmove2 / e.pricescale
          );
      }
      function _(e) {
        return void 0 === e.minmov || void 0 === e.pricescale
          ? null
          : f(e).format(e.minmov / e.pricescale);
      }
      function M(e) {
        return y(e.type, e.typespecs);
      }
      function T(e) {
        return e.original_currency_code || e.currency_code || null;
      }
      function Y(e, t) {
        return e(t.original_unit_id || t.unit_id) || null;
      }
      function w(e) {
        return e && e.type && 'futures' === e.type && e.front_contract;
      }
      function O(e) {
        E ||
          ((E = document.createElement('div')), document.body.appendChild(E)),
          c.render(l.createElement(u, e), E);
      }
      function U(e) {
        for (var t = i, n = 0; n < t.length; n++)
          if (t[n].id === e) return t[n].title;
        return e;
      }
      function W(e) {
        var t = new d('Etc/UTC', e),
          n = { weekDays: N, closed: o('Closed') };
        return h(t.entries(), S, n).join('<br>');
      }
      function C(e) {
        return e || '-';
      }
      function R(e, t) {
        for (var n = 0, o = 0; o < t.length; o++)
          if (void 0 === t[o].getter) {
            var r = t[o].propName,
              i = t[o].altPropName,
              s = r in e ? r : void 0 !== i && i in e ? i : void 0;
            if (void 0 !== s) {
              var a = e[s];
              (t[o].value = (t[o].formatter || C)(a)), n++;
            }
          } else {
            var l = t[o].getter(e);
            null !== l && (t[o].value = l), n++;
          }
        return (n -= (function (e, t) {
          for (var n = 0, o = 0; o < t.length; o++) {
            var r = t[o];
            void 0 === r.visibility ||
              r.visibility(e) ||
              (t.splice(o, 1), o--, n++);
          }
          return n;
        })(e, t));
      }
      t.showSymbolInfoDialog = function (e, t) {
        if (
          (O({ isOpened: !1 }), null == e && (e = r.symbol.value()), null != e)
        ) {
          e += '';
          var n = t && t.symbolInfo,
            i = [
              {
                title: o('Symbol Name'),
                propName: v.enabled('charting_library_base')
                  ? 'name'
                  : 'pro_name',
              },
              { title: o('Symbol Description'), propName: 'description' },
              { title: o('Symbol Type'), propName: 'type', getter: M },
              {
                title: o('Current Contract'),
                propName: 'front_contract',
                visibility: w,
              },
              { title: o('Point Value'), propName: 'pointvalue' },
              { title: o('Exchange'), propName: 'exchange' },
              { title: o('Listed Exchange'), propName: 'listed_exchange' },
              {
                title: o('Currency'),
                propName: 'currency_code',
                getter: T,
                formatter: function (e) {
                  return e || '';
                },
                defValue: '',
              },
              {
                title: o('Unit'),
                propName: 'unit_id',
                getter: Y.bind(null, t.unitName),
                visibility: function () {
                  return t.showUnit;
                },
                formatter: function (e) {
                  return e || '';
                },
                defValue: '',
              },
              {
                title: o('Pip Size'),
                propName: 'pip_size',
                getter: b,
                visibility: k,
              },
              { title: o('Tick Size'), propName: 'tick_size', getter: _ },
              { title: o('Sector'), propName: 'sector' },
              { title: o('Industry'), propName: 'industry' },
              {
                title: o('Timezone'),
                propName: 'timezone',
                formatter: U,
                visibility: g,
              },
              {
                title: o('Session'),
                propName: 'session_display',
                altPropName: 'session',
                formatter: W,
                visibility: g,
                setHtml: !0,
              },
            ],
            s = D();
          if (s && s.length > 0)
            for (const e of s)
              i.push({ title: e.title, propName: e.propertyName });
          var l = 0;
          if ((n && (l = R(n, i)), l < i.length)) {
            var u = 'symbolinfodialog.' + a.guid(),
              d = m('full');
            d.subscribe(u, e, function (t, n) {
              R(n.values, i), d.unsubscribe(u, e), O(p);
            });
          }
          var p = {
            isOpened: !0,
            onClose: function () {
              O({ isOpened: !1 }), c.unmountComponentAtNode(E), (E = null);
            },
            fields: i,
          };
          O(p);
        }
      };
    },
    2710: (e, t, n) => {
      'use strict';
      n.d(t, { marketType: () => l });
      var o = n(79881);
      n(95068);
      const r = new Map(),
        i = { context: 'market_type' },
        s = {
          cfd: (0, o.t)('cfd', i),
          bitcoin: (0, o.t)('crypto', i),
          crypto: (0, o.t)('crypto', i),
          dr: (0, o.t)('dr', i),
          forex: (0, o.t)('forex', i),
          futures: (0, o.t)('futures', i),
          index: (0, o.t)('index', i),
          stock: (0, o.t)('stock', i),
          economic: (0, o.t)('economy', i),
        },
        a = new Set(['cfd', 'spreadbet', 'defi']);
      function l(e, t = []) {
        const n = t.filter((e) => a.has(e)),
          l = `${e}_${n.sort().join('_')}`,
          c = r.get(l);
        if (void 0 !== c) return c;
        const u = Boolean(t.length)
          ? (0, o.t)(e, i) + ' ' + n.join(' ')
          : s[e] || e;
        return r.set(l, u), u;
      }
    },
    59726: (e, t, n) => {
      'use strict';
      function o(e, t, n, o, r) {
        function i(r) {
          if (e > r.timeStamp) return;
          const i = r.target;
          void 0 !== n &&
            null !== t &&
            null !== i &&
            i.ownerDocument === o &&
            (t.contains(i) || n(r));
        }
        return (
          r.click && o.addEventListener('click', i, !1),
          r.mouseDown && o.addEventListener('mousedown', i, !1),
          r.touchEnd && o.addEventListener('touchend', i, !1),
          r.touchStart && o.addEventListener('touchstart', i, !1),
          () => {
            o.removeEventListener('click', i, !1),
              o.removeEventListener('mousedown', i, !1),
              o.removeEventListener('touchend', i, !1),
              o.removeEventListener('touchstart', i, !1);
          }
        );
      }
      n.d(t, { addOutsideEventListener: () => o });
    },
    75533: (e, t, n) => {
      'use strict';
      n.d(t, { weekDaysShortNames: () => i, weekDaysMiniNames: () => s });
      var o = n(79881),
        r = n(10165);
      r.Months.JANUARY,
        (0, o.t)('January'),
        r.Months.FEBRUARY,
        (0, o.t)('February'),
        r.Months.MARCH,
        (0, o.t)('March'),
        r.Months.APRIL,
        (0, o.t)('April'),
        r.Months.MAY,
        (0, o.t)('May'),
        r.Months.JUNE,
        (0, o.t)('June'),
        r.Months.JULY,
        (0, o.t)('July'),
        r.Months.AUGUST,
        (0, o.t)('August'),
        r.Months.SEPTEMBER,
        (0, o.t)('September'),
        r.Months.OCTOBER,
        (0, o.t)('October'),
        r.Months.NOVEMBER,
        (0, o.t)('November'),
        r.Months.DECEMBER,
        (0, o.t)('December'),
        r.Months.JANUARY,
        (0, o.t)('Jan'),
        r.Months.FEBRUARY,
        (0, o.t)('Feb'),
        r.Months.MARCH,
        (0, o.t)('Mar'),
        r.Months.APRIL,
        (0, o.t)('Apr'),
        r.Months.MAY,
        (0, o.t)('May', { context: 'short' }),
        r.Months.JUNE,
        (0, o.t)('Jun'),
        r.Months.JULY,
        (0, o.t)('Jul'),
        r.Months.AUGUST,
        (0, o.t)('Aug'),
        r.Months.SEPTEMBER,
        (0, o.t)('Sep'),
        r.Months.OCTOBER,
        (0, o.t)('Oct'),
        r.Months.NOVEMBER,
        (0, o.t)('Nov'),
        r.Months.DECEMBER,
        (0, o.t)('Dec'),
        r.WeekDays.SUNDAY,
        (0, o.t)('Sunday'),
        r.WeekDays.MONDAY,
        (0, o.t)('Monday'),
        r.WeekDays.TUESDAY,
        (0, o.t)('Tuesday'),
        r.WeekDays.WEDNESDAY,
        (0, o.t)('Wednesday'),
        r.WeekDays.THURSDAY,
        (0, o.t)('Thursday'),
        r.WeekDays.FRIDAY,
        (0, o.t)('Friday'),
        r.WeekDays.SATURDAY,
        (0, o.t)('Saturday');
      const i = {
          [r.WeekDays.SUNDAY]: (0, o.t)('Sun'),
          [r.WeekDays.MONDAY]: (0, o.t)('Mon'),
          [r.WeekDays.TUESDAY]: (0, o.t)('Tue'),
          [r.WeekDays.WEDNESDAY]: (0, o.t)('Wed'),
          [r.WeekDays.THURSDAY]: (0, o.t)('Thu'),
          [r.WeekDays.FRIDAY]: (0, o.t)('Fri'),
          [r.WeekDays.SATURDAY]: (0, o.t)('Sat'),
        },
        s = {
          [r.WeekDays.SUNDAY]: (0, o.t)('Su', { context: 'day_of_week' }),
          [r.WeekDays.MONDAY]: (0, o.t)('Mo', { context: 'day_of_week' }),
          [r.WeekDays.TUESDAY]: (0, o.t)('Tu', { context: 'day_of_week' }),
          [r.WeekDays.WEDNESDAY]: (0, o.t)('We', { context: 'day_of_week' }),
          [r.WeekDays.THURSDAY]: (0, o.t)('Th', { context: 'day_of_week' }),
          [r.WeekDays.FRIDAY]: (0, o.t)('Fr', { context: 'day_of_week' }),
          [r.WeekDays.SATURDAY]: (0, o.t)('Sa', { context: 'day_of_week' }),
        };
    },
    80556: (e, t, n) => {
      'use strict';
      n.d(t, { KeyboardDocumentListener: () => r });
      var o = n(67294);
      class r extends o.PureComponent {
        constructor() {
          super(...arguments),
            (this._handleKeyDown = (e) => {
              e.keyCode === this.props.keyCode && this.props.handler(e);
            });
        }
        componentDidMount() {
          document.addEventListener(
            this.props.eventType || 'keydown',
            this._handleKeyDown,
            !1
          );
        }
        componentWillUnmount() {
          document.removeEventListener(
            this.props.eventType || 'keydown',
            this._handleKeyDown,
            !1
          );
        }
        render() {
          return null;
        }
      }
    },
    33173: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width="13" height="13"><path fill="currentColor" d="M5.18 6.6L1.3 2.7.6 2 2 .59l.7.7 3.9 3.9 3.89-3.9.7-.7L12.61 2l-.71.7L8 6.6l3.89 3.89.7.7-1.4 1.42-.71-.71L6.58 8 2.72 11.9l-.71.7-1.41-1.4.7-.71 3.9-3.9z"/></svg>';
    },
  },
]);
