'use strict';
(exports.id = 503),
  (exports.ids = [503]),
  (exports.modules = {
    99460: (e, t, n) => {
      n.d(t, { Z: () => M });
      var c = n(93727),
        r = n(3729),
        o = n(81202),
        a = n(89369);
      n(41255);
      var E = n(67862),
        i = r.createContext(null),
        u = n(72375),
        s = n(17981),
        l = [],
        N = n(47058),
        d = 'rc-util-locker-'.concat(Date.now()),
        S = 0,
        _ = !1,
        f = function (e) {
          return (
            !1 !== e &&
            ((0, a.Z)() && e
              ? 'string' == typeof e
                ? document.querySelector(e)
                : 'function' == typeof e
                  ? e()
                  : e
              : null)
          );
        };
      let M = r.forwardRef(function (e, t) {
        var n,
          M,
          U,
          T,
          A = e.open,
          C = e.autoLock,
          I = e.getContainer,
          O = (e.debug, e.autoDestroy),
          h = void 0 === O || O,
          R = e.children,
          v = r.useState(A),
          L = (0, c.Z)(v, 2),
          P = L[0],
          m = L[1],
          F = P || A;
        r.useEffect(
          function () {
            (h || A) && m(A);
          },
          [A, h],
        );
        var y = r.useState(function () {
            return f(I);
          }),
          H = (0, c.Z)(y, 2),
          K = H[0],
          p = H[1];
        r.useEffect(function () {
          var e = f(I);
          p(null != e ? e : null);
        });
        var b = (function (e, t) {
            var n = r.useState(function () {
                return (0, a.Z)() ? document.createElement('div') : null;
              }),
              o = (0, c.Z)(n, 1)[0],
              E = r.useRef(!1),
              N = r.useContext(i),
              d = r.useState(l),
              S = (0, c.Z)(d, 2),
              _ = S[0],
              f = S[1],
              M =
                N ||
                (E.current
                  ? void 0
                  : function (e) {
                      f(function (t) {
                        return [e].concat((0, u.Z)(t));
                      });
                    });
            function U() {
              o.parentElement || document.body.appendChild(o), (E.current = !0);
            }
            function T() {
              var e;
              null === (e = o.parentElement) || void 0 === e || e.removeChild(o), (E.current = !1);
            }
            return (
              (0, s.Z)(
                function () {
                  return e ? (N ? N(U) : U()) : T(), T;
                },
                [e],
              ),
              (0, s.Z)(
                function () {
                  _.length &&
                    (_.forEach(function (e) {
                      return e();
                    }),
                    f(l));
                },
                [_],
              ),
              [o, M]
            );
          })(F && !K, 0),
          g = (0, c.Z)(b, 2),
          w = g[0],
          Z = g[1],
          W = null != K ? K : w;
        (n = !!(C && A && (0, a.Z)() && (W === w || W === document.body))),
          (M = r.useState(function () {
            return (S += 1), ''.concat(d, '_').concat(S);
          })),
          (U = (0, c.Z)(M, 1)[0]),
          (0, s.Z)(
            function () {
              if (n) {
                var e,
                  t = ((e = document.body),
                  'undefined' != typeof document && e && e instanceof Element
                    ? (function (e) {
                        var t,
                          n,
                          c = 'rc-scrollbar-measure-'.concat(Math.random().toString(36).substring(7)),
                          r = document.createElement('div');
                        r.id = c;
                        var o = r.style;
                        if (
                          ((o.position = 'absolute'),
                          (o.left = '0'),
                          (o.top = '0'),
                          (o.width = '100px'),
                          (o.height = '100px'),
                          (o.overflow = 'scroll'),
                          e)
                        ) {
                          var a = getComputedStyle(e);
                          (o.scrollbarColor = a.scrollbarColor), (o.scrollbarWidth = a.scrollbarWidth);
                          var E = getComputedStyle(e, '::-webkit-scrollbar'),
                            i = parseInt(E.width, 10),
                            u = parseInt(E.height, 10);
                          try {
                            var s = i ? 'width: '.concat(E.width, ';') : '',
                              l = u ? 'height: '.concat(E.height, ';') : '';
                            (0, N.hq)('\n#'.concat(c, '::-webkit-scrollbar {\n').concat(s, '\n').concat(l, '\n}'), c);
                          } catch (e) {
                            console.error(e), (t = i), (n = u);
                          }
                        }
                        document.body.appendChild(r);
                        var d = e && t && !isNaN(t) ? t : r.offsetWidth - r.clientWidth,
                          S = e && n && !isNaN(n) ? n : r.offsetHeight - r.clientHeight;
                        return document.body.removeChild(r), (0, N.jL)(c), { width: d, height: S };
                      })(e)
                    : { width: 0, height: 0 }).width,
                  c =
                    document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) &&
                    window.innerWidth > document.body.offsetWidth;
                (0, N.hq)(
                  '\nhtml body {\n  overflow-y: hidden;\n  '.concat(
                    c ? 'width: calc(100% - '.concat(t, 'px);') : '',
                    '\n}',
                  ),
                  U,
                );
              } else (0, N.jL)(U);
              return function () {
                (0, N.jL)(U);
              };
            },
            [n, U],
          );
        var D = null;
        R && (0, E.Yr)(R) && t && (D = R.ref);
        var G = (0, E.x1)(D, t);
        if (!F || !(0, a.Z)() || void 0 === K) return null;
        var x = !1 === W || ('boolean' == typeof T && (_ = T), _),
          Q = R;
        return (
          t && (Q = r.cloneElement(R, { ref: G })),
          r.createElement(i.Provider, { value: Z }, x ? Q : (0, o.createPortal)(Q, W))
        );
      });
    },
    95295: (e, t, n) => {
      n.d(t, { m: () => c });
      let c = (e, t, n) => (void 0 !== n ? n : `${e}-${t}`);
    },
    21029: (e, t, n) => {
      n.d(t, { Z: () => r });
      var c = {
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
          if ((e.altKey && !e.ctrlKey) || e.metaKey || (t >= c.F1 && t <= c.F12)) return !1;
          switch (t) {
            case c.ALT:
            case c.CAPS_LOCK:
            case c.CONTEXT_MENU:
            case c.CTRL:
            case c.DOWN:
            case c.END:
            case c.ESC:
            case c.HOME:
            case c.INSERT:
            case c.LEFT:
            case c.MAC_FF_META:
            case c.META:
            case c.NUMLOCK:
            case c.NUM_CENTER:
            case c.PAGE_DOWN:
            case c.PAGE_UP:
            case c.PAUSE:
            case c.PRINT_SCREEN:
            case c.RIGHT:
            case c.SHIFT:
            case c.UP:
            case c.WIN_KEY:
            case c.WIN_KEY_RIGHT:
              return !1;
            default:
              return !0;
          }
        },
        isCharacterKey: function (e) {
          if (
            (e >= c.ZERO && e <= c.NINE) ||
            (e >= c.NUM_ZERO && e <= c.NUM_MULTIPLY) ||
            (e >= c.A && e <= c.Z) ||
            (-1 !== window.navigator.userAgent.indexOf('WebKit') && 0 === e)
          )
            return !0;
          switch (e) {
            case c.SPACE:
            case c.QUESTION_MARK:
            case c.NUM_PLUS:
            case c.NUM_MINUS:
            case c.NUM_PERIOD:
            case c.NUM_DIVISION:
            case c.SEMICOLON:
            case c.DASH:
            case c.EQUALS:
            case c.COMMA:
            case c.PERIOD:
            case c.SLASH:
            case c.APOSTROPHE:
            case c.SINGLE_QUOTE:
            case c.OPEN_SQUARE_BRACKET:
            case c.BACKSLASH:
            case c.CLOSE_SQUARE_BRACKET:
              return !0;
            default:
              return !1;
          }
        },
      };
      let r = c;
    },
  });
