(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4011],
  {
    14490: function (e, t, r) {
      'use strict';
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(13428),
        a = r(2265),
        s = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'minus',
          theme: 'outlined',
        },
        o = r(46614),
        i = a.forwardRef(function (e, t) {
          return a.createElement(o.Z, (0, n.Z)({}, e, { ref: t, icon: s }));
        });
    },
    74581: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 75505));
    },
    75505: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return x;
          },
        });
      var n = r(57437),
        a = r(2265),
        s = r(24033),
        o = r(29340),
        i = r(87601),
        l = r(54021),
        c = r(62504),
        d = r(76158);
      let u = { email: '', password: '', name: '', confirmPassword: '' };
      function m() {
        let [e, t] = (0, a.useState)({ ...u }),
          [r, m] = (0, a.useState)({ ...u }),
          [p, x] = (0, a.useState)(''),
          [h, { isLoading: f }] = (0, i.YE)(),
          [g, y] = (0, a.useState)(!1);
        (0, s.useRouter)();
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
          b = (n, a) => {
            let { value: s } = n.target;
            t({ ...e, [a]: s }), m({ ...r, [a]: v(a, s) });
          },
          j = () => {},
          P = (e) => {
            'Enter' === e.key && j();
          };
        return (0, n.jsxs)('div', {
          className: 'w-full sm:max-w-xl p-10 space-y-[5px] ',
          children: [
            (0, n.jsxs)('div', {
              children: [
                (0, n.jsx)('div', { className: 'font-medium text-[16px] mb-1 text-black-500 ', children: ' Name ' }),
                (0, n.jsx)('div', {
                  children: (0, n.jsx)(l.Z, { disabled: f || g, onChange: (e) => b(e, 'name'), placeholder: 'Name' }),
                }),
                r.name
                  ? (0, n.jsx)('p', { className: 'text-red-400 text-[14px]', children: r.name })
                  : (0, n.jsx)('p', { className: 'h-[21px]' }),
              ],
            }),
            (0, n.jsxs)('div', {
              children: [
                (0, n.jsx)('div', { className: 'font-medium text-[16px] mb-1 text-black-500 ', children: ' Email ' }),
                (0, n.jsx)('div', {
                  children: (0, n.jsx)(l.Z, { disabled: f || g, onChange: (e) => b(e, 'email'), placeholder: 'Email' }),
                }),
                r.email
                  ? (0, n.jsx)('p', { className: 'text-red-400 text-[14px]', children: r.email })
                  : (0, n.jsx)('p', { className: 'h-[21px]' }),
              ],
            }),
            (0, n.jsxs)('div', {
              children: [
                (0, n.jsx)('div', { className: 'font-medium text-[16px] mb-1 text-black-500 ', children: 'Password ' }),
                (0, n.jsx)('div', {
                  children: (0, n.jsx)(c.Z, {
                    onKeyDown: P,
                    onChange: (e) => b(e, 'password'),
                    placeholder: 'Password',
                    disabled: f || g,
                  }),
                }),
                p
                  ? (0, n.jsx)('p', { className: 'text-red-400 text-[14px]', children: p })
                  : r.password
                    ? (0, n.jsx)('p', { className: 'text-red-400 text-[14px]', children: r.password })
                    : (0, n.jsx)('p', { className: 'h-[21px]' }),
              ],
            }),
            (0, n.jsxs)('div', {
              children: [
                (0, n.jsx)('div', {
                  className: 'font-medium text-[16px] mb-1 text-black-500 ',
                  children: ' Confirm password ',
                }),
                (0, n.jsx)('div', {
                  children: (0, n.jsx)(c.Z, {
                    onKeyDown: P,
                    onChange: (e) => b(e, 'confirmPassword'),
                    placeholder: 'Confirm password',
                    disabled: f || g,
                  }),
                }),
                p
                  ? (0, n.jsx)('p', { className: 'text-red-400 text-[14px]', children: p })
                  : r.confirmPassword
                    ? (0, n.jsx)('p', { className: 'text-red-400 text-[14px]', children: r.confirmPassword })
                    : (0, n.jsx)('p', { className: 'h-[21px]' }),
              ],
            }),
            (0, n.jsx)('div', {
              children: (0, n.jsx)(d.zx, { variant: 'secondary', disabled: f || g, onClick: j, children: 'Register' }),
            }),
            (f || g) && (0, n.jsx)(o.Z, {}),
          ],
        });
      }
      var p = r(24347);
      function x() {
        return (0, n.jsx)(p.default, { children: (0, n.jsx)(m, {}) });
      }
    },
    24347: function (e, t, r) {
      'use strict';
      r.r(t);
      var n = r(57437),
        a = r(91623),
        s = r(19749),
        o = r(16691),
        i = r.n(o),
        l = r(24033);
      let c = [
        { key: 'login', label: 'Login' },
        { key: 'register', label: 'Register' },
      ];
      t.default = (e) => {
        let { children: t, isHiddenTabs: r = !1 } = e,
          o = (0, l.usePathname)(),
          d = (0, l.useRouter)();
        return (0, n.jsx)('div', {
          className: 'flex h-full items-center justify-center',
          children: (0, n.jsxs)('div', {
            className:
              'rounded-2xl bg-white sm:shadow-2xl flex flex-col justify-center items-center min-w-[500px] max-sm-w-full ',
            children: [
              (0, n.jsx)(i(), {
                priority: !0,
                src: '/assets/icons/mini-logo.svg',
                alt: 'logo',
                width: 150,
                height: 150,
              }),
              !r &&
                (0, n.jsx)(a.ZP, {
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
                  children: (0, n.jsx)(s.Z, {
                    className: 'w-full',
                    defaultActiveKey: o.slice(1) || 'login',
                    centered: !0,
                    items: c,
                    onChange: (e) => {
                      d.push('/'.concat(e));
                    },
                  }),
                }),
              t,
            ],
          }),
        });
      };
    },
    29340: function (e, t, r) {
      'use strict';
      var n = r(57437),
        a = r(91623),
        s = r(59810);
      t.Z = () =>
        (0, n.jsx)(a.ZP, {
          theme: { token: { colorPrimary: '#131C16' } },
          children: (0, n.jsx)(s.Z, {
            className: '!fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 black-500',
            size: 'large',
          }),
        });
    },
    4696: function (e, t, r) {
      'use strict';
      var n = r(57437);
      r(2265);
      var a = r(51434),
        s = r.n(a);
      t.Z = (e) => {
        let { variant: t = 'primary', disabled: r, children: a, className: o, ...i } = e;
        return (0, n.jsx)('button', {
          ...i,
          className: ''
            .concat(s()[''.concat(t, 'Btn')], ' ')
            .concat(r ? s().disabledBtn : '', ' ')
            .concat(s().btn, ' ')
            .concat(o || '', ' flex justify-center items-center whitespace-nowrap w-full rounded-[30px] max-h-[61px]'),
          disabled: r,
          children: a,
        });
      };
    },
    16223: function (e, t, r) {
      'use strict';
      var n = r(57437),
        a = r(91623),
        s = r(64495);
      r(2265);
      var o = r(51434),
        i = r.n(o);
      t.Z = (e) => {
        let { children: t, className: r, active: o, ...l } = e;
        return (0, n.jsx)(a.ZP, {
          theme: {
            components: {
              Button: {
                borderRadius: 0,
                fontSize: 16,
                colorPrimaryHover: 'transparent',
                defaultBorderColor: 'transparent',
                defaultGhostBorderColor: 'transparent',
                colorPrimaryActive: 'transparent',
              },
            },
            token: { colorPrimaryActive: 'transparent', colorBorder: 'transparent', colorBgTextActive: 'transparent' },
          },
          children: (0, n.jsx)(s.ZP, {
            type: 'text',
            style: { fontFamily: 'var(--font-rubik)' },
            ...l,
            className: ''
              .concat(r || '', ' ')
              .concat(o ? i().active : i().inActive, ' ')
              .concat(i().categoryButton),
            children: t,
          }),
        });
      };
    },
    55261: function (e, t, r) {
      'use strict';
      var n = r(57437),
        a = r(74898),
        s = r(14490),
        o = r(91623),
        i = r(64495),
        l = r(51434),
        c = r.n(l);
      t.Z = (e) => {
        let { plus: t = !0, variant: r = 'primary', className: l, ...d } = e,
          u = { color: 'primary' === r ? '#FA4A0C' : '#fff', fontSize: '10px', margin: '0px' };
        return (0, n.jsx)(o.ZP, {
          theme: {
            components: {
              Button: { colorPrimaryHover: 'none', defaultBorderColor: '#FA4A0C', colorBgContainer: 'transparent' },
            },
            token: { colorPrimaryActive: '#FA4A0C', colorBorder: '#FA4A0C' },
          },
          children: (0, n.jsx)(i.ZP, {
            ...d,
            className: ''
              .concat(l || '', ' ')
              .concat('border border-solid border-red-100', ' ')
              .concat(c().countBtn, ' '),
            icon: t ? (0, n.jsx)(a.Z, { style: u }) : (0, n.jsx)(s.Z, { style: u }),
            size: 'small',
            style: { backgroundColor: 'primary' === r ? 'transparent' : '#FA4A0C' },
          }),
        });
      };
    },
    86550: function (e, t, r) {
      'use strict';
      var n = r(57437);
      r(2265),
        (t.Z = (e) => {
          let { icon: t, className: r, ...a } = e;
          return (0, n.jsx)('button', {
            className: ''.concat(
              r || '',
              ' !bg-white-100 flex justify-center items-center border border-solid border-red-100 bg-white rounded-2xl p-1.5 shadow-none size-12',
            ),
            ...a,
            children: t,
          });
        });
    },
    76158: function (e, t, r) {
      'use strict';
      r.d(t, {
        hU: function () {
          return s.Z;
        },
        r: function () {
          return a.Z;
        },
        zx: function () {
          return n.Z;
        },
      });
      var n = r(4696);
      r(16223);
      var a = r(55261),
        s = r(86550);
    },
    54021: function (e, t, r) {
      'use strict';
      var n = r(57437),
        a = r(2265),
        s = r(91623),
        o = r(77190),
        i = r(97500),
        l = r.n(i);
      r(19509),
        (t.Z = (e) => {
          let { valuePlaceholder: t, autoFocus: r, ...i } = e,
            c = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              if (r && c.current) {
                let e = setTimeout(() => {
                  null == c || c.current.focus();
                }, 1);
                return () => clearTimeout(e);
              }
            }, [r]),
            (0, n.jsx)(s.ZP, {
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
              children: (0, n.jsx)(o.default, { className: ''.concat(l().className), placeholder: t, ...i, ref: c }),
            })
          );
        });
    },
    62504: function (e, t, r) {
      'use strict';
      var n = r(57437),
        a = r(2265),
        s = r(91623),
        o = r(77190),
        i = r(97500),
        l = r.n(i);
      r(19509),
        r(95085),
        (t.Z = (e) => {
          let { valuePlaceholder: t, passwordVisible: r, setPasswordVisible: i, ...c } = e,
            [d, u] = (0, a.useState)(!1);
          return (0, n.jsx)(s.ZP, {
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
                fontFamily: ''.concat(l(), ', sans-serif'),
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
            children: (0, n.jsx)(o.default.Password, {
              className: 'input-password '.concat(d ? '--focus' : ''),
              autoComplete: 'off',
              onFocus: () => u(!0),
              onBlur: () => u(!1),
              visibilityToggle: { visible: r, onVisibleChange: i },
              placeholder: t,
              ...c,
            }),
          });
        });
    },
    87601: function (e, t, r) {
      'use strict';
      r.d(t, {
        YE: function () {
          return s;
        },
        q3: function () {
          return l;
        },
      });
      var n = r(85687),
        a = r(40329);
      let {
        useLoginFirstStepMutation: s,
        useLoginSecondStepMutation: o,
        useChangeDefaultPasswordMutation: i,
        useSendMailResetPasswordMutation: l,
        useResetForgotPasswordMutation: c,
      } = (0, n.LC)({
        reducerPath: 'loginApi',
        refetchOnFocus: !0,
        baseQuery: (0, a.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
        tagTypes: ['Login'],
        endpoints: (e) => ({
          loginFirstStep: e.mutation({
            query: (e) => {
              let { data: t } = e;
              return {
                url: 'auth/login-1-step',
                method: 'POST',
                body: { data: t },
                headers: { 'Content-Type': 'application/json' },
              };
            },
            invalidatesTags: ['Login'],
          }),
          LoginSecondStep: e.mutation({
            query: (e) => {
              let { token: t, verifyToken: r } = e;
              return {
                url: 'auth/otp/verify',
                method: 'POST',
                body: { token: t },
                headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '.concat(r) },
              };
            },
            invalidatesTags: ['Login'],
          }),
          ChangeDefaultPassword: e.mutation({
            query: (e) => {
              let { newPassword: t, verifyToken: r } = e;
              return {
                url: 'auth/change-default-password',
                method: 'POST',
                body: { newPassword: t },
                headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '.concat(r) },
              };
            },
            invalidatesTags: ['Login'],
          }),
          SendMailResetPassword: e.mutation({
            query: (e) => {
              let { data: t } = e;
              return {
                url: 'auth/forgot-password',
                method: 'POST',
                body: { data: t },
                headers: { 'Content-Type': 'application/json' },
              };
            },
          }),
          ResetForgotPassword: e.mutation({
            query: (e) => {
              let { data: t, token: r } = e;
              return {
                url: 'auth/reset-password',
                method: 'POST',
                body: { data: t },
                headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '.concat(r) },
              };
            },
          }),
        }),
      });
    },
    19509: function () {},
    95085: function () {},
    51434: function (e) {
      e.exports = {
        btn: 'styles_btn__YIQnM',
        secondaryBtn: 'styles_secondaryBtn__mTKQc',
        disabledBtn: 'styles_disabledBtn__N8J7U',
        dangerBtn: 'styles_dangerBtn__pToIQ',
        primaryBtn: 'styles_primaryBtn__a4Ewj',
        categoryButton: 'styles_categoryButton__tu6Gk',
        inActive: 'styles_inActive__TTD_c',
        active: 'styles_active__cKrKP',
        countBtn: 'styles_countBtn__5UOlW',
      };
    },
  },
  function (e) {
    e.O(0, [4872, 2598, 8809, 5687, 2379, 9810, 8863, 7190, 6691, 6758, 7049, 2971, 4938, 1744], function () {
      return e((e.s = 74581));
    }),
      (_N_E = e.O());
  },
]);
