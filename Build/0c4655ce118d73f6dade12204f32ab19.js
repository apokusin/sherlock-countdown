! function(e, t) {
    function n(e) { var t = ht[e] = {}; return G.each(e.split(tt), function(e, n) { t[n] = !0 }), t }

    function r(e, n, r) { if (r === t && 1 === e.nodeType) { var i = "data-" + n.replace(mt, "-$1").toLowerCase(); if (r = e.getAttribute(i), "string" == typeof r) { try { r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : gt.test(r) ? G.parseJSON(r) : r } catch (o) {} G.data(e, n, r) } else r = t } return r }

    function i(e) { var t; for (t in e)
            if (("data" !== t || !G.isEmptyObject(e[t])) && "toJSON" !== t) return !1; return !0 }

    function o() { return !1 }

    function a() { return !0 }

    function s(e) { return !e || !e.parentNode || 11 === e.parentNode.nodeType }

    function l(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e }

    function u(e, t, n) { if (t = t || 0, G.isFunction(t)) return G.grep(e, function(e, r) { var i = !!t.call(e, r, e); return i === n }); if (t.nodeType) return G.grep(e, function(e) { return e === t === n }); if ("string" == typeof t) { var r = G.grep(e, function(e) { return 1 === e.nodeType }); if ($t.test(t)) return G.filter(t, r, !n);
            t = G.filter(t, r) } return G.grep(e, function(e) { return G.inArray(e, t) >= 0 === n }) }

    function c(e) { var t = qt.split("|"),
            n = e.createDocumentFragment(); if (n.createElement)
            for (; t.length;) n.createElement(t.pop()); return n }

    function f(e, t) { return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t)) }

    function p(e, t) { if (1 === t.nodeType && G.hasData(e)) { var n, r, i, o = G._data(e),
                a = G._data(t, o),
                s = o.events; if (s) { delete a.handle, a.events = {}; for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) G.event.add(t, n, s[n][r]) } a.data && (a.data = G.extend({}, a.data)) } }

    function d(e, t) { var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), G.support.html5Clone && e.innerHTML && !G.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Kt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(G.expando)) }

    function h(e) { return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : [] }

    function g(e) { Kt.test(e.type) && (e.defaultChecked = e.checked) }

    function m(e, t) { if (t in e) return t; for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = vn.length; i--;)
            if (t = vn[i] + n, t in e) return t; return r }

    function y(e, t) { return e = t || e, "none" === G.css(e, "display") || !G.contains(e.ownerDocument, e) }

    function v(e, t) { for (var n, r, i = [], o = 0, a = e.length; a > o; o++) n = e[o], n.style && (i[o] = G._data(n, "olddisplay"), t ? (!i[o] && "none" === n.style.display && (n.style.display = ""), "" === n.style.display && y(n) && (i[o] = G._data(n, "olddisplay", _(n.nodeName)))) : (r = nn(n, "display"), !i[o] && "none" !== r && G._data(n, "olddisplay", r))); for (o = 0; a > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? i[o] || "" : "none")); return e }

    function b(e, t, n) { var r = fn.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t }

    function w(e, t, n, r) { for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > i; i += 2) "margin" === n && (o += G.css(e, n + yn[i], !0)), r ? ("content" === n && (o -= parseFloat(nn(e, "padding" + yn[i])) || 0), "margin" !== n && (o -= parseFloat(nn(e, "border" + yn[i] + "Width")) || 0)) : (o += parseFloat(nn(e, "padding" + yn[i])) || 0, "padding" !== n && (o += parseFloat(nn(e, "border" + yn[i] + "Width")) || 0)); return o }

    function x(e, t, n) { var r = "width" === t ? e.offsetWidth : e.offsetHeight,
            i = !0,
            o = G.support.boxSizing && "border-box" === G.css(e, "boxSizing"); if (0 >= r || null == r) { if (r = nn(e, t), (0 > r || null == r) && (r = e.style[t]), pn.test(r)) return r;
            i = o && (G.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0 } return r + w(e, t, n || (o ? "border" : "content"), i) + "px" }

    function _(e) { if (hn[e]) return hn[e]; var t = G("<" + e + ">").appendTo(I.body),
            n = t.css("display"); return t.remove(), ("none" === n || "" === n) && (rn = I.body.appendChild(rn || G.extend(I.createElement("iframe"), { frameBorder: 0, width: 0, height: 0 })), on && rn.createElement || (on = (rn.contentWindow || rn.contentDocument).document, on.write("<!doctype html><html><body>"), on.close()), t = on.body.appendChild(on.createElement(e)), n = nn(t, "display"), I.body.removeChild(rn)), hn[e] = n, n }

    function k(e, t, n, r) { var i; if (G.isArray(t)) G.each(t, function(t, i) { n || xn.test(e) ? r(e, i) : k(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) });
        else if (n || "object" !== G.type(t)) r(e, t);
        else
            for (i in t) k(e + "[" + i + "]", t[i], n, r) }

    function T(e) { return function(t, n) { "string" != typeof t && (n = t, t = "*"); var r, i, o, a = t.toLowerCase().split(tt),
                s = 0,
                l = a.length; if (G.isFunction(n))
                for (; l > s; s++) r = a[s], o = /^\+/.test(r), o && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[o ? "unshift" : "push"](n) } }

    function C(e, n, r, i, o, a) { o = o || n.dataTypes[0], a = a || {}, a[o] = !0; for (var s, l = e[o], u = 0, c = l ? l.length : 0, f = e === On; c > u && (f || !s); u++) s = l[u](n, r, i), "string" == typeof s && (!f || a[s] ? s = t : (n.dataTypes.unshift(s), s = C(e, n, r, i, s, a))); return (f || !s) && !a["*"] && (s = C(e, n, r, i, "*", a)), s }

    function E(e, n) { var r, i, o = G.ajaxSettings.flatOptions || {}; for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        i && G.extend(!0, e, i) }

    function S(e, n, r) { var i, o, a, s, l = e.contents,
            u = e.dataTypes,
            c = e.responseFields; for (o in c) o in r && (n[c[o]] = r[o]); for (;
            "*" === u[0];) u.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type")); if (i)
            for (o in l)
                if (l[o] && l[o].test(i)) { u.unshift(o); break } if (u[0] in r) a = u[0];
        else { for (o in r) { if (!u[0] || e.converters[o + " " + u[0]]) { a = o; break } s || (s = o) } a = a || s } return a ? (a !== u[0] && u.unshift(a), r[a]) : void 0 }

    function N(e, t) { var n, r, i, o, a = e.dataTypes.slice(),
            s = a[0],
            l = {},
            u = 0; if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1])
            for (n in e.converters) l[n.toLowerCase()] = e.converters[n]; for (; i = a[++u];)
            if ("*" !== i) { if ("*" !== s && s !== i) { if (n = l[s + " " + i] || l["* " + i], !n)
                        for (r in l)
                            if (o = r.split(" "), o[1] === i && (n = l[s + " " + o[0]] || l["* " + o[0]])) { n === !0 ? n = l[r] : l[r] !== !0 && (i = o[0], a.splice(u--, 0, i)); break } if (n !== !0)
                        if (n && e["throws"]) t = n(t);
                        else try { t = n(t) } catch (c) { return { state: "parsererror", error: n ? c : "No conversion from " + s + " to " + i } } } s = i } return { state: "success", data: t } }

    function D() { try { return new e.XMLHttpRequest } catch (t) {} }

    function A() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

    function L() { return setTimeout(function() { Jn = t }, 0), Jn = G.now() }

    function j(e, t) { G.each(t, function(t, n) { for (var r = (er[t] || []).concat(er["*"]), i = 0, o = r.length; o > i; i++)
                if (r[i].call(e, t, n)) return }) }

    function M(e, t, n) { var r, i = 0,
            o = Zn.length,
            a = G.Deferred().always(function() { delete s.elem }),
            s = function() { for (var t = Jn || L(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, o = 0, s = l.tweens.length; s > o; o++) l.tweens[o].run(i); return a.notifyWith(e, [l, i, n]), 1 > i && s ? n : (a.resolveWith(e, [l]), !1) },
            l = a.promise({ elem: e, props: G.extend({}, t), opts: G.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Jn || L(), duration: n.duration, tweens: [], createTween: function(t, n) { var r = G.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r }, stop: function(t) { for (var n = 0, r = t ? l.tweens.length : 0; r > n; n++) l.tweens[n].run(1); return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this } }),
            u = l.props; for (H(u, l.opts.specialEasing); o > i; i++)
            if (r = Zn[i].call(l, e, u, l.opts)) return r; return j(l, u), G.isFunction(l.opts.start) && l.opts.start.call(e, l), G.fx.timer(G.extend(s, { anim: l, queue: l.opts.queue, elem: e })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always) }

    function H(e, t) { var n, r, i, o, a; for (n in e)
            if (r = G.camelCase(n), i = t[r], o = e[n], G.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = G.cssHooks[r], a && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i }

    function F(e, t, n) { var r, i, o, a, s, l, u, c, f, p = this,
            d = e.style,
            h = {},
            g = [],
            m = e.nodeType && y(e);
        n.queue || (c = G._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function() { c.unqueued || f() }), c.unqueued++, p.always(function() { p.always(function() { c.unqueued--, G.queue(e, "fx").length || c.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === G.css(e, "display") && "none" === G.css(e, "float") && (G.support.inlineBlockNeedsLayout && "inline" !== _(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", G.support.shrinkWrapBlocks || p.done(function() { d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2] })); for (r in t)
            if (o = t[r], Vn.exec(o)) { if (delete t[r], l = l || "toggle" === o, o === (m ? "hide" : "show")) continue;
                g.push(r) } if (a = g.length) { s = G._data(e, "fxshow") || G._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), l && (s.hidden = !m), m ? G(e).show() : p.done(function() { G(e).hide() }), p.done(function() { var t;
                G.removeData(e, "fxshow", !0); for (t in h) G.style(e, t, h[t]) }); for (r = 0; a > r; r++) i = g[r], u = p.createTween(i, m ? s[i] : 0), h[i] = s[i] || G.style(e, i), i in s || (s[i] = u.start, m && (u.end = u.start, u.start = "width" === i || "height" === i ? 1 : 0)) } }

    function $(e, t, n, r, i) { return new $.prototype.init(e, t, n, r, i) }

    function O(e, t) { var n, r = { height: e },
            i = 0; for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = yn[i], r["margin" + n] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r }

    function P(e) { return G.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 }
    var q, R, I = e.document,
        B = e.location,
        W = e.navigator,
        z = e.jQuery,
        U = e.$,
        X = Array.prototype.push,
        Y = Array.prototype.slice,
        J = Array.prototype.indexOf,
        K = Object.prototype.toString,
        V = Object.prototype.hasOwnProperty,
        Q = String.prototype.trim,
        G = function(e, t) { return new G.fn.init(e, t, q) },
        Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        et = /\S/,
        tt = /\s+/,
        nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        it = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ot = /^[\],:{}\s]*$/,
        at = /(?:^|:|,)(?:\s*\[)+/g,
        st = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        ut = /^-ms-/,
        ct = /-([\da-z])/gi,
        ft = function(e, t) { return (t + "").toUpperCase() },
        pt = function() { I.addEventListener ? (I.removeEventListener("DOMContentLoaded", pt, !1), G.ready()) : "complete" === I.readyState && (I.detachEvent("onreadystatechange", pt), G.ready()) },
        dt = {};
    G.fn = G.prototype = { constructor: G, init: function(e, n, r) { var i, o, a; if (!e) return this; if (e.nodeType) return this.context = this[0] = e, this.length = 1, this; if ("string" == typeof e) { if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : rt.exec(e), i && (i[1] || !n)) { if (i[1]) return n = n instanceof G ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : I, e = G.parseHTML(i[1], a, !0), it.test(i[1]) && G.isPlainObject(n) && this.attr.call(e, n, !0), G.merge(this, e); if (o = I.getElementById(i[2]), o && o.parentNode) { if (o.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = o } return this.context = I, this.selector = e, this } return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e) } return G.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), G.makeArray(e, this)) }, selector: "", jquery: "1.8.3", length: 0, size: function() { return this.length }, toArray: function() { return Y.call(this) }, get: function(e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] }, pushStack: function(e, t, n) { var r = G.merge(this.constructor(), e); return r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r }, each: function(e, t) { return G.each(this, e, t) }, ready: function(e) { return G.ready.promise().done(e), this }, eq: function(e) { return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, slice: function() { return this.pushStack(Y.apply(this, arguments), "slice", Y.call(arguments).join(",")) }, map: function(e) { return this.pushStack(G.map(this, function(t, n) { return e.call(t, n, t) })) }, end: function() { return this.prevObject || this.constructor(null) }, push: X, sort: [].sort, splice: [].splice }, G.fn.init.prototype = G.fn, G.extend = G.fn.extend = function() { var e, n, r, i, o, a, s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1; for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" != typeof s && !G.isFunction(s) && (s = {}), u === l && (s = this, --l); u > l; l++)
            if (null != (e = arguments[l]))
                for (n in e) r = s[n], i = e[n], s !== i && (c && i && (G.isPlainObject(i) || (o = G.isArray(i))) ? (o ? (o = !1, a = r && G.isArray(r) ? r : []) : a = r && G.isPlainObject(r) ? r : {}, s[n] = G.extend(c, a, i)) : i !== t && (s[n] = i)); return s }, G.extend({ noConflict: function(t) { return e.$ === G && (e.$ = U), t && e.jQuery === G && (e.jQuery = z), G }, isReady: !1, readyWait: 1, holdReady: function(e) { e ? G.readyWait++ : G.ready(!0) }, ready: function(e) { if (e === !0 ? !--G.readyWait : !G.isReady) { if (!I.body) return setTimeout(G.ready, 1);
                G.isReady = !0, e !== !0 && --G.readyWait > 0 || (R.resolveWith(I, [G]), G.fn.trigger && G(I).trigger("ready").off("ready")) } }, isFunction: function(e) { return "function" === G.type(e) }, isArray: Array.isArray || function(e) { return "array" === G.type(e) }, isWindow: function(e) { return null != e && e == e.window }, isNumeric: function(e) { return !isNaN(parseFloat(e)) && isFinite(e) }, type: function(e) { return null == e ? String(e) : dt[K.call(e)] || "object" }, isPlainObject: function(e) { if (!e || "object" !== G.type(e) || e.nodeType || G.isWindow(e)) return !1; try { if (e.constructor && !V.call(e, "constructor") && !V.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) { return !1 } var r; for (r in e); return r === t || V.call(e, r) }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, error: function(e) { throw new Error(e) }, parseHTML: function(e, t, n) { var r; return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || I, (r = it.exec(e)) ? [t.createElement(r[1])] : (r = G.buildFragment([e], t, n ? null : []), G.merge([], (r.cacheable ? G.clone(r.fragment) : r.fragment).childNodes))) : null }, parseJSON: function(t) { return t && "string" == typeof t ? (t = G.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : ot.test(t.replace(st, "@").replace(lt, "]").replace(at, "")) ? new Function("return " + t)() : (G.error("Invalid JSON: " + t), void 0)) : null }, parseXML: function(n) { var r, i; if (!n || "string" != typeof n) return null; try { e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n)) } catch (o) { r = t } return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && G.error("Invalid XML: " + n), r }, noop: function() {}, globalEval: function(t) { t && et.test(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) }, camelCase: function(e) { return e.replace(ut, "ms-").replace(ct, ft) }, nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function(e, n, r) { var i, o = 0,
                a = e.length,
                s = a === t || G.isFunction(e); if (r)
                if (s) { for (i in e)
                        if (n.apply(e[i], r) === !1) break } else
                    for (; a > o && n.apply(e[o++], r) !== !1;);
            else if (s) { for (i in e)
                    if (n.call(e[i], i, e[i]) === !1) break } else
                for (; a > o && n.call(e[o], o, e[o++]) !== !1;); return e }, trim: Q && !Q.call("﻿ ") ? function(e) { return null == e ? "" : Q.call(e) } : function(e) { return null == e ? "" : (e + "").replace(nt, "") }, makeArray: function(e, t) { var n, r = t || []; return null != e && (n = G.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || G.isWindow(e) ? X.call(r, e) : G.merge(r, e)), r }, inArray: function(e, t, n) { var r; if (t) { if (J) return J.call(t, e, n); for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n } return -1 }, merge: function(e, n) { var r = n.length,
                i = e.length,
                o = 0; if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                for (; n[o] !== t;) e[i++] = n[o++]; return e.length = i, e }, grep: function(e, t, n) { var r, i = [],
                o = 0,
                a = e.length; for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]); return i }, map: function(e, n, r) { var i, o, a = [],
                s = 0,
                l = e.length,
                u = e instanceof G || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || G.isArray(e)); if (u)
                for (; l > s; s++) i = n(e[s], s, r), null != i && (a[a.length] = i);
            else
                for (o in e) i = n(e[o], o, r), null != i && (a[a.length] = i); return a.concat.apply([], a) }, guid: 1, proxy: function(e, n) { var r, i, o; return "string" == typeof n && (r = e[n], n = e, e = r), G.isFunction(e) ? (i = Y.call(arguments, 2), o = function() { return e.apply(n, i.concat(Y.call(arguments))) }, o.guid = e.guid = e.guid || G.guid++, o) : t }, access: function(e, n, r, i, o, a, s) { var l, u = null == r,
                c = 0,
                f = e.length; if (r && "object" == typeof r) { for (c in r) G.access(e, n, c, r[c], 1, a, i);
                o = 1 } else if (i !== t) { if (l = s === t && G.isFunction(i), u && (l ? (l = n, n = function(e, t, n) { return l.call(G(e), n) }) : (n.call(e, i), n = null)), n)
                    for (; f > c; c++) n(e[c], r, l ? i.call(e[c], c, n(e[c], r)) : i, s);
                o = 1 } return o ? e : u ? n.call(e) : f ? n(e[0], r) : a }, now: function() { return (new Date).getTime() } }), G.ready.promise = function(t) { if (!R)
            if (R = G.Deferred(), "complete" === I.readyState) setTimeout(G.ready, 1);
            else if (I.addEventListener) I.addEventListener("DOMContentLoaded", pt, !1), e.addEventListener("load", G.ready, !1);
        else { I.attachEvent("onreadystatechange", pt), e.attachEvent("onload", G.ready); var n = !1; try { n = null == e.frameElement && I.documentElement } catch (r) {} n && n.doScroll && function i() { if (!G.isReady) { try { n.doScroll("left") } catch (e) { return setTimeout(i, 50) } G.ready() } }() } return R.promise(t) }, G.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) { dt["[object " + t + "]"] = t.toLowerCase() }), q = G(I);
    var ht = {};
    G.Callbacks = function(e) { e = "string" == typeof e ? ht[e] || n(e) : G.extend({}, e); var r, i, o, a, s, l, u = [],
            c = !e.once && [],
            f = function(t) { for (r = e.memory && t, i = !0, l = a || 0, a = 0, s = u.length, o = !0; u && s > l; l++)
                    if (u[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) { r = !1; break } o = !1, u && (c ? c.length && f(c.shift()) : r ? u = [] : p.disable()) },
            p = { add: function() { if (u) { var t = u.length;! function n(t) { G.each(t, function(t, r) { var i = G.type(r); "function" === i ? (!e.unique || !p.has(r)) && u.push(r) : r && r.length && "string" !== i && n(r) }) }(arguments), o ? s = u.length : r && (a = t, f(r)) } return this }, remove: function() { return u && G.each(arguments, function(e, t) { for (var n;
                            (n = G.inArray(t, u, n)) > -1;) u.splice(n, 1), o && (s >= n && s--, l >= n && l--) }), this }, has: function(e) { return G.inArray(e, u) > -1 }, empty: function() { return u = [], this }, disable: function() { return u = c = r = t, this }, disabled: function() { return !u }, lock: function() { return c = t, r || p.disable(), this }, locked: function() { return !c }, fireWith: function(e, t) { return t = t || [], t = [e, t.slice ? t.slice() : t], u && (!i || c) && (o ? c.push(t) : f(t)), this }, fire: function() { return p.fireWith(this, arguments), this }, fired: function() { return !!i } }; return p }, G.extend({ Deferred: function(e) { var t = [
                    ["resolve", "done", G.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", G.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", G.Callbacks("memory")]
                ],
                n = "pending",
                r = { state: function() { return n }, always: function() { return i.done(arguments).fail(arguments), this }, then: function() { var e = arguments; return G.Deferred(function(n) { G.each(t, function(t, r) { var o = r[0],
                                    a = e[t];
                                i[r[1]](G.isFunction(a) ? function() { var e = a.apply(this, arguments);
                                    e && G.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === i ? n : this, [e]) } : n[o]) }), e = null }).promise() }, promise: function(e) { return null != e ? G.extend(e, r) : r } },
                i = {}; return r.pipe = r.then, G.each(t, function(e, o) { var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = a.fire, i[o[0] + "With"] = a.fireWith }), r.promise(i), e && e.call(i, i), i }, when: function(e) { var t, n, r, i = 0,
                o = Y.call(arguments),
                a = o.length,
                s = 1 !== a || e && G.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : G.Deferred(),
                u = function(e, n, r) { return function(i) { n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r) } }; if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && G.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s; return s || l.resolveWith(r, o), l.promise() } }), G.support = function() { var t, n, r, i, o, a, s, l, u, c, f, p = I.createElement("div"); if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        i = I.createElement("select"), o = i.appendChild(I.createElement("option")), a = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = { leadingWhitespace: 3 === p.firstChild.nodeType, tbody: !p.getElementsByTagName("tbody").length, htmlSerialize: !!p.getElementsByTagName("link").length, style: /top/.test(r.getAttribute("style")), hrefNormalized: "/a" === r.getAttribute("href"), opacity: /^0.5/.test(r.style.opacity), cssFloat: !!r.style.cssFloat, checkOn: "on" === a.value, optSelected: o.selected, getSetAttribute: "t" !== p.className, enctype: !!I.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== I.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === I.compatMode, submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !o.disabled; try { delete p.test } catch (d) { t.deleteExpando = !1 } if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", f = function() { t.noCloneEvent = !1 }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", f)), a = I.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), p.appendChild(a), s = I.createDocumentFragment(), s.appendChild(p.lastChild), t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, s.removeChild(a), s.appendChild(p), p.attachEvent)
            for (u in { submit: !0, change: !0, focusin: !0 }) l = "on" + u, c = l in p, c || (p.setAttribute(l, "return;"), c = "function" == typeof p[l]), t[u + "Bubbles"] = c; return G(function() { var n, r, i, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                s = I.getElementsByTagName("body")[0];
            s && (n = I.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", s.insertBefore(n, s.firstChild), r = I.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = r.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === r.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(r, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(r, null) || { width: "4px" }).width, o = I.createElement("div"), o.style.cssText = r.style.cssText = a, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof r.style.zoom && (r.innerHTML = "", r.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === r.offsetWidth, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== r.offsetWidth, n.style.zoom = 1), s.removeChild(n), n = r = i = o = null) }), s.removeChild(p), n = r = i = o = a = s = p = null, t }();
    var gt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        mt = /([A-Z])/g;
    G.extend({ cache: {}, deletedIds: [], uuid: 0, expando: "jQuery" + (G.fn.jquery + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function(e) { return e = e.nodeType ? G.cache[e[G.expando]] : e[G.expando], !!e && !i(e) }, data: function(e, n, r, i) { if (G.acceptData(e)) { var o, a, s = G.expando,
                    l = "string" == typeof n,
                    u = e.nodeType,
                    c = u ? G.cache : e,
                    f = u ? e[s] : e[s] && s; if (f && c[f] && (i || c[f].data) || !l || r !== t) return f || (u ? e[s] = f = G.deletedIds.pop() || G.guid++ : f = s), c[f] || (c[f] = {}, u || (c[f].toJSON = G.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[f] = G.extend(c[f], n) : c[f].data = G.extend(c[f].data, n)), o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[G.camelCase(n)] = r), l ? (a = o[n], null == a && (a = o[G.camelCase(n)])) : a = o, a } }, removeData: function(e, t, n) { if (G.acceptData(e)) { var r, o, a, s = e.nodeType,
                    l = s ? G.cache : e,
                    u = s ? e[G.expando] : G.expando; if (l[u]) { if (t && (r = n ? l[u] : l[u].data)) { G.isArray(t) || (t in r ? t = [t] : (t = G.camelCase(t), t = t in r ? [t] : t.split(" "))); for (o = 0, a = t.length; a > o; o++) delete r[t[o]]; if (!(n ? i : G.isEmptyObject)(r)) return }(n || (delete l[u].data, i(l[u]))) && (s ? G.cleanData([e], !0) : G.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null) } } }, _data: function(e, t, n) { return G.data(e, t, n, !0) }, acceptData: function(e) { var t = e.nodeName && G.noData[e.nodeName.toLowerCase()]; return !t || t !== !0 && e.getAttribute("classid") === t } }), G.fn.extend({ data: function(e, n) { var i, o, a, s, l, u = this[0],
                c = 0,
                f = null; if (e === t) { if (this.length && (f = G.data(u), 1 === u.nodeType && !G._data(u, "parsedAttrs"))) { for (a = u.attributes, l = a.length; l > c; c++) s = a[c].name, s.indexOf("data-") || (s = G.camelCase(s.substring(5)), r(u, s, f[s]));
                    G._data(u, "parsedAttrs", !0) } return f } return "object" == typeof e ? this.each(function() { G.data(this, e) }) : (i = e.split(".", 2), i[1] = i[1] ? "." + i[1] : "", o = i[1] + "!", G.access(this, function(n) { return n === t ? (f = this.triggerHandler("getData" + o, [i[0]]), f === t && u && (f = G.data(u, e), f = r(u, e, f)), f === t && i[1] ? this.data(i[0]) : f) : (i[1] = n, this.each(function() { var t = G(this);
                    t.triggerHandler("setData" + o, i), G.data(this, e, n), t.triggerHandler("changeData" + o, i) }), void 0) }, null, n, arguments.length > 1, null, !1)) }, removeData: function(e) { return this.each(function() { G.removeData(this, e) }) } }), G.extend({ queue: function(e, t, n) { var r; return e ? (t = (t || "fx") + "queue", r = G._data(e, t), n && (!r || G.isArray(n) ? r = G._data(e, t, G.makeArray(n)) : r.push(n)), r || []) : void 0 }, dequeue: function(e, t) { t = t || "fx"; var n = G.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = G._queueHooks(e, t),
                a = function() { G.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return G._data(e, n) || G._data(e, n, { empty: G.Callbacks("once memory").add(function() { G.removeData(e, t + "queue", !0), G.removeData(e, n, !0) }) }) } }), G.fn.extend({ queue: function(e, n) { var r = 2; return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? G.queue(this[0], e) : n === t ? this : this.each(function() { var t = G.queue(this, e, n);
                G._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && G.dequeue(this, e) }) }, dequeue: function(e) { return this.each(function() { G.dequeue(this, e) }) }, delay: function(e, t) { return e = G.fx ? G.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) { var r = setTimeout(t, e);
                n.stop = function() { clearTimeout(r) } }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, n) { var r, i = 1,
                o = G.Deferred(),
                a = this,
                s = this.length,
                l = function() {--i || o.resolveWith(a, [a]) }; for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = G._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l)); return l(), o.promise(n) } });
    var yt, vt, bt, wt = /[\t\r\n]/g,
        xt = /\r/g,
        _t = /^(?:button|input)$/i,
        kt = /^(?:button|input|object|select|textarea)$/i,
        Tt = /^a(?:rea|)$/i,
        Ct = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Et = G.support.getSetAttribute;
    G.fn.extend({ attr: function(e, t) { return G.access(this, G.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { G.removeAttr(this, e) }) }, prop: function(e, t) { return G.access(this, G.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return e = G.propFix[e] || e, this.each(function() { try { this[e] = t, delete this[e] } catch (n) {} }) }, addClass: function(e) { var t, n, r, i, o, a, s; if (G.isFunction(e)) return this.each(function(t) { G(this).addClass(e.call(this, t, this.className)) }); if (e && "string" == typeof e)
                for (t = e.split(tt), n = 0, r = this.length; r > n; n++)
                    if (i = this[n], 1 === i.nodeType)
                        if (i.className || 1 !== t.length) { for (o = " " + i.className + " ", a = 0, s = t.length; s > a; a++) o.indexOf(" " + t[a] + " ") < 0 && (o += t[a] + " ");
                            i.className = G.trim(o) } else i.className = e; return this }, removeClass: function(e) { var n, r, i, o, a, s, l; if (G.isFunction(e)) return this.each(function(t) { G(this).removeClass(e.call(this, t, this.className)) }); if (e && "string" == typeof e || e === t)
                for (n = (e || "").split(tt), s = 0, l = this.length; l > s; s++)
                    if (i = this[s], 1 === i.nodeType && i.className) { for (r = (" " + i.className + " ").replace(wt, " "), o = 0, a = n.length; a > o; o++)
                            for (; r.indexOf(" " + n[o] + " ") >= 0;) r = r.replace(" " + n[o] + " ", " ");
                        i.className = e ? G.trim(r) : "" } return this }, toggleClass: function(e, t) { var n = typeof e,
                r = "boolean" == typeof t; return G.isFunction(e) ? this.each(function(n) { G(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function() { if ("string" === n)
                    for (var i, o = 0, a = G(this), s = t, l = e.split(tt); i = l[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
                else("undefined" === n || "boolean" === n) && (this.className && G._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : G._data(this, "__className__") || "") }) }, hasClass: function(e) { for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(wt, " ").indexOf(t) >= 0) return !0; return !1 }, val: function(e) { var n, r, i, o = this[0]; { if (arguments.length) return i = G.isFunction(e), this.each(function(r) { var o, a = G(this);
                    1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : G.isArray(o) && (o = G.map(o, function(e) { return null == e ? "" : e + "" })), n = G.valHooks[this.type] || G.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o)) }); if (o) return n = G.valHooks[o.type] || G.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(xt, "") : null == r ? "" : r) } } }), G.extend({ valHooks: { option: { get: function(e) { var t = e.attributes.value; return !t || t.specified ? e.value : e.text } }, select: { get: function(e) { for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (G.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && G.nodeName(n.parentNode, "optgroup"))) { if (t = G(n).val(), o) return t;
                            a.push(t) } return a }, set: function(e, t) { var n = G.makeArray(t); return G(e).find("option").each(function() { this.selected = G.inArray(G(this).val(), n) >= 0 }), n.length || (e.selectedIndex = -1), n } } }, attrFn: {}, attr: function(e, n, r, i) { var o, a, s, l = e.nodeType; if (e && 3 !== l && 8 !== l && 2 !== l) return i && G.isFunction(G.fn[n]) ? G(e)[n](r) : "undefined" == typeof e.getAttribute ? G.prop(e, n, r) : (s = 1 !== l || !G.isXMLDoc(e), s && (n = n.toLowerCase(), a = G.attrHooks[n] || (Ct.test(n) ? vt : yt)), r !== t ? null === r ? (G.removeAttr(e, n), void 0) : a && "set" in a && s && (o = a.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : a && "get" in a && s && null !== (o = a.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o)) }, removeAttr: function(e, t) { var n, r, i, o, a = 0; if (t && 1 === e.nodeType)
                for (r = t.split(tt); a < r.length; a++) i = r[a], i && (n = G.propFix[i] || i, o = Ct.test(i), o || G.attr(e, i, ""), e.removeAttribute(Et ? i : n), o && n in e && (e[n] = !1)) }, attrHooks: { type: { set: function(e, t) { if (_t.test(e.nodeName) && e.parentNode) G.error("type property can't be changed");
                    else if (!G.support.radioValue && "radio" === t && G.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } }, value: { get: function(e, t) { return yt && G.nodeName(e, "button") ? yt.get(e, t) : t in e ? e.value : null }, set: function(e, t, n) { return yt && G.nodeName(e, "button") ? yt.set(e, t, n) : (e.value = t, void 0) } } }, propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function(e, n, r) { var i, o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !G.isXMLDoc(e), a && (n = G.propFix[n] || n, o = G.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n] }, propHooks: { tabIndex: { get: function(e) { var n = e.getAttributeNode("tabindex"); return n && n.specified ? parseInt(n.value, 10) : kt.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : t } } } }), vt = { get: function(e, n) { var r, i = G.prop(e, n); return i === !0 || "boolean" != typeof i && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t }, set: function(e, t, n) { var r; return t === !1 ? G.removeAttr(e, n) : (r = G.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n } }, Et || (bt = { name: !0, id: !0, coords: !0 }, yt = G.valHooks.button = { get: function(e, n) { var r; return r = e.getAttributeNode(n), r && (bt[n] ? "" !== r.value : r.specified) ? r.value : t }, set: function(e, t, n) { var r = e.getAttributeNode(n); return r || (r = I.createAttribute(n), e.setAttributeNode(r)), r.value = t + "" } }, G.each(["width", "height"], function(e, t) { G.attrHooks[t] = G.extend(G.attrHooks[t], { set: function(e, n) { return "" === n ? (e.setAttribute(t, "auto"), n) : void 0 } }) }), G.attrHooks.contenteditable = { get: yt.get, set: function(e, t, n) { "" === t && (t = "false"), yt.set(e, t, n) } }), G.support.hrefNormalized || G.each(["href", "src", "width", "height"], function(e, n) { G.attrHooks[n] = G.extend(G.attrHooks[n], { get: function(e) { var r = e.getAttribute(n, 2); return null === r ? t : r } }) }), G.support.style || (G.attrHooks.style = { get: function(e) { return e.style.cssText.toLowerCase() || t }, set: function(e, t) { return e.style.cssText = t + "" } }), G.support.optSelected || (G.propHooks.selected = G.extend(G.propHooks.selected, { get: function(e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } })), G.support.enctype || (G.propFix.enctype = "encoding"), G.support.checkOn || G.each(["radio", "checkbox"], function() {
        G.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), G.each(["radio", "checkbox"], function() { G.valHooks[this] = G.extend(G.valHooks[this], { set: function(e, t) { return G.isArray(t) ? e.checked = G.inArray(G(e).val(), t) >= 0 : void 0 } }) });
    var St = /^(?:textarea|input|select)$/i,
        Nt = /^([^\.]*|)(?:\.(.+)|)$/,
        Dt = /(?:^|\s)hover(\.\S+|)\b/,
        At = /^key/,
        Lt = /^(?:mouse|contextmenu)|click/,
        jt = /^(?:focusinfocus|focusoutblur)$/,
        Mt = function(e) { return G.event.special.hover ? e : e.replace(Dt, "mouseenter$1 mouseleave$1") };
    G.event = { add: function(e, n, r, i, o) { var a, s, l, u, c, f, p, d, h, g, m; if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (a = G._data(e))) { for (r.handler && (h = r, r = h.handler, o = h.selector), r.guid || (r.guid = G.guid++), l = a.events, l || (a.events = l = {}), s = a.handle, s || (a.handle = s = function(e) { return "undefined" == typeof G || e && G.event.triggered === e.type ? t : G.event.dispatch.apply(s.elem, arguments) }, s.elem = e), n = G.trim(Mt(n)).split(" "), u = 0; u < n.length; u++) c = Nt.exec(n[u]) || [], f = c[1], p = (c[2] || "").split(".").sort(), m = G.event.special[f] || {}, f = (o ? m.delegateType : m.bindType) || f, m = G.event.special[f] || {}, d = G.extend({ type: f, origType: c[1], data: i, handler: r, guid: r.guid, selector: o, needsContext: o && G.expr.match.needsContext.test(o), namespace: p.join(".") }, h), g = l[f], g || (g = l[f] = [], g.delegateCount = 0, m.setup && m.setup.call(e, i, p, s) !== !1 || (e.addEventListener ? e.addEventListener(f, s, !1) : e.attachEvent && e.attachEvent("on" + f, s))), m.add && (m.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), o ? g.splice(g.delegateCount++, 0, d) : g.push(d), G.event.global[f] = !0;
                    e = null } }, global: {}, remove: function(e, t, n, r, i) { var o, a, s, l, u, c, f, p, d, h, g, m = G.hasData(e) && G._data(e); if (m && (p = m.events)) { for (t = G.trim(Mt(t || "")).split(" "), o = 0; o < t.length; o++)
                        if (a = Nt.exec(t[o]) || [], s = l = a[1], u = a[2], s) { for (d = G.event.special[s] || {}, s = (r ? d.delegateType : d.bindType) || s, h = p[s] || [], c = h.length, u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = 0; f < h.length; f++) g = h[f], !(!i && l !== g.origType || n && n.guid !== g.guid || u && !u.test(g.namespace) || r && r !== g.selector && ("**" !== r || !g.selector) || (h.splice(f--, 1), g.selector && h.delegateCount--, !d.remove || !d.remove.call(e, g)));
                            0 === h.length && c !== h.length && ((!d.teardown || d.teardown.call(e, u, m.handle) === !1) && G.removeEvent(e, s, m.handle), delete p[s]) } else
                            for (s in p) G.event.remove(e, s + t[o], n, r, !0);
                    G.isEmptyObject(p) && (delete m.handle, G.removeData(e, "events", !0)) } }, customEvent: { getData: !0, setData: !0, changeData: !0 }, trigger: function(n, r, i, o) { if (!i || 3 !== i.nodeType && 8 !== i.nodeType) { var a, s, l, u, c, f, p, d, h, g, m = n.type || n,
                        y = []; if (jt.test(m + G.event.triggered)) return; if (m.indexOf("!") >= 0 && (m = m.slice(0, -1), s = !0), m.indexOf(".") >= 0 && (y = m.split("."), m = y.shift(), y.sort()), (!i || G.event.customEvent[m]) && !G.event.global[m]) return; if (n = "object" == typeof n ? n[G.expando] ? n : new G.Event(m, n) : new G.Event(m), n.type = m, n.isTrigger = !0, n.exclusive = s, n.namespace = y.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = m.indexOf(":") < 0 ? "on" + m : "", !i) { a = G.cache; for (l in a) a[l].events && a[l].events[m] && G.event.trigger(n, r, a[l].handle.elem, !0); return } if (n.result = t, n.target || (n.target = i), r = null != r ? G.makeArray(r) : [], r.unshift(n), p = G.event.special[m] || {}, p.trigger && p.trigger.apply(i, r) === !1) return; if (h = [
                            [i, p.bindType || m]
                        ], !o && !p.noBubble && !G.isWindow(i)) { for (g = p.delegateType || m, u = jt.test(g + m) ? i : i.parentNode, c = i; u; u = u.parentNode) h.push([u, g]), c = u;
                        c === (i.ownerDocument || I) && h.push([c.defaultView || c.parentWindow || e, g]) } for (l = 0; l < h.length && !n.isPropagationStopped(); l++) u = h[l][0], n.type = h[l][1], d = (G._data(u, "events") || {})[n.type] && G._data(u, "handle"), d && d.apply(u, r), d = f && u[f], d && G.acceptData(u) && d.apply && d.apply(u, r) === !1 && n.preventDefault(); return n.type = m, !(o || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === m && G.nodeName(i, "a") || !G.acceptData(i) || !f || !i[m] || ("focus" === m || "blur" === m) && 0 === n.target.offsetWidth || G.isWindow(i) || (c = i[f], c && (i[f] = null), G.event.triggered = m, i[m](), G.event.triggered = t, !c || !(i[f] = c))), n.result } }, dispatch: function(n) { n = G.event.fix(n || e.event); var r, i, o, a, s, l, u, c, f, p = (G._data(this, "events") || {})[n.type] || [],
                    d = p.delegateCount,
                    h = Y.call(arguments),
                    g = !n.exclusive && !n.namespace,
                    m = G.event.special[n.type] || {},
                    y = []; if (h[0] = n, n.delegateTarget = this, !m.preDispatch || m.preDispatch.call(this, n) !== !1) { if (d && (!n.button || "click" !== n.type))
                        for (o = n.target; o != this; o = o.parentNode || this)
                            if (o.disabled !== !0 || "click" !== n.type) { for (s = {}, u = [], r = 0; d > r; r++) c = p[r], f = c.selector, s[f] === t && (s[f] = c.needsContext ? G(f, this).index(o) >= 0 : G.find(f, this, null, [o]).length), s[f] && u.push(c);
                                u.length && y.push({ elem: o, matches: u }) } for (p.length > d && y.push({ elem: this, matches: p.slice(d) }), r = 0; r < y.length && !n.isPropagationStopped(); r++)
                        for (l = y[r], n.currentTarget = l.elem, i = 0; i < l.matches.length && !n.isImmediatePropagationStopped(); i++) c = l.matches[i], (g || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) && (n.data = c.data, n.handleObj = c, a = ((G.event.special[c.origType] || {}).handle || c.handler).apply(l.elem, h), a !== t && (n.result = a, a === !1 && (n.preventDefault(), n.stopPropagation()))); return m.postDispatch && m.postDispatch.call(this, n), n.result } }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e, n) { var r, i, o, a = n.button,
                        s = n.fromElement; return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || I, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), !e.which && a !== t && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e } }, fix: function(e) { if (e[G.expando]) return e; var t, n, r = e,
                    i = G.event.fixHooks[e.type] || {},
                    o = i.props ? this.props.concat(i.props) : this.props; for (e = G.Event(r), t = o.length; t;) n = o[--t], e[n] = r[n]; return e.target || (e.target = r.srcElement || I), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, r) : e }, special: { load: { noBubble: !0 }, focus: { delegateType: "focusin" }, blur: { delegateType: "focusout" }, beforeunload: { setup: function(e, t, n) { G.isWindow(this) && (this.onbeforeunload = n) }, teardown: function(e, t) { this.onbeforeunload === t && (this.onbeforeunload = null) } } }, simulate: function(e, t, n, r) { var i = G.extend(new G.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
                r ? G.event.trigger(i, null, t) : G.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault() } }, G.event.handle = G.event.dispatch, G.removeEvent = I.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) { var r = "on" + t;
            e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n)) }, G.Event = function(e, t) { return this instanceof G.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : o) : this.type = e, t && G.extend(this, t), this.timeStamp = e && e.timeStamp || G.now(), this[G.expando] = !0, void 0) : new G.Event(e, t) }, G.Event.prototype = { preventDefault: function() { this.isDefaultPrevented = a; var e = this.originalEvent;
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function() { this.isPropagationStopped = a; var e = this.originalEvent;
                e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function() { this.isImmediatePropagationStopped = a, this.stopPropagation() }, isDefaultPrevented: o, isPropagationStopped: o, isImmediatePropagationStopped: o }, G.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(e, t) { G.event.special[e] = { delegateType: t, bindType: t, handle: function(e) { var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj; return o.selector, (!i || i !== r && !G.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), G.support.submitBubbles || (G.event.special.submit = { setup: function() { return G.nodeName(this, "form") ? !1 : (G.event.add(this, "click._submit keypress._submit", function(e) { var n = e.target,
                        r = G.nodeName(n, "input") || G.nodeName(n, "button") ? n.form : t;
                    r && !G._data(r, "_submit_attached") && (G.event.add(r, "submit._submit", function(e) { e._submit_bubble = !0 }), G._data(r, "_submit_attached", !0)) }), void 0) }, postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && G.event.simulate("submit", this.parentNode, e, !0)) }, teardown: function() { return G.nodeName(this, "form") ? !1 : (G.event.remove(this, "._submit"), void 0) } }), G.support.changeBubbles || (G.event.special.change = { setup: function() { return St.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (G.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), G.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), G.event.simulate("change", this, e, !0) })), !1) : (G.event.add(this, "beforeactivate._change", function(e) { var t = e.target;
                    St.test(t.nodeName) && !G._data(t, "_change_attached") && (G.event.add(t, "change._change", function(e) { this.parentNode && !e.isSimulated && !e.isTrigger && G.event.simulate("change", this.parentNode, e, !0) }), G._data(t, "_change_attached", !0)) }), void 0) }, handle: function(e) { var t = e.target; return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function() { return G.event.remove(this, "._change"), !St.test(this.nodeName) } }), G.support.focusinBubbles || G.each({ focus: "focusin", blur: "focusout" }, function(e, t) { var n = 0,
                r = function(e) { G.event.simulate(t, e.target, G.event.fix(e), !0) };
            G.event.special[t] = { setup: function() { 0 === n++ && I.addEventListener(e, r, !0) }, teardown: function() { 0 === --n && I.removeEventListener(e, r, !0) } } }), G.fn.extend({ on: function(e, n, r, i, a) { var s, l; if ("object" == typeof e) { "string" != typeof n && (r = r || n, n = t); for (l in e) this.on(l, n, r, e[l], a); return this } if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = o;
                else if (!i) return this; return 1 === a && (s = i, i = function(e) { return G().off(e), s.apply(this, arguments) }, i.guid = s.guid || (s.guid = G.guid++)), this.each(function() { G.event.add(this, e, i, r, n) }) }, one: function(e, t, n, r) { return this.on(e, t, n, r, 1) }, off: function(e, n, r) { var i, a; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, G(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (a in e) this.off(a, n, e[a]); return this } return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = o), this.each(function() { G.event.remove(this, e, r, n) }) }, bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, live: function(e, t, n) { return G(this.context).on(e, this.selector, t, n), this }, die: function(e, t) { return G(this.context).off(e, this.selector || "**", t), this }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, trigger: function(e, t) { return this.each(function() { G.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { return this[0] ? G.event.trigger(e, t, this[0], !0) : void 0 }, toggle: function(e) { var t = arguments,
                    n = e.guid || G.guid++,
                    r = 0,
                    i = function(n) { var i = (G._data(this, "lastToggle" + e.guid) || 0) % r; return G._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1 }; for (i.guid = n; r < t.length;) t[r++].guid = n; return this.click(i) }, hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), G.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { G.fn[t] = function(e, n) { return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) }, At.test(t) && (G.event.fixHooks[t] = G.event.keyHooks), Lt.test(t) && (G.event.fixHooks[t] = G.event.mouseHooks) }),
        function(e, t) {
            function n(e, t, n, r) { n = n || [], t = t || L; var i, o, a, s, l = t.nodeType; if (!e || "string" != typeof e) return n; if (1 !== l && 9 !== l) return []; if (a = x(t), !a && !r && (i = nt.exec(e)))
                    if (s = i[1]) { if (9 === l) { if (o = t.getElementById(s), !o || !o.parentNode) return n; if (o.id === s) return n.push(o), n } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && _(t, o) && o.id === s) return n.push(o), n } else { if (i[2]) return $.apply(n, O.call(t.getElementsByTagName(e), 0)), n; if ((s = i[3]) && pt && t.getElementsByClassName) return $.apply(n, O.call(t.getElementsByClassName(s), 0)), n } return g(e.replace(Q, "$1"), t, n, r, a) }

            function r(e) { return function(t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } }

            function i(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

            function o(e) { return q(function(t) { return t = +t, q(function(n, r) { for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) }

            function a(e, t, n) { if (e === t) return n; for (var r = e.nextSibling; r;) { if (r === t) return -1;
                    r = r.nextSibling } return 1 }

            function s(e, t) { var r, i, o, a, s, l, u, c = B[D][e + " "]; if (c) return t ? 0 : c.slice(0); for (s = e, l = [], u = b.preFilter; s;) {
                    (!r || (i = Z.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = et.exec(s)) && (o.push(r = new A(i.shift())), s = s.slice(r.length), r.type = i[0].replace(Q, " ")); for (a in b.filter)(i = st[a].exec(s)) && (!u[a] || (i = u[a](i))) && (o.push(r = new A(i.shift())), s = s.slice(r.length), r.type = a, r.matches = i); if (!r) break } return t ? s.length : s ? n.error(e) : B(e, l).slice(0) }

            function l(e, t, n) { var r = t.dir,
                    i = n && "parentNode" === t.dir,
                    o = H++; return t.first ? function(t, n, o) { for (; t = t[r];)
                        if (i || 1 === t.nodeType) return e(t, n, o) } : function(t, n, a) { if (a) { for (; t = t[r];)
                            if ((i || 1 === t.nodeType) && e(t, n, a)) return t } else
                        for (var s, l = M + " " + o + " ", u = l + y; t = t[r];)
                            if (i || 1 === t.nodeType) { if ((s = t[D]) === u) return t.sizset; if ("string" == typeof s && 0 === s.indexOf(l)) { if (t.sizset) return t } else { if (t[D] = u, e(t, n, a)) return t.sizset = !0, t;
                                    t.sizset = !1 } } } }

            function u(e) { return e.length > 1 ? function(t, n, r) { for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1; return !0 } : e[0] }

            function c(e, t, n, r, i) { for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s)); return a }

            function f(e, t, n, r, i, o) { return r && !r[D] && (r = f(r)), i && !i[D] && (i = f(i, o)), q(function(o, a, s, l) { var u, f, p, d = [],
                        g = [],
                        m = a.length,
                        y = o || h(t || "*", s.nodeType ? [s] : s, []),
                        v = !e || !o && t ? y : c(y, d, e, s, l),
                        b = n ? i || (o ? e : m || r) ? [] : a : v; if (n && n(v, b, s, l), r)
                        for (u = c(b, g), r(u, [], s, l), f = u.length; f--;)(p = u[f]) && (b[g[f]] = !(v[g[f]] = p)); if (o) { if (i || e) { if (i) { for (u = [], f = b.length; f--;)(p = b[f]) && u.push(v[f] = p);
                                i(null, b = [], u, l) } for (f = b.length; f--;)(p = b[f]) && (u = i ? P.call(o, p) : d[f]) > -1 && (o[u] = !(a[u] = p)) } } else b = c(b === a ? b.splice(m, b.length) : b), i ? i(null, a, b, l) : $.apply(a, b) }) }

            function p(e) { for (var t, n, r, i = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, c = l(function(e) { return e === t }, a, !0), d = l(function(e) { return P.call(t, e) > -1 }, a, !0), h = [function(e, n, r) { return !o && (r || n !== E) || ((t = n).nodeType ? c(e, n, r) : d(e, n, r)) }]; i > s; s++)
                    if (n = b.relative[e[s].type]) h = [l(u(h), n)];
                    else { if (n = b.filter[e[s].type].apply(null, e[s].matches), n[D]) { for (r = ++s; i > r && !b.relative[e[r].type]; r++); return f(s > 1 && u(h), s > 1 && e.slice(0, s - 1).join("").replace(Q, "$1"), n, r > s && p(e.slice(s, r)), i > r && p(e = e.slice(r)), i > r && e.join("")) } h.push(n) } return u(h) }

            function d(e, t) { var r = t.length > 0,
                    i = e.length > 0,
                    o = function(a, s, l, u, f) { var p, d, h, g = [],
                            m = 0,
                            v = "0",
                            w = a && [],
                            x = null != f,
                            _ = E,
                            k = a || i && b.find.TAG("*", f && s.parentNode || s),
                            T = M += null == _ ? 1 : Math.E; for (x && (E = s !== L && s, y = o.el); null != (p = k[v]); v++) { if (i && p) { for (d = 0; h = e[d]; d++)
                                    if (h(p, s, l)) { u.push(p); break } x && (M = T, y = ++o.el) } r && ((p = !h && p) && m--, a && w.push(p)) } if (m += v, r && v !== m) { for (d = 0; h = t[d]; d++) h(w, g, s, l); if (a) { if (m > 0)
                                    for (; v--;) !w[v] && !g[v] && (g[v] = F.call(u));
                                g = c(g) } $.apply(u, g), x && !a && g.length > 0 && m + t.length > 1 && n.uniqueSort(u) } return x && (M = T, E = _), w }; return o.el = 0, r ? q(o) : o }

            function h(e, t, r) { for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r); return r }

            function g(e, t, n, r, i) { var o, a, l, u, c, f = s(e); if (f.length, !r && 1 === f.length) { if (a = f[0] = f[0].slice(0), a.length > 2 && "ID" === (l = a[0]).type && 9 === t.nodeType && !i && b.relative[a[1].type]) { if (t = b.find.ID(l.matches[0].replace(at, ""), t, i)[0], !t) return n;
                        e = e.slice(a.shift().length) } for (o = st.POS.test(e) ? -1 : a.length - 1; o >= 0 && (l = a[o], !b.relative[u = l.type]); o--)
                        if ((c = b.find[u]) && (r = c(l.matches[0].replace(at, ""), rt.test(a[0].type) && t.parentNode || t, i))) { if (a.splice(o, 1), e = r.length && a.join(""), !e) return $.apply(n, O.call(r, 0)), n; break } } return k(e, f)(r, t, i, n, rt.test(e)), n }

            function m() {} var y, v, b, w, x, _, k, T, C, E, S = !0,
                N = "undefined",
                D = ("sizcache" + Math.random()).replace(".", ""),
                A = String,
                L = e.document,
                j = L.documentElement,
                M = 0,
                H = 0,
                F = [].pop,
                $ = [].push,
                O = [].slice,
                P = [].indexOf || function(e) { for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t; return -1 },
                q = function(e, t) { return e[D] = null == t || t, e },
                R = function() { var e = {},
                        t = []; return q(function(n, r) { return t.push(n) > b.cacheLength && delete e[t.shift()], e[n + " "] = r }, e) },
                I = R(),
                B = R(),
                W = R(),
                z = "[\\x20\\t\\r\\n\\f]",
                U = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                X = U.replace("w", "w#"),
                Y = "([*^$|!~]?=)",
                J = "\\[" + z + "*(" + U + ")" + z + "*(?:" + Y + z + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + X + ")|)|)" + z + "*\\]",
                K = ":(" + U + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + J + ")|[^:]|\\\\.)*|.*))\\)|)",
                V = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)",
                Q = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
                Z = new RegExp("^" + z + "*," + z + "*"),
                et = new RegExp("^" + z + "*([\\x20\\t\\r\\n\\f>+~])" + z + "*"),
                tt = new RegExp(K),
                nt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                rt = /[\x20\t\r\n\f]*[+~]/,
                it = /h\d/i,
                ot = /input|select|textarea|button/i,
                at = /\\(?!\\)/g,
                st = { ID: new RegExp("^#(" + U + ")"), CLASS: new RegExp("^\\.(" + U + ")"), NAME: new RegExp("^\\[name=['\"]?(" + U + ")['\"]?\\]"), TAG: new RegExp("^(" + U.replace("w", "w*") + ")"), ATTR: new RegExp("^" + J), PSEUDO: new RegExp("^" + K), POS: new RegExp(V, "i"), CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"), needsContext: new RegExp("^" + z + "*[>+~]|" + V, "i") },
                lt = function(e) { var t = L.createElement("div"); try { return e(t) } catch (n) { return !1 } finally { t = null } },
                ut = lt(function(e) { return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length }),
                ct = lt(function(e) { return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== N && "#" === e.firstChild.getAttribute("href") }),
                ft = lt(function(e) { e.innerHTML = "<select></select>"; var t = typeof e.lastChild.getAttribute("multiple"); return "boolean" !== t && "string" !== t }),
                pt = lt(function(e) { return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1 }),
                dt = lt(function(e) { e.id = D + 0, e.innerHTML = "<a name='" + D + "'></a><div name='" + D + "'></div>", j.insertBefore(e, j.firstChild); var t = L.getElementsByName && L.getElementsByName(D).length === 2 + L.getElementsByName(D + 0).length; return v = !L.getElementById(D), j.removeChild(e), t }); try { O.call(j.childNodes, 0)[0].nodeType } catch (ht) { O = function(e) { for (var t, n = []; t = this[e]; e++) n.push(t); return n } } n.matches = function(e, t) { return n(e, null, null, t) }, n.matchesSelector = function(e, t) { return n(t, null, null, [e]).length > 0 }, w = n.getText = function(e) { var t, n = "",
                    r = 0,
                    i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += w(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    for (; t = e[r]; r++) n += w(t); return n }, x = n.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return t ? "HTML" !== t.nodeName : !1 }, _ = n.contains = j.contains ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode; return e === r || !!(r && 1 === r.nodeType && n.contains && n.contains(r)) } : j.compareDocumentPosition ? function(e, t) { return t && !!(16 & e.compareDocumentPosition(t)) } : function(e, t) { for (; t = t.parentNode;)
                    if (t === e) return !0; return !1 }, n.attr = function(e, t) { var n, r = x(e); return r || (t = t.toLowerCase()), (n = b.attrHandle[t]) ? n(e) : r || ft ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null) }, b = n.selectors = { cacheLength: 50, createPseudo: q, match: st, attrHandle: ct ? {} : { href: function(e) { return e.getAttribute("href", 2) }, type: function(e) { return e.getAttribute("type") } }, find: { ID: v ? function(e, t, n) { if (typeof t.getElementById !== N && !n) { var r = t.getElementById(e); return r && r.parentNode ? [r] : [] } } : function(e, n, r) { if (typeof n.getElementById !== N && !r) { var i = n.getElementById(e); return i ? i.id === e || typeof i.getAttributeNode !== N && i.getAttributeNode("id").value === e ? [i] : t : [] } }, TAG: ut ? function(e, t) { return typeof t.getElementsByTagName !== N ? t.getElementsByTagName(e) : void 0 } : function(e, t) { var n = t.getElementsByTagName(e); if ("*" === e) { for (var r, i = [], o = 0; r = n[o]; o++) 1 === r.nodeType && i.push(r); return i } return n }, NAME: dt && function(e, t) { return typeof t.getElementsByName !== N ? t.getElementsByName(name) : void 0 }, CLASS: pt && function(e, t, n) { return typeof t.getElementsByClassName === N || n ? void 0 : t.getElementsByClassName(e) } }, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(at, ""), e[3] = (e[4] || e[5] || "").replace(at, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e }, PSEUDO: function(e) { var t, n; return st.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (tt.test(t) && (n = s(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t), e.slice(0, 3)) } }, filter: { ID: v ? function(e) { return e = e.replace(at, ""),
                            function(t) { return t.getAttribute("id") === e } } : function(e) { return e = e.replace(at, ""),
                            function(t) { var n = typeof t.getAttributeNode !== N && t.getAttributeNode("id"); return n && n.value === e } }, TAG: function(e) { return "*" === e ? function() { return !0 } : (e = e.replace(at, "").toLowerCase(), function(t) { return t.nodeName && t.nodeName.toLowerCase() === e }) }, CLASS: function(e) { var t = I[D][e + " "]; return t || (t = new RegExp("(^|" + z + ")" + e + "(" + z + "|$)")) && I(e, function(e) { return t.test(e.className || typeof e.getAttribute !== N && e.getAttribute("class") || "") }) }, ATTR: function(e, t, r) { return function(i) { var o = n.attr(i, e); return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.substr(o.length - r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.substr(0, r.length + 1) === r + "-" : !1) : !0 } }, CHILD: function(e, t, n, r) { return "nth" === e ? function(e) { var t, i, o = e.parentNode; if (1 === n && 0 === r) return !0; if (o)
                                for (i = 0, t = o.firstChild; t && (1 !== t.nodeType || (i++, e !== t)); t = t.nextSibling); return i -= r, i === n || 0 === i % n && i / n >= 0 } : function(t) { var n = t; switch (e) {
                                case "only":
                                case "first":
                                    for (; n = n.previousSibling;)
                                        if (1 === n.nodeType) return !1; if ("first" === e) return !0;
                                    n = t;
                                case "last":
                                    for (; n = n.nextSibling;)
                                        if (1 === n.nodeType) return !1; return !0 } } }, PSEUDO: function(e, t) { var r, i = b.pseudos[e] || b.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e); return i[D] ? i(t) : i.length > 1 ? (r = [e, e, "", t], b.setFilters.hasOwnProperty(e.toLowerCase()) ? q(function(e, n) { for (var r, o = i(e, t), a = o.length; a--;) r = P.call(e, o[a]), e[r] = !(n[r] = o[a]) }) : function(e) { return i(e, 0, r) }) : i } }, pseudos: { not: q(function(e) { var t = [],
                            n = [],
                            r = k(e.replace(Q, "$1")); return r[D] ? q(function(e, t, n, i) { for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), !n.pop() } }), has: q(function(e) { return function(t) { return n(e, t).length > 0 } }), contains: q(function(e) { return function(t) { return (t.textContent || t.innerText || w(t)).indexOf(e) > -1 } }), enabled: function(e) { return e.disabled === !1 }, disabled: function(e) { return e.disabled === !0 }, checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, parent: function(e) { return !b.pseudos.empty(e) }, empty: function(e) { var t; for (e = e.firstChild; e;) { if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                            e = e.nextSibling } return !0 }, header: function(e) { return it.test(e.nodeName) }, text: function(e) { var t, n; return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t) }, radio: r("radio"), checkbox: r("checkbox"), file: r("file"), password: r("password"), image: r("image"), submit: i("submit"), reset: i("reset"), button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, input: function(e) { return ot.test(e.nodeName) }, focus: function(e) { var t = e.ownerDocument; return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, active: function(e) { return e === e.ownerDocument.activeElement }, first: o(function() { return [0] }), last: o(function(e, t) { return [t - 1] }), eq: o(function(e, t, n) { return [0 > n ? n + t : n] }), even: o(function(e, t) { for (var n = 0; t > n; n += 2) e.push(n); return e }), odd: o(function(e, t) { for (var n = 1; t > n; n += 2) e.push(n); return e }), lt: o(function(e, t, n) { for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r); return e }), gt: o(function(e, t, n) { for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r); return e }) } }, T = j.compareDocumentPosition ? function(e, t) { return e === t ? (C = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1 } : function(e, t) { if (e === t) return C = !0, 0; if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex; var n, r, i = [],
                    o = [],
                    s = e.parentNode,
                    l = t.parentNode,
                    u = s; if (s === l) return a(e, t); if (!s) return -1; if (!l) return 1; for (; u;) i.unshift(u), u = u.parentNode; for (u = l; u;) o.unshift(u), u = u.parentNode;
                n = i.length, r = o.length; for (var c = 0; n > c && r > c; c++)
                    if (i[c] !== o[c]) return a(i[c], o[c]); return c === n ? a(e, o[c], -1) : a(i[c], t, 1) }, [0, 0].sort(T), S = !C, n.uniqueSort = function(e) { var t, n = [],
                    r = 1,
                    i = 0; if (C = S, e.sort(T), C) { for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r)); for (; i--;) e.splice(n[i], 1) } return e }, n.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, k = n.compile = function(e, t) { var n, r = [],
                    i = [],
                    o = W[D][e + " "]; if (!o) { for (t || (t = s(e)), n = t.length; n--;) o = p(t[n]), o[D] ? r.push(o) : i.push(o);
                    o = W(e, d(i, r)) } return o }, L.querySelectorAll && function() { var e, t = g,
                    r = /'|\\/g,
                    i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    o = [":focus"],
                    a = [":active"],
                    l = j.matchesSelector || j.mozMatchesSelector || j.webkitMatchesSelector || j.oMatchesSelector || j.msMatchesSelector;
                lt(function(e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + z + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || o.push(":checked") }), lt(function(e) { e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + z + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled") }), o = new RegExp(o.join("|")), g = function(e, n, i, a, l) { if (!a && !l && !o.test(e)) { var u, c, f = !0,
                            p = D,
                            d = n,
                            h = 9 === n.nodeType && e; if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) { for (u = s(e), (f = n.getAttribute("id")) ? p = f.replace(r, "\\$&") : n.setAttribute("id", p), p = "[id='" + p + "'] ", c = u.length; c--;) u[c] = p + u[c].join("");
                            d = rt.test(e) && n.parentNode || n, h = u.join(",") } if (h) try { return $.apply(i, O.call(d.querySelectorAll(h), 0)), i } catch (g) {} finally { f || n.removeAttribute("id") } } return t(e, n, i, a, l) }, l && (lt(function(t) { e = l.call(t, "div"); try { l.call(t, "[test!='']:sizzle"), a.push("!=", K) } catch (n) {} }), a = new RegExp(a.join("|")), n.matchesSelector = function(t, r) { if (r = r.replace(i, "='$1']"), !x(t) && !a.test(r) && !o.test(r)) try { var s = l.call(t, r); if (s || e || t.document && 11 !== t.document.nodeType) return s } catch (u) {}
                    return n(r, null, null, [t]).length > 0 }) }(), b.pseudos.nth = b.pseudos.eq, b.filters = m.prototype = b.pseudos, b.setFilters = new m, n.attr = G.attr, G.find = n, G.expr = n.selectors, G.expr[":"] = G.expr.pseudos, G.unique = n.uniqueSort, G.text = n.getText, G.isXMLDoc = n.isXML, G.contains = n.contains }(e);
    var Ht = /Until$/,
        Ft = /^(?:parents|prev(?:Until|All))/,
        $t = /^.[^:#\[\.,]*$/,
        Ot = G.expr.match.needsContext,
        Pt = { children: !0, contents: !0, next: !0, prev: !0 };
    G.fn.extend({ find: function(e) { var t, n, r, i, o, a, s = this; if ("string" != typeof e) return G(e).filter(function() { for (t = 0, n = s.length; n > t; t++)
                    if (G.contains(s[t], this)) return !0 }); for (a = this.pushStack("", "find", e), t = 0, n = this.length; n > t; t++)
                if (r = a.length, G.find(e, this[t], a), t > 0)
                    for (i = r; i < a.length; i++)
                        for (o = 0; r > o; o++)
                            if (a[o] === a[i]) { a.splice(i--, 1); break } return a }, has: function(e) { var t, n = G(e, this),
                r = n.length; return this.filter(function() { for (t = 0; r > t; t++)
                    if (G.contains(this, n[t])) return !0 }) }, not: function(e) { return this.pushStack(u(this, e, !1), "not", e) }, filter: function(e) { return this.pushStack(u(this, e, !0), "filter", e) }, is: function(e) { return !!e && ("string" == typeof e ? Ot.test(e) ? G(e, this.context).index(this[0]) >= 0 : G.filter(e, this).length > 0 : this.filter(e).length > 0) }, closest: function(e, t) { for (var n, r = 0, i = this.length, o = [], a = Ot.test(e) || "string" != typeof e ? G(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) { if (a ? a.index(n) > -1 : G.find.matchesSelector(n, e)) { o.push(n); break } n = n.parentNode }
            return o = o.length > 1 ? G.unique(o) : o, this.pushStack(o, "closest", e) }, index: function(e) { return e ? "string" == typeof e ? G.inArray(this[0], G(e)) : G.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1 }, add: function(e, t) { var n = "string" == typeof e ? G(e, t) : G.makeArray(e && e.nodeType ? [e] : e),
                r = G.merge(this.get(), n); return this.pushStack(s(n[0]) || s(r[0]) ? r : G.unique(r)) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), G.fn.andSelf = G.fn.addBack, G.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return G.dir(e, "parentNode") }, parentsUntil: function(e, t, n) { return G.dir(e, "parentNode", n) }, next: function(e) { return l(e, "nextSibling") }, prev: function(e) { return l(e, "previousSibling") }, nextAll: function(e) { return G.dir(e, "nextSibling") }, prevAll: function(e) { return G.dir(e, "previousSibling") }, nextUntil: function(e, t, n) { return G.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return G.dir(e, "previousSibling", n) }, siblings: function(e) { return G.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) { return G.sibling(e.firstChild) }, contents: function(e) { return G.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : G.merge([], e.childNodes) } }, function(e, t) { G.fn[e] = function(n, r) { var i = G.map(this, t, n); return Ht.test(e) || (r = n), r && "string" == typeof r && (i = G.filter(r, i)), i = this.length > 1 && !Pt[e] ? G.unique(i) : i, this.length > 1 && Ft.test(e) && (i = i.reverse()), this.pushStack(i, e, Y.call(arguments).join(",")) } }), G.extend({ filter: function(e, t, n) { return n && (e = ":not(" + e + ")"), 1 === t.length ? G.find.matchesSelector(t[0], e) ? [t[0]] : [] : G.find.matches(e, t) }, dir: function(e, n, r) { for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !G(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n]; return i }, sibling: function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } });
    var qt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Rt = / jQuery\d+="(?:null|\d+)"/g,
        It = /^\s+/,
        Bt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Wt = /<([\w:]+)/,
        zt = /<tbody/i,
        Ut = /<|&#?\w+;/,
        Xt = /<(?:script|style|link)/i,
        Yt = /<(?:script|object|embed|option|style)/i,
        Jt = new RegExp("<(?:" + qt + ")[\\s/>]", "i"),
        Kt = /^(?:checkbox|radio)$/,
        Vt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Qt = /\/(java|ecma)script/i,
        Gt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Zt = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] },
        en = c(I),
        tn = en.appendChild(I.createElement("div"));
    Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, G.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]), G.fn.extend({
            text: function(e) { return G.access(this, function(e) { return e === t ? G.text(this) : this.empty().append((this[0] && this[0].ownerDocument || I).createTextNode(e)) }, null, e, arguments.length) },
            wrapAll: function(e) { if (G.isFunction(e)) return this.each(function(t) { G(this).wrapAll(e.call(this, t)) }); if (this[0]) { var t = G(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild; return e }).append(this) } return this },
            wrapInner: function(e) {
                return G.isFunction(e) ? this.each(function(t) {
                    G(this).wrapInner(e.call(this, t))
                }) : this.each(function() { var t = G(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e) })
            },
            wrap: function(e) { var t = G.isFunction(e); return this.each(function(n) { G(this).wrapAll(t ? e.call(this, n) : e) }) },
            unwrap: function() { return this.parent().each(function() { G.nodeName(this, "body") || G(this).replaceWith(this.childNodes) }).end() },
            append: function() { return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e) }) },
            prepend: function() { return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild) }) },
            before: function() { if (!s(this[0])) return this.domManip(arguments, !1, function(e) { this.parentNode.insertBefore(e, this) }); if (arguments.length) { var e = G.clean(arguments); return this.pushStack(G.merge(e, this), "before", this.selector) } },
            after: function() { if (!s(this[0])) return this.domManip(arguments, !1, function(e) { this.parentNode.insertBefore(e, this.nextSibling) }); if (arguments.length) { var e = G.clean(arguments); return this.pushStack(G.merge(this, e), "after", this.selector) } },
            remove: function(e, t) { for (var n, r = 0; null != (n = this[r]); r++)(!e || G.filter(e, [n]).length) && (!t && 1 === n.nodeType && (G.cleanData(n.getElementsByTagName("*")), G.cleanData([n])), n.parentNode && n.parentNode.removeChild(n)); return this },
            empty: function() { for (var e, t = 0; null != (e = this[t]); t++)
                    for (1 === e.nodeType && G.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild); return this },
            clone: function(e, t) { return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() { return G.clone(this, e, t) }) },
            html: function(e) { return G.access(this, function(e) { var n = this[0] || {},
                        r = 0,
                        i = this.length; if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Rt, "") : t; if (!("string" != typeof e || Xt.test(e) || !G.support.htmlSerialize && Jt.test(e) || !G.support.leadingWhitespace && It.test(e) || Zt[(Wt.exec(e) || ["", ""])[1].toLowerCase()])) { e = e.replace(Bt, "<$1></$2>"); try { for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (G.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                            n = 0 } catch (o) {} } n && this.empty().append(e) }, null, e, arguments.length) },
            replaceWith: function(e) { return s(this[0]) ? this.length ? this.pushStack(G(G.isFunction(e) ? e() : e), "replaceWith", e) : this : G.isFunction(e) ? this.each(function(t) { var n = G(this),
                        r = n.html();
                    n.replaceWith(e.call(this, t, r)) }) : ("string" != typeof e && (e = G(e).detach()), this.each(function() { var t = this.nextSibling,
                        n = this.parentNode;
                    G(this).remove(), t ? G(t).before(e) : G(n).append(e) })) },
            detach: function(e) { return this.remove(e, !0) },
            domManip: function(e, n, r) { e = [].concat.apply([], e); var i, o, a, s, l = 0,
                    u = e[0],
                    c = [],
                    p = this.length; if (!G.support.checkClone && p > 1 && "string" == typeof u && Vt.test(u)) return this.each(function() { G(this).domManip(e, n, r) }); if (G.isFunction(u)) return this.each(function(i) { var o = G(this);
                    e[0] = u.call(this, i, n ? o.html() : t), o.domManip(e, n, r) }); if (this[0]) { if (i = G.buildFragment(e, this, c), a = i.fragment, o = a.firstChild, 1 === a.childNodes.length && (a = o), o)
                        for (n = n && G.nodeName(o, "tr"), s = i.cacheable || p - 1; p > l; l++) r.call(n && G.nodeName(this[l], "table") ? f(this[l], "tbody") : this[l], l === s ? a : G.clone(a, !0, !0));
                    a = o = null, c.length && G.each(c, function(e, t) { t.src ? G.ajax ? G.ajax({ url: t.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : G.error("no ajax") : G.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Gt, "")), t.parentNode && t.parentNode.removeChild(t) }) } return this }
        }), G.buildFragment = function(e, n, r) { var i, o, a, s = e[0]; return n = n || I, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, 1 === e.length && "string" == typeof s && s.length < 512 && n === I && "<" === s.charAt(0) && !Yt.test(s) && (G.support.checkClone || !Vt.test(s)) && (G.support.html5Clone || !Jt.test(s)) && (o = !0, i = G.fragments[s], a = i !== t), i || (i = n.createDocumentFragment(), G.clean(e, n, i, r), o && (G.fragments[s] = a && i)), { fragment: i, cacheable: o } }, G.fragments = {}, G.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { G.fn[e] = function(n) { var r, i = 0,
                    o = [],
                    a = G(n),
                    s = a.length,
                    l = 1 === this.length && this[0].parentNode; if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === s) return a[t](this[0]), this; for (; s > i; i++) r = (i > 0 ? this.clone(!0) : this).get(), G(a[i])[t](r), o = o.concat(r); return this.pushStack(o, e, a.selector) } }), G.extend({ clone: function(e, t, n) { var r, i, o, a; if (G.support.html5Clone || G.isXMLDoc(e) || !Jt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML, tn.removeChild(a = tn.firstChild)), !(G.support.noCloneEvent && G.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || G.isXMLDoc(e)))
                    for (d(e, a), r = h(e), i = h(a), o = 0; r[o]; ++o) i[o] && d(r[o], i[o]); if (t && (p(e, a), n))
                    for (r = h(e), i = h(a), o = 0; r[o]; ++o) p(r[o], i[o]); return r = i = null, a }, clean: function(e, t, n, r) { var i, o, a, s, l, u, f, p, d, h, m, y = t === I && en,
                    v = []; for (t && "undefined" != typeof t.createDocumentFragment || (t = I), i = 0; null != (a = e[i]); i++)
                    if ("number" == typeof a && (a += ""), a) { if ("string" == typeof a)
                            if (Ut.test(a)) { for (y = y || c(t), f = t.createElement("div"), y.appendChild(f), a = a.replace(Bt, "<$1></$2>"), s = (Wt.exec(a) || ["", ""])[1].toLowerCase(), l = Zt[s] || Zt._default, u = l[0], f.innerHTML = l[1] + a + l[2]; u--;) f = f.lastChild; if (!G.support.tbody)
                                    for (p = zt.test(a), d = "table" !== s || p ? "<table>" !== l[1] || p ? [] : f.childNodes : f.firstChild && f.firstChild.childNodes, o = d.length - 1; o >= 0; --o) G.nodeName(d[o], "tbody") && !d[o].childNodes.length && d[o].parentNode.removeChild(d[o]);!G.support.leadingWhitespace && It.test(a) && f.insertBefore(t.createTextNode(It.exec(a)[0]), f.firstChild), a = f.childNodes, f.parentNode.removeChild(f) } else a = t.createTextNode(a);
                        a.nodeType ? v.push(a) : G.merge(v, a) } if (f && (a = f = y = null), !G.support.appendChecked)
                    for (i = 0; null != (a = v[i]); i++) G.nodeName(a, "input") ? g(a) : "undefined" != typeof a.getElementsByTagName && G.grep(a.getElementsByTagName("input"), g); if (n)
                    for (h = function(e) { return !e.type || Qt.test(e.type) ? r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : void 0 }, i = 0; null != (a = v[i]); i++) G.nodeName(a, "script") && h(a) || (n.appendChild(a), "undefined" != typeof a.getElementsByTagName && (m = G.grep(G.merge([], a.getElementsByTagName("script")), h), v.splice.apply(v, [i + 1, 0].concat(m)), i += m.length)); return v }, cleanData: function(e, t) { for (var n, r, i, o, a = 0, s = G.expando, l = G.cache, u = G.support.deleteExpando, c = G.event.special; null != (i = e[a]); a++)
                    if ((t || G.acceptData(i)) && (r = i[s], n = r && l[r])) { if (n.events)
                            for (o in n.events) c[o] ? G.event.remove(i, o) : G.removeEvent(i, o, n.handle);
                        l[r] && (delete l[r], u ? delete i[s] : i.removeAttribute ? i.removeAttribute(s) : i[s] = null, G.deletedIds.push(r)) } } }),
        function() { var e, t;
            G.uaMatch = function(e) { e = e.toLowerCase(); var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || []; return { browser: t[1] || "", version: t[2] || "0" } }, e = G.uaMatch(W.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), G.browser = t, G.sub = function() {
                function e(t, n) { return new e.fn.init(t, n) } G.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, r) { return r && r instanceof G && !(r instanceof e) && (r = e(r)), G.fn.init.call(this, n, r, t) }, e.fn.init.prototype = e.fn; var t = e(I); return e } }();
    var nn, rn, on, an = /alpha\([^)]*\)/i,
        sn = /opacity=([^)]*)/,
        ln = /^(top|right|bottom|left)$/,
        un = /^(none|table(?!-c[ea]).+)/,
        cn = /^margin/,
        fn = new RegExp("^(" + Z + ")(.*)$", "i"),
        pn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
        dn = new RegExp("^([-+])=(" + Z + ")", "i"),
        hn = { BODY: "block" },
        gn = { position: "absolute", visibility: "hidden", display: "block" },
        mn = { letterSpacing: 0, fontWeight: 400 },
        yn = ["Top", "Right", "Bottom", "Left"],
        vn = ["Webkit", "O", "Moz", "ms"],
        bn = G.fn.toggle;
    G.fn.extend({ css: function(e, n) { return G.access(this, function(e, n, r) { return r !== t ? G.style(e, n, r) : G.css(e, n) }, e, n, arguments.length > 1) }, show: function() { return v(this, !0) }, hide: function() { return v(this) }, toggle: function(e, t) { var n = "boolean" == typeof e; return G.isFunction(e) && G.isFunction(t) ? bn.apply(this, arguments) : this.each(function() {
                (n ? e : y(this)) ? G(this).show(): G(this).hide() }) } }), G.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = nn(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": G.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function(e, n, r, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var o, a, s, l = G.camelCase(n),
                    u = e.style; if (n = G.cssProps[l] || (G.cssProps[l] = m(u, l)), s = G.cssHooks[n] || G.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n]; if (a = typeof r, "string" === a && (o = dn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(G.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" === a && !G.cssNumber[l] && (r += "px"), s && "set" in s && (r = s.set(e, r, i)) === t))) try { u[n] = r } catch (c) {} } }, css: function(e, n, r, i) { var o, a, s, l = G.camelCase(n); return n = G.cssProps[l] || (G.cssProps[l] = m(e.style, l)), s = G.cssHooks[n] || G.cssHooks[l], s && "get" in s && (o = s.get(e, !0, i)), o === t && (o = nn(e, n)), "normal" === o && n in mn && (o = mn[n]), r || i !== t ? (a = parseFloat(o), r || G.isNumeric(a) ? a || 0 : o) : o }, swap: function(e, t, n) { var r, i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e); for (i in t) e.style[i] = o[i]; return r } }), e.getComputedStyle ? nn = function(t, n) { var r, i, o, a, s = e.getComputedStyle(t, null),
            l = t.style; return s && (r = s.getPropertyValue(n) || s[n], "" === r && !G.contains(t.ownerDocument, t) && (r = G.style(t, n)), pn.test(r) && cn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = r, r = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), r } : I.documentElement.currentStyle && (nn = function(e, t) { var n, r, i = e.currentStyle && e.currentStyle[t],
            o = e.style; return null == i && o && o[t] && (i = o[t]), pn.test(i) && !ln.test(t) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : i, i = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), "" === i ? "auto" : i }), G.each(["height", "width"], function(e, t) { G.cssHooks[t] = { get: function(e, n, r) { return n ? 0 === e.offsetWidth && un.test(nn(e, "display")) ? G.swap(e, gn, function() { return x(e, t, r) }) : x(e, t, r) : void 0 }, set: function(e, n, r) { return b(e, n, r ? w(e, t, r, G.support.boxSizing && "border-box" === G.css(e, "boxSizing")) : 0) } } }), G.support.opacity || (G.cssHooks.opacity = { get: function(e, t) { return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function(e, t) { var n = e.style,
                r = e.currentStyle,
                i = G.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, t >= 1 && "" === G.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = an.test(o) ? o.replace(an, i) : o + " " + i) } }), G(function() { G.support.reliableMarginRight || (G.cssHooks.marginRight = { get: function(e, t) { return G.swap(e, { display: "inline-block" }, function() { return t ? nn(e, "marginRight") : void 0 }) } }), !G.support.pixelPosition && G.fn.position && G.each(["top", "left"], function(e, t) { G.cssHooks[t] = { get: function(e, n) { if (n) { var r = nn(e, t); return pn.test(r) ? G(e).position()[t] + "px" : r } } } }) }), G.expr && G.expr.filters && (G.expr.filters.hidden = function(e) { return 0 === e.offsetWidth && 0 === e.offsetHeight || !G.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nn(e, "display")) }, G.expr.filters.visible = function(e) { return !G.expr.filters.hidden(e) }), G.each({ margin: "", padding: "", border: "Width" }, function(e, t) { G.cssHooks[e + t] = { expand: function(n) { var r, i = "string" == typeof n ? n.split(" ") : [n],
                    o = {}; for (r = 0; 4 > r; r++) o[e + yn[r] + t] = i[r] || i[r - 2] || i[0]; return o } }, cn.test(e) || (G.cssHooks[e + t].set = b) });
    var wn = /%20/g,
        xn = /\[\]$/,
        _n = /\r?\n/g,
        kn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Tn = /^(?:select|textarea)/i;
    G.fn.extend({ serialize: function() { return G.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { return this.elements ? G.makeArray(this.elements) : this }).filter(function() { return this.name && !this.disabled && (this.checked || Tn.test(this.nodeName) || kn.test(this.type)) }).map(function(e, t) { var n = G(this).val(); return null == n ? null : G.isArray(n) ? G.map(n, function(e) { return { name: t.name, value: e.replace(_n, "\r\n") } }) : { name: t.name, value: n.replace(_n, "\r\n") } }).get() } }), G.param = function(e, n) { var r, i = [],
            o = function(e, t) { t = G.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) }; if (n === t && (n = G.ajaxSettings && G.ajaxSettings.traditional), G.isArray(e) || e.jquery && !G.isPlainObject(e)) G.each(e, function() { o(this.name, this.value) });
        else
            for (r in e) k(r, e[r], n, o); return i.join("&").replace(wn, "+") };
    var Cn, En, Sn = /#.*$/,
        Nn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        An = /^(?:GET|HEAD)$/,
        Ln = /^\/\//,
        jn = /\?/,
        Mn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Hn = /([?&])_=[^&]*/,
        Fn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        $n = G.fn.load,
        On = {},
        Pn = {},
        qn = ["*/"] + ["*"];
    try { En = B.href } catch (Rn) { En = I.createElement("a"), En.href = "", En = En.href } Cn = Fn.exec(En.toLowerCase()) || [], G.fn.load = function(e, n, r) { if ("string" != typeof e && $n) return $n.apply(this, arguments); if (!this.length) return this; var i, o, a, s = this,
            l = e.indexOf(" "); return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), G.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), G.ajax({ url: e, type: o, dataType: "html", data: n, complete: function(e, t) { r && s.each(r, a || [e.responseText, t, e]) } }).done(function(e) { a = arguments, s.html(i ? G("<div>").append(e.replace(Mn, "")).find(i) : e) }), this }, G.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) { G.fn[t] = function(e) { return this.on(t, e) } }), G.each(["get", "post"], function(e, n) { G[n] = function(e, r, i, o) { return G.isFunction(r) && (o = o || i, i = r, r = t), G.ajax({ type: n, url: e, data: r, success: i, dataType: o }) } }), G.extend({ getScript: function(e, n) { return G.get(e, t, n, "script") }, getJSON: function(e, t, n) { return G.get(e, t, n, "json") }, ajaxSetup: function(e, t) { return t ? E(e, G.ajaxSettings) : (t = e, e = G.ajaxSettings), E(e, t), e }, ajaxSettings: { url: En, isLocal: Dn.test(Cn[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": qn }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": e.String, "text html": !0, "text json": G.parseJSON, "text xml": G.parseXML }, flatOptions: { context: !0, url: !0 } }, ajaxPrefilter: T(On), ajaxTransport: T(Pn), ajax: function(e, n) {
            function r(e, n, r, a) { var u, f, v, b, x, k = n;
                2 !== w && (w = 2, l && clearTimeout(l), s = t, o = a || "", _.readyState = e > 0 ? 4 : 0, r && (b = S(p, _, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (G.lastModified[i] = x), x = _.getResponseHeader("Etag"), x && (G.etag[i] = x)), 304 === e ? (k = "notmodified", u = !0) : (u = N(p, b), k = u.state, f = u.data, v = u.error, u = !v)) : (v = k, (!k || e) && (k = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (n || k) + "", u ? g.resolveWith(d, [f, k, _]) : g.rejectWith(d, [_, k, v]), _.statusCode(y), y = t, c && h.trigger("ajax" + (u ? "Success" : "Error"), [_, p, u ? f : v]), m.fireWith(d, [_, k]), c && (h.trigger("ajaxComplete", [_, p]), --G.active || G.event.trigger("ajaxStop"))) } "object" == typeof e && (n = e, e = t), n = n || {}; var i, o, a, s, l, u, c, f, p = G.ajaxSetup({}, n),
                d = p.context || p,
                h = d !== p && (d.nodeType || d instanceof G) ? G(d) : G.event,
                g = G.Deferred(),
                m = G.Callbacks("once memory"),
                y = p.statusCode || {},
                v = {},
                b = {},
                w = 0,
                x = "canceled",
                _ = { readyState: 0, setRequestHeader: function(e, t) { if (!w) { var n = e.toLowerCase();
                            e = b[n] = b[n] || e, v[e] = t } return this }, getAllResponseHeaders: function() { return 2 === w ? o : null }, getResponseHeader: function(e) { var n; if (2 === w) { if (!a)
                                for (a = {}; n = Nn.exec(o);) a[n[1].toLowerCase()] = n[2];
                            n = a[e.toLowerCase()] } return n === t ? null : n }, overrideMimeType: function(e) { return w || (p.mimeType = e), this }, abort: function(e) { return e = e || x, s && s.abort(e), r(0, e), this } }; if (g.promise(_), _.success = _.done, _.error = _.fail, _.complete = m.add, _.statusCode = function(e) { if (e) { var t; if (2 > w)
                            for (t in e) y[t] = [y[t], e[t]];
                        else t = e[_.status], _.always(t) } return this }, p.url = ((e || p.url) + "").replace(Sn, "").replace(Ln, Cn[1] + "//"), p.dataTypes = G.trim(p.dataType || "*").toLowerCase().split(tt), null == p.crossDomain && (u = Fn.exec(p.url.toLowerCase()), p.crossDomain = !(!u || u[1] === Cn[1] && u[2] === Cn[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == (Cn[3] || ("http:" === Cn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = G.param(p.data, p.traditional)), C(On, p, n, _), 2 === w) return _; if (c = p.global, p.type = p.type.toUpperCase(), p.hasContent = !An.test(p.type), c && 0 === G.active++ && G.event.trigger("ajaxStart"), !p.hasContent && (p.data && (p.url += (jn.test(p.url) ? "&" : "?") + p.data, delete p.data), i = p.url, p.cache === !1)) { var k = G.now(),
                    T = p.url.replace(Hn, "$1_=" + k);
                p.url = T + (T === p.url ? (jn.test(p.url) ? "&" : "?") + "_=" + k : "") }(p.data && p.hasContent && p.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", p.contentType), p.ifModified && (i = i || p.url, G.lastModified[i] && _.setRequestHeader("If-Modified-Since", G.lastModified[i]), G.etag[i] && _.setRequestHeader("If-None-Match", G.etag[i])), _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + qn + "; q=0.01" : "") : p.accepts["*"]); for (f in p.headers) _.setRequestHeader(f, p.headers[f]); if (!p.beforeSend || p.beforeSend.call(d, _, p) !== !1 && 2 !== w) { x = "abort"; for (f in { success: 1, error: 1, complete: 1 }) _[f](p[f]); if (s = C(Pn, p, n, _)) { _.readyState = 1, c && h.trigger("ajaxSend", [_, p]), p.async && p.timeout > 0 && (l = setTimeout(function() { _.abort("timeout") }, p.timeout)); try { w = 1, s.send(v, r) } catch (E) { if (!(2 > w)) throw E;
                        r(-1, E) } } else r(-1, "No Transport"); return _ } return _.abort() }, active: 0, lastModified: {}, etag: {} });
    var In = [],
        Bn = /\?/,
        Wn = /(=)\?(?=&|$)|\?\?/,
        zn = G.now();
    G.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = In.pop() || G.expando + "_" + zn++; return this[e] = !0, e } }), G.ajaxPrefilter("json jsonp", function(n, r, i) { var o, a, s, l = n.data,
            u = n.url,
            c = n.jsonp !== !1,
            f = c && Wn.test(u),
            p = c && !f && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Wn.test(l); return "jsonp" === n.dataTypes[0] || f || p ? (o = n.jsonpCallback = G.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a = e[o], f ? n.url = u.replace(Wn, "$1" + o) : p ? n.data = l.replace(Wn, "$1" + o) : c && (n.url += (Bn.test(u) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() { return s || G.error(o + " was not called"), s[0] }, n.dataTypes[0] = "json", e[o] = function() { s = arguments }, i.always(function() { e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, In.push(o)), s && G.isFunction(a) && a(s[0]), s = a = t }), "script") : void 0 }), G.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /javascript|ecmascript/ }, converters: { "text script": function(e) { return G.globalEval(e), e } } }), G.ajaxPrefilter("script", function(e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), G.ajaxTransport("script", function(e) { if (e.crossDomain) { var n, r = I.head || I.getElementsByTagName("head")[0] || I.documentElement; return { send: function(i, o) { n = I.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                        (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")) }, r.insertBefore(n, r.firstChild) }, abort: function() { n && n.onload(0, 1) } } } });
    var Un, Xn = e.ActiveXObject ? function() { for (var e in Un) Un[e](0, 1) } : !1,
        Yn = 0;
    G.ajaxSettings.xhr = e.ActiveXObject ? function() { return !this.isLocal && D() || A() } : D,
        function(e) { G.extend(G.support, { ajax: !!e, cors: !!e && "withCredentials" in e }) }(G.ajaxSettings.xhr()), G.support.ajax && G.ajaxTransport(function(n) { if (!n.crossDomain || G.support.cors) { var r; return { send: function(i, o) { var a, s, l = n.xhr(); if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (s in n.xhrFields) l[s] = n.xhrFields[s];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest"); try { for (s in i) l.setRequestHeader(s, i[s]) } catch (u) {} l.send(n.hasContent && n.data || null), r = function(e, i) { var s, u, c, f, p; try { if (r && (i || 4 === l.readyState))
                                    if (r = t, a && (l.onreadystatechange = G.noop, Xn && delete Un[a]), i) 4 !== l.readyState && l.abort();
                                    else { s = l.status, c = l.getAllResponseHeaders(), f = {}, p = l.responseXML, p && p.documentElement && (f.xml = p); try { f.text = l.responseText } catch (d) {} try { u = l.statusText } catch (d) { u = "" } s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404 } } catch (h) { i || o(-1, h) } f && o(s, u, f, c) }, n.async ? 4 === l.readyState ? setTimeout(r, 0) : (a = ++Yn, Xn && (Un || (Un = {}, G(e).unload(Xn)), Un[a] = r), l.onreadystatechange = r) : r() }, abort: function() { r && r(0, 1) } } } });
    var Jn, Kn, Vn = /^(?:toggle|show|hide)$/,
        Qn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
        Gn = /queueHooks$/,
        Zn = [F],
        er = { "*": [function(e, t) { var n, r, i = this.createTween(e, t),
                    o = Qn.exec(t),
                    a = i.cur(),
                    s = +a || 0,
                    l = 1,
                    u = 20; if (o) { if (n = +o[2], r = o[3] || (G.cssNumber[e] ? "" : "px"), "px" !== r && s) { s = G.css(i.elem, e, !0) || n || 1;
                        do l = l || ".5", s /= l, G.style(i.elem, e, s + r); while (l !== (l = i.cur() / a) && 1 !== l && --u) } i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n } return i }] };
    G.Animation = G.extend(M, { tweener: function(e, t) { G.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); for (var n, r = 0, i = e.length; i > r; r++) n = e[r], er[n] = er[n] || [], er[n].unshift(t) }, prefilter: function(e, t) { t ? Zn.unshift(e) : Zn.push(e) } }), G.Tween = $, $.prototype = { constructor: $, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (G.cssNumber[n] ? "" : "px") }, cur: function() { var e = $.propHooks[this.prop]; return e && e.get ? e.get(this) : $.propHooks._default.get(this) }, run: function(e) { var t, n = $.propHooks[this.prop]; return this.pos = t = this.options.duration ? G.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this } }, $.prototype.init.prototype = $.prototype, $.propHooks = { _default: { get: function(e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = G.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function(e) { G.fx.step[e.prop] ? G.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[G.cssProps[e.prop]] || G.cssHooks[e.prop]) ? G.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, $.propHooks.scrollTop = $.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, G.each(["toggle", "show", "hide"], function(e, t) { var n = G.fn[t];
        G.fn[t] = function(r, i, o) { return null == r || "boolean" == typeof r || !e && G.isFunction(r) && G.isFunction(i) ? n.apply(this, arguments) : this.animate(O(t, !0), r, i, o) } }), G.fn.extend({ fadeTo: function(e, t, n, r) { return this.filter(y).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function(e, t, n, r) { var i = G.isEmptyObject(e),
                o = G.speed(t, n, r),
                a = function() { var t = M(this, G.extend({}, e), o);
                    i && t.stop(!0) }; return i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a) }, stop: function(e, n, r) { var i = function(e) { var t = e.stop;
                delete e.stop, t(r) }; return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() { var t = !0,
                    n = null != e && e + "queueHooks",
                    o = G.timers,
                    a = G._data(this); if (n) a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && Gn.test(n) && i(a[n]); for (n = o.length; n--;) o[n].elem === this && (null == e || o[n].queue === e) && (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && G.dequeue(this, e) }) } }), G.each({ slideDown: O("show"), slideUp: O("hide"), slideToggle: O("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { G.fn[e] = function(e, n, r) { return this.animate(t, e, n, r) } }), G.speed = function(e, t, n) { var r = e && "object" == typeof e ? G.extend({}, e) : { complete: n || !n && t || G.isFunction(e) && e, duration: e, easing: n && t || t && !G.isFunction(t) && t }; return r.duration = G.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in G.fx.speeds ? G.fx.speeds[r.duration] : G.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() { G.isFunction(r.old) && r.old.call(this), r.queue && G.dequeue(this, r.queue) }, r }, G.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 } }, G.timers = [], G.fx = $.prototype.init, G.fx.tick = function() { var e, n = G.timers,
            r = 0; for (Jn = G.now(); r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || G.fx.stop(), Jn = t }, G.fx.timer = function(e) { e() && G.timers.push(e) && !Kn && (Kn = setInterval(G.fx.tick, G.fx.interval)) }, G.fx.interval = 13, G.fx.stop = function() { clearInterval(Kn), Kn = null }, G.fx.speeds = { slow: 600, fast: 200, _default: 400 }, G.fx.step = {}, G.expr && G.expr.filters && (G.expr.filters.animated = function(e) { return G.grep(G.timers, function(t) { return e === t.elem }).length });
    var tr = /^(?:body|html)$/i;
    G.fn.offset = function(e) { if (arguments.length) return e === t ? this : this.each(function(t) { G.offset.setOffset(this, e, t) }); var n, r, i, o, a, s, l, u = { top: 0, left: 0 },
            c = this[0],
            f = c && c.ownerDocument; if (f) return (r = f.body) === c ? G.offset.bodyOffset(c) : (n = f.documentElement, G.contains(n, c) ? ("undefined" != typeof c.getBoundingClientRect && (u = c.getBoundingClientRect()), i = P(f), o = n.clientTop || r.clientTop || 0, a = n.clientLeft || r.clientLeft || 0, s = i.pageYOffset || n.scrollTop, l = i.pageXOffset || n.scrollLeft, { top: u.top + s - o, left: u.left + l - a }) : u) }, G.offset = { bodyOffset: function(e) { var t = e.offsetTop,
                n = e.offsetLeft; return G.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(G.css(e, "marginTop")) || 0, n += parseFloat(G.css(e, "marginLeft")) || 0), { top: t, left: n } }, setOffset: function(e, t, n) { var r = G.css(e, "position"); "static" === r && (e.style.position = "relative"); var i, o, a = G(e),
                s = a.offset(),
                l = G.css(e, "top"),
                u = G.css(e, "left"),
                c = ("absolute" === r || "fixed" === r) && G.inArray("auto", [l, u]) > -1,
                f = {},
                p = {};
            c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), G.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f) } }, G.fn.extend({ position: function() { if (this[0]) { var e = this[0],
                    t = this.offsetParent(),
                    n = this.offset(),
                    r = tr.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset(); return n.top -= parseFloat(G.css(e, "marginTop")) || 0, n.left -= parseFloat(G.css(e, "marginLeft")) || 0, r.top += parseFloat(G.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(G.css(t[0], "borderLeftWidth")) || 0, { top: n.top - r.top, left: n.left - r.left } } }, offsetParent: function() { return this.map(function() { for (var e = this.offsetParent || I.body; e && !tr.test(e.nodeName) && "static" === G.css(e, "position");) e = e.offsetParent; return e || I.body }) } }), G.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, n) { var r = /Y/.test(n);
        G.fn[e] = function(i) { return G.access(this, function(e, i, o) { var a = P(e); return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? G(a).scrollLeft() : o, r ? o : G(a).scrollTop()) : e[i] = o, void 0) }, e, i, arguments.length, null) } }), G.each({ Height: "height", Width: "width" }, function(e, n) { G.each({ padding: "inner" + e, content: n, "": "outer" + e }, function(r, i) { G.fn[i] = function(i, o) { var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border"); return G.access(this, function(n, r, i) { var o; return G.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? G.css(n, r, i, s) : G.style(n, r, i, s) }, n, a ? i : t, a, null) } }) }), e.jQuery = e.$ = G, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() { return G })
}(window),
function(e) {
    function t() {
        function t(e) { var i = 1e12 > e ? i = performance.now ? performance.now() + performance.timing.navigationStart : Date.now() : e || (new Date).getTime();
            i - r >= 1e3 && (f._updateTargets(), r = i), n(t) } this.regional = [], this.regional[""] = { labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"], labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"], compactLabels: ["y", "m", "w", "d"], whichLabels: null, digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], timeSeparator: ":", isRTL: !1 }, this._defaults = { until: null, since: null, timezone: null, serverSync: null, format: "dHMS", layout: "", compact: !1, significant: 0, description: "", expiryUrl: "", expiryText: "", alwaysExpire: !1, onExpiry: null, onTick: null, tickInterval: 1 }, e.extend(this._defaults, this.regional[""]), this._serverSyncs = []; var n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
            r = 0;!n || e.noRequestAnimationFrame ? (e.noRequestAnimationFrame = null, setInterval(function() { f._updateTargets() }, 980)) : (r = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || (new Date).getTime(), n(t)) }

    function n(t, n) { return "option" == t && (0 == n.length || 1 == n.length && "string" == typeof n[0]) ? !0 : e.inArray(t, c) > -1 }
    var r = 0,
        i = 1,
        o = 2,
        a = 3,
        s = 4,
        l = 5,
        u = 6;
    e.extend(t.prototype, {
        markerClassName: "hasCountdown",
        propertyName: "countdown",
        _rtlClass: "countdown_rtl",
        _sectionClass: "countdown_section",
        _amountClass: "countdown_amount",
        _rowClass: "countdown_row",
        _holdingClass: "countdown_holding",
        _showClass: "countdown_show",
        _descrClass: "countdown_descr",
        _timerTargets: [],
        setDefaults: function(t) { this._resetExtraLabels(this._defaults, t), e.extend(this._defaults, t || {}) },
        UTCDate: function(e, t, n, r, i, o, a, s) { "object" == typeof t && t.constructor == Date && (s = t.getMilliseconds(), a = t.getSeconds(), o = t.getMinutes(), i = t.getHours(), r = t.getDate(), n = t.getMonth(), t = t.getFullYear()); var l = new Date; return l.setUTCFullYear(t), l.setUTCDate(1), l.setUTCMonth(n || 0), l.setUTCDate(r || 1), l.setUTCHours(i || 0), l.setUTCMinutes((o || 0) - (Math.abs(e) < 30 ? 60 * e : e)), l.setUTCSeconds(a || 0), l.setUTCMilliseconds(s || 0), l },
        periodsToSeconds: function(e) { return 31557600 * e[0] + 2629800 * e[1] + 604800 * e[2] + 86400 * e[3] + 3600 * e[4] + 60 * e[5] + e[6] },
        _attachPlugin: function(t, n) { if (t = e(t), !t.hasClass(this.markerClassName)) { var r = { options: e.extend({}, this._defaults), _periods: [0, 0, 0, 0, 0, 0, 0] };
                t.addClass(this.markerClassName).data(this.propertyName, r), this._optionPlugin(t, n) } },
        _addTarget: function(e) { this._hasTarget(e) || this._timerTargets.push(e) },
        _hasTarget: function(t) { return e.inArray(t, this._timerTargets) > -1 },
        _removeTarget: function(t) { this._timerTargets = e.map(this._timerTargets, function(e) { return e == t ? null : e }) },
        _updateTargets: function() { for (var e = this._timerTargets.length - 1; e >= 0; e--) this._updateCountdown(this._timerTargets[e]) },
        _optionPlugin: function(t, n, r) { t = e(t); var i = t.data(this.propertyName); if (!n || "string" == typeof n && null == r) { var o = n; return n = (i || {}).options, n && o ? n[o] : n } if (t.hasClass(this.markerClassName)) { if (n = n || {}, "string" == typeof n) { var o = n;
                    n = {}, n[o] = r } this._resetExtraLabels(i.options, n); var a = i.options.timezone != n.timezone;
                e.extend(i.options, n), this._adjustSettings(t, i, null != n.until || null != n.since || a); var s = new Date;
                (i._since && i._since < s || i._until && i._until > s) && this._addTarget(t[0]), this._updateCountdown(t, i) } },
        _updateCountdown: function(t, n) { var r = e(t); if (n = n || r.data(this.propertyName)) { if (r.html(this._generateHTML(n)).toggleClass(this._rtlClass, n.options.isRTL), e.isFunction(n.options.onTick)) { var i = "lap" != n._hold ? n._periods : this._calculatePeriods(n, n._show, n.options.significant, new Date);
                    (1 == n.options.tickInterval || 0 == this.periodsToSeconds(i) % n.options.tickInterval) && n.options.onTick.apply(t, [i]) } var o = "pause" != n._hold && (n._since ? n._now.getTime() < n._since.getTime() : n._now.getTime() >= n._until.getTime()); if (o && !n._expiring) { if (n._expiring = !0, this._hasTarget(t) || n.options.alwaysExpire) { if (this._removeTarget(t), e.isFunction(n.options.onExpiry) && n.options.onExpiry.apply(t, []), n.options.expiryText) { var a = n.options.layout;
                            n.options.layout = n.options.expiryText, this._updateCountdown(t, n), n.options.layout = a } n.options.expiryUrl && (window.location = n.options.expiryUrl) } n._expiring = !1 } else "pause" == n._hold && this._removeTarget(t);
                r.data(this.propertyName, n) } },
        _resetExtraLabels: function(e, t) { var n = !1; for (var r in t)
                if ("whichLabels" != r && r.match(/[Ll]abels/)) { n = !0; break } if (n)
                for (var r in e) r.match(/[Ll]abels[02-9]|compactLabels1/) && (e[r] = null) },
        _adjustSettings: function(t, n, r) { for (var i, o = 0, a = null, s = 0; s < this._serverSyncs.length; s++)
                if (this._serverSyncs[s][0] == n.options.serverSync) { a = this._serverSyncs[s][1]; break } if (null != a) o = n.options.serverSync ? a : 0, i = new Date;
            else { var l = e.isFunction(n.options.serverSync) ? n.options.serverSync.apply(t, []) : null;
                i = new Date, o = l ? i.getTime() - l.getTime() : 0, this._serverSyncs.push([n.options.serverSync, o]) } var u = n.options.timezone;
            u = null == u ? -i.getTimezoneOffset() : u, (r || !r && null == n._until && null == n._since) && (n._since = n.options.since, null != n._since && (n._since = this.UTCDate(u, this._determineTime(n._since, null)), n._since && o && n._since.setMilliseconds(n._since.getMilliseconds() + o)), n._until = this.UTCDate(u, this._determineTime(n.options.until, i)), o && n._until.setMilliseconds(n._until.getMilliseconds() + o)), n._show = this._determineShow(n) },
        _destroyPlugin: function(t) {
            t = e(t), t.hasClass(this.markerClassName) && (this._removeTarget(t[0]), t.removeClass(this.markerClassName).empty().removeData(this.propertyName))
        },
        _pausePlugin: function(e) { this._hold(e, "pause") },
        _lapPlugin: function(e) { this._hold(e, "lap") },
        _resumePlugin: function(e) { this._hold(e, null) },
        _hold: function(t, n) { var r = e.data(t, this.propertyName); if (r) { if ("pause" == r._hold && !n) { r._periods = r._savePeriods; var i = r._since ? "-" : "+";
                    r[r._since ? "_since" : "_until"] = this._determineTime(i + r._periods[0] + "y" + i + r._periods[1] + "o" + i + r._periods[2] + "w" + i + r._periods[3] + "d" + i + r._periods[4] + "h" + i + r._periods[5] + "m" + i + r._periods[6] + "s"), this._addTarget(t) } r._hold = n, r._savePeriods = "pause" == n ? r._periods : null, e.data(t, this.propertyName, r), this._updateCountdown(t, r) } },
        _getTimesPlugin: function(t) { var n = e.data(t, this.propertyName); return n ? "pause" == n._hold ? n._savePeriods : n._hold ? this._calculatePeriods(n, n._show, n.options.significant, new Date) : n._periods : null },
        _determineTime: function(e, t) { var n = function(e) { var t = new Date; return t.setTime(t.getTime() + 1e3 * e), t },
                r = function(e) { e = e.toLowerCase(); for (var t = new Date, n = t.getFullYear(), r = t.getMonth(), i = t.getDate(), o = t.getHours(), a = t.getMinutes(), s = t.getSeconds(), l = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, u = l.exec(e); u;) { switch (u[2] || "s") {
                            case "s":
                                s += parseInt(u[1], 10); break;
                            case "m":
                                a += parseInt(u[1], 10); break;
                            case "h":
                                o += parseInt(u[1], 10); break;
                            case "d":
                                i += parseInt(u[1], 10); break;
                            case "w":
                                i += 7 * parseInt(u[1], 10); break;
                            case "o":
                                r += parseInt(u[1], 10), i = Math.min(i, f._getDaysInMonth(n, r)); break;
                            case "y":
                                n += parseInt(u[1], 10), i = Math.min(i, f._getDaysInMonth(n, r)) } u = l.exec(e) } return new Date(n, r, i, o, a, s, 0) },
                i = null == e ? t : "string" == typeof e ? r(e) : "number" == typeof e ? n(e) : e; return i && i.setMilliseconds(0), i },
        _getDaysInMonth: function(e, t) { return 32 - new Date(e, t, 32).getDate() },
        _normalLabels: function(e) { return e },
        _generateHTML: function(t) { var n = this;
            t._periods = t._hold ? t._periods : this._calculatePeriods(t, t._show, t.options.significant, new Date); for (var c = !1, p = 0, d = t.options.significant, h = e.extend({}, t._show), g = r; u >= g; g++) c |= "?" == t._show[g] && t._periods[g] > 0, h[g] = "?" != t._show[g] || c ? t._show[g] : null, p += h[g] ? 1 : 0, d -= t._periods[g] > 0 ? 1 : 0; for (var m = [!1, !1, !1, !1, !1, !1, !1], g = u; g >= r; g--) t._show[g] && (t._periods[g] ? m[g] = !0 : (m[g] = d > 0, d--)); var y = t.options.compact ? t.options.compactLabels : t.options.labels,
                v = t.options.whichLabels || this._normalLabels,
                b = function(e) { var r = t.options["compactLabels" + v(t._periods[e])]; return h[e] ? n._translateDigits(t, t._periods[e]) + (r ? r[e] : y[e]) + " " : "" },
                w = function(e) { var r = t.options["labels" + v(t._periods[e])]; return !t.options.significant && h[e] || t.options.significant && m[e] ? '<span class="' + f._sectionClass + '">' + '<span class="' + f._amountClass + '">' + n._translateDigits(t, t._periods[e]) + "</span><br/>" + (r ? r[e] : y[e]) + "</span>" : "" }; return t.options.layout ? this._buildLayout(t, h, t.options.layout, t.options.compact, t.options.significant, m) : (t.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (t._hold ? " " + this._holdingClass : "") + '">' + b(r) + b(i) + b(o) + b(a) + (h[s] ? this._minDigits(t, t._periods[s], 2) : "") + (h[l] ? (h[s] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[l], 2) : "") + (h[u] ? (h[s] || h[l] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[u], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (t.options.significant || p) + (t._hold ? " " + this._holdingClass : "") + '">' + w(r) + w(i) + w(o) + w(a) + w(s) + w(l) + w(u)) + "</span>" + (t.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + t.options.description + "</span>" : "") },
        _buildLayout: function(t, n, c, f, p, d) { for (var h = t.options[f ? "compactLabels" : "labels"], g = t.options.whichLabels || this._normalLabels, m = function(e) { return (t.options[(f ? "compactLabels" : "labels") + g(t._periods[e])] || h)[e] }, y = function(e, n) { return t.options.digits[Math.floor(e / n) % 10] }, v = { desc: t.options.description, sep: t.options.timeSeparator, yl: m(r), yn: this._minDigits(t, t._periods[r], 1), ynn: this._minDigits(t, t._periods[r], 2), ynnn: this._minDigits(t, t._periods[r], 3), y1: y(t._periods[r], 1), y10: y(t._periods[r], 10), y100: y(t._periods[r], 100), y1000: y(t._periods[r], 1e3), ol: m(i), on: this._minDigits(t, t._periods[i], 1), onn: this._minDigits(t, t._periods[i], 2), onnn: this._minDigits(t, t._periods[i], 3), o1: y(t._periods[i], 1), o10: y(t._periods[i], 10), o100: y(t._periods[i], 100), o1000: y(t._periods[i], 1e3), wl: m(o), wn: this._minDigits(t, t._periods[o], 1), wnn: this._minDigits(t, t._periods[o], 2), wnnn: this._minDigits(t, t._periods[o], 3), w1: y(t._periods[o], 1), w10: y(t._periods[o], 10), w100: y(t._periods[o], 100), w1000: y(t._periods[o], 1e3), dl: m(a), dn: this._minDigits(t, t._periods[a], 1), dnn: this._minDigits(t, t._periods[a], 2), dnnn: this._minDigits(t, t._periods[a], 3), d1: y(t._periods[a], 1), d10: y(t._periods[a], 10), d100: y(t._periods[a], 100), d1000: y(t._periods[a], 1e3), hl: m(s), hn: this._minDigits(t, t._periods[s], 1), hnn: this._minDigits(t, t._periods[s], 2), hnnn: this._minDigits(t, t._periods[s], 3), h1: y(t._periods[s], 1), h10: y(t._periods[s], 10), h100: y(t._periods[s], 100), h1000: y(t._periods[s], 1e3), ml: m(l), mn: this._minDigits(t, t._periods[l], 1), mnn: this._minDigits(t, t._periods[l], 2), mnnn: this._minDigits(t, t._periods[l], 3), m1: y(t._periods[l], 1), m10: y(t._periods[l], 10), m100: y(t._periods[l], 100), m1000: y(t._periods[l], 1e3), sl: m(u), sn: this._minDigits(t, t._periods[u], 1), snn: this._minDigits(t, t._periods[u], 2), snnn: this._minDigits(t, t._periods[u], 3), s1: y(t._periods[u], 1), s10: y(t._periods[u], 10), s100: y(t._periods[u], 100), s1000: y(t._periods[u], 1e3) }, b = c, w = r; u >= w; w++) { var x = "yowdhms".charAt(w),
                    _ = new RegExp("\\{" + x + "<\\}(.*)\\{" + x + ">\\}", "g");
                b = b.replace(_, !p && n[w] || p && d[w] ? "$1" : "") } return e.each(v, function(e, t) { var n = new RegExp("\\{" + e + "\\}", "g");
                b = b.replace(n, t) }), b },
        _minDigits: function(e, t, n) { return t = "" + t, t.length >= n ? this._translateDigits(e, t) : (t = "0000000000" + t, this._translateDigits(e, t.substr(t.length - n))) },
        _translateDigits: function(e, t) { return ("" + t).replace(/[0-9]/g, function(t) { return e.options.digits[t] }) },
        _determineShow: function(e) { var t = e.options.format,
                n = []; return n[r] = t.match("y") ? "?" : t.match("Y") ? "!" : null, n[i] = t.match("o") ? "?" : t.match("O") ? "!" : null, n[o] = t.match("w") ? "?" : t.match("W") ? "!" : null, n[a] = t.match("d") ? "?" : t.match("D") ? "!" : null, n[s] = t.match("h") ? "?" : t.match("H") ? "!" : null, n[l] = t.match("m") ? "?" : t.match("M") ? "!" : null, n[u] = t.match("s") ? "?" : t.match("S") ? "!" : null, n },
        _calculatePeriods: function(e, t, n, c) { e._now = c, e._now.setMilliseconds(0); var p = new Date(e._now.getTime());
            e._since ? c.getTime() < e._since.getTime() ? e._now = c = p : c = e._since : (p.setTime(e._until.getTime()), c.getTime() > e._until.getTime() && (e._now = c = p)); var d = [0, 0, 0, 0, 0, 0, 0]; if (t[r] || t[i]) { var h = f._getDaysInMonth(c.getFullYear(), c.getMonth()),
                    g = f._getDaysInMonth(p.getFullYear(), p.getMonth()),
                    m = p.getDate() == c.getDate() || p.getDate() >= Math.min(h, g) && c.getDate() >= Math.min(h, g),
                    y = function(e) { return 60 * (60 * e.getHours() + e.getMinutes()) + e.getSeconds() },
                    v = Math.max(0, 12 * (p.getFullYear() - c.getFullYear()) + p.getMonth() - c.getMonth() + (p.getDate() < c.getDate() && !m || m && y(p) < y(c) ? -1 : 0));
                d[r] = t[r] ? Math.floor(v / 12) : 0, d[i] = t[i] ? v - 12 * d[r] : 0, c = new Date(c.getTime()); var b = c.getDate() == h,
                    w = f._getDaysInMonth(c.getFullYear() + d[r], c.getMonth() + d[i]);
                c.getDate() > w && c.setDate(w), c.setFullYear(c.getFullYear() + d[r]), c.setMonth(c.getMonth() + d[i]), b && c.setDate(w) } var x = Math.floor((p.getTime() - c.getTime()) / 1e3),
                _ = function(e, n) { d[e] = t[e] ? Math.floor(x / n) : 0, x -= d[e] * n }; if (_(o, 604800), _(a, 86400), _(s, 3600), _(l, 60), _(u, 1), x > 0 && !e._since)
                for (var k = [1, 12, 4.3482, 7, 24, 60, 60], T = u, C = 1, E = u; E >= r; E--) t[E] && (d[T] >= C && (d[T] = 0, x = 1), x > 0 && (d[E]++, x = 0, T = E, C = 1)), C *= k[E]; if (n)
                for (var E = r; u >= E; E++) n && d[E] ? n-- : n || (d[E] = 0); return d }
    });
    var c = ["getTimes"];
    e.fn.countdown = function(e) { var t = Array.prototype.slice.call(arguments, 1); return n(e, t) ? f["_" + e + "Plugin"].apply(f, [this[0]].concat(t)) : this.each(function() { if ("string" == typeof e) { if (!f["_" + e + "Plugin"]) throw "Unknown command: " + e;
                f["_" + e + "Plugin"].apply(f, [this].concat(t)) } else f._attachPlugin(this, e || {}) }) };
    var f = e.countdown = new t
}(jQuery),
/**
 * Title: KeyboardJS
 * Version: v0.4.1
 * Description: KeyboardJS is a flexible and easy to use keyboard binding
 * library.
 * Author: Robert Hurst.
 *
 * Copyright 2011, Robert William Hurst
 * Licenced under the BSD License.
 * See https://raw.github.com/RobertWHurst/KeyboardJS/master/license.txt
 */
function(e, t) {
    function n() {
        function e() { var n; return n = t("amd"), n.fork = e, n } return e() }

    function r() {
        function n() {
            function r() { var t, n; for (n = Array.prototype.slice.apply(arguments), t = 0; t < o.length; t += 1) "undefined" == typeof a[o[t]] ? delete e[o[t]] : e[o[t]] = a[o[t]]; for (a = {}, t = 0; t < n.length; t += 1) { if ("string" != typeof n[t]) throw new Error("Cannot replace namespaces. All new namespaces must be strings.");
                    a[n[t]] = e[n[t]], e[n[t]] = i } return o = n } var i, o = [],
                a = {}; return i = t("global"), i.fork = n, i.noConflict = r, i } var r;
        r = n(), r.noConflict("KeyboardJS", "k") } [].indexOf || (Array.prototype.indexOf = function(e, t, n) { for (n = this.length, t = (n + ~~t) % n; n > t && (!(t in this) || this[t] !== e); t++); return t ^ n ? t : -1 }), "function" == typeof define && define.amd ? define(n) : r() }(this, function() {
    function e() { window.addEventListener ? (document.addEventListener("keydown", r, !1), document.addEventListener("keyup", i, !1), window.addEventListener("blur", n, !1), window.addEventListener("webkitfullscreenchange", n, !1), window.addEventListener("mozfullscreenchange", n, !1)) : window.attachEvent && (document.attachEvent("onkeydown", r), document.attachEvent("onkeyup", i), window.attachEvent("onblur", n)) }

    function t() { n(), window.removeEventListener ? (document.removeEventListener("keydown", r, !1), document.removeEventListener("keyup", i, !1), window.removeEventListener("blur", n, !1), window.removeEventListener("webkitfullscreenchange", n, !1), window.removeEventListener("mozfullscreenchange", n, !1)) : window.detachEvent && (document.detachEvent("onkeydown", r), document.detachEvent("onkeyup", i), window.detachEvent("onblur", n)) }

    function n(e) { M = [], c(), g(e) }

    function r(e) { var t, n; if (t = o(e.keyCode), !(t.length < 1)) { for (n = 0; n < t.length; n += 1) _(t[n]);
            u(), h(e) } }

    function i(e) { var t, n; if (t = o(e.keyCode), !(t.length < 1)) { for (n = 0; n < t.length; n += 1) k(t[n]);
            c(), g(e) } }

    function o(e) { return S[e] || [] }

    function a(e) { var t; for (t in S)
            if (S.hasOwnProperty(t) && S[t].indexOf(e) > -1) return t; return !1 }

    function s(e, t) { if ("string" != typeof e && ("object" != typeof e || "function" != typeof e.push)) throw new Error("Cannot create macro. The combo must be a string or array."); if ("object" != typeof t || "function" != typeof t.push) throw new Error("Cannot create macro. The injectedKeys must be an array.");
        N.push([e, t]) }

    function l(e) { var t; if ("string" != typeof e && ("object" != typeof e || "function" != typeof e.push)) throw new Error("Cannot remove macro. The combo must be a string or array."); for (mI = 0; mI < N.length; mI += 1)
            if (t = N[mI], m(e, t[0])) { k(t[1]), N.splice(mI, 1); break } }

    function u() { var e, t, n; for (e = 0; e < N.length; e += 1)
            if (t = b(N[e][0]), -1 === $.indexOf(N[e]) && y(t))
                for ($.push(N[e]), n = 0; n < N[e][1].length; n += 1) _(N[e][1][n]) }

    function c() { var e, t, n; for (e = 0; e < $.length; e += 1)
            if (t = b($[e][0]), y(t) === !1) { for (n = 0; n < $[e][1].length; n += 1) k($[e][1][n]);
                $.splice(e, 1), e -= 1 } }

    function f(e, t, n) {
        function r() { var e; for (e = 0; e < u.length; e += 1) H.splice(H.indexOf(u[e]), 1) }

        function i(e) {
            function t() { var t, r; for (t = 0; t < n.length; t += 1)
                    if ("function" == typeof n[t])
                        if ("keyup" === e)
                            for (r = 0; r < u.length; r += 1) u[r].keyUpCallback.splice(u[r].keyUpCallback.indexOf(n[t]), 1);
                        else
                            for (r = 0; r < u.length; r += 1) u[r].keyDownCallback.splice(u[r].keyDownCallback.indexOf(n[t]), 1) } var n, r, i, o = {}; if ("string" != typeof e) throw new Error("Cannot bind callback. The event name must be a string."); if ("keyup" !== e && "keydown" !== e) throw new Error('Cannot bind callback. The event name must be a "keyup" or "keydown".'); for (n = Array.prototype.slice.apply(arguments, [1]), r = 0; r < n.length; r += 1)
                if ("function" == typeof n[r])
                    if ("keyup" === e)
                        for (i = 0; i < u.length; i += 1) u[i].keyUpCallback.push(n[r]);
                    else if ("keydown" === e)
                for (i = 0; i < u.length; i += 1) u[i].keyDownCallback.push(n[r]); return o.clear = t, o } var o, a, s, l = {},
            u = []; for ("string" == typeof e && (e = b(e)), a = 0; a < e.length; a += 1) { if (o = {}, s = w([e[a]]), "string" != typeof s) throw new Error("Failed to bind key combo. The key combo must be string.");
            o.keyCombo = s, o.keyDownCallback = [], o.keyUpCallback = [], t && o.keyDownCallback.push(t), n && o.keyUpCallback.push(n), H.push(o), u.push(o) } return l.clear = r, l.on = i, l }

    function p(e) { var t, n; for (t = 0; t < H.length; t += 1) n = H[t], m(e, n.keyCombo) && (H.splice(t, 1), t -= 1) }

    function d(e) { var t, n, r; if (e) { for (t = 0; t < H.length; t += 1)
                for (r = H[t], n = 0; n < r.keyCombo.length; n += 1)
                    if (r.keyCombo[n].indexOf(e) > -1) { H.splice(t, 1), t -= 1; break } } else H = [] }

    function h(e) { var t, n, r, i, o, a, s, l, u, c, f, p = []; for (o = [].concat(M), t = 0; t < H.length; t += 1) f = v(H[t].keyCombo).length, p[f] || (p[f] = []), p[f].push(H[t]); for (n = p.length - 1; n >= 0; n -= 1)
            if (p[n])
                for (t = 0; t < p[n].length; t += 1) { for (r = p[n][t], i = v(r.keyCombo), u = !0, l = 0; l < i.length; l += 1)
                        if (-1 === o.indexOf(i[l])) { u = !1; break } if (u && y(r.keyCombo)) { for (F.push(r), l = 0; l < i.length; l += 1) c = o.indexOf(i[l]), c > -1 && (o.splice(c, 1), l -= 1); for (a = 0; a < r.keyDownCallback.length; a += 1) r.keyDownCallback[a](e, x(), r.keyCombo) === !1 && (s = !0);
                        s === !0 && (e.preventDefault(), e.stopPropagation()) } } }

    function g(e) { var t, n, r, i; for (t = 0; t < F.length; t += 1)
            if (r = F[t], y(r.keyCombo) === !1) { for (n = 0; n < r.keyUpCallback.length; n += 1) r.keyUpCallback[n](e, x(), r.keyCombo) === !1 && (i = !0);
                i === !0 && (e.preventDefault(), e.stopPropagation()), F.splice(t, 1), t -= 1 } }

    function m(e, t) { var n, r, i; if (e = b(e), t = b(t), e.length !== t.length) return !1; for (n = 0; n < e.length; n += 1) { if (e[n].length !== t[n].length) return !1; for (r = 0; r < e[n].length; r += 1) { if (e[n][r].length !== t[n][r].length) return !1; for (i = 0; i < e[n][r].length; i += 1)
                    if (-1 === t[n][r].indexOf(e[n][r][i])) return !1 } } return !0 }

    function y(e) { var t, n, r, i, o, a, s = 0; for (e = b(e), t = 0; t < e.length; t += 1) { for (a = !0, s = 0, n = 0; n < e[t].length; n += 1) { for (r = [].concat(e[t][n]), i = s; i < M.length; i += 1) o = r.indexOf(M[i]), o > -1 && (r.splice(o, 1), s = i); if (0 !== r.length) { a = !1; break } } if (a) return !0 } return !1 }

    function v(e) { var t, n, r = []; for (e = b(e), t = 0; t < e.length; t += 1)
            for (n = 0; n < e[t].length; n += 1) r = r.concat(e[t][n]); return r }

    function b(e) { var t = e,
            n = 0,
            r = 0,
            i = !1,
            o = !1,
            a = [],
            s = [],
            l = [],
            u = ""; if ("object" == typeof e && "function" == typeof e.push) return e; if ("string" != typeof e) throw new Error('Cannot parse "keyCombo" because its type is "' + typeof e + '". It must be a "string".'); for (;
            " " === t.charAt(n);) n += 1; for (;;) { if (" " === t.charAt(n)) { for (;
                    " " === t.charAt(n);) n += 1;
                i = !0 } else if ("," === t.charAt(n)) { if (r || o) throw new Error("Failed to parse key combo. Unexpected , at character index " + n + ".");
                o = !0, n += 1 } else if ("+" === t.charAt(n)) { if (u.length && (l.push(u), u = ""), r || o) throw new Error("Failed to parse key combo. Unexpected + at character index " + n + ".");
                r = !0, n += 1 } else if (">" === t.charAt(n)) { if (u.length && (l.push(u), u = ""), l.length && (s.push(l), l = []), r || o) throw new Error("Failed to parse key combo. Unexpected > at character index " + n + ".");
                r = !0, n += 1 } else if (n < t.length - 1 && "!" === t.charAt(n) && (">" === t.charAt(n + 1) || "," === t.charAt(n + 1) || "+" === t.charAt(n + 1))) u += t.charAt(n + 1), r = !1, i = !1, o = !1, n += 2;
            else { if (!(n < t.length && "+" !== t.charAt(n) && ">" !== t.charAt(n) && "," !== t.charAt(n) && " " !== t.charAt(n))) { n += 1; continue } for ((r === !1 && i === !0 || o === !0) && (u.length && (l.push(u), u = ""), l.length && (s.push(l), l = []), s.length && (a.push(s), s = [])), r = !1, i = !1, o = !1; n < t.length && "+" !== t.charAt(n) && ">" !== t.charAt(n) && "," !== t.charAt(n) && " " !== t.charAt(n);) u += t.charAt(n), n += 1 } if (n >= t.length) { u.length && (l.push(u), u = ""), l.length && (s.push(l), l = []), s.length && (a.push(s), s = []); break } } return a }

    function w(e) { var t, n, r = []; if ("string" == typeof e) return e; if ("object" != typeof e || "function" != typeof e.push) throw new Error("Cannot stringify key combo."); for (t = 0; t < e.length; t += 1) { for (r[t] = [], n = 0; n < e[t].length; n += 1) r[t][n] = e[t][n].join(" + ");
            r[t] = r[t].join(" > ") } return r.join(" ") }

    function x() { return [].concat(M) }

    function _(e) { if (e.match(/\s/)) throw new Error("Cannot add key name " + e + " to active keys because it contains whitespace.");
        M.indexOf(e) > -1 || M.push(e) }

    function k(e) { var t = a(e); "91" === t || "92" === t ? M = [] : M.splice(M.indexOf(e), 1) }

    function T(e, t) { if ("string" != typeof e) throw new Error("Cannot register new locale. The locale name must be a string."); if ("object" != typeof t) throw new Error("Cannot register " + e + " locale. The locale map must be an object."); if ("object" != typeof t.map) throw new Error("Cannot register " + e + " locale. The locale map is invalid.");
        t.macros || (t.macros = []), j[e] = t }

    function C(e) { if (e) { if ("string" != typeof e) throw new Error("Cannot set locale. The locale name must be a string."); if (!j[e]) throw new Error("Cannot set locale to " + e + " because it does not exist. If you would like to submit a " + e + " locale map for KeyboardJS please submit it at https://github.com/RobertWHurst/KeyboardJS/issues.");
            S = j[e].map, N = j[e].macros, E = e } return E } var E, S, N, D, A, L = {},
        j = {},
        M = [],
        H = [],
        F = [],
        $ = []; for (A = { map: { 3: ["cancel"], 8: ["backspace"], 9: ["tab"], 12: ["clear"], 13: ["enter"], 16: ["shift"], 17: ["ctrl"], 18: ["alt", "menu"], 19: ["pause", "break"], 20: ["capslock"], 27: ["escape", "esc"], 32: ["space", "spacebar"], 33: ["pageup"], 34: ["pagedown"], 35: ["end"], 36: ["home"], 37: ["left"], 38: ["up"], 39: ["right"], 40: ["down"], 41: ["select"], 42: ["printscreen"], 43: ["execute"], 44: ["snapshot"], 45: ["insert", "ins"], 46: ["delete", "del"], 47: ["help"], 91: ["command", "windows", "win", "super", "leftcommand", "leftwindows", "leftwin", "leftsuper"], 92: ["command", "windows", "win", "super", "rightcommand", "rightwindows", "rightwin", "rightsuper"], 145: ["scrolllock", "scroll"], 186: ["semicolon", ";"], 187: ["equal", "equalsign", "="], 188: ["comma", ","], 189: ["dash", "-"], 190: ["period", "."], 191: ["slash", "forwardslash", "/"], 192: ["graveaccent", "`"], 219: ["openbracket", "["], 220: ["backslash", "\\"], 221: ["closebracket", "]"], 222: ["apostrophe", "'"], 48: ["zero", "0"], 49: ["one", "1"], 50: ["two", "2"], 51: ["three", "3"], 52: ["four", "4"], 53: ["five", "5"], 54: ["six", "6"], 55: ["seven", "7"], 56: ["eight", "8"], 57: ["nine", "9"], 96: ["numzero", "num0"], 97: ["numone", "num1"], 98: ["numtwo", "num2"], 99: ["numthree", "num3"], 100: ["numfour", "num4"], 101: ["numfive", "num5"], 102: ["numsix", "num6"], 103: ["numseven", "num7"], 104: ["numeight", "num8"], 105: ["numnine", "num9"], 106: ["nummultiply", "num*"], 107: ["numadd", "num+"], 108: ["numenter"], 109: ["numsubtract", "num-"], 110: ["numdecimal", "num."], 111: ["numdevide", "num/"], 144: ["numlock", "num"], 112: ["f1"], 113: ["f2"], 114: ["f3"], 115: ["f4"], 116: ["f5"], 117: ["f6"], 118: ["f7"], 119: ["f8"], 120: ["f9"], 121: ["f10"], 122: ["f11"], 123: ["f12"] }, macros: [
                ["shift + `", ["tilde", "~"]],
                ["shift + 1", ["exclamation", "exclamationpoint", "!"]],
                ["shift + 2", ["at", "@"]],
                ["shift + 3", ["number", "#"]],
                ["shift + 4", ["dollar", "dollars", "dollarsign", "$"]],
                ["shift + 5", ["percent", "%"]],
                ["shift + 6", ["caret", "^"]],
                ["shift + 7", ["ampersand", "and", "&"]],
                ["shift + 8", ["asterisk", "*"]],
                ["shift + 9", ["openparen", "("]],
                ["shift + 0", ["closeparen", ")"]],
                ["shift + -", ["underscore", "_"]],
                ["shift + =", ["plus", "+"]],
                ["shift + (", ["opencurlybrace", "opencurlybracket", "{"]],
                ["shift + )", ["closecurlybrace", "closecurlybracket", "}"]],
                ["shift + \\", ["verticalbar", "|"]],
                ["shift + ;", ["colon", ":"]],
                ["shift + '", ["quotationmark", '"']],
                ["shift + !,", ["openanglebracket", "<"]],
                ["shift + .", ["closeanglebracket", ">"]],
                ["shift + /", ["questionmark", "?"]]
            ] }, D = 65; 90 >= D; D += 1) A.map[D] = String.fromCharCode(D + 32), A.macros.push(["shift + " + String.fromCharCode(D + 32) + ", capslock + " + String.fromCharCode(D + 32), [String.fromCharCode(D)]]); return T("us", A), C("us"), e(), L.enable = e, L.disable = t, L.activeKeys = x, L.on = f, L.clear = p, L.clear.key = d, L.locale = C, L.locale.register = T, L.macro = s, L.macro.remove = l, L.key = {}, L.key.name = o, L.key.code = a, L.combo = {}, L.combo.active = y, L.combo.parse = b, L.combo.stringify = w, L }),
/**
 * Autotab - jQuery plugin 1.5.1
 * https://github.com/Mathachew/jquery-autotab
 *
 * Copyright (c) 2013 Matthew Miller
 *
 * Licensed under the MIT licensing:
 *   http://www.opensource.org/licenses/mit-license.php
 */
function(e) { var t = navigator.platform,
        n = { tabPause: 800, focusChange: null, iOS: "iPad" === t || "iPhone" === t || "iPod" === t, firefox: "undefined" != typeof InstallTrigger },
        r = function(t, n) { if (null !== n && "undefined" != typeof n)
                for (var r in n) e(t).data("autotab-" + r, n[r]) },
        i = function(t) { var n, i = { format: "all", loaded: !1, disabled: !1, pattern: null, uppercase: !1, lowercase: !1, nospace: !1, maxlength: 2147483647, target: null, previous: null, trigger: null }; for (n in i) i[n] = e(t).data("autotab-" + n) || i[n]; return i.loaded || (null !== i.trigger && "string" == typeof i.trigger && (i.trigger = i.trigger.toString()), r(t, i)), i };
    e.autotab = { next: function() { var t = e(document.activeElement);
            t.length && t.trigger("autotab-next") }, previous: function() { var t = e(document.activeElement);
            t.length && t.trigger("autotab-previous") } }, e.fn.autotab = function(t, n) { if (!this.length) return this; if ("filter" == t) {
            ("string" == typeof n || "function" == typeof n) && (n = { format: n }); for (var o = 0, s = this.length; s > o; o++) { var l = i(this[o]),
                    u = n;
                u.target = l.target, u.previous = l.previous, e.extend(l, u), r(this[o], l) } } else if ("remove" == t || "destroy" == t || "disable" == t)
            for (o = 0, s = this.length; s > o; o++) l = i(this[o]), l.disabled = !0, r(this[o], l);
        else if ("restore" == t || "enable" == t)
            for (o = 0, s = this.length; s > o; o++) l = i(this[o]), l.disabled = !1, r(this[o], l);
        else if (null === t || "undefined" == typeof t ? n = {} : "string" == typeof t || "function" == typeof t ? n = { format: t } : "object" == typeof t && (n = t), 1 < this.length)
            for (o = 0, s = this.length; s > o; o++) { var l = o + 1,
                    c = o - 1,
                    u = n;
                o > 0 && s > l ? (u.target = this[l], u.previous = this[c]) : o > 0 ? (u.target = null, u.previous = this[c]) : (u.target = this[l], u.previous = null), a(this[o], u) } else a(this[0], n); return this }; var o = function(e, t, n) { if ("function" == typeof n.format) return n.format(t, e); switch (e = null, n.format) {
                case "text":
                    e = RegExp("[0-9]+", "g"); break;
                case "alpha":
                    e = RegExp("[^a-zA-Z]+", "g"); break;
                case "number":
                case "numeric":
                    e = RegExp("[^0-9]+", "g"); break;
                case "alphanumeric":
                    e = RegExp("[^0-9a-zA-Z]+", "g"); break;
                case "hex":
                case "hexadecimal":
                    e = RegExp("[^0-9A-Fa-f]+", "g"); break;
                case "custom":
                    e = RegExp(n.pattern, "g") } return null !== e && (t = t.replace(e, "")), n.nospace && (e = RegExp("[ ]+", "g"), t = t.replace(e, "")), n.uppercase && (t = t.toUpperCase()), n.lowercase && (t = t.toLowerCase()), t },
        a = function(t, a) { var s = i(t);
            s.disabled && (s.disabled = !1, s.target = null, s.previous = null), e.extend(s, a), "string" != typeof s.target && s.target instanceof jQuery || (s.target = e(s.target)), "string" != typeof s.previous && s.previous instanceof jQuery || (s.previous = e(s.previous)); var l = t.maxLength;
            2147483647 == s.maxlength && 2147483647 != l ? s.maxlength = l : 0 < s.maxlength ? t.maxLength = s.maxlength : s.target = null, n.loaded ? r(t, s) : (s.loaded = !0, r(t, s), e(t).on("autotab-next", function(e, t) { var r = this;
                setTimeout(function() { t || (t = i(r)), t.disabled || !t.target.length || n.iOS || (t.target.focus().select(), n.focusChange = new Date) }, 1) }).on("autotab-previous", function(e, t) { var r = this;
                setTimeout(function() { t || (t = i(r)); var e = t.previous; if (!t.disabled && e.length) { var o = e.val();
                        e.focus().val(o.substring(0, o.length - 1)), n.focusChange = null } }, 1) }).on("keydown", function(t) { var r = i(this); if (!r || r.disabled) return !0; var o = t.which || t.charCode; if (8 == o && 0 === this.value.length && r.previous.length) e(this).trigger("autotab-previous", r);
                else if (9 == o && null !== n.focusChange)
                    if (t.shiftKey) n.focusChange = null;
                    else if ((new Date).getTime() - n.focusChange.getTime() < n.tabPause) return n.focusChange = null, !1 }).on("keypress", function(t) { var r = i(this); if (!r || r.disabled || n.firefox && 0 === t.charCode || t.ctrlKey || t.altKey) return !0; var a = String.fromCharCode(t.which || t.keyCode); if (null !== r.trigger && 0 <= r.trigger.indexOf(a)) return null !== n.focusChange && (new Date).getTime() - n.focusChange.getTime() < n.tabPause ? n.focusChange = null : e(this).trigger("autotab-next", r), !1;
                n.focusChange = null, t = document.selection && document.selection.createRange ? !0 : 0 < t.charCode; var s = !1,
                    a = o(this, a, r); if (t && (null === a || "" === a)) return !1; if (t && this.value.length <= this.maxLength) { var l, u; if ("number" == typeof this.selectionStart && "number" == typeof this.selectionEnd ? (l = this.selectionStart, u = this.selectionEnd) : document.selection && document.selection.createRange && (a = document.selection.createRange(), l = this.createTextRange(), u = this.createTextRange(), t = a.getBookmark(), l.moveToBookmark(t), u.setEndPoint("EndToStart", l), l = u.text.length, u = l + a.text.length), (0 !== l || u != this.value.length) && this.value.length == this.maxLength) return e(this).trigger("autotab-next", r), !1;
                    s = !0 } return s && this.value.length + 1 == r.maxlength && e(this).trigger("autotab-next", r), s }).on("paste", function() { var t = i(this); return t ? (this.maxLength = 2147483647, function(r, a) { setTimeout(function() { var s = -1,
                            l = document.createElement("input");
                        l.type = "hidden", l.value = r.value.toLowerCase(), r.maxLength = a.maxlength, r.value = o(r, r.value, a).substr(0, a.maxlength); var u = function(t, r) { if (t) { for (var a = 0, c = r.length; c > a; a++) s = l.value.indexOf(r.charAt(a), s) + 1;
                                a = i(t), c = l.value.substr(s), (c = o(t, c, a).substr(0, a.maxlength)) ? (t.value = c, c.length == a.maxlength && (e(t).trigger("autotab-next", a), n.iOS || u(a.target[0], c))) : t.value = "" } };
                        r.value.length == a.maxlength && (e(r).trigger("autotab-next", t), n.iOS || u(a.target[0], r.value.toLowerCase())) }, 1) }(this, t), void 0) : !0 })) };
    e.fn.autotab_magic = function() { e(this).autotab() }, e.fn.autotab_filter = function(t) { var n = {}; "string" == typeof t || "function" == typeof t ? n.format = t : e.extend(n, t), e(this).autotab("filter", n) } }(jQuery),
function() { var e, t, n, r, i, o, a, s, l, u, c;
    l = function(e) { var t; return e ? (t = new Date, $(".gif").css("background-image", "url('assets/bg_gifs/" + e + ".gif')")) : void 0 }, u = function(e) { return window.location.hash = e }, s = function(e) { return $(".nav_selector a").removeClass(), $(".nav_selector a[data-href='" + e + "']").addClass("active") }, o = function() { return $(".nav_selector a.active").next("a").click() }, a = function() { return $(".nav_selector a.active").prev("a").click() }, this.showModal = function(t) { return t.is(":visible") ? void 0 : (i(), flightCheck(), t.show(), e(t.children(".modal"))) }, e = function(e) { var t; return t = e.height() / 2, e.css("margin-top", -t) }, r = function(e) { return e.hide() }, i = function() { return $(".modal_wrap").hide() }, t = function() { return showModal($(".go_away")) }, n = function() { return activateSettingsPanel() }, $(".nav_selector a").click(function() { var e; return e = $(this).data("href"), l(e), u(e), s(e), !1 }), $(".main_nav.left").click(function() { return a(), !1 }), $(".main_nav.right").click(function() { return o(), !1 }), KeyboardJS.on("left", function() { return a(), !1 }), KeyboardJS.on("right", function() { return o(), !1 }), KeyboardJS.on("questionmark", function() { return showModal($(".help_modal")), !1 }), KeyboardJS.on("esc", function() { return i() }), $(".icon-help").click(function() { return ga("send", "event", "Help Icon", "click", "main nav"), showModal($(".help_modal")) }), c = window.location.hash.substring(1), c && (l(c), s(c)), $(".overlay").click(function() { return i(), !1 }), $.browser.webkit || $("*[data-noff]").remove(), $(".nothing").click(function() { return $(this).hasClass("something") ? n() : t(), !1 }) }.call(this),
    function() { var e, t, n, r, i, o, a, s, l, u, c;
        o = $(".code_input"), a = $(o).children("input"), u = "SHER", l = function(e) { return "string" == typeof e ? JSON.parse(e) : e }, this.checkLocalValue = function(e) { return l(localStorage.getItem(e)) }, this.updateLocalItem = function(e, t) { return t ? (localStorage.setItem(e, t), ga("send", "event", e, t, "settings panel")) : (localStorage.removeItem(e), ga("send", "event", e, "disabled", "settings panel")) }, e = function(e) { return $(e).addClass("active").removeClass("inactive") }, i = function(e) { return $(e).addClass("inactive").removeClass("active") }, this.itemsArray = function(e) { var t; return t = [], $(e).each(function() { return t.push($(this)) }) }, this.checkLocalSettings = function() { var t, n, r, o, a; for (r = itemsArray($(".settings_list .toggle")), t = 0, a = []; t < r.length;) n = $(r[t]).data("local"), o = checkLocalValue(n), o ? e($(r[t])) : i($(r[t])), a.push(++t); return a }, this.flightCheck = function() { var e, t, n; return t = checkLocalValue("settings"), e = checkLocalValue("hideSocial"), n = checkLocalValue("usa_version"), t ? $(".nothing").addClass("something").text("Settings") : $(".nothing").removeClass("something").text("221B"), e ? ($(".links").hide(), $(".social").hide(), $(".bbc_logo").hide()) : ($(".links").show(), $(".social").show(), $(".bbc_logo").show()), n ? updateCountdown("us") : updateCountdown("uk") }, n = new Date(2020, 4, 19, 22, 0, 0), t = new Date(2020, 4, 12, 20, 30, 0), this.updateCountdown = function(e) { var r, i; return "us" === e ? (r = n, i = -5) : (r = t, i = 0), $("#countdown").hasClass("hasCountdown") ? $("#countdown").countdown("option", { until: r, timezone: i }) : $("#countdown").countdown({ until: r, timezone: i, layout: $("#countdown_layout").html() }) }, $(".settings_list .toggle_trigger").click(function() { var e, t; return e = $(this).children(".toggle").data("local"), t = checkLocalValue(e), t ? updateLocalItem(e) : updateLocalItem(e, "true"), flightCheck() }), $(".reset_local").click(function() { return $(".clear_confirm").fadeIn(200) }), $(".clear_confirm .yes").click(function() { return localStorage.clear(), $(".clear_confirm").fadeOut(200), checkLocalSettings(), flightCheck() }), $(".clear_confirm .no").click(function() { return $(".clear_confirm").fadeOut(200) }), $(a).autotab_magic(), s = function() { var e; return e = [], $(a).each(function() { return e.push($(this).val()) }), e.join("") }, c = function() { var e; return e = s().toUpperCase(), e === u ? ($(o).removeClass("error").addClass("success"), $(".hint").fadeOut(), activateSettingsPanel(), !1) : ($(o).addClass("error").removeClass("success"), !1) }, this.activateSettingsPanel = function() { return updateLocalItem("settings", "true"), checkLocalSettings(), showModal($(".definitely_nothing_at_all")), r() }, r = function() { return $(a).first().focus(), $(a).val(""), $(o).removeClass() }, $(a).keyup(function() { return 8 === event.keyCode || 46 === event.keyCode ? (r(), !1) : (c(), console.log("test")) }), $(a).click(function() { return r() }), flightCheck() }.call(this), $(".toggle_trigger").on("click", function(e) { return e.preventDefault(), $(this).children(".toggle").toggleClass("active"), $(this).children(".toggle").toggleClass("inactive"), !1 });;