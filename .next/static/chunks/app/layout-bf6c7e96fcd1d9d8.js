(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    80651: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 60171)),
        Promise.resolve().then(r.t.bind(r, 88062, 23)),
        Promise.resolve().then(r.t.bind(r, 87295, 23)),
        Promise.resolve().then(r.t.bind(r, 97500, 23)),
        Promise.resolve().then(r.bind(r, 96101)),
        Promise.resolve().then(r.bind(r, 63644)),
        Promise.resolve().then(r.bind(r, 76202)),
        Promise.resolve().then(r.t.bind(r, 51359, 23));
    },
    96101: function (e, t, r) {
      'use strict';
      r.r(t);
      var n = r(57437),
        a = r(82749),
        o = r(2265);
      t.default = function (e) {
        let { children: t } = e,
          r = (0, o.useCallback)(() => {
            let e = window.innerHeight;
            document.documentElement.style.setProperty('--100vh', ''.concat(e, 'px'));
          }, []);
        return (
          (0, o.useEffect)(
            () => (
              r(),
              window.addEventListener('resize', r),
              () => {
                window.removeEventListener('resize', r);
              }
            ),
            [r],
          ),
          (0, n.jsx)(a.SessionProvider, { children: t })
        );
      };
    },
    16835: function (e, t, r) {
      'use strict';
      var n, a, o, i, u, s;
      r.d(t, {
        Nv: function () {
          return a;
        },
        uH: function () {
          return o;
        },
      }),
        ((i = n || (n = {})).ADMIN = 'ADMIN'),
        (i.STAFF = 'STAFF'),
        ((u = a || (a = {})).ADD = '+'),
        (u.SUB = '-'),
        (u.EQUAL = '='),
        ((s = o || (o = {})).FIXED_PERCENT = 'FIXED_PERCENT'),
        (s.FIXED_AMOUNT = 'FIXED_AMOUNT');
    },
    63644: function (e, t, r) {
      'use strict';
      r.r(t);
      var n = r(57437),
        a = r(2265),
        o = r(89426),
        i = r(24033);
      t.default = (e) => {
        let { children: t } = e,
          r = a.useMemo(() => (0, o.Df)(), []),
          u = a.useRef(!1);
        return (
          (0, i.useServerInsertedHTML)(() => {
            if (!u.current)
              return (
                (u.current = !0),
                (0, n.jsx)('style', { id: 'antd', dangerouslySetInnerHTML: { __html: (0, o.EN)(r, !0) } })
              );
          }),
          (0, n.jsx)(o.V9, { cache: r, children: t })
        );
      };
    },
    16011: function (e, t, r) {
      'use strict';
      r.d(t, {
        Wf: function () {
          return c;
        },
        ZW: function () {
          return l;
        },
      });
      var n = r(16835),
        a = r(50940),
        o = r(73135),
        i = r(42077),
        u = r.n(i);
      let s = { basket: (0, a.fk)() },
        d = (0, o.oM)({
          name: 'basket',
          initialState: s,
          reducers: {
            reset: (e) => {
              (e.basket = null), (0, a.Fm)();
            },
            update: (e, t) => {
              var r, a, o;
              let i = e.basket || { orderItems: [] };
              if (!t.payload) return;
              let { quantity: s, operator: d, product: c, notes: l, modifiers: y, dietary_restrictions: p } = t.payload,
                m =
                  null == i
                    ? void 0
                    : null === (r = i.orderItems) || void 0 === r
                      ? void 0
                      : r.findIndex((e) => {
                          var t;
                          return (
                            (null == e ? void 0 : null === (t = e.product) || void 0 === t ? void 0 : t.id) === c.id &&
                            u()((null == e ? void 0 : e.dietary_restrictions) || [], p || []) &&
                            u()((null == e ? void 0 : e.notes) || '', l || '') &&
                            u()((null == e ? void 0 : e.modifiers) || [], y || [])
                          );
                        });
              m > -1 &&
              (!y ||
                u()(null === (a = i.orderItems[m]) || void 0 === a ? void 0 : a.modifiers, y) ||
                !p ||
                u()(null === (o = i.orderItems[m]) || void 0 === o ? void 0 : o.dietary_restrictions, p) ||
                !l ||
                u()(i.orderItems[m].notes, l))
                ? 0 === s
                  ? i.orderItems.splice(m, 1)
                  : d === n.Nv.ADD
                    ? (i.orderItems[m].quantity += s)
                    : d === n.Nv.SUB
                      ? (i.orderItems[m].quantity -= s)
                      : d === n.Nv.EQUAL && (i.orderItems[m].quantity = s)
                : i.orderItems.push({
                    product: c,
                    notes: l || '',
                    modifiers: y || [],
                    quantity: s,
                    dietary_restrictions: p || [],
                  });
              let h = { ...i };
              localStorage.setItem('basket', JSON.stringify(h)), (e.basket = h);
            },
          },
        }),
        { update: c, reset: l } = d.actions;
      t.ZP = d.reducer;
    },
    33722: function (e, t, r) {
      'use strict';
      r.d(t, {
        BE: function () {
          return s;
        },
        dL: function () {
          return u;
        },
      });
      var n = r(73135),
        a = r(50940);
      let o = { protein: (0, a.Oq)(), dietaryRestrictions: (0, a.eU)() },
        i = (0, n.oM)({
          name: 'menuFilter',
          initialState: o,
          reducers: {
            updateProtein: (e, t) => {
              (e.protein = t.payload), localStorage.setItem('protein', JSON.stringify(t.payload));
            },
            updateDietaryRestrictions: (e, t) => {
              (e.dietaryRestrictions = t.payload),
                localStorage.setItem('dietaryRestrictions', JSON.stringify(t.payload));
            },
            resetMenuFilter: (e) => {
              (e.protein = []), (e.dietaryRestrictions = []), (0, a.dl)(), (0, a.A7)();
            },
          },
        }),
        { updateProtein: u, updateDietaryRestrictions: s, resetMenuFilter: d } = i.actions;
      t.ZP = i.reducer;
    },
    86759: function (e, t, r) {
      'use strict';
      r.d(t, {
        qB: function () {
          return s;
        },
        x: function () {
          return u;
        },
      });
      var n = r(73135),
        a = r(50940);
      let o = { tableId: (0, a.A0)() },
        i = (0, n.oM)({
          name: 'table',
          initialState: o,
          reducers: {
            setTable: (e, t) => {
              (e.tableId = t.payload), localStorage.setItem('table_id', t.payload);
            },
            removeTable: (e) => {
              (e.tableId = ''), (0, a.LU)();
            },
          },
        }),
        { setTable: u, removeTable: s } = i.actions;
      t.ZP = i.reducer;
    },
    76202: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          Providers: function () {
            return z;
          },
        });
      var n = r(57437),
        a = r(2265),
        o = r(33722),
        i = r(86759),
        u = r(73135),
        s = r(16011),
        d = r(80811),
        c = r(85363),
        l = r(85687),
        y = r(40329);
      let p = (0, l.LC)({
          reducerPath: 'customerApi',
          refetchOnFocus: !0,
          baseQuery: (0, y.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
          tagTypes: ['Customer'],
          endpoints: (e) => ({
            getCustomers: e.query({
              query: (e) => {
                let { access_token: t } = e;
                return {
                  url: 'customer',
                  method: 'GET',
                  headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '.concat(t) },
                };
              },
              providesTags: ['Customer'],
            }),
            getSingleCustomer: e.query({ query: (e) => 'customer?id='.concat(e.id), providesTags: ['Customer'] }),
            addCustomer: e.mutation({
              query: (e) => {
                let { data: t } = e;
                return { url: 'customer', method: 'POST', body: { data: t } };
              },
              invalidatesTags: ['Customer'],
            }),
            updateCustomer: e.mutation({
              query: (e) => {
                let { access_token: t, data: r } = e;
                return {
                  url: 'customer',
                  method: 'PATCH',
                  body: { data: r },
                  headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '.concat(t) },
                };
              },
              invalidatesTags: ['Customer'],
            }),
            deleteCustomer: e.mutation({
              query: (e) => {
                let { data: t, access_token: r } = e;
                return {
                  url: 'customer?id='.concat(t.id),
                  method: 'DELETE',
                  body: { data: t },
                  headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '.concat(r) },
                };
              },
              invalidatesTags: ['Customer'],
            }),
          }),
        }),
        {
          useGetCustomersQuery: m,
          useGetSingleCustomerQuery: h,
          useUpdateCustomerMutation: g,
          useAddCustomerMutation: T,
          useDeleteCustomerMutation: v,
        } = p;
      var f = r(91637);
      let b = (0, l.LC)({
          reducerPath: 'modifierApi',
          refetchOnFocus: !0,
          baseQuery: (0, y.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
          tagTypes: ['Modifier'],
          endpoints: (e) => ({
            getModifiers: e.query({ query: () => 'modifier', providesTags: ['Modifier'] }),
            getSingleModifier: e.query({ query: (e) => 'modifier?id='.concat(e), providesTags: ['Modifier'] }),
          }),
        }),
        { useGetModifiersQuery: q, useGetSingleModifierQuery: P } = b,
        C = (0, l.LC)({
          reducerPath: 'orderApi',
          refetchOnFocus: !0,
          baseQuery: (0, y.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
          tagTypes: ['Order'],
          endpoints: (e) => ({
            getOrders: e.query({
              query: (e) => {
                let { access_token: t } = e;
                return {
                  url: 'order',
                  method: 'GET',
                  headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '.concat(t) },
                };
              },
              providesTags: ['Order'],
            }),
            getSingleOrder: e.query({ query: (e) => 'order?id='.concat(e.id), providesTags: ['Order'] }),
            addOrder: e.mutation({
              query: (e) => {
                let { data: t } = e;
                return { url: 'order', method: 'POST', body: { data: t } };
              },
              invalidatesTags: ['Order'],
            }),
            updateOrder: e.mutation({
              query: (e) => {
                let { data: t } = e;
                return {
                  url: 'order',
                  method: 'PUT',
                  body: { data: t },
                  headers: { 'Content-Type': 'application/json' },
                };
              },
              invalidatesTags: ['Order'],
            }),
            deleteOrder: e.mutation({
              query: (e) => {
                let { data: t, access_token: r } = e;
                return {
                  url: 'order?id='.concat(t.id),
                  method: 'DELETE',
                  body: { data: t },
                  headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '.concat(r) },
                };
              },
              invalidatesTags: ['Order'],
            }),
            createReceiptForCounting: e.mutation({
              query: (e) => {
                let { data: t } = e;
                return { url: 'receipt', method: 'POST', body: { data: t } };
              },
              invalidatesTags: ['Order'],
            }),
            createFeedback: e.mutation({
              query: (e) => {
                let { data: t } = e;
                return { url: 'feedback', method: 'POST', body: { data: t } };
              },
              invalidatesTags: ['Order'],
            }),
          }),
        }),
        {
          useGetOrdersQuery: S,
          useGetSingleOrderQuery: _,
          useUpdateOrderMutation: O,
          useAddOrderMutation: F,
          useDeleteOrderMutation: A,
          useCreateFeedbackMutation: I,
          useCreateReceiptForCountingMutation: k,
        } = C;
      var E = r(83605),
        U = r(18968),
        w = r(66693);
      let j = (0, l.LC)({
          reducerPath: 'userApi',
          refetchOnFocus: !0,
          baseQuery: (0, y.ni)({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
          endpoints: (e) => ({
            getUsers: e.query({ query: () => 'users' }),
            getUserById: e.query({
              query: (e) => {
                let { id: t } = e;
                return 'users/'.concat(t);
              },
            }),
          }),
        }),
        { useGetUsersQuery: L, useGetUserByIdQuery: B } = j,
        D = (0, l.LC)({
          reducerPath: 'taxInvoiceApi',
          refetchOnFocus: !0,
          baseQuery: (0, y.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
          tagTypes: ['Tax Invoice'],
          endpoints: (e) => ({
            getTaxInvoices: e.query({
              query: (e) => {
                let { access_token: t } = e;
                return {
                  url: 'taxinvoice',
                  method: 'GET',
                  headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '.concat(t) },
                };
              },
              providesTags: ['Tax Invoice'],
            }),
            getSingleTaxInvoice: e.query({
              query: (e) => {
                let { id: t } = e;
                return 'taxinvoice?id='.concat(t);
              },
              providesTags: ['Tax Invoice'],
            }),
          }),
        }),
        { useGetTaxInvoicesQuery: N, useGetSingleTaxInvoiceQuery: R } = D;
      var x = r(64308),
        Q = r(48144);
      let M = () =>
        (0, u.xC)({
          reducer: {
            basketReducer: s.ZP,
            tableReducer: i.ZP,
            menuFilterReducer: o.ZP,
            [j.reducerPath]: j.reducer,
            [U.Fr.reducerPath]: U.Fr.reducer,
            [b.reducerPath]: b.reducer,
            [c.rj.reducerPath]: c.rj.reducer,
            [f.Y5.reducerPath]: f.Y5.reducer,
            [w.kw.reducerPath]: w.kw.reducer,
            [C.reducerPath]: C.reducer,
            [p.reducerPath]: p.reducer,
            [E.Yw.reducerPath]: E.Yw.reducer,
            [d.m$.reducerPath]: d.m$.reducer,
            [D.reducerPath]: D.reducer,
            [x.QC.reducerPath]: x.QC.reducer,
            [Q.aG.reducerPath]: Q.aG.reducer,
          },
          devTools: !1,
          middleware: (e) =>
            e({}).concat([
              j.middleware,
              U.Fr.middleware,
              b.middleware,
              c.rj.middleware,
              f.Y5.middleware,
              w.kw.middleware,
              C.middleware,
              p.middleware,
              E.Yw.middleware,
              d.m$.middleware,
              D.middleware,
              x.QC.middleware,
            ]),
        });
      var G = r(93046);
      function z(e) {
        let { children: t } = e,
          r = (0, a.useRef)();
        return r.current || (r.current = M()), (0, n.jsx)(G.zt, { store: r.current, children: t });
      }
    },
    64308: function (e, t, r) {
      'use strict';
      r.d(t, {
        LJ: function () {
          return u;
        },
        QC: function () {
          return o;
        },
        db: function () {
          return l;
        },
        kX: function () {
          return y;
        },
        oQ: function () {
          return s;
        },
        w2: function () {
          return d;
        },
      });
      var n = r(85687),
        a = r(40329);
      let o = (0, n.LC)({
          reducerPath: 'billApi',
          refetchOnFocus: !0,
          baseQuery: (0, a.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
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
          useGetBillsQuery: i,
          useGetSingleBillQuery: u,
          useUpdateBillMutation: s,
          useAddBillMutation: d,
          useDeleteBillMutation: c,
          useCreateFeedbackMutation: l,
          useCreateTaxInvoiceMutation: y,
        } = o;
    },
    85363: function (e, t, r) {
      'use strict';
      r.d(t, {
        NL: function () {
          return i;
        },
        rj: function () {
          return o;
        },
      });
      var n = r(85687),
        a = r(40329);
      let o = (0, n.LC)({
          reducerPath: 'categoryApi',
          refetchOnFocus: !0,
          baseQuery: (0, a.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
          endpoints: (e) => ({
            getCategories: e.query({
              query: () => ({ url: 'category', method: 'GET', headers: { 'Content-Type': 'application/json' } }),
            }),
            getAllCategories: e.query({
              query: () => ({
                url: 'category',
                method: 'GET',
                headers: { 'Content-Type': 'application/json', isAll: 'true' },
              }),
            }),
            getCategoriesById: e.query({
              query: (e) => {
                let { access_token: t, id: r } = e;
                return {
                  url: 'category/'.concat(r),
                  method: 'GET',
                  headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '.concat(t) },
                };
              },
            }),
          }),
        }),
        { useGetCategoriesQuery: i, useGetAllCategoriesQuery: u, useGetCategoriesByIdQuery: s } = o;
    },
    91637: function (e, t, r) {
      'use strict';
      r.d(t, {
        $r: function () {
          return u;
        },
        Y5: function () {
          return o;
        },
      });
      var n = r(85687),
        a = r(40329);
      let o = (0, n.LC)({
          reducerPath: 'discountApi',
          refetchOnFocus: !0,
          baseQuery: (0, a.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
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
        { useGetDiscountsQuery: i, useGetSingleDiscountQuery: u } = o;
    },
    48144: function (e, t, r) {
      'use strict';
      r.d(t, {
        $h: function () {
          return p;
        },
        aG: function () {
          return i;
        },
      });
      var n = r(85687),
        a = r(40329),
        o = r(62601);
      let i = (0, n.LC)({
          reducerPath: 'employeeApi',
          refetchOnFocus: !0,
          baseQuery: (0, a.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
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
                let { id: t } = e;
                return { url: 'user/'.concat(t), method: 'GET', headers: { 'Content-Type': 'application/json' } };
              },
              providesTags: ['User'],
            }),
            createNewUser: e.mutation({
              query: (e) => {
                let { data: t } = e;
                return { url: 'user', method: 'POST', body: t, headers: { 'Content-Type': 'application/json' } };
              },
              invalidatesTags: ['User'],
            }),
            deleteUser: e.mutation({
              query: (e) => {
                let { id: t } = e;
                return { url: 'user/'.concat(t), method: 'DELETE', headers: { 'Content-Type': 'application/json' } };
              },
              invalidatesTags: ['User'],
            }),
            changePassword: e.mutation({
              query: (e) => {
                let { email: t, passwordCurrent: r, passwordNew: n } = e;
                return {
                  url: 'auth/change-password',
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: { email: t, passwordCurrent: r, passwordNew: n },
                };
              },
            }),
            reset2FA: e.mutation({
              query: (e) => {
                let { id: t } = e;
                return {
                  url: 'user/'.concat(t),
                  method: 'PATCH',
                  headers: { 'Content-Type': 'application/json' },
                  body: { data: { otp_enabled: !1 } },
                };
              },
              invalidatesTags: ['User'],
            }),
            resetPassword: e.mutation({
              query: (e) => {
                let { id: t } = e;
                return {
                  url: 'user/'.concat(t),
                  method: 'PATCH',
                  headers: { 'Content-Type': 'application/json' },
                  body: { data: { password: ''.concat(o.env.STAFF_DEFAULT_PASSWORD), is_change_default_password: !1 } },
                };
              },
              invalidatesTags: ['User'],
            }),
            updateEmployee: e.mutation({
              query: (e) => {
                let { id: t, data: r } = e;
                return {
                  url: 'user/'.concat(t),
                  method: 'PATCH',
                  headers: { 'Content-Type': 'application/json' },
                  body: r,
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
          useGetSingleUserQuery: u,
          useGetUsersQuery: s,
          useCreateNewUserMutation: d,
          useDeleteUserMutation: c,
          useReset2FAMutation: l,
          useResetPasswordMutation: y,
          useChangePasswordMutation: p,
          useUpdateEmployeeMutation: m,
          useVerifyRefreshTokenMutation: h,
        } = i;
    },
    80811: function (e, t, r) {
      'use strict';
      r.d(t, {
        Wo: function () {
          return d;
        },
        m$: function () {
          return o;
        },
      });
      var n = r(85687),
        a = r(40329);
      let o = (0, n.LC)({
          reducerPath: 'feedbackApi',
          refetchOnFocus: !0,
          baseQuery: (0, a.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
          tagTypes: ['Feedback'],
          endpoints: (e) => ({
            getFeedbacks: e.query({ query: () => 'feedback', providesTags: ['Feedback'] }),
            getSingleFeedback: e.query({
              query: (e) => {
                let { id: t } = e;
                return 'feedback/'.concat(t);
              },
              providesTags: ['Feedback'],
            }),
            createFeedback: e.mutation({
              query: (e) => {
                let { data: t } = e;
                return { url: 'feedback', method: 'POST', body: t };
              },
              invalidatesTags: ['Feedback'],
            }),
            updateFeedback: e.mutation({
              query: (e) => {
                let { data: t } = e;
                return { url: 'feedback', method: 'PUT', body: t };
              },
              invalidatesTags: ['Feedback'],
            }),
          }),
        }),
        {
          useGetFeedbacksQuery: i,
          useGetSingleFeedbackQuery: u,
          useCreateFeedbackMutation: s,
          useUpdateFeedbackMutation: d,
        } = o;
    },
    83605: function (e, t, r) {
      'use strict';
      r.d(t, {
        BP: function () {
          return s;
        },
        Yw: function () {
          return o;
        },
      });
      var n = r(85687),
        a = r(40329);
      let o = (0, n.LC)({
          reducerPath: 'paymentApi',
          refetchOnFocus: !0,
          baseQuery: (0, a.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
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
        { useGetPaymentsQuery: i, useGetSinglePaymentQuery: u, useCreatePaymentMutation: s } = o;
    },
    18968: function (e, t, r) {
      'use strict';
      r.d(t, {
        $d: function () {
          return u;
        },
        Fr: function () {
          return o;
        },
        OR: function () {
          return s;
        },
      });
      var n = r(85687),
        a = r(40329);
      let o = (0, n.LC)({
          reducerPath: 'productApi',
          refetchOnFocus: !0,
          baseQuery: (0, a.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
          tagTypes: ['Product'],
          endpoints: (e) => ({
            getProducts: e.query({ query: () => ({ url: 'product', method: 'GET' }), providesTags: ['Product'] }),
            getSingleProduct: e.query({ query: (e) => 'product/'.concat(e.id), providesTags: ['Product'] }),
            getFilteredProducts: e.query({
              query: (e) => {
                let { search: t, dietary_restrictions: r, proteins: n } = e,
                  a = 'product?';
                return (
                  t && (a += '&search='.concat(encodeURIComponent(t))),
                  (null == r ? void 0 : r.length) &&
                    (a += '&dietary_restrictionsParam='.concat(
                      encodeURIComponent(JSON.stringify(r.map((e) => e.toLowerCase()))),
                    )),
                  (null == n ? void 0 : n.length) &&
                    (a += '&proteinsParam='.concat(encodeURIComponent(JSON.stringify(n.map((e) => e.toLowerCase()))))),
                  a
                );
              },
              providesTags: ['Product'],
            }),
          }),
        }),
        { useGetProductsQuery: i, useGetSingleProductQuery: u, useGetFilteredProductsQuery: s } = o;
    },
    66693: function (e, t, r) {
      'use strict';
      r.d(t, {
        fq: function () {
          return u;
        },
        kw: function () {
          return o;
        },
      });
      var n = r(85687),
        a = r(40329);
      let o = (0, n.LC)({
          reducerPath: 'diningTableApi',
          refetchOnFocus: !0,
          baseQuery: (0, a.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
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
        { useGetDiningTablesQuery: i, useGetSingleDiningTableQuery: u } = o;
    },
    50940: function (e, t, r) {
      'use strict';
      r.d(t, {
        A0: function () {
          return c;
        },
        A7: function () {
          return s;
        },
        Fm: function () {
          return d;
        },
        LU: function () {
          return l;
        },
        Oq: function () {
          return u;
        },
        dl: function () {
          return i;
        },
        eU: function () {
          return o;
        },
        fk: function () {
          return a;
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
        a = () => n(localStorage.getItem('basket') || '') || { orderItems: [] },
        o = () => {
          {
            let e = n(localStorage.getItem('dietaryRestrictions') || '');
            return Array.isArray(e) ? e : [];
          }
        },
        i = () => {
          localStorage.removeItem('dietaryRestrictions');
        },
        u = () => {
          {
            let e = n(localStorage.getItem('protein') || '');
            return Array.isArray(e) ? e : [];
          }
        },
        s = () => {
          localStorage.removeItem('protein');
        },
        d = () => {
          localStorage.removeItem('basket');
        },
        c = () => localStorage.getItem('table_id'),
        l = () => {
          localStorage.removeItem('table_id');
        };
    },
    88062: function () {},
    51359: function () {},
    87295: function (e) {
      e.exports = {
        style: { fontFamily: "'__Rubik_ab117d', '__Rubik_Fallback_ab117d'", fontStyle: 'normal' },
        className: '__className_ab117d',
        variable: '__variable_ab117d',
      };
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
    e.O(0, [4872, 8809, 5687, 6394, 2077, 7745, 6717, 9242, 2971, 4938, 1744], function () {
      return e((e.s = 80651));
    }),
      (_N_E = e.O());
  },
]);
