(() => {
  var e = {};
  (e.id = 447),
    (e.ids = [447]),
    (e.modules = {
      47849: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/action-async-storage.external');
      },
      72934: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/action-async-storage.external.js');
      },
      55403: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/request-async-storage.external');
      },
      54580: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/request-async-storage.external.js');
      },
      94749: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/static-generation-async-storage.external');
      },
      45869: (e) => {
        'use strict';
        e.exports = require('next/dist/client/components/static-generation-async-storage.external.js');
      },
      20399: (e) => {
        'use strict';
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
      },
      71017: (e) => {
        'use strict';
        e.exports = require('path');
      },
      57310: (e) => {
        'use strict';
        e.exports = require('url');
      },
      9249: (e) => {
        e.exports = {
          style: { fontFamily: "'__Open_Sans_63ca04', '__Open_Sans_Fallback_63ca04'", fontStyle: 'normal' },
          className: '__className_63ca04',
          variable: '__variable_63ca04',
        };
      },
      50222: (e, n, t) => {
        'use strict';
        t.r(n),
          t.d(n, {
            GlobalError: () => s.a,
            __next_app__: () => p,
            originalPathname: () => u,
            pages: () => d,
            routeModule: () => m,
            tree: () => c,
          });
        var a = t(50482),
          o = t(69108),
          r = t(62563),
          s = t.n(r),
          i = t(68300),
          l = {};
        for (let e in i)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', 'originalPathname', '__next_app__', 'routeModule'].indexOf(e) &&
            (l[e] = () => i[e]);
        t.d(n, l);
        let c = [
            '',
            {
              children: [
                'ui-components',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.bind(t, 39946)),
                        '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/ui-components/page.tsx',
                      ],
                    },
                  ],
                },
                {
                  metadata: {
                    icon: [async (e) => (await Promise.resolve().then(t.bind(t, 73881))).default(e)],
                    apple: [],
                    openGraph: [],
                    twitter: [],
                    manifest: void 0,
                  },
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(t.bind(t, 32396)),
                '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(t.bind(t, 48206)),
                '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/not-found.tsx',
              ],
              metadata: {
                icon: [async (e) => (await Promise.resolve().then(t.bind(t, 73881))).default(e)],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          d = [
            '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/ui-components/page.tsx',
          ],
          u = '/ui-components/page',
          p = { require: t, loadChunk: () => Promise.resolve() },
          m = new a.AppPageRouteModule({
            definition: {
              kind: o.x.APP_PAGE,
              page: '/ui-components/page',
              pathname: '/ui-components',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      28852: (e, n, t) => {
        Promise.resolve().then(t.bind(t, 78673));
      },
      7305: (e, n, t) => {
        'use strict';
        t.d(n, { Z: () => s });
        var a = t(65830),
          o = ''
            .concat(
              'accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap',
              ' ',
            )
            .concat(
              'onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError',
            )
            .split(/[\s\n]+/);
        function r(e, n) {
          return 0 === e.indexOf(n);
        }
        function s(e) {
          var n,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          n = !1 === t ? { aria: !0, data: !0, attr: !0 } : !0 === t ? { aria: !0 } : (0, a.Z)({}, t);
          var s = {};
          return (
            Object.keys(e).forEach(function (t) {
              ((n.aria && ('role' === t || r(t, 'aria-'))) || (n.data && r(t, 'data-')) || (n.attr && o.includes(t))) &&
                (s[t] = e[t]);
            }),
            s
          );
        }
      },
      78673: (e, n, t) => {
        'use strict';
        t.r(n), t.d(n, { default: () => d });
        var a = t(95344);
        t(3729);
        var o = t(17248),
          r = t(99870),
          s = t(45072),
          i = t(27740),
          l = t(75203),
          c = t(35479);
        function d() {
          return (0, a.jsxs)('main', {
            className: 'flex min-h-screen flex-col items-center justify-between space-y-10 p-8 ',
            children: [
              a.jsx(o.Z, { disabled: !0, children: 'Inactive button' }),
              a.jsx(o.Z, { variant: 'secondary', children: 'Add to basket ・ 260' }),
              a.jsx(o.Z, { variant: 'primary', children: 'Button name' }),
              a.jsx(r.Z, { icon: a.jsx(c.Y4, {}) }),
              a.jsx(s.Z, { variant: 'secondary' }),
              a.jsx(s.Z, { plus: !1 }),
              a.jsx(i.Z, { children: 'Out of stock' }),
              a.jsx(l.Z, { active: !0, children: 'Brunch' }),
              a.jsx(l.Z, { children: 'Sandwiches ' }),
            ],
          });
        }
      },
      27740: (e, n, t) => {
        'use strict';
        t.d(n, { Z: () => l });
        var a = t(95344),
          o = t(9249),
          r = t.n(o),
          s = t(98251),
          i = t(90377);
        let l = ({ className: e, children: n, ...t }) =>
          a.jsx(s.ZP, {
            theme: {
              components: {
                Tag: {
                  borderRadiusSM: 7,
                  defaultBg: '#fff',
                  fontSizeSM: 10,
                  defaultColor: '#FA4A0C',
                  lineHeightSM: 2.2,
                  colorBorder: '#FA4A0C',
                },
              },
            },
            children: a.jsx(i.Z, {
              ...t,
              className: ` ${e || ''}  font-normal`,
              style: { marginInlineEnd: 0 },
              children: a.jsx('div', { className: r().className, children: n }),
            }),
          });
      },
      39946: (e, n, t) => {
        'use strict';
        t.r(n), t.d(n, { $$typeof: () => r, __esModule: () => o, default: () => s });
        let a = (0, t(86843).createProxy)(
            String.raw`/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/ui-components/page.tsx`,
          ),
          { __esModule: o, $$typeof: r } = a,
          s = a.default;
      },
    });
  var n = require('../../webpack-runtime.js');
  n.C(e);
  var t = (e) => n((n.s = e)),
    a = n.X(0, [638, 289, 377, 118, 479], () => t(50222));
  module.exports = a;
})();
