'use strict';
(exports.id = 377),
  (exports.ids = [377]),
  (exports.modules = {
    32066: (e, o, r) => {
      r.d(o, { Z: () => a });
      var l = r(65651),
        t = r(3729);
      let n = {
        icon: {
          tag: 'svg',
          attrs: { 'fill-rule': 'evenodd', viewBox: '64 64 896 896', focusable: 'false' },
          children: [
            {
              tag: 'path',
              attrs: {
                d: 'M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z',
              },
            },
          ],
        },
        name: 'close',
        theme: 'outlined',
      };
      var c = r(49809);
      let a = t.forwardRef(function (e, o) {
        return t.createElement(c.Z, (0, l.Z)({}, e, { ref: o, icon: n }));
      });
    },
    22624: (e, o, r) => {
      r.d(o, { o2: () => a, yT: () => s });
      var l = r(72375),
        t = r(84666);
      let n = t.i.map((e) => `${e}-inverse`),
        c = ['success', 'processing', 'error', 'default', 'warning'];
      function a(e) {
        let o = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return o ? [].concat((0, l.Z)(n), (0, l.Z)(t.i)).includes(e) : t.i.includes(e);
      }
      function s(e) {
        return c.includes(e);
      }
    },
    46164: (e, o, r) => {
      r.d(o, { Z: () => d, w: () => a });
      var l = r(3729),
        t = r.n(l),
        n = r(32066),
        c = r(7305);
      function a(e) {
        if (e) return { closable: e.closable, closeIcon: e.closeIcon };
      }
      function s(e) {
        let { closable: o, closeIcon: r } = e || {};
        return t().useMemo(() => {
          if (!o && (!1 === o || !1 === r || null === r)) return !1;
          if (void 0 === o && void 0 === r) return null;
          let e = { closeIcon: 'boolean' != typeof r && null !== r ? r : void 0 };
          return o && 'object' == typeof o && (e = Object.assign(Object.assign({}, e), o)), e;
        }, [o, r]);
      }
      function i() {
        let e = {};
        for (var o = arguments.length, r = Array(o), l = 0; l < o; l++) r[l] = arguments[l];
        return (
          r.forEach((o) => {
            o &&
              Object.keys(o).forEach((r) => {
                void 0 !== o[r] && (e[r] = o[r]);
              });
          }),
          e
        );
      }
      let u = {};
      function d(e, o) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u,
          l = s(e),
          a = s(o),
          d = t().useMemo(() => Object.assign({ closeIcon: t().createElement(n.Z, null) }, r), [r]),
          g = t().useMemo(
            () => !1 !== l && (l ? i(d, a, l) : !1 !== a && (a ? i(d, a) : !!d.closable && d)),
            [l, a, d],
          );
        return t().useMemo(() => {
          if (!1 === g) return [!1, null];
          let { closeIconRender: e } = d,
            { closeIcon: o } = g,
            r = o;
          if (null != r) {
            e && (r = e(o));
            let l = (0, c.Z)(g, !0);
            Object.keys(l).length &&
              (r = t().isValidElement(r) ? t().cloneElement(r, l) : t().createElement('span', Object.assign({}, l), r));
          }
          return [!0, r];
        }, [g, d]);
      }
    },
    90377: (e, o, r) => {
      r.d(o, { Z: () => T });
      var l = r(3729),
        t = r(34132),
        n = r.n(t),
        c = r(24773),
        a = r(22624),
        s = r(46164),
        i = r(29545),
        u = r(30605),
        d = r(84893),
        g = r(4710),
        b = r(90437),
        p = r(22989),
        f = r(80433),
        m = r(35124);
      let v = (e) => {
          let { paddingXXS: o, lineWidth: r, tagPaddingHorizontal: l, componentCls: t, calc: n } = e,
            c = n(l).sub(r).equal(),
            a = n(o).sub(r).equal();
          return {
            [t]: Object.assign(Object.assign({}, (0, p.Wf)(e)), {
              display: 'inline-block',
              height: 'auto',
              marginInlineEnd: e.marginXS,
              paddingInline: c,
              fontSize: e.tagFontSize,
              lineHeight: e.tagLineHeight,
              whiteSpace: 'nowrap',
              background: e.defaultBg,
              border: `${(0, g.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
              borderRadius: e.borderRadiusSM,
              opacity: 1,
              transition: `all ${e.motionDurationMid}`,
              textAlign: 'start',
              position: 'relative',
              [`&${t}-rtl`]: { direction: 'rtl' },
              '&, a, a:hover': { color: e.defaultColor },
              [`${t}-close-icon`]: {
                marginInlineStart: a,
                fontSize: e.tagIconSize,
                color: e.colorTextDescription,
                cursor: 'pointer',
                transition: `all ${e.motionDurationMid}`,
                '&:hover': { color: e.colorTextHeading },
              },
              [`&${t}-has-color`]: {
                borderColor: 'transparent',
                [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]: { color: e.colorTextLightSolid },
              },
              '&-checkable': {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                cursor: 'pointer',
                [`&:not(${t}-checkable-checked):hover`]: {
                  color: e.colorPrimary,
                  backgroundColor: e.colorFillSecondary,
                },
                '&:active, &-checked': { color: e.colorTextLightSolid },
                '&-checked': { backgroundColor: e.colorPrimary, '&:hover': { backgroundColor: e.colorPrimaryHover } },
                '&:active': { backgroundColor: e.colorPrimaryActive },
              },
              '&-hidden': { display: 'none' },
              [`> ${e.iconCls} + span, > span + ${e.iconCls}`]: { marginInlineStart: c },
            }),
            [`${t}-borderless`]: { borderColor: 'transparent', background: e.tagBorderlessBg },
          };
        },
        y = (e) => {
          let { lineWidth: o, fontSizeIcon: r, calc: l } = e,
            t = e.fontSizeSM;
          return (0, f.TS)(e, {
            tagFontSize: t,
            tagLineHeight: (0, g.bf)(l(e.lineHeightSM).mul(t).equal()),
            tagIconSize: l(r).sub(l(o).mul(2)).equal(),
            tagPaddingHorizontal: 8,
            tagBorderlessBg: e.defaultBg,
          });
        },
        h = (e) => ({
          defaultBg: new b.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),
          defaultColor: e.colorText,
        }),
        C = (0, m.I$)('Tag', (e) => v(y(e)), h);
      var $ = function (e, o) {
        var r = {};
        for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && 0 > o.indexOf(l) && (r[l] = e[l]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var t = 0, l = Object.getOwnPropertySymbols(e); t < l.length; t++)
            0 > o.indexOf(l[t]) && Object.prototype.propertyIsEnumerable.call(e, l[t]) && (r[l[t]] = e[l[t]]);
        return r;
      };
      let k = l.forwardRef((e, o) => {
        let { prefixCls: r, style: t, className: c, checked: a, onChange: s, onClick: i } = e,
          u = $(e, ['prefixCls', 'style', 'className', 'checked', 'onChange', 'onClick']),
          { getPrefixCls: g, tag: b } = l.useContext(d.E_),
          p = g('tag', r),
          [f, m, v] = C(p),
          y = n()(p, `${p}-checkable`, { [`${p}-checkable-checked`]: a }, null == b ? void 0 : b.className, c, m, v);
        return f(
          l.createElement(
            'span',
            Object.assign({}, u, {
              ref: o,
              style: Object.assign(Object.assign({}, t), null == b ? void 0 : b.style),
              className: y,
              onClick: (e) => {
                null == s || s(!a), null == i || i(e);
              },
            }),
          ),
        );
      });
      var O = r(78701);
      let j = (e) =>
          (0, O.Z)(e, (o, r) => {
            let { textColor: l, lightBorderColor: t, lightColor: n, darkColor: c } = r;
            return {
              [`${e.componentCls}${e.componentCls}-${o}`]: {
                color: l,
                background: n,
                borderColor: t,
                '&-inverse': { color: e.colorTextLightSolid, background: c, borderColor: c },
                [`&${e.componentCls}-borderless`]: { borderColor: 'transparent' },
              },
            };
          }),
        S = (0, m.bk)(['Tag', 'preset'], (e) => j(y(e)), h),
        x = (e, o, r) => {
          let l = (function (e) {
            return 'string' != typeof e ? e : e.charAt(0).toUpperCase() + e.slice(1);
          })(r);
          return {
            [`${e.componentCls}${e.componentCls}-${o}`]: {
              color: e[`color${r}`],
              background: e[`color${l}Bg`],
              borderColor: e[`color${l}Border`],
              [`&${e.componentCls}-borderless`]: { borderColor: 'transparent' },
            },
          };
        },
        E = (0, m.bk)(
          ['Tag', 'status'],
          (e) => {
            let o = y(e);
            return [
              x(o, 'success', 'Success'),
              x(o, 'processing', 'Info'),
              x(o, 'error', 'Error'),
              x(o, 'warning', 'Warning'),
            ];
          },
          h,
        );
      var w = function (e, o) {
        var r = {};
        for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && 0 > o.indexOf(l) && (r[l] = e[l]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var t = 0, l = Object.getOwnPropertySymbols(e); t < l.length; t++)
            0 > o.indexOf(l[t]) && Object.prototype.propertyIsEnumerable.call(e, l[t]) && (r[l[t]] = e[l[t]]);
        return r;
      };
      let I = l.forwardRef((e, o) => {
        let {
            prefixCls: r,
            className: t,
            rootClassName: g,
            style: b,
            children: p,
            icon: f,
            color: m,
            onClose: v,
            bordered: y = !0,
            visible: h,
          } = e,
          $ = w(e, [
            'prefixCls',
            'className',
            'rootClassName',
            'style',
            'children',
            'icon',
            'color',
            'onClose',
            'bordered',
            'visible',
          ]),
          { getPrefixCls: k, direction: O, tag: j } = l.useContext(d.E_),
          [x, I] = l.useState(!0),
          T = (0, c.Z)($, ['closeIcon', 'closable']);
        l.useEffect(() => {
          void 0 !== h && I(h);
        }, [h]);
        let Z = (0, a.o2)(m),
          B = (0, a.yT)(m),
          P = Z || B,
          M = Object.assign(Object.assign({ backgroundColor: m && !P ? m : void 0 }, null == j ? void 0 : j.style), b),
          N = k('tag', r),
          [L, z, H] = C(N),
          R = n()(
            N,
            null == j ? void 0 : j.className,
            {
              [`${N}-${m}`]: P,
              [`${N}-has-color`]: m && !P,
              [`${N}-hidden`]: !x,
              [`${N}-rtl`]: 'rtl' === O,
              [`${N}-borderless`]: !y,
            },
            t,
            g,
            z,
            H,
          ),
          q = (e) => {
            e.stopPropagation(), null == v || v(e), e.defaultPrevented || I(!1);
          },
          [, A] = (0, s.Z)((0, s.w)(e), (0, s.w)(j), {
            closable: !1,
            closeIconRender: (e) => {
              let o = l.createElement('span', { className: `${N}-close-icon`, onClick: q }, e);
              return (0, i.wm)(e, o, (e) => ({
                onClick: (o) => {
                  var r;
                  null === (r = null == e ? void 0 : e.onClick) || void 0 === r || r.call(e, o), q(o);
                },
                className: n()(null == e ? void 0 : e.className, `${N}-close-icon`),
              }));
            },
          }),
          F = 'function' == typeof $.onClick || (p && 'a' === p.type),
          D = f || null,
          W = D ? l.createElement(l.Fragment, null, D, p && l.createElement('span', null, p)) : p,
          _ = l.createElement(
            'span',
            Object.assign({}, T, { ref: o, className: R, style: M }),
            W,
            A,
            Z && l.createElement(S, { key: 'preset', prefixCls: N }),
            B && l.createElement(E, { key: 'status', prefixCls: N }),
          );
        return L(F ? l.createElement(u.Z, { component: 'Tag' }, _) : _);
      });
      I.CheckableTag = k;
      let T = I;
    },
    84666: (e, o, r) => {
      r.d(o, { i: () => l });
      let l = [
        'blue',
        'purple',
        'cyan',
        'green',
        'magenta',
        'pink',
        'red',
        'orange',
        'yellow',
        'volcano',
        'geekblue',
        'lime',
        'gold',
      ];
    },
    78701: (e, o, r) => {
      r.d(o, { Z: () => t });
      var l = r(84666);
      function t(e, o) {
        return l.i.reduce((r, l) => {
          let t = e[`${l}1`],
            n = e[`${l}3`],
            c = e[`${l}6`],
            a = e[`${l}7`];
          return Object.assign(
            Object.assign({}, r),
            o(l, { lightColor: t, lightBorderColor: n, darkColor: c, textColor: a }),
          );
        }, {});
      }
    },
  });
