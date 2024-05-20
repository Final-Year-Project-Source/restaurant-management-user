'use strict';
(exports.id = 762),
  (exports.ids = [762]),
  (exports.modules = {
    73762: (e, t, r) => {
      r.d(t, { Z: () => D });
      var n = r(3729),
        o = r.n(n),
        a = r(34132),
        l = r.n(a),
        i = r(65651),
        c = r(65830),
        s = r(22363),
        d = r(93727),
        u = r(12403),
        p = r(80595),
        b = ['prefixCls', 'className', 'style', 'checked', 'disabled', 'defaultChecked', 'type', 'title', 'onChange'],
        f = (0, n.forwardRef)(function (e, t) {
          var r = e.prefixCls,
            o = void 0 === r ? 'rc-checkbox' : r,
            a = e.className,
            f = e.style,
            v = e.checked,
            g = e.disabled,
            m = e.defaultChecked,
            h = e.type,
            $ = void 0 === h ? 'checkbox' : h,
            y = e.title,
            C = e.onChange,
            x = (0, u.Z)(e, b),
            k = (0, n.useRef)(null),
            O = (0, p.Z)(void 0 !== m && m, { value: v }),
            S = (0, d.Z)(O, 2),
            w = S[0],
            E = S[1];
          (0, n.useImperativeHandle)(t, function () {
            return {
              focus: function (e) {
                var t;
                null === (t = k.current) || void 0 === t || t.focus(e);
              },
              blur: function () {
                var e;
                null === (e = k.current) || void 0 === e || e.blur();
              },
              input: k.current,
            };
          });
          var j = l()(o, a, (0, s.Z)((0, s.Z)({}, ''.concat(o, '-checked'), w), ''.concat(o, '-disabled'), g));
          return n.createElement(
            'span',
            { className: j, title: y, style: f },
            n.createElement(
              'input',
              (0, i.Z)({}, x, {
                className: ''.concat(o, '-input'),
                ref: k,
                onChange: function (t) {
                  g ||
                    ('checked' in e || E(t.target.checked),
                    null == C ||
                      C({
                        target: (0, c.Z)((0, c.Z)({}, e), {}, { type: $, checked: t.target.checked }),
                        stopPropagation: function () {
                          t.stopPropagation();
                        },
                        preventDefault: function () {
                          t.preventDefault();
                        },
                        nativeEvent: t.nativeEvent,
                      }));
                },
                disabled: g,
                checked: !!w,
                type: $,
              }),
            ),
            n.createElement('span', { className: ''.concat(o, '-inner') }),
          );
        }),
        v = r(30605),
        g = r(94343),
        m = r(84893),
        h = r(30681),
        $ = r(13878),
        y = r(84359);
      let C = o().createContext(null);
      var x = r(4710),
        k = r(22989),
        O = r(80433),
        S = r(35124);
      let w = (e) => {
          let { checkboxCls: t } = e,
            r = `${t}-wrapper`;
          return [
            {
              [`${t}-group`]: Object.assign(Object.assign({}, (0, k.Wf)(e)), {
                display: 'inline-flex',
                flexWrap: 'wrap',
                columnGap: e.marginXS,
                [`> ${e.antCls}-row`]: { flex: 1 },
              }),
              [r]: Object.assign(Object.assign({}, (0, k.Wf)(e)), {
                display: 'inline-flex',
                alignItems: 'baseline',
                cursor: 'pointer',
                '&:after': { display: 'inline-block', width: 0, overflow: 'hidden', content: "'\\a0'" },
                [`& + ${r}`]: { marginInlineStart: 0 },
                [`&${r}-in-form-item`]: { 'input[type="checkbox"]': { width: 14, height: 14 } },
              }),
              [t]: Object.assign(Object.assign({}, (0, k.Wf)(e)), {
                position: 'relative',
                whiteSpace: 'nowrap',
                lineHeight: 1,
                cursor: 'pointer',
                borderRadius: e.borderRadiusSM,
                alignSelf: 'center',
                [`${t}-input`]: {
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  cursor: 'pointer',
                  opacity: 0,
                  margin: 0,
                  [`&:focus-visible + ${t}-inner`]: Object.assign({}, (0, k.oN)(e)),
                },
                [`${t}-inner`]: {
                  boxSizing: 'border-box',
                  display: 'block',
                  width: e.checkboxSize,
                  height: e.checkboxSize,
                  direction: 'ltr',
                  backgroundColor: e.colorBgContainer,
                  border: `${(0, x.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                  borderRadius: e.borderRadiusSM,
                  borderCollapse: 'separate',
                  transition: `all ${e.motionDurationSlow}`,
                  '&:after': {
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: '50%',
                    insetInlineStart: '25%',
                    display: 'table',
                    width: e.calc(e.checkboxSize).div(14).mul(5).equal(),
                    height: e.calc(e.checkboxSize).div(14).mul(8).equal(),
                    border: `${(0, x.bf)(e.lineWidthBold)} solid ${e.colorWhite}`,
                    borderTop: 0,
                    borderInlineStart: 0,
                    transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
                    opacity: 0,
                    content: '""',
                    transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`,
                  },
                },
                '& + span': { paddingInlineStart: e.paddingXS, paddingInlineEnd: e.paddingXS },
              }),
            },
            {
              [`
        ${r}:not(${r}-disabled),
        ${t}:not(${t}-disabled)
      `]: { [`&:hover ${t}-inner`]: { borderColor: e.colorPrimary } },
              [`${r}:not(${r}-disabled)`]: {
                [`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]: {
                  backgroundColor: e.colorPrimaryHover,
                  borderColor: 'transparent',
                },
                [`&:hover ${t}-checked:not(${t}-disabled):after`]: { borderColor: e.colorPrimaryHover },
              },
            },
            {
              [`${t}-checked`]: {
                [`${t}-inner`]: {
                  backgroundColor: e.colorPrimary,
                  borderColor: e.colorPrimary,
                  '&:after': {
                    opacity: 1,
                    transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
                    transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`,
                  },
                },
              },
              [`
        ${r}-checked:not(${r}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]: { [`&:hover ${t}-inner`]: { backgroundColor: e.colorPrimaryHover, borderColor: 'transparent' } },
            },
            {
              [t]: {
                '&-indeterminate': {
                  [`${t}-inner`]: {
                    backgroundColor: e.colorBgContainer,
                    borderColor: e.colorBorder,
                    '&:after': {
                      top: '50%',
                      insetInlineStart: '50%',
                      width: e.calc(e.fontSizeLG).div(2).equal(),
                      height: e.calc(e.fontSizeLG).div(2).equal(),
                      backgroundColor: e.colorPrimary,
                      border: 0,
                      transform: 'translate(-50%, -50%) scale(1)',
                      opacity: 1,
                      content: '""',
                    },
                  },
                },
              },
            },
            {
              [`${r}-disabled`]: { cursor: 'not-allowed' },
              [`${t}-disabled`]: {
                [`&, ${t}-input`]: { cursor: 'not-allowed', pointerEvents: 'none' },
                [`${t}-inner`]: {
                  background: e.colorBgContainerDisabled,
                  borderColor: e.colorBorder,
                  '&:after': { borderColor: e.colorTextDisabled },
                },
                '&:after': { display: 'none' },
                '& + span': { color: e.colorTextDisabled },
                [`&${t}-indeterminate ${t}-inner::after`]: { background: e.colorTextDisabled },
              },
            },
          ];
        },
        E = (0, S.I$)('Checkbox', (e, t) => {
          let { prefixCls: r } = t;
          return [
            (function (e, t) {
              return [w((0, O.TS)(t, { checkboxCls: `.${e}`, checkboxSize: t.controlInteractiveSize }))];
            })(r, e),
          ];
        });
      var j = function (e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
            0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        return r;
      };
      let I = n.forwardRef((e, t) => {
        var r;
        let {
            prefixCls: o,
            className: a,
            rootClassName: i,
            children: c,
            indeterminate: s = !1,
            style: d,
            onMouseEnter: u,
            onMouseLeave: p,
            skipGroup: b = !1,
            disabled: x,
          } = e,
          k = j(e, [
            'prefixCls',
            'className',
            'rootClassName',
            'children',
            'indeterminate',
            'style',
            'onMouseEnter',
            'onMouseLeave',
            'skipGroup',
            'disabled',
          ]),
          { getPrefixCls: O, direction: S, checkbox: w } = n.useContext(m.E_),
          I = n.useContext(C),
          { isFormItemInput: N } = n.useContext(y.aM),
          P = n.useContext(h.Z),
          Z = null !== (r = (null == I ? void 0 : I.disabled) || x) && void 0 !== r ? r : P,
          z = n.useRef(k.value);
        n.useEffect(() => {
          null == I || I.registerValue(k.value);
        }, []),
          n.useEffect(() => {
            if (!b)
              return (
                k.value !== z.current &&
                  (null == I || I.cancelValue(z.current), null == I || I.registerValue(k.value), (z.current = k.value)),
                () => (null == I ? void 0 : I.cancelValue(k.value))
              );
          }, [k.value]);
        let D = O('checkbox', o),
          B = (0, $.Z)(D),
          [M, R, T] = E(D, B),
          V = Object.assign({}, k);
        I &&
          !b &&
          ((V.onChange = function () {
            k.onChange && k.onChange.apply(k, arguments),
              I.toggleOption && I.toggleOption({ label: c, value: k.value });
          }),
          (V.name = I.name),
          (V.checked = I.value.includes(k.value)));
        let W = l()(
            `${D}-wrapper`,
            {
              [`${D}-rtl`]: 'rtl' === S,
              [`${D}-wrapper-checked`]: V.checked,
              [`${D}-wrapper-disabled`]: Z,
              [`${D}-wrapper-in-form-item`]: N,
            },
            null == w ? void 0 : w.className,
            a,
            i,
            T,
            B,
            R,
          ),
          q = l()({ [`${D}-indeterminate`]: s }, g.A, R),
          H = s ? 'mixed' : void 0;
        return M(
          n.createElement(
            v.Z,
            { component: 'Checkbox', disabled: Z },
            n.createElement(
              'label',
              {
                className: W,
                style: Object.assign(Object.assign({}, null == w ? void 0 : w.style), d),
                onMouseEnter: u,
                onMouseLeave: p,
              },
              n.createElement(
                f,
                Object.assign({ 'aria-checked': H }, V, { prefixCls: D, className: q, disabled: Z, ref: t }),
              ),
              void 0 !== c && n.createElement('span', null, c),
            ),
          ),
        );
      });
      var N = r(72375),
        P = r(24773),
        Z = function (e, t) {
          var r = {};
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
              0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
          return r;
        };
      let z = n.forwardRef((e, t) => {
        let {
            defaultValue: r,
            children: o,
            options: a = [],
            prefixCls: i,
            className: c,
            rootClassName: s,
            style: d,
            onChange: u,
          } = e,
          p = Z(e, [
            'defaultValue',
            'children',
            'options',
            'prefixCls',
            'className',
            'rootClassName',
            'style',
            'onChange',
          ]),
          { getPrefixCls: b, direction: f } = n.useContext(m.E_),
          [v, g] = n.useState(p.value || r || []),
          [h, y] = n.useState([]);
        n.useEffect(() => {
          'value' in p && g(p.value || []);
        }, [p.value]);
        let x = n.useMemo(
            () => a.map((e) => ('string' == typeof e || 'number' == typeof e ? { label: e, value: e } : e)),
            [a],
          ),
          k = b('checkbox', i),
          O = `${k}-group`,
          S = (0, $.Z)(k),
          [w, j, z] = E(k, S),
          D = (0, P.Z)(p, ['value', 'disabled']),
          B = a.length
            ? x.map((e) =>
                n.createElement(
                  I,
                  {
                    prefixCls: k,
                    key: e.value.toString(),
                    disabled: 'disabled' in e ? e.disabled : p.disabled,
                    value: e.value,
                    checked: v.includes(e.value),
                    onChange: e.onChange,
                    className: `${O}-item`,
                    style: e.style,
                    title: e.title,
                    id: e.id,
                    required: e.required,
                  },
                  e.label,
                ),
              )
            : o,
          M = {
            toggleOption: (e) => {
              let t = v.indexOf(e.value),
                r = (0, N.Z)(v);
              -1 === t ? r.push(e.value) : r.splice(t, 1),
                'value' in p || g(r),
                null == u ||
                  u(
                    r
                      .filter((e) => h.includes(e))
                      .sort((e, t) => x.findIndex((t) => t.value === e) - x.findIndex((e) => e.value === t)),
                  );
            },
            value: v,
            disabled: p.disabled,
            name: p.name,
            registerValue: (e) => {
              y((t) => [].concat((0, N.Z)(t), [e]));
            },
            cancelValue: (e) => {
              y((t) => t.filter((t) => t !== e));
            },
          },
          R = l()(O, { [`${O}-rtl`]: 'rtl' === f }, c, s, z, S, j);
        return w(
          n.createElement(
            'div',
            Object.assign({ className: R, style: d }, D, { ref: t }),
            n.createElement(C.Provider, { value: M }, B),
          ),
        );
      });
      (I.Group = z), (I.__ANT_CHECKBOX = !0);
      let D = I;
    },
  });
