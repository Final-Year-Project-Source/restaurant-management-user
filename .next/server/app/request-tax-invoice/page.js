(() => {
  var e = {};
  (e.id = 70),
    (e.ids = [70]),
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
      6123: (e, t, r) => {
        'use strict';
        r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => x,
            originalPathname: () => u,
            pages: () => d,
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
                'request-tax-invoice',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 6204)),
                        '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/request-tax-invoice/page.tsx',
                      ],
                    },
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
          d = [
            '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/request-tax-invoice/page.tsx',
          ],
          u = '/request-tax-invoice/page',
          x = { require: r, loadChunk: () => Promise.resolve() },
          p = new a.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: '/request-tax-invoice/page',
              pathname: '/request-tax-invoice',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      71059: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 80211));
      },
      43254: (e, t, r) => {
        var a = r(39727);
        e.exports = function (e, t) {
          return !!(null == e ? 0 : e.length) && a(e, t, 0) > -1;
        };
      },
      80265: (e) => {
        e.exports = function (e, t, r) {
          for (var a = -1, s = null == e ? 0 : e.length; ++a < s; ) if (r(t, e[a])) return !0;
          return !1;
        };
      },
      35241: (e) => {
        e.exports = function (e, t, r, a) {
          for (var s = e.length, n = r + (a ? 1 : -1); a ? n-- : ++n < s; ) if (t(e[n], n, e)) return n;
          return -1;
        };
      },
      39727: (e, t, r) => {
        var a = r(35241),
          s = r(17501),
          n = r(73048);
        e.exports = function (e, t, r) {
          return t == t ? n(e, t, r) : a(e, s, r);
        };
      },
      17501: (e) => {
        e.exports = function (e) {
          return e != e;
        };
      },
      62634: (e, t, r) => {
        var a = r(35935),
          s = r(43254),
          n = r(80265),
          i = r(66173),
          l = r(86513),
          o = r(80185);
        e.exports = function (e, t, r) {
          var c = -1,
            d = s,
            u = e.length,
            x = !0,
            p = [],
            m = p;
          if (r) (x = !1), (d = n);
          else if (u >= 200) {
            var h = t ? null : l(e);
            if (h) return o(h);
            (x = !1), (d = i), (m = new a());
          } else m = t ? [] : p;
          e: for (; ++c < u; ) {
            var f = e[c],
              v = t ? t(f) : f;
            if (((f = r || 0 !== f ? f : 0), x && v == v)) {
              for (var g = m.length; g--; ) if (m[g] === v) continue e;
              t && m.push(v), p.push(f);
            } else d(m, v, r) || (m !== p && m.push(v), p.push(f));
          }
          return p;
        };
      },
      86513: (e, t, r) => {
        var a = r(27542),
          s = r(25296),
          n = r(80185),
          i =
            a && 1 / n(new a([, -0]))[1] == 1 / 0
              ? function (e) {
                  return new a(e);
                }
              : s;
        e.exports = i;
      },
      73048: (e) => {
        e.exports = function (e, t, r) {
          for (var a = r - 1, s = e.length; ++a < s; ) if (e[a] === t) return a;
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
      80211: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => f });
        var a = r(95344),
          s = r(3729),
          n = r(22781),
          i = r(9249),
          l = r.n(i),
          o = r(22254),
          c = r(1208),
          d = r(96609),
          u = r(86955),
          x = r(6650),
          p = r(5069),
          m = r(33401);
        let h = { companyName: '', headOffice: '', taxId: '', address: '' },
          f = () => {
            let e = (0, o.useRouter)(),
              t = (0, o.useSearchParams)().get('bill_id'),
              { data: r, isFetching: i } = (0, u.LJ)({ id: t || '' }, { skip: !t }),
              [f, v] = (0, s.useState)({ ...h }),
              [g, y] = (0, s.useState)({ ...h }),
              [j, { isLoading: b }] = (0, u.kX)(),
              P = {
                companyName: 'Company name is required',
                headOffice: 'Head office is required',
                taxId: 'Invalid Tax ID (should be a 13-digit ID)',
                address: 'Address is required',
              },
              N = (e, t) => ('taxId' === e ? ((0, x.r$)(t) ? '' : P[e]) : (0, x.Pb)(t) ? '' : P[e]),
              q = (e, t) => {
                let { value: r } = e.target;
                v({ ...f, [t]: r }), y({ ...g, [t]: N(t, r.trim()) });
              };
            (0, s.useEffect)(() => {
              let e = r?.data?.tax_invoice_info;
              e && v({ headOffice: e.head_office, taxId: e.tax_id, address: e.address, companyName: e.company });
            }, [r]);
            let k = (0, x.Pb)(f.companyName) && (0, x.Pb)(f.headOffice) && (0, x.r$)(f.taxId) && (0, x.Pb)(f.address),
              C = a.jsx('div', {
                className: 'px-4 pt-[13px] pb-[40px]',
                children: (0, a.jsxs)('div', {
                  className: 'px-[8px] flex flex-col space-y-[20px]',
                  children: [
                    (0, a.jsxs)('div', {
                      children: [
                        a.jsx('div', {
                          className: 'font-medium text-[14px] text-black-400',
                          children: ' Company/recipient name ',
                        }),
                        (0, a.jsxs)('div', {
                          className: `mt-[10px] ${l().className}`,
                          children: [
                            a.jsx(p.Z, {
                              disabled: b || i,
                              required: !0,
                              value: f.companyName,
                              onChange: (e) => q(e, 'companyName'),
                              placeholder: 'E.g. Company Name Co., Ltd. (required)',
                            }),
                            g.companyName &&
                              a.jsx('span', { className: 'text-red-400 text-[14px]', children: g.companyName }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)('div', {
                      children: [
                        a.jsx('div', { className: 'font-medium text-[14px] text-black-400', children: ' Branch ID ' }),
                        a.jsx('div', {
                          className: `mt-[10px] ${l().className}`,
                          children: a.jsx(p.Z, {
                            disabled: b || i,
                            required: !0,
                            value: f.headOffice,
                            onChange: (e) => q(e, 'headOffice'),
                            placeholder: 'E.g. Head office (required)',
                          }),
                        }),
                        g.headOffice &&
                          a.jsx('span', { className: 'text-red-400 text-[14px]', children: g.headOffice }),
                      ],
                    }),
                    (0, a.jsxs)('div', {
                      children: [
                        a.jsx('div', { className: 'font-medium text-[14px] text-black-400', children: ' Tax ID ' }),
                        a.jsx('div', {
                          className: `mt-[10px] ${l().className}`,
                          children: a.jsx(p.Z, {
                            disabled: b || i,
                            required: !0,
                            value: f.taxId,
                            onChange: (e) => q(e, 'taxId'),
                            placeholder: '13-digit ID (required)',
                          }),
                        }),
                        g.taxId && a.jsx('span', { className: 'text-red-400 text-[14px]', children: g.taxId }),
                      ],
                    }),
                    (0, a.jsxs)('div', {
                      children: [
                        a.jsx('div', { className: 'font-medium text-[14px] text-black-400', children: ' Address' }),
                        a.jsx('div', {
                          className: `mt-[10px] ${l().className}`,
                          children: a.jsx(m.Z, {
                            disabled: b || i,
                            required: !0,
                            value: f.address,
                            onChange: (e) => q(e, 'address'),
                            valuePlaceholder: 'Enter full address (required)',
                          }),
                        }),
                        g.address && a.jsx('span', { className: 'text-red-400 text-[14px]', children: g.address }),
                      ],
                    }),
                  ],
                }),
              }),
              S = a.jsx('div', { children: a.jsx('span', { children: 'Submit request for tax invoice ' }) });
            return (0, a.jsxs)(n.Z, {
              isShowPrimaryButton: !1,
              isTextRequestTaxInvoice: !0,
              disabledSecondary: !k || b || i,
              onClickSecondaryBtn: () => {
                let e = {
                  head_office: f.headOffice.trim(),
                  tax_id: f.taxId,
                  bill_id: t,
                  address: f.address.trim(),
                  company: f.companyName.trim(),
                };
                k &&
                  j({ data: e })
                    .unwrap()
                    .then(() => c.toast.success('Request tax invoice successfully'))
                    .catch((e) => c.toast.error(e?.data?.message));
              },
              isShowBackBtn: !0,
              disabledBackBtn: b || i,
              onClickBackBtn: () => e.push(`/receipt/receipt-download?bill_id=${t}`),
              secondaryBtnChildren: S,
              title: 'Request tax invoice',
              children: [C, b && a.jsx(d.Z, {})],
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
            d = (0, a.useCallback)(() => {
              let t = e?.current;
              t &&
                (r(t.scrollHeight > t.clientHeight),
                n(t.scrollWidth > t.clientWidth),
                l(t.scrollTop),
                c(t.scrollHeight - t.offsetHeight - t.scrollTop));
            }, [e?.current]);
          return (
            (0, a.useEffect)(() => {}, [!1, d, e?.current]),
            (0, a.useCallback)(() => {
              let t = e?.current;
              t && (l(t.scrollTop), c(t.scrollHeight - t.offsetHeight - t.scrollTop));
            }, [e?.current]),
            (0, a.useEffect)(() => {
              e?.current;
            }, [!1, d, e?.current]),
            { isVerticalScroll: t, isHorizontalScroll: s, scrollTop: i, scrollBottom: o }
          );
        }
      },
      5069: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => c });
        var a = r(95344),
          s = r(3729),
          n = r(98251),
          i = r(28646),
          l = r(9249),
          o = r.n(l);
        r(42617);
        let c = ({ valuePlaceholder: e, autoFocus: t, ...r }) => {
          let l = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(() => {
              if (t && l.current) {
                let e = setTimeout(() => {
                  l?.current.focus();
                }, 1);
                return () => clearTimeout(e);
              }
            }, [t]),
            a.jsx(n.ZP, {
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
              children: a.jsx(i.default, { className: `${o().className}`, placeholder: e, ...r, ref: l }),
            })
          );
        };
      },
      33401: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => d });
        var a = r(95344),
          s = r(3729),
          n = r(28646),
          i = r(98251),
          l = r(9249),
          o = r.n(l);
        r(42617);
        let { TextArea: c } = n.default,
          d = ({ valueInput: e, required: t, valuePlaceholder: r, onChange: n, disabled: l, value: d, ...u }) => {
            let [x, p] = (0, s.useState)(e);
            return a.jsx(a.Fragment, {
              children: a.jsx(i.ZP, {
                theme: {
                  components: { Input: { paddingInline: 15, paddingBlock: 10 } },
                  token: {
                    lineHeight: 1.5,
                    colorText: '#131C16',
                    fontFamily: `${o()}, sans-serif`,
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
                  className: o().className,
                  value: d || x,
                  required: t,
                  onChange: (e) => {
                    p(e.target.value), n && n(e);
                  },
                  placeholder: r,
                  autoSize: { minRows: 3, maxRows: 3.1 },
                  disabled: l,
                }),
              }),
            });
          };
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
          className: d,
        }) =>
          (0, a.jsxs)('div', {
            className: `${d || ''} w-full fixed flex flex-col space-y-3 bottom-0 bg-grey-100 px-6 py-3 z-999`,
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
        r.d(t, { Z: () => d });
        var a = r(95344),
          s = r(22254),
          n = r(3729),
          i = r(67523),
          l = r(85787),
          o = r(35479),
          c = r(49246);
        let d = ({
          isShowBackBtn: e = !0,
          title: t,
          isTextRequestTaxInvoice: r,
          children: d,
          disabledPrimary: u,
          disabledSecondary: x,
          onClickSecondaryBtn: p,
          secondaryBtnChildren: m,
          onClickPrimaryBtn: h,
          primaryBtnChildren: f,
          isShowPrimaryButton: v,
          onClickBackBtn: g,
          onClickDownBtn: y,
          disabledBackBtn: j,
          isHiddenAvatar: b = !1,
        }) => {
          let P = (0, n.useRef)(null),
            { scrollTop: N, scrollBottom: q } = (0, l.I)(P);
          (0, s.useRouter)();
          let k = (0, n.useMemo)(() => (v ? '243px' : r ? '211px' : '170px'), [v, r]);
          return (0, a.jsxs)('div', {
            className: 'flex flex-col h-screen',
            children: [
              (0, a.jsxs)('div', {
                className: `${
                  N - 13 > 0 ? 'shadow-medium-bottom' : ''
                } relative w-full pt-[22px] pb-[15px] flex flex-row items-center ${
                  e ? 'justify-start pl-4' : 'justify-end pr-4'
                }`,
                children: [
                  e && a.jsx(i.hU, { icon: a.jsx(o.Y4, {}), disabled: j, onClick: g }),
                  a.jsx('span', {
                    className:
                      'w-[calc(100%-8rem)] absolute top-[40%] right-1/2 transform translate-x-1/2 text-center text-xl font-medium text-black-500',
                    children: t,
                  }),
                  !e && a.jsx(i.hU, { icon: a.jsx(o._8, {}), onClick: y }),
                ],
              }),
              a.jsx('div', { ref: P, className: `overflow-y-auto max-h-screen-${k}`, children: d }),
              a.jsx(c.Z, {
                className: q - 40 > 0 ? 'shadow-medium-top' : '',
                disabledPrimary: u,
                disabledSecondary: x,
                isTextRequestTaxInvoice: r,
                isShowPrimaryButton: v,
                onClickPrimaryBtn: h,
                primaryBtnChildren: f,
                onClickSecondaryBtn: p,
                secondaryBtnChildren: m,
              }),
            ],
          });
        };
      },
      6650: (e, t, r) => {
        'use strict';
        r.d(t, {
          Bg: () => n,
          Pb: () => d,
          T4: () => x,
          Y0: () => o,
          oH: () => l,
          r$: () => c,
          vV: () => u,
          xz: () => i,
        }),
          r(67113);
        var a = r(59828),
          s = r.n(a);
        let n = (e) => s()(e?.filter((e) => e.endsWith('option')).map((e) => (e = e.replace(' option', ''))) || []),
          i = (e) => (e ? `${e.getHours()}:${10 > e.getMinutes() ? '0' : ''}${e.getMinutes()}` : ''),
          l = (e) => '' === e.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
          o = (e) => '' === e.trim() || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(e),
          c = (e) => /^(\d[- ]?){12}\d$/.test(e),
          d = (e) => '' !== e.trim(),
          u = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
          x = (e) => (e ? Math.round(Number(e)).toLocaleString('en-US').replace(/,/g, '.') : '0');
      },
      6204: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { $$typeof: () => n, __esModule: () => s, default: () => i });
        let a = (0, r(86843).createProxy)(
            String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/request-tax-invoice/page.tsx`,
          ),
          { __esModule: s, $$typeof: n } = a,
          i = a.default;
      },
      42617: () => {},
    });
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    a = t.X(0, [638, 289, 363, 662, 264, 646, 118, 479], () => r(6123));
  module.exports = a;
})();
