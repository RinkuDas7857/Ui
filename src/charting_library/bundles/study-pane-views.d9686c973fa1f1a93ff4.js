'use strict';
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [507],
  {
    59943: (t, e, i) => {
      i.d(e, { PolygonRenderer: () => u });
      var s = i(71044),
        n = i(89684),
        r = i(5025),
        a = i(6397),
        o = i(71172),
        l = i(10288),
        h = i(50968),
        d = i(58729),
        c = i(21344);
      class u extends d.ScaledPaneRenderer {
        constructor(t) {
          super(),
            (this._data = null),
            (this._backHittest = new l.HitTestResult(
              l.HitTestResult.MOVEPOINT_BACKGROUND
            )),
            (this._points = []),
            (this._hittest =
              null != t ? t : new l.HitTestResult(l.HitTestResult.MOVEPOINT));
        }
        setData(t) {
          (this._data = t), (this._points = t.points);
        }
        hitTest(t) {
          if (
            null === this._data ||
            (void 0 !== this._data.mouseTouchable && !this._data.mouseTouchable)
          )
            return null;
          const e = Math.max(
              (0, c.interactionTolerance)().line,
              Math.ceil(this._data.linewidth / 2)
            ),
            i = this._points.length;
          if (1 === i) {
            return (0, s.pointInCircle)(t, this._points[0], e)
              ? this._hittest
              : null;
          }
          for (let s = 1; s < i; s++) {
            const i = this._points[s - 1],
              r = this._points[s];
            if ((0, n.distanceToSegment)(i, r, t).distance <= e)
              return this._hittest;
          }
          if (this._data.filled && this._data.fillBackground && i > 0) {
            const s = this._points[0],
              r = this._points[i - 1];
            if ((0, n.distanceToSegment)(s, r, t).distance <= e)
              return this._hittest;
          }
          return this._data.filled &&
            this._data.fillBackground &&
            (0, s.pointInPolygon)(t, this._data.points)
            ? this._backHittest
            : null;
        }
        _drawImpl(t, e) {
          var i, s;
          const n = this._points.length;
          if (null === this._data || 0 === n) return;
          if (1 === n)
            return void this._drawPoint(
              t,
              this._points[0],
              this._data.linewidth / 2,
              this._data.color
            );
          t.beginPath();
          const l =
            null !== (i = this._data.linecap) && void 0 !== i ? i : 'butt';
          (t.lineCap = l),
            (t.strokeStyle = this._data.color),
            (t.lineWidth = this._data.linewidth),
            (t.lineJoin =
              null !== (s = this._data.linejoin) && void 0 !== s ? s : 'miter'),
            (0, r.setLineStyle)(t, this._data.linestyle);
          const d = this._points[0];
          t.moveTo(d.x, d.y);
          for (const e of this._points) t.lineTo(e.x, e.y);
          if (
            (this._data.filled &&
              this._data.fillBackground &&
              ((t.fillStyle = (0, h.generateColor)(
                this._data.backcolor,
                this._data.transparency
              )),
              t.fill()),
            this._data.filled && !this._data.skipClosePath && t.closePath(),
            this._data.linewidth > 0 && t.stroke(),
            n > 1)
          ) {
            if (
              ('butt' !== l && (t.lineCap = 'butt'),
              this._data.leftend === o.LineEnd.Arrow)
            ) {
              const i = this._correctArrowPoints(
                this._points[1],
                this._points[0],
                t.lineWidth,
                l
              );
              (0, a.drawArrow)(i[0], i[1], t, t.lineWidth, e.pixelRatio);
            }
            if (this._data.rightend === o.LineEnd.Arrow) {
              const i = this._correctArrowPoints(
                this._points[n - 2],
                this._points[n - 1],
                t.lineWidth,
                l
              );
              (0, a.drawArrow)(i[0], i[1], t, t.lineWidth, e.pixelRatio);
            }
          }
        }
        _drawPoint(t, e, i, s) {
          0 !== i &&
            (t.beginPath(),
            (t.fillStyle = s),
            t.arc(e.x, e.y, i, 0, 2 * Math.PI, !0),
            t.fill(),
            t.closePath());
        }
        _correctArrowPoints(t, e, i, s) {
          const n = e.subtract(t),
            r = n.length();
          if ('butt' === s || r < 1) return [t, e];
          const a = r + i / 2;
          return [t, n.scaled(a / r).add(t)];
        }
      }
    },
    67046: (t, e, i) => {
      i.r(e), i.d(e, { HHistPaneView: () => w });
      var s = i(16282),
        n = i(10288),
        r = i(87088),
        a = i(44896),
        o = i(72927),
        l = i(14563),
        h = i(16932),
        d = i(31505),
        c = i(76559),
        u = i(54837);
      function p(t, e) {
        return { min: Math.min(t, e), max: Math.max(t, e) };
      }
      function f(t) {
        return t.max - t.min;
      }
      class _ {
        constructor(t) {
          this._data = t;
        }
        hitTest(t, e) {
          const i = this._data;
          for (const s of i.histograms) {
            if (s.yRange.min >= t.y || t.y >= s.yRange.max) continue;
            let r = s.yRange.min,
              a = null;
            const o = f(s.xRange);
            for (const l of s.bars) {
              const h = i.styles[l.styleId];
              if (!h.visible) continue;
              if (
                h.location === d.HHistLocation.Absolute &&
                (s.xRange.min >= t.x || t.x >= s.xRange.max)
              )
                continue;
              null === a &&
                ((a = 0),
                s.bars.forEach((t) => {
                  const e = t.subBarValues.reduce((t, e) => t + e);
                  a = Math.max(a, e);
                }));
              const c = v(s.xRange, h, e.cssWidth),
                { xBasePoint: u, sign: f } = c,
                _ = p(r, r + l.height);
              r += l.height;
              const g = Math.max(
                (h.percentWidth * o) / 100 - l.subBarValues.length,
                0
              );
              for (let e = 0; e < l.subBarValues.length; e++) {
                const i = _.min,
                  s = _.max,
                  r = 0 === e ? u : u + f * ((g * l.subBarValues[e - 1]) / a),
                  o = r + f * ((g * l.subBarValues[e]) / a);
                if (
                  ((t.x >= r && t.x <= o) || (t.x >= o && t.x <= r)) &&
                  t.y >= i &&
                  t.y <= s
                )
                  return new n.HitTestResult(n.HitTestResult.REGULAR);
              }
            }
          }
          return null;
        }
        draw(t, e) {
          const i = this._data;
          t.save(),
            i.histograms.forEach((s) => {
              const n = [];
              let r = s.yRange.min,
                a = 0,
                o = 0;
              s.bars.forEach((t) => {
                const e = t.subBarValues.reduce((t, e) => t + e);
                (a = Math.max(a, e)), (o += t.height);
              });
              const h = o / s.bars.length,
                d =
                  ((c = h),
                  (u = e.pixelRatio),
                  Math.floor(c * u) >= 1 * u ? Math.floor(u) : 0);
              var c, u;
              const _ = f(s.xRange),
                x = [];
              if (
                (s.bars.forEach((o) => {
                  const l = i.styles[o.styleId];
                  if (!l.visible) return;
                  if (l.showValues)
                    for (let t = 0; t < o.subBarValues.length; t++)
                      n[t] = (n[t] || 0) + o.subBarValues[t];
                  const h = v(s.xRange, l, e.cssWidth),
                    { xBasePoint: c, sign: u } = h,
                    f = p(r, r + o.height);
                  if (((r += o.height), f.min > e.cssHeight || f.max < 0))
                    return;
                  const R = Math.max(
                    (l.percentWidth * _) / 100 - o.subBarValues.length,
                    0
                  );
                  for (let i = 0; i < o.subBarValues.length; i++) {
                    const s = f.min,
                      n = f.max,
                      r =
                        0 === i ? c : c + u * ((R * o.subBarValues[i - 1]) / a),
                      h = r + u * ((R * o.subBarValues[i]) / a);
                    if (Math.abs(h - r) < 0.5) continue;
                    (t.fillStyle = l.colors[i]), t.beginPath();
                    const p = Math.round(r * e.pixelRatio),
                      _ = Math.round(s * e.pixelRatio),
                      v = Math.round(h * e.pixelRatio),
                      g = Math.round(n * e.pixelRatio),
                      m = v - p,
                      x = Math.max(g - _ - d, 1);
                    t.rect(p, _, m, x), t.fill();
                  }
                  if (!l.showValues) return;
                  const w = g(o.subBarValues, l.direction),
                    T = m(_, f, h, l, w);
                  x.push(T);
                }),
                x.length > 0)
              ) {
                const t = i.styles[s.bars[0].styleId],
                  a = v(s.xRange, t, e.cssWidth),
                  o = p(r, r + h),
                  d = g(n, t.direction),
                  c = m(_, o, a, t, d);
                (c.color = (0, l.shiftColor)(c.color, 1.5)), x.push(c);
              }
              const w = Math.min(...x.map((t) => t.fontSize));
              if (w >= 7.5) for (const i of x) (i.fontSize = w), R(t, e, i);
            }),
            t.restore();
        }
      }
      function v(t, e, i) {
        const s = e.location === d.HHistLocation.Absolute,
          n = e.location === d.HHistLocation.Relative,
          r = e.direction === d.HHistDirection.LeftToRight,
          a = e.direction === d.HHistDirection.RightToLeft;
        let o, l;
        if (s && r) (o = t.min), (l = 1);
        else if (s && a) (o = t.max), (l = -1);
        else if (n && r) (o = 0), (l = 1);
        else {
          if (!n || !a)
            throw new Error(
              `Unknown location/direction values: ${e.location}/${e.direction}`
            );
          (o = i), (l = -1);
        }
        return { xBasePoint: o, sign: l };
      }
      function g(t, e) {
        e === d.HHistDirection.RightToLeft && (t = t.slice()).reverse();
        const i = new c.VolumeFormatter();
        return t.map((t) => i.format(t)).join('x');
      }
      function m(t, e, i, s, n) {
        const r = Math.min(
            Math.round((1.7 * t) / n.length),
            Math.round(0.6 * f(e))
          ),
          a = s.direction === d.HHistDirection.LeftToRight ? 'left' : 'right',
          { xBasePoint: l, sign: h } = i,
          c = l + 3 * h,
          u = e.min + 0.7 * f(e);
        return {
          text: n,
          color: s.valuesColor,
          fontSize: r,
          align: a,
          point: new o.Point(c, u),
        };
      }
      function R(t, e, i) {
        const { text: s, color: n, fontSize: r, align: a, point: o } = i;
        (t.font = `${r}px ${u.CHART_FONT_FAMILY}`),
          (t.fillStyle = n),
          (t.textAlign = a),
          (0, h.drawScaled)(t, e.pixelRatio, () => t.fillText(s, o.x, o.y));
      }
      var x = i(50968);
      class w {
        constructor(t, e, i) {
          (this._invalidated = !0),
            (this._provider = t),
            (this._model = e),
            (this._rendererData = { histograms: [], styles: {} }),
            (this._textData = []),
            (this._hhistRenderer = new _(this._rendererData));
        }
        update() {
          this._invalidated = !0;
        }
        renderer() {
          this._invalidated &&
            (this._updateViewInternal(), (this._invalidated = !1));
          const t = new r.CompositeRenderer();
          t.append(this._hhistRenderer);
          for (const e of this._textData)
            t.append(
              new a.TextRenderer(
                e,
                new n.HitTestResult(n.HitTestResult.REGULAR)
              )
            );
          return t;
        }
        _resetRenderersData() {
          (this._rendererData.histograms = []), (this._textData = []);
        }
        _prepareStyles() {
          const t = (0, s.ensureDefined)(this._provider.graphicsInfo().hhists),
            e = Object.keys(t),
            i = this._provider.properties().graphics.hhists;
          this._rendererData.styles = {};
          for (const n of e) {
            const e = (0, s.ensureDefined)(i.child(n)),
              r = (0, s.ensureDefined)(t[n]),
              a = (0, x.generateColor)(
                e.colors[0].value(),
                e.transparencies[0].value()
              ),
              o = e.colors[1]
                ? (0, x.generateColor)(
                    e.colors[1].value(),
                    e.transparencies[1].value()
                  )
                : a;
            this._rendererData.styles[n] = {
              colors: [a, o],
              visible: e.visible.value(),
              percentWidth: e.percentWidth.value(),
              location: r.location,
              direction: e.direction.value(),
              showValues: e.showValues.value(),
              valuesColor: e.valuesColor.value(),
            };
          }
        }
        _updateViewInternal() {
          this._resetRenderersData();
          const t = this._provider.priceScale(),
            e = this._model.timeScale();
          if (!t || t.isEmpty() || e.isEmpty()) return;
          if (null === this._provider.firstValue()) return;
          const i = this._provider.graphics().hhistsByTimePointIndex();
          if (0 === i.size) return;
          const n = e.visibleBarsStrictRange();
          if (null === n) return;
          const r = n.firstBar(),
            a = n.lastBar();
          this._prepareStyles(),
            (0, s.ensureDefined)(i).forEach((i, s) => {
              let n = 1 / 0,
                o = -1 / 0;
              i.forEach((t) => {
                (n = Math.min(n, t.firstBarTime)),
                  (o = Math.max(o, t.lastBarTime));
              }),
                o < r || n > a || this._updateDataForRenderers(i, t, e);
            });
        }
        _updateDataForRenderers(t, e, i) {
          if (t.size <= 0) return;
          let n = null;
          if (
            (t.forEach((t) => {
              n = n || t;
            }),
            null === n)
          )
            return;
          let r = n;
          t.forEach((t) => {
            t.priceLow < r.priceLow && (r = t);
          });
          const a = (function (t, e) {
              return p(
                e.indexToCoordinate(t.firstBarTime),
                e.indexToCoordinate(t.lastBarTime)
              );
            })(n, i),
            o = [];
          t.forEach((t) => {
            null == t.rate[t.rate.length - 1] && t.rate.splice(-1, 1);
            const i = (function (t, e, i) {
              return p(
                e.priceToCoordinate(t.priceHigh, i),
                e.priceToCoordinate(t.priceLow, i)
              );
            })(t, e, (0, s.ensureNotNull)(this._provider.firstValue()));
            o.push({ yRange: i, subBarValues: t.rate, styleId: t.styleId });
          }),
            o.sort((t, e) => t.yRange.min - e.yRange.min);
          const l = [];
          let h = o[0].yRange.min;
          for (const t of o) {
            const e = t.yRange.max - h;
            l.push({ height: e, ...t }), (h = t.yRange.max);
          }
          this._rendererData.histograms.push({
            xRange: a,
            yRange: p(o[0].yRange.min, h),
            bars: l,
          });
        }
      }
    },
    95630: (t, e, i) => {
      i.r(e), i.d(e, { HorizLinePaneView: () => o });
      var s = i(16282),
        n = i(10288),
        r = i(87088),
        a = i(29982);
      class o {
        constructor(t, e, i) {
          (this._data = []),
            (this._invalidated = !0),
            (this._provider = t),
            (this._model = e),
            (this._hitTestResult =
              void 0 !== i
                ? new n.HitTestResult(n.HitTestResult.CUSTOM, i)
                : new n.HitTestResult(n.HitTestResult.REGULAR));
        }
        update() {
          this._invalidated = !0;
        }
        renderer() {
          this._invalidated &&
            (this._updateViewInternal(), (this._invalidated = !1));
          const t = new r.CompositeRenderer();
          for (const e of this._data) {
            const i = new a.HorizontalLineRenderer();
            i.setData(e), i.setHitTest(this._hitTestResult), t.append(i);
          }
          return t;
        }
        _updateViewInternal() {
          this._data = [];
          const t = this._provider.priceScale(),
            e = this._model.timeScale();
          if (!t || t.isEmpty() || e.isEmpty()) return;
          const i = this._provider.graphics().horizlines();
          if (0 === i.size) return;
          const n = this._model.timeScale().visibleBarsStrictRange();
          if (null === n) return;
          const r = this._provider.firstValue();
          if (null === r) return;
          const a = n.firstBar(),
            o = n.lastBar();
          i.forEach((i, n) => {
            const l = this._provider.properties().graphics.horizlines[n];
            l.visible.value() &&
              i.forEach((i) => {
                const n = i.startIndex,
                  h = i.endIndex;
                (!i.extendRight && Math.max(n, h) < a) ||
                  (!i.extendLeft && Math.min(n, h) > o) ||
                  this._data.push({
                    y: t.priceToCoordinate((0, s.ensureDefined)(i.level), r),
                    left: i.extendLeft ? void 0 : e.indexToCoordinate(n),
                    right: i.extendRight ? void 0 : e.indexToCoordinate(h),
                    color: l.color.value(),
                    linewidth: l.width.value(),
                    linestyle: l.style.value(),
                  });
              });
          });
        }
      }
    },
    87030: (t, e, i) => {
      i.r(e), i.d(e, { PolygonPaneView: () => h });
      var s = i(16282),
        n = i(72927),
        r = i(10288),
        a = i(87088),
        o = i(33420),
        l = i(59943);
      class h {
        constructor(t, e, i) {
          (this._data = []),
            (this._invalidated = !0),
            (this._provider = t),
            (this._model = e),
            (this._hitTestResult =
              void 0 !== i
                ? new r.HitTestResult(r.HitTestResult.CUSTOM, i)
                : new r.HitTestResult(r.HitTestResult.REGULAR));
        }
        update() {
          this._invalidated = !0;
        }
        renderer() {
          this._invalidated &&
            (this._updateViewInternal(), (this._invalidated = !1));
          const t = new a.CompositeRenderer();
          for (const e of this._data) {
            const i = new l.PolygonRenderer(this._hitTestResult);
            i.setData(e), t.append(i);
          }
          return t;
        }
        _updateViewInternal() {
          this._data = [];
          const t = this._provider.priceScale(),
            e = this._model.timeScale();
          if (!t || t.isEmpty() || e.isEmpty()) return;
          const i = this._provider.graphics().polygons();
          if (0 === i.size) return;
          const r = this._model.timeScale().visibleBarsStrictRange();
          if (null === r) return;
          const a = this._provider.firstValue();
          if (null === a) return;
          const l = r.firstBar(),
            h = r.lastBar(),
            d = this._provider.properties().graphics.polygons,
            c = (0, s.ensureDefined)(
              this._provider.metaInfo().graphics.polygons
            );
          i.forEach((i, r) => {
            const u = d[r];
            100 !== u.transparency.value() &&
              i.forEach((i) => {
                let d = 1 / 0,
                  p = -1 / 0;
                for (const t of i.points) {
                  const e = t.index + (t.offset || 0);
                  (d = Math.min(d, e)), (p = Math.max(p, e));
                }
                if (p < l || h < d) return;
                const f = i.points.map((i) => {
                  const r = e.indexToCoordinate(i.index + (i.offset || 0)),
                    o = t.priceToCoordinate((0, s.ensureDefined)(i.level), a);
                  return new n.Point(r, o);
                });
                this._data.push({
                  points: f,
                  color: u.color.value(),
                  backcolor: u.color.value(),
                  linewidth:
                    void 0 !== u.showBorder && u.showBorder.value() ? 1 : 0,
                  linestyle: o.LINESTYLE_SOLID,
                  filled: !0,
                  fillBackground: !0,
                  transparency: u.transparency.value(),
                  mouseTouchable: (0, s.ensureDefined)(c[r]).mouseTouchable,
                });
              });
          });
        }
      }
    },
    61469: (t, e, i) => {
      i.r(e), i.d(e, { VertLinePaneView: () => l });
      var s = i(16282),
        n = i(10288),
        r = i(64417),
        a = i(87088),
        o = i(69819);
      class l {
        constructor(t, e, i) {
          (this._data = []),
            (this._invalidated = !0),
            (this._provider = t),
            (this._model = e),
            (this._hitTestResult =
              void 0 !== i
                ? new n.HitTestResult(n.HitTestResult.CUSTOM, i)
                : new n.HitTestResult(n.HitTestResult.REGULAR));
        }
        update() {
          this._invalidated = !0;
        }
        renderer() {
          this._invalidated &&
            (this._updateViewInternal(), (this._invalidated = !1));
          const t = new a.CompositeRenderer();
          for (const e of this._data) {
            const i = new o.VerticalLineRenderer();
            i.setData(e), i.setHitTest(this._hitTestResult), t.append(i);
          }
          return t;
        }
        _updateViewInternal() {
          this._data = [];
          const t = this._provider.priceScale(),
            e = this._model.timeScale();
          if (!t || t.isEmpty() || e.isEmpty()) return;
          const i = this._provider.graphicsInfo().vertlines,
            n = this._provider.graphics().vertlines();
          if (0 === n.size || void 0 === i) return;
          const a = this._model.timeScale().visibleBarsStrictRange();
          if (null === a) return;
          const o = this._provider.firstValue();
          if (null === o) return;
          const l = a.firstBar(),
            h = a.lastBar();
          n.forEach((n, a) => {
            const d = this._provider.properties().graphics.vertlines[a];
            if (!d.visible.value()) return;
            let c = 0;
            switch ((0, s.ensureDefined)(i[a]).halign) {
              case r.HAlign.Left:
                c = -e.barSpacing() / 2;
                break;
              case r.HAlign.Right:
                c = e.barSpacing() / 2;
            }
            n.forEach((i) => {
              const n = i.index;
              n < l ||
                h < n ||
                this._data.push({
                  x: e.indexToCoordinate(n) + c,
                  top: i.extendTop
                    ? void 0
                    : t.priceToCoordinate((0, s.ensureDefined)(i.endPrice), o),
                  bottom: i.extendBottom
                    ? void 0
                    : t.priceToCoordinate(
                        (0, s.ensureDefined)(i.startPrice),
                        o
                      ),
                  color: d.color.value(),
                  linewidth: d.width.value(),
                  linestyle: d.style.value(),
                });
            });
          });
        }
      }
    },
  },
]);
