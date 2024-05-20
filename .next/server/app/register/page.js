(() => {
  var e = {};
  (e.id = 11),
    (e.ids = [11]),
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
      77362: (e, t, r) => {
        'use strict';
        r.r(t),
          r.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => p,
            originalPathname: () => u,
            pages: () => c,
            routeModule: () => m,
            tree: () => d,
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
        let d = [
            '',
            {
              children: [
                'register',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 58761)),
                        '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/register/page.tsx',
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
          c = ['/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/register/page.tsx'],
          u = '/register/page',
          p = { require: r, loadChunk: () => Promise.resolve() },
          m = new s.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: '/register/page',
              pathname: '/register',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      26314: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 24279));
      },
      24279: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => x });
        var s = r(95344),
          a = r(3729),
          n = r(22254),
          o = r(96609),
          i = r(43229),
          l = r(5069),
          d = r(40678),
          c = r(67523);
        let u = { email: '', password: '', name: '', confirmPassword: '' };
        function p() {
          let [e, t] = (0, a.useState)({ ...u }),
            [r, p] = (0, a.useState)({ ...u }),
            [m, x] = (0, a.useState)(''),
            [h, { isLoading: g }] = (0, i.YE)(),
            [y, f] = (0, a.useState)(!1);
          (0, n.useRouter)();
          let v = (e, t) =>
              'password' === e
                ? t.length < 1
                  ? 'Please enter a password'
                  : ''
                : 'confirmPassword' === e
                  ? t.length < 1
                    ? 'Please confirm password'
                    : ''
                  : 'name' === e
                    ? t.length < 1
                      ? 'Please enter name'
                      : ''
                    : t.length < 1
                      ? 'Please enter an email'
                      : '',
            j = (s, a) => {
              let { value: n } = s.target;
              t({ ...e, [a]: n }), p({ ...r, [a]: v(a, n) });
            },
            P = () => {},
            b = (e) => {
              'Enter' === e.key && P();
            };
          return (0, s.jsxs)('div', {
            className: 'w-full sm:max-w-xl p-10 space-y-[5px] ',
            children: [
              (0, s.jsxs)('div', {
                children: [
                  s.jsx('div', { className: 'font-medium text-[16px] mb-1 text-black-500 ', children: ' Name ' }),
                  s.jsx('div', {
                    children: s.jsx(l.Z, { disabled: g || y, onChange: (e) => j(e, 'name'), placeholder: 'Name' }),
                  }),
                  r.name
                    ? s.jsx('p', { className: 'text-red-400 text-[14px]', children: r.name })
                    : s.jsx('p', { className: 'h-[21px]' }),
                ],
              }),
              (0, s.jsxs)('div', {
                children: [
                  s.jsx('div', { className: 'font-medium text-[16px] mb-1 text-black-500 ', children: ' Email ' }),
                  s.jsx('div', {
                    children: s.jsx(l.Z, { disabled: g || y, onChange: (e) => j(e, 'email'), placeholder: 'Email' }),
                  }),
                  r.email
                    ? s.jsx('p', { className: 'text-red-400 text-[14px]', children: r.email })
                    : s.jsx('p', { className: 'h-[21px]' }),
                ],
              }),
              (0, s.jsxs)('div', {
                children: [
                  s.jsx('div', { className: 'font-medium text-[16px] mb-1 text-black-500 ', children: 'Password ' }),
                  s.jsx('div', {
                    children: s.jsx(d.Z, {
                      onKeyDown: b,
                      onChange: (e) => j(e, 'password'),
                      placeholder: 'Password',
                      disabled: g || y,
                    }),
                  }),
                  m
                    ? s.jsx('p', { className: 'text-red-400 text-[14px]', children: m })
                    : r.password
                      ? s.jsx('p', { className: 'text-red-400 text-[14px]', children: r.password })
                      : s.jsx('p', { className: 'h-[21px]' }),
                ],
              }),
              (0, s.jsxs)('div', {
                children: [
                  s.jsx('div', {
                    className: 'font-medium text-[16px] mb-1 text-black-500 ',
                    children: ' Confirm password ',
                  }),
                  s.jsx('div', {
                    children: s.jsx(d.Z, {
                      onKeyDown: b,
                      onChange: (e) => j(e, 'confirmPassword'),
                      placeholder: 'Confirm password',
                      disabled: g || y,
                    }),
                  }),
                  m
                    ? s.jsx('p', { className: 'text-red-400 text-[14px]', children: m })
                    : r.confirmPassword
                      ? s.jsx('p', { className: 'text-red-400 text-[14px]', children: r.confirmPassword })
                      : s.jsx('p', { className: 'h-[21px]' }),
                ],
              }),
              s.jsx('div', {
                children: s.jsx(c.zx, { variant: 'secondary', disabled: g || y, onClick: P, children: 'Register' }),
              }),
              (g || y) && s.jsx(o.Z, {}),
            ],
          });
        }
        var m = r(36979);
        function x() {
          return s.jsx(m.default, { children: s.jsx(p, {}) });
        }
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
        let d = [
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
                        items: d,
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
        r.d(t, { Z: () => d });
        var s = r(95344),
          a = r(3729),
          n = r(98251),
          o = r(28646),
          i = r(9249),
          l = r.n(i);
        r(42617);
        let d = ({ valuePlaceholder: e, autoFocus: t, ...r }) => {
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
      40678: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => d });
        var s = r(95344),
          a = r(3729),
          n = r(98251),
          o = r(28646),
          i = r(9249),
          l = r.n(i);
        r(42617), r(80085);
        let d = ({ valuePlaceholder: e, passwordVisible: t, setPasswordVisible: r, ...i }) => {
          let [d, c] = (0, a.useState)(!1);
          return s.jsx(n.ZP, {
            theme: {
              components: {
                Input: {
                  paddingInline: 15,
                  paddingBlock: 10,
                  activeBorderColor: 'rgba(19, 28, 22, 0.2)',
                  hoverBorderColor: 'rgba(19, 28, 22, 0.2)',
                  borderRadius: 16,
                  activeBg: 'transparent',
                },
              },
              token: {
                lineHeight: 1.85,
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
            children: s.jsx(o.default.Password, {
              className: `input-password ${d ? '--focus' : ''}`,
              autoComplete: 'off',
              onFocus: () => c(!0),
              onBlur: () => c(!1),
              visibilityToggle: { visible: t, onVisibleChange: r },
              placeholder: e,
              ...i,
            }),
          });
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
          useResetForgotPasswordMutation: d,
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
      58761: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { $$typeof: () => n, __esModule: () => a, default: () => o });
        let s = (0, r(86843).createProxy)(
            String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/register/page.tsx`,
          ),
          { __esModule: a, $$typeof: n } = s,
          o = s.default;
      },
      42617: () => {},
      80085: () => {},
    });
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [638, 289, 363, 662, 264, 646, 223, 503, 828, 396, 118], () => r(77362));
  module.exports = s;
})();
