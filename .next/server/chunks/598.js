'use strict';
(exports.id = 598),
  (exports.ids = [598]),
  (exports.modules = {
    54598: (e, t, a) => {
      a.d(t, { Z: () => H });
      var i = a(34132),
        l = a.n(i),
        n = a(3729),
        s = a(84893),
        r = a(24773);
      let c = (e) => {
        let { prefixCls: t, className: a, style: i, size: s, shape: r } = e,
          c = l()({ [`${t}-lg`]: 'large' === s, [`${t}-sm`]: 'small' === s }),
          o = l()({ [`${t}-circle`]: 'circle' === r, [`${t}-square`]: 'square' === r, [`${t}-round`]: 'round' === r }),
          d = n.useMemo(() => ('number' == typeof s ? { width: s, height: s, lineHeight: `${s}px` } : {}), [s]);
        return n.createElement('span', { className: l()(t, c, o, a), style: Object.assign(Object.assign({}, d), i) });
      };
      var o = a(4710),
        d = a(35124),
        g = a(80433);
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
        j = (e) => {
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
        v = (e) => Object.assign({ width: e }, m(e)),
        O = (e) => {
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
                v(n(a).mul(2).equal()),
              ),
              {
                [`${t}-path`]: { fill: '#bfbfbf' },
                [`${t}-svg`]: Object.assign(Object.assign({}, v(a)), {
                  maxWidth: n(a).mul(4).equal(),
                  maxHeight: n(a).mul(4).equal(),
                }),
                [`${t}-svg${t}-svg-circle`]: { borderRadius: '50%' },
              },
            ),
            [`${t}${t}-circle`]: { borderRadius: '50%' },
          };
        },
        k = (e, t, a) => {
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
                    k(e, i, a),
                  ),
                  { [`${a}-lg`]: Object.assign({}, f(l, r)) },
                ),
                k(e, l, `${a}-lg`),
              ),
              { [`${a}-sm`]: Object.assign({}, f(n, r)) },
            ),
            k(e, n, `${a}-sm`),
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
            controlHeightSM: d,
            gradientFromColor: g,
            padding: u,
            marginSM: m,
            borderRadius: h,
            titleHeight: v,
            blockRadius: k,
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
                [`${a}`]: Object.assign({ display: 'inline-block', verticalAlign: 'top', background: g }, $(c)),
                [`${a}-circle`]: { borderRadius: '50%' },
                [`${a}-lg`]: Object.assign({}, $(o)),
                [`${a}-sm`]: Object.assign({}, $(d)),
              },
              [`${t}-content`]: {
                display: 'table-cell',
                width: '100%',
                verticalAlign: 'top',
                [`${i}`]: {
                  width: '100%',
                  height: v,
                  background: g,
                  borderRadius: k,
                  [`+ ${l}`]: { marginBlockStart: d },
                },
                [`${l}`]: {
                  padding: 0,
                  '> li': {
                    width: '100%',
                    height: f,
                    listStyle: 'none',
                    background: g,
                    borderRadius: k,
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
              Object.assign(Object.assign(Object.assign({ display: 'inline-block', width: 'auto' }, C(e)), p(e)), j(e)),
              O(e),
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
        },
        w = (0, d.I$)(
          'Skeleton',
          (e) => {
            let { componentCls: t, calc: a } = e;
            return [
              E(
                (0, g.TS)(e, {
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
        );
      var x = a(65651);
      let y = {
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
      };
      var q = a(49809),
        N = n.forwardRef(function (e, t) {
          return n.createElement(q.Z, (0, x.Z)({}, e, { ref: t, icon: y }));
        }),
        z = a(72375);
      let R = (e, t) => {
          let { width: a, rows: i = 2 } = t;
          return Array.isArray(a) ? a[e] : i - 1 === e ? a : void 0;
        },
        A = (e) => {
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
            children: d,
            avatar: g = !1,
            title: u = !0,
            paragraph: m = !0,
            active: $,
            round: b,
          } = e,
          { getPrefixCls: h, direction: p, skeleton: j } = n.useContext(s.E_),
          v = h('skeleton', t),
          [O, k, f] = w(v);
        if (a || !('loading' in e)) {
          let e, t;
          let a = !!g,
            s = !!u,
            d = !!m;
          if (a) {
            let t = Object.assign(
              Object.assign(
                { prefixCls: `${v}-avatar` },
                s && !d ? { size: 'large', shape: 'square' } : { size: 'large', shape: 'circle' },
              ),
              M(g),
            );
            e = n.createElement('div', { className: `${v}-header` }, n.createElement(c, Object.assign({}, t)));
          }
          if (s || d) {
            let e, i;
            if (s) {
              let t = Object.assign(
                Object.assign(
                  { prefixCls: `${v}-title` },
                  (function (e, t) {
                    return !e && t ? { width: '38%' } : e && t ? { width: '50%' } : {};
                  })(a, d),
                ),
                M(u),
              );
              e = n.createElement(B, Object.assign({}, t));
            }
            if (d) {
              let e = Object.assign(
                Object.assign(
                  { prefixCls: `${v}-paragraph` },
                  (function (e, t) {
                    let a = {};
                    return (e && t) || (a.width = '61%'), !e && t ? (a.rows = 3) : (a.rows = 2), a;
                  })(a, s),
                ),
                M(m),
              );
              i = n.createElement(A, Object.assign({}, e));
            }
            t = n.createElement('div', { className: `${v}-content` }, e, i);
          }
          let h = l()(
            v,
            { [`${v}-with-avatar`]: a, [`${v}-active`]: $, [`${v}-rtl`]: 'rtl' === p, [`${v}-round`]: b },
            null == j ? void 0 : j.className,
            i,
            r,
            k,
            f,
          );
          return O(
            n.createElement(
              'div',
              { className: h, style: Object.assign(Object.assign({}, null == j ? void 0 : j.style), o) },
              e,
              t,
            ),
          );
        }
        return null != d ? d : null;
      };
      (S.Button = (e) => {
        let { prefixCls: t, className: a, rootClassName: i, active: o, block: d = !1, size: g = 'default' } = e,
          { getPrefixCls: u } = n.useContext(s.E_),
          m = u('skeleton', t),
          [$, b, h] = w(m),
          p = (0, r.Z)(e, ['prefixCls']),
          j = l()(m, `${m}-element`, { [`${m}-active`]: o, [`${m}-block`]: d }, a, i, b, h);
        return $(
          n.createElement(
            'div',
            { className: j },
            n.createElement(c, Object.assign({ prefixCls: `${m}-button`, size: g }, p)),
          ),
        );
      }),
        (S.Avatar = (e) => {
          let { prefixCls: t, className: a, rootClassName: i, active: o, shape: d = 'circle', size: g = 'default' } = e,
            { getPrefixCls: u } = n.useContext(s.E_),
            m = u('skeleton', t),
            [$, b, h] = w(m),
            p = (0, r.Z)(e, ['prefixCls', 'className']),
            j = l()(m, `${m}-element`, { [`${m}-active`]: o }, a, i, b, h);
          return $(
            n.createElement(
              'div',
              { className: j },
              n.createElement(c, Object.assign({ prefixCls: `${m}-avatar`, shape: d, size: g }, p)),
            ),
          );
        }),
        (S.Input = (e) => {
          let { prefixCls: t, className: a, rootClassName: i, active: o, block: d, size: g = 'default' } = e,
            { getPrefixCls: u } = n.useContext(s.E_),
            m = u('skeleton', t),
            [$, b, h] = w(m),
            p = (0, r.Z)(e, ['prefixCls']),
            j = l()(m, `${m}-element`, { [`${m}-active`]: o, [`${m}-block`]: d }, a, i, b, h);
          return $(
            n.createElement(
              'div',
              { className: j },
              n.createElement(c, Object.assign({ prefixCls: `${m}-input`, size: g }, p)),
            ),
          );
        }),
        (S.Image = (e) => {
          let { prefixCls: t, className: a, rootClassName: i, style: r, active: c } = e,
            { getPrefixCls: o } = n.useContext(s.E_),
            d = o('skeleton', t),
            [g, u, m] = w(d),
            $ = l()(d, `${d}-element`, { [`${d}-active`]: c }, a, i, u, m);
          return g(
            n.createElement(
              'div',
              { className: $ },
              n.createElement(
                'div',
                { className: l()(`${d}-image`, a), style: r },
                n.createElement(
                  'svg',
                  { viewBox: '0 0 1098 1024', xmlns: 'http://www.w3.org/2000/svg', className: `${d}-image-svg` },
                  n.createElement('path', {
                    d: 'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z',
                    className: `${d}-image-path`,
                  }),
                ),
              ),
            ),
          );
        }),
        (S.Node = (e) => {
          let { prefixCls: t, className: a, rootClassName: i, style: r, active: c, children: o } = e,
            { getPrefixCls: d } = n.useContext(s.E_),
            g = d('skeleton', t),
            [u, m, $] = w(g),
            b = l()(g, `${g}-element`, { [`${g}-active`]: c }, m, a, i, $),
            h = null != o ? o : n.createElement(N, null);
          return u(
            n.createElement(
              'div',
              { className: b },
              n.createElement('div', { className: l()(`${g}-image`, a), style: r }, h),
            ),
          );
        });
      let H = S;
    },
  });
