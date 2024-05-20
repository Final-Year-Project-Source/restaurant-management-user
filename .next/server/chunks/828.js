'use strict';
(exports.id = 828),
  (exports.ids = [828]),
  (exports.modules = {
    76724: (e, t, n) => {
      n.d(t, { Z: () => z });
      var o = n(65830),
        r = n(93727),
        i = n(12403),
        a = n(99460),
        l = n(34132),
        u = n.n(l),
        s = n(70242),
        c = n(67062),
        f = n(20304),
        p = n(67827),
        v = n(66571),
        d = n(17981),
        m = n(12472),
        h = n(3729),
        g = n(65651),
        y = n(87884),
        b = n(67862);
      function x(e) {
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
          var v = n.points[0],
            d = n.points[1],
            m = v[0],
            g = v[1],
            y = d[0],
            b = d[1];
          m !== y && ['t', 'b'].includes(m)
            ? 't' === m
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
      function Z(e) {
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
      var w = h.memo(
          function (e) {
            return e.children;
          },
          function (e, t) {
            return t.cache;
          },
        ),
        E = h.forwardRef(function (e, t) {
          var n = e.popup,
            i = e.className,
            a = e.prefixCls,
            l = e.style,
            c = e.target,
            f = e.onVisibleChanged,
            p = e.open,
            v = e.keepDom,
            m = e.fresh,
            E = e.onClick,
            M = e.mask,
            C = e.arrow,
            P = e.arrowPos,
            k = e.align,
            N = e.motion,
            R = e.maskMotion,
            S = e.forceRender,
            A = e.getPopupContainer,
            L = e.autoDestroy,
            D = e.portal,
            H = e.zIndex,
            O = e.onMouseEnter,
            T = e.onMouseLeave,
            Y = e.onPointerEnter,
            $ = e.ready,
            X = e.offsetX,
            B = e.offsetY,
            z = e.offsetR,
            F = e.offsetB,
            V = e.onAlign,
            W = e.onPrepare,
            I = e.stretch,
            j = e.targetWidth,
            _ = e.targetHeight,
            q = 'function' == typeof n ? n() : n,
            J = p || v,
            Q = (null == A ? void 0 : A.length) > 0,
            G = h.useState(!A || !Q),
            K = (0, r.Z)(G, 2),
            U = K[0],
            ee = K[1];
          if (
            ((0, d.Z)(
              function () {
                !U && Q && c && ee(!0);
              },
              [U, Q, c],
            ),
            !U)
          )
            return null;
          var et = 'auto',
            en = { left: '-1000vw', top: '-1000vh', right: et, bottom: et };
          if ($ || !p) {
            var eo,
              er = k.points,
              ei = k.dynamicInset || (null === (eo = k._experimental) || void 0 === eo ? void 0 : eo.dynamicInset),
              ea = ei && 'r' === er[0][1],
              el = ei && 'b' === er[0][0];
            ea ? ((en.right = z), (en.left = et)) : ((en.left = X), (en.right = et)),
              el ? ((en.bottom = F), (en.top = et)) : ((en.top = B), (en.bottom = et));
          }
          var eu = {};
          return (
            I &&
              (I.includes('height') && _ ? (eu.height = _) : I.includes('minHeight') && _ && (eu.minHeight = _),
              I.includes('width') && j ? (eu.width = j) : I.includes('minWidth') && j && (eu.minWidth = j)),
            p || (eu.pointerEvents = 'none'),
            h.createElement(
              D,
              {
                open: S || J,
                getContainer:
                  A &&
                  function () {
                    return A(c);
                  },
                autoDestroy: L,
              },
              h.createElement(Z, { prefixCls: a, open: p, zIndex: H, mask: M, motion: R }),
              h.createElement(s.Z, { onResize: V, disabled: !p }, function (e) {
                return h.createElement(
                  y.ZP,
                  (0, g.Z)(
                    {
                      motionAppear: !0,
                      motionEnter: !0,
                      motionLeave: !0,
                      removeOnLeave: !1,
                      forceRender: S,
                      leavedClassName: ''.concat(a, '-hidden'),
                    },
                    N,
                    {
                      onAppearPrepare: W,
                      onEnterPrepare: W,
                      visible: p,
                      onVisibleChanged: function (e) {
                        var t;
                        null == N || null === (t = N.onVisibleChanged) || void 0 === t || t.call(N, e), f(e);
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
                                { '--arrow-x': ''.concat(P.x || 0, 'px'), '--arrow-y': ''.concat(P.y || 0, 'px') },
                                en,
                              ),
                              eu,
                            ),
                            c,
                          ),
                          {},
                          { boxSizing: 'border-box', zIndex: H },
                          l,
                        ),
                        onMouseEnter: O,
                        onMouseLeave: T,
                        onPointerEnter: Y,
                        onClick: E,
                      },
                      C && h.createElement(x, { prefixCls: a, arrow: C, arrowPos: P, align: k }),
                      h.createElement(w, { cache: !p && !m }, q),
                    );
                  },
                );
              }),
            )
          );
        }),
        M = h.forwardRef(function (e, t) {
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
      function P(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      var k = n(39193);
      function N(e, t, n, o) {
        return t || (n ? { motionName: ''.concat(e, '-').concat(n) } : o ? { motionName: o } : null);
      }
      function R(e) {
        return e.ownerDocument.defaultView;
      }
      function S(e) {
        for (var t = [], n = null == e ? void 0 : e.parentElement, o = ['hidden', 'scroll', 'clip', 'auto']; n; ) {
          var r = R(n).getComputedStyle(n);
          [r.overflowX, r.overflowY, r.overflow].some(function (e) {
            return o.includes(e);
          }) && t.push(n),
            (n = n.parentElement);
        }
        return t;
      }
      function A(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return Number.isNaN(e) ? t : e;
      }
      function L(e) {
        return A(parseFloat(e), 0);
      }
      function D(e, t) {
        var n = (0, o.Z)({}, e);
        return (
          (t || []).forEach(function (e) {
            if (!(e instanceof HTMLBodyElement || e instanceof HTMLHtmlElement)) {
              var t = R(e).getComputedStyle(e),
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
                v = e.clientWidth,
                d = L(i),
                m = L(a),
                h = L(l),
                g = L(u),
                y = A(Math.round((s.width / p) * 1e3) / 1e3),
                b = A(Math.round((s.height / c) * 1e3) / 1e3),
                x = d * b,
                Z = h * y,
                w = 0,
                E = 0;
              if ('clip' === o) {
                var M = L(r);
                (w = M * y), (E = M * b);
              }
              var C = s.x + Z - w,
                P = s.y + x - E,
                k = C + s.width + 2 * w - Z - g * y - (p - v - h - g) * y,
                N = P + s.height + 2 * E - x - m * b - (c - f - d - m) * b;
              (n.left = Math.max(n.left, C)),
                (n.top = Math.max(n.top, P)),
                (n.right = Math.min(n.right, k)),
                (n.bottom = Math.min(n.bottom, N));
            }
          }),
          n
        );
      }
      function H(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = ''.concat(t),
          o = n.match(/^(.*)\%$/);
        return o ? (parseFloat(o[1]) / 100) * e : parseFloat(n);
      }
      function O(e, t) {
        var n = (0, r.Z)(t || [], 2),
          o = n[0],
          i = n[1];
        return [H(e.width, o), H(e.height, i)];
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
      function $(e, t) {
        var n = { t: 'b', b: 't', l: 'r', r: 'l' };
        return e
          .map(function (e, o) {
            return o === t ? n[e] || 'c' : e;
          })
          .join('');
      }
      var X = n(72375);
      n(41255);
      var B = [
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
      ];
      let z = (function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.Z;
        return h.forwardRef(function (t, n) {
          var a,
            l,
            g,
            y,
            b,
            x,
            Z,
            w,
            L,
            H,
            z,
            F,
            V,
            W,
            I,
            j,
            _ = t.prefixCls,
            q = void 0 === _ ? 'rc-trigger-popup' : _,
            J = t.children,
            Q = t.action,
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
            ev = t.destroyPopupOnHide,
            ed = t.popup,
            em = t.popupClassName,
            eh = t.popupStyle,
            eg = t.popupPlacement,
            ey = t.builtinPlacements,
            eb = void 0 === ey ? {} : ey,
            ex = t.popupAlign,
            eZ = t.zIndex,
            ew = t.stretch,
            eE = t.getPopupClassNameFromAlign,
            eM = t.fresh,
            eC = t.alignPoint,
            eP = t.onPopupClick,
            ek = t.onPopupAlign,
            eN = t.arrow,
            eR = t.popupMotion,
            eS = t.maskMotion,
            eA = t.popupTransitionName,
            eL = t.popupAnimation,
            eD = t.maskTransitionName,
            eH = t.maskAnimation,
            eO = t.className,
            eT = t.getTriggerDOMNode,
            eY = (0, i.Z)(t, B),
            e$ = h.useState(!1),
            eX = (0, r.Z)(e$, 2),
            eB = eX[0],
            ez = eX[1];
          (0, d.Z)(function () {
            ez((0, m.Z)());
          }, []);
          var eF = h.useRef({}),
            eV = h.useContext(C),
            eW = h.useMemo(
              function () {
                return {
                  registerSubPopup: function (e, t) {
                    (eF.current[e] = t), null == eV || eV.registerSubPopup(e, t);
                  },
                };
              },
              [eV],
            ),
            eI = (0, v.Z)(),
            ej = h.useState(null),
            e_ = (0, r.Z)(ej, 2),
            eq = e_[0],
            eJ = e_[1],
            eQ = h.useRef(null),
            eG = (0, p.Z)(function (e) {
              (eQ.current = e), (0, c.S)(e) && eq !== e && eJ(e), null == eV || eV.registerSubPopup(eI, e);
            }),
            eK = h.useState(null),
            eU = (0, r.Z)(eK, 2),
            e0 = eU[0],
            e1 = eU[1],
            e2 = h.useRef(null),
            e3 = (0, p.Z)(function (e) {
              (0, c.S)(e) && e0 !== e && (e1(e), (e2.current = e));
            }),
            e7 = h.Children.only(J),
            e6 = (null == e7 ? void 0 : e7.props) || {},
            e4 = {},
            e8 = (0, p.Z)(function (e) {
              var t, n;
              return (
                (null == e0 ? void 0 : e0.contains(e)) ||
                (null === (t = (0, f.A)(e0)) || void 0 === t ? void 0 : t.host) === e ||
                e === e0 ||
                (null == eq ? void 0 : eq.contains(e)) ||
                (null === (n = (0, f.A)(eq)) || void 0 === n ? void 0 : n.host) === e ||
                e === eq ||
                Object.values(eF.current).some(function (t) {
                  return (null == t ? void 0 : t.contains(e)) || e === t;
                })
              );
            }),
            e5 = N(q, eR, eL, eA),
            e9 = N(q, eS, eH, eD),
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
            tv = (0, r.Z)(tp, 2),
            td = tv[0],
            tm = tv[1];
          (0, d.Z)(
            function (e) {
              (!e || tr) && tm(!0);
            },
            [tr],
          );
          var th = h.useState(null),
            tg = (0, r.Z)(th, 2),
            ty = tg[0],
            tb = tg[1],
            tx = h.useState([0, 0]),
            tZ = (0, r.Z)(tx, 2),
            tw = tZ[0],
            tE = tZ[1],
            tM = function (e) {
              tE([e.clientX, e.clientY]);
            },
            tC =
              ((a = eC ? tw : e0),
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
              (x = h.useRef(0)),
              (Z = h.useMemo(
                function () {
                  return eq ? S(eq) : [];
                },
                [eq],
              )),
              (w = h.useRef({})),
              tr || (w.current = {}),
              (L = (0, p.Z)(function () {
                if (eq && a && tr) {
                  var e,
                    t,
                    n,
                    i,
                    l,
                    u,
                    s,
                    f = eq.ownerDocument,
                    p = R(eq).getComputedStyle(eq),
                    v = p.width,
                    d = p.height,
                    m = p.position,
                    h = eq.style.left,
                    g = eq.style.top,
                    y = eq.style.right,
                    x = eq.style.bottom,
                    E = eq.style.overflow,
                    M = (0, o.Z)((0, o.Z)({}, eb[eg]), ex),
                    C = f.createElement('div');
                  if (
                    (null === (e = eq.parentElement) || void 0 === e || e.appendChild(C),
                    (C.style.left = ''.concat(eq.offsetLeft, 'px')),
                    (C.style.top = ''.concat(eq.offsetTop, 'px')),
                    (C.style.position = m),
                    (C.style.height = ''.concat(eq.offsetHeight, 'px')),
                    (C.style.width = ''.concat(eq.offsetWidth, 'px')),
                    (eq.style.left = '0'),
                    (eq.style.top = '0'),
                    (eq.style.right = 'auto'),
                    (eq.style.bottom = 'auto'),
                    (eq.style.overflow = 'hidden'),
                    Array.isArray(a))
                  )
                    n = { x: a[0], y: a[1], width: 0, height: 0 };
                  else {
                    var P = a.getBoundingClientRect();
                    n = { x: P.x, y: P.y, width: P.width, height: P.height };
                  }
                  var N = eq.getBoundingClientRect(),
                    S = f.documentElement,
                    L = S.clientWidth,
                    H = S.clientHeight,
                    X = S.scrollWidth,
                    B = S.scrollHeight,
                    z = S.scrollTop,
                    F = S.scrollLeft,
                    V = N.height,
                    W = N.width,
                    I = n.height,
                    j = n.width,
                    _ = M.htmlRegion,
                    q = 'visible',
                    J = 'visibleFirst';
                  'scroll' !== _ && _ !== J && (_ = q);
                  var Q = _ === J,
                    G = D({ left: -F, top: -z, right: X - F, bottom: B - z }, Z),
                    K = D({ left: 0, top: 0, right: L, bottom: H }, Z),
                    U = _ === q ? K : G,
                    ee = Q ? K : U;
                  (eq.style.left = 'auto'), (eq.style.top = 'auto'), (eq.style.right = '0'), (eq.style.bottom = '0');
                  var et = eq.getBoundingClientRect();
                  (eq.style.left = h),
                    (eq.style.top = g),
                    (eq.style.right = y),
                    (eq.style.bottom = x),
                    (eq.style.overflow = E),
                    null === (t = eq.parentElement) || void 0 === t || t.removeChild(C);
                  var en = A(Math.round((W / parseFloat(v)) * 1e3) / 1e3),
                    eo = A(Math.round((V / parseFloat(d)) * 1e3) / 1e3);
                  if (!(0 === en || 0 === eo || ((0, c.S)(a) && !(0, k.Z)(a)))) {
                    var er = M.offset,
                      ei = M.targetOffset,
                      ea = O(N, er),
                      el = (0, r.Z)(ea, 2),
                      eu = el[0],
                      es = el[1],
                      ec = O(n, ei),
                      ef = (0, r.Z)(ec, 2),
                      ep = ef[0],
                      ev = ef[1];
                    (n.x -= ep), (n.y -= ev);
                    var ed = M.points || [],
                      em = (0, r.Z)(ed, 2),
                      eh = em[0],
                      ey = T(em[1]),
                      eZ = T(eh),
                      ew = Y(n, ey),
                      eE = Y(N, eZ),
                      eM = (0, o.Z)({}, M),
                      eC = ew.x - eE.x + eu,
                      eP = ew.y - eE.y + es,
                      eN = tt(eC, eP),
                      eR = tt(eC, eP, K),
                      eS = Y(n, ['t', 'l']),
                      eA = Y(N, ['t', 'l']),
                      eL = Y(n, ['b', 'r']),
                      eD = Y(N, ['b', 'r']),
                      eH = M.overflow || {},
                      eO = eH.adjustX,
                      eT = eH.adjustY,
                      eY = eH.shiftX,
                      e$ = eH.shiftY,
                      eX = function (e) {
                        return 'boolean' == typeof e ? e : e >= 0;
                      };
                    tn();
                    var eB = eX(eT),
                      ez = eZ[0] === ey[0];
                    if (eB && 't' === eZ[0] && (l > ee.bottom || w.current.bt)) {
                      var eF = eP;
                      ez ? (eF -= V - I) : (eF = eS.y - eD.y - es);
                      var eV = tt(eC, eF),
                        eW = tt(eC, eF, K);
                      eV > eN || (eV === eN && (!Q || eW >= eR))
                        ? ((w.current.bt = !0), (eP = eF), (es = -es), (eM.points = [$(eZ, 0), $(ey, 0)]))
                        : (w.current.bt = !1);
                    }
                    if (eB && 'b' === eZ[0] && (i < ee.top || w.current.tb)) {
                      var eI = eP;
                      ez ? (eI += V - I) : (eI = eL.y - eA.y - es);
                      var ej = tt(eC, eI),
                        e_ = tt(eC, eI, K);
                      ej > eN || (ej === eN && (!Q || e_ >= eR))
                        ? ((w.current.tb = !0), (eP = eI), (es = -es), (eM.points = [$(eZ, 0), $(ey, 0)]))
                        : (w.current.tb = !1);
                    }
                    var eJ = eX(eO),
                      eQ = eZ[1] === ey[1];
                    if (eJ && 'l' === eZ[1] && (s > ee.right || w.current.rl)) {
                      var eG = eC;
                      eQ ? (eG -= W - j) : (eG = eS.x - eD.x - eu);
                      var eK = tt(eG, eP),
                        eU = tt(eG, eP, K);
                      eK > eN || (eK === eN && (!Q || eU >= eR))
                        ? ((w.current.rl = !0), (eC = eG), (eu = -eu), (eM.points = [$(eZ, 1), $(ey, 1)]))
                        : (w.current.rl = !1);
                    }
                    if (eJ && 'r' === eZ[1] && (u < ee.left || w.current.lr)) {
                      var e0 = eC;
                      eQ ? (e0 += W - j) : (e0 = eL.x - eA.x - eu);
                      var e1 = tt(e0, eP),
                        e2 = tt(e0, eP, K);
                      e1 > eN || (e1 === eN && (!Q || e2 >= eR))
                        ? ((w.current.lr = !0), (eC = e0), (eu = -eu), (eM.points = [$(eZ, 1), $(ey, 1)]))
                        : (w.current.lr = !1);
                    }
                    tn();
                    var e3 = !0 === eY ? 0 : eY;
                    'number' == typeof e3 &&
                      (u < K.left && ((eC -= u - K.left - eu), n.x + j < K.left + e3 && (eC += n.x - K.left + j - e3)),
                      s > K.right && ((eC -= s - K.right - eu), n.x > K.right - e3 && (eC += n.x - K.right + e3)));
                    var e7 = !0 === e$ ? 0 : e$;
                    'number' == typeof e7 &&
                      (i < K.top && ((eP -= i - K.top - es), n.y + I < K.top + e7 && (eP += n.y - K.top + I - e7)),
                      l > K.bottom && ((eP -= l - K.bottom - es), n.y > K.bottom - e7 && (eP += n.y - K.bottom + e7)));
                    var e6 = N.x + eC,
                      e4 = N.y + eP,
                      e8 = n.x,
                      e5 = n.y;
                    null == ek || ek(eq, eM);
                    var e9 = et.right - N.x - (eC + N.width),
                      te = et.bottom - N.y - (eP + N.height);
                    b({
                      ready: !0,
                      offsetX: eC / en,
                      offsetY: eP / eo,
                      offsetR: e9 / en,
                      offsetB: te / eo,
                      arrowX: ((Math.max(e6, e8) + Math.min(e6 + W, e8 + j)) / 2 - e6) / en,
                      arrowY: ((Math.max(e4, e5) + Math.min(e4 + V, e5 + I)) / 2 - e4) / eo,
                      scaleX: en,
                      scaleY: eo,
                      align: eM,
                    });
                  }
                  function tt(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : U,
                      o = N.x + e,
                      r = N.y + t,
                      i = Math.max(o, n.left),
                      a = Math.max(r, n.top);
                    return Math.max(0, (Math.min(o + W, n.right) - i) * (Math.min(r + V, n.bottom) - a));
                  }
                  function tn() {
                    (l = (i = N.y + eP) + V), (s = (u = N.x + eC) + W);
                  }
                }
              })),
              (H = function () {
                b(function (e) {
                  return (0, o.Z)((0, o.Z)({}, e), {}, { ready: !1 });
                });
              }),
              (0, d.Z)(H, [eg]),
              (0, d.Z)(
                function () {
                  tr || H();
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
                  x.current += 1;
                  var e = x.current;
                  Promise.resolve().then(function () {
                    x.current === e && L();
                  });
                },
              ]),
            tP = (0, r.Z)(tC, 11),
            tk = tP[0],
            tN = tP[1],
            tR = tP[2],
            tS = tP[3],
            tA = tP[4],
            tL = tP[5],
            tD = tP[6],
            tH = tP[7],
            tO = tP[8],
            tT = tP[9],
            tY = tP[10],
            t$ =
              ((z = void 0 === Q ? 'hover' : Q),
              h.useMemo(
                function () {
                  var e = P(null != G ? G : z),
                    t = P(null != K ? K : z),
                    n = new Set(e),
                    o = new Set(t);
                  return (
                    eB &&
                      (n.has('hover') && (n.delete('hover'), n.add('click')),
                      o.has('hover') && (o.delete('hover'), o.add('click'))),
                    [n, o]
                  );
                },
                [eB, z, G, K],
              )),
            tX = (0, r.Z)(t$, 2),
            tB = tX[0],
            tz = tX[1],
            tF = tB.has('click'),
            tV = tz.has('click') || tz.has('contextMenu'),
            tW = (0, p.Z)(function () {
              td || tY();
            });
          (F = function () {
            ta.current && eC && tV && tf(!1);
          }),
            (0, d.Z)(
              function () {
                if (tr && e0 && eq) {
                  var e = S(e0),
                    t = S(eq),
                    n = R(eq),
                    o = new Set([n].concat((0, X.Z)(e), (0, X.Z)(t)));
                  function r() {
                    tW(), F();
                  }
                  return (
                    o.forEach(function (e) {
                      e.addEventListener('scroll', r, { passive: !0 });
                    }),
                    n.addEventListener('resize', r, { passive: !0 }),
                    tW(),
                    function () {
                      o.forEach(function (e) {
                        e.removeEventListener('scroll', r), n.removeEventListener('resize', r);
                      });
                    }
                  );
                }
              },
              [tr, e0, eq],
            ),
            (0, d.Z)(
              function () {
                tW();
              },
              [tw, eg],
            ),
            (0, d.Z)(
              function () {
                tr && !(null != eb && eb[eg]) && tW();
              },
              [JSON.stringify(ex)],
            );
          var tI = h.useMemo(
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
              })(eb, q, tT, eC);
              return u()(e, null == eE ? void 0 : eE(tT));
            },
            [tT, eE, eb, q, eC],
          );
          h.useImperativeHandle(n, function () {
            return { nativeElement: e2.current, popupElement: eQ.current, forceAlign: tW };
          });
          var tj = h.useState(0),
            t_ = (0, r.Z)(tj, 2),
            tq = t_[0],
            tJ = t_[1],
            tQ = h.useState(0),
            tG = (0, r.Z)(tQ, 2),
            tK = tG[0],
            tU = tG[1],
            t0 = function () {
              if (ew && e0) {
                var e = e0.getBoundingClientRect();
                tJ(e.width), tU(e.height);
              }
            };
          function t1(e, t, n, o) {
            e4[e] = function (r) {
              var i;
              null == o || o(r), tf(t, n);
              for (var a = arguments.length, l = Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++) l[u - 1] = arguments[u];
              null === (i = e6[e]) || void 0 === i || i.call.apply(i, [e6, r].concat(l));
            };
          }
          (0, d.Z)(
            function () {
              ty && (tY(), ty(), tb(null));
            },
            [ty],
          ),
            (tF || tV) &&
              (e4.onClick = function (e) {
                var t;
                ta.current && tV ? tf(!1) : !ta.current && tF && (tM(e), tf(!0));
                for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                null === (t = e6.onClick) || void 0 === t || t.call.apply(t, [e6, e].concat(o));
              }),
            (V = void 0 === es || es),
            ((W = h.useRef(tr)).current = tr),
            h.useEffect(
              function () {
                if (tV && eq && (!eu || V)) {
                  var e = function (e) {
                      var t = e.target;
                      W.current && !e8(t) && tf(!1);
                    },
                    t = R(eq);
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
              [tV, e0, eq, eu, V],
            );
          var t2 = tB.has('hover'),
            t3 = tz.has('hover');
          t2 &&
            (t1('onMouseEnter', !0, eo, function (e) {
              tM(e);
            }),
            t1('onPointerEnter', !0, eo, function (e) {
              tM(e);
            }),
            (I = function (e) {
              (tr || td) && null != eq && eq.contains(e.target) && tf(!0, eo);
            }),
            eC &&
              (e4.onMouseMove = function (e) {
                var t;
                null === (t = e6.onMouseMove) || void 0 === t || t.call(e6, e);
              })),
            t3 &&
              (t1('onMouseLeave', !1, ei),
              t1('onPointerLeave', !1, ei),
              (j = function () {
                tf(!1, ei);
              })),
            tB.has('focus') && t1('onFocus', !0, ea),
            tz.has('focus') && t1('onBlur', !1, el),
            tB.has('contextMenu') &&
              (e4.onContextMenu = function (e) {
                var t;
                ta.current && tz.has('contextMenu') ? tf(!1) : (tM(e), tf(!0)), e.preventDefault();
                for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                null === (t = e6.onContextMenu) || void 0 === t || t.call.apply(t, [e6, e].concat(o));
              }),
            eO && (e4.className = u()(e6.className, eO));
          var t7 = (0, o.Z)((0, o.Z)({}, e6), e4),
            t6 = {};
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
              (t6[e] = function () {
                for (var t, n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                null === (t = t7[e]) || void 0 === t || t.call.apply(t, [t7].concat(o)), eY[e].apply(eY, o);
              });
          });
          var t4 = h.cloneElement(e7, (0, o.Z)((0, o.Z)({}, t7), t6)),
            t8 = eN ? (0, o.Z)({}, !0 !== eN ? eN : {}) : null;
          return h.createElement(
            h.Fragment,
            null,
            h.createElement(
              s.Z,
              {
                disabled: !tr,
                ref: e3,
                onResize: function () {
                  t0(), tW();
                },
              },
              h.createElement(M, { getTriggerDOMNode: eT }, t4),
            ),
            h.createElement(
              C.Provider,
              { value: eW },
              h.createElement(E, {
                portal: e,
                ref: eG,
                prefixCls: q,
                popup: ed,
                className: u()(em, tI),
                style: eh,
                target: e0,
                onMouseEnter: I,
                onMouseLeave: j,
                onPointerEnter: I,
                zIndex: eZ,
                open: tr,
                keepDom: td,
                fresh: eM,
                onClick: eP,
                mask: eu,
                motion: e5,
                maskMotion: e9,
                onVisibleChanged: function (e) {
                  tm(!1), tY(), null == en || en(e);
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
                autoDestroy: ep || ev || !1,
                getPopupContainer: ec,
                align: tT,
                arrow: t8,
                arrowPos: { x: tL, y: tD },
                ready: tk,
                offsetX: tN,
                offsetY: tR,
                offsetR: tS,
                offsetB: tA,
                onAlign: tW,
                stretch: ew,
                targetWidth: tq / tH,
                targetHeight: tK / tO,
              }),
            ),
          );
        });
      })(a.Z);
    },
    5251: (e, t, n) => {
      n.d(t, { R: () => i });
      let o = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
        r = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
        i = function (e, t, n, i) {
          let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            l = a ? '&' : '';
          return {
            [`
      ${l}${e}-enter,
      ${l}${e}-appear
    `]: Object.assign(Object.assign({}, o(i)), { animationPlayState: 'paused' }),
            [`${l}${e}-leave`]: Object.assign(Object.assign({}, r(i)), { animationPlayState: 'paused' }),
            [`
      ${l}${e}-enter${e}-enter-active,
      ${l}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: 'running' },
            [`${l}${e}-leave${e}-leave-active`]: {
              animationName: n,
              animationPlayState: 'running',
              pointerEvents: 'none',
            },
          };
        };
    },
    66571: (e, t, n) => {
      n.d(t, { Z: () => u });
      var o = n(93727),
        r = n(65830),
        i = n(3729),
        a = 0,
        l = (0, r.Z)({}, i).useId;
      let u = l
        ? function (e) {
            var t = l();
            return e || t;
          }
        : function (e) {
            var t = i.useState('ssr-id'),
              n = (0, o.Z)(t, 2),
              r = n[0],
              l = n[1];
            return (i.useEffect(function () {
              var e = a;
              (a += 1), l('rc_unique_'.concat(e));
            }, []),
            e)
              ? e
              : r;
          };
    },
    12472: (e, t, n) => {
      n.d(t, { Z: () => o });
      function o() {
        return !1;
      }
    },
  });
