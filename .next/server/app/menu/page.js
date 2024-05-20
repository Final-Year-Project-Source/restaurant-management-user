(() => {
  var e = {};
  (e.id = 106),
    (e.ids = [106]),
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
      87028: (e, t, n) => {
        'use strict';
        n.r(t),
          n.d(t, {
            GlobalError: () => s.a,
            __next_app__: () => m,
            originalPathname: () => u,
            pages: () => d,
            routeModule: () => p,
            tree: () => c,
          });
        var a = n(50482),
          r = n(69108),
          l = n(62563),
          s = n.n(l),
          o = n(68300),
          i = {};
        for (let e in o)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', 'originalPathname', '__next_app__', 'routeModule'].indexOf(e) &&
            (i[e] = () => o[e]);
        n.d(t, i);
        let c = [
            '',
            {
              children: [
                'menu',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(n.bind(n, 72190)),
                        '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/menu/page.tsx',
                      ],
                    },
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
          d = ['/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/menu/page.tsx'],
          u = '/menu/page',
          m = { require: n, loadChunk: () => Promise.resolve() },
          p = new a.AppPageRouteModule({
            definition: {
              kind: r.x.APP_PAGE,
              page: '/menu/page',
              pathname: '/menu',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      64798: (e, t, n) => {
        Promise.resolve().then(n.bind(n, 94782));
      },
      99601: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => s });
        var a = n(3729),
          r = n(30006),
          l = n(72581);
        let s = (e, t) => {
          let n = a.useContext(r.Z);
          return [
            a.useMemo(() => {
              var a;
              let r = t || l.Z[e],
                s = null !== (a = null == n ? void 0 : n[e]) && void 0 !== a ? a : {};
              return Object.assign(Object.assign({}, 'function' == typeof r ? r() : r), s || {});
            }, [e, t, n]),
            a.useMemo(() => {
              let e = null == n ? void 0 : n.locale;
              return (null == n ? void 0 : n.exist) && !e ? l.Z.locale : e;
            }, [n]),
          ];
        };
      },
      93481: (e, t, n) => {
        'use strict';
        n.d(t, { H: () => o });
        var a = n(71782),
          r = n(3729);
        function l() {}
        let s = r.createContext({ add: l, remove: l });
        function o(e) {
          let t = r.useContext(s),
            n = r.useRef();
          return (0, a.zX)((a) => {
            if (a) {
              let r = e ? a.querySelector(e) : a;
              t.add(r), (n.current = r);
            } else t.remove(n.current);
          });
        }
      },
      62894: (e, t, n) => {
        var a = n(69575),
          r = /^\s+/;
        e.exports = function (e) {
          return e ? e.slice(0, a(e) + 1).replace(r, '') : e;
        };
      },
      69575: (e) => {
        var t = /\s/;
        e.exports = function (e) {
          for (var n = e.length; n-- && t.test(e.charAt(n)); );
          return n;
        };
      },
      63908: (e, t, n) => {
        var a = n(60986),
          r = n(120),
          l = n(29155),
          s = Math.max,
          o = Math.min;
        e.exports = function (e, t, n) {
          var i,
            c,
            d,
            u,
            m,
            p,
            f = 0,
            x = !1,
            h = !1,
            v = !0;
          if ('function' != typeof e) throw TypeError('Expected a function');
          function g(t) {
            var n = i,
              a = c;
            return (i = c = void 0), (f = t), (u = e.apply(a, n));
          }
          function y(e) {
            var n = e - p,
              a = e - f;
            return void 0 === p || n >= t || n < 0 || (h && a >= d);
          }
          function b() {
            var e,
              n,
              a,
              l = r();
            if (y(l)) return j(l);
            m = setTimeout(b, ((e = l - p), (n = l - f), (a = t - e), h ? o(a, d - n) : a));
          }
          function j(e) {
            return ((m = void 0), v && i) ? g(e) : ((i = c = void 0), u);
          }
          function C() {
            var e,
              n = r(),
              a = y(n);
            if (((i = arguments), (c = this), (p = n), a)) {
              if (void 0 === m) return (f = e = p), (m = setTimeout(b, t)), x ? g(e) : u;
              if (h) return clearTimeout(m), (m = setTimeout(b, t)), g(p);
            }
            return void 0 === m && (m = setTimeout(b, t)), u;
          }
          return (
            (t = l(t) || 0),
            a(n) &&
              ((x = !!n.leading),
              (d = (h = 'maxWait' in n) ? s(l(n.maxWait) || 0, t) : d),
              (v = 'trailing' in n ? !!n.trailing : v)),
            (C.cancel = function () {
              void 0 !== m && clearTimeout(m), (f = 0), (i = p = c = m = void 0);
            }),
            (C.flush = function () {
              return void 0 === m ? u : j(r());
            }),
            C
          );
        };
      },
      56381: (e, t, n) => {
        var a = n(65945),
          r = n(12111);
        e.exports = function (e) {
          return 'symbol' == typeof e || (r(e) && '[object Symbol]' == a(e));
        };
      },
      120: (e, t, n) => {
        var a = n(67598);
        e.exports = function () {
          return a.Date.now();
        };
      },
      29155: (e, t, n) => {
        var a = n(62894),
          r = n(60986),
          l = n(56381),
          s = 0 / 0,
          o = /^[-+]0x[0-9a-f]+$/i,
          i = /^0b[01]+$/i,
          c = /^0o[0-7]+$/i,
          d = parseInt;
        e.exports = function (e) {
          if ('number' == typeof e) return e;
          if (l(e)) return s;
          if (r(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
            e = r(t) ? t + '' : t;
          }
          if ('string' != typeof e) return 0 === e ? e : +e;
          e = a(e);
          var n = i.test(e);
          return n || c.test(e) ? d(e.slice(2), n ? 2 : 8) : o.test(e) ? s : +e;
        };
      },
      94782: (e, t, n) => {
        'use strict';
        n.r(t), n.d(t, { default: () => eT });
        var a = n(95344);
        n(3707);
        var r = n(17732),
          l = n(47307),
          s = n(3729),
          o = n(67523),
          i = n(35479),
          c = n(49246),
          d = n(75203),
          u = n(32066),
          m = n(36013);
        let p = {
            groupName: 'Dietary restrictions',
            options: [
              { icon: 'Vegan', label: 'Vegan' },
              { icon: 'Vegetarian', label: 'Vegetarian' },
              { icon: 'Diary-free', label: 'Diary-free' },
              { icon: 'Gluten-free', label: 'Gluten-free' },
            ],
          },
          f = {
            groupName: 'Protein',
            options: [
              { label: 'Chicken' },
              { label: 'Pork' },
              { label: 'Beef' },
              { label: 'SeaFood' },
              { label: 'Other' },
            ],
          };
        var x = n(98251),
          h = n(28646);
        n(42617);
        let v = ({ ...e }) => {
          let [t, n] = (0, s.useState)(!1);
          return a.jsx(x.ZP, {
            theme: {
              components: {
                Input: {
                  paddingInline: 16,
                  paddingBlock: 11,
                  activeBorderColor: 'rgba(19, 28, 22, 0.2)',
                  hoverBorderColor: 'rgba(19, 28, 22, 0.2)',
                },
              },
              token: {
                lineHeight: 1.5,
                colorText: '#131C16',
                fontSize: 14,
                colorBgContainer: 'transparent',
                colorBorder: 'rgba(19, 28, 22, 0.2)',
                colorPrimary: 'transparent',
                colorPrimaryHover: 'transparent',
                colorPrimaryActive: 'transparent',
                colorTextPlaceholder: 'rgba(0, 0, 0, 0.50)',
                borderRadius: 16,
                fontFamily: 'var(--font-open-sans)',
              },
            },
            children: a.jsx(h.default, {
              className: `search-input-container--${t ? 'focus' : ''}`,
              placeholder: 'Search menu',
              onFocus: () => n(!0),
              onBlur: () => n(!1),
              prefix: a.jsx('div', { className: 'mr-[8px]', children: a.jsx(i.W1, {}) }),
              ...e,
            }),
          });
        };
        var g = n(85787),
          y = n(22254);
        let b = ({
          children: e,
          handleSearch: t,
          disabledSecondary: n,
          toggleFilter: r,
          onClickSecondaryBtn: p,
          onClickPrimaryBtn: f,
          secondaryBtnChildren: x,
          primaryBtnChildren: h,
          isShowPrimaryButton: b,
          activeCategory: j,
          setActiveCategory: C,
          isClickedCategoryBtn: w,
          setIsClickedClickCategoryBtn: k,
          isEmptyData: E,
          categories: N,
          bottomHeight: S = 0,
        }) => {
          (0, y.useRouter)();
          let $ = (0, s.useRef)(null),
            O = $?.current?.getBoundingClientRect()?.top === 0,
            Z = (0, s.useRef)(null),
            P = (0, m.v9)((e) => e.menuFilterReducer),
            [I, M] = (0, s.useState)(),
            { scrollBottom: B } = (0, g.I)(Z),
            { height: R } = (0, l.d)(),
            _ = (0, s.useMemo)(() => I?.protein || [], [I]),
            D = (0, s.useMemo)(() => I?.dietaryRestrictions || [], [I]),
            H = (0, s.useMemo)(() => _?.length + D?.length, [D, _]),
            T = N?.map((e) => ({ ...e, id: e._id })) || [];
          (0, s.useEffect)(() => {
            M(P);
          }, [P]),
            (0, s.useEffect)(() => {
              if (w) return;
              let e = document.getElementById(`btn_category_${j}`);
              if (e) {
                let t = e.parentElement;
                if (t) {
                  let n = t.getBoundingClientRect(),
                    a = e.getBoundingClientRect().left - n.left - 24;
                  t.scrollTo({ left: a, behavior: 'smooth' });
                }
              }
            }, [j, w]);
          let F = (e) => {
              if (j === e) return;
              C(e), k(!0);
              let t = document.getElementById(e);
              if (t) {
                let n = t?.getBoundingClientRect()?.top - (e === T[0]?.id ? 150 : 77) - 20,
                  a = Z.current;
                a && a.scrollTo({ top: a.scrollTop + n, behavior: 'smooth' }),
                  setTimeout(() => {
                    k(!1);
                  }, 500);
              }
            },
            [z, A] = (0, s.useState)(''),
            L = N.filter((e, t) => T.findIndex((t) => t.name === e.name) === t);
          return a.jsx('main', {
            ref: Z,
            className: 'overflow-y-auto h-full',
            style: { height: R - 85 },
            children: (0, a.jsxs)('div', {
              className: `flex flex-col ${E ? 'h-full' : ''}`,
              children: [
                (0, a.jsxs)('div', {
                  className: 'w-full flex flex-row space-x-[9px] pt-[15px] pb-[10px] px-[24px]',
                  children: [
                    a.jsx(v, {
                      value: z,
                      suffix:
                        z &&
                        a.jsx(u.Z, {
                          style: { color: 'rgba(19, 28, 22, 0.50)' },
                          onClick: (e) => {
                            A(''), t && t(e);
                          },
                        }),
                      onChange: (e) => {
                        A(e.target.value), t && t(e);
                      },
                    }),
                    (0, a.jsxs)('div', {
                      className: 'relative',
                      children: [
                        a.jsx(o.hU, { className: 'p-[10px]', onClick: r, icon: a.jsx(i.k1, {}) }),
                        !!H &&
                          a.jsx('span', {
                            className:
                              'absolute top-[-2px] right-[-1px] flex items-center justify-center font-open-sans bg-black-500 text-white h-[18px] min-w-[18px] font-bold text-[11px] leading-[28px] rounded-[50%]',
                            children: H,
                          }),
                      ],
                    }),
                  ],
                }),
                a.jsx('div', {
                  ref: $,
                  className: `sticky shrink-0 top-0 bg-grey-100 z-10 pl-[24px] pt-[20px] pb-[19px] flex space-x-[14px] overflow-auto ${
                    $?.current && O ? 'shadow-medium-bottom' : ''
                  }`,
                  children: L.map((e) =>
                    a.jsx(
                      d.Z,
                      { id: `btn_category_${e.id}`, active: j === e.id, onClick: () => F(e.id), children: e.name },
                      e.id,
                    ),
                  ),
                }),
                e,
                a.jsx(c.Z, {
                  className: B - (50 + S) > 0 ? 'shadow-medium-top' : 'shadow-medium-none',
                  isShowPrimaryButton: b,
                  disabledSecondary: n,
                  onClickPrimaryBtn: f,
                  primaryBtnChildren: h,
                  onClickSecondaryBtn: p,
                  secondaryBtnChildren: x,
                }),
              ],
            }),
          });
        };
        var j = n(22781),
          C = n(96609),
          w = n(45072),
          k = n(9249),
          E = n.n(k),
          N = n(25102),
          S = n(27740);
        let $ = ({
          id: e,
          name: t,
          description: n,
          price: r,
          image_url: l,
          discountPrice: s,
          className: o,
          track_stock: i,
        }) =>
          (0, a.jsxs)('div', {
            className: `${o || ''} ${(!i && 'opacity-50') || ''} flex w-full`,
            children: [
              a.jsx(N.Z, { className: 'mr-[24px]', width: 86, height: 86, src: l, alt: t }),
              (0, a.jsxs)('div', {
                className: 'flex flex-col w-full',
                children: [
                  a.jsx('div', { className: 'text-[14px] text-black-400', children: t }),
                  a.jsx('div', {
                    className: `text-[10px] text-black-500 mt-[7px] ${E().className}`,
                    dangerouslySetInnerHTML: { __html: n || '' },
                  }),
                  (0, a.jsxs)('div', {
                    className: 'flex items-center justify-between mt-[9px]',
                    children: [
                      (s < r &&
                        (0, a.jsxs)('div', {
                          className: 'flex space-x-[3px]',
                          children: [
                            a.jsx('div', { className: 'text-[14px] text-black-400 line-through', children: r }),
                            a.jsx('div', { className: 'text-[14px] text-black-500', children: s }),
                          ],
                        })) ||
                        a.jsx('div', { className: 'text-[14px] text-black-400', children: r }),
                      (0, a.jsxs)('div', {
                        className: 'flex space-x-[10px]',
                        children: [
                          !i && a.jsx(S.Z, { children: 'Out of stock' }),
                          i &&
                            a.jsx(w.Z, {
                              className: 'btn--add-to-basket',
                              id: `btn--add_${e}`,
                              plus: !0,
                              variant: 'secondary',
                              disabled: !i,
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        var O = n(97107),
          Z = n(86955),
          P = n(375),
          I = n(73593),
          M = n(88914),
          B = n(75992),
          R = n(34132),
          _ = n.n(R),
          D = n(84893),
          H = n(99601),
          T = n(90437),
          F = n(86216),
          z = n(35124),
          A = n(80433);
        let L = (e) => {
            let { componentCls: t, margin: n, marginXS: a, marginXL: r, fontSize: l, lineHeight: s } = e;
            return {
              [t]: {
                marginInline: a,
                fontSize: l,
                lineHeight: s,
                textAlign: 'center',
                [`${t}-image`]: {
                  height: e.emptyImgHeight,
                  marginBottom: a,
                  opacity: e.opacityImage,
                  img: { height: '100%' },
                  svg: { maxWidth: '100%', height: '100%', margin: 'auto' },
                },
                [`${t}-description`]: { color: e.colorText },
                [`${t}-footer`]: { marginTop: n },
                '&-normal': {
                  marginBlock: r,
                  color: e.colorTextDescription,
                  [`${t}-description`]: { color: e.colorTextDescription },
                  [`${t}-image`]: { height: e.emptyImgHeightMD },
                },
                '&-small': {
                  marginBlock: a,
                  color: e.colorTextDescription,
                  [`${t}-image`]: { height: e.emptyImgHeightSM },
                },
              },
            };
          },
          q = (0, z.I$)('Empty', (e) => {
            let { componentCls: t, controlHeightLG: n, calc: a } = e;
            return [
              L(
                (0, A.TS)(e, {
                  emptyImgCls: `${t}-img`,
                  emptyImgHeight: a(n).mul(2.5).equal(),
                  emptyImgHeightMD: n,
                  emptyImgHeightSM: a(n).mul(0.875).equal(),
                }),
              ),
            ];
          });
        var V = function (e, t) {
          var n = {};
          for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && 0 > t.indexOf(a) && (n[a] = e[a]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
            for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              0 > t.indexOf(a[r]) && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]]);
          return n;
        };
        let U = s.createElement(() => {
            let [, e] = (0, F.ZP)(),
              t = new T.C(e.colorBgBase).toHsl().l < 0.5 ? { opacity: 0.65 } : {};
            return s.createElement(
              'svg',
              { style: t, width: '184', height: '152', viewBox: '0 0 184 152', xmlns: 'http://www.w3.org/2000/svg' },
              s.createElement(
                'g',
                { fill: 'none', fillRule: 'evenodd' },
                s.createElement(
                  'g',
                  { transform: 'translate(24 31.67)' },
                  s.createElement('ellipse', {
                    fillOpacity: '.8',
                    fill: '#F5F5F7',
                    cx: '67.797',
                    cy: '106.89',
                    rx: '67.797',
                    ry: '12.668',
                  }),
                  s.createElement('path', {
                    d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
                    fill: '#AEB8C2',
                  }),
                  s.createElement('path', {
                    d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
                    fill: 'url(#linearGradient-1)',
                    transform: 'translate(13.56)',
                  }),
                  s.createElement('path', {
                    d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
                    fill: '#F5F5F7',
                  }),
                  s.createElement('path', {
                    d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
                    fill: '#DCE0E6',
                  }),
                ),
                s.createElement('path', {
                  d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
                  fill: '#DCE0E6',
                }),
                s.createElement(
                  'g',
                  { transform: 'translate(149.65 15.383)', fill: '#FFF' },
                  s.createElement('ellipse', { cx: '20.654', cy: '3.167', rx: '2.849', ry: '2.815' }),
                  s.createElement('path', { d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z' }),
                ),
              ),
            );
          }, null),
          W = s.createElement(() => {
            let [, e] = (0, F.ZP)(),
              { colorFill: t, colorFillTertiary: n, colorFillQuaternary: a, colorBgContainer: r } = e,
              {
                borderColor: l,
                shadowColor: o,
                contentColor: i,
              } = (0, s.useMemo)(
                () => ({
                  borderColor: new T.C(t).onBackground(r).toHexShortString(),
                  shadowColor: new T.C(n).onBackground(r).toHexShortString(),
                  contentColor: new T.C(a).onBackground(r).toHexShortString(),
                }),
                [t, n, a, r],
              );
            return s.createElement(
              'svg',
              { width: '64', height: '41', viewBox: '0 0 64 41', xmlns: 'http://www.w3.org/2000/svg' },
              s.createElement(
                'g',
                { transform: 'translate(0 1)', fill: 'none', fillRule: 'evenodd' },
                s.createElement('ellipse', { fill: o, cx: '32', cy: '33', rx: '32', ry: '7' }),
                s.createElement(
                  'g',
                  { fillRule: 'nonzero', stroke: l },
                  s.createElement('path', {
                    d: 'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z',
                  }),
                  s.createElement('path', {
                    d: 'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
                    fill: i,
                  }),
                ),
              ),
            );
          }, null),
          G = (e) => {
            var {
                className: t,
                rootClassName: n,
                prefixCls: a,
                image: r = U,
                description: l,
                children: o,
                imageStyle: i,
                style: c,
              } = e,
              d = V(e, [
                'className',
                'rootClassName',
                'prefixCls',
                'image',
                'description',
                'children',
                'imageStyle',
                'style',
              ]);
            let { getPrefixCls: u, direction: m, empty: p } = s.useContext(D.E_),
              f = u('empty', a),
              [x, h, v] = q(f),
              [g] = (0, H.Z)('Empty'),
              y = void 0 !== l ? l : null == g ? void 0 : g.description,
              b = null;
            return (
              (b =
                'string' == typeof r ? s.createElement('img', { alt: 'string' == typeof y ? y : 'empty', src: r }) : r),
              x(
                s.createElement(
                  'div',
                  Object.assign(
                    {
                      className: _()(
                        h,
                        v,
                        f,
                        null == p ? void 0 : p.className,
                        { [`${f}-normal`]: r === W, [`${f}-rtl`]: 'rtl' === m },
                        t,
                        n,
                      ),
                      style: Object.assign(Object.assign({}, null == p ? void 0 : p.style), c),
                    },
                    d,
                  ),
                  s.createElement('div', { className: `${f}-image`, style: i }, b),
                  y && s.createElement('div', { className: `${f}-description` }, y),
                  o && s.createElement('div', { className: `${f}-footer` }, o),
                ),
              )
            );
          };
        (G.PRESENTED_IMAGE_DEFAULT = U), (G.PRESENTED_IMAGE_SIMPLE = W);
        var Y = n(65830),
          K = n(93727),
          X = n(99460),
          J = n(17981),
          Q = s.createContext(null),
          ee = s.createContext({}),
          et = n(22363),
          en = n(65651),
          ea = n(87884),
          er = n(21029),
          el = n(7305),
          es = n(12403),
          eo = n(67862),
          ei = ['prefixCls', 'className', 'containerRef'];
        let ec = function (e) {
          var t = e.prefixCls,
            n = e.className,
            a = e.containerRef,
            r = (0, es.Z)(e, ei),
            l = s.useContext(ee).panel,
            o = (0, eo.x1)(l, a);
          return s.createElement(
            'div',
            (0, en.Z)(
              { className: _()(''.concat(t, '-content'), n), role: 'dialog', ref: o },
              (0, el.Z)(e, { aria: !0 }),
              { 'aria-modal': 'true' },
              r,
            ),
          );
        };
        var ed = n(41255);
        function eu(e) {
          return 'string' == typeof e && String(Number(e)) === e
            ? ((0, ed.ZP)(!1, 'Invalid value type of `width` or `height` which should be number type instead.'),
              Number(e))
            : e;
        }
        var em = { width: 0, height: 0, overflow: 'hidden', outline: 'none', position: 'absolute' },
          ep = s.forwardRef(function (e, t) {
            var n,
              a,
              r,
              l = e.prefixCls,
              o = e.open,
              i = e.placement,
              c = e.inline,
              d = e.push,
              u = e.forceRender,
              m = e.autoFocus,
              p = e.keyboard,
              f = e.classNames,
              x = e.rootClassName,
              h = e.rootStyle,
              v = e.zIndex,
              g = e.className,
              y = e.id,
              b = e.style,
              j = e.motion,
              C = e.width,
              w = e.height,
              k = e.children,
              E = e.mask,
              N = e.maskClosable,
              S = e.maskMotion,
              $ = e.maskClassName,
              O = e.maskStyle,
              Z = e.afterOpenChange,
              P = e.onClose,
              I = e.onMouseEnter,
              M = e.onMouseOver,
              B = e.onMouseLeave,
              R = e.onClick,
              D = e.onKeyDown,
              H = e.onKeyUp,
              T = e.styles,
              F = s.useRef(),
              z = s.useRef(),
              A = s.useRef();
            s.useImperativeHandle(t, function () {
              return F.current;
            }),
              s.useEffect(
                function () {
                  if (o && m) {
                    var e;
                    null === (e = F.current) || void 0 === e || e.focus({ preventScroll: !0 });
                  }
                },
                [o],
              );
            var L = s.useState(!1),
              q = (0, K.Z)(L, 2),
              V = q[0],
              U = q[1],
              W = s.useContext(Q),
              G =
                null !==
                  (n =
                    null !==
                      (a =
                        null === (r = 'boolean' == typeof d ? (d ? {} : { distance: 0 }) : d || {}) || void 0 === r
                          ? void 0
                          : r.distance) && void 0 !== a
                      ? a
                      : null == W
                        ? void 0
                        : W.pushDistance) && void 0 !== n
                  ? n
                  : 180,
              X = s.useMemo(
                function () {
                  return {
                    pushDistance: G,
                    push: function () {
                      U(!0);
                    },
                    pull: function () {
                      U(!1);
                    },
                  };
                },
                [G],
              );
            s.useEffect(
              function () {
                var e, t;
                o
                  ? null == W || null === (e = W.push) || void 0 === e || e.call(W)
                  : null == W || null === (t = W.pull) || void 0 === t || t.call(W);
              },
              [o],
            ),
              s.useEffect(function () {
                return function () {
                  var e;
                  null == W || null === (e = W.pull) || void 0 === e || e.call(W);
                };
              }, []);
            var J =
                E &&
                s.createElement(ea.ZP, (0, en.Z)({ key: 'mask' }, S, { visible: o }), function (e, t) {
                  var n = e.className,
                    a = e.style;
                  return s.createElement('div', {
                    className: _()(''.concat(l, '-mask'), n, null == f ? void 0 : f.mask, $),
                    style: (0, Y.Z)((0, Y.Z)((0, Y.Z)({}, a), O), null == T ? void 0 : T.mask),
                    onClick: N && o ? P : void 0,
                    ref: t,
                  });
                }),
              ee = 'function' == typeof j ? j(i) : j,
              es = {};
            if (V && G)
              switch (i) {
                case 'top':
                  es.transform = 'translateY('.concat(G, 'px)');
                  break;
                case 'bottom':
                  es.transform = 'translateY('.concat(-G, 'px)');
                  break;
                case 'left':
                  es.transform = 'translateX('.concat(G, 'px)');
                  break;
                default:
                  es.transform = 'translateX('.concat(-G, 'px)');
              }
            'left' === i || 'right' === i ? (es.width = eu(C)) : (es.height = eu(w));
            var eo = { onMouseEnter: I, onMouseOver: M, onMouseLeave: B, onClick: R, onKeyDown: D, onKeyUp: H },
              ei = s.createElement(
                ea.ZP,
                (0, en.Z)({ key: 'panel' }, ee, {
                  visible: o,
                  forceRender: u,
                  onVisibleChanged: function (e) {
                    null == Z || Z(e);
                  },
                  removeOnLeave: !1,
                  leavedClassName: ''.concat(l, '-content-wrapper-hidden'),
                }),
                function (t, n) {
                  var a = t.className,
                    r = t.style;
                  return s.createElement(
                    'div',
                    (0, en.Z)(
                      {
                        className: _()(''.concat(l, '-content-wrapper'), null == f ? void 0 : f.wrapper, a),
                        style: (0, Y.Z)((0, Y.Z)((0, Y.Z)({}, es), r), null == T ? void 0 : T.wrapper),
                      },
                      (0, el.Z)(e, { data: !0 }),
                    ),
                    s.createElement(
                      ec,
                      (0, en.Z)(
                        {
                          id: y,
                          containerRef: n,
                          prefixCls: l,
                          className: _()(g, null == f ? void 0 : f.content),
                          style: (0, Y.Z)((0, Y.Z)({}, b), null == T ? void 0 : T.content),
                        },
                        (0, el.Z)(e, { aria: !0 }),
                        eo,
                      ),
                      k,
                    ),
                  );
                },
              ),
              ed = (0, Y.Z)({}, h);
            return (
              v && (ed.zIndex = v),
              s.createElement(
                Q.Provider,
                { value: X },
                s.createElement(
                  'div',
                  {
                    className: _()(
                      l,
                      ''.concat(l, '-').concat(i),
                      x,
                      (0, et.Z)((0, et.Z)({}, ''.concat(l, '-open'), o), ''.concat(l, '-inline'), c),
                    ),
                    style: ed,
                    tabIndex: -1,
                    ref: F,
                    onKeyDown: function (e) {
                      var t,
                        n,
                        a = e.keyCode,
                        r = e.shiftKey;
                      switch (a) {
                        case er.Z.TAB:
                          a === er.Z.TAB &&
                            (r || document.activeElement !== A.current
                              ? r &&
                                document.activeElement === z.current &&
                                (null === (n = A.current) || void 0 === n || n.focus({ preventScroll: !0 }))
                              : null === (t = z.current) || void 0 === t || t.focus({ preventScroll: !0 }));
                          break;
                        case er.Z.ESC:
                          P && p && (e.stopPropagation(), P(e));
                      }
                    },
                  },
                  J,
                  s.createElement('div', {
                    tabIndex: 0,
                    ref: z,
                    style: em,
                    'aria-hidden': 'true',
                    'data-sentinel': 'start',
                  }),
                  ei,
                  s.createElement('div', {
                    tabIndex: 0,
                    ref: A,
                    style: em,
                    'aria-hidden': 'true',
                    'data-sentinel': 'end',
                  }),
                ),
              )
            );
          });
        let ef = function (e) {
          var t = e.open,
            n = e.prefixCls,
            a = e.placement,
            r = e.autoFocus,
            l = e.keyboard,
            o = e.width,
            i = e.mask,
            c = void 0 === i || i,
            d = e.maskClosable,
            u = e.getContainer,
            m = e.forceRender,
            p = e.afterOpenChange,
            f = e.destroyOnClose,
            x = e.onMouseEnter,
            h = e.onMouseOver,
            v = e.onMouseLeave,
            g = e.onClick,
            y = e.onKeyDown,
            b = e.onKeyUp,
            j = e.panelRef,
            C = s.useState(!1),
            w = (0, K.Z)(C, 2),
            k = w[0],
            E = w[1],
            N = s.useState(!1),
            S = (0, K.Z)(N, 2),
            $ = S[0],
            O = S[1];
          (0, J.Z)(function () {
            O(!0);
          }, []);
          var Z = !!$ && void 0 !== t && t,
            P = s.useRef(),
            I = s.useRef();
          (0, J.Z)(
            function () {
              Z && (I.current = document.activeElement);
            },
            [Z],
          );
          var M = s.useMemo(
            function () {
              return { panel: j };
            },
            [j],
          );
          if (!m && !k && !Z && f) return null;
          var B = (0, Y.Z)(
            (0, Y.Z)({}, e),
            {},
            {
              open: Z,
              prefixCls: void 0 === n ? 'rc-drawer' : n,
              placement: void 0 === a ? 'right' : a,
              autoFocus: void 0 === r || r,
              keyboard: void 0 === l || l,
              width: void 0 === o ? 378 : o,
              mask: c,
              maskClosable: void 0 === d || d,
              inline: !1 === u,
              afterOpenChange: function (e) {
                var t, n;
                E(e),
                  null == p || p(e),
                  e ||
                    !I.current ||
                    (null !== (t = P.current) && void 0 !== t && t.contains(I.current)) ||
                    null === (n = I.current) ||
                    void 0 === n ||
                    n.focus({ preventScroll: !0 });
              },
              ref: P,
            },
            { onMouseEnter: x, onMouseOver: h, onMouseLeave: v, onClick: g, onKeyDown: y, onKeyUp: b },
          );
          return s.createElement(
            ee.Provider,
            { value: M },
            s.createElement(
              X.Z,
              { open: Z || m || k, autoDestroy: !1, getContainer: u, autoLock: c && (Z || k) },
              s.createElement(ep, B),
            ),
          );
        };
        var ex = n(43531),
          eh = n(95295),
          ev = n(21992),
          eg = n(84359),
          ey = n(71264),
          eb = n(93481),
          ej = n(46164);
        let eC = (e) => {
          var t, n;
          let {
              prefixCls: a,
              title: r,
              footer: l,
              extra: o,
              onClose: i,
              headerStyle: c,
              bodyStyle: d,
              footerStyle: u,
              children: m,
              classNames: p,
              styles: f,
            } = e,
            { drawer: x } = s.useContext(D.E_),
            h = s.useCallback(
              (e) =>
                s.createElement(
                  'button',
                  { type: 'button', onClick: i, 'aria-label': 'Close', className: `${a}-close` },
                  e,
                ),
              [i],
            ),
            [v, g] = (0, ej.Z)((0, ej.w)(e), (0, ej.w)(x), { closable: !0, closeIconRender: h }),
            y = s.useMemo(() => {
              var e, t;
              return r || v
                ? s.createElement(
                    'div',
                    {
                      style: Object.assign(
                        Object.assign(
                          Object.assign(
                            {},
                            null === (e = null == x ? void 0 : x.styles) || void 0 === e ? void 0 : e.header,
                          ),
                          c,
                        ),
                        null == f ? void 0 : f.header,
                      ),
                      className: _()(
                        `${a}-header`,
                        { [`${a}-header-close-only`]: v && !r && !o },
                        null === (t = null == x ? void 0 : x.classNames) || void 0 === t ? void 0 : t.header,
                        null == p ? void 0 : p.header,
                      ),
                    },
                    s.createElement(
                      'div',
                      { className: `${a}-header-title` },
                      g,
                      r && s.createElement('div', { className: `${a}-title` }, r),
                    ),
                    o && s.createElement('div', { className: `${a}-extra` }, o),
                  )
                : null;
            }, [v, g, o, c, a, r]),
            b = s.useMemo(() => {
              var e, t;
              if (!l) return null;
              let n = `${a}-footer`;
              return s.createElement(
                'div',
                {
                  className: _()(
                    n,
                    null === (e = null == x ? void 0 : x.classNames) || void 0 === e ? void 0 : e.footer,
                    null == p ? void 0 : p.footer,
                  ),
                  style: Object.assign(
                    Object.assign(
                      Object.assign(
                        {},
                        null === (t = null == x ? void 0 : x.styles) || void 0 === t ? void 0 : t.footer,
                      ),
                      u,
                    ),
                    null == f ? void 0 : f.footer,
                  ),
                },
                l,
              );
            }, [l, u, a]);
          return s.createElement(
            s.Fragment,
            null,
            y,
            s.createElement(
              'div',
              {
                className: _()(
                  `${a}-body`,
                  null == p ? void 0 : p.body,
                  null === (t = null == x ? void 0 : x.classNames) || void 0 === t ? void 0 : t.body,
                ),
                style: Object.assign(
                  Object.assign(
                    Object.assign({}, null === (n = null == x ? void 0 : x.styles) || void 0 === n ? void 0 : n.body),
                    d,
                  ),
                  null == f ? void 0 : f.body,
                ),
              },
              m,
            ),
            b,
          );
        };
        var ew = n(4710),
          ek = n(22989);
        let eE = (e) => {
            let t = '100%';
            return {
              left: `translateX(-${t})`,
              right: `translateX(${t})`,
              top: `translateY(-${t})`,
              bottom: `translateY(${t})`,
            }[e];
          },
          eN = (e, t) => ({
            '&-enter, &-appear': Object.assign(Object.assign({}, e), { '&-active': t }),
            '&-leave': Object.assign(Object.assign({}, t), { '&-active': e }),
          }),
          eS = (e, t) =>
            Object.assign(
              {
                '&-enter, &-appear, &-leave': {
                  '&-start': { transition: 'none' },
                  '&-active': { transition: `all ${t}` },
                },
              },
              eN({ opacity: e }, { opacity: 1 }),
            ),
          e$ = (e, t) => [eS(0.7, t), eN({ transform: eE(e) }, { transform: 'none' })],
          eO = (e) => {
            let { componentCls: t, motionDurationSlow: n } = e;
            return {
              [t]: {
                [`${t}-mask-motion`]: eS(0, n),
                [`${t}-panel-motion`]: ['left', 'right', 'top', 'bottom'].reduce(
                  (e, t) => Object.assign(Object.assign({}, e), { [`&-${t}`]: e$(t, n) }),
                  {},
                ),
              },
            };
          },
          eZ = (e) => {
            let {
                borderRadiusSM: t,
                componentCls: n,
                zIndexPopup: a,
                colorBgMask: r,
                colorBgElevated: l,
                motionDurationSlow: s,
                motionDurationMid: o,
                paddingXS: i,
                padding: c,
                paddingLG: d,
                fontSizeLG: u,
                lineHeightLG: m,
                lineWidth: p,
                lineType: f,
                colorSplit: x,
                marginXS: h,
                colorIcon: v,
                colorIconHover: g,
                colorBgTextHover: y,
                colorBgTextActive: b,
                colorText: j,
                fontWeightStrong: C,
                footerPaddingBlock: w,
                footerPaddingInline: k,
                calc: E,
              } = e,
              N = `${n}-content-wrapper`;
            return {
              [n]: {
                position: 'fixed',
                inset: 0,
                zIndex: a,
                pointerEvents: 'none',
                '&-pure': {
                  position: 'relative',
                  background: l,
                  display: 'flex',
                  flexDirection: 'column',
                  [`&${n}-left`]: { boxShadow: e.boxShadowDrawerLeft },
                  [`&${n}-right`]: { boxShadow: e.boxShadowDrawerRight },
                  [`&${n}-top`]: { boxShadow: e.boxShadowDrawerUp },
                  [`&${n}-bottom`]: { boxShadow: e.boxShadowDrawerDown },
                },
                '&-inline': { position: 'absolute' },
                [`${n}-mask`]: { position: 'absolute', inset: 0, zIndex: a, background: r, pointerEvents: 'auto' },
                [N]: {
                  position: 'absolute',
                  zIndex: a,
                  maxWidth: '100vw',
                  transition: `all ${s}`,
                  '&-hidden': { display: 'none' },
                },
                [`&-left > ${N}`]: {
                  top: 0,
                  bottom: 0,
                  left: { _skip_check_: !0, value: 0 },
                  boxShadow: e.boxShadowDrawerLeft,
                },
                [`&-right > ${N}`]: {
                  top: 0,
                  right: { _skip_check_: !0, value: 0 },
                  bottom: 0,
                  boxShadow: e.boxShadowDrawerRight,
                },
                [`&-top > ${N}`]: { top: 0, insetInline: 0, boxShadow: e.boxShadowDrawerUp },
                [`&-bottom > ${N}`]: { bottom: 0, insetInline: 0, boxShadow: e.boxShadowDrawerDown },
                [`${n}-content`]: {
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                  overflow: 'auto',
                  background: l,
                  pointerEvents: 'auto',
                },
                [`${n}-header`]: {
                  display: 'flex',
                  flex: 0,
                  alignItems: 'center',
                  padding: `${(0, ew.bf)(c)} ${(0, ew.bf)(d)}`,
                  fontSize: u,
                  lineHeight: m,
                  borderBottom: `${(0, ew.bf)(p)} ${f} ${x}`,
                  '&-title': { display: 'flex', flex: 1, alignItems: 'center', minWidth: 0, minHeight: 0 },
                },
                [`${n}-extra`]: { flex: 'none' },
                [`${n}-close`]: Object.assign(
                  {
                    display: 'inline-flex',
                    width: E(u).add(i).equal(),
                    height: E(u).add(i).equal(),
                    borderRadius: t,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginInlineEnd: h,
                    color: v,
                    fontWeight: C,
                    fontSize: u,
                    fontStyle: 'normal',
                    lineHeight: 1,
                    textAlign: 'center',
                    textTransform: 'none',
                    textDecoration: 'none',
                    background: 'transparent',
                    border: 0,
                    cursor: 'pointer',
                    transition: `all ${o}`,
                    textRendering: 'auto',
                    '&:hover': { color: g, backgroundColor: y, textDecoration: 'none' },
                    '&:active': { backgroundColor: b },
                  },
                  (0, ek.Qy)(e),
                ),
                [`${n}-title`]: {
                  flex: 1,
                  margin: 0,
                  color: j,
                  fontWeight: e.fontWeightStrong,
                  fontSize: u,
                  lineHeight: m,
                },
                [`${n}-body`]: { flex: 1, minWidth: 0, minHeight: 0, padding: d, overflow: 'auto' },
                [`${n}-footer`]: {
                  flexShrink: 0,
                  padding: `${(0, ew.bf)(w)} ${(0, ew.bf)(k)}`,
                  borderTop: `${(0, ew.bf)(p)} ${f} ${x}`,
                },
                '&-rtl': { direction: 'rtl' },
              },
            };
          },
          eP = (0, z.I$)(
            'Drawer',
            (e) => {
              let t = (0, A.TS)(e, {});
              return [eZ(t), eO(t)];
            },
            (e) => ({
              zIndexPopup: e.zIndexPopupBase,
              footerPaddingBlock: e.paddingXS,
              footerPaddingInline: e.padding,
            }),
          );
        var eI = function (e, t) {
          var n = {};
          for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && 0 > t.indexOf(a) && (n[a] = e[a]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
            for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              0 > t.indexOf(a[r]) && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]]);
          return n;
        };
        let eM = { distance: 180 },
          eB = (e) => {
            let {
                rootClassName: t,
                width: n,
                height: a,
                size: r = 'default',
                mask: l = !0,
                push: o = eM,
                open: i,
                afterOpenChange: c,
                onClose: d,
                prefixCls: u,
                getContainer: m,
                style: p,
                className: f,
                visible: x,
                afterVisibleChange: h,
                maskStyle: v,
                drawerStyle: g,
                contentWrapperStyle: y,
              } = e,
              b = eI(e, [
                'rootClassName',
                'width',
                'height',
                'size',
                'mask',
                'push',
                'open',
                'afterOpenChange',
                'onClose',
                'prefixCls',
                'getContainer',
                'style',
                'className',
                'visible',
                'afterVisibleChange',
                'maskStyle',
                'drawerStyle',
                'contentWrapperStyle',
              ]),
              { getPopupContainer: j, getPrefixCls: C, direction: w, drawer: k } = s.useContext(D.E_),
              E = C('drawer', u),
              [N, S, $] = eP(E),
              O = _()({ 'no-mask': !l, [`${E}-rtl`]: 'rtl' === w }, t, S, $),
              Z = s.useMemo(() => (null != n ? n : 'large' === r ? 736 : 378), [n, r]),
              P = s.useMemo(() => (null != a ? a : 'large' === r ? 736 : 378), [a, r]),
              I = {
                motionName: (0, eh.m)(E, 'mask-motion'),
                motionAppear: !0,
                motionEnter: !0,
                motionLeave: !0,
                motionDeadline: 500,
              },
              M = (0, eb.H)(),
              [B, R] = (0, ex.Cn)('Drawer', b.zIndex),
              { classNames: H = {}, styles: T = {} } = b,
              { classNames: F = {}, styles: z = {} } = k || {};
            return N(
              s.createElement(
                ey.BR,
                null,
                s.createElement(
                  eg.Ux,
                  { status: !0, override: !0 },
                  s.createElement(
                    ev.Z.Provider,
                    { value: R },
                    s.createElement(
                      ef,
                      Object.assign(
                        {
                          prefixCls: E,
                          onClose: d,
                          maskMotion: I,
                          motion: (e) => ({
                            motionName: (0, eh.m)(E, `panel-motion-${e}`),
                            motionAppear: !0,
                            motionEnter: !0,
                            motionLeave: !0,
                            motionDeadline: 500,
                          }),
                        },
                        b,
                        {
                          classNames: { mask: _()(H.mask, F.mask), content: _()(H.content, F.content) },
                          styles: {
                            mask: Object.assign(Object.assign(Object.assign({}, T.mask), v), z.mask),
                            content: Object.assign(Object.assign(Object.assign({}, T.content), g), z.content),
                            wrapper: Object.assign(Object.assign(Object.assign({}, T.wrapper), y), z.wrapper),
                          },
                          open: null != i ? i : x,
                          mask: l,
                          push: o,
                          width: Z,
                          height: P,
                          style: Object.assign(Object.assign({}, null == k ? void 0 : k.style), p),
                          className: _()(null == k ? void 0 : k.className, f),
                          rootClassName: O,
                          getContainer: void 0 === m && j ? () => j(document.body) : m,
                          afterOpenChange: null != c ? c : h,
                          panelRef: M,
                          zIndex: B,
                        },
                      ),
                      s.createElement(eC, Object.assign({ prefixCls: E }, b, { onClose: d })),
                    ),
                  ),
                ),
              ),
            );
          };
        eB._InternalPanelDoNotUseOrYouWillBeFired = (e) => {
          let { prefixCls: t, style: n, className: a, placement: r = 'right' } = e,
            l = eI(e, ['prefixCls', 'style', 'className', 'placement']),
            { getPrefixCls: o } = s.useContext(D.E_),
            i = o('drawer', t),
            [c, d, u] = eP(i),
            m = _()(i, `${i}-pure`, `${i}-${r}`, d, u, a);
          return c(
            s.createElement('div', { className: m, style: n }, s.createElement(eC, Object.assign({ prefixCls: i }, l))),
          );
        };
        var eR = n(63908),
          e_ = n.n(eR),
          eD = n(20783),
          eH = n.n(eD);
        function eT() {
          let e = (0, m.I0)(),
            [t, n] = (0, s.useState)(0),
            [o, i] = (0, s.useState)(''),
            c = (0, m.v9)((e) => e.menuFilterReducer.protein),
            d = (0, m.v9)((e) => e.menuFilterReducer.dietaryRestrictions),
            [u, h] = (0, s.useState)([]),
            [v, g] = (0, s.useState)([]),
            w = (0, m.v9)((e) => e.tableReducer.tableId),
            [k, E] = (0, s.useState)(!1),
            N = (0, y.useRouter)(),
            { data: S } = (0, P.NL)(),
            { data: R } = (0, B.fq)({ id: w || '' }, { skip: !w }),
            _ = R?.data,
            { data: D } = (0, I.$r)({ id: _?.discount }, { skip: !_?.discount });
          D?.data;
          let { data: H, isFetching: T } = (0, M.OR)({ search: o, dietary_restrictions: u, proteins: v }),
            F = (0, s.useMemo)(() => (S ? [...S].sort((e, t) => e.name.localeCompare(t.name)) : []), [S]),
            z = H?.data,
            A = (e, t) =>
              (Array.isArray(t) ? [...t] : [])
                .sort((e, t) => e.name.localeCompare(t.name))
                .map((t) => {
                  let n = e?.filter((e) => e.category_id === t.id);
                  if (n?.length > 0) {
                    let e = n.sort((e, t) => e.name.localeCompare(t.name));
                    return { id: t.id, name: t.name, items: e };
                  }
                  return null;
                })
                .filter(Boolean),
            L = (0, s.useMemo)(() => A(z, F), [z, F]),
            [q, V] = (0, s.useState)(F?.[0]?.id),
            [U, W] = (0, s.useState)(!1),
            Y = (0, m.v9)((e) => e.basketReducer.basket),
            [K, X] = (0, s.useState)([]),
            J = (0, y.useSearchParams)().get('bill_id'),
            { data: Q, isFetching: ee } = (0, Z.LJ)({ id: J || '' }, { skip: !J }),
            et = (K?.length || 0) + (Q?.data?.orders?.reduce((e, t) => e + t.items.length, 0) || 0),
            { width: en, height: ea } = (0, l.d)();
          (0, s.useEffect)(() => {
            X(Y?.orderItems);
          }, [Y]);
          let [er, el] = (0, s.useState)([]),
            [es, eo] = (0, s.useState)([]);
          (0, s.useEffect)(() => {
            h(d), g(c), el(d), eo(c);
          }, [d, c, k]);
          let ei = () => {
              E(!1);
            },
            ec = (0, s.useCallback)(
              (e) => {
                1 >= Math.abs(e.length - F.length) ||
                  e.forEach((e) => {
                    e.target.id && e.isIntersecting && V(e.target.id);
                  });
              },
              [F],
            ),
            ed = e_()((e) => {
              i(e);
            }, 500);
          (0, s.useEffect)(() => {
            V(L?.[0]?.id);
          }, [L]),
            (0, s.useEffect)(() => {
              if (U) return;
              let e = (97 / ea) * 100,
                t = new IntersectionObserver(ec, { rootMargin: `-${e}% 0px -${100 - e}% 0px` });
              return (
                document.querySelectorAll('.category--item').forEach((e) => {
                  t.observe(e);
                }),
                () => {
                  t.disconnect();
                }
              );
            }, [U, ec, H, ea]);
          let eu = (0, a.jsxs)('div', {
            children: [
              a.jsx('span', { children: 'View basket' }),
              (0, a.jsxs)('span', {
                id: 'basket-ele',
                className: 'font-normal',
                children: ['・', et, ' item', et > 1 ? 's' : ''],
              }),
            ],
          });
          return (
            (0, s.useEffect)(() => {
              if (L) {
                let e = document.querySelectorAll('#last-category'),
                  t = e[e.length - 1];
                t && n(ea - (162 + t.getBoundingClientRect().height + 40 + 20) + 1);
              }
            }, [L]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                a.jsx(b, {
                  secondaryBtnChildren: eu,
                  onClickSecondaryBtn: () => N.push(J ? `/basket?bill_id=${J}` : '/basket'),
                  toggleFilter: () => {
                    E(!0);
                  },
                  activeCategory: q,
                  setActiveCategory: V,
                  isClickedCategoryBtn: U,
                  handleSearch: (e) => {
                    ed(e.target.value);
                  },
                  setIsClickedClickCategoryBtn: W,
                  isEmptyData: !L?.length,
                  disabledSecondary: !et,
                  categories: L,
                  bottomHeight: t,
                  children: (0, a.jsxs)('main', {
                    className: 'flex flex-col justify-center px-[24px] h-full',
                    children: [
                      L?.length === 0 &&
                        !T &&
                        a.jsx(G, {
                          image: G.PRESENTED_IMAGE_SIMPLE,
                          description: a.jsx('span', {
                            className: 'text-black-300 text-lg',
                            children: 'No items found',
                          }),
                        }),
                      L?.map((e, t) => {
                        let n = e?.items?.length || 0;
                        return a.jsxs(
                          'div',
                          {
                            id: 'last-category',
                            className: `flex flex-col justify-start w-full mb-[40px] ${0 === t ? 'pt-[5px]' : ''}`,
                            children: [
                              a.jsx('p', {
                                id: e?.id,
                                className: 'text-[24px] font-medium text-black-500 leading-7 category--item',
                                children: e?.name,
                              }),
                              a.jsx('div', {
                                className: 'flex flex-col w-full mt-[30px]',
                                children: e?.items?.map((e, t) =>
                                  a.jsxs(
                                    eH(),
                                    {
                                      className: `${e.is_available ? 'cursor-pointer' : 'pointer-events-none'}`,
                                      href: J ? `/product?id=${e.id}&bill_id=${J}` : `/product?id=${e.id}`,
                                      children: [
                                        a.jsx('div', {
                                          className: 0 !== t ? 'mt-[22px]' : '',
                                          children: a.jsx($, {
                                            id: e.id,
                                            name: e.name,
                                            image_url: e.image_url,
                                            description: e.description,
                                            price: e.price,
                                            track_stock: e.is_available,
                                          }),
                                        }),
                                        t < n - 1 &&
                                          a.jsx('hr', { className: 'w-full border-t border-black-100 mt-[18px]' }),
                                      ],
                                    },
                                    e._id,
                                  ),
                                ),
                              }),
                            ],
                          },
                          e?.id,
                        );
                      }),
                      a.jsx('div', { style: { height: t } }),
                      k &&
                        a.jsx(x.ZP, {
                          theme: { token: { fontFamily: 'var(--font-rubik)' } },
                          children: a.jsx(eB, {
                            title: '',
                            closable: !1,
                            placement: 'left',
                            onClose: ei,
                            open: k,
                            width: en,
                            children: a.jsx(j.Z, {
                              isHiddenAvatar: !0,
                              isShowPrimaryButton: !1,
                              isShowBackBtn: !0,
                              onClickBackBtn: ei,
                              secondaryBtnChildren: a.jsx(a.Fragment, { children: 'Apply filters' }),
                              onClickSecondaryBtn: () => {
                                e((0, O.BE)(er)), e((0, O.dL)(es)), ei();
                              },
                              title: 'Filter menu',
                              children: (0, a.jsxs)('div', {
                                className: 'flex flex-col space-y-[29px] mt-[12px] pl-[25px]',
                                children: [
                                  a.jsx(r.Z, {
                                    defaultValue: d,
                                    ...p,
                                    onChange: (e) => {
                                      el(e);
                                    },
                                  }),
                                  a.jsx(r.Z, {
                                    defaultValue: c,
                                    ...f,
                                    onChange: (e) => {
                                      eo(e);
                                    },
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                    ],
                  }),
                }),
                (T || ee) && a.jsx(C.Z, {}),
              ],
            })
          );
        }
      },
      25539: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => s });
        var a = n(95344),
          r = n(41223),
          l = n.n(r);
        n(3729);
        let s = ({ iconName: e }) => {
          let t = '',
            n = !1;
          switch (e.toLowerCase()) {
            case 'vegan':
              t = 'assets/icons/dietaryRestrictionIcons/vegan.svg';
              break;
            case 'vegan option':
              (t = 'assets/icons/dietaryRestrictionIcons/vegan-option.svg'), (n = !0);
              break;
            case 'vegetarian':
              t = 'assets/icons/dietaryRestrictionIcons/vegetarian.svg';
              break;
            case 'vegetarian option':
              (t = 'assets/icons/dietaryRestrictionIcons/vegetarian-option.svg'), (n = !0);
              break;
            case 'diary-free':
              t = 'assets/icons/dietaryRestrictionIcons/diary-free.svg';
              break;
            case 'diary-free option':
              (t = 'assets/icons/dietaryRestrictionIcons/diary-free-option.svg'), (n = !0);
              break;
            case 'gluten-free':
              t = 'assets/icons/dietaryRestrictionIcons/gluten-free.svg';
              break;
            case 'gluten-free option':
              (t = 'assets/icons/dietaryRestrictionIcons/gluten-free-option.svg'), (n = !0);
              break;
            default:
              return null;
          }
          return a.jsx(l(), { priority: !0, src: t, alt: e, width: 19, height: n ? 26 : 19 });
        };
      },
      96609: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => s });
        var a = n(95344),
          r = n(98251),
          l = n(77662);
        let s = () =>
          a.jsx(r.ZP, {
            theme: { token: { colorPrimary: '#131C16' } },
            children: a.jsx(l.Z, {
              className: '!fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 black-500',
              size: 'large',
            }),
          });
      },
      25102: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => i });
        var a = n(95344),
          r = n(54598),
          l = n(41223),
          s = n.n(l),
          o = n(3729);
        let i = ({ src: e, alt: t, width: n, height: l, className: i }) => {
          let [c, d] = (0, o.useState)(!0),
            u = { width: n, height: l };
          return (0, a.jsxs)('div', {
            className: `${i || ''} flex flex-col items-center shrink-0`,
            style: u,
            children: [
              c && a.jsx(r.Z.Button, { style: u, active: !0 }),
              a.jsx(s(), {
                className: 'shrink-0',
                priority: !0,
                onLoad: () => d(!1),
                onError: () => d(!1),
                width: n,
                height: l,
                src: e || '/assets/images/product-default.png',
                alt: t,
                style: { opacity: c ? 0 : 1 },
              }),
            ],
          });
        };
      },
      27740: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => i });
        var a = n(95344),
          r = n(9249),
          l = n.n(r),
          s = n(98251),
          o = n(90377);
        let i = ({ className: e, children: t, ...n }) =>
          a.jsx(s.ZP, {
            theme: {
              components: {
                Tag: {
                  borderRadiusSM: 7,
                  defaultBg: '#fff',
                  fontSizeSM: 10,
                  defaultColor: '#FA4A0C',
                  lineHeightSM: 2.2,
                  colorBorder: '#FA4A0C',
                },
              },
            },
            children: a.jsx(o.Z, {
              ...n,
              className: ` ${e || ''}  font-normal`,
              style: { marginInlineEnd: 0 },
              children: a.jsx('div', { className: l().className, children: t }),
            }),
          });
      },
      17732: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => d });
        var a = n(95344);
        n(3729), n(82919);
        var r = n(98251),
          l = n(73762),
          s = n(25539),
          o = n(9249),
          i = n.n(o);
        let c = ({ value: e, icon: t, price: n }) =>
            a.jsx(r.ZP, {
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
              children: a.jsx('div', {
                className: 'flex items-center',
                children: a.jsx(l.Z, {
                  value: e,
                  children: a.jsx('div', {
                    className: 'flex justify-between text-black-500 ml-[3px]',
                    children: (0, a.jsxs)('div', {
                      className: 'flex items-center',
                      children: [
                        t && a.jsx('div', { className: 'mr-[8px]', children: a.jsx(s.Z, { iconName: t }) }),
                        a.jsx('div', { className: `text-[14px] ${i().className}`, children: `${e}` }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          d = ({ discount: e, groupName: t, options: n, onChange: r, defaultValue: s }) =>
            (0, a.jsxs)('div', {
              children: [
                a.jsx('p', { className: 'text-[14px] font-medium mb-[11px] text-black-400', children: t }),
                a.jsx(l.Z.Group, {
                  defaultValue: s,
                  className: 'flex flex-col w-full',
                  onChange: (e) => {
                    r(e, t);
                  },
                  children: a.jsx('div', {
                    className: 'flex flex-col space-y-[10px]',
                    children: n?.map((n, r) =>
                      a.jsxs(
                        'div',
                        {
                          className: 'flex justify-between items-center text-black-500 w-full',
                          children: [
                            a.jsx(c, { value: n.label, icon: n?.icon?.toLowerCase(), price: n.price }),
                            n.price &&
                              a.jsxs('label', {
                                className: `text-[14px] ${i().className}`,
                                htmlFor: `${t}-${r}`,
                                children: [
                                  ' ',
                                  '+ ',
                                  e?.type === 'FIXED_PERCENT' &&
                                    a.jsxs('span', { className: 'line-through', children: [' ', n.price] }),
                                  ` ${+n.price}`,
                                ],
                              }),
                          ],
                        },
                        r,
                      ),
                    ),
                  }),
                }),
              ],
            });
      },
      85787: (e, t, n) => {
        'use strict';
        n.d(t, { I: () => r });
        var a = n(3729);
        function r(e) {
          let [t, n] = (0, a.useState)(!1),
            [r, l] = (0, a.useState)(!1),
            [s, o] = (0, a.useState)(0),
            [i, c] = (0, a.useState)(0),
            d = (0, a.useCallback)(() => {
              let t = e?.current;
              t &&
                (n(t.scrollHeight > t.clientHeight),
                l(t.scrollWidth > t.clientWidth),
                o(t.scrollTop),
                c(t.scrollHeight - t.offsetHeight - t.scrollTop));
            }, [e?.current]);
          return (
            (0, a.useEffect)(() => {}, [!1, d, e?.current]),
            (0, a.useCallback)(() => {
              let t = e?.current;
              t && (o(t.scrollTop), c(t.scrollHeight - t.offsetHeight - t.scrollTop));
            }, [e?.current]),
            (0, a.useEffect)(() => {
              e?.current;
            }, [!1, d, e?.current]),
            { isVerticalScroll: t, isHorizontalScroll: r, scrollTop: s, scrollBottom: i }
          );
        }
      },
      47307: (e, t, n) => {
        'use strict';
        n.d(t, { d: () => r });
        var a = n(3729);
        function r() {
          let e = () => {
              let { innerWidth: e, innerHeight: t } = { innerWidth: 0, innerHeight: 0 };
              return { width: e, height: t, isMobile: e < 768 };
            },
            [t, n] = (0, a.useState)(e()),
            r = (0, a.useCallback)(() => {
              n(e());
            }, []);
          return (0, a.useEffect)(() => {}, [!1, r]), t;
        }
      },
      49246: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => l });
        var a = n(95344),
          r = n(67523);
        let l = ({
          isShowPrimaryButton: e = !1,
          primaryBtnChildren: t,
          secondaryBtnChildren: n,
          disabledPrimary: l,
          disabledSecondary: s,
          onClickPrimaryBtn: o,
          onClickSecondaryBtn: i,
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
              e && a.jsx(r.zx, { variant: 'primary', disabled: l, onClick: o, children: t }),
              a.jsx(r.zx, { variant: 'secondary', disabled: s, onClick: i, children: n }),
            ],
          });
      },
      22781: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => d });
        var a = n(95344),
          r = n(22254),
          l = n(3729),
          s = n(67523),
          o = n(85787),
          i = n(35479),
          c = n(49246);
        let d = ({
          isShowBackBtn: e = !0,
          title: t,
          isTextRequestTaxInvoice: n,
          children: d,
          disabledPrimary: u,
          disabledSecondary: m,
          onClickSecondaryBtn: p,
          secondaryBtnChildren: f,
          onClickPrimaryBtn: x,
          primaryBtnChildren: h,
          isShowPrimaryButton: v,
          onClickBackBtn: g,
          onClickDownBtn: y,
          disabledBackBtn: b,
          isHiddenAvatar: j = !1,
        }) => {
          let C = (0, l.useRef)(null),
            { scrollTop: w, scrollBottom: k } = (0, o.I)(C);
          (0, r.useRouter)();
          let E = (0, l.useMemo)(() => (v ? '243px' : n ? '211px' : '170px'), [v, n]);
          return (0, a.jsxs)('div', {
            className: 'flex flex-col h-screen',
            children: [
              (0, a.jsxs)('div', {
                className: `${
                  w - 13 > 0 ? 'shadow-medium-bottom' : ''
                } relative w-full pt-[22px] pb-[15px] flex flex-row items-center ${
                  e ? 'justify-start pl-4' : 'justify-end pr-4'
                }`,
                children: [
                  e && a.jsx(s.hU, { icon: a.jsx(i.Y4, {}), disabled: b, onClick: g }),
                  a.jsx('span', {
                    className:
                      'w-[calc(100%-8rem)] absolute top-[40%] right-1/2 transform translate-x-1/2 text-center text-xl font-medium text-black-500',
                    children: t,
                  }),
                  !e && a.jsx(s.hU, { icon: a.jsx(i._8, {}), onClick: y }),
                ],
              }),
              a.jsx('div', { ref: C, className: `overflow-y-auto max-h-screen-${E}`, children: d }),
              a.jsx(c.Z, {
                className: k - 40 > 0 ? 'shadow-medium-top' : '',
                disabledPrimary: u,
                disabledSecondary: m,
                isTextRequestTaxInvoice: n,
                isShowPrimaryButton: v,
                onClickPrimaryBtn: x,
                primaryBtnChildren: h,
                onClickSecondaryBtn: p,
                secondaryBtnChildren: f,
              }),
            ],
          });
        };
      },
      72190: (e, t, n) => {
        'use strict';
        n.r(t), n.d(t, { $$typeof: () => l, __esModule: () => r, default: () => s });
        let a = (0, n(86843).createProxy)(
            String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/menu/page.tsx`,
          ),
          { __esModule: r, $$typeof: l } = a,
          s = a.default;
      },
      3707: () => {},
      82919: () => {},
      42617: () => {},
    });
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var n = (e) => t((t.s = e)),
    a = t.X(0, [638, 289, 363, 662, 264, 646, 223, 503, 598, 943, 762, 377, 118, 479], () => n(87028));
  module.exports = a;
})();
