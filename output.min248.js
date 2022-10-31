if (function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {}
    : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    function n(e) {
        var t = !!e && "length"in e && e.length
          , n = Z.type(e);
        return "function" !== n && !Z.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function o(e, t, n) {
        if (Z.isFunction(t))
            return Z.grep(e, (function(e, o) {
                return !!t.call(e, o, e) !== n
            }
            ));
        if (t.nodeType)
            return Z.grep(e, (function(e) {}
            ));
        if ("string" == typeof t) {
            if (ae.test(t))
                return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, (function(e) {
            return Q.call(t, e) > -1 !== n
        }
        ))
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function r() {
        W.removeEventListener("DOMContentLoaded", r),
        e.removeEventListener("load", r),
        Z.ready()
    }
    function s() {
        this.expando = Z.expando + s.uid++
    }
    function a(e, t, n) {
        var o;
        if (void 0 === n && 1 === e.nodeType)
            if (o = "data-" + t.replace(be, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(o))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ve.test(n) ? Z.parseJSON(n) : n)
                } catch (e) {}
                ye.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function u(e, t, n, o) {
        var i, r = 1, s = 20, a = o ? function() {
            return o.cur()
        }
        : function() {
            return Z.css(e, t, "")
        }
        , u = a(), c = n && n[3] || (Z.cssNumber[t] ? "" : "px"), l = (Z.cssNumber[t] || "px" !== c && +u) && xe.exec(Z.css(e, t));
        if (l && l[3] !== c) {
            c = c || l[3],
            n = n || [],
            l = +u || 1;
            do {
                l /= r = r || ".5",
                Z.style(e, t, l + c)
            } while (r !== (r = a() / u) && 1 !== r && --s)
        }
        return n && (l = +l || +u || 0,
        i = n[1] ? l + (n[1] + 1) * n[2] : +n[2],
        o && (o.unit = c,
        o.start = l,
        o.end = i)),
        i
    }
    function c(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }
    function l(e, t) {
        for (var n = 0, o = e.length; o > n; n++)
            ge.set(e[n], "globalEval", !t || ge.get(t[n], "globalEval"))
    }
    function f(e, t, n, o, i) {
        for (var r, s, a, u, f, p, d = t.createDocumentFragment(), h = [], m = 0, g = e.length; g > m; m++)
            if ((r = e[m]) || 0 === r)
                if ("object" === Z.type(r))
                    Z.merge(h, r.nodeType ? [r] : r);
                else if (Ie.test(r)) {
                    for (s = s || d.appendChild(t.createElement("div")),
                    a = (Se.exec(r) || ["", ""])[1].toLowerCase(),
                    u = Ae[a] || Ae._default,
                    s.innerHTML = u[1] + Z.htmlPrefilter(r) + u[2],
                    p = u[0]; p--; )
                        s = s.lastChild;
                    Z.merge(h, s.childNodes),
                    (s = d.firstChild).textContent = ""
                } else
                    h.push(t.createTextNode(r));
        for (d.textContent = "",
        m = 0; r = h[m++]; )
            if (o && Z.inArray(r, o) > -1)
                i && i.push(r);
            else if (f = Z.contains(r.ownerDocument, r),
            s = c(d.appendChild(r), "script"),
            f && l(s),
            n)
                for (p = 0; r = s[p++]; )
                    ke.test(r.type || "") && n.push(r);
        return d
    }
    function p() {
        return !0
    }
    function d() {
        return !1
    }
    function h() {
        try {
            return W.activeElement
        } catch (e) {}
    }
    function m(e, t, n, o, i, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (o = o || n,
            n = void 0),
            t)
                m(e, a, n, o, t[a], r);
            return e
        }
        if (null == o && null == i ? (i = n,
        o = n = void 0) : null == i && ("string" == typeof n ? (i = o,
        o = void 0) : (i = o,
        o = n,
        n = void 0)),
        !1 === i)
            i = d;
        else if (!i)
            return e;
        return 1 === r && (s = i,
        (i = function(e) {
            return Z().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = Z.guid++)),
        e.each((function() {
            Z.event.add(this, t, i, o, n)
        }
        ))
    }
    function g(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function v(e) {
        var t = Re.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function b(e, t, n, o) {
        t = H.apply([], t);
        var i, r, s, a, u, l, p = 0, d = e.length, h = d - 1, m = t[0], g = Z.isFunction(m);
        if (g || d > 1 && "string" == typeof m && !K.checkClone && Ne.test(m))
            return e.each((function(i) {
                var r = e.eq(i);
                g && (t[0] = m.call(this, i, r.html())),
                b(r, t, n, o)
            }
            ));
        if (d && (r = (i = f(t, e[0].ownerDocument, !1, e, o)).firstChild,
        1 === i.childNodes.length && (i = r),
        r || o)) {
            for (a = (s = Z.map(c(i, "script"), y)).length; d > p; p++)
                u = i,
                p !== h && (u = Z.clone(u, !0, !0),
                a && Z.merge(s, c(u, "script"))),
                n.call(e[p], u, p);
            if (a)
                for (l = s[s.length - 1].ownerDocument,
                Z.map(s, v),
                p = 0; a > p; p++)
                    u = s[p],
                    ke.test(u.type || "") && !ge.access(u, "globalEval") && Z.contains(l, u) && (u.src ? Z._evalUrl && Z._evalUrl(u.src) : Z.globalEval(u.textContent.replace(je, "")))
        }
        return e
    }
    function w(e, t, n) {
        for (var o, i = t ? Z.filter(t, e) : e, r = 0; null != (o = i[r]); r++)
            n || 1 !== o.nodeType || Z.cleanData(c(o)),
            o.parentNode && (n && Z.contains(o.ownerDocument, o) && l(c(o, "script")),
            o.parentNode.removeChild(o));
        return e
    }
    function x(e, t) {
        var n = Z(t.createElement(e)).appendTo(t.body)
          , o = Z.css(n[0], "display");
        return n.detach(),
        o
    }
    function C(e) {
        var t = W
          , n = Be[e];
        return n || ("none" !== (n = x(e, t)) && n || ((t = (Me = (Me || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(),
        t.close(),
        n = x(e, t),
        Me.detach()),
        Be[e] = n),
        n
    }
    function T(e, t, n) {
        var o, i, r, s, a = e.style;
        return "" !== (s = (n = n || ze(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)),
        n && !K.pixelMarginRight() && _e.test(s) && qe.test(t) && (o = a.width,
        i = a.minWidth,
        r = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = o,
        a.minWidth = i,
        a.maxWidth = r),
        void 0 !== s ? s + "" : s
    }
    function E(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function S(e) {
        if (e in Ve)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--; )
            if ((e = Ge[n] + t)in Ve)
                return e
    }
    function k(e, t, n) {
        var o = xe.exec(t);
        return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t
    }
    function A(e, t, n, o, i) {
        for (var r = n === (o ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2)
            "margin" === n && (s += Z.css(e, n + Ce[r], !0, i)),
            o ? ("content" === n && (s -= Z.css(e, "padding" + Ce[r], !0, i)),
            "margin" !== n && (s -= Z.css(e, "border" + Ce[r] + "Width", !0, i))) : (s += Z.css(e, "padding" + Ce[r], !0, i),
            "padding" !== n && (s += Z.css(e, "border" + Ce[r] + "Width", !0, i)));
        return s
    }
    function I(e, t, n) {
        var o = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , r = ze(e)
          , s = "border-box" === Z.css(e, "boxSizing", !1, r);
        if (0 >= i || null == i) {
            if ((0 > (i = T(e, t, r)) || null == i) && (i = e.style[t]),
            _e.test(i))
                return i;
            o = s && (K.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + A(e, t, n || (s ? "border" : "content"), o, r) + "px"
    }
    function L(e, t) {
        for (var n, o, i, r = [], s = 0, a = e.length; a > s; s++)
            (o = e[s]).style && (r[s] = ge.get(o, "olddisplay"),
            n = o.style.display,
            t ? (r[s] || "none" !== n || (o.style.display = ""),
            "" === o.style.display && Te(o) && (r[s] = ge.access(o, "olddisplay", C(o.nodeName)))) : (i = Te(o),
            "none" === n && i || ge.set(o, "olddisplay", i ? n : Z.css(o, "display"))));
        for (s = 0; a > s; s++)
            (o = e[s]).style && (t && "none" !== o.style.display && "" !== o.style.display || (o.style.display = t ? r[s] || "" : "none"));
        return e
    }
    function D(e, t, n, o, i) {
        return new D.prototype.init(e,t,n,o,i)
    }
    function O() {
        return e.setTimeout((function() {
            $e = void 0
        }
        )),
        $e = Z.now()
    }
    function F(e, t) {
        var n, o = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > o; o += 2 - t)
            i["margin" + (n = Ce[o])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function P(e, t, n) {
        for (var o, i = (N.tweeners[t] || []).concat(N.tweeners["*"]), r = 0, s = i.length; s > r; r++)
            if (o = i[r].call(n, t, e))
                return o
    }
    function N(e, t, n) {
        var o, i, r = 0, s = N.prefilters.length, a = Z.Deferred().always((function() {
            delete u.elem
        }
        )), u = function() {
            if (i)
                return !1;
            for (var t = $e || O(), n = Math.max(0, c.startTime + c.duration - t), o = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; s > r; r++)
                c.tweens[r].run(o);
            return a.notifyWith(e, [c, o, n]),
            1 > o && s ? n : (a.resolveWith(e, [c]),
            !1)
        }, c = a.promise({
            elem: e,
            props: Z.extend({}, t),
            opts: Z.extend(!0, {
                specialEasing: {},
                easing: Z.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: $e || O(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var o = Z.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(o),
                o
            },
            stop: function(t) {
                var n = 0
                  , o = t ? c.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; o > n; n++)
                    c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]),
                a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                this
            }
        }), l = c.props;
        for (function(e, t) {
            var n, o, i, r, s;
            for (n in e)
                if (i = t[o = Z.camelCase(n)],
                r = e[n],
                Z.isArray(r) && (i = r[1],
                r = e[n] = r[0]),
                n !== o && (e[o] = r,
                delete e[n]),
                (s = Z.cssHooks[o]) && "expand"in s)
                    for (n in r = s.expand(r),
                    delete e[o],
                    r)
                        n in e || (e[n] = r[n],
                        t[n] = i);
                else
                    t[o] = i
        }(l, c.opts.specialEasing); s > r; r++)
            if (o = N.prefilters[r].call(c, e, l, c.opts))
                return Z.isFunction(o.stop) && (Z._queueHooks(c.elem, c.opts.queue).stop = Z.proxy(o.stop, o)),
                o;
        return Z.map(l, P, c),
        Z.isFunction(c.opts.start) && c.opts.start.call(e, c),
        Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function R(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function j(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var o, i = 0, r = t.toLowerCase().match(de) || [];
            if (Z.isFunction(n))
                for (; o = r[i++]; )
                    "+" === o[0] ? (o = o.slice(1) || "*",
                    (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
        }
    }
    function M(e, t, n, o) {
        function i(a) {
            var u;
            return r[a] = !0,
            Z.each(e[a] || [], (function(e, a) {
                var c = a(t, n, o);
                return "string" != typeof c || s || r[c] ? s ? !(u = c) : void 0 : (t.dataTypes.unshift(c),
                i(c),
                !1)
            }
            )),
            u
        }
        var r = {}
          , s = e === gt;
        return i(t.dataTypes[0]) || !r["*"] && i("*")
    }
    function B(e, t) {
        var n, o, i = Z.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : o || (o = {}))[n] = t[n]);
        return o && Z.extend(!0, e, o),
        e
    }
    function q(e, t, n, o) {
        var i;
        if (Z.isArray(t))
            Z.each(t, (function(t, i) {
                n || wt.test(e) ? o(e, i) : q(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, o)
            }
            ));
        else if (n || "object" !== Z.type(t))
            o(e, t);
        else
            for (i in t)
                q(e + "[" + i + "]", t[i], n, o)
    }
    function _(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var z = []
      , W = e.document
      , Y = z.slice
      , H = z.concat
      , U = z.push
      , Q = z.indexOf
      , G = {}
      , V = G.toString
      , $ = G.hasOwnProperty
      , K = {}
      , Z = function(e, t) {
        return new Z.fn.init(e,t)
    }
      , X = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , J = /^-ms-/
      , ee = /-([\da-z])/gi
      , te = function(e, t) {
        return t.toUpperCase()
    };
    Z.fn = Z.prototype = {
        jquery: "2.2.4",
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return Y.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
        },
        pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return Z.each(this, e)
        },
        map: function(e) {
            return this.pushStack(Z.map(this, (function(t, n) {
                return e.call(t, n, t)
            }
            )))
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: U,
        sort: z.sort,
        splice: z.splice
    },
    Z.extend = Z.fn.extend = function() {
        var e, t, n, o, i, r, s = arguments[0] || {}, a = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || Z.isFunction(s) || (s = {}),
        a === u && (s = this,
        a--); u > a; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = s[t],
                    s !== (o = e[t]) && (c && o && (Z.isPlainObject(o) || (i = Z.isArray(o))) ? (i ? (i = !1,
                    r = n && Z.isArray(n) ? n : []) : r = n && Z.isPlainObject(n) ? n : {},
                    s[t] = Z.extend(c, r, o)) : void 0 !== o && (s[t] = o));
        return s
    }
    ,
    Z.extend({
        expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !Z.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== Z.type(e) || e.nodeType || Z.isWindow(e))
                return !1;
            if (e.constructor && !$.call(e, "constructor") && !$.call(e.constructor.prototype || {}, "isPrototypeOf"))
                return !1;
            for (t in e)
                ;
            return void 0 === t || $.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? G[V.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = Z.trim(e)) && (1 === e.indexOf("use strict") ? ((t = W.createElement("script")).text = e,
            W.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(J, "ms-").replace(ee, te)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var o, i = 0;
            if (n(e))
                for (o = e.length; o > i && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(X, "")
        },
        makeArray: function(e, t) {
            var o = t || [];
            return null != e && (n(Object(e)) ? Z.merge(o, "string" == typeof e ? [e] : e) : U.call(o, e)),
            o
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Q.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, o = 0, i = e.length; n > o; o++)
                e[i++] = t[o];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var o = [], i = 0, r = e.length, s = !n; r > i; i++)
                !t(e[i], i) !== s && o.push(e[i]);
            return o
        },
        map: function(e, t, o) {
            var i, r, s = 0, a = [];
            if (n(e))
                for (i = e.length; i > s; s++)
                    null != (r = t(e[s], s, o)) && a.push(r);
            else
                for (s in e)
                    null != (r = t(e[s], s, o)) && a.push(r);
            return H.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {},
        now: Date.now,
        support: K
    }),
    "function" == typeof Symbol && (Z.fn[Symbol.iterator] = z[Symbol.iterator]),
    Z.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        G["[object " + t + "]"] = t.toLowerCase()
    }
    ));
    var ne = function(e) {
        function t(e, t, n, o) {
            var i, r, s, a, u, l, f, p, d = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!o && ((t ? t.ownerDocument || t : M) !== L && I(t),
            t = t || L,
            O)) {
                if (11 !== h && (l = pe.exec(e)))
                    if (i = l[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(i)))
                                return n;
                            if (s.id === i)
                                return n.push(s),
                                n
                        } else if (d && (s = d.getElementById(i)) && R(t, s) && s.id === i)
                            return n.push(s),
                            n
                    } else {
                        if (l[2])
                            return G.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = l[3]) && v.getElementsByClassName && t.getElementsByClassName)
                            return G.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (v.qsa && !W[e + " "] && (!F || !F.test(e))) {
                    if (1 !== h)
                        d = t,
                        p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(he, "\\$&") : t.setAttribute("id", a = j),
                        r = (f = C(e)).length,
                        u = ae.test(a) ? "#" + a : "[id='" + a + "']"; r--; )
                            f[r] = u + " " + c(f[r]);
                        p = f.join(","),
                        d = de.test(e) && void t.parentNode || t
                    }
                    if (p)
                        try {
                            return G.apply(n, d.querySelectorAll(p)),
                            n
                        } catch (e) {} finally {
                            a === j && t.removeAttribute("id")
                        }
                }
            }
            return E(e.replace(ne, "$1"), t, n, o)
        }
        function n() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > b.cacheLength && delete t[e.shift()],
                t[n + " "] = o
            }
        }
        function o(e) {
            return e[j] = !0,
            e
        }
        function i(e) {
            var t = L.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function a(e) {
            return o((function(t) {
                return t = +t,
                o((function(n, o) {
                    for (var i, r = e([], n.length, t), s = r.length; s--; )
                        n[i = r[s]] && (n[i] = !(o[i] = n[i]))
                }
                ))
            }
            ))
        }
        function u() {}
        function c(e) {
            for (var t = 0, n = e.length, o = ""; n > t; t++)
                o += e[t].value;
            return o
        }
        function l(e, t, n) {
            var o = t.dir
              , i = n && "parentNode" === o
              , r = q++;
            return t.first ? function(e, t, n) {}
            : function(t, n, s) {
                var a, u, c, l = [B, r];
                if (s) {
                    for (; t = t[o]; )
                        if ((1 === t.nodeType || i) && e(t, n, s))
                            return !0
                } else
                    for (; t = t[o]; )
                        if (1 === t.nodeType || i) {
                            if ((a = (u = (c = t[j] || (t[j] = {}))[t.uniqueID] || (c[t.uniqueID] = {}))[o]) && a[0] === B && a[1] === r)
                                return l[2] = a[2];
                            if (u[o] = l,
                            l[2] = e(t, n, s))
                                return !0
                        }
            }
        }
        function f(e) {
            return e.length > 1 ? function(t, n, o) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, o))
                        return !1;
                return !0
            }
            : e[0]
        }
        function p(e, n, o) {
            for (var i = 0, r = n.length; r > i; i++)
                t(e, n[i], o);
            return o
        }
        function d(e, t, n, o, i) {
            for (var r, s = [], a = 0, u = e.length, c = null != t; u > a; a++)
                (r = e[a]) && (n && !n(r, o, i) || (s.push(r),
                c && t.push(a)));
            return s
        }
        function h(e, t, n, i, r, s) {
            return i && !i[j] && (i = h(i)),
            r && !r[j] && (r = h(r, s)),
            o((function(o, s, a, u) {
                var c, l, f, h = [], m = [], g = s.length, y = o || p(t || "*", a.nodeType ? [a] : a, []), v = !e || !o && t ? y : d(y, h, e, a, u), b = n ? r || (o ? e : g || i) ? [] : s : v;
                if (n && n(v, b, a, u),
                i)
                    for (c = d(b, m),
                    i(c, [], a, u),
                    l = c.length; l--; )
                        (f = c[l]) && (b[m[l]] = !(v[m[l]] = f));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [],
                            l = b.length; l--; )
                                (f = b[l]) && c.push(v[l] = f);
                            r(null, b = [], c, u)
                        }
                        for (l = b.length; l--; )
                            (f = b[l]) && (c = r ? $(o, f) : h[l]) > -1 && (o[c] = !(s[c] = f))
                    }
                } else
                    b = d(b === s ? b.splice(g, b.length) : b),
                    r ? r(null, s, b, u) : G.apply(s, b)
            }
            ))
        }
        function m(e) {
            for (var t, n, o, i = e.length, r = b.relative[e[0].type], s = r || b.relative[" "], a = r ? 1 : 0, u = l((function(e) {
                return e === t
            }
            ), s, !0), p = l((function(e) {}
            ), s, !0), d = [function(e, n, o) {
                var i = !r && (o || n !== S) || ((t = n).nodeType ? u(e, n, o) : p(e, n, o));
                return t = null,
                i
            }
            ]; i > a; a++)
                if (n = b.relative[e[a].type])
                    d = [l(f(d), n)];
                else {
                    if ((n = b.filter[e[a].type].apply(null, e[a].matches))[j]) {
                        for (o = ++a; i > o && !b.relative[e[o].type]; o++)
                            ;
                        return h(a > 1 && f(d), a > 1 && c(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ne, "$1"), n, o > a && m(e.slice(a, o)), i > o && m(e = e.slice(o)), i > o && c(e))
                    }
                    d.push(n)
                }
            return f(d)
        }
        function g(e, n) {
            var i = n.length > 0
              , r = e.length > 0
              , s = function(o, s, a, u, c) {
                var l, f, p, h = 0, m = "0", g = o && [], y = [], v = S, w = o || r && b.find.TAG("*", c), x = B += null == v ? 1 : Math.random() || .1, C = w.length;
                for (c && (S = s === L || s || c); m !== C && null != (l = w[m]); m++) {
                    if (r && l) {
                        for (f = 0,
                        s || l.ownerDocument === L || (I(l),
                        a = !O); p = e[f++]; )
                            if (p(l, s || L, a)) {
                                u.push(l);
                                break
                            }
                        c && (B = x)
                    }
                    i && ((l = !p && l) && h--,
                    o && g.push(l))
                }
                if (h += m,
                i && m !== h) {
                    for (f = 0; p = n[f++]; )
                        p(g, y, s, a);
                    if (o) {
                        if (h > 0)
                            for (; m--; )
                                g[m] || y[m] || (y[m] = Q.call(u));
                        y = d(y)
                    }
                    G.apply(u, y),
                    c && !o && y.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                }
                return c && (B = x,
                S = v),
                g
            };
            return i ? o(s) : s
        }
        var y, v, b, w, x, C, T, E, S, k, A, I, L, D, O, F, P, N, R, j = "sizzle" + 1 * new Date, M = e.document, B = 0, q = 0, _ = n(), z = n(), W = n(), Y = function(e, t) {
            return e === t && (A = !0),
            0
        }, H = {}.hasOwnProperty, U = [], Q = U.pop, G = (U.push,
        U.push), V = U.slice, $ = function(e, t) {}, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", Z = "[\\x20\\t\\r\\n\\f]", X = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", J = "\\[" + Z + "*(" + X + ")(?:" + Z + "*([*^$|!~]?=)" + Z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + X + "))|)" + Z + "*\\]", ee = ":(" + X + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + J + ")*)|.*)\\)|)", te = new RegExp(Z + "+","g"), ne = new RegExp("^" + Z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Z + "+$","g"), oe = new RegExp("^" + Z + "*," + Z + "*"), ie = new RegExp("^" + Z + "*([>+~]|" + Z + ")" + Z + "*"), re = new RegExp("=" + Z + "*([^\\]'\"]*?)" + Z + "*\\]","g"), se = new RegExp(ee), ae = new RegExp("^" + X + "$"), ue = {
            ID: new RegExp("^#(" + X + ")"),
            CLASS: new RegExp("^\\.(" + X + ")"),
            TAG: new RegExp("^(" + X + "|[*])"),
            ATTR: new RegExp("^" + J),
            PSEUDO: new RegExp("^" + ee),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + Z + "*(even|odd|(([+-]|)(\\d*)n|)" + Z + "*(?:([+-]|)" + Z + "*(\\d+)|))" + Z + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + Z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + Z + "*((?:-\\d)?\\d*)" + Z + "*\\)|)(?=[^-]|$)","i")
        }, ce = /^(?:input|select|textarea|button)$/i, le = /^h\d$/i, fe = /^[^{]+\{\s*\[native \w/, pe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, de = /[+~]/, he = /'|\\/g, me = new RegExp("\\\\([\\da-f]{1,6}" + Z + "?|(" + Z + ")|.)","ig"), ge = function(e, t, n) {}, ye = function() {};
        try {
            G.apply(U = V.call(M.childNodes), M.childNodes),
            U[M.childNodes.length].nodeType
        } catch (e) {
            G = {
                apply: (U.length,
                function(e, t) {}
                )
            }
        }
        for (y in v = t.support = {},
        x = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        I = t.setDocument = function(e) {
            var t, n, o = e ? e.ownerDocument || e : M;
            return o !== L && 9 === o.nodeType && o.documentElement ? (D = (L = o).documentElement,
            O = !x(L),
            (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ye, !1) : n.attachEvent && n.attachEvent("onunload", ye)),
            v.attributes = i((function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }
            )),
            v.getElementsByTagName = i((function(e) {
                return e.appendChild(L.createComment("")),
                !e.getElementsByTagName("*").length
            }
            )),
            v.getElementsByClassName = fe.test(L.getElementsByClassName),
            v.getById = i((function(e) {
                return D.appendChild(e).id = j,
                !L.getElementsByName || !L.getElementsByName(j).length
            }
            )),
            v.getById ? (b.find.ID = function(e, t) {}
            ,
            b.filter.ID = function(e) {
                var t = e.replace(me, ge);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete b.find.ID,
            b.filter.ID = function(e) {
                var t = e.replace(me, ge);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            b.find.TAG = v.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : v.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, o = [], i = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[i++]; )
                        1 === n.nodeType && o.push(n);
                    return o
                }
                return r
            }
            ,
            b.find.CLASS = v.getElementsByClassName && function(e, t) {
                return void 0 !== t.getElementsByClassName && O ? t.getElementsByClassName(e) : void 0
            }
            ,
            P = [],
            F = [],
            (v.qsa = fe.test(L.querySelectorAll)) && (i((function(e) {
                D.appendChild(e).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + Z + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || F.push("\\[" + Z + "*(?:value|" + K + ")"),
                e.querySelectorAll("[id~=" + j + "-]").length || F.push("~="),
                e.querySelectorAll(":checked").length || F.push(":checked"),
                e.querySelectorAll("a#" + j + "+*").length || F.push(".#.+[+~]")
            }
            )),
            i((function(e) {
                var t = L.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && F.push("name" + Z + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                F.push(",.*:")
            }
            ))),
            (v.matchesSelector = fe.test(N = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i((function(e) {
                v.disconnectedMatch = N.call(e, "div"),
                N.call(e, "[s!='']:x"),
                P.push("!=", ee)
            }
            )),
            F = F.length && new RegExp(F.join("|")),
            P = P.length && new RegExp(P.join("|")),
            t = fe.test(D.compareDocumentPosition),
            R = t || fe.test(D.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , o = t && t.parentNode;
                return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            Y = t ? function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !v.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === M && R(M, e) ? -1 : t === L || t.ownerDocument === M && R(M, t) ? 1 : k ? $(k, e) - $(k, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n, o = 0, i = e.parentNode, r = t.parentNode, a = [e], u = [t];
                if (!i || !r)
                    return e === L ? -1 : t === L ? 1 : i ? -1 : r ? 1 : k ? $(k, e) - $(k, t) : 0;
                if (i === r)
                    return s();
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    u.unshift(n);
                for (; a[o] === u[o]; )
                    o++;
                return o ? s(a[o], u[o]) : a[o] === M ? -1 : u[o] === M ? 1 : 0
            }
            ,
            L) : L
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== L && I(e),
            n = n.replace(re, "='$1']"),
            v.matchesSelector && O && !W[n + " "] && (!P || !P.test(n)) && (!F || !F.test(n)))
                try {
                    var o = N.call(e, n);
                    if (o || v.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return o
                } catch (e) {}
            return t(n, L, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && I(e),
            R(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== L && I(e);
            var n = b.attrHandle[t.toLowerCase()]
              , o = n && H.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== o ? o : v.attributes || !O ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], o = 0, i = 0;
            if (A = !v.detectDuplicates,
            k = !v.sortStable && e.slice(0),
            e.sort(Y),
            A) {
                for (; t = e[i++]; )
                    t === e[i] && (o = n.push(i));
                for (; o--; )
                    e.splice(n[o], 1)
            }
            return k = null,
            e
        }
        ,
        w = t.getText = function(e) {
            var t, n = "", o = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += w(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[o++]; )
                    n += w(t);
            return n
        }
        ,
        (b = t.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: ue,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(me, ge),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(me, ge),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && se.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(me, ge).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + Z + ")" + e + "(" + Z + "|$)")) && _(e, (function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    }
                    ))
                },
                ATTR: function(e, n, o) {
                    return function(i) {
                        var r = t.attr(i, e);
                        return null == r ? "!=" === n : !n || (r += "",
                        "=" === n ? r === o : "!=" === n ? r !== o : "^=" === n ? o && 0 === r.indexOf(o) : "*=" === n ? o && r.indexOf(o) > -1 : "$=" === n ? o && r.slice(-o.length) === o : "~=" === n ? (" " + r.replace(te, " ") + " ").indexOf(o) > -1 : "|=" === n && (r === o || r.slice(0, o.length + 1) === o + "-"))
                    }
                },
                CHILD: function(e, t, n, o, i) {},
                PSEUDO: function(e, n) {
                    var i, r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[j] ? r(n) : r.length > 1 ? (i = [e, e, "", n],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? o((function(e, t) {
                        for (var o, i = r(e, n), s = i.length; s--; )
                            e[o = $(e, i[s])] = !(t[o] = i[s])
                    }
                    )) : function(e) {
                        return r(e, 0, i)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: o((function(e) {
                    var t = []
                      , n = []
                      , i = T(e.replace(ne, "$1"));
                    return i[j] ? o((function(e, t, n, o) {
                        for (var r, s = i(e, null, o, []), a = e.length; a--; )
                            (r = s[a]) && (e[a] = !(t[a] = r))
                    }
                    )) : function(e, o, r) {
                        return t[0] = e,
                        i(t, null, r, n),
                        t[0] = null,
                        !n.pop()
                    }
                }
                )),
                has: o((function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }
                )),
                contains: o((function(e) {
                    return e = e.replace(me, ge),
                    function(t) {
                        return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                    }
                }
                )),
                lang: o((function(e) {
                    return ae.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(me, ge).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }
                )),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === D
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return le.test(e.nodeName)
                },
                input: function(e) {
                    return ce.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: a((function() {
                    return [0]
                }
                )),
                last: a((function(e, t) {
                    return [t - 1]
                }
                )),
                eq: a((function(e, t, n) {
                    return [0 > n ? n + t : n]
                }
                )),
                even: a((function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }
                )),
                odd: a((function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }
                )),
                lt: a((function(e, t, n) {
                    for (var o = 0 > n ? n + t : n; --o >= 0; )
                        e.push(o);
                    return e
                }
                )),
                gt: a((function(e, t, n) {
                    for (var o = 0 > n ? n + t : n; ++o < t; )
                        e.push(o);
                    return e
                }
                ))
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[y] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(y);
        for (y in {
            submit: !0,
            reset: !0
        })
            b.pseudos[y] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(y);
        return u.prototype = b.filters = b.pseudos,
        b.setFilters = new u,
        C = t.tokenize = function(e, n) {
            var o, i, r, s, a, u, c, l = z[e + " "];
            if (l)
                return n ? 0 : l.slice(0);
            for (a = e,
            u = [],
            c = b.preFilter; a; ) {
                for (s in o && !(i = oe.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                u.push(r = [])),
                o = !1,
                (i = ie.exec(a)) && (o = i.shift(),
                r.push({
                    value: o,
                    type: i[0].replace(ne, " ")
                }),
                a = a.slice(o.length)),
                b.filter)
                    !(i = ue[s].exec(a)) || c[s] && !(i = c[s](i)) || (o = i.shift(),
                    r.push({
                        value: o,
                        type: s,
                        matches: i
                    }),
                    a = a.slice(o.length));
                if (!o)
                    break
            }
            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
        }
        ,
        T = t.compile = function(e, t) {
            var n, o = [], i = [], r = W[e + " "];
            if (!r) {
                for (t || (t = C(e)),
                n = t.length; n--; )
                    (r = m(t[n]))[j] ? o.push(r) : i.push(r);
                (r = W(e, g(i, o))).selector = e
            }
            return r
        }
        ,
        E = t.select = function(e, t, n, o) {
            var i, r, s, a, u, l = "function" == typeof e && e, f = !o && C(e = l.selector || e);
            if (n = n || [],
            1 === f.length) {
                if ((r = f[0] = f[0].slice(0)).length > 2 && "ID" === (s = r[0]).type && v.getById && 9 === t.nodeType && O && b.relative[r[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(me, ge), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(r.shift().value.length)
                }
                for (i = ue.needsContext.test(e) ? 0 : r.length; i-- && (s = r[i],
                !b.relative[a = s.type]); )
                    if ((u = b.find[a]) && (o = u(s.matches[0].replace(me, ge), de.test(r[0].type) && void t.parentNode || t))) {
                        if (r.splice(i, 1),
                        !(e = o.length && c(r)))
                            return G.apply(n, o),
                            n;
                        break
                    }
            }
            return (l || T(e, f))(o, t, !O, n, !t || de.test(e) && void t.parentNode || t),
            n
        }
        ,
        v.sortStable = j.split("").sort(Y).join("") === j,
        v.detectDuplicates = !!A,
        I(),
        v.sortDetached = i((function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"))
        }
        )),
        i((function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }
        )) || r(),
        v.attributes && i((function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }
        )) || r(),
        i((function(e) {
            return null == e.getAttribute("disabled")
        }
        )) || r(),
        t
    }(e);
    Z.find = ne,
    Z.expr = ne.selectors,
    Z.expr[":"] = Z.expr.pseudos,
    Z.uniqueSort = Z.unique = ne.uniqueSort,
    Z.text = ne.getText,
    Z.isXMLDoc = ne.isXML,
    Z.contains = ne.contains;
    var oe = function(e, t, n) {
        for (var o = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && Z(e).is(n))
                    break;
                o.push(e)
            }
        return o
    }
      , ie = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , re = Z.expr.match.needsContext
      , se = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , ae = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var o = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === o.nodeType ? Z.find.matchesSelector(o, e) ? [o] : [] : Z.find.matches(e, Z.grep(t, (function(e) {
            return 1 === e.nodeType
        }
        )))
    }
    ,
    Z.fn.extend({
        find: function(e) {
            var t, n = this.length, o = [], i = this;
            if ("string" != typeof e)
                return this.pushStack(Z(e).filter((function() {
                    for (t = 0; n > t; t++)
                        if (Z.contains(i[t], this))
                            return !0
                }
                )));
            for (t = 0; n > t; t++)
                Z.find(e, i[t], o);
            return (o = this.pushStack(n > 1 ? Z.unique(o) : o)).selector = this.selector ? this.selector + " " + e : e,
            o
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && re.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ue, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (Z.fn.init = function(e, t, n) {
        var o, i;
        if (!e)
            return this;
        if (n = n || ue,
        "string" == typeof e) {
            if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e)) || !o[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (t = t instanceof Z ? t[0] : t,
                Z.merge(this, Z.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : W, !0)),
                se.test(o[1]) && Z.isPlainObject(t))
                    for (o in t)
                        Z.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this
            }
            return (i = W.getElementById(o[2])) && i.parentNode && (this.length = 1,
            this[0] = i),
            this.context = W,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : Z.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        Z.makeArray(e, this))
    }
    ).prototype = Z.fn,
    ue = Z(W);
    var le = /^(?:parents|prev(?:Until|All))/
      , fe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    Z.fn.extend({
        has: function(e) {
            var t = Z(e, this)
              , n = t.length;
            return this.filter((function() {
                for (var e = 0; n > e; e++)
                    if (Z.contains(this, t[e]))
                        return !0
            }
            ))
        },
        closest: function(e, t) {
            for (var n, o = 0, i = this.length, r = [], s = re.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > o; o++)
                for (n = this[o]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? Z.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Q.call(Z(e), this[0]) : Q.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Z.uniqueSort(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    Z.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return oe(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return oe(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return oe(e, "nextSibling")
        },
        prevAll: function(e) {
            return oe(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return oe(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return oe(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ie((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ie(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, (function(e, t) {
        Z.fn[e] = function(n, o) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (o = n),
            o && "string" == typeof o && (i = Z.filter(o, i)),
            this.length > 1 && (fe[e] || Z.uniqueSort(i),
            le.test(e) && i.reverse()),
            this.pushStack(i)
        }
    }
    ));
    var pe, de = /\S+/g;
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return Z.each(e.match(de) || [], (function(e, n) {
                t[n] = !0
            }
            )),
            t
        }(e) : Z.extend({}, e);
        var t, n, o, i = [], r = [], s = -1, a = function() {
            for (o = e.once,
            t = !0; r.length; s = -1)
                for (n = r.shift(); ++s < i.length; )
                    !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            o && (i = n ? [] : "")
        }, u = {
            add: function() {
                return i && (n && !t && (s = i.length - 1,
                r.push(n)),
                function t(n) {
                    Z.each(n, (function(n, o) {
                        Z.isFunction(o) ? e.unique && u.has(o) || i.push(o) : o && o.length && "string" !== Z.type(o) && t(o)
                    }
                    ))
                }(arguments),
                n && !t && a()),
                this
            },
            remove: function() {},
            has: function(e) {},
            empty: function() {},
            disable: function() {
                return o = r = [],
                i = n = "",
                this
            },
            disabled: function() {},
            lock: function() {
                return o = r = [],
                n || (i = n = ""),
                this
            },
            locked: function() {},
            fireWith: function(e, n) {
                return o || (n = [e, (n = n || []).slice ? n.slice() : n],
                r.push(n),
                t || a()),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {}
        };
        return u
    }
    ,
    Z.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]]
              , n = {
                state: function() {},
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                then: function() {},
                promise: function(e) {
                    return null != e ? Z.extend(e, n) : n
                }
            }
              , o = {};
            return n.pipe = n.then,
            Z.each(t, (function(e, i) {
                var r = i[2]
                  , s = i[3];
                n[i[1]] = r.add,
                s && r.add((function() {}
                ), t[1 ^ e][2].disable, t[2][2].lock),
                o[i[0]] = function() {
                    return o[i[0] + "With"](this === o ? n : this, arguments),
                    this
                }
                ,
                o[i[0] + "With"] = r.fireWith
            }
            )),
            n.promise(o),
            e && e.call(o, o),
            o
        },
        when: function(e) {}
    }),
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e),
        this
    }
    ,
    Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {},
        ready: function(e) {
            (!0 === e ? --Z.readyWait : Z.isReady) || (Z.isReady = !0,
            !0 !== e && --Z.readyWait > 0 || (pe.resolveWith(W, [Z]),
            Z.fn.triggerHandler && (Z(W).triggerHandler("ready"),
            Z(W).off("ready"))))
        }
    }),
    Z.ready.promise = function(t) {
        return pe || (pe = Z.Deferred(),
        "complete" === W.readyState || "loading" !== W.readyState && !W.documentElement.doScroll ? e.setTimeout(Z.ready) : (W.addEventListener("DOMContentLoaded", r),
        e.addEventListener("load", r))),
        pe.promise(t)
    }
    ,
    Z.ready.promise();
    var he = function(e, t, n, o, i, r, s) {
        var a = 0
          , u = e.length
          , c = null == n;
        if ("object" === Z.type(n))
            for (a in i = !0,
            n)
                he(e, t, a, n[a], !0, r, s);
        else if (void 0 !== o && (i = !0,
        Z.isFunction(o) || (s = !0),
        c && (s ? (t.call(e, o),
        t = null) : (c = t,
        t = function(e, t, n) {}
        )),
        t))
            for (; u > a; a++)
                t(e[a], n, s ? o : o.call(e[a], a, t(e[a], n)));
        return i ? e : c ? t.call(e) : u ? t(e[0], n) : r
    }
      , me = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    s.uid = 1,
    s.prototype = {
        register: function(e, t) {},
        cache: function(e) {
            if (!me(e))
                return {};
            var t = e[this.expando];
            return t || (t = {},
            me(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var o, i = this.cache(e);
            if ("string" == typeof t)
                i[t] = n;
            else
                for (o in t)
                    i[o] = t[o];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var o;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (o = this.get(e, t)) ? o : this.get(e, Z.camelCase(t)) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, o, i, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 === t)
                    this.register(e);
                else {
                    Z.isArray(t) ? o = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t),
                    o = t in r ? [t, i] : (o = i)in r ? [o] : o.match(de) || []),
                    n = o.length;
                    for (; n--; )
                        delete r[o[n]]
                }
                (void 0 === t || Z.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !Z.isEmptyObject(t)
        }
    };
    var ge = new s
      , ye = new s
      , ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , be = /[A-Z]/g;
    Z.extend({
        hasData: function(e) {},
        data: function(e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function(e, t) {},
        _data: function(e, t, n) {},
        _removeData: function(e, t) {}
    }),
    Z.fn.extend({
        data: function(e, t) {
            var n, o, i, r = this[0], s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (i = ye.get(r),
                1 === r.nodeType && !ge.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && 0 === (o = s[n].name).indexOf("data-") && (o = Z.camelCase(o.slice(5)),
                        a(r, o, i[o]));
                    ge.set(r, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each((function() {}
            )) : he(this, (function(t) {
                var n, o;
                if (r && void 0 === t) {
                    if (void 0 !== (n = ye.get(r, e) || ye.get(r, e.replace(be, "-$&").toLowerCase())))
                        return n;
                    if (o = Z.camelCase(e),
                    void 0 !== (n = ye.get(r, o)))
                        return n;
                    if (void 0 !== (n = a(r, o, void 0)))
                        return n
                } else
                    o = Z.camelCase(e),
                    this.each((function() {
                        var n = ye.get(this, o);
                        ye.set(this, o, t),
                        e.indexOf("-") > -1 && void 0 !== n && ye.set(this, e, t)
                    }
                    ))
            }
            ), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {}
    }),
    Z.extend({
        queue: function(e, t, n) {
            var o;
            return e ? (t = (t || "fx") + "queue",
            o = ge.get(e, t),
            n && (!o || Z.isArray(n) ? o = ge.access(e, t, Z.makeArray(n)) : o.push(n)),
            o || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t)
              , o = n.length
              , i = n.shift()
              , r = Z._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            o--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            i.call(e, (function() {
                Z.dequeue(e, t)
            }
            ), r)),
            !o && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ge.get(e, n) || ge.access(e, n, {
                empty: Z.Callbacks("once memory").add((function() {
                    ge.remove(e, [t + "queue", n])
                }
                ))
            })
        }
    }),
    Z.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            }
            ))
        },
        dequeue: function(e) {
            return this.each((function() {
                Z.dequeue(this, e)
            }
            ))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, o = 1, i = Z.Deferred(), r = this, s = this.length, a = function() {
                --o || i.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (n = ge.get(r[s], e + "queueHooks")) && n.empty && (o++,
                n.empty.add(a));
            return a(),
            i.promise(t)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , xe = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$","i")
      , Ce = ["Top", "Right", "Bottom", "Left"]
      , Te = function(e, t) {
        return e = t || e,
        "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
    }
      , Ee = /^(?:checkbox|radio)$/i
      , Se = /<([\w:-]+)/
      , ke = /^$|\/(?:java|ecma)script/i
      , Ae = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ae.optgroup = Ae.option,
    Ae.tbody = Ae.tfoot = Ae.colgroup = Ae.caption = Ae.thead,
    Ae.th = Ae.td;
    var Ie = /<|&#?\w+;/;
    !function() {
        var e = W.createDocumentFragment().appendChild(W.createElement("div"))
          , t = W.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        K.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        K.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Le = /^key/
      , De = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Oe = /^([^.]*)(?:\.(.+)|)/;
    Z.event = {
        global: {},
        add: function(e, t, n, o, i) {
            var r, s, a, u, c, l, f, p, d, h, m, g = ge.get(e);
            if (g)
                for (n.handler && (n = (r = n).handler,
                i = r.selector),
                n.guid || (n.guid = Z.guid++),
                (u = g.events) || (u = g.events = {}),
                (s = g.handle) || (s = g.handle = function(t) {
                    return void 0 !== Z && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                c = (t = (t || "").match(de) || [""]).length; c--; )
                    d = m = (a = Oe.exec(t[c]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    d && (f = Z.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = Z.event.special[d] || {},
                    l = Z.extend({
                        type: d,
                        origType: m,
                        data: o,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && Z.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, r),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, o, h, s) || e.addEventListener && e.addEventListener(d, s)),
                    f.add && (f.add.call(e, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, l) : p.push(l),
                    Z.event.global[d] = !0)
        },
        remove: function(e, t, n, o, i) {
            var r, s, a, u, c, l, f, p, d, h, m, g = ge.hasData(e) && ge.get(e);
            if (g && (u = g.events)) {
                for (c = (t = (t || "").match(de) || [""]).length; c--; )
                    if (d = m = (a = Oe.exec(t[c]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    d) {
                        for (f = Z.event.special[d] || {},
                        p = u[d = (o ? f.delegateType : f.bindType) || d] || [],
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = r = p.length; r--; )
                            l = p[r],
                            !i && m !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || o && o !== l.selector && ("**" !== o || !l.selector) || (p.splice(r, 1),
                            l.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, l));
                        s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || Z.removeEvent(e, d, g.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            Z.event.remove(e, d + t[c], n, o, !0);
                Z.isEmptyObject(u) && ge.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, o, i, r, s = [], a = Y.call(arguments), u = (ge.get(this, "events") || {})[e.type] || [], c = Z.event.special[e.type] || {};
            if (a[0] = e,
            e.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = Z.event.handlers.call(this, e, u),
                t = 0; (i = s[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                    n = 0; (r = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r,
                        e.data = r.data,
                        void 0 !== (o = ((Z.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, a)) && !1 === (e.result = o) && (e.preventDefault(),
                        e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, o, i, r, s = [], a = t.delegateCount, u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                        for (o = [],
                        n = 0; a > n; n++)
                            void 0 === o[i = (r = t[n]).selector + " "] && (o[i] = r.needsContext ? Z(i, this).index(u) > -1 : Z.find(i, this, null, [u]).length),
                            o[i] && o.push(r);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
            s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, o, i, r = t.button;
                return null == e.pageX && null != t.clientX && (o = (n = e.target.ownerDocument || W).documentElement,
                i = n.body,
                e.pageX = t.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0),
                e.pageY = t.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)),
                e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[Z.expando])
                return e;
            var t, n, o, i = e.type, r = e, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = De.test(i) ? this.mouseHooks : Le.test(i) ? this.keyHooks : {}),
            o = s.props ? this.props.concat(s.props) : this.props,
            e = new Z.Event(r),
            t = o.length; t--; )
                e[n = o[t]] = r[n];
            return e.target || (e.target = W),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== h() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? p : d) : this.type = e,
        t && Z.extend(this, t),
        this.timeStamp = e && e.timeStamp || Z.now(),
        void (this[Z.expando] = !0)) : new Z.Event(e,t)
    }
    ,
    Z.Event.prototype = {
        constructor: Z.Event,
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, o = e.relatedTarget, i = e.handleObj;
                return o && (o === this || Z.contains(this, o)) || (e.type = i.origType,
                n = i.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }
    )),
    Z.fn.extend({
        on: function(e, t, n, o) {
            return m(this, e, t, n, o)
        },
        one: function(e, t, n, o) {
            return m(this, e, t, n, o, 1)
        },
        off: function(e, t, n) {
            var o, i;
            if (e && e.preventDefault && e.handleObj)
                return o = e.handleObj,
                Z(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = d),
            this.each((function() {
                Z.event.remove(this, e, n, t)
            }
            ))
        }
    });
    var Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , Pe = /<script|<style|<link/i
      , Ne = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Re = /^true\/(.*)/
      , je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    Z.extend({
        htmlPrefilter: function(e) {
            return e.replace(Fe, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var o, i, r, s, a = e.cloneNode(!0), u = Z.contains(e.ownerDocument, e);
            if (!(K.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (s = c(a),
                o = 0,
                i = (r = c(e)).length; i > o; o++)
                    r[o],
                    s[o];
            if (t && n)
                for (r = r || c(e),
                s = s || c(a),
                o = 0,
                i = r.length; i > o; o++)
                    r[o],
                    s[o];
            return (s = c(a, "script")).length > 0 && l(s, !u && c(e, "script")),
            a
        },
        cleanData: function(e) {
            for (var t, n, o, i = Z.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (me(n)) {
                    if (t = n[ge.expando]) {
                        if (t.events)
                            for (o in t.events)
                                i[o] ? Z.event.remove(n, o) : Z.removeEvent(n, o, t.handle);
                        n[ge.expando] = void 0
                    }
                    n[ye.expando] && (n[ye.expando] = void 0)
                }
        }
    }),
    Z.fn.extend({
        domManip: b,
        detach: function(e) {
            return w(this, e, !0)
        },
        remove: function(e) {
            return w(this, e)
        },
        text: function(e) {
            return he(this, (function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }
                ))
            }
            ), null, e, arguments.length)
        },
        append: function() {
            return b(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || g(this, e).appendChild(e)
            }
            ))
        },
        prepend: function() {
            return b(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = g(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }
            ))
        },
        before: function() {
            return b(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }
            ))
        },
        after: function() {
            return b(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }
            ))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (Z.cleanData(c(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map((function() {
                return Z.clone(this, e, t)
            }
            ))
        },
        html: function(e) {
            return he(this, (function(e) {
                var t = this[0] || {}
                  , n = 0
                  , o = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Pe.test(e) && !Ae[(Se.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = Z.htmlPrefilter(e);
                    try {
                        for (; o > n; n++)
                            1 === (t = this[n] || {}).nodeType && (Z.cleanData(c(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }
            ), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return b(this, arguments, (function(t) {
                var n = this.parentNode;
                Z.inArray(this, e) < 0 && (Z.cleanData(c(this)),
                n && n.replaceChild(t, this))
            }
            ), e)
        }
    }),
    Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, o = [], i = Z(e), r = i.length - 1, s = 0; r >= s; s++)
                n = s === r ? this : this.clone(!0),
                Z(i[s])[t](n),
                U.apply(o, n.get());
            return this.pushStack(o)
        }
    }
    ));
    var Me, Be = {
        HTML: "block",
        BODY: "block"
    }, qe = /^margin/, _e = new RegExp("^(" + we + ")(?!px)[a-z%]+$","i"), ze = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }, We = function(e, t, n, o) {
        var i, r, s = {};
        for (r in t)
            s[r] = e.style[r],
            e.style[r] = t[r];
        for (r in i = n.apply(e, o || []),
        t)
            e.style[r] = s[r];
        return i
    }, Ye = W.documentElement;
    !function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            a.innerHTML = "",
            Ye.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top,
            r = "2px" === t.marginLeft,
            o = "4px" === t.width,
            a.style.marginRight = "50%",
            i = "4px" === t.marginRight,
            Ye.removeChild(s)
        }
        var n, o, i, r, s = W.createElement("div"), a = W.createElement("div");
        a.style && (a.style.backgroundClip = "content-box",
        a.cloneNode(!0).style.backgroundClip = "",
        K.clearCloneStyle = "content-box" === a.style.backgroundClip,
        s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        s.appendChild(a),
        Z.extend(K, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return null == o && t(),
                o
            },
            pixelMarginRight: function() {
                return null == o && t(),
                i
            },
            reliableMarginLeft: function() {
                return null == o && t(),
                r
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(W.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                a.style.width = "1px",
                Ye.appendChild(s),
                t = !parseFloat(e.getComputedStyle(n).marginRight),
                Ye.removeChild(s),
                a.removeChild(n),
                t
            }
        }))
    }();
    var He = /^(none|table(?!-c[ea]).+)/
      , Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Qe = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ge = ["Webkit", "O", "Moz", "ms"]
      , Ve = W.createElement("div").style;
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = T(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, r, s, a = Z.camelCase(t), c = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = S(a) || a),
                s = Z.cssHooks[t] || Z.cssHooks[a],
                void 0 === n ? s && "get"in s && void 0 !== (i = s.get(e, !1, o)) ? i : c[t] : ("string" == (r = typeof n) && (i = xe.exec(n)) && i[1] && (n = u(e, t, i),
                r = "number"),
                void (null != n && n == n && ("number" === r && (n += i && i[3] || (Z.cssNumber[a] ? "" : "px")),
                K.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, o)) || (c[t] = n))))
            }
        },
        css: function(e, t, n, o) {
            var i, r, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = S(a) || a),
            (s = Z.cssHooks[t] || Z.cssHooks[a]) && "get"in s && (i = s.get(e, !0, n)),
            void 0 === i && (i = T(e, t, o)),
            "normal" === i && t in Qe && (i = Qe[t]),
            "" === n || n ? (r = parseFloat(i),
            !0 === n || isFinite(r) ? r || 0 : i) : i
        }
    }),
    Z.each(["height", "width"], (function(e, t) {
        Z.cssHooks[t] = {
            get: function(e, n, o) {
                return n ? He.test(Z.css(e, "display")) && 0 === e.offsetWidth ? We(e, Ue, (function() {
                    return I(e, t, o)
                }
                )) : I(e, t, o) : void 0
            },
            set: function(e, n, o) {
                var i, r = o && ze(e), s = o && A(e, t, o, "border-box" === Z.css(e, "boxSizing", !1, r), r);
                return s && (i = xe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = Z.css(e, t)),
                k(0, n, s)
            }
        }
    }
    )),
    Z.cssHooks.marginLeft = E(K.reliableMarginLeft, (function(e, t) {
        return t ? (parseFloat(T(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, (function() {
            return e.getBoundingClientRect().left
        }
        ))) + "px" : void 0
    }
    )),
    Z.cssHooks.marginRight = E(K.reliableMarginRight, (function(e, t) {
        return t ? We(e, {
            display: "inline-block"
        }, T, [e, "marginRight"]) : void 0
    }
    )),
    Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        Z.cssHooks[e + t] = {
            expand: function(n) {
                for (var o = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > o; o++)
                    i[e + Ce[o] + t] = r[o] || r[o - 2] || r[0];
                return i
            }
        },
        qe.test(e) || (Z.cssHooks[e + t].set = k)
    }
    )),
    Z.fn.extend({
        css: function(e, t) {
            return he(this, (function(e, t, n) {
                var o, i, r = {}, s = 0;
                if (Z.isArray(t)) {
                    for (o = ze(e),
                    i = t.length; i > s; s++)
                        r[t[s]] = Z.css(e, t[s], !1, o);
                    return r
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }
            ), e, t, arguments.length > 1)
        },
        show: function() {
            return L(this, !0)
        },
        hide: function() {
            return L(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                Te(this) ? Z(this).show() : Z(this).hide()
            }
            ))
        }
    }),
    Z.Tween = D,
    D.prototype = {
        constructor: D,
        init: function(e, t, n, o, i, r) {
            this.elem = e,
            this.prop = n,
            this.easing = i || Z.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = o,
            this.unit = r || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = D.propHooks[this.prop];
            return e && e.get ? e.get(this) : D.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = D.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : D.propHooks._default.set(this),
            this
        }
    },
    D.prototype.init.prototype = D.prototype,
    D.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Z.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[Z.cssProps[e.prop]] && !Z.cssHooks[e.prop] ? e.elem[e.prop] = e.now : Z.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    Z.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    Z.fx = D.prototype.init,
    Z.fx.step = {};
    var $e, Ke, Ze = /^(?:toggle|show|hide)$/, Xe = /queueHooks$/;
    Z.Animation = Z.extend(N, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return u(n.elem, e, xe.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            Z.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(de);
            for (var n, o = 0, i = e.length; i > o; o++)
                n = e[o],
                N.tweeners[n] = N.tweeners[n] || [],
                N.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var o, i, r, s, a, u, c, l = this, f = {}, p = e.style, d = e.nodeType && Te(e), h = ge.get(e, "fxshow");
            for (o in n.queue || (null == (a = Z._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            u = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || u()
            }
            ),
            a.unqueued++,
            l.always((function() {
                l.always((function() {
                    a.unqueued--,
                    Z.queue(e, "fx").length || a.empty.fire()
                }
                ))
            }
            ))),
            1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
            "inline" === ("none" === (c = Z.css(e, "display")) ? ge.get(e, "olddisplay") || C(e.nodeName) : c) && "none" === Z.css(e, "float") && (p.display = "inline-block")),
            n.overflow && (p.overflow = "hidden",
            l.always((function() {
                p.overflow = n.overflow[0],
                p.overflowX = n.overflow[1],
                p.overflowY = n.overflow[2]
            }
            ))),
            t)
                if (i = t[o],
                Ze.exec(i)) {
                    if (delete t[o],
                    r = r || "toggle" === i,
                    i === (d ? "hide" : "show")) {
                        if ("show" !== i || !h || void 0 === h[o])
                            continue;
                        d = !0
                    }
                    f[o] = h && h[o] || Z.style(e, o)
                } else
                    c = void 0;
            if (Z.isEmptyObject(f))
                "inline" === ("none" === c ? C(e.nodeName) : c) && (p.display = c);
            else
                for (o in h ? "hidden"in h && (d = h.hidden) : h = ge.access(e, "fxshow", {}),
                r && (h.hidden = !d),
                d ? Z(e).show() : l.done((function() {
                    Z(e).hide()
                }
                )),
                l.done((function() {
                    var t;
                    for (t in ge.remove(e, "fxshow"),
                    f)
                        Z.style(e, t, f[t])
                }
                )),
                f)
                    s = P(d ? h[o] : 0, o, l),
                    o in h || (h[o] = s.start,
                    d && (s.end = s.start,
                    s.start = "width" === o || "height" === o ? 1 : 0))
        }
        ],
        prefilter: function(e, t) {
         
        }
    }),
    Z.speed = function(e, t, n) {
 
        o.complete = function() {
            Z.isFunction(o.old) && o.old.call(this),
            o.queue && Z.dequeue(this, o.queue)
        }
        ,
        o
    }
    ,
    Z.fn.extend({
        fadeTo: function(e, t, n, o) {
            return this.filter(Te).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, o)
        },
        animate: function(e, t, n, o) {
            var i = Z.isEmptyObject(e)
              , r = Z.speed(t, n, o)
              , s = function() {
                var t = N(this, Z.extend({}, e), r);
                (i || ge.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            i || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(e, t, n) {
            var o = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each((function() {

            }
            ))
        },
        finish: function(e) {

        }
    }),
    Z.each(["toggle", "show", "hide"], (function(e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function(e, o, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, o, i)
        }
    }
    )),
    Z.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        Z.fn[e] = function(e, n, o) {
            return this.animate(t, e, n, o)
        }
    }
    )),
    Z.timers = [],
    Z.fx.tick = function() {
        var e, t = 0, n = Z.timers;
        for ($e = Z.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(),
        $e = void 0
    }
    ,
    Z.fx.timer = function(e) {
        Z.timers.push(e),
        e() ? Z.fx.start() : Z.timers.pop()
    }
    ,
    Z.fx.interval = 13,
    Z.fx.start = function() {
        Ke || (Ke = e.setInterval(Z.fx.tick, Z.fx.interval))
    }
    ,
    Z.fx.stop = function() {
        e.clearInterval(Ke),
        Ke = null
    }
    ,
    Z.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    Z.fn.delay = function(t, n) {
        return t = Z.fx && Z.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, (function(n, o) {
            var i = e.setTimeout(n, t);
            o.stop = function() {
                e.clearTimeout(i)
            }
        }
        ))
    }
    ,
    function() {
        var e = W.createElement("input")
          , t = W.createElement("select")
          , n = t.appendChild(W.createElement("option"));
        e.type = "checkbox",
        K.checkOn = "" !== e.value,
        K.optSelected = n.selected,
        t.disabled = !0,
        K.optDisabled = !n.disabled,
        (e = W.createElement("input")).value = "t",
        e.type = "radio",
        K.radioValue = "t" === e.value
    }();
    var Je, et = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(e, t) {
            return he(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {

        }
    }),
    Z.extend({
        attr: function(e, t, n) {
            var o, i, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === e.getAttribute ? Z.prop(e, t, n) : (1 === r && Z.isXMLDoc(e) || (t = t.toLowerCase(),
                i = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? Je : void 0)),
                void 0 !== n ? null === n ? void Z.removeAttr(e, t) : i && "set"in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (o = i.get(e, t)) ? o : null == (o = Z.find.attr(e, t)) ? void 0 : o)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!K.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, o, i = 0, r = t && t.match(de);
            if (r && 1 === e.nodeType)
                for (; n = r[i++]; )
                    o = Z.propFix[n] || n,
                    Z.expr.match.bool.test(n) && (e[o] = !1),
                    e.removeAttribute(n)
        }
    }),
    Je = {
        set: function(e, t, n) {
            return !1 === t ? Z.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    Z.each(Z.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = et[t] || Z.find.attr;
        et[t] = function(e, t, o) {
            var i, r;
            return o || (r = et[t],
            et[t] = i,
            i = null != n(e, t, o) ? t.toLowerCase() : null,
            et[t] = r),
            i
        }
    }
    ));
    var tt = /^(?:input|select|textarea|button)$/i
      , nt = /^(?:a|area)$/i;
    Z.fn.extend({
        prop: function(e, t) {
            return he(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[Z.propFix[e] || e]
            }
            ))
        }
    }),
    Z.extend({
        prop: function(e, t, n) {
            var o, i, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && Z.isXMLDoc(e) || (t = Z.propFix[t] || t,
                i = Z.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (o = i.set(e, n, t)) ? o : e[t] = n : i && "get"in i && null !== (o = i.get(e, t)) ? o : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = Z.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : tt.test(e.nodeName) || nt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    K.optSelected || (Z.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        Z.propFix[this.toLowerCase()] = this
    }
    ));
    var ot = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, o, i, r, s, a, u = 0;
            if (Z.isFunction(e))
                return this.each((function(t) {
                    Z(this).addClass(e.call(this, t, R(this)))
                }
                ));
            if ("string" == typeof e && e)
                for (t = e.match(de) || []; n = this[u++]; )
                    if (i = R(n),
                    o = 1 === n.nodeType && (" " + i + " ").replace(ot, " ")) {
                        for (s = 0; r = t[s++]; )
                            o.indexOf(" " + r + " ") < 0 && (o += r + " ");
                        i !== (a = Z.trim(o)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, o, i, r, s, a, u = 0;
            if (Z.isFunction(e))
                return this.each((function(t) {
                    Z(this).removeClass(e.call(this, t, R(this)))
                }
                ));
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(de) || []; n = this[u++]; )
                    if (i = R(n),
                    o = 1 === n.nodeType && (" " + i + " ").replace(ot, " ")) {
                        for (s = 0; r = t[s++]; )
                            for (; o.indexOf(" " + r + " ") > -1; )
                                o = o.replace(" " + r + " ", " ");
                        i !== (a = Z.trim(o)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Z.isFunction(e) ? this.each((function(n) {
                Z(this).toggleClass(e.call(this, n, R(this), t), t)
            }
            )) : this.each((function() {
                var t, o, i, r;
                if ("string" === n)
                    for (o = 0,
                    i = Z(this),
                    r = e.match(de) || []; t = r[o++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = R(this)) && ge.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : ge.get(this, "__className__") || ""))
            }
            ))
        },
        hasClass: function(e) {
            var t, n, o = 0;
            for (t = " " + e + " "; n = this[o++]; )
                if (1 === n.nodeType && (" " + R(n) + " ").replace(ot, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var it = /\r/g
      , rt = /[\x20\t\r\n\f]+/g;
    Z.fn.extend({
        val: function(e) {
            var t, n, o, i = this[0];
            return arguments.length ? (o = Z.isFunction(e),
            this.each((function(n) {
                var i;
                1 === this.nodeType && (null == (i = o ? e.call(this, n, Z(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, (function(e) {
                    return null == e ? "" : e + ""
                }
                ))),
                (t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            }
            ))) : i ? (t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(it, "") : null == n ? "" : n : void 0
        }
    }),
    Z.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e)).replace(rt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, o = e.options, i = e.selectedIndex, r = "select-one" === e.type || 0 > i, s = r ? null : [], a = r ? i + 1 : o.length, u = 0 > i ? a : r ? i : 0; a > u; u++)
                        if (((n = o[u]).selected || u === i) && (K.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(),
                            r)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, o, i = e.options, r = Z.makeArray(t), s = i.length; s--; )
                        ((o = i[s]).selected = Z.inArray(Z.valHooks.option.get(o), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    Z.each(["radio", "checkbox"], (function() {
        Z.valHooks[this] = {
            set: function(e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) > -1 : void 0
            }
        },
        K.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }
    ));
    var st = /^(?:focusinfocus|focusoutblur)$/;
    Z.extend(Z.event, {
        trigger: function(t, n, o, i) {
            var r, s, a, u, c, l, f, p = [o || W], d = $.call(t, "type") ? t.type : t, h = $.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = o = o || W,
            3 !== o.nodeType && 8 !== o.nodeType && !st.test(d + Z.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."),
            d = h.shift(),
            h.sort()),
            c = d.indexOf(":") < 0 && "on" + d,
            (t = t[Z.expando] ? t : new Z.Event(d,"object" == typeof t && t)).isTrigger = i ? 2 : 3,
            t.namespace = h.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = o),
            n = null == n ? [t] : Z.makeArray(n, [t]),
            f = Z.event.special[d] || {},
            i || !f.trigger || !1 !== f.trigger.apply(o, n))) {
                if (!i && !f.noBubble && !Z.isWindow(o)) {
                    for (u = f.delegateType || d,
                    st.test(u + d) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s),
                        a = s;
                    a === (o.ownerDocument || W) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0; (s = p[r++]) && !t.isPropagationStopped(); )
                    t.type = r > 1 ? u : f.bindType || d,
                    (l = (ge.get(s, "events") || {})[t.type] && ge.get(s, "handle")) && l.apply(s, n),
                    (l = c && s[c]) && l.apply && me(s) && (t.result = l.apply(s, n),
                    !1 === t.result && t.preventDefault());
                return t.type = d,
                i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !me(o) || c && Z.isFunction(o[d]) && !Z.isWindow(o) && ((a = o[c]) && (o[c] = null),
                Z.event.triggered = d,
                o[d](),
                Z.event.triggered = void 0,
                a && (o[c] = a)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var o = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0
            });
            Z.event.trigger(o, null, t)
        }
    }),
    Z.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                Z.event.trigger(e, t, this)
            }
            ))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    }),
    Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }
    )),
    Z.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    K.focusin = "onfocusin"in e,
    K.focusin || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e))
        };
        Z.event.special[t] = {
            setup: function() {
                var o = this.ownerDocument || this
                  , i = ge.access(o, t);
                i || o.addEventListener(e, n, !0),
                ge.access(o, t, (i || 0) + 1)
            },
            teardown: function() {
                var o = this.ownerDocument || this
                  , i = ge.access(o, t) - 1;
                i ? ge.access(o, t, i) : (o.removeEventListener(e, n, !0),
                ge.remove(o, t))
            }
        }
    }
    ));
    var at = e.location
      , ut = Z.now()
      , ct = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
    ,
    Z.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || Z.error("Invalid XML: " + t),
        n
    }
    ;
    var lt = /#.*$/
      , ft = /([?&])_=[^&]*/
      , pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , dt = /^(?:GET|HEAD)$/
      , ht = /^\/\//
      , mt = {}
      , gt = {}
      , yt = "*/".concat("*")
      , vt = W.createElement("a");
    vt.href = at.href,
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: at.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(at.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": yt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? B(B(e, Z.ajaxSettings), t) : B(Z.ajaxSettings, e)
        },
        ajaxPrefilter: j(mt),
        ajaxTransport: j(gt),
        ajax: function(t, n) {
            function o(t, n, o, a) {
                var c, f, v, b, x, T = n;
                2 !== w && (w = 2,
                u && e.clearTimeout(u),
                i = void 0,
                s = a || "",
                C.readyState = t > 0 ? 4 : 0,
                c = t >= 200 && 300 > t || 304 === t,
                o && (b = function(e, t, n) {
                    for (var o, i, r, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (o)
                        for (i in a)
                            if (a[i] && a[i].test(o)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        r = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                r = i;
                                break
                            }
                            s || (s = i)
                        }
                        r = r || s
                    }
                    return r ? (r !== u[0] && u.unshift(r),
                    n[r]) : void 0
                }(p, C, o)),
                b = function(e, t, n, o) {
                    var i, r, s, a, u, c = {}, l = e.dataTypes.slice();
                    if (l[1])
                        for (s in e.converters)
                            c[s.toLowerCase()] = e.converters[s];
                    for (r = l.shift(); r; )
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                        !u && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = r,
                        r = l.shift())
                            if ("*" === r)
                                r = u;
                            else if ("*" !== u && u !== r) {
                                if (!(s = c[u + " " + r] || c["* " + r]))
                                    for (i in c)
                                        if ((a = i.split(" "))[1] === r && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[i] : !0 !== c[i] && (r = a[0],
                                            l.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + u + " to " + r
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, b, C, c),
                c ? (p.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (Z.lastModified[r] = x),
                (x = C.getResponseHeader("etag")) && (Z.etag[r] = x)),
                204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state,
                f = b.data,
                c = !(v = b.error))) : (v = T,
                !t && T || (T = "error",
                0 > t && (t = 0))),
                C.status = t,
                C.statusText = (n || T) + "",
                c ? m.resolveWith(d, [f, T, C]) : m.rejectWith(d, [C, T, v]),
                C.statusCode(y),
                y = void 0,
                l && h.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? f : v]),
                g.fireWith(d, [C, T]),
                l && (h.trigger("ajaxComplete", [C, p]),
                --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, r, s, a, u, c, l, f, p = Z.ajaxSetup({}, n), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? Z(d) : Z.event, m = Z.Deferred(), g = Z.Callbacks("once memory"), y = p.statusCode || {}, v = {}, b = {}, w = 0, x = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!a)
                            for (a = {}; t = pt.exec(s); )
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? s : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = b[n] = b[n] || e,
                    v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return w || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > w)
                            for (t in e)
                                y[t] = [y[t], e[t]];
                        else
                            C.always(e[C.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || x;
                    return i && i.abort(t),
                    o(0, t),
                    this
                }
            };
            if (m.promise(C).complete = g.add,
            C.success = C.done,
            C.error = C.fail,
            p.url = ((t || p.url || at.href) + "").replace(lt, "").replace(ht, at.protocol + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = Z.trim(p.dataType || "*").toLowerCase().match(de) || [""],
            null == p.crossDomain) {
                c = W.createElement("a");
                try {
                    c.href = p.url,
                    c.href = c.href,
                    p.crossDomain = vt.protocol + "//" + vt.host != c.protocol + "//" + c.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = Z.param(p.data, p.traditional)),
            M(mt, p, n, C),
            2 === w)
                return C;
            for (f in (l = Z.event && p.global) && 0 == Z.active++ && Z.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !dt.test(p.type),
            r = p.url,
            p.hasContent || (p.data && (r = p.url += (ct.test(r) ? "&" : "?") + p.data,
            delete p.data),
            !1 === p.cache && (p.url = ft.test(r) ? r.replace(ft, "$1_=" + ut++) : r + (ct.test(r) ? "&" : "?") + "_=" + ut++)),
            p.ifModified && (Z.lastModified[r] && C.setRequestHeader("If-Modified-Since", Z.lastModified[r]),
            Z.etag[r] && C.setRequestHeader("If-None-Match", Z.etag[r])),
            (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType),
            C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : p.accepts["*"]),
            p.headers)
                C.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(d, C, p) || 2 === w))
                return C.abort();
            for (f in x = "abort",
            {
                success: 1,
                error: 1,
                complete: 1
            })
                C[f](p[f]);
            if (i = M(gt, p, n, C)) {
                if (C.readyState = 1,
                l && h.trigger("ajaxSend", [C, p]),
                2 === w)
                    return C;
                p.async && p.timeout > 0 && (u = e.setTimeout((function() {
                    C.abort("timeout")
                }
                ), p.timeout));
                try {
                    w = 1,
                    i.send(v, o)
                } catch (e) {
                    if (!(2 > w))
                        throw e;
                    o(-1, e)
                }
            } else
                o(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }),
    Z.each(["get", "post"], (function(e, t) {
        Z[t] = function(e, n, o, i) {
            return Z.isFunction(n) && (i = i || o,
            o = n,
            n = void 0),
            Z.ajax(Z.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: o
            }, Z.isPlainObject(e) && e))
        }
    }
    )),
    Z._evalUrl = function(e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    Z.fn.extend({
        wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each((function(t) {
                Z(this).wrapAll(e.call(this, t))
            }
            )) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map((function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }
            )).append(this)),
            this)
        },
        wrapInner: function(e) {
            return Z.isFunction(e) ? this.each((function(t) {
                Z(this).wrapInner(e.call(this, t))
            }
            )) : this.each((function() {
                var t = Z(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            ))
        },
        wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each((function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            }
            ))
        },
        unwrap: function() {
            return this.parent().each((function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }
            )).end()
        }
    }),
    Z.expr.filters.hidden = function(e) {
        return !Z.expr.filters.visible(e)
    }
    ,
    Z.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    }
    ;
    var bt = /%20/g
      , wt = /\[\]$/
      , xt = /\r?\n/g
      , Ct = /^(?:submit|button|image|reset|file)$/i
      , Tt = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, o = [], i = function(e, t) {
            t = Z.isFunction(t) ? t() : null == t ? "" : t,
            o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional),
        Z.isArray(e) || e.jquery && !Z.isPlainObject(e))
            Z.each(e, (function() {
                i(this.name, this.value)
            }
            ));
        else
            for (n in e)
                q(n, e[n], t, i);
        return o.join("&").replace(bt, "+")
    }
    ,
    Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }
            )).filter((function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && Tt.test(this.nodeName) && !Ct.test(e) && (this.checked || !Ee.test(e))
            }
            )).map((function(e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(xt, "\r\n")
                    }
                }
                )) : {
                    name: t.name,
                    value: n.replace(xt, "\r\n")
                }
            }
            )).get()
        }
    }),
    Z.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Et = {
        0: 200,
        1223: 204
    }
      , St = Z.ajaxSettings.xhr();
    K.cors = !!St && "withCredentials"in St,
    K.ajax = St = !!St,
    Z.ajaxTransport((function(t) {
        var n, o;
        return K.cors || St && !t.crossDomain ? {
            send: function(i, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
                    for (s in t.xhrFields)
                        a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                i)
                    a.setRequestHeader(s, i[s]);
                n = function(e) {
                    return function() {
                        n && (n = o = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                        "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Et[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }
                ,
                a.onload = n(),
                o = a.onerror = n("error"),
                void 0 !== a.onabort ? a.onabort = o : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout((function() {
                        n && o()
                    }
                    ))
                }
                ,
                n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n)
                        throw e
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }
    )),
    Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return Z.globalEval(e),
                e
            }
        }
    }),
    Z.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }
    )),
    Z.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain)
            return {
                send: function(o, i) {
                    t = Z("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    W.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    }
    ));
    var kt = []
      , At = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = kt.pop() || Z.expando + "_" + ut++;
            return this[e] = !0,
            e
        }
    }),
    Z.ajaxPrefilter("json jsonp", (function(t, n, o) {
        var i, r, s, a = !1 !== t.jsonp && (At.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && At.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        a ? t[a] = t[a].replace(At, "$1" + i) : !1 !== t.jsonp && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
        t.converters["script json"] = function() {
            return s || Z.error(i + " was not called"),
            s[0]
        }
        ,
        t.dataTypes[0] = "json",
        r = e[i],
        e[i] = function() {
            s = arguments
        }
        ,
        o.always((function() {
            void 0 === r ? Z(e).removeProp(i) : e[i] = r,
            t[i] && (t.jsonpCallback = n.jsonpCallback,
            kt.push(i)),
            s && Z.isFunction(r) && r(s[0]),
            s = r = void 0
        }
        )),
        "script") : void 0
    }
    )),
    Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || W;
        var o = se.exec(e)
          , i = !n && [];
        return o ? [t.createElement(o[1])] : (o = f([e], t, i),
        i && i.length && Z(i).remove(),
        Z.merge([], o.childNodes))
    }
    ;
    var It = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && It)
            return It.apply(this, arguments);
        var o, i, r, s = this, a = e.indexOf(" ");
        return a > -1 && (o = Z.trim(e.slice(a)),
        e = e.slice(0, a)),
        Z.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        s.length > 0 && Z.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            r = arguments,
            s.html(o ? Z("<div>").append(Z.parseHTML(e)).find(o) : e)
        }
        )).always(n && function(e, t) {
            s.each((function() {
                n.apply(this, r || [e.responseText, t, e])
            }
            ))
        }
        ),
        this
    }
    ,
    Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }
    )),
    Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers, (function(t) {
            return e === t.elem
        }
        )).length
    }
    ,
    Z.offset = {
        setOffset: function(e, t, n) {
            var o, i, r, s, a, u, c = Z.css(e, "position"), l = Z(e), f = {};
            "static" === c && (e.style.position = "relative"),
            a = l.offset(),
            r = Z.css(e, "top"),
            u = Z.css(e, "left"),
            ("absolute" === c || "fixed" === c) && (r + u).indexOf("auto") > -1 ? (s = (o = l.position()).top,
            i = o.left) : (s = parseFloat(r) || 0,
            i = parseFloat(u) || 0),
            Z.isFunction(t) && (t = t.call(e, n, Z.extend({}, a))),
            null != t.top && (f.top = t.top - a.top + s),
            null != t.left && (f.left = t.left - a.left + i),
            "using"in t ? t.using.call(e, f) : l.css(f)
        }
    },
    Z.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each((function(t) {
                    Z.offset.setOffset(this, e, t)
                }
                ));
            var t, n, o = this[0], i = {
                top: 0,
                left: 0
            }, r = o && o.ownerDocument;
            return r ? (t = r.documentElement,
            Z.contains(t, o) ? (i = o.getBoundingClientRect(),
            n = _(r),
            {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], o = {
                    top: 0,
                    left: 0
                };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                Z.nodeName(e[0], "html") || (o = e.offset()),
                o.top += Z.css(e[0], "borderTopWidth", !0),
                o.left += Z.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - o.top - Z.css(n, "marginTop", !0),
                    left: t.left - o.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === Z.css(e, "position"); )
                    e = e.offsetParent;
                return e || Ye
            }
            ))
        }
    }),
    Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        Z.fn[e] = function(o) {
            return he(this, (function(e, o, i) {
                var r = _(e);
                return void 0 === i ? r ? r[t] : e[o] : void (r ? r.scrollTo(n ? r.pageXOffset : i, n ? i : r.pageYOffset) : e[o] = i)
            }
            ), e, o, arguments.length)
        }
    }
    )),
    Z.each(["top", "left"], (function(e, t) {
        Z.cssHooks[t] = E(K.pixelPosition, (function(e, n) {
            return n ? (n = T(e, t),
            _e.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        }
        ))
    }
    )),
    Z.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, o) {
            Z.fn[o] = function(o, i) {
                var r = arguments.length && (n || "boolean" != typeof o)
                  , s = n || (!0 === o || !0 === i ? "margin" : "border");
                return he(this, (function(t, n, o) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? Z.css(t, n, s) : Z.style(t, n, o, s)
                }
                ), t, r ? o : void 0, r, null)
            }
        }
        ))
    }
    )),
    Z.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, o) {
            return this.on(t, e, n, o)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }),
    Z.fn.andSelf = Z.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], (function() {
        return Z
    }
    ));
    var Lt = e.jQuery
      , Dt = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = Dt),
        t && e.jQuery === Z && (e.jQuery = Lt),
        Z
    }
    ,
    t || (e.jQuery = e.$ = Z),
    Z
}
)),
"undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
!function(e) {
    "use strict";
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 2)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(),
function(e) {
    "use strict";
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1
          , o = this;
        return e(this).one("bsTransitionEnd", (function() {
            n = !0
        }
        )),
        setTimeout((function() {
            n || e(o).trigger(e.support.transition.end)
        }
        ), t),
        this
    }
    ,
    e((function() {
        e.support.transition = function() {
            var e = document.createElement("bootstrap")
              , t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var n in t)
                if (void 0 !== e.style[n])
                    return {
                        end: t[n]
                    };
            return !1
        }(),
        e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    }
    ))
}(jQuery),
function(e) {
    "use strict";
    var t = '[data-dismiss="alert"]'
      , n = function(n) {
        e(n).on("click", t, this.close)
    };
    n.VERSION = "3.3.6",
    n.TRANSITION_DURATION = 150,
    n.prototype.close = function(t) {
        function o() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var i = e(this)
          , r = i.attr("data-target");
        r || (r = (r = i.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = e(r);
        t && t.preventDefault(),
        s.length || (s = i.closest(".alert")),
        s.trigger(t = e.Event("close.bs.alert")),
        t.isDefaultPrevented() || (s.removeClass("in"),
        e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o())
    }
    ;
    var o = e.fn.alert;
    e.fn.alert = function(t) {
        return this.each((function() {
            var o = e(this)
              , i = o.data("bs.alert");
            i || o.data("bs.alert", i = new n(this)),
            "string" == typeof t && i[t].call(o)
        }
        ))
    }
    ,
    e.fn.alert.Constructor = n,
    e.fn.alert.noConflict = function() {
        return e.fn.alert = o,
        this
    }
    ,
    e(document).on("click.bs.alert.data-api", t, n.prototype.close)
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        return this.each((function() {
            var o = e(this)
              , i = o.data("bs.button")
              , r = "object" == typeof t && t;
            i || o.data("bs.button", i = new n(this,r)),
            "toggle" == t ? i.toggle() : t && i.setState(t)
        }
        ))
    }
    var n = function(t, o) {
        this.$element = e(t),
        this.options = e.extend({}, n.DEFAULTS, o),
        this.isLoading = !1
    };
    n.VERSION = "3.3.6",
    n.DEFAULTS = {
        loadingText: "loading..."
    },
    n.prototype.setState = function(t) {
        var n = "disabled"
          , o = this.$element
          , i = o.is("input") ? "val" : "html"
          , r = o.data();
        t += "Text",
        null == r.resetText && o.data("resetText", o[i]()),
        setTimeout(e.proxy((function() {
            o[i](null == r[t] ? this.options[t] : r[t]),
            "loadingText" == t ? (this.isLoading = !0,
            o.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1,
            o.removeClass(n).removeAttr(n))
        }
        ), this), 0)
    }
    ,
    n.prototype.toggle = function() {
        var e = !0
          , t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1),
            t.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1),
            this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            e && n.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var o = e.fn.button;
    e.fn.button = t,
    e.fn.button.Constructor = n,
    e.fn.button.noConflict = function() {
        return e.fn.button = o,
        this
    }
    ,
    e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(n) {
        var o = e(n.target);
        o.hasClass("btn") || (o = o.closest(".btn")),
        t.call(o, "toggle"),
        e(n.target).is('input[type="radio"]') || e(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }
    )).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    }
    ))
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        return this.each((function() {
            var o = e(this)
              , i = o.data("bs.carousel")
              , r = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t)
              , s = "string" == typeof t ? t : r.slide;
            i || o.data("bs.carousel", i = new n(this,r)),
            "number" == typeof t ? i.to(t) : s ? i[s]() : r.interval && i.pause().cycle()
        }
        ))
    }
    var n = function(t, n) {
        this.$element = e(t),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = n,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.6",
    n.TRANSITION_DURATION = 600,
    n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    n.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            e.preventDefault()
        }
    }
    ,
    n.prototype.cycle = function(t) {
        return t || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"),
        this.$items.index(e || this.$active)
    }
    ,
    n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t);
        if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap)
            return t;
        var o = (n + ("prev" == e ? -1 : 1)) % this.$items.length;
        return this.$items.eq(o)
    }
    ,
    n.prototype.to = function(e) {
        var t = this
          , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", (function() {
            t.to(e)
        }
        )) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }
    ,
    n.prototype.pause = function(t) {
        return t || (this.paused = !0),
        this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }
    ,
    n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }
    ,
    n.prototype.slide = function(t, o) {
        var i = this.$element.find(".item.active")
          , r = o || this.getItemForDirection(t, i)
          , s = this.interval
          , a = "next" == t ? "left" : "right"
          , u = this;
        if (r.hasClass("active"))
            return this.sliding = !1;
        var c = r[0]
          , l = e.Event("slide.bs.carousel", {
            relatedTarget: c,
            direction: a
        });
        if (this.$element.trigger(l),
        !l.isDefaultPrevented()) {
            if (this.sliding = !0,
            s && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var f = e(this.$indicators.children()[this.getItemIndex(r)]);
                f && f.addClass("active")
            }
            var p = e.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t),
            r[0].offsetWidth,
            i.addClass(a),
            r.addClass(a),
            i.one("bsTransitionEnd", (function() {
                r.removeClass([t, a].join(" ")).addClass("active"),
                i.removeClass(["active", a].join(" ")),
                u.sliding = !1,
                setTimeout((function() {
                    u.$element.trigger(p)
                }
                ), 0)
            }
            )).emulateTransitionEnd(n.TRANSITION_DURATION)) : (i.removeClass("active"),
            r.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(p)),
            s && this.cycle(),
            this
        }
    }
    ;
    var o = e.fn.carousel;
    e.fn.carousel = t,
    e.fn.carousel.Constructor = n,
    e.fn.carousel.noConflict = function() {
        return e.fn.carousel = o,
        this
    }
    ;
    var i = function(n) {
        var o, i = e(this), r = e(i.attr("data-target") || (o = i.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = e.extend({}, r.data(), i.data())
              , a = i.attr("data-slide-to");
            a && (s.interval = !1),
            t.call(r, s),
            a && r.data("bs.carousel").to(a),
            n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i),
    e(window).on("load", (function() {
        e('[data-ride="carousel"]').each((function() {}
        ))
    }
    ))
}(jQuery),
function(e) {
    "use strict";
    var t = function(e, t) {};
    t.VERSION = "3.3.6",
    t.TRANSITION_DURATION = 350,
    t.DEFAULTS = {
        toggle: !0
    },
    t.prototype.dimension = function() {}
    ,
    t.prototype.show = function() {}
    ,
    t.prototype.hide = function() {}
    ,
    t.prototype.toggle = function() {}
    ,
    t.prototype.getParent = function() {}
    ,
    t.prototype.addAriaAndCollapsedClass = function(e, t) {}
    ,
    e.fn.collapse,
    e.fn.collapse = function(e) {}
    ,
    e.fn.collapse.Constructor = t,
    e.fn.collapse.noConflict = function() {}
    ,
    e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(e) {}
    ))
}(jQuery),
function(e) {
    "use strict";
    var t = '[data-toggle="dropdown"]'
      , n = function(e) {};
    n.VERSION = "3.3.6",
    n.prototype.toggle = function(e) {}
    ,
    n.prototype.keydown = function(e) {}
    ,
    e.fn.dropdown,
    e.fn.dropdown = function(e) {}
    ,
    e.fn.dropdown.Constructor = n,
    e.fn.dropdown.noConflict = function() {}
    ,
    e(document).on("click.bs.dropdown.data-api", (function(n) {
        n && 3 === n.which || (e(".dropdown-backdrop").remove(),
        e(t).each((function() {}
        )))
    }
    )).on("click.bs.dropdown.data-api", ".dropdown form", (function(e) {}
    )).on("click.bs.dropdown.data-api", t, n.prototype.toggle).on("keydown.bs.dropdown.data-api", t, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
}(jQuery),
function(e) {
    "use strict";
    var t = function(e, t) {};
    t.VERSION = "3.3.6",
    t.TRANSITION_DURATION = 300,
    t.BACKDROP_TRANSITION_DURATION = 150,
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    t.prototype.toggle = function(e) {}
    ,
    t.prototype.show = function(e) {}
    ,
    t.prototype.hide = function(e) {}
    ,
    t.prototype.enforceFocus = function() {}
    ,
    t.prototype.escape = function() {}
    ,
    t.prototype.resize = function() {}
    ,
    t.prototype.hideModal = function() {}
    ,
    t.prototype.removeBackdrop = function() {}
    ,
    t.prototype.backdrop = function(e) {}
    ,
    t.prototype.handleUpdate = function() {}
    ,
    t.prototype.adjustDialog = function() {}
    ,
    t.prototype.resetAdjustments = function() {}
    ,
    t.prototype.checkScrollbar = function() {}
    ,
    t.prototype.setScrollbar = function() {}
    ,
    t.prototype.resetScrollbar = function() {}
    ,
    t.prototype.measureScrollbar = function() {}
    ,
    e.fn.modal,
    e.fn.modal = function(e, t) {}
    ,
    e.fn.modal.Constructor = t,
    e.fn.modal.noConflict = function() {}
    ,
    e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {}
    ))
}(jQuery),
function(e) {
    "use strict";
    var t = function(e, t) {};
    t.VERSION = "3.3.6",
    t.TRANSITION_DURATION = 150,
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    t.prototype.init = function(e, t, n) {}
    ,
    t.prototype.getDefaults = function() {}
    ,
    t.prototype.getOptions = function(e) {}
    ,
    t.prototype.getDelegateOptions = function() {}
    ,
    t.prototype.enter = function(e) {}
    ,
    t.prototype.isInStateTrue = function() {}
    ,
    t.prototype.leave = function(e) {}
    ,
    t.prototype.show = function() {}
    ,
    t.prototype.applyPlacement = function(e, t) {}
    ,
    t.prototype.replaceArrow = function(e, t, n) {}
    ,
    t.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
        e.removeClass("fade in top bottom left right")
    }
    ,
    t.prototype.hide = function(n) {
        function o() {
            "in" != i.hoverState && r.detach(),
            i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type),
            n && n()
        }
        var i = this
          , r = e(this.$tip)
          , s = e.Event("hide.bs." + this.type);
        return this.$element.trigger(s),
        s.isDefaultPrevented() ? void 0 : (r.removeClass("in"),
        e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", o).emulateTransitionEnd(t.TRANSITION_DURATION) : o(),
        this.hoverState = null,
        this)
    }
    ,
    t.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }
    ,
    t.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    t.prototype.getPosition = function(t) {
        var n = (t = t || this.$element)[0]
          , o = "BODY" == n.tagName
          , i = n.getBoundingClientRect();
        null == i.width && (i = e.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var r = o ? {
            top: 0,
            left: 0
        } : t.offset()
          , s = {
            scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
        }
          , a = o ? {
            width: e(window).width(),
            height: e(window).height()
        } : null;
        return e.extend({}, i, s, a, r)
    }
    ,
    t.prototype.getCalculatedOffset = function(e, t, n, o) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - o,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - o / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - o / 2,
            left: t.left + t.width
        }
    }
    ,
    t.prototype.getViewportAdjustedDelta = function(e, t, n, o) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return i;
        var r = this.options.viewport && this.options.viewport.padding || 0
          , s = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var a = t.top - r - s.scroll
              , u = t.top + r - s.scroll + o;
            a < s.top ? i.top = s.top - a : u > s.top + s.height && (i.top = s.top + s.height - u)
        } else {
            var c = t.left - r
              , l = t.left + r + n;
            c < s.left ? i.left = s.left - c : l > s.right && (i.left = s.left + s.width - l)
        }
        return i
    }
    ,
    t.prototype.getTitle = function() {
        var e = this.$element
          , t = this.options;
        return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
    }
    ,
    t.prototype.getUID = function(e) {
        do {
            e += ~~(1e6 * Math.random())
        } while (document.getElementById(e));
        return e
    }
    ,
    t.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    t.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    t.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    t.prototype.toggle = function(t) {
        var n = this;
        t && ((n = e(t.currentTarget).data("bs." + this.type)) || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        e(t.currentTarget).data("bs." + this.type, n))),
        t ? (n.inState.click = !n.inState.click,
        n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }
    ,
    t.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout),
        this.hide((function() {
            e.$element.off("." + e.type).removeData("bs." + e.type),
            e.$tip && e.$tip.detach(),
            e.$tip = null,
            e.$arrow = null,
            e.$viewport = null
        }
        ))
    }
    ;
    var n = e.fn.tooltip;
    e.fn.tooltip = function(n) {
        return this.each((function() {
            var o = e(this)
              , i = o.data("bs.tooltip")
              , r = "object" == typeof n && n;
            (i || !/destroy|hide/.test(n)) && (i || o.data("bs.tooltip", i = new t(this,r)),
            "string" == typeof n && i[n]())
        }
        ))
    }
    ,
    e.fn.tooltip.Constructor = t,
    e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = n,
        this
    }
}(jQuery),
function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.6",
    t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    (t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype)).constructor = t,
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }
    ,
    t.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle()
          , n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t),
        e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n),
        e.removeClass("fade top bottom left right in"),
        e.find(".popover-title").html() || e.find(".popover-title").hide()
    }
    ,
    t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    t.prototype.getContent = function() {
        var e = this.$element
          , t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }
    ,
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var n = e.fn.popover;
    e.fn.popover = function(n) {
        return this.each((function() {
            var o = e(this)
              , i = o.data("bs.popover")
              , r = "object" == typeof n && n;
            (i || !/destroy|hide/.test(n)) && (i || o.data("bs.popover", i = new t(this,r)),
            "string" == typeof n && i[n]())
        }
        ))
    }
    ,
    e.fn.popover.Constructor = t,
    e.fn.popover.noConflict = function() {
        return e.fn.popover = n,
        this
    }
}(jQuery),
function(e) {
    "use strict";
    function t(n, o) {
        this.$body = e(document.body),
        this.$scrollElement = e(e(n).is(document.body) ? window : n),
        this.options = e.extend({}, t.DEFAULTS, o),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function n(n) {
        return this.each((function() {
            var o = e(this)
              , i = o.data("bs.scrollspy")
              , r = "object" == typeof n && n;
            i || o.data("bs.scrollspy", i = new t(this,r)),
            "string" == typeof n && i[n]()
        }
        ))
    }
    t.VERSION = "3.3.6",
    t.DEFAULTS = {
        offset: 10
    },
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    t.prototype.refresh = function() {
        var t = this
          , n = "offset"
          , o = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        e.isWindow(this.$scrollElement[0]) || (n = "position",
        o = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map((function() {
            var t = e(this)
              , i = t.data("target") || t.attr("href")
              , r = /^#./.test(i) && e(i);
            return r && r.length && r.is(":visible") && [[r[n]().top + o, i]] || null
        }
        )).sort((function(e, t) {
            return e[0] - t[0]
        }
        )).each((function() {
            t.offsets.push(this[0]),
            t.targets.push(this[1])
        }
        ))
    }
    ,
    t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), o = this.options.offset + n - this.$scrollElement.height(), i = this.offsets, r = this.targets, s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(),
        t >= o)
            return s != (e = r[r.length - 1]) && this.activate(e);
        if (s && t < i[0])
            return this.activeTarget = null,
            this.clear();
        for (e = i.length; e--; )
            s != r[e] && t >= i[e] && (void 0 === i[e + 1] || t < i[e + 1]) && this.activate(r[e])
    }
    ,
    t.prototype.activate = function(t) {
        this.activeTarget = t,
        this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]'
          , o = e(n).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")),
        o.trigger("activate.bs.scrollspy")
    }
    ,
    t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var o = e.fn.scrollspy;
    e.fn.scrollspy = n,
    e.fn.scrollspy.Constructor = t,
    e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = o,
        this
    }
    ,
    e(window).on("load.bs.scrollspy.data-api", (function() {
        e('[data-spy="scroll"]').each((function() {
            var t = e(this);
            n.call(t, t.data())
        }
        ))
    }
    ))
}(jQuery),
function(e) {
    "use strict";
    var t = function(e) {};
    t.VERSION = "3.3.6",
    t.TRANSITION_DURATION = 150,
    t.prototype.show = function() {}
    ,
    t.prototype.activate = function(e, t, n) {}
    ,
    e.fn.tab,
    e.fn.tab = function(e) {}
    ,
    e.fn.tab.Constructor = t,
    e.fn.tab.noConflict = function() {}
    ;
    var n = function(e) {};
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery),
function(e) {
    "use strict";
    var t = function(n, o) {
        this.options = e.extend({}, t.DEFAULTS, o),
        this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = e(n),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    t.VERSION = "3.3.6",
    t.RESET = "affix affix-top affix-bottom",
    t.DEFAULTS = {
        offset: 0,
        target: window
    },
    t.prototype.getState = function(e, t, n, o) {
        var i = this.$target.scrollTop()
          , r = this.$element.offset()
          , s = this.$target.height();
        if (null != n && "top" == this.affixed)
            return n > i && "top";
        if ("bottom" == this.affixed)
            return null != n ? !(i + this.unpin <= r.top) && "bottom" : !(e - o >= i + s) && "bottom";
        var a = null == this.affixed
          , u = a ? i : r.top;
        return null != n && n >= i ? "top" : null != o && u + (a ? s : t) >= e - o && "bottom"
    }
    ,
    t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var e = this.$target.scrollTop()
          , n = this.$element.offset();
        return this.pinnedOffset = n.top - e
    }
    ,
    t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }
    ,
    t.prototype.checkPosition = function() {
        this.$element.is(":visible")
    }
    ,
    e.fn.affix,
    e.fn.affix = function(n) {
        return this.each((function() {
            var o = e(this)
              , i = o.data("bs.affix")
              , r = "object" == typeof n && n;
            i || o.data("bs.affix", i = new t(this,r)),
            "string" == typeof n && i[n]()
        }
        ))
    }
    ,
    e.fn.affix.Constructor = t,
    e.fn.affix.noConflict = function() {}
    ,
    e(window).on("load", (function() {
        e('[data-spy="affix"]').each((function() {}
        ))
    }
    ))
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    (e.cookie = function(e, t, n) {}
    ).defaults = {},
    e.removeCookie = function(t, n) {
        return e.cookie(t, "", e.extend({}, n, {
            expires: -1
        })),
        !e.cookie(t)
    }
}
)),
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, o, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, o, i)
    },
    easeInQuad: function(e, t, n, o, i) {
        return o * (t /= i) * t + n
    },
    easeOutQuad: function(e, t, n, o, i) {
        return -o * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, o, i) {
        return (t /= i / 2) < 1 ? o / 2 * t * t + n : -o / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, o, i) {
        return o * (t /= i) * t * t + n
    },
    easeOutCubic: function(e, t, n, o, i) {
        return o * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, o, i) {
        return (t /= i / 2) < 1 ? o / 2 * t * t * t + n : o / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, o, i) {
        return o * (t /= i) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, o, i) {
        return -o * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, o, i) {
        return (t /= i / 2) < 1 ? o / 2 * t * t * t * t + n : -o / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, o, i) {
        return o * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, o, i) {
        return o * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, o, i) {
        return (t /= i / 2) < 1 ? o / 2 * t * t * t * t * t + n : o / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, o, i) {
        return -o * Math.cos(t / i * (Math.PI / 2)) + o + n
    },
    easeOutSine: function(e, t, n, o, i) {},
    easeInOutSine: function(e, t, n, o, i) {},
    easeInExpo: function(e, t, n, o, i) {},
    easeOutExpo: function(e, t, n, o, i) {},
    easeInOutExpo: function(e, t, n, o, i) {},
    easeInCirc: function(e, t, n, o, i) {},
    easeOutCirc: function(e, t, n, o, i) {},
    easeInOutCirc: function(e, t, n, o, i) {},
    easeInElastic: function(e, t, n, o, i) {},
    easeOutElastic: function(e, t, n, o, i) {},
    easeInOutElastic: function(e, t, n, o, i) {},
    easeInBack: function(e, t, n, o, i, r) {},
    easeOutBack: function(e, t, n, o, i, r) {},
    easeInOutBack: function(e, t, n, o, i, r) {},
    easeInBounce: function(e, t, n, o, i) {},
    easeOutBounce: function(e, t, n, o, i) {},
    easeInOutBounce: function(e, t, n, o, i) {}
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    "use strict";
    var t = e.scrollTo = function(e, t, n) {}
    ;
    return t.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    },
    e.fn.scrollTo = function(e, t, n) {}
    ,
    t.max = function(t, n) {
        var o = "scroll" + (i = "x" === n ? "Width" : "Height");
        if (!function(t) {
            return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
        }(t))
            return t[o] - e(t)[i.toLowerCase()]();
        var i = "client" + i
          , r = (s = t.ownerDocument || t.document).documentElement
          , s = s.body;
        return Math.max(r[o], s[o]) - Math.min(r[i], s[i])
    }
    ,
    e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = {
        get: function(t) {
            return e(t.elem)[t.prop]()
        },
        set: function(t) {
            var n = this.get(t);
            if (t.options.interrupt && t._last && t._last !== n)
                return e(t.elem).stop();
            var o = Math.round(t.now);
            n !== o && (e(t.elem)[t.prop](o),
            t._last = this.get(t))
        }
    },
    t
}
)),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}((function(e) {
    function t(t, n, o) {
        var i = n.hash.slice(1)
          , r = document.getElementById(i) || document.getElementsByName(i)[0];
        if (r) {
            t && t.preventDefault();
            var s = e(o.target);
            if (!(o.lock && s.is(":animated") || o.onBefore && !1 === o.onBefore(t, r, s))) {
                if (o.stop && s.stop(!0),
                o.hash) {
                    var a = r.id === i ? "id" : "name"
                      , u = e("<a> </a>").attr(a, i).css({
                        position: "absolute",
                        top: e(window).scrollTop(),
                        left: e(window).scrollLeft()
                    });
                    r[a] = "",
                    e("body").prepend(u),
                    location.hash = n.hash,
                    u.remove(),
                    r[a] = i
                }
                s.scrollTo(r, o).trigger("notify.serialScroll", [r])
            }
        }
    }
    var n = location.href.replace(/#.*/, "")
      , o = e.localScroll = function(t) {
        e("body").localScroll(t)
    }
    ;
    return o.defaults = {
        duration: 1e3,
        axis: "y",
        event: "click",
        stop: !0,
        target: window
    },
    e.fn.localScroll = function(i) {
        function r() {
            return !!this.href && !!this.hash && this.href.replace(this.hash, "") === n && (!i.filter || e(this).is(i.filter))
        }
        return (i = e.extend({}, o.defaults, i)).hash && location.hash && (i.target && window.scrollTo(0, 0),
        t(0, location, i)),
        i.lazy ? this.on(i.event, "a,area", (function(e) {
            r.call(this) && t(e, this, i)
        }
        )) : this.find("a,area").filter(r).bind(i.event, (function(e) {
            t(e, this, i)
        }
        )).end().end()
    }
    ,
    o.hash = function() {}
    ,
    o
}
)),
function() {
    function e(e) {}
    document.documentElement,
    /^Mac/.test(navigator.platform),
    Date.now(),
    window.localStorage && localStorage.SS_deltaBuffer && localStorage.SS_deltaBuffer.split(","),
    window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame,
    window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var t = window.navigator.userAgent;
    /Edge/.test(t),
    /chrome/i.test(t),
    /safari/i.test(t),
    /mobile/i.test(t),
    "onwheel"in document.createElement("div") || document.createElement("div"),
    e.destroy = function() {}
    ,
    window.SmoothScrollOptions && window.SmoothScrollOptions,
    "function" == typeof define && define.amd ? define((function() {
        return e
    }
    )) : "object" == typeof exports ? module.exports = e : window.SmoothScroll = e
}(),
function(e) {
    function t(t) {
        return e(t).filter((function() {
            return e(this).is(":appeared")
        }
        ))
    }
    function n() {
        s = !1;
        for (var e = 0, n = i.length; n > e; e++) {
            var o = t(i[e]);
            if (o.trigger("appear", [o]),
            c[e]) {
                var r = c[e].not(o);
                r.trigger("disappear", [r])
            }
            c[e] = o
        }
    }
    function o(e) {
        i.push(e),
        c.push()
    }
    var i = []
      , r = !1
      , s = !1
      , a = {
        interval: 250,
        force_process: !1
    }
      , u = e(window)
      , c = [];
    e.expr[":"].appeared = function(t) {
        var n = e(t);
        if (!n.is(":visible"))
            return !1;
        var o = u.scrollLeft()
          , i = u.scrollTop()
          , r = n.offset()
          , s = r.left
          , a = r.top;
        return a + n.height() >= i && a - (n.data("appear-top-offset") || 0) <= i + u.height() && s + n.width() >= o && s - (n.data("appear-left-offset") || 0) <= o + u.width()
    }
    ,
    e.fn.extend({
        appear: function(t) {
            var i = e.extend({}, a, t || {})
              , u = this.selector || this;
            if (!r) {
                var c = function() {
                    s || (s = !0,
                    setTimeout(n, i.interval))
                };
                e(window).scroll(c).resize(c),
                r = !0
            }
            return i.force_process && setTimeout(n, i.interval),
            o(u),
            e(u)
        }
    }),
    e.extend({
        force_appear: function() {
            return !!r && (n(),
            !0)
        }
    })
}("undefined" != typeof module ? require("jquery") : jQuery),
window.Modernizr = function(e, t, n) {
    function o(e) {
        m.cssText = e
    }
    function i(e, t) {
        return typeof e === t
    }
    function r(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function s(e, t) {
        for (var o in e) {
            var i = e[o];
            if (!r(i, "-") && m[i] !== n)
                return "pfx" != t || i
        }
        return !1
    }
    function a(e, t, o) {
        for (var r in e) {
            var s = t[e[r]];
            if (s !== n)
                return !1 === o ? e[r] : i(s, "function") ? s.bind(o || t) : s
        }
        return !1
    }
    function u(e, t, n) {
        var o = e.charAt(0).toUpperCase() + e.slice(1)
          , r = (e + " " + x.join(o + " ") + o).split(" ");
        return i(t, "string") || i(t, "undefined") ? s(r, t) : a(r = (e + " " + C.join(o + " ") + o).split(" "), t, n)
    }
    var c, l, f = {}, p = t.documentElement, d = "modernizr", h = t.createElement(d), m = h.style, g = t.createElement("input"), y = ":)", v = {}.toString, b = " -webkit- -moz- -o- -ms- ".split(" "), w = "Webkit Moz O ms", x = w.split(" "), C = w.toLowerCase().split(" "), T = "http://www.w3.org/2000/svg", E = {}, S = {}, k = {}, A = [], I = A.slice, L = function(e, n, o, i) {
        var r, s, a, u, c = t.createElement("div"), l = t.body, f = l || t.createElement("body");
        if (parseInt(o, 10))
            for (; o--; )
                (a = t.createElement("div")).id = i ? i[o] : d + (o + 1),
                c.appendChild(a);
        return r = ["&#173;", '<style id="s', d, '">', e, "</style>"].join(""),
        c.id = d,
        (l ? c : f).innerHTML += r,
        f.appendChild(c),
        l || (f.style.background = "",
        f.style.overflow = "hidden",
        u = p.style.overflow,
        p.style.overflow = "hidden",
        p.appendChild(f)),
        s = n(c, e),
        l ? c.parentNode.removeChild(c) : (f.parentNode.removeChild(f),
        p.style.overflow = u),
        !!s
    }, D = function() {
        var e = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return function(o, r) {
            r = r || t.createElement(e[o] || "div");
            var s = (o = "on" + o)in r;
            return s || (r.setAttribute || (r = t.createElement("div")),
            r.setAttribute && r.removeAttribute && (r.setAttribute(o, ""),
            s = i(r[o], "function"),
            i(r[o], "undefined") || (r[o] = n),
            r.removeAttribute(o))),
            r = null,
            s
        }
    }(), O = {}.hasOwnProperty;
    for (var F in l = i(O, "undefined") || i(O.call, "undefined") ? function(e, t) {
        return t in e && i(e.constructor.prototype[t], "undefined")
    }
    : function(e, t) {
        return O.call(e, t)
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t)
            throw new TypeError;
        var n = I.call(arguments, 1)
          , o = function() {
            if (this instanceof o) {
                var i = function() {};
                i.prototype = t.prototype;
                var r = new i
                  , s = t.apply(r, n.concat(I.call(arguments)));
                return Object(s) === s ? s : r
            }
            return t.apply(e, n.concat(I.call(arguments)))
        };
        return o
    }
    ),
    E.flexbox = function() {
        return u("flexWrap")
    }
    ,
    E.flexboxlegacy = function() {
        return u("boxDirection")
    }
    ,
    E.canvas = function() {
        var e = t.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }
    ,
    E.canvastext = function() {
        return !(!f.canvas || !i(t.createElement("canvas").getContext("2d").fillText, "function"))
    }
    ,
    E.webgl = function() {
        return !!e.WebGLRenderingContext
    }
    ,
    E.touch = function() {
        var n;
        return "ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : L(["@media (", b.join("touch-enabled),("), d, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), (function(e) {
            n = 9 === e.offsetTop
        }
        )),
        n
    }
    ,
    E.geolocation = function() {
        return "geolocation"in navigator
    }
    ,
    E.postmessage = function() {
        return !!e.postMessage
    }
    ,
    E.websqldatabase = function() {
        return !!e.openDatabase
    }
    ,
    E.indexedDB = function() {
        return !!u("indexedDB", e)
    }
    ,
    E.hashchange = function() {
        return D("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }
    ,
    E.history = function() {
        return !(!e.history || !history.pushState)
    }
    ,
    E.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable"in e || "ondragstart"in e && "ondrop"in e
    }
    ,
    E.websockets = function() {
        return "WebSocket"in e || "MozWebSocket"in e
    }
    ,
    E.rgba = function() {
        return o("background-color:rgba(150,255,150,.5)"),
        r(m.backgroundColor, "rgba")
    }
    ,
    E.hsla = function() {
        return o("background-color:hsla(120,40%,100%,.5)"),
        r(m.backgroundColor, "rgba") || r(m.backgroundColor, "hsla")
    }
    ,
    E.multiplebgs = function() {
        return o("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(m.background)
    }
    ,
    E.backgroundsize = function() {
        return u("backgroundSize")
    }
    ,
    E.borderimage = function() {
        return u("borderImage")
    }
    ,
    E.borderradius = function() {
        return u("borderRadius")
    }
    ,
    E.boxshadow = function() {
        return u("boxShadow")
    }
    ,
    E.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    }
    ,
    E.opacity = function() {
        return o(b.join("opacity:.55;") + ""),
        /^0.55$/.test(m.opacity)
    }
    ,
    E.cssanimations = function() {
        return u("animationName")
    }
    ,
    E.csscolumns = function() {
        return u("columnCount")
    }
    ,
    E.cssgradients = function() {
        var e = "background-image:";
        return o((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + b.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -e.length)),
        r(m.backgroundImage, "gradient")
    }
    ,
    E.cssreflections = function() {
        return u("boxReflect")
    }
    ,
    E.csstransforms = function() {
        return !!u("transform")
    }
    ,
    E.csstransforms3d = function() {
        var e = !!u("perspective");
        return e && "webkitPerspective"in p.style && L("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", (function(t, n) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }
        )),
        e
    }
    ,
    E.csstransitions = function() {
        return u("transition")
    }
    ,
    E.fontface = function() {
        var e;
        return L('@font-face {font-family:"font";src:url("https://")}', (function(n, o) {
            var i = t.getElementById("smodernizr")
              , r = i.sheet || i.styleSheet
              , s = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
            e = /src/i.test(s) && 0 === s.indexOf(o.split(" ")[0])
        }
        )),
        e
    }
    ,
    E.generatedcontent = function() {
        var e;
        return L(["#", d, "{font:0/0 a}#", d, ':after{content:"', y, '";visibility:hidden;font:3px/1 a}'].join(""), (function(t) {
            e = t.offsetHeight >= 3
        }
        )),
        e
    }
    ,
    E.video = function() {
        var e = t.createElement("video")
          , n = !1;
        try {
            (n = !!e.canPlayType) && ((n = new Boolean(n)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
            n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
            n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (e) {}
        return n
    }
    ,
    E.audio = function() {
        var e = t.createElement("audio")
          , n = !1;
        try {
            (n = !!e.canPlayType) && ((n = new Boolean(n)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (e) {}
        return n
    }
    ,
    E.localstorage = function() {
        try {
            return localStorage.setItem(d, d),
            localStorage.removeItem(d),
            !0
        } catch (e) {
            return !1
        }
    }
    ,
    E.sessionstorage = function() {
        try {
            return sessionStorage.setItem(d, d),
            sessionStorage.removeItem(d),
            !0
        } catch (e) {
            return !1
        }
    }
    ,
    E.webworkers = function() {
        return !!e.Worker
    }
    ,
    E.applicationcache = function() {
        return !!e.applicationCache
    }
    ,
    E.svg = function() {
        return !!t.createElementNS && !!t.createElementNS(T, "svg").createSVGRect
    }
    ,
    E.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>",
        (e.firstChild && e.firstChild.namespaceURI) == T
    }
    ,
    E.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(v.call(t.createElementNS(T, "animate")))
    }
    ,
    E.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(v.call(t.createElementNS(T, "clipPath")))
    }
    ,
    E)
        l(E, F) && (c = F.toLowerCase(),
        f[c] = E[F](),
        A.push((f[c] ? "" : "no-") + c));
    return f.input || (f.input = function(n) {
        for (var o = 0, i = n.length; i > o; o++)
            k[n[o]] = !!(n[o]in g);
        return k.list && (k.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)),
        k
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
    f.inputtypes = function(e) {
        for (var o, i, r, s = 0, a = e.length; a > s; s++)
            g.setAttribute("type", i = e[s]),
            (o = "text" !== g.type) && (g.value = y,
            g.style.cssText = "position:absolute;visibility:hidden;",
            /^range$/.test(i) && g.style.WebkitAppearance !== n ? (p.appendChild(g),
            o = (r = t.defaultView).getComputedStyle && "textfield" !== r.getComputedStyle(g, null).WebkitAppearance && 0 !== g.offsetHeight,
            p.removeChild(g)) : /^(search|tel)$/.test(i) || (o = /^(url|email)$/.test(i) ? g.checkValidity && !1 === g.checkValidity() : g.value != y)),
            S[e[s]] = !!o;
        return S
    }("search tel url email datetime date month week time datetime-local number range color".split(" "))),
    f.addTest = function(e, t) {
        if ("object" == typeof e)
            for (var o in e)
                l(e, o) && f.addTest(o, e[o]);
        else {
            if (e = e.toLowerCase(),
            f[e] !== n)
                return f;
            t = "function" == typeof t ? t() : t,
            p.className += " " + (t ? "" : "no-") + e,
            f[e] = t
        }
        return f
    }
    ,
    o(""),
    h = g = null,
    function(e, t) {
        function n() {
            var e = m.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function o(e) {
            var t = h[e[p]];
            return t || (t = {},
            d++,
            e[p] = d,
            h[d] = t),
            t
        }
        function i(e, n, i) {
            return n || (n = t),
            u ? n.createElement(e) : (i || (i = o(n)),
            !(r = i.cache[e] ? i.cache[e].cloneNode() : f.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e)).canHaveChildren || l.test(e) || r.tagUrn ? r : i.frag.appendChild(r));
            var r
        }
        function r(e, t) {
            t.cache || (t.cache = {},
            t.createElem = e.createElement,
            t.createFrag = e.createDocumentFragment,
            t.frag = t.createFrag()),
            e.createElement = function(n) {
                return m.shivMethods ? i(n, e, t) : t.createElem(n)
            }
            ,
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, (function(e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }
            )) + ");return n}")(m, t.frag)
        }
        function s(e) {
            e || (e = t);
            var n = o(e);
            return !m.shivCSS || a || n.hasCSS || (n.hasCSS = !!function(e, t) {
                var n = e.createElement("p")
                  , o = e.getElementsByTagName("head")[0] || e.documentElement;
                return n.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>",
                o.insertBefore(n.lastChild, o.firstChild)
            }(e)),
            u || r(e, n),
            e
        }
        var a, u, c = e.html5 || {}, l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, p = "_html5shiv", d = 0, h = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                a = "hidden"in e,
                u = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                }()
            } catch (e) {
                a = !0,
                u = !0
            }
        }();
        var m = {
            elements: c.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: "3.7.0",
            shivCSS: !1 !== c.shivCSS,
            supportsUnknownElements: u,
            shivMethods: !1 !== c.shivMethods,
            type: "default",
            shivDocument: s,
            createElement: i,
            createDocumentFragment: function(e, i) {
                if (e || (e = t),
                u)
                    return e.createDocumentFragment();
                for (var r = (i = i || o(e)).frag.cloneNode(), s = 0, a = n(), c = a.length; c > s; s++)
                    r.createElement(a[s]);
                return r
            }
        };
        e.html5 = m,
        s(t)
    }(this, t),
    f._version = "2.7.1",
    f._prefixes = b,
    f._domPrefixes = C,
    f._cssomPrefixes = x,
    f.mq = function(e) {}
    ,
    f.hasEvent = D,
    f.testProp = function(e) {}
    ,
    f.testAllProps = u,
    f.testStyles = L,
    f.prefixed = function(e, t, n) {
        return t ? u(e, t, n) : u(e, "pfx")
    }
    ,
    p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + A.join(" "),
    f
}(this, this.document),
function(e) {
    e.isScrollToFixed = function(t) {
        return !!e(t).data("ScrollToFixed")
    }
    ,
    e.ScrollToFixed = function(t, n) {
        function o() {
            x.trigger("preUnfixed.ScrollToFixed"),
            l(),
            x.trigger("unfixed.ScrollToFixed"),
            S = -1,
            C = x.offset().top,
            T = x.offset().left,
            m.options.offsets && (T += x.offset().left - x.position().left),
            -1 == E && (E = T),
            g = x.css("position"),
            w = !0,
            -1 != m.options.bottom && (x.trigger("preFixed.ScrollToFixed"),
            u(),
            x.trigger("fixed.ScrollToFixed"))
        }
        function i() {
            var e = m.options.limit;
            return e ? "function" == typeof e ? e.apply(x) : e : 0
        }
        function r() {
            return "fixed" === g
        }
        function s() {
            return "absolute" === g
        }
        function a() {
            return !(r() || s())
        }
        function u() {
            if (!r()) {
                var e = x[0].getBoundingClientRect();
                k.css({
                    display: x.css("display"),
                    width: e.width,
                    height: e.height,
                    float: x.css("float")
                }),
                cssOptions = {
                    "z-index": m.options.zIndex,
                    position: "fixed",
                    top: -1 == m.options.bottom ? p() : "",
                    bottom: -1 == m.options.bottom ? "" : m.options.bottom,
                    "margin-left": "0px"
                },
                m.options.dontSetWidth || (cssOptions.width = x.css("width")),
                x.css(cssOptions),
                x.addClass(m.options.baseClassName),
                m.options.className && x.addClass(m.options.className),
                g = "fixed"
            }
        }
        function c() {
            var e = i()
              , t = T;
            m.options.removeOffsets && (t = "",
            e -= C),
            cssOptions = {
                position: "absolute",
                top: e,
                left: t,
                "margin-left": "0px",
                bottom: ""
            },
            m.options.dontSetWidth || (cssOptions.width = x.css("width")),
            x.css(cssOptions),
            g = "absolute"
        }
        function l() {
            a() || (S = -1,
            k.css("display", "none"),
            x.css({
                "z-index": b,
                width: "",
                position: y,
                left: "",
                top: v,
                "margin-left": ""
            }),
            x.removeClass("scroll-to-fixed-fixed"),
            m.options.className && x.removeClass(m.options.className),
            g = null)
        }
        function f(e) {
            e != S && (x.css("left", T - e),
            S = e)
        }
        function p() {
            var e = m.options.marginTop;
            return e ? "function" == typeof e ? e.apply(x) : e : 0
        }
        function d() {
            if (e.isScrollToFixed(x) && !x.is(":hidden")) {
                var t = w
                  , n = a();
                w ? a() && (C = x.offset().top,
                T = x.offset().left) : o();
                var d = e(window).scrollLeft()
                  , g = e(window).scrollTop()
                  , v = i();
                m.options.minWidth && e(window).width() < m.options.minWidth || m.options.maxWidth && e(window).width() > m.options.maxWidth ? a() && t || (h(),
                x.trigger("preUnfixed.ScrollToFixed"),
                l(),
                x.trigger("unfixed.ScrollToFixed")) : -1 == m.options.bottom ? v > 0 && g >= v - p() ? n || s() && t || (h(),
                x.trigger("preAbsolute.ScrollToFixed"),
                c(),
                x.trigger("unfixed.ScrollToFixed")) : g >= C - p() ? (r() && t || (h(),
                x.trigger("preFixed.ScrollToFixed"),
                u(),
                S = -1,
                x.trigger("fixed.ScrollToFixed")),
                f(d)) : a() && t || (h(),
                x.trigger("preUnfixed.ScrollToFixed"),
                l(),
                x.trigger("unfixed.ScrollToFixed")) : v > 0 ? g + e(window).height() - x.outerHeight(!0) >= v - (p() || -(m.options.bottom ? m.options.bottom : 0)) ? r() && (h(),
                x.trigger("preUnfixed.ScrollToFixed"),
                "absolute" === y ? c() : l(),
                x.trigger("unfixed.ScrollToFixed")) : (r() || (h(),
                x.trigger("preFixed.ScrollToFixed"),
                u()),
                f(d),
                x.trigger("fixed.ScrollToFixed")) : f(d)
            }
        }
        function h() {
            var e = x.css("position");
            "absolute" == e ? x.trigger("postAbsolute.ScrollToFixed") : "fixed" == e ? x.trigger("postFixed.ScrollToFixed") : x.trigger("postUnfixed.ScrollToFixed")
        }
        var m = this;
        m.$el = e(t),
        m.el = t,
        m.$el.data("ScrollToFixed", m);
        var g, y, v, b, w = !1, x = m.$el, C = 0, T = 0, E = -1, S = -1, k = null, A = function(e) {
            x.is(":visible") && (w = !1,
            d())
        }, I = function(e) {
            window.requestAnimationFrame ? requestAnimationFrame(d) : d()
        };
        m.init = function() {
            m.options = e.extend({}, e.ScrollToFixed.defaultOptions, n),
            b = x.css("z-index"),
            m.$el.css("z-index", m.options.zIndex),
            k = e("<div />"),
            g = x.css("position"),
            y = x.css("position"),
            x.css("float"),
            v = x.css("top"),
            a() && m.$el.after(k),
            e(window).bind("resize.ScrollToFixed", A),
            e(window).bind("scroll.ScrollToFixed", I),
            "ontouchmove"in window && e(window).bind("touchmove.ScrollToFixed", d),
            m.options.preFixed && x.bind("preFixed.ScrollToFixed", m.options.preFixed),
            m.options.postFixed && x.bind("postFixed.ScrollToFixed", m.options.postFixed),
            m.options.preUnfixed && x.bind("preUnfixed.ScrollToFixed", m.options.preUnfixed),
            m.options.postUnfixed && x.bind("postUnfixed.ScrollToFixed", m.options.postUnfixed),
            m.options.preAbsolute && x.bind("preAbsolute.ScrollToFixed", m.options.preAbsolute),
            m.options.postAbsolute && x.bind("postAbsolute.ScrollToFixed", m.options.postAbsolute),
            m.options.fixed && x.bind("fixed.ScrollToFixed", m.options.fixed),
            m.options.unfixed && x.bind("unfixed.ScrollToFixed", m.options.unfixed),
            m.options.spacerClass && k.addClass(m.options.spacerClass),
            x.bind("resize.ScrollToFixed", (function() {
                k.height(x.height())
            }
            )),
            x.bind("scroll.ScrollToFixed", (function() {
                x.trigger("preUnfixed.ScrollToFixed"),
                l(),
                x.trigger("unfixed.ScrollToFixed"),
                d()
            }
            )),
            x.bind("detach.ScrollToFixed", (function(t) {
                (function(e) {
                    (e = e || window.event).preventDefault && e.preventDefault(),
                    e.returnValue = !1
                }
                )(t),
                x.trigger("preUnfixed.ScrollToFixed"),
                l(),
                x.trigger("unfixed.ScrollToFixed"),
                e(window).unbind("resize.ScrollToFixed", A),
                e(window).unbind("scroll.ScrollToFixed", I),
                x.unbind(".ScrollToFixed"),
                k.remove(),
                m.$el.removeData("ScrollToFixed")
            }
            )),
            A()
        }
        ,
        m.init()
    }
    ,
    e.ScrollToFixed.defaultOptions = {
        marginTop: 0,
        limit: 0,
        bottom: -1,
        zIndex: 1e3,
        baseClassName: "scroll-to-fixed-fixed"
    },
    e.fn.scrollToFixed = function(t) {
        return this.each((function() {
            new e.ScrollToFixed(this,t)
        }
        ))
    }
}(jQuery),
function(e) {
    jQuery.fn.menuzord = function(t) {
        function n(t) {
            "fade" == c.effect ? e(t).children(".dropdown, .megamenu").stop(!0, !0).delay(c.showDelay).fadeIn(c.showSpeed).addClass(c.animation) : e(t).children(".dropdown, .megamenu").stop(!0, !0).delay(c.showDelay).slideDown(c.showSpeed).addClass(c.animation)
        }
        function o(t) {
            "fade" == c.effect ? e(t).children(".dropdown, .megamenu").stop(!0, !0).delay(c.hideDelay).fadeOut(c.hideSpeed).removeClass(c.animation) : e(t).children(".dropdown, .megamenu").stop(!0, !0).delay(c.hideDelay).slideUp(c.hideSpeed).removeClass(c.animation),
            e(t).children(".dropdown, .megamenu").find(".dropdown, .megamenu").stop(!0, !0).delay(c.hideDelay).fadeOut(c.hideSpeed)
        }
        function i() {
            e(p).find(".dropdown, .megamenu").hide(0),
            navigator.userAgent.match(/Mobi/i) || window.navigator.msMaxTouchPoints > 0 || "click" == c.trigger ? (e(".menuzord-menu > li > a, .menuzord-menu ul.dropdown li a").bind("click touchstart", (function(t) {
                return t.stopPropagation(),
                t.preventDefault(),
                e(this).parent("li").siblings("li").find(".dropdown, .megamenu").stop(!0, !0).fadeOut(300),
                "none" == e(this).siblings(".dropdown, .megamenu").css("display") ? (n(e(this).parent("li")),
                !1) : (o(e(this).parent("li")),
                void (window.location.href = e(this).attr("href")))
            }
            )),
            e(document).bind("click.menu touchstart.menu", (function(t) {
                0 == e(t.target).closest(".menuzord").length && e(".menuzord-menu").find(".dropdown, .megamenu").fadeOut(300)
            }
            ))) : e(d).bind("mouseenter", (function() {
                n(this)
            }
            )).bind("mouseleave", (function() {
                o(this)
            }
            ))
        }
        function r() {
            var t = e(p).children("li").children(".dropdown, .megamenu");
            if (e(window).innerWidth() > h)
                for (var n = e(f).outerWidth(!0), o = 0; o < t.length; o++)
                    e(t[o]).parent("li").position().left + e(t[o]).outerWidth() > n ? e(t[o]).css("right", 0) : ((n == e(t[o]).outerWidth() || n - e(t[o]).outerWidth() < 20) && e(t[o]).css("left", 0),
                    e(t[o]).parent("li").position().left + e(t[o]).outerWidth() < n && e(t[o]).css("right", "auto"))
        }
        function s() {
            e(f).find("li, a").unbind(),
            e(document).unbind("click.menu touchstart.menu")
        }
        function a() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        }
        function u() {
            r(),
            a() <= h && m > h && (s(),
            c.responsive ? (e(p).hide(0),
            e(l).show(0).click((function() {
                "none" == e(p).css("display") ? e(p).slideDown(c.showSpeed) : e(p).slideUp(c.hideSpeed).find(".dropdown, .megamenu").hide(c.hideSpeed)
            }
            )),
            e(p).find(".dropdown, .megamenu").hide(0),
            e(p).find(".indicator").each((function() {
                e(this).parent("a").siblings(".dropdown, .megamenu").length > 0 && e(this).bind("click", (function(t) {
                    e(p).scrollTo({
                        top: 45,
                        left: 0
                    }, 600),
                    "A" == e(this).parent().prop("tagName") && t.preventDefault(),
                    "none" == e(this).parent("a").siblings(".dropdown, .megamenu").css("display") ? (e(this).parent("a").siblings(".dropdown, .megamenu").delay(c.showDelay).slideDown(c.showSpeed),
                    e(this).parent("a").parent("li").siblings("li").find(".dropdown, .megamenu").slideUp(c.hideSpeed)) : e(this).parent("a").siblings(".dropdown, .megamenu").slideUp(c.hideSpeed)
                }
                ))
            }
            ))) : i()),
            a() > h && h >= g && (s(),
            e(p).show(0),
            e(l).hide(0),
            i()),
            m = a(),
            g = a(),
            function() {
                if (e(p).find(".menuzord-tabs").length > 0)
                    for (var t = e(p).find(".menuzord-tabs"), n = 0; n < t.length; n++)
                        !function(t) {
                            var n = e(t).find(".menuzord-tabs-nav > li")
                              , o = e(t).find(".menuzord-tabs-content");
                            e(n).bind("click touchstart", (function(t) {
                                t.stopPropagation(),
                                t.preventDefault(),
                                e(n).removeClass("active"),
                                e(this).addClass("active"),
                                e(o).hide(0),
                                e(o[e(this).index()]).show(0)
                            }
                            ))
                        }(t[n])
            }(),
            /MSIE (\d+\.\d+);/.test(navigator.userAgent) && a() < h && 8 == new Number(RegExp.$1) && (e(l).hide(0),
            e(p).show(0),
            s(),
            i())
        }
        var c;
        e.extend(c = {
            showSpeed: 300,
            hideSpeed: 300,
            trigger: "hover",
            showDelay: 0,
            hideDelay: 0,
            effect: "fade",
            align: "left",
            responsive: !0,
            animation: "none",
            indentChildren: !0,
            indicatorFirstLevel: "+",
            indicatorSecondLevel: "+",
            scrollable: !0,
            scrollableMaxHeight: 400
        }, t);
        var l, f = e(this), p = e(f).children(".menuzord-menu"), d = e(p).find("li"), h = 900, m = 2e3, g = 200;
        e(p).children("li").children("a").each((function() {
            e(this).siblings(".dropdown, .megamenu").length > 0 && e(this).append("<span class='indicator'>" + c.indicatorFirstLevel + "</span>")
        }
        )),
        e(p).find(".dropdown").children("li").children("a").each((function() {
            e(this).siblings(".dropdown").length > 0 && e(this).append("<span class='indicator'>" + c.indicatorSecondLevel + "</span>")
        }
        )),
        "right" == c.align && e(p).addClass("menuzord-right"),
        c.indentChildren && e(p).addClass("menuzord-indented"),
        c.responsive && (e(f).addClass("menuzord-responsive").prepend("<a href='javascript:void(0)' class='showhide'><em></em><em></em><em></em></a>"),
        l = e(f).children(".showhide")),
        c.scrollable && c.responsive && e(p).css("max-height", c.scrollableMaxHeight).addClass("scrollable").append("<li class='scrollable-fix'></li>"),
        u(),
        e(window).resize((function() {
            u(),
            r()
        }
        ))
    }
}(jQuery),
function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}(this, (function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var n = this._events = this._events || {}
              , o = n[e] = n[e] || [];
            return -1 == o.indexOf(t) && o.push(t),
            this
        }
    }
    ,
    t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var n = this._onceEvents = this._onceEvents || {};
            return (n[e] = n[e] || [])[t] = !0,
            this
        }
    }
    ,
    t.off = function(e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var o = n.indexOf(t);
            return -1 != o && n.splice(o, 1),
            this
        }
    }
    ,
    t.emitEvent = function(e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var o = 0
              , i = n[o];
            t = t || [];
            for (var r = this._onceEvents && this._onceEvents[e]; i; ) {
                var s = r && r[i];
                s && (this.off(e, i),
                delete r[i]),
                i.apply(this, t),
                i = n[o += s ? 0 : 1]
            }
            return this
        }
    }
    ,
    e
}
)),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], (function(n) {
        return t(e, n)
    }
    )) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}(window, (function(e, t) {
    function n(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function o(e, t, i) {
        return this instanceof o ? ("string" == typeof e && (e = document.querySelectorAll(e)),
        this.elements = function(e) {
            var t = [];
            if (Array.isArray(e))
                t = e;
            else if ("number" == typeof e.length)
                for (var n = 0; n < e.length; n++)
                    t.push(e[n]);
            else
                t.push(e);
            return t
        }(e),
        this.options = n({}, this.options),
        "function" == typeof t ? i = t : n(this.options, t),
        i && this.on("always", i),
        this.getImages(),
        s && (this.jqDeferred = new s.Deferred),
        void setTimeout(function() {
            this.check()
        }
        .bind(this))) : new o(e,t,i)
    }
    function i(e) {
        this.img = e
    }
    function r(e, t) {
        this.url = e,
        this.element = t,
        this.img = new Image
    }
    var s = e.jQuery
      , a = e.console;
    o.prototype = Object.create(t.prototype),
    o.prototype.options = {},
    o.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e),
        !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var n = e.querySelectorAll("img"), o = 0; o < n.length; o++) {
                var i = n[o];
                this.addImage(i)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (o = 0; o < r.length; o++) {
                    var s = r[o];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    }
    ;
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var n = /url\((['"])?(.*?)\1\)/gi, o = n.exec(t.backgroundImage); null !== o; ) {
                var i = o && o[2];
                i && this.addBackground(i, e),
                o = n.exec(t.backgroundImage)
            }
    }
    ,
    o.prototype.addImage = function(e) {
        var t = new i(e);
        this.images.push(t)
    }
    ,
    o.prototype.addBackground = function(e, t) {
        var n = new r(e,t);
        this.images.push(n)
    }
    ,
    o.prototype.check = function() {
        function e(e, n, o) {
            setTimeout((function() {
                t.progress(e, n, o)
            }
            ))
        }
        var t = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach((function(t) {
            t.once("progress", e),
            t.check()
        }
        )) : void this.complete()
    }
    ,
    o.prototype.progress = function(e, t, n) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded,
        this.emitEvent("progress", [this, e, t]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && a && a.log("progress: " + n, e, t)
    }
    ,
    o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(e, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }
    ,
    i.prototype = Object.create(t.prototype),
    i.prototype.check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    i.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }
    ,
    i.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.img, t])
    }
    ,
    i.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }
    ,
    i.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    i.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    i.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    r.prototype = Object.create(i.prototype),
    r.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url,
        this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    r.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    r.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.element, t])
    }
    ,
    o.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery) && ((s = t).fn.imagesLoaded = function(e, t) {
            return new o(this,e,t).jqDeferred.promise(s(this))
        }
        )
    }
    ,
    o.makeJQueryPlugin(),
    o
}
)),
function(e) {
    function t() {}
    function n(e) {
        function n(t) {
            t.prototype.option || (t.prototype.option = function(t) {
                e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
            }
            )
        }
        function i(t, n) {
            e.fn[t] = function(i) {
                if ("string" == typeof i) {
                    for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var c = this[a]
                          , l = e.data(c, t);
                        if (l)
                            if (e.isFunction(l[i]) && "_" !== i.charAt(0)) {
                                var f = l[i].apply(l, s);
                                if (void 0 !== f)
                                    return f
                            } else
                                r("no such method '" + i + "' for " + t + " instance");
                        else
                            r("cannot call methods on " + t + " prior to initialization; attempted to call '" + i + "'")
                    }
                    return this
                }
                return this.each((function() {
                    var o = e.data(this, t);
                    o ? (o.option(i),
                    o._init()) : (o = new n(this,i),
                    e.data(this, t, o))
                }
                ))
            }
        }
        if (e) {
            var r = "undefined" == typeof console ? t : function(e) {
                console.error(e)
            }
            ;
            return e.bridget = function(e, t) {
                n(t),
                i(e, t)
            }
            ,
            e.bridget
        }
    }
    var o = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : n("object" == typeof exports ? require("jquery") : e.jQuery)
}(window),
function(e) {
    function t(t) {
        var n = e.event;
        return n.target = n.target || n.srcElement || t,
        n
    }
    var n = document.documentElement
      , o = function() {};
    n.addEventListener ? o = function(e, t, n) {
        e.addEventListener(t, n, !1)
    }
    : n.attachEvent && (o = function(e, n, o) {
        e[n + o] = o.handleEvent ? function() {
            var n = t(e);
            o.handleEvent.call(o, n)
        }
        : function() {
            var n = t(e);
            o.call(e, n)
        }
        ,
        e.attachEvent("on" + n, e[n + o])
    }
    );
    var i = function() {};
    n.removeEventListener ? i = function(e, t, n) {
        e.removeEventListener(t, n, !1)
    }
    : n.detachEvent && (i = function(e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch (o) {
            e[t + n] = void 0
        }
    }
    );
    var r = {
        bind: o,
        unbind: i
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : e.eventie = r
}(window),
function() {
    "use strict";
    function e() {}
    function t(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var n = e.prototype
      , o = this
      , i = o.EventEmitter;
    n.getListeners = function(e) {}
    ,
    n.flattenListeners = function(e) {}
    ,
    n.getListenersAsObject = function(e) {}
    ,
    n.addListener = function(e, t) {}
    ,
    n.on = t("addListener"),
    n.addOnceListener = function(e, t) {
        return this.addListener(e, {})
    }
    ,
    n.once = t("addOnceListener"),
    n.defineEvent = function(e) {}
    ,
    n.defineEvents = function(e) {}
    ,
    n.removeListener = function(e, t) {}
    ,
    n.off = t("removeListener"),
    n.addListeners = function(e, t) {}
    ,
    n.removeListeners = function(e, t) {}
    ,
    n.manipulateListeners = function(e, t, n) {}
    ,
    n.removeEvent = function(e) {
        var t, n = typeof e, o = this._getEvents();
        if ("string" === n)
            delete o[e];
        else if (e instanceof RegExp)
            for (t in o)
                o.hasOwnProperty(t) && e.test(t) && delete o[t];
        else
            delete this._events;
        return this
    }
    ,
    n.removeAllListeners = t("removeEvent"),
    n.emitEvent = function(e, t) {
        var n, o, i, r = this.getListenersAsObject(e);
        for (i in r)
            if (r.hasOwnProperty(i))
                for (o = r[i].length; o--; )
                    !0 === (n = r[i][o]).once && this.removeListener(e, n.listener),
                    n.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }
    ,
    n.trigger = t("emitEvent"),
    n.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }
    ,
    n.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e,
        this
    }
    ,
    n._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }
    ,
    n._getEvents = function() {
        return this._events || (this._events = {})
    }
    ,
    e.noConflict = function() {
        return o.EventEmitter = i,
        e
    }
    ,
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], (function() {
        return e
    }
    )) : "object" == typeof module && module.exports ? module.exports = e : o.EventEmitter = e
}
.call(this),
function(e) {
    function t(e) {
        if (e) {
            if ("string" == typeof o[e])
                return e;
            e = e.charAt(0).toUpperCase() + e.slice(1);
            for (var t, i = 0, r = n.length; r > i; i++)
                if (t = n[i] + e,
                "string" == typeof o[t])
                    return t
        }
    }
    var n = "Webkit Moz ms Ms O".split(" ")
      , o = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], (function() {
        return t
    }
    )) : "object" == typeof exports ? module.exports = t : e.getStyleProperty = t
}(window),
function(e, t) {
    function n(e) {
        var t = parseFloat(e);
        return -1 === e.indexOf("%") && !isNaN(t) && t
    }
    function o(t) {
        function o() {
            if (!l) {
                l = !0;
                var o = e.getComputedStyle;
                if (a = function() {
                    var e = o ? function(e) {
                        return o(e, null)
                    }
                    : function(e) {
                        return e.currentStyle
                    }
                    ;
                    return function(t) {
                        var n = e(t);
                        return n || i("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
                        n
                    }
                }(),
                u = t("boxSizing")) {
                    var r = document.createElement("div");
                    r.style.width = "200px",
                    r.style.padding = "1px 2px 3px 4px",
                    r.style.borderStyle = "solid",
                    r.style.borderWidth = "1px 2px 3px 4px",
                    r.style[u] = "border-box";
                    var s = document.body || document.documentElement;
                    s.appendChild(r);
                    var f = a(r);
                    c = 200 === n(f.width),
                    s.removeChild(r)
                }
            }
        }
        function s(t, n) {
            if (e.getComputedStyle || -1 === n.indexOf("%"))
                return n;
            var o = t.style
              , i = o.left
              , r = t.runtimeStyle
              , s = r && r.left;
            return s && (r.left = t.currentStyle.left),
            o.left = n,
            n = o.pixelLeft,
            o.left = i,
            s && (r.left = s),
            n
        }
        var a, u, c, l = !1;
        return function(e) {
            if (o(),
            "string" == typeof e && (e = document.querySelector(e)),
            e && "object" == typeof e && e.nodeType) {
                var t = a(e);
                if ("none" === t.display)
                    return function() {
                        for (var e = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, t = 0, n = r.length; n > t; t++)
                            e[r[t]] = 0;
                        return e
                    }();
                var i = {};
                i.width = e.offsetWidth,
                i.height = e.offsetHeight;
                for (var l = i.isBorderBox = !(!u || !t[u] || "border-box" !== t[u]), f = 0, p = r.length; p > f; f++) {
                    var d = r[f]
                      , h = t[d];
                    h = s(e, h);
                    var m = parseFloat(h);
                    i[d] = isNaN(m) ? 0 : m
                }
                var g = i.paddingLeft + i.paddingRight
                  , y = i.paddingTop + i.paddingBottom
                  , v = i.marginLeft + i.marginRight
                  , b = i.marginTop + i.marginBottom
                  , w = i.borderLeftWidth + i.borderRightWidth
                  , x = i.borderTopWidth + i.borderBottomWidth
                  , C = l && c
                  , T = n(t.width);
                !1 !== T && (i.width = T + (C ? 0 : g + w));
                var E = n(t.height);
                return !1 !== E && (i.height = E + (C ? 0 : y + x)),
                i.innerWidth = i.width - (g + w),
                i.innerHeight = i.height - (y + x),
                i.outerWidth = i.width + v,
                i.outerHeight = i.height + b,
                i
            }
        }
    }
    var i = "undefined" == typeof console ? function() {}
    : function(e) {
        console.error(e)
    }
      , r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : e.getSize = o(e.getStyleProperty)
}(window),
function(e) {
    function t(e) {
        "function" == typeof e && (t.isReady ? e() : s.push(e))
    }
    function n(e) {
        var n = "readystatechange" === e.type && "complete" !== r.readyState;
        t.isReady || n || o()
    }
    function o() {
        t.isReady = !0;
        for (var e = 0, n = s.length; n > e; e++)
            (0,
            s[e])()
    }
    function i(i) {
        return "complete" === r.readyState ? o() : (i.bind(r, "DOMContentLoaded", n),
        i.bind(r, "readystatechange", n),
        i.bind(e, "load", n)),
        t
    }
    var r = e.document
      , s = [];
    t.isReady = !1,
    "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], i) : "object" == typeof exports ? module.exports = i(require("eventie")) : e.docReady = i(e.eventie)
}(window),
function(e) {
    "use strict";
    function t(e, t) {
        return e[i](t)
    }
    function n(e) {
        e.parentNode || document.createDocumentFragment().appendChild(e)
    }
    var o, i = function() {
        if (e.matches)
            return "matches";
        if (e.matchesSelector)
            return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], n = 0, o = t.length; o > n; n++) {
            var i = t[n] + "MatchesSelector";
            if (e[i])
                return i
        }
    }();
    if (i) {
        var r = t(document.createElement("div"), "div");
        o = r ? t : function(e, o) {
            return n(e),
            t(e, o)
        }
    } else
        o = function(e, t) {
            n(e);
            for (var o = e.parentNode.querySelectorAll(t), i = 0, r = o.length; r > i; i++)
                if (o[i] === e)
                    return !0;
            return !1
        }
        ;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], (function() {
        return o
    }
    )) : "object" == typeof exports ? module.exports = o : window.matchesSelector = o
}(Element.prototype),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], (function(n, o) {
        return t(e, n, o)
    }
    )) : "object" == typeof exports ? module.exports = t(e, require("doc-ready"), require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.docReady, e.matchesSelector)
}(window, (function(e, t, n) {
    var o = {
        extend: function(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        },
        modulo: function(e, t) {
            return (e % t + t) % t
        }
    }
      , i = Object.prototype.toString;
    o.isArray = function(e) {
        return "[object Array]" == i.call(e)
    }
    ,
    o.makeArray = function(e) {
        var t = [];
        if (o.isArray(e))
            t = e;
        else if (e && "number" == typeof e.length)
            for (var n = 0, i = e.length; i > n; n++)
                t.push(e[n]);
        else
            t.push(e);
        return t
    }
    ,
    o.indexOf = Array.prototype.indexOf ? function(e, t) {
        return e.indexOf(t)
    }
    : function(e, t) {
        for (var n = 0, o = e.length; o > n; n++)
            if (e[n] === t)
                return n;
        return -1
    }
    ,
    o.removeFrom = function(e, t) {
        var n = o.indexOf(e, t);
        -1 != n && e.splice(n, 1)
    }
    ,
    o.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(e) {
        return e instanceof HTMLElement
    }
    : function(e) {
        return e && "object" == typeof e && 1 == e.nodeType && "string" == typeof e.nodeName
    }
    ,
    o.setText = function() {
        var e;
        return function(t, n) {
            t[e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText")] = n
        }
    }(),
    o.getParent = function(e, t) {
        for (; e != document.body; )
            if (e = e.parentNode,
            n(e, t))
                return e
    }
    ,
    o.getQueryElement = function(e) {
        return "string" == typeof e ? document.querySelector(e) : e
    }
    ,
    o.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }
    ,
    o.filterFindElements = function(e, t) {
        for (var i = [], r = 0, s = (e = o.makeArray(e)).length; s > r; r++) {
            var a = e[r];
            if (o.isElement(a))
                if (t) {
                    n(a, t) && i.push(a);
                    for (var u = a.querySelectorAll(t), c = 0, l = u.length; l > c; c++)
                        i.push(u[c])
                } else
                    i.push(a)
        }
        return i
    }
    ,
    o.debounceMethod = function(e, t, n) {
        var o = e.prototype[t]
          , i = t + "Timeout";
        e.prototype[t] = function() {
            var e = this[i];
            e && clearTimeout(e);
            var t = arguments
              , r = this;
            this[i] = setTimeout((function() {
                o.apply(r, t),
                delete r[i]
            }
            ), n || 100)
        }
    }
    ,
    o.toDashed = function(e) {
        return e.replace(/(.)([A-Z])/g, (function(e, t, n) {
            return t + "-" + n
        }
        )).toLowerCase()
    }
    ;
    var r = e.console;
    return o.htmlInit = function(n, i) {
        t((function() {
            for (var t = o.toDashed(i), s = document.querySelectorAll(".js-" + t), a = "data-" + t + "-options", u = 0, c = s.length; c > u; u++) {
                var l, f = s[u], p = f.getAttribute(a);
                try {
                    l = p && JSON.parse(p)
                } catch (e) {
                    r && r.error("Error parsing " + a + " on " + f.nodeName.toLowerCase() + (f.id ? "#" + f.id : "") + ": " + e);
                    continue
                }
                var d = new n(f,l)
                  , h = e.jQuery;
                h && h.data(f, i, d)
            }
        }
        ))
    }
    ,
    o
}
)),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], (function(n, o, i, r) {
        return t(e, n, o, i, r)
    }
    )) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (e.Outlayer = {},
    e.Outlayer.Item = t(e, e.EventEmitter, e.getSize, e.getStyleProperty, e.fizzyUIUtils))
}(window, (function(e, t, n, o, i) {
    "use strict";
    function r(e, t) {
        e && (this.element = e,
        this.layout = t,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    e.getComputedStyle;
    var s = o("transition")
      , a = o("transform")
      , u = s && a
      , c = (o("perspective"),
    ["transform", "transition", "transitionDuration", "transitionProperty"])
      , l = function() {
        for (var e = {}, t = 0, n = c.length; n > t; t++) {
            var i = c[t]
              , r = o(i);
            r && r !== i && (e[i] = r)
        }
        return e
    }();
    return i.extend(r.prototype, t.prototype),
    r.prototype._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }
    ,
    r.prototype.getSize = function() {
        this.size = n(this.element)
    }
    ,
    r.prototype.css = function(e) {
        var t = this.element.style;
        for (var n in e)
            t[l[n] || n] = e[n]
    }
    ,
    r.prototype.getPosition = function() {}
    ,
    r.prototype.layoutPosition = function() {
        var e = this.layout.size
          , t = this.layout.options
          , n = {}
          , o = t.isOriginLeft ? "paddingLeft" : "paddingRight"
          , i = t.isOriginLeft ? "left" : "right"
          , r = t.isOriginLeft ? "right" : "left"
          , s = this.position.x + e[o];
        n[i] = this.getXValue(s),
        n[r] = "";
        var a = t.isOriginTop ? "paddingTop" : "paddingBottom"
          , u = t.isOriginTop ? "top" : "bottom"
          , c = t.isOriginTop ? "bottom" : "top"
          , l = this.position.y + e[a];
        n[u] = this.getYValue(l),
        n[c] = "",
        this.css(n),
        this.emitEvent("layout", [this])
    }
    ,
    r.prototype.getXValue = function(e) {
        var t = this.layout.options;
        return t.percentPosition && !t.isHorizontal ? e / this.layout.size.width * 100 + "%" : e + "px"
    }
    ,
    r.prototype.getYValue = function(e) {
        var t = this.layout.options;
        return t.percentPosition && t.isHorizontal ? e / this.layout.size.height * 100 + "%" : e + "px"
    }
    ,
    r.prototype._transitionTo = function(e, t) {}
    ,
    r.prototype.getTranslate = function(e, t) {}
    ,
    r.prototype.goTo = function(e, t) {
        this.setPosition(e, t),
        this.layoutPosition()
    }
    ,
    r.prototype.moveTo = u ? r.prototype._transitionTo : r.prototype.goTo,
    r.prototype.setPosition = function(e, t) {
        this.position.x = parseInt(e, 10),
        this.position.y = parseInt(t, 10)
    }
    ,
    r.prototype._nonTransition = function(e) {}
    ,
    r.prototype._transition = function(e) {}
    ,
    (l.transform || "transform").replace(/([A-Z])/g, (function(e) {}
    )),
    r.prototype.enableTransition = function() {}
    ,
    r.prototype.transition = r.prototype[s ? "_transition" : "_nonTransition"],
    r.prototype.onwebkitTransitionEnd = function(e) {}
    ,
    r.prototype.onotransitionend = function(e) {}
    ,
    r.prototype.ontransitionend = function(e) {}
    ,
    r.prototype.disableTransition = function() {}
    ,
    r.prototype._removeStyles = function(e) {}
    ,
    r.prototype.removeTransitionStyles = function() {}
    ,
    r.prototype.removeElem = function() {}
    ,
    r.prototype.remove = function() {}
    ,
    r.prototype.reveal = function() {}
    ,
    r.prototype.onRevealTransitionEnd = function() {}
    ,
    r.prototype.getHideRevealTransitionEndProperty = function(e) {}
    ,
    r.prototype.hide = function() {}
    ,
    r.prototype.onHideTransitionEnd = function() {}
    ,
    r.prototype.destroy = function() {}
    ,
    r
}
)),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], (function(e, t, n, o, i) {}
    )) : "object" == typeof exports ? module.exports = t(e, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.eventie, e.EventEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
}(window, (function(e, t, n, o, i, r) {
    "use strict";
    function s(e, t) {
        var n = i.getQueryElement(e);
        if (n) {
            this.element = n,
            u && (this.$element = u(this.element)),
            this.options = i.extend({}, this.constructor.defaults),
            this.option(t);
            var o = ++l;
            this.element.outlayerGUID = o,
            f[o] = this,
            this._create(),
            this.options.isInitLayout && this.layout()
        } else
            a && a.error("Bad element for " + this.constructor.namespace + ": " + (n || e))
    }
    var a = e.console
      , u = e.jQuery
      , c = function() {}
      , l = 0
      , f = {};
    return s.namespace = "outlayer",
    s.Item = r,
    s.defaults = {
        containerStyle: {
            position: "relative"
        },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    },
    i.extend(s.prototype, n.prototype),
    s.prototype.option = function(e) {
        i.extend(this.options, e)
    }
    ,
    s.prototype._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        i.extend(this.element.style, this.options.containerStyle),
        this.options.isResizeBound && this.bindResize()
    }
    ,
    s.prototype.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    s.prototype._itemize = function(e) {
        for (var t = this._filterFindItemElements(e), n = this.constructor.Item, o = [], i = 0, r = t.length; r > i; i++) {
            var s = new n(t[i],this);
            o.push(s)
        }
        return o
    }
    ,
    s.prototype._filterFindItemElements = function(e) {
        return i.filterFindElements(e, this.options.itemSelector)
    }
    ,
    s.prototype.getItemElements = function() {
        for (var e = [], t = 0, n = this.items.length; n > t; t++)
            e.push(this.items[t].element);
        return e
    }
    ,
    s.prototype.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    }
    ,
    s.prototype._init = s.prototype.layout,
    s.prototype._resetLayout = function() {
        this.getSize()
    }
    ,
    s.prototype.getSize = function() {
        this.size = o(this.element)
    }
    ,
    s.prototype._getMeasurement = function(e, t) {
        var n, r = this.options[e];
        r ? ("string" == typeof r ? n = this.element.querySelector(r) : i.isElement(r) && (n = r),
        this[e] = n ? o(n)[t] : r) : this[e] = 0
    }
    ,
    s.prototype.layoutItems = function(e, t) {
        e = this._getItemsForLayout(e),
        this._layoutItems(e, t),
        this._postLayout()
    }
    ,
    s.prototype._getItemsForLayout = function(e) {
        for (var t = [], n = 0, o = e.length; o > n; n++) {
            var i = e[n];
            i.isIgnored || t.push(i)
        }
        return t
    }
    ,
    s.prototype._layoutItems = function(e, t) {
        if (this._emitCompleteOnItems("layout", e),
        e && e.length) {
            for (var n = [], o = 0, i = e.length; i > o; o++) {
                var r = e[o]
                  , s = this._getItemLayoutPosition(r);
                s.item = r,
                s.isInstant = t || r.isLayoutInstant,
                n.push(s)
            }
            this._processLayoutQueue(n)
        }
    }
    ,
    s.prototype._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    s.prototype._processLayoutQueue = function(e) {
        for (var t = 0, n = e.length; n > t; t++) {
            var o = e[t];
            this._positionItem(o.item, o.x, o.y, o.isInstant)
        }
    }
    ,
    s.prototype._positionItem = function(e, t, n, o) {
        o ? e.goTo(t, n) : e.moveTo(t, n)
    }
    ,
    s.prototype._postLayout = function() {
        this.resizeContainer()
    }
    ,
    s.prototype.resizeContainer = function() {
        if (this.options.isResizingContainer) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1))
        }
    }
    ,
    s.prototype._getContainerSize = c,
    s.prototype._setContainerMeasure = function(e, t) {
        if (void 0 !== e) {
            var n = this.size;
            n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth),
            e = Math.max(e, 0),
            this.element.style[t ? "width" : "height"] = e + "px"
        }
    }
    ,
    s.prototype._emitCompleteOnItems = function(e, t) {
        function n() {
            i.dispatchEvent(e + "Complete", null, [t])
        }
        function o() {
            ++s === r && n()
        }
        var i = this
          , r = t.length;
        if (t && r)
            for (var s = 0, a = 0, u = t.length; u > a; a++)
                t[a].once(e, o);
        else
            n()
    }
    ,
    s.prototype.dispatchEvent = function(e, t, n) {
        var o = t ? [t].concat(n) : n;
        if (this.emitEvent(e, o),
        u)
            if (this.$element = this.$element || u(this.element),
            t) {
                var i = u.Event(t);
                i.type = e,
                this.$element.trigger(i, n)
            } else
                this.$element.trigger(e, n)
    }
    ,
    s.prototype.ignore = function(e) {
        var t = this.getItem(e);
        t && (t.isIgnored = !0)
    }
    ,
    s.prototype.unignore = function(e) {
        var t = this.getItem(e);
        t && delete t.isIgnored
    }
    ,
    s.prototype.stamp = function(e) {
        if (e = this._find(e)) {
            this.stamps = this.stamps.concat(e);
            for (var t = 0, n = e.length; n > t; t++) {
                var o = e[t];
                this.ignore(o)
            }
        }
    }
    ,
    s.prototype.unstamp = function(e) {
        if (e = this._find(e))
            for (var t = 0, n = e.length; n > t; t++) {
                var o = e[t];
                i.removeFrom(this.stamps, o),
                this.unignore(o)
            }
    }
    ,
    s.prototype._find = function(e) {
        return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)),
        e = i.makeArray(e)) : void 0
    }
    ,
    s.prototype._manageStamps = function() {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var e = 0, t = this.stamps.length; t > e; e++) {
                var n = this.stamps[e];
                this._manageStamp(n)
            }
        }
    }
    ,
    s.prototype._getBoundingRect = function() {
        var e = this.element.getBoundingClientRect()
          , t = this.size;
        this._boundingRect = {
            left: e.left + t.paddingLeft + t.borderLeftWidth,
            top: e.top + t.paddingTop + t.borderTopWidth,
            right: e.right - (t.paddingRight + t.borderRightWidth),
            bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
        }
    }
    ,
    s.prototype._manageStamp = c,
    s.prototype._getElementOffset = function(e) {
        var t = e.getBoundingClientRect()
          , n = this._boundingRect
          , i = o(e);
        return {
            left: t.left - n.left - i.marginLeft,
            top: t.top - n.top - i.marginTop,
            right: n.right - t.right - i.marginRight,
            bottom: n.bottom - t.bottom - i.marginBottom
        }
    }
    ,
    s.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }
    ,
    s.prototype.bindResize = function() {
        this.isResizeBound || (t.bind(e, "resize", this),
        this.isResizeBound = !0)
    }
    ,
    s.prototype.unbindResize = function() {
        this.isResizeBound && t.unbind(e, "resize", this),
        this.isResizeBound = !1
    }
    ,
    s.prototype.onresize = function() {
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var e = this;
        this.resizeTimeout = setTimeout((function() {
            e.resize(),
            delete e.resizeTimeout
        }
        ), 100)
    }
    ,
    s.prototype.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    s.prototype.needsResizeLayout = function() {
        var e = o(this.element);
        return this.size && e && e.innerWidth !== this.size.innerWidth
    }
    ,
    s.prototype.addItems = function(e) {
        var t = this._itemize(e);
        return t.length && (this.items = this.items.concat(t)),
        t
    }
    ,
    s.prototype.appended = function(e) {}
    ,
    s.prototype.prepended = function(e) {}
    ,
    s.prototype.reveal = function(e) {
        this._emitCompleteOnItems("reveal", e);
        for (var t = e && e.length, n = 0; t && t > n; n++)
            e[n].reveal()
    }
    ,
    s.prototype.hide = function(e) {
        this._emitCompleteOnItems("hide", e);
        for (var t = e && e.length, n = 0; t && t > n; n++)
            e[n].hide()
    }
    ,
    s.prototype.revealItemElements = function(e) {
        var t = this.getItems(e);
        this.reveal(t)
    }
    ,
    s.prototype.hideItemElements = function(e) {}
    ,
    s.prototype.getItem = function(e) {}
    ,
    s.prototype.getItems = function(e) {}
    ,
    s.prototype.remove = function(e) {}
    ,
    s.prototype.destroy = function() {
        var e = this.element.style;
        e.height = "",
        e.position = "",
        e.width = "";
        for (var t = 0, n = this.items.length; n > t; t++)
            this.items[t].destroy();
        this.unbindResize();
        var o = this.element.outlayerGUID;
        delete f[o],
        delete this.element.outlayerGUID,
        u && u.removeData(this.element, this.constructor.namespace)
    }
    ,
    s.data = function(e) {
        var t = (e = i.getQueryElement(e)) && e.outlayerGUID;
        return t && f[t]
    }
    ,
    s.create = function(e, t) {
        function n() {
            s.apply(this, arguments)
        }
        return Object.create ? n.prototype = Object.create(s.prototype) : i.extend(n.prototype, s.prototype),
        n.prototype.constructor = n,
        n.defaults = i.extend({}, s.defaults),
        i.extend(n.defaults, t),
        n.prototype.settings = {},
        n.namespace = e,
        n.data = s.data,
        n.Item = function() {
            r.apply(this, arguments)
        }
        ,
        n.Item.prototype = new r,
        i.htmlInit(n, e),
        u && u.bridget && u.bridget(e, n),
        n
    }
    ,
    s.Item = r,
    s
}
)),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], t) : "object" == typeof exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {},
    e.Isotope.Item = t(e.Outlayer))
}(window, (function(e) {
    "use strict";
    function t() {
        e.Item.apply(this, arguments)
    }
    t.prototype = new e.Item,
    t.prototype._create = function() {
        this.id = this.layout.itemGUID++,
        e.Item.prototype._create.call(this),
        this.sortData = {}
    }
    ,
    t.prototype.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var e = this.layout.options.getSortData
              , t = this.layout._sorters;
            for (var n in e) {
                var o = t[n];
                this.sortData[n] = o(this.element, this)
            }
        }
    }
    ;
    var n = t.prototype.destroy;
    return t.prototype.destroy = function() {
        n.apply(this, arguments),
        this.css({
            display: ""
        })
    }
    ,
    t
}
)),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {},
    e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
}(window, (function(e, t) {
    "use strict";
    function n(e) {
        this.isotope = e,
        e && (this.options = e.options[this.namespace],
        this.element = e.element,
        this.items = e.filteredItems,
        this.size = e.size)
    }
    return function() {
        for (var e = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], o = 0, i = e.length; i > o; o++) {
            var r = e[o];
            n.prototype[r] = function(e) {
                return function() {
                    return t.prototype[e].apply(this.isotope, arguments)
                }
            }(r)
        }
    }(),
    n.prototype.needsVerticalResizeLayout = function() {
        var t = e(this.isotope.element);
        return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
    }
    ,
    n.prototype._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    n.prototype.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    n.prototype.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    n.prototype.getSegmentSize = function(e, t) {
        var n = e + t
          , o = "outer" + t;
        if (this._getMeasurement(n, o),
        !this[n]) {
            var i = this.getFirstItemSize();
            this[n] = i && i[o] || this.isotope.size["inner" + t]
        }
    }
    ,
    n.prototype.getFirstItemSize = function() {
        var t = this.isotope.filteredItems[0];
        return t && t.element && e(t.element)
    }
    ,
    n.prototype.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    n.prototype.getSize = function() {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }
    ,
    n.modes = {},
    n.create = function(e, t) {
        function o() {
            n.apply(this, arguments)
        }
        return o.prototype = new n,
        t && (o.options = t),
        o.prototype.namespace = e,
        n.modes[e] = o,
        o
    }
    ,
    n
}
)),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], t) : "object" == typeof exports ? module.exports = t(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : e.Masonry = t(e.Outlayer, e.getSize, e.fizzyUIUtils)
}(window, (function(e, t, n) {
    var o = e.create("masonry");
    return o.prototype._resetLayout = function() {}
    ,
    o.prototype.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var e = this.items[0]
              , n = e && e.element;
            this.columnWidth = n && t(n).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter
          , i = this.containerWidth + this.gutter
          , r = i / o
          , s = o - i % o;
        r = Math[s && 1 > s ? "round" : "floor"](r),
        this.cols = Math.max(r, 1)
    }
    ,
    o.prototype.getContainerWidth = function() {
        var e = this.options.isFitWidth ? this.element.parentNode : this.element
          , n = t(e);
        this.containerWidth = n && n.innerWidth
    }
    ,
    o.prototype._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = e.size.outerWidth % this.columnWidth
          , o = Math[t && 1 > t ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var i = this._getColGroup(o), r = Math.min.apply(Math, i), s = n.indexOf(i, r), a = {
            x: this.columnWidth * s,
            y: r
        }, u = r + e.size.outerHeight, c = this.cols + 1 - i.length, l = 0; c > l; l++)
            this.colYs[s + l] = u;
        return a
    }
    ,
    o.prototype._getColGroup = function(e) {}
    ,
    o.prototype._manageStamp = function(e) {}
    ,
    o.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var e = {
            height: this.maxY
        };
        return this.options.isFitWidth && (e.width = this._getContainerFitWidth()),
        e
    }
    ,
    o.prototype._getContainerFitWidth = function() {
        for (var e = 0, t = this.cols; --t && 0 === this.colYs[t]; )
            e++;
        return (this.cols - e) * this.columnWidth - this.gutter
    }
    ,
    o.prototype.needsResizeLayout = function() {
        var e = this.containerWidth;
        return this.getContainerWidth(),
        e !== this.containerWidth
    }
    ,
    o
}
)),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry)
}(window, (function(e, t) {
    "use strict";
    var n = e.create("masonry")
      , o = n.prototype._getElementOffset
      , i = n.prototype.layout
      , r = n.prototype._getMeasurement;
    (function(e, t) {
        for (var n in t)
            e[n] = t[n]
    }
    )(n.prototype, t.prototype),
    n.prototype._getElementOffset = o,
    n.prototype.layout = i,
    n.prototype._getMeasurement = r;
    var s = n.prototype.measureColumns;
    n.prototype.measureColumns = function() {
        this.items = this.isotope.filteredItems,
        s.call(this)
    }
    ;
    var a = n.prototype._manageStamp;
    return n.prototype._manageStamp = function() {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft,
        this.options.isOriginTop = this.isotope.options.isOriginTop,
        a.apply(this, arguments)
    }
    ,
    n
}
)),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, (function(e) {
    "use strict";
    var t = e.create("fitRows");
    return t.prototype._resetLayout = function() {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    t.prototype._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = e.size.outerWidth + this.gutter
          , n = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && t + this.x > n && (this.x = 0,
        this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight),
        this.x += t,
        o
    }
    ,
    t.prototype._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
    ,
    t
}
)),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, (function(e) {
    "use strict";
    var t = e.create("vertical", {
        horizontalAlignment: 0
    });
    return t.prototype._resetLayout = function() {
        this.y = 0
    }
    ,
    t.prototype._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment
          , n = this.y;
        return this.y += e.size.outerHeight,
        {
            x: t,
            y: n
        }
    }
    ,
    t.prototype._getContainerSize = function() {
        return {
            height: this.y
        }
    }
    ,
    t
}
)),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], (function(n, o, i, r, s, a) {
        return t(e, n, o, i, r, s, a)
    }
    )) : "object" == typeof exports ? module.exports = t(e, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : e.Isotope = t(e, e.Outlayer, e.getSize, e.matchesSelector, e.fizzyUIUtils, e.Isotope.Item, e.Isotope.LayoutMode)
}(window, (function(e, t, n, o, i, r, s) {
    var a = e.jQuery
      , u = (String.prototype.trim,
    document.documentElement.textContent,
    t.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    }));
    u.Item = r,
    u.LayoutMode = s,
    u.prototype._create = function() {
        for (var e in this.itemGUID = 0,
        this._sorters = {},
        this._getSorters(),
        t.prototype._create.call(this),
        this.modes = {},
        this.filteredItems = this.items,
        this.sortHistory = ["original-order"],
        s.modes)
            this._initLayoutMode(e)
    }
    ,
    u.prototype.reloadItems = function() {
        this.itemGUID = 0,
        t.prototype.reloadItems.call(this)
    }
    ,
    u.prototype._itemize = function() {
        for (var e = t.prototype._itemize.apply(this, arguments), n = 0, o = e.length; o > n; n++)
            e[n].id = this.itemGUID++;
        return this._updateItemsSortData(e),
        e
    }
    ,
    u.prototype._initLayoutMode = function(e) {
        var t = s.modes[e]
          , n = this.options[e] || {};
        this.options[e] = t.options ? i.extend(t.options, n) : n,
        this.modes[e] = new t(this)
    }
    ,
    u.prototype.layout = function() {
        return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
    }
    ,
    u.prototype._layout = function() {
        var e = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, e),
        this._isLayoutInited = !0
    }
    ,
    u.prototype.arrange = function(e) {
        function t() {
            o.reveal(n.needReveal),
            o.hide(n.needHide)
        }
        this.option(e),
        this._getIsInstant();
        var n = this._filter(this.items);
        this.filteredItems = n.matches;
        var o = this;
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(t) : t(),
        this._sort(),
        this._layout()
    }
    ,
    u.prototype._init = u.prototype.arrange,
    u.prototype._getIsInstant = function() {
        var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        return this._isInstant = e,
        e
    }
    ,
    u.prototype._bindArrangeComplete = function() {
        function e() {
            t && n && o && i.dispatchEvent("arrangeComplete", null, [i.filteredItems])
        }
        var t, n, o, i = this;
        this.once("layoutComplete", (function() {
            t = !0,
            e()
        }
        )),
        this.once("hideComplete", (function() {
            n = !0,
            e()
        }
        )),
        this.once("revealComplete", (function() {
            o = !0,
            e()
        }
        ))
    }
    ,
    u.prototype._filter = function(e) {
        var t = this.options.filter;
        t = t || "*";
        for (var n = [], o = [], i = [], r = this._getFilterTest(t), s = 0, a = e.length; a > s; s++) {
            var u = e[s];
            if (!u.isIgnored) {
                var c = r(u);
                c && n.push(u),
                c && u.isHidden ? o.push(u) : c || u.isHidden || i.push(u)
            }
        }
        return {
            matches: n,
            needReveal: o,
            needHide: i
        }
    }
    ,
    u.prototype._getFilterTest = function(e) {
        return a && this.options.isJQueryFiltering ? function(t) {
            return a(t.element).is(e)
        }
        : function(e) {}
    }
    ,
    u.prototype.updateSortData = function(e) {}
    ,
    u.prototype._getSorters = function() {
        var e = this.options.getSortData;
        for (var t in e) {
            var n = e[t];
            this._sorters[t] = c(n)
        }
    }
    ,
    u.prototype._updateItemsSortData = function(e) {
        for (var t = e && e.length, n = 0; t && t > n; n++)
            e[n].updateSortData()
    }
    ;
    var c = function(e) {};
    return u.sortDataParsers = {
        parseInt: function(e) {},
        parseFloat: function(e) {}
    },
    u.prototype._sort = function() {
        var e = this.options.sortBy;
        if (e) {
            var t = ([].concat.apply(e, this.sortHistory),
            this.options.sortAscending,
            function(e, t) {}
            );
            this.filteredItems.sort(t),
            e != this.sortHistory[0] && this.sortHistory.unshift(e)
        }
    }
    ,
    u.prototype._mode = function() {
        var e = this.options.layoutMode
          , t = this.modes[e];
        if (!t)
            throw new Error("No layout mode: " + e);
        return t.options = this.options[e],
        t
    }
    ,
    u.prototype._resetLayout = function() {
        t.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }
    ,
    u.prototype._getItemLayoutPosition = function(e) {
        return this._mode()._getItemLayoutPosition(e)
    }
    ,
    u.prototype._manageStamp = function(e) {}
    ,
    u.prototype._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    u.prototype.needsResizeLayout = function() {}
    ,
    u.prototype.appended = function(e) {}
    ,
    u.prototype.prepended = function(e) {}
    ,
    u.prototype._filterRevealAdded = function(e) {}
    ,
    u.prototype.insert = function(e) {}
    ,
    u.prototype.remove,
    u.prototype.remove = function(e) {}
    ,
    u.prototype.shuffle = function() {}
    ,
    u.prototype._noTransition = function(e) {
        var t = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = e.call(this);
        return this.options.transitionDuration = t,
        n
    }
    ,
    u.prototype.getFilteredItemElements = function() {}
    ,
    u
}
)),
function(e) {
    var t = e(window);
    t.height(),
    t.resize((function() {
        t.height()
    }
    )),
    e.fn.parallax = function(e, t, n) {}
}(jQuery),
function(e) {
    e.fn.animateNumbers = function(t, n, o, i) {
        return this.each((function() {
            var r = e(this)
              , s = parseInt(r.text().replace(/,/g, ""));
            n = void 0 === n || n,
            e({
                value: s
            }).animate({
                value: t
            }, {
                duration: null == o ? 1e3 : o,
                easing: null == i ? "swing" : i,
                step: function() {
                    r.text(Math.floor(this.value)),
                    n && r.text(r.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                },
                complete: function() {
                    parseInt(r.text()) !== t && (r.text(t),
                    n && r.text(r.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")))
                }
            })
        }
        ))
    }
}(jQuery),
jQuery.fn.jflickrfeed = function(e, t) {}
,
function(e) {
    "use strict";
    e.fn.fitVids = function(t) {
        var n = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var o = document.head || document.getElementsByTagName("head")[0]
              , i = document.createElement("div");
            i.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',
            o.appendChild(i.childNodes[1])
        }
        return t && e.extend(n, t),
        this.each((function() {
            var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            n.customSelector && t.push(n.customSelector);
            var o = ".fitvidsignore";
            n.ignore && (o = o + ", " + n.ignore);
            var i = e(this).find(t.join(","));
            (i = (i = i.not("object object")).not(o)).each((function(e) {}
            ))
        }
        ))
    }
}(window.jQuery || window.Zepto),
function(e) {
    "use strict";
    e.ajaxChimp = {
        responses: {
            "We have sent you a confirmation email": 0,
            "Please enter a value": 1,
            "An email address must contain a single @": 2,
            "The domain portion of the email address is invalid (the portion after the @: )": 3,
            "The username portion of the email address is invalid (the portion before the @: )": 4,
            "This email address looks fake or invalid. Please enter a real email address": 5
        },
        translations: {
            en: null
        },
        init: function(e, t) {}
    },
    e.fn.ajaxChimp = function(e) {}
}(jQuery),
function(e) {
    "use strict";
    jQuery.fn.twittie = function() {}
}(),
function(e) {
    "use strict";
    jQuery.fn.menufullpage = function(e) {}
}(),
function(e, t) {
    "function" == typeof define && define.amd ? define("smoothScroll", t(e)) : "object" == typeof exports ? module.exports = t(e) : e.smoothScroll = t(e)
}(window || this, (function(e) {
    "use strict";
    var t = {};
    return document.querySelector && e.addEventListener,
    t.animateScroll = function(e, t, n) {}
    ,
    t.destroy = function() {}
    ,
    t.init = function(e) {}
    ,
    t
}
)),
function() {
    var e, t, n = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    (function() {
        function e() {}
        e.prototype.extend = function(e, t) {
            var n, o;
            for (n in t)
                o = t[n],
                null == e[n] && (e[n] = o);
            return e
        }
        ,
        e.prototype.isMobile = function(e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        }
        ,
        e.prototype.createEvent = function(e, t, n, o) {}
        ,
        e.prototype.emitEvent = function(e, t) {}
        ,
        e.prototype.addEvent = function(e, t, n) {}
        ,
        e.prototype.removeEvent = function(e, t, n) {}
        ,
        e.prototype.innerHeight = function() {}
    }
    )(),
    t = this.WeakMap || this.MozWeakMap || (t = void 0),
    e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = void 0),
    this.getComputedStyle,
    this.WOW = function() {
        function o(e) {
            null == e && (e = {}),
            this.scrollCallback = n(this.scrollCallback, this),
            this.scrollHandler = n(this.scrollHandler, this),
            this.resetAnimation = n(this.resetAnimation, this),
            this.start = n(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(e, this.defaults),
            null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)),
            this.animationNameCache = new t,
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        },
        o.prototype.init = function() {}
        ,
        o.prototype.start = function() {}
        ,
        o.prototype.stop = function() {}
        ,
        o.prototype.sync = function() {}
        ,
        o.prototype.doSync = function(e) {}
        ,
        o.prototype.show = function(e) {}
        ,
        o.prototype.applyStyle = function(e, t) {}
        ,
        o.prototype.animate = (window,
        function(e) {}
        ),
        o.prototype.resetStyle = function() {}
        ,
        o.prototype.resetAnimation = function(e) {}
        ,
        o.prototype.customStyle = function(e, t, n, o, i) {}
        ,
        o.prototype.vendors = ["moz", "webkit"],
        o.prototype.vendorSet = function(e, t) {}
        ,
        o.prototype.vendorCSS = function(e, t) {}
        ,
        o.prototype.animationName = function(e) {}
        ,
        o.prototype.cacheAnimationName = function(e) {}
        ,
        o.prototype.cachedAnimationName = function(e) {}
        ,
        o.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        o.prototype.scrollCallback = function() {
            this.boxes = function() {
                var t, n, o, i;
                for (i = [],
                t = 0,
                n = (o = this.boxes).length; n > t; t++)
                    (e = o[t]) && (this.isVisible(e) ? this.show(e) : i.push(e));
                return i
            }
        }
        ,
        o.prototype.offsetTop = function(e) {}
        ,
        o.prototype.isVisible = function(e) {}
        ,
        o.prototype.util = function() {}
        ,
        o.prototype.disabled = function() {}
        ,
        o
    }()
}
.call(this),
function(e) {
    "use strict";
    var t = function(e, t) {};
    t.prototype = {
        constructor: t,
        init: function() {},
        build: function() {},
        typewrite: function(e, t) {},
        backspace: function(e, t) {},
        shuffleArray: function(e) {},
        reset: function() {}
    },
    e.fn.typed = function(e) {}
    ,
    e.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: !1,
        backDelay: 500,
        loop: !1,
        loopCount: !1,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
    }
}(window.jQuery),
function(e, t, n, o) {
    function i(e, t) {}
    i.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: t,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    },
    i.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    },
    i.Plugins = {},
    i.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(e) {}
    }, {
        filter: ["items", "settings"],
        run: function() {}
    }, {
        filter: ["items", "settings"],
        run: function() {}
    }, {
        filter: ["width", "items", "settings"],
        run: function() {}
    }, {
        filter: ["width", "items", "settings"],
        run: function() {}
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {}
    }, {
        filter: ["position"],
        run: function() {}
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {}
    }],
    i.prototype.initialize = function() {}
    ,
    i.prototype.setup = function() {}
    ,
    i.prototype.optionsLogic = function() {}
    ,
    i.prototype.prepare = function(e) {}
    ,
    i.prototype.update = function() {}
    ,
    i.prototype.width = function(e) {}
    ,
    i.prototype.refresh = function() {}
    ,
    i.prototype.eventsCall = function() {}
    ,
    i.prototype.onThrottledResize = function() {}
    ,
    i.prototype.onResize = function() {}
    ,
    i.prototype.eventsRouter = function(e) {}
    ,
    i.prototype.internalEvents = function() {}
    ,
    i.prototype.onDragStart = function(e) {}
    ,
    i.prototype.onDragMove = function(e) {}
    ,
    i.prototype.onDragEnd = function(e) {}
    ,
    i.prototype.removeClick = function(e) {}
    ,
    i.prototype.preventClick = function(e) {}
    ,
    i.prototype.getTransformProperty = function() {}
    ,
    i.prototype.closest = function(e) {}
    ,
    i.prototype.animate = function(e) {}
    ,
    i.prototype.current = function(e) {}
    ,
    i.prototype.invalidate = function(e) {}
    ,
    i.prototype.reset = function(e) {}
    ,
    i.prototype.normalize = function(e, t) {}
    ,
    i.prototype.relative = function(e) {}
    ,
    i.prototype.maximum = function(e) {}
    ,
    i.prototype.minimum = function(e) {}
    ,
    i.prototype.items = function(e) {}
    ,
    i.prototype.mergers = function(e) {}
    ,
    i.prototype.clones = function(e) {}
    ,
    i.prototype.speed = function(e) {}
    ,
    i.prototype.coordinates = function(e) {}
    ,
    i.prototype.duration = function(e, t, n) {}
    ,
    i.prototype.to = function(e, t) {}
    ,
    i.prototype.next = function(e) {}
    ,
    i.prototype.prev = function(e) {}
    ,
    i.prototype.transitionEnd = function(e) {}
    ,
    i.prototype.viewport = function() {}
    ,
    i.prototype.replace = function(e) {}
    ,
    i.prototype.add = function(e, t) {}
    ,
    i.prototype.remove = function(e) {}
    ,
    i.prototype.addTriggerableEvents = function() {}
    ,
    i.prototype.watchVisibility = function() {}
    ,
    i.prototype.preloadAutoWidthImages = function(e) {}
    ,
    i.prototype.destroy = function() {}
    ,
    i.prototype.op = function(e, t, n) {}
    ,
    i.prototype.on = function(e, t, n, o) {}
    ,
    i.prototype.off = function(e, t, n, o) {}
    ,
    i.prototype.trigger = function(e, t, n) {}
    ,
    i.prototype.suppress = function(e) {}
    ,
    i.prototype.release = function(e) {}
    ,
    i.prototype.browserSupport = function() {}
    ,
    e.fn.owlCarousel = function(e) {}
    ,
    e.fn.owlCarousel.Constructor = i
}(window.Zepto || window.jQuery, window, document),
function(e, t) {
    var n = function(e) {};
    n.Defaults = {
        lazyLoad: !1
    },
    n.prototype.load = function(e) {}
    ,
    n.prototype.destroy = function() {}
    ,
    e.fn.owlCarousel.Constructor.Plugins.Lazy = n
}(window.Zepto || window.jQuery, window, document),
function(e) {
    var t = function(e) {};
    t.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    },
    t.prototype.update = function() {}
    ,
    t.prototype.destroy = function() {}
    ,
    e.fn.owlCarousel.Constructor.Plugins.AutoHeight = t
}(window.Zepto || window.jQuery, window, document),
function(e, t, n) {
    var o = function(e) {};
    o.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    },
    o.prototype.fetch = function(e, t) {}
    ,
    o.prototype.thumbnail = function(e, t) {}
    ,
    o.prototype.stop = function() {}
    ,
    o.prototype.play = function(e) {}
    ,
    o.prototype.isInFullScreen = function() {}
    ,
    o.prototype.destroy = function() {}
    ,
    e.fn.owlCarousel.Constructor.Plugins.Video = o
}(window.Zepto || window.jQuery, window, document),
function(e, t, n, o) {
    var i = function(e) {};
    i.Defaults = {
        animateOut: !1,
        animateIn: !1
    },
    i.prototype.swap = function() {}
    ,
    i.prototype.clear = function(e) {}
    ,
    i.prototype.destroy = function() {}
    ,
    e.fn.owlCarousel.Constructor.Plugins.Animate = i
}(window.Zepto || window.jQuery, window, document),
function(e, t, n) {
    var o = function(e) {};
    o.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    },
    o.prototype.autoplay = function() {}
    ,
    o.prototype.play = function() {}
    ,
    o.prototype.stop = function() {}
    ,
    o.prototype.pause = function() {}
    ,
    o.prototype.destroy = function() {}
    ,
    e.fn.owlCarousel.Constructor.Plugins.autoplay = o
}(window.Zepto || window.jQuery, window, document),
function(e) {
    "use strict";
    var t = function(e) {};
    t.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    },
    t.prototype.initialize = function() {}
    ,
    t.prototype.destroy = function() {}
    ,
    t.prototype.update = function() {}
    ,
    t.prototype.draw = function() {}
    ,
    t.prototype.onTrigger = function(e) {}
    ,
    t.prototype.current = function() {}
    ,
    t.prototype.getPosition = function(e) {}
    ,
    t.prototype.next = function(e) {}
    ,
    t.prototype.prev = function(e) {}
    ,
    t.prototype.to = function(e, t, n) {}
    ,
    e.fn.owlCarousel.Constructor.Plugins.Navigation = t
}(window.Zepto || window.jQuery, window, document),
function(e, t) {
    "use strict";
    var n = function(e) {};
    n.Defaults = {
        URLhashListener: !1
    },
    n.prototype.destroy = function() {}
    ,
    e.fn.owlCarousel.Constructor.Plugins.Hash = n
}(window.Zepto || window.jQuery, window, document),
function(e) {
    e.flexslider = function(e, t) {}
    ,
    e(window).blur((function(e) {}
    )).focus((function(e) {}
    )),
    e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    },
    e.fn.flexslider = function(e) {}
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}((function(e) {
    var t, n = function() {}, o = !!window.jQuery, i = (e(window),
    function() {
        e.magnificPopup.instance || ((t = new n).init(),
        e.magnificPopup.instance = t)
    }
    );
    n.prototype = {
        constructor: n,
        init: function() {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."),
            t.isIE8 = -1 !== n.indexOf("MSIE 8."),
            t.isLowIE = t.isIE7 || t.isIE8,
            t.isAndroid = /android/gi.test(n),
            t.isIOS = /iphone|ipad|ipod/gi.test(n),
            t.supportsTransition = function() {
                var e = document.createElement("p").style
                  , t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition)
                    return !0;
                for (; t.length; )
                    if (t.pop() + "Transition"in e)
                        return !0;
                return !1
            }(),
            t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            e(document),
            t.popupsCache = {}
        },
        open: function(e) {},
        close: function() {},
        _close: function() {},
        updateSize: function(e) {},
        updateItemHTML: function() {},
        appendContent: function(e, t) {},
        parseEl: function(e) {},
        addGroup: function(e, t) {
            var n = function(e) {};
            t || (t = {});
            var o = "click.magnificPopup";
            t.mainEl = e,
            t.items ? (t.isObj = !0,
            e.off(o).on(o, n)) : (t.isObj = !1,
            t.delegate ? e.off(o).on(o, t.delegate, n) : (t.items = e,
            e.off(o).on(o, n)))
        },
        _openClick: function(e, t, n) {},
        updateStatus: function(e, t) {},
        _checkIfClose: function(e) {},
        _addClassToMFP: function(e) {},
        _removeClassFromMFP: function(e) {},
        _hasScrollBar: function(e) {},
        _setFocus: function() {},
        _onFocusIn: function(e) {},
        _parseMarkup: function(e, t, n) {},
        _getScrollbarSize: function() {}
    },
    e.magnificPopup = {
        instance: null,
        proto: n.prototype,
        modules: [],
        open: function(e, t) {},
        close: function() {},
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options),
            e.extend(this.proto, n.proto),
            this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    },
    e.fn.magnificPopup = function(n) {
        i();
        var r = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var s, a = o ? r.data("magnificPopup") : r[0].magnificPopup, u = parseInt(arguments[1], 10) || 0;
                a.items ? s = a.items[u] : (s = r,
                a.delegate && (s = s.find(a.delegate)),
                s = s.eq(u)),
                t._openClick({
                    mfpEl: s
                }, r, a)
            } else
                t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else
            n = e.extend(!0, {}, n),
            o ? r.data("magnificPopup", n) : r[0].magnificPopup = n,
            t.addGroup(r, n);
        return r
    }
    ,
    e.magnificPopup.registerModule("inline", {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {},
            getInline: function(e, t) {}
        }
    }),
    e.magnificPopup.registerModule("ajax", {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {},
            getAjax: function(e) {}
        }
    }),
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {},
            resizeImage: function() {},
            _onImageHasSize: function(e) {},
            findImageSize: function(e) {},
            getImage: function(e, t) {}
        }
    }),
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {}
        },
        proto: {
            initZoom: function() {},
            _allowZoom: function() {},
            _getItemToZoom: function() {},
            _getOffset: function(e) {}
        }
    }),
    e.magnificPopup.registerModule("iframe", {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {},
            getIframe: function(e, t) {}
        }
    }),
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {},
            next: function() {},
            prev: function() {},
            goTo: function(e) {},
            preloadNearbyImages: function() {},
            _preloadItem: function(e) {}
        }
    }),
    e.magnificPopup.registerModule("retina", {
        options: {
            replaceSrc: function(e) {},
            ratio: 1
        },
        proto: {
            initRetina: function() {}
        }
    }),
    e.fn.mfpFastClick = function(e) {}
    ,
    e.fn.destroyMfpFastClick = function() {}
    ,
    i()
}
)),
function(e, t, n, o) {
    function i(t, n) {
        this.el = t,
        this.$el = e(this.el),
        this.options = e.extend({}, s, n),
        this._defaults = s,
        this._name = r,
        this.init()
    }
    var r = "nivoLightbox"
      , s = {
        effect: "fade",
        theme: "default",
        keyboardNav: !0,
        clickOverlayToClose: !0,
        onInit: function() {},
        beforeShowLightbox: function() {},
        afterShowLightbox: function(e) {},
        beforeHideLightbox: function() {},
        afterHideLightbox: function() {},
        onPrev: function(e) {},
        onNext: function(e) {},
        errorMessage: "The requested content cannot be loaded. Please try again later."
    };
    i.prototype = {
        init: function() {
            var t = this;
            e("html").hasClass("nivo-lightbox-notouch") || e("html").addClass("nivo-lightbox-notouch"),
            "ontouchstart"in n && e("html").removeClass("nivo-lightbox-notouch"),
            this.$el.on("click", (function(e) {
                t.showLightbox(e)
            }
            )),
            this.options.keyboardNav && e("body").off("keyup").on("keyup", (function(e) {}
            )),
            this.options.onInit.call(this)
        },
        showLightbox: function(t) {
            var n = this
              , o = this.$el;
            if (this.checkContent(o)) {
                t.preventDefault(),
                this.options.beforeShowLightbox.call(this);
                var i = this.constructLightbox();
                if (i) {
                    var r = i.find(".nivo-lightbox-content");
                    if (r) {
                        if (e("body").addClass("nivo-lightbox-body-effect-" + this.options.effect),
                        this.processContent(r, o),
                        this.$el.attr("data-lightbox-gallery")) {
                            var s = e('[data-lightbox-gallery="' + this.$el.attr("data-lightbox-gallery") + '"]');
                            e(".nivo-lightbox-nav").show(),
                            e(".nivo-lightbox-prev").off("click").on("click", (function(e) {}
                            )),
                            e(".nivo-lightbox-next").off("click").on("click", (function(t) {
                                t.preventDefault();
                                var i = s.index(o);
                                o = s.eq(i + 1),
                                e(o).length || (o = s.first()),
                                n.processContent(r, o),
                                n.options.onNext.call(this, [o])
                            }
                            ))
                        }
                        setTimeout((function() {
                            i.addClass("nivo-lightbox-open"),
                            n.options.afterShowLightbox.call(this, [i])
                        }
                        ), 1)
                    }
                }
            }
        },
        checkContent: function(e) {
            var t = e.attr("href")
              , n = t.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);
            return null !== t.match(/\.(jpeg|jpg|gif|png)$/i) || !!n || "ajax" == e.attr("data-lightbox-type") || "#" == t.substring(0, 1) && "inline" == e.attr("data-lightbox-type") || "iframe" == e.attr("data-lightbox-type")
        },
        processContent: function(n, o) {
            var i = o.attr("href")
              , r = i.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);
            if (n.html("").addClass("nivo-lightbox-loading"),
            this.isHidpi() && o.attr("data-lightbox-hidpi") && (i = o.attr("data-lightbox-hidpi")),
            null !== i.match(/\.(jpeg|jpg|gif|png)$/i)) {
                var s = e("<img>", {
                    src: i
                });
                s.one("load", (function() {
                    var o = e('<div class="nivo-lightbox-image" />');
                    o.append(s),
                    n.html(o).removeClass("nivo-lightbox-loading"),
                    o.css({
                        "line-height": e(".nivo-lightbox-content").height() + "px",
                        height: e(".nivo-lightbox-content").height() + "px"
                    }),
                    e(t).resize((function() {}
                    ))
                }
                )).each((function() {
                    this.complete && e(this).load()
                }
                )),
                s.error((function() {}
                ))
            } else if (r) {
                var a = ""
                  , u = "nivo-lightbox-video";
                if ("youtube" == r[1] && (a = "http://www.youtube.com/embed/" + r[4],
                u = "nivo-lightbox-youtube"),
                "youtu" == r[1] && (a = "http://www.youtube.com/embed/" + r[3],
                u = "nivo-lightbox-youtube"),
                "vimeo" == r[1] && (a = "http://player.vimeo.com/video/" + r[3],
                u = "nivo-lightbox-vimeo"),
                a) {
                    var c = e("<iframe>", {
                        src: a,
                        class: u,
                        frameborder: 0,
                        vspace: 0,
                        hspace: 0,
                        scrolling: "auto"
                    });
                    n.html(c),
                    c.load((function() {}
                    ))
                }
            } else if ("ajax" == o.attr("data-lightbox-type"))
                e.ajax({
                    url: i,
                    cache: !1,
                    success: function(e) {},
                    error: function() {}
                });
            else if ("#" == i.substring(0, 1) && "inline" == o.attr("data-lightbox-type"))
                if (e(i).length) {
                    var l = e('<div class="nivo-lightbox-inline" />');
                    l.append(e(i).clone().show()),
                    n.html(l).removeClass("nivo-lightbox-loading"),
                    l.outerHeight() < n.height() && l.css({
                        position: "relative",
                        top: "50%",
                        "margin-top": -l.outerHeight() / 2 + "px"
                    }),
                    e(t).resize((function() {}
                    ))
                } else {
                    var f = e('<div class="nivo-lightbox-error"><p>' + this.options.errorMessage + "</p></div>");
                    n.html(f).removeClass("nivo-lightbox-loading")
                }
            else {
                if ("iframe" != o.attr("data-lightbox-type"))
                    return !1;
                var p = e("<iframe>", {
                    src: i,
                    class: "nivo-lightbox-item",
                    frameborder: 0,
                    vspace: 0,
                    hspace: 0,
                    scrolling: "auto"
                });
                n.html(p),
                p.load((function() {}
                ))
            }
            if (o.attr("title")) {
                var d = e("<span>", {
                    class: "nivo-lightbox-title"
                });
                d.text(o.attr("title")),
                e(".nivo-lightbox-title-wrap").html(d)
            } else
                e(".nivo-lightbox-title-wrap").html("")
        },
        constructLightbox: function() {
            if (e(".nivo-lightbox-overlay").length)
                return e(".nivo-lightbox-overlay");
            var t = e("<div>", {
                class: "nivo-lightbox-overlay nivo-lightbox-theme-" + this.options.theme + " nivo-lightbox-effect-" + this.options.effect
            })
              , n = e("<div>", {
                class: "nivo-lightbox-wrap"
            })
              , o = e("<div>", {
                class: "nivo-lightbox-content"
            })
              , i = e('<a href="#" class="nivo-lightbox-nav nivo-lightbox-prev">Previous</a><a href="#" class="nivo-lightbox-nav nivo-lightbox-next">Next</a>')
              , r = e('<a href="#" class="nivo-lightbox-close" title="Close">Close</a>')
              , s = e("<div>", {
                class: "nivo-lightbox-title-wrap"
            });
            n.append(o),
            n.append(s),
            t.append(n),
            t.append(i),
            t.append(r),
            e("body").append(t);
            var a = this;
            return a.options.clickOverlayToClose && t.on("click", (function(t) {
                (t.target === this || e(t.target).hasClass("nivo-lightbox-content") || e(t.target).hasClass("nivo-lightbox-image")) && a.destructLightbox()
            }
            )),
            r.on("click", (function(e) {
                e.preventDefault(),
                a.destructLightbox()
            }
            )),
            t
        },
        destructLightbox: function() {
            this.options.beforeHideLightbox.call(this),
            e(".nivo-lightbox-overlay").removeClass("nivo-lightbox-open"),
            e(".nivo-lightbox-nav").hide(),
            e("body").removeClass("nivo-lightbox-body-effect-" + this.options.effect),
            e(".nivo-lightbox-prev").off("click"),
            e(".nivo-lightbox-next").off("click"),
            e(".nivo-lightbox-content").empty(),
            this.options.afterHideLightbox.call(this)
        },
        isHidpi: function() {}
    },
    e.fn[r] = function(t) {
        return this.each((function() {
            e.data(this, r) || e.data(this, r, new i(this,t))
        }
        ))
    }
}(jQuery, window, document),
function(e) {
    e.prettyPhoto = {
        version: "3.1.6"
    },
    e.fn.prettyPhoto = function(e) {}
}(jQuery);
var pp_alreadyInitialized = !1;
$.fn.equalHeights = function(e) {}
,
$.fn.equalWidths = function(e) {}
,
Number.prototype.pxToEm = String.prototype.pxToEm = function(e) {}
,
function(e) {
    null == e.support && (e.support = {
        opacity: !e.browser.msie
    }),
    e.expr[":"].paused = function(e) {}
    ,
    e.fn.cycle = function(e, t) {}
    ,
    e.fn.cycle.resetState = function(e, t) {}
    ,
    e.fn.cycle.updateActivePagerLink = function(e, t, n) {}
    ,
    e.fn.cycle.next = function(e) {}
    ,
    e.fn.cycle.prev = function(e) {}
    ,
    e.fn.cycle.createPagerAnchor = function(e, t, n, o, i) {}
    ,
    e.fn.cycle.hopsFromLast = function(e, t) {}
    ,
    e.fn.cycle.commonReset = function(e, t, n, o, i, r) {}
    ,
    e.fn.cycle.custom = function(e, t, n, o, i, r) {}
    ,
    e.fn.cycle.transitions = {},
    e.fn.cycle.ver = function() {}
    ,
    e.fn.cycle.defaults = {
        activePagerClass: "activeSlide",
        after: null,
        allowPagerClickBubble: !1,
        animIn: null,
        animOut: null,
        autostop: 0,
        autostopCount: 0,
        backwards: !1,
        before: null,
        cleartype: !e.support.opacity,
        cleartypeNoBg: !1,
        containerResize: 1,
        continuous: 0,
        cssAfter: null,
        cssBefore: null,
        delay: 0,
        easeIn: null,
        easeOut: null,
        easing: null,
        end: null,
        fastOnEvent: 0,
        fit: 0,
        fx: "fade",
        fxFn: null,
        height: "auto",
        manualTrump: !0,
        next: null,
        nowrap: 0,
        onPagerEvent: null,
        onPrevNextEvent: null,
        pager: null,
        pagerAnchorBuilder: null,
        pagerEvent: "click.cycle",
        pause: 0,
        pauseOnPagerHover: 0,
        prev: null,
        prevNextEvent: "click.cycle",
        random: 0,
        randomizeEffects: 1,
        requeueOnImageNotLoaded: !0,
        requeueTimeout: 250,
        rev: 0,
        shuffle: null,
        slideExpr: null,
        slideResize: 1,
        speed: 1e3,
        speedIn: null,
        speedOut: null,
        startingSlide: 0,
        sync: 1,
        timeout: 4e3,
        timeoutFn: null,
        updateActivePagerLink: null
    }
}(jQuery),
function(e) {
    e.fn.cycle.transitions.none = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.fadeout = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.scrollUp = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.scrollDown = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.scrollLeft = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.scrollRight = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.scrollHorz = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.scrollVert = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.slideX = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.slideY = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.shuffle = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.turnUp = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.turnDown = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.turnLeft = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.turnRight = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.zoom = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.fadeZoom = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.blindX = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.blindY = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.blindZ = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.growX = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.growY = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.curtainX = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.curtainY = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.cover = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.uncover = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.toss = function(e, t, n) {}
    ,
    e.fn.cycle.transitions.wipe = function(e, t, n) {}
}(jQuery),
function(e) {
    e.fn.maximage = function(e, t) {}
    ,
    e.fn.maximage.defaults = {
        debug: !1,
        cssBackgroundSize: !0,
        cssTransitions: !0,
        verticalCenter: !0,
        horizontalCenter: !0,
        scaleInterval: 20,
        backgroundSize: "cover",
        fillElement: "window",
        overrideMSIEStop: !1,
        onFirstImageLoaded: function() {},
        onImagesLoaded: function() {}
    }
}(jQuery),
jQuery.fn.bxSlider = function(e) {}
,
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, (function() {
    "use strict";
    function e() {}
    function t(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function n(e, n) {
        for (var o in n)
            t(n, o) && (e[o] = n[o]);
        return t(n, "toString") && (e.toString = n.toString),
        t(n, "valueOf") && (e.valueOf = n.valueOf),
        e
    }
    function o(e) {
        return void 0 === e
    }
    function i() {}
    function r(e, t) {
        var n;
        return e && (n = o(t) ? a(e) : s(e, t)) && (I = n),
        I._abbr
    }
    function s(e, t) {
        return null !== t ? (t.abbr = e,
        L[e] = L[e] || new i,
        L[e].set(t),
        r(e),
        L[e]) : (delete L[e],
        null)
    }
    function a(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
        !e)
            return I;
        if (!function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }(e)) {
            if (t = function(e) {
                var t = null;
                if (!L[e] && !o(module) && module && module.exports)
                    try {
                        t = I._abbr,
                        require("./locale/" + e),
                        r(t)
                    } catch (e) {}
                return L[e]
            }(e))
                return t;
            e = [e]
        }
    }
    function u(e, t) {
        var n = e.toLowerCase();
        D[n] = D[n + "s"] = D[t] = e
    }
    function c(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }
    function l(e, t) {}
    function f(e, t, n, o) {
        var i = o;
        "string" == typeof o && (i = function() {}
        ),
        e && (O[e] = i),
        t && (O[t[0]] = function() {}
        ),
        n && (O[n] = function() {}
        )
    }
    function p(e, t, n) {
        W[e] = c(t) ? t : function(e) {}
    }
    function d(e, t) {
        var n, o = t;
        for ("string" == typeof e && (e = [e]),
        "number" == typeof t && (o = function(e, t) {}
        ),
        n = 0; n < e.length; n++)
            Y[e[n]] = o
    }
    function h(e, t) {
        d(e, (function(e, t, n, o) {}
        ))
    }
    function m(e) {}
    function g(e, t) {
        return n((function() {}
        ), t)
    }
    function y(e) {}
    function v() {}
    function b(e, t) {}
    function w(e) {}
    function x() {}
    function C(e, t) {
        f(0, [e, e.length], 0, t)
    }
    function T(e, t) {
        f(e, 0, 0, (function() {}
        ))
    }
    function E(e, t) {}
    function S(e, t) {}
    function k(e) {}
    function A() {}
    e.momentProperties = [];
    var I, L = {}, D = {}, O = {}, F = /\d\d?/, P = /\d\d\d\d?/, N = /\d\d\d\d\d\d?/, R = /\d{1,3}/, j = /\d{1,4}/, M = /[+-]?\d{1,6}/, B = /\d+/, q = /[+-]?\d+/, _ = /Z|[+-]\d\d(?::?\d\d)?/gi, z = /[0-9]*(a[mn]\s?)?['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\-]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, W = {}, Y = {};
    f("M", ["MM", 2], "Mo", (function() {}
    )),
    f("MMM", 0, 0, (function(e) {}
    )),
    f("MMMM", 0, 0, (function(e) {}
    )),
    u("month", "M"),
    p("M", F),
    p("MM", F),
    p("MMM", z),
    p("MMMM", z),
    d(["M", "MM"], (function(e, t) {}
    )),
    d(["MMM", "MMMM"], (function(e, t, n, o) {}
    ));
    var H = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      , U = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sept_Oct_Nov_Dec".split("_");
    e.suppressDeprecationWarnings = !1,
    e.createFromInputFallback = g(0, (function(e) {}
    )),
    f(0, ["YY", 2], 0, (function() {}
    )),
    f(0, ["YYYY", 4], 0, "year"),
    f(0, ["YYYYY", 5], 0, "year"),
    f(0, ["YYYYYY", 6, !0], 0, "year"),
    u("year", "y"),
    p("Y", q),
    p("YY", F),
    p("YYYY", j),
    p("YYYYY", M),
    p("YYYYYY", M),
    d(["YYYYY", "YYYYYY"], 0),
    d("YYYY", (function(e, t) {}
    )),
    d("YY", (function(e, t) {}
    )),
    e.parseTwoDigitYear = function(e) {}
    ;
    var Q = function(e) {};
    e.ISO_8601 = function() {}
    ;
    var G = g(0, (function() {}
    ))
      , V = g(0, (function() {}
    ))
      , $ = Date.now || function() {}
    ;
    p("Z", _),
    p("ZZ", _),
    d(["Z", "ZZ"], (function(e, t, n) {}
    )),
    e.updateOffset = function() {}
    ,
    b.fn = y.prototype,
    e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var K = g(0, (function(e) {}
    ));
    f(0, ["gg", 2], 0, (function() {}
    )),
    f(0, ["GG", 2], 0, (function() {}
    )),
    C("gggg", "weekYear"),
    C("ggggg", "weekYear"),
    C("GGGG", "isoWeekYear"),
    C("GGGGG", "isoWeekYear"),
    u("weekYear", "gg"),
    u("isoWeekYear", "GG"),
    p("G", q),
    p("g", q),
    p("GG", F),
    p("gg", F),
    p("GGGG", j),
    p("gggg", j),
    p("GGGGG", M),
    p("ggggg", M),
    h(["gggg", "ggggg", "GGGG", "GGGGG"]),
    h(["gg", "GG"]),
    f("Q", 0, "Qo", "quarter"),
    u("quarter", "Q"),
    p("Q", /\d/),
    d("Q", (function(e, t) {}
    )),
    f("w", ["ww", 2], "wo", "week"),
    f("W", ["WW", 2], "Wo", "isoWeek"),
    u("week", "w"),
    u("isoWeek", "W"),
    p("w", F),
    p("ww", F),
    p("W", F),
    p("WW", F),
    h(["w", "ww", "W", "WW"]),
    f("D", ["DD", 2], "Do", "date"),
    u("date", "D"),
    p("D", F),
    p("DD", F),
    p("Do", (function(e, t) {}
    )),
    d(["D", "DD"], 2),
    d("Do", (function(e, t) {}
    ));
    var Z = function(e) {};
    f("d", 0, "do", "day"),
    f("dd", 0, 0, (function(e) {}
    )),
    f("ddd", 0, 0, (function(e) {}
    )),
    f("dddd", 0, 0, (function(e) {}
    )),
    f("e", 0, 0, "weekday"),
    f("E", 0, 0, "isoWeekday"),
    u("day", "d"),
    u("weekday", "e"),
    u("isoWeekday", "E"),
    p("d", F),
    p("e", F),
    p("E", F),
    p("dd", z),
    p("ddd", z),
    p("dddd", z),
    h(["dd", "ddd", "dddd"]),
    h(["d", "e", "E"]);
    var X, J = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), ee = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), te = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    for (f("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    u("dayOfYear", "DDD"),
    p("DDD", R),
    p("DDDD", /\d{3}/),
    d(["DDD", "DDDD"], (function(e, t, n) {}
    )),
    f("H", ["HH", 2], 0, "hour"),
    f("h", ["hh", 2], 0, (function() {}
    )),
    f("hmm", 0, 0, (function() {}
    )),
    f("hmmss", 0, 0, (function() {}
    )),
    f("Hmm", 0, 0, (function() {}
    )),
    f("Hmmss", 0, 0, (function() {}
    )),
    T("a"),
    T("A"),
    u("hour", "h"),
    p("a", E),
    p("A", E),
    p("H", F),
    p("h", F),
    p("HH", F),
    p("hh", F),
    p("hmm", P),
    p("hmmss", N),
    p("Hmm", P),
    p("Hmmss", N),
    d(["H", "HH"], 3),
    d(["a", "A"], (function(e, t, n) {}
    )),
    d(["h", "hh"], (function(e, t, n) {}
    )),
    d("hmm", (function(e, t, n) {}
    )),
    d("hmmss", (function(e, t, n) {}
    )),
    d("Hmm", (function(e, t, n) {}
    )),
    d("Hmmss", (function(e, t, n) {}
    )),
    f("m", ["mm", 2], 0, "minute"),
    u("minute", "m"),
    p("m", F),
    p("mm", F),
    d(["m", "mm"], 4),
    f("s", ["ss", 2], 0, "second"),
    u("second", "s"),
    p("s", F),
    p("ss", F),
    d(["s", "ss"], 5),
    f("S", 0, 0, (function() {}
    )),
    f(0, ["SS", 2], 0, (function() {}
    )),
    f(0, ["SSS", 3], 0, "millisecond"),
    f(0, ["SSSS", 4], 0, (function() {}
    )),
    f(0, ["SSSSS", 5], 0, (function() {}
    )),
    f(0, ["SSSSSS", 6], 0, (function() {}
    )),
    f(0, ["SSSSSSS", 7], 0, (function() {}
    )),
    f(0, ["SSSSSSSS", 8], 0, (function() {}
    )),
    f(0, ["SSSSSSSSS", 9], 0, (function() {}
    )),
    u("millisecond", "ms"),
    p("S", R),
    p("SS", R),
    p("SSS", R),
    X = "SSSS"; X.length <= 9; X += "S")
        p(X, B);
    for (X = "S"; X.length <= 9; X += "S")
        d(X, S);
    f("z", 0, 0, "zoneAbbr"),
    f("zz", 0, 0, "zoneName");
    var ne = function(e) {}
    .prototype;
    ne.add = void 0,
    ne.calendar = function(e, t) {}
    ,
    ne.clone = function() {}
    ,
    ne.diff = function(e, t, n) {}
    ,
    ne.endOf = function(e) {}
    ,
    ne.format = function(e) {}
    ,
    ne.from = function(e, t) {}
    ,
    ne.fromNow = function(e) {}
    ,
    ne.to = function(e, t) {}
    ,
    ne.toNow = function(e) {}
    ,
    ne.get = l,
    ne.invalidAt = function() {}
    ,
    ne.isAfter = function(e, t) {}
    ,
    ne.isBefore = function(e, t) {}
    ,
    ne.isBetween = function(e, t, n) {}
    ,
    ne.isSame = function(e, t) {}
    ,
    ne.isSameOrAfter = function(e, t) {}
    ,
    ne.isSameOrBefore = function(e, t) {}
    ,
    ne.isValid = function() {}
    ,
    ne.lang = K,
    ne.locale = w,
    ne.localeData = x,
    ne.max = V,
    ne.min = G,
    ne.parsingFlags = function() {}
    ,
    ne.set = l,
    ne.startOf = function(e) {}
    ,
    ne.subtract = void 0,
    ne.toArray = function() {}
    ,
    ne.toObject = function() {}
    ,
    ne.toDate = function() {}
    ,
    ne.toISOString = function() {}
    ,
    ne.toJSON = function() {}
    ,
    ne.toString = function() {}
    ,
    ne.unix = function() {}
    ,
    ne.valueOf = function() {}
    ,
    ne.creationData = function() {}
    ,
    ne.year = Q,
    ne.isLeapYear = function() {}
    ,
    ne.weekYear = function(e) {}
    ,
    ne.isoWeekYear = function(e) {}
    ,
    ne.quarter = ne.quarters = function(e) {}
    ,
    ne.month = m,
    ne.daysInMonth = function() {}
    ,
    ne.week = ne.weeks = function(e) {}
    ,
    ne.isoWeek = ne.isoWeeks = function(e) {}
    ,
    ne.weeksInYear = function() {}
    ,
    ne.isoWeeksInYear = function() {}
    ,
    ne.date = Z,
    ne.day = ne.days = function(e) {}
    ,
    ne.weekday = function(e) {}
    ,
    ne.isoWeekday = function(e) {}
    ,
    ne.dayOfYear = function(e) {}
    ,
    ne.hour = ne.hours = function(e) {}
    ,
    ne.minute = ne.minutes = function(e) {}
    ,
    ne.second = ne.seconds = function(e) {}
    ,
    ne.millisecond = ne.milliseconds = function(e) {}
    ,
    ne.utcOffset = function(e, t) {}
    ,
    ne.utc = function(e) {}
    ,
    ne.local = function(e) {}
    ,
    ne.parseZone = function() {}
    ,
    ne.hasAlignedHourOffset = function(e) {}
    ,
    ne.isDST = function() {}
    ,
    ne.isDSTShifted = function() {}
    ,
    ne.isLocal = function() {}
    ,
    ne.isUtcOffset = function() {}
    ,
    ne.isUtc = v,
    ne.isUTC = v,
    ne.zoneAbbr = function() {}
    ,
    ne.zoneName = function() {}
    ,
    ne.dates = g(0, Z),
    ne.months = g(0, m),
    ne.years = g(0, Q),
    ne.zone = g(0, (function(e, t) {}
    ));
    var oe = ne
      , ie = i.prototype;
    ie._calendar = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    },
    ie.calendar = function(e, t, n) {}
    ,
    ie._longDateFormat = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    },
    ie.longDateFormat = function(e) {}
    ,
    ie._invalidDate = "Invalid date",
    ie.invalidDate = function() {}
    ,
    ie._ordinal = "%d",
    ie.ordinal = function(e) {}
    ,
    ie._ordinalParse = /\d{1,2}/,
    ie.preparse = k,
    ie.postformat = k,
    ie._relativeTime = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    },
    ie.relativeTime = function(e, t, n, o) {}
    ,
    ie.pastFuture = function(e, t) {}
    ,
    ie.set = function(e) {
        var t, n;
        for (n in e)
            c(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }
    ,
    ie.months = function(e, t) {}
    ,
    ie._months = H,
    ie.monthsShort = function(e, t) {}
    ,
    ie._monthsShort = U,
    ie.monthsParse = function(e, t, n) {}
    ,
    ie.week = function(e) {}
    ,
    ie._week = {
        dow: 0,
        doy: 6
    },
    ie.firstDayOfYear = function() {}
    ,
    ie.firstDayOfWeek = function() {}
    ,
    ie.weekdays = function(e, t) {}
    ,
    ie._weekdays = J,
    ie.weekdaysMin = function(e) {}
    ,
    ie._weekdaysMin = te,
    ie.weekdaysShort = function(e) {}
    ,
    ie._weekdaysShort = ee,
    ie.weekdaysParse = function(e, t, n) {}
    ,
    ie.isPM = function(e) {}
    ,
    ie._meridiemParse = /[ap]\.?m?\.?/i,
    ie.meridiem = function(e, t, n) {}
    ,
    r("en", {
        monthsParse: [/^jan/i, /^feb/i, /^mar/i, /^apr/i, /^may/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^oct/i, /^nov/i, /^dec/i],
        longMonthsParse: [/^january$/i, /^february$/i, /^march$/i, /^april$/i, /^may$/i, /^june$/i, /^july$/i, /^august$/i, /^september$/i, /^october$/i, /^november$/i, /^december$/i],
        shortMonthsParse: [/^jan$/i, /^feb$/i, /^mar$/i, /^apr$/i, /^may$/i, /^jun$/i, /^jul$/i, /^aug/i, /^sept?$/i, /^oct$/i, /^nov$/i, /^dec$/i],
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {}
    }),
    e.lang = g(0, r),
    e.langData = g(0, a),
    Math.abs;
    var re = (Math.round,
    Math.abs,
    y.prototype);
    return re.abs = function() {}
    ,
    re.add = function(e, t) {}
    ,
    re.subtract = function(e, t) {}
    ,
    re.as = function(e) {}
    ,
    re.asMilliseconds = function() {}
    ,
    re.asSeconds = function() {}
    ,
    re.asMinutes = function() {}
    ,
    re.asHours = function() {}
    ,
    re.asDays = function() {}
    ,
    re.asWeeks = function() {}
    ,
    re.asMonths = function() {}
    ,
    re.asYears = function() {}
    ,
    re.valueOf = function() {}
    ,
    re._bubble = function() {}
    ,
    re.get = function(e) {}
    ,
    re.milliseconds = function() {}
    ,
    re.seconds = function() {}
    ,
    re.minutes = function() {}
    ,
    re.hours = function() {}
    ,
    re.days = function() {}
    ,
    re.weeks = function() {}
    ,
    re.months = function() {}
    ,
    re.years = function() {}
    ,
    re.humanize = function(e) {}
    ,
    re.toISOString = A,
    re.toString = A,
    re.toJSON = A,
    re.locale = w,
    re.localeData = x,
    re.toIsoString = g(0, A),
    re.lang = K,
    f("X", 0, 0, "unix"),
    f("x", 0, 0, "valueOf"),
    p("x", q),
    p("X", /[+-]?\d+(\.\d{1,3})?/),
    d("X", (function(e, t, n) {}
    )),
    d("x", (function(e, t, n) {}
    )),
    e.version = "2.11.0",
    e.fn = oe,
    e.min = function() {}
    ,
    e.max = function() {}
    ,
    e.now = $,
    e.utc = function(e, t, n, o) {}
    ,
    e.unix = function(e) {}
    ,
    e.months = function(e, t) {}
    ,
    e.isDate = function(e) {}
    ,
    e.locale = r,
    e.invalid = function(e) {}
    ,
    e.duration = b,
    e.isMoment = function(e) {}
    ,
    e.weekdays = function(e, t) {}
    ,
    e.parseZone = function() {}
    ,
    e.localeData = a,
    e.isDuration = function(e) {}
    ,
    e.monthsShort = function(e, t) {}
    ,
    e.weekdaysMin = function(e, t) {}
    ,
    e.defineLocale = s,
    e.weekdaysShort = function(e, t) {}
    ,
    e.normalizeUnits = function(e) {}
    ,
    e.relativeTimeThreshold = function(e, t) {}
    ,
    e.prototype = oe,
    e
}
)),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}((function(e) {
    "use strict";
    var t = [];
    t.push(/^[0-9]*$/.source),
    t.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    t.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    t = new RegExp(t.join("|")),
    e.extend(function(e, t, n) {}
    .prototype, {
        start: function() {},
        stop: function() {},
        toggle: function() {},
        pause: function() {},
        resume: function() {},
        remove: function() {},
        setFinalDate: function(e) {},
        update: function() {},
        dispatchEvent: function(e) {}
    }),
    e.fn.countdown = function() {}
}
));
var FlipClock, Base = function() {};
Base.extend = function(e, t) {
    "use strict";
    var n = Base.prototype.extend;
    Base._prototyping = !0;
    var o = new this;
    n.call(o, e),
    o.base = function() {}
    ,
    delete Base._prototyping;
    var i = o.constructor
      , r = o.constructor = function() {
        if (!Base._prototyping)
            if (this._constructing || this.constructor == r)
                this._constructing = !0,
                i.apply(this, arguments),
                delete this._constructing;
            else if (null !== arguments[0])
                return (arguments[0].extend || n).call(arguments[0], o)
    }
    ;
    return r.ancestor = this,
    r.extend = this.extend,
    r.forEach = this.forEach,
    r.implement = this.implement,
    r.prototype = o,
    r.toString = this.toString,
    r.valueOf = function(e) {
        return "object" == e ? r : i.valueOf()
    }
    ,
    n.call(r, t),
    "function" == typeof r.init && r.init(),
    r
}
,
Base.prototype = {
    extend: function(e, t) {
        if (arguments.length > 1) {
            var n = this[e];
            !n || "function" != typeof t || n.valueOf && n.valueOf() == t.valueOf() || !/\bbase\b/.test(t) || (t.valueOf(),
            (t = function() {}
            ).valueOf = function(e) {}
            ,
            t.toString = Base.toString),
            this[e] = t
        } else if (e) {
            var o = Base.prototype.extend;
            Base._prototyping || "function" == typeof this || (o = this.extend || o);
            for (var i = {
                toSource: null
            }, r = ["constructor", "toString", "valueOf"], s = Base._prototyping ? 0 : 1; a = r[s++]; )
                e[a] != i[a] && o.call(this, a, e[a]);
            for (var a in e)
                i[a] || o.call(this, a, e[a])
        }
        return this
    }
},
Base = Base.extend({
    constructor: function() {}
}, {
    ancestor: Object,
    version: "1.1",
    forEach: function(e, t, n) {},
    implement: function() {},
    toString: function() {}
}),
function(e) {
    "use strict";
    (FlipClock = function(e, t, n) {}
    ).Lang = {},
    FlipClock.Base = Base.extend({
        buildDate: "2014-12-12",
        version: "0.7.7",
        constructor: function(e, t) {},
        callback: function(e) {},
        log: function(e) {},
        getOption: function(e) {},
        getOptions: function() {},
        setOption: function(e, t) {},
        setOptions: function(e) {}
    })
}(jQuery),
function(e) {
    "use strict";
    FlipClock.Face = FlipClock.Base.extend({
        autoStart: !0,
        dividers: [],
        factory: !1,
        lists: [],
        constructor: function(e, t) {},
        build: function() {},
        createDivider: function(e, t, n) {},
        createList: function(e, t) {},
        reset: function() {},
        appendDigitToClock: function(e) {},
        addDigit: function(e) {},
        start: function() {},
        stop: function() {},
        autoIncrement: function() {},
        increment: function() {},
        decrement: function() {},
        flip: function(e, t) {}
    })
}(jQuery),
function(e) {
    "use strict";
    FlipClock.Factory = FlipClock.Base.extend({
        animationRate: 1e3,
        autoStart: !0,
        callbacks: {
            destroy: !1,
            create: !1,
            init: !1,
            interval: !1,
            start: !1,
            stop: !1,
            reset: !1
        },
        classes: {
            active: "flip-clock-active",
            before: "flip-clock-before",
            divider: "flip-clock-divider",
            dot: "flip-clock-dot",
            label: "flip-clock-label",
            flip: "flip",
            play: "play",
            wrapper: "flip-clock-wrapper"
        },
        clockFace: "HourlyCounter",
        countdown: !1,
        defaultClockFace: "HourlyCounter",
        defaultLanguage: "english",
        $el: !1,
        face: !0,
        lang: !1,
        language: "english",
        minimumDigits: 0,
        original: !1,
        running: !1,
        time: !1,
        timer: !1,
        $wrapper: !1,
        constructor: function(e, t, n) {},
        loadClockFace: function(e, t) {},
        loadLanguage: function(e) {},
        localize: function(e, t) {},
        start: function(e) {},
        stop: function(e) {},
        reset: function(e) {},
        setTime: function(e) {},
        getTime: function(e) {},
        setCountdown: function(e) {},
        flip: function(e) {}
    })
}(jQuery),
function(e) {
    "use strict";
    FlipClock.List = FlipClock.Base.extend({
        digit: 0,
        classes: {
            active: "flip-clock-active",
            before: "flip-clock-before",
            flip: "flip"
        },
        factory: !1,
        $el: !1,
        $obj: !1,
        items: [],
        lastDigit: 0,
        constructor: function(e, t, n) {},
        select: function(e) {},
        play: function() {},
        stop: function() {},
        createListItem: function(e, t) {},
        appendListItem: function(e, t) {},
        createList: function() {},
        getNextDigit: function() {},
        getPrevDigit: function() {}
    })
}(jQuery),
function(e) {
    "use strict";
    String.prototype.ucfirst = function() {}
    ,
    e.fn.FlipClock = function(e, t) {}
    ,
    e.fn.flipClock = function(e, t) {}
}(jQuery),
function(e) {
    "use strict";
    FlipClock.Time = FlipClock.Base.extend({
        time: 0,
        factory: !1,
        minimumDigits: 0,
        constructor: function(e, t, n) {},
        convertDigitsToArray: function(e) {},
        digit: function(e) {},
        digitize: function(e) {},
        getDateObject: function() {},
        getDayCounter: function(e) {},
        getDays: function(e) {},
        getHourCounter: function() {},
        getHourly: function() {},
        getHours: function(e) {},
        getMilitaryTime: function(e, t) {},
        getMinutes: function(e) {},
        getMinuteCounter: function() {},
        getTimeSeconds: function(e) {},
        getTime: function(e, t) {},
        getSeconds: function(e) {},
        getWeeks: function(e) {},
        removeLeadingZeros: function(e, t) {},
        addSeconds: function(e) {},
        addSecond: function() {},
        subSeconds: function(e) {},
        subSecond: function() {},
        toString: function() {}
    })
}(jQuery),
function(e) {
    "use strict";
    FlipClock.Timer = FlipClock.Base.extend({
        callbacks: {
            destroy: !1,
            create: !1,
            init: !1,
            interval: !1,
            start: !1,
            stop: !1,
            reset: !1
        },
        count: 0,
        factory: !1,
        interval: 1e3,
        animationRate: 1e3,
        constructor: function(e, t) {},
        getElapsed: function() {},
        getElapsedTime: function() {},
        reset: function(e) {},
        start: function(e) {},
        stop: function(e) {},
        _clearInterval: function() {},
        _createTimer: function(e) {},
        _destroyTimer: function(e) {},
        _interval: function(e) {},
        _setInterval: function(e) {}
    })
}(jQuery),
jQuery,
FlipClock.TwentyFourHourClockFace = FlipClock.Face.extend({
    constructor: function(e, t) {},
    build: function(e) {},
    flip: function(e, t) {}
}),
jQuery,
FlipClock.CounterFace = FlipClock.Face.extend({
    shouldAutoIncrement: !1,
    constructor: function(e, t) {},
    build: function() {},
    flip: function(e, t) {},
    reset: function() {}
}),
jQuery,
FlipClock.DailyCounterFace = FlipClock.Face.extend({
    showSeconds: !0,
    constructor: function(e, t) {},
    build: function(e) {},
    flip: function(e, t) {}
}),
jQuery,
FlipClock.HourlyCounterFace = FlipClock.Face.extend({
    constructor: function(e, t) {},
    build: function(e, t) {},
    flip: function(e, t) {},
    appendDigitToClock: function(e) {}
}),
jQuery,
FlipClock.MinuteCounterFace = FlipClock.HourlyCounterFace.extend({
    clearExcessDigits: !1,
    constructor: function(e, t) {},
    build: function() {},
    flip: function(e, t) {}
}),
jQuery,
FlipClock.TwelveHourClockFace = FlipClock.TwentyFourHourClockFace.extend({
    meridium: !1,
    meridiumText: "AM",
    build: function() {},
    flip: function(e, t) {},
    getMeridium: function() {},
    isPM: function() {},
    isAM: function() {}
}),
jQuery,
FlipClock.Lang.Arabic = {
    years: "سنوات",
    months: "شهور",
    days: "أيام",
    hours: "ساعات",
    minutes: "دقائق",
    seconds: "ثواني"
},
FlipClock.Lang.ar = FlipClock.Lang.Arabic,
FlipClock.Lang["ar-ar"] = FlipClock.Lang.Arabic,
FlipClock.Lang.arabic = FlipClock.Lang.Arabic,
jQuery,
FlipClock.Lang.Danish = {
    years: "År",
    months: "Måneder",
    days: "Dage",
    hours: "Timer",
    minutes: "Minutter",
    seconds: "Sekunder"
},
FlipClock.Lang.da = FlipClock.Lang.Danish,
FlipClock.Lang["da-dk"] = FlipClock.Lang.Danish,
FlipClock.Lang.danish = FlipClock.Lang.Danish,
jQuery,
FlipClock.Lang.German = {
    years: "Jahre",
    months: "Monate",
    days: "Tage",
    hours: "Stunden",
    minutes: "Minuten",
    seconds: "Sekunden"
},
FlipClock.Lang.de = FlipClock.Lang.German,
FlipClock.Lang["de-de"] = FlipClock.Lang.German,
FlipClock.Lang.german = FlipClock.Lang.German,
jQuery,
FlipClock.Lang.English = {
    years: "Years",
    months: "Months",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds"
},
FlipClock.Lang.en = FlipClock.Lang.English,
FlipClock.Lang["en-us"] = FlipClock.Lang.English,
FlipClock.Lang.english = FlipClock.Lang.English,
jQuery,
FlipClock.Lang.Spanish = {
    years: "Años",
    months: "Meses",
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos"
},
FlipClock.Lang.es = FlipClock.Lang.Spanish,
FlipClock.Lang["es-es"] = FlipClock.Lang.Spanish,
FlipClock.Lang.spanish = FlipClock.Lang.Spanish,
jQuery,
FlipClock.Lang.Finnish = {
    years: "Vuotta",
    months: "Kuukautta",
    days: "Päivää",
    hours: "Tuntia",
    minutes: "Minuuttia",
    seconds: "Sekuntia"
},
FlipClock.Lang.fi = FlipClock.Lang.Finnish,
FlipClock.Lang["fi-fi"] = FlipClock.Lang.Finnish,
FlipClock.Lang.finnish = FlipClock.Lang.Finnish,
jQuery,
FlipClock.Lang.French = {
    years: "Ans",
    months: "Mois",
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes"
},
FlipClock.Lang.fr = FlipClock.Lang.French,
FlipClock.Lang["fr-ca"] = FlipClock.Lang.French,
FlipClock.Lang.french = FlipClock.Lang.French,
jQuery,
FlipClock.Lang.Italian = {
    years: "Anni",
    months: "Mesi",
    days: "Giorni",
    hours: "Ore",
    minutes: "Minuti",
    seconds: "Secondi"
},
FlipClock.Lang.it = FlipClock.Lang.Italian,
FlipClock.Lang["it-it"] = FlipClock.Lang.Italian,
FlipClock.Lang.italian = FlipClock.Lang.Italian,
jQuery,
FlipClock.Lang.Latvian = {
    years: "Gadi",
    months: "Mēneši",
    days: "Dienas",
    hours: "Stundas",
    minutes: "Minūtes",
    seconds: "Sekundes"
},
FlipClock.Lang.lv = FlipClock.Lang.Latvian,
FlipClock.Lang["lv-lv"] = FlipClock.Lang.Latvian,
FlipClock.Lang.latvian = FlipClock.Lang.Latvian,
jQuery,
FlipClock.Lang.Dutch = {
    years: "Jaren",
    months: "Maanden",
    days: "Dagen",
    hours: "Uren",
    minutes: "Minuten",
    seconds: "Seconden"
},
FlipClock.Lang.nl = FlipClock.Lang.Dutch,
FlipClock.Lang["nl-be"] = FlipClock.Lang.Dutch,
FlipClock.Lang.dutch = FlipClock.Lang.Dutch,
jQuery,
FlipClock.Lang.Norwegian = {
    years: "År",
    months: "Måneder",
    days: "Dager",
    hours: "Timer",
    minutes: "Minutter",
    seconds: "Sekunder"
},
FlipClock.Lang.no = FlipClock.Lang.Norwegian,
FlipClock.Lang.nb = FlipClock.Lang.Norwegian,
FlipClock.Lang["no-nb"] = FlipClock.Lang.Norwegian,
FlipClock.Lang.norwegian = FlipClock.Lang.Norwegian,
jQuery,
FlipClock.Lang.Portuguese = {
    years: "Anos",
    months: "Meses",
    days: "Dias",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos"
},
FlipClock.Lang.pt = FlipClock.Lang.Portuguese,
FlipClock.Lang["pt-br"] = FlipClock.Lang.Portuguese,
FlipClock.Lang.portuguese = FlipClock.Lang.Portuguese,
jQuery,
FlipClock.Lang.Russian = {
    years: "лет",
    months: "месяцев",
    days: "дней",
    hours: "часов",
    minutes: "минут",
    seconds: "секунд"
},
FlipClock.Lang.ru = FlipClock.Lang.Russian,
FlipClock.Lang["ru-ru"] = FlipClock.Lang.Russian,
FlipClock.Lang.russian = FlipClock.Lang.Russian,
jQuery,
FlipClock.Lang.Swedish = {
    years: "År",
    months: "Månader",
    days: "Dagar",
    hours: "Timmar",
    minutes: "Minuter",
    seconds: "Sekunder"
},
FlipClock.Lang.sv = FlipClock.Lang.Swedish,
FlipClock.Lang["sv-se"] = FlipClock.Lang.Swedish,
FlipClock.Lang.swedish = FlipClock.Lang.Swedish,
jQuery,
FlipClock.Lang.Chinese = {
    years: "年",
    months: "月",
    days: "日",
    hours: "时",
    minutes: "分",
    seconds: "秒"
},
FlipClock.Lang.zh = FlipClock.Lang.Chinese,
FlipClock.Lang["zh-cn"] = FlipClock.Lang.Chinese,
FlipClock.Lang.chinese = FlipClock.Lang.Chinese,
function() {
    var e;
    e = function() {
        function e(e, t) {}
        return e.prototype.hasNext = function() {}
        ,
        e.prototype.next = function() {}
        ,
        e.prototype.run = function(e) {}
        ,
        e.prototype.parse = function(e) {}
        ,
        e.prototype._buildUrl = function() {}
        ,
        e.prototype._genKey = function() {}
        ,
        e.prototype._makeTemplate = function(e, t) {}
        ,
        e.prototype._getObjectProperty = function(e, t) {}
        ,
        e.prototype._sortBy = function(e, t, n) {}
        ,
        e.prototype._filter = function(e, t) {}
        ,
        e
    }(),
    function(e, t) {
        "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Instafeed = t()
    }(this, (function() {
        return e
    }
    ))
}
.call(this),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}((function(e) {
    e.extend(e.fn, {
        validate: function(e) {},
        valid: function() {},
        rules: function(e, t) {}
    }),
    e.extend(e.expr[":"], {
        blank: function(e) {},
        filled: function(e) {},
        unchecked: function(e) {}
    }),
    e.validator = function(e, t) {}
    ,
    e.validator.format = function(t, n) {
        return 1 === arguments.length ? function() {}
        : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)),
        n.constructor !== Array && (n = [n]),
        e.each(n, (function(e, t) {}
        )),
        t)
    }
    ,
    e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {},
            onfocusout: function(e) {},
            onkeyup: function(e, t) {},
            onclick: function(e) {},
            highlight: function(e, t, n) {},
            unhighlight: function(e, t, n) {}
        },
        setDefaults: function(e) {},
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {},
            form: function() {},
            checkForm: function() {},
            element: function(e) {},
            showErrors: function(e) {},
            resetForm: function() {},
            numberOfInvalids: function() {},
            objectLength: function(e) {},
            hideErrors: function() {},
            hideThese: function(e) {},
            valid: function() {},
            size: function() {},
            focusInvalid: function() {},
            findLastActive: function() {},
            elements: function() {},
            clean: function(e) {},
            errors: function() {},
            reset: function() {},
            prepareForm: function() {},
            prepareElement: function(e) {},
            elementValue: function(e) {},
            check: function(e) {},
            customDataMessage: function(e, t) {},
            customMessage: function(e, t) {},
            findDefined: function() {},
            defaultMessage: function(e, t) {},
            formatAndAdd: function(e, t) {},
            addWrapper: function(e) {},
            defaultShowErrors: function() {},
            validElements: function() {},
            invalidElements: function() {},
            showLabel: function(e, t) {},
            errorsFor: function(e) {},
            idOrName: function(e) {},
            validationTargetFor: function(e) {},
            checkable: function(e) {},
            findByName: function(e) {},
            getLength: function(e, t) {},
            depend: function(e, t) {},
            dependTypes: {
                boolean: function(e) {},
                string: function(e, t) {},
                function: function(e, t) {}
            },
            optional: function(e) {},
            startRequest: function(e) {},
            stopRequest: function(e, t) {},
            previousValue: function(e) {},
            destroy: function() {}
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, t) {},
        classRules: function(e) {},
        normalizeAttributeRule: function(e, t, n, o) {},
        attributeRules: function(e) {},
        dataRules: function(e) {},
        staticRules: function(e) {},
        normalizeRules: function(e, t) {},
        normalizeRule: function(e) {},
        addMethod: function(e, t, n) {},
        methods: {
            required: function(e, t, n) {},
            email: function(e, t) {},
            url: function(e, t) {},
            date: function(e, t) {},
            dateISO: function(e, t) {},
            number: function(e, t) {},
            digits: function(e, t) {},
            creditcard: function(e, t) {},
            minlength: function(e, t, n) {},
            maxlength: function(e, t, n) {},
            rangelength: function(e, t, n) {},
            min: function(e, t, n) {},
            max: function(e, t, n) {},
            range: function(e, t, n) {},
            equalTo: function(e, t, n) {},
            remote: function(e, t, n) {}
        }
    });
    var t = {};
    e.ajaxPrefilter ? e.ajaxPrefilter((function(e, n, o) {
        var i = e.port;
        "abort" === e.mode && (t[i] && t[i].abort(),
        t[i] = o)
    }
    )) : (e.ajax,
    e.ajax = function(e) {}
    )
}
)),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}((function(e) {
    "use strict";
    var t = {};
    t.fileapi = void 0 !== e("<input type='file'/>").get(0).files,
    t.formdata = void 0 !== window.FormData,
    e.fn.prop,
    e.fn.attr2 = function() {}
    ,
    e.fn.ajaxSubmit = function(e) {}
    ,
    e.fn.ajaxForm = function(e) {}
    ,
    e.fn.ajaxFormUnbind = function() {}
    ,
    e.fn.formToArray = function(e, t) {}
    ,
    e.fn.formSerialize = function(e) {}
    ,
    e.fn.fieldSerialize = function(e) {}
    ,
    e.fn.fieldValue = function(e) {}
    ,
    e.fieldValue = function(e, t) {}
    ,
    e.fn.clearForm = function(e) {}
    ,
    e.fn.clearFields = e.fn.clearInputs = function(e) {}
    ,
    e.fn.resetForm = function() {}
    ,
    e.fn.enable = function(e) {}
    ,
    e.fn.selected = function(e) {}
    ,
    e.fn.ajaxSubmit.debug = !1
}
)),
self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {};
var Prism = function() {
    var e = self.Prism = {
        util: {
            encode: function(e) {},
            type: function(e) {
                return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
            },
            clone: function(t) {
                switch (e.util.type(t)) {
                case "Object":
                    var n = {};
                    for (var o in t)
                        t.hasOwnProperty(o) && (n[o] = e.util.clone(t[o]));
                    return n;
                case "Array":
                    return t.map((function(t) {
                        return e.util.clone(t)
                    }
                    ))
                }
                return t
            }
        },
        languages: {
            extend: function(t, n) {
                var o = e.util.clone(e.languages[t]);
                for (var i in n)
                    o[i] = n[i];
                return o
            },
            insertBefore: function(t, n, o, i) {
                var r = (i = i || e.languages)[t];
                if (2 == arguments.length) {
                    for (var s in o = arguments[1])
                        o.hasOwnProperty(s) && (r[s] = o[s]);
                    return r
                }
                var a = {};
                for (var u in r)
                    if (r.hasOwnProperty(u)) {
                        if (u == n)
                            for (var s in o)
                                o.hasOwnProperty(s) && (a[s] = o[s]);
                        a[u] = r[u]
                    }
                return e.languages.DFS(e.languages, (function(e, n) {
                    n === i[t] && e != t && (this[e] = a)
                }
                )),
                i[t] = a
            },
            DFS: function(t, n, o) {
                for (var i in t)
                    t.hasOwnProperty(i) && (n.call(t, i, t[i], o || i),
                    "Object" === e.util.type(t[i]) ? e.languages.DFS(t[i], n) : "Array" === e.util.type(t[i]) && e.languages.DFS(t[i], n, i))
            }
        },
        highlightAll: function(t, n) {
            for (var o, i = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'), r = 0; o = i[r++]; )
                e.highlightElement(o, !0 === t, n)
        },
        highlightElement: function(e, t, n) {},
        highlight: function(e, t, n) {},
        tokenize: function(e, t) {},
        hooks: {
            all: {},
            add: function(t, n) {
                var o = e.hooks.all;
                o[t] = o[t] || [],
                o[t].push(n)
            },
            run: function(e, t) {}
        }
    };
    if ((e.Token = function(e, t, n) {}
    ).stringify = function(e, t, n) {}
    ,
    !self.document)
        return self.addEventListener ? (self.addEventListener("message", (function(e) {}
        ), !1),
        self.Prism) : self.Prism;
    var t = document.getElementsByTagName("script");
    return (t = t[t.length - 1]) && (e.filename = t.src,
    document.addEventListener && !t.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", e.highlightAll)),
    self.Prism
}();
"undefined" != typeof module && module.exports && (module.exports = Prism),
Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/,
    prolog: /<\?.+?\?>/,
    doctype: /<!DOCTYPE.+?>/,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
        pattern: /<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,
        inside: {
            tag: {
                pattern: /^<\/?[\w:-]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[\w-]+?:/
                }
            },
            "attr-value": {
                pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
                inside: {
                    punctuation: /=|>|"/
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[\w:-]+/,
                inside: {
                    namespace: /^[\w-]+?:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
},
Prism.hooks.add("wrap", (function(e) {}
)),
Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//,
    atrule: {
        pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
        inside: {
            punctuation: /[;:]/
        }
    },
    url: /url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,
    selector: /[^\{\}\s][^\{\};]*(?=\s*\{)/,
    string: /("|')(\\\n|\\?.)*?\1/,
    property: /(\b|\B)[\w-]+(?=\s*:)/i,
    important: /\B!important\b/i,
    punctuation: /[\{\};:]/,
    function: /[-a-z0-9]+(?=\()/i
},
Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /<style[\w\W]*?>[\w\W]*?<\/style>/i,
        inside: {
            tag: {
                pattern: /<style[\w\W]*?>|<\/style>/i,
                inside: Prism.languages.markup.tag.inside
            },
            rest: Prism.languages.css
        },
        alias: "language-css"
    }
}),
Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|').*?\1/i,
        inside: {
            "attr-name": {
                pattern: /^\s*style/i,
                inside: Prism.languages.markup.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {
                pattern: /.+/i,
                inside: Prism.languages.css
            }
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)),
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0
    }],
    string: /("|')(\\\n|\\?.)*?\1/,
    "class-name": {
        pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /(\.|\\)/
        }
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(true|false)\b/,
    function: {
        pattern: /[a-z0-9_]+\(/i,
        inside: {
            punctuation: /\(/
        }
    },
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
    operator: /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,
    ignore: /&(lt|gt|amp);/i,
    punctuation: /[{}[\];(),.:]/
},
Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,
    function: /(?!\d)[a-z0-9_$]+(?=\()/i
}),
Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0
    }
}),
Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/i,
        inside: {
            tag: {
                pattern: /<script[\w\W]*?>|<\/script>/i,
                inside: Prism.languages.markup.tag.inside
            },
            rest: Prism.languages.javascript
        },
        alias: "language-javascript"
    }
}),
Prism.languages.aspnet = Prism.languages.extend("markup", {
    "page-directive tag": {
        pattern: /<%\s*@.*%>/i,
        inside: {
            "page-directive tag": /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master|MasterType|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
            rest: Prism.languages.markup.tag.inside
        }
    },
    "directive tag": {
        pattern: /<%.*%>/i,
        inside: {
            "directive tag": /<%\s*?[$=%#:]{0,2}|%>/i,
            rest: Prism.languages.csharp
        }
    }
}),
Prism.languages.insertBefore("inside", "punctuation", {
    "directive tag": Prism.languages.aspnet["directive tag"]
}, Prism.languages.aspnet.tag.inside["attr-value"]),
Prism.languages.insertBefore("aspnet", "comment", {
    "asp comment": /<%--[\w\W]*?--%>/
}),
Prism.languages.insertBefore("aspnet", Prism.languages.javascript ? "script" : "tag", {
    "asp script": {
        pattern: /<script(?=.*runat=['"]?server['"]?)[\w\W]*?>[\w\W]*?<\/script>/i,
        inside: {
            tag: {
                pattern: /<\/?script\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/i,
                inside: Prism.languages.aspnet.tag.inside
            },
            rest: Prism.languages.csharp || {}
        }
    }
}),
Prism.languages.aspnet.style && (Prism.languages.aspnet.style.inside.tag.pattern = /<\/?style\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/i,
Prism.languages.aspnet.style.inside.tag.inside = Prism.languages.aspnet.tag.inside),
Prism.languages.aspnet.script && (Prism.languages.aspnet.script.inside.tag.pattern = Prism.languages.aspnet["asp script"].inside.tag.pattern,
Prism.languages.aspnet.script.inside.tag.inside = Prism.languages.aspnet.tag.inside),
Prism.languages.bash = Prism.languages.extend("clike", {
    comment: {
        pattern: /(^|[^"{\\])(#.*?(\r?\n|$))/,
        lookbehind: !0
    },
    string: {
        pattern: /("|')(\\?[\s\S])*?\1/,
        inside: {
            property: /\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^\}]+\})/
        }
    },
    number: {
        pattern: /([^\w\.])-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
        lookbehind: !0
    },
    function: /\b(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|declare|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|echo|egrep|eject|enable|env|ethtool|eval|exec|exit|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|select|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|until|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)\b/,
    keyword: /\b(if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)\b/
}),
Prism.languages.insertBefore("bash", "keyword", {
    property: /\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^}]+\})/
}),
Prism.languages.insertBefore("bash", "comment", {
    important: /(^#!\s*\/bin\/bash)|(^#!\s*\/bin\/sh)/
}),
Prism.languages.c = Prism.languages.extend("clike", {
    string: /("|')([^\n\\\1]|\\.|\\\r*\n)*?\1/,
    keyword: /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
    operator: /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\//
}),
Prism.languages.insertBefore("c", "string", {
    property: {
        pattern: /((^|\n)\s*)#\s*[a-z]+([^\n\\]|\\.|\\\r*\n)*/i,
        lookbehind: !0,
        inside: {
            string: {
                pattern: /(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,
                lookbehind: !0
            }
        }
    }
}),
delete Prism.languages.c["class-name"],
delete Prism.languages.c.boolean,
Prism.languages.csharp = Prism.languages.extend("clike", {
    keyword: /\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,
    string: [/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/, /("|')(\\?.)*?\1/],
    preprocessor: /^\s*#.*/m,
    number: /\b-?(0x[\da-f]+|\d*\.?\d+)\b/i
}),
Prism.languages.cpp = Prism.languages.extend("c", {
    keyword: /\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|delete\[\]|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|new\[\]|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
    boolean: /\b(true|false)\b/,
    operator: /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/
}),
Prism.languages.insertBefore("cpp", "keyword", {
    "class-name": {
        pattern: /(class\s+)[a-z0-9_]+/i,
        lookbehind: !0
    }
}),
function(e) {
    var t = /#(?!\{).+/
      , n = {
        pattern: /#\{[^}]+\}/,
        alias: "variable"
    };
    e.languages.coffeescript = e.languages.extend("javascript", {
        comment: t,
        string: [/'(?:\\?[\s\S])*?'/, {
            pattern: /"(?:\\?[\s\S])*?"/,
            inside: {
                interpolation: n
            }
        }],
        keyword: /\b(and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
        "class-member": {
            pattern: /@(?!\d)\w+/,
            alias: "variable"
        }
    }),
    e.languages.insertBefore("coffeescript", "comment", {
        "multiline-comment": {
            pattern: /###[\s\S]+?###/,
            alias: "comment"
        },
        "block-regex": {
            pattern: /\/{3}[\s\S]*?\/{3}/,
            alias: "regex",
            inside: {
                comment: t,
                interpolation: n
            }
        }
    }),
    e.languages.insertBefore("coffeescript", "string", {
        "inline-javascript": {
            pattern: /`(?:\\?[\s\S])*?`/,
            inside: {
                delimiter: {
                    pattern: /^`|`$/,
                    alias: "punctuation"
                },
                rest: e.languages.javascript
            }
        },
        "multiline-string": [{
            pattern: /'''[\s\S]*?'''/,
            alias: "string"
        }, {
            pattern: /"""[\s\S]*?"""/,
            alias: "string",
            inside: {
                interpolation: n
            }
        }]
    }),
    e.languages.insertBefore("coffeescript", "keyword", {
        property: /(?!\d)\w+(?=\s*:(?!:))/
    })
}(Prism),
Prism.languages.css.selector = {
    pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/,
    inside: {
        "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
        "pseudo-class": /:[-\w]+(?:\(.*\))?/,
        class: /\.[-:\.\w]+/,
        id: /#[-:\.\w]+/
    }
},
Prism.languages.insertBefore("css", "function", {
    hexcode: /#[\da-f]{3,6}/i,
    entity: /\\[\da-f]{1,8}/i,
    number: /[\d%\.]+/
}),
Prism.languages.git = {
    comment: /^#.*$/m,
    string: /("|')(\\?.)*?\1/m,
    command: {
        pattern: /^.*\$ git .*$/m,
        inside: {
            parameter: /\s(--|-)\w+/m
        }
    },
    coord: /^@@.*@@$/m,
    deleted: /^-(?!-).+$/m,
    inserted: /^\+(?!\+).+$/m,
    commit_sha1: /^commit \w{40}$/m
},
Prism.languages.http = {
    "request-line": {
        pattern: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/,
        inside: {
            property: /^\b(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
            "attr-name": /:\w+/
        }
    },
    "response-status": {
        pattern: /^HTTP\/1.[01] [0-9]+.*/,
        inside: {
            property: /[0-9]+[A-Z\s-]+$/i
        }
    },
    keyword: /^[\w-]+:(?=.+)/m
};
var httpLanguages = {
    "application/json": Prism.languages.javascript,
    "application/xml": Prism.languages.markup,
    "text/xml": Prism.languages.markup,
    "text/html": Prism.languages.markup
};
for (var contentType in httpLanguages)
    if (httpLanguages[contentType]) {
        var options = {};
        options[contentType] = {
            pattern: new RegExp("(content-type:\\s*" + contentType + "[\\w\\W]*?)\\n\\n[\\w\\W]*","i"),
            lookbehind: !0,
            inside: {
                rest: httpLanguages[contentType]
            }
        },
        Prism.languages.insertBefore("http", "keyword", options)
    }
Prism.languages.ini = {
    comment: /^\s*;.*$/m,
    important: /\[.*?\]/m,
    constant: /^\s*[^\s=]+?(?=[ \t]*=)/m,
    "attr-value": {
        pattern: /=.*/m,
        inside: {
            punctuation: /^[=]/
        }
    }
},
Prism.languages.java = Prism.languages.extend("clike", {
    keyword: /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
    number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+[e]?[\d]*[df]\b|\b\d*\.?\d+\b/i,
    operator: {
        pattern: /(^|[^\.])(?:\+=|\+\+?|-=|--?|!=?|<{1,2}=?|>{1,3}=?|==?|&=|&&?|\|=|\|\|?|\?|\*=?|\/=?|%=?|\^=?|:|~)/m,
        lookbehind: !0
    }
}),
Prism.languages.latex = {
    comment: /%.*?(\r?\n|$)$/m,
    string: /(\$)(\\?.)*?\1/,
    punctuation: /[{}]/,
    selector: /\\[a-z;,:\.]*/i
},
Prism.languages.less = Prism.languages.extend("css", {
    comment: [/\/\*[\w\W]*?\*\//, {
        pattern: /(^|[^\\])\/\/.*/,
        lookbehind: !0
    }],
    atrule: {
        pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
        inside: {
            punctuation: /[:()]/
        }
    },
    selector: {
        pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
        inside: {
            variable: /@+[\w-]+/
        }
    },
    property: /(\b|\B)(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
    punctuation: /[{}();:,]/,
    operator: /[+\-*\/]/
}),
Prism.languages.insertBefore("less", "punctuation", {
    function: Prism.languages.less.function
}),
Prism.languages.insertBefore("less", "property", {
    variable: [{
        pattern: /@[\w-]+\s*:/,
        inside: {
            punctuation: /:/
        }
    }, /@@?[\w-]+/],
    "mixin-usage": {
        pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
        lookbehind: !0,
        alias: "function"
    }
}),
Prism.languages.matlab = {
    string: {
        pattern: /(^|\W)'(?:''|[^'\n])*'/,
        lookbehind: !0
    },
    comment: [/%\{[\s\S]*?\}%/, /%.+/],
    number: /\b-?(?:\d*\.?\d+(?:[eE][+-]?\d+)?(?:[ij])?|[ij])\b/,
    keyword: /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
    function: /(?!\d)\w+(?=\s*\()/,
    operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
    punctuation: /\.{3}|[.,;\[\](){}!]/
},
Prism.languages.objectivec = Prism.languages.extend("c", {
    keyword: /(\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b)|((?=[\w|@])(@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b)/,
    string: /(?:("|')([^\n\\\1]|\\.|\\\r*\n)*?\1)|(@"([^\n\\"]|\\.|\\\r*\n)*?")/,
    operator: /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|@/
}),
Prism.languages.perl = {
    comment: [{
        pattern: /((?:^|\n)\s*)=\w+[\s\S]*?=cut.*/,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\$])#.*?(\r?\n|$)/,
        lookbehind: !0
    }],
    string: [/\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s\{\(\[<])(\\?.)*?\s*\1/, /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(\\?.)*?\s*\1/, /\b(?:q|qq|qx|qw)\s*\(([^()]|\\.)*\s*\)/, /\b(?:q|qq|qx|qw)\s*\{([^{}]|\\.)*\s*\}/, /\b(?:q|qq|qx|qw)\s*\[([^[\]]|\\.)*\s*\]/, /\b(?:q|qq|qx|qw)\s*<([^<>]|\\.)*\s*>/, /("|'|`)(\\?.)*?\1/],
    regex: [/\b(?:m|qr)\s*([^a-zA-Z0-9\s\{\(\[<])(\\?.)*?\s*\1[msixpodualgc]*/, /\b(?:m|qr)\s+([a-zA-Z0-9])(\\?.)*?\s*\1[msixpodualgc]*/, /\b(?:m|qr)\s*\(([^()]|\\.)*\s*\)[msixpodualgc]*/, /\b(?:m|qr)\s*\{([^{}]|\\.)*\s*\}[msixpodualgc]*/, /\b(?:m|qr)\s*\[([^[\]]|\\.)*\s*\][msixpodualgc]*/, /\b(?:m|qr)\s*<([^<>]|\\.)*\s*>[msixpodualgc]*/, /\b(?:s|tr|y)\s*([^a-zA-Z0-9\s\{\(\[<])(\\?.)*?\s*\1\s*((?!\1).|\\.)*\s*\1[msixpodualgcer]*/, /\b(?:s|tr|y)\s+([a-zA-Z0-9])(\\?.)*?\s*\1\s*((?!\1).|\\.)*\s*\1[msixpodualgcer]*/, /\b(?:s|tr|y)\s*\(([^()]|\\.)*\s*\)\s*\(\s*([^()]|\\.)*\s*\)[msixpodualgcer]*/, /\b(?:s|tr|y)\s*\{([^{}]|\\.)*\s*\}\s*\{\s*([^{}]|\\.)*\s*\}[msixpodualgcer]*/, /\b(?:s|tr|y)\s*\[([^[\]]|\\.)*\s*\]\s*\[\s*([^[\]]|\\.)*\s*\][msixpodualgcer]*/, /\b(?:s|tr|y)\s*<([^<>]|\\.)*\s*>\s*<\s*([^<>]|\\.)*\s*>[msixpodualgcer]*/, /\/(\[.+?]|\\.|[^\/\r\n])*\/[msixpodualgc]*(?=\s*($|[\r\n,.;})&|\-+*=~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/],
    variable: [/[&*\$@%]\{\^[A-Z]+\}/, /[&*\$@%]\^[A-Z_]/, /[&*\$@%]#?(?=\{)/, /[&*\$@%]#?((::)*'?(?!\d)[\w$]+)+(::)*/i, /[&*\$@%]\d+/, /[\$@%][!"#\$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],
    filehandle: {
        pattern: /<(?!=).*>|\b_\b/,
        alias: "symbol"
    },
    vstring: {
        pattern: /v\d+(\.\d+)*|\d+(\.\d+){2,}/,
        alias: "string"
    },
    function: {
        pattern: /sub [a-z0-9_]+/i,
        inside: {
            keyword: /sub/
        }
    },
    keyword: /\b(any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
    number: /(\n|\b)-?(0x[\dA-Fa-f](_?[\dA-Fa-f])*|0b[01](_?[01])*|(\d(_?\d)*)?\.?\d(_?\d)*([Ee]-?\d+)?)\b/,
    operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|[-+*=~\/|&]{1,2}|<=?|>=?|\.{1,3}|[!?\\^]|\b(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b/,
    punctuation: /[{}[\];(),:]/
},
Prism.languages.php = Prism.languages.extend("clike", {
    keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
    constant: /\b[A-Z0-9_]{2,}\b/,
    comment: {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])(\/\/).*?(\r?\n|$))/,
        lookbehind: !0
    }
}),
Prism.languages.insertBefore("php", "class-name", {
    "shell-comment": {
        pattern: /(^|[^\\])#.*?(\r?\n|$)/,
        lookbehind: !0,
        alias: "comment"
    }
}),
Prism.languages.insertBefore("php", "keyword", {
    delimiter: /(\?>|<\?php|<\?)/i,
    variable: /(\$\w+)\b/i,
    package: {
        pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
        lookbehind: !0,
        inside: {
            punctuation: /\\/
        }
    }
}),
Prism.languages.insertBefore("php", "operator", {
    property: {
        pattern: /(->)[\w]+/,
        lookbehind: !0
    }
}),
Prism.languages.markup && (Prism.hooks.add("before-highlight", (function(e) {}
)),
Prism.hooks.add("before-insert", (function(e) {}
)),
Prism.hooks.add("after-highlight", (function(e) {}
)),
Prism.hooks.add("wrap", (function(e) {}
)),
Prism.languages.insertBefore("php", "comment", {
    markup: {
        pattern: /<[^?]\/?(.*?)>/,
        inside: Prism.languages.markup
    },
    php: /\{\{\{PHP[0-9]+\}\}\}/
})),
Prism.languages.insertBefore("php", "variable", {
    this: /\$this/,
    global: /\$_?(GLOBALS|SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/,
    scope: {
        pattern: /\b[\w\\]+::/,
        inside: {
            keyword: /(static|self|parent)/,
            punctuation: /(::|\\)/
        }
    }
}),
Prism.languages.python = {
    comment: {
        pattern: /(^|[^\\])#.*?(\r?\n|$)/,
        lookbehind: !0
    },
    string: /"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(\\?.)*?\1/,
    keyword: /\b(as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,
    boolean: /\b(True|False)\b/,
    number: /\b-?(0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
    operator: /[-+]|<=?|>=?|!|={1,2}|&{1,2}|\|?\||\?|\*|\/|~|\^|%|\b(or|and|not)\b/,
    punctuation: /[{}[\];(),.:]/
},
Prism.languages.ruby = Prism.languages.extend("clike", {
    comment: /#[^\r\n]*(\r?\n|$)/,
    keyword: /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/,
    builtin: /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
    constant: /\b[A-Z][a-zA-Z_0-9]*[?!]?\b/
}),
Prism.languages.insertBefore("ruby", "keyword", {
    regex: {
        pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0
    },
    variable: /[@$]+\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/,
    symbol: /:\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/
}),
Prism.languages.scss = Prism.languages.extend("css", {
    comment: {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/,
        lookbehind: !0
    },
    atrule: /@[\w-]+(?=\s+(\(|\{|;))/i,
    url: /([-a-z]+-)*url(?=\()/i,
    selector: /([^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m
}),
Prism.languages.insertBefore("scss", "atrule", {
    keyword: /@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)|(?=@for\s+\$[-_\w]+\s)+from/i
}),
Prism.languages.insertBefore("scss", "property", {
    variable: /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i
}),
Prism.languages.insertBefore("scss", "function", {
    placeholder: /%[-_\w]+/i,
    statement: /\B!(default|optional)\b/i,
    boolean: /\b(true|false)\b/,
    null: /\b(null)\b/,
    operator: /\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|%)\s+/
}),
Prism.languages.sql = {
    comment: {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|((--)|(\/\/)|#).*?(\r?\n|$))/,
        lookbehind: !0
    },
    string: {
        pattern: /(^|[^@])("|')(\\?[\s\S])*?\2/,
        lookbehind: !0
    },
    variable: /@[\w.$]+|@("|'|`)(\\?[\s\S])+?\1/,
    function: /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,
    keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALTER|ANALYZE|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADE|CASCADED|CASE|CHAIN|CHAR VARYING|CHARACTER VARYING|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DOUBLE PRECISION|DROP|DUMMY|DUMP|DUMPFILE|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE|ESCAPED BY|EXCEPT|EXEC|EXECUTE|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR|FOR EACH ROW|FORCE|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GEOMETRY|GEOMETRYCOLLECTION|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY|IDENTITY_INSERT|IDENTITYCOL|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEY|KEYS|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONGBLOB|LONGTEXT|MATCH|MATCHED|MEDIUMBLOB|MEDIUMINT|MEDIUMTEXT|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTILINESTRING|MULTIPOINT|MULTIPOLYGON|NATIONAL|NATIONAL CHAR VARYING|NATIONAL CHARACTER|NATIONAL CHARACTER VARYING|NATIONAL VARCHAR|NATURAL|NCHAR|NCHAR VARCHAR|NEXT|NO|NO SQL|NOCHECK|NOCYCLE|NONCLUSTERED|NULLIF|NUMERIC|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPTIMIZE|OPTION|OPTIONALLY|ORDER|OUT|OUTER|OUTFILE|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC|PROCEDURE|PUBLIC|PURGE|QUICK|RAISERROR|READ|READS SQL DATA|READTEXT|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURN|RETURNS|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROWCOUNT|ROWGUIDCOL|ROWS?|RTREE|RULE|SAVE|SAVEPOINT|SCHEMA|SELECT|SERIAL|SERIALIZABLE|SESSION|SESSION_USER|SET|SETUSER|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START|STARTING BY|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLE|TABLES|TABLESPACE|TEMP(?:ORARY)?|TEMPTABLE|TERMINATED BY|TEXT|TEXTSIZE|THEN|TIMESTAMP|TINYBLOB|TINYINT|TINYTEXT|TO|TOP|TRAN|TRANSACTION|TRANSACTIONS|TRIGGER|TRUNCATE|TSEQUAL|TYPE|TYPES|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNPIVOT|UPDATE|UPDATETEXT|USAGE|USE|USER|USING|VALUE|VALUES|VARBINARY|VARCHAR|VARCHARACTER|VARYING|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH|WITH ROLLUP|WITHIN|WORK|WRITE|WRITETEXT)\b/i,
    boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
    number: /\b-?(0x)?\d*\.?[\da-f]+\b/,
    operator: /\b(?:ALL|AND|ANY|BETWEEN|EXISTS|IN|LIKE|NOT|OR|IS|UNIQUE|CHARACTER SET|COLLATE|DIV|OFFSET|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b|[-+]|!|[=<>]{1,2}|(&){1,2}|\|?\||\?|\*|\//i,
    punctuation: /[;[\]()`,.]/
},
Prism.languages.swift = Prism.languages.extend("clike", {
    keyword: /\b(as|associativity|break|case|class|continue|convenience|default|deinit|didSet|do|dynamicType|else|enum|extension|fallthrough|final|for|func|get|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|required|return|right|safe|self|Self|set|static|struct|subscript|super|switch|Type|typealias|unowned|unowned|unsafe|var|weak|where|while|willSet|__COLUMN__|__FILE__|__FUNCTION__|__LINE__)\b/,
    number: /\b([\d_]+(\.[\de_]+)?|0x[a-f0-9_]+(\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
    constant: /\b(nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
    atrule: /@\b(IBOutlet|IBDesignable|IBAction|IBInspectable|class_protocol|exported|noreturn|NSCopying|NSManaged|objc|UIApplicationMain|auto_closure)\b/,
    builtin: /\b([A-Z]\S+|abs|advance|alignof|alignofValue|assert|contains|count|countElements|debugPrint|debugPrintln|distance|dropFirst|dropLast|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lazy|lexicographicalCompare|map|max|maxElement|min|minElement|numericCast|overlaps|partition|prefix|print|println|reduce|reflect|reverse|sizeof|sizeofValue|sort|sorted|split|startsWith|stride|strideof|strideofValue|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|withExtendedLifetime|withUnsafeMutablePointer|withUnsafeMutablePointers|withUnsafePointer|withUnsafePointers|withVaList)\b/
}),
Prism.hooks.add("after-highlight", (function(e) {}
)),
self.Prism && Prism.hooks.add("before-highlight", (function(e) {}
));
var ytp = ytp || {};
!function(e, t) {
    var n = navigator.userAgent;
    if (!e.browser) {
        var o, i, r;
        if (e.browser = {},
        e.browser.mozilla = !1,
        e.browser.webkit = !1,
        e.browser.opera = !1,
        e.browser.safari = !1,
        e.browser.chrome = !1,
        e.browser.msie = !1,
        e.browser.ua = n,
        e.browser.name = navigator.appName,
        e.browser.fullVersion = "" + parseFloat(navigator.appVersion),
        e.browser.majorVersion = parseInt(navigator.appVersion, 10),
        -1 != (i = n.indexOf("Opera")))
            e.browser.opera = !0,
            e.browser.name = "Opera",
            e.browser.fullVersion = n.substring(i + 6),
            -1 != (i = n.indexOf("Version")) && (e.browser.fullVersion = n.substring(i + 8));
        else if (-1 != (i = n.indexOf("MSIE")))
            e.browser.msie = !0,
            e.browser.name = "Microsoft Internet Explorer",
            e.browser.fullVersion = n.substring(i + 5);
        else if (-1 != n.indexOf("Trident")) {
            e.browser.msie = !0,
            e.browser.name = "Microsoft Internet Explorer";
            var s = n.indexOf("rv:") + 3
              , a = s + 4;
            e.browser.fullVersion = n.substring(s, a)
        } else
            -1 != (i = n.indexOf("Chrome")) ? (e.browser.webkit = !0,
            e.browser.chrome = !0,
            e.browser.name = "Chrome",
            e.browser.fullVersion = n.substring(i + 7)) : -1 != (i = n.indexOf("Safari")) ? (e.browser.webkit = !0,
            e.browser.safari = !0,
            e.browser.name = "Safari",
            e.browser.fullVersion = n.substring(i + 7),
            -1 != (i = n.indexOf("Version")) && (e.browser.fullVersion = n.substring(i + 8))) : -1 != (i = n.indexOf("AppleWebkit")) ? (e.browser.webkit = !0,
            e.browser.name = "Safari",
            e.browser.fullVersion = n.substring(i + 7),
            -1 != (i = n.indexOf("Version")) && (e.browser.fullVersion = n.substring(i + 8))) : -1 != (i = n.indexOf("Firefox")) ? (e.browser.mozilla = !0,
            e.browser.name = "Firefox",
            e.browser.fullVersion = n.substring(i + 8)) : (o = n.lastIndexOf(" ") + 1) < (i = n.lastIndexOf("/")) && (e.browser.name = n.substring(o, i),
            e.browser.fullVersion = n.substring(i + 1),
            e.browser.name.toLowerCase() == e.browser.name.toUpperCase() && (e.browser.name = navigator.appName));
        -1 != (r = e.browser.fullVersion.indexOf(";")) && (e.browser.fullVersion = e.browser.fullVersion.substring(0, r)),
        -1 != (r = e.browser.fullVersion.indexOf(" ")) && (e.browser.fullVersion = e.browser.fullVersion.substring(0, r)),
        e.browser.majorVersion = parseInt("" + e.browser.fullVersion, 10),
        isNaN(e.browser.majorVersion) && (e.browser.fullVersion = "" + parseFloat(navigator.appVersion),
        e.browser.majorVersion = parseInt(navigator.appVersion, 10)),
        e.browser.version = e.browser.majorVersion
    }
    e.browser.android = /Android/i.test(n),
    e.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(n),
    e.browser.ios = /iPhone|iPad|iPod|webOS/i.test(n),
    e.browser.operaMobile = /Opera Mini/i.test(n),
    e.browser.kindle = /Kindle|Silk/i.test(n),
    e.browser.windowsMobile = /IEMobile|Windows Phone/i.test(n),
    e.browser.mobile = e.browser.android || e.browser.blackberry || e.browser.ios || e.browser.windowsMobile || e.browser.operaMobile || e.browser.kindle,
    e.fn.CSSAnimate = function(e, t, n, o, i) {}
    ,
    e.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "2.7.6",
        author: "Matteo Bicocchi",
        defaults: {
            containment: "body",
            ratio: "16/9",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 100,
            addRaster: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnClick: !1,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            gaTrack: !0,
            onReady: function() {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        locationProtocol: "https:",
        buildPlayer: function(e) {},
        getDataFromFeed: function(e) {},
        getVideoData: function() {},
        getVideoID: function() {},
        setVideoQuality: function(e) {},
        YTPlaylist: function(e, t, n) {},
        playNext: function() {},
        playPrev: function() {},
        changeMovie: function(e) {},
        getPlayer: function() {},
        playerDestroy: function() {},
        fullscreen: function(e) {},
        playYTP: function() {},
        toggleLoops: function() {},
        stopYTP: function() {},
        pauseYTP: function() {},
        seekToYTP: function(e) {},
        setYTPVolume: function(e) {},
        muteYTP: function() {},
        unmuteYTP: function() {},
        manageYTPProgress: function() {},
        buildYTPControls: function() {},
        checkForState: function(e) {},
        formatTime: function(e) {}
    },
    e.fn.toggleVolume = function() {}
    ,
    e.fn.optimizeDisplay = function() {}
    ,
    e.shuffle = function(e) {}
    ,
    e.fn.YTPlayer = e.mbYTPlayer.buildPlayer,
    e.fn.YTPlaylist = e.mbYTPlayer.YTPlaylist,
    e.fn.playNext = e.mbYTPlayer.playNext,
    e.fn.playPrev = e.mbYTPlayer.playPrev,
    e.fn.changeMovie = e.mbYTPlayer.changeMovie,
    e.fn.getVideoID = e.mbYTPlayer.getVideoID,
    e.fn.getPlayer = e.mbYTPlayer.getPlayer,
    e.fn.playerDestroy = e.mbYTPlayer.playerDestroy,
    e.fn.fullscreen = e.mbYTPlayer.fullscreen,
    e.fn.buildYTPControls = e.mbYTPlayer.buildYTPControls,
    e.fn.playYTP = e.mbYTPlayer.playYTP,
    e.fn.toggleLoops = e.mbYTPlayer.toggleLoops,
    e.fn.stopYTP = e.mbYTPlayer.stopYTP,
    e.fn.pauseYTP = e.mbYTPlayer.pauseYTP,
    e.fn.seekToYTP = e.mbYTPlayer.seekToYTP,
    e.fn.muteYTP = e.mbYTPlayer.muteYTP,
    e.fn.unmuteYTP = e.mbYTPlayer.unmuteYTP,
    e.fn.setYTPVolume = e.mbYTPlayer.setYTPVolume,
    e.fn.setVideoQuality = e.mbYTPlayer.setVideoQuality,
    e.fn.manageYTPProgress = e.mbYTPlayer.manageYTPProgress,
    e.fn.getDataFromFeed = e.mbYTPlayer.getVideoData,
    e.fn.mb_YTPlayer = e.fn.YTPlayer,
    e.fn.muteYTPVolume = e.mbYTPlayer.muteYTP,
    e.fn.unmuteYTPVolume = e.mbYTPlayer.unmuteYTP
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}((function(e, t) {
    "use strict";
    e.infinitescroll = function(e, t, n) {}
    ,
    e.infinitescroll.defaults = {
        loading: {
            finished: t,
            finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
            img: "data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7",
            msg: null,
            msgText: "<em>Loading the next set of posts...</em>",
            selector: null,
            speed: "fast",
            start: t
        },
        state: {
            isDuringAjax: !1,
            isInvalidPage: !1,
            isDestroyed: !1,
            isDone: !1,
            isPaused: !1,
            isBeyondMaxPage: !1,
            currPage: 1
        },
        debug: !1,
        behavior: t,
        binder: e(window),
        nextSelector: "div.navigation a:first",
        navSelector: "div.navigation",
        contentSelector: null,
        extraScrollPx: 150,
        itemSelector: "div.post",
        animate: !1,
        pathParse: t,
        dataType: "html",
        appendCallback: !0,
        bufferPx: 40,
        errorCallback: function() {},
        infid: 0,
        pixelsFromNavToBottom: t,
        path: t,
        prefill: !1,
        maxPage: t
    },
    e.infinitescroll.prototype = {
        _binding: function(e) {},
        _create: function(e, t) {},
        _prefill: function() {},
        _debug: function() {},
        _determinepath: function(e) {},
        _error: function(e) {},
        _loadcallback: function(e, t, n) {},
        _nearbottom: function() {},
        _pausing: function(e) {},
        _setup: function() {},
        _showdonemsg: function() {},
        _validate: function(e) {},
        bind: function() {},
        destroy: function() {},
        pause: function() {},
        resume: function() {},
        beginAjax: function(e) {},
        retrieve: function(e) {},
        scroll: function() {},
        toggle: function() {},
        unbind: function() {},
        update: function(e) {}
    },
    e.fn.infinitescroll = function(e, t) {}
    ,
    e.event.special.smartscroll = {
        setup: function() {},
        teardown: function() {},
        handler: function(e, t) {}
    },
    e.fn.smartscroll = function(e) {}
}
)),
$.extend($.infinitescroll.prototype, {
    _setup_twitter: function() {},
    _showdonemsg_twitter: function() {}
}),
jQuery.fn.pajinate = function(e) {}
,
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : e.jQuery)
}(this, (function(e) {
    "use strict";
    function t(e, t, n) {}
    var n = "vide";
    t.prototype.init = function() {}
    ,
    t.prototype.getVideoObject = function() {}
    ,
    t.prototype.resize = function() {}
    ,
    t.prototype.destroy = function() {}
    ,
    e[n] = {
        lookup: []
    },
    e.fn[n] = function(e, t) {}
    ,
    e(document).ready((function() {
        var t = e(window);
        t.on("resize." + n, (function() {
            for (var t, o = e[n].lookup.length, i = 0; o > i; i++)
                (t = e[n].lookup[i]) && t.settings.resizing && t.resize()
        }
        )),
        t.on("unload." + n, (function() {}
        )),
        e(document).find("[data-vide-bg]").each((function(e, t) {}
        ))
    }
    ))
}
)),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}((function(e, t) {
    var n = function(e, t) {};
    n.prototype = {
        constructor: n,
        _resolveViewName: function(e) {},
        _resolveDaysOfWeek: function(e) {},
        _check_template: function(e) {},
        _process_options: function(e) {},
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(e) {},
        _unapplyEvents: function(e) {},
        _buildEvents: function() {},
        _attachEvents: function() {},
        _detachEvents: function() {},
        _attachSecondaryEvents: function() {},
        _detachSecondaryEvents: function() {},
        _trigger: function(e, t) {},
        show: function() {},
        hide: function() {},
        destroy: function() {},
        paste: function(e) {},
        _utc_to_local: function(e) {},
        _local_to_utc: function(e) {},
        _zero_time: function(e) {},
        _zero_utc_time: function(e) {},
        getDates: function() {},
        getUTCDates: function() {},
        getDate: function() {},
        getUTCDate: function() {},
        clearDates: function() {},
        setDates: function() {},
        setUTCDates: function() {},
        setDate: function() {},
        setUTCDate: function() {},
        remove: function() {},
        setValue: function() {},
        getFormattedDate: function(e) {},
        getStartDate: function() {},
        setStartDate: function(e) {},
        getEndDate: function() {},
        setEndDate: function(e) {},
        setDaysOfWeekDisabled: function(e) {},
        setDaysOfWeekHighlighted: function(e) {},
        setDatesDisabled: function(e) {},
        place: function() {},
        _allow_update: !0,
        update: function() {},
        fillDow: function() {},
        fillMonths: function() {},
        setRange: function(e) {},
        getClassNames: function(e) {},
        _fill_yearsView: function(e, t, n, o, i, r, s, a) {},
        fill: function() {},
        updateNavArrows: function() {},
        click: function(e) {},
        navArrowsClick: function(e) {},
        _toggle_multidate: function(e) {},
        _setDate: function(e, t) {},
        moveDay: function(e, t) {},
        moveWeek: function(e, t) {},
        moveMonth: function(e, t) {},
        moveYear: function(e, t) {},
        moveAvailableDate: function(e, t, n) {},
        weekOfDateIsDisabled: function(e) {},
        dateIsDisabled: function(e) {},
        dateWithinRange: function(e) {},
        keydown: function(e) {},
        setViewMode: function(e) {}
    };
    var o = function(e, t) {};
    o.prototype = {
        updateDates: function() {},
        updateRanges: function() {},
        dateUpdated: function(e) {},
        destroy: function() {},
        remove: function() {}
    },
    e.fn.datepicker;
    var i = function(e) {
        var i;
        if (Array.apply(null, arguments).shift(),
        this.each((function() {}
        )),
        i === t || i instanceof n || i instanceof o)
            return this;
        if (this.length > 1)
            throw new Error("Using only allowed for the collection of a single element (" + e + " function)");
        return i
    };
    e.fn.datepicker = i,
    e.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !1,
        beforeShowDay: e.noop,
        beforeShowMonth: e.noop,
        beforeShowYear: e.noop,
        beforeShowDecade: e.noop,
        beforeShowCentury: e.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keepEmptyValues: !1,
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -1 / 0,
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        dateCells: !1,
        title: "",
        templates: {
            leftArrow: "&laquo;",
            rightArrow: "&raquo;"
        }
    },
    e.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"],
    e.fn.datepicker.Constructor = n,
    e.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy"
        }
    };
    var r = {
        viewModes: [{
            names: ["days", "month"],
            clsName: "days",
            e: "changeMonth"
        }, {
            names: ["months", "year"],
            clsName: "months",
            e: "changeYear",
            navStep: 1
        }, {
            names: ["years", "decade"],
            clsName: "years",
            e: "changeDecade",
            navStep: 10
        }, {
            names: ["decades", "century"],
            clsName: "decades",
            e: "changeCentury",
            navStep: 100
        }, {
            names: ["centuries", "millennium"],
            clsName: "centuries",
            e: "changeMillennium",
            navStep: 1e3
        }],
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function(e) {},
        parseDate: function(e, t, n, o) {},
        formatDate: function(e, t, n) {},
        headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    r.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + r.headTemplate + "<tbody></tbody>" + r.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + "</table></div></div>",
    e.fn.datepicker.DPGlobal = r,
    e.fn.datepicker.noConflict = function() {}
    ,
    e.fn.datepicker.version = "1.7.0-dev",
    e(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', (function(e) {}
    )),
    e((function() {
        i.call(e('[data-provide="datepicker-inline"]'))
    }
    ))
}
)),
function(e) {
    "object" == typeof exports && exports && "object" == typeof module && module && module.exports === exports ? e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}((function(e) {
    var t = {
        init: function(e) {},
        show: function(e) {},
        hide: function(e) {},
        option: function(e, t) {},
        getSecondsFromMidnight: function() {},
        getTime: function(e) {},
        isVisible: function() {},
        setTime: function(e) {},
        remove: function() {}
    };
    e.fn.timepicker = function(n) {
        return this.length ? t[n] ? this.hasClass("ui-timepicker-input") ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : this : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.timepicker") : t.init.apply(this, arguments) : this
    }
    ,
    e.fn.timepicker.defaults = {
        appendTo: "body",
        className: null,
        closeOnWindowScroll: !1,
        disableTextInput: !1,
        disableTimeRanges: [],
        disableTouchKeyboard: !1,
        durationTime: null,
        forceRoundTime: !1,
        maxTime: null,
        minTime: null,
        noneOption: !1,
        orientation: "l",
        roundingFunction: function(e, t) {},
        scrollDefault: null,
        selectOnBlur: !1,
        show2400: !1,
        showDuration: !1,
        showOn: ["click", "focus"],
        showOnFocus: !0,
        step: 30,
        stopScrollPropagation: !1,
        timeFormat: "g:ia",
        typeaheadHighlight: !0,
        useSelect: !1,
        wrapHours: !0
    }
}
)),
function(e) {
    "use strict";
    if ("function" == typeof define && define.amd)
        define(["jquery", "moment"], e);
    else if ("object" == typeof exports)
        e(require("jquery"), require("moment"));
    else {
        if ("undefined" == typeof jQuery)
            throw "bootstrap-datetimepicker requires jQuery to be loaded first";
        if ("undefined" == typeof moment)
            throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
        e(jQuery, moment)
    }
}((function(e, t) {
    "use strict";
    if (!t)
        throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
    e.fn.datetimepicker = function(e) {}
    ,
    e.fn.datetimepicker.defaults = {
        timeZone: "Etc/UTC",
        format: !1,
        dayViewHeaderFormat: "MMMM YYYY",
        extraFormats: !1,
        stepping: 1,
        minDate: !1,
        maxDate: !1,
        useCurrent: !0,
        collapse: !0,
        locale: t.locale(),
        defaultDate: !1,
        disabledDates: !1,
        enabledDates: !1,
        icons: {
            time: "glyphicon glyphicon-time",
            date: "glyphicon glyphicon-calendar",
            up: "glyphicon glyphicon-chevron-up",
            down: "glyphicon glyphicon-chevron-down",
            previous: "glyphicon glyphicon-chevron-left",
            next: "glyphicon glyphicon-chevron-right",
            today: "glyphicon glyphicon-screenshot",
            clear: "glyphicon glyphicon-trash",
            close: "glyphicon glyphicon-remove"
        },
        tooltips: {
            today: "Go to today",
            clear: "Clear selection",
            close: "Close the picker",
            selectMonth: "Select Month",
            prevMonth: "Previous Month",
            nextMonth: "Next Month",
            selectYear: "Select Year",
            prevYear: "Previous Year",
            nextYear: "Next Year",
            selectDecade: "Select Decade",
            prevDecade: "Previous Decade",
            nextDecade: "Next Decade",
            prevCentury: "Previous Century",
            nextCentury: "Next Century",
            pickHour: "Pick Hour",
            incrementHour: "Increment Hour",
            decrementHour: "Decrement Hour",
            pickMinute: "Pick Minute",
            incrementMinute: "Increment Minute",
            decrementMinute: "Decrement Minute",
            pickSecond: "Pick Second",
            incrementSecond: "Increment Second",
            decrementSecond: "Decrement Second",
            togglePeriod: "Toggle Period",
            selectTime: "Select Time"
        },
        useStrict: !1,
        sideBySide: !1,
        daysOfWeekDisabled: !1,
        calendarWeeks: !1,
        viewMode: "days",
        toolbarPlacement: "default",
        showTodayButton: !1,
        showClear: !1,
        showClose: !1,
        widgetPositioning: {
            horizontal: "auto",
            vertical: "auto"
        },
        widgetParent: null,
        ignoreReadonly: !1,
        keepOpen: !1,
        focusOnShow: !0,
        inline: !1,
        keepInvalid: !1,
        datepickerInput: ".datepickerinput",
        keyBinds: {
            up: function(e) {},
            down: function(e) {},
            "control up": function(e) {},
            "control down": function(e) {},
            left: function(e) {},
            right: function(e) {},
            pageUp: function(e) {},
            pageDown: function(e) {},
            enter: function() {},
            escape: function() {},
            "control space": function(e) {},
            t: function() {},
            delete: function() {}
        },
        debug: !1,
        allowInputToggle: !1,
        disabledTimeIntervals: !1,
        disabledHours: !1,
        enabledHours: !1,
        viewDate: !1
    }
}
)),
function(e, t) {
    "use strict";
    e.Zepto || e.jQuery
}(window, document),
window.Zepto || window.jQuery,
jQuery.fn.ddslick = function(e) {}
;
