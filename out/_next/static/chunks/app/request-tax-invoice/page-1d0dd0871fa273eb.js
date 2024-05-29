(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [70],
  {
    14490: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(13428),
        o = n(2265),
        a = {
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
        i = o.forwardRef(function (e, t) {
          return o.createElement(s.Z, (0, r.Z)({}, e, { ref: t, icon: a }));
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
        for (var r = -1, o = null == e ? 0 : e.length; ++r < o; ) if (n(t, e[r])) return !0;
        return !1;
      };
    },
    71787: function (e) {
      e.exports = function (e, t, n, r) {
        for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o; ) if (t(e[a], a, e)) return a;
        return -1;
      };
    },
    31706: function (e, t, n) {
      var r = n(71787),
        o = n(49093),
        a = n(58665);
      e.exports = function (e, t, n) {
        return t == t ? a(e, t, n) : r(e, o, n);
      };
    },
    49093: function (e) {
      e.exports = function (e) {
        return e != e;
      };
    },
    49824: function (e, t, n) {
      var r = n(46427),
        o = n(27941),
        a = n(61128),
        s = n(65225),
        i = n(21590),
        l = n(97782);
      e.exports = function (e, t, n) {
        var c = -1,
          u = o,
          d = e.length,
          f = !0,
          m = [],
          p = m;
        if (n) (f = !1), (u = a);
        else if (d >= 200) {
          var h = t ? null : i(e);
          if (h) return l(h);
          (f = !1), (u = s), (p = new r());
        } else p = t ? [] : m;
        e: for (; ++c < d; ) {
          var v = e[c],
            g = t ? t(v) : v;
          if (((v = n || 0 !== v ? v : 0), f && g == g)) {
            for (var y = p.length; y--; ) if (p[y] === g) continue e;
            t && p.push(g), m.push(v);
          } else u(p, g, n) || (p !== m && p.push(g), m.push(v));
        }
        return m;
      };
    },
    21590: function (e, t, n) {
      var r = n(88921),
        o = n(58660),
        a = n(97782),
        s =
          r && 1 / a(new r([, -0]))[1] == 1 / 0
            ? function (e) {
                return new r(e);
              }
            : o;
      e.exports = s;
    },
    58665: function (e) {
      e.exports = function (e, t, n) {
        for (var r = n - 1, o = e.length; ++r < o; ) if (e[r] === t) return r;
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
    6472: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 78990));
    },
    78990: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(57437),
        o = n(2265),
        a = n(90601),
        s = n(97500),
        i = n.n(s),
        l = n(24033),
        c = n(60171),
        u = n(29340),
        d = n(64308),
        f = n(6779),
        m = n(54021),
        p = n(17325);
      let h = { companyName: '', headOffice: '', taxId: '', address: '' };
      t.default = () => {
        let e = (0, l.useRouter)(),
          t = (0, l.useSearchParams)().get('bill_id'),
          { data: n, isFetching: s } = (0, d.LJ)({ id: t || '' }, { skip: !t }),
          [v, g] = (0, o.useState)({ ...h }),
          [y, x] = (0, o.useState)({ ...h }),
          [T, { isLoading: b }] = (0, d.kX)(),
          E = {
            companyName: 'Company name is required',
            headOffice: 'Head office is required',
            taxId: 'Invalid Tax ID (should be a 13-digit ID)',
            address: 'Address is required',
          },
          C = (e, t) => ('taxId' === e ? ((0, f.r$)(t) ? '' : E[e]) : (0, f.Pb)(t) ? '' : E[e]),
          N = (e, t) => {
            let { value: n } = e.target;
            g({ ...v, [t]: n }), x({ ...y, [t]: C(t, n.trim()) });
          };
        (0, o.useEffect)(() => {
          var e;
          let t = null == n ? void 0 : null === (e = n.data) || void 0 === e ? void 0 : e.tax_invoice_info;
          t && g({ headOffice: t.head_office, taxId: t.tax_id, address: t.address, companyName: t.company });
        }, [n]);
        let I = (0, f.Pb)(v.companyName) && (0, f.Pb)(v.headOffice) && (0, f.r$)(v.taxId) && (0, f.Pb)(v.address),
          _ = (0, r.jsx)('div', {
            className: 'px-4 pt-[13px] pb-[40px]',
            children: (0, r.jsxs)('div', {
              className: 'px-[8px] flex flex-col space-y-[20px]',
              children: [
                (0, r.jsxs)('div', {
                  children: [
                    (0, r.jsx)('div', {
                      className: 'font-medium text-[18px] text-black-400',
                      children: ' Company/recipient name ',
                    }),
                    (0, r.jsxs)('div', {
                      className: 'mt-[10px] '.concat(i().className),
                      children: [
                        (0, r.jsx)(m.Z, {
                          disabled: b || s,
                          required: !0,
                          value: v.companyName,
                          onChange: (e) => N(e, 'companyName'),
                          placeholder: 'E.g. Company Name Co., Ltd. (required)',
                        }),
                        y.companyName &&
                          (0, r.jsx)('span', { className: 'text-red-400 text-[18px]', children: y.companyName }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)('div', {
                  children: [
                    (0, r.jsx)('div', { className: 'font-medium text-[18px] text-black-400', children: ' Branch ID ' }),
                    (0, r.jsx)('div', {
                      className: 'mt-[10px] '.concat(i().className),
                      children: (0, r.jsx)(m.Z, {
                        disabled: b || s,
                        required: !0,
                        value: v.headOffice,
                        onChange: (e) => N(e, 'headOffice'),
                        placeholder: 'E.g. Head office (required)',
                      }),
                    }),
                    y.headOffice &&
                      (0, r.jsx)('span', { className: 'text-red-400 text-[18px]', children: y.headOffice }),
                  ],
                }),
                (0, r.jsxs)('div', {
                  children: [
                    (0, r.jsx)('div', { className: 'font-medium text-[18px] text-black-400', children: ' Tax ID ' }),
                    (0, r.jsx)('div', {
                      className: 'mt-[10px] '.concat(i().className),
                      children: (0, r.jsx)(m.Z, {
                        disabled: b || s,
                        required: !0,
                        value: v.taxId,
                        onChange: (e) => N(e, 'taxId'),
                        placeholder: '13-digit ID (required)',
                      }),
                    }),
                    y.taxId && (0, r.jsx)('span', { className: 'text-red-400 text-[18px]', children: y.taxId }),
                  ],
                }),
                (0, r.jsxs)('div', {
                  children: [
                    (0, r.jsx)('div', { className: 'font-medium text-[18px] text-black-400', children: ' Address' }),
                    (0, r.jsx)('div', {
                      className: 'mt-[10px] '.concat(i().className),
                      children: (0, r.jsx)(p.Z, {
                        disabled: b || s,
                        required: !0,
                        value: v.address,
                        onChange: (e) => N(e, 'address'),
                        valuePlaceholder: 'Enter full address (required)',
                      }),
                    }),
                    y.address && (0, r.jsx)('span', { className: 'text-red-400 text-[18px]', children: y.address }),
                  ],
                }),
              ],
            }),
          }),
          O = (0, r.jsx)('div', { children: (0, r.jsx)('span', { children: 'Submit request for tax invoice ' }) });
        return (0, r.jsxs)(a.Z, {
          isShowPrimaryButton: !1,
          isTextRequestTaxInvoice: !0,
          disabledSecondary: !I || b || s,
          onClickSecondaryBtn: () => {
            let e = {
              head_office: v.headOffice.trim(),
              tax_id: v.taxId,
              bill_id: t,
              address: v.address.trim(),
              company: v.companyName.trim(),
            };
            I &&
              T({ data: e })
                .unwrap()
                .then(() => c.toast.success('Request tax invoice successfully'))
                .catch((e) => {
                  var t;
                  return c.toast.error(null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.message);
                });
          },
          isShowBackBtn: !0,
          disabledBackBtn: b || s,
          onClickBackBtn: () => e.push('/receipt/receipt-download?bill_id='.concat(t)),
          secondaryBtnChildren: O,
          title: 'Request tax invoice',
          children: [_, b && (0, r.jsx)(u.Z, {})],
        });
      };
    },
    29340: function (e, t, n) {
      'use strict';
      var r = n(57437),
        o = n(91623),
        a = n(59810);
      t.Z = () =>
        (0, r.jsx)(o.ZP, {
          theme: { token: { colorPrimary: '#131C16' } },
          children: (0, r.jsx)(a.Z, {
            className: '!fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 black-500',
            size: 'large',
          }),
        });
    },
    76158: function (e, t, n) {
      'use strict';
      n.d(t, {
        hU: function () {
          return a.Z;
        },
        r: function () {
          return o.Z;
        },
        zx: function () {
          return r.Z;
        },
      });
      var r = n(4696);
      n(16223);
      var o = n(55261),
        a = n(86550);
    },
    11425: function (e, t, n) {
      'use strict';
      n.d(t, {
        I: function () {
          return o;
        },
      });
      var r = n(2265);
      function o(e) {
        let [t, n] = (0, r.useState)(!1),
          [o, a] = (0, r.useState)(!1),
          [s, i] = (0, r.useState)(0),
          [l, c] = (0, r.useState)(0),
          u = (0, r.useCallback)(() => {
            let t = null == e ? void 0 : e.current;
            t &&
              (n(t.scrollHeight > t.clientHeight),
              a(t.scrollWidth > t.clientWidth),
              i(t.scrollTop),
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
          t && (i(t.scrollTop), c(t.scrollHeight - t.offsetHeight - t.scrollTop));
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
          { isVerticalScroll: t, isHorizontalScroll: o, scrollTop: s, scrollBottom: l }
        );
      }
    },
    54021: function (e, t, n) {
      'use strict';
      var r = n(57437),
        o = n(2265),
        a = n(91623),
        s = n(77190),
        i = n(97500),
        l = n.n(i);
      n(19509),
        (t.Z = (e) => {
          let { valuePlaceholder: t, autoFocus: n, ...i } = e,
            c = (0, o.useRef)(null);
          return (
            (0, o.useEffect)(() => {
              if (n && c.current) {
                let e = setTimeout(() => {
                  null == c || c.current.focus();
                }, 1);
                return () => clearTimeout(e);
              }
            }, [n]),
            (0, r.jsx)(a.ZP, {
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
              children: (0, r.jsx)(s.default, { className: ''.concat(l().className), placeholder: t, ...i, ref: c }),
            })
          );
        });
    },
    17325: function (e, t, n) {
      'use strict';
      var r = n(57437),
        o = n(2265),
        a = n(77190),
        s = n(91623),
        i = n(97500),
        l = n.n(i);
      n(19509);
      let { TextArea: c } = a.default;
      t.Z = (e) => {
        let { valueInput: t, required: n, valuePlaceholder: a, onChange: i, disabled: u, value: d, ...f } = e,
          [m, p] = (0, o.useState)(t);
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
              value: d || m,
              required: n,
              onChange: (e) => {
                p(e.target.value), i && i(e);
              },
              placeholder: a,
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
        o = n(76158);
      t.Z = (e) => {
        let {
          isShowPrimaryButton: t = !1,
          primaryBtnChildren: n,
          secondaryBtnChildren: a,
          disabledPrimary: s,
          disabledSecondary: i,
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
            t && (0, r.jsx)(o.zx, { variant: 'primary', disabled: s, onClick: l, children: n }),
            (0, r.jsx)(o.zx, { variant: 'secondary', disabled: i, onClick: c, children: a }),
          ],
        });
      };
    },
    90601: function (e, t, n) {
      'use strict';
      var r = n(57437),
        o = n(24033),
        a = n(2265),
        s = n(76158),
        i = n(11425),
        l = n(35414),
        c = n(90850);
      t.Z = (e) => {
        let {
            isShowBackBtn: t = !0,
            title: n,
            isTextRequestTaxInvoice: u,
            children: d,
            disabledPrimary: f,
            disabledSecondary: m,
            onClickSecondaryBtn: p,
            secondaryBtnChildren: h,
            onClickPrimaryBtn: v,
            primaryBtnChildren: g,
            isShowPrimaryButton: y,
            onClickBackBtn: x,
            onClickDownBtn: T,
            disabledBackBtn: b,
            isHiddenAvatar: E = !1,
          } = e,
          C = (0, a.useRef)(null),
          { scrollTop: N, scrollBottom: I } = (0, i.I)(C);
        (0, o.useRouter)();
        let _ = (0, a.useMemo)(() => (y ? '243px' : u ? '211px' : '170px'), [y, u]);
        return (0, r.jsxs)('div', {
          className: 'flex flex-col h-screen',
          children: [
            (0, r.jsxs)('div', {
              className: ''
                .concat(
                  N - 13 > 0 ? 'shadow-medium-bottom' : '',
                  ' relative w-full pt-[22px] pb-[15px] flex flex-row items-center ',
                )
                .concat(t ? 'justify-start pl-4' : 'justify-end pr-4'),
              children: [
                t && (0, r.jsx)(s.hU, { icon: (0, r.jsx)(l.Y4, {}), disabled: b, onClick: x }),
                (0, r.jsx)('span', {
                  className:
                    'w-[calc(100%-8rem)] absolute top-[40%] right-1/2 transform translate-x-1/2 text-center text-xl font-medium text-black-500',
                  children: n,
                }),
                !t && (0, r.jsx)(s.hU, { icon: (0, r.jsx)(l._8, {}), onClick: T }),
              ],
            }),
            (0, r.jsx)('div', { ref: C, className: 'overflow-y-auto max-h-screen-'.concat(_), children: d }),
            (0, r.jsx)(c.Z, {
              className: I - 40 > 0 ? 'shadow-medium-top' : '',
              disabledPrimary: f,
              disabledSecondary: m,
              isTextRequestTaxInvoice: u,
              isShowPrimaryButton: y,
              onClickPrimaryBtn: v,
              primaryBtnChildren: g,
              onClickSecondaryBtn: p,
              secondaryBtnChildren: h,
            }),
          ],
        });
      };
    },
    16835: function (e, t, n) {
      'use strict';
      var r, o, a, s, i, l;
      n.d(t, {
        Nv: function () {
          return o;
        },
        uH: function () {
          return a;
        },
      }),
        ((s = r || (r = {})).ADMIN = 'ADMIN'),
        (s.STAFF = 'STAFF'),
        ((i = o || (o = {})).ADD = '+'),
        (i.SUB = '-'),
        (i.EQUAL = '='),
        ((l = a || (a = {})).FIXED_PERCENT = 'FIXED_PERCENT'),
        (l.FIXED_AMOUNT = 'FIXED_AMOUNT');
    },
    64308: function (e, t, n) {
      'use strict';
      n.d(t, {
        LJ: function () {
          return i;
        },
        QC: function () {
          return a;
        },
        db: function () {
          return d;
        },
        kX: function () {
          return f;
        },
        oQ: function () {
          return l;
        },
        w2: function () {
          return c;
        },
      });
      var r = n(85687),
        o = n(40329);
      let a = (0, r.LC)({
          reducerPath: 'billApi',
          refetchOnFocus: !0,
          baseQuery: (0, o.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
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
          useGetSingleBillQuery: i,
          useUpdateBillMutation: l,
          useAddBillMutation: c,
          useDeleteBillMutation: u,
          useCreateFeedbackMutation: d,
          useCreateTaxInvoiceMutation: f,
        } = a;
    },
    6779: function (e, t, n) {
      'use strict';
      n.d(t, {
        Bg: function () {
          return a;
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
          return s;
        },
      }),
        n(16835);
      var r = n(48911),
        o = n.n(r);
      let a = (e) =>
          o()(
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
        i = (e) => '' === e.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
        l = (e) => '' === e.trim() || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(e),
        c = (e) => /^(\d[- ]?){12}\d$/.test(e),
        u = (e) => '' !== e.trim(),
        d = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
        f = (e) => (e ? Math.round(Number(e)).toLocaleString('en-US').replace(/,/g, '.') : '0');
    },
    19509: function () {},
    60171: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          Bounce: function () {
            return N;
          },
          Flip: function () {
            return O;
          },
          Icons: function () {
            return h;
          },
          Slide: function () {
            return I;
          },
          ToastContainer: function () {
            return B;
          },
          Zoom: function () {
            return _;
          },
          collapseToast: function () {
            return u;
          },
          cssTransition: function () {
            return d;
          },
          toast: function () {
            return q;
          },
          useToast: function () {
            return x;
          },
          useToastContainer: function () {
            return v;
          },
        });
      var r = n(2265),
        o = function () {
          for (var e, t, n = 0, r = ''; n < arguments.length; )
            (e = arguments[n++]) &&
              (t = (function e(t) {
                var n,
                  r,
                  o = '';
                if ('string' == typeof t || 'number' == typeof t) o += t;
                else if ('object' == typeof t) {
                  if (Array.isArray(t))
                    for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (o && (o += ' '), (o += r));
                  else for (n in t) t[n] && (o && (o += ' '), (o += n));
                }
                return o;
              })(e)) &&
              (r && (r += ' '), (r += t));
          return r;
        };
      let a = (e) => 'number' == typeof e && !isNaN(e),
        s = (e) => 'string' == typeof e,
        i = (e) => 'function' == typeof e,
        l = (e) => (s(e) || i(e) ? e : null),
        c = (e) => (0, r.isValidElement)(e) || s(e) || i(e) || a(e);
      function u(e, t, n) {
        void 0 === n && (n = 300);
        let { scrollHeight: r, style: o } = e;
        requestAnimationFrame(() => {
          (o.minHeight = 'initial'),
            (o.height = r + 'px'),
            (o.transition = `all ${n}ms`),
            requestAnimationFrame(() => {
              (o.height = '0'), (o.padding = '0'), (o.margin = '0'), setTimeout(t, n);
            });
        });
      }
      function d(e) {
        let { enter: t, exit: n, appendPosition: o = !1, collapse: a = !0, collapseDuration: s = 300 } = e;
        return function (e) {
          let { children: i, position: l, preventExitTransition: c, done: d, nodeRef: f, isIn: m } = e,
            p = o ? `${t}--${l}` : t,
            h = o ? `${n}--${l}` : n,
            v = (0, r.useRef)(0);
          return (
            (0, r.useLayoutEffect)(() => {
              let e = f.current,
                t = p.split(' '),
                n = (r) => {
                  r.target === f.current &&
                    (e.dispatchEvent(new Event('d')),
                    e.removeEventListener('animationend', n),
                    e.removeEventListener('animationcancel', n),
                    0 === v.current && 'animationcancel' !== r.type && e.classList.remove(...t));
                };
              e.classList.add(...t), e.addEventListener('animationend', n), e.addEventListener('animationcancel', n);
            }, []),
            (0, r.useEffect)(() => {
              let e = f.current,
                t = () => {
                  e.removeEventListener('animationend', t), a ? u(e, d, s) : d();
                };
              m || (c ? t() : ((v.current = 1), (e.className += ` ${h}`), e.addEventListener('animationend', t)));
            }, [m]),
            r.createElement(r.Fragment, null, i)
          );
        };
      }
      function f(e, t) {
        return null != e
          ? {
              content: e.content,
              containerId: e.props.containerId,
              id: e.props.toastId,
              theme: e.props.theme,
              type: e.props.type,
              data: e.props.data || {},
              isLoading: e.props.isLoading,
              icon: e.props.icon,
              status: t,
            }
          : {};
      }
      let m = {
          list: new Map(),
          emitQueue: new Map(),
          on(e, t) {
            return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this;
          },
          off(e, t) {
            if (t) {
              let n = this.list.get(e).filter((e) => e !== t);
              return this.list.set(e, n), this;
            }
            return this.list.delete(e), this;
          },
          cancelEmit(e) {
            let t = this.emitQueue.get(e);
            return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
          },
          emit(e) {
            this.list.has(e) &&
              this.list.get(e).forEach((t) => {
                let n = setTimeout(() => {
                  t(...[].slice.call(arguments, 1));
                }, 0);
                this.emitQueue.has(e) || this.emitQueue.set(e, []), this.emitQueue.get(e).push(n);
              });
          },
        },
        p = (e) => {
          let { theme: t, type: n, ...o } = e;
          return r.createElement('svg', {
            viewBox: '0 0 24 24',
            width: '100%',
            height: '100%',
            fill: 'colored' === t ? 'currentColor' : `var(--toastify-icon-color-${n})`,
            ...o,
          });
        },
        h = {
          info: function (e) {
            return r.createElement(
              p,
              { ...e },
              r.createElement('path', {
                d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z',
              }),
            );
          },
          warning: function (e) {
            return r.createElement(
              p,
              { ...e },
              r.createElement('path', {
                d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z',
              }),
            );
          },
          success: function (e) {
            return r.createElement(
              p,
              { ...e },
              r.createElement('path', {
                d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z',
              }),
            );
          },
          error: function (e) {
            return r.createElement(
              p,
              { ...e },
              r.createElement('path', {
                d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z',
              }),
            );
          },
          spinner: function () {
            return r.createElement('div', { className: 'Toastify__spinner' });
          },
        };
      function v(e) {
        let [, t] = (0, r.useReducer)((e) => e + 1, 0),
          [n, o] = (0, r.useState)([]),
          u = (0, r.useRef)(null),
          d = (0, r.useRef)(new Map()).current,
          p = (e) => -1 !== n.indexOf(e),
          v = (0, r.useRef)({
            toastKey: 1,
            displayedToast: 0,
            count: 0,
            queue: [],
            props: e,
            containerId: null,
            isToastActive: p,
            getToast: (e) => d.get(e),
          }).current;
        function g(e) {
          let { containerId: t } = e,
            { limit: n } = v.props;
          !n || (t && v.containerId !== t) || ((v.count -= v.queue.length), (v.queue = []));
        }
        function y(e) {
          o((t) => (null == e ? [] : t.filter((t) => t !== e)));
        }
        function x() {
          let { toastContent: e, toastProps: t, staleId: n } = v.queue.shift();
          b(e, t, n);
        }
        function T(e, n) {
          var o, p;
          let { delay: g, staleId: T, ...E } = n;
          if (
            !c(e) ||
            !u.current ||
            (v.props.enableMultiContainer && E.containerId !== v.props.containerId) ||
            (d.has(E.toastId) && null == E.updateId)
          )
            return;
          let { toastId: C, updateId: N, data: I } = E,
            { props: _ } = v,
            O = () => y(C),
            B = null == N;
          B && v.count++;
          let k = {
            ..._,
            style: _.toastStyle,
            key: v.toastKey++,
            ...Object.fromEntries(
              Object.entries(E).filter((e) => {
                let [t, n] = e;
                return null != n;
              }),
            ),
            toastId: C,
            updateId: N,
            data: I,
            closeToast: O,
            isIn: !1,
            className: l(E.className || _.toastClassName),
            bodyClassName: l(E.bodyClassName || _.bodyClassName),
            progressClassName: l(E.progressClassName || _.progressClassName),
            autoClose: !E.isLoading && ((o = E.autoClose), (p = _.autoClose), !1 === o || (a(o) && o > 0) ? o : p),
            deleteToast() {
              let e = f(d.get(C), 'removed');
              d.delete(C), m.emit(4, e);
              let n = v.queue.length;
              if (
                ((v.count = null == C ? v.count - v.displayedToast : v.count - 1), v.count < 0 && (v.count = 0), n > 0)
              ) {
                let e = null == C ? v.props.limit : 1;
                if (1 === n || 1 === e) v.displayedToast++, x();
                else {
                  let t = e > n ? n : e;
                  v.displayedToast = t;
                  for (let e = 0; e < t; e++) x();
                }
              } else t();
            },
          };
          (k.iconOut = (function (e) {
            let { theme: t, type: n, isLoading: o, icon: l } = e,
              c = null,
              u = { theme: t, type: n };
            return (
              !1 === l ||
                (i(l)
                  ? (c = l(u))
                  : (0, r.isValidElement)(l)
                    ? (c = (0, r.cloneElement)(l, u))
                    : s(l) || a(l)
                      ? (c = l)
                      : o
                        ? (c = h.spinner())
                        : n in h && (c = h[n](u))),
              c
            );
          })(k)),
            i(E.onOpen) && (k.onOpen = E.onOpen),
            i(E.onClose) && (k.onClose = E.onClose),
            (k.closeButton = _.closeButton),
            !1 === E.closeButton || c(E.closeButton)
              ? (k.closeButton = E.closeButton)
              : !0 === E.closeButton && (k.closeButton = !c(_.closeButton) || _.closeButton);
          let w = e;
          (0, r.isValidElement)(e) && !s(e.type)
            ? (w = (0, r.cloneElement)(e, { closeToast: O, toastProps: k, data: I }))
            : i(e) && (w = e({ closeToast: O, toastProps: k, data: I })),
            _.limit && _.limit > 0 && v.count > _.limit && B
              ? v.queue.push({ toastContent: w, toastProps: k, staleId: T })
              : a(g)
                ? setTimeout(() => {
                    b(w, k, T);
                  }, g)
                : b(w, k, T);
        }
        function b(e, t, n) {
          let { toastId: r } = t;
          n && d.delete(n);
          let a = { content: e, props: t };
          d.set(r, a),
            o((e) => [...e, r].filter((e) => e !== n)),
            m.emit(4, f(a, null == a.props.updateId ? 'added' : 'updated'));
        }
        return (
          (0, r.useEffect)(
            () => (
              (v.containerId = e.containerId),
              m
                .cancelEmit(3)
                .on(0, T)
                .on(1, (e) => u.current && y(e))
                .on(5, g)
                .emit(2, v),
              () => {
                d.clear(), m.emit(3, v);
              }
            ),
            [],
          ),
          (0, r.useEffect)(() => {
            (v.props = e), (v.isToastActive = p), (v.displayedToast = n.length);
          }),
          {
            getToastToRender: function (t) {
              let n = new Map(),
                r = Array.from(d.values());
              return (
                e.newestOnTop && r.reverse(),
                r.forEach((e) => {
                  let { position: t } = e.props;
                  n.has(t) || n.set(t, []), n.get(t).push(e);
                }),
                Array.from(n, (e) => t(e[0], e[1]))
              );
            },
            containerRef: u,
            isToastActive: p,
          }
        );
      }
      function g(e) {
        return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
      }
      function y(e) {
        return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
      }
      function x(e) {
        let [t, n] = (0, r.useState)(!1),
          [o, a] = (0, r.useState)(!1),
          s = (0, r.useRef)(null),
          l = (0, r.useRef)({
            start: 0,
            x: 0,
            y: 0,
            delta: 0,
            removalDistance: 0,
            canCloseOnClick: !0,
            canDrag: !1,
            boundingRect: null,
            didMove: !1,
          }).current,
          c = (0, r.useRef)(e),
          { autoClose: u, pauseOnHover: d, closeToast: f, onClick: m, closeOnClick: p } = e;
        function h(t) {
          if (e.draggable) {
            'touchstart' === t.nativeEvent.type && t.nativeEvent.preventDefault(),
              (l.didMove = !1),
              document.addEventListener('mousemove', b),
              document.addEventListener('mouseup', E),
              document.addEventListener('touchmove', b),
              document.addEventListener('touchend', E);
            let n = s.current;
            (l.canCloseOnClick = !0),
              (l.canDrag = !0),
              (l.boundingRect = n.getBoundingClientRect()),
              (n.style.transition = ''),
              (l.x = g(t.nativeEvent)),
              (l.y = y(t.nativeEvent)),
              'x' === e.draggableDirection
                ? ((l.start = l.x), (l.removalDistance = n.offsetWidth * (e.draggablePercent / 100)))
                : ((l.start = l.y),
                  (l.removalDistance =
                    n.offsetHeight *
                    (80 === e.draggablePercent ? 1.5 * e.draggablePercent : e.draggablePercent / 100)));
          }
        }
        function v(t) {
          if (l.boundingRect) {
            let { top: n, bottom: r, left: o, right: a } = l.boundingRect;
            'touchend' !== t.nativeEvent.type && e.pauseOnHover && l.x >= o && l.x <= a && l.y >= n && l.y <= r
              ? T()
              : x();
          }
        }
        function x() {
          n(!0);
        }
        function T() {
          n(!1);
        }
        function b(n) {
          let r = s.current;
          l.canDrag &&
            r &&
            ((l.didMove = !0),
            t && T(),
            (l.x = g(n)),
            (l.y = y(n)),
            (l.delta = 'x' === e.draggableDirection ? l.x - l.start : l.y - l.start),
            l.start !== l.x && (l.canCloseOnClick = !1),
            (r.style.transform = `translate${e.draggableDirection}(${l.delta}px)`),
            (r.style.opacity = '' + (1 - Math.abs(l.delta / l.removalDistance))));
        }
        function E() {
          document.removeEventListener('mousemove', b),
            document.removeEventListener('mouseup', E),
            document.removeEventListener('touchmove', b),
            document.removeEventListener('touchend', E);
          let t = s.current;
          if (l.canDrag && l.didMove && t) {
            if (((l.canDrag = !1), Math.abs(l.delta) > l.removalDistance)) return a(!0), void e.closeToast();
            (t.style.transition = 'transform 0.2s, opacity 0.2s'),
              (t.style.transform = `translate${e.draggableDirection}(0)`),
              (t.style.opacity = '1');
          }
        }
        (0, r.useEffect)(() => {
          c.current = e;
        }),
          (0, r.useEffect)(
            () => (
              s.current && s.current.addEventListener('d', x, { once: !0 }),
              i(e.onOpen) && e.onOpen((0, r.isValidElement)(e.children) && e.children.props),
              () => {
                let e = c.current;
                i(e.onClose) && e.onClose((0, r.isValidElement)(e.children) && e.children.props);
              }
            ),
            [],
          ),
          (0, r.useEffect)(
            () => (
              e.pauseOnFocusLoss &&
                (document.hasFocus() || T(), window.addEventListener('focus', x), window.addEventListener('blur', T)),
              () => {
                e.pauseOnFocusLoss && (window.removeEventListener('focus', x), window.removeEventListener('blur', T));
              }
            ),
            [e.pauseOnFocusLoss],
          );
        let C = { onMouseDown: h, onTouchStart: h, onMouseUp: v, onTouchEnd: v };
        return (
          u && d && ((C.onMouseEnter = T), (C.onMouseLeave = x)),
          p &&
            (C.onClick = (e) => {
              m && m(e), l.canCloseOnClick && f();
            }),
          { playToast: x, pauseToast: T, isRunning: t, preventExitTransition: o, toastRef: s, eventHandlers: C }
        );
      }
      function T(e) {
        let { closeToast: t, theme: n, ariaLabel: o = 'close' } = e;
        return r.createElement(
          'button',
          {
            className: `Toastify__close-button Toastify__close-button--${n}`,
            type: 'button',
            onClick: (e) => {
              e.stopPropagation(), t(e);
            },
            'aria-label': o,
          },
          r.createElement(
            'svg',
            { 'aria-hidden': 'true', viewBox: '0 0 14 16' },
            r.createElement('path', {
              fillRule: 'evenodd',
              d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z',
            }),
          ),
        );
      }
      function b(e) {
        let {
            delay: t,
            isRunning: n,
            closeToast: a,
            type: s = 'default',
            hide: l,
            className: c,
            style: u,
            controlledProgress: d,
            progress: f,
            rtl: m,
            isIn: p,
            theme: h,
          } = e,
          v = l || (d && 0 === f),
          g = { ...u, animationDuration: `${t}ms`, animationPlayState: n ? 'running' : 'paused', opacity: v ? 0 : 1 };
        d && (g.transform = `scaleX(${f})`);
        let y = o(
            'Toastify__progress-bar',
            d ? 'Toastify__progress-bar--controlled' : 'Toastify__progress-bar--animated',
            `Toastify__progress-bar-theme--${h}`,
            `Toastify__progress-bar--${s}`,
            { 'Toastify__progress-bar--rtl': m },
          ),
          x = i(c) ? c({ rtl: m, type: s, defaultClassName: y }) : o(y, c);
        return r.createElement('div', {
          role: 'progressbar',
          'aria-hidden': v ? 'true' : 'false',
          'aria-label': 'notification timer',
          className: x,
          style: g,
          [d && f >= 1 ? 'onTransitionEnd' : 'onAnimationEnd']:
            d && f < 1
              ? null
              : () => {
                  p && a();
                },
        });
      }
      let E = (e) => {
          let { isRunning: t, preventExitTransition: n, toastRef: a, eventHandlers: s } = x(e),
            {
              closeButton: l,
              children: c,
              autoClose: u,
              onClick: d,
              type: f,
              hideProgressBar: m,
              closeToast: p,
              transition: h,
              position: v,
              className: g,
              style: y,
              bodyClassName: E,
              bodyStyle: C,
              progressClassName: N,
              progressStyle: I,
              updateId: _,
              role: O,
              progress: B,
              rtl: k,
              toastId: w,
              deleteToast: j,
              isIn: L,
              isLoading: P,
              iconOut: R,
              closeOnClick: S,
              theme: q,
            } = e,
            M = o(
              'Toastify__toast',
              `Toastify__toast-theme--${q}`,
              `Toastify__toast--${f}`,
              { 'Toastify__toast--rtl': k },
              { 'Toastify__toast--close-on-click': S },
            ),
            D = i(g) ? g({ rtl: k, position: v, type: f, defaultClassName: M }) : o(M, g),
            A = !!B || !u,
            z = { closeToast: p, type: f, theme: q },
            $ = null;
          return (
            !1 === l || ($ = i(l) ? l(z) : (0, r.isValidElement)(l) ? (0, r.cloneElement)(l, z) : T(z)),
            r.createElement(
              h,
              { isIn: L, done: j, position: v, preventExitTransition: n, nodeRef: a },
              r.createElement(
                'div',
                { id: w, onClick: d, className: D, ...s, style: y, ref: a },
                r.createElement(
                  'div',
                  { ...(L && { role: O }), className: i(E) ? E({ type: f }) : o('Toastify__toast-body', E), style: C },
                  null != R &&
                    r.createElement(
                      'div',
                      { className: o('Toastify__toast-icon', { 'Toastify--animate-icon Toastify__zoom-enter': !P }) },
                      R,
                    ),
                  r.createElement('div', null, c),
                ),
                $,
                r.createElement(b, {
                  ...(_ && !A ? { key: `pb-${_}` } : {}),
                  rtl: k,
                  theme: q,
                  delay: u,
                  isRunning: t,
                  isIn: L,
                  closeToast: p,
                  hide: m,
                  type: f,
                  style: I,
                  className: N,
                  controlledProgress: A,
                  progress: B || 0,
                }),
              ),
            )
          );
        },
        C = function (e, t) {
          return (
            void 0 === t && (t = !1),
            {
              enter: `Toastify--animate Toastify__${e}-enter`,
              exit: `Toastify--animate Toastify__${e}-exit`,
              appendPosition: t,
            }
          );
        },
        N = d(C('bounce', !0)),
        I = d(C('slide', !0)),
        _ = d(C('zoom')),
        O = d(C('flip')),
        B = (0, r.forwardRef)((e, t) => {
          let { getToastToRender: n, containerRef: a, isToastActive: s } = v(e),
            { className: c, style: u, rtl: d, containerId: f } = e;
          return (
            (0, r.useEffect)(() => {
              t && (t.current = a.current);
            }, []),
            r.createElement(
              'div',
              { ref: a, className: 'Toastify', id: f },
              n((e, t) => {
                let n = t.length ? { ...u } : { ...u, pointerEvents: 'none' };
                return r.createElement(
                  'div',
                  {
                    className: (function (e) {
                      let t = o('Toastify__toast-container', `Toastify__toast-container--${e}`, {
                        'Toastify__toast-container--rtl': d,
                      });
                      return i(c) ? c({ position: e, rtl: d, defaultClassName: t }) : o(t, l(c));
                    })(e),
                    style: n,
                    key: `container-${e}`,
                  },
                  t.map((e, n) => {
                    let { content: o, props: a } = e;
                    return r.createElement(
                      E,
                      {
                        ...a,
                        isIn: s(a.toastId),
                        style: { ...a.style, '--nth': n + 1, '--len': t.length },
                        key: `toast-${a.key}`,
                      },
                      o,
                    );
                  }),
                );
              }),
            )
          );
        });
      (B.displayName = 'ToastContainer'),
        (B.defaultProps = {
          position: 'top-right',
          transition: N,
          autoClose: 5e3,
          closeButton: T,
          pauseOnHover: !0,
          pauseOnFocusLoss: !0,
          closeOnClick: !0,
          draggable: !0,
          draggablePercent: 80,
          draggableDirection: 'x',
          role: 'alert',
          theme: 'light',
        });
      let k,
        w = new Map(),
        j = [],
        L = 1;
      function P(e, t) {
        return w.size > 0 ? m.emit(0, e, t) : j.push({ content: e, options: t }), t.toastId;
      }
      function R(e, t) {
        return { ...t, type: (t && t.type) || e, toastId: t && (s(t.toastId) || a(t.toastId)) ? t.toastId : '' + L++ };
      }
      function S(e) {
        return (t, n) => P(t, R(e, n));
      }
      function q(e, t) {
        return P(e, R('default', t));
      }
      (q.loading = (e, t) =>
        P(e, R('default', { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...t }))),
        (q.promise = function (e, t, n) {
          let r,
            { pending: o, error: a, success: l } = t;
          o && (r = s(o) ? q.loading(o, n) : q.loading(o.render, { ...n, ...o }));
          let c = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null },
            u = (e, t, o) => {
              if (null == t) return void q.dismiss(r);
              let a = { type: e, ...c, ...n, data: o },
                i = s(t) ? { render: t } : t;
              return r ? q.update(r, { ...a, ...i }) : q(i.render, { ...a, ...i }), o;
            },
            d = i(e) ? e() : e;
          return d.then((e) => u('success', l, e)).catch((e) => u('error', a, e)), d;
        }),
        (q.success = S('success')),
        (q.info = S('info')),
        (q.error = S('error')),
        (q.warning = S('warning')),
        (q.warn = q.warning),
        (q.dark = (e, t) => P(e, R('default', { theme: 'dark', ...t }))),
        (q.dismiss = (e) => {
          w.size > 0 ? m.emit(1, e) : (j = j.filter((t) => null != e && t.options.toastId !== e));
        }),
        (q.clearWaitingQueue = function (e) {
          return void 0 === e && (e = {}), m.emit(5, e);
        }),
        (q.isActive = (e) => {
          let t = !1;
          return (
            w.forEach((n) => {
              n.isToastActive && n.isToastActive(e) && (t = !0);
            }),
            t
          );
        }),
        (q.update = function (e, t) {
          void 0 === t && (t = {}),
            setTimeout(() => {
              let n = (function (e, t) {
                let { containerId: n } = t,
                  r = w.get(n || k);
                return r && r.getToast(e);
              })(e, t);
              if (n) {
                let { props: r, content: o } = n,
                  a = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: '' + L++ };
                a.toastId !== e && (a.staleId = e);
                let s = a.render || o;
                delete a.render, P(s, a);
              }
            }, 0);
        }),
        (q.done = (e) => {
          q.update(e, { progress: 1 });
        }),
        (q.onChange = (e) => (
          m.on(4, e),
          () => {
            m.off(4, e);
          }
        )),
        (q.POSITION = {
          TOP_LEFT: 'top-left',
          TOP_RIGHT: 'top-right',
          TOP_CENTER: 'top-center',
          BOTTOM_LEFT: 'bottom-left',
          BOTTOM_RIGHT: 'bottom-right',
          BOTTOM_CENTER: 'bottom-center',
        }),
        (q.TYPE = { INFO: 'info', SUCCESS: 'success', WARNING: 'warning', ERROR: 'error', DEFAULT: 'default' }),
        m
          .on(2, (e) => {
            (k = e.containerId || e),
              w.set(k, e),
              j.forEach((e) => {
                m.emit(0, e.content, e.options);
              }),
              (j = []);
          })
          .on(3, (e) => {
            w.delete(e.containerId || e), 0 === w.size && m.off(0).off(1).off(5);
          });
    },
  },
  function (e) {
    e.O(0, [4872, 2598, 8809, 5687, 2379, 9810, 8863, 7190, 6394, 4440, 2971, 4938, 1744], function () {
      return e((e.s = 6472));
    }),
      (_N_E = e.O());
  },
]);
