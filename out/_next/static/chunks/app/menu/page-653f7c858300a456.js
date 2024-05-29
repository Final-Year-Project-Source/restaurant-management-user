(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7106],
  {
    3140: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 60227));
    },
    60227: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return z;
          },
        });
      var r = n(57437);
      n(20069);
      var i = n(75370),
        l = n(1434),
        a = n(2265),
        s = n(76158),
        o = n(35414),
        c = n(90850),
        d = n(16223),
        u = n(73297),
        p = n(93046);
      let m = {
          groupName: 'Dietary restrictions',
          options: [
            { icon: 'Vegan', label: 'Vegan' },
            { icon: 'Vegetarian', label: 'Vegetarian' },
            { icon: 'Diary-free', label: 'Diary-free' },
            { icon: 'Gluten-free', label: 'Gluten-free' },
          ],
        },
        f = {
          groupName: 'Protein',
          options: [
            { label: 'Chicken' },
            { label: 'Pork' },
            { label: 'Beef' },
            { label: 'Seafood' },
            { label: 'Other' },
          ],
        };
      var x = n(91623),
        h = n(77190);
      n(19509);
      var v = (e) => {
          let { ...t } = e,
            [n, i] = (0, a.useState)(!1);
          return (0, r.jsx)(x.ZP, {
            theme: {
              components: {
                Input: {
                  paddingInline: 16,
                  paddingBlock: 11,
                  activeBorderColor: 'rgba(19, 28, 22, 0.2)',
                  hoverBorderColor: 'rgba(19, 28, 22, 0.2)',
                },
              },
              token: {
                lineHeight: 1.5,
                colorText: '#131C16',
                fontSize: 14,
                colorBgContainer: 'transparent',
                colorBorder: 'rgba(19, 28, 22, 0.2)',
                colorPrimary: 'transparent',
                colorPrimaryHover: 'transparent',
                colorPrimaryActive: 'transparent',
                colorTextPlaceholder: 'rgba(0, 0, 0, 0.50)',
                borderRadius: 16,
                fontFamily: 'var(--font-open-sans)',
              },
            },
            children: (0, r.jsx)(h.default, {
              className: 'search-input-container--'.concat(n ? 'focus' : ''),
              placeholder: 'Search menu',
              onFocus: () => i(!0),
              onBlur: () => i(!1),
              prefix: (0, r.jsx)('div', { className: 'mr-[8px]', children: (0, r.jsx)(o.W1, {}) }),
              ...t,
            }),
          });
        },
        g = n(11425),
        y = n(24033),
        b = (e) => {
          var t, n;
          let {
            children: i,
            handleSearch: m,
            disabledSecondary: f,
            toggleFilter: x,
            onClickSecondaryBtn: h,
            onClickPrimaryBtn: b,
            secondaryBtnChildren: j,
            primaryBtnChildren: k,
            isShowPrimaryButton: C,
            activeCategory: N,
            setActiveCategory: S,
            isClickedCategoryBtn: T,
            setIsClickedClickCategoryBtn: B,
            isEmptyData: w,
            categories: E,
            bottomHeight: P = 0,
          } = e;
          (0, y.useRouter)();
          let R = (0, a.useRef)(null),
            I =
              (null === (n = null == R ? void 0 : R.current) || void 0 === n
                ? void 0
                : null === (t = n.getBoundingClientRect()) || void 0 === t
                  ? void 0
                  : t.top) === 0,
            q = (0, a.useRef)(null),
            Z = (0, p.v9)((e) => e.menuFilterReducer),
            [_, A] = (0, a.useState)(),
            { scrollBottom: F } = (0, g.I)(q),
            { height: L } = (0, l.d)(),
            O = (0, a.useMemo)(() => (null == _ ? void 0 : _.protein) || [], [_]),
            D = (0, a.useMemo)(() => (null == _ ? void 0 : _.dietaryRestrictions) || [], [_]),
            z = (0, a.useMemo)(() => (null == O ? void 0 : O.length) + (null == D ? void 0 : D.length), [D, O]),
            M = (null == E ? void 0 : E.map((e) => ({ ...e, id: e._id }))) || [];
          (0, a.useEffect)(() => {
            A(Z);
          }, [Z]),
            (0, a.useEffect)(() => {
              if (T) return;
              let e = document.getElementById('btn_category_'.concat(N));
              if (e) {
                let t = e.parentElement;
                if (t) {
                  let n = t.getBoundingClientRect(),
                    r = e.getBoundingClientRect().left - n.left - 24;
                  t.scrollTo({ left: r, behavior: 'smooth' });
                }
              }
            }, [N, T]);
          let U = (e) => {
              if (N === e) return;
              S(e), B(!0);
              let t = document.getElementById(e);
              if (t) {
                var n, r;
                let i =
                    (null == t ? void 0 : null === (n = t.getBoundingClientRect()) || void 0 === n ? void 0 : n.top) -
                    (e === (null === (r = M[0]) || void 0 === r ? void 0 : r.id) ? 150 : 77) -
                    20,
                  l = q.current;
                l && l.scrollTo({ top: l.scrollTop + i, behavior: 'smooth' }),
                  setTimeout(() => {
                    B(!1);
                  }, 500);
              }
            },
            [H, G] = (0, a.useState)(''),
            V = E.filter((e, t) => M.findIndex((t) => t.name === e.name) === t);
          return (0, r.jsx)('main', {
            ref: q,
            className: 'overflow-y-auto h-full',
            style: { height: L - 85 },
            children: (0, r.jsxs)('div', {
              className: 'flex flex-col '.concat(w ? 'h-full' : ''),
              children: [
                (0, r.jsxs)('div', {
                  className: 'w-full flex flex-row space-x-[9px] pt-[15px] pb-[10px] px-[24px]',
                  children: [
                    (0, r.jsx)(v, {
                      value: H,
                      suffix:
                        H &&
                        (0, r.jsx)(u.Z, {
                          style: { color: 'rgba(19, 28, 22, 0.50)' },
                          onClick: (e) => {
                            G(''), m && m(e);
                          },
                        }),
                      onChange: (e) => {
                        G(e.target.value), m && m(e);
                      },
                    }),
                    (0, r.jsxs)('div', {
                      className: 'relative',
                      children: [
                        (0, r.jsx)(s.hU, { className: 'p-[10px]', onClick: x, icon: (0, r.jsx)(o.k1, {}) }),
                        !!z &&
                          (0, r.jsx)('span', {
                            className:
                              'absolute top-[-2px] right-[-1px] flex items-center justify-center font-open-sans bg-black-500 text-white h-[18px] min-w-[18px] font-bold text-[11px] leading-[28px] rounded-[50%]',
                            children: z,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)('div', {
                  ref: R,
                  className:
                    'sticky shrink-0 top-0 bg-grey-100 z-10 pl-[24px] pt-[20px] pb-[19px] flex space-x-[14px] overflow-auto '.concat(
                      (null == R ? void 0 : R.current) && I ? 'shadow-medium-bottom' : '',
                    ),
                  children: V.map((e) =>
                    (0, r.jsx)(
                      d.Z,
                      {
                        id: 'btn_category_'.concat(e.id),
                        active: N === e.id,
                        onClick: () => U(e.id),
                        children: e.name,
                      },
                      e.id,
                    ),
                  ),
                }),
                i,
                (0, r.jsx)(c.Z, {
                  className: F - (50 + P) > 0 ? 'shadow-medium-top' : 'shadow-medium-none',
                  isShowPrimaryButton: C,
                  disabledSecondary: f,
                  onClickPrimaryBtn: b,
                  primaryBtnChildren: k,
                  onClickSecondaryBtn: h,
                  secondaryBtnChildren: j,
                }),
              ],
            }),
          });
        },
        j = n(90601),
        k = n(29340),
        C = n(55261),
        N = n(97500),
        S = n.n(N),
        T = n(32596),
        B = n(1922),
        w = (e) => {
          let {
            id: t,
            name: n,
            description: i,
            price: l,
            image_url: a,
            discountPrice: s,
            className: o,
            track_stock: c,
          } = e;
          return (0, r.jsxs)('div', {
            className: ''.concat(o || '', ' ').concat((!c && 'opacity-50') || '', ' flex w-full'),
            children: [
              (0, r.jsx)(T.Z, { className: 'mr-[24px]', width: 86, height: 86, src: a, alt: n }),
              (0, r.jsxs)('div', {
                className: 'flex flex-col w-full',
                children: [
                  (0, r.jsx)('div', { className: 'text-[18px] text-black-400', children: n }),
                  (0, r.jsx)('div', {
                    className: 'text-[13px] text-black-500 mt-[7px] '.concat(S().className),
                    dangerouslySetInnerHTML: { __html: i || '' },
                  }),
                  (0, r.jsxs)('div', {
                    className: 'flex items-center justify-between mt-[9px]',
                    children: [
                      (s < l &&
                        (0, r.jsxs)('div', {
                          className: 'flex space-x-[3px]',
                          children: [
                            (0, r.jsx)('div', { className: 'text-[18px] text-black-400 line-through', children: l }),
                            (0, r.jsx)('div', { className: 'text-[18px] text-black-500', children: s }),
                          ],
                        })) ||
                        (0, r.jsx)('div', { className: 'text-[18px] text-black-400', children: l }),
                      (0, r.jsxs)('div', {
                        className: 'flex space-x-[10px]',
                        children: [
                          !c && (0, r.jsx)(B.Z, { children: 'Out of stock' }),
                          c &&
                            (0, r.jsx)(C.Z, {
                              className: 'btn--add-to-basket',
                              id: 'btn--add_'.concat(t),
                              plus: !0,
                              variant: 'secondary',
                              disabled: !c,
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        E = n(33722),
        P = n(64308),
        R = n(85363),
        I = n(91637),
        q = n(18968),
        Z = n(66693),
        _ = n(61732),
        A = n(99424),
        F = n(68143),
        L = n.n(F),
        O = n(61396),
        D = n.n(O);
      function z() {
        var e, t, n;
        let s = (0, p.I0)(),
          [o, c] = (0, a.useState)(0),
          [d, u] = (0, a.useState)(''),
          h = (0, p.v9)((e) => e.menuFilterReducer.protein),
          v = (0, p.v9)((e) => e.menuFilterReducer.dietaryRestrictions),
          [g, C] = (0, a.useState)([]),
          [N, S] = (0, a.useState)([]),
          T = (0, p.v9)((e) => e.tableReducer.tableId),
          [B, F] = (0, a.useState)(!1),
          O = (0, y.useRouter)(),
          { data: z } = (0, R.NL)(),
          { data: M } = (0, Z.fq)({ id: T || '' }, { skip: !T }),
          U = null == M ? void 0 : M.data,
          { data: H } = (0, I.$r)(
            { id: null == U ? void 0 : U.discount },
            { skip: !(null == U ? void 0 : U.discount) },
          );
        null == H || H.data;
        let { data: G, isFetching: V } = (0, q.OR)({ search: d, dietary_restrictions: g, proteins: N }),
          J = (0, a.useMemo)(() => (z ? [...z].sort((e, t) => e.name.localeCompare(t.name)) : []), [z]),
          Q = null == G ? void 0 : G.data,
          W = (e, t) =>
            (Array.isArray(t) ? [...t] : [])
              .sort((e, t) => e.name.localeCompare(t.name))
              .map((t) => {
                let n = null == e ? void 0 : e.filter((e) => e.category_id === t.id);
                if ((null == n ? void 0 : n.length) > 0) {
                  let e = n.sort((e, t) => e.name.localeCompare(t.name));
                  return { id: t.id, name: t.name, items: e };
                }
                return null;
              })
              .filter(Boolean),
          $ = (0, a.useMemo)(() => W(Q, J), [Q, J]),
          [X, Y] = (0, a.useState)(null == J ? void 0 : null === (e = J[0]) || void 0 === e ? void 0 : e.id),
          [K, ee] = (0, a.useState)(!1),
          et = (0, p.v9)((e) => e.basketReducer.basket),
          [en, er] = (0, a.useState)([]),
          ei = (0, y.useSearchParams)().get('bill_id'),
          { data: el, isFetching: ea } = (0, P.LJ)({ id: ei || '' }, { skip: !ei }),
          es =
            ((null == en ? void 0 : en.length) || 0) +
            ((null == el
              ? void 0
              : null === (n = el.data) || void 0 === n
                ? void 0
                : null === (t = n.orders) || void 0 === t
                  ? void 0
                  : t.reduce((e, t) => e + t.items.length, 0)) || 0),
          { width: eo, height: ec } = (0, l.d)();
        (0, a.useEffect)(() => {
          er(null == et ? void 0 : et.orderItems);
        }, [et]);
        let [ed, eu] = (0, a.useState)([]),
          [ep, em] = (0, a.useState)([]);
        (0, a.useEffect)(() => {
          C(v), S(h), eu(v), em(h);
        }, [v, h, B]);
        let ef = () => {
            F(!1);
          },
          ex = (0, a.useCallback)(
            (e) => {
              1 >= Math.abs(e.length - J.length) ||
                e.forEach((e) => {
                  e.target.id && e.isIntersecting && Y(e.target.id);
                });
            },
            [J],
          ),
          eh = L()((e) => {
            u(e);
          }, 500);
        (0, a.useEffect)(() => {
          var e;
          Y(null == $ ? void 0 : null === (e = $[0]) || void 0 === e ? void 0 : e.id);
        }, [$]),
          (0, a.useEffect)(() => {
            if (K) return;
            let e = (97 / ec) * 100,
              t = new IntersectionObserver(ex, { rootMargin: '-'.concat(e, '% 0px -').concat(100 - e, '% 0px') });
            return (
              document.querySelectorAll('.category--item').forEach((e) => {
                t.observe(e);
              }),
              () => {
                t.disconnect();
              }
            );
          }, [K, ex, G, ec]);
        let ev = (0, r.jsxs)('div', {
          children: [
            (0, r.jsx)('span', { children: 'View basket' }),
            (0, r.jsxs)('span', {
              id: 'basket-ele',
              className: 'font-normal',
              children: ['・', es, ' item', es > 1 ? 's' : ''],
            }),
          ],
        });
        return (
          (0, a.useEffect)(() => {
            if ($) {
              let e = document.querySelectorAll('#last-category'),
                t = e[e.length - 1];
              t && c(ec - (162 + t.getBoundingClientRect().height + 40 + 20) + 1);
            }
          }, [$]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(b, {
                secondaryBtnChildren: ev,
                onClickSecondaryBtn: () => O.push(ei ? '/basket?bill_id='.concat(ei) : '/basket'),
                toggleFilter: () => {
                  F(!0);
                },
                activeCategory: X,
                setActiveCategory: Y,
                isClickedCategoryBtn: K,
                handleSearch: (e) => {
                  eh(e.target.value);
                },
                setIsClickedClickCategoryBtn: ee,
                isEmptyData: !(null == $ ? void 0 : $.length),
                disabledSecondary: !es,
                categories: $,
                bottomHeight: o,
                children: (0, r.jsxs)('main', {
                  className: 'flex flex-col justify-center px-[24px] h-full',
                  children: [
                    (null == $ ? void 0 : $.length) === 0 &&
                      !V &&
                      (0, r.jsx)(_.Z, {
                        image: _.Z.PRESENTED_IMAGE_SIMPLE,
                        description: (0, r.jsx)('span', {
                          className: 'text-black-300 text-lg',
                          children: 'No items found',
                        }),
                      }),
                    null == $
                      ? void 0
                      : $.map((e, t) => {
                          var n, i;
                          let l =
                            (null == e ? void 0 : null === (n = e.items) || void 0 === n ? void 0 : n.length) || 0;
                          return (0, r.jsxs)(
                            'div',
                            {
                              id: 'last-category',
                              className: 'flex flex-col justify-start w-full mb-[40px] '.concat(
                                0 === t ? 'pt-[5px]' : '',
                              ),
                              children: [
                                (0, r.jsx)('p', {
                                  id: null == e ? void 0 : e.id,
                                  className: 'text-[28px] font-medium text-black-500 leading-7 category--item',
                                  children: null == e ? void 0 : e.name,
                                }),
                                (0, r.jsx)('div', {
                                  className: 'flex flex-col w-full mt-[30px]',
                                  children:
                                    null == e
                                      ? void 0
                                      : null === (i = e.items) || void 0 === i
                                        ? void 0
                                        : i.map((e, t) =>
                                            (0, r.jsxs)(
                                              D(),
                                              {
                                                className: ''.concat(
                                                  e.is_available ? 'cursor-pointer' : 'pointer-events-none',
                                                ),
                                                href: ei
                                                  ? '/product?id='.concat(e.id, '&bill_id=').concat(ei)
                                                  : '/product?id='.concat(e.id),
                                                children: [
                                                  (0, r.jsx)('div', {
                                                    className: 0 !== t ? 'mt-[22px]' : '',
                                                    children: (0, r.jsx)(w, {
                                                      id: e.id,
                                                      name: e.name,
                                                      image_url: e.image_url,
                                                      description: e.description,
                                                      price: e.price,
                                                      track_stock: e.is_available,
                                                    }),
                                                  }),
                                                  t < l - 1 &&
                                                    (0, r.jsx)('hr', {
                                                      className: 'w-full border-t border-black-100 mt-[18px]',
                                                    }),
                                                ],
                                              },
                                              e._id,
                                            ),
                                          ),
                                }),
                              ],
                            },
                            null == e ? void 0 : e.id,
                          );
                        }),
                    (0, r.jsx)('div', { style: { height: o } }),
                    B &&
                      (0, r.jsx)(x.ZP, {
                        theme: { token: { fontFamily: 'var(--font-rubik)' } },
                        children: (0, r.jsx)(A.Z, {
                          title: '',
                          closable: !1,
                          placement: 'left',
                          onClose: ef,
                          open: B,
                          width: eo,
                          children: (0, r.jsx)(j.Z, {
                            isHiddenAvatar: !0,
                            isShowPrimaryButton: !1,
                            isShowBackBtn: !0,
                            onClickBackBtn: ef,
                            secondaryBtnChildren: (0, r.jsx)(r.Fragment, { children: 'Apply filters' }),
                            onClickSecondaryBtn: () => {
                              s((0, E.BE)(ed)), s((0, E.dL)(ep)), ef();
                            },
                            title: 'Filter menu',
                            children: (0, r.jsxs)('div', {
                              className: 'flex flex-col space-y-[29px] mt-[12px] pl-[25px]',
                              children: [
                                (0, r.jsx)(i.Z, {
                                  defaultValue: v,
                                  ...m,
                                  onChange: (e) => {
                                    eu(e);
                                  },
                                }),
                                (0, r.jsx)(i.Z, {
                                  defaultValue: h,
                                  ...f,
                                  onChange: (e) => {
                                    em(e);
                                  },
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                  ],
                }),
              }),
              (V || ea) && (0, r.jsx)(k.Z, {}),
            ],
          })
        );
      }
    },
    65149: function (e, t, n) {
      'use strict';
      var r = n(57437),
        i = n(16691),
        l = n.n(i);
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
          return (0, r.jsx)(l(), { priority: !0, src: n, alt: t, width: 19, height: i ? 26 : 19 });
        });
    },
    29340: function (e, t, n) {
      'use strict';
      var r = n(57437),
        i = n(91623),
        l = n(59810);
      t.Z = () =>
        (0, r.jsx)(i.ZP, {
          theme: { token: { colorPrimary: '#131C16' } },
          children: (0, r.jsx)(l.Z, {
            className: '!fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 black-500',
            size: 'large',
          }),
        });
    },
    32596: function (e, t, n) {
      'use strict';
      var r = n(57437),
        i = n(23172),
        l = n(16691),
        a = n.n(l),
        s = n(2265);
      t.Z = (e) => {
        let { src: t, alt: n, width: l, height: o, className: c } = e,
          [d, u] = (0, s.useState)(!0),
          p = { width: l, height: o };
        return (0, r.jsxs)('div', {
          className: ''.concat(c || '', ' flex flex-col items-center shrink-0'),
          style: p,
          children: [
            d && (0, r.jsx)(i.Z.Button, { style: p, active: !0 }),
            (0, r.jsx)(a(), {
              className: 'shrink-0',
              priority: !0,
              onLoad: () => u(!1),
              onError: () => u(!1),
              width: l,
              height: o,
              src: t || '/assets/images/product-default.png',
              alt: n,
              style: { opacity: d ? 0 : 1 },
            }),
          ],
        });
      };
    },
    1922: function (e, t, n) {
      'use strict';
      var r = n(57437),
        i = n(97500),
        l = n.n(i),
        a = n(91623),
        s = n(28073);
      t.Z = (e) => {
        let { className: t, children: n, ...i } = e;
        return (0, r.jsx)(a.ZP, {
          theme: {
            components: {
              Tag: {
                borderRadiusSM: 7,
                defaultBg: '#fff',
                fontSizeSM: 10,
                defaultColor: '#FA4A0C',
                lineHeightSM: 2.2,
                colorBorder: '#FA4A0C',
              },
            },
          },
          children: (0, r.jsx)(s.Z, {
            ...i,
            className: ' '.concat(t || '', '  font-normal'),
            style: { marginInlineEnd: 0 },
            children: (0, r.jsx)('div', { className: l().className, children: n }),
          }),
        });
      };
    },
    76158: function (e, t, n) {
      'use strict';
      n.d(t, {
        hU: function () {
          return l.Z;
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
        l = n(86550);
    },
    75370: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(57437);
      n(2265), n(47420);
      var i = n(91623),
        l = n(63305),
        a = n(65149),
        s = n(97500),
        o = n.n(s),
        c = (e) => {
          let { value: t, icon: n, price: s } = e;
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
              children: (0, r.jsx)(l.Z, {
                value: t,
                children: (0, r.jsx)('div', {
                  className: 'flex justify-between text-black-500 ml-[3px]',
                  children: (0, r.jsxs)('div', {
                    className: 'flex items-center',
                    children: [
                      n && (0, r.jsx)('div', { className: 'mr-[8px]', children: (0, r.jsx)(a.Z, { iconName: n }) }),
                      (0, r.jsx)('div', { className: 'text-[18px] '.concat(o().className), children: ''.concat(t) }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
        d = (e) => {
          let { discount: t, groupName: n, options: i, onChange: a, defaultValue: s } = e;
          return (0, r.jsxs)('div', {
            children: [
              (0, r.jsx)('p', { className: 'text-[18px] font-medium mb-[11px] text-black-400', children: n }),
              (0, r.jsx)(l.Z.Group, {
                defaultValue: s,
                className: 'flex flex-col w-full',
                onChange: (e) => {
                  a(e, n);
                },
                children: (0, r.jsx)('div', {
                  className: 'flex flex-col space-y-[10px]',
                  children:
                    null == i
                      ? void 0
                      : i.map((e, i) => {
                          var l;
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
                                      : null === (l = e.icon) || void 0 === l
                                        ? void 0
                                        : l.toLowerCase(),
                                  price: e.price,
                                }),
                                e.price &&
                                  (0, r.jsxs)('label', {
                                    className: 'text-[18px] '.concat(o().className),
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
          [i, l] = (0, r.useState)(!1),
          [a, s] = (0, r.useState)(0),
          [o, c] = (0, r.useState)(0),
          d = (0, r.useCallback)(() => {
            let t = null == e ? void 0 : e.current;
            t &&
              (n(t.scrollHeight > t.clientHeight),
              l(t.scrollWidth > t.clientWidth),
              s(t.scrollTop),
              c(t.scrollHeight - t.offsetHeight - t.scrollTop));
          }, [null == e ? void 0 : e.current]);
        (0, r.useEffect)(() => {
          d(), window.addEventListener('resize', d);
          let t = null == e ? void 0 : e.current,
            n = new ResizeObserver(() => {
              d();
            });
          return (
            t && t && n.observe(t),
            () => {
              window.removeEventListener('resize', d), t && n.unobserve(t);
            }
          );
        }, [!0, d, null == e ? void 0 : e.current]);
        let u = (0, r.useCallback)(() => {
          let t = null == e ? void 0 : e.current;
          t && (s(t.scrollTop), c(t.scrollHeight - t.offsetHeight - t.scrollTop));
        }, [null == e ? void 0 : e.current]);
        return (
          (0, r.useEffect)(() => {
            let t = null == e ? void 0 : e.current;
            if (!t) return;
            u(), t.addEventListener('scroll', u);
            let n = new ResizeObserver(() => {
              u();
            });
            return (
              t && t && n.observe(t),
              () => {
                t.removeEventListener('scroll', u);
              }
            );
          }, [!0, d, null == e ? void 0 : e.current]),
          { isVerticalScroll: t, isHorizontalScroll: i, scrollTop: a, scrollBottom: o }
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
    90850: function (e, t, n) {
      'use strict';
      var r = n(57437),
        i = n(76158);
      t.Z = (e) => {
        let {
          isShowPrimaryButton: t = !1,
          primaryBtnChildren: n,
          secondaryBtnChildren: l,
          disabledPrimary: a,
          disabledSecondary: s,
          onClickPrimaryBtn: o,
          onClickSecondaryBtn: c,
          isTextRequestTaxInvoice: d,
          className: u,
        } = e;
        return (0, r.jsxs)('div', {
          className: ''.concat(u || '', ' w-full fixed flex flex-col space-y-3 bottom-0 bg-grey-100 px-6 py-3 z-999'),
          children: [
            d &&
              (0, r.jsx)('div', {
                className: 'text-[18px] text-black-500 text-center mb-2',
                children:
                  'Once you request the tax invoice, a member of our staff will print it off, sign, and hand it to you.',
              }),
            t && (0, r.jsx)(i.zx, { variant: 'primary', disabled: a, onClick: o, children: n }),
            (0, r.jsx)(i.zx, { variant: 'secondary', disabled: s, onClick: c, children: l }),
          ],
        });
      };
    },
    90601: function (e, t, n) {
      'use strict';
      var r = n(57437),
        i = n(24033),
        l = n(2265),
        a = n(76158),
        s = n(11425),
        o = n(35414),
        c = n(90850);
      t.Z = (e) => {
        let {
            isShowBackBtn: t = !0,
            title: n,
            isTextRequestTaxInvoice: d,
            children: u,
            disabledPrimary: p,
            disabledSecondary: m,
            onClickSecondaryBtn: f,
            secondaryBtnChildren: x,
            onClickPrimaryBtn: h,
            primaryBtnChildren: v,
            isShowPrimaryButton: g,
            onClickBackBtn: y,
            onClickDownBtn: b,
            disabledBackBtn: j,
            isHiddenAvatar: k = !1,
          } = e,
          C = (0, l.useRef)(null),
          { scrollTop: N, scrollBottom: S } = (0, s.I)(C);
        (0, i.useRouter)();
        let T = (0, l.useMemo)(() => (g ? '243px' : d ? '211px' : '170px'), [g, d]);
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
                t && (0, r.jsx)(a.hU, { icon: (0, r.jsx)(o.Y4, {}), disabled: j, onClick: y }),
                (0, r.jsx)('span', {
                  className:
                    'w-[calc(100%-8rem)] absolute top-[40%] right-1/2 transform translate-x-1/2 text-center text-xl font-medium text-black-500',
                  children: n,
                }),
                !t && (0, r.jsx)(a.hU, { icon: (0, r.jsx)(o._8, {}), onClick: b }),
              ],
            }),
            (0, r.jsx)('div', { ref: C, className: 'overflow-y-auto max-h-screen-'.concat(T), children: u }),
            (0, r.jsx)(c.Z, {
              className: S - 40 > 0 ? 'shadow-medium-top' : '',
              disabledPrimary: p,
              disabledSecondary: m,
              isTextRequestTaxInvoice: d,
              isShowPrimaryButton: g,
              onClickPrimaryBtn: h,
              primaryBtnChildren: v,
              onClickSecondaryBtn: f,
              secondaryBtnChildren: x,
            }),
          ],
        });
      };
    },
    33722: function (e, t, n) {
      'use strict';
      n.d(t, {
        BE: function () {
          return o;
        },
        dL: function () {
          return s;
        },
      });
      var r = n(73135),
        i = n(50940);
      let l = { protein: (0, i.Oq)(), dietaryRestrictions: (0, i.eU)() },
        a = (0, r.oM)({
          name: 'menuFilter',
          initialState: l,
          reducers: {
            updateProtein: (e, t) => {
              (e.protein = t.payload), localStorage.setItem('protein', JSON.stringify(t.payload));
            },
            updateDietaryRestrictions: (e, t) => {
              (e.dietaryRestrictions = t.payload),
                localStorage.setItem('dietaryRestrictions', JSON.stringify(t.payload));
            },
            resetMenuFilter: (e) => {
              (e.protein = []), (e.dietaryRestrictions = []), (0, i.dl)(), (0, i.A7)();
            },
          },
        }),
        { updateProtein: s, updateDietaryRestrictions: o, resetMenuFilter: c } = a.actions;
      t.ZP = a.reducer;
    },
    64308: function (e, t, n) {
      'use strict';
      n.d(t, {
        LJ: function () {
          return s;
        },
        QC: function () {
          return l;
        },
        db: function () {
          return u;
        },
        kX: function () {
          return p;
        },
        oQ: function () {
          return o;
        },
        w2: function () {
          return c;
        },
      });
      var r = n(85687),
        i = n(40329);
      let l = (0, r.LC)({
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
          useGetBillsQuery: a,
          useGetSingleBillQuery: s,
          useUpdateBillMutation: o,
          useAddBillMutation: c,
          useDeleteBillMutation: d,
          useCreateFeedbackMutation: u,
          useCreateTaxInvoiceMutation: p,
        } = l;
    },
    85363: function (e, t, n) {
      'use strict';
      n.d(t, {
        NL: function () {
          return a;
        },
        rj: function () {
          return l;
        },
      });
      var r = n(85687),
        i = n(40329);
      let l = (0, r.LC)({
          reducerPath: 'categoryApi',
          refetchOnFocus: !0,
          baseQuery: (0, i.ni)({ baseUrl: ''.concat('http://localhost:3001/v1', '/') }),
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
                let { access_token: t, id: n } = e;
                return {
                  url: 'category/'.concat(n),
                  method: 'GET',
                  headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '.concat(t) },
                };
              },
            }),
          }),
        }),
        { useGetCategoriesQuery: a, useGetAllCategoriesQuery: s, useGetCategoriesByIdQuery: o } = l;
    },
    91637: function (e, t, n) {
      'use strict';
      n.d(t, {
        $r: function () {
          return s;
        },
        Y5: function () {
          return l;
        },
      });
      var r = n(85687),
        i = n(40329);
      let l = (0, r.LC)({
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
        { useGetDiscountsQuery: a, useGetSingleDiscountQuery: s } = l;
    },
    18968: function (e, t, n) {
      'use strict';
      n.d(t, {
        $d: function () {
          return s;
        },
        Fr: function () {
          return l;
        },
        OR: function () {
          return o;
        },
      });
      var r = n(85687),
        i = n(40329);
      let l = (0, r.LC)({
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
        { useGetProductsQuery: a, useGetSingleProductQuery: s, useGetFilteredProductsQuery: o } = l;
    },
    66693: function (e, t, n) {
      'use strict';
      n.d(t, {
        fq: function () {
          return s;
        },
        kw: function () {
          return l;
        },
      });
      var r = n(85687),
        i = n(40329);
      let l = (0, r.LC)({
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
        { useGetDiningTablesQuery: a, useGetSingleDiningTableQuery: s } = l;
    },
    50940: function (e, t, n) {
      'use strict';
      n.d(t, {
        A0: function () {
          return d;
        },
        A7: function () {
          return o;
        },
        Fm: function () {
          return c;
        },
        LU: function () {
          return u;
        },
        Oq: function () {
          return s;
        },
        dl: function () {
          return a;
        },
        eU: function () {
          return l;
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
        l = () => {
          {
            let e = r(localStorage.getItem('dietaryRestrictions') || '');
            return Array.isArray(e) ? e : [];
          }
        },
        a = () => {
          localStorage.removeItem('dietaryRestrictions');
        },
        s = () => {
          {
            let e = r(localStorage.getItem('protein') || '');
            return Array.isArray(e) ? e : [];
          }
        },
        o = () => {
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
    47420: function () {},
    20069: function () {},
    19509: function () {},
  },
  function (e) {
    e.O(
      0,
      [4872, 2598, 8809, 5687, 2379, 9810, 8863, 7190, 6691, 3172, 1396, 693, 3305, 2322, 4440, 2971, 4938, 1744],
      function () {
        return e((e.s = 3140));
      },
    ),
      (_N_E = e.O());
  },
]);
