(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1693],
  {
    11102: function (e, i, t) {
      Promise.resolve().then(t.bind(t, 13640));
    },
    13640: function (e, i, t) {
      'use strict';
      t.r(i),
        t.d(i, {
          default: function () {
            return h;
          },
        });
      var s = t(57437),
        l = t(90601),
        n = t(29340),
        d = t(72336),
        r = t(20791),
        c = t(6779),
        a = t(97500),
        o = t.n(a),
        u = t(24033),
        x = t(2265),
        v = (e) => {
          var i;
          let { className: t, receiptData: l, isLoading: a } = e,
            [v, m] = (0, x.useState)(!1),
            h = (0, u.useRouter)(),
            f = (0, u.useSearchParams)().get('bill_id'),
            j = (null == l ? void 0 : l.total_discount) || 0,
            p = null == l ? void 0 : l.sub_total,
            b = null == l ? void 0 : l.service_charge,
            _ = null == l ? void 0 : l.vat_charge,
            y = null == l ? void 0 : l.discount_info,
            N = y
              ? (null == y ? void 0 : y.type) === 'FIXED_AMOUNT'
                ? 'VND'.concat((0, c.T4)(null == y ? void 0 : y.value))
                : ''.concat(null == y ? void 0 : y.value, '%')
              : null,
            k = [];
          if ((null == l ? void 0 : l.orders.length) > 0)
            for (let e of null == l ? void 0 : l.orders) for (let i of null == e ? void 0 : e.items) k.push(i);
          return (0, s.jsx)('div', {
            className: ''.concat(t || '', ' px-6 pt-[13px]'),
            id: 'receipt',
            children:
              a || v
                ? (0, s.jsx)(n.Z, {})
                : (0, s.jsxs)('div', {
                    children: [
                      (null == l ? void 0 : l.feedback_info)
                        ? (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsxs)('div', {
                                className: 'font-medium text-black-500 text-[28px] text-center mb-3',
                                children: ['All settled, ', null == l ? void 0 : l.customer_name],
                              }),
                              (0, s.jsxs)('div', {
                                className: 'text-black-500 text-[18px] text-center mb-4',
                                children: [
                                  'Thank you so much for visiting us,',
                                  (0, s.jsx)('br', {}),
                                  'and thank you for sharing your thoughts!',
                                ],
                              }),
                            ],
                          })
                        : (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsxs)('div', {
                                className: 'font-medium text-black-500 text-[28px] text-center mb-3',
                                children: ['All settled, ', null == l ? void 0 : l.customer_name, ' \uD83D\uDE4F'],
                              }),
                              (0, s.jsxs)('div', {
                                className: 'text-black-500 text-[18px] text-center mb-4',
                                children: [
                                  'Thank you so much for visiting us.',
                                  (0, s.jsx)('br', {}),
                                  'How was your overall experience today?',
                                ],
                              }),
                              (0, s.jsx)('div', {
                                className: 'flex items-center justify-center',
                                children: (0, s.jsx)(r.Z, {
                                  onRateChange: (e) => {
                                    m(!0), h.push('/feedback?bill_id='.concat(f, '&stars=').concat(e));
                                  },
                                  value:
                                    null == l
                                      ? void 0
                                      : null === (i = l.feedback_info) || void 0 === i
                                        ? void 0
                                        : i.stars,
                                }),
                              }),
                            ],
                          }),
                      (0, s.jsx)('div', {
                        className: 'flex font-medium text-black-400 mt-[30px]',
                        children: ' Order summary ',
                      }),
                      null == k
                        ? void 0
                        : k.map((e, i) => {
                            var t;
                            return (0, s.jsxs)(
                              'div',
                              {
                                className: 'mt-[20px]',
                                children: [
                                  (0, s.jsx)(d.Z, {
                                    name:
                                      null == e
                                        ? void 0
                                        : null === (t = e.product_info) || void 0 === t
                                          ? void 0
                                          : t.name,
                                    price: null == e ? void 0 : e.price,
                                    priceAfterDiscount: null == e ? void 0 : e.total_price_product_after_discount,
                                    image_url: null == e ? void 0 : e.image_url,
                                    quantity: null == e ? void 0 : e.quantity,
                                    modifiers: null == e ? void 0 : e.modifiers_info,
                                    note: (null == e ? void 0 : e.notes) || void 0,
                                    dietary_restrictions: (null == e ? void 0 : e.dietary_requests) || [],
                                  }),
                                  (0, s.jsx)('hr', { className: 'w-full border-t border-black-100 mt-[20px]' }),
                                ],
                              },
                              i,
                            );
                          }),
                      (0, s.jsxs)('div', {
                        className: 'mt-[20px] ml-[108px] pb-[40px]',
                        children: [
                          (0, s.jsxs)('div', {
                            className: 'text-[13px] text-black-500 space-y-[3px] '.concat(o().className),
                            children: [
                              j > 0 &&
                                (0, s.jsxs)('div', {
                                  className: 'flex items-center justify-between ',
                                  children: [
                                    (0, s.jsxs)('span', { children: [N, ' Discount '] }),
                                    (0, s.jsxs)('span', { children: ['-', (0, c.T4)(j)] }),
                                  ],
                                }),
                              (0, s.jsxs)('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  (0, s.jsx)('div', { children: ' Subtotal ' }),
                                  (0, s.jsxs)('div', { children: [' ', (0, c.T4)(p), ' '] }),
                                ],
                              }),
                              (0, s.jsxs)('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  (0, s.jsx)('div', { children: ' 10% Service Charge ' }),
                                  (0, s.jsxs)('div', { children: [' ', (0, c.T4)(b), ' '] }),
                                ],
                              }),
                              (0, s.jsxs)('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  (0, s.jsx)('div', { children: ' 7% VAT ' }),
                                  (0, s.jsxs)('div', { children: [' ', (0, c.T4)(_), ' '] }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)('div', {
                            className: 'text-[18px] flex items-center mt-[7px] justify-between ',
                            children: [
                              (0, s.jsx)('div', { children: ' Total ' }),
                              (0, s.jsxs)('div', { children: [' ', (0, c.T4)(null == l ? void 0 : l.total), ' '] }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
          });
        },
        m = t(64308),
        h = () => {
          let e = (0, u.useRouter)(),
            i = (0, u.useSearchParams)().get('bill_id'),
            { data: t, isFetching: n } = (0, m.LJ)({ id: i || '' }),
            d = (0, s.jsx)('div', { children: (0, s.jsx)('span', { children: 'Start ordering again ' }) });
          return (0, s.jsx)(l.Z, {
            isShowPrimaryButton: !1,
            onClickDownBtn: () => e.push('/receipt/receipt-download?bill_id='.concat(i)),
            isShowBackBtn: !1,
            secondaryBtnChildren: d,
            onClickSecondaryBtn: () => e.push('/menu'),
            title: 'Receipt',
            children: (0, s.jsx)(v, { receiptData: null == t ? void 0 : t.data, isLoading: n }),
          });
        };
    },
  },
  function (e) {
    e.O(
      0,
      [
        4872, 2598, 8809, 5687, 2379, 9810, 8863, 6691, 6394, 4494, 6758, 2077, 3172, 4229, 8089, 4440, 1198, 791, 2971,
        4938, 1744,
      ],
      function () {
        return e((e.s = 11102));
      },
    ),
      (_N_E = e.O());
  },
]);
