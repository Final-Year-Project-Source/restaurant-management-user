(() => {
  var e = {};
  (e.id = 781),
    (e.ids = [781]),
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
      3836: (e, t, r) => {
        'use strict';
        r.r(t),
          r.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => p,
            originalPathname: () => d,
            pages: () => c,
            routeModule: () => x,
            tree: () => u,
          });
        var s = r(50482),
          a = r(69108),
          n = r(62563),
          o = r.n(n),
          i = r(68300),
          l = {};
        for (let e in i)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', 'originalPathname', '__next_app__', 'routeModule'].indexOf(e) &&
            (l[e] = () => i[e]);
        r.d(t, l);
        let u = [
            '',
            {
              children: [
                'forgot-password',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 87809)),
                        '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/forgot-password/page.tsx',
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
          c = [
            '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/forgot-password/page.tsx',
          ],
          d = '/forgot-password/page',
          p = { require: r, loadChunk: () => Promise.resolve() },
          x = new s.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: '/forgot-password/page',
              pathname: '/forgot-password',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: u },
          });
      },
      92299: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 36979)), Promise.resolve().then(r.bind(r, 71888));
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
          o = r(66173),
          i = r(86513),
          l = r(80185);
        e.exports = function (e, t, r) {
          var u = -1,
            c = a,
            d = e.length,
            p = !0,
            x = [],
            m = x;
          if (r) (p = !1), (c = n);
          else if (d >= 200) {
            var h = t ? null : i(e);
            if (h) return l(h);
            (p = !1), (c = o), (m = new s());
          } else m = t ? [] : x;
          e: for (; ++u < d; ) {
            var g = e[u],
              f = t ? t(g) : g;
            if (((g = r || 0 !== g ? g : 0), p && f == f)) {
              for (var v = m.length; v--; ) if (m[v] === f) continue e;
              t && m.push(f), x.push(g);
            } else c(m, f, r) || (m !== x && m.push(f), x.push(g));
          }
          return x;
        };
      },
      86513: (e, t, r) => {
        var s = r(27542),
          a = r(25296),
          n = r(80185),
          o =
            s && 1 / n(new s([, -0]))[1] == 1 / 0
              ? function (e) {
                  return new s(e);
                }
              : a;
        e.exports = o;
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
      36979: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => c });
        var s = r(95344),
          a = r(98251),
          n = r(66396),
          o = r(41223),
          i = r.n(o),
          l = r(22254);
        let u = [
            { key: 'login', label: 'Login' },
            { key: 'register', label: 'Register' },
          ],
          c = ({ children: e, isHiddenTabs: t = !1 }) => {
            let r = (0, l.usePathname)(),
              o = (0, l.useRouter)();
            return s.jsx('div', {
              className: 'flex h-full items-center justify-center',
              children: (0, s.jsxs)('div', {
                className:
                  'rounded-2xl bg-white sm:shadow-2xl flex flex-col justify-center items-center min-w-[500px] max-sm-w-full ',
                children: [
                  s.jsx(i(), {
                    priority: !0,
                    src: '/assets/icons/mini-logo.svg',
                    alt: 'logo',
                    width: 150,
                    height: 150,
                  }),
                  !t &&
                    s.jsx(a.ZP, {
                      theme: {
                        components: {
                          Tabs: {
                            itemSelectedColor: '#FA4A0C',
                            itemHoverColor: 'rgba(19, 28, 22, 0.5)',
                            itemActiveColor: 'rgba(19, 28, 22, 0.5)',
                            inkBarColor: '#FA4A0C',
                          },
                        },
                      },
                      children: s.jsx(n.Z, {
                        className: 'w-full',
                        defaultActiveKey: r.slice(1) || 'login',
                        centered: !0,
                        items: u,
                        onChange: (e) => {
                          o.push(`/${e}`);
                        },
                      }),
                    }),
                  e,
                ],
              }),
            });
          };
      },
      71888: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => d });
        var s = r(95344),
          a = r(3729);
        r(68892);
        var n = r(17248),
          o = r(6650),
          i = r(43229),
          l = r(22254),
          u = r(5069),
          c = r(96609);
        function d() {
          let [e, t] = (0, a.useState)(!1),
            [r, d] = (0, a.useState)(''),
            [p, x] = (0, a.useState)(''),
            [m, { isLoading: h }] = (0, i.q3)(),
            [g, f] = (0, a.useState)(!1),
            [v, y] = (0, a.useState)(30),
            j = (0, l.useRouter)(),
            w = async (e) => {
              let { value: t } = e.target;
              d(t);
            },
            b = async (e) => {
              'Enter' === e.key && P();
            },
            P = async () =>
              (t(!0), r)
                ? (0, o.vV)(r)
                  ? (x(''),
                    void m({ data: { email: r } })
                      .unwrap()
                      .then((e) => {
                        t(!1), y(30), f(!0);
                      })
                      .catch((e) => {
                        x(e.data.message), t(!1);
                      }))
                  : (t(!1), x('Please enter a valid email '))
                : (t(!1), x('Please enter your email'));
          (0, a.useEffect)(() => {
            if (v > 0 && g) {
              let e = setTimeout(() => {
                y((e) => e - 1);
              }, 1e3);
              return () => clearTimeout(e);
            }
          }, [v, g]);
          let k = (0, s.jsxs)('div', {
              className:
                'flex flex-col bg-white justify-center items-center w-full sm:max-w-xl space-y-3 p-10 rounded-xl shadow-2xl max-[768px]:m-2',
              children: [
                s.jsx('div', { className: 'text-[24px] font-bold text-black-500 my-3', children: 'Forgot Password' }),
                s.jsx('div', {
                  className: 'text-[14px] text-black-500 my-5',
                  children: 'To reset your password, please provide the email address associated with your account.',
                }),
                (0, s.jsxs)('div', {
                  className: 'w-full',
                  children: [
                    s.jsx('div', { className: 'text-[14px] font-bold text-black-500 my-3', children: 'Email' }),
                    s.jsx(u.Z, { placeholder: 'Email', disabled: e || h, onChange: w, onKeyDown: b }),
                  ],
                }),
                (0, s.jsxs)('div', {
                  className: 'w-full',
                  children: [
                    p
                      ? s.jsx('div', { className: 'text-red-500 text-[14px]', children: p })
                      : s.jsx('div', { className: 'h-[10px]' }),
                    s.jsx(n.Z, {
                      onClick: P,
                      disabled: e || h,
                      variant: 'secondary',
                      className: 'mt-1',
                      children: 'Submit',
                    }),
                  ],
                }),
                s.jsx('div', {
                  className: `text-[14px] text-right text-black-500 cursor-pointer w-full italic hover:underline ${
                    h && 'pointer-events-none'
                  }`,
                  onClick: () => j.push('/login'),
                  children: 'Return to login page',
                }),
                e && s.jsx(c.Z, {}),
              ],
            }),
            S = (0, s.jsxs)('div', {
              className:
                'flex flex-col bg-white justify-center items-center w-full sm:max-w-xl space-y-3 p-10 rounded-xl shadow-2xl max-[768px]:m-2',
              children: [
                s.jsx('div', { className: 'text-[24px] font-bold text-black-500 my-3', children: 'Reset Password' }),
                s.jsx('div', {
                  className: 'text-[14px] text-black-500 my-5',
                  children:
                    'A link to reset your password has been sent to your email address. Please check your email.',
                }),
                (0, s.jsxs)('div', {
                  className: 'text-[14px] text-black-500 w-full',
                  children: [
                    'Didnt receive the email?',
                    v > 0
                      ? (0, s.jsxs)('span', { className: 'text-gray-500', children: [' Resend in ', v, ' seconds'] })
                      : (0, s.jsxs)('span', {
                          className: `cursor-pointer hover:underline italic ${h && 'pointer-events-none'}`,
                          onClick: P,
                          children: [' ', 'Resend', ' '],
                        }),
                  ],
                }),
                s.jsx('div', {
                  className: `text-[14px] text-black-500 hover:underline cursor-pointer w-full italic ${
                    h && 'pointer-events-none'
                  }`,
                  onClick: () => f(!1),
                  children: 'Change to another email address',
                }),
                s.jsx('div', {
                  className: `text-[14px] text-black-500 hover:underline cursor-pointer w-full italic ${
                    h && 'pointer-events-none'
                  }`,
                  onClick: () => j.push('/login'),
                  children: 'Return to login page',
                }),
                e && s.jsx(c.Z, {}),
              ],
            });
          return s.jsx(s.Fragment, { children: g ? S : k });
        }
      },
      96609: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => o });
        var s = r(95344),
          a = r(98251),
          n = r(77662);
        let o = () =>
          s.jsx(a.ZP, {
            theme: { token: { colorPrimary: '#131C16' } },
            children: s.jsx(n.Z, {
              className: '!fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 black-500',
              size: 'large',
            }),
          });
      },
      5069: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => u });
        var s = r(95344),
          a = r(3729),
          n = r(98251),
          o = r(28646),
          i = r(9249),
          l = r.n(i);
        r(42617);
        let u = ({ valuePlaceholder: e, autoFocus: t, ...r }) => {
          let i = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              if (t && i.current) {
                let e = setTimeout(() => {
                  i?.current.focus();
                }, 1);
                return () => clearTimeout(e);
              }
            }, [t]),
            s.jsx(n.ZP, {
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
              children: s.jsx(o.default, { className: `${l().className}`, placeholder: e, ...r, ref: i }),
            })
          );
        };
      },
      43229: (e, t, r) => {
        'use strict';
        r.d(t, { YE: () => n, q3: () => l });
        var s = r(27445),
          a = r(53962);
        let {
          useLoginFirstStepMutation: n,
          useLoginSecondStepMutation: o,
          useChangeDefaultPasswordMutation: i,
          useSendMailResetPasswordMutation: l,
          useResetForgotPasswordMutation: u,
        } = (0, s.LC)({
          reducerPath: 'loginApi',
          refetchOnFocus: !0,
          baseQuery: (0, a.ni)({ baseUrl: 'http://localhost:3001/v1/' }),
          tagTypes: ['Login'],
          endpoints: (e) => ({
            loginFirstStep: e.mutation({
              query: ({ data: e }) => ({
                url: 'auth/login-1-step',
                method: 'POST',
                body: { data: e },
                headers: { 'Content-Type': 'application/json' },
              }),
              invalidatesTags: ['Login'],
            }),
            LoginSecondStep: e.mutation({
              query: ({ token: e, verifyToken: t }) => ({
                url: 'auth/otp/verify',
                method: 'POST',
                body: { token: e },
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${t}` },
              }),
              invalidatesTags: ['Login'],
            }),
            ChangeDefaultPassword: e.mutation({
              query: ({ newPassword: e, verifyToken: t }) => ({
                url: 'auth/change-default-password',
                method: 'POST',
                body: { newPassword: e },
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${t}` },
              }),
              invalidatesTags: ['Login'],
            }),
            SendMailResetPassword: e.mutation({
              query: ({ data: e }) => ({
                url: 'auth/forgot-password',
                method: 'POST',
                body: { data: e },
                headers: { 'Content-Type': 'application/json' },
              }),
            }),
            ResetForgotPassword: e.mutation({
              query: ({ data: e, token: t }) => ({
                url: 'auth/reset-password',
                method: 'POST',
                body: { data: e },
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${t}` },
              }),
            }),
          }),
        });
      },
      6650: (e, t, r) => {
        'use strict';
        r.d(t, {
          Bg: () => n,
          Pb: () => c,
          T4: () => p,
          Y0: () => l,
          oH: () => i,
          r$: () => u,
          vV: () => d,
          xz: () => o,
        }),
          r(67113);
        var s = r(59828),
          a = r.n(s);
        let n = (e) => a()(e?.filter((e) => e.endsWith('option')).map((e) => (e = e.replace(' option', ''))) || []),
          o = (e) => (e ? `${e.getHours()}:${10 > e.getMinutes() ? '0' : ''}${e.getMinutes()}` : ''),
          i = (e) => '' === e.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
          l = (e) => '' === e.trim() || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(e),
          u = (e) => /^(\d[- ]?){12}\d$/.test(e),
          c = (e) => '' !== e.trim(),
          d = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
          p = (e) => (e ? Math.round(Number(e)).toLocaleString('en-US').replace(/,/g, '.') : '0');
      },
      87809: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => x });
        var s = r(25036);
        r(40002), r(54315);
        var a = r(86843);
        let n = (0, a.createProxy)(
            String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/components/AuthLayout.tsx`,
          ),
          { __esModule: o, $$typeof: i } = n,
          l = n.default,
          u = (0, a.createProxy)(
            String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/components/ForgotPasswordForm.tsx`,
          ),
          { __esModule: c, $$typeof: d } = u,
          p = u.default;
        async function x() {
          return s.jsx(l, { isHiddenTabs: !0, children: s.jsx(p, {}) });
        }
      },
      42617: () => {},
      68892: () => {},
    });
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [638, 289, 363, 662, 264, 646, 223, 503, 828, 396, 118], () => r(3836));
  module.exports = s;
})();
