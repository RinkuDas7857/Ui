(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [5030],
  {
    32455: (t) => {
      t.exports = {
        'tablet-normal-breakpoint': 'screen and (max-width: 768px)',
        'small-height-breakpoint': 'screen and (max-height: 360px)',
        'tablet-small-breakpoint': 'screen and (max-width: 428px)',
      };
    },
    74818: (t, e, r) => {
      'use strict';
      function n(t) {
        return o(t, a);
      }
      function i(t) {
        return o(t, s);
      }
      function o(t, e) {
        const r = Object.entries(t).filter(e),
          n = {};
        for (const [t, e] of r) n[t] = e;
        return n;
      }
      function a(t) {
        const [e, r] = t;
        return 0 === e.indexOf('data-') && 'string' == typeof r;
      }
      function s(t) {
        return 0 === t[0].indexOf('aria-');
      }
      r.d(e, {
        filterDataProps: () => n,
        filterAriaProps: () => i,
        filterProps: () => o,
        isDataAttribute: () => a,
        isAriaAttribute: () => s,
      });
    },
    59726: (t, e, r) => {
      'use strict';
      function n(t, e, r, n, i) {
        function o(i) {
          if (t > i.timeStamp) return;
          const o = i.target;
          void 0 !== r &&
            null !== e &&
            null !== o &&
            o.ownerDocument === n &&
            (e.contains(o) || r(i));
        }
        return (
          i.click && n.addEventListener('click', o, !1),
          i.mouseDown && n.addEventListener('mousedown', o, !1),
          i.touchEnd && n.addEventListener('touchend', o, !1),
          i.touchStart && n.addEventListener('touchstart', o, !1),
          () => {
            n.removeEventListener('click', o, !1),
              n.removeEventListener('mousedown', o, !1),
              n.removeEventListener('touchend', o, !1),
              n.removeEventListener('touchstart', o, !1);
          }
        );
      }
      r.d(e, { addOutsideEventListener: () => n });
    },
    72923: (t, e, r) => {
      'use strict';
      r.d(e, { DialogBreakpoints: () => i });
      var n = r(32455);
      const i = {
        SmallHeight: n['small-height-breakpoint'],
        TabletSmall: n['tablet-small-breakpoint'],
        TabletNormal: n['tablet-normal-breakpoint'],
      };
    },
    33093: (t, e, r) => {
      'use strict';
      r.d(e, { FixedSizeList: () => y, VariableSizeList: () => M });
      var n = r(87462);
      function i(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      function o(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      var a =
        Number.isNaN ||
        function (t) {
          return 'number' == typeof t && t != t;
        };
      function s(t, e) {
        if (t.length !== e.length) return !1;
        for (var r = 0; r < t.length; r++)
          if (((n = t[r]), (i = e[r]), !(n === i || (a(n) && a(i))))) return !1;
        var n, i;
        return !0;
      }
      const l = function (t, e) {
        var r;
        void 0 === e && (e = s);
        var n,
          i = [],
          o = !1;
        return function () {
          for (var a = [], s = 0; s < arguments.length; s++)
            a[s] = arguments[s];
          return (
            (o && r === this && e(a, i)) ||
              ((n = t.apply(this, a)), (o = !0), (r = this), (i = a)),
            n
          );
        };
      };
      var c = r(67294),
        u =
          'object' == typeof performance && 'function' == typeof performance.now
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              };
      function f(t) {
        cancelAnimationFrame(t.id);
      }
      function d(t, e) {
        var r = u();
        var n = {
          id: requestAnimationFrame(function i() {
            u() - r >= e ? t.call(null) : (n.id = requestAnimationFrame(i));
          }),
        };
        return n;
      }
      var h = null;
      function m(t) {
        if ((void 0 === t && (t = !1), null === h || t)) {
          var e = document.createElement('div'),
            r = e.style;
          (r.width = '50px'),
            (r.height = '50px'),
            (r.overflow = 'scroll'),
            (r.direction = 'rtl');
          var n = document.createElement('div'),
            i = n.style;
          return (
            (i.width = '100px'),
            (i.height = '100px'),
            e.appendChild(n),
            document.body.appendChild(e),
            e.scrollLeft > 0
              ? (h = 'positive-descending')
              : ((e.scrollLeft = 1),
                (h = 0 === e.scrollLeft ? 'negative' : 'positive-ascending')),
            document.body.removeChild(e),
            h
          );
        }
        return h;
      }
      var p = function (t, e) {
        return t;
      };
      function v(t) {
        var e,
          r,
          a = t.getItemOffset,
          s = t.getEstimatedTotalSize,
          u = t.getItemSize,
          h = t.getOffsetForIndexAndAlignment,
          v = t.getStartIndexForOffset,
          S = t.getStopIndexForStartIndex,
          I = t.initInstanceProps,
          _ = t.shouldResetStyleCacheOnItemSizeChange,
          x = t.validateProps;
        return (
          (r = e =
            (function (t) {
              function e(e) {
                var r;
                return (
                  ((r = t.call(this, e) || this)._instanceProps = I(
                    r.props,
                    o(o(r))
                  )),
                  (r._outerRef = void 0),
                  (r._resetIsScrollingTimeoutId = null),
                  (r.state = {
                    instance: o(o(r)),
                    isScrolling: !1,
                    scrollDirection: 'forward',
                    scrollOffset:
                      'number' == typeof r.props.initialScrollOffset
                        ? r.props.initialScrollOffset
                        : 0,
                    scrollUpdateWasRequested: !1,
                  }),
                  (r._callOnItemsRendered = void 0),
                  (r._callOnItemsRendered = l(function (t, e, n, i) {
                    return r.props.onItemsRendered({
                      overscanStartIndex: t,
                      overscanStopIndex: e,
                      visibleStartIndex: n,
                      visibleStopIndex: i,
                    });
                  })),
                  (r._callOnScroll = void 0),
                  (r._callOnScroll = l(function (t, e, n) {
                    return r.props.onScroll({
                      scrollDirection: t,
                      scrollOffset: e,
                      scrollUpdateWasRequested: n,
                    });
                  })),
                  (r._getItemStyle = void 0),
                  (r._getItemStyle = function (t) {
                    var e,
                      n = r.props,
                      i = n.direction,
                      o = n.itemSize,
                      s = n.layout,
                      l = r._getItemStyleCache(_ && o, _ && s, _ && i);
                    if (l.hasOwnProperty(t)) e = l[t];
                    else {
                      var c = a(r.props, t, r._instanceProps),
                        f = u(r.props, t, r._instanceProps),
                        d = 'horizontal' === i || 'horizontal' === s,
                        h = 'rtl' === i,
                        m = d ? c : 0;
                      l[t] = e = {
                        position: 'absolute',
                        left: h ? void 0 : m,
                        right: h ? m : void 0,
                        top: d ? 0 : c,
                        height: d ? '100%' : f,
                        width: d ? f : '100%',
                      };
                    }
                    return e;
                  }),
                  (r._getItemStyleCache = void 0),
                  (r._getItemStyleCache = l(function (t, e, r) {
                    return {};
                  })),
                  (r._onScrollHorizontal = function (t) {
                    var e = t.currentTarget,
                      n = e.clientWidth,
                      i = e.scrollLeft,
                      o = e.scrollWidth;
                    r.setState(function (t) {
                      if (t.scrollOffset === i) return null;
                      var e = r.props.direction,
                        a = i;
                      if ('rtl' === e)
                        switch (m()) {
                          case 'negative':
                            a = -i;
                            break;
                          case 'positive-descending':
                            a = o - n - i;
                        }
                      return (
                        (a = Math.max(0, Math.min(a, o - n))),
                        {
                          isScrolling: !0,
                          scrollDirection:
                            t.scrollOffset < i ? 'forward' : 'backward',
                          scrollOffset: a,
                          scrollUpdateWasRequested: !1,
                        }
                      );
                    }, r._resetIsScrollingDebounced);
                  }),
                  (r._onScrollVertical = function (t) {
                    var e = t.currentTarget,
                      n = e.clientHeight,
                      i = e.scrollHeight,
                      o = e.scrollTop;
                    r.setState(function (t) {
                      if (t.scrollOffset === o) return null;
                      var e = Math.max(0, Math.min(o, i - n));
                      return {
                        isScrolling: !0,
                        scrollDirection:
                          t.scrollOffset < e ? 'forward' : 'backward',
                        scrollOffset: e,
                        scrollUpdateWasRequested: !1,
                      };
                    }, r._resetIsScrollingDebounced);
                  }),
                  (r._outerRefSetter = function (t) {
                    var e = r.props.outerRef;
                    (r._outerRef = t),
                      'function' == typeof e
                        ? e(t)
                        : null != e &&
                          'object' == typeof e &&
                          e.hasOwnProperty('current') &&
                          (e.current = t);
                  }),
                  (r._resetIsScrollingDebounced = function () {
                    null !== r._resetIsScrollingTimeoutId &&
                      f(r._resetIsScrollingTimeoutId),
                      (r._resetIsScrollingTimeoutId = d(
                        r._resetIsScrolling,
                        150
                      ));
                  }),
                  (r._resetIsScrolling = function () {
                    (r._resetIsScrollingTimeoutId = null),
                      r.setState({ isScrolling: !1 }, function () {
                        r._getItemStyleCache(-1, null);
                      });
                  }),
                  r
                );
              }
              i(e, t),
                (e.getDerivedStateFromProps = function (t, e) {
                  return g(t, e), x(t), null;
                });
              var r = e.prototype;
              return (
                (r.scrollTo = function (t) {
                  (t = Math.max(0, t)),
                    this.setState(function (e) {
                      return e.scrollOffset === t
                        ? null
                        : {
                            scrollDirection:
                              e.scrollOffset < t ? 'forward' : 'backward',
                            scrollOffset: t,
                            scrollUpdateWasRequested: !0,
                          };
                    }, this._resetIsScrollingDebounced);
                }),
                (r.scrollToItem = function (t, e) {
                  void 0 === e && (e = 'auto');
                  var r = this.props.itemCount,
                    n = this.state.scrollOffset;
                  (t = Math.max(0, Math.min(t, r - 1))),
                    this.scrollTo(h(this.props, t, e, n, this._instanceProps));
                }),
                (r.componentDidMount = function () {
                  var t = this.props,
                    e = t.direction,
                    r = t.initialScrollOffset,
                    n = t.layout;
                  if ('number' == typeof r && null != this._outerRef) {
                    var i = this._outerRef;
                    'horizontal' === e || 'horizontal' === n
                      ? (i.scrollLeft = r)
                      : (i.scrollTop = r);
                  }
                  this._callPropsCallbacks();
                }),
                (r.componentDidUpdate = function () {
                  var t = this.props,
                    e = t.direction,
                    r = t.layout,
                    n = this.state,
                    i = n.scrollOffset;
                  if (n.scrollUpdateWasRequested && null != this._outerRef) {
                    var o = this._outerRef;
                    if ('horizontal' === e || 'horizontal' === r)
                      if ('rtl' === e)
                        switch (m()) {
                          case 'negative':
                            o.scrollLeft = -i;
                            break;
                          case 'positive-ascending':
                            o.scrollLeft = i;
                            break;
                          default:
                            var a = o.clientWidth,
                              s = o.scrollWidth;
                            o.scrollLeft = s - a - i;
                        }
                      else o.scrollLeft = i;
                    else o.scrollTop = i;
                  }
                  this._callPropsCallbacks();
                }),
                (r.componentWillUnmount = function () {
                  null !== this._resetIsScrollingTimeoutId &&
                    f(this._resetIsScrollingTimeoutId);
                }),
                (r.render = function () {
                  var t = this.props,
                    e = t.children,
                    r = t.className,
                    i = t.direction,
                    o = t.height,
                    a = t.innerRef,
                    l = t.innerElementType,
                    u = t.innerTagName,
                    f = t.itemCount,
                    d = t.itemData,
                    h = t.itemKey,
                    m = void 0 === h ? p : h,
                    v = t.layout,
                    g = t.outerElementType,
                    S = t.outerTagName,
                    I = t.style,
                    _ = t.useIsScrolling,
                    x = t.width,
                    M = this.state.isScrolling,
                    y = 'horizontal' === i || 'horizontal' === v,
                    z = y ? this._onScrollHorizontal : this._onScrollVertical,
                    b = this._getRangeToRender(),
                    w = b[0],
                    O = b[1],
                    C = [];
                  if (f > 0)
                    for (var R = w; R <= O; R++)
                      C.push(
                        (0, c.createElement)(e, {
                          data: d,
                          key: m(R, d),
                          index: R,
                          isScrolling: _ ? M : void 0,
                          style: this._getItemStyle(R),
                        })
                      );
                  var T = s(this.props, this._instanceProps);
                  return (0, c.createElement)(
                    g || S || 'div',
                    {
                      className: r,
                      onScroll: z,
                      ref: this._outerRefSetter,
                      style: (0, n.default)(
                        {
                          position: 'relative',
                          height: o,
                          width: x,
                          overflow: 'auto',
                          WebkitOverflowScrolling: 'touch',
                          willChange: 'transform',
                          direction: i,
                        },
                        I
                      ),
                    },
                    (0, c.createElement)(l || u || 'div', {
                      children: C,
                      ref: a,
                      style: {
                        height: y ? '100%' : T,
                        pointerEvents: M ? 'none' : void 0,
                        width: y ? T : '100%',
                      },
                    })
                  );
                }),
                (r._callPropsCallbacks = function () {
                  if (
                    'function' == typeof this.props.onItemsRendered &&
                    this.props.itemCount > 0
                  ) {
                    var t = this._getRangeToRender(),
                      e = t[0],
                      r = t[1],
                      n = t[2],
                      i = t[3];
                    this._callOnItemsRendered(e, r, n, i);
                  }
                  if ('function' == typeof this.props.onScroll) {
                    var o = this.state,
                      a = o.scrollDirection,
                      s = o.scrollOffset,
                      l = o.scrollUpdateWasRequested;
                    this._callOnScroll(a, s, l);
                  }
                }),
                (r._getRangeToRender = function () {
                  var t = this.props,
                    e = t.itemCount,
                    r = t.overscanCount,
                    n = this.state,
                    i = n.isScrolling,
                    o = n.scrollDirection,
                    a = n.scrollOffset;
                  if (0 === e) return [0, 0, 0, 0];
                  var s = v(this.props, a, this._instanceProps),
                    l = S(this.props, s, a, this._instanceProps),
                    c = i && 'backward' !== o ? 1 : Math.max(1, r),
                    u = i && 'forward' !== o ? 1 : Math.max(1, r);
                  return [
                    Math.max(0, s - c),
                    Math.max(0, Math.min(e - 1, l + u)),
                    s,
                    l,
                  ];
                }),
                e
              );
            })(c.PureComponent)),
          (e.defaultProps = {
            direction: 'ltr',
            itemData: void 0,
            layout: 'vertical',
            overscanCount: 2,
            useIsScrolling: !1,
          }),
          r
        );
      }
      var g = function (t, e) {
          t.children,
            t.direction,
            t.height,
            t.layout,
            t.innerTagName,
            t.outerTagName,
            t.width,
            e.instance;
        },
        S = function (t, e, r) {
          var n = t.itemSize,
            i = r.itemMetadataMap,
            o = r.lastMeasuredIndex;
          if (e > o) {
            var a = 0;
            if (o >= 0) {
              var s = i[o];
              a = s.offset + s.size;
            }
            for (var l = o + 1; l <= e; l++) {
              var c = n(l);
              (i[l] = { offset: a, size: c }), (a += c);
            }
            r.lastMeasuredIndex = e;
          }
          return i[e];
        },
        I = function (t, e, r, n, i) {
          for (; n <= r; ) {
            var o = n + Math.floor((r - n) / 2),
              a = S(t, o, e).offset;
            if (a === i) return o;
            a < i ? (n = o + 1) : a > i && (r = o - 1);
          }
          return n > 0 ? n - 1 : 0;
        },
        _ = function (t, e, r, n) {
          for (var i = t.itemCount, o = 1; r < i && S(t, r, e).offset < n; )
            (r += o), (o *= 2);
          return I(t, e, Math.min(r, i - 1), Math.floor(r / 2), n);
        },
        x = function (t, e) {
          var r = t.itemCount,
            n = e.itemMetadataMap,
            i = e.estimatedItemSize,
            o = e.lastMeasuredIndex,
            a = 0;
          if ((o >= r && (o = r - 1), o >= 0)) {
            var s = n[o];
            a = s.offset + s.size;
          }
          return a + (r - o - 1) * i;
        },
        M = v({
          getItemOffset: function (t, e, r) {
            return S(t, e, r).offset;
          },
          getItemSize: function (t, e, r) {
            return r.itemMetadataMap[e].size;
          },
          getEstimatedTotalSize: x,
          getOffsetForIndexAndAlignment: function (t, e, r, n, i) {
            var o = t.direction,
              a = t.height,
              s = t.layout,
              l = t.width,
              c = 'horizontal' === o || 'horizontal' === s ? l : a,
              u = S(t, e, i),
              f = x(t, i),
              d = Math.max(0, Math.min(f - c, u.offset)),
              h = Math.max(0, u.offset - c + u.size);
            switch (
              ('smart' === r &&
                (r = n >= h - c && n <= d + c ? 'auto' : 'center'),
              r)
            ) {
              case 'start':
                return d;
              case 'end':
                return h;
              case 'center':
                return Math.round(h + (d - h) / 2);
              case 'auto':
              default:
                return n >= h && n <= d ? n : n < h ? h : d;
            }
          },
          getStartIndexForOffset: function (t, e, r) {
            return (function (t, e, r) {
              var n = e.itemMetadataMap,
                i = e.lastMeasuredIndex;
              return (i > 0 ? n[i].offset : 0) >= r
                ? I(t, e, i, 0, r)
                : _(t, e, Math.max(0, i), r);
            })(t, r, e);
          },
          getStopIndexForStartIndex: function (t, e, r, n) {
            for (
              var i = t.direction,
                o = t.height,
                a = t.itemCount,
                s = t.layout,
                l = t.width,
                c = 'horizontal' === i || 'horizontal' === s ? l : o,
                u = S(t, e, n),
                f = r + c,
                d = u.offset + u.size,
                h = e;
              h < a - 1 && d < f;

            )
              h++, (d += S(t, h, n).size);
            return h;
          },
          initInstanceProps: function (t, e) {
            var r = {
              itemMetadataMap: {},
              estimatedItemSize: t.estimatedItemSize || 50,
              lastMeasuredIndex: -1,
            };
            return (
              (e.resetAfterIndex = function (t, n) {
                void 0 === n && (n = !0),
                  (r.lastMeasuredIndex = Math.min(r.lastMeasuredIndex, t - 1)),
                  e._getItemStyleCache(-1),
                  n && e.forceUpdate();
              }),
              r
            );
          },
          shouldResetStyleCacheOnItemSizeChange: !1,
          validateProps: function (t) {
            t.itemSize;
          },
        }),
        y = v({
          getItemOffset: function (t, e) {
            return e * t.itemSize;
          },
          getItemSize: function (t, e) {
            return t.itemSize;
          },
          getEstimatedTotalSize: function (t) {
            var e = t.itemCount;
            return t.itemSize * e;
          },
          getOffsetForIndexAndAlignment: function (t, e, r, n) {
            var i = t.direction,
              o = t.height,
              a = t.itemCount,
              s = t.itemSize,
              l = t.layout,
              c = t.width,
              u = 'horizontal' === i || 'horizontal' === l ? c : o,
              f = Math.max(0, a * s - u),
              d = Math.min(f, e * s),
              h = Math.max(0, e * s - u + s);
            switch (
              ('smart' === r &&
                (r = n >= h - u && n <= d + u ? 'auto' : 'center'),
              r)
            ) {
              case 'start':
                return d;
              case 'end':
                return h;
              case 'center':
                var m = Math.round(h + (d - h) / 2);
                return m < Math.ceil(u / 2)
                  ? 0
                  : m > f + Math.floor(u / 2)
                  ? f
                  : m;
              case 'auto':
              default:
                return n >= h && n <= d ? n : n < h ? h : d;
            }
          },
          getStartIndexForOffset: function (t, e) {
            var r = t.itemCount,
              n = t.itemSize;
            return Math.max(0, Math.min(r - 1, Math.floor(e / n)));
          },
          getStopIndexForStartIndex: function (t, e, r) {
            var n = t.direction,
              i = t.height,
              o = t.itemCount,
              a = t.itemSize,
              s = t.layout,
              l = t.width,
              c = e * a,
              u = 'horizontal' === n || 'horizontal' === s ? l : i,
              f = Math.ceil((u + r - c) / a);
            return Math.max(0, Math.min(o - 1, e + f - 1));
          },
          initInstanceProps: function (t) {},
          shouldResetStyleCacheOnItemSizeChange: !0,
          validateProps: function (t) {
            t.itemSize;
          },
        });
    },
  },
]);
