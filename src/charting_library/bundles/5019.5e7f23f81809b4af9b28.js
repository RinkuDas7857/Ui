'use strict';
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [5019],
  {
    78672: (e, i, t) => {
      t.d(i, {
        floor: () => r,
        convertToInt: () => o,
        limitedPrecision: () => l,
      });
      var n = t(43434);
      function r(e) {
        return Math.floor(e);
      }
      function o(e) {
        return parseInt(String(e));
      }
      function l(e) {
        const i = new n.LimitedPrecisionNumericFormatter(e);
        return (e) => {
          if (null === e) return e;
          const t = i.parse(i.format(e));
          return t.res ? t.value : null;
        };
      }
    },
    85842: (e, i, t) => {
      t.d(i, { getSeriesStylePropertiesDefinitions: () => be });
      var n = t(16282),
        r = t(79881),
        o = t(90963),
        l = t(68680),
        s = t(25436),
        a = t(32856),
        c = t.n(a),
        d = t(27490),
        p = t(78672),
        h = t(5225);
      const u = new o.TranslatedString(
          'change color bars based on previous close',
          (0, r.t)('change color bars based on previous close')
        ),
        y = new o.TranslatedString(
          'change HLC bars',
          (0, r.t)('change HLC bars')
        ),
        g = new o.TranslatedString(
          'change bar up color',
          (0, r.t)('change bar up color')
        ),
        f = new o.TranslatedString(
          'change bar down color',
          (0, r.t)('change bar down color')
        ),
        b = new o.TranslatedString(
          'change thin bars',
          (0, r.t)('change thin bars')
        ),
        S = new o.TranslatedString(
          'change line price source',
          (0, r.t)('change line price source')
        ),
        w = new o.TranslatedString(
          'change line type',
          (0, r.t)('change line type')
        ),
        T = new o.TranslatedString(
          'change line color',
          (0, r.t)('change line color')
        ),
        P = new o.TranslatedString(
          'change line width',
          (0, r.t)('change line width')
        ),
        m = new o.TranslatedString(
          'change area price source',
          (0, r.t)('change area price source')
        ),
        v = new o.TranslatedString(
          'change area line color',
          (0, r.t)('change area line color')
        ),
        D = new o.TranslatedString(
          'change area line width',
          (0, r.t)('change area line width')
        ),
        _ = new o.TranslatedString(
          'change area fill color',
          (0, r.t)('change area fill color')
        ),
        C = new o.TranslatedString(
          'change baseline price source',
          (0, r.t)('change baseline price source')
        ),
        k = new o.TranslatedString(
          'change baseline top line color',
          (0, r.t)('change baseline top line color')
        ),
        M = new o.TranslatedString(
          'change baseline top line width',
          (0, r.t)('change baseline top line width')
        ),
        L = new o.TranslatedString(
          'change baseline bottom line color',
          (0, r.t)('change baseline bottom line color')
        ),
        I = new o.TranslatedString(
          'change baseline bottom line width',
          (0, r.t)('change baseline bottom line width')
        ),
        B = new o.TranslatedString(
          'change baseline fill top area color',
          (0, r.t)('change baseline fill top area color')
        ),
        O = new o.TranslatedString(
          'change baseline fill bottom area color',
          (0, r.t)('change baseline fill bottom area color')
        ),
        E = new o.TranslatedString(
          'change base level',
          (0, r.t)('change base level')
        ),
        V = new o.TranslatedString(
          'change high-low body visibility',
          (0, r.t)('change high-low body visibility')
        ),
        j = new o.TranslatedString(
          'change high-low body color',
          (0, r.t)('change high-low body color')
        ),
        N = new o.TranslatedString(
          'change high-low borders visibility',
          (0, r.t)('change high-low borders visibility')
        ),
        $ = new o.TranslatedString(
          'change high-low border color',
          (0, r.t)('change high-low border color')
        ),
        A = new o.TranslatedString(
          'change high-low labels visibility',
          (0, r.t)('change high-low labels visibility')
        ),
        W = new o.TranslatedString(
          'change high-low labels color',
          (0, r.t)('change high-low labels color')
        ),
        x = new o.TranslatedString(
          'change high-low labels font size',
          (0, r.t)('change high-low labels font size')
        ),
        z =
          (new o.TranslatedString(
            'change renko wick visibility',
            (0, r.t)('change renko wick visibility')
          ),
          new o.TranslatedString(
            'change renko wick up color',
            (0, r.t)('change renko wick up color')
          ),
          new o.TranslatedString(
            'change renko wick down color',
            (0, r.t)('change renko wick down color')
          ),
          new o.TranslatedString(
            'change the display of real prices on price scale (instead of Heiken-Ashi price)',
            (0, r.t)(
              'change the display of real prices on price scale (instead of Heiken-Ashi price)'
            )
          ),
          new o.TranslatedString(
            'change range thin bars',
            (0, r.t)('change range thin bars')
          ),
          new o.TranslatedString(
            'change {candleType} body visibility',
            (0, r.t)('change {candleType} body visibility')
          )),
        H = new o.TranslatedString(
          'change {candleType} up color',
          (0, r.t)('change {candleType} up color')
        ),
        F = new o.TranslatedString(
          'change {candleType} down color',
          (0, r.t)('change {candleType} down color')
        ),
        U = new o.TranslatedString(
          'change {candleType} border visibility',
          (0, r.t)('change {candleType} border visibility')
        ),
        R = new o.TranslatedString(
          'change {candleType} up border color',
          (0, r.t)('change {candleType} up border color')
        ),
        Y = new o.TranslatedString(
          'change {candleType} down border color',
          (0, r.t)('change {candleType} down border color')
        ),
        G = new o.TranslatedString(
          'change {candleType} wick visibility',
          (0, r.t)('change {candleType} wick visibility')
        ),
        J = new o.TranslatedString(
          'change {candleType} wick up color',
          (0, r.t)('change {candleType} wick up color')
        ),
        K = new o.TranslatedString(
          'change {candleType} wick down color',
          (0, r.t)('change {candleType} wick down color')
        ),
        q =
          (new o.TranslatedString(
            'change {chartType} up color',
            (0, r.t)('change {chartType} up color')
          ),
          new o.TranslatedString(
            'change {chartType} down color',
            (0, r.t)('change {chartType} down color')
          ),
          new o.TranslatedString(
            'change {chartType} projection bar up color',
            (0, r.t)('change {chartType} projection bar up color')
          ),
          new o.TranslatedString(
            'change {chartType} projection bar down color',
            (0, r.t)('change {chartType} projection bar down color')
          ),
          new o.TranslatedString(
            'change {chartType} border bar up color',
            (0, r.t)('change {chartType} border bar up color')
          ),
          new o.TranslatedString(
            'change {chartType} border bar down color',
            (0, r.t)('change {chartType} border bar down color')
          ),
          new o.TranslatedString(
            'change {chartType} projection border bar up color',
            (0, r.t)('change {chartType} projection border bar up color')
          ),
          new o.TranslatedString(
            'change {chartType} projection border bar up color',
            (0, r.t)('change {chartType} projection border bar up color')
          ),
          (0, r.t)('Color bars based on previous close')),
        Q = (0, r.t)('HLC bars'),
        X = (0, r.t)('Up color'),
        Z = (0, r.t)('Down color'),
        ee = (0, r.t)('Thin bars'),
        ie = (0, r.t)('Body'),
        te = (0, r.t)('Borders'),
        ne = (0, r.t)('Wick'),
        re = (0, r.t)('Price source'),
        oe = (0, r.t)('Type'),
        le = (0, r.t)('Line'),
        se = (0, r.t)('Top line'),
        ae = (0, r.t)('Bottom line'),
        ce = (0, r.t)('Fill'),
        de = (0, r.t)('Fill top area'),
        pe = (0, r.t)('Fill bottom area'),
        he =
          ((0, r.t)('Up bars'),
          (0, r.t)('Down bars'),
          (0, r.t)('Projection up bars'),
          (0, r.t)('Projection down bars'),
          (0, r.t)('Real prices on price scale (instead of Heikin-Ashi price)'),
          (0, r.t)('Base level')),
        ue = (0, r.t)('Body'),
        ye = (0, r.t)('Borders'),
        ge = (0, r.t)('Labels');
      function fe(e, i, t, n) {
        const r = (0, h.removeSpaces)(t.originalText());
        return [
          (0, l.createTwoColorsPropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                i.drawBody,
                z.format({ candleType: t })
              ),
              color1: (0, l.getColorDefinitionProperty)(
                e,
                i.upColor,
                null,
                H.format({ candleType: t })
              ),
              color2: (0, l.getColorDefinitionProperty)(
                e,
                i.downColor,
                null,
                F.format({ candleType: t })
              ),
            },
            { id: `${n}Symbol${r}CandlesColor`, title: ie }
          ),
          (0, l.createTwoColorsPropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                i.drawBorder,
                U.format({ candleType: t })
              ),
              color1: (0, l.getColorDefinitionProperty)(
                e,
                i.borderUpColor,
                null,
                R.format({ candleType: t })
              ),
              color2: (0, l.getColorDefinitionProperty)(
                e,
                i.borderDownColor,
                null,
                Y.format({ candleType: t })
              ),
            },
            { id: `${n}Symbol${r}BordersColor`, title: te }
          ),
          (0, l.createTwoColorsPropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                i.drawWick,
                G.format({ candleType: t })
              ),
              color1: (0, l.getColorDefinitionProperty)(
                e,
                i.wickUpColor,
                null,
                J.format({ candleType: t })
              ),
              color2: (0, l.getColorDefinitionProperty)(
                e,
                i.wickDownColor,
                null,
                K.format({ candleType: t })
              ),
            },
            { id: `${n}Symbol${r}WickColors`, title: ne }
          ),
        ];
      }
      function be(e, i, t, a, h) {
        switch (t) {
          case 0:
            return (function (e, i, t) {
              return [
                (0, l.createCheckablePropertyDefinition)(
                  {
                    checked: (0, l.convertToDefinitionProperty)(
                      e,
                      i.barColorsOnPrevClose,
                      u
                    ),
                  },
                  { id: t + 'SymbolBarStyleBarColorsOnPrevClose', title: q }
                ),
                (0, l.createCheckablePropertyDefinition)(
                  {
                    checked: (0, l.convertToDefinitionProperty)(
                      e,
                      i.dontDrawOpen,
                      y
                    ),
                  },
                  { id: t + 'SymbolDontDrawOpen', title: Q }
                ),
                (0, l.createColorPropertyDefinition)(
                  {
                    color: (0, l.getColorDefinitionProperty)(
                      e,
                      i.upColor,
                      null,
                      g
                    ),
                  },
                  { id: t + 'SymbolUpColor', title: X }
                ),
                (0, l.createColorPropertyDefinition)(
                  {
                    color: (0, l.getColorDefinitionProperty)(
                      e,
                      i.downColor,
                      null,
                      f
                    ),
                  },
                  { id: t + 'SymbolDownColor', title: Z }
                ),
                (0, l.createCheckablePropertyDefinition)(
                  {
                    checked: (0, l.convertToDefinitionProperty)(
                      e,
                      i.thinBars,
                      b
                    ),
                  },
                  { id: t + 'SymbolBarThinBars', title: ee }
                ),
              ];
            })(e, i.barStyle.childs(), h);
          case 1:
            return (function (e, i, t) {
              return [
                (0, l.createCheckablePropertyDefinition)(
                  {
                    checked: (0, l.convertToDefinitionProperty)(
                      e,
                      i.barColorsOnPrevClose,
                      u
                    ),
                  },
                  { id: t + 'SymbolCandleStyleBarColorsOnPrevClose', title: q }
                ),
                ...fe(
                  e,
                  i,
                  new o.TranslatedString('candle', (0, r.t)('candle')),
                  t
                ),
              ];
            })(e, i.candleStyle.childs(), h);
          case 2:
            return (function (e, i, t, n, r) {
              return [
                (0, l.createOptionsPropertyDefinition)(
                  {
                    option: (0, l.convertToDefinitionProperty)(
                      e,
                      i.priceSource,
                      S
                    ),
                  },
                  {
                    id: r + 'SymbolLinePriceSource',
                    title: re,
                    options: new (c())(t),
                  }
                ),
                (0, l.createOptionsPropertyDefinition)(
                  {
                    option: (0, l.convertToDefinitionProperty)(
                      e,
                      i.styleType,
                      w
                    ),
                  },
                  {
                    id: r + 'SymbolStyleType',
                    title: oe,
                    options: new (c())(n),
                  }
                ),
                (0, l.createLinePropertyDefinition)(
                  {
                    color: (0, l.getColorDefinitionProperty)(
                      e,
                      i.color,
                      null,
                      T
                    ),
                    width: (0, l.convertToDefinitionProperty)(
                      e,
                      i.linewidth,
                      P
                    ),
                  },
                  { id: r + 'SymbolLineStyle', title: le }
                ),
              ];
            })(
              e,
              i.lineStyle.childs(),
              a.seriesPriceSources,
              a.lineStyleTypes,
              h
            );
          case 3:
            return (function (e, i, t, n) {
              return [
                (0, l.createOptionsPropertyDefinition)(
                  {
                    option: (0, l.convertToDefinitionProperty)(
                      e,
                      i.priceSource,
                      m
                    ),
                  },
                  {
                    id: n + 'SymbolAreaPriceSource',
                    title: re,
                    options: new (c())(t),
                  }
                ),
                (0, l.createLinePropertyDefinition)(
                  {
                    color: (0, l.getColorDefinitionProperty)(
                      e,
                      i.linecolor,
                      null,
                      v
                    ),
                    width: (0, l.convertToDefinitionProperty)(
                      e,
                      i.linewidth,
                      D
                    ),
                  },
                  { id: n + 'SymbolAreaLineStyle', title: le }
                ),
                (0, l.createTwoColorsPropertyDefinition)(
                  {
                    color1: (0, l.getColorDefinitionProperty)(
                      e,
                      i.color1,
                      i.transparency,
                      _
                    ),
                    color2: (0, l.getColorDefinitionProperty)(
                      e,
                      i.color2,
                      i.transparency,
                      _
                    ),
                  },
                  { id: n + 'SymbolAreaFills', title: ce }
                ),
              ];
            })(e, i.areaStyle.childs(), a.seriesPriceSources, h);
          case 9:
            return fe(
              e,
              i.hollowCandleStyle.childs(),
              new o.TranslatedString(
                'hollow candles',
                (0, r.t)('hollow candles')
              ),
              h
            );
          case 10:
            return (function (e, i, t, n) {
              return [
                (0, l.createOptionsPropertyDefinition)(
                  {
                    option: (0, l.convertToDefinitionProperty)(
                      e,
                      i.priceSource,
                      C
                    ),
                  },
                  {
                    id: n + 'SymbolBaseLinePriceSource',
                    title: re,
                    options: new (c())(t),
                  }
                ),
                (0, l.createLinePropertyDefinition)(
                  {
                    color: (0, l.getColorDefinitionProperty)(
                      e,
                      i.topLineColor,
                      null,
                      k
                    ),
                    width: (0, l.convertToDefinitionProperty)(
                      e,
                      i.topLineWidth,
                      M
                    ),
                  },
                  { id: n + 'SymbolBaseLineTopLine', title: se }
                ),
                (0, l.createLinePropertyDefinition)(
                  {
                    color: (0, l.getColorDefinitionProperty)(
                      e,
                      i.bottomLineColor,
                      null,
                      L
                    ),
                    width: (0, l.convertToDefinitionProperty)(
                      e,
                      i.bottomLineWidth,
                      I
                    ),
                  },
                  { id: n + 'SymbolBaseLineBottomLine', title: ae }
                ),
                (0, l.createTwoColorsPropertyDefinition)(
                  {
                    color1: (0, l.getColorDefinitionProperty)(
                      e,
                      i.topFillColor1,
                      null,
                      B
                    ),
                    color2: (0, l.getColorDefinitionProperty)(
                      e,
                      i.topFillColor2,
                      null,
                      B
                    ),
                  },
                  { id: n + 'SymbolBaseLineTopFills', title: de }
                ),
                (0, l.createTwoColorsPropertyDefinition)(
                  {
                    color1: (0, l.getColorDefinitionProperty)(
                      e,
                      i.bottomFillColor1,
                      null,
                      O
                    ),
                    color2: (0, l.getColorDefinitionProperty)(
                      e,
                      i.bottomFillColor2,
                      null,
                      O
                    ),
                  },
                  { id: n + 'SymbolBaseLineBottomFills', title: pe }
                ),
                (0, l.createNumberPropertyDefinition)(
                  {
                    value: (0, l.convertToDefinitionProperty)(
                      e,
                      i.baseLevelPercentage,
                      E,
                      [p.floor]
                    ),
                  },
                  {
                    id: n + 'SymbolBaseLevelPercentage',
                    title: he,
                    type: 0,
                    min: new (c())(0),
                    max: new (c())(100),
                    step: new (c())(1),
                    unit: new (c())('%'),
                  }
                ),
              ];
            })(e, i.baselineStyle.childs(), a.seriesPriceSources, h);
        }
        if (!i.hasOwnProperty('haStyle')) return [];
        if (a.isJapaneseChartsAvailable && 8 === t) {
          return (function (e, i, t) {
            const n = [];
            return (
              n.push(
                (0, l.createCheckablePropertyDefinition)(
                  {
                    checked: (0, l.convertToDefinitionProperty)(
                      e,
                      i.barColorsOnPrevClose,
                      u
                    ),
                  },
                  { id: t + 'SymbolHAStyleBarColorsOnPrevClose', title: q }
                ),
                ...fe(
                  e,
                  i,
                  new o.TranslatedString(
                    'Heikin Ashi',
                    (0, r.t)('Heikin Ashi')
                  ),
                  t
                )
              ),
              n
            );
          })(e, i.haStyle.childs(), h);
        }
        a.isJapaneseChartsAvailable && d.enabled('japanese_chart_styles');
        if (d.enabled('chart_style_hilo') && 12 === t) {
          const t = i.hiloStyle.childs(),
            r = (0, s.chartStyleStudyId)(12);
          return (function (e, i, t, n) {
            const r = (0, l.createColorPropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(e, i.drawBody, V),
                  color: (0, l.getColorDefinitionProperty)(e, i.color, null, j),
                },
                { id: n + 'SymbolBodiesColor', title: ue }
              ),
              o = (0, l.createColorPropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    e,
                    i.showBorders,
                    N
                  ),
                  color: (0, l.getColorDefinitionProperty)(
                    e,
                    i.borderColor,
                    null,
                    $
                  ),
                },
                { id: n + 'SymbolBorderColor', title: ye }
              ),
              s = t.map((e) => ({ title: String(e), value: e }));
            return [
              r,
              o,
              (0, l.createTextPropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    e,
                    i.showLabels,
                    A
                  ),
                  color: (0, l.getColorDefinitionProperty)(
                    e,
                    i.labelColor,
                    null,
                    W
                  ),
                  size: (0, l.convertToDefinitionProperty)(e, i.fontSize, x),
                },
                {
                  id: n + 'SymbolLabels',
                  title: ge,
                  isEditable: !1,
                  isMultiLine: !1,
                  sizeItems: s,
                }
              ),
            ];
          })(e, t, (0, n.ensure)(a.defaultSeriesFontSizes)[r], h);
        }
        return [];
      }
    },
    25019: (e, i, t) => {
      t.d(i, {
        SeriesPropertyDefinitionsViewModel: () => X,
        basePriceSources: () => K,
        lineStyleTypes: () => q,
        seriesPrecisionValues: () => Q,
      });
      var n = t(16282),
        r = t(79881),
        o = t(90963),
        l = t(68680),
        s = t(674),
        a = t.n(s),
        c = t(32856),
        d = t.n(c),
        p = t(25436),
        h = t(74645),
        u = t(85842),
        y = t(78672);
      const g = new o.TranslatedString(
        'change {inputName} property',
        (0, r.t)('change {inputName} property')
      );
      function f(e) {
        return e.map((e) => ({ value: e, title: (0, r.t)(e) }));
      }
      function b(e, i, t, s, a, c, h) {
        const u = [];
        return (
          t.forEach((t) => {
            if (
              !(function (e, i) {
                return (
                  !e.isHidden &&
                  (void 0 === e.visible ||
                    (function (e, i) {
                      if (!e) return !0;
                      const t = e.split('==');
                      return !(t.length < 2) && i[t[0]].value() === t[1];
                    })(e.visible, i))
                );
              })(t, s)
            )
              return;
            const b = t.id;
            if (!s.hasOwnProperty(b)) return;
            const S = s[b],
              w = (function (e, i) {
                return 'style' === e.id
                  ? 'Box size assignment method'
                  : 'boxSize' === e.id
                  ? 'Box size'
                  : i.childs().name.value();
              })(t, a[b]),
              T = (function (e) {
                return (0, r.t)(e);
              })(w),
              P = new o.TranslatedString(w, T);
            if ('options' in t) {
              const i = (0, n.ensure)(t.options);
              u.push(
                (0, l.createOptionsPropertyDefinition)(
                  {
                    option: (0, l.convertToDefinitionProperty)(
                      e,
                      S,
                      g.format({ inputName: P })
                    ),
                  },
                  { id: `${h}${t.name}`, title: T, options: new (d())(f(i)) }
                )
              );
            } else if ('integer' !== t.type) {
              if ('float' === t.type) {
                let n;
                return (
                  (n =
                    (function (e, i) {
                      return !(
                        ((i === (0, p.chartStyleStudyId)(4) ||
                          i === (0, p.chartStyleStudyId)(6)) &&
                          'boxSize' === e) ||
                        (i === (0, p.chartStyleStudyId)(5) &&
                          'reversalAmount' === e)
                      );
                    })(b, i) || null === c.value()
                      ? new (d())(t.min)
                      : c),
                  void u.push(
                    (0, l.createNumberPropertyDefinition)(
                      {
                        value: (0, l.convertToDefinitionProperty)(
                          e,
                          S,
                          g.format({ inputName: P })
                        ),
                      },
                      {
                        id: `${h}${t.name}`,
                        title: T,
                        type: 1,
                        min: n,
                        max: new (d())(t.max),
                        defval: t.defval,
                      }
                    )
                  )
                );
              }
              'text' !== t.type
                ? 'bool' !== t.type ||
                  u.push(
                    (0, l.createCheckablePropertyDefinition)(
                      {
                        checked: (0, l.convertToDefinitionProperty)(
                          e,
                          S,
                          g.format({ inputName: P })
                        ),
                      },
                      { id: `${h}${t.name}`, title: T }
                    )
                  )
                : u.push(
                    (0, l.createTextPropertyDefinition)(
                      {
                        text: (0, l.convertToDefinitionProperty)(
                          e,
                          S,
                          g.format({ inputName: P })
                        ),
                      },
                      {
                        id: `${h}${t.name}`,
                        title: T,
                        isEditable: !0,
                        isMultiLine: !1,
                      }
                    )
                  );
            } else
              u.push(
                (0, l.createNumberPropertyDefinition)(
                  {
                    value: (0, l.convertToDefinitionProperty)(
                      e,
                      S,
                      g.format({ inputName: P }),
                      [y.floor]
                    ),
                  },
                  {
                    id: `${h}${t.name}`,
                    title: T,
                    type: 0,
                    min: new (d())(t.min),
                    max: new (d())(t.max),
                    defval: t.defval,
                  }
                )
              );
          }),
          u
        );
      }
      var S = t(65447),
        w = t(97849),
        T = t(69881);
      const P = (0, S.getLogger)('Chart.Definitions.Series'),
        m = new o.TranslatedString(
          'change decimal places',
          (0, r.t)('change decimal places')
        ),
        v = new o.TranslatedString(
          'change timezone',
          (0, r.t)('change timezone')
        ),
        D =
          (new o.TranslatedString(
            'adjust data for dividends',
            (0, r.t)('adjust data for dividends')
          ),
          new o.TranslatedString(
            'use settlement as close on daily interval',
            (0, r.t)('use settlement as close on daily interval')
          ),
          new o.TranslatedString(
            'adjust for contract changes',
            (0, r.t)('adjust for contract changes')
          ),
          new o.TranslatedString('change session', (0, r.t)('change session')),
          new o.TranslatedString(
            'change extended hours color',
            (0, r.t)('change extended hours color')
          )),
        _ = new o.TranslatedString(
          'change pre market color',
          (0, r.t)('change pre market color')
        ),
        C = new o.TranslatedString(
          'change post market color',
          (0, r.t)('change post market color')
        ),
        k = new o.TranslatedString(
          'change price line visibility',
          (0, r.t)('change price line visibility')
        ),
        M = new o.TranslatedString(
          'change price line color',
          (0, r.t)('change price line color')
        ),
        L = new o.TranslatedString(
          'change price line width',
          (0, r.t)('change price line width')
        ),
        I =
          (new o.TranslatedString(
            'change previous close price line visibility',
            (0, r.t)('change previous close price line visibility')
          ),
          new o.TranslatedString(
            'change previous close price line color',
            (0, r.t)('change previous close price line color')
          ),
          new o.TranslatedString(
            'change previous close price line width',
            (0, r.t)('change previous close price line width')
          ),
          new o.TranslatedString(
            'change pre/post market price lines visibility',
            (0, r.t)('change pre/post market price lines visibility')
          ),
          new o.TranslatedString(
            'change pre market line color',
            (0, r.t)('change pre market line color')
          ),
          new o.TranslatedString(
            'change post market line color',
            (0, r.t)('change post market line color')
          ),
          new o.TranslatedString(
            'change bid and ask lines visibility',
            (0, r.t)('change bid and ask lines visibility')
          ),
          new o.TranslatedString(
            'change bid line color',
            (0, r.t)('change bid line color')
          ),
          new o.TranslatedString(
            'change ask line color',
            (0, r.t)('change ask line color')
          ),
          new o.TranslatedString(
            'change high and low price lines visibility',
            (0, r.t)('change high and low price lines visibility')
          )),
        B =
          ((0, r.t)('Adjust data for dividends'),
          (0, r.t)('Session'),
          (0, r.t)('Adjust for contract changes'),
          (0, r.t)('Use settlement as close on daily interval'),
          (0, r.t)('Pre/post market hours background')),
        O = (0, r.t)('Last price line'),
        E =
          ((0, r.t)('Previous day close price line'),
          (0, r.t)('Bid and ask lines'),
          (0, r.t)('Pre/post market price line'),
          (0, r.t)('Precision')),
        V = (0, r.t)('Timezone'),
        j = (0, r.t)('Open'),
        N = (0, r.t)('High'),
        $ = (0, r.t)('Low'),
        A = (0, r.t)('Close'),
        W = (0, r.t)('(H + L)/2'),
        x = (0, r.t)('(H + L + C)/3'),
        z = (0, r.t)('(O + H + L + C)/4'),
        H = (0, r.t)('Simple'),
        F = (0, r.t)('With markers'),
        U = (0, r.t)('Step'),
        R = (0, r.t)('Default'),
        Y = (0, r.t)('High and low price lines'),
        G = {
          [(0, p.chartStyleStudyId)(12)]: [
            7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 40,
          ],
        },
        J = [
          { priceScale: 1, minMove: 1, frac: !1 },
          { priceScale: 10, minMove: 1, frac: !1 },
          { priceScale: 100, minMove: 1, frac: !1 },
          { priceScale: 1e3, minMove: 1, frac: !1 },
          { priceScale: 1e4, minMove: 1, frac: !1 },
          { priceScale: 1e5, minMove: 1, frac: !1 },
          { priceScale: 1e6, minMove: 1, frac: !1 },
          { priceScale: 1e7, minMove: 1, frac: !1 },
          { priceScale: 1e8, minMove: 1, frac: !1 },
          { priceScale: 1e9, minMove: 1, frac: !1 },
          { priceScale: 1e10, minMove: 1, frac: !1 },
          { priceScale: 2, minMove: 1, frac: !0 },
          { priceScale: 4, minMove: 1, frac: !0 },
          { priceScale: 8, minMove: 1, frac: !0 },
          { priceScale: 16, minMove: 1, frac: !0 },
          { priceScale: 32, minMove: 1, frac: !0 },
          { priceScale: 64, minMove: 1, frac: !0 },
          { priceScale: 128, minMove: 1, frac: !0 },
          { priceScale: 320, minMove: 1, frac: !0 },
        ],
        K = [
          { title: j, value: 'open', id: 'price-source-open' },
          { title: N, value: 'high', id: 'price-source-high' },
          { title: $, value: 'low', id: 'price-source-low' },
          { title: A, value: 'close', id: 'price-source-close' },
          { title: W, value: 'hl2', id: 'price-source-hl2' },
          { title: x, value: 'hlc3', id: 'price-source-hlc3' },
          { title: z, value: 'ohlc4', id: 'price-source-ohlc4' },
        ],
        q = [
          { title: H, value: h.STYLE_LINE_TYPE_SIMPLE },
          { title: F, value: h.STYLE_LINE_TYPE_MARKERS },
          { title: U, value: h.STYLE_LINE_TYPE_STEP },
        ];
      function Q() {
        const e = [{ title: R, value: 'default' }];
        for (let i = 0; i < J.length; i++)
          e.push({
            title: `${J[i].minMove}/${J[i].priceScale}`,
            value: `${J[i].priceScale},${J[i].minMove},${J[i].frac}`,
          });
        return e;
      }
      class X {
        constructor(e, i, t, n, r, o) {
          (this._definitions = null),
            (this._inputsSubscriptions = null),
            (this._isDestroyed = !1),
            (this._propertyPages = null),
            (this._seriesMinTickWV = null),
            (this._sessionIdOptionsWV = new (d())([])),
            (this._disabledSessionSelect = new (d())(!0)),
            (this._series = e),
            (this._undoModel = i),
            (this._model = this._undoModel.model()),
            (this._propertyPageId = t),
            (this._propertyPageName = n),
            (this._propertyPageIcon = r),
            (this._timezonePropertyObj = o),
            this._series
              .onStyleChanged()
              .subscribe(this, this._updateDefinitions),
            this._series
              .dataEvents()
              .symbolResolved()
              .subscribe(this, this._updateSeriesMinTickWV),
            this._series
              .dataEvents()
              .symbolResolved()
              .subscribe(this, this._updateSessionIdOptionsWV),
            this._updateSeriesMinTickWV(),
            this._updateSessionIdOptionsWV();
        }
        destroy() {
          null !== this._propertyPages &&
            this._propertyPages.forEach((e) => {
              (0, l.destroyDefinitions)(e.definitions.value());
            }),
            this._series
              .onStyleChanged()
              .unsubscribe(this, this._updateDefinitions),
            this._series.dataEvents().symbolResolved().unsubscribeAll(this),
            this._unsubscribeInputsUpdate(),
            (this._isDestroyed = !0);
        }
        propertyPages() {
          return null === this._propertyPages
            ? this._getDefinitions().then((e) => {
                if (this._isDestroyed)
                  throw new Error(
                    'SeriesPropertyDefinitionsViewModel already destroyed'
                  );
                return (
                  null === this._propertyPages &&
                    (this._propertyPages = [
                      {
                        id: this._propertyPageId,
                        title: this._propertyPageName,
                        icon: this._propertyPageIcon,
                        definitions: new (d())(e),
                      },
                    ]),
                  this._propertyPages
                );
              })
            : Promise.resolve(this._propertyPages);
        }
        _seriesMinTick() {
          const e = this._series.symbolInfo();
          return null !== e ? e.minmov / e.pricescale : null;
        }
        _updateSeriesMinTickWV() {
          null === this._seriesMinTickWV
            ? (this._seriesMinTickWV = new (d())(this._seriesMinTick()))
            : this._seriesMinTickWV.setValue(this._seriesMinTick());
        }
        _updateSessionIdOptionsWV() {}
        _updateDefinitions() {
          null !== this._definitions &&
            (0, l.destroyDefinitions)(this._definitions),
            (this._definitions = null),
            this._unsubscribeInputsUpdate(),
            this._createSeriesDefinitions().then((e) => {
              if (this._isDestroyed)
                throw new Error(
                  'SeriesPropertyDefinitionsViewModel already destroyed'
                );
              (0, n.ensureNotNull)(this._propertyPages)[0].definitions.setValue(
                e
              );
            });
        }
        _getDefinitions() {
          return null === this._definitions
            ? this._createSeriesDefinitions()
            : Promise.resolve(this._definitions);
        }
        _unsubscribeInputsUpdate() {
          null !== this._inputsSubscriptions &&
            (this._inputsSubscriptions.forEach((e) => {
              e.unsubscribeAll(this);
            }),
            (this._inputsSubscriptions = null));
        }
        _subscribeInputsUpdate(e, i) {
          const t = [];
          e.forEach((e) => {
            if (void 0 !== e.visible) {
              const n = e.visible.split('==');
              if (2 === n.length) {
                const e = i[n[0]];
                -1 === t.indexOf(e) &&
                  (e.subscribe(this, this._updateDefinitions), t.push(e));
              }
            }
          }),
            t.length > 0
              ? (this._inputsSubscriptions = t)
              : (this._inputsSubscriptions = null);
        }
        _createSeriesDefinitions() {
          const e = this._series.properties().childs(),
            i = this._series.getInputsProperties(),
            t = this._series.getInputsInfoProperties(),
            r = e.style.value(),
            o = this._series.getStyleShortName();
          return new Promise((e) => {
            const l = (0, p.chartStyleStudyId)(r);
            null !== l
              ? this._model
                  .studyMetaInfoRepository()
                  .findById({ type: 'java', studyId: l })
                  .then((r) => {
                    if (this._isDestroyed)
                      throw new Error(
                        'SeriesPropertyDefinitionsViewModel already destroyed'
                      );
                    if (null !== this._definitions) return void e(null);
                    const l = (0, n.ensureNotNull)(this._seriesMinTickWV),
                      s = b(this._undoModel, r.id, r.inputs, i, t, l, o);
                    this._subscribeInputsUpdate(r.inputs, i), e(s);
                  })
                  .catch((i) => {
                    P.logWarn(
                      'Find meta info for create series definitions with error - ' +
                        (0, w.errorToString)(i)
                    ),
                      e(null);
                  })
              : e(null);
          }).then((i) => {
            if (this._isDestroyed)
              throw new Error(
                'SeriesPropertyDefinitionsViewModel already destroyed'
              );
            if (null !== this._definitions) return this._definitions;
            const t = (0, u.getSeriesStylePropertiesDefinitions)(
              this._undoModel,
              e,
              r,
              {
                seriesPriceSources: K,
                lineStyleTypes: q,
                isJapaneseChartsAvailable: !0,
                defaultSeriesFontSizes: G,
              },
              'mainSeries'
            );
            null !== i && t.push(...i);
            const n = (0, l.createOptionsPropertyDefinition)(
                {
                  option: (0, l.convertToDefinitionProperty)(
                    this._undoModel,
                    e.minTick,
                    m
                  ),
                },
                { id: o + 'SymbolMinTick', title: E, options: new (d())(Q()) }
              ),
              s = (0, l.createOptionsPropertyDefinition)(
                {
                  option: (0, l.convertToDefinitionProperty)(
                    this._undoModel,
                    this._timezonePropertyObj.property,
                    v
                  ),
                },
                {
                  id: o + 'SymbolTimezone',
                  title: V,
                  options: new (d())(this._timezonePropertyObj.values),
                }
              );
            return (
              (this._definitions = [
                (0, l.createPropertyDefinitionsGeneralGroup)(
                  t,
                  'generalSymbolStylesGroup'
                ),
                ...this._seriesPriceLinesDefinitions(o),
                ...this._seriesDataDefinitions(o),
                n,
                s,
              ]),
              this._definitions
            );
          });
        }
        _seriesDataDefinitions(e) {
          return [];
        }
        _createOutOfSessionDefinition(e) {
          const i = this._model
            .sessions()
            .properties()
            .childs()
            .graphics.childs()
            .backgrounds.childs()
            .outOfSession.childs();
          return (0, l.createColorPropertyDefinition)(
            {
              color: (0, l.getColorDefinitionProperty)(
                this._undoModel,
                i.color,
                i.transparency,
                D
              ),
            },
            { id: e + 'SymbolExtendedHoursColors', title: B }
          );
        }
        _createPrePostMarketDefinition(e) {
          const i = this._model.sessions(),
            t = i
              .properties()
              .childs()
              .graphics.childs()
              .backgrounds.childs()
              .preMarket.childs(),
            n = i
              .properties()
              .childs()
              .graphics.childs()
              .backgrounds.childs()
              .postMarket.childs();
          return (0, l.createTwoColorsPropertyDefinition)(
            {
              color1: (0, l.getColorDefinitionProperty)(
                this._undoModel,
                t.color,
                t.transparency,
                _
              ),
              color2: (0, l.getColorDefinitionProperty)(
                this._undoModel,
                n.color,
                n.transparency,
                C
              ),
            },
            { id: e + 'SymbolExtendedHoursColors', title: B }
          );
        }
        _seriesPriceLinesDefinitions(e) {
          const i = [],
            t = this._series.properties().childs();
          if (this._series.hasClosePrice()) {
            const n = (0, l.createLinePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._undoModel,
                  t.showPriceLine,
                  k
                ),
                color: (0, l.getColorDefinitionProperty)(
                  this._undoModel,
                  t.priceLineColor,
                  null,
                  M
                ),
                width: (0, l.convertToDefinitionProperty)(
                  this._undoModel,
                  t.priceLineWidth,
                  L
                ),
              },
              { id: e + 'SymbolLastValuePriceLine', title: O }
            );
            i.push(n);
          }
          this._series.hasClosePrice();
          const n = t.highLowAvgPrice.childs(),
            r = (0, T.combineProperty)(
              (e, i) => e || i,
              n.highLowPriceLinesVisible,
              new (a())(!1)
            ),
            o = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._undoModel,
                  r,
                  null,
                  void 0,
                  (e) => {
                    this._undoModel.beginUndoMacro(I),
                      this._undoModel.setProperty(
                        n.highLowPriceLinesVisible,
                        e,
                        null
                      ),
                      this._undoModel.endUndoMacro();
                  },
                  () => r.destroy()
                ),
              },
              { id: e + 'SymbolHighLowAverageClosePriceLines', title: Y }
            );
          return i.push(o), i;
        }
      }
    },
  },
]);
