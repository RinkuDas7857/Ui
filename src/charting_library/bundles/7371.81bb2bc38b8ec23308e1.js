'use strict';
(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [7371],
  {
    97806: (e, t, n) => {
      n.r(t), n.d(t, { createPropertyPage: () => r });
      var i = n(32856),
        o = n.n(i);
      function r(e, t, n, i = null) {
        const r = { id: t, title: n, definitions: new (o())(e) };
        return null !== i && (r.icon = i), r;
      }
    },
    63725: (e, t, n) => {
      n.r(t),
        n.d(t, {
          getIntervalsVisibilitiesPropertiesDefinitions: () => we,
          getSelectionIntervalsVisibilitiesPropertiesDefinition: () => pe,
        });
      var i = n(79881),
        o = n(90963),
        r = n(27490),
        s = n(68680),
        a = n(32856),
        l = n.n(a),
        c = n(1467),
        d = n(39096),
        h = n(16282),
        m = n(674),
        w = n.n(m);
      const p = new o.TranslatedString(
        'change {propertyName} property',
        (0, i.t)('change {propertyName} property')
      );
      class y extends w() {
        constructor(e, t, n) {
          super(),
            (this._isProcess = !1),
            (this._listenersMappers = []),
            (this._valueApplier = {
              applyValue: (e, t) => {
                this._propertyApplier.setProperty(e, t, p);
              },
            }),
            (this._baseProperty = e),
            (this._propertyApplier = n),
            (this._propertyName = t);
        }
        destroy() {
          this._baseProperty.destroy();
        }
        value() {
          return this._baseProperty.value();
        }
        setValue(e, t) {
          this._propertyApplier.beginUndoMacro(
            p.format({ propertyName: this._propertyName })
          ),
            (this._isProcess = !0),
            this._baseProperty.setValue(e, void 0, this._valueApplier),
            (this._isProcess = !1),
            this._propertyApplier.endUndoMacro(),
            this._listenersMappers.forEach((e) => {
              e.method.call(e.obj, this);
            });
        }
        subscribe(e, t) {
          const n = () => {
            this._isProcess || t.call(e, this);
          };
          this._listenersMappers.push({ obj: e, method: t, callback: n }),
            this._baseProperty.subscribe(e, n);
        }
        unsubscribe(e, t) {
          var n;
          const i = (0, h.ensureDefined)(
            null ===
              (n = this._listenersMappers.find(
                (n) => n.obj === e && n.method === t
              )) || void 0 === n
              ? void 0
              : n.callback
          );
          this._baseProperty.unsubscribe(e, i);
        }
        unsubscribeAll(e) {
          this._baseProperty.unsubscribeAll(e);
        }
      }
      const g = new o.TranslatedString(
          'change {title} visibility on ticks',
          (0, i.t)('change {title} visibility on ticks')
        ),
        f = new o.TranslatedString(
          'change {title} visibility on seconds',
          (0, i.t)('change {title} visibility on seconds')
        ),
        T = new o.TranslatedString(
          'change {title} seconds from',
          (0, i.t)('change {title} seconds from')
        ),
        u = new o.TranslatedString(
          'change {title} seconds to',
          (0, i.t)('change {title} seconds to')
        ),
        P = new o.TranslatedString(
          'change {title} visibility on minutes',
          (0, i.t)('change {title} visibility on minutes')
        ),
        b = new o.TranslatedString(
          'change {title} minutes from',
          (0, i.t)('change {title} minutes from')
        ),
        v = new o.TranslatedString(
          'change {title} minutes to',
          (0, i.t)('change {title} minutes to')
        ),
        k = new o.TranslatedString(
          'change {title} visibility on hours',
          (0, i.t)('change {title} visibility on hours')
        ),
        S = new o.TranslatedString(
          'change {title} hours from',
          (0, i.t)('change {title} hours from')
        ),
        D = new o.TranslatedString(
          'change {title} hours to',
          (0, i.t)('change {title} hours to')
        ),
        _ = new o.TranslatedString(
          'change {title} visibility on days',
          (0, i.t)('change {title} visibility on days')
        ),
        C = new o.TranslatedString(
          'change {title} days from',
          (0, i.t)('change {title} days from')
        ),
        L = new o.TranslatedString(
          'change {title} days to',
          (0, i.t)('change {title} days to')
        ),
        V = new o.TranslatedString(
          'change {title} visibility on weeks',
          (0, i.t)('change {title} visibility on weeks')
        ),
        I = new o.TranslatedString(
          'change {title} weeks from',
          (0, i.t)('change {title} weeks from')
        ),
        x = new o.TranslatedString(
          'change {title} weeks to',
          (0, i.t)('change {title} weeks to')
        ),
        R = new o.TranslatedString(
          'change {title} visibility on months',
          (0, i.t)('change {title} visibility on months')
        ),
        F = new o.TranslatedString(
          'change {title} months from',
          (0, i.t)('change {title} months from')
        ),
        M = new o.TranslatedString(
          'change {title} months to',
          (0, i.t)('change {title} months to')
        ),
        A =
          (new o.TranslatedString(
            'change {title} visibility on ranges',
            (0, i.t)('change {title} visibility on ranges')
          ),
          (0, i.t)('Ticks')),
        N = (0, i.t)('Seconds'),
        j = (0, i.t)('Minutes'),
        E = (0, i.t)('Hours'),
        H = (0, i.t)('Days'),
        W = (0, i.t)('Weeks'),
        U = (0, i.t)('Months'),
        q =
          ((0, i.t)('Ranges'),
          new o.TranslatedString('ticks', (0, i.t)('ticks'))),
        z = new o.TranslatedString('seconds', (0, i.t)('seconds')),
        B = new o.TranslatedString('seconds from', (0, i.t)('seconds from')),
        G = new o.TranslatedString('seconds to', (0, i.t)('seconds to')),
        J = new o.TranslatedString('minutes', (0, i.t)('minutes')),
        K = new o.TranslatedString('minutes from', (0, i.t)('minutes from')),
        O = new o.TranslatedString('minutes to', (0, i.t)('minutes to')),
        Q = new o.TranslatedString('hours', (0, i.t)('hours')),
        X = new o.TranslatedString('hours from', (0, i.t)('hours from')),
        Y = new o.TranslatedString('hours to', (0, i.t)('hours to')),
        Z = new o.TranslatedString('days', (0, i.t)('days')),
        $ = new o.TranslatedString('days from', (0, i.t)('days from')),
        ee = new o.TranslatedString('days to', (0, i.t)('days to')),
        te = new o.TranslatedString('weeks', (0, i.t)('weeks')),
        ne = new o.TranslatedString('weeks from', (0, i.t)('weeks from')),
        ie = new o.TranslatedString('weeks to', (0, i.t)('weeks to')),
        oe = new o.TranslatedString('months', (0, i.t)('months')),
        re = new o.TranslatedString('months from', (0, i.t)('months from')),
        se = new o.TranslatedString('months to', (0, i.t)('months to')),
        ae = (new o.TranslatedString('ranges', (0, i.t)('ranges')), [1, 59]),
        le = [1, 59],
        ce = [1, 24],
        de = [1, 366],
        he = [1, 52],
        me = [1, 12];
      function we(e, t, n) {
        const i = [];
        if (r.enabled('tick_resolution')) {
          const o = (0, s.createCheckablePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                e,
                t.ticks,
                g.format({ title: n })
              ),
            },
            { id: 'IntervalsVisibilitiesTicks', title: A }
          );
          i.push(o);
        }
        if ((0, c.isSecondsEnabled)()) {
          const o = (0, s.createRangePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                e,
                t.seconds,
                f.format({ title: n })
              ),
              from: (0, s.convertToDefinitionProperty)(
                e,
                t.secondsFrom,
                T.format({ title: n })
              ),
              to: (0, s.convertToDefinitionProperty)(
                e,
                t.secondsTo,
                u.format({ title: n })
              ),
            },
            {
              id: 'IntervalsVisibilitiesSecond',
              title: N,
              min: new (l())(ae[0]),
              max: new (l())(ae[1]),
            }
          );
          i.push(o);
        }
        const o = (0, s.createRangePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                e,
                t.minutes,
                P.format({ title: n })
              ),
              from: (0, s.convertToDefinitionProperty)(
                e,
                t.minutesFrom,
                b.format({ title: n })
              ),
              to: (0, s.convertToDefinitionProperty)(
                e,
                t.minutesTo,
                v.format({ title: n })
              ),
            },
            {
              id: 'IntervalsVisibilitiesMinutes',
              title: j,
              min: new (l())(le[0]),
              max: new (l())(le[1]),
            }
          ),
          a = (0, s.createRangePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                e,
                t.hours,
                k.format({ title: n })
              ),
              from: (0, s.convertToDefinitionProperty)(
                e,
                t.hoursFrom,
                S.format({ title: n })
              ),
              to: (0, s.convertToDefinitionProperty)(
                e,
                t.hoursTo,
                D.format({ title: n })
              ),
            },
            {
              id: 'IntervalsVisibilitiesHours',
              title: E,
              min: new (l())(ce[0]),
              max: new (l())(ce[1]),
            }
          ),
          d = (0, s.createRangePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                e,
                t.days,
                _.format({ title: n })
              ),
              from: (0, s.convertToDefinitionProperty)(
                e,
                t.daysFrom,
                C.format({ title: n })
              ),
              to: (0, s.convertToDefinitionProperty)(
                e,
                t.daysTo,
                L.format({ title: n })
              ),
            },
            {
              id: 'IntervalsVisibilitiesDays',
              title: H,
              min: new (l())(de[0]),
              max: new (l())(de[1]),
            }
          );
        i.push(o, a, d);
        const h = (0, s.createRangePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                e,
                t.weeks,
                V.format({ title: n })
              ),
              from: (0, s.convertToDefinitionProperty)(
                e,
                t.weeksFrom,
                I.format({ title: n })
              ),
              to: (0, s.convertToDefinitionProperty)(
                e,
                t.weeksTo,
                x.format({ title: n })
              ),
            },
            {
              id: 'IntervalsVisibilitiesWeeks',
              title: W,
              min: new (l())(he[0]),
              max: new (l())(he[1]),
            }
          ),
          m = (0, s.createRangePropertyDefinition)(
            {
              checked: (0, s.convertToDefinitionProperty)(
                e,
                t.months,
                R.format({ title: n })
              ),
              from: (0, s.convertToDefinitionProperty)(
                e,
                t.monthsFrom,
                F.format({ title: n })
              ),
              to: (0, s.convertToDefinitionProperty)(
                e,
                t.monthsTo,
                M.format({ title: n })
              ),
            },
            {
              id: 'IntervalsVisibilitiesMonths',
              title: U,
              min: new (l())(me[0]),
              max: new (l())(me[1]),
            }
          );
        return i.push(h, m), i;
      }
      function pe(e, t) {
        const n = [];
        if (r.enabled('tick_resolution')) {
          const i = (0, s.createCheckablePropertyDefinition)(
            { checked: new y(new d.LineToolCollectedProperty(e.ticks), q, t) },
            { id: 'IntervalsVisibilitiesTicks', title: A }
          );
          n.push(i);
        }
        if ((0, c.isSecondsEnabled)()) {
          const i = (0, s.createRangePropertyDefinition)(
            {
              checked: new y(new d.LineToolCollectedProperty(e.seconds), z, t),
              from: new y(new d.LineToolCollectedProperty(e.secondsFrom), B, t),
              to: new y(new d.LineToolCollectedProperty(e.secondsTo), G, t),
            },
            {
              id: 'IntervalsVisibilitiesSecond',
              title: N,
              min: new (l())(ae[0]),
              max: new (l())(ae[1]),
            }
          );
          n.push(i);
        }
        const i = (0, s.createRangePropertyDefinition)(
            {
              checked: new y(new d.LineToolCollectedProperty(e.minutes), J, t),
              from: new y(new d.LineToolCollectedProperty(e.minutesFrom), K, t),
              to: new y(new d.LineToolCollectedProperty(e.minutesTo), O, t),
            },
            {
              id: 'IntervalsVisibilitiesMinutes',
              title: j,
              min: new (l())(le[0]),
              max: new (l())(le[1]),
            }
          ),
          o = (0, s.createRangePropertyDefinition)(
            {
              checked: new y(new d.LineToolCollectedProperty(e.hours), Q, t),
              from: new y(new d.LineToolCollectedProperty(e.hoursFrom), X, t),
              to: new y(new d.LineToolCollectedProperty(e.hoursTo), Y, t),
            },
            {
              id: 'IntervalsVisibilitiesHours',
              title: E,
              min: new (l())(ce[0]),
              max: new (l())(ce[1]),
            }
          ),
          a = (0, s.createRangePropertyDefinition)(
            {
              checked: new y(new d.LineToolCollectedProperty(e.days), Z, t),
              from: new y(new d.LineToolCollectedProperty(e.daysFrom), $, t),
              to: new y(new d.LineToolCollectedProperty(e.daysTo), ee, t),
            },
            {
              id: 'IntervalsVisibilitiesDays',
              title: H,
              min: new (l())(de[0]),
              max: new (l())(de[1]),
            }
          );
        n.push(i, o, a);
        const h = (0, s.createRangePropertyDefinition)(
            {
              checked: new y(new d.LineToolCollectedProperty(e.weeks), te, t),
              from: new y(new d.LineToolCollectedProperty(e.weeksFrom), ne, t),
              to: new y(new d.LineToolCollectedProperty(e.weeksTo), ie, t),
            },
            {
              id: 'IntervalsVisibilitiesWeeks',
              title: W,
              min: new (l())(he[0]),
              max: new (l())(he[1]),
            }
          ),
          m = (0, s.createRangePropertyDefinition)(
            {
              checked: new y(new d.LineToolCollectedProperty(e.months), oe, t),
              from: new y(new d.LineToolCollectedProperty(e.monthsFrom), re, t),
              to: new y(new d.LineToolCollectedProperty(e.monthsTo), se, t),
            },
            {
              id: 'IntervalsVisibilitiesMonths',
              title: U,
              min: new (l())(me[0]),
              max: new (l())(me[1]),
            }
          );
        return n.push(h, m), n;
      }
    },
  },
]);
