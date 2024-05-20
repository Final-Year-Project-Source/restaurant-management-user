(exports.id = 118),
  (exports.ids = [118]),
  (exports.modules = {
    93354: (e, r, t) => {
      Promise.resolve().then(t.t.bind(t, 2583, 23)),
        Promise.resolve().then(t.t.bind(t, 26840, 23)),
        Promise.resolve().then(t.t.bind(t, 38771, 23)),
        Promise.resolve().then(t.t.bind(t, 13225, 23)),
        Promise.resolve().then(t.t.bind(t, 9295, 23)),
        Promise.resolve().then(t.t.bind(t, 43982, 23));
    },
    99498: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 1208)),
        Promise.resolve().then(t.bind(t, 525)),
        Promise.resolve().then(t.bind(t, 40210)),
        Promise.resolve().then(t.bind(t, 77058));
    },
    68955: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 13932));
    },
    525: (e, r, t) => {
      'use strict';
      t.r(r), t.d(r, { default: () => i });
      var a = t(95344),
        s = t(47674),
        o = t(3729);
      let i = function ({ children: e }) {
        let r = (0, o.useCallback)(() => {
          let e = window.innerHeight;
          document.documentElement.style.setProperty('--100vh', `${e}px`);
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
          a.jsx(s.SessionProvider, { children: e })
        );
      };
    },
    13932: (e, r, t) => {
      'use strict';
      t.r(r), t.d(r, { default: () => n });
      var a = t(95344),
        s = t(67523),
        o = t(34284),
        i = t(22254);
      let n = () => {
        let e = (0, i.useRouter)();
        return a.jsx(o.ZP, {
          status: '404',
          title: '404',
          subTitle: 'Xin lỗi, trang bạn truy cập hiện kh\xf4ng tồn tại.',
          extra: a.jsx('div', {
            className: 'flex justify-center',
            children: a.jsx(s.zx, {
              className: '!w-[200px]',
              onClick: () => e.push('/'),
              children: 'Trở về trang chủ',
            }),
          }),
        });
      };
    },
    17248: (e, r, t) => {
      'use strict';
      t.d(r, { Z: () => i });
      var a = t(95344);
      t(3729);
      var s = t(66154),
        o = t.n(s);
      let i = ({ variant: e = 'primary', disabled: r, children: t, className: s, ...i }) =>
        a.jsx('button', {
          ...i,
          className: `${o()[`${e}Btn`]} ${r ? o().disabledBtn : ''} ${o().btn} ${
            s || ''
          } flex justify-center items-center whitespace-nowrap w-full rounded-[30px] max-h-[61px]`,
          disabled: r,
          children: t,
        });
    },
    75203: (e, r, t) => {
      'use strict';
      t.d(r, { Z: () => d });
      var a = t(95344),
        s = t(98251),
        o = t(60876);
      t(3729);
      var i = t(66154),
        n = t.n(i);
      let d = ({ children: e, className: r, active: t, ...i }) =>
        a.jsx(s.ZP, {
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
          children: a.jsx(o.ZP, {
            type: 'text',
            style: { fontFamily: 'var(--font-rubik)' },
            ...i,
            className: `${r || ''} ${t ? n().active : n().inActive} ${n().categoryButton}`,
            children: e,
          }),
        });
    },
    45072: (e, r, t) => {
      'use strict';
      t.d(r, { Z: () => u });
      var a = t(95344),
        s = t(58535),
        o = t(59800),
        i = t(98251),
        n = t(60876),
        d = t(66154),
        l = t.n(d);
      let u = ({ plus: e = !0, variant: r = 'primary', className: t, ...d }) => {
        let u = { color: 'primary' === r ? '#FA4A0C' : '#fff', fontSize: '10px', margin: '0px' };
        return a.jsx(i.ZP, {
          theme: {
            components: {
              Button: { colorPrimaryHover: 'none', defaultBorderColor: '#FA4A0C', colorBgContainer: 'transparent' },
            },
            token: { colorPrimaryActive: '#FA4A0C', colorBorder: '#FA4A0C' },
          },
          children: a.jsx(n.ZP, {
            ...d,
            className: `${t || ''} border border-solid border-red-100 ${l().countBtn} `,
            icon: e ? a.jsx(s.Z, { style: u }) : a.jsx(o.Z, { style: u }),
            size: 'small',
            style: { backgroundColor: 'primary' === r ? 'transparent' : '#FA4A0C' },
          }),
        });
      };
    },
    99870: (e, r, t) => {
      'use strict';
      t.d(r, { Z: () => s });
      var a = t(95344);
      t(3729);
      let s = ({ icon: e, className: r, ...t }) =>
        a.jsx('button', {
          className: `${
            r || ''
          } !bg-white-100 flex justify-center items-center border border-solid border-red-100 bg-white rounded-2xl p-1.5 shadow-none size-12`,
          ...t,
          children: e,
        });
    },
    67523: (e, r, t) => {
      'use strict';
      t.d(r, { hU: () => o.Z, r: () => s.Z, zx: () => a.Z });
      var a = t(17248);
      t(75203);
      var s = t(45072),
        o = t(99870);
    },
    67113: (e, r, t) => {
      'use strict';
      var a, s, o;
      t.d(r, { Nv: () => s, uH: () => o }),
        (function (e) {
          (e.ADMIN = 'ADMIN'), (e.STAFF = 'STAFF');
        })(a || (a = {})),
        (function (e) {
          (e.ADD = '+'), (e.SUB = '-'), (e.EQUAL = '=');
        })(s || (s = {})),
        (function (e) {
          (e.FIXED_PERCENT = 'FIXED_PERCENT'), (e.FIXED_AMOUNT = 'FIXED_AMOUNT');
        })(o || (o = {}));
    },
    40210: (e, r, t) => {
      'use strict';
      t.r(r), t.d(r, { default: () => d });
      var a = t(95344),
        s = t(3729),
        o = t.n(s),
        i = t(4710),
        n = t(22254);
      let d = ({ children: e }) => {
        let r = o().useMemo(() => (0, i.Df)(), []),
          t = o().useRef(!1);
        return (
          (0, n.useServerInsertedHTML)(() => {
            if (!t.current)
              return (
                (t.current = !0), a.jsx('style', { id: 'antd', dangerouslySetInnerHTML: { __html: (0, i.EN)(r, !0) } })
              );
          }),
          a.jsx(i.V9, { cache: r, children: e })
        );
      };
    },
    82018: (e, r, t) => {
      'use strict';
      t.d(r, { Wf: () => u, ZP: () => y, ZW: () => c });
      var a = t(67113),
        s = t(89638),
        o = t(49722),
        i = t(1149),
        n = t.n(i);
      let d = { basket: (0, s.fk)() },
        l = (0, o.oM)({
          name: 'basket',
          initialState: d,
          reducers: {
            reset: (e) => {
              (e.basket = null), (0, s.Fm)();
            },
            update: (e, r) => {
              let t = e.basket || { orderItems: [] };
              if (!r.payload) return;
              let { quantity: s, operator: o, product: i, notes: d, modifiers: l, dietary_restrictions: u } = r.payload,
                c = t?.orderItems?.findIndex(
                  (e) =>
                    e?.product?.id === i.id &&
                    n()(e?.dietary_restrictions || [], u || []) &&
                    n()(e?.notes || '', d || '') &&
                    n()(e?.modifiers || [], l || []),
                );
              c > -1 &&
              (!l ||
                n()(t.orderItems[c]?.modifiers, l) ||
                !u ||
                n()(t.orderItems[c]?.dietary_restrictions, u) ||
                !d ||
                n()(t.orderItems[c].notes, d))
                ? 0 === s
                  ? t.orderItems.splice(c, 1)
                  : o === a.Nv.ADD
                    ? (t.orderItems[c].quantity += s)
                    : o === a.Nv.SUB
                      ? (t.orderItems[c].quantity -= s)
                      : o === a.Nv.EQUAL && (t.orderItems[c].quantity = s)
                : t.orderItems.push({
                    product: i,
                    notes: d || '',
                    modifiers: l || [],
                    quantity: s,
                    dietary_restrictions: u || [],
                  });
              let y = { ...t };
              localStorage.setItem('basket', JSON.stringify(y)), (e.basket = y);
            },
          },
        }),
        { update: u, reset: c } = l.actions,
        y = l.reducer;
    },
    97107: (e, r, t) => {
      'use strict';
      t.d(r, { BE: () => d, ZP: () => u, dL: () => n });
      var a = t(49722),
        s = t(89638);
      let o = { protein: (0, s.Oq)(), dietaryRestrictions: (0, s.eU)() },
        i = (0, a.oM)({
          name: 'menuFilter',
          initialState: o,
          reducers: {
            updateProtein: (e, r) => {
              (e.protein = r.payload), localStorage.setItem('protein', JSON.stringify(r.payload));
            },
            updateDietaryRestrictions: (e, r) => {
              (e.dietaryRestrictions = r.payload),
                localStorage.setItem('dietaryRestrictions', JSON.stringify(r.payload));
            },
            resetMenuFilter: (e) => {
              (e.protein = []), (e.dietaryRestrictions = []), (0, s.dl)(), (0, s.A7)();
            },
          },
        }),
        { updateProtein: n, updateDietaryRestrictions: d, resetMenuFilter: l } = i.actions,
        u = i.reducer;
    },
    29096: (e, r, t) => {
      'use strict';
      t.d(r, { ZP: () => l, qB: () => d, x: () => n });
      var a = t(49722),
        s = t(89638);
      let o = { tableId: (0, s.A0)() },
        i = (0, a.oM)({
          name: 'table',
          initialState: o,
          reducers: {
            setTable: (e, r) => {
              (e.tableId = r.payload), localStorage.setItem('table_id', r.payload);
            },
            removeTable: (e) => {
              (e.tableId = ''), (0, s.LU)();
            },
          },
        }),
        { setTable: n, removeTable: d } = i.actions,
        l = i.reducer;
    },
    77058: (e, r, t) => {
      'use strict';
      t.r(r), t.d(r, { Providers: () => Z });
      var a = t(95344),
        s = t(3729),
        o = t(97107),
        i = t(29096),
        n = t(49722),
        d = t(82018),
        l = t(42810),
        u = t(375),
        c = t(27445),
        y = t(53962);
      let p = (0, c.LC)({
          reducerPath: 'customerApi',
          refetchOnFocus: !0,
          baseQuery: (0, y.ni)({ baseUrl: 'http://localhost:3001/v1/' }),
          tagTypes: ['Customer'],
          endpoints: (e) => ({
            getCustomers: e.query({
              query: ({ access_token: e }) => ({
                url: 'customer',
                method: 'GET',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${e}` },
              }),
              providesTags: ['Customer'],
            }),
            getSingleCustomer: e.query({ query: (e) => `customer?id=${e.id}`, providesTags: ['Customer'] }),
            addCustomer: e.mutation({
              query: ({ data: e }) => ({ url: 'customer', method: 'POST', body: { data: e } }),
              invalidatesTags: ['Customer'],
            }),
            updateCustomer: e.mutation({
              query: ({ access_token: e, data: r }) => ({
                url: 'customer',
                method: 'PATCH',
                body: { data: r },
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${e}` },
              }),
              invalidatesTags: ['Customer'],
            }),
            deleteCustomer: e.mutation({
              query: ({ data: e, access_token: r }) => ({
                url: `customer?id=${e.id}`,
                method: 'DELETE',
                body: { data: e },
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${r}` },
              }),
              invalidatesTags: ['Customer'],
            }),
          }),
        }),
        {
          useGetCustomersQuery: m,
          useGetSingleCustomerQuery: h,
          useUpdateCustomerMutation: g,
          useAddCustomerMutation: v,
          useDeleteCustomerMutation: T,
        } = p;
      var b = t(73593);
      let P = (0, c.LC)({
          reducerPath: 'modifierApi',
          refetchOnFocus: !0,
          baseQuery: (0, y.ni)({ baseUrl: 'http://localhost:3001/v1/' }),
          tagTypes: ['Modifier'],
          endpoints: (e) => ({
            getModifiers: e.query({ query: () => 'modifier', providesTags: ['Modifier'] }),
            getSingleModifier: e.query({ query: (e) => `modifier?id=${e}`, providesTags: ['Modifier'] }),
          }),
        }),
        { useGetModifiersQuery: f, useGetSingleModifierQuery: q } = P,
        C = (0, c.LC)({
          reducerPath: 'orderApi',
          refetchOnFocus: !0,
          baseQuery: (0, y.ni)({ baseUrl: 'http://localhost:3001/v1/' }),
          tagTypes: ['Order'],
          endpoints: (e) => ({
            getOrders: e.query({
              query: ({ access_token: e }) => ({
                url: 'order',
                method: 'GET',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${e}` },
              }),
              providesTags: ['Order'],
            }),
            getSingleOrder: e.query({ query: (e) => `order?id=${e.id}`, providesTags: ['Order'] }),
            addOrder: e.mutation({
              query: ({ data: e }) => ({ url: 'order', method: 'POST', body: { data: e } }),
              invalidatesTags: ['Order'],
            }),
            updateOrder: e.mutation({
              query: ({ data: e }) => ({
                url: 'order',
                method: 'PUT',
                body: { data: e },
                headers: { 'Content-Type': 'application/json' },
              }),
              invalidatesTags: ['Order'],
            }),
            deleteOrder: e.mutation({
              query: ({ data: e, access_token: r }) => ({
                url: `order?id=${e.id}`,
                method: 'DELETE',
                body: { data: e },
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${r}` },
              }),
              invalidatesTags: ['Order'],
            }),
            createReceiptForCounting: e.mutation({
              query: ({ data: e }) => ({ url: 'receipt', method: 'POST', body: { data: e } }),
              invalidatesTags: ['Order'],
            }),
            createFeedback: e.mutation({
              query: ({ data: e }) => ({ url: 'feedback', method: 'POST', body: { data: e } }),
              invalidatesTags: ['Order'],
            }),
          }),
        }),
        {
          useGetOrdersQuery: x,
          useGetSingleOrderQuery: A,
          useUpdateOrderMutation: S,
          useAddOrderMutation: $,
          useDeleteOrderMutation: j,
          useCreateFeedbackMutation: F,
          useCreateReceiptForCountingMutation: B,
        } = C;
      var _ = t(30159),
        w = t(88914),
        U = t(75992);
      let O = (0, c.LC)({
          reducerPath: 'userApi',
          refetchOnFocus: !0,
          baseQuery: (0, y.ni)({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
          endpoints: (e) => ({
            getUsers: e.query({ query: () => 'users' }),
            getUserById: e.query({ query: ({ id: e }) => `users/${e}` }),
          }),
        }),
        { useGetUsersQuery: I, useGetUserByIdQuery: k } = O,
        E = (0, c.LC)({
          reducerPath: 'taxInvoiceApi',
          refetchOnFocus: !0,
          baseQuery: (0, y.ni)({ baseUrl: 'http://localhost:3001/v1/' }),
          tagTypes: ['Tax Invoice'],
          endpoints: (e) => ({
            getTaxInvoices: e.query({
              query: ({ access_token: e }) => ({
                url: 'taxinvoice',
                method: 'GET',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${e}` },
              }),
              providesTags: ['Tax Invoice'],
            }),
            getSingleTaxInvoice: e.query({ query: ({ id: e }) => `taxinvoice?id=${e}`, providesTags: ['Tax Invoice'] }),
          }),
        }),
        { useGetTaxInvoicesQuery: L, useGetSingleTaxInvoiceQuery: D } = E;
      var N = t(86955),
        Q = t(27781);
      let R = () =>
        (0, n.xC)({
          reducer: {
            basketReducer: d.ZP,
            tableReducer: i.ZP,
            menuFilterReducer: o.ZP,
            [O.reducerPath]: O.reducer,
            [w.Fr.reducerPath]: w.Fr.reducer,
            [P.reducerPath]: P.reducer,
            [u.rj.reducerPath]: u.rj.reducer,
            [b.Y5.reducerPath]: b.Y5.reducer,
            [U.kw.reducerPath]: U.kw.reducer,
            [C.reducerPath]: C.reducer,
            [p.reducerPath]: p.reducer,
            [_.Yw.reducerPath]: _.Yw.reducer,
            [l.m$.reducerPath]: l.m$.reducer,
            [E.reducerPath]: E.reducer,
            [N.QC.reducerPath]: N.QC.reducer,
            [Q.aG.reducerPath]: Q.aG.reducer,
          },
          devTools: !1,
          middleware: (e) =>
            e({}).concat([
              O.middleware,
              w.Fr.middleware,
              P.middleware,
              u.rj.middleware,
              b.Y5.middleware,
              U.kw.middleware,
              C.middleware,
              p.middleware,
              _.Yw.middleware,
              l.m$.middleware,
              E.middleware,
              N.QC.middleware,
            ]),
        });
      var M = t(36013);
      function Z({ children: e }) {
        let r = (0, s.useRef)();
        return r.current || (r.current = R()), a.jsx(M.zt, { store: r.current, children: e });
      }
    },
    86955: (e, r, t) => {
      'use strict';
      t.d(r, { LJ: () => n, QC: () => o, db: () => c, kX: () => y, oQ: () => d, w2: () => l });
      var a = t(27445),
        s = t(53962);
      let o = (0, a.LC)({
          reducerPath: 'billApi',
          refetchOnFocus: !0,
          baseQuery: (0, s.ni)({ baseUrl: 'http://localhost:3001/v1/' }),
          tagTypes: ['Bill'],
          endpoints: (e) => ({
            getBills: e.query({
              query: () => ({ url: 'bill', method: 'GET', headers: { 'Content-Type': 'application/json' } }),
              providesTags: ['Bill'],
            }),
            getSingleBill: e.query({ query: (e) => `bill/${e.id}`, providesTags: ['Bill'] }),
            addBill: e.mutation({
              query: ({ data: e }) => ({ url: 'bill', method: 'POST', body: e }),
              invalidatesTags: ['Bill'],
            }),
            updateBill: e.mutation({
              query: ({ data: e }) => ({
                url: 'bill',
                method: 'PUT',
                body: e,
                headers: { 'Content-Type': 'application/json' },
              }),
              invalidatesTags: ['Bill'],
            }),
            deleteBill: e.mutation({
              query: ({ data: e }) => ({
                url: `bill/${e.id}`,
                method: 'DELETE',
                body: { data: e },
                headers: { 'Content-Type': 'application/json' },
              }),
              invalidatesTags: ['Bill'],
            }),
            createFeedback: e.mutation({
              query: ({ data: e }) => ({ url: 'feedback', method: 'POST', body: e }),
              invalidatesTags: ['Bill'],
            }),
            createTaxInvoice: e.mutation({
              query: ({ data: e }) => ({ url: 'taxinvoice', method: 'POST', body: e }),
              invalidatesTags: ['Bill'],
            }),
          }),
        }),
        {
          useGetBillsQuery: i,
          useGetSingleBillQuery: n,
          useUpdateBillMutation: d,
          useAddBillMutation: l,
          useDeleteBillMutation: u,
          useCreateFeedbackMutation: c,
          useCreateTaxInvoiceMutation: y,
        } = o;
    },
    375: (e, r, t) => {
      'use strict';
      t.d(r, { NL: () => i, rj: () => o });
      var a = t(27445),
        s = t(53962);
      let o = (0, a.LC)({
          reducerPath: 'categoryApi',
          refetchOnFocus: !0,
          baseQuery: (0, s.ni)({ baseUrl: 'http://localhost:3001/v1/' }),
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
              query: ({ access_token: e, id: r }) => ({
                url: `category/${r}`,
                method: 'GET',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${e}` },
              }),
            }),
          }),
        }),
        { useGetCategoriesQuery: i, useGetAllCategoriesQuery: n, useGetCategoriesByIdQuery: d } = o;
    },
    73593: (e, r, t) => {
      'use strict';
      t.d(r, { $r: () => n, Y5: () => o });
      var a = t(27445),
        s = t(53962);
      let o = (0, a.LC)({
          reducerPath: 'discountApi',
          refetchOnFocus: !0,
          baseQuery: (0, s.ni)({ baseUrl: 'http://localhost:3001/v1/' }),
          tagTypes: ['Discount'],
          endpoints: (e) => ({
            getDiscounts: e.query({ query: () => 'discount', providesTags: ['Discount'] }),
            getSingleDiscount: e.query({ query: ({ id: e }) => `discount/${e}`, providesTags: ['Discount'] }),
          }),
        }),
        { useGetDiscountsQuery: i, useGetSingleDiscountQuery: n } = o;
    },
    27781: (e, r, t) => {
      'use strict';
      t.d(r, { $h: () => y, aG: () => o });
      var a = t(27445),
        s = t(53962);
      let o = (0, a.LC)({
          reducerPath: 'employeeApi',
          refetchOnFocus: !0,
          baseQuery: (0, s.ni)({ baseUrl: 'http://localhost:3001/v1/' }),
          tagTypes: ['User'],
          endpoints: (e) => ({
            getUsers: e.query({
              query: (e) => ({
                url: `user?role_filter=${e.role_filter}&page=${e.page}&limit=${e.limit}`,
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
              }),
              providesTags: ['User'],
            }),
            getSingleUser: e.query({
              query: ({ id: e }) => ({
                url: `user/${e}`,
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
              }),
              providesTags: ['User'],
            }),
            createNewUser: e.mutation({
              query: ({ data: e }) => ({
                url: 'user',
                method: 'POST',
                body: e,
                headers: { 'Content-Type': 'application/json' },
              }),
              invalidatesTags: ['User'],
            }),
            deleteUser: e.mutation({
              query: ({ id: e }) => ({
                url: `user/${e}`,
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
              }),
              invalidatesTags: ['User'],
            }),
            changePassword: e.mutation({
              query: ({ email: e, passwordCurrent: r, passwordNew: t }) => ({
                url: 'auth/change-password',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: { email: e, passwordCurrent: r, passwordNew: t },
              }),
            }),
            reset2FA: e.mutation({
              query: ({ id: e }) => ({
                url: `user/${e}`,
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: { data: { otp_enabled: !1 } },
              }),
              invalidatesTags: ['User'],
            }),
            resetPassword: e.mutation({
              query: ({ id: e }) => ({
                url: `user/${e}`,
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: { data: { password: `${process.env.STAFF_DEFAULT_PASSWORD}`, is_change_default_password: !1 } },
              }),
              invalidatesTags: ['User'],
            }),
            updateEmployee: e.mutation({
              query: ({ id: e, data: r }) => ({
                url: `user/${e}`,
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: r,
              }),
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
          useGetUsersQuery: n,
          useCreateNewUserMutation: d,
          useDeleteUserMutation: l,
          useReset2FAMutation: u,
          useResetPasswordMutation: c,
          useChangePasswordMutation: y,
          useUpdateEmployeeMutation: p,
          useVerifyRefreshTokenMutation: m,
        } = o;
    },
    42810: (e, r, t) => {
      'use strict';
      t.d(r, { Wo: () => l, m$: () => o });
      var a = t(27445),
        s = t(53962);
      let o = (0, a.LC)({
          reducerPath: 'feedbackApi',
          refetchOnFocus: !0,
          baseQuery: (0, s.ni)({ baseUrl: 'http://localhost:3001/v1/' }),
          tagTypes: ['Feedback'],
          endpoints: (e) => ({
            getFeedbacks: e.query({ query: () => 'feedback', providesTags: ['Feedback'] }),
            getSingleFeedback: e.query({ query: ({ id: e }) => `feedback/${e}`, providesTags: ['Feedback'] }),
            createFeedback: e.mutation({
              query: ({ data: e }) => ({ url: 'feedback', method: 'POST', body: e }),
              invalidatesTags: ['Feedback'],
            }),
            updateFeedback: e.mutation({
              query: ({ data: e }) => ({ url: 'feedback', method: 'PUT', body: e }),
              invalidatesTags: ['Feedback'],
            }),
          }),
        }),
        {
          useGetFeedbacksQuery: i,
          useGetSingleFeedbackQuery: n,
          useCreateFeedbackMutation: d,
          useUpdateFeedbackMutation: l,
        } = o;
    },
    30159: (e, r, t) => {
      'use strict';
      t.d(r, { BP: () => d, Yw: () => o });
      var a = t(27445),
        s = t(53962);
      let o = (0, a.LC)({
          reducerPath: 'paymentApi',
          refetchOnFocus: !0,
          baseQuery: (0, s.ni)({ baseUrl: 'http://localhost:3001/v1/' }),
          tagTypes: ['Payment'],
          endpoints: (e) => ({
            getPayments: e.query({ query: () => 'payment', providesTags: ['Payment'] }),
            getSinglePayment: e.query({ query: ({ id: e }) => `payment?id=${e}`, providesTags: ['Payment'] }),
            createPayment: e.mutation({
              query: ({ data: e }) => ({ url: 'payment', method: 'POST', body: e }),
              invalidatesTags: ['Payment'],
            }),
          }),
        }),
        { useGetPaymentsQuery: i, useGetSinglePaymentQuery: n, useCreatePaymentMutation: d } = o;
    },
    88914: (e, r, t) => {
      'use strict';
      t.d(r, { $d: () => n, Fr: () => o, OR: () => d });
      var a = t(27445),
        s = t(53962);
      let o = (0, a.LC)({
          reducerPath: 'productApi',
          refetchOnFocus: !0,
          baseQuery: (0, s.ni)({ baseUrl: 'http://localhost:3001/v1/' }),
          tagTypes: ['Product'],
          endpoints: (e) => ({
            getProducts: e.query({ query: () => ({ url: 'product', method: 'GET' }), providesTags: ['Product'] }),
            getSingleProduct: e.query({ query: (e) => `product/${e.id}`, providesTags: ['Product'] }),
            getFilteredProducts: e.query({
              query: ({ search: e, dietary_restrictions: r, proteins: t }) => {
                let a = 'product?';
                return (
                  e && (a += `&search=${encodeURIComponent(e)}`),
                  r?.length &&
                    (a += `&dietary_restrictionsParam=${encodeURIComponent(
                      JSON.stringify(r.map((e) => e.toLowerCase())),
                    )}`),
                  t?.length &&
                    (a += `&proteinsParam=${encodeURIComponent(JSON.stringify(t.map((e) => e.toLowerCase())))}`),
                  a
                );
              },
              providesTags: ['Product'],
            }),
          }),
        }),
        { useGetProductsQuery: i, useGetSingleProductQuery: n, useGetFilteredProductsQuery: d } = o;
    },
    75992: (e, r, t) => {
      'use strict';
      t.d(r, { fq: () => n, kw: () => o });
      var a = t(27445),
        s = t(53962);
      let o = (0, a.LC)({
          reducerPath: 'diningTableApi',
          refetchOnFocus: !0,
          baseQuery: (0, s.ni)({ baseUrl: 'http://localhost:3001/v1/' }),
          tagTypes: ['Dining Table'],
          endpoints: (e) => ({
            getDiningTables: e.query({
              query: ({ access_token: e }) => ({
                url: 'diningTable',
                method: 'GET',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${e}` },
              }),
              providesTags: ['Dining Table'],
            }),
            getSingleDiningTable: e.query({ query: ({ id: e }) => `diningTable/${e}`, providesTags: ['Dining Table'] }),
          }),
        }),
        { useGetDiningTablesQuery: i, useGetSingleDiningTableQuery: n } = o;
    },
    89638: (e, r, t) => {
      'use strict';
      t.d(r, {
        A0: () => l,
        A7: () => n,
        Fm: () => d,
        LU: () => u,
        Oq: () => i,
        dl: () => o,
        eU: () => s,
        fk: () => a,
      });
      let a = () => {},
        s = () => [],
        o = () => {
          localStorage.removeItem('dietaryRestrictions');
        },
        i = () => [],
        n = () => {
          localStorage.removeItem('protein');
        },
        d = () => {
          localStorage.removeItem('basket');
        },
        l = () => '',
        u = () => {
          localStorage.removeItem('table_id');
        };
    },
    66154: (e) => {
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
    32396: (e, r, t) => {
      'use strict';
      t.r(r), t.d(r, { default: () => q, metadata: () => P, viewport: () => f });
      var a = t(25036);
      t(54315);
      var s = t(86843);
      let o = (0, s.createProxy)(
          String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/libs/AntdRegistry.tsx`,
        ),
        { __esModule: i, $$typeof: n } = o,
        d = o.default,
        l = (0, s.createProxy)(
          String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/redux/providers.tsx`,
        ),
        { __esModule: u, $$typeof: c } = l;
      l.default;
      let y = (0, s.createProxy)(
        String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/redux/providers.tsx#Providers`,
      );
      var p = t(23222);
      t(97001);
      var m = t(66550),
        h = t.n(m);
      let g = (0, s.createProxy)(
          String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/Provider.tsx`,
        ),
        { __esModule: v, $$typeof: T } = g,
        b = g.default,
        P = { title: 'Bella Onojie User', description: 'App' },
        f = { width: 'device-width', initialScale: 1, maximumScale: 1, userScalable: 1 };
      function q({ children: e }) {
        return a.jsx('html', {
          lang: 'en',
          children: a.jsx('body', {
            className: `${h().variable} bg-grey-100 h-screen overflow-hidden`,
            children: a.jsx(b, {
              children: (0, a.jsxs)(d, { children: [a.jsx(p.Ix, {}), a.jsx(y, { children: e })] }),
            }),
          }),
        });
      }
    },
    48206: (e, r, t) => {
      'use strict';
      t.r(r), t.d(r, { $$typeof: () => o, __esModule: () => s, default: () => i });
      let a = (0, t(86843).createProxy)(
          String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/not-found.tsx`,
        ),
        { __esModule: s, $$typeof: o } = a,
        i = a.default;
    },
    73881: (e, r, t) => {
      'use strict';
      t.r(r), t.d(r, { default: () => s });
      var a = t(70337);
      let s = (e) => [
        { type: 'image/x-icon', sizes: '47x51', url: (0, a.fillMetadataSegment)('.', e.params, 'favicon.ico') + '' },
      ];
    },
    54315: () => {},
  });
