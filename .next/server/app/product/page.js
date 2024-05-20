(() => {
  var e = {};
  (e.id = 752),
    (e.ids = [752]),
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
      72594: (e, t, r) => {
        'use strict';
        r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => p,
            originalPathname: () => d,
            pages: () => u,
            routeModule: () => x,
            tree: () => c,
          });
        var s = r(50482),
          a = r(69108),
          n = r(62563),
          i = r.n(n),
          o = r(68300),
          l = {};
        for (let e in o)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', 'originalPathname', '__next_app__', 'routeModule'].indexOf(e) &&
            (l[e] = () => o[e]);
        r.d(t, l);
        let c = [
            '',
            {
              children: [
                'product',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 14296)),
                        '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/product/page.tsx',
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
          u = ['/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/product/page.tsx'],
          d = '/product/page',
          p = { require: r, loadChunk: () => Promise.resolve() },
          x = new s.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: '/product/page',
              pathname: '/product',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      18806: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 44757));
      },
      43254: (e, t, r) => {
        var s = r(39727);
        e.exports = function (e, t) {
          return !!(null == e ? 0 : e.length) && s(e, t, 0) > -1;
        };
      },
      80265: (e) => {
        e.exports = function (e, t, r) {
          for (var s = -1, a = null == e ? 0 : e.length; ++s < a; ) if (r(t, e[s])) return !0;
          return !1;
        };
      },
      35241: (e) => {
        e.exports = function (e, t, r, s) {
          for (var a = e.length, n = r + (s ? 1 : -1); s ? n-- : ++n < a; ) if (t(e[n], n, e)) return n;
          return -1;
        };
      },
      39727: (e, t, r) => {
        var s = r(35241),
          a = r(17501),
          n = r(73048);
        e.exports = function (e, t, r) {
          return t == t ? n(e, t, r) : s(e, a, r);
        };
      },
      17501: (e) => {
        e.exports = function (e) {
          return e != e;
        };
      },
      62634: (e, t, r) => {
        var s = r(35935),
          a = r(43254),
          n = r(80265),
          i = r(66173),
          o = r(86513),
          l = r(80185);
        e.exports = function (e, t, r) {
          var c = -1,
            u = a,
            d = e.length,
            p = !0,
            x = [],
            m = x;
          if (r) (p = !1), (u = n);
          else if (d >= 200) {
            var h = t ? null : o(e);
            if (h) return l(h);
            (p = !1), (u = i), (m = new s());
          } else m = t ? [] : x;
          e: for (; ++c < d; ) {
            var f = e[c],
              g = t ? t(f) : f;
            if (((f = r || 0 !== f ? f : 0), p && g == g)) {
              for (var v = m.length; v--; ) if (m[v] === g) continue e;
              t && m.push(g), x.push(f);
            } else u(m, g, r) || (m !== x && m.push(g), x.push(f));
          }
          return x;
        };
      },
      86513: (e, t, r) => {
        var s = r(27542),
          a = r(25296),
          n = r(80185),
          i =
            s && 1 / n(new s([, -0]))[1] == 1 / 0
              ? function (e) {
                  return new s(e);
                }
              : a;
        e.exports = i;
      },
      73048: (e) => {
        e.exports = function (e, t, r) {
          for (var s = r - 1, a = e.length; ++s < a; ) if (e[s] === t) return s;
          return -1;
        };
      },
      25296: (e) => {
        e.exports = function () {};
      },
      59828: (e, t, r) => {
        var s = r(62634);
        e.exports = function (e) {
          return e && e.length ? s(e) : [];
        };
      },
      44757: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => w });
        var s = r(95344),
          a = r(17732),
          n = r(25539),
          i = r(22254),
          o = r(3729),
          l = r(67523),
          c = r(85787),
          u = r(47307),
          d = r(35479),
          p = r(49246);
        let x = ({
          children: e,
          disabledSecondary: t,
          onClickSecondaryBtn: r,
          secondaryBtnChildren: a,
          onClickPrimaryBtn: n,
          primaryBtnChildren: x,
          isShowPrimaryButton: m,
          onClickBackBtn: h,
        }) => {
          let f = (0, o.useRef)(null),
            { scrollBottom: g } = (0, c.I)(f);
          (0, i.useRouter)();
          let { height: v } = (0, u.d)();
          return (0, s.jsxs)('div', {
            className: 'flex flex-col',
            children: [
              s.jsx('div', {
                className: 'flex w-full pt-[22px] px-4 fixed z-10 justify-between',
                children: s.jsx(l.hU, { icon: s.jsx(d.Y4, {}), onClick: h }),
              }),
              s.jsx('div', { ref: f, className: 'h-screen overflow-y-auto max-h-screen-85', children: e }),
              s.jsx(p.Z, {
                className: g - 30 > 0 ? 'shadow-medium-top' : '',
                disabledSecondary: t,
                isShowPrimaryButton: m,
                onClickPrimaryBtn: n,
                primaryBtnChildren: x,
                onClickSecondaryBtn: r,
                secondaryBtnChildren: a,
              }),
            ],
          });
        };
        var m = r(41223),
          h = r.n(m),
          f = r(67113),
          g = r(36013),
          v = r(82018),
          y = r(6650),
          b = r(9249),
          j = r.n(b),
          N = r(54598);
        r(75073);
        var k = r(88914),
          P = r(75992),
          S = r(73593),
          C = r(33401);
        let w = () => {
          let e = (0, i.useRouter)(),
            t = (0, i.useSearchParams)(),
            [r, l] = (0, o.useState)(''),
            [c, u] = (0, o.useState)([]),
            [d, p] = (0, o.useState)([]),
            [m, b] = (0, o.useState)(0),
            w = t.get('id'),
            { data: _, isFetching: $ } = (0, k.$d)({ id: w || '' }, { skip: !w }),
            B = (0, o.useMemo)(() => _?.data, [_]),
            q = t.get('bill_id'),
            R = (0, g.v9)((e) => e.tableReducer.tableId),
            { data: I } = (0, P.fq)({ id: R }, { skip: !R }),
            Z = I?.data,
            { data: M } = (0, S.$r)({ id: Z?.discount }, { skip: !Z?.discount }),
            H = M?.data,
            E = (0, o.useMemo)(() => B?.price || 0, [B, H]),
            [A, T] = (0, o.useState)(!0),
            {
              image_url: z,
              name: G,
              description: F,
              dietary_restrictions: U,
              modifier_ids: Y,
              modifiers_info: W,
            } = B || {},
            [L, D] = (0, o.useState)('/assets/images/product-default.png'),
            O = (0, g.I0)();
          (0, o.useEffect)(() => {
            T(!!z), z && D(z);
          }, [z]);
          let [V, X] = (0, o.useState)({}),
            J = (0, o.useCallback)((e, t) => {
              X((r) => ({ ...r, [t]: e }));
            }, []),
            K = (0, o.useMemo)(
              () =>
                W?.flatMap((e) => {
                  let t = V[e.name];
                  return t ? e.modifier_options.filter((e) => t.includes(e.name)) : [];
                }),
              [V, W],
            ),
            Q = (0, o.useMemo)(() => K?.reduce((e, t) => e + (+t?.price || 0), 0), [K, H]);
          (0, o.useEffect)(() => {
            b(+E + +Q || 0), u(K);
          }, [E, Q, K]);
          let ee = (0, s.jsxs)('div', {
            children: [
              s.jsx('span', { children: 'Add to basket' }),
              ' ',
              (0, s.jsxs)('span', { className: 'font-normal', children: ['・ ', (0, y.T4)(m)] }),
            ],
          });
          return s.jsx(x, {
            secondaryBtnChildren: ee,
            onClickBackBtn: () => {
              e.push(q ? `/menu?bill_id=${q}` : '/menu');
            },
            onClickSecondaryBtn: () => {
              let t = { product: B, notes: r.trim(), modifiers: c, dietary_restrictions: d };
              O((0, v.Wf)({ ...t, quantity: 1, operator: f.Nv.ADD })), e.push(q ? `/menu?bill_id=${q}` : '/menu');
            },
            disabledSecondary: $ || !B,
            children: (0, s.jsxs)('div', {
              className: 'relative h-full',
              children: [
                (0, s.jsxs)('div', {
                  className: 'bg-black-500 h-[228px]',
                  children: [
                    z &&
                      s.jsx(h(), {
                        className: 'absolute top-[40px] right-1/2 transform translate-x-1/2',
                        src: L,
                        alt: 'product',
                        width: 260,
                        height: 260,
                        loading: 'lazy',
                        onLoad: () => T(!1),
                        onError: () => {
                          D('/assets/images/product-default.png'), T(!1);
                        },
                      }),
                    (A || $) &&
                      s.jsx(N.Z.Avatar, {
                        className: 'absolute top-[24px] right-1/2 transform translate-x-1/2',
                        size: 273,
                        active: !0,
                        style: { backgroundColor: '#e5e5e5' },
                      }),
                  ],
                }),
                $
                  ? s.jsx(N.Z, {
                      className: 'product-skeleton-paragraph px-6 pt-[88px] pb-[30px]',
                      active: !0,
                      paragraph: { rows: 3 },
                    })
                  : (0, s.jsxs)('div', {
                      className: 'flex flex-col px-6 pt-[88px] pb-[30px] text-black-500 space-y-[29px]',
                      children: [
                        (0, s.jsxs)('div', {
                          className: 'flex flex-col space-y-[15px]',
                          children: [
                            s.jsx('span', { className: 'text-2xl font-medium', children: G }),
                            s.jsx('span', {
                              className: `text-sm font-normal ${j().className}`,
                              dangerouslySetInnerHTML: { __html: F || '' },
                            }),
                            s.jsx('div', {
                              className: 'flex space-x-[9px] items-start',
                              children: Array.isArray(U) && U.map((e, t) => s.jsx(n.Z, { iconName: e }, t)),
                            }),
                          ],
                        }),
                        Y?.length > 0 &&
                          W?.map((e) => {
                            let t =
                              (e?.modifier_options || [])
                                .filter(Boolean)
                                .sort((e, t) => (e.position || 0) - (t.position || 0)) || [];
                            return {
                              id: e._id,
                              nameGroup: e?.name,
                              options: t.map((e) => ({
                                label: e.name || '',
                                price: e.price > 0 ? e.price.toString() : '',
                              })),
                            };
                          })?.map((e, t) =>
                            s.jsx(a.Z, { groupName: e.nameGroup ?? '', options: e.options ?? [], onChange: J }, t),
                          ),
                        y.Bg(B?.dietary_restrictions || [])?.length > 0 &&
                          s.jsx(a.Z, {
                            groupName: 'Dietary requests',
                            options: y.Bg(B?.dietary_restrictions || [])?.map((e) => ({ label: 'Make it ' + e })) ?? [],
                            onChange: (e) => {
                              p(e);
                            },
                          }),
                        (0, s.jsxs)('div', {
                          className: 'flex flex-col space-y-2.5',
                          children: [
                            s.jsx('span', { className: 'font-medium text-sm text-black-400', children: 'Notes' }),
                            s.jsx(C.Z, {
                              valuePlaceholder: 'Notes for the kitchen',
                              onChange: (e) => {
                                l(e.target.value);
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
          });
        };
      },
      25539: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => i });
        var s = r(95344),
          a = r(41223),
          n = r.n(a);
        r(3729);
        let i = ({ iconName: e }) => {
          let t = '',
            r = !1;
          switch (e.toLowerCase()) {
            case 'vegan':
              t = 'assets/icons/dietaryRestrictionIcons/vegan.svg';
              break;
            case 'vegan option':
              (t = 'assets/icons/dietaryRestrictionIcons/vegan-option.svg'), (r = !0);
              break;
            case 'vegetarian':
              t = 'assets/icons/dietaryRestrictionIcons/vegetarian.svg';
              break;
            case 'vegetarian option':
              (t = 'assets/icons/dietaryRestrictionIcons/vegetarian-option.svg'), (r = !0);
              break;
            case 'diary-free':
              t = 'assets/icons/dietaryRestrictionIcons/diary-free.svg';
              break;
            case 'diary-free option':
              (t = 'assets/icons/dietaryRestrictionIcons/diary-free-option.svg'), (r = !0);
              break;
            case 'gluten-free':
              t = 'assets/icons/dietaryRestrictionIcons/gluten-free.svg';
              break;
            case 'gluten-free option':
              (t = 'assets/icons/dietaryRestrictionIcons/gluten-free-option.svg'), (r = !0);
              break;
            default:
              return null;
          }
          return s.jsx(n(), { priority: !0, src: t, alt: e, width: 19, height: r ? 26 : 19 });
        };
      },
      17732: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => u });
        var s = r(95344);
        r(3729), r(82919);
        var a = r(98251),
          n = r(73762),
          i = r(25539),
          o = r(9249),
          l = r.n(o);
        let c = ({ value: e, icon: t, price: r }) =>
            s.jsx(a.ZP, {
              theme: {
                token: {
                  colorPrimaryActive: '#131C16',
                  colorPrimary: '#131C16',
                  colorPrimaryHover: '#131C16',
                  colorBorder: 'RGBA(19, 28, 22, 0.2)',
                  controlInteractiveSize: 20,
                  colorBgContainer: 'transparent',
                },
              },
              children: s.jsx('div', {
                className: 'flex items-center',
                children: s.jsx(n.Z, {
                  value: e,
                  children: s.jsx('div', {
                    className: 'flex justify-between text-black-500 ml-[3px]',
                    children: (0, s.jsxs)('div', {
                      className: 'flex items-center',
                      children: [
                        t && s.jsx('div', { className: 'mr-[8px]', children: s.jsx(i.Z, { iconName: t }) }),
                        s.jsx('div', { className: `text-[14px] ${l().className}`, children: `${e}` }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          u = ({ discount: e, groupName: t, options: r, onChange: a, defaultValue: i }) =>
            (0, s.jsxs)('div', {
              children: [
                s.jsx('p', { className: 'text-[14px] font-medium mb-[11px] text-black-400', children: t }),
                s.jsx(n.Z.Group, {
                  defaultValue: i,
                  className: 'flex flex-col w-full',
                  onChange: (e) => {
                    a(e, t);
                  },
                  children: s.jsx('div', {
                    className: 'flex flex-col space-y-[10px]',
                    children: r?.map((r, a) =>
                      s.jsxs(
                        'div',
                        {
                          className: 'flex justify-between items-center text-black-500 w-full',
                          children: [
                            s.jsx(c, { value: r.label, icon: r?.icon?.toLowerCase(), price: r.price }),
                            r.price &&
                              s.jsxs('label', {
                                className: `text-[14px] ${l().className}`,
                                htmlFor: `${t}-${a}`,
                                children: [
                                  ' ',
                                  '+ ',
                                  e?.type === 'FIXED_PERCENT' &&
                                    s.jsxs('span', { className: 'line-through', children: [' ', r.price] }),
                                  ` ${+r.price}`,
                                ],
                              }),
                          ],
                        },
                        a,
                      ),
                    ),
                  }),
                }),
              ],
            });
      },
      85787: (e, t, r) => {
        'use strict';
        r.d(t, { I: () => a });
        var s = r(3729);
        function a(e) {
          let [t, r] = (0, s.useState)(!1),
            [a, n] = (0, s.useState)(!1),
            [i, o] = (0, s.useState)(0),
            [l, c] = (0, s.useState)(0),
            u = (0, s.useCallback)(() => {
              let t = e?.current;
              t &&
                (r(t.scrollHeight > t.clientHeight),
                n(t.scrollWidth > t.clientWidth),
                o(t.scrollTop),
                c(t.scrollHeight - t.offsetHeight - t.scrollTop));
            }, [e?.current]);
          return (
            (0, s.useEffect)(() => {}, [!1, u, e?.current]),
            (0, s.useCallback)(() => {
              let t = e?.current;
              t && (o(t.scrollTop), c(t.scrollHeight - t.offsetHeight - t.scrollTop));
            }, [e?.current]),
            (0, s.useEffect)(() => {
              e?.current;
            }, [!1, u, e?.current]),
            { isVerticalScroll: t, isHorizontalScroll: a, scrollTop: i, scrollBottom: l }
          );
        }
      },
      47307: (e, t, r) => {
        'use strict';
        r.d(t, { d: () => a });
        var s = r(3729);
        function a() {
          let e = () => {
              let { innerWidth: e, innerHeight: t } = { innerWidth: 0, innerHeight: 0 };
              return { width: e, height: t, isMobile: e < 768 };
            },
            [t, r] = (0, s.useState)(e()),
            a = (0, s.useCallback)(() => {
              r(e());
            }, []);
          return (0, s.useEffect)(() => {}, [!1, a]), t;
        }
      },
      33401: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => u });
        var s = r(95344),
          a = r(3729),
          n = r(28646),
          i = r(98251),
          o = r(9249),
          l = r.n(o);
        r(42617);
        let { TextArea: c } = n.default,
          u = ({ valueInput: e, required: t, valuePlaceholder: r, onChange: n, disabled: o, value: u, ...d }) => {
            let [p, x] = (0, a.useState)(e);
            return s.jsx(s.Fragment, {
              children: s.jsx(i.ZP, {
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
                children: s.jsx(c, {
                  className: l().className,
                  value: u || p,
                  required: t,
                  onChange: (e) => {
                    x(e.target.value), n && n(e);
                  },
                  placeholder: r,
                  autoSize: { minRows: 3, maxRows: 3.1 },
                  disabled: o,
                }),
              }),
            });
          };
      },
      49246: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => n });
        var s = r(95344),
          a = r(67523);
        let n = ({
          isShowPrimaryButton: e = !1,
          primaryBtnChildren: t,
          secondaryBtnChildren: r,
          disabledPrimary: n,
          disabledSecondary: i,
          onClickPrimaryBtn: o,
          onClickSecondaryBtn: l,
          isTextRequestTaxInvoice: c,
          className: u,
        }) =>
          (0, s.jsxs)('div', {
            className: `${u || ''} w-full fixed flex flex-col space-y-3 bottom-0 bg-grey-100 px-6 py-3 z-999`,
            children: [
              c &&
                s.jsx('div', {
                  className: 'text-[14px] text-black-500 text-center mb-2',
                  children:
                    'Once you request the tax invoice, a member of our staff will print it off, sign, and hand it to you.',
                }),
              e && s.jsx(a.zx, { variant: 'primary', disabled: n, onClick: o, children: t }),
              s.jsx(a.zx, { variant: 'secondary', disabled: i, onClick: l, children: r }),
            ],
          });
      },
      6650: (e, t, r) => {
        'use strict';
        r.d(t, {
          Bg: () => n,
          Pb: () => u,
          T4: () => p,
          Y0: () => l,
          oH: () => o,
          r$: () => c,
          vV: () => d,
          xz: () => i,
        }),
          r(67113);
        var s = r(59828),
          a = r.n(s);
        let n = (e) => a()(e?.filter((e) => e.endsWith('option')).map((e) => (e = e.replace(' option', ''))) || []),
          i = (e) => (e ? `${e.getHours()}:${10 > e.getMinutes() ? '0' : ''}${e.getMinutes()}` : ''),
          o = (e) => '' === e.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
          l = (e) => '' === e.trim() || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(e),
          c = (e) => /^(\d[- ]?){12}\d$/.test(e),
          u = (e) => '' !== e.trim(),
          d = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
          p = (e) => (e ? Math.round(Number(e)).toLocaleString('en-US').replace(/,/g, '.') : '0');
      },
      14296: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { $$typeof: () => n, __esModule: () => a, default: () => i });
        let s = (0, r(86843).createProxy)(
            String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/product/page.tsx`,
          ),
          { __esModule: a, $$typeof: n } = s,
          i = s.default;
      },
      75073: () => {},
      82919: () => {},
      42617: () => {},
    });
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [638, 289, 363, 264, 646, 223, 598, 762, 118, 479], () => r(72594));
  module.exports = s;
})();
