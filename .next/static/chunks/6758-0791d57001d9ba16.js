'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6758],
  {
    16758: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return W;
        },
      });
      var o = n(10870),
        r = n(98961),
        i = n(82554),
        a = n(42321),
        l = n(42744),
        u = n.n(l),
        s = n(11288),
        c = n(91478),
        f = n(9160),
        p = n(28788),
        m = n(53079),
        d = n(19836),
        v = n(77971),
        h = n(2265),
        g = n(13428),
        y = n(52640),
        b = n(17146);
      function w(e) {
        var t = e.prefixCls,
          n = e.align,
          o = e.arrow,
          r = e.arrowPos,
          i = o || {},
          a = i.className,
          l = i.content,
          s = r.x,
          c = r.y,
          f = h.useRef();
        if (!n || !n.points) return null;
        var p = { position: 'absolute' };
        if (!1 !== n.autoArrow) {
          var m = n.points[0],
            d = n.points[1],
            v = m[0],
            g = m[1],
            y = d[0],
            b = d[1];
          v !== y && ['t', 'b'].includes(v)
            ? 't' === v
              ? (p.top = 0)
              : (p.bottom = 0)
            : (p.top = void 0 === c ? 0 : c),
            g !== b && ['l', 'r'].includes(g)
              ? 'l' === g
                ? (p.left = 0)
                : (p.right = 0)
              : (p.left = void 0 === s ? 0 : s);
        }
        return h.createElement('div', { ref: f, className: u()(''.concat(t, '-arrow'), a), style: p }, l);
      }
      function x(e) {
        var t = e.prefixCls,
          n = e.open,
          o = e.zIndex,
          r = e.mask,
          i = e.motion;
        return r
          ? h.createElement(y.ZP, (0, g.Z)({}, i, { motionAppear: !0, visible: n, removeOnLeave: !0 }), function (e) {
              var n = e.className;
              return h.createElement('div', { style: { zIndex: o }, className: u()(''.concat(t, '-mask'), n) });
            })
          : null;
      }
      var k = h.memo(
          function (e) {
            return e.children;
          },
          function (e, t) {
            return t.cache;
          },
        ),
        Z = h.forwardRef(function (e, t) {
          var n = e.popup,
            i = e.className,
            a = e.prefixCls,
            l = e.style,
            c = e.target,
            f = e.onVisibleChanged,
            p = e.open,
            m = e.keepDom,
            v = e.fresh,
            Z = e.onClick,
            E = e.mask,
            C = e.arrow,
            M = e.arrowPos,
            P = e.align,
            A = e.motion,
            N = e.maskMotion,
            R = e.forceRender,
            L = e.getPopupContainer,
            S = e.autoDestroy,
            z = e.portal,
            D = e.zIndex,
            H = e.onMouseEnter,
            T = e.onMouseLeave,
            Y = e.onPointerEnter,
            X = e.ready,
            B = e.offsetX,
            V = e.offsetY,
            W = e.offsetR,
            O = e.offsetB,
            F = e.onAlign,
            I = e.onPrepare,
            j = e.stretch,
            _ = e.targetWidth,
            q = e.targetHeight,
            J = 'function' == typeof n ? n() : n,
            Q = p || m,
            $ = (null == L ? void 0 : L.length) > 0,
            G = h.useState(!L || !$),
            K = (0, r.Z)(G, 2),
            U = K[0],
            ee = K[1];
          if (
            ((0, d.Z)(
              function () {
                !U && $ && c && ee(!0);
              },
              [U, $, c],
            ),
            !U)
          )
            return null;
          var et = 'auto',
            en = { left: '-1000vw', top: '-1000vh', right: et, bottom: et };
          if (X || !p) {
            var eo,
              er = P.points,
              ei = P.dynamicInset || (null === (eo = P._experimental) || void 0 === eo ? void 0 : eo.dynamicInset),
              ea = ei && 'r' === er[0][1],
              el = ei && 'b' === er[0][0];
            ea ? ((en.right = W), (en.left = et)) : ((en.left = B), (en.right = et)),
              el ? ((en.bottom = O), (en.top = et)) : ((en.top = V), (en.bottom = et));
          }
          var eu = {};
          return (
            j &&
              (j.includes('height') && q ? (eu.height = q) : j.includes('minHeight') && q && (eu.minHeight = q),
              j.includes('width') && _ ? (eu.width = _) : j.includes('minWidth') && _ && (eu.minWidth = _)),
            p || (eu.pointerEvents = 'none'),
            h.createElement(
              z,
              {
                open: R || Q,
                getContainer:
                  L &&
                  function () {
                    return L(c);
                  },
                autoDestroy: S,
              },
              h.createElement(x, { prefixCls: a, open: p, zIndex: D, mask: E, motion: N }),
              h.createElement(s.Z, { onResize: F, disabled: !p }, function (e) {
                return h.createElement(
                  y.ZP,
                  (0, g.Z)(
                    {
                      motionAppear: !0,
                      motionEnter: !0,
                      motionLeave: !0,
                      removeOnLeave: !1,
                      forceRender: R,
                      leavedClassName: ''.concat(a, '-hidden'),
                    },
                    A,
                    {
                      onAppearPrepare: I,
                      onEnterPrepare: I,
                      visible: p,
                      onVisibleChanged: function (e) {
                        var t;
                        null == A || null === (t = A.onVisibleChanged) || void 0 === t || t.call(A, e), f(e);
                      },
                    },
                  ),
                  function (n, r) {
                    var s = n.className,
                      c = n.style,
                      f = u()(a, s, i);
                    return h.createElement(
                      'div',
                      {
                        ref: (0, b.sQ)(e, t, r),
                        className: f,
                        style: (0, o.Z)(
                          (0, o.Z)(
                            (0, o.Z)(
                              (0, o.Z)(
                                { '--arrow-x': ''.concat(M.x || 0, 'px'), '--arrow-y': ''.concat(M.y || 0, 'px') },
                                en,
                              ),
                              eu,
                            ),
                            c,
                          ),
                          {},
                          { boxSizing: 'border-box', zIndex: D },
                          l,
                        ),
                        onMouseEnter: H,
                        onMouseLeave: T,
                        onPointerEnter: Y,
                        onClick: Z,
                      },
                      C && h.createElement(w, { prefixCls: a, arrow: C, arrowPos: M, align: P }),
                      h.createElement(k, { cache: !p && !v }, J),
                    );
                  },
                );
              }),
            )
          );
        }),
        E = h.forwardRef(function (e, t) {
          var n = e.children,
            o = e.getTriggerDOMNode,
            r = (0, b.Yr)(n),
            i = h.useCallback(
              function (e) {
                (0, b.mH)(t, o ? o(e) : e);
              },
              [o],
            ),
            a = (0, b.x1)(i, n.ref);
          return r ? h.cloneElement(n, { ref: a }) : n;
        }),
        C = h.createContext(null);
      function M(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      var P = n(42120);
      function A(e, t, n, o) {
        return t || (n ? { motionName: ''.concat(e, '-').concat(n) } : o ? { motionName: o } : null);
      }
      function N(e) {
        return e.ownerDocument.defaultView;
      }
      function R(e) {
        for (var t = [], n = null == e ? void 0 : e.parentElement, o = ['hidden', 'scroll', 'clip', 'auto']; n; ) {
          var r = N(n).getComputedStyle(n);
          [r.overflowX, r.overflowY, r.overflow].some(function (e) {
            return o.includes(e);
          }) && t.push(n),
            (n = n.parentElement);
        }
        return t;
      }
      function L(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return Number.isNaN(e) ? t : e;
      }
      function S(e) {
        return L(parseFloat(e), 0);
      }
      function z(e, t) {
        var n = (0, o.Z)({}, e);
        return (
          (t || []).forEach(function (e) {
            if (!(e instanceof HTMLBodyElement || e instanceof HTMLHtmlElement)) {
              var t = N(e).getComputedStyle(e),
                o = t.overflow,
                r = t.overflowClipMargin,
                i = t.borderTopWidth,
                a = t.borderBottomWidth,
                l = t.borderLeftWidth,
                u = t.borderRightWidth,
                s = e.getBoundingClientRect(),
                c = e.offsetHeight,
                f = e.clientHeight,
                p = e.offsetWidth,
                m = e.clientWidth,
                d = S(i),
                v = S(a),
                h = S(l),
                g = S(u),
                y = L(Math.round((s.width / p) * 1e3) / 1e3),
                b = L(Math.round((s.height / c) * 1e3) / 1e3),
                w = d * b,
                x = h * y,
                k = 0,
                Z = 0;
              if ('clip' === o) {
                var E = S(r);
                (k = E * y), (Z = E * b);
              }
              var C = s.x + x - k,
                M = s.y + w - Z,
                P = C + s.width + 2 * k - x - g * y - (p - m - h - g) * y,
                A = M + s.height + 2 * Z - w - v * b - (c - f - d - v) * b;
              (n.left = Math.max(n.left, C)),
                (n.top = Math.max(n.top, M)),
                (n.right = Math.min(n.right, P)),
                (n.bottom = Math.min(n.bottom, A));
            }
          }),
          n
        );
      }
      function D(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = ''.concat(t),
          o = n.match(/^(.*)\%$/);
        return o ? (parseFloat(o[1]) / 100) * e : parseFloat(n);
      }
      function H(e, t) {
        var n = (0, r.Z)(t || [], 2),
          o = n[0],
          i = n[1];
        return [D(e.width, o), D(e.height, i)];
      }
      function T() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
        return [e[0], e[1]];
      }
      function Y(e, t) {
        var n,
          o = t[0],
          r = t[1];
        return (
          (n = 't' === o ? e.y : 'b' === o ? e.y + e.height : e.y + e.height / 2),
          { x: 'l' === r ? e.x : 'r' === r ? e.x + e.width : e.x + e.width / 2, y: n }
        );
      }
      function X(e, t) {
        var n = { t: 'b', b: 't', l: 'r', r: 'l' };
        return e
          .map(function (e, o) {
            return o === t ? n[e] || 'c' : e;
          })
          .join('');
      }
      var B = n(16141);
      n(54812);
      var V = [
          'prefixCls',
          'children',
          'action',
          'showAction',
          'hideAction',
          'popupVisible',
          'defaultPopupVisible',
          'onPopupVisibleChange',
          'afterPopupVisibleChange',
          'mouseEnterDelay',
          'mouseLeaveDelay',
          'focusDelay',
          'blurDelay',
          'mask',
          'maskClosable',
          'getPopupContainer',
          'forceRender',
          'autoDestroy',
          'destroyPopupOnHide',
          'popup',
          'popupClassName',
          'popupStyle',
          'popupPlacement',
          'builtinPlacements',
          'popupAlign',
          'zIndex',
          'stretch',
          'getPopupClassNameFromAlign',
          'fresh',
          'alignPoint',
          'onPopupClick',
          'onPopupAlign',
          'arrow',
          'popupMotion',
          'maskMotion',
          'popupTransitionName',
          'popupAnimation',
          'maskTransitionName',
          'maskAnimation',
          'className',
          'getTriggerDOMNode',
        ],
        W = (function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Z;
          return h.forwardRef(function (t, n) {
            var a,
              l,
              g,
              y,
              b,
              w,
              x,
              k,
              S,
              D,
              W,
              O,
              F,
              I,
              j,
              _,
              q = t.prefixCls,
              J = void 0 === q ? 'rc-trigger-popup' : q,
              Q = t.children,
              $ = t.action,
              G = t.showAction,
              K = t.hideAction,
              U = t.popupVisible,
              ee = t.defaultPopupVisible,
              et = t.onPopupVisibleChange,
              en = t.afterPopupVisibleChange,
              eo = t.mouseEnterDelay,
              er = t.mouseLeaveDelay,
              ei = void 0 === er ? 0.1 : er,
              ea = t.focusDelay,
              el = t.blurDelay,
              eu = t.mask,
              es = t.maskClosable,
              ec = t.getPopupContainer,
              ef = t.forceRender,
              ep = t.autoDestroy,
              em = t.destroyPopupOnHide,
              ed = t.popup,
              ev = t.popupClassName,
              eh = t.popupStyle,
              eg = t.popupPlacement,
              ey = t.builtinPlacements,
              eb = void 0 === ey ? {} : ey,
              ew = t.popupAlign,
              ex = t.zIndex,
              ek = t.stretch,
              eZ = t.getPopupClassNameFromAlign,
              eE = t.fresh,
              eC = t.alignPoint,
              eM = t.onPopupClick,
              eP = t.onPopupAlign,
              eA = t.arrow,
              eN = t.popupMotion,
              eR = t.maskMotion,
              eL = t.popupTransitionName,
              eS = t.popupAnimation,
              ez = t.maskTransitionName,
              eD = t.maskAnimation,
              eH = t.className,
              eT = t.getTriggerDOMNode,
              eY = (0, i.Z)(t, V),
              eX = h.useState(!1),
              eB = (0, r.Z)(eX, 2),
              eV = eB[0],
              eW = eB[1];
            (0, d.Z)(function () {
              eW((0, v.Z)());
            }, []);
            var eO = h.useRef({}),
              eF = h.useContext(C),
              eI = h.useMemo(
                function () {
                  return {
                    registerSubPopup: function (e, t) {
                      (eO.current[e] = t), null == eF || eF.registerSubPopup(e, t);
                    },
                  };
                },
                [eF],
              ),
              ej = (0, m.Z)(),
              e_ = h.useState(null),
              eq = (0, r.Z)(e_, 2),
              eJ = eq[0],
              eQ = eq[1],
              e$ = h.useRef(null),
              eG = (0, p.Z)(function (e) {
                (e$.current = e), (0, c.S)(e) && eJ !== e && eQ(e), null == eF || eF.registerSubPopup(ej, e);
              }),
              eK = h.useState(null),
              eU = (0, r.Z)(eK, 2),
              e0 = eU[0],
              e1 = eU[1],
              e2 = h.useRef(null),
              e5 = (0, p.Z)(function (e) {
                (0, c.S)(e) && e0 !== e && (e1(e), (e2.current = e));
              }),
              e3 = h.Children.only(Q),
              e8 = (null == e3 ? void 0 : e3.props) || {},
              e7 = {},
              e4 = (0, p.Z)(function (e) {
                var t, n;
                return (
                  (null == e0 ? void 0 : e0.contains(e)) ||
                  (null === (t = (0, f.A)(e0)) || void 0 === t ? void 0 : t.host) === e ||
                  e === e0 ||
                  (null == eJ ? void 0 : eJ.contains(e)) ||
                  (null === (n = (0, f.A)(eJ)) || void 0 === n ? void 0 : n.host) === e ||
                  e === eJ ||
                  Object.values(eO.current).some(function (t) {
                    return (null == t ? void 0 : t.contains(e)) || e === t;
                  })
                );
              }),
              e6 = A(J, eN, eS, eL),
              e9 = A(J, eR, eD, ez),
              te = h.useState(ee || !1),
              tt = (0, r.Z)(te, 2),
              tn = tt[0],
              to = tt[1],
              tr = null != U ? U : tn,
              ti = (0, p.Z)(function (e) {
                void 0 === U && to(e);
              });
            (0, d.Z)(
              function () {
                to(U || !1);
              },
              [U],
            );
            var ta = h.useRef(tr);
            ta.current = tr;
            var tl = h.useRef([]);
            tl.current = [];
            var tu = (0, p.Z)(function (e) {
                var t;
                ti(e),
                  (null !== (t = tl.current[tl.current.length - 1]) && void 0 !== t ? t : tr) !== e &&
                    (tl.current.push(e), null == et || et(e));
              }),
              ts = h.useRef(),
              tc = function () {
                clearTimeout(ts.current);
              },
              tf = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                tc(),
                  0 === t
                    ? tu(e)
                    : (ts.current = setTimeout(function () {
                        tu(e);
                      }, 1e3 * t));
              };
            h.useEffect(function () {
              return tc;
            }, []);
            var tp = h.useState(!1),
              tm = (0, r.Z)(tp, 2),
              td = tm[0],
              tv = tm[1];
            (0, d.Z)(
              function (e) {
                (!e || tr) && tv(!0);
              },
              [tr],
            );
            var th = h.useState(null),
              tg = (0, r.Z)(th, 2),
              ty = tg[0],
              tb = tg[1],
              tw = h.useState([0, 0]),
              tx = (0, r.Z)(tw, 2),
              tk = tx[0],
              tZ = tx[1],
              tE = function (e) {
                tZ([e.clientX, e.clientY]);
              },
              tC =
                ((a = eC ? tk : e0),
                (l = h.useState({
                  ready: !1,
                  offsetX: 0,
                  offsetY: 0,
                  offsetR: 0,
                  offsetB: 0,
                  arrowX: 0,
                  arrowY: 0,
                  scaleX: 1,
                  scaleY: 1,
                  align: eb[eg] || {},
                })),
                (y = (g = (0, r.Z)(l, 2))[0]),
                (b = g[1]),
                (w = h.useRef(0)),
                (x = h.useMemo(
                  function () {
                    return eJ ? R(eJ) : [];
                  },
                  [eJ],
                )),
                (k = h.useRef({})),
                tr || (k.current = {}),
                (S = (0, p.Z)(function () {
                  if (eJ && a && tr) {
                    var e,
                      t,
                      n,
                      i,
                      l,
                      u,
                      s,
                      f = eJ.ownerDocument,
                      p = N(eJ).getComputedStyle(eJ),
                      m = p.width,
                      d = p.height,
                      v = p.position,
                      h = eJ.style.left,
                      g = eJ.style.top,
                      y = eJ.style.right,
                      w = eJ.style.bottom,
                      Z = eJ.style.overflow,
                      E = (0, o.Z)((0, o.Z)({}, eb[eg]), ew),
                      C = f.createElement('div');
                    if (
                      (null === (e = eJ.parentElement) || void 0 === e || e.appendChild(C),
                      (C.style.left = ''.concat(eJ.offsetLeft, 'px')),
                      (C.style.top = ''.concat(eJ.offsetTop, 'px')),
                      (C.style.position = v),
                      (C.style.height = ''.concat(eJ.offsetHeight, 'px')),
                      (C.style.width = ''.concat(eJ.offsetWidth, 'px')),
                      (eJ.style.left = '0'),
                      (eJ.style.top = '0'),
                      (eJ.style.right = 'auto'),
                      (eJ.style.bottom = 'auto'),
                      (eJ.style.overflow = 'hidden'),
                      Array.isArray(a))
                    )
                      n = { x: a[0], y: a[1], width: 0, height: 0 };
                    else {
                      var M = a.getBoundingClientRect();
                      n = { x: M.x, y: M.y, width: M.width, height: M.height };
                    }
                    var A = eJ.getBoundingClientRect(),
                      R = f.documentElement,
                      S = R.clientWidth,
                      D = R.clientHeight,
                      B = R.scrollWidth,
                      V = R.scrollHeight,
                      W = R.scrollTop,
                      O = R.scrollLeft,
                      F = A.height,
                      I = A.width,
                      j = n.height,
                      _ = n.width,
                      q = E.htmlRegion,
                      J = 'visible',
                      Q = 'visibleFirst';
                    'scroll' !== q && q !== Q && (q = J);
                    var $ = q === Q,
                      G = z({ left: -O, top: -W, right: B - O, bottom: V - W }, x),
                      K = z({ left: 0, top: 0, right: S, bottom: D }, x),
                      U = q === J ? K : G,
                      ee = $ ? K : U;
                    (eJ.style.left = 'auto'), (eJ.style.top = 'auto'), (eJ.style.right = '0'), (eJ.style.bottom = '0');
                    var et = eJ.getBoundingClientRect();
                    (eJ.style.left = h),
                      (eJ.style.top = g),
                      (eJ.style.right = y),
                      (eJ.style.bottom = w),
                      (eJ.style.overflow = Z),
                      null === (t = eJ.parentElement) || void 0 === t || t.removeChild(C);
                    var en = L(Math.round((I / parseFloat(m)) * 1e3) / 1e3),
                      eo = L(Math.round((F / parseFloat(d)) * 1e3) / 1e3);
                    if (!(0 === en || 0 === eo || ((0, c.S)(a) && !(0, P.Z)(a)))) {
                      var er = E.offset,
                        ei = E.targetOffset,
                        ea = H(A, er),
                        el = (0, r.Z)(ea, 2),
                        eu = el[0],
                        es = el[1],
                        ec = H(n, ei),
                        ef = (0, r.Z)(ec, 2),
                        ep = ef[0],
                        em = ef[1];
                      (n.x -= ep), (n.y -= em);
                      var ed = E.points || [],
                        ev = (0, r.Z)(ed, 2),
                        eh = ev[0],
                        ey = T(ev[1]),
                        ex = T(eh),
                        ek = Y(n, ey),
                        eZ = Y(A, ex),
                        eE = (0, o.Z)({}, E),
                        eC = ek.x - eZ.x + eu,
                        eM = ek.y - eZ.y + es,
                        eA = tt(eC, eM),
                        eN = tt(eC, eM, K),
                        eR = Y(n, ['t', 'l']),
                        eL = Y(A, ['t', 'l']),
                        eS = Y(n, ['b', 'r']),
                        ez = Y(A, ['b', 'r']),
                        eD = E.overflow || {},
                        eH = eD.adjustX,
                        eT = eD.adjustY,
                        eY = eD.shiftX,
                        eX = eD.shiftY,
                        eB = function (e) {
                          return 'boolean' == typeof e ? e : e >= 0;
                        };
                      tn();
                      var eV = eB(eT),
                        eW = ex[0] === ey[0];
                      if (eV && 't' === ex[0] && (l > ee.bottom || k.current.bt)) {
                        var eO = eM;
                        eW ? (eO -= F - j) : (eO = eR.y - ez.y - es);
                        var eF = tt(eC, eO),
                          eI = tt(eC, eO, K);
                        eF > eA || (eF === eA && (!$ || eI >= eN))
                          ? ((k.current.bt = !0), (eM = eO), (es = -es), (eE.points = [X(ex, 0), X(ey, 0)]))
                          : (k.current.bt = !1);
                      }
                      if (eV && 'b' === ex[0] && (i < ee.top || k.current.tb)) {
                        var ej = eM;
                        eW ? (ej += F - j) : (ej = eS.y - eL.y - es);
                        var e_ = tt(eC, ej),
                          eq = tt(eC, ej, K);
                        e_ > eA || (e_ === eA && (!$ || eq >= eN))
                          ? ((k.current.tb = !0), (eM = ej), (es = -es), (eE.points = [X(ex, 0), X(ey, 0)]))
                          : (k.current.tb = !1);
                      }
                      var eQ = eB(eH),
                        e$ = ex[1] === ey[1];
                      if (eQ && 'l' === ex[1] && (s > ee.right || k.current.rl)) {
                        var eG = eC;
                        e$ ? (eG -= I - _) : (eG = eR.x - ez.x - eu);
                        var eK = tt(eG, eM),
                          eU = tt(eG, eM, K);
                        eK > eA || (eK === eA && (!$ || eU >= eN))
                          ? ((k.current.rl = !0), (eC = eG), (eu = -eu), (eE.points = [X(ex, 1), X(ey, 1)]))
                          : (k.current.rl = !1);
                      }
                      if (eQ && 'r' === ex[1] && (u < ee.left || k.current.lr)) {
                        var e0 = eC;
                        e$ ? (e0 += I - _) : (e0 = eS.x - eL.x - eu);
                        var e1 = tt(e0, eM),
                          e2 = tt(e0, eM, K);
                        e1 > eA || (e1 === eA && (!$ || e2 >= eN))
                          ? ((k.current.lr = !0), (eC = e0), (eu = -eu), (eE.points = [X(ex, 1), X(ey, 1)]))
                          : (k.current.lr = !1);
                      }
                      tn();
                      var e5 = !0 === eY ? 0 : eY;
                      'number' == typeof e5 &&
                        (u < K.left &&
                          ((eC -= u - K.left - eu), n.x + _ < K.left + e5 && (eC += n.x - K.left + _ - e5)),
                        s > K.right && ((eC -= s - K.right - eu), n.x > K.right - e5 && (eC += n.x - K.right + e5)));
                      var e3 = !0 === eX ? 0 : eX;
                      'number' == typeof e3 &&
                        (i < K.top && ((eM -= i - K.top - es), n.y + j < K.top + e3 && (eM += n.y - K.top + j - e3)),
                        l > K.bottom &&
                          ((eM -= l - K.bottom - es), n.y > K.bottom - e3 && (eM += n.y - K.bottom + e3)));
                      var e8 = A.x + eC,
                        e7 = A.y + eM,
                        e4 = n.x,
                        e6 = n.y;
                      null == eP || eP(eJ, eE);
                      var e9 = et.right - A.x - (eC + A.width),
                        te = et.bottom - A.y - (eM + A.height);
                      b({
                        ready: !0,
                        offsetX: eC / en,
                        offsetY: eM / eo,
                        offsetR: e9 / en,
                        offsetB: te / eo,
                        arrowX: ((Math.max(e8, e4) + Math.min(e8 + I, e4 + _)) / 2 - e8) / en,
                        arrowY: ((Math.max(e7, e6) + Math.min(e7 + F, e6 + j)) / 2 - e7) / eo,
                        scaleX: en,
                        scaleY: eo,
                        align: eE,
                      });
                    }
                    function tt(e, t) {
                      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : U,
                        o = A.x + e,
                        r = A.y + t,
                        i = Math.max(o, n.left),
                        a = Math.max(r, n.top);
                      return Math.max(0, (Math.min(o + I, n.right) - i) * (Math.min(r + F, n.bottom) - a));
                    }
                    function tn() {
                      (l = (i = A.y + eM) + F), (s = (u = A.x + eC) + I);
                    }
                  }
                })),
                (D = function () {
                  b(function (e) {
                    return (0, o.Z)((0, o.Z)({}, e), {}, { ready: !1 });
                  });
                }),
                (0, d.Z)(D, [eg]),
                (0, d.Z)(
                  function () {
                    tr || D();
                  },
                  [tr],
                ),
                [
                  y.ready,
                  y.offsetX,
                  y.offsetY,
                  y.offsetR,
                  y.offsetB,
                  y.arrowX,
                  y.arrowY,
                  y.scaleX,
                  y.scaleY,
                  y.align,
                  function () {
                    w.current += 1;
                    var e = w.current;
                    Promise.resolve().then(function () {
                      w.current === e && S();
                    });
                  },
                ]),
              tM = (0, r.Z)(tC, 11),
              tP = tM[0],
              tA = tM[1],
              tN = tM[2],
              tR = tM[3],
              tL = tM[4],
              tS = tM[5],
              tz = tM[6],
              tD = tM[7],
              tH = tM[8],
              tT = tM[9],
              tY = tM[10],
              tX =
                ((W = void 0 === $ ? 'hover' : $),
                h.useMemo(
                  function () {
                    var e = M(null != G ? G : W),
                      t = M(null != K ? K : W),
                      n = new Set(e),
                      o = new Set(t);
                    return (
                      eV &&
                        (n.has('hover') && (n.delete('hover'), n.add('click')),
                        o.has('hover') && (o.delete('hover'), o.add('click'))),
                      [n, o]
                    );
                  },
                  [eV, W, G, K],
                )),
              tB = (0, r.Z)(tX, 2),
              tV = tB[0],
              tW = tB[1],
              tO = tV.has('click'),
              tF = tW.has('click') || tW.has('contextMenu'),
              tI = (0, p.Z)(function () {
                td || tY();
              });
            (O = function () {
              ta.current && eC && tF && tf(!1);
            }),
              (0, d.Z)(
                function () {
                  if (tr && e0 && eJ) {
                    var e = R(e0),
                      t = R(eJ),
                      n = N(eJ),
                      o = new Set([n].concat((0, B.Z)(e), (0, B.Z)(t)));
                    function r() {
                      tI(), O();
                    }
                    return (
                      o.forEach(function (e) {
                        e.addEventListener('scroll', r, { passive: !0 });
                      }),
                      n.addEventListener('resize', r, { passive: !0 }),
                      tI(),
                      function () {
                        o.forEach(function (e) {
                          e.removeEventListener('scroll', r), n.removeEventListener('resize', r);
                        });
                      }
                    );
                  }
                },
                [tr, e0, eJ],
              ),
              (0, d.Z)(
                function () {
                  tI();
                },
                [tk, eg],
              ),
              (0, d.Z)(
                function () {
                  tr && !(null != eb && eb[eg]) && tI();
                },
                [JSON.stringify(ew)],
              );
            var tj = h.useMemo(
              function () {
                var e = (function (e, t, n, o) {
                  for (var r = n.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
                    var l,
                      u = i[a];
                    if (
                      (function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                          n = arguments.length > 2 ? arguments[2] : void 0;
                        return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
                      })(null === (l = e[u]) || void 0 === l ? void 0 : l.points, r, o)
                    )
                      return ''.concat(t, '-placement-').concat(u);
                  }
                  return '';
                })(eb, J, tT, eC);
                return u()(e, null == eZ ? void 0 : eZ(tT));
              },
              [tT, eZ, eb, J, eC],
            );
            h.useImperativeHandle(n, function () {
              return { nativeElement: e2.current, popupElement: e$.current, forceAlign: tI };
            });
            var t_ = h.useState(0),
              tq = (0, r.Z)(t_, 2),
              tJ = tq[0],
              tQ = tq[1],
              t$ = h.useState(0),
              tG = (0, r.Z)(t$, 2),
              tK = tG[0],
              tU = tG[1],
              t0 = function () {
                if (ek && e0) {
                  var e = e0.getBoundingClientRect();
                  tQ(e.width), tU(e.height);
                }
              };
            function t1(e, t, n, o) {
              e7[e] = function (r) {
                var i;
                null == o || o(r), tf(t, n);
                for (var a = arguments.length, l = Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++) l[u - 1] = arguments[u];
                null === (i = e8[e]) || void 0 === i || i.call.apply(i, [e8, r].concat(l));
              };
            }
            (0, d.Z)(
              function () {
                ty && (tY(), ty(), tb(null));
              },
              [ty],
            ),
              (tO || tF) &&
                (e7.onClick = function (e) {
                  var t;
                  ta.current && tF ? tf(!1) : !ta.current && tO && (tE(e), tf(!0));
                  for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                    o[r - 1] = arguments[r];
                  null === (t = e8.onClick) || void 0 === t || t.call.apply(t, [e8, e].concat(o));
                }),
              (F = void 0 === es || es),
              ((I = h.useRef(tr)).current = tr),
              h.useEffect(
                function () {
                  if (tF && eJ && (!eu || F)) {
                    var e = function (e) {
                        var t = e.target;
                        I.current && !e4(t) && tf(!1);
                      },
                      t = N(eJ);
                    t.addEventListener('mousedown', e, !0), t.addEventListener('contextmenu', e, !0);
                    var n = (0, f.A)(e0);
                    return (
                      n && (n.addEventListener('mousedown', e, !0), n.addEventListener('contextmenu', e, !0)),
                      function () {
                        t.removeEventListener('mousedown', e, !0),
                          t.removeEventListener('contextmenu', e, !0),
                          n && (n.removeEventListener('mousedown', e, !0), n.removeEventListener('contextmenu', e, !0));
                      }
                    );
                  }
                },
                [tF, e0, eJ, eu, F],
              );
            var t2 = tV.has('hover'),
              t5 = tW.has('hover');
            t2 &&
              (t1('onMouseEnter', !0, eo, function (e) {
                tE(e);
              }),
              t1('onPointerEnter', !0, eo, function (e) {
                tE(e);
              }),
              (j = function (e) {
                (tr || td) && null != eJ && eJ.contains(e.target) && tf(!0, eo);
              }),
              eC &&
                (e7.onMouseMove = function (e) {
                  var t;
                  null === (t = e8.onMouseMove) || void 0 === t || t.call(e8, e);
                })),
              t5 &&
                (t1('onMouseLeave', !1, ei),
                t1('onPointerLeave', !1, ei),
                (_ = function () {
                  tf(!1, ei);
                })),
              tV.has('focus') && t1('onFocus', !0, ea),
              tW.has('focus') && t1('onBlur', !1, el),
              tV.has('contextMenu') &&
                (e7.onContextMenu = function (e) {
                  var t;
                  ta.current && tW.has('contextMenu') ? tf(!1) : (tE(e), tf(!0)), e.preventDefault();
                  for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                    o[r - 1] = arguments[r];
                  null === (t = e8.onContextMenu) || void 0 === t || t.call.apply(t, [e8, e].concat(o));
                }),
              eH && (e7.className = u()(e8.className, eH));
            var t3 = (0, o.Z)((0, o.Z)({}, e8), e7),
              t8 = {};
            [
              'onContextMenu',
              'onClick',
              'onMouseDown',
              'onTouchStart',
              'onMouseEnter',
              'onMouseLeave',
              'onFocus',
              'onBlur',
            ].forEach(function (e) {
              eY[e] &&
                (t8[e] = function () {
                  for (var t, n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                  null === (t = t3[e]) || void 0 === t || t.call.apply(t, [t3].concat(o)), eY[e].apply(eY, o);
                });
            });
            var t7 = h.cloneElement(e3, (0, o.Z)((0, o.Z)({}, t3), t8)),
              t4 = eA ? (0, o.Z)({}, !0 !== eA ? eA : {}) : null;
            return h.createElement(
              h.Fragment,
              null,
              h.createElement(
                s.Z,
                {
                  disabled: !tr,
                  ref: e5,
                  onResize: function () {
                    t0(), tI();
                  },
                },
                h.createElement(E, { getTriggerDOMNode: eT }, t7),
              ),
              h.createElement(
                C.Provider,
                { value: eI },
                h.createElement(Z, {
                  portal: e,
                  ref: eG,
                  prefixCls: J,
                  popup: ed,
                  className: u()(ev, tj),
                  style: eh,
                  target: e0,
                  onMouseEnter: j,
                  onMouseLeave: _,
                  onPointerEnter: j,
                  zIndex: ex,
                  open: tr,
                  keepDom: td,
                  fresh: eE,
                  onClick: eM,
                  mask: eu,
                  motion: e6,
                  maskMotion: e9,
                  onVisibleChanged: function (e) {
                    tv(!1), tY(), null == en || en(e);
                  },
                  onPrepare: function () {
                    return new Promise(function (e) {
                      t0(),
                        tb(function () {
                          return e;
                        });
                    });
                  },
                  forceRender: ef,
                  autoDestroy: ep || em || !1,
                  getPopupContainer: ec,
                  align: tT,
                  arrow: t4,
                  arrowPos: { x: tS, y: tz },
                  ready: tP,
                  offsetX: tA,
                  offsetY: tN,
                  offsetR: tR,
                  offsetB: tL,
                  onAlign: tI,
                  stretch: ek,
                  targetWidth: tJ / tD,
                  targetHeight: tK / tH,
                }),
              ),
            );
          });
        })(a.Z);
    },
    77971: function (e, t) {
      t.Z = function () {
        if ('undefined' == typeof navigator || 'undefined' == typeof window) return !1;
        var e = navigator.userAgent || navigator.vendor || window.opera;
        return (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            e,
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
            null == e ? void 0 : e.substr(0, 4),
          )
        );
      };
    },
  },
]);
