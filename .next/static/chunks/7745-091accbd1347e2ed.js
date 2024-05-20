(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7745],
  {
    99974: function (e, t, r) {
      'use strict';
      var n = r(26314);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.BroadcastChannel = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'nextauth.message';
          return {
            receive: function (t) {
              var r = function (r) {
                if (r.key === e) {
                  var n,
                    o = JSON.parse(null !== (n = r.newValue) && void 0 !== n ? n : '{}');
                  (null == o ? void 0 : o.event) === 'session' && null != o && o.data && t(o);
                }
              };
              return (
                window.addEventListener('storage', r),
                function () {
                  return window.removeEventListener('storage', r);
                }
              );
            },
            post: function (t) {
              if ('undefined' != typeof window)
                try {
                  localStorage.setItem(e, JSON.stringify(u(u({}, t), {}, { timestamp: f() })));
                } catch (e) {}
            },
          };
        }),
        (t.apiBaseUrl = l),
        (t.fetchData = function (e, t, r) {
          return c.apply(this, arguments);
        }),
        (t.now = f);
      var o = n(r(74001)),
        a = n(r(8104)),
        i = n(r(64662));
      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                (0, a.default)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : s(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function c() {
        return (c = (0, i.default)(
          o.default.mark(function e(t, r, n) {
            var a,
              i,
              s,
              c,
              f,
              d,
              p,
              h,
              v,
              y = arguments;
            return o.default.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (i = (a = y.length > 3 && void 0 !== y[3] ? y[3] : {}).ctx),
                        (c = void 0 === (s = a.req) ? (null == i ? void 0 : i.req) : s),
                        (f = ''.concat(l(r), '/').concat(t)),
                        (e.prev = 2),
                        (p = {
                          headers: u(
                            { 'Content-Type': 'application/json' },
                            null != c && null !== (d = c.headers) && void 0 !== d && d.cookie
                              ? { cookie: c.headers.cookie }
                              : {},
                          ),
                        }),
                        null != c && c.body && ((p.body = JSON.stringify(c.body)), (p.method = 'POST')),
                        (e.next = 7),
                        fetch(f, p)
                      );
                    case 7:
                      return (h = e.sent), (e.next = 10), h.json();
                    case 10:
                      if (((v = e.sent), h.ok)) {
                        e.next = 13;
                        break;
                      }
                      throw v;
                    case 13:
                      return e.abrupt('return', Object.keys(v).length > 0 ? v : null);
                    case 16:
                      return (
                        (e.prev = 16),
                        (e.t0 = e.catch(2)),
                        n.error('CLIENT_FETCH_ERROR', { error: e.t0, url: f }),
                        e.abrupt('return', null)
                      );
                    case 20:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 16]],
            );
          }),
        )).apply(this, arguments);
      }
      function l(e) {
        return 'undefined' == typeof window ? ''.concat(e.baseUrlServer).concat(e.basePathServer) : e.basePath;
      }
      function f() {
        return Math.floor(Date.now() / 1e3);
      }
    },
    92118: function (e, t, r) {
      'use strict';
      var n = r(26314);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.UnsupportedStrategy =
          t.UnknownError =
          t.OAuthCallbackError =
          t.MissingSecret =
          t.MissingAuthorize =
          t.MissingAdapterMethods =
          t.MissingAdapter =
          t.MissingAPIRoute =
          t.InvalidCallbackUrl =
          t.AccountNotLinkedError =
            void 0),
        (t.adapterErrorHandler = function (e, t) {
          if (e)
            return Object.keys(e).reduce(function (r, n) {
              return (
                (r[n] = (0, a.default)(
                  o.default.mark(function r() {
                    var a,
                      i,
                      s,
                      u,
                      c,
                      l = arguments;
                    return o.default.wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              for (r.prev = 0, i = Array((a = l.length)), s = 0; s < a; s++) i[s] = l[s];
                              return (
                                t.debug('adapter_'.concat(n), { args: i }), (u = e[n]), (r.next = 6), u.apply(void 0, i)
                              );
                            case 6:
                              return r.abrupt('return', r.sent);
                            case 9:
                              throw (
                                ((r.prev = 9),
                                (r.t0 = r.catch(0)),
                                t.error('adapter_error_'.concat(n), r.t0),
                                ((c = new h(r.t0)).name = ''.concat(T(n), 'Error')),
                                c)
                              );
                            case 15:
                            case 'end':
                              return r.stop();
                          }
                      },
                      r,
                      null,
                      [[0, 9]],
                    );
                  }),
                )),
                r
              );
            }, {});
        }),
        (t.capitalize = T),
        (t.eventsErrorHandler = function (e, t) {
          return Object.keys(e).reduce(function (r, n) {
            return (
              (r[n] = (0, a.default)(
                o.default.mark(function r() {
                  var a,
                    i = arguments;
                  return o.default.wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (r.prev = 0), (a = e[n]), (r.next = 4), a.apply(void 0, i);
                          case 4:
                            return r.abrupt('return', r.sent);
                          case 7:
                            (r.prev = 7), (r.t0 = r.catch(0)), t.error(''.concat(O(n), '_EVENT_ERROR'), r.t0);
                          case 10:
                          case 'end':
                            return r.stop();
                        }
                    },
                    r,
                    null,
                    [[0, 7]],
                  );
                }),
              )),
              r
            );
          }, {});
        }),
        (t.upperSnake = O);
      var o = n(r(74001)),
        a = n(r(64662)),
        i = n(r(95248)),
        s = n(r(8104)),
        u = n(r(86358)),
        c = n(r(1127)),
        l = n(r(35684)),
        f = n(r(60746)),
        d = n(r(83654));
      function p(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = (0, d.default)(e);
          if (t) {
            var o = (0, d.default)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return (0, f.default)(this, r);
        };
      }
      var h = (function (e) {
        (0, l.default)(r, e);
        var t = p(r);
        function r(e) {
          var n, o;
          return (
            (0, u.default)(this, r),
            ((o = t.call(this, null !== (n = null == e ? void 0 : e.message) && void 0 !== n ? n : e)).name =
              'UnknownError'),
            (o.code = e.code),
            e instanceof Error && (o.stack = e.stack),
            o
          );
        }
        return (
          (0, c.default)(r, [
            {
              key: 'toJSON',
              value: function () {
                return { name: this.name, message: this.message, stack: this.stack };
              },
            },
          ]),
          r
        );
      })((0, n(r(15058)).default)(Error));
      t.UnknownError = h;
      var v = (function (e) {
        (0, l.default)(r, e);
        var t = p(r);
        function r() {
          var e;
          (0, u.default)(this, r);
          for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(o))), (0, s.default)((0, i.default)(e), 'name', 'OAuthCallbackError'), e
          );
        }
        return (0, c.default)(r);
      })(h);
      t.OAuthCallbackError = v;
      var y = (function (e) {
        (0, l.default)(r, e);
        var t = p(r);
        function r() {
          var e;
          (0, u.default)(this, r);
          for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, s.default)((0, i.default)(e), 'name', 'AccountNotLinkedError'),
            e
          );
        }
        return (0, c.default)(r);
      })(h);
      t.AccountNotLinkedError = y;
      var g = (function (e) {
        (0, l.default)(r, e);
        var t = p(r);
        function r() {
          var e;
          (0, u.default)(this, r);
          for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, s.default)((0, i.default)(e), 'name', 'MissingAPIRouteError'),
            (0, s.default)((0, i.default)(e), 'code', 'MISSING_NEXTAUTH_API_ROUTE_ERROR'),
            e
          );
        }
        return (0, c.default)(r);
      })(h);
      t.MissingAPIRoute = g;
      var m = (function (e) {
        (0, l.default)(r, e);
        var t = p(r);
        function r() {
          var e;
          (0, u.default)(this, r);
          for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, s.default)((0, i.default)(e), 'name', 'MissingSecretError'),
            (0, s.default)((0, i.default)(e), 'code', 'NO_SECRET'),
            e
          );
        }
        return (0, c.default)(r);
      })(h);
      t.MissingSecret = m;
      var b = (function (e) {
        (0, l.default)(r, e);
        var t = p(r);
        function r() {
          var e;
          (0, u.default)(this, r);
          for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, s.default)((0, i.default)(e), 'name', 'MissingAuthorizeError'),
            (0, s.default)((0, i.default)(e), 'code', 'CALLBACK_CREDENTIALS_HANDLER_ERROR'),
            e
          );
        }
        return (0, c.default)(r);
      })(h);
      t.MissingAuthorize = b;
      var x = (function (e) {
        (0, l.default)(r, e);
        var t = p(r);
        function r() {
          var e;
          (0, u.default)(this, r);
          for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, s.default)((0, i.default)(e), 'name', 'MissingAdapterError'),
            (0, s.default)((0, i.default)(e), 'code', 'EMAIL_REQUIRES_ADAPTER_ERROR'),
            e
          );
        }
        return (0, c.default)(r);
      })(h);
      t.MissingAdapter = x;
      var _ = (function (e) {
        (0, l.default)(r, e);
        var t = p(r);
        function r() {
          var e;
          (0, u.default)(this, r);
          for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, s.default)((0, i.default)(e), 'name', 'MissingAdapterMethodsError'),
            (0, s.default)((0, i.default)(e), 'code', 'MISSING_ADAPTER_METHODS_ERROR'),
            e
          );
        }
        return (0, c.default)(r);
      })(h);
      t.MissingAdapterMethods = _;
      var E = (function (e) {
        (0, l.default)(r, e);
        var t = p(r);
        function r() {
          var e;
          (0, u.default)(this, r);
          for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, s.default)((0, i.default)(e), 'name', 'UnsupportedStrategyError'),
            (0, s.default)((0, i.default)(e), 'code', 'CALLBACK_CREDENTIALS_JWT_ERROR'),
            e
          );
        }
        return (0, c.default)(r);
      })(h);
      t.UnsupportedStrategy = E;
      var w = (function (e) {
        (0, l.default)(r, e);
        var t = p(r);
        function r() {
          var e;
          (0, u.default)(this, r);
          for (var n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, s.default)((0, i.default)(e), 'name', 'InvalidCallbackUrl'),
            (0, s.default)((0, i.default)(e), 'code', 'INVALID_CALLBACK_URL_ERROR'),
            e
          );
        }
        return (0, c.default)(r);
      })(h);
      function O(e) {
        return e.replace(/([A-Z])/g, '_$1').toUpperCase();
      }
      function T(e) {
        return ''.concat(e[0].toUpperCase()).concat(e.slice(1));
      }
      t.InvalidCallbackUrl = w;
    },
    82749: function (e, t, r) {
      'use strict';
      var n,
        o,
        a,
        i,
        s,
        u = r(62601),
        c = r(26314),
        l = r(61565);
      Object.defineProperty(t, '__esModule', { value: !0 });
      var f = {
        SessionContext: !0,
        useSession: !0,
        getSession: !0,
        getCsrfToken: !0,
        getProviders: !0,
        signIn: !0,
        signOut: !0,
        SessionProvider: !0,
      };
      (t.SessionContext = void 0),
        (t.SessionProvider = function (e) {
          if (!k) throw Error('React Context is unavailable in Server Components');
          var t,
            r,
            n,
            o,
            a,
            i,
            s = e.children,
            u = e.basePath,
            c = e.refetchInterval,
            l = e.refetchWhenOffline;
          u && (L.basePath = u);
          var f = void 0 !== e.session;
          L._lastSync = f ? (0, b.now)() : 0;
          var p = y.useState(function () {
              return f && (L._session = e.session), e.session;
            }),
            g = (0, v.default)(p, 2),
            m = g[0],
            _ = g[1],
            E = y.useState(!f),
            w = (0, v.default)(E, 2),
            O = w[0],
            T = w[1];
          y.useEffect(function () {
            return (
              (L._getSession = (0, h.default)(
                d.default.mark(function e() {
                  var t,
                    r,
                    n = arguments;
                  return d.default.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t = (n.length > 0 && void 0 !== n[0] ? n[0] : {}).event),
                              (e.prev = 1),
                              !((r = 'storage' === t) || void 0 === L._session))
                            ) {
                              e.next = 10;
                              break;
                            }
                            return (L._lastSync = (0, b.now)()), (e.next = 7), P({ broadcast: !r });
                          case 7:
                            return (L._session = e.sent), _(L._session), e.abrupt('return');
                          case 10:
                            if (!(!t || null === L._session || (0, b.now)() < L._lastSync)) {
                              e.next = 12;
                              break;
                            }
                            return e.abrupt('return');
                          case 12:
                            return (L._lastSync = (0, b.now)()), (e.next = 15), P();
                          case 15:
                            (L._session = e.sent), _(L._session), (e.next = 22);
                            break;
                          case 19:
                            (e.prev = 19), (e.t0 = e.catch(1)), S.error('CLIENT_SESSION_ERROR', e.t0);
                          case 22:
                            return (e.prev = 22), T(!1), e.finish(22);
                          case 25:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 19, 22, 25]],
                  );
                }),
              )),
              L._getSession(),
              function () {
                (L._lastSync = 0), (L._session = void 0), (L._getSession = function () {});
              }
            );
          }, []),
            y.useEffect(function () {
              var e = R.receive(function () {
                return L._getSession({ event: 'storage' });
              });
              return function () {
                return e();
              };
            }, []),
            y.useEffect(
              function () {
                var t = e.refetchOnWindowFocus,
                  r = void 0 === t || t,
                  n = function () {
                    r && 'visible' === document.visibilityState && L._getSession({ event: 'visibilitychange' });
                  };
                return (
                  document.addEventListener('visibilitychange', n, !1),
                  function () {
                    return document.removeEventListener('visibilitychange', n, !1);
                  }
                );
              },
              [e.refetchOnWindowFocus],
            );
          var C =
              ((t = y.useState('undefined' != typeof navigator && navigator.onLine)),
              (n = (r = (0, v.default)(t, 2))[0]),
              (o = r[1]),
              (a = function () {
                return o(!0);
              }),
              (i = function () {
                return o(!1);
              }),
              y.useEffect(function () {
                return (
                  window.addEventListener('online', a),
                  window.addEventListener('offline', i),
                  function () {
                    window.removeEventListener('online', a), window.removeEventListener('offline', i);
                  }
                );
              }, []),
              n),
            M = !1 !== l || C;
          y.useEffect(
            function () {
              if (c && M) {
                var e = setInterval(function () {
                  L._session && L._getSession({ event: 'poll' });
                }, 1e3 * c);
                return function () {
                  return clearInterval(e);
                };
              }
            },
            [c, M],
          );
          var I = y.useMemo(
            function () {
              return {
                data: m,
                status: O ? 'loading' : m ? 'authenticated' : 'unauthenticated',
                update: function (e) {
                  return (0, h.default)(
                    d.default.mark(function t() {
                      var r;
                      return d.default.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!(O || !m)) {
                                t.next = 2;
                                break;
                              }
                              return t.abrupt('return');
                            case 2:
                              return T(!0), (t.t0 = b.fetchData), (t.t1 = L), (t.t2 = S), (t.next = 8), j();
                            case 8:
                              return (
                                (t.t3 = t.sent),
                                (t.t4 = e),
                                (t.t5 = { csrfToken: t.t3, data: t.t4 }),
                                (t.t6 = { body: t.t5 }),
                                (t.t7 = { req: t.t6 }),
                                (t.next = 15),
                                (0, t.t0)('session', t.t1, t.t2, t.t7)
                              );
                            case 15:
                              return (
                                (r = t.sent),
                                T(!1),
                                r && (_(r), R.post({ event: 'session', data: { trigger: 'getSession' } })),
                                t.abrupt('return', r)
                              );
                            case 19:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    }),
                  )();
                },
              };
            },
            [m, O],
          );
          return (0, x.jsx)(k.Provider, { value: I, children: s });
        }),
        (t.getCsrfToken = j),
        (t.getProviders = I),
        (t.getSession = P),
        (t.signIn = function (e, t, r) {
          return N.apply(this, arguments);
        }),
        (t.signOut = function (e) {
          return U.apply(this, arguments);
        }),
        (t.useSession = function (e) {
          if (!k) throw Error('React Context is unavailable in Server Components');
          var t = y.useContext(k),
            r = null != e ? e : {},
            n = r.required,
            o = r.onUnauthenticated,
            a = n && 'unauthenticated' === t.status;
          return (y.useEffect(
            function () {
              if (a) {
                var e = '/api/auth/signin?'.concat(
                  new URLSearchParams({ error: 'SessionRequired', callbackUrl: window.location.href }),
                );
                o ? o() : (window.location.href = e);
              }
            },
            [a, o],
          ),
          a)
            ? { data: t.data, update: t.update, status: 'loading' }
            : t;
        });
      var d = c(r(74001)),
        p = c(r(8104)),
        h = c(r(64662)),
        v = c(r(12184)),
        y = w(r(2265)),
        g = w(r(82126)),
        m = c(r(62606)),
        b = r(99974),
        x = r(57437),
        _ = r(90738);
      function E(e) {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (E = function (e) {
          return e ? r : t;
        })(e);
      }
      function w(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== l(e) && 'function' != typeof e)) return { default: e };
        var r = E(t);
        if (r && r.has(e)) return r.get(e);
        var n = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if ('default' !== a && Object.prototype.hasOwnProperty.call(e, a)) {
            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, a, i) : (n[a] = e[a]);
          }
        return (n.default = e), r && r.set(e, n), n;
      }
      function O(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(Object(r), !0).forEach(function (t) {
                (0, p.default)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : O(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      Object.keys(_).forEach(function (e) {
        !('default' === e || '__esModule' === e || Object.prototype.hasOwnProperty.call(f, e)) &&
          ((e in t && t[e] === _[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return _[e];
              },
            }));
      });
      var L = {
          baseUrl: (0, m.default)(null !== (n = u.env.NEXTAUTH_URL) && void 0 !== n ? n : u.env.VERCEL_URL).origin,
          basePath: (0, m.default)(u.env.NEXTAUTH_URL).path,
          baseUrlServer: (0, m.default)(
            null !== (o = null !== (a = u.env.NEXTAUTH_URL_INTERNAL) && void 0 !== a ? a : u.env.NEXTAUTH_URL) &&
              void 0 !== o
              ? o
              : u.env.VERCEL_URL,
          ).origin,
          basePathServer: (0, m.default)(
            null !== (i = u.env.NEXTAUTH_URL_INTERNAL) && void 0 !== i ? i : u.env.NEXTAUTH_URL,
          ).path,
          _lastSync: 0,
          _session: void 0,
          _getSession: function () {},
        },
        R = (0, b.BroadcastChannel)(),
        S = (0, g.proxyLogger)(g.default, L.basePath),
        k = null === (s = y.createContext) || void 0 === s ? void 0 : s.call(y, void 0);
      function P(e) {
        return C.apply(this, arguments);
      }
      function C() {
        return (C = (0, h.default)(
          d.default.mark(function e(t) {
            var r, n;
            return d.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), (0, b.fetchData)('session', L, S, t);
                  case 2:
                    return (
                      (n = e.sent),
                      (null === (r = null == t ? void 0 : t.broadcast) || void 0 === r || r) &&
                        R.post({ event: 'session', data: { trigger: 'getSession' } }),
                      e.abrupt('return', n)
                    );
                  case 5:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function j(e) {
        return M.apply(this, arguments);
      }
      function M() {
        return (M = (0, h.default)(
          d.default.mark(function e(t) {
            var r;
            return d.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), (0, b.fetchData)('csrf', L, S, t);
                  case 2:
                    return (r = e.sent), e.abrupt('return', null == r ? void 0 : r.csrfToken);
                  case 4:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function I() {
        return A.apply(this, arguments);
      }
      function A() {
        return (A = (0, h.default)(
          d.default.mark(function e() {
            return d.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), (0, b.fetchData)('providers', L, S);
                  case 2:
                    return e.abrupt('return', e.sent);
                  case 3:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function N() {
        return (N = (0, h.default)(
          d.default.mark(function e(t, r, n) {
            var o, a, i, s, u, c, l, f, p, h, v, y, g, m, x, _, E;
            return d.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = void 0 === (a = (o = null != r ? r : {}).callbackUrl) ? window.location.href : a),
                      (u = void 0 === (s = o.redirect) || s),
                      (c = (0, b.apiBaseUrl)(L)),
                      (e.next = 4),
                      I()
                    );
                  case 4:
                    if ((l = e.sent)) {
                      e.next = 8;
                      break;
                    }
                    return (window.location.href = ''.concat(c, '/error')), e.abrupt('return');
                  case 8:
                    if (!(!t || !(t in l))) {
                      e.next = 11;
                      break;
                    }
                    return (
                      (window.location.href = ''.concat(c, '/signin?').concat(new URLSearchParams({ callbackUrl: i }))),
                      e.abrupt('return')
                    );
                  case 11:
                    return (
                      (f = 'credentials' === l[t].type),
                      (p = 'email' === l[t].type),
                      (h = f || p),
                      (v = ''
                        .concat(c, '/')
                        .concat(f ? 'callback' : 'signin', '/')
                        .concat(t)),
                      (y = ''.concat(v).concat(n ? '?'.concat(new URLSearchParams(n)) : '')),
                      (e.t0 = fetch),
                      (e.t1 = y),
                      (e.t2 = { 'Content-Type': 'application/x-www-form-urlencoded' }),
                      (e.t3 = URLSearchParams),
                      (e.t4 = T),
                      (e.t5 = T({}, r)),
                      (e.t6 = {}),
                      (e.next = 25),
                      j()
                    );
                  case 25:
                    return (
                      (e.t7 = e.sent),
                      (e.t8 = i),
                      (e.t9 = { csrfToken: e.t7, callbackUrl: e.t8, json: !0 }),
                      (e.t10 = (0, e.t4)(e.t5, e.t6, e.t9)),
                      (e.t11 = new e.t3(e.t10)),
                      (e.t12 = { method: 'post', headers: e.t2, body: e.t11 }),
                      (e.next = 33),
                      (0, e.t0)(e.t1, e.t12)
                    );
                  case 33:
                    return (g = e.sent), (e.next = 36), g.json();
                  case 36:
                    if (((m = e.sent), !(u || !h))) {
                      e.next = 42;
                      break;
                    }
                    return (
                      (_ = null !== (x = m.url) && void 0 !== x ? x : i),
                      (window.location.href = _),
                      _.includes('#') && window.location.reload(),
                      e.abrupt('return')
                    );
                  case 42:
                    if (((E = new URL(m.url).searchParams.get('error')), !g.ok)) {
                      e.next = 46;
                      break;
                    }
                    return (e.next = 46), L._getSession({ event: 'storage' });
                  case 46:
                    return e.abrupt('return', { error: E, status: g.status, ok: g.ok, url: E ? null : m.url });
                  case 47:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function U() {
        return (U = (0, h.default)(
          d.default.mark(function e(t) {
            var r, n, o, a, i, s, u, c, l;
            return d.default.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (o = void 0 === (n = (null != t ? t : {}).callbackUrl) ? window.location.href : n),
                      (a = (0, b.apiBaseUrl)(L)),
                      (e.t0 = { 'Content-Type': 'application/x-www-form-urlencoded' }),
                      (e.t1 = URLSearchParams),
                      (e.next = 6),
                      j()
                    );
                  case 6:
                    return (
                      (e.t2 = e.sent),
                      (e.t3 = o),
                      (e.t4 = { csrfToken: e.t2, callbackUrl: e.t3, json: !0 }),
                      (e.t5 = new e.t1(e.t4)),
                      (i = { method: 'post', headers: e.t0, body: e.t5 }),
                      (e.next = 13),
                      fetch(''.concat(a, '/signout'), i)
                    );
                  case 13:
                    return (s = e.sent), (e.next = 16), s.json();
                  case 16:
                    if (
                      ((u = e.sent),
                      R.post({ event: 'session', data: { trigger: 'signout' } }),
                      !(null === (r = null == t ? void 0 : t.redirect) || void 0 === r || r))
                    ) {
                      e.next = 23;
                      break;
                    }
                    return (
                      (l = null !== (c = u.url) && void 0 !== c ? c : o),
                      (window.location.href = l),
                      l.includes('#') && window.location.reload(),
                      e.abrupt('return')
                    );
                  case 23:
                    return (e.next = 25), L._getSession({ event: 'storage' });
                  case 25:
                    return e.abrupt('return', u);
                  case 26:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      t.SessionContext = k;
    },
    90738: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
    },
    82126: function (e, t, r) {
      'use strict';
      var n = r(26314);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0),
        (t.proxyLogger = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
            t = arguments.length > 1 ? arguments[1] : void 0;
          try {
            if ('undefined' == typeof window) return e;
            var r = {},
              n = function (e) {
                r[e] = function (r, n) {
                  u[e](r, n), 'error' === e && (n = s(n)), (n.client = !0);
                  var a = ''.concat(t, '/_log'),
                    c = new URLSearchParams(
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var r = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? i(Object(r), !0).forEach(function (t) {
                                (0, o.default)(e, t, r[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                              : i(Object(r)).forEach(function (t) {
                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                });
                        }
                        return e;
                      })({ level: e, code: r }, n),
                    );
                  return navigator.sendBeacon
                    ? navigator.sendBeacon(a, c)
                    : fetch(a, { method: 'POST', body: c, keepalive: !0 });
                };
              };
            for (var a in e) n(a);
            return r;
          } catch (e) {
            return u;
          }
        }),
        (t.setLogger = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          t || (u.debug = function () {}),
            e.error && (u.error = e.error),
            e.warn && (u.warn = e.warn),
            e.debug && (u.debug = e.debug);
        });
      var o = n(r(8104)),
        a = r(92118);
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        var t;
        return e instanceof Error && !(e instanceof a.UnknownError)
          ? { message: e.message, stack: e.stack, name: e.name }
          : (null != e &&
              e.error &&
              ((e.error = s(e.error)), (e.message = null !== (t = e.message) && void 0 !== t ? t : e.error.message)),
            e);
      }
      var u = {
        error: function (e, t) {
          (t = s(t)),
            console.error(
              '[next-auth][error]['.concat(e, ']'),
              '\nhttps://next-auth.js.org/errors#'.concat(e.toLowerCase()),
              t.message,
              t,
            );
        },
        warn: function (e) {
          console.warn(
            '[next-auth][warn]['.concat(e, ']'),
            '\nhttps://next-auth.js.org/warnings#'.concat(e.toLowerCase()),
          );
        },
        debug: function (e, t) {
          console.log('[next-auth][debug]['.concat(e, ']'), t);
        },
      };
      t.default = u;
    },
    62606: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          var t;
          let r = new URL('http://localhost:3000/api/auth');
          e && !e.startsWith('http') && (e = `https://${e}`);
          let n = new URL(null !== (t = e) && void 0 !== t ? t : r),
            o = ('/' === n.pathname ? r.pathname : n.pathname).replace(/\/$/, ''),
            a = `${n.origin}${o}`;
          return { origin: n.origin, host: n.host, path: o, base: a, toString: () => a };
        });
    },
    27563: function (e) {
      (e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    98158: function (e) {
      (e.exports = function (e) {
        if (Array.isArray(e)) return e;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    95248: function (e) {
      (e.exports = function (e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    64662: function (e) {
      function t(e, t, r, n, o, a, i) {
        try {
          var s = e[a](i),
            u = s.value;
        } catch (e) {
          r(e);
          return;
        }
        s.done ? t(u) : Promise.resolve(u).then(n, o);
      }
      (e.exports = function (e) {
        return function () {
          var r = this,
            n = arguments;
          return new Promise(function (o, a) {
            var i = e.apply(r, n);
            function s(e) {
              t(i, o, a, s, u, 'next', e);
            }
            function u(e) {
              t(i, o, a, s, u, 'throw', e);
            }
            s(void 0);
          });
        };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    86358: function (e) {
      (e.exports = function (e, t) {
        if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    84951: function (e, t, r) {
      var n = r(60795),
        o = r(10720);
      (e.exports = function (e, t, r) {
        if (o()) return Reflect.construct.apply(null, arguments);
        var a = [null];
        a.push.apply(a, t);
        var i = new (e.bind.apply(e, a))();
        return r && n(i, r.prototype), i;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    1127: function (e, t, r) {
      var n = r(19040);
      function o(e, t) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, n(o.key), o);
        }
      }
      (e.exports = function (e, t, r) {
        return t && o(e.prototype, t), r && o(e, r), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    8104: function (e, t, r) {
      var n = r(19040);
      (e.exports = function (e, t, r) {
        return (
          (t = n(t)) in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    83654: function (e) {
      function t(r) {
        return (
          (e.exports = t =
            Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(r)
        );
      }
      (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    35684: function (e, t, r) {
      var n = r(60795);
      (e.exports = function (e, t) {
        if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && n(e, t);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    26314: function (e) {
      (e.exports = function (e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    48960: function (e) {
      (e.exports = function (e) {
        try {
          return -1 !== Function.toString.call(e).indexOf('[native code]');
        } catch (t) {
          return 'function' == typeof e;
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    10720: function (e) {
      function t() {
        try {
          var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return ((e.exports = t =
          function () {
            return !!r;
          }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports))();
      }
      (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    42731: function (e) {
      (e.exports = function (e, t) {
        var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (null != r) {
          var n,
            o,
            a,
            i,
            s = [],
            u = !0,
            c = !1;
          try {
            if (((a = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              u = !1;
            } else for (; !(u = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); u = !0);
          } catch (e) {
            (c = !0), (o = e);
          } finally {
            try {
              if (!u && null != r.return && ((i = r.return()), Object(i) !== i)) return;
            } finally {
              if (c) throw o;
            }
          }
          return s;
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    34980: function (e) {
      (e.exports = function () {
        throw TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    60746: function (e, t, r) {
      var n = r(61565).default,
        o = r(95248);
      (e.exports = function (e, t) {
        if (t && ('object' === n(t) || 'function' == typeof t)) return t;
        if (void 0 !== t) throw TypeError('Derived constructors may only return object or undefined');
        return o(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    14436: function (e, t, r) {
      var n = r(61565).default;
      function o() {
        'use strict';
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ (e.exports =
          o =
            function () {
              return r;
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
        var t,
          r = {},
          a = Object.prototype,
          i = a.hasOwnProperty,
          s =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          u = 'function' == typeof Symbol ? Symbol : {},
          c = u.iterator || '@@iterator',
          l = u.asyncIterator || '@@asyncIterator',
          f = u.toStringTag || '@@toStringTag';
        function d(e, t, r) {
          return Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }), e[t];
        }
        try {
          d({}, '');
        } catch (e) {
          d = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function p(e, r, n, o) {
          var a,
            i,
            u = Object.create((r && r.prototype instanceof b ? r : b).prototype);
          return (
            s(u, '_invoke', {
              value:
                ((a = new P(o || [])),
                (i = v),
                function (r, o) {
                  if (i === y) throw Error('Generator is already running');
                  if (i === g) {
                    if ('throw' === r) throw o;
                    return { value: t, done: !0 };
                  }
                  for (a.method = r, a.arg = o; ; ) {
                    var s = a.delegate;
                    if (s) {
                      var u = (function e(r, n) {
                        var o = n.method,
                          a = r.iterator[o];
                        if (a === t)
                          return (
                            (n.delegate = null),
                            ('throw' === o &&
                              r.iterator.return &&
                              ((n.method = 'return'), (n.arg = t), e(r, n), 'throw' === n.method)) ||
                              ('return' !== o &&
                                ((n.method = 'throw'),
                                (n.arg = TypeError("The iterator does not provide a '" + o + "' method")))),
                            m
                          );
                        var i = h(a, r.iterator, n.arg);
                        if ('throw' === i.type) return (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), m;
                        var s = i.arg;
                        return s
                          ? s.done
                            ? ((n[r.resultName] = s.value),
                              (n.next = r.nextLoc),
                              'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                              (n.delegate = null),
                              m)
                            : s
                          : ((n.method = 'throw'),
                            (n.arg = TypeError('iterator result is not an object')),
                            (n.delegate = null),
                            m);
                      })(s, a);
                      if (u) {
                        if (u === m) continue;
                        return u;
                      }
                    }
                    if ('next' === a.method) a.sent = a._sent = a.arg;
                    else if ('throw' === a.method) {
                      if (i === v) throw ((i = g), a.arg);
                      a.dispatchException(a.arg);
                    } else 'return' === a.method && a.abrupt('return', a.arg);
                    i = y;
                    var c = h(e, n, a);
                    if ('normal' === c.type) {
                      if (((i = a.done ? g : 'suspendedYield'), c.arg === m)) continue;
                      return { value: c.arg, done: a.done };
                    }
                    'throw' === c.type && ((i = g), (a.method = 'throw'), (a.arg = c.arg));
                  }
                }),
            }),
            u
          );
        }
        function h(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        r.wrap = p;
        var v = 'suspendedStart',
          y = 'executing',
          g = 'completed',
          m = {};
        function b() {}
        function x() {}
        function _() {}
        var E = {};
        d(E, c, function () {
          return this;
        });
        var w = Object.getPrototypeOf,
          O = w && w(w(C([])));
        O && O !== a && i.call(O, c) && (E = O);
        var T = (_.prototype = b.prototype = Object.create(E));
        function L(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            d(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function R(e, t) {
          var r;
          s(this, '_invoke', {
            value: function (o, a) {
              function s() {
                return new t(function (r, s) {
                  !(function r(o, a, s, u) {
                    var c = h(e[o], e, a);
                    if ('throw' !== c.type) {
                      var l = c.arg,
                        f = l.value;
                      return f && 'object' == n(f) && i.call(f, '__await')
                        ? t.resolve(f.__await).then(
                            function (e) {
                              r('next', e, s, u);
                            },
                            function (e) {
                              r('throw', e, s, u);
                            },
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (l.value = e), s(l);
                            },
                            function (e) {
                              return r('throw', e, s, u);
                            },
                          );
                    }
                    u(c.arg);
                  })(o, a, r, s);
                });
              }
              return (r = r ? r.then(s, s) : s());
            },
          });
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function k(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function P(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(S, this), this.reset(!0);
        }
        function C(e) {
          if (e || '' === e) {
            var r = e[c];
            if (r) return r.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                a = function r() {
                  for (; ++o < e.length; ) if (i.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          throw TypeError(n(e) + ' is not iterable');
        }
        return (
          (x.prototype = _),
          s(T, 'constructor', { value: _, configurable: !0 }),
          s(_, 'constructor', { value: x, configurable: !0 }),
          (x.displayName = d(_, f, 'GeneratorFunction')),
          (r.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return !!t && (t === x || 'GeneratorFunction' === (t.displayName || t.name));
          }),
          (r.mark = function (e) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : ((e.__proto__ = _), d(e, f, 'GeneratorFunction')),
              (e.prototype = Object.create(T)),
              e
            );
          }),
          (r.awrap = function (e) {
            return { __await: e };
          }),
          L(R.prototype),
          d(R.prototype, l, function () {
            return this;
          }),
          (r.AsyncIterator = R),
          (r.async = function (e, t, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new R(p(e, t, n, o), a);
            return r.isGeneratorFunction(t)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          L(T),
          d(T, f, 'Generator'),
          d(T, c, function () {
            return this;
          }),
          d(T, 'toString', function () {
            return '[object Generator]';
          }),
          (r.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (r.values = C),
          (P.prototype = {
            constructor: P,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var r in this) 't' === r.charAt(0) && i.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function n(n, o) {
                return (s.type = 'throw'), (s.arg = e), (r.next = n), o && ((r.method = 'next'), (r.arg = t)), !!o;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ('root' === a.tryLoc) return n('end');
                if (a.tryLoc <= this.prev) {
                  var u = i.call(a, 'catchLoc'),
                    c = i.call(a, 'finallyLoc');
                  if (u && c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  } else {
                    if (!c) throw Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var n = this.tryEntries[r];
                if (n.tryLoc <= this.prev && i.call(n, 'finallyLoc') && this.prev < n.finallyLoc) {
                  var o = n;
                  break;
                }
              }
              o && ('break' === e || 'continue' === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o ? ((this.method = 'next'), (this.next = o.finallyLoc), m) : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                    ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                    : 'normal' === e.type && t && (this.next = t),
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), k(r), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var o = n.arg;
                    k(r);
                  }
                  return o;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: C(e), resultName: r, nextLoc: n }),
                'next' === this.method && (this.arg = t),
                m
              );
            },
          }),
          r
        );
      }
      (e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    60795: function (e) {
      function t(r, n) {
        return (
          (e.exports = t =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(r, n)
        );
      }
      (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    12184: function (e, t, r) {
      var n = r(98158),
        o = r(42731),
        a = r(42214),
        i = r(34980);
      (e.exports = function (e, t) {
        return n(e) || o(e, t) || a(e, t) || i();
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    89944: function (e, t, r) {
      var n = r(61565).default;
      (e.exports = function (e, t) {
        if ('object' != n(e) || !e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
          var o = r.call(e, t || 'default');
          if ('object' != n(o)) return o;
          throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    19040: function (e, t, r) {
      var n = r(61565).default,
        o = r(89944);
      (e.exports = function (e) {
        var t = o(e, 'string');
        return 'symbol' == n(t) ? t : t + '';
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    61565: function (e) {
      function t(r) {
        return (
          (e.exports = t =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(r)
        );
      }
      (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    42214: function (e, t, r) {
      var n = r(27563);
      (e.exports = function (e, t) {
        if (e) {
          if ('string' == typeof e) return n(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r))
            return Array.from(e);
          if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, t);
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    15058: function (e, t, r) {
      var n = r(83654),
        o = r(60795),
        a = r(48960),
        i = r(84951);
      function s(t) {
        var r = 'function' == typeof Map ? new Map() : void 0;
        return (
          (e.exports = s =
            function (e) {
              if (null === e || !a(e)) return e;
              if ('function' != typeof e) throw TypeError('Super expression must either be null or a function');
              if (void 0 !== r) {
                if (r.has(e)) return r.get(e);
                r.set(e, t);
              }
              function t() {
                return i(e, arguments, n(this).constructor);
              }
              return (
                (t.prototype = Object.create(e.prototype, {
                  constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
                })),
                o(t, e)
              );
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          s(t)
        );
      }
      (e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports);
    },
    74001: function (e, t, r) {
      var n = r(14436)();
      e.exports = n;
      try {
        regeneratorRuntime = n;
      } catch (e) {
        'object' == typeof globalThis
          ? (globalThis.regeneratorRuntime = n)
          : Function('r', 'regeneratorRuntime = r')(n);
      }
    },
    60171: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, {
          Bounce: function () {
            return O;
          },
          Flip: function () {
            return R;
          },
          Icons: function () {
            return v;
          },
          Slide: function () {
            return T;
          },
          ToastContainer: function () {
            return S;
          },
          Zoom: function () {
            return L;
          },
          collapseToast: function () {
            return l;
          },
          cssTransition: function () {
            return f;
          },
          toast: function () {
            return N;
          },
          useToast: function () {
            return b;
          },
          useToastContainer: function () {
            return y;
          },
        });
      var n = r(2265),
        o = function () {
          for (var e, t, r = 0, n = ''; r < arguments.length; )
            (e = arguments[r++]) &&
              (t = (function e(t) {
                var r,
                  n,
                  o = '';
                if ('string' == typeof t || 'number' == typeof t) o += t;
                else if ('object' == typeof t) {
                  if (Array.isArray(t))
                    for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += ' '), (o += n));
                  else for (r in t) t[r] && (o && (o += ' '), (o += r));
                }
                return o;
              })(e)) &&
              (n && (n += ' '), (n += t));
          return n;
        };
      let a = (e) => 'number' == typeof e && !isNaN(e),
        i = (e) => 'string' == typeof e,
        s = (e) => 'function' == typeof e,
        u = (e) => (i(e) || s(e) ? e : null),
        c = (e) => (0, n.isValidElement)(e) || i(e) || s(e) || a(e);
      function l(e, t, r) {
        void 0 === r && (r = 300);
        let { scrollHeight: n, style: o } = e;
        requestAnimationFrame(() => {
          (o.minHeight = 'initial'),
            (o.height = n + 'px'),
            (o.transition = `all ${r}ms`),
            requestAnimationFrame(() => {
              (o.height = '0'), (o.padding = '0'), (o.margin = '0'), setTimeout(t, r);
            });
        });
      }
      function f(e) {
        let { enter: t, exit: r, appendPosition: o = !1, collapse: a = !0, collapseDuration: i = 300 } = e;
        return function (e) {
          let { children: s, position: u, preventExitTransition: c, done: f, nodeRef: d, isIn: p } = e,
            h = o ? `${t}--${u}` : t,
            v = o ? `${r}--${u}` : r,
            y = (0, n.useRef)(0);
          return (
            (0, n.useLayoutEffect)(() => {
              let e = d.current,
                t = h.split(' '),
                r = (n) => {
                  n.target === d.current &&
                    (e.dispatchEvent(new Event('d')),
                    e.removeEventListener('animationend', r),
                    e.removeEventListener('animationcancel', r),
                    0 === y.current && 'animationcancel' !== n.type && e.classList.remove(...t));
                };
              e.classList.add(...t), e.addEventListener('animationend', r), e.addEventListener('animationcancel', r);
            }, []),
            (0, n.useEffect)(() => {
              let e = d.current,
                t = () => {
                  e.removeEventListener('animationend', t), a ? l(e, f, i) : f();
                };
              p || (c ? t() : ((y.current = 1), (e.className += ` ${v}`), e.addEventListener('animationend', t)));
            }, [p]),
            n.createElement(n.Fragment, null, s)
          );
        };
      }
      function d(e, t) {
        return null != e
          ? {
              content: e.content,
              containerId: e.props.containerId,
              id: e.props.toastId,
              theme: e.props.theme,
              type: e.props.type,
              data: e.props.data || {},
              isLoading: e.props.isLoading,
              icon: e.props.icon,
              status: t,
            }
          : {};
      }
      let p = {
          list: new Map(),
          emitQueue: new Map(),
          on(e, t) {
            return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this;
          },
          off(e, t) {
            if (t) {
              let r = this.list.get(e).filter((e) => e !== t);
              return this.list.set(e, r), this;
            }
            return this.list.delete(e), this;
          },
          cancelEmit(e) {
            let t = this.emitQueue.get(e);
            return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
          },
          emit(e) {
            this.list.has(e) &&
              this.list.get(e).forEach((t) => {
                let r = setTimeout(() => {
                  t(...[].slice.call(arguments, 1));
                }, 0);
                this.emitQueue.has(e) || this.emitQueue.set(e, []), this.emitQueue.get(e).push(r);
              });
          },
        },
        h = (e) => {
          let { theme: t, type: r, ...o } = e;
          return n.createElement('svg', {
            viewBox: '0 0 24 24',
            width: '100%',
            height: '100%',
            fill: 'colored' === t ? 'currentColor' : `var(--toastify-icon-color-${r})`,
            ...o,
          });
        },
        v = {
          info: function (e) {
            return n.createElement(
              h,
              { ...e },
              n.createElement('path', {
                d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z',
              }),
            );
          },
          warning: function (e) {
            return n.createElement(
              h,
              { ...e },
              n.createElement('path', {
                d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z',
              }),
            );
          },
          success: function (e) {
            return n.createElement(
              h,
              { ...e },
              n.createElement('path', {
                d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z',
              }),
            );
          },
          error: function (e) {
            return n.createElement(
              h,
              { ...e },
              n.createElement('path', {
                d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z',
              }),
            );
          },
          spinner: function () {
            return n.createElement('div', { className: 'Toastify__spinner' });
          },
        };
      function y(e) {
        let [, t] = (0, n.useReducer)((e) => e + 1, 0),
          [r, o] = (0, n.useState)([]),
          l = (0, n.useRef)(null),
          f = (0, n.useRef)(new Map()).current,
          h = (e) => -1 !== r.indexOf(e),
          y = (0, n.useRef)({
            toastKey: 1,
            displayedToast: 0,
            count: 0,
            queue: [],
            props: e,
            containerId: null,
            isToastActive: h,
            getToast: (e) => f.get(e),
          }).current;
        function g(e) {
          let { containerId: t } = e,
            { limit: r } = y.props;
          !r || (t && y.containerId !== t) || ((y.count -= y.queue.length), (y.queue = []));
        }
        function m(e) {
          o((t) => (null == e ? [] : t.filter((t) => t !== e)));
        }
        function b() {
          let { toastContent: e, toastProps: t, staleId: r } = y.queue.shift();
          _(e, t, r);
        }
        function x(e, r) {
          var o, h;
          let { delay: g, staleId: x, ...E } = r;
          if (
            !c(e) ||
            !l.current ||
            (y.props.enableMultiContainer && E.containerId !== y.props.containerId) ||
            (f.has(E.toastId) && null == E.updateId)
          )
            return;
          let { toastId: w, updateId: O, data: T } = E,
            { props: L } = y,
            R = () => m(w),
            S = null == O;
          S && y.count++;
          let k = {
            ...L,
            style: L.toastStyle,
            key: y.toastKey++,
            ...Object.fromEntries(
              Object.entries(E).filter((e) => {
                let [t, r] = e;
                return null != r;
              }),
            ),
            toastId: w,
            updateId: O,
            data: T,
            closeToast: R,
            isIn: !1,
            className: u(E.className || L.toastClassName),
            bodyClassName: u(E.bodyClassName || L.bodyClassName),
            progressClassName: u(E.progressClassName || L.progressClassName),
            autoClose: !E.isLoading && ((o = E.autoClose), (h = L.autoClose), !1 === o || (a(o) && o > 0) ? o : h),
            deleteToast() {
              let e = d(f.get(w), 'removed');
              f.delete(w), p.emit(4, e);
              let r = y.queue.length;
              if (
                ((y.count = null == w ? y.count - y.displayedToast : y.count - 1), y.count < 0 && (y.count = 0), r > 0)
              ) {
                let e = null == w ? y.props.limit : 1;
                if (1 === r || 1 === e) y.displayedToast++, b();
                else {
                  let t = e > r ? r : e;
                  y.displayedToast = t;
                  for (let e = 0; e < t; e++) b();
                }
              } else t();
            },
          };
          (k.iconOut = (function (e) {
            let { theme: t, type: r, isLoading: o, icon: u } = e,
              c = null,
              l = { theme: t, type: r };
            return (
              !1 === u ||
                (s(u)
                  ? (c = u(l))
                  : (0, n.isValidElement)(u)
                    ? (c = (0, n.cloneElement)(u, l))
                    : i(u) || a(u)
                      ? (c = u)
                      : o
                        ? (c = v.spinner())
                        : r in v && (c = v[r](l))),
              c
            );
          })(k)),
            s(E.onOpen) && (k.onOpen = E.onOpen),
            s(E.onClose) && (k.onClose = E.onClose),
            (k.closeButton = L.closeButton),
            !1 === E.closeButton || c(E.closeButton)
              ? (k.closeButton = E.closeButton)
              : !0 === E.closeButton && (k.closeButton = !c(L.closeButton) || L.closeButton);
          let P = e;
          (0, n.isValidElement)(e) && !i(e.type)
            ? (P = (0, n.cloneElement)(e, { closeToast: R, toastProps: k, data: T }))
            : s(e) && (P = e({ closeToast: R, toastProps: k, data: T })),
            L.limit && L.limit > 0 && y.count > L.limit && S
              ? y.queue.push({ toastContent: P, toastProps: k, staleId: x })
              : a(g)
                ? setTimeout(() => {
                    _(P, k, x);
                  }, g)
                : _(P, k, x);
        }
        function _(e, t, r) {
          let { toastId: n } = t;
          r && f.delete(r);
          let a = { content: e, props: t };
          f.set(n, a),
            o((e) => [...e, n].filter((e) => e !== r)),
            p.emit(4, d(a, null == a.props.updateId ? 'added' : 'updated'));
        }
        return (
          (0, n.useEffect)(
            () => (
              (y.containerId = e.containerId),
              p
                .cancelEmit(3)
                .on(0, x)
                .on(1, (e) => l.current && m(e))
                .on(5, g)
                .emit(2, y),
              () => {
                f.clear(), p.emit(3, y);
              }
            ),
            [],
          ),
          (0, n.useEffect)(() => {
            (y.props = e), (y.isToastActive = h), (y.displayedToast = r.length);
          }),
          {
            getToastToRender: function (t) {
              let r = new Map(),
                n = Array.from(f.values());
              return (
                e.newestOnTop && n.reverse(),
                n.forEach((e) => {
                  let { position: t } = e.props;
                  r.has(t) || r.set(t, []), r.get(t).push(e);
                }),
                Array.from(r, (e) => t(e[0], e[1]))
              );
            },
            containerRef: l,
            isToastActive: h,
          }
        );
      }
      function g(e) {
        return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
      }
      function m(e) {
        return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
      }
      function b(e) {
        let [t, r] = (0, n.useState)(!1),
          [o, a] = (0, n.useState)(!1),
          i = (0, n.useRef)(null),
          u = (0, n.useRef)({
            start: 0,
            x: 0,
            y: 0,
            delta: 0,
            removalDistance: 0,
            canCloseOnClick: !0,
            canDrag: !1,
            boundingRect: null,
            didMove: !1,
          }).current,
          c = (0, n.useRef)(e),
          { autoClose: l, pauseOnHover: f, closeToast: d, onClick: p, closeOnClick: h } = e;
        function v(t) {
          if (e.draggable) {
            'touchstart' === t.nativeEvent.type && t.nativeEvent.preventDefault(),
              (u.didMove = !1),
              document.addEventListener('mousemove', _),
              document.addEventListener('mouseup', E),
              document.addEventListener('touchmove', _),
              document.addEventListener('touchend', E);
            let r = i.current;
            (u.canCloseOnClick = !0),
              (u.canDrag = !0),
              (u.boundingRect = r.getBoundingClientRect()),
              (r.style.transition = ''),
              (u.x = g(t.nativeEvent)),
              (u.y = m(t.nativeEvent)),
              'x' === e.draggableDirection
                ? ((u.start = u.x), (u.removalDistance = r.offsetWidth * (e.draggablePercent / 100)))
                : ((u.start = u.y),
                  (u.removalDistance =
                    r.offsetHeight *
                    (80 === e.draggablePercent ? 1.5 * e.draggablePercent : e.draggablePercent / 100)));
          }
        }
        function y(t) {
          if (u.boundingRect) {
            let { top: r, bottom: n, left: o, right: a } = u.boundingRect;
            'touchend' !== t.nativeEvent.type && e.pauseOnHover && u.x >= o && u.x <= a && u.y >= r && u.y <= n
              ? x()
              : b();
          }
        }
        function b() {
          r(!0);
        }
        function x() {
          r(!1);
        }
        function _(r) {
          let n = i.current;
          u.canDrag &&
            n &&
            ((u.didMove = !0),
            t && x(),
            (u.x = g(r)),
            (u.y = m(r)),
            (u.delta = 'x' === e.draggableDirection ? u.x - u.start : u.y - u.start),
            u.start !== u.x && (u.canCloseOnClick = !1),
            (n.style.transform = `translate${e.draggableDirection}(${u.delta}px)`),
            (n.style.opacity = '' + (1 - Math.abs(u.delta / u.removalDistance))));
        }
        function E() {
          document.removeEventListener('mousemove', _),
            document.removeEventListener('mouseup', E),
            document.removeEventListener('touchmove', _),
            document.removeEventListener('touchend', E);
          let t = i.current;
          if (u.canDrag && u.didMove && t) {
            if (((u.canDrag = !1), Math.abs(u.delta) > u.removalDistance)) return a(!0), void e.closeToast();
            (t.style.transition = 'transform 0.2s, opacity 0.2s'),
              (t.style.transform = `translate${e.draggableDirection}(0)`),
              (t.style.opacity = '1');
          }
        }
        (0, n.useEffect)(() => {
          c.current = e;
        }),
          (0, n.useEffect)(
            () => (
              i.current && i.current.addEventListener('d', b, { once: !0 }),
              s(e.onOpen) && e.onOpen((0, n.isValidElement)(e.children) && e.children.props),
              () => {
                let e = c.current;
                s(e.onClose) && e.onClose((0, n.isValidElement)(e.children) && e.children.props);
              }
            ),
            [],
          ),
          (0, n.useEffect)(
            () => (
              e.pauseOnFocusLoss &&
                (document.hasFocus() || x(), window.addEventListener('focus', b), window.addEventListener('blur', x)),
              () => {
                e.pauseOnFocusLoss && (window.removeEventListener('focus', b), window.removeEventListener('blur', x));
              }
            ),
            [e.pauseOnFocusLoss],
          );
        let w = { onMouseDown: v, onTouchStart: v, onMouseUp: y, onTouchEnd: y };
        return (
          l && f && ((w.onMouseEnter = x), (w.onMouseLeave = b)),
          h &&
            (w.onClick = (e) => {
              p && p(e), u.canCloseOnClick && d();
            }),
          { playToast: b, pauseToast: x, isRunning: t, preventExitTransition: o, toastRef: i, eventHandlers: w }
        );
      }
      function x(e) {
        let { closeToast: t, theme: r, ariaLabel: o = 'close' } = e;
        return n.createElement(
          'button',
          {
            className: `Toastify__close-button Toastify__close-button--${r}`,
            type: 'button',
            onClick: (e) => {
              e.stopPropagation(), t(e);
            },
            'aria-label': o,
          },
          n.createElement(
            'svg',
            { 'aria-hidden': 'true', viewBox: '0 0 14 16' },
            n.createElement('path', {
              fillRule: 'evenodd',
              d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z',
            }),
          ),
        );
      }
      function _(e) {
        let {
            delay: t,
            isRunning: r,
            closeToast: a,
            type: i = 'default',
            hide: u,
            className: c,
            style: l,
            controlledProgress: f,
            progress: d,
            rtl: p,
            isIn: h,
            theme: v,
          } = e,
          y = u || (f && 0 === d),
          g = { ...l, animationDuration: `${t}ms`, animationPlayState: r ? 'running' : 'paused', opacity: y ? 0 : 1 };
        f && (g.transform = `scaleX(${d})`);
        let m = o(
            'Toastify__progress-bar',
            f ? 'Toastify__progress-bar--controlled' : 'Toastify__progress-bar--animated',
            `Toastify__progress-bar-theme--${v}`,
            `Toastify__progress-bar--${i}`,
            { 'Toastify__progress-bar--rtl': p },
          ),
          b = s(c) ? c({ rtl: p, type: i, defaultClassName: m }) : o(m, c);
        return n.createElement('div', {
          role: 'progressbar',
          'aria-hidden': y ? 'true' : 'false',
          'aria-label': 'notification timer',
          className: b,
          style: g,
          [f && d >= 1 ? 'onTransitionEnd' : 'onAnimationEnd']:
            f && d < 1
              ? null
              : () => {
                  h && a();
                },
        });
      }
      let E = (e) => {
          let { isRunning: t, preventExitTransition: r, toastRef: a, eventHandlers: i } = b(e),
            {
              closeButton: u,
              children: c,
              autoClose: l,
              onClick: f,
              type: d,
              hideProgressBar: p,
              closeToast: h,
              transition: v,
              position: y,
              className: g,
              style: m,
              bodyClassName: E,
              bodyStyle: w,
              progressClassName: O,
              progressStyle: T,
              updateId: L,
              role: R,
              progress: S,
              rtl: k,
              toastId: P,
              deleteToast: C,
              isIn: j,
              isLoading: M,
              iconOut: I,
              closeOnClick: A,
              theme: N,
            } = e,
            U = o(
              'Toastify__toast',
              `Toastify__toast-theme--${N}`,
              `Toastify__toast--${d}`,
              { 'Toastify__toast--rtl': k },
              { 'Toastify__toast--close-on-click': A },
            ),
            D = s(g) ? g({ rtl: k, position: y, type: d, defaultClassName: U }) : o(U, g),
            B = !!S || !l,
            $ = { closeToast: h, type: d, theme: N },
            F = null;
          return (
            !1 === u || (F = s(u) ? u($) : (0, n.isValidElement)(u) ? (0, n.cloneElement)(u, $) : x($)),
            n.createElement(
              v,
              { isIn: j, done: C, position: y, preventExitTransition: r, nodeRef: a },
              n.createElement(
                'div',
                { id: P, onClick: f, className: D, ...i, style: m, ref: a },
                n.createElement(
                  'div',
                  { ...(j && { role: R }), className: s(E) ? E({ type: d }) : o('Toastify__toast-body', E), style: w },
                  null != I &&
                    n.createElement(
                      'div',
                      { className: o('Toastify__toast-icon', { 'Toastify--animate-icon Toastify__zoom-enter': !M }) },
                      I,
                    ),
                  n.createElement('div', null, c),
                ),
                F,
                n.createElement(_, {
                  ...(L && !B ? { key: `pb-${L}` } : {}),
                  rtl: k,
                  theme: N,
                  delay: l,
                  isRunning: t,
                  isIn: j,
                  closeToast: h,
                  hide: p,
                  type: d,
                  style: T,
                  className: O,
                  controlledProgress: B,
                  progress: S || 0,
                }),
              ),
            )
          );
        },
        w = function (e, t) {
          return (
            void 0 === t && (t = !1),
            {
              enter: `Toastify--animate Toastify__${e}-enter`,
              exit: `Toastify--animate Toastify__${e}-exit`,
              appendPosition: t,
            }
          );
        },
        O = f(w('bounce', !0)),
        T = f(w('slide', !0)),
        L = f(w('zoom')),
        R = f(w('flip')),
        S = (0, n.forwardRef)((e, t) => {
          let { getToastToRender: r, containerRef: a, isToastActive: i } = y(e),
            { className: c, style: l, rtl: f, containerId: d } = e;
          return (
            (0, n.useEffect)(() => {
              t && (t.current = a.current);
            }, []),
            n.createElement(
              'div',
              { ref: a, className: 'Toastify', id: d },
              r((e, t) => {
                let r = t.length ? { ...l } : { ...l, pointerEvents: 'none' };
                return n.createElement(
                  'div',
                  {
                    className: (function (e) {
                      let t = o('Toastify__toast-container', `Toastify__toast-container--${e}`, {
                        'Toastify__toast-container--rtl': f,
                      });
                      return s(c) ? c({ position: e, rtl: f, defaultClassName: t }) : o(t, u(c));
                    })(e),
                    style: r,
                    key: `container-${e}`,
                  },
                  t.map((e, r) => {
                    let { content: o, props: a } = e;
                    return n.createElement(
                      E,
                      {
                        ...a,
                        isIn: i(a.toastId),
                        style: { ...a.style, '--nth': r + 1, '--len': t.length },
                        key: `toast-${a.key}`,
                      },
                      o,
                    );
                  }),
                );
              }),
            )
          );
        });
      (S.displayName = 'ToastContainer'),
        (S.defaultProps = {
          position: 'top-right',
          transition: O,
          autoClose: 5e3,
          closeButton: x,
          pauseOnHover: !0,
          pauseOnFocusLoss: !0,
          closeOnClick: !0,
          draggable: !0,
          draggablePercent: 80,
          draggableDirection: 'x',
          role: 'alert',
          theme: 'light',
        });
      let k,
        P = new Map(),
        C = [],
        j = 1;
      function M(e, t) {
        return P.size > 0 ? p.emit(0, e, t) : C.push({ content: e, options: t }), t.toastId;
      }
      function I(e, t) {
        return { ...t, type: (t && t.type) || e, toastId: t && (i(t.toastId) || a(t.toastId)) ? t.toastId : '' + j++ };
      }
      function A(e) {
        return (t, r) => M(t, I(e, r));
      }
      function N(e, t) {
        return M(e, I('default', t));
      }
      (N.loading = (e, t) =>
        M(e, I('default', { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...t }))),
        (N.promise = function (e, t, r) {
          let n,
            { pending: o, error: a, success: u } = t;
          o && (n = i(o) ? N.loading(o, r) : N.loading(o.render, { ...r, ...o }));
          let c = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null },
            l = (e, t, o) => {
              if (null == t) return void N.dismiss(n);
              let a = { type: e, ...c, ...r, data: o },
                s = i(t) ? { render: t } : t;
              return n ? N.update(n, { ...a, ...s }) : N(s.render, { ...a, ...s }), o;
            },
            f = s(e) ? e() : e;
          return f.then((e) => l('success', u, e)).catch((e) => l('error', a, e)), f;
        }),
        (N.success = A('success')),
        (N.info = A('info')),
        (N.error = A('error')),
        (N.warning = A('warning')),
        (N.warn = N.warning),
        (N.dark = (e, t) => M(e, I('default', { theme: 'dark', ...t }))),
        (N.dismiss = (e) => {
          P.size > 0 ? p.emit(1, e) : (C = C.filter((t) => null != e && t.options.toastId !== e));
        }),
        (N.clearWaitingQueue = function (e) {
          return void 0 === e && (e = {}), p.emit(5, e);
        }),
        (N.isActive = (e) => {
          let t = !1;
          return (
            P.forEach((r) => {
              r.isToastActive && r.isToastActive(e) && (t = !0);
            }),
            t
          );
        }),
        (N.update = function (e, t) {
          void 0 === t && (t = {}),
            setTimeout(() => {
              let r = (function (e, t) {
                let { containerId: r } = t,
                  n = P.get(r || k);
                return n && n.getToast(e);
              })(e, t);
              if (r) {
                let { props: n, content: o } = r,
                  a = { delay: 100, ...n, ...t, toastId: t.toastId || e, updateId: '' + j++ };
                a.toastId !== e && (a.staleId = e);
                let i = a.render || o;
                delete a.render, M(i, a);
              }
            }, 0);
        }),
        (N.done = (e) => {
          N.update(e, { progress: 1 });
        }),
        (N.onChange = (e) => (
          p.on(4, e),
          () => {
            p.off(4, e);
          }
        )),
        (N.POSITION = {
          TOP_LEFT: 'top-left',
          TOP_RIGHT: 'top-right',
          TOP_CENTER: 'top-center',
          BOTTOM_LEFT: 'bottom-left',
          BOTTOM_RIGHT: 'bottom-right',
          BOTTOM_CENTER: 'bottom-center',
        }),
        (N.TYPE = { INFO: 'info', SUCCESS: 'success', WARNING: 'warning', ERROR: 'error', DEFAULT: 'default' }),
        p
          .on(2, (e) => {
            (k = e.containerId || e),
              P.set(k, e),
              C.forEach((e) => {
                p.emit(0, e.content, e.options);
              }),
              (C = []);
          })
          .on(3, (e) => {
            P.delete(e.containerId || e), 0 === P.size && p.off(0).off(1).off(5);
          });
    },
  },
]);
