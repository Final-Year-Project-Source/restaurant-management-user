(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6460],
  {
    89685: function (e, r, t) {
      Promise.resolve().then(t.bind(t, 51788));
    },
    51788: function (e, r, t) {
      'use strict';
      t.r(r),
        t.d(r, {
          default: function () {
            return y;
          },
        });
      var n = t(57437),
        s = t(45652),
        a = t.n(s),
        o = t(82749),
        i = t(24033);
      t(2265);
      var c = t(60171);
      t(87911);
      var l = t(35691),
        d = t(56230),
        u = t(62504),
        p = t(76158),
        m = t(54021),
        h = t(1434),
        f = t(48144);
      let w = l.Ry().shape({
        newPassword: l
          .Z_()
          .min(6, 'Password must be at least 6 characters')
          .notOneOf([l.iH('currentPassword')], 'New password must be different from current password')
          .required('Missing new password'),
        confirmNewPassword: l
          .Z_()
          .oneOf([l.iH('newPassword')], 'Confirm password must match new password')
          .nullable()
          .notOneOf([null], 'Please confirm your password')
          .required('Please confirm your password'),
        currentPassword: l.Z_().min(6, 'Password must be at least 6 characters').required('Missing current password'),
      });
      function y() {
        let e = (0, i.useRouter)(),
          { data: r } = (0, o.useSession)(),
          t = null == r ? void 0 : r.user,
          { isMobile: s } = (0, h.d)(),
          [l, { isLoading: y }] = (0, f.$h)(),
          x = (0, d.TA)({
            initialValues: { newPassword: '', confirmNewPassword: '', currentPassword: '' },
            validationSchema: w,
            onSubmit: async (e) => {
              var t;
              l({
                email: (null == r ? void 0 : null === (t = r.user) || void 0 === t ? void 0 : t.email) || '',
                passwordCurrent: e.currentPassword,
                passwordNew: e.newPassword,
              })
                .unwrap()
                .then(() => {
                  x.resetForm(), c.toast.success('Changed password successfully');
                })
                .catch((e) => {
                  var r;
                  return c.toast.error(null == e ? void 0 : null === (r = e.data) || void 0 === r ? void 0 : r.message);
                });
            },
          }),
          { errors: v, touched: b, values: g, handleChange: P, handleSubmit: j, resetForm: C } = x;
        return (0, n.jsx)('div', {
          className: 'flex items-center justify-center m-auto h-full',
          children: r
            ? (0, n.jsxs)('div', {
                className:
                  'flex flex-col md:space-y-[30px] md:max-w-[594px] md:h-fit h-full bg-white rounded-2xl md:p-[25px] p-5',
                children: [
                  (0, n.jsxs)('div', {
                    className: 'flex items-center justify-between',
                    children: [
                      (0, n.jsx)(p.zx, {
                        className: '!w-[80px]',
                        type: 'button',
                        onClick: () => e.back(),
                        children: 'Back',
                      }),
                      !s &&
                        (0, n.jsx)(p.zx, {
                          className: '!w-[159px]',
                          type: 'button',
                          variant: 'secondary',
                          onClick: async () => {
                            await (0, o.signOut)(), e.push('/login');
                          },
                          children: 'Sign out',
                        }),
                    ],
                  }),
                  (0, n.jsxs)('form', {
                    className: 'flex flex-col h-full',
                    onSubmit: j,
                    children: [
                      (0, n.jsx)('div', {
                        className: 'flex gap-2 mb-[10px] items-center justify-center',
                        children: (0, n.jsxs)('div', {
                          className:
                            'grid grid-flow-row gap-y-[10px] gap-x-[20px] justify-center items-center w-full  '.concat(
                              s ? 'grid-cols-1' : 'grid-cols-4',
                            ),
                          children: [
                            (0, n.jsx)('label', { className: 'font-medium', children: 'Name' }),
                            (0, n.jsx)('div', {
                              className: 'col-span-3 account-disable-input',
                              children: (0, n.jsx)(m.Z, {
                                id: 'name',
                                placeholder: 'Name',
                                disabled: !0,
                                value: a()((null == t ? void 0 : t.name) || ''),
                              }),
                            }),
                            (0, n.jsx)('label', { className: 'font-medium', children: 'Email' }),
                            (0, n.jsx)('div', {
                              className: 'col-span-3 account-disable-input',
                              children: (0, n.jsx)(m.Z, {
                                type: 'text',
                                id: 'email',
                                disabled: !0,
                                placeholder: 'Email',
                                value: (null == t ? void 0 : t.email) || '',
                              }),
                            }),
                            (0, n.jsx)('label', {
                              className: 'font-medium '.concat(!s && ' place-self-start mt-[10px] '),
                              children: 'Change password',
                            }),
                            (0, n.jsxs)('div', {
                              className: 'col-span-3 space-y-[10px]',
                              children: [
                                (0, n.jsxs)('div', {
                                  children: [
                                    (0, n.jsx)(u.Z, {
                                      type: 'text',
                                      id: 'newPassword',
                                      disabled: y,
                                      placeholder: 'New password',
                                      value: g.newPassword,
                                      onChange: P,
                                    }),
                                    v.newPassword &&
                                      b.newPassword &&
                                      (0, n.jsx)('span', {
                                        className: 'text-[12px] text-red-500',
                                        children: v.newPassword,
                                      }),
                                  ],
                                }),
                                (0, n.jsxs)('div', {
                                  children: [
                                    (0, n.jsx)(u.Z, {
                                      type: 'text',
                                      id: 'confirmNewPassword',
                                      disabled: y,
                                      value: g.confirmNewPassword,
                                      placeholder: 'Confirm new password',
                                      onChange: P,
                                    }),
                                    v.confirmNewPassword &&
                                      b.confirmNewPassword &&
                                      (0, n.jsx)('span', {
                                        className: 'text-[12px] text-red-500',
                                        children: v.confirmNewPassword,
                                      }),
                                  ],
                                }),
                                (0, n.jsxs)('div', {
                                  children: [
                                    (0, n.jsx)(u.Z, {
                                      type: 'text',
                                      id: 'currentPassword',
                                      disabled: y,
                                      placeholder: 'Current password',
                                      value: g.currentPassword,
                                      onChange: P,
                                    }),
                                    v.currentPassword &&
                                      b.currentPassword &&
                                      (0, n.jsx)('span', {
                                        className: 'text-[12px] text-red-500',
                                        children: v.currentPassword,
                                      }),
                                  ],
                                }),
                                (0, n.jsx)(p.zx, {
                                  className: 'md:w-[235px] w-full',
                                  type: 'submit',
                                  variant: 'primary',
                                  disabled: y,
                                  children: 'Change password',
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      s &&
                        (0, n.jsx)(p.zx, {
                          className: 'mt-auto min-h-[61px]',
                          variant: 'secondary',
                          type: 'button',
                          disabled: y,
                          onClick: async () => {
                            await (0, o.signOut)(), e.push('/login');
                          },
                          children: 'Sign out',
                        }),
                    ],
                  }),
                ],
              })
            : (0, n.jsx)('div', {
                className: 'flex justify-center items-center',
                children: (0, n.jsx)(p.zx, { type: 'button', onClick: () => e.push('/login'), children: 'Login' }),
              }),
        });
      }
    },
    4696: function (e, r, t) {
      'use strict';
      var n = t(57437);
      t(2265);
      var s = t(51434),
        a = t.n(s);
      r.Z = (e) => {
        let { variant: r = 'primary', disabled: t, children: s, className: o, ...i } = e;
        return (0, n.jsx)('button', {
          ...i,
          className: ''
            .concat(a()[''.concat(r, 'Btn')], ' ')
            .concat(t ? a().disabledBtn : '', ' ')
            .concat(a().btn, ' ')
            .concat(o || '', ' flex justify-center items-center whitespace-nowrap w-full rounded-[30px] max-h-[61px]'),
          disabled: t,
          children: s,
        });
      };
    },
    16223: function (e, r, t) {
      'use strict';
      var n = t(57437),
        s = t(91623),
        a = t(64495);
      t(2265);
      var o = t(51434),
        i = t.n(o);
      r.Z = (e) => {
        let { children: r, className: t, active: o, ...c } = e;
        return (0, n.jsx)(s.ZP, {
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
          children: (0, n.jsx)(a.ZP, {
            type: 'text',
            style: { fontFamily: 'var(--font-rubik)' },
            ...c,
            className: ''
              .concat(t || '', ' ')
              .concat(o ? i().active : i().inActive, ' ')
              .concat(i().categoryButton),
            children: r,
          }),
        });
      };
    },
    55261: function (e, r, t) {
      'use strict';
      var n = t(57437),
        s = t(74898),
        a = t(14490),
        o = t(91623),
        i = t(64495),
        c = t(51434),
        l = t.n(c);
      r.Z = (e) => {
        let { plus: r = !0, variant: t = 'primary', className: c, ...d } = e,
          u = { color: 'primary' === t ? '#FA4A0C' : '#fff', fontSize: '10px', margin: '0px' };
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
              .concat(c || '', ' ')
              .concat('border border-solid border-red-100', ' ')
              .concat(l().countBtn, ' '),
            icon: r ? (0, n.jsx)(s.Z, { style: u }) : (0, n.jsx)(a.Z, { style: u }),
            size: 'small',
            style: { backgroundColor: 'primary' === t ? 'transparent' : '#FA4A0C' },
          }),
        });
      };
    },
    86550: function (e, r, t) {
      'use strict';
      var n = t(57437);
      t(2265),
        (r.Z = (e) => {
          let { icon: r, className: t, ...s } = e;
          return (0, n.jsx)('button', {
            className: ''.concat(
              t || '',
              ' !bg-white-100 flex justify-center items-center border border-solid border-red-100 bg-white rounded-2xl p-1.5 shadow-none size-12',
            ),
            ...s,
            children: r,
          });
        });
    },
    76158: function (e, r, t) {
      'use strict';
      t.d(r, {
        hU: function () {
          return a.Z;
        },
        r: function () {
          return s.Z;
        },
        zx: function () {
          return n.Z;
        },
      });
      var n = t(4696);
      t(16223);
      var s = t(55261),
        a = t(86550);
    },
    1434: function (e, r, t) {
      'use strict';
      t.d(r, {
        d: function () {
          return s;
        },
      });
      var n = t(2265);
      function s() {
        let e = () => {
            let { innerWidth: e, innerHeight: r } = window;
            return { width: e, height: r, isMobile: e < 768 };
          },
          [r, t] = (0, n.useState)(e()),
          s = (0, n.useCallback)(() => {
            t(e());
          }, []);
        return (
          (0, n.useEffect)(
            () => (s(), window.addEventListener('resize', s), () => window.removeEventListener('resize', s)),
            [!0, s],
          ),
          r
        );
      }
    },
    54021: function (e, r, t) {
      'use strict';
      var n = t(57437),
        s = t(2265),
        a = t(91623),
        o = t(77190),
        i = t(97500),
        c = t.n(i);
      t(19509),
        (r.Z = (e) => {
          let { valuePlaceholder: r, autoFocus: t, ...i } = e,
            l = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(() => {
              if (t && l.current) {
                let e = setTimeout(() => {
                  null == l || l.current.focus();
                }, 1);
                return () => clearTimeout(e);
              }
            }, [t]),
            (0, n.jsx)(a.ZP, {
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
              children: (0, n.jsx)(o.default, { className: ''.concat(c().className), placeholder: r, ...i, ref: l }),
            })
          );
        });
    },
    62504: function (e, r, t) {
      'use strict';
      var n = t(57437),
        s = t(2265),
        a = t(91623),
        o = t(77190),
        i = t(97500),
        c = t.n(i);
      t(19509),
        t(95085),
        (r.Z = (e) => {
          let { valuePlaceholder: r, passwordVisible: t, setPasswordVisible: i, ...l } = e,
            [d, u] = (0, s.useState)(!1);
          return (0, n.jsx)(a.ZP, {
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
                fontFamily: ''.concat(c(), ', sans-serif'),
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
              visibilityToggle: { visible: t, onVisibleChange: i },
              placeholder: r,
              ...l,
            }),
          });
        });
    },
    48144: function (e, r, t) {
      'use strict';
      t.d(r, {
        $h: function () {
          return m;
        },
        aG: function () {
          return o;
        },
      });
      var n = t(85687),
        s = t(40329),
        a = t(62601);
      let o = (0, n.LC)({
          reducerPath: 'employeeApi',
          refetchOnFocus: !0,
          baseQuery: (0, s.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
          tagTypes: ['User'],
          endpoints: (e) => ({
            getUsers: e.query({
              query: (e) => ({
                url: 'user?role_filter='.concat(e.role_filter, '&page=').concat(e.page, '&limit=').concat(e.limit),
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
              }),
              providesTags: ['User'],
            }),
            getSingleUser: e.query({
              query: (e) => {
                let { id: r } = e;
                return { url: 'user/'.concat(r), method: 'GET', headers: { 'Content-Type': 'application/json' } };
              },
              providesTags: ['User'],
            }),
            createNewUser: e.mutation({
              query: (e) => {
                let { data: r } = e;
                return { url: 'user', method: 'POST', body: r, headers: { 'Content-Type': 'application/json' } };
              },
              invalidatesTags: ['User'],
            }),
            deleteUser: e.mutation({
              query: (e) => {
                let { id: r } = e;
                return { url: 'user/'.concat(r), method: 'DELETE', headers: { 'Content-Type': 'application/json' } };
              },
              invalidatesTags: ['User'],
            }),
            changePassword: e.mutation({
              query: (e) => {
                let { email: r, passwordCurrent: t, passwordNew: n } = e;
                return {
                  url: 'auth/change-password',
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: { email: r, passwordCurrent: t, passwordNew: n },
                };
              },
            }),
            reset2FA: e.mutation({
              query: (e) => {
                let { id: r } = e;
                return {
                  url: 'user/'.concat(r),
                  method: 'PATCH',
                  headers: { 'Content-Type': 'application/json' },
                  body: { data: { otp_enabled: !1 } },
                };
              },
              invalidatesTags: ['User'],
            }),
            resetPassword: e.mutation({
              query: (e) => {
                let { id: r } = e;
                return {
                  url: 'user/'.concat(r),
                  method: 'PATCH',
                  headers: { 'Content-Type': 'application/json' },
                  body: { data: { password: ''.concat(a.env.STAFF_DEFAULT_PASSWORD), is_change_default_password: !1 } },
                };
              },
              invalidatesTags: ['User'],
            }),
            updateEmployee: e.mutation({
              query: (e) => {
                let { id: r, data: t } = e;
                return {
                  url: 'user/'.concat(r),
                  method: 'PATCH',
                  headers: { 'Content-Type': 'application/json' },
                  body: t,
                };
              },
              invalidatesTags: ['User'],
            }),
            verifyRefreshToken: e.mutation({
              query: () => ({
                url: 'auth/verify-token',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
              }),
            }),
          }),
        }),
        {
          useGetSingleUserQuery: i,
          useGetUsersQuery: c,
          useCreateNewUserMutation: l,
          useDeleteUserMutation: d,
          useReset2FAMutation: u,
          useResetPasswordMutation: p,
          useChangePasswordMutation: m,
          useUpdateEmployeeMutation: h,
          useVerifyRefreshTokenMutation: f,
        } = o;
    },
    87911: function () {},
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
    e.O(0, [4872, 2598, 8809, 5687, 2379, 8863, 7190, 7745, 6381, 2971, 4938, 1744], function () {
      return e((e.s = 89685));
    }),
      (_N_E = e.O());
  },
]);
