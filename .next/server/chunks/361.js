'use strict';
(exports.id = 361),
  (exports.ids = [361]),
  (exports.modules = {
    22624: (t, e, o) => {
      o.d(e, { o2: () => l, yT: () => s });
      var r = o(72375),
        a = o(84666);
      let n = a.i.map((t) => `${t}-inverse`),
        i = ['success', 'processing', 'error', 'default', 'warning'];
      function l(t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return e ? [].concat((0, r.Z)(n), (0, r.Z)(a.i)).includes(t) : a.i.includes(t);
      }
      function s(t) {
        return i.includes(t);
      }
    },
    84666: (t, e, o) => {
      o.d(e, { i: () => r });
      let r = [
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
    78701: (t, e, o) => {
      o.d(e, { Z: () => a });
      var r = o(84666);
      function a(t, e) {
        return r.i.reduce((o, r) => {
          let a = t[`${r}1`],
            n = t[`${r}3`],
            i = t[`${r}6`],
            l = t[`${r}7`];
          return Object.assign(
            Object.assign({}, o),
            e(r, { lightColor: a, lightBorderColor: n, darkColor: i, textColor: l }),
          );
        }, {});
      }
    },
    39361: (t, e, o) => {
      o.d(e, { Z: () => Z });
      var r = o(3729),
        a = o(34132),
        n = o.n(a);
      function i(t) {
        var e = t.children,
          o = t.prefixCls,
          a = t.id,
          i = t.overlayInnerStyle,
          l = t.className,
          s = t.style;
        return r.createElement(
          'div',
          { className: n()(''.concat(o, '-content'), l), style: s },
          r.createElement(
            'div',
            { className: ''.concat(o, '-inner'), id: a, role: 'tooltip', style: i },
            'function' == typeof e ? e() : e,
          ),
        );
      }
      var l = o(65651),
        s = o(65830),
        p = o(12403),
        c = o(76724),
        f = { shiftX: 64, adjustY: 1 },
        m = { adjustX: 1, shiftY: !0 },
        u = [0, 0],
        b = {
          left: { points: ['cr', 'cl'], overflow: m, offset: [-4, 0], targetOffset: u },
          right: { points: ['cl', 'cr'], overflow: m, offset: [4, 0], targetOffset: u },
          top: { points: ['bc', 'tc'], overflow: f, offset: [0, -4], targetOffset: u },
          bottom: { points: ['tc', 'bc'], overflow: f, offset: [0, 4], targetOffset: u },
          topLeft: { points: ['bl', 'tl'], overflow: f, offset: [0, -4], targetOffset: u },
          leftTop: { points: ['tr', 'tl'], overflow: m, offset: [-4, 0], targetOffset: u },
          topRight: { points: ['br', 'tr'], overflow: f, offset: [0, -4], targetOffset: u },
          rightTop: { points: ['tl', 'tr'], overflow: m, offset: [4, 0], targetOffset: u },
          bottomRight: { points: ['tr', 'br'], overflow: f, offset: [0, 4], targetOffset: u },
          rightBottom: { points: ['bl', 'br'], overflow: m, offset: [4, 0], targetOffset: u },
          bottomLeft: { points: ['tl', 'bl'], overflow: f, offset: [0, 4], targetOffset: u },
          leftBottom: { points: ['br', 'bl'], overflow: m, offset: [-4, 0], targetOffset: u },
        },
        g = [
          'overlayClassName',
          'trigger',
          'mouseEnterDelay',
          'mouseLeaveDelay',
          'overlayStyle',
          'prefixCls',
          'children',
          'onVisibleChange',
          'afterVisibleChange',
          'transitionName',
          'animation',
          'motion',
          'placement',
          'align',
          'destroyTooltipOnHide',
          'defaultVisible',
          'getTooltipContainer',
          'overlayInnerStyle',
          'arrowContent',
          'overlay',
          'id',
          'showArrow',
        ];
      let d = (0, r.forwardRef)(function (t, e) {
        var o = t.overlayClassName,
          a = t.trigger,
          n = t.mouseEnterDelay,
          f = t.mouseLeaveDelay,
          m = t.overlayStyle,
          u = t.prefixCls,
          d = void 0 === u ? 'rc-tooltip' : u,
          h = t.children,
          v = t.onVisibleChange,
          w = t.afterVisibleChange,
          y = t.transitionName,
          $ = t.animation,
          O = t.motion,
          k = t.placement,
          j = t.align,
          C = t.destroyTooltipOnHide,
          _ = t.defaultVisible,
          x = t.getTooltipContainer,
          R = t.overlayInnerStyle,
          T = (t.arrowContent, t.overlay),
          S = t.id,
          N = t.showArrow,
          P = (0, p.Z)(t, g),
          B = (0, r.useRef)(null);
        (0, r.useImperativeHandle)(e, function () {
          return B.current;
        });
        var E = (0, s.Z)({}, P);
        return (
          'visible' in t && (E.popupVisible = t.visible),
          r.createElement(
            c.Z,
            (0, l.Z)(
              {
                popupClassName: o,
                prefixCls: d,
                popup: function () {
                  return r.createElement(i, { key: 'content', prefixCls: d, id: S, overlayInnerStyle: R }, T);
                },
                action: void 0 === a ? ['hover'] : a,
                builtinPlacements: b,
                popupPlacement: void 0 === k ? 'right' : k,
                ref: B,
                popupAlign: void 0 === j ? {} : j,
                getPopupContainer: x,
                onPopupVisibleChange: v,
                afterPopupVisibleChange: w,
                popupTransitionName: y,
                popupAnimation: $,
                popupMotion: O,
                defaultPopupVisible: _,
                autoDestroy: void 0 !== C && C,
                mouseLeaveDelay: void 0 === f ? 0.1 : f,
                popupStyle: m,
                mouseEnterDelay: void 0 === n ? 0 : n,
                arrow: void 0 === N || N,
              },
              E,
            ),
            h,
          )
        );
      });
      var h = o(80595),
        v = o(43531),
        w = o(95295),
        y = o(4710);
      let $ = (t, e, o) => {
        let { sizePopupArrow: r, arrowPolygon: a, arrowPath: n, arrowShadowWidth: i, borderRadiusXS: l, calc: s } = t;
        return {
          pointerEvents: 'none',
          width: r,
          height: r,
          overflow: 'hidden',
          '&::before': {
            position: 'absolute',
            bottom: 0,
            insetInlineStart: 0,
            width: r,
            height: s(r).div(2).equal(),
            background: e,
            clipPath: { _multi_value_: !0, value: [a, n] },
            content: '""',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            width: i,
            height: i,
            bottom: 0,
            insetInline: 0,
            margin: 'auto',
            borderRadius: { _skip_check_: !0, value: `0 0 ${(0, y.bf)(l)} 0` },
            transform: 'translateY(50%) rotate(-135deg)',
            boxShadow: o,
            zIndex: 0,
            background: 'transparent',
          },
        };
      };
      function O(t) {
        let { contentRadius: e, limitVerticalRadius: o } = t,
          r = e > 12 ? e + 2 : 12;
        return { arrowOffsetHorizontal: r, arrowOffsetVertical: o ? 8 : r };
      }
      let k = {
          left: { points: ['cr', 'cl'] },
          right: { points: ['cl', 'cr'] },
          top: { points: ['bc', 'tc'] },
          bottom: { points: ['tc', 'bc'] },
          topLeft: { points: ['bl', 'tl'] },
          leftTop: { points: ['tr', 'tl'] },
          topRight: { points: ['br', 'tr'] },
          rightTop: { points: ['tl', 'tr'] },
          bottomRight: { points: ['tr', 'br'] },
          rightBottom: { points: ['bl', 'br'] },
          bottomLeft: { points: ['tl', 'bl'] },
          leftBottom: { points: ['br', 'bl'] },
        },
        j = {
          topLeft: { points: ['bl', 'tc'] },
          leftTop: { points: ['tr', 'cl'] },
          topRight: { points: ['br', 'tc'] },
          rightTop: { points: ['tl', 'cr'] },
          bottomRight: { points: ['tr', 'bc'] },
          rightBottom: { points: ['bl', 'cr'] },
          bottomLeft: { points: ['tl', 'bc'] },
          leftBottom: { points: ['br', 'cl'] },
        },
        C = new Set([
          'topLeft',
          'topRight',
          'bottomLeft',
          'bottomRight',
          'leftTop',
          'leftBottom',
          'rightTop',
          'rightBottom',
        ]);
      var _ = o(29545),
        x = o(55984),
        R = o(21992),
        T = o(84893),
        S = o(71264),
        N = o(86216),
        P = o(22989),
        B = o(96461),
        E = o(78701),
        L = o(80433),
        I = o(35124);
      let V = (t) => {
          let {
            componentCls: e,
            tooltipMaxWidth: o,
            tooltipColor: r,
            tooltipBg: a,
            tooltipBorderRadius: n,
            zIndexPopup: i,
            controlHeight: l,
            boxShadowSecondary: s,
            paddingSM: p,
            paddingXS: c,
          } = t;
          return [
            {
              [e]: Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, (0, P.Wf)(t)), {
                    position: 'absolute',
                    zIndex: i,
                    display: 'block',
                    width: 'max-content',
                    maxWidth: o,
                    visibility: 'visible',
                    transformOrigin: 'var(--arrow-x, 50%) var(--arrow-y, 50%)',
                    '&-hidden': { display: 'none' },
                    '--antd-arrow-background-color': a,
                    [`${e}-inner`]: {
                      minWidth: l,
                      minHeight: l,
                      padding: `${(0, y.bf)(t.calc(p).div(2).equal())} ${(0, y.bf)(c)}`,
                      color: r,
                      textAlign: 'start',
                      textDecoration: 'none',
                      wordWrap: 'break-word',
                      backgroundColor: a,
                      borderRadius: n,
                      boxShadow: s,
                      boxSizing: 'border-box',
                    },
                    '&-placement-left,&-placement-leftTop,&-placement-leftBottom,&-placement-right,&-placement-rightTop,&-placement-rightBottom':
                      { [`${e}-inner`]: { borderRadius: t.min(n, 8) } },
                    [`${e}-content`]: { position: 'relative' },
                  }),
                  (0, E.Z)(t, (t, o) => {
                    let { darkColor: r } = o;
                    return {
                      [`&${e}-${t}`]: {
                        [`${e}-inner`]: { backgroundColor: r },
                        [`${e}-arrow`]: { '--antd-arrow-background-color': r },
                      },
                    };
                  }),
                ),
                { '&-rtl': { direction: 'rtl' } },
              ),
            },
            (function (t, e, o) {
              var r, a, n, i, l, s, p, c;
              let { componentCls: f, boxShadowPopoverArrow: m, arrowOffsetVertical: u, arrowOffsetHorizontal: b } = t,
                { arrowDistance: g = 0, arrowPlacement: d = { left: !0, right: !0, top: !0, bottom: !0 } } = {};
              return {
                [f]: Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        {
                          [`${f}-arrow`]: [
                            Object.assign(
                              Object.assign({ position: 'absolute', zIndex: 1, display: 'block' }, $(t, e, m)),
                              { '&:before': { background: e } },
                            ),
                          ],
                        },
                        ((r = !!d.top),
                        (a = {
                          [`&-placement-top > ${f}-arrow,&-placement-topLeft > ${f}-arrow,&-placement-topRight > ${f}-arrow`]:
                            { bottom: g, transform: 'translateY(100%) rotate(180deg)' },
                          [`&-placement-top > ${f}-arrow`]: {
                            left: { _skip_check_: !0, value: '50%' },
                            transform: 'translateX(-50%) translateY(100%) rotate(180deg)',
                          },
                          [`&-placement-topLeft > ${f}-arrow`]: { left: { _skip_check_: !0, value: b } },
                          [`&-placement-topRight > ${f}-arrow`]: { right: { _skip_check_: !0, value: b } },
                        }),
                        r ? a : {}),
                      ),
                      ((n = !!d.bottom),
                      (i = {
                        [`&-placement-bottom > ${f}-arrow,&-placement-bottomLeft > ${f}-arrow,&-placement-bottomRight > ${f}-arrow`]:
                          { top: g, transform: 'translateY(-100%)' },
                        [`&-placement-bottom > ${f}-arrow`]: {
                          left: { _skip_check_: !0, value: '50%' },
                          transform: 'translateX(-50%) translateY(-100%)',
                        },
                        [`&-placement-bottomLeft > ${f}-arrow`]: { left: { _skip_check_: !0, value: b } },
                        [`&-placement-bottomRight > ${f}-arrow`]: { right: { _skip_check_: !0, value: b } },
                      }),
                      n ? i : {}),
                    ),
                    ((l = !!d.left),
                    (s = {
                      [`&-placement-left > ${f}-arrow,&-placement-leftTop > ${f}-arrow,&-placement-leftBottom > ${f}-arrow`]:
                        { right: { _skip_check_: !0, value: g }, transform: 'translateX(100%) rotate(90deg)' },
                      [`&-placement-left > ${f}-arrow`]: {
                        top: { _skip_check_: !0, value: '50%' },
                        transform: 'translateY(-50%) translateX(100%) rotate(90deg)',
                      },
                      [`&-placement-leftTop > ${f}-arrow`]: { top: u },
                      [`&-placement-leftBottom > ${f}-arrow`]: { bottom: u },
                    }),
                    l ? s : {}),
                  ),
                  ((p = !!d.right),
                  (c = {
                    [`&-placement-right > ${f}-arrow,&-placement-rightTop > ${f}-arrow,&-placement-rightBottom > ${f}-arrow`]:
                      { left: { _skip_check_: !0, value: g }, transform: 'translateX(-100%) rotate(-90deg)' },
                    [`&-placement-right > ${f}-arrow`]: {
                      top: { _skip_check_: !0, value: '50%' },
                      transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)',
                    },
                    [`&-placement-rightTop > ${f}-arrow`]: { top: u },
                    [`&-placement-rightBottom > ${f}-arrow`]: { bottom: u },
                  }),
                  p ? c : {}),
                ),
              };
            })(t, 'var(--antd-arrow-background-color)'),
            { [`${e}-pure`]: { position: 'relative', maxWidth: 'none', margin: t.sizePopupArrow } },
          ];
        },
        A = (t) =>
          Object.assign(
            Object.assign(
              { zIndexPopup: t.zIndexPopupBase + 70 },
              O({ contentRadius: t.borderRadius, limitVerticalRadius: !0 }),
            ),
            (function (t) {
              let { sizePopupArrow: e, borderRadiusXS: o, borderRadiusOuter: r } = t,
                a = e / 2,
                n = (1 * r) / Math.sqrt(2),
                i = a - r * (1 - 1 / Math.sqrt(2)),
                l = a - (1 / Math.sqrt(2)) * o,
                s = r * (Math.sqrt(2) - 1) + (1 / Math.sqrt(2)) * o,
                p = r * (Math.sqrt(2) - 1),
                c = `polygon(${p}px 100%, 50% ${p}px, ${2 * a - p}px 100%, ${p}px 100%)`,
                f = `path('M 0 ${a} A ${r} ${r} 0 0 0 ${n} ${i} L ${l} ${s} A ${o} ${o} 0 0 1 ${2 * a - l} ${s} L ${
                  2 * a - n
                } ${i} A ${r} ${r} 0 0 0 ${2 * a - 0} ${a} Z')`;
              return { arrowShadowWidth: a * Math.sqrt(2) + r * (Math.sqrt(2) - 2), arrowPath: f, arrowPolygon: c };
            })((0, L.TS)(t, { borderRadiusOuter: Math.min(t.borderRadiusOuter, 4) })),
          );
      function z(t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, I.I$)(
          'Tooltip',
          (t) => {
            let { borderRadius: e, colorTextLightSolid: o, colorBgSpotlight: r } = t;
            return [
              V((0, L.TS)(t, { tooltipMaxWidth: 250, tooltipColor: o, tooltipBorderRadius: e, tooltipBg: r })),
              (0, B._y)(t, 'zoom-big-fast'),
            ];
          },
          A,
          { resetStyle: !1, injectStyle: e },
        )(t);
      }
      var X = o(22624);
      function Y(t, e) {
        let o = (0, X.o2)(e),
          r = n()({ [`${t}-${e}`]: e && o }),
          a = {},
          i = {};
        return (
          e && !o && ((a.background = e), (i['--antd-arrow-background-color'] = e)),
          { className: r, overlayStyle: a, arrowStyle: i }
        );
      }
      var M = function (t, e) {
        var o = {};
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (o[r] = t[r]);
        if (null != t && 'function' == typeof Object.getOwnPropertySymbols)
          for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
            0 > e.indexOf(r[a]) && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (o[r[a]] = t[r[a]]);
        return o;
      };
      let D = r.forwardRef((t, e) => {
        var o, a;
        let {
            prefixCls: i,
            openClassName: l,
            getTooltipContainer: s,
            overlayClassName: p,
            color: c,
            overlayInnerStyle: f,
            children: m,
            afterOpenChange: u,
            afterVisibleChange: b,
            destroyTooltipOnHide: g,
            arrow: y = !0,
            title: $,
            overlay: P,
            builtinPlacements: B,
            arrowPointAtCenter: E = !1,
            autoAdjustOverflow: L = !0,
          } = t,
          I = !!y,
          [, V] = (0, N.ZP)(),
          { getPopupContainer: A, getPrefixCls: X, direction: D } = r.useContext(T.E_),
          Z = (0, x.ln)('Tooltip'),
          H = r.useRef(null),
          q = () => {
            var t;
            null === (t = H.current) || void 0 === t || t.forceAlign();
          };
        r.useImperativeHandle(e, () => ({
          forceAlign: q,
          forcePopupAlign: () => {
            Z.deprecated(!1, 'forcePopupAlign', 'forceAlign'), q();
          },
        }));
        let [W, F] = (0, h.Z)(!1, {
            value: null !== (o = t.open) && void 0 !== o ? o : t.visible,
            defaultValue: null !== (a = t.defaultOpen) && void 0 !== a ? a : t.defaultVisible,
          }),
          U = !$ && !P && 0 !== $,
          G = r.useMemo(() => {
            var t, e;
            let o = E;
            return (
              'object' == typeof y &&
                (o =
                  null !== (e = null !== (t = y.pointAtCenter) && void 0 !== t ? t : y.arrowPointAtCenter) &&
                  void 0 !== e
                    ? e
                    : E),
              B ||
                (function (t) {
                  let {
                      arrowWidth: e,
                      autoAdjustOverflow: o,
                      arrowPointAtCenter: r,
                      offset: a,
                      borderRadius: n,
                      visibleFirst: i,
                    } = t,
                    l = e / 2,
                    s = {};
                  return (
                    Object.keys(k).forEach((t) => {
                      let p = Object.assign(Object.assign({}, (r && j[t]) || k[t]), {
                        offset: [0, 0],
                        dynamicInset: !0,
                      });
                      switch (((s[t] = p), C.has(t) && (p.autoArrow = !1), t)) {
                        case 'top':
                        case 'topLeft':
                        case 'topRight':
                          p.offset[1] = -l - a;
                          break;
                        case 'bottom':
                        case 'bottomLeft':
                        case 'bottomRight':
                          p.offset[1] = l + a;
                          break;
                        case 'left':
                        case 'leftTop':
                        case 'leftBottom':
                          p.offset[0] = -l - a;
                          break;
                        case 'right':
                        case 'rightTop':
                        case 'rightBottom':
                          p.offset[0] = l + a;
                      }
                      let c = O({ contentRadius: n, limitVerticalRadius: !0 });
                      if (r)
                        switch (t) {
                          case 'topLeft':
                          case 'bottomLeft':
                            p.offset[0] = -c.arrowOffsetHorizontal - l;
                            break;
                          case 'topRight':
                          case 'bottomRight':
                            p.offset[0] = c.arrowOffsetHorizontal + l;
                            break;
                          case 'leftTop':
                          case 'rightTop':
                            p.offset[1] = -c.arrowOffsetHorizontal - l;
                            break;
                          case 'leftBottom':
                          case 'rightBottom':
                            p.offset[1] = c.arrowOffsetHorizontal + l;
                        }
                      (p.overflow = (function (t, e, o, r) {
                        if (!1 === r) return { adjustX: !1, adjustY: !1 };
                        let a = {};
                        switch (t) {
                          case 'top':
                          case 'bottom':
                            (a.shiftX = 2 * e.arrowOffsetHorizontal + o), (a.shiftY = !0), (a.adjustY = !0);
                            break;
                          case 'left':
                          case 'right':
                            (a.shiftY = 2 * e.arrowOffsetVertical + o), (a.shiftX = !0), (a.adjustX = !0);
                        }
                        let n = Object.assign(Object.assign({}, a), r && 'object' == typeof r ? r : {});
                        return n.shiftX || (n.adjustX = !0), n.shiftY || (n.adjustY = !0), n;
                      })(t, c, e, o)),
                        i && (p.htmlRegion = 'visibleFirst');
                    }),
                    s
                  );
                })({
                  arrowPointAtCenter: o,
                  autoAdjustOverflow: L,
                  arrowWidth: I ? V.sizePopupArrow : 0,
                  borderRadius: V.borderRadius,
                  offset: V.marginXXS,
                  visibleFirst: !0,
                })
            );
          }, [E, y, B, V]),
          J = r.useMemo(() => (0 === $ ? $ : P || $ || ''), [P, $]),
          K = r.createElement(S.BR, null, 'function' == typeof J ? J() : J),
          {
            getPopupContainer: Q,
            placement: tt = 'top',
            mouseEnterDelay: te = 0.1,
            mouseLeaveDelay: to = 0.1,
            overlayStyle: tr,
            rootClassName: ta,
          } = t,
          tn = M(t, [
            'getPopupContainer',
            'placement',
            'mouseEnterDelay',
            'mouseLeaveDelay',
            'overlayStyle',
            'rootClassName',
          ]),
          ti = X('tooltip', i),
          tl = X(),
          ts = t['data-popover-inject'],
          tp = W;
        'open' in t || 'visible' in t || !U || (tp = !1);
        let tc = r.isValidElement(m) && !(0, _.M2)(m) ? m : r.createElement('span', null, m),
          tf = tc.props,
          tm = tf.className && 'string' != typeof tf.className ? tf.className : n()(tf.className, l || `${ti}-open`),
          [tu, tb, tg] = z(ti, !ts),
          td = Y(ti, c),
          th = td.arrowStyle,
          tv = Object.assign(Object.assign({}, f), td.overlayStyle),
          tw = n()(p, { [`${ti}-rtl`]: 'rtl' === D }, td.className, ta, tb, tg),
          [ty, t$] = (0, v.Cn)('Tooltip', tn.zIndex),
          tO = r.createElement(
            d,
            Object.assign({}, tn, {
              zIndex: ty,
              showArrow: I,
              placement: tt,
              mouseEnterDelay: te,
              mouseLeaveDelay: to,
              prefixCls: ti,
              overlayClassName: tw,
              overlayStyle: Object.assign(Object.assign({}, th), tr),
              getTooltipContainer: Q || s || A,
              ref: H,
              builtinPlacements: G,
              overlay: K,
              visible: tp,
              onVisibleChange: (e) => {
                var o, r;
                F(!U && e),
                  U ||
                    (null === (o = t.onOpenChange) || void 0 === o || o.call(t, e),
                    null === (r = t.onVisibleChange) || void 0 === r || r.call(t, e));
              },
              afterVisibleChange: null != u ? u : b,
              overlayInnerStyle: tv,
              arrowContent: r.createElement('span', { className: `${ti}-arrow-content` }),
              motion: { motionName: (0, w.m)(tl, 'zoom-big-fast', t.transitionName), motionDeadline: 1e3 },
              destroyTooltipOnHide: !!g,
            }),
            tp ? (0, _.Tm)(tc, { className: tm }) : tc,
          );
        return tu(r.createElement(R.Z.Provider, { value: t$ }, tO));
      });
      D._InternalPanelDoNotUseOrYouWillBeFired = (t) => {
        let { prefixCls: e, className: o, placement: a = 'top', title: l, color: s, overlayInnerStyle: p } = t,
          { getPrefixCls: c } = r.useContext(T.E_),
          f = c('tooltip', e),
          [m, u, b] = z(f),
          g = Y(f, s),
          d = g.arrowStyle,
          h = Object.assign(Object.assign({}, p), g.overlayStyle),
          v = n()(u, b, f, `${f}-pure`, `${f}-placement-${a}`, o, g.className);
        return m(
          r.createElement(
            'div',
            { className: v, style: d },
            r.createElement('div', { className: `${f}-arrow` }),
            r.createElement(i, Object.assign({}, t, { className: u, prefixCls: f, overlayInnerStyle: h }), l),
          ),
        );
      };
      let Z = D;
    },
  });
