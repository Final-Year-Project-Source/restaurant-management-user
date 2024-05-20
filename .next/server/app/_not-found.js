'use strict';
(() => {
  var e = {};
  (e.id = 165),
    (e.ids = [165]),
    (e.modules = {
      47849: (e) => {
        e.exports = require('next/dist/client/components/action-async-storage.external');
      },
      72934: (e) => {
        e.exports = require('next/dist/client/components/action-async-storage.external.js');
      },
      55403: (e) => {
        e.exports = require('next/dist/client/components/request-async-storage.external');
      },
      54580: (e) => {
        e.exports = require('next/dist/client/components/request-async-storage.external.js');
      },
      94749: (e) => {
        e.exports = require('next/dist/client/components/static-generation-async-storage.external');
      },
      45869: (e) => {
        e.exports = require('next/dist/client/components/static-generation-async-storage.external.js');
      },
      20399: (e) => {
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
      },
      71017: (e) => {
        e.exports = require('path');
      },
      57310: (e) => {
        e.exports = require('url');
      },
      94734: (e, t, r) => {
        r.r(t),
          r.d(t, {
            GlobalError: () => s.a,
            __next_app__: () => c,
            originalPathname: () => d,
            pages: () => p,
            routeModule: () => x,
            tree: () => l,
          });
        var n = r(50482),
          a = r(69108),
          o = r(62563),
          s = r.n(o),
          i = r(68300),
          u = {};
        for (let e in i)
          0 >
            ['default', 'tree', 'pages', 'GlobalError', 'originalPathname', '__next_app__', 'routeModule'].indexOf(e) &&
            (u[e] = () => i[e]);
        r.d(t, u);
        let l = [
            '',
            {
              children: [
                '__PAGE__',
                {},
                {
                  page: [
                    () => Promise.resolve().then(r.bind(r, 48206)),
                    '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/not-found.tsx',
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 32396)),
                '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(r.bind(r, 48206)),
                '/Users/nguyenthithaovy/Study/Final-Year-Project/restaurant-management-user/src/app/not-found.tsx',
              ],
              metadata: {
                icon: [async (e) => (await Promise.resolve().then(r.bind(r, 73881))).default(e)],
                apple: [],
                openGraph: [],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          p = [],
          d = '/_not-found',
          c = { require: r, loadChunk: () => Promise.resolve() },
          x = new n.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: '/_not-found',
              pathname: '/_not-found',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
    });
  var t = require('../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [638, 289, 118], () => r(94734));
  module.exports = n;
})();
