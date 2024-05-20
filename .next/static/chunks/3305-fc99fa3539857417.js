'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3305],
  {
    63305: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return z;
        },
      });
      var n = r(2265),
        a = r(42744),
        o = r.n(a),
        l = r(13428),
        i = r(10870),
        c = r(21076),
        s = r(98961),
        d = r(82554),
        u = r(73310),
        b = ['prefixCls', 'className', 'style', 'checked', 'disabled', 'defaultChecked', 'type', 'title', 'onChange'],
        p = (0, n.forwardRef)(function (e, t) {
          var r = e.prefixCls,
            a = void 0 === r ? 'rc-checkbox' : r,
            p = e.className,
            f = e.style,
            v = e.checked,
            h = e.disabled,
            g = e.defaultChecked,
            m = e.type,
            $ = void 0 === m ? 'checkbox' : m,
            y = e.title,
            C = e.onChange,
            k = (0, d.Z)(e, b),
            x = (0, n.useRef)(null),
            O = (0, u.Z)(void 0 !== g && g, { value: v }),
            S = (0, s.Z)(O, 2),
            w = S[0],
            E = S[1];
          (0, n.useImperativeHandle)(t, function () {
            return {
              focus: function (e) {
                var t;
                null === (t = x.current) || void 0 === t || t.focus(e);
              },
              blur: function () {
                var e;
                null === (e = x.current) || void 0 === e || e.blur();
              },
              input: x.current,
            };
          });
          var j = o()(a, p, (0, c.Z)((0, c.Z)({}, ''.concat(a, '-checked'), w), ''.concat(a, '-disabled'), h));
          return n.createElement(
            'span',
            { className: j, title: y, style: f },
            n.createElement(
              'input',
              (0, l.Z)({}, k, {
                className: ''.concat(a, '-input'),
                ref: x,
                onChange: function (t) {
                  h ||
                    ('checked' in e || E(t.target.checked),
                    null == C ||
                      C({
                        target: (0, i.Z)((0, i.Z)({}, e), {}, { type: $, checked: t.target.checked }),
                        stopPropagation: function () {
                          t.stopPropagation();
                        },
                        preventDefault: function () {
                          t.preventDefault();
                        },
                        nativeEvent: t.nativeEvent,
                      }));
                },
                disabled: h,
                checked: !!w,
                type: $,
              }),
            ),
            n.createElement('span', { className: ''.concat(a, '-inner') }),
          );
        }),
        f = r(78636),
        v = r(54932),
        h = r(19056),
        g = r(94270),
        m = r(72690),
        $ = r(58821);
      let y = n.createContext(null);
      var C = r(89426),
        k = r(27734),
        x = r(43744),
        O = r(26173);
      let S = (e) => {
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
                border: `${(0, C.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
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
                  border: `${(0, C.bf)(e.lineWidthBold)} solid ${e.colorWhite}`,
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
      };
      var w = (0, O.I$)('Checkbox', (e, t) => {
          let { prefixCls: r } = t;
          return [[S((0, x.TS)(e, { checkboxCls: `.${r}`, checkboxSize: e.controlInteractiveSize }))]];
        }),
        E = function (e, t) {
          var r = {};
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
            for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
              0 > t.indexOf(n[a]) && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
          return r;
        };
      let j = n.forwardRef((e, t) => {
        var r;
        let {
            prefixCls: a,
            className: l,
            rootClassName: i,
            children: c,
            indeterminate: s = !1,
            style: d,
            onMouseEnter: u,
            onMouseLeave: b,
            skipGroup: C = !1,
            disabled: k,
          } = e,
          x = E(e, [
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
          { getPrefixCls: O, direction: S, checkbox: j } = n.useContext(h.E_),
          N = n.useContext(y),
          { isFormItemInput: I } = n.useContext($.aM),
          P = n.useContext(g.Z),
          Z = null !== (r = (null == N ? void 0 : N.disabled) || k) && void 0 !== r ? r : P,
          z = n.useRef(x.value);
        n.useEffect(() => {
          null == N || N.registerValue(x.value);
        }, []),
          n.useEffect(() => {
            if (!C)
              return (
                x.value !== z.current &&
                  (null == N || N.cancelValue(z.current), null == N || N.registerValue(x.value), (z.current = x.value)),
                () => (null == N ? void 0 : N.cancelValue(x.value))
              );
          }, [x.value]);
        let D = O('checkbox', a),
          B = (0, m.Z)(D),
          [M, R, _] = w(D, B),
          T = Object.assign({}, x);
        N &&
          !C &&
          ((T.onChange = function () {
            x.onChange && x.onChange.apply(x, arguments),
              N.toggleOption && N.toggleOption({ label: c, value: x.value });
          }),
          (T.name = N.name),
          (T.checked = N.value.includes(x.value)));
        let V = o()(
            `${D}-wrapper`,
            {
              [`${D}-rtl`]: 'rtl' === S,
              [`${D}-wrapper-checked`]: T.checked,
              [`${D}-wrapper-disabled`]: Z,
              [`${D}-wrapper-in-form-item`]: I,
            },
            null == j ? void 0 : j.className,
            l,
            i,
            _,
            B,
            R,
          ),
          W = o()({ [`${D}-indeterminate`]: s }, v.A, R),
          q = s ? 'mixed' : void 0;
        return M(
          n.createElement(
            f.Z,
            { component: 'Checkbox', disabled: Z },
            n.createElement(
              'label',
              {
                className: V,
                style: Object.assign(Object.assign({}, null == j ? void 0 : j.style), d),
                onMouseEnter: u,
                onMouseLeave: b,
              },
              n.createElement(
                p,
                Object.assign({ 'aria-checked': q }, T, { prefixCls: D, className: W, disabled: Z, ref: t }),
              ),
              void 0 !== c && n.createElement('span', null, c),
            ),
          ),
        );
      });
      var N = r(16141),
        I = r(54925),
        P = function (e, t) {
          var r = {};
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
            for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
              0 > t.indexOf(n[a]) && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
          return r;
        };
      let Z = n.forwardRef((e, t) => {
        let {
            defaultValue: r,
            children: a,
            options: l = [],
            prefixCls: i,
            className: c,
            rootClassName: s,
            style: d,
            onChange: u,
          } = e,
          b = P(e, [
            'defaultValue',
            'children',
            'options',
            'prefixCls',
            'className',
            'rootClassName',
            'style',
            'onChange',
          ]),
          { getPrefixCls: p, direction: f } = n.useContext(h.E_),
          [v, g] = n.useState(b.value || r || []),
          [$, C] = n.useState([]);
        n.useEffect(() => {
          'value' in b && g(b.value || []);
        }, [b.value]);
        let k = n.useMemo(
            () => l.map((e) => ('string' == typeof e || 'number' == typeof e ? { label: e, value: e } : e)),
            [l],
          ),
          x = p('checkbox', i),
          O = `${x}-group`,
          S = (0, m.Z)(x),
          [E, Z, z] = w(x, S),
          D = (0, I.Z)(b, ['value', 'disabled']),
          B = l.length
            ? k.map((e) =>
                n.createElement(
                  j,
                  {
                    prefixCls: x,
                    key: e.value.toString(),
                    disabled: 'disabled' in e ? e.disabled : b.disabled,
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
            : a,
          M = {
            toggleOption: (e) => {
              let t = v.indexOf(e.value),
                r = (0, N.Z)(v);
              -1 === t ? r.push(e.value) : r.splice(t, 1),
                'value' in b || g(r),
                null == u ||
                  u(
                    r
                      .filter((e) => $.includes(e))
                      .sort((e, t) => k.findIndex((t) => t.value === e) - k.findIndex((e) => e.value === t)),
                  );
            },
            value: v,
            disabled: b.disabled,
            name: b.name,
            registerValue: (e) => {
              C((t) => [].concat((0, N.Z)(t), [e]));
            },
            cancelValue: (e) => {
              C((t) => t.filter((t) => t !== e));
            },
          },
          R = o()(O, { [`${O}-rtl`]: 'rtl' === f }, c, s, z, S, Z);
        return E(
          n.createElement(
            'div',
            Object.assign({ className: R, style: d }, D, { ref: t }),
            n.createElement(y.Provider, { value: M }, B),
          ),
        );
      });
      (j.Group = Z), (j.__ANT_CHECKBOX = !0);
      var z = j;
    },
  },
]);
