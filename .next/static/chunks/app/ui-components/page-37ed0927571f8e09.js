(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5447],
  {
    42824: function (n, e, o) {
      Promise.resolve().then(o.bind(o, 86859));
    },
    86859: function (n, e, o) {
      'use strict';
      o.r(e),
        o.d(e, {
          default: function () {
            return d;
          },
        });
      var a = o(57437);
      o(2265);
      var t = o(4696),
        r = o(86550),
        s = o(55261),
        c = o(1922),
        i = o(16223),
        l = o(35414);
      function d() {
        return (0, a.jsxs)('main', {
          className: 'flex min-h-screen flex-col items-center justify-between space-y-10 p-8 ',
          children: [
            (0, a.jsx)(t.Z, { disabled: !0, children: 'Inactive button' }),
            (0, a.jsx)(t.Z, { variant: 'secondary', children: 'Add to basket ・ 260' }),
            (0, a.jsx)(t.Z, { variant: 'primary', children: 'Button name' }),
            (0, a.jsx)(r.Z, { icon: (0, a.jsx)(l.Y4, {}) }),
            (0, a.jsx)(s.Z, { variant: 'secondary' }),
            (0, a.jsx)(s.Z, { plus: !1 }),
            (0, a.jsx)(c.Z, { children: 'Out of stock' }),
            (0, a.jsx)(i.Z, { active: !0, children: 'Brunch' }),
            (0, a.jsx)(i.Z, { children: 'Sandwiches ' }),
          ],
        });
      }
    },
    1922: function (n, e, o) {
      'use strict';
      var a = o(57437),
        t = o(97500),
        r = o.n(t),
        s = o(91623),
        c = o(28073);
      e.Z = (n) => {
        let { className: e, children: o, ...t } = n;
        return (0, a.jsx)(s.ZP, {
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
          children: (0, a.jsx)(c.Z, {
            ...t,
            className: ' '.concat(e || '', '  font-normal'),
            style: { marginInlineEnd: 0 },
            children: (0, a.jsx)('div', { className: r().className, children: o }),
          }),
        });
      };
    },
    97500: function (n) {
      n.exports = {
        style: { fontFamily: "'__Open_Sans_63ca04', '__Open_Sans_Fallback_63ca04'", fontStyle: 'normal' },
        className: '__className_63ca04',
        variable: '__variable_63ca04',
      };
    },
    75018: function (n, e, o) {
      'use strict';
      o.d(e, {
        Z: function () {
          return s;
        },
      });
      var a = o(10870),
        t = ''
          .concat(
            'accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap',
            ' ',
          )
          .concat(
            'onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError',
          )
          .split(/[\s\n]+/);
      function r(n, e) {
        return 0 === n.indexOf(e);
      }
      function s(n) {
        var e,
          o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        e = !1 === o ? { aria: !0, data: !0, attr: !0 } : !0 === o ? { aria: !0 } : (0, a.Z)({}, o);
        var s = {};
        return (
          Object.keys(n).forEach(function (o) {
            ((e.aria && ('role' === o || r(o, 'aria-'))) || (e.data && r(o, 'data-')) || (e.attr && t.includes(o))) &&
              (s[o] = n[o]);
          }),
          s
        );
      }
    },
  },
  function (n) {
    n.O(0, [4872, 2598, 693, 4440, 2971, 4938, 1744], function () {
      return n((n.s = 42824));
    }),
      (_N_E = n.O());
  },
]);
