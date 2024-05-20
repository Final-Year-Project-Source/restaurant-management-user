'use strict';
(exports.id = 662),
  (exports.ids = [662]),
  (exports.modules = {
    77662: (t, e, i) => {
      i.d(e, { Z: () => y });
      var n = i(3729),
        o = i(34132),
        a = i.n(o),
        l = i(24773),
        s = i(29545),
        r = i(84893),
        d = i(4710),
        c = i(22989),
        u = i(35124),
        m = i(80433);
      let p = new d.E4('antSpinMove', { to: { opacity: 1 } }),
        g = new d.E4('antRotate', { to: { transform: 'rotate(405deg)' } }),
        v = (t) => {
          let { componentCls: e, calc: i } = t;
          return {
            [`${e}`]: Object.assign(Object.assign({}, (0, c.Wf)(t)), {
              position: 'absolute',
              display: 'none',
              color: t.colorPrimary,
              fontSize: 0,
              textAlign: 'center',
              verticalAlign: 'middle',
              opacity: 0,
              transition: `transform ${t.motionDurationSlow} ${t.motionEaseInOutCirc}`,
              '&-spinning': { position: 'static', display: 'inline-block', opacity: 1 },
              [`${e}-text`]: {
                fontSize: t.fontSize,
                paddingTop: i(i(t.dotSize).sub(t.fontSize)).div(2).add(2).equal(),
              },
              '&-fullscreen': {
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                backgroundColor: t.colorBgMask,
                zIndex: t.zIndexPopupBase,
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                opacity: 0,
                visibility: 'hidden',
                transition: `all ${t.motionDurationMid}`,
                '&-show': { opacity: 1, visibility: 'visible' },
                [`${e}-dot ${e}-dot-item`]: { backgroundColor: t.colorWhite },
                [`${e}-text`]: { color: t.colorTextLightSolid },
              },
              '&-nested-loading': {
                position: 'relative',
                [`> div > ${e}`]: {
                  position: 'absolute',
                  top: 0,
                  insetInlineStart: 0,
                  zIndex: 4,
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  maxHeight: t.contentHeight,
                  [`${e}-dot`]: {
                    position: 'absolute',
                    top: '50%',
                    insetInlineStart: '50%',
                    margin: i(t.dotSize).mul(-1).div(2).equal(),
                  },
                  [`${e}-text`]: {
                    position: 'absolute',
                    top: '50%',
                    width: '100%',
                    textShadow: `0 1px 2px ${t.colorBgContainer}`,
                  },
                  [`&${e}-show-text ${e}-dot`]: { marginTop: i(t.dotSize).div(2).mul(-1).sub(10).equal() },
                  '&-sm': {
                    [`${e}-dot`]: { margin: i(t.dotSizeSM).mul(-1).div(2).equal() },
                    [`${e}-text`]: { paddingTop: i(i(t.dotSizeSM).sub(t.fontSize)).div(2).add(2).equal() },
                    [`&${e}-show-text ${e}-dot`]: { marginTop: i(t.dotSizeSM).div(2).mul(-1).sub(10).equal() },
                  },
                  '&-lg': {
                    [`${e}-dot`]: { margin: i(t.dotSizeLG).mul(-1).div(2).equal() },
                    [`${e}-text`]: { paddingTop: i(i(t.dotSizeLG).sub(t.fontSize)).div(2).add(2).equal() },
                    [`&${e}-show-text ${e}-dot`]: { marginTop: i(t.dotSizeLG).div(2).mul(-1).sub(10).equal() },
                  },
                },
                [`${e}-container`]: {
                  position: 'relative',
                  transition: `opacity ${t.motionDurationSlow}`,
                  '&::after': {
                    position: 'absolute',
                    top: 0,
                    insetInlineEnd: 0,
                    bottom: 0,
                    insetInlineStart: 0,
                    zIndex: 10,
                    width: '100%',
                    height: '100%',
                    background: t.colorBgContainer,
                    opacity: 0,
                    transition: `all ${t.motionDurationSlow}`,
                    content: '""',
                    pointerEvents: 'none',
                  },
                },
                [`${e}-blur`]: {
                  clear: 'both',
                  opacity: 0.5,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  '&::after': { opacity: 0.4, pointerEvents: 'auto' },
                },
              },
              '&-tip': { color: t.spinDotDefault },
              [`${e}-dot`]: {
                position: 'relative',
                display: 'inline-block',
                fontSize: t.dotSize,
                width: '1em',
                height: '1em',
                '&-item': {
                  position: 'absolute',
                  display: 'block',
                  width: i(t.dotSize).sub(i(t.marginXXS).div(2)).div(2).equal(),
                  height: i(t.dotSize).sub(i(t.marginXXS).div(2)).div(2).equal(),
                  backgroundColor: t.colorPrimary,
                  borderRadius: '100%',
                  transform: 'scale(0.75)',
                  transformOrigin: '50% 50%',
                  opacity: 0.3,
                  animationName: p,
                  animationDuration: '1s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'linear',
                  animationDirection: 'alternate',
                  '&:nth-child(1)': { top: 0, insetInlineStart: 0, animationDelay: '0s' },
                  '&:nth-child(2)': { top: 0, insetInlineEnd: 0, animationDelay: '0.4s' },
                  '&:nth-child(3)': { insetInlineEnd: 0, bottom: 0, animationDelay: '0.8s' },
                  '&:nth-child(4)': { bottom: 0, insetInlineStart: 0, animationDelay: '1.2s' },
                },
                '&-spin': {
                  transform: 'rotate(45deg)',
                  animationName: g,
                  animationDuration: '1.2s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'linear',
                },
              },
              [`&-sm ${e}-dot`]: {
                fontSize: t.dotSizeSM,
                i: {
                  width: i(i(t.dotSizeSM).sub(i(t.marginXXS).div(2)))
                    .div(2)
                    .equal(),
                  height: i(i(t.dotSizeSM).sub(i(t.marginXXS).div(2)))
                    .div(2)
                    .equal(),
                },
              },
              [`&-lg ${e}-dot`]: {
                fontSize: t.dotSizeLG,
                i: {
                  width: i(i(t.dotSizeLG).sub(t.marginXXS)).div(2).equal(),
                  height: i(i(t.dotSizeLG).sub(t.marginXXS)).div(2).equal(),
                },
              },
              [`&${e}-show-text ${e}-text`]: { display: 'block' },
            }),
          };
        },
        S = (0, u.I$)(
          'Spin',
          (t) => [v((0, m.TS)(t, { spinDotDefault: t.colorTextDescription }))],
          (t) => {
            let { controlHeightLG: e, controlHeight: i } = t;
            return { contentHeight: 400, dotSize: e / 2, dotSizeSM: 0.35 * e, dotSizeLG: i };
          },
        );
      var b = function (t, e) {
        var i = {};
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (i[n] = t[n]);
        if (null != t && 'function' == typeof Object.getOwnPropertySymbols)
          for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++)
            0 > e.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (i[n[o]] = t[n[o]]);
        return i;
      };
      let f = null,
        h = (t) => {
          let {
              prefixCls: e,
              spinning: i = !0,
              delay: o = 0,
              className: d,
              rootClassName: c,
              size: u = 'default',
              tip: m,
              wrapperClassName: p,
              style: g,
              children: v,
              fullscreen: h = !1,
            } = t,
            y = b(t, [
              'prefixCls',
              'spinning',
              'delay',
              'className',
              'rootClassName',
              'size',
              'tip',
              'wrapperClassName',
              'style',
              'children',
              'fullscreen',
            ]),
            { getPrefixCls: $ } = n.useContext(r.E_),
            x = $('spin', e),
            [z, w, E] = S(x),
            [N, D] = n.useState(
              () =>
                i &&
                !(function (t, e) {
                  return !!t && !!e && !isNaN(Number(e));
                })(i, o),
            );
          n.useEffect(() => {
            if (i) {
              let t = (function (t, e, i) {
                var n = {}.atBegin;
                return (function (t, e, i) {
                  var n,
                    o = i || {},
                    a = o.noTrailing,
                    l = void 0 !== a && a,
                    s = o.noLeading,
                    r = void 0 !== s && s,
                    d = o.debounceMode,
                    c = void 0 === d ? void 0 : d,
                    u = !1,
                    m = 0;
                  function p() {
                    n && clearTimeout(n);
                  }
                  function g() {
                    for (var i = arguments.length, o = Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                    var s = this,
                      d = Date.now() - m;
                    function g() {
                      (m = Date.now()), e.apply(s, o);
                    }
                    function v() {
                      n = void 0;
                    }
                    !u &&
                      (r || !c || n || g(),
                      p(),
                      void 0 === c && d > t
                        ? r
                          ? ((m = Date.now()), l || (n = setTimeout(c ? v : g, t)))
                          : g()
                        : !0 !== l && (n = setTimeout(c ? v : g, void 0 === c ? t - d : t)));
                  }
                  return (
                    (g.cancel = function (t) {
                      var e = (t || {}).upcomingOnly;
                      p(), (u = !(void 0 !== e && e));
                    }),
                    g
                  );
                })(t, e, { debounceMode: !1 !== (void 0 !== n && n) });
              })(o, () => {
                D(!0);
              });
              return (
                t(),
                () => {
                  var e;
                  null === (e = null == t ? void 0 : t.cancel) || void 0 === e || e.call(t);
                }
              );
            }
            D(!1);
          }, [o, i]);
          let I = n.useMemo(() => void 0 !== v && !h, [v, h]),
            { direction: O, spin: T } = n.useContext(r.E_),
            k = a()(
              x,
              null == T ? void 0 : T.className,
              {
                [`${x}-sm`]: 'small' === u,
                [`${x}-lg`]: 'large' === u,
                [`${x}-spinning`]: N,
                [`${x}-show-text`]: !!m,
                [`${x}-fullscreen`]: h,
                [`${x}-fullscreen-show`]: h && N,
                [`${x}-rtl`]: 'rtl' === O,
              },
              d,
              c,
              w,
              E,
            ),
            q = a()(`${x}-container`, { [`${x}-blur`]: N }),
            C = (0, l.Z)(y, ['indicator']),
            M = Object.assign(Object.assign({}, null == T ? void 0 : T.style), g),
            X = n.createElement(
              'div',
              Object.assign({}, C, { style: M, className: k, 'aria-live': 'polite', 'aria-busy': N }),
              (function (t, e) {
                let { indicator: i } = e,
                  o = `${t}-dot`;
                return null === i
                  ? null
                  : n.isValidElement(i)
                    ? (0, s.Tm)(i, { className: a()(i.props.className, o) })
                    : n.isValidElement(f)
                      ? (0, s.Tm)(f, { className: a()(f.props.className, o) })
                      : n.createElement(
                          'span',
                          { className: a()(o, `${t}-dot-spin`) },
                          n.createElement('i', { className: `${t}-dot-item`, key: 1 }),
                          n.createElement('i', { className: `${t}-dot-item`, key: 2 }),
                          n.createElement('i', { className: `${t}-dot-item`, key: 3 }),
                          n.createElement('i', { className: `${t}-dot-item`, key: 4 }),
                        );
              })(x, t),
              m && (I || h) ? n.createElement('div', { className: `${x}-text` }, m) : null,
            );
          return z(
            I
              ? n.createElement(
                  'div',
                  Object.assign({}, C, { className: a()(`${x}-nested-loading`, p, w, E) }),
                  N && n.createElement('div', { key: 'loading' }, X),
                  n.createElement('div', { className: q, key: 'container' }, v),
                )
              : X,
          );
        };
      h.setDefaultIndicator = (t) => {
        f = t;
      };
      let y = h;
    },
  });
