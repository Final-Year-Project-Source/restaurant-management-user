(() => {
  var e = {};
  (e.id = 26),
    (e.ids = [26]),
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
      32606: (e, t, a) => {
        'use strict';
        a.r(t),
          a.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => p,
            originalPathname: () => u,
            pages: () => c,
            routeModule: () => m,
            tree: () => l,
          });
        var r = a(50482),
          s = a(69108),
          i = a(62563),
          n = a.n(i),
          o = a(68300),
          d = {};
        for (let e in o)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', 'originalPathname', '__next_app__', 'routeModule'].indexOf(e) &&
            (d[e] = () => o[e]);
        a.d(t, d);
        let l = [
            '',
            {
              children: [
                'basket',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(a.bind(a, 82508)),
                        '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/basket/page.tsx',
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
          c = ['/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/basket/page.tsx'],
          u = '/basket/page',
          p = { require: a, loadChunk: () => Promise.resolve() },
          m = new r.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: '/basket/page',
              pathname: '/basket',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      33325: (e, t, a) => {
        Promise.resolve().then(a.bind(a, 86751));
      },
      5251: (e, t, a) => {
        'use strict';
        a.d(t, { R: () => i });
        let r = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
          s = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
          i = function (e, t, a, i) {
            let n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              o = n ? '&' : '';
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
                animationName: a,
                animationPlayState: 'running',
                pointerEvents: 'none',
              },
            };
          };
      },
      66571: (e, t, a) => {
        'use strict';
        a.d(t, { Z: () => d });
        var r = a(93727),
          s = a(65830),
          i = a(3729),
          n = 0,
          o = (0, s.Z)({}, i).useId;
        let d = o
          ? function (e) {
              var t = o();
              return e || t;
            }
          : function (e) {
              var t = i.useState('ssr-id'),
                a = (0, r.Z)(t, 2),
                s = a[0],
                o = a[1];
              return (i.useEffect(function () {
                var e = n;
                (n += 1), o('rc_unique_'.concat(e));
              }, []),
              e)
                ? e
                : s;
            };
      },
      86751: (e, t, a) => {
        'use strict';
        a.r(t), a.d(t, { default: () => j });
        var r = a(95344),
          s = a(5069),
          i = a(22781),
          n = a(96609),
          o = a(22786),
          d = a(11465),
          l = a(6650),
          c = a(9249),
          u = a.n(c);
        let p = ({ discountAmount: e, serviceCharge: t, vat: a, subTotal: s, total: i, className: n, discount: o }) => {
          let d = o ? (o?.type === 'FIXED_AMOUNT' ? `${(0, l.T4)(o?.value)} VND` : `${o?.value}%`) : null;
          return (0, r.jsxs)('div', {
            className: `${n || ''} flex flex-col space-y-[7px] ml-[108px] text-black-500`,
            children: [
              (0, r.jsxs)('div', {
                className: `text-[10px] font-normal ${u().className}`,
                children: [
                  e > 0 &&
                    (0, r.jsxs)('div', {
                      className: 'flex items-center justify-between ',
                      children: [
                        (0, r.jsxs)('span', { children: [d, ' Discount '] }),
                        (0, r.jsxs)('span', { children: ['-', (0, l.T4)(e || 0)] }),
                      ],
                    }),
                  (0, r.jsxs)('div', {
                    className: 'flex items-center justify-between ',
                    children: [r.jsx('span', { children: 'Subtotal' }), r.jsx('span', { children: (0, l.T4)(s) })],
                  }),
                  (0, r.jsxs)('div', {
                    className: 'flex items-center justify-between',
                    children: [
                      r.jsx('span', { children: '10% Service Charge' }),
                      r.jsx('span', { children: (0, l.T4)(t) }),
                    ],
                  }),
                  (0, r.jsxs)('div', {
                    className: 'flex items-center justify-between',
                    children: [r.jsx('span', { children: '7% VAT' }), r.jsx('span', { children: (0, l.T4)(a) })],
                  }),
                ],
              }),
              (0, r.jsxs)('div', {
                className: 'flex items-center justify-between text-sm  font-normal',
                children: [r.jsx('span', { children: 'Total' }), r.jsx('span', { children: (0, l.T4)(i) })],
              }),
            ],
          });
        };
        var m = a(82018),
          h = a(86955),
          x = a(73593),
          f = a(30159),
          y = a(75992),
          g = a(22254),
          b = a(3729),
          _ = a(36013),
          v = a(1208);
        let j = () => {
          let e = (0, g.useRouter)(),
            [t, a] = (0, b.useState)(''),
            [c, u] = (0, b.useState)(''),
            [j, P] = (0, b.useState)(''),
            [k, N] = (0, b.useState)([]),
            w = (0, g.useSearchParams)().get('bill_id'),
            q = (0, _.v9)((e) => e.basketReducer.basket),
            $ = (0, _.I0)(),
            S = (0, _.v9)((e) => e.tableReducer.tableId),
            { data: T } = (0, y.fq)({ id: S || '' }, { skip: !S }),
            C = T?.data,
            { data: M } = (0, x.$r)({ id: C?.discount }, { skip: !C?.discount }),
            Z = M?.data,
            [B, I] = (0, b.useState)([]),
            [E, F] = (0, b.useState)(!0),
            [A, O] = (0, b.useState)(!1),
            [U, { isLoading: D }] = (0, f.BP)(),
            [R, { isLoading: G }] = (0, h.w2)(),
            [L, { isLoading: Y }] = (0, h.oQ)(),
            { data: W, isFetching: X } = (0, h.LJ)({ id: w || '' }, { skip: !w });
          (0, b.useEffect)(() => {
            N(q?.orderItems || []), w && I(W?.data.orders || []), A || G || Y || X || F(!1);
          }, [q, w, W, G, Y, X, A]),
            (0, b.useEffect)(() => {
              k?.length || B?.length || E || A || G || Y || X || e.push('/menu');
            }, [k, B, E, e, A, G, Y, X]);
          let z = (0, b.useCallback)((e) => e?.modifiers?.reduce((t, a) => t + a?.price * e?.quantity, 0), [Z]);
          var H = (0, b.useMemo)(() => {
            let e = k?.reduce((e, t) => e + +t?.product?.price * t?.quantity + z(t), 0);
            if (W) {
              for (let t of W?.data.orders)
                for (let a of t.items)
                  if (((e += Number(a.price * a.quantity)), a.modifiers_info))
                    for (let t of a.modifiers_info) e += Number(t.price * a.quantity);
            }
            return e;
          }, [k, Z, z, W]);
          let V = Z ? (Z?.type === 'FIXED_AMOUNT' ? Z?.value : Math.round(((Z?.value * H) / 100) * 100) / 100) : 0,
            J = Math.round((H - V) * 100) / 100 > 0 ? Math.round((H - V) * 100) / 100 : 0,
            K = Math.round(((10 * J) / 100) * 100) / 100,
            Q = Math.round(((7.7 * J) / 100) * 100) / 100,
            ee = Math.round((J + Q + K) * 100) / 100,
            et = () => {
              if ((F(!0), w && k?.length > 0)) {
                let t = {
                  id: w,
                  orderItems: k?.map((e) => ({
                    ...e,
                    product: e.product.id,
                    modifiers: e.modifiers.map((e) => e._id),
                    dietary_requests: e.dietary_restrictions,
                  })),
                };
                O(!0),
                  L({ data: t })
                    .unwrap()
                    .then(() => e.push(`/confirmation?bill_id=${w}`))
                    .catch((e) => {
                      F(!1), v.toast.error(e.data.message);
                    });
              } else e.push(`/confirmation?bill_id=${w}`);
            },
            ea = () => {
              let a = {
                orderItems: k?.map((e) => ({
                  ...e,
                  modifiers: e.modifiers.map((e) => e._id),
                  product: e.product.id,
                  dietary_requests: e.dietary_restrictions,
                })),
                customer_name: t.trim(),
                dining_table_id: S,
                discount_id: C?.discount,
              };
              O(!0),
                R({ data: a })
                  .unwrap()
                  .then((t) => {
                    $((0, m.ZW)()),
                      U({ data: { bill_id: t.data.id } })
                        .unwrap()
                        .then((t) => {
                          e.push(t.data.checkoutUrl);
                        });
                  })
                  .catch((e) => v.toast.error(e.data.message)),
                O(!0),
                P('');
            },
            er = () => {
              let a = {
                orderItems: k?.map((e) => ({
                  ...e,
                  modifiers: e.modifiers.map((e) => e._id),
                  product: e.product.id,
                  dietary_requests: e.dietary_restrictions,
                })),
                customer_name: t.trim(),
                dining_table_id: S,
                discount_id: C?.discount,
              };
              O(!0),
                R({ data: a })
                  .unwrap()
                  .then((t) => {
                    e.push(`/confirmation?bill_id=${t.data.id}`);
                  })
                  .catch((e) => v.toast.error(e.data.message)),
                P('');
            },
            es = (0, r.jsxs)('div', {
              children: [
                r.jsx('span', { children: 'Order & pay now' }),
                ' ',
                (0, r.jsxs)('span', { className: 'font-normal', children: ['・ ', `Total ${(0, l.T4)(ee)}`] }),
              ],
            }),
            ei = (0, r.jsxs)('div', {
              className: 'h-full flex flex-col space-y-5 px-6 pt-[13px]',
              children: [
                B?.length > 0 &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      B.map((e, t) =>
                        (0, r.jsxs)(
                          'div',
                          {
                            className: 'space-y-[20px]',
                            children: [
                              (0, r.jsxs)('span', {
                                className: 'text-sm font-medium text-black-400',
                                children: ['Order placed at ', (0, l.xz)(new Date(e.placed_at))],
                              }),
                              e?.items.map((t, a) =>
                                r.jsxs(
                                  'div',
                                  {
                                    className: 'flex flex-col space-y-5',
                                    children: [
                                      r.jsx(d.Z, {
                                        name: t.product_info?.name,
                                        price: t.product_info?.price,
                                        priceAfterDiscount: t?.total_price_product_after_discount,
                                        image_url: t.product_info?.image_url,
                                        quantity: t.quantity,
                                        modifiers: t.modifiers_info,
                                        note: t.notes || void 0,
                                        dietary_restrictions: t.dietary_restrictions,
                                      }),
                                      a !== e?.products?.length - 1 &&
                                        r.jsx('hr', { className: 'w-full border-t border-black-100' }),
                                    ],
                                  },
                                  a,
                                ),
                              ),
                            ],
                          },
                          t,
                        ),
                      ),
                      k &&
                        k.length > 0 &&
                        r.jsx('span', { className: 'text-sm font-medium text-black-400', children: 'New additions' }),
                    ],
                  }),
                k &&
                  k.length > 0 &&
                  k?.map((e, t) =>
                    r.jsxs(
                      'div',
                      {
                        className: 'flex flex-col space-y-5',
                        children: [
                          r.jsx(
                            d.Z,
                            {
                              item: e?.product,
                              name: e?.product?.name,
                              price: e.product?.price,
                              image_url: e?.product?.image_url,
                              quantity: e.quantity,
                              modifiers: e.modifiers,
                              note: e?.notes || void 0,
                              isNewItem: !0,
                              dietary_restrictions: e.dietary_restrictions,
                              disabled: G || Y || D,
                            },
                            t,
                          ),
                          r.jsx('hr', { className: 'w-full border-t border-black-100' }),
                        ],
                      },
                      t,
                    ),
                  ),
                (k?.length > 0 || B?.length > 0) &&
                  r.jsx(p, {
                    className: 'pb-[40px]',
                    discount: Z,
                    discountAmount: V,
                    serviceCharge: K,
                    vat: Q,
                    subTotal: J,
                    total: ee,
                  }),
                !!j &&
                  (0, r.jsxs)(o.Z, {
                    open: !!j,
                    title: 'Add your information',
                    okText: 'Confirm',
                    onOk: 'Pay Now' === j ? ea : er,
                    disabled: !t,
                    onCancel: () => P(''),
                    children: [
                      'We need your name to identify your bill',
                      r.jsx(s.Z, {
                        className: '!mt-[10px]',
                        onChange: (e) => {
                          a(e.target.value);
                        },
                        onKeyDown: (e) => {
                          'Enter' === e.key && t && ('Pay Now' === j ? ea() : er());
                        },
                        autoFocus: !0,
                        valuePlaceholder: 'First name (required)',
                      }),
                    ],
                  }),
              ],
            });
          return (0, r.jsxs)(i.Z, {
            title: 'Basket',
            isShowPrimaryButton: !0,
            disabledPrimary: E || G || Y || X || D,
            disabledSecondary: E || G || Y || X || D,
            onClickBackBtn: () => e.push(w ? `/menu?bill_id=${w}` : '/menu'),
            primaryBtnChildren: 'Order now, pay later',
            onClickPrimaryBtn: () => {
              w ? et() : P('Pay Later');
            },
            disabledBackBtn: E || G || Y || X || D,
            secondaryBtnChildren: es,
            onClickSecondaryBtn: () => {
              if (w) {
                if ((F(!0), k?.length > 0)) {
                  let t = {
                    id: w,
                    orderItems: k?.map((e) => ({
                      ...e,
                      product: e.product.id,
                      modifiers: e.modifiers.map((e) => e.id),
                      dietary_requests: e.dietary_restrictions,
                    })),
                  };
                  O(!0),
                    L({ data: t })
                      .unwrap()
                      .then(() => {
                        $((0, m.ZW)()),
                          U({ data: { bill_id: w } })
                            .unwrap()
                            .then((t) => {
                              e.push(t?.data?.checkoutUrl);
                            })
                            .catch((e) => {
                              F(!1), v.toast.error(e?.data?.message);
                            });
                      })
                      .catch((e) => {
                        F(!1), v.toast.error(e?.data?.message);
                      });
                } else
                  U({ data: { bill_id: w } })
                    .unwrap()
                    .then((t) => {
                      e.push(t.data.checkoutUrl), $((0, m.ZW)());
                    })
                    .catch((e) => {
                      F(!1), v.toast.error(e?.data?.message);
                    });
              } else P('Pay Now');
            },
            children: [E || X ? r.jsx(n.Z, {}) : ei, (Y || G || D) && r.jsx(n.Z, {})],
          });
        };
      },
      5069: (e, t, a) => {
        'use strict';
        a.d(t, { Z: () => l });
        var r = a(95344),
          s = a(3729),
          i = a(98251),
          n = a(28646),
          o = a(9249),
          d = a.n(o);
        a(42617);
        let l = ({ valuePlaceholder: e, autoFocus: t, ...a }) => {
          let o = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(() => {
              if (t && o.current) {
                let e = setTimeout(() => {
                  o?.current.focus();
                }, 1);
                return () => clearTimeout(e);
              }
            }, [t]),
            r.jsx(i.ZP, {
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
              children: r.jsx(n.default, { className: `${d().className}`, placeholder: e, ...a, ref: o }),
            })
          );
        };
      },
      82508: (e, t, a) => {
        'use strict';
        a.r(t), a.d(t, { $$typeof: () => i, __esModule: () => s, default: () => n });
        let r = (0, a(86843).createProxy)(
            String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/basket/page.tsx`,
          ),
          { __esModule: s, $$typeof: i } = r,
          n = r.default;
      },
      42617: () => {},
    });
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var a = (e) => t((t.s = e)),
    r = t.X(0, [638, 289, 363, 662, 264, 646, 223, 503, 598, 609, 118, 479, 14], () => a(32606));
  module.exports = r;
})();
