(() => {
  var e = {};
  (e.id = 625),
    (e.ids = [625]),
    (e.modules = {
      47849: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/action-async-storage.external');
      },
      72934: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/action-async-storage.external.js');
      },
      55403: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/request-async-storage.external');
      },
      54580: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/request-async-storage.external.js');
      },
      94749: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/static-generation-async-storage.external');
      },
      45869: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/static-generation-async-storage.external.js');
      },
      20399: (e) => {
        'use strict';
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
      },
      71017: (e) => {
        'use strict';
        e.exports = require('path');
      },
      57310: (e) => {
        'use strict';
        e.exports = require('url');
      },
      9249: (e) => {
        e.exports = {
          style: { fontFamily: "'__Open_Sans_63ca04', '__Open_Sans_Fallback_63ca04'", fontStyle: 'normal' },
          className: '__className_63ca04',
          variable: '__variable_63ca04',
        };
      },
      91379: (e, t, n) => {
        'use strict';
        n.r(t),
          n.d(t, {
            GlobalError: () => a.a,
            __next_app__: () => h,
            originalPathname: () => c,
            pages: () => d,
            routeModule: () => f,
            tree: () => u,
          });
        var r = n(50482),
          s = n(69108),
          i = n(62563),
          a = n.n(i),
          o = n(68300),
          l = {};
        for (let e in o)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', 'originalPathname', '__next_app__', 'routeModule'].indexOf(e) &&
            (l[e] = () => o[e]);
        n.d(t, l);
        let u = [
            '',
            {
              children: [
                'receipt',
                {
                  children: [
                    'receipt-download',
                    {
                      children: [
                        '__PAGE__',
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(n.bind(n, 40233)),
                            '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/receipt/receipt-download/page.tsx',
                          ],
                        },
                      ],
                    },
                    {},
                  ],
                },
                {
                  metadata: {
                    icon: [async (e) => (await Promise.resolve().then(n.bind(n, 73881))).default(e)],
                    apple: [],
                    openGraph: [],
                    twitter: [],
                    manifest: void 0,
                  },
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(n.bind(n, 32396)),
                '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(n.bind(n, 48206)),
                '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/not-found.tsx',
              ],
              metadata: {
                icon: [async (e) => (await Promise.resolve().then(n.bind(n, 73881))).default(e)],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          d = [
            '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/receipt/receipt-download/page.tsx',
          ],
          c = '/receipt/receipt-download/page',
          h = { require: n, loadChunk: () => Promise.resolve() },
          f = new r.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: '/receipt/receipt-download/page',
              pathname: '/receipt/receipt-download',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: u },
          });
      },
      98399: (e, t, n) => {
        Promise.resolve().then(n.bind(n, 31041));
      },
      5251: (e, t, n) => {
        'use strict';
        n.d(t, { R: () => i });
        let r = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
          s = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
          i = function (e, t, n, i) {
            let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              o = a ? '&' : '';
            return {
              [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, r(i)), { animationPlayState: 'paused' }),
              [`${o}${e}-leave`]: Object.assign(Object.assign({}, s(i)), { animationPlayState: 'paused' }),
              [`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: 'running' },
              [`${o}${e}-leave${e}-leave-active`]: {
                animationName: n,
                animationPlayState: 'running',
                pointerEvents: 'none',
              },
            };
          };
      },
      77030: function (e, t, n) {
        (e = n.nmd(e)).exports = (function () {
          'use strict';
          function t() {
            return L.apply(null, arguments);
          }
          function n(e) {
            return e instanceof Array || '[object Array]' === Object.prototype.toString.call(e);
          }
          function r(e) {
            return null != e && '[object Object]' === Object.prototype.toString.call(e);
          }
          function s(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          function i(e) {
            var t;
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            for (t in e) if (s(e, t)) return !1;
            return !0;
          }
          function a(e) {
            return void 0 === e;
          }
          function o(e) {
            return 'number' == typeof e || '[object Number]' === Object.prototype.toString.call(e);
          }
          function l(e) {
            return e instanceof Date || '[object Date]' === Object.prototype.toString.call(e);
          }
          function u(e, t) {
            var n,
              r = [],
              s = e.length;
            for (n = 0; n < s; ++n) r.push(t(e[n], n));
            return r;
          }
          function d(e, t) {
            for (var n in t) s(t, n) && (e[n] = t[n]);
            return s(t, 'toString') && (e.toString = t.toString), s(t, 'valueOf') && (e.valueOf = t.valueOf), e;
          }
          function c(e, t, n, r) {
            return ts(e, t, n, r, !0).utc();
          }
          function h(e) {
            return (
              null == e._pf &&
                (e._pf = {
                  empty: !1,
                  unusedTokens: [],
                  unusedInput: [],
                  overflow: -2,
                  charsLeftOver: 0,
                  nullInput: !1,
                  invalidEra: null,
                  invalidMonth: null,
                  invalidFormat: !1,
                  userInvalidated: !1,
                  iso: !1,
                  parsedDateParts: [],
                  era: null,
                  meridiem: null,
                  rfc2822: !1,
                  weekdayMismatch: !1,
                }),
              e._pf
            );
          }
          function f(e) {
            var t = null,
              n = !1,
              r = e._d && !isNaN(e._d.getTime());
            return (r &&
              ((t = h(e)),
              (n = A.call(t.parsedDateParts, function (e) {
                return null != e;
              })),
              (r =
                t.overflow < 0 &&
                !t.empty &&
                !t.invalidEra &&
                !t.invalidMonth &&
                !t.invalidWeekday &&
                !t.weekdayMismatch &&
                !t.nullInput &&
                !t.invalidFormat &&
                !t.userInvalidated &&
                (!t.meridiem || (t.meridiem && n))),
              e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)),
            null != Object.isFrozen && Object.isFrozen(e))
              ? r
              : ((e._isValid = r), e._isValid);
          }
          function m(e) {
            var t = c(NaN);
            return null != e ? d(h(t), e) : (h(t).userInvalidated = !0), t;
          }
          A = Array.prototype.some
            ? Array.prototype.some
            : function (e) {
                var t,
                  n = Object(this),
                  r = n.length >>> 0;
                for (t = 0; t < r; t++) if (t in n && e.call(this, n[t], t, n)) return !0;
                return !1;
              };
          var y,
            _,
            g = (t.momentProperties = []),
            p = !1;
          function w(e, t) {
            var n,
              r,
              s,
              i = g.length;
            if (
              (a(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
              a(t._i) || (e._i = t._i),
              a(t._f) || (e._f = t._f),
              a(t._l) || (e._l = t._l),
              a(t._strict) || (e._strict = t._strict),
              a(t._tzm) || (e._tzm = t._tzm),
              a(t._isUTC) || (e._isUTC = t._isUTC),
              a(t._offset) || (e._offset = t._offset),
              a(t._pf) || (e._pf = h(t)),
              a(t._locale) || (e._locale = t._locale),
              i > 0)
            )
              for (n = 0; n < i; n++) a((s = t[(r = g[n])])) || (e[r] = s);
            return e;
          }
          function v(e) {
            w(this, e),
              (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
              this.isValid() || (this._d = new Date(NaN)),
              !1 === p && ((p = !0), t.updateOffset(this), (p = !1));
          }
          function k(e) {
            return e instanceof v || (null != e && null != e._isAMomentObject);
          }
          function S(e) {
            !1 === t.suppressDeprecationWarnings &&
              'undefined' != typeof console &&
              console.warn &&
              console.warn('Deprecation warning: ' + e);
          }
          function x(e, n) {
            var r = !0;
            return d(function () {
              if ((null != t.deprecationHandler && t.deprecationHandler(null, e), r)) {
                var i,
                  a,
                  o,
                  l = [],
                  u = arguments.length;
                for (a = 0; a < u; a++) {
                  if (((i = ''), 'object' == typeof arguments[a])) {
                    for (o in ((i += '\n[' + a + '] '), arguments[0]))
                      s(arguments[0], o) && (i += o + ': ' + arguments[0][o] + ', ');
                    i = i.slice(0, -2);
                  } else i = arguments[a];
                  l.push(i);
                }
                S(e + '\nArguments: ' + Array.prototype.slice.call(l).join('') + '\n' + Error().stack), (r = !1);
              }
              return n.apply(this, arguments);
            }, n);
          }
          var M = {};
          function D(e, n) {
            null != t.deprecationHandler && t.deprecationHandler(e, n), M[e] || (S(n), (M[e] = !0));
          }
          function b(e) {
            return (
              ('undefined' != typeof Function && e instanceof Function) ||
              '[object Function]' === Object.prototype.toString.call(e)
            );
          }
          function Y(e, t) {
            var n,
              i = d({}, e);
            for (n in t)
              s(t, n) &&
                (r(e[n]) && r(t[n])
                  ? ((i[n] = {}), d(i[n], e[n]), d(i[n], t[n]))
                  : null != t[n]
                    ? (i[n] = t[n])
                    : delete i[n]);
            for (n in e) s(e, n) && !s(t, n) && r(e[n]) && (i[n] = d({}, i[n]));
            return i;
          }
          function O(e) {
            null != e && this.set(e);
          }
          function T(e, t, n) {
            var r = '' + Math.abs(e);
            return (
              (e >= 0 ? (n ? '+' : '') : '-') +
              Math.pow(10, Math.max(0, t - r.length))
                .toString()
                .substr(1) +
              r
            );
          }
          (t.suppressDeprecationWarnings = !1),
            (t.deprecationHandler = null),
            (V = Object.keys
              ? Object.keys
              : function (e) {
                  var t,
                    n = [];
                  for (t in e) s(e, t) && n.push(t);
                  return n;
                });
          var N =
              /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            P = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            C = {},
            R = {};
          function j(e, t, n, r) {
            var s = r;
            'string' == typeof r &&
              (s = function () {
                return this[r]();
              }),
              e && (R[e] = s),
              t &&
                (R[t[0]] = function () {
                  return T(s.apply(this, arguments), t[1], t[2]);
                }),
              n &&
                (R[n] = function () {
                  return this.localeData().ordinal(s.apply(this, arguments), e);
                });
          }
          function E(e, t) {
            return e.isValid()
              ? ((C[(t = W(t, e.localeData()))] =
                  C[t] ||
                  (function (e) {
                    var t,
                      n,
                      r,
                      s = e.match(N);
                    for (n = 0, r = s.length; n < r; n++)
                      R[s[n]]
                        ? (s[n] = R[s[n]])
                        : (s[n] = (t = s[n]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, '') : t.replace(/\\/g, ''));
                    return function (t) {
                      var n,
                        i = '';
                      for (n = 0; n < r; n++) i += b(s[n]) ? s[n].call(t, e) : s[n];
                      return i;
                    };
                  })(t)),
                C[t](e))
              : e.localeData().invalidDate();
          }
          function W(e, t) {
            var n = 5;
            function r(e) {
              return t.longDateFormat(e) || e;
            }
            for (P.lastIndex = 0; n >= 0 && P.test(e); ) (e = e.replace(P, r)), (P.lastIndex = 0), (n -= 1);
            return e;
          }
          var U = {
            D: 'date',
            dates: 'date',
            date: 'date',
            d: 'day',
            days: 'day',
            day: 'day',
            e: 'weekday',
            weekdays: 'weekday',
            weekday: 'weekday',
            E: 'isoWeekday',
            isoweekdays: 'isoWeekday',
            isoweekday: 'isoWeekday',
            DDD: 'dayOfYear',
            dayofyears: 'dayOfYear',
            dayofyear: 'dayOfYear',
            h: 'hour',
            hours: 'hour',
            hour: 'hour',
            ms: 'millisecond',
            milliseconds: 'millisecond',
            millisecond: 'millisecond',
            m: 'minute',
            minutes: 'minute',
            minute: 'minute',
            M: 'month',
            months: 'month',
            month: 'month',
            Q: 'quarter',
            quarters: 'quarter',
            quarter: 'quarter',
            s: 'second',
            seconds: 'second',
            second: 'second',
            gg: 'weekYear',
            weekyears: 'weekYear',
            weekyear: 'weekYear',
            GG: 'isoWeekYear',
            isoweekyears: 'isoWeekYear',
            isoweekyear: 'isoWeekYear',
            w: 'week',
            weeks: 'week',
            week: 'week',
            W: 'isoWeek',
            isoweeks: 'isoWeek',
            isoweek: 'isoWeek',
            y: 'year',
            years: 'year',
            year: 'year',
          };
          function H(e) {
            return 'string' == typeof e ? U[e] || U[e.toLowerCase()] : void 0;
          }
          function F(e) {
            var t,
              n,
              r = {};
            for (n in e) s(e, n) && (t = H(n)) && (r[t] = e[n]);
            return r;
          }
          var L,
            A,
            V,
            $,
            I = {
              date: 9,
              day: 11,
              weekday: 11,
              isoWeekday: 11,
              dayOfYear: 4,
              hour: 13,
              millisecond: 16,
              minute: 14,
              month: 8,
              quarter: 7,
              second: 15,
              weekYear: 1,
              isoWeekYear: 1,
              week: 5,
              isoWeek: 5,
              year: 1,
            },
            G = /\d/,
            q = /\d\d/,
            Z = /\d{3}/,
            z = /\d{4}/,
            B = /[+-]?\d{6}/,
            J = /\d\d?/,
            Q = /\d\d\d\d?/,
            X = /\d\d\d\d\d\d?/,
            K = /\d{1,3}/,
            ee = /\d{1,4}/,
            et = /[+-]?\d{1,6}/,
            en = /\d+/,
            er = /[+-]?\d+/,
            es = /Z|[+-]\d\d:?\d\d/gi,
            ei = /Z|[+-]\d\d(?::?\d\d)?/gi,
            ea =
              /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            eo = /^[1-9]\d?/,
            el = /^([1-9]\d|\d)/;
          function eu(e, t, n) {
            $[e] = b(t)
              ? t
              : function (e, r) {
                  return e && n ? n : t;
                };
          }
          function ed(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          }
          function ec(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          }
          function eh(e) {
            var t = +e,
              n = 0;
            return 0 !== t && isFinite(t) && (n = ec(t)), n;
          }
          $ = {};
          var ef = {};
          function em(e, t) {
            var n,
              r,
              s = t;
            for (
              'string' == typeof e && (e = [e]),
                o(t) &&
                  (s = function (e, n) {
                    n[t] = eh(e);
                  }),
                r = e.length,
                n = 0;
              n < r;
              n++
            )
              ef[e[n]] = s;
          }
          function ey(e, t) {
            em(e, function (e, n, r, s) {
              (r._w = r._w || {}), t(e, r._w, r, s);
            });
          }
          function e_(e) {
            return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
          }
          function eg(e) {
            return e_(e) ? 366 : 365;
          }
          j('Y', 0, 0, function () {
            var e = this.year();
            return e <= 9999 ? T(e, 4) : '+' + e;
          }),
            j(0, ['YY', 2], 0, function () {
              return this.year() % 100;
            }),
            j(0, ['YYYY', 4], 0, 'year'),
            j(0, ['YYYYY', 5], 0, 'year'),
            j(0, ['YYYYYY', 6, !0], 0, 'year'),
            eu('Y', er),
            eu('YY', J, q),
            eu('YYYY', ee, z),
            eu('YYYYY', et, B),
            eu('YYYYYY', et, B),
            em(['YYYYY', 'YYYYYY'], 0),
            em('YYYY', function (e, n) {
              n[0] = 2 === e.length ? t.parseTwoDigitYear(e) : eh(e);
            }),
            em('YY', function (e, n) {
              n[0] = t.parseTwoDigitYear(e);
            }),
            em('Y', function (e, t) {
              t[0] = parseInt(e, 10);
            }),
            (t.parseTwoDigitYear = function (e) {
              return eh(e) + (eh(e) > 68 ? 1900 : 2e3);
            });
          var ep = ew('FullYear', !0);
          function ew(e, n) {
            return function (r) {
              return null != r ? (ek(this, e, r), t.updateOffset(this, n), this) : ev(this, e);
            };
          }
          function ev(e, t) {
            if (!e.isValid()) return NaN;
            var n = e._d,
              r = e._isUTC;
            switch (t) {
              case 'Milliseconds':
                return r ? n.getUTCMilliseconds() : n.getMilliseconds();
              case 'Seconds':
                return r ? n.getUTCSeconds() : n.getSeconds();
              case 'Minutes':
                return r ? n.getUTCMinutes() : n.getMinutes();
              case 'Hours':
                return r ? n.getUTCHours() : n.getHours();
              case 'Date':
                return r ? n.getUTCDate() : n.getDate();
              case 'Day':
                return r ? n.getUTCDay() : n.getDay();
              case 'Month':
                return r ? n.getUTCMonth() : n.getMonth();
              case 'FullYear':
                return r ? n.getUTCFullYear() : n.getFullYear();
              default:
                return NaN;
            }
          }
          function ek(e, t, n) {
            var r, s, i, a;
            if (!(!e.isValid() || isNaN(n))) {
              switch (((r = e._d), (s = e._isUTC), t)) {
                case 'Milliseconds':
                  return void (s ? r.setUTCMilliseconds(n) : r.setMilliseconds(n));
                case 'Seconds':
                  return void (s ? r.setUTCSeconds(n) : r.setSeconds(n));
                case 'Minutes':
                  return void (s ? r.setUTCMinutes(n) : r.setMinutes(n));
                case 'Hours':
                  return void (s ? r.setUTCHours(n) : r.setHours(n));
                case 'Date':
                  return void (s ? r.setUTCDate(n) : r.setDate(n));
                case 'FullYear':
                  break;
                default:
                  return;
              }
              (i = e.month()),
                (a = 29 !== (a = e.date()) || 1 !== i || e_(n) ? a : 28),
                s ? r.setUTCFullYear(n, i, a) : r.setFullYear(n, i, a);
            }
          }
          function eS(e, t) {
            if (isNaN(e) || isNaN(t)) return NaN;
            var n = ((t % 12) + 12) % 12;
            return (e += (t - n) / 12), 1 === n ? (e_(e) ? 29 : 28) : 31 - ((n % 7) % 2);
          }
          (eV = Array.prototype.indexOf
            ? Array.prototype.indexOf
            : function (e) {
                var t;
                for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
                return -1;
              }),
            j('M', ['MM', 2], 'Mo', function () {
              return this.month() + 1;
            }),
            j('MMM', 0, 0, function (e) {
              return this.localeData().monthsShort(this, e);
            }),
            j('MMMM', 0, 0, function (e) {
              return this.localeData().months(this, e);
            }),
            eu('M', J, eo),
            eu('MM', J, q),
            eu('MMM', function (e, t) {
              return t.monthsShortRegex(e);
            }),
            eu('MMMM', function (e, t) {
              return t.monthsRegex(e);
            }),
            em(['M', 'MM'], function (e, t) {
              t[1] = eh(e) - 1;
            }),
            em(['MMM', 'MMMM'], function (e, t, n, r) {
              var s = n._locale.monthsParse(e, r, n._strict);
              null != s ? (t[1] = s) : (h(n).invalidMonth = e);
            });
          var ex = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
            eM = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
          function eD(e, t, n) {
            var r,
              s,
              i,
              a = e.toLocaleLowerCase();
            if (!this._monthsParse)
              for (r = 0, this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []; r < 12; ++r)
                (i = c([2e3, r])),
                  (this._shortMonthsParse[r] = this.monthsShort(i, '').toLocaleLowerCase()),
                  (this._longMonthsParse[r] = this.months(i, '').toLocaleLowerCase());
            return n
              ? 'MMM' === t
                ? -1 !== (s = eV.call(this._shortMonthsParse, a))
                  ? s
                  : null
                : -1 !== (s = eV.call(this._longMonthsParse, a))
                  ? s
                  : null
              : 'MMM' === t
                ? -1 !== (s = eV.call(this._shortMonthsParse, a))
                  ? s
                  : -1 !== (s = eV.call(this._longMonthsParse, a))
                    ? s
                    : null
                : -1 !== (s = eV.call(this._longMonthsParse, a))
                  ? s
                  : -1 !== (s = eV.call(this._shortMonthsParse, a))
                    ? s
                    : null;
          }
          function eb(e, t) {
            if (!e.isValid()) return e;
            if ('string' == typeof t) {
              if (/^\d+$/.test(t)) t = eh(t);
              else if (!o((t = e.localeData().monthsParse(t)))) return e;
            }
            var n = t,
              r = e.date();
            return (
              (r = r < 29 ? r : Math.min(r, eS(e.year(), n))),
              e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r),
              e
            );
          }
          function eY(e) {
            return null != e ? (eb(this, e), t.updateOffset(this, !0), this) : ev(this, 'Month');
          }
          function eO() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              r,
              s,
              i = [],
              a = [],
              o = [];
            for (t = 0; t < 12; t++)
              (n = c([2e3, t])),
                (r = ed(this.monthsShort(n, ''))),
                (s = ed(this.months(n, ''))),
                i.push(r),
                a.push(s),
                o.push(s),
                o.push(r);
            i.sort(e),
              a.sort(e),
              o.sort(e),
              (this._monthsRegex = RegExp('^(' + o.join('|') + ')', 'i')),
              (this._monthsShortRegex = this._monthsRegex),
              (this._monthsStrictRegex = RegExp('^(' + a.join('|') + ')', 'i')),
              (this._monthsShortStrictRegex = RegExp('^(' + i.join('|') + ')', 'i'));
          }
          function eT(e, t, n, r, s, i, a) {
            var o;
            return (
              e < 100 && e >= 0
                ? isFinite((o = new Date(e + 400, t, n, r, s, i, a)).getFullYear()) && o.setFullYear(e)
                : (o = new Date(e, t, n, r, s, i, a)),
              o
            );
          }
          function eN(e) {
            var t, n;
            return (
              e < 100 && e >= 0
                ? ((n = Array.prototype.slice.call(arguments)),
                  (n[0] = e + 400),
                  isFinite((t = new Date(Date.UTC.apply(null, n))).getUTCFullYear()) && t.setUTCFullYear(e))
                : (t = new Date(Date.UTC.apply(null, arguments))),
              t
            );
          }
          function eP(e, t, n) {
            var r = 7 + t - n;
            return -((7 + eN(e, 0, r).getUTCDay() - t) % 7) + r - 1;
          }
          function eC(e, t, n, r, s) {
            var i,
              a,
              o = 1 + 7 * (t - 1) + ((7 + n - r) % 7) + eP(e, r, s);
            return (
              o <= 0 ? (a = eg((i = e - 1)) + o) : o > eg(e) ? ((i = e + 1), (a = o - eg(e))) : ((i = e), (a = o)),
              { year: i, dayOfYear: a }
            );
          }
          function eR(e, t, n) {
            var r,
              s,
              i = eP(e.year(), t, n),
              a = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
            return (
              a < 1
                ? (r = a + ej((s = e.year() - 1), t, n))
                : a > ej(e.year(), t, n)
                  ? ((r = a - ej(e.year(), t, n)), (s = e.year() + 1))
                  : ((s = e.year()), (r = a)),
              { week: r, year: s }
            );
          }
          function ej(e, t, n) {
            var r = eP(e, t, n),
              s = eP(e + 1, t, n);
            return (eg(e) - r + s) / 7;
          }
          function eE(e, t) {
            return e.slice(t, 7).concat(e.slice(0, t));
          }
          j('w', ['ww', 2], 'wo', 'week'),
            j('W', ['WW', 2], 'Wo', 'isoWeek'),
            eu('w', J, eo),
            eu('ww', J, q),
            eu('W', J, eo),
            eu('WW', J, q),
            ey(['w', 'ww', 'W', 'WW'], function (e, t, n, r) {
              t[r.substr(0, 1)] = eh(e);
            }),
            j('d', 0, 'do', 'day'),
            j('dd', 0, 0, function (e) {
              return this.localeData().weekdaysMin(this, e);
            }),
            j('ddd', 0, 0, function (e) {
              return this.localeData().weekdaysShort(this, e);
            }),
            j('dddd', 0, 0, function (e) {
              return this.localeData().weekdays(this, e);
            }),
            j('e', 0, 0, 'weekday'),
            j('E', 0, 0, 'isoWeekday'),
            eu('d', J),
            eu('e', J),
            eu('E', J),
            eu('dd', function (e, t) {
              return t.weekdaysMinRegex(e);
            }),
            eu('ddd', function (e, t) {
              return t.weekdaysShortRegex(e);
            }),
            eu('dddd', function (e, t) {
              return t.weekdaysRegex(e);
            }),
            ey(['dd', 'ddd', 'dddd'], function (e, t, n, r) {
              var s = n._locale.weekdaysParse(e, r, n._strict);
              null != s ? (t.d = s) : (h(n).invalidWeekday = e);
            }),
            ey(['d', 'e', 'E'], function (e, t, n, r) {
              t[r] = eh(e);
            });
          var eW = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
          function eU(e, t, n) {
            var r,
              s,
              i,
              a = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (
                r = 0, this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [];
                r < 7;
                ++r
              )
                (i = c([2e3, 1]).day(r)),
                  (this._minWeekdaysParse[r] = this.weekdaysMin(i, '').toLocaleLowerCase()),
                  (this._shortWeekdaysParse[r] = this.weekdaysShort(i, '').toLocaleLowerCase()),
                  (this._weekdaysParse[r] = this.weekdays(i, '').toLocaleLowerCase());
            return n
              ? 'dddd' === t
                ? -1 !== (s = eV.call(this._weekdaysParse, a))
                  ? s
                  : null
                : 'ddd' === t
                  ? -1 !== (s = eV.call(this._shortWeekdaysParse, a))
                    ? s
                    : null
                  : -1 !== (s = eV.call(this._minWeekdaysParse, a))
                    ? s
                    : null
              : 'dddd' === t
                ? -1 !== (s = eV.call(this._weekdaysParse, a)) || -1 !== (s = eV.call(this._shortWeekdaysParse, a))
                  ? s
                  : -1 !== (s = eV.call(this._minWeekdaysParse, a))
                    ? s
                    : null
                : 'ddd' === t
                  ? -1 !== (s = eV.call(this._shortWeekdaysParse, a)) || -1 !== (s = eV.call(this._weekdaysParse, a))
                    ? s
                    : -1 !== (s = eV.call(this._minWeekdaysParse, a))
                      ? s
                      : null
                  : -1 !== (s = eV.call(this._minWeekdaysParse, a)) || -1 !== (s = eV.call(this._weekdaysParse, a))
                    ? s
                    : -1 !== (s = eV.call(this._shortWeekdaysParse, a))
                      ? s
                      : null;
          }
          function eH() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              r,
              s,
              i,
              a = [],
              o = [],
              l = [],
              u = [];
            for (t = 0; t < 7; t++)
              (n = c([2e3, 1]).day(t)),
                (r = ed(this.weekdaysMin(n, ''))),
                (s = ed(this.weekdaysShort(n, ''))),
                (i = ed(this.weekdays(n, ''))),
                a.push(r),
                o.push(s),
                l.push(i),
                u.push(r),
                u.push(s),
                u.push(i);
            a.sort(e),
              o.sort(e),
              l.sort(e),
              u.sort(e),
              (this._weekdaysRegex = RegExp('^(' + u.join('|') + ')', 'i')),
              (this._weekdaysShortRegex = this._weekdaysRegex),
              (this._weekdaysMinRegex = this._weekdaysRegex),
              (this._weekdaysStrictRegex = RegExp('^(' + l.join('|') + ')', 'i')),
              (this._weekdaysShortStrictRegex = RegExp('^(' + o.join('|') + ')', 'i')),
              (this._weekdaysMinStrictRegex = RegExp('^(' + a.join('|') + ')', 'i'));
          }
          function eF() {
            return this.hours() % 12 || 12;
          }
          function eL(e, t) {
            j(e, 0, 0, function () {
              return this.localeData().meridiem(this.hours(), this.minutes(), t);
            });
          }
          function eA(e, t) {
            return t._meridiemParse;
          }
          j('H', ['HH', 2], 0, 'hour'),
            j('h', ['hh', 2], 0, eF),
            j('k', ['kk', 2], 0, function () {
              return this.hours() || 24;
            }),
            j('hmm', 0, 0, function () {
              return '' + eF.apply(this) + T(this.minutes(), 2);
            }),
            j('hmmss', 0, 0, function () {
              return '' + eF.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2);
            }),
            j('Hmm', 0, 0, function () {
              return '' + this.hours() + T(this.minutes(), 2);
            }),
            j('Hmmss', 0, 0, function () {
              return '' + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2);
            }),
            eL('a', !0),
            eL('A', !1),
            eu('a', eA),
            eu('A', eA),
            eu('H', J, el),
            eu('h', J, eo),
            eu('k', J, eo),
            eu('HH', J, q),
            eu('hh', J, q),
            eu('kk', J, q),
            eu('hmm', Q),
            eu('hmmss', X),
            eu('Hmm', Q),
            eu('Hmmss', X),
            em(['H', 'HH'], 3),
            em(['k', 'kk'], function (e, t, n) {
              var r = eh(e);
              t[3] = 24 === r ? 0 : r;
            }),
            em(['a', 'A'], function (e, t, n) {
              (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
            }),
            em(['h', 'hh'], function (e, t, n) {
              (t[3] = eh(e)), (h(n).bigHour = !0);
            }),
            em('hmm', function (e, t, n) {
              var r = e.length - 2;
              (t[3] = eh(e.substr(0, r))), (t[4] = eh(e.substr(r))), (h(n).bigHour = !0);
            }),
            em('hmmss', function (e, t, n) {
              var r = e.length - 4,
                s = e.length - 2;
              (t[3] = eh(e.substr(0, r))), (t[4] = eh(e.substr(r, 2))), (t[5] = eh(e.substr(s))), (h(n).bigHour = !0);
            }),
            em('Hmm', function (e, t, n) {
              var r = e.length - 2;
              (t[3] = eh(e.substr(0, r))), (t[4] = eh(e.substr(r)));
            }),
            em('Hmmss', function (e, t, n) {
              var r = e.length - 4,
                s = e.length - 2;
              (t[3] = eh(e.substr(0, r))), (t[4] = eh(e.substr(r, 2))), (t[5] = eh(e.substr(s)));
            });
          var eV,
            e$,
            eI = ew('Hours', !0),
            eG = {
              calendar: {
                sameDay: '[Today at] LT',
                nextDay: '[Tomorrow at] LT',
                nextWeek: 'dddd [at] LT',
                lastDay: '[Yesterday at] LT',
                lastWeek: '[Last] dddd [at] LT',
                sameElse: 'L',
              },
              longDateFormat: {
                LTS: 'h:mm:ss A',
                LT: 'h:mm A',
                L: 'MM/DD/YYYY',
                LL: 'MMMM D, YYYY',
                LLL: 'MMMM D, YYYY h:mm A',
                LLLL: 'dddd, MMMM D, YYYY h:mm A',
              },
              invalidDate: 'Invalid date',
              ordinal: '%d',
              dayOfMonthOrdinalParse: /\d{1,2}/,
              relativeTime: {
                future: 'in %s',
                past: '%s ago',
                s: 'a few seconds',
                ss: '%d seconds',
                m: 'a minute',
                mm: '%d minutes',
                h: 'an hour',
                hh: '%d hours',
                d: 'a day',
                dd: '%d days',
                w: 'a week',
                ww: '%d weeks',
                M: 'a month',
                MM: '%d months',
                y: 'a year',
                yy: '%d years',
              },
              months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_',
              ),
              monthsShort: ex,
              week: { dow: 0, doy: 6 },
              weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
              weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
              weekdaysShort: eW,
              meridiemParse: /[ap]\.?m?\.?/i,
            },
            eq = {},
            eZ = {};
          function ez(e) {
            return e ? e.toLowerCase().replace('_', '-') : e;
          }
          function eB(t) {
            var n = null;
            if (void 0 === eq[t] && e && e.exports && t && t.match('^[^/\\\\]*$'))
              try {
                (n = e$._abbr),
                  (function () {
                    var e = Error("Cannot find module 'undefined'");
                    throw ((e.code = 'MODULE_NOT_FOUND'), e);
                  })(),
                  eJ(n);
              } catch (e) {
                eq[t] = null;
              }
            return eq[t];
          }
          function eJ(e, t) {
            var n;
            return (
              e &&
                ((n = a(t) ? eX(e) : eQ(e, t))
                  ? (e$ = n)
                  : 'undefined' != typeof console &&
                    console.warn &&
                    console.warn('Locale ' + e + ' not found. Did you forget to load it?')),
              e$._abbr
            );
          }
          function eQ(e, t) {
            if (null === t) return delete eq[e], null;
            var n,
              r = eG;
            if (((t.abbr = e), null != eq[e]))
              D(
                'defineLocaleOverride',
                'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.',
              ),
                (r = eq[e]._config);
            else if (null != t.parentLocale) {
              if (null != eq[t.parentLocale]) r = eq[t.parentLocale]._config;
              else {
                if (null == (n = eB(t.parentLocale)))
                  return (
                    eZ[t.parentLocale] || (eZ[t.parentLocale] = []),
                    eZ[t.parentLocale].push({ name: e, config: t }),
                    null
                  );
                r = n._config;
              }
            }
            return (
              (eq[e] = new O(Y(r, t))),
              eZ[e] &&
                eZ[e].forEach(function (e) {
                  eQ(e.name, e.config);
                }),
              eJ(e),
              eq[e]
            );
          }
          function eX(e) {
            var t;
            if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)) return e$;
            if (!n(e)) {
              if ((t = eB(e))) return t;
              e = [e];
            }
            return (function (e) {
              for (var t, n, r, s, i = 0; i < e.length; ) {
                for (t = (s = ez(e[i]).split('-')).length, n = (n = ez(e[i + 1])) ? n.split('-') : null; t > 0; ) {
                  if ((r = eB(s.slice(0, t).join('-')))) return r;
                  if (
                    n &&
                    n.length >= t &&
                    (function (e, t) {
                      var n,
                        r = Math.min(e.length, t.length);
                      for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n;
                      return r;
                    })(s, n) >=
                      t - 1
                  )
                    break;
                  t--;
                }
                i++;
              }
              return e$;
            })(e);
          }
          function eK(e) {
            var t,
              n = e._a;
            return (
              n &&
                -2 === h(e).overflow &&
                ((t =
                  n[1] < 0 || n[1] > 11
                    ? 1
                    : n[2] < 1 || n[2] > eS(n[0], n[1])
                      ? 2
                      : n[3] < 0 || n[3] > 24 || (24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]))
                        ? 3
                        : n[4] < 0 || n[4] > 59
                          ? 4
                          : n[5] < 0 || n[5] > 59
                            ? 5
                            : n[6] < 0 || n[6] > 999
                              ? 6
                              : -1),
                h(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2),
                h(e)._overflowWeeks && -1 === t && (t = 7),
                h(e)._overflowWeekday && -1 === t && (t = 8),
                (h(e).overflow = t)),
              e
            );
          }
          var e0 =
              /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            e1 =
              /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            e2 = /Z|[+-]\d\d(?::?\d\d)?/,
            e4 = [
              ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
              ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
              ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
              ['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
              ['YYYY-DDD', /\d{4}-\d{3}/],
              ['YYYY-MM', /\d{4}-\d\d/, !1],
              ['YYYYYYMMDD', /[+-]\d{10}/],
              ['YYYYMMDD', /\d{8}/],
              ['GGGG[W]WWE', /\d{4}W\d{3}/],
              ['GGGG[W]WW', /\d{4}W\d{2}/, !1],
              ['YYYYDDD', /\d{7}/],
              ['YYYYMM', /\d{6}/, !1],
              ['YYYY', /\d{4}/, !1],
            ],
            e3 = [
              ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
              ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
              ['HH:mm:ss', /\d\d:\d\d:\d\d/],
              ['HH:mm', /\d\d:\d\d/],
              ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
              ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
              ['HHmmss', /\d\d\d\d\d\d/],
              ['HHmm', /\d\d\d\d/],
              ['HH', /\d\d/],
            ],
            e6 = /^\/?Date\((-?\d+)/i,
            e9 =
              /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            e5 = {
              UT: 0,
              GMT: 0,
              EDT: -240,
              EST: -300,
              CDT: -300,
              CST: -360,
              MDT: -360,
              MST: -420,
              PDT: -420,
              PST: -480,
            };
          function e7(e) {
            var t,
              n,
              r,
              s,
              i,
              a,
              o = e._i,
              l = e0.exec(o) || e1.exec(o),
              u = e4.length,
              d = e3.length;
            if (l) {
              for (t = 0, h(e).iso = !0, n = u; t < n; t++)
                if (e4[t][1].exec(l[1])) {
                  (s = e4[t][0]), (r = !1 !== e4[t][2]);
                  break;
                }
              if (null == s) {
                e._isValid = !1;
                return;
              }
              if (l[3]) {
                for (t = 0, n = d; t < n; t++)
                  if (e3[t][1].exec(l[3])) {
                    i = (l[2] || ' ') + e3[t][0];
                    break;
                  }
                if (null == i) {
                  e._isValid = !1;
                  return;
                }
              }
              if (!r && null != i) {
                e._isValid = !1;
                return;
              }
              if (l[4]) {
                if (e2.exec(l[4])) a = 'Z';
                else {
                  e._isValid = !1;
                  return;
                }
              }
              (e._f = s + (i || '') + (a || '')), tn(e);
            } else e._isValid = !1;
          }
          function e8(e) {
            var t,
              n,
              r,
              s,
              i,
              a,
              o,
              l,
              u,
              d = e9.exec(
                e._i
                  .replace(/\([^()]*\)|[\n\t]/g, ' ')
                  .replace(/(\s\s+)/g, ' ')
                  .replace(/^\s\s*/, '')
                  .replace(/\s\s*$/, ''),
              );
            if (d) {
              if (
                ((n = d[4]),
                (r = d[3]),
                (s = d[2]),
                (i = d[5]),
                (a = d[6]),
                (o = d[7]),
                (l = [
                  (t = parseInt(n, 10)) <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t,
                  ex.indexOf(r),
                  parseInt(s, 10),
                  parseInt(i, 10),
                  parseInt(a, 10),
                ]),
                o && l.push(parseInt(o, 10)),
                (u = d[1]) &&
                  eW.indexOf(u) !== new Date(l[0], l[1], l[2]).getDay() &&
                  ((h(e).weekdayMismatch = !0), (e._isValid = !1), 1))
              )
                return;
              (e._a = l),
                (e._tzm = (function (e, t, n) {
                  if (e) return e5[e];
                  if (t) return 0;
                  var r = parseInt(n, 10),
                    s = r % 100;
                  return ((r - s) / 100) * 60 + s;
                })(d[8], d[9], d[10])),
                (e._d = eN.apply(null, e._a)),
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                (h(e).rfc2822 = !0);
            } else e._isValid = !1;
          }
          function te(e, t, n) {
            return null != e ? e : null != t ? t : n;
          }
          function tt(e) {
            var n,
              r,
              s,
              i,
              a,
              o,
              l,
              u,
              d,
              c,
              f,
              m,
              y,
              _,
              g,
              p = [];
            if (!e._d) {
              for (
                c = new Date(t.now()),
                  y = e._useUTC
                    ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()]
                    : [c.getFullYear(), c.getMonth(), c.getDate()],
                  e._w &&
                    null == e._a[2] &&
                    null == e._a[1] &&
                    (null != (n = e._w).GG || null != n.W || null != n.E
                      ? ((a = 1),
                        (o = 4),
                        (r = te(n.GG, e._a[0], eR(ti(), 1, 4).year)),
                        (s = te(n.W, 1)),
                        ((i = te(n.E, 1)) < 1 || i > 7) && (u = !0))
                      : ((a = e._locale._week.dow),
                        (o = e._locale._week.doy),
                        (d = eR(ti(), a, o)),
                        (r = te(n.gg, e._a[0], d.year)),
                        (s = te(n.w, d.week)),
                        null != n.d
                          ? ((i = n.d) < 0 || i > 6) && (u = !0)
                          : null != n.e
                            ? ((i = n.e + a), (n.e < 0 || n.e > 6) && (u = !0))
                            : (i = a)),
                    s < 1 || s > ej(r, a, o)
                      ? (h(e)._overflowWeeks = !0)
                      : null != u
                        ? (h(e)._overflowWeekday = !0)
                        : ((l = eC(r, s, i, a, o)), (e._a[0] = l.year), (e._dayOfYear = l.dayOfYear))),
                  null != e._dayOfYear &&
                    ((g = te(e._a[0], y[0])),
                    (e._dayOfYear > eg(g) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0),
                    (m = eN(g, 0, e._dayOfYear)),
                    (e._a[1] = m.getUTCMonth()),
                    (e._a[2] = m.getUTCDate())),
                  f = 0;
                f < 3 && null == e._a[f];
                ++f
              )
                e._a[f] = p[f] = y[f];
              for (; f < 7; f++) e._a[f] = p[f] = null == e._a[f] ? (2 === f ? 1 : 0) : e._a[f];
              24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && ((e._nextDay = !0), (e._a[3] = 0)),
                (e._d = (e._useUTC ? eN : eT).apply(null, p)),
                (_ = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
                null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[3] = 24),
                e._w && void 0 !== e._w.d && e._w.d !== _ && (h(e).weekdayMismatch = !0);
            }
          }
          function tn(e) {
            if (e._f === t.ISO_8601) {
              e7(e);
              return;
            }
            if (e._f === t.RFC_2822) {
              e8(e);
              return;
            }
            (e._a = []), (h(e).empty = !0);
            var n,
              r,
              i,
              a,
              o,
              l,
              u,
              d,
              c,
              f,
              m,
              y = '' + e._i,
              _ = y.length,
              g = 0;
            for (o = 0, m = (u = W(e._f, e._locale).match(N) || []).length; o < m; o++)
              ((d = u[o]),
              (l = (y.match(
                s($, d)
                  ? $[d](e._strict, e._locale)
                  : new RegExp(
                      ed(
                        d.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, r, s) {
                          return t || n || r || s;
                        }),
                      ),
                    ),
              ) || [])[0]) &&
                ((c = y.substr(0, y.indexOf(l))).length > 0 && h(e).unusedInput.push(c),
                (y = y.slice(y.indexOf(l) + l.length)),
                (g += l.length)),
              R[d])
                ? (l ? (h(e).empty = !1) : h(e).unusedTokens.push(d), null != l && s(ef, d) && ef[d](l, e._a, e, d))
                : e._strict && !l && h(e).unusedTokens.push(d);
            (h(e).charsLeftOver = _ - g),
              y.length > 0 && h(e).unusedInput.push(y),
              e._a[3] <= 12 && !0 === h(e).bigHour && e._a[3] > 0 && (h(e).bigHour = void 0),
              (h(e).parsedDateParts = e._a.slice(0)),
              (h(e).meridiem = e._meridiem),
              (e._a[3] =
                ((n = e._locale),
                (r = e._a[3]),
                null == (i = e._meridiem)
                  ? r
                  : null != n.meridiemHour
                    ? n.meridiemHour(r, i)
                    : (null != n.isPM && ((a = n.isPM(i)) && r < 12 && (r += 12), a || 12 !== r || (r = 0)), r))),
              null !== (f = h(e).era) && (e._a[0] = e._locale.erasConvertYear(f, e._a[0])),
              tt(e),
              eK(e);
          }
          function tr(e) {
            var s,
              i = e._i,
              c = e._f;
            return ((e._locale = e._locale || eX(e._l)), null === i || (void 0 === c && '' === i))
              ? m({ nullInput: !0 })
              : ('string' == typeof i && (e._i = i = e._locale.preparse(i)), k(i))
                ? new v(eK(i))
                : (l(i)
                    ? (e._d = i)
                    : n(c)
                      ? (function (e) {
                          var t,
                            n,
                            r,
                            s,
                            i,
                            a,
                            o = !1,
                            l = e._f.length;
                          if (0 === l) {
                            (h(e).invalidFormat = !0), (e._d = new Date(NaN));
                            return;
                          }
                          for (s = 0; s < l; s++)
                            (i = 0),
                              (a = !1),
                              (t = w({}, e)),
                              null != e._useUTC && (t._useUTC = e._useUTC),
                              (t._f = e._f[s]),
                              tn(t),
                              f(t) && (a = !0),
                              (i += h(t).charsLeftOver + 10 * h(t).unusedTokens.length),
                              (h(t).score = i),
                              o
                                ? i < r && ((r = i), (n = t))
                                : (null == r || i < r || a) && ((r = i), (n = t), a && (o = !0));
                          d(e, n || t);
                        })(e)
                      : c
                        ? tn(e)
                        : a((s = e._i))
                          ? (e._d = new Date(t.now()))
                          : l(s)
                            ? (e._d = new Date(s.valueOf()))
                            : 'string' == typeof s
                              ? (function (e) {
                                  var n = e6.exec(e._i);
                                  if (null !== n) {
                                    e._d = new Date(+n[1]);
                                    return;
                                  }
                                  e7(e),
                                    !1 === e._isValid &&
                                      (delete e._isValid,
                                      e8(e),
                                      !1 === e._isValid &&
                                        (delete e._isValid,
                                        e._strict ? (e._isValid = !1) : t.createFromInputFallback(e)));
                                })(e)
                              : n(s)
                                ? ((e._a = u(s.slice(0), function (e) {
                                    return parseInt(e, 10);
                                  })),
                                  tt(e))
                                : r(s)
                                  ? (function (e) {
                                      if (!e._d) {
                                        var t = F(e._i),
                                          n = void 0 === t.day ? t.date : t.day;
                                        (e._a = u(
                                          [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
                                          function (e) {
                                            return e && parseInt(e, 10);
                                          },
                                        )),
                                          tt(e);
                                      }
                                    })(e)
                                  : o(s)
                                    ? (e._d = new Date(s))
                                    : t.createFromInputFallback(e),
                  f(e) || (e._d = null),
                  e);
          }
          function ts(e, t, s, a, o) {
            var l,
              u = {};
            return (
              (!0 === t || !1 === t) && ((a = t), (t = void 0)),
              (!0 === s || !1 === s) && ((a = s), (s = void 0)),
              ((r(e) && i(e)) || (n(e) && 0 === e.length)) && (e = void 0),
              (u._isAMomentObject = !0),
              (u._useUTC = u._isUTC = o),
              (u._l = s),
              (u._i = e),
              (u._f = t),
              (u._strict = a),
              (l = new v(eK(tr(u))))._nextDay && (l.add(1, 'd'), (l._nextDay = void 0)),
              l
            );
          }
          function ti(e, t, n, r) {
            return ts(e, t, n, r, !1);
          }
          (t.createFromInputFallback = x(
            'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
            function (e) {
              e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''));
            },
          )),
            (t.ISO_8601 = function () {}),
            (t.RFC_2822 = function () {});
          var ta = x(
              'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
              function () {
                var e = ti.apply(null, arguments);
                return this.isValid() && e.isValid() ? (e < this ? this : e) : m();
              },
            ),
            to = x(
              'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
              function () {
                var e = ti.apply(null, arguments);
                return this.isValid() && e.isValid() ? (e > this ? this : e) : m();
              },
            );
          function tl(e, t) {
            var r, s;
            if ((1 === t.length && n(t[0]) && (t = t[0]), !t.length)) return ti();
            for (s = 1, r = t[0]; s < t.length; ++s) (!t[s].isValid() || t[s][e](r)) && (r = t[s]);
            return r;
          }
          var tu = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];
          function td(e) {
            var t = F(e),
              n = t.year || 0,
              r = t.quarter || 0,
              i = t.month || 0,
              a = t.week || t.isoWeek || 0,
              o = t.day || 0,
              l = t.hour || 0,
              u = t.minute || 0,
              d = t.second || 0,
              c = t.millisecond || 0;
            (this._isValid = (function (e) {
              var t,
                n,
                r = !1,
                i = tu.length;
              for (t in e) if (s(e, t) && !(-1 !== eV.call(tu, t) && (null == e[t] || !isNaN(e[t])))) return !1;
              for (n = 0; n < i; ++n)
                if (e[tu[n]]) {
                  if (r) return !1;
                  parseFloat(e[tu[n]]) !== eh(e[tu[n]]) && (r = !0);
                }
              return !0;
            })(t)),
              (this._milliseconds = +c + 1e3 * d + 6e4 * u + 36e5 * l),
              (this._days = +o + 7 * a),
              (this._months = +i + 3 * r + 12 * n),
              (this._data = {}),
              (this._locale = eX()),
              this._bubble();
          }
          function tc(e) {
            return e instanceof td;
          }
          function th(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
          }
          function tf(e, t) {
            j(e, 0, 0, function () {
              var e = this.utcOffset(),
                n = '+';
              return e < 0 && ((e = -e), (n = '-')), n + T(~~(e / 60), 2) + t + T(~~e % 60, 2);
            });
          }
          tf('Z', ':'),
            tf('ZZ', ''),
            eu('Z', ei),
            eu('ZZ', ei),
            em(['Z', 'ZZ'], function (e, t, n) {
              (n._useUTC = !0), (n._tzm = ty(ei, e));
            });
          var tm = /([\+\-]|\d\d)/gi;
          function ty(e, t) {
            var n,
              r,
              s = (t || '').match(e);
            return null === s
              ? null
              : 0 === (r = +(60 * (n = ((s[s.length - 1] || []) + '').match(tm) || ['-', 0, 0])[1]) + eh(n[2]))
                ? 0
                : '+' === n[0]
                  ? r
                  : -r;
          }
          function t_(e, n) {
            var r, s;
            return n._isUTC
              ? ((r = n.clone()),
                (s = (k(e) || l(e) ? e.valueOf() : ti(e).valueOf()) - r.valueOf()),
                r._d.setTime(r._d.valueOf() + s),
                t.updateOffset(r, !1),
                r)
              : ti(e).local();
          }
          function tg(e) {
            return -Math.round(e._d.getTimezoneOffset());
          }
          function tp() {
            return !!this.isValid() && this._isUTC && 0 === this._offset;
          }
          t.updateOffset = function () {};
          var tw = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
            tv =
              /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
          function tk(e, t) {
            var n,
              r,
              i,
              a,
              l,
              u,
              d = e,
              c = null;
            return (
              tc(e)
                ? (d = { ms: e._milliseconds, d: e._days, M: e._months })
                : o(e) || !isNaN(+e)
                  ? ((d = {}), t ? (d[t] = +e) : (d.milliseconds = +e))
                  : (c = tw.exec(e))
                    ? ((a = '-' === c[1] ? -1 : 1),
                      (d = {
                        y: 0,
                        d: eh(c[2]) * a,
                        h: eh(c[3]) * a,
                        m: eh(c[4]) * a,
                        s: eh(c[5]) * a,
                        ms: eh(th(1e3 * c[6])) * a,
                      }))
                    : (c = tv.exec(e))
                      ? ((a = '-' === c[1] ? -1 : 1),
                        (d = {
                          y: tS(c[2], a),
                          M: tS(c[3], a),
                          w: tS(c[4], a),
                          d: tS(c[5], a),
                          h: tS(c[6], a),
                          m: tS(c[7], a),
                          s: tS(c[8], a),
                        }))
                      : null == d
                        ? (d = {})
                        : 'object' == typeof d &&
                          ('from' in d || 'to' in d) &&
                          ((n = ti(d.from)),
                          (r = ti(d.to)),
                          (u =
                            n.isValid() && r.isValid()
                              ? ((r = t_(r, n)),
                                n.isBefore(r)
                                  ? (i = tx(n, r))
                                  : (((i = tx(r, n)).milliseconds = -i.milliseconds), (i.months = -i.months)),
                                i)
                              : { milliseconds: 0, months: 0 }),
                          ((d = {}).ms = u.milliseconds),
                          (d.M = u.months)),
              (l = new td(d)),
              tc(e) && s(e, '_locale') && (l._locale = e._locale),
              tc(e) && s(e, '_isValid') && (l._isValid = e._isValid),
              l
            );
          }
          function tS(e, t) {
            var n = e && parseFloat(e.replace(',', '.'));
            return (isNaN(n) ? 0 : n) * t;
          }
          function tx(e, t) {
            var n = {};
            return (
              (n.months = t.month() - e.month() + (t.year() - e.year()) * 12),
              e.clone().add(n.months, 'M').isAfter(t) && --n.months,
              (n.milliseconds = +t - +e.clone().add(n.months, 'M')),
              n
            );
          }
          function tM(e, t) {
            return function (n, r) {
              var s;
              return (
                null === r ||
                  isNaN(+r) ||
                  (D(
                    t,
                    'moment().' +
                      t +
                      '(period, number) is deprecated. Please use moment().' +
                      t +
                      '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.',
                  ),
                  (s = n),
                  (n = r),
                  (r = s)),
                tD(this, tk(n, r), e),
                this
              );
            };
          }
          function tD(e, n, r, s) {
            var i = n._milliseconds,
              a = th(n._days),
              o = th(n._months);
            e.isValid() &&
              ((s = null == s || s),
              o && eb(e, ev(e, 'Month') + o * r),
              a && ek(e, 'Date', ev(e, 'Date') + a * r),
              i && e._d.setTime(e._d.valueOf() + i * r),
              s && t.updateOffset(e, a || o));
          }
          (tk.fn = td.prototype),
            (tk.invalid = function () {
              return tk(NaN);
            });
          var tb = tM(1, 'add'),
            tY = tM(-1, 'subtract');
          function tO(e) {
            return 'string' == typeof e || e instanceof String;
          }
          function tT(e, t) {
            if (e.date() < t.date()) return -tT(t, e);
            var n,
              r = (t.year() - e.year()) * 12 + (t.month() - e.month()),
              s = e.clone().add(r, 'months');
            return (
              (n =
                t - s < 0
                  ? (t - s) / (s - e.clone().add(r - 1, 'months'))
                  : (t - s) / (e.clone().add(r + 1, 'months') - s)),
              -(r + n) || 0
            );
          }
          function tN(e) {
            var t;
            return void 0 === e ? this._locale._abbr : (null != (t = eX(e)) && (this._locale = t), this);
          }
          (t.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'), (t.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]');
          var tP = x(
            'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
            function (e) {
              return void 0 === e ? this.localeData() : this.locale(e);
            },
          );
          function tC() {
            return this._locale;
          }
          function tR(e, t, n) {
            return e < 100 && e >= 0 ? new Date(e + 400, t, n) - 126227808e5 : new Date(e, t, n).valueOf();
          }
          function tj(e, t, n) {
            return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - 126227808e5 : Date.UTC(e, t, n);
          }
          function tE(e, t) {
            return t.erasAbbrRegex(e);
          }
          function tW() {
            var e,
              t,
              n,
              r,
              s,
              i = [],
              a = [],
              o = [],
              l = [],
              u = this.eras();
            for (e = 0, t = u.length; e < t; ++e)
              (n = ed(u[e].name)),
                (r = ed(u[e].abbr)),
                (s = ed(u[e].narrow)),
                a.push(n),
                i.push(r),
                o.push(s),
                l.push(n),
                l.push(r),
                l.push(s);
            (this._erasRegex = RegExp('^(' + l.join('|') + ')', 'i')),
              (this._erasNameRegex = RegExp('^(' + a.join('|') + ')', 'i')),
              (this._erasAbbrRegex = RegExp('^(' + i.join('|') + ')', 'i')),
              (this._erasNarrowRegex = RegExp('^(' + o.join('|') + ')', 'i'));
          }
          function tU(e, t) {
            j(0, [e, e.length], 0, t);
          }
          function tH(e, t, n, r, s) {
            var i;
            return null == e ? eR(this, r, s).year : (t > (i = ej(e, r, s)) && (t = i), tF.call(this, e, t, n, r, s));
          }
          function tF(e, t, n, r, s) {
            var i = eC(e, t, n, r, s),
              a = eN(i.year, 0, i.dayOfYear);
            return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
          }
          j('N', 0, 0, 'eraAbbr'),
            j('NN', 0, 0, 'eraAbbr'),
            j('NNN', 0, 0, 'eraAbbr'),
            j('NNNN', 0, 0, 'eraName'),
            j('NNNNN', 0, 0, 'eraNarrow'),
            j('y', ['y', 1], 'yo', 'eraYear'),
            j('y', ['yy', 2], 0, 'eraYear'),
            j('y', ['yyy', 3], 0, 'eraYear'),
            j('y', ['yyyy', 4], 0, 'eraYear'),
            eu('N', tE),
            eu('NN', tE),
            eu('NNN', tE),
            eu('NNNN', function (e, t) {
              return t.erasNameRegex(e);
            }),
            eu('NNNNN', function (e, t) {
              return t.erasNarrowRegex(e);
            }),
            em(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (e, t, n, r) {
              var s = n._locale.erasParse(e, r, n._strict);
              s ? (h(n).era = s) : (h(n).invalidEra = e);
            }),
            eu('y', en),
            eu('yy', en),
            eu('yyy', en),
            eu('yyyy', en),
            eu('yo', function (e, t) {
              return t._eraYearOrdinalRegex || en;
            }),
            em(['y', 'yy', 'yyy', 'yyyy'], 0),
            em(['yo'], function (e, t, n, r) {
              var s;
              n._locale._eraYearOrdinalRegex && (s = e.match(n._locale._eraYearOrdinalRegex)),
                n._locale.eraYearOrdinalParse ? (t[0] = n._locale.eraYearOrdinalParse(e, s)) : (t[0] = parseInt(e, 10));
            }),
            j(0, ['gg', 2], 0, function () {
              return this.weekYear() % 100;
            }),
            j(0, ['GG', 2], 0, function () {
              return this.isoWeekYear() % 100;
            }),
            tU('gggg', 'weekYear'),
            tU('ggggg', 'weekYear'),
            tU('GGGG', 'isoWeekYear'),
            tU('GGGGG', 'isoWeekYear'),
            eu('G', er),
            eu('g', er),
            eu('GG', J, q),
            eu('gg', J, q),
            eu('GGGG', ee, z),
            eu('gggg', ee, z),
            eu('GGGGG', et, B),
            eu('ggggg', et, B),
            ey(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (e, t, n, r) {
              t[r.substr(0, 2)] = eh(e);
            }),
            ey(['gg', 'GG'], function (e, n, r, s) {
              n[s] = t.parseTwoDigitYear(e);
            }),
            j('Q', 0, 'Qo', 'quarter'),
            eu('Q', G),
            em('Q', function (e, t) {
              t[1] = (eh(e) - 1) * 3;
            }),
            j('D', ['DD', 2], 'Do', 'date'),
            eu('D', J, eo),
            eu('DD', J, q),
            eu('Do', function (e, t) {
              return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
            }),
            em(['D', 'DD'], 2),
            em('Do', function (e, t) {
              t[2] = eh(e.match(J)[0]);
            });
          var tL = ew('Date', !0);
          j('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
            eu('DDD', K),
            eu('DDDD', Z),
            em(['DDD', 'DDDD'], function (e, t, n) {
              n._dayOfYear = eh(e);
            }),
            j('m', ['mm', 2], 0, 'minute'),
            eu('m', J, el),
            eu('mm', J, q),
            em(['m', 'mm'], 4);
          var tA = ew('Minutes', !1);
          j('s', ['ss', 2], 0, 'second'), eu('s', J, el), eu('ss', J, q), em(['s', 'ss'], 5);
          var tV = ew('Seconds', !1);
          for (
            j('S', 0, 0, function () {
              return ~~(this.millisecond() / 100);
            }),
              j(0, ['SS', 2], 0, function () {
                return ~~(this.millisecond() / 10);
              }),
              j(0, ['SSS', 3], 0, 'millisecond'),
              j(0, ['SSSS', 4], 0, function () {
                return 10 * this.millisecond();
              }),
              j(0, ['SSSSS', 5], 0, function () {
                return 100 * this.millisecond();
              }),
              j(0, ['SSSSSS', 6], 0, function () {
                return 1e3 * this.millisecond();
              }),
              j(0, ['SSSSSSS', 7], 0, function () {
                return 1e4 * this.millisecond();
              }),
              j(0, ['SSSSSSSS', 8], 0, function () {
                return 1e5 * this.millisecond();
              }),
              j(0, ['SSSSSSSSS', 9], 0, function () {
                return 1e6 * this.millisecond();
              }),
              eu('S', K, G),
              eu('SS', K, q),
              eu('SSS', K, Z),
              y = 'SSSS';
            y.length <= 9;
            y += 'S'
          )
            eu(y, en);
          function t$(e, t) {
            t[6] = eh(('0.' + e) * 1e3);
          }
          for (y = 'S'; y.length <= 9; y += 'S') em(y, t$);
          (_ = ew('Milliseconds', !1)), j('z', 0, 0, 'zoneAbbr'), j('zz', 0, 0, 'zoneName');
          var tI = v.prototype;
          function tG(e) {
            return e;
          }
          (tI.add = tb),
            (tI.calendar = function (e, a) {
              if (1 == arguments.length) {
                if (arguments[0]) {
                  var u, d, c;
                  ((u = arguments[0]),
                  k(u) ||
                    l(u) ||
                    tO(u) ||
                    o(u) ||
                    ((d = n(u)),
                    (c = !1),
                    d &&
                      (c =
                        0 ===
                        u.filter(function (e) {
                          return !o(e) && tO(u);
                        }).length),
                    d && c) ||
                    (function (e) {
                      var t,
                        n,
                        a = r(e) && !i(e),
                        o = !1,
                        l = [
                          'years',
                          'year',
                          'y',
                          'months',
                          'month',
                          'M',
                          'days',
                          'day',
                          'd',
                          'dates',
                          'date',
                          'D',
                          'hours',
                          'hour',
                          'h',
                          'minutes',
                          'minute',
                          'm',
                          'seconds',
                          'second',
                          's',
                          'milliseconds',
                          'millisecond',
                          'ms',
                        ],
                        u = l.length;
                      for (t = 0; t < u; t += 1) (n = l[t]), (o = o || s(e, n));
                      return a && o;
                    })(u) ||
                    null == u)
                    ? ((e = arguments[0]), (a = void 0))
                    : (function (e) {
                        var t,
                          n,
                          a = r(e) && !i(e),
                          o = !1,
                          l = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'];
                        for (t = 0; t < l.length; t += 1) (n = l[t]), (o = o || s(e, n));
                        return a && o;
                      })(arguments[0]) && ((a = arguments[0]), (e = void 0));
                } else (e = void 0), (a = void 0);
              }
              var h = e || ti(),
                f = t_(h, this).startOf('day'),
                m = t.calendarFormat(this, f) || 'sameElse',
                y = a && (b(a[m]) ? a[m].call(this, h) : a[m]);
              return this.format(y || this.localeData().calendar(m, this, ti(h)));
            }),
            (tI.clone = function () {
              return new v(this);
            }),
            (tI.diff = function (e, t, n) {
              var r, s, i;
              if (!this.isValid() || !(r = t_(e, this)).isValid()) return NaN;
              switch (((s = (r.utcOffset() - this.utcOffset()) * 6e4), (t = H(t)))) {
                case 'year':
                  i = tT(this, r) / 12;
                  break;
                case 'month':
                  i = tT(this, r);
                  break;
                case 'quarter':
                  i = tT(this, r) / 3;
                  break;
                case 'second':
                  i = (this - r) / 1e3;
                  break;
                case 'minute':
                  i = (this - r) / 6e4;
                  break;
                case 'hour':
                  i = (this - r) / 36e5;
                  break;
                case 'day':
                  i = (this - r - s) / 864e5;
                  break;
                case 'week':
                  i = (this - r - s) / 6048e5;
                  break;
                default:
                  i = this - r;
              }
              return n ? i : ec(i);
            }),
            (tI.endOf = function (e) {
              var n, r;
              if (void 0 === (e = H(e)) || 'millisecond' === e || !this.isValid()) return this;
              switch (((r = this._isUTC ? tj : tR), e)) {
                case 'year':
                  n = r(this.year() + 1, 0, 1) - 1;
                  break;
                case 'quarter':
                  n = r(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
                  break;
                case 'month':
                  n = r(this.year(), this.month() + 1, 1) - 1;
                  break;
                case 'week':
                  n = r(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                  break;
                case 'isoWeek':
                  n = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                  break;
                case 'day':
                case 'date':
                  n = r(this.year(), this.month(), this.date() + 1) - 1;
                  break;
                case 'hour':
                  (n = this._d.valueOf()),
                    (n += 36e5 - ((((n + (this._isUTC ? 0 : 6e4 * this.utcOffset())) % 36e5) + 36e5) % 36e5) - 1);
                  break;
                case 'minute':
                  (n = this._d.valueOf()), (n += 6e4 - (((n % 6e4) + 6e4) % 6e4) - 1);
                  break;
                case 'second':
                  (n = this._d.valueOf()), (n += 1e3 - (((n % 1e3) + 1e3) % 1e3) - 1);
              }
              return this._d.setTime(n), t.updateOffset(this, !0), this;
            }),
            (tI.format = function (e) {
              e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
              var n = E(this, e);
              return this.localeData().postformat(n);
            }),
            (tI.from = function (e, t) {
              return this.isValid() && ((k(e) && e.isValid()) || ti(e).isValid())
                ? tk({ to: this, from: e }).locale(this.locale()).humanize(!t)
                : this.localeData().invalidDate();
            }),
            (tI.fromNow = function (e) {
              return this.from(ti(), e);
            }),
            (tI.to = function (e, t) {
              return this.isValid() && ((k(e) && e.isValid()) || ti(e).isValid())
                ? tk({ from: this, to: e }).locale(this.locale()).humanize(!t)
                : this.localeData().invalidDate();
            }),
            (tI.toNow = function (e) {
              return this.to(ti(), e);
            }),
            (tI.get = function (e) {
              return b(this[(e = H(e))]) ? this[e]() : this;
            }),
            (tI.invalidAt = function () {
              return h(this).overflow;
            }),
            (tI.isAfter = function (e, t) {
              var n = k(e) ? e : ti(e);
              return (
                !!(this.isValid() && n.isValid()) &&
                ('millisecond' === (t = H(t) || 'millisecond')
                  ? this.valueOf() > n.valueOf()
                  : n.valueOf() < this.clone().startOf(t).valueOf())
              );
            }),
            (tI.isBefore = function (e, t) {
              var n = k(e) ? e : ti(e);
              return (
                !!(this.isValid() && n.isValid()) &&
                ('millisecond' === (t = H(t) || 'millisecond')
                  ? this.valueOf() < n.valueOf()
                  : this.clone().endOf(t).valueOf() < n.valueOf())
              );
            }),
            (tI.isBetween = function (e, t, n, r) {
              var s = k(e) ? e : ti(e),
                i = k(t) ? t : ti(t);
              return (
                !!(this.isValid() && s.isValid() && i.isValid()) &&
                ('(' === (r = r || '()')[0] ? this.isAfter(s, n) : !this.isBefore(s, n)) &&
                (')' === r[1] ? this.isBefore(i, n) : !this.isAfter(i, n))
              );
            }),
            (tI.isSame = function (e, t) {
              var n,
                r = k(e) ? e : ti(e);
              return (
                !!(this.isValid() && r.isValid()) &&
                ('millisecond' === (t = H(t) || 'millisecond')
                  ? this.valueOf() === r.valueOf()
                  : ((n = r.valueOf()), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
              );
            }),
            (tI.isSameOrAfter = function (e, t) {
              return this.isSame(e, t) || this.isAfter(e, t);
            }),
            (tI.isSameOrBefore = function (e, t) {
              return this.isSame(e, t) || this.isBefore(e, t);
            }),
            (tI.isValid = function () {
              return f(this);
            }),
            (tI.lang = tP),
            (tI.locale = tN),
            (tI.localeData = tC),
            (tI.max = to),
            (tI.min = ta),
            (tI.parsingFlags = function () {
              return d({}, h(this));
            }),
            (tI.set = function (e, t) {
              if ('object' == typeof e) {
                var n,
                  r = (function (e) {
                    var t,
                      n = [];
                    for (t in e) s(e, t) && n.push({ unit: t, priority: I[t] });
                    return (
                      n.sort(function (e, t) {
                        return e.priority - t.priority;
                      }),
                      n
                    );
                  })((e = F(e))),
                  i = r.length;
                for (n = 0; n < i; n++) this[r[n].unit](e[r[n].unit]);
              } else if (b(this[(e = H(e))])) return this[e](t);
              return this;
            }),
            (tI.startOf = function (e) {
              var n, r;
              if (void 0 === (e = H(e)) || 'millisecond' === e || !this.isValid()) return this;
              switch (((r = this._isUTC ? tj : tR), e)) {
                case 'year':
                  n = r(this.year(), 0, 1);
                  break;
                case 'quarter':
                  n = r(this.year(), this.month() - (this.month() % 3), 1);
                  break;
                case 'month':
                  n = r(this.year(), this.month(), 1);
                  break;
                case 'week':
                  n = r(this.year(), this.month(), this.date() - this.weekday());
                  break;
                case 'isoWeek':
                  n = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                  break;
                case 'day':
                case 'date':
                  n = r(this.year(), this.month(), this.date());
                  break;
                case 'hour':
                  (n = this._d.valueOf()),
                    (n -= (((n + (this._isUTC ? 0 : 6e4 * this.utcOffset())) % 36e5) + 36e5) % 36e5);
                  break;
                case 'minute':
                  (n = this._d.valueOf()), (n -= ((n % 6e4) + 6e4) % 6e4);
                  break;
                case 'second':
                  (n = this._d.valueOf()), (n -= ((n % 1e3) + 1e3) % 1e3);
              }
              return this._d.setTime(n), t.updateOffset(this, !0), this;
            }),
            (tI.subtract = tY),
            (tI.toArray = function () {
              return [
                this.year(),
                this.month(),
                this.date(),
                this.hour(),
                this.minute(),
                this.second(),
                this.millisecond(),
              ];
            }),
            (tI.toObject = function () {
              return {
                years: this.year(),
                months: this.month(),
                date: this.date(),
                hours: this.hours(),
                minutes: this.minutes(),
                seconds: this.seconds(),
                milliseconds: this.milliseconds(),
              };
            }),
            (tI.toDate = function () {
              return new Date(this.valueOf());
            }),
            (tI.toISOString = function (e) {
              if (!this.isValid()) return null;
              var t = !0 !== e,
                n = t ? this.clone().utc() : this;
              return 0 > n.year() || n.year() > 9999
                ? E(n, t ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ')
                : b(Date.prototype.toISOString)
                  ? t
                    ? this.toDate().toISOString()
                    : new Date(this.valueOf() + 6e4 * this.utcOffset()).toISOString().replace('Z', E(n, 'Z'))
                  : E(n, t ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
            }),
            (tI.inspect = function () {
              if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)';
              var e,
                t,
                n,
                r = 'moment',
                s = '';
              return (
                this.isLocal() || ((r = 0 === this.utcOffset() ? 'moment.utc' : 'moment.parseZone'), (s = 'Z')),
                (e = '[' + r + '("]'),
                (t = 0 <= this.year() && 9999 >= this.year() ? 'YYYY' : 'YYYYYY'),
                (n = s + '[")]'),
                this.format(e + t + '-MM-DD[T]HH:mm:ss.SSS' + n)
              );
            }),
            'undefined' != typeof Symbol &&
              null != Symbol.for &&
              (tI[Symbol.for('nodejs.util.inspect.custom')] = function () {
                return 'Moment<' + this.format() + '>';
              }),
            (tI.toJSON = function () {
              return this.isValid() ? this.toISOString() : null;
            }),
            (tI.toString = function () {
              return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
            }),
            (tI.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (tI.valueOf = function () {
              return this._d.valueOf() - 6e4 * (this._offset || 0);
            }),
            (tI.creationData = function () {
              return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict,
              };
            }),
            (tI.eraName = function () {
              var e,
                t,
                n,
                r = this.localeData().eras();
              for (e = 0, t = r.length; e < t; ++e)
                if (
                  ((n = this.clone().startOf('day').valueOf()),
                  (r[e].since <= n && n <= r[e].until) || (r[e].until <= n && n <= r[e].since))
                )
                  return r[e].name;
              return '';
            }),
            (tI.eraNarrow = function () {
              var e,
                t,
                n,
                r = this.localeData().eras();
              for (e = 0, t = r.length; e < t; ++e)
                if (
                  ((n = this.clone().startOf('day').valueOf()),
                  (r[e].since <= n && n <= r[e].until) || (r[e].until <= n && n <= r[e].since))
                )
                  return r[e].narrow;
              return '';
            }),
            (tI.eraAbbr = function () {
              var e,
                t,
                n,
                r = this.localeData().eras();
              for (e = 0, t = r.length; e < t; ++e)
                if (
                  ((n = this.clone().startOf('day').valueOf()),
                  (r[e].since <= n && n <= r[e].until) || (r[e].until <= n && n <= r[e].since))
                )
                  return r[e].abbr;
              return '';
            }),
            (tI.eraYear = function () {
              var e,
                n,
                r,
                s,
                i = this.localeData().eras();
              for (e = 0, n = i.length; e < n; ++e)
                if (
                  ((r = i[e].since <= i[e].until ? 1 : -1),
                  (s = this.clone().startOf('day').valueOf()),
                  (i[e].since <= s && s <= i[e].until) || (i[e].until <= s && s <= i[e].since))
                )
                  return (this.year() - t(i[e].since).year()) * r + i[e].offset;
              return this.year();
            }),
            (tI.year = ep),
            (tI.isLeapYear = function () {
              return e_(this.year());
            }),
            (tI.weekYear = function (e) {
              return tH.call(
                this,
                e,
                this.week(),
                this.weekday() + this.localeData()._week.dow,
                this.localeData()._week.dow,
                this.localeData()._week.doy,
              );
            }),
            (tI.isoWeekYear = function (e) {
              return tH.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
            }),
            (tI.quarter = tI.quarters =
              function (e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + (this.month() % 3));
              }),
            (tI.month = eY),
            (tI.daysInMonth = function () {
              return eS(this.year(), this.month());
            }),
            (tI.week = tI.weeks =
              function (e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add((e - t) * 7, 'd');
              }),
            (tI.isoWeek = tI.isoWeeks =
              function (e) {
                var t = eR(this, 1, 4).week;
                return null == e ? t : this.add((e - t) * 7, 'd');
              }),
            (tI.weeksInYear = function () {
              var e = this.localeData()._week;
              return ej(this.year(), e.dow, e.doy);
            }),
            (tI.weeksInWeekYear = function () {
              var e = this.localeData()._week;
              return ej(this.weekYear(), e.dow, e.doy);
            }),
            (tI.isoWeeksInYear = function () {
              return ej(this.year(), 1, 4);
            }),
            (tI.isoWeeksInISOWeekYear = function () {
              return ej(this.isoWeekYear(), 1, 4);
            }),
            (tI.date = tL),
            (tI.day = tI.days =
              function (e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t,
                  n,
                  r = ev(this, 'Day');
                return null == e
                  ? r
                  : ((t = e),
                    (n = this.localeData()),
                    (e =
                      'string' != typeof t
                        ? t
                        : isNaN(t)
                          ? 'number' == typeof (t = n.weekdaysParse(t))
                            ? t
                            : null
                          : parseInt(t, 10)),
                    this.add(e - r, 'd'));
              }),
            (tI.weekday = function (e) {
              if (!this.isValid()) return null != e ? this : NaN;
              var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
              return null == e ? t : this.add(e - t, 'd');
            }),
            (tI.isoWeekday = function (e) {
              if (!this.isValid()) return null != e ? this : NaN;
              if (null == e) return this.day() || 7;
              var t,
                n = ((t = this.localeData()), 'string' == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e);
              return this.day(this.day() % 7 ? n : n - 7);
            }),
            (tI.dayOfYear = function (e) {
              var t = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
              return null == e ? t : this.add(e - t, 'd');
            }),
            (tI.hour = tI.hours = eI),
            (tI.minute = tI.minutes = tA),
            (tI.second = tI.seconds = tV),
            (tI.millisecond = tI.milliseconds = _),
            (tI.utcOffset = function (e, n, r) {
              var s,
                i = this._offset || 0;
              if (!this.isValid()) return null != e ? this : NaN;
              if (null == e) return this._isUTC ? i : tg(this);
              if ('string' == typeof e) {
                if (null === (e = ty(ei, e))) return this;
              } else 16 > Math.abs(e) && !r && (e *= 60);
              return (
                !this._isUTC && n && (s = tg(this)),
                (this._offset = e),
                (this._isUTC = !0),
                null != s && this.add(s, 'm'),
                i === e ||
                  (!n || this._changeInProgress
                    ? tD(this, tk(e - i, 'm'), 1, !1)
                    : this._changeInProgress ||
                      ((this._changeInProgress = !0), t.updateOffset(this, !0), (this._changeInProgress = null))),
                this
              );
            }),
            (tI.utc = function (e) {
              return this.utcOffset(0, e);
            }),
            (tI.local = function (e) {
              return this._isUTC && (this.utcOffset(0, e), (this._isUTC = !1), e && this.subtract(tg(this), 'm')), this;
            }),
            (tI.parseZone = function () {
              if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
              else if ('string' == typeof this._i) {
                var e = ty(es, this._i);
                null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
              }
              return this;
            }),
            (tI.hasAlignedHourOffset = function (e) {
              return !!this.isValid() && ((e = e ? ti(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0);
            }),
            (tI.isDST = function () {
              return (
                this.utcOffset() > this.clone().month(0).utcOffset() ||
                this.utcOffset() > this.clone().month(5).utcOffset()
              );
            }),
            (tI.isLocal = function () {
              return !!this.isValid() && !this._isUTC;
            }),
            (tI.isUtcOffset = function () {
              return !!this.isValid() && this._isUTC;
            }),
            (tI.isUtc = tp),
            (tI.isUTC = tp),
            (tI.zoneAbbr = function () {
              return this._isUTC ? 'UTC' : '';
            }),
            (tI.zoneName = function () {
              return this._isUTC ? 'Coordinated Universal Time' : '';
            }),
            (tI.dates = x('dates accessor is deprecated. Use date instead.', tL)),
            (tI.months = x('months accessor is deprecated. Use month instead', eY)),
            (tI.years = x('years accessor is deprecated. Use year instead', ep)),
            (tI.zone = x(
              'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
              function (e, t) {
                return null != e ? ('string' != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
              },
            )),
            (tI.isDSTShifted = x(
              'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
              function () {
                if (!a(this._isDSTShifted)) return this._isDSTShifted;
                var e,
                  t = {};
                return (
                  w(t, this),
                  (t = tr(t))._a
                    ? ((e = t._isUTC ? c(t._a) : ti(t._a)),
                      (this._isDSTShifted =
                        this.isValid() &&
                        (function (e, t, n) {
                          var r,
                            s = Math.min(e.length, t.length),
                            i = Math.abs(e.length - t.length),
                            a = 0;
                          for (r = 0; r < s; r++) ((n && e[r] !== t[r]) || (!n && eh(e[r]) !== eh(t[r]))) && a++;
                          return a + i;
                        })(t._a, e.toArray()) > 0))
                    : (this._isDSTShifted = !1),
                  this._isDSTShifted
                );
              },
            ));
          var tq = O.prototype;
          function tZ(e, t, n, r) {
            var s = eX(),
              i = c().set(r, t);
            return s[n](i, e);
          }
          function tz(e, t, n) {
            if ((o(e) && ((t = e), (e = void 0)), (e = e || ''), null != t)) return tZ(e, t, n, 'month');
            var r,
              s = [];
            for (r = 0; r < 12; r++) s[r] = tZ(e, r, n, 'month');
            return s;
          }
          function tB(e, t, n, r) {
            'boolean' == typeof e || ((n = t = e), (e = !1)), o(t) && ((n = t), (t = void 0)), (t = t || '');
            var s,
              i = eX(),
              a = e ? i._week.dow : 0,
              l = [];
            if (null != n) return tZ(t, (n + a) % 7, r, 'day');
            for (s = 0; s < 7; s++) l[s] = tZ(t, (s + a) % 7, r, 'day');
            return l;
          }
          (tq.calendar = function (e, t, n) {
            var r = this._calendar[e] || this._calendar.sameElse;
            return b(r) ? r.call(t, n) : r;
          }),
            (tq.longDateFormat = function (e) {
              var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
              return t || !n
                ? t
                : ((this._longDateFormat[e] = n
                    .match(N)
                    .map(function (e) {
                      return 'MMMM' === e || 'MM' === e || 'DD' === e || 'dddd' === e ? e.slice(1) : e;
                    })
                    .join('')),
                  this._longDateFormat[e]);
            }),
            (tq.invalidDate = function () {
              return this._invalidDate;
            }),
            (tq.ordinal = function (e) {
              return this._ordinal.replace('%d', e);
            }),
            (tq.preparse = tG),
            (tq.postformat = tG),
            (tq.relativeTime = function (e, t, n, r) {
              var s = this._relativeTime[n];
              return b(s) ? s(e, t, n, r) : s.replace(/%d/i, e);
            }),
            (tq.pastFuture = function (e, t) {
              var n = this._relativeTime[e > 0 ? 'future' : 'past'];
              return b(n) ? n(t) : n.replace(/%s/i, t);
            }),
            (tq.set = function (e) {
              var t, n;
              for (n in e) s(e, n) && (b((t = e[n])) ? (this[n] = t) : (this['_' + n] = t));
              (this._config = e),
                (this._dayOfMonthOrdinalParseLenient = RegExp(
                  (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source,
                ));
            }),
            (tq.eras = function (e, n) {
              var r,
                s,
                i,
                a = this._eras || eX('en')._eras;
              for (r = 0, s = a.length; r < s; ++r)
                switch (
                  ('string' == typeof a[r].since && ((i = t(a[r].since).startOf('day')), (a[r].since = i.valueOf())),
                  typeof a[r].until)
                ) {
                  case 'undefined':
                    a[r].until = Infinity;
                    break;
                  case 'string':
                    (i = t(a[r].until).startOf('day').valueOf()), (a[r].until = i.valueOf());
                }
              return a;
            }),
            (tq.erasParse = function (e, t, n) {
              var r,
                s,
                i,
                a,
                o,
                l = this.eras();
              for (r = 0, e = e.toUpperCase(), s = l.length; r < s; ++r)
                if (((i = l[r].name.toUpperCase()), (a = l[r].abbr.toUpperCase()), (o = l[r].narrow.toUpperCase()), n))
                  switch (t) {
                    case 'N':
                    case 'NN':
                    case 'NNN':
                      if (a === e) return l[r];
                      break;
                    case 'NNNN':
                      if (i === e) return l[r];
                      break;
                    case 'NNNNN':
                      if (o === e) return l[r];
                  }
                else if ([i, a, o].indexOf(e) >= 0) return l[r];
            }),
            (tq.erasConvertYear = function (e, n) {
              var r = e.since <= e.until ? 1 : -1;
              return void 0 === n ? t(e.since).year() : t(e.since).year() + (n - e.offset) * r;
            }),
            (tq.erasAbbrRegex = function (e) {
              return s(this, '_erasAbbrRegex') || tW.call(this), e ? this._erasAbbrRegex : this._erasRegex;
            }),
            (tq.erasNameRegex = function (e) {
              return s(this, '_erasNameRegex') || tW.call(this), e ? this._erasNameRegex : this._erasRegex;
            }),
            (tq.erasNarrowRegex = function (e) {
              return s(this, '_erasNarrowRegex') || tW.call(this), e ? this._erasNarrowRegex : this._erasRegex;
            }),
            (tq.months = function (e, t) {
              return e
                ? n(this._months)
                  ? this._months[e.month()]
                  : this._months[(this._months.isFormat || eM).test(t) ? 'format' : 'standalone'][e.month()]
                : n(this._months)
                  ? this._months
                  : this._months.standalone;
            }),
            (tq.monthsShort = function (e, t) {
              return e
                ? n(this._monthsShort)
                  ? this._monthsShort[e.month()]
                  : this._monthsShort[eM.test(t) ? 'format' : 'standalone'][e.month()]
                : n(this._monthsShort)
                  ? this._monthsShort
                  : this._monthsShort.standalone;
            }),
            (tq.monthsParse = function (e, t, n) {
              var r, s, i;
              if (this._monthsParseExact) return eD.call(this, e, t, n);
              for (
                this._monthsParse ||
                  ((this._monthsParse = []), (this._longMonthsParse = []), (this._shortMonthsParse = [])),
                  r = 0;
                r < 12;
                r++
              )
                if (
                  ((s = c([2e3, r])),
                  n &&
                    !this._longMonthsParse[r] &&
                    ((this._longMonthsParse[r] = RegExp('^' + this.months(s, '').replace('.', '') + '$', 'i')),
                    (this._shortMonthsParse[r] = RegExp('^' + this.monthsShort(s, '').replace('.', '') + '$', 'i'))),
                  n ||
                    this._monthsParse[r] ||
                    ((i = '^' + this.months(s, '') + '|^' + this.monthsShort(s, '')),
                    (this._monthsParse[r] = RegExp(i.replace('.', ''), 'i'))),
                  (n && 'MMMM' === t && this._longMonthsParse[r].test(e)) ||
                    (n && 'MMM' === t && this._shortMonthsParse[r].test(e)) ||
                    (!n && this._monthsParse[r].test(e)))
                )
                  return r;
            }),
            (tq.monthsRegex = function (e) {
              return this._monthsParseExact
                ? (s(this, '_monthsRegex') || eO.call(this), e)
                  ? this._monthsStrictRegex
                  : this._monthsRegex
                : (s(this, '_monthsRegex') || (this._monthsRegex = ea),
                  this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
            }),
            (tq.monthsShortRegex = function (e) {
              return this._monthsParseExact
                ? (s(this, '_monthsRegex') || eO.call(this), e)
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex
                : (s(this, '_monthsShortRegex') || (this._monthsShortRegex = ea),
                  this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
            }),
            (tq.week = function (e) {
              return eR(e, this._week.dow, this._week.doy).week;
            }),
            (tq.firstDayOfYear = function () {
              return this._week.doy;
            }),
            (tq.firstDayOfWeek = function () {
              return this._week.dow;
            }),
            (tq.weekdays = function (e, t) {
              var r = n(this._weekdays)
                ? this._weekdays
                : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? 'format' : 'standalone'];
              return !0 === e ? eE(r, this._week.dow) : e ? r[e.day()] : r;
            }),
            (tq.weekdaysMin = function (e) {
              return !0 === e
                ? eE(this._weekdaysMin, this._week.dow)
                : e
                  ? this._weekdaysMin[e.day()]
                  : this._weekdaysMin;
            }),
            (tq.weekdaysShort = function (e) {
              return !0 === e
                ? eE(this._weekdaysShort, this._week.dow)
                : e
                  ? this._weekdaysShort[e.day()]
                  : this._weekdaysShort;
            }),
            (tq.weekdaysParse = function (e, t, n) {
              var r, s, i;
              if (this._weekdaysParseExact) return eU.call(this, e, t, n);
              for (
                this._weekdaysParse ||
                  ((this._weekdaysParse = []),
                  (this._minWeekdaysParse = []),
                  (this._shortWeekdaysParse = []),
                  (this._fullWeekdaysParse = [])),
                  r = 0;
                r < 7;
                r++
              ) {
                if (
                  ((s = c([2e3, 1]).day(r)),
                  n &&
                    !this._fullWeekdaysParse[r] &&
                    ((this._fullWeekdaysParse[r] = RegExp('^' + this.weekdays(s, '').replace('.', '\\.?') + '$', 'i')),
                    (this._shortWeekdaysParse[r] = RegExp(
                      '^' + this.weekdaysShort(s, '').replace('.', '\\.?') + '$',
                      'i',
                    )),
                    (this._minWeekdaysParse[r] = RegExp(
                      '^' + this.weekdaysMin(s, '').replace('.', '\\.?') + '$',
                      'i',
                    ))),
                  this._weekdaysParse[r] ||
                    ((i =
                      '^' + this.weekdays(s, '') + '|^' + this.weekdaysShort(s, '') + '|^' + this.weekdaysMin(s, '')),
                    (this._weekdaysParse[r] = RegExp(i.replace('.', ''), 'i'))),
                  (n && 'dddd' === t && this._fullWeekdaysParse[r].test(e)) ||
                    (n && 'ddd' === t && this._shortWeekdaysParse[r].test(e)))
                )
                  return r;
                if (n && 'dd' === t && this._minWeekdaysParse[r].test(e)) return r;
                if (!n && this._weekdaysParse[r].test(e)) return r;
              }
            }),
            (tq.weekdaysRegex = function (e) {
              return this._weekdaysParseExact
                ? (s(this, '_weekdaysRegex') || eH.call(this), e)
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex
                : (s(this, '_weekdaysRegex') || (this._weekdaysRegex = ea),
                  this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
            }),
            (tq.weekdaysShortRegex = function (e) {
              return this._weekdaysParseExact
                ? (s(this, '_weekdaysRegex') || eH.call(this), e)
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex
                : (s(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = ea),
                  this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
            }),
            (tq.weekdaysMinRegex = function (e) {
              return this._weekdaysParseExact
                ? (s(this, '_weekdaysRegex') || eH.call(this), e)
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex
                : (s(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = ea),
                  this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
            }),
            (tq.isPM = function (e) {
              return 'p' === (e + '').toLowerCase().charAt(0);
            }),
            (tq.meridiem = function (e, t, n) {
              return e > 11 ? (n ? 'pm' : 'PM') : n ? 'am' : 'AM';
            }),
            eJ('en', {
              eras: [
                { since: '0001-01-01', until: Infinity, offset: 1, name: 'Anno Domini', narrow: 'AD', abbr: 'AD' },
                { since: '0000-12-31', until: -1 / 0, offset: 1, name: 'Before Christ', narrow: 'BC', abbr: 'BC' },
              ],
              dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function (e) {
                var t = e % 10,
                  n = 1 === eh((e % 100) / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th';
                return e + n;
              },
            }),
            (t.lang = x('moment.lang is deprecated. Use moment.locale instead.', eJ)),
            (t.langData = x('moment.langData is deprecated. Use moment.localeData instead.', eX));
          var tJ = Math.abs;
          function tQ(e, t, n, r) {
            var s = tk(t, n);
            return (
              (e._milliseconds += r * s._milliseconds),
              (e._days += r * s._days),
              (e._months += r * s._months),
              e._bubble()
            );
          }
          function tX(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e);
          }
          function tK(e) {
            return (4800 * e) / 146097;
          }
          function t0(e) {
            return (146097 * e) / 4800;
          }
          function t1(e) {
            return function () {
              return this.as(e);
            };
          }
          var t2 = t1('ms'),
            t4 = t1('s'),
            t3 = t1('m'),
            t6 = t1('h'),
            t9 = t1('d'),
            t5 = t1('w'),
            t7 = t1('M'),
            t8 = t1('Q'),
            ne = t1('y');
          function nt(e) {
            return function () {
              return this.isValid() ? this._data[e] : NaN;
            };
          }
          var nn = nt('milliseconds'),
            nr = nt('seconds'),
            ns = nt('minutes'),
            ni = nt('hours'),
            na = nt('days'),
            no = nt('months'),
            nl = nt('years'),
            nu = Math.round,
            nd = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
          function nc(e, t, n, r, s) {
            return s.relativeTime(t || 1, !!n, e, r);
          }
          var nh = Math.abs;
          function nf(e) {
            return (e > 0) - (e < 0) || +e;
          }
          function nm() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e,
              t,
              n,
              r,
              s,
              i,
              a,
              o,
              l = nh(this._milliseconds) / 1e3,
              u = nh(this._days),
              d = nh(this._months),
              c = this.asSeconds();
            return c
              ? ((e = ec(l / 60)),
                (t = ec(e / 60)),
                (l %= 60),
                (e %= 60),
                (n = ec(d / 12)),
                (d %= 12),
                (r = l ? l.toFixed(3).replace(/\.?0+$/, '') : ''),
                (s = c < 0 ? '-' : ''),
                (i = nf(this._months) !== nf(c) ? '-' : ''),
                (a = nf(this._days) !== nf(c) ? '-' : ''),
                (o = nf(this._milliseconds) !== nf(c) ? '-' : ''),
                s +
                  'P' +
                  (n ? i + n + 'Y' : '') +
                  (d ? i + d + 'M' : '') +
                  (u ? a + u + 'D' : '') +
                  (t || e || l ? 'T' : '') +
                  (t ? o + t + 'H' : '') +
                  (e ? o + e + 'M' : '') +
                  (l ? o + r + 'S' : ''))
              : 'P0D';
          }
          var ny = td.prototype;
          return (
            (ny.isValid = function () {
              return this._isValid;
            }),
            (ny.abs = function () {
              var e = this._data;
              return (
                (this._milliseconds = tJ(this._milliseconds)),
                (this._days = tJ(this._days)),
                (this._months = tJ(this._months)),
                (e.milliseconds = tJ(e.milliseconds)),
                (e.seconds = tJ(e.seconds)),
                (e.minutes = tJ(e.minutes)),
                (e.hours = tJ(e.hours)),
                (e.months = tJ(e.months)),
                (e.years = tJ(e.years)),
                this
              );
            }),
            (ny.add = function (e, t) {
              return tQ(this, e, t, 1);
            }),
            (ny.subtract = function (e, t) {
              return tQ(this, e, t, -1);
            }),
            (ny.as = function (e) {
              if (!this.isValid()) return NaN;
              var t,
                n,
                r = this._milliseconds;
              if ('month' === (e = H(e)) || 'quarter' === e || 'year' === e)
                switch (((t = this._days + r / 864e5), (n = this._months + tK(t)), e)) {
                  case 'month':
                    return n;
                  case 'quarter':
                    return n / 3;
                  case 'year':
                    return n / 12;
                }
              else
                switch (((t = this._days + Math.round(t0(this._months))), e)) {
                  case 'week':
                    return t / 7 + r / 6048e5;
                  case 'day':
                    return t + r / 864e5;
                  case 'hour':
                    return 24 * t + r / 36e5;
                  case 'minute':
                    return 1440 * t + r / 6e4;
                  case 'second':
                    return 86400 * t + r / 1e3;
                  case 'millisecond':
                    return Math.floor(864e5 * t) + r;
                  default:
                    throw Error('Unknown unit ' + e);
                }
            }),
            (ny.asMilliseconds = t2),
            (ny.asSeconds = t4),
            (ny.asMinutes = t3),
            (ny.asHours = t6),
            (ny.asDays = t9),
            (ny.asWeeks = t5),
            (ny.asMonths = t7),
            (ny.asQuarters = t8),
            (ny.asYears = ne),
            (ny.valueOf = t2),
            (ny._bubble = function () {
              var e,
                t,
                n,
                r,
                s,
                i = this._milliseconds,
                a = this._days,
                o = this._months,
                l = this._data;
              return (
                (i >= 0 && a >= 0 && o >= 0) ||
                  (i <= 0 && a <= 0 && o <= 0) ||
                  ((i += 864e5 * tX(t0(o) + a)), (a = 0), (o = 0)),
                (l.milliseconds = i % 1e3),
                (e = ec(i / 1e3)),
                (l.seconds = e % 60),
                (t = ec(e / 60)),
                (l.minutes = t % 60),
                (n = ec(t / 60)),
                (l.hours = n % 24),
                (a += ec(n / 24)),
                (o += s = ec(tK(a))),
                (a -= tX(t0(s))),
                (r = ec(o / 12)),
                (o %= 12),
                (l.days = a),
                (l.months = o),
                (l.years = r),
                this
              );
            }),
            (ny.clone = function () {
              return tk(this);
            }),
            (ny.get = function (e) {
              return (e = H(e)), this.isValid() ? this[e + 's']() : NaN;
            }),
            (ny.milliseconds = nn),
            (ny.seconds = nr),
            (ny.minutes = ns),
            (ny.hours = ni),
            (ny.days = na),
            (ny.weeks = function () {
              return ec(this.days() / 7);
            }),
            (ny.months = no),
            (ny.years = nl),
            (ny.humanize = function (e, t) {
              if (!this.isValid()) return this.localeData().invalidDate();
              var n,
                r,
                s,
                i,
                a,
                o,
                l,
                u,
                d,
                c,
                h,
                f,
                m,
                y = !1,
                _ = nd;
              return (
                'object' == typeof e && ((t = e), (e = !1)),
                'boolean' == typeof e && (y = e),
                'object' == typeof t &&
                  ((_ = Object.assign({}, nd, t)), null != t.s && null == t.ss && (_.ss = t.s - 1)),
                (f = this.localeData()),
                (n = !y),
                (r = _),
                (s = tk(this).abs()),
                (i = nu(s.as('s'))),
                (a = nu(s.as('m'))),
                (o = nu(s.as('h'))),
                (l = nu(s.as('d'))),
                (u = nu(s.as('M'))),
                (d = nu(s.as('w'))),
                (c = nu(s.as('y'))),
                (h =
                  (i <= r.ss && ['s', i]) ||
                  (i < r.s && ['ss', i]) ||
                  (a <= 1 && ['m']) ||
                  (a < r.m && ['mm', a]) ||
                  (o <= 1 && ['h']) ||
                  (o < r.h && ['hh', o]) ||
                  (l <= 1 && ['d']) ||
                  (l < r.d && ['dd', l])),
                null != r.w && (h = h || (d <= 1 && ['w']) || (d < r.w && ['ww', d])),
                ((h = h || (u <= 1 && ['M']) || (u < r.M && ['MM', u]) || (c <= 1 && ['y']) || ['yy', c])[2] = n),
                (h[3] = +this > 0),
                (h[4] = f),
                (m = nc.apply(null, h)),
                y && (m = f.pastFuture(+this, m)),
                f.postformat(m)
              );
            }),
            (ny.toISOString = nm),
            (ny.toString = nm),
            (ny.toJSON = nm),
            (ny.locale = tN),
            (ny.localeData = tC),
            (ny.toIsoString = x(
              'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
              nm,
            )),
            (ny.lang = tP),
            j('X', 0, 0, 'unix'),
            j('x', 0, 0, 'valueOf'),
            eu('x', er),
            eu('X', /[+-]?\d+(\.\d{1,3})?/),
            em('X', function (e, t, n) {
              n._d = new Date(1e3 * parseFloat(e));
            }),
            em('x', function (e, t, n) {
              n._d = new Date(eh(e));
            }),
            (t.version = '2.30.1'),
            (L = ti),
            (t.fn = tI),
            (t.min = function () {
              var e = [].slice.call(arguments, 0);
              return tl('isBefore', e);
            }),
            (t.max = function () {
              var e = [].slice.call(arguments, 0);
              return tl('isAfter', e);
            }),
            (t.now = function () {
              return Date.now ? Date.now() : +new Date();
            }),
            (t.utc = c),
            (t.unix = function (e) {
              return ti(1e3 * e);
            }),
            (t.months = function (e, t) {
              return tz(e, t, 'months');
            }),
            (t.isDate = l),
            (t.locale = eJ),
            (t.invalid = m),
            (t.duration = tk),
            (t.isMoment = k),
            (t.weekdays = function (e, t, n) {
              return tB(e, t, n, 'weekdays');
            }),
            (t.parseZone = function () {
              return ti.apply(null, arguments).parseZone();
            }),
            (t.localeData = eX),
            (t.isDuration = tc),
            (t.monthsShort = function (e, t) {
              return tz(e, t, 'monthsShort');
            }),
            (t.weekdaysMin = function (e, t, n) {
              return tB(e, t, n, 'weekdaysMin');
            }),
            (t.defineLocale = eQ),
            (t.updateLocale = function (e, t) {
              if (null != t) {
                var n,
                  r,
                  s = eG;
                null != eq[e] && null != eq[e].parentLocale
                  ? eq[e].set(Y(eq[e]._config, t))
                  : (null != (r = eB(e)) && (s = r._config),
                    (t = Y(s, t)),
                    null == r && (t.abbr = e),
                    ((n = new O(t)).parentLocale = eq[e]),
                    (eq[e] = n)),
                  eJ(e);
              } else
                null != eq[e] &&
                  (null != eq[e].parentLocale
                    ? ((eq[e] = eq[e].parentLocale), e === eJ() && eJ(e))
                    : null != eq[e] && delete eq[e]);
              return eq[e];
            }),
            (t.locales = function () {
              return V(eq);
            }),
            (t.weekdaysShort = function (e, t, n) {
              return tB(e, t, n, 'weekdaysShort');
            }),
            (t.normalizeUnits = H),
            (t.relativeTimeRounding = function (e) {
              return void 0 === e ? nu : 'function' == typeof e && ((nu = e), !0);
            }),
            (t.relativeTimeThreshold = function (e, t) {
              return void 0 !== nd[e] && (void 0 === t ? nd[e] : ((nd[e] = t), 's' === e && (nd.ss = t - 1), !0));
            }),
            (t.calendarFormat = function (e, t) {
              var n = e.diff(t, 'days', !0);
              return n < -6
                ? 'sameElse'
                : n < -1
                  ? 'lastWeek'
                  : n < 0
                    ? 'lastDay'
                    : n < 1
                      ? 'sameDay'
                      : n < 2
                        ? 'nextDay'
                        : n < 7
                          ? 'nextWeek'
                          : 'sameElse';
            }),
            (t.prototype = tI),
            (t.HTML5_FMT = {
              DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
              DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
              DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
              DATE: 'YYYY-MM-DD',
              TIME: 'HH:mm',
              TIME_SECONDS: 'HH:mm:ss',
              TIME_MS: 'HH:mm:ss.SSS',
              WEEK: 'GGGG-[W]WW',
              MONTH: 'YYYY-MM',
            }),
            t
          );
        })();
      },
      66571: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => l });
        var r = n(93727),
          s = n(65830),
          i = n(3729),
          a = 0,
          o = (0, s.Z)({}, i).useId;
        let l = o
          ? function (e) {
              var t = o();
              return e || t;
            }
          : function (e) {
              var t = i.useState('ssr-id'),
                n = (0, r.Z)(t, 2),
                s = n[0],
                o = n[1];
              return (i.useEffect(function () {
                var e = a;
                (a += 1), o('rc_unique_'.concat(e));
              }, []),
              e)
                ? e
                : s;
            };
      },
      31041: (e, t, n) => {
        'use strict';
        n.r(t), n.d(t, { default: () => ef });
        var r = n(95344),
          s = n(22781);
        let i = (() => {
          let e = 0,
            t = () => `0000${((1679616 * Math.random()) << 0).toString(36)}`.slice(-4);
          return () => ((e += 1), `u${t()}${e}`);
        })();
        function a(e) {
          let t = [];
          for (let n = 0, r = e.length; n < r; n++) t.push(e[n]);
          return t;
        }
        function o(e, t) {
          let n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
          return n ? parseFloat(n.replace('px', '')) : 0;
        }
        function l(e, t = {}) {
          return {
            width:
              t.width ||
              (function (e) {
                let t = o(e, 'border-left-width'),
                  n = o(e, 'border-right-width');
                return e.clientWidth + t + n;
              })(e),
            height:
              t.height ||
              (function (e) {
                let t = o(e, 'border-top-width'),
                  n = o(e, 'border-bottom-width');
                return e.clientHeight + t + n;
              })(e),
          };
        }
        function u(e) {
          return new Promise((t, n) => {
            let r = new Image();
            (r.decode = () => t(r)),
              (r.onload = () => t(r)),
              (r.onerror = n),
              (r.crossOrigin = 'anonymous'),
              (r.decoding = 'async'),
              (r.src = e);
          });
        }
        async function d(e) {
          return Promise.resolve()
            .then(() => new XMLSerializer().serializeToString(e))
            .then(encodeURIComponent)
            .then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
        }
        async function c(e, t, n) {
          let r = 'http://www.w3.org/2000/svg',
            s = document.createElementNS(r, 'svg'),
            i = document.createElementNS(r, 'foreignObject');
          return (
            s.setAttribute('width', `${t}`),
            s.setAttribute('height', `${n}`),
            s.setAttribute('viewBox', `0 0 ${t} ${n}`),
            i.setAttribute('width', '100%'),
            i.setAttribute('height', '100%'),
            i.setAttribute('x', '0'),
            i.setAttribute('y', '0'),
            i.setAttribute('externalResourcesRequired', 'true'),
            s.appendChild(i),
            i.appendChild(e),
            d(s)
          );
        }
        let h = (e, t) => {
          if (e instanceof t) return !0;
          let n = Object.getPrototypeOf(e);
          return null !== n && (n.constructor.name === t.name || h(n, t));
        };
        function f(e, t, n) {
          let r = window.getComputedStyle(e, n),
            s = r.getPropertyValue('content');
          if ('' === s || 'none' === s) return;
          let o = i();
          try {
            t.className = `${t.className} ${o}`;
          } catch (e) {
            return;
          }
          let l = document.createElement('style');
          l.appendChild(
            (function (e, t, n) {
              let r = `.${e}:${t}`,
                s = n.cssText
                  ? (function (e) {
                      let t = e.getPropertyValue('content');
                      return `${e.cssText} content: '${t.replace(/'|"/g, '')}';`;
                    })(n)
                  : a(n)
                      .map((e) => {
                        let t = n.getPropertyValue(e),
                          r = n.getPropertyPriority(e);
                        return `${e}: ${t}${r ? ' !important' : ''};`;
                      })
                      .join(' ');
              return document.createTextNode(`${r}{${s}}`);
            })(o, n, r),
          ),
            t.appendChild(l);
        }
        let m = 'application/font-woff',
          y = 'image/jpeg',
          _ = {
            woff: m,
            woff2: m,
            ttf: 'application/font-truetype',
            eot: 'application/vnd.ms-fontobject',
            png: 'image/png',
            jpg: y,
            jpeg: y,
            gif: 'image/gif',
            tiff: 'image/tiff',
            svg: 'image/svg+xml',
            webp: 'image/webp',
          };
        function g(e) {
          return (
            _[
              (function (e) {
                let t = /\.([^./]*?)$/g.exec(e);
                return t ? t[1] : '';
              })(e).toLowerCase()
            ] || ''
          );
        }
        function p(e) {
          return -1 !== e.search(/^(data:)/);
        }
        function w(e, t) {
          return `data:${t};base64,${e}`;
        }
        async function v(e, t, n) {
          let r = await fetch(e, t);
          if (404 === r.status) throw Error(`Resource "${r.url}" not found`);
          let s = await r.blob();
          return new Promise((e, t) => {
            let i = new FileReader();
            (i.onerror = t),
              (i.onloadend = () => {
                try {
                  e(n({ res: r, result: i.result }));
                } catch (e) {
                  t(e);
                }
              }),
              i.readAsDataURL(s);
          });
        }
        let k = {};
        async function S(e, t, n) {
          var r, s, i;
          let a, o;
          let l =
            ((r = e),
            (s = t),
            (i = n.includeQueryParams),
            (o = r.replace(/\?.*/, '')),
            i && (o = r),
            /ttf|otf|eot|woff2?/i.test(o) && (o = o.replace(/.*\//, '')),
            s ? `[${s}]${o}` : o);
          if (null != k[l]) return k[l];
          n.cacheBust && (e += (/\?/.test(e) ? '&' : '?') + new Date().getTime());
          try {
            let r = await v(
              e,
              n.fetchRequestInit,
              ({ res: e, result: n }) => (t || (t = e.headers.get('Content-Type') || ''), n.split(/,/)[1]),
            );
            a = w(r, t);
          } catch (r) {
            a = n.imagePlaceholder || '';
            let t = `Failed to fetch resource: ${e}`;
            r && (t = 'string' == typeof r ? r : r.message), t && console.warn(t);
          }
          return (k[l] = a), a;
        }
        async function x(e) {
          let t = e.toDataURL();
          return 'data:,' === t ? e.cloneNode(!1) : u(t);
        }
        async function M(e, t) {
          if (e.currentSrc) {
            let t = document.createElement('canvas'),
              n = t.getContext('2d');
            return (
              (t.width = e.clientWidth),
              (t.height = e.clientHeight),
              null == n || n.drawImage(e, 0, 0, t.width, t.height),
              u(t.toDataURL())
            );
          }
          let n = e.poster,
            r = g(n);
          return u(await S(n, r, t));
        }
        async function D(e) {
          var t;
          try {
            if (null === (t = null == e ? void 0 : e.contentDocument) || void 0 === t ? void 0 : t.body)
              return await N(e.contentDocument.body, {}, !0);
          } catch (e) {}
          return e.cloneNode(!1);
        }
        async function b(e, t) {
          return h(e, HTMLCanvasElement)
            ? x(e)
            : h(e, HTMLVideoElement)
              ? M(e, t)
              : h(e, HTMLIFrameElement)
                ? D(e)
                : e.cloneNode(!1);
        }
        let Y = (e) => null != e.tagName && 'SLOT' === e.tagName.toUpperCase();
        async function O(e, t, n) {
          var r, s;
          let i = [];
          return (
            0 ===
              (i =
                Y(e) && e.assignedNodes
                  ? a(e.assignedNodes())
                  : h(e, HTMLIFrameElement) && (null === (r = e.contentDocument) || void 0 === r ? void 0 : r.body)
                    ? a(e.contentDocument.body.childNodes)
                    : a((null !== (s = e.shadowRoot) && void 0 !== s ? s : e).childNodes)).length ||
              h(e, HTMLVideoElement) ||
              (await i.reduce(
                (e, r) =>
                  e
                    .then(() => N(r, n))
                    .then((e) => {
                      e && t.appendChild(e);
                    }),
                Promise.resolve(),
              )),
            t
          );
        }
        async function T(e, t) {
          let n = e.querySelectorAll ? e.querySelectorAll('use') : [];
          if (0 === n.length) return e;
          let r = {};
          for (let s = 0; s < n.length; s++) {
            let i = n[s].getAttribute('xlink:href');
            if (i) {
              let n = e.querySelector(i),
                s = document.querySelector(i);
              n || !s || r[i] || (r[i] = await N(s, t, !0));
            }
          }
          let s = Object.values(r);
          if (s.length) {
            let t = 'http://www.w3.org/1999/xhtml',
              n = document.createElementNS(t, 'svg');
            n.setAttribute('xmlns', t),
              (n.style.position = 'absolute'),
              (n.style.width = '0'),
              (n.style.height = '0'),
              (n.style.overflow = 'hidden'),
              (n.style.display = 'none');
            let r = document.createElementNS(t, 'defs');
            n.appendChild(r);
            for (let e = 0; e < s.length; e++) r.appendChild(s[e]);
            e.appendChild(n);
          }
          return e;
        }
        async function N(e, t, n) {
          return n || !t.filter || t.filter(e)
            ? Promise.resolve(e)
                .then((e) => b(e, t))
                .then((n) => O(e, n, t))
                .then((t) => {
                  var n, r;
                  return (
                    (n = e),
                    h((r = t), Element) &&
                      ((function (e, t) {
                        let n = t.style;
                        if (!n) return;
                        let r = window.getComputedStyle(e);
                        r.cssText
                          ? ((n.cssText = r.cssText), (n.transformOrigin = r.transformOrigin))
                          : a(r).forEach((s) => {
                              let i = r.getPropertyValue(s);
                              if ('font-size' === s && i.endsWith('px')) {
                                let e = Math.floor(parseFloat(i.substring(0, i.length - 2))) - 0.1;
                                i = `${e}px`;
                              }
                              h(e, HTMLIFrameElement) && 'display' === s && 'inline' === i && (i = 'block'),
                                'd' === s && t.getAttribute('d') && (i = `path(${t.getAttribute('d')})`),
                                n.setProperty(s, i, r.getPropertyPriority(s));
                            });
                      })(n, r),
                      f(n, r, ':before'),
                      f(n, r, ':after'),
                      h(n, HTMLTextAreaElement) && (r.innerHTML = n.value),
                      h(n, HTMLInputElement) && r.setAttribute('value', n.value),
                      (function (e, t) {
                        if (h(e, HTMLSelectElement)) {
                          let n = Array.from(t.children).find((t) => e.value === t.getAttribute('value'));
                          n && n.setAttribute('selected', '');
                        }
                      })(n, r)),
                    r
                  );
                })
                .then((e) => T(e, t))
            : null;
        }
        let P = /url\((['"]?)([^'"]+?)\1\)/g,
          C = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
          R = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
        async function j(e, t, n, r, s) {
          try {
            let i;
            let a = n
                ? (function (e, t) {
                    if (e.match(/^[a-z]+:\/\//i)) return e;
                    if (e.match(/^\/\//)) return window.location.protocol + e;
                    if (e.match(/^[a-z]+:/i)) return e;
                    let n = document.implementation.createHTMLDocument(),
                      r = n.createElement('base'),
                      s = n.createElement('a');
                    return n.head.appendChild(r), n.body.appendChild(s), t && (r.href = t), (s.href = e), s.href;
                  })(t, n)
                : t,
              o = g(t);
            if (s) {
              let e = await s(a);
              i = w(e, o);
            } else i = await S(a, o, r);
            return e.replace(
              (function (e) {
                let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
                return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, 'g');
              })(t),
              `$1${i}$3`,
            );
          } catch (e) {}
          return e;
        }
        function E(e) {
          return -1 !== e.search(P);
        }
        async function W(e, t, n) {
          if (!E(e)) return e;
          let r = (function (e, { preferredFontFormat: t }) {
            return t
              ? e.replace(R, (e) => {
                  for (;;) {
                    let [n, , r] = C.exec(e) || [];
                    if (!r) return '';
                    if (r === t) return `src: ${n};`;
                  }
                })
              : e;
          })(e, n);
          return (function (e) {
            let t = [];
            return e.replace(P, (e, n, r) => (t.push(r), e)), t.filter((e) => !p(e));
          })(r).reduce((e, r) => e.then((e) => j(e, r, t, n)), Promise.resolve(r));
        }
        async function U(e, t, n) {
          var r;
          let s = null === (r = t.style) || void 0 === r ? void 0 : r.getPropertyValue(e);
          if (s) {
            let r = await W(s, null, n);
            return t.style.setProperty(e, r, t.style.getPropertyPriority(e)), !0;
          }
          return !1;
        }
        async function H(e, t) {
          (await U('background', e, t)) || (await U('background-image', e, t)),
            (await U('mask', e, t)) || (await U('mask-image', e, t));
        }
        async function F(e, t) {
          let n = h(e, HTMLImageElement);
          if (!(n && !p(e.src)) && !(h(e, SVGImageElement) && !p(e.href.baseVal))) return;
          let r = n ? e.src : e.href.baseVal,
            s = await S(r, g(r), t);
          await new Promise((t, r) => {
            (e.onload = t),
              (e.onerror = r),
              e.decode && (e.decode = t),
              'lazy' === e.loading && (e.loading = 'eager'),
              n ? ((e.srcset = ''), (e.src = s)) : (e.href.baseVal = s);
          });
        }
        async function L(e, t) {
          let n = a(e.childNodes).map((e) => A(e, t));
          await Promise.all(n).then(() => e);
        }
        async function A(e, t) {
          h(e, Element) && (await H(e, t), await F(e, t), await L(e, t));
        }
        let V = {};
        async function $(e) {
          let t = V[e];
          if (null != t) return t;
          let n = await fetch(e);
          return (t = { url: e, cssText: await n.text() }), (V[e] = t), t;
        }
        async function I(e, t) {
          let n = e.cssText,
            r = /url\(["']?([^"')]+)["']?\)/g;
          return Promise.all(
            (n.match(/url\([^)]+\)/g) || []).map(async (s) => {
              let i = s.replace(r, '$1');
              return (
                i.startsWith('https://') || (i = new URL(i, e.url).href),
                v(i, t.fetchRequestInit, ({ result: e }) => ((n = n.replace(s, `url(${e})`)), [s, e]))
              );
            }),
          ).then(() => n);
        }
        function G(e) {
          if (null == e) return [];
          let t = [],
            n = e.replace(/(\/\*[\s\S]*?\*\/)/gi, ''),
            r = RegExp('((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})', 'gi');
          for (;;) {
            let e = r.exec(n);
            if (null === e) break;
            t.push(e[0]);
          }
          n = n.replace(r, '');
          let s = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
            i = RegExp(
              '((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})',
              'gi',
            );
          for (;;) {
            let e = s.exec(n);
            if (null === e) {
              if (null === (e = i.exec(n))) break;
              s.lastIndex = i.lastIndex;
            } else i.lastIndex = s.lastIndex;
            t.push(e[0]);
          }
          return t;
        }
        async function q(e, t) {
          let n = [],
            r = [];
          return (
            e.forEach((n) => {
              if ('cssRules' in n)
                try {
                  a(n.cssRules || []).forEach((e, s) => {
                    if (e.type === CSSRule.IMPORT_RULE) {
                      let i = s + 1,
                        a = e.href,
                        o = $(a)
                          .then((e) => I(e, t))
                          .then((e) =>
                            G(e).forEach((e) => {
                              try {
                                n.insertRule(e, e.startsWith('@import') ? (i += 1) : n.cssRules.length);
                              } catch (t) {
                                console.error('Error inserting rule from remote css', { rule: e, error: t });
                              }
                            }),
                          )
                          .catch((e) => {
                            console.error('Error loading remote css', e.toString());
                          });
                      r.push(o);
                    }
                  });
                } catch (i) {
                  let s = e.find((e) => null == e.href) || document.styleSheets[0];
                  null != n.href &&
                    r.push(
                      $(n.href)
                        .then((e) => I(e, t))
                        .then((e) =>
                          G(e).forEach((e) => {
                            s.insertRule(e, n.cssRules.length);
                          }),
                        )
                        .catch((e) => {
                          console.error('Error loading remote stylesheet', e);
                        }),
                    ),
                    console.error('Error inlining remote css file', i);
                }
            }),
            Promise.all(r).then(
              () => (
                e.forEach((e) => {
                  if ('cssRules' in e)
                    try {
                      a(e.cssRules || []).forEach((e) => {
                        n.push(e);
                      });
                    } catch (t) {
                      console.error(`Error while reading CSS rules from ${e.href}`, t);
                    }
                }),
                n
              ),
            )
          );
        }
        async function Z(e, t) {
          if (null == e.ownerDocument) throw Error('Provided element is not within a Document');
          let n = a(e.ownerDocument.styleSheets);
          return (await q(n, t))
            .filter((e) => e.type === CSSRule.FONT_FACE_RULE)
            .filter((e) => E(e.style.getPropertyValue('src')));
        }
        async function z(e, t) {
          let n = await Z(e, t);
          return (
            await Promise.all(
              n.map((e) => {
                let n = e.parentStyleSheet ? e.parentStyleSheet.href : null;
                return W(e.cssText, n, t);
              }),
            )
          ).join('\n');
        }
        async function B(e, t) {
          let n = null != t.fontEmbedCSS ? t.fontEmbedCSS : t.skipFonts ? null : await z(e, t);
          if (n) {
            let t = document.createElement('style'),
              r = document.createTextNode(n);
            t.appendChild(r), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
          }
        }
        async function J(e, t = {}) {
          let { width: n, height: r } = l(e, t),
            s = await N(e, t, !0);
          return (
            await B(s, t),
            await A(s, t),
            (function (e, t) {
              let { style: n } = e;
              t.backgroundColor && (n.backgroundColor = t.backgroundColor),
                t.width && (n.width = `${t.width}px`),
                t.height && (n.height = `${t.height}px`);
              let r = t.style;
              null != r &&
                Object.keys(r).forEach((e) => {
                  n[e] = r[e];
                });
            })(s, t),
            await c(s, n, r)
          );
        }
        async function Q(e, t = {}) {
          let { width: n, height: r } = l(e, t),
            s = await J(e, t),
            i = await u(s),
            a = document.createElement('canvas'),
            o = a.getContext('2d'),
            d =
              t.pixelRatio ||
              (function () {
                let e, t;
                try {
                  t = process;
                } catch (e) {}
                let n = t && t.env ? t.env.devicePixelRatio : null;
                return n && Number.isNaN((e = parseInt(n, 10))) && (e = 1), e || window.devicePixelRatio || 1;
              })(),
            c = t.canvasWidth || n,
            h = t.canvasHeight || r;
          return (
            (a.width = c * d),
            (a.height = h * d),
            !t.skipAutoScale &&
              (a.width > 16384 || a.height > 16384) &&
              (a.width > 16384 && a.height > 16384
                ? a.width > a.height
                  ? ((a.height *= 16384 / a.width), (a.width = 16384))
                  : ((a.width *= 16384 / a.height), (a.height = 16384))
                : a.width > 16384
                  ? ((a.height *= 16384 / a.width), (a.width = 16384))
                  : ((a.width *= 16384 / a.height), (a.height = 16384))),
            (a.style.width = `${c}`),
            (a.style.height = `${h}`),
            t.backgroundColor && ((o.fillStyle = t.backgroundColor), o.fillRect(0, 0, a.width, a.height)),
            o.drawImage(i, 0, 0, a.width, a.height),
            a
          );
        }
        async function X(e, t = {}) {
          return (await Q(e, t)).toDataURL();
        }
        var K = n(22254),
          ee = n(3729),
          et = n(96609),
          en = n(35479),
          er = n(11465),
          es = n(6650),
          ei = n(9249),
          ea = n.n(ei),
          eo = n(77030),
          el = n.n(eo),
          eu = n(41223),
          ed = n.n(eu);
        let ec = ({ className: e, bill: t }) => {
          let n = t?.discount_info,
            s = t?.sub_total,
            i = t?.total_discount || 0,
            a = t?.service_charge,
            o = t?.vat_charge,
            l = [],
            u = n ? ('FIXED_AMOUNT' === n.type ? `VND${n?.value}` : `${n?.value}%`) : null;
          if (t?.orders.length > 0) for (let e of t?.orders) for (let t of e?.items) l.push(t);
          return (0, r.jsxs)('div', {
            className: `${e || ''} px-6 pt-[60px]`,
            id: 'receipt',
            children: [
              (0, r.jsxs)('div', {
                className: 'flex items-center flex-col',
                children: [
                  r.jsx(ed(), { priority: !0, src: '/assets/icons/logo.svg', alt: 'logo', width: 100, height: 100 }),
                  r.jsx('span', {
                    className: `text-center leading-normal max-w-[260px] text-black-500 text-[10px] mt-[20.78px] mb-[30px] font-normal ${
                      ea().className
                    }`,
                    children:
                      'Bella OnoJie. 174 Nguyen Luong Bang, Hoa Khanh bac, Lien Chieu, Da Nang, Viet Nam. Tax ID : 0235563109861. Tel: 092 123 8378',
                  }),
                  r.jsx('div', {
                    className: 'h-[28px] font-medium leading-normal mb-[12px] text-[24px] text-black-500',
                    children: 'Receipt',
                  }),
                  r.jsx('div', {
                    className: 'h-[17px] leading-normal',
                    children: el()(t?.receipt_data?.created_at).format('DD MMMM YYYY, HH:mm'),
                  }),
                ],
              }),
              r.jsx('div', { className: 'flex font-medium text-black-400 mt-[30px]', children: ' Order summary ' }),
              l?.map((e, t) =>
                r.jsxs(
                  'div',
                  {
                    className: 'mt-[20px]',
                    children: [
                      r.jsx(er.Z, {
                        name: e?.product_info?.name,
                        price: e?.price,
                        priceAfterDiscount: e?.total_price_product_after_discount,
                        image_url: e?.image_url,
                        quantity: e?.quantity,
                        modifiers: e?.modifiers_info,
                        note: e?.notes || void 0,
                        dietary_restrictions: e?.dietary_requests || [],
                      }),
                      r.jsx('hr', { className: 'w-full border-t border-black-100 mt-[20px]' }),
                    ],
                  },
                  t,
                ),
              ),
              (0, r.jsxs)('div', {
                className: 'mt-[20px] ml-[108px] pb-[60px]',
                children: [
                  (0, r.jsxs)('div', {
                    className: `text-[10px] text-black-500 space-y-[3px] ${ea().className}`,
                    children: [
                      i > 0 &&
                        (0, r.jsxs)('div', {
                          className: 'flex items-center justify-between ',
                          children: [
                            (0, r.jsxs)('span', { children: [u, ' Discount '] }),
                            (0, r.jsxs)('span', { children: ['-', (0, es.T4)(i)] }),
                          ],
                        }),
                      (0, r.jsxs)('div', {
                        className: 'flex items-center justify-between',
                        children: [
                          r.jsx('div', { children: ' Subtotal ' }),
                          (0, r.jsxs)('div', { children: [' ', (0, es.T4)(s), ' '] }),
                        ],
                      }),
                      (0, r.jsxs)('div', {
                        className: 'flex items-center justify-between',
                        children: [
                          r.jsx('div', { children: ' 10% Service Charge ' }),
                          (0, r.jsxs)('div', { children: [' ', (0, es.T4)(a), ' '] }),
                        ],
                      }),
                      (0, r.jsxs)('div', {
                        className: 'flex items-center justify-between',
                        children: [
                          r.jsx('div', { children: ' 7% VAT ' }),
                          (0, r.jsxs)('div', { children: [' ', (0, es.T4)(o), ' '] }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)('div', {
                    className: 'text-[14px] flex items-center mt-[7px] justify-between ',
                    children: [
                      r.jsx('div', { children: ' Total ' }),
                      (0, r.jsxs)('div', { children: [' ', (0, es.T4)(t?.total), ' '] }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
        var eh = n(86955);
        let ef = () => {
          let e = (0, K.useRouter)(),
            t = (0, K.useSearchParams)().get('bill_id'),
            { data: n, isFetching: i } = (0, eh.LJ)({ id: t || '' }),
            [a, o] = (0, ee.useState)(!1),
            l = (e) => {
              let t = document.createElement('a');
              (t.href = e), (t.download = 'Receipt'), t.click(), o(!1);
            },
            u = async () => {
              o(!0);
              let e = document.getElementById('receipt');
              if (e) {
                e?.classList.remove('hidden');
                let t = '',
                  n = 0;
                for (; t.length < 2e6 && n < 10; ) {
                  try {
                    t = await X(e, { backgroundColor: '#f1eee8', includeQueryParams: !0 });
                  } catch (e) {
                    o(!1);
                    break;
                  }
                  n += 1;
                }
                l(t), e?.classList.add('hidden');
              }
            },
            d = (0, r.jsxs)('div', {
              className: 'px-6 pt-[13px] pb-[40px] max-h-[var(--100vh)]',
              children: [
                (0, r.jsxs)('div', {
                  className: 'font-medium text-black-500 text-[24px] text-center mb-[30px]',
                  children: ['Download receipt', r.jsx('br', {}), 'or request a tax invoice'],
                }),
                r.jsx('div', { className: 'flex items-center justify-center', children: r.jsx(en.GU, {}) }),
              ],
            }),
            c = r.jsx('div', { children: r.jsx('span', { children: 'Download receipt ' }) });
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(s.Z, {
                isShowPrimaryButton: !0,
                isShowBackBtn: !0,
                onClickBackBtn: () => e.push(`/receipt?bill_id=${t}`),
                onClickPrimaryBtn: () => e.push(`/request-tax-invoice?bill_id=${t}`),
                primaryBtnChildren: 'Request tax invoice',
                secondaryBtnChildren: c,
                onClickSecondaryBtn: u,
                disabledPrimary: a || i,
                disabledSecondary: a || i,
                disabledBackBtn: a || i,
                title: '',
                children: [d, a && r.jsx(et.Z, {})],
              }),
              r.jsx(ec, { className: 'hidden', bill: n?.data }),
            ],
          });
        };
      },
      40233: (e, t, n) => {
        'use strict';
        n.r(t), n.d(t, { $$typeof: () => i, __esModule: () => s, default: () => a });
        let r = (0, n(86843).createProxy)(
            String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/receipt/receipt-download/page.tsx`,
          ),
          { __esModule: s, $$typeof: i } = r,
          a = r.default;
      },
    });
  var t = require('../../../webpack-runtime.js');
  t.C(e);
  var n = (e) => t((t.s = e)),
    r = t.X(0, [638, 289, 363, 662, 223, 503, 598, 609, 118, 479, 14], () => n(91379));
  module.exports = r;
})();
