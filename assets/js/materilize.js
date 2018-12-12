/*!
 * Materialize v0.98.0 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
if ("undefined" == typeof jQuery) {
    var jQuery;
    jQuery = "function" == typeof require ? $ = require("jquery") : $ }
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function(a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e) }, easeInQuad: function(a, b, c, d, e) {
            return d * (b /= e) * b + c }, easeOutQuad: function(a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c }, easeInOutQuad: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c }, easeInCubic: function(a, b, c, d, e) {
            return d * (b /= e) * b * b + c }, easeOutCubic: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c }, easeInOutCubic: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c }, easeInQuart: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c }, easeOutQuart: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c }, easeInOutQuart: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c }, easeInQuint: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c }, easeOutQuint: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c }, easeInOutQuint: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c }, easeInSine: function(a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c }, easeOutSine: function(a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c }, easeInOutSine: function(a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c }, easeInExpo: function(a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c }, easeOutExpo: function(a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c }, easeInOutExpo: function(a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c }, easeInCirc: function(a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c }, easeOutCirc: function(a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c }, easeInOutCirc: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c }, easeInElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) { h = d;
                var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c }, easeOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) { h = d;
                var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c }, easeInOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (2 == (b /= e / 2)) return c + d;
            if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) { h = d;
                var f = g / 4 } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return b < 1 ? -.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c }, easeInBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c }, easeOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c }, easeInOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * (b * b * (((f *= 1.525) + 1) * b - f)) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c }, easeInBounce: function(a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c }, easeOutBounce: function(a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c }, easeInOutBounce: function(a, b, c, d, e) {
            return b < e / 2 ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c } }), jQuery.extend(jQuery.easing, { easeInOutMaterial: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : d / 4 * ((b -= 2) * b * b + 2) + c } }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (! function(a) {
        function b(a) {
            var b = a.length,
                d = c.type(a);
            return "function" !== d && !c.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)) }
        if (!a.jQuery) {
            var c = function(a, b) {
                return new c.fn.init(a, b) };
            c.isWindow = function(a) {
                return null != a && a == a.window }, c.type = function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a }, c.isArray = Array.isArray || function(a) {
                return "array" === c.type(a) }, c.isPlainObject = function(a) {
                var b;
                if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
                try {
                    if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (d) {
                    return !1 }
                for (b in a);
                return void 0 === b || f.call(a, b) }, c.each = function(a, c, d) {
                var e, f = 0,
                    g = a.length,
                    h = b(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = c.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = c.apply(a[f], d), e === !1) break } else if (h)
                    for (; g > f && (e = c.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = c.call(a[f], f, a[f]), e === !1) break; return a }, c.data = function(a, b, e) {
                if (void 0 === e) {
                    var f = a[c.expando],
                        g = f && d[f];
                    if (void 0 === b) return g;
                    if (g && b in g) return g[b] } else if (void 0 !== b) {
                    var f = a[c.expando] || (a[c.expando] = ++c.uuid);
                    return d[f] = d[f] || {}, d[f][b] = e, e } }, c.removeData = function(a, b) {
                var e = a[c.expando],
                    f = e && d[e];
                f && c.each(b, function(a, b) { delete f[b] }) }, c.extend = function() {
                var a, b, d, e, f, g, h = arguments[0] || {},
                    i = 1,
                    j = arguments.length,
                    k = !1;
                for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); j > i; i++)
                    if (null != (f = arguments[i]))
                        for (e in f) a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d));
                return h }, c.queue = function(a, d, e) {
                function f(a, c) {
                    var d = c || [];
                    return null != a && (b(Object(a)) ? ! function(a, b) {
                        for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
                        if (c !== c)
                            for (; void 0 !== b[d];) a[e++] = b[d++];
                        return a.length = e, a }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d }
                if (a) { d = (d || "fx") + "queue";
                    var g = c.data(a, d);
                    return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || [] } }, c.dequeue = function(a, b) { c.each(a.nodeType ? [a] : a, function(a, d) { b = b || "fx";
                    var e = c.queue(d, b),
                        f = e.shift(); "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function() { c.dequeue(d, b) })) }) }, c.fn = c.prototype = { init: function(a) {
                    if (a.nodeType) return this[0] = a, this;
                    throw new Error("Not a DOM node.") }, offset: function() {
                    var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };
                    return { top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) } }, position: function() {
                    function a() {
                        for (var a = this.offsetParent || document; a && "html" === !a.nodeType.toLowerCase && "static" === a.style.position;) a = a.offsetParent;
                        return a || document }
                    var b = this[0],
                        a = a.apply(b),
                        d = this.offset(),
                        e = /^(?:body|html)$/i.test(a.nodeName) ? { top: 0, left: 0 } : c(a).offset();
                    return d.top -= parseFloat(b.style.marginTop) || 0, d.left -= parseFloat(b.style.marginLeft) || 0, a.style && (e.top += parseFloat(a.style.borderTopWidth) || 0, e.left += parseFloat(a.style.borderLeftWidth) || 0), { top: d.top - e.top, left: d.left - e.left } } };
            var d = {};
            c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
            for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
            c.fn.init.prototype = c.fn, a.Velocity = { Utilities: c } } }(window), function(a) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a() }(function() {
        return function(a, b, c, d) {
            function e(a) {
                for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                    var e = a[b];
                    e && d.push(e) }
                return d }

            function f(a) {
                return p.isWrapped(a) ? a = [].slice.call(a) : p.isNode(a) && (a = [a]), a }

            function g(a) {
                var b = m.data(a, "velocity");
                return null === b ? d : b }

            function h(a) {
                return function(b) {
                    return Math.round(b * a) * (1 / a) } }

            function i(a, c, d, e) {
                function f(a, b) {
                    return 1 - 3 * b + 3 * a }

                function g(a, b) {
                    return 3 * b - 6 * a }

                function h(a) {
                    return 3 * a }

                function i(a, b, c) {
                    return ((f(b, c) * a + g(b, c)) * a + h(b)) * a }

                function j(a, b, c) {
                    return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b) }

                function k(b, c) {
                    for (var e = 0; p > e; ++e) {
                        var f = j(c, a, d);
                        if (0 === f) return c;
                        var g = i(c, a, d) - b;
                        c -= g / f }
                    return c }

                function l() {
                    for (var b = 0; t > b; ++b) x[b] = i(b * u, a, d) }

                function m(b, c, e) {
                    var f, g, h = 0;
                    do g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g; while (Math.abs(f) > r && ++h < s);
                    return g }

                function n(b) {
                    for (var c = 0, e = 1, f = t - 1; e != f && x[e] <= b; ++e) c += u;--e;
                    var g = (b - x[e]) / (x[e + 1] - x[e]),
                        h = c + g * u,
                        i = j(h, a, d);
                    return i >= q ? k(b, h) : 0 == i ? h : m(b, c, c + u) }

                function o() { y = !0, (a != c || d != e) && l() }
                var p = 4,
                    q = .001,
                    r = 1e-7,
                    s = 10,
                    t = 11,
                    u = 1 / (t - 1),
                    v = "Float32Array" in b;
                if (4 !== arguments.length) return !1;
                for (var w = 0; 4 > w; ++w)
                    if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
                a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
                var x = v ? new Float32Array(t) : new Array(t),
                    y = !1,
                    z = function(b) {
                        return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e) };
                z.getControlPoints = function() {
                    return [{ x: a, y: c }, { x: d, y: e }] };
                var A = "generateBezier(" + [a, c, d, e] + ")";
                return z.toString = function() {
                    return A }, z }

            function j(a, b) {
                var c = a;
                return p.isString(a) ? t.Easings[a] || (c = !1) : c = p.isArray(a) && 1 === a.length ? h.apply(null, a) : p.isArray(a) && 2 === a.length ? u.apply(null, a.concat([b])) : !(!p.isArray(a) || 4 !== a.length) && i.apply(null, a), c === !1 && (c = t.Easings[t.defaults.easing] ? t.defaults.easing : s), c }

            function k(a) {
                if (a) {
                    var b = (new Date).getTime(),
                        c = t.State.calls.length;
                    c > 1e4 && (t.State.calls = e(t.State.calls));
                    for (var f = 0; c > f; f++)
                        if (t.State.calls[f]) {
                            var h = t.State.calls[f],
                                i = h[0],
                                j = h[2],
                                n = h[3],
                                o = !!n,
                                q = null;
                            n || (n = t.State.calls[f][3] = b - 16);
                            for (var r = Math.min((b - n) / j.duration, 1), s = 0, u = i.length; u > s; s++) {
                                var w = i[s],
                                    y = w.element;
                                if (g(y)) {
                                    var z = !1;
                                    if (j.display !== d && null !== j.display && "none" !== j.display) {
                                        if ("flex" === j.display) {
                                            var A = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            m.each(A, function(a, b) { v.setPropertyValue(y, "display", b) }) }
                                        v.setPropertyValue(y, "display", j.display) }
                                    j.visibility !== d && "hidden" !== j.visibility && v.setPropertyValue(y, "visibility", j.visibility);
                                    for (var B in w)
                                        if ("element" !== B) {
                                            var C, D = w[B],
                                                E = p.isString(D.easing) ? t.Easings[D.easing] : D.easing;
                                            if (1 === r) C = D.endValue;
                                            else {
                                                var F = D.endValue - D.startValue;
                                                if (C = D.startValue + F * E(r, j, F), !o && C === D.currentValue) continue }
                                            if (D.currentValue = C, "tween" === B) q = C;
                                            else {
                                                if (v.Hooks.registered[B]) {
                                                    var G = v.Hooks.getRoot(B),
                                                        H = g(y).rootPropertyValueCache[G];
                                                    H && (D.rootPropertyValue = H) }
                                                var I = v.setPropertyValue(y, B, D.currentValue + (0 === parseFloat(C) ? "" : D.unitType), D.rootPropertyValue, D.scrollData);
                                                v.Hooks.registered[B] && (g(y).rootPropertyValueCache[G] = v.Normalizations.registered[G] ? v.Normalizations.registered[G]("extract", null, I[1]) : I[1]), "transform" === I[0] && (z = !0) } }
                                    j.mobileHA && g(y).transformCache.translate3d === d && (g(y).transformCache.translate3d = "(0px, 0px, 0px)", z = !0), z && v.flushTransformCache(y) } }
                            j.display !== d && "none" !== j.display && (t.State.calls[f][2].display = !1), j.visibility !== d && "hidden" !== j.visibility && (t.State.calls[f][2].visibility = !1), j.progress && j.progress.call(h[1], h[1], r, Math.max(0, n + j.duration - b), n, q), 1 === r && l(f) } }
                t.State.isTicking && x(k) }

            function l(a, b) {
                if (!t.State.calls[a]) return !1;
                for (var c = t.State.calls[a][0], e = t.State.calls[a][1], f = t.State.calls[a][2], h = t.State.calls[a][4], i = !1, j = 0, k = c.length; k > j; j++) {
                    var l = c[j].element;
                    if (b || f.loop || ("none" === f.display && v.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && v.setPropertyValue(l, "visibility", f.visibility)), f.loop !== !0 && (m.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(m.queue(l)[1])) && g(l)) { g(l).isAnimating = !1, g(l).rootPropertyValueCache = {};
                        var n = !1;
                        m.each(v.Lists.transforms3D, function(a, b) {
                            var c = /^scale/.test(b) ? 1 : 0,
                                e = g(l).transformCache[b];
                            g(l).transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete g(l).transformCache[b]) }), f.mobileHA && (n = !0, delete g(l).transformCache.translate3d), n && v.flushTransformCache(l), v.Values.removeClass(l, "velocity-animating") }
                    if (!b && f.complete && !f.loop && j === k - 1) try { f.complete.call(e, e) } catch (o) { setTimeout(function() {
                            throw o }, 1) }
                    h && f.loop !== !0 && h(e), g(l) && f.loop === !0 && !b && (m.each(g(l).tweensContainer, function(a, b) { /^rotate/.test(a) && 360 === parseFloat(b.endValue) && (b.endValue = 0, b.startValue = 360), /^backgroundPosition/.test(a) && 100 === parseFloat(b.endValue) && "%" === b.unitType && (b.endValue = 0, b.startValue = 100) }), t(l, "reverse", { loop: !0, delay: f.delay })), f.queue !== !1 && m.dequeue(l, f.queue) }
                t.State.calls[a] = !1;
                for (var p = 0, q = t.State.calls.length; q > p; p++)
                    if (t.State.calls[p] !== !1) { i = !0;
                        break }
                i === !1 && (t.State.isTicking = !1, delete t.State.calls, t.State.calls = []) }
            var m, n = function() {
                    if (c.documentMode) return c.documentMode;
                    for (var a = 7; a > 4; a--) {
                        var b = c.createElement("div");
                        if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a }
                    return d }(),
                o = function() {
                    var a = 0;
                    return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function(b) {
                        var c, d = (new Date).getTime();
                        return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function() { b(d + c) }, c) } }(),
                p = { isString: function(a) {
                        return "string" == typeof a }, isArray: Array.isArray || function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a) }, isFunction: function(a) {
                        return "[object Function]" === Object.prototype.toString.call(a) }, isNode: function(a) {
                        return a && a.nodeType }, isNodeList: function(a) {
                        return "object" == typeof a && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a)) && a.length !== d && (0 === a.length || "object" == typeof a[0] && a[0].nodeType > 0) }, isWrapped: function(a) {
                        return a && (a.jquery || b.Zepto && b.Zepto.zepto.isZ(a)) }, isSVG: function(a) {
                        return b.SVGElement && a instanceof b.SVGElement }, isEmptyObject: function(a) {
                        for (var b in a) return !1;
                        return !0 } },
                q = !1;
            if (a.fn && a.fn.jquery ? (m = a, q = !0) : m = b.Velocity.Utilities, 8 >= n && !q) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= n) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var r = 400,
                s = "swing",
                t = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: b.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: c.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [] }, CSS: {}, Utilities: m, Redirects: {}, Easings: {}, Promise: b.Promise, defaults: { queue: "", duration: r, easing: s, begin: d, complete: d, progress: d, display: d, visibility: d, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 }, init: function(a) { m.data(a, "velocity", { isSVG: p.isSVG(a), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} }) }, hook: null, mock: !1, version: { major: 1, minor: 2, patch: 2 }, debug: !1 };
            b.pageYOffset !== d ? (t.State.scrollAnchor = b, t.State.scrollPropertyLeft = "pageXOffset", t.State.scrollPropertyTop = "pageYOffset") : (t.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, t.State.scrollPropertyLeft = "scrollLeft", t.State.scrollPropertyTop = "scrollTop");
            var u = function() {
                function a(a) {
                    return -a.tension * a.x - a.friction * a.v }

                function b(b, c, d) {
                    var e = { x: b.x + d.dx * c, v: b.v + d.dv * c, tension: b.tension, friction: b.friction };
                    return { dx: e.v, dv: a(e) } }

                function c(c, d) {
                    var e = { dx: c.v, dv: a(c) },
                        f = b(c, .5 * d, e),
                        g = b(c, .5 * d, f),
                        h = b(c, d, g),
                        i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx),
                        j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                    return c.x = c.x + i * d, c.v = c.v + j * d, c }
                return function d(a, b, e) {
                    var f, g, h, i = { x: -1, v: 0, tension: null, friction: null },
                        j = [0],
                        k = 0,
                        l = 1e-4,
                        m = .016;
                    for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * m) : g = m; h = c(h || i, g), j.push(1 + h.x), k += 16, Math.abs(h.x) > l && Math.abs(h.v) > l;);
                    return f ? function(a) {
                        return j[a * (j.length - 1) | 0] } : k } }();
            t.Easings = { linear: function(a) {
                    return a }, swing: function(a) {
                    return .5 - Math.cos(a * Math.PI) / 2 }, spring: function(a) {
                    return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a) } }, m.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(a, b) { t.Easings[b[0]] = i.apply(null, b[1]) });
            var v = t.CSS = { RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi }, Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"] }, Hooks: { templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] }, registered: {}, register: function() {
                        for (var a = 0; a < v.Lists.colors.length; a++) {
                            var b = "color" === v.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                            v.Hooks.templates[v.Lists.colors[a]] = ["Red Green Blue Alpha", b] }
                        var c, d, e;
                        if (n)
                            for (c in v.Hooks.templates) { d = v.Hooks.templates[c], e = d[0].split(" ");
                                var f = d[1].match(v.RegEx.valueSplit); "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), v.Hooks.templates[c] = [e.join(" "), f.join(" ")]) }
                        for (c in v.Hooks.templates) { d = v.Hooks.templates[c], e = d[0].split(" ");
                            for (var a in e) {
                                var g = c + e[a],
                                    h = a;
                                v.Hooks.registered[g] = [c, h] } } }, getRoot: function(a) {
                        var b = v.Hooks.registered[a];
                        return b ? b[0] : a }, cleanRootPropertyValue: function(a, b) {
                        return v.RegEx.valueUnwrap.test(b) && (b = b.match(v.RegEx.valueUnwrap)[1]), v.Values.isCSSNullValue(b) && (b = v.Hooks.templates[a][1]), b }, extractValue: function(a, b) {
                        var c = v.Hooks.registered[a];
                        if (c) {
                            var d = c[0],
                                e = c[1];
                            return b = v.Hooks.cleanRootPropertyValue(d, b), b.toString().match(v.RegEx.valueSplit)[e] }
                        return b }, injectValue: function(a, b, c) {
                        var d = v.Hooks.registered[a];
                        if (d) {
                            var e, f, g = d[0],
                                h = d[1];
                            return c = v.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(v.RegEx.valueSplit), e[h] = b, f = e.join(" ") }
                        return c } }, Normalizations: { registered: { clip: function(a, b, c) {
                            switch (a) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var d;
                                    return v.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(v.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                                case "inject":
                                    return "rect(" + c + ")" } }, blur: function(a, b, c) {
                            switch (a) {
                                case "name":
                                    return t.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var d = parseFloat(c);
                                    if (!d && 0 !== d) {
                                        var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        d = e ? e[1] : 0 }
                                    return d;
                                case "inject":
                                    return parseFloat(c) ? "blur(" + c + ")" : "none" } }, opacity: function(a, b, c) {
                            if (8 >= n) switch (a) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return c = d ? d[1] / 100 : 1;
                                case "inject":
                                    return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")" } else switch (a) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return c;
                                case "inject":
                                    return c } } }, register: function() { 9 >= n || t.State.isGingerbread || (v.Lists.transformsBase = v.Lists.transformsBase.concat(v.Lists.transforms3D));
                        for (var a = 0; a < v.Lists.transformsBase.length; a++) ! function() {
                            var b = v.Lists.transformsBase[a];
                            v.Normalizations.registered[b] = function(a, c, e) {
                                switch (a) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return g(c) === d || g(c).transformCache[b] === d ? /^scale/i.test(b) ? 1 : 0 : g(c).transformCache[b].replace(/[()]/g, "");
                                    case "inject":
                                        var f = !1;
                                        switch (b.substr(0, b.length - 1)) {
                                            case "translate":
                                                f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                                break;
                                            case "scal":
                                            case "scale":
                                                t.State.isAndroid && g(c).transformCache[b] === d && 1 > e && (e = 1), f = !/(\d)$/i.test(e);
                                                break;
                                            case "skew":
                                                f = !/(deg|\d)$/i.test(e);
                                                break;
                                            case "rotate":
                                                f = !/(deg|\d)$/i.test(e) }
                                        return f || (g(c).transformCache[b] = "(" + e + ")"), g(c).transformCache[b] } } }();
                        for (var a = 0; a < v.Lists.colors.length; a++) ! function() {
                            var b = v.Lists.colors[a];
                            v.Normalizations.registered[b] = function(a, c, e) {
                                switch (a) {
                                    case "name":
                                        return b;
                                    case "extract":
                                        var f;
                                        if (v.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e;
                                        else {
                                            var g, h = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" }; /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : v.RegEx.isHex.test(e) ? g = "rgb(" + v.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ") }
                                        return 8 >= n || 3 !== f.split(" ").length || (f += " 1"), f;
                                    case "inject":
                                        return 8 >= n ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (8 >= n ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")" } } }() } }, Names: { camelCase: function(a) {
                        return a.replace(/-(\w)/g, function(a, b) {
                            return b.toUpperCase() }) }, SVGAttribute: function(a) {
                        var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (n || t.State.isAndroid && !t.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a) }, prefixCheck: function(a) {
                        if (t.State.prefixMatches[a]) return [t.State.prefixMatches[a], !0];
                        for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; d > c; c++) {
                            var e;
                            if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function(a) {
                                    return a.toUpperCase() }), p.isString(t.State.prefixElement.style[e])) return t.State.prefixMatches[a] = e, [e, !0] }
                        return [a, !1] } }, Values: { hexToRgb: function(a) {
                        var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return a = a.replace(c, function(a, b, c, d) {
                            return b + b + c + c + d + d }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0] }, isCSSNullValue: function(a) {
                        return 0 == a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a) }, getUnitType: function(a) {
                        return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px" }, getDisplayType: function(a) {
                        var b = a && a.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : /^(table)$/i.test(b) ? "table" : /^(tbody)$/i.test(b) ? "table-row-group" : "block" }, addClass: function(a, b) { a.classList ? a.classList.add(b) : a.className += (a.className.length ? " " : "") + b }, removeClass: function(a, b) { a.classList ? a.classList.remove(b) : a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ") } }, getPropertyValue: function(a, c, e, f) {
                    function h(a, c) {
                        function e() { j && v.setPropertyValue(a, "display", "none") }
                        var i = 0;
                        if (8 >= n) i = m.css(a, c);
                        else {
                            var j = !1;
                            if (/^(width|height)$/.test(c) && 0 === v.getPropertyValue(a, "display") && (j = !0, v.setPropertyValue(a, "display", v.Values.getDisplayType(a))), !f) {
                                if ("height" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                    var k = a.offsetHeight - (parseFloat(v.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingBottom")) || 0);
                                    return e(), k }
                                if ("width" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                    var l = a.offsetWidth - (parseFloat(v.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingRight")) || 0);
                                    return e(), l } }
                            var o;
                            o = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), "borderColor" === c && (c = "borderTopColor"), i = 9 === n && "filter" === c ? o.getPropertyValue(c) : o[c], ("" === i || null === i) && (i = a.style[c]), e() }
                        if ("auto" === i && /^(top|right|bottom|left)$/i.test(c)) {
                            var p = h(a, "position");
                            ("fixed" === p || "absolute" === p && /top|left/i.test(c)) && (i = m(a).position()[c] + "px") }
                        return i }
                    var i;
                    if (v.Hooks.registered[c]) {
                        var j = c,
                            k = v.Hooks.getRoot(j);
                        e === d && (e = v.getPropertyValue(a, v.Names.prefixCheck(k)[0])), v.Normalizations.registered[k] && (e = v.Normalizations.registered[k]("extract", a, e)), i = v.Hooks.extractValue(j, e) } else if (v.Normalizations.registered[c]) {
                        var l, o;
                        l = v.Normalizations.registered[c]("name", a), "transform" !== l && (o = h(a, v.Names.prefixCheck(l)[0]), v.Values.isCSSNullValue(o) && v.Hooks.templates[c] && (o = v.Hooks.templates[c][1])), i = v.Normalizations.registered[c]("extract", a, o) }
                    if (!/^[\d-]/.test(i))
                        if (g(a) && g(a).isSVG && v.Names.SVGAttribute(c))
                            if (/^(height|width)$/i.test(c)) try { i = a.getBBox()[c] } catch (p) { i = 0 } else i = a.getAttribute(c);
                            else i = h(a, v.Names.prefixCheck(c)[0]);
                    return v.Values.isCSSNullValue(i) && (i = 0), t.debug >= 2 && console.log("Get " + c + ": " + i), i }, setPropertyValue: function(a, c, d, e, f) {
                    var h = c;
                    if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d);
                    else if (v.Normalizations.registered[c] && "transform" === v.Normalizations.registered[c]("name", a)) v.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c];
                    else {
                        if (v.Hooks.registered[c]) {
                            var i = c,
                                j = v.Hooks.getRoot(c);
                            e = e || v.getPropertyValue(a, j), d = v.Hooks.injectValue(i, d, e), c = j }
                        if (v.Normalizations.registered[c] && (d = v.Normalizations.registered[c]("inject", a, d), c = v.Normalizations.registered[c]("name", a)), h = v.Names.prefixCheck(c)[0], 8 >= n) try { a.style[h] = d } catch (k) { t.debug && console.log("Browser does not support [" + d + "] for [" + h + "]") } else g(a) && g(a).isSVG && v.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d;
                        t.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d) }
                    return [h, d] }, flushTransformCache: function(a) {
                    function b(b) {
                        return parseFloat(v.getPropertyValue(a, b)) }
                    var c = "";
                    if ((n || t.State.isAndroid && !t.State.isChrome) && g(a).isSVG) {
                        var d = { translate: [b("translateX"), b("translateY")], skewX: [b("skewX")], skewY: [b("skewY")], scale: 1 !== b("scale") ? [b("scale"), b("scale")] : [b("scaleX"), b("scaleY")], rotate: [b("rotateZ"), 0, 0] };
                        m.each(g(a).transformCache, function(a) { /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), d[a] && (c += a + "(" + d[a].join(" ") + ") ", delete d[a]) }) } else {
                        var e, f;
                        m.each(g(a).transformCache, function(b) {
                            return e = g(a).transformCache[b], "transformPerspective" === b ? (f = e, !0) : (9 === n && "rotateZ" === b && (b = "rotate"), void(c += b + e + " ")) }), f && (c = "perspective" + f + " " + c) }
                    v.setPropertyValue(a, "transform", c) } };
            v.Hooks.register(), v.Normalizations.register(), t.hook = function(a, b, c) {
                var e = d;
                return a = f(a), m.each(a, function(a, f) {
                    if (g(f) === d && t.init(f), c === d) e === d && (e = t.CSS.getPropertyValue(f, b));
                    else {
                        var h = t.CSS.setPropertyValue(f, b, c); "transform" === h[0] && t.CSS.flushTransformCache(f), e = h } }), e };
            var w = function() {
                function a() {
                    return h ? B.promise || null : i }

                function e() {
                    function a(a) {
                        function l(a, b) {
                            var c = d,
                                e = d,
                                g = d;
                            return p.isArray(a) ? (c = a[0], !p.isArray(a[1]) && /^[\d-]/.test(a[1]) || p.isFunction(a[1]) || v.RegEx.isHex.test(a[1]) ? g = a[1] : (p.isString(a[1]) && !v.RegEx.isHex.test(a[1]) || p.isArray(a[1])) && (e = b ? a[1] : j(a[1], h.duration), a[2] !== d && (g = a[2]))) : c = a, b || (e = e || h.easing), p.isFunction(c) && (c = c.call(f, y, x)), p.isFunction(g) && (g = g.call(f, y, x)), [c || 0, e, g] }

                        function n(a, b) {
                            var c, d;
                            return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(a) {
                                return c = a, "" }), c || (c = v.Values.getUnitType(a)), [d, c] }

                        function r() {
                            var a = { myParent: f.parentNode || c.body, position: v.getPropertyValue(f, "position"), fontSize: v.getPropertyValue(f, "fontSize") },
                                d = a.position === I.lastPosition && a.myParent === I.lastParent,
                                e = a.fontSize === I.lastFontSize;
                            I.lastParent = a.myParent, I.lastPosition = a.position, I.lastFontSize = a.fontSize;
                            var h = 100,
                                i = {};
                            if (e && d) i.emToPx = I.lastEmToPx, i.percentToPxWidth = I.lastPercentToPxWidth, i.percentToPxHeight = I.lastPercentToPxHeight;
                            else {
                                var j = g(f).isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                                t.init(j), a.myParent.appendChild(j), m.each(["overflow", "overflowX", "overflowY"], function(a, b) { t.CSS.setPropertyValue(j, b, "hidden") }), t.CSS.setPropertyValue(j, "position", a.position), t.CSS.setPropertyValue(j, "fontSize", a.fontSize), t.CSS.setPropertyValue(j, "boxSizing", "content-box"), m.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(a, b) { t.CSS.setPropertyValue(j, b, h + "%") }), t.CSS.setPropertyValue(j, "paddingLeft", h + "em"), i.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(v.getPropertyValue(j, "width", null, !0)) || 1) / h, i.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(v.getPropertyValue(j, "height", null, !0)) || 1) / h, i.emToPx = I.lastEmToPx = (parseFloat(v.getPropertyValue(j, "paddingLeft")) || 1) / h, a.myParent.removeChild(j) }
                            return null === I.remToPx && (I.remToPx = parseFloat(v.getPropertyValue(c.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(b.innerWidth) / 100, I.vhToPx = parseFloat(b.innerHeight) / 100), i.remToPx = I.remToPx, i.vwToPx = I.vwToPx, i.vhToPx = I.vhToPx, t.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(i), f), i }
                        if (h.begin && 0 === y) try { h.begin.call(o, o) } catch (u) { setTimeout(function() {
                                throw u }, 1) }
                        if ("scroll" === C) {
                            var w, z, A, D = /^x$/i.test(h.axis) ? "Left" : "Top",
                                E = parseFloat(h.offset) || 0;
                            h.container ? p.isWrapped(h.container) || p.isNode(h.container) ? (h.container = h.container[0] || h.container, w = h.container["scroll" + D], A = w + m(f).position()[D.toLowerCase()] + E) : h.container = null : (w = t.State.scrollAnchor[t.State["scrollProperty" + D]], z = t.State.scrollAnchor[t.State["scrollProperty" + ("Left" === D ? "Top" : "Left")]], A = m(f).offset()[D.toLowerCase()] + E), i = { scroll: { rootPropertyValue: !1, startValue: w, currentValue: w, endValue: A, unitType: "", easing: h.easing, scrollData: { container: h.container, direction: D, alternateValue: z } }, element: f }, t.debug && console.log("tweensContainer (scroll): ", i.scroll, f) } else if ("reverse" === C) {
                            if (!g(f).tweensContainer) return void m.dequeue(f, h.queue); "none" === g(f).opts.display && (g(f).opts.display = "auto"), "hidden" === g(f).opts.visibility && (g(f).opts.visibility = "visible"), g(f).opts.loop = !1, g(f).opts.begin = null, g(f).opts.complete = null, s.easing || delete h.easing, s.duration || delete h.duration, h = m.extend({}, g(f).opts, h);
                            var F = m.extend(!0, {}, g(f).tweensContainer);
                            for (var G in F)
                                if ("element" !== G) {
                                    var H = F[G].startValue;
                                    F[G].startValue = F[G].currentValue = F[G].endValue, F[G].endValue = H, p.isEmptyObject(s) || (F[G].easing = h.easing), t.debug && console.log("reverse tweensContainer (" + G + "): " + JSON.stringify(F[G]), f) }
                            i = F } else if ("start" === C) {
                            var F;
                            g(f).tweensContainer && g(f).isAnimating === !0 && (F = g(f).tweensContainer), m.each(q, function(a, b) {
                                if (RegExp("^" + v.Lists.colors.join("$|^") + "$").test(a)) {
                                    var c = l(b, !0),
                                        e = c[0],
                                        f = c[1],
                                        g = c[2];
                                    if (v.RegEx.isHex.test(e)) {
                                        for (var h = ["Red", "Green", "Blue"], i = v.Values.hexToRgb(e), j = g ? v.Values.hexToRgb(g) : d, k = 0; k < h.length; k++) {
                                            var m = [i[k]];
                                            f && m.push(f), j !== d && m.push(j[k]), q[a + h[k]] = m }
                                        delete q[a] } } });
                            for (var K in q) {
                                var L = l(q[K]),
                                    M = L[0],
                                    N = L[1],
                                    O = L[2];
                                K = v.Names.camelCase(K);
                                var P = v.Hooks.getRoot(K),
                                    Q = !1;
                                if (g(f).isSVG || "tween" === P || v.Names.prefixCheck(P)[1] !== !1 || v.Normalizations.registered[P] !== d) {
                                    (h.display !== d && null !== h.display && "none" !== h.display || h.visibility !== d && "hidden" !== h.visibility) && /opacity|filter/.test(K) && !O && 0 !== M && (O = 0), h._cacheValues && F && F[K] ? (O === d && (O = F[K].endValue + F[K].unitType), Q = g(f).rootPropertyValueCache[P]) : v.Hooks.registered[K] ? O === d ? (Q = v.getPropertyValue(f, P), O = v.getPropertyValue(f, K, Q)) : Q = v.Hooks.templates[P][1] : O === d && (O = v.getPropertyValue(f, K));
                                    var R, S, T, U = !1;
                                    if (R = n(K, O), O = R[0], T = R[1], R = n(K, M), M = R[0].replace(/^([+-\/*])=/, function(a, b) {
                                            return U = b, "" }), S = R[1], O = parseFloat(O) || 0, M = parseFloat(M) || 0, "%" === S && (/^(fontSize|lineHeight)$/.test(K) ? (M /= 100, S = "em") : /^scale/.test(K) ? (M /= 100, S = "") : /(Red|Green|Blue)$/i.test(K) && (M = M / 100 * 255, S = "")), /[\/*]/.test(U)) S = T;
                                    else if (T !== S && 0 !== O)
                                        if (0 === M) S = T;
                                        else {
                                            e = e || r();
                                            var V = /margin|padding|left|right|width|text|word|letter/i.test(K) || /X$/.test(K) || "x" === K ? "x" : "y";
                                            switch (T) {
                                                case "%":
                                                    O *= "x" === V ? e.percentToPxWidth : e.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    O *= e[T + "ToPx"] }
                                            switch (S) {
                                                case "%":
                                                    O *= 1 / ("x" === V ? e.percentToPxWidth : e.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    O *= 1 / e[S + "ToPx"] }
                                        }
                                    switch (U) {
                                        case "+":
                                            M = O + M;
                                            break;
                                        case "-":
                                            M = O - M;
                                            break;
                                        case "*":
                                            M = O * M;
                                            break;
                                        case "/":
                                            M = O / M }
                                    i[K] = { rootPropertyValue: Q, startValue: O, currentValue: O, endValue: M, unitType: S, easing: N }, t.debug && console.log("tweensContainer (" + K + "): " + JSON.stringify(i[K]), f)
                                } else t.debug && console.log("Skipping [" + P + "] due to a lack of browser support.")
                            }
                            i.element = f
                        }
                        i.element && (v.Values.addClass(f, "velocity-animating"), J.push(i), "" === h.queue && (g(f).tweensContainer = i, g(f).opts = h), g(f).isAnimating = !0, y === x - 1 ? (t.State.calls.push([J, o, h, null, B.resolver]), t.State.isTicking === !1 && (t.State.isTicking = !0, k())) : y++)
                    }
                    var e, f = this,
                        h = m.extend({}, t.defaults, s),
                        i = {};
                    switch (g(f) === d && t.init(f), parseFloat(h.delay) && h.queue !== !1 && m.queue(f, h.queue, function(a) { t.velocityQueueEntryFlag = !0, g(f).delayTimer = { setTimeout: setTimeout(a, parseFloat(h.delay)), next: a } }), h.duration.toString().toLowerCase()) {
                        case "fast":
                            h.duration = 200;
                            break;
                        case "normal":
                            h.duration = r;
                            break;
                        case "slow":
                            h.duration = 600;
                            break;
                        default:
                            h.duration = parseFloat(h.duration) || 1 }
                    t.mock !== !1 && (t.mock === !0 ? h.duration = h.delay = 1 : (h.duration *= parseFloat(t.mock) || 1, h.delay *= parseFloat(t.mock) || 1)), h.easing = j(h.easing, h.duration), h.begin && !p.isFunction(h.begin) && (h.begin = null), h.progress && !p.isFunction(h.progress) && (h.progress = null), h.complete && !p.isFunction(h.complete) && (h.complete = null), h.display !== d && null !== h.display && (h.display = h.display.toString().toLowerCase(), "auto" === h.display && (h.display = t.CSS.Values.getDisplayType(f))), h.visibility !== d && null !== h.visibility && (h.visibility = h.visibility.toString().toLowerCase()), h.mobileHA = h.mobileHA && t.State.isMobile && !t.State.isGingerbread, h.queue === !1 ? h.delay ? setTimeout(a, h.delay) : a() : m.queue(f, h.queue, function(b, c) {
                        return c === !0 ? (B.promise && B.resolver(o), !0) : (t.velocityQueueEntryFlag = !0, void a(b)) }), "" !== h.queue && "fx" !== h.queue || "inprogress" === m.queue(f)[0] || m.dequeue(f)
                }
                var h, i, n, o, q, s, u = arguments[0] && (arguments[0].p || m.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || p.isString(arguments[0].properties));
                if (p.isWrapped(this) ? (h = !1, n = 0, o = this, i = this) : (h = !0, n = 1, o = u ? arguments[0].elements || arguments[0].e : arguments[0]), o = f(o)) { u ? (q = arguments[0].properties || arguments[0].p, s = arguments[0].options || arguments[0].o) : (q = arguments[n], s = arguments[n + 1]);
                    var x = o.length,
                        y = 0;
                    if (!/^(stop|finish)$/i.test(q) && !m.isPlainObject(s)) {
                        var z = n + 1;
                        s = {};
                        for (var A = z; A < arguments.length; A++) p.isArray(arguments[A]) || !/^(fast|normal|slow)$/i.test(arguments[A]) && !/^\d/.test(arguments[A]) ? p.isString(arguments[A]) || p.isArray(arguments[A]) ? s.easing = arguments[A] : p.isFunction(arguments[A]) && (s.complete = arguments[A]) : s.duration = arguments[A] }
                    var B = { promise: null, resolver: null, rejecter: null };
                    h && t.Promise && (B.promise = new t.Promise(function(a, b) { B.resolver = a, B.rejecter = b }));
                    var C;
                    switch (q) {
                        case "scroll":
                            C = "scroll";
                            break;
                        case "reverse":
                            C = "reverse";
                            break;
                        case "finish":
                        case "stop":
                            m.each(o, function(a, b) { g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer) });
                            var D = [];
                            return m.each(t.State.calls, function(a, b) { b && m.each(b[1], function(c, e) {
                                    var f = s === d ? "" : s;
                                    return f !== !0 && b[2].queue !== f && (s !== d || b[2].queue !== !1) || void m.each(o, function(c, d) { d === e && ((s === !0 || p.isString(s)) && (m.each(m.queue(d, p.isString(s) ? s : ""), function(a, b) { p.isFunction(b) && b(null, !0) }), m.queue(d, p.isString(s) ? s : "", [])), "stop" === q ? (g(d) && g(d).tweensContainer && f !== !1 && m.each(g(d).tweensContainer, function(a, b) { b.endValue = b.currentValue }), D.push(a)) : "finish" === q && (b[2].duration = 1)) }) }) }), "stop" === q && (m.each(D, function(a, b) { l(b, !0) }), B.promise && B.resolver(o)), a();
                        default:
                            if (!m.isPlainObject(q) || p.isEmptyObject(q)) {
                                if (p.isString(q) && t.Redirects[q]) {
                                    var E = m.extend({}, s),
                                        F = E.duration,
                                        G = E.delay || 0;
                                    return E.backwards === !0 && (o = m.extend(!0, [], o).reverse()), m.each(o, function(a, b) { parseFloat(E.stagger) ? E.delay = G + parseFloat(E.stagger) * a : p.isFunction(E.stagger) && (E.delay = G + E.stagger.call(b, a, x)), E.drag && (E.duration = parseFloat(F) || (/^(callout|transition)/.test(q) ? 1e3 : r), E.duration = Math.max(E.duration * (E.backwards ? 1 - a / x : (a + 1) / x), .75 * E.duration, 200)), t.Redirects[q].call(b, b, E || {}, a, x, o, B.promise ? B : d) }), a() }
                                var H = "Velocity: First argument (" + q + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return B.promise ? B.rejecter(new Error(H)) : console.log(H), a() }
                            C = "start" }
                    var I = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
                        J = [];
                    m.each(o, function(a, b) { p.isNode(b) && e.call(b) });
                    var K, E = m.extend({}, t.defaults, s);
                    if (E.loop = parseInt(E.loop), K = 2 * E.loop - 1, E.loop)
                        for (var L = 0; K > L; L++) {
                            var M = { delay: E.delay, progress: E.progress };
                            L === K - 1 && (M.display = E.display, M.visibility = E.visibility, M.complete = E.complete), w(o, "reverse", M) }
                    return a() }
            };
            t = m.extend(w, t), t.animate = w;
            var x = b.requestAnimationFrame || o;
            return t.State.isMobile || c.hidden === d || c.addEventListener("visibilitychange", function() { c.hidden ? (x = function(a) {
                    return setTimeout(function() { a(!0) }, 16) }, k()) : x = b.requestAnimationFrame || o }), a.Velocity = t, a !== b && (a.fn.velocity = w, a.fn.velocity.defaults = t.defaults), m.each(["Down", "Up"], function(a, b) { t.Redirects["slide" + b] = function(a, c, e, f, g, h) {
                    var i = m.extend({}, c),
                        j = i.begin,
                        k = i.complete,
                        l = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
                        n = {};
                    i.display === d && (i.display = "Down" === b ? "inline" === t.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function() { j && j.call(g, g);
                        for (var c in l) { n[c] = a.style[c];
                            var d = t.CSS.getPropertyValue(a, c);
                            l[c] = "Down" === b ? [d, 0] : [0, d] }
                        n.overflow = a.style.overflow, a.style.overflow = "hidden" }, i.complete = function() {
                        for (var b in n) a.style[b] = n[b];
                        k && k.call(g, g), h && h.resolver(g) }, t(a, l, i) } }), m.each(["In", "Out"], function(a, b) { t.Redirects["fade" + b] = function(a, c, e, f, g, h) {
                    var i = m.extend({}, c),
                        j = { opacity: "In" === b ? 1 : 0 },
                        k = i.complete;
                    i.complete = e !== f - 1 ? i.begin = null : function() { k && k.call(g, g), h && h.resolver(g) }, i.display === d && (i.display = "In" === b ? "auto" : "none"), t(this, j, i) } }), t
        }(window.jQuery || window.Zepto || window, window, document)
    })), ! function(a, b, c, d) { "use strict";

        function e(a, b, c) {
            return setTimeout(k(a, c), b) }

        function f(a, b, c) {
            return !!Array.isArray(a) && (g(a, c[b], c), !0) }

        function g(a, b, c) {
            var e;
            if (a)
                if (a.forEach) a.forEach(b, c);
                else if (a.length !== d)
                for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;
            else
                for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a) }

        function h(a, b, c) {
            for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
            return a }

        function i(a, b) {
            return h(a, b, !0) }

        function j(a, b, c) {
            var d, e = b.prototype;
            d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && h(d, c) }

        function k(a, b) {
            return function() {
                return a.apply(b, arguments) } }

        function l(a, b) {
            return typeof a == ka ? a.apply(b ? b[0] || d : d, b) : a }

        function m(a, b) {
            return a === d ? b : a }

        function n(a, b, c) { g(r(b), function(b) { a.addEventListener(b, c, !1) }) }

        function o(a, b, c) { g(r(b), function(b) { a.removeEventListener(b, c, !1) }) }

        function p(a, b) {
            for (; a;) {
                if (a == b) return !0;
                a = a.parentNode }
            return !1 }

        function q(a, b) {
            return a.indexOf(b) > -1 }

        function r(a) {
            return a.trim().split(/\s+/g) }

        function s(a, b, c) {
            if (a.indexOf && !c) return a.indexOf(b);
            for (var d = 0; d < a.length;) {
                if (c && a[d][c] == b || !c && a[d] === b) return d;
                d++ }
            return -1 }

        function t(a) {
            return Array.prototype.slice.call(a, 0) }

        function u(a, b, c) {
            for (var d = [], e = [], f = 0; f < a.length;) {
                var g = b ? a[f][b] : a[f];
                s(e, g) < 0 && d.push(a[f]), e[f] = g, f++ }
            return c && (d = b ? d.sort(function(a, c) {
                return a[b] > c[b] }) : d.sort()), d }

        function v(a, b) {
            for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ia.length;) {
                if (c = ia[g], e = c ? c + f : b, e in a) return e;
                g++ }
            return d }

        function w() {
            return oa++ }

        function x(a) {
            var b = a.ownerDocument;
            return b.defaultView || b.parentWindow }

        function y(a, b) {
            var c = this;
            this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function(b) { l(a.options.enable, [a]) && c.handler(b) }, this.init() }

        function z(a) {
            var b, c = a.options.inputClass;
            return new(b = c ? c : ra ? N : sa ? Q : qa ? S : M)(a, A) }

        function A(a, b, c) {
            var d = c.pointers.length,
                e = c.changedPointers.length,
                f = b & ya && 0 === d - e,
                g = b & (Aa | Ba) && 0 === d - e;
            c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, B(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c }

        function B(a, b) {
            var c = a.session,
                d = b.pointers,
                e = d.length;
            c.firstInput || (c.firstInput = E(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = E(b) : 1 === e && (c.firstMultiple = !1);
            var f = c.firstInput,
                g = c.firstMultiple,
                h = g ? g.center : f.center,
                i = b.center = F(d);
            b.timeStamp = na(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = J(h, i), b.distance = I(h, i), C(c, b), b.offsetDirection = H(b.deltaX, b.deltaY), b.scale = g ? L(g.pointers, d) : 1, b.rotation = g ? K(g.pointers, d) : 0, D(c, b);
            var j = a.element;
            p(b.srcEvent.target, j) && (j = b.srcEvent.target), b.target = j }

        function C(a, b) {
            var c = b.center,
                d = a.offsetDelta || {},
                e = a.prevDelta || {},
                f = a.prevInput || {};
            (b.eventType === ya || f.eventType === Aa) && (e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }, d = a.offsetDelta = { x: c.x, y: c.y }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y) }

        function D(a, b) {
            var c, e, f, g, h = a.lastInterval || b,
                i = b.timeStamp - h.timeStamp;
            if (b.eventType != Ba && (i > xa || h.velocity === d)) {
                var j = h.deltaX - b.deltaX,
                    k = h.deltaY - b.deltaY,
                    l = G(i, j, k);
                e = l.x, f = l.y, c = ma(l.x) > ma(l.y) ? l.x : l.y, g = H(j, k), a.lastInterval = b } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
            b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g }

        function E(a) {
            for (var b = [], c = 0; c < a.pointers.length;) b[c] = { clientX: la(a.pointers[c].clientX), clientY: la(a.pointers[c].clientY) }, c++;
            return { timeStamp: na(), pointers: b, center: F(b), deltaX: a.deltaX, deltaY: a.deltaY } }

        function F(a) {
            var b = a.length;
            if (1 === b) return { x: la(a[0].clientX), y: la(a[0].clientY) };
            for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
            return { x: la(c / b), y: la(d / b) } }

        function G(a, b, c) {
            return { x: b / a || 0, y: c / a || 0 } }

        function H(a, b) {
            return a === b ? Ca : ma(a) >= ma(b) ? a > 0 ? Da : Ea : b > 0 ? Fa : Ga }

        function I(a, b, c) { c || (c = Ka);
            var d = b[c[0]] - a[c[0]],
                e = b[c[1]] - a[c[1]];
            return Math.sqrt(d * d + e * e) }

        function J(a, b, c) { c || (c = Ka);
            var d = b[c[0]] - a[c[0]],
                e = b[c[1]] - a[c[1]];
            return 180 * Math.atan2(e, d) / Math.PI }

        function K(a, b) {
            return J(b[1], b[0], La) - J(a[1], a[0], La) }

        function L(a, b) {
            return I(b[0], b[1], La) / I(a[0], a[1], La) }

        function M() { this.evEl = Na, this.evWin = Oa, this.allow = !0, this.pressed = !1, y.apply(this, arguments) }

        function N() { this.evEl = Ra, this.evWin = Sa, y.apply(this, arguments), this.store = this.manager.session.pointerEvents = [] }

        function O() { this.evTarget = Ua, this.evWin = Va, this.started = !1, y.apply(this, arguments) }

        function P(a, b) {
            var c = t(a.touches),
                d = t(a.changedTouches);
            return b & (Aa | Ba) && (c = u(c.concat(d), "identifier", !0)), [c, d] }

        function Q() { this.evTarget = Xa, this.targetIds = {}, y.apply(this, arguments) }

        function R(a, b) {
            var c = t(a.touches),
                d = this.targetIds;
            if (b & (ya | za) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
            var e, f, g = t(a.changedTouches),
                h = [],
                i = this.target;
            if (f = c.filter(function(a) {
                    return p(a.target, i) }), b === ya)
                for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
            for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Aa | Ba) && delete d[g[e].identifier], e++;
            return h.length ? [u(f.concat(h), "identifier", !0), h] : void 0 }

        function S() { y.apply(this, arguments);
            var a = k(this.handler, this);
            this.touch = new Q(this.manager, a), this.mouse = new M(this.manager, a) }

        function T(a, b) { this.manager = a, this.set(b) }

        function U(a) {
            if (q(a, bb)) return bb;
            var b = q(a, cb),
                c = q(a, db);
            return b && c ? cb + " " + db : b || c ? b ? cb : db : q(a, ab) ? ab : _a }

        function V(a) { this.id = w(), this.manager = null, this.options = i(a || {}, this.defaults), this.options.enable = m(this.options.enable, !0), this.state = eb, this.simultaneous = {}, this.requireFail = [] }

        function W(a) {
            return a & jb ? "cancel" : a & hb ? "end" : a & gb ? "move" : a & fb ? "start" : "" }

        function X(a) {
            return a == Ga ? "down" : a == Fa ? "up" : a == Da ? "left" : a == Ea ? "right" : "" }

        function Y(a, b) {
            var c = b.manager;
            return c ? c.get(a) : a }

        function Z() { V.apply(this, arguments) }

        function $() { Z.apply(this, arguments), this.pX = null, this.pY = null }

        function _() { Z.apply(this, arguments) }

        function aa() { V.apply(this, arguments), this._timer = null, this._input = null }

        function ba() { Z.apply(this, arguments) }

        function ca() { Z.apply(this, arguments) }

        function da() { V.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0 }

        function ea(a, b) {
            return b = b || {}, b.recognizers = m(b.recognizers, ea.defaults.preset), new fa(a, b) }

        function fa(a, b) { b = b || {}, this.options = i(b, ea.defaults), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = z(this), this.touchAction = new T(this, this.options.touchAction), ga(this, !0), g(b.recognizers, function(a) {
                var b = this.add(new a[0](a[1]));
                a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]) }, this) }

        function ga(a, b) {
            var c = a.element;
            g(a.options.cssProps, function(a, d) { c.style[v(c.style, d)] = b ? a : "" }) }

        function ha(a, c) {
            var d = b.createEvent("Event");
            d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d) }
        var ia = ["", "webkit", "moz", "MS", "ms", "o"],
            ja = b.createElement("div"),
            ka = "function",
            la = Math.round,
            ma = Math.abs,
            na = Date.now,
            oa = 1,
            pa = /mobile|tablet|ip(ad|hone|od)|android/i,
            qa = "ontouchstart" in a,
            ra = v(a, "PointerEvent") !== d,
            sa = qa && pa.test(navigator.userAgent),
            ta = "touch",
            ua = "pen",
            va = "mouse",
            wa = "kinect",
            xa = 25,
            ya = 1,
            za = 2,
            Aa = 4,
            Ba = 8,
            Ca = 1,
            Da = 2,
            Ea = 4,
            Fa = 8,
            Ga = 16,
            Ha = Da | Ea,
            Ia = Fa | Ga,
            Ja = Ha | Ia,
            Ka = ["x", "y"],
            La = ["clientX", "clientY"];
        y.prototype = { handler: function() {}, init: function() { this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(x(this.element), this.evWin, this.domHandler) }, destroy: function() { this.evEl && o(this.element, this.evEl, this.domHandler), this.evTarget && o(this.target, this.evTarget, this.domHandler), this.evWin && o(x(this.element), this.evWin, this.domHandler) } };
        var Ma = { mousedown: ya, mousemove: za, mouseup: Aa },
            Na = "mousedown",
            Oa = "mousemove mouseup";
        j(M, y, { handler: function(a) {
                var b = Ma[a.type];
                b & ya && 0 === a.button && (this.pressed = !0), b & za && 1 !== a.which && (b = Aa), this.pressed && this.allow && (b & Aa && (this.pressed = !1), this.callback(this.manager, b, { pointers: [a], changedPointers: [a], pointerType: va, srcEvent: a })) } });
        var Pa = { pointerdown: ya, pointermove: za, pointerup: Aa, pointercancel: Ba, pointerout: Ba },
            Qa = { 2: ta, 3: ua, 4: va, 5: wa },
            Ra = "pointerdown",
            Sa = "pointermove pointerup pointercancel";
        a.MSPointerEvent && (Ra = "MSPointerDown", Sa = "MSPointerMove MSPointerUp MSPointerCancel"), j(N, y, { handler: function(a) {
                var b = this.store,
                    c = !1,
                    d = a.type.toLowerCase().replace("ms", ""),
                    e = Pa[d],
                    f = Qa[a.pointerType] || a.pointerType,
                    g = f == ta,
                    h = s(b, a.pointerId, "pointerId");
                e & ya && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Aa | Ba) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, { pointers: b, changedPointers: [a], pointerType: f, srcEvent: a }), c && b.splice(h, 1)) } });
        var Ta = { touchstart: ya, touchmove: za, touchend: Aa, touchcancel: Ba },
            Ua = "touchstart",
            Va = "touchstart touchmove touchend touchcancel";
        j(O, y, { handler: function(a) {
                var b = Ta[a.type];
                if (b === ya && (this.started = !0), this.started) {
                    var c = P.call(this, a, b);
                    b & (Aa | Ba) && 0 === c[0].length - c[1].length && (this.started = !1), this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: ta, srcEvent: a }) } } });
        var Wa = { touchstart: ya, touchmove: za, touchend: Aa, touchcancel: Ba },
            Xa = "touchstart touchmove touchend touchcancel";
        j(Q, y, { handler: function(a) {
                var b = Wa[a.type],
                    c = R.call(this, a, b);
                c && this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: ta, srcEvent: a }) } }), j(S, y, { handler: function(a, b, c) {
                var d = c.pointerType == ta,
                    e = c.pointerType == va;
                if (d) this.mouse.allow = !1;
                else if (e && !this.mouse.allow) return;
                b & (Aa | Ba) && (this.mouse.allow = !0), this.callback(a, b, c) }, destroy: function() { this.touch.destroy(), this.mouse.destroy() } });
        var Ya = v(ja.style, "touchAction"),
            Za = Ya !== d,
            $a = "compute",
            _a = "auto",
            ab = "manipulation",
            bb = "none",
            cb = "pan-x",
            db = "pan-y";
        T.prototype = { set: function(a) { a == $a && (a = this.compute()), Za && (this.manager.element.style[Ya] = a), this.actions = a.toLowerCase().trim() }, update: function() { this.set(this.manager.options.touchAction) }, compute: function() {
                var a = [];
                return g(this.manager.recognizers, function(b) { l(b.options.enable, [b]) && (a = a.concat(b.getTouchAction())) }), U(a.join(" ")) }, preventDefaults: function(a) {
                if (!Za) {
                    var b = a.srcEvent,
                        c = a.offsetDirection;
                    if (this.manager.session.prevented) return void b.preventDefault();
                    var d = this.actions,
                        e = q(d, bb),
                        f = q(d, db),
                        g = q(d, cb);
                    return e || f && c & Ha || g && c & Ia ? this.preventSrc(b) : void 0 } }, preventSrc: function(a) { this.manager.session.prevented = !0, a.preventDefault() } };
        var eb = 1,
            fb = 2,
            gb = 4,
            hb = 8,
            ib = hb,
            jb = 16,
            kb = 32;
        V.prototype = { defaults: {}, set: function(a) {
                return h(this.options, a), this.manager && this.manager.touchAction.update(), this }, recognizeWith: function(a) {
                if (f(a, "recognizeWith", this)) return this;
                var b = this.simultaneous;
                return a = Y(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this }, dropRecognizeWith: function(a) {
                return f(a, "dropRecognizeWith", this) ? this : (a = Y(a, this), delete this.simultaneous[a.id], this) }, requireFailure: function(a) {
                if (f(a, "requireFailure", this)) return this;
                var b = this.requireFail;
                return a = Y(a, this), -1 === s(b, a) && (b.push(a), a.requireFailure(this)), this }, dropRequireFailure: function(a) {
                if (f(a, "dropRequireFailure", this)) return this;
                a = Y(a, this);
                var b = s(this.requireFail, a);
                return b > -1 && this.requireFail.splice(b, 1), this }, hasRequireFailures: function() {
                return this.requireFail.length > 0 }, canRecognizeWith: function(a) {
                return !!this.simultaneous[a.id] }, emit: function(a) {
                function b(b) { c.manager.emit(c.options.event + (b ? W(d) : ""), a) }
                var c = this,
                    d = this.state;
                hb > d && b(!0), b(), d >= hb && b(!0) }, tryEmit: function(a) {
                return this.canEmit() ? this.emit(a) : void(this.state = kb) }, canEmit: function() {
                for (var a = 0; a < this.requireFail.length;) {
                    if (!(this.requireFail[a].state & (kb | eb))) return !1;
                    a++ }
                return !0 }, recognize: function(a) {
                var b = h({}, a);
                return l(this.options.enable, [this, b]) ? (this.state & (ib | jb | kb) && (this.state = eb), this.state = this.process(b), void(this.state & (fb | gb | hb | jb) && this.tryEmit(b))) : (this.reset(), void(this.state = kb)) }, process: function() {}, getTouchAction: function() {}, reset: function() {} }, j(Z, V, { defaults: { pointers: 1 }, attrTest: function(a) {
                var b = this.options.pointers;
                return 0 === b || a.pointers.length === b }, process: function(a) {
                var b = this.state,
                    c = a.eventType,
                    d = b & (fb | gb),
                    e = this.attrTest(a);
                return d && (c & Ba || !e) ? b | jb : d || e ? c & Aa ? b | hb : b & fb ? b | gb : fb : kb } }), j($, Z, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Ja }, getTouchAction: function() {
                var a = this.options.direction,
                    b = [];
                return a & Ha && b.push(db), a & Ia && b.push(cb), b }, directionTest: function(a) {
                var b = this.options,
                    c = !0,
                    d = a.distance,
                    e = a.direction,
                    f = a.deltaX,
                    g = a.deltaY;
                return e & b.direction || (b.direction & Ha ? (e = 0 === f ? Ca : 0 > f ? Da : Ea, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ca : 0 > g ? Fa : Ga, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction }, attrTest: function(a) {
                return Z.prototype.attrTest.call(this, a) && (this.state & fb || !(this.state & fb) && this.directionTest(a)) }, emit: function(a) { this.pX = a.deltaX, this.pY = a.deltaY;
                var b = X(a.direction);
                b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a) } }), j(_, Z, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function() {
                return [bb] }, attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & fb) }, emit: function(a) {
                if (this._super.emit.call(this, a), 1 !== a.scale) {
                    var b = a.scale < 1 ? "in" : "out";
                    this.manager.emit(this.options.event + b, a) } } }), j(aa, V, { defaults: { event: "press", pointers: 1, time: 500, threshold: 5 }, getTouchAction: function() {
                return [_a] }, process: function(a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    f = a.deltaTime > b.time;
                if (this._input = a, !d || !c || a.eventType & (Aa | Ba) && !f) this.reset();
                else if (a.eventType & ya) this.reset(), this._timer = e(function() { this.state = ib, this.tryEmit() }, b.time, this);
                else if (a.eventType & Aa) return ib;
                return kb }, reset: function() { clearTimeout(this._timer) }, emit: function(a) { this.state === ib && (a && a.eventType & Aa ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = na(), this.manager.emit(this.options.event, this._input))) } }), j(ba, Z, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function() {
                return [bb] }, attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & fb) } }), j(ca, Z, { defaults: { event: "swipe", threshold: 10, velocity: .65, direction: Ha | Ia, pointers: 1 }, getTouchAction: function() {
                return $.prototype.getTouchAction.call(this) }, attrTest: function(a) {
                var b, c = this.options.direction;
                return c & (Ha | Ia) ? b = a.velocity : c & Ha ? b = a.velocityX : c & Ia && (b = a.velocityY), this._super.attrTest.call(this, a) && c & a.direction && a.distance > this.options.threshold && ma(b) > this.options.velocity && a.eventType & Aa }, emit: function(a) {
                var b = X(a.direction);
                b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a) } }), j(da, V, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 2, posThreshold: 10 }, getTouchAction: function() {
                return [ab] }, process: function(a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    f = a.deltaTime < b.time;
                if (this.reset(), a.eventType & ya && 0 === this.count) return this.failTimeout();
                if (d && f && c) {
                    if (a.eventType != Aa) return this.failTimeout();
                    var g = !this.pTime || a.timeStamp - this.pTime < b.interval,
                        h = !this.pCenter || I(this.pCenter, a.center) < b.posThreshold;
                    this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                    var i = this.count % b.taps;
                    if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function() { this.state = ib, this.tryEmit() }, b.interval, this), fb) : ib }
                return kb }, failTimeout: function() {
                return this._timer = e(function() { this.state = kb }, this.options.interval, this), kb }, reset: function() { clearTimeout(this._timer) }, emit: function() { this.state == ib && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input)) } }), ea.VERSION = "2.0.4", ea.defaults = { domEvents: !1, touchAction: $a, enable: !0, inputTarget: null, inputClass: null, preset: [
                [ba, { enable: !1 }],
                [_, { enable: !1 },
                    ["rotate"]
                ],
                [ca, { direction: Ha }],
                [$, { direction: Ha },
                    ["swipe"]
                ],
                [da],
                [da, { event: "doubletap", taps: 2 },
                    ["tap"]
                ],
                [aa]
            ], cssProps: { userSelect: "default", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };
        var lb = 1,
            mb = 2;
        fa.prototype = { set: function(a) {
                return h(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this }, stop: function(a) { this.session.stopped = a ? mb : lb }, recognize: function(a) {
                var b = this.session;
                if (!b.stopped) { this.touchAction.preventDefaults(a);
                    var c, d = this.recognizers,
                        e = b.curRecognizer;
                    (!e || e && e.state & ib) && (e = b.curRecognizer = null);
                    for (var f = 0; f < d.length;) c = d[f], b.stopped === mb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (fb | gb | hb) && (e = b.curRecognizer = c), f++ } }, get: function(a) {
                if (a instanceof V) return a;
                for (var b = this.recognizers, c = 0; c < b.length; c++)
                    if (b[c].options.event == a) return b[c];
                return null }, add: function(a) {
                if (f(a, "add", this)) return this;
                var b = this.get(a.options.event);
                return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a }, remove: function(a) {
                if (f(a, "remove", this)) return this;
                var b = this.recognizers;
                return a = this.get(a), b.splice(s(b, a), 1), this.touchAction.update(), this }, on: function(a, b) {
                var c = this.handlers;
                return g(r(a), function(a) { c[a] = c[a] || [], c[a].push(b) }), this }, off: function(a, b) {
                var c = this.handlers;
                return g(r(a), function(a) { b ? c[a].splice(s(c[a], b), 1) : delete c[a] }), this }, emit: function(a, b) { this.options.domEvents && ha(a, b);
                var c = this.handlers[a] && this.handlers[a].slice();
                if (c && c.length) { b.type = a, b.preventDefault = function() { b.srcEvent.preventDefault() };
                    for (var d = 0; d < c.length;) c[d](b), d++ } }, destroy: function() { this.element && ga(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null } }, h(ea, { INPUT_START: ya, INPUT_MOVE: za, INPUT_END: Aa, INPUT_CANCEL: Ba, STATE_POSSIBLE: eb, STATE_BEGAN: fb, STATE_CHANGED: gb, STATE_ENDED: hb, STATE_RECOGNIZED: ib, STATE_CANCELLED: jb, STATE_FAILED: kb, DIRECTION_NONE: Ca, DIRECTION_LEFT: Da, DIRECTION_RIGHT: Ea, DIRECTION_UP: Fa, DIRECTION_DOWN: Ga, DIRECTION_HORIZONTAL: Ha, DIRECTION_VERTICAL: Ia, DIRECTION_ALL: Ja, Manager: fa, Input: y, TouchAction: T, TouchInput: Q, MouseInput: M, PointerEventInput: N, TouchMouseInput: S, SingleTouchInput: O, Recognizer: V, AttrRecognizer: Z, Tap: da, Pan: $, Swipe: ca, Pinch: _, Rotate: ba, Press: aa, on: n, off: o, each: g, merge: i, extend: h, inherit: j, bindFn: k, prefixed: v }), typeof define == ka && define.amd ? define(function() {
            return ea }) : "undefined" != typeof module && module.exports ? module.exports = ea : a[c] = ea }(window, document, "Hammer"),
    function(a) { "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], a) : "object" == typeof exports ? a(require("jquery"), require("hammerjs")) : a(jQuery, Hammer) }(function(a, b) {
        function c(c, d) {
            var e = a(c);
            e.data("hammer") || e.data("hammer", new b(e[0], d)) }
        a.fn.hammer = function(a) {
            return this.each(function() { c(this, a) }) }, b.Manager.prototype.emit = function(b) {
            return function(c, d) { b.call(this, c, d), a(this.element).trigger({ type: c, gesture: d }) } }(b.Manager.prototype.emit) }),
    function(a) { a.Package ? Materialize = {} : a.Materialize = {} }(window),
    function(a) {
        for (var b = 0, c = ["webkit", "moz"], d = a.requestAnimationFrame, e = a.cancelAnimationFrame, f = c.length; --f >= 0 && !d;) d = a[c[f] + "RequestAnimationFrame"], e = a[c[f] + "CancelRequestAnimationFrame"];
        d && e || (d = function(a) {
            var c = +Date.now(),
                d = Math.max(b + 16, c);
            return setTimeout(function() { a(b = d) }, d - c) }, e = clearTimeout), a.requestAnimationFrame = d, a.cancelAnimationFrame = e }(window), Materialize.guid = function() {
        function a() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) }
        return function() {
            return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a() } }(), Materialize.escapeHash = function(a) {
        return a.replace(/(:|\.|\[|\]|,|=)/g, "\\$1") }, Materialize.elementOrParentIsFixed = function(a) {
        var b = $(a),
            c = b.add(b.parents()),
            d = !1;
        return c.each(function() {
            if ("fixed" === $(this).css("position")) return d = !0, !1 }), d };
var getTime = Date.now || function() {
    return (new Date).getTime() };
Materialize.throttle = function(a, b, c) {
    var d, e, f, g = null,
        h = 0;
    c || (c = {});
    var i = function() { h = c.leading === !1 ? 0 : getTime(), g = null, f = a.apply(d, e), d = e = null };
    return function() {
        var j = getTime();
        h || c.leading !== !1 || (h = j);
        var k = b - (j - h);
        return d = this, e = arguments, k <= 0 ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), d = e = null) : g || c.trailing === !1 || (g = setTimeout(i, k)), f } };
var Vel;
Vel = jQuery ? jQuery.Velocity : $ ? $.Velocity : Velocity,
    function(a) { a.fn.collapsible = function(b) {
            var c = { accordion: void 0, onOpen: void 0, onClose: void 0 };
            return b = a.extend(c, b), this.each(function() {
                function c(b) { j = i.find("> li > .collapsible-header"), b.hasClass("active") ? b.parent().addClass("active") : b.parent().removeClass("active"), b.parent().hasClass("active") ? b.siblings(".collapsible-body").stop(!0, !1).slideDown({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function() { a(this).css("height", "") } }) : b.siblings(".collapsible-body").stop(!0, !1).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function() { a(this).css("height", "") } }), j.not(b).removeClass("active").parent().removeClass("active"), j.not(b).parent().children(".collapsible-body").stop(!0, !1).each(function() { a(this).is(":visible") && a(this).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function() { a(this).css("height", ""), f(a(this).siblings(".collapsible-header")) } }) }) }

                function d(b) { b.hasClass("active") ? b.parent().addClass("active") : b.parent().removeClass("active"), b.parent().hasClass("active") ? b.siblings(".collapsible-body").stop(!0, !1).slideDown({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function() { a(this).css("height", "") } }) : b.siblings(".collapsible-body").stop(!0, !1).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function() { a(this).css("height", "") } }) }

                function e(a) { b.accordion || "accordion" === k || void 0 === k ? c(a) : d(a), f(a) }

                function f(a) { a.hasClass("active") ? "function" == typeof b.onOpen && b.onOpen.call(this, a.parent()) : "function" == typeof b.onClose && b.onClose.call(this, a.parent()) }

                function g(a) {
                    var b = h(a);
                    return b.length > 0 }

                function h(a) {
                    return a.closest("li > .collapsible-header") }
                var i = a(this),
                    j = a(this).find("> li > .collapsible-header"),
                    k = i.data("collapsible");
                i.off("click.collapse", "> li > .collapsible-header"), j.off("click.collapse"), i.on("click.collapse", "> li > .collapsible-header", function(b) {
                    var c = a(b.target);
                    g(c) && (c = h(c)), c.toggleClass("active"), e(c) }), b.accordion || "accordion" === k || void 0 === k ? e(j.filter(".active").first()) : j.filter(".active").each(function() { e(a(this)) }) }) }, a(document).ready(function() { a(".collapsible").collapsible() }) }(jQuery),
    function(a) { a.fn.scrollTo = function(b) {
            return a(this).scrollTop(a(this).scrollTop() - a(this).offset().top + a(b).offset().top), this }, a.fn.dropdown = function(b) {
            var c = { inDuration: 300, outDuration: 225, constrainWidth: !0, hover: !1, gutter: 0, belowOrigin: !1, alignment: "left", stopPropagation: !1 };
            return "open" === b ? (this.each(function() { a(this).trigger("open") }), !1) : "close" === b ? (this.each(function() { a(this).trigger("close") }), !1) : void this.each(function() {
                function d() { void 0 !== g.data("induration") && (h.inDuration = g.data("induration")), void 0 !== g.data("outduration") && (h.outDuration = g.data("outduration")), void 0 !== g.data("constrainwidth") && (h.constrainWidth = g.data("constrainwidth")), void 0 !== g.data("hover") && (h.hover = g.data("hover")), void 0 !== g.data("gutter") && (h.gutter = g.data("gutter")), void 0 !== g.data("beloworigin") && (h.belowOrigin = g.data("beloworigin")), void 0 !== g.data("alignment") && (h.alignment = g.data("alignment")), void 0 !== g.data("stoppropagation") && (h.stopPropagation = g.data("stoppropagation")) }

                function e(b) { "focus" === b && (i = !0), d(), j.addClass("active"), g.addClass("active"), h.constrainWidth === !0 ? j.css("width", g.outerWidth()) : j.css("white-space", "nowrap");
                    var c = window.innerHeight,
                        e = g.innerHeight(),
                        k = g.offset().left,
                        l = g.offset().top - a(window).scrollTop(),
                        m = h.alignment,
                        n = 0,
                        o = 0,
                        p = 0;
                    h.belowOrigin === !0 && (p = e);
                    var q = 0,
                        r = 0,
                        s = g.parent();
                    if (s.is("body") || (s[0].scrollHeight > s[0].clientHeight && (q = s[0].scrollTop), s[0].scrollWidth > s[0].clientWidth && (r = s[0].scrollLeft)), k + j.innerWidth() > a(window).width() ? m = "right" : k - j.innerWidth() + g.innerWidth() < 0 && (m = "left"), l + j.innerHeight() > c)
                        if (l + e - j.innerHeight() < 0) {
                            var t = c - l - p;
                            j.css("max-height", t) } else p || (p += e), p -= j.innerHeight();
                    if ("left" === m) n = h.gutter, o = g.position().left + n;
                    else if ("right" === m) {
                        var u = g.position().left + g.outerWidth() - j.outerWidth();
                        n = -h.gutter, o = u + n }
                    j.css({ position: "absolute", top: g.position().top + p + q, left: o + r }), j.stop(!0, !0).css("opacity", 0).slideDown({ queue: !1, duration: h.inDuration, easing: "easeOutCubic", complete: function() { a(this).css("height", "") } }).animate({ opacity: 1 }, { queue: !1, duration: h.inDuration, easing: "easeOutSine" }), a(document).bind("click." + j.attr("id") + " touchstart." + j.attr("id"), function(b) { j.is(b.target) || g.is(b.target) || g.find(b.target).length || (f(), a(document).unbind("click." + j.attr("id") + " touchstart." + j.attr("id"))) }) }

                function f() { i = !1, j.fadeOut(h.outDuration), j.removeClass("active"), g.removeClass("active"), a(document).unbind("click." + j.attr("id") + " touchstart." + j.attr("id")), setTimeout(function() { j.css("max-height", "") }, h.outDuration) }
                var g = a(this),
                    h = a.extend({}, c, b),
                    i = !1,
                    j = a("#" + g.attr("data-activates"));
                if (d(), g.after(j), h.hover) {
                    var k = !1;
                    g.unbind("click." + g.attr("id")), g.on("mouseenter", function(a) { k === !1 && (e(), k = !0) }), g.on("mouseleave", function(b) {
                        var c = b.toElement || b.relatedTarget;
                        a(c).closest(".dropdown-content").is(j) || (j.stop(!0, !0), f(), k = !1) }), j.on("mouseleave", function(b) {
                        var c = b.toElement || b.relatedTarget;
                        a(c).closest(".dropdown-button").is(g) || (j.stop(!0, !0), f(), k = !1) }) } else g.unbind("click." + g.attr("id")), g.bind("click." + g.attr("id"), function(b) { i || (g[0] != b.currentTarget || g.hasClass("active") || 0 !== a(b.target).closest(".dropdown-content").length ? g.hasClass("active") && (f(), a(document).unbind("click." + j.attr("id") + " touchstart." + j.attr("id"))) : (b.preventDefault(), h.stopPropagation && b.stopPropagation(), e("click"))) });
                g.on("open", function(a, b) { e(b) }), g.on("close", f) }) }, a(document).ready(function() { a(".dropdown-button").dropdown() }) }(jQuery),
    function(a) {
        var b = 0,
            c = 0,
            d = function() {
                return c++, "materialize-modal-overlay-" + c },
            e = {
                init: function(c) {
                    var e = {
                        opacity: .5,
                        inDuration: 350,
                        outDuration: 250,
                        ready: void 0,
                        complete: void 0,
                        dismissible: !0,
                        startingTop: "4%",
                        endingTop: "10%"
                    };
                    return c = a.extend(e, c), this.each(function() {
                        var e = a(this),
                            f = a(this).attr("id") || "#" + a(this).data("target"),
                            g = function() {
                                var d = e.data("overlay-id"),
                                    f = a("#" + d);
                                e.removeClass("open"), a("body").css({ overflow: "", width: "" }), e.find(".modal-close").off("click.close"), a(document).off("keyup.modal" + d), f.velocity({ opacity: 0 }, { duration: c.outDuration, queue: !1, ease: "easeOutQuart" });
                                var g = { duration: c.outDuration, queue: !1, ease: "easeOutCubic", complete: function() { a(this).css({ display: "none" }), "function" == typeof c.complete && c.complete.call(this, e), f.remove(), b-- } };
                                e.hasClass("bottom-sheet") ? e.velocity({ bottom: "-100%", opacity: 0 }, g) : e.velocity({ top: c.startingTop, opacity: 0, scaleX: .7 }, g) },
                            h = function(f) {
                                var h = a("body"),
                                    i = h.innerWidth();
                                if (h.css("overflow", "hidden"), h.width(i), !e.hasClass("open")) {
                                    var j = d(),
                                        k = a('<div class="modal-overlay"></div>');
                                    lStack = ++b, k.attr("id", j).css("z-index", 1e3 + 2 * lStack), e.data("overlay-id", j).css("z-index", 1e3 + 2 * lStack + 1), e.addClass("open"), a("body").append(k), c.dismissible && (k.click(function() { g() }), a(document).on("keyup.modal" + j, function(a) { 27 === a.keyCode && g() })), e.find(".modal-close").on("click.close", function(a) { g() }), k.css({ display: "block", opacity: 0 }), e.css({ display: "block", opacity: 0 }), k.velocity({ opacity: c.opacity }, { duration: c.inDuration, queue: !1, ease: "easeOutCubic" }), e.data("associated-overlay", k[0]);
                                    var l = { duration: c.inDuration, queue: !1, ease: "easeOutCubic", complete: function() { "function" == typeof c.ready && c.ready.call(this, e, f) } };
                                    e.hasClass("bottom-sheet") ? e.velocity({ bottom: "0", opacity: 1 }, l) : (a.Velocity.hook(e, "scaleX", .7), e.css({ top: c.startingTop }), e.velocity({ top: c.endingTop, opacity: 1, scaleX: "1" }, l)) } };
                        a(document).off("click.modalTrigger", 'a[href="#' + f + '"], [data-target="' + f + '"]'), a(this).off("openModal"), a(this).off("closeModal"), a(document).on("click.modalTrigger", 'a[href="#' + f + '"], [data-target="' + f + '"]', function(b) { c.startingTop = (a(this).offset().top - a(window).scrollTop()) / 1.15, h(a(this)), b.preventDefault() }), a(this).on("openModal", function() { a(this).attr("href") || "#" + a(this).data("target");
                            h() }), a(this).on("closeModal", function() { g() }) })
                },
                open: function() { a(this).trigger("openModal") },
                close: function() { a(this).trigger("closeModal") }
            };
        a.fn.modal = function(b) {
            return e[b] ? e[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist on jQuery.modal") : e.init.apply(this, arguments) }
    }(jQuery),
    function(a) { a.fn.materialbox = function() {
            return this.each(function() {
                function b() { f = !1;
                    var b = i.parent(".material-placeholder"),
                        d = (window.innerWidth, window.innerHeight, i.data("width")),
                        g = i.data("height");
                    i.velocity("stop", !0), a("#materialbox-overlay").velocity("stop", !0), a(".materialbox-caption").velocity("stop", !0), a("#materialbox-overlay").velocity({ opacity: 0 }, { duration: h, queue: !1, easing: "easeOutQuad", complete: function() { e = !1, a(this).remove() } }), i.velocity({ width: d, height: g, left: 0, top: 0 }, { duration: h, queue: !1, easing: "easeOutQuad" }), a(".materialbox-caption").velocity({ opacity: 0 }, { duration: h, queue: !1, easing: "easeOutQuad", complete: function() { b.css({ height: "", width: "", position: "", top: "", left: "" }), i.css({ height: "", top: "", left: "", width: "", "max-width": "", position: "", "z-index": "", "will-change": "" }), i.removeClass("active"), f = !0, a(this).remove(), c && c.css("overflow", "") } }) }
                if (!a(this).hasClass("initialized")) { a(this).addClass("initialized");
                    var c, d, e = !1,
                        f = !0,
                        g = 275,
                        h = 200,
                        i = a(this),
                        j = a("<div></div>").addClass("material-placeholder");
                    i.wrap(j), i.on("click", function() {
                        var h = i.parent(".material-placeholder"),
                            j = window.innerWidth,
                            k = window.innerHeight,
                            l = i.width(),
                            m = i.height();
                        if (f === !1) return b(), !1;
                        if (e && f === !0) return b(), !1;
                        f = !1, i.addClass("active"), e = !0, h.css({ width: h[0].getBoundingClientRect().width, height: h[0].getBoundingClientRect().height, position: "relative", top: 0, left: 0 }), c = void 0, d = h[0].parentNode;
                        for (; null !== d && !a(d).is(document);) {
                            var n = a(d); "visible" !== n.css("overflow") && (n.css("overflow", "visible"), c = void 0 === c ? n : c.add(n)), d = d.parentNode }
                        i.css({ position: "absolute", "z-index": 1e3, "will-change": "left, top, width, height" }).data("width", l).data("height", m);
                        var o = a('<div id="materialbox-overlay"></div>').css({ opacity: 0 }).click(function() { f === !0 && b() });
                        i.before(o);
                        var p = o[0].getBoundingClientRect();
                        if (o.css({ width: j, height: k, left: -1 * p.left, top: -1 * p.top }), o.velocity({ opacity: 1 }, { duration: g, queue: !1, easing: "easeOutQuad" }), "" !== i.data("caption")) {
                            var q = a('<div class="materialbox-caption"></div>');
                            q.text(i.data("caption")), a("body").append(q), q.css({ display: "inline" }), q.velocity({ opacity: 1 }, { duration: g, queue: !1, easing: "easeOutQuad" }) }
                        var r = 0,
                            s = l / j,
                            t = m / k,
                            u = 0,
                            v = 0;
                        s > t ? (r = m / l, u = .9 * j, v = .9 * j * r) : (r = l / m, u = .9 * k * r, v = .9 * k), i.hasClass("responsive-img") ? i.velocity({ "max-width": u, width: l }, { duration: 0, queue: !1, complete: function() { i.css({ left: 0, top: 0 }).velocity({ height: v, width: u, left: a(document).scrollLeft() + j / 2 - i.parent(".material-placeholder").offset().left - u / 2, top: a(document).scrollTop() + k / 2 - i.parent(".material-placeholder").offset().top - v / 2 }, { duration: g, queue: !1, easing: "easeOutQuad", complete: function() { f = !0 } }) } }) : i.css("left", 0).css("top", 0).velocity({ height: v, width: u, left: a(document).scrollLeft() + j / 2 - i.parent(".material-placeholder").offset().left - u / 2, top: a(document).scrollTop() + k / 2 - i.parent(".material-placeholder").offset().top - v / 2 }, { duration: g, queue: !1, easing: "easeOutQuad", complete: function() { f = !0 } }) }), a(window).scroll(function() { e && b() }), a(document).keyup(function(a) { 27 === a.keyCode && f === !0 && e && b() }) } }) }, a(document).ready(function() { a(".materialboxed").materialbox() }) }(jQuery),
    function(a) { a.fn.parallax = function() {
            var b = a(window).width();
            return this.each(function(c) {
                function d(c) {
                    var d;
                    d = b < 601 ? e.height() > 0 ? e.height() : e.children("img").height() : e.height() > 0 ? e.height() : 500;
                    var f = e.children("img").first(),
                        g = f.height(),
                        h = g - d,
                        i = e.offset().top + d,
                        j = e.offset().top,
                        k = a(window).scrollTop(),
                        l = window.innerHeight,
                        m = k + l,
                        n = (m - j) / (d + l),
                        o = Math.round(h * n);
                    c && f.css("display", "block"), i > k && j < k + l && f.css("transform", "translate3D(-50%," + o + "px, 0)") }
                var e = a(this);
                e.addClass("parallax"), e.children("img").one("load", function() { d(!0) }).each(function() { this.complete && a(this).trigger("load") }), a(window).scroll(function() { b = a(window).width(), d(!1) }), a(window).resize(function() { b = a(window).width(), d(!1) }) }) } }(jQuery),
    function(a) {
        var b = { init: function(b) {
                var c = { onShow: null, swipeable: !1, responsiveThreshold: 1 / 0 };
                return b = a.extend(c, b), this.each(function() {
                    var c, d, e, f, g, h = a(this),
                        i = a(window).width(),
                        j = h.find("li.tab a"),
                        k = h.width(),
                        l = a(),
                        m = Math.max(k, h[0].scrollWidth) / j.length,
                        n = prev_index = 0,
                        o = !1,
                        p = 300,
                        q = function(a) {
                            return k - a.position().left - a.outerWidth() - h.scrollLeft() },
                        r = function(a) {
                            return a.position().left + h.scrollLeft() },
                        s = function(a) { n - a >= 0 ? (f.velocity({ right: q(c) }, { duration: p, queue: !1, easing: "easeOutQuad" }), f.velocity({ left: r(c) }, { duration: p, queue: !1, easing: "easeOutQuad", delay: 90 })) : (f.velocity({ left: r(c) }, { duration: p, queue: !1, easing: "easeOutQuad" }), f.velocity({ right: q(c) }, { duration: p, queue: !1, easing: "easeOutQuad", delay: 90 })) };
                    b.swipeable && i > b.responsiveThreshold && (b.swipeable = !1), c = a(j.filter('[href="' + location.hash + '"]')), 0 === c.length && (c = a(this).find("li.tab a.active").first()), 0 === c.length && (c = a(this).find("li.tab a").first()), c.addClass("active"), n = j.index(c), n < 0 && (n = 0), void 0 !== c[0] && (d = a(c[0].hash), d.addClass("active")), h.find(".indicator").length || h.append('<div class="indicator"></div>'), f = h.find(".indicator"), h.append(f), h.is(":visible") && setTimeout(function() { f.css({ right: q(c) }), f.css({ left: r(c) }) }, 0), a(window).resize(function() { k = h.width(), m = Math.max(k, h[0].scrollWidth) / j.length, n < 0 && (n = 0), 0 !== m && 0 !== k && (f.css({ right: q(c) }), f.css({ left: r(c) })) }), b.swipeable ? (j.each(function() {
                        var b = a(Materialize.escapeHash(this.hash));
                        b.addClass("carousel-item"), l = l.add(b) }), e = l.wrapAll('<div class="tabs-content carousel"></div>'), l.css("display", ""), a(".tabs-content.carousel").carousel({ fullWidth: !0, noWrap: !0, onCycleTo: function(a) {
                            if (!o) {
                                var b = n;
                                n = e.index(a), c = j.eq(n), s(b) } } })) : j.not(c).each(function() { a(Materialize.escapeHash(this.hash)).hide() }), h.on("click", "a", function(e) {
                        if (a(this).parent().hasClass("disabled")) return void e.preventDefault();
                        if (!a(this).attr("target")) { o = !0, k = h.width(), m = Math.max(k, h[0].scrollWidth) / j.length, c.removeClass("active");
                            var f = d;
                            c = a(this), d = a(Materialize.escapeHash(this.hash)), j = h.find("li.tab a");
                            c.position();
                            c.addClass("active"), prev_index = n, n = j.index(a(this)), n < 0 && (n = 0), b.swipeable ? l.length && l.carousel("set", n) : (void 0 !== d && (d.show(), d.addClass("active"), "function" == typeof b.onShow && b.onShow.call(this, d)), void 0 === f || f.is(d) || (f.hide(), f.removeClass("active"))), g = setTimeout(function() { o = !1 }, p), s(prev_index), e.preventDefault() } }) }) }, select_tab: function(a) { this.find('a[href="#' + a + '"]').trigger("click") } };
        a.fn.tabs = function(c) {
            return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.tabs") : b.init.apply(this, arguments) }, a(document).ready(function() { a("ul.tabs").tabs() }) }(jQuery),
    function(a) { a.fn.tooltip = function(c) {
            var d = 5,
                e = { delay: 350, tooltip: "", position: "bottom", html: !1 };
            return "remove" === c ? (this.each(function() { a("#" + a(this).attr("data-tooltip-id")).remove(), a(this).off("mouseenter.tooltip mouseleave.tooltip") }), !1) : (c = a.extend(e, c), this.each(function() {
                var e = Materialize.guid(),
                    f = a(this);
                f.attr("data-tooltip-id") && a("#" + f.attr("data-tooltip-id")).remove(), f.attr("data-tooltip-id", e);
                var g, h, i, j, k, l, m = function() { g = f.attr("data-html") ? "true" === f.attr("data-html") : c.html, h = f.attr("data-delay"), h = void 0 === h || "" === h ? c.delay : h, i = f.attr("data-position"), i = void 0 === i || "" === i ? c.position : i, j = f.attr("data-tooltip"), j = void 0 === j || "" === j ? c.tooltip : j };
                m();
                var n = function() {
                    var b = a('<div class="material-tooltip"></div>');
                    return j = g ? a("<span></span>").html(j) : a("<span></span>").text(j), b.append(j).appendTo(a("body")).attr("id", e), l = a('<div class="backdrop"></div>'), l.appendTo(b), b };
                k = n(), f.off("mouseenter.tooltip mouseleave.tooltip");
                var o, p = !1;
                f.on({ "mouseenter.tooltip": function(a) {
                        var c = function() { m(), p = !0, k.velocity("stop"), l.velocity("stop"), k.css({ visibility: "visible", left: "0px", top: "0px" });
                            var a, c, e, g = f.outerWidth(),
                                h = f.outerHeight(),
                                j = k.outerHeight(),
                                n = k.outerWidth(),
                                o = "0px",
                                q = "0px",
                                r = l[0].offsetWidth,
                                s = l[0].offsetHeight,
                                t = 8,
                                u = 8,
                                v = 0; "top" === i ? (a = f.offset().top - j - d, c = f.offset().left + g / 2 - n / 2, e = b(c, a, n, j), o = "-10px", l.css({ bottom: 0, left: 0, borderRadius: "14px 14px 0 0", transformOrigin: "50% 100%", marginTop: j, marginLeft: n / 2 - r / 2 })) : "left" === i ? (a = f.offset().top + h / 2 - j / 2, c = f.offset().left - n - d, e = b(c, a, n, j), q = "-10px", l.css({ top: "-7px", right: 0, width: "14px", height: "14px", borderRadius: "14px 0 0 14px", transformOrigin: "95% 50%", marginTop: j / 2, marginLeft: n })) : "right" === i ? (a = f.offset().top + h / 2 - j / 2, c = f.offset().left + g + d, e = b(c, a, n, j), q = "+10px", l.css({ top: "-7px", left: 0, width: "14px", height: "14px", borderRadius: "0 14px 14px 0", transformOrigin: "5% 50%", marginTop: j / 2, marginLeft: "0px" })) : (a = f.offset().top + f.outerHeight() + d, c = f.offset().left + g / 2 - n / 2, e = b(c, a, n, j), o = "+10px", l.css({ top: 0, left: 0, marginLeft: n / 2 - r / 2 })), k.css({ top: e.y, left: e.x }), t = Math.SQRT2 * n / parseInt(r), u = Math.SQRT2 * j / parseInt(s), v = Math.max(t, u), k.velocity({ translateY: o, translateX: q }, { duration: 350, queue: !1 }).velocity({ opacity: 1 }, { duration: 300, delay: 50, queue: !1 }), l.css({ visibility: "visible" }).velocity({ opacity: 1 }, { duration: 55, delay: 0, queue: !1 }).velocity({ scaleX: v, scaleY: v }, { duration: 300, delay: 0, queue: !1, easing: "easeInOutQuad" }) };
                        o = setTimeout(c, h) }, "mouseleave.tooltip": function() { p = !1, clearTimeout(o), setTimeout(function() { p !== !0 && (k.velocity({ opacity: 0, translateY: 0, translateX: 0 }, { duration: 225, queue: !1 }), l.velocity({ opacity: 0, scaleX: 1, scaleY: 1 }, { duration: 225, queue: !1, complete: function() { l.css({ visibility: "hidden" }), k.css({ visibility: "hidden" }), p = !1 } })) }, 225) } }) })) };
        var b = function(b, c, d, e) {
            var f = b,
                g = c;
            return f < 0 ? f = 4 : f + d > window.innerWidth && (f -= f + d - window.innerWidth), g < 0 ? g = 4 : g + e > window.innerHeight + a(window).scrollTop && (g -= g + e - window.innerHeight), { x: f, y: g } };
        a(document).ready(function() { a(".tooltipped").tooltip() }) }(jQuery),
    function(a) { "use strict";

        function b(a) {
            return null !== a && a === a.window }

        function c(a) {
            return b(a) ? a : 9 === a.nodeType && a.defaultView }

        function d(a) {
            var b, d, e = { top: 0, left: 0 },
                f = a && a.ownerDocument;
            return b = f.documentElement, "undefined" != typeof a.getBoundingClientRect && (e = a.getBoundingClientRect()), d = c(f), { top: e.top + d.pageYOffset - b.clientTop, left: e.left + d.pageXOffset - b.clientLeft } }

        function e(a) {
            var b = "";
            for (var c in a) a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
            return b }

        function f(a) {
            if (k.allowEvent(a) === !1) return null;
            for (var b = null, c = a.target || a.srcElement; null !== c.parentElement;) {
                if (!(c instanceof SVGElement || c.className.indexOf("waves-effect") === -1)) { b = c;
                    break }
                if (c.classList.contains("waves-effect")) { b = c;
                    break }
                c = c.parentElement }
            return b }

        function g(b) {
            var c = f(b);
            null !== c && (j.show(b, c), "ontouchstart" in a && (c.addEventListener("touchend", j.hide, !1), c.addEventListener("touchcancel", j.hide, !1)), c.addEventListener("mouseup", j.hide, !1), c.addEventListener("mouseleave", j.hide, !1)) }
        var h = h || {},
            i = document.querySelectorAll.bind(document),
            j = { duration: 750, show: function(a, b) {
                    if (2 === a.button) return !1;
                    var c = b || this,
                        f = document.createElement("div");
                    f.className = "waves-ripple", c.appendChild(f);
                    var g = d(c),
                        h = a.pageY - g.top,
                        i = a.pageX - g.left,
                        k = "scale(" + c.clientWidth / 100 * 10 + ")"; "touches" in a && (h = a.touches[0].pageY - g.top, i = a.touches[0].pageX - g.left), f.setAttribute("data-hold", Date.now()), f.setAttribute("data-scale", k), f.setAttribute("data-x", i), f.setAttribute("data-y", h);
                    var l = { top: h + "px", left: i + "px" };
                    f.className = f.className + " waves-notransition", f.setAttribute("style", e(l)), f.className = f.className.replace("waves-notransition", ""), l["-webkit-transform"] = k, l["-moz-transform"] = k, l["-ms-transform"] = k, l["-o-transform"] = k, l.transform = k, l.opacity = "1", l["-webkit-transition-duration"] = j.duration + "ms", l["-moz-transition-duration"] = j.duration + "ms", l["-o-transition-duration"] = j.duration + "ms", l["transition-duration"] = j.duration + "ms", l["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f.setAttribute("style", e(l)) }, hide: function(a) { k.touchup(a);
                    var b = this,
                        c = (1.4 * b.clientWidth, null),
                        d = b.getElementsByClassName("waves-ripple");
                    if (!(d.length > 0)) return !1;
                    c = d[d.length - 1];
                    var f = c.getAttribute("data-x"),
                        g = c.getAttribute("data-y"),
                        h = c.getAttribute("data-scale"),
                        i = Date.now() - Number(c.getAttribute("data-hold")),
                        l = 350 - i;
                    l < 0 && (l = 0), setTimeout(function() {
                        var a = { top: g + "px", left: f + "px", opacity: "0", "-webkit-transition-duration": j.duration + "ms", "-moz-transition-duration": j.duration + "ms", "-o-transition-duration": j.duration + "ms", "transition-duration": j.duration + "ms", "-webkit-transform": h, "-moz-transform": h, "-ms-transform": h, "-o-transform": h, transform: h };
                        c.setAttribute("style", e(a)), setTimeout(function() {
                            try { b.removeChild(c) } catch (a) {
                                return !1 } }, j.duration) }, l) }, wrapInput: function(a) {
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b];
                        if ("input" === c.tagName.toLowerCase()) {
                            var d = c.parentNode;
                            if ("i" === d.tagName.toLowerCase() && d.className.indexOf("waves-effect") !== -1) continue;
                            var e = document.createElement("i");
                            e.className = c.className + " waves-input-wrapper";
                            var f = c.getAttribute("style");
                            f || (f = ""), e.setAttribute("style", f), c.className = "waves-button-input", c.removeAttribute("style"), d.replaceChild(e, c), e.appendChild(c) } } } },
            k = { touches: 0, allowEvent: function(a) {
                    var b = !0;
                    return "touchstart" === a.type ? k.touches += 1 : "touchend" === a.type || "touchcancel" === a.type ? setTimeout(function() { k.touches > 0 && (k.touches -= 1) }, 500) : "mousedown" === a.type && k.touches > 0 && (b = !1), b }, touchup: function(a) { k.allowEvent(a) } };
        h.displayEffect = function(b) { b = b || {}, "duration" in b && (j.duration = b.duration), j.wrapInput(i(".waves-effect")), "ontouchstart" in a && document.body.addEventListener("touchstart", g, !1), document.body.addEventListener("mousedown", g, !1) }, h.attach = function(b) { "input" === b.tagName.toLowerCase() && (j.wrapInput([b]), b = b.parentElement), "ontouchstart" in a && b.addEventListener("touchstart", g, !1), b.addEventListener("mousedown", g, !1) }, a.Waves = h, document.addEventListener("DOMContentLoaded", function() { h.displayEffect() }, !1) }(window), Materialize.toast = function(a, b, c, d) {
        function e(a) {
            var b = document.createElement("div");
            if (b.classList.add("toast"), c)
                for (var e = c.split(" "), f = 0, g = e.length; f < g; f++) b.classList.add(e[f]);
            ("object" == typeof HTMLElement ? a instanceof HTMLElement : a && "object" == typeof a && null !== a && 1 === a.nodeType && "string" == typeof a.nodeName) ? b.appendChild(a): a instanceof jQuery ? b.appendChild(a[0]) : b.innerHTML = a;
            var h = new Hammer(b, { prevent_default: !1 });
            return h.on("pan", function(a) {
                var c = a.deltaX,
                    d = 80;
                b.classList.contains("panning") || b.classList.add("panning");
                var e = 1 - Math.abs(c / d);
                e < 0 && (e = 0), Vel(b, { left: c, opacity: e }, { duration: 50, queue: !1, easing: "easeOutQuad" }) }), h.on("panend", function(a) {
                var c = a.deltaX,
                    e = 80;
                Math.abs(c) > e ? Vel(b, { marginTop: "-40px" }, { duration: 375, easing: "easeOutExpo", queue: !1, complete: function() { "function" == typeof d && d(), b.parentNode.removeChild(b) } }) : (b.classList.remove("panning"), Vel(b, { left: 0, opacity: 1 }, { duration: 300, easing: "easeOutExpo", queue: !1 })) }), b }
        c = c || "";
        var f = document.getElementById("toast-container");
        null === f && (f = document.createElement("div"), f.id = "toast-container", document.body.appendChild(f));
        var g = e(a);
        a && f.appendChild(g), g.style.opacity = 0, Vel(g, { translateY: "-35px", opacity: 1 }, { duration: 300, easing: "easeOutCubic", queue: !1 });
        var h, i = b;
        null != i && (h = setInterval(function() { null === g.parentNode && window.clearInterval(h), g.classList.contains("panning") || (i -= 20), i <= 0 && (Vel(g, { opacity: 0, marginTop: "-40px" }, { duration: 375, easing: "easeOutExpo", queue: !1, complete: function() { "function" == typeof d && d(), this[0].parentNode.removeChild(this[0]) } }), window.clearInterval(h)) }, 20)) },
    function(a) {
        var b = { init: function(b) {
                var c = { menuWidth: 300, edge: "left", closeOnClick: !1, draggable: !0 };
                b = a.extend(c, b), a(this).each(function() {
                    var c = a(this),
                        d = c.attr("data-activates"),
                        e = a("#" + d);
                    300 != b.menuWidth && e.css("width", b.menuWidth);
                    var f = a('.drag-target[data-sidenav="' + d + '"]');
                    b.draggable ? (f.length && f.remove(), f = a('<div class="drag-target"></div>').attr("data-sidenav", d), a("body").append(f)) : f = a(), "left" == b.edge ? (e.css("transform", "translateX(-100%)"), f.css({ left: 0 })) : (e.addClass("right-aligned").css("transform", "translateX(100%)"), f.css({ right: 0 })), e.hasClass("fixed") && window.innerWidth > 992 && e.css("transform", "translateX(0)"), e.hasClass("fixed") && a(window).resize(function() { window.innerWidth > 992 ? 0 !== a("#sidenav-overlay").length && i ? g(!0) : e.css("transform", "translateX(0%)") : i === !1 && ("left" === b.edge ? e.css("transform", "translateX(-100%)") : e.css("transform", "translateX(100%)")) }), b.closeOnClick === !0 && e.on("click.itemclick", "a:not(.collapsible-header)", function() { g() });
                    var g = function(c) { h = !1, i = !1, a("body").css({ overflow: "", width: "" }), a("#sidenav-overlay").velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function() { a(this).remove() } }), "left" === b.edge ? (f.css({ width: "", right: "", left: "0" }), e.velocity({ translateX: "-100%" }, { duration: 200, queue: !1, easing: "easeOutCubic", complete: function() { c === !0 && (e.removeAttr("style"), e.css("width", b.menuWidth)) } })) : (f.css({ width: "", right: "0", left: "" }), e.velocity({ translateX: "100%" }, { duration: 200, queue: !1, easing: "easeOutCubic", complete: function() { c === !0 && (e.removeAttr("style"), e.css("width", b.menuWidth)) } })) },
                        h = !1,
                        i = !1;
                    b.draggable && (f.on("click", function() { i && g() }), f.hammer({ prevent_default: !1 }).bind("pan", function(c) {
                        if ("touch" == c.gesture.pointerType) {
                            var d = (c.gesture.direction, c.gesture.center.x),
                                f = (c.gesture.center.y, c.gesture.velocityX, a("body")),
                                h = a("#sidenav-overlay"),
                                j = f.innerWidth();
                            if (f.css("overflow", "hidden"), f.width(j), 0 === h.length && (h = a('<div id="sidenav-overlay"></div>'), h.css("opacity", 0).click(function() { g() }), a("body").append(h)), "left" === b.edge && (d > b.menuWidth ? d = b.menuWidth : d < 0 && (d = 0)), "left" === b.edge) d < b.menuWidth / 2 ? i = !1 : d >= b.menuWidth / 2 && (i = !0), e.css("transform", "translateX(" + (d - b.menuWidth) + "px)");
                            else { d < window.innerWidth - b.menuWidth / 2 ? i = !0 : d >= window.innerWidth - b.menuWidth / 2 && (i = !1);
                                var k = d - b.menuWidth / 2;
                                k < 0 && (k = 0), e.css("transform", "translateX(" + k + "px)") }
                            var l; "left" === b.edge ? (l = d / b.menuWidth, h.velocity({ opacity: l }, { duration: 10, queue: !1, easing: "easeOutQuad" })) : (l = Math.abs((d - window.innerWidth) / b.menuWidth), h.velocity({ opacity: l }, { duration: 10, queue: !1, easing: "easeOutQuad" })) } }).bind("panend", function(c) {
                        if ("touch" == c.gesture.pointerType) {
                            var d = a('<div id="sidenav-overlay"></div>'),
                                g = c.gesture.velocityX,
                                j = c.gesture.center.x,
                                k = j - b.menuWidth,
                                l = j - b.menuWidth / 2;
                            k > 0 && (k = 0), l < 0 && (l = 0), h = !1, "left" === b.edge ? i && g <= .3 || g < -.5 ? (0 !== k && e.velocity({ translateX: [0, k] }, { duration: 300, queue: !1, easing: "easeOutQuad" }), d.velocity({ opacity: 1 }, { duration: 50, queue: !1, easing: "easeOutQuad" }), f.css({ width: "50%", right: 0, left: "" }), i = !0) : (!i || g > .3) && (a("body").css({ overflow: "", width: "" }), e.velocity({ translateX: [-1 * b.menuWidth - 10, k] }, { duration: 200, queue: !1, easing: "easeOutQuad" }), d.velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function() { a(this).remove() } }), f.css({ width: "10px", right: "", left: 0 })) : i && g >= -.3 || g > .5 ? (0 !== l && e.velocity({ translateX: [0, l] }, { duration: 300, queue: !1, easing: "easeOutQuad" }), d.velocity({ opacity: 1 }, { duration: 50, queue: !1, easing: "easeOutQuad" }), f.css({ width: "50%", right: "", left: 0 }), i = !0) : (!i || g < -.3) && (a("body").css({ overflow: "", width: "" }), e.velocity({ translateX: [b.menuWidth + 10, l] }, { duration: 200, queue: !1, easing: "easeOutQuad" }), d.velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function() { a(this).remove() } }), f.css({ width: "10px", right: 0, left: "" })) } })), c.off("click.sidenav").on("click.sidenav", function() {
                        if (i === !0) i = !1, h = !1, g();
                        else {
                            var c = a("body"),
                                d = a('<div id="sidenav-overlay"></div>'),
                                j = c.innerWidth();
                            c.css("overflow", "hidden"), c.width(j), a("body").append(f), "left" === b.edge ? (f.css({ width: "50%", right: 0, left: "" }), e.velocity({ translateX: [0, -1 * b.menuWidth] }, { duration: 300, queue: !1, easing: "easeOutQuad" })) : (f.css({ width: "50%", right: "", left: 0 }), e.velocity({ translateX: [0, b.menuWidth] }, { duration: 300, queue: !1, easing: "easeOutQuad" })), d.css("opacity", 0).click(function() { i = !1, h = !1, g(), d.velocity({ opacity: 0 }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function() { a(this).remove() } }) }), a("body").append(d), d.velocity({ opacity: 1 }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function() { i = !0, h = !1 } }) }
                        return !1 }) }) }, destroy: function() {
                var b = a("#sidenav-overlay"),
                    c = a('.drag-target[data-sidenav="' + a(this).attr("data-activates") + '"]');
                b.trigger("click"), c.remove(), a(this).off("click"), b.remove() }, show: function() { this.trigger("click") }, hide: function() { a("#sidenav-overlay").trigger("click") } };
        a.fn.sideNav = function(c) {
            return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.sideNav") : b.init.apply(this, arguments) } }(jQuery),
    function(a) {
        function b(b, c, d, e) {
            var g = a();
            return a.each(f, function(a, f) {
                if (f.height() > 0) {
                    var h = f.offset().top,
                        i = f.offset().left,
                        j = i + f.width(),
                        k = h + f.height(),
                        l = !(i > c || j < e || h > d || k < b);
                    l && g.push(f) } }), g }

        function c(c) {++i;
            var d = e.scrollTop(),
                f = e.scrollLeft(),
                h = f + e.width(),
                k = d + e.height(),
                l = b(d + j.top + c || 200, h + j.right, k + j.bottom, f + j.left);
            a.each(l, function(a, b) {
                var c = b.data("scrollSpy:ticks"); "number" != typeof c && b.triggerHandler("scrollSpy:enter"), b.data("scrollSpy:ticks", i) }), a.each(g, function(a, b) {
                var c = b.data("scrollSpy:ticks"); "number" == typeof c && c !== i && (b.triggerHandler("scrollSpy:exit"), b.data("scrollSpy:ticks", null)) }), g = l }

        function d() { e.trigger("scrollSpy:winSize") }
        var e = a(window),
            f = [],
            g = [],
            h = !1,
            i = 0,
            j = { top: 0, right: 0, bottom: 0, left: 0 };
        a.scrollSpy = function(b, d) {
            var g = { throttle: 100, scrollOffset: 200 };
            d = a.extend(g, d);
            var i = [];
            b = a(b), b.each(function(b, c) { f.push(a(c)), a(c).data("scrollSpy:id", b), a('a[href="#' + a(c).attr("id") + '"]').click(function(b) { b.preventDefault();
                    var c = a(Materialize.escapeHash(this.hash)).offset().top + 1;
                    a("html, body").animate({ scrollTop: c - d.scrollOffset }, { duration: 400, queue: !1, easing: "easeOutCubic" }) }) }), j.top = d.offsetTop || 0, j.right = d.offsetRight || 0, j.bottom = d.offsetBottom || 0, j.left = d.offsetLeft || 0;
            var k = Materialize.throttle(function() { c(d.scrollOffset) }, d.throttle || 100),
                l = function() { a(document).ready(k) };
            return h || (e.on("scroll", l), e.on("resize", l), h = !0), setTimeout(l, 0), b.on("scrollSpy:enter", function() { i = a.grep(i, function(a) {
                    return 0 != a.height() });
                var b = a(this);
                i[0] ? (a('a[href="#' + i[0].attr("id") + '"]').removeClass("active"), b.data("scrollSpy:id") < i[0].data("scrollSpy:id") ? i.unshift(a(this)) : i.push(a(this))) : i.push(a(this)), a('a[href="#' + i[0].attr("id") + '"]').addClass("active") }), b.on("scrollSpy:exit", function() {
                if (i = a.grep(i, function(a) {
                        return 0 != a.height() }), i[0]) { a('a[href="#' + i[0].attr("id") + '"]').removeClass("active");
                    var b = a(this);
                    i = a.grep(i, function(a) {
                        return a.attr("id") != b.attr("id") }), i[0] && a('a[href="#' + i[0].attr("id") + '"]').addClass("active") } }), b }, a.winSizeSpy = function(b) {
            return a.winSizeSpy = function() {
                return e }, b = b || { throttle: 100 }, e.on("resize", Materialize.throttle(d, b.throttle || 100)) }, a.fn.scrollSpy = function(b) {
            return a.scrollSpy(a(this), b) } }(jQuery),
    function(a) {
        a(document).ready(function() {
            function b(b) {
                var c = b.css("font-family"),
                    d = b.css("font-size"),
                    f = b.css("line-height");
                d && e.css("font-size", d), c && e.css("font-family", c), f && e.css("line-height", f), "off" === b.attr("wrap") && e.css("overflow-wrap", "normal").css("white-space", "pre"), e.text(b.val() + "\n");
                var g = e.html().replace(/\n/g, "<br>");
                e.html(g), b.is(":visible") ? e.css("width", b.width()) : e.css("width", a(window).width() / 2), b.css("height", e.height()) }
            Materialize.updateTextFields = function() {
                var b = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
                a(b).each(function(b, c) {
                    var d = a(this);
                    a(c).val().length > 0 || c.autofocus || void 0 !== d.attr("placeholder") ? d.siblings("label").addClass("active") : a(c)[0].validity ? d.siblings("label").toggleClass("active", a(c)[0].validity.badInput === !0) : d.siblings("label").removeClass("active") }) };
            var c = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            a(document).on("change", c, function() { 0 === a(this).val().length && void 0 === a(this).attr("placeholder") || a(this).siblings("label").addClass("active"), validate_field(a(this)) }), a(document).ready(function() { Materialize.updateTextFields() }), a(document).on("reset", function(b) {
                var d = a(b.target);
                d.is("form") && (d.find(c).removeClass("valid").removeClass("invalid"), d.find(c).each(function() { "" === a(this).attr("value") && a(this).siblings("label").removeClass("active") }), d.find("select.initialized").each(function() {
                    var a = d.find("option[selected]").text();
                    d.siblings("input.select-dropdown").val(a) })) }), a(document).on("focus", c, function() { a(this).siblings("label, .prefix").addClass("active") }), a(document).on("blur", c, function() {
                var b = a(this),
                    c = ".prefix";
                0 === b.val().length && b[0].validity.badInput !== !0 && void 0 === b.attr("placeholder") && (c += ", label"), b.siblings(c).removeClass("active"), validate_field(b) }), window.validate_field = function(a) {
                var b = void 0 !== a.attr("data-length"),
                    c = parseInt(a.attr("data-length")),
                    d = a.val().length;
                0 === a.val().length && a[0].validity.badInput === !1 ? a.hasClass("validate") && (a.removeClass("valid"), a.removeClass("invalid")) : a.hasClass("validate") && (a.is(":valid") && b && d <= c || a.is(":valid") && !b ? (a.removeClass("invalid"), a.addClass("valid")) : (a.removeClass("valid"), a.addClass("invalid"))) };
            var d = "input[type=radio], input[type=checkbox]";
            a(document).on("keyup.radio", d, function(b) {
                if (9 === b.which) { a(this).addClass("tabbed");
                    var c = a(this);
                    return void c.one("blur", function(b) { a(this).removeClass("tabbed") }) } });
            var e = a(".hiddendiv").first();
            e.length || (e = a('<div class="hiddendiv common"></div>'), a("body").append(e));
            var f = ".materialize-textarea";
            a(f).each(function() {
                var c = a(this);
                c.val().length && b(c) }), a("body").on("keyup keydown autoresize", f, function() { b(a(this)) }), a(document).on("change", '.file-field input[type="file"]', function() {
                for (var b = a(this).closest(".file-field"), c = b.find("input.file-path"), d = a(this)[0].files, e = [], f = 0; f < d.length; f++) e.push(d[f].name);
                c.val(e.join(", ")), c.trigger("change") });
            var g, h = "input[type=range]",
                i = !1;
            a(h).each(function() {
                var b = a('<span class="thumb"><span class="value"></span></span>');
                a(this).after(b) });
            var j = ".range-field";
            a(document).on("change", h, function(b) {
                var c = a(this).siblings(".thumb");
                c.find(".value").html(a(this).val()) }), a(document).on("input mousedown touchstart", h, function(b) {
                var c = a(this).siblings(".thumb"),
                    d = a(this).outerWidth();
                c.length <= 0 && (c = a('<span class="thumb"><span class="value"></span></span>'), a(this).after(c)), c.find(".value").html(a(this).val()), i = !0, a(this).addClass("active"), c.hasClass("active") || c.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px" }, { duration: 300, easing: "easeOutExpo" }), "input" !== b.type && (g = void 0 === b.pageX || null === b.pageX ? b.originalEvent.touches[0].pageX - a(this).offset().left : b.pageX - a(this).offset().left, g < 0 ? g = 0 : g > d && (g = d), c.addClass("active").css("left", g)), c.find(".value").html(a(this).val()) }), a(document).on("mouseup touchend", j, function() { i = !1, a(this).removeClass("active") }), a(document).on("mousemove touchmove", j, function(b) {
                var c, d = a(this).children(".thumb");
                if (i) { d.hasClass("active") || d.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px" }, { duration: 300, easing: "easeOutExpo" }), c = void 0 === b.pageX || null === b.pageX ? b.originalEvent.touches[0].pageX - a(this).offset().left : b.pageX - a(this).offset().left;
                    var e = a(this).outerWidth();
                    c < 0 ? c = 0 : c > e && (c = e), d.addClass("active").css("left", c), d.find(".value").html(d.siblings(h).val()) } }), a(document).on("mouseout touchleave", j, function() {
                if (!i) {
                    var b = a(this).children(".thumb");
                    b.hasClass("active") && b.velocity({ height: "0", width: "0", top: "10px", marginLeft: "-6px" }, { duration: 100 }), b.removeClass("active") } }), a.fn.autocomplete = function(b) {
                var c = { data: {}, limit: 1 / 0, onAutocomplete: null };
                return b = a.extend(c, b), this.each(function() {
                    var c, d = a(this),
                        e = b.data,
                        f = 0,
                        g = 0,
                        h = d.closest(".input-field");
                    if (!a.isEmptyObject(e)) {
                        var i, j = a('<ul class="autocomplete-content dropdown-content"></ul>');
                        h.length ? (i = h.children(".autocomplete-content.dropdown-content").first(), i.length || h.append(j)) : (i = d.next(".autocomplete-content.dropdown-content"), i.length || d.after(j)), i.length && (j = i);
                        var k = function(a, b) {
                                var c = b.find("img"),
                                    d = b.text().toLowerCase().indexOf("" + a.toLowerCase()),
                                    e = d + a.length - 1,
                                    f = b.text().slice(0, d),
                                    g = b.text().slice(d, e + 1),
                                    h = b.text().slice(e + 1);
                                b.html("<span>" + f + "<span class='highlight'>" + g + "</span>" + h + "</span>"), c.length && b.prepend(c) },
                            l = function() { g = 0, j.find(".active").removeClass("active") };
                        d.off("keyup.autocomplete").on("keyup.autocomplete", function(g) {
                            if (f = 0, 13 !== g.which && 38 !== g.which && 40 !== g.which) {
                                var h = d.val().toLowerCase();
                                if (c !== h && (j.empty(), l(), "" !== h))
                                    for (var i in e)
                                        if (e.hasOwnProperty(i) && i.toLowerCase().indexOf(h) !== -1 && i.toLowerCase() !== h) {
                                            if (f >= b.limit) break;
                                            var m = a("<li></li>");
                                            e[i] ? m.append('<img src="' + e[i] + '" class="right circle"><span>' + i + "</span>") : m.append("<span>" + i + "</span>"), j.append(m), k(h, m), f++ }
                                c = h } }), d.off("keydown.autocomplete").on("keydown.autocomplete", function(a) {
                            var b, c = a.which,
                                d = j.children("li").length,
                                e = j.children(".active").first();
                            return 13 === c ? (b = j.children("li").eq(g), void(b.length && (b.click(), a.preventDefault()))) : void(38 !== c && 40 !== c || (a.preventDefault(), 38 === c && g > 0 && g--, 40 === c && g < d - 1 && e.length && g++, e.removeClass("active"), j.children("li").eq(g).addClass("active"))) }), j.on("click", "li", function() {
                            var c = a(this).text().trim();
                            d.val(c), d.trigger("change"), j.empty(), l(), "function" == typeof b.onAutocomplete && b.onAutocomplete.call(this, c) }) } }) } }), a.fn.material_select = function(b) {
            function c(a, b, c) {
                var e = a.indexOf(b),
                    f = e === -1;
                return f ? a.push(b) : a.splice(e, 1), c.siblings("ul.dropdown-content").find("li").eq(b).toggleClass("active"), c.find("option").eq(b).prop("selected", f), d(a, c), f }

            function d(a, b) {
                for (var c = "", d = 0, e = a.length; d < e; d++) {
                    var f = b.find("option").eq(a[d]).text();
                    c += 0 === d ? f : ", " + f }
                "" === c && (c = b.find("option:disabled").eq(0).text()), b.siblings("input.select-dropdown").val(c)
            }
            a(this).each(function() {
                var d = a(this);
                if (!d.hasClass("browser-default")) {
                    var e = !!d.attr("multiple"),
                        f = d.data("select-id");
                    if (f && (d.parent().find("span.caret").remove(), d.parent().find("input").remove(), d.unwrap(), a("ul#select-options-" + f).remove()), "destroy" === b) return void d.data("select-id", null).removeClass("initialized");
                    var g = Materialize.guid();
                    d.data("select-id", g);
                    var h = a('<div class="select-wrapper"></div>');
                    h.addClass(d.attr("class"));
                    var i = a('<ul id="select-options-' + g + '" class="dropdown-content select-dropdown ' + (e ? "multiple-select-dropdown" : "") + '"></ul>'),
                        j = d.children("option, optgroup"),
                        k = [],
                        l = !1,
                        m = d.find("option:selected").html() || d.find("option:first").html() || "",
                        n = function(b, c, d) {
                            var e = c.is(":disabled") ? "disabled " : "",
                                f = "optgroup-option" === d ? "optgroup-option " : "",
                                g = c.data("icon"),
                                h = c.attr("class");
                            if (g) {
                                var j = "";
                                return h && (j = ' class="' + h + '"'), "multiple" === d ? i.append(a('<li class="' + e + '"><img alt="" src="' + g + '"' + j + '><span><input type="checkbox"' + e + "/><label></label>" + c.html() + "</span></li>")) : i.append(a('<li class="' + e + f + '"><img alt="" src="' + g + '"' + j + "><span>" + c.html() + "</span></li>")), !0 } "multiple" === d ? i.append(a('<li class="' + e + '"><span><input type="checkbox"' + e + "/><label></label>" + c.html() + "</span></li>")) : i.append(a('<li class="' + e + f + '"><span>' + c.html() + "</span></li>")) };
                    j.length && j.each(function() {
                        if (a(this).is("option")) e ? n(d, a(this), "multiple") : n(d, a(this));
                        else if (a(this).is("optgroup")) {
                            var b = a(this).children("option");
                            i.append(a('<li class="optgroup"><span>' + a(this).attr("label") + "</span></li>")), b.each(function() { n(d, a(this), "optgroup-option") }) } }), i.find("li:not(.optgroup)").each(function(f) { a(this).click(function(g) {
                            if (!a(this).hasClass("disabled") && !a(this).hasClass("optgroup")) {
                                var h = !0;
                                e ? (a('input[type="checkbox"]', this).prop("checked", function(a, b) {
                                    return !b }), h = c(k, a(this).index(), d), q.trigger("focus")) : (i.find("li").removeClass("active"), a(this).toggleClass("active"), q.val(a(this).text())), r(i, a(this)), d.find("option").eq(f).prop("selected", h), d.trigger("change"), "undefined" != typeof b && b() }
                            g.stopPropagation() }) }), d.wrap(h);
                    var o = a('<span class="caret">&#9660;</span>');
                    d.is(":disabled") && o.addClass("disabled");
                    var p = m.replace(/"/g, "&quot;"),
                        q = a('<input type="text" class="select-dropdown" readonly="true" ' + (d.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + g + '" value="' + p + '"/>');
                    d.before(q), q.before(o), q.after(i), d.is(":disabled") || q.dropdown({ hover: !1, closeOnClick: !1 }), d.attr("tabindex") && a(q[0]).attr("tabindex", d.attr("tabindex")), d.addClass("initialized"), q.on({ focus: function() {
                            if (a("ul.select-dropdown").not(i[0]).is(":visible") && a("input.select-dropdown").trigger("close"), !i.is(":visible")) { a(this).trigger("open", ["focus"]);
                                var b = a(this).val();
                                e && b.indexOf(",") >= 0 && (b = b.split(",")[0]);
                                var c = i.find("li").filter(function() {
                                    return a(this).text().toLowerCase() === b.toLowerCase() })[0];
                                r(i, c, !0) } }, click: function(a) { a.stopPropagation() } }), q.on("blur", function() { e || a(this).trigger("close"), i.find("li.selected").removeClass("selected") }), i.hover(function() { l = !0 }, function() { l = !1 }), a(window).on({ click: function() { e && (l || q.trigger("close")) } }), e && d.find("option:selected:not(:disabled)").each(function() {
                        var b = a(this).index();
                        c(k, b, d), i.find("li").eq(b).find(":checkbox").prop("checked", !0) });
                    var r = function(b, c, d) {
                            if (c) { b.find("li.selected").removeClass("selected");
                                var f = a(c);
                                f.addClass("selected"), e && !d || i.scrollTo(f) } },
                        s = [],
                        t = function(b) {
                            if (9 == b.which) return void q.trigger("close");
                            if (40 == b.which && !i.is(":visible")) return void q.trigger("open");
                            if (13 != b.which || i.is(":visible")) { b.preventDefault();
                                var c = String.fromCharCode(b.which).toLowerCase(),
                                    d = [9, 13, 27, 38, 40];
                                if (c && d.indexOf(b.which) === -1) { s.push(c);
                                    var f = s.join(""),
                                        g = i.find("li").filter(function() {
                                            return 0 === a(this).text().toLowerCase().indexOf(f) })[0];
                                    g && r(i, g) }
                                if (13 == b.which) {
                                    var h = i.find("li.selected:not(.disabled)")[0];
                                    h && (a(h).trigger("click"), e || q.trigger("close")) }
                                40 == b.which && (g = i.find("li.selected").length ? i.find("li.selected").next("li:not(.disabled)")[0] : i.find("li:not(.disabled)")[0], r(i, g)), 27 == b.which && q.trigger("close"), 38 == b.which && (g = i.find("li.selected").prev("li:not(.disabled)")[0], g && r(i, g)), setTimeout(function() { s = [] }, 1e3) } };
                    q.on("keydown", t) } })
        }
    }(jQuery),
    function(a) {
        var b = { init: function(b) {
                var c = { indicators: !0, height: 400, transition: 500, interval: 6e3 };
                return b = a.extend(c, b), this.each(function() {
                    function c(a, b) { a.hasClass("center-align") ? a.velocity({ opacity: 0, translateY: -100 }, { duration: b, queue: !1 }) : a.hasClass("right-align") ? a.velocity({ opacity: 0, translateX: 100 }, { duration: b, queue: !1 }) : a.hasClass("left-align") && a.velocity({ opacity: 0, translateX: -100 }, { duration: b, queue: !1 }) }

                    function d(a) { a >= j.length ? a = 0 : a < 0 && (a = j.length - 1), k = i.find(".active").index(), k != a && (e = j.eq(k), $caption = e.find(".caption"), e.removeClass("active"), e.velocity({ opacity: 0 }, { duration: b.transition, queue: !1, easing: "easeOutQuad", complete: function() { j.not(".active").velocity({ opacity: 0, translateX: 0, translateY: 0 }, { duration: 0, queue: !1 }) } }), c($caption, b.transition), b.indicators && f.eq(k).removeClass("active"), j.eq(a).velocity({ opacity: 1 }, { duration: b.transition, queue: !1, easing: "easeOutQuad" }), j.eq(a).find(".caption").velocity({ opacity: 1, translateX: 0, translateY: 0 }, { duration: b.transition, delay: b.transition, queue: !1, easing: "easeOutQuad" }), j.eq(a).addClass("active"), b.indicators && f.eq(a).addClass("active")) }
                    var e, f, g, h = a(this),
                        i = h.find("ul.slides").first(),
                        j = i.find("> li"),
                        k = i.find(".active").index();
                    k != -1 && (e = j.eq(k)), h.hasClass("fullscreen") || (b.indicators ? h.height(b.height + 40) : h.height(b.height), i.height(b.height)), j.find(".caption").each(function() { c(a(this), 0) }), j.find("img").each(function() {
                        var b = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                        a(this).attr("src") !== b && (a(this).css("background-image", "url(" + a(this).attr("src") + ")"), a(this).attr("src", b)) }), b.indicators && (f = a('<ul class="indicators"></ul>'), j.each(function(c) {
                        var e = a('<li class="indicator-item"></li>');
                        e.click(function() {
                            var c = i.parent(),
                                e = c.find(a(this)).index();
                            d(e), clearInterval(g), g = setInterval(function() { k = i.find(".active").index(), j.length == k + 1 ? k = 0 : k += 1, d(k) }, b.transition + b.interval) }), f.append(e) }), h.append(f), f = h.find("ul.indicators").find("li.indicator-item")), e ? e.show() : (j.first().addClass("active").velocity({ opacity: 1 }, { duration: b.transition, queue: !1, easing: "easeOutQuad" }), k = 0, e = j.eq(k), b.indicators && f.eq(k).addClass("active")), e.find("img").each(function() { e.find(".caption").velocity({ opacity: 1, translateX: 0, translateY: 0 }, { duration: b.transition, queue: !1, easing: "easeOutQuad" }) }), g = setInterval(function() { k = i.find(".active").index(), d(k + 1) }, b.transition + b.interval);
                    var l = !1,
                        m = !1,
                        n = !1;
                    h.hammer({ prevent_default: !1 }).bind("pan", function(a) {
                        if ("touch" === a.gesture.pointerType) { clearInterval(g);
                            var b = a.gesture.direction,
                                c = a.gesture.deltaX,
                                d = a.gesture.velocityX,
                                e = a.gesture.velocityY;
                            $curr_slide = i.find(".active"), Math.abs(d) > Math.abs(e) && $curr_slide.velocity({ translateX: c }, { duration: 50, queue: !1, easing: "easeOutQuad" }), 4 === b && (c > h.innerWidth() / 2 || d < -.65) ? n = !0 : 2 === b && (c < -1 * h.innerWidth() / 2 || d > .65) && (m = !0);
                            var f;
                            m && (f = $curr_slide.next(), 0 === f.length && (f = j.first()), f.velocity({ opacity: 1 }, { duration: 300, queue: !1, easing: "easeOutQuad" })), n && (f = $curr_slide.prev(), 0 === f.length && (f = j.last()), f.velocity({ opacity: 1 }, { duration: 300, queue: !1, easing: "easeOutQuad" })) } }).bind("panend", function(a) { "touch" === a.gesture.pointerType && ($curr_slide = i.find(".active"), l = !1, curr_index = i.find(".active").index(), !n && !m || j.length <= 1 ? $curr_slide.velocity({ translateX: 0 }, { duration: 300, queue: !1, easing: "easeOutQuad" }) : m ? (d(curr_index + 1), $curr_slide.velocity({ translateX: -1 * h.innerWidth() }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function() { $curr_slide.velocity({ opacity: 0, translateX: 0 }, { duration: 0, queue: !1 }) } })) : n && (d(curr_index - 1), $curr_slide.velocity({ translateX: h.innerWidth() }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function() { $curr_slide.velocity({ opacity: 0, translateX: 0 }, { duration: 0, queue: !1 }) } })), m = !1, n = !1, clearInterval(g), g = setInterval(function() { k = i.find(".active").index(), j.length == k + 1 ? k = 0 : k += 1, d(k) }, b.transition + b.interval)) }), h.on("sliderPause", function() { clearInterval(g) }), h.on("sliderStart", function() { clearInterval(g), g = setInterval(function() { k = i.find(".active").index(), j.length == k + 1 ? k = 0 : k += 1, d(k) }, b.transition + b.interval) }), h.on("sliderNext", function() { k = i.find(".active").index(), d(k + 1) }), h.on("sliderPrev", function() { k = i.find(".active").index(), d(k - 1) }) }) }, pause: function() { a(this).trigger("sliderPause") }, start: function() { a(this).trigger("sliderStart") }, next: function() { a(this).trigger("sliderNext") }, prev: function() { a(this).trigger("sliderPrev") } };
        a.fn.slider = function(c) {
            return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.tooltip") : b.init.apply(this, arguments) } }(jQuery),
    function(a) { a(document).ready(function() { a(document).on("click.card", ".card", function(b) { a(this).find("> .card-reveal").length && (a(b.target).is(a(".card-reveal .card-title")) || a(b.target).is(a(".card-reveal .card-title i")) ? a(this).find(".card-reveal").velocity({ translateY: 0 }, { duration: 225, queue: !1, easing: "easeInOutQuad", complete: function() { a(this).css({ display: "none" }) } }) : (a(b.target).is(a(".card .activator")) || a(b.target).is(a(".card .activator i"))) && (a(b.target).closest(".card").css("overflow", "hidden"), a(this).find(".card-reveal").css({ display: "block" }).velocity("stop", !1).velocity({ translateY: "-100%" }, { duration: 300, queue: !1, easing: "easeInOutQuad" }))) }) }) }(jQuery),
    function(a) {
        var b = { data: [], placeholder: "", secondaryPlaceholder: "", autocompleteData: {}, autocompleteLimit: 1 / 0 };
        a(document).ready(function() { a(document).on("click", ".chip .close", function(b) {
                var c = a(this).closest(".chips");
                c.attr("data-initialized") || a(this).closest(".chip").remove() }) }), a.fn.material_chip = function(c) {
            var d = this;
            if (this.$el = a(this), this.$document = a(document), this.SELS = { CHIPS: ".chips", CHIP: ".chip", INPUT: "input", DELETE: ".material-icons", SELECTED_CHIP: ".selected" }, "data" === c) return this.$el.data("chips");
            var e = a.extend({}, b, c);
            d.hasAutocomplete = !a.isEmptyObject(e.autocompleteData), this.init = function() {
                var b = 0;
                d.$el.each(function() {
                    var c = a(this),
                        f = Materialize.guid();
                    d.chipId = f, e.data && e.data instanceof Array || (e.data = []), c.data("chips", e.data), c.attr("data-index", b), c.attr("data-initialized", !0), c.hasClass(d.SELS.CHIPS) || c.addClass("chips"), d.chips(c, f), b++ }) }, this.handleEvents = function() {
                var b = d.SELS;
                d.$document.off("click.chips-focus", b.CHIPS).on("click.chips-focus", b.CHIPS, function(c) { a(c.target).find(b.INPUT).focus() }), d.$document.off("click.chips-select", b.CHIP).on("click.chips-select", b.CHIP, function(c) {
                    var e = a(c.target);
                    if (e.length) {
                        var f = e.hasClass("selected"),
                            g = e.closest(b.CHIPS);
                        a(b.CHIP).removeClass("selected"), f || d.selectChip(e.index(), g) } }), d.$document.off("keydown.chips").on("keydown.chips", function(c) {
                    if (!a(c.target).is("input, textarea")) {
                        var e, f = d.$document.find(b.CHIP + b.SELECTED_CHIP),
                            g = f.closest(b.CHIPS),
                            h = f.siblings(b.CHIP).length;
                        if (f.length)
                            if (8 === c.which || 46 === c.which) { c.preventDefault(), e = f.index(), d.deleteChip(e, g);
                                var i = null;
                                e + 1 < h ? i = e : e !== h && e + 1 !== h || (i = h - 1), i < 0 && (i = null), null !== i && d.selectChip(i, g), h || g.find("input").focus() } else if (37 === c.which) {
                            if (e = f.index() - 1, e < 0) return;
                            a(b.CHIP).removeClass("selected"), d.selectChip(e, g) } else if (39 === c.which) {
                            if (e = f.index() + 1, a(b.CHIP).removeClass("selected"), e > h) return void g.find("input").focus();
                            d.selectChip(e, g) } } }), d.$document.off("focusin.chips", b.CHIPS + " " + b.INPUT).on("focusin.chips", b.CHIPS + " " + b.INPUT, function(c) {
                    var d = a(c.target).closest(b.CHIPS);
                    d.addClass("focus"), d.siblings("label, .prefix").addClass("active"), a(b.CHIP).removeClass("selected") }), d.$document.off("focusout.chips", b.CHIPS + " " + b.INPUT).on("focusout.chips", b.CHIPS + " " + b.INPUT, function(c) {
                    var d = a(c.target).closest(b.CHIPS);
                    d.removeClass("focus"), d.data("chips").length || d.siblings("label").removeClass("active"), d.siblings(".prefix").removeClass("active") }), d.$document.off("keydown.chips-add", b.CHIPS + " " + b.INPUT).on("keydown.chips-add", b.CHIPS + " " + b.INPUT, function(c) {
                    var e = a(c.target),
                        f = e.closest(b.CHIPS),
                        g = f.children(b.CHIP).length;
                    if (13 === c.which) {
                        if (d.hasAutocomplete && f.find(".autocomplete-content.dropdown-content").length && f.find(".autocomplete-content.dropdown-content").children().length) return;
                        return c.preventDefault(), d.addChip({ tag: e.val() }, f), void e.val("") }
                    if ((8 === c.keyCode || 37 === c.keyCode) && "" === e.val() && g) return c.preventDefault(), d.selectChip(g - 1, f), void e.blur() }), d.$document.off("click.chips-delete", b.CHIPS + " " + b.DELETE).on("click.chips-delete", b.CHIPS + " " + b.DELETE, function(c) {
                    var e = a(c.target),
                        f = e.closest(b.CHIPS),
                        g = e.closest(b.CHIP);
                    c.stopPropagation(), d.deleteChip(g.index(), f), f.find("input").focus() }) }, this.chips = function(b, c) {
                var f = "";
                b.data("chips").forEach(function(a) { f += d.renderChip(a) }), f += '<input id="' + c + '" class="input" placeholder="">', b.html(f), d.setPlaceholder(b);
                var g = b.next("label");
                g.length && (g.attr("for", c), b.data("chips").length && g.addClass("active"));
                var h = a("#" + c);
                d.hasAutocomplete && h.autocomplete({ data: e.autocompleteData, limit: e.autocompleteLimit, onAutocomplete: function(a) { d.addChip({ tag: a }, b), h.val(""), h.focus() } }) }, this.renderChip = function(a) {
                if (a.tag) {
                    var b = '<div class="chip">' + a.tag;
                    return a.image && (b += ' <img src="' + a.image + '"> '), b += '<i class="material-icons close">close</i>', b += "</div>" } }, this.setPlaceholder = function(a) { a.data("chips").length && e.placeholder ? a.find("input").prop("placeholder", e.placeholder) : !a.data("chips").length && e.secondaryPlaceholder && a.find("input").prop("placeholder", e.secondaryPlaceholder) }, this.isValid = function(a, b) {
                for (var c = a.data("chips"), d = !1, e = 0; e < c.length; e++)
                    if (c[e].tag === b.tag) return void(d = !0);
                return "" !== b.tag && !d }, this.addChip = function(b, c) {
                if (d.isValid(c, b)) {
                    for (var e = d.renderChip(b), f = [], g = c.data("chips"), h = 0; h < g.length; h++) f.push(g[h]);
                    f.push(b), c.data("chips", f), a(e).insertBefore(c.find("input")), c.trigger("chip.add", b), d.setPlaceholder(c) } }, this.deleteChip = function(a, b) {
                var c = b.data("chips")[a];
                b.find(".chip").eq(a).remove();
                for (var e = [], f = b.data("chips"), g = 0; g < f.length; g++) g !== a && e.push(f[g]);
                b.data("chips", e), b.trigger("chip.delete", c), d.setPlaceholder(b) }, this.selectChip = function(a, b) {
                var c = b.find(".chip").eq(a);
                c && !1 === c.hasClass("selected") && (c.addClass("selected"), b.trigger("chip.select", b.data("chips")[a])) }, this.getChipsElement = function(a, b) {
                return b.eq(a) }, this.init(), this.handleEvents() } }(jQuery),
    function(a) { a.fn.pushpin = function(b) {
            var c = { top: 0, bottom: 1 / 0, offset: 0 };
            return "remove" === b ? (this.each(function() {
                (id = a(this).data("pushpin-id")) && (a(window).off("scroll." + id), a(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style")) }), !1) : (b = a.extend(c, b), $index = 0, this.each(function() {
                function c(a) { a.removeClass("pin-top"), a.removeClass("pinned"), a.removeClass("pin-bottom") }

                function d(d, e) { d.each(function() { b.top <= e && b.bottom >= e && !a(this).hasClass("pinned") && (c(a(this)), a(this).css("top", b.offset), a(this).addClass("pinned")), e < b.top && !a(this).hasClass("pin-top") && (c(a(this)), a(this).css("top", 0), a(this).addClass("pin-top")), e > b.bottom && !a(this).hasClass("pin-bottom") && (c(a(this)), a(this).addClass("pin-bottom"), a(this).css("top", b.bottom - g)) }) }
                var e = Materialize.guid(),
                    f = a(this),
                    g = a(this).offset().top;
                a(this).data("pushpin-id", e), d(f, a(window).scrollTop()), a(window).on("scroll." + e, function() {
                    var c = a(window).scrollTop() + b.offset;
                    d(f, c) }) })) } }(jQuery),
    function(a) { a(document).ready(function() { a.fn.reverse = [].reverse, a(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function(c) {
                var d = a(this);
                b(d) }), a(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function(b) {
                var d = a(this);
                c(d) }), a(document).on("click.fabClickToggle", ".fixed-action-btn.click-to-toggle > a", function(d) {
                var e = a(this),
                    f = e.parent();
                f.hasClass("active") ? c(f) : b(f) }), a(document).on("click.fabToolbar", ".fixed-action-btn.toolbar > a", function(b) {
                var c = a(this),
                    e = c.parent();
                d(e) }) }), a.fn.extend({ openFAB: function() { b(a(this)) }, closeFAB: function() { c(a(this)) }, openToolbar: function() { d(a(this)) }, closeToolbar: function() { e(a(this)) } });
        var b = function(b) {
                var c = b;
                if (c.hasClass("active") === !1) {
                    var d, e, f = c.hasClass("horizontal");
                    f === !0 ? e = 40 : d = 40, c.addClass("active"), c.find("ul .btn-floating").velocity({ scaleY: ".4", scaleX: ".4", translateY: d + "px", translateX: e + "px" }, { duration: 0 });
                    var g = 0;
                    c.find("ul .btn-floating").reverse().each(function() { a(this).velocity({ opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: "0" }, { duration: 80, delay: g }), g += 40 }) } },
            c = function(a) {
                var b, c, d = a,
                    e = d.hasClass("horizontal");
                e === !0 ? c = 40 : b = 40, d.removeClass("active");
                d.find("ul .btn-floating").velocity("stop", !0), d.find("ul .btn-floating").velocity({ opacity: "0", scaleX: ".4", scaleY: ".4", translateY: b + "px", translateX: c + "px" }, { duration: 80 }) },
            d = function(b) {
                if ("true" !== b.attr("data-open")) {
                    var c, d, f, g = window.innerWidth,
                        h = window.innerHeight,
                        i = b[0].getBoundingClientRect(),
                        j = b.find("> a").first(),
                        k = b.find("> ul").first(),
                        l = a('<div class="fab-backdrop"></div>'),
                        m = j.css("background-color");
                    j.append(l), c = i.left - g / 2 + i.width / 2, d = h - i.bottom, f = g / l.width(), b.attr("data-origin-bottom", i.bottom), b.attr("data-origin-left", i.left), b.attr("data-origin-width", i.width), b.addClass("active"), b.attr("data-open", !0), b.css({ "text-align": "center", width: "100%", bottom: 0, left: 0, transform: "translateX(" + c + "px)", transition: "none" }), j.css({ transform: "translateY(" + -d + "px)", transition: "none" }), l.css({ "background-color": m }), setTimeout(function() { b.css({ transform: "", transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s" }), j.css({ overflow: "visible", transform: "", transition: "transform .2s" }), setTimeout(function() { b.css({ overflow: "hidden", "background-color": m }), l.css({ transform: "scale(" + f + ")", transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)" }), k.find("> li > a").css({ opacity: 1 }), a(window).on("scroll.fabToolbarClose", function() { e(b), a(window).off("scroll.fabToolbarClose"), a(document).off("click.fabToolbarClose") }), a(document).on("click.fabToolbarClose", function(c) { a(c.target).closest(k).length || (e(b), a(window).off("scroll.fabToolbarClose"), a(document).off("click.fabToolbarClose")) }) }, 100) }, 0) } },
            e = function(a) {
                if ("true" === a.attr("data-open")) {
                    var b, c, d, e = window.innerWidth,
                        f = window.innerHeight,
                        g = a.attr("data-origin-width"),
                        h = a.attr("data-origin-bottom"),
                        i = a.attr("data-origin-left"),
                        j = a.find("> .btn-floating").first(),
                        k = a.find("> ul").first(),
                        l = a.find(".fab-backdrop"),
                        m = j.css("background-color");
                    b = i - e / 2 + g / 2, c = f - h, d = e / l.width(), a.removeClass("active"), a.attr("data-open", !1), a.css({ "background-color": "transparent", transition: "none" }), j.css({ transition: "none" }), l.css({ transform: "scale(0)", "background-color": m }), k.find("> li > a").css({ opacity: "" }), setTimeout(function() { l.remove(), a.css({ "text-align": "", width: "", bottom: "", left: "", overflow: "", "background-color": "", transform: "translate3d(" + -b + "px,0,0)" }), j.css({ overflow: "", transform: "translate3d(0," + c + "px,0)" }), setTimeout(function() { a.css({ transform: "translate3d(0,0,0)", transition: "transform .2s" }), j.css({ transform: "translate3d(0,0,0)", transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)" }) }, 20) }, 200) } } }(jQuery),
    function(a) { Materialize.fadeInImage = function(b) {
            var c;
            if ("string" == typeof b) c = a(b);
            else {
                if ("object" != typeof b) return;
                c = b }
            c.css({ opacity: 0 }), a(c).velocity({ opacity: 1 }, { duration: 650, queue: !1, easing: "easeOutSine" }), a(c).velocity({ opacity: 1 }, { duration: 1300, queue: !1, easing: "swing", step: function(b, c) { c.start = 100;
                    var d = b / 100,
                        e = 150 - (100 - b) / 1.75;
                    e < 100 && (e = 100), b >= 0 && a(this).css({ "-webkit-filter": "grayscale(" + d + ")brightness(" + e + "%)", filter: "grayscale(" + d + ")brightness(" + e + "%)" }) } }) }, Materialize.showStaggeredList = function(b) {
            var c;
            if ("string" == typeof b) c = a(b);
            else {
                if ("object" != typeof b) return;
                c = b }
            var d = 0;
            c.find("li").velocity({ translateX: "-100px" }, { duration: 0 }), c.find("li").each(function() { a(this).velocity({ opacity: "1", translateX: "0" }, { duration: 800, delay: d, easing: [60, 10] }), d += 120 }) }, a(document).ready(function() {
            var b = !1,
                c = !1;
            a(".dismissable").each(function() { a(this).hammer({ prevent_default: !1 }).bind("pan", function(d) {
                    if ("touch" === d.gesture.pointerType) {
                        var e = a(this),
                            f = d.gesture.direction,
                            g = d.gesture.deltaX,
                            h = d.gesture.velocityX;
                        e.velocity({ translateX: g }, { duration: 50, queue: !1, easing: "easeOutQuad" }), 4 === f && (g > e.innerWidth() / 2 || h < -.75) && (b = !0), 2 === f && (g < -1 * e.innerWidth() / 2 || h > .75) && (c = !0) } }).bind("panend", function(d) {
                    if (Math.abs(d.gesture.deltaX) < a(this).innerWidth() / 2 && (c = !1, b = !1), "touch" === d.gesture.pointerType) {
                        var e = a(this);
                        if (b || c) {
                            var f;
                            f = b ? e.innerWidth() : -1 * e.innerWidth(), e.velocity({ translateX: f }, { duration: 100, queue: !1, easing: "easeOutQuad", complete: function() { e.css("border", "none"), e.velocity({ height: 0, padding: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function() { e.remove() } }) } }) } else e.velocity({ translateX: 0 }, { duration: 100, queue: !1, easing: "easeOutQuad" });
                        b = !1, c = !1 } }) }) }) }(jQuery),
    function(a) {
        var b = !1;
        Materialize.scrollFire = function(a) {
            var c = function() {
                    for (var b = window.pageYOffset + window.innerHeight, c = 0; c < a.length; c++) {
                        var d = a[c],
                            e = d.selector,
                            f = d.offset,
                            g = d.callback,
                            h = document.querySelector(e);
                        if (null !== h) {
                            var i = h.getBoundingClientRect().top + window.pageYOffset;
                            if (b > i + f && d.done !== !0) {
                                if ("function" == typeof g) g.call(this, h);
                                else if ("string" == typeof g) {
                                    var j = new Function(g);
                                    j(h) }
                                d.done = !0 } } } },
                d = Materialize.throttle(function() { c() }, a.throttle || 100);
            b || (window.addEventListener("scroll", d), window.addEventListener("resize", d), b = !0), setTimeout(d, 0) } }(jQuery),
    function(a) { "function" == typeof define && define.amd ? define("picker", ["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : this.Picker = a(jQuery) }(function(a) {
        function b(f, g, i, l) {
            function m() {
                return b._.node("div", b._.node("div", b._.node("div", b._.node("div", y.component.nodes(t.open), v.box), v.wrap), v.frame), v.holder) }

            function n() { w.data(g, y).addClass(v.input).attr("tabindex", -1).val(w.data("value") ? y.get("select", u.format) : f.value), u.editable || w.on("focus." + t.id + " click." + t.id, function(a) { a.preventDefault(), y.$root.eq(0).focus() }).on("keydown." + t.id, q), e(f, { haspopup: !0, expanded: !1, readonly: !1, owns: f.id + "_root" }) }

            function o() { y.$root.on({ keydown: q, focusin: function(a) { y.$root.removeClass(v.focused), a.stopPropagation() }, "mousedown click": function(b) {
                        var c = b.target;
                        c != y.$root.children()[0] && (b.stopPropagation(), "mousedown" != b.type || a(c).is("input, select, textarea, button, option") || (b.preventDefault(), y.$root.eq(0).focus())) } }).on({ focus: function() { w.addClass(v.target) }, blur: function() { w.removeClass(v.target) } }).on("focus.toOpen", r).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                    var b = a(this),
                        c = b.data(),
                        d = b.hasClass(v.navDisabled) || b.hasClass(v.disabled),
                        e = h();
                    e = e && (e.type || e.href), (d || e && !a.contains(y.$root[0], e)) && y.$root.eq(0).focus(), !d && c.nav ? y.set("highlight", y.component.item.highlight, { nav: c.nav }) : !d && "pick" in c ? y.set("select", c.pick) : c.clear ? y.clear().close(!0) : c.close && y.close(!0) }), e(y.$root[0], "hidden", !0) }

            function p() {
                var b;
                u.hiddenName === !0 ? (b = f.name, f.name = "") : (b = ["string" == typeof u.hiddenPrefix ? u.hiddenPrefix : "", "string" == typeof u.hiddenSuffix ? u.hiddenSuffix : "_submit"], b = b[0] + f.name + b[1]), y._hidden = a('<input type=hidden name="' + b + '"' + (w.data("value") || f.value ? ' value="' + y.get("select", u.formatSubmit) + '"' : "") + ">")[0], w.on("change." + t.id, function() { y._hidden.value = f.value ? y.get("select", u.formatSubmit) : "" }), u.container ? a(u.container).append(y._hidden) : w.after(y._hidden) }

            function q(a) {
                var b = a.keyCode,
                    c = /^(8|46)$/.test(b);
                return 27 == b ? (y.close(), !1) : void((32 == b || c || !t.open && y.component.key[b]) && (a.preventDefault(), a.stopPropagation(), c ? y.clear().close() : y.open())) }

            function r(a) { a.stopPropagation(), "focus" == a.type && y.$root.addClass(v.focused), y.open() }
            if (!f) return b;
            var s = !1,
                t = { id: f.id || "P" + Math.abs(~~(Math.random() * new Date)) },
                u = i ? a.extend(!0, {}, i.defaults, l) : l || {},
                v = a.extend({}, b.klasses(), u.klass),
                w = a(f),
                x = function() {
                    return this.start() },
                y = x.prototype = { constructor: x, $node: w, start: function() {
                        return t && t.start ? y : (t.methods = {}, t.start = !0, t.open = !1, t.type = f.type, f.autofocus = f == h(), f.readOnly = !u.editable, f.id = f.id || t.id, "text" != f.type && (f.type = "text"), y.component = new i(y, u), y.$root = a(b._.node("div", m(), v.picker, 'id="' + f.id + '_root" tabindex="0"')), o(), u.formatSubmit && p(), n(), u.container ? a(u.container).append(y.$root) : w.after(y.$root), y.on({ start: y.component.onStart, render: y.component.onRender, stop: y.component.onStop, open: y.component.onOpen, close: y.component.onClose, set: y.component.onSet }).on({ start: u.onStart, render: u.onRender, stop: u.onStop, open: u.onOpen, close: u.onClose, set: u.onSet }), s = c(y.$root.children()[0]), f.autofocus && y.open(), y.trigger("start").trigger("render")) }, render: function(a) {
                        return a ? y.$root.html(m()) : y.$root.find("." + v.box).html(y.component.nodes(t.open)), y.trigger("render") }, stop: function() {
                        return t.start ? (y.close(), y._hidden && y._hidden.parentNode.removeChild(y._hidden), y.$root.remove(), w.removeClass(v.input).removeData(g), setTimeout(function() { w.off("." + t.id) }, 0), f.type = t.type, f.readOnly = !1, y.trigger("stop"), t.methods = {}, t.start = !1, y) : y }, open: function(c) {
                        return t.open ? y : (w.addClass(v.active), e(f, "expanded", !0), setTimeout(function() { y.$root.addClass(v.opened), e(y.$root[0], "hidden", !1) }, 0), c !== !1 && (t.open = !0, s && k.css("overflow", "hidden").css("padding-right", "+=" + d()), y.$root.eq(0).focus(), j.on("click." + t.id + " focusin." + t.id, function(a) {
                            var b = a.target;
                            b != f && b != document && 3 != a.which && y.close(b === y.$root.children()[0]) }).on("keydown." + t.id, function(c) {
                            var d = c.keyCode,
                                e = y.component.key[d],
                                f = c.target;
                            27 == d ? y.close(!0) : f != y.$root[0] || !e && 13 != d ? a.contains(y.$root[0], f) && 13 == d && (c.preventDefault(), f.click()) : (c.preventDefault(), e ? b._.trigger(y.component.key.go, y, [b._.trigger(e)]) : y.$root.find("." + v.highlighted).hasClass(v.disabled) || y.set("select", y.component.item.highlight).close()) })), y.trigger("open")) }, close: function(a) {
                        return a && (y.$root.off("focus.toOpen").eq(0).focus(), setTimeout(function() { y.$root.on("focus.toOpen", r) }, 0)), w.removeClass(v.active), e(f, "expanded", !1), setTimeout(function() { y.$root.removeClass(v.opened + " " + v.focused), e(y.$root[0], "hidden", !0) }, 0), t.open ? (t.open = !1, s && k.css("overflow", "").css("padding-right", "-=" + d()), j.off("." + t.id), y.trigger("close")) : y }, clear: function(a) {
                        return y.set("clear", null, a) }, set: function(b, c, d) {
                        var e, f, g = a.isPlainObject(b),
                            h = g ? b : {};
                        if (d = g && a.isPlainObject(c) ? c : d || {}, b) { g || (h[b] = c);
                            for (e in h) f = h[e], e in y.component.item && (void 0 === f && (f = null), y.component.set(e, f, d)), "select" != e && "clear" != e || w.val("clear" == e ? "" : y.get(e, u.format)).trigger("change");
                            y.render() }
                        return d.muted ? y : y.trigger("set", h) }, get: function(a, c) {
                        if (a = a || "value", null != t[a]) return t[a];
                        if ("valueSubmit" == a) {
                            if (y._hidden) return y._hidden.value;
                            a = "value" }
                        if ("value" == a) return f.value;
                        if (a in y.component.item) {
                            if ("string" == typeof c) {
                                var d = y.component.get(a);
                                return d ? b._.trigger(y.component.formats.toString, y.component, [c, d]) : "" }
                            return y.component.get(a) } }, on: function(b, c, d) {
                        var e, f, g = a.isPlainObject(b),
                            h = g ? b : {};
                        if (b) { g || (h[b] = c);
                            for (e in h) f = h[e], d && (e = "_" + e), t.methods[e] = t.methods[e] || [], t.methods[e].push(f) }
                        return y }, off: function() {
                        var a, b, c = arguments;
                        for (a = 0, namesCount = c.length; a < namesCount; a += 1) b = c[a], b in t.methods && delete t.methods[b];
                        return y }, trigger: function(a, c) {
                        var d = function(a) {
                            var d = t.methods[a];
                            d && d.map(function(a) { b._.trigger(a, y, [c]) }) };
                        return d("_" + a), d(a), y } };
            return new x }

        function c(a) {
            var b, c = "position";
            return a.currentStyle ? b = a.currentStyle[c] : window.getComputedStyle && (b = getComputedStyle(a)[c]), "fixed" == b }

        function d() {
            if (k.height() <= i.height()) return 0;
            var b = a('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                c = b[0].offsetWidth;
            b.css("overflow", "scroll");
            var d = a('<div style="width:100%" />').appendTo(b),
                e = d[0].offsetWidth;
            return b.remove(), c - e }

        function e(b, c, d) {
            if (a.isPlainObject(c))
                for (var e in c) f(b, e, c[e]);
            else f(b, c, d) }

        function f(a, b, c) { a.setAttribute(("role" == b ? "" : "aria-") + b, c) }

        function g(b, c) { a.isPlainObject(b) || (b = { attribute: c }), c = "";
            for (var d in b) {
                var e = ("role" == d ? "" : "aria-") + d,
                    f = b[d];
                c += null == f ? "" : e + '="' + b[d] + '"' }
            return c }

        function h() {
            try {
                return document.activeElement } catch (a) {} }
        var i = a(window),
            j = a(document),
            k = a(document.documentElement);
        return b.klasses = function(a) {
            return a = a || "picker", { picker: a, opened: a + "--opened", focused: a + "--focused", input: a + "__input", active: a + "__input--active", target: a + "__input--target", holder: a + "__holder", frame: a + "__frame", wrap: a + "__wrap", box: a + "__box" } }, b._ = { group: function(a) {
                for (var c, d = "", e = b._.trigger(a.min, a); e <= b._.trigger(a.max, a, [e]); e += a.i) c = b._.trigger(a.item, a, [e]), d += b._.node(a.node, c[0], c[1], c[2]);
                return d }, node: function(b, c, d, e) {
                return c ? (c = a.isArray(c) ? c.join("") : c, d = d ? ' class="' + d + '"' : "", e = e ? " " + e : "", "<" + b + d + e + ">" + c + "</" + b + ">") : "" }, lead: function(a) {
                return (a < 10 ? "0" : "") + a }, trigger: function(a, b, c) {
                return "function" == typeof a ? a.apply(b, c || []) : a }, digits: function(a) {
                return /\d/.test(a[1]) ? 2 : 1 }, isDate: function(a) {
                return {}.toString.call(a).indexOf("Date") > -1 && this.isInteger(a.getDate()) }, isInteger: function(a) {
                return {}.toString.call(a).indexOf("Number") > -1 && a % 1 === 0 }, ariaAttr: g }, b.extend = function(c, d) { a.fn[c] = function(e, f) {
                var g = this.data(c);
                return "picker" == e ? g : g && "string" == typeof e ? b._.trigger(g[e], g, [f]) : this.each(function() {
                    var f = a(this);
                    f.data(c) || new b(this, c, d, e) }) }, a.fn[c].defaults = d.defaults }, b }),
    function(a) { "function" == typeof define && define.amd ? define(["picker", "jquery"], a) : "object" == typeof exports ? module.exports = a(require("./picker.js"), require("jquery")) : a(Picker, jQuery) }(function(a, b) {
        function c(a, b) {
            var c = this,
                d = a.$node[0],
                e = d.value,
                f = a.$node.data("value"),
                g = f || e,
                h = f ? b.formatSubmit : b.format,
                i = function() {
                    return d.currentStyle ? "rtl" == d.currentStyle.direction : "rtl" == getComputedStyle(a.$root[0]).direction };
            c.settings = b, c.$node = a.$node, c.queue = { min: "measure create", max: "measure create", now: "now create", select: "parse create validate", highlight: "parse navigate create validate", view: "parse create validate viewset", disable: "deactivate", enable: "activate" }, c.item = {}, c.item.clear = null, c.item.disable = (b.disable || []).slice(0), c.item.enable = - function(a) {
                return a[0] === !0 ? a.shift() : -1 }(c.item.disable), c.set("min", b.min).set("max", b.max).set("now"), g ? c.set("select", g, { format: h }) : c.set("select", null).set("highlight", c.item.now), c.key = { 40: 7, 38: -7, 39: function() {
                    return i() ? -1 : 1 }, 37: function() {
                    return i() ? 1 : -1 }, go: function(a) {
                    var b = c.item.highlight,
                        d = new Date(b.year, b.month, b.date + a);
                    c.set("highlight", d, { interval: a }), this.render() } }, a.on("render", function() { a.$root.find("." + b.klass.selectMonth).on("change", function() {
                    var c = this.value;
                    c && (a.set("highlight", [a.get("view").year, c, a.get("highlight").date]), a.$root.find("." + b.klass.selectMonth).trigger("focus")) }), a.$root.find("." + b.klass.selectYear).on("change", function() {
                    var c = this.value;
                    c && (a.set("highlight", [c, a.get("view").month, a.get("highlight").date]), a.$root.find("." + b.klass.selectYear).trigger("focus")) }) }, 1).on("open", function() {
                var d = "";
                c.disabled(c.get("now")) && (d = ":not(." + b.klass.buttonToday + ")"), a.$root.find("button" + d + ", select").attr("disabled", !1) }, 1).on("close", function() { a.$root.find("button, select").attr("disabled", !0) }, 1) }
        var d = 7,
            e = 6,
            f = a._;
        c.prototype.set = function(a, b, c) {
            var d = this,
                e = d.item;
            return null === b ? ("clear" == a && (a = "select"), e[a] = b, d) : (e["enable" == a ? "disable" : "flip" == a ? "enable" : a] = d.queue[a].split(" ").map(function(e) {
                return b = d[e](a, b, c) }).pop(), "select" == a ? d.set("highlight", e.select, c) : "highlight" == a ? d.set("view", e.highlight, c) : a.match(/^(flip|min|max|disable|enable)$/) && (e.select && d.disabled(e.select) && d.set("select", e.select, c), e.highlight && d.disabled(e.highlight) && d.set("highlight", e.highlight, c)), d) }, c.prototype.get = function(a) {
            return this.item[a] }, c.prototype.create = function(a, c, d) {
            var e, g = this;
            return c = void 0 === c ? a : c,
                c == -(1 / 0) || c == 1 / 0 ? e = c : b.isPlainObject(c) && f.isInteger(c.pick) ? c = c.obj : b.isArray(c) ? (c = new Date(c[0], c[1], c[2]), c = f.isDate(c) ? c : g.create().obj) : c = f.isInteger(c) || f.isDate(c) ? g.normalize(new Date(c), d) : g.now(a, c, d), { year: e || c.getFullYear(), month: e || c.getMonth(), date: e || c.getDate(), day: e || c.getDay(), obj: e || c, pick: e || c.getTime() }
        }, c.prototype.createRange = function(a, c) {
            var d = this,
                e = function(a) {
                    return a === !0 || b.isArray(a) || f.isDate(a) ? d.create(a) : a };
            return f.isInteger(a) || (a = e(a)), f.isInteger(c) || (c = e(c)), f.isInteger(a) && b.isPlainObject(c) ? a = [c.year, c.month, c.date + a] : f.isInteger(c) && b.isPlainObject(a) && (c = [a.year, a.month, a.date + c]), { from: e(a), to: e(c) } }, c.prototype.withinRange = function(a, b) {
            return a = this.createRange(a.from, a.to), b.pick >= a.from.pick && b.pick <= a.to.pick }, c.prototype.overlapRanges = function(a, b) {
            var c = this;
            return a = c.createRange(a.from, a.to), b = c.createRange(b.from, b.to), c.withinRange(a, b.from) || c.withinRange(a, b.to) || c.withinRange(b, a.from) || c.withinRange(b, a.to) }, c.prototype.now = function(a, b, c) {
            return b = new Date, c && c.rel && b.setDate(b.getDate() + c.rel), this.normalize(b, c) }, c.prototype.navigate = function(a, c, d) {
            var e, f, g, h, i = b.isArray(c),
                j = b.isPlainObject(c),
                k = this.item.view;
            if (i || j) {
                for (j ? (f = c.year, g = c.month, h = c.date) : (f = +c[0], g = +c[1], h = +c[2]), d && d.nav && k && k.month !== g && (f = k.year, g = k.month), e = new Date(f, g + (d && d.nav ? d.nav : 0), 1), f = e.getFullYear(), g = e.getMonth(); new Date(f, g, h).getMonth() !== g;) h -= 1;
                c = [f, g, h] }
            return c }, c.prototype.normalize = function(a) {
            return a.setHours(0, 0, 0, 0), a }, c.prototype.measure = function(a, b) {
            var c = this;
            return b ? "string" == typeof b ? b = c.parse(a, b) : f.isInteger(b) && (b = c.now(a, b, { rel: b })) : b = "min" == a ? -(1 / 0) : 1 / 0, b }, c.prototype.viewset = function(a, b) {
            return this.create([b.year, b.month, 1]) }, c.prototype.validate = function(a, c, d) {
            var e, g, h, i, j = this,
                k = c,
                l = d && d.interval ? d.interval : 1,
                m = j.item.enable === -1,
                n = j.item.min,
                o = j.item.max,
                p = m && j.item.disable.filter(function(a) {
                    if (b.isArray(a)) {
                        var d = j.create(a).pick;
                        d < c.pick ? e = !0 : d > c.pick && (g = !0) }
                    return f.isInteger(a) }).length;
            if ((!d || !d.nav) && (!m && j.disabled(c) || m && j.disabled(c) && (p || e || g) || !m && (c.pick <= n.pick || c.pick >= o.pick)))
                for (m && !p && (!g && l > 0 || !e && l < 0) && (l *= -1); j.disabled(c) && (Math.abs(l) > 1 && (c.month < k.month || c.month > k.month) && (c = k, l = l > 0 ? 1 : -1), c.pick <= n.pick ? (h = !0, l = 1, c = j.create([n.year, n.month, n.date + (c.pick === n.pick ? 0 : -1)])) : c.pick >= o.pick && (i = !0, l = -1, c = j.create([o.year, o.month, o.date + (c.pick === o.pick ? 0 : 1)])), !h || !i);) c = j.create([c.year, c.month, c.date + l]);
            return c }, c.prototype.disabled = function(a) {
            var c = this,
                d = c.item.disable.filter(function(d) {
                    return f.isInteger(d) ? a.day === (c.settings.firstDay ? d : d - 1) % 7 : b.isArray(d) || f.isDate(d) ? a.pick === c.create(d).pick : b.isPlainObject(d) ? c.withinRange(d, a) : void 0 });
            return d = d.length && !d.filter(function(a) {
                return b.isArray(a) && "inverted" == a[3] || b.isPlainObject(a) && a.inverted }).length, c.item.enable === -1 ? !d : d || a.pick < c.item.min.pick || a.pick > c.item.max.pick }, c.prototype.parse = function(a, b, c) {
            var d = this,
                e = {};
            return b && "string" == typeof b ? (c && c.format || (c = c || {}, c.format = d.settings.format), d.formats.toArray(c.format).map(function(a) {
                var c = d.formats[a],
                    g = c ? f.trigger(c, d, [b, e]) : a.replace(/^!/, "").length;
                c && (e[a] = b.substr(0, g)), b = b.substr(g) }), [e.yyyy || e.yy, +(e.mm || e.m) - 1, e.dd || e.d]) : b }, c.prototype.formats = function() {
            function a(a, b, c) {
                var d = a.match(/\w+/)[0];
                return c.mm || c.m || (c.m = b.indexOf(d) + 1), d.length }

            function b(a) {
                return a.match(/\w+/)[0].length }
            return { d: function(a, b) {
                    return a ? f.digits(a) : b.date }, dd: function(a, b) {
                    return a ? 2 : f.lead(b.date) }, ddd: function(a, c) {
                    return a ? b(a) : this.settings.weekdaysShort[c.day] }, dddd: function(a, c) {
                    return a ? b(a) : this.settings.weekdaysFull[c.day] }, m: function(a, b) {
                    return a ? f.digits(a) : b.month + 1 }, mm: function(a, b) {
                    return a ? 2 : f.lead(b.month + 1) }, mmm: function(b, c) {
                    var d = this.settings.monthsShort;
                    return b ? a(b, d, c) : d[c.month] }, mmmm: function(b, c) {
                    var d = this.settings.monthsFull;
                    return b ? a(b, d, c) : d[c.month] }, yy: function(a, b) {
                    return a ? 2 : ("" + b.year).slice(2) }, yyyy: function(a, b) {
                    return a ? 4 : b.year }, toArray: function(a) {
                    return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g) }, toString: function(a, b) {
                    var c = this;
                    return c.formats.toArray(a).map(function(a) {
                        return f.trigger(c.formats[a], c, [0, b]) || a.replace(/^!/, "") }).join("") } } }(), c.prototype.isDateExact = function(a, c) {
            var d = this;
            return f.isInteger(a) && f.isInteger(c) || "boolean" == typeof a && "boolean" == typeof c ? a === c : (f.isDate(a) || b.isArray(a)) && (f.isDate(c) || b.isArray(c)) ? d.create(a).pick === d.create(c).pick : !(!b.isPlainObject(a) || !b.isPlainObject(c)) && (d.isDateExact(a.from, c.from) && d.isDateExact(a.to, c.to)) }, c.prototype.isDateOverlap = function(a, c) {
            var d = this,
                e = d.settings.firstDay ? 1 : 0;
            return f.isInteger(a) && (f.isDate(c) || b.isArray(c)) ? (a = a % 7 + e, a === d.create(c).day + 1) : f.isInteger(c) && (f.isDate(a) || b.isArray(a)) ? (c = c % 7 + e, c === d.create(a).day + 1) : !(!b.isPlainObject(a) || !b.isPlainObject(c)) && d.overlapRanges(a, c) }, c.prototype.flipEnable = function(a) {
            var b = this.item;
            b.enable = a || (b.enable == -1 ? 1 : -1) }, c.prototype.deactivate = function(a, c) {
            var d = this,
                e = d.item.disable.slice(0);
            return "flip" == c ? d.flipEnable() : c === !1 ? (d.flipEnable(1), e = []) : c === !0 ? (d.flipEnable(-1), e = []) : c.map(function(a) {
                for (var c, g = 0; g < e.length; g += 1)
                    if (d.isDateExact(a, e[g])) { c = !0;
                        break }
                c || (f.isInteger(a) || f.isDate(a) || b.isArray(a) || b.isPlainObject(a) && a.from && a.to) && e.push(a) }), e }, c.prototype.activate = function(a, c) {
            var d = this,
                e = d.item.disable,
                g = e.length;
            return "flip" == c ? d.flipEnable() : c === !0 ? (d.flipEnable(1), e = []) : c === !1 ? (d.flipEnable(-1), e = []) : c.map(function(a) {
                var c, h, i, j;
                for (i = 0; i < g; i += 1) {
                    if (h = e[i], d.isDateExact(h, a)) { c = e[i] = null, j = !0;
                        break }
                    if (d.isDateOverlap(h, a)) { b.isPlainObject(a) ? (a.inverted = !0, c = a) : b.isArray(a) ? (c = a, c[3] || c.push("inverted")) : f.isDate(a) && (c = [a.getFullYear(), a.getMonth(), a.getDate(), "inverted"]);
                        break } }
                if (c)
                    for (i = 0; i < g; i += 1)
                        if (d.isDateExact(e[i], a)) { e[i] = null;
                            break }
                if (j)
                    for (i = 0; i < g; i += 1)
                        if (d.isDateOverlap(e[i], a)) { e[i] = null;
                            break }
                c && e.push(c) }), e.filter(function(a) {
                return null != a }) }, c.prototype.nodes = function(a) {
            var b = this,
                c = b.settings,
                g = b.item,
                h = g.now,
                i = g.select,
                j = g.highlight,
                k = g.view,
                l = g.disable,
                m = g.min,
                n = g.max,
                o = function(a, b) {
                    return c.firstDay && (a.push(a.shift()), b.push(b.shift())), f.node("thead", f.node("tr", f.group({ min: 0, max: d - 1, i: 1, node: "th", item: function(d) {
                            return [a[d], c.klass.weekdays, 'scope=col title="' + b[d] + '"'] } }))) }((c.showWeekdaysFull ? c.weekdaysFull : c.weekdaysLetter).slice(0), c.weekdaysFull.slice(0)),
                p = function(a) {
                    return f.node("div", " ", c.klass["nav" + (a ? "Next" : "Prev")] + (a && k.year >= n.year && k.month >= n.month || !a && k.year <= m.year && k.month <= m.month ? " " + c.klass.navDisabled : ""), "data-nav=" + (a || -1) + " " + f.ariaAttr({ role: "button", controls: b.$node[0].id + "_table" }) + ' title="' + (a ? c.labelMonthNext : c.labelMonthPrev) + '"') },
                q = function(d) {
                    var e = c.showMonthsShort ? c.monthsShort : c.monthsFull;
                    return "short_months" == d && (e = c.monthsShort), c.selectMonths && void 0 == d ? f.node("select", f.group({ min: 0, max: 11, i: 1, node: "option", item: function(a) {
                            return [e[a], 0, "value=" + a + (k.month == a ? " selected" : "") + (k.year == m.year && a < m.month || k.year == n.year && a > n.month ? " disabled" : "")] } }), c.klass.selectMonth + " browser-default", (a ? "" : "disabled") + " " + f.ariaAttr({ controls: b.$node[0].id + "_table" }) + ' title="' + c.labelMonthSelect + '"') : "short_months" == d ? null != i ? f.node("div", e[i.month]) : f.node("div", e[k.month]) : f.node("div", e[k.month], c.klass.month) },
                r = function(d) {
                    var e = k.year,
                        g = c.selectYears === !0 ? 5 : ~~(c.selectYears / 2);
                    if (g) {
                        var h = m.year,
                            i = n.year,
                            j = e - g,
                            l = e + g;
                        if (h > j && (l += h - j, j = h), i < l) {
                            var o = j - h,
                                p = l - i;
                            j -= o > p ? p : o, l = i }
                        if (c.selectYears && void 0 == d) return f.node("select", f.group({ min: j, max: l, i: 1, node: "option", item: function(a) {
                                return [a, 0, "value=" + a + (e == a ? " selected" : "")] } }), c.klass.selectYear + " browser-default", (a ? "" : "disabled") + " " + f.ariaAttr({ controls: b.$node[0].id + "_table" }) + ' title="' + c.labelYearSelect + '"') }
                    return "raw" == d ? f.node("div", e) : f.node("div", e, c.klass.year) };
            return createDayLabel = function() {
                return null != i ? f.node("div", i.date) : f.node("div", h.date) }, createWeekdayLabel = function() {
                var a;
                a = null != i ? i.day : h.day;
                var b = c.weekdaysFull[a];
                return b }, f.node("div", f.node("div", createWeekdayLabel(), "picker__weekday-display") + f.node("div", q("short_months"), c.klass.month_display) + f.node("div", createDayLabel(), c.klass.day_display) + f.node("div", r("raw"), c.klass.year_display), c.klass.date_display) + f.node("div", f.node("div", (c.selectYears ? q() + r() : q() + r()) + p() + p(1), c.klass.header) + f.node("table", o + f.node("tbody", f.group({ min: 0, max: e - 1, i: 1, node: "tr", item: function(a) {
                    var e = c.firstDay && 0 === b.create([k.year, k.month, 1]).day ? -7 : 0;
                    return [f.group({ min: d * a - k.day + e + 1, max: function() {
                            return this.min + d - 1 }, i: 1, node: "td", item: function(a) { a = b.create([k.year, k.month, a + (c.firstDay ? 1 : 0)]);
                            var d = i && i.pick == a.pick,
                                e = j && j.pick == a.pick,
                                g = l && b.disabled(a) || a.pick < m.pick || a.pick > n.pick,
                                o = f.trigger(b.formats.toString, b, [c.format, a]);
                            return [f.node("div", a.date, function(b) {
                                return b.push(k.month == a.month ? c.klass.infocus : c.klass.outfocus), h.pick == a.pick && b.push(c.klass.now), d && b.push(c.klass.selected), e && b.push(c.klass.highlighted), g && b.push(c.klass.disabled), b.join(" ") }([c.klass.day]), "data-pick=" + a.pick + " " + f.ariaAttr({ role: "gridcell", label: o, selected: !(!d || b.$node.val() !== o) || null, activedescendant: !!e || null, disabled: !!g || null })), "", f.ariaAttr({ role: "presentation" })] } })] } })), c.klass.table, 'id="' + b.$node[0].id + '_table" ' + f.ariaAttr({ role: "grid", controls: b.$node[0].id, readonly: !0 })), c.klass.calendar_container) + f.node("div", f.node("button", c.today, "btn-flat picker__today", "type=button data-pick=" + h.pick + (a && !b.disabled(h) ? "" : " disabled") + " " + f.ariaAttr({ controls: b.$node[0].id })) + f.node("button", c.clear, "btn-flat picker__clear", "type=button data-clear=1" + (a ? "" : " disabled") + " " + f.ariaAttr({ controls: b.$node[0].id })) + f.node("button", c.close, "btn-flat picker__close", "type=button data-close=true " + (a ? "" : " disabled") + " " + f.ariaAttr({ controls: b.$node[0].id })), c.klass.footer) }, c.defaults = function(a) {
            return { labelMonthNext: "Next month", labelMonthPrev: "Previous month", labelMonthSelect: "Select a month", labelYearSelect: "Select a year", monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"], today: "Today", clear: "Clear", close: "Close", format: "d mmmm, yyyy", klass: { table: a + "table", header: a + "header", date_display: a + "date-display", day_display: a + "day-display", month_display: a + "month-display", year_display: a + "year-display", calendar_container: a + "calendar-container", navPrev: a + "nav--prev", navNext: a + "nav--next", navDisabled: a + "nav--disabled", month: a + "month", year: a + "year", selectMonth: a + "select--month", selectYear: a + "select--year", weekdays: a + "weekday", day: a + "day", disabled: a + "day--disabled", selected: a + "day--selected", highlighted: a + "day--highlighted", now: a + "day--today", infocus: a + "day--infocus", outfocus: a + "day--outfocus", footer: a + "footer", buttonClear: a + "button--clear", buttonToday: a + "button--today", buttonClose: a + "button--close" } } }(a.klasses().picker + "__"), a.extend("pickadate", c)
    }),
    function(a) {
        function b() {
            var b = +a(this).attr("data-length"),
                c = +a(this).val().length,
                d = c <= b;
            a(this).parent().find('span[class="character-counter"]').html(c + "/" + b), e(d, a(this)) }

        function c(b) {
            var c = b.parent().find('span[class="character-counter"]');
            c.length || (c = a("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), b.parent().append(c)) }

        function d() { a(this).parent().find('span[class="character-counter"]').html("") }

        function e(a, b) {
            var c = b.hasClass("invalid");
            a && c ? b.removeClass("invalid") : a || c || (b.removeClass("valid"), b.addClass("invalid")) }
        a.fn.characterCounter = function() {
            return this.each(function() {
                var e = a(this),
                    f = e.parent().find('span[class="character-counter"]');
                if (!f.length) {
                    var g = void 0 !== e.attr("data-length");
                    g && (e.on("input", b), e.on("focus", b), e.on("blur", d), c(e)) } }) }, a(document).ready(function() { a("input, textarea").characterCounter() }) }(jQuery),
    function(a) {
        var b = { init: function(b) {
                var c = { duration: 200, dist: -100, shift: 0, padding: 0, fullWidth: !1, indicators: !1, noWrap: !1, onCycleTo: null };
                return b = a.extend(c, b), this.each(function() {
                    function c() { "undefined" != typeof window.ontouchstart && (J[0].addEventListener("touchstart", l), J[0].addEventListener("touchmove", m), J[0].addEventListener("touchend", n)), J[0].addEventListener("mousedown", l), J[0].addEventListener("mousemove", m), J[0].addEventListener("mouseup", n), J[0].addEventListener("mouseleave", n), J[0].addEventListener("click", j) }

                    function d(a) {
                        return a.targetTouches && a.targetTouches.length >= 1 ? a.targetTouches[0].clientX : a.clientX }

                    function e(a) {
                        return a.targetTouches && a.targetTouches.length >= 1 ? a.targetTouches[0].clientY : a.clientY }

                    function f(a) {
                        return a >= v ? a % v : a < 0 ? f(v + a % v) : a }

                    function g(c) {
                        var d, e, g, h, i, j, k, l = s;
                        if (r = "number" == typeof c ? c : r, s = Math.floor((r + u / 2) / u), g = r - s * u, h = g < 0 ? 1 : -1, i = -h * g * 2 / u, e = v >> 1, b.fullWidth ? k = "translateX(0)" : (k = "translateX(" + (J[0].clientWidth - p) / 2 + "px) ", k += "translateY(" + (J[0].clientHeight - q) / 2 + "px)"), K) {
                            var m = s % v,
                                n = I.find(".indicator-item.active");
                            n.index() !== m && (n.removeClass("active"), I.find(".indicator-item").eq(m).addClass("active")) }
                        for ((!b.noWrap || s >= 0 && s < v) && (j = o[f(s)], a(j).hasClass("active") || (J.find(".carousel-item").removeClass("active"), a(j).addClass("active")), j.style[C] = k + " translateX(" + -g / 2 + "px) translateX(" + h * b.shift * i * d + "px) translateZ(" + b.dist * i + "px)", j.style.zIndex = 0, b.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * i, j.style.opacity = tweenedOpacity, j.style.display = "block"), d = 1; d <= e; ++d) b.fullWidth ? (zTranslation = b.dist, tweenedOpacity = d === e && g < 0 ? 1 - i : 1) : (zTranslation = b.dist * (2 * d + i * h), tweenedOpacity = 1 - .2 * (2 * d + i * h)), (!b.noWrap || s + d < v) && (j = o[f(s + d)], j.style[C] = k + " translateX(" + (b.shift + (u * d - g) / 2) + "px) translateZ(" + zTranslation + "px)", j.style.zIndex = -d, j.style.opacity = tweenedOpacity, j.style.display = "block"), b.fullWidth ? (zTranslation = b.dist, tweenedOpacity = d === e && g > 0 ? 1 - i : 1) : (zTranslation = b.dist * (2 * d - i * h), tweenedOpacity = 1 - .2 * (2 * d - i * h)), (!b.noWrap || s - d >= 0) && (j = o[f(s - d)], j.style[C] = k + " translateX(" + (-b.shift + (-u * d - g) / 2) + "px) translateZ(" + zTranslation + "px)", j.style.zIndex = -d, j.style.opacity = tweenedOpacity, j.style.display = "block");
                        if ((!b.noWrap || s >= 0 && s < v) && (j = o[f(s)], j.style[C] = k + " translateX(" + -g / 2 + "px) translateX(" + h * b.shift * i + "px) translateZ(" + b.dist * i + "px)", j.style.zIndex = 0, b.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * i, j.style.opacity = tweenedOpacity, j.style.display = "block"), l !== s && "function" == typeof b.onCycleTo) {
                            var t = J.find(".carousel-item").eq(f(s));
                            b.onCycleTo.call(this, t, G) } }

                    function h() {
                        var a, b, c, d;
                        a = Date.now(), b = a - E, E = a, c = r - D, D = r, d = 1e3 * c / (1 + b), B = .8 * d + .2 * B }

                    function i() {
                        var a, c;
                        z && (a = Date.now() - E, c = z * Math.exp(-a / b.duration), c > 2 || c < -2 ? (g(A - c), requestAnimationFrame(i)) : g(A)) }

                    function j(c) {
                        if (G) return c.preventDefault(), c.stopPropagation(), !1;
                        if (!b.fullWidth) {
                            var d = a(c.target).closest(".carousel-item").index(),
                                e = s % v - d;
                            0 !== e && (c.preventDefault(), c.stopPropagation()), k(d) } }

                    function k(a) {
                        var c = s % v - a;
                        b.noWrap || (c < 0 ? Math.abs(c + v) < Math.abs(c) && (c += v) : c > 0 && Math.abs(c - v) < c && (c -= v)), c < 0 ? J.trigger("carouselNext", [Math.abs(c)]) : c > 0 && J.trigger("carouselPrev", [c]) }

                    function l(a) { t = !0, G = !1, H = !1, w = d(a), x = e(a), B = z = 0, D = r, E = Date.now(), clearInterval(F), F = setInterval(h, 100) }

                    function m(a) {
                        var b, c, f;
                        if (t)
                            if (b = d(a), y = e(a), c = w - b, f = Math.abs(x - y), f < 30 && !H)(c > 2 || c < -2) && (G = !0, w = b, g(r + c));
                            else {
                                if (G) return a.preventDefault(), a.stopPropagation(), !1;
                                H = !0 }
                        if (G) return a.preventDefault(), a.stopPropagation(), !1 }

                    function n(a) {
                        if (t) return t = !1, clearInterval(F), A = r, (B > 10 || B < -10) && (z = .9 * B, A = r + z), A = Math.round(A / u) * u, b.noWrap && (A >= u * (v - 1) ? A = u * (v - 1) : A < 0 && (A = 0)), z = A - r, E = Date.now(), requestAnimationFrame(i), G && (a.preventDefault(), a.stopPropagation()), !1 }
                    var o, p, q, r, s, t, u, v, w, x, z, A, B, C, D, E, F, G, H, I = a('<ul class="indicators"></ul>'),
                        J = a(this),
                        K = J.attr("data-indicators") || b.indicators;
                    if (J.hasClass("initialized")) return a(this).trigger("carouselNext", [1e-6]), !0;
                    if (b.fullWidth) { b.dist = 0;
                        var L = J.find(".carousel-item img").first();
                        L.length ? imageHeight = L.on("load", function() { J.css("height", a(this).height()) }) : (imageHeight = J.find(".carousel-item").first().height(), J.css("height", imageHeight)), K && J.find(".carousel-fixed-item").addClass("with-indicators") }
                    J.addClass("initialized"), t = !1, r = A = 0, o = [], p = J.find(".carousel-item").first().innerWidth(), q = J.find(".carousel-item").first().innerHeight(), u = 2 * p + b.padding, J.find(".carousel-item").each(function(b) {
                        if (o.push(a(this)[0]), K) {
                            var c = a('<li class="indicator-item"></li>');
                            0 === b && c.addClass("active"), c.click(function(b) { b.stopPropagation();
                                var c = a(this).index();
                                k(c) }), I.append(c) } }), K && J.append(I), v = o.length, C = "transform", ["webkit", "Moz", "O", "ms"].every(function(a) {
                        var b = a + "Transform";
                        return "undefined" == typeof document.body.style[b] || (C = b, !1) }), a(window).on("resize.carousel", function() { b.fullWidth ? (p = J.find(".carousel-item").first().innerWidth(), q = J.find(".carousel-item").first().innerHeight(), u = 2 * p + b.padding, r = 2 * s * p, A = r) : g() }), c(), g(r), a(this).on("carouselNext", function(a, b) { void 0 === b && (b = 1), A = u * Math.round(r / u) + u * b, r !== A && (z = A - r, E = Date.now(), requestAnimationFrame(i)) }), a(this).on("carouselPrev", function(a, b) { void 0 === b && (b = 1), A = u * Math.round(r / u) - u * b, r !== A && (z = A - r, E = Date.now(), requestAnimationFrame(i)) }), a(this).on("carouselSet", function(a, b) { void 0 === b && (b = 0), k(b) }) }) }, next: function(b) { a(this).trigger("carouselNext", [b]) }, prev: function(b) { a(this).trigger("carouselPrev", [b]) }, set: function(b) { a(this).trigger("carouselSet", [b]) } };
        a.fn.carousel = function(c) {
            return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.carousel") : b.init.apply(this, arguments) } }(jQuery);
