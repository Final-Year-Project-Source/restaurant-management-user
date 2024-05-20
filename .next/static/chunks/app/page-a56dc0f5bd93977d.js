(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1931],
  {
    46166: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 48836));
    },
    48836: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          default: function () {
            return x;
          },
        });
      var s = r(57437),
        n = r(76158),
        a = r(1434),
        i = r(87683),
        o = r(86759),
        l = r(16691),
        c = r.n(l),
        d = r(24033),
        u = r(2265),
        m = r(93046);
      function x() {
        let e = (0, d.useRouter)(),
          { isMobile: t } = (0, a.d)(),
          r = (0, d.useSearchParams)().get('table_id'),
          l = (0, m.I0)(),
          [x, f] = (0, u.useState)(!1);
        return (0, s.jsxs)('div', {
          className: 'w-full h-full max-md:bg-red-100 max-md:pt-[56px] relative',
          children: [
            (0, s.jsxs)('div', {
              className: 'max-md:block hidden',
              children: [
                (0, s.jsxs)('div', {
                  className: 'px-[50px]',
                  children: [
                    (0, s.jsx)('div', {
                      className: 'w-[73px] h-[73px] bg-white rounded-full flex items-center justify-center',
                      children: (0, s.jsx)(c(), {
                        priority: !0,
                        src: '/assets/icons/mini-logo.svg',
                        alt: 'logo',
                        width: 50,
                        height: 50,
                      }),
                    }),
                    (0, s.jsxs)('div', {
                      className: 'flex flex-col text-white space-y-5 mt-[50px]',
                      children: [
                        (0, s.jsx)('span', { className: 'font-medium text-[60px] leading-10', children: 'Food for' }),
                        (0, s.jsx)('span', { className: 'font-medium text-[60px] leading-10', children: 'Everyone' }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)('div', {
                  className: 'flex pt-[45px]',
                  children: [
                    (0, s.jsx)(c(), {
                      className: 'absolute left-0 bottom-[5%]',
                      priority: !0,
                      src: '/assets/icons/person1.svg',
                      alt: 'person1',
                      width: 250,
                      height: 250,
                    }),
                    (0, s.jsx)(c(), {
                      className: 'pt-[50px] absolute right-0 bottom-[5%]',
                      priority: !0,
                      src: '/assets/icons/person2.svg',
                      alt: 'person2',
                      width: 150,
                      height: 200,
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)('div', {
              className: 'md:block hidden h-full',
              children: [
                (0, s.jsxs)('div', {
                  className: 'w-full h-2/3 relative',
                  children: [
                    (0, s.jsxs)('div', {
                      className:
                        'flex flex-col z-20 absolute top-[10%] right-1/2 transform translate-x-1/2 items-center justify-center',
                      children: [
                        (0, s.jsx)('span', {
                          className: 'text-white font-bold text-[40px] whitespace-nowrap',
                          children: 'Why stay hungry when',
                        }),
                        (0, s.jsx)('span', {
                          className: 'text-white font-bold text-[40px] whitespace-nowrap',
                          children: 'you can order form Bella Onojie',
                        }),
                      ],
                    }),
                    (0, s.jsx)(c(), {
                      priority: !0,
                      src: '/assets/images/landing-page.png',
                      alt: 'landing-page',
                      fill: !0,
                      className: 'z-10',
                    }),
                  ],
                }),
                (0, s.jsx)(c(), {
                  priority: !0,
                  className: 'absolute bottom-[85%] left-0 z-10',
                  src: '/assets/icons/logo.svg',
                  alt: 'logo',
                  width: 200,
                  height: 200,
                }),
                (0, s.jsx)('div', {
                  className: 'w-full h-1/3 bg-white relative',
                  children: (0, s.jsx)(c(), {
                    priority: !0,
                    className: 'absolute bottom-[0%] right-1/2 transform translate-x-1/2 z-10',
                    src: '/assets/images/mobile.png',
                    alt: 'logo',
                    width: 375,
                    height: 300,
                  }),
                }),
              ],
            }),
            (0, s.jsxs)('div', {
              className:
                'absolute flex md:flex-row md:space-x-5 max-md:flex-col max-md:space-y-5\n        } md:bottom-[65%] bottom-[5%] max-md:w-full px-[50px] z-30 right-1/2 transform translate-x-1/2',
              children: [
                (0, s.jsx)(n.zx, { className: 'md:w-[50px]', onClick: () => e.push('/login'), children: 'Login' }),
                (0, s.jsx)(n.zx, {
                  className: 'md:w-[50px]',
                  onClick: () => {
                    r ? (l((0, o.x)(r)), e.push('/menu')) : (f(!0), l((0, o.qB)()));
                  },
                  variant: t ? 'primary' : 'secondary',
                  children: 'Start ordering',
                }),
              ],
            }),
            (0, s.jsx)(i.Z, {
              open: x,
              title: 'Notification',
              okText: 'Confirm',
              onOk: () => {
                f(!1);
              },
              onCancel: () => {
                f(!1);
              },
              children: 'You need to scan the QR code on the dining table before placing an order.',
            }),
          ],
        });
      }
    },
    29340: function (e, t, r) {
      'use strict';
      var s = r(57437),
        n = r(91623),
        a = r(59810);
      t.Z = () =>
        (0, s.jsx)(n.ZP, {
          theme: { token: { colorPrimary: '#131C16' } },
          children: (0, s.jsx)(a.Z, {
            className: '!fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 black-500',
            size: 'large',
          }),
        });
    },
    76158: function (e, t, r) {
      'use strict';
      r.d(t, {
        hU: function () {
          return a.Z;
        },
        r: function () {
          return n.Z;
        },
        zx: function () {
          return s.Z;
        },
      });
      var s = r(4696);
      r(16223);
      var n = r(55261),
        a = r(86550);
    },
    1434: function (e, t, r) {
      'use strict';
      r.d(t, {
        d: function () {
          return n;
        },
      });
      var s = r(2265);
      function n() {
        let e = () => {
            let { innerWidth: e, innerHeight: t } = window;
            return { width: e, height: t, isMobile: e < 768 };
          },
          [t, r] = (0, s.useState)(e()),
          n = (0, s.useCallback)(() => {
            r(e());
          }, []);
        return (
          (0, s.useEffect)(
            () => (n(), window.addEventListener('resize', n), () => window.removeEventListener('resize', n)),
            [!0, n],
          ),
          t
        );
      }
    },
    87683: function (e, t, r) {
      'use strict';
      var s = r(57437),
        n = r(4229),
        a = r(76158),
        i = r(29340);
      r(35067);
      var o = r(35414);
      t.Z = (e) => {
        let {
          open: t,
          onOk: r,
          onCancel: l,
          okText: c,
          loading: d,
          disabled: u,
          children: m,
          title: x,
          className: f,
        } = e;
        return (0, s.jsxs)(n.Z, {
          open: t,
          title: x,
          onOk: r,
          onCancel: l,
          className: 'customized-modal '.concat(f || ''),
          confirmLoading: !0,
          centered: !0,
          closeIcon: (0, s.jsx)(o.Ai, {}),
          footer: [
            (0, s.jsx)(a.zx, { disabled: u || d, variant: 'secondary', onClick: r, children: c || 'Confirm' }, 'ok'),
          ],
          children: [m, d && (0, s.jsx)(i.Z, {})],
        });
      };
    },
    86759: function (e, t, r) {
      'use strict';
      r.d(t, {
        qB: function () {
          return l;
        },
        x: function () {
          return o;
        },
      });
      var s = r(73135),
        n = r(50940);
      let a = { tableId: (0, n.A0)() },
        i = (0, s.oM)({
          name: 'table',
          initialState: a,
          reducers: {
            setTable: (e, t) => {
              (e.tableId = t.payload), localStorage.setItem('table_id', t.payload);
            },
            removeTable: (e) => {
              (e.tableId = ''), (0, n.LU)();
            },
          },
        }),
        { setTable: o, removeTable: l } = i.actions;
      t.ZP = i.reducer;
    },
    50940: function (e, t, r) {
      'use strict';
      r.d(t, {
        A0: function () {
          return d;
        },
        A7: function () {
          return l;
        },
        Fm: function () {
          return c;
        },
        LU: function () {
          return u;
        },
        Oq: function () {
          return o;
        },
        dl: function () {
          return i;
        },
        eU: function () {
          return a;
        },
        fk: function () {
          return n;
        },
      });
      let s = (e) => {
          try {
            let t = JSON.parse(e);
            if (t && 'object' == typeof t) return t;
          } catch (e) {
            return null;
          }
          return e;
        },
        n = () => s(localStorage.getItem('basket') || '') || { orderItems: [] },
        a = () => {
          {
            let e = s(localStorage.getItem('dietaryRestrictions') || '');
            return Array.isArray(e) ? e : [];
          }
        },
        i = () => {
          localStorage.removeItem('dietaryRestrictions');
        },
        o = () => {
          {
            let e = s(localStorage.getItem('protein') || '');
            return Array.isArray(e) ? e : [];
          }
        },
        l = () => {
          localStorage.removeItem('protein');
        },
        c = () => {
          localStorage.removeItem('basket');
        },
        d = () => localStorage.getItem('table_id'),
        u = () => {
          localStorage.removeItem('table_id');
        };
    },
    35067: function () {},
  },
  function (e) {
    e.O(0, [4872, 2598, 8809, 2379, 9810, 6691, 4494, 4229, 4440, 2971, 4938, 1744], function () {
      return e((e.s = 46166));
    }),
      (_N_E = e.O());
  },
]);
