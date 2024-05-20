(() => {
  var e = {};
  (e.id = 693),
    (e.ids = [693]),
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
      77366: (e, t, s) => {
        'use strict';
        s.r(t),
          s.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => x,
            originalPathname: () => u,
            pages: () => d,
            routeModule: () => p,
            tree: () => o,
          });
        var r = s(50482),
          a = s(69108),
          i = s(62563),
          n = s.n(i),
          l = s(68300),
          c = {};
        for (let e in l)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', 'originalPathname', '__next_app__', 'routeModule'].indexOf(e) &&
            (c[e] = () => l[e]);
        s.d(t, c);
        let o = [
            '',
            {
              children: [
                'receipt',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(s.bind(s, 16861)),
                        '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/receipt/page.tsx',
                      ],
                    },
                  ],
                },
                {
                  metadata: {
                    icon: [async (e) => (await Promise.resolve().then(s.bind(s, 73881))).default(e)],
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
                () => Promise.resolve().then(s.bind(s, 32396)),
                '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(s.bind(s, 48206)),
                '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/not-found.tsx',
              ],
              metadata: {
                icon: [async (e) => (await Promise.resolve().then(s.bind(s, 73881))).default(e)],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          d = ['/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/receipt/page.tsx'],
          u = '/receipt/page',
          x = { require: s, loadChunk: () => Promise.resolve() },
          p = new r.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: '/receipt/page',
              pathname: '/receipt',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: o },
          });
      },
      2873: (e, t, s) => {
        Promise.resolve().then(s.bind(s, 45525));
      },
      45525: (e, t, s) => {
        'use strict';
        s.r(t), s.d(t, { default: () => h });
        var r = s(95344),
          a = s(22781),
          i = s(96609),
          n = s(11465),
          l = s(97383),
          c = s(6650),
          o = s(9249),
          d = s.n(o),
          u = s(22254),
          x = s(3729);
        let p = ({ className: e, receiptData: t, isLoading: s }) => {
          let [a, o] = (0, x.useState)(!1),
            p = (0, u.useRouter)(),
            m = (0, u.useSearchParams)().get('bill_id'),
            h = t?.total_discount || 0,
            v = t?.sub_total,
            j = t?.service_charge,
            f = t?.vat_charge,
            g = t?.discount_info,
            y = g ? (g?.type === 'FIXED_AMOUNT' ? `VND${(0, c.T4)(g?.value)}` : `${g?.value}%`) : null,
            b = [];
          if (t?.orders.length > 0) for (let e of t?.orders) for (let t of e?.items) b.push(t);
          return r.jsx('div', {
            className: `${e || ''} px-6 pt-[13px]`,
            id: 'receipt',
            children:
              s || a
                ? r.jsx(i.Z, {})
                : (0, r.jsxs)('div', {
                    children: [
                      t?.feedback_info
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsxs)('div', {
                                className: 'font-medium text-black-500 text-[24px] text-center mb-3',
                                children: ['All settled, ', t?.customer_name],
                              }),
                              (0, r.jsxs)('div', {
                                className: 'text-black-500 text-[14px] text-center mb-4',
                                children: [
                                  'Thank you so much for visiting us,',
                                  r.jsx('br', {}),
                                  'and thank you for sharing your thoughts!',
                                ],
                              }),
                            ],
                          })
                        : (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsxs)('div', {
                                className: 'font-medium text-black-500 text-[24px] text-center mb-3',
                                children: ['All settled, ', t?.customer_name, ' \uD83D\uDE4F'],
                              }),
                              (0, r.jsxs)('div', {
                                className: 'text-black-500 text-[14px] text-center mb-4',
                                children: [
                                  'Thank you so much for visiting us.',
                                  r.jsx('br', {}),
                                  'How was your overall experience today?',
                                ],
                              }),
                              r.jsx('div', {
                                className: 'flex items-center justify-center',
                                children: r.jsx(l.Z, {
                                  onRateChange: (e) => {
                                    o(!0), p.push(`/feedback?bill_id=${m}&stars=${e}`);
                                  },
                                  value: t?.feedback_info?.stars,
                                }),
                              }),
                            ],
                          }),
                      r.jsx('div', {
                        className: 'flex font-medium text-black-400 mt-[30px]',
                        children: ' Order summary ',
                      }),
                      b?.map((e, t) =>
                        r.jsxs(
                          'div',
                          {
                            className: 'mt-[20px]',
                            children: [
                              r.jsx(n.Z, {
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
                        className: 'mt-[20px] ml-[108px] pb-[40px]',
                        children: [
                          (0, r.jsxs)('div', {
                            className: `text-[10px] text-black-500 space-y-[3px] ${d().className}`,
                            children: [
                              h > 0 &&
                                (0, r.jsxs)('div', {
                                  className: 'flex items-center justify-between ',
                                  children: [
                                    (0, r.jsxs)('span', { children: [y, ' Discount '] }),
                                    (0, r.jsxs)('span', { children: ['-', (0, c.T4)(h)] }),
                                  ],
                                }),
                              (0, r.jsxs)('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  r.jsx('div', { children: ' Subtotal ' }),
                                  (0, r.jsxs)('div', { children: [' ', (0, c.T4)(v), ' '] }),
                                ],
                              }),
                              (0, r.jsxs)('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  r.jsx('div', { children: ' 10% Service Charge ' }),
                                  (0, r.jsxs)('div', { children: [' ', (0, c.T4)(j), ' '] }),
                                ],
                              }),
                              (0, r.jsxs)('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  r.jsx('div', { children: ' 7% VAT ' }),
                                  (0, r.jsxs)('div', { children: [' ', (0, c.T4)(f), ' '] }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsxs)('div', {
                            className: 'text-[14px] flex items-center mt-[7px] justify-between ',
                            children: [
                              r.jsx('div', { children: ' Total ' }),
                              (0, r.jsxs)('div', { children: [' ', (0, c.T4)(t?.total), ' '] }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
          });
        };
        var m = s(86955);
        let h = () => {
          let e = (0, u.useRouter)(),
            t = (0, u.useSearchParams)().get('bill_id'),
            { data: s, isFetching: i } = (0, m.LJ)({ id: t || '' }),
            n = r.jsx('div', { children: r.jsx('span', { children: 'Start ordering again ' }) });
          return r.jsx(a.Z, {
            isShowPrimaryButton: !1,
            onClickDownBtn: () => e.push(`/receipt/receipt-download?bill_id=${t}`),
            isShowBackBtn: !1,
            secondaryBtnChildren: n,
            onClickSecondaryBtn: () => e.push('/menu'),
            title: 'Receipt',
            children: r.jsx(p, { receiptData: s?.data, isLoading: i }),
          });
        };
      },
      97383: (e, t, s) => {
        'use strict';
        s.d(t, { Z: () => l });
        var r = s(95344),
          a = s(3729);
        s(56511);
        var i = s(82684),
          n = s(35479);
        let l = ({ onRateChange: e, value: t = 0, disabled: s }) => {
          let [l, c] = (0, a.useState)(t);
          return (
            (0, a.useEffect)(() => {
              c(t);
            }, [t]),
            r.jsx(r.Fragment, {
              children: r.jsx(i.Z, {
                style: { fontSize: 39 },
                character: r.jsx(n.Zp, {}),
                value: l,
                onChange: (t) => {
                  c(t), e && e(t);
                },
                disabled: s,
              }),
            })
          );
        };
      },
      16861: (e, t, s) => {
        'use strict';
        s.r(t), s.d(t, { $$typeof: () => i, __esModule: () => a, default: () => n });
        let r = (0, s(86843).createProxy)(
            String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/receipt/page.tsx`,
          ),
          { __esModule: a, $$typeof: i } = r,
          n = r.default;
      },
      56511: () => {},
    });
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var s = (e) => t((t.s = e)),
    r = t.X(0, [638, 289, 363, 662, 264, 223, 503, 828, 598, 609, 361, 684, 118, 479, 14], () => s(77366));
  module.exports = r;
})();
