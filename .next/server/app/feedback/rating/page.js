(() => {
  var e = {};
  (e.id = 448),
    (e.ids = [448]),
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
      68411: (e, t, r) => {
        'use strict';
        r.r(t),
          r.d(t, {
            GlobalError: () => s.a,
            __next_app__: () => m,
            originalPathname: () => d,
            pages: () => u,
            routeModule: () => p,
            tree: () => c,
          });
        var a = r(50482),
          n = r(69108),
          o = r(62563),
          s = r.n(o),
          i = r(68300),
          l = {};
        for (let e in i)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', 'originalPathname', '__next_app__', 'routeModule'].indexOf(e) &&
            (l[e] = () => i[e]);
        r.d(t, l);
        let c = [
            '',
            {
              children: [
                'feedback',
                {
                  children: [
                    'rating',
                    {
                      children: [
                        '__PAGE__',
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(r.bind(r, 49104)),
                            '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/feedback/rating/page.tsx',
                          ],
                        },
                      ],
                    },
                    {},
                  ],
                },
                {
                  metadata: {
                    icon: [async (e) => (await Promise.resolve().then(r.bind(r, 73881))).default(e)],
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
                () => Promise.resolve().then(r.bind(r, 32396)),
                '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(r.bind(r, 48206)),
                '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/not-found.tsx',
              ],
              metadata: {
                icon: [async (e) => (await Promise.resolve().then(r.bind(r, 73881))).default(e)],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          u = [
            '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/feedback/rating/page.tsx',
          ],
          d = '/feedback/rating/page',
          m = { require: r, loadChunk: () => Promise.resolve() },
          p = new a.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: '/feedback/rating/page',
              pathname: '/feedback/rating',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      73516: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 92625));
      },
      99460: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => g });
        var a = r(93727),
          n = r(3729),
          o = r(81202),
          s = r(89369);
        r(41255);
        var i = r(67862),
          l = n.createContext(null),
          c = r(72375),
          u = r(17981),
          d = [],
          m = r(47058),
          p = 'rc-util-locker-'.concat(Date.now()),
          f = 0,
          x = !1,
          h = function (e) {
            return (
              !1 !== e &&
              ((0, s.Z)() && e
                ? 'string' == typeof e
                  ? document.querySelector(e)
                  : 'function' == typeof e
                    ? e()
                    : e
                : null)
            );
          };
        let g = n.forwardRef(function (e, t) {
          var r,
            g,
            y,
            v,
            b = e.open,
            w = e.autoLock,
            j = e.getContainer,
            k = (e.debug, e.autoDestroy),
            C = void 0 === k || k,
            P = e.children,
            S = n.useState(b),
            E = (0, a.Z)(S, 2),
            N = E[0],
            Z = E[1],
            B = N || b;
          n.useEffect(
            function () {
              (C || b) && Z(b);
            },
            [b, C],
          );
          var _ = n.useState(function () {
              return h(j);
            }),
            R = (0, a.Z)(_, 2),
            $ = R[0],
            D = R[1];
          n.useEffect(function () {
            var e = h(j);
            D(null != e ? e : null);
          });
          var O = (function (e, t) {
              var r = n.useState(function () {
                  return (0, s.Z)() ? document.createElement('div') : null;
                }),
                o = (0, a.Z)(r, 1)[0],
                i = n.useRef(!1),
                m = n.useContext(l),
                p = n.useState(d),
                f = (0, a.Z)(p, 2),
                x = f[0],
                h = f[1],
                g =
                  m ||
                  (i.current
                    ? void 0
                    : function (e) {
                        h(function (t) {
                          return [e].concat((0, c.Z)(t));
                        });
                      });
              function y() {
                o.parentElement || document.body.appendChild(o), (i.current = !0);
              }
              function v() {
                var e;
                null === (e = o.parentElement) || void 0 === e || e.removeChild(o), (i.current = !1);
              }
              return (
                (0, u.Z)(
                  function () {
                    return e ? (m ? m(y) : y()) : v(), v;
                  },
                  [e],
                ),
                (0, u.Z)(
                  function () {
                    x.length &&
                      (x.forEach(function (e) {
                        return e();
                      }),
                      h(d));
                  },
                  [x],
                ),
                [o, g]
              );
            })(B && !$, 0),
            T = (0, a.Z)(O, 2),
            q = T[0],
            I = T[1],
            H = null != $ ? $ : q;
          (r = !!(w && b && (0, s.Z)() && (H === q || H === document.body))),
            (g = n.useState(function () {
              return (f += 1), ''.concat(p, '_').concat(f);
            })),
            (y = (0, a.Z)(g, 1)[0]),
            (0, u.Z)(
              function () {
                if (r) {
                  var e,
                    t = ((e = document.body),
                    'undefined' != typeof document && e && e instanceof Element
                      ? (function (e) {
                          var t,
                            r,
                            a = 'rc-scrollbar-measure-'.concat(Math.random().toString(36).substring(7)),
                            n = document.createElement('div');
                          n.id = a;
                          var o = n.style;
                          if (
                            ((o.position = 'absolute'),
                            (o.left = '0'),
                            (o.top = '0'),
                            (o.width = '100px'),
                            (o.height = '100px'),
                            (o.overflow = 'scroll'),
                            e)
                          ) {
                            var s = getComputedStyle(e);
                            (o.scrollbarColor = s.scrollbarColor), (o.scrollbarWidth = s.scrollbarWidth);
                            var i = getComputedStyle(e, '::-webkit-scrollbar'),
                              l = parseInt(i.width, 10),
                              c = parseInt(i.height, 10);
                            try {
                              var u = l ? 'width: '.concat(i.width, ';') : '',
                                d = c ? 'height: '.concat(i.height, ';') : '';
                              (0, m.hq)('\n#'.concat(a, '::-webkit-scrollbar {\n').concat(u, '\n').concat(d, '\n}'), a);
                            } catch (e) {
                              console.error(e), (t = l), (r = c);
                            }
                          }
                          document.body.appendChild(n);
                          var p = e && t && !isNaN(t) ? t : n.offsetWidth - n.clientWidth,
                            f = e && r && !isNaN(r) ? r : n.offsetHeight - n.clientHeight;
                          return document.body.removeChild(n), (0, m.jL)(a), { width: p, height: f };
                        })(e)
                      : { width: 0, height: 0 }).width,
                    a =
                      document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) &&
                      window.innerWidth > document.body.offsetWidth;
                  (0, m.hq)(
                    '\nhtml body {\n  overflow-y: hidden;\n  '.concat(
                      a ? 'width: calc(100% - '.concat(t, 'px);') : '',
                      '\n}',
                    ),
                    y,
                  );
                } else (0, m.jL)(y);
                return function () {
                  (0, m.jL)(y);
                };
              },
              [r, y],
            );
          var z = null;
          P && (0, i.Yr)(P) && t && (z = P.ref);
          var U = (0, i.x1)(z, t);
          if (!B || !(0, s.Z)() || void 0 === $) return null;
          var K = !1 === H || ('boolean' == typeof v && (x = v), x),
            W = P;
          return (
            t && (W = n.cloneElement(P, { ref: U })),
            n.createElement(l.Provider, { value: I }, K ? W : (0, o.createPortal)(W, H))
          );
        });
      },
      95295: (e, t, r) => {
        'use strict';
        r.d(t, { m: () => a });
        let a = (e, t, r) => (void 0 !== r ? r : `${e}-${t}`);
      },
      96461: (e, t, r) => {
        'use strict';
        r.d(t, { _y: () => x });
        var a = r(4710),
          n = r(5251);
        let o = new a.E4('antZoomIn', {
            '0%': { transform: 'scale(0.2)', opacity: 0 },
            '100%': { transform: 'scale(1)', opacity: 1 },
          }),
          s = new a.E4('antZoomOut', {
            '0%': { transform: 'scale(1)' },
            '100%': { transform: 'scale(0.2)', opacity: 0 },
          }),
          i = new a.E4('antZoomBigIn', {
            '0%': { transform: 'scale(0.8)', opacity: 0 },
            '100%': { transform: 'scale(1)', opacity: 1 },
          }),
          l = new a.E4('antZoomBigOut', {
            '0%': { transform: 'scale(1)' },
            '100%': { transform: 'scale(0.8)', opacity: 0 },
          }),
          c = new a.E4('antZoomUpIn', {
            '0%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
            '100%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
          }),
          u = new a.E4('antZoomUpOut', {
            '0%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
            '100%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
          }),
          d = new a.E4('antZoomLeftIn', {
            '0%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
            '100%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
          }),
          m = new a.E4('antZoomLeftOut', {
            '0%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
            '100%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
          }),
          p = new a.E4('antZoomRightIn', {
            '0%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
            '100%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
          }),
          f = {
            zoom: { inKeyframes: o, outKeyframes: s },
            'zoom-big': { inKeyframes: i, outKeyframes: l },
            'zoom-big-fast': { inKeyframes: i, outKeyframes: l },
            'zoom-left': { inKeyframes: d, outKeyframes: m },
            'zoom-right': {
              inKeyframes: p,
              outKeyframes: new a.E4('antZoomRightOut', {
                '0%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
                '100%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
              }),
            },
            'zoom-up': { inKeyframes: c, outKeyframes: u },
            'zoom-down': {
              inKeyframes: new a.E4('antZoomDownIn', {
                '0%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
                '100%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
              }),
              outKeyframes: new a.E4('antZoomDownOut', {
                '0%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
                '100%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
              }),
            },
          },
          x = (e, t) => {
            let { antCls: r } = e,
              a = `${r}-${t}`,
              { inKeyframes: o, outKeyframes: s } = f[t];
            return [
              (0, n.R)(a, o, s, 'zoom-big-fast' === t ? e.motionDurationFast : e.motionDurationMid),
              {
                [`
        ${a}-enter,
        ${a}-appear
      `]: {
                  transform: 'scale(0)',
                  opacity: 0,
                  animationTimingFunction: e.motionEaseOutCirc,
                  '&-prepare': { transform: 'none' },
                },
                [`${a}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
              },
            ];
          };
      },
      12300: (e, t, r) => {
        'use strict';
        var a = r(80514),
          n = { 'text/plain': 'Text', 'text/html': 'Url', default: 'Text' };
        e.exports = function (e, t) {
          var r,
            o,
            s,
            i,
            l,
            c,
            u,
            d,
            m = !1;
          t || (t = {}), (s = t.debug || !1);
          try {
            if (
              ((l = a()),
              (c = document.createRange()),
              (u = document.getSelection()),
              ((d = document.createElement('span')).textContent = e),
              (d.ariaHidden = 'true'),
              (d.style.all = 'unset'),
              (d.style.position = 'fixed'),
              (d.style.top = 0),
              (d.style.clip = 'rect(0, 0, 0, 0)'),
              (d.style.whiteSpace = 'pre'),
              (d.style.webkitUserSelect = 'text'),
              (d.style.MozUserSelect = 'text'),
              (d.style.msUserSelect = 'text'),
              (d.style.userSelect = 'text'),
              d.addEventListener('copy', function (r) {
                if ((r.stopPropagation(), t.format)) {
                  if ((r.preventDefault(), void 0 === r.clipboardData)) {
                    s && console.warn('unable to use e.clipboardData'),
                      s && console.warn('trying IE specific stuff'),
                      window.clipboardData.clearData();
                    var a = n[t.format] || n.default;
                    window.clipboardData.setData(a, e);
                  } else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e);
                }
                t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
              }),
              document.body.appendChild(d),
              c.selectNodeContents(d),
              u.addRange(c),
              !document.execCommand('copy'))
            )
              throw Error('copy command was unsuccessful');
            m = !0;
          } catch (a) {
            s && console.error('unable to copy using execCommand: ', a), s && console.warn('trying IE specific stuff');
            try {
              window.clipboardData.setData(t.format || 'text', e), t.onCopy && t.onCopy(window.clipboardData), (m = !0);
            } catch (a) {
              s && console.error('unable to copy using clipboardData: ', a),
                s && console.error('falling back to prompt'),
                (r = 'message' in t ? t.message : 'Copy to clipboard: #{key}, Enter'),
                (o = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C'),
                (i = r.replace(/#{\s*key\s*}/g, o)),
                window.prompt(i, e);
            }
          } finally {
            u && ('function' == typeof u.removeRange ? u.removeRange(c) : u.removeAllRanges()),
              d && document.body.removeChild(d),
              l();
          }
          return m;
        };
      },
      43254: (e, t, r) => {
        var a = r(39727);
        e.exports = function (e, t) {
          return !!(null == e ? 0 : e.length) && a(e, t, 0) > -1;
        };
      },
      80265: (e) => {
        e.exports = function (e, t, r) {
          for (var a = -1, n = null == e ? 0 : e.length; ++a < n; ) if (r(t, e[a])) return !0;
          return !1;
        };
      },
      35241: (e) => {
        e.exports = function (e, t, r, a) {
          for (var n = e.length, o = r + (a ? 1 : -1); a ? o-- : ++o < n; ) if (t(e[o], o, e)) return o;
          return -1;
        };
      },
      39727: (e, t, r) => {
        var a = r(35241),
          n = r(17501),
          o = r(73048);
        e.exports = function (e, t, r) {
          return t == t ? o(e, t, r) : a(e, n, r);
        };
      },
      17501: (e) => {
        e.exports = function (e) {
          return e != e;
        };
      },
      62634: (e, t, r) => {
        var a = r(35935),
          n = r(43254),
          o = r(80265),
          s = r(66173),
          i = r(86513),
          l = r(80185);
        e.exports = function (e, t, r) {
          var c = -1,
            u = n,
            d = e.length,
            m = !0,
            p = [],
            f = p;
          if (r) (m = !1), (u = o);
          else if (d >= 200) {
            var x = t ? null : i(e);
            if (x) return l(x);
            (m = !1), (u = s), (f = new a());
          } else f = t ? [] : p;
          e: for (; ++c < d; ) {
            var h = e[c],
              g = t ? t(h) : h;
            if (((h = r || 0 !== h ? h : 0), m && g == g)) {
              for (var y = f.length; y--; ) if (f[y] === g) continue e;
              t && f.push(g), p.push(h);
            } else u(f, g, r) || (f !== p && f.push(g), p.push(h));
          }
          return p;
        };
      },
      86513: (e, t, r) => {
        var a = r(27542),
          n = r(25296),
          o = r(80185),
          s =
            a && 1 / o(new a([, -0]))[1] == 1 / 0
              ? function (e) {
                  return new a(e);
                }
              : n;
        e.exports = s;
      },
      73048: (e) => {
        e.exports = function (e, t, r) {
          for (var a = r - 1, n = e.length; ++a < n; ) if (e[a] === t) return a;
          return -1;
        };
      },
      25296: (e) => {
        e.exports = function () {};
      },
      59828: (e, t, r) => {
        var a = r(62634);
        e.exports = function (e) {
          return e && e.length ? a(e) : [];
        };
      },
      66150: (e, t, r) => {
        'use strict';
        e.exports = r(16372).vendored.contexts.RouterContext;
      },
      80514: (e) => {
        e.exports = function () {
          var e = document.getSelection();
          if (!e.rangeCount) return function () {};
          for (var t = document.activeElement, r = [], a = 0; a < e.rangeCount; a++) r.push(e.getRangeAt(a));
          switch (t.tagName.toUpperCase()) {
            case 'INPUT':
            case 'TEXTAREA':
              t.blur();
              break;
            default:
              t = null;
          }
          return (
            e.removeAllRanges(),
            function () {
              'Caret' === e.type && e.removeAllRanges(),
                e.rangeCount ||
                  r.forEach(function (t) {
                    e.addRange(t);
                  }),
                t && t.focus();
            }
          );
        };
      },
      92625: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => P });
        var a = r(95344),
          n = r(22781),
          o = r(42810),
          s = r(22254),
          i = r(3729),
          l = r(1208),
          c = r(9249),
          u = r.n(c),
          d = r(5069);
        let m = ({
          email: e,
          phone: t,
          isEmailValid: r,
          isPhoneValid: n,
          handleEmailChange: o,
          handlePhoneChange: s,
          disabled: i,
        }) =>
          (0, a.jsxs)('div', {
            className: 'px-6 pt-[13px] pb-[40px]',
            children: [
              a.jsx('div', {
                className: 'font-medium text-black-500 text-[24px] text-center mb-3',
                children: 'We have work to do ☹️',
              }),
              (0, a.jsxs)('div', {
                className: 'text-black-500 text-[14px] text-center mb-4',
                children: [
                  'We sincerely appreciate your feedback.',
                  a.jsx('br', {}),
                  'It is important for us to continually improve.',
                ],
              }),
              (0, a.jsxs)('div', {
                className: 'text-black-500 text-[14px] text-center mb-[22px]',
                children: [
                  'Can we contact you about your experience?',
                  a.jsx('br', {}),
                  'We will offer a complimentary voucher for your next visit.',
                ],
              }),
              (0, a.jsxs)('div', {
                className: 'px-[8px] flex flex-col space-y-[20px]',
                children: [
                  (0, a.jsxs)('div', {
                    children: [
                      a.jsx('div', {
                        className: 'font-medium text-[14px] text-black-400',
                        children: ' Contact email ',
                      }),
                      (0, a.jsxs)('div', {
                        className: `mt-[10px] ${u().className}`,
                        children: [
                          a.jsx(d.Z, {
                            disabled: i,
                            value: e,
                            onChange: o,
                            required: !0,
                            placeholder: 'Enter your email (required)',
                          }),
                          !r &&
                            a.jsx('div', {
                              className: 'text-red-400 mt-[5px] text-[12px]',
                              children: r ? '' : 'Please enter valid email format',
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    children: [
                      a.jsx('div', {
                        className: 'font-medium text-[14px] text-black-400',
                        children: ' Contact phone ',
                      }),
                      (0, a.jsxs)('div', {
                        className: `mt-[10px] ${u().className}`,
                        children: [
                          a.jsx(d.Z, {
                            disabled: i,
                            value: t,
                            onChange: s,
                            placeholder: 'Enter your phone (optional)',
                          }),
                          !n &&
                            a.jsx('div', {
                              className: 'text-red-400  mt-[5px] text-[12px]',
                              children: n ? '' : 'Please enter valid phone number format',
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        var p = r(35479),
          f = r(67523),
          x = r(20783),
          h = r.n(x),
          g = r(12300),
          y = r.n(g),
          v = r(39361),
          b = r(33401);
        let w = ({ comment: e, customerName: t }) => {
          let [r, n] = (0, i.useState)(e),
            [o, s] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              o &&
                setTimeout(() => {
                  s(!1);
                }, 500);
            }, [o]),
            (0, a.jsxs)('div', {
              className: 'px-6 pt-[13px] pb-[40px]',
              children: [
                (0, a.jsxs)('div', {
                  className: 'font-medium text-black-500 text-[24px] text-center mb-3',
                  children: ['Thank you, ', t, ' \uD83D\uDE4F'],
                }),
                (0, a.jsxs)('div', {
                  className: 'text-black-500 text-[14px] text-center mb-4',
                  children: [
                    'We sincerely appreciate your positive feedback.',
                    a.jsx('br', {}),
                    'It means a lot to the team!',
                  ],
                }),
                a.jsx('div', {
                  className: 'text-black-400 text-[14px] text-center font-medium mb-[7px]',
                  children: 'Help us spread the word',
                }),
                a.jsx('div', {
                  className: `text-black-500 text-[10px] text-center mb-[20px] ${u().className}`,
                  children: 'Review us on Google, Tripadvisor, or Wongnai',
                }),
                (0, a.jsxs)('div', {
                  className: 'flex space-x-[20px] items-center justify-center mb-[30px]',
                  children: [
                    a.jsx(h(), {
                      target: '_blank',
                      className: 'cursor-pointer',
                      href: 'https://g.page/r/CRr-1gtSxRZMEBM/review',
                      children: a.jsx(p.Kv, {}),
                    }),
                    a.jsx(h(), {
                      target: '_blank',
                      className: 'cursor-pointer',
                      href: 'https://www.tripadvisor.com/UserReviewEdit-g293916-d21373705-Yellow_Lane-Bangkok.html',
                      children: a.jsx(p.Ui, {}),
                    }),
                    a.jsx(h(), {
                      target: '_blank',
                      className: 'cursor-pointer',
                      href: 'https://www.wongnai.com/restaurants/662304hK-yellow-lane-cafe-ari',
                      children: a.jsx(p.w9, {}),
                    }),
                  ],
                }),
                a.jsx('div', {
                  className: 'font-medium text-[14px] text-black-400',
                  children: ' Here’s your review to copy & paste ',
                }),
                a.jsx('div', {
                  className: `mt-[10px] mb-[23px] ${u().className}`,
                  children: a.jsx(b.Z, {
                    valueInput: r,
                    required: !0,
                    valuePlaceholder: '',
                    onChange: (e) => n(e.target.value),
                  }),
                }),
                a.jsx(v.Z, {
                  placement: 'top',
                  title: 'Copied review',
                  open: o,
                  children: a.jsx(f.zx, {
                    onClick: () => {
                      y()(r), s(!0);
                    },
                    variant: 'primary',
                    children: 'Copy your review',
                  }),
                }),
              ],
            })
          );
        };
        var j = r(96609),
          k = r(86955),
          C = r(6650);
        let P = () => {
          let e = (0, s.useRouter)(),
            t = (0, s.useSearchParams)().get('bill_id'),
            { data: r, isFetching: c } = (0, k.LJ)({ id: t || '' }),
            u = r?.data,
            [d, { isLoading: p }] = (0, o.Wo)(),
            [f, x] = (0, i.useState)(''),
            [h, g] = (0, i.useState)(''),
            y = (0, C.oH)(f),
            v = (0, C.Y0)(h),
            b = '' !== f.trim() && y && ('' === h.trim() || v);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              !!u?.feedback_info &&
                (u?.feedback_info?.stars > 3
                  ? a.jsx(n.Z, {
                      isShowPrimaryButton: !1,
                      isShowBackBtn: !0,
                      onClickBackBtn: () => e.push(`/receipt?bill_id=${t}`),
                      secondaryBtnChildren: 'Start ordering again',
                      onClickSecondaryBtn: () => e.push('/menu'),
                      title: 'Feedback',
                      disabledBackBtn: c,
                      disabledSecondary: c,
                      children: a.jsx(w, { customerName: u?.customer_name, comment: u?.feedback_info?.comment }),
                    })
                  : a.jsx(n.Z, {
                      disabledSecondary: !b || p || c,
                      disabledBackBtn: p || c,
                      disabledPrimary: p || c,
                      isShowPrimaryButton: !0,
                      isShowBackBtn: !0,
                      primaryBtnChildren: 'Start ordering again',
                      onClickPrimaryBtn: () => e.push('/menu'),
                      secondaryBtnChildren: 'Submit your contact details',
                      onClickBackBtn: () => e.push(`/receipt?bill_id=${t}`),
                      onClickSecondaryBtn: () => {
                        d({ data: { id: u.feedback_info?._id, contact_email: f.trim(), contact_phone: h.trim() } })
                          .unwrap()
                          .then(() => e.push(`/feedback/rating/thank-you?bill_id=${t}`))
                          .catch((e) => l.toast.error(e?.data?.message));
                      },
                      title: 'Feedback',
                      children: a.jsx(m, {
                        email: f,
                        phone: h,
                        isEmailValid: y,
                        isPhoneValid: v,
                        handleEmailChange: (e) => {
                          x(e.target.value);
                        },
                        handlePhoneChange: (e) => {
                          g(e.target.value);
                        },
                        disabled: p || c,
                      }),
                    })),
              (c || p) && a.jsx(j.Z, {}),
            ],
          });
        };
      },
      96609: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => s });
        var a = r(95344),
          n = r(98251),
          o = r(77662);
        let s = () =>
          a.jsx(n.ZP, {
            theme: { token: { colorPrimary: '#131C16' } },
            children: a.jsx(o.Z, {
              className: '!fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 black-500',
              size: 'large',
            }),
          });
      },
      85787: (e, t, r) => {
        'use strict';
        r.d(t, { I: () => n });
        var a = r(3729);
        function n(e) {
          let [t, r] = (0, a.useState)(!1),
            [n, o] = (0, a.useState)(!1),
            [s, i] = (0, a.useState)(0),
            [l, c] = (0, a.useState)(0),
            u = (0, a.useCallback)(() => {
              let t = e?.current;
              t &&
                (r(t.scrollHeight > t.clientHeight),
                o(t.scrollWidth > t.clientWidth),
                i(t.scrollTop),
                c(t.scrollHeight - t.offsetHeight - t.scrollTop));
            }, [e?.current]);
          return (
            (0, a.useEffect)(() => {}, [!1, u, e?.current]),
            (0, a.useCallback)(() => {
              let t = e?.current;
              t && (i(t.scrollTop), c(t.scrollHeight - t.offsetHeight - t.scrollTop));
            }, [e?.current]),
            (0, a.useEffect)(() => {
              e?.current;
            }, [!1, u, e?.current]),
            { isVerticalScroll: t, isHorizontalScroll: n, scrollTop: s, scrollBottom: l }
          );
        }
      },
      5069: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => c });
        var a = r(95344),
          n = r(3729),
          o = r(98251),
          s = r(28646),
          i = r(9249),
          l = r.n(i);
        r(42617);
        let c = ({ valuePlaceholder: e, autoFocus: t, ...r }) => {
          let i = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              if (t && i.current) {
                let e = setTimeout(() => {
                  i?.current.focus();
                }, 1);
                return () => clearTimeout(e);
              }
            }, [t]),
            a.jsx(o.ZP, {
              theme: {
                components: { Input: { paddingInline: 15, paddingBlock: 10, borderRadius: 16 } },
                token: {
                  lineHeight: 1.85,
                  colorText: '#131C16',
                  fontSize: 14,
                  colorBgContainer: 'transparent',
                  colorBorder: 'rgba(19, 28, 22, 0.2)',
                  colorPrimary: 'transparent',
                  colorPrimaryHover: 'transparent',
                  colorPrimaryActive: 'transparent',
                  colorTextPlaceholder: 'rgba(0, 0, 0, 0.50)',
                  borderRadius: 16,
                },
              },
              children: a.jsx(s.default, { className: `${l().className}`, placeholder: e, ...r, ref: i }),
            })
          );
        };
      },
      33401: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => u });
        var a = r(95344),
          n = r(3729),
          o = r(28646),
          s = r(98251),
          i = r(9249),
          l = r.n(i);
        r(42617);
        let { TextArea: c } = o.default,
          u = ({ valueInput: e, required: t, valuePlaceholder: r, onChange: o, disabled: i, value: u, ...d }) => {
            let [m, p] = (0, n.useState)(e);
            return a.jsx(a.Fragment, {
              children: a.jsx(s.ZP, {
                theme: {
                  components: { Input: { paddingInline: 15, paddingBlock: 10 } },
                  token: {
                    lineHeight: 1.5,
                    colorText: '#131C16',
                    fontFamily: `${l()}, sans-serif`,
                    fontSize: 14,
                    colorBgContainer: 'transparent',
                    colorBorder: 'rgba(19, 28, 22, 0.2)',
                    colorPrimary: 'transparent',
                    colorPrimaryHover: 'transparent',
                    colorPrimaryActive: 'transparent',
                    colorTextPlaceholder: 'rgba(0, 0, 0, 0.50)',
                    borderRadius: 16,
                  },
                },
                children: a.jsx(c, {
                  className: l().className,
                  value: u || m,
                  required: t,
                  onChange: (e) => {
                    p(e.target.value), o && o(e);
                  },
                  placeholder: r,
                  autoSize: { minRows: 3, maxRows: 3.1 },
                  disabled: i,
                }),
              }),
            });
          };
      },
      49246: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => o });
        var a = r(95344),
          n = r(67523);
        let o = ({
          isShowPrimaryButton: e = !1,
          primaryBtnChildren: t,
          secondaryBtnChildren: r,
          disabledPrimary: o,
          disabledSecondary: s,
          onClickPrimaryBtn: i,
          onClickSecondaryBtn: l,
          isTextRequestTaxInvoice: c,
          className: u,
        }) =>
          (0, a.jsxs)('div', {
            className: `${u || ''} w-full fixed flex flex-col space-y-3 bottom-0 bg-grey-100 px-6 py-3 z-999`,
            children: [
              c &&
                a.jsx('div', {
                  className: 'text-[14px] text-black-500 text-center mb-2',
                  children:
                    'Once you request the tax invoice, a member of our staff will print it off, sign, and hand it to you.',
                }),
              e && a.jsx(n.zx, { variant: 'primary', disabled: o, onClick: i, children: t }),
              a.jsx(n.zx, { variant: 'secondary', disabled: s, onClick: l, children: r }),
            ],
          });
      },
      22781: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => u });
        var a = r(95344),
          n = r(22254),
          o = r(3729),
          s = r(67523),
          i = r(85787),
          l = r(35479),
          c = r(49246);
        let u = ({
          isShowBackBtn: e = !0,
          title: t,
          isTextRequestTaxInvoice: r,
          children: u,
          disabledPrimary: d,
          disabledSecondary: m,
          onClickSecondaryBtn: p,
          secondaryBtnChildren: f,
          onClickPrimaryBtn: x,
          primaryBtnChildren: h,
          isShowPrimaryButton: g,
          onClickBackBtn: y,
          onClickDownBtn: v,
          disabledBackBtn: b,
          isHiddenAvatar: w = !1,
        }) => {
          let j = (0, o.useRef)(null),
            { scrollTop: k, scrollBottom: C } = (0, i.I)(j);
          (0, n.useRouter)();
          let P = (0, o.useMemo)(() => (g ? '243px' : r ? '211px' : '170px'), [g, r]);
          return (0, a.jsxs)('div', {
            className: 'flex flex-col h-screen',
            children: [
              (0, a.jsxs)('div', {
                className: `${
                  k - 13 > 0 ? 'shadow-medium-bottom' : ''
                } relative w-full pt-[22px] pb-[15px] flex flex-row items-center ${
                  e ? 'justify-start pl-4' : 'justify-end pr-4'
                }`,
                children: [
                  e && a.jsx(s.hU, { icon: a.jsx(l.Y4, {}), disabled: b, onClick: y }),
                  a.jsx('span', {
                    className:
                      'w-[calc(100%-8rem)] absolute top-[40%] right-1/2 transform translate-x-1/2 text-center text-xl font-medium text-black-500',
                    children: t,
                  }),
                  !e && a.jsx(s.hU, { icon: a.jsx(l._8, {}), onClick: v }),
                ],
              }),
              a.jsx('div', { ref: j, className: `overflow-y-auto max-h-screen-${P}`, children: u }),
              a.jsx(c.Z, {
                className: C - 40 > 0 ? 'shadow-medium-top' : '',
                disabledPrimary: d,
                disabledSecondary: m,
                isTextRequestTaxInvoice: r,
                isShowPrimaryButton: g,
                onClickPrimaryBtn: x,
                primaryBtnChildren: h,
                onClickSecondaryBtn: p,
                secondaryBtnChildren: f,
              }),
            ],
          });
        };
      },
      6650: (e, t, r) => {
        'use strict';
        r.d(t, {
          Bg: () => o,
          Pb: () => u,
          T4: () => m,
          Y0: () => l,
          oH: () => i,
          r$: () => c,
          vV: () => d,
          xz: () => s,
        }),
          r(67113);
        var a = r(59828),
          n = r.n(a);
        let o = (e) => n()(e?.filter((e) => e.endsWith('option')).map((e) => (e = e.replace(' option', ''))) || []),
          s = (e) => (e ? `${e.getHours()}:${10 > e.getMinutes() ? '0' : ''}${e.getMinutes()}` : ''),
          i = (e) => '' === e.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
          l = (e) => '' === e.trim() || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(e),
          c = (e) => /^(\d[- ]?){12}\d$/.test(e),
          u = (e) => '' !== e.trim(),
          d = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
          m = (e) => (e ? Math.round(Number(e)).toLocaleString('en-US').replace(/,/g, '.') : '0');
      },
      49104: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { $$typeof: () => o, __esModule: () => n, default: () => s });
        let a = (0, r(86843).createProxy)(
            String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/feedback/rating/page.tsx`,
          ),
          { __esModule: n, $$typeof: o } = a,
          s = a.default;
      },
      42617: () => {},
    });
  var t = require('../../../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    a = t.X(0, [638, 289, 363, 662, 264, 646, 828, 361, 943, 118, 479], () => r(68411));
  module.exports = a;
})();
