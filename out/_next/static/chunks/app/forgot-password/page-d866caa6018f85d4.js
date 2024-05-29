(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9781],
  {
    27941: function (e, t, n) {
      var r = n(31706);
      e.exports = function (e, t) {
        return !!(null == e ? 0 : e.length) && r(e, t, 0) > -1;
      };
    },
    61128: function (e) {
      e.exports = function (e, t, n) {
        for (var r = -1, s = null == e ? 0 : e.length; ++r < s; ) if (n(t, e[r])) return !0;
        return !1;
      };
    },
    71787: function (e) {
      e.exports = function (e, t, n, r) {
        for (var s = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < s; ) if (t(e[o], o, e)) return o;
        return -1;
      };
    },
    31706: function (e, t, n) {
      var r = n(71787),
        s = n(49093),
        o = n(58665);
      e.exports = function (e, t, n) {
        return t == t ? o(e, t, n) : r(e, s, n);
      };
    },
    49093: function (e) {
      e.exports = function (e) {
        return e != e;
      };
    },
    49824: function (e, t, n) {
      var r = n(46427),
        s = n(27941),
        o = n(61128),
        a = n(65225),
        i = n(21590),
        l = n(97782);
      e.exports = function (e, t, n) {
        var c = -1,
          u = s,
          d = e.length,
          f = !0,
          p = [],
          x = p;
        if (n) (f = !1), (u = o);
        else if (d >= 200) {
          var h = t ? null : i(e);
          if (h) return l(h);
          (f = !1), (u = a), (x = new r());
        } else x = t ? [] : p;
        e: for (; ++c < d; ) {
          var m = e[c],
            v = t ? t(m) : m;
          if (((m = n || 0 !== m ? m : 0), f && v == v)) {
            for (var g = x.length; g--; ) if (x[g] === v) continue e;
            t && x.push(v), p.push(m);
          } else u(x, v, n) || (x !== p && x.push(v), p.push(m));
        }
        return p;
      };
    },
    21590: function (e, t, n) {
      var r = n(88921),
        s = n(58660),
        o = n(97782),
        a =
          r && 1 / o(new r([, -0]))[1] == 1 / 0
            ? function (e) {
                return new r(e);
              }
            : s;
      e.exports = a;
    },
    58665: function (e) {
      e.exports = function (e, t, n) {
        for (var r = n - 1, s = e.length; ++r < s; ) if (e[r] === t) return r;
        return -1;
      };
    },
    58660: function (e) {
      e.exports = function () {};
    },
    48911: function (e, t, n) {
      var r = n(49824);
      e.exports = function (e) {
        return e && e.length ? r(e) : [];
      };
    },
    84410: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 24347)), Promise.resolve().then(n.bind(n, 48753));
    },
    24347: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(57437),
        s = n(91623),
        o = n(19749),
        a = n(16691),
        i = n.n(a),
        l = n(24033);
      let c = [
        { key: 'login', label: 'Login' },
        { key: 'register', label: 'Register' },
      ];
      t.default = (e) => {
        let { children: t, isHiddenTabs: n = !1 } = e,
          a = (0, l.usePathname)(),
          u = (0, l.useRouter)();
        return (0, r.jsx)('div', {
          className: 'flex h-full items-center justify-center',
          children: (0, r.jsxs)('div', {
            className:
              'rounded-2xl bg-white sm:shadow-2xl flex flex-col justify-center items-center min-w-[500px] max-sm-w-full ',
            children: [
              (0, r.jsx)(i(), {
                priority: !0,
                src: '/assets/icons/mini-logo.svg',
                alt: 'logo',
                width: 150,
                height: 150,
              }),
              !n &&
                (0, r.jsx)(s.ZP, {
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
                  children: (0, r.jsx)(o.Z, {
                    className: 'w-full',
                    defaultActiveKey: a.slice(1) || 'login',
                    centered: !0,
                    items: c,
                    onChange: (e) => {
                      u.push('/'.concat(e));
                    },
                  }),
                }),
              t,
            ],
          }),
        });
      };
    },
    48753: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var r = n(57437),
        s = n(2265);
      n(51359);
      var o = n(4696),
        a = n(6779),
        i = n(87601),
        l = n(24033),
        c = n(54021),
        u = n(29340);
      function d() {
        let [e, t] = (0, s.useState)(!1),
          [n, d] = (0, s.useState)(''),
          [f, p] = (0, s.useState)(''),
          [x, { isLoading: h }] = (0, i.q3)(),
          [m, v] = (0, s.useState)(!1),
          [g, y] = (0, s.useState)(30),
          b = (0, l.useRouter)(),
          j = async (e) => {
            let { value: t } = e.target;
            d(t);
          },
          w = async (e) => {
            'Enter' === e.key && _();
          },
          _ = async () =>
            (t(!0), n)
              ? (0, a.vV)(n)
                ? (p(''),
                  void x({ data: { email: n } })
                    .unwrap()
                    .then((e) => {
                      t(!1), y(30), v(!0);
                    })
                    .catch((e) => {
                      p(e.data.message), t(!1);
                    }))
                : (t(!1), p('Please enter a valid email '))
              : (t(!1), p('Please enter your email'));
        (0, s.useEffect)(() => {
          if (g > 0 && m) {
            let e = setTimeout(() => {
              y((e) => e - 1);
            }, 1e3);
            return () => clearTimeout(e);
          }
        }, [g, m]);
        let N = (0, r.jsxs)('div', {
            className:
              'flex flex-col bg-white justify-center items-center w-full sm:max-w-xl space-y-3 p-10 rounded-xl shadow-2xl max-[768px]:m-2',
            children: [
              (0, r.jsx)('div', {
                className: 'text-[28px] font-bold text-black-500 my-3',
                children: 'Forgot Password',
              }),
              (0, r.jsx)('div', {
                className: 'text-[18px] text-black-500 my-5',
                children: 'To reset your password, please provide the email address associated with your account.',
              }),
              (0, r.jsxs)('div', {
                className: 'w-full',
                children: [
                  (0, r.jsx)('div', { className: 'text-[18px] font-bold text-black-500 my-3', children: 'Email' }),
                  (0, r.jsx)(c.Z, { placeholder: 'Email', disabled: e || h, onChange: j, onKeyDown: w }),
                ],
              }),
              (0, r.jsxs)('div', {
                className: 'w-full',
                children: [
                  f
                    ? (0, r.jsx)('div', { className: 'text-red-500 text-[18px]', children: f })
                    : (0, r.jsx)('div', { className: 'h-[10px]' }),
                  (0, r.jsx)(o.Z, {
                    onClick: _,
                    disabled: e || h,
                    variant: 'secondary',
                    className: 'mt-1',
                    children: 'Submit',
                  }),
                ],
              }),
              (0, r.jsx)('div', {
                className: 'text-[18px] text-right text-black-500 cursor-pointer w-full italic hover:underline '.concat(
                  h && 'pointer-events-none',
                ),
                onClick: () => b.push('/login'),
                children: 'Return to login page',
              }),
              e && (0, r.jsx)(u.Z, {}),
            ],
          }),
          T = (0, r.jsxs)('div', {
            className:
              'flex flex-col bg-white justify-center items-center w-full sm:max-w-xl space-y-3 p-10 rounded-xl shadow-2xl max-[768px]:m-2',
            children: [
              (0, r.jsx)('div', { className: 'text-[28px] font-bold text-black-500 my-3', children: 'Reset Password' }),
              (0, r.jsx)('div', {
                className: 'text-[18px] text-black-500 my-5',
                children: 'A link to reset your password has been sent to your email address. Please check your email.',
              }),
              (0, r.jsxs)('div', {
                className: 'text-[18px] text-black-500 w-full',
                children: [
                  'Didnt receive the email?',
                  g > 0
                    ? (0, r.jsxs)('span', { className: 'text-gray-500', children: [' Resend in ', g, ' seconds'] })
                    : (0, r.jsxs)('span', {
                        className: 'cursor-pointer hover:underline italic '.concat(h && 'pointer-events-none'),
                        onClick: _,
                        children: [' ', 'Resend', ' '],
                      }),
                ],
              }),
              (0, r.jsx)('div', {
                className: 'text-[18px] text-black-500 hover:underline cursor-pointer w-full italic '.concat(
                  h && 'pointer-events-none',
                ),
                onClick: () => v(!1),
                children: 'Change to another email address',
              }),
              (0, r.jsx)('div', {
                className: 'text-[18px] text-black-500 hover:underline cursor-pointer w-full italic '.concat(
                  h && 'pointer-events-none',
                ),
                onClick: () => b.push('/login'),
                children: 'Return to login page',
              }),
              e && (0, r.jsx)(u.Z, {}),
            ],
          });
        return (0, r.jsx)(r.Fragment, { children: m ? T : N });
      }
    },
    29340: function (e, t, n) {
      'use strict';
      var r = n(57437),
        s = n(91623),
        o = n(59810);
      t.Z = () =>
        (0, r.jsx)(s.ZP, {
          theme: { token: { colorPrimary: '#131C16' } },
          children: (0, r.jsx)(o.Z, {
            className: '!fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 black-500',
            size: 'large',
          }),
        });
    },
    4696: function (e, t, n) {
      'use strict';
      var r = n(57437);
      n(2265);
      var s = n(51434),
        o = n.n(s);
      t.Z = (e) => {
        let { variant: t = 'primary', disabled: n, children: s, className: a, ...i } = e;
        return (0, r.jsx)('button', {
          ...i,
          className: ''
            .concat(o()[''.concat(t, 'Btn')], ' ')
            .concat(n ? o().disabledBtn : '', ' ')
            .concat(o().btn, ' ')
            .concat(a || '', ' flex justify-center items-center whitespace-nowrap w-full rounded-[30px] max-h-[61px]'),
          disabled: n,
          children: s,
        });
      };
    },
    54021: function (e, t, n) {
      'use strict';
      var r = n(57437),
        s = n(2265),
        o = n(91623),
        a = n(77190),
        i = n(97500),
        l = n.n(i);
      n(19509),
        (t.Z = (e) => {
          let { valuePlaceholder: t, autoFocus: n, ...i } = e,
            c = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(() => {
              if (n && c.current) {
                let e = setTimeout(() => {
                  null == c || c.current.focus();
                }, 1);
                return () => clearTimeout(e);
              }
            }, [n]),
            (0, r.jsx)(o.ZP, {
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
              children: (0, r.jsx)(a.default, { className: ''.concat(l().className), placeholder: t, ...i, ref: c }),
            })
          );
        });
    },
    16835: function (e, t, n) {
      'use strict';
      var r, s, o, a, i, l;
      n.d(t, {
        Nv: function () {
          return s;
        },
        uH: function () {
          return o;
        },
      }),
        ((a = r || (r = {})).ADMIN = 'ADMIN'),
        (a.STAFF = 'STAFF'),
        ((i = s || (s = {})).ADD = '+'),
        (i.SUB = '-'),
        (i.EQUAL = '='),
        ((l = o || (o = {})).FIXED_PERCENT = 'FIXED_PERCENT'),
        (l.FIXED_AMOUNT = 'FIXED_AMOUNT');
    },
    87601: function (e, t, n) {
      'use strict';
      n.d(t, {
        YE: function () {
          return o;
        },
        q3: function () {
          return l;
        },
      });
      var r = n(85687),
        s = n(40329);
      let {
        useLoginFirstStepMutation: o,
        useLoginSecondStepMutation: a,
        useChangeDefaultPasswordMutation: i,
        useSendMailResetPasswordMutation: l,
        useResetForgotPasswordMutation: c,
      } = (0, r.LC)({
        reducerPath: 'loginApi',
        refetchOnFocus: !0,
        baseQuery: (0, s.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
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
              let { token: t, verifyToken: n } = e;
              return {
                url: 'auth/otp/verify',
                method: 'POST',
                body: { token: t },
                headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '.concat(n) },
              };
            },
            invalidatesTags: ['Login'],
          }),
          ChangeDefaultPassword: e.mutation({
            query: (e) => {
              let { newPassword: t, verifyToken: n } = e;
              return {
                url: 'auth/change-default-password',
                method: 'POST',
                body: { newPassword: t },
                headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '.concat(n) },
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
              let { data: t, token: n } = e;
              return {
                url: 'auth/reset-password',
                method: 'POST',
                body: { data: t },
                headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '.concat(n) },
              };
            },
          }),
        }),
      });
    },
    6779: function (e, t, n) {
      'use strict';
      n.d(t, {
        Bg: function () {
          return o;
        },
        Pb: function () {
          return u;
        },
        T4: function () {
          return f;
        },
        Y0: function () {
          return l;
        },
        oH: function () {
          return i;
        },
        r$: function () {
          return c;
        },
        vV: function () {
          return d;
        },
        xz: function () {
          return a;
        },
      }),
        n(16835);
      var r = n(48911),
        s = n.n(r);
      let o = (e) =>
          s()(
            (null == e ? void 0 : e.filter((e) => e.endsWith('option')).map((e) => (e = e.replace(' option', '')))) ||
              [],
          ),
        a = (e) =>
          e
            ? ''
                .concat(e.getHours(), ':')
                .concat(10 > e.getMinutes() ? '0' : '')
                .concat(e.getMinutes())
            : '',
        i = (e) => '' === e.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
        l = (e) => '' === e.trim() || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(e),
        c = (e) => /^(\d[- ]?){12}\d$/.test(e),
        u = (e) => '' !== e.trim(),
        d = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
        f = (e) => (e ? Math.round(Number(e)).toLocaleString('en-US').replace(/,/g, '.') : '0');
    },
    51359: function () {},
    19509: function () {},
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
    e.O(
      0,
      [4872, 2598, 8809, 5687, 2379, 9810, 8863, 7190, 6691, 6394, 6758, 7049, 9242, 2971, 4938, 1744],
      function () {
        return e((e.s = 84410));
      },
    ),
      (_N_E = e.O());
  },
]);
