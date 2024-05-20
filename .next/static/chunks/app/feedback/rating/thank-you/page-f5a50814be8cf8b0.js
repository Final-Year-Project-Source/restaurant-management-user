(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8530],
  {
    14490: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(13428),
        l = n(2265),
        i = {
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
        a = l.forwardRef(function (e, t) {
          return l.createElement(s.Z, (0, r.Z)({}, e, { ref: t, icon: i }));
        });
    },
    38364: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 89672));
    },
    89672: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(57437),
        l = n(90601),
        i = n(29340),
        s = n(64308),
        a = n(24033);
      t.default = () => {
        let e = (0, a.useRouter)(),
          t = (0, a.useSearchParams)().get('bill_id'),
          { data: n, isFetching: o } = (0, s.LJ)({ id: t || '' }),
          c = null == n ? void 0 : n.data,
          u = (0, r.jsxs)('div', {
            className: 'px-6 pt-[13px]',
            children: [
              (0, r.jsxs)('div', {
                className: 'font-medium text-black-500 text-[24px] text-center mb-3',
                children: ['Thank you, ', null == c ? void 0 : c.customer_name, ' \uD83D\uDE4F'],
              }),
              (0, r.jsx)('div', {
                className: 'text-black-500 text-[14px] text-center mb-4',
                children: 'We’ll be in touch soon!',
              }),
            ],
          }),
          d = (0, r.jsx)('div', { children: (0, r.jsx)('span', { children: 'Start ordering again ' }) });
        return (0, r.jsx)(l.Z, {
          isShowPrimaryButton: !1,
          isShowBackBtn: !0,
          onClickBackBtn: () => {
            e.push('/receipt?bill_id='.concat(t));
          },
          primaryBtnChildren: 'Order something else',
          secondaryBtnChildren: d,
          onClickSecondaryBtn: () => e.push('/menu'),
          title: 'Feedback',
          children: o ? (0, r.jsx)(i.Z, {}) : u,
        });
      };
    },
    29340: function (e, t, n) {
      'use strict';
      var r = n(57437),
        l = n(91623),
        i = n(59810);
      t.Z = () =>
        (0, r.jsx)(l.ZP, {
          theme: { token: { colorPrimary: '#131C16' } },
          children: (0, r.jsx)(i.Z, {
            className: '!fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 black-500',
            size: 'large',
          }),
        });
    },
    76158: function (e, t, n) {
      'use strict';
      n.d(t, {
        hU: function () {
          return i.Z;
        },
        r: function () {
          return l.Z;
        },
        zx: function () {
          return r.Z;
        },
      });
      var r = n(4696);
      n(16223);
      var l = n(55261),
        i = n(86550);
    },
    11425: function (e, t, n) {
      'use strict';
      n.d(t, {
        I: function () {
          return l;
        },
      });
      var r = n(2265);
      function l(e) {
        let [t, n] = (0, r.useState)(!1),
          [l, i] = (0, r.useState)(!1),
          [s, a] = (0, r.useState)(0),
          [o, c] = (0, r.useState)(0),
          u = (0, r.useCallback)(() => {
            let t = null == e ? void 0 : e.current;
            t &&
              (n(t.scrollHeight > t.clientHeight),
              i(t.scrollWidth > t.clientWidth),
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
          { isVerticalScroll: t, isHorizontalScroll: l, scrollTop: s, scrollBottom: o }
        );
      }
    },
    90850: function (e, t, n) {
      'use strict';
      var r = n(57437),
        l = n(76158);
      t.Z = (e) => {
        let {
          isShowPrimaryButton: t = !1,
          primaryBtnChildren: n,
          secondaryBtnChildren: i,
          disabledPrimary: s,
          disabledSecondary: a,
          onClickPrimaryBtn: o,
          onClickSecondaryBtn: c,
          isTextRequestTaxInvoice: u,
          className: d,
        } = e;
        return (0, r.jsxs)('div', {
          className: ''.concat(d || '', ' w-full fixed flex flex-col space-y-3 bottom-0 bg-grey-100 px-6 py-3 z-999'),
          children: [
            u &&
              (0, r.jsx)('div', {
                className: 'text-[14px] text-black-500 text-center mb-2',
                children:
                  'Once you request the tax invoice, a member of our staff will print it off, sign, and hand it to you.',
              }),
            t && (0, r.jsx)(l.zx, { variant: 'primary', disabled: s, onClick: o, children: n }),
            (0, r.jsx)(l.zx, { variant: 'secondary', disabled: a, onClick: c, children: i }),
          ],
        });
      };
    },
    90601: function (e, t, n) {
      'use strict';
      var r = n(57437),
        l = n(24033),
        i = n(2265),
        s = n(76158),
        a = n(11425),
        o = n(35414),
        c = n(90850);
      t.Z = (e) => {
        let {
            isShowBackBtn: t = !0,
            title: n,
            isTextRequestTaxInvoice: u,
            children: d,
            disabledPrimary: f,
            disabledSecondary: h,
            onClickSecondaryBtn: x,
            secondaryBtnChildren: m,
            onClickPrimaryBtn: v,
            primaryBtnChildren: p,
            isShowPrimaryButton: b,
            onClickBackBtn: y,
            onClickDownBtn: g,
            disabledBackBtn: j,
            isHiddenAvatar: k = !1,
          } = e,
          B = (0, i.useRef)(null),
          { scrollTop: T, scrollBottom: w } = (0, a.I)(B);
        (0, l.useRouter)();
        let C = (0, i.useMemo)(() => (b ? '243px' : u ? '211px' : '170px'), [b, u]);
        return (0, r.jsxs)('div', {
          className: 'flex flex-col h-screen',
          children: [
            (0, r.jsxs)('div', {
              className: ''
                .concat(
                  T - 13 > 0 ? 'shadow-medium-bottom' : '',
                  ' relative w-full pt-[22px] pb-[15px] flex flex-row items-center ',
                )
                .concat(t ? 'justify-start pl-4' : 'justify-end pr-4'),
              children: [
                t && (0, r.jsx)(s.hU, { icon: (0, r.jsx)(o.Y4, {}), disabled: j, onClick: y }),
                (0, r.jsx)('span', {
                  className:
                    'w-[calc(100%-8rem)] absolute top-[40%] right-1/2 transform translate-x-1/2 text-center text-xl font-medium text-black-500',
                  children: n,
                }),
                !t && (0, r.jsx)(s.hU, { icon: (0, r.jsx)(o._8, {}), onClick: g }),
              ],
            }),
            (0, r.jsx)('div', { ref: B, className: 'overflow-y-auto max-h-screen-'.concat(C), children: d }),
            (0, r.jsx)(c.Z, {
              className: w - 40 > 0 ? 'shadow-medium-top' : '',
              disabledPrimary: f,
              disabledSecondary: h,
              isTextRequestTaxInvoice: u,
              isShowPrimaryButton: b,
              onClickPrimaryBtn: v,
              primaryBtnChildren: p,
              onClickSecondaryBtn: x,
              secondaryBtnChildren: m,
            }),
          ],
        });
      };
    },
    64308: function (e, t, n) {
      'use strict';
      n.d(t, {
        LJ: function () {
          return a;
        },
        QC: function () {
          return i;
        },
        db: function () {
          return d;
        },
        kX: function () {
          return f;
        },
        oQ: function () {
          return o;
        },
        w2: function () {
          return c;
        },
      });
      var r = n(85687),
        l = n(40329);
      let i = (0, r.LC)({
          reducerPath: 'billApi',
          refetchOnFocus: !0,
          baseQuery: (0, l.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
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
          useGetBillsQuery: s,
          useGetSingleBillQuery: a,
          useUpdateBillMutation: o,
          useAddBillMutation: c,
          useDeleteBillMutation: u,
          useCreateFeedbackMutation: d,
          useCreateTaxInvoiceMutation: f,
        } = i;
    },
  },
  function (e) {
    e.O(0, [4872, 2598, 8809, 5687, 9810, 4440, 2971, 4938, 1744], function () {
      return e((e.s = 38364));
    }),
      (_N_E = e.O());
  },
]);
