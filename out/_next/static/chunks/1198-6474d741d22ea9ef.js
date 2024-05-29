(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1198],
  {
    27941: function (e, t, r) {
      var n = r(31706);
      e.exports = function (e, t) {
        return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1;
      };
    },
    61128: function (e) {
      e.exports = function (e, t, r) {
        for (var n = -1, i = null == e ? 0 : e.length; ++n < i; ) if (r(t, e[n])) return !0;
        return !1;
      };
    },
    71787: function (e) {
      e.exports = function (e, t, r, n) {
        for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; ) if (t(e[s], s, e)) return s;
        return -1;
      };
    },
    31706: function (e, t, r) {
      var n = r(71787),
        i = r(49093),
        s = r(58665);
      e.exports = function (e, t, r) {
        return t == t ? s(e, t, r) : n(e, i, r);
      };
    },
    49093: function (e) {
      e.exports = function (e) {
        return e != e;
      };
    },
    49824: function (e, t, r) {
      var n = r(46427),
        i = r(27941),
        s = r(61128),
        l = r(65225),
        o = r(21590),
        c = r(97782);
      e.exports = function (e, t, r) {
        var a = -1,
          u = i,
          d = e.length,
          f = !0,
          x = [],
          m = x;
        if (r) (f = !1), (u = s);
        else if (d >= 200) {
          var v = t ? null : o(e);
          if (v) return c(v);
          (f = !1), (u = l), (m = new n());
        } else m = t ? [] : x;
        e: for (; ++a < d; ) {
          var p = e[a],
            h = t ? t(p) : p;
          if (((p = r || 0 !== p ? p : 0), f && h == h)) {
            for (var y = m.length; y--; ) if (m[y] === h) continue e;
            t && m.push(h), x.push(p);
          } else u(m, h, r) || (m !== x && m.push(h), x.push(p));
        }
        return x;
      };
    },
    21590: function (e, t, r) {
      var n = r(88921),
        i = r(58660),
        s = r(97782),
        l =
          n && 1 / s(new n([, -0]))[1] == 1 / 0
            ? function (e) {
                return new n(e);
              }
            : i;
      e.exports = l;
    },
    58665: function (e) {
      e.exports = function (e, t, r) {
        for (var n = r - 1, i = e.length; ++n < i; ) if (e[n] === t) return n;
        return -1;
      };
    },
    58660: function (e) {
      e.exports = function () {};
    },
    48911: function (e, t, r) {
      var n = r(49824);
      e.exports = function (e) {
        return e && e.length ? n(e) : [];
      };
    },
    29340: function (e, t, r) {
      'use strict';
      var n = r(57437),
        i = r(91623),
        s = r(59810);
      t.Z = () =>
        (0, n.jsx)(i.ZP, {
          theme: { token: { colorPrimary: '#131C16' } },
          children: (0, n.jsx)(s.Z, {
            className: '!fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 black-500',
            size: 'large',
          }),
        });
    },
    72336: function (e, t, r) {
      'use strict';
      var n = r(57437),
        i = r(16835),
        s = r(16011),
        l = r(6779),
        o = r(97500),
        c = r.n(o),
        a = r(2265),
        u = r(93046),
        d = r(76158),
        f = r(87683),
        x = r(32596);
      t.Z = (e) => {
        let {
            name: t,
            price: r,
            priceAfterDiscount: o,
            image_url: m,
            discount: v,
            className: p,
            note: h,
            quantity: y,
            modifiers: b,
            isNewItem: j,
            item: g,
            dietary_restrictions: N,
            disabled: k,
          } = e,
          [T, I] = (0, a.useState)(y),
          [w, S] = (0, a.useState)(!1),
          C = (0, u.I0)(),
          E = () => {
            S(!0);
          };
        return (0, n.jsxs)('div', {
          className: ''.concat(p || '', ' flex w-full'),
          children: [
            (0, n.jsx)(x.Z, { className: 'mr-[24px]', width: 86, height: 86, src: m, alt: t }),
            (0, n.jsxs)('div', {
              className: 'flex flex-col w-full',
              children: [
                (0, n.jsx)('div', { className: 'text-[18px] text-black-400 ', children: t }),
                b &&
                  (null == b ? void 0 : b.length) > 0 &&
                  (0, n.jsx)('div', {
                    className: 'flex flex-col mt-[7px] text-[13px] text-black-500',
                    children: b.map((e, t) =>
                      (0, n.jsxs)(
                        'div',
                        {
                          className: 'flex items-center justify-between '.concat(c().className),
                          children: [
                            (0, n.jsxs)('div', { children: [' Add ', e.name] }),
                            (null == e ? void 0 : e.price) > 0 &&
                              (0, n.jsx)('div', {
                                children:
                                  ((null == v ? void 0 : v.type) === i.uH.FIXED_PERCENT &&
                                    (0, n.jsxs)('div', {
                                      className: 'flex space-x-[3px]',
                                      children: [
                                        (0, n.jsx)('div', { children: ' + ' }),
                                        (0, n.jsx)('div', { className: 'line-through', children: (0, l.T4)(e.price) }),
                                        (0, n.jsx)('div', { className: '', children: (0, l.T4)(e.price) }),
                                      ],
                                    })) ||
                                  (0, n.jsxs)('div', {
                                    className: ' text-black-400',
                                    children: ['+ ', (0, l.T4)(e.price)],
                                  }),
                              }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                N &&
                  (null == N ? void 0 : N.length) > 0 &&
                  (0, n.jsx)('div', {
                    className: 'flex flex-col mt-[7px] text-[13px] text-black-500',
                    children: N.map((e, t) =>
                      (0, n.jsx)(
                        'div',
                        { className: 'flex items-center justify-between '.concat(c().className), children: e },
                        t,
                      ),
                    ),
                  }),
                h &&
                  (0, n.jsx)('div', {
                    className: 'flex space-x-[5px] text-[13px] text-black-500 mt-[7px] '.concat(c().className),
                    children: (0, n.jsxs)('div', { children: ['Note: ', h] }),
                  }),
                (0, n.jsxs)('div', {
                  className: 'flex items-center justify-between mt-[15px]',
                  children: [
                    j
                      ? (0, n.jsxs)('div', {
                          className: 'flex space-x-4 items-center w-fit',
                          children: [
                            (0, n.jsx)(d.r, {
                              plus: !1,
                              disabled: k || 0 === T,
                              onClick: () => {
                                T > 1 &&
                                  C(
                                    (0, s.Wf)({
                                      product: g,
                                      quantity: 1,
                                      operator: i.Nv.SUB,
                                      dietary_restrictions: N,
                                      notes: h,
                                      modifiers: b,
                                    }),
                                  ),
                                  I((e) => (1 === e ? (E(), e) : e - 1));
                              },
                            }),
                            (0, n.jsx)('span', {
                              className: 'font-normal text-base text-center text-black-400 w-4',
                              children: T,
                            }),
                            (0, n.jsx)(d.r, {
                              onClick: () => {
                                C(
                                  (0, s.Wf)({
                                    product: g,
                                    quantity: 1,
                                    operator: i.Nv.ADD,
                                    dietary_restrictions: N,
                                    notes: h,
                                    modifiers: b,
                                  }),
                                ),
                                  I((e) => e + 1);
                              },
                              disabled: k,
                            }),
                          ],
                        })
                      : (0, n.jsx)('div', {
                          className: 'flex space-x-[10px]',
                          children: (0, n.jsxs)('div', { children: [' x ', y] }),
                        }),
                    ((null == v ? void 0 : v.type) === i.uH.FIXED_PERCENT &&
                      (0, n.jsxs)('div', {
                        className: 'flex space-x-[3px]',
                        children: [
                          (0, n.jsx)('div', {
                            className: 'text-[18px] text-black-400 line-through',
                            children: (0, l.T4)(r * T),
                          }),
                          (0, n.jsx)('div', {
                            className: 'text-[18px] text-black-500',
                            children: (0, l.T4)(o || 0) || (0, l.T4)(r * T),
                          }),
                        ],
                      })) ||
                      (0, n.jsx)('div', { className: 'text-[18px] text-black-400', children: (0, l.T4)(r * T) }),
                  ],
                }),
                (0, n.jsxs)(f.Z, {
                  open: w,
                  title: 'Remove item',
                  okText: 'Remove',
                  onOk: () => {
                    C((0, s.Wf)({ product: g, quantity: 0, dietary_restrictions: N, notes: h, modifiers: b })), S(!1);
                  },
                  onCancel: () => {
                    I(1), S(!1);
                  },
                  children: [
                    'Are you sure you want to remove the ',
                    null == t ? void 0 : t.toLowerCase(),
                    ' from your basket?',
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    32596: function (e, t, r) {
      'use strict';
      var n = r(57437),
        i = r(23172),
        s = r(16691),
        l = r.n(s),
        o = r(2265);
      t.Z = (e) => {
        let { src: t, alt: r, width: s, height: c, className: a } = e,
          [u, d] = (0, o.useState)(!0),
          f = { width: s, height: c };
        return (0, n.jsxs)('div', {
          className: ''.concat(a || '', ' flex flex-col items-center shrink-0'),
          style: f,
          children: [
            u && (0, n.jsx)(i.Z.Button, { style: f, active: !0 }),
            (0, n.jsx)(l(), {
              className: 'shrink-0',
              priority: !0,
              onLoad: () => d(!1),
              onError: () => d(!1),
              width: s,
              height: c,
              src: t || '/assets/images/product-default.png',
              alt: r,
              style: { opacity: u ? 0 : 1 },
            }),
          ],
        });
      };
    },
    76158: function (e, t, r) {
      'use strict';
      r.d(t, {
        hU: function () {
          return s.Z;
        },
        r: function () {
          return i.Z;
        },
        zx: function () {
          return n.Z;
        },
      });
      var n = r(4696);
      r(16223);
      var i = r(55261),
        s = r(86550);
    },
    11425: function (e, t, r) {
      'use strict';
      r.d(t, {
        I: function () {
          return i;
        },
      });
      var n = r(2265);
      function i(e) {
        let [t, r] = (0, n.useState)(!1),
          [i, s] = (0, n.useState)(!1),
          [l, o] = (0, n.useState)(0),
          [c, a] = (0, n.useState)(0),
          u = (0, n.useCallback)(() => {
            let t = null == e ? void 0 : e.current;
            t &&
              (r(t.scrollHeight > t.clientHeight),
              s(t.scrollWidth > t.clientWidth),
              o(t.scrollTop),
              a(t.scrollHeight - t.offsetHeight - t.scrollTop));
          }, [null == e ? void 0 : e.current]);
        (0, n.useEffect)(() => {
          u(), window.addEventListener('resize', u);
          let t = null == e ? void 0 : e.current,
            r = new ResizeObserver(() => {
              u();
            });
          return (
            t && t && r.observe(t),
            () => {
              window.removeEventListener('resize', u), t && r.unobserve(t);
            }
          );
        }, [!0, u, null == e ? void 0 : e.current]);
        let d = (0, n.useCallback)(() => {
          let t = null == e ? void 0 : e.current;
          t && (o(t.scrollTop), a(t.scrollHeight - t.offsetHeight - t.scrollTop));
        }, [null == e ? void 0 : e.current]);
        return (
          (0, n.useEffect)(() => {
            let t = null == e ? void 0 : e.current;
            if (!t) return;
            d(), t.addEventListener('scroll', d);
            let r = new ResizeObserver(() => {
              d();
            });
            return (
              t && t && r.observe(t),
              () => {
                t.removeEventListener('scroll', d);
              }
            );
          }, [!0, u, null == e ? void 0 : e.current]),
          { isVerticalScroll: t, isHorizontalScroll: i, scrollTop: l, scrollBottom: c }
        );
      }
    },
    90850: function (e, t, r) {
      'use strict';
      var n = r(57437),
        i = r(76158);
      t.Z = (e) => {
        let {
          isShowPrimaryButton: t = !1,
          primaryBtnChildren: r,
          secondaryBtnChildren: s,
          disabledPrimary: l,
          disabledSecondary: o,
          onClickPrimaryBtn: c,
          onClickSecondaryBtn: a,
          isTextRequestTaxInvoice: u,
          className: d,
        } = e;
        return (0, n.jsxs)('div', {
          className: ''.concat(d || '', ' w-full fixed flex flex-col space-y-3 bottom-0 bg-grey-100 px-6 py-3 z-999'),
          children: [
            u &&
              (0, n.jsx)('div', {
                className: 'text-[18px] text-black-500 text-center mb-2',
                children:
                  'Once you request the tax invoice, a member of our staff will print it off, sign, and hand it to you.',
              }),
            t && (0, n.jsx)(i.zx, { variant: 'primary', disabled: l, onClick: c, children: r }),
            (0, n.jsx)(i.zx, { variant: 'secondary', disabled: o, onClick: a, children: s }),
          ],
        });
      };
    },
    90601: function (e, t, r) {
      'use strict';
      var n = r(57437),
        i = r(24033),
        s = r(2265),
        l = r(76158),
        o = r(11425),
        c = r(35414),
        a = r(90850);
      t.Z = (e) => {
        let {
            isShowBackBtn: t = !0,
            title: r,
            isTextRequestTaxInvoice: u,
            children: d,
            disabledPrimary: f,
            disabledSecondary: x,
            onClickSecondaryBtn: m,
            secondaryBtnChildren: v,
            onClickPrimaryBtn: p,
            primaryBtnChildren: h,
            isShowPrimaryButton: y,
            onClickBackBtn: b,
            onClickDownBtn: j,
            disabledBackBtn: g,
            isHiddenAvatar: N = !1,
          } = e,
          k = (0, s.useRef)(null),
          { scrollTop: T, scrollBottom: I } = (0, o.I)(k);
        (0, i.useRouter)();
        let w = (0, s.useMemo)(() => (y ? '243px' : u ? '211px' : '170px'), [y, u]);
        return (0, n.jsxs)('div', {
          className: 'flex flex-col h-screen',
          children: [
            (0, n.jsxs)('div', {
              className: ''
                .concat(
                  T - 13 > 0 ? 'shadow-medium-bottom' : '',
                  ' relative w-full pt-[22px] pb-[15px] flex flex-row items-center ',
                )
                .concat(t ? 'justify-start pl-4' : 'justify-end pr-4'),
              children: [
                t && (0, n.jsx)(l.hU, { icon: (0, n.jsx)(c.Y4, {}), disabled: g, onClick: b }),
                (0, n.jsx)('span', {
                  className:
                    'w-[calc(100%-8rem)] absolute top-[40%] right-1/2 transform translate-x-1/2 text-center text-xl font-medium text-black-500',
                  children: r,
                }),
                !t && (0, n.jsx)(l.hU, { icon: (0, n.jsx)(c._8, {}), onClick: j }),
              ],
            }),
            (0, n.jsx)('div', { ref: k, className: 'overflow-y-auto max-h-screen-'.concat(w), children: d }),
            (0, n.jsx)(a.Z, {
              className: I - 40 > 0 ? 'shadow-medium-top' : '',
              disabledPrimary: f,
              disabledSecondary: x,
              isTextRequestTaxInvoice: u,
              isShowPrimaryButton: y,
              onClickPrimaryBtn: p,
              primaryBtnChildren: h,
              onClickSecondaryBtn: m,
              secondaryBtnChildren: v,
            }),
          ],
        });
      };
    },
    87683: function (e, t, r) {
      'use strict';
      var n = r(57437),
        i = r(4229),
        s = r(76158),
        l = r(29340);
      r(35067);
      var o = r(35414);
      t.Z = (e) => {
        let {
          open: t,
          onOk: r,
          onCancel: c,
          okText: a,
          loading: u,
          disabled: d,
          children: f,
          title: x,
          className: m,
        } = e;
        return (0, n.jsxs)(i.Z, {
          open: t,
          title: x,
          onOk: r,
          onCancel: c,
          className: 'customized-modal '.concat(m || ''),
          confirmLoading: !0,
          centered: !0,
          closeIcon: (0, n.jsx)(o.Ai, {}),
          footer: [
            (0, n.jsx)(s.zx, { disabled: d || u, variant: 'secondary', onClick: r, children: a || 'Confirm' }, 'ok'),
          ],
          children: [f, u && (0, n.jsx)(l.Z, {})],
        });
      };
    },
    16835: function (e, t, r) {
      'use strict';
      var n, i, s, l, o, c;
      r.d(t, {
        Nv: function () {
          return i;
        },
        uH: function () {
          return s;
        },
      }),
        ((l = n || (n = {})).ADMIN = 'ADMIN'),
        (l.STAFF = 'STAFF'),
        ((o = i || (i = {})).ADD = '+'),
        (o.SUB = '-'),
        (o.EQUAL = '='),
        ((c = s || (s = {})).FIXED_PERCENT = 'FIXED_PERCENT'),
        (c.FIXED_AMOUNT = 'FIXED_AMOUNT');
    },
    16011: function (e, t, r) {
      'use strict';
      r.d(t, {
        Wf: function () {
          return u;
        },
        ZW: function () {
          return d;
        },
      });
      var n = r(16835),
        i = r(50940),
        s = r(73135),
        l = r(42077),
        o = r.n(l);
      let c = { basket: (0, i.fk)() },
        a = (0, s.oM)({
          name: 'basket',
          initialState: c,
          reducers: {
            reset: (e) => {
              (e.basket = null), (0, i.Fm)();
            },
            update: (e, t) => {
              var r, i, s;
              let l = e.basket || { orderItems: [] };
              if (!t.payload) return;
              let { quantity: c, operator: a, product: u, notes: d, modifiers: f, dietary_restrictions: x } = t.payload,
                m =
                  null == l
                    ? void 0
                    : null === (r = l.orderItems) || void 0 === r
                      ? void 0
                      : r.findIndex((e) => {
                          var t;
                          return (
                            (null == e ? void 0 : null === (t = e.product) || void 0 === t ? void 0 : t.id) === u.id &&
                            o()((null == e ? void 0 : e.dietary_restrictions) || [], x || []) &&
                            o()((null == e ? void 0 : e.notes) || '', d || '') &&
                            o()((null == e ? void 0 : e.modifiers) || [], f || [])
                          );
                        });
              m > -1 &&
              (!f ||
                o()(null === (i = l.orderItems[m]) || void 0 === i ? void 0 : i.modifiers, f) ||
                !x ||
                o()(null === (s = l.orderItems[m]) || void 0 === s ? void 0 : s.dietary_restrictions, x) ||
                !d ||
                o()(l.orderItems[m].notes, d))
                ? 0 === c
                  ? l.orderItems.splice(m, 1)
                  : a === n.Nv.ADD
                    ? (l.orderItems[m].quantity += c)
                    : a === n.Nv.SUB
                      ? (l.orderItems[m].quantity -= c)
                      : a === n.Nv.EQUAL && (l.orderItems[m].quantity = c)
                : l.orderItems.push({
                    product: u,
                    notes: d || '',
                    modifiers: f || [],
                    quantity: c,
                    dietary_restrictions: x || [],
                  });
              let v = { ...l };
              localStorage.setItem('basket', JSON.stringify(v)), (e.basket = v);
            },
          },
        }),
        { update: u, reset: d } = a.actions;
      t.ZP = a.reducer;
    },
    64308: function (e, t, r) {
      'use strict';
      r.d(t, {
        LJ: function () {
          return o;
        },
        QC: function () {
          return s;
        },
        db: function () {
          return d;
        },
        kX: function () {
          return f;
        },
        oQ: function () {
          return c;
        },
        w2: function () {
          return a;
        },
      });
      var n = r(85687),
        i = r(40329);
      let s = (0, n.LC)({
          reducerPath: 'billApi',
          refetchOnFocus: !0,
          baseQuery: (0, i.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
          tagTypes: ['Bill'],
          endpoints: (e) => ({
            getBills: e.query({
              query: () => ({ url: 'bill', method: 'GET', headers: { 'Content-Type': 'application/json' } }),
              providesTags: ['Bill'],
            }),
            getSingleBill: e.query({ query: (e) => 'bill/'.concat(e.id), providesTags: ['Bill'] }),
            addBill: e.mutation({
              query: (e) => {
                let { data: t } = e;
                return { url: 'bill', method: 'POST', body: t };
              },
              invalidatesTags: ['Bill'],
            }),
            updateBill: e.mutation({
              query: (e) => {
                let { data: t } = e;
                return { url: 'bill', method: 'PUT', body: t, headers: { 'Content-Type': 'application/json' } };
              },
              invalidatesTags: ['Bill'],
            }),
            deleteBill: e.mutation({
              query: (e) => {
                let { data: t } = e;
                return {
                  url: 'bill/'.concat(t.id),
                  method: 'DELETE',
                  body: { data: t },
                  headers: { 'Content-Type': 'application/json' },
                };
              },
              invalidatesTags: ['Bill'],
            }),
            createFeedback: e.mutation({
              query: (e) => {
                let { data: t } = e;
                return { url: 'feedback', method: 'POST', body: t };
              },
              invalidatesTags: ['Bill'],
            }),
            createTaxInvoice: e.mutation({
              query: (e) => {
                let { data: t } = e;
                return { url: 'taxinvoice', method: 'POST', body: t };
              },
              invalidatesTags: ['Bill'],
            }),
          }),
        }),
        {
          useGetBillsQuery: l,
          useGetSingleBillQuery: o,
          useUpdateBillMutation: c,
          useAddBillMutation: a,
          useDeleteBillMutation: u,
          useCreateFeedbackMutation: d,
          useCreateTaxInvoiceMutation: f,
        } = s;
    },
    6779: function (e, t, r) {
      'use strict';
      r.d(t, {
        Bg: function () {
          return s;
        },
        Pb: function () {
          return u;
        },
        T4: function () {
          return f;
        },
        Y0: function () {
          return c;
        },
        oH: function () {
          return o;
        },
        r$: function () {
          return a;
        },
        vV: function () {
          return d;
        },
        xz: function () {
          return l;
        },
      }),
        r(16835);
      var n = r(48911),
        i = r.n(n);
      let s = (e) =>
          i()(
            (null == e ? void 0 : e.filter((e) => e.endsWith('option')).map((e) => (e = e.replace(' option', '')))) ||
              [],
          ),
        l = (e) =>
          e
            ? ''
                .concat(e.getHours(), ':')
                .concat(10 > e.getMinutes() ? '0' : '')
                .concat(e.getMinutes())
            : '',
        o = (e) => '' === e.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
        c = (e) => '' === e.trim() || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(e),
        a = (e) => /^(\d[- ]?){12}\d$/.test(e),
        u = (e) => '' !== e.trim(),
        d = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
        f = (e) => (e ? Math.round(Number(e)).toLocaleString('en-US').replace(/,/g, '.') : '0');
    },
    50940: function (e, t, r) {
      'use strict';
      r.d(t, {
        A0: function () {
          return u;
        },
        A7: function () {
          return c;
        },
        Fm: function () {
          return a;
        },
        LU: function () {
          return d;
        },
        Oq: function () {
          return o;
        },
        dl: function () {
          return l;
        },
        eU: function () {
          return s;
        },
        fk: function () {
          return i;
        },
      });
      let n = (e) => {
          try {
            let t = JSON.parse(e);
            if (t && 'object' == typeof t) return t;
          } catch (e) {
            return null;
          }
          return e;
        },
        i = () => n(localStorage.getItem('basket') || '') || { orderItems: [] },
        s = () => {
          {
            let e = n(localStorage.getItem('dietaryRestrictions') || '');
            return Array.isArray(e) ? e : [];
          }
        },
        l = () => {
          localStorage.removeItem('dietaryRestrictions');
        },
        o = () => {
          {
            let e = n(localStorage.getItem('protein') || '');
            return Array.isArray(e) ? e : [];
          }
        },
        c = () => {
          localStorage.removeItem('protein');
        },
        a = () => {
          localStorage.removeItem('basket');
        },
        u = () => localStorage.getItem('table_id'),
        d = () => {
          localStorage.removeItem('table_id');
        };
    },
    35067: function () {},
  },
]);
