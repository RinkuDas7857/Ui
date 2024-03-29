'use strict';
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [7271],
  {
    38972: (e, t, s) => {
      s.d(t, { qualifyProName: () => r, QualifiedSources: () => o });
      var o,
        i = s(16282),
        n = s(27490);
      function r(e) {
        return e;
      }
      !(function (e) {
        function t(e) {
          return e.pro_name;
        }
        function s(e) {
          {
            const t = n.enabled('pay_attention_to_ticker_not_symbol')
              ? e.ticker
              : e.full_name;
            return (0, i.ensureDefined)(t);
          }
        }
        (e.fromQuotesResponse = function (e) {
          const { values: s, symbolname: o, status: i } = e;
          return 'error' === i && o ? o : t(s);
        }),
          (e.fromQuotes = t),
          (e.fromSymbolSearchResult = function (e, t) {
            {
              const { ticker: s, full_name: o } = null != t ? t : e;
              return n.enabled('pay_attention_to_ticker_not_symbol')
                ? (0, i.ensureDefined)(null != s ? s : o)
                : (0, i.ensureDefined)(o);
            }
          }),
          (e.fromSymbolInfo = s),
          (e.fromSymbolMessage = function (e, t) {
            return 'symbol_resolved' === t.method ? s(t.params[1]) : e;
          });
      })(o || (o = {}));
    },
    3627: (e, t, s) => {
      function o(e) {
        if (e.fullName) return e.fullName;
        let t;
        return (
          (t =
            e.prefix || e.exchange
              ? (e.prefix || e.exchange) + ':' + e.name
              : e.name),
          t.replace(/<\/?[^>]+(>|$)/g, '')
        );
      }
      function i(e) {
        return '' === e.value;
      }
      function n() {
        const e = a();
        return e.find(i) || e[0] || null;
      }
      function r() {
        return a();
      }
      function a() {
        return window.ChartApiInstance.supportedExchangesList().map((e) => ({
          ...e,
          country: '',
          providerId: '',
          flag: '',
        }));
      }
      function l() {
        return window.ChartApiInstance.supportedSymbolsTypes();
      }
      function c() {
        return '';
      }
      function d() {
        return !1;
      }
      s.d(t, {
        getSymbolFullName: () => o,
        isAllExchanges: () => i,
        getDefaultExchange: () => n,
        getAvailableExchanges: () => r,
        getAvailableSymbolTypes: () => l,
        getAllSymbolTypesValue: () => c,
        exchangeSelectDisabled: () => d,
      });
    },
    66664: (e, t, s) => {
      s.r(t), s.d(t, { CompareModel: () => C });
      var o = s(16282),
        i = s(27490),
        n = s(1049),
        r = s(89164),
        a = s(32856),
        l = s.n(a),
        c = s(40488),
        d = s(33508),
        h = s(32643),
        u = s(38972),
        m = s(3627);
      new Set([
        'short_name',
        'description',
        'exchange',
        'type',
        'country_code',
        'provider_id',
      ]);
      const S = (0, m.getAvailableExchanges)(),
        y = {};
      for (const e of S)
        y[e.value] = { country: e.country, providerId: e.providerId };
      function b(e) {
        return e instanceof d.study_Overlay || e instanceof h.StudyCompare;
      }
      function _(e) {
        if (!e) return;
        const [t, s] = e.split(':');
        return s && t && y[t] ? y[t] : void 0;
      }
      function p(e, t, s) {
        const o = u.QualifiedSources.fromSymbolInfo(e),
          i = _(o);
        return {
          id: (null == s ? void 0 : s.id()) || o,
          symbol: o,
          checked: t,
          title: e.name,
          description: e.description,
          exchangeName: e.exchange,
          country: null == i ? void 0 : i.country,
          providerId: null == i ? void 0 : i.providerId,
          marketType: e.type,
          study: s,
        };
      }
      function f(e, t, s, o) {
        return {
          id: void 0 !== s ? s.id() : e,
          symbol: e,
          checked: t,
          title: e,
          study: s,
          description: o,
        };
      }
      var g = s(64222),
        v = s(17915);
      const I = new Map();
      class w {
        constructor(e, t, s = 'watchlist') {
          (this._symbolDataHandlers = new Map()),
            (this._fastSymbols = new Set()),
            (this._subscribedSymbols = new Set()),
            (this._subscriptionSet = new Set()),
            (this._cancelSubscriptionSet = new Set()),
            (this._resolvedSymbolsSet = new Set()),
            (this._quoteSessionDataHandler = (e) => {
              const t = (0, o.ensureDefined)(e.symbolname),
                { filtered: s, keepSubscription: i } =
                  this._applyDataFilters(e);
              i || this._unsubscribeSymbols([t]),
                this._setSymbolDataCache(t, s);
              const n = this._symbolDataHandlers.get(t);
              n && n(s);
            }),
            (this._clientId = e),
            (this._quoteSession = (0, v.getQuoteSessionInstance)(s)),
            (this._lastSymbolData = t || new Map());
        }
        destroy() {
          const e = Array.from(this._subscribedSymbols);
          this._unsubscribeSymbols(e);
        }
        addFastSymbol(e) {
          !this._fastSymbols.has(e) &&
            this._subscribedSymbols.has(e) &&
            (this._fastSymbols.add(e),
            this._quoteSession.setFastSymbols(
              this._clientId,
              Array.from(this._fastSymbols)
            ));
        }
        removeFastSymbol(e) {
          this._fastSymbols.has(e) &&
            (this._fastSymbols.delete(e),
            this._quoteSession.setFastSymbols(
              this._clientId,
              Array.from(this._fastSymbols)
            ));
        }
        addSymbolDataHandler(e, t) {
          this._symbolDataHandlers.set(e, t);
        }
        removeSymbolDataHandler(e) {
          this._symbolDataHandlers.delete(e);
        }
        addToSubscriptionSet(e) {
          e.forEach((e) => {
            this._subscriptionSet.add(e);
          });
        }
        clearSubscriptionSet() {
          this._subscriptionSet.clear();
        }
        addToCancelSubscriptionSet(e) {
          e.forEach((e) => {
            this._cancelSubscriptionSet.add(e);
          });
        }
        commitSubscriptionChanges() {
          Array.from(this._subscriptionSet).forEach((e) => {
            this._cancelSubscriptionSet.has(e) &&
              (this._subscriptionSet.delete(e),
              this._cancelSubscriptionSet.delete(e));
          }),
            this._subscribeSymbols(Array.from(this._subscriptionSet)),
            this._subscriptionSet.clear(),
            this._unsubscribeSymbols(Array.from(this._cancelSubscriptionSet)),
            this._cancelSubscriptionSet.clear(),
            this._quoteSession.setFastSymbols(
              this._clientId,
              Array.from(this._fastSymbols)
            );
        }
        getLastSymbolData(e) {
          return this._lastSymbolData.get(e);
        }
        getSymbolSnapshotForAll(e, t, s = guid()) {
          const o = e.map((e) => this.getSymbolSnapshot(e, t, s));
          return Promise.all(o);
        }
        getSymbolSnapshot(e, t, s = guid()) {
          const o = this._lastSymbolData.get(e);
          if (o && 'ok' === o.status) {
            const s = this._resolvedSymbolsSet.has(e) && o.complete;
            if (D(o, t) || s)
              return this._resolvedSymbolsSet.add(e), Promise.resolve(o);
          }
          return new Promise((o) => {
            const i = this._clientId + '_snapshot_' + s,
              n = (s) => {
                const { filtered: r, keepSubscription: a } =
                  this._applyDataFilters(s);
                r && 'error' !== r.status && this._setSymbolDataCache(e, r),
                  (!a || D(r, t) || 'error' === r.status || r.complete) &&
                    (this._quoteSession.unsubscribe(i, e, n), o(r));
              };
            this._quoteSession.subscribe(i, e, n);
          });
        }
        getSymbolFullName(e) {
          if (I.has(e)) return (0, o.ensureDefined)(I.get(e));
          const t = new Promise((t) => {
            const s = this._clientId + '_SymbolFullName',
              o = (i) => {
                const n = (i) => {
                  this._quoteSession.unsubscribe(s, e, o), t(i);
                };
                i && 'ok' === i.status
                  ? i.values && n(i.values.pro_name || e)
                  : n(e);
              };
            this._quoteSession.subscribe(s, e, o);
          });
          return I.set(e, t), t;
        }
        getSymbolsFullNames(e) {
          return Promise.all(e.map((e) => this.getSymbolFullName(e)));
        }
        getUniqueSymbolsFullNames(e) {
          return this.getSymbolsFullNames(e).then((e) =>
            Array.from(new Set(e))
          );
        }
        _subscribeSymbols(e) {
          this._quoteSession.subscribe(
            this._clientId,
            e,
            this._quoteSessionDataHandler
          ),
            e.forEach((e) => this._subscribedSymbols.add(e));
        }
        _unsubscribeSymbols(e) {
          this._quoteSession.unsubscribe(
            this._clientId,
            e,
            this._quoteSessionDataHandler
          ),
            e.forEach((e) => {
              this._subscribedSymbols.delete(e);
            });
        }
        _setSymbolDataCache(e, t) {
          var s;
          const o =
            (null === (s = this._lastSymbolData.get(e)) || void 0 === s
              ? void 0
              : s.values) || {};
          this._resolvedSymbolsSet.add(e),
            this._lastSymbolData.set(e, {
              ...t,
              values: { ...o, ...t.values },
            });
        }
        _applyDataFilters(e) {
          return { filtered: e, keepSubscription: !0 };
        }
      }
      const k = new (class {
        constructor() {
          (this._adaptersMap = new Map()), (this._lastSymbolData = new Map());
        }
        destroy() {
          this._adaptersMap.forEach((e) => {
            e.forEach((e) => e.destroy());
          }),
            this._lastSymbolData.clear();
        }
        get(e, t = 'watchlist') {
          let s;
          const o = this._adaptersMap.get(e);
          if (o) {
            const i = o.get(t);
            i
              ? (s = i)
              : ((s = new w(e, this._lastSymbolData, t)), o.set(t, s));
          } else {
            s = new w(e, this._lastSymbolData, t);
            const o = new Map();
            o.set(t, s), this._adaptersMap.set(e, o);
          }
          return s;
        }
      })();
      function D(e, t) {
        for (const s of Array.from(t))
          if (!e.values.hasOwnProperty(s)) return !1;
        return !0;
      }
      class C {
        constructor(e) {
          (this._contentItemList = new (l())([])),
            (this._checkedSymbols = new Map()),
            (this._recentLength = 10),
            (this._adapter = k.get('compare-dialog-adapter')),
            (this._isDataReady = new (l())(!1)),
            (this._highlightedSymbol = new (l())(null)),
            (this._defaultSymbolsDescriptions = new Map()),
            (this._idToStudyMap = new Map()),
            (this._chartSession = null),
            (this._recentSymbolsEnabled = i.enabled(
              'compare_recent_symbols_enabled'
            )),
            (this._preventHandleSourcesChange = !0),
            (this.removeStudy = (e) => {
              const { symbol: t, study: s } = e;
              if (!s) return;
              this._chartWidget.model().removeSource(s, !1);
              const o = this._checkedSymbols.get(t);
              o && o.length > 1
                ? this._removeStudyIdFromCheckedSymbols(t, s.id())
                : this._checkedSymbols.delete(t),
                this._updateContentItemList(this._contentItemList.value(), !0);
            }),
            (this._getResolveSymbolPromise = (
              e,
              t = (0, n.makeNextSymbolId)()
            ) => {
              const s = (0, r.encodeExtendedSymbolOrGetSimpleSymbolString)({
                symbol: e,
              });
              return new Promise((e) => {
                (0, o.ensureNotNull)(this._chartSession).resolveSymbol(
                  t,
                  s,
                  (t) => {
                    e(t);
                  }
                );
              });
            }),
            (this._chartWidget = e.activeChartWidget.value()),
            (this._chartSession = this._chartWidget.model().model().chartApi());
          const t = new Set(this._loadRecent().reverse()),
            s = new Set(),
            a = new Set(),
            c = this._chartWidget.model().model().dataSources().filter(b),
            d = c.map((e) => {
              const t = e.symbolInfo();
              if (t)
                return Promise.resolve(u.QualifiedSources.fromSymbolInfo(t));
              const s = e.symbol();
              return (0, u.qualifyProName)(s);
            });
          Promise.all(d).then((e) => {
            const o = e.map((e, t) => (void 0 !== e ? c[t] : void 0)).filter(A);
            e.filter(A).forEach((e, i) => {
              const n = o[i],
                r = n.id();
              this._addStudyIdToCheckedSymbols(e, r),
                this._idToStudyMap.set(r, n),
                t.has(e) ? s.add(e) : a.add(e);
            });
            const i = Array.from(t)
                .filter((e) => this._checkedSymbols.has(e))
                .reduce((e, t) => (s.has(t) && e.push(t), e), [])
                .concat(Array.from(a)),
              r = Array.from(t);
            if (r.length < this._recentLength) {
              let e;
              (e = []),
                this._chartWidget.compareSymbols() &&
                  this._chartWidget.compareSymbols().forEach((t) => {
                    e.push((0, u.qualifyProName)(t.symbol)),
                      this._defaultSymbolsDescriptions.set(t.symbol, t.title);
                  });
              const t = [...r, ...e];
              i.push(...t);
            } else i.push(...r);
            const l = Array.from(new Set(i));
            {
              const e = new Map(),
                t = l.map((t) => {
                  const s = (0, n.makeNextSymbolId)();
                  return e.set(t, s), this._getResolveSymbolPromise(t, s);
                });
              Promise.all(t).then((t) =>
                this._handleInitProcess(
                  i,
                  (s) => {
                    const o = e.get(s);
                    return t.find((e) => e.params[0] === o);
                  },
                  (e, t) => u.QualifiedSources.fromSymbolMessage(t, e),
                  (e, t, s, o) =>
                    'symbol_resolved' === e.method
                      ? p(e.params[1], s, o)
                      : f(t, s, o, this._getSymbolDescription(t))
                )
              );
            }
          });
        }
        chartModel() {
          return this._chartWidget.model().model();
        }
        handleSourcesChange() {
          if (this._preventHandleSourcesChange) return;
          const e = this.chartModel().dataSources().filter(b),
            t = new Set(e.map((e) => e.id()));
          Array.from(t).forEach((e) => {
            if (!this._checkedStudiesIds().has(e)) {
              const t = this.chartModel().dataSourceForId(e) || null;
              if (null !== t && b(t)) {
                const t = this._getContentItemByStudyId(e);
                if (!t) return;
                this._addStudyIdToCheckedSymbols(t.symbol, e),
                  this._saveRecent(t.symbol),
                  this._updateContentItemList(
                    this._contentItemList.value(),
                    !0
                  );
              }
            }
          });
          Array.from(this._checkedStudiesIds()).forEach((e) => {
            if (!t.has(e)) {
              const t = this._getContentItemByStudyId(e);
              if (!t) return;
              const s = this._checkedSymbols.get(t.symbol);
              s && s.length > 1
                ? this._removeStudyIdFromCheckedSymbols(t.symbol, e)
                : this._checkedSymbols.delete(t.symbol),
                this._updateContentItemList(this._contentItemList.value(), !0);
            }
          });
        }
        studies() {
          return this._contentItemList.readonly();
        }
        isDataReady() {
          return this._isDataReady.readonly();
        }
        highlightedSymbol() {
          return this._highlightedSymbol.readonly();
        }
        applyStudy(e, t, s) {
          const o = this._chartWidget;
          if (!o) return;
          let i;
          switch (t) {
            case c.CompareOption.SameScale:
              i = o.addCompareAsOverlay(e, s);
              break;
            case c.CompareOption.NewPriceScale:
              i = o.addOverlayStudy(e, !0, s);
              break;
            case c.CompareOption.NewPane:
              i = o.addOverlayStudy(e, !1, s);
          }
          Promise.all([this._getResolveSymbolPromise(e), i]).then((t) =>
            this._handleApplyProcess(
              t,
              (t) => u.QualifiedSources.fromSymbolMessage(e, t),
              (e, t, s) =>
                'symbol_resolved' === e.method
                  ? p(e.params[1], !0, s)
                  : f(t, !0, s)
            )
          );
        }
        _handleApplyProcess(e, t, s) {
          const [o, i] = e;
          if (!o || null === i) return;
          const n = i.id(),
            r = t(o),
            a = s(o, r, i);
          this._saveRecent(r),
            this._addStudyIdToCheckedSymbols(r, n),
            this._showNewItem(a, r, n);
        }
        _handleInitProcess(e, t, s, o) {
          const i = [];
          for (const n of e) {
            const e = t(n);
            if (!e) continue;
            const r = s(e, n),
              a = this._checkedSymbols.get(r),
              l = -1 !== i.findIndex((e) => e.symbol === r);
            if (void 0 === a || l)
              this._recentSymbolsEnabled && i.push(o(e, r, !1));
            else
              for (const t of a) i.push(o(e, r, !0, this._idToStudyMap.get(t)));
          }
          this._updateContentItemList(i), this._isDataReady.setValue(!0);
        }
        _showNewItem(e, t, s) {
          const o = this._contentItemList
            .value()
            .map(this._updateChecked, this);
          o.unshift(e),
            this._recentSymbolsEnabled &&
              o.unshift({ ...e, id: t, study: void 0, checked: !1 }),
            this._updateContentItemList(o),
            this._highlightedSymbol.setValue(s),
            setTimeout(() => this._highlightedSymbol.setValue(null), 500);
        }
        _addStudyIdToCheckedSymbols(e, t) {
          const s = this._checkedSymbols.get(e) || [];
          this._checkedSymbols.set(e, [...s, t]);
        }
        _removeStudyIdFromCheckedSymbols(e, t) {
          const s = this._checkedSymbols.get(e);
          if (s) {
            const o = s.indexOf(t);
            s.splice(o, 1), this._checkedSymbols.set(e, s);
          }
        }
        _updateChecked(e) {
          var t;
          const s = this._checkedSymbols.get(e.symbol),
            o = null === (t = e.study) || void 0 === t ? void 0 : t.id();
          return o ? { ...e, checked: Boolean(s && s.includes(o)) } : e;
        }
        _updateContentItemList(e, t) {
          const s = t ? e.map(this._updateChecked, this) : e,
            o = s.filter((e) => e.checked);
          if (this._recentSymbolsEnabled) {
            const e = new Set(),
              t = s
                .reduce(
                  (t, s) => (
                    s.checked ||
                      e.has(s.symbol) ||
                      (t.push(s), e.add(s.symbol)),
                    t
                  ),
                  []
                )
                .slice(0, this._recentLength);
            this._contentItemList.setValue(o.concat(t));
          } else this._contentItemList.setValue(o);
        }
        _checkedStudiesIds() {
          const e = [].concat(...Array.from(this._checkedSymbols.values()));
          return new Set(e);
        }
        _getContentItemByStudyId(e) {
          const t = this._contentItemList.value(),
            s = t.findIndex((t) => t.study && t.study.id() === e);
          return t[s];
        }
        _loadRecent() {
          return this._recentSymbolsEnabled
            ? g.getJSON('CompareDialog.recent', [])
            : [];
        }
        _saveRecent(e) {
          if (!this._recentSymbolsEnabled) return;
          const t = new Set(this._loadRecent());
          t.has(e) && t.delete(e),
            t.add(e),
            g.setJSON(
              'CompareDialog.recent',
              Array.from(t).slice(-this._recentLength)
            );
        }
        _getSymbolDescription(e) {
          var t;
          return this._defaultSymbolsDescriptions.size &&
            null !== (t = this._defaultSymbolsDescriptions.get(e)) &&
            void 0 !== t
            ? t
            : '';
        }
      }
      function A(e) {
        return void 0 !== e;
      }
    },
    40488: (e, t, s) => {
      var o;
      s.d(t, { CompareOption: () => o }),
        (function (e) {
          (e[(e.SameScale = 0)] = 'SameScale'),
            (e[(e.NewPriceScale = 1)] = 'NewPriceScale'),
            (e[(e.NewPane = 2)] = 'NewPane');
        })(o || (o = {}));
    },
  },
]);
