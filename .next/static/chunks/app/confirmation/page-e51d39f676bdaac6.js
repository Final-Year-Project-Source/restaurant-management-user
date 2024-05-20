(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9123],
  {
    8619: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 41649));
    },
    41649: function (e, t, n) {
      'use strict';
      n.r(t);
      var i = n(57437),
        l = n(90601),
        s = n(72336),
        a = n(16011),
        r = n(83605),
        d = n(97500),
        o = n.n(d),
        c = n(24033),
        u = n(2265),
        m = n(93046),
        v = n(29340),
        x = n(64308),
        h = n(6779);
      t.default = () => {
        var e, t;
        let n = (0, c.useRouter)(),
          d = (0, c.useSearchParams)(),
          [p, f] = (0, u.useState)(!1),
          y = d.get('bill_id'),
          { data: _, isFetching: b } = (0, x.LJ)({ id: y || '' });
        (0, u.useEffect)(() => {
          f(!1);
        }, []);
        let [j, { isLoading: N }] = (0, r.BP)(),
          k = null == _ ? void 0 : _.data,
          g = (null == k ? void 0 : k.total_discount) || 0,
          P = null == k ? void 0 : k.sub_total,
          T = null == k ? void 0 : k.service_charge,
          S = null == k ? void 0 : k.vat_charge,
          w = null == k ? void 0 : k.discount_info,
          B = w
            ? 'FIXED_AMOUNT' === w.type
              ? ''.concat((0, h.T4)(null == w ? void 0 : w.value), ' VND')
              : ''.concat(null == w ? void 0 : w.value, '%')
            : null,
          C = (0, m.I0)(),
          q = [];
        if ((null == k ? void 0 : null === (e = k.orders) || void 0 === e ? void 0 : e.length) > 0)
          for (let e of null == k ? void 0 : k.orders) for (let t of null == e ? void 0 : e.items) q.push(t);
        let O = (0, i.jsx)('div', {
            className: 'px-4 pt-[13px] max-h-[var(--100vh)]',
            children:
              (null == k ? void 0 : null === (t = k.orders) || void 0 === t ? void 0 : t.length) > 0 &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)('div', {
                    className: 'text-center text-[24px] font-medium text-black-500',
                    children: ['We’ve got your order, ', null == k ? void 0 : k.customer_name],
                  }),
                  (0, i.jsx)('div', {
                    className: 'text-center text-[14px] text-black-500 mt-[12px]',
                    children: 'Speak to one of our team members if you have any questions about your order.',
                  }),
                  (0, i.jsx)('div', {
                    className: 'flex font-medium text-black-400 mt-[30px]',
                    children: 'Order summary',
                  }),
                  null == q
                    ? void 0
                    : q.map((e, t) => {
                        var n;
                        return (0, i.jsxs)(
                          'div',
                          {
                            className: 'mt-[20px]',
                            children: [
                              (0, i.jsx)(s.Z, {
                                name:
                                  null == e ? void 0 : null === (n = e.product_info) || void 0 === n ? void 0 : n.name,
                                price: null == e ? void 0 : e.price,
                                priceAfterDiscount: null == e ? void 0 : e.total_price_product_after_discount,
                                image_url: null == e ? void 0 : e.image_url,
                                quantity: null == e ? void 0 : e.quantity,
                                modifiers: null == e ? void 0 : e.modifiers_info,
                                note: (null == e ? void 0 : e.notes) || void 0,
                                dietary_restrictions: (null == e ? void 0 : e.dietary_requests) || [],
                              }),
                              (0, i.jsx)('hr', { className: 'w-full border-t border-black-100 mt-[18px] mb-[22px]' }),
                            ],
                          },
                          t,
                        );
                      }),
                  (0, i.jsxs)('div', {
                    className: 'ml-[108px] pb-[40px]',
                    children: [
                      (0, i.jsxs)('div', {
                        className: 'text-[10px] text-black-500 space-y-[3px] '.concat(o().className),
                        children: [
                          g > 0 &&
                            (0, i.jsxs)('div', {
                              className: 'flex items-center justify-between ',
                              children: [
                                (0, i.jsxs)('span', { children: [B, ' Discount '] }),
                                (0, i.jsxs)('span', { children: ['-', (0, h.T4)(g)] }),
                              ],
                            }),
                          (0, i.jsxs)('div', {
                            className: 'flex items-center justify-between',
                            children: [
                              (0, i.jsx)('div', { children: ' Subtotal ' }),
                              (0, i.jsxs)('div', { children: [' ', (0, h.T4)(P), ' '] }),
                            ],
                          }),
                          (0, i.jsxs)('div', {
                            className: 'flex items-center justify-between',
                            children: [
                              (0, i.jsx)('div', { children: ' 10% Service Charge ' }),
                              (0, i.jsxs)('div', { children: [' ', (0, h.T4)(T), ' '] }),
                            ],
                          }),
                          (0, i.jsxs)('div', {
                            className: 'flex items-center justify-between',
                            children: [
                              (0, i.jsx)('div', { children: ' 7% VAT ' }),
                              (0, i.jsxs)('div', { children: [' ', (0, h.T4)(S), ' '] }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)('div', {
                        className: 'text-[14px] flex items-center mt-[7px] justify-between',
                        children: [
                          (0, i.jsx)('div', { children: ' Total ' }),
                          (0, i.jsxs)('div', { children: [' ', (0, h.T4)(null == k ? void 0 : k.total), ' '] }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          }),
          E = (0, i.jsxs)('div', {
            children: [
              (0, i.jsx)('span', { children: 'Pay now ' }),
              ' ',
              (0, i.jsxs)('span', {
                className: 'font-normal',
                children: ['・ Total ', (0, h.T4)(null == k ? void 0 : k.total)],
              }),
            ],
          });
        return (
          (0, u.useEffect)(() => {
            C((0, a.ZW)());
          }, [C]),
          (0, i.jsxs)(l.Z, {
            disabledPrimary: b || N || p,
            disabledSecondary: b || N || p,
            disabledBackBtn: b || N || p,
            isShowPrimaryButton: !0,
            isShowBackBtn: !0,
            onClickBackBtn: () => n.push(y ? '/basket?bill_id='.concat(y) : '/basket'),
            primaryBtnChildren: 'Order something else',
            onClickPrimaryBtn: () => n.push(y ? '/menu?bill_id='.concat(y) : '/menu'),
            secondaryBtnChildren: E,
            onClickSecondaryBtn: () => {
              j({ data: { bill_id: y } })
                .unwrap()
                .then((e) => {
                  f(!0), C((0, a.ZW)()), n.push(''.concat(e.data.checkoutUrl));
                });
            },
            title: 'Confirmation',
            children: [(b || N || p) && (0, i.jsx)(v.Z, {}), O],
          })
        );
      };
    },
    83605: function (e, t, n) {
      'use strict';
      n.d(t, {
        BP: function () {
          return d;
        },
        Yw: function () {
          return s;
        },
      });
      var i = n(85687),
        l = n(40329);
      let s = (0, i.LC)({
          reducerPath: 'paymentApi',
          refetchOnFocus: !0,
          baseQuery: (0, l.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
          tagTypes: ['Payment'],
          endpoints: (e) => ({
            getPayments: e.query({ query: () => 'payment', providesTags: ['Payment'] }),
            getSinglePayment: e.query({
              query: (e) => {
                let { id: t } = e;
                return 'payment?id='.concat(t);
              },
              providesTags: ['Payment'],
            }),
            createPayment: e.mutation({
              query: (e) => {
                let { data: t } = e;
                return { url: 'payment', method: 'POST', body: t };
              },
              invalidatesTags: ['Payment'],
            }),
          }),
        }),
        { useGetPaymentsQuery: a, useGetSinglePaymentQuery: r, useCreatePaymentMutation: d } = s;
    },
    97500: function (e) {
      e.exports = {
        style: { fontFamily: "'__Open_Sans_63ca04', '__Open_Sans_Fallback_63ca04'", fontStyle: 'normal' },
        className: '__className_63ca04',
        variable: '__variable_63ca04',
      };
    },
  },
  function (e) {
    e.O(
      0,
      [4872, 2598, 8809, 5687, 2379, 9810, 6691, 6394, 4494, 2077, 3172, 4229, 4440, 1198, 2971, 4938, 1744],
      function () {
        return e((e.s = 8619));
      },
    ),
      (_N_E = e.O());
  },
]);
