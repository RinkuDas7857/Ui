'use strict';
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [8537],
  {
    34954: (e, t, i) => {
      i.d(t, {
        getCoordinateYMetaInfo: () => d,
        getCoordinateXMetaInfo: () => h,
        getCoordinatesPropertiesDefinitions: () => g,
      });
      var r = i(79881),
        o = i(90963),
        n = i(68680),
        l = i(32856),
        s = i.n(l),
        a = i(5225);
      const c = new o.TranslatedString(
          'change price Y coordinate',
          (0, r.t)('change price Y coordinate')
        ),
        p = new o.TranslatedString(
          'change bar X coordinate',
          (0, r.t)('change bar X coordinate')
        );
      function d(e, t, i) {
        return {
          property: (0, n.convertToDefinitionProperty)(e, t.price, c),
          info: { typeY: 1, stepY: i },
        };
      }
      function h(e, t) {
        return {
          property: (0, n.convertToDefinitionProperty)(e, t.bar, p),
          info: {
            typeX: 0,
            minX: new (s())(-5e4),
            maxX: new (s())(15e3),
            stepX: new (s())(1),
          },
        };
      }
      function g(e, t, i, r, o, l) {
        const s = h(e, t),
          c = d(e, t, r);
        return (0, n.createCoordinatesPropertyDefinition)(
          { x: s.property, y: c.property },
          {
            id: (0, a.removeSpaces)(`${l}Coordinates${o}`),
            title: o,
            ...s.info,
            ...c.info,
          }
        );
      }
    },
    78672: (e, t, i) => {
      i.d(t, {
        floor: () => o,
        convertToInt: () => n,
        limitedPrecision: () => l,
      });
      var r = i(43434);
      function o(e) {
        return Math.floor(e);
      }
      function n(e) {
        return parseInt(String(e));
      }
      function l(e) {
        const t = new r.LimitedPrecisionNumericFormatter(e);
        return (e) => {
          if (null === e) return e;
          const i = t.parse(t.format(e));
          return i.res ? i.value : null;
        };
      }
    },
    88101: (e, t, i) => {
      i.d(t, { getLinesStylesPropertiesDefinitions: () => y });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(68680),
        s = i(5225);
      const a = new o.TranslatedString(
          'change {title} price label visibility',
          (0, r.t)('change {title} price label visibility')
        ),
        c = new o.TranslatedString(
          'change {title} extension',
          (0, r.t)('change {title} extension')
        ),
        p = new o.TranslatedString(
          'change {title} time label visibility',
          (0, r.t)('change {title} time label visibility')
        ),
        d = (0, r.t)('Price label'),
        h = (0, r.t)('Time label'),
        g = (0, r.t)('Extend');
      function y(e, t, i) {
        const r = (0, s.removeSpaces)(i.originalText()),
          o = [],
          y = (0, n.createLineStyleDefinition)(
            e,
            {
              lineColor: t.linecolor,
              lineWidth: t.linewidth,
              lineStyle: t.linestyle,
            },
            i,
            'Line'
          );
        if ((o.push(y), 'showPrice' in t)) {
          const n = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                t.showPrice,
                a.format({ title: i })
              ),
            },
            { id: r + 'ShowPrice', title: d }
          );
          o.push(n);
        }
        if ('extendLine' in t) {
          const n = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                t.extendLine,
                c.format({ title: i })
              ),
            },
            { id: r + 'ExtendLine', title: g }
          );
          o.push(n);
        }
        if ('showTime' in t) {
          const n = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                t.showTime,
                p.format({ title: i })
              ),
            },
            { id: r + 'ShowTime', title: h }
          );
          o.push(n);
        }
        return o;
      }
    },
    46566: (e, t, i) => {
      i.d(t, { getTrendLineToolsStylePropertiesDefinitions: () => M });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(68680),
        s = i(32856),
        a = i.n(s),
        c = i(98678),
        p = i(5225);
      const d = new o.TranslatedString(
          'change {title} middle point visibility',
          (0, r.t)('change {title} middle point visibility')
        ),
        h = new o.TranslatedString(
          'change {title} price labels visibility',
          (0, r.t)('change {title} price labels visibility')
        ),
        g = new o.TranslatedString(
          'change {title} price range visibility',
          (0, r.t)('change {title} price range visibility')
        ),
        y = new o.TranslatedString(
          'change {title} bars range visibility',
          (0, r.t)('change {title} bars range visibility')
        ),
        u = new o.TranslatedString(
          'change {title} date/time range visibility',
          (0, r.t)('change {title} date/time range visibility')
        ),
        f = new o.TranslatedString(
          'change {title} distance visibility',
          (0, r.t)('change {title} distance visibility')
        ),
        v = new o.TranslatedString(
          'change {title} angle visibility',
          (0, r.t)('change {title} angle visibility')
        ),
        b = new o.TranslatedString(
          'change {title} always show stats',
          (0, r.t)('change {title} always show stats')
        ),
        _ = new o.TranslatedString(
          'change {title} stats position',
          (0, r.t)('change {title} stats position')
        ),
        D = [
          { value: c.StatsPosition.Left, title: (0, r.t)('Left') },
          { value: c.StatsPosition.Center, title: (0, r.t)('Center') },
          { value: c.StatsPosition.Right, title: (0, r.t)('Right') },
        ],
        T = (0, r.t)('Middle point'),
        w = (0, r.t)('Price labels'),
        P = (0, r.t)('Stats position'),
        S = (0, r.t)('Price range'),
        m = (0, r.t)('Bars range'),
        x = (0, r.t)('Date/time range'),
        C = (0, r.t)('Distance'),
        k = (0, r.t)('Angle'),
        L = (0, r.t)('Always show stats'),
        A = (0, r.t)('Stats');
      function M(e, t, i, r) {
        const o = (0, p.removeSpaces)(i.originalText()),
          s = [],
          c = t,
          M = (0, n.createLineStyleDefinition)(
            e,
            {
              ...c,
              lineColor: t.linecolor,
              lineWidth: t.linewidth,
              lineStyle: t.linestyle,
            },
            i,
            'Line'
          );
        s.push(M);
        const V = (0, l.createCheckablePropertyDefinition)(
          {
            checked: (0, l.convertToDefinitionProperty)(
              e,
              t.showMiddlePoint,
              d.format({ title: i })
            ),
          },
          { id: o + 'MiddlePoint', title: (r && r.middlePoint) || T }
        );
        s.push(V);
        const B = (0, l.createCheckablePropertyDefinition)(
          {
            checked: (0, l.convertToDefinitionProperty)(
              e,
              t.showPriceLabels,
              h.format({ title: i })
            ),
          },
          {
            id: o + 'ShowPriceLabels',
            title: (r && r.showPriceLabelsTitle) || w,
          }
        );
        s.push(B);
        const N = [],
          W = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                t.showPriceRange,
                g.format({ title: i })
              ),
            },
            { id: o + 'PriceRange', title: (r && r.priceRange) || S }
          );
        N.push(W);
        const z = (0, l.createCheckablePropertyDefinition)(
          {
            checked: (0, l.convertToDefinitionProperty)(
              e,
              t.showBarsRange,
              y.format({ title: i })
            ),
          },
          { id: o + 'BarsRange', title: (r && r.barRange) || m }
        );
        if ((N.push(z), 'showDateTimeRange' in t)) {
          const n = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                t.showDateTimeRange,
                u.format({ title: i })
              ),
            },
            { id: o + 'DateTimeRange', title: (r && r.dateTimeRange) || x }
          );
          N.push(n);
        }
        if ('showDistance' in t) {
          const n = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                t.showDistance,
                f.format({ title: i })
              ),
            },
            { id: o + 'Distance', title: (r && r.distance) || C }
          );
          N.push(n);
        }
        if ('showAngle' in t) {
          const n = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                e,
                t.showAngle,
                v.format({ title: i })
              ),
            },
            { id: o + 'Angle', title: (r && r.angle) || k }
          );
          N.push(n);
        }
        const R = (0, l.createCheckablePropertyDefinition)(
          {
            checked: (0, l.convertToDefinitionProperty)(
              e,
              t.alwaysShowStats,
              b.format({ title: i })
            ),
          },
          { id: o + 'ShowStats', title: (r && r.showStats) || L }
        );
        N.push(R);
        const E = (0, l.createOptionsPropertyDefinition)(
          {
            option: (0, l.convertToDefinitionProperty)(
              e,
              t.statsPosition,
              _.format({ title: i })
            ),
          },
          {
            id: o + 'StatsPosition',
            title: (r && r.statsPosition) || P,
            options: new (a())(D),
          }
        );
        return (
          N.push(E),
          s.push(
            (0, l.createPropertyDefinitionsGeneralGroup)(N, o + 'StatsGroup', A)
          ),
          s
        );
      }
    },
    62684: (e, t, i) => {
      i.d(t, { createLineStyleDefinition: () => b });
      var r = i(79881),
        o = i(90963),
        n = i(68680),
        l = i(5225);
      const s = new o.TranslatedString(
          'change {toolName} line visibility',
          (0, r.t)('change {toolName} line visibility')
        ),
        a = new o.TranslatedString(
          'change {toolName} line width',
          (0, r.t)('change {toolName} line width')
        ),
        c = new o.TranslatedString(
          'change {toolName} line style',
          (0, r.t)('change {toolName} line style')
        ),
        p = new o.TranslatedString(
          'change {toolName} line color',
          (0, r.t)('change {toolName} line color')
        ),
        d = new o.TranslatedString(
          'change {toolName} line extending left',
          (0, r.t)('change {toolName} line extending left')
        ),
        h = new o.TranslatedString(
          'change {toolName} line left end',
          (0, r.t)('change {toolName} line left end')
        ),
        g = new o.TranslatedString(
          'change {toolName} line extending right',
          (0, r.t)('change {toolName} line extending right')
        ),
        y = new o.TranslatedString(
          'change {toolName} line right end',
          (0, r.t)('change {toolName} line right end')
        ),
        u = (0, r.t)('Line'),
        f = (0, r.t)('Extend left line'),
        v = (0, r.t)('Extend right line');
      function b(e, t, i, r, o) {
        const b = {},
          _ = {
            id: `${(0, l.removeSpaces)(i.originalText())}${r}`,
            title: (o && o.line) || u,
          };
        return (
          void 0 !== t.showLine &&
            (b.checked = (0, n.convertToDefinitionProperty)(
              e,
              t.showLine,
              s.format({ toolName: i })
            )),
          void 0 !== t.lineWidth &&
            (b.width = (0, n.convertToDefinitionProperty)(
              e,
              t.lineWidth,
              a.format({ toolName: i })
            )),
          void 0 !== t.lineStyle &&
            (b.style = (0, n.convertToDefinitionProperty)(
              e,
              t.lineStyle,
              c.format({ toolName: i })
            )),
          void 0 !== t.lineColor &&
            (b.color = (0, n.getColorDefinitionProperty)(
              e,
              t.lineColor,
              null,
              p.format({ toolName: i })
            )),
          void 0 !== t.extendLeft &&
            ((b.extendLeft = (0, n.convertToDefinitionProperty)(
              e,
              t.extendLeft,
              d.format({ toolName: i })
            )),
            (_.extendLeftTitle = (o && o.extendLeftTitle) || f)),
          void 0 !== t.leftEnd &&
            (b.leftEnd = (0, n.convertToDefinitionProperty)(
              e,
              t.leftEnd,
              h.format({ toolName: i })
            )),
          void 0 !== t.extendRight &&
            ((b.extendRight = (0, n.convertToDefinitionProperty)(
              e,
              t.extendRight,
              g.format({ toolName: i })
            )),
            (_.extendRightTitle = (o && o.extendRightTitle) || v)),
          void 0 !== t.rightEnd &&
            (b.rightEnd = (0, n.convertToDefinitionProperty)(
              e,
              t.rightEnd,
              y.format({ toolName: i })
            )),
          (0, n.createLinePropertyDefinition)(b, _)
        );
      }
    },
    92785: (e, t, i) => {
      i.d(t, { createTextStyleDefinition: () => m });
      var r = i(79881),
        o = i(90963),
        n = i(68680),
        l = i(5225);
      const s = new o.TranslatedString(
          'change {toolName} text visibility',
          (0, r.t)('change {toolName} text visibility')
        ),
        a = new o.TranslatedString(
          'change {toolName} text color',
          (0, r.t)('change {toolName} text color')
        ),
        c = new o.TranslatedString(
          'change {toolName} text font size',
          (0, r.t)('change {toolName} text font size')
        ),
        p = new o.TranslatedString(
          'change {toolName} text font bold',
          (0, r.t)('change {toolName} text font bold')
        ),
        d = new o.TranslatedString(
          'change {toolName} text font italic',
          (0, r.t)('change {toolName} text font italic')
        ),
        h = new o.TranslatedString(
          'change {toolName} text',
          (0, r.t)('change {toolName} text')
        ),
        g = new o.TranslatedString(
          'change {toolName} labels alignment vertical',
          (0, r.t)('change {toolName} labels alignment vertical')
        ),
        y = new o.TranslatedString(
          'change {toolName} labels alignment horizontal',
          (0, r.t)('change {toolName} labels alignment horizontal')
        ),
        u = new o.TranslatedString(
          'change {toolName} labels direction',
          (0, r.t)('change {toolName} labels direction')
        ),
        f = new o.TranslatedString(
          'change {toolName} text background visibility',
          (0, r.t)('change {toolName} text background visibility')
        ),
        v = new o.TranslatedString(
          'change {toolName} text background color',
          (0, r.t)('change {toolName} text background color')
        ),
        b = new o.TranslatedString(
          'change {toolName} text border visibility',
          (0, r.t)('change {toolName} text border visibility')
        ),
        _ = new o.TranslatedString(
          'change {toolName} text border width',
          (0, r.t)('change {toolName} text border width')
        ),
        D = new o.TranslatedString(
          'change {toolName} text border color',
          (0, r.t)('change {toolName} text border color')
        ),
        T = new o.TranslatedString(
          'change {toolName} text wrap',
          (0, r.t)('change {toolName} text wrap')
        ),
        w = (0, r.t)('Background'),
        P = (0, r.t)('Border'),
        S = (0, r.t)('Text wrap');
      function m(e, t, i, r) {
        const o = {},
          m = {
            id: (0, l.removeSpaces)(i.originalText()) + 'Text',
            title: (r.customTitles && r.customTitles.text) || '',
          };
        if (
          (void 0 !== t.showText &&
            (o.checked = (0, n.convertToDefinitionProperty)(
              e,
              t.showText,
              s.format({ toolName: i })
            )),
          void 0 !== t.textColor &&
            (o.color = (0, n.getColorDefinitionProperty)(
              e,
              t.textColor,
              t.transparency || null,
              a.format({ toolName: i })
            )),
          void 0 !== t.fontSize &&
            (o.size = (0, n.convertToDefinitionProperty)(
              e,
              t.fontSize,
              c.format({ toolName: i })
            )),
          void 0 !== t.bold &&
            (o.bold = (0, n.convertToDefinitionProperty)(
              e,
              t.bold,
              p.format({ toolName: i })
            )),
          void 0 !== t.italic &&
            (o.italic = (0, n.convertToDefinitionProperty)(
              e,
              t.italic,
              d.format({ toolName: i })
            )),
          void 0 !== t.text &&
            ((o.text = (0, n.convertToDefinitionProperty)(
              e,
              t.text,
              h.format({ toolName: i })
            )),
            (m.isEditable = Boolean(r.isEditable)),
            (m.isMultiLine = Boolean(r.isMultiLine))),
          void 0 !== t.vertLabelsAlign &&
            ((o.alignmentVertical = (0, n.convertToDefinitionProperty)(
              e,
              t.vertLabelsAlign,
              g.format({ toolName: i })
            )),
            (m.alignmentVerticalItems = r.alignmentVerticalItems)),
          void 0 !== t.horzLabelsAlign &&
            ((o.alignmentHorizontal = (0, n.convertToDefinitionProperty)(
              e,
              t.horzLabelsAlign,
              y.format({ toolName: i })
            )),
            (m.alignmentHorizontalItems = r.alignmentHorizontalItems)),
          void 0 !== t.textOrientation &&
            (o.orientation = (0, n.convertToDefinitionProperty)(
              e,
              t.textOrientation,
              u.format({ toolName: i })
            )),
          void 0 !== t.backgroundVisible &&
            (o.backgroundVisible = (0, n.convertToDefinitionProperty)(
              e,
              t.backgroundVisible,
              f.format({ toolName: i })
            )),
          void 0 !== t.backgroundColor)
        ) {
          let r = null;
          void 0 !== t.backgroundTransparency && (r = t.backgroundTransparency),
            (o.backgroundColor = (0, n.getColorDefinitionProperty)(
              e,
              t.backgroundColor,
              r,
              v.format({ toolName: i })
            ));
        }
        return (
          (void 0 === t.backgroundVisible && void 0 === t.backgroundColor) ||
            (m.backgroundTitle =
              (r.customTitles && r.customTitles.backgroundTitle) || w),
          void 0 !== t.borderVisible &&
            (o.borderVisible = (0, n.convertToDefinitionProperty)(
              e,
              t.borderVisible,
              b.format({ toolName: i })
            )),
          void 0 !== t.borderWidth &&
            (o.borderWidth = (0, n.convertToDefinitionProperty)(
              e,
              t.borderWidth,
              _.format({ toolName: i })
            )),
          void 0 !== t.borderColor &&
            (o.borderColor = (0, n.getColorDefinitionProperty)(
              e,
              t.borderColor,
              null,
              D.format({ toolName: i })
            )),
          (void 0 === t.borderVisible &&
            void 0 === t.borderColor &&
            void 0 === t.borderWidth) ||
            (m.borderTitle =
              (r.customTitles && r.customTitles.borderTitle) || P),
          void 0 !== t.wrap &&
            ((o.wrap = (0, n.convertToDefinitionProperty)(
              e,
              t.wrap,
              T.format({ toolName: i })
            )),
            (m.wrapTitle = (r.customTitles && r.customTitles.wrapTitle) || S)),
          (0, n.createTextPropertyDefinition)(o, m)
        );
      }
    },
    68854: (e, t, i) => {
      i.r(t), i.d(t, { ArrowMarkDefinitionsViewModel: () => d });
      var r = i(79881),
        o = i(90963),
        n = i(92785),
        l = i(3619),
        s = i(68680);
      const a = new o.TranslatedString(
          'change arrow color',
          (0, r.t)('change arrow color')
        ),
        c = (0, r.t)('Text'),
        p = (0, r.t)('Arrow');
      class d extends l.LineDataSourceDefinitionsViewModel {
        _textPropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, n.createTextStyleDefinition)(
              this._propertyApplier,
              {
                text: e.text,
                showText: e.showLabel,
                textColor: e.color,
                fontSize: e.fontsize,
                bold: e.bold,
                italic: e.italic,
              },
              new o.TranslatedString(this._source.name(), this._source.title()),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: c } }
            ),
          ];
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, s.createColorPropertyDefinition)(
              {
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.arrowColor,
                  null,
                  a
                ),
              },
              { id: 'ArrowColor', title: p }
            ),
          ];
        }
      }
    },
    60810: (e, t, i) => {
      i.r(t), i.d(t, { ArrowMarkerDefinitionsViewModel: () => h });
      var r = i(79881),
        o = i(90963),
        n = i(68680),
        l = i(3619),
        s = i(5225),
        a = i(92785);
      const c = new o.TranslatedString(
          'change {title} color',
          (0, r.t)('change {title} color')
        ),
        p = (0, r.t)('Color'),
        d = (0, r.t)('Text');
      class h extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.title());
          return [
            (0, n.createColorPropertyDefinition)(
              {
                color: (0, n.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.backgroundColor,
                  null,
                  c.format({ title: i })
                ),
              },
              { id: (0, s.removeSpaces)(t + 'Color'), title: p }
            ),
          ];
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, a.createTextStyleDefinition)(
              this._propertyApplier,
              {
                text: e.text,
                showText: e.showLabel,
                textColor: e.textColor,
                fontSize: e.fontsize,
                bold: e.bold,
                italic: e.italic,
              },
              new o.TranslatedString(this._source.name(), this._source.title()),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: d } }
            ),
          ];
        }
      }
    },
    27340: (e, t, i) => {
      i.r(t), i.d(t, { BalloonDefinitionsViewModel: () => a });
      var r = i(79881),
        o = i(90963),
        n = i(92785),
        l = i(3619);
      const s = (0, r.t)('Text');
      class a extends l.LineDataSourceDefinitionsViewModel {
        _textPropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, n.createTextStyleDefinition)(
              this._propertyApplier,
              {
                textColor: e.color,
                fontSize: e.fontsize,
                text: e.text,
                backgroundColor: e.backgroundColor,
                backgroundTransparency: e.transparency,
                borderColor: e.borderColor,
              },
              new o.TranslatedString(this._source.name(), this._source.title()),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: s } }
            ),
          ];
        }
      }
    },
    23478: (e, t, i) => {
      i.r(t), i.d(t, { BarsPatternDefinitionsViewModel: () => T });
      var r = i(79881),
        o = i(90963),
        n = i(3619),
        l = i(68680),
        s = i(32856),
        a = i.n(s),
        c = i(83641),
        p = i(78672),
        d = i(5225);
      const h = new o.TranslatedString(
          'change {title} color',
          (0, r.t)('change {title} color')
        ),
        g = new o.TranslatedString(
          'change {title} mode',
          (0, r.t)('change {title} mode')
        ),
        y = new o.TranslatedString(
          'change {title} mirrored',
          (0, r.t)('change {title} mirrored')
        ),
        u = new o.TranslatedString(
          'change {title} flipped',
          (0, r.t)('change {title} flipped')
        ),
        f = (0, r.t)('Color'),
        v = (0, r.t)('Mode'),
        b = (0, r.t)('Mirrored'),
        _ = (0, r.t)('Flipped'),
        D = [
          { value: c.LineToolBarsPatternMode.Bars, title: (0, r.t)('HL bars') },
          {
            value: c.LineToolBarsPatternMode.OpenClose,
            title: (0, r.t)('OC bars'),
          },
          {
            value: c.LineToolBarsPatternMode.Line,
            title: (0, r.t)('Line - close'),
          },
          {
            value: c.LineToolBarsPatternMode.LineOpen,
            title: (0, r.t)('Line - open'),
          },
          {
            value: c.LineToolBarsPatternMode.LineHigh,
            title: (0, r.t)('Line - high'),
          },
          {
            value: c.LineToolBarsPatternMode.LineLow,
            title: (0, r.t)('Line - low'),
          },
          {
            value: c.LineToolBarsPatternMode.LineHL2,
            title: (0, r.t)('Line - HL/2'),
          },
        ];
      class T extends n.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.title()),
            r = (0, d.removeSpaces)(t);
          return [
            (0, l.createColorPropertyDefinition)(
              {
                color: (0, l.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.color,
                  null,
                  h.format({ title: i })
                ),
              },
              { id: r + 'Color', title: f }
            ),
            (0, l.createOptionsPropertyDefinition)(
              {
                option: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.mode,
                  g.format({ title: i }),
                  [p.convertToInt]
                ),
              },
              { id: r + 'Mode', title: v, options: new (a())(D) }
            ),
            (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.mirrored,
                  y.format({ title: i })
                ),
              },
              { id: r + 'Mirrored', title: b }
            ),
            (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.flipped,
                  u.format({ title: i })
                ),
              },
              { id: r + 'Flipped', title: _ }
            ),
          ];
        }
      }
    },
    72862: (e, t, i) => {
      i.r(t), i.d(t, { BrushDefinitionsViewModel: () => h });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(3619),
        s = i(68680),
        a = i(5225);
      const c = new o.TranslatedString(
          'change {title} background visibility',
          (0, r.t)('change {title} background visibility')
        ),
        p = new o.TranslatedString(
          'change {title} background color',
          (0, r.t)('change {title} background color')
        ),
        d = (0, r.t)('Background');
      class h extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.title());
          return [
            (0, n.createLineStyleDefinition)(
              this._propertyApplier,
              {
                lineColor: e.linecolor,
                lineWidth: e.linewidth,
                leftEnd: e.leftEnd,
                rightEnd: e.rightEnd,
              },
              i,
              'Line'
            ),
            (0, s.createColorPropertyDefinition)(
              {
                checked: (0, s.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.fillBackground,
                  c.format({ title: i })
                ),
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.backgroundColor,
                  e.transparency,
                  p.format({ title: i })
                ),
              },
              { id: (0, a.removeSpaces)(t + 'BackgroundColor'), title: d }
            ),
          ];
        }
      }
    },
    58023: (e, t, i) => {
      i.r(t), i.d(t, { CalloutDefinitionsViewModel: () => l });
      var r = i(92785),
        o = i(3619),
        n = i(90963);
      class l extends o.LineDataSourceDefinitionsViewModel {
        _textPropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, r.createTextStyleDefinition)(
              this._propertyApplier,
              {
                textColor: e.color,
                fontSize: e.fontsize,
                bold: e.bold,
                italic: e.italic,
                text: e.text,
                backgroundColor: e.backgroundColor,
                backgroundTransparency: e.transparency,
                borderColor: e.bordercolor,
                borderWidth: e.linewidth,
                wrap: e.wordWrap,
              },
              new n.TranslatedString(this._source.name(), this._source.title()),
              { isEditable: !0, isMultiLine: !0 }
            ),
          ];
        }
      }
    },
    82781: (e, t, i) => {
      i.r(t), i.d(t, { CrossLineDefinitionsViewModel: () => c });
      var r = i(79881),
        o = i(90963),
        n = i(3619),
        l = i(88101),
        s = i(92785);
      const a = (0, r.t)('Text');
      class c extends n.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs();
          return (0, l.getLinesStylesPropertiesDefinitions)(
            this._propertyApplier,
            e,
            new o.TranslatedString(this._source.name(), this._source.title())
          );
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs();
          if ('showLabel' in e) {
            return [
              (0, s.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  ...e,
                  showText: e.showLabel,
                  textColor: e.textcolor,
                  fontSize: e.fontsize,
                },
                new o.TranslatedString(
                  this._source.name(),
                  this._source.title()
                ),
                { isEditable: !0, isMultiLine: !0, customTitles: { text: a } }
              ),
            ];
          }
          return null;
        }
      }
    },
    60468: (e, t, i) => {
      i.r(t),
        i.d(t, { CyclicAndSineLinesPatternDefinitionsViewModel: () => a });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(3619);
      const s = (0, r.t)('Lines');
      class a extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, n.createLineStyleDefinition)(
              this._propertyApplier,
              {
                lineColor: e.linecolor,
                lineWidth: e.linewidth,
                lineStyle: e.linestyle,
              },
              new o.TranslatedString(this._source.name(), this._source.title()),
              'Line',
              { line: s }
            ),
          ];
        }
      }
    },
    60312: (e, t, i) => {
      i.r(t), i.d(t, { ElliottPatternDefinitionsViewModel: () => f });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(3619),
        s = i(68680),
        a = i(32856),
        c = i.n(a),
        p = i(5225);
      const d = new o.TranslatedString(
          'change {title} color',
          (0, r.t)('change {title} color')
        ),
        h = new o.TranslatedString(
          'change {title} degree',
          (0, r.t)('change {title} degree')
        ),
        g = (0, r.t)('Color'),
        y = (0, r.t)('Wave'),
        u = (0, r.t)('Degree');
      class f extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.title());
          return [
            (0, s.createColorPropertyDefinition)(
              {
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.color,
                  null,
                  d.format({ title: i })
                ),
              },
              { id: (0, p.removeSpaces)(t + 'BackgroundColor'), title: g }
            ),
            (0, n.createLineStyleDefinition)(
              this._propertyApplier,
              { showLine: e.showWave, lineWidth: e.linewidth },
              i,
              'Line',
              { line: y }
            ),
            (0, s.createOptionsPropertyDefinition)(
              {
                option: (0, s.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.degree,
                  h.format({ title: i })
                ),
              },
              {
                id: t + 'Degree',
                title: u,
                options: new (c())(this._source.availableDegreesValues()),
              }
            ),
          ];
        }
      }
    },
    40804: (e, t, i) => {
      i.r(t), i.d(t, { FibCirclesDefinitionsViewModel: () => m });
      var r = i(16282),
        o = i(79881),
        n = i(90963),
        l = i(62684),
        s = i(68680),
        a = i(3619),
        c = i(5225),
        p = i(3925);
      const d = new n.TranslatedString(
          'change {title} level {index} line visibility',
          (0, o.t)('change {title} level {index} line visibility')
        ),
        h = new n.TranslatedString(
          'change {title} levels visibility',
          (0, o.t)('change {title} levels visibility')
        ),
        g = new n.TranslatedString(
          'change {title} level {index} line color',
          (0, o.t)('change {title} level {index} line color')
        ),
        y = new n.TranslatedString(
          'change {title} level {index} line width',
          (0, o.t)('change {title} level {index} line width')
        ),
        u = new n.TranslatedString(
          'change {title} level {index} line coeff',
          (0, o.t)('change {title} level {index} line coeff')
        ),
        f = new n.TranslatedString(
          'change {title} all lines color',
          (0, o.t)('change {title} all lines color')
        ),
        v = new n.TranslatedString(
          'change {title} background visibility',
          (0, o.t)('change {title} background visibility')
        ),
        b = new n.TranslatedString(
          'change {title} background transparency',
          (0, o.t)('change {title} background transparency')
        ),
        _ = new n.TranslatedString(
          'change {title} coeffs as percents visibility',
          (0, o.t)('change {title} coeffs as percents visibility')
        ),
        D = (0, o.t)('Trend line'),
        T = (0, o.t)('Use one color'),
        w = (0, o.t)('Background'),
        P = (0, o.t)('Levels'),
        S = (0, o.t)('Coeffs as percents');
      class m extends a.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, c.removeSpaces)(i),
            a = new n.TranslatedString(i, this._source.title()),
            m = t.trendline.childs(),
            x = (0, l.createLineStyleDefinition)(
              this._propertyApplier,
              {
                showLine: m.visible,
                lineColor: m.color,
                lineStyle: m.linestyle,
                lineWidth: m.linewidth,
              },
              a,
              'TrendLine',
              { line: D }
            );
          e.push(x);
          const C = this._source.levelsCount();
          for (let i = 1; i <= C; i++) {
            const r = t['level' + i].childs(),
              n = (0, s.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.visible,
                    d.format({ title: a, index: i })
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    r.color,
                    null,
                    g.format({ title: a, index: i })
                  ),
                  width: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.linewidth,
                    y.format({ title: a, index: i })
                  ),
                  level: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.coeff,
                    u.format({ title: a, index: i })
                  ),
                },
                { id: `${o}LineLevel${i}` }
              );
            e.push(n);
          }
          const k = (0, s.createColorPropertyDefinition)(
            {
              color: (0, s.getColorDefinitionProperty)(
                this._propertyApplier,
                new p.CollectibleColorPropertyUndoWrapper(
                  (0, r.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null
                ),
                null,
                f.format({ title: a }),
                !0
              ),
            },
            { id: o + 'AllLineColor', title: T }
          );
          e.push(k);
          const L = (0, s.createTransparencyPropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fillBackground,
                v.format({ title: a })
              ),
              transparency: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.transparency,
                b.format({ title: a })
              ),
            },
            { id: o + 'Background', title: w }
          );
          e.push(L);
          const A = (0, s.createCheckablePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.showCoeffs,
                h.format({ title: a })
              ),
            },
            { id: o + 'Levels', title: P }
          );
          e.push(A);
          const M = (0, s.createCheckablePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.coeffsAsPercents,
                _.format({ title: a })
              ),
            },
            { id: o + 'Percentage', title: S }
          );
          return e.push(M), e;
        }
      }
    },
    58481: (e, t, i) => {
      i.r(t), i.d(t, { FibDrawingsWith24LevelsDefinitionsViewModel: () => $ });
      var r = i(16282),
        o = i(79881),
        n = i(90963),
        l = i(62684),
        s = i(68680),
        a = i(3619),
        c = i(46446),
        p = i(32856),
        d = i.n(p),
        h = i(5225),
        g = i(3925);
      const y = new n.TranslatedString(
          'change {title} level {index} line visibility',
          (0, o.t)('change {title} level {index} line visibility')
        ),
        u = new n.TranslatedString(
          'change {title} level {index} line color',
          (0, o.t)('change {title} level {index} line color')
        ),
        f = new n.TranslatedString(
          'change {title} level {index} line coeff',
          (0, o.t)('change {title} level {index} line coeff')
        ),
        v = new n.TranslatedString(
          'change {title} all lines color',
          (0, o.t)('change {title} all lines color')
        ),
        b = new n.TranslatedString(
          'change {title} background visibility',
          (0, o.t)('change {title} background visibility')
        ),
        _ = new n.TranslatedString(
          'change {title} background transparency',
          (0, o.t)('change {title} background transparency')
        ),
        D = new n.TranslatedString(
          'change {title} reverse',
          (0, o.t)('change {title} reverse')
        ),
        T = new n.TranslatedString(
          'change {title} prices visibility',
          (0, o.t)('change {title} prices visibility')
        ),
        w = new n.TranslatedString(
          'change {title} labels alignment',
          (0, o.t)('change {title} labels alignment')
        ),
        P = new n.TranslatedString(
          'change {title} style',
          (0, o.t)('change {title} style')
        ),
        S = new n.TranslatedString(
          'change {title} fib levels based on log scale',
          (0, o.t)('change {title} fib levels based on log scale')
        ),
        m = (0, o.t)('Trend line'),
        x = (0, o.t)('Levels line'),
        C = (0, o.t)('Extend right'),
        k = (0, o.t)('Extend left'),
        L = (0, o.t)('Extend lines right'),
        A = (0, o.t)('Extend lines left'),
        M = (0, o.t)('Reverse'),
        V = (0, o.t)('Prices'),
        B = (0, o.t)('Levels'),
        N = (0, o.t)('Labels'),
        W = (0, o.t)('Use one color'),
        z = (0, o.t)('Background'),
        R = (0, o.t)('Fib levels based on log scale'),
        E = [
          { id: 'values', value: !1, title: (0, o.t)('Values') },
          { id: 'percents', value: !0, title: (0, o.t)('Percents') },
        ],
        G = [
          { id: 'bottom', value: 'bottom', title: (0, o.t)('Top') },
          { id: 'middle', value: 'middle', title: (0, o.t)('Middle') },
          { id: 'top', value: 'top', title: (0, o.t)('Bottom') },
        ];
      class $ extends a.LineDataSourceDefinitionsViewModel {
        constructor(e, t) {
          super(e, t), (this._disabledBasedOnLog = null);
          if (
            'fibLevelsBasedOnLogScale' in this._source.properties().childs()
          ) {
            const e = this._source.priceScale();
            null !== e &&
              ((this._disabledBasedOnLog = new (d())(Boolean(!e.mode().log))),
              this._createPropertyRages(),
              e.modeChanged().subscribe(this, (e, t) => {
                null !== this._disabledBasedOnLog &&
                  this._disabledBasedOnLog.setValue(Boolean(!t.log));
              }));
          }
        }
        destroy() {
          super.destroy();
          const e = this._source.priceScale();
          null !== e && e.modeChanged().unsubscribeAll(this);
        }
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, h.removeSpaces)(i),
            a = new n.TranslatedString(i, this._source.title());
          if ('trendline' in t) {
            const i = t.trendline.childs(),
              r = (0, l.createLineStyleDefinition)(
                this._propertyApplier,
                {
                  showLine: i.visible,
                  lineColor: i.color,
                  lineStyle: i.linestyle,
                  lineWidth: i.linewidth,
                },
                a,
                'TrendLine',
                { line: m }
              );
            e.push(r);
          }
          const p = t.levelsStyle.childs(),
            $ = { lineStyle: p.linestyle, lineWidth: p.linewidth },
            O = { line: x };
          'extendLines' in t &&
            (($.extendRight = t.extendLines), (O.extendRightTitle = L)),
            'extendLinesLeft' in t &&
              (($.extendLeft = t.extendLinesLeft), (O.extendLeftTitle = A)),
            'extendRight' in t &&
              (($.extendRight = t.extendRight), (O.extendRightTitle = C)),
            'extendLeft' in t &&
              (($.extendLeft = t.extendLeft), (O.extendLeftTitle = k));
          const F = (0, l.createLineStyleDefinition)(
            this._propertyApplier,
            $,
            a,
            'LevelsStyleLine',
            O
          );
          e.push(F);
          const I = [],
            U = this._source.levelsCount();
          for (let e = 1; e <= U; e++) {
            const i = t['level' + e].childs(),
              r = (0, s.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.visible,
                    y.format({ title: a, index: e })
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    i.color,
                    null,
                    u.format({ title: a, index: e })
                  ),
                  level: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.coeff,
                    f.format({ title: a, index: e })
                  ),
                },
                { id: `${o}LineLevel${e}` }
              );
            I.push(r);
          }
          const H = (0, s.createPropertyDefinitionsLeveledLinesGroup)(
            I,
            o + 'LeveledLinesGroup'
          );
          e.push(
            (0, s.createPropertyDefinitionsGeneralGroup)([H], o + 'Group')
          );
          const Y = (0, s.createColorPropertyDefinition)(
            {
              color: (0, s.getColorDefinitionProperty)(
                this._propertyApplier,
                new g.CollectibleColorPropertyUndoWrapper(
                  (0, r.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null
                ),
                null,
                v.format({ title: a }),
                !0
              ),
            },
            { id: o + 'AllLineColor', title: W }
          );
          e.push(Y);
          const j = (0, s.createTransparencyPropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fillBackground,
                b.format({ title: a })
              ),
              transparency: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.transparency,
                _.format({ title: a })
              ),
            },
            { id: o + 'Background', title: z }
          );
          e.push(j);
          const X = t;
          if ('reverse' in X) {
            const t = (0, s.createCheckablePropertyDefinition)(
              {
                checked: (0, s.convertToDefinitionProperty)(
                  this._propertyApplier,
                  X.reverse,
                  D.format({ title: a })
                ),
              },
              { id: o + 'Reverse', title: M }
            );
            e.push(t);
          }
          const K = (0, s.createCheckablePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.showPrices,
                T.format({ title: a })
              ),
            },
            { id: o + 'Prices', title: V }
          );
          e.push(K);
          const q = (0, s.createOptionsPropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.showCoeffs,
                P.format({ title: a })
              ),
              option: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.coeffsAsPercents,
                P.format({ title: a })
              ),
            },
            { id: o + 'PitchStyle', title: B, options: new (d())(E) }
          );
          e.push(q);
          const J = (0, s.createTwoOptionsPropertyDefinition)(
            {
              option1: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.horzLabelsAlign,
                w.format({ title: a })
              ),
              option2: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.vertLabelsAlign,
                w.format({ title: a })
              ),
            },
            {
              id: o + 'Alignment',
              title: N,
              optionsItems1: new (d())(c.availableAlignmentHorizontalItems),
              optionsItems2: new (d())(G),
            }
          );
          if (
            (e.push(J),
            'fibLevelsBasedOnLogScale' in t &&
              null !== this._disabledBasedOnLog)
          ) {
            const i = (0, s.createCheckablePropertyDefinition)(
              {
                disabled: (0, s.convertFromWVToDefinitionProperty)(
                  this._propertyApplier,
                  this._disabledBasedOnLog,
                  S.format({ title: a })
                ),
                checked: (0, s.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.fibLevelsBasedOnLogScale,
                  S.format({ title: a })
                ),
              },
              { id: o + 'BasedOnLog', title: R }
            );
            e.push(i);
          }
          return e;
        }
      }
    },
    8545: (e, t, i) => {
      i.r(t), i.d(t, { FibSpeedResistanceArcsDefinitionsViewModel: () => m });
      var r = i(16282),
        o = i(79881),
        n = i(90963),
        l = i(62684),
        s = i(68680),
        a = i(3619),
        c = i(5225),
        p = i(3925);
      const d = new n.TranslatedString(
          'change {title} level {index} line visibility',
          (0, o.t)('change {title} level {index} line visibility')
        ),
        h = new n.TranslatedString(
          'change {title} levels visibility',
          (0, o.t)('change {title} levels visibility')
        ),
        g = new n.TranslatedString(
          'change {title} level {index} line color',
          (0, o.t)('change {title} level {index} line color')
        ),
        y = new n.TranslatedString(
          'change {title} level {index} line width',
          (0, o.t)('change {title} level {index} line width')
        ),
        u = new n.TranslatedString(
          'change {title} level {index} line coeff',
          (0, o.t)('change {title} level {index} line coeff')
        ),
        f = new n.TranslatedString(
          'change {title} all lines color',
          (0, o.t)('change {title} all lines color')
        ),
        v = new n.TranslatedString(
          'change {title} background visibility',
          (0, o.t)('change {title} background visibility')
        ),
        b = new n.TranslatedString(
          'change {title} background transparency',
          (0, o.t)('change {title} background transparency')
        ),
        _ = new n.TranslatedString(
          'change {title} full circles visibility',
          (0, o.t)('change {title} full circles visibility')
        ),
        D = (0, o.t)('Trend line'),
        T = (0, o.t)('Use one color'),
        w = (0, o.t)('Background'),
        P = (0, o.t)('Levels'),
        S = (0, o.t)('Full circles');
      class m extends a.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, c.removeSpaces)(i),
            a = new n.TranslatedString(i, this._source.title()),
            m = t.trendline.childs(),
            x = (0, l.createLineStyleDefinition)(
              this._propertyApplier,
              {
                showLine: m.visible,
                lineColor: m.color,
                lineStyle: m.linestyle,
                lineWidth: m.linewidth,
              },
              a,
              'TrendLine',
              { line: D }
            );
          e.push(x);
          const C = this._source.levelsCount();
          for (let i = 1; i <= C; i++) {
            const r = t['level' + i].childs(),
              n = (0, s.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.visible,
                    d.format({ title: a, index: i })
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    r.color,
                    null,
                    g.format({ title: a, index: i })
                  ),
                  width: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.linewidth,
                    y.format({ title: a, index: i })
                  ),
                  level: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.coeff,
                    u.format({ title: a, index: i })
                  ),
                },
                { id: `${o}LineLevel${i}` }
              );
            e.push(n);
          }
          const k = (0, s.createColorPropertyDefinition)(
            {
              color: (0, s.getColorDefinitionProperty)(
                this._propertyApplier,
                new p.CollectibleColorPropertyUndoWrapper(
                  (0, r.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null
                ),
                null,
                f.format({ title: a }),
                !0
              ),
            },
            { id: o + 'AllLineColor', title: T }
          );
          e.push(k);
          const L = (0, s.createTransparencyPropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fillBackground,
                v.format({ title: a })
              ),
              transparency: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.transparency,
                b.format({ title: a })
              ),
            },
            { id: o + 'Background', title: w }
          );
          e.push(L);
          const A = (0, s.createCheckablePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.showCoeffs,
                h.format({ title: a })
              ),
            },
            { id: o + 'Levels', title: P }
          );
          e.push(A);
          const M = (0, s.createCheckablePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fullCircles,
                _.format({ title: a })
              ),
            },
            { id: o + 'FullCircles', title: S }
          );
          return e.push(M), e;
        }
      }
    },
    84061: (e, t, i) => {
      i.r(t), i.d(t, { FibSpeedResistanceFanDefinitionsViewModel: () => W });
      var r = i(16282),
        o = i(79881),
        n = i(90963),
        l = i(68680),
        s = i(3619),
        a = i(5225),
        c = i(3925);
      const p = new n.TranslatedString(
          'change {title} level {index} line visibility',
          (0, o.t)('change {title} level {index} line visibility')
        ),
        d = new n.TranslatedString(
          'change {title} level {index} line color',
          (0, o.t)('change {title} level {index} line color')
        ),
        h = new n.TranslatedString(
          'change {title} level {index} line coeff',
          (0, o.t)('change {title} level {index} line coeff')
        ),
        g = new n.TranslatedString(
          'change {title} all lines color',
          (0, o.t)('change {title} all lines color')
        ),
        y = new n.TranslatedString(
          'change {title} background visibility',
          (0, o.t)('change {title} background visibility')
        ),
        u = new n.TranslatedString(
          'change {title} background transparency',
          (0, o.t)('change {title} background transparency')
        ),
        f = new n.TranslatedString(
          'change {title} left labels visibility',
          (0, o.t)('change {title} left labels visibility')
        ),
        v = new n.TranslatedString(
          'change {title} right labels visibility',
          (0, o.t)('change {title} right labels visibility')
        ),
        b = new n.TranslatedString(
          'change {title} top labels visibility',
          (0, o.t)('change {title} top labels visibility')
        ),
        _ = new n.TranslatedString(
          'change {title} bottom labels visibility',
          (0, o.t)('change {title} bottom labels visibility')
        ),
        D = new n.TranslatedString(
          'change {title} reverse',
          (0, o.t)('change {title} reverse')
        ),
        T = new n.TranslatedString(
          'change {title} grid visibility',
          (0, o.t)('change {title} grid visibility')
        ),
        w = new n.TranslatedString(
          'change {title} grid line color',
          (0, o.t)('change {title} grid line color')
        ),
        P = new n.TranslatedString(
          'change {title} grid line width',
          (0, o.t)('change {title} grid line width')
        ),
        S = new n.TranslatedString(
          'change {title} grid line style',
          (0, o.t)('change {title} grid line style')
        ),
        m = (0, o.t)('Use one color'),
        x = (0, o.t)('Background'),
        C = (0, o.t)('Price levels'),
        k = (0, o.t)('Time levels'),
        L = (0, o.t)('Left labels'),
        A = (0, o.t)('Right labels'),
        M = (0, o.t)('Top labels'),
        V = (0, o.t)('Bottom labels'),
        B = (0, o.t)('Grid'),
        N = (0, o.t)('Reverse');
      class W extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, a.removeSpaces)(i),
            s = new n.TranslatedString(i, this._source.title()),
            W = [],
            z = this._source.hLevelsCount();
          for (let e = 1; e <= z; e++) {
            const i = t['hlevel' + e].childs(),
              r = (0, l.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.visible,
                    p.format({ title: s, index: e })
                  ),
                  color: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    i.color,
                    null,
                    d.format({ title: s, index: e })
                  ),
                  level: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.coeff,
                    h.format({ title: s, index: e })
                  ),
                },
                { id: `${o}HLineLevel${e}` }
              );
            W.push(r);
          }
          const R = (0, l.createPropertyDefinitionsLeveledLinesGroup)(
              W,
              o + 'HLeveledLinesGroup'
            ),
            E = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.showLeftLabels,
                  f.format({ title: s })
                ),
              },
              { id: o + 'LeftLabels', title: L }
            ),
            G = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.showRightLabels,
                  v.format({ title: s })
                ),
              },
              { id: o + 'RightLabels', title: A }
            ),
            $ = (0, l.createPropertyDefinitionsGeneralGroup)(
              [R, E, G],
              o + 'HLevelGroup',
              C
            );
          e.push($);
          const O = [],
            F = this._source.vLevelsCount();
          for (let e = 1; e <= F; e++) {
            const i = t['vlevel' + e].childs(),
              r = (0, l.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.visible,
                    p.format({ title: s, index: e })
                  ),
                  color: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    i.color,
                    null,
                    d.format({ title: s, index: e })
                  ),
                  level: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.coeff,
                    h.format({ title: s, index: e })
                  ),
                },
                { id: `${o}VLineLevel${e}` }
              );
            O.push(r);
          }
          const I = (0, l.createPropertyDefinitionsLeveledLinesGroup)(
              O,
              o + 'VLeveledLinesGroup'
            ),
            U = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.showTopLabels,
                  b.format({ title: s })
                ),
              },
              { id: o + 'TopLabels', title: M }
            ),
            H = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.showBottomLabels,
                  _.format({ title: s })
                ),
              },
              { id: o + 'BottomLabels', title: V }
            ),
            Y = (0, l.createPropertyDefinitionsGeneralGroup)(
              [I, U, H],
              o + 'VLevelGroup',
              k
            );
          e.push(Y);
          const j = (0, l.createColorPropertyDefinition)(
            {
              color: (0, l.getColorDefinitionProperty)(
                this._propertyApplier,
                new c.CollectibleColorPropertyUndoWrapper(
                  (0, r.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null
                ),
                null,
                g.format({ title: s }),
                !0
              ),
            },
            { id: o + 'AllLineColor', title: m }
          );
          e.push(j);
          const X = (0, l.createTransparencyPropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fillBackground,
                y.format({ title: s })
              ),
              transparency: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.transparency,
                u.format({ title: s })
              ),
            },
            { id: o + 'Background', title: x }
          );
          e.push(X);
          const K = t.grid.childs(),
            q = (0, l.createLinePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  K.visible,
                  T.format({ title: s })
                ),
                color: (0, l.getColorDefinitionProperty)(
                  this._propertyApplier,
                  K.color,
                  null,
                  w.format({ title: s })
                ),
                width: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  K.linewidth,
                  P.format({ title: s })
                ),
                style: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  K.linestyle,
                  S.format({ title: s })
                ),
              },
              { id: o + 'GridLine', title: B }
            );
          e.push(q);
          const J = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.reverse,
                D.format({ title: s })
              ),
            },
            { id: o + 'Reverse', title: N }
          );
          return e.push(J), e;
        }
      }
    },
    73546: (e, t, i) => {
      i.r(t), i.d(t, { FibSpiralDefinitionsViewModel: () => y });
      var r = i(79881),
        o = i(90963),
        n = i(68680),
        l = i(3619),
        s = i(5225);
      const a = new o.TranslatedString(
          'change {title} line color',
          (0, r.t)('change {title} line color')
        ),
        c = new o.TranslatedString(
          'change {title} line width',
          (0, r.t)('change {title} line width')
        ),
        p = new o.TranslatedString(
          'change {title} line style',
          (0, r.t)('change {title} line style')
        ),
        d = new o.TranslatedString(
          'change {title} counterclockwise',
          (0, r.t)('change {title} counterclockwise')
        ),
        h = (0, r.t)('Line'),
        g = (0, r.t)('Counterclockwise');
      class y extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = (0, s.removeSpaces)(t),
            r = new o.TranslatedString(t, this._source.title());
          return [
            (0, n.createLinePropertyDefinition)(
              {
                color: (0, n.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.linecolor,
                  null,
                  a.format({ title: r })
                ),
                width: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.linewidth,
                  c.format({ title: r })
                ),
                style: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.linestyle,
                  p.format({ title: r })
                ),
              },
              { id: i + 'Line', title: h }
            ),
            (0, n.createCheckablePropertyDefinition)(
              {
                checked: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.counterclockwise,
                  d.format({ title: r })
                ),
              },
              { id: i + 'Counterclockwise', title: g }
            ),
          ];
        }
      }
    },
    46446: (e, t, i) => {
      i.r(t),
        i.d(t, {
          availableAlignmentVerticalItems: () => m,
          availableAlignmentHorizontalItems: () => x,
          FibTimezoneDefinitionsViewModel: () => C,
        });
      var r = i(16282),
        o = i(79881),
        n = i(90963),
        l = i(68680),
        s = i(3619),
        a = i(32856),
        c = i.n(a),
        p = i(5225),
        d = i(3925);
      const h = new n.TranslatedString(
          'change {title} level {index} line visibility',
          (0, o.t)('change {title} level {index} line visibility')
        ),
        g = new n.TranslatedString(
          'change {title} level {index} line color',
          (0, o.t)('change {title} level {index} line color')
        ),
        y = new n.TranslatedString(
          'change {title} level {index} line width',
          (0, o.t)('change {title} level {index} line width')
        ),
        u = new n.TranslatedString(
          'change {title} level {index} line style',
          (0, o.t)('change {title} level {index} line style')
        ),
        f = new n.TranslatedString(
          'change {title} level {index} line coeff',
          (0, o.t)('change {title} level {index} line coeff')
        ),
        v = new n.TranslatedString(
          'change {title} all lines color',
          (0, o.t)('change {title} all lines color')
        ),
        b = new n.TranslatedString(
          'change {title} background visibility',
          (0, o.t)('change {title} background visibility')
        ),
        _ = new n.TranslatedString(
          'change {title} background transparency',
          (0, o.t)('change {title} background transparency')
        ),
        D = new n.TranslatedString(
          'change {title} labels visibility',
          (0, o.t)('change {title} labels visibility')
        ),
        T = new n.TranslatedString(
          'change {title} labels alignment',
          (0, o.t)('change {title} labels alignment')
        ),
        w = (0, o.t)('Use one color'),
        P = (0, o.t)('Background'),
        S = (0, o.t)('Labels'),
        m = [
          { id: 'top', value: 'top', title: (0, o.t)('Top') },
          { id: 'middle', value: 'middle', title: (0, o.t)('Middle') },
          { id: 'bottom', value: 'bottom', title: (0, o.t)('Bottom') },
        ],
        x = [
          { id: 'left', value: 'left', title: (0, o.t)('Left') },
          { id: 'center', value: 'center', title: (0, o.t)('Center') },
          { id: 'right', value: 'right', title: (0, o.t)('Right') },
        ];
      class C extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, p.removeSpaces)(i),
            s = new n.TranslatedString(i, this._source.title()),
            a = this._source.levelsCount();
          for (let i = 1; i <= a; i++) {
            const r = t['level' + i].childs(),
              n = (0, l.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.visible,
                    h.format({ title: s, index: i })
                  ),
                  color: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    r.color,
                    null,
                    g.format({ title: s, index: i })
                  ),
                  width: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.linewidth,
                    y.format({ title: s, index: i })
                  ),
                  style: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.linestyle,
                    u.format({ title: s, index: i })
                  ),
                  level: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.coeff,
                    f.format({ title: s, index: i })
                  ),
                },
                { id: `${o}LineLevel${i}` }
              );
            e.push(n);
          }
          const C = (0, l.createColorPropertyDefinition)(
            {
              color: (0, l.getColorDefinitionProperty)(
                this._propertyApplier,
                new d.CollectibleColorPropertyUndoWrapper(
                  (0, r.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null
                ),
                null,
                v.format({ title: s }),
                !0
              ),
            },
            { id: o + 'AllLineColor', title: w }
          );
          e.push(C);
          const k = (0, l.createTransparencyPropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fillBackground,
                b.format({ title: s })
              ),
              transparency: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.transparency,
                _.format({ title: s })
              ),
            },
            { id: o + 'Background', title: P }
          );
          e.push(k);
          const L = (0, l.createTwoOptionsPropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.showLabels,
                D.format({ title: s })
              ),
              option1: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.horzLabelsAlign,
                T.format({ title: s })
              ),
              option2: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.vertLabelsAlign,
                T.format({ title: s })
              ),
            },
            {
              id: o + 'Labels',
              title: S,
              optionsItems1: new (c())(x),
              optionsItems2: new (c())(m),
            }
          );
          return e.push(L), e;
        }
      }
    },
    82731: (e, t, i) => {
      i.r(t), i.d(t, { FibWedgeDefinitionsViewModel: () => P });
      var r = i(16282),
        o = i(79881),
        n = i(90963),
        l = i(62684),
        s = i(68680),
        a = i(3619),
        c = i(5225),
        p = i(3925);
      const d = new n.TranslatedString(
          'change {title} level {index} line visibility',
          (0, o.t)('change {title} level {index} line visibility')
        ),
        h = new n.TranslatedString(
          'change {title} levels visibility',
          (0, o.t)('change {title} levels visibility')
        ),
        g = new n.TranslatedString(
          'change {title} level {index} line color',
          (0, o.t)('change {title} level {index} line color')
        ),
        y = new n.TranslatedString(
          'change {title} level {index} line width',
          (0, o.t)('change {title} level {index} line width')
        ),
        u = new n.TranslatedString(
          'change {title} level {index} line coeff',
          (0, o.t)('change {title} level {index} line coeff')
        ),
        f = new n.TranslatedString(
          'change {title} all lines color',
          (0, o.t)('change {title} all lines color')
        ),
        v = new n.TranslatedString(
          'change {title} background visibility',
          (0, o.t)('change {title} background visibility')
        ),
        b = new n.TranslatedString(
          'change {title} background transparency',
          (0, o.t)('change {title} background transparency')
        ),
        _ = (0, o.t)('Trend line'),
        D = (0, o.t)('Use one color'),
        T = (0, o.t)('Background'),
        w = (0, o.t)('Levels');
      class P extends a.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, c.removeSpaces)(i),
            a = new n.TranslatedString(i, this._source.title()),
            P = t.trendline.childs(),
            S = (0, l.createLineStyleDefinition)(
              this._propertyApplier,
              {
                showLine: P.visible,
                lineColor: P.color,
                lineWidth: P.linewidth,
              },
              a,
              'TrendLine',
              { line: _ }
            );
          e.push(S);
          const m = this._source.levelsCount();
          for (let i = 1; i <= m; i++) {
            const r = t['level' + i].childs(),
              n = (0, s.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.visible,
                    d.format({ title: a, index: i })
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    r.color,
                    null,
                    g.format({ title: a, index: i })
                  ),
                  width: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.linewidth,
                    y.format({ title: a, index: i })
                  ),
                  level: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.coeff,
                    u.format({ title: a, index: i })
                  ),
                },
                { id: `${o}LineLevel${i}` }
              );
            e.push(n);
          }
          const x = (0, s.createColorPropertyDefinition)(
            {
              color: (0, s.getColorDefinitionProperty)(
                this._propertyApplier,
                new p.CollectibleColorPropertyUndoWrapper(
                  (0, r.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null
                ),
                null,
                f.format({ title: a }),
                !0
              ),
            },
            { id: o + 'AllLineColor', title: D }
          );
          e.push(x);
          const C = (0, s.createTransparencyPropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fillBackground,
                v.format({ title: a })
              ),
              transparency: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.transparency,
                b.format({ title: a })
              ),
            },
            { id: o + 'Background', title: T }
          );
          e.push(C);
          const k = (0, s.createCheckablePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.showCoeffs,
                h.format({ title: a })
              ),
            },
            { id: o + 'Levels', title: w }
          );
          return e.push(k), e;
        }
      }
    },
    84017: (e, t, i) => {
      i.r(t), i.d(t, { FlagMarkDefinitionsViewModel: () => c });
      var r = i(79881),
        o = i(90963),
        n = i(3619),
        l = i(68680);
      const s = new o.TranslatedString(
          'change flag color',
          (0, r.t)('change flag color')
        ),
        a = (0, r.t)('Flag');
      class c extends n.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, l.createColorPropertyDefinition)(
              {
                color: (0, l.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.flagColor,
                  null,
                  s
                ),
              },
              { id: 'FlagColor', title: a }
            ),
          ];
        }
      }
    },
    96832: (e, t, i) => {
      i.r(t),
        i.d(t, {
          isGannComplexLineTool: () => R,
          GannComplexAndFixedDefinitionsViewModel: () => E,
        });
      var r = i(16282),
        o = i(79881),
        n = i(90963),
        l = i(92785),
        s = i(68680),
        a = i(3619),
        c = i(76112),
        p = i(32856),
        d = i.n(p),
        h = i(78672),
        g = i(5225),
        y = i(3925);
      const u = new n.TranslatedString(
          'change {title} level {index} line visibility',
          (0, o.t)('change {title} level {index} line visibility')
        ),
        f = new n.TranslatedString(
          'change {title} level {index} line color',
          (0, o.t)('change {title} level {index} line color')
        ),
        v = new n.TranslatedString(
          'change {title} level {index} line width',
          (0, o.t)('change {title} level {index} line width')
        ),
        b = new n.TranslatedString(
          'change {title} all lines color',
          (0, o.t)('change {title} all lines color')
        ),
        _ = new n.TranslatedString(
          'change {title} background visibility',
          (0, o.t)('change {title} background visibility')
        ),
        D = new n.TranslatedString(
          'change {title} background transparency',
          (0, o.t)('change {title} background transparency')
        ),
        T = new n.TranslatedString(
          'change {title} reverse',
          (0, o.t)('change {title} reverse')
        ),
        w = new n.TranslatedString(
          'change {title} fan {index} line visibility',
          (0, o.t)('change {title} fan {index} line visibility')
        ),
        P = new n.TranslatedString(
          'change {title} fan {index} line color',
          (0, o.t)('change {title} fan {index} line color')
        ),
        S = new n.TranslatedString(
          'change {title} fan {index} line width',
          (0, o.t)('change {title} fan {index} line width')
        ),
        m = new n.TranslatedString(
          'change {title} arcs {index} line visibility',
          (0, o.t)('change {title} arcs {index} line visibility')
        ),
        x = new n.TranslatedString(
          'change {title} arcs {index} line color',
          (0, o.t)('change {title} arcs {index} line color')
        ),
        C = new n.TranslatedString(
          'change {title} arcs {index} line width',
          (0, o.t)('change {title} arcs {index} line width')
        ),
        k = new n.TranslatedString(
          'change top margin',
          (0, o.t)('change top margin')
        ),
        L = (0, o.t)('Reverse'),
        A = (0, o.t)('Use one color'),
        M = (0, o.t)('Background'),
        V = (0, o.t)('Price/bar ratio'),
        B = (0, o.t)('Ranges and ratio'),
        N = (0, o.t)('Levels'),
        W = (0, o.t)('Fans'),
        z = (0, o.t)('Arcs');
      function R(e) {
        return e instanceof c.LineToolGannComplex;
      }
      class E extends a.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, g.removeSpaces)(i),
            a = new n.TranslatedString(i, this._source.title()),
            c = [],
            p = t.levels.childCount();
          for (let e = 0; e < p; e++) {
            const i = t.levels.childs()[e].childs(),
              r = (0, s.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.visible,
                    u.format({ title: a, index: e })
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    i.color,
                    null,
                    f.format({ title: a, index: e })
                  ),
                  width: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.width,
                    v.format({ title: a, index: e })
                  ),
                },
                { id: `${o}LineLevel${e}`, title: '' + e }
              );
            c.push(r);
          }
          const E = (0, s.createPropertyDefinitionsLeveledLinesGroup)(
            c,
            o + 'LeveledLinesGroup'
          );
          e.push(
            (0, s.createPropertyDefinitionsGeneralGroup)(
              [E],
              o + 'LevelGroup',
              N
            )
          );
          const G = [],
            $ = t.fanlines.childCount();
          for (let e = 0; e < $; e++) {
            const i = t.fanlines.childs()[e].childs(),
              r = (0, s.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.visible,
                    w.format({ title: a, index: e })
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    i.color,
                    null,
                    P.format({ title: a, index: e })
                  ),
                  width: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.width,
                    S.format({ title: a, index: e })
                  ),
                },
                {
                  id: `${o}FanLineLevel${e}`,
                  title: `${i.x.value()}x${i.y.value()}`,
                }
              );
            G.push(r);
          }
          const O = (0, s.createPropertyDefinitionsLeveledLinesGroup)(
            G,
            o + 'FanLeveledLinesGroup'
          );
          e.push(
            (0, s.createPropertyDefinitionsGeneralGroup)(
              [O],
              o + 'FanLinesGroup',
              W
            )
          );
          const F = [],
            I = t.arcs.childCount();
          for (let e = 0; e < I; e++) {
            const i = t.arcs.childs()[e].childs(),
              r = (0, s.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.visible,
                    m.format({ title: a, index: e })
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    i.color,
                    null,
                    x.format({ title: a, index: e })
                  ),
                  width: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.width,
                    C.format({ title: a, index: e })
                  ),
                },
                {
                  id: `${o}ArcsLineLevel${e}`,
                  title: `${i.x.value()}x${i.y.value()}`,
                }
              );
            F.push(r);
          }
          const U = (0, s.createPropertyDefinitionsLeveledLinesGroup)(
            F,
            o + 'ArcsLeveledLinesGroup'
          );
          e.push(
            (0, s.createPropertyDefinitionsGeneralGroup)(
              [U],
              o + 'ArcsLinesGroup',
              z
            )
          );
          const H = (0, s.createColorPropertyDefinition)(
            {
              color: (0, s.getColorDefinitionProperty)(
                this._propertyApplier,
                new y.CollectibleColorPropertyUndoWrapper(
                  (0, r.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  b.format({ title: a })
                ),
                null,
                null
              ),
            },
            { id: o + 'AllLineColor', title: A }
          );
          e.push(H);
          const Y = t.arcsBackground.childs(),
            j = (0, s.createTransparencyPropertyDefinition)(
              {
                checked: (0, s.convertToDefinitionProperty)(
                  this._propertyApplier,
                  Y.fillBackground,
                  _.format({ title: a })
                ),
                transparency: (0, s.convertToDefinitionProperty)(
                  this._propertyApplier,
                  Y.transparency,
                  D.format({ title: a })
                ),
              },
              { id: o + 'Background', title: M }
            );
          e.push(j);
          const X = (0, s.createCheckablePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                t.reverse,
                T.format({ title: a })
              ),
            },
            { id: o + 'Reverse', title: L }
          );
          if ((e.push(X), R(this._source))) {
            const t = this._source,
              i = t.properties().childs(),
              r = (0, s.createNumberPropertyDefinition)(
                {
                  value: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.scaleRatio,
                    k,
                    [
                      (0, h.limitedPrecision)(7),
                      (e) =>
                        null !== e
                          ? parseFloat(
                              t.getScaleRatioFormatter().format('' + e)
                            )
                          : null,
                    ]
                  ),
                },
                {
                  id: 'scaleRatio',
                  title: V,
                  min: new (d())(1e-7),
                  max: new (d())(1e8),
                  step: new (d())(t.getScaleRatioStep()),
                }
              );
            e.push(r);
            const o = i.labelsStyle.childs(),
              n = (0, l.createTextStyleDefinition)(
                this._propertyApplier,
                {
                  showText: i.showLabels,
                  fontSize: o.fontSize,
                  bold: o.bold,
                  italic: o.italic,
                },
                a,
                { customTitles: { text: B } }
              );
            e.push(n);
          }
          return e;
        }
      }
    },
    96634: (e, t, i) => {
      i.r(t), i.d(t, { GannFanDefinitionsViewModel: () => T });
      var r = i(16282),
        o = i(79881),
        n = i(90963),
        l = i(68680),
        s = i(3619),
        a = i(5225),
        c = i(3925);
      const p = new n.TranslatedString(
          'change {title} level {index} line visibility',
          (0, o.t)('change {title} level {index} line visibility')
        ),
        d = new n.TranslatedString(
          'change {title} level {index} line color',
          (0, o.t)('change {title} level {index} line color')
        ),
        h = new n.TranslatedString(
          'change {title} level {index} line width',
          (0, o.t)('change {title} level {index} line width')
        ),
        g = new n.TranslatedString(
          'change {title} level {index} line style',
          (0, o.t)('change {title} level {index} line style')
        ),
        y = new n.TranslatedString(
          'change {title} all lines color',
          (0, o.t)('change {title} all lines color')
        ),
        u = new n.TranslatedString(
          'change {title} background visibility',
          (0, o.t)('change {title} background visibility')
        ),
        f = new n.TranslatedString(
          'change {title} background transparency',
          (0, o.t)('change {title} background transparency')
        ),
        v = new n.TranslatedString(
          'change {title} labels visibility',
          (0, o.t)('change {title} labels visibility')
        ),
        b = (0, o.t)('Use one color'),
        _ = (0, o.t)('Background'),
        D = (0, o.t)('Labels');
      class T extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, a.removeSpaces)(i),
            s = new n.TranslatedString(i, this._source.title()),
            T = this._source.levelsCount();
          for (let i = 1; i <= T; i++) {
            const r = t['level' + i].childs(),
              n = (0, l.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.visible,
                    p.format({ title: s, index: i })
                  ),
                  color: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    r.color,
                    null,
                    d.format({ title: s, index: i })
                  ),
                  width: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.linewidth,
                    h.format({ title: s, index: i })
                  ),
                  style: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.linestyle,
                    g.format({ title: s, index: i })
                  ),
                },
                {
                  id: `${o}LineLevel${i}`,
                  title: `${r.coeff1.value()}/${r.coeff2.value()}`,
                }
              );
            e.push(n);
          }
          const w = (0, l.createColorPropertyDefinition)(
            {
              color: (0, l.getColorDefinitionProperty)(
                this._propertyApplier,
                new c.CollectibleColorPropertyUndoWrapper(
                  (0, r.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null
                ),
                null,
                y.format({ title: s })
              ),
            },
            { id: o + 'AllLineColor', title: b }
          );
          e.push(w);
          const P = (0, l.createTransparencyPropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fillBackground,
                u.format({ title: s })
              ),
              transparency: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.transparency,
                f.format({ title: s })
              ),
            },
            { id: o + 'Background', title: _ }
          );
          e.push(P);
          const S = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.showLabels,
                v.format({ title: s })
              ),
            },
            { id: o + 'Labels', title: D }
          );
          return e.push(S), e;
        }
      }
    },
    12101: (e, t, i) => {
      i.r(t), i.d(t, { GannSquareDefinitionsViewModel: () => B });
      var r = i(16282),
        o = i(79881),
        n = i(90963),
        l = i(68680),
        s = i(3619),
        a = i(5225),
        c = i(3925);
      const p = new n.TranslatedString(
          'change {title} level {index} line visibility',
          (0, o.t)('change {title} level {index} line visibility')
        ),
        d = new n.TranslatedString(
          'change {title} level {index} line color',
          (0, o.t)('change {title} level {index} line color')
        ),
        h = new n.TranslatedString(
          'change {title} level {index} line coeff',
          (0, o.t)('change {title} level {index} line coeff')
        ),
        g = new n.TranslatedString(
          'change {title} all lines color',
          (0, o.t)('change {title} all lines color')
        ),
        y = new n.TranslatedString(
          'change {title} background visibility',
          (0, o.t)('change {title} background visibility')
        ),
        u = new n.TranslatedString(
          'change {title} background transparency',
          (0, o.t)('change {title} background transparency')
        ),
        f = new n.TranslatedString(
          'change {title} reverse',
          (0, o.t)('change {title} reverse')
        ),
        v = new n.TranslatedString(
          'change {title} left labels visibility',
          (0, o.t)('change {title} left labels visibility')
        ),
        b = new n.TranslatedString(
          'change {title} right labels visibility',
          (0, o.t)('change {title} right labels visibility')
        ),
        _ = new n.TranslatedString(
          'change {title} top labels visibility',
          (0, o.t)('change {title} top labels visibility')
        ),
        D = new n.TranslatedString(
          'change {title} bottom labels visibility',
          (0, o.t)('change {title} bottom labels visibility')
        ),
        T = new n.TranslatedString(
          'change {title} fans visibility',
          (0, o.t)('change {title} fans visibility')
        ),
        w = new n.TranslatedString(
          'change {title} fans line color',
          (0, o.t)('change {title} fans line color')
        ),
        P = (0, o.t)('Use one color'),
        S = (0, o.t)('Background'),
        m = (0, o.t)('Price levels'),
        x = (0, o.t)('Time levels'),
        C = (0, o.t)('Left labels'),
        k = (0, o.t)('Right labels'),
        L = (0, o.t)('Top labels'),
        A = (0, o.t)('Bottom labels'),
        M = (0, o.t)('Angles'),
        V = (0, o.t)('Reverse');
      class B extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            o = (0, a.removeSpaces)(i),
            s = new n.TranslatedString(i, this._source.title()),
            B = [],
            N = this._source.hLevelsCount();
          for (let e = 1; e <= N; e++) {
            const i = t['hlevel' + e].childs(),
              r = (0, l.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.visible,
                    p.format({ title: s, index: e })
                  ),
                  color: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    i.color,
                    null,
                    d.format({ title: s, index: e })
                  ),
                  level: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.coeff,
                    h.format({ title: s, index: e })
                  ),
                },
                { id: `${o}HLineLevel${e}` }
              );
            B.push(r);
          }
          const W = (0, l.createPropertyDefinitionsLeveledLinesGroup)(
              B,
              o + 'HLeveledLinesGroup'
            ),
            z = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.showLeftLabels,
                  v.format({ title: s })
                ),
              },
              { id: o + 'LeftLabels', title: C }
            ),
            R = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.showRightLabels,
                  b.format({ title: s })
                ),
              },
              { id: o + 'RightLabels', title: k }
            ),
            E = (0, l.createTransparencyPropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.fillHorzBackground,
                  y.format({ title: s })
                ),
                transparency: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.horzTransparency,
                  u.format({ title: s })
                ),
              },
              { id: o + 'BackgroundH', title: S }
            ),
            G = (0, l.createPropertyDefinitionsGeneralGroup)(
              [W, z, R, E],
              o + 'HLevelGroup',
              m
            );
          e.push(G);
          const $ = [],
            O = this._source.vLevelsCount();
          for (let e = 1; e <= O; e++) {
            const i = t['vlevel' + e].childs(),
              r = (0, l.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.visible,
                    p.format({ title: s, index: e })
                  ),
                  color: (0, l.getColorDefinitionProperty)(
                    this._propertyApplier,
                    i.color,
                    null,
                    d.format({ title: s, index: e })
                  ),
                  level: (0, l.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.coeff,
                    h.format({ title: s, index: e })
                  ),
                },
                { id: `${o}VLineLevel${e}` }
              );
            $.push(r);
          }
          const F = (0, l.createPropertyDefinitionsLeveledLinesGroup)(
              $,
              o + 'VLeveledLinesGroup'
            ),
            I = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.showTopLabels,
                  _.format({ title: s })
                ),
              },
              { id: o + 'TopLabels', title: L }
            ),
            U = (0, l.createCheckablePropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.showBottomLabels,
                  D.format({ title: s })
                ),
              },
              { id: o + 'BottomLabels', title: A }
            ),
            H = (0, l.createTransparencyPropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.fillVertBackground,
                  y.format({ title: s })
                ),
                transparency: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.vertTransparency,
                  u.format({ title: s })
                ),
              },
              { id: o + 'BackgroundV', title: S }
            ),
            Y = (0, l.createPropertyDefinitionsGeneralGroup)(
              [F, I, U, H],
              o + 'VLevelGroup',
              x
            );
          e.push(Y);
          const j = (0, l.createColorPropertyDefinition)(
            {
              color: (0, l.getColorDefinitionProperty)(
                this._propertyApplier,
                new c.CollectibleColorPropertyUndoWrapper(
                  (0, r.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null
                ),
                null,
                g.format({ title: s }),
                !0
              ),
            },
            { id: o + 'AllLineColor', title: P }
          );
          e.push(j);
          const X = t.fans.childs(),
            K = (0, l.createColorPropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  X.visible,
                  T.format({ title: s })
                ),
                color: (0, l.getColorDefinitionProperty)(
                  this._propertyApplier,
                  X.color,
                  null,
                  w.format({ title: s })
                ),
              },
              { id: o + 'FansLines', title: M }
            );
          e.push(K);
          const q = (0, l.createCheckablePropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(
                this._propertyApplier,
                t.reverse,
                f.format({ title: s })
              ),
            },
            { id: o + 'Reverse', title: V }
          );
          return e.push(q), e;
        }
      }
    },
    28415: (e, t, i) => {
      i.r(t), i.d(t, { GeneralBezierDefinitionsViewModel: () => h });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(3619),
        s = i(68680),
        a = i(5225);
      const c = new o.TranslatedString(
          'change {title} background visibility',
          (0, r.t)('change {title} background visibility')
        ),
        p = new o.TranslatedString(
          'change {title} background color',
          (0, r.t)('change {title} background color')
        ),
        d = (0, r.t)('Background');
      class h extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.title());
          return [
            (0, n.createLineStyleDefinition)(
              this._undoModel,
              {
                lineColor: e.linecolor,
                lineWidth: e.linewidth,
                lineStyle: e.linestyle,
                extendLeft: e.extendLeft,
                extendRight: e.extendRight,
                leftEnd: e.leftEnd,
                rightEnd: e.rightEnd,
              },
              i,
              'Line'
            ),
            (0, s.createColorPropertyDefinition)(
              {
                checked: (0, s.convertToDefinitionProperty)(
                  this._undoModel,
                  e.fillBackground,
                  c.format({ title: i })
                ),
                color: (0, s.getColorDefinitionProperty)(
                  this._undoModel,
                  e.backgroundColor,
                  e.transparency,
                  p.format({ title: i })
                ),
              },
              { id: (0, a.removeSpaces)(t + 'BackgroundColor'), title: d }
            ),
          ];
        }
      }
    },
    44558: (e, t, i) => {
      i.r(t), i.d(t, { GeneralDatePriceRangeDefinitionsViewModel: () => S });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(92785),
        s = i(3619),
        a = i(68680),
        c = i(5225);
      const p = new o.TranslatedString(
          'change {title} background visibility',
          (0, r.t)('change {title} background visibility')
        ),
        d = new o.TranslatedString(
          'change {title} background color',
          (0, r.t)('change {title} background color')
        ),
        h = new o.TranslatedString(
          'change {title} extend top',
          (0, r.t)('change {title} extend top')
        ),
        g = new o.TranslatedString(
          'change {title} extend bottom',
          (0, r.t)('change {title} extend bottom')
        ),
        y = new o.TranslatedString(
          'change {title} extend left',
          (0, r.t)('change {title} extend left')
        ),
        u =
          (new o.TranslatedString(
            'change {title} stats visibility',
            (0, r.t)('change {title} stats visibility')
          ),
          (0, r.t)('Line')),
        f = (0, r.t)('Border'),
        v = (0, r.t)('Background'),
        b = (0, r.t)('Extend top'),
        _ = (0, r.t)('Extend bottom'),
        D = (0, r.t)('Extend left'),
        T = (0, r.t)('Extend right'),
        w = (0, r.t)('Label'),
        P = (0, r.t)('Label background');
      (0, r.t)('Show stats');
      class S extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            r = (0, c.removeSpaces)(i),
            s = new o.TranslatedString(i, this._source.title()),
            S = (0, n.createLineStyleDefinition)(
              this._propertyApplier,
              { lineColor: t.linecolor, lineWidth: t.linewidth },
              s,
              'Line',
              { line: u }
            );
          if ((e.push(S), t.hasOwnProperty('borderWidth'))) {
            const i = (0, n.createLineStyleDefinition)(
              this._propertyApplier,
              {
                showLine: t.drawBorder,
                lineColor: t.borderColor,
                lineWidth: t.borderWidth,
              },
              s,
              'Border',
              { line: f }
            );
            e.push(i);
          }
          const m = (0, a.createColorPropertyDefinition)(
            {
              checked: (0, a.convertToDefinitionProperty)(
                this._propertyApplier,
                t.fillBackground,
                p.format({ title: s })
              ),
              color: (0, a.getColorDefinitionProperty)(
                this._propertyApplier,
                t.backgroundColor,
                t.backgroundTransparency,
                d.format({ title: s })
              ),
            },
            { id: r + 'BackgroundColor', title: v }
          );
          if (
            (e.push(m),
            (function (e) {
              return e.hasOwnProperty('extendTop');
            })(t))
          ) {
            const i = (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    t.extendTop,
                    h.format({ title: s })
                  ),
                },
                { id: r + 'ExtendTop', title: b }
              ),
              o = (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    t.extendBottom,
                    g.format({ title: s })
                  ),
                },
                { id: r + 'ExtendBottom', title: _ }
              );
            e.push(i, o);
          }
          if (
            (function (e) {
              return e.hasOwnProperty('extendLeft');
            })(t)
          ) {
            const i = (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    t.extendLeft,
                    y.format({ title: s })
                  ),
                },
                { id: r + 'extendLeft', title: D }
              ),
              o = (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    t.extendRight,
                    g.format({ title: s })
                  ),
                },
                { id: r + 'ExtendBottom', title: T }
              );
            e.push(i, o);
          }
          {
            const i = (0, l.createTextStyleDefinition)(
              this._propertyApplier,
              {
                textColor: t.textcolor,
                backgroundColor: t.labelBackgroundColor,
                backgroundTransparency: t.backgroundTransparency,
                fontSize: t.fontsize,
                backgroundVisible: t.fillLabelBackground,
              },
              s,
              {
                isEditable: !0,
                isMultiLine: !0,
                customTitles: { text: w, backgroundTitle: P },
              }
            );
            e.push(i);
          }
          return e;
        }
      }
    },
    32454: (e, t, i) => {
      i.r(t),
        i.d(t, {
          GeneralFiguresDefinitionsViewModelBase: () => g,
          GeneralFiguresDefinitionsViewModel: () => y,
        });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(3619),
        s = i(68680),
        a = i(5225);
      const c = new o.TranslatedString(
          'change {title} background visibility',
          (0, r.t)('change {title} background visibility')
        ),
        p = new o.TranslatedString(
          'change {title} background color',
          (0, r.t)('change {title} background color')
        ),
        d = (0, r.t)('Border'),
        h = (0, r.t)('Background');
      class g extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.title()),
            r = (0, n.createLineStyleDefinition)(
              this._propertyApplier,
              { lineColor: e.color, lineWidth: e.linewidth },
              i,
              'Line',
              { line: d }
            ),
            l = 'transparency' in e ? e.transparency : null;
          return [
            r,
            (0, s.createColorPropertyDefinition)(
              {
                checked: (0, s.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.fillBackground,
                  c.format({ title: i })
                ),
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.backgroundColor,
                  l,
                  p.format({ title: i })
                ),
              },
              { id: (0, a.removeSpaces)(t + 'BackgroundColor'), title: h }
            ),
          ];
        }
      }
      class y extends g {}
    },
    44150: (e, t, i) => {
      i.r(t), i.d(t, { GeneralTrendFiguresDefinitionsViewModel: () => y });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(92785),
        s = i(3619),
        a = i(68680),
        c = i(5225);
      const p = new o.TranslatedString(
          'change {title} background visibility',
          (0, r.t)('change {title} background visibility')
        ),
        d = new o.TranslatedString(
          'change {title} background color',
          (0, r.t)('change {title} background color')
        ),
        h = (0, r.t)('Prices'),
        g = (0, r.t)('Background');
      class y extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.title());
          return [
            (0, n.createLineStyleDefinition)(
              this._propertyApplier,
              {
                ...e,
                lineColor: e.linecolor,
                lineWidth: e.linewidth,
                lineStyle: e.linestyle,
              },
              i,
              'Line'
            ),
            (0, l.createTextStyleDefinition)(
              this._propertyApplier,
              {
                showText: e.showPrices,
                textColor: e.textcolor,
                fontSize: e.fontsize,
                bold: e.bold,
                italic: e.italic,
              },
              i,
              { customTitles: { text: h } }
            ),
            (0, a.createColorPropertyDefinition)(
              {
                checked: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.fillBackground,
                  p.format({ title: i })
                ),
                color: (0, a.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.backgroundColor,
                  e.transparency,
                  d.format({ title: i })
                ),
              },
              { id: (0, c.removeSpaces)(t + 'Background'), title: g }
            ),
          ];
        }
      }
    },
    24708: (e, t, i) => {
      i.r(t), i.d(t, { GhostFeedDefinitionsViewModel: () => x });
      var r = i(79881),
        o = i(90963),
        n = i(3619),
        l = i(68680),
        s = i(32856),
        a = i.n(s),
        c = i(5225);
      const p = new o.TranslatedString(
          'change {title} candle up color',
          (0, r.t)('change {title} candle up color')
        ),
        d = new o.TranslatedString(
          'change {title} candle down color',
          (0, r.t)('change {title} candle down color')
        ),
        h = new o.TranslatedString(
          'change {title} candle border visibility',
          (0, r.t)('change {title} candle border visibility')
        ),
        g = new o.TranslatedString(
          'change {title} candle border up color',
          (0, r.t)('change {title} candle border up color')
        ),
        y = new o.TranslatedString(
          'change {title} candle border down color',
          (0, r.t)('change {title} candle border down color')
        ),
        u = new o.TranslatedString(
          'change {title} candle wick visibility',
          (0, r.t)('change {title} candle wick visibility')
        ),
        f = new o.TranslatedString(
          'change {title} candle wick color',
          (0, r.t)('change {title} candle wick color')
        ),
        v = new o.TranslatedString(
          'change {title} transparency',
          (0, r.t)('change {title} transparency')
        ),
        b = new o.TranslatedString(
          'change {title} average HL value',
          (0, r.t)('change {title} average HL value')
        ),
        _ = new o.TranslatedString(
          'change {title} variance value',
          (0, r.t)('change {title} variance value')
        ),
        D = (0, r.t)('Candles'),
        T = (0, r.t)('Borders'),
        w = (0, r.t)('Wick'),
        P = (0, r.t)('Transparency'),
        S = (0, r.t)('Avg HL in minticks'),
        m = (0, r.t)('Variance');
      class x extends n.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = (0, c.removeSpaces)(t),
            r = new o.TranslatedString(t, this._source.title()),
            n = e.candleStyle.childs();
          return [
            (0, l.createTwoColorsPropertyDefinition)(
              {
                color1: (0, l.getColorDefinitionProperty)(
                  this._propertyApplier,
                  n.upColor,
                  null,
                  p.format({ title: r })
                ),
                color2: (0, l.getColorDefinitionProperty)(
                  this._propertyApplier,
                  n.downColor,
                  null,
                  d.format({ title: r })
                ),
              },
              { id: i + 'Candle2Colors', title: D }
            ),
            (0, l.createTwoColorsPropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  n.drawBorder,
                  h.format({ title: r })
                ),
                color1: (0, l.getColorDefinitionProperty)(
                  this._propertyApplier,
                  n.borderUpColor,
                  null,
                  g.format({ title: r })
                ),
                color2: (0, l.getColorDefinitionProperty)(
                  this._propertyApplier,
                  n.borderDownColor,
                  null,
                  y.format({ title: r })
                ),
              },
              { id: i + 'CandleBorder2Colors', title: T }
            ),
            (0, l.createColorPropertyDefinition)(
              {
                checked: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  n.drawWick,
                  u.format({ title: r })
                ),
                color: (0, l.getColorDefinitionProperty)(
                  this._propertyApplier,
                  n.wickColor,
                  null,
                  f.format({ title: r })
                ),
              },
              { id: i + 'CandleWickColor', title: w }
            ),
            (0, l.createTransparencyPropertyDefinition)(
              {
                transparency: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.transparency,
                  v.format({ title: r })
                ),
              },
              { id: i + 'Transparency', title: P }
            ),
          ];
        }
        _inputsPropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = (0, c.removeSpaces)(t),
            r = new o.TranslatedString(t, this._source.title());
          return [
            (0, l.createNumberPropertyDefinition)(
              {
                value: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.averageHL,
                  b.format({ title: r })
                ),
              },
              {
                id: i + 'AvgHL',
                title: S,
                type: 0,
                min: new (a())(1),
                max: new (a())(5e4),
                step: new (a())(1),
              }
            ),
            (0, l.createNumberPropertyDefinition)(
              {
                value: (0, l.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.variance,
                  _.format({ title: r })
                ),
              },
              {
                id: i + 'Variance',
                title: m,
                type: 0,
                min: new (a())(1),
                max: new (a())(100),
                step: new (a())(1),
              }
            ),
          ];
        }
      }
    },
    53856: (e, t, i) => {
      i.r(t), i.d(t, { HighlighterDefinitionsViewModel: () => l });
      var r = i(62684),
        o = i(3619),
        n = i(90963);
      class l extends o.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, r.createLineStyleDefinition)(
              this._propertyApplier,
              { lineColor: e.linecolor },
              new n.TranslatedString(this._source.name(), this._source.title()),
              'Line'
            ),
          ];
        }
      }
    },
    41847: (e, t, i) => {
      i.r(t), i.d(t, { HorizontalLineDefinitionsViewModel: () => g });
      var r = i(79881),
        o = i(90963),
        n = i(68680),
        l = i(34954),
        s = i(5225),
        a = i(3619),
        c = i(88101),
        p = i(92785);
      const d = (0, r.t)('Text'),
        h = (0, r.t)('#1 (price)', { context: 'linetool point' });
      class g extends a.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs();
          return (0, c.getLinesStylesPropertiesDefinitions)(
            this._propertyApplier,
            e,
            new o.TranslatedString(this._source.name(), this._source.title())
          );
        }
        _coordinatesPropertyDefinitions() {
          const e = this._source.pointsProperty().childs().points[0].childs(),
            t = this._getYCoordinateStepWV(),
            i = (0, l.getCoordinateYMetaInfo)(this._propertyApplier, e, t);
          return [
            (0, n.createCoordinatesPropertyDefinition)(
              { y: i.property },
              {
                id: (0, s.removeSpaces)(this._source.name() + 'Point'),
                title: h,
                ...i.info,
              }
            ),
          ];
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, p.createTextStyleDefinition)(
              this._propertyApplier,
              {
                ...e,
                showText: e.showLabel,
                textColor: e.textcolor,
                fontSize: e.fontsize,
                textOrientation: e.textOrientation,
              },
              new o.TranslatedString(this._source.name(), this._source.title()),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: d } }
            ),
          ];
        }
      }
    },
    78564: (e, t, i) => {
      i.r(t), i.d(t, { HorizontalRayDefinitionsViewModel: () => c });
      var r = i(79881),
        o = i(90963),
        n = i(3619),
        l = i(88101),
        s = i(92785);
      const a = (0, r.t)('Text');
      class c extends n.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs();
          return (0, l.getLinesStylesPropertiesDefinitions)(
            this._propertyApplier,
            e,
            new o.TranslatedString(this._source.name(), this._source.title())
          );
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, s.createTextStyleDefinition)(
              this._propertyApplier,
              {
                ...e,
                showText: e.showLabel,
                textColor: e.textcolor,
                fontSize: e.fontsize,
                textOrientation: e.textOrientation,
              },
              new o.TranslatedString(this._source.name(), this._source.title()),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: a } }
            ),
          ];
        }
      }
    },
    93619: (e, t, i) => {
      i.r(t), i.d(t, { IconsDefinitionsViewModel: () => p });
      var r = i(79881),
        o = i(90963),
        n = i(3619),
        l = i(68680),
        s = i(5225);
      const a = new o.TranslatedString(
          'change {title} color',
          (0, r.t)('change {title} color')
        ),
        c = (0, r.t)('Color');
      class p extends n.LineDataSourceDefinitionsViewModel {
        constructor(e, t) {
          super(e, t);
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.title());
          return [
            (0, l.createColorPropertyDefinition)(
              {
                color: (0, l.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.color,
                  null,
                  a.format({ title: i })
                ),
              },
              { id: (0, s.removeSpaces)(t + 'Color'), title: c }
            ),
          ];
        }
      }
    },
    3619: (e, t, i) => {
      i.d(t, { LineDataSourceDefinitionsViewModel: () => D });
      var r = i(16282),
        o = i(79881),
        n = i(90963),
        l = (i(95068), i(68680)),
        s = i(97806),
        a = i(32856),
        c = i.n(a),
        p = i(63725),
        d = i(34954),
        h = i(80538),
        g = i(85103);
      const y = (0, o.t)('Visibility'),
        u = (0, o.t)('Coordinates'),
        f = (0, o.t)('Style'),
        v = (0, o.t)('Text'),
        b = (0, o.t)('Inputs'),
        _ = (0, o.t)('#{count} (price, bar)', { context: 'linetool point' });
      class D {
        constructor(e, t) {
          (this._yCoordinateStepWV = null),
            (this._propertyPages = []),
            (this._lineToolsDoNotAffectChartInvalidation =
              new g.FeatureToggleWatchedValue(
                'do_not_invalidate_chart_on_changing_line_tools',
                !1
              )),
            (this._source = t),
            (this._undoModel = e),
            (this._ownerSource = (0, r.ensureNotNull)(
              this._source.ownerSource()
            )),
            (this._propertyApplier = new h.PropertyApplierWithoutSavingChart(
              () => e,
              this._lineToolsDoNotAffectChartInvalidation
            )),
            this._createPropertyRages();
        }
        destroy() {
          null !== this._yCoordinateStepWV &&
            (this._source.ownerSourceChanged().unsubscribeAll(this),
            this._ownerSource.priceStepChanged().unsubscribeAll(this)),
            this._propertyPages.forEach((e) => {
              (0, l.destroyDefinitions)(e.definitions.value());
            }),
            this._lineToolsDoNotAffectChartInvalidation.destroy();
        }
        propertyPages() {
          return Promise.resolve(this._propertyPages);
        }
        _createPropertyRages() {
          this._propertyPages = [];
          const e = this._createInputsPropertyPage();
          null !== e && this._propertyPages.push(e);
          const t = this._createStylePropertyPage();
          null !== t && this._propertyPages.push(t);
          const i = this._createTextPropertyPage();
          if (
            (null !== i && this._propertyPages.push(i),
            this._source.hasEditableCoordinates())
          ) {
            const e = this._createCoordinatesPropertyPage();
            null !== e && this._propertyPages.push(e);
          }
          const r = this._createVisibilitiesPropertyPage();
          this._propertyPages.push(r);
        }
        _createVisibilitiesPropertyPage() {
          const e = this._source
            .properties()
            .childs()
            .intervalsVisibilities.childs();
          return (0, s.createPropertyPage)(
            (0, p.getIntervalsVisibilitiesPropertiesDefinitions)(
              this._undoModel,
              e,
              new n.TranslatedString(
                this._source.name(),
                this._source.title(!0)
              )
            ),
            'visibility',
            y
          );
        }
        _createCoordinatesPropertyPage() {
          const e = this._coordinatesPropertyDefinitions();
          return null !== e
            ? (0, s.createPropertyPage)(e, 'coordinates', u)
            : null;
        }
        _getYCoordinateStepWV() {
          return (
            null === this._yCoordinateStepWV &&
              ((this._yCoordinateStepWV = new (c())(
                (function (e) {
                  if (null !== e) {
                    const t = e.priceStep();
                    if (null !== t) return t;
                  }
                  return 1;
                })(this._source.ownerSource())
              )),
              this._ownerSource
                .priceStepChanged()
                .subscribe(this, () => this._updateYCoordinateStep()),
              this._source.ownerSourceChanged().subscribe(this, () => {
                this._ownerSource.priceStepChanged().unsubscribeAll(this),
                  (this._ownerSource = (0, r.ensureNotNull)(
                    this._source.ownerSource()
                  )),
                  this._ownerSource
                    .priceStepChanged()
                    .subscribe(this, () => this._updateYCoordinateStep());
              })),
            this._yCoordinateStepWV
          );
        }
        _coordinatesPropertyDefinitions() {
          const e = this._source.points(),
            t = this._source.pointsProperty().childs().points,
            i = [],
            r = this._getYCoordinateStepWV();
          return (
            e.forEach((e, o) => {
              const n = t[o].childs();
              n &&
                i.push(
                  (0, d.getCoordinatesPropertiesDefinitions)(
                    this._propertyApplier,
                    n,
                    e,
                    r,
                    _.format({ count: (o + 1).toString() }),
                    this._source.name()
                  )
                );
            }),
            i
          );
        }
        _createStylePropertyPage() {
          const e = this._stylePropertyDefinitions();
          return null !== e ? (0, s.createPropertyPage)(e, 'style', f) : null;
        }
        _stylePropertyDefinitions() {
          return null;
        }
        _createTextPropertyPage() {
          const e = this._textPropertyDefinitions();
          return null !== e ? (0, s.createPropertyPage)(e, 'text', v) : null;
        }
        _textPropertyDefinitions() {
          return null;
        }
        _createInputsPropertyPage() {
          const e = this._inputsPropertyDefinitions();
          return null !== e ? (0, s.createPropertyPage)(e, 'inputs', b) : null;
        }
        _inputsPropertyDefinitions() {
          return null;
        }
        _updateYCoordinateStep() {
          const e = this._ownerSource.priceStep();
          this._getYCoordinateStepWV().setValue(e || 1);
        }
      }
    },
    94222: (e, t, i) => {
      i.r(t), i.d(t, { NoteDefinitionsViewModel: () => d });
      var r = i(79881),
        o = i(90963),
        n = i(92785),
        l = i(3619),
        s = i(68680),
        a = i(5225);
      const c = new o.TranslatedString(
          'change {title} background color',
          (0, r.t)('change {title} background color')
        ),
        p = (0, r.t)('Label');
      class d extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.title());
          return [
            (0, s.createColorPropertyDefinition)(
              {
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.markerColor,
                  null,
                  c.format({ title: i })
                ),
              },
              { id: (0, a.removeSpaces)(t + 'LabelColor'), title: p }
            ),
          ];
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, n.createTextStyleDefinition)(
              this._propertyApplier,
              {
                textColor: e.textColor,
                fontSize: e.fontSize,
                bold: e.bold,
                italic: e.italic,
                text: e.text,
                backgroundColor: e.backgroundColor,
                backgroundTransparency: e.backgroundTransparency,
                borderColor: e.borderColor,
              },
              new o.TranslatedString(this._source.name(), this._source.title()),
              { isEditable: !0, isMultiLine: !0 }
            ),
          ];
        }
      }
    },
    79641: (e, t, i) => {
      i.r(t), i.d(t, { ParallelChannelDefinitionsViewModel: () => b });
      var r = i(79881),
        o = i(90963),
        n = i(68680),
        l = i(3619),
        s = i(62684),
        a = i(5225);
      const c = new o.TranslatedString(
          'change {title} extending left',
          (0, r.t)('change {title} extending left')
        ),
        p = new o.TranslatedString(
          'change {title} extending right',
          (0, r.t)('change {title} extending right')
        ),
        d = new o.TranslatedString(
          'change {title} background visibility',
          (0, r.t)('change {title} background visibility')
        ),
        h = new o.TranslatedString(
          'change {title} background color',
          (0, r.t)('change {title} background color')
        ),
        g = (0, r.t)('Background'),
        y = (0, r.t)('Extend left line'),
        u = (0, r.t)('Extend right line'),
        f = (0, r.t)('Channel'),
        v = (0, r.t)('Middle');
      class b extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = (0, a.removeSpaces)(t),
            r = new o.TranslatedString(t, this._source.title());
          return [
            (0, s.createLineStyleDefinition)(
              this._propertyApplier,
              {
                lineColor: e.linecolor,
                lineStyle: e.linestyle,
                lineWidth: e.linewidth,
              },
              r,
              'ChannelLine',
              { line: f }
            ),
            (0, s.createLineStyleDefinition)(
              this._propertyApplier,
              {
                showLine: e.showMidline,
                lineColor: e.midlinecolor,
                lineStyle: e.midlinestyle,
                lineWidth: e.midlinewidth,
              },
              r,
              'MiddleLine',
              { line: v }
            ),
            (0, n.createCheckablePropertyDefinition)(
              {
                checked: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.extendLeft,
                  c.format({ title: r })
                ),
              },
              { id: i + 'ExtendLeft', title: y }
            ),
            (0, n.createCheckablePropertyDefinition)(
              {
                checked: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.extendRight,
                  p.format({ title: r })
                ),
              },
              { id: i + 'ExtendRight', title: u }
            ),
            (0, n.createColorPropertyDefinition)(
              {
                checked: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.fillBackground,
                  d.format({ title: r })
                ),
                color: (0, n.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.backgroundColor,
                  e.transparency,
                  h.format({ title: r })
                ),
              },
              { id: i + 'Background', title: g }
            ),
          ];
        }
      }
    },
    49431: (e, t, i) => {
      i.r(t), i.d(t, { PathDefinitionsViewModel: () => a });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(3619);
      const s = (0, r.t)('Line');
      class a extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, n.createLineStyleDefinition)(
              this._propertyApplier,
              {
                lineColor: e.lineColor,
                lineWidth: e.lineWidth,
                lineStyle: e.lineStyle,
                leftEnd: e.leftEnd,
                rightEnd: e.rightEnd,
              },
              new o.TranslatedString(this._source.name(), this._source.title()),
              'Line',
              { line: s }
            ),
          ];
        }
      }
    },
    84377: (e, t, i) => {
      i.r(t), i.d(t, { PatternWithBackgroundDefinitionViewModel: () => u });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(92785),
        s = i(3619),
        a = i(68680),
        c = i(5225);
      const p = new o.TranslatedString(
          'change {title} background visibility',
          (0, r.t)('change {title} background visibility')
        ),
        d = new o.TranslatedString(
          'change {title} background color',
          (0, r.t)('change {title} background color')
        ),
        h = (0, r.t)('Label'),
        g = (0, r.t)('Border'),
        y = (0, r.t)('Background');
      class u extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.title());
          return [
            (0, l.createTextStyleDefinition)(
              this._propertyApplier,
              {
                textColor: e.textcolor,
                fontSize: e.fontsize,
                bold: e.bold,
                italic: e.italic,
              },
              i,
              { isEditable: !0, isMultiLine: !0, customTitles: { text: h } }
            ),
            (0, n.createLineStyleDefinition)(
              this._propertyApplier,
              { lineColor: e.color, lineWidth: e.linewidth },
              i,
              'Line',
              { line: g }
            ),
            (0, a.createColorPropertyDefinition)(
              {
                checked: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.fillBackground,
                  p.format({ title: i })
                ),
                color: (0, a.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.backgroundColor,
                  e.transparency,
                  d.format({ title: i })
                ),
              },
              { id: (0, c.removeSpaces)(t + 'BackgroundColor'), title: y }
            ),
          ];
        }
      }
    },
    39942: (e, t, i) => {
      i.r(t), i.d(t, { PatternWithoutBackgroundDefinitionsViewModel: () => p });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(92785),
        s = i(3619);
      const a = (0, r.t)('Label'),
        c = (0, r.t)('Border');
      class p extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = new o.TranslatedString(
              this._source.name(),
              this._source.title()
            );
          return [
            (0, l.createTextStyleDefinition)(
              this._propertyApplier,
              {
                textColor: e.textcolor,
                fontSize: e.fontsize,
                bold: e.bold,
                italic: e.italic,
              },
              t,
              { isEditable: !0, isMultiLine: !0, customTitles: { text: a } }
            ),
            (0, n.createLineStyleDefinition)(
              this._propertyApplier,
              { lineColor: e.color, lineWidth: e.linewidth },
              t,
              'Line',
              { line: c }
            ),
          ];
        }
      }
    },
    19530: (e, t, i) => {
      i.r(t), i.d(t, { PitchBaseDefinitionsViewModel: () => S });
      var r = i(16282),
        o = i(79881),
        n = i(90963),
        l = i(62684),
        s = i(3619),
        a = i(68680),
        c = i(5225),
        p = i(3925);
      const d = new n.TranslatedString(
          'change {title} extend lines',
          (0, o.t)('change {title} extend lines')
        ),
        h = new n.TranslatedString(
          'change {title} level {index} line visibility',
          (0, o.t)('change {title} level {index} line visibility')
        ),
        g = new n.TranslatedString(
          'change {title} level {index} line color',
          (0, o.t)('change {title} level {index} line color')
        ),
        y = new n.TranslatedString(
          'change {title} level {index} line width',
          (0, o.t)('change {title} level {index} line width')
        ),
        u = new n.TranslatedString(
          'change {title} level {index} line style',
          (0, o.t)('change {title} level {index} line style')
        ),
        f = new n.TranslatedString(
          'change {title} level {index} line coeff',
          (0, o.t)('change {title} level {index} line coeff')
        ),
        v = new n.TranslatedString(
          'change {title} all lines color',
          (0, o.t)('change {title} all lines color')
        ),
        b = new n.TranslatedString(
          'change {title} background visibility',
          (0, o.t)('change {title} background visibility')
        ),
        _ = new n.TranslatedString(
          'change {title} background transparency',
          (0, o.t)('change {title} background transparency')
        ),
        D = (0, o.t)('Median'),
        T = (0, o.t)('Use one color'),
        w = (0, o.t)('Background'),
        P = (0, o.t)('Extend lines');
      class S extends s.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties(),
            i = t.childs(),
            o = this._source.name(),
            s = (0, c.removeSpaces)(o),
            S = new n.TranslatedString(o, this._source.title());
          t.hasChild('extendLines') &&
            e.push(
              (0, a.createCheckablePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    i.extendLines,
                    d.format({ title: S })
                  ),
                },
                { id: s + 'ExtendLines', title: P }
              )
            );
          const m = i.median.childs(),
            x = (0, l.createLineStyleDefinition)(
              this._propertyApplier,
              {
                lineColor: m.color,
                lineStyle: m.linestyle,
                lineWidth: m.linewidth,
              },
              S,
              'Median',
              { line: D }
            );
          e.push(x);
          const C = this._source.levelsCount();
          for (let t = 0; t <= C; t++) {
            const r = i['level' + t].childs(),
              o = (0, a.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.visible,
                    h.format({ title: S, index: t + 1 })
                  ),
                  color: (0, a.getColorDefinitionProperty)(
                    this._propertyApplier,
                    r.color,
                    null,
                    g.format({ title: S, index: t + 1 })
                  ),
                  width: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.linewidth,
                    y.format({ title: S, index: t + 1 })
                  ),
                  style: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.linestyle,
                    u.format({ title: S, index: t + 1 })
                  ),
                  level: (0, a.convertToDefinitionProperty)(
                    this._propertyApplier,
                    r.coeff,
                    f.format({ title: S, index: t + 1 })
                  ),
                },
                { id: `${s}LineLevel${t + 1}` }
              );
            e.push(o);
          }
          const k = (0, a.createColorPropertyDefinition)(
            {
              color: (0, a.getColorDefinitionProperty)(
                this._propertyApplier,
                new p.CollectibleColorPropertyUndoWrapper(
                  (0, r.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null
                ),
                null,
                v.format({ title: S }),
                !0
              ),
            },
            { id: s + 'AllLineColor', title: T }
          );
          e.push(k);
          const L = (0, a.createTransparencyPropertyDefinition)(
            {
              checked: (0, a.convertToDefinitionProperty)(
                this._propertyApplier,
                i.fillBackground,
                b.format({ title: S })
              ),
              transparency: (0, a.convertToDefinitionProperty)(
                this._propertyApplier,
                i.transparency,
                _.format({ title: S })
              ),
            },
            { id: s + 'Background', title: w }
          );
          return e.push(L), e;
        }
      }
    },
    18775: (e, t, i) => {
      i.r(t), i.d(t, { PitchForkDefinitionsViewModel: () => g });
      var r = i(79881),
        o = i(90963),
        n = i(68680),
        l = i(19530),
        s = i(13953),
        a = i(32856),
        c = i.n(a);
      const p = new o.TranslatedString(
          'change {title} style',
          (0, r.t)('change {title} style')
        ),
        d = (0, r.t)('Style'),
        h = [
          {
            value: s.LineToolPitchforkStyle.Original,
            title: (0, r.t)('Original'),
          },
          {
            value: s.LineToolPitchforkStyle.Schiff2,
            title: (0, r.t)('Schiff'),
          },
          {
            value: s.LineToolPitchforkStyle.Schiff,
            title: (0, r.t)('Modified Schiff'),
          },
          { value: s.LineToolPitchforkStyle.Inside, title: (0, r.t)('Inside') },
        ];
      class g extends l.PitchBaseDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = super._stylePropertyDefinitions(),
            t = this._source.properties().childs(),
            i = this._source.name(),
            r = new o.TranslatedString(i, this._source.title()),
            l = (0, n.createOptionsPropertyDefinition)(
              {
                option: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  t.style,
                  p.format({ title: r })
                ),
              },
              { id: i + 'PitchStyle', title: d, options: new (c())(h) }
            );
          return e.push(l), e;
        }
      }
    },
    50525: (e, t, i) => {
      i.r(t), i.d(t, { PolylinesDefinitionsViewModel: () => g });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(3619),
        s = i(68680),
        a = i(5225);
      const c = new o.TranslatedString(
          'change {title} background visibility',
          (0, r.t)('change {title} background visibility')
        ),
        p = new o.TranslatedString(
          'change {title} background color',
          (0, r.t)('change {title} background color')
        ),
        d = (0, r.t)('Border'),
        h = (0, r.t)('Background');
      class g extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.title());
          return [
            (0, n.createLineStyleDefinition)(
              this._propertyApplier,
              { lineColor: e.linecolor, lineWidth: e.linewidth },
              i,
              'Line',
              { line: d }
            ),
            (0, s.createColorPropertyDefinition)(
              {
                checked: (0, s.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.fillBackground,
                  c.format({ title: i })
                ),
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.backgroundColor,
                  e.transparency,
                  p.format({ title: i })
                ),
              },
              { id: (0, a.removeSpaces)(t + 'BackgroundColor'), title: h }
            ),
          ];
        }
      }
    },
    93786: (e, t, i) => {
      i.r(t), i.d(t, { PredictionDefinitionsViewModel: () => L });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(3619),
        s = i(68680),
        a = i(5225);
      const c = new o.TranslatedString(
          'change {title} source text color',
          (0, r.t)('change {title} source text color')
        ),
        p = new o.TranslatedString(
          'change {title} source background color',
          (0, r.t)('change {title} source background color')
        ),
        d = new o.TranslatedString(
          'change {title} source border color',
          (0, r.t)('change {title} source border color')
        ),
        h = new o.TranslatedString(
          'change {title} target text color',
          (0, r.t)('change {title} target text color')
        ),
        g = new o.TranslatedString(
          'change {title} target background color',
          (0, r.t)('change {title} target background color')
        ),
        y = new o.TranslatedString(
          'change {title} target border color',
          (0, r.t)('change {title} target border color')
        ),
        u = new o.TranslatedString(
          'change {title} success text color',
          (0, r.t)('change {title} success text color')
        ),
        f = new o.TranslatedString(
          'change {title} success background color',
          (0, r.t)('change {title} success background color')
        ),
        v = new o.TranslatedString(
          'change {title} failure text color',
          (0, r.t)('change {title} failure text color')
        ),
        b = new o.TranslatedString(
          'change {title} failure background color',
          (0, r.t)('change {title} failure background color')
        ),
        _ = (0, r.t)('Source text'),
        D = (0, r.t)('Source background'),
        T = (0, r.t)('Source border'),
        w = (0, r.t)('Target text'),
        P = (0, r.t)('Target background'),
        S = (0, r.t)('Target border'),
        m = (0, r.t)('Success text'),
        x = (0, r.t)('Success background'),
        C = (0, r.t)('Failure text'),
        k = (0, r.t)('Failure background');
      class L extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = (0, a.removeSpaces)(t),
            r = new o.TranslatedString(t, this._source.title());
          return [
            (0, n.createLineStyleDefinition)(
              this._propertyApplier,
              { lineColor: e.linecolor, lineWidth: e.linewidth },
              r,
              'Line'
            ),
            (0, s.createColorPropertyDefinition)(
              {
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.sourceTextColor,
                  null,
                  c.format({ title: r })
                ),
              },
              { id: i + 'SourceTextColor', title: _ }
            ),
            (0, s.createColorPropertyDefinition)(
              {
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.sourceBackColor,
                  e.transparency,
                  p.format({ title: r })
                ),
              },
              { id: i + 'SourceBackgroundColor', title: D }
            ),
            (0, s.createColorPropertyDefinition)(
              {
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.sourceStrokeColor,
                  null,
                  d.format({ title: r })
                ),
              },
              { id: i + 'SourceBorderColor', title: T }
            ),
            (0, s.createColorPropertyDefinition)(
              {
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.targetTextColor,
                  null,
                  h.format({ title: r })
                ),
              },
              { id: i + 'TargetTextColor', title: w }
            ),
            (0, s.createColorPropertyDefinition)(
              {
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.targetBackColor,
                  null,
                  g.format({ title: r })
                ),
              },
              { id: i + 'TargetBackgroundColor', title: P }
            ),
            (0, s.createColorPropertyDefinition)(
              {
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.targetStrokeColor,
                  null,
                  y.format({ title: r })
                ),
              },
              { id: i + 'TargetBorderColor', title: S }
            ),
            (0, s.createColorPropertyDefinition)(
              {
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.successTextColor,
                  null,
                  u.format({ title: r })
                ),
              },
              { id: i + 'SuccessTextColor', title: m }
            ),
            (0, s.createColorPropertyDefinition)(
              {
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.successBackground,
                  null,
                  f.format({ title: r })
                ),
              },
              { id: i + 'SuccessBackgroundColor', title: x }
            ),
            (0, s.createColorPropertyDefinition)(
              {
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.failureTextColor,
                  null,
                  v.format({ title: r })
                ),
              },
              { id: i + 'FailureTextColor', title: C }
            ),
            (0, s.createColorPropertyDefinition)(
              {
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.failureBackground,
                  null,
                  b.format({ title: r })
                ),
              },
              { id: i + 'FailureBackgroundColor', title: k }
            ),
          ];
        }
      }
    },
    45816: (e, t, i) => {
      i.r(t), i.d(t, { PriceLabelDefinitionsViewModel: () => a });
      var r = i(79881),
        o = i(90963),
        n = i(92785),
        l = i(3619);
      const s = (0, r.t)('Text');
      class a extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, n.createTextStyleDefinition)(
              this._propertyApplier,
              {
                textColor: e.color,
                fontSize: e.fontsize,
                backgroundColor: e.backgroundColor,
                backgroundTransparency: e.transparency,
                borderColor: e.borderColor,
              },
              new o.TranslatedString(this._source.name(), this._source.title()),
              { customTitles: { text: s } }
            ),
          ];
        }
      }
    },
    75256: (e, t, i) => {
      i.r(t), i.d(t, { PriceNoteDefinitionsViewModel: () => u });
      var r = i(79881),
        o = i(90963),
        n = i(92785),
        l = i(3619),
        s = i(68680),
        a = i(5225);
      const c = new o.TranslatedString(
          'change {title} line color',
          (0, r.t)('change {title} line color')
        ),
        p = (0, r.t)('Label text'),
        d = (0, r.t)('Text'),
        h = (0, r.t)('Line color'),
        g = (0, r.t)('Label border'),
        y = (0, r.t)('Label background');
      class u extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = (0, a.removeSpaces)(t),
            r = new o.TranslatedString(t, this._source.title()),
            l = (0, s.createColorPropertyDefinition)(
              {
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.lineColor,
                  null,
                  c.format({ title: r })
                ),
              },
              { id: i + 'LineColor', title: h }
            );
          return [
            (0, n.createTextStyleDefinition)(
              this._propertyApplier,
              {
                textColor: e.priceLabelTextColor,
                fontSize: e.priceLabelFontSize,
                bold: e.priceLabelBold,
                italic: e.priceLabelItalic,
                backgroundColor: e.priceLabelBackgroundColor,
                borderColor: e.priceLabelBorderColor,
              },
              r,
              {
                isEditable: !1,
                isMultiLine: !1,
                customTitles: { text: p, borderTitle: g, backgroundTitle: y },
              }
            ),
            l,
          ];
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, n.createTextStyleDefinition)(
              this._propertyApplier,
              {
                ...e,
                showText: e.showLabel,
                textColor: e.textColor,
                fontSize: e.fontSize,
              },
              new o.TranslatedString(this._source.name(), this._source.title()),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: d } }
            ),
          ];
        }
      }
    },
    92557: (e, t, i) => {
      i.r(t), i.d(t, { ProjectionDefinitionsViewModel: () => g });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(3619),
        s = i(68680),
        a = i(5225);
      const c = new o.TranslatedString(
          'change {title} background color 1',
          (0, r.t)('change {title} background color 1')
        ),
        p = new o.TranslatedString(
          'change {title} background color 2',
          (0, r.t)('change {title} background color 2')
        ),
        d = (0, r.t)('Border'),
        h = (0, r.t)('Background');
      class g extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.title());
          return [
            (0, s.createTwoColorsPropertyDefinition)(
              {
                color1: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.color1,
                  e.transparency,
                  c.format({ title: i })
                ),
                color2: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.color2,
                  e.transparency,
                  p.format({ title: i })
                ),
              },
              { id: (0, a.removeSpaces)(t + 'Background2Color'), title: h }
            ),
            (0, n.createLineStyleDefinition)(
              this._propertyApplier,
              { lineColor: e.trendline.childs().color, lineWidth: e.linewidth },
              i,
              'Line',
              { line: d }
            ),
          ];
        }
      }
    },
    29286: (e, t, i) => {
      i.r(t), i.d(t, { RectangleDefinitionsViewModel: () => y });
      var r = i(79881),
        o = i(90963),
        n = i(68680),
        l = i(32454),
        s = i(92785);
      const a = new o.TranslatedString(
          'change {title} extending left',
          (0, r.t)('change {title} extending left')
        ),
        c = new o.TranslatedString(
          'change {title} extending right',
          (0, r.t)('change {title} extending right')
        ),
        p = (0, r.t)('Text'),
        d = (0, r.t)('Extend left'),
        h = (0, r.t)('Extend right'),
        g = [
          { value: 'bottom', title: (0, r.t)('Top') },
          { value: 'middle', title: (0, r.t)('Inside') },
          { value: 'top', title: (0, r.t)('Bottom') },
        ];
      class y extends l.GeneralFiguresDefinitionsViewModelBase {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.title()),
            r = super._stylePropertyDefinitions(),
            l = (0, n.createCheckablePropertyDefinition)(
              {
                checked: (0, n.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.extendRight,
                  c.format({ title: i })
                ),
              },
              { id: t + 'ExtendRight', title: h }
            );
          r.push(l);
          const s = (0, n.createCheckablePropertyDefinition)(
            {
              checked: (0, n.convertToDefinitionProperty)(
                this._propertyApplier,
                e.extendLeft,
                a.format({ title: i })
              ),
            },
            { id: t + 'ExtendLeft', title: d }
          );
          return r.push(s), r;
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, s.createTextStyleDefinition)(
              this._propertyApplier,
              {
                textColor: e.textColor,
                text: e.text,
                bold: e.bold,
                italic: e.italic,
                fontSize: e.fontSize,
                horzLabelsAlign: e.horzLabelsAlign,
                vertLabelsAlign: e.vertLabelsAlign,
                showText: e.showLabel,
              },
              new o.TranslatedString(this._source.name(), this._source.title()),
              {
                isEditable: !0,
                isMultiLine: !0,
                alignmentVerticalItems: g,
                customTitles: { text: p },
              }
            ),
          ];
        }
      }
    },
    57591: (e, t, i) => {
      i.r(t), i.d(t, { RiskRewardDefinitionsViewModel: () => H });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(92785),
        s = i(3619),
        a = i(68680),
        c = i(53785),
        p = i(32856),
        d = i.n(p),
        h = i(5225);
      const g = new o.TranslatedString(
          'change {title} stop color',
          (0, r.t)('change {title} stop color')
        ),
        y = new o.TranslatedString(
          'change {title} target color',
          (0, r.t)('change {title} target color')
        ),
        u = new o.TranslatedString(
          'change {title} price labels visibility',
          (0, r.t)('change {title} price labels visibility')
        ),
        f = new o.TranslatedString(
          'change {title} compact stats mode',
          (0, r.t)('change {title} compact stats mode')
        ),
        v = new o.TranslatedString(
          'change {title} always show stats',
          (0, r.t)('change {title} always show stats')
        ),
        b = new o.TranslatedString(
          'change {title} account size',
          (0, r.t)('change {title} account size')
        ),
        _ = new o.TranslatedString(
          'change {title} lot size',
          (0, r.t)('change {title} lot size')
        ),
        D = new o.TranslatedString(
          'change {title} risk',
          (0, r.t)('change {title} risk')
        ),
        T = new o.TranslatedString(
          'change {title} risk display mode',
          (0, r.t)('change {title} risk display mode')
        ),
        w = new o.TranslatedString(
          'change {title} entry price',
          (0, r.t)('change {title} entry price')
        ),
        P = new o.TranslatedString(
          'change {title} profit level',
          (0, r.t)('change {title} profit level')
        ),
        S = new o.TranslatedString(
          'change {title} profit price',
          (0, r.t)('change {title} profit price')
        ),
        m = new o.TranslatedString(
          'change {title} stop level',
          (0, r.t)('change {title} stop level')
        ),
        x = new o.TranslatedString(
          'change {title} stop price',
          (0, r.t)('change {title} stop price')
        ),
        C = (0, r.t)('Lines'),
        k = (0, r.t)('Stop color'),
        L = (0, r.t)('Target color'),
        A = (0, r.t)('Text'),
        M = (0, r.t)('Compact stats mode'),
        V = (0, r.t)('Ticks'),
        B = (0, r.t)('Price'),
        N = (0, r.t)('Entry price'),
        W = (0, r.t)('Profit level'),
        z = (0, r.t)('Stop level'),
        R = (0, r.t)('Account size'),
        E = (0, r.t)('Lot size'),
        G = (0, r.t)('Risk'),
        $ = (0, r.t)('Always show stats'),
        O = (0, r.t)('Price labels'),
        F = (0, r.t)('%'),
        I = (0, r.t)('Cash');
      function U(e) {
        return [
          { value: c.RiskDisplayMode.Percentage, title: F },
          { value: c.RiskDisplayMode.Money, title: e || I },
        ];
      }
      class H extends s.LineDataSourceDefinitionsViewModel {
        constructor(e, t) {
          super(e, t);
          const i = this._source.properties().childs(),
            r = i.riskDisplayMode.value();
          (this._riskMaxWV = new (d())(this._getRiskMax(r))),
            (this._riskStepWV = new (d())(this._getRiskStep(r))),
            (this._riskPrecisionWV = new (d())(this._getRiskPrecision(r))),
            (this._riskUnitWV = new (d())(this._getRiskUnit())),
            (this._riskUnitOptionsWV = new (d())(this._getRiskUnitOptions())),
            (this._lotSizeStepWV = new (d())(this._getLotSizeStep())),
            this._createPropertyRages(),
            i.riskDisplayMode.subscribe(this, (e) =>
              this._onRiskDisplayChanged(e)
            ),
            i.accountSize.subscribe(this, () => this._onAccountSizeChanged()),
            i.lotSize.subscribe(this, () => this._onLotSizeChanged()),
            this._undoModel
              .model()
              .mainSeries()
              .dataEvents()
              .symbolResolved()
              .subscribe(this, this._onSymbolInfoChanged);
        }
        destroy() {
          super.destroy();
          const e = this._source.properties().childs();
          e.riskDisplayMode.unsubscribeAll(this),
            e.accountSize.unsubscribeAll(this),
            e.lotSize.unsubscribeAll(this),
            this._undoModel
              .model()
              .mainSeries()
              .dataEvents()
              .symbolResolved()
              .unsubscribeAll(this);
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = (0, h.removeSpaces)(t),
            r = new o.TranslatedString(t, this._source.title());
          return [
            (0, n.createLineStyleDefinition)(
              this._propertyApplier,
              {
                lineColor: e.linecolor,
                lineWidth: e.linewidth,
              },
              r,
              'Line',
              { line: C }
            ),
            (0, a.createColorPropertyDefinition)(
              {
                color: (0, a.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.stopBackground,
                  e.stopBackgroundTransparency,
                  g.format({ title: r })
                ),
              },
              { id: i + 'StopColor', title: k }
            ),
            (0, a.createColorPropertyDefinition)(
              {
                color: (0, a.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.profitBackground,
                  e.profitBackgroundTransparency,
                  y.format({ title: r })
                ),
              },
              { id: i + 'ProfitColor', title: L }
            ),
            (0, l.createTextStyleDefinition)(
              this._propertyApplier,
              { textColor: e.textcolor, fontSize: e.fontsize },
              r,
              { isEditable: !0, isMultiLine: !0, customTitles: { text: A } }
            ),
            (0, a.createCheckablePropertyDefinition)(
              {
                checked: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.showPriceLabels,
                  u.format({ title: r })
                ),
              },
              { id: i + 'ShowPriceLabels', title: O }
            ),
            (0, a.createCheckablePropertyDefinition)(
              {
                checked: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.compact,
                  f.format({ title: r })
                ),
              },
              { id: i + 'CompactMode', title: M }
            ),
            (0, a.createCheckablePropertyDefinition)(
              {
                checked: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.alwaysShowStats,
                  v.format({ title: r })
                ),
              },
              { id: i + 'AlwaysShowStats', title: $ }
            ),
          ];
        }
        _inputsPropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = (0, h.removeSpaces)(t),
            r = new o.TranslatedString(t, this._source.title()),
            n = this._getYCoordinateStepWV(),
            l = (0, a.createNumberPropertyDefinition)(
              {
                value: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.accountSize,
                  b.format({ title: r })
                ),
              },
              {
                id: i + 'AccountSize',
                title: R,
                type: 1,
                min: new (d())(1e-9),
                max: new (d())(1e9),
                step: new (d())(1),
                unit: this._riskUnitWV,
              }
            ),
            s = (0, a.createNumberPropertyDefinition)(
              {
                value: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.lotSize,
                  _.format({ title: r })
                ),
              },
              {
                id: i + 'LotSize',
                title: E,
                type: 1,
                min: new (d())(1e-9),
                max: new (d())(1e8),
                step: this._lotSizeStepWV,
              }
            ),
            c = (0, a.createNumberPropertyDefinition)(
              {
                value: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.risk,
                  D.format({ title: r }),
                  [(e) => parseFloat(e)]
                ),
                unitOptionsValue: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.riskDisplayMode,
                  T.format({ title: r })
                ),
              },
              {
                id: i + 'Risk',
                title: G,
                type: 1,
                min: new (d())(1e-9),
                max: this._riskMaxWV,
                precision: this._riskPrecisionWV,
                step: this._riskStepWV,
                unitOptions: this._riskUnitOptionsWV,
              }
            ),
            p = (0, a.createNumberPropertyDefinition)(
              {
                value: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.entryPrice,
                  w.format({ title: r })
                ),
              },
              { id: i + 'EntryPrice', title: N, type: 1, step: n }
            ),
            g = (0, a.createPropertyDefinitionsGeneralGroup)(
              [l, s, c, p],
              i + 'AccountRisk'
            ),
            y = (0, a.createNumberPropertyDefinition)(
              {
                value: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.profitLevel,
                  P.format({ title: r })
                ),
              },
              {
                id: i + 'ProfitLevelTicks',
                title: V,
                type: 0,
                min: new (d())(0),
                max: new (d())(1e9),
                step: new (d())(1),
              }
            ),
            u = (0, a.createNumberPropertyDefinition)(
              {
                value: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.targetPrice,
                  S.format({ title: r }),
                  [(e) => e, (e) => this._source.preparseProfitPrice(e)]
                ),
              },
              { id: i + 'ProfitLevelPrice', title: B, type: 1, step: n }
            ),
            f = (0, a.createPropertyDefinitionsGeneralGroup)(
              [y, u],
              i + 'ProfitLevel',
              W
            ),
            v = (0, a.createNumberPropertyDefinition)(
              {
                value: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.stopLevel,
                  m.format({ title: r })
                ),
              },
              {
                id: i + 'StopLevelTicks',
                title: V,
                type: 0,
                min: new (d())(0),
                max: new (d())(1e9),
                step: new (d())(1),
              }
            ),
            C = (0, a.createNumberPropertyDefinition)(
              {
                value: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.stopPrice,
                  x.format({ title: r }),
                  [(e) => e, (e) => this._source.preparseStopPrice(e)]
                ),
              },
              { id: i + 'StopLevelPrice', title: B, type: 1, step: n }
            );
          return [
            g,
            f,
            (0, a.createPropertyDefinitionsGeneralGroup)(
              [v, C],
              i + 'StopLevel',
              z
            ),
          ];
        }
        _onRiskDisplayChanged(e) {
          const t = e.value();
          this._riskMaxWV.setValue(this._getRiskMax(t)),
            this._riskStepWV.setValue(this._getRiskStep(t)),
            this._riskPrecisionWV.setValue(this._getRiskPrecision(t));
        }
        _onAccountSizeChanged() {
          this._riskMaxWV.setValue(
            this._getRiskMax(
              this._source.properties().childs().riskDisplayMode.value()
            )
          );
        }
        _onLotSizeChanged() {
          this._lotSizeStepWV.setValue(this._getLotSizeStep());
        }
        _onSymbolInfoChanged() {
          this._riskUnitWV.setValue(this._getRiskUnit()),
            this._riskUnitOptionsWV.setValue(this._getRiskUnitOptions());
        }
        _getRiskMax(e) {
          return e === c.RiskDisplayMode.Percentage
            ? 100
            : this._source.properties().childs().accountSize.value();
        }
        _getRiskStep(e) {
          return e === c.RiskDisplayMode.Percentage ? 0.01 : 1;
        }
        _getRiskPrecision(e) {
          if (e === c.RiskDisplayMode.Percentage) return 2;
        }
        _getLotSizeStep() {
          const e = this._source.properties().childs().lotSize.value();
          if (e % 1 == 0) return 1;
          const t = e.toString(),
            i = t.split('.');
          if (2 === i.length) return Number('1e-' + i[1].length);
          {
            const e = /\d+e-(\d+)/.exec(t);
            if (null !== e) return Number('1e-' + e[1]);
          }
          return this._lotSizeStepWV.value();
        }
        _getRiskUnit() {
          const e = this._undoModel.model().mainSeries().symbolInfo();
          return (null !== e && e.currency_code) || '';
        }
        _getRiskUnitOptions() {
          const e = this._undoModel.model().mainSeries().symbolInfo();
          return null !== e ? U(e.currency_code) : U();
        }
      }
    },
    69172: (e, t, i) => {
      i.r(t), i.d(t, { SignpostDefinitionsViewModel: () => b });
      var r = i(79881),
        o = i(90963),
        n = i(5225),
        l = i(32856),
        s = i.n(l),
        a = i(68680),
        c = i(92785),
        p = i(34954),
        d = i(3619);
      const h = new o.TranslatedString(
          'change vertical position Y coordinate',
          (0, r.t)('change vertical position Y coordinate')
        ),
        g = new o.TranslatedString(
          'change {title} emoji visibility',
          (0, r.t)('change {title} emoji visibility')
        ),
        y = new o.TranslatedString(
          'change {title} image background color',
          (0, r.t)('change {title} image background color')
        ),
        u = new o.TranslatedString(
          'change {title} emoji',
          (0, r.t)('change {title} emoji')
        ),
        f = (0, r.t)('#1 (vertical position %, bar)', {
          context: 'linetool point',
        }),
        v = (0, r.t)('Emoji pin');
      class b extends d.LineDataSourceDefinitionsViewModel {
        _textPropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, c.createTextStyleDefinition)(
              this._propertyApplier,
              {
                text: e.text,
                fontSize: e.fontSize,
                bold: e.bold,
                italic: e.italic,
              },
              new o.TranslatedString(this._source.name(), this._source.title()),
              { isEditable: !0, isMultiLine: !0 }
            ),
          ];
        }
        _coordinatesPropertyDefinitions() {
          const e = this._source.pointsProperty().childs().points[0].childs(),
            t = this._source.name(),
            i = (0, p.getCoordinateXMetaInfo)(this._propertyApplier, e),
            r = {
              property: (0, a.convertToDefinitionProperty)(
                this._propertyApplier,
                e.price,
                h
              ),
              info: {
                typeY: 1,
                stepY: new (s())(1),
                minY: new (s())(-100),
                maxY: new (s())(100),
              },
            };
          return [
            (0, a.createCoordinatesPropertyDefinition)(
              { x: i.property, y: r.property },
              {
                id: (0, n.removeSpaces)(`${t}Coordinates${f}`),
                title: f,
                ...i.info,
                ...r.info,
              }
            ),
          ];
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.title());
          return [
            (0, a.createEmojiPropertyDefinition)(
              {
                checked: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.showImage,
                  g.format({ title: i })
                ),
                backgroundColor: (0, a.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.plateColor,
                  null,
                  y.format({ title: i })
                ),
                emoji: (0, a.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.emoji,
                  u.format({ title: i })
                ),
              },
              { id: (0, n.removeSpaces)(`${t}Emoji${f}`), title: v }
            ),
          ];
        }
      }
    },
    74146: (e, t, i) => {
      i.r(t), i.d(t, { TextDefinitionsViewModel: () => l });
      var r = i(92785),
        o = i(3619),
        n = i(90963);
      class l extends o.LineDataSourceDefinitionsViewModel {
        _textPropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, r.createTextStyleDefinition)(
              this._propertyApplier,
              {
                textColor: e.color,
                fontSize: e.fontsize,
                bold: e.bold,
                italic: e.italic,
                text: e.text,
                backgroundVisible: e.fillBackground,
                backgroundColor: e.backgroundColor,
                backgroundTransparency: e.backgroundTransparency,
                borderVisible: e.drawBorder,
                borderColor: e.borderColor,
                wrap: e.wordWrap,
              },
              new n.TranslatedString(this._source.name(), this._source.title()),
              { isEditable: !0, isMultiLine: !0 }
            ),
          ];
        }
      }
    },
    48549: (e, t, i) => {
      i.r(t), i.d(t, { TimeCyclesPatternDefinitionsViewModel: () => g });
      var r = i(79881),
        o = i(90963),
        n = i(62684),
        l = i(3619),
        s = i(68680),
        a = i(5225);
      const c = new o.TranslatedString(
          'change {title} background visibility',
          (0, r.t)('change {title} background visibility')
        ),
        p = new o.TranslatedString(
          'change {title} background color',
          (0, r.t)('change {title} background color')
        ),
        d = (0, r.t)('Line'),
        h = (0, r.t)('Background');
      class g extends l.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = new o.TranslatedString(t, this._source.title());
          return [
            (0, n.createLineStyleDefinition)(
              this._propertyApplier,
              {
                lineColor: e.linecolor,
                lineWidth: e.linewidth,
                lineStyle: e.linestyle,
              },
              i,
              'Line',
              { line: d }
            ),
            (0, s.createColorPropertyDefinition)(
              {
                checked: (0, s.convertToDefinitionProperty)(
                  this._propertyApplier,
                  e.fillBackground,
                  c.format({ title: i })
                ),
                color: (0, s.getColorDefinitionProperty)(
                  this._propertyApplier,
                  e.backgroundColor,
                  e.transparency,
                  p.format({ title: i })
                ),
              },
              { id: (0, a.removeSpaces)(t + 'BackgroundColor'), title: h }
            ),
          ];
        }
      }
    },
    27138: (e, t, i) => {
      i.r(t), i.d(t, { TrendAngleDefinitionsViewModel: () => u });
      var r = i(79881),
        o = i(90963),
        n = i(68680),
        l = i(3619),
        s = i(32856),
        a = i.n(s),
        c = i(34954),
        p = i(46566);
      const d = new o.TranslatedString(
          'change angle',
          (0, r.t)('change angle')
        ),
        h = (0, r.t)('Angle'),
        g = (0, r.t)('Text'),
        y = (0, r.t)('#1 (price, bar)', { context: 'linetool point' });
      class u extends l.LineDataSourceDefinitionsViewModel {
        _coordinatesPropertyDefinitions() {
          const e = this._source.points(),
            t = [],
            i = this._source.pointsProperty().childs().points[0].childs(),
            r = this._getYCoordinateStepWV();
          t.push(
            (0, c.getCoordinatesPropertiesDefinitions)(
              this._propertyApplier,
              i,
              e[0],
              r,
              y,
              this._source.name()
            )
          );
          const o = (0, n.createNumberPropertyDefinition)(
            {
              value: (0, n.convertToDefinitionProperty)(
                this._propertyApplier,
                this._source.properties().childs().angle,
                d
              ),
            },
            {
              id: 'TrendLineAngleCoordinate',
              title: h,
              min: new (a())(-360),
              max: new (a())(360),
              step: new (a())(1),
            }
          );
          return t.push(o), t;
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs();
          return (0, p.getTrendLineToolsStylePropertiesDefinitions)(
            this._propertyApplier,
            e,
            new o.TranslatedString(this._source.name(), this._source.title()),
            { text: g }
          );
        }
      }
    },
    72487: (e, t, i) => {
      i.r(t), i.d(t, { TrendBasedFibTimeDefinitionsViewModel: () => k });
      var r = i(16282),
        o = i(79881),
        n = i(90963),
        l = i(62684),
        s = i(68680),
        a = i(3619),
        c = i(46446),
        p = i(32856),
        d = i.n(p),
        h = i(5225),
        g = i(3925);
      const y = new n.TranslatedString(
          'change {title} level {index} line visibility',
          (0, o.t)('change {title} level {index} line visibility')
        ),
        u = new n.TranslatedString(
          'change {title} level {index} line color',
          (0, o.t)('change {title} level {index} line color')
        ),
        f = new n.TranslatedString(
          'change {title} level {index} line width',
          (0, o.t)('change {title} level {index} line width')
        ),
        v = new n.TranslatedString(
          'change {title} level {index} line style',
          (0, o.t)('change {title} level {index} line style')
        ),
        b = new n.TranslatedString(
          'change {title} level {index} line coeff',
          (0, o.t)('change {title} level {index} line coeff')
        ),
        _ = new n.TranslatedString(
          'change {title} all lines color',
          (0, o.t)('change {title} all lines color')
        ),
        D = new n.TranslatedString(
          'change {title} background visibility',
          (0, o.t)('change {title} background visibility')
        ),
        T = new n.TranslatedString(
          'change {title} background transparency',
          (0, o.t)('change {title} background transparency')
        ),
        w = new n.TranslatedString(
          'change {title} labels visibility',
          (0, o.t)('change {title} labels visibility')
        ),
        P = new n.TranslatedString(
          'change {title} labels alignment',
          (0, o.t)('change {title} labels alignment')
        ),
        S = (0, o.t)('Trend line'),
        m = (0, o.t)('Use one color'),
        x = (0, o.t)('Background'),
        C = (0, o.t)('Labels');
      class k extends a.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties(),
            i = t.childs(),
            o = this._source.name(),
            a = (0, h.removeSpaces)(o),
            p = new n.TranslatedString(o, this._source.title()),
            k = i.trendline.childs(),
            L = (0, l.createLineStyleDefinition)(
              this._propertyApplier,
              {
                showLine: k.visible,
                lineColor: k.color,
                lineStyle: k.linestyle,
                lineWidth: k.linewidth,
              },
              p,
              'TrendLine',
              { line: S }
            );
          e.push(L);
          const A = this._source.levelsCount();
          for (let i = 1; i <= A; i++) {
            const o = (0, r.ensureDefined)(t.child('level' + i)).childs(),
              n = (0, s.createLeveledLinePropertyDefinition)(
                {
                  checked: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    o.visible,
                    y.format({ title: p, index: i })
                  ),
                  color: (0, s.getColorDefinitionProperty)(
                    this._propertyApplier,
                    o.color,
                    null,
                    u.format({ title: p, index: i })
                  ),
                  width: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    o.linewidth,
                    f.format({ title: p, index: i })
                  ),
                  style: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    o.linestyle,
                    v.format({ title: p, index: i })
                  ),
                  level: (0, s.convertToDefinitionProperty)(
                    this._propertyApplier,
                    o.coeff,
                    b.format({ title: p, index: i })
                  ),
                },
                { id: `${a}LineLevel${i}` }
              );
            e.push(n);
          }
          const M = (0, s.createColorPropertyDefinition)(
            {
              color: (0, s.getColorDefinitionProperty)(
                this._propertyApplier,
                new g.CollectibleColorPropertyUndoWrapper(
                  (0, r.ensureNotNull)(this._source.lineColorsProperty()),
                  this._propertyApplier,
                  null
                ),
                null,
                _.format({ title: p }),
                !0
              ),
            },
            { id: a + 'AllLineColor', title: m }
          );
          e.push(M);
          const V = (0, s.createTransparencyPropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                i.fillBackground,
                D.format({ title: p })
              ),
              transparency: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                i.transparency,
                T.format({ title: p })
              ),
            },
            { id: a + 'Background', title: x }
          );
          e.push(V);
          const B = (0, s.createTwoOptionsPropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                i.showCoeffs,
                w.format({ title: p })
              ),
              option1: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                i.horzLabelsAlign,
                P.format({ title: p })
              ),
              option2: (0, s.convertToDefinitionProperty)(
                this._propertyApplier,
                i.vertLabelsAlign,
                P.format({ title: p })
              ),
            },
            {
              id: a + 'Labels',
              title: C,
              optionsItems1: new (d())(c.availableAlignmentHorizontalItems),
              optionsItems2: new (d())(c.availableAlignmentVerticalItems),
            }
          );
          return e.push(B), e;
        }
      }
    },
    74231: (e, t, i) => {
      i.r(t), i.d(t, { TrendLineDefinitionsViewModel: () => c });
      var r = i(79881),
        o = i(90963),
        n = i(3619),
        l = i(46566),
        s = i(92785);
      const a = (0, r.t)('Text');
      class c extends n.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs();
          return (0, l.getTrendLineToolsStylePropertiesDefinitions)(
            this._propertyApplier,
            e,
            new o.TranslatedString(this._source.name(), this._source.title())
          );
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, s.createTextStyleDefinition)(
              this._propertyApplier,
              {
                ...e,
                showText: e.showLabel,
                textColor: e.textcolor,
                fontSize: e.fontsize,
              },
              new o.TranslatedString(this._source.name(), this._source.title()),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: a } }
            ),
          ];
        }
      }
    },
    30066: (e, t, i) => {
      i.r(t), i.d(t, { VerticalLineDefinitionsViewModel: () => g });
      var r = i(79881),
        o = i(90963),
        n = i(68680),
        l = i(34954),
        s = i(88101),
        a = i(5225),
        c = i(3619),
        p = i(92785);
      const d = (0, r.t)('Text'),
        h = (0, r.t)('#1 (bar)', { context: 'linetool point' });
      class g extends c.LineDataSourceDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs();
          return (0, s.getLinesStylesPropertiesDefinitions)(
            this._propertyApplier,
            e,
            new o.TranslatedString(this._source.name(), this._source.title())
          );
        }
        _coordinatesPropertyDefinitions() {
          const e = this._source.pointsProperty().childs().points[0].childs(),
            t = (0, l.getCoordinateXMetaInfo)(this._propertyApplier, e);
          return [
            (0, n.createCoordinatesPropertyDefinition)(
              { x: t.property },
              {
                id: (0, a.removeSpaces)(this._source.name() + 'Point1'),
                title: h,
                ...t.info,
              }
            ),
          ];
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs();
          return [
            (0, p.createTextStyleDefinition)(
              this._propertyApplier,
              {
                ...e,
                showText: e.showLabel,
                textColor: e.textcolor,
                fontSize: e.fontsize,
                textOrientation: e.textOrientation,
              },
              new o.TranslatedString(this._source.name(), this._source.title()),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: d } }
            ),
          ];
        }
      }
    },
    3925: (e, t, i) => {
      i.d(t, {
        CollectibleColorPropertyUndoWrapper: () => s,
        CollectibleColorPropertyDirectWrapper: () => a,
      });
      var r = i(16282),
        o = i(674),
        n = i.n(o);
      class l extends n() {
        constructor(e) {
          super(),
            (this._listenersMappers = []),
            (this._isProcess = !1),
            (this._baseProperty = e);
        }
        destroy() {
          this._baseProperty.destroy();
        }
        value() {
          const e = this._baseProperty.value();
          return 'mixed' === e ? '' : e;
        }
        visible() {
          return this._baseProperty.visible();
        }
        setValue(e) {
          (this._isProcess = !0),
            this._baseProperty.setValue('' === e ? 'mixed' : e, void 0, {
              applyValue: this._applyValue.bind(this),
            }),
            (this._isProcess = !1),
            this._listenersMappers.forEach((e) => {
              e.method.call(e.obj, this);
            });
        }
        subscribe(e, t) {
          const i = (i) => {
              this._isProcess || t.call(e, this);
            },
            r = { obj: e, method: t, callback: i };
          this._listenersMappers.push(r), this._baseProperty.subscribe(e, i);
        }
        unsubscribe(e, t) {
          var i;
          const o = (0, r.ensureDefined)(
            null ===
              (i = this._listenersMappers.find(
                (i) => i.obj === e && i.method === t
              )) || void 0 === i
              ? void 0
              : i.callback
          );
          this._baseProperty.unsubscribe(e, o);
        }
        unsubscribeAll(e) {
          this._baseProperty.unsubscribeAll(e);
        }
      }
      class s extends l {
        constructor(e, t, i) {
          super(e), (this._propertyApplier = t), (this._undoText = i);
        }
        _applyValue(e, t) {
          this._propertyApplier.setProperty(e, t, this._undoText);
        }
      }
      class a extends l {
        _applyValue(e, t) {
          e.setValue(t);
        }
      }
    },
    80538: (e, t, i) => {
      i.d(t, { PropertyApplierWithoutSavingChart: () => r });
      class r {
        constructor(e, t) {
          (this._undoModelSupplier = e), (this._featureToggle = t);
        }
        setProperty(e, t, i) {
          this._undoModelSupplier().setProperty(
            e,
            t,
            i,
            this._featureToggle.value()
          );
        }
        beginUndoMacro(e) {
          return this._undoModelSupplier().beginUndoMacro(
            e,
            this._shouldWeKeepChartValidated()
          );
        }
        endUndoMacro() {
          this._undoModelSupplier().endUndoMacro();
        }
        setWatchedValue(e, t, i) {
          this._undoModelSupplier().undoHistory().setWatchedValue(e, t, i, !0);
        }
        _shouldWeKeepChartValidated() {
          const e = this._undoModelSupplier()
            .model()
            .isAutoSaveEnabled()
            .value();
          return this._featureToggle.value() && e;
        }
      }
    },
  },
]);
