'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5687],
  {
    85687: function (e, t, r) {
      r.d(t, {
        LC: function () {
          return v;
        },
      });
      var n = r(40329),
        i = r(64483),
        a = r(73135),
        u = r(2265),
        s = r(93046),
        o = r(28742);
      function c(e, ...t) {
        return Object.assign(e, ...t);
      }
      function l(e) {
        return e.replace(e[0], e[0].toUpperCase());
      }
      r(62601);
      var d = WeakMap ? new WeakMap() : void 0,
        f = ({ endpointName: e, queryArgs: t }) => {
          let r = '',
            n = d?.get(t);
          if ('string' == typeof n) r = n;
          else {
            let e = JSON.stringify(t, (e, t) =>
              (0, i.PO)(t)
                ? Object.keys(t)
                    .sort()
                    .reduce((e, r) => ((e[r] = t[r]), e), {})
                : t,
            );
            (0, i.PO)(t) && d?.set(t, e), (r = e);
          }
          return `${e}(${r})`;
        },
        p = Symbol();
      function m(e, t, r, n) {
        let i = (0, u.useMemo)(
            () => ({
              queryArgs: e,
              serialized: 'object' == typeof e ? t({ queryArgs: e, endpointDefinition: r, endpointName: n }) : e,
            }),
            [e, t, r, n],
          ),
          a = (0, u.useRef)(i);
        return (
          (0, u.useEffect)(() => {
            a.current.serialized !== i.serialized && (a.current = i);
          }, [i]),
          a.current.serialized === i.serialized ? a.current.queryArgs : e
        );
      }
      function y(e) {
        let t = (0, u.useRef)(e);
        return (
          (0, u.useEffect)(() => {
            (0, s.wU)(t.current, e) || (t.current = e);
          }, [e]),
          (0, s.wU)(t.current, e) ? t.current : e
        );
      }
      var h =
          'undefined' != typeof window && window.document && window.document.createElement
            ? u.useLayoutEffect
            : u.useEffect,
        g = (e) =>
          e.isUninitialized
            ? { ...e, isUninitialized: !1, isFetching: !0, isLoading: void 0 === e.data, status: n.oZ.pending }
            : e,
        b = Symbol(),
        v = (0, n.Tk)(
          (0, n.hF)(),
          (({
            batch: e = s.dC,
            hooks: t = { useDispatch: s.I0, useSelector: s.v9, useStore: s.oR },
            createSelector: r = o.P1,
            unstable__sideEffectsInRender: i = !1,
            ...d
          } = {}) => ({
            name: b,
            init(o, { serializeQueryArgs: d }, b) {
              let {
                buildQueryHooks: v,
                buildMutationHook: S,
                usePrefetch: R,
              } = (function ({
                api: e,
                moduleOptions: {
                  batch: t,
                  hooks: { useDispatch: r, useSelector: i, useStore: o },
                  unstable__sideEffectsInRender: c,
                  createSelector: l,
                },
                serializeQueryArgs: d,
                context: b,
              }) {
                let v = c ? (e) => e() : u.useEffect;
                return {
                  buildQueryHooks: function (c) {
                    let R = (
                        t,
                        {
                          refetchOnReconnect: i,
                          refetchOnFocus: s,
                          refetchOnMountOrArgChange: o,
                          skip: l = !1,
                          pollingInterval: d = 0,
                          skipPollingIfUnfocused: p = !1,
                        } = {},
                      ) => {
                        let { initiate: h } = e.endpoints[c],
                          g = r(),
                          S = (0, u.useRef)();
                        if (!S.current) {
                          let t = g(e.internalActions.internal_getRTKQSubscriptions());
                          S.current = t;
                        }
                        let R = m(l ? n.CN : t, f, b.endpointDefinitions[c], c),
                          O = y({
                            refetchOnReconnect: i,
                            refetchOnFocus: s,
                            pollingInterval: d,
                            skipPollingIfUnfocused: p,
                          }),
                          A = (0, u.useRef)(!1),
                          q = (0, u.useRef)(),
                          { queryCacheKey: w, requestId: j } = q.current || {},
                          C = !1;
                        w && j && (C = S.current.isRequestSubscribed(w, j));
                        let M = !C && A.current;
                        return (
                          v(() => {
                            A.current = C;
                          }),
                          v(() => {
                            M && (q.current = void 0);
                          }, [M]),
                          v(() => {
                            let e = q.current;
                            if (R === n.CN) {
                              e?.unsubscribe(), (q.current = void 0);
                              return;
                            }
                            let t = q.current?.subscriptionOptions;
                            if (e && e.arg === R) O !== t && e.updateSubscriptionOptions(O);
                            else {
                              e?.unsubscribe();
                              let t = g(h(R, { subscriptionOptions: O, forceRefetch: o }));
                              q.current = t;
                            }
                          }, [g, h, o, R, O, M]),
                          (0, u.useEffect)(
                            () => () => {
                              q.current?.unsubscribe(), (q.current = void 0);
                            },
                            [],
                          ),
                          (0, u.useMemo)(
                            () => ({
                              refetch: () => {
                                if (!q.current) throw Error((0, a.rJ)(38));
                                return q.current?.refetch();
                              },
                            }),
                            [],
                          )
                        );
                      },
                      O = ({
                        refetchOnReconnect: n,
                        refetchOnFocus: i,
                        pollingInterval: a = 0,
                        skipPollingIfUnfocused: s = !1,
                      } = {}) => {
                        let { initiate: o } = e.endpoints[c],
                          l = r(),
                          [d, f] = (0, u.useState)(p),
                          m = (0, u.useRef)(),
                          h = y({
                            refetchOnReconnect: n,
                            refetchOnFocus: i,
                            pollingInterval: a,
                            skipPollingIfUnfocused: s,
                          });
                        v(() => {
                          h !== m.current?.subscriptionOptions && m.current?.updateSubscriptionOptions(h);
                        }, [h]);
                        let g = (0, u.useRef)(h);
                        v(() => {
                          g.current = h;
                        }, [h]);
                        let b = (0, u.useCallback)(
                          function (e, r = !1) {
                            let n;
                            return (
                              t(() => {
                                m.current?.unsubscribe(),
                                  (m.current = n = l(o(e, { subscriptionOptions: g.current, forceRefetch: !r }))),
                                  f(e);
                              }),
                              n
                            );
                          },
                          [l, o],
                        );
                        return (
                          (0, u.useEffect)(
                            () => () => {
                              m?.current?.unsubscribe();
                            },
                            [],
                          ),
                          (0, u.useEffect)(() => {
                            d === p || m.current || b(d, !0);
                          }, [d, b]),
                          (0, u.useMemo)(() => [b, d], [b, d])
                        );
                      },
                      A = (t, { skip: r = !1, selectFromResult: a } = {}) => {
                        let { select: f } = e.endpoints[c],
                          p = m(r ? n.CN : t, d, b.endpointDefinitions[c], c),
                          y = (0, u.useRef)(),
                          g = (0, u.useMemo)(
                            () =>
                              l([f(p), (e, t) => t, (e) => p], S, { memoizeOptions: { resultEqualityCheck: s.wU } }),
                            [f, p],
                          ),
                          v = (0, u.useMemo)(
                            () => (a ? l([g], a, { devModeChecks: { identityFunctionCheck: 'never' } }) : g),
                            [g, a],
                          ),
                          R = i((e) => v(e, y.current), s.wU),
                          O = g(o().getState(), y.current);
                        return (
                          h(() => {
                            y.current = O;
                          }, [O]),
                          R
                        );
                      };
                    return {
                      useQueryState: A,
                      useQuerySubscription: R,
                      useLazyQuerySubscription: O,
                      useLazyQuery(e) {
                        let [t, r] = O(e),
                          n = A(r, { ...e, skip: r === p }),
                          i = (0, u.useMemo)(() => ({ lastArg: r }), [r]);
                        return (0, u.useMemo)(() => [t, n, i], [t, n, i]);
                      },
                      useQuery(e, t) {
                        let r = R(e, t),
                          i = A(e, { selectFromResult: e === n.CN || t?.skip ? void 0 : g, ...t }),
                          { data: a, status: s, isLoading: o, isSuccess: c, isError: l, error: d } = i;
                        return (
                          (0, u.useDebugValue)({
                            data: a,
                            status: s,
                            isLoading: o,
                            isSuccess: c,
                            isError: l,
                            error: d,
                          }),
                          (0, u.useMemo)(() => ({ ...i, ...r }), [i, r])
                        );
                      },
                    };
                  },
                  buildMutationHook: function (n) {
                    return ({ selectFromResult: a, fixedCacheKey: o } = {}) => {
                      let { select: c, initiate: d } = e.endpoints[n],
                        f = r(),
                        [p, m] = (0, u.useState)();
                      (0, u.useEffect)(
                        () => () => {
                          p?.arg.fixedCacheKey || p?.reset();
                        },
                        [p],
                      );
                      let y = (0, u.useCallback)(
                          function (e) {
                            let t = f(d(e, { fixedCacheKey: o }));
                            return m(t), t;
                          },
                          [f, d, o],
                        ),
                        { requestId: h } = p || {},
                        g = (0, u.useMemo)(() => c({ fixedCacheKey: o, requestId: p?.requestId }), [o, p, c]),
                        b = i(
                          (0, u.useMemo)(() => (a ? l([g], a) : g), [a, g]),
                          s.wU,
                        ),
                        v = null == o ? p?.arg.originalArgs : void 0,
                        S = (0, u.useCallback)(() => {
                          t(() => {
                            p && m(void 0),
                              o && f(e.internalActions.removeMutationResult({ requestId: h, fixedCacheKey: o }));
                          });
                        }, [f, o, p, h]),
                        { endpointName: R, data: O, status: A, isLoading: q, isSuccess: w, isError: j, error: C } = b;
                      (0, u.useDebugValue)({
                        endpointName: R,
                        data: O,
                        status: A,
                        isLoading: q,
                        isSuccess: w,
                        isError: j,
                        error: C,
                      });
                      let M = (0, u.useMemo)(() => ({ ...b, originalArgs: v, reset: S }), [b, v, S]);
                      return (0, u.useMemo)(() => [y, M], [y, M]);
                    };
                  },
                  usePrefetch: function (t, n) {
                    let i = r(),
                      a = y(n);
                    return (0, u.useCallback)((r, n) => i(e.util.prefetch(t, r, { ...a, ...n })), [t, i, a]);
                  },
                };
                function S(e, t, r) {
                  if (t?.endpointName && e.isUninitialized) {
                    let { endpointName: e } = t,
                      n = b.endpointDefinitions[e];
                    d({ queryArgs: t.originalArgs, endpointDefinition: n, endpointName: e }) ===
                      d({ queryArgs: r, endpointDefinition: n, endpointName: e }) && (t = void 0);
                  }
                  let n = e.isSuccess ? e.data : t?.data;
                  void 0 === n && (n = e.data);
                  let i = void 0 !== n,
                    a = e.isLoading,
                    u = e.isSuccess || (a && i);
                  return { ...e, data: n, currentData: e.data, isFetching: a, isLoading: !i && a, isSuccess: u };
                }
              })({
                api: o,
                moduleOptions: { batch: e, hooks: t, unstable__sideEffectsInRender: i, createSelector: r },
                serializeQueryArgs: d,
                context: b,
              });
              return (
                c(o, { usePrefetch: R }),
                c(b, { batch: e }),
                {
                  injectEndpoint(e, t) {
                    if ('query' === t.type) {
                      let {
                        useQuery: t,
                        useLazyQuery: r,
                        useLazyQuerySubscription: n,
                        useQueryState: i,
                        useQuerySubscription: a,
                      } = v(e);
                      c(o.endpoints[e], {
                        useQuery: t,
                        useLazyQuery: r,
                        useLazyQuerySubscription: n,
                        useQueryState: i,
                        useQuerySubscription: a,
                      }),
                        (o[`use${l(e)}Query`] = t),
                        (o[`useLazy${l(e)}Query`] = r);
                    } else if ('mutation' === t.type) {
                      let t = S(e);
                      c(o.endpoints[e], { useMutation: t }), (o[`use${l(e)}Mutation`] = t);
                    }
                  },
                }
              );
            },
          }))(),
        );
    },
    40329: function (e, t, r) {
      r.d(t, {
        CN: function () {
          return I;
        },
        Tk: function () {
          return U;
        },
        hF: function () {
          return ee;
        },
        ni: function () {
          return g;
        },
        oZ: function () {
          return o;
        },
      });
      var n,
        i = r(64483),
        a = r(73135),
        u = r(27173),
        s = r(28742);
      r(62601);
      var o =
          (((n = o || {}).uninitialized = 'uninitialized'),
          (n.pending = 'pending'),
          (n.fulfilled = 'fulfilled'),
          (n.rejected = 'rejected'),
          n),
        c = (e) => e.replace(/\/$/, ''),
        l = (e) => e.replace(/^\//, ''),
        d = (e) => [].concat(...e),
        f = i.PO,
        p = (...e) => fetch(...e),
        m = (e) => e.status >= 200 && e.status <= 299,
        y = (e) => /ion\/(vnd\.api\+)?json/.test(e.get('content-type') || '');
      function h(e) {
        if (!(0, i.PO)(e)) return e;
        let t = { ...e };
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return t;
      }
      function g({
        baseUrl: e,
        prepareHeaders: t = (e) => e,
        fetchFn: r = p,
        paramsSerializer: n,
        isJsonContentType: a = y,
        jsonContentType: u = 'application/json',
        jsonReplacer: s,
        timeout: o,
        responseHandler: d,
        validateStatus: f,
        ...g
      } = {}) {
        return (
          'undefined' == typeof fetch &&
            r === p &&
            console.warn(
              'Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.',
            ),
          async (p, y) => {
            let v, S;
            let { signal: R, getState: O, extra: A, endpoint: q, forced: w, type: j } = y,
              {
                url: C,
                headers: M = new Headers(g.headers),
                params: T,
                responseHandler: P = d ?? 'json',
                validateStatus: k = f ?? m,
                timeout: Q = o,
                ...D
              } = 'string' == typeof p ? { url: p } : p,
              N = { ...g, signal: R, ...D };
            (M = new Headers(h(M))),
              (N.headers = (await t(M, { getState: O, extra: A, endpoint: q, forced: w, type: j })) || M);
            let E = (e) => 'object' == typeof e && ((0, i.PO)(e) || Array.isArray(e) || 'function' == typeof e.toJSON);
            if (
              (!N.headers.has('content-type') && E(N.body) && N.headers.set('content-type', u),
              E(N.body) && a(N.headers) && (N.body = JSON.stringify(N.body, s)),
              T)
            ) {
              let e = ~C.indexOf('?') ? '&' : '?';
              C += e + (n ? n(T) : new URLSearchParams(h(T)));
            }
            C = (function (e, t) {
              var r;
              if (!e) return t;
              if (!t) return e;
              if (((r = t), RegExp('(^|:)//').test(r))) return t;
              let n = e.endsWith('/') || !t.startsWith('?') ? '/' : '';
              return (e = c(e)), (t = l(t)), `${e}${n}${t}`;
            })(e, C);
            let I = new Request(C, N);
            v = { request: new Request(C, N) };
            let x,
              _ = !1,
              z =
                Q &&
                setTimeout(() => {
                  (_ = !0), y.abort();
                }, Q);
            try {
              x = await r(I);
            } catch (e) {
              return { error: { status: _ ? 'TIMEOUT_ERROR' : 'FETCH_ERROR', error: String(e) }, meta: v };
            } finally {
              z && clearTimeout(z);
            }
            let K = x.clone();
            v.response = K;
            let $ = '';
            try {
              let e;
              if (
                (await Promise.all([
                  b(x, P).then(
                    (e) => (S = e),
                    (t) => (e = t),
                  ),
                  K.text().then(
                    (e) => ($ = e),
                    () => {},
                  ),
                ]),
                e)
              )
                throw e;
            } catch (e) {
              return {
                error: { status: 'PARSING_ERROR', originalStatus: x.status, data: $, error: String(e) },
                meta: v,
              };
            }
            return k(x, S) ? { data: S, meta: v } : { error: { status: x.status, data: S }, meta: v };
          }
        );
        async function b(e, t) {
          if ('function' == typeof t) return t(e);
          if (('content-type' === t && (t = a(e.headers) ? 'json' : 'text'), 'json' === t)) {
            let t = await e.text();
            return t.length ? JSON.parse(t) : null;
          }
          return e.text();
        }
      }
      var b = class {
          constructor(e, t) {
            (this.value = e), (this.meta = t);
          }
        },
        v = (0, a.PH)('__rtkq/focused'),
        S = (0, a.PH)('__rtkq/unfocused'),
        R = (0, a.PH)('__rtkq/online'),
        O = (0, a.PH)('__rtkq/offline');
      function A(e) {
        return 'query' === e.type;
      }
      function q(e, t, r, n, i, a) {
        return 'function' == typeof e ? e(t, r, n, i).map(w).map(a) : Array.isArray(e) ? e.map(w).map(a) : [];
      }
      function w(e) {
        return 'string' == typeof e ? { type: e } : e;
      }
      function j(e) {
        return null != e;
      }
      function C(e) {
        let t = 0;
        for (let r in e) t++;
        return t;
      }
      var M = Symbol('forceQueryFn'),
        T = (e) => 'function' == typeof e[M];
      function P(e) {
        return e;
      }
      function k(e, t, r, n) {
        return q(
          r[e.meta.arg.endpointName][t],
          (0, a.KD)(e) ? e.payload : void 0,
          (0, a.h_)(e) ? e.payload : void 0,
          e.meta.arg.originalArgs,
          'baseQueryMeta' in e.meta ? e.meta.baseQueryMeta : void 0,
          n,
        );
      }
      function Q(e, t, r) {
        let n = e[t];
        n && r(n);
      }
      function D(e) {
        return ('arg' in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
      }
      function N(e, t, r) {
        let n = e[D(t)];
        n && r(n);
      }
      var E = {},
        I = Symbol.for('RTKQ/skipToken'),
        x = { status: 'uninitialized' },
        _ = (0, u.Uy)(x, () => {}),
        z = (0, u.Uy)(x, () => {}),
        K = WeakMap ? new WeakMap() : void 0,
        $ = ({ endpointName: e, queryArgs: t }) => {
          let r = '',
            n = K?.get(t);
          if ('string' == typeof n) r = n;
          else {
            let e = JSON.stringify(t, (e, t) =>
              (0, i.PO)(t)
                ? Object.keys(t)
                    .sort()
                    .reduce((e, r) => ((e[r] = t[r]), e), {})
                : t,
            );
            (0, i.PO)(t) && K?.set(t, e), (r = e);
          }
          return `${e}(${r})`;
        };
      function U(...e) {
        return function (t) {
          let r = (0, s.kO)((e) => t.extractRehydrationInfo?.(e, { reducerPath: t.reducerPath ?? 'api' })),
            n = {
              reducerPath: 'api',
              keepUnusedDataFor: 60,
              refetchOnMountOrArgChange: !1,
              refetchOnFocus: !1,
              refetchOnReconnect: !1,
              invalidationBehavior: 'delayed',
              ...t,
              extractRehydrationInfo: r,
              serializeQueryArgs(e) {
                let r = $;
                if ('serializeQueryArgs' in e.endpointDefinition) {
                  let t = e.endpointDefinition.serializeQueryArgs;
                  r = (e) => {
                    let r = t(e);
                    return 'string' == typeof r ? r : $({ ...e, queryArgs: r });
                  };
                } else t.serializeQueryArgs && (r = t.serializeQueryArgs);
                return r(e);
              },
              tagTypes: [...(t.tagTypes || [])],
            },
            i = {
              endpointDefinitions: {},
              batch(e) {
                e();
              },
              apiUid: (0, a.x0)(),
              extractRehydrationInfo: r,
              hasRehydrationInfo: (0, s.kO)((e) => null != r(e)),
            },
            u = {
              injectEndpoints: function (e) {
                for (let [t, r] of Object.entries(
                  e.endpoints({
                    query: (e) => ({ ...e, type: 'query' }),
                    mutation: (e) => ({ ...e, type: 'mutation' }),
                  }),
                )) {
                  if (!0 !== e.overrideExisting && t in i.endpointDefinitions) {
                    if ('throw' === e.overrideExisting) throw Error((0, a.rJ)(39));
                    continue;
                  }
                  for (let e of ((i.endpointDefinitions[t] = r), o)) e.injectEndpoint(t, r);
                }
                return u;
              },
              enhanceEndpoints({ addTagTypes: e, endpoints: t }) {
                if (e) for (let t of e) n.tagTypes.includes(t) || n.tagTypes.push(t);
                if (t)
                  for (let [e, r] of Object.entries(t))
                    'function' == typeof r
                      ? r(i.endpointDefinitions[e])
                      : Object.assign(i.endpointDefinitions[e] || {}, r);
                return u;
              },
            },
            o = e.map((e) => e.init(u, n, i));
          return u.injectEndpoints({ endpoints: t.endpoints });
        };
      }
      var F = ({ reducerPath: e, api: t, queryThunk: r, context: n, internalState: i }) => {
          let { removeQueryResult: u, unsubscribeQueryResult: s } = t.internalActions,
            o = (0, a.Q)(s.match, r.fulfilled, r.rejected);
          function c(e) {
            let t = i.currentSubscriptions[e];
            return (
              !!t &&
              !(function (e) {
                for (let t in e) return !1;
                return !0;
              })(t)
            );
          }
          let l = {};
          function d(e, t, r, i) {
            let a = n.endpointDefinitions[t],
              s = a?.keepUnusedDataFor ?? i.keepUnusedDataFor;
            if (s !== 1 / 0 && !c(e)) {
              let t = l[e];
              t && clearTimeout(t),
                (l[e] = setTimeout(
                  () => {
                    c(e) || r.dispatch(u({ queryCacheKey: e })), delete l[e];
                  },
                  1e3 * Math.max(0, Math.min(s, 2147482.647)),
                ));
            }
          }
          return (r, i, a) => {
            if (o(r)) {
              let t = i.getState()[e],
                { queryCacheKey: n } = s.match(r) ? r.payload : r.meta.arg;
              d(n, t.queries[n]?.endpointName, i, t.config);
            }
            if (t.util.resetApiState.match(r)) for (let [e, t] of Object.entries(l)) t && clearTimeout(t), delete l[e];
            if (n.hasRehydrationInfo(r)) {
              let t = i.getState()[e],
                { queries: a } = n.extractRehydrationInfo(r);
              for (let [e, r] of Object.entries(a)) d(e, r?.endpointName, i, t.config);
            }
          };
        },
        H = ({
          reducerPath: e,
          context: t,
          context: { endpointDefinitions: r },
          mutationThunk: n,
          queryThunk: i,
          api: u,
          assertTagType: s,
          refetchQuery: o,
          internalState: c,
        }) => {
          let { removeQueryResult: l } = u.internalActions,
            d = (0, a.Q)((0, a.KD)(n), (0, a.h_)(n)),
            f = (0, a.Q)((0, a.KD)(n, i), (0, a.Iv)(n, i)),
            p = [];
          function m(r, n) {
            let i = n.getState(),
              a = i[e];
            if (
              (p.push(...r),
              'delayed' === a.config.invalidationBehavior &&
                (function (e) {
                  for (let t in e.queries) if (e.queries[t]?.status === 'pending') return !0;
                  for (let t in e.mutations) if (e.mutations[t]?.status === 'pending') return !0;
                  return !1;
                })(a))
            )
              return;
            let s = p;
            if (((p = []), 0 === s.length)) return;
            let d = u.util.selectInvalidatedBy(i, s);
            t.batch(() => {
              for (let { queryCacheKey: e } of Array.from(d.values())) {
                let t = a.queries[e],
                  r = c.currentSubscriptions[e] ?? {};
                t &&
                  (0 === C(r)
                    ? n.dispatch(l({ queryCacheKey: e }))
                    : 'uninitialized' !== t.status && n.dispatch(o(t, e)));
              }
            });
          }
          return (e, t) => {
            d(e)
              ? m(k(e, 'invalidatesTags', r, s), t)
              : f(e)
                ? m([], t)
                : u.util.invalidateTags.match(e) && m(q(e.payload, void 0, void 0, void 0, void 0, s), t);
          };
        },
        J = ({ reducerPath: e, queryThunk: t, api: r, refetchQuery: n, internalState: i }) => {
          let a = {};
          function u({ queryCacheKey: t }, r) {
            let s = r.getState()[e],
              o = s.queries[t],
              l = i.currentSubscriptions[t];
            if (!o || 'uninitialized' === o.status) return;
            let { lowestPollingInterval: d, skipPollingIfUnfocused: f } = c(l);
            if (!Number.isFinite(d)) return;
            let p = a[t];
            p?.timeout && (clearTimeout(p.timeout), (p.timeout = void 0));
            let m = Date.now() + d;
            a[t] = {
              nextPollTimestamp: m,
              pollingInterval: d,
              timeout: setTimeout(() => {
                (s.config.focused || !f) && r.dispatch(n(o, t)), u({ queryCacheKey: t }, r);
              }, d),
            };
          }
          function s({ queryCacheKey: t }, r) {
            let n = r.getState()[e].queries[t],
              s = i.currentSubscriptions[t];
            if (!n || 'uninitialized' === n.status) return;
            let { lowestPollingInterval: l } = c(s);
            if (!Number.isFinite(l)) {
              o(t);
              return;
            }
            let d = a[t],
              f = Date.now() + l;
            (!d || f < d.nextPollTimestamp) && u({ queryCacheKey: t }, r);
          }
          function o(e) {
            let t = a[e];
            t?.timeout && clearTimeout(t.timeout), delete a[e];
          }
          function c(e = {}) {
            let t = !1,
              r = Number.POSITIVE_INFINITY;
            for (let n in e)
              e[n].pollingInterval && ((r = Math.min(e[n].pollingInterval, r)), (t = e[n].skipPollingIfUnfocused || t));
            return { lowestPollingInterval: r, skipPollingIfUnfocused: t };
          }
          return (e, n) => {
            (r.internalActions.updateSubscriptionOptions.match(e) ||
              r.internalActions.unsubscribeQueryResult.match(e)) &&
              s(e.payload, n),
              (t.pending.match(e) || (t.rejected.match(e) && e.meta.condition)) && s(e.meta.arg, n),
              (t.fulfilled.match(e) || (t.rejected.match(e) && !e.meta.condition)) && u(e.meta.arg, n),
              r.util.resetApiState.match(e) &&
                (function () {
                  for (let e of Object.keys(a)) o(e);
                })();
          };
        },
        L = ({ reducerPath: e, context: t, api: r, refetchQuery: n, internalState: i }) => {
          let { removeQueryResult: a } = r.internalActions;
          function u(r, u) {
            let s = r.getState()[e],
              o = s.queries,
              c = i.currentSubscriptions;
            t.batch(() => {
              for (let e of Object.keys(c)) {
                let t = o[e],
                  i = c[e];
                i &&
                  t &&
                  (Object.values(i).some((e) => !0 === e[u]) ||
                    (Object.values(i).every((e) => void 0 === e[u]) && s.config[u])) &&
                  (0 === C(i)
                    ? r.dispatch(a({ queryCacheKey: e }))
                    : 'uninitialized' !== t.status && r.dispatch(n(t, e)));
              }
            });
          }
          return (e, t) => {
            v.match(e) && u(t, 'refetchOnFocus'), R.match(e) && u(t, 'refetchOnReconnect');
          };
        },
        B = Error('Promise never resolved before cacheEntryRemoved.'),
        W = ({ api: e, reducerPath: t, context: r, queryThunk: n, mutationThunk: i, internalState: u }) => {
          let s = (0, a.Gx)(n),
            o = (0, a.Gx)(i),
            c = (0, a.KD)(n, i),
            l = {};
          function d(t, n, i, a, u) {
            let s = r.endpointDefinitions[t],
              o = s?.onCacheEntryAdded;
            if (!o) return;
            let c = {},
              d = new Promise((e) => {
                c.cacheEntryRemoved = e;
              }),
              f = Promise.race([
                new Promise((e) => {
                  c.valueResolved = e;
                }),
                d.then(() => {
                  throw B;
                }),
              ]);
            f.catch(() => {}), (l[i] = c);
            let p = e.endpoints[t].select('query' === s.type ? n : i),
              m = a.dispatch((e, t, r) => r),
              y = {
                ...a,
                getCacheEntry: () => p(a.getState()),
                requestId: u,
                extra: m,
                updateCachedData: 'query' === s.type ? (r) => a.dispatch(e.util.updateQueryData(t, n, r)) : void 0,
                cacheDataLoaded: f,
                cacheEntryRemoved: d,
              };
            Promise.resolve(o(n, y)).catch((e) => {
              if (e !== B) throw e;
            });
          }
          return (r, a, u) => {
            let f = s(r)
              ? r.meta.arg.queryCacheKey
              : o(r)
                ? r.meta.arg.fixedCacheKey ?? r.meta.requestId
                : e.internalActions.removeQueryResult.match(r)
                  ? r.payload.queryCacheKey
                  : e.internalActions.removeMutationResult.match(r)
                    ? D(r.payload)
                    : '';
            if (n.pending.match(r)) {
              let e = u[t].queries[f],
                n = a.getState()[t].queries[f];
              !e && n && d(r.meta.arg.endpointName, r.meta.arg.originalArgs, f, a, r.meta.requestId);
            } else if (i.pending.match(r))
              a.getState()[t].mutations[f] &&
                d(r.meta.arg.endpointName, r.meta.arg.originalArgs, f, a, r.meta.requestId);
            else if (c(r)) {
              let e = l[f];
              e?.valueResolved &&
                (e.valueResolved({ data: r.payload, meta: r.meta.baseQueryMeta }), delete e.valueResolved);
            } else if (
              e.internalActions.removeQueryResult.match(r) ||
              e.internalActions.removeMutationResult.match(r)
            ) {
              let e = l[f];
              e && (delete l[f], e.cacheEntryRemoved());
            } else if (e.util.resetApiState.match(r))
              for (let [e, t] of Object.entries(l)) delete l[e], t.cacheEntryRemoved();
          };
        },
        G = ({ api: e, context: t, queryThunk: r, mutationThunk: n }) => {
          let i = (0, a.zR)(r, n),
            u = (0, a.Iv)(r, n),
            s = (0, a.KD)(r, n),
            o = {};
          return (r, n) => {
            if (i(r)) {
              let {
                  requestId: i,
                  arg: { endpointName: a, originalArgs: u },
                } = r.meta,
                s = t.endpointDefinitions[a],
                c = s?.onQueryStarted;
              if (c) {
                let t = {},
                  r = new Promise((e, r) => {
                    (t.resolve = e), (t.reject = r);
                  });
                r.catch(() => {}), (o[i] = t);
                let l = e.endpoints[a].select('query' === s.type ? u : i),
                  d = n.dispatch((e, t, r) => r),
                  f = {
                    ...n,
                    getCacheEntry: () => l(n.getState()),
                    requestId: i,
                    extra: d,
                    updateCachedData: 'query' === s.type ? (t) => n.dispatch(e.util.updateQueryData(a, u, t)) : void 0,
                    queryFulfilled: r,
                  };
                c(u, f);
              }
            } else if (s(r)) {
              let { requestId: e, baseQueryMeta: t } = r.meta;
              o[e]?.resolve({ data: r.payload, meta: t }), delete o[e];
            } else if (u(r)) {
              let { requestId: e, rejectedWithValue: t, baseQueryMeta: n } = r.meta;
              o[e]?.reject({ error: r.payload ?? r.error, isUnhandledError: !t, meta: n }), delete o[e];
            }
          };
        },
        V =
          ({ api: e, context: { apiUid: t }, reducerPath: r }) =>
          (r, n) => {
            e.util.resetApiState.match(r) && n.dispatch(e.internalActions.middlewareRegistered(t));
          },
        Y = ({ api: e, queryThunk: t, internalState: r }) => {
          let n = `${e.reducerPath}/subscriptions`,
            i = null,
            a = null,
            { updateSubscriptionOptions: s, unsubscribeQueryResult: o } = e.internalActions,
            c = (r, n) => {
              if (s.match(n)) {
                let { queryCacheKey: e, requestId: t, options: i } = n.payload;
                return r?.[e]?.[t] && (r[e][t] = i), !0;
              }
              if (o.match(n)) {
                let { queryCacheKey: e, requestId: t } = n.payload;
                return r[e] && delete r[e][t], !0;
              }
              if (e.internalActions.removeQueryResult.match(n)) return delete r[n.payload.queryCacheKey], !0;
              if (t.pending.match(n)) {
                let {
                    meta: { arg: e, requestId: t },
                  } = n,
                  i = (r[e.queryCacheKey] ??= {});
                return (i[`${t}_running`] = {}), e.subscribe && (i[t] = e.subscriptionOptions ?? i[t] ?? {}), !0;
              }
              let i = !1;
              if (t.fulfilled.match(n) || t.rejected.match(n)) {
                let e = r[n.meta.arg.queryCacheKey] || {},
                  t = `${n.meta.requestId}_running`;
                (i ||= !!e[t]), delete e[t];
              }
              if (t.rejected.match(n)) {
                let {
                  meta: { condition: e, arg: t, requestId: a },
                } = n;
                if (e && t.subscribe) {
                  let e = (r[t.queryCacheKey] ??= {});
                  (e[a] = t.subscriptionOptions ?? e[a] ?? {}), (i = !0);
                }
              }
              return i;
            },
            l = () => r.currentSubscriptions,
            d = {
              getSubscriptions: l,
              getSubscriptionCount: (e) => C(l()[e] ?? {}),
              isRequestSubscribed: (e, t) => {
                let r = l();
                return !!r?.[e]?.[t];
              },
            };
          return (s, o) => {
            if ((i || (i = JSON.parse(JSON.stringify(r.currentSubscriptions))), e.util.resetApiState.match(s)))
              return (i = r.currentSubscriptions = {}), (a = null), [!0, !1];
            if (e.internalActions.internal_getRTKQSubscriptions.match(s)) return [!1, d];
            let l = c(r.currentSubscriptions, s),
              f = !0;
            if (l) {
              a ||
                (a = setTimeout(() => {
                  let t = JSON.parse(JSON.stringify(r.currentSubscriptions)),
                    [, n] = (0, u.aS)(i, () => t);
                  o.next(e.internalActions.subscriptionsUpdated(n)), (i = t), (a = null);
                }, 500));
              let c = 'string' == typeof s.type && !!s.type.startsWith(n),
                l = t.rejected.match(s) && s.meta.condition && !!s.meta.arg.subscribe;
              f = !c && !l;
            }
            return [f, !1];
          };
        };
      function Z(e, ...t) {
        return Object.assign(e, ...t);
      }
      var X = Symbol(),
        ee = ({ createSelector: e = s.P1 } = {}) => ({
          name: X,
          init(
            t,
            {
              baseQuery: r,
              tagTypes: n,
              reducerPath: s,
              serializeQueryArgs: o,
              keepUnusedDataFor: c,
              refetchOnMountOrArgChange: l,
              refetchOnFocus: p,
              refetchOnReconnect: m,
              invalidationBehavior: y,
            },
            h,
          ) {
            (0, u.vI)();
            let g = (e) => e;
            Object.assign(t, {
              reducerPath: s,
              endpoints: {},
              internalActions: { onOnline: R, onOffline: O, onFocus: v, onFocusLost: S },
              util: {},
            });
            let {
                queryThunk: x,
                mutationThunk: K,
                patchQueryData: $,
                updateQueryData: U,
                upsertQueryData: B,
                prefetch: ee,
                buildMatchThunkActions: et,
              } = (function ({
                reducerPath: e,
                baseQuery: t,
                context: { endpointDefinitions: r },
                serializeQueryArgs: n,
                api: i,
                assertTagType: s,
              }) {
                let o = async (
                  e,
                  { signal: n, abort: i, rejectWithValue: u, fulfillWithValue: s, dispatch: o, getState: l, extra: d },
                ) => {
                  let f = r[e.endpointName];
                  try {
                    let r,
                      u = P,
                      p = {
                        signal: n,
                        abort: i,
                        dispatch: o,
                        getState: l,
                        extra: d,
                        endpoint: e.endpointName,
                        type: e.type,
                        forced: 'query' === e.type ? c(e, l()) : void 0,
                      },
                      m = 'query' === e.type ? e[M] : void 0;
                    if (
                      (m
                        ? (r = m())
                        : f.query
                          ? ((r = await t(f.query(e.originalArgs), p, f.extraOptions)),
                            f.transformResponse && (u = f.transformResponse))
                          : (r = await f.queryFn(e.originalArgs, p, f.extraOptions, (e) => t(e, p, f.extraOptions))),
                      r.error)
                    )
                      throw new b(r.error, r.meta);
                    return s(await u(r.data, r.meta, e.originalArgs), {
                      fulfilledTimeStamp: Date.now(),
                      baseQueryMeta: r.meta,
                      [a.s4]: !0,
                    });
                  } catch (r) {
                    let t = r;
                    if (t instanceof b) {
                      let r = P;
                      f.query && f.transformErrorResponse && (r = f.transformErrorResponse);
                      try {
                        return u(await r(t.value, t.meta, e.originalArgs), { baseQueryMeta: t.meta, [a.s4]: !0 });
                      } catch (e) {
                        t = e;
                      }
                    }
                    throw (console.error(t), t);
                  }
                };
                function c(t, r) {
                  let n = r[e]?.queries?.[t.queryCacheKey],
                    i = r[e]?.config.refetchOnMountOrArgChange,
                    a = n?.fulfilledTimeStamp,
                    u = t.forceRefetch ?? (t.subscribe && i);
                  return !!u && (!0 === u || (Number(new Date()) - Number(a)) / 1e3 >= u);
                }
                let l = (0, a.hg)(`${e}/executeQuery`, o, {
                    getPendingMeta: () => ({ startedTimeStamp: Date.now(), [a.s4]: !0 }),
                    condition(t, { getState: n }) {
                      let i = n(),
                        a = i[e]?.queries?.[t.queryCacheKey],
                        u = a?.fulfilledTimeStamp,
                        s = t.originalArgs,
                        o = a?.originalArgs,
                        l = r[t.endpointName];
                      return (
                        !!T(t) ||
                        (a?.status !== 'pending' &&
                          (!!(
                            c(t, i) ||
                            (A(l) && l?.forceRefetch?.({ currentArg: s, previousArg: o, endpointState: a, state: i }))
                          ) ||
                            !u))
                      );
                    },
                    dispatchConditionRejection: !0,
                  }),
                  d = (0, a.hg)(`${e}/executeMutation`, o, {
                    getPendingMeta: () => ({ startedTimeStamp: Date.now(), [a.s4]: !0 }),
                  }),
                  f = (e) => 'force' in e,
                  p = (e) => 'ifOlderThan' in e;
                function m(e) {
                  return (t) => t?.meta?.arg?.endpointName === e;
                }
                return {
                  queryThunk: l,
                  mutationThunk: d,
                  prefetch: (e, t, r) => (n, a) => {
                    let u = f(r) && r.force,
                      s = p(r) && r.ifOlderThan,
                      o = (r = !0) => i.endpoints[e].initiate(t, { forceRefetch: r, isPrefetch: !0 }),
                      c = i.endpoints[e].select(t)(a());
                    if (u) n(o());
                    else if (s) {
                      let e = c?.fulfilledTimeStamp;
                      if (!e) {
                        n(o());
                        return;
                      }
                      (Number(new Date()) - Number(new Date(e))) / 1e3 >= s && n(o());
                    } else n(o(!1));
                  },
                  updateQueryData:
                    (e, t, r, n = !0) =>
                    (a, s) => {
                      let o;
                      let c = i.endpoints[e].select(t)(s()),
                        l = {
                          patches: [],
                          inversePatches: [],
                          undo: () => a(i.util.patchQueryData(e, t, l.inversePatches, n)),
                        };
                      if ('uninitialized' === c.status) return l;
                      if ('data' in c) {
                        if ((0, u.o$)(c.data)) {
                          let [e, t, n] = (0, u.aS)(c.data, r);
                          l.patches.push(...t), l.inversePatches.push(...n), (o = e);
                        } else
                          (o = r(c.data)),
                            l.patches.push({ op: 'replace', path: [], value: o }),
                            l.inversePatches.push({ op: 'replace', path: [], value: c.data });
                      }
                      return 0 === l.patches.length || a(i.util.patchQueryData(e, t, l.patches, n)), l;
                    },
                  upsertQueryData: (e, t, r) => (n) =>
                    n(i.endpoints[e].initiate(t, { subscribe: !1, forceRefetch: !0, [M]: () => ({ data: r }) })),
                  patchQueryData: (e, t, a, u) => (o, c) => {
                    let l = r[e],
                      d = n({ queryArgs: t, endpointDefinition: l, endpointName: e });
                    if ((o(i.internalActions.queryResultPatched({ queryCacheKey: d, patches: a })), !u)) return;
                    let f = i.endpoints[e].select(t)(c()),
                      p = q(l.providesTags, f.data, void 0, t, {}, s);
                    o(i.internalActions.updateProvidedBy({ queryCacheKey: d, providedTags: p }));
                  },
                  buildMatchThunkActions: function (e, t) {
                    return {
                      matchPending: (0, a.A6)((0, a.zR)(e), m(t)),
                      matchFulfilled: (0, a.A6)((0, a.KD)(e), m(t)),
                      matchRejected: (0, a.A6)((0, a.Iv)(e), m(t)),
                    };
                  },
                };
              })({ baseQuery: r, reducerPath: s, context: h, api: t, serializeQueryArgs: o, assertTagType: g }),
              { reducer: er, actions: en } = (function ({
                reducerPath: e,
                queryThunk: t,
                mutationThunk: r,
                context: { endpointDefinitions: n, apiUid: s, extractRehydrationInfo: o, hasRehydrationInfo: c },
                assertTagType: l,
                config: d,
              }) {
                let p = (0, a.PH)(`${e}/resetApiState`),
                  m = (0, a.oM)({
                    name: `${e}/queries`,
                    initialState: E,
                    reducers: {
                      removeQueryResult: {
                        reducer(e, { payload: { queryCacheKey: t } }) {
                          delete e[t];
                        },
                        prepare: (0, a.cw)(),
                      },
                      queryResultPatched: {
                        reducer(e, { payload: { queryCacheKey: t, patches: r } }) {
                          Q(e, t, (e) => {
                            e.data = (0, u.QE)(e.data, r.concat());
                          });
                        },
                        prepare: (0, a.cw)(),
                      },
                    },
                    extraReducers(e) {
                      e.addCase(t.pending, (e, { meta: t, meta: { arg: r } }) => {
                        let n = T(r);
                        (e[r.queryCacheKey] ??= { status: 'uninitialized', endpointName: r.endpointName }),
                          Q(e, r.queryCacheKey, (e) => {
                            (e.status = 'pending'),
                              (e.requestId = n && e.requestId ? e.requestId : t.requestId),
                              void 0 !== r.originalArgs && (e.originalArgs = r.originalArgs),
                              (e.startedTimeStamp = t.startedTimeStamp);
                          });
                      })
                        .addCase(t.fulfilled, (e, { meta: t, payload: r }) => {
                          Q(e, t.arg.queryCacheKey, (e) => {
                            if (e.requestId !== t.requestId && !T(t.arg)) return;
                            let { merge: i } = n[t.arg.endpointName];
                            if (((e.status = 'fulfilled'), i)) {
                              if (void 0 !== e.data) {
                                let { fulfilledTimeStamp: n, arg: a, baseQueryMeta: s, requestId: o } = t,
                                  c = (0, u.Uy)(e.data, (e) =>
                                    i(e, r, {
                                      arg: a.originalArgs,
                                      baseQueryMeta: s,
                                      fulfilledTimeStamp: n,
                                      requestId: o,
                                    }),
                                  );
                                e.data = c;
                              } else e.data = r;
                            } else
                              e.data =
                                n[t.arg.endpointName].structuralSharing ?? !0
                                  ? (function e(t, r) {
                                      if (t === r || !((f(t) && f(r)) || (Array.isArray(t) && Array.isArray(r))))
                                        return r;
                                      let n = Object.keys(r),
                                        i = Object.keys(t),
                                        a = n.length === i.length,
                                        u = Array.isArray(r) ? [] : {};
                                      for (let i of n) (u[i] = e(t[i], r[i])), a && (a = t[i] === u[i]);
                                      return a ? t : u;
                                    })((0, u.mv)(e.data) ? (0, u.Js)(e.data) : e.data, r)
                                  : r;
                            delete e.error, (e.fulfilledTimeStamp = t.fulfilledTimeStamp);
                          });
                        })
                        .addCase(
                          t.rejected,
                          (e, { meta: { condition: t, arg: r, requestId: n }, error: i, payload: a }) => {
                            Q(e, r.queryCacheKey, (e) => {
                              if (t);
                              else {
                                if (e.requestId !== n) return;
                                (e.status = 'rejected'), (e.error = a ?? i);
                              }
                            });
                          },
                        )
                        .addMatcher(c, (e, t) => {
                          let { queries: r } = o(t);
                          for (let [t, n] of Object.entries(r))
                            (n?.status === 'fulfilled' || n?.status === 'rejected') && (e[t] = n);
                        });
                    },
                  }),
                  y = (0, a.oM)({
                    name: `${e}/mutations`,
                    initialState: E,
                    reducers: {
                      removeMutationResult: {
                        reducer(e, { payload: t }) {
                          let r = D(t);
                          r in e && delete e[r];
                        },
                        prepare: (0, a.cw)(),
                      },
                    },
                    extraReducers(e) {
                      e.addCase(r.pending, (e, { meta: t, meta: { requestId: r, arg: n, startedTimeStamp: i } }) => {
                        n.track &&
                          (e[D(t)] = {
                            requestId: r,
                            status: 'pending',
                            endpointName: n.endpointName,
                            startedTimeStamp: i,
                          });
                      })
                        .addCase(r.fulfilled, (e, { payload: t, meta: r }) => {
                          r.arg.track &&
                            N(e, r, (e) => {
                              e.requestId === r.requestId &&
                                ((e.status = 'fulfilled'), (e.data = t), (e.fulfilledTimeStamp = r.fulfilledTimeStamp));
                            });
                        })
                        .addCase(r.rejected, (e, { payload: t, error: r, meta: n }) => {
                          n.arg.track &&
                            N(e, n, (e) => {
                              e.requestId === n.requestId && ((e.status = 'rejected'), (e.error = t ?? r));
                            });
                        })
                        .addMatcher(c, (e, t) => {
                          let { mutations: r } = o(t);
                          for (let [t, n] of Object.entries(r))
                            (n?.status === 'fulfilled' || n?.status === 'rejected') && t !== n?.requestId && (e[t] = n);
                        });
                    },
                  }),
                  h = (0, a.oM)({
                    name: `${e}/invalidation`,
                    initialState: E,
                    reducers: {
                      updateProvidedBy: {
                        reducer(e, t) {
                          let { queryCacheKey: r, providedTags: n } = t.payload;
                          for (let t of Object.values(e))
                            for (let e of Object.values(t)) {
                              let t = e.indexOf(r);
                              -1 !== t && e.splice(t, 1);
                            }
                          for (let { type: t, id: i } of n) {
                            let n = ((e[t] ??= {})[i || '__internal_without_id'] ??= []);
                            n.includes(r) || n.push(r);
                          }
                        },
                        prepare: (0, a.cw)(),
                      },
                    },
                    extraReducers(e) {
                      e.addCase(m.actions.removeQueryResult, (e, { payload: { queryCacheKey: t } }) => {
                        for (let r of Object.values(e))
                          for (let e of Object.values(r)) {
                            let r = e.indexOf(t);
                            -1 !== r && e.splice(r, 1);
                          }
                      })
                        .addMatcher(c, (e, t) => {
                          let { provided: r } = o(t);
                          for (let [t, n] of Object.entries(r))
                            for (let [r, i] of Object.entries(n)) {
                              let n = ((e[t] ??= {})[r || '__internal_without_id'] ??= []);
                              for (let e of i) n.includes(e) || n.push(e);
                            }
                        })
                        .addMatcher((0, a.Q)((0, a.KD)(t), (0, a.h_)(t)), (e, t) => {
                          let r = k(t, 'providesTags', n, l),
                            { queryCacheKey: i } = t.meta.arg;
                          h.caseReducers.updateProvidedBy(
                            e,
                            h.actions.updateProvidedBy({ queryCacheKey: i, providedTags: r }),
                          );
                        });
                    },
                  }),
                  g = (0, a.oM)({
                    name: `${e}/subscriptions`,
                    initialState: E,
                    reducers: {
                      updateSubscriptionOptions(e, t) {},
                      unsubscribeQueryResult(e, t) {},
                      internal_getRTKQSubscriptions() {},
                    },
                  }),
                  b = (0, a.oM)({
                    name: `${e}/internalSubscriptions`,
                    initialState: E,
                    reducers: {
                      subscriptionsUpdated: { reducer: (e, t) => (0, u.QE)(e, t.payload), prepare: (0, a.cw)() },
                    },
                  }),
                  A = (0, a.oM)({
                    name: `${e}/config`,
                    initialState: {
                      online: 'undefined' == typeof navigator || void 0 === navigator.onLine || navigator.onLine,
                      focused: 'undefined' == typeof document || 'hidden' !== document.visibilityState,
                      middlewareRegistered: !1,
                      ...d,
                    },
                    reducers: {
                      middlewareRegistered(e, { payload: t }) {
                        e.middlewareRegistered = ('conflict' !== e.middlewareRegistered && s === t) || 'conflict';
                      },
                    },
                    extraReducers: (e) => {
                      e.addCase(R, (e) => {
                        e.online = !0;
                      })
                        .addCase(O, (e) => {
                          e.online = !1;
                        })
                        .addCase(v, (e) => {
                          e.focused = !0;
                        })
                        .addCase(S, (e) => {
                          e.focused = !1;
                        })
                        .addMatcher(c, (e) => ({ ...e }));
                    },
                  }),
                  q = (0, i.UY)({
                    queries: m.reducer,
                    mutations: y.reducer,
                    provided: h.reducer,
                    subscriptions: b.reducer,
                    config: A.reducer,
                  });
                return {
                  reducer: (e, t) => q(p.match(t) ? void 0 : e, t),
                  actions: {
                    ...A.actions,
                    ...m.actions,
                    ...g.actions,
                    ...b.actions,
                    ...y.actions,
                    ...h.actions,
                    resetApiState: p,
                  },
                };
              })({
                context: h,
                queryThunk: x,
                mutationThunk: K,
                reducerPath: s,
                assertTagType: g,
                config: {
                  refetchOnFocus: p,
                  refetchOnReconnect: m,
                  refetchOnMountOrArgChange: l,
                  keepUnusedDataFor: c,
                  reducerPath: s,
                  invalidationBehavior: y,
                },
              });
            Z(t.util, {
              patchQueryData: $,
              updateQueryData: U,
              upsertQueryData: B,
              prefetch: ee,
              resetApiState: en.resetApiState,
            }),
              Z(t.internalActions, en);
            let { middleware: ei, actions: ea } = (function (e) {
              let { reducerPath: t, queryThunk: r, api: n, context: u } = e,
                { apiUid: s } = u,
                o = { invalidateTags: (0, a.PH)(`${t}/invalidateTags`) },
                c = (e) => e.type.startsWith(`${t}/`),
                l = [V, F, H, J, W, G];
              return {
                middleware: (r) => {
                  let a = !1,
                    o = { ...e, internalState: { currentSubscriptions: {} }, refetchQuery: d, isThisApiSliceAction: c },
                    f = l.map((e) => e(o)),
                    p = Y(o),
                    m = L(o);
                  return (e) => (o) => {
                    let l;
                    if (!(0, i.LG)(o)) return e(o);
                    a || ((a = !0), r.dispatch(n.internalActions.middlewareRegistered(s)));
                    let d = { ...r, next: e },
                      y = r.getState(),
                      [h, g] = p(o, d, y);
                    if (((l = h ? e(o) : g), r.getState()[t] && (m(o, d, y), c(o) || u.hasRehydrationInfo(o))))
                      for (let e of f) e(o, d, y);
                    return l;
                  };
                },
                actions: o,
              };
              function d(e, t, n = {}) {
                return r({
                  type: 'query',
                  endpointName: e.endpointName,
                  originalArgs: e.originalArgs,
                  subscribe: !1,
                  forceRefetch: !0,
                  queryCacheKey: t,
                  ...n,
                });
              }
            })({ reducerPath: s, context: h, queryThunk: x, mutationThunk: K, api: t, assertTagType: g });
            Z(t.util, ea), Z(t, { reducer: er, middleware: ei });
            let {
              buildQuerySelector: eu,
              buildMutationSelector: es,
              selectInvalidatedBy: eo,
              selectCachedArgsForQuery: ec,
            } = (function ({ serializeQueryArgs: e, reducerPath: t, createSelector: r }) {
              let n = (e) => _,
                i = (e) => z;
              return {
                buildQuerySelector: function (i, u) {
                  return (s) => {
                    let o = e({ queryArgs: s, endpointDefinition: u, endpointName: i });
                    return r(s === I ? n : (e) => e[t]?.queries?.[o] ?? _, a);
                  };
                },
                buildMutationSelector: function () {
                  return (e) => {
                    let n;
                    return r(
                      (n = 'object' == typeof e ? D(e) ?? I : e) === I ? i : (e) => e[t]?.mutations?.[n] ?? z,
                      a,
                    );
                  };
                },
                selectInvalidatedBy: function (e, r) {
                  let n = e[t],
                    i = new Set();
                  for (let e of r.map(w)) {
                    let t = n.provided[e.type];
                    if (t) for (let r of (void 0 !== e.id ? t[e.id] : d(Object.values(t))) ?? []) i.add(r);
                  }
                  return d(
                    Array.from(i.values()).map((e) => {
                      let t = n.queries[e];
                      return t
                        ? [{ queryCacheKey: e, endpointName: t.endpointName, originalArgs: t.originalArgs }]
                        : [];
                    }),
                  );
                },
                selectCachedArgsForQuery: function (e, r) {
                  return Object.values(e[t].queries)
                    .filter((e) => e?.endpointName === r && 'uninitialized' !== e.status)
                    .map((e) => e.originalArgs);
                },
              };
              function a(e) {
                var t;
                return {
                  ...e,
                  status: (t = e.status),
                  isUninitialized: 'uninitialized' === t,
                  isLoading: 'pending' === t,
                  isSuccess: 'fulfilled' === t,
                  isError: 'rejected' === t,
                };
              }
            })({ serializeQueryArgs: o, reducerPath: s, createSelector: e });
            Z(t.util, { selectInvalidatedBy: eo, selectCachedArgsForQuery: ec });
            let {
              buildInitiateQuery: el,
              buildInitiateMutation: ed,
              getRunningMutationThunk: ef,
              getRunningMutationsThunk: ep,
              getRunningQueriesThunk: em,
              getRunningQueryThunk: ey,
            } = (function ({ serializeQueryArgs: e, queryThunk: t, mutationThunk: r, api: n, context: i }) {
              let a = new Map(),
                u = new Map(),
                {
                  unsubscribeQueryResult: s,
                  removeMutationResult: o,
                  updateSubscriptionOptions: c,
                } = n.internalActions;
              return {
                buildInitiateQuery: function (r, i) {
                  let u =
                    (o, { subscribe: l = !0, forceRefetch: d, subscriptionOptions: f, [M]: p, ...m } = {}) =>
                    (y, h) => {
                      let g = e({ queryArgs: o, endpointDefinition: i, endpointName: r }),
                        b = t({
                          ...m,
                          type: 'query',
                          subscribe: l,
                          forceRefetch: d,
                          subscriptionOptions: f,
                          endpointName: r,
                          originalArgs: o,
                          queryCacheKey: g,
                          [M]: p,
                        }),
                        v = n.endpoints[r].select(o),
                        S = y(b),
                        R = v(h()),
                        { requestId: O, abort: A } = S,
                        q = R.requestId !== O,
                        w = a.get(y)?.[g],
                        j = () => v(h()),
                        T = Object.assign(p ? S.then(j) : q && !w ? Promise.resolve(R) : Promise.all([w, S]).then(j), {
                          arg: o,
                          requestId: O,
                          subscriptionOptions: f,
                          queryCacheKey: g,
                          abort: A,
                          async unwrap() {
                            let e = await T;
                            if (e.isError) throw e.error;
                            return e.data;
                          },
                          refetch: () => y(u(o, { subscribe: !1, forceRefetch: !0 })),
                          unsubscribe() {
                            l && y(s({ queryCacheKey: g, requestId: O }));
                          },
                          updateSubscriptionOptions(e) {
                            (T.subscriptionOptions = e),
                              y(c({ endpointName: r, requestId: O, queryCacheKey: g, options: e }));
                          },
                        });
                      if (!w && !q && !p) {
                        let e = a.get(y) || {};
                        (e[g] = T),
                          a.set(y, e),
                          T.then(() => {
                            delete e[g], C(e) || a.delete(y);
                          });
                      }
                      return T;
                    };
                  return u;
                },
                buildInitiateMutation: function (e) {
                  return (t, { track: n = !0, fixedCacheKey: i } = {}) =>
                    (a, s) => {
                      let c = a(r({ type: 'mutation', endpointName: e, originalArgs: t, track: n, fixedCacheKey: i })),
                        { requestId: l, abort: d, unwrap: f } = c,
                        p = Object.assign(
                          c
                            .unwrap()
                            .then((e) => ({ data: e }))
                            .catch((e) => ({ error: e })),
                          {
                            arg: c.arg,
                            requestId: l,
                            abort: d,
                            unwrap: f,
                            reset: () => {
                              a(o({ requestId: l, fixedCacheKey: i }));
                            },
                          },
                        ),
                        m = u.get(a) || {};
                      return (
                        u.set(a, m),
                        (m[l] = p),
                        p.then(() => {
                          delete m[l], C(m) || u.delete(a);
                        }),
                        i &&
                          ((m[i] = p),
                          p.then(() => {
                            m[i] !== p || (delete m[i], C(m) || u.delete(a));
                          })),
                        p
                      );
                    };
                },
                getRunningQueryThunk: function (t, r) {
                  return (n) => {
                    let u = e({ queryArgs: r, endpointDefinition: i.endpointDefinitions[t], endpointName: t });
                    return a.get(n)?.[u];
                  };
                },
                getRunningMutationThunk: function (e, t) {
                  return (e) => u.get(e)?.[t];
                },
                getRunningQueriesThunk: function () {
                  return (e) => Object.values(a.get(e) || {}).filter(j);
                },
                getRunningMutationsThunk: function () {
                  return (e) => Object.values(u.get(e) || {}).filter(j);
                },
              };
            })({ queryThunk: x, mutationThunk: K, api: t, serializeQueryArgs: o, context: h });
            return (
              Z(t.util, {
                getRunningMutationThunk: ef,
                getRunningMutationsThunk: ep,
                getRunningQueryThunk: ey,
                getRunningQueriesThunk: em,
              }),
              {
                name: X,
                injectEndpoint(e, r) {
                  ((t.endpoints[e] ??= {}), A(r))
                    ? Z(t.endpoints[e], { name: e, select: eu(e, r), initiate: el(e, r) }, et(x, e))
                    : 'mutation' === r.type && Z(t.endpoints[e], { name: e, select: es(), initiate: ed(e) }, et(K, e));
                },
              }
            );
          },
        });
      ee();
    },
  },
]);
