(() => {
  var e = {};
  (e.id = 530),
    (e.ids = [530]),
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
      85292: (e, t, r) => {
        'use strict';
        r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => x,
            originalPathname: () => d,
            pages: () => u,
            routeModule: () => p,
            tree: () => c,
          });
        var a = r(50482),
          s = r(69108),
          n = r(62563),
          i = r.n(n),
          l = r(68300),
          o = {};
        for (let e in l)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', 'originalPathname', '__next_app__', 'routeModule'].indexOf(e) &&
            (o[e] = () => l[e]);
        r.d(t, o);
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
                        'thank-you',
                        {
                          children: [
                            '__PAGE__',
                            {},
                            {
                              page: [
                                () => Promise.resolve().then(r.bind(r, 66628)),
                                '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/feedback/rating/thank-you/page.tsx',
                              ],
                            },
                          ],
                        },
                        {},
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
            '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/feedback/rating/thank-you/page.tsx',
          ],
          d = '/feedback/rating/thank-you/page',
          x = { require: r, loadChunk: () => Promise.resolve() },
          p = new a.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: '/feedback/rating/thank-you/page',
              pathname: '/feedback/rating/thank-you',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      71159: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 36153));
      },
      36153: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var a = r(95344),
          s = r(22781),
          n = r(96609),
          i = r(86955),
          l = r(22254);
        let o = () => {
          let e = (0, l.useRouter)(),
            t = (0, l.useSearchParams)().get('bill_id'),
            { data: r, isFetching: o } = (0, i.LJ)({ id: t || '' }),
            c = r?.data,
            u = (0, a.jsxs)('div', {
              className: 'px-6 pt-[13px]',
              children: [
                (0, a.jsxs)('div', {
                  className: 'font-medium text-black-500 text-[24px] text-center mb-3',
                  children: ['Thank you, ', c?.customer_name, ' \uD83D\uDE4F'],
                }),
                a.jsx('div', {
                  className: 'text-black-500 text-[14px] text-center mb-4',
                  children: 'We’ll be in touch soon!',
                }),
              ],
            }),
            d = a.jsx('div', { children: a.jsx('span', { children: 'Start ordering again ' }) });
          return a.jsx(s.Z, {
            isShowPrimaryButton: !1,
            isShowBackBtn: !0,
            onClickBackBtn: () => {
              e.push(`/receipt?bill_id=${t}`);
            },
            primaryBtnChildren: 'Order something else',
            secondaryBtnChildren: d,
            onClickSecondaryBtn: () => e.push('/menu'),
            title: 'Feedback',
            children: o ? a.jsx(n.Z, {}) : u,
          });
        };
      },
      96609: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => i });
        var a = r(95344),
          s = r(98251),
          n = r(77662);
        let i = () =>
          a.jsx(s.ZP, {
            theme: { token: { colorPrimary: '#131C16' } },
            children: a.jsx(n.Z, {
              className: '!fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 black-500',
              size: 'large',
            }),
          });
      },
      85787: (e, t, r) => {
        'use strict';
        r.d(t, { I: () => s });
        var a = r(3729);
        function s(e) {
          let [t, r] = (0, a.useState)(!1),
            [s, n] = (0, a.useState)(!1),
            [i, l] = (0, a.useState)(0),
            [o, c] = (0, a.useState)(0),
            u = (0, a.useCallback)(() => {
              let t = e?.current;
              t &&
                (r(t.scrollHeight > t.clientHeight),
                n(t.scrollWidth > t.clientWidth),
                l(t.scrollTop),
                c(t.scrollHeight - t.offsetHeight - t.scrollTop));
            }, [e?.current]);
          return (
            (0, a.useEffect)(() => {}, [!1, u, e?.current]),
            (0, a.useCallback)(() => {
              let t = e?.current;
              t && (l(t.scrollTop), c(t.scrollHeight - t.offsetHeight - t.scrollTop));
            }, [e?.current]),
            (0, a.useEffect)(() => {
              e?.current;
            }, [!1, u, e?.current]),
            { isVerticalScroll: t, isHorizontalScroll: s, scrollTop: i, scrollBottom: o }
          );
        }
      },
      49246: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => n });
        var a = r(95344),
          s = r(67523);
        let n = ({
          isShowPrimaryButton: e = !1,
          primaryBtnChildren: t,
          secondaryBtnChildren: r,
          disabledPrimary: n,
          disabledSecondary: i,
          onClickPrimaryBtn: l,
          onClickSecondaryBtn: o,
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
              e && a.jsx(s.zx, { variant: 'primary', disabled: n, onClick: l, children: t }),
              a.jsx(s.zx, { variant: 'secondary', disabled: i, onClick: o, children: r }),
            ],
          });
      },
      22781: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => u });
        var a = r(95344),
          s = r(22254),
          n = r(3729),
          i = r(67523),
          l = r(85787),
          o = r(35479),
          c = r(49246);
        let u = ({
          isShowBackBtn: e = !0,
          title: t,
          isTextRequestTaxInvoice: r,
          children: u,
          disabledPrimary: d,
          disabledSecondary: x,
          onClickSecondaryBtn: p,
          secondaryBtnChildren: h,
          onClickPrimaryBtn: m,
          primaryBtnChildren: y,
          isShowPrimaryButton: f,
          onClickBackBtn: g,
          onClickDownBtn: b,
          disabledBackBtn: v,
          isHiddenAvatar: k = !1,
        }) => {
          let j = (0, n.useRef)(null),
            { scrollTop: P, scrollBottom: _ } = (0, l.I)(j);
          (0, s.useRouter)();
          let w = (0, n.useMemo)(() => (f ? '243px' : r ? '211px' : '170px'), [f, r]);
          return (0, a.jsxs)('div', {
            className: 'flex flex-col h-screen',
            children: [
              (0, a.jsxs)('div', {
                className: `${
                  P - 13 > 0 ? 'shadow-medium-bottom' : ''
                } relative w-full pt-[22px] pb-[15px] flex flex-row items-center ${
                  e ? 'justify-start pl-4' : 'justify-end pr-4'
                }`,
                children: [
                  e && a.jsx(i.hU, { icon: a.jsx(o.Y4, {}), disabled: v, onClick: g }),
                  a.jsx('span', {
                    className:
                      'w-[calc(100%-8rem)] absolute top-[40%] right-1/2 transform translate-x-1/2 text-center text-xl font-medium text-black-500',
                    children: t,
                  }),
                  !e && a.jsx(i.hU, { icon: a.jsx(o._8, {}), onClick: b }),
                ],
              }),
              a.jsx('div', { ref: j, className: `overflow-y-auto max-h-screen-${w}`, children: u }),
              a.jsx(c.Z, {
                className: _ - 40 > 0 ? 'shadow-medium-top' : '',
                disabledPrimary: d,
                disabledSecondary: x,
                isTextRequestTaxInvoice: r,
                isShowPrimaryButton: f,
                onClickPrimaryBtn: m,
                primaryBtnChildren: y,
                onClickSecondaryBtn: p,
                secondaryBtnChildren: h,
              }),
            ],
          });
        };
      },
      66628: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { $$typeof: () => n, __esModule: () => s, default: () => i });
        let a = (0, r(86843).createProxy)(
            String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/feedback/rating/thank-you/page.tsx`,
          ),
          { __esModule: s, $$typeof: n } = a,
          i = a.default;
      },
    });
  var t = require('../../../../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    a = t.X(0, [638, 289, 662, 118, 479], () => r(85292));
  module.exports = a;
})();
