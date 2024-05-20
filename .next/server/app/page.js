(() => {
  var e = {};
  (e.id = 931),
    (e.ids = [931]),
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
      75061: (e, t, a) => {
        'use strict';
        a.r(t),
          a.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => m,
            originalPathname: () => u,
            pages: () => d,
            routeModule: () => p,
            tree: () => c,
          });
        var s = a(50482),
          n = a(69108),
          r = a(62563),
          i = a.n(r),
          o = a(68300),
          l = {};
        for (let e in o)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', 'originalPathname', '__next_app__', 'routeModule'].indexOf(e) &&
            (l[e] = () => o[e]);
        a.d(t, l);
        let c = [
            '',
            {
              children: [
                '__PAGE__',
                {},
                {
                  page: [
                    () => Promise.resolve().then(a.bind(a, 51136)),
                    '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/page.tsx',
                  ],
                  metadata: {
                    icon: [async (e) => (await Promise.resolve().then(a.bind(a, 73881))).default(e)],
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
                () => Promise.resolve().then(a.bind(a, 32396)),
                '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(a.bind(a, 48206)),
                '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/not-found.tsx',
              ],
              metadata: {
                icon: [async (e) => (await Promise.resolve().then(a.bind(a, 73881))).default(e)],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          d = ['/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/page.tsx'],
          u = '/page',
          m = { require: a, loadChunk: () => Promise.resolve() },
          p = new s.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: '/page',
              pathname: '/',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      63723: (e, t, a) => {
        Promise.resolve().then(a.bind(a, 91532));
      },
      5251: (e, t, a) => {
        'use strict';
        a.d(t, { R: () => r });
        let s = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
          n = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
          r = function (e, t, a, r) {
            let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              o = i ? '&' : '';
            return {
              [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, s(r)), { animationPlayState: 'paused' }),
              [`${o}${e}-leave`]: Object.assign(Object.assign({}, n(r)), { animationPlayState: 'paused' }),
              [`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: 'running' },
              [`${o}${e}-leave${e}-leave-active`]: {
                animationName: a,
                animationPlayState: 'running',
                pointerEvents: 'none',
              },
            };
          };
      },
      66571: (e, t, a) => {
        'use strict';
        a.d(t, { Z: () => l });
        var s = a(93727),
          n = a(65830),
          r = a(3729),
          i = 0,
          o = (0, n.Z)({}, r).useId;
        let l = o
          ? function (e) {
              var t = o();
              return e || t;
            }
          : function (e) {
              var t = r.useState('ssr-id'),
                a = (0, s.Z)(t, 2),
                n = a[0],
                o = a[1];
              return (r.useEffect(function () {
                var e = i;
                (i += 1), o('rc_unique_'.concat(e));
              }, []),
              e)
                ? e
                : n;
            };
      },
      91532: (e, t, a) => {
        'use strict';
        a.r(t), a.d(t, { default: () => p });
        var s = a(95344),
          n = a(67523),
          r = a(47307),
          i = a(22786),
          o = a(29096),
          l = a(41223),
          c = a.n(l),
          d = a(22254),
          u = a(3729),
          m = a(36013);
        function p() {
          let e = (0, d.useRouter)(),
            { isMobile: t } = (0, r.d)(),
            a = (0, d.useSearchParams)().get('table_id'),
            l = (0, m.I0)(),
            [p, x] = (0, u.useState)(!1);
          return (0, s.jsxs)('div', {
            className: 'w-full h-full max-md:bg-red-100 max-md:pt-[56px] relative',
            children: [
              (0, s.jsxs)('div', {
                className: 'max-md:block hidden',
                children: [
                  (0, s.jsxs)('div', {
                    className: 'px-[50px]',
                    children: [
                      s.jsx('div', {
                        className: 'w-[73px] h-[73px] bg-white rounded-full flex items-center justify-center',
                        children: s.jsx(c(), {
                          priority: !0,
                          src: '/assets/icons/mini-logo.svg',
                          alt: 'logo',
                          width: 50,
                          height: 50,
                        }),
                      }),
                      (0, s.jsxs)('div', {
                        className: 'flex flex-col text-white space-y-5 mt-[50px]',
                        children: [
                          s.jsx('span', { className: 'font-medium text-[60px] leading-10', children: 'Food for' }),
                          s.jsx('span', { className: 'font-medium text-[60px] leading-10', children: 'Everyone' }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)('div', {
                    className: 'flex pt-[45px]',
                    children: [
                      s.jsx(c(), {
                        className: 'absolute left-0 bottom-[5%]',
                        priority: !0,
                        src: '/assets/icons/person1.svg',
                        alt: 'person1',
                        width: 250,
                        height: 250,
                      }),
                      s.jsx(c(), {
                        className: 'pt-[50px] absolute right-0 bottom-[5%]',
                        priority: !0,
                        src: '/assets/icons/person2.svg',
                        alt: 'person2',
                        width: 150,
                        height: 200,
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)('div', {
                className: 'md:block hidden h-full',
                children: [
                  (0, s.jsxs)('div', {
                    className: 'w-full h-2/3 relative',
                    children: [
                      (0, s.jsxs)('div', {
                        className:
                          'flex flex-col z-20 absolute top-[10%] right-1/2 transform translate-x-1/2 items-center justify-center',
                        children: [
                          s.jsx('span', {
                            className: 'text-white font-bold text-[40px] whitespace-nowrap',
                            children: 'Why stay hungry when',
                          }),
                          s.jsx('span', {
                            className: 'text-white font-bold text-[40px] whitespace-nowrap',
                            children: 'you can order form Bella Onojie',
                          }),
                        ],
                      }),
                      s.jsx(c(), {
                        priority: !0,
                        src: '/assets/images/landing-page.png',
                        alt: 'landing-page',
                        fill: !0,
                        className: 'z-10',
                      }),
                    ],
                  }),
                  s.jsx(c(), {
                    priority: !0,
                    className: 'absolute bottom-[85%] left-0 z-10',
                    src: '/assets/icons/logo.svg',
                    alt: 'logo',
                    width: 200,
                    height: 200,
                  }),
                  s.jsx('div', {
                    className: 'w-full h-1/3 bg-white relative',
                    children: s.jsx(c(), {
                      priority: !0,
                      className: 'absolute bottom-[0%] right-1/2 transform translate-x-1/2 z-10',
                      src: '/assets/images/mobile.png',
                      alt: 'logo',
                      width: 375,
                      height: 300,
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)('div', {
                className: `absolute flex md:flex-row md:space-x-5 max-md:flex-col max-md:space-y-5
        } md:bottom-[65%] bottom-[5%] max-md:w-full px-[50px] z-30 right-1/2 transform translate-x-1/2`,
                children: [
                  s.jsx(n.zx, { className: 'md:w-[50px]', onClick: () => e.push('/login'), children: 'Login' }),
                  s.jsx(n.zx, {
                    className: 'md:w-[50px]',
                    onClick: () => {
                      a ? (l((0, o.x)(a)), e.push('/menu')) : (x(!0), l((0, o.qB)()));
                    },
                    variant: t ? 'primary' : 'secondary',
                    children: 'Start ordering',
                  }),
                ],
              }),
              s.jsx(i.Z, {
                open: p,
                title: 'Notification',
                okText: 'Confirm',
                onOk: () => {
                  x(!1);
                },
                onCancel: () => {
                  x(!1);
                },
                children: 'You need to scan the QR code on the dining table before placing an order.',
              }),
            ],
          });
        }
      },
      96609: (e, t, a) => {
        'use strict';
        a.d(t, { Z: () => i });
        var s = a(95344),
          n = a(98251),
          r = a(77662);
        let i = () =>
          s.jsx(n.ZP, {
            theme: { token: { colorPrimary: '#131C16' } },
            children: s.jsx(r.Z, {
              className: '!fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 black-500',
              size: 'large',
            }),
          });
      },
      47307: (e, t, a) => {
        'use strict';
        a.d(t, { d: () => n });
        var s = a(3729);
        function n() {
          let e = () => {
              let { innerWidth: e, innerHeight: t } = { innerWidth: 0, innerHeight: 0 };
              return { width: e, height: t, isMobile: e < 768 };
            },
            [t, a] = (0, s.useState)(e()),
            n = (0, s.useCallback)(() => {
              a(e());
            }, []);
          return (0, s.useEffect)(() => {}, [!1, n]), t;
        }
      },
      22786: (e, t, a) => {
        'use strict';
        a.d(t, { Z: () => l });
        var s = a(95344),
          n = a(20609),
          r = a(67523),
          i = a(96609);
        a(85136);
        var o = a(35479);
        let l = ({
          open: e,
          onOk: t,
          onCancel: a,
          okText: l,
          loading: c,
          disabled: d,
          children: u,
          title: m,
          className: p,
        }) =>
          (0, s.jsxs)(n.Z, {
            open: e,
            title: m,
            onOk: t,
            onCancel: a,
            className: `customized-modal ${p || ''}`,
            confirmLoading: !0,
            centered: !0,
            closeIcon: s.jsx(o.Ai, {}),
            footer: [
              s.jsx(r.zx, { disabled: d || c, variant: 'secondary', onClick: t, children: l || 'Confirm' }, 'ok'),
            ],
            children: [u, c && s.jsx(i.Z, {})],
          });
      },
      51136: (e, t, a) => {
        'use strict';
        a.r(t), a.d(t, { $$typeof: () => r, __esModule: () => n, default: () => i });
        let s = (0, a(86843).createProxy)(
            String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/page.tsx`,
          ),
          { __esModule: n, $$typeof: r } = s,
          i = s.default;
      },
      85136: () => {},
    });
  var t = require('../webpack-runtime.js');
  t.C(e);
  var a = (e) => t((t.s = e)),
    s = t.X(0, [638, 289, 363, 662, 223, 503, 609, 118, 479], () => a(75061));
  module.exports = s;
})();
