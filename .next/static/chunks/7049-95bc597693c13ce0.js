'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7049],
  {
    73297: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(13428),
        o = n(2265),
        a = {
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
        },
        i = n(46614),
        l = o.forwardRef(function (e, t) {
          return o.createElement(i.Z, (0, r.Z)({}, e, { ref: t, icon: a }));
        });
    },
    42321: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = n(98961),
        o = n(2265),
        a = n(54887),
        i = n(66911);
      n(54812);
      var l = n(17146),
        c = o.createContext(null),
        u = n(16141),
        s = n(19836),
        d = [],
        f = n(45570),
        v = 'rc-util-locker-'.concat(Date.now()),
        p = 0,
        m = !1,
        b = function (e) {
          return (
            !1 !== e &&
            ((0, i.Z)() && e
              ? 'string' == typeof e
                ? document.querySelector(e)
                : 'function' == typeof e
                  ? e()
                  : e
              : null)
          );
        },
        h = o.forwardRef(function (e, t) {
          var n,
            h,
            g,
            y,
            E = e.open,
            C = e.autoLock,
            Z = e.getContainer,
            S = (e.debug, e.autoDestroy),
            $ = void 0 === S || S,
            w = e.children,
            k = o.useState(E),
            x = (0, r.Z)(k, 2),
            N = x[0],
            _ = x[1],
            R = N || E;
          o.useEffect(
            function () {
              ($ || E) && _(E);
            },
            [E, $],
          );
          var I = o.useState(function () {
              return b(Z);
            }),
            M = (0, r.Z)(I, 2),
            P = M[0],
            O = M[1];
          o.useEffect(function () {
            var e = b(Z);
            O(null != e ? e : null);
          });
          var T = (function (e, t) {
              var n = o.useState(function () {
                  return (0, i.Z)() ? document.createElement('div') : null;
                }),
                a = (0, r.Z)(n, 1)[0],
                l = o.useRef(!1),
                f = o.useContext(c),
                v = o.useState(d),
                p = (0, r.Z)(v, 2),
                m = p[0],
                b = p[1],
                h =
                  f ||
                  (l.current
                    ? void 0
                    : function (e) {
                        b(function (t) {
                          return [e].concat((0, u.Z)(t));
                        });
                      });
              function g() {
                a.parentElement || document.body.appendChild(a), (l.current = !0);
              }
              function y() {
                var e;
                null === (e = a.parentElement) || void 0 === e || e.removeChild(a), (l.current = !1);
              }
              return (
                (0, s.Z)(
                  function () {
                    return e ? (f ? f(g) : g()) : y(), y;
                  },
                  [e],
                ),
                (0, s.Z)(
                  function () {
                    m.length &&
                      (m.forEach(function (e) {
                        return e();
                      }),
                      b(d));
                  },
                  [m],
                ),
                [a, h]
              );
            })(R && !P, 0),
            L = (0, r.Z)(T, 2),
            A = L[0],
            K = L[1],
            D = null != P ? P : A;
          (n = !!(C && E && (0, i.Z)() && (D === A || D === document.body))),
            (h = o.useState(function () {
              return (p += 1), ''.concat(v, '_').concat(p);
            })),
            (g = (0, r.Z)(h, 1)[0]),
            (0, s.Z)(
              function () {
                if (n) {
                  var e,
                    t = ((e = document.body),
                    'undefined' != typeof document && e && e instanceof Element
                      ? (function (e) {
                          var t,
                            n,
                            r = 'rc-scrollbar-measure-'.concat(Math.random().toString(36).substring(7)),
                            o = document.createElement('div');
                          o.id = r;
                          var a = o.style;
                          if (
                            ((a.position = 'absolute'),
                            (a.left = '0'),
                            (a.top = '0'),
                            (a.width = '100px'),
                            (a.height = '100px'),
                            (a.overflow = 'scroll'),
                            e)
                          ) {
                            var i = getComputedStyle(e);
                            (a.scrollbarColor = i.scrollbarColor), (a.scrollbarWidth = i.scrollbarWidth);
                            var l = getComputedStyle(e, '::-webkit-scrollbar'),
                              c = parseInt(l.width, 10),
                              u = parseInt(l.height, 10);
                            try {
                              var s = c ? 'width: '.concat(l.width, ';') : '',
                                d = u ? 'height: '.concat(l.height, ';') : '';
                              (0, f.hq)('\n#'.concat(r, '::-webkit-scrollbar {\n').concat(s, '\n').concat(d, '\n}'), r);
                            } catch (e) {
                              console.error(e), (t = c), (n = u);
                            }
                          }
                          document.body.appendChild(o);
                          var v = e && t && !isNaN(t) ? t : o.offsetWidth - o.clientWidth,
                            p = e && n && !isNaN(n) ? n : o.offsetHeight - o.clientHeight;
                          return document.body.removeChild(o), (0, f.jL)(r), { width: v, height: p };
                        })(e)
                      : { width: 0, height: 0 }).width,
                    r =
                      document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) &&
                      window.innerWidth > document.body.offsetWidth;
                  (0, f.hq)(
                    '\nhtml body {\n  overflow-y: hidden;\n  '.concat(
                      r ? 'width: calc(100% - '.concat(t, 'px);') : '',
                      '\n}',
                    ),
                    g,
                  );
                } else (0, f.jL)(g);
                return function () {
                  (0, f.jL)(g);
                };
              },
              [n, g],
            );
          var z = null;
          w && (0, l.Yr)(w) && t && (z = w.ref);
          var B = (0, l.x1)(z, t);
          if (!R || !(0, i.Z)() || void 0 === P) return null;
          var U = !1 === D || ('boolean' == typeof y && (m = y), m),
            W = w;
          return (
            t && (W = o.cloneElement(w, { ref: B })),
            o.createElement(c.Provider, { value: K }, U ? W : (0, a.createPortal)(W, D))
          );
        });
    },
    33613: function (e, t, n) {
      n.d(t, {
        m: function () {
          return r;
        },
      });
      let r = (e, t, n) => (void 0 !== n ? n : `${e}-${t}`);
    },
    92386: function (e, t, n) {
      n.d(t, {
        R: function () {
          return a;
        },
      });
      let r = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
        o = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
        a = function (e, t, n, a) {
          let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            l = i ? '&' : '';
          return {
            [`
      ${l}${e}-enter,
      ${l}${e}-appear
    `]: Object.assign(Object.assign({}, r(a)), { animationPlayState: 'paused' }),
            [`${l}${e}-leave`]: Object.assign(Object.assign({}, o(a)), { animationPlayState: 'paused' }),
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
    19749: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return ne;
        },
      });
      var r = n(2265),
        o = n(73297),
        a = n(13428),
        i = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z',
                },
              },
            ],
          },
          name: 'ellipsis',
          theme: 'outlined',
        },
        l = n(46614),
        c = r.forwardRef(function (e, t) {
          return r.createElement(l.Z, (0, a.Z)({}, e, { ref: t, icon: i }));
        }),
        u = n(74898),
        s = n(42744),
        d = n.n(s),
        f = n(21076),
        v = n(10870),
        p = n(98961),
        m = n(60075),
        b = n(82554),
        h = n(73310),
        g = n(77971),
        y = (0, r.createContext)(null),
        E = n(16141),
        C = n(11288),
        Z = n(28788),
        S = n(17146),
        $ = n(43197),
        w = function (e) {
          var t = e.activeTabOffset,
            n = e.horizontal,
            o = e.rtl,
            a = e.indicator,
            i = void 0 === a ? {} : a,
            l = i.size,
            c = i.align,
            u = void 0 === c ? 'center' : c,
            s = (0, r.useState)(),
            d = (0, p.Z)(s, 2),
            f = d[0],
            v = d[1],
            m = (0, r.useRef)(),
            b = r.useCallback(
              function (e) {
                return 'function' == typeof l ? l(e) : 'number' == typeof l ? l : e;
              },
              [l],
            );
          function h() {
            $.Z.cancel(m.current);
          }
          return (
            (0, r.useEffect)(
              function () {
                var e = {};
                if (t) {
                  if (n) {
                    e.width = b(t.width);
                    var r = o ? 'right' : 'left';
                    'start' === u && (e[r] = t[r]),
                      'center' === u &&
                        ((e[r] = t[r] + t.width / 2), (e.transform = o ? 'translateX(50%)' : 'translateX(-50%)')),
                      'end' === u && ((e[r] = t[r] + t.width), (e.transform = 'translateX(-100%)'));
                  } else
                    (e.height = b(t.height)),
                      'start' === u && (e.top = t.top),
                      'center' === u && ((e.top = t.top + t.height / 2), (e.transform = 'translateY(-50%)')),
                      'end' === u && ((e.top = t.top + t.height), (e.transform = 'translateY(-100%)'));
                }
                return (
                  h(),
                  (m.current = (0, $.Z)(function () {
                    v(e);
                  })),
                  h
                );
              },
              [t, n, o, u, b],
            ),
            { style: f }
          );
        },
        k = { width: 0, height: 0, left: 0, top: 0 };
      function x(e, t) {
        var n = r.useRef(e),
          o = r.useState({}),
          a = (0, p.Z)(o, 2)[1];
        return [
          n.current,
          function (e) {
            var r = 'function' == typeof e ? e(n.current) : e;
            r !== n.current && t(r, n.current), (n.current = r), a({});
          },
        ];
      }
      var N = n(19836);
      function _(e) {
        var t = (0, r.useState)(0),
          n = (0, p.Z)(t, 2),
          o = n[0],
          a = n[1],
          i = (0, r.useRef)(0),
          l = (0, r.useRef)();
        return (
          (l.current = e),
          (0, N.o)(
            function () {
              var e;
              null === (e = l.current) || void 0 === e || e.call(l);
            },
            [o],
          ),
          function () {
            i.current === o && ((i.current += 1), a(i.current));
          }
        );
      }
      var R = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function I(e) {
        var t;
        return (
          e instanceof Map
            ? ((t = {}),
              e.forEach(function (e, n) {
                t[n] = e;
              }))
            : (t = e),
          JSON.stringify(t)
        );
      }
      function M(e) {
        return String(e).replace(/"/g, 'TABS_DQ');
      }
      function P(e, t, n, r) {
        return !!n && !r && !1 !== e && (void 0 !== e || (!1 !== t && null !== t));
      }
      var O = r.forwardRef(function (e, t) {
          var n = e.prefixCls,
            o = e.editable,
            a = e.locale,
            i = e.style;
          return o && !1 !== o.showAdd
            ? r.createElement(
                'button',
                {
                  ref: t,
                  type: 'button',
                  className: ''.concat(n, '-nav-add'),
                  style: i,
                  'aria-label': (null == a ? void 0 : a.addAriaLabel) || 'Add tab',
                  onClick: function (e) {
                    o.onEdit('add', { event: e });
                  },
                },
                o.addIcon || '+',
              )
            : null;
        }),
        T = r.forwardRef(function (e, t) {
          var n,
            o = e.position,
            a = e.prefixCls,
            i = e.extra;
          if (!i) return null;
          var l = {};
          return (
            'object' !== (0, m.Z)(i) || r.isValidElement(i) ? (l.right = i) : (l = i),
            'right' === o && (n = l.right),
            'left' === o && (n = l.left),
            n ? r.createElement('div', { className: ''.concat(a, '-extra-content'), ref: t }, n) : null
          );
        }),
        L = n(16758),
        A = n(89017),
        K = A.Z.ESC,
        D = A.Z.TAB,
        z = (0, r.forwardRef)(function (e, t) {
          var n = e.overlay,
            o = e.arrow,
            a = e.prefixCls,
            i = (0, r.useMemo)(
              function () {
                return 'function' == typeof n ? n() : n;
              },
              [n],
            ),
            l = (0, S.sQ)(t, null == i ? void 0 : i.ref);
          return r.createElement(
            r.Fragment,
            null,
            o && r.createElement('div', { className: ''.concat(a, '-arrow') }),
            r.cloneElement(i, { ref: (0, S.Yr)(i) ? l : void 0 }),
          );
        }),
        B = { adjustX: 1, adjustY: 1 },
        U = [0, 0],
        W = {
          topLeft: { points: ['bl', 'tl'], overflow: B, offset: [0, -4], targetOffset: U },
          top: { points: ['bc', 'tc'], overflow: B, offset: [0, -4], targetOffset: U },
          topRight: { points: ['br', 'tr'], overflow: B, offset: [0, -4], targetOffset: U },
          bottomLeft: { points: ['tl', 'bl'], overflow: B, offset: [0, 4], targetOffset: U },
          bottom: { points: ['tc', 'bc'], overflow: B, offset: [0, 4], targetOffset: U },
          bottomRight: { points: ['tr', 'br'], overflow: B, offset: [0, 4], targetOffset: U },
        },
        F = [
          'arrow',
          'prefixCls',
          'transitionName',
          'animation',
          'align',
          'placement',
          'placements',
          'getPopupContainer',
          'showAction',
          'hideAction',
          'overlayClassName',
          'overlayStyle',
          'visible',
          'trigger',
          'autoFocus',
          'overlay',
          'children',
          'onVisibleChange',
        ],
        H = r.forwardRef(function (e, t) {
          var n,
            o,
            i,
            l,
            c,
            u,
            s,
            v,
            m,
            h,
            g,
            y,
            E,
            C,
            Z = e.arrow,
            w = void 0 !== Z && Z,
            k = e.prefixCls,
            x = void 0 === k ? 'rc-dropdown' : k,
            N = e.transitionName,
            _ = e.animation,
            R = e.align,
            I = e.placement,
            M = e.placements,
            P = e.getPopupContainer,
            O = e.showAction,
            T = e.hideAction,
            A = e.overlayClassName,
            B = e.overlayStyle,
            U = e.visible,
            H = e.trigger,
            j = void 0 === H ? ['hover'] : H,
            G = e.autoFocus,
            X = e.overlay,
            V = e.children,
            Y = e.onVisibleChange,
            Q = (0, b.Z)(e, F),
            q = r.useState(),
            J = (0, p.Z)(q, 2),
            ee = J[0],
            et = J[1],
            en = 'visible' in e ? U : ee,
            er = r.useRef(null),
            eo = r.useRef(null),
            ea = r.useRef(null);
          r.useImperativeHandle(t, function () {
            return er.current;
          });
          var ei = function (e) {
            et(e), null == Y || Y(e);
          };
          (o = (n = { visible: en, triggerRef: ea, onVisibleChange: ei, autoFocus: G, overlayRef: eo }).visible),
            (i = n.triggerRef),
            (l = n.onVisibleChange),
            (c = n.autoFocus),
            (u = n.overlayRef),
            (s = r.useRef(!1)),
            (v = function () {
              if (o) {
                var e, t;
                null === (e = i.current) || void 0 === e || null === (t = e.focus) || void 0 === t || t.call(e),
                  null == l || l(!1);
              }
            }),
            (m = function () {
              var e;
              return null !== (e = u.current) && void 0 !== e && !!e.focus && (u.current.focus(), (s.current = !0), !0);
            }),
            (h = function (e) {
              switch (e.keyCode) {
                case K:
                  v();
                  break;
                case D:
                  var t = !1;
                  s.current || (t = m()), t ? e.preventDefault() : v();
              }
            }),
            r.useEffect(
              function () {
                return o
                  ? (window.addEventListener('keydown', h),
                    c && (0, $.Z)(m, 3),
                    function () {
                      window.removeEventListener('keydown', h), (s.current = !1);
                    })
                  : function () {
                      s.current = !1;
                    };
              },
              [o],
            );
          var el = function () {
              return r.createElement(z, { ref: eo, overlay: X, prefixCls: x, arrow: w });
            },
            ec = r.cloneElement(V, {
              className: d()(
                null === (C = V.props) || void 0 === C ? void 0 : C.className,
                en && (void 0 !== (g = e.openClassName) ? g : ''.concat(x, '-open')),
              ),
              ref: (0, S.Yr)(V) ? (0, S.sQ)(ea, V.ref) : void 0,
            }),
            eu = T;
          return (
            eu || -1 === j.indexOf('contextMenu') || (eu = ['click']),
            r.createElement(
              L.Z,
              (0, a.Z)({ builtinPlacements: void 0 === M ? W : M }, Q, {
                prefixCls: x,
                ref: er,
                popupClassName: d()(A, (0, f.Z)({}, ''.concat(x, '-show-arrow'), w)),
                popupStyle: B,
                action: j,
                showAction: O,
                hideAction: eu,
                popupPlacement: void 0 === I ? 'bottomLeft' : I,
                popupAlign: R,
                popupTransitionName: N,
                popupAnimation: _,
                popupVisible: en,
                stretch: ((y = e.minOverlayWidthMatchTrigger),
                (E = e.alignPoint),
                'minOverlayWidthMatchTrigger' in e ? y : !E)
                  ? 'minWidth'
                  : '',
                popup: 'function' == typeof X ? el : el(),
                onPopupVisibleChange: ei,
                onPopupClick: function (t) {
                  var n = e.onOverlayClick;
                  et(!1), n && n(t);
                },
                getPopupContainer: P,
              }),
              ec,
            )
          );
        }),
        j = [
          'prefixCls',
          'invalidate',
          'item',
          'renderItem',
          'responsive',
          'responsiveDisabled',
          'registerSize',
          'itemKey',
          'className',
          'style',
          'children',
          'display',
          'order',
          'component',
        ],
        G = void 0,
        X = r.forwardRef(function (e, t) {
          var n,
            o = e.prefixCls,
            i = e.invalidate,
            l = e.item,
            c = e.renderItem,
            u = e.responsive,
            s = e.responsiveDisabled,
            f = e.registerSize,
            p = e.itemKey,
            m = e.className,
            h = e.style,
            g = e.children,
            y = e.display,
            E = e.order,
            Z = e.component,
            S = (0, b.Z)(e, j),
            $ = u && !y;
          r.useEffect(function () {
            return function () {
              f(p, null);
            };
          }, []);
          var w = c && l !== G ? c(l) : g;
          i ||
            (n = {
              opacity: $ ? 0 : 1,
              height: $ ? 0 : G,
              overflowY: $ ? 'hidden' : G,
              order: u ? E : G,
              pointerEvents: $ ? 'none' : G,
              position: $ ? 'absolute' : G,
            });
          var k = {};
          $ && (k['aria-hidden'] = !0);
          var x = r.createElement(
            void 0 === Z ? 'div' : Z,
            (0, a.Z)({ className: d()(!i && o, m), style: (0, v.Z)((0, v.Z)({}, n), h) }, k, S, { ref: t }),
            w,
          );
          return (
            u &&
              (x = r.createElement(
                C.Z,
                {
                  onResize: function (e) {
                    f(p, e.offsetWidth);
                  },
                  disabled: s,
                },
                x,
              )),
            x
          );
        });
      X.displayName = 'Item';
      var V = n(54887);
      function Y(e, t) {
        var n = r.useState(t),
          o = (0, p.Z)(n, 2),
          a = o[0],
          i = o[1];
        return [
          a,
          (0, Z.Z)(function (t) {
            e(function () {
              i(t);
            });
          }),
        ];
      }
      var Q = r.createContext(null),
        q = ['component'],
        J = ['className'],
        ee = ['className'],
        et = r.forwardRef(function (e, t) {
          var n = r.useContext(Q);
          if (!n) {
            var o = e.component,
              i = (0, b.Z)(e, q);
            return r.createElement(void 0 === o ? 'div' : o, (0, a.Z)({}, i, { ref: t }));
          }
          var l = n.className,
            c = (0, b.Z)(n, J),
            u = e.className,
            s = (0, b.Z)(e, ee);
          return r.createElement(
            Q.Provider,
            { value: null },
            r.createElement(X, (0, a.Z)({ ref: t, className: d()(l, u) }, c, s)),
          );
        });
      et.displayName = 'RawItem';
      var en = [
          'prefixCls',
          'data',
          'renderItem',
          'renderRawItem',
          'itemKey',
          'itemWidth',
          'ssr',
          'style',
          'className',
          'maxCount',
          'renderRest',
          'renderRawRest',
          'suffix',
          'component',
          'itemComponent',
          'onVisibleChange',
        ],
        er = 'responsive',
        eo = 'invalidate';
      function ea(e) {
        return '+ '.concat(e.length, ' ...');
      }
      var ei = r.forwardRef(function (e, t) {
        var n,
          o,
          i = e.prefixCls,
          l = void 0 === i ? 'rc-overflow' : i,
          c = e.data,
          u = void 0 === c ? [] : c,
          s = e.renderItem,
          f = e.renderRawItem,
          m = e.itemKey,
          h = e.itemWidth,
          g = void 0 === h ? 10 : h,
          y = e.ssr,
          E = e.style,
          Z = e.className,
          S = e.maxCount,
          w = e.renderRest,
          k = e.renderRawRest,
          x = e.suffix,
          _ = e.component,
          R = e.itemComponent,
          I = e.onVisibleChange,
          M = (0, b.Z)(e, en),
          P = 'full' === y,
          O =
            ((n = r.useRef(null)),
            function (e) {
              n.current ||
                ((n.current = []),
                (function (e) {
                  if ('undefined' == typeof MessageChannel) (0, $.Z)(e);
                  else {
                    var t = new MessageChannel();
                    (t.port1.onmessage = function () {
                      return e();
                    }),
                      t.port2.postMessage(void 0);
                  }
                })(function () {
                  (0, V.unstable_batchedUpdates)(function () {
                    n.current.forEach(function (e) {
                      e();
                    }),
                      (n.current = null);
                  });
                })),
                n.current.push(e);
            }),
          T = Y(O, null),
          L = (0, p.Z)(T, 2),
          A = L[0],
          K = L[1],
          D = A || 0,
          z = Y(O, new Map()),
          B = (0, p.Z)(z, 2),
          U = B[0],
          W = B[1],
          F = Y(O, 0),
          H = (0, p.Z)(F, 2),
          j = H[0],
          G = H[1],
          q = Y(O, 0),
          J = (0, p.Z)(q, 2),
          ee = J[0],
          et = J[1],
          ei = Y(O, 0),
          el = (0, p.Z)(ei, 2),
          ec = el[0],
          eu = el[1],
          es = (0, r.useState)(null),
          ed = (0, p.Z)(es, 2),
          ef = ed[0],
          ev = ed[1],
          ep = (0, r.useState)(null),
          em = (0, p.Z)(ep, 2),
          eb = em[0],
          eh = em[1],
          eg = r.useMemo(
            function () {
              return null === eb && P ? Number.MAX_SAFE_INTEGER : eb || 0;
            },
            [eb, A],
          ),
          ey = (0, r.useState)(!1),
          eE = (0, p.Z)(ey, 2),
          eC = eE[0],
          eZ = eE[1],
          eS = ''.concat(l, '-item'),
          e$ = Math.max(j, ee),
          ew = S === er,
          ek = u.length && ew,
          ex = S === eo,
          eN = ek || ('number' == typeof S && u.length > S),
          e_ = (0, r.useMemo)(
            function () {
              var e = u;
              return (
                ek
                  ? (e = null === A && P ? u : u.slice(0, Math.min(u.length, D / g)))
                  : 'number' == typeof S && (e = u.slice(0, S)),
                e
              );
            },
            [u, g, A, S, ek],
          ),
          eR = (0, r.useMemo)(
            function () {
              return ek ? u.slice(eg + 1) : u.slice(e_.length);
            },
            [u, e_, ek, eg],
          ),
          eI = (0, r.useCallback)(
            function (e, t) {
              var n;
              return 'function' == typeof m
                ? m(e)
                : null !== (n = m && (null == e ? void 0 : e[m])) && void 0 !== n
                  ? n
                  : t;
            },
            [m],
          ),
          eM = (0, r.useCallback)(
            s ||
              function (e) {
                return e;
              },
            [s],
          );
        function eP(e, t, n) {
          (eb !== e || (void 0 !== t && t !== ef)) &&
            (eh(e), n || (eZ(e < u.length - 1), null == I || I(e)), void 0 !== t && ev(t));
        }
        function eO(e, t) {
          W(function (n) {
            var r = new Map(n);
            return null === t ? r.delete(e) : r.set(e, t), r;
          });
        }
        function eT(e) {
          return U.get(eI(e_[e], e));
        }
        (0, N.Z)(
          function () {
            if (D && 'number' == typeof e$ && e_) {
              var e = ec,
                t = e_.length,
                n = t - 1;
              if (!t) {
                eP(0, null);
                return;
              }
              for (var r = 0; r < t; r += 1) {
                var o = eT(r);
                if ((P && (o = o || 0), void 0 === o)) {
                  eP(r - 1, void 0, !0);
                  break;
                }
                if (((e += o), (0 === n && e <= D) || (r === n - 1 && e + eT(n) <= D))) {
                  eP(n, null);
                  break;
                }
                if (e + e$ > D) {
                  eP(r - 1, e - o - ec + ee);
                  break;
                }
              }
              x && eT(0) + ec > D && ev(null);
            }
          },
          [D, U, ee, ec, eI, e_],
        );
        var eL = eC && !!eR.length,
          eA = {};
        null !== ef && ek && (eA = { position: 'absolute', left: ef, top: 0 });
        var eK = { prefixCls: eS, responsive: ek, component: R, invalidate: ex },
          eD = f
            ? function (e, t) {
                var n = eI(e, t);
                return r.createElement(
                  Q.Provider,
                  {
                    key: n,
                    value: (0, v.Z)(
                      (0, v.Z)({}, eK),
                      {},
                      { order: t, item: e, itemKey: n, registerSize: eO, display: t <= eg },
                    ),
                  },
                  f(e, t),
                );
              }
            : function (e, t) {
                var n = eI(e, t);
                return r.createElement(
                  X,
                  (0, a.Z)({}, eK, {
                    order: t,
                    key: n,
                    item: e,
                    renderItem: eM,
                    itemKey: n,
                    registerSize: eO,
                    display: t <= eg,
                  }),
                );
              },
          ez = {
            order: eL ? eg : Number.MAX_SAFE_INTEGER,
            className: ''.concat(eS, '-rest'),
            registerSize: function (e, t) {
              et(t), G(ee);
            },
            display: eL,
          };
        if (k) k && (o = r.createElement(Q.Provider, { value: (0, v.Z)((0, v.Z)({}, eK), ez) }, k(eR)));
        else {
          var eB = w || ea;
          o = r.createElement(X, (0, a.Z)({}, eK, ez), 'function' == typeof eB ? eB(eR) : eB);
        }
        var eU = r.createElement(
          void 0 === _ ? 'div' : _,
          (0, a.Z)({ className: d()(!ex && l, Z), style: E, ref: t }, M),
          e_.map(eD),
          eN ? o : null,
          x &&
            r.createElement(
              X,
              (0, a.Z)({}, eK, {
                responsive: ew,
                responsiveDisabled: !ek,
                order: eg,
                className: ''.concat(eS, '-suffix'),
                registerSize: function (e, t) {
                  eu(t);
                },
                display: !0,
                style: eA,
              }),
              x,
            ),
        );
        return (
          ew &&
            (eU = r.createElement(
              C.Z,
              {
                onResize: function (e, t) {
                  K(t.clientWidth);
                },
                disabled: !ek,
              },
              eU,
            )),
          eU
        );
      });
      (ei.displayName = 'Overflow'), (ei.Item = et), (ei.RESPONSIVE = er), (ei.INVALIDATE = eo);
      var el = n(41595),
        ec = n(54812),
        eu = r.createContext(null);
      function es(e, t) {
        return void 0 === e ? null : ''.concat(e, '-').concat(t);
      }
      function ed(e) {
        return es(r.useContext(eu), e);
      }
      var ef = n(69320),
        ev = ['children', 'locked'],
        ep = r.createContext(null);
      function em(e) {
        var t = e.children,
          n = e.locked,
          o = (0, b.Z)(e, ev),
          a = r.useContext(ep),
          i = (0, ef.Z)(
            function () {
              var e;
              return (
                (e = (0, v.Z)({}, a)),
                Object.keys(o).forEach(function (t) {
                  var n = o[t];
                  void 0 !== n && (e[t] = n);
                }),
                e
              );
            },
            [a, o],
            function (e, t) {
              return !n && (e[0] !== t[0] || !(0, el.Z)(e[1], t[1], !0));
            },
          );
        return r.createElement(ep.Provider, { value: i }, t);
      }
      var eb = r.createContext(null);
      function eh() {
        return r.useContext(eb);
      }
      var eg = r.createContext([]);
      function ey(e) {
        var t = r.useContext(eg);
        return r.useMemo(
          function () {
            return void 0 !== e ? [].concat((0, E.Z)(t), [e]) : t;
          },
          [t, e],
        );
      }
      var eE = r.createContext(null),
        eC = r.createContext({}),
        eZ = n(42120);
      function eS(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ((0, eZ.Z)(e)) {
          var n = e.nodeName.toLowerCase(),
            r =
              ['input', 'select', 'textarea', 'button'].includes(n) ||
              e.isContentEditable ||
              ('a' === n && !!e.getAttribute('href')),
            o = e.getAttribute('tabindex'),
            a = Number(o),
            i = null;
          return (
            o && !Number.isNaN(a) ? (i = a) : r && null === i && (i = 0),
            r && e.disabled && (i = null),
            null !== i && (i >= 0 || (t && i < 0))
          );
        }
        return !1;
      }
      var e$ = A.Z.LEFT,
        ew = A.Z.RIGHT,
        ek = A.Z.UP,
        ex = A.Z.DOWN,
        eN = A.Z.ENTER,
        e_ = A.Z.ESC,
        eR = A.Z.HOME,
        eI = A.Z.END,
        eM = [ek, ex, e$, ew];
      function eP(e, t) {
        return (function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, E.Z)(e.querySelectorAll('*')).filter(function (e) {
              return eS(e, t);
            });
          return eS(e, t) && n.unshift(e), n;
        })(e, !0).filter(function (e) {
          return t.has(e);
        });
      }
      function eO(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (!e) return null;
        var o = eP(e, t),
          a = o.length,
          i = o.findIndex(function (e) {
            return n === e;
          });
        return r < 0 ? (-1 === i ? (i = a - 1) : (i -= 1)) : r > 0 && (i += 1), o[(i = (i + a) % a)];
      }
      var eT = function (e, t) {
          var n = new Set(),
            r = new Map(),
            o = new Map();
          return (
            e.forEach(function (e) {
              var a = document.querySelector("[data-menu-id='".concat(es(t, e), "']"));
              a && (n.add(a), o.set(a, e), r.set(e, a));
            }),
            { elements: n, key2element: r, element2key: o }
          );
        },
        eL = '__RC_UTIL_PATH_SPLIT__',
        eA = function (e) {
          return e.join(eL);
        },
        eK = 'rc-menu-more';
      function eD(e) {
        var t = r.useRef(e);
        t.current = e;
        var n = r.useCallback(function () {
          for (var e, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
          return null === (e = t.current) || void 0 === e ? void 0 : e.call.apply(e, [t].concat(r));
        }, []);
        return e ? n : void 0;
      }
      var ez = Math.random().toFixed(5).toString().slice(2),
        eB = 0,
        eU = n(49034),
        eW = n(88755),
        eF = n(91847),
        eH = n(42936),
        ej = n(54925);
      function eG(e, t, n, o) {
        var a = r.useContext(ep),
          i = a.activeKey,
          l = a.onActive,
          c = a.onInactive,
          u = { active: i === e };
        return (
          t ||
            ((u.onMouseEnter = function (t) {
              null == n || n({ key: e, domEvent: t }), l(e);
            }),
            (u.onMouseLeave = function (t) {
              null == o || o({ key: e, domEvent: t }), c(e);
            })),
          u
        );
      }
      function eX(e) {
        var t = r.useContext(ep),
          n = t.mode,
          o = t.rtl,
          a = t.inlineIndent;
        return 'inline' !== n ? null : o ? { paddingRight: e * a } : { paddingLeft: e * a };
      }
      function eV(e) {
        var t,
          n = e.icon,
          o = e.props,
          a = e.children;
        return null === n || !1 === n
          ? null
          : ('function' == typeof n ? (t = r.createElement(n, (0, v.Z)({}, o))) : 'boolean' != typeof n && (t = n),
            t || a || null);
      }
      var eY = ['item'];
      function eQ(e) {
        var t = e.item,
          n = (0, b.Z)(e, eY);
        return (
          Object.defineProperty(n, 'item', {
            get: function () {
              return (
                (0, ec.ZP)(
                  !1,
                  '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.',
                ),
                t
              );
            },
          }),
          n
        );
      }
      var eq = ['title', 'attribute', 'elementRef'],
        eJ = [
          'style',
          'className',
          'eventKey',
          'warnKey',
          'disabled',
          'itemIcon',
          'children',
          'role',
          'onMouseEnter',
          'onMouseLeave',
          'onClick',
          'onKeyDown',
          'onFocus',
        ],
        e0 = ['active'],
        e1 = (function (e) {
          (0, eF.Z)(n, e);
          var t = (0, eH.Z)(n);
          function n() {
            return (0, eU.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, eW.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.title,
                    n = e.attribute,
                    o = e.elementRef,
                    i = (0, b.Z)(e, eq),
                    l = (0, ej.Z)(i, ['eventKey', 'popupClassName', 'popupOffset', 'onTitleClick']);
                  return (
                    (0, ec.ZP)(!n, '`attribute` of Menu.Item is deprecated. Please pass attribute directly.'),
                    r.createElement(
                      ei.Item,
                      (0, a.Z)({}, n, { title: 'string' == typeof t ? t : void 0 }, l, { ref: o }),
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.Component),
        e2 = r.forwardRef(function (e, t) {
          var n = e.style,
            o = e.className,
            i = e.eventKey,
            l = (e.warnKey, e.disabled),
            c = e.itemIcon,
            u = e.children,
            s = e.role,
            p = e.onMouseEnter,
            m = e.onMouseLeave,
            h = e.onClick,
            g = e.onKeyDown,
            y = e.onFocus,
            C = (0, b.Z)(e, eJ),
            Z = ed(i),
            $ = r.useContext(ep),
            w = $.prefixCls,
            k = $.onItemClick,
            x = $.disabled,
            N = $.overflowDisabled,
            _ = $.itemIcon,
            R = $.selectedKeys,
            I = $.onActive,
            M = r.useContext(eC)._internalRenderMenuItem,
            P = ''.concat(w, '-item'),
            O = r.useRef(),
            T = r.useRef(),
            L = x || l,
            K = (0, S.x1)(t, T),
            D = ey(i),
            z = function (e) {
              return { key: i, keyPath: (0, E.Z)(D).reverse(), item: O.current, domEvent: e };
            },
            B = eG(i, L, p, m),
            U = B.active,
            W = (0, b.Z)(B, e0),
            F = R.includes(i),
            H = eX(D.length),
            j = {};
          'option' === e.role && (j['aria-selected'] = F);
          var G = r.createElement(
            e1,
            (0, a.Z)(
              {
                ref: O,
                elementRef: K,
                role: null === s ? 'none' : s || 'menuitem',
                tabIndex: l ? null : -1,
                'data-menu-id': N && Z ? null : Z,
              },
              C,
              W,
              j,
              {
                component: 'li',
                'aria-disabled': l,
                style: (0, v.Z)((0, v.Z)({}, H), n),
                className: d()(
                  P,
                  (0, f.Z)(
                    (0, f.Z)((0, f.Z)({}, ''.concat(P, '-active'), U), ''.concat(P, '-selected'), F),
                    ''.concat(P, '-disabled'),
                    L,
                  ),
                  o,
                ),
                onClick: function (e) {
                  if (!L) {
                    var t = z(e);
                    null == h || h(eQ(t)), k(t);
                  }
                },
                onKeyDown: function (e) {
                  if ((null == g || g(e), e.which === A.Z.ENTER)) {
                    var t = z(e);
                    null == h || h(eQ(t)), k(t);
                  }
                },
                onFocus: function (e) {
                  I(i), null == y || y(e);
                },
              },
            ),
            u,
            r.createElement(eV, { props: (0, v.Z)((0, v.Z)({}, e), {}, { isSelected: F }), icon: c || _ }),
          );
          return M && (G = M(G, e, { selected: F })), G;
        }),
        e6 = r.forwardRef(function (e, t) {
          var n = e.eventKey,
            o = eh(),
            i = ey(n);
          return (r.useEffect(
            function () {
              if (o)
                return (
                  o.registerPath(n, i),
                  function () {
                    o.unregisterPath(n, i);
                  }
                );
            },
            [i],
          ),
          o)
            ? null
            : r.createElement(e2, (0, a.Z)({}, e, { ref: t }));
        }),
        e7 = ['className', 'children'],
        e4 = r.forwardRef(function (e, t) {
          var n = e.className,
            o = e.children,
            i = (0, b.Z)(e, e7),
            l = r.useContext(ep),
            c = l.prefixCls,
            u = l.mode,
            s = l.rtl;
          return r.createElement(
            'ul',
            (0, a.Z)(
              {
                className: d()(
                  c,
                  s && ''.concat(c, '-rtl'),
                  ''.concat(c, '-sub'),
                  ''.concat(c, '-').concat('inline' === u ? 'inline' : 'vertical'),
                  n,
                ),
                role: 'menu',
              },
              i,
              { 'data-menu-list': !0, ref: t },
            ),
            o,
          );
        });
      e4.displayName = 'SubMenuList';
      var e5 = n(79173);
      function e9(e, t) {
        return (0, e5.Z)(e).map(function (e, n) {
          if (r.isValidElement(e)) {
            var o,
              a,
              i = e.key,
              l = null !== (o = null === (a = e.props) || void 0 === a ? void 0 : a.eventKey) && void 0 !== o ? o : i;
            null == l && (l = 'tmp_key-'.concat([].concat((0, E.Z)(t), [n]).join('-')));
            var c = { key: l, eventKey: l };
            return r.cloneElement(e, c);
          }
          return e;
        });
      }
      var e8 = { adjustX: 1, adjustY: 1 },
        e3 = {
          topLeft: { points: ['bl', 'tl'], overflow: e8 },
          topRight: { points: ['br', 'tr'], overflow: e8 },
          bottomLeft: { points: ['tl', 'bl'], overflow: e8 },
          bottomRight: { points: ['tr', 'br'], overflow: e8 },
          leftTop: { points: ['tr', 'tl'], overflow: e8 },
          leftBottom: { points: ['br', 'bl'], overflow: e8 },
          rightTop: { points: ['tl', 'tr'], overflow: e8 },
          rightBottom: { points: ['bl', 'br'], overflow: e8 },
        },
        te = {
          topLeft: { points: ['bl', 'tl'], overflow: e8 },
          topRight: { points: ['br', 'tr'], overflow: e8 },
          bottomLeft: { points: ['tl', 'bl'], overflow: e8 },
          bottomRight: { points: ['tr', 'br'], overflow: e8 },
          rightTop: { points: ['tr', 'tl'], overflow: e8 },
          rightBottom: { points: ['br', 'bl'], overflow: e8 },
          leftTop: { points: ['tl', 'tr'], overflow: e8 },
          leftBottom: { points: ['bl', 'br'], overflow: e8 },
        };
      function tt(e, t, n) {
        return t || (n ? n[e] || n.other : void 0);
      }
      var tn = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      };
      function tr(e) {
        var t = e.prefixCls,
          n = e.visible,
          o = e.children,
          a = e.popup,
          i = e.popupStyle,
          l = e.popupClassName,
          c = e.popupOffset,
          u = e.disabled,
          s = e.mode,
          m = e.onVisibleChange,
          b = r.useContext(ep),
          h = b.getPopupContainer,
          g = b.rtl,
          y = b.subMenuOpenDelay,
          E = b.subMenuCloseDelay,
          C = b.builtinPlacements,
          Z = b.triggerSubMenuAction,
          S = b.forceSubMenuRender,
          w = b.rootClassName,
          k = b.motion,
          x = b.defaultMotions,
          N = r.useState(!1),
          _ = (0, p.Z)(N, 2),
          R = _[0],
          I = _[1],
          M = g ? (0, v.Z)((0, v.Z)({}, te), C) : (0, v.Z)((0, v.Z)({}, e3), C),
          P = tn[s],
          O = tt(s, k, x),
          T = r.useRef(O);
        'inline' !== s && (T.current = O);
        var A = (0, v.Z)(
            (0, v.Z)({}, T.current),
            {},
            { leavedClassName: ''.concat(t, '-hidden'), removeOnLeave: !1, motionAppear: !0 },
          ),
          K = r.useRef();
        return (
          r.useEffect(
            function () {
              return (
                (K.current = (0, $.Z)(function () {
                  I(n);
                })),
                function () {
                  $.Z.cancel(K.current);
                }
              );
            },
            [n],
          ),
          r.createElement(
            L.Z,
            {
              prefixCls: t,
              popupClassName: d()(''.concat(t, '-popup'), (0, f.Z)({}, ''.concat(t, '-rtl'), g), l, w),
              stretch: 'horizontal' === s ? 'minWidth' : null,
              getPopupContainer: h,
              builtinPlacements: M,
              popupPlacement: P,
              popupVisible: R,
              popup: a,
              popupStyle: i,
              popupAlign: c && { offset: c },
              action: u ? [] : [Z],
              mouseEnterDelay: y,
              mouseLeaveDelay: E,
              onPopupVisibleChange: m,
              forceRender: S,
              popupMotion: A,
              fresh: !0,
            },
            o,
          )
        );
      }
      var to = n(52640);
      function ta(e) {
        var t = e.id,
          n = e.open,
          o = e.keyPath,
          i = e.children,
          l = 'inline',
          c = r.useContext(ep),
          u = c.prefixCls,
          s = c.forceSubMenuRender,
          d = c.motion,
          f = c.defaultMotions,
          m = c.mode,
          b = r.useRef(!1);
        b.current = m === l;
        var h = r.useState(!b.current),
          g = (0, p.Z)(h, 2),
          y = g[0],
          E = g[1],
          C = !!b.current && n;
        r.useEffect(
          function () {
            b.current && E(!1);
          },
          [m],
        );
        var Z = (0, v.Z)({}, tt(l, d, f));
        o.length > 1 && (Z.motionAppear = !1);
        var S = Z.onVisibleChanged;
        return ((Z.onVisibleChanged = function (e) {
          return b.current || e || E(!0), null == S ? void 0 : S(e);
        }),
        y)
          ? null
          : r.createElement(
              em,
              { mode: l, locked: !b.current },
              r.createElement(
                to.ZP,
                (0, a.Z)({ visible: C }, Z, {
                  forceRender: s,
                  removeOnLeave: !1,
                  leavedClassName: ''.concat(u, '-hidden'),
                }),
                function (e) {
                  var n = e.className,
                    o = e.style;
                  return r.createElement(e4, { id: t, className: n, style: o }, i);
                },
              ),
            );
      }
      var ti = [
          'style',
          'className',
          'title',
          'eventKey',
          'warnKey',
          'disabled',
          'internalPopupClose',
          'children',
          'itemIcon',
          'expandIcon',
          'popupClassName',
          'popupOffset',
          'popupStyle',
          'onClick',
          'onMouseEnter',
          'onMouseLeave',
          'onTitleClick',
          'onTitleMouseEnter',
          'onTitleMouseLeave',
        ],
        tl = ['active'],
        tc = function (e) {
          var t = e.style,
            n = e.className,
            o = e.title,
            i = e.eventKey,
            l = (e.warnKey, e.disabled),
            c = e.internalPopupClose,
            u = e.children,
            s = e.itemIcon,
            m = e.expandIcon,
            h = e.popupClassName,
            g = e.popupOffset,
            y = e.popupStyle,
            E = e.onClick,
            C = e.onMouseEnter,
            Z = e.onMouseLeave,
            S = e.onTitleClick,
            $ = e.onTitleMouseEnter,
            w = e.onTitleMouseLeave,
            k = (0, b.Z)(e, ti),
            x = ed(i),
            N = r.useContext(ep),
            _ = N.prefixCls,
            R = N.mode,
            I = N.openKeys,
            M = N.disabled,
            P = N.overflowDisabled,
            O = N.activeKey,
            T = N.selectedKeys,
            L = N.itemIcon,
            A = N.expandIcon,
            K = N.onItemClick,
            D = N.onOpenChange,
            z = N.onActive,
            B = r.useContext(eC)._internalRenderSubMenuItem,
            U = r.useContext(eE).isSubPathKey,
            W = ey(),
            F = ''.concat(_, '-submenu'),
            H = M || l,
            j = r.useRef(),
            G = r.useRef(),
            X = null != m ? m : A,
            V = I.includes(i),
            Y = !P && V,
            Q = U(T, i),
            q = eG(i, H, $, w),
            J = q.active,
            ee = (0, b.Z)(q, tl),
            et = r.useState(!1),
            en = (0, p.Z)(et, 2),
            er = en[0],
            eo = en[1],
            ea = function (e) {
              H || eo(e);
            },
            el = r.useMemo(
              function () {
                return J || ('inline' !== R && (er || U([O], i)));
              },
              [R, J, O, er, i, U],
            ),
            ec = eX(W.length),
            eu = eD(function (e) {
              null == E || E(eQ(e)), K(e);
            }),
            es = x && ''.concat(x, '-popup'),
            ef = r.createElement(
              'div',
              (0, a.Z)(
                {
                  role: 'menuitem',
                  style: ec,
                  className: ''.concat(F, '-title'),
                  tabIndex: H ? null : -1,
                  ref: j,
                  title: 'string' == typeof o ? o : null,
                  'data-menu-id': P && x ? null : x,
                  'aria-expanded': Y,
                  'aria-haspopup': !0,
                  'aria-controls': es,
                  'aria-disabled': H,
                  onClick: function (e) {
                    H || (null == S || S({ key: i, domEvent: e }), 'inline' === R && D(i, !V));
                  },
                  onFocus: function () {
                    z(i);
                  },
                },
                ee,
              ),
              o,
              r.createElement(
                eV,
                {
                  icon: 'horizontal' !== R ? X : void 0,
                  props: (0, v.Z)((0, v.Z)({}, e), {}, { isOpen: Y, isSubMenu: !0 }),
                },
                r.createElement('i', { className: ''.concat(F, '-arrow') }),
              ),
            ),
            ev = r.useRef(R);
          if (('inline' !== R && W.length > 1 ? (ev.current = 'vertical') : (ev.current = R), !P)) {
            var eb = ev.current;
            ef = r.createElement(
              tr,
              {
                mode: eb,
                prefixCls: F,
                visible: !c && Y && 'inline' !== R,
                popupClassName: h,
                popupOffset: g,
                popupStyle: y,
                popup: r.createElement(
                  em,
                  { mode: 'horizontal' === eb ? 'vertical' : eb },
                  r.createElement(e4, { id: es, ref: G }, u),
                ),
                disabled: H,
                onVisibleChange: function (e) {
                  'inline' !== R && D(i, e);
                },
              },
              ef,
            );
          }
          var eh = r.createElement(
            ei.Item,
            (0, a.Z)({ role: 'none' }, k, {
              component: 'li',
              style: t,
              className: d()(
                F,
                ''.concat(F, '-').concat(R),
                n,
                (0, f.Z)(
                  (0, f.Z)(
                    (0, f.Z)((0, f.Z)({}, ''.concat(F, '-open'), Y), ''.concat(F, '-active'), el),
                    ''.concat(F, '-selected'),
                    Q,
                  ),
                  ''.concat(F, '-disabled'),
                  H,
                ),
              ),
              onMouseEnter: function (e) {
                ea(!0), null == C || C({ key: i, domEvent: e });
              },
              onMouseLeave: function (e) {
                ea(!1), null == Z || Z({ key: i, domEvent: e });
              },
            }),
            ef,
            !P && r.createElement(ta, { id: es, open: Y, keyPath: W }, u),
          );
          return (
            B && (eh = B(eh, e, { selected: Q, active: el, open: Y, disabled: H })),
            r.createElement(
              em,
              {
                onItemClick: eu,
                mode: 'horizontal' === R ? 'vertical' : R,
                itemIcon: null != s ? s : L,
                expandIcon: X,
              },
              eh,
            )
          );
        };
      function tu(e) {
        var t,
          n = e.eventKey,
          o = e.children,
          a = ey(n),
          i = e9(o, a),
          l = eh();
        return (
          r.useEffect(
            function () {
              if (l)
                return (
                  l.registerPath(n, a),
                  function () {
                    l.unregisterPath(n, a);
                  }
                );
            },
            [a],
          ),
          (t = l ? i : r.createElement(tc, e, i)),
          r.createElement(eg.Provider, { value: a }, t)
        );
      }
      var ts = ['className', 'title', 'eventKey', 'children'],
        td = ['children'],
        tf = function (e) {
          var t = e.className,
            n = e.title,
            o = (e.eventKey, e.children),
            i = (0, b.Z)(e, ts),
            l = r.useContext(ep).prefixCls,
            c = ''.concat(l, '-item-group');
          return r.createElement(
            'li',
            (0, a.Z)({ role: 'presentation' }, i, {
              onClick: function (e) {
                return e.stopPropagation();
              },
              className: d()(c, t),
            }),
            r.createElement(
              'div',
              { role: 'presentation', className: ''.concat(c, '-title'), title: 'string' == typeof n ? n : void 0 },
              n,
            ),
            r.createElement('ul', { role: 'group', className: ''.concat(c, '-list') }, o),
          );
        };
      function tv(e) {
        var t = e.children,
          n = (0, b.Z)(e, td),
          o = e9(t, ey(n.eventKey));
        return eh() ? o : r.createElement(tf, (0, ej.Z)(n, ['warnKey']), o);
      }
      function tp(e) {
        var t = e.className,
          n = e.style,
          o = r.useContext(ep).prefixCls;
        return eh()
          ? null
          : r.createElement('li', { role: 'separator', className: d()(''.concat(o, '-item-divider'), t), style: n });
      }
      var tm = ['label', 'children', 'key', 'type'],
        tb = [
          'prefixCls',
          'rootClassName',
          'style',
          'className',
          'tabIndex',
          'items',
          'children',
          'direction',
          'id',
          'mode',
          'inlineCollapsed',
          'disabled',
          'disabledOverflow',
          'subMenuOpenDelay',
          'subMenuCloseDelay',
          'forceSubMenuRender',
          'defaultOpenKeys',
          'openKeys',
          'activeKey',
          'defaultActiveFirst',
          'selectable',
          'multiple',
          'defaultSelectedKeys',
          'selectedKeys',
          'onSelect',
          'onDeselect',
          'inlineIndent',
          'motion',
          'defaultMotions',
          'triggerSubMenuAction',
          'builtinPlacements',
          'itemIcon',
          'expandIcon',
          'overflowedIndicator',
          'overflowedIndicatorPopupClassName',
          'getPopupContainer',
          'onClick',
          'onOpenChange',
          'onKeyDown',
          'openAnimation',
          'openTransitionName',
          '_internalRenderMenuItem',
          '_internalRenderSubMenuItem',
        ],
        th = [],
        tg = r.forwardRef(function (e, t) {
          var n,
            o,
            i,
            l,
            c,
            u,
            s,
            g,
            y,
            C,
            Z,
            S,
            w,
            k,
            x,
            N,
            _,
            R,
            I,
            M,
            P,
            O,
            T,
            L,
            A,
            K,
            D = e.prefixCls,
            z = void 0 === D ? 'rc-menu' : D,
            B = e.rootClassName,
            U = e.style,
            W = e.className,
            F = e.tabIndex,
            H = e.items,
            j = e.children,
            G = e.direction,
            X = e.id,
            Y = e.mode,
            Q = void 0 === Y ? 'vertical' : Y,
            q = e.inlineCollapsed,
            J = e.disabled,
            ee = e.disabledOverflow,
            et = e.subMenuOpenDelay,
            en = e.subMenuCloseDelay,
            er = e.forceSubMenuRender,
            eo = e.defaultOpenKeys,
            ea = e.openKeys,
            ec = e.activeKey,
            es = e.defaultActiveFirst,
            ed = e.selectable,
            ef = void 0 === ed || ed,
            ev = e.multiple,
            ep = void 0 !== ev && ev,
            eh = e.defaultSelectedKeys,
            eg = e.selectedKeys,
            ey = e.onSelect,
            eZ = e.onDeselect,
            eS = e.inlineIndent,
            eU = e.motion,
            eW = e.defaultMotions,
            eF = e.triggerSubMenuAction,
            eH = e.builtinPlacements,
            ej = e.itemIcon,
            eG = e.expandIcon,
            eX = e.overflowedIndicator,
            eV = void 0 === eX ? '...' : eX,
            eY = e.overflowedIndicatorPopupClassName,
            eq = e.getPopupContainer,
            eJ = e.onClick,
            e0 = e.onOpenChange,
            e1 = e.onKeyDown,
            e2 = (e.openAnimation, e.openTransitionName, e._internalRenderMenuItem),
            e7 = e._internalRenderSubMenuItem,
            e4 = (0, b.Z)(e, tb),
            e5 = r.useMemo(
              function () {
                var e;
                return (
                  (e = j),
                  H &&
                    (e = (function e(t) {
                      return (t || [])
                        .map(function (t, n) {
                          if (t && 'object' === (0, m.Z)(t)) {
                            var o = t.label,
                              i = t.children,
                              l = t.key,
                              c = t.type,
                              u = (0, b.Z)(t, tm),
                              s = null != l ? l : 'tmp-'.concat(n);
                            return i || 'group' === c
                              ? 'group' === c
                                ? r.createElement(tv, (0, a.Z)({ key: s }, u, { title: o }), e(i))
                                : r.createElement(tu, (0, a.Z)({ key: s }, u, { title: o }), e(i))
                              : 'divider' === c
                                ? r.createElement(tp, (0, a.Z)({ key: s }, u))
                                : r.createElement(e6, (0, a.Z)({ key: s }, u), o);
                          }
                          return null;
                        })
                        .filter(function (e) {
                          return e;
                        });
                    })(H)),
                  e9(e, th)
                );
              },
              [j, H],
            ),
            e8 = r.useState(!1),
            e3 = (0, p.Z)(e8, 2),
            te = e3[0],
            tt = e3[1],
            tn = r.useRef(),
            tr =
              ((n = (0, h.Z)(X, { value: X })),
              (i = (o = (0, p.Z)(n, 2))[0]),
              (l = o[1]),
              r.useEffect(function () {
                eB += 1;
                var e = ''.concat(ez, '-').concat(eB);
                l('rc-menu-uuid-'.concat(e));
              }, []),
              i),
            to = 'rtl' === G,
            ta = (0, h.Z)(eo, {
              value: ea,
              postState: function (e) {
                return e || th;
              },
            }),
            ti = (0, p.Z)(ta, 2),
            tl = ti[0],
            tc = ti[1],
            ts = function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              function n() {
                tc(e), null == e0 || e0(e);
              }
              t ? (0, V.flushSync)(n) : n();
            },
            td = r.useState(tl),
            tf = (0, p.Z)(td, 2),
            tg = tf[0],
            ty = tf[1],
            tE = r.useRef(!1),
            tC = r.useMemo(
              function () {
                return ('inline' === Q || 'vertical' === Q) && q ? ['vertical', q] : [Q, !1];
              },
              [Q, q],
            ),
            tZ = (0, p.Z)(tC, 2),
            tS = tZ[0],
            t$ = tZ[1],
            tw = 'inline' === tS,
            tk = r.useState(tS),
            tx = (0, p.Z)(tk, 2),
            tN = tx[0],
            t_ = tx[1],
            tR = r.useState(t$),
            tI = (0, p.Z)(tR, 2),
            tM = tI[0],
            tP = tI[1];
          r.useEffect(
            function () {
              t_(tS), tP(t$), tE.current && (tw ? tc(tg) : ts(th));
            },
            [tS, t$],
          );
          var tO = r.useState(0),
            tT = (0, p.Z)(tO, 2),
            tL = tT[0],
            tA = tT[1],
            tK = tL >= e5.length - 1 || 'horizontal' !== tN || ee;
          r.useEffect(
            function () {
              tw && ty(tl);
            },
            [tl],
          ),
            r.useEffect(function () {
              return (
                (tE.current = !0),
                function () {
                  tE.current = !1;
                }
              );
            }, []);
          var tD =
              ((c = r.useState({})),
              (u = (0, p.Z)(c, 2)[1]),
              (s = (0, r.useRef)(new Map())),
              (g = (0, r.useRef)(new Map())),
              (y = r.useState([])),
              (Z = (C = (0, p.Z)(y, 2))[0]),
              (S = C[1]),
              (w = (0, r.useRef)(0)),
              (k = (0, r.useRef)(!1)),
              (x = function () {
                k.current || u({});
              }),
              (N = (0, r.useCallback)(function (e, t) {
                var n = eA(t);
                g.current.set(n, e), s.current.set(e, n), (w.current += 1);
                var r = w.current;
                Promise.resolve().then(function () {
                  r === w.current && x();
                });
              }, [])),
              (_ = (0, r.useCallback)(function (e, t) {
                var n = eA(t);
                g.current.delete(n), s.current.delete(e);
              }, [])),
              (R = (0, r.useCallback)(function (e) {
                S(e);
              }, [])),
              (I = (0, r.useCallback)(
                function (e, t) {
                  var n = (s.current.get(e) || '').split(eL);
                  return t && Z.includes(n[0]) && n.unshift(eK), n;
                },
                [Z],
              )),
              (M = (0, r.useCallback)(
                function (e, t) {
                  return e.some(function (e) {
                    return I(e, !0).includes(t);
                  });
                },
                [I],
              )),
              (P = (0, r.useCallback)(function (e) {
                var t = ''.concat(s.current.get(e)).concat(eL),
                  n = new Set();
                return (
                  (0, E.Z)(g.current.keys()).forEach(function (e) {
                    e.startsWith(t) && n.add(g.current.get(e));
                  }),
                  n
                );
              }, [])),
              r.useEffect(function () {
                return function () {
                  k.current = !0;
                };
              }, []),
              {
                registerPath: N,
                unregisterPath: _,
                refreshOverflowKeys: R,
                isSubPathKey: M,
                getKeyPath: I,
                getKeys: function () {
                  var e = (0, E.Z)(s.current.keys());
                  return Z.length && e.push(eK), e;
                },
                getSubPathKeys: P,
              }),
            tz = tD.registerPath,
            tB = tD.unregisterPath,
            tU = tD.refreshOverflowKeys,
            tW = tD.isSubPathKey,
            tF = tD.getKeyPath,
            tH = tD.getKeys,
            tj = tD.getSubPathKeys,
            tG = r.useMemo(
              function () {
                return { registerPath: tz, unregisterPath: tB };
              },
              [tz, tB],
            ),
            tX = r.useMemo(
              function () {
                return { isSubPathKey: tW };
              },
              [tW],
            );
          r.useEffect(
            function () {
              tU(
                tK
                  ? th
                  : e5.slice(tL + 1).map(function (e) {
                      return e.key;
                    }),
              );
            },
            [tL, tK],
          );
          var tV = (0, h.Z)(ec || (es && (null === (K = e5[0]) || void 0 === K ? void 0 : K.key)), { value: ec }),
            tY = (0, p.Z)(tV, 2),
            tQ = tY[0],
            tq = tY[1],
            tJ = eD(function (e) {
              tq(e);
            }),
            t0 = eD(function () {
              tq(void 0);
            });
          (0, r.useImperativeHandle)(t, function () {
            return {
              list: tn.current,
              focus: function (e) {
                var t,
                  n,
                  r = eT(tH(), tr),
                  o = r.elements,
                  a = r.key2element,
                  i = r.element2key,
                  l = eP(tn.current, o),
                  c =
                    null != tQ
                      ? tQ
                      : l[0]
                        ? i.get(l[0])
                        : null ===
                              (t = e5.find(function (e) {
                                return !e.props.disabled;
                              })) || void 0 === t
                          ? void 0
                          : t.key,
                  u = a.get(c);
                c && u && (null == u || null === (n = u.focus) || void 0 === n || n.call(u, e));
              },
            };
          });
          var t1 = (0, h.Z)(eh || [], {
              value: eg,
              postState: function (e) {
                return Array.isArray(e) ? e : null == e ? th : [e];
              },
            }),
            t2 = (0, p.Z)(t1, 2),
            t6 = t2[0],
            t7 = t2[1],
            t4 = function (e) {
              if (ef) {
                var t,
                  n = e.key,
                  r = t6.includes(n);
                t7(
                  (t = ep
                    ? r
                      ? t6.filter(function (e) {
                          return e !== n;
                        })
                      : [].concat((0, E.Z)(t6), [n])
                    : [n]),
                );
                var o = (0, v.Z)((0, v.Z)({}, e), {}, { selectedKeys: t });
                r ? null == eZ || eZ(o) : null == ey || ey(o);
              }
              !ep && tl.length && 'inline' !== tN && ts(th);
            },
            t5 = eD(function (e) {
              null == eJ || eJ(eQ(e)), t4(e);
            }),
            t9 = eD(function (e, t) {
              var n = tl.filter(function (t) {
                return t !== e;
              });
              if (t) n.push(e);
              else if ('inline' !== tN) {
                var r = tj(e);
                n = n.filter(function (e) {
                  return !r.has(e);
                });
              }
              (0, el.Z)(tl, n, !0) || ts(n, !0);
            }),
            t8 =
              ((O = function (e, t) {
                var n = null != t ? t : !tl.includes(e);
                t9(e, n);
              }),
              (T = r.useRef()),
              ((L = r.useRef()).current = tQ),
              (A = function () {
                $.Z.cancel(T.current);
              }),
              r.useEffect(function () {
                return function () {
                  A();
                };
              }, []),
              function (e) {
                var t = e.which;
                if ([].concat(eM, [eN, e_, eR, eI]).includes(t)) {
                  var n = tH(),
                    r = eT(n, tr),
                    o = r,
                    a = o.elements,
                    i = o.key2element,
                    l = o.element2key,
                    c = (function (e, t) {
                      for (var n = e || document.activeElement; n; ) {
                        if (t.has(n)) return n;
                        n = n.parentElement;
                      }
                      return null;
                    })(i.get(tQ), a),
                    u = l.get(c),
                    s = (function (e, t, n, r) {
                      var o,
                        a = 'prev',
                        i = 'next',
                        l = 'children',
                        c = 'parent';
                      if ('inline' === e && r === eN) return { inlineTrigger: !0 };
                      var u = (0, f.Z)((0, f.Z)({}, ek, a), ex, i),
                        s = (0, f.Z)((0, f.Z)((0, f.Z)((0, f.Z)({}, e$, n ? i : a), ew, n ? a : i), ex, l), eN, l),
                        d = (0, f.Z)(
                          (0, f.Z)(
                            (0, f.Z)((0, f.Z)((0, f.Z)((0, f.Z)({}, ek, a), ex, i), eN, l), e_, c),
                            e$,
                            n ? l : c,
                          ),
                          ew,
                          n ? c : l,
                        );
                      switch (
                        null ===
                          (o = {
                            inline: u,
                            horizontal: s,
                            vertical: d,
                            inlineSub: u,
                            horizontalSub: d,
                            verticalSub: d,
                          }[''.concat(e).concat(t ? '' : 'Sub')]) || void 0 === o
                          ? void 0
                          : o[r]
                      ) {
                        case a:
                          return { offset: -1, sibling: !0 };
                        case i:
                          return { offset: 1, sibling: !0 };
                        case c:
                          return { offset: -1, sibling: !1 };
                        case l:
                          return { offset: 1, sibling: !1 };
                        default:
                          return null;
                      }
                    })(tN, 1 === tF(u, !0).length, to, t);
                  if (!s && t !== eR && t !== eI) return;
                  (eM.includes(t) || [eR, eI].includes(t)) && e.preventDefault();
                  var d = function (e) {
                    if (e) {
                      var t = e,
                        n = e.querySelector('a');
                      null != n && n.getAttribute('href') && (t = n);
                      var r = l.get(e);
                      tq(r),
                        A(),
                        (T.current = (0, $.Z)(function () {
                          L.current === r && t.focus();
                        }));
                    }
                  };
                  if ([eR, eI].includes(t) || s.sibling || !c) {
                    var v,
                      p = eP(
                        (v =
                          c && 'inline' !== tN
                            ? (function (e) {
                                for (var t = e; t; ) {
                                  if (t.getAttribute('data-menu-list')) return t;
                                  t = t.parentElement;
                                }
                                return null;
                              })(c)
                            : tn.current),
                        a,
                      );
                    d(t === eR ? p[0] : t === eI ? p[p.length - 1] : eO(v, a, c, s.offset));
                  } else if (s.inlineTrigger) O(u);
                  else if (s.offset > 0)
                    O(u, !0),
                      A(),
                      (T.current = (0, $.Z)(function () {
                        r = eT(n, tr);
                        var e = c.getAttribute('aria-controls');
                        d(eO(document.getElementById(e), r.elements));
                      }, 5));
                  else if (s.offset < 0) {
                    var m = tF(u, !0),
                      b = m[m.length - 2],
                      h = i.get(b);
                    O(b, !1), d(h);
                  }
                }
                null == e1 || e1(e);
              });
          r.useEffect(function () {
            tt(!0);
          }, []);
          var t3 = r.useMemo(
              function () {
                return { _internalRenderMenuItem: e2, _internalRenderSubMenuItem: e7 };
              },
              [e2, e7],
            ),
            ne =
              'horizontal' !== tN || ee
                ? e5
                : e5.map(function (e, t) {
                    return r.createElement(em, { key: e.key, overflowDisabled: t > tL }, e);
                  }),
            nt = r.createElement(
              ei,
              (0, a.Z)(
                {
                  id: X,
                  ref: tn,
                  prefixCls: ''.concat(z, '-overflow'),
                  component: 'ul',
                  itemComponent: e6,
                  className: d()(
                    z,
                    ''.concat(z, '-root'),
                    ''.concat(z, '-').concat(tN),
                    W,
                    (0, f.Z)((0, f.Z)({}, ''.concat(z, '-inline-collapsed'), tM), ''.concat(z, '-rtl'), to),
                    B,
                  ),
                  dir: G,
                  style: U,
                  role: 'menu',
                  tabIndex: void 0 === F ? 0 : F,
                  data: ne,
                  renderRawItem: function (e) {
                    return e;
                  },
                  renderRawRest: function (e) {
                    var t = e.length,
                      n = t ? e5.slice(-t) : null;
                    return r.createElement(
                      tu,
                      { eventKey: eK, title: eV, disabled: tK, internalPopupClose: 0 === t, popupClassName: eY },
                      n,
                    );
                  },
                  maxCount: 'horizontal' !== tN || ee ? ei.INVALIDATE : ei.RESPONSIVE,
                  ssr: 'full',
                  'data-menu-list': !0,
                  onVisibleChange: function (e) {
                    tA(e);
                  },
                  onKeyDown: t8,
                },
                e4,
              ),
            );
          return r.createElement(
            eC.Provider,
            { value: t3 },
            r.createElement(
              eu.Provider,
              { value: tr },
              r.createElement(
                em,
                {
                  prefixCls: z,
                  rootClassName: B,
                  mode: tN,
                  openKeys: tl,
                  rtl: to,
                  disabled: J,
                  motion: te ? eU : null,
                  defaultMotions: te ? eW : null,
                  activeKey: tQ,
                  onActive: tJ,
                  onInactive: t0,
                  selectedKeys: t6,
                  inlineIndent: void 0 === eS ? 24 : eS,
                  subMenuOpenDelay: void 0 === et ? 0.1 : et,
                  subMenuCloseDelay: void 0 === en ? 0.1 : en,
                  forceSubMenuRender: er,
                  builtinPlacements: eH,
                  triggerSubMenuAction: void 0 === eF ? 'hover' : eF,
                  getPopupContainer: eq,
                  itemIcon: ej,
                  expandIcon: eG,
                  onItemClick: t5,
                  onOpenChange: t9,
                },
                r.createElement(eE.Provider, { value: tX }, nt),
                r.createElement(
                  'div',
                  { style: { display: 'none' }, 'aria-hidden': !0 },
                  r.createElement(eb.Provider, { value: tG }, e5),
                ),
              ),
            ),
          );
        });
      (tg.Item = e6), (tg.SubMenu = tu), (tg.ItemGroup = tv), (tg.Divider = tp);
      var ty = r.forwardRef(function (e, t) {
          var n = e.prefixCls,
            o = e.id,
            a = e.tabs,
            i = e.locale,
            l = e.mobile,
            c = e.moreIcon,
            u = e.moreTransitionName,
            s = e.style,
            v = e.className,
            m = e.editable,
            b = e.tabBarGutter,
            h = e.rtl,
            g = e.removeAriaLabel,
            y = e.onTabClick,
            E = e.getPopupContainer,
            C = e.popupClassName,
            Z = (0, r.useState)(!1),
            S = (0, p.Z)(Z, 2),
            $ = S[0],
            w = S[1],
            k = (0, r.useState)(null),
            x = (0, p.Z)(k, 2),
            N = x[0],
            _ = x[1],
            R = ''.concat(o, '-more-popup'),
            I = ''.concat(n, '-dropdown'),
            M = null !== N ? ''.concat(R, '-').concat(N) : null,
            T = null == i ? void 0 : i.dropdownAriaLabel,
            L = r.createElement(
              tg,
              {
                onClick: function (e) {
                  y(e.key, e.domEvent), w(!1);
                },
                prefixCls: ''.concat(I, '-menu'),
                id: R,
                tabIndex: -1,
                role: 'listbox',
                'aria-activedescendant': M,
                selectedKeys: [N],
                'aria-label': void 0 !== T ? T : 'expanded dropdown',
              },
              a.map(function (e) {
                var t = e.closable,
                  n = e.disabled,
                  a = e.closeIcon,
                  i = e.key,
                  l = e.label,
                  c = P(t, a, m, n);
                return r.createElement(
                  e6,
                  {
                    key: i,
                    id: ''.concat(R, '-').concat(i),
                    role: 'option',
                    'aria-controls': o && ''.concat(o, '-panel-').concat(i),
                    disabled: n,
                  },
                  r.createElement('span', null, l),
                  c &&
                    r.createElement(
                      'button',
                      {
                        type: 'button',
                        'aria-label': g || 'remove',
                        tabIndex: 0,
                        className: ''.concat(I, '-menu-item-remove'),
                        onClick: function (e) {
                          e.stopPropagation(),
                            e.preventDefault(),
                            e.stopPropagation(),
                            m.onEdit('remove', { key: i, event: e });
                        },
                      },
                      a || m.removeIcon || '\xd7',
                    ),
                );
              }),
            );
          function K(e) {
            for (
              var t = a.filter(function (e) {
                  return !e.disabled;
                }),
                n =
                  t.findIndex(function (e) {
                    return e.key === N;
                  }) || 0,
                r = t.length,
                o = 0;
              o < r;
              o += 1
            ) {
              var i = t[(n = (n + e + r) % r)];
              if (!i.disabled) {
                _(i.key);
                return;
              }
            }
          }
          (0, r.useEffect)(
            function () {
              var e = document.getElementById(M);
              e && e.scrollIntoView && e.scrollIntoView(!1);
            },
            [N],
          ),
            (0, r.useEffect)(
              function () {
                $ || _(null);
              },
              [$],
            );
          var D = (0, f.Z)({}, h ? 'marginRight' : 'marginLeft', b);
          a.length || ((D.visibility = 'hidden'), (D.order = 1));
          var z = d()((0, f.Z)({}, ''.concat(I, '-rtl'), h)),
            B = l
              ? null
              : r.createElement(
                  H,
                  {
                    prefixCls: I,
                    overlay: L,
                    trigger: ['hover'],
                    visible: !!a.length && $,
                    transitionName: u,
                    onVisibleChange: w,
                    overlayClassName: d()(z, C),
                    mouseEnterDelay: 0.1,
                    mouseLeaveDelay: 0.1,
                    getPopupContainer: E,
                  },
                  r.createElement(
                    'button',
                    {
                      type: 'button',
                      className: ''.concat(n, '-nav-more'),
                      style: D,
                      tabIndex: -1,
                      'aria-hidden': 'true',
                      'aria-haspopup': 'listbox',
                      'aria-controls': R,
                      id: ''.concat(o, '-more'),
                      'aria-expanded': $,
                      onKeyDown: function (e) {
                        var t = e.which;
                        if (!$) {
                          [A.Z.DOWN, A.Z.SPACE, A.Z.ENTER].includes(t) && (w(!0), e.preventDefault());
                          return;
                        }
                        switch (t) {
                          case A.Z.UP:
                            K(-1), e.preventDefault();
                            break;
                          case A.Z.DOWN:
                            K(1), e.preventDefault();
                            break;
                          case A.Z.ESC:
                            w(!1);
                            break;
                          case A.Z.SPACE:
                          case A.Z.ENTER:
                            null !== N && y(N, e);
                        }
                      },
                    },
                    void 0 === c ? 'More' : c,
                  ),
                );
          return r.createElement(
            'div',
            { className: d()(''.concat(n, '-nav-operations'), v), style: s, ref: t },
            B,
            r.createElement(O, { prefixCls: n, locale: i, editable: m }),
          );
        }),
        tE = r.memo(ty, function (e, t) {
          return t.tabMoving;
        }),
        tC = function (e) {
          var t = e.prefixCls,
            n = e.id,
            o = e.active,
            a = e.tab,
            i = a.key,
            l = a.label,
            c = a.disabled,
            u = a.closeIcon,
            s = a.icon,
            v = e.closable,
            p = e.renderWrapper,
            m = e.removeAriaLabel,
            b = e.editable,
            h = e.onClick,
            g = e.onFocus,
            y = e.style,
            E = ''.concat(t, '-tab'),
            C = P(v, u, b, c);
          function Z(e) {
            c || h(e);
          }
          var S = r.useMemo(
              function () {
                return s && 'string' == typeof l ? r.createElement('span', null, l) : l;
              },
              [l, s],
            ),
            $ = r.createElement(
              'div',
              {
                key: i,
                'data-node-key': M(i),
                className: d()(
                  E,
                  (0, f.Z)(
                    (0, f.Z)((0, f.Z)({}, ''.concat(E, '-with-remove'), C), ''.concat(E, '-active'), o),
                    ''.concat(E, '-disabled'),
                    c,
                  ),
                ),
                style: y,
                onClick: Z,
              },
              r.createElement(
                'div',
                {
                  role: 'tab',
                  'aria-selected': o,
                  id: n && ''.concat(n, '-tab-').concat(i),
                  className: ''.concat(E, '-btn'),
                  'aria-controls': n && ''.concat(n, '-panel-').concat(i),
                  'aria-disabled': c,
                  tabIndex: c ? null : 0,
                  onClick: function (e) {
                    e.stopPropagation(), Z(e);
                  },
                  onKeyDown: function (e) {
                    [A.Z.SPACE, A.Z.ENTER].includes(e.which) && (e.preventDefault(), Z(e));
                  },
                  onFocus: g,
                },
                s && r.createElement('span', { className: ''.concat(E, '-icon') }, s),
                l && S,
              ),
              C &&
                r.createElement(
                  'button',
                  {
                    type: 'button',
                    'aria-label': m || 'remove',
                    tabIndex: 0,
                    className: ''.concat(E, '-remove'),
                    onClick: function (e) {
                      e.stopPropagation(),
                        e.preventDefault(),
                        e.stopPropagation(),
                        b.onEdit('remove', { key: i, event: e });
                    },
                  },
                  u || b.removeIcon || '\xd7',
                ),
            );
          return p ? p($) : $;
        },
        tZ = function (e, t) {
          var n = e.offsetWidth,
            r = e.offsetHeight,
            o = e.offsetTop,
            a = e.offsetLeft,
            i = e.getBoundingClientRect(),
            l = i.width,
            c = i.height,
            u = i.x,
            s = i.y;
          return 1 > Math.abs(l - n) ? [l, c, u - t.x, s - t.y] : [n, r, a, o];
        },
        tS = function (e) {
          var t = e.current || {},
            n = t.offsetWidth,
            r = void 0 === n ? 0 : n,
            o = t.offsetHeight;
          if (e.current) {
            var a = e.current.getBoundingClientRect(),
              i = a.width,
              l = a.height;
            if (1 > Math.abs(i - r)) return [i, l];
          }
          return [r, void 0 === o ? 0 : o];
        },
        t$ = function (e, t) {
          return e[t ? 0 : 1];
        },
        tw = r.forwardRef(function (e, t) {
          var n,
            o,
            i,
            l,
            c,
            u,
            s,
            m,
            b,
            h,
            g,
            $,
            N,
            P,
            L,
            A,
            K,
            D,
            z,
            B,
            U,
            W,
            F,
            H,
            j,
            G,
            X,
            V,
            Y,
            Q,
            q,
            J,
            ee,
            et,
            en,
            er,
            eo,
            ea,
            ei,
            el = e.className,
            ec = e.style,
            eu = e.id,
            es = e.animated,
            ed = e.activeKey,
            ef = e.rtl,
            ev = e.extra,
            ep = e.editable,
            em = e.locale,
            eb = e.tabPosition,
            eh = e.tabBarGutter,
            eg = e.children,
            ey = e.onTabClick,
            eE = e.onTabScroll,
            eC = e.indicator,
            eZ = r.useContext(y),
            eS = eZ.prefixCls,
            e$ = eZ.tabs,
            ew = (0, r.useRef)(null),
            ek = (0, r.useRef)(null),
            ex = (0, r.useRef)(null),
            eN = (0, r.useRef)(null),
            e_ = (0, r.useRef)(null),
            eR = (0, r.useRef)(null),
            eI = (0, r.useRef)(null),
            eM = 'top' === eb || 'bottom' === eb,
            eP = x(0, function (e, t) {
              eM && eE && eE({ direction: e > t ? 'left' : 'right' });
            }),
            eO = (0, p.Z)(eP, 2),
            eT = eO[0],
            eL = eO[1],
            eA = x(0, function (e, t) {
              !eM && eE && eE({ direction: e > t ? 'top' : 'bottom' });
            }),
            eK = (0, p.Z)(eA, 2),
            eD = eK[0],
            ez = eK[1],
            eB = (0, r.useState)([0, 0]),
            eU = (0, p.Z)(eB, 2),
            eW = eU[0],
            eF = eU[1],
            eH = (0, r.useState)([0, 0]),
            ej = (0, p.Z)(eH, 2),
            eG = ej[0],
            eX = ej[1],
            eV = (0, r.useState)([0, 0]),
            eY = (0, p.Z)(eV, 2),
            eQ = eY[0],
            eq = eY[1],
            eJ = (0, r.useState)([0, 0]),
            e0 = (0, p.Z)(eJ, 2),
            e1 = e0[0],
            e2 = e0[1],
            e6 =
              ((n = new Map()),
              (o = (0, r.useRef)([])),
              (i = (0, r.useState)({})),
              (l = (0, p.Z)(i, 2)[1]),
              (c = (0, r.useRef)('function' == typeof n ? n() : n)),
              (u = _(function () {
                var e = c.current;
                o.current.forEach(function (t) {
                  e = t(e);
                }),
                  (o.current = []),
                  (c.current = e),
                  l({});
              })),
              [
                c.current,
                function (e) {
                  o.current.push(e), u();
                },
              ]),
            e7 = (0, p.Z)(e6, 2),
            e4 = e7[0],
            e5 = e7[1],
            e9 =
              ((s = eG[0]),
              (0, r.useMemo)(
                function () {
                  for (
                    var e = new Map(),
                      t = e4.get(null === (o = e$[0]) || void 0 === o ? void 0 : o.key) || k,
                      n = t.left + t.width,
                      r = 0;
                    r < e$.length;
                    r += 1
                  ) {
                    var o,
                      a,
                      i = e$[r].key,
                      l = e4.get(i);
                    l || (l = e4.get(null === (a = e$[r - 1]) || void 0 === a ? void 0 : a.key) || k);
                    var c = e.get(i) || (0, v.Z)({}, l);
                    (c.right = n - c.left - c.width), e.set(i, c);
                  }
                  return e;
                },
                [
                  e$
                    .map(function (e) {
                      return e.key;
                    })
                    .join('_'),
                  e4,
                  s,
                ],
              )),
            e8 = t$(eW, eM),
            e3 = t$(eG, eM),
            te = t$(eQ, eM),
            tt = t$(e1, eM),
            tn = e8 < e3 + te,
            tr = tn ? e8 - tt : e8 - te,
            to = ''.concat(eS, '-nav-operations-hidden'),
            ta = 0,
            ti = 0;
          function tl(e) {
            return e < ta ? ta : e > ti ? ti : e;
          }
          eM && ef ? ((ta = 0), (ti = Math.max(0, e3 - tr))) : ((ta = Math.min(0, tr - e3)), (ti = 0));
          var tc = (0, r.useRef)(null),
            tu = (0, r.useState)(),
            ts = (0, p.Z)(tu, 2),
            td = ts[0],
            tf = ts[1];
          function tv() {
            tf(Date.now());
          }
          function tp() {
            tc.current && clearTimeout(tc.current);
          }
          (m = function (e, t) {
            function n(e, t) {
              e(function (e) {
                return tl(e + t);
              });
            }
            return !!tn && (eM ? n(eL, e) : n(ez, t), tp(), tv(), !0);
          }),
            (b = (0, r.useState)()),
            (g = (h = (0, p.Z)(b, 2))[0]),
            ($ = h[1]),
            (N = (0, r.useState)(0)),
            (L = (P = (0, p.Z)(N, 2))[0]),
            (A = P[1]),
            (K = (0, r.useState)(0)),
            (z = (D = (0, p.Z)(K, 2))[0]),
            (B = D[1]),
            (U = (0, r.useState)()),
            (F = (W = (0, p.Z)(U, 2))[0]),
            (H = W[1]),
            (j = (0, r.useRef)()),
            (G = (0, r.useRef)()),
            ((X = (0, r.useRef)(null)).current = {
              onTouchStart: function (e) {
                var t = e.touches[0];
                $({ x: t.screenX, y: t.screenY }), window.clearInterval(j.current);
              },
              onTouchMove: function (e) {
                if (g) {
                  e.preventDefault();
                  var t = e.touches[0],
                    n = t.screenX,
                    r = t.screenY;
                  $({ x: n, y: r });
                  var o = n - g.x,
                    a = r - g.y;
                  m(o, a);
                  var i = Date.now();
                  A(i), B(i - L), H({ x: o, y: a });
                }
              },
              onTouchEnd: function () {
                if (g && ($(null), H(null), F)) {
                  var e = F.x / z,
                    t = F.y / z;
                  if (!(0.1 > Math.max(Math.abs(e), Math.abs(t)))) {
                    var n = e,
                      r = t;
                    j.current = window.setInterval(function () {
                      if (0.01 > Math.abs(n) && 0.01 > Math.abs(r)) {
                        window.clearInterval(j.current);
                        return;
                      }
                      (n *= 0.9046104802746175), (r *= 0.9046104802746175), m(20 * n, 20 * r);
                    }, 20);
                  }
                }
              },
              onWheel: function (e) {
                var t = e.deltaX,
                  n = e.deltaY,
                  r = 0,
                  o = Math.abs(t),
                  a = Math.abs(n);
                o === a
                  ? (r = 'x' === G.current ? t : n)
                  : o > a
                    ? ((r = t), (G.current = 'x'))
                    : ((r = n), (G.current = 'y')),
                  m(-r, -r) && e.preventDefault();
              },
            }),
            r.useEffect(function () {
              function e(e) {
                X.current.onTouchMove(e);
              }
              function t(e) {
                X.current.onTouchEnd(e);
              }
              return (
                document.addEventListener('touchmove', e, { passive: !1 }),
                document.addEventListener('touchend', t, { passive: !1 }),
                eN.current.addEventListener(
                  'touchstart',
                  function (e) {
                    X.current.onTouchStart(e);
                  },
                  { passive: !1 },
                ),
                eN.current.addEventListener('wheel', function (e) {
                  X.current.onWheel(e);
                }),
                function () {
                  document.removeEventListener('touchmove', e), document.removeEventListener('touchend', t);
                }
              );
            }, []),
            (0, r.useEffect)(
              function () {
                return (
                  tp(),
                  td &&
                    (tc.current = setTimeout(function () {
                      tf(0);
                    }, 100)),
                  tp
                );
              },
              [td],
            );
          var tm =
              ((V = eM ? eT : eD),
              (ee = (Y = (0, v.Z)((0, v.Z)({}, e), {}, { tabs: e$ })).tabs),
              (et = Y.tabPosition),
              (en = Y.rtl),
              ['top', 'bottom'].includes(et)
                ? ((Q = 'width'), (q = en ? 'right' : 'left'), (J = Math.abs(V)))
                : ((Q = 'height'), (q = 'top'), (J = -V)),
              (0, r.useMemo)(
                function () {
                  if (!ee.length) return [0, 0];
                  for (var e = ee.length, t = e, n = 0; n < e; n += 1) {
                    var r = e9.get(ee[n].key) || R;
                    if (r[q] + r[Q] > J + tr) {
                      t = n - 1;
                      break;
                    }
                  }
                  for (var o = 0, a = e - 1; a >= 0; a -= 1)
                    if ((e9.get(ee[a].key) || R)[q] < J) {
                      o = a + 1;
                      break;
                    }
                  return o >= t ? [0, 0] : [o, t];
                },
                [
                  e9,
                  tr,
                  e3,
                  te,
                  tt,
                  J,
                  et,
                  ee
                    .map(function (e) {
                      return e.key;
                    })
                    .join('_'),
                  en,
                ],
              )),
            tb = (0, p.Z)(tm, 2),
            th = tb[0],
            tg = tb[1],
            ty = (0, Z.Z)(function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed,
                t = e9.get(e) || { width: 0, height: 0, left: 0, right: 0, top: 0 };
              if (eM) {
                var n = eT;
                ef
                  ? t.right < eT
                    ? (n = t.right)
                    : t.right + t.width > eT + tr && (n = t.right + t.width - tr)
                  : t.left < -eT
                    ? (n = -t.left)
                    : t.left + t.width > -eT + tr && (n = -(t.left + t.width - tr)),
                  ez(0),
                  eL(tl(n));
              } else {
                var r = eD;
                t.top < -eD ? (r = -t.top) : t.top + t.height > -eD + tr && (r = -(t.top + t.height - tr)),
                  eL(0),
                  ez(tl(r));
              }
            }),
            tw = {};
          'top' === eb || 'bottom' === eb ? (tw[ef ? 'marginRight' : 'marginLeft'] = eh) : (tw.marginTop = eh);
          var tk = e$.map(function (e, t) {
              var n = e.key;
              return r.createElement(tC, {
                id: eu,
                prefixCls: eS,
                key: n,
                tab: e,
                style: 0 === t ? void 0 : tw,
                closable: e.closable,
                editable: ep,
                active: n === ed,
                renderWrapper: eg,
                removeAriaLabel: null == em ? void 0 : em.removeAriaLabel,
                onClick: function (e) {
                  ey(n, e);
                },
                onFocus: function () {
                  ty(n), tv(), eN.current && (ef || (eN.current.scrollLeft = 0), (eN.current.scrollTop = 0));
                },
              });
            }),
            tx = function () {
              return e5(function () {
                var e,
                  t = new Map(),
                  n = null === (e = e_.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                return (
                  e$.forEach(function (e) {
                    var r,
                      o = e.key,
                      a =
                        null === (r = e_.current) || void 0 === r
                          ? void 0
                          : r.querySelector('[data-node-key="'.concat(M(o), '"]'));
                    if (a) {
                      var i = tZ(a, n),
                        l = (0, p.Z)(i, 4),
                        c = l[0],
                        u = l[1],
                        s = l[2],
                        d = l[3];
                      t.set(o, { width: c, height: u, left: s, top: d });
                    }
                  }),
                  t
                );
              });
            };
          (0, r.useEffect)(
            function () {
              tx();
            },
            [
              e$
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
            ],
          );
          var tN = _(function () {
              var e = tS(ew),
                t = tS(ek),
                n = tS(ex);
              eF([e[0] - t[0] - n[0], e[1] - t[1] - n[1]]);
              var r = tS(eI);
              eq(r), e2(tS(eR));
              var o = tS(e_);
              eX([o[0] - r[0], o[1] - r[1]]), tx();
            }),
            t_ = e$.slice(0, th),
            tR = e$.slice(tg + 1),
            tI = [].concat((0, E.Z)(t_), (0, E.Z)(tR)),
            tM = e9.get(ed),
            tP = w({ activeTabOffset: tM, horizontal: eM, indicator: eC, rtl: ef }).style;
          (0, r.useEffect)(
            function () {
              ty();
            },
            [ed, ta, ti, I(tM), I(e9), eM],
          ),
            (0, r.useEffect)(
              function () {
                tN();
              },
              [ef],
            );
          var tO = !!tI.length,
            tT = ''.concat(eS, '-nav-wrap');
          return (
            eM
              ? ef
                ? ((eo = eT > 0), (er = eT !== ti))
                : ((er = eT < 0), (eo = eT !== ta))
              : ((ea = eD < 0), (ei = eD !== ta)),
            r.createElement(
              C.Z,
              { onResize: tN },
              r.createElement(
                'div',
                {
                  ref: (0, S.x1)(t, ew),
                  role: 'tablist',
                  className: d()(''.concat(eS, '-nav'), el),
                  style: ec,
                  onKeyDown: function () {
                    tv();
                  },
                },
                r.createElement(T, { ref: ek, position: 'left', extra: ev, prefixCls: eS }),
                r.createElement(
                  C.Z,
                  { onResize: tN },
                  r.createElement(
                    'div',
                    {
                      className: d()(
                        tT,
                        (0, f.Z)(
                          (0, f.Z)(
                            (0, f.Z)((0, f.Z)({}, ''.concat(tT, '-ping-left'), er), ''.concat(tT, '-ping-right'), eo),
                            ''.concat(tT, '-ping-top'),
                            ea,
                          ),
                          ''.concat(tT, '-ping-bottom'),
                          ei,
                        ),
                      ),
                      ref: eN,
                    },
                    r.createElement(
                      C.Z,
                      { onResize: tN },
                      r.createElement(
                        'div',
                        {
                          ref: e_,
                          className: ''.concat(eS, '-nav-list'),
                          style: {
                            transform: 'translate('.concat(eT, 'px, ').concat(eD, 'px)'),
                            transition: td ? 'none' : void 0,
                          },
                        },
                        tk,
                        r.createElement(O, {
                          ref: eI,
                          prefixCls: eS,
                          locale: em,
                          editable: ep,
                          style: (0, v.Z)(
                            (0, v.Z)({}, 0 === tk.length ? void 0 : tw),
                            {},
                            { visibility: tO ? 'hidden' : null },
                          ),
                        }),
                        r.createElement('div', {
                          className: d()(
                            ''.concat(eS, '-ink-bar'),
                            (0, f.Z)({}, ''.concat(eS, '-ink-bar-animated'), es.inkBar),
                          ),
                          style: tP,
                        }),
                      ),
                    ),
                  ),
                ),
                r.createElement(
                  tE,
                  (0, a.Z)({}, e, {
                    removeAriaLabel: null == em ? void 0 : em.removeAriaLabel,
                    ref: eR,
                    prefixCls: eS,
                    tabs: tI,
                    className: !tO && to,
                    tabMoving: !!td,
                  }),
                ),
                r.createElement(T, { ref: ex, position: 'right', extra: ev, prefixCls: eS }),
              ),
            )
          );
        }),
        tk = r.forwardRef(function (e, t) {
          var n = e.prefixCls,
            o = e.className,
            a = e.style,
            i = e.id,
            l = e.active,
            c = e.tabKey,
            u = e.children;
          return r.createElement(
            'div',
            {
              id: i && ''.concat(i, '-panel-').concat(c),
              role: 'tabpanel',
              tabIndex: l ? 0 : -1,
              'aria-labelledby': i && ''.concat(i, '-tab-').concat(c),
              'aria-hidden': !l,
              style: a,
              className: d()(n, l && ''.concat(n, '-active'), o),
              ref: t,
            },
            u,
          );
        }),
        tx = ['renderTabBar'],
        tN = ['label', 'key'],
        t_ = function (e) {
          var t = e.renderTabBar,
            n = (0, b.Z)(e, tx),
            o = r.useContext(y).tabs;
          return t
            ? t(
                (0, v.Z)(
                  (0, v.Z)({}, n),
                  {},
                  {
                    panes: o.map(function (e) {
                      var t = e.label,
                        n = e.key,
                        o = (0, b.Z)(e, tN);
                      return r.createElement(tk, (0, a.Z)({ tab: t, key: n, tabKey: n }, o));
                    }),
                  },
                ),
                tw,
              )
            : r.createElement(tw, n);
        },
        tR = ['key', 'forceRender', 'style', 'className', 'destroyInactiveTabPane'],
        tI = function (e) {
          var t = e.id,
            n = e.activeKey,
            o = e.animated,
            i = e.tabPosition,
            l = e.destroyInactiveTabPane,
            c = r.useContext(y),
            u = c.prefixCls,
            s = c.tabs,
            p = o.tabPane,
            m = ''.concat(u, '-tabpane');
          return r.createElement(
            'div',
            { className: d()(''.concat(u, '-content-holder')) },
            r.createElement(
              'div',
              {
                className: d()(
                  ''.concat(u, '-content'),
                  ''.concat(u, '-content-').concat(i),
                  (0, f.Z)({}, ''.concat(u, '-content-animated'), p),
                ),
              },
              s.map(function (e) {
                var i = e.key,
                  c = e.forceRender,
                  u = e.style,
                  s = e.className,
                  f = e.destroyInactiveTabPane,
                  h = (0, b.Z)(e, tR),
                  g = i === n;
                return r.createElement(
                  to.ZP,
                  (0, a.Z)(
                    {
                      key: i,
                      visible: g,
                      forceRender: c,
                      removeOnLeave: !!(l || f),
                      leavedClassName: ''.concat(m, '-hidden'),
                    },
                    o.tabPaneMotion,
                  ),
                  function (e, n) {
                    var o = e.style,
                      l = e.className;
                    return r.createElement(
                      tk,
                      (0, a.Z)({}, h, {
                        prefixCls: m,
                        id: t,
                        tabKey: i,
                        animated: p,
                        active: g,
                        style: (0, v.Z)((0, v.Z)({}, u), o),
                        className: d()(s, l),
                        ref: n,
                      }),
                    );
                  },
                );
              }),
            ),
          );
        },
        tM = [
          'id',
          'prefixCls',
          'className',
          'items',
          'direction',
          'activeKey',
          'defaultActiveKey',
          'editable',
          'animated',
          'tabPosition',
          'tabBarGutter',
          'tabBarStyle',
          'tabBarExtraContent',
          'locale',
          'moreIcon',
          'moreTransitionName',
          'destroyInactiveTabPane',
          'renderTabBar',
          'onChange',
          'onTabClick',
          'onTabScroll',
          'getPopupContainer',
          'popupClassName',
          'indicator',
        ],
        tP = 0,
        tO = r.forwardRef(function (e, t) {
          var n = e.id,
            o = e.prefixCls,
            i = void 0 === o ? 'rc-tabs' : o,
            l = e.className,
            c = e.items,
            u = e.direction,
            s = e.activeKey,
            E = e.defaultActiveKey,
            C = e.editable,
            Z = e.animated,
            S = e.tabPosition,
            $ = void 0 === S ? 'top' : S,
            w = e.tabBarGutter,
            k = e.tabBarStyle,
            x = e.tabBarExtraContent,
            N = e.locale,
            _ = e.moreIcon,
            R = e.moreTransitionName,
            I = e.destroyInactiveTabPane,
            M = e.renderTabBar,
            P = e.onChange,
            O = e.onTabClick,
            T = e.onTabScroll,
            L = e.getPopupContainer,
            A = e.popupClassName,
            K = e.indicator,
            D = (0, b.Z)(e, tM),
            z = r.useMemo(
              function () {
                return (c || []).filter(function (e) {
                  return e && 'object' === (0, m.Z)(e) && 'key' in e;
                });
              },
              [c],
            ),
            B = 'rtl' === u,
            U = (function () {
              var e,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { inkBar: !0, tabPane: !1 };
              return (
                (e =
                  !1 === t
                    ? { inkBar: !1, tabPane: !1 }
                    : !0 === t
                      ? { inkBar: !0, tabPane: !1 }
                      : (0, v.Z)({ inkBar: !0 }, 'object' === (0, m.Z)(t) ? t : {})).tabPaneMotion &&
                  void 0 === e.tabPane &&
                  (e.tabPane = !0),
                !e.tabPaneMotion && e.tabPane && (e.tabPane = !1),
                e
              );
            })(Z),
            W = (0, r.useState)(!1),
            F = (0, p.Z)(W, 2),
            H = F[0],
            j = F[1];
          (0, r.useEffect)(function () {
            j((0, g.Z)());
          }, []);
          var G = (0, h.Z)(
              function () {
                var e;
                return null === (e = z[0]) || void 0 === e ? void 0 : e.key;
              },
              { value: s, defaultValue: E },
            ),
            X = (0, p.Z)(G, 2),
            V = X[0],
            Y = X[1],
            Q = (0, r.useState)(function () {
              return z.findIndex(function (e) {
                return e.key === V;
              });
            }),
            q = (0, p.Z)(Q, 2),
            J = q[0],
            ee = q[1];
          (0, r.useEffect)(
            function () {
              var e,
                t = z.findIndex(function (e) {
                  return e.key === V;
                });
              -1 === t &&
                ((t = Math.max(0, Math.min(J, z.length - 1))), Y(null === (e = z[t]) || void 0 === e ? void 0 : e.key)),
                ee(t);
            },
            [
              z
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
              V,
              J,
            ],
          );
          var et = (0, h.Z)(null, { value: n }),
            en = (0, p.Z)(et, 2),
            er = en[0],
            eo = en[1];
          (0, r.useEffect)(function () {
            n || (eo('rc-tabs-'.concat(tP)), (tP += 1));
          }, []);
          var ea = { id: er, activeKey: V, animated: U, tabPosition: $, rtl: B, mobile: H },
            ei = (0, v.Z)(
              (0, v.Z)({}, ea),
              {},
              {
                editable: C,
                locale: N,
                moreIcon: _,
                moreTransitionName: R,
                tabBarGutter: w,
                onTabClick: function (e, t) {
                  null == O || O(e, t);
                  var n = e !== V;
                  Y(e), n && (null == P || P(e));
                },
                onTabScroll: T,
                extra: x,
                style: k,
                panes: null,
                getPopupContainer: L,
                popupClassName: A,
                indicator: K,
              },
            );
          return r.createElement(
            y.Provider,
            { value: { tabs: z, prefixCls: i } },
            r.createElement(
              'div',
              (0, a.Z)(
                {
                  ref: t,
                  id: n,
                  className: d()(
                    i,
                    ''.concat(i, '-').concat($),
                    (0, f.Z)(
                      (0, f.Z)((0, f.Z)({}, ''.concat(i, '-mobile'), H), ''.concat(i, '-editable'), C),
                      ''.concat(i, '-rtl'),
                      B,
                    ),
                    l,
                  ),
                },
                D,
              ),
              r.createElement(t_, (0, a.Z)({}, ei, { renderTabBar: M })),
              r.createElement(tI, (0, a.Z)({ destroyInactiveTabPane: I }, ea, { animated: U })),
            ),
          );
        }),
        tT = n(19056),
        tL = n(72690),
        tA = n(4157),
        tK = n(33613);
      let tD = { motionAppear: !1, motionEnter: !0, motionLeave: !0 };
      var tz = function (e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
            for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
          return n;
        },
        tB = n(89426),
        tU = n(27734),
        tW = n(26173),
        tF = n(43744),
        tH = n(92386);
      let tj = new tB.E4('antSlideUpIn', {
          '0%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
          '100%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
        }),
        tG = new tB.E4('antSlideUpOut', {
          '0%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
          '100%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
        }),
        tX = new tB.E4('antSlideDownIn', {
          '0%': { transform: 'scaleY(0.8)', transformOrigin: '100% 100%', opacity: 0 },
          '100%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
        }),
        tV = new tB.E4('antSlideDownOut', {
          '0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
          '100%': { transform: 'scaleY(0.8)', transformOrigin: '100% 100%', opacity: 0 },
        }),
        tY = new tB.E4('antSlideLeftIn', {
          '0%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
          '100%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
        }),
        tQ = {
          'slide-up': { inKeyframes: tj, outKeyframes: tG },
          'slide-down': { inKeyframes: tX, outKeyframes: tV },
          'slide-left': {
            inKeyframes: tY,
            outKeyframes: new tB.E4('antSlideLeftOut', {
              '0%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
              '100%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
            }),
          },
          'slide-right': {
            inKeyframes: new tB.E4('antSlideRightIn', {
              '0%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
              '100%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
            }),
            outKeyframes: new tB.E4('antSlideRightOut', {
              '0%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
              '100%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
            }),
          },
        },
        tq = (e, t) => {
          let { antCls: n } = e,
            r = `${n}-${t}`,
            { inKeyframes: o, outKeyframes: a } = tQ[t];
          return [
            (0, tH.R)(r, o, a, e.motionDurationMid),
            {
              [`
      ${r}-enter,
      ${r}-appear
    `]: {
                transform: 'scale(0)',
                transformOrigin: '0% 0%',
                opacity: 0,
                animationTimingFunction: e.motionEaseOutQuint,
                '&-prepare': { transform: 'scale(1)' },
              },
              [`${r}-leave`]: { animationTimingFunction: e.motionEaseInQuint },
            },
          ];
        };
      var tJ = (e) => {
        let { componentCls: t, motionDurationSlow: n } = e;
        return [
          {
            [t]: {
              [`${t}-switch`]: {
                '&-appear, &-enter': {
                  transition: 'none',
                  '&-start': { opacity: 0 },
                  '&-active': { opacity: 1, transition: `opacity ${n}` },
                },
                '&-leave': {
                  position: 'absolute',
                  transition: 'none',
                  inset: 0,
                  '&-start': { opacity: 1 },
                  '&-active': { opacity: 0, transition: `opacity ${n}` },
                },
              },
            },
          },
          [tq(e, 'slide-up'), tq(e, 'slide-down')],
        ];
      };
      let t0 = (e) => {
          let {
            componentCls: t,
            tabsCardPadding: n,
            cardBg: r,
            cardGutter: o,
            colorBorderSecondary: a,
            itemSelectedColor: i,
          } = e;
          return {
            [`${t}-card`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                [`${t}-tab`]: {
                  margin: 0,
                  padding: n,
                  background: r,
                  border: `${(0, tB.bf)(e.lineWidth)} ${e.lineType} ${a}`,
                  transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                },
                [`${t}-tab-active`]: { color: i, background: e.colorBgContainer },
                [`${t}-ink-bar`]: { visibility: 'hidden' },
              },
              [`&${t}-top, &${t}-bottom`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab + ${t}-tab`]: { marginLeft: { _skip_check_: !0, value: (0, tB.bf)(o) } },
                },
              },
              [`&${t}-top`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab`]: { borderRadius: `${(0, tB.bf)(e.borderRadiusLG)} ${(0, tB.bf)(e.borderRadiusLG)} 0 0` },
                  [`${t}-tab-active`]: { borderBottomColor: e.colorBgContainer },
                },
              },
              [`&${t}-bottom`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab`]: { borderRadius: `0 0 ${(0, tB.bf)(e.borderRadiusLG)} ${(0, tB.bf)(e.borderRadiusLG)}` },
                  [`${t}-tab-active`]: { borderTopColor: e.colorBgContainer },
                },
              },
              [`&${t}-left, &${t}-right`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: { [`${t}-tab + ${t}-tab`]: { marginTop: (0, tB.bf)(o) } },
              },
              [`&${t}-left`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `${(0, tB.bf)(e.borderRadiusLG)} 0 0 ${(0, tB.bf)(e.borderRadiusLG)}`,
                    },
                  },
                  [`${t}-tab-active`]: { borderRightColor: { _skip_check_: !0, value: e.colorBgContainer } },
                },
              },
              [`&${t}-right`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `0 ${(0, tB.bf)(e.borderRadiusLG)} ${(0, tB.bf)(e.borderRadiusLG)} 0`,
                    },
                  },
                  [`${t}-tab-active`]: { borderLeftColor: { _skip_check_: !0, value: e.colorBgContainer } },
                },
              },
            },
          };
        },
        t1 = (e) => {
          let { componentCls: t, itemHoverColor: n, dropdownEdgeChildVerticalPadding: r } = e;
          return {
            [`${t}-dropdown`]: Object.assign(Object.assign({}, (0, tU.Wf)(e)), {
              position: 'absolute',
              top: -9999,
              left: { _skip_check_: !0, value: -9999 },
              zIndex: e.zIndexPopup,
              display: 'block',
              '&-hidden': { display: 'none' },
              [`${t}-dropdown-menu`]: {
                maxHeight: e.tabsDropdownHeight,
                margin: 0,
                padding: `${(0, tB.bf)(r)} 0`,
                overflowX: 'hidden',
                overflowY: 'auto',
                textAlign: { _skip_check_: !0, value: 'left' },
                listStyleType: 'none',
                backgroundColor: e.colorBgContainer,
                backgroundClip: 'padding-box',
                borderRadius: e.borderRadiusLG,
                outline: 'none',
                boxShadow: e.boxShadowSecondary,
                '&-item': Object.assign(Object.assign({}, tU.vS), {
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: e.tabsDropdownWidth,
                  margin: 0,
                  padding: `${(0, tB.bf)(e.paddingXXS)} ${(0, tB.bf)(e.paddingSM)}`,
                  color: e.colorText,
                  fontWeight: 'normal',
                  fontSize: e.fontSize,
                  lineHeight: e.lineHeight,
                  cursor: 'pointer',
                  transition: `all ${e.motionDurationSlow}`,
                  '> span': { flex: 1, whiteSpace: 'nowrap' },
                  '&-remove': {
                    flex: 'none',
                    marginLeft: { _skip_check_: !0, value: e.marginSM },
                    color: e.colorTextDescription,
                    fontSize: e.fontSizeSM,
                    background: 'transparent',
                    border: 0,
                    cursor: 'pointer',
                    '&:hover': { color: n },
                  },
                  '&:hover': { background: e.controlItemBgHover },
                  '&-disabled': {
                    '&, &:hover': { color: e.colorTextDisabled, background: 'transparent', cursor: 'not-allowed' },
                  },
                }),
              },
            }),
          };
        },
        t2 = (e) => {
          let {
            componentCls: t,
            margin: n,
            colorBorderSecondary: r,
            horizontalMargin: o,
            verticalItemPadding: a,
            verticalItemMargin: i,
            calc: l,
          } = e;
          return {
            [`${t}-top, ${t}-bottom`]: {
              flexDirection: 'column',
              [`> ${t}-nav, > div > ${t}-nav`]: {
                margin: o,
                '&::before': {
                  position: 'absolute',
                  right: { _skip_check_: !0, value: 0 },
                  left: { _skip_check_: !0, value: 0 },
                  borderBottom: `${(0, tB.bf)(e.lineWidth)} ${e.lineType} ${r}`,
                  content: "''",
                },
                [`${t}-ink-bar`]: {
                  height: e.lineWidthBold,
                  '&-animated': {
                    transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`,
                  },
                },
                [`${t}-nav-wrap`]: {
                  '&::before, &::after': { top: 0, bottom: 0, width: e.controlHeight },
                  '&::before': { left: { _skip_check_: !0, value: 0 }, boxShadow: e.boxShadowTabsOverflowLeft },
                  '&::after': { right: { _skip_check_: !0, value: 0 }, boxShadow: e.boxShadowTabsOverflowRight },
                  [`&${t}-nav-wrap-ping-left::before`]: { opacity: 1 },
                  [`&${t}-nav-wrap-ping-right::after`]: { opacity: 1 },
                },
              },
            },
            [`${t}-top`]: {
              [`> ${t}-nav,
        > div > ${t}-nav`]: { '&::before': { bottom: 0 }, [`${t}-ink-bar`]: { bottom: 0 } },
            },
            [`${t}-bottom`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                order: 1,
                marginTop: n,
                marginBottom: 0,
                '&::before': { top: 0 },
                [`${t}-ink-bar`]: { top: 0 },
              },
              [`> ${t}-content-holder, > div > ${t}-content-holder`]: { order: 0 },
            },
            [`${t}-left, ${t}-right`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                flexDirection: 'column',
                minWidth: l(e.controlHeight).mul(1.25).equal(),
                [`${t}-tab`]: { padding: a, textAlign: 'center' },
                [`${t}-tab + ${t}-tab`]: { margin: i },
                [`${t}-nav-wrap`]: {
                  flexDirection: 'column',
                  '&::before, &::after': {
                    right: { _skip_check_: !0, value: 0 },
                    left: { _skip_check_: !0, value: 0 },
                    height: e.controlHeight,
                  },
                  '&::before': { top: 0, boxShadow: e.boxShadowTabsOverflowTop },
                  '&::after': { bottom: 0, boxShadow: e.boxShadowTabsOverflowBottom },
                  [`&${t}-nav-wrap-ping-top::before`]: { opacity: 1 },
                  [`&${t}-nav-wrap-ping-bottom::after`]: { opacity: 1 },
                },
                [`${t}-ink-bar`]: {
                  width: e.lineWidthBold,
                  '&-animated': { transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}` },
                },
                [`${t}-nav-list, ${t}-nav-operations`]: { flex: '1 0 auto', flexDirection: 'column' },
              },
            },
            [`${t}-left`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: { [`${t}-ink-bar`]: { right: { _skip_check_: !0, value: 0 } } },
              [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
                marginLeft: { _skip_check_: !0, value: (0, tB.bf)(l(e.lineWidth).mul(-1).equal()) },
                borderLeft: { _skip_check_: !0, value: `${(0, tB.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}` },
                [`> ${t}-content > ${t}-tabpane`]: { paddingLeft: { _skip_check_: !0, value: e.paddingLG } },
              },
            },
            [`${t}-right`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                order: 1,
                [`${t}-ink-bar`]: { left: { _skip_check_: !0, value: 0 } },
              },
              [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
                order: 0,
                marginRight: { _skip_check_: !0, value: l(e.lineWidth).mul(-1).equal() },
                borderRight: { _skip_check_: !0, value: `${(0, tB.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}` },
                [`> ${t}-content > ${t}-tabpane`]: { paddingRight: { _skip_check_: !0, value: e.paddingLG } },
              },
            },
          };
        },
        t6 = (e) => {
          let {
            componentCls: t,
            cardPaddingSM: n,
            cardPaddingLG: r,
            horizontalItemPaddingSM: o,
            horizontalItemPaddingLG: a,
          } = e;
          return {
            [t]: {
              '&-small': { [`> ${t}-nav`]: { [`${t}-tab`]: { padding: o, fontSize: e.titleFontSizeSM } } },
              '&-large': { [`> ${t}-nav`]: { [`${t}-tab`]: { padding: a, fontSize: e.titleFontSizeLG } } },
            },
            [`${t}-card`]: {
              [`&${t}-small`]: {
                [`> ${t}-nav`]: { [`${t}-tab`]: { padding: n } },
                [`&${t}-bottom`]: {
                  [`> ${t}-nav ${t}-tab`]: {
                    borderRadius: `0 0 ${(0, tB.bf)(e.borderRadius)} ${(0, tB.bf)(e.borderRadius)}`,
                  },
                },
                [`&${t}-top`]: {
                  [`> ${t}-nav ${t}-tab`]: {
                    borderRadius: `${(0, tB.bf)(e.borderRadius)} ${(0, tB.bf)(e.borderRadius)} 0 0`,
                  },
                },
                [`&${t}-right`]: {
                  [`> ${t}-nav ${t}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `0 ${(0, tB.bf)(e.borderRadius)} ${(0, tB.bf)(e.borderRadius)} 0`,
                    },
                  },
                },
                [`&${t}-left`]: {
                  [`> ${t}-nav ${t}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `${(0, tB.bf)(e.borderRadius)} 0 0 ${(0, tB.bf)(e.borderRadius)}`,
                    },
                  },
                },
              },
              [`&${t}-large`]: { [`> ${t}-nav`]: { [`${t}-tab`]: { padding: r } } },
            },
          };
        },
        t7 = (e) => {
          let {
              componentCls: t,
              itemActiveColor: n,
              itemHoverColor: r,
              iconCls: o,
              tabsHorizontalItemMargin: a,
              horizontalItemPadding: i,
              itemSelectedColor: l,
              itemColor: c,
            } = e,
            u = `${t}-tab`;
          return {
            [u]: {
              position: 'relative',
              WebkitTouchCallout: 'none',
              WebkitTapHighlightColor: 'transparent',
              display: 'inline-flex',
              alignItems: 'center',
              padding: i,
              fontSize: e.titleFontSize,
              background: 'transparent',
              border: 0,
              outline: 'none',
              cursor: 'pointer',
              color: c,
              '&-btn, &-remove': Object.assign(
                { '&:focus:not(:focus-visible), &:active': { color: n } },
                (0, tU.Qy)(e),
              ),
              '&-btn': {
                outline: 'none',
                transition: 'all 0.3s',
                [`${u}-icon:not(:last-child)`]: { marginInlineEnd: e.marginSM },
              },
              '&-remove': {
                flex: 'none',
                marginRight: { _skip_check_: !0, value: e.calc(e.marginXXS).mul(-1).equal() },
                marginLeft: { _skip_check_: !0, value: e.marginXS },
                color: e.colorTextDescription,
                fontSize: e.fontSizeSM,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                transition: `all ${e.motionDurationSlow}`,
                '&:hover': { color: e.colorTextHeading },
              },
              '&:hover': { color: r },
              [`&${u}-active ${u}-btn`]: { color: l, textShadow: e.tabsActiveTextShadow },
              [`&${u}-disabled`]: { color: e.colorTextDisabled, cursor: 'not-allowed' },
              [`&${u}-disabled ${u}-btn, &${u}-disabled ${t}-remove`]: {
                '&:focus, &:active': { color: e.colorTextDisabled },
              },
              [`& ${u}-remove ${o}`]: { margin: 0 },
              [`${o}:not(:last-child)`]: { marginRight: { _skip_check_: !0, value: e.marginSM } },
            },
            [`${u} + ${u}`]: { margin: { _skip_check_: !0, value: a } },
          };
        },
        t4 = (e) => {
          let { componentCls: t, tabsHorizontalItemMarginRTL: n, iconCls: r, cardGutter: o, calc: a } = e;
          return {
            [`${t}-rtl`]: {
              direction: 'rtl',
              [`${t}-nav`]: {
                [`${t}-tab`]: {
                  margin: { _skip_check_: !0, value: n },
                  [`${t}-tab:last-of-type`]: { marginLeft: { _skip_check_: !0, value: 0 } },
                  [r]: {
                    marginRight: { _skip_check_: !0, value: 0 },
                    marginLeft: { _skip_check_: !0, value: (0, tB.bf)(e.marginSM) },
                  },
                  [`${t}-tab-remove`]: {
                    marginRight: { _skip_check_: !0, value: (0, tB.bf)(e.marginXS) },
                    marginLeft: { _skip_check_: !0, value: (0, tB.bf)(a(e.marginXXS).mul(-1).equal()) },
                    [r]: { margin: 0 },
                  },
                },
              },
              [`&${t}-left`]: { [`> ${t}-nav`]: { order: 1 }, [`> ${t}-content-holder`]: { order: 0 } },
              [`&${t}-right`]: { [`> ${t}-nav`]: { order: 0 }, [`> ${t}-content-holder`]: { order: 1 } },
              [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab + ${t}-tab`]: {
                    marginRight: { _skip_check_: !0, value: o },
                    marginLeft: { _skip_check_: !0, value: 0 },
                  },
                },
              },
            },
            [`${t}-dropdown-rtl`]: { direction: 'rtl' },
            [`${t}-menu-item`]: { [`${t}-dropdown-rtl`]: { textAlign: { _skip_check_: !0, value: 'right' } } },
          };
        },
        t5 = (e) => {
          let {
            componentCls: t,
            tabsCardPadding: n,
            cardHeight: r,
            cardGutter: o,
            itemHoverColor: a,
            itemActiveColor: i,
            colorBorderSecondary: l,
          } = e;
          return {
            [t]: Object.assign(
              Object.assign(
                Object.assign(Object.assign({}, (0, tU.Wf)(e)), {
                  display: 'flex',
                  [`> ${t}-nav, > div > ${t}-nav`]: {
                    position: 'relative',
                    display: 'flex',
                    flex: 'none',
                    alignItems: 'center',
                    [`${t}-nav-wrap`]: {
                      position: 'relative',
                      display: 'flex',
                      flex: 'auto',
                      alignSelf: 'stretch',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      transform: 'translate(0)',
                      '&::before, &::after': {
                        position: 'absolute',
                        zIndex: 1,
                        opacity: 0,
                        transition: `opacity ${e.motionDurationSlow}`,
                        content: "''",
                        pointerEvents: 'none',
                      },
                    },
                    [`${t}-nav-list`]: {
                      position: 'relative',
                      display: 'flex',
                      transition: `opacity ${e.motionDurationSlow}`,
                    },
                    [`${t}-nav-operations`]: { display: 'flex', alignSelf: 'stretch' },
                    [`${t}-nav-operations-hidden`]: {
                      position: 'absolute',
                      visibility: 'hidden',
                      pointerEvents: 'none',
                    },
                    [`${t}-nav-more`]: {
                      position: 'relative',
                      padding: n,
                      background: 'transparent',
                      border: 0,
                      color: e.colorText,
                      '&::after': {
                        position: 'absolute',
                        right: { _skip_check_: !0, value: 0 },
                        bottom: 0,
                        left: { _skip_check_: !0, value: 0 },
                        height: e.calc(e.controlHeightLG).div(8).equal(),
                        transform: 'translateY(100%)',
                        content: "''",
                      },
                    },
                    [`${t}-nav-add`]: Object.assign(
                      {
                        minWidth: r,
                        minHeight: r,
                        marginLeft: { _skip_check_: !0, value: o },
                        padding: `0 ${(0, tB.bf)(e.paddingXS)}`,
                        background: 'transparent',
                        border: `${(0, tB.bf)(e.lineWidth)} ${e.lineType} ${l}`,
                        borderRadius: `${(0, tB.bf)(e.borderRadiusLG)} ${(0, tB.bf)(e.borderRadiusLG)} 0 0`,
                        outline: 'none',
                        cursor: 'pointer',
                        color: e.colorText,
                        transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                        '&:hover': { color: a },
                        '&:active, &:focus:not(:focus-visible)': { color: i },
                      },
                      (0, tU.Qy)(e),
                    ),
                  },
                  [`${t}-extra-content`]: { flex: 'none' },
                  [`${t}-ink-bar`]: { position: 'absolute', background: e.inkBarColor, pointerEvents: 'none' },
                }),
                t7(e),
              ),
              {
                [`${t}-content`]: { position: 'relative', width: '100%' },
                [`${t}-content-holder`]: { flex: 'auto', minWidth: 0, minHeight: 0 },
                [`${t}-tabpane`]: { outline: 'none', '&-hidden': { display: 'none' } },
              },
            ),
            [`${t}-centered`]: {
              [`> ${t}-nav, > div > ${t}-nav`]: {
                [`${t}-nav-wrap`]: { [`&:not([class*='${t}-nav-wrap-ping'])`]: { justifyContent: 'center' } },
              },
            },
          };
        };
      var t9 = (0, tW.I$)(
          'Tabs',
          (e) => {
            let t = (0, tF.TS)(e, {
              tabsCardPadding: e.cardPadding,
              dropdownEdgeChildVerticalPadding: e.paddingXXS,
              tabsActiveTextShadow: '0 0 0.25px currentcolor',
              tabsDropdownHeight: 200,
              tabsDropdownWidth: 120,
              tabsHorizontalItemMargin: `0 0 0 ${(0, tB.bf)(e.horizontalItemGutter)}`,
              tabsHorizontalItemMarginRTL: `0 0 0 ${(0, tB.bf)(e.horizontalItemGutter)}`,
            });
            return [t6(t), t4(t), t2(t), t1(t), t0(t), t5(t), tJ(t)];
          },
          (e) => {
            let t = e.controlHeightLG;
            return {
              zIndexPopup: e.zIndexPopupBase + 50,
              cardBg: e.colorFillAlter,
              cardHeight: t,
              cardPadding: `${(t - Math.round(e.fontSize * e.lineHeight)) / 2 - e.lineWidth}px ${e.padding}px`,
              cardPaddingSM: `${1.5 * e.paddingXXS}px ${e.padding}px`,
              cardPaddingLG: `${e.paddingXS}px ${e.padding}px ${1.5 * e.paddingXXS}px`,
              titleFontSize: e.fontSize,
              titleFontSizeLG: e.fontSizeLG,
              titleFontSizeSM: e.fontSize,
              inkBarColor: e.colorPrimary,
              horizontalMargin: `0 0 ${e.margin}px 0`,
              horizontalItemGutter: 32,
              horizontalItemMargin: '',
              horizontalItemMarginRTL: '',
              horizontalItemPadding: `${e.paddingSM}px 0`,
              horizontalItemPaddingSM: `${e.paddingXS}px 0`,
              horizontalItemPaddingLG: `${e.padding}px 0`,
              verticalItemPadding: `${e.paddingXS}px ${e.paddingLG}px`,
              verticalItemMargin: `${e.margin}px 0 0 0`,
              itemColor: e.colorText,
              itemSelectedColor: e.colorPrimary,
              itemHoverColor: e.colorPrimaryHover,
              itemActiveColor: e.colorPrimaryActive,
              cardGutter: e.marginXXS / 2,
            };
          },
        ),
        t8 = function (e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
            for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
          return n;
        };
      let t3 = (e) => {
        var t, n, a, i, l, s, f, v;
        let p;
        let {
            type: m,
            className: b,
            rootClassName: h,
            size: g,
            onEdit: y,
            hideAdd: E,
            centered: C,
            addIcon: Z,
            removeIcon: S,
            moreIcon: $,
            popupClassName: w,
            children: k,
            items: x,
            animated: N,
            style: _,
            indicatorSize: R,
            indicator: I,
          } = e,
          M = t8(e, [
            'type',
            'className',
            'rootClassName',
            'size',
            'onEdit',
            'hideAdd',
            'centered',
            'addIcon',
            'removeIcon',
            'moreIcon',
            'popupClassName',
            'children',
            'items',
            'animated',
            'style',
            'indicatorSize',
            'indicator',
          ]),
          { prefixCls: P } = M,
          { direction: O, tabs: T, getPrefixCls: L, getPopupContainer: A } = r.useContext(tT.E_),
          K = L('tabs', P),
          D = (0, tL.Z)(K),
          [z, B, U] = t9(K, D);
        'editable-card' === m &&
          (p = {
            onEdit: (e, t) => {
              let { key: n, event: r } = t;
              null == y || y('add' === e ? r : n, e);
            },
            removeIcon:
              null !== (t = null != S ? S : null == T ? void 0 : T.removeIcon) && void 0 !== t
                ? t
                : r.createElement(o.Z, null),
            addIcon: (null != Z ? Z : null == T ? void 0 : T.addIcon) || r.createElement(u.Z, null),
            showAdd: !0 !== E,
          });
        let W = L(),
          F = (0, tA.Z)(g),
          H =
            x ||
            (0, e5.Z)(k)
              .map((e) => {
                if (r.isValidElement(e)) {
                  let { key: t, props: n } = e,
                    r = n || {},
                    { tab: o } = r,
                    a = tz(r, ['tab']);
                  return Object.assign(Object.assign({ key: String(t) }, a), { label: o });
                }
                return null;
              })
              .filter((e) => e),
          j = (function (e) {
            let t,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { inkBar: !0, tabPane: !1 };
            return (
              (t =
                !1 === n
                  ? { inkBar: !1, tabPane: !1 }
                  : !0 === n
                    ? { inkBar: !0, tabPane: !0 }
                    : Object.assign({ inkBar: !0 }, 'object' == typeof n ? n : {})).tabPane &&
                (t.tabPaneMotion = Object.assign(Object.assign({}, tD), { motionName: (0, tK.m)(e, 'switch') })),
              t
            );
          })(K, N),
          G = Object.assign(Object.assign({}, null == T ? void 0 : T.style), _),
          X = {
            align:
              null !== (n = null == I ? void 0 : I.align) && void 0 !== n
                ? n
                : null === (a = null == T ? void 0 : T.indicator) || void 0 === a
                  ? void 0
                  : a.align,
            size:
              null !==
                (f =
                  null !== (l = null !== (i = null == I ? void 0 : I.size) && void 0 !== i ? i : R) && void 0 !== l
                    ? l
                    : null === (s = null == T ? void 0 : T.indicator) || void 0 === s
                      ? void 0
                      : s.size) && void 0 !== f
                ? f
                : null == T
                  ? void 0
                  : T.indicatorSize,
          };
        return z(
          r.createElement(
            tO,
            Object.assign({ direction: O, getPopupContainer: A, moreTransitionName: `${W}-slide-up` }, M, {
              items: H,
              className: d()(
                {
                  [`${K}-${F}`]: F,
                  [`${K}-card`]: ['card', 'editable-card'].includes(m),
                  [`${K}-editable-card`]: 'editable-card' === m,
                  [`${K}-centered`]: C,
                },
                null == T ? void 0 : T.className,
                b,
                h,
                B,
                U,
                D,
              ),
              popupClassName: d()(w, B, U, D),
              style: G,
              editable: p,
              moreIcon:
                null !== (v = null != $ ? $ : null == T ? void 0 : T.moreIcon) && void 0 !== v
                  ? v
                  : r.createElement(c, null),
              prefixCls: K,
              animated: j,
              indicator: X,
            }),
          ),
        );
      };
      t3.TabPane = () => null;
      var ne = t3;
    },
    89017: function (e, t) {
      var n = {
        MAC_ENTER: 3,
        BACKSPACE: 8,
        TAB: 9,
        NUM_CENTER: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        QUESTION_MARK: 63,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLOCK: 144,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        WIN_KEY: 224,
        MAC_FF_META: 224,
        WIN_IME: 229,
        isTextModifyingKeyEvent: function (e) {
          var t = e.keyCode;
          if ((e.altKey && !e.ctrlKey) || e.metaKey || (t >= n.F1 && t <= n.F12)) return !1;
          switch (t) {
            case n.ALT:
            case n.CAPS_LOCK:
            case n.CONTEXT_MENU:
            case n.CTRL:
            case n.DOWN:
            case n.END:
            case n.ESC:
            case n.HOME:
            case n.INSERT:
            case n.LEFT:
            case n.MAC_FF_META:
            case n.META:
            case n.NUMLOCK:
            case n.NUM_CENTER:
            case n.PAGE_DOWN:
            case n.PAGE_UP:
            case n.PAUSE:
            case n.PRINT_SCREEN:
            case n.RIGHT:
            case n.SHIFT:
            case n.UP:
            case n.WIN_KEY:
            case n.WIN_KEY_RIGHT:
              return !1;
            default:
              return !0;
          }
        },
        isCharacterKey: function (e) {
          if (
            (e >= n.ZERO && e <= n.NINE) ||
            (e >= n.NUM_ZERO && e <= n.NUM_MULTIPLY) ||
            (e >= n.A && e <= n.Z) ||
            (-1 !== window.navigator.userAgent.indexOf('WebKit') && 0 === e)
          )
            return !0;
          switch (e) {
            case n.SPACE:
            case n.QUESTION_MARK:
            case n.NUM_PLUS:
            case n.NUM_MINUS:
            case n.NUM_PERIOD:
            case n.NUM_DIVISION:
            case n.SEMICOLON:
            case n.DASH:
            case n.EQUALS:
            case n.COMMA:
            case n.PERIOD:
            case n.SLASH:
            case n.APOSTROPHE:
            case n.SINGLE_QUOTE:
            case n.OPEN_SQUARE_BRACKET:
            case n.BACKSLASH:
            case n.CLOSE_SQUARE_BRACKET:
              return !0;
            default:
              return !1;
          }
        },
      };
      t.Z = n;
    },
    53079: function (e, t, n) {
      var r,
        o = n(98961),
        a = n(10870),
        i = n(2265),
        l = 0,
        c = (0, a.Z)({}, r || (r = n.t(i, 2))).useId;
      t.Z = c
        ? function (e) {
            var t = c();
            return e || t;
          }
        : function (e) {
            var t = i.useState('ssr-id'),
              n = (0, o.Z)(t, 2),
              r = n[0],
              a = n[1];
            return (i.useEffect(function () {
              var e = l;
              (l += 1), a('rc_unique_'.concat(e));
            }, []),
            e)
              ? e
              : r;
          };
    },
  },
]);
