(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1752],
  {
    14490: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(13428),
        i = n(2265),
        o = {
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
        s = n(46614),
        a = i.forwardRef(function (e, t) {
          return i.createElement(s.Z, (0, r.Z)({}, e, { ref: t, icon: o }));
        });
    },
    27941: function (e, t, n) {
      var r = n(31706);
      e.exports = function (e, t) {
        return !!(null == e ? 0 : e.length) && r(e, t, 0) > -1;
      };
    },
    61128: function (e) {
      e.exports = function (e, t, n) {
        for (var r = -1, i = null == e ? 0 : e.length; ++r < i; ) if (n(t, e[r])) return !0;
        return !1;
      };
    },
    71787: function (e) {
      e.exports = function (e, t, n, r) {
        for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; ) if (t(e[o], o, e)) return o;
        return -1;
      };
    },
    31706: function (e, t, n) {
      var r = n(71787),
        i = n(49093),
        o = n(58665);
      e.exports = function (e, t, n) {
        return t == t ? o(e, t, n) : r(e, i, n);
      };
    },
    49093: function (e) {
      e.exports = function (e) {
        return e != e;
      };
    },
    49824: function (e, t, n) {
      var r = n(46427),
        i = n(27941),
        o = n(61128),
        s = n(65225),
        a = n(21590),
        l = n(97782);
      e.exports = function (e, t, n) {
        var c = -1,
          u = i,
          d = e.length,
          f = !0,
          p = [],
          v = p;
        if (n) (f = !1), (u = o);
        else if (d >= 200) {
          var m = t ? null : a(e);
          if (m) return l(m);
          (f = !1), (u = s), (v = new r());
        } else v = t ? [] : p;
        e: for (; ++c < d; ) {
          var x = e[c],
            h = t ? t(x) : x;
          if (((x = n || 0 !== x ? x : 0), f && h == h)) {
            for (var g = v.length; g--; ) if (v[g] === h) continue e;
            t && v.push(h), p.push(x);
          } else u(v, h, n) || (v !== p && v.push(h), p.push(x));
        }
        return p;
      };
    },
    21590: function (e, t, n) {
      var r = n(88921),
        i = n(58660),
        o = n(97782),
        s =
          r && 1 / o(new r([, -0]))[1] == 1 / 0
            ? function (e) {
                return new r(e);
              }
            : i;
      e.exports = s;
    },
    58665: function (e) {
      e.exports = function (e, t, n) {
        for (var r = n - 1, i = e.length; ++r < i; ) if (e[r] === t) return r;
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
    12960: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 70753));
    },
    70753: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        });
      var r = n(57437),
        i = n(75370),
        o = n(65149),
        s = n(24033),
        a = n(2265),
        l = n(76158),
        c = n(11425),
        u = n(1434),
        d = n(35414),
        f = n(90850),
        p = (e) => {
          let {
              children: t,
              disabledSecondary: n,
              onClickSecondaryBtn: i,
              secondaryBtnChildren: o,
              onClickPrimaryBtn: p,
              primaryBtnChildren: v,
              isShowPrimaryButton: m,
              onClickBackBtn: x,
            } = e,
            h = (0, a.useRef)(null),
            { scrollBottom: g } = (0, c.I)(h);
          (0, s.useRouter)();
          let { height: y } = (0, u.d)();
          return (0, r.jsxs)('div', {
            className: 'flex flex-col',
            children: [
              (0, r.jsx)('div', {
                className: 'flex w-full pt-[22px] px-4 fixed z-10 justify-between',
                children: (0, r.jsx)(l.hU, { icon: (0, r.jsx)(d.Y4, {}), onClick: x }),
              }),
              (0, r.jsx)('div', { ref: h, className: 'h-screen overflow-y-auto max-h-screen-85', children: t }),
              (0, r.jsx)(f.Z, {
                className: g - 30 > 0 ? 'shadow-medium-top' : '',
                disabledSecondary: n,
                isShowPrimaryButton: m,
                onClickPrimaryBtn: p,
                primaryBtnChildren: v,
                onClickSecondaryBtn: i,
                secondaryBtnChildren: o,
              }),
            ],
          });
        },
        v = n(16691),
        m = n.n(v),
        x = n(16835),
        h = n(93046),
        g = n(16011),
        y = n(6779),
        b = n(97500),
        N = n.n(b),
        j = n(23172);
      n(53962);
      var k = n(18968),
        I = n(66693),
        S = n(91637),
        C = n(17325),
        w = () => {
          var e, t, n, l;
          let c = (0, s.useRouter)(),
            u = (0, s.useSearchParams)(),
            [d, f] = (0, a.useState)(''),
            [v, b] = (0, a.useState)([]),
            [w, T] = (0, a.useState)([]),
            [E, P] = (0, a.useState)(0),
            A = u.get('id'),
            { data: R, isFetching: _ } = (0, k.$d)({ id: A || '' }, { skip: !A }),
            q = (0, a.useMemo)(() => (null == R ? void 0 : R.data), [R]),
            D = u.get('bill_id'),
            Z = (0, h.v9)((e) => e.tableReducer.tableId),
            { data: B } = (0, I.fq)({ id: Z }, { skip: !Z }),
            z = null == B ? void 0 : B.data,
            { data: F } = (0, S.$r)(
              { id: null == z ? void 0 : z.discount },
              { skip: !(null == z ? void 0 : z.discount) },
            ),
            L = null == F ? void 0 : F.data,
            M = (0, a.useMemo)(() => (null == q ? void 0 : q.price) || 0, [q, L]),
            [U, O] = (0, a.useState)(!0),
            {
              image_url: H,
              name: $,
              description: W,
              dietary_restrictions: G,
              modifier_ids: Q,
              modifiers_info: X,
            } = q || {},
            [J, Y] = (0, a.useState)('/assets/images/product-default.png'),
            V = (0, h.I0)();
          (0, a.useEffect)(() => {
            O(!!H), H && Y(H);
          }, [H]);
          let [K, ee] = (0, a.useState)({}),
            et = (0, a.useCallback)((e, t) => {
              ee((n) => ({ ...n, [t]: e }));
            }, []),
            en = (0, a.useMemo)(
              () =>
                null == X
                  ? void 0
                  : X.flatMap((e) => {
                      let t = K[e.name];
                      return t ? e.modifier_options.filter((e) => t.includes(e.name)) : [];
                    }),
              [K, X],
            ),
            er = (0, a.useMemo)(
              () => (null == en ? void 0 : en.reduce((e, t) => e + (+(null == t ? void 0 : t.price) || 0), 0)),
              [en, L],
            );
          (0, a.useEffect)(() => {
            P(+M + +er || 0), b(en);
          }, [M, er, en]);
          let ei = (0, r.jsxs)('div', {
            children: [
              (0, r.jsx)('span', { children: 'Add to basket' }),
              ' ',
              (0, r.jsxs)('span', { className: 'font-normal', children: ['・ ', (0, y.T4)(E)] }),
            ],
          });
          return (0, r.jsx)(p, {
            secondaryBtnChildren: ei,
            onClickBackBtn: () => {
              c.push(D ? '/menu?bill_id='.concat(D) : '/menu');
            },
            onClickSecondaryBtn: () => {
              let e = { product: q, notes: d.trim(), modifiers: v, dietary_restrictions: w };
              V((0, g.Wf)({ ...e, quantity: 1, operator: x.Nv.ADD })), c.push(D ? '/menu?bill_id='.concat(D) : '/menu');
            },
            disabledSecondary: _ || !q,
            children: (0, r.jsxs)('div', {
              className: 'relative h-full',
              children: [
                (0, r.jsxs)('div', {
                  className: 'bg-black-500 h-[228px]',
                  children: [
                    H &&
                      (0, r.jsx)(m(), {
                        className: 'absolute top-[40px] right-1/2 transform translate-x-1/2',
                        src: J,
                        alt: 'product',
                        width: 260,
                        height: 260,
                        loading: 'lazy',
                        onLoad: () => O(!1),
                        onError: () => {
                          Y('/assets/images/product-default.png'), O(!1);
                        },
                      }),
                    (U || _) &&
                      (0, r.jsx)(j.Z.Avatar, {
                        className: 'absolute top-[24px] right-1/2 transform translate-x-1/2',
                        size: 273,
                        active: !0,
                        style: { backgroundColor: '#e5e5e5' },
                      }),
                  ],
                }),
                _
                  ? (0, r.jsx)(j.Z, {
                      className: 'product-skeleton-paragraph px-6 pt-[88px] pb-[30px]',
                      active: !0,
                      paragraph: { rows: 3 },
                    })
                  : (0, r.jsxs)('div', {
                      className: 'flex flex-col px-6 pt-[88px] pb-[30px] text-black-500 space-y-[29px]',
                      children: [
                        (0, r.jsxs)('div', {
                          className: 'flex flex-col space-y-[15px]',
                          children: [
                            (0, r.jsx)('span', { className: 'text-2xl font-medium', children: $ }),
                            (0, r.jsx)('span', {
                              className: 'text-sm font-normal '.concat(N().className),
                              dangerouslySetInnerHTML: { __html: W || '' },
                            }),
                            (0, r.jsx)('div', {
                              className: 'flex space-x-[9px] items-start',
                              children: Array.isArray(G) && G.map((e, t) => (0, r.jsx)(o.Z, { iconName: e }, t)),
                            }),
                          ],
                        }),
                        (null == Q ? void 0 : Q.length) > 0 &&
                          (null ===
                            (e =
                              null == X
                                ? void 0
                                : X.map((e) => {
                                    let t =
                                      ((null == e ? void 0 : e.modifier_options) || [])
                                        .filter(Boolean)
                                        .sort((e, t) => (e.position || 0) - (t.position || 0)) || [];
                                    return {
                                      id: e._id,
                                      nameGroup: null == e ? void 0 : e.name,
                                      options: t.map((e) => ({
                                        label: e.name || '',
                                        price: e.price > 0 ? e.price.toString() : '',
                                      })),
                                    };
                                  })) || void 0 === e
                            ? void 0
                            : e.map((e, t) => {
                                var n, o;
                                return (0, r.jsx)(
                                  i.Z,
                                  {
                                    groupName: null !== (n = e.nameGroup) && void 0 !== n ? n : '',
                                    options: null !== (o = e.options) && void 0 !== o ? o : [],
                                    onChange: et,
                                  },
                                  t,
                                );
                              })),
                        (null === (t = (0, y.Bg)((null == q ? void 0 : q.dietary_restrictions) || [])) || void 0 === t
                          ? void 0
                          : t.length) > 0 &&
                          (0, r.jsx)(i.Z, {
                            groupName: 'Dietary requests',
                            options:
                              null !==
                                (l =
                                  null === (n = (0, y.Bg)((null == q ? void 0 : q.dietary_restrictions) || [])) ||
                                  void 0 === n
                                    ? void 0
                                    : n.map((e) => ({ label: 'Make it ' + e }))) && void 0 !== l
                                ? l
                                : [],
                            onChange: (e) => {
                              T(e);
                            },
                          }),
                        (0, r.jsxs)('div', {
                          className: 'flex flex-col space-y-2.5',
                          children: [
                            (0, r.jsx)('span', { className: 'font-medium text-sm text-black-400', children: 'Notes' }),
                            (0, r.jsx)(C.Z, {
                              valuePlaceholder: 'Notes for the kitchen',
                              onChange: (e) => {
                                f(e.target.value);
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
    65149: function (e, t, n) {
      'use strict';
      var r = n(57437),
        i = n(16691),
        o = n.n(i);
      n(2265),
        (t.Z = (e) => {
          let { iconName: t } = e,
            n = '',
            i = !1;
          switch (t.toLowerCase()) {
            case 'vegan':
              n = 'assets/icons/dietaryRestrictionIcons/vegan.svg';
              break;
            case 'vegan option':
              (n = 'assets/icons/dietaryRestrictionIcons/vegan-option.svg'), (i = !0);
              break;
            case 'vegetarian':
              n = 'assets/icons/dietaryRestrictionIcons/vegetarian.svg';
              break;
            case 'vegetarian option':
              (n = 'assets/icons/dietaryRestrictionIcons/vegetarian-option.svg'), (i = !0);
              break;
            case 'diary-free':
              n = 'assets/icons/dietaryRestrictionIcons/diary-free.svg';
              break;
            case 'diary-free option':
              (n = 'assets/icons/dietaryRestrictionIcons/diary-free-option.svg'), (i = !0);
              break;
            case 'gluten-free':
              n = 'assets/icons/dietaryRestrictionIcons/gluten-free.svg';
              break;
            case 'gluten-free option':
              (n = 'assets/icons/dietaryRestrictionIcons/gluten-free-option.svg'), (i = !0);
              break;
            default:
              return null;
          }
          return (0, r.jsx)(o(), { priority: !0, src: n, alt: t, width: 19, height: i ? 26 : 19 });
        });
    },
    76158: function (e, t, n) {
      'use strict';
      n.d(t, {
        hU: function () {
          return o.Z;
        },
        r: function () {
          return i.Z;
        },
        zx: function () {
          return r.Z;
        },
      });
      var r = n(4696);
      n(16223);
      var i = n(55261),
        o = n(86550);
    },
    75370: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(57437);
      n(2265), n(47420);
      var i = n(91623),
        o = n(63305),
        s = n(65149),
        a = n(97500),
        l = n.n(a),
        c = (e) => {
          let { value: t, icon: n, price: a } = e;
          return (0, r.jsx)(i.ZP, {
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
            children: (0, r.jsx)('div', {
              className: 'flex items-center',
              children: (0, r.jsx)(o.Z, {
                value: t,
                children: (0, r.jsx)('div', {
                  className: 'flex justify-between text-black-500 ml-[3px]',
                  children: (0, r.jsxs)('div', {
                    className: 'flex items-center',
                    children: [
                      n && (0, r.jsx)('div', { className: 'mr-[8px]', children: (0, r.jsx)(s.Z, { iconName: n }) }),
                      (0, r.jsx)('div', { className: 'text-[18px] '.concat(l().className), children: ''.concat(t) }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
        u = (e) => {
          let { discount: t, groupName: n, options: i, onChange: s, defaultValue: a } = e;
          return (0, r.jsxs)('div', {
            children: [
              (0, r.jsx)('p', { className: 'text-[18px] font-medium mb-[11px] text-black-400', children: n }),
              (0, r.jsx)(o.Z.Group, {
                defaultValue: a,
                className: 'flex flex-col w-full',
                onChange: (e) => {
                  s(e, n);
                },
                children: (0, r.jsx)('div', {
                  className: 'flex flex-col space-y-[10px]',
                  children:
                    null == i
                      ? void 0
                      : i.map((e, i) => {
                          var o;
                          return (0, r.jsxs)(
                            'div',
                            {
                              className: 'flex justify-between items-center text-black-500 w-full',
                              children: [
                                (0, r.jsx)(c, {
                                  value: e.label,
                                  icon:
                                    null == e
                                      ? void 0
                                      : null === (o = e.icon) || void 0 === o
                                        ? void 0
                                        : o.toLowerCase(),
                                  price: e.price,
                                }),
                                e.price &&
                                  (0, r.jsxs)('label', {
                                    className: 'text-[18px] '.concat(l().className),
                                    htmlFor: ''.concat(n, '-').concat(i),
                                    children: [
                                      ' ',
                                      '+ ',
                                      (null == t ? void 0 : t.type) === 'FIXED_PERCENT' &&
                                        (0, r.jsxs)('span', { className: 'line-through', children: [' ', e.price] }),
                                      ' '.concat(+e.price),
                                    ],
                                  }),
                              ],
                            },
                            i,
                          );
                        }),
                }),
              }),
            ],
          });
        };
    },
    11425: function (e, t, n) {
      'use strict';
      n.d(t, {
        I: function () {
          return i;
        },
      });
      var r = n(2265);
      function i(e) {
        let [t, n] = (0, r.useState)(!1),
          [i, o] = (0, r.useState)(!1),
          [s, a] = (0, r.useState)(0),
          [l, c] = (0, r.useState)(0),
          u = (0, r.useCallback)(() => {
            let t = null == e ? void 0 : e.current;
            t &&
              (n(t.scrollHeight > t.clientHeight),
              o(t.scrollWidth > t.clientWidth),
              a(t.scrollTop),
              c(t.scrollHeight - t.offsetHeight - t.scrollTop));
          }, [null == e ? void 0 : e.current]);
        (0, r.useEffect)(() => {
          u(), window.addEventListener('resize', u);
          let t = null == e ? void 0 : e.current,
            n = new ResizeObserver(() => {
              u();
            });
          return (
            t && t && n.observe(t),
            () => {
              window.removeEventListener('resize', u), t && n.unobserve(t);
            }
          );
        }, [!0, u, null == e ? void 0 : e.current]);
        let d = (0, r.useCallback)(() => {
          let t = null == e ? void 0 : e.current;
          t && (a(t.scrollTop), c(t.scrollHeight - t.offsetHeight - t.scrollTop));
        }, [null == e ? void 0 : e.current]);
        return (
          (0, r.useEffect)(() => {
            let t = null == e ? void 0 : e.current;
            if (!t) return;
            d(), t.addEventListener('scroll', d);
            let n = new ResizeObserver(() => {
              d();
            });
            return (
              t && t && n.observe(t),
              () => {
                t.removeEventListener('scroll', d);
              }
            );
          }, [!0, u, null == e ? void 0 : e.current]),
          { isVerticalScroll: t, isHorizontalScroll: i, scrollTop: s, scrollBottom: l }
        );
      }
    },
    1434: function (e, t, n) {
      'use strict';
      n.d(t, {
        d: function () {
          return i;
        },
      });
      var r = n(2265);
      function i() {
        let e = () => {
            let { innerWidth: e, innerHeight: t } = window;
            return { width: e, height: t, isMobile: e < 768 };
          },
          [t, n] = (0, r.useState)(e()),
          i = (0, r.useCallback)(() => {
            n(e());
          }, []);
        return (
          (0, r.useEffect)(
            () => (i(), window.addEventListener('resize', i), () => window.removeEventListener('resize', i)),
            [!0, i],
          ),
          t
        );
      }
    },
    17325: function (e, t, n) {
      'use strict';
      var r = n(57437),
        i = n(2265),
        o = n(77190),
        s = n(91623),
        a = n(97500),
        l = n.n(a);
      n(19509);
      let { TextArea: c } = o.default;
      t.Z = (e) => {
        let { valueInput: t, required: n, valuePlaceholder: o, onChange: a, disabled: u, value: d, ...f } = e,
          [p, v] = (0, i.useState)(t);
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)(s.ZP, {
            theme: {
              components: { Input: { paddingInline: 15, paddingBlock: 10 } },
              token: {
                lineHeight: 1.5,
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
            children: (0, r.jsx)(c, {
              className: l().className,
              value: d || p,
              required: n,
              onChange: (e) => {
                v(e.target.value), a && a(e);
              },
              placeholder: o,
              autoSize: { minRows: 3, maxRows: 3.1 },
              disabled: u,
            }),
          }),
        });
      };
    },
    90850: function (e, t, n) {
      'use strict';
      var r = n(57437),
        i = n(76158);
      t.Z = (e) => {
        let {
          isShowPrimaryButton: t = !1,
          primaryBtnChildren: n,
          secondaryBtnChildren: o,
          disabledPrimary: s,
          disabledSecondary: a,
          onClickPrimaryBtn: l,
          onClickSecondaryBtn: c,
          isTextRequestTaxInvoice: u,
          className: d,
        } = e;
        return (0, r.jsxs)('div', {
          className: ''.concat(d || '', ' w-full fixed flex flex-col space-y-3 bottom-0 bg-grey-100 px-6 py-3 z-999'),
          children: [
            u &&
              (0, r.jsx)('div', {
                className: 'text-[18px] text-black-500 text-center mb-2',
                children:
                  'Once you request the tax invoice, a member of our staff will print it off, sign, and hand it to you.',
              }),
            t && (0, r.jsx)(i.zx, { variant: 'primary', disabled: s, onClick: l, children: n }),
            (0, r.jsx)(i.zx, { variant: 'secondary', disabled: a, onClick: c, children: o }),
          ],
        });
      };
    },
    16835: function (e, t, n) {
      'use strict';
      var r, i, o, s, a, l;
      n.d(t, {
        Nv: function () {
          return i;
        },
        uH: function () {
          return o;
        },
      }),
        ((s = r || (r = {})).ADMIN = 'ADMIN'),
        (s.STAFF = 'STAFF'),
        ((a = i || (i = {})).ADD = '+'),
        (a.SUB = '-'),
        (a.EQUAL = '='),
        ((l = o || (o = {})).FIXED_PERCENT = 'FIXED_PERCENT'),
        (l.FIXED_AMOUNT = 'FIXED_AMOUNT');
    },
    16011: function (e, t, n) {
      'use strict';
      n.d(t, {
        Wf: function () {
          return u;
        },
        ZW: function () {
          return d;
        },
      });
      var r = n(16835),
        i = n(50940),
        o = n(73135),
        s = n(42077),
        a = n.n(s);
      let l = { basket: (0, i.fk)() },
        c = (0, o.oM)({
          name: 'basket',
          initialState: l,
          reducers: {
            reset: (e) => {
              (e.basket = null), (0, i.Fm)();
            },
            update: (e, t) => {
              var n, i, o;
              let s = e.basket || { orderItems: [] };
              if (!t.payload) return;
              let { quantity: l, operator: c, product: u, notes: d, modifiers: f, dietary_restrictions: p } = t.payload,
                v =
                  null == s
                    ? void 0
                    : null === (n = s.orderItems) || void 0 === n
                      ? void 0
                      : n.findIndex((e) => {
                          var t;
                          return (
                            (null == e ? void 0 : null === (t = e.product) || void 0 === t ? void 0 : t.id) === u.id &&
                            a()((null == e ? void 0 : e.dietary_restrictions) || [], p || []) &&
                            a()((null == e ? void 0 : e.notes) || '', d || '') &&
                            a()((null == e ? void 0 : e.modifiers) || [], f || [])
                          );
                        });
              v > -1 &&
              (!f ||
                a()(null === (i = s.orderItems[v]) || void 0 === i ? void 0 : i.modifiers, f) ||
                !p ||
                a()(null === (o = s.orderItems[v]) || void 0 === o ? void 0 : o.dietary_restrictions, p) ||
                !d ||
                a()(s.orderItems[v].notes, d))
                ? 0 === l
                  ? s.orderItems.splice(v, 1)
                  : c === r.Nv.ADD
                    ? (s.orderItems[v].quantity += l)
                    : c === r.Nv.SUB
                      ? (s.orderItems[v].quantity -= l)
                      : c === r.Nv.EQUAL && (s.orderItems[v].quantity = l)
                : s.orderItems.push({
                    product: u,
                    notes: d || '',
                    modifiers: f || [],
                    quantity: l,
                    dietary_restrictions: p || [],
                  });
              let m = { ...s };
              localStorage.setItem('basket', JSON.stringify(m)), (e.basket = m);
            },
          },
        }),
        { update: u, reset: d } = c.actions;
      t.ZP = c.reducer;
    },
    91637: function (e, t, n) {
      'use strict';
      n.d(t, {
        $r: function () {
          return a;
        },
        Y5: function () {
          return o;
        },
      });
      var r = n(85687),
        i = n(40329);
      let o = (0, r.LC)({
          reducerPath: 'discountApi',
          refetchOnFocus: !0,
          baseQuery: (0, i.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
          tagTypes: ['Discount'],
          endpoints: (e) => ({
            getDiscounts: e.query({ query: () => 'discount', providesTags: ['Discount'] }),
            getSingleDiscount: e.query({
              query: (e) => {
                let { id: t } = e;
                return 'discount/'.concat(t);
              },
              providesTags: ['Discount'],
            }),
          }),
        }),
        { useGetDiscountsQuery: s, useGetSingleDiscountQuery: a } = o;
    },
    18968: function (e, t, n) {
      'use strict';
      n.d(t, {
        $d: function () {
          return a;
        },
        Fr: function () {
          return o;
        },
        OR: function () {
          return l;
        },
      });
      var r = n(85687),
        i = n(40329);
      let o = (0, r.LC)({
          reducerPath: 'productApi',
          refetchOnFocus: !0,
          baseQuery: (0, i.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
          tagTypes: ['Product'],
          endpoints: (e) => ({
            getProducts: e.query({ query: () => ({ url: 'product', method: 'GET' }), providesTags: ['Product'] }),
            getSingleProduct: e.query({ query: (e) => 'product/'.concat(e.id), providesTags: ['Product'] }),
            getFilteredProducts: e.query({
              query: (e) => {
                let { search: t, dietary_restrictions: n, proteins: r } = e,
                  i = 'product?';
                return (
                  t && (i += '&search='.concat(encodeURIComponent(t))),
                  (null == n ? void 0 : n.length) &&
                    (i += '&dietary_restrictionsParam='.concat(
                      encodeURIComponent(JSON.stringify(n.map((e) => e.toLowerCase()))),
                    )),
                  (null == r ? void 0 : r.length) &&
                    (i += '&proteinsParam='.concat(encodeURIComponent(JSON.stringify(r.map((e) => e.toLowerCase()))))),
                  i
                );
              },
              providesTags: ['Product'],
            }),
          }),
        }),
        { useGetProductsQuery: s, useGetSingleProductQuery: a, useGetFilteredProductsQuery: l } = o;
    },
    66693: function (e, t, n) {
      'use strict';
      n.d(t, {
        fq: function () {
          return a;
        },
        kw: function () {
          return o;
        },
      });
      var r = n(85687),
        i = n(40329);
      let o = (0, r.LC)({
          reducerPath: 'diningTableApi',
          refetchOnFocus: !0,
          baseQuery: (0, i.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
          tagTypes: ['Dining Table'],
          endpoints: (e) => ({
            getDiningTables: e.query({
              query: (e) => {
                let { access_token: t } = e;
                return {
                  url: 'diningTable',
                  method: 'GET',
                  headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '.concat(t) },
                };
              },
              providesTags: ['Dining Table'],
            }),
            getSingleDiningTable: e.query({
              query: (e) => {
                let { id: t } = e;
                return 'diningTable/'.concat(t);
              },
              providesTags: ['Dining Table'],
            }),
          }),
        }),
        { useGetDiningTablesQuery: s, useGetSingleDiningTableQuery: a } = o;
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
          return a;
        },
        r$: function () {
          return c;
        },
        vV: function () {
          return d;
        },
        xz: function () {
          return s;
        },
      }),
        n(16835);
      var r = n(48911),
        i = n.n(r);
      let o = (e) =>
          i()(
            (null == e ? void 0 : e.filter((e) => e.endsWith('option')).map((e) => (e = e.replace(' option', '')))) ||
              [],
          ),
        s = (e) =>
          e
            ? ''
                .concat(e.getHours(), ':')
                .concat(10 > e.getMinutes() ? '0' : '')
                .concat(e.getMinutes())
            : '',
        a = (e) => '' === e.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
        l = (e) => '' === e.trim() || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(e),
        c = (e) => /^(\d[- ]?){12}\d$/.test(e),
        u = (e) => '' !== e.trim(),
        d = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
        f = (e) => (e ? Math.round(Number(e)).toLocaleString('en-US').replace(/,/g, '.') : '0');
    },
    50940: function (e, t, n) {
      'use strict';
      n.d(t, {
        A0: function () {
          return u;
        },
        A7: function () {
          return l;
        },
        Fm: function () {
          return c;
        },
        LU: function () {
          return d;
        },
        Oq: function () {
          return a;
        },
        dl: function () {
          return s;
        },
        eU: function () {
          return o;
        },
        fk: function () {
          return i;
        },
      });
      let r = (e) => {
          try {
            let t = JSON.parse(e);
            if (t && 'object' == typeof t) return t;
          } catch (e) {
            return null;
          }
          return e;
        },
        i = () => r(localStorage.getItem('basket') || '') || { orderItems: [] },
        o = () => {
          {
            let e = r(localStorage.getItem('dietaryRestrictions') || '');
            return Array.isArray(e) ? e : [];
          }
        },
        s = () => {
          localStorage.removeItem('dietaryRestrictions');
        },
        a = () => {
          {
            let e = r(localStorage.getItem('protein') || '');
            return Array.isArray(e) ? e : [];
          }
        },
        l = () => {
          localStorage.removeItem('protein');
        },
        c = () => {
          localStorage.removeItem('basket');
        },
        u = () => localStorage.getItem('table_id'),
        d = () => {
          localStorage.removeItem('table_id');
        };
    },
    47420: function () {},
    53962: function () {},
    19509: function () {},
  },
  function (e) {
    e.O(
      0,
      [4872, 2598, 8809, 5687, 2379, 8863, 7190, 6691, 6394, 2077, 3172, 3305, 4440, 2971, 4938, 1744],
      function () {
        return e((e.s = 12960));
      },
    ),
      (_N_E = e.O());
  },
]);
