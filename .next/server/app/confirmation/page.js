(() => {
  var e = {};
  (e.id = 123),
    (e.ids = [123]),
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
      66823: (e, t, a) => {
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
        var n = a(50482),
          r = a(69108),
          s = a(62563),
          i = a.n(s),
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
                'confirmation',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(a.bind(a, 42667)),
                        '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/confirmation/page.tsx',
                      ],
                    },
                  ],
                },
                {
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
          d = [
            '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/confirmation/page.tsx',
          ],
          u = '/confirmation/page',
          m = { require: a, loadChunk: () => Promise.resolve() },
          p = new n.AppPageRouteModule({
            definition: {
              kind: r.x.APP_PAGE,
              page: '/confirmation/page',
              pathname: '/confirmation',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      72078: (e, t, a) => {
        Promise.resolve().then(a.bind(a, 26109));
      },
      5251: (e, t, a) => {
        'use strict';
        a.d(t, { R: () => s });
        let n = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
          r = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
          s = function (e, t, a, s) {
            let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              o = i ? '&' : '';
            return {
              [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, n(s)), { animationPlayState: 'paused' }),
              [`${o}${e}-leave`]: Object.assign(Object.assign({}, r(s)), { animationPlayState: 'paused' }),
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
        var n = a(93727),
          r = a(65830),
          s = a(3729),
          i = 0,
          o = (0, r.Z)({}, s).useId;
        let l = o
          ? function (e) {
              var t = o();
              return e || t;
            }
          : function (e) {
              var t = s.useState('ssr-id'),
                a = (0, n.Z)(t, 2),
                r = a[0],
                o = a[1];
              return (s.useEffect(function () {
                var e = i;
                (i += 1), o('rc_unique_'.concat(e));
              }, []),
              e)
                ? e
                : r;
            };
      },
      26109: (e, t, a) => {
        'use strict';
        a.r(t), a.d(t, { default: () => v });
        var n = a(95344),
          r = a(22781),
          s = a(11465),
          i = a(82018),
          o = a(30159),
          l = a(9249),
          c = a.n(l),
          d = a(22254),
          u = a(3729),
          m = a(36013),
          p = a(96609),
          x = a(86955),
          h = a(6650);
        let v = () => {
          let e = (0, d.useRouter)(),
            t = (0, d.useSearchParams)(),
            [a, l] = (0, u.useState)(!1),
            v = t.get('bill_id'),
            { data: f, isFetching: y } = (0, x.LJ)({ id: v || '' });
          (0, u.useEffect)(() => {
            l(!1);
          }, []);
          let [_, { isLoading: g }] = (0, o.BP)(),
            j = f?.data,
            b = j?.total_discount || 0,
            P = j?.sub_total,
            S = j?.service_charge,
            $ = j?.vat_charge,
            N = j?.discount_info,
            k = N ? ('FIXED_AMOUNT' === N.type ? `${(0, h.T4)(N?.value)} VND` : `${N?.value}%`) : null,
            q = (0, m.I0)(),
            w = [];
          if (j?.orders?.length > 0) for (let e of j?.orders) for (let t of e?.items) w.push(t);
          let B = n.jsx('div', {
              className: 'px-4 pt-[13px] max-h-[var(--100vh)]',
              children:
                j?.orders?.length > 0 &&
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsxs)('div', {
                      className: 'text-center text-[24px] font-medium text-black-500',
                      children: ['We’ve got your order, ', j?.customer_name],
                    }),
                    n.jsx('div', {
                      className: 'text-center text-[14px] text-black-500 mt-[12px]',
                      children: 'Speak to one of our team members if you have any questions about your order.',
                    }),
                    n.jsx('div', { className: 'flex font-medium text-black-400 mt-[30px]', children: 'Order summary' }),
                    w?.map((e, t) =>
                      n.jsxs(
                        'div',
                        {
                          className: 'mt-[20px]',
                          children: [
                            n.jsx(s.Z, {
                              name: e?.product_info?.name,
                              price: e?.price,
                              priceAfterDiscount: e?.total_price_product_after_discount,
                              image_url: e?.image_url,
                              quantity: e?.quantity,
                              modifiers: e?.modifiers_info,
                              note: e?.notes || void 0,
                              dietary_restrictions: e?.dietary_requests || [],
                            }),
                            n.jsx('hr', { className: 'w-full border-t border-black-100 mt-[18px] mb-[22px]' }),
                          ],
                        },
                        t,
                      ),
                    ),
                    (0, n.jsxs)('div', {
                      className: 'ml-[108px] pb-[40px]',
                      children: [
                        (0, n.jsxs)('div', {
                          className: `text-[10px] text-black-500 space-y-[3px] ${c().className}`,
                          children: [
                            b > 0 &&
                              (0, n.jsxs)('div', {
                                className: 'flex items-center justify-between ',
                                children: [
                                  (0, n.jsxs)('span', { children: [k, ' Discount '] }),
                                  (0, n.jsxs)('span', { children: ['-', (0, h.T4)(b)] }),
                                ],
                              }),
                            (0, n.jsxs)('div', {
                              className: 'flex items-center justify-between',
                              children: [
                                n.jsx('div', { children: ' Subtotal ' }),
                                (0, n.jsxs)('div', { children: [' ', (0, h.T4)(P), ' '] }),
                              ],
                            }),
                            (0, n.jsxs)('div', {
                              className: 'flex items-center justify-between',
                              children: [
                                n.jsx('div', { children: ' 10% Service Charge ' }),
                                (0, n.jsxs)('div', { children: [' ', (0, h.T4)(S), ' '] }),
                              ],
                            }),
                            (0, n.jsxs)('div', {
                              className: 'flex items-center justify-between',
                              children: [
                                n.jsx('div', { children: ' 7% VAT ' }),
                                (0, n.jsxs)('div', { children: [' ', (0, h.T4)($), ' '] }),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)('div', {
                          className: 'text-[14px] flex items-center mt-[7px] justify-between',
                          children: [
                            n.jsx('div', { children: ' Total ' }),
                            (0, n.jsxs)('div', { children: [' ', (0, h.T4)(j?.total), ' '] }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            }),
            T = (0, n.jsxs)('div', {
              children: [
                n.jsx('span', { children: 'Pay now ' }),
                ' ',
                (0, n.jsxs)('span', { className: 'font-normal', children: ['・ Total ', (0, h.T4)(j?.total)] }),
              ],
            });
          return (
            (0, u.useEffect)(() => {
              q((0, i.ZW)());
            }, [q]),
            (0, n.jsxs)(r.Z, {
              disabledPrimary: y || g || a,
              disabledSecondary: y || g || a,
              disabledBackBtn: y || g || a,
              isShowPrimaryButton: !0,
              isShowBackBtn: !0,
              onClickBackBtn: () => e.push(v ? `/basket?bill_id=${v}` : '/basket'),
              primaryBtnChildren: 'Order something else',
              onClickPrimaryBtn: () => e.push(v ? `/menu?bill_id=${v}` : '/menu'),
              secondaryBtnChildren: T,
              onClickSecondaryBtn: () => {
                _({ data: { bill_id: v } })
                  .unwrap()
                  .then((t) => {
                    l(!0), q((0, i.ZW)()), e.push(`${t.data.checkoutUrl}`);
                  });
              },
              title: 'Confirmation',
              children: [(y || g || a) && n.jsx(p.Z, {}), B],
            })
          );
        };
      },
      42667: (e, t, a) => {
        'use strict';
        a.r(t), a.d(t, { $$typeof: () => s, __esModule: () => r, default: () => i });
        let n = (0, a(86843).createProxy)(
            String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/confirmation/page.tsx`,
          ),
          { __esModule: r, $$typeof: s } = n,
          i = n.default;
      },
    });
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var a = (e) => t((t.s = e)),
    n = t.X(0, [638, 289, 363, 662, 223, 503, 598, 609, 118, 479, 14], () => a(66823));
  module.exports = n;
})();
