'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3172],
  {
    23172: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return _;
        },
      });
      var i = a(42744),
        l = a.n(i),
        n = a(2265),
        s = a(19056),
        r = a(54925),
        c = (e) => {
          let { prefixCls: t, className: a, style: i, size: s, shape: r } = e,
            c = l()({ [`${t}-lg`]: 'large' === s, [`${t}-sm`]: 'small' === s }),
            o = l()({
              [`${t}-circle`]: 'circle' === r,
              [`${t}-square`]: 'square' === r,
              [`${t}-round`]: 'round' === r,
            }),
            g = n.useMemo(() => ('number' == typeof s ? { width: s, height: s, lineHeight: `${s}px` } : {}), [s]);
          return n.createElement('span', { className: l()(t, c, o, a), style: Object.assign(Object.assign({}, g), i) });
        },
        o = a(89426),
        g = a(26173),
        d = a(43744);
      let u = new o.E4('ant-skeleton-loading', {
          '0%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0 50%' },
        }),
        m = (e) => ({ height: e, lineHeight: (0, o.bf)(e) }),
        $ = (e) => Object.assign({ width: e }, m(e)),
        b = (e) => ({
          background: e.skeletonLoadingBackground,
          backgroundSize: '400% 100%',
          animationName: u,
          animationDuration: e.skeletonLoadingMotionDuration,
          animationTimingFunction: 'ease',
          animationIterationCount: 'infinite',
        }),
        h = (e, t) => Object.assign({ width: t(e).mul(5).equal(), minWidth: t(e).mul(5).equal() }, m(e)),
        p = (e) => {
          let {
            skeletonAvatarCls: t,
            gradientFromColor: a,
            controlHeight: i,
            controlHeightLG: l,
            controlHeightSM: n,
          } = e;
          return {
            [`${t}`]: Object.assign({ display: 'inline-block', verticalAlign: 'top', background: a }, $(i)),
            [`${t}${t}-circle`]: { borderRadius: '50%' },
            [`${t}${t}-lg`]: Object.assign({}, $(l)),
            [`${t}${t}-sm`]: Object.assign({}, $(n)),
          };
        },
        k = (e) => {
          let {
            controlHeight: t,
            borderRadiusSM: a,
            skeletonInputCls: i,
            controlHeightLG: l,
            controlHeightSM: n,
            gradientFromColor: s,
            calc: r,
          } = e;
          return {
            [`${i}`]: Object.assign(
              { display: 'inline-block', verticalAlign: 'top', background: s, borderRadius: a },
              h(t, r),
            ),
            [`${i}-lg`]: Object.assign({}, h(l, r)),
            [`${i}-sm`]: Object.assign({}, h(n, r)),
          };
        },
        j = (e) => Object.assign({ width: e }, m(e)),
        v = (e) => {
          let { skeletonImageCls: t, imageSizeBase: a, gradientFromColor: i, borderRadiusSM: l, calc: n } = e;
          return {
            [`${t}`]: Object.assign(
              Object.assign(
                {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  verticalAlign: 'top',
                  background: i,
                  borderRadius: l,
                },
                j(n(a).mul(2).equal()),
              ),
              {
                [`${t}-path`]: { fill: '#bfbfbf' },
                [`${t}-svg`]: Object.assign(Object.assign({}, j(a)), {
                  maxWidth: n(a).mul(4).equal(),
                  maxHeight: n(a).mul(4).equal(),
                }),
                [`${t}-svg${t}-svg-circle`]: { borderRadius: '50%' },
              },
            ),
            [`${t}${t}-circle`]: { borderRadius: '50%' },
          };
        },
        O = (e, t, a) => {
          let { skeletonButtonCls: i } = e;
          return {
            [`${a}${i}-circle`]: { width: t, minWidth: t, borderRadius: '50%' },
            [`${a}${i}-round`]: { borderRadius: t },
          };
        },
        f = (e, t) => Object.assign({ width: t(e).mul(2).equal(), minWidth: t(e).mul(2).equal() }, m(e)),
        C = (e) => {
          let {
            borderRadiusSM: t,
            skeletonButtonCls: a,
            controlHeight: i,
            controlHeightLG: l,
            controlHeightSM: n,
            gradientFromColor: s,
            calc: r,
          } = e;
          return Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {
                      [`${a}`]: Object.assign(
                        {
                          display: 'inline-block',
                          verticalAlign: 'top',
                          background: s,
                          borderRadius: t,
                          width: r(i).mul(2).equal(),
                          minWidth: r(i).mul(2).equal(),
                        },
                        f(i, r),
                      ),
                    },
                    O(e, i, a),
                  ),
                  { [`${a}-lg`]: Object.assign({}, f(l, r)) },
                ),
                O(e, l, `${a}-lg`),
              ),
              { [`${a}-sm`]: Object.assign({}, f(n, r)) },
            ),
            O(e, n, `${a}-sm`),
          );
        },
        E = (e) => {
          let {
            componentCls: t,
            skeletonAvatarCls: a,
            skeletonTitleCls: i,
            skeletonParagraphCls: l,
            skeletonButtonCls: n,
            skeletonInputCls: s,
            skeletonImageCls: r,
            controlHeight: c,
            controlHeightLG: o,
            controlHeightSM: g,
            gradientFromColor: d,
            padding: u,
            marginSM: m,
            borderRadius: h,
            titleHeight: j,
            blockRadius: O,
            paragraphLiHeight: f,
            controlHeightXS: E,
            paragraphMarginTop: w,
          } = e;
          return {
            [`${t}`]: {
              display: 'table',
              width: '100%',
              [`${t}-header`]: {
                display: 'table-cell',
                paddingInlineEnd: u,
                verticalAlign: 'top',
                [`${a}`]: Object.assign({ display: 'inline-block', verticalAlign: 'top', background: d }, $(c)),
                [`${a}-circle`]: { borderRadius: '50%' },
                [`${a}-lg`]: Object.assign({}, $(o)),
                [`${a}-sm`]: Object.assign({}, $(g)),
              },
              [`${t}-content`]: {
                display: 'table-cell',
                width: '100%',
                verticalAlign: 'top',
                [`${i}`]: {
                  width: '100%',
                  height: j,
                  background: d,
                  borderRadius: O,
                  [`+ ${l}`]: { marginBlockStart: g },
                },
                [`${l}`]: {
                  padding: 0,
                  '> li': {
                    width: '100%',
                    height: f,
                    listStyle: 'none',
                    background: d,
                    borderRadius: O,
                    '+ li': { marginBlockStart: E },
                  },
                },
                [`${l}> li:last-child:not(:first-child):not(:nth-child(2))`]: { width: '61%' },
              },
              [`&-round ${t}-content`]: { [`${i}, ${l} > li`]: { borderRadius: h } },
            },
            [`${t}-with-avatar ${t}-content`]: {
              [`${i}`]: { marginBlockStart: m, [`+ ${l}`]: { marginBlockStart: w } },
            },
            [`${t}${t}-element`]: Object.assign(
              Object.assign(Object.assign(Object.assign({ display: 'inline-block', width: 'auto' }, C(e)), p(e)), k(e)),
              v(e),
            ),
            [`${t}${t}-block`]: { width: '100%', [`${n}`]: { width: '100%' }, [`${s}`]: { width: '100%' } },
            [`${t}${t}-active`]: {
              [`
        ${i},
        ${l} > li,
        ${a},
        ${n},
        ${s},
        ${r}
      `]: Object.assign({}, b(e)),
            },
          };
        };
      var w = (0, g.I$)(
          'Skeleton',
          (e) => {
            let { componentCls: t, calc: a } = e;
            return [
              E(
                (0, d.TS)(e, {
                  skeletonAvatarCls: `${t}-avatar`,
                  skeletonTitleCls: `${t}-title`,
                  skeletonParagraphCls: `${t}-paragraph`,
                  skeletonButtonCls: `${t}-button`,
                  skeletonInputCls: `${t}-input`,
                  skeletonImageCls: `${t}-image`,
                  imageSizeBase: a(e.controlHeight).mul(1.5).equal(),
                  borderRadius: 100,
                  skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
                  skeletonLoadingMotionDuration: '1.4s',
                }),
              ),
            ];
          },
          (e) => {
            let { colorFillContent: t, colorFill: a } = e;
            return {
              color: t,
              colorGradientEnd: a,
              gradientFromColor: t,
              gradientToColor: a,
              titleHeight: e.controlHeight / 2,
              blockRadius: e.borderRadiusSM,
              paragraphMarginTop: e.marginLG + e.marginXXS,
              paragraphLiHeight: e.controlHeight / 2,
            };
          },
          {
            deprecatedTokens: [
              ['color', 'gradientFromColor'],
              ['colorGradientEnd', 'gradientToColor'],
            ],
          },
        ),
        x = a(13428),
        y = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z',
                },
              },
            ],
          },
          name: 'dot-chart',
          theme: 'outlined',
        },
        q = a(46614),
        N = n.forwardRef(function (e, t) {
          return n.createElement(q.Z, (0, x.Z)({}, e, { ref: t, icon: y }));
        }),
        z = a(16141);
      let R = (e, t) => {
        let { width: a, rows: i = 2 } = t;
        return Array.isArray(a) ? a[e] : i - 1 === e ? a : void 0;
      };
      var A = (e) => {
          let { prefixCls: t, className: a, style: i, rows: s } = e,
            r = (0, z.Z)(Array(s)).map((t, a) => n.createElement('li', { key: a, style: { width: R(a, e) } }));
          return n.createElement('ul', { className: l()(t, a), style: i }, r);
        },
        B = (e) => {
          let { prefixCls: t, className: a, width: i, style: s } = e;
          return n.createElement('h3', { className: l()(t, a), style: Object.assign({ width: i }, s) });
        };
      function M(e) {
        return e && 'object' == typeof e ? e : {};
      }
      let S = (e) => {
        let {
            prefixCls: t,
            loading: a,
            className: i,
            rootClassName: r,
            style: o,
            children: g,
            avatar: d = !1,
            title: u = !0,
            paragraph: m = !0,
            active: $,
            round: b,
          } = e,
          { getPrefixCls: h, direction: p, skeleton: k } = n.useContext(s.E_),
          j = h('skeleton', t),
          [v, O, f] = w(j);
        if (a || !('loading' in e)) {
          let e, t;
          let a = !!d,
            s = !!u,
            g = !!m;
          if (a) {
            let t = Object.assign(
              Object.assign(
                { prefixCls: `${j}-avatar` },
                s && !g ? { size: 'large', shape: 'square' } : { size: 'large', shape: 'circle' },
              ),
              M(d),
            );
            e = n.createElement('div', { className: `${j}-header` }, n.createElement(c, Object.assign({}, t)));
          }
          if (s || g) {
            let e, i;
            if (s) {
              let t = Object.assign(
                Object.assign({ prefixCls: `${j}-title` }, !a && g ? { width: '38%' } : a && g ? { width: '50%' } : {}),
                M(u),
              );
              e = n.createElement(B, Object.assign({}, t));
            }
            if (g) {
              let e = Object.assign(
                Object.assign(
                  { prefixCls: `${j}-paragraph` },
                  (function (e, t) {
                    let a = {};
                    return (e && t) || (a.width = '61%'), !e && t ? (a.rows = 3) : (a.rows = 2), a;
                  })(a, s),
                ),
                M(m),
              );
              i = n.createElement(A, Object.assign({}, e));
            }
            t = n.createElement('div', { className: `${j}-content` }, e, i);
          }
          let h = l()(
            j,
            { [`${j}-with-avatar`]: a, [`${j}-active`]: $, [`${j}-rtl`]: 'rtl' === p, [`${j}-round`]: b },
            null == k ? void 0 : k.className,
            i,
            r,
            O,
            f,
          );
          return v(
            n.createElement(
              'div',
              { className: h, style: Object.assign(Object.assign({}, null == k ? void 0 : k.style), o) },
              e,
              t,
            ),
          );
        }
        return null != g ? g : null;
      };
      (S.Button = (e) => {
        let { prefixCls: t, className: a, rootClassName: i, active: o, block: g = !1, size: d = 'default' } = e,
          { getPrefixCls: u } = n.useContext(s.E_),
          m = u('skeleton', t),
          [$, b, h] = w(m),
          p = (0, r.Z)(e, ['prefixCls']),
          k = l()(m, `${m}-element`, { [`${m}-active`]: o, [`${m}-block`]: g }, a, i, b, h);
        return $(
          n.createElement(
            'div',
            { className: k },
            n.createElement(c, Object.assign({ prefixCls: `${m}-button`, size: d }, p)),
          ),
        );
      }),
        (S.Avatar = (e) => {
          let { prefixCls: t, className: a, rootClassName: i, active: o, shape: g = 'circle', size: d = 'default' } = e,
            { getPrefixCls: u } = n.useContext(s.E_),
            m = u('skeleton', t),
            [$, b, h] = w(m),
            p = (0, r.Z)(e, ['prefixCls', 'className']),
            k = l()(m, `${m}-element`, { [`${m}-active`]: o }, a, i, b, h);
          return $(
            n.createElement(
              'div',
              { className: k },
              n.createElement(c, Object.assign({ prefixCls: `${m}-avatar`, shape: g, size: d }, p)),
            ),
          );
        }),
        (S.Input = (e) => {
          let { prefixCls: t, className: a, rootClassName: i, active: o, block: g, size: d = 'default' } = e,
            { getPrefixCls: u } = n.useContext(s.E_),
            m = u('skeleton', t),
            [$, b, h] = w(m),
            p = (0, r.Z)(e, ['prefixCls']),
            k = l()(m, `${m}-element`, { [`${m}-active`]: o, [`${m}-block`]: g }, a, i, b, h);
          return $(
            n.createElement(
              'div',
              { className: k },
              n.createElement(c, Object.assign({ prefixCls: `${m}-input`, size: d }, p)),
            ),
          );
        }),
        (S.Image = (e) => {
          let { prefixCls: t, className: a, rootClassName: i, style: r, active: c } = e,
            { getPrefixCls: o } = n.useContext(s.E_),
            g = o('skeleton', t),
            [d, u, m] = w(g),
            $ = l()(g, `${g}-element`, { [`${g}-active`]: c }, a, i, u, m);
          return d(
            n.createElement(
              'div',
              { className: $ },
              n.createElement(
                'div',
                { className: l()(`${g}-image`, a), style: r },
                n.createElement(
                  'svg',
                  { viewBox: '0 0 1098 1024', xmlns: 'http://www.w3.org/2000/svg', className: `${g}-image-svg` },
                  n.createElement('path', {
                    d: 'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z',
                    className: `${g}-image-path`,
                  }),
                ),
              ),
            ),
          );
        }),
        (S.Node = (e) => {
          let { prefixCls: t, className: a, rootClassName: i, style: r, active: c, children: o } = e,
            { getPrefixCls: g } = n.useContext(s.E_),
            d = g('skeleton', t),
            [u, m, $] = w(d),
            b = l()(d, `${d}-element`, { [`${d}-active`]: c }, m, a, i, $),
            h = null != o ? o : n.createElement(N, null);
          return u(
            n.createElement(
              'div',
              { className: b },
              n.createElement('div', { className: l()(`${d}-image`, a), style: r }, h),
            ),
          );
        });
      var _ = S;
    },
  },
]);
