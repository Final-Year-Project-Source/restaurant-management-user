(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4625],
  {
    51841: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 53267));
    },
    53267: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return ef;
          },
        });
      var r = n(57437),
        i = n(90601);
      let l = (() => {
        let e = 0,
          t = () => `0000${((1679616 * Math.random()) << 0).toString(36)}`.slice(-4);
        return () => ((e += 1), `u${t()}${e}`);
      })();
      function a(e) {
        let t = [];
        for (let n = 0, r = e.length; n < r; n++) t.push(e[n]);
        return t;
      }
      function o(e, t) {
        let n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
        return n ? parseFloat(n.replace('px', '')) : 0;
      }
      function s(e, t = {}) {
        return {
          width:
            t.width ||
            (function (e) {
              let t = o(e, 'border-left-width'),
                n = o(e, 'border-right-width');
              return e.clientWidth + t + n;
            })(e),
          height:
            t.height ||
            (function (e) {
              let t = o(e, 'border-top-width'),
                n = o(e, 'border-bottom-width');
              return e.clientHeight + t + n;
            })(e),
        };
      }
      function c(e) {
        return new Promise((t, n) => {
          let r = new Image();
          (r.decode = () => t(r)),
            (r.onload = () => t(r)),
            (r.onerror = n),
            (r.crossOrigin = 'anonymous'),
            (r.decoding = 'async'),
            (r.src = e);
        });
      }
      async function u(e) {
        return Promise.resolve()
          .then(() => new XMLSerializer().serializeToString(e))
          .then(encodeURIComponent)
          .then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
      }
      async function d(e, t, n) {
        let r = 'http://www.w3.org/2000/svg',
          i = document.createElementNS(r, 'svg'),
          l = document.createElementNS(r, 'foreignObject');
        return (
          i.setAttribute('width', `${t}`),
          i.setAttribute('height', `${n}`),
          i.setAttribute('viewBox', `0 0 ${t} ${n}`),
          l.setAttribute('width', '100%'),
          l.setAttribute('height', '100%'),
          l.setAttribute('x', '0'),
          l.setAttribute('y', '0'),
          l.setAttribute('externalResourcesRequired', 'true'),
          i.appendChild(l),
          l.appendChild(e),
          u(i)
        );
      }
      let h = (e, t) => {
        if (e instanceof t) return !0;
        let n = Object.getPrototypeOf(e);
        return null !== n && (n.constructor.name === t.name || h(n, t));
      };
      function f(e, t, n) {
        let r = window.getComputedStyle(e, n),
          i = r.getPropertyValue('content');
        if ('' === i || 'none' === i) return;
        let o = l();
        try {
          t.className = `${t.className} ${o}`;
        } catch (e) {
          return;
        }
        let s = document.createElement('style');
        s.appendChild(
          (function (e, t, n) {
            let r = `.${e}:${t}`,
              i = n.cssText
                ? (function (e) {
                    let t = e.getPropertyValue('content');
                    return `${e.cssText} content: '${t.replace(/'|"/g, '')}';`;
                  })(n)
                : a(n)
                    .map((e) => {
                      let t = n.getPropertyValue(e),
                        r = n.getPropertyPriority(e);
                      return `${e}: ${t}${r ? ' !important' : ''};`;
                    })
                    .join(' ');
            return document.createTextNode(`${r}{${i}}`);
          })(o, n, r),
        ),
          t.appendChild(s);
      }
      let m = 'application/font-woff',
        p = 'image/jpeg',
        g = {
          woff: m,
          woff2: m,
          ttf: 'application/font-truetype',
          eot: 'application/vnd.ms-fontobject',
          png: 'image/png',
          jpg: p,
          jpeg: p,
          gif: 'image/gif',
          tiff: 'image/tiff',
          svg: 'image/svg+xml',
          webp: 'image/webp',
        };
      function x(e) {
        return (
          g[
            (function (e) {
              let t = /\.([^./]*?)$/g.exec(e);
              return t ? t[1] : '';
            })(e).toLowerCase()
          ] || ''
        );
      }
      function y(e) {
        return -1 !== e.search(/^(data:)/);
      }
      function w(e, t) {
        return `data:${t};base64,${e}`;
      }
      async function v(e, t, n) {
        let r = await fetch(e, t);
        if (404 === r.status) throw Error(`Resource "${r.url}" not found`);
        let i = await r.blob();
        return new Promise((e, t) => {
          let l = new FileReader();
          (l.onerror = t),
            (l.onloadend = () => {
              try {
                e(n({ res: r, result: l.result }));
              } catch (e) {
                t(e);
              }
            }),
            l.readAsDataURL(i);
        });
      }
      let b = {};
      async function S(e, t, n) {
        var r, i, l;
        let a, o;
        let s =
          ((r = e),
          (i = t),
          (l = n.includeQueryParams),
          (o = r.replace(/\?.*/, '')),
          l && (o = r),
          /ttf|otf|eot|woff2?/i.test(o) && (o = o.replace(/.*\//, '')),
          i ? `[${i}]${o}` : o);
        if (null != b[s]) return b[s];
        n.cacheBust && (e += (/\?/.test(e) ? '&' : '?') + new Date().getTime());
        try {
          let r = await v(
            e,
            n.fetchRequestInit,
            ({ res: e, result: n }) => (t || (t = e.headers.get('Content-Type') || ''), n.split(/,/)[1]),
          );
          a = w(r, t);
        } catch (r) {
          a = n.imagePlaceholder || '';
          let t = `Failed to fetch resource: ${e}`;
          r && (t = 'string' == typeof r ? r : r.message), t && console.warn(t);
        }
        return (b[s] = a), a;
      }
      async function j(e) {
        let t = e.toDataURL();
        return 'data:,' === t ? e.cloneNode(!1) : c(t);
      }
      async function N(e, t) {
        if (e.currentSrc) {
          let t = document.createElement('canvas'),
            n = t.getContext('2d');
          return (
            (t.width = e.clientWidth),
            (t.height = e.clientHeight),
            null == n || n.drawImage(e, 0, 0, t.width, t.height),
            c(t.toDataURL())
          );
        }
        let n = e.poster,
          r = x(n);
        return c(await S(n, r, t));
      }
      async function E(e) {
        var t;
        try {
          if (null === (t = null == e ? void 0 : e.contentDocument) || void 0 === t ? void 0 : t.body)
            return await T(e.contentDocument.body, {}, !0);
        } catch (e) {}
        return e.cloneNode(!1);
      }
      async function C(e, t) {
        return h(e, HTMLCanvasElement)
          ? j(e)
          : h(e, HTMLVideoElement)
            ? N(e, t)
            : h(e, HTMLIFrameElement)
              ? E(e)
              : e.cloneNode(!1);
      }
      let _ = (e) => null != e.tagName && 'SLOT' === e.tagName.toUpperCase();
      async function $(e, t, n) {
        var r, i;
        let l = [];
        return (
          0 ===
            (l =
              _(e) && e.assignedNodes
                ? a(e.assignedNodes())
                : h(e, HTMLIFrameElement) && (null === (r = e.contentDocument) || void 0 === r ? void 0 : r.body)
                  ? a(e.contentDocument.body.childNodes)
                  : a((null !== (i = e.shadowRoot) && void 0 !== i ? i : e).childNodes)).length ||
            h(e, HTMLVideoElement) ||
            (await l.reduce(
              (e, r) =>
                e
                  .then(() => T(r, n))
                  .then((e) => {
                    e && t.appendChild(e);
                  }),
              Promise.resolve(),
            )),
          t
        );
      }
      async function P(e, t) {
        let n = e.querySelectorAll ? e.querySelectorAll('use') : [];
        if (0 === n.length) return e;
        let r = {};
        for (let i = 0; i < n.length; i++) {
          let l = n[i].getAttribute('xlink:href');
          if (l) {
            let n = e.querySelector(l),
              i = document.querySelector(l);
            n || !i || r[l] || (r[l] = await T(i, t, !0));
          }
        }
        let i = Object.values(r);
        if (i.length) {
          let t = 'http://www.w3.org/1999/xhtml',
            n = document.createElementNS(t, 'svg');
          n.setAttribute('xmlns', t),
            (n.style.position = 'absolute'),
            (n.style.width = '0'),
            (n.style.height = '0'),
            (n.style.overflow = 'hidden'),
            (n.style.display = 'none');
          let r = document.createElementNS(t, 'defs');
          n.appendChild(r);
          for (let e = 0; e < i.length; e++) r.appendChild(i[e]);
          e.appendChild(n);
        }
        return e;
      }
      async function T(e, t, n) {
        return n || !t.filter || t.filter(e)
          ? Promise.resolve(e)
              .then((e) => C(e, t))
              .then((n) => $(e, n, t))
              .then((t) => {
                var n, r;
                return (
                  (n = e),
                  h((r = t), Element) &&
                    (!(function (e, t) {
                      let n = t.style;
                      if (!n) return;
                      let r = window.getComputedStyle(e);
                      r.cssText
                        ? ((n.cssText = r.cssText), (n.transformOrigin = r.transformOrigin))
                        : a(r).forEach((i) => {
                            let l = r.getPropertyValue(i);
                            if ('font-size' === i && l.endsWith('px')) {
                              let e = Math.floor(parseFloat(l.substring(0, l.length - 2))) - 0.1;
                              l = `${e}px`;
                            }
                            h(e, HTMLIFrameElement) && 'display' === i && 'inline' === l && (l = 'block'),
                              'd' === i && t.getAttribute('d') && (l = `path(${t.getAttribute('d')})`),
                              n.setProperty(i, l, r.getPropertyPriority(i));
                          });
                    })(n, r),
                    f(n, r, ':before'),
                    f(n, r, ':after'),
                    h(n, HTMLTextAreaElement) && (r.innerHTML = n.value),
                    h(n, HTMLInputElement) && r.setAttribute('value', n.value),
                    (function (e, t) {
                      if (h(e, HTMLSelectElement)) {
                        let n = Array.from(t.children).find((t) => e.value === t.getAttribute('value'));
                        n && n.setAttribute('selected', '');
                      }
                    })(n, r)),
                  r
                );
              })
              .then((e) => P(e, t))
          : null;
      }
      let k = /url\((['"]?)([^'"]+?)\1\)/g,
        R = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
        L = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
      async function A(e, t, n, r, i) {
        try {
          let l;
          let a = n
              ? (function (e, t) {
                  if (e.match(/^[a-z]+:\/\//i)) return e;
                  if (e.match(/^\/\//)) return window.location.protocol + e;
                  if (e.match(/^[a-z]+:/i)) return e;
                  let n = document.implementation.createHTMLDocument(),
                    r = n.createElement('base'),
                    i = n.createElement('a');
                  return n.head.appendChild(r), n.body.appendChild(i), t && (r.href = t), (i.href = e), i.href;
                })(t, n)
              : t,
            o = x(t);
          if (i) {
            let e = await i(a);
            l = w(e, o);
          } else l = await S(a, o, r);
          return e.replace(
            (function (e) {
              let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
              return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, 'g');
            })(t),
            `$1${l}$3`,
          );
        } catch (e) {}
        return e;
      }
      function D(e) {
        return -1 !== e.search(k);
      }
      async function I(e, t, n) {
        if (!D(e)) return e;
        let r = (function (e, { preferredFontFormat: t }) {
          return t
            ? e.replace(L, (e) => {
                for (;;) {
                  let [n, , r] = R.exec(e) || [];
                  if (!r) return '';
                  if (r === t) return `src: ${n};`;
                }
              })
            : e;
        })(e, n);
        return (function (e) {
          let t = [];
          return e.replace(k, (e, n, r) => (t.push(r), e)), t.filter((e) => !y(e));
        })(r).reduce((e, r) => e.then((e) => A(e, r, t, n)), Promise.resolve(r));
      }
      async function M(e, t, n) {
        var r;
        let i = null === (r = t.style) || void 0 === r ? void 0 : r.getPropertyValue(e);
        if (i) {
          let r = await I(i, null, n);
          return t.style.setProperty(e, r, t.style.getPropertyPriority(e)), !0;
        }
        return !1;
      }
      async function H(e, t) {
        (await M('background', e, t)) || (await M('background-image', e, t)),
          (await M('mask', e, t)) || (await M('mask-image', e, t));
      }
      async function O(e, t) {
        let n = h(e, HTMLImageElement);
        if (!(n && !y(e.src)) && !(h(e, SVGImageElement) && !y(e.href.baseVal))) return;
        let r = n ? e.src : e.href.baseVal,
          i = await S(r, x(r), t);
        await new Promise((t, r) => {
          (e.onload = t),
            (e.onerror = r),
            e.decode && (e.decode = t),
            'lazy' === e.loading && (e.loading = 'eager'),
            n ? ((e.srcset = ''), (e.src = i)) : (e.href.baseVal = i);
        });
      }
      async function B(e, t) {
        let n = a(e.childNodes).map((e) => V(e, t));
        await Promise.all(n).then(() => e);
      }
      async function V(e, t) {
        h(e, Element) && (await H(e, t), await O(e, t), await B(e, t));
      }
      let F = {};
      async function q(e) {
        let t = F[e];
        if (null != t) return t;
        let n = await fetch(e);
        return (t = { url: e, cssText: await n.text() }), (F[e] = t), t;
      }
      async function U(e, t) {
        let n = e.cssText,
          r = /url\(["']?([^"')]+)["']?\)/g;
        return Promise.all(
          (n.match(/url\([^)]+\)/g) || []).map(async (i) => {
            let l = i.replace(r, '$1');
            return (
              l.startsWith('https://') || (l = new URL(l, e.url).href),
              v(l, t.fetchRequestInit, ({ result: e }) => ((n = n.replace(i, `url(${e})`)), [i, e]))
            );
          }),
        ).then(() => n);
      }
      function z(e) {
        if (null == e) return [];
        let t = [],
          n = e.replace(/(\/\*[\s\S]*?\*\/)/gi, ''),
          r = RegExp('((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})', 'gi');
        for (;;) {
          let e = r.exec(n);
          if (null === e) break;
          t.push(e[0]);
        }
        n = n.replace(r, '');
        let i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
          l = RegExp(
            '((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})',
            'gi',
          );
        for (;;) {
          let e = i.exec(n);
          if (null === e) {
            if (null === (e = l.exec(n))) break;
            i.lastIndex = l.lastIndex;
          } else l.lastIndex = i.lastIndex;
          t.push(e[0]);
        }
        return t;
      }
      async function W(e, t) {
        let n = [],
          r = [];
        return (
          e.forEach((n) => {
            if ('cssRules' in n)
              try {
                a(n.cssRules || []).forEach((e, i) => {
                  if (e.type === CSSRule.IMPORT_RULE) {
                    let l = i + 1,
                      a = e.href,
                      o = q(a)
                        .then((e) => U(e, t))
                        .then((e) =>
                          z(e).forEach((e) => {
                            try {
                              n.insertRule(e, e.startsWith('@import') ? (l += 1) : n.cssRules.length);
                            } catch (t) {
                              console.error('Error inserting rule from remote css', { rule: e, error: t });
                            }
                          }),
                        )
                        .catch((e) => {
                          console.error('Error loading remote css', e.toString());
                        });
                    r.push(o);
                  }
                });
              } catch (l) {
                let i = e.find((e) => null == e.href) || document.styleSheets[0];
                null != n.href &&
                  r.push(
                    q(n.href)
                      .then((e) => U(e, t))
                      .then((e) =>
                        z(e).forEach((e) => {
                          i.insertRule(e, n.cssRules.length);
                        }),
                      )
                      .catch((e) => {
                        console.error('Error loading remote stylesheet', e);
                      }),
                  ),
                  console.error('Error inlining remote css file', l);
              }
          }),
          Promise.all(r).then(
            () => (
              e.forEach((e) => {
                if ('cssRules' in e)
                  try {
                    a(e.cssRules || []).forEach((e) => {
                      n.push(e);
                    });
                  } catch (t) {
                    console.error(`Error while reading CSS rules from ${e.href}`, t);
                  }
              }),
              n
            ),
          )
        );
      }
      async function Y(e, t) {
        if (null == e.ownerDocument) throw Error('Provided element is not within a Document');
        let n = a(e.ownerDocument.styleSheets);
        return (await W(n, t))
          .filter((e) => e.type === CSSRule.FONT_FACE_RULE)
          .filter((e) => D(e.style.getPropertyValue('src')));
      }
      async function Z(e, t) {
        let n = await Y(e, t);
        return (
          await Promise.all(
            n.map((e) => {
              let n = e.parentStyleSheet ? e.parentStyleSheet.href : null;
              return I(e.cssText, n, t);
            }),
          )
        ).join('\n');
      }
      async function G(e, t) {
        let n = null != t.fontEmbedCSS ? t.fontEmbedCSS : t.skipFonts ? null : await Z(e, t);
        if (n) {
          let t = document.createElement('style'),
            r = document.createTextNode(n);
          t.appendChild(r), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
        }
      }
      async function J(e, t = {}) {
        let { width: n, height: r } = s(e, t),
          i = await T(e, t, !0);
        return (
          await G(i, t),
          await V(i, t),
          !(function (e, t) {
            let { style: n } = e;
            t.backgroundColor && (n.backgroundColor = t.backgroundColor),
              t.width && (n.width = `${t.width}px`),
              t.height && (n.height = `${t.height}px`);
            let r = t.style;
            null != r &&
              Object.keys(r).forEach((e) => {
                n[e] = r[e];
              });
          })(i, t),
          await d(i, n, r)
        );
      }
      async function Q(e, t = {}) {
        let { width: n, height: r } = s(e, t),
          i = await J(e, t),
          l = await c(i),
          a = document.createElement('canvas'),
          o = a.getContext('2d'),
          u =
            t.pixelRatio ||
            (function () {
              let e, t;
              try {
                t = process;
              } catch (e) {}
              let n = t && t.env ? t.env.devicePixelRatio : null;
              return n && Number.isNaN((e = parseInt(n, 10))) && (e = 1), e || window.devicePixelRatio || 1;
            })(),
          d = t.canvasWidth || n,
          h = t.canvasHeight || r;
        return (
          (a.width = d * u),
          (a.height = h * u),
          !t.skipAutoScale &&
            (a.width > 16384 || a.height > 16384) &&
            (a.width > 16384 && a.height > 16384
              ? a.width > a.height
                ? ((a.height *= 16384 / a.width), (a.width = 16384))
                : ((a.width *= 16384 / a.height), (a.height = 16384))
              : a.width > 16384
                ? ((a.height *= 16384 / a.width), (a.width = 16384))
                : ((a.width *= 16384 / a.height), (a.height = 16384))),
          (a.style.width = `${d}`),
          (a.style.height = `${h}`),
          t.backgroundColor && ((o.fillStyle = t.backgroundColor), o.fillRect(0, 0, a.width, a.height)),
          o.drawImage(l, 0, 0, a.width, a.height),
          a
        );
      }
      async function X(e, t = {}) {
        return (await Q(e, t)).toDataURL();
      }
      var K = n(24033),
        ee = n(2265),
        et = n(29340),
        en = n(35414),
        er = n(72336),
        ei = n(6779),
        el = n(97500),
        ea = n.n(el),
        eo = n(62067),
        es = n.n(eo),
        ec = n(16691),
        eu = n.n(ec),
        ed = (e) => {
          var t;
          let { className: n, bill: i } = e,
            l = null == i ? void 0 : i.discount_info,
            a = null == i ? void 0 : i.sub_total,
            o = (null == i ? void 0 : i.total_discount) || 0,
            s = null == i ? void 0 : i.service_charge,
            c = null == i ? void 0 : i.vat_charge,
            u = [],
            d = l
              ? 'FIXED_AMOUNT' === l.type
                ? 'VND'.concat(null == l ? void 0 : l.value)
                : ''.concat(null == l ? void 0 : l.value, '%')
              : null;
          if ((null == i ? void 0 : i.orders.length) > 0)
            for (let e of null == i ? void 0 : i.orders) for (let t of null == e ? void 0 : e.items) u.push(t);
          return (0, r.jsxs)('div', {
            className: ''.concat(n || '', ' px-6 pt-[60px]'),
            id: 'receipt',
            children: [
              (0, r.jsxs)('div', {
                className: 'flex items-center flex-col',
                children: [
                  (0, r.jsx)(eu(), {
                    priority: !0,
                    src: '/assets/icons/logo.svg',
                    alt: 'logo',
                    width: 100,
                    height: 100,
                  }),
                  (0, r.jsx)('span', {
                    className:
                      'text-center leading-normal max-w-[260px] text-black-500 text-[10px] mt-[20.78px] mb-[30px] font-normal '.concat(
                        ea().className,
                      ),
                    children:
                      'Bella OnoJie. 174 Nguyen Luong Bang, Hoa Khanh bac, Lien Chieu, Da Nang, Viet Nam. Tax ID : 0235563109861. Tel: 092 123 8378',
                  }),
                  (0, r.jsx)('div', {
                    className: 'h-[28px] font-medium leading-normal mb-[12px] text-[24px] text-black-500',
                    children: 'Receipt',
                  }),
                  (0, r.jsx)('div', {
                    className: 'h-[17px] leading-normal',
                    children: es()(
                      null == i ? void 0 : null === (t = i.receipt_data) || void 0 === t ? void 0 : t.created_at,
                    ).format('DD MMMM YYYY, HH:mm'),
                  }),
                ],
              }),
              (0, r.jsx)('div', {
                className: 'flex font-medium text-black-400 mt-[30px]',
                children: ' Order summary ',
              }),
              null == u
                ? void 0
                : u.map((e, t) => {
                    var n;
                    return (0, r.jsxs)(
                      'div',
                      {
                        className: 'mt-[20px]',
                        children: [
                          (0, r.jsx)(er.Z, {
                            name: null == e ? void 0 : null === (n = e.product_info) || void 0 === n ? void 0 : n.name,
                            price: null == e ? void 0 : e.price,
                            priceAfterDiscount: null == e ? void 0 : e.total_price_product_after_discount,
                            image_url: null == e ? void 0 : e.image_url,
                            quantity: null == e ? void 0 : e.quantity,
                            modifiers: null == e ? void 0 : e.modifiers_info,
                            note: (null == e ? void 0 : e.notes) || void 0,
                            dietary_restrictions: (null == e ? void 0 : e.dietary_requests) || [],
                          }),
                          (0, r.jsx)('hr', { className: 'w-full border-t border-black-100 mt-[20px]' }),
                        ],
                      },
                      t,
                    );
                  }),
              (0, r.jsxs)('div', {
                className: 'mt-[20px] ml-[108px] pb-[60px]',
                children: [
                  (0, r.jsxs)('div', {
                    className: 'text-[10px] text-black-500 space-y-[3px] '.concat(ea().className),
                    children: [
                      o > 0 &&
                        (0, r.jsxs)('div', {
                          className: 'flex items-center justify-between ',
                          children: [
                            (0, r.jsxs)('span', { children: [d, ' Discount '] }),
                            (0, r.jsxs)('span', { children: ['-', (0, ei.T4)(o)] }),
                          ],
                        }),
                      (0, r.jsxs)('div', {
                        className: 'flex items-center justify-between',
                        children: [
                          (0, r.jsx)('div', { children: ' Subtotal ' }),
                          (0, r.jsxs)('div', { children: [' ', (0, ei.T4)(a), ' '] }),
                        ],
                      }),
                      (0, r.jsxs)('div', {
                        className: 'flex items-center justify-between',
                        children: [
                          (0, r.jsx)('div', { children: ' 10% Service Charge ' }),
                          (0, r.jsxs)('div', { children: [' ', (0, ei.T4)(s), ' '] }),
                        ],
                      }),
                      (0, r.jsxs)('div', {
                        className: 'flex items-center justify-between',
                        children: [
                          (0, r.jsx)('div', { children: ' 7% VAT ' }),
                          (0, r.jsxs)('div', { children: [' ', (0, ei.T4)(c), ' '] }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)('div', {
                    className: 'text-[14px] flex items-center mt-[7px] justify-between ',
                    children: [
                      (0, r.jsx)('div', { children: ' Total ' }),
                      (0, r.jsxs)('div', { children: [' ', (0, ei.T4)(null == i ? void 0 : i.total), ' '] }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        eh = n(64308),
        ef = () => {
          let e = (0, K.useRouter)(),
            t = (0, K.useSearchParams)().get('bill_id'),
            { data: n, isFetching: l } = (0, eh.LJ)({ id: t || '' }),
            [a, o] = (0, ee.useState)(!1),
            s = (e) => {
              let t = document.createElement('a');
              (t.href = e), (t.download = 'Receipt'), t.click(), o(!1);
            },
            c = async () => {
              o(!0);
              let e = document.getElementById('receipt');
              if (e) {
                null == e || e.classList.remove('hidden');
                let t = '',
                  n = 0;
                for (; t.length < 2e6 && n < 10; ) {
                  try {
                    t = await X(e, { backgroundColor: '#f1eee8', includeQueryParams: !0 });
                  } catch (e) {
                    o(!1);
                    break;
                  }
                  n += 1;
                }
                s(t), null == e || e.classList.add('hidden');
              }
            },
            u = (0, r.jsxs)('div', {
              className: 'px-6 pt-[13px] pb-[40px] max-h-[var(--100vh)]',
              children: [
                (0, r.jsxs)('div', {
                  className: 'font-medium text-black-500 text-[24px] text-center mb-[30px]',
                  children: ['Download receipt', (0, r.jsx)('br', {}), 'or request a tax invoice'],
                }),
                (0, r.jsx)('div', { className: 'flex items-center justify-center', children: (0, r.jsx)(en.GU, {}) }),
              ],
            }),
            d = (0, r.jsx)('div', { children: (0, r.jsx)('span', { children: 'Download receipt ' }) });
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(i.Z, {
                isShowPrimaryButton: !0,
                isShowBackBtn: !0,
                onClickBackBtn: () => e.push('/receipt?bill_id='.concat(t)),
                onClickPrimaryBtn: () => e.push('/request-tax-invoice?bill_id='.concat(t)),
                primaryBtnChildren: 'Request tax invoice',
                secondaryBtnChildren: d,
                onClickSecondaryBtn: c,
                disabledPrimary: a || l,
                disabledSecondary: a || l,
                disabledBackBtn: a || l,
                title: '',
                children: [u, a && (0, r.jsx)(et.Z, {})],
              }),
              (0, r.jsx)(ed, { className: 'hidden', bill: null == n ? void 0 : n.data }),
            ],
          });
        };
    },
    97500: function (e) {
      e.exports = {
        style: { fontFamily: "'__Open_Sans_63ca04', '__Open_Sans_Fallback_63ca04'", fontStyle: 'normal' },
        className: '__className_63ca04',
        variable: '__variable_63ca04',
      };
    },
  },
  function (e) {
    e.O(
      0,
      [6990, 4872, 2598, 8809, 5687, 2379, 9810, 6691, 6394, 4494, 2077, 3172, 4229, 4440, 1198, 2971, 4938, 1744],
      function () {
        return e((e.s = 51841));
      },
    ),
      (_N_E = e.O());
  },
]);
