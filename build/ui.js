(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/preact/dist/preact.module.js
  function s(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function a(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function h(l3, u3, i3) {
    var t3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return v(l3, f3, t3, o3, null);
  }
  function v(n2, i3, t3, o3, r3) {
    var f3 = { type: n2, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function y() {
    return { current: null };
  }
  function p(n2) {
    return n2.children;
  }
  function d(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function _(n2, l3) {
    if (null == l3)
      return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? _(n2) : null;
  }
  function k(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return k(n2);
    }
  }
  function b(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t3, o3, r3;
        n3.__d && (o3 = (t3 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = s({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [o3] : null, u3, null == o3 ? _(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && k(t3)));
      });
  }
  function w(n2, l3, u3, i3, t3, o3, r3, c3, s3, a3) {
    var h3, y3, d3, k4, b3, g4, w4, x4 = i3 && i3.__k || e, C3 = x4.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
      if (null != (k4 = u3.__k[h3] = null == (k4 = l3[h3]) || "boolean" == typeof k4 ? null : "string" == typeof k4 || "number" == typeof k4 || "bigint" == typeof k4 ? v(null, k4, null, null, k4) : Array.isArray(k4) ? v(p, { children: k4 }, null, null, null) : k4.__b > 0 ? v(k4.type, k4.props, k4.key, k4.ref ? k4.ref : null, k4.__v) : k4)) {
        if (k4.__ = u3, k4.__b = u3.__b + 1, null === (d3 = x4[h3]) || d3 && k4.key == d3.key && k4.type === d3.type)
          x4[h3] = void 0;
        else
          for (y3 = 0; y3 < C3; y3++) {
            if ((d3 = x4[y3]) && k4.key == d3.key && k4.type === d3.type) {
              x4[y3] = void 0;
              break;
            }
            d3 = null;
          }
        j(n2, k4, d3 = d3 || f, t3, o3, r3, c3, s3, a3), b3 = k4.__e, (y3 = k4.ref) && d3.ref != y3 && (w4 || (w4 = []), d3.ref && w4.push(d3.ref, null, k4), w4.push(y3, k4.__c || b3, k4)), null != b3 ? (null == g4 && (g4 = b3), "function" == typeof k4.type && k4.__k === d3.__k ? k4.__d = s3 = m(k4, s3, n2) : s3 = A(n2, k4, d3, x4, b3, s3), "function" == typeof u3.type && (u3.__d = s3)) : s3 && d3.__e == s3 && s3.parentNode != n2 && (s3 = _(d3));
      }
    for (u3.__e = g4, h3 = C3; h3--; )
      null != x4[h3] && N(x4[h3], x4[h3]);
    if (w4)
      for (h3 = 0; h3 < w4.length; h3++)
        M(w4[h3], w4[++h3], w4[++h3]);
  }
  function m(n2, l3, u3) {
    for (var i3, t3 = n2.__k, o3 = 0; t3 && o3 < t3.length; o3++)
      (i3 = t3[o3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? m(i3, l3, u3) : A(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function x(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
      x(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function A(n2, l3, u3, i3, t3, o3) {
    var r3, f3, e3;
    if (void 0 !== l3.__d)
      r3 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != o3 || null == t3.parentNode)
      n:
        if (null == o3 || o3.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, o3), r3 = o3;
        }
    return void 0 !== r3 ? r3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i3, t3) {
    var o3;
    for (o3 in u3)
      "children" === o3 || "key" === o3 || o3 in l3 || H(n2, o3, null, u3[o3], i3);
    for (o3 in l3)
      t3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || H(n2, o3, l3[o3], u3[o3], i3);
  }
  function $(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || c.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? T : I, o3) : n2.removeEventListener(l3, o3 ? T : I, o3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && -1 == l3.indexOf("-") ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
    var a3, h3, v3, y3, _3, k4, b3, g4, m3, x4, A4, C3, $3, H3, I3, T4 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
    try {
      n:
        if ("function" == typeof T4) {
          if (g4 = u3.props, m3 = (a3 = T4.contextType) && t3[a3.__c], x4 = a3 ? m3 ? m3.props.value : a3.__ : t3, i3.__c ? b3 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in T4 && T4.prototype.render ? u3.__c = h3 = new T4(g4, x4) : (u3.__c = h3 = new d(g4, x4), h3.constructor = T4, h3.render = O), m3 && m3.sub(h3), h3.props = g4, h3.state || (h3.state = {}), h3.context = x4, h3.__n = t3, v3 = h3.__d = true, h3.__h = [], h3._sb = []), null == h3.__s && (h3.__s = h3.state), null != T4.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = s({}, h3.__s)), s(h3.__s, T4.getDerivedStateFromProps(g4, h3.__s))), y3 = h3.props, _3 = h3.state, v3)
            null == T4.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
          else {
            if (null == T4.getDerivedStateFromProps && g4 !== y3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(g4, x4), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(g4, h3.__s, x4) || u3.__v === i3.__v) {
              for (h3.props = g4, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), A4 = 0; A4 < h3._sb.length; A4++)
                h3.__h.push(h3._sb[A4]);
              h3._sb = [], h3.__h.length && f3.push(h3);
              break n;
            }
            null != h3.componentWillUpdate && h3.componentWillUpdate(g4, h3.__s, x4), null != h3.componentDidUpdate && h3.__h.push(function() {
              h3.componentDidUpdate(y3, _3, k4);
            });
          }
          if (h3.context = x4, h3.props = g4, h3.__v = u3, h3.__P = n2, C3 = l.__r, $3 = 0, "prototype" in T4 && T4.prototype.render) {
            for (h3.state = h3.__s, h3.__d = false, C3 && C3(u3), a3 = h3.render(h3.props, h3.state, h3.context), H3 = 0; H3 < h3._sb.length; H3++)
              h3.__h.push(h3._sb[H3]);
            h3._sb = [];
          } else
            do {
              h3.__d = false, C3 && C3(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
            } while (h3.__d && ++$3 < 25);
          h3.state = h3.__s, null != h3.getChildContext && (t3 = s(s({}, t3), h3.getChildContext())), v3 || null == h3.getSnapshotBeforeUpdate || (k4 = h3.getSnapshotBeforeUpdate(y3, _3)), I3 = null != a3 && a3.type === p && null == a3.key ? a3.props.children : a3, w(n2, Array.isArray(I3) ? I3 : [I3], u3, i3, t3, o3, r3, f3, e3, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b3 && (h3.__E = h3.__ = null), h3.__e = false;
        } else
          null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
      (a3 = l.diffed) && a3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l3, u3, i3, t3, o3, r3, e3, c3) {
    var s3, h3, v3, y3 = i3.props, p3 = u3.props, d3 = u3.type, k4 = 0;
    if ("svg" === d3 && (o3 = true), null != r3) {
      for (; k4 < r3.length; k4++)
        if ((s3 = r3[k4]) && "setAttribute" in s3 == !!d3 && (d3 ? s3.localName === d3 : 3 === s3.nodeType)) {
          l3 = s3, r3[k4] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === d3)
        return document.createTextNode(p3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r3 = null, c3 = false;
    }
    if (null === d3)
      y3 === p3 || c3 && l3.data === p3 || (l3.data = p3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), h3 = (y3 = i3.props || f).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
        if (null != r3)
          for (y3 = {}, k4 = 0; k4 < l3.attributes.length; k4++)
            y3[l3.attributes[k4].name] = l3.attributes[k4].value;
        (v3 || h3) && (v3 && (h3 && v3.__html == h3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p3, y3, o3, c3), v3)
        u3.__k = [];
      else if (k4 = u3.props.children, w(l3, Array.isArray(k4) ? k4 : [k4], u3, i3, t3, o3 && "foreignObject" !== d3, r3, e3, r3 ? r3[0] : i3.__k && _(i3, 0), c3), null != r3)
        for (k4 = r3.length; k4--; )
          null != r3[k4] && a(r3[k4]);
      c3 || ("value" in p3 && void 0 !== (k4 = p3.value) && (k4 !== l3.value || "progress" === d3 && !k4 || "option" === d3 && k4 !== y3.value) && H(l3, "value", k4, y3.value, false), "checked" in p3 && void 0 !== (k4 = p3.checked) && k4 !== l3.checked && H(l3, "checked", k4, y3.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t3, o3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), null != (t3 = n2.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null, n2.__c = void 0;
    }
    if (t3 = n2.__k)
      for (o3 = 0; o3 < t3.length; o3++)
        t3[o3] && N(t3[o3], u3, i3 || "function" != typeof n2.type);
    i3 || null == n2.__e || a(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function P(u3, i3, t3) {
    var o3, r3, e3;
    l.__ && l.__(u3, i3), r3 = (o3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, e3 = [], j(i3, u3 = (!o3 && t3 || i3).__k = h(p, null, [u3]), r3 || f, f, void 0 !== i3.ownerSVGElement, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, e3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), z(e3, u3);
  }
  function S(n2, l3) {
    P(n2, l3, S);
  }
  function q(l3, u3, i3) {
    var t3, o3, r3, f3 = s({}, l3.props);
    for (r3 in u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    return arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), v(l3.type, f3, t3 || l3.key, o3 || l3.ref, null);
  }
  function B(n2, l3) {
    var u3 = { __c: l3 = "__cC" + r++, __: n2, Consumer: function(n3, l4) {
      return n3.children(l4);
    }, Provider: function(n3) {
      var u4, i3;
      return this.getChildContext || (u4 = [], (i3 = {})[l3] = this, this.getChildContext = function() {
        return i3;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u4.some(b);
      }, this.sub = function(n4) {
        u4.push(n4);
        var l4 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u4.splice(u4.indexOf(n4), 1), l4 && l4.call(n4);
        };
      }), n3.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  var n, l, u, i, t, o, r, f, e, c;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      f = {};
      e = [];
      c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = e.slice, l = { __e: function(n2, l3, u3, i3) {
        for (var t3, o3, r3; l3 = l3.__; )
          if ((t3 = l3.__c) && !t3.__)
            try {
              if ((o3 = t3.constructor) && null != o3.getDerivedStateFromError && (t3.setState(o3.getDerivedStateFromError(n2)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), r3 = t3.__d), r3)
                return t3.__E = t3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return null != n2 && void 0 === n2.constructor;
      }, d.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u3), this.props)), n2 && s(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), b(this));
      }, d.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
      }, d.prototype.render = p, t = [], g.__r = 0, r = 0;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function d2(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
  }
  function p2(n2) {
    return o2 = 1, y2(B2, n2);
  }
  function y2(n2, u3, i3) {
    var o3 = d2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      r2.u = true;
      var f3 = r2.shouldComponentUpdate;
      r2.shouldComponentUpdate = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !f3 || f3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o3.__c.props === n3) && (!f3 || f3.call(this, n3, t3, r3));
      };
    }
    return o3.__N || o3.__;
  }
  function h2(u3, i3) {
    var o3 = d2(t2++, 3);
    !l.__s && z2(o3.__H, i3) && (o3.__ = u3, o3.i = i3, r2.__H.__h.push(o3));
  }
  function s2(u3, i3) {
    var o3 = d2(t2++, 4);
    !l.__s && z2(o3.__H, i3) && (o3.__ = u3, o3.i = i3, r2.__h.push(o3));
  }
  function _2(n2) {
    return o2 = 5, F(function() {
      return { current: n2 };
    }, []);
  }
  function A2(n2, t3, r3) {
    o2 = 6, s2(function() {
      return "function" == typeof n2 ? (n2(t3()), function() {
        return n2(null);
      }) : n2 ? (n2.current = t3(), function() {
        return n2.current = null;
      }) : void 0;
    }, null == r3 ? r3 : r3.concat(n2));
  }
  function F(n2, r3) {
    var u3 = d2(t2++, 7);
    return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function T2(n2, t3) {
    return o2 = 8, F(function() {
      return n2;
    }, t3);
  }
  function q2(n2) {
    var u3 = r2.context[n2.__c], i3 = d2(t2++, 9);
    return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
  }
  function x2(t3, r3) {
    l.useDebugValue && l.useDebugValue(r3 ? r3(t3) : t3);
  }
  function V() {
    var n2 = d2(t2++, 11);
    if (!n2.__) {
      for (var u3 = r2.__v; null !== u3 && !u3.__m && null !== u3.__; )
        u3 = u3.__;
      var i3 = u3.__m || (u3.__m = [0, 0]);
      n2.__ = "P" + i3[0] + "-" + i3[1]++;
    }
    return n2.__;
  }
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  function j2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function w2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function z2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function B2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, g2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = [];
      e2 = l.__b;
      a2 = l.__r;
      v2 = l.diffed;
      l2 = l.__c;
      m2 = l.unmount;
      l.__b = function(n2) {
        r2 = null, e2 && e2(n2);
      }, l.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
        })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [])), u2 = r2;
      }, l.diffed = function(t3) {
        v2 && v2(t3);
        var o3 = t3.__c;
        o3 && o3.__H && (o3.__H.__h.length && (1 !== f2.push(o3) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o3.__H.__.forEach(function(n2) {
          n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
        })), u2 = r2 = null;
      }, l.__c = function(t3, r3) {
        r3.some(function(t4) {
          try {
            t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
              return !n2.__ || w2(n2);
            });
          } catch (u3) {
            r3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), r3 = [], l.__e(u3, t4.__v);
          }
        }), l2 && l2(t3, r3);
      }, l.unmount = function(t3) {
        m2 && m2(t3);
        var r3, u3 = t3.__c;
        u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
          try {
            k2(n2);
          } catch (n3) {
            r3 = n3;
          }
        }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
      };
      g2 = "function" == typeof requestAnimationFrame;
    }
  });

  // ../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/1dc9b23e-9d6d-49a7-a198-095853b9638e/loading-indicator.module.js
  var loading_indicator_module_default;
  var init_loading_indicator_module = __esm({
    "../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/1dc9b23e-9d6d-49a7-a198-095853b9638e/loading-indicator.module.js"() {
      if (document.getElementById("0fea434671") === null) {
        const element = document.createElement("style");
        element.id = "0fea434671";
        element.textContent = `._loadingIndicator_pl5c3_1 {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto;
}

._svg_pl5c3_8 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  animation: _rotating_pl5c3_1 0.5s linear infinite;
  fill: currentColor;
}

@keyframes _rotating_pl5c3_1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osaURBQXdDO0VBQ3hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbG9hZGluZy1pbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBhbmltYXRpb246IHJvdGF0aW5nIDAuNXMgbGluZWFyIGluZmluaXRlO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpbmcge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */`;
        document.head.append(element);
      }
      loading_indicator_module_default = { "loadingIndicator": "_loadingIndicator_pl5c3_1", "svg": "_svg_pl5c3_8", "rotating": "_rotating_pl5c3_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js
  function LoadingIndicator(_a) {
    var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
    return h("div", __spreadProps(__spreadValues({}, rest), { class: loading_indicator_module_default.loadingIndicator }), h("svg", { class: loading_indicator_module_default.svg, style: typeof color === "undefined" ? void 0 : {
      fill: `var(--figma-color-icon-${color})`
    } }, h("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })));
  }
  var init_loading_indicator = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js"() {
      init_preact_module();
      init_loading_indicator_module();
    }
  });

  // ../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/cb3b42b0-4fd0-461e-82f6-6612084e9331/button.module.js
  var button_module_default;
  var init_button_module = __esm({
    "../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/cb3b42b0-4fd0-461e-82f6-6612084e9331/button.module.js"() {
      if (document.getElementById("682cf0633b") === null) {
        const element = document.createElement("style");
        element.id = "682cf0633b";
        element.textContent = `._button_5fxgc_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
}

._fullWidth_5fxgc_7 {
  display: block;
}

._button_5fxgc_1 button {
  display: inline-block;
  height: 32px;
  border-radius: var(--border-radius-6);
}

._disabled_5fxgc_17 button {
  cursor: not-allowed;
}

._fullWidth_5fxgc_7 button {
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._default_5fxgc_29 button {
  padding: 0 14px;
  border: 2px solid transparent;
  background-color: var(--figma-color-bg-brand);
  color: var(--figma-color-text-onbrand);
  line-height: 28px;
}
._default_5fxgc_29:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-brand-strong);
}
._default_5fxgc_29._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 button {
  background-color: var(--figma-color-bg-danger);
  color: var(--figma-color-text-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._secondary_5fxgc_56 button {
  padding: 0 15px;
  border: 1px solid var(--figma-color-border-strong);
  background-color: transparent;
  color: var(--figma-color-text);
  line-height: 30px;
}
._secondary_5fxgc_56:not(._disabled_5fxgc_17) button:focus {
  padding: 0 14px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
  line-height: 28px;
}
._secondary_5fxgc_56._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 button {
  border-color: var(--figma-color-border-danger-strong);
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._loadingIndicator_5fxgc_86 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

._default_5fxgc_29 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-onbrand);
}
._default_5fxgc_29._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._secondary_5fxgc_56 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text);
}
._secondary_5fxgc_56._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._children_5fxgc_122 {
  display: inline;
}
._loading_5fxgc_86 ._children_5fxgc_122 {
  visibility: hidden;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLDZDQUE2QztFQUM3QyxzQ0FBc0M7RUFDdEMsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0RBQWtEO0VBQ2xELDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9EQUFvRDtFQUNwRCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZ1bGxXaWR0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnV0dG9uIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTYpO1xufVxuXG4uZGlzYWJsZWQgYnV0dG9uIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmZ1bGxXaWR0aCBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGVmYXVsdCBidXR0b24ge1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1icmFuZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uYnJhbmQpO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5kZWZhdWx0Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1kaXNhYmxlZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctZGFuZ2VyKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kYW5nZXIpO1xufVxuLmRlZmF1bHQuZGFuZ2VyOm5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xufVxuLmRlZmF1bHQuZGFuZ2VyLmRpc2FibGVkIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWRpc2FibGVkKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkgYnV0dG9uIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItc3Ryb25nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uc2Vjb25kYXJ5Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLnNlY29uZGFyeS5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kYW5nZXIpO1xufVxuLnNlY29uZGFyeS5kYW5nZXI6bm90KC5kaXNhYmxlZCkgYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItZGFuZ2VyLXN0cm9uZyk7XG59XG4uc2Vjb25kYXJ5LmRhbmdlci5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5kZWZhdWx0IC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25icmFuZCk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRhbmdlcik7XG59XG4uZGVmYXVsdC5kYW5nZXIuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRpc2FibGVkKTtcbn1cblxuLnNlY29uZGFyeSAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5zZWNvbmRhcnkuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGFuZ2VyKTtcbn1cbi5zZWNvbmRhcnkuZGFuZ2VyLmRpc2FibGVkIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xufVxuXG4uY2hpbGRyZW4ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ubG9hZGluZyAuY2hpbGRyZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */`;
        document.head.append(element);
      }
      button_module_default = { "button": "_button_5fxgc_1", "fullWidth": "_fullWidth_5fxgc_7", "disabled": "_disabled_5fxgc_17", "default": "_default_5fxgc_29", "danger": "_danger_5fxgc_44", "secondary": "_secondary_5fxgc_56", "loadingIndicator": "_loadingIndicator_5fxgc_86", "children": "_children_5fxgc_122", "loading": "_loading_5fxgc_86" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/button/button.js
  function Button(_a) {
    var _b = _a, { children, danger = false, disabled = false, fullWidth = false, loading = false, onClick, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "danger", "disabled", "fullWidth", "loading", "onClick", "propagateEscapeKeyDown", "secondary"]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return h("div", { class: createClassName([
      button_module_default.button,
      secondary === true ? button_module_default.secondary : button_module_default.default,
      danger === true ? button_module_default.danger : null,
      fullWidth === true ? button_module_default.fullWidth : null,
      disabled === true ? button_module_default.disabled : null,
      loading === true ? button_module_default.loading : null
    ]) }, loading === true ? h("div", { class: button_module_default.loadingIndicator }, h(LoadingIndicator, null)) : null, h("button", __spreadProps(__spreadValues({}, rest), { disabled: disabled === true, onClick: disabled === true || loading === true ? void 0 : onClick, onKeyDown: disabled === true || loading === true ? void 0 : handleKeyDown, tabIndex: disabled === true ? -1 : 0 }), h("div", { class: button_module_default.children }, children)));
  }
  var init_button = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/button/button.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_loading_indicator();
      init_button_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js
  function getCurrentFromRef(ref) {
    if (ref.current === null) {
      throw new Error("`ref.current` is `undefined`");
    }
    return ref.current;
  }
  var init_get_current_from_ref = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js"() {
    }
  });

  // ../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/93992ae7-7f26-4a1d-b6b0-83ec9a67d704/icon-button.module.js
  var icon_button_module_default;
  var init_icon_button_module = __esm({
    "../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/93992ae7-7f26-4a1d-b6b0-83ec9a67d704/icon-button.module.js"() {
      if (document.getElementById("f7a59b4219") === null) {
        const element = document.createElement("style");
        element.id = "f7a59b4219";
        element.textContent = `._iconButton_1bkfg_1 {
  position: relative;
  width: 30px;
  height: 30px;
  border: 2px solid transparent;
  border-radius: var(--border-radius-2);
}

._iconButton_1bkfg_1:not(:disabled) {
  color: var(--figma-color-icon);
}
._iconButton_1bkfg_1:not(:disabled):hover {
  background-color: var(--figma-color-bg-hover);
}
._iconButton_1bkfg_1:not(:disabled):focus {
  border-color: var(--figma-color-border-brand-strong);
}
._iconButton_1bkfg_1:disabled {
  color: var(--figma-color-icon-disabled);
  cursor: not-allowed;
}

._icon_1bkfg_1 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSxvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25CdXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xufVxuXG4uaWNvbkJ1dHRvbjpub3QoOmRpc2FibGVkKSB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uKTtcbn1cbi5pY29uQnV0dG9uOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctaG92ZXIpO1xufVxuLmljb25CdXR0b246bm90KDpkaXNhYmxlZCk6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1icmFuZC1zdHJvbmcpO1xufVxuLmljb25CdXR0b246ZGlzYWJsZWQge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1kaXNhYmxlZCk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      icon_button_module_default = { "iconButton": "_iconButton_1bkfg_1", "icon": "_icon_1bkfg_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/icon-button/icon-button.js
  function IconButton(_a) {
    var _b = _a, { children, disabled = false, onClick, propagateEscapeKeyDown = true } = _b, rest = __objRest(_b, ["children", "disabled", "onClick", "propagateEscapeKeyDown"]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return h("button", __spreadProps(__spreadValues({}, rest), { class: icon_button_module_default.iconButton, disabled: disabled === true, onClick: disabled === true ? void 0 : onClick, onKeyDown: disabled === true ? void 0 : handleKeyDown, tabIndex: disabled === true ? -1 : 0 }), h("div", { class: icon_button_module_default.icon }, children));
  }
  var init_icon_button = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/icon-button/icon-button.js"() {
      init_preact_module();
      init_hooks_module();
      init_icon_button_module();
    }
  });

  // ../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/cb114074-bac5-4223-85fe-f4c04eb42b5f/text.module.js
  var text_module_default;
  var init_text_module = __esm({
    "../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/cb114074-bac5-4223-85fe-f4c04eb42b5f/text.module.js"() {
      if (document.getElementById("dbb80c4971") === null) {
        const element = document.createElement("style");
        element.id = "dbb80c4971";
        element.textContent = `._text_mh6mm_1 {
  padding-top: 1px;
  color: var(--figma-color-text);
  pointer-events: none;
  transform: translateY(4px);
}
._text_mh6mm_1:before {
  display: block;
  height: 0;
  margin-top: -9px;
  content: '';
  pointer-events: none;
}

._numeric_mh6mm_15 {
  font-variant-numeric: tabular-nums;
}

._left_mh6mm_19 {
  text-align: left;
}
._center_mh6mm_22 {
  text-align: center;
}
._right_mh6mm_25 {
  text-align: right;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0L3RleHQubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHQvdGV4dC5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbi50ZXh0OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm51bWVyaWMge1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      text_module_default = { "text": "_text_mh6mm_1", "numeric": "_numeric_mh6mm_15", "left": "_left_mh6mm_19", "center": "_center_mh6mm_22", "right": "_right_mh6mm_25" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/text/text.js
  function Text(_a) {
    var _b = _a, { align = "left", children, numeric = false } = _b, rest = __objRest(_b, ["align", "children", "numeric"]);
    return h("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
      text_module_default.text,
      text_module_default[align],
      numeric === true ? text_module_default.numeric : null
    ]) }), children);
  }
  var init_text = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/text/text.js"() {
      init_preact_module();
      init_create_class_name();
      init_text_module();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, emit;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      emit = typeof window === "undefined" ? function(name, ...args) {
        figma.ui.postMessage([name, ...args]);
      } : function(name, ...args) {
        window.parent.postMessage({
          pluginMessage: [name, ...args]
        }, "*");
      };
      if (typeof window === "undefined") {
        figma.ui.onmessage = function([name, ...args]) {
          invokeEventHandler(name, args);
        };
      } else {
        window.onmessage = function(event) {
          if (typeof event.data.pluginMessage === "undefined") {
            return;
          }
          const [name, ...args] = event.data.pluginMessage;
          invokeEventHandler(name, args);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/mixed-values.js
  var MIXED_NUMBER, MIXED_STRING;
  var init_mixed_values = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/mixed-values.js"() {
      MIXED_NUMBER = 999999999999999;
      MIXED_STRING = "999999999999999";
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/number/private/regex.js
  var floatOperandRegex, integerOperandRegex, operatorRegex, operatorSuffixRegex, numbersRegex, invalidCharactersRegex;
  var init_regex = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/number/private/regex.js"() {
      floatOperandRegex = /^-?\d*(?:\.\d*)?$/;
      integerOperandRegex = /^-?\d*$/;
      operatorRegex = /[+\-*/]/;
      operatorSuffixRegex = /[+\-*/]$/;
      numbersRegex = /\d/;
      invalidCharactersRegex = /[^\d.+\-*/]/;
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/number/evaluate-numeric-expression.js
  function evaluateNumericExpression(value) {
    if (value === "" || numbersRegex.test(value) === false || invalidCharactersRegex.test(value) === true) {
      return null;
    }
    if (operatorRegex.test(value) === true) {
      if (operatorSuffixRegex.test(value) === true) {
        return eval(value.substring(0, value.length - 1));
      }
      return eval(value);
    }
    return parseFloat(value);
  }
  var init_evaluate_numeric_expression = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/number/evaluate-numeric-expression.js"() {
      init_regex();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/number/is-valid-numeric-input.js
  function isValidNumericInput(value2, options = { integersOnly: false }) {
    const split = (value2[0] === "-" ? value2.substring(1) : value2).split(operatorRegex);
    let i3 = -1;
    while (++i3 < split.length) {
      const operand = split[i3];
      if (operand === "" && i3 !== split.length - 1 || (options.integersOnly === true ? integerOperandRegex : floatOperandRegex).test(operand) === false) {
        return false;
      }
    }
    return true;
  }
  var init_is_valid_numeric_input = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/number/is-valid-numeric-input.js"() {
      init_regex();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
      init_mixed_values();
      init_evaluate_numeric_expression();
      init_is_valid_numeric_input();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/private/is-keycode-character-generating.js
  function isKeyCodeCharacterGenerating(keyCode) {
    return keyCode === 32 || keyCode >= 48 && keyCode <= 57 || keyCode >= 65 && keyCode <= 90 || keyCode >= 96 && keyCode <= 105 || keyCode >= 186 && keyCode <= 192 || keyCode >= 219 && keyCode <= 222;
  }
  var init_is_keycode_character_generating = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/private/is-keycode-character-generating.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox/private/raw-textbox.js
  function RawTextbox(_a) {
    var _b = _a, { disabled = false, name, onInput = function() {
    }, onValueInput = function() {
    }, password = false, placeholder, propagateEscapeKeyDown = true, revertOnEscapeKeyDown = false, spellCheck = false, validateOnBlur, value: value2 } = _b, rest = __objRest(_b, ["disabled", "name", "onInput", "onValueInput", "password", "placeholder", "propagateEscapeKeyDown", "revertOnEscapeKeyDown", "spellCheck", "validateOnBlur", "value"]);
    const inputElementRef = _2(null);
    const revertOnEscapeKeyDownRef = _2(false);
    const [originalValue, setOriginalValue] = p2(EMPTY_STRING);
    const setInputElementValue = T2(function(value3) {
      const inputElement = getCurrentFromRef(inputElementRef);
      inputElement.value = value3;
      const inputEvent = document.createEvent("Event");
      inputEvent.initEvent("input", true, true);
      inputElement.dispatchEvent(inputEvent);
    }, []);
    const handleBlur = T2(function() {
      if (revertOnEscapeKeyDownRef.current === true) {
        revertOnEscapeKeyDownRef.current = false;
        return;
      }
      if (typeof validateOnBlur !== "undefined") {
        const result = validateOnBlur(value2);
        if (typeof result === "string") {
          setInputElementValue(result);
          setOriginalValue(EMPTY_STRING);
          return;
        }
        if (result === false) {
          if (value2 !== originalValue) {
            setInputElementValue(originalValue);
          }
          setOriginalValue(EMPTY_STRING);
          return;
        }
      }
      setOriginalValue(EMPTY_STRING);
    }, [originalValue, setInputElementValue, validateOnBlur, value2]);
    const handleFocus = T2(function(event) {
      setOriginalValue(value2);
      event.currentTarget.select();
    }, [value2]);
    const handleInput = T2(function(event) {
      onValueInput(event.currentTarget.value, name);
      onInput(event);
    }, [name, onInput, onValueInput]);
    const handleKeyDown = T2(function(event) {
      const key = event.key;
      if (key === "Escape") {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation();
        }
        if (revertOnEscapeKeyDown === true) {
          revertOnEscapeKeyDownRef.current = true;
          setInputElementValue(originalValue);
          setOriginalValue(EMPTY_STRING);
        }
        event.currentTarget.blur();
        return;
      }
      if (key === "Enter") {
        event.currentTarget.blur();
        return;
      }
      if (value2 === MIXED_STRING && isKeyCodeCharacterGenerating(event.keyCode) === false) {
        event.preventDefault();
        event.currentTarget.select();
      }
    }, [
      originalValue,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setInputElementValue,
      value2
    ]);
    const handleMouseUp = T2(function(event) {
      if (value2 === MIXED_STRING) {
        event.preventDefault();
      }
    }, [value2]);
    return h("input", __spreadProps(__spreadValues({}, rest), { ref: inputElementRef, disabled: disabled === true, name, onBlur: handleBlur, onFocus: handleFocus, onInput: handleInput, onKeyDown: handleKeyDown, onMouseUp: handleMouseUp, placeholder, spellcheck: spellCheck, tabIndex: disabled === true ? -1 : 0, type: password === true ? "password" : "text", value: value2 === MIXED_STRING ? "Mixed" : value2 }));
  }
  var EMPTY_STRING;
  var init_raw_textbox = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox/private/raw-textbox.js"() {
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_get_current_from_ref();
      init_is_keycode_character_generating();
      EMPTY_STRING = "";
    }
  });

  // ../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/5b567294-4cc0-43fc-8178-7fd905116271/textbox.module.js
  var textbox_module_default;
  var init_textbox_module = __esm({
    "../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/5b567294-4cc0-43fc-8178-7fd905116271/textbox.module.js"() {
      if (document.getElementById("764f562f4f") === null) {
        const element = document.createElement("style");
        element.id = "764f562f4f";
        element.textContent = `._textbox_sir3b_1 {
  position: relative;
  z-index: var(--z-index-1);
}
._textbox_sir3b_1:focus-within {
  z-index: var(--z-index-2); /* Stack \`.textbox\` over its sibling elements */
}

._input_sir3b_9 {
  display: block;
  width: 100%;
  height: 28px;
  padding: 0 var(--space-extra-small);
  background-color: transparent;
  color: var(--figma-color-text);
}
._disabled_sir3b_17 ._input_sir3b_9 {
  color: var(--figma-color-text-disabled);
  cursor: not-allowed;
}
._hasIcon_sir3b_21 ._input_sir3b_9 {
  padding-left: 32px;
}

._input_sir3b_9::placeholder {
  color: var(--figma-color-text-tertiary);
}

._icon_sir3b_29 {
  position: absolute;
  top: 14px;
  left: 16px;
  color: var(--figma-color-icon-secondary);
  pointer-events: none; /* so that clicking the icon focuses the textbox */
  text-align: center;
  transform: translate(-50%, -50%);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._icon_sir3b_29 {
  color: var(--figma-color-icon-brand);
}
._disabled_sir3b_17 ._icon_sir3b_29 {
  color: var(--figma-color-icon-disabled);
}

._icon_sir3b_29 svg {
  fill: currentColor;
}

._border_sir3b_49 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
  pointer-events: none;
}
._hasBorder_sir3b_59 ._border_sir3b_49,
._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._border_sir3b_49 {
  border-color: var(--figma-color-border);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._border_sir3b_49 {
  top: -1px;
  bottom: -1px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
}

._underline_sir3b_70 {
  position: absolute;
  right: var(--space-extra-small);
  bottom: 0;
  left: var(--space-extra-small);
  height: 1px;
  background-color: var(--figma-color-border);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._underline_sir3b_70,
._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._underline_sir3b_70 {
  background-color: transparent;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gvdGV4dGJveC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCLEVBQUUsK0NBQStDO0FBQzVFOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdDQUF3QztFQUN4QyxvQkFBb0IsRUFBRSxrREFBa0Q7RUFDeEUsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLDJDQUEyQztBQUM3QztBQUNBOztFQUVFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvdGV4dGJveC90ZXh0Ym94L3RleHRib3gubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiB2YXIoLS16LWluZGV4LTEpO1xufVxuLnRleHRib3g6Zm9jdXMtd2l0aGluIHtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0yKTsgLyogU3RhY2sgYC50ZXh0Ym94YCBvdmVyIGl0cyBzaWJsaW5nIGVsZW1lbnRzICovXG59XG5cbi5pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5kaXNhYmxlZCAuaW5wdXQge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uaGFzSWNvbiAuaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG59XG5cbi5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC10ZXJ0aWFyeSk7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLXNlY29uZGFyeSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBzbyB0aGF0IGNsaWNraW5nIHRoZSBpY29uIGZvY3VzZXMgdGhlIHRleHRib3ggKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5pY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tYnJhbmQpO1xufVxuLmRpc2FibGVkIC5pY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tZGlzYWJsZWQpO1xufVxuXG4uaWNvbiBzdmcge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbi5ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMik7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmhhc0JvcmRlciAuYm9yZGVyLFxuLnRleHRib3g6bm90KC5kaXNhYmxlZCk6aG92ZXIgLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5ib3JkZXIge1xuICB0b3A6IC0xcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG5cbi51bmRlcmxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC51bmRlcmxpbmUsXG4udGV4dGJveDpub3QoLmRpc2FibGVkKTpob3ZlciAudW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      textbox_module_default = { "textbox": "_textbox_sir3b_1", "input": "_input_sir3b_9", "disabled": "_disabled_sir3b_17", "hasIcon": "_hasIcon_sir3b_21", "icon": "_icon_sir3b_29", "border": "_border_sir3b_49", "hasBorder": "_hasBorder_sir3b_59", "underline": "_underline_sir3b_70" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox/textbox.js
  function Textbox(_a) {
    var _b = _a, { icon, variant } = _b, rest = __objRest(_b, ["icon", "variant"]);
    if (typeof icon === "string" && icon.length !== 1) {
      throw new Error(`String \`icon\` must be a single character: ${icon}`);
    }
    return h("div", { class: createClassName([
      textbox_module_default.textbox,
      typeof variant === "undefined" ? null : variant === "border" ? textbox_module_default.hasBorder : null,
      typeof icon === "undefined" ? null : textbox_module_default.hasIcon,
      rest.disabled === true ? textbox_module_default.disabled : null
    ]) }, h(RawTextbox, __spreadProps(__spreadValues({}, rest), { class: textbox_module_default.input })), typeof icon === "undefined" ? null : h("div", { class: textbox_module_default.icon }, icon), h("div", { class: textbox_module_default.border }), variant === "underline" ? h("div", { class: textbox_module_default.underline }) : null);
  }
  var init_textbox = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox/textbox.js"() {
      init_preact_module();
      init_create_class_name();
      init_raw_textbox();
      init_textbox_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/private/compute-next-value.js
  function computeNextValue(inputElement, insertedString) {
    const value2 = inputElement.value;
    const selectionStart = inputElement.selectionStart;
    const selectionEnd = inputElement.selectionEnd;
    return `${value2.substring(0, selectionStart === null ? 0 : selectionStart)}${insertedString}${value2.substring(selectionEnd === null ? 0 : selectionEnd)}`;
  }
  var init_compute_next_value = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/private/compute-next-value.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/private/format-evaluated-value.js
  function formatEvaluatedValue(evaluatedValue, value2, suffix) {
    if (evaluatedValue === null) {
      return EMPTY_STRING2;
    }
    const significantFiguresCount = countSignificantFigures(nonDigitRegex.test(value2) === true ? `${evaluatedValue}` : value2);
    return appendSuffix(formatSignificantFigures(evaluatedValue, significantFiguresCount), suffix);
  }
  function countSignificantFigures(value2) {
    const result = fractionalPartRegex.exec(value2);
    if (result === null) {
      return 0;
    }
    return result[1].length;
  }
  function formatSignificantFigures(value2, significantFiguresCount) {
    if (significantFiguresCount === 0) {
      return `${value2}`;
    }
    const result = fractionalPartRegex.exec(`${value2}`);
    if (result === null) {
      return `${value2}.${"0".repeat(significantFiguresCount)}`;
    }
    const fractionalPart = result[1];
    const count = significantFiguresCount - fractionalPart.length;
    return `${value2}${"0".repeat(count)}`;
  }
  function appendSuffix(string, suffix) {
    if (typeof suffix === "undefined") {
      return string;
    }
    if (string === EMPTY_STRING2) {
      return EMPTY_STRING2;
    }
    return `${string}${suffix}`;
  }
  var EMPTY_STRING2, fractionalPartRegex, nonDigitRegex;
  var init_format_evaluated_value = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/private/format-evaluated-value.js"() {
      EMPTY_STRING2 = "";
      fractionalPartRegex = /\.([^.]+)/;
      nonDigitRegex = /[^\d.]/;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/private/raw-textbox-numeric.js
  function RawTextboxNumeric(_a) {
    var _b = _a, { disabled = false, incrementBig = 10, incrementSmall = 1, integer = false, maximum, minimum, name, onInput = function() {
    }, onNumericValueInput = function() {
    }, onValueInput = function() {
    }, placeholder, propagateEscapeKeyDown = true, revertOnEscapeKeyDown = false, suffix, validateOnBlur, value: value2 } = _b, rest = __objRest(_b, ["disabled", "incrementBig", "incrementSmall", "integer", "maximum", "minimum", "name", "onInput", "onNumericValueInput", "onValueInput", "placeholder", "propagateEscapeKeyDown", "revertOnEscapeKeyDown", "suffix", "validateOnBlur", "value"]);
    if (typeof minimum !== "undefined" && typeof maximum !== "undefined" && minimum >= maximum) {
      throw new Error("`minimum` must be less than `maximum`");
    }
    const inputElementRef = _2(null);
    const revertOnEscapeKeyDownRef = _2(false);
    const [originalValue, setOriginalValue] = p2(EMPTY_STRING3);
    const setInputElementValue = T2(function(value3) {
      const inputElement = getCurrentFromRef(inputElementRef);
      inputElement.value = value3;
      const inputEvent = document.createEvent("Event");
      inputEvent.initEvent("input", true, true);
      inputElement.dispatchEvent(inputEvent);
    }, []);
    const handleBlur = T2(function() {
      if (revertOnEscapeKeyDownRef.current === true) {
        revertOnEscapeKeyDownRef.current = false;
        return;
      }
      if (typeof validateOnBlur !== "undefined") {
        const evaluatedValue = evaluateValue(value2, suffix);
        const result = validateOnBlur(evaluatedValue);
        if (typeof result === "number") {
          setInputElementValue(formatEvaluatedValue(result, value2, suffix));
          setOriginalValue(EMPTY_STRING3);
          return;
        }
        if (result === null) {
          setInputElementValue(EMPTY_STRING3);
          setOriginalValue(EMPTY_STRING3);
          return;
        }
        if (result === false) {
          if (value2 !== originalValue) {
            setInputElementValue(originalValue);
          }
          setOriginalValue(EMPTY_STRING3);
          return;
        }
      }
      if (typeof suffix !== "undefined" && value2 === suffix) {
        setInputElementValue(EMPTY_STRING3);
        setOriginalValue(EMPTY_STRING3);
        return;
      }
      if (value2 !== EMPTY_STRING3 && value2 !== MIXED_STRING) {
        const evaluatedValue = evaluateValue(value2, suffix);
        const formattedValue = formatEvaluatedValue(evaluatedValue, value2, suffix);
        if (value2 !== formattedValue) {
          setInputElementValue(formattedValue);
        }
      }
      setOriginalValue(EMPTY_STRING3);
    }, [originalValue, setInputElementValue, suffix, validateOnBlur, value2]);
    const handleFocus = T2(function(event) {
      setOriginalValue(value2);
      event.currentTarget.select();
    }, [value2]);
    const handleInput = T2(function(event) {
      onInput(event);
      const value3 = event.currentTarget.value;
      onValueInput(value3, name);
      const evaluatedValue = evaluateValue(value3, suffix);
      onNumericValueInput(evaluatedValue, name);
    }, [name, onInput, onNumericValueInput, onValueInput, suffix]);
    const handleKeyDown = T2(function(event) {
      const key = event.key;
      if (key === "Escape") {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation();
        }
        if (revertOnEscapeKeyDown === true) {
          revertOnEscapeKeyDownRef.current = true;
          setInputElementValue(originalValue);
          setOriginalValue(EMPTY_STRING3);
        }
        event.currentTarget.blur();
        return;
      }
      if (key === "Enter") {
        event.currentTarget.blur();
        return;
      }
      const element = event.currentTarget;
      if (key === "ArrowDown" || key === "ArrowUp") {
        const delta = event.shiftKey === true ? incrementBig : incrementSmall;
        if (value2 === EMPTY_STRING3 || value2 === MIXED_STRING) {
          event.preventDefault();
          const startingValue = function() {
            if (typeof minimum !== "undefined" && minimum > 0) {
              return minimum;
            }
            if (typeof maximum !== "undefined" && maximum < 0) {
              return maximum;
            }
            return 0;
          }();
          const newValue2 = restrictValue(evaluateValueWithDelta(startingValue, key === "ArrowDown" ? -1 * delta : delta), minimum, maximum);
          const formattedValue2 = formatEvaluatedValue(newValue2, value2, suffix);
          element.value = formattedValue2;
          element.select();
          handleInput(event);
          return;
        }
        const evaluatedValue = evaluateValue(value2, suffix);
        if (evaluatedValue === null) {
          throw new Error("Invariant violation");
        }
        event.preventDefault();
        const newValue = restrictValue(evaluateValueWithDelta(evaluatedValue, key === "ArrowDown" ? -1 * delta : delta), minimum, maximum);
        const formattedValue = formatEvaluatedValue(newValue, value2, suffix);
        if (formattedValue === value2) {
          return;
        }
        element.value = formattedValue;
        element.select();
        handleInput(event);
        return;
      }
      if (event.ctrlKey === true || event.metaKey === true) {
        return;
      }
      if (isKeyCodeCharacterGenerating(event.keyCode) === true) {
        const nextValue = trimSuffix(value2 === MIXED_STRING ? event.key : computeNextValue(element, event.key), suffix);
        if (isValidNumericInput(nextValue, { integersOnly: integer }) === false) {
          event.preventDefault();
          return;
        }
        if (typeof minimum === "undefined" && typeof maximum === "undefined") {
          return;
        }
        const evaluatedValue = evaluateNumericExpression(nextValue);
        if (evaluatedValue === null) {
          return;
        }
        if (typeof minimum !== "undefined" && evaluatedValue < minimum || typeof maximum !== "undefined" && evaluatedValue > maximum) {
          event.preventDefault();
        }
      }
    }, [
      handleInput,
      incrementBig,
      incrementSmall,
      integer,
      maximum,
      minimum,
      originalValue,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setInputElementValue,
      suffix,
      value2
    ]);
    const handleMouseUp = T2(function(event) {
      if (value2 !== MIXED_STRING) {
        return;
      }
      event.preventDefault();
    }, [value2]);
    const handlePaste = T2(function(event) {
      if (event.clipboardData === null) {
        throw new Error("`event.clipboardData` is `null`");
      }
      const nextValue = trimSuffix(computeNextValue(event.currentTarget, event.clipboardData.getData("Text")), suffix);
      if (isValidNumericInput(nextValue, {
        integersOnly: integer
      }) === false) {
        event.preventDefault();
      }
    }, [integer, suffix]);
    return h("input", __spreadProps(__spreadValues({}, rest), { ref: inputElementRef, disabled: disabled === true, name, onBlur: handleBlur, onFocus: handleFocus, onInput: handleInput, onKeyDown: handleKeyDown, onMouseUp: handleMouseUp, onPaste: handlePaste, placeholder, spellcheck: false, tabIndex: disabled === true ? -1 : 0, type: "text", value: value2 === MIXED_STRING ? "Mixed" : value2 }));
  }
  function restrictValue(value2, minimum, maximum) {
    if (typeof minimum !== "undefined") {
      if (typeof maximum !== "undefined") {
        return Math.min(Math.max(value2, minimum), maximum);
      }
      return Math.max(value2, minimum);
    }
    if (typeof maximum !== "undefined") {
      return Math.min(value2, maximum);
    }
    return value2;
  }
  function evaluateValue(value2, suffix) {
    if (value2 === MIXED_STRING) {
      return MIXED_NUMBER;
    }
    if (value2 === EMPTY_STRING3) {
      return null;
    }
    return evaluateNumericExpression(trimSuffix(value2, suffix));
  }
  function evaluateValueWithDelta(value2, delta) {
    return parseFloat((value2 + delta).toFixed(FRACTION_DIGITS));
  }
  function trimSuffix(string, suffix) {
    if (typeof suffix === "undefined") {
      return string;
    }
    return string.replace(new RegExp(`${suffix}$`), EMPTY_STRING3);
  }
  var FRACTION_DIGITS, EMPTY_STRING3;
  var init_raw_textbox_numeric = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/private/raw-textbox-numeric.js"() {
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_get_current_from_ref();
      init_compute_next_value();
      init_is_keycode_character_generating();
      init_format_evaluated_value();
      FRACTION_DIGITS = 3;
      EMPTY_STRING3 = "";
    }
  });

  // ../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/a6c9b26c-4006-459a-b0da-96e1a8b95fe2/textbox.module.js
  var textbox_module_default2;
  var init_textbox_module2 = __esm({
    "../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/a6c9b26c-4006-459a-b0da-96e1a8b95fe2/textbox.module.js"() {
      if (document.getElementById("764f562f4f") === null) {
        const element = document.createElement("style");
        element.id = "764f562f4f";
        element.textContent = `._textbox_sir3b_1 {
  position: relative;
  z-index: var(--z-index-1);
}
._textbox_sir3b_1:focus-within {
  z-index: var(--z-index-2); /* Stack \`.textbox\` over its sibling elements */
}

._input_sir3b_9 {
  display: block;
  width: 100%;
  height: 28px;
  padding: 0 var(--space-extra-small);
  background-color: transparent;
  color: var(--figma-color-text);
}
._disabled_sir3b_17 ._input_sir3b_9 {
  color: var(--figma-color-text-disabled);
  cursor: not-allowed;
}
._hasIcon_sir3b_21 ._input_sir3b_9 {
  padding-left: 32px;
}

._input_sir3b_9::placeholder {
  color: var(--figma-color-text-tertiary);
}

._icon_sir3b_29 {
  position: absolute;
  top: 14px;
  left: 16px;
  color: var(--figma-color-icon-secondary);
  pointer-events: none; /* so that clicking the icon focuses the textbox */
  text-align: center;
  transform: translate(-50%, -50%);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._icon_sir3b_29 {
  color: var(--figma-color-icon-brand);
}
._disabled_sir3b_17 ._icon_sir3b_29 {
  color: var(--figma-color-icon-disabled);
}

._icon_sir3b_29 svg {
  fill: currentColor;
}

._border_sir3b_49 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
  pointer-events: none;
}
._hasBorder_sir3b_59 ._border_sir3b_49,
._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._border_sir3b_49 {
  border-color: var(--figma-color-border);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._border_sir3b_49 {
  top: -1px;
  bottom: -1px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
}

._underline_sir3b_70 {
  position: absolute;
  right: var(--space-extra-small);
  bottom: 0;
  left: var(--space-extra-small);
  height: 1px;
  background-color: var(--figma-color-border);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._underline_sir3b_70,
._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._underline_sir3b_70 {
  background-color: transparent;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gvdGV4dGJveC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCLEVBQUUsK0NBQStDO0FBQzVFOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdDQUF3QztFQUN4QyxvQkFBb0IsRUFBRSxrREFBa0Q7RUFDeEUsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLDZCQUE2QjtFQUM3QixxQ0FBcUM7RUFDckMsb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFNBQVM7RUFDVCw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLDJDQUEyQztBQUM3QztBQUNBOztFQUVFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvdGV4dGJveC90ZXh0Ym94L3RleHRib3gubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiB2YXIoLS16LWluZGV4LTEpO1xufVxuLnRleHRib3g6Zm9jdXMtd2l0aGluIHtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0yKTsgLyogU3RhY2sgYC50ZXh0Ym94YCBvdmVyIGl0cyBzaWJsaW5nIGVsZW1lbnRzICovXG59XG5cbi5pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5kaXNhYmxlZCAuaW5wdXQge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uaGFzSWNvbiAuaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG59XG5cbi5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC10ZXJ0aWFyeSk7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLXNlY29uZGFyeSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBzbyB0aGF0IGNsaWNraW5nIHRoZSBpY29uIGZvY3VzZXMgdGhlIHRleHRib3ggKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5pY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tYnJhbmQpO1xufVxuLmRpc2FibGVkIC5pY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tZGlzYWJsZWQpO1xufVxuXG4uaWNvbiBzdmcge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbi5ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMik7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmhhc0JvcmRlciAuYm9yZGVyLFxuLnRleHRib3g6bm90KC5kaXNhYmxlZCk6aG92ZXIgLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5ib3JkZXIge1xuICB0b3A6IC0xcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG5cbi51bmRlcmxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyKTtcbn1cbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC51bmRlcmxpbmUsXG4udGV4dGJveDpub3QoLmRpc2FibGVkKTpob3ZlciAudW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      textbox_module_default2 = { "textbox": "_textbox_sir3b_1", "input": "_input_sir3b_9", "disabled": "_disabled_sir3b_17", "hasIcon": "_hasIcon_sir3b_21", "icon": "_icon_sir3b_29", "border": "_border_sir3b_49", "hasBorder": "_hasBorder_sir3b_59", "underline": "_underline_sir3b_70" };
    }
  });

  // ../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/00260309-6b73-457f-a305-330fd6333ffc/textbox-numeric.module.js
  var textbox_numeric_module_default;
  var init_textbox_numeric_module = __esm({
    "../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/00260309-6b73-457f-a305-330fd6333ffc/textbox-numeric.module.js"() {
      if (document.getElementById("6d1a70f486") === null) {
        const element = document.createElement("style");
        element.id = "6d1a70f486";
        element.textContent = `._input_1byj7_1::-webkit-inner-spin-button,
._input_1byj7_1::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gtbnVtZXJpYy90ZXh0Ym94LW51bWVyaWMubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHRib3gvdGV4dGJveC1udW1lcmljL3RleHRib3gtbnVtZXJpYy5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuLmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuIl19 */`;
        document.head.append(element);
      }
      textbox_numeric_module_default = { "input": "_input_1byj7_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/textbox-numeric.js
  function TextboxNumeric(_a) {
    var _b = _a, { icon, variant } = _b, rest = __objRest(_b, ["icon", "variant"]);
    if (typeof icon === "string" && icon.length !== 1) {
      throw new Error(`String \`icon\` must be a single character: ${icon}`);
    }
    return h("div", { class: createClassName([
      textbox_module_default2.textbox,
      typeof variant === "undefined" ? null : variant === "border" ? textbox_module_default2.hasBorder : null,
      typeof icon === "undefined" ? null : textbox_module_default2.hasIcon,
      rest.disabled === true ? textbox_module_default2.disabled : null
    ]) }, h(RawTextboxNumeric, __spreadProps(__spreadValues({}, rest), { class: createClassName([
      textbox_module_default2.input,
      textbox_numeric_module_default.input
    ]) })), typeof icon === "undefined" ? null : h("div", { class: textbox_module_default2.icon }, icon), h("div", { class: textbox_module_default2.border }), variant === "underline" ? h("div", { class: textbox_module_default2.underline }) : null);
  }
  var init_textbox_numeric = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox-numeric/textbox-numeric.js"() {
      init_preact_module();
      init_create_class_name();
      init_textbox_module2();
      init_raw_textbox_numeric();
      init_textbox_numeric_module();
    }
  });

  // ../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/364db71c-0c83-46e0-89a1-c26ff8113004/muted.module.js
  var muted_module_default;
  var init_muted_module = __esm({
    "../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/364db71c-0c83-46e0-89a1-c26ff8113004/muted.module.js"() {
      if (document.getElementById("3ad3f81352") === null) {
        const element = document.createElement("style");
        element.id = "3ad3f81352";
        element.textContent = `._muted_139yx_1 {
  color: var(--figma-color-text-secondary);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaW5saW5lLXRleHQvbXV0ZWQvbXV0ZWQubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUF3QztBQUMxQyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2lubGluZS10ZXh0L211dGVkL211dGVkLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXV0ZWQge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      muted_module_default = { "muted": "_muted_139yx_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/inline-text/muted/muted.js
  function Muted(_a) {
    var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
    return h("span", __spreadProps(__spreadValues({}, rest), { class: muted_module_default.muted }), children);
  }
  var init_muted = __esm({
    "node_modules/@create-figma-plugin/ui/lib/inline-text/muted/muted.js"() {
      init_preact_module();
      init_muted_module();
    }
  });

  // ../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/67092af2-6b77-4f3c-ad34-46eae24d0566/columns.module.js
  var columns_module_default;
  var init_columns_module = __esm({
    "../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/67092af2-6b77-4f3c-ad34-46eae24d0566/columns.module.js"() {
      if (document.getElementById("df74af6138") === null) {
        const element = document.createElement("style");
        element.id = "df74af6138";
        element.textContent = `._columns_ybv3x_1 {
  display: flex;
}
._extraSmall_ybv3x_4 {
  margin-left: calc(-1 * var(--space-extra-small));
}
._small_ybv3x_7 {
  margin-left: calc(-1 * var(--space-small));
}
._medium_ybv3x_10 {
  margin-left: calc(-1 * var(--space-medium));
}
._large_ybv3x_13 {
  margin-left: calc(-1 * var(--space-large));
}
._extraLarge_ybv3x_16 {
  margin-left: calc(-1 * var(--space-extra-large));
}

._child_ybv3x_20 {
  flex-grow: 1;
}
._extraSmall_ybv3x_4 > ._child_ybv3x_20 {
  padding-left: var(--space-extra-small);
}
._small_ybv3x_7 > ._child_ybv3x_20 {
  padding-left: var(--space-small);
}
._medium_ybv3x_10 > ._child_ybv3x_20 {
  padding-left: var(--space-medium);
}
._large_ybv3x_13 > ._child_ybv3x_20 {
  padding-left: var(--space-large);
}
._extraLarge_ybv3x_16 > ._child_ybv3x_20 {
  padding-left: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbHVtbnMvY29sdW1ucy5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9sYXlvdXQvY29sdW1ucy9jb2x1bW5zLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZXh0cmFTbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpKTtcbn1cbi5zbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tc3BhY2Utc21hbGwpKTtcbn1cbi5tZWRpdW0ge1xuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLXNwYWNlLW1lZGl1bSkpO1xufVxuLmxhcmdlIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1zcGFjZS1sYXJnZSkpO1xufVxuLmV4dHJhTGFyZ2Uge1xuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKSk7XG59XG5cbi5jaGlsZCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5leHRyYVNtYWxsID4gLmNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwgPiAuY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cbi5tZWRpdW0gPiAuY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG4ubGFyZ2UgPiAuY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlID4gLmNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      columns_module_default = { "columns": "_columns_ybv3x_1", "extraSmall": "_extraSmall_ybv3x_4", "small": "_small_ybv3x_7", "medium": "_medium_ybv3x_10", "large": "_large_ybv3x_13", "extraLarge": "_extraLarge_ybv3x_16", "child": "_child_ybv3x_20" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/columns/columns.js
  function Columns(_a) {
    var _b = _a, { children, space } = _b, rest = __objRest(_b, ["children", "space"]);
    return h("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
      columns_module_default.columns,
      typeof space === "undefined" ? null : columns_module_default[space]
    ]) }), x(children).map(function(element, index) {
      return h("div", { key: index, class: columns_module_default.child }, element);
    }));
  }
  var init_columns = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/columns/columns.js"() {
      init_preact_module();
      init_create_class_name();
      init_columns_module();
    }
  });

  // ../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/d6be812d-301a-49e0-af20-4d2c6fefc033/container.module.js
  var container_module_default;
  var init_container_module = __esm({
    "../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/d6be812d-301a-49e0-af20-4d2c6fefc033/container.module.js"() {
      if (document.getElementById("1df79ba54b") === null) {
        const element = document.createElement("style");
        element.id = "1df79ba54b";
        element.textContent = `._extraSmall_1oe77_1 {
  padding: 0 var(--space-extra-small);
}
._small_1oe77_4 {
  padding: 0 var(--space-small);
}
._medium_1oe77_7 {
  padding: 0 var(--space-medium);
}
._large_1oe77_10 {
  padding: 0 var(--space-large);
}
._extraLarge_1oe77_13 {
  padding: 0 var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYVNtYWxsIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cbi5tZWRpdW0ge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG4ubGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      container_module_default = { "extraSmall": "_extraSmall_1oe77_1", "small": "_small_1oe77_4", "medium": "_medium_1oe77_7", "large": "_large_1oe77_10", "extraLarge": "_extraLarge_1oe77_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/container/container.js
  function Container(_a) {
    var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
    return h("div", __spreadProps(__spreadValues({}, rest), { class: container_module_default[space] }));
  }
  var init_container = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/container/container.js"() {
      init_preact_module();
      init_container_module();
    }
  });

  // ../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/95292d9b-7c33-4593-8950-1faf7e20e008/vertical-space.module.js
  var vertical_space_module_default;
  var init_vertical_space_module = __esm({
    "../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/95292d9b-7c33-4593-8950-1faf7e20e008/vertical-space.module.js"() {
      if (document.getElementById("b18896852c") === null) {
        const element = document.createElement("style");
        element.id = "b18896852c";
        element.textContent = `._extraSmall_zc4n0_1 {
  height: var(--space-extra-small);
}
._small_zc4n0_4 {
  height: var(--space-small);
}
._medium_zc4n0_7 {
  height: var(--space-medium);
}
._large_zc4n0_10 {
  height: var(--space-large);
}
._extraLarge_zc4n0_13 {
  height: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L3ZlcnRpY2FsLXNwYWNlL3ZlcnRpY2FsLXNwYWNlLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2xheW91dC92ZXJ0aWNhbC1zcGFjZS92ZXJ0aWNhbC1zcGFjZS5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cbi5zbWFsbCB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuLm1lZGl1bSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cbi5sYXJnZSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuLmV4dHJhTGFyZ2Uge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      vertical_space_module_default = { "extraSmall": "_extraSmall_zc4n0_1", "small": "_small_zc4n0_4", "medium": "_medium_zc4n0_7", "large": "_large_zc4n0_10", "extraLarge": "_extraLarge_zc4n0_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js
  function VerticalSpace(_a) {
    var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
    return h("div", __spreadProps(__spreadValues({}, rest), { class: vertical_space_module_default[space] }));
  }
  var init_vertical_space = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js"() {
      init_preact_module();
      init_vertical_space_module();
    }
  });

  // ../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/bf8f5cb2-5ab8-4f6d-96e7-ce6724dfc345/base.js
  var init_base = __esm({
    "../../../../private/var/folders/wt/7_f5pr854wz3bzqcbfyfwqh40000gn/T/bf8f5cb2-5ab8-4f6d-96e7-ce6724dfc345/base.js"() {
      if (document.getElementById("a5d10d65cc") === null) {
        const element = document.createElement("style");
        element.id = "a5d10d65cc";
        element.textContent = `@import url('https://fonts.googleapis.com/css?family=Inter:400,600&display=swap');

:root {
  /* border-radius */
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  /* box-shadow */
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  /* font */
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  /* opacity */
  --opacity-30: 0.3;
  /* space */
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  /* z-index */
  --z-index-1: 1;
  --z-index-2: 2;
}

.figma-dark {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

::selection {
  background-color: var(--figma-color-bg-onselected);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      P(h(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_button();
      init_icon_button();
      init_text();
      init_textbox();
      init_textbox_numeric();
      init_muted();
      init_columns();
      init_container();
      init_vertical_space();
      init_render();
    }
  });

  // node_modules/react-icons/lib/esm/iconsManifest.js
  var init_iconsManifest = __esm({
    "node_modules/react-icons/lib/esm/iconsManifest.js"() {
    }
  });

  // node_modules/preact/compat/dist/compat.module.js
  function g3(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function C2(n2, t3) {
    for (var e3 in n2)
      if ("__source" !== e3 && !(e3 in t3))
        return true;
    for (var r3 in t3)
      if ("__source" !== r3 && n2[r3] !== t3[r3])
        return true;
    return false;
  }
  function E(n2, t3) {
    return n2 === t3 && (0 !== n2 || 1 / n2 == 1 / t3) || n2 != n2 && t3 != t3;
  }
  function w3(n2) {
    this.props = n2;
  }
  function R(n2, e3) {
    function r3(n3) {
      var t3 = this.props.ref, r4 = t3 == n3.ref;
      return !r4 && t3 && (t3.call ? t3(null) : t3.current = null), e3 ? !e3(this.props, n3) || !r4 : C2(this.props, n3);
    }
    function u3(e4) {
      return this.shouldComponentUpdate = r3, h(n2, e4);
    }
    return u3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u3.prototype.isReactComponent = true, u3.__f = true, u3;
  }
  function k3(n2) {
    function t3(t4) {
      var e3 = g3({}, t4);
      return delete e3.ref, n2(e3, t4.ref || null);
    }
    return t3.$$typeof = N2, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  function L2(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return L2(n3, t3, e3);
    })), n2;
  }
  function U(n2, t3, e3) {
    return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return U(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function D() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function F2(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function M2(n2) {
    var e3, r3, u3;
    function o3(o4) {
      if (e3 || (e3 = n2()).then(function(n3) {
        r3 = n3.default || n3;
      }, function(n3) {
        u3 = n3;
      }), u3)
        throw u3;
      if (!r3)
        throw e3;
      return h(r3, o4);
    }
    return o3.displayName = "Lazy", o3.__f = true, o3;
  }
  function V2() {
    this.u = null, this.o = null;
  }
  function P2(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function $2(n2) {
    var e3 = this, r3 = n2.i;
    e3.componentWillUnmount = function() {
      P(null, e3.l), e3.l = null, e3.i = null;
    }, e3.i && e3.i !== r3 && e3.componentWillUnmount(), n2.__v ? (e3.l || (e3.i = r3, e3.l = { nodeType: 1, parentNode: r3, childNodes: [], appendChild: function(n3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, insertBefore: function(n3, t3) {
      this.childNodes.push(n3), e3.i.appendChild(n3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.i.removeChild(n3);
    } }), P(h(P2, { context: e3.context }, n2.__v), e3.l)) : e3.l && e3.componentWillUnmount();
  }
  function j3(n2, e3) {
    var r3 = h($2, { __v: n2, i: e3 });
    return r3.containerInfo = e3, r3;
  }
  function Y(n2, t3, e3) {
    return null == t3.__k && (t3.textContent = ""), P(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  function q3(n2, t3, e3) {
    return S(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
  }
  function J() {
  }
  function K() {
    return this.cancelBubble;
  }
  function Q() {
    return this.defaultPrevented;
  }
  function on2(n2) {
    return h.bind(null, n2);
  }
  function ln(n2) {
    return !!n2 && n2.$$typeof === z3;
  }
  function cn(n2) {
    return ln(n2) ? q.apply(null, arguments) : n2;
  }
  function fn(n2) {
    return !!n2.__k && (P(null, n2), true);
  }
  function an(n2) {
    return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
  }
  function dn(n2) {
    n2();
  }
  function pn(n2) {
    return n2;
  }
  function mn() {
    return [false, dn];
  }
  function _n(n2, t3) {
    var e3 = t3(), r3 = p2({ h: { __: e3, v: t3 } }), u3 = r3[0].h, o3 = r3[1];
    return s2(function() {
      u3.__ = e3, u3.v = t3, E(u3.__, t3()) || o3({ h: u3 });
    }, [n2, e3, t3]), h2(function() {
      return E(u3.__, u3.v()) || o3({ h: u3 }), n2(function() {
        E(u3.__, u3.v()) || o3({ h: u3 });
      });
    }, [n2]), e3;
  }
  var x3, N2, A3, O2, T3, I2, W, z3, B3, H2, Z, G, X, nn, tn, en, rn, sn, hn, vn, yn, bn;
  var init_compat_module = __esm({
    "node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      (w3.prototype = new d()).isPureReactComponent = true, w3.prototype.shouldComponentUpdate = function(n2, t3) {
        return C2(this.props, n2) || C2(this.state, t3);
      };
      x3 = l.__b;
      l.__b = function(n2) {
        n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), x3 && x3(n2);
      };
      N2 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      A3 = function(n2, t3) {
        return null == n2 ? null : x(x(n2).map(t3));
      };
      O2 = { map: A3, forEach: A3, count: function(n2) {
        return n2 ? x(n2).length : 0;
      }, only: function(n2) {
        var t3 = x(n2);
        if (1 !== t3.length)
          throw "Children.only";
        return t3[0];
      }, toArray: x };
      T3 = l.__e;
      l.__e = function(n2, t3, e3, r3) {
        if (n2.then) {
          for (var u3, o3 = t3; o3 = o3.__; )
            if ((u3 = o3.__c) && u3.__c)
              return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
        }
        T3(n2, t3, e3, r3);
      };
      I2 = l.unmount;
      l.unmount = function(n2) {
        var t3 = n2.__c;
        t3 && t3.__R && t3.__R(), t3 && true === n2.__h && (n2.type = null), I2 && I2(n2);
      }, (D.prototype = new d()).__c = function(n2, t3) {
        var e3 = t3.__c, r3 = this;
        null == r3.t && (r3.t = []), r3.t.push(e3);
        var u3 = F2(r3.__v), o3 = false, i3 = function() {
          o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
        };
        e3.__R = i3;
        var l3 = function() {
          if (!--r3.__u) {
            if (r3.state.__a) {
              var n3 = r3.state.__a;
              r3.__v.__k[0] = U(n3, n3.__c.__P, n3.__c.__O);
            }
            var t4;
            for (r3.setState({ __a: r3.__b = null }); t4 = r3.t.pop(); )
              t4.forceUpdate();
          }
        }, c3 = true === t3.__h;
        r3.__u++ || c3 || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
      }, D.prototype.componentWillUnmount = function() {
        this.t = [];
      }, D.prototype.render = function(n2, e3) {
        if (this.__b) {
          if (this.__v.__k) {
            var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
            this.__v.__k[0] = L2(this.__b, r3, o3.__O = o3.__P);
          }
          this.__b = null;
        }
        var i3 = e3.__a && h(p, null, n2.fallback);
        return i3 && (i3.__h = null), [h(p, null, e3.__a ? null : n2.children), i3];
      };
      W = function(n2, t3, e3) {
        if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
          for (e3 = n2.u; e3; ) {
            for (; e3.length > 3; )
              e3.pop()();
            if (e3[1] < e3[0])
              break;
            n2.u = e3 = e3[2];
          }
      };
      (V2.prototype = new d()).__a = function(n2) {
        var t3 = this, e3 = F2(t3.__v), r3 = t3.o.get(n2);
        return r3[0]++, function(u3) {
          var o3 = function() {
            t3.props.revealOrder ? (r3.push(u3), W(t3, n2, r3)) : u3();
          };
          e3 ? e3(o3) : o3();
        };
      }, V2.prototype.render = function(n2) {
        this.u = null, this.o = /* @__PURE__ */ new Map();
        var t3 = x(n2.children);
        n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
        for (var e3 = t3.length; e3--; )
          this.o.set(t3[e3], this.u = [1, 0, this.u]);
        return n2.children;
      }, V2.prototype.componentDidUpdate = V2.prototype.componentDidMount = function() {
        var n2 = this;
        this.o.forEach(function(t3, e3) {
          W(n2, e3, t3);
        });
      };
      z3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      B3 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      H2 = "undefined" != typeof document;
      Z = function(n2) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
      };
      d.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
        Object.defineProperty(d.prototype, t3, { configurable: true, get: function() {
          return this["UNSAFE_" + t3];
        }, set: function(n2) {
          Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
        } });
      });
      G = l.event;
      l.event = function(n2) {
        return G && (n2 = G(n2)), n2.persist = J, n2.isPropagationStopped = K, n2.isDefaultPrevented = Q, n2.nativeEvent = n2;
      };
      nn = { configurable: true, get: function() {
        return this.class;
      } };
      tn = l.vnode;
      l.vnode = function(n2) {
        var t3 = n2.type, e3 = n2.props, u3 = e3;
        if ("string" == typeof t3) {
          var o3 = -1 === t3.indexOf("-");
          for (var i3 in u3 = {}, e3) {
            var l3 = e3[i3];
            H2 && "children" === i3 && "noscript" === t3 || "value" === i3 && "defaultValue" in e3 && null == l3 || ("defaultValue" === i3 && "value" in e3 && null == e3.value ? i3 = "value" : "download" === i3 && true === l3 ? l3 = "" : /ondoubleclick/i.test(i3) ? i3 = "ondblclick" : /^onchange(textarea|input)/i.test(i3 + t3) && !Z(e3.type) ? i3 = "oninput" : /^onfocus$/i.test(i3) ? i3 = "onfocusin" : /^onblur$/i.test(i3) ? i3 = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i3) ? i3 = i3.toLowerCase() : o3 && B3.test(i3) ? i3 = i3.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l3 && (l3 = void 0), /^oninput$/i.test(i3) && (i3 = i3.toLowerCase(), u3[i3] && (i3 = "oninputCapture")), u3[i3] = l3);
          }
          "select" == t3 && u3.multiple && Array.isArray(u3.value) && (u3.value = x(e3.children).forEach(function(n3) {
            n3.props.selected = -1 != u3.value.indexOf(n3.props.value);
          })), "select" == t3 && null != u3.defaultValue && (u3.value = x(e3.children).forEach(function(n3) {
            n3.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n3.props.value) : u3.defaultValue == n3.props.value;
          })), n2.props = u3, e3.class != e3.className && (nn.enumerable = "className" in e3, null != e3.className && (u3.class = e3.className), Object.defineProperty(u3, "className", nn));
        }
        n2.$$typeof = z3, tn && tn(n2);
      };
      en = l.__r;
      l.__r = function(n2) {
        en && en(n2), X = n2.__c;
      };
      rn = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
        return X.__n[n2.__c].props.value;
      } } } };
      sn = function(n2, t3) {
        return n2(t3);
      };
      hn = function(n2, t3) {
        return n2(t3);
      };
      vn = p;
      yn = s2;
      bn = { useState: p2, useId: V, useReducer: y2, useEffect: h2, useLayoutEffect: s2, useInsertionEffect: yn, useTransition: mn, useDeferredValue: pn, useSyncExternalStore: _n, startTransition: dn, useRef: _2, useImperativeHandle: A2, useMemo: F, useCallback: T2, useContext: q2, useDebugValue: x2, version: "17.0.2", Children: O2, render: Y, hydrate: q3, unmountComponentAtNode: fn, createPortal: j3, createElement: h, createContext: B, createFactory: on2, cloneElement: cn, createRef: y, Fragment: p, isValidElement: ln, findDOMNode: an, Component: d, PureComponent: w3, memo: R, forwardRef: k3, flushSync: hn, unstable_batchedUpdates: sn, StrictMode: vn, Suspense: D, SuspenseList: V2, lazy: M2, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: rn };
    }
  });

  // node_modules/react-icons/lib/esm/iconContext.js
  var DefaultContext, IconContext;
  var init_iconContext = __esm({
    "node_modules/react-icons/lib/esm/iconContext.js"() {
      init_compat_module();
      DefaultContext = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
      };
      IconContext = bn.createContext && bn.createContext(DefaultContext);
    }
  });

  // node_modules/react-icons/lib/esm/iconBase.js
  function Tree2Element(tree) {
    return tree && tree.map(function(node, i3) {
      return bn.createElement(node.tag, __assign({
        key: i3
      }, node.attr), Tree2Element(node.child));
    });
  }
  function GenIcon(data) {
    return function(props) {
      return bn.createElement(IconBase, __assign({
        attr: __assign({}, data.attr)
      }, props), Tree2Element(data.child));
    };
  }
  function IconBase(props) {
    var elem = function(conf) {
      var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
      var computedSize = size || conf.size || "1em";
      var className;
      if (conf.className)
        className = conf.className;
      if (props.className)
        className = (className ? className + " " : "") + props.className;
      return bn.createElement("svg", __assign({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, conf.attr, attr, svgProps, {
        className,
        style: __assign(__assign({
          color: props.color || conf.color
        }, conf.style), props.style),
        height: computedSize,
        width: computedSize,
        xmlns: "http://www.w3.org/2000/svg"
      }), title && bn.createElement("title", null, title), props.children);
    };
    return IconContext !== void 0 ? bn.createElement(IconContext.Consumer, null, function(conf) {
      return elem(conf);
    }) : elem(DefaultContext);
  }
  var __assign, __rest;
  var init_iconBase = __esm({
    "node_modules/react-icons/lib/esm/iconBase.js"() {
      init_compat_module();
      init_iconContext();
      __assign = function() {
        __assign = Object.assign || function(t3) {
          for (var s3, i3 = 1, n2 = arguments.length; i3 < n2; i3++) {
            s3 = arguments[i3];
            for (var p3 in s3)
              if (Object.prototype.hasOwnProperty.call(s3, p3))
                t3[p3] = s3[p3];
          }
          return t3;
        };
        return __assign.apply(this, arguments);
      };
      __rest = function(s3, e3) {
        var t3 = {};
        for (var p3 in s3)
          if (Object.prototype.hasOwnProperty.call(s3, p3) && e3.indexOf(p3) < 0)
            t3[p3] = s3[p3];
        if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
            if (e3.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
              t3[p3[i3]] = s3[p3[i3]];
          }
        return t3;
      };
    }
  });

  // node_modules/react-icons/lib/esm/index.js
  var init_esm = __esm({
    "node_modules/react-icons/lib/esm/index.js"() {
      init_iconsManifest();
      init_iconBase();
      init_iconContext();
    }
  });

  // node_modules/react-icons/fi/index.esm.js
  function FiCrosshair(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "circle", "attr": { "cx": "12", "cy": "12", "r": "10" } }, { "tag": "line", "attr": { "x1": "22", "y1": "12", "x2": "18", "y2": "12" } }, { "tag": "line", "attr": { "x1": "6", "y1": "12", "x2": "2", "y2": "12" } }, { "tag": "line", "attr": { "x1": "12", "y1": "6", "x2": "12", "y2": "2" } }, { "tag": "line", "attr": { "x1": "12", "y1": "22", "x2": "12", "y2": "18" } }] })(props);
  }
  var init_index_esm = __esm({
    "node_modules/react-icons/fi/index.esm.js"() {
      init_esm();
    }
  });

  // node_modules/react-icons/rx/index.esm.js
  function RxAngle(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 15 15", "fill": "none" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "clipRule": "evenodd", "d": "M8.8914 2.1937C9.1158 2.35464 9.16725 2.66701 9.00631 2.89141L2.47388 12H13.5C13.7761 12 14 12.2239 14 12.5C14 12.7762 13.7761 13 13.5 13H1.5C1.31254 13 1.14082 12.8952 1.0552 12.7284C0.969578 12.5616 0.984438 12.361 1.09369 12.2086L8.19369 2.30862C8.35462 2.08422 8.667 2.03277 8.8914 2.1937ZM11.1 6.50001C11.1 6.22387 11.3238 6.00001 11.6 6.00001C11.8761 6.00001 12.1 6.22387 12.1 6.50001C12.1 6.77615 11.8761 7.00001 11.6 7.00001C11.3238 7.00001 11.1 6.77615 11.1 6.50001ZM10.4 4.00001C10.1239 4.00001 9.90003 4.22387 9.90003 4.50001C9.90003 4.77615 10.1239 5.00001 10.4 5.00001C10.6762 5.00001 10.9 4.77615 10.9 4.50001C10.9 4.22387 10.6762 4.00001 10.4 4.00001ZM12.1 8.50001C12.1 8.22387 12.3238 8.00001 12.6 8.00001C12.8761 8.00001 13.1 8.22387 13.1 8.50001C13.1 8.77615 12.8761 9.00001 12.6 9.00001C12.3238 9.00001 12.1 8.77615 12.1 8.50001ZM13.4 10C13.1239 10 12.9 10.2239 12.9 10.5C12.9 10.7761 13.1239 11 13.4 11C13.6762 11 13.9 10.7761 13.9 10.5C13.9 10.2239 13.6762 10 13.4 10Z", "fill": "currentColor" } }] })(props);
  }
  var init_index_esm2 = __esm({
    "node_modules/react-icons/rx/index.esm.js"() {
      init_esm();
    }
  });

  // node_modules/react-icons/ai/index.esm.js
  function AiOutlineLoading3Quarters(props) {
    return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z" } }] })(props);
  }
  var init_index_esm3 = __esm({
    "node_modules/react-icons/ai/index.esm.js"() {
      init_esm();
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  var plot, Plugin, ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      "use strict";
      init_lib2();
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_index_esm();
      init_index_esm2();
      init_index_esm3();
      plot = (equation) => `
\\begin{tikzpicture}[scale=1.0544]
  \\small
  \\begin{axis} [
      axis x line=center,
      axis y line=center,
      xlabel={$x$},
      ylabel={$y$},
      samples=240,
      width=${10}cm, 
      height=${10}cm,
      xmin=${-5}, xmax=${5},
      ymin=${-5}, ymax=${5},
      restrict y to domain=${-5}:${5},
      axis equal
    ]
  \\addplot[
      black,
      domain=${-5}:${5},
      semithick
    ]
  {${equation}};
\\end{axis}
\\end{tikzpicture}
`;
      Plugin = () => {
        const [equation, setEquation] = p2("\\zeta (s) = \\sum_{n \\mathop = 1}^\\infty \\frac 1 {n^s}");
        const [size, setSize] = p2(17);
        const [sizeString, setSizeString] = p2("17");
        const [plotEquation, setPlotEquation] = p2("");
        const handleCreateMathButtonClick = T2(
          () => {
            if (equation !== null) {
              emit("CREATE_MATH", {
                equation,
                size: 17
              });
            }
          },
          [equation]
        );
        const handleCreatePlotButtonClick = T2(
          () => {
            if (plotEquation !== null) {
              emit("CREATE_PLOT", {
                equation: plotEquation
              });
            }
          },
          [plotEquation]
        );
        const handleCloseButtonClick = T2(() => {
          emit("CLOSE");
        }, []);
        const handleCreateIntersectionPointButtonClick = T2(() => {
          emit("CREATE_INTERSECTION_POINT");
        }, []);
        const handleCreateAngleBetweenLinesButtonClick = T2(() => {
          emit("CREATE_ANGLE_BETWEEN_LINES");
        }, []);
        const handleCreateTangentLineToCircleButtonClick = T2(() => {
          emit("CREATE_TANGENT_LINE_TO_CIRCLE");
        }, []);
        return /* @__PURE__ */ h(Container, { space: "medium" }, /* @__PURE__ */ h(VerticalSpace, { space: "large" }), /* @__PURE__ */ h(
          Text,
          {
            size: 24
          },
          "LaTeX Equation"
        ), /* @__PURE__ */ h(VerticalSpace, { space: "large" }), /* @__PURE__ */ h(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "center",
              padding: "16px",
              backgroundColor: "white"
            }
          },
          /* @__PURE__ */ h("img", { src: `https://tex.s2cms.ru/png/${encodeURI(equation || "\\ ")}` })
        ), /* @__PURE__ */ h(VerticalSpace, { space: "large" }), /* @__PURE__ */ h(Text, null, /* @__PURE__ */ h(Muted, null, "Equation")), /* @__PURE__ */ h(VerticalSpace, { space: "small" }), /* @__PURE__ */ h(
          Textbox,
          {
            onValueInput: setEquation,
            value: equation,
            variant: "border",
            style: {
              fontFamily: "'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', 'Courier New', monospace"
            }
          }
        ), /* @__PURE__ */ h(VerticalSpace, { space: "small" }), /* @__PURE__ */ h(Text, null, /* @__PURE__ */ h(Muted, null, "Size")), /* @__PURE__ */ h(VerticalSpace, { space: "small" }), /* @__PURE__ */ h(
          TextboxNumeric,
          {
            onNumericValueInput: setSize,
            onValueInput: setSizeString,
            value: sizeString,
            variant: "border"
          }
        ), /* @__PURE__ */ h(VerticalSpace, { space: "extraLarge" }), /* @__PURE__ */ h(Text, null, "Plot"), /* @__PURE__ */ h(VerticalSpace, { space: "large" }), /* @__PURE__ */ h(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "center",
              padding: "16px",
              backgroundColor: "white"
            }
          },
          /* @__PURE__ */ h(
            "img",
            {
              src: `https://tex.s2cms.ru/png/${encodeURI(plot(plotEquation || ""))}`,
              style: {
                width: "100%"
              }
            }
          )
        ), /* @__PURE__ */ h(VerticalSpace, { space: "large" }), /* @__PURE__ */ h(Text, null, /* @__PURE__ */ h(Muted, null, "Plot Equation")), /* @__PURE__ */ h(VerticalSpace, { space: "small" }), /* @__PURE__ */ h(
          Textbox,
          {
            onValueInput: setPlotEquation,
            value: plotEquation,
            variant: "border"
          }
        ), /* @__PURE__ */ h(VerticalSpace, { space: "extraLarge" }), /* @__PURE__ */ h(Columns, { space: "extraSmall" }, /* @__PURE__ */ h(Button, { fullWidth: true, onClick: handleCreateMathButtonClick }, "Import Equation"), /* @__PURE__ */ h(Button, { fullWidth: true, onClick: handleCreatePlotButtonClick }, "Import Plot"), /* @__PURE__ */ h(Button, { fullWidth: true, onClick: handleCloseButtonClick, secondary: true }, "Close")), /* @__PURE__ */ h(VerticalSpace, { space: "large" }), /* @__PURE__ */ h(Text, null, /* @__PURE__ */ h(Muted, null, "Tools")), /* @__PURE__ */ h(VerticalSpace, { space: "small" }), /* @__PURE__ */ h(IconButton, { onClick: handleCreateIntersectionPointButtonClick }, /* @__PURE__ */ h(FiCrosshair, { size: 16 })), /* @__PURE__ */ h(IconButton, { onClick: handleCreateAngleBetweenLinesButtonClick }, /* @__PURE__ */ h(RxAngle, { size: 16 })), /* @__PURE__ */ h(IconButton, { onClick: handleCreateTangentLineToCircleButtonClick }, /* @__PURE__ */ h(AiOutlineLoading3Quarters, { size: 16 })), /* @__PURE__ */ h(VerticalSpace, { space: "small" }), /* @__PURE__ */ h(VerticalSpace, { space: "small" }));
      };
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.ts--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.ts--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error(
      "No UI defined for command `" + commandId + "`"
    );
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
