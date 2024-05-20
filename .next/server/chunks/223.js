(exports.id = 223),
  (exports.ids = [223]),
  (exports.modules = {
    31900: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'Image', {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let n = r(39694),
        i = r(17824)._(r(3729)),
        o = n._(r(81202)),
        a = n._(r(1758)),
        l = r(83855),
        s = r(73053),
        u = r(74187);
      r(70837);
      let d = r(66150),
        c = n._(r(74931)),
        f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: '/_next/image',
          loader: 'default',
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        };
      function p(e, t, r, n, i, o) {
        let a = null == e ? void 0 : e.src;
        e &&
          e['data-loaded-src'] !== a &&
          ((e['data-loaded-src'] = a),
          ('decode' in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (('empty' !== t && i(!0), null == r ? void 0 : r.current)) {
                  let t = new Event('load');
                  Object.defineProperty(t, 'target', { writable: !1, value: e });
                  let n = !1,
                    i = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function m(e) {
        let [t, r] = i.version.split('.', 2),
          n = parseInt(t, 10),
          o = parseInt(r, 10);
        return n > 18 || (18 === n && o >= 3) ? { fetchPriority: e } : { fetchpriority: e };
      }
      globalThis.__NEXT_IMAGE_IMPORTED = !0;
      let g = (0, i.forwardRef)((e, t) => {
        let {
          src: r,
          srcSet: n,
          sizes: o,
          height: a,
          width: l,
          decoding: s,
          className: u,
          style: d,
          fetchPriority: c,
          placeholder: f,
          loading: g,
          unoptimized: h,
          fill: y,
          onLoadRef: v,
          onLoadingCompleteRef: b,
          setBlurComplete: _,
          setShowAltText: w,
          onLoad: S,
          onError: x,
          ...P
        } = e;
        return i.default.createElement('img', {
          ...P,
          ...m(c),
          loading: g,
          width: l,
          height: a,
          decoding: s,
          'data-nimg': y ? 'fill' : '1',
          className: u,
          style: d,
          sizes: o,
          srcSet: n,
          src: r,
          ref: (0, i.useCallback)(
            (e) => {
              t && ('function' == typeof t ? t(e) : 'object' == typeof t && (t.current = e)),
                e && (x && (e.src = e.src), e.complete && p(e, f, v, b, _, h));
            },
            [r, f, v, b, _, x, h, t],
          ),
          onLoad: (e) => {
            p(e.currentTarget, f, v, b, _, h);
          },
          onError: (e) => {
            w(!0), 'empty' !== f && _(!0), x && x(e);
          },
        });
      });
      function h(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: 'image',
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...m(r.fetchPriority),
          };
        return t && o.default.preload
          ? (o.default.preload(r.src, n), null)
          : i.default.createElement(
              a.default,
              null,
              i.default.createElement('link', {
                key: '__nimg-' + r.src + r.srcSet + r.sizes,
                rel: 'preload',
                href: r.srcSet ? void 0 : r.src,
                ...n,
              }),
            );
      }
      let y = (0, i.forwardRef)((e, t) => {
        let r = (0, i.useContext)(d.RouterContext),
          n = (0, i.useContext)(u.ImageConfigContext),
          o = (0, i.useMemo)(() => {
            let e = f || n || s.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [n]),
          { onLoad: a, onLoadingComplete: p } = e,
          m = (0, i.useRef)(a);
        (0, i.useEffect)(() => {
          m.current = a;
        }, [a]);
        let y = (0, i.useRef)(p);
        (0, i.useEffect)(() => {
          y.current = p;
        }, [p]);
        let [v, b] = (0, i.useState)(!1),
          [_, w] = (0, i.useState)(!1),
          { props: S, meta: x } = (0, l.getImgProps)(e, {
            defaultLoader: c.default,
            imgConf: o,
            blurComplete: v,
            showAltText: _,
          });
        return i.default.createElement(
          i.default.Fragment,
          null,
          i.default.createElement(g, {
            ...S,
            unoptimized: x.unoptimized,
            placeholder: x.placeholder,
            fill: x.fill,
            onLoadRef: m,
            onLoadingCompleteRef: y,
            setBlurComplete: b,
            setShowAltText: w,
            ref: t,
          }),
          x.priority ? i.default.createElement(h, { isAppRouter: !r, imgAttributes: S }) : null,
        );
      });
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7637: (e, t, r) => {
      'use strict';
      e.exports = r(16372).vendored.contexts.AmpContext;
    },
    32158: (e, t, r) => {
      'use strict';
      e.exports = r(16372).vendored.contexts.HeadManagerContext;
    },
    74187: (e, t, r) => {
      'use strict';
      e.exports = r(16372).vendored.contexts.ImageConfigContext;
    },
    66150: (e, t, r) => {
      'use strict';
      e.exports = r(16372).vendored.contexts.RouterContext;
    },
    13126: (e, t) => {
      'use strict';
      function r(e) {
        let { ampFirst: t = !1, hybrid: r = !1, hasQuery: n = !1 } = void 0 === e ? {} : e;
        return t || (r && n);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'isInAmpMode', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    83855: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getImgProps', {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        r(70837);
      let n = r(86358),
        i = r(73053);
      function o(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : 'number' == typeof e
            ? Number.isFinite(e)
              ? e
              : NaN
            : 'string' == typeof e && /^[0-9]+$/.test(e)
              ? parseInt(e, 10)
              : NaN;
      }
      function l(e, t) {
        var r;
        let l,
          s,
          u,
          {
            src: d,
            sizes: c,
            unoptimized: f = !1,
            priority: p = !1,
            loading: m,
            className: g,
            quality: h,
            width: y,
            height: v,
            fill: b = !1,
            style: _,
            onLoad: w,
            onLoadingComplete: S,
            placeholder: x = 'empty',
            blurDataURL: P,
            fetchPriority: C,
            layout: j,
            objectFit: O,
            objectPosition: E,
            lazyBoundary: z,
            lazyRoot: M,
            ...I
          } = e,
          { imgConf: k, showAltText: A, blurComplete: R, defaultLoader: D } = t,
          U = k || i.imageConfigDefault;
        if ('allSizes' in U) l = U;
        else {
          let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t),
            t = U.deviceSizes.sort((e, t) => e - t);
          l = { ...U, allSizes: e, deviceSizes: t };
        }
        let L = I.loader || D;
        delete I.loader, delete I.srcSet;
        let T = '__next_img_default' in L;
        if (T) {
          if ('custom' === l.loader)
            throw Error(
              'Image with src "' +
                d +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader',
            );
        } else {
          let e = L;
          L = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (j) {
          'fill' === j && (b = !0);
          let e = { intrinsic: { maxWidth: '100%', height: 'auto' }, responsive: { width: '100%', height: 'auto' } }[j];
          e && (_ = { ..._, ...e });
          let t = { responsive: '100vw', fill: '100vw' }[j];
          t && !c && (c = t);
        }
        let G = '',
          N = a(y),
          B = a(v);
        if ('object' == typeof (r = d) && (o(r) || void 0 !== r.src)) {
          let e = o(d) ? d.default : d;
          if (!e.src)
            throw Error(
              'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ' +
                JSON.stringify(e),
            );
          if (!e.height || !e.width)
            throw Error(
              'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ' +
                JSON.stringify(e),
            );
          if (((s = e.blurWidth), (u = e.blurHeight), (P = P || e.blurDataURL), (G = e.src), !b)) {
            if (N || B) {
              if (N && !B) {
                let t = N / e.width;
                B = Math.round(e.height * t);
              } else if (!N && B) {
                let t = B / e.height;
                N = Math.round(e.width * t);
              }
            } else (N = e.width), (B = e.height);
          }
        }
        let F = !p && ('lazy' === m || void 0 === m);
        (!(d = 'string' == typeof d ? d : G) || d.startsWith('data:') || d.startsWith('blob:')) && ((f = !0), (F = !1)),
          l.unoptimized && (f = !0),
          T && d.endsWith('.svg') && !l.dangerouslyAllowSVG && (f = !0),
          p && (C = 'high');
        let W = a(h),
          H = Object.assign(
            b
              ? {
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: O,
                  objectPosition: E,
                }
              : {},
            A ? {} : { color: 'transparent' },
            _,
          ),
          V =
            R || 'empty' === x
              ? null
              : 'blur' === x
                ? 'url("data:image/svg+xml;charset=utf-8,' +
                  (0, n.getImageBlurSvg)({
                    widthInt: N,
                    heightInt: B,
                    blurWidth: s,
                    blurHeight: u,
                    blurDataURL: P || '',
                    objectFit: H.objectFit,
                  }) +
                  '")'
                : 'url("' + x + '")',
          q = V
            ? {
                backgroundSize: H.objectFit || 'cover',
                backgroundPosition: H.objectPosition || '50% 50%',
                backgroundRepeat: 'no-repeat',
                backgroundImage: V,
              }
            : {},
          $ = (function (e) {
            let { config: t, src: r, unoptimized: n, width: i, quality: o, sizes: a, loader: l } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: s, kind: u } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: i } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return { widths: i.filter((t) => t >= n[0] * e), kind: 'w' };
                  }
                  return { widths: i, kind: 'w' };
                }
                return 'number' != typeof t
                  ? { widths: n, kind: 'w' }
                  : {
                      widths: [...new Set([t, 2 * t].map((e) => i.find((t) => t >= e) || i[i.length - 1]))],
                      kind: 'x',
                    };
              })(t, i, a),
              d = s.length - 1;
            return {
              sizes: a || 'w' !== u ? a : '100vw',
              srcSet: s
                .map((e, n) => l({ config: t, src: r, quality: o, width: e }) + ' ' + ('w' === u ? e : n + 1) + u)
                .join(', '),
              src: l({ config: t, src: r, quality: o, width: s[d] }),
            };
          })({ config: l, src: d, unoptimized: f, width: N, quality: W, sizes: c, loader: L });
        return {
          props: {
            ...I,
            loading: F ? 'lazy' : m,
            fetchPriority: C,
            width: N,
            height: B,
            decoding: 'async',
            className: g,
            style: { ...H, ...q },
            sizes: $.sizes,
            srcSet: $.srcSet,
            src: $.src,
          },
          meta: { unoptimized: f, priority: p, placeholder: x, fill: b },
        };
      }
    },
    1758: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          defaultHead: function () {
            return u;
          },
          default: function () {
            return p;
          },
        });
      let n = r(39694),
        i = r(17824)._(r(3729)),
        o = n._(r(27984)),
        a = r(7637),
        l = r(32158),
        s = r(13126);
      function u(e) {
        void 0 === e && (e = !1);
        let t = [i.default.createElement('meta', { charSet: 'utf-8' })];
        return e || t.push(i.default.createElement('meta', { name: 'viewport', content: 'width=device-width' })), t;
      }
      function d(e, t) {
        return 'string' == typeof t || 'number' == typeof t
          ? e
          : t.type === i.default.Fragment
            ? e.concat(
                i.default.Children.toArray(t.props.children).reduce(
                  (e, t) => ('string' == typeof t || 'number' == typeof t ? e : e.concat(t)),
                  [],
                ),
              )
            : e.concat(t);
      }
      r(70837);
      let c = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function f(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(d, [])
          .reverse()
          .concat(u(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (i) => {
                let o = !0,
                  a = !1;
                if (i.key && 'number' != typeof i.key && i.key.indexOf('$') > 0) {
                  a = !0;
                  let t = i.key.slice(i.key.indexOf('$') + 1);
                  e.has(t) ? (o = !1) : e.add(t);
                }
                switch (i.type) {
                  case 'title':
                  case 'base':
                    t.has(i.type) ? (o = !1) : t.add(i.type);
                    break;
                  case 'meta':
                    for (let e = 0, t = c.length; e < t; e++) {
                      let t = c[e];
                      if (i.props.hasOwnProperty(t)) {
                        if ('charSet' === t) r.has(t) ? (o = !1) : r.add(t);
                        else {
                          let e = i.props[t],
                            r = n[t] || new Set();
                          ('name' !== t || !a) && r.has(e) ? (o = !1) : (r.add(e), (n[t] = r));
                        }
                      }
                    }
                }
                return o;
              };
            })(),
          )
          .reverse()
          .map((e, t) => {
            let n = e.key || t;
            if (
              !r &&
              'link' === e.type &&
              e.props.href &&
              ['https://fonts.googleapis.com/css', 'https://use.typekit.net/'].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t['data-href'] = t.href),
                (t.href = void 0),
                (t['data-optimized-fonts'] = !0),
                i.default.cloneElement(e, t)
              );
            }
            return i.default.cloneElement(e, { key: n });
          });
      }
      let p = function (e) {
        let { children: t } = e,
          r = (0, i.useContext)(a.AmpStateContext),
          n = (0, i.useContext)(l.HeadManagerContext);
        return i.default.createElement(
          o.default,
          { reduceComponentsToState: f, headManager: n, inAmpMode: (0, s.isInAmpMode)(r) },
          t,
        );
      };
      ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    86358: (e, t) => {
      'use strict';
      function r(e) {
        let { widthInt: t, heightInt: r, blurWidth: n, blurHeight: i, blurDataURL: o, objectFit: a } = e,
          l = n ? 40 * n : t,
          s = i ? 40 * i : r,
          u = l && s ? "viewBox='0 0 " + l + ' ' + s + "'" : '';
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u ? 'none' : 'contain' === a ? 'xMidYMid' : 'cover' === a ? 'xMidYMid slice' : 'none') +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'getImageBlurSvg', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    73053: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ['default', 'imgix', 'cloudinary', 'akamai', 'custom'],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: '/_next/image',
          loader: 'default',
          loaderFile: '',
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ['image/webp'],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: 'inline',
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    37412: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          unstable_getImgProps: function () {
            return s;
          },
          default: function () {
            return u;
          },
        });
      let n = r(39694),
        i = r(83855),
        o = r(70837),
        a = r(31900),
        l = n._(r(74931)),
        s = (e) => {
          (0, o.warnOnce)(
            'Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.',
          );
          let { props: t } = (0, i.getImgProps)(e, {
            defaultLoader: l.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: '/_next/image',
              loader: 'default',
              dangerouslyAllowSVG: !1,
              unoptimized: !0,
            },
          });
          for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
          return { props: t };
        },
        u = a.Image;
    },
    74931: (e, t) => {
      'use strict';
      function r(e) {
        let { config: t, src: r, width: n, quality: i } = e;
        return t.path + '?url=' + encodeURIComponent(r) + '&w=' + n + '&q=' + (i || 75);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    27984: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(3729),
        i = () => {},
        o = () => {};
      function a(e) {
        var t;
        let { headManager: r, reduceComponentsToState: a } = e;
        function l() {
          if (r && r.mountedInstances) {
            let t = n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));
            r.updateHead(a(t, e));
          }
        }
        return (
          null == r || null == (t = r.mountedInstances) || t.add(e.children),
          l(),
          i(() => {
            var t;
            return (
              null == r || null == (t = r.mountedInstances) || t.add(e.children),
              () => {
                var t;
                null == r || null == (t = r.mountedInstances) || t.delete(e.children);
              }
            );
          }),
          i(
            () => (
              r && (r._pendingUpdate = l),
              () => {
                r && (r._pendingUpdate = l);
              }
            ),
          ),
          o(
            () => (
              r && r._pendingUpdate && (r._pendingUpdate(), (r._pendingUpdate = null)),
              () => {
                r && r._pendingUpdate && (r._pendingUpdate(), (r._pendingUpdate = null));
              }
            ),
          ),
          null
        );
      }
    },
    70837: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'warnOnce', {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = (e) => {};
    },
    41223: (e, t, r) => {
      e.exports = r(37412);
    },
  });
