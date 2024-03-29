(() => {
  'use strict';
  var e,
    a,
    c,
    b,
    f = {},
    d = {};
  function t(e) {
    var a = d[e];
    if (void 0 !== a) return a.exports;
    var c = (d[e] = { id: e, loaded: !1, exports: {} });
    return f[e].call(c.exports, c, c.exports, t), (c.loaded = !0), c.exports;
  }
  (t.m = f),
    (t.c = d),
    (e = []),
    (t.O = (a, c, b, f) => {
      if (!c) {
        var d = 1 / 0;
        for (i = 0; i < e.length; i++) {
          for (var [c, b, f] = e[i], r = !0, o = 0; o < c.length; o++)
            (!1 & f || d >= f) && Object.keys(t.O).every((e) => t.O[e](c[o]))
              ? c.splice(o--, 1)
              : ((r = !1), f < d && (d = f));
          if (r) {
            e.splice(i--, 1);
            var n = b();
            void 0 !== n && (a = n);
          }
        }
        return a;
      }
      f = f || 0;
      for (var i = e.length; i > 0 && e[i - 1][2] > f; i--) e[i] = e[i - 1];
      e[i] = [c, b, f];
    }),
    (t.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return t.d(a, { a }), a;
    }),
    (c = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (t.t = function (e, b) {
      if ((1 & b && (e = this(e)), 8 & b)) return e;
      if ('object' == typeof e && e) {
        if (4 & b && e.__esModule) return e;
        if (16 & b && 'function' == typeof e.then) return e;
      }
      var f = Object.create(null);
      t.r(f);
      var d = {};
      a = a || [null, c({}), c([]), c(c)];
      for (var r = 2 & b && e; 'object' == typeof r && !~a.indexOf(r); r = c(r))
        Object.getOwnPropertyNames(r).forEach((a) => (d[a] = () => e[a]));
      return (d.default = () => e), t.d(f, d), f;
    }),
    (t.d = (e, a) => {
      for (var c in a)
        t.o(a, c) &&
          !t.o(e, c) &&
          Object.defineProperty(e, c, { enumerable: !0, get: a[c] });
    }),
    (t.f = {}),
    (t.e = (e) =>
      Promise.all(Object.keys(t.f).reduce((a, c) => (t.f[c](e, a), a), []))),
    (t.u = (e) =>
      (({
        92: 'chart-screenshot-hint',
        139: 'get-error-card',
        507: 'study-pane-views',
        607: 'study-property-pages-with-definitions',
        731: 'add-compare-dialog',
        1583: 'lt-pane-views',
        1584: 'context-menu-renderer',
        1702: 'manage-drawings-dialog',
        1754: 'symbol-search-dialog',
        1859: 'go-to-date-dialog-impl',
        1890: 'line-tools-icons',
        2077: 'change-interval-dialog',
        2183: 'study-inputs-pane-views',
        2306: 'floating-toolbars',
        2377: 'hammerjs',
        2704: 'currency-label-menu',
        2878: 'drawing-toolbar',
        3005: 'header-toolbar',
        3030: 'new-confirm-inputs-dialog',
        3596: 'general-property-page',
        3718: 'series-icons-map',
        4013: 'custom-intervals-add-dialog',
        4079: 'series-pane-views',
        4389: 'take-chart-image-impl',
        4665: 'share-chart-to-social-utils',
        4862: 'object-tree-dialog',
        5009: 'load-chart-dialog',
        5093: 'chart-widget-gui',
        5514: 'react',
        5516: 'restricted-toolset',
        6166: 'chart-event-hint',
        6265: 'new-edit-object-dialog',
        6456: 'study-market',
        6631: 'study-template-dialog',
        6780: 'source-properties-editor',
        7078: 'general-chart-properties-dialog',
        7260: 'chart-bottom-toolbar',
        7271: 'compare-model',
        7648: 'show-theme-save-dialog',
        8537: 'lt-property-pages-with-definitions',
        8643: 'full-tooltips-popup',
        8890: 'simple-dialog',
        9039: 'lollipop-tooltip-renderer',
        9374: 'symbol-info-dialog-impl',
        9498: 'export-data',
        9685: 'redux',
      }[e] || e) +
      '.' +
      {
        83: 'c56bae15cad268e4c634',
        92: '6d0f2e7ac3cebd7b650c',
        139: 'dfe1662b6e974e519b68',
        167: 'ddb9729ab5d1afb057b7',
        306: '547d2bcc2b4af2c3a922',
        339: 'c4690846f604f7dd0e29',
        439: '48bcad2c3a77a8af7c77',
        507: 'd9686c973fa1f1a93ff4',
        587: '0dee336adbbc385e09cd',
        607: '72083d0a0868166ca2b7',
        706: '45f7be7c41a7aa853618',
        708: '7f4b99c8dfd3f4cda1d1',
        731: '0e0f4b81cf8178378c14',
        739: 'ac9682232ee125adb331',
        847: '0e2ec220427667ac4afb',
        1403: '94bb7fd9993ba18d106f',
        1413: '1eb619040bbb243ff467',
        1529: '30943dc0c4f6a9ddaaa6',
        1583: 'a54c6c59d86ab4d390bf',
        1584: '9a0385060e4241baf12d',
        1702: 'ce43d4b42ea019cc5518',
        1754: '4e741ef8a94e2a1cdf8c',
        1778: 'ba400872d92de3b6683d',
        1829: '1d41207f53b42b7a2cba',
        1859: 'dadfac644efdcd254d91',
        1890: '2ebfde56d4ef0139cc64',
        1941: 'b7ac92bc6cd41d26b421',
        2077: '15fea722d205fbdde7d1',
        2091: '5fe10a2b036ff3b078f3',
        2162: 'a2a8932f43f1e3c9dec7',
        2183: '1763111669ad2eaa2f52',
        2269: '0bb6a7090d85bcc861b8',
        2273: '2688ab4273b6c5e7b8a2',
        2306: '913e12fe2b73959f49ca',
        2321: 'bc28130c1ef207885ee0',
        2359: 'ac774b91df75f5889754',
        2377: 'c69dac2431e462e3fc71',
        2391: '07217bcacc2a0c3b5526',
        2402: '4ce4e3425dce9bceed85',
        2444: '89916595bdde00535f06',
        2614: 'aaf4e9f26ce1a1ab23c7',
        2704: '6dde8a17826b1fb3712c',
        2778: '3eeeb3cc5c1e23773ee0',
        2850: '7de715b47e40ff9df0eb',
        2878: '8399395e7103ba30e756',
        3005: 'd302e948bcd970bc1897',
        3030: '88813711209cf273d882',
        3223: '8215f68551f580dc1b69',
        3463: '65423ae1c1f3301a6bc0',
        3537: 'ca40aa34a8ca51a38546',
        3590: '9ba8c934cf8289ea708f',
        3596: '86f95ff011c77a44071d',
        3708: '5c4de2c15acb974ca934',
        3718: '9d92dfe755e0c94c0c8d',
        3876: 'bb4c1beaa9c3f44aff21',
        3894: '0291eb9a0c770daaf283',
        3996: 'e817729be757062e8eab',
        4013: '3506afd973a0a43dc42a',
        4078: '81c21e241972c36eb524',
        4079: 'd49b8ec162ba0c43260c',
        4093: '8b84af355871cc700cb8',
        4336: 'bd2abe988f02c7604762',
        4389: '013638618dfc6d4c1eaa',
        4595: '3af21ab6febb8bd95327',
        4652: 'c8607ea8f07c456cc68b',
        4665: '830f7e41690ac8285de5',
        4736: 'd0fe7c36ece8fbcf102b',
        4834: 'e5f8c6499e0276c7e8fc',
        4862: 'ec325666665d14d13dd5',
        4882: 'f6391afa336c475e3144',
        4940: '6aeb4a6f298568a71905',
        4985: '1b59d083ccfd01eadce0',
        5009: '418fa6c99a7803f5cc10',
        5019: '5e7f23f81809b4af9b28',
        5030: '3f535fc5b94422bc913a',
        5093: '9891573a47b469e91df5',
        5254: '776db7a6898f96fdd81f',
        5383: '22c502e2ba80f4b4fc32',
        5410: 'f4a88d997535b8e06ad7',
        5453: 'aed5b8f2238a9df3f018',
        5514: '13567dea1b1173009d35',
        5516: '8f58ab2a275c8e1f72b1',
        5527: 'b9e7315abd35b07bca5d',
        5551: '25e42f11b47c40f077e7',
        5637: 'cfee29a9bdb5e8c80abc',
        5698: 'f9597d6ab3204e748640',
        5984: 'b946e00fa5ea31fc918c',
        6062: '82d95f5fefa52a41a3b3',
        6143: '76296c69fef56e7a91a3',
        6166: 'cb517ed06ee9725b8a76',
        6253: 'ea43b521b8d660c15d16',
        6265: 'e069889125138e0cf97a',
        6333: 'dd15794300f0f94e5594',
        6456: 'aaf59e23fa593dd538bc',
        6473: 'eaf31708659822e45277',
        6548: 'd30c19bca3001998881f',
        6612: '8cc4fb02f77fa167e36c',
        6631: 'fd30d0463b77c8858d31',
        6637: 'c5b90dbe32349dc342e8',
        6780: '6854af2788acfa4ef4d4',
        7039: '1f44204337176d372288',
        7078: '742b577b84c6f9fdb26f',
        7260: '05a57b6389d7ddc2a351',
        7271: '08356f64fbfcdcdc3776',
        7353: '1db641f5f147131eea1c',
        7365: 'fb40181a46db7cf2d8b0',
        7371: '81bb2bc38b8ec23308e1',
        7400: 'd1bf2ef27c9b80a3f66d',
        7591: 'cea4aee1089cbf340ee7',
        7607: 'e05ba0de021efee0195f',
        7610: '78bf63bbb1f33a4534a5',
        7648: 'b99932982e0d8e47d562',
        7703: 'be823882173b57ef030c',
        7757: '84c3835c6476f72ab779',
        7799: '681df0cf83dba8ef3cc5',
        7936: 'b5b642628a172091fd1c',
        7962: 'eed46026b7fd77b57cb3',
        8193: '9b0914df6b89a0029fb5',
        8434: '99d7135551ebc9e84366',
        8537: 'ced0df22c184338b3396',
        8604: 'bdfae60bb6bc64b6b7c2',
        8625: '2718a9cf5d44ca766c9d',
        8643: 'c97f4f88ba2959dd66bb',
        8680: 'a98f949c3d71bf32d2c7',
        8856: '3cb75f5a64cf29c079a7',
        8858: '67e4929cb787c9e8cdc0',
        8890: '4965864a1f87b628af01',
        8933: 'c4a661a081db4171594a',
        8969: '351be52a80cbc894aa83',
        9039: '76349a508c9e9d8b8af2',
        9256: '5bde7907e4e68dbacc89',
        9305: 'bf03d72458996071c169',
        9354: 'fd9e9bc51f567c9e2fb7',
        9374: '6aa56a0ae77115394b2f',
        9423: '263522bbe2efc4516280',
        9448: '50bea488288f29b9ec63',
        9498: '429732b8c4ae52bcac7d',
        9602: '57b82f215f51bbd723c4',
        9628: '8f8514eafeb1da3bbdee',
        9685: 'e48a9c831cd697f8a38d',
        9772: '0967c8fb7beae0056cf7',
        9843: '02923c6730179bcbaf48',
        9917: '4b36760cefbdfe418200',
      }[e] +
      '.js')),
    (t.miniCssF = (e) =>
      8445 === e
        ? '8445.e3ed5f183ca7539d37f0.css'
        : e +
          '.' +
          {
            83: '46ce2798763a3d5c2748',
            167: '4a7b6d5ac49e0365fb9f',
            339: '79f004acba5fa5c1b85f',
            439: 'cf0a8c77353b34e465e2',
            587: '144039f5c693ee079edb',
            706: 'af12d57a740fb6b1ba5b',
            1403: '5c193407bf9023ec51df',
            1413: '0beb5c102530e80c962f',
            1778: '3dcfedd5fc468612cdc9',
            1941: 'ae71d13122bc90f281f2',
            2091: 'b5cd26b120d8f015a5f6',
            2162: 'da7cb9d498f064a9ef84',
            2269: 'e35db23226edaf77f36d',
            2273: 'c8e768dcdd52b58e948e',
            2321: '4f5fec7d39b99277caa5',
            2359: '18a49f656f3259463f4f',
            2614: '9b290389192f690dd33c',
            2778: '22f147dbe677a02ae3db',
            2850: '8a920beb86b4e0f023f2',
            3223: '783979b0683ba0a325de',
            3537: '273ebe86a4260eff8e80',
            3708: 'b21be6dee862262304cf',
            3876: 'fbb750fd312778403036',
            3894: '6c50d72ee9e079af3dab',
            3996: '3cdbd2dcf744b8239723',
            4078: '43552fd4fee41d29f435',
            4336: '1228643b9325cd73ea59',
            4595: '6423e4f6860a7dd905ff',
            4652: 'c4c887154b57ce62bd2d',
            4736: '2eccdb294faa8c6685ac',
            4834: '07c319579bda11b57fc3',
            4882: 'acb0c10fdfd40a912b89',
            4985: '6abfd9453389325f7436',
            5410: '21bcd4914bfb1cf880be',
            5453: '142c8996edfadb5669ae',
            5527: 'b19a3c2c68b0d873fe2b',
            5551: '407668886ab3145df3b5',
            5637: 'a1b98549b1c9f19a01cf',
            5698: '9f7ef23e439b8f550541',
            5984: 'fce1e6b0306b3072be07',
            6062: '56b57d0c5c641ee6c503',
            6143: '1f43f1c13a5153841646',
            6253: '8ddff4c976b3edf9f34c',
            6333: '75d8cc7be7c14f60fb3b',
            6473: 'e5bfe6a8cd8097cebb56',
            6548: 'bda2305976fecdd6ca1a',
            6612: '6ea4b89e354fef333be4',
            6637: 'b9569ad7b9c1ffb59c7c',
            7039: '873153a7278857ebfcd1',
            7353: '9bb4f9381a2ee34bec3c',
            7400: '30502d5397989951046f',
            7607: '99350c6a482907066b03',
            7610: '9e79032a52ca259701ef',
            7757: '6d2b490c3cc2ed78d4dd',
            7936: '1e4e780ffda134d965f5',
            8193: '01090d4d9384825040ad',
            8604: '9200d240b82687bc2a27',
            8856: '15adfc3af04a9cdeadc5',
            8858: '535457f61e1b51d9add2',
            8933: '9d36818107c1f276f948',
            8969: 'd72c3357aff6000fd03e',
            9256: 'c6fbca120598828685f3',
            9305: '009b7d4c21c45de9ca48',
            9354: 'a21ae4055d6f7729f892',
            9423: '0ad3a6d06b6bac488bb0',
            9448: 'cd38beceb14c87b723f6',
            9602: 'a0fc3bf3e40760a87f74',
            9843: '9822f0a3a15262042b3e',
            9917: 'f67e7443dbbc7357fda3',
          }[e] +
          '.css'),
    (t.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (t.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, 'exports', {
        enumerable: !0,
        set: () => {
          throw new Error(
            'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' +
              e.id
          );
        },
      }),
      e
    )),
    (t.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (b = {}),
    (t.l = (e, a, c, f) => {
      if (b[e]) b[e].push(a);
      else {
        var d, r;
        if (void 0 !== c)
          for (
            var o = document.getElementsByTagName('script'), n = 0;
            n < o.length;
            n++
          ) {
            var i = o[n];
            if (
              i.getAttribute('src') == e ||
              i.getAttribute('data-webpack') == 'tradingview:' + c
            ) {
              d = i;
              break;
            }
          }
        d ||
          ((r = !0),
          ((d = document.createElement('script')).charset = 'utf-8'),
          (d.timeout = 120),
          t.nc && d.setAttribute('nonce', t.nc),
          d.setAttribute('data-webpack', 'tradingview:' + c),
          (d.src = e)),
          (b[e] = [a]);
        var l = (a, c) => {
            (d.onerror = d.onload = null), clearTimeout(s);
            var f = b[e];
            if (
              (delete b[e],
              d.parentNode && d.parentNode.removeChild(d),
              f && f.forEach((e) => e(c)),
              a)
            )
              return a(c);
          },
          s = setTimeout(
            l.bind(null, void 0, { type: 'timeout', target: d }),
            12e4
          );
        (d.onerror = l.bind(null, d.onerror)),
          (d.onload = l.bind(null, d.onload)),
          r && document.head.appendChild(d);
      }
    }),
    (t.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (t.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (t.p = 'bundles/'),
    (t.p = window.WEBPACK_PUBLIC_PATH || t.p);
  var r,
    o,
    n = t.e,
    i = Object.create(null);
  (t.e = function (e) {
    if (!i[e]) {
      i[e] = (function e(a, c) {
        return n(a).catch(function () {
          return new Promise(function (b) {
            var f = function () {
              window.removeEventListener('online', f, !1),
                !1 === navigator.onLine
                  ? window.addEventListener('online', f, !1)
                  : b(c < 2 ? e(a, c + 1) : n(a));
            };
            setTimeout(f, c * c * 1e3);
          });
        });
      })(e, 0);
      var a = function () {
        delete i[e];
      };
      i[e].then(a, a);
    }
    return i[e];
  }),
    (r = (e) =>
      new Promise((a, c) => {
        var b = t.miniCssF(e),
          f = t.p + b;
        if (
          ((e, a) => {
            for (
              var c = document.getElementsByTagName('link'), b = 0;
              b < c.length;
              b++
            ) {
              var f =
                (t = c[b]).getAttribute('data-href') || t.getAttribute('href');
              if ('stylesheet' === t.rel && (f === e || f === a)) return t;
            }
            var d = document.getElementsByTagName('style');
            for (b = 0; b < d.length; b++) {
              var t;
              if ((f = (t = d[b]).getAttribute('data-href')) === e || f === a)
                return t;
            }
          })(b, f)
        )
          return a();
        ((e, a, c, b) => {
          var f = document.createElement('link');
          (f.rel = 'stylesheet'),
            (f.type = 'text/css'),
            (f.onerror = f.onload =
              (d) => {
                if (((f.onerror = f.onload = null), 'load' === d.type)) c();
                else {
                  var t = d && ('load' === d.type ? 'missing' : d.type),
                    r = (d && d.target && d.target.href) || a,
                    o = new Error(
                      'Loading CSS chunk ' + e + ' failed.\n(' + r + ')'
                    );
                  (o.code = 'CSS_CHUNK_LOAD_FAILED'),
                    (o.type = t),
                    (o.request = r),
                    f.parentNode.removeChild(f),
                    b(o);
                }
              }),
            (f.href = a),
            document.head.appendChild(f);
        })(e, f, a, c);
      })),
    (o = { 3666: 0 }),
    (t.f.miniCss = (e, a) => {
      o[e]
        ? a.push(o[e])
        : 0 !== o[e] &&
          {
            83: 1,
            167: 1,
            339: 1,
            439: 1,
            587: 1,
            706: 1,
            1403: 1,
            1413: 1,
            1778: 1,
            1941: 1,
            2091: 1,
            2162: 1,
            2269: 1,
            2273: 1,
            2321: 1,
            2359: 1,
            2614: 1,
            2778: 1,
            2850: 1,
            3223: 1,
            3537: 1,
            3708: 1,
            3876: 1,
            3894: 1,
            3996: 1,
            4078: 1,
            4336: 1,
            4595: 1,
            4652: 1,
            4736: 1,
            4834: 1,
            4882: 1,
            4985: 1,
            5410: 1,
            5453: 1,
            5527: 1,
            5551: 1,
            5637: 1,
            5698: 1,
            5984: 1,
            6062: 1,
            6143: 1,
            6253: 1,
            6333: 1,
            6473: 1,
            6548: 1,
            6612: 1,
            6637: 1,
            7039: 1,
            7353: 1,
            7400: 1,
            7607: 1,
            7610: 1,
            7757: 1,
            7936: 1,
            8193: 1,
            8604: 1,
            8856: 1,
            8858: 1,
            8933: 1,
            8969: 1,
            9256: 1,
            9305: 1,
            9354: 1,
            9423: 1,
            9448: 1,
            9602: 1,
            9843: 1,
            9917: 1,
          }[e] &&
          a.push(
            (o[e] = r(e).then(
              () => {
                o[e] = 0;
              },
              (a) => {
                throw (delete o[e], a);
              }
            ))
          );
    }),
    (() => {
      var e = { 3666: 0, 8445: 0 };
      (t.f.j = (a, c) => {
        var b = t.o(e, a) ? e[a] : void 0;
        if (0 !== b)
          if (b) c.push(b[2]);
          else if (
            /^(1(403|413|67|778|941)|2(091|162|269|273|321|359|614|778|850)|3((66|87|99)6|223|39|537|708|894)|4([37]36|078|39|595|652|834|882|985)|5((52|63|8)7|410|453|551|698|984)|6((14|25|33|47)3|062|548|612|637)|7(039|06|353|400|607|610|757|936)|8(85[68]|(|19|93)3|445|604|969)|9(256|305|354|423|448|602|843|917))$/.test(
              a
            )
          )
            e[a] = 0;
          else {
            var f = new Promise((c, f) => (b = e[a] = [c, f]));
            c.push((b[2] = f));
            var d = t.p + t.u(a),
              r = new Error();
            t.l(
              d,
              (c) => {
                if (t.o(e, a) && (0 !== (b = e[a]) && (e[a] = void 0), b)) {
                  var f = c && ('load' === c.type ? 'missing' : c.type),
                    d = c && c.target && c.target.src;
                  (r.message =
                    'Loading chunk ' + a + ' failed.\n(' + f + ': ' + d + ')'),
                    (r.name = 'ChunkLoadError'),
                    (r.type = f),
                    (r.request = d),
                    b[1](r);
                }
              },
              'chunk-' + a,
              a
            );
          }
      }),
        (t.O.j = (a) => 0 === e[a]);
      var a = (a, c) => {
          var b,
            f,
            [d, r, o] = c,
            n = 0;
          if (d.some((a) => 0 !== e[a])) {
            for (b in r) t.o(r, b) && (t.m[b] = r[b]);
            if (o) var i = o(t);
          }
          for (a && a(c); n < d.length; n++)
            (f = d[n]), t.o(e, f) && e[f] && e[f][0](), (e[d[n]] = 0);
          return t.O(i);
        },
        c = (self.webpackChunktradingview = self.webpackChunktradingview || []);
      c.forEach(a.bind(null, 0)), (c.push = a.bind(null, c.push.bind(c)));
    })(),
    (() => {
      const { miniCssF: e } = t;
      t.miniCssF = (a) =>
        'rtl' === document.dir ? e(a).replace(/\.css$/, '.rtl.css') : e(a);
    })();
})();
