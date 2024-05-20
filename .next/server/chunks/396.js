'use strict';
(exports.id = 396),
  (exports.ids = [396]),
  (exports.modules = {
    32066: (e, t, n) => {
      n.d(t, { Z: () => l });
      var r = n(65651),
        o = n(3729);
      let a = {
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
      var i = n(49809);
      let l = o.forwardRef(function (e, t) {
        return o.createElement(i.Z, (0, r.Z)({}, e, { ref: t, icon: a }));
      });
    },
    66396: (e, t, n) => {
      n.d(t, { Z: () => nt });
      var r = n(3729),
        o = n.n(r),
        a = n(32066),
        i = n(65651);
      let l = {
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
      };
      var c = n(49809),
        u = r.forwardRef(function (e, t) {
          return r.createElement(c.Z, (0, i.Z)({}, e, { ref: t, icon: l }));
        }),
        s = n(58535),
        d = n(34132),
        f = n.n(d),
        v = n(22363),
        p = n(65830),
        m = n(93727),
        b = n(82841),
        h = n(12403),
        g = n(80595),
        y = n(12472);
      let Z = (0, r.createContext)(null);
      var $ = n(72375),
        k = n(70242),
        C = n(67827),
        w = n(67862),
        E = n(42534);
      let x = function (e) {
        var t = e.activeTabOffset,
          n = e.horizontal,
          a = e.rtl,
          i = e.indicator,
          l = void 0 === i ? {} : i,
          c = l.size,
          u = l.align,
          s = void 0 === u ? 'center' : u,
          d = (0, r.useState)(),
          f = (0, m.Z)(d, 2),
          v = f[0],
          p = f[1],
          b = (0, r.useRef)(),
          h = o().useCallback(
            function (e) {
              return 'function' == typeof c ? c(e) : 'number' == typeof c ? c : e;
            },
            [c],
          );
        function g() {
          E.Z.cancel(b.current);
        }
        return (
          (0, r.useEffect)(
            function () {
              var e = {};
              if (t) {
                if (n) {
                  e.width = h(t.width);
                  var r = a ? 'right' : 'left';
                  'start' === s && (e[r] = t[r]),
                    'center' === s &&
                      ((e[r] = t[r] + t.width / 2), (e.transform = a ? 'translateX(50%)' : 'translateX(-50%)')),
                    'end' === s && ((e[r] = t[r] + t.width), (e.transform = 'translateX(-100%)'));
                } else
                  (e.height = h(t.height)),
                    'start' === s && (e.top = t.top),
                    'center' === s && ((e.top = t.top + t.height / 2), (e.transform = 'translateY(-50%)')),
                    'end' === s && ((e.top = t.top + t.height), (e.transform = 'translateY(-100%)'));
              }
              return (
                g(),
                (b.current = (0, E.Z)(function () {
                  p(e);
                })),
                g
              );
            },
            [t, n, a, s, h],
          ),
          { style: v }
        );
      };
      var S = { width: 0, height: 0, left: 0, top: 0 };
      function R(e, t) {
        var n = r.useRef(e),
          o = r.useState({}),
          a = (0, m.Z)(o, 2)[1];
        return [
          n.current,
          function (e) {
            var r = 'function' == typeof e ? e(n.current) : e;
            r !== n.current && t(r, n.current), (n.current = r), a({});
          },
        ];
      }
      var _ = n(17981);
      function I(e) {
        var t = (0, r.useState)(0),
          n = (0, m.Z)(t, 2),
          o = n[0],
          a = n[1],
          i = (0, r.useRef)(0),
          l = (0, r.useRef)();
        return (
          (l.current = e),
          (0, _.o)(
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
      var N = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function P(e) {
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
      function T(e, t, n, r) {
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
        L = r.forwardRef(function (e, t) {
          var n,
            o = e.position,
            a = e.prefixCls,
            i = e.extra;
          if (!i) return null;
          var l = {};
          return (
            'object' !== (0, b.Z)(i) || r.isValidElement(i) ? (l.right = i) : (l = i),
            'right' === o && (n = l.right),
            'left' === o && (n = l.left),
            n ? r.createElement('div', { className: ''.concat(a, '-extra-content'), ref: t }, n) : null
          );
        }),
        K = n(76724),
        D = n(21029),
        z = D.Z.ESC,
        A = D.Z.TAB,
        B = (0, r.forwardRef)(function (e, t) {
          var n = e.overlay,
            a = e.arrow,
            i = e.prefixCls,
            l = (0, r.useMemo)(
              function () {
                return 'function' == typeof n ? n() : n;
              },
              [n],
            ),
            c = (0, w.sQ)(t, null == l ? void 0 : l.ref);
          return o().createElement(
            o().Fragment,
            null,
            a && o().createElement('div', { className: ''.concat(i, '-arrow') }),
            o().cloneElement(l, { ref: (0, w.Yr)(l) ? c : void 0 }),
          );
        }),
        j = { adjustX: 1, adjustY: 1 },
        W = [0, 0];
      let X = {
        topLeft: { points: ['bl', 'tl'], overflow: j, offset: [0, -4], targetOffset: W },
        top: { points: ['bc', 'tc'], overflow: j, offset: [0, -4], targetOffset: W },
        topRight: { points: ['br', 'tr'], overflow: j, offset: [0, -4], targetOffset: W },
        bottomLeft: { points: ['tl', 'bl'], overflow: j, offset: [0, 4], targetOffset: W },
        bottom: { points: ['tc', 'bc'], overflow: j, offset: [0, 4], targetOffset: W },
        bottomRight: { points: ['tr', 'br'], overflow: j, offset: [0, 4], targetOffset: W },
      };
      var G = [
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
      ];
      let F = o().forwardRef(function (e, t) {
        var n,
          a,
          l,
          c,
          u,
          s,
          d,
          p,
          b,
          g,
          y,
          Z,
          $,
          k,
          C = e.arrow,
          x = void 0 !== C && C,
          S = e.prefixCls,
          R = void 0 === S ? 'rc-dropdown' : S,
          _ = e.transitionName,
          I = e.animation,
          N = e.align,
          P = e.placement,
          M = e.placements,
          T = e.getPopupContainer,
          O = e.showAction,
          L = e.hideAction,
          D = e.overlayClassName,
          j = e.overlayStyle,
          W = e.visible,
          F = e.trigger,
          H = void 0 === F ? ['hover'] : F,
          V = e.autoFocus,
          Y = e.overlay,
          q = e.children,
          Q = e.onVisibleChange,
          U = (0, h.Z)(e, G),
          J = o().useState(),
          ee = (0, m.Z)(J, 2),
          et = ee[0],
          en = ee[1],
          er = 'visible' in e ? W : et,
          eo = o().useRef(null),
          ea = o().useRef(null),
          ei = o().useRef(null);
        o().useImperativeHandle(t, function () {
          return eo.current;
        });
        var el = function (e) {
          en(e), null == Q || Q(e);
        };
        (a = (n = { visible: er, triggerRef: ei, onVisibleChange: el, autoFocus: V, overlayRef: ea }).visible),
          (l = n.triggerRef),
          (c = n.onVisibleChange),
          (u = n.autoFocus),
          (s = n.overlayRef),
          (d = r.useRef(!1)),
          (p = function () {
            if (a) {
              var e, t;
              null === (e = l.current) || void 0 === e || null === (t = e.focus) || void 0 === t || t.call(e),
                null == c || c(!1);
            }
          }),
          (b = function () {
            var e;
            return null !== (e = s.current) && void 0 !== e && !!e.focus && (s.current.focus(), (d.current = !0), !0);
          }),
          (g = function (e) {
            switch (e.keyCode) {
              case z:
                p();
                break;
              case A:
                var t = !1;
                d.current || (t = b()), t ? e.preventDefault() : p();
            }
          }),
          r.useEffect(
            function () {
              return a
                ? (window.addEventListener('keydown', g),
                  u && (0, E.Z)(b, 3),
                  function () {
                    window.removeEventListener('keydown', g), (d.current = !1);
                  })
                : function () {
                    d.current = !1;
                  };
            },
            [a],
          );
        var ec = function () {
            return o().createElement(B, { ref: ea, overlay: Y, prefixCls: R, arrow: x });
          },
          eu = o().cloneElement(q, {
            className: f()(
              null === (k = q.props) || void 0 === k ? void 0 : k.className,
              er && (void 0 !== (y = e.openClassName) ? y : ''.concat(R, '-open')),
            ),
            ref: (0, w.Yr)(q) ? (0, w.sQ)(ei, q.ref) : void 0,
          }),
          es = L;
        return (
          es || -1 === H.indexOf('contextMenu') || (es = ['click']),
          o().createElement(
            K.Z,
            (0, i.Z)({ builtinPlacements: void 0 === M ? X : M }, U, {
              prefixCls: R,
              ref: eo,
              popupClassName: f()(D, (0, v.Z)({}, ''.concat(R, '-show-arrow'), x)),
              popupStyle: j,
              action: H,
              showAction: O,
              hideAction: es,
              popupPlacement: void 0 === P ? 'bottomLeft' : P,
              popupAlign: N,
              popupTransitionName: _,
              popupAnimation: I,
              popupVisible: er,
              stretch: ((Z = e.minOverlayWidthMatchTrigger),
              ($ = e.alignPoint),
              'minOverlayWidthMatchTrigger' in e ? Z : !$)
                ? 'minWidth'
                : '',
              popup: 'function' == typeof Y ? ec : ec(),
              onPopupVisibleChange: el,
              onPopupClick: function (t) {
                var n = e.onOverlayClick;
                en(!1), n && n(t);
              },
              getPopupContainer: T,
            }),
            eu,
          )
        );
      });
      var H = [
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
        V = void 0,
        Y = r.forwardRef(function (e, t) {
          var n,
            o = e.prefixCls,
            a = e.invalidate,
            l = e.item,
            c = e.renderItem,
            u = e.responsive,
            s = e.responsiveDisabled,
            d = e.registerSize,
            v = e.itemKey,
            m = e.className,
            b = e.style,
            g = e.children,
            y = e.display,
            Z = e.order,
            $ = e.component,
            C = (0, h.Z)(e, H),
            w = u && !y;
          r.useEffect(function () {
            return function () {
              d(v, null);
            };
          }, []);
          var E = c && l !== V ? c(l) : g;
          a ||
            (n = {
              opacity: w ? 0 : 1,
              height: w ? 0 : V,
              overflowY: w ? 'hidden' : V,
              order: u ? Z : V,
              pointerEvents: w ? 'none' : V,
              position: w ? 'absolute' : V,
            });
          var x = {};
          w && (x['aria-hidden'] = !0);
          var S = r.createElement(
            void 0 === $ ? 'div' : $,
            (0, i.Z)({ className: f()(!a && o, m), style: (0, p.Z)((0, p.Z)({}, n), b) }, x, C, { ref: t }),
            E,
          );
          return (
            u &&
              (S = r.createElement(
                k.Z,
                {
                  onResize: function (e) {
                    d(v, e.offsetWidth);
                  },
                  disabled: s,
                },
                S,
              )),
            S
          );
        });
      Y.displayName = 'Item';
      var q = n(81202);
      function Q(e, t) {
        var n = r.useState(t),
          o = (0, m.Z)(n, 2),
          a = o[0],
          i = o[1];
        return [
          a,
          (0, C.Z)(function (t) {
            e(function () {
              i(t);
            });
          }),
        ];
      }
      var U = o().createContext(null),
        J = ['component'],
        ee = ['className'],
        et = ['className'],
        en = r.forwardRef(function (e, t) {
          var n = r.useContext(U);
          if (!n) {
            var o = e.component,
              a = (0, h.Z)(e, J);
            return r.createElement(void 0 === o ? 'div' : o, (0, i.Z)({}, a, { ref: t }));
          }
          var l = n.className,
            c = (0, h.Z)(n, ee),
            u = e.className,
            s = (0, h.Z)(e, et);
          return r.createElement(
            U.Provider,
            { value: null },
            r.createElement(Y, (0, i.Z)({ ref: t, className: f()(l, u) }, c, s)),
          );
        });
      en.displayName = 'RawItem';
      var er = [
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
        eo = 'responsive',
        ea = 'invalidate';
      function ei(e) {
        return '+ '.concat(e.length, ' ...');
      }
      var el = r.forwardRef(function (e, t) {
        var n,
          o,
          a = e.prefixCls,
          l = void 0 === a ? 'rc-overflow' : a,
          c = e.data,
          u = void 0 === c ? [] : c,
          s = e.renderItem,
          d = e.renderRawItem,
          v = e.itemKey,
          b = e.itemWidth,
          g = void 0 === b ? 10 : b,
          y = e.ssr,
          Z = e.style,
          $ = e.className,
          C = e.maxCount,
          w = e.renderRest,
          x = e.renderRawRest,
          S = e.suffix,
          R = e.component,
          I = e.itemComponent,
          N = e.onVisibleChange,
          P = (0, h.Z)(e, er),
          M = 'full' === y,
          T =
            ((n = r.useRef(null)),
            function (e) {
              n.current ||
                ((n.current = []),
                (function (e) {
                  if ('undefined' == typeof MessageChannel) (0, E.Z)(e);
                  else {
                    var t = new MessageChannel();
                    (t.port1.onmessage = function () {
                      return e();
                    }),
                      t.port2.postMessage(void 0);
                  }
                })(function () {
                  (0, q.unstable_batchedUpdates)(function () {
                    n.current.forEach(function (e) {
                      e();
                    }),
                      (n.current = null);
                  });
                })),
                n.current.push(e);
            }),
          O = Q(T, null),
          L = (0, m.Z)(O, 2),
          K = L[0],
          D = L[1],
          z = K || 0,
          A = Q(T, new Map()),
          B = (0, m.Z)(A, 2),
          j = B[0],
          W = B[1],
          X = Q(T, 0),
          G = (0, m.Z)(X, 2),
          F = G[0],
          H = G[1],
          V = Q(T, 0),
          J = (0, m.Z)(V, 2),
          ee = J[0],
          et = J[1],
          en = Q(T, 0),
          el = (0, m.Z)(en, 2),
          ec = el[0],
          eu = el[1],
          es = (0, r.useState)(null),
          ed = (0, m.Z)(es, 2),
          ef = ed[0],
          ev = ed[1],
          ep = (0, r.useState)(null),
          em = (0, m.Z)(ep, 2),
          eb = em[0],
          eh = em[1],
          eg = r.useMemo(
            function () {
              return null === eb && M ? Number.MAX_SAFE_INTEGER : eb || 0;
            },
            [eb, K],
          ),
          ey = (0, r.useState)(!1),
          eZ = (0, m.Z)(ey, 2),
          e$ = eZ[0],
          ek = eZ[1],
          eC = ''.concat(l, '-item'),
          ew = Math.max(F, ee),
          eE = C === eo,
          ex = u.length && eE,
          eS = C === ea,
          eR = ex || ('number' == typeof C && u.length > C),
          e_ = (0, r.useMemo)(
            function () {
              var e = u;
              return (
                ex
                  ? (e = null === K && M ? u : u.slice(0, Math.min(u.length, z / g)))
                  : 'number' == typeof C && (e = u.slice(0, C)),
                e
              );
            },
            [u, g, K, C, ex],
          ),
          eI = (0, r.useMemo)(
            function () {
              return ex ? u.slice(eg + 1) : u.slice(e_.length);
            },
            [u, e_, ex, eg],
          ),
          eN = (0, r.useCallback)(
            function (e, t) {
              var n;
              return 'function' == typeof v
                ? v(e)
                : null !== (n = v && (null == e ? void 0 : e[v])) && void 0 !== n
                  ? n
                  : t;
            },
            [v],
          ),
          eP = (0, r.useCallback)(
            s ||
              function (e) {
                return e;
              },
            [s],
          );
        function eM(e, t, n) {
          (eb !== e || (void 0 !== t && t !== ef)) &&
            (eh(e), n || (ek(e < u.length - 1), null == N || N(e)), void 0 !== t && ev(t));
        }
        function eT(e, t) {
          W(function (n) {
            var r = new Map(n);
            return null === t ? r.delete(e) : r.set(e, t), r;
          });
        }
        function eO(e) {
          return j.get(eN(e_[e], e));
        }
        (0, _.Z)(
          function () {
            if (z && 'number' == typeof ew && e_) {
              var e = ec,
                t = e_.length,
                n = t - 1;
              if (!t) {
                eM(0, null);
                return;
              }
              for (var r = 0; r < t; r += 1) {
                var o = eO(r);
                if ((M && (o = o || 0), void 0 === o)) {
                  eM(r - 1, void 0, !0);
                  break;
                }
                if (((e += o), (0 === n && e <= z) || (r === n - 1 && e + eO(n) <= z))) {
                  eM(n, null);
                  break;
                }
                if (e + ew > z) {
                  eM(r - 1, e - o - ec + ee);
                  break;
                }
              }
              S && eO(0) + ec > z && ev(null);
            }
          },
          [z, j, ee, ec, eN, e_],
        );
        var eL = e$ && !!eI.length,
          eK = {};
        null !== ef && ex && (eK = { position: 'absolute', left: ef, top: 0 });
        var eD = { prefixCls: eC, responsive: ex, component: I, invalidate: eS },
          ez = d
            ? function (e, t) {
                var n = eN(e, t);
                return r.createElement(
                  U.Provider,
                  {
                    key: n,
                    value: (0, p.Z)(
                      (0, p.Z)({}, eD),
                      {},
                      { order: t, item: e, itemKey: n, registerSize: eT, display: t <= eg },
                    ),
                  },
                  d(e, t),
                );
              }
            : function (e, t) {
                var n = eN(e, t);
                return r.createElement(
                  Y,
                  (0, i.Z)({}, eD, {
                    order: t,
                    key: n,
                    item: e,
                    renderItem: eP,
                    itemKey: n,
                    registerSize: eT,
                    display: t <= eg,
                  }),
                );
              },
          eA = {
            order: eL ? eg : Number.MAX_SAFE_INTEGER,
            className: ''.concat(eC, '-rest'),
            registerSize: function (e, t) {
              et(t), H(ee);
            },
            display: eL,
          };
        if (x) x && (o = r.createElement(U.Provider, { value: (0, p.Z)((0, p.Z)({}, eD), eA) }, x(eI)));
        else {
          var eB = w || ei;
          o = r.createElement(Y, (0, i.Z)({}, eD, eA), 'function' == typeof eB ? eB(eI) : eB);
        }
        var ej = r.createElement(
          void 0 === R ? 'div' : R,
          (0, i.Z)({ className: f()(!eS && l, $), style: Z, ref: t }, P),
          e_.map(ez),
          eR ? o : null,
          S &&
            r.createElement(
              Y,
              (0, i.Z)({}, eD, {
                responsive: eE,
                responsiveDisabled: !ex,
                order: eg,
                className: ''.concat(eC, '-suffix'),
                registerSize: function (e, t) {
                  eu(t);
                },
                display: !0,
                style: eK,
              }),
              S,
            ),
        );
        return (
          eE &&
            (ej = r.createElement(
              k.Z,
              {
                onResize: function (e, t) {
                  D(t.clientWidth);
                },
                disabled: !ex,
              },
              ej,
            )),
          ej
        );
      });
      (el.displayName = 'Overflow'), (el.Item = en), (el.RESPONSIVE = eo), (el.INVALIDATE = ea);
      var ec = n(96125),
        eu = n(41255),
        es = r.createContext(null);
      function ed(e, t) {
        return void 0 === e ? null : ''.concat(e, '-').concat(t);
      }
      function ef(e) {
        return ed(r.useContext(es), e);
      }
      var ev = n(71350),
        ep = ['children', 'locked'],
        em = r.createContext(null);
      function eb(e) {
        var t = e.children,
          n = e.locked,
          o = (0, h.Z)(e, ep),
          a = r.useContext(em),
          i = (0, ev.Z)(
            function () {
              var e;
              return (
                (e = (0, p.Z)({}, a)),
                Object.keys(o).forEach(function (t) {
                  var n = o[t];
                  void 0 !== n && (e[t] = n);
                }),
                e
              );
            },
            [a, o],
            function (e, t) {
              return !n && (e[0] !== t[0] || !(0, ec.Z)(e[1], t[1], !0));
            },
          );
        return r.createElement(em.Provider, { value: i }, t);
      }
      var eh = r.createContext(null);
      function eg() {
        return r.useContext(eh);
      }
      var ey = r.createContext([]);
      function eZ(e) {
        var t = r.useContext(ey);
        return r.useMemo(
          function () {
            return void 0 !== e ? [].concat((0, $.Z)(t), [e]) : t;
          },
          [t, e],
        );
      }
      var e$ = r.createContext(null),
        ek = r.createContext({}),
        eC = n(39193);
      function ew(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ((0, eC.Z)(e)) {
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
      var eE = D.Z.LEFT,
        ex = D.Z.RIGHT,
        eS = D.Z.UP,
        eR = D.Z.DOWN,
        e_ = D.Z.ENTER,
        eI = D.Z.ESC,
        eN = D.Z.HOME,
        eP = D.Z.END,
        eM = [eS, eR, eE, ex];
      function eT(e, t) {
        return (function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = (0, $.Z)(e.querySelectorAll('*')).filter(function (e) {
              return ew(e, t);
            });
          return ew(e, t) && n.unshift(e), n;
        })(e, !0).filter(function (e) {
          return t.has(e);
        });
      }
      function eO(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (!e) return null;
        var o = eT(e, t),
          a = o.length,
          i = o.findIndex(function (e) {
            return n === e;
          });
        return r < 0 ? (-1 === i ? (i = a - 1) : (i -= 1)) : r > 0 && (i += 1), o[(i = (i + a) % a)];
      }
      var eL = function (e, t) {
          var n = new Set(),
            r = new Map(),
            o = new Map();
          return (
            e.forEach(function (e) {
              var a = document.querySelector("[data-menu-id='".concat(ed(t, e), "']"));
              a && (n.add(a), o.set(a, e), r.set(e, a));
            }),
            { elements: n, key2element: r, element2key: o }
          );
        },
        eK = '__RC_UTIL_PATH_SPLIT__',
        eD = function (e) {
          return e.join(eK);
        },
        ez = 'rc-menu-more';
      function eA(e) {
        var t = r.useRef(e);
        t.current = e;
        var n = r.useCallback(function () {
          for (var e, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
          return null === (e = t.current) || void 0 === e ? void 0 : e.call.apply(e, [t].concat(r));
        }, []);
        return e ? n : void 0;
      }
      var eB = Math.random().toFixed(5).toString().slice(2),
        ej = 0,
        eW = n(31475),
        eX = n(24142),
        eG = n(37640),
        eF = n(90475),
        eH = n(24773);
      function eV(e, t, n, o) {
        var a = r.useContext(em),
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
      function eY(e) {
        var t = r.useContext(em),
          n = t.mode,
          o = t.rtl,
          a = t.inlineIndent;
        return 'inline' !== n ? null : o ? { paddingRight: e * a } : { paddingLeft: e * a };
      }
      function eq(e) {
        var t,
          n = e.icon,
          o = e.props,
          a = e.children;
        return null === n || !1 === n
          ? null
          : ('function' == typeof n ? (t = r.createElement(n, (0, p.Z)({}, o))) : 'boolean' != typeof n && (t = n),
            t || a || null);
      }
      var eQ = ['item'];
      function eU(e) {
        var t = e.item,
          n = (0, h.Z)(e, eQ);
        return (
          Object.defineProperty(n, 'item', {
            get: function () {
              return (
                (0, eu.ZP)(
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
      var eJ = ['title', 'attribute', 'elementRef'],
        e0 = [
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
        e1 = ['active'],
        e2 = (function (e) {
          (0, eG.Z)(n, e);
          var t = (0, eF.Z)(n);
          function n() {
            return (0, eW.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, eX.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.title,
                    n = e.attribute,
                    o = e.elementRef,
                    a = (0, h.Z)(e, eJ),
                    l = (0, eH.Z)(a, ['eventKey', 'popupClassName', 'popupOffset', 'onTitleClick']);
                  return (
                    (0, eu.ZP)(!n, '`attribute` of Menu.Item is deprecated. Please pass attribute directly.'),
                    r.createElement(
                      el.Item,
                      (0, i.Z)({}, n, { title: 'string' == typeof t ? t : void 0 }, l, { ref: o }),
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.Component),
        e5 = r.forwardRef(function (e, t) {
          var n = e.style,
            o = e.className,
            a = e.eventKey,
            l = (e.warnKey, e.disabled),
            c = e.itemIcon,
            u = e.children,
            s = e.role,
            d = e.onMouseEnter,
            m = e.onMouseLeave,
            b = e.onClick,
            g = e.onKeyDown,
            y = e.onFocus,
            Z = (0, h.Z)(e, e0),
            k = ef(a),
            C = r.useContext(em),
            E = C.prefixCls,
            x = C.onItemClick,
            S = C.disabled,
            R = C.overflowDisabled,
            _ = C.itemIcon,
            I = C.selectedKeys,
            N = C.onActive,
            P = r.useContext(ek)._internalRenderMenuItem,
            M = ''.concat(E, '-item'),
            T = r.useRef(),
            O = r.useRef(),
            L = S || l,
            K = (0, w.x1)(t, O),
            z = eZ(a),
            A = function (e) {
              return { key: a, keyPath: (0, $.Z)(z).reverse(), item: T.current, domEvent: e };
            },
            B = eV(a, L, d, m),
            j = B.active,
            W = (0, h.Z)(B, e1),
            X = I.includes(a),
            G = eY(z.length),
            F = {};
          'option' === e.role && (F['aria-selected'] = X);
          var H = r.createElement(
            e2,
            (0, i.Z)(
              {
                ref: T,
                elementRef: K,
                role: null === s ? 'none' : s || 'menuitem',
                tabIndex: l ? null : -1,
                'data-menu-id': R && k ? null : k,
              },
              Z,
              W,
              F,
              {
                component: 'li',
                'aria-disabled': l,
                style: (0, p.Z)((0, p.Z)({}, G), n),
                className: f()(
                  M,
                  (0, v.Z)(
                    (0, v.Z)((0, v.Z)({}, ''.concat(M, '-active'), j), ''.concat(M, '-selected'), X),
                    ''.concat(M, '-disabled'),
                    L,
                  ),
                  o,
                ),
                onClick: function (e) {
                  if (!L) {
                    var t = A(e);
                    null == b || b(eU(t)), x(t);
                  }
                },
                onKeyDown: function (e) {
                  if ((null == g || g(e), e.which === D.Z.ENTER)) {
                    var t = A(e);
                    null == b || b(eU(t)), x(t);
                  }
                },
                onFocus: function (e) {
                  N(a), null == y || y(e);
                },
              },
            ),
            u,
            r.createElement(eq, { props: (0, p.Z)((0, p.Z)({}, e), {}, { isSelected: X }), icon: c || _ }),
          );
          return P && (H = P(H, e, { selected: X })), H;
        });
      let e6 = r.forwardRef(function (e, t) {
        var n = e.eventKey,
          o = eg(),
          a = eZ(n);
        return (r.useEffect(
          function () {
            if (o)
              return (
                o.registerPath(n, a),
                function () {
                  o.unregisterPath(n, a);
                }
              );
          },
          [a],
        ),
        o)
          ? null
          : r.createElement(e5, (0, i.Z)({}, e, { ref: t }));
      });
      var e7 = ['className', 'children'],
        e4 = r.forwardRef(function (e, t) {
          var n = e.className,
            o = e.children,
            a = (0, h.Z)(e, e7),
            l = r.useContext(em),
            c = l.prefixCls,
            u = l.mode,
            s = l.rtl;
          return r.createElement(
            'ul',
            (0, i.Z)(
              {
                className: f()(
                  c,
                  s && ''.concat(c, '-rtl'),
                  ''.concat(c, '-sub'),
                  ''.concat(c, '-').concat('inline' === u ? 'inline' : 'vertical'),
                  n,
                ),
                role: 'menu',
              },
              a,
              { 'data-menu-list': !0, ref: t },
            ),
            o,
          );
        });
      e4.displayName = 'SubMenuList';
      var e9 = n(89299);
      function e8(e, t) {
        return (0, e9.Z)(e).map(function (e, n) {
          if (r.isValidElement(e)) {
            var o,
              a,
              i = e.key,
              l = null !== (o = null === (a = e.props) || void 0 === a ? void 0 : a.eventKey) && void 0 !== o ? o : i;
            null == l && (l = 'tmp_key-'.concat([].concat((0, $.Z)(t), [n]).join('-')));
            var c = { key: l, eventKey: l };
            return r.cloneElement(e, c);
          }
          return e;
        });
      }
      var e3 = { adjustX: 1, adjustY: 1 },
        te = {
          topLeft: { points: ['bl', 'tl'], overflow: e3 },
          topRight: { points: ['br', 'tr'], overflow: e3 },
          bottomLeft: { points: ['tl', 'bl'], overflow: e3 },
          bottomRight: { points: ['tr', 'br'], overflow: e3 },
          leftTop: { points: ['tr', 'tl'], overflow: e3 },
          leftBottom: { points: ['br', 'bl'], overflow: e3 },
          rightTop: { points: ['tl', 'tr'], overflow: e3 },
          rightBottom: { points: ['bl', 'br'], overflow: e3 },
        },
        tt = {
          topLeft: { points: ['bl', 'tl'], overflow: e3 },
          topRight: { points: ['br', 'tr'], overflow: e3 },
          bottomLeft: { points: ['tl', 'bl'], overflow: e3 },
          bottomRight: { points: ['tr', 'br'], overflow: e3 },
          rightTop: { points: ['tr', 'tl'], overflow: e3 },
          rightBottom: { points: ['br', 'bl'], overflow: e3 },
          leftTop: { points: ['tl', 'tr'], overflow: e3 },
          leftBottom: { points: ['bl', 'br'], overflow: e3 },
        };
      function tn(e, t, n) {
        return t || (n ? n[e] || n.other : void 0);
      }
      var tr = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      };
      function to(e) {
        var t = e.prefixCls,
          n = e.visible,
          o = e.children,
          a = e.popup,
          i = e.popupStyle,
          l = e.popupClassName,
          c = e.popupOffset,
          u = e.disabled,
          s = e.mode,
          d = e.onVisibleChange,
          b = r.useContext(em),
          h = b.getPopupContainer,
          g = b.rtl,
          y = b.subMenuOpenDelay,
          Z = b.subMenuCloseDelay,
          $ = b.builtinPlacements,
          k = b.triggerSubMenuAction,
          C = b.forceSubMenuRender,
          w = b.rootClassName,
          x = b.motion,
          S = b.defaultMotions,
          R = r.useState(!1),
          _ = (0, m.Z)(R, 2),
          I = _[0],
          N = _[1],
          P = g ? (0, p.Z)((0, p.Z)({}, tt), $) : (0, p.Z)((0, p.Z)({}, te), $),
          M = tr[s],
          T = tn(s, x, S),
          O = r.useRef(T);
        'inline' !== s && (O.current = T);
        var L = (0, p.Z)(
            (0, p.Z)({}, O.current),
            {},
            { leavedClassName: ''.concat(t, '-hidden'), removeOnLeave: !1, motionAppear: !0 },
          ),
          D = r.useRef();
        return (
          r.useEffect(
            function () {
              return (
                (D.current = (0, E.Z)(function () {
                  N(n);
                })),
                function () {
                  E.Z.cancel(D.current);
                }
              );
            },
            [n],
          ),
          r.createElement(
            K.Z,
            {
              prefixCls: t,
              popupClassName: f()(''.concat(t, '-popup'), (0, v.Z)({}, ''.concat(t, '-rtl'), g), l, w),
              stretch: 'horizontal' === s ? 'minWidth' : null,
              getPopupContainer: h,
              builtinPlacements: P,
              popupPlacement: M,
              popupVisible: I,
              popup: a,
              popupStyle: i,
              popupAlign: c && { offset: c },
              action: u ? [] : [k],
              mouseEnterDelay: y,
              mouseLeaveDelay: Z,
              onPopupVisibleChange: d,
              forceRender: C,
              popupMotion: L,
              fresh: !0,
            },
            o,
          )
        );
      }
      var ta = n(87884);
      function ti(e) {
        var t = e.id,
          n = e.open,
          o = e.keyPath,
          a = e.children,
          l = 'inline',
          c = r.useContext(em),
          u = c.prefixCls,
          s = c.forceSubMenuRender,
          d = c.motion,
          f = c.defaultMotions,
          v = c.mode,
          b = r.useRef(!1);
        b.current = v === l;
        var h = r.useState(!b.current),
          g = (0, m.Z)(h, 2),
          y = g[0],
          Z = g[1],
          $ = !!b.current && n;
        r.useEffect(
          function () {
            b.current && Z(!1);
          },
          [v],
        );
        var k = (0, p.Z)({}, tn(l, d, f));
        o.length > 1 && (k.motionAppear = !1);
        var C = k.onVisibleChanged;
        return ((k.onVisibleChanged = function (e) {
          return b.current || e || Z(!0), null == C ? void 0 : C(e);
        }),
        y)
          ? null
          : r.createElement(
              eb,
              { mode: l, locked: !b.current },
              r.createElement(
                ta.ZP,
                (0, i.Z)({ visible: $ }, k, {
                  forceRender: s,
                  removeOnLeave: !1,
                  leavedClassName: ''.concat(u, '-hidden'),
                }),
                function (e) {
                  var n = e.className,
                    o = e.style;
                  return r.createElement(e4, { id: t, className: n, style: o }, a);
                },
              ),
            );
      }
      var tl = [
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
        tc = ['active'],
        tu = function (e) {
          var t = e.style,
            n = e.className,
            o = e.title,
            a = e.eventKey,
            l = (e.warnKey, e.disabled),
            c = e.internalPopupClose,
            u = e.children,
            s = e.itemIcon,
            d = e.expandIcon,
            b = e.popupClassName,
            g = e.popupOffset,
            y = e.popupStyle,
            Z = e.onClick,
            $ = e.onMouseEnter,
            k = e.onMouseLeave,
            C = e.onTitleClick,
            w = e.onTitleMouseEnter,
            E = e.onTitleMouseLeave,
            x = (0, h.Z)(e, tl),
            S = ef(a),
            R = r.useContext(em),
            _ = R.prefixCls,
            I = R.mode,
            N = R.openKeys,
            P = R.disabled,
            M = R.overflowDisabled,
            T = R.activeKey,
            O = R.selectedKeys,
            L = R.itemIcon,
            K = R.expandIcon,
            D = R.onItemClick,
            z = R.onOpenChange,
            A = R.onActive,
            B = r.useContext(ek)._internalRenderSubMenuItem,
            j = r.useContext(e$).isSubPathKey,
            W = eZ(),
            X = ''.concat(_, '-submenu'),
            G = P || l,
            F = r.useRef(),
            H = r.useRef(),
            V = null != d ? d : K,
            Y = N.includes(a),
            q = !M && Y,
            Q = j(O, a),
            U = eV(a, G, w, E),
            J = U.active,
            ee = (0, h.Z)(U, tc),
            et = r.useState(!1),
            en = (0, m.Z)(et, 2),
            er = en[0],
            eo = en[1],
            ea = function (e) {
              G || eo(e);
            },
            ei = r.useMemo(
              function () {
                return J || ('inline' !== I && (er || j([T], a)));
              },
              [I, J, T, er, a, j],
            ),
            ec = eY(W.length),
            eu = eA(function (e) {
              null == Z || Z(eU(e)), D(e);
            }),
            es = S && ''.concat(S, '-popup'),
            ed = r.createElement(
              'div',
              (0, i.Z)(
                {
                  role: 'menuitem',
                  style: ec,
                  className: ''.concat(X, '-title'),
                  tabIndex: G ? null : -1,
                  ref: F,
                  title: 'string' == typeof o ? o : null,
                  'data-menu-id': M && S ? null : S,
                  'aria-expanded': q,
                  'aria-haspopup': !0,
                  'aria-controls': es,
                  'aria-disabled': G,
                  onClick: function (e) {
                    G || (null == C || C({ key: a, domEvent: e }), 'inline' === I && z(a, !Y));
                  },
                  onFocus: function () {
                    A(a);
                  },
                },
                ee,
              ),
              o,
              r.createElement(
                eq,
                {
                  icon: 'horizontal' !== I ? V : void 0,
                  props: (0, p.Z)((0, p.Z)({}, e), {}, { isOpen: q, isSubMenu: !0 }),
                },
                r.createElement('i', { className: ''.concat(X, '-arrow') }),
              ),
            ),
            ev = r.useRef(I);
          if (('inline' !== I && W.length > 1 ? (ev.current = 'vertical') : (ev.current = I), !M)) {
            var ep = ev.current;
            ed = r.createElement(
              to,
              {
                mode: ep,
                prefixCls: X,
                visible: !c && q && 'inline' !== I,
                popupClassName: b,
                popupOffset: g,
                popupStyle: y,
                popup: r.createElement(
                  eb,
                  { mode: 'horizontal' === ep ? 'vertical' : ep },
                  r.createElement(e4, { id: es, ref: H }, u),
                ),
                disabled: G,
                onVisibleChange: function (e) {
                  'inline' !== I && z(a, e);
                },
              },
              ed,
            );
          }
          var eh = r.createElement(
            el.Item,
            (0, i.Z)({ role: 'none' }, x, {
              component: 'li',
              style: t,
              className: f()(
                X,
                ''.concat(X, '-').concat(I),
                n,
                (0, v.Z)(
                  (0, v.Z)(
                    (0, v.Z)((0, v.Z)({}, ''.concat(X, '-open'), q), ''.concat(X, '-active'), ei),
                    ''.concat(X, '-selected'),
                    Q,
                  ),
                  ''.concat(X, '-disabled'),
                  G,
                ),
              ),
              onMouseEnter: function (e) {
                ea(!0), null == $ || $({ key: a, domEvent: e });
              },
              onMouseLeave: function (e) {
                ea(!1), null == k || k({ key: a, domEvent: e });
              },
            }),
            ed,
            !M && r.createElement(ti, { id: es, open: q, keyPath: W }, u),
          );
          return (
            B && (eh = B(eh, e, { selected: Q, active: ei, open: q, disabled: G })),
            r.createElement(
              eb,
              {
                onItemClick: eu,
                mode: 'horizontal' === I ? 'vertical' : I,
                itemIcon: null != s ? s : L,
                expandIcon: V,
              },
              eh,
            )
          );
        };
      function ts(e) {
        var t,
          n = e.eventKey,
          o = e.children,
          a = eZ(n),
          i = e8(o, a),
          l = eg();
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
          (t = l ? i : r.createElement(tu, e, i)),
          r.createElement(ey.Provider, { value: a }, t)
        );
      }
      var td = ['className', 'title', 'eventKey', 'children'],
        tf = ['children'],
        tv = function (e) {
          var t = e.className,
            n = e.title,
            o = (e.eventKey, e.children),
            a = (0, h.Z)(e, td),
            l = r.useContext(em).prefixCls,
            c = ''.concat(l, '-item-group');
          return r.createElement(
            'li',
            (0, i.Z)({ role: 'presentation' }, a, {
              onClick: function (e) {
                return e.stopPropagation();
              },
              className: f()(c, t),
            }),
            r.createElement(
              'div',
              { role: 'presentation', className: ''.concat(c, '-title'), title: 'string' == typeof n ? n : void 0 },
              n,
            ),
            r.createElement('ul', { role: 'group', className: ''.concat(c, '-list') }, o),
          );
        };
      function tp(e) {
        var t = e.children,
          n = (0, h.Z)(e, tf),
          o = e8(t, eZ(n.eventKey));
        return eg() ? o : r.createElement(tv, (0, eH.Z)(n, ['warnKey']), o);
      }
      function tm(e) {
        var t = e.className,
          n = e.style,
          o = r.useContext(em).prefixCls;
        return eg()
          ? null
          : r.createElement('li', { role: 'separator', className: f()(''.concat(o, '-item-divider'), t), style: n });
      }
      var tb = ['label', 'children', 'key', 'type'],
        th = [
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
        tg = [],
        ty = r.forwardRef(function (e, t) {
          var n,
            o,
            a,
            l,
            c,
            u,
            s,
            d,
            y,
            Z,
            k,
            C,
            w,
            x,
            S,
            R,
            _,
            I,
            N,
            P,
            M,
            T,
            O,
            L,
            K,
            D,
            z = e.prefixCls,
            A = void 0 === z ? 'rc-menu' : z,
            B = e.rootClassName,
            j = e.style,
            W = e.className,
            X = e.tabIndex,
            G = e.items,
            F = e.children,
            H = e.direction,
            V = e.id,
            Y = e.mode,
            Q = void 0 === Y ? 'vertical' : Y,
            U = e.inlineCollapsed,
            J = e.disabled,
            ee = e.disabledOverflow,
            et = e.subMenuOpenDelay,
            en = e.subMenuCloseDelay,
            er = e.forceSubMenuRender,
            eo = e.defaultOpenKeys,
            ea = e.openKeys,
            ei = e.activeKey,
            eu = e.defaultActiveFirst,
            ed = e.selectable,
            ef = void 0 === ed || ed,
            ev = e.multiple,
            ep = void 0 !== ev && ev,
            em = e.defaultSelectedKeys,
            eg = e.selectedKeys,
            ey = e.onSelect,
            eZ = e.onDeselect,
            eC = e.inlineIndent,
            ew = e.motion,
            eW = e.defaultMotions,
            eX = e.triggerSubMenuAction,
            eG = e.builtinPlacements,
            eF = e.itemIcon,
            eH = e.expandIcon,
            eV = e.overflowedIndicator,
            eY = void 0 === eV ? '...' : eV,
            eq = e.overflowedIndicatorPopupClassName,
            eQ = e.getPopupContainer,
            eJ = e.onClick,
            e0 = e.onOpenChange,
            e1 = e.onKeyDown,
            e2 = (e.openAnimation, e.openTransitionName, e._internalRenderMenuItem),
            e5 = e._internalRenderSubMenuItem,
            e7 = (0, h.Z)(e, th),
            e4 = r.useMemo(
              function () {
                var e;
                return (
                  (e = F),
                  G &&
                    (e = (function e(t) {
                      return (t || [])
                        .map(function (t, n) {
                          if (t && 'object' === (0, b.Z)(t)) {
                            var o = t.label,
                              a = t.children,
                              l = t.key,
                              c = t.type,
                              u = (0, h.Z)(t, tb),
                              s = null != l ? l : 'tmp-'.concat(n);
                            return a || 'group' === c
                              ? 'group' === c
                                ? r.createElement(tp, (0, i.Z)({ key: s }, u, { title: o }), e(a))
                                : r.createElement(ts, (0, i.Z)({ key: s }, u, { title: o }), e(a))
                              : 'divider' === c
                                ? r.createElement(tm, (0, i.Z)({ key: s }, u))
                                : r.createElement(e6, (0, i.Z)({ key: s }, u), o);
                          }
                          return null;
                        })
                        .filter(function (e) {
                          return e;
                        });
                    })(G)),
                  e8(e, tg)
                );
              },
              [F, G],
            ),
            e9 = r.useState(!1),
            e3 = (0, m.Z)(e9, 2),
            te = e3[0],
            tt = e3[1],
            tn = r.useRef(),
            tr =
              ((n = (0, g.Z)(V, { value: V })),
              (a = (o = (0, m.Z)(n, 2))[0]),
              (l = o[1]),
              r.useEffect(function () {
                ej += 1;
                var e = ''.concat(eB, '-').concat(ej);
                l('rc-menu-uuid-'.concat(e));
              }, []),
              a),
            to = 'rtl' === H,
            ta = (0, g.Z)(eo, {
              value: ea,
              postState: function (e) {
                return e || tg;
              },
            }),
            ti = (0, m.Z)(ta, 2),
            tl = ti[0],
            tc = ti[1],
            tu = function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              function n() {
                tc(e), null == e0 || e0(e);
              }
              t ? (0, q.flushSync)(n) : n();
            },
            td = r.useState(tl),
            tf = (0, m.Z)(td, 2),
            tv = tf[0],
            ty = tf[1],
            tZ = r.useRef(!1),
            t$ = r.useMemo(
              function () {
                return ('inline' === Q || 'vertical' === Q) && U ? ['vertical', U] : [Q, !1];
              },
              [Q, U],
            ),
            tk = (0, m.Z)(t$, 2),
            tC = tk[0],
            tw = tk[1],
            tE = 'inline' === tC,
            tx = r.useState(tC),
            tS = (0, m.Z)(tx, 2),
            tR = tS[0],
            t_ = tS[1],
            tI = r.useState(tw),
            tN = (0, m.Z)(tI, 2),
            tP = tN[0],
            tM = tN[1];
          r.useEffect(
            function () {
              t_(tC), tM(tw), tZ.current && (tE ? tc(tv) : tu(tg));
            },
            [tC, tw],
          );
          var tT = r.useState(0),
            tO = (0, m.Z)(tT, 2),
            tL = tO[0],
            tK = tO[1],
            tD = tL >= e4.length - 1 || 'horizontal' !== tR || ee;
          r.useEffect(
            function () {
              tE && ty(tl);
            },
            [tl],
          ),
            r.useEffect(function () {
              return (
                (tZ.current = !0),
                function () {
                  tZ.current = !1;
                }
              );
            }, []);
          var tz =
              ((c = r.useState({})),
              (u = (0, m.Z)(c, 2)[1]),
              (s = (0, r.useRef)(new Map())),
              (d = (0, r.useRef)(new Map())),
              (y = r.useState([])),
              (k = (Z = (0, m.Z)(y, 2))[0]),
              (C = Z[1]),
              (w = (0, r.useRef)(0)),
              (x = (0, r.useRef)(!1)),
              (S = function () {
                x.current || u({});
              }),
              (R = (0, r.useCallback)(function (e, t) {
                var n = eD(t);
                d.current.set(n, e), s.current.set(e, n), (w.current += 1);
                var r = w.current;
                Promise.resolve().then(function () {
                  r === w.current && S();
                });
              }, [])),
              (_ = (0, r.useCallback)(function (e, t) {
                var n = eD(t);
                d.current.delete(n), s.current.delete(e);
              }, [])),
              (I = (0, r.useCallback)(function (e) {
                C(e);
              }, [])),
              (N = (0, r.useCallback)(
                function (e, t) {
                  var n = (s.current.get(e) || '').split(eK);
                  return t && k.includes(n[0]) && n.unshift(ez), n;
                },
                [k],
              )),
              (P = (0, r.useCallback)(
                function (e, t) {
                  return e.some(function (e) {
                    return N(e, !0).includes(t);
                  });
                },
                [N],
              )),
              (M = (0, r.useCallback)(function (e) {
                var t = ''.concat(s.current.get(e)).concat(eK),
                  n = new Set();
                return (
                  (0, $.Z)(d.current.keys()).forEach(function (e) {
                    e.startsWith(t) && n.add(d.current.get(e));
                  }),
                  n
                );
              }, [])),
              r.useEffect(function () {
                return function () {
                  x.current = !0;
                };
              }, []),
              {
                registerPath: R,
                unregisterPath: _,
                refreshOverflowKeys: I,
                isSubPathKey: P,
                getKeyPath: N,
                getKeys: function () {
                  var e = (0, $.Z)(s.current.keys());
                  return k.length && e.push(ez), e;
                },
                getSubPathKeys: M,
              }),
            tA = tz.registerPath,
            tB = tz.unregisterPath,
            tj = tz.refreshOverflowKeys,
            tW = tz.isSubPathKey,
            tX = tz.getKeyPath,
            tG = tz.getKeys,
            tF = tz.getSubPathKeys,
            tH = r.useMemo(
              function () {
                return { registerPath: tA, unregisterPath: tB };
              },
              [tA, tB],
            ),
            tV = r.useMemo(
              function () {
                return { isSubPathKey: tW };
              },
              [tW],
            );
          r.useEffect(
            function () {
              tj(
                tD
                  ? tg
                  : e4.slice(tL + 1).map(function (e) {
                      return e.key;
                    }),
              );
            },
            [tL, tD],
          );
          var tY = (0, g.Z)(ei || (eu && (null === (D = e4[0]) || void 0 === D ? void 0 : D.key)), { value: ei }),
            tq = (0, m.Z)(tY, 2),
            tQ = tq[0],
            tU = tq[1],
            tJ = eA(function (e) {
              tU(e);
            }),
            t0 = eA(function () {
              tU(void 0);
            });
          (0, r.useImperativeHandle)(t, function () {
            return {
              list: tn.current,
              focus: function (e) {
                var t,
                  n,
                  r = eL(tG(), tr),
                  o = r.elements,
                  a = r.key2element,
                  i = r.element2key,
                  l = eT(tn.current, o),
                  c =
                    null != tQ
                      ? tQ
                      : l[0]
                        ? i.get(l[0])
                        : null ===
                              (t = e4.find(function (e) {
                                return !e.props.disabled;
                              })) || void 0 === t
                          ? void 0
                          : t.key,
                  u = a.get(c);
                c && u && (null == u || null === (n = u.focus) || void 0 === n || n.call(u, e));
              },
            };
          });
          var t1 = (0, g.Z)(em || [], {
              value: eg,
              postState: function (e) {
                return Array.isArray(e) ? e : null == e ? tg : [e];
              },
            }),
            t2 = (0, m.Z)(t1, 2),
            t5 = t2[0],
            t6 = t2[1],
            t7 = function (e) {
              if (ef) {
                var t,
                  n = e.key,
                  r = t5.includes(n);
                t6(
                  (t = ep
                    ? r
                      ? t5.filter(function (e) {
                          return e !== n;
                        })
                      : [].concat((0, $.Z)(t5), [n])
                    : [n]),
                );
                var o = (0, p.Z)((0, p.Z)({}, e), {}, { selectedKeys: t });
                r ? null == eZ || eZ(o) : null == ey || ey(o);
              }
              !ep && tl.length && 'inline' !== tR && tu(tg);
            },
            t4 = eA(function (e) {
              null == eJ || eJ(eU(e)), t7(e);
            }),
            t9 = eA(function (e, t) {
              var n = tl.filter(function (t) {
                return t !== e;
              });
              if (t) n.push(e);
              else if ('inline' !== tR) {
                var r = tF(e);
                n = n.filter(function (e) {
                  return !r.has(e);
                });
              }
              (0, ec.Z)(tl, n, !0) || tu(n, !0);
            }),
            t8 =
              ((T = function (e, t) {
                var n = null != t ? t : !tl.includes(e);
                t9(e, n);
              }),
              (O = r.useRef()),
              ((L = r.useRef()).current = tQ),
              (K = function () {
                E.Z.cancel(O.current);
              }),
              r.useEffect(function () {
                return function () {
                  K();
                };
              }, []),
              function (e) {
                var t = e.which;
                if ([].concat(eM, [e_, eI, eN, eP]).includes(t)) {
                  var n = tG(),
                    r = eL(n, tr),
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
                      if ('inline' === e && r === e_) return { inlineTrigger: !0 };
                      var u = (0, v.Z)((0, v.Z)({}, eS, a), eR, i),
                        s = (0, v.Z)((0, v.Z)((0, v.Z)((0, v.Z)({}, eE, n ? i : a), ex, n ? a : i), eR, l), e_, l),
                        d = (0, v.Z)(
                          (0, v.Z)(
                            (0, v.Z)((0, v.Z)((0, v.Z)((0, v.Z)({}, eS, a), eR, i), e_, l), eI, c),
                            eE,
                            n ? l : c,
                          ),
                          ex,
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
                    })(tR, 1 === tX(u, !0).length, to, t);
                  if (!s && t !== eN && t !== eP) return;
                  (eM.includes(t) || [eN, eP].includes(t)) && e.preventDefault();
                  var d = function (e) {
                    if (e) {
                      var t = e,
                        n = e.querySelector('a');
                      null != n && n.getAttribute('href') && (t = n);
                      var r = l.get(e);
                      tU(r),
                        K(),
                        (O.current = (0, E.Z)(function () {
                          L.current === r && t.focus();
                        }));
                    }
                  };
                  if ([eN, eP].includes(t) || s.sibling || !c) {
                    var f,
                      p = eT(
                        (f =
                          c && 'inline' !== tR
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
                    d(t === eN ? p[0] : t === eP ? p[p.length - 1] : eO(f, a, c, s.offset));
                  } else if (s.inlineTrigger) T(u);
                  else if (s.offset > 0)
                    T(u, !0),
                      K(),
                      (O.current = (0, E.Z)(function () {
                        r = eL(n, tr);
                        var e = c.getAttribute('aria-controls');
                        d(eO(document.getElementById(e), r.elements));
                      }, 5));
                  else if (s.offset < 0) {
                    var m = tX(u, !0),
                      b = m[m.length - 2],
                      h = i.get(b);
                    T(b, !1), d(h);
                  }
                }
                null == e1 || e1(e);
              });
          r.useEffect(function () {
            tt(!0);
          }, []);
          var t3 = r.useMemo(
              function () {
                return { _internalRenderMenuItem: e2, _internalRenderSubMenuItem: e5 };
              },
              [e2, e5],
            ),
            ne =
              'horizontal' !== tR || ee
                ? e4
                : e4.map(function (e, t) {
                    return r.createElement(eb, { key: e.key, overflowDisabled: t > tL }, e);
                  }),
            nt = r.createElement(
              el,
              (0, i.Z)(
                {
                  id: V,
                  ref: tn,
                  prefixCls: ''.concat(A, '-overflow'),
                  component: 'ul',
                  itemComponent: e6,
                  className: f()(
                    A,
                    ''.concat(A, '-root'),
                    ''.concat(A, '-').concat(tR),
                    W,
                    (0, v.Z)((0, v.Z)({}, ''.concat(A, '-inline-collapsed'), tP), ''.concat(A, '-rtl'), to),
                    B,
                  ),
                  dir: H,
                  style: j,
                  role: 'menu',
                  tabIndex: void 0 === X ? 0 : X,
                  data: ne,
                  renderRawItem: function (e) {
                    return e;
                  },
                  renderRawRest: function (e) {
                    var t = e.length,
                      n = t ? e4.slice(-t) : null;
                    return r.createElement(
                      ts,
                      { eventKey: ez, title: eY, disabled: tD, internalPopupClose: 0 === t, popupClassName: eq },
                      n,
                    );
                  },
                  maxCount: 'horizontal' !== tR || ee ? el.INVALIDATE : el.RESPONSIVE,
                  ssr: 'full',
                  'data-menu-list': !0,
                  onVisibleChange: function (e) {
                    tK(e);
                  },
                  onKeyDown: t8,
                },
                e7,
              ),
            );
          return r.createElement(
            ek.Provider,
            { value: t3 },
            r.createElement(
              es.Provider,
              { value: tr },
              r.createElement(
                eb,
                {
                  prefixCls: A,
                  rootClassName: B,
                  mode: tR,
                  openKeys: tl,
                  rtl: to,
                  disabled: J,
                  motion: te ? ew : null,
                  defaultMotions: te ? eW : null,
                  activeKey: tQ,
                  onActive: tJ,
                  onInactive: t0,
                  selectedKeys: t5,
                  inlineIndent: void 0 === eC ? 24 : eC,
                  subMenuOpenDelay: void 0 === et ? 0.1 : et,
                  subMenuCloseDelay: void 0 === en ? 0.1 : en,
                  forceSubMenuRender: er,
                  builtinPlacements: eG,
                  triggerSubMenuAction: void 0 === eX ? 'hover' : eX,
                  getPopupContainer: eQ,
                  itemIcon: eF,
                  expandIcon: eH,
                  onItemClick: t4,
                  onOpenChange: t9,
                },
                r.createElement(e$.Provider, { value: tV }, nt),
                r.createElement(
                  'div',
                  { style: { display: 'none' }, 'aria-hidden': !0 },
                  r.createElement(eh.Provider, { value: tH }, e4),
                ),
              ),
            ),
          );
        });
      (ty.Item = e6), (ty.SubMenu = ts), (ty.ItemGroup = tp), (ty.Divider = tm);
      var tZ = r.forwardRef(function (e, t) {
        var n = e.prefixCls,
          o = e.id,
          a = e.tabs,
          i = e.locale,
          l = e.mobile,
          c = e.moreIcon,
          u = e.moreTransitionName,
          s = e.style,
          d = e.className,
          p = e.editable,
          b = e.tabBarGutter,
          h = e.rtl,
          g = e.removeAriaLabel,
          y = e.onTabClick,
          Z = e.getPopupContainer,
          $ = e.popupClassName,
          k = (0, r.useState)(!1),
          C = (0, m.Z)(k, 2),
          w = C[0],
          E = C[1],
          x = (0, r.useState)(null),
          S = (0, m.Z)(x, 2),
          R = S[0],
          _ = S[1],
          I = ''.concat(o, '-more-popup'),
          N = ''.concat(n, '-dropdown'),
          P = null !== R ? ''.concat(I, '-').concat(R) : null,
          M = null == i ? void 0 : i.dropdownAriaLabel,
          L = r.createElement(
            ty,
            {
              onClick: function (e) {
                y(e.key, e.domEvent), E(!1);
              },
              prefixCls: ''.concat(N, '-menu'),
              id: I,
              tabIndex: -1,
              role: 'listbox',
              'aria-activedescendant': P,
              selectedKeys: [R],
              'aria-label': void 0 !== M ? M : 'expanded dropdown',
            },
            a.map(function (e) {
              var t = e.closable,
                n = e.disabled,
                a = e.closeIcon,
                i = e.key,
                l = e.label,
                c = T(t, a, p, n);
              return r.createElement(
                e6,
                {
                  key: i,
                  id: ''.concat(I, '-').concat(i),
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
                      className: ''.concat(N, '-menu-item-remove'),
                      onClick: function (e) {
                        e.stopPropagation(),
                          e.preventDefault(),
                          e.stopPropagation(),
                          p.onEdit('remove', { key: i, event: e });
                      },
                    },
                    a || p.removeIcon || '\xd7',
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
                  return e.key === R;
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
            var e = document.getElementById(P);
            e && e.scrollIntoView && e.scrollIntoView(!1);
          },
          [R],
        ),
          (0, r.useEffect)(
            function () {
              w || _(null);
            },
            [w],
          );
        var z = (0, v.Z)({}, h ? 'marginRight' : 'marginLeft', b);
        a.length || ((z.visibility = 'hidden'), (z.order = 1));
        var A = f()((0, v.Z)({}, ''.concat(N, '-rtl'), h)),
          B = l
            ? null
            : r.createElement(
                F,
                {
                  prefixCls: N,
                  overlay: L,
                  trigger: ['hover'],
                  visible: !!a.length && w,
                  transitionName: u,
                  onVisibleChange: E,
                  overlayClassName: f()(A, $),
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                  getPopupContainer: Z,
                },
                r.createElement(
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: z,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': I,
                    id: ''.concat(o, '-more'),
                    'aria-expanded': w,
                    onKeyDown: function (e) {
                      var t = e.which;
                      if (!w) {
                        [D.Z.DOWN, D.Z.SPACE, D.Z.ENTER].includes(t) && (E(!0), e.preventDefault());
                        return;
                      }
                      switch (t) {
                        case D.Z.UP:
                          K(-1), e.preventDefault();
                          break;
                        case D.Z.DOWN:
                          K(1), e.preventDefault();
                          break;
                        case D.Z.ESC:
                          E(!1);
                          break;
                        case D.Z.SPACE:
                        case D.Z.ENTER:
                          null !== R && y(R, e);
                      }
                    },
                  },
                  void 0 === c ? 'More' : c,
                ),
              );
        return r.createElement(
          'div',
          { className: f()(''.concat(n, '-nav-operations'), d), style: s, ref: t },
          B,
          r.createElement(O, { prefixCls: n, locale: i, editable: p }),
        );
      });
      let t$ = r.memo(tZ, function (e, t) {
          return t.tabMoving;
        }),
        tk = function (e) {
          var t = e.prefixCls,
            n = e.id,
            o = e.active,
            a = e.tab,
            i = a.key,
            l = a.label,
            c = a.disabled,
            u = a.closeIcon,
            s = a.icon,
            d = e.closable,
            p = e.renderWrapper,
            m = e.removeAriaLabel,
            b = e.editable,
            h = e.onClick,
            g = e.onFocus,
            y = e.style,
            Z = ''.concat(t, '-tab'),
            $ = T(d, u, b, c);
          function k(e) {
            c || h(e);
          }
          var C = r.useMemo(
              function () {
                return s && 'string' == typeof l ? r.createElement('span', null, l) : l;
              },
              [l, s],
            ),
            w = r.createElement(
              'div',
              {
                key: i,
                'data-node-key': M(i),
                className: f()(
                  Z,
                  (0, v.Z)(
                    (0, v.Z)((0, v.Z)({}, ''.concat(Z, '-with-remove'), $), ''.concat(Z, '-active'), o),
                    ''.concat(Z, '-disabled'),
                    c,
                  ),
                ),
                style: y,
                onClick: k,
              },
              r.createElement(
                'div',
                {
                  role: 'tab',
                  'aria-selected': o,
                  id: n && ''.concat(n, '-tab-').concat(i),
                  className: ''.concat(Z, '-btn'),
                  'aria-controls': n && ''.concat(n, '-panel-').concat(i),
                  'aria-disabled': c,
                  tabIndex: c ? null : 0,
                  onClick: function (e) {
                    e.stopPropagation(), k(e);
                  },
                  onKeyDown: function (e) {
                    [D.Z.SPACE, D.Z.ENTER].includes(e.which) && (e.preventDefault(), k(e));
                  },
                  onFocus: g,
                },
                s && r.createElement('span', { className: ''.concat(Z, '-icon') }, s),
                l && C,
              ),
              $ &&
                r.createElement(
                  'button',
                  {
                    type: 'button',
                    'aria-label': m || 'remove',
                    tabIndex: 0,
                    className: ''.concat(Z, '-remove'),
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
          return p ? p(w) : w;
        };
      var tC = function (e, t) {
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
        tw = function (e) {
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
        tE = function (e, t) {
          return e[t ? 0 : 1];
        },
        tx = r.forwardRef(function (e, t) {
          var n,
            o,
            a,
            l,
            c,
            u,
            s,
            d,
            b,
            h,
            g,
            y,
            E,
            _,
            T,
            K,
            D,
            z,
            A,
            B,
            j,
            W,
            X,
            G,
            F,
            H,
            V,
            Y,
            q,
            Q,
            U,
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
            eZ = e.onTabScroll,
            e$ = e.indicator,
            ek = r.useContext(Z),
            eC = ek.prefixCls,
            ew = ek.tabs,
            eE = (0, r.useRef)(null),
            ex = (0, r.useRef)(null),
            eS = (0, r.useRef)(null),
            eR = (0, r.useRef)(null),
            e_ = (0, r.useRef)(null),
            eI = (0, r.useRef)(null),
            eN = (0, r.useRef)(null),
            eP = 'top' === eb || 'bottom' === eb,
            eM = R(0, function (e, t) {
              eP && eZ && eZ({ direction: e > t ? 'left' : 'right' });
            }),
            eT = (0, m.Z)(eM, 2),
            eO = eT[0],
            eL = eT[1],
            eK = R(0, function (e, t) {
              !eP && eZ && eZ({ direction: e > t ? 'top' : 'bottom' });
            }),
            eD = (0, m.Z)(eK, 2),
            ez = eD[0],
            eA = eD[1],
            eB = (0, r.useState)([0, 0]),
            ej = (0, m.Z)(eB, 2),
            eW = ej[0],
            eX = ej[1],
            eG = (0, r.useState)([0, 0]),
            eF = (0, m.Z)(eG, 2),
            eH = eF[0],
            eV = eF[1],
            eY = (0, r.useState)([0, 0]),
            eq = (0, m.Z)(eY, 2),
            eQ = eq[0],
            eU = eq[1],
            eJ = (0, r.useState)([0, 0]),
            e0 = (0, m.Z)(eJ, 2),
            e1 = e0[0],
            e2 = e0[1],
            e5 =
              ((n = new Map()),
              (o = (0, r.useRef)([])),
              (a = (0, r.useState)({})),
              (l = (0, m.Z)(a, 2)[1]),
              (c = (0, r.useRef)('function' == typeof n ? n() : n)),
              (u = I(function () {
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
            e6 = (0, m.Z)(e5, 2),
            e7 = e6[0],
            e4 = e6[1],
            e9 =
              ((s = eH[0]),
              (0, r.useMemo)(
                function () {
                  for (
                    var e = new Map(),
                      t = e7.get(null === (o = ew[0]) || void 0 === o ? void 0 : o.key) || S,
                      n = t.left + t.width,
                      r = 0;
                    r < ew.length;
                    r += 1
                  ) {
                    var o,
                      a,
                      i = ew[r].key,
                      l = e7.get(i);
                    l || (l = e7.get(null === (a = ew[r - 1]) || void 0 === a ? void 0 : a.key) || S);
                    var c = e.get(i) || (0, p.Z)({}, l);
                    (c.right = n - c.left - c.width), e.set(i, c);
                  }
                  return e;
                },
                [
                  ew
                    .map(function (e) {
                      return e.key;
                    })
                    .join('_'),
                  e7,
                  s,
                ],
              )),
            e8 = tE(eW, eP),
            e3 = tE(eH, eP),
            te = tE(eQ, eP),
            tt = tE(e1, eP),
            tn = e8 < e3 + te,
            tr = tn ? e8 - tt : e8 - te,
            to = ''.concat(eC, '-nav-operations-hidden'),
            ta = 0,
            ti = 0;
          function tl(e) {
            return e < ta ? ta : e > ti ? ti : e;
          }
          eP && ef ? ((ta = 0), (ti = Math.max(0, e3 - tr))) : ((ta = Math.min(0, tr - e3)), (ti = 0));
          var tc = (0, r.useRef)(null),
            tu = (0, r.useState)(),
            ts = (0, m.Z)(tu, 2),
            td = ts[0],
            tf = ts[1];
          function tv() {
            tf(Date.now());
          }
          function tp() {
            tc.current && clearTimeout(tc.current);
          }
          (d = function (e, t) {
            function n(e, t) {
              e(function (e) {
                return tl(e + t);
              });
            }
            return !!tn && (eP ? n(eL, e) : n(eA, t), tp(), tv(), !0);
          }),
            (b = (0, r.useState)()),
            (g = (h = (0, m.Z)(b, 2))[0]),
            (y = h[1]),
            (E = (0, r.useState)(0)),
            (T = (_ = (0, m.Z)(E, 2))[0]),
            (K = _[1]),
            (D = (0, r.useState)(0)),
            (A = (z = (0, m.Z)(D, 2))[0]),
            (B = z[1]),
            (j = (0, r.useState)()),
            (X = (W = (0, m.Z)(j, 2))[0]),
            (G = W[1]),
            (F = (0, r.useRef)()),
            (H = (0, r.useRef)()),
            ((V = (0, r.useRef)(null)).current = {
              onTouchStart: function (e) {
                var t = e.touches[0];
                y({ x: t.screenX, y: t.screenY }), window.clearInterval(F.current);
              },
              onTouchMove: function (e) {
                if (g) {
                  e.preventDefault();
                  var t = e.touches[0],
                    n = t.screenX,
                    r = t.screenY;
                  y({ x: n, y: r });
                  var o = n - g.x,
                    a = r - g.y;
                  d(o, a);
                  var i = Date.now();
                  K(i), B(i - T), G({ x: o, y: a });
                }
              },
              onTouchEnd: function () {
                if (g && (y(null), G(null), X)) {
                  var e = X.x / A,
                    t = X.y / A;
                  if (!(0.1 > Math.max(Math.abs(e), Math.abs(t)))) {
                    var n = e,
                      r = t;
                    F.current = window.setInterval(function () {
                      if (0.01 > Math.abs(n) && 0.01 > Math.abs(r)) {
                        window.clearInterval(F.current);
                        return;
                      }
                      (n *= 0.9046104802746175), (r *= 0.9046104802746175), d(20 * n, 20 * r);
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
                  ? (r = 'x' === H.current ? t : n)
                  : o > a
                    ? ((r = t), (H.current = 'x'))
                    : ((r = n), (H.current = 'y')),
                  d(-r, -r) && e.preventDefault();
              },
            }),
            r.useEffect(function () {
              function e(e) {
                V.current.onTouchMove(e);
              }
              function t(e) {
                V.current.onTouchEnd(e);
              }
              return (
                document.addEventListener('touchmove', e, { passive: !1 }),
                document.addEventListener('touchend', t, { passive: !1 }),
                eR.current.addEventListener(
                  'touchstart',
                  function (e) {
                    V.current.onTouchStart(e);
                  },
                  { passive: !1 },
                ),
                eR.current.addEventListener('wheel', function (e) {
                  V.current.onWheel(e);
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
              ((Y = eP ? eO : ez),
              (ee = (q = (0, p.Z)((0, p.Z)({}, e), {}, { tabs: ew })).tabs),
              (et = q.tabPosition),
              (en = q.rtl),
              ['top', 'bottom'].includes(et)
                ? ((Q = 'width'), (U = en ? 'right' : 'left'), (J = Math.abs(Y)))
                : ((Q = 'height'), (U = 'top'), (J = -Y)),
              (0, r.useMemo)(
                function () {
                  if (!ee.length) return [0, 0];
                  for (var e = ee.length, t = e, n = 0; n < e; n += 1) {
                    var r = e9.get(ee[n].key) || N;
                    if (r[U] + r[Q] > J + tr) {
                      t = n - 1;
                      break;
                    }
                  }
                  for (var o = 0, a = e - 1; a >= 0; a -= 1)
                    if ((e9.get(ee[a].key) || N)[U] < J) {
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
            tb = (0, m.Z)(tm, 2),
            th = tb[0],
            tg = tb[1],
            ty = (0, C.Z)(function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ed,
                t = e9.get(e) || { width: 0, height: 0, left: 0, right: 0, top: 0 };
              if (eP) {
                var n = eO;
                ef
                  ? t.right < eO
                    ? (n = t.right)
                    : t.right + t.width > eO + tr && (n = t.right + t.width - tr)
                  : t.left < -eO
                    ? (n = -t.left)
                    : t.left + t.width > -eO + tr && (n = -(t.left + t.width - tr)),
                  eA(0),
                  eL(tl(n));
              } else {
                var r = ez;
                t.top < -ez ? (r = -t.top) : t.top + t.height > -ez + tr && (r = -(t.top + t.height - tr)),
                  eL(0),
                  eA(tl(r));
              }
            }),
            tZ = {};
          'top' === eb || 'bottom' === eb ? (tZ[ef ? 'marginRight' : 'marginLeft'] = eh) : (tZ.marginTop = eh);
          var tx = ew.map(function (e, t) {
              var n = e.key;
              return r.createElement(tk, {
                id: eu,
                prefixCls: eC,
                key: n,
                tab: e,
                style: 0 === t ? void 0 : tZ,
                closable: e.closable,
                editable: ep,
                active: n === ed,
                renderWrapper: eg,
                removeAriaLabel: null == em ? void 0 : em.removeAriaLabel,
                onClick: function (e) {
                  ey(n, e);
                },
                onFocus: function () {
                  ty(n), tv(), eR.current && (ef || (eR.current.scrollLeft = 0), (eR.current.scrollTop = 0));
                },
              });
            }),
            tS = function () {
              return e4(function () {
                var e,
                  t = new Map(),
                  n = null === (e = e_.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                return (
                  ew.forEach(function (e) {
                    var r,
                      o = e.key,
                      a =
                        null === (r = e_.current) || void 0 === r
                          ? void 0
                          : r.querySelector('[data-node-key="'.concat(M(o), '"]'));
                    if (a) {
                      var i = tC(a, n),
                        l = (0, m.Z)(i, 4),
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
              tS();
            },
            [
              ew
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
            ],
          );
          var tR = I(function () {
              var e = tw(eE),
                t = tw(ex),
                n = tw(eS);
              eX([e[0] - t[0] - n[0], e[1] - t[1] - n[1]]);
              var r = tw(eN);
              eU(r), e2(tw(eI));
              var o = tw(e_);
              eV([o[0] - r[0], o[1] - r[1]]), tS();
            }),
            t_ = ew.slice(0, th),
            tI = ew.slice(tg + 1),
            tN = [].concat((0, $.Z)(t_), (0, $.Z)(tI)),
            tP = e9.get(ed),
            tM = x({ activeTabOffset: tP, horizontal: eP, indicator: e$, rtl: ef }).style;
          (0, r.useEffect)(
            function () {
              ty();
            },
            [ed, ta, ti, P(tP), P(e9), eP],
          ),
            (0, r.useEffect)(
              function () {
                tR();
              },
              [ef],
            );
          var tT = !!tN.length,
            tO = ''.concat(eC, '-nav-wrap');
          return (
            eP
              ? ef
                ? ((eo = eO > 0), (er = eO !== ti))
                : ((er = eO < 0), (eo = eO !== ta))
              : ((ea = ez < 0), (ei = ez !== ta)),
            r.createElement(
              k.Z,
              { onResize: tR },
              r.createElement(
                'div',
                {
                  ref: (0, w.x1)(t, eE),
                  role: 'tablist',
                  className: f()(''.concat(eC, '-nav'), el),
                  style: ec,
                  onKeyDown: function () {
                    tv();
                  },
                },
                r.createElement(L, { ref: ex, position: 'left', extra: ev, prefixCls: eC }),
                r.createElement(
                  k.Z,
                  { onResize: tR },
                  r.createElement(
                    'div',
                    {
                      className: f()(
                        tO,
                        (0, v.Z)(
                          (0, v.Z)(
                            (0, v.Z)((0, v.Z)({}, ''.concat(tO, '-ping-left'), er), ''.concat(tO, '-ping-right'), eo),
                            ''.concat(tO, '-ping-top'),
                            ea,
                          ),
                          ''.concat(tO, '-ping-bottom'),
                          ei,
                        ),
                      ),
                      ref: eR,
                    },
                    r.createElement(
                      k.Z,
                      { onResize: tR },
                      r.createElement(
                        'div',
                        {
                          ref: e_,
                          className: ''.concat(eC, '-nav-list'),
                          style: {
                            transform: 'translate('.concat(eO, 'px, ').concat(ez, 'px)'),
                            transition: td ? 'none' : void 0,
                          },
                        },
                        tx,
                        r.createElement(O, {
                          ref: eN,
                          prefixCls: eC,
                          locale: em,
                          editable: ep,
                          style: (0, p.Z)(
                            (0, p.Z)({}, 0 === tx.length ? void 0 : tZ),
                            {},
                            { visibility: tT ? 'hidden' : null },
                          ),
                        }),
                        r.createElement('div', {
                          className: f()(
                            ''.concat(eC, '-ink-bar'),
                            (0, v.Z)({}, ''.concat(eC, '-ink-bar-animated'), es.inkBar),
                          ),
                          style: tM,
                        }),
                      ),
                    ),
                  ),
                ),
                r.createElement(
                  t$,
                  (0, i.Z)({}, e, {
                    removeAriaLabel: null == em ? void 0 : em.removeAriaLabel,
                    ref: eI,
                    prefixCls: eC,
                    tabs: tN,
                    className: !tT && to,
                    tabMoving: !!td,
                  }),
                ),
                r.createElement(L, { ref: eS, position: 'right', extra: ev, prefixCls: eC }),
              ),
            )
          );
        }),
        tS = r.forwardRef(function (e, t) {
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
              className: f()(n, l && ''.concat(n, '-active'), o),
              ref: t,
            },
            u,
          );
        }),
        tR = ['renderTabBar'],
        t_ = ['label', 'key'];
      let tI = function (e) {
        var t = e.renderTabBar,
          n = (0, h.Z)(e, tR),
          o = r.useContext(Z).tabs;
        return t
          ? t(
              (0, p.Z)(
                (0, p.Z)({}, n),
                {},
                {
                  panes: o.map(function (e) {
                    var t = e.label,
                      n = e.key,
                      o = (0, h.Z)(e, t_);
                    return r.createElement(tS, (0, i.Z)({ tab: t, key: n, tabKey: n }, o));
                  }),
                },
              ),
              tx,
            )
          : r.createElement(tx, n);
      };
      var tN = ['key', 'forceRender', 'style', 'className', 'destroyInactiveTabPane'];
      let tP = function (e) {
        var t = e.id,
          n = e.activeKey,
          o = e.animated,
          a = e.tabPosition,
          l = e.destroyInactiveTabPane,
          c = r.useContext(Z),
          u = c.prefixCls,
          s = c.tabs,
          d = o.tabPane,
          m = ''.concat(u, '-tabpane');
        return r.createElement(
          'div',
          { className: f()(''.concat(u, '-content-holder')) },
          r.createElement(
            'div',
            {
              className: f()(
                ''.concat(u, '-content'),
                ''.concat(u, '-content-').concat(a),
                (0, v.Z)({}, ''.concat(u, '-content-animated'), d),
              ),
            },
            s.map(function (e) {
              var a = e.key,
                c = e.forceRender,
                u = e.style,
                s = e.className,
                v = e.destroyInactiveTabPane,
                b = (0, h.Z)(e, tN),
                g = a === n;
              return r.createElement(
                ta.ZP,
                (0, i.Z)(
                  {
                    key: a,
                    visible: g,
                    forceRender: c,
                    removeOnLeave: !!(l || v),
                    leavedClassName: ''.concat(m, '-hidden'),
                  },
                  o.tabPaneMotion,
                ),
                function (e, n) {
                  var o = e.style,
                    l = e.className;
                  return r.createElement(
                    tS,
                    (0, i.Z)({}, b, {
                      prefixCls: m,
                      id: t,
                      tabKey: a,
                      animated: d,
                      active: g,
                      style: (0, p.Z)((0, p.Z)({}, u), o),
                      className: f()(s, l),
                      ref: n,
                    }),
                  );
                },
              );
            }),
          ),
        );
      };
      var tM = [
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
        tT = 0,
        tO = r.forwardRef(function (e, t) {
          var n = e.id,
            o = e.prefixCls,
            a = void 0 === o ? 'rc-tabs' : o,
            l = e.className,
            c = e.items,
            u = e.direction,
            s = e.activeKey,
            d = e.defaultActiveKey,
            $ = e.editable,
            k = e.animated,
            C = e.tabPosition,
            w = void 0 === C ? 'top' : C,
            E = e.tabBarGutter,
            x = e.tabBarStyle,
            S = e.tabBarExtraContent,
            R = e.locale,
            _ = e.moreIcon,
            I = e.moreTransitionName,
            N = e.destroyInactiveTabPane,
            P = e.renderTabBar,
            M = e.onChange,
            T = e.onTabClick,
            O = e.onTabScroll,
            L = e.getPopupContainer,
            K = e.popupClassName,
            D = e.indicator,
            z = (0, h.Z)(e, tM),
            A = r.useMemo(
              function () {
                return (c || []).filter(function (e) {
                  return e && 'object' === (0, b.Z)(e) && 'key' in e;
                });
              },
              [c],
            ),
            B = 'rtl' === u,
            j = (function () {
              var e,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { inkBar: !0, tabPane: !1 };
              return (
                (e =
                  !1 === t
                    ? { inkBar: !1, tabPane: !1 }
                    : !0 === t
                      ? { inkBar: !0, tabPane: !1 }
                      : (0, p.Z)({ inkBar: !0 }, 'object' === (0, b.Z)(t) ? t : {})).tabPaneMotion &&
                  void 0 === e.tabPane &&
                  (e.tabPane = !0),
                !e.tabPaneMotion && e.tabPane && (e.tabPane = !1),
                e
              );
            })(k),
            W = (0, r.useState)(!1),
            X = (0, m.Z)(W, 2),
            G = X[0],
            F = X[1];
          (0, r.useEffect)(function () {
            F((0, y.Z)());
          }, []);
          var H = (0, g.Z)(
              function () {
                var e;
                return null === (e = A[0]) || void 0 === e ? void 0 : e.key;
              },
              { value: s, defaultValue: d },
            ),
            V = (0, m.Z)(H, 2),
            Y = V[0],
            q = V[1],
            Q = (0, r.useState)(function () {
              return A.findIndex(function (e) {
                return e.key === Y;
              });
            }),
            U = (0, m.Z)(Q, 2),
            J = U[0],
            ee = U[1];
          (0, r.useEffect)(
            function () {
              var e,
                t = A.findIndex(function (e) {
                  return e.key === Y;
                });
              -1 === t &&
                ((t = Math.max(0, Math.min(J, A.length - 1))), q(null === (e = A[t]) || void 0 === e ? void 0 : e.key)),
                ee(t);
            },
            [
              A.map(function (e) {
                return e.key;
              }).join('_'),
              Y,
              J,
            ],
          );
          var et = (0, g.Z)(null, { value: n }),
            en = (0, m.Z)(et, 2),
            er = en[0],
            eo = en[1];
          (0, r.useEffect)(function () {
            n || (eo('rc-tabs-'.concat(tT)), (tT += 1));
          }, []);
          var ea = { id: er, activeKey: Y, animated: j, tabPosition: w, rtl: B, mobile: G },
            ei = (0, p.Z)(
              (0, p.Z)({}, ea),
              {},
              {
                editable: $,
                locale: R,
                moreIcon: _,
                moreTransitionName: I,
                tabBarGutter: E,
                onTabClick: function (e, t) {
                  null == T || T(e, t);
                  var n = e !== Y;
                  q(e), n && (null == M || M(e));
                },
                onTabScroll: O,
                extra: S,
                style: x,
                panes: null,
                getPopupContainer: L,
                popupClassName: K,
                indicator: D,
              },
            );
          return r.createElement(
            Z.Provider,
            { value: { tabs: A, prefixCls: a } },
            r.createElement(
              'div',
              (0, i.Z)(
                {
                  ref: t,
                  id: n,
                  className: f()(
                    a,
                    ''.concat(a, '-').concat(w),
                    (0, v.Z)(
                      (0, v.Z)((0, v.Z)({}, ''.concat(a, '-mobile'), G), ''.concat(a, '-editable'), $),
                      ''.concat(a, '-rtl'),
                      B,
                    ),
                    l,
                  ),
                },
                z,
              ),
              r.createElement(tI, (0, i.Z)({}, ei, { renderTabBar: P })),
              r.createElement(tP, (0, i.Z)({ destroyInactiveTabPane: N }, ea, { animated: j })),
            ),
          );
        }),
        tL = n(84893),
        tK = n(13878),
        tD = n(54527),
        tz = n(95295);
      let tA = { motionAppear: !1, motionEnter: !0, motionLeave: !0 };
      var tB = function (e, t) {
          var n = {};
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
            for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
          return n;
        },
        tj = n(4710),
        tW = n(22989),
        tX = n(35124),
        tG = n(80433),
        tF = n(5251);
      let tH = new tj.E4('antSlideUpIn', {
          '0%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
          '100%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
        }),
        tV = new tj.E4('antSlideUpOut', {
          '0%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
          '100%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
        }),
        tY = new tj.E4('antSlideDownIn', {
          '0%': { transform: 'scaleY(0.8)', transformOrigin: '100% 100%', opacity: 0 },
          '100%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
        }),
        tq = new tj.E4('antSlideDownOut', {
          '0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
          '100%': { transform: 'scaleY(0.8)', transformOrigin: '100% 100%', opacity: 0 },
        }),
        tQ = new tj.E4('antSlideLeftIn', {
          '0%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
          '100%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
        }),
        tU = {
          'slide-up': { inKeyframes: tH, outKeyframes: tV },
          'slide-down': { inKeyframes: tY, outKeyframes: tq },
          'slide-left': {
            inKeyframes: tQ,
            outKeyframes: new tj.E4('antSlideLeftOut', {
              '0%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
              '100%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
            }),
          },
          'slide-right': {
            inKeyframes: new tj.E4('antSlideRightIn', {
              '0%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
              '100%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
            }),
            outKeyframes: new tj.E4('antSlideRightOut', {
              '0%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
              '100%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
            }),
          },
        },
        tJ = (e, t) => {
          let { antCls: n } = e,
            r = `${n}-${t}`,
            { inKeyframes: o, outKeyframes: a } = tU[t];
          return [
            (0, tF.R)(r, o, a, e.motionDurationMid),
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
        },
        t0 = (e) => {
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
            [tJ(e, 'slide-up'), tJ(e, 'slide-down')],
          ];
        },
        t1 = (e) => {
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
                  border: `${(0, tj.bf)(e.lineWidth)} ${e.lineType} ${a}`,
                  transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                },
                [`${t}-tab-active`]: { color: i, background: e.colorBgContainer },
                [`${t}-ink-bar`]: { visibility: 'hidden' },
              },
              [`&${t}-top, &${t}-bottom`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab + ${t}-tab`]: { marginLeft: { _skip_check_: !0, value: (0, tj.bf)(o) } },
                },
              },
              [`&${t}-top`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab`]: { borderRadius: `${(0, tj.bf)(e.borderRadiusLG)} ${(0, tj.bf)(e.borderRadiusLG)} 0 0` },
                  [`${t}-tab-active`]: { borderBottomColor: e.colorBgContainer },
                },
              },
              [`&${t}-bottom`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab`]: { borderRadius: `0 0 ${(0, tj.bf)(e.borderRadiusLG)} ${(0, tj.bf)(e.borderRadiusLG)}` },
                  [`${t}-tab-active`]: { borderTopColor: e.colorBgContainer },
                },
              },
              [`&${t}-left, &${t}-right`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: { [`${t}-tab + ${t}-tab`]: { marginTop: (0, tj.bf)(o) } },
              },
              [`&${t}-left`]: {
                [`> ${t}-nav, > div > ${t}-nav`]: {
                  [`${t}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `${(0, tj.bf)(e.borderRadiusLG)} 0 0 ${(0, tj.bf)(e.borderRadiusLG)}`,
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
                      value: `0 ${(0, tj.bf)(e.borderRadiusLG)} ${(0, tj.bf)(e.borderRadiusLG)} 0`,
                    },
                  },
                  [`${t}-tab-active`]: { borderLeftColor: { _skip_check_: !0, value: e.colorBgContainer } },
                },
              },
            },
          };
        },
        t2 = (e) => {
          let { componentCls: t, itemHoverColor: n, dropdownEdgeChildVerticalPadding: r } = e;
          return {
            [`${t}-dropdown`]: Object.assign(Object.assign({}, (0, tW.Wf)(e)), {
              position: 'absolute',
              top: -9999,
              left: { _skip_check_: !0, value: -9999 },
              zIndex: e.zIndexPopup,
              display: 'block',
              '&-hidden': { display: 'none' },
              [`${t}-dropdown-menu`]: {
                maxHeight: e.tabsDropdownHeight,
                margin: 0,
                padding: `${(0, tj.bf)(r)} 0`,
                overflowX: 'hidden',
                overflowY: 'auto',
                textAlign: { _skip_check_: !0, value: 'left' },
                listStyleType: 'none',
                backgroundColor: e.colorBgContainer,
                backgroundClip: 'padding-box',
                borderRadius: e.borderRadiusLG,
                outline: 'none',
                boxShadow: e.boxShadowSecondary,
                '&-item': Object.assign(Object.assign({}, tW.vS), {
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: e.tabsDropdownWidth,
                  margin: 0,
                  padding: `${(0, tj.bf)(e.paddingXXS)} ${(0, tj.bf)(e.paddingSM)}`,
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
        t5 = (e) => {
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
                  borderBottom: `${(0, tj.bf)(e.lineWidth)} ${e.lineType} ${r}`,
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
                marginLeft: { _skip_check_: !0, value: (0, tj.bf)(l(e.lineWidth).mul(-1).equal()) },
                borderLeft: { _skip_check_: !0, value: `${(0, tj.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}` },
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
                borderRight: { _skip_check_: !0, value: `${(0, tj.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}` },
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
                    borderRadius: `0 0 ${(0, tj.bf)(e.borderRadius)} ${(0, tj.bf)(e.borderRadius)}`,
                  },
                },
                [`&${t}-top`]: {
                  [`> ${t}-nav ${t}-tab`]: {
                    borderRadius: `${(0, tj.bf)(e.borderRadius)} ${(0, tj.bf)(e.borderRadius)} 0 0`,
                  },
                },
                [`&${t}-right`]: {
                  [`> ${t}-nav ${t}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `0 ${(0, tj.bf)(e.borderRadius)} ${(0, tj.bf)(e.borderRadius)} 0`,
                    },
                  },
                },
                [`&${t}-left`]: {
                  [`> ${t}-nav ${t}-tab`]: {
                    borderRadius: {
                      _skip_check_: !0,
                      value: `${(0, tj.bf)(e.borderRadius)} 0 0 ${(0, tj.bf)(e.borderRadius)}`,
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
                (0, tW.Qy)(e),
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
                    marginLeft: { _skip_check_: !0, value: (0, tj.bf)(e.marginSM) },
                  },
                  [`${t}-tab-remove`]: {
                    marginRight: { _skip_check_: !0, value: (0, tj.bf)(e.marginXS) },
                    marginLeft: { _skip_check_: !0, value: (0, tj.bf)(a(e.marginXXS).mul(-1).equal()) },
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
        t9 = (e) => {
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
                Object.assign(Object.assign({}, (0, tW.Wf)(e)), {
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
                        padding: `0 ${(0, tj.bf)(e.paddingXS)}`,
                        background: 'transparent',
                        border: `${(0, tj.bf)(e.lineWidth)} ${e.lineType} ${l}`,
                        borderRadius: `${(0, tj.bf)(e.borderRadiusLG)} ${(0, tj.bf)(e.borderRadiusLG)} 0 0`,
                        outline: 'none',
                        cursor: 'pointer',
                        color: e.colorText,
                        transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                        '&:hover': { color: a },
                        '&:active, &:focus:not(:focus-visible)': { color: i },
                      },
                      (0, tW.Qy)(e),
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
        },
        t8 = (0, tX.I$)(
          'Tabs',
          (e) => {
            let t = (0, tG.TS)(e, {
              tabsCardPadding: e.cardPadding,
              dropdownEdgeChildVerticalPadding: e.paddingXXS,
              tabsActiveTextShadow: '0 0 0.25px currentcolor',
              tabsDropdownHeight: 200,
              tabsDropdownWidth: 120,
              tabsHorizontalItemMargin: `0 0 0 ${(0, tj.bf)(e.horizontalItemGutter)}`,
              tabsHorizontalItemMarginRTL: `0 0 0 ${(0, tj.bf)(e.horizontalItemGutter)}`,
            });
            return [t6(t), t4(t), t5(t), t2(t), t1(t), t9(t), t0(t)];
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
        );
      var t3 = function (e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
        return n;
      };
      let ne = (e) => {
        var t, n, o, i, l, c, d, v;
        let p;
        let {
            type: m,
            className: b,
            rootClassName: h,
            size: g,
            onEdit: y,
            hideAdd: Z,
            centered: $,
            addIcon: k,
            removeIcon: C,
            moreIcon: w,
            popupClassName: E,
            children: x,
            items: S,
            animated: R,
            style: _,
            indicatorSize: I,
            indicator: N,
          } = e,
          P = t3(e, [
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
          { prefixCls: M } = P,
          { direction: T, tabs: O, getPrefixCls: L, getPopupContainer: K } = r.useContext(tL.E_),
          D = L('tabs', M),
          z = (0, tK.Z)(D),
          [A, B, j] = t8(D, z);
        'editable-card' === m &&
          (p = {
            onEdit: (e, t) => {
              let { key: n, event: r } = t;
              null == y || y('add' === e ? r : n, e);
            },
            removeIcon:
              null !== (t = null != C ? C : null == O ? void 0 : O.removeIcon) && void 0 !== t
                ? t
                : r.createElement(a.Z, null),
            addIcon: (null != k ? k : null == O ? void 0 : O.addIcon) || r.createElement(s.Z, null),
            showAdd: !0 !== Z,
          });
        let W = L(),
          X = (0, tD.Z)(g),
          G = (function (e, t) {
            return (
              e ||
              (0, e9.Z)(t)
                .map((e) => {
                  if (r.isValidElement(e)) {
                    let { key: t, props: n } = e,
                      r = n || {},
                      { tab: o } = r,
                      a = tB(r, ['tab']);
                    return Object.assign(Object.assign({ key: String(t) }, a), { label: o });
                  }
                  return null;
                })
                .filter((e) => e)
            );
          })(S, x),
          F = (function (e) {
            let t,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { inkBar: !0, tabPane: !1 };
            return (
              (t =
                !1 === n
                  ? { inkBar: !1, tabPane: !1 }
                  : !0 === n
                    ? { inkBar: !0, tabPane: !0 }
                    : Object.assign({ inkBar: !0 }, 'object' == typeof n ? n : {})).tabPane &&
                (t.tabPaneMotion = Object.assign(Object.assign({}, tA), { motionName: (0, tz.m)(e, 'switch') })),
              t
            );
          })(D, R),
          H = Object.assign(Object.assign({}, null == O ? void 0 : O.style), _),
          V = {
            align:
              null !== (n = null == N ? void 0 : N.align) && void 0 !== n
                ? n
                : null === (o = null == O ? void 0 : O.indicator) || void 0 === o
                  ? void 0
                  : o.align,
            size:
              null !==
                (d =
                  null !== (l = null !== (i = null == N ? void 0 : N.size) && void 0 !== i ? i : I) && void 0 !== l
                    ? l
                    : null === (c = null == O ? void 0 : O.indicator) || void 0 === c
                      ? void 0
                      : c.size) && void 0 !== d
                ? d
                : null == O
                  ? void 0
                  : O.indicatorSize,
          };
        return A(
          r.createElement(
            tO,
            Object.assign({ direction: T, getPopupContainer: K, moreTransitionName: `${W}-slide-up` }, P, {
              items: G,
              className: f()(
                {
                  [`${D}-${X}`]: X,
                  [`${D}-card`]: ['card', 'editable-card'].includes(m),
                  [`${D}-editable-card`]: 'editable-card' === m,
                  [`${D}-centered`]: $,
                },
                null == O ? void 0 : O.className,
                b,
                h,
                B,
                j,
                z,
              ),
              popupClassName: f()(E, B, j, z),
              style: H,
              editable: p,
              moreIcon:
                null !== (v = null != w ? w : null == O ? void 0 : O.moreIcon) && void 0 !== v
                  ? v
                  : r.createElement(u, null),
              prefixCls: D,
              animated: F,
              indicator: V,
            }),
          ),
        );
      };
      ne.TabPane = () => null;
      let nt = ne;
    },
  });
