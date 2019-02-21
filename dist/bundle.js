﻿! function (e) {
	var t = window.webpackHotUpdate;
	window.webpackHotUpdate = function (e, n) {
		! function (e, t) {
			if (!b[e] || !x[e]) return;
			for (var n in x[e] = !1, t) Object.prototype.hasOwnProperty.call(t, n) && (f[n] = t[n]);
			0 == --v && 0 === g && S()
		}(e, n), t && t(e, n)
	};
	var n, r = !0,
		i = "238bd12ee0b3e8729a36",
		a = 1e4,
		o = {},
		s = [],
		l = [];

	function c(e) {
		var t = E[e];
		if (!t) return C;
		var r = function (r) {
				return t.hot.active ? (E[r] ? -1 === E[r].parents.indexOf(e) && E[r].parents.push(e) : (s = [e], n = r), -1 === t.children.indexOf(r) && t.children.push(r)) : (console.warn("[HMR] unexpected require(" + r + ") from disposed module " + e), s = []), C(r)
			},
			i = function (e) {
				return {
					configurable: !0,
					enumerable: !0,
					get: function () {
						return C[e]
					},
					set: function (t) {
						C[e] = t
					}
				}
			};
		for (var a in C) Object.prototype.hasOwnProperty.call(C, a) && "e" !== a && "t" !== a && Object.defineProperty(r, a, i(a));
		return r.e = function (e) {
			return "ready" === h && p("prepare"), g++, C.e(e).then(t, function (e) {
				throw t(), e
			});

			function t() {
				g--, "prepare" === h && (y[e] || M(e), 0 === g && 0 === v && S())
			}
		}, r.t = function (e, t) {
			return 1 & t && (e = r(e)), C.t(e, -2 & t)
		}, r
	}
	var u = [],
		h = "idle";

	function p(e) {
		h = e;
		for (var t = 0; t < u.length; t++) u[t].call(null, e)
	}
	var d, f, m, v = 0,
		g = 0,
		y = {},
		x = {},
		b = {};

	function w(e) {
		return +e + "" === e ? +e : e
	}

	function _(e) {
		if ("idle" !== h) throw new Error("check() is only allowed in idle status");
		return r = e, p("check"),
			function (e) {
				return e = e || 1e4, new Promise(function (t, n) {
					if ("undefined" == typeof XMLHttpRequest) return n(new Error("No browser support"));
					try {
						var r = new XMLHttpRequest,
							a = C.p + "" + i + ".hot-update.json";
						r.open("GET", a, !0), r.timeout = e, r.send(null)
					} catch (e) {
						return n(e)
					}
					r.onreadystatechange = function () {
						if (4 === r.readyState)
							if (0 === r.status) n(new Error("Manifest request to " + a + " timed out."));
							else if (404 === r.status) t();
						else if (200 !== r.status && 304 !== r.status) n(new Error("Manifest request to " + a + " failed."));
						else {
							try {
								var e = JSON.parse(r.responseText)
							} catch (e) {
								return void n(e)
							}
							t(e)
						}
					}
				})
			}(a).then(function (e) {
				if (!e) return p("idle"), null;
				x = {}, y = {}, b = e.c, m = e.h, p("prepare");
				var t = new Promise(function (e, t) {
					d = {
						resolve: e,
						reject: t
					}
				});
				f = {};
				return M(0), "prepare" === h && 0 === g && 0 === v && S(), t
			})
	}

	function M(e) {
		b[e] ? (x[e] = !0, v++, function (e) {
			var t = document.getElementsByTagName("head")[0],
				n = document.createElement("script");
			n.charset = "utf-8", n.src = C.p + "" + e + "." + i + ".hot-update.js", t.appendChild(n)
		}(e)) : y[e] = !0
	}

	function S() {
		p("ready");
		var e = d;
		if (d = null, e)
			if (r) Promise.resolve().then(function () {
				return T(r)
			}).then(function (t) {
				e.resolve(t)
			}, function (t) {
				e.reject(t)
			});
			else {
				var t = [];
				for (var n in f) Object.prototype.hasOwnProperty.call(f, n) && t.push(w(n));
				e.resolve(t)
			}
	}

	function T(t) {
		if ("ready" !== h) throw new Error("apply() is only allowed in ready status");
		var n, r, a, l, c;

		function u(e) {
			for (var t = [e], n = {}, r = t.slice().map(function (e) {
					return {
						chain: [e],
						id: e
					}
				}); r.length > 0;) {
				var i = r.pop(),
					a = i.id,
					o = i.chain;
				if ((l = E[a]) && !l.hot._selfAccepted) {
					if (l.hot._selfDeclined) return {
						type: "self-declined",
						chain: o,
						moduleId: a
					};
					if (l.hot._main) return {
						type: "unaccepted",
						chain: o,
						moduleId: a
					};
					for (var s = 0; s < l.parents.length; s++) {
						var c = l.parents[s],
							u = E[c];
						if (u) {
							if (u.hot._declinedDependencies[a]) return {
								type: "declined",
								chain: o.concat([c]),
								moduleId: a,
								parentId: c
							}; - 1 === t.indexOf(c) && (u.hot._acceptedDependencies[a] ? (n[c] || (n[c] = []), d(n[c], [a])) : (delete n[c], t.push(c), r.push({
								chain: o.concat([c]),
								id: c
							})))
						}
					}
				}
			}
			return {
				type: "accepted",
				moduleId: e,
				outdatedModules: t,
				outdatedDependencies: n
			}
		}

		function d(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n]; - 1 === e.indexOf(r) && e.push(r)
			}
		}
		t = t || {};
		var v = {},
			g = [],
			y = {},
			x = function () {
				console.warn("[HMR] unexpected require(" + M.moduleId + ") to disposed module")
			};
		for (var _ in f)
			if (Object.prototype.hasOwnProperty.call(f, _)) {
				var M;
				c = w(_);
				var S = !1,
					T = !1,
					A = !1,
					P = "";
				switch ((M = f[_] ? u(c) : {
					type: "disposed",
					moduleId: _
				}).chain && (P = "\nUpdate propagation: " + M.chain.join(" -> ")), M.type) {
					case "self-declined":
						t.onDeclined && t.onDeclined(M), t.ignoreDeclined || (S = new Error("Aborted because of self decline: " + M.moduleId + P));
						break;
					case "declined":
						t.onDeclined && t.onDeclined(M), t.ignoreDeclined || (S = new Error("Aborted because of declined dependency: " + M.moduleId + " in " + M.parentId + P));
						break;
					case "unaccepted":
						t.onUnaccepted && t.onUnaccepted(M), t.ignoreUnaccepted || (S = new Error("Aborted because " + c + " is not accepted" + P));
						break;
					case "accepted":
						t.onAccepted && t.onAccepted(M), T = !0;
						break;
					case "disposed":
						t.onDisposed && t.onDisposed(M), A = !0;
						break;
					default:
						throw new Error("Unexception type " + M.type)
				}
				if (S) return p("abort"), Promise.reject(S);
				if (T)
					for (c in y[c] = f[c], d(g, M.outdatedModules), M.outdatedDependencies) Object.prototype.hasOwnProperty.call(M.outdatedDependencies, c) && (v[c] || (v[c] = []), d(v[c], M.outdatedDependencies[c]));
				A && (d(g, [M.moduleId]), y[c] = x)
			} var L, R = [];
		for (r = 0; r < g.length; r++) c = g[r], E[c] && E[c].hot._selfAccepted && R.push({
			module: c,
			errorHandler: E[c].hot._selfAccepted
		});
		p("dispose"), Object.keys(b).forEach(function (e) {
			!1 === b[e] && function (e) {
				delete installedChunks[e]
			}(e)
		});
		for (var O, k, I = g.slice(); I.length > 0;)
			if (c = I.pop(), l = E[c]) {
				var N = {},
					D = l.hot._disposeHandlers;
				for (a = 0; a < D.length; a++)(n = D[a])(N);
				for (o[c] = N, l.hot.active = !1, delete E[c], delete v[c], a = 0; a < l.children.length; a++) {
					var z = E[l.children[a]];
					z && ((L = z.parents.indexOf(c)) >= 0 && z.parents.splice(L, 1))
				}
			} for (c in v)
			if (Object.prototype.hasOwnProperty.call(v, c) && (l = E[c]))
				for (k = v[c], a = 0; a < k.length; a++) O = k[a], (L = l.children.indexOf(O)) >= 0 && l.children.splice(L, 1);
		for (c in p("apply"), i = m, y) Object.prototype.hasOwnProperty.call(y, c) && (e[c] = y[c]);
		var U = null;
		for (c in v)
			if (Object.prototype.hasOwnProperty.call(v, c) && (l = E[c])) {
				k = v[c];
				var B = [];
				for (r = 0; r < k.length; r++)
					if (O = k[r], n = l.hot._acceptedDependencies[O]) {
						if (-1 !== B.indexOf(n)) continue;
						B.push(n)
					} for (r = 0; r < B.length; r++) {
					n = B[r];
					try {
						n(k)
					} catch (e) {
						t.onErrored && t.onErrored({
							type: "accept-errored",
							moduleId: c,
							dependencyId: k[r],
							error: e
						}), t.ignoreErrored || U || (U = e)
					}
				}
			} for (r = 0; r < R.length; r++) {
			var F = R[r];
			c = F.module, s = [c];
			try {
				C(c)
			} catch (e) {
				if ("function" == typeof F.errorHandler) try {
					F.errorHandler(e)
				} catch (n) {
					t.onErrored && t.onErrored({
						type: "self-accept-error-handler-errored",
						moduleId: c,
						error: n,
						originalError: e
					}), t.ignoreErrored || U || (U = n), U || (U = e)
				} else t.onErrored && t.onErrored({
					type: "self-accept-errored",
					moduleId: c,
					error: e
				}), t.ignoreErrored || U || (U = e)
			}
		}
		return U ? (p("fail"), Promise.reject(U)) : (p("idle"), new Promise(function (e) {
			e(g)
		}))
	}
	var E = {};

	function C(t) {
		if (E[t]) return E[t].exports;
		var r = E[t] = {
			i: t,
			l: !1,
			exports: {},
			hot: function (e) {
				var t = {
					_acceptedDependencies: {},
					_declinedDependencies: {},
					_selfAccepted: !1,
					_selfDeclined: !1,
					_disposeHandlers: [],
					_main: n !== e,
					active: !0,
					accept: function (e, n) {
						if (void 0 === e) t._selfAccepted = !0;
						else if ("function" == typeof e) t._selfAccepted = e;
						else if ("object" == typeof e)
							for (var r = 0; r < e.length; r++) t._acceptedDependencies[e[r]] = n || function () {};
						else t._acceptedDependencies[e] = n || function () {}
					},
					decline: function (e) {
						if (void 0 === e) t._selfDeclined = !0;
						else if ("object" == typeof e)
							for (var n = 0; n < e.length; n++) t._declinedDependencies[e[n]] = !0;
						else t._declinedDependencies[e] = !0
					},
					dispose: function (e) {
						t._disposeHandlers.push(e)
					},
					addDisposeHandler: function (e) {
						t._disposeHandlers.push(e)
					},
					removeDisposeHandler: function (e) {
						var n = t._disposeHandlers.indexOf(e);
						n >= 0 && t._disposeHandlers.splice(n, 1)
					},
					check: _,
					apply: T,
					status: function (e) {
						if (!e) return h;
						u.push(e)
					},
					addStatusHandler: function (e) {
						u.push(e)
					},
					removeStatusHandler: function (e) {
						var t = u.indexOf(e);
						t >= 0 && u.splice(t, 1)
					},
					data: o[e]
				};
				return n = void 0, t
			}(t),
			parents: (l = s, s = [], l),
			children: []
		};
		return e[t].call(r.exports, r, r.exports, c(t)), r.l = !0, r.exports
	}
	C.m = e, C.c = E, C.d = function (e, t, n) {
		C.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: n
		})
	}, C.r = function (e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, C.t = function (e, t) {
		if (1 & t && (e = C(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if (C.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var r in e) C.d(n, r, function (t) {
				return e[t]
			}.bind(null, r));
		return n
	}, C.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return C.d(t, "a", t), t
	}, C.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, C.p = "/", C.h = function () {
		return i
	}, c(23)(C.s = 23)
}([function (e, t, n) {
	"use strict";
	e.exports = n(11)
}, function (e, t, n) {
	"use strict";
	(function (e) {
		var r = n(3),
			i = n.n(r),
			a = n(9),
			o = n.n(a),
			s = n(0),
			l = n.n(s),
			c = n(4),
			u = n(5),
			h = (n(17), n(2), n(10)),
			p = function (e, t) {
				for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1]);
				return n
			},
			d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
				return typeof e
			} : function (e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			},
			f = function (e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			},
			m = function () {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function (t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			v = Object.assign || function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			},
			g = function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			},
			y = function (e, t) {
				var n = {};
				for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
				return n
			},
			x = function (e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			},
			b = function (e) {
				return "object" === (void 0 === e ? "undefined" : d(e)) && e.constructor === Object
			},
			w = Object.freeze([]),
			_ = Object.freeze({});

		function M(e) {
			return "function" == typeof e
		}

		function S(e) {
			return e.displayName || e.name || "Component"
		}

		function T(e) {
			return e && "string" == typeof e.styledComponentId
		}
		var E = void 0 !== e && e.env.SC_ATTR || "data-styled",
			C = "undefined" != typeof window && "HTMLElement" in window;
		var A = function (e) {
				function t(n) {
					f(this, t);
					for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
					var o = x(this, e.call(this, "An error occurred. See https://github.com/styled-components/styled-components/blob/master/src/utils/errors.md#" + n + " for more information. " + (i ? "Additional arguments: " + i.join(", ") : "")));
					return x(o)
				}
				return g(t, e), t
			}(Error),
			P = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,
			L = function (e) {
				var t = "" + (e || ""),
					n = [];
				return t.replace(P, function (e, t, r) {
					return n.push({
						componentId: t,
						matchIndex: r
					}), e
				}), n.map(function (e, r) {
					var i = e.componentId,
						a = e.matchIndex,
						o = n[r + 1];
					return {
						componentId: i,
						cssFromDOM: o ? t.slice(a, o.matchIndex) : t.slice(a)
					}
				})
			},
			R = /^\s*\/\/.*$/gm,
			O = new i.a({
				global: !1,
				cascade: !0,
				keyframe: !1,
				prefix: !1,
				compress: !1,
				semicolon: !0
			}),
			k = new i.a({
				global: !1,
				cascade: !0,
				keyframe: !1,
				prefix: !0,
				compress: !1,
				semicolon: !1
			}),
			I = [],
			N = function (e) {
				if (-2 === e) {
					var t = I;
					return I = [], t
				}
			},
			D = o()(function (e) {
				I.push(e)
			}),
			z = void 0,
			U = void 0,
			B = void 0,
			F = function (e, t, n) {
				return t > 0 && -1 !== n.slice(0, t).indexOf(U) && n.slice(t - U.length, t) !== U ? "." + z : e
			};
		k.use([function (e, t, n) {
			2 === e && n.length && n[0].lastIndexOf(U) > 0 && (n[0] = n[0].replace(B, F))
		}, D, N]), O.use([D, N]);
		var j = function (e) {
			return O("", e)
		};

		function H(e, t, n) {
			var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "&",
				i = e.join("").replace(R, ""),
				a = t && n ? n + " " + t + " { " + i + " }" : i;
			return z = r, U = t, B = new RegExp("\\" + U + "\\b", "g"), k(n || !t ? "" : t, a)
		}
		var G = function () {
				return n.nc
			},
			V = function (e) {
				var t = !1;
				return function () {
					t || (t = !0, e())
				}
			},
			W = function (e, t, n) {
				n && ((e[t] || (e[t] = Object.create(null)))[n] = !0)
			},
			q = function (e, t) {
				e[t] = Object.create(null)
			},
			X = function (e) {
				return function (t, n) {
					return void 0 !== e[t] && e[t][n]
				}
			},
			Y = function (e) {
				var t = "";
				for (var n in e) t += Object.keys(e[n]).join(" ") + " ";
				return t.trim()
			},
			J = function (e) {
				if (e.sheet) return e.sheet;
				for (var t = document.styleSheets.length, n = 0; n < t; n += 1) {
					var r = document.styleSheets[n];
					if (r.ownerNode === e) return r
				}
				throw new A(10)
			},
			Z = function (e, t, n) {
				if (!t) return !1;
				var r = e.cssRules.length;
				try {
					e.insertRule(t, n <= r ? n : r)
				} catch (e) {
					return !1
				}
				return !0
			},
			$ = function (e) {
				return "\n/* sc-component-id: " + e + " */\n"
			},
			Q = function (e, t) {
				for (var n = 0, r = 0; r <= t; r += 1) n += e[r];
				return n
			},
			K = function (e, t) {
				return function (n) {
					var r = G();
					return "<style " + [r && 'nonce="' + r + '"', E + '="' + Y(t) + '"', 'data-styled-version="4.0.3"', n].filter(Boolean).join(" ") + ">" + e() + "</style>"
				}
			},
			ee = function (e, t) {
				return function () {
					var n, r = ((n = {})[E] = Y(t), n["data-styled-version"] = "4.0.3", n),
						i = G();
					return i && (r.nonce = i), l.a.createElement("style", v({}, r, {
						dangerouslySetInnerHTML: {
							__html: e()
						}
					}))
				}
			},
			te = function (e) {
				return function () {
					return Object.keys(e)
				}
			},
			ne = function e(t, n) {
				var r = void 0 === t ? Object.create(null) : t,
					i = void 0 === n ? Object.create(null) : n,
					a = function (e) {
						var t = i[e];
						return void 0 !== t ? t : i[e] = [""]
					},
					o = function () {
						var e = "";
						for (var t in i) {
							var n = i[t][0];
							n && (e += $(t) + n)
						}
						return e
					};
				return {
					clone: function () {
						var t = function (e) {
								var t = Object.create(null);
								for (var n in e) t[n] = v({}, e[n]);
								return t
							}(r),
							n = Object.create(null);
						for (var a in i) n[a] = [i[a][0]];
						return e(t, n)
					},
					css: o,
					getIds: te(i),
					hasNameForId: X(r),
					insertMarker: a,
					insertRules: function (e, t, n) {
						a(e)[0] += t.join(" "), W(r, e, n)
					},
					removeRules: function (e) {
						var t = i[e];
						void 0 !== t && (t[0] = "", q(r, e))
					},
					sealed: !1,
					styleTag: null,
					toElement: ee(o, r),
					toHTML: K(o, r)
				}
			},
			re = function (e, t, n, r, i) {
				if (C && !n) {
					var a = function (e, t, n) {
						var r = document.createElement("style");
						r.setAttribute(E, ""), r.setAttribute("data-styled-version", "4.0.3");
						var i = G();
						if (i && r.setAttribute("nonce", i), r.appendChild(document.createTextNode("")), e && !t) e.appendChild(r);
						else {
							if (!t || !e || !t.parentNode) throw new A(6);
							t.parentNode.insertBefore(r, n ? t : t.nextSibling)
						}
						return r
					}(e, t, r);
					return function (e, t) {
						var n = Object.create(null),
							r = Object.create(null),
							i = [],
							a = void 0 !== t,
							o = !1,
							s = function (e) {
								var t = r[e];
								return void 0 !== t ? t : (r[e] = i.length, i.push(0), q(n, e), r[e])
							},
							l = function () {
								var t = J(e).cssRules,
									n = "";
								for (var a in r) {
									n += $(a);
									for (var o = r[a], s = Q(i, o), l = s - i[o]; l < s; l += 1) {
										var c = t[l];
										void 0 !== c && (n += c.cssText)
									}
								}
								return n
							};
						return {
							clone: function () {
								throw new A(5)
							},
							css: l,
							getIds: te(r),
							hasNameForId: X(n),
							insertMarker: s,
							insertRules: function (r, l, c) {
								for (var u = s(r), h = J(e), p = Q(i, u), d = 0, f = [], m = l.length, v = 0; v < m; v += 1) {
									var g = l[v],
										y = a;
									y && -1 !== g.indexOf("@import") ? f.push(g) : Z(h, g, p + d) && (y = !1, d += 1)
								}
								a && f.length > 0 && (o = !0, t().insertRules(r + "-import", f)), i[u] += d, W(n, r, c)
							},
							removeRules: function (s) {
								var l = r[s];
								if (void 0 !== l) {
									var c = i[l];
									! function (e, t, n) {
										for (var r = t - n, i = t; i > r; i -= 1) e.deleteRule(i)
									}(J(e), Q(i, l) - 1, c), i[l] = 0, q(n, s), a && o && t().removeRules(s + "-import")
								}
							},
							sealed: !1,
							styleTag: e,
							toElement: ee(l, n),
							toHTML: K(l, n)
						}
					}(a, i)
				}
				return ne()
			},
			ie = /\s+/,
			ae = void 0;
		ae = C ? 1e3 : -1;
		var oe = 0,
			se = void 0,
			le = function () {
				function e() {
					var t = this,
						n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C ? document.head : null,
						r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					f(this, e), this.getImportRuleTag = function () {
						var e = t.importRuleTag;
						if (void 0 !== e) return e;
						var n = t.tags[0];
						return t.importRuleTag = re(t.target, n ? n.styleTag : null, t.forceServer, !0)
					}, oe += 1, this.id = oe, this.forceServer = r, this.target = r ? null : n, this.tagMap = {}, this.deferred = {}, this.rehydratedNames = {}, this.ignoreRehydratedNames = {}, this.tags = [], this.capacity = 1, this.clones = []
				}
				return e.prototype.rehydrate = function () {
					if (!C || this.forceServer) return this;
					var e = [],
						t = [],
						n = !1,
						r = document.querySelectorAll("style[" + E + '][data-styled-version="4.0.3"]'),
						i = r.length;
					if (0 === i) return this;
					for (var a = 0; a < i; a += 1) {
						var o = r[a];
						n || (n = !!o.getAttribute("data-styled-streamed"));
						for (var s = (o.getAttribute(E) || "").trim().split(ie), l = s.length, c = 0; c < l; c += 1) {
							var u = s[c];
							this.rehydratedNames[u] = !0
						}
						t.push.apply(t, L(o.textContent)), e.push(o)
					}
					var h = t.length;
					if (0 === h) return this;
					var p = function (e, t, n, r) {
						var i = V(function () {
							for (var r = 0, i = n.length; r < i; r += 1) {
								var a = n[r],
									o = a.componentId,
									s = a.cssFromDOM,
									l = j(s);
								e.insertRules(o, l)
							}
							for (var c = 0, u = t.length; c < u; c += 1) {
								var h = t[c];
								h.parentNode && h.parentNode.removeChild(h)
							}
						});
						return r && i(), v({}, e, {
							insertMarker: function (t) {
								return i(), e.insertMarker(t)
							},
							insertRules: function (t, n, r) {
								return i(), e.insertRules(t, n, r)
							},
							removeRules: function (t) {
								return i(), e.removeRules(t)
							}
						})
					}(this.makeTag(null), e, t, n);
					this.capacity = Math.max(1, ae - h), this.tags.push(p);
					for (var d = 0; d < h; d += 1) this.tagMap[t[d].componentId] = p;
					return this
				}, e.reset = function () {
					var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					se = new e(void 0, t).rehydrate()
				}, e.prototype.clone = function () {
					var t = new e(this.target, this.forceServer);
					return this.clones.push(t), t.tags = this.tags.map(function (e) {
						for (var n = e.getIds(), r = e.clone(), i = 0; i < n.length; i += 1) t.tagMap[n[i]] = r;
						return r
					}), t.rehydratedNames = v({}, this.rehydratedNames), t.deferred = v({}, this.deferred), t
				}, e.prototype.sealAllTags = function () {
					this.capacity = 1, this.tags.forEach(function (e) {
						e.sealed = !0
					})
				}, e.prototype.makeTag = function (e) {
					var t = e ? e.styleTag : null;
					return re(this.target, t, this.forceServer, !1, this.getImportRuleTag)
				}, e.prototype.getTagForId = function (e) {
					var t = this.tagMap[e];
					if (void 0 !== t && !t.sealed) return t;
					var n = this.tags[this.tags.length - 1];
					return this.capacity -= 1, 0 === this.capacity && (this.capacity = ae, n = this.makeTag(n), this.tags.push(n)), this.tagMap[e] = n
				}, e.prototype.hasId = function (e) {
					return void 0 !== this.tagMap[e]
				}, e.prototype.hasNameForId = function (e, t) {
					if (void 0 === this.ignoreRehydratedNames[e] && this.rehydratedNames[t]) return !0;
					var n = this.tagMap[e];
					return void 0 !== n && n.hasNameForId(e, t)
				}, e.prototype.deferredInject = function (e, t) {
					if (void 0 === this.tagMap[e]) {
						for (var n = this.clones, r = 0; r < n.length; r += 1) n[r].deferredInject(e, t);
						this.getTagForId(e).insertMarker(e), this.deferred[e] = t
					}
				}, e.prototype.inject = function (e, t, n) {
					for (var r = this.clones, i = 0; i < r.length; i += 1) r[i].inject(e, t, n);
					var a = this.getTagForId(e);
					if (void 0 !== this.deferred[e]) {
						var o = this.deferred[e].concat(t);
						a.insertRules(e, o, n), this.deferred[e] = void 0
					} else a.insertRules(e, t, n)
				}, e.prototype.remove = function (e) {
					var t = this.tagMap[e];
					if (void 0 !== t) {
						for (var n = this.clones, r = 0; r < n.length; r += 1) n[r].remove(e);
						t.removeRules(e), this.ignoreRehydratedNames[e] = !0, this.deferred[e] = void 0
					}
				}, e.prototype.toHTML = function () {
					return this.tags.map(function (e) {
						return e.toHTML()
					}).join("")
				}, e.prototype.toReactElements = function () {
					var e = this.id;
					return this.tags.map(function (t, n) {
						var r = "sc-" + e + "-" + n;
						return Object(s.cloneElement)(t.toElement(), {
							key: r
						})
					})
				}, m(e, null, [{
					key: "master",
					get: function () {
						return se || (se = (new e).rehydrate())
					}
				}, {
					key: "instance",
					get: function () {
						return e.master
					}
				}]), e
			}(),
			ce = function () {
				function e(t, n) {
					var r = this;
					f(this, e), this.inject = function (e) {
						e.hasNameForId(r.id, r.name) || e.inject(r.id, r.rules, r.name)
					}, this.toString = function () {
						throw new A(12, String(r.name))
					}, this.name = t, this.rules = n, this.id = "sc-keyframes-" + t
				}
				return e.prototype.getName = function () {
					return this.name
				}, e
			}(),
			ue = /([A-Z])/g,
			he = /^ms-/;
		var pe = function e(t, n) {
				var r = Object.keys(t).filter(function (e) {
					var n = t[e];
					return void 0 !== n && null !== n && !1 !== n && "" !== n
				}).map(function (n) {
					return b(t[n]) ? e(t[n], n) : function (e) {
						return e.replace(ue, "-$1").toLowerCase().replace(he, "-ms-")
					}(n) + ": " + t[n] + ";"
				}).join(" ");
				return n ? n + " {\n  " + r + "\n}" : r
			},
			de = function (e) {
				return void 0 === e || null === e || !1 === e || "" === e
			};

		function fe(e, t, n) {
			if (Array.isArray(e)) {
				for (var r, i = [], a = 0, o = e.length; a < o; a += 1) null !== (r = fe(e[a], t, n)) && (Array.isArray(r) ? i.push.apply(i, r) : i.push(r));
				return i
			}
			return de(e) ? null : T(e) ? "." + e.styledComponentId : M(e) ? t ? fe(e(t), t, n) : e : e instanceof ce ? n ? (e.inject(n), e.getName()) : e : b(e) ? pe(e) : e.toString()
		}

		function me(e) {
			for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
			return M(e) || b(e) ? fe(p(w, [e].concat(n))) : fe(p(e, n))
		}

		function ve(e) {
			for (var t, n = 0 | e.length, r = 0 | n, i = 0; n >= 4;) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(i) | (255 & e.charCodeAt(++i)) << 8 | (255 & e.charCodeAt(++i)) << 16 | (255 & e.charCodeAt(++i)) << 24)) + ((1540483477 * (t >>> 16) & 65535) << 16), r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16) ^ (t = 1540483477 * (65535 & (t ^= t >>> 24)) + ((1540483477 * (t >>> 16) & 65535) << 16)), n -= 4, ++i;
			switch (n) {
				case 3:
					r ^= (255 & e.charCodeAt(i + 2)) << 16;
				case 2:
					r ^= (255 & e.charCodeAt(i + 1)) << 8;
				case 1:
					r = 1540483477 * (65535 & (r ^= 255 & e.charCodeAt(i))) + ((1540483477 * (r >>> 16) & 65535) << 16)
			}
			return ((r = 1540483477 * (65535 & (r ^= r >>> 13)) + ((1540483477 * (r >>> 16) & 65535) << 16)) ^ r >>> 15) >>> 0
		}
		var ge = 52,
			ye = function (e) {
				return String.fromCharCode(e + (e > 25 ? 39 : 97))
			};

		function xe(e) {
			var t = "",
				n = void 0;
			for (n = e; n > ge; n = Math.floor(n / ge)) t = ye(n % ge) + t;
			return ye(n % ge) + t
		}

		function be(e, t) {
			for (var n = 0; n < e.length; n += 1) {
				var r = e[n];
				if (Array.isArray(r) && !be(r)) return !1;
				if (M(r) && !T(r)) return !1
			}
			if (void 0 !== t)
				for (var i in t) {
					if (M(t[i])) return !1
				}
			return !0
		}
		var we, _e = !1,
			Me = function (e) {
				return xe(ve(e))
			},
			Se = function () {
				function e(t, n, r) {
					if (f(this, e), this.rules = t, this.isStatic = !_e && be(t, n), this.componentId = r, !le.master.hasId(r)) {
						var i = [];
						le.master.deferredInject(r, i)
					}
				}
				return e.prototype.generateAndInjectStyles = function (e, t) {
					var n = this.isStatic,
						r = this.componentId,
						i = this.lastClassName;
					if (C && n && void 0 !== i && t.hasNameForId(r, i)) return i;
					var a = fe(this.rules, e, t),
						o = Me(this.componentId + a.join(""));
					return t.hasNameForId(r, o) || t.inject(this.componentId, H(a, "." + o, void 0, r), o), this.lastClassName = o, o
				}, e.generateName = function (e) {
					return Me(e)
				}, e
			}(),
			Te = function (e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _,
					r = !!n && e.theme === n.theme;
				return e.theme && !r ? e.theme : t || n.theme
			},
			Ee = /[[\].#*$><+~=|^:(),"'`-]+/g,
			Ce = /(^-|-$)/g;

		function Ae(e) {
			return e.replace(Ee, "-").replace(Ce, "")
		}

		function Pe(e) {
			return "string" == typeof e
		}
		var Le = {
				childContextTypes: !0,
				contextTypes: !0,
				defaultProps: !0,
				displayName: !0,
				getDerivedStateFromProps: !0,
				propTypes: !0,
				type: !0
			},
			Re = {
				name: !0,
				length: !0,
				prototype: !0,
				caller: !0,
				callee: !0,
				arguments: !0,
				arity: !0
			},
			Oe = ((we = {})[c.ForwardRef] = {
				$$typeof: !0,
				render: !0
			}, we),
			ke = Object.defineProperty,
			Ie = Object.getOwnPropertyNames,
			Ne = Object.getOwnPropertySymbols,
			De = void 0 === Ne ? function () {
				return []
			} : Ne,
			ze = Object.getOwnPropertyDescriptor,
			Ue = Object.getPrototypeOf,
			Be = Object.prototype,
			Fe = Array.prototype;

		function je(e, t, n) {
			if ("string" != typeof t) {
				var r = Ue(t);
				r && r !== Be && je(e, r, n);
				for (var i = Fe.concat(Ie(t), De(t)), a = Oe[e.$$typeof] || Le, o = Oe[t.$$typeof] || Le, s = i.length, l = void 0, c = void 0; s--;)
					if (c = i[s], !(Re[c] || n && n[c] || o && o[c] || a && a[c]) && (l = ze(t, c))) try {
						ke(e, c, l)
					} catch (e) {}
				return e
			}
			return e
		}

		function He(e) {
			return !!(e && e.prototype && e.prototype.isReactComponent)
		}
		var Ge = Object(s.createContext)(),
			Ve = Ge.Consumer,
			We = (function (e) {
				function t(n) {
					f(this, t);
					var r = x(this, e.call(this, n));
					return r.getContext = Object(u.a)(r.getContext.bind(r)), r.renderInner = r.renderInner.bind(r), r
				}
				g(t, e), t.prototype.render = function () {
					return this.props.children ? l.a.createElement(Ge.Consumer, null, this.renderInner) : null
				}, t.prototype.renderInner = function (e) {
					var t = this.getContext(this.props.theme, e);
					return l.a.createElement(Ge.Provider, {
						value: t
					}, l.a.Children.only(this.props.children))
				}, t.prototype.getTheme = function (e, t) {
					if (M(e)) return e(t);
					if (null === e || Array.isArray(e) || "object" !== (void 0 === e ? "undefined" : d(e))) throw new A(8);
					return v({}, t, e)
				}, t.prototype.getContext = function (e, t) {
					return this.getTheme(e, t)
				}
			}(s.Component), function () {
				function e() {
					f(this, e), this.masterSheet = le.master, this.instance = this.masterSheet.clone(), this.sealed = !1
				}
				e.prototype.seal = function () {
					if (!this.sealed) {
						var e = this.masterSheet.clones.indexOf(this.instance);
						this.masterSheet.clones.splice(e, 1), this.sealed = !0
					}
				}, e.prototype.collectStyles = function (e) {
					if (this.sealed) throw new A(2);
					return l.a.createElement(Xe, {
						sheet: this.instance
					}, e)
				}, e.prototype.getStyleTags = function () {
					return this.seal(), this.instance.toHTML()
				}, e.prototype.getStyleElement = function () {
					return this.seal(), this.instance.toReactElements()
				}, e.prototype.interleaveWithNodeStream = function (e) {
					throw new A(3)
				}
			}(), Object(s.createContext)()),
			qe = We.Consumer,
			Xe = function (e) {
				function t(n) {
					f(this, t);
					var r = x(this, e.call(this, n));
					return r.getContext = Object(u.a)(r.getContext), r
				}
				return g(t, e), t.prototype.getContext = function (e, t) {
					if (e) return e;
					if (t) return new le(t);
					throw new A(4)
				}, t.prototype.render = function () {
					var e = this.props,
						t = e.children,
						n = e.sheet,
						r = e.target,
						i = this.getContext(n, r);
					return l.a.createElement(We.Provider, {
						value: i
					}, l.a.Children.only(t))
				}, t
			}(s.Component),
			Ye = (new Set, {});
		V(function () {
			return console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component.')
		});
		var Je = function (e) {
			function t() {
				f(this, t);
				var n = x(this, e.call(this));
				return n.attrs = {}, n.renderOuter = n.renderOuter.bind(n), n.renderInner = n.renderInner.bind(n), n
			}
			return g(t, e), t.prototype.render = function () {
				return l.a.createElement(qe, null, this.renderOuter)
			}, t.prototype.renderOuter = function (e) {
				return this.styleSheet = e, l.a.createElement(Ve, null, this.renderInner)
			}, t.prototype.renderInner = function (e) {
				var t = this.props.forwardedClass,
					n = t.componentStyle,
					r = t.defaultProps,
					i = t.styledComponentId,
					a = t.target,
					o = void 0;
				o = n.isStatic ? this.generateAndInjectStyles(_, this.props, this.styleSheet) : void 0 !== e ? this.generateAndInjectStyles(Te(this.props, e, r), this.props, this.styleSheet) : this.generateAndInjectStyles(this.props.theme || _, this.props, this.styleSheet);
				var l = this.props.as || this.attrs.as || a,
					c = Pe(l),
					u = {},
					p = v({}, this.attrs, this.props),
					d = void 0;
				for (d in p) "forwardedClass" !== d && "as" !== d && ("forwardedRef" === d ? u.ref = p[d] : c && !Object(h.a)(d) || (u[d] = p[d]));
				return this.props.style && this.attrs.style && (u.style = v({}, this.attrs.style, this.props.style)), u.className = [this.props.className, i, this.attrs.className, o].filter(Boolean).join(" "), Object(s.createElement)(l, u)
			}, t.prototype.buildExecutionContext = function (e, t, n) {
				var r = v({}, t, {
					theme: e
				});
				if (void 0 === n) return r;
				this.attrs = {};
				var i = void 0,
					a = void 0;
				for (a in n) !M(i = n[a]) || He(i) || T(i) || (i = i(r)), this.attrs[a] = i;
				return v({}, r, this.attrs)
			}, t.prototype.generateAndInjectStyles = function (e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : le.master,
					r = t.forwardedClass,
					i = r.attrs,
					a = r.componentStyle,
					o = r.warnTooManyClasses;
				if (a.isStatic && void 0 === i) return a.generateAndInjectStyles(_, n);
				var s = a.generateAndInjectStyles(this.buildExecutionContext(e, t, t.forwardedClass.attrs), n);
				return o && o(s), s
			}, t
		}(s.Component);

		function Ze(e, t, n) {
			var r = T(e),
				i = !Pe(e),
				a = t.displayName,
				o = void 0 === a ? function (e) {
					return Pe(e) ? "styled." + e : "Styled(" + S(e) + ")"
				}(e) : a,
				s = t.componentId,
				c = void 0 === s ? function (e, t, n) {
					var r = "string" != typeof t ? "sc" : Ae(t),
						i = (Ye[r] || 0) + 1;
					Ye[r] = i;
					var a = r + "-" + e.generateName(r + i);
					return n ? n + "-" + a : a
				}(Se, t.displayName, t.parentComponentId) : s,
				u = t.ParentComponent,
				h = void 0 === u ? Je : u,
				p = t.attrs,
				d = t.displayName && t.componentId ? Ae(t.displayName) + "-" + t.componentId : t.componentId || c,
				f = r && e.attrs ? v({}, e.attrs, p) : p,
				m = new Se(r ? e.componentStyle.rules.concat(n) : n, f, d),
				g = l.a.forwardRef(function (e, t) {
					return l.a.createElement(h, v({}, e, {
						forwardedClass: g,
						forwardedRef: t
					}))
				});
			return g.attrs = f, g.componentStyle = m, g.displayName = o, g.styledComponentId = d, g.target = r ? e.target : e, g.withComponent = function (e) {
				var r = t.componentId,
					i = y(t, ["componentId"]),
					a = r && r + "-" + (Pe(e) ? e : Ae(S(e)));
				return Ze(e, v({}, i, {
					attrs: f,
					componentId: a,
					ParentComponent: h
				}), n)
			}, g.toString = function () {
				return "." + g.styledComponentId
			}, i && je(g, e, {
				attrs: !0,
				componentStyle: !0,
				displayName: !0,
				styledComponentId: !0,
				target: !0,
				warnTooManyClasses: !0,
				withComponent: !0
			}), g
		}
		var $e = function (e) {
			return function e(t, n) {
				var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _;
				if (!Object(c.isValidElementType)(n)) throw new A(1, String(n));
				var i = function () {
					return t(n, r, me.apply(void 0, arguments))
				};
				return i.withConfig = function (i) {
					return e(t, n, v({}, r, i))
				}, i.attrs = function (i) {
					return e(t, n, v({}, r, {
						attrs: v({}, r.attrs || _, i)
					}))
				}, i
			}(Ze, e)
		};
		["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach(function (e) {
			$e[e] = $e(e)
		});
		! function () {
			function e(t, n) {
				f(this, e), this.rules = t, this.componentId = n, this.isStatic = be(t), le.master.hasId(n) || le.master.deferredInject(n, [])
			}
			e.prototype.createStyles = function (e, t) {
				var n = H(fe(this.rules, e, t), "");
				t.inject(this.componentId, n)
			}, e.prototype.removeStyles = function (e) {
				var t = this.componentId;
				e.hasId(t) && e.remove(t)
			}, e.prototype.renderStyles = function (e, t) {
				this.removeStyles(t), this.createStyles(e, t)
			}
		}();
		C && (window.scCGSHMRCache = {});
		t.a = $e
	}).call(this, n(15))
}, function (e, t, n) {
	"use strict";
	! function e() {
		if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
		} catch (e) {
			console.error(e)
		}
	}(), e.exports = n(12)
}, function (e, t, n) {
	e.exports = function e(t) {
		"use strict";
		var n = /^\0+/g,
			r = /[\0\r\f]/g,
			i = /: */g,
			a = /zoo|gra/,
			o = /([,: ])(transform)/g,
			s = /,+\s*(?![^(]*[)])/g,
			l = / +\s*(?![^(]*[)])/g,
			c = / *[\0] */g,
			u = /,\r+?/g,
			h = /([\t\r\n ])*\f?&/g,
			p = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,
			d = /\W+/g,
			f = /@(k\w+)\s*(\S*)\s*/,
			m = /::(place)/g,
			v = /:(read-only)/g,
			g = /\s+(?=[{\];=:>])/g,
			y = /([[}=:>])\s+/g,
			x = /(\{[^{]+?);(?=\})/g,
			b = /\s{2,}/g,
			w = /([^\(])(:+) */g,
			_ = /[svh]\w+-[tblr]{2}/,
			M = /\(\s*(.*)\s*\)/g,
			S = /([\s\S]*?);/g,
			T = /-self|flex-/g,
			E = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
			C = /stretch|:\s*\w+\-(?:conte|avail)/,
			A = /([^-])(image-set\()/,
			P = "-webkit-",
			L = "-moz-",
			R = "-ms-",
			O = 59,
			k = 125,
			I = 123,
			N = 40,
			D = 41,
			z = 91,
			U = 93,
			B = 10,
			F = 13,
			j = 9,
			H = 64,
			G = 32,
			V = 38,
			W = 45,
			q = 95,
			X = 42,
			Y = 44,
			J = 58,
			Z = 39,
			$ = 34,
			Q = 47,
			K = 62,
			ee = 43,
			te = 126,
			ne = 0,
			re = 12,
			ie = 11,
			ae = 107,
			oe = 109,
			se = 115,
			le = 112,
			ce = 111,
			ue = 105,
			he = 99,
			pe = 100,
			de = 112,
			fe = 1,
			me = 1,
			ve = 0,
			ge = 1,
			ye = 1,
			xe = 1,
			be = 0,
			we = 0,
			_e = 0,
			Me = [],
			Se = [],
			Te = 0,
			Ee = null,
			Ce = -2,
			Ae = -1,
			Pe = 0,
			Le = 1,
			Re = 2,
			Oe = 3,
			ke = 0,
			Ie = 1,
			Ne = "",
			De = "",
			ze = "";

		function Ue(e, t, i, a, o) {
			for (var s, l, u = 0, h = 0, p = 0, d = 0, g = 0, y = 0, x = 0, b = 0, _ = 0, S = 0, T = 0, E = 0, C = 0, A = 0, q = 0, be = 0, Se = 0, Ee = 0, Ce = 0, Ae = i.length, Fe = Ae - 1, qe = "", Xe = "", Ye = "", Je = "", Ze = "", $e = ""; q < Ae;) {
				if (x = i.charCodeAt(q), q === Fe && h + d + p + u !== 0 && (0 !== h && (x = h === Q ? B : Q), d = p = u = 0, Ae++, Fe++), h + d + p + u === 0) {
					if (q === Fe && (be > 0 && (Xe = Xe.replace(r, "")), Xe.trim().length > 0)) {
						switch (x) {
							case G:
							case j:
							case O:
							case F:
							case B:
								break;
							default:
								Xe += i.charAt(q)
						}
						x = O
					}
					if (1 === Se) switch (x) {
						case I:
						case k:
						case O:
						case $:
						case Z:
						case N:
						case D:
						case Y:
							Se = 0;
						case j:
						case F:
						case B:
						case G:
							break;
						default:
							for (Se = 0, Ce = q, g = x, q--, x = O; Ce < Ae;) switch (i.charCodeAt(Ce++)) {
								case B:
								case F:
								case O:
									++q, x = g, Ce = Ae;
									break;
								case J:
									be > 0 && (++q, x = g);
								case I:
									Ce = Ae
							}
					}
					switch (x) {
						case I:
							for (g = (Xe = Xe.trim()).charCodeAt(0), T = 1, Ce = ++q; q < Ae;) {
								switch (x = i.charCodeAt(q)) {
									case I:
										T++;
										break;
									case k:
										T--;
										break;
									case Q:
										switch (y = i.charCodeAt(q + 1)) {
											case X:
											case Q:
												q = We(y, q, Fe, i)
										}
										break;
									case z:
										x++;
									case N:
										x++;
									case $:
									case Z:
										for (; q++ < Fe && i.charCodeAt(q) !== x;);
								}
								if (0 === T) break;
								q++
							}
							switch (Ye = i.substring(Ce, q), g === ne && (g = (Xe = Xe.replace(n, "").trim()).charCodeAt(0)), g) {
								case H:
									switch (be > 0 && (Xe = Xe.replace(r, "")), y = Xe.charCodeAt(1)) {
										case pe:
										case oe:
										case se:
										case W:
											s = t;
											break;
										default:
											s = Me
									}
									if (Ce = (Ye = Ue(t, s, Ye, y, o + 1)).length, _e > 0 && 0 === Ce && (Ce = Xe.length), Te > 0 && (s = Be(Me, Xe, Ee), l = Ve(Oe, Ye, s, t, me, fe, Ce, y, o, a), Xe = s.join(""), void 0 !== l && 0 === (Ce = (Ye = l.trim()).length) && (y = 0, Ye = "")), Ce > 0) switch (y) {
										case se:
											Xe = Xe.replace(M, Ge);
										case pe:
										case oe:
										case W:
											Ye = Xe + "{" + Ye + "}";
											break;
										case ae:
											Ye = (Xe = Xe.replace(f, "$1 $2" + (Ie > 0 ? Ne : ""))) + "{" + Ye + "}", Ye = 1 === ye || 2 === ye && He("@" + Ye, 3) ? "@" + P + Ye + "@" + Ye : "@" + Ye;
											break;
										default:
											Ye = Xe + Ye, a === de && (Je += Ye, Ye = "")
									} else Ye = "";
									break;
								default:
									Ye = Ue(t, Be(t, Xe, Ee), Ye, a, o + 1)
							}
							Ze += Ye, E = 0, Se = 0, A = 0, be = 0, Ee = 0, C = 0, Xe = "", Ye = "", x = i.charCodeAt(++q);
							break;
						case k:
						case O:
							if ((Ce = (Xe = (be > 0 ? Xe.replace(r, "") : Xe).trim()).length) > 1) switch (0 === A && ((g = Xe.charCodeAt(0)) === W || g > 96 && g < 123) && (Ce = (Xe = Xe.replace(" ", ":")).length), Te > 0 && void 0 !== (l = Ve(Le, Xe, t, e, me, fe, Je.length, a, o, a)) && 0 === (Ce = (Xe = l.trim()).length) && (Xe = "\0\0"), g = Xe.charCodeAt(0), y = Xe.charCodeAt(1), g) {
								case ne:
									break;
								case H:
									if (y === ue || y === he) {
										$e += Xe + i.charAt(q);
										break
									}
								default:
									if (Xe.charCodeAt(Ce - 1) === J) break;
									Je += je(Xe, g, y, Xe.charCodeAt(2))
							}
							E = 0, Se = 0, A = 0, be = 0, Ee = 0, Xe = "", x = i.charCodeAt(++q)
					}
				}
				switch (x) {
					case F:
					case B:
						if (h + d + p + u + we === 0) switch (S) {
							case D:
							case Z:
							case $:
							case H:
							case te:
							case K:
							case X:
							case ee:
							case Q:
							case W:
							case J:
							case Y:
							case O:
							case I:
							case k:
								break;
							default:
								A > 0 && (Se = 1)
						}
						h === Q ? h = 0 : ge + E === 0 && a !== ae && Xe.length > 0 && (be = 1, Xe += "\0"), Te * ke > 0 && Ve(Pe, Xe, t, e, me, fe, Je.length, a, o, a), fe = 1, me++;
						break;
					case O:
					case k:
						if (h + d + p + u === 0) {
							fe++;
							break
						}
					default:
						switch (fe++, qe = i.charAt(q), x) {
							case j:
							case G:
								if (d + u + h === 0) switch (b) {
									case Y:
									case J:
									case j:
									case G:
										qe = "";
										break;
									default:
										x !== G && (qe = " ")
								}
								break;
							case ne:
								qe = "\\0";
								break;
							case re:
								qe = "\\f";
								break;
							case ie:
								qe = "\\v";
								break;
							case V:
								d + h + u === 0 && ge > 0 && (Ee = 1, be = 1, qe = "\f" + qe);
								break;
							case 108:
								if (d + h + u + ve === 0 && A > 0) switch (q - A) {
									case 2:
										b === le && i.charCodeAt(q - 3) === J && (ve = b);
									case 8:
										_ === ce && (ve = _)
								}
								break;
							case J:
								d + h + u === 0 && (A = q);
								break;
							case Y:
								h + p + d + u === 0 && (be = 1, qe += "\r");
								break;
							case $:
							case Z:
								0 === h && (d = d === x ? 0 : 0 === d ? x : d);
								break;
							case z:
								d + h + p === 0 && u++;
								break;
							case U:
								d + h + p === 0 && u--;
								break;
							case D:
								d + h + u === 0 && p--;
								break;
							case N:
								if (d + h + u === 0) {
									if (0 === E) switch (2 * b + 3 * _) {
										case 533:
											break;
										default:
											T = 0, E = 1
									}
									p++
								}
								break;
							case H:
								h + p + d + u + A + C === 0 && (C = 1);
								break;
							case X:
							case Q:
								if (d + u + p > 0) break;
								switch (h) {
									case 0:
										switch (2 * x + 3 * i.charCodeAt(q + 1)) {
											case 235:
												h = Q;
												break;
											case 220:
												Ce = q, h = X
										}
										break;
									case X:
										x === Q && b === X && Ce + 2 !== q && (33 === i.charCodeAt(Ce + 2) && (Je += i.substring(Ce, q + 1)), qe = "", h = 0)
								}
						}
						if (0 === h) {
							if (ge + d + u + C === 0 && a !== ae && x !== O) switch (x) {
								case Y:
								case te:
								case K:
								case ee:
								case D:
								case N:
									if (0 === E) {
										switch (b) {
											case j:
											case G:
											case B:
											case F:
												qe += "\0";
												break;
											default:
												qe = "\0" + qe + (x === Y ? "" : "\0")
										}
										be = 1
									} else switch (x) {
										case N:
											A + 7 === q && 108 === b && (A = 0), E = ++T;
											break;
										case D:
											0 == (E = --T) && (be = 1, qe += "\0")
									}
									break;
								case j:
								case G:
									switch (b) {
										case ne:
										case I:
										case k:
										case O:
										case Y:
										case re:
										case j:
										case G:
										case B:
										case F:
											break;
										default:
											0 === E && (be = 1, qe += "\0")
									}
							}
							Xe += qe, x !== G && x !== j && (S = x)
						}
				}
				_ = b, b = x, q++
			}
			if (Ce = Je.length, _e > 0 && 0 === Ce && 0 === Ze.length && 0 === t[0].length == 0 && (a !== oe || 1 === t.length && (ge > 0 ? De : ze) === t[0]) && (Ce = t.join(",").length + 2), Ce > 0) {
				if (s = 0 === ge && a !== ae ? function (e) {
						for (var t, n, i = 0, a = e.length, o = Array(a); i < a; ++i) {
							for (var s = e[i].split(c), l = "", u = 0, h = 0, p = 0, d = 0, f = s.length; u < f; ++u)
								if (!(0 === (h = (n = s[u]).length) && f > 1)) {
									if (p = l.charCodeAt(l.length - 1), d = n.charCodeAt(0), t = "", 0 !== u) switch (p) {
										case X:
										case te:
										case K:
										case ee:
										case G:
										case N:
											break;
										default:
											t = " "
									}
									switch (d) {
										case V:
											n = t + De;
										case te:
										case K:
										case ee:
										case G:
										case D:
										case N:
											break;
										case z:
											n = t + n + De;
											break;
										case J:
											switch (2 * n.charCodeAt(1) + 3 * n.charCodeAt(2)) {
												case 530:
													if (xe > 0) {
														n = t + n.substring(8, h - 1);
														break
													}
												default:
													(u < 1 || s[u - 1].length < 1) && (n = t + De + n)
											}
											break;
										case Y:
											t = "";
										default:
											n = h > 1 && n.indexOf(":") > 0 ? t + n.replace(w, "$1" + De + "$2") : t + n + De
									}
									l += n
								} o[i] = l.replace(r, "").trim()
						}
						return o
					}(t) : t, Te > 0 && void 0 !== (l = Ve(Re, Je, s, e, me, fe, Ce, a, o, a)) && 0 === (Je = l).length) return $e + Je + Ze;
				if (Je = s.join(",") + "{" + Je + "}", ye * ve != 0) {
					switch (2 !== ye || He(Je, 2) || (ve = 0), ve) {
						case ce:
							Je = Je.replace(v, ":" + L + "$1") + Je;
							break;
						case le:
							Je = Je.replace(m, "::" + P + "input-$1") + Je.replace(m, "::" + L + "$1") + Je.replace(m, ":" + R + "input-$1") + Je
					}
					ve = 0
				}
			}
			return $e + Je + Ze
		}

		function Be(e, t, n) {
			var r = t.trim().split(u),
				i = r,
				a = r.length,
				o = e.length;
			switch (o) {
				case 0:
				case 1:
					for (var s = 0, l = 0 === o ? "" : e[0] + " "; s < a; ++s) i[s] = Fe(l, i[s], n, o).trim();
					break;
				default:
					s = 0;
					var c = 0;
					for (i = []; s < a; ++s)
						for (var h = 0; h < o; ++h) i[c++] = Fe(e[h] + " ", r[s], n, o).trim()
			}
			return i
		}

		function Fe(e, t, n, r) {
			var i = t,
				a = i.charCodeAt(0);
			switch (a < 33 && (a = (i = i.trim()).charCodeAt(0)), a) {
				case V:
					switch (ge + r) {
						case 0:
						case 1:
							if (0 === e.trim().length) break;
						default:
							return i.replace(h, "$1" + e.trim())
					}
					break;
				case J:
					switch (i.charCodeAt(1)) {
						case 103:
							if (xe > 0 && ge > 0) return i.replace(p, "$1").replace(h, "$1" + ze);
							break;
						default:
							return e.trim() + i.replace(h, "$1" + e.trim())
					}
				default:
					if (n * ge > 0 && i.indexOf("\f") > 0) return i.replace(h, (e.charCodeAt(0) === J ? "" : "$1") + e.trim())
			}
			return e + i
		}

		function je(e, t, n, r) {
			var c, u = 0,
				h = e + ";",
				p = 2 * t + 3 * n + 4 * r;
			if (944 === p) return function (e) {
				var t = e.length,
					n = e.indexOf(":", 9) + 1,
					r = e.substring(0, n).trim(),
					i = e.substring(n, t - 1).trim();
				switch (e.charCodeAt(9) * Ie) {
					case 0:
						break;
					case W:
						if (110 !== e.charCodeAt(10)) break;
					default:
						for (var a = i.split((i = "", s)), o = 0, n = 0, t = a.length; o < t; n = 0, ++o) {
							for (var c = a[o], u = c.split(l); c = u[n];) {
								var h = c.charCodeAt(0);
								if (1 === Ie && (h > H && h < 90 || h > 96 && h < 123 || h === q || h === W && c.charCodeAt(1) !== W)) switch (isNaN(parseFloat(c)) + (-1 !== c.indexOf("("))) {
									case 1:
										switch (c) {
											case "infinite":
											case "alternate":
											case "backwards":
											case "running":
											case "normal":
											case "forwards":
											case "both":
											case "none":
											case "linear":
											case "ease":
											case "ease-in":
											case "ease-out":
											case "ease-in-out":
											case "paused":
											case "reverse":
											case "alternate-reverse":
											case "inherit":
											case "initial":
											case "unset":
											case "step-start":
											case "step-end":
												break;
											default:
												c += Ne
										}
								}
								u[n++] = c
							}
							i += (0 === o ? "" : ",") + u.join(" ")
						}
				}
				return i = r + i + ";", 1 === ye || 2 === ye && He(i, 1) ? P + i + i : i
			}(h);
			if (0 === ye || 2 === ye && !He(h, 1)) return h;
			switch (p) {
				case 1015:
					return 97 === h.charCodeAt(10) ? P + h + h : h;
				case 951:
					return 116 === h.charCodeAt(3) ? P + h + h : h;
				case 963:
					return 110 === h.charCodeAt(5) ? P + h + h : h;
				case 1009:
					if (100 !== h.charCodeAt(4)) break;
				case 969:
				case 942:
					return P + h + h;
				case 978:
					return P + h + L + h + h;
				case 1019:
				case 983:
					return P + h + L + h + R + h + h;
				case 883:
					return h.charCodeAt(8) === W ? P + h + h : h.indexOf("image-set(", 11) > 0 ? h.replace(A, "$1" + P + "$2") + h : h;
				case 932:
					if (h.charCodeAt(4) === W) switch (h.charCodeAt(5)) {
						case 103:
							return P + "box-" + h.replace("-grow", "") + P + h + R + h.replace("grow", "positive") + h;
						case 115:
							return P + h + R + h.replace("shrink", "negative") + h;
						case 98:
							return P + h + R + h.replace("basis", "preferred-size") + h
					}
					return P + h + R + h + h;
				case 964:
					return P + h + R + "flex-" + h + h;
				case 1023:
					if (99 !== h.charCodeAt(8)) break;
					return c = h.substring(h.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), P + "box-pack" + c + P + h + R + "flex-pack" + c + h;
				case 1005:
					return a.test(h) ? h.replace(i, ":" + P) + h.replace(i, ":" + L) + h : h;
				case 1e3:
					switch (u = (c = h.substring(13).trim()).indexOf("-") + 1, c.charCodeAt(0) + c.charCodeAt(u)) {
						case 226:
							c = h.replace(_, "tb");
							break;
						case 232:
							c = h.replace(_, "tb-rl");
							break;
						case 220:
							c = h.replace(_, "lr");
							break;
						default:
							return h
					}
					return P + h + R + c + h;
				case 1017:
					if (-1 === h.indexOf("sticky", 9)) return h;
				case 975:
					switch (u = (h = e).length - 10, p = (c = (33 === h.charCodeAt(u) ? h.substring(0, u) : h).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | c.charCodeAt(7))) {
						case 203:
							if (c.charCodeAt(8) < 111) break;
						case 115:
							h = h.replace(c, P + c) + ";" + h;
							break;
						case 207:
						case 102:
							h = h.replace(c, P + (p > 102 ? "inline-" : "") + "box") + ";" + h.replace(c, P + c) + ";" + h.replace(c, R + c + "box") + ";" + h
					}
					return h + ";";
				case 938:
					if (h.charCodeAt(5) === W) switch (h.charCodeAt(6)) {
						case 105:
							return c = h.replace("-items", ""), P + h + P + "box-" + c + R + "flex-" + c + h;
						case 115:
							return P + h + R + "flex-item-" + h.replace(T, "") + h;
						default:
							return P + h + R + "flex-line-pack" + h.replace("align-content", "").replace(T, "") + h
					}
					break;
				case 973:
				case 989:
					if (h.charCodeAt(3) !== W || 122 === h.charCodeAt(4)) break;
				case 931:
				case 953:
					if (!0 === C.test(e)) return 115 === (c = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? je(e.replace("stretch", "fill-available"), t, n, r).replace(":fill-available", ":stretch") : h.replace(c, P + c) + h.replace(c, L + c.replace("fill-", "")) + h;
					break;
				case 962:
					if (h = P + h + (102 === h.charCodeAt(5) ? R + h : "") + h, n + r === 211 && 105 === h.charCodeAt(13) && h.indexOf("transform", 10) > 0) return h.substring(0, h.indexOf(";", 27) + 1).replace(o, "$1" + P + "$2") + h
			}
			return h
		}

		function He(e, t) {
			var n = e.indexOf(1 === t ? ":" : "{"),
				r = e.substring(0, 3 !== t ? n : 10),
				i = e.substring(n + 1, e.length - 1);
			return Ee(2 !== t ? r : r.replace(E, "$1"), i, t)
		}

		function Ge(e, t) {
			var n = je(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
			return n !== t + ";" ? n.replace(S, " or ($1)").substring(4) : "(" + t + ")"
		}

		function Ve(e, t, n, r, i, a, o, s, l, c) {
			for (var u, h = 0, p = t; h < Te; ++h) switch (u = Se[h].call(Xe, e, p, n, r, i, a, o, s, l, c)) {
				case void 0:
				case !1:
				case !0:
				case null:
					break;
				default:
					p = u
			}
			if (p !== t) return p
		}

		function We(e, t, n, r) {
			for (var i = t + 1; i < n; ++i) switch (r.charCodeAt(i)) {
				case Q:
					if (e === X && r.charCodeAt(i - 1) === X && t + 2 !== i) return i + 1;
					break;
				case B:
					if (e === Q) return i + 1
			}
			return i
		}

		function qe(e) {
			for (var t in e) {
				var n = e[t];
				switch (t) {
					case "keyframe":
						Ie = 0 | n;
						break;
					case "global":
						xe = 0 | n;
						break;
					case "cascade":
						ge = 0 | n;
						break;
					case "compress":
						be = 0 | n;
						break;
					case "semicolon":
						we = 0 | n;
						break;
					case "preserve":
						_e = 0 | n;
						break;
					case "prefix":
						Ee = null, n ? "function" != typeof n ? ye = 1 : (ye = 2, Ee = n) : ye = 0
				}
			}
			return qe
		}

		function Xe(t, n) {
			if (void 0 !== this && this.constructor === Xe) return e(t);
			var i = t,
				a = i.charCodeAt(0);
			a < 33 && (a = (i = i.trim()).charCodeAt(0)), Ie > 0 && (Ne = i.replace(d, a === z ? "" : "-")), a = 1, 1 === ge ? ze = i : De = i;
			var o, s = [ze];
			Te > 0 && void 0 !== (o = Ve(Ae, n, s, s, me, fe, 0, 0, 0, 0)) && "string" == typeof o && (n = o);
			var l = Ue(Me, s, n, 0, 0);
			return Te > 0 && void 0 !== (o = Ve(Ce, l, s, s, me, fe, l.length, 0, 0, 0)) && "string" != typeof (l = o) && (a = 0), Ne = "", ze = "", De = "", ve = 0, me = 1, fe = 1, be * a == 0 ? l : l.replace(r, "").replace(g, "").replace(y, "$1").replace(x, "$1").replace(b, " ")
		}
		return Xe.use = function e(t) {
			switch (t) {
				case void 0:
				case null:
					Te = Se.length = 0;
					break;
				default:
					if ("function" == typeof t) Se[Te++] = t;
					else if ("object" == typeof t)
						for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
					else ke = 0 | !!t
			}
			return e
		}, Xe.set = qe, void 0 !== t && qe(t), Xe
	}(null)
}, function (e, t, n) {
	"use strict";
	e.exports = n(16)
}, function (e, t, n) {
	"use strict";
	var r = function (e, t) {
		return e === t
	};
	t.a = function (e, t) {
		var n;
		void 0 === t && (t = r);
		var i, a = [],
			o = !1,
			s = function (e, n) {
				return t(e, a[n])
			};
		return function () {
			for (var t = arguments.length, r = new Array(t), l = 0; l < t; l++) r[l] = arguments[l];
			return o && n === this && r.length === a.length && r.every(s) ? i : (i = e.apply(this, r), o = !0, n = this, a = r, i)
		}
	}
}, function (e, t, n) {
	"use strict";
	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	var r = Object.getOwnPropertySymbols,
		i = Object.prototype.hasOwnProperty,
		a = Object.prototype.propertyIsEnumerable;
	e.exports = function () {
		try {
			if (!Object.assign) return !1;
			var e = new String("abc");
			if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
			for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
			if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
					return t[e]
				}).join("")) return !1;
			var r = {};
			return "abcdefghijklmnopqrst".split("").forEach(function (e) {
				r[e] = e
			}), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
		} catch (e) {
			return !1
		}
	}() ? Object.assign : function (e, t) {
		for (var n, o, s = function (e) {
				if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
				return Object(e)
			}(e), l = 1; l < arguments.length; l++) {
			for (var c in n = Object(arguments[l])) i.call(n, c) && (s[c] = n[c]);
			if (r) {
				o = r(n);
				for (var u = 0; u < o.length; u++) a.call(n, o[u]) && (s[o[u]] = n[o[u]])
			}
		}
		return s
	}
}, function (e, t, n) {
	e.exports = n.p + "src/assets/pando1-9e2e2aa5.png"
}, function (e, t, n) {
	e.exports = n.p + "src/assets/dot-63b8bb84.png"
}, function (e, t, n) {
	e.exports = function () {
		"use strict";
		return function (e) {
			function t(t) {
				if (t) try {
					e(t + "}")
				} catch (e) {}
			}
			return function (n, r, i, a, o, s, l, c, u, h) {
				switch (n) {
					case 1:
						if (0 === u && 64 === r.charCodeAt(0)) return e(r + ";"), "";
						break;
					case 2:
						if (0 === c) return r + "/*|*/";
						break;
					case 3:
						switch (c) {
							case 102:
							case 112:
								return e(i[0] + r), "";
							default:
								return r + (0 === h ? "/*|*/" : "")
						}
					case -2:
						r.split("/*|*/}").forEach(t)
				}
			}
		}
	}()
}, function (e, t, n) {
	"use strict";
	var r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i,
		i = function (e) {
			var t = {};
			return function (n) {
				return void 0 === t[n] && (t[n] = e(n)), t[n]
			}
		}(r.test.bind(r));
	t.a = i
}, function (e, t, n) {
	"use strict";
	/** @license React v16.6.1
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var r = n(6),
		i = "function" == typeof Symbol && Symbol.for,
		a = i ? Symbol.for("react.element") : 60103,
		o = i ? Symbol.for("react.portal") : 60106,
		s = i ? Symbol.for("react.fragment") : 60107,
		l = i ? Symbol.for("react.strict_mode") : 60108,
		c = i ? Symbol.for("react.profiler") : 60114,
		u = i ? Symbol.for("react.provider") : 60109,
		h = i ? Symbol.for("react.context") : 60110,
		p = i ? Symbol.for("react.concurrent_mode") : 60111,
		d = i ? Symbol.for("react.forward_ref") : 60112,
		f = i ? Symbol.for("react.suspense") : 60113,
		m = i ? Symbol.for("react.memo") : 60115,
		v = i ? Symbol.for("react.lazy") : 60116,
		g = "function" == typeof Symbol && Symbol.iterator;

	function y(e) {
		for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
		! function (e, t, n, r, i, a, o, s) {
			if (!e) {
				if (e = void 0, void 0 === t) e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
				else {
					var l = [n, r, i, a, o, s],
						c = 0;
					(e = Error(t.replace(/%s/g, function () {
						return l[c++]
					}))).name = "Invariant Violation"
				}
				throw e.framesToPop = 1, e
			}
		}(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
	}
	var x = {
			isMounted: function () {
				return !1
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {}
		},
		b = {};

	function w(e, t, n) {
		this.props = e, this.context = t, this.refs = b, this.updater = n || x
	}

	function _() {}

	function M(e, t, n) {
		this.props = e, this.context = t, this.refs = b, this.updater = n || x
	}
	w.prototype.isReactComponent = {}, w.prototype.setState = function (e, t) {
		"object" != typeof e && "function" != typeof e && null != e && y("85"), this.updater.enqueueSetState(this, e, t, "setState")
	}, w.prototype.forceUpdate = function (e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate")
	}, _.prototype = w.prototype;
	var S = M.prototype = new _;
	S.constructor = M, r(S, w.prototype), S.isPureReactComponent = !0;
	var T = {
			current: null,
			currentDispatcher: null
		},
		E = Object.prototype.hasOwnProperty,
		C = {
			key: !0,
			ref: !0,
			__self: !0,
			__source: !0
		};

	function A(e, t, n) {
		var r = void 0,
			i = {},
			o = null,
			s = null;
		if (null != t)
			for (r in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (o = "" + t.key), t) E.call(t, r) && !C.hasOwnProperty(r) && (i[r] = t[r]);
		var l = arguments.length - 2;
		if (1 === l) i.children = n;
		else if (1 < l) {
			for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
			i.children = c
		}
		if (e && e.defaultProps)
			for (r in l = e.defaultProps) void 0 === i[r] && (i[r] = l[r]);
		return {
			$$typeof: a,
			type: e,
			key: o,
			ref: s,
			props: i,
			_owner: T.current
		}
	}

	function P(e) {
		return "object" == typeof e && null !== e && e.$$typeof === a
	}
	var L = /\/+/g,
		R = [];

	function O(e, t, n, r) {
		if (R.length) {
			var i = R.pop();
			return i.result = e, i.keyPrefix = t, i.func = n, i.context = r, i.count = 0, i
		}
		return {
			result: e,
			keyPrefix: t,
			func: n,
			context: r,
			count: 0
		}
	}

	function k(e) {
		e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > R.length && R.push(e)
	}

	function I(e, t, n) {
		return null == e ? 0 : function e(t, n, r, i) {
			var s = typeof t;
			"undefined" !== s && "boolean" !== s || (t = null);
			var l = !1;
			if (null === t) l = !0;
			else switch (s) {
				case "string":
				case "number":
					l = !0;
					break;
				case "object":
					switch (t.$$typeof) {
						case a:
						case o:
							l = !0
					}
			}
			if (l) return r(i, t, "" === n ? "." + N(t, 0) : n), 1;
			if (l = 0, n = "" === n ? "." : n + ":", Array.isArray(t))
				for (var c = 0; c < t.length; c++) {
					var u = n + N(s = t[c], c);
					l += e(s, u, r, i)
				} else if (u = null === t || "object" != typeof t ? null : "function" == typeof (u = g && t[g] || t["@@iterator"]) ? u : null, "function" == typeof u)
					for (t = u.call(t), c = 0; !(s = t.next()).done;) l += e(s = s.value, u = n + N(s, c++), r, i);
				else "object" === s && y("31", "[object Object]" == (r = "" + t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, "");
			return l
		}(e, "", t, n)
	}

	function N(e, t) {
		return "object" == typeof e && null !== e && null != e.key ? function (e) {
			var t = {
				"=": "=0",
				":": "=2"
			};
			return "$" + ("" + e).replace(/[=:]/g, function (e) {
				return t[e]
			})
		}(e.key) : t.toString(36)
	}

	function D(e, t) {
		e.func.call(e.context, t, e.count++)
	}

	function z(e, t, n) {
		var r = e.result,
			i = e.keyPrefix;
		e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? U(e, r, n, function (e) {
			return e
		}) : null != e && (P(e) && (e = function (e, t) {
			return {
				$$typeof: a,
				type: e.type,
				key: t,
				ref: e.ref,
				props: e.props,
				_owner: e._owner
			}
		}(e, i + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(L, "$&/") + "/") + n)), r.push(e))
	}

	function U(e, t, n, r, i) {
		var a = "";
		null != n && (a = ("" + n).replace(L, "$&/") + "/"), I(e, z, t = O(t, a, r, i)), k(t)
	}
	var B = {
		Children: {
			map: function (e, t, n) {
				if (null == e) return e;
				var r = [];
				return U(e, r, null, t, n), r
			},
			forEach: function (e, t, n) {
				if (null == e) return e;
				I(e, D, t = O(null, null, t, n)), k(t)
			},
			count: function (e) {
				return I(e, function () {
					return null
				}, null)
			},
			toArray: function (e) {
				var t = [];
				return U(e, t, null, function (e) {
					return e
				}), t
			},
			only: function (e) {
				return P(e) || y("143"), e
			}
		},
		createRef: function () {
			return {
				current: null
			}
		},
		Component: w,
		PureComponent: M,
		createContext: function (e, t) {
			return void 0 === t && (t = null), (e = {
				$$typeof: h,
				_calculateChangedBits: t,
				_currentValue: e,
				_currentValue2: e,
				Provider: null,
				Consumer: null
			}).Provider = {
				$$typeof: u,
				_context: e
			}, e.Consumer = e
		},
		forwardRef: function (e) {
			return {
				$$typeof: d,
				render: e
			}
		},
		lazy: function (e) {
			return {
				$$typeof: v,
				_ctor: e,
				_status: -1,
				_result: null
			}
		},
		memo: function (e, t) {
			return {
				$$typeof: m,
				type: e,
				compare: void 0 === t ? null : t
			}
		},
		Fragment: s,
		StrictMode: l,
		Suspense: f,
		createElement: A,
		cloneElement: function (e, t, n) {
			(null === e || void 0 === e) && y("267", e);
			var i = void 0,
				o = r({}, e.props),
				s = e.key,
				l = e.ref,
				c = e._owner;
			if (null != t) {
				void 0 !== t.ref && (l = t.ref, c = T.current), void 0 !== t.key && (s = "" + t.key);
				var u = void 0;
				for (i in e.type && e.type.defaultProps && (u = e.type.defaultProps), t) E.call(t, i) && !C.hasOwnProperty(i) && (o[i] = void 0 === t[i] && void 0 !== u ? u[i] : t[i])
			}
			if (1 === (i = arguments.length - 2)) o.children = n;
			else if (1 < i) {
				u = Array(i);
				for (var h = 0; h < i; h++) u[h] = arguments[h + 2];
				o.children = u
			}
			return {
				$$typeof: a,
				type: e.type,
				key: s,
				ref: l,
				props: o,
				_owner: c
			}
		},
		createFactory: function (e) {
			var t = A.bind(null, e);
			return t.type = e, t
		},
		isValidElement: P,
		version: "16.6.1",
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
			ReactCurrentOwner: T,
			assign: r
		}
	};
	B.unstable_ConcurrentMode = p, B.unstable_Profiler = c;
	var F = {
			default: B
		},
		j = F && B || F;
	e.exports = j.default || j
}, function (e, t, n) {
	"use strict";
	/** @license React v16.6.1
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var r = n(0),
		i = n(6),
		a = n(13);

	function o(e) {
		for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
		! function (e, t, n, r, i, a, o, s) {
			if (!e) {
				if (e = void 0, void 0 === t) e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
				else {
					var l = [n, r, i, a, o, s],
						c = 0;
					(e = Error(t.replace(/%s/g, function () {
						return l[c++]
					}))).name = "Invariant Violation"
				}
				throw e.framesToPop = 1, e
			}
		}(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
	}
	r || o("227");
	var s = !1,
		l = null,
		c = !1,
		u = null,
		h = {
			onError: function (e) {
				s = !0, l = e
			}
		};

	function p(e, t, n, r, i, a, o, c, u) {
		s = !1, l = null,
			function (e, t, n, r, i, a, o, s, l) {
				var c = Array.prototype.slice.call(arguments, 3);
				try {
					t.apply(n, c)
				} catch (e) {
					this.onError(e)
				}
			}.apply(h, arguments)
	}
	var d = null,
		f = {};

	function m() {
		if (d)
			for (var e in f) {
				var t = f[e],
					n = d.indexOf(e);
				if (-1 < n || o("96", e), !g[n])
					for (var r in t.extractEvents || o("97", e), g[n] = t, n = t.eventTypes) {
						var i = void 0,
							a = n[r],
							s = t,
							l = r;
						y.hasOwnProperty(l) && o("99", l), y[l] = a;
						var c = a.phasedRegistrationNames;
						if (c) {
							for (i in c) c.hasOwnProperty(i) && v(c[i], s, l);
							i = !0
						} else a.registrationName ? (v(a.registrationName, s, l), i = !0) : i = !1;
						i || o("98", r, e)
					}
			}
	}

	function v(e, t, n) {
		x[e] && o("100", e), x[e] = t, b[e] = t.eventTypes[n].dependencies
	}
	var g = [],
		y = {},
		x = {},
		b = {},
		w = null,
		_ = null,
		M = null;

	function S(e, t, n) {
		var r = e.type || "unknown-event";
		e.currentTarget = M(n),
			function (e, t, n, r, i, a, h, d, f) {
				if (p.apply(this, arguments), s) {
					if (s) {
						var m = l;
						s = !1, l = null
					} else o("198"), m = void 0;
					c || (c = !0, u = m)
				}
			}(r, t, void 0, e), e.currentTarget = null
	}

	function T(e, t) {
		return null == t && o("30"), null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
	}

	function E(e, t, n) {
		Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
	}
	var C = null;

	function A(e) {
		if (e) {
			var t = e._dispatchListeners,
				n = e._dispatchInstances;
			if (Array.isArray(t))
				for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) S(e, t[r], n[r]);
			else t && S(e, t, n);
			e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
		}
	}
	var P = {
		injectEventPluginOrder: function (e) {
			d && o("101"), d = Array.prototype.slice.call(e), m()
		},
		injectEventPluginsByName: function (e) {
			var t, n = !1;
			for (t in e)
				if (e.hasOwnProperty(t)) {
					var r = e[t];
					f.hasOwnProperty(t) && f[t] === r || (f[t] && o("102", t), f[t] = r, n = !0)
				} n && m()
		}
	};

	function L(e, t) {
		var n = e.stateNode;
		if (!n) return null;
		var r = w(n);
		if (!r) return null;
		n = r[t];
		e: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
				(r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
				break e;
			default:
				e = !1
		}
		return e ? null : (n && "function" != typeof n && o("231", t, typeof n), n)
	}

	function R(e) {
		if (null !== e && (C = T(C, e)), e = C, C = null, e && (E(e, A), C && o("95"), c)) throw e = u, c = !1, u = null, e
	}
	var O = Math.random().toString(36).slice(2),
		k = "__reactInternalInstance$" + O,
		I = "__reactEventHandlers$" + O;

	function N(e) {
		if (e[k]) return e[k];
		for (; !e[k];) {
			if (!e.parentNode) return null;
			e = e.parentNode
		}
		return 5 === (e = e[k]).tag || 6 === e.tag ? e : null
	}

	function D(e) {
		return !(e = e[k]) || 5 !== e.tag && 6 !== e.tag ? null : e
	}

	function z(e) {
		if (5 === e.tag || 6 === e.tag) return e.stateNode;
		o("33")
	}

	function U(e) {
		return e[I] || null
	}

	function B(e) {
		do {
			e = e.return
		} while (e && 5 !== e.tag);
		return e || null
	}

	function F(e, t, n) {
		(t = L(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = T(n._dispatchListeners, t), n._dispatchInstances = T(n._dispatchInstances, e))
	}

	function j(e) {
		if (e && e.dispatchConfig.phasedRegistrationNames) {
			for (var t = e._targetInst, n = []; t;) n.push(t), t = B(t);
			for (t = n.length; 0 < t--;) F(n[t], "captured", e);
			for (t = 0; t < n.length; t++) F(n[t], "bubbled", e)
		}
	}

	function H(e, t, n) {
		e && n && n.dispatchConfig.registrationName && (t = L(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = T(n._dispatchListeners, t), n._dispatchInstances = T(n._dispatchInstances, e))
	}

	function G(e) {
		e && e.dispatchConfig.registrationName && H(e._targetInst, null, e)
	}

	function V(e) {
		E(e, j)
	}
	var W = !("undefined" == typeof window || !window.document || !window.document.createElement);

	function q(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
	}
	var X = {
			animationend: q("Animation", "AnimationEnd"),
			animationiteration: q("Animation", "AnimationIteration"),
			animationstart: q("Animation", "AnimationStart"),
			transitionend: q("Transition", "TransitionEnd")
		},
		Y = {},
		J = {};

	function Z(e) {
		if (Y[e]) return Y[e];
		if (!X[e]) return e;
		var t, n = X[e];
		for (t in n)
			if (n.hasOwnProperty(t) && t in J) return Y[e] = n[t];
		return e
	}
	W && (J = document.createElement("div").style, "AnimationEvent" in window || (delete X.animationend.animation, delete X.animationiteration.animation, delete X.animationstart.animation), "TransitionEvent" in window || delete X.transitionend.transition);
	var $ = Z("animationend"),
		Q = Z("animationiteration"),
		K = Z("animationstart"),
		ee = Z("transitionend"),
		te = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
		ne = null,
		re = null,
		ie = null;

	function ae() {
		if (ie) return ie;
		var e, t, n = re,
			r = n.length,
			i = "value" in ne ? ne.value : ne.textContent,
			a = i.length;
		for (e = 0; e < r && n[e] === i[e]; e++);
		var o = r - e;
		for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
		return ie = i.slice(e, 1 < t ? 1 - t : void 0)
	}

	function oe() {
		return !0
	}

	function se() {
		return !1
	}

	function le(e, t, n, r) {
		for (var i in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(i) && ((t = e[i]) ? this[i] = t(n) : "target" === i ? this.target = r : this[i] = n[i]);
		return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? oe : se, this.isPropagationStopped = se, this
	}

	function ce(e, t, n, r) {
		if (this.eventPool.length) {
			var i = this.eventPool.pop();
			return this.call(i, e, t, n, r), i
		}
		return new this(e, t, n, r)
	}

	function ue(e) {
		e instanceof this || o("279"), e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
	}

	function he(e) {
		e.eventPool = [], e.getPooled = ce, e.release = ue
	}
	i(le.prototype, {
		preventDefault: function () {
			this.defaultPrevented = !0;
			var e = this.nativeEvent;
			e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = oe)
		},
		stopPropagation: function () {
			var e = this.nativeEvent;
			e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = oe)
		},
		persist: function () {
			this.isPersistent = oe
		},
		isPersistent: se,
		destructor: function () {
			var e, t = this.constructor.Interface;
			for (e in t) this[e] = null;
			this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = se, this._dispatchInstances = this._dispatchListeners = null
		}
	}), le.Interface = {
		type: null,
		target: null,
		currentTarget: function () {
			return null
		},
		eventPhase: null,
		bubbles: null,
		cancelable: null,
		timeStamp: function (e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: null,
		isTrusted: null
	}, le.extend = function (e) {
		function t() {}

		function n() {
			return r.apply(this, arguments)
		}
		var r = this;
		t.prototype = r.prototype;
		var a = new t;
		return i(a, n.prototype), n.prototype = a, n.prototype.constructor = n, n.Interface = i({}, r.Interface, e), n.extend = r.extend, he(n), n
	}, he(le);
	var pe = le.extend({
			data: null
		}),
		de = le.extend({
			data: null
		}),
		fe = [9, 13, 27, 32],
		me = W && "CompositionEvent" in window,
		ve = null;
	W && "documentMode" in document && (ve = document.documentMode);
	var ge = W && "TextEvent" in window && !ve,
		ye = W && (!me || ve && 8 < ve && 11 >= ve),
		xe = String.fromCharCode(32),
		be = {
			beforeInput: {
				phasedRegistrationNames: {
					bubbled: "onBeforeInput",
					captured: "onBeforeInputCapture"
				},
				dependencies: ["compositionend", "keypress", "textInput", "paste"]
			},
			compositionEnd: {
				phasedRegistrationNames: {
					bubbled: "onCompositionEnd",
					captured: "onCompositionEndCapture"
				},
				dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
			},
			compositionStart: {
				phasedRegistrationNames: {
					bubbled: "onCompositionStart",
					captured: "onCompositionStartCapture"
				},
				dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
			},
			compositionUpdate: {
				phasedRegistrationNames: {
					bubbled: "onCompositionUpdate",
					captured: "onCompositionUpdateCapture"
				},
				dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
			}
		},
		we = !1;

	function _e(e, t) {
		switch (e) {
			case "keyup":
				return -1 !== fe.indexOf(t.keyCode);
			case "keydown":
				return 229 !== t.keyCode;
			case "keypress":
			case "mousedown":
			case "blur":
				return !0;
			default:
				return !1
		}
	}

	function Me(e) {
		return "object" == typeof (e = e.detail) && "data" in e ? e.data : null
	}
	var Se = !1;
	var Te = {
			eventTypes: be,
			extractEvents: function (e, t, n, r) {
				var i = void 0,
					a = void 0;
				if (me) e: {
					switch (e) {
						case "compositionstart":
							i = be.compositionStart;
							break e;
						case "compositionend":
							i = be.compositionEnd;
							break e;
						case "compositionupdate":
							i = be.compositionUpdate;
							break e
					}
					i = void 0
				}
				else Se ? _e(e, n) && (i = be.compositionEnd) : "keydown" === e && 229 === n.keyCode && (i = be.compositionStart);
				return i ? (ye && "ko" !== n.locale && (Se || i !== be.compositionStart ? i === be.compositionEnd && Se && (a = ae()) : (re = "value" in (ne = r) ? ne.value : ne.textContent, Se = !0)), i = pe.getPooled(i, t, n, r), a ? i.data = a : null !== (a = Me(n)) && (i.data = a), V(i), a = i) : a = null, (e = ge ? function (e, t) {
					switch (e) {
						case "compositionend":
							return Me(t);
						case "keypress":
							return 32 !== t.which ? null : (we = !0, xe);
						case "textInput":
							return (e = t.data) === xe && we ? null : e;
						default:
							return null
					}
				}(e, n) : function (e, t) {
					if (Se) return "compositionend" === e || !me && _e(e, t) ? (e = ae(), ie = re = ne = null, Se = !1, e) : null;
					switch (e) {
						case "paste":
							return null;
						case "keypress":
							if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
								if (t.char && 1 < t.char.length) return t.char;
								if (t.which) return String.fromCharCode(t.which)
							}
							return null;
						case "compositionend":
							return ye && "ko" !== t.locale ? null : t.data;
						default:
							return null
					}
				}(e, n)) ? ((t = de.getPooled(be.beforeInput, t, n, r)).data = e, V(t)) : t = null, null === a ? t : null === t ? a : [a, t]
			}
		},
		Ee = null,
		Ce = null,
		Ae = null;

	function Pe(e) {
		if (e = _(e)) {
			"function" != typeof Ee && o("280");
			var t = w(e.stateNode);
			Ee(e.stateNode, e.type, t)
		}
	}

	function Le(e) {
		Ce ? Ae ? Ae.push(e) : Ae = [e] : Ce = e
	}

	function Re() {
		if (Ce) {
			var e = Ce,
				t = Ae;
			if (Ae = Ce = null, Pe(e), t)
				for (e = 0; e < t.length; e++) Pe(t[e])
		}
	}

	function Oe(e, t) {
		return e(t)
	}

	function ke(e, t, n) {
		return e(t, n)
	}

	function Ie() {}
	var Ne = !1;

	function De(e, t) {
		if (Ne) return e(t);
		Ne = !0;
		try {
			return Oe(e, t)
		} finally {
			Ne = !1, (null !== Ce || null !== Ae) && (Ie(), Re())
		}
	}
	var ze = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};

	function Ue(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return "input" === t ? !!ze[e.type] : "textarea" === t
	}

	function Be(e) {
		return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
	}

	function Fe(e) {
		if (!W) return !1;
		var t = (e = "on" + e) in document;
		return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
	}

	function je(e) {
		var t = e.type;
		return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
	}

	function He(e) {
		e._valueTracker || (e._valueTracker = function (e) {
			var t = je(e) ? "checked" : "value",
				n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
				r = "" + e[t];
			if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
				var i = n.get,
					a = n.set;
				return Object.defineProperty(e, t, {
					configurable: !0,
					get: function () {
						return i.call(this)
					},
					set: function (e) {
						r = "" + e, a.call(this, e)
					}
				}), Object.defineProperty(e, t, {
					enumerable: n.enumerable
				}), {
					getValue: function () {
						return r
					},
					setValue: function (e) {
						r = "" + e
					},
					stopTracking: function () {
						e._valueTracker = null, delete e[t]
					}
				}
			}
		}(e))
	}

	function Ge(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(),
			r = "";
		return e && (r = je(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
	}
	var Ve = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
		We = /^(.*)[\\\/]/,
		qe = "function" == typeof Symbol && Symbol.for,
		Xe = qe ? Symbol.for("react.element") : 60103,
		Ye = qe ? Symbol.for("react.portal") : 60106,
		Je = qe ? Symbol.for("react.fragment") : 60107,
		Ze = qe ? Symbol.for("react.strict_mode") : 60108,
		$e = qe ? Symbol.for("react.profiler") : 60114,
		Qe = qe ? Symbol.for("react.provider") : 60109,
		Ke = qe ? Symbol.for("react.context") : 60110,
		et = qe ? Symbol.for("react.concurrent_mode") : 60111,
		tt = qe ? Symbol.for("react.forward_ref") : 60112,
		nt = qe ? Symbol.for("react.suspense") : 60113,
		rt = qe ? Symbol.for("react.memo") : 60115,
		it = qe ? Symbol.for("react.lazy") : 60116,
		at = "function" == typeof Symbol && Symbol.iterator;

	function ot(e) {
		return null === e || "object" != typeof e ? null : "function" == typeof (e = at && e[at] || e["@@iterator"]) ? e : null
	}

	function st(e) {
		if (null == e) return null;
		if ("function" == typeof e) return e.displayName || e.name || null;
		if ("string" == typeof e) return e;
		switch (e) {
			case et:
				return "ConcurrentMode";
			case Je:
				return "Fragment";
			case Ye:
				return "Portal";
			case $e:
				return "Profiler";
			case Ze:
				return "StrictMode";
			case nt:
				return "Suspense"
		}
		if ("object" == typeof e) switch (e.$$typeof) {
			case Ke:
				return "Context.Consumer";
			case Qe:
				return "Context.Provider";
			case tt:
				var t = e.render;
				return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
			case rt:
				return st(e.type);
			case it:
				if (e = 1 === e._status ? e._result : null) return st(e)
		}
		return null
	}

	function lt(e) {
		var t = "";
		do {
			e: switch (e.tag) {
				case 2:
				case 16:
				case 0:
				case 1:
				case 5:
				case 8:
				case 13:
					var n = e._debugOwner,
						r = e._debugSource,
						i = st(e.type),
						a = null;
					n && (a = st(n.type)), n = i, i = "", r ? i = " (at " + r.fileName.replace(We, "") + ":" + r.lineNumber + ")" : a && (i = " (created by " + a + ")"), a = "\n    in " + (n || "Unknown") + i;
					break e;
				default:
					a = ""
			}
			t += a,
			e = e.return
		} while (e);
		return t
	}
	var ct = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
		ut = Object.prototype.hasOwnProperty,
		ht = {},
		pt = {};

	function dt(e, t, n, r, i) {
		this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t
	}
	var ft = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
		ft[e] = new dt(e, 0, !1, e, null)
	}), [
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(function (e) {
		var t = e[0];
		ft[t] = new dt(t, 1, !1, e[1], null)
	}), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
		ft[e] = new dt(e, 2, !1, e.toLowerCase(), null)
	}), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
		ft[e] = new dt(e, 2, !1, e, null)
	}), "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
		ft[e] = new dt(e, 3, !1, e.toLowerCase(), null)
	}), ["checked", "multiple", "muted", "selected"].forEach(function (e) {
		ft[e] = new dt(e, 3, !0, e, null)
	}), ["capture", "download"].forEach(function (e) {
		ft[e] = new dt(e, 4, !1, e, null)
	}), ["cols", "rows", "size", "span"].forEach(function (e) {
		ft[e] = new dt(e, 6, !1, e, null)
	}), ["rowSpan", "start"].forEach(function (e) {
		ft[e] = new dt(e, 5, !1, e.toLowerCase(), null)
	});
	var mt = /[\-:]([a-z])/g;

	function vt(e) {
		return e[1].toUpperCase()
	}

	function gt(e, t, n, r) {
		var i = ft.hasOwnProperty(t) ? ft[t] : null;
		(null !== i ? 0 === i.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function (e, t, n, r) {
			if (null === t || void 0 === t || function (e, t, n, r) {
					if (null !== n && 0 === n.type) return !1;
					switch (typeof t) {
						case "function":
						case "symbol":
							return !0;
						case "boolean":
							return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
						default:
							return !1
					}
				}(e, t, n, r)) return !0;
			if (r) return !1;
			if (null !== n) switch (n.type) {
				case 3:
					return !t;
				case 4:
					return !1 === t;
				case 5:
					return isNaN(t);
				case 6:
					return isNaN(t) || 1 > t
			}
			return !1
		}(t, n, i, r) && (n = null), r || null === i ? function (e) {
			return !!ut.call(pt, e) || !ut.call(ht, e) && (ct.test(e) ? pt[e] = !0 : (ht[e] = !0, !1))
		}(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = null === n ? 3 !== i.type && "" : n : (t = i.attributeName, r = i.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
	}

	function yt(e) {
		switch (typeof e) {
			case "boolean":
			case "number":
			case "object":
			case "string":
			case "undefined":
				return e;
			default:
				return ""
		}
	}

	function xt(e, t) {
		var n = t.checked;
		return i({}, t, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: null != n ? n : e._wrapperState.initialChecked
		})
	}

	function bt(e, t) {
		var n = null == t.defaultValue ? "" : t.defaultValue,
			r = null != t.checked ? t.checked : t.defaultChecked;
		n = yt(null != t.value ? t.value : n), e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
		}
	}

	function wt(e, t) {
		null != (t = t.checked) && gt(e, "checked", t, !1)
	}

	function _t(e, t) {
		wt(e, t);
		var n = yt(t.value),
			r = t.type;
		if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
		else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
		t.hasOwnProperty("value") ? St(e, t.type, n) : t.hasOwnProperty("defaultValue") && St(e, t.type, yt(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
	}

	function Mt(e, t, n) {
		if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
			var r = t.type;
			if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
			t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
		}
		"" !== (n = e.name) && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
	}

	function St(e, t, n) {
		"number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
		var t = e.replace(mt, vt);
		ft[t] = new dt(t, 1, !1, e, null)
	}), "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
		var t = e.replace(mt, vt);
		ft[t] = new dt(t, 1, !1, e, "http://www.w3.org/1999/xlink")
	}), ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
		var t = e.replace(mt, vt);
		ft[t] = new dt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace")
	}), ft.tabIndex = new dt("tabIndex", 1, !1, "tabindex", null);
	var Tt = {
		change: {
			phasedRegistrationNames: {
				bubbled: "onChange",
				captured: "onChangeCapture"
			},
			dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
		}
	};

	function Et(e, t, n) {
		return (e = le.getPooled(Tt.change, e, t, n)).type = "change", Le(n), V(e), e
	}
	var Ct = null,
		At = null;

	function Pt(e) {
		R(e)
	}

	function Lt(e) {
		if (Ge(z(e))) return e
	}

	function Rt(e, t) {
		if ("change" === e) return t
	}
	var Ot = !1;

	function kt() {
		Ct && (Ct.detachEvent("onpropertychange", It), At = Ct = null)
	}

	function It(e) {
		"value" === e.propertyName && Lt(At) && De(Pt, e = Et(At, e, Be(e)))
	}

	function Nt(e, t, n) {
		"focus" === e ? (kt(), At = n, (Ct = t).attachEvent("onpropertychange", It)) : "blur" === e && kt()
	}

	function Dt(e) {
		if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Lt(At)
	}

	function zt(e, t) {
		if ("click" === e) return Lt(t)
	}

	function Ut(e, t) {
		if ("input" === e || "change" === e) return Lt(t)
	}
	W && (Ot = Fe("input") && (!document.documentMode || 9 < document.documentMode));
	var Bt = {
			eventTypes: Tt,
			_isInputEventSupported: Ot,
			extractEvents: function (e, t, n, r) {
				var i = t ? z(t) : window,
					a = void 0,
					o = void 0,
					s = i.nodeName && i.nodeName.toLowerCase();
				if ("select" === s || "input" === s && "file" === i.type ? a = Rt : Ue(i) ? Ot ? a = Ut : (a = Dt, o = Nt) : (s = i.nodeName) && "input" === s.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (a = zt), a && (a = a(e, t))) return Et(a, n, r);
				o && o(e, i, t), "blur" === e && (e = i._wrapperState) && e.controlled && "number" === i.type && St(i, "number", i.value)
			}
		},
		Ft = le.extend({
			view: null,
			detail: null
		}),
		jt = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey"
		};

	function Ht(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : !!(e = jt[e]) && !!t[e]
	}

	function Gt() {
		return Ht
	}
	var Vt = 0,
		Wt = 0,
		qt = !1,
		Xt = !1,
		Yt = Ft.extend({
			screenX: null,
			screenY: null,
			clientX: null,
			clientY: null,
			pageX: null,
			pageY: null,
			ctrlKey: null,
			shiftKey: null,
			altKey: null,
			metaKey: null,
			getModifierState: Gt,
			button: null,
			buttons: null,
			relatedTarget: function (e) {
				return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
			},
			movementX: function (e) {
				if ("movementX" in e) return e.movementX;
				var t = Vt;
				return Vt = e.screenX, qt ? "mousemove" === e.type ? e.screenX - t : 0 : (qt = !0, 0)
			},
			movementY: function (e) {
				if ("movementY" in e) return e.movementY;
				var t = Wt;
				return Wt = e.screenY, Xt ? "mousemove" === e.type ? e.screenY - t : 0 : (Xt = !0, 0)
			}
		}),
		Jt = Yt.extend({
			pointerId: null,
			width: null,
			height: null,
			pressure: null,
			tangentialPressure: null,
			tiltX: null,
			tiltY: null,
			twist: null,
			pointerType: null,
			isPrimary: null
		}),
		Zt = {
			mouseEnter: {
				registrationName: "onMouseEnter",
				dependencies: ["mouseout", "mouseover"]
			},
			mouseLeave: {
				registrationName: "onMouseLeave",
				dependencies: ["mouseout", "mouseover"]
			},
			pointerEnter: {
				registrationName: "onPointerEnter",
				dependencies: ["pointerout", "pointerover"]
			},
			pointerLeave: {
				registrationName: "onPointerLeave",
				dependencies: ["pointerout", "pointerover"]
			}
		},
		$t = {
			eventTypes: Zt,
			extractEvents: function (e, t, n, r) {
				var i = "mouseover" === e || "pointerover" === e,
					a = "mouseout" === e || "pointerout" === e;
				if (i && (n.relatedTarget || n.fromElement) || !a && !i) return null;
				if (i = r.window === r ? r : (i = r.ownerDocument) ? i.defaultView || i.parentWindow : window, a ? (a = t, t = (t = n.relatedTarget || n.toElement) ? N(t) : null) : a = null, a === t) return null;
				var o = void 0,
					s = void 0,
					l = void 0,
					c = void 0;
				"mouseout" === e || "mouseover" === e ? (o = Yt, s = Zt.mouseLeave, l = Zt.mouseEnter, c = "mouse") : "pointerout" !== e && "pointerover" !== e || (o = Jt, s = Zt.pointerLeave, l = Zt.pointerEnter, c = "pointer");
				var u = null == a ? i : z(a);
				if (i = null == t ? i : z(t), (e = o.getPooled(s, a, n, r)).type = c + "leave", e.target = u, e.relatedTarget = i, (n = o.getPooled(l, t, n, r)).type = c + "enter", n.target = i, n.relatedTarget = u, r = t, a && r) e: {
					for (i = r, c = 0, o = t = a; o; o = B(o)) c++;
					for (o = 0, l = i; l; l = B(l)) o++;
					for (; 0 < c - o;) t = B(t),
					c--;
					for (; 0 < o - c;) i = B(i),
					o--;
					for (; c--;) {
						if (t === i || t === i.alternate) break e;
						t = B(t), i = B(i)
					}
					t = null
				}
				else t = null;
				for (i = t, t = []; a && a !== i && (null === (c = a.alternate) || c !== i);) t.push(a), a = B(a);
				for (a = []; r && r !== i && (null === (c = r.alternate) || c !== i);) a.push(r), r = B(r);
				for (r = 0; r < t.length; r++) H(t[r], "bubbled", e);
				for (r = a.length; 0 < r--;) H(a[r], "captured", n);
				return [e, n]
			}
		},
		Qt = Object.prototype.hasOwnProperty;

	function Kt(e, t) {
		return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
	}

	function en(e, t) {
		if (Kt(e, t)) return !0;
		if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
		var n = Object.keys(e),
			r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++)
			if (!Qt.call(t, n[r]) || !Kt(e[n[r]], t[n[r]])) return !1;
		return !0
	}

	function tn(e) {
		var t = e;
		if (e.alternate)
			for (; t.return;) t = t.return;
		else {
			if (0 != (2 & t.effectTag)) return 1;
			for (; t.return;)
				if (0 != (2 & (t = t.return).effectTag)) return 1
		}
		return 3 === t.tag ? 2 : 3
	}

	function nn(e) {
		2 !== tn(e) && o("188")
	}

	function rn(e) {
		if (!(e = function (e) {
				var t = e.alternate;
				if (!t) return 3 === (t = tn(e)) && o("188"), 1 === t ? null : e;
				for (var n = e, r = t;;) {
					var i = n.return,
						a = i ? i.alternate : null;
					if (!i || !a) break;
					if (i.child === a.child) {
						for (var s = i.child; s;) {
							if (s === n) return nn(i), e;
							if (s === r) return nn(i), t;
							s = s.sibling
						}
						o("188")
					}
					if (n.return !== r.return) n = i, r = a;
					else {
						s = !1;
						for (var l = i.child; l;) {
							if (l === n) {
								s = !0, n = i, r = a;
								break
							}
							if (l === r) {
								s = !0, r = i, n = a;
								break
							}
							l = l.sibling
						}
						if (!s) {
							for (l = a.child; l;) {
								if (l === n) {
									s = !0, n = a, r = i;
									break
								}
								if (l === r) {
									s = !0, r = a, n = i;
									break
								}
								l = l.sibling
							}
							s || o("189")
						}
					}
					n.alternate !== r && o("190")
				}
				return 3 !== n.tag && o("188"), n.stateNode.current === n ? e : t
			}(e))) return null;
		for (var t = e;;) {
			if (5 === t.tag || 6 === t.tag) return t;
			if (t.child) t.child.return = t, t = t.child;
			else {
				if (t === e) break;
				for (; !t.sibling;) {
					if (!t.return || t.return === e) return null;
					t = t.return
				}
				t.sibling.return = t.return, t = t.sibling
			}
		}
		return null
	}
	var an = le.extend({
			animationName: null,
			elapsedTime: null,
			pseudoElement: null
		}),
		on = le.extend({
			clipboardData: function (e) {
				return "clipboardData" in e ? e.clipboardData : window.clipboardData
			}
		}),
		sn = Ft.extend({
			relatedTarget: null
		});

	function ln(e) {
		var t = e.keyCode;
		return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
	}
	var cn = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified"
		},
		un = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta"
		},
		hn = Ft.extend({
			key: function (e) {
				if (e.key) {
					var t = cn[e.key] || e.key;
					if ("Unidentified" !== t) return t
				}
				return "keypress" === e.type ? 13 === (e = ln(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? un[e.keyCode] || "Unidentified" : ""
			},
			location: null,
			ctrlKey: null,
			shiftKey: null,
			altKey: null,
			metaKey: null,
			repeat: null,
			locale: null,
			getModifierState: Gt,
			charCode: function (e) {
				return "keypress" === e.type ? ln(e) : 0
			},
			keyCode: function (e) {
				return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
			},
			which: function (e) {
				return "keypress" === e.type ? ln(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
			}
		}),
		pn = Yt.extend({
			dataTransfer: null
		}),
		dn = Ft.extend({
			touches: null,
			targetTouches: null,
			changedTouches: null,
			altKey: null,
			metaKey: null,
			ctrlKey: null,
			shiftKey: null,
			getModifierState: Gt
		}),
		fn = le.extend({
			propertyName: null,
			elapsedTime: null,
			pseudoElement: null
		}),
		mn = Yt.extend({
			deltaX: function (e) {
				return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
			},
			deltaY: function (e) {
				return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
			},
			deltaZ: null,
			deltaMode: null
		}),
		vn = [
			["abort", "abort"],
			[$, "animationEnd"],
			[Q, "animationIteration"],
			[K, "animationStart"],
			["canplay", "canPlay"],
			["canplaythrough", "canPlayThrough"],
			["drag", "drag"],
			["dragenter", "dragEnter"],
			["dragexit", "dragExit"],
			["dragleave", "dragLeave"],
			["dragover", "dragOver"],
			["durationchange", "durationChange"],
			["emptied", "emptied"],
			["encrypted", "encrypted"],
			["ended", "ended"],
			["error", "error"],
			["gotpointercapture", "gotPointerCapture"],
			["load", "load"],
			["loadeddata", "loadedData"],
			["loadedmetadata", "loadedMetadata"],
			["loadstart", "loadStart"],
			["lostpointercapture", "lostPointerCapture"],
			["mousemove", "mouseMove"],
			["mouseout", "mouseOut"],
			["mouseover", "mouseOver"],
			["playing", "playing"],
			["pointermove", "pointerMove"],
			["pointerout", "pointerOut"],
			["pointerover", "pointerOver"],
			["progress", "progress"],
			["scroll", "scroll"],
			["seeking", "seeking"],
			["stalled", "stalled"],
			["suspend", "suspend"],
			["timeupdate", "timeUpdate"],
			["toggle", "toggle"],
			["touchmove", "touchMove"],
			[ee, "transitionEnd"],
			["waiting", "waiting"],
			["wheel", "wheel"]
		],
		gn = {},
		yn = {};

	function xn(e, t) {
		var n = e[0],
			r = "on" + ((e = e[1])[0].toUpperCase() + e.slice(1));
		t = {
			phasedRegistrationNames: {
				bubbled: r,
				captured: r + "Capture"
			},
			dependencies: [n],
			isInteractive: t
		}, gn[e] = t, yn[n] = t
	} [
		["blur", "blur"],
		["cancel", "cancel"],
		["click", "click"],
		["close", "close"],
		["contextmenu", "contextMenu"],
		["copy", "copy"],
		["cut", "cut"],
		["auxclick", "auxClick"],
		["dblclick", "doubleClick"],
		["dragend", "dragEnd"],
		["dragstart", "dragStart"],
		["drop", "drop"],
		["focus", "focus"],
		["input", "input"],
		["invalid", "invalid"],
		["keydown", "keyDown"],
		["keypress", "keyPress"],
		["keyup", "keyUp"],
		["mousedown", "mouseDown"],
		["mouseup", "mouseUp"],
		["paste", "paste"],
		["pause", "pause"],
		["play", "play"],
		["pointercancel", "pointerCancel"],
		["pointerdown", "pointerDown"],
		["pointerup", "pointerUp"],
		["ratechange", "rateChange"],
		["reset", "reset"],
		["seeked", "seeked"],
		["submit", "submit"],
		["touchcancel", "touchCancel"],
		["touchend", "touchEnd"],
		["touchstart", "touchStart"],
		["volumechange", "volumeChange"]
	].forEach(function (e) {
		xn(e, !0)
	}), vn.forEach(function (e) {
		xn(e, !1)
	});
	var bn = {
			eventTypes: gn,
			isInteractiveTopLevelEventType: function (e) {
				return void 0 !== (e = yn[e]) && !0 === e.isInteractive
			},
			extractEvents: function (e, t, n, r) {
				var i = yn[e];
				if (!i) return null;
				switch (e) {
					case "keypress":
						if (0 === ln(n)) return null;
					case "keydown":
					case "keyup":
						e = hn;
						break;
					case "blur":
					case "focus":
						e = sn;
						break;
					case "click":
						if (2 === n.button) return null;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						e = Yt;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						e = pn;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						e = dn;
						break;
					case $:
					case Q:
					case K:
						e = an;
						break;
					case ee:
						e = fn;
						break;
					case "scroll":
						e = Ft;
						break;
					case "wheel":
						e = mn;
						break;
					case "copy":
					case "cut":
					case "paste":
						e = on;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						e = Jt;
						break;
					default:
						e = le
				}
				return V(t = e.getPooled(i, t, n, r)), t
			}
		},
		wn = bn.isInteractiveTopLevelEventType,
		_n = [];

	function Mn(e) {
		var t = e.targetInst,
			n = t;
		do {
			if (!n) {
				e.ancestors.push(n);
				break
			}
			var r;
			for (r = n; r.return;) r = r.return;
			if (!(r = 3 !== r.tag ? null : r.stateNode.containerInfo)) break;
			e.ancestors.push(n), n = N(r)
		} while (n);
		for (n = 0; n < e.ancestors.length; n++) {
			t = e.ancestors[n];
			var i = Be(e.nativeEvent);
			r = e.topLevelType;
			for (var a = e.nativeEvent, o = null, s = 0; s < g.length; s++) {
				var l = g[s];
				l && (l = l.extractEvents(r, t, a, i)) && (o = T(o, l))
			}
			R(o)
		}
	}
	var Sn = !0;

	function Tn(e, t) {
		if (!t) return null;
		var n = (wn(e) ? Cn : An).bind(null, e);
		t.addEventListener(e, n, !1)
	}

	function En(e, t) {
		if (!t) return null;
		var n = (wn(e) ? Cn : An).bind(null, e);
		t.addEventListener(e, n, !0)
	}

	function Cn(e, t) {
		ke(An, e, t)
	}

	function An(e, t) {
		if (Sn) {
			var n = Be(t);
			if (null === (n = N(n)) || "number" != typeof n.tag || 2 === tn(n) || (n = null), _n.length) {
				var r = _n.pop();
				r.topLevelType = e, r.nativeEvent = t, r.targetInst = n, e = r
			} else e = {
				topLevelType: e,
				nativeEvent: t,
				targetInst: n,
				ancestors: []
			};
			try {
				De(Mn, e)
			} finally {
				e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > _n.length && _n.push(e)
			}
		}
	}
	var Pn = {},
		Ln = 0,
		Rn = "_reactListenersID" + ("" + Math.random()).slice(2);

	function On(e) {
		return Object.prototype.hasOwnProperty.call(e, Rn) || (e[Rn] = Ln++, Pn[e[Rn]] = {}), Pn[e[Rn]]
	}

	function kn(e) {
		if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
		try {
			return e.activeElement || e.body
		} catch (t) {
			return e.body
		}
	}

	function In(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e
	}

	function Nn(e, t) {
		var n, r = In(e);
		for (e = 0; r;) {
			if (3 === r.nodeType) {
				if (n = e + r.textContent.length, e <= t && n >= t) return {
					node: r,
					offset: t - e
				};
				e = n
			}
			e: {
				for (; r;) {
					if (r.nextSibling) {
						r = r.nextSibling;
						break e
					}
					r = r.parentNode
				}
				r = void 0
			}
			r = In(r)
		}
	}

	function Dn() {
		for (var e = window, t = kn(); t instanceof e.HTMLIFrameElement;) {
			try {
				e = t.contentDocument.defaultView
			} catch (e) {
				break
			}
			t = kn(e.document)
		}
		return t
	}

	function zn(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
	}
	var Un = W && "documentMode" in document && 11 >= document.documentMode,
		Bn = {
			select: {
				phasedRegistrationNames: {
					bubbled: "onSelect",
					captured: "onSelectCapture"
				},
				dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
			}
		},
		Fn = null,
		jn = null,
		Hn = null,
		Gn = !1;

	function Vn(e, t) {
		var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
		return Gn || null == Fn || Fn !== kn(n) ? null : ("selectionStart" in (n = Fn) && zn(n) ? n = {
			start: n.selectionStart,
			end: n.selectionEnd
		} : n = {
			anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
			anchorOffset: n.anchorOffset,
			focusNode: n.focusNode,
			focusOffset: n.focusOffset
		}, Hn && en(Hn, n) ? null : (Hn = n, (e = le.getPooled(Bn.select, jn, e, t)).type = "select", e.target = Fn, V(e), e))
	}
	var Wn = {
		eventTypes: Bn,
		extractEvents: function (e, t, n, r) {
			var i, a = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
			if (!(i = !a)) {
				e: {
					a = On(a),
					i = b.onSelect;
					for (var o = 0; o < i.length; o++) {
						var s = i[o];
						if (!a.hasOwnProperty(s) || !a[s]) {
							a = !1;
							break e
						}
					}
					a = !0
				}
				i = !a
			}
			if (i) return null;
			switch (a = t ? z(t) : window, e) {
				case "focus":
					(Ue(a) || "true" === a.contentEditable) && (Fn = a, jn = t, Hn = null);
					break;
				case "blur":
					Hn = jn = Fn = null;
					break;
				case "mousedown":
					Gn = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					return Gn = !1, Vn(n, r);
				case "selectionchange":
					if (Un) break;
				case "keydown":
				case "keyup":
					return Vn(n, r)
			}
			return null
		}
	};

	function qn(e, t) {
		return e = i({
			children: void 0
		}, t), (t = function (e) {
			var t = "";
			return r.Children.forEach(e, function (e) {
				null != e && (t += e)
			}), t
		}(t.children)) && (e.children = t), e
	}

	function Xn(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
		} else {
			for (n = "" + yt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) return e[i].selected = !0, void(r && (e[i].defaultSelected = !0));
				null !== t || e[i].disabled || (t = e[i])
			}
			null !== t && (t.selected = !0)
		}
	}

	function Yn(e, t) {
		return null != t.dangerouslySetInnerHTML && o("91"), i({}, t, {
			value: void 0,
			defaultValue: void 0,
			children: "" + e._wrapperState.initialValue
		})
	}

	function Jn(e, t) {
		var n = t.value;
		null == n && (n = t.defaultValue, null != (t = t.children) && (null != n && o("92"), Array.isArray(t) && (1 >= t.length || o("93"), t = t[0]), n = t), null == n && (n = "")), e._wrapperState = {
			initialValue: yt(n)
		}
	}

	function Zn(e, t) {
		var n = yt(t.value),
			r = yt(t.defaultValue);
		null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
	}

	function $n(e) {
		var t = e.textContent;
		t === e._wrapperState.initialValue && (e.value = t)
	}
	P.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), w = U, _ = D, M = z, P.injectEventPluginsByName({
		SimpleEventPlugin: bn,
		EnterLeaveEventPlugin: $t,
		ChangeEventPlugin: Bt,
		SelectEventPlugin: Wn,
		BeforeInputEventPlugin: Te
	});
	var Qn = {
		html: "http://www.w3.org/1999/xhtml",
		mathml: "http://www.w3.org/1998/Math/MathML",
		svg: "http://www.w3.org/2000/svg"
	};

	function Kn(e) {
		switch (e) {
			case "svg":
				return "http://www.w3.org/2000/svg";
			case "math":
				return "http://www.w3.org/1998/Math/MathML";
			default:
				return "http://www.w3.org/1999/xhtml"
		}
	}

	function er(e, t) {
		return null == e || "http://www.w3.org/1999/xhtml" === e ? Kn(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
	}
	var tr = void 0,
		nr = function (e) {
			return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
				MSApp.execUnsafeLocalFunction(function () {
					return e(t, n)
				})
			} : e
		}(function (e, t) {
			if (e.namespaceURI !== Qn.svg || "innerHTML" in e) e.innerHTML = t;
			else {
				for ((tr = tr || document.createElement("div")).innerHTML = "<svg>" + t + "</svg>", t = tr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
				for (; t.firstChild;) e.appendChild(t.firstChild)
			}
		});

	function rr(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
		}
		e.textContent = t
	}
	var ir = {
			animationIterationCount: !0,
			borderImageOutset: !0,
			borderImageSlice: !0,
			borderImageWidth: !0,
			boxFlex: !0,
			boxFlexGroup: !0,
			boxOrdinalGroup: !0,
			columnCount: !0,
			columns: !0,
			flex: !0,
			flexGrow: !0,
			flexPositive: !0,
			flexShrink: !0,
			flexNegative: !0,
			flexOrder: !0,
			gridArea: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowSpan: !0,
			gridRowStart: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnSpan: !0,
			gridColumnStart: !0,
			fontWeight: !0,
			lineClamp: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			tabSize: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
			fillOpacity: !0,
			floodOpacity: !0,
			stopOpacity: !0,
			strokeDasharray: !0,
			strokeDashoffset: !0,
			strokeMiterlimit: !0,
			strokeOpacity: !0,
			strokeWidth: !0
		},
		ar = ["Webkit", "ms", "Moz", "O"];

	function or(e, t, n) {
		return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || ir.hasOwnProperty(e) && ir[e] ? ("" + t).trim() : t + "px"
	}

	function sr(e, t) {
		for (var n in e = e.style, t)
			if (t.hasOwnProperty(n)) {
				var r = 0 === n.indexOf("--"),
					i = or(n, t[n], r);
				"float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
			}
	}
	Object.keys(ir).forEach(function (e) {
		ar.forEach(function (t) {
			t = t + e.charAt(0).toUpperCase() + e.substring(1), ir[t] = ir[e]
		})
	});
	var lr = i({
		menuitem: !0
	}, {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	});

	function cr(e, t) {
		t && (lr[e] && (null != t.children || null != t.dangerouslySetInnerHTML) && o("137", e, ""), null != t.dangerouslySetInnerHTML && (null != t.children && o("60"), "object" == typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML || o("61")), null != t.style && "object" != typeof t.style && o("62", ""))
	}

	function ur(e, t) {
		if (-1 === e.indexOf("-")) return "string" == typeof t.is;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0
		}
	}

	function hr(e, t) {
		var n = On(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
		t = b[t];
		for (var r = 0; r < t.length; r++) {
			var i = t[r];
			if (!n.hasOwnProperty(i) || !n[i]) {
				switch (i) {
					case "scroll":
						En("scroll", e);
						break;
					case "focus":
					case "blur":
						En("focus", e), En("blur", e), n.blur = !0, n.focus = !0;
						break;
					case "cancel":
					case "close":
						Fe(i) && En(i, e);
						break;
					case "invalid":
					case "submit":
					case "reset":
						break;
					default:
						-1 === te.indexOf(i) && Tn(i, e)
				}
				n[i] = !0
			}
		}
	}

	function pr() {}
	var dr = null,
		fr = null;

	function mr(e, t) {
		switch (e) {
			case "button":
			case "input":
			case "select":
			case "textarea":
				return !!t.autoFocus
		}
		return !1
	}

	function vr(e, t) {
		return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
	}
	var gr = "function" == typeof setTimeout ? setTimeout : void 0,
		yr = "function" == typeof clearTimeout ? clearTimeout : void 0;

	function xr(e) {
		for (e = e.nextSibling; e && 1 !== e.nodeType && 3 !== e.nodeType;) e = e.nextSibling;
		return e
	}

	function br(e) {
		for (e = e.firstChild; e && 1 !== e.nodeType && 3 !== e.nodeType;) e = e.nextSibling;
		return e
	}
	new Set;
	var wr = [],
		_r = -1;

	function Mr(e) {
		0 > _r || (e.current = wr[_r], wr[_r] = null, _r--)
	}

	function Sr(e, t) {
		wr[++_r] = e.current, e.current = t
	}
	var Tr = {},
		Er = {
			current: Tr
		},
		Cr = {
			current: !1
		},
		Ar = Tr;

	function Pr(e, t) {
		var n = e.type.contextTypes;
		if (!n) return Tr;
		var r = e.stateNode;
		if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
		var i, a = {};
		for (i in n) a[i] = t[i];
		return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
	}

	function Lr(e) {
		return null !== (e = e.childContextTypes) && void 0 !== e
	}

	function Rr(e) {
		Mr(Cr), Mr(Er)
	}

	function Or(e) {
		Mr(Cr), Mr(Er)
	}

	function kr(e, t, n) {
		Er.current !== Tr && o("168"), Sr(Er, t), Sr(Cr, n)
	}

	function Ir(e, t, n) {
		var r = e.stateNode;
		if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n;
		for (var a in r = r.getChildContext()) a in e || o("108", st(t) || "Unknown", a);
		return i({}, n, r)
	}

	function Nr(e) {
		var t = e.stateNode;
		return t = t && t.__reactInternalMemoizedMergedChildContext || Tr, Ar = Er.current, Sr(Er, t), Sr(Cr, Cr.current), !0
	}

	function Dr(e, t, n) {
		var r = e.stateNode;
		r || o("169"), n ? (t = Ir(e, t, Ar), r.__reactInternalMemoizedMergedChildContext = t, Mr(Cr), Mr(Er), Sr(Er, t)) : Mr(Cr), Sr(Cr, n)
	}
	var zr = null,
		Ur = null;

	function Br(e) {
		return function (t) {
			try {
				return e(t)
			} catch (e) {}
		}
	}

	function Fr(e, t, n, r) {
		return new function (e, t, n, r) {
			this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.firstContextDependency = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
		}(e, t, n, r)
	}

	function jr(e) {
		return !(!(e = e.prototype) || !e.isReactComponent)
	}

	function Hr(e, t) {
		var n = e.alternate;
		return null === n ? ((n = Fr(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, n.firstContextDependency = e.firstContextDependency, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
	}

	function Gr(e, t, n, r, i, a) {
		var s = 2;
		if (r = e, "function" == typeof e) jr(e) && (s = 1);
		else if ("string" == typeof e) s = 5;
		else e: switch (e) {
			case Je:
				return Vr(n.children, i, a, t);
			case et:
				return Wr(n, 3 | i, a, t);
			case Ze:
				return Wr(n, 2 | i, a, t);
			case $e:
				return (e = Fr(12, n, t, 4 | i)).elementType = $e, e.type = $e, e.expirationTime = a, e;
			case nt:
				return (e = Fr(13, n, t, i)).elementType = nt, e.type = nt, e.expirationTime = a, e;
			default:
				if ("object" == typeof e && null !== e) switch (e.$$typeof) {
					case Qe:
						s = 10;
						break e;
					case Ke:
						s = 9;
						break e;
					case tt:
						s = 11;
						break e;
					case rt:
						s = 14;
						break e;
					case it:
						s = 16, r = null;
						break e
				}
				o("130", null == e ? e : typeof e, "")
		}
		return (t = Fr(s, n, t, i)).elementType = e, t.type = r, t.expirationTime = a, t
	}

	function Vr(e, t, n, r) {
		return (e = Fr(7, e, r, t)).expirationTime = n, e
	}

	function Wr(e, t, n, r) {
		return e = Fr(8, e, r, t), t = 0 == (1 & t) ? Ze : et, e.elementType = t, e.type = t, e.expirationTime = n, e
	}

	function qr(e, t, n) {
		return (e = Fr(6, e, null, t)).expirationTime = n, e
	}

	function Xr(e, t, n) {
		return (t = Fr(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t
	}

	function Yr(e, t) {
		e.didError = !1;
		var n = e.earliestPendingTime;
		0 === n ? e.earliestPendingTime = e.latestPendingTime = t : n < t ? e.earliestPendingTime = t : e.latestPendingTime > t && (e.latestPendingTime = t), $r(t, e)
	}

	function Jr(e, t) {
		e.didError = !1;
		var n = e.latestPingedTime;
		0 !== n && n >= t && (e.latestPingedTime = 0), n = e.earliestPendingTime;
		var r = e.latestPendingTime;
		n === t ? e.earliestPendingTime = r === t ? e.latestPendingTime = 0 : r : r === t && (e.latestPendingTime = n), n = e.earliestSuspendedTime, r = e.latestSuspendedTime, 0 === n ? e.earliestSuspendedTime = e.latestSuspendedTime = t : n < t ? e.earliestSuspendedTime = t : r > t && (e.latestSuspendedTime = t), $r(t, e)
	}

	function Zr(e, t) {
		var n = e.earliestPendingTime;
		return e = e.earliestSuspendedTime, n > t && (t = n), e > t && (t = e), t
	}

	function $r(e, t) {
		var n = t.earliestSuspendedTime,
			r = t.latestSuspendedTime,
			i = t.earliestPendingTime,
			a = t.latestPingedTime;
		0 === (i = 0 !== i ? i : a) && (0 === e || r < e) && (i = r), 0 !== (e = i) && n > e && (e = n), t.nextExpirationTimeToWorkOn = i, t.expirationTime = e
	}
	var Qr = !1;

	function Kr(e) {
		return {
			baseState: e,
			firstUpdate: null,
			lastUpdate: null,
			firstCapturedUpdate: null,
			lastCapturedUpdate: null,
			firstEffect: null,
			lastEffect: null,
			firstCapturedEffect: null,
			lastCapturedEffect: null
		}
	}

	function ei(e) {
		return {
			baseState: e.baseState,
			firstUpdate: e.firstUpdate,
			lastUpdate: e.lastUpdate,
			firstCapturedUpdate: null,
			lastCapturedUpdate: null,
			firstEffect: null,
			lastEffect: null,
			firstCapturedEffect: null,
			lastCapturedEffect: null
		}
	}

	function ti(e) {
		return {
			expirationTime: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null,
			nextEffect: null
		}
	}

	function ni(e, t) {
		null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t, e.lastUpdate = t)
	}

	function ri(e, t) {
		var n = e.alternate;
		if (null === n) {
			var r = e.updateQueue,
				i = null;
			null === r && (r = e.updateQueue = Kr(e.memoizedState))
		} else r = e.updateQueue, i = n.updateQueue, null === r ? null === i ? (r = e.updateQueue = Kr(e.memoizedState), i = n.updateQueue = Kr(n.memoizedState)) : r = e.updateQueue = ei(i) : null === i && (i = n.updateQueue = ei(r));
		null === i || r === i ? ni(r, t) : null === r.lastUpdate || null === i.lastUpdate ? (ni(r, t), ni(i, t)) : (ni(r, t), i.lastUpdate = t)
	}

	function ii(e, t) {
		var n = e.updateQueue;
		null === (n = null === n ? e.updateQueue = Kr(e.memoizedState) : ai(e, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = t : (n.lastCapturedUpdate.next = t, n.lastCapturedUpdate = t)
	}

	function ai(e, t) {
		var n = e.alternate;
		return null !== n && t === n.updateQueue && (t = e.updateQueue = ei(t)), t
	}

	function oi(e, t, n, r, a, o) {
		switch (n.tag) {
			case 1:
				return "function" == typeof (e = n.payload) ? e.call(o, r, a) : e;
			case 3:
				e.effectTag = -2049 & e.effectTag | 64;
			case 0:
				if (null === (a = "function" == typeof (e = n.payload) ? e.call(o, r, a) : e) || void 0 === a) break;
				return i({}, r, a);
			case 2:
				Qr = !0
		}
		return r
	}

	function si(e, t, n, r, i) {
		Qr = !1;
		for (var a = (t = ai(e, t)).baseState, o = null, s = 0, l = t.firstUpdate, c = a; null !== l;) {
			var u = l.expirationTime;
			u < i ? (null === o && (o = l, a = c), s < u && (s = u)) : (c = oi(e, 0, l, c, n, r), null !== l.callback && (e.effectTag |= 32, l.nextEffect = null, null === t.lastEffect ? t.firstEffect = t.lastEffect = l : (t.lastEffect.nextEffect = l, t.lastEffect = l))), l = l.next
		}
		for (u = null, l = t.firstCapturedUpdate; null !== l;) {
			var h = l.expirationTime;
			h < i ? (null === u && (u = l, null === o && (a = c)), s < h && (s = h)) : (c = oi(e, 0, l, c, n, r), null !== l.callback && (e.effectTag |= 32, l.nextEffect = null, null === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = l : (t.lastCapturedEffect.nextEffect = l, t.lastCapturedEffect = l))), l = l.next
		}
		null === o && (t.lastUpdate = null), null === u ? t.lastCapturedUpdate = null : e.effectTag |= 32, null === o && null === u && (a = c), t.baseState = a, t.firstUpdate = o, t.firstCapturedUpdate = u, e.expirationTime = s, e.memoizedState = c
	}

	function li(e, t, n) {
		null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate), t.firstCapturedUpdate = t.lastCapturedUpdate = null), ci(t.firstEffect, n), t.firstEffect = t.lastEffect = null, ci(t.firstCapturedEffect, n), t.firstCapturedEffect = t.lastCapturedEffect = null
	}

	function ci(e, t) {
		for (; null !== e;) {
			var n = e.callback;
			if (null !== n) {
				e.callback = null;
				var r = t;
				"function" != typeof n && o("191", n), n.call(r)
			}
			e = e.nextEffect
		}
	}

	function ui(e, t) {
		return {
			value: e,
			source: t,
			stack: lt(t)
		}
	}
	var hi = {
			current: null
		},
		pi = null,
		di = null,
		fi = null;

	function mi(e, t) {
		var n = e.type._context;
		Sr(hi, n._currentValue), n._currentValue = t
	}

	function vi(e) {
		var t = hi.current;
		Mr(hi), e.type._context._currentValue = t
	}

	function gi(e) {
		pi = e, fi = di = null, e.firstContextDependency = null
	}

	function yi(e, t) {
		return fi !== e && !1 !== t && 0 !== t && ("number" == typeof t && 1073741823 !== t || (fi = e, t = 1073741823), t = {
			context: e,
			observedBits: t,
			next: null
		}, null === di ? (null === pi && o("293"), pi.firstContextDependency = di = t) : di = di.next = t), e._currentValue
	}
	var xi = {},
		bi = {
			current: xi
		},
		wi = {
			current: xi
		},
		_i = {
			current: xi
		};

	function Mi(e) {
		return e === xi && o("174"), e
	}

	function Si(e, t) {
		Sr(_i, t), Sr(wi, e), Sr(bi, xi);
		var n = t.nodeType;
		switch (n) {
			case 9:
			case 11:
				t = (t = t.documentElement) ? t.namespaceURI : er(null, "");
				break;
			default:
				t = er(t = (n = 8 === n ? t.parentNode : t).namespaceURI || null, n = n.tagName)
		}
		Mr(bi), Sr(bi, t)
	}

	function Ti(e) {
		Mr(bi), Mr(wi), Mr(_i)
	}

	function Ei(e) {
		Mi(_i.current);
		var t = Mi(bi.current),
			n = er(t, e.type);
		t !== n && (Sr(wi, e), Sr(bi, n))
	}

	function Ci(e) {
		wi.current === e && (Mr(bi), Mr(wi))
	}

	function Ai(e, t) {
		if (e && e.defaultProps)
			for (var n in t = i({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
		return t
	}
	var Pi = Ve.ReactCurrentOwner,
		Li = (new r.Component).refs;

	function Ri(e, t, n, r) {
		n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : i({}, t, n), e.memoizedState = n, null !== (r = e.updateQueue) && 0 === e.expirationTime && (r.baseState = n)
	}
	var Oi = {
		isMounted: function (e) {
			return !!(e = e._reactInternalFiber) && 2 === tn(e)
		},
		enqueueSetState: function (e, t, n) {
			e = e._reactInternalFiber;
			var r = Mo(),
				i = ti(r = Ya(r, e));
			i.payload = t, void 0 !== n && null !== n && (i.callback = n), Ga(), ri(e, i), $a(e, r)
		},
		enqueueReplaceState: function (e, t, n) {
			e = e._reactInternalFiber;
			var r = Mo(),
				i = ti(r = Ya(r, e));
			i.tag = 1, i.payload = t, void 0 !== n && null !== n && (i.callback = n), Ga(), ri(e, i), $a(e, r)
		},
		enqueueForceUpdate: function (e, t) {
			e = e._reactInternalFiber;
			var n = Mo(),
				r = ti(n = Ya(n, e));
			r.tag = 2, void 0 !== t && null !== t && (r.callback = t), Ga(), ri(e, r), $a(e, n)
		}
	};

	function ki(e, t, n, r, i, a, o) {
		return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, o) : !t.prototype || !t.prototype.isPureReactComponent || (!en(n, r) || !en(i, a))
	}

	function Ii(e, t, n) {
		var r = !1,
			i = Tr,
			a = t.contextType;
		return "object" == typeof a && null !== a ? a = Pi.currentDispatcher.readContext(a) : (i = Lr(t) ? Ar : Er.current, a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Pr(e, i) : Tr), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Oi, e.stateNode = t, t._reactInternalFiber = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t
	}

	function Ni(e, t, n, r) {
		e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Oi.enqueueReplaceState(t, t.state, null)
	}

	function Di(e, t, n, r) {
		var i = e.stateNode;
		i.props = n, i.state = e.memoizedState, i.refs = Li;
		var a = t.contextType;
		"object" == typeof a && null !== a ? i.context = Pi.currentDispatcher.readContext(a) : (a = Lr(t) ? Ar : Er.current, i.context = Pr(e, a)), null !== (a = e.updateQueue) && (si(e, a, n, i, r), i.state = e.memoizedState), "function" == typeof (a = t.getDerivedStateFromProps) && (Ri(e, t, a, n), i.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && Oi.enqueueReplaceState(i, i.state, null), null !== (a = e.updateQueue) && (si(e, a, n, i, r), i.state = e.memoizedState)), "function" == typeof i.componentDidMount && (e.effectTag |= 4)
	}
	var zi = Array.isArray;

	function Ui(e, t, n) {
		if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
			if (n._owner) {
				var r = void 0;
				(n = n._owner) && (1 !== n.tag && o("289"), r = n.stateNode), r || o("147", e);
				var i = "" + e;
				return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : ((t = function (e) {
					var t = r.refs;
					t === Li && (t = r.refs = {}), null === e ? delete t[i] : t[i] = e
				})._stringRef = i, t)
			}
			"string" != typeof e && o("284"), n._owner || o("290", e)
		}
		return e
	}

	function Bi(e, t) {
		"textarea" !== e.type && o("31", "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "")
	}

	function Fi(e) {
		function t(t, n) {
			if (e) {
				var r = t.lastEffect;
				null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
			}
		}

		function n(n, r) {
			if (!e) return null;
			for (; null !== r;) t(n, r), r = r.sibling;
			return null
		}

		function r(e, t) {
			for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
			return e
		}

		function i(e, t, n) {
			return (e = Hr(e, t)).index = 0, e.sibling = null, e
		}

		function a(t, n, r) {
			return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2, n) : r : (t.effectTag = 2, n) : n
		}

		function s(t) {
			return e && null === t.alternate && (t.effectTag = 2), t
		}

		function l(e, t, n, r) {
			return null === t || 6 !== t.tag ? ((t = qr(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t)
		}

		function c(e, t, n, r) {
			return null !== t && t.elementType === n.type ? ((r = i(t, n.props)).ref = Ui(e, t, n), r.return = e, r) : ((r = Gr(n.type, n.key, n.props, null, e.mode, r)).ref = Ui(e, t, n), r.return = e, r)
		}

		function u(e, t, n, r) {
			return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Xr(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t)
		}

		function h(e, t, n, r, a) {
			return null === t || 7 !== t.tag ? ((t = Vr(n, e.mode, r, a)).return = e, t) : ((t = i(t, n)).return = e, t)
		}

		function p(e, t, n) {
			if ("string" == typeof t || "number" == typeof t) return (t = qr("" + t, e.mode, n)).return = e, t;
			if ("object" == typeof t && null !== t) {
				switch (t.$$typeof) {
					case Xe:
						return (n = Gr(t.type, t.key, t.props, null, e.mode, n)).ref = Ui(e, null, t), n.return = e, n;
					case Ye:
						return (t = Xr(t, e.mode, n)).return = e, t
				}
				if (zi(t) || ot(t)) return (t = Vr(t, e.mode, n, null)).return = e, t;
				Bi(e, t)
			}
			return null
		}

		function d(e, t, n, r) {
			var i = null !== t ? t.key : null;
			if ("string" == typeof n || "number" == typeof n) return null !== i ? null : l(e, t, "" + n, r);
			if ("object" == typeof n && null !== n) {
				switch (n.$$typeof) {
					case Xe:
						return n.key === i ? n.type === Je ? h(e, t, n.props.children, r, i) : c(e, t, n, r) : null;
					case Ye:
						return n.key === i ? u(e, t, n, r) : null
				}
				if (zi(n) || ot(n)) return null !== i ? null : h(e, t, n, r, null);
				Bi(e, n)
			}
			return null
		}

		function f(e, t, n, r, i) {
			if ("string" == typeof r || "number" == typeof r) return l(t, e = e.get(n) || null, "" + r, i);
			if ("object" == typeof r && null !== r) {
				switch (r.$$typeof) {
					case Xe:
						return e = e.get(null === r.key ? n : r.key) || null, r.type === Je ? h(t, e, r.props.children, i, r.key) : c(t, e, r, i);
					case Ye:
						return u(t, e = e.get(null === r.key ? n : r.key) || null, r, i)
				}
				if (zi(r) || ot(r)) return h(t, e = e.get(n) || null, r, i, null);
				Bi(t, r)
			}
			return null
		}

		function m(i, o, s, l) {
			for (var c = null, u = null, h = o, m = o = 0, v = null; null !== h && m < s.length; m++) {
				h.index > m ? (v = h, h = null) : v = h.sibling;
				var g = d(i, h, s[m], l);
				if (null === g) {
					null === h && (h = v);
					break
				}
				e && h && null === g.alternate && t(i, h), o = a(g, o, m), null === u ? c = g : u.sibling = g, u = g, h = v
			}
			if (m === s.length) return n(i, h), c;
			if (null === h) {
				for (; m < s.length; m++)(h = p(i, s[m], l)) && (o = a(h, o, m), null === u ? c = h : u.sibling = h, u = h);
				return c
			}
			for (h = r(i, h); m < s.length; m++)(v = f(h, i, m, s[m], l)) && (e && null !== v.alternate && h.delete(null === v.key ? m : v.key), o = a(v, o, m), null === u ? c = v : u.sibling = v, u = v);
			return e && h.forEach(function (e) {
				return t(i, e)
			}), c
		}

		function v(i, s, l, c) {
			var u = ot(l);
			"function" != typeof u && o("150"), null == (l = u.call(l)) && o("151");
			for (var h = u = null, m = s, v = s = 0, g = null, y = l.next(); null !== m && !y.done; v++, y = l.next()) {
				m.index > v ? (g = m, m = null) : g = m.sibling;
				var x = d(i, m, y.value, c);
				if (null === x) {
					m || (m = g);
					break
				}
				e && m && null === x.alternate && t(i, m), s = a(x, s, v), null === h ? u = x : h.sibling = x, h = x, m = g
			}
			if (y.done) return n(i, m), u;
			if (null === m) {
				for (; !y.done; v++, y = l.next()) null !== (y = p(i, y.value, c)) && (s = a(y, s, v), null === h ? u = y : h.sibling = y, h = y);
				return u
			}
			for (m = r(i, m); !y.done; v++, y = l.next()) null !== (y = f(m, i, v, y.value, c)) && (e && null !== y.alternate && m.delete(null === y.key ? v : y.key), s = a(y, s, v), null === h ? u = y : h.sibling = y, h = y);
			return e && m.forEach(function (e) {
				return t(i, e)
			}), u
		}
		return function (e, r, a, l) {
			var c = "object" == typeof a && null !== a && a.type === Je && null === a.key;
			c && (a = a.props.children);
			var u = "object" == typeof a && null !== a;
			if (u) switch (a.$$typeof) {
				case Xe:
					e: {
						for (u = a.key, c = r; null !== c;) {
							if (c.key === u) {
								if (7 === c.tag ? a.type === Je : c.elementType === a.type) {
									n(e, c.sibling), (r = i(c, a.type === Je ? a.props.children : a.props)).ref = Ui(e, c, a), r.return = e, e = r;
									break e
								}
								n(e, c);
								break
							}
							t(e, c), c = c.sibling
						}
						a.type === Je ? ((r = Vr(a.props.children, e.mode, l, a.key)).return = e, e = r) : ((l = Gr(a.type, a.key, a.props, null, e.mode, l)).ref = Ui(e, r, a), l.return = e, e = l)
					}
					return s(e);
				case Ye:
					e: {
						for (c = a.key; null !== r;) {
							if (r.key === c) {
								if (4 === r.tag && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
									n(e, r.sibling), (r = i(r, a.children || [])).return = e, e = r;
									break e
								}
								n(e, r);
								break
							}
							t(e, r), r = r.sibling
						}(r = Xr(a, e.mode, l)).return = e,
						e = r
					}
					return s(e)
			}
			if ("string" == typeof a || "number" == typeof a) return a = "" + a, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = i(r, a)).return = e, e = r) : (n(e, r), (r = qr(a, e.mode, l)).return = e, e = r), s(e);
			if (zi(a)) return m(e, r, a, l);
			if (ot(a)) return v(e, r, a, l);
			if (u && Bi(e, a), void 0 === a && !c) switch (e.tag) {
				case 1:
				case 0:
					o("152", (l = e.type).displayName || l.name || "Component")
			}
			return n(e, r)
		}
	}
	var ji = Fi(!0),
		Hi = Fi(!1),
		Gi = null,
		Vi = null,
		Wi = !1;

	function qi(e, t) {
		var n = Fr(5, null, null, 0);
		n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
	}

	function Xi(e, t) {
		switch (e.tag) {
			case 5:
				var n = e.type;
				return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
			case 6:
				return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
			default:
				return !1
		}
	}

	function Yi(e) {
		if (Wi) {
			var t = Vi;
			if (t) {
				var n = t;
				if (!Xi(e, t)) {
					if (!(t = xr(n)) || !Xi(e, t)) return e.effectTag |= 2, Wi = !1, void(Gi = e);
					qi(Gi, n)
				}
				Gi = e, Vi = br(t)
			} else e.effectTag |= 2, Wi = !1, Gi = e
		}
	}

	function Ji(e) {
		for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag;) e = e.return;
		Gi = e
	}

	function Zi(e) {
		if (e !== Gi) return !1;
		if (!Wi) return Ji(e), Wi = !0, !1;
		var t = e.type;
		if (5 !== e.tag || "head" !== t && "body" !== t && !vr(t, e.memoizedProps))
			for (t = Vi; t;) qi(e, t), t = xr(t);
		return Ji(e), Vi = Gi ? xr(e.stateNode) : null, !0
	}

	function $i() {
		Vi = Gi = null, Wi = !1
	}
	var Qi = Ve.ReactCurrentOwner;

	function Ki(e, t, n, r) {
		t.child = null === e ? Hi(t, null, n, r) : ji(t, e.child, n, r)
	}

	function ea(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		return gi(t), r = n(r, a), t.effectTag |= 1, Ki(e, t, r, i), t.child
	}

	function ta(e, t, n, r, i, a) {
		if (null === e) {
			var o = n.type;
			return "function" != typeof o || jr(o) || void 0 !== o.defaultProps || null !== n.compare ? ((e = Gr(n.type, null, r, null, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, na(e, t, o, r, i, a))
		}
		return o = e.child, i < a && (i = o.memoizedProps, (n = null !== (n = n.compare) ? n : en)(i, r) && e.ref === t.ref) ? ua(e, t, a) : ((e = Hr(o, r)).ref = t.ref, e.return = t, t.child = e)
	}

	function na(e, t, n, r, i, a) {
		return null !== e && i < a && en(e.memoizedProps, r) && e.ref === t.ref ? ua(e, t, a) : ia(e, t, n, r, a)
	}

	function ra(e, t) {
		var n = t.ref;
		(null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
	}

	function ia(e, t, n, r, i) {
		var a = Lr(n) ? Ar : Er.current;
		return a = Pr(t, a), gi(t), n = n(r, a), t.effectTag |= 1, Ki(e, t, n, i), t.child
	}

	function aa(e, t, n, r, i) {
		if (Lr(n)) {
			var a = !0;
			Nr(t)
		} else a = !1;
		if (gi(t), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), Ii(t, n, r), Di(t, n, r, i), r = !0;
		else if (null === e) {
			var o = t.stateNode,
				s = t.memoizedProps;
			o.props = s;
			var l = o.context,
				c = n.contextType;
			"object" == typeof c && null !== c ? c = Pi.currentDispatcher.readContext(c) : c = Pr(t, c = Lr(n) ? Ar : Er.current);
			var u = n.getDerivedStateFromProps,
				h = "function" == typeof u || "function" == typeof o.getSnapshotBeforeUpdate;
			h || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (s !== r || l !== c) && Ni(t, o, r, c), Qr = !1;
			var p = t.memoizedState;
			l = o.state = p;
			var d = t.updateQueue;
			null !== d && (si(t, d, r, o, i), l = t.memoizedState), s !== r || p !== l || Cr.current || Qr ? ("function" == typeof u && (Ri(t, n, u, r), l = t.memoizedState), (s = Qr || ki(t, n, s, r, p, l, c)) ? (h || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof o.componentDidMount && (t.effectTag |= 4), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = c, r = s) : ("function" == typeof o.componentDidMount && (t.effectTag |= 4), r = !1)
		} else o = t.stateNode, s = t.memoizedProps, o.props = t.type === t.elementType ? s : Ai(t.type, s), l = o.context, "object" == typeof (c = n.contextType) && null !== c ? c = Pi.currentDispatcher.readContext(c) : c = Pr(t, c = Lr(n) ? Ar : Er.current), (h = "function" == typeof (u = n.getDerivedStateFromProps) || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (s !== r || l !== c) && Ni(t, o, r, c), Qr = !1, l = t.memoizedState, p = o.state = l, null !== (d = t.updateQueue) && (si(t, d, r, o, i), p = t.memoizedState), s !== r || l !== p || Cr.current || Qr ? ("function" == typeof u && (Ri(t, n, u, r), p = t.memoizedState), (u = Qr || ki(t, n, s, r, l, p, c)) ? (h || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, p, c), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, p, c)), "function" == typeof o.componentDidUpdate && (t.effectTag |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof o.componentDidUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof o.getSnapshotBeforeUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = r, t.memoizedState = p), o.props = r, o.state = p, o.context = c, r = u) : ("function" != typeof o.componentDidUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof o.getSnapshotBeforeUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), r = !1);
		return oa(e, t, n, r, a, i)
	}

	function oa(e, t, n, r, i, a) {
		ra(e, t);
		var o = 0 != (64 & t.effectTag);
		if (!r && !o) return i && Dr(t, n, !1), ua(e, t, a);
		r = t.stateNode, Qi.current = t;
		var s = o && "function" != typeof n.getDerivedStateFromError ? null : r.render();
		return t.effectTag |= 1, null !== e && o ? (t.child = ji(t, e.child, null, a), t.child = ji(t, null, s, a)) : Ki(e, t, s, a), t.memoizedState = r.state, i && Dr(t, n, !0), t.child
	}

	function sa(e) {
		var t = e.stateNode;
		t.pendingContext ? kr(0, t.pendingContext, t.pendingContext !== t.context) : t.context && kr(0, t.context, !1), Si(e, t.containerInfo)
	}

	function la(e, t, n) {
		var r = t.mode,
			i = t.pendingProps,
			a = t.memoizedState;
		if (0 == (64 & t.effectTag)) {
			a = null;
			var o = !1
		} else a = {
			timedOutAt: null !== a ? a.timedOutAt : 0
		}, o = !0, t.effectTag &= -65;
		return null === e ? o ? (o = i.fallback, i = Vr(null, r, 0, null), 0 == (1 & t.mode) && ca(t, i, null !== t.memoizedState ? t.child.child : t.child), r = Vr(o, r, n, null), i.sibling = r, (n = i).return = r.return = t) : n = r = Hi(t, null, i.children, n) : null !== e.memoizedState ? (e = (r = e.child).sibling, o ? (n = i.fallback, (i = Hr(r, r.pendingProps)).effectTag |= 2, 0 == (1 & t.mode) && ((o = null !== t.memoizedState ? t.child.child : t.child) !== r.child && ca(t, i, o)), (r = i.sibling = Hr(e, n, e.expirationTime)).effectTag |= 2, n = i, i.childExpirationTime = 0, n.return = r.return = t) : (o = e.child, r = ji(t, r.child, i.children, n), ji(t, o, null, n), n = r)) : (e = e.child, o ? (o = i.fallback, (i = Vr(null, r, 0, null)).effectTag |= 2, i.child = e, e.return = i, 0 == (1 & t.mode) && ca(t, i, null !== t.memoizedState ? t.child.child : t.child), (r = i.sibling = Vr(o, r, n, null)).effectTag |= 2, n = i, i.childExpirationTime = 0, n.return = r.return = t) : r = n = ji(t, e, i.children, n)), t.memoizedState = a, t.child = n, r
	}

	function ca(e, t, n) {
		for (n = t.child = n; null !== n;) null === t.firstEffect && (t.firstEffect = n.firstEffect), null !== n.lastEffect && (null !== t.lastEffect && (t.lastEffect.nextEffect = n.firstEffect), t.lastEffect = n.lastEffect), 1 < n.effectTag && (null !== t.lastEffect ? t.lastEffect.nextEffect = n : t.firstEffect = n, t.lastEffect = n), n.return = t, n = n.sibling;
		e.firstEffect = t.firstEffect, e.lastEffect = t.lastEffect
	}

	function ua(e, t, n) {
		if (null !== e && (t.firstContextDependency = e.firstContextDependency), t.childExpirationTime < n) return null;
		if (null !== e && t.child !== e.child && o("153"), null !== t.child) {
			for (n = Hr(e = t.child, e.pendingProps, e.expirationTime), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Hr(e, e.pendingProps, e.expirationTime)).return = t;
			n.sibling = null
		}
		return t.child
	}

	function ha(e, t, n) {
		var r = t.expirationTime;
		if (null !== e && e.memoizedProps === t.pendingProps && !Cr.current && r < n) {
			switch (t.tag) {
				case 3:
					sa(t), $i();
					break;
				case 5:
					Ei(t);
					break;
				case 1:
					Lr(t.type) && Nr(t);
					break;
				case 4:
					Si(t, t.stateNode.containerInfo);
					break;
				case 10:
					mi(t, t.memoizedProps.value);
					break;
				case 13:
					if (null !== t.memoizedState) return 0 !== (r = t.child.childExpirationTime) && r >= n ? la(e, t, n) : null !== (t = ua(e, t, n)) ? t.sibling : null
			}
			return ua(e, t, n)
		}
		switch (t.expirationTime = 0, t.tag) {
			case 2:
				r = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps;
				var i = Pr(t, Er.current);
				if (gi(t), i = r(e, i), t.effectTag |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) {
					if (t.tag = 1, Lr(r)) {
						var a = !0;
						Nr(t)
					} else a = !1;
					t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null;
					var s = r.getDerivedStateFromProps;
					"function" == typeof s && Ri(t, r, s, e), i.updater = Oi, t.stateNode = i, i._reactInternalFiber = t, Di(t, r, e, n), t = oa(null, t, r, !0, a, n)
				} else t.tag = 0, Ki(null, t, i, n), t = t.child;
				return t;
			case 16:
				switch (i = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), a = t.pendingProps, e = function (e) {
					var t = e._result;
					switch (e._status) {
						case 1:
							return t;
						case 2:
						case 0:
							throw t;
						default:
							throw e._status = 0, (t = (t = e._ctor)()).then(function (t) {
								0 === e._status && (t = t.default, e._status = 1, e._result = t)
							}, function (t) {
								0 === e._status && (e._status = 2, e._result = t)
							}), e._result = t, t
					}
				}(i), t.type = e, i = t.tag = function (e) {
					if ("function" == typeof e) return jr(e) ? 1 : 0;
					if (void 0 !== e && null !== e) {
						if ((e = e.$$typeof) === tt) return 11;
						if (e === rt) return 14
					}
					return 2
				}(e), a = Ai(e, a), s = void 0, i) {
					case 0:
						s = ia(null, t, e, a, n);
						break;
					case 1:
						s = aa(null, t, e, a, n);
						break;
					case 11:
						s = ea(null, t, e, a, n);
						break;
					case 14:
						s = ta(null, t, e, Ai(e.type, a), r, n);
						break;
					default:
						o("283", e)
				}
				return s;
			case 0:
				return r = t.type, i = t.pendingProps, ia(e, t, r, i = t.elementType === r ? i : Ai(r, i), n);
			case 1:
				return r = t.type, i = t.pendingProps, aa(e, t, r, i = t.elementType === r ? i : Ai(r, i), n);
			case 3:
				return sa(t), null === (r = t.updateQueue) && o("282"), i = null !== (i = t.memoizedState) ? i.element : null, si(t, r, t.pendingProps, null, n), (r = t.memoizedState.element) === i ? ($i(), t = ua(e, t, n)) : (i = t.stateNode, (i = (null === e || null === e.child) && i.hydrate) && (Vi = br(t.stateNode.containerInfo), Gi = t, i = Wi = !0), i ? (t.effectTag |= 2, t.child = Hi(t, null, r, n)) : (Ki(e, t, r, n), $i()), t = t.child), t;
			case 5:
				return Ei(t), null === e && Yi(t), r = t.type, i = t.pendingProps, a = null !== e ? e.memoizedProps : null, s = i.children, vr(r, i) ? s = null : null !== a && vr(r, a) && (t.effectTag |= 16), ra(e, t), 1 !== n && 1 & t.mode && i.hidden ? (t.expirationTime = 1, t = null) : (Ki(e, t, s, n), t = t.child), t;
			case 6:
				return null === e && Yi(t), null;
			case 13:
				return la(e, t, n);
			case 4:
				return Si(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = ji(t, null, r, n) : Ki(e, t, r, n), t.child;
			case 11:
				return r = t.type, i = t.pendingProps, ea(e, t, r, i = t.elementType === r ? i : Ai(r, i), n);
			case 7:
				return Ki(e, t, t.pendingProps, n), t.child;
			case 8:
			case 12:
				return Ki(e, t, t.pendingProps.children, n), t.child;
			case 10:
				e: {
					if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, mi(t, a = i.value), null !== s) {
						var l = s.value;
						if (0 === (a = l === a && (0 !== l || 1 / l == 1 / a) || l != l && a != a ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(l, a) : 1073741823))) {
							if (s.children === i.children && !Cr.current) {
								t = ua(e, t, n);
								break e
							}
						} else
							for (null !== (s = t.child) && (s.return = t); null !== s;) {
								if (null !== (l = s.firstContextDependency))
									do {
										if (l.context === r && 0 != (l.observedBits & a)) {
											if (1 === s.tag) {
												var c = ti(n);
												c.tag = 2, ri(s, c)
											}
											s.expirationTime < n && (s.expirationTime = n), null !== (c = s.alternate) && c.expirationTime < n && (c.expirationTime = n);
											for (var u = s.return; null !== u;) {
												if (c = u.alternate, u.childExpirationTime < n) u.childExpirationTime = n, null !== c && c.childExpirationTime < n && (c.childExpirationTime = n);
												else {
													if (!(null !== c && c.childExpirationTime < n)) break;
													c.childExpirationTime = n
												}
												u = u.return
											}
										}
										c = s.child, l = l.next
									} while (null !== l);
								else c = 10 === s.tag && s.type === t.type ? null : s.child;
								if (null !== c) c.return = s;
								else
									for (c = s; null !== c;) {
										if (c === t) {
											c = null;
											break
										}
										if (null !== (s = c.sibling)) {
											s.return = c.return, c = s;
											break
										}
										c = c.return
									}
								s = c
							}
					}
					Ki(e, t, i.children, n),
					t = t.child
				}
				return t;
			case 9:
				return i = t.type, r = (a = t.pendingProps).children, gi(t), r = r(i = yi(i, a.unstable_observedBits)), t.effectTag |= 1, Ki(e, t, r, n), t.child;
			case 14:
				return ta(e, t, i = t.type, a = Ai(i.type, t.pendingProps), r, n);
			case 15:
				return na(e, t, t.type, t.pendingProps, r, n);
			case 17:
				return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ai(r, i), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, Lr(r) ? (e = !0, Nr(t)) : e = !1, gi(t), Ii(t, r, i), Di(t, r, i, n), oa(null, t, r, !0, e, n);
			default:
				o("156")
		}
	}

	function pa(e) {
		e.effectTag |= 4
	}
	var da = void 0,
		fa = void 0,
		ma = void 0,
		va = void 0;

	function ga(e, t) {
		var n = t.source,
			r = t.stack;
		null === r && null !== n && (r = lt(n)), null !== n && st(n.type), t = t.value, null !== e && 1 === e.tag && st(e.type);
		try {
			console.error(t)
		} catch (e) {
			setTimeout(function () {
				throw e
			})
		}
	}

	function ya(e) {
		var t = e.ref;
		if (null !== t)
			if ("function" == typeof t) try {
				t(null)
			} catch (t) {
				Xa(e, t)
			} else t.current = null
	}

	function xa(e) {
		switch ("function" == typeof Ur && Ur(e), e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				var t = e.updateQueue;
				if (null !== t && null !== (t = t.lastEffect)) {
					var n = t = t.next;
					do {
						var r = n.destroy;
						if (null !== r) {
							var i = e;
							try {
								r()
							} catch (e) {
								Xa(i, e)
							}
						}
						n = n.next
					} while (n !== t)
				}
				break;
			case 1:
				if (ya(e), "function" == typeof (t = e.stateNode).componentWillUnmount) try {
					t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
				} catch (t) {
					Xa(e, t)
				}
				break;
			case 5:
				ya(e);
				break;
			case 4:
				_a(e)
		}
	}

	function ba(e) {
		return 5 === e.tag || 3 === e.tag || 4 === e.tag
	}

	function wa(e) {
		e: {
			for (var t = e.return; null !== t;) {
				if (ba(t)) {
					var n = t;
					break e
				}
				t = t.return
			}
			o("160"),
			n = void 0
		}
		var r = t = void 0;
		switch (n.tag) {
			case 5:
				t = n.stateNode, r = !1;
				break;
			case 3:
			case 4:
				t = n.stateNode.containerInfo, r = !0;
				break;
			default:
				o("161")
		}
		16 & n.effectTag && (rr(t, ""), n.effectTag &= -17);e: t: for (n = e;;) {
			for (; null === n.sibling;) {
				if (null === n.return || ba(n.return)) {
					n = null;
					break e
				}
				n = n.return
			}
			for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag;) {
				if (2 & n.effectTag) continue t;
				if (null === n.child || 4 === n.tag) continue t;
				n.child.return = n, n = n.child
			}
			if (!(2 & n.effectTag)) {
				n = n.stateNode;
				break e
			}
		}
		for (var i = e;;) {
			if (5 === i.tag || 6 === i.tag)
				if (n)
					if (r) {
						var a = t,
							s = i.stateNode,
							l = n;
						8 === a.nodeType ? a.parentNode.insertBefore(s, l) : a.insertBefore(s, l)
					} else t.insertBefore(i.stateNode, n);
			else r ? (s = t, l = i.stateNode, 8 === s.nodeType ? (a = s.parentNode).insertBefore(l, s) : (a = s).appendChild(l), null !== (s = s._reactRootContainer) && void 0 !== s || null !== a.onclick || (a.onclick = pr)) : t.appendChild(i.stateNode);
			else if (4 !== i.tag && null !== i.child) {
				i.child.return = i, i = i.child;
				continue
			}
			if (i === e) break;
			for (; null === i.sibling;) {
				if (null === i.return || i.return === e) return;
				i = i.return
			}
			i.sibling.return = i.return, i = i.sibling
		}
	}

	function _a(e) {
		for (var t = e, n = !1, r = void 0, i = void 0;;) {
			if (!n) {
				n = t.return;
				e: for (;;) {
					switch (null === n && o("160"), n.tag) {
						case 5:
							r = n.stateNode, i = !1;
							break e;
						case 3:
						case 4:
							r = n.stateNode.containerInfo, i = !0;
							break e
					}
					n = n.return
				}
				n = !0
			}
			if (5 === t.tag || 6 === t.tag) {
				e: for (var a = t, s = a;;)
					if (xa(s), null !== s.child && 4 !== s.tag) s.child.return = s, s = s.child;
					else {
						if (s === a) break;
						for (; null === s.sibling;) {
							if (null === s.return || s.return === a) break e;
							s = s.return
						}
						s.sibling.return = s.return, s = s.sibling
					}i ? (a = r, s = t.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(s) : a.removeChild(s)) : r.removeChild(t.stateNode)
			}
			else if (4 === t.tag ? (r = t.stateNode.containerInfo, i = !0) : xa(t), null !== t.child) {
				t.child.return = t, t = t.child;
				continue
			}
			if (t === e) break;
			for (; null === t.sibling;) {
				if (null === t.return || t.return === e) return;
				4 === (t = t.return).tag && (n = !1)
			}
			t.sibling.return = t.return, t = t.sibling
		}
	}

	function Ma(e, t) {
		switch (t.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
			case 1:
				break;
			case 5:
				var n = t.stateNode;
				if (null != n) {
					var r = t.memoizedProps,
						i = null !== e ? e.memoizedProps : r;
					e = t.type;
					var a = t.updateQueue;
					if (t.updateQueue = null, null !== a) {
						for (n[I] = r, "input" === e && "radio" === r.type && null != r.name && wt(n, r), ur(e, i), t = ur(e, r), i = 0; i < a.length; i += 2) {
							var s = a[i],
								l = a[i + 1];
							"style" === s ? sr(n, l) : "dangerouslySetInnerHTML" === s ? nr(n, l) : "children" === s ? rr(n, l) : gt(n, s, l, t)
						}
						switch (e) {
							case "input":
								_t(n, r);
								break;
							case "textarea":
								Zn(n, r);
								break;
							case "select":
								t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (e = r.value) ? Xn(n, !!r.multiple, e, !1) : t !== !!r.multiple && (null != r.defaultValue ? Xn(n, !!r.multiple, r.defaultValue, !0) : Xn(n, !!r.multiple, r.multiple ? [] : "", !1))
						}
					}
				}
				break;
			case 6:
				null === t.stateNode && o("162"), t.stateNode.nodeValue = t.memoizedProps;
				break;
			case 3:
			case 12:
				break;
			case 13:
				if (e = t, null === (n = t.memoizedState) ? r = !1 : (r = !0, e = t.child, 0 === n.timedOutAt && (n.timedOutAt = Mo())), null !== e) e: for (t = n = e;;) {
					if (5 === t.tag) e = t.stateNode, r ? e.style.display = "none" : (e = t.stateNode, a = void 0 !== (a = t.memoizedProps.style) && null !== a && a.hasOwnProperty("display") ? a.display : null, e.style.display = or("display", a));
					else if (6 === t.tag) t.stateNode.nodeValue = r ? "" : t.memoizedProps;
					else if (null !== t.child) {
						t.child.return = t, t = t.child;
						continue
					}
					if (t === n) break e;
					for (; null === t.sibling;) {
						if (null === t.return || t.return === n) break e;
						t = t.return
					}
					t.sibling.return = t.return, t = t.sibling
				}
				break;
			case 17:
				break;
			default:
				o("163")
		}
	}

	function Sa(e, t, n) {
		(n = ti(n)).tag = 3, n.payload = {
			element: null
		};
		var r = t.value;
		return n.callback = function () {
			ko(r), ga(e, t)
		}, n
	}

	function Ta(e, t, n) {
		(n = ti(n)).tag = 3;
		var r = e.type.getDerivedStateFromError;
		if ("function" == typeof r) {
			var i = t.value;
			n.payload = function () {
				return r(i)
			}
		}
		var a = e.stateNode;
		return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function () {
			"function" != typeof r && (null === ja ? ja = new Set([this]) : ja.add(this));
			var n = t.value,
				i = t.stack;
			ga(e, t), this.componentDidCatch(n, {
				componentStack: null !== i ? i : ""
			})
		}), n
	}

	function Ea(e) {
		switch (e.tag) {
			case 1:
				Lr(e.type) && Rr();
				var t = e.effectTag;
				return 2048 & t ? (e.effectTag = -2049 & t | 64, e) : null;
			case 3:
				return Ti(), Or(), 0 != (64 & (t = e.effectTag)) && o("285"), e.effectTag = -2049 & t | 64, e;
			case 5:
				return Ci(e), null;
			case 13:
				return 2048 & (t = e.effectTag) ? (e.effectTag = -2049 & t | 64, e) : null;
			case 4:
				return Ti(), null;
			case 10:
				return vi(e), null;
			default:
				return null
		}
	}
	da = function (e, t) {
		for (var n = t.child; null !== n;) {
			if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
			else if (4 !== n.tag && null !== n.child) {
				n.child.return = n, n = n.child;
				continue
			}
			if (n === t) break;
			for (; null === n.sibling;) {
				if (null === n.return || n.return === t) return;
				n = n.return
			}
			n.sibling.return = n.return, n = n.sibling
		}
	}, fa = function () {}, ma = function (e, t, n, r, a) {
		var o = e.memoizedProps;
		if (o !== r) {
			var s = t.stateNode;
			switch (Mi(bi.current), e = null, n) {
				case "input":
					o = xt(s, o), r = xt(s, r), e = [];
					break;
				case "option":
					o = qn(s, o), r = qn(s, r), e = [];
					break;
				case "select":
					o = i({}, o, {
						value: void 0
					}), r = i({}, r, {
						value: void 0
					}), e = [];
					break;
				case "textarea":
					o = Yn(s, o), r = Yn(s, r), e = [];
					break;
				default:
					"function" != typeof o.onClick && "function" == typeof r.onClick && (s.onclick = pr)
			}
			cr(n, r), s = n = void 0;
			var l = null;
			for (n in o)
				if (!r.hasOwnProperty(n) && o.hasOwnProperty(n) && null != o[n])
					if ("style" === n) {
						var c = o[n];
						for (s in c) c.hasOwnProperty(s) && (l || (l = {}), l[s] = "")
					} else "dangerouslySetInnerHTML" !== n && "children" !== n && "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && "autoFocus" !== n && (x.hasOwnProperty(n) ? e || (e = []) : (e = e || []).push(n, null));
			for (n in r) {
				var u = r[n];
				if (c = null != o ? o[n] : void 0, r.hasOwnProperty(n) && u !== c && (null != u || null != c))
					if ("style" === n)
						if (c) {
							for (s in c) !c.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (l || (l = {}), l[s] = "");
							for (s in u) u.hasOwnProperty(s) && c[s] !== u[s] && (l || (l = {}), l[s] = u[s])
						} else l || (e || (e = []), e.push(n, l)), l = u;
				else "dangerouslySetInnerHTML" === n ? (u = u ? u.__html : void 0, c = c ? c.__html : void 0, null != u && c !== u && (e = e || []).push(n, "" + u)) : "children" === n ? c === u || "string" != typeof u && "number" != typeof u || (e = e || []).push(n, "" + u) : "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && (x.hasOwnProperty(n) ? (null != u && hr(a, n), e || c === u || (e = [])) : (e = e || []).push(n, u))
			}
			l && (e = e || []).push("style", l), a = e, (t.updateQueue = a) && pa(t)
		}
	}, va = function (e, t, n, r) {
		n !== r && pa(t)
	};
	var Ca = {
			readContext: yi
		},
		Aa = Ve.ReactCurrentOwner,
		Pa = 1073741822,
		La = 0,
		Ra = !1,
		Oa = null,
		ka = null,
		Ia = 0,
		Na = -1,
		Da = !1,
		za = null,
		Ua = !1,
		Ba = null,
		Fa = null,
		ja = null;

	function Ha() {
		if (null !== Oa)
			for (var e = Oa.return; null !== e;) {
				var t = e;
				switch (t.tag) {
					case 1:
						var n = t.type.childContextTypes;
						null !== n && void 0 !== n && Rr();
						break;
					case 3:
						Ti(), Or();
						break;
					case 5:
						Ci(t);
						break;
					case 4:
						Ti();
						break;
					case 10:
						vi(t)
				}
				e = e.return
			}
		ka = null, Ia = 0, Na = -1, Da = !1, Oa = null
	}

	function Ga() {
		null !== Fa && (a.unstable_cancelCallback(Ba), Fa())
	}

	function Va(e) {
		for (;;) {
			var t = e.alternate,
				n = e.return,
				r = e.sibling;
			if (0 == (1024 & e.effectTag)) {
				Oa = e;
				e: {
					var a = t,
						s = Ia,
						l = (t = e).pendingProps;
					switch (t.tag) {
						case 2:
						case 16:
							break;
						case 15:
						case 0:
							break;
						case 1:
							Lr(t.type) && Rr();
							break;
						case 3:
							Ti(), Or(), (l = t.stateNode).pendingContext && (l.context = l.pendingContext, l.pendingContext = null), null !== a && null !== a.child || (Zi(t), t.effectTag &= -3), fa(t);
							break;
						case 5:
							Ci(t);
							var c = Mi(_i.current);
							if (s = t.type, null !== a && null != t.stateNode) ma(a, t, s, l, c), a.ref !== t.ref && (t.effectTag |= 128);
							else if (l) {
								var u = Mi(bi.current);
								if (Zi(t)) {
									a = (l = t).stateNode;
									var h = l.type,
										p = l.memoizedProps,
										d = c;
									switch (a[k] = l, a[I] = p, s = void 0, c = h) {
										case "iframe":
										case "object":
											Tn("load", a);
											break;
										case "video":
										case "audio":
											for (h = 0; h < te.length; h++) Tn(te[h], a);
											break;
										case "source":
											Tn("error", a);
											break;
										case "img":
										case "image":
										case "link":
											Tn("error", a), Tn("load", a);
											break;
										case "form":
											Tn("reset", a), Tn("submit", a);
											break;
										case "details":
											Tn("toggle", a);
											break;
										case "input":
											bt(a, p), Tn("invalid", a), hr(d, "onChange");
											break;
										case "select":
											a._wrapperState = {
												wasMultiple: !!p.multiple
											}, Tn("invalid", a), hr(d, "onChange");
											break;
										case "textarea":
											Jn(a, p), Tn("invalid", a), hr(d, "onChange")
									}
									for (s in cr(c, p), h = null, p) p.hasOwnProperty(s) && (u = p[s], "children" === s ? "string" == typeof u ? a.textContent !== u && (h = ["children", u]) : "number" == typeof u && a.textContent !== "" + u && (h = ["children", "" + u]) : x.hasOwnProperty(s) && null != u && hr(d, s));
									switch (c) {
										case "input":
											He(a), Mt(a, p, !0);
											break;
										case "textarea":
											He(a), $n(a);
											break;
										case "select":
										case "option":
											break;
										default:
											"function" == typeof p.onClick && (a.onclick = pr)
									}
									s = h, l.updateQueue = s, (l = null !== s) && pa(t)
								} else {
									p = t, a = s, d = l, h = 9 === c.nodeType ? c : c.ownerDocument, u === Qn.html && (u = Kn(a)), u === Qn.html ? "script" === a ? ((a = h.createElement("div")).innerHTML = "<script><\/script>", h = a.removeChild(a.firstChild)) : "string" == typeof d.is ? h = h.createElement(a, {
										is: d.is
									}) : (h = h.createElement(a), "select" === a && d.multiple && (h.multiple = !0)) : h = h.createElementNS(u, a), (a = h)[k] = p, a[I] = l, da(a, t, !1, !1), d = a;
									var f = c,
										m = ur(h = s, p = l);
									switch (h) {
										case "iframe":
										case "object":
											Tn("load", d), c = p;
											break;
										case "video":
										case "audio":
											for (c = 0; c < te.length; c++) Tn(te[c], d);
											c = p;
											break;
										case "source":
											Tn("error", d), c = p;
											break;
										case "img":
										case "image":
										case "link":
											Tn("error", d), Tn("load", d), c = p;
											break;
										case "form":
											Tn("reset", d), Tn("submit", d), c = p;
											break;
										case "details":
											Tn("toggle", d), c = p;
											break;
										case "input":
											bt(d, p), c = xt(d, p), Tn("invalid", d), hr(f, "onChange");
											break;
										case "option":
											c = qn(d, p);
											break;
										case "select":
											d._wrapperState = {
												wasMultiple: !!p.multiple
											}, c = i({}, p, {
												value: void 0
											}), Tn("invalid", d), hr(f, "onChange");
											break;
										case "textarea":
											Jn(d, p), c = Yn(d, p), Tn("invalid", d), hr(f, "onChange");
											break;
										default:
											c = p
									}
									cr(h, c), u = void 0;
									var v = h,
										g = d,
										y = c;
									for (u in y)
										if (y.hasOwnProperty(u)) {
											var b = y[u];
											"style" === u ? sr(g, b) : "dangerouslySetInnerHTML" === u ? null != (b = b ? b.__html : void 0) && nr(g, b) : "children" === u ? "string" == typeof b ? ("textarea" !== v || "" !== b) && rr(g, b) : "number" == typeof b && rr(g, "" + b) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (x.hasOwnProperty(u) ? null != b && hr(f, u) : null != b && gt(g, u, b, m))
										} switch (h) {
										case "input":
											He(d), Mt(d, p, !1);
											break;
										case "textarea":
											He(d), $n(d);
											break;
										case "option":
											null != p.value && d.setAttribute("value", "" + yt(p.value));
											break;
										case "select":
											(c = d).multiple = !!p.multiple, null != (d = p.value) ? Xn(c, !!p.multiple, d, !1) : null != p.defaultValue && Xn(c, !!p.multiple, p.defaultValue, !0);
											break;
										default:
											"function" == typeof c.onClick && (d.onclick = pr)
									}(l = mr(s, l)) && pa(t), t.stateNode = a
								}
								null !== t.ref && (t.effectTag |= 128)
							} else null === t.stateNode && o("166");
							break;
						case 6:
							a && null != t.stateNode ? va(a, t, a.memoizedProps, l) : ("string" != typeof l && (null === t.stateNode && o("166")), a = Mi(_i.current), Mi(bi.current), Zi(t) ? (s = (l = t).stateNode, a = l.memoizedProps, s[k] = l, (l = s.nodeValue !== a) && pa(t)) : (s = t, (l = (9 === a.nodeType ? a : a.ownerDocument).createTextNode(l))[k] = t, s.stateNode = l));
							break;
						case 11:
							break;
						case 13:
							if (l = t.memoizedState, 0 != (64 & t.effectTag)) {
								t.expirationTime = s, t.firstEffect = t.lastEffect = null, Oa = t;
								break e
							}((l = null !== l) !== (null !== a && null !== a.memoizedState) || 0 == (1 & t.effectTag) && l) && (t.effectTag |= 4);
							break;
						case 7:
						case 8:
						case 12:
							break;
						case 4:
							Ti(), fa(t);
							break;
						case 10:
							vi(t);
							break;
						case 9:
						case 14:
							break;
						case 17:
							Lr(t.type) && Rr();
							break;
						default:
							o("156")
					}
					Oa = null
				}
				if (t = e, 1 === Ia || 1 !== t.childExpirationTime) {
					for (l = 0, s = t.child; null !== s;) a = s.expirationTime, c = s.childExpirationTime, a > l && (l = a), c > l && (l = c), s = s.sibling;
					t.childExpirationTime = l
				}
				if (null !== Oa) return Oa.firstEffect = Oa.lastEffect = null, Oa;
				null !== n && 0 == (1024 & n.effectTag) && (null === n.firstEffect && (n.firstEffect = e.firstEffect), null !== e.lastEffect && (null !== n.lastEffect && (n.lastEffect.nextEffect = e.firstEffect), n.lastEffect = e.lastEffect), 1 < e.effectTag && (null !== n.lastEffect ? n.lastEffect.nextEffect = e : n.firstEffect = e, n.lastEffect = e))
			} else {
				if (null !== (e = Ea(e))) return e.effectTag &= 1023, e;
				null !== n && (n.firstEffect = n.lastEffect = null, n.effectTag |= 1024)
			}
			if (null !== r) return r;
			if (null === n) break;
			e = n
		}
		return null
	}

	function Wa(e) {
		var t = ha(e.alternate, e, Ia);
		return e.memoizedProps = e.pendingProps, null === t && (t = Va(e)), Aa.current = null, t
	}

	function qa(e, t) {
		Ra && o("243"), Ga(), Ra = !0, Aa.currentDispatcher = Ca;
		var n = e.nextExpirationTimeToWorkOn;
		n === Ia && e === ka && null !== Oa || (Ha(), Ia = n, Oa = Hr((ka = e).current, null), e.pendingCommitExpirationTime = 0);
		for (var r = !1;;) {
			try {
				if (t)
					for (; null !== Oa && !Co();) Oa = Wa(Oa);
				else
					for (; null !== Oa;) Oa = Wa(Oa)
			} catch (t) {
				if (fi = di = pi = null, null === Oa) r = !0, ko(t);
				else {
					null === Oa && o("271");
					var i = Oa,
						a = i.return;
					if (null !== a) {
						e: {
							var s = e,
								l = a,
								c = i,
								u = t;
							if (a = Ia, c.effectTag |= 1024, c.firstEffect = c.lastEffect = null, null !== u && "object" == typeof u && "function" == typeof u.then) {
								var h = u;
								u = l;
								var p = -1,
									d = -1;
								do {
									if (13 === u.tag) {
										var f = u.alternate;
										if (null !== f && null !== (f = f.memoizedState)) {
											d = 10 * (1073741822 - f.timedOutAt);
											break
										}
										"number" == typeof (f = u.pendingProps.maxDuration) && (0 >= f ? p = 0 : (-1 === p || f < p) && (p = f))
									}
									u = u.return
								} while (null !== u);
								u = l;
								do {
									if ((f = 13 === u.tag) && (f = void 0 !== u.memoizedProps.fallback && null === u.memoizedState), f) {
										if (l = Ja.bind(null, s, u, c, 0 == (1 & u.mode) ? 1073741823 : a), h.then(l, l), 0 == (1 & u.mode)) {
											u.effectTag |= 64, Ki(c.alternate, c, null, a), c.effectTag &= -1025, c.effectTag &= -933, 1 === c.tag && null === c.alternate && (c.tag = 17), c.expirationTime = a;
											break e
										} - 1 === p ? s = 1073741823 : (-1 === d && (d = 10 * (1073741822 - Zr(s, a)) - 5e3), s = d + p), 0 <= s && Na < s && (Na = s), u.effectTag |= 2048, u.expirationTime = a;
										break e
									}
									u = u.return
								} while (null !== u);
								u = Error((st(c.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + lt(c))
							}
							Da = !0,
							u = ui(u, c),
							s = l;do {
								switch (s.tag) {
									case 3:
										c = u, s.effectTag |= 2048, s.expirationTime = a, ii(s, a = Sa(s, c, a));
										break e;
									case 1:
										if (c = u, l = s.type, h = s.stateNode, 0 == (64 & s.effectTag) && ("function" == typeof l.getDerivedStateFromError || null !== h && "function" == typeof h.componentDidCatch && (null === ja || !ja.has(h)))) {
											s.effectTag |= 2048, s.expirationTime = a, ii(s, a = Ta(s, c, a));
											break e
										}
								}
								s = s.return
							} while (null !== s)
						}
						Oa = Va(i);
						continue
					}
					r = !0, ko(t)
				}
			}
			break
		}
		if (Ra = !1, fi = di = pi = Aa.currentDispatcher = null, r) ka = null, e.finishedWork = null;
		else if (null !== Oa) e.finishedWork = null;
		else {
			if (null === (r = e.current.alternate) && o("281"), ka = null, Da) {
				if (i = e.latestPendingTime, a = e.latestSuspendedTime, s = e.latestPingedTime, 0 !== i && i < n || 0 !== a && a < n || 0 !== s && s < n) return Jr(e, n), void _o(e, r, n, e.expirationTime, -1);
				if (!e.didError && t) return e.didError = !0, n = e.nextExpirationTimeToWorkOn = n, t = e.expirationTime = 1073741823, void _o(e, r, n, t, -1)
			}
			t && -1 !== Na ? (Jr(e, n), (t = 10 * (1073741822 - Zr(e, n))) < Na && (Na = t), t = 10 * (1073741822 - Mo()), t = Na - t, _o(e, r, n, e.expirationTime, 0 > t ? 0 : t)) : (e.pendingCommitExpirationTime = n, e.finishedWork = r)
		}
	}

	function Xa(e, t) {
		for (var n = e.return; null !== n;) {
			switch (n.tag) {
				case 1:
					var r = n.stateNode;
					if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === ja || !ja.has(r))) return ri(n, e = Ta(n, e = ui(t, e), 1073741823)), void $a(n, 1073741823);
					break;
				case 3:
					return ri(n, e = Sa(n, e = ui(t, e), 1073741823)), void $a(n, 1073741823)
			}
			n = n.return
		}
		3 === e.tag && (ri(e, n = Sa(e, n = ui(t, e), 1073741823)), $a(e, 1073741823))
	}

	function Ya(e, t) {
		return 0 !== La ? e = La : Ra ? e = Ua ? 1073741823 : Ia : 1 & t.mode ? (e = ho ? 1073741822 - 10 * (1 + ((1073741822 - e + 15) / 10 | 0)) : 1073741822 - 25 * (1 + ((1073741822 - e + 500) / 25 | 0)), null !== ka && e === Ia && --e) : e = 1073741823, ho && (0 === oo || e < oo) && (oo = e), e
	}

	function Ja(e, t, n, r) {
		var i = e.earliestSuspendedTime,
			a = e.latestSuspendedTime;
		if (0 !== i && r <= i && r >= a) {
			a = i = r, e.didError = !1;
			var o = e.latestPingedTime;
			(0 === o || o > a) && (e.latestPingedTime = a), $r(a, e)
		} else Yr(e, i = Ya(i = Mo(), t));
		0 != (1 & t.mode) && e === ka && Ia === r && (ka = null), Za(t, i), 0 == (1 & t.mode) && (Za(n, i), 1 === n.tag && null !== n.stateNode && ((t = ti(i)).tag = 2, ri(n, t))), 0 !== (n = e.expirationTime) && So(e, n)
	}

	function Za(e, t) {
		e.expirationTime < t && (e.expirationTime = t);
		var n = e.alternate;
		null !== n && n.expirationTime < t && (n.expirationTime = t);
		var r = e.return,
			i = null;
		if (null === r && 3 === e.tag) i = e.stateNode;
		else
			for (; null !== r;) {
				if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) {
					i = r.stateNode;
					break
				}
				r = r.return
			}
		return null === i ? null : i
	}

	function $a(e, t) {
		null !== (e = Za(e, t)) && (!Ra && 0 !== Ia && t > Ia && Ha(), Yr(e, t), Ra && !Ua && ka === e || So(e, e.expirationTime), yo > go && (yo = 0, o("185")))
	}

	function Qa(e, t, n, r, i) {
		var a = La;
		La = 1073741823;
		try {
			return e(t, n, r, i)
		} finally {
			La = a
		}
	}
	var Ka = null,
		eo = null,
		to = 0,
		no = void 0,
		ro = !1,
		io = null,
		ao = 0,
		oo = 0,
		so = !1,
		lo = null,
		co = !1,
		uo = !1,
		ho = !1,
		po = null,
		fo = a.unstable_now(),
		mo = 1073741822 - (fo / 10 | 0),
		vo = mo,
		go = 50,
		yo = 0,
		xo = null;

	function bo() {
		mo = 1073741822 - ((a.unstable_now() - fo) / 10 | 0)
	}

	function wo(e, t) {
		if (0 !== to) {
			if (t < to) return;
			null !== no && a.unstable_cancelCallback(no)
		}
		to = t, e = a.unstable_now() - fo, no = a.unstable_scheduleCallback(Ao, {
			timeout: 10 * (1073741822 - t) - e
		})
	}

	function _o(e, t, n, r, i) {
		e.expirationTime = r, 0 !== i || Co() ? 0 < i && (e.timeoutHandle = gr(function (e, t, n) {
			e.pendingCommitExpirationTime = n, e.finishedWork = t, bo(), vo = mo, Lo(e, n)
		}.bind(null, e, t, n), i)) : (e.pendingCommitExpirationTime = n, e.finishedWork = t)
	}

	function Mo() {
		return ro ? vo : (To(), 0 !== ao && 1 !== ao || (bo(), vo = mo), vo)
	}

	function So(e, t) {
		null === e.nextScheduledRoot ? (e.expirationTime = t, null === eo ? (Ka = eo = e, e.nextScheduledRoot = e) : (eo = eo.nextScheduledRoot = e).nextScheduledRoot = Ka) : t > e.expirationTime && (e.expirationTime = t), ro || (co ? uo && (io = e, ao = 1073741823, Ro(e, 1073741823, !1)) : 1073741823 === t ? Po(1073741823, !1) : wo(e, t))
	}

	function To() {
		var e = 0,
			t = null;
		if (null !== eo)
			for (var n = eo, r = Ka; null !== r;) {
				var i = r.expirationTime;
				if (0 === i) {
					if ((null === n || null === eo) && o("244"), r === r.nextScheduledRoot) {
						Ka = eo = r.nextScheduledRoot = null;
						break
					}
					if (r === Ka) Ka = i = r.nextScheduledRoot, eo.nextScheduledRoot = i, r.nextScheduledRoot = null;
					else {
						if (r === eo) {
							(eo = n).nextScheduledRoot = Ka, r.nextScheduledRoot = null;
							break
						}
						n.nextScheduledRoot = r.nextScheduledRoot, r.nextScheduledRoot = null
					}
					r = n.nextScheduledRoot
				} else {
					if (i > e && (e = i, t = r), r === eo) break;
					if (1073741823 === e) break;
					n = r, r = r.nextScheduledRoot
				}
			}
		io = t, ao = e
	}
	var Eo = !1;

	function Co() {
		return !!Eo || !!a.unstable_shouldYield() && (Eo = !0)
	}

	function Ao() {
		try {
			if (!Co() && null !== Ka) {
				bo();
				var e = Ka;
				do {
					var t = e.expirationTime;
					0 !== t && mo <= t && (e.nextExpirationTimeToWorkOn = mo), e = e.nextScheduledRoot
				} while (e !== Ka)
			}
			Po(0, !0)
		} finally {
			Eo = !1
		}
	}

	function Po(e, t) {
		if (To(), t)
			for (bo(), vo = mo; null !== io && 0 !== ao && e <= ao && !(Eo && mo > ao);) Ro(io, ao, mo > ao), To(), bo(), vo = mo;
		else
			for (; null !== io && 0 !== ao && e <= ao;) Ro(io, ao, !1), To();
		if (t && (to = 0, no = null), 0 !== ao && wo(io, ao), yo = 0, xo = null, null !== po)
			for (e = po, po = null, t = 0; t < e.length; t++) {
				var n = e[t];
				try {
					n._onComplete()
				} catch (e) {
					so || (so = !0, lo = e)
				}
			}
		if (so) throw e = lo, lo = null, so = !1, e
	}

	function Lo(e, t) {
		ro && o("253"), io = e, ao = t, Ro(e, t, !1), Po(1073741823, !1)
	}

	function Ro(e, t, n) {
		if (ro && o("245"), ro = !0, n) {
			var r = e.finishedWork;
			null !== r ? Oo(e, r, t) : (e.finishedWork = null, -1 !== (r = e.timeoutHandle) && (e.timeoutHandle = -1, yr(r)), qa(e, n), null !== (r = e.finishedWork) && (Co() ? e.finishedWork = r : Oo(e, r, t)))
		} else null !== (r = e.finishedWork) ? Oo(e, r, t) : (e.finishedWork = null, -1 !== (r = e.timeoutHandle) && (e.timeoutHandle = -1, yr(r)), qa(e, n), null !== (r = e.finishedWork) && Oo(e, r, t));
		ro = !1
	}

	function Oo(e, t, n) {
		var r = e.firstBatch;
		if (null !== r && r._expirationTime >= n && (null === po ? po = [r] : po.push(r), r._defer)) return e.finishedWork = t, void(e.expirationTime = 0);
		e.finishedWork = null, e === xo ? yo++ : (xo = e, yo = 0), Ua = Ra = !0, e.current === t && o("177"), 0 === (n = e.pendingCommitExpirationTime) && o("261"), e.pendingCommitExpirationTime = 0, r = t.expirationTime;
		var i = t.childExpirationTime;
		if (r = i > r ? i : r, e.didError = !1, 0 === r ? (e.earliestPendingTime = 0, e.latestPendingTime = 0, e.earliestSuspendedTime = 0, e.latestSuspendedTime = 0, e.latestPingedTime = 0) : (0 !== (i = e.latestPendingTime) && (i > r ? e.earliestPendingTime = e.latestPendingTime = 0 : e.earliestPendingTime > r && (e.earliestPendingTime = e.latestPendingTime)), 0 === (i = e.earliestSuspendedTime) ? Yr(e, r) : r < e.latestSuspendedTime ? (e.earliestSuspendedTime = 0, e.latestSuspendedTime = 0, e.latestPingedTime = 0, Yr(e, r)) : r > i && Yr(e, r)), $r(0, e), Aa.current = null, 1 < t.effectTag ? null !== t.lastEffect ? (t.lastEffect.nextEffect = t, r = t.firstEffect) : r = t : r = t.firstEffect, dr = Sn, zn(i = Dn())) {
			if ("selectionStart" in i) var a = {
				start: i.selectionStart,
				end: i.selectionEnd
			};
			else e: {
				var s = (a = (a = i.ownerDocument) && a.defaultView || window).getSelection && a.getSelection();
				if (s && 0 !== s.rangeCount) {
					a = s.anchorNode;
					var l = s.anchorOffset,
						c = s.focusNode;
					s = s.focusOffset;
					try {
						a.nodeType, c.nodeType
					} catch (e) {
						a = null;
						break e
					}
					var u = 0,
						h = -1,
						p = -1,
						d = 0,
						f = 0,
						m = i,
						v = null;
					t: for (;;) {
						for (var g; m !== a || 0 !== l && 3 !== m.nodeType || (h = u + l), m !== c || 0 !== s && 3 !== m.nodeType || (p = u + s), 3 === m.nodeType && (u += m.nodeValue.length), null !== (g = m.firstChild);) v = m, m = g;
						for (;;) {
							if (m === i) break t;
							if (v === a && ++d === l && (h = u), v === c && ++f === s && (p = u), null !== (g = m.nextSibling)) break;
							v = (m = v).parentNode
						}
						m = g
					}
					a = -1 === h || -1 === p ? null : {
						start: h,
						end: p
					}
				} else a = null
			}
			a = a || {
				start: 0,
				end: 0
			}
		} else a = null;
		for (fr = {
				focusedElem: i,
				selectionRange: a
			}, Sn = !1, za = r; null !== za;) {
			i = !1, a = void 0;
			try {
				for (; null !== za;) {
					if (256 & za.effectTag) e: {
						var y = za.alternate;
						switch ((l = za).tag) {
							case 0:
							case 11:
							case 15:
								break e;
							case 1:
								if (256 & l.effectTag && null !== y) {
									var x = y.memoizedProps,
										b = y.memoizedState,
										w = l.stateNode,
										_ = w.getSnapshotBeforeUpdate(l.elementType === l.type ? x : Ai(l.type, x), b);
									w.__reactInternalSnapshotBeforeUpdate = _
								}
								break e;
							case 3:
							case 5:
							case 6:
							case 4:
							case 17:
								break e;
							default:
								o("163")
						}
					}
					za = za.nextEffect
				}
			} catch (e) {
				i = !0, a = e
			}
			i && (null === za && o("178"), Xa(za, a), null !== za && (za = za.nextEffect))
		}
		for (za = r; null !== za;) {
			y = !1, x = void 0;
			try {
				for (; null !== za;) {
					var M = za.effectTag;
					if (16 & M && rr(za.stateNode, ""), 128 & M) {
						var S = za.alternate;
						if (null !== S) {
							var T = S.ref;
							null !== T && ("function" == typeof T ? T(null) : T.current = null)
						}
					}
					switch (14 & M) {
						case 2:
							wa(za), za.effectTag &= -3;
							break;
						case 6:
							wa(za), za.effectTag &= -3, Ma(za.alternate, za);
							break;
						case 4:
							Ma(za.alternate, za);
							break;
						case 8:
							_a(b = za), b.return = null, b.child = null, b.alternate && (b.alternate.child = null, b.alternate.return = null)
					}
					za = za.nextEffect
				}
			} catch (e) {
				y = !0, x = e
			}
			y && (null === za && o("178"), Xa(za, x), null !== za && (za = za.nextEffect))
		}
		if (T = fr, S = Dn(), M = T.focusedElem, x = T.selectionRange, S !== M && M && M.ownerDocument && function e(t, n) {
				return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
			}(M.ownerDocument.documentElement, M)) {
			null !== x && zn(M) && (S = x.start, void 0 === (T = x.end) && (T = S), "selectionStart" in M ? (M.selectionStart = S, M.selectionEnd = Math.min(T, M.value.length)) : (T = (S = M.ownerDocument || document) && S.defaultView || window).getSelection && (T = T.getSelection(), b = M.textContent.length, y = Math.min(x.start, b), x = void 0 === x.end ? y : Math.min(x.end, b), !T.extend && y > x && (b = x, x = y, y = b), b = Nn(M, y), w = Nn(M, x), b && w && (1 !== T.rangeCount || T.anchorNode !== b.node || T.anchorOffset !== b.offset || T.focusNode !== w.node || T.focusOffset !== w.offset) && ((S = S.createRange()).setStart(b.node, b.offset), T.removeAllRanges(), y > x ? (T.addRange(S), T.extend(w.node, w.offset)) : (S.setEnd(w.node, w.offset), T.addRange(S))))), S = [];
			for (T = M; T = T.parentNode;) 1 === T.nodeType && S.push({
				element: T,
				left: T.scrollLeft,
				top: T.scrollTop
			});
			for ("function" == typeof M.focus && M.focus(), M = 0; M < S.length; M++)(T = S[M]).element.scrollLeft = T.left, T.element.scrollTop = T.top
		}
		for (fr = null, Sn = !!dr, dr = null, e.current = t, za = r; null !== za;) {
			r = !1, M = void 0;
			try {
				for (S = n; null !== za;) {
					var E = za.effectTag;
					if (36 & E) {
						var C = za.alternate;
						switch (y = S, (T = za).tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								var A = T.stateNode;
								if (4 & T.effectTag)
									if (null === C) A.componentDidMount();
									else {
										var P = T.elementType === T.type ? C.memoizedProps : Ai(T.type, C.memoizedProps);
										A.componentDidUpdate(P, C.memoizedState, A.__reactInternalSnapshotBeforeUpdate)
									} var L = T.updateQueue;
								null !== L && li(0, L, A);
								break;
							case 3:
								var R = T.updateQueue;
								if (null !== R) {
									if (x = null, null !== T.child) switch (T.child.tag) {
										case 5:
											x = T.child.stateNode;
											break;
										case 1:
											x = T.child.stateNode
									}
									li(0, R, x)
								}
								break;
							case 5:
								var O = T.stateNode;
								null === C && 4 & T.effectTag && mr(T.type, T.memoizedProps) && O.focus();
								break;
							case 6:
							case 4:
							case 12:
							case 13:
							case 17:
								break;
							default:
								o("163")
						}
					}
					if (128 & E) {
						var k = za.ref;
						if (null !== k) {
							var I = za.stateNode;
							switch (za.tag) {
								case 5:
									var N = I;
									break;
								default:
									N = I
							}
							"function" == typeof k ? k(N) : k.current = N
						}
					}
					za = za.nextEffect
				}
			} catch (e) {
				r = !0, M = e
			}
			r && (null === za && o("178"), Xa(za, M), null !== za && (za = za.nextEffect))
		}
		Ra = Ua = !1, "function" == typeof zr && zr(t.stateNode), E = t.expirationTime, 0 === (t = (t = t.childExpirationTime) > E ? t : E) && (ja = null), e.expirationTime = t, e.finishedWork = null
	}

	function ko(e) {
		null === io && o("246"), io.expirationTime = 0, so || (so = !0, lo = e)
	}

	function Io(e, t) {
		var n = co;
		co = !0;
		try {
			return e(t)
		} finally {
			(co = n) || ro || Po(1073741823, !1)
		}
	}

	function No(e, t) {
		if (co && !uo) {
			uo = !0;
			try {
				return e(t)
			} finally {
				uo = !1
			}
		}
		return e(t)
	}

	function Do(e, t, n) {
		if (ho) return e(t, n);
		co || ro || 0 === oo || (Po(oo, !1), oo = 0);
		var r = ho,
			i = co;
		co = ho = !0;
		try {
			return e(t, n)
		} finally {
			ho = r, (co = i) || ro || Po(1073741823, !1)
		}
	}

	function zo(e, t, n, r, i) {
		var a = t.current;
		e: if (n) {
			n = n._reactInternalFiber;
			t: {
				2 === tn(n) && 1 === n.tag || o("170");
				var s = n;do {
					switch (s.tag) {
						case 3:
							s = s.stateNode.context;
							break t;
						case 1:
							if (Lr(s.type)) {
								s = s.stateNode.__reactInternalMemoizedMergedChildContext;
								break t
							}
					}
					s = s.return
				} while (null !== s);o("171"),
				s = void 0
			}
			if (1 === n.tag) {
				var l = n.type;
				if (Lr(l)) {
					n = Ir(n, l, s);
					break e
				}
			}
			n = s
		} else n = Tr;
		return null === t.context ? t.context = n : t.pendingContext = n, t = i, (i = ti(r)).payload = {
			element: e
		}, null !== (t = void 0 === t ? null : t) && (i.callback = t), Ga(), ri(a, i), $a(a, r), r
	}

	function Uo(e, t, n, r) {
		var i = t.current;
		return zo(e, t, n, i = Ya(Mo(), i), r)
	}

	function Bo(e) {
		if (!(e = e.current).child) return null;
		switch (e.child.tag) {
			case 5:
			default:
				return e.child.stateNode
		}
	}

	function Fo(e) {
		var t = 1073741822 - 25 * (1 + ((1073741822 - Mo() + 500) / 25 | 0));
		t >= Pa && (t = Pa - 1), this._expirationTime = Pa = t, this._root = e, this._callbacks = this._next = null, this._hasChildren = this._didComplete = !1, this._children = null, this._defer = !0
	}

	function jo() {
		this._callbacks = null, this._didCommit = !1, this._onCommit = this._onCommit.bind(this)
	}

	function Ho(e, t, n) {
		e = {
			current: t = Fr(3, null, null, t ? 3 : 0),
			containerInfo: e,
			pendingChildren: null,
			earliestPendingTime: 0,
			latestPendingTime: 0,
			earliestSuspendedTime: 0,
			latestSuspendedTime: 0,
			latestPingedTime: 0,
			didError: !1,
			pendingCommitExpirationTime: 0,
			finishedWork: null,
			timeoutHandle: -1,
			context: null,
			pendingContext: null,
			hydrate: n,
			nextExpirationTimeToWorkOn: 0,
			expirationTime: 0,
			firstBatch: null,
			nextScheduledRoot: null
		}, this._internalRoot = t.stateNode = e
	}

	function Go(e) {
		return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
	}

	function Vo(e, t, n, r, i) {
		Go(n) || o("200");
		var a = n._reactRootContainer;
		if (a) {
			if ("function" == typeof i) {
				var s = i;
				i = function () {
					var e = Bo(a._internalRoot);
					s.call(e)
				}
			}
			null != e ? a.legacy_renderSubtreeIntoContainer(e, t, i) : a.render(t, i)
		} else {
			if (a = n._reactRootContainer = function (e, t) {
					if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
						for (var n; n = e.lastChild;) e.removeChild(n);
					return new Ho(e, !1, t)
				}(n, r), "function" == typeof i) {
				var l = i;
				i = function () {
					var e = Bo(a._internalRoot);
					l.call(e)
				}
			}
			No(function () {
				null != e ? a.legacy_renderSubtreeIntoContainer(e, t, i) : a.render(t, i)
			})
		}
		return Bo(a._internalRoot)
	}

	function Wo(e, t) {
		var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		return Go(t) || o("200"),
			function (e, t, n) {
				var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
				return {
					$$typeof: Ye,
					key: null == r ? null : "" + r,
					children: e,
					containerInfo: t,
					implementation: n
				}
			}(e, t, null, n)
	}
	Ee = function (e, t, n) {
		switch (t) {
			case "input":
				if (_t(e, n), t = n.name, "radio" === n.type && null != t) {
					for (n = e; n.parentNode;) n = n.parentNode;
					for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
						var r = n[t];
						if (r !== e && r.form === e.form) {
							var i = U(r);
							i || o("90"), Ge(r), _t(r, i)
						}
					}
				}
				break;
			case "textarea":
				Zn(e, n);
				break;
			case "select":
				null != (t = n.value) && Xn(e, !!n.multiple, t, !1)
		}
	}, Fo.prototype.render = function (e) {
		this._defer || o("250"), this._hasChildren = !0, this._children = e;
		var t = this._root._internalRoot,
			n = this._expirationTime,
			r = new jo;
		return zo(e, t, null, n, r._onCommit), r
	}, Fo.prototype.then = function (e) {
		if (this._didComplete) e();
		else {
			var t = this._callbacks;
			null === t && (t = this._callbacks = []), t.push(e)
		}
	}, Fo.prototype.commit = function () {
		var e = this._root._internalRoot,
			t = e.firstBatch;
		if (this._defer && null !== t || o("251"), this._hasChildren) {
			var n = this._expirationTime;
			if (t !== this) {
				this._hasChildren && (n = this._expirationTime = t._expirationTime, this.render(this._children));
				for (var r = null, i = t; i !== this;) r = i, i = i._next;
				null === r && o("251"), r._next = i._next, this._next = t, e.firstBatch = this
			}
			this._defer = !1, Lo(e, n), t = this._next, this._next = null, null !== (t = e.firstBatch = t) && t._hasChildren && t.render(t._children)
		} else this._next = null, this._defer = !1
	}, Fo.prototype._onComplete = function () {
		if (!this._didComplete) {
			this._didComplete = !0;
			var e = this._callbacks;
			if (null !== e)
				for (var t = 0; t < e.length; t++)(0, e[t])()
		}
	}, jo.prototype.then = function (e) {
		if (this._didCommit) e();
		else {
			var t = this._callbacks;
			null === t && (t = this._callbacks = []), t.push(e)
		}
	}, jo.prototype._onCommit = function () {
		if (!this._didCommit) {
			this._didCommit = !0;
			var e = this._callbacks;
			if (null !== e)
				for (var t = 0; t < e.length; t++) {
					var n = e[t];
					"function" != typeof n && o("191", n), n()
				}
		}
	}, Ho.prototype.render = function (e, t) {
		var n = this._internalRoot,
			r = new jo;
		return null !== (t = void 0 === t ? null : t) && r.then(t), Uo(e, n, null, r._onCommit), r
	}, Ho.prototype.unmount = function (e) {
		var t = this._internalRoot,
			n = new jo;
		return null !== (e = void 0 === e ? null : e) && n.then(e), Uo(null, t, null, n._onCommit), n
	}, Ho.prototype.legacy_renderSubtreeIntoContainer = function (e, t, n) {
		var r = this._internalRoot,
			i = new jo;
		return null !== (n = void 0 === n ? null : n) && i.then(n), Uo(t, r, e, i._onCommit), i
	}, Ho.prototype.createBatch = function () {
		var e = new Fo(this),
			t = e._expirationTime,
			n = this._internalRoot,
			r = n.firstBatch;
		if (null === r) n.firstBatch = e, e._next = null;
		else {
			for (n = null; null !== r && r._expirationTime >= t;) n = r, r = r._next;
			e._next = r, null !== n && (n._next = e)
		}
		return e
	}, Oe = Io, ke = Do, Ie = function () {
		ro || 0 === oo || (Po(oo, !1), oo = 0)
	};
	var qo = {
		createPortal: Wo,
		findDOMNode: function (e) {
			if (null == e) return null;
			if (1 === e.nodeType) return e;
			var t = e._reactInternalFiber;
			return void 0 === t && ("function" == typeof e.render ? o("188") : o("268", Object.keys(e))), e = null === (e = rn(t)) ? null : e.stateNode
		},
		hydrate: function (e, t, n) {
			return Vo(null, e, t, !0, n)
		},
		render: function (e, t, n) {
			return Vo(null, e, t, !1, n)
		},
		unstable_renderSubtreeIntoContainer: function (e, t, n, r) {
			return (null == e || void 0 === e._reactInternalFiber) && o("38"), Vo(e, t, n, !1, r)
		},
		unmountComponentAtNode: function (e) {
			return Go(e) || o("40"), !!e._reactRootContainer && (No(function () {
				Vo(null, null, e, !1, function () {
					e._reactRootContainer = null
				})
			}), !0)
		},
		unstable_createPortal: function () {
			return Wo.apply(void 0, arguments)
		},
		unstable_batchedUpdates: Io,
		unstable_interactiveUpdates: Do,
		flushSync: function (e, t) {
			ro && o("187");
			var n = co;
			co = !0;
			try {
				return Qa(e, t)
			} finally {
				co = n, Po(1073741823, !1)
			}
		},
		unstable_flushControlled: function (e) {
			var t = co;
			co = !0;
			try {
				Qa(e)
			} finally {
				(co = t) || ro || Po(1073741823, !1)
			}
		},
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
			Events: [D, z, U, P.injectEventPluginsByName, y, V, function (e) {
				E(e, G)
			}, Le, Re, An, R]
		},
		unstable_createRoot: function (e, t) {
			return Go(e) || o("299", "unstable_createRoot"), new Ho(e, !0, null != t && !0 === t.hydrate)
		}
	};
	! function (e) {
		var t = e.findFiberByHostInstance;
		(function (e) {
			if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
			var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
			if (t.isDisabled || !t.supportsFiber) return !0;
			try {
				var n = t.inject(e);
				zr = Br(function (e) {
					return t.onCommitFiberRoot(n, e)
				}), Ur = Br(function (e) {
					return t.onCommitFiberUnmount(n, e)
				})
			} catch (e) {}
		})(i({}, e, {
			findHostInstanceByFiber: function (e) {
				return null === (e = rn(e)) ? null : e.stateNode
			},
			findFiberByHostInstance: function (e) {
				return t ? t(e) : null
			}
		}))
	}({
		findFiberByHostInstance: N,
		bundleType: 0,
		version: "16.6.1",
		rendererPackageName: "react-dom"
	});
	var Xo = {
			default: qo
		},
		Yo = Xo && qo || Xo;
	e.exports = Yo.default || Yo
}, function (e, t, n) {
	"use strict";
	e.exports = n(14)
}, function (e, t, n) {
	"use strict";
	/** @license React v16.6.1
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = null,
		i = !1,
		a = 3,
		o = -1,
		s = -1,
		l = !1,
		c = !1;

	function u() {
		if (!l) {
			var e = r.expirationTime;
			c ? g() : c = !0, v(d, e)
		}
	}

	function h() {
		var e = r,
			t = r.next;
		if (r === t) r = null;
		else {
			var n = r.previous;
			r = n.next = t, t.previous = n
		}
		e.next = e.previous = null, n = e.callback, t = e.expirationTime, e = e.priorityLevel;
		var i = a,
			o = s;
		a = e, s = t;
		try {
			var l = n()
		} finally {
			a = i, s = o
		}
		if ("function" == typeof l)
			if (l = {
					callback: l,
					priorityLevel: e,
					expirationTime: t,
					next: null,
					previous: null
				}, null === r) r = l.next = l.previous = l;
			else {
				n = null, e = r;
				do {
					if (e.expirationTime >= t) {
						n = e;
						break
					}
					e = e.next
				} while (e !== r);
				null === n ? n = r : n === r && (r = l, u()), (t = n.previous).next = n.previous = l, l.next = n, l.previous = t
			}
	}

	function p() {
		if (-1 === o && null !== r && 1 === r.priorityLevel) {
			l = !0;
			try {
				do {
					h()
				} while (null !== r && 1 === r.priorityLevel)
			} finally {
				l = !1, null !== r ? u() : c = !1
			}
		}
	}

	function d(e) {
		l = !0;
		var n = i;
		i = e;
		try {
			if (e)
				for (; null !== r;) {
					var a = t.unstable_now();
					if (!(r.expirationTime <= a)) break;
					do {
						h()
					} while (null !== r && r.expirationTime <= a)
				} else if (null !== r)
					do {
						h()
					} while (null !== r && !y())
		} finally {
			l = !1, i = n, null !== r ? u() : c = !1, p()
		}
	}
	var f, m, v, g, y, x = Date,
		b = "function" == typeof setTimeout ? setTimeout : void 0,
		w = "function" == typeof clearTimeout ? clearTimeout : void 0,
		_ = "function" == typeof requestAnimationFrame ? requestAnimationFrame : void 0,
		M = "function" == typeof cancelAnimationFrame ? cancelAnimationFrame : void 0;

	function S(e) {
		f = _(function (t) {
			w(m), e(t)
		}), m = b(function () {
			M(f), e(t.unstable_now())
		}, 100)
	}
	if ("object" == typeof performance && "function" == typeof performance.now) {
		var T = performance;
		t.unstable_now = function () {
			return T.now()
		}
	} else t.unstable_now = function () {
		return x.now()
	};
	if ("undefined" != typeof window && window._schedMock) {
		var E = window._schedMock;
		v = E[0], g = E[1], y = E[2]
	} else if ("undefined" == typeof window || "function" != typeof window.addEventListener) {
		var C = null,
			A = -1,
			P = function (e, t) {
				if (null !== C) {
					var n = C;
					C = null;
					try {
						A = t, n(e)
					} finally {
						A = -1
					}
				}
			};
		v = function (e, t) {
			-1 !== A ? setTimeout(v, 0, e, t) : (C = e, setTimeout(P, t, !0, t), setTimeout(P, 1073741823, !1, 1073741823))
		}, g = function () {
			C = null
		}, y = function () {
			return !1
		}, t.unstable_now = function () {
			return -1 === A ? 0 : A
		}
	} else {
		"undefined" != typeof console && ("function" != typeof _ && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof M && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
		var L = null,
			R = !1,
			O = -1,
			k = !1,
			I = !1,
			N = 0,
			D = 33,
			z = 33;
		y = function () {
			return N <= t.unstable_now()
		};
		var U = "__reactIdleCallback$" + Math.random().toString(36).slice(2);
		window.addEventListener("message", function (e) {
			if (e.source === window && e.data === U) {
				R = !1, e = L;
				var n = O;
				L = null, O = -1;
				var r = t.unstable_now(),
					i = !1;
				if (0 >= N - r) {
					if (!(-1 !== n && n <= r)) return k || (k = !0, S(B)), L = e, void(O = n);
					i = !0
				}
				if (null !== e) {
					I = !0;
					try {
						e(i)
					} finally {
						I = !1
					}
				}
			}
		}, !1);
		var B = function (e) {
			if (null !== L) {
				S(B);
				var t = e - N + z;
				t < z && D < z ? (8 > t && (t = 8), z = t < D ? D : t) : D = t, N = e + z, R || (R = !0, window.postMessage(U, "*"))
			} else k = !1
		};
		v = function (e, t) {
			L = e, O = t, I || 0 > t ? window.postMessage(U, "*") : k || (k = !0, S(B))
		}, g = function () {
			L = null, R = !1, O = -1
		}
	}
	t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority = 2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 4, t.unstable_runWithPriority = function (e, n) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
				break;
			default:
				e = 3
		}
		var r = a,
			i = o;
		a = e, o = t.unstable_now();
		try {
			return n()
		} finally {
			a = r, o = i, p()
		}
	}, t.unstable_scheduleCallback = function (e, n) {
		var i = -1 !== o ? o : t.unstable_now();
		if ("object" == typeof n && null !== n && "number" == typeof n.timeout) n = i + n.timeout;
		else switch (a) {
			case 1:
				n = i + -1;
				break;
			case 2:
				n = i + 250;
				break;
			case 4:
				n = i + 1073741823;
				break;
			default:
				n = i + 5e3
		}
		if (e = {
				callback: e,
				priorityLevel: a,
				expirationTime: n,
				next: null,
				previous: null
			}, null === r) r = e.next = e.previous = e, u();
		else {
			i = null;
			var s = r;
			do {
				if (s.expirationTime > n) {
					i = s;
					break
				}
				s = s.next
			} while (s !== r);
			null === i ? i = r : i === r && (r = e, u()), (n = i.previous).next = i.previous = e, e.next = i, e.previous = n
		}
		return e
	}, t.unstable_cancelCallback = function (e) {
		var t = e.next;
		if (null !== t) {
			if (t === e) r = null;
			else {
				e === r && (r = t);
				var n = e.previous;
				n.next = t, t.previous = n
			}
			e.next = e.previous = null
		}
	}, t.unstable_wrapCallback = function (e) {
		var n = a;
		return function () {
			var r = a,
				i = o;
			a = n, o = t.unstable_now();
			try {
				return e.apply(this, arguments)
			} finally {
				a = r, o = i, p()
			}
		}
	}, t.unstable_getCurrentPriorityLevel = function () {
		return a
	}, t.unstable_shouldYield = function () {
		return !i && (null !== r && r.expirationTime < s || y())
	}
}, function (e, t) {
	var n, r, i = e.exports = {};

	function a() {
		throw new Error("setTimeout has not been defined")
	}

	function o() {
		throw new Error("clearTimeout has not been defined")
	}

	function s(e) {
		if (n === setTimeout) return setTimeout(e, 0);
		if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
		try {
			return n(e, 0)
		} catch (t) {
			try {
				return n.call(null, e, 0)
			} catch (t) {
				return n.call(this, e, 0)
			}
		}
	}! function () {
		try {
			n = "function" == typeof setTimeout ? setTimeout : a
		} catch (e) {
			n = a
		}
		try {
			r = "function" == typeof clearTimeout ? clearTimeout : o
		} catch (e) {
			r = o
		}
	}();
	var l, c = [],
		u = !1,
		h = -1;

	function p() {
		u && l && (u = !1, l.length ? c = l.concat(c) : h = -1, c.length && d())
	}

	function d() {
		if (!u) {
			var e = s(p);
			u = !0;
			for (var t = c.length; t;) {
				for (l = c, c = []; ++h < t;) l && l[h].run();
				h = -1, t = c.length
			}
			l = null, u = !1,
				function (e) {
					if (r === clearTimeout) return clearTimeout(e);
					if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
					try {
						r(e)
					} catch (t) {
						try {
							return r.call(null, e)
						} catch (t) {
							return r.call(this, e)
						}
					}
				}(e)
		}
	}

	function f(e, t) {
		this.fun = e, this.array = t
	}

	function m() {}
	i.nextTick = function (e) {
		var t = new Array(arguments.length - 1);
		if (arguments.length > 1)
			for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
		c.push(new f(e, t)), 1 !== c.length || u || s(d)
	}, f.prototype.run = function () {
		this.fun.apply(null, this.array)
	}, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function (e) {
		return []
	}, i.binding = function (e) {
		throw new Error("process.binding is not supported")
	}, i.cwd = function () {
		return "/"
	}, i.chdir = function (e) {
		throw new Error("process.chdir is not supported")
	}, i.umask = function () {
		return 0
	}
}, function (e, t, n) {
	"use strict";
	/** @license React v16.6.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = "function" == typeof Symbol && Symbol.for,
		i = r ? Symbol.for("react.element") : 60103,
		a = r ? Symbol.for("react.portal") : 60106,
		o = r ? Symbol.for("react.fragment") : 60107,
		s = r ? Symbol.for("react.strict_mode") : 60108,
		l = r ? Symbol.for("react.profiler") : 60114,
		c = r ? Symbol.for("react.provider") : 60109,
		u = r ? Symbol.for("react.context") : 60110,
		h = r ? Symbol.for("react.async_mode") : 60111,
		p = r ? Symbol.for("react.concurrent_mode") : 60111,
		d = r ? Symbol.for("react.forward_ref") : 60112,
		f = r ? Symbol.for("react.suspense") : 60113,
		m = r ? Symbol.for("react.memo") : 60115,
		v = r ? Symbol.for("react.lazy") : 60116;

	function g(e) {
		if ("object" == typeof e && null !== e) {
			var t = e.$$typeof;
			switch (t) {
				case i:
					switch (e = e.type) {
						case h:
						case p:
						case o:
						case l:
						case s:
							return e;
						default:
							switch (e = e && e.$$typeof) {
								case u:
								case d:
								case c:
									return e;
								default:
									return t
							}
					}
				case a:
					return t
			}
		}
	}

	function y(e) {
		return g(e) === p
	}
	t.typeOf = g, t.AsyncMode = h, t.ConcurrentMode = p, t.ContextConsumer = u, t.ContextProvider = c, t.Element = i, t.ForwardRef = d, t.Fragment = o, t.Profiler = l, t.Portal = a, t.StrictMode = s, t.isValidElementType = function (e) {
		return "string" == typeof e || "function" == typeof e || e === o || e === p || e === l || e === s || e === f || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === m || e.$$typeof === c || e.$$typeof === u || e.$$typeof === d)
	}, t.isAsyncMode = function (e) {
		return y(e) || g(e) === h
	}, t.isConcurrentMode = y, t.isContextConsumer = function (e) {
		return g(e) === u
	}, t.isContextProvider = function (e) {
		return g(e) === c
	}, t.isElement = function (e) {
		return "object" == typeof e && null !== e && e.$$typeof === i
	}, t.isForwardRef = function (e) {
		return g(e) === d
	}, t.isFragment = function (e) {
		return g(e) === o
	}, t.isProfiler = function (e) {
		return g(e) === l
	}, t.isPortal = function (e) {
		return g(e) === a
	}, t.isStrictMode = function (e) {
		return g(e) === s
	}
}, function (e, t, n) {
	e.exports = n(18)()
}, function (e, t, n) {
	"use strict";
	var r = n(19);

	function i() {}
	e.exports = function () {
		function e(e, t, n, i, a, o) {
			if (o !== r) {
				var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s
			}
		}

		function t() {
			return e
		}
		e.isRequired = e;
		var n = {
			array: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t
		};
		return n.checkPropTypes = i, n.PropTypes = n, n
	}
}, function (e, t, n) {
	"use strict";
	e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function (module, exports, __webpack_require__) {
	"use strict";
	var evalAllowed = !1;
	try {
		eval("evalAllowed = true")
	} catch (e) {}
	var platformSupported = !!Object.setPrototypeOf && evalAllowed;
	console.warn("React-Hot-Loaded is not supported in this environment"), module.exports = __webpack_require__(21)
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function (e) {
			return e && "object" == typeof e && "default" in e ? e.default : e
		}(n(0)),
		i = function (e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		},
		a = function (e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		},
		o = function (e) {
			function t() {
				return i(this, t), a(this, e.apply(this, arguments))
			}
			return function (e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, e), t.prototype.render = function () {
				return r.Children.only(this.props.children)
			}, t
		}(r.Component);
	t.AppContainer = o, t.hot = function () {
		return function (e) {
			return e
		}
	}, t.areComponentsEqual = function (e, t) {
		return e === t
	}, t.setConfig = function () {}, t.cold = function (e) {
		return e
	}
}, function (e) {
	e.exports = {
		Banner1: {
			text: "Pando has years of experience designing and developing graphical user interfaces for standalone and plugin applications. Through a creative & iterative design process, Pando realizes design specifications for mobile, desktop and single page web applications. Pando develops interactive, ready-to-market, UI mock-ups and wireframes using leading industry tools such as Figma, Adobe XD, and Sketch.",
			head: "user centric design"
		},
		Banner2: {
			text: "Pando is a classically trained pianist with a B.F.A. in Recorded Music from Tisch School of the Arts in NYC. Pando scores films & choreography, designs interactive sound art installations and produces experimental dance music. A commitment to improvisation and live production techniques underpins Pando's sound art and reflects their interest in biology, evolution, and meditative awareness.",
			head: "digital audio"
		},
		Banner3: {
			text: "Pando performs original generative visuals alongside musicians, DJs, dancers, and installation artists. Developing a minimalistic asthetic, Pando relies on sacred geometries, visual feedback loops, and audioreactive code to create original video art live and in the moment.",
			head: "generative visuals"
		},
		Banner4: {
			text: "catalog mgmt | resonate co-operative /n digital marketing | onno t-shirt co. /n catalog mgmt | rare earth vibration association /n web design & seo | boulder dyslexia therapy/n. /n audiovisual performance | spektrum , berlin /n audiovisual performance | paper box, brooklyn /n audio performance | bossa nova civic club, brooklyn /n audio performance | the looking glass, brooklyn"
		},
		Banner5: {
			text: "Using contemporary Javacript frameworks, Pando develops immersive online experiences, single page web applications, as well as business, personal and portfolio websites. With a background in cryptography and smart contract development on the Ethereum blockchain, Pando works with a variety of globally minded entrepenuers, developers and artists who emphasize decentralization, fairness, radical transparency and the efficacy of peer-to-peer networks in their work.",
			head: "full stack javascript"
		},
		Banner6: {
			text: "contact info@pando.systems for booking information /n follow @spreadpando on all social platforms for up-to-date press releases."
		},
		Default: {
			text: "Pando is the name given to a grove of trembling aspen trees in Utah which share a conjoined root system. The grove is 80.000 years old and its 20.000 tree stems share a conjoined root system, constituting one of the largest organisms on earth. Ecological changes now threaten the posterity of this giant. A standing testament and tacit witness to the primordial shaping of the American West, Pando shrinks as a result of disease and seasonal climate change.",
			head: "artist statment"
		}
	}
}, function (e, t, n) {
	"use strict";
	n.r(t);
	var r = n(0),
		i = n.n(r),
		a = n(2),
		o = n.n(a),
		s = n(1),
		l = n(7),
		c = n.n(l),
		u = n(8),
		h = n.n(u);

	function p(e) {
		return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function d(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}

	function f(e, t) {
		return !t || "object" !== p(t) && "function" != typeof t ? function (e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function m(e) {
		return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function v(e, t) {
		return (v = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}
	var g = s.a.a.withConfig({
			displayName: "console__Clock",
			componentId: "sc-7ilzgf-0"
		})(["color:black;text-decoration:none;position:absolute;top:0px;left:0px;grid-column:1/3;grid-row:1/2;z-index:2;text-align:left;padding-right:10px;"]),
		y = s.a.div.withConfig({
			displayName: "console__Label",
			componentId: "sc-7ilzgf-1"
		})(["margin:0;padding:0;font-size:0.8em;font-size:.8em;font-family:'Cutive Mono',monospace;line-height:1.1em;"]),
		x = s.a.img.withConfig({
			displayName: "console__Pando",
			componentId: "sc-7ilzgf-2"
		})(["width:auto;height:30px;padding-right:3px;filter:contrast(5.7);"]),
		b = s.a.img.withConfig({
			displayName: "console__Dot",
			componentId: "sc-7ilzgf-3"
		})(["width:auto;height:10px;position:relative;top:4px;filter:contrast(5.7);padding-right:5px;margin-bottom:5px;"]),
		w = function (e) {
			function t() {
				var e;
				return function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t), (e = f(this, m(t).call(this))).state = {
					time: new Date
				}, e
			}
			return function (e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && v(e, t)
				}(t, i.a.Component),
				function (e, t, n) {
					t && d(e.prototype, t), n && d(e, n)
				}(t, [{
					key: "currentTime",
					value: function () {
						this.setState({
							time: new Date
						})
					}
				}, {
					key: "componentWillMount",
					value: function () {
						var e = this;
						setInterval(function () {
							return e.currentTime()
						}, 500)
					}
				}, {
					key: "render",
					value: function () {
						return i.a.createElement(g, {
							href: "https://pando.systems/"
						}, i.a.createElement("div", null, i.a.createElement(x, {
							src: c.a
						}), i.a.createElement(b, {
							src: h.a
						})), i.a.createElement(y, null, this.state.time.getFullYear() + ":" + (1 + this.state.time.getMonth()) + ":" + this.state.time.getDate() + ":" + this.state.time.toLocaleTimeString("en-US", {
							hour12: !1
						})))
					}
				}]), t
		}();

	function _() {}
	void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function (e) {
		return "number" == typeof e && isFinite(e) && Math.floor(e) === e
	}), void 0 === Math.sign && (Math.sign = function (e) {
		return e < 0 ? -1 : e > 0 ? 1 : +e
	}), "name" in Function.prototype == !1 && Object.defineProperty(Function.prototype, "name", {
		get: function () {
			return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
		}
	}), void 0 === Object.assign && (Object.assign = function (e) {
		if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");
		for (var t = Object(e), n = 1; n < arguments.length; n++) {
			var r = arguments[n];
			if (void 0 !== r && null !== r)
				for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
		}
		return t
	}), Object.assign(_.prototype, {
		addEventListener: function (e, t) {
			void 0 === this._listeners && (this._listeners = {});
			var n = this._listeners;
			void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t)
		},
		hasEventListener: function (e, t) {
			if (void 0 === this._listeners) return !1;
			var n = this._listeners;
			return void 0 !== n[e] && -1 !== n[e].indexOf(t)
		},
		removeEventListener: function (e, t) {
			if (void 0 !== this._listeners) {
				var n = this._listeners[e];
				if (void 0 !== n) {
					var r = n.indexOf(t); - 1 !== r && n.splice(r, 1)
				}
			}
		},
		dispatchEvent: function (e) {
			if (void 0 !== this._listeners) {
				var t = this._listeners[e.type];
				if (void 0 !== t) {
					e.target = this;
					for (var n = t.slice(0), r = 0, i = n.length; r < i; r++) n[r].call(this, e)
				}
			}
		}
	});
	var M = "98",
		S = 0,
		T = 1,
		E = 2,
		C = 1,
		A = 2,
		P = 0,
		L = 1,
		R = 2,
		O = 0,
		k = 1,
		I = 2,
		N = 0,
		D = 1,
		z = 2,
		U = 3,
		B = 4,
		F = 5,
		j = 100,
		H = 101,
		G = 102,
		V = 103,
		W = 104,
		q = 200,
		X = 201,
		Y = 202,
		J = 203,
		Z = 204,
		$ = 205,
		Q = 206,
		K = 207,
		ee = 208,
		te = 209,
		ne = 210,
		re = 0,
		ie = 1,
		ae = 2,
		oe = 3,
		se = 4,
		le = 5,
		ce = 6,
		ue = 7,
		he = 0,
		pe = 1,
		de = 2,
		fe = 0,
		me = 1,
		ve = 2,
		ge = 3,
		ye = 4,
		xe = 301,
		be = 302,
		we = 303,
		_e = 304,
		Me = 305,
		Se = 306,
		Te = 307,
		Ee = 1e3,
		Ce = 1001,
		Ae = 1002,
		Pe = 1003,
		Le = 1004,
		Re = 1005,
		Oe = 1006,
		ke = 1007,
		Ie = 1008,
		Ne = 1009,
		De = 1010,
		ze = 1011,
		Ue = 1012,
		Be = 1013,
		Fe = 1014,
		je = 1015,
		He = 1016,
		Ge = 1017,
		Ve = 1018,
		We = 1019,
		qe = 1020,
		Xe = 1021,
		Ye = 1022,
		Je = 1023,
		Ze = 1024,
		$e = 1025,
		Qe = 1026,
		Ke = 1027,
		et = 1028,
		tt = 33776,
		nt = 33777,
		rt = 33778,
		it = 33779,
		at = 35840,
		ot = 35841,
		st = 35842,
		lt = 35843,
		ct = 36196,
		ut = 37808,
		ht = 37809,
		pt = 37810,
		dt = 37811,
		ft = 37812,
		mt = 37813,
		vt = 37814,
		gt = 37815,
		yt = 37816,
		xt = 37817,
		bt = 37818,
		wt = 37819,
		_t = 37820,
		Mt = 37821,
		St = 2201,
		Tt = 2400,
		Et = 0,
		Ct = 1,
		At = 2,
		Pt = 3e3,
		Lt = 3001,
		Rt = 3007,
		Ot = 3002,
		kt = 3004,
		It = 3005,
		Nt = 3006,
		Dt = 3200,
		zt = 3201,
		Ut = 0,
		Bt = 1,
		Ft = {
			DEG2RAD: Math.PI / 180,
			RAD2DEG: 180 / Math.PI,
			generateUUID: function () {
				for (var e = [], t = 0; t < 256; t++) e[t] = (t < 16 ? "0" : "") + t.toString(16);
				return function () {
					var t = 4294967295 * Math.random() | 0,
						n = 4294967295 * Math.random() | 0,
						r = 4294967295 * Math.random() | 0,
						i = 4294967295 * Math.random() | 0;
					return (e[255 & t] + e[t >> 8 & 255] + e[t >> 16 & 255] + e[t >> 24 & 255] + "-" + e[255 & n] + e[n >> 8 & 255] + "-" + e[n >> 16 & 15 | 64] + e[n >> 24 & 255] + "-" + e[63 & r | 128] + e[r >> 8 & 255] + "-" + e[r >> 16 & 255] + e[r >> 24 & 255] + e[255 & i] + e[i >> 8 & 255] + e[i >> 16 & 255] + e[i >> 24 & 255]).toUpperCase()
				}
			}(),
			clamp: function (e, t, n) {
				return Math.max(t, Math.min(n, e))
			},
			euclideanModulo: function (e, t) {
				return (e % t + t) % t
			},
			mapLinear: function (e, t, n, r, i) {
				return r + (e - t) * (i - r) / (n - t)
			},
			lerp: function (e, t, n) {
				return (1 - n) * e + n * t
			},
			smoothstep: function (e, t, n) {
				return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * (3 - 2 * e)
			},
			smootherstep: function (e, t, n) {
				return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * e * (e * (6 * e - 15) + 10)
			},
			randInt: function (e, t) {
				return e + Math.floor(Math.random() * (t - e + 1))
			},
			randFloat: function (e, t) {
				return e + Math.random() * (t - e)
			},
			randFloatSpread: function (e) {
				return e * (.5 - Math.random())
			},
			degToRad: function (e) {
				return e * Ft.DEG2RAD
			},
			radToDeg: function (e) {
				return e * Ft.RAD2DEG
			},
			isPowerOfTwo: function (e) {
				return 0 == (e & e - 1) && 0 !== e
			},
			ceilPowerOfTwo: function (e) {
				return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2))
			},
			floorPowerOfTwo: function (e) {
				return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))
			}
		};

	function jt(e, t) {
		this.x = e || 0, this.y = t || 0
	}

	function Ht() {
		this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
	}

	function Gt(e, t, n, r) {
		this._x = e || 0, this._y = t || 0, this._z = n || 0, this._w = void 0 !== r ? r : 1
	}

	function Vt(e, t, n) {
		this.x = e || 0, this.y = t || 0, this.z = n || 0
	}

	function Wt() {
		this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
	}
	Object.defineProperties(jt.prototype, {
		width: {
			get: function () {
				return this.x
			},
			set: function (e) {
				this.x = e
			}
		},
		height: {
			get: function () {
				return this.y
			},
			set: function (e) {
				this.y = e
			}
		}
	}), Object.assign(jt.prototype, {
		isVector2: !0,
		set: function (e, t) {
			return this.x = e, this.y = t, this
		},
		setScalar: function (e) {
			return this.x = e, this.y = e, this
		},
		setX: function (e) {
			return this.x = e, this
		},
		setY: function (e) {
			return this.y = e, this
		},
		setComponent: function (e, t) {
			switch (e) {
				case 0:
					this.x = t;
					break;
				case 1:
					this.y = t;
					break;
				default:
					throw new Error("index is out of range: " + e)
			}
			return this
		},
		getComponent: function (e) {
			switch (e) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				default:
					throw new Error("index is out of range: " + e)
			}
		},
		clone: function () {
			return new this.constructor(this.x, this.y)
		},
		copy: function (e) {
			return this.x = e.x, this.y = e.y, this
		},
		add: function (e, t) {
			return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
		},
		addScalar: function (e) {
			return this.x += e, this.y += e, this
		},
		addVectors: function (e, t) {
			return this.x = e.x + t.x, this.y = e.y + t.y, this
		},
		addScaledVector: function (e, t) {
			return this.x += e.x * t, this.y += e.y * t, this
		},
		sub: function (e, t) {
			return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
		},
		subScalar: function (e) {
			return this.x -= e, this.y -= e, this
		},
		subVectors: function (e, t) {
			return this.x = e.x - t.x, this.y = e.y - t.y, this
		},
		multiply: function (e) {
			return this.x *= e.x, this.y *= e.y, this
		},
		multiplyScalar: function (e) {
			return this.x *= e, this.y *= e, this
		},
		divide: function (e) {
			return this.x /= e.x, this.y /= e.y, this
		},
		divideScalar: function (e) {
			return this.multiplyScalar(1 / e)
		},
		applyMatrix3: function (e) {
			var t = this.x,
				n = this.y,
				r = e.elements;
			return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this
		},
		min: function (e) {
			return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
		},
		max: function (e) {
			return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
		},
		clamp: function (e, t) {
			return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
		},
		clampScalar: function () {
			var e = new jt,
				t = new jt;
			return function (n, r) {
				return e.set(n, n), t.set(r, r), this.clamp(e, t)
			}
		}(),
		clampLength: function (e, t) {
			var n = this.length();
			return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
		},
		floor: function () {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
		},
		ceil: function () {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
		},
		round: function () {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this
		},
		roundToZero: function () {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
		},
		negate: function () {
			return this.x = -this.x, this.y = -this.y, this
		},
		dot: function (e) {
			return this.x * e.x + this.y * e.y
		},
		cross: function (e) {
			return this.x * e.y - this.y * e.x
		},
		lengthSq: function () {
			return this.x * this.x + this.y * this.y
		},
		length: function () {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		},
		manhattanLength: function () {
			return Math.abs(this.x) + Math.abs(this.y)
		},
		normalize: function () {
			return this.divideScalar(this.length() || 1)
		},
		angle: function () {
			var e = Math.atan2(this.y, this.x);
			return e < 0 && (e += 2 * Math.PI), e
		},
		distanceTo: function (e) {
			return Math.sqrt(this.distanceToSquared(e))
		},
		distanceToSquared: function (e) {
			var t = this.x - e.x,
				n = this.y - e.y;
			return t * t + n * n
		},
		manhattanDistanceTo: function (e) {
			return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
		},
		setLength: function (e) {
			return this.normalize().multiplyScalar(e)
		},
		lerp: function (e, t) {
			return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
		},
		lerpVectors: function (e, t, n) {
			return this.subVectors(t, e).multiplyScalar(n).add(e)
		},
		equals: function (e) {
			return e.x === this.x && e.y === this.y
		},
		fromArray: function (e, t) {
			return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this
		},
		toArray: function (e, t) {
			return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e
		},
		fromBufferAttribute: function (e, t, n) {
			return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this
		},
		rotateAround: function (e, t) {
			var n = Math.cos(t),
				r = Math.sin(t),
				i = this.x - e.x,
				a = this.y - e.y;
			return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this
		}
	}), Object.assign(Ht.prototype, {
		isMatrix4: !0,
		set: function (e, t, n, r, i, a, o, s, l, c, u, h, p, d, f, m) {
			var v = this.elements;
			return v[0] = e, v[4] = t, v[8] = n, v[12] = r, v[1] = i, v[5] = a, v[9] = o, v[13] = s, v[2] = l, v[6] = c, v[10] = u, v[14] = h, v[3] = p, v[7] = d, v[11] = f, v[15] = m, this
		},
		identity: function () {
			return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
		},
		clone: function () {
			return (new Ht).fromArray(this.elements)
		},
		copy: function (e) {
			var t = this.elements,
				n = e.elements;
			return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this
		},
		copyPosition: function (e) {
			var t = this.elements,
				n = e.elements;
			return t[12] = n[12], t[13] = n[13], t[14] = n[14], this
		},
		extractBasis: function (e, t, n) {
			return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
		},
		makeBasis: function (e, t, n) {
			return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this
		},
		extractRotation: function () {
			var e = new Vt;
			return function (t) {
				var n = this.elements,
					r = t.elements,
					i = 1 / e.setFromMatrixColumn(t, 0).length(),
					a = 1 / e.setFromMatrixColumn(t, 1).length(),
					o = 1 / e.setFromMatrixColumn(t, 2).length();
				return n[0] = r[0] * i, n[1] = r[1] * i, n[2] = r[2] * i, n[3] = 0, n[4] = r[4] * a, n[5] = r[5] * a, n[6] = r[6] * a, n[7] = 0, n[8] = r[8] * o, n[9] = r[9] * o, n[10] = r[10] * o, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this
			}
		}(),
		makeRotationFromEuler: function (e) {
			e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
			var t = this.elements,
				n = e.x,
				r = e.y,
				i = e.z,
				a = Math.cos(n),
				o = Math.sin(n),
				s = Math.cos(r),
				l = Math.sin(r),
				c = Math.cos(i),
				u = Math.sin(i);
			if ("XYZ" === e.order) {
				var h = a * c,
					p = a * u,
					d = o * c,
					f = o * u;
				t[0] = s * c, t[4] = -s * u, t[8] = l, t[1] = p + d * l, t[5] = h - f * l, t[9] = -o * s, t[2] = f - h * l, t[6] = d + p * l, t[10] = a * s
			} else if ("YXZ" === e.order) {
				var m = s * c,
					v = s * u,
					g = l * c,
					y = l * u;
				t[0] = m + y * o, t[4] = g * o - v, t[8] = a * l, t[1] = a * u, t[5] = a * c, t[9] = -o, t[2] = v * o - g, t[6] = y + m * o, t[10] = a * s
			} else if ("ZXY" === e.order) {
				m = s * c, v = s * u, g = l * c, y = l * u;
				t[0] = m - y * o, t[4] = -a * u, t[8] = g + v * o, t[1] = v + g * o, t[5] = a * c, t[9] = y - m * o, t[2] = -a * l, t[6] = o, t[10] = a * s
			} else if ("ZYX" === e.order) {
				h = a * c, p = a * u, d = o * c, f = o * u;
				t[0] = s * c, t[4] = d * l - p, t[8] = h * l + f, t[1] = s * u, t[5] = f * l + h, t[9] = p * l - d, t[2] = -l, t[6] = o * s, t[10] = a * s
			} else if ("YZX" === e.order) {
				var x = a * s,
					b = a * l,
					w = o * s,
					_ = o * l;
				t[0] = s * c, t[4] = _ - x * u, t[8] = w * u + b, t[1] = u, t[5] = a * c, t[9] = -o * c, t[2] = -l * c, t[6] = b * u + w, t[10] = x - _ * u
			} else if ("XZY" === e.order) {
				x = a * s, b = a * l, w = o * s, _ = o * l;
				t[0] = s * c, t[4] = -u, t[8] = l * c, t[1] = x * u + _, t[5] = a * c, t[9] = b * u - w, t[2] = w * u - b, t[6] = o * c, t[10] = _ * u + x
			}
			return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
		},
		makeRotationFromQuaternion: function () {
			var e = new Vt(0, 0, 0),
				t = new Vt(1, 1, 1);
			return function (n) {
				return this.compose(e, n, t)
			}
		}(),
		lookAt: function () {
			var e = new Vt,
				t = new Vt,
				n = new Vt;
			return function (r, i, a) {
				var o = this.elements;
				return n.subVectors(r, i), 0 === n.lengthSq() && (n.z = 1), n.normalize(), e.crossVectors(a, n), 0 === e.lengthSq() && (1 === Math.abs(a.z) ? n.x += 1e-4 : n.z += 1e-4, n.normalize(), e.crossVectors(a, n)), e.normalize(), t.crossVectors(n, e), o[0] = e.x, o[4] = t.x, o[8] = n.x, o[1] = e.y, o[5] = t.y, o[9] = n.y, o[2] = e.z, o[6] = t.z, o[10] = n.z, this
			}
		}(),
		multiply: function (e, t) {
			return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
		},
		premultiply: function (e) {
			return this.multiplyMatrices(e, this)
		},
		multiplyMatrices: function (e, t) {
			var n = e.elements,
				r = t.elements,
				i = this.elements,
				a = n[0],
				o = n[4],
				s = n[8],
				l = n[12],
				c = n[1],
				u = n[5],
				h = n[9],
				p = n[13],
				d = n[2],
				f = n[6],
				m = n[10],
				v = n[14],
				g = n[3],
				y = n[7],
				x = n[11],
				b = n[15],
				w = r[0],
				_ = r[4],
				M = r[8],
				S = r[12],
				T = r[1],
				E = r[5],
				C = r[9],
				A = r[13],
				P = r[2],
				L = r[6],
				R = r[10],
				O = r[14],
				k = r[3],
				I = r[7],
				N = r[11],
				D = r[15];
			return i[0] = a * w + o * T + s * P + l * k, i[4] = a * _ + o * E + s * L + l * I, i[8] = a * M + o * C + s * R + l * N, i[12] = a * S + o * A + s * O + l * D, i[1] = c * w + u * T + h * P + p * k, i[5] = c * _ + u * E + h * L + p * I, i[9] = c * M + u * C + h * R + p * N, i[13] = c * S + u * A + h * O + p * D, i[2] = d * w + f * T + m * P + v * k, i[6] = d * _ + f * E + m * L + v * I, i[10] = d * M + f * C + m * R + v * N, i[14] = d * S + f * A + m * O + v * D, i[3] = g * w + y * T + x * P + b * k, i[7] = g * _ + y * E + x * L + b * I, i[11] = g * M + y * C + x * R + b * N, i[15] = g * S + y * A + x * O + b * D, this
		},
		multiplyScalar: function (e) {
			var t = this.elements;
			return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
		},
		applyToBufferAttribute: function () {
			var e = new Vt;
			return function (t) {
				for (var n = 0, r = t.count; n < r; n++) e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.applyMatrix4(this), t.setXYZ(n, e.x, e.y, e.z);
				return t
			}
		}(),
		determinant: function () {
			var e = this.elements,
				t = e[0],
				n = e[4],
				r = e[8],
				i = e[12],
				a = e[1],
				o = e[5],
				s = e[9],
				l = e[13],
				c = e[2],
				u = e[6],
				h = e[10],
				p = e[14];
			return e[3] * (+i * s * u - r * l * u - i * o * h + n * l * h + r * o * p - n * s * p) + e[7] * (+t * s * p - t * l * h + i * a * h - r * a * p + r * l * c - i * s * c) + e[11] * (+t * l * u - t * o * p - i * a * u + n * a * p + i * o * c - n * l * c) + e[15] * (-r * o * c - t * s * u + t * o * h + r * a * u - n * a * h + n * s * c)
		},
		transpose: function () {
			var e, t = this.elements;
			return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
		},
		setPosition: function (e) {
			var t = this.elements;
			return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
		},
		getInverse: function (e, t) {
			var n = this.elements,
				r = e.elements,
				i = r[0],
				a = r[1],
				o = r[2],
				s = r[3],
				l = r[4],
				c = r[5],
				u = r[6],
				h = r[7],
				p = r[8],
				d = r[9],
				f = r[10],
				m = r[11],
				v = r[12],
				g = r[13],
				y = r[14],
				x = r[15],
				b = d * y * h - g * f * h + g * u * m - c * y * m - d * u * x + c * f * x,
				w = v * f * h - p * y * h - v * u * m + l * y * m + p * u * x - l * f * x,
				_ = p * g * h - v * d * h + v * c * m - l * g * m - p * c * x + l * d * x,
				M = v * d * u - p * g * u - v * c * f + l * g * f + p * c * y - l * d * y,
				S = i * b + a * w + o * _ + s * M;
			if (0 === S) {
				var T = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
				if (!0 === t) throw new Error(T);
				return console.warn(T), this.identity()
			}
			var E = 1 / S;
			return n[0] = b * E, n[1] = (g * f * s - d * y * s - g * o * m + a * y * m + d * o * x - a * f * x) * E, n[2] = (c * y * s - g * u * s + g * o * h - a * y * h - c * o * x + a * u * x) * E, n[3] = (d * u * s - c * f * s - d * o * h + a * f * h + c * o * m - a * u * m) * E, n[4] = w * E, n[5] = (p * y * s - v * f * s + v * o * m - i * y * m - p * o * x + i * f * x) * E, n[6] = (v * u * s - l * y * s - v * o * h + i * y * h + l * o * x - i * u * x) * E, n[7] = (l * f * s - p * u * s + p * o * h - i * f * h - l * o * m + i * u * m) * E, n[8] = _ * E, n[9] = (v * d * s - p * g * s - v * a * m + i * g * m + p * a * x - i * d * x) * E, n[10] = (l * g * s - v * c * s + v * a * h - i * g * h - l * a * x + i * c * x) * E, n[11] = (p * c * s - l * d * s - p * a * h + i * d * h + l * a * m - i * c * m) * E, n[12] = M * E, n[13] = (p * g * o - v * d * o + v * a * f - i * g * f - p * a * y + i * d * y) * E, n[14] = (v * c * o - l * g * o - v * a * u + i * g * u + l * a * y - i * c * y) * E, n[15] = (l * d * o - p * c * o + p * a * u - i * d * u - l * a * f + i * c * f) * E, this
		},
		scale: function (e) {
			var t = this.elements,
				n = e.x,
				r = e.y,
				i = e.z;
			return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this
		},
		getMaxScaleOnAxis: function () {
			var e = this.elements,
				t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
				n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
				r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
			return Math.sqrt(Math.max(t, n, r))
		},
		makeTranslation: function (e, t, n) {
			return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this
		},
		makeRotationX: function (e) {
			var t = Math.cos(e),
				n = Math.sin(e);
			return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this
		},
		makeRotationY: function (e) {
			var t = Math.cos(e),
				n = Math.sin(e);
			return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this
		},
		makeRotationZ: function (e) {
			var t = Math.cos(e),
				n = Math.sin(e);
			return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
		},
		makeRotationAxis: function (e, t) {
			var n = Math.cos(t),
				r = Math.sin(t),
				i = 1 - n,
				a = e.x,
				o = e.y,
				s = e.z,
				l = i * a,
				c = i * o;
			return this.set(l * a + n, l * o - r * s, l * s + r * o, 0, l * o + r * s, c * o + n, c * s - r * a, 0, l * s - r * o, c * s + r * a, i * s * s + n, 0, 0, 0, 0, 1), this
		},
		makeScale: function (e, t, n) {
			return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
		},
		makeShear: function (e, t, n) {
			return this.set(1, t, n, 0, e, 1, n, 0, e, t, 1, 0, 0, 0, 0, 1), this
		},
		compose: function (e, t, n) {
			var r = this.elements,
				i = t._x,
				a = t._y,
				o = t._z,
				s = t._w,
				l = i + i,
				c = a + a,
				u = o + o,
				h = i * l,
				p = i * c,
				d = i * u,
				f = a * c,
				m = a * u,
				v = o * u,
				g = s * l,
				y = s * c,
				x = s * u,
				b = n.x,
				w = n.y,
				_ = n.z;
			return r[0] = (1 - (f + v)) * b, r[1] = (p + x) * b, r[2] = (d - y) * b, r[3] = 0, r[4] = (p - x) * w, r[5] = (1 - (h + v)) * w, r[6] = (m + g) * w, r[7] = 0, r[8] = (d + y) * _, r[9] = (m - g) * _, r[10] = (1 - (h + f)) * _, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this
		},
		decompose: function () {
			var e = new Vt,
				t = new Ht;
			return function (n, r, i) {
				var a = this.elements,
					o = e.set(a[0], a[1], a[2]).length(),
					s = e.set(a[4], a[5], a[6]).length(),
					l = e.set(a[8], a[9], a[10]).length();
				this.determinant() < 0 && (o = -o), n.x = a[12], n.y = a[13], n.z = a[14], t.copy(this);
				var c = 1 / o,
					u = 1 / s,
					h = 1 / l;
				return t.elements[0] *= c, t.elements[1] *= c, t.elements[2] *= c, t.elements[4] *= u, t.elements[5] *= u, t.elements[6] *= u, t.elements[8] *= h, t.elements[9] *= h, t.elements[10] *= h, r.setFromRotationMatrix(t), i.x = o, i.y = s, i.z = l, this
			}
		}(),
		makePerspective: function (e, t, n, r, i, a) {
			void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
			var o = this.elements,
				s = 2 * i / (t - e),
				l = 2 * i / (n - r),
				c = (t + e) / (t - e),
				u = (n + r) / (n - r),
				h = -(a + i) / (a - i),
				p = -2 * a * i / (a - i);
			return o[0] = s, o[4] = 0, o[8] = c, o[12] = 0, o[1] = 0, o[5] = l, o[9] = u, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = h, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
		},
		makeOrthographic: function (e, t, n, r, i, a) {
			var o = this.elements,
				s = 1 / (t - e),
				l = 1 / (n - r),
				c = 1 / (a - i),
				u = (t + e) * s,
				h = (n + r) * l,
				p = (a + i) * c;
			return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -u, o[1] = 0, o[5] = 2 * l, o[9] = 0, o[13] = -h, o[2] = 0, o[6] = 0, o[10] = -2 * c, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
		},
		equals: function (e) {
			for (var t = this.elements, n = e.elements, r = 0; r < 16; r++)
				if (t[r] !== n[r]) return !1;
			return !0
		},
		fromArray: function (e, t) {
			void 0 === t && (t = 0);
			for (var n = 0; n < 16; n++) this.elements[n] = e[n + t];
			return this
		},
		toArray: function (e, t) {
			void 0 === e && (e = []), void 0 === t && (t = 0);
			var n = this.elements;
			return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e
		}
	}), Object.assign(Gt, {
		slerp: function (e, t, n, r) {
			return n.copy(e).slerp(t, r)
		},
		slerpFlat: function (e, t, n, r, i, a, o) {
			var s = n[r + 0],
				l = n[r + 1],
				c = n[r + 2],
				u = n[r + 3],
				h = i[a + 0],
				p = i[a + 1],
				d = i[a + 2],
				f = i[a + 3];
			if (u !== f || s !== h || l !== p || c !== d) {
				var m = 1 - o,
					v = s * h + l * p + c * d + u * f,
					g = v >= 0 ? 1 : -1,
					y = 1 - v * v;
				if (y > Number.EPSILON) {
					var x = Math.sqrt(y),
						b = Math.atan2(x, v * g);
					m = Math.sin(m * b) / x, o = Math.sin(o * b) / x
				}
				var w = o * g;
				if (s = s * m + h * w, l = l * m + p * w, c = c * m + d * w, u = u * m + f * w, m === 1 - o) {
					var _ = 1 / Math.sqrt(s * s + l * l + c * c + u * u);
					s *= _, l *= _, c *= _, u *= _
				}
			}
			e[t] = s, e[t + 1] = l, e[t + 2] = c, e[t + 3] = u
		}
	}), Object.defineProperties(Gt.prototype, {
		x: {
			get: function () {
				return this._x
			},
			set: function (e) {
				this._x = e, this.onChangeCallback()
			}
		},
		y: {
			get: function () {
				return this._y
			},
			set: function (e) {
				this._y = e, this.onChangeCallback()
			}
		},
		z: {
			get: function () {
				return this._z
			},
			set: function (e) {
				this._z = e, this.onChangeCallback()
			}
		},
		w: {
			get: function () {
				return this._w
			},
			set: function (e) {
				this._w = e, this.onChangeCallback()
			}
		}
	}), Object.assign(Gt.prototype, {
		isQuaternion: !0,
		set: function (e, t, n, r) {
			return this._x = e, this._y = t, this._z = n, this._w = r, this.onChangeCallback(), this
		},
		clone: function () {
			return new this.constructor(this._x, this._y, this._z, this._w)
		},
		copy: function (e) {
			return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this.onChangeCallback(), this
		},
		setFromEuler: function (e, t) {
			if (!e || !e.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
			var n = e._x,
				r = e._y,
				i = e._z,
				a = e.order,
				o = Math.cos,
				s = Math.sin,
				l = o(n / 2),
				c = o(r / 2),
				u = o(i / 2),
				h = s(n / 2),
				p = s(r / 2),
				d = s(i / 2);
			return "XYZ" === a ? (this._x = h * c * u + l * p * d, this._y = l * p * u - h * c * d, this._z = l * c * d + h * p * u, this._w = l * c * u - h * p * d) : "YXZ" === a ? (this._x = h * c * u + l * p * d, this._y = l * p * u - h * c * d, this._z = l * c * d - h * p * u, this._w = l * c * u + h * p * d) : "ZXY" === a ? (this._x = h * c * u - l * p * d, this._y = l * p * u + h * c * d, this._z = l * c * d + h * p * u, this._w = l * c * u - h * p * d) : "ZYX" === a ? (this._x = h * c * u - l * p * d, this._y = l * p * u + h * c * d, this._z = l * c * d - h * p * u, this._w = l * c * u + h * p * d) : "YZX" === a ? (this._x = h * c * u + l * p * d, this._y = l * p * u + h * c * d, this._z = l * c * d - h * p * u, this._w = l * c * u - h * p * d) : "XZY" === a && (this._x = h * c * u - l * p * d, this._y = l * p * u - h * c * d, this._z = l * c * d + h * p * u, this._w = l * c * u + h * p * d), !1 !== t && this.onChangeCallback(), this
		},
		setFromAxisAngle: function (e, t) {
			var n = t / 2,
				r = Math.sin(n);
			return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this.onChangeCallback(), this
		},
		setFromRotationMatrix: function (e) {
			var t, n = e.elements,
				r = n[0],
				i = n[4],
				a = n[8],
				o = n[1],
				s = n[5],
				l = n[9],
				c = n[2],
				u = n[6],
				h = n[10],
				p = r + s + h;
			return p > 0 ? (t = .5 / Math.sqrt(p + 1), this._w = .25 / t, this._x = (u - l) * t, this._y = (a - c) * t, this._z = (o - i) * t) : r > s && r > h ? (t = 2 * Math.sqrt(1 + r - s - h), this._w = (u - l) / t, this._x = .25 * t, this._y = (i + o) / t, this._z = (a + c) / t) : s > h ? (t = 2 * Math.sqrt(1 + s - r - h), this._w = (a - c) / t, this._x = (i + o) / t, this._y = .25 * t, this._z = (l + u) / t) : (t = 2 * Math.sqrt(1 + h - r - s), this._w = (o - i) / t, this._x = (a + c) / t, this._y = (l + u) / t, this._z = .25 * t), this.onChangeCallback(), this
		},
		setFromUnitVectors: function () {
			var e, t = new Vt;
			return function (n, r) {
				return void 0 === t && (t = new Vt), (e = n.dot(r) + 1) < 1e-6 ? (e = 0, Math.abs(n.x) > Math.abs(n.z) ? t.set(-n.y, n.x, 0) : t.set(0, -n.z, n.y)) : t.crossVectors(n, r), this._x = t.x, this._y = t.y, this._z = t.z, this._w = e, this.normalize()
			}
		}(),
		angleTo: function (e) {
			return 2 * Math.acos(Math.abs(Ft.clamp(this.dot(e), -1, 1)))
		},
		rotateTowards: function (e, t) {
			var n = this.angleTo(e);
			if (0 === n) return this;
			var r = Math.min(1, t / n);
			return this.slerp(e, r), this
		},
		inverse: function () {
			return this.conjugate()
		},
		conjugate: function () {
			return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
		},
		dot: function (e) {
			return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
		},
		lengthSq: function () {
			return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
		},
		length: function () {
			return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
		},
		normalize: function () {
			var e = this.length();
			return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this.onChangeCallback(), this
		},
		multiply: function (e, t) {
			return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
		},
		premultiply: function (e) {
			return this.multiplyQuaternions(e, this)
		},
		multiplyQuaternions: function (e, t) {
			var n = e._x,
				r = e._y,
				i = e._z,
				a = e._w,
				o = t._x,
				s = t._y,
				l = t._z,
				c = t._w;
			return this._x = n * c + a * o + r * l - i * s, this._y = r * c + a * s + i * o - n * l, this._z = i * c + a * l + n * s - r * o, this._w = a * c - n * o - r * s - i * l, this.onChangeCallback(), this
		},
		slerp: function (e, t) {
			if (0 === t) return this;
			if (1 === t) return this.copy(e);
			var n = this._x,
				r = this._y,
				i = this._z,
				a = this._w,
				o = a * e._w + n * e._x + r * e._y + i * e._z;
			if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = r, this._z = i, this;
			var s = 1 - o * o;
			if (s <= Number.EPSILON) {
				var l = 1 - t;
				return this._w = l * a + t * this._w, this._x = l * n + t * this._x, this._y = l * r + t * this._y, this._z = l * i + t * this._z, this.normalize()
			}
			var c = Math.sqrt(s),
				u = Math.atan2(c, o),
				h = Math.sin((1 - t) * u) / c,
				p = Math.sin(t * u) / c;
			return this._w = a * h + this._w * p, this._x = n * h + this._x * p, this._y = r * h + this._y * p, this._z = i * h + this._z * p, this.onChangeCallback(), this
		},
		equals: function (e) {
			return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
		},
		fromArray: function (e, t) {
			return void 0 === t && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this.onChangeCallback(), this
		},
		toArray: function (e, t) {
			return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
		},
		onChange: function (e) {
			return this.onChangeCallback = e, this
		},
		onChangeCallback: function () {}
	}), Object.assign(Vt.prototype, {
		isVector3: !0,
		set: function (e, t, n) {
			return this.x = e, this.y = t, this.z = n, this
		},
		setScalar: function (e) {
			return this.x = e, this.y = e, this.z = e, this
		},
		setX: function (e) {
			return this.x = e, this
		},
		setY: function (e) {
			return this.y = e, this
		},
		setZ: function (e) {
			return this.z = e, this
		},
		setComponent: function (e, t) {
			switch (e) {
				case 0:
					this.x = t;
					break;
				case 1:
					this.y = t;
					break;
				case 2:
					this.z = t;
					break;
				default:
					throw new Error("index is out of range: " + e)
			}
			return this
		},
		getComponent: function (e) {
			switch (e) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				default:
					throw new Error("index is out of range: " + e)
			}
		},
		clone: function () {
			return new this.constructor(this.x, this.y, this.z)
		},
		copy: function (e) {
			return this.x = e.x, this.y = e.y, this.z = e.z, this
		},
		add: function (e, t) {
			return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
		},
		addScalar: function (e) {
			return this.x += e, this.y += e, this.z += e, this
		},
		addVectors: function (e, t) {
			return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
		},
		addScaledVector: function (e, t) {
			return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
		},
		sub: function (e, t) {
			return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
		},
		subScalar: function (e) {
			return this.x -= e, this.y -= e, this.z -= e, this
		},
		subVectors: function (e, t) {
			return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
		},
		multiply: function (e, t) {
			return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
		},
		multiplyScalar: function (e) {
			return this.x *= e, this.y *= e, this.z *= e, this
		},
		multiplyVectors: function (e, t) {
			return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
		},
		applyEuler: function () {
			var e = new Gt;
			return function (t) {
				return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(e.setFromEuler(t))
			}
		}(),
		applyAxisAngle: function () {
			var e = new Gt;
			return function (t, n) {
				return this.applyQuaternion(e.setFromAxisAngle(t, n))
			}
		}(),
		applyMatrix3: function (e) {
			var t = this.x,
				n = this.y,
				r = this.z,
				i = e.elements;
			return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this
		},
		applyMatrix4: function (e) {
			var t = this.x,
				n = this.y,
				r = this.z,
				i = e.elements,
				a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
			return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this
		},
		applyQuaternion: function (e) {
			var t = this.x,
				n = this.y,
				r = this.z,
				i = e.x,
				a = e.y,
				o = e.z,
				s = e.w,
				l = s * t + a * r - o * n,
				c = s * n + o * t - i * r,
				u = s * r + i * n - a * t,
				h = -i * t - a * n - o * r;
			return this.x = l * s + h * -i + c * -o - u * -a, this.y = c * s + h * -a + u * -i - l * -o, this.z = u * s + h * -o + l * -a - c * -i, this
		},
		project: function (e) {
			return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
		},
		unproject: function () {
			var e = new Ht;
			return function (t) {
				return this.applyMatrix4(e.getInverse(t.projectionMatrix)).applyMatrix4(t.matrixWorld)
			}
		}(),
		transformDirection: function (e) {
			var t = this.x,
				n = this.y,
				r = this.z,
				i = e.elements;
			return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize()
		},
		divide: function (e) {
			return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
		},
		divideScalar: function (e) {
			return this.multiplyScalar(1 / e)
		},
		min: function (e) {
			return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
		},
		max: function (e) {
			return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
		},
		clamp: function (e, t) {
			return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
		},
		clampScalar: function () {
			var e = new Vt,
				t = new Vt;
			return function (n, r) {
				return e.set(n, n, n), t.set(r, r, r), this.clamp(e, t)
			}
		}(),
		clampLength: function (e, t) {
			var n = this.length();
			return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
		},
		floor: function () {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
		},
		ceil: function () {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
		},
		round: function () {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
		},
		roundToZero: function () {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
		},
		negate: function () {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
		},
		dot: function (e) {
			return this.x * e.x + this.y * e.y + this.z * e.z
		},
		lengthSq: function () {
			return this.x * this.x + this.y * this.y + this.z * this.z
		},
		length: function () {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
		},
		manhattanLength: function () {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
		},
		normalize: function () {
			return this.divideScalar(this.length() || 1)
		},
		setLength: function (e) {
			return this.normalize().multiplyScalar(e)
		},
		lerp: function (e, t) {
			return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
		},
		lerpVectors: function (e, t, n) {
			return this.subVectors(t, e).multiplyScalar(n).add(e)
		},
		cross: function (e, t) {
			return void 0 !== t ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e)
		},
		crossVectors: function (e, t) {
			var n = e.x,
				r = e.y,
				i = e.z,
				a = t.x,
				o = t.y,
				s = t.z;
			return this.x = r * s - i * o, this.y = i * a - n * s, this.z = n * o - r * a, this
		},
		projectOnVector: function (e) {
			var t = e.dot(this) / e.lengthSq();
			return this.copy(e).multiplyScalar(t)
		},
		projectOnPlane: function () {
			var e = new Vt;
			return function (t) {
				return e.copy(this).projectOnVector(t), this.sub(e)
			}
		}(),
		reflect: function () {
			var e = new Vt;
			return function (t) {
				return this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
			}
		}(),
		angleTo: function (e) {
			var t = this.dot(e) / Math.sqrt(this.lengthSq() * e.lengthSq());
			return Math.acos(Ft.clamp(t, -1, 1))
		},
		distanceTo: function (e) {
			return Math.sqrt(this.distanceToSquared(e))
		},
		distanceToSquared: function (e) {
			var t = this.x - e.x,
				n = this.y - e.y,
				r = this.z - e.z;
			return t * t + n * n + r * r
		},
		manhattanDistanceTo: function (e) {
			return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
		},
		setFromSpherical: function (e) {
			return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
		},
		setFromSphericalCoords: function (e, t, n) {
			var r = Math.sin(t) * e;
			return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this
		},
		setFromCylindrical: function (e) {
			return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
		},
		setFromCylindricalCoords: function (e, t, n) {
			return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this
		},
		setFromMatrixPosition: function (e) {
			var t = e.elements;
			return this.x = t[12], this.y = t[13], this.z = t[14], this
		},
		setFromMatrixScale: function (e) {
			var t = this.setFromMatrixColumn(e, 0).length(),
				n = this.setFromMatrixColumn(e, 1).length(),
				r = this.setFromMatrixColumn(e, 2).length();
			return this.x = t, this.y = n, this.z = r, this
		},
		setFromMatrixColumn: function (e, t) {
			return this.fromArray(e.elements, 4 * t)
		},
		equals: function (e) {
			return e.x === this.x && e.y === this.y && e.z === this.z
		},
		fromArray: function (e, t) {
			return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
		},
		toArray: function (e, t) {
			return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
		},
		fromBufferAttribute: function (e, t, n) {
			return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this
		}
	}), Object.assign(Wt.prototype, {
		isMatrix3: !0,
		set: function (e, t, n, r, i, a, o, s, l) {
			var c = this.elements;
			return c[0] = e, c[1] = r, c[2] = o, c[3] = t, c[4] = i, c[5] = s, c[6] = n, c[7] = a, c[8] = l, this
		},
		identity: function () {
			return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
		},
		clone: function () {
			return (new this.constructor).fromArray(this.elements)
		},
		copy: function (e) {
			var t = this.elements,
				n = e.elements;
			return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this
		},
		setFromMatrix4: function (e) {
			var t = e.elements;
			return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
		},
		applyToBufferAttribute: function () {
			var e = new Vt;
			return function (t) {
				for (var n = 0, r = t.count; n < r; n++) e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.applyMatrix3(this), t.setXYZ(n, e.x, e.y, e.z);
				return t
			}
		}(),
		multiply: function (e) {
			return this.multiplyMatrices(this, e)
		},
		premultiply: function (e) {
			return this.multiplyMatrices(e, this)
		},
		multiplyMatrices: function (e, t) {
			var n = e.elements,
				r = t.elements,
				i = this.elements,
				a = n[0],
				o = n[3],
				s = n[6],
				l = n[1],
				c = n[4],
				u = n[7],
				h = n[2],
				p = n[5],
				d = n[8],
				f = r[0],
				m = r[3],
				v = r[6],
				g = r[1],
				y = r[4],
				x = r[7],
				b = r[2],
				w = r[5],
				_ = r[8];
			return i[0] = a * f + o * g + s * b, i[3] = a * m + o * y + s * w, i[6] = a * v + o * x + s * _, i[1] = l * f + c * g + u * b, i[4] = l * m + c * y + u * w, i[7] = l * v + c * x + u * _, i[2] = h * f + p * g + d * b, i[5] = h * m + p * y + d * w, i[8] = h * v + p * x + d * _, this
		},
		multiplyScalar: function (e) {
			var t = this.elements;
			return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
		},
		determinant: function () {
			var e = this.elements,
				t = e[0],
				n = e[1],
				r = e[2],
				i = e[3],
				a = e[4],
				o = e[5],
				s = e[6],
				l = e[7],
				c = e[8];
			return t * a * c - t * o * l - n * i * c + n * o * s + r * i * l - r * a * s
		},
		getInverse: function (e, t) {
			e && e.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
			var n = e.elements,
				r = this.elements,
				i = n[0],
				a = n[1],
				o = n[2],
				s = n[3],
				l = n[4],
				c = n[5],
				u = n[6],
				h = n[7],
				p = n[8],
				d = p * l - c * h,
				f = c * u - p * s,
				m = h * s - l * u,
				v = i * d + a * f + o * m;
			if (0 === v) {
				var g = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
				if (!0 === t) throw new Error(g);
				return console.warn(g), this.identity()
			}
			var y = 1 / v;
			return r[0] = d * y, r[1] = (o * h - p * a) * y, r[2] = (c * a - o * l) * y, r[3] = f * y, r[4] = (p * i - o * u) * y, r[5] = (o * s - c * i) * y, r[6] = m * y, r[7] = (a * u - h * i) * y, r[8] = (l * i - a * s) * y, this
		},
		transpose: function () {
			var e, t = this.elements;
			return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
		},
		getNormalMatrix: function (e) {
			return this.setFromMatrix4(e).getInverse(this).transpose()
		},
		transposeIntoArray: function (e) {
			var t = this.elements;
			return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
		},
		setUvTransform: function (e, t, n, r, i, a, o) {
			var s = Math.cos(i),
				l = Math.sin(i);
			this.set(n * s, n * l, -n * (s * a + l * o) + a + e, -r * l, r * s, -r * (-l * a + s * o) + o + t, 0, 0, 1)
		},
		scale: function (e, t) {
			var n = this.elements;
			return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this
		},
		rotate: function (e) {
			var t = Math.cos(e),
				n = Math.sin(e),
				r = this.elements,
				i = r[0],
				a = r[3],
				o = r[6],
				s = r[1],
				l = r[4],
				c = r[7];
			return r[0] = t * i + n * s, r[3] = t * a + n * l, r[6] = t * o + n * c, r[1] = -n * i + t * s, r[4] = -n * a + t * l, r[7] = -n * o + t * c, this
		},
		translate: function (e, t) {
			var n = this.elements;
			return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this
		},
		equals: function (e) {
			for (var t = this.elements, n = e.elements, r = 0; r < 9; r++)
				if (t[r] !== n[r]) return !1;
			return !0
		},
		fromArray: function (e, t) {
			void 0 === t && (t = 0);
			for (var n = 0; n < 9; n++) this.elements[n] = e[n + t];
			return this
		},
		toArray: function (e, t) {
			void 0 === e && (e = []), void 0 === t && (t = 0);
			var n = this.elements;
			return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e
		}
	});
	var qt = {
			getDataURL: function (e) {
				var t;
				if ("undefined" == typeof HTMLCanvasElement) return e.src;
				if (e instanceof HTMLCanvasElement) t = e;
				else {
					(t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = e.width, t.height = e.height;
					var n = t.getContext("2d");
					e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height)
				}
				return t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png")
			}
		},
		Xt = 0;

	function Yt(e, t, n, r, i, a, o, s, l, c) {
		Object.defineProperty(this, "id", {
			value: Xt++
		}), this.uuid = Ft.generateUUID(), this.name = "", this.image = void 0 !== e ? e : Yt.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== t ? t : Yt.DEFAULT_MAPPING, this.wrapS = void 0 !== n ? n : Ce, this.wrapT = void 0 !== r ? r : Ce, this.magFilter = void 0 !== i ? i : Oe, this.minFilter = void 0 !== a ? a : Ie, this.anisotropy = void 0 !== l ? l : 1, this.format = void 0 !== o ? o : Je, this.type = void 0 !== s ? s : Ne, this.offset = new jt(0, 0), this.repeat = new jt(1, 1), this.center = new jt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Wt, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== c ? c : Pt, this.version = 0, this.onUpdate = null
	}

	function Jt(e, t, n, r) {
		this.x = e || 0, this.y = t || 0, this.z = n || 0, this.w = void 0 !== r ? r : 1
	}

	function Zt(e, t, n) {
		this.width = e, this.height = t, this.scissor = new Jt(0, 0, e, t), this.scissorTest = !1, this.viewport = new Jt(0, 0, e, t), void 0 === (n = n || {}).minFilter && (n.minFilter = Oe), this.texture = new Yt(void 0, void 0, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.generateMipmaps = void 0 === n.generateMipmaps || n.generateMipmaps, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 === n.stencilBuffer || n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
	}

	function $t(e, t, n) {
		Zt.call(this, e, t, n), this.activeCubeFace = 0, this.activeMipMapLevel = 0
	}

	function Qt(e, t, n, r, i, a, o, s, l, c, u, h) {
		Yt.call(this, null, a, o, s, l, c, r, i, u, h), this.image = {
			data: e,
			width: t,
			height: n
		}, this.magFilter = void 0 !== l ? l : Pe, this.minFilter = void 0 !== c ? c : Pe, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
	}

	function Kt(e, t) {
		this.min = void 0 !== e ? e : new Vt(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== t ? t : new Vt(-1 / 0, -1 / 0, -1 / 0)
	}

	function en(e, t) {
		this.center = void 0 !== e ? e : new Vt, this.radius = void 0 !== t ? t : 0
	}

	function tn(e, t) {
		this.normal = void 0 !== e ? e : new Vt(1, 0, 0), this.constant = void 0 !== t ? t : 0
	}

	function nn(e, t, n, r, i, a) {
		this.planes = [void 0 !== e ? e : new tn, void 0 !== t ? t : new tn, void 0 !== n ? n : new tn, void 0 !== r ? r : new tn, void 0 !== i ? i : new tn, void 0 !== a ? a : new tn]
	}
	Yt.DEFAULT_IMAGE = void 0, Yt.DEFAULT_MAPPING = 300, Yt.prototype = Object.assign(Object.create(_.prototype), {
		constructor: Yt,
		isTexture: !0,
		updateMatrix: function () {
			this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
		},
		clone: function () {
			return (new this.constructor).copy(this)
		},
		copy: function (e) {
			return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this
		},
		toJSON: function (e) {
			var t = void 0 === e || "string" == typeof e;
			if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
			var n = {
				metadata: {
					version: 4.5,
					type: "Texture",
					generator: "Texture.toJSON"
				},
				uuid: this.uuid,
				name: this.name,
				mapping: this.mapping,
				repeat: [this.repeat.x, this.repeat.y],
				offset: [this.offset.x, this.offset.y],
				center: [this.center.x, this.center.y],
				rotation: this.rotation,
				wrap: [this.wrapS, this.wrapT],
				format: this.format,
				minFilter: this.minFilter,
				magFilter: this.magFilter,
				anisotropy: this.anisotropy,
				flipY: this.flipY
			};
			if (void 0 !== this.image) {
				var r = this.image;
				if (void 0 === r.uuid && (r.uuid = Ft.generateUUID()), !t && void 0 === e.images[r.uuid]) {
					var i;
					if (Array.isArray(r)) {
						i = [];
						for (var a = 0, o = r.length; a < o; a++) i.push(qt.getDataURL(r[a]))
					} else i = qt.getDataURL(r);
					e.images[r.uuid] = {
						uuid: r.uuid,
						url: i
					}
				}
				n.image = r.uuid
			}
			return t || (e.textures[this.uuid] = n), n
		},
		dispose: function () {
			this.dispatchEvent({
				type: "dispose"
			})
		},
		transformUv: function (e) {
			if (300 !== this.mapping) return e;
			if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
				case Ee:
					e.x = e.x - Math.floor(e.x);
					break;
				case Ce:
					e.x = e.x < 0 ? 0 : 1;
					break;
				case Ae:
					1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
			}
			if (e.y < 0 || e.y > 1) switch (this.wrapT) {
				case Ee:
					e.y = e.y - Math.floor(e.y);
					break;
				case Ce:
					e.y = e.y < 0 ? 0 : 1;
					break;
				case Ae:
					1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
			}
			return this.flipY && (e.y = 1 - e.y), e
		}
	}), Object.defineProperty(Yt.prototype, "needsUpdate", {
		set: function (e) {
			!0 === e && this.version++
		}
	}), Object.assign(Jt.prototype, {
		isVector4: !0,
		set: function (e, t, n, r) {
			return this.x = e, this.y = t, this.z = n, this.w = r, this
		},
		setScalar: function (e) {
			return this.x = e, this.y = e, this.z = e, this.w = e, this
		},
		setX: function (e) {
			return this.x = e, this
		},
		setY: function (e) {
			return this.y = e, this
		},
		setZ: function (e) {
			return this.z = e, this
		},
		setW: function (e) {
			return this.w = e, this
		},
		setComponent: function (e, t) {
			switch (e) {
				case 0:
					this.x = t;
					break;
				case 1:
					this.y = t;
					break;
				case 2:
					this.z = t;
					break;
				case 3:
					this.w = t;
					break;
				default:
					throw new Error("index is out of range: " + e)
			}
			return this
		},
		getComponent: function (e) {
			switch (e) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				case 3:
					return this.w;
				default:
					throw new Error("index is out of range: " + e)
			}
		},
		clone: function () {
			return new this.constructor(this.x, this.y, this.z, this.w)
		},
		copy: function (e) {
			return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
		},
		add: function (e, t) {
			return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
		},
		addScalar: function (e) {
			return this.x += e, this.y += e, this.z += e, this.w += e, this
		},
		addVectors: function (e, t) {
			return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
		},
		addScaledVector: function (e, t) {
			return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
		},
		sub: function (e, t) {
			return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
		},
		subScalar: function (e) {
			return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
		},
		subVectors: function (e, t) {
			return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
		},
		multiplyScalar: function (e) {
			return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
		},
		applyMatrix4: function (e) {
			var t = this.x,
				n = this.y,
				r = this.z,
				i = this.w,
				a = e.elements;
			return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this
		},
		divideScalar: function (e) {
			return this.multiplyScalar(1 / e)
		},
		setAxisAngleFromQuaternion: function (e) {
			this.w = 2 * Math.acos(e.w);
			var t = Math.sqrt(1 - e.w * e.w);
			return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
		},
		setAxisAngleFromRotationMatrix: function (e) {
			var t, n, r, i, a = e.elements,
				o = a[0],
				s = a[4],
				l = a[8],
				c = a[1],
				u = a[5],
				h = a[9],
				p = a[2],
				d = a[6],
				f = a[10];
			if (Math.abs(s - c) < .01 && Math.abs(l - p) < .01 && Math.abs(h - d) < .01) {
				if (Math.abs(s + c) < .1 && Math.abs(l + p) < .1 && Math.abs(h + d) < .1 && Math.abs(o + u + f - 3) < .1) return this.set(1, 0, 0, 0), this;
				t = Math.PI;
				var m = (o + 1) / 2,
					v = (u + 1) / 2,
					g = (f + 1) / 2,
					y = (s + c) / 4,
					x = (l + p) / 4,
					b = (h + d) / 4;
				return m > v && m > g ? m < .01 ? (n = 0, r = .707106781, i = .707106781) : (r = y / (n = Math.sqrt(m)), i = x / n) : v > g ? v < .01 ? (n = .707106781, r = 0, i = .707106781) : (n = y / (r = Math.sqrt(v)), i = b / r) : g < .01 ? (n = .707106781, r = .707106781, i = 0) : (n = x / (i = Math.sqrt(g)), r = b / i), this.set(n, r, i, t), this
			}
			var w = Math.sqrt((d - h) * (d - h) + (l - p) * (l - p) + (c - s) * (c - s));
			return Math.abs(w) < .001 && (w = 1), this.x = (d - h) / w, this.y = (l - p) / w, this.z = (c - s) / w, this.w = Math.acos((o + u + f - 1) / 2), this
		},
		min: function (e) {
			return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
		},
		max: function (e) {
			return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
		},
		clamp: function (e, t) {
			return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
		},
		clampScalar: function () {
			var e, t;
			return function (n, r) {
				return void 0 === e && (e = new Jt, t = new Jt), e.set(n, n, n, n), t.set(r, r, r, r), this.clamp(e, t)
			}
		}(),
		clampLength: function (e, t) {
			var n = this.length();
			return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
		},
		floor: function () {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
		},
		ceil: function () {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
		},
		round: function () {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
		},
		roundToZero: function () {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
		},
		negate: function () {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
		},
		dot: function (e) {
			return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
		},
		lengthSq: function () {
			return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
		},
		length: function () {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
		},
		manhattanLength: function () {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
		},
		normalize: function () {
			return this.divideScalar(this.length() || 1)
		},
		setLength: function (e) {
			return this.normalize().multiplyScalar(e)
		},
		lerp: function (e, t) {
			return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
		},
		lerpVectors: function (e, t, n) {
			return this.subVectors(t, e).multiplyScalar(n).add(e)
		},
		equals: function (e) {
			return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
		},
		fromArray: function (e, t) {
			return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
		},
		toArray: function (e, t) {
			return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
		},
		fromBufferAttribute: function (e, t, n) {
			return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
		}
	}), Zt.prototype = Object.assign(Object.create(_.prototype), {
		constructor: Zt,
		isWebGLRenderTarget: !0,
		setSize: function (e, t) {
			this.width === e && this.height === t || (this.width = e, this.height = t, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
		},
		clone: function () {
			return (new this.constructor).copy(this)
		},
		copy: function (e) {
			return this.width = e.width, this.height = e.height, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this
		},
		dispose: function () {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), $t.prototype = Object.create(Zt.prototype), $t.prototype.constructor = $t, $t.prototype.isWebGLRenderTargetCube = !0, Qt.prototype = Object.create(Yt.prototype), Qt.prototype.constructor = Qt, Qt.prototype.isDataTexture = !0, Object.assign(Kt.prototype, {
		isBox3: !0,
		set: function (e, t) {
			return this.min.copy(e), this.max.copy(t), this
		},
		setFromArray: function (e) {
			for (var t = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, l = e.length; s < l; s += 3) {
				var c = e[s],
					u = e[s + 1],
					h = e[s + 2];
				c < t && (t = c), u < n && (n = u), h < r && (r = h), c > i && (i = c), u > a && (a = u), h > o && (o = h)
			}
			return this.min.set(t, n, r), this.max.set(i, a, o), this
		},
		setFromBufferAttribute: function (e) {
			for (var t = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, l = e.count; s < l; s++) {
				var c = e.getX(s),
					u = e.getY(s),
					h = e.getZ(s);
				c < t && (t = c), u < n && (n = u), h < r && (r = h), c > i && (i = c), u > a && (a = u), h > o && (o = h)
			}
			return this.min.set(t, n, r), this.max.set(i, a, o), this
		},
		setFromPoints: function (e) {
			this.makeEmpty();
			for (var t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
			return this
		},
		setFromCenterAndSize: function () {
			var e = new Vt;
			return function (t, n) {
				var r = e.copy(n).multiplyScalar(.5);
				return this.min.copy(t).sub(r), this.max.copy(t).add(r), this
			}
		}(),
		setFromObject: function (e) {
			return this.makeEmpty(), this.expandByObject(e)
		},
		clone: function () {
			return (new this.constructor).copy(this)
		},
		copy: function (e) {
			return this.min.copy(e.min), this.max.copy(e.max), this
		},
		makeEmpty: function () {
			return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
		},
		isEmpty: function () {
			return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
		},
		getCenter: function (e) {
			return void 0 === e && (console.warn("THREE.Box3: .getCenter() target is now required"), e = new Vt), this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
		},
		getSize: function (e) {
			return void 0 === e && (console.warn("THREE.Box3: .getSize() target is now required"), e = new Vt), this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
		},
		expandByPoint: function (e) {
			return this.min.min(e), this.max.max(e), this
		},
		expandByVector: function (e) {
			return this.min.sub(e), this.max.add(e), this
		},
		expandByScalar: function (e) {
			return this.min.addScalar(-e), this.max.addScalar(e), this
		},
		expandByObject: function () {
			var e, t, n, r = new Vt;

			function i(i) {
				var a = i.geometry;
				if (void 0 !== a)
					if (a.isGeometry) {
						var o = a.vertices;
						for (t = 0, n = o.length; t < n; t++) r.copy(o[t]), r.applyMatrix4(i.matrixWorld), e.expandByPoint(r)
					} else if (a.isBufferGeometry) {
					var s = a.attributes.position;
					if (void 0 !== s)
						for (t = 0, n = s.count; t < n; t++) r.fromBufferAttribute(s, t).applyMatrix4(i.matrixWorld), e.expandByPoint(r)
				}
			}
			return function (t) {
				return e = this, t.updateMatrixWorld(!0), t.traverse(i), this
			}
		}(),
		containsPoint: function (e) {
			return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
		},
		containsBox: function (e) {
			return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
		},
		getParameter: function (e, t) {
			return void 0 === t && (console.warn("THREE.Box3: .getParameter() target is now required"), t = new Vt), t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
		},
		intersectsBox: function (e) {
			return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
		},
		intersectsSphere: function () {
			var e = new Vt;
			return function (t) {
				return this.clampPoint(t.center, e), e.distanceToSquared(t.center) <= t.radius * t.radius
			}
		}(),
		intersectsPlane: function (e) {
			var t, n;
			return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant
		},
		intersectsTriangle: function () {
			var e = new Vt,
				t = new Vt,
				n = new Vt,
				r = new Vt,
				i = new Vt,
				a = new Vt,
				o = new Vt,
				s = new Vt,
				l = new Vt,
				c = new Vt;

			function u(r) {
				var i, a;
				for (i = 0, a = r.length - 3; i <= a; i += 3) {
					o.fromArray(r, i);
					var s = l.x * Math.abs(o.x) + l.y * Math.abs(o.y) + l.z * Math.abs(o.z),
						c = e.dot(o),
						u = t.dot(o),
						h = n.dot(o);
					if (Math.max(-Math.max(c, u, h), Math.min(c, u, h)) > s) return !1
				}
				return !0
			}
			return function (o) {
				if (this.isEmpty()) return !1;
				this.getCenter(s), l.subVectors(this.max, s), e.subVectors(o.a, s), t.subVectors(o.b, s), n.subVectors(o.c, s), r.subVectors(t, e), i.subVectors(n, t), a.subVectors(e, n);
				var h = [0, -r.z, r.y, 0, -i.z, i.y, 0, -a.z, a.y, r.z, 0, -r.x, i.z, 0, -i.x, a.z, 0, -a.x, -r.y, r.x, 0, -i.y, i.x, 0, -a.y, a.x, 0];
				return !!u(h) && (!!u(h = [1, 0, 0, 0, 1, 0, 0, 0, 1]) && (c.crossVectors(r, i), u(h = [c.x, c.y, c.z])))
			}
		}(),
		clampPoint: function (e, t) {
			return void 0 === t && (console.warn("THREE.Box3: .clampPoint() target is now required"), t = new Vt), t.copy(e).clamp(this.min, this.max)
		},
		distanceToPoint: function () {
			var e = new Vt;
			return function (t) {
				return e.copy(t).clamp(this.min, this.max).sub(t).length()
			}
		}(),
		getBoundingSphere: function () {
			var e = new Vt;
			return function (t) {
				return void 0 === t && (console.warn("THREE.Box3: .getBoundingSphere() target is now required"), t = new en), this.getCenter(t.center), t.radius = .5 * this.getSize(e).length(), t
			}
		}(),
		intersect: function (e) {
			return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
		},
		union: function (e) {
			return this.min.min(e.min), this.max.max(e.max), this
		},
		applyMatrix4: function () {
			var e = [new Vt, new Vt, new Vt, new Vt, new Vt, new Vt, new Vt, new Vt];
			return function (t) {
				return this.isEmpty() ? this : (e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(e), this)
			}
		}(),
		translate: function (e) {
			return this.min.add(e), this.max.add(e), this
		},
		equals: function (e) {
			return e.min.equals(this.min) && e.max.equals(this.max)
		}
	}), Object.assign(en.prototype, {
		set: function (e, t) {
			return this.center.copy(e), this.radius = t, this
		},
		setFromPoints: function () {
			var e = new Kt;
			return function (t, n) {
				var r = this.center;
				void 0 !== n ? r.copy(n) : e.setFromPoints(t).getCenter(r);
				for (var i = 0, a = 0, o = t.length; a < o; a++) i = Math.max(i, r.distanceToSquared(t[a]));
				return this.radius = Math.sqrt(i), this
			}
		}(),
		clone: function () {
			return (new this.constructor).copy(this)
		},
		copy: function (e) {
			return this.center.copy(e.center), this.radius = e.radius, this
		},
		empty: function () {
			return this.radius <= 0
		},
		containsPoint: function (e) {
			return e.distanceToSquared(this.center) <= this.radius * this.radius
		},
		distanceToPoint: function (e) {
			return e.distanceTo(this.center) - this.radius
		},
		intersectsSphere: function (e) {
			var t = this.radius + e.radius;
			return e.center.distanceToSquared(this.center) <= t * t
		},
		intersectsBox: function (e) {
			return e.intersectsSphere(this)
		},
		intersectsPlane: function (e) {
			return Math.abs(e.distanceToPoint(this.center)) <= this.radius
		},
		clampPoint: function (e, t) {
			var n = this.center.distanceToSquared(e);
			return void 0 === t && (console.warn("THREE.Sphere: .clampPoint() target is now required"), t = new Vt), t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t
		},
		getBoundingBox: function (e) {
			return void 0 === e && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), e = new Kt), e.set(this.center, this.center), e.expandByScalar(this.radius), e
		},
		applyMatrix4: function (e) {
			return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
		},
		translate: function (e) {
			return this.center.add(e), this
		},
		equals: function (e) {
			return e.center.equals(this.center) && e.radius === this.radius
		}
	}), Object.assign(tn.prototype, {
		set: function (e, t) {
			return this.normal.copy(e), this.constant = t, this
		},
		setComponents: function (e, t, n, r) {
			return this.normal.set(e, t, n), this.constant = r, this
		},
		setFromNormalAndCoplanarPoint: function (e, t) {
			return this.normal.copy(e), this.constant = -t.dot(this.normal), this
		},
		setFromCoplanarPoints: function () {
			var e = new Vt,
				t = new Vt;
			return function (n, r, i) {
				var a = e.subVectors(i, r).cross(t.subVectors(n, r)).normalize();
				return this.setFromNormalAndCoplanarPoint(a, n), this
			}
		}(),
		clone: function () {
			return (new this.constructor).copy(this)
		},
		copy: function (e) {
			return this.normal.copy(e.normal), this.constant = e.constant, this
		},
		normalize: function () {
			var e = 1 / this.normal.length();
			return this.normal.multiplyScalar(e), this.constant *= e, this
		},
		negate: function () {
			return this.constant *= -1, this.normal.negate(), this
		},
		distanceToPoint: function (e) {
			return this.normal.dot(e) + this.constant
		},
		distanceToSphere: function (e) {
			return this.distanceToPoint(e.center) - e.radius
		},
		projectPoint: function (e, t) {
			return void 0 === t && (console.warn("THREE.Plane: .projectPoint() target is now required"), t = new Vt), t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
		},
		intersectLine: function () {
			var e = new Vt;
			return function (t, n) {
				void 0 === n && (console.warn("THREE.Plane: .intersectLine() target is now required"), n = new Vt);
				var r = t.delta(e),
					i = this.normal.dot(r);
				if (0 === i) return 0 === this.distanceToPoint(t.start) ? n.copy(t.start) : void 0;
				var a = -(t.start.dot(this.normal) + this.constant) / i;
				return a < 0 || a > 1 ? void 0 : n.copy(r).multiplyScalar(a).add(t.start)
			}
		}(),
		intersectsLine: function (e) {
			var t = this.distanceToPoint(e.start),
				n = this.distanceToPoint(e.end);
			return t < 0 && n > 0 || n < 0 && t > 0
		},
		intersectsBox: function (e) {
			return e.intersectsPlane(this)
		},
		intersectsSphere: function (e) {
			return e.intersectsPlane(this)
		},
		coplanarPoint: function (e) {
			return void 0 === e && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), e = new Vt), e.copy(this.normal).multiplyScalar(-this.constant)
		},
		applyMatrix4: function () {
			var e = new Vt,
				t = new Wt;
			return function (n, r) {
				var i = r || t.getNormalMatrix(n),
					a = this.coplanarPoint(e).applyMatrix4(n),
					o = this.normal.applyMatrix3(i).normalize();
				return this.constant = -a.dot(o), this
			}
		}(),
		translate: function (e) {
			return this.constant -= e.dot(this.normal), this
		},
		equals: function (e) {
			return e.normal.equals(this.normal) && e.constant === this.constant
		}
	}), Object.assign(nn.prototype, {
		set: function (e, t, n, r, i, a) {
			var o = this.planes;
			return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(a), this
		},
		clone: function () {
			return (new this.constructor).copy(this)
		},
		copy: function (e) {
			for (var t = this.planes, n = 0; n < 6; n++) t[n].copy(e.planes[n]);
			return this
		},
		setFromMatrix: function (e) {
			var t = this.planes,
				n = e.elements,
				r = n[0],
				i = n[1],
				a = n[2],
				o = n[3],
				s = n[4],
				l = n[5],
				c = n[6],
				u = n[7],
				h = n[8],
				p = n[9],
				d = n[10],
				f = n[11],
				m = n[12],
				v = n[13],
				g = n[14],
				y = n[15];
			return t[0].setComponents(o - r, u - s, f - h, y - m).normalize(), t[1].setComponents(o + r, u + s, f + h, y + m).normalize(), t[2].setComponents(o + i, u + l, f + p, y + v).normalize(), t[3].setComponents(o - i, u - l, f - p, y - v).normalize(), t[4].setComponents(o - a, u - c, f - d, y - g).normalize(), t[5].setComponents(o + a, u + c, f + d, y + g).normalize(), this
		},
		intersectsObject: function () {
			var e = new en;
			return function (t) {
				var n = t.geometry;
				return null === n.boundingSphere && n.computeBoundingSphere(), e.copy(n.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
			}
		}(),
		intersectsSprite: function () {
			var e = new en;
			return function (t) {
				return e.center.set(0, 0, 0), e.radius = .7071067811865476, e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
			}
		}(),
		intersectsSphere: function (e) {
			for (var t = this.planes, n = e.center, r = -e.radius, i = 0; i < 6; i++) {
				if (t[i].distanceToPoint(n) < r) return !1
			}
			return !0
		},
		intersectsBox: function () {
			var e = new Vt;
			return function (t) {
				for (var n = this.planes, r = 0; r < 6; r++) {
					var i = n[r];
					if (e.x = i.normal.x > 0 ? t.max.x : t.min.x, e.y = i.normal.y > 0 ? t.max.y : t.min.y, e.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(e) < 0) return !1
				}
				return !0
			}
		}(),
		containsPoint: function (e) {
			for (var t = this.planes, n = 0; n < 6; n++)
				if (t[n].distanceToPoint(e) < 0) return !1;
			return !0
		}
	});
	var rn = {
			alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
			alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
			alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
			aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
			aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
			begin_vertex: "\nvec3 transformed = vec3( position );\n",
			beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
			bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
			bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
			clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif\n",
			clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
			clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif\n",
			clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
			color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
			color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
			color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
			color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
			common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",
			cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
			defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",
			displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
			displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
			emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
			emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
			encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
			encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}\n",
			envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
			envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
			envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
			envmap_physical_pars_fragment: "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
			envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
			fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif\n",
			fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif\n",
			fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
			fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
			gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
			lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
			lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
			lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
			lights_pars_begin: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n",
			lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
			lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
			lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
			lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
			lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif\n",
			lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif\n",
			lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
			logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
			logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif\n",
			logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif\n",
			logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",
			map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
			map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
			map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
			map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",
			metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
			metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
			morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
			morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
			morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
			normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n",
			normal_fragment_maps: "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
			normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif\n",
			packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
			premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
			project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",
			dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
			dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
			roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
			roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
			shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
			shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
			shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
			shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
			skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
			skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
			skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",
			skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
			specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
			specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
			tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
			tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
			uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
			uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",
			uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
			uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
			uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
			uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
			worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",
			background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n}\n",
			background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position, 1.0 );\n\tgl_Position.z = 1.0;\n}\n",
			cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
			cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",
			depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
			depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
			distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
			distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
			equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
			equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
			linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
			linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
			meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
			meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
			meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
			meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
			meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\tvec4 matcapColor = texture2D( matcap, uv );\n\tmatcapColor = matcapTexelToLinear( matcapColor );\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
			meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}\n",
			meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
			meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
			meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
			meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
			normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
			normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
			points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
			points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}\n",
			shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",
			shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
			sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
			sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n"
		},
		an = {
			merge: function (e) {
				for (var t = {}, n = 0; n < e.length; n++) {
					var r = this.clone(e[n]);
					for (var i in r) t[i] = r[i]
				}
				return t
			},
			clone: function (e) {
				var t = {};
				for (var n in e)
					for (var r in t[n] = {}, e[n]) {
						var i = e[n][r];
						i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture) ? t[n][r] = i.clone() : Array.isArray(i) ? t[n][r] = i.slice() : t[n][r] = i
					}
				return t
			}
		},
		on = {
			aliceblue: 15792383,
			antiquewhite: 16444375,
			aqua: 65535,
			aquamarine: 8388564,
			azure: 15794175,
			beige: 16119260,
			bisque: 16770244,
			black: 0,
			blanchedalmond: 16772045,
			blue: 255,
			blueviolet: 9055202,
			brown: 10824234,
			burlywood: 14596231,
			cadetblue: 6266528,
			chartreuse: 8388352,
			chocolate: 13789470,
			coral: 16744272,
			cornflowerblue: 6591981,
			cornsilk: 16775388,
			crimson: 14423100,
			cyan: 65535,
			darkblue: 139,
			darkcyan: 35723,
			darkgoldenrod: 12092939,
			darkgray: 11119017,
			darkgreen: 25600,
			darkgrey: 11119017,
			darkkhaki: 12433259,
			darkmagenta: 9109643,
			darkolivegreen: 5597999,
			darkorange: 16747520,
			darkorchid: 10040012,
			darkred: 9109504,
			darksalmon: 15308410,
			darkseagreen: 9419919,
			darkslateblue: 4734347,
			darkslategray: 3100495,
			darkslategrey: 3100495,
			darkturquoise: 52945,
			darkviolet: 9699539,
			deeppink: 16716947,
			deepskyblue: 49151,
			dimgray: 6908265,
			dimgrey: 6908265,
			dodgerblue: 2003199,
			firebrick: 11674146,
			floralwhite: 16775920,
			forestgreen: 2263842,
			fuchsia: 16711935,
			gainsboro: 14474460,
			ghostwhite: 16316671,
			gold: 16766720,
			goldenrod: 14329120,
			gray: 8421504,
			green: 32768,
			greenyellow: 11403055,
			grey: 8421504,
			honeydew: 15794160,
			hotpink: 16738740,
			indianred: 13458524,
			indigo: 4915330,
			ivory: 16777200,
			khaki: 15787660,
			lavender: 15132410,
			lavenderblush: 16773365,
			lawngreen: 8190976,
			lemonchiffon: 16775885,
			lightblue: 11393254,
			lightcoral: 15761536,
			lightcyan: 14745599,
			lightgoldenrodyellow: 16448210,
			lightgray: 13882323,
			lightgreen: 9498256,
			lightgrey: 13882323,
			lightpink: 16758465,
			lightsalmon: 16752762,
			lightseagreen: 2142890,
			lightskyblue: 8900346,
			lightslategray: 7833753,
			lightslategrey: 7833753,
			lightsteelblue: 11584734,
			lightyellow: 16777184,
			lime: 65280,
			limegreen: 3329330,
			linen: 16445670,
			magenta: 16711935,
			maroon: 8388608,
			mediumaquamarine: 6737322,
			mediumblue: 205,
			mediumorchid: 12211667,
			mediumpurple: 9662683,
			mediumseagreen: 3978097,
			mediumslateblue: 8087790,
			mediumspringgreen: 64154,
			mediumturquoise: 4772300,
			mediumvioletred: 13047173,
			midnightblue: 1644912,
			mintcream: 16121850,
			mistyrose: 16770273,
			moccasin: 16770229,
			navajowhite: 16768685,
			navy: 128,
			oldlace: 16643558,
			olive: 8421376,
			olivedrab: 7048739,
			orange: 16753920,
			orangered: 16729344,
			orchid: 14315734,
			palegoldenrod: 15657130,
			palegreen: 10025880,
			paleturquoise: 11529966,
			palevioletred: 14381203,
			papayawhip: 16773077,
			peachpuff: 16767673,
			peru: 13468991,
			pink: 16761035,
			plum: 14524637,
			powderblue: 11591910,
			purple: 8388736,
			rebeccapurple: 6697881,
			red: 16711680,
			rosybrown: 12357519,
			royalblue: 4286945,
			saddlebrown: 9127187,
			salmon: 16416882,
			sandybrown: 16032864,
			seagreen: 3050327,
			seashell: 16774638,
			sienna: 10506797,
			silver: 12632256,
			skyblue: 8900331,
			slateblue: 6970061,
			slategray: 7372944,
			slategrey: 7372944,
			snow: 16775930,
			springgreen: 65407,
			steelblue: 4620980,
			tan: 13808780,
			teal: 32896,
			thistle: 14204888,
			tomato: 16737095,
			turquoise: 4251856,
			violet: 15631086,
			wheat: 16113331,
			white: 16777215,
			whitesmoke: 16119285,
			yellow: 16776960,
			yellowgreen: 10145074
		};

	function sn(e, t, n) {
		return void 0 === t && void 0 === n ? this.set(e) : this.setRGB(e, t, n)
	}
	Object.assign(sn.prototype, {
		isColor: !0,
		r: 1,
		g: 1,
		b: 1,
		set: function (e) {
			return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
		},
		setScalar: function (e) {
			return this.r = e, this.g = e, this.b = e, this
		},
		setHex: function (e) {
			return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
		},
		setRGB: function (e, t, n) {
			return this.r = e, this.g = t, this.b = n, this
		},
		setHSL: function () {
			function e(e, t, n) {
				return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - n) : e
			}
			return function (t, n, r) {
				if (t = Ft.euclideanModulo(t, 1), n = Ft.clamp(n, 0, 1), r = Ft.clamp(r, 0, 1), 0 === n) this.r = this.g = this.b = r;
				else {
					var i = r <= .5 ? r * (1 + n) : r + n - r * n,
						a = 2 * r - i;
					this.r = e(a, i, t + 1 / 3), this.g = e(a, i, t), this.b = e(a, i, t - 1 / 3)
				}
				return this
			}
		}(),
		setStyle: function (e) {
			function t(t) {
				void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
			}
			var n;
			if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
				var r, i = n[1],
					a = n[2];
				switch (i) {
					case "rgb":
					case "rgba":
						if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, t(r[5]), this;
						if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, t(r[5]), this;
						break;
					case "hsl":
					case "hsla":
						if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
							var o = parseFloat(r[1]) / 360,
								s = parseInt(r[2], 10) / 100,
								l = parseInt(r[3], 10) / 100;
							return t(r[5]), this.setHSL(o, s, l)
						}
				}
			} else if (n = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
				var c, u = (c = n[1]).length;
				if (3 === u) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
				if (6 === u) return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this
			}
			e && e.length > 0 && (void 0 !== (c = on[e]) ? this.setHex(c) : console.warn("THREE.Color: Unknown color " + e));
			return this
		},
		clone: function () {
			return new this.constructor(this.r, this.g, this.b)
		},
		copy: function (e) {
			return this.r = e.r, this.g = e.g, this.b = e.b, this
		},
		copyGammaToLinear: function (e, t) {
			return void 0 === t && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
		},
		copyLinearToGamma: function (e, t) {
			void 0 === t && (t = 2);
			var n = t > 0 ? 1 / t : 1;
			return this.r = Math.pow(e.r, n), this.g = Math.pow(e.g, n), this.b = Math.pow(e.b, n), this
		},
		convertGammaToLinear: function (e) {
			return this.copyGammaToLinear(this, e), this
		},
		convertLinearToGamma: function (e) {
			return this.copyLinearToGamma(this, e), this
		},
		copySRGBToLinear: function () {
			function e(e) {
				return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4)
			}
			return function (t) {
				return this.r = e(t.r), this.g = e(t.g), this.b = e(t.b), this
			}
		}(),
		copyLinearToSRGB: function () {
			function e(e) {
				return e < .0031308 ? 12.92 * e : 1.055 * Math.pow(e, .41666) - .055
			}
			return function (t) {
				return this.r = e(t.r), this.g = e(t.g), this.b = e(t.b), this
			}
		}(),
		convertSRGBToLinear: function () {
			return this.copySRGBToLinear(this), this
		},
		convertLinearToSRGB: function () {
			return this.copyLinearToSRGB(this), this
		},
		getHex: function () {
			return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
		},
		getHexString: function () {
			return ("000000" + this.getHex().toString(16)).slice(-6)
		},
		getHSL: function (e) {
			void 0 === e && (console.warn("THREE.Color: .getHSL() target is now required"), e = {
				h: 0,
				s: 0,
				l: 0
			});
			var t, n, r = this.r,
				i = this.g,
				a = this.b,
				o = Math.max(r, i, a),
				s = Math.min(r, i, a),
				l = (s + o) / 2;
			if (s === o) t = 0, n = 0;
			else {
				var c = o - s;
				switch (n = l <= .5 ? c / (o + s) : c / (2 - o - s), o) {
					case r:
						t = (i - a) / c + (i < a ? 6 : 0);
						break;
					case i:
						t = (a - r) / c + 2;
						break;
					case a:
						t = (r - i) / c + 4
				}
				t /= 6
			}
			return e.h = t, e.s = n, e.l = l, e
		},
		getStyle: function () {
			return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
		},
		offsetHSL: function () {
			var e = {};
			return function (t, n, r) {
				return this.getHSL(e), e.h += t, e.s += n, e.l += r, this.setHSL(e.h, e.s, e.l), this
			}
		}(),
		add: function (e) {
			return this.r += e.r, this.g += e.g, this.b += e.b, this
		},
		addColors: function (e, t) {
			return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
		},
		addScalar: function (e) {
			return this.r += e, this.g += e, this.b += e, this
		},
		sub: function (e) {
			return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
		},
		multiply: function (e) {
			return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
		},
		multiplyScalar: function (e) {
			return this.r *= e, this.g *= e, this.b *= e, this
		},
		lerp: function (e, t) {
			return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
		},
		lerpHSL: function () {
			var e = {
					h: 0,
					s: 0,
					l: 0
				},
				t = {
					h: 0,
					s: 0,
					l: 0
				};
			return function (n, r) {
				this.getHSL(e), n.getHSL(t);
				var i = Ft.lerp(e.h, t.h, r),
					a = Ft.lerp(e.s, t.s, r),
					o = Ft.lerp(e.l, t.l, r);
				return this.setHSL(i, a, o), this
			}
		}(),
		equals: function (e) {
			return e.r === this.r && e.g === this.g && e.b === this.b
		},
		fromArray: function (e, t) {
			return void 0 === t && (t = 0), this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
		},
		toArray: function (e, t) {
			return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
		},
		toJSON: function () {
			return this.getHex()
		}
	});
	var ln = {
			common: {
				diffuse: {
					value: new sn(15658734)
				},
				opacity: {
					value: 1
				},
				map: {
					value: null
				},
				uvTransform: {
					value: new Wt
				},
				alphaMap: {
					value: null
				}
			},
			specularmap: {
				specularMap: {
					value: null
				}
			},
			envmap: {
				envMap: {
					value: null
				},
				flipEnvMap: {
					value: -1
				},
				reflectivity: {
					value: 1
				},
				refractionRatio: {
					value: .98
				},
				maxMipLevel: {
					value: 0
				}
			},
			aomap: {
				aoMap: {
					value: null
				},
				aoMapIntensity: {
					value: 1
				}
			},
			lightmap: {
				lightMap: {
					value: null
				},
				lightMapIntensity: {
					value: 1
				}
			},
			emissivemap: {
				emissiveMap: {
					value: null
				}
			},
			bumpmap: {
				bumpMap: {
					value: null
				},
				bumpScale: {
					value: 1
				}
			},
			normalmap: {
				normalMap: {
					value: null
				},
				normalScale: {
					value: new jt(1, 1)
				}
			},
			displacementmap: {
				displacementMap: {
					value: null
				},
				displacementScale: {
					value: 1
				},
				displacementBias: {
					value: 0
				}
			},
			roughnessmap: {
				roughnessMap: {
					value: null
				}
			},
			metalnessmap: {
				metalnessMap: {
					value: null
				}
			},
			gradientmap: {
				gradientMap: {
					value: null
				}
			},
			fog: {
				fogDensity: {
					value: 25e-5
				},
				fogNear: {
					value: 1
				},
				fogFar: {
					value: 2e3
				},
				fogColor: {
					value: new sn(16777215)
				}
			},
			lights: {
				ambientLightColor: {
					value: []
				},
				directionalLights: {
					value: [],
					properties: {
						direction: {},
						color: {},
						shadow: {},
						shadowBias: {},
						shadowRadius: {},
						shadowMapSize: {}
					}
				},
				directionalShadowMap: {
					value: []
				},
				directionalShadowMatrix: {
					value: []
				},
				spotLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						direction: {},
						distance: {},
						coneCos: {},
						penumbraCos: {},
						decay: {},
						shadow: {},
						shadowBias: {},
						shadowRadius: {},
						shadowMapSize: {}
					}
				},
				spotShadowMap: {
					value: []
				},
				spotShadowMatrix: {
					value: []
				},
				pointLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						decay: {},
						distance: {},
						shadow: {},
						shadowBias: {},
						shadowRadius: {},
						shadowMapSize: {},
						shadowCameraNear: {},
						shadowCameraFar: {}
					}
				},
				pointShadowMap: {
					value: []
				},
				pointShadowMatrix: {
					value: []
				},
				hemisphereLights: {
					value: [],
					properties: {
						direction: {},
						skyColor: {},
						groundColor: {}
					}
				},
				rectAreaLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						width: {},
						height: {}
					}
				}
			},
			points: {
				diffuse: {
					value: new sn(15658734)
				},
				opacity: {
					value: 1
				},
				size: {
					value: 1
				},
				scale: {
					value: 1
				},
				map: {
					value: null
				},
				uvTransform: {
					value: new Wt
				}
			},
			sprite: {
				diffuse: {
					value: new sn(15658734)
				},
				opacity: {
					value: 1
				},
				center: {
					value: new jt(.5, .5)
				},
				rotation: {
					value: 0
				},
				map: {
					value: null
				},
				uvTransform: {
					value: new Wt
				}
			}
		},
		cn = {
			basic: {
				uniforms: an.merge([ln.common, ln.specularmap, ln.envmap, ln.aomap, ln.lightmap, ln.fog]),
				vertexShader: rn.meshbasic_vert,
				fragmentShader: rn.meshbasic_frag
			},
			lambert: {
				uniforms: an.merge([ln.common, ln.specularmap, ln.envmap, ln.aomap, ln.lightmap, ln.emissivemap, ln.fog, ln.lights, {
					emissive: {
						value: new sn(0)
					}
				}]),
				vertexShader: rn.meshlambert_vert,
				fragmentShader: rn.meshlambert_frag
			},
			phong: {
				uniforms: an.merge([ln.common, ln.specularmap, ln.envmap, ln.aomap, ln.lightmap, ln.emissivemap, ln.bumpmap, ln.normalmap, ln.displacementmap, ln.gradientmap, ln.fog, ln.lights, {
					emissive: {
						value: new sn(0)
					},
					specular: {
						value: new sn(1118481)
					},
					shininess: {
						value: 30
					}
				}]),
				vertexShader: rn.meshphong_vert,
				fragmentShader: rn.meshphong_frag
			},
			standard: {
				uniforms: an.merge([ln.common, ln.envmap, ln.aomap, ln.lightmap, ln.emissivemap, ln.bumpmap, ln.normalmap, ln.displacementmap, ln.roughnessmap, ln.metalnessmap, ln.fog, ln.lights, {
					emissive: {
						value: new sn(0)
					},
					roughness: {
						value: .5
					},
					metalness: {
						value: .5
					},
					envMapIntensity: {
						value: 1
					}
				}]),
				vertexShader: rn.meshphysical_vert,
				fragmentShader: rn.meshphysical_frag
			},
			matcap: {
				uniforms: an.merge([ln.common, ln.bumpmap, ln.normalmap, ln.displacementmap, ln.fog, {
					matcap: {
						value: null
					}
				}]),
				vertexShader: rn.meshmatcap_vert,
				fragmentShader: rn.meshmatcap_frag
			},
			points: {
				uniforms: an.merge([ln.points, ln.fog]),
				vertexShader: rn.points_vert,
				fragmentShader: rn.points_frag
			},
			dashed: {
				uniforms: an.merge([ln.common, ln.fog, {
					scale: {
						value: 1
					},
					dashSize: {
						value: 1
					},
					totalSize: {
						value: 2
					}
				}]),
				vertexShader: rn.linedashed_vert,
				fragmentShader: rn.linedashed_frag
			},
			depth: {
				uniforms: an.merge([ln.common, ln.displacementmap]),
				vertexShader: rn.depth_vert,
				fragmentShader: rn.depth_frag
			},
			normal: {
				uniforms: an.merge([ln.common, ln.bumpmap, ln.normalmap, ln.displacementmap, {
					opacity: {
						value: 1
					}
				}]),
				vertexShader: rn.normal_vert,
				fragmentShader: rn.normal_frag
			},
			sprite: {
				uniforms: an.merge([ln.sprite, ln.fog]),
				vertexShader: rn.sprite_vert,
				fragmentShader: rn.sprite_frag
			},
			background: {
				uniforms: {
					uvTransform: {
						value: new Wt
					},
					t2D: {
						value: null
					}
				},
				vertexShader: rn.background_vert,
				fragmentShader: rn.background_frag
			},
			cube: {
				uniforms: {
					tCube: {
						value: null
					},
					tFlip: {
						value: -1
					},
					opacity: {
						value: 1
					}
				},
				vertexShader: rn.cube_vert,
				fragmentShader: rn.cube_frag
			},
			equirect: {
				uniforms: {
					tEquirect: {
						value: null
					}
				},
				vertexShader: rn.equirect_vert,
				fragmentShader: rn.equirect_frag
			},
			distanceRGBA: {
				uniforms: an.merge([ln.common, ln.displacementmap, {
					referencePosition: {
						value: new Vt
					},
					nearDistance: {
						value: 1
					},
					farDistance: {
						value: 1e3
					}
				}]),
				vertexShader: rn.distanceRGBA_vert,
				fragmentShader: rn.distanceRGBA_frag
			},
			shadow: {
				uniforms: an.merge([ln.lights, ln.fog, {
					color: {
						value: new sn(0)
					},
					opacity: {
						value: 1
					}
				}]),
				vertexShader: rn.shadow_vert,
				fragmentShader: rn.shadow_frag
			}
		};

	function un() {
		var e = null,
			t = !1,
			n = null;

		function r(i, a) {
			!1 !== t && (n(i, a), e.requestAnimationFrame(r))
		}
		return {
			start: function () {
				!0 !== t && null !== n && (e.requestAnimationFrame(r), t = !0)
			},
			stop: function () {
				t = !1
			},
			setAnimationLoop: function (e) {
				n = e
			},
			setContext: function (t) {
				e = t
			}
		}
	}

	function hn(e) {
		var t = new WeakMap;
		return {
			get: function (e) {
				return e.isInterleavedBufferAttribute && (e = e.data), t.get(e)
			},
			remove: function (n) {
				n.isInterleavedBufferAttribute && (n = n.data);
				var r = t.get(n);
				r && (e.deleteBuffer(r.buffer), t.delete(n))
			},
			update: function (n, r) {
				n.isInterleavedBufferAttribute && (n = n.data);
				var i = t.get(n);
				void 0 === i ? t.set(n, function (t, n) {
					var r = t.array,
						i = t.dynamic ? 35048 : 35044,
						a = e.createBuffer();
					e.bindBuffer(n, a), e.bufferData(n, r, i), t.onUploadCallback();
					var o = 5126;
					return r instanceof Float32Array ? o = 5126 : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? o = 5123 : r instanceof Int16Array ? o = 5122 : r instanceof Uint32Array ? o = 5125 : r instanceof Int32Array ? o = 5124 : r instanceof Int8Array ? o = 5120 : r instanceof Uint8Array && (o = 5121), {
						buffer: a,
						type: o,
						bytesPerElement: r.BYTES_PER_ELEMENT,
						version: t.version
					}
				}(n, r)) : i.version < n.version && (function (t, n, r) {
					var i = n.array,
						a = n.updateRange;
					e.bindBuffer(r, t), !1 === n.dynamic ? e.bufferData(r, i, 35044) : -1 === a.count ? e.bufferSubData(r, 0, i) : 0 === a.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(r, a.offset * i.BYTES_PER_ELEMENT, i.subarray(a.offset, a.offset + a.count)), a.count = -1)
				}(i.buffer, n, r), i.version = n.version)
			}
		}
	}

	function pn(e, t, n, r, i, a) {
		this.a = e, this.b = t, this.c = n, this.normal = r && r.isVector3 ? r : new Vt, this.vertexNormals = Array.isArray(r) ? r : [], this.color = i && i.isColor ? i : new sn, this.vertexColors = Array.isArray(i) ? i : [], this.materialIndex = void 0 !== a ? a : 0
	}

	function dn(e, t, n, r) {
		this._x = e || 0, this._y = t || 0, this._z = n || 0, this._order = r || dn.DefaultOrder
	}

	function fn() {
		this.mask = 1
	}
	cn.physical = {
		uniforms: an.merge([cn.standard.uniforms, {
			clearCoat: {
				value: 0
			},
			clearCoatRoughness: {
				value: 0
			}
		}]),
		vertexShader: rn.meshphysical_vert,
		fragmentShader: rn.meshphysical_frag
	}, Object.assign(pn.prototype, {
		clone: function () {
			return (new this.constructor).copy(this)
		},
		copy: function (e) {
			this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex;
			for (var t = 0, n = e.vertexNormals.length; t < n; t++) this.vertexNormals[t] = e.vertexNormals[t].clone();
			for (t = 0, n = e.vertexColors.length; t < n; t++) this.vertexColors[t] = e.vertexColors[t].clone();
			return this
		}
	}), dn.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], dn.DefaultOrder = "XYZ", Object.defineProperties(dn.prototype, {
		x: {
			get: function () {
				return this._x
			},
			set: function (e) {
				this._x = e, this.onChangeCallback()
			}
		},
		y: {
			get: function () {
				return this._y
			},
			set: function (e) {
				this._y = e, this.onChangeCallback()
			}
		},
		z: {
			get: function () {
				return this._z
			},
			set: function (e) {
				this._z = e, this.onChangeCallback()
			}
		},
		order: {
			get: function () {
				return this._order
			},
			set: function (e) {
				this._order = e, this.onChangeCallback()
			}
		}
	}), Object.assign(dn.prototype, {
		isEuler: !0,
		set: function (e, t, n, r) {
			return this._x = e, this._y = t, this._z = n, this._order = r || this._order, this.onChangeCallback(), this
		},
		clone: function () {
			return new this.constructor(this._x, this._y, this._z, this._order)
		},
		copy: function (e) {
			return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this.onChangeCallback(), this
		},
		setFromRotationMatrix: function (e, t, n) {
			var r = Ft.clamp,
				i = e.elements,
				a = i[0],
				o = i[4],
				s = i[8],
				l = i[1],
				c = i[5],
				u = i[9],
				h = i[2],
				p = i[6],
				d = i[10];
			return "XYZ" === (t = t || this._order) ? (this._y = Math.asin(r(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(-u, d), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(p, c), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-r(u, -1, 1)), Math.abs(u) < .99999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, a), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(r(p, -1, 1)), Math.abs(p) < .99999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, a))) : "ZYX" === t ? (this._y = Math.asin(-r(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(p, d), this._z = Math.atan2(l, a)) : (this._x = 0, this._z = Math.atan2(-o, c))) : "YZX" === t ? (this._z = Math.asin(r(l, -1, 1)), Math.abs(l) < .99999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, a)) : (this._x = 0, this._y = Math.atan2(s, d))) : "XZY" === t ? (this._z = Math.asin(-r(o, -1, 1)), Math.abs(o) < .99999 ? (this._x = Math.atan2(p, c), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-u, d), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, !1 !== n && this.onChangeCallback(), this
		},
		setFromQuaternion: function () {
			var e = new Ht;
			return function (t, n, r) {
				return e.makeRotationFromQuaternion(t), this.setFromRotationMatrix(e, n, r)
			}
		}(),
		setFromVector3: function (e, t) {
			return this.set(e.x, e.y, e.z, t || this._order)
		},
		reorder: function () {
			var e = new Gt;
			return function (t) {
				return e.setFromEuler(this), this.setFromQuaternion(e, t)
			}
		}(),
		equals: function (e) {
			return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
		},
		fromArray: function (e) {
			return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this.onChangeCallback(), this
		},
		toArray: function (e, t) {
			return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
		},
		toVector3: function (e) {
			return e ? e.set(this._x, this._y, this._z) : new Vt(this._x, this._y, this._z)
		},
		onChange: function (e) {
			return this.onChangeCallback = e, this
		},
		onChangeCallback: function () {}
	}), Object.assign(fn.prototype, {
		set: function (e) {
			this.mask = 1 << e | 0
		},
		enable: function (e) {
			this.mask |= 1 << e | 0
		},
		toggle: function (e) {
			this.mask ^= 1 << e | 0
		},
		disable: function (e) {
			this.mask &= ~(1 << e | 0)
		},
		test: function (e) {
			return 0 != (this.mask & e.mask)
		}
	});
	var mn = 0;

	function vn() {
		Object.defineProperty(this, "id", {
			value: mn++
		}), this.uuid = Ft.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = vn.DefaultUp.clone();
		var e = new Vt,
			t = new dn,
			n = new Gt,
			r = new Vt(1, 1, 1);
		t.onChange(function () {
			n.setFromEuler(t, !1)
		}), n.onChange(function () {
			t.setFromQuaternion(n, void 0, !1)
		}), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: e
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: r
			},
			modelViewMatrix: {
				value: new Ht
			},
			normalMatrix: {
				value: new Wt
			}
		}), this.matrix = new Ht, this.matrixWorld = new Ht, this.matrixAutoUpdate = vn.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new fn, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
	}
	vn.DefaultUp = new Vt(0, 1, 0), vn.DefaultMatrixAutoUpdate = !0, vn.prototype = Object.assign(Object.create(_.prototype), {
		constructor: vn,
		isObject3D: !0,
		onBeforeRender: function () {},
		onAfterRender: function () {},
		applyMatrix: function (e) {
			this.matrix.multiplyMatrices(e, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
		},
		applyQuaternion: function (e) {
			return this.quaternion.premultiply(e), this
		},
		setRotationFromAxisAngle: function (e, t) {
			this.quaternion.setFromAxisAngle(e, t)
		},
		setRotationFromEuler: function (e) {
			this.quaternion.setFromEuler(e, !0)
		},
		setRotationFromMatrix: function (e) {
			this.quaternion.setFromRotationMatrix(e)
		},
		setRotationFromQuaternion: function (e) {
			this.quaternion.copy(e)
		},
		rotateOnAxis: function () {
			var e = new Gt;
			return function (t, n) {
				return e.setFromAxisAngle(t, n), this.quaternion.multiply(e), this
			}
		}(),
		rotateOnWorldAxis: function () {
			var e = new Gt;
			return function (t, n) {
				return e.setFromAxisAngle(t, n), this.quaternion.premultiply(e), this
			}
		}(),
		rotateX: function () {
			var e = new Vt(1, 0, 0);
			return function (t) {
				return this.rotateOnAxis(e, t)
			}
		}(),
		rotateY: function () {
			var e = new Vt(0, 1, 0);
			return function (t) {
				return this.rotateOnAxis(e, t)
			}
		}(),
		rotateZ: function () {
			var e = new Vt(0, 0, 1);
			return function (t) {
				return this.rotateOnAxis(e, t)
			}
		}(),
		translateOnAxis: function () {
			var e = new Vt;
			return function (t, n) {
				return e.copy(t).applyQuaternion(this.quaternion), this.position.add(e.multiplyScalar(n)), this
			}
		}(),
		translateX: function () {
			var e = new Vt(1, 0, 0);
			return function (t) {
				return this.translateOnAxis(e, t)
			}
		}(),
		translateY: function () {
			var e = new Vt(0, 1, 0);
			return function (t) {
				return this.translateOnAxis(e, t)
			}
		}(),
		translateZ: function () {
			var e = new Vt(0, 0, 1);
			return function (t) {
				return this.translateOnAxis(e, t)
			}
		}(),
		localToWorld: function (e) {
			return e.applyMatrix4(this.matrixWorld)
		},
		worldToLocal: function () {
			var e = new Ht;
			return function (t) {
				return t.applyMatrix4(e.getInverse(this.matrixWorld))
			}
		}(),
		lookAt: function () {
			var e = new Gt,
				t = new Ht,
				n = new Vt,
				r = new Vt;
			return function (i, a, o) {
				i.isVector3 ? n.copy(i) : n.set(i, a, o);
				var s = this.parent;
				this.updateWorldMatrix(!0, !1), r.setFromMatrixPosition(this.matrixWorld), this.isCamera ? t.lookAt(r, n, this.up) : t.lookAt(n, r, this.up), this.quaternion.setFromRotationMatrix(t), s && (t.extractRotation(s.matrixWorld), e.setFromRotationMatrix(t), this.quaternion.premultiply(e.inverse()))
			}
		}(),
		add: function (e) {
			if (arguments.length > 1) {
				for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
				return this
			}
			return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({
				type: "added"
			}), this.children.push(e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
		},
		remove: function (e) {
			if (arguments.length > 1) {
				for (var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
				return this
			}
			var n = this.children.indexOf(e);
			return -1 !== n && (e.parent = null, e.dispatchEvent({
				type: "removed"
			}), this.children.splice(n, 1)), this
		},
		getObjectById: function (e) {
			return this.getObjectByProperty("id", e)
		},
		getObjectByName: function (e) {
			return this.getObjectByProperty("name", e)
		},
		getObjectByProperty: function (e, t) {
			if (this[e] === t) return this;
			for (var n = 0, r = this.children.length; n < r; n++) {
				var i = this.children[n].getObjectByProperty(e, t);
				if (void 0 !== i) return i
			}
		},
		getWorldPosition: function (e) {
			return void 0 === e && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), e = new Vt), this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
		},
		getWorldQuaternion: function () {
			var e = new Vt,
				t = new Vt;
			return function (n) {
				return void 0 === n && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), n = new Gt), this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, n, t), n
			}
		}(),
		getWorldScale: function () {
			var e = new Vt,
				t = new Gt;
			return function (n) {
				return void 0 === n && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), n = new Vt), this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, t, n), n
			}
		}(),
		getWorldDirection: function (e) {
			void 0 === e && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), e = new Vt), this.updateMatrixWorld(!0);
			var t = this.matrixWorld.elements;
			return e.set(t[8], t[9], t[10]).normalize()
		},
		raycast: function () {},
		traverse: function (e) {
			e(this);
			for (var t = this.children, n = 0, r = t.length; n < r; n++) t[n].traverse(e)
		},
		traverseVisible: function (e) {
			if (!1 !== this.visible) {
				e(this);
				for (var t = this.children, n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e)
			}
		},
		traverseAncestors: function (e) {
			var t = this.parent;
			null !== t && (e(t), t.traverseAncestors(e))
		},
		updateMatrix: function () {
			this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
		},
		updateMatrixWorld: function (e) {
			this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
			for (var t = this.children, n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e)
		},
		updateWorldMatrix: function (e, t) {
			var n = this.parent;
			if (!0 === e && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === t)
				for (var r = this.children, i = 0, a = r.length; i < a; i++) r[i].updateWorldMatrix(!1, !0)
		},
		toJSON: function (e) {
			var t = void 0 === e || "string" == typeof e,
				n = {};
			t && (e = {
				geometries: {},
				materials: {},
				textures: {},
				images: {},
				shapes: {}
			}, n.metadata = {
				version: 4.5,
				type: "Object",
				generator: "Object3D.toJSON"
			});
			var r = {};

			function i(t, n) {
				return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)), n.uuid
			}
			if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), !0 === this.castShadow && (r.castShadow = !0), !0 === this.receiveShadow && (r.receiveShadow = !0), !1 === this.visible && (r.visible = !1), !1 === this.frustumCulled && (r.frustumCulled = !1), 0 !== this.renderOrder && (r.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (r.matrixAutoUpdate = !1), this.isMesh || this.isLine || this.isPoints) {
				r.geometry = i(e.geometries, this.geometry);
				var a = this.geometry.parameters;
				if (void 0 !== a && void 0 !== a.shapes) {
					var o = a.shapes;
					if (Array.isArray(o))
						for (var s = 0, l = o.length; s < l; s++) {
							var c = o[s];
							i(e.shapes, c)
						} else i(e.shapes, o)
				}
			}
			if (void 0 !== this.material)
				if (Array.isArray(this.material)) {
					var u = [];
					for (s = 0, l = this.material.length; s < l; s++) u.push(i(e.materials, this.material[s]));
					r.material = u
				} else r.material = i(e.materials, this.material);
			if (this.children.length > 0) {
				r.children = [];
				for (s = 0; s < this.children.length; s++) r.children.push(this.children[s].toJSON(e).object)
			}
			if (t) {
				var h = m(e.geometries),
					p = m(e.materials),
					d = m(e.textures),
					f = m(e.images);
				o = m(e.shapes);
				h.length > 0 && (n.geometries = h), p.length > 0 && (n.materials = p), d.length > 0 && (n.textures = d), f.length > 0 && (n.images = f), o.length > 0 && (n.shapes = o)
			}
			return n.object = r, n;

			function m(e) {
				var t = [];
				for (var n in e) {
					var r = e[n];
					delete r.metadata, t.push(r)
				}
				return t
			}
		},
		clone: function (e) {
			return (new this.constructor).copy(this, e)
		},
		copy: function (e, t) {
			if (void 0 === t && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), !0 === t)
				for (var n = 0; n < e.children.length; n++) {
					var r = e.children[n];
					this.add(r.clone())
				}
			return this
		}
	});
	var gn = 0;

	function yn() {
		Object.defineProperty(this, "id", {
			value: gn += 2
		}), this.uuid = Ft.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
			[]
		], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
	}

	function xn(e, t, n) {
		if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.name = "", this.array = e, this.itemSize = t, this.count = void 0 !== e ? e.length / t : 0, this.normalized = !0 === n, this.dynamic = !1, this.updateRange = {
			offset: 0,
			count: -1
		}, this.version = 0
	}

	function bn(e, t, n) {
		xn.call(this, new Int8Array(e), t, n)
	}

	function wn(e, t, n) {
		xn.call(this, new Uint8Array(e), t, n)
	}

	function _n(e, t, n) {
		xn.call(this, new Uint8ClampedArray(e), t, n)
	}

	function Mn(e, t, n) {
		xn.call(this, new Int16Array(e), t, n)
	}

	function Sn(e, t, n) {
		xn.call(this, new Uint16Array(e), t, n)
	}

	function Tn(e, t, n) {
		xn.call(this, new Int32Array(e), t, n)
	}

	function En(e, t, n) {
		xn.call(this, new Uint32Array(e), t, n)
	}

	function Cn(e, t, n) {
		xn.call(this, new Float32Array(e), t, n)
	}

	function An(e, t, n) {
		xn.call(this, new Float64Array(e), t, n)
	}

	function Pn() {
		this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
	}

	function Ln(e) {
		if (0 === e.length) return -1 / 0;
		for (var t = e[0], n = 1, r = e.length; n < r; ++n) e[n] > t && (t = e[n]);
		return t
	}
	yn.prototype = Object.assign(Object.create(_.prototype), {
		constructor: yn,
		isGeometry: !0,
		applyMatrix: function (e) {
			for (var t = (new Wt).getNormalMatrix(e), n = 0, r = this.vertices.length; n < r; n++) {
				this.vertices[n].applyMatrix4(e)
			}
			for (n = 0, r = this.faces.length; n < r; n++) {
				var i = this.faces[n];
				i.normal.applyMatrix3(t).normalize();
				for (var a = 0, o = i.vertexNormals.length; a < o; a++) i.vertexNormals[a].applyMatrix3(t).normalize()
			}
			return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
		},
		rotateX: function () {
			var e = new Ht;
			return function (t) {
				return e.makeRotationX(t), this.applyMatrix(e), this
			}
		}(),
		rotateY: function () {
			var e = new Ht;
			return function (t) {
				return e.makeRotationY(t), this.applyMatrix(e), this
			}
		}(),
		rotateZ: function () {
			var e = new Ht;
			return function (t) {
				return e.makeRotationZ(t), this.applyMatrix(e), this
			}
		}(),
		translate: function () {
			var e = new Ht;
			return function (t, n, r) {
				return e.makeTranslation(t, n, r), this.applyMatrix(e), this
			}
		}(),
		scale: function () {
			var e = new Ht;
			return function (t, n, r) {
				return e.makeScale(t, n, r), this.applyMatrix(e), this
			}
		}(),
		lookAt: function () {
			var e = new vn;
			return function (t) {
				e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
			}
		}(),
		fromBufferGeometry: function (e) {
			var t = this,
				n = null !== e.index ? e.index.array : void 0,
				r = e.attributes,
				i = r.position.array,
				a = void 0 !== r.normal ? r.normal.array : void 0,
				o = void 0 !== r.color ? r.color.array : void 0,
				s = void 0 !== r.uv ? r.uv.array : void 0,
				l = void 0 !== r.uv2 ? r.uv2.array : void 0;
			void 0 !== l && (this.faceVertexUvs[1] = []);
			for (var c = 0, u = 0; c < i.length; c += 3, u += 2) t.vertices.push((new Vt).fromArray(i, c)), void 0 !== o && t.colors.push((new sn).fromArray(o, c));

			function h(e, n, r, i) {
				var c = void 0 === o ? [] : [t.colors[e].clone(), t.colors[n].clone(), t.colors[r].clone()],
					u = new pn(e, n, r, void 0 === a ? [] : [(new Vt).fromArray(a, 3 * e), (new Vt).fromArray(a, 3 * n), (new Vt).fromArray(a, 3 * r)], c, i);
				t.faces.push(u), void 0 !== s && t.faceVertexUvs[0].push([(new jt).fromArray(s, 2 * e), (new jt).fromArray(s, 2 * n), (new jt).fromArray(s, 2 * r)]), void 0 !== l && t.faceVertexUvs[1].push([(new jt).fromArray(l, 2 * e), (new jt).fromArray(l, 2 * n), (new jt).fromArray(l, 2 * r)])
			}
			var p = e.groups;
			if (p.length > 0)
				for (c = 0; c < p.length; c++)
					for (var d = p[c], f = d.start, m = (u = f, f + d.count); u < m; u += 3) void 0 !== n ? h(n[u], n[u + 1], n[u + 2], d.materialIndex) : h(u, u + 1, u + 2, d.materialIndex);
			else if (void 0 !== n)
				for (c = 0; c < n.length; c += 3) h(n[c], n[c + 1], n[c + 2]);
			else
				for (c = 0; c < i.length / 3; c += 3) h(c, c + 1, c + 2);
			return this.computeFaceNormals(), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), this
		},
		center: function () {
			var e = new Vt;
			return function () {
				return this.computeBoundingBox(), this.boundingBox.getCenter(e).negate(), this.translate(e.x, e.y, e.z), this
			}
		}(),
		normalize: function () {
			this.computeBoundingSphere();
			var e = this.boundingSphere.center,
				t = this.boundingSphere.radius,
				n = 0 === t ? 1 : 1 / t,
				r = new Ht;
			return r.set(n, 0, 0, -n * e.x, 0, n, 0, -n * e.y, 0, 0, n, -n * e.z, 0, 0, 0, 1), this.applyMatrix(r), this
		},
		computeFaceNormals: function () {
			for (var e = new Vt, t = new Vt, n = 0, r = this.faces.length; n < r; n++) {
				var i = this.faces[n],
					a = this.vertices[i.a],
					o = this.vertices[i.b],
					s = this.vertices[i.c];
				e.subVectors(s, o), t.subVectors(a, o), e.cross(t), e.normalize(), i.normal.copy(e)
			}
		},
		computeVertexNormals: function (e) {
			var t, n, r, i, a, o;
			for (void 0 === e && (e = !0), o = new Array(this.vertices.length), t = 0, n = this.vertices.length; t < n; t++) o[t] = new Vt;
			if (e) {
				var s, l, c, u = new Vt,
					h = new Vt;
				for (r = 0, i = this.faces.length; r < i; r++) a = this.faces[r], s = this.vertices[a.a], l = this.vertices[a.b], c = this.vertices[a.c], u.subVectors(c, l), h.subVectors(s, l), u.cross(h), o[a.a].add(u), o[a.b].add(u), o[a.c].add(u)
			} else
				for (this.computeFaceNormals(), r = 0, i = this.faces.length; r < i; r++) o[(a = this.faces[r]).a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal);
			for (t = 0, n = this.vertices.length; t < n; t++) o[t].normalize();
			for (r = 0, i = this.faces.length; r < i; r++) {
				var p = (a = this.faces[r]).vertexNormals;
				3 === p.length ? (p[0].copy(o[a.a]), p[1].copy(o[a.b]), p[2].copy(o[a.c])) : (p[0] = o[a.a].clone(), p[1] = o[a.b].clone(), p[2] = o[a.c].clone())
			}
			this.faces.length > 0 && (this.normalsNeedUpdate = !0)
		},
		computeFlatVertexNormals: function () {
			var e, t, n;
			for (this.computeFaceNormals(), e = 0, t = this.faces.length; e < t; e++) {
				var r = (n = this.faces[e]).vertexNormals;
				3 === r.length ? (r[0].copy(n.normal), r[1].copy(n.normal), r[2].copy(n.normal)) : (r[0] = n.normal.clone(), r[1] = n.normal.clone(), r[2] = n.normal.clone())
			}
			this.faces.length > 0 && (this.normalsNeedUpdate = !0)
		},
		computeMorphNormals: function () {
			var e, t, n, r, i;
			for (n = 0, r = this.faces.length; n < r; n++)
				for ((i = this.faces[n]).__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(), i.__originalVertexNormals || (i.__originalVertexNormals = []), e = 0, t = i.vertexNormals.length; e < t; e++) i.__originalVertexNormals[e] ? i.__originalVertexNormals[e].copy(i.vertexNormals[e]) : i.__originalVertexNormals[e] = i.vertexNormals[e].clone();
			var a = new yn;
			for (a.faces = this.faces, e = 0, t = this.morphTargets.length; e < t; e++) {
				if (!this.morphNormals[e]) {
					this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
					var o = this.morphNormals[e].faceNormals,
						s = this.morphNormals[e].vertexNormals;
					for (n = 0, r = this.faces.length; n < r; n++) l = new Vt, c = {
						a: new Vt,
						b: new Vt,
						c: new Vt
					}, o.push(l), s.push(c)
				}
				var l, c, u = this.morphNormals[e];
				for (a.vertices = this.morphTargets[e].vertices, a.computeFaceNormals(), a.computeVertexNormals(), n = 0, r = this.faces.length; n < r; n++) i = this.faces[n], l = u.faceNormals[n], c = u.vertexNormals[n], l.copy(i.normal), c.a.copy(i.vertexNormals[0]), c.b.copy(i.vertexNormals[1]), c.c.copy(i.vertexNormals[2])
			}
			for (n = 0, r = this.faces.length; n < r; n++)(i = this.faces[n]).normal = i.__originalFaceNormal, i.vertexNormals = i.__originalVertexNormals
		},
		computeBoundingBox: function () {
			null === this.boundingBox && (this.boundingBox = new Kt), this.boundingBox.setFromPoints(this.vertices)
		},
		computeBoundingSphere: function () {
			null === this.boundingSphere && (this.boundingSphere = new en), this.boundingSphere.setFromPoints(this.vertices)
		},
		merge: function (e, t, n) {
			if (e && e.isGeometry) {
				var r, i = this.vertices.length,
					a = this.vertices,
					o = e.vertices,
					s = this.faces,
					l = e.faces,
					c = this.faceVertexUvs[0],
					u = e.faceVertexUvs[0],
					h = this.colors,
					p = e.colors;
				void 0 === n && (n = 0), void 0 !== t && (r = (new Wt).getNormalMatrix(t));
				for (var d = 0, f = o.length; d < f; d++) {
					var m = o[d].clone();
					void 0 !== t && m.applyMatrix4(t), a.push(m)
				}
				for (d = 0, f = p.length; d < f; d++) h.push(p[d].clone());
				for (d = 0, f = l.length; d < f; d++) {
					var v, g, y, x = l[d],
						b = x.vertexNormals,
						w = x.vertexColors;
					(v = new pn(x.a + i, x.b + i, x.c + i)).normal.copy(x.normal), void 0 !== r && v.normal.applyMatrix3(r).normalize();
					for (var _ = 0, M = b.length; _ < M; _++) g = b[_].clone(), void 0 !== r && g.applyMatrix3(r).normalize(), v.vertexNormals.push(g);
					v.color.copy(x.color);
					for (_ = 0, M = w.length; _ < M; _++) y = w[_], v.vertexColors.push(y.clone());
					v.materialIndex = x.materialIndex + n, s.push(v)
				}
				for (d = 0, f = u.length; d < f; d++) {
					var S = u[d],
						T = [];
					if (void 0 !== S) {
						for (_ = 0, M = S.length; _ < M; _++) T.push(S[_].clone());
						c.push(T)
					}
				}
			} else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e)
		},
		mergeMesh: function (e) {
			e && e.isMesh ? (e.matrixAutoUpdate && e.updateMatrix(), this.merge(e.geometry, e.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e)
		},
		mergeVertices: function () {
			var e, t, n, r, i, a, o, s, l = {},
				c = [],
				u = [],
				h = Math.pow(10, 4);
			for (n = 0, r = this.vertices.length; n < r; n++) e = this.vertices[n], void 0 === l[t = Math.round(e.x * h) + "_" + Math.round(e.y * h) + "_" + Math.round(e.z * h)] ? (l[t] = n, c.push(this.vertices[n]), u[n] = c.length - 1) : u[n] = u[l[t]];
			var p = [];
			for (n = 0, r = this.faces.length; n < r; n++) {
				(i = this.faces[n]).a = u[i.a], i.b = u[i.b], i.c = u[i.c], a = [i.a, i.b, i.c];
				for (var d = 0; d < 3; d++)
					if (a[d] === a[(d + 1) % 3]) {
						p.push(n);
						break
					}
			}
			for (n = p.length - 1; n >= 0; n--) {
				var f = p[n];
				for (this.faces.splice(f, 1), o = 0, s = this.faceVertexUvs.length; o < s; o++) this.faceVertexUvs[o].splice(f, 1)
			}
			var m = this.vertices.length - c.length;
			return this.vertices = c, m
		},
		setFromPoints: function (e) {
			this.vertices = [];
			for (var t = 0, n = e.length; t < n; t++) {
				var r = e[t];
				this.vertices.push(new Vt(r.x, r.y, r.z || 0))
			}
			return this
		},
		sortFacesByMaterialIndex: function () {
			for (var e = this.faces, t = e.length, n = 0; n < t; n++) e[n]._id = n;
			e.sort(function (e, t) {
				return e.materialIndex - t.materialIndex
			});
			var r, i, a = this.faceVertexUvs[0],
				o = this.faceVertexUvs[1];
			a && a.length === t && (r = []), o && o.length === t && (i = []);
			for (n = 0; n < t; n++) {
				var s = e[n]._id;
				r && r.push(a[s]), i && i.push(o[s])
			}
			r && (this.faceVertexUvs[0] = r), i && (this.faceVertexUvs[1] = i)
		},
		toJSON: function () {
			var e = {
				metadata: {
					version: 4.5,
					type: "Geometry",
					generator: "Geometry.toJSON"
				}
			};
			if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), void 0 !== this.parameters) {
				var t = this.parameters;
				for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
				return e
			}
			for (var r = [], i = 0; i < this.vertices.length; i++) {
				var a = this.vertices[i];
				r.push(a.x, a.y, a.z)
			}
			var o = [],
				s = [],
				l = {},
				c = [],
				u = {},
				h = [],
				p = {};
			for (i = 0; i < this.faces.length; i++) {
				var d = this.faces[i],
					f = void 0 !== this.faceVertexUvs[0][i],
					m = d.normal.length() > 0,
					v = d.vertexNormals.length > 0,
					g = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
					y = d.vertexColors.length > 0,
					x = 0;
				if (x = M(x = M(x = M(x = M(x = M(x = M(x = M(x = M(x, 0, 0), 1, !0), 2, !1), 3, f), 4, m), 5, v), 6, g), 7, y), o.push(x), o.push(d.a, d.b, d.c), o.push(d.materialIndex), f) {
					var b = this.faceVertexUvs[0][i];
					o.push(E(b[0]), E(b[1]), E(b[2]))
				}
				if (m && o.push(S(d.normal)), v) {
					var w = d.vertexNormals;
					o.push(S(w[0]), S(w[1]), S(w[2]))
				}
				if (g && o.push(T(d.color)), y) {
					var _ = d.vertexColors;
					o.push(T(_[0]), T(_[1]), T(_[2]))
				}
			}

			function M(e, t, n) {
				return n ? e | 1 << t : e & ~(1 << t)
			}

			function S(e) {
				var t = e.x.toString() + e.y.toString() + e.z.toString();
				return void 0 !== l[t] ? l[t] : (l[t] = s.length / 3, s.push(e.x, e.y, e.z), l[t])
			}

			function T(e) {
				var t = e.r.toString() + e.g.toString() + e.b.toString();
				return void 0 !== u[t] ? u[t] : (u[t] = c.length, c.push(e.getHex()), u[t])
			}

			function E(e) {
				var t = e.x.toString() + e.y.toString();
				return void 0 !== p[t] ? p[t] : (p[t] = h.length / 2, h.push(e.x, e.y), p[t])
			}
			return e.data = {}, e.data.vertices = r, e.data.normals = s, c.length > 0 && (e.data.colors = c), h.length > 0 && (e.data.uvs = [h]), e.data.faces = o, e
		},
		clone: function () {
			return (new yn).copy(this)
		},
		copy: function (e) {
			var t, n, r, i, a, o;
			this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
				[]
			], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
			var s = e.vertices;
			for (t = 0, n = s.length; t < n; t++) this.vertices.push(s[t].clone());
			var l = e.colors;
			for (t = 0, n = l.length; t < n; t++) this.colors.push(l[t].clone());
			var c = e.faces;
			for (t = 0, n = c.length; t < n; t++) this.faces.push(c[t].clone());
			for (t = 0, n = e.faceVertexUvs.length; t < n; t++) {
				var u = e.faceVertexUvs[t];
				for (void 0 === this.faceVertexUvs[t] && (this.faceVertexUvs[t] = []), r = 0, i = u.length; r < i; r++) {
					var h = u[r],
						p = [];
					for (a = 0, o = h.length; a < o; a++) {
						var d = h[a];
						p.push(d.clone())
					}
					this.faceVertexUvs[t].push(p)
				}
			}
			var f = e.morphTargets;
			for (t = 0, n = f.length; t < n; t++) {
				var m = {};
				if (m.name = f[t].name, void 0 !== f[t].vertices)
					for (m.vertices = [], r = 0, i = f[t].vertices.length; r < i; r++) m.vertices.push(f[t].vertices[r].clone());
				if (void 0 !== f[t].normals)
					for (m.normals = [], r = 0, i = f[t].normals.length; r < i; r++) m.normals.push(f[t].normals[r].clone());
				this.morphTargets.push(m)
			}
			var v = e.morphNormals;
			for (t = 0, n = v.length; t < n; t++) {
				var g = {};
				if (void 0 !== v[t].vertexNormals)
					for (g.vertexNormals = [], r = 0, i = v[t].vertexNormals.length; r < i; r++) {
						var y = v[t].vertexNormals[r],
							x = {};
						x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), g.vertexNormals.push(x)
					}
				if (void 0 !== v[t].faceNormals)
					for (g.faceNormals = [], r = 0, i = v[t].faceNormals.length; r < i; r++) g.faceNormals.push(v[t].faceNormals[r].clone());
				this.morphNormals.push(g)
			}
			var b = e.skinWeights;
			for (t = 0, n = b.length; t < n; t++) this.skinWeights.push(b[t].clone());
			var w = e.skinIndices;
			for (t = 0, n = w.length; t < n; t++) this.skinIndices.push(w[t].clone());
			var _ = e.lineDistances;
			for (t = 0, n = _.length; t < n; t++) this.lineDistances.push(_[t]);
			var M = e.boundingBox;
			null !== M && (this.boundingBox = M.clone());
			var S = e.boundingSphere;
			return null !== S && (this.boundingSphere = S.clone()), this.elementsNeedUpdate = e.elementsNeedUpdate, this.verticesNeedUpdate = e.verticesNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.lineDistancesNeedUpdate = e.lineDistancesNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
		},
		dispose: function () {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), Object.defineProperty(xn.prototype, "needsUpdate", {
		set: function (e) {
			!0 === e && this.version++
		}
	}), Object.assign(xn.prototype, {
		isBufferAttribute: !0,
		onUploadCallback: function () {},
		setArray: function (e) {
			if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
			return this.count = void 0 !== e ? e.length / this.itemSize : 0, this.array = e, this
		},
		setDynamic: function (e) {
			return this.dynamic = e, this
		},
		copy: function (e) {
			return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.dynamic = e.dynamic, this
		},
		copyAt: function (e, t, n) {
			e *= this.itemSize, n *= t.itemSize;
			for (var r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
			return this
		},
		copyArray: function (e) {
			return this.array.set(e), this
		},
		copyColorsArray: function (e) {
			for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
				var a = e[r];
				void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r), a = new sn), t[n++] = a.r, t[n++] = a.g, t[n++] = a.b
			}
			return this
		},
		copyVector2sArray: function (e) {
			for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
				var a = e[r];
				void 0 === a && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), a = new jt), t[n++] = a.x, t[n++] = a.y
			}
			return this
		},
		copyVector3sArray: function (e) {
			for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
				var a = e[r];
				void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r), a = new Vt), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z
			}
			return this
		},
		copyVector4sArray: function (e) {
			for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
				var a = e[r];
				void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r), a = new Jt), t[n++] = a.x, t[n++] = a.y, t[n++] = a.z, t[n++] = a.w
			}
			return this
		},
		set: function (e, t) {
			return void 0 === t && (t = 0), this.array.set(e, t), this
		},
		getX: function (e) {
			return this.array[e * this.itemSize]
		},
		setX: function (e, t) {
			return this.array[e * this.itemSize] = t, this
		},
		getY: function (e) {
			return this.array[e * this.itemSize + 1]
		},
		setY: function (e, t) {
			return this.array[e * this.itemSize + 1] = t, this
		},
		getZ: function (e) {
			return this.array[e * this.itemSize + 2]
		},
		setZ: function (e, t) {
			return this.array[e * this.itemSize + 2] = t, this
		},
		getW: function (e) {
			return this.array[e * this.itemSize + 3]
		},
		setW: function (e, t) {
			return this.array[e * this.itemSize + 3] = t, this
		},
		setXY: function (e, t, n) {
			return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this
		},
		setXYZ: function (e, t, n, r) {
			return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this
		},
		setXYZW: function (e, t, n, r, i) {
			return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this
		},
		onUpload: function (e) {
			return this.onUploadCallback = e, this
		},
		clone: function () {
			return new this.constructor(this.array, this.itemSize).copy(this)
		}
	}), bn.prototype = Object.create(xn.prototype), bn.prototype.constructor = bn, wn.prototype = Object.create(xn.prototype), wn.prototype.constructor = wn, _n.prototype = Object.create(xn.prototype), _n.prototype.constructor = _n, Mn.prototype = Object.create(xn.prototype), Mn.prototype.constructor = Mn, Sn.prototype = Object.create(xn.prototype), Sn.prototype.constructor = Sn, Tn.prototype = Object.create(xn.prototype), Tn.prototype.constructor = Tn, En.prototype = Object.create(xn.prototype), En.prototype.constructor = En, Cn.prototype = Object.create(xn.prototype), Cn.prototype.constructor = Cn, An.prototype = Object.create(xn.prototype), An.prototype.constructor = An, Object.assign(Pn.prototype, {
		computeGroups: function (e) {
			for (var t, n = [], r = void 0, i = e.faces, a = 0; a < i.length; a++) {
				var o = i[a];
				o.materialIndex !== r && (r = o.materialIndex, void 0 !== t && (t.count = 3 * a - t.start, n.push(t)), t = {
					start: 3 * a,
					materialIndex: r
				})
			}
			void 0 !== t && (t.count = 3 * a - t.start, n.push(t)), this.groups = n
		},
		fromGeometry: function (e) {
			var t, n = e.faces,
				r = e.vertices,
				i = e.faceVertexUvs,
				a = i[0] && i[0].length > 0,
				o = i[1] && i[1].length > 0,
				s = e.morphTargets,
				l = s.length;
			if (l > 0) {
				t = [];
				for (var c = 0; c < l; c++) t[c] = {
					name: s[c].name,
					data: []
				};
				this.morphTargets.position = t
			}
			var u, h = e.morphNormals,
				p = h.length;
			if (p > 0) {
				u = [];
				for (c = 0; c < p; c++) u[c] = {
					name: h[c].name,
					data: []
				};
				this.morphTargets.normal = u
			}
			var d = e.skinIndices,
				f = e.skinWeights,
				m = d.length === r.length,
				v = f.length === r.length;
			r.length > 0 && 0 === n.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
			for (c = 0; c < n.length; c++) {
				var g = n[c];
				this.vertices.push(r[g.a], r[g.b], r[g.c]);
				var y = g.vertexNormals;
				if (3 === y.length) this.normals.push(y[0], y[1], y[2]);
				else {
					var x = g.normal;
					this.normals.push(x, x, x)
				}
				var b, w = g.vertexColors;
				if (3 === w.length) this.colors.push(w[0], w[1], w[2]);
				else {
					var _ = g.color;
					this.colors.push(_, _, _)
				}
				if (!0 === a) void 0 !== (b = i[0][c]) ? this.uvs.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", c), this.uvs.push(new jt, new jt, new jt));
				if (!0 === o) void 0 !== (b = i[1][c]) ? this.uvs2.push(b[0], b[1], b[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", c), this.uvs2.push(new jt, new jt, new jt));
				for (var M = 0; M < l; M++) {
					var S = s[M].vertices;
					t[M].data.push(S[g.a], S[g.b], S[g.c])
				}
				for (M = 0; M < p; M++) {
					var T = h[M].vertexNormals[c];
					u[M].data.push(T.a, T.b, T.c)
				}
				m && this.skinIndices.push(d[g.a], d[g.b], d[g.c]), v && this.skinWeights.push(f[g.a], f[g.b], f[g.c])
			}
			return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
		}
	});
	var Rn = 1;

	function On() {
		Object.defineProperty(this, "id", {
			value: Rn += 2
		}), this.uuid = Ft.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: 1 / 0
		}, this.userData = {}
	}

	function kn(e, t, n, r, i, a) {
		yn.call(this), this.type = "BoxGeometry", this.parameters = {
			width: e,
			height: t,
			depth: n,
			widthSegments: r,
			heightSegments: i,
			depthSegments: a
		}, this.fromBufferGeometry(new In(e, t, n, r, i, a)), this.mergeVertices()
	}

	function In(e, t, n, r, i, a) {
		On.call(this), this.type = "BoxBufferGeometry", this.parameters = {
			width: e,
			height: t,
			depth: n,
			widthSegments: r,
			heightSegments: i,
			depthSegments: a
		};
		var o = this;
		e = e || 1, t = t || 1, n = n || 1, r = Math.floor(r) || 1, i = Math.floor(i) || 1;
		var s = [],
			l = [],
			c = [],
			u = [],
			h = 0,
			p = 0;

		function d(e, t, n, r, i, a, d, f, m, v, g) {
			var y, x, b = a / m,
				w = d / v,
				_ = a / 2,
				M = d / 2,
				S = f / 2,
				T = m + 1,
				E = v + 1,
				C = 0,
				A = 0,
				P = new Vt;
			for (x = 0; x < E; x++) {
				var L = x * w - M;
				for (y = 0; y < T; y++) {
					var R = y * b - _;
					P[e] = R * r, P[t] = L * i, P[n] = S, l.push(P.x, P.y, P.z), P[e] = 0, P[t] = 0, P[n] = f > 0 ? 1 : -1, c.push(P.x, P.y, P.z), u.push(y / m), u.push(1 - x / v), C += 1
				}
			}
			for (x = 0; x < v; x++)
				for (y = 0; y < m; y++) {
					var O = h + y + T * x,
						k = h + y + T * (x + 1),
						I = h + (y + 1) + T * (x + 1),
						N = h + (y + 1) + T * x;
					s.push(O, k, N), s.push(k, I, N), A += 6
				}
			o.addGroup(p, A, g), p += A, h += C
		}
		d("z", "y", "x", -1, -1, n, t, e, a = Math.floor(a) || 1, i, 0), d("z", "y", "x", 1, -1, n, t, -e, a, i, 1), d("x", "z", "y", 1, 1, e, n, t, r, a, 2), d("x", "z", "y", 1, -1, e, n, -t, r, a, 3), d("x", "y", "z", 1, -1, e, t, n, r, i, 4), d("x", "y", "z", -1, -1, e, t, -n, r, i, 5), this.setIndex(s), this.addAttribute("position", new Cn(l, 3)), this.addAttribute("normal", new Cn(c, 3)), this.addAttribute("uv", new Cn(u, 2))
	}

	function Nn(e, t, n, r) {
		yn.call(this), this.type = "PlaneGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: n,
			heightSegments: r
		}, this.fromBufferGeometry(new Dn(e, t, n, r)), this.mergeVertices()
	}

	function Dn(e, t, n, r) {
		On.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: n,
			heightSegments: r
		};
		var i, a, o = (e = e || 1) / 2,
			s = (t = t || 1) / 2,
			l = Math.floor(n) || 1,
			c = Math.floor(r) || 1,
			u = l + 1,
			h = c + 1,
			p = e / l,
			d = t / c,
			f = [],
			m = [],
			v = [],
			g = [];
		for (a = 0; a < h; a++) {
			var y = a * d - s;
			for (i = 0; i < u; i++) {
				var x = i * p - o;
				m.push(x, -y, 0), v.push(0, 0, 1), g.push(i / l), g.push(1 - a / c)
			}
		}
		for (a = 0; a < c; a++)
			for (i = 0; i < l; i++) {
				var b = i + u * a,
					w = i + u * (a + 1),
					_ = i + 1 + u * (a + 1),
					M = i + 1 + u * a;
				f.push(b, w, M), f.push(w, _, M)
			}
		this.setIndex(f), this.addAttribute("position", new Cn(m, 3)), this.addAttribute("normal", new Cn(v, 3)), this.addAttribute("uv", new Cn(g, 2))
	}
	On.prototype = Object.assign(Object.create(_.prototype), {
		constructor: On,
		isBufferGeometry: !0,
		getIndex: function () {
			return this.index
		},
		setIndex: function (e) {
			Array.isArray(e) ? this.index = new(Ln(e) > 65535 ? En : Sn)(e, 1) : this.index = e
		},
		addAttribute: function (e, t) {
			return t && t.isBufferAttribute || t && t.isInterleavedBufferAttribute ? "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t), this) : (this.attributes[e] = t, this) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(e, new xn(arguments[1], arguments[2])))
		},
		getAttribute: function (e) {
			return this.attributes[e]
		},
		removeAttribute: function (e) {
			return delete this.attributes[e], this
		},
		addGroup: function (e, t, n) {
			this.groups.push({
				start: e,
				count: t,
				materialIndex: void 0 !== n ? n : 0
			})
		},
		clearGroups: function () {
			this.groups = []
		},
		setDrawRange: function (e, t) {
			this.drawRange.start = e, this.drawRange.count = t
		},
		applyMatrix: function (e) {
			var t = this.attributes.position;
			void 0 !== t && (e.applyToBufferAttribute(t), t.needsUpdate = !0);
			var n = this.attributes.normal;
			void 0 !== n && ((new Wt).getNormalMatrix(e).applyToBufferAttribute(n), n.needsUpdate = !0);
			return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
		},
		rotateX: function () {
			var e = new Ht;
			return function (t) {
				return e.makeRotationX(t), this.applyMatrix(e), this
			}
		}(),
		rotateY: function () {
			var e = new Ht;
			return function (t) {
				return e.makeRotationY(t), this.applyMatrix(e), this
			}
		}(),
		rotateZ: function () {
			var e = new Ht;
			return function (t) {
				return e.makeRotationZ(t), this.applyMatrix(e), this
			}
		}(),
		translate: function () {
			var e = new Ht;
			return function (t, n, r) {
				return e.makeTranslation(t, n, r), this.applyMatrix(e), this
			}
		}(),
		scale: function () {
			var e = new Ht;
			return function (t, n, r) {
				return e.makeScale(t, n, r), this.applyMatrix(e), this
			}
		}(),
		lookAt: function () {
			var e = new vn;
			return function (t) {
				e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
			}
		}(),
		center: function () {
			var e = new Vt;
			return function () {
				return this.computeBoundingBox(), this.boundingBox.getCenter(e).negate(), this.translate(e.x, e.y, e.z), this
			}
		}(),
		setFromObject: function (e) {
			var t = e.geometry;
			if (e.isPoints || e.isLine) {
				var n = new Cn(3 * t.vertices.length, 3),
					r = new Cn(3 * t.colors.length, 3);
				if (this.addAttribute("position", n.copyVector3sArray(t.vertices)), this.addAttribute("color", r.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length) {
					var i = new Cn(t.lineDistances.length, 1);
					this.addAttribute("lineDistance", i.copyArray(t.lineDistances))
				}
				null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
			} else e.isMesh && t && t.isGeometry && this.fromGeometry(t);
			return this
		},
		setFromPoints: function (e) {
			for (var t = [], n = 0, r = e.length; n < r; n++) {
				var i = e[n];
				t.push(i.x, i.y, i.z || 0)
			}
			return this.addAttribute("position", new Cn(t, 3)), this
		},
		updateFromObject: function (e) {
			var t, n = e.geometry;
			if (e.isMesh) {
				var r = n.__directGeometry;
				if (!0 === n.elementsNeedUpdate && (r = void 0, n.elementsNeedUpdate = !1), void 0 === r) return this.fromGeometry(n);
				r.verticesNeedUpdate = n.verticesNeedUpdate, r.normalsNeedUpdate = n.normalsNeedUpdate, r.colorsNeedUpdate = n.colorsNeedUpdate, r.uvsNeedUpdate = n.uvsNeedUpdate, r.groupsNeedUpdate = n.groupsNeedUpdate, n.verticesNeedUpdate = !1, n.normalsNeedUpdate = !1, n.colorsNeedUpdate = !1, n.uvsNeedUpdate = !1, n.groupsNeedUpdate = !1, n = r
			}
			return !0 === n.verticesNeedUpdate && (void 0 !== (t = this.attributes.position) && (t.copyVector3sArray(n.vertices), t.needsUpdate = !0), n.verticesNeedUpdate = !1), !0 === n.normalsNeedUpdate && (void 0 !== (t = this.attributes.normal) && (t.copyVector3sArray(n.normals), t.needsUpdate = !0), n.normalsNeedUpdate = !1), !0 === n.colorsNeedUpdate && (void 0 !== (t = this.attributes.color) && (t.copyColorsArray(n.colors), t.needsUpdate = !0), n.colorsNeedUpdate = !1), n.uvsNeedUpdate && (void 0 !== (t = this.attributes.uv) && (t.copyVector2sArray(n.uvs), t.needsUpdate = !0), n.uvsNeedUpdate = !1), n.lineDistancesNeedUpdate && (void 0 !== (t = this.attributes.lineDistance) && (t.copyArray(n.lineDistances), t.needsUpdate = !0), n.lineDistancesNeedUpdate = !1), n.groupsNeedUpdate && (n.computeGroups(e.geometry), this.groups = n.groups, n.groupsNeedUpdate = !1), this
		},
		fromGeometry: function (e) {
			return e.__directGeometry = (new Pn).fromGeometry(e), this.fromDirectGeometry(e.__directGeometry)
		},
		fromDirectGeometry: function (e) {
			var t = new Float32Array(3 * e.vertices.length);
			if (this.addAttribute("position", new xn(t, 3).copyVector3sArray(e.vertices)), e.normals.length > 0) {
				var n = new Float32Array(3 * e.normals.length);
				this.addAttribute("normal", new xn(n, 3).copyVector3sArray(e.normals))
			}
			if (e.colors.length > 0) {
				var r = new Float32Array(3 * e.colors.length);
				this.addAttribute("color", new xn(r, 3).copyColorsArray(e.colors))
			}
			if (e.uvs.length > 0) {
				var i = new Float32Array(2 * e.uvs.length);
				this.addAttribute("uv", new xn(i, 2).copyVector2sArray(e.uvs))
			}
			if (e.uvs2.length > 0) {
				var a = new Float32Array(2 * e.uvs2.length);
				this.addAttribute("uv2", new xn(a, 2).copyVector2sArray(e.uvs2))
			}
			for (var o in this.groups = e.groups, e.morphTargets) {
				for (var s = [], l = e.morphTargets[o], c = 0, u = l.length; c < u; c++) {
					var h = l[c],
						p = new Cn(3 * h.data.length, 3);
					p.name = h.name, s.push(p.copyVector3sArray(h.data))
				}
				this.morphAttributes[o] = s
			}
			if (e.skinIndices.length > 0) {
				var d = new Cn(4 * e.skinIndices.length, 4);
				this.addAttribute("skinIndex", d.copyVector4sArray(e.skinIndices))
			}
			if (e.skinWeights.length > 0) {
				var f = new Cn(4 * e.skinWeights.length, 4);
				this.addAttribute("skinWeight", f.copyVector4sArray(e.skinWeights))
			}
			return null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), this
		},
		computeBoundingBox: function () {
			null === this.boundingBox && (this.boundingBox = new Kt);
			var e = this.attributes.position;
			void 0 !== e ? this.boundingBox.setFromBufferAttribute(e) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
		},
		computeBoundingSphere: function () {
			var e = new Kt,
				t = new Vt;
			return function () {
				null === this.boundingSphere && (this.boundingSphere = new en);
				var n = this.attributes.position;
				if (n) {
					var r = this.boundingSphere.center;
					e.setFromBufferAttribute(n), e.getCenter(r);
					for (var i = 0, a = 0, o = n.count; a < o; a++) t.x = n.getX(a), t.y = n.getY(a), t.z = n.getZ(a), i = Math.max(i, r.distanceToSquared(t));
					this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
				}
			}
		}(),
		computeFaceNormals: function () {},
		computeVertexNormals: function () {
			var e = this.index,
				t = this.attributes;
			if (t.position) {
				var n = t.position.array;
				if (void 0 === t.normal) this.addAttribute("normal", new xn(new Float32Array(n.length), 3));
				else
					for (var r = t.normal.array, i = 0, a = r.length; i < a; i++) r[i] = 0;
				var o, s, l, c = t.normal.array,
					u = new Vt,
					h = new Vt,
					p = new Vt,
					d = new Vt,
					f = new Vt;
				if (e) {
					var m = e.array;
					for (i = 0, a = e.count; i < a; i += 3) o = 3 * m[i + 0], s = 3 * m[i + 1], l = 3 * m[i + 2], u.fromArray(n, o), h.fromArray(n, s), p.fromArray(n, l), d.subVectors(p, h), f.subVectors(u, h), d.cross(f), c[o] += d.x, c[o + 1] += d.y, c[o + 2] += d.z, c[s] += d.x, c[s + 1] += d.y, c[s + 2] += d.z, c[l] += d.x, c[l + 1] += d.y, c[l + 2] += d.z
				} else
					for (i = 0, a = n.length; i < a; i += 9) u.fromArray(n, i), h.fromArray(n, i + 3), p.fromArray(n, i + 6), d.subVectors(p, h), f.subVectors(u, h), d.cross(f), c[i] = d.x, c[i + 1] = d.y, c[i + 2] = d.z, c[i + 3] = d.x, c[i + 4] = d.y, c[i + 5] = d.z, c[i + 6] = d.x, c[i + 7] = d.y, c[i + 8] = d.z;
				this.normalizeNormals(), t.normal.needsUpdate = !0
			}
		},
		merge: function (e, t) {
			if (e && e.isBufferGeometry) {
				void 0 === t && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
				var n = this.attributes;
				for (var r in n)
					if (void 0 !== e.attributes[r])
						for (var i = n[r].array, a = e.attributes[r], o = a.array, s = 0, l = a.itemSize * t; s < o.length; s++, l++) i[l] = o[s];
				return this
			}
			console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e)
		},
		normalizeNormals: function () {
			var e = new Vt;
			return function () {
				for (var t = this.attributes.normal, n = 0, r = t.count; n < r; n++) e.x = t.getX(n), e.y = t.getY(n), e.z = t.getZ(n), e.normalize(), t.setXYZ(n, e.x, e.y, e.z)
			}
		}(),
		toNonIndexed: function () {
			if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
			var e = new On,
				t = this.index.array,
				n = this.attributes;
			for (var r in n) {
				for (var i = n[r], a = i.array, o = i.itemSize, s = new a.constructor(t.length * o), l = 0, c = 0, u = 0, h = t.length; u < h; u++) {
					l = t[u] * o;
					for (var p = 0; p < o; p++) s[c++] = a[l++]
				}
				e.addAttribute(r, new xn(s, o))
			}
			var d = this.groups;
			for (u = 0, h = d.length; u < h; u++) {
				var f = d[u];
				e.addGroup(f.start, f.count, f.materialIndex)
			}
			return e
		},
		toJSON: function () {
			var e = {
				metadata: {
					version: 4.5,
					type: "BufferGeometry",
					generator: "BufferGeometry.toJSON"
				}
			};
			if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), void 0 !== this.parameters) {
				var t = this.parameters;
				for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
				return e
			}
			e.data = {
				attributes: {}
			};
			var r = this.index;
			if (null !== r) {
				var i = Array.prototype.slice.call(r.array);
				e.data.index = {
					type: r.array.constructor.name,
					array: i
				}
			}
			var a = this.attributes;
			for (var n in a) {
				var o = a[n];
				i = Array.prototype.slice.call(o.array);
				e.data.attributes[n] = {
					itemSize: o.itemSize,
					type: o.array.constructor.name,
					array: i,
					normalized: o.normalized
				}
			}
			var s = this.groups;
			s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
			var l = this.boundingSphere;
			return null !== l && (e.data.boundingSphere = {
				center: l.center.toArray(),
				radius: l.radius
			}), e
		},
		clone: function () {
			return (new On).copy(this)
		},
		copy: function (e) {
			var t, n, r;
			this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = e.name;
			var i = e.index;
			null !== i && this.setIndex(i.clone());
			var a = e.attributes;
			for (t in a) {
				var o = a[t];
				this.addAttribute(t, o.clone())
			}
			var s = e.morphAttributes;
			for (t in s) {
				var l = [],
					c = s[t];
				for (n = 0, r = c.length; n < r; n++) l.push(c[n].clone());
				this.morphAttributes[t] = l
			}
			var u = e.groups;
			for (n = 0, r = u.length; n < r; n++) {
				var h = u[n];
				this.addGroup(h.start, h.count, h.materialIndex)
			}
			var p = e.boundingBox;
			null !== p && (this.boundingBox = p.clone());
			var d = e.boundingSphere;
			return null !== d && (this.boundingSphere = d.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this
		},
		dispose: function () {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), kn.prototype = Object.create(yn.prototype), kn.prototype.constructor = kn, In.prototype = Object.create(On.prototype), In.prototype.constructor = In, Nn.prototype = Object.create(yn.prototype), Nn.prototype.constructor = Nn, Dn.prototype = Object.create(On.prototype), Dn.prototype.constructor = Dn;
	var zn = 0;

	function Un() {
		Object.defineProperty(this, "id", {
			value: zn++
		}), this.uuid = Ft.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = D, this.side = P, this.flatShading = !1, this.vertexColors = O, this.opacity = 1, this.transparent = !1, this.blendSrc = Z, this.blendDst = $, this.blendEquation = j, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = oe, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.userData = {}, this.needsUpdate = !0
	}

	function Bn(e) {
		Un.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
			derivatives: !1,
			fragDepth: !1,
			drawBuffers: !1,
			shaderTextureLOD: !1
		}, this.defaultAttributeValues = {
			color: [1, 1, 1],
			uv: [0, 0],
			uv2: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
	}

	function Fn(e, t) {
		this.origin = void 0 !== e ? e : new Vt, this.direction = void 0 !== t ? t : new Vt
	}

	function jn(e, t, n) {
		this.a = void 0 !== e ? e : new Vt, this.b = void 0 !== t ? t : new Vt, this.c = void 0 !== n ? n : new Vt
	}

	function Hn(e) {
		Un.call(this), this.type = "MeshBasicMaterial", this.color = new sn(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = he, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(e)
	}

	function Gn(e, t) {
		vn.call(this), this.type = "Mesh", this.geometry = void 0 !== e ? e : new On, this.material = void 0 !== t ? t : new Hn({
			color: 16777215 * Math.random()
		}), this.drawMode = Et, this.updateMorphTargets()
	}

	function Vn(e, t) {
		return Math.abs(t[1]) - Math.abs(e[1])
	}

	function Wn(e, t, n, r, i, a, o, s, l, c) {
		e = void 0 !== e ? e : [], t = void 0 !== t ? t : xe, Yt.call(this, e, t, n, r, i, a, o, s, l, c), this.flipY = !1
	}

	function qn(e, t, n, r) {
		Yt.call(this, null), this.image = {
			data: e,
			width: t,
			height: n,
			depth: r
		}, this.magFilter = Pe, this.minFilter = Pe, this.generateMipmaps = !1, this.flipY = !1
	}
	Un.prototype = Object.assign(Object.create(_.prototype), {
		constructor: Un,
		isMaterial: !0,
		onBeforeCompile: function () {},
		setValues: function (e) {
			if (void 0 !== e)
				for (var t in e) {
					var n = e[t];
					if (void 0 !== n)
						if ("shading" !== t) {
							var r = this[t];
							void 0 !== r ? r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
						} else console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n;
					else console.warn("THREE.Material: '" + t + "' parameter is undefined.")
				}
		},
		toJSON: function (e) {
			var t = void 0 === e || "string" == typeof e;
			t && (e = {
				textures: {},
				images: {}
			});
			var n = {
				metadata: {
					version: 4.5,
					type: "Material",
					generator: "Material.toJSON"
				}
			};

			function r(e) {
				var t = [];
				for (var n in e) {
					var r = e[n];
					delete r.metadata, t.push(r)
				}
				return t
			}
			if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearCoat && (n.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (n.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, n.reflectivity = this.reflectivity, void 0 !== this.combine && (n.combine = this.combine), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== D && (n.blending = this.blending), !0 === this.flatShading && (n.flatShading = this.flatShading), this.side !== P && (n.side = this.side), this.vertexColors !== O && (n.vertexColors = this.vertexColors), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.skinning && (n.skinning = !0), !1 === this.visible && (n.visible = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), t) {
				var i = r(e.textures),
					a = r(e.images);
				i.length > 0 && (n.textures = i), a.length > 0 && (n.images = a)
			}
			return n
		},
		clone: function () {
			return (new this.constructor).copy(this)
		},
		copy: function (e) {
			this.name = e.name, this.fog = e.fog, this.lights = e.lights, this.blending = e.blending, this.side = e.side, this.flatShading = e.flatShading, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.userData = JSON.parse(JSON.stringify(e.userData)), this.clipShadows = e.clipShadows, this.clipIntersection = e.clipIntersection;
			var t = e.clippingPlanes,
				n = null;
			if (null !== t) {
				var r = t.length;
				n = new Array(r);
				for (var i = 0; i !== r; ++i) n[i] = t[i].clone()
			}
			return this.clippingPlanes = n, this.shadowSide = e.shadowSide, this
		},
		dispose: function () {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), Bn.prototype = Object.create(Un.prototype), Bn.prototype.constructor = Bn, Bn.prototype.isShaderMaterial = !0, Bn.prototype.copy = function (e) {
		return Un.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = an.clone(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.extensions = e.extensions, this
	}, Bn.prototype.toJSON = function (e) {
		var t = Un.prototype.toJSON.call(this, e);
		for (var n in t.uniforms = {}, this.uniforms) {
			var r = this.uniforms[n].value;
			r.isTexture ? t.uniforms[n] = {
				type: "t",
				value: r.toJSON(e).uuid
			} : r.isColor ? t.uniforms[n] = {
				type: "c",
				value: r.getHex()
			} : r.isVector2 ? t.uniforms[n] = {
				type: "v2",
				value: r.toArray()
			} : r.isVector3 ? t.uniforms[n] = {
				type: "v3",
				value: r.toArray()
			} : r.isVector4 ? t.uniforms[n] = {
				type: "v4",
				value: r.toArray()
			} : r.isMatrix4 ? t.uniforms[n] = {
				type: "m4",
				value: r.toArray()
			} : t.uniforms[n] = {
				value: r
			}
		}
		return Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t
	}, Object.assign(Fn.prototype, {
		set: function (e, t) {
			return this.origin.copy(e), this.direction.copy(t), this
		},
		clone: function () {
			return (new this.constructor).copy(this)
		},
		copy: function (e) {
			return this.origin.copy(e.origin), this.direction.copy(e.direction), this
		},
		at: function (e, t) {
			return void 0 === t && (console.warn("THREE.Ray: .at() target is now required"), t = new Vt), t.copy(this.direction).multiplyScalar(e).add(this.origin)
		},
		lookAt: function (e) {
			return this.direction.copy(e).sub(this.origin).normalize(), this
		},
		recast: function () {
			var e = new Vt;
			return function (t) {
				return this.origin.copy(this.at(t, e)), this
			}
		}(),
		closestPointToPoint: function (e, t) {
			void 0 === t && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), t = new Vt), t.subVectors(e, this.origin);
			var n = t.dot(this.direction);
			return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin)
		},
		distanceToPoint: function (e) {
			return Math.sqrt(this.distanceSqToPoint(e))
		},
		distanceSqToPoint: function () {
			var e = new Vt;
			return function (t) {
				var n = e.subVectors(t, this.origin).dot(this.direction);
				return n < 0 ? this.origin.distanceToSquared(t) : (e.copy(this.direction).multiplyScalar(n).add(this.origin), e.distanceToSquared(t))
			}
		}(),
		distanceSqToSegment: function () {
			var e = new Vt,
				t = new Vt,
				n = new Vt;
			return function (r, i, a, o) {
				e.copy(r).add(i).multiplyScalar(.5), t.copy(i).sub(r).normalize(), n.copy(this.origin).sub(e);
				var s, l, c, u, h = .5 * r.distanceTo(i),
					p = -this.direction.dot(t),
					d = n.dot(this.direction),
					f = -n.dot(t),
					m = n.lengthSq(),
					v = Math.abs(1 - p * p);
				if (v > 0)
					if (l = p * d - f, u = h * v, (s = p * f - d) >= 0)
						if (l >= -u)
							if (l <= u) {
								var g = 1 / v;
								c = (s *= g) * (s + p * (l *= g) + 2 * d) + l * (p * s + l + 2 * f) + m
							} else l = h, c = -(s = Math.max(0, -(p * l + d))) * s + l * (l + 2 * f) + m;
				else l = -h, c = -(s = Math.max(0, -(p * l + d))) * s + l * (l + 2 * f) + m;
				else l <= -u ? c = -(s = Math.max(0, -(-p * h + d))) * s + (l = s > 0 ? -h : Math.min(Math.max(-h, -f), h)) * (l + 2 * f) + m : l <= u ? (s = 0, c = (l = Math.min(Math.max(-h, -f), h)) * (l + 2 * f) + m) : c = -(s = Math.max(0, -(p * h + d))) * s + (l = s > 0 ? h : Math.min(Math.max(-h, -f), h)) * (l + 2 * f) + m;
				else l = p > 0 ? -h : h, c = -(s = Math.max(0, -(p * l + d))) * s + l * (l + 2 * f) + m;
				return a && a.copy(this.direction).multiplyScalar(s).add(this.origin), o && o.copy(t).multiplyScalar(l).add(e), c
			}
		}(),
		intersectSphere: function () {
			var e = new Vt;
			return function (t, n) {
				e.subVectors(t.center, this.origin);
				var r = e.dot(this.direction),
					i = e.dot(e) - r * r,
					a = t.radius * t.radius;
				if (i > a) return null;
				var o = Math.sqrt(a - i),
					s = r - o,
					l = r + o;
				return s < 0 && l < 0 ? null : s < 0 ? this.at(l, n) : this.at(s, n)
			}
		}(),
		intersectsSphere: function (e) {
			return this.distanceSqToPoint(e.center) <= e.radius * e.radius
		},
		distanceToPlane: function (e) {
			var t = e.normal.dot(this.direction);
			if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
			var n = -(this.origin.dot(e.normal) + e.constant) / t;
			return n >= 0 ? n : null
		},
		intersectPlane: function (e, t) {
			var n = this.distanceToPlane(e);
			return null === n ? null : this.at(n, t)
		},
		intersectsPlane: function (e) {
			var t = e.distanceToPoint(this.origin);
			return 0 === t || e.normal.dot(this.direction) * t < 0
		},
		intersectBox: function (e, t) {
			var n, r, i, a, o, s, l = 1 / this.direction.x,
				c = 1 / this.direction.y,
				u = 1 / this.direction.z,
				h = this.origin;
			return l >= 0 ? (n = (e.min.x - h.x) * l, r = (e.max.x - h.x) * l) : (n = (e.max.x - h.x) * l, r = (e.min.x - h.x) * l), c >= 0 ? (i = (e.min.y - h.y) * c, a = (e.max.y - h.y) * c) : (i = (e.max.y - h.y) * c, a = (e.min.y - h.y) * c), n > a || i > r ? null : ((i > n || n != n) && (n = i), (a < r || r != r) && (r = a), u >= 0 ? (o = (e.min.z - h.z) * u, s = (e.max.z - h.z) * u) : (o = (e.max.z - h.z) * u, s = (e.min.z - h.z) * u), n > s || o > r ? null : ((o > n || n != n) && (n = o), (s < r || r != r) && (r = s), r < 0 ? null : this.at(n >= 0 ? n : r, t)))
		},
		intersectsBox: function () {
			var e = new Vt;
			return function (t) {
				return null !== this.intersectBox(t, e)
			}
		}(),
		intersectTriangle: function () {
			var e = new Vt,
				t = new Vt,
				n = new Vt,
				r = new Vt;
			return function (i, a, o, s, l) {
				t.subVectors(a, i), n.subVectors(o, i), r.crossVectors(t, n);
				var c, u = this.direction.dot(r);
				if (u > 0) {
					if (s) return null;
					c = 1
				} else {
					if (!(u < 0)) return null;
					c = -1, u = -u
				}
				e.subVectors(this.origin, i);
				var h = c * this.direction.dot(n.crossVectors(e, n));
				if (h < 0) return null;
				var p = c * this.direction.dot(t.cross(e));
				if (p < 0) return null;
				if (h + p > u) return null;
				var d = -c * e.dot(r);
				return d < 0 ? null : this.at(d / u, l)
			}
		}(),
		applyMatrix4: function (e) {
			return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
		},
		equals: function (e) {
			return e.origin.equals(this.origin) && e.direction.equals(this.direction)
		}
	}), Object.assign(jn, {
		getNormal: function () {
			var e = new Vt;
			return function (t, n, r, i) {
				void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new Vt), i.subVectors(r, n), e.subVectors(t, n), i.cross(e);
				var a = i.lengthSq();
				return a > 0 ? i.multiplyScalar(1 / Math.sqrt(a)) : i.set(0, 0, 0)
			}
		}(),
		getBarycoord: function () {
			var e = new Vt,
				t = new Vt,
				n = new Vt;
			return function (r, i, a, o, s) {
				e.subVectors(o, i), t.subVectors(a, i), n.subVectors(r, i);
				var l = e.dot(e),
					c = e.dot(t),
					u = e.dot(n),
					h = t.dot(t),
					p = t.dot(n),
					d = l * h - c * c;
				if (void 0 === s && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), s = new Vt), 0 === d) return s.set(-2, -1, -1);
				var f = 1 / d,
					m = (h * u - c * p) * f,
					v = (l * p - c * u) * f;
				return s.set(1 - m - v, v, m)
			}
		}(),
		containsPoint: function () {
			var e = new Vt;
			return function (t, n, r, i) {
				return jn.getBarycoord(t, n, r, i, e), e.x >= 0 && e.y >= 0 && e.x + e.y <= 1
			}
		}(),
		getUV: function () {
			var e = new Vt;
			return function (t, n, r, i, a, o, s, l) {
				return this.getBarycoord(t, n, r, i, e), l.set(0, 0), l.addScaledVector(a, e.x), l.addScaledVector(o, e.y), l.addScaledVector(s, e.z), l
			}
		}()
	}), Object.assign(jn.prototype, {
		set: function (e, t, n) {
			return this.a.copy(e), this.b.copy(t), this.c.copy(n), this
		},
		setFromPointsAndIndices: function (e, t, n, r) {
			return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this
		},
		clone: function () {
			return (new this.constructor).copy(this)
		},
		copy: function (e) {
			return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
		},
		getArea: function () {
			var e = new Vt,
				t = new Vt;
			return function () {
				return e.subVectors(this.c, this.b), t.subVectors(this.a, this.b), .5 * e.cross(t).length()
			}
		}(),
		getMidpoint: function (e) {
			return void 0 === e && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), e = new Vt), e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
		},
		getNormal: function (e) {
			return jn.getNormal(this.a, this.b, this.c, e)
		},
		getPlane: function (e) {
			return void 0 === e && (console.warn("THREE.Triangle: .getPlane() target is now required"), e = new Vt), e.setFromCoplanarPoints(this.a, this.b, this.c)
		},
		getBarycoord: function (e, t) {
			return jn.getBarycoord(e, this.a, this.b, this.c, t)
		},
		containsPoint: function (e) {
			return jn.containsPoint(e, this.a, this.b, this.c)
		},
		getUV: function (e, t, n, r, i) {
			return jn.getUV(e, this.a, this.b, this.c, t, n, r, i)
		},
		intersectsBox: function (e) {
			return e.intersectsTriangle(this)
		},
		closestPointToPoint: function () {
			var e = new Vt,
				t = new Vt,
				n = new Vt,
				r = new Vt,
				i = new Vt,
				a = new Vt;
			return function (o, s) {
				void 0 === s && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), s = new Vt);
				var l, c, u = this.a,
					h = this.b,
					p = this.c;
				e.subVectors(h, u), t.subVectors(p, u), r.subVectors(o, u);
				var d = e.dot(r),
					f = t.dot(r);
				if (d <= 0 && f <= 0) return s.copy(u);
				i.subVectors(o, h);
				var m = e.dot(i),
					v = t.dot(i);
				if (m >= 0 && v <= m) return s.copy(h);
				var g = d * v - m * f;
				if (g <= 0 && d >= 0 && m <= 0) return l = d / (d - m), s.copy(u).addScaledVector(e, l);
				a.subVectors(o, p);
				var y = e.dot(a),
					x = t.dot(a);
				if (x >= 0 && y <= x) return s.copy(p);
				var b = y * f - d * x;
				if (b <= 0 && f >= 0 && x <= 0) return c = f / (f - x), s.copy(u).addScaledVector(t, c);
				var w = m * x - y * v;
				if (w <= 0 && v - m >= 0 && y - x >= 0) return n.subVectors(p, h), c = (v - m) / (v - m + (y - x)), s.copy(h).addScaledVector(n, c);
				var _ = 1 / (w + b + g);
				return l = b * _, c = g * _, s.copy(u).addScaledVector(e, l).addScaledVector(t, c)
			}
		}(),
		equals: function (e) {
			return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
		}
	}), Hn.prototype = Object.create(Un.prototype), Hn.prototype.constructor = Hn, Hn.prototype.isMeshBasicMaterial = !0, Hn.prototype.copy = function (e) {
		return Un.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this
	}, Gn.prototype = Object.assign(Object.create(vn.prototype), {
		constructor: Gn,
		isMesh: !0,
		setDrawMode: function (e) {
			this.drawMode = e
		},
		copy: function (e) {
			return vn.prototype.copy.call(this, e), this.drawMode = e.drawMode, void 0 !== e.morphTargetInfluences && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), void 0 !== e.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this
		},
		updateMorphTargets: function () {
			var e, t, n, r = this.geometry;
			if (r.isBufferGeometry) {
				var i = r.morphAttributes,
					a = Object.keys(i);
				if (a.length > 0) {
					var o = i[a[0]];
					if (void 0 !== o)
						for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, e = 0, t = o.length; e < t; e++) n = o[e].name || String(e), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
				}
			} else {
				var s = r.morphTargets;
				if (void 0 !== s && s.length > 0)
					for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, e = 0, t = s.length; e < t; e++) n = s[e].name || String(e), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
			}
		},
		raycast: function () {
			var e = new Ht,
				t = new Fn,
				n = new en,
				r = new Vt,
				i = new Vt,
				a = new Vt,
				o = new Vt,
				s = new Vt,
				l = new Vt,
				c = new jt,
				u = new jt,
				h = new jt,
				p = new Vt,
				d = new Vt;

			function f(e, t, n, r, i, a, o, s) {
				if (null === (t.side === L ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, t.side !== R, s))) return null;
				d.copy(s), d.applyMatrix4(e.matrixWorld);
				var l = n.ray.origin.distanceTo(d);
				return l < n.near || l > n.far ? null : {
					distance: l,
					point: d.clone(),
					object: e
				}
			}

			function m(e, t, n, o, s, l, d, m, v) {
				r.fromBufferAttribute(s, d), i.fromBufferAttribute(s, m), a.fromBufferAttribute(s, v);
				var g = f(e, t, n, o, r, i, a, p);
				if (g) {
					l && (c.fromBufferAttribute(l, d), u.fromBufferAttribute(l, m), h.fromBufferAttribute(l, v), g.uv = jn.getUV(p, r, i, a, c, u, h, new jt));
					var y = new pn(d, m, v);
					jn.getNormal(r, i, a, y.normal), g.face = y
				}
				return g
			}
			return function (d, v) {
				var g, y = this.geometry,
					x = this.material,
					b = this.matrixWorld;
				if (void 0 !== x && (null === y.boundingSphere && y.computeBoundingSphere(), n.copy(y.boundingSphere), n.applyMatrix4(b), !1 !== d.ray.intersectsSphere(n) && (e.getInverse(b), t.copy(d.ray).applyMatrix4(e), null === y.boundingBox || !1 !== t.intersectsBox(y.boundingBox))))
					if (y.isBufferGeometry) {
						var w, _, M, S, T, E, C, A, P, L = y.index,
							R = y.attributes.position,
							O = y.attributes.uv,
							k = y.groups,
							I = y.drawRange;
						if (null !== L)
							if (Array.isArray(x))
								for (S = 0, E = k.length; S < E; S++)
									for (P = x[(A = k[S]).materialIndex], T = Math.max(A.start, I.start), C = Math.min(A.start + A.count, I.start + I.count); T < C; T += 3) w = L.getX(T), _ = L.getX(T + 1), M = L.getX(T + 2), (g = m(this, P, d, t, R, O, w, _, M)) && (g.faceIndex = Math.floor(T / 3), v.push(g));
							else
								for (S = Math.max(0, I.start), E = Math.min(L.count, I.start + I.count); S < E; S += 3) w = L.getX(S), _ = L.getX(S + 1), M = L.getX(S + 2), (g = m(this, x, d, t, R, O, w, _, M)) && (g.faceIndex = Math.floor(S / 3), v.push(g));
						else if (void 0 !== R)
							if (Array.isArray(x))
								for (S = 0, E = k.length; S < E; S++)
									for (P = x[(A = k[S]).materialIndex], T = Math.max(A.start, I.start), C = Math.min(A.start + A.count, I.start + I.count); T < C; T += 3)(g = m(this, P, d, t, R, O, w = T, _ = T + 1, M = T + 2)) && (g.faceIndex = Math.floor(T / 3), v.push(g));
							else
								for (S = Math.max(0, I.start), E = Math.min(R.count, I.start + I.count); S < E; S += 3)(g = m(this, x, d, t, R, O, w = S, _ = S + 1, M = S + 2)) && (g.faceIndex = Math.floor(S / 3), v.push(g))
					} else if (y.isGeometry) {
					var N, D, z, U, B = Array.isArray(x),
						F = y.vertices,
						j = y.faces,
						H = y.faceVertexUvs[0];
					H.length > 0 && (U = H);
					for (var G = 0, V = j.length; G < V; G++) {
						var W = j[G],
							q = B ? x[W.materialIndex] : x;
						if (void 0 !== q) {
							if (N = F[W.a], D = F[W.b], z = F[W.c], !0 === q.morphTargets) {
								var X = y.morphTargets,
									Y = this.morphTargetInfluences;
								r.set(0, 0, 0), i.set(0, 0, 0), a.set(0, 0, 0);
								for (var J = 0, Z = X.length; J < Z; J++) {
									var $ = Y[J];
									if (0 !== $) {
										var Q = X[J].vertices;
										r.addScaledVector(o.subVectors(Q[W.a], N), $), i.addScaledVector(s.subVectors(Q[W.b], D), $), a.addScaledVector(l.subVectors(Q[W.c], z), $)
									}
								}
								r.add(N), i.add(D), a.add(z), N = r, D = i, z = a
							}
							if (g = f(this, q, d, t, N, D, z, p)) {
								if (U && U[G]) {
									var K = U[G];
									c.copy(K[0]), u.copy(K[1]), h.copy(K[2]), g.uv = jn.getUV(p, N, D, z, c, u, h, new jt)
								}
								g.face = W, g.faceIndex = G, v.push(g)
							}
						}
					}
				}
			}
		}(),
		clone: function () {
			return new this.constructor(this.geometry, this.material).copy(this)
		}
	}), Wn.prototype = Object.create(Yt.prototype), Wn.prototype.constructor = Wn, Wn.prototype.isCubeTexture = !0, Object.defineProperty(Wn.prototype, "images", {
		get: function () {
			return this.image
		},
		set: function (e) {
			this.image = e
		}
	}), qn.prototype = Object.create(Yt.prototype), qn.prototype.constructor = qn, qn.prototype.isDataTexture3D = !0;
	var Xn = new Yt,
		Yn = new qn,
		Jn = new Wn;

	function Zn() {
		this.seq = [], this.map = {}
	}
	var $n = [],
		Qn = [],
		Kn = new Float32Array(16),
		er = new Float32Array(9),
		tr = new Float32Array(4);

	function nr(e, t, n) {
		var r = e[0];
		if (r <= 0 || r > 0) return e;
		var i = t * n,
			a = $n[i];
		if (void 0 === a && (a = new Float32Array(i), $n[i] = a), 0 !== t) {
			r.toArray(a, 0);
			for (var o = 1, s = 0; o !== t; ++o) s += n, e[o].toArray(a, s)
		}
		return a
	}

	function rr(e, t) {
		if (e.length !== t.length) return !1;
		for (var n = 0, r = e.length; n < r; n++)
			if (e[n] !== t[n]) return !1;
		return !0
	}

	function ir(e, t) {
		for (var n = 0, r = t.length; n < r; n++) e[n] = t[n]
	}

	function ar(e, t) {
		var n = Qn[t];
		void 0 === n && (n = new Int32Array(t), Qn[t] = n);
		for (var r = 0; r !== t; ++r) n[r] = e.allocTextureUnit();
		return n
	}

	function or(e, t) {
		var n = this.cache;
		n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t)
	}

	function sr(e, t) {
		var n = this.cache;
		n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t)
	}

	function lr(e, t) {
		var n = this.cache;
		if (void 0 !== t.x) n[0] === t.x && n[1] === t.y || (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
		else {
			if (rr(n, t)) return;
			e.uniform2fv(this.addr, t), ir(n, t)
		}
	}

	function cr(e, t) {
		var n = this.cache;
		if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z || (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
		else if (void 0 !== t.r) n[0] === t.r && n[1] === t.g && n[2] === t.b || (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
		else {
			if (rr(n, t)) return;
			e.uniform3fv(this.addr, t), ir(n, t)
		}
	}

	function ur(e, t) {
		var n = this.cache;
		if (void 0 !== t.x) n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w || (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
		else {
			if (rr(n, t)) return;
			e.uniform4fv(this.addr, t), ir(n, t)
		}
	}

	function hr(e, t) {
		var n = this.cache,
			r = t.elements;
		if (void 0 === r) {
			if (rr(n, t)) return;
			e.uniformMatrix2fv(this.addr, !1, t), ir(n, t)
		} else {
			if (rr(n, r)) return;
			tr.set(r), e.uniformMatrix2fv(this.addr, !1, tr), ir(n, r)
		}
	}

	function pr(e, t) {
		var n = this.cache,
			r = t.elements;
		if (void 0 === r) {
			if (rr(n, t)) return;
			e.uniformMatrix3fv(this.addr, !1, t), ir(n, t)
		} else {
			if (rr(n, r)) return;
			er.set(r), e.uniformMatrix3fv(this.addr, !1, er), ir(n, r)
		}
	}

	function dr(e, t) {
		var n = this.cache,
			r = t.elements;
		if (void 0 === r) {
			if (rr(n, t)) return;
			e.uniformMatrix4fv(this.addr, !1, t), ir(n, t)
		} else {
			if (rr(n, r)) return;
			Kn.set(r), e.uniformMatrix4fv(this.addr, !1, Kn), ir(n, r)
		}
	}

	function fr(e, t, n) {
		var r = this.cache,
			i = n.allocTextureUnit();
		r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2D(t || Xn, i)
	}

	function mr(e, t, n) {
		var r = this.cache,
			i = n.allocTextureUnit();
		r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || Yn, i)
	}

	function vr(e, t, n) {
		var r = this.cache,
			i = n.allocTextureUnit();
		r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTextureCube(t || Jn, i)
	}

	function gr(e, t) {
		var n = this.cache;
		rr(n, t) || (e.uniform2iv(this.addr, t), ir(n, t))
	}

	function yr(e, t) {
		var n = this.cache;
		rr(n, t) || (e.uniform3iv(this.addr, t), ir(n, t))
	}

	function xr(e, t) {
		var n = this.cache;
		rr(n, t) || (e.uniform4iv(this.addr, t), ir(n, t))
	}

	function br(e, t) {
		var n = this.cache;
		rr(n, t) || (e.uniform1fv(this.addr, t), ir(n, t))
	}

	function wr(e, t) {
		var n = this.cache;
		rr(n, t) || (e.uniform1iv(this.addr, t), ir(n, t))
	}

	function _r(e, t) {
		var n = this.cache,
			r = nr(t, this.size, 2);
		rr(n, r) || (e.uniform2fv(this.addr, r), this.updateCache(r))
	}

	function Mr(e, t) {
		var n = this.cache,
			r = nr(t, this.size, 3);
		rr(n, r) || (e.uniform3fv(this.addr, r), this.updateCache(r))
	}

	function Sr(e, t) {
		var n = this.cache,
			r = nr(t, this.size, 4);
		rr(n, r) || (e.uniform4fv(this.addr, r), this.updateCache(r))
	}

	function Tr(e, t) {
		var n = this.cache,
			r = nr(t, this.size, 4);
		rr(n, r) || (e.uniformMatrix2fv(this.addr, !1, r), this.updateCache(r))
	}

	function Er(e, t) {
		var n = this.cache,
			r = nr(t, this.size, 9);
		rr(n, r) || (e.uniformMatrix3fv(this.addr, !1, r), this.updateCache(r))
	}

	function Cr(e, t) {
		var n = this.cache,
			r = nr(t, this.size, 16);
		rr(n, r) || (e.uniformMatrix4fv(this.addr, !1, r), this.updateCache(r))
	}

	function Ar(e, t, n) {
		var r = this.cache,
			i = t.length,
			a = ar(n, i);
		!1 === rr(r, a) && (e.uniform1iv(this.addr, a), ir(r, a));
		for (var o = 0; o !== i; ++o) n.setTexture2D(t[o] || Xn, a[o])
	}

	function Pr(e, t, n) {
		var r = this.cache,
			i = t.length,
			a = ar(n, i);
		!1 === rr(r, a) && (e.uniform1iv(this.addr, a), ir(r, a));
		for (var o = 0; o !== i; ++o) n.setTextureCube(t[o] || Jn, a[o])
	}

	function Lr(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.setValue = function (e) {
			switch (e) {
				case 5126:
					return or;
				case 35664:
					return lr;
				case 35665:
					return cr;
				case 35666:
					return ur;
				case 35674:
					return hr;
				case 35675:
					return pr;
				case 35676:
					return dr;
				case 35678:
				case 36198:
					return fr;
				case 35679:
					return mr;
				case 35680:
					return vr;
				case 5124:
				case 35670:
					return sr;
				case 35667:
				case 35671:
					return gr;
				case 35668:
				case 35672:
					return yr;
				case 35669:
				case 35673:
					return xr
			}
		}(t.type)
	}

	function Rr(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = function (e) {
			switch (e) {
				case 5126:
					return br;
				case 35664:
					return _r;
				case 35665:
					return Mr;
				case 35666:
					return Sr;
				case 35674:
					return Tr;
				case 35675:
					return Er;
				case 35676:
					return Cr;
				case 35678:
					return Ar;
				case 35680:
					return Pr;
				case 5124:
				case 35670:
					return wr;
				case 35667:
				case 35671:
					return gr;
				case 35668:
				case 35672:
					return yr;
				case 35669:
				case 35673:
					return xr
			}
		}(t.type)
	}

	function Or(e) {
		this.id = e, Zn.call(this)
	}
	Rr.prototype.updateCache = function (e) {
		var t = this.cache;
		e instanceof Float32Array && t.length !== e.length && (this.cache = new Float32Array(e.length)), ir(t, e)
	}, Or.prototype.setValue = function (e, t, n) {
		for (var r = this.seq, i = 0, a = r.length; i !== a; ++i) {
			var o = r[i];
			o.setValue(e, t[o.id], n)
		}
	};
	var kr = /([\w\d_]+)(\])?(\[|\.)?/g;

	function Ir(e, t) {
		e.seq.push(t), e.map[t.id] = t
	}

	function Nr(e, t, n) {
		var r = e.name,
			i = r.length;
		for (kr.lastIndex = 0;;) {
			var a = kr.exec(r),
				o = kr.lastIndex,
				s = a[1],
				l = "]" === a[2],
				c = a[3];
			if (l && (s |= 0), void 0 === c || "[" === c && o + 2 === i) {
				Ir(n, void 0 === c ? new Lr(s, e, t) : new Rr(s, e, t));
				break
			}
			var u = n.map[s];
			void 0 === u && Ir(n, u = new Or(s)), n = u
		}
	}

	function Dr(e, t, n) {
		Zn.call(this), this.renderer = n;
		for (var r = e.getProgramParameter(t, 35718), i = 0; i < r; ++i) {
			var a = e.getActiveUniform(t, i);
			Nr(a, e.getUniformLocation(t, a.name), this)
		}
	}

	function zr(e, t, n) {
		var r = e.createShader(t);
		return e.shaderSource(r, n), e.compileShader(r), !1 === e.getShaderParameter(r, 35713) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== e.getShaderInfoLog(r) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", 35633 === t ? "vertex" : "fragment", e.getShaderInfoLog(r), function (e) {
			for (var t = e.split("\n"), n = 0; n < t.length; n++) t[n] = n + 1 + ": " + t[n];
			return t.join("\n")
		}(n)), r
	}
	Dr.prototype.setValue = function (e, t, n) {
		var r = this.map[t];
		void 0 !== r && r.setValue(e, n, this.renderer)
	}, Dr.prototype.setOptional = function (e, t, n) {
		var r = t[n];
		void 0 !== r && this.setValue(e, n, r)
	}, Dr.upload = function (e, t, n, r) {
		for (var i = 0, a = t.length; i !== a; ++i) {
			var o = t[i],
				s = n[o.id];
			!1 !== s.needsUpdate && o.setValue(e, s.value, r)
		}
	}, Dr.seqWithValue = function (e, t) {
		for (var n = [], r = 0, i = e.length; r !== i; ++r) {
			var a = e[r];
			a.id in t && n.push(a)
		}
		return n
	};
	var Ur = 0;

	function Br(e) {
		switch (e) {
			case Pt:
				return ["Linear", "( value )"];
			case Lt:
				return ["sRGB", "( value )"];
			case Ot:
				return ["RGBE", "( value )"];
			case kt:
				return ["RGBM", "( value, 7.0 )"];
			case It:
				return ["RGBM", "( value, 16.0 )"];
			case Nt:
				return ["RGBD", "( value, 256.0 )"];
			case Rt:
				return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
			default:
				throw new Error("unsupported encoding: " + e)
		}
	}

	function Fr(e, t) {
		var n = Br(t);
		return "vec4 " + e + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
	}

	function jr(e) {
		return "" !== e
	}

	function Hr(e, t) {
		return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
	}

	function Gr(e, t) {
		return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
	}

	function Vr(e) {
		return e.replace(/^[ \t]*#include +<([\w\d./]+)>/gm, function (e, t) {
			var n = rn[t];
			if (void 0 === n) throw new Error("Can not resolve #include <" + t + ">");
			return Vr(n)
		})
	}

	function Wr(e) {
		return e.replace(/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function (e, t, n, r) {
			for (var i = "", a = parseInt(t); a < parseInt(n); a++) i += r.replace(/\[ i \]/g, "[ " + a + " ]");
			return i
		})
	}

	function qr(e, t, n, r, i, a, o) {
		var s = e.context,
			l = r.defines,
			c = i.vertexShader,
			u = i.fragmentShader,
			h = "SHADOWMAP_TYPE_BASIC";
		a.shadowMapType === C ? h = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === A && (h = "SHADOWMAP_TYPE_PCF_SOFT");
		var p = "ENVMAP_TYPE_CUBE",
			d = "ENVMAP_MODE_REFLECTION",
			f = "ENVMAP_BLENDING_MULTIPLY";
		if (a.envMap) {
			switch (r.envMap.mapping) {
				case xe:
				case be:
					p = "ENVMAP_TYPE_CUBE";
					break;
				case Se:
				case Te:
					p = "ENVMAP_TYPE_CUBE_UV";
					break;
				case we:
				case _e:
					p = "ENVMAP_TYPE_EQUIREC";
					break;
				case Me:
					p = "ENVMAP_TYPE_SPHERE"
			}
			switch (r.envMap.mapping) {
				case be:
				case _e:
					d = "ENVMAP_MODE_REFRACTION"
			}
			switch (r.combine) {
				case he:
					f = "ENVMAP_BLENDING_MULTIPLY";
					break;
				case pe:
					f = "ENVMAP_BLENDING_MIX";
					break;
				case de:
					f = "ENVMAP_BLENDING_ADD"
			}
		}
		var m, v, g = e.gammaFactor > 0 ? e.gammaFactor : 1,
			y = o.isWebGL2 ? "" : function (e, t, n) {
				return [(e = e || {}).derivatives || t.envMapCubeUV || t.bumpMap || t.normalMap && !t.objectSpaceNormalMap || t.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (e.fragDepth || t.logarithmicDepthBuffer) && n.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", e.drawBuffers && n.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (e.shaderTextureLOD || t.envMap) && n.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(jr).join("\n")
			}(r.extensions, a, t),
			x = function (e) {
				var t = [];
				for (var n in e) {
					var r = e[n];
					!1 !== r && t.push("#define " + n + " " + r)
				}
				return t.join("\n")
			}(l),
			b = s.createProgram();
		if (r.isRawShaderMaterial ? ((m = [x].filter(jr).join("\n")).length > 0 && (m += "\n"), (v = [y, x].filter(jr).join("\n")).length > 0 && (v += "\n")) : (m = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + i.name, x, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + g, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + d : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + h : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || t.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(jr).join("\n"), v = [y, "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + i.name, x, a.alphaTest ? "#define ALPHATEST " + a.alphaTest + (a.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + g, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + p : "", a.envMap ? "#define " + d : "", a.envMap ? "#define " + f : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.normalMap && a.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + h : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && (o.isWebGL2 || t.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", a.envMap && (o.isWebGL2 || t.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", a.toneMapping !== fe ? "#define TONE_MAPPING" : "", a.toneMapping !== fe ? rn.tonemapping_pars_fragment : "", a.toneMapping !== fe ? function (e, t) {
				var n;
				switch (t) {
					case me:
						n = "Linear";
						break;
					case ve:
						n = "Reinhard";
						break;
					case ge:
						n = "Uncharted2";
						break;
					case ye:
						n = "OptimizedCineon";
						break;
					default:
						throw new Error("unsupported toneMapping: " + t)
				}
				return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
			}("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.matcapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? rn.encodings_pars_fragment : "", a.mapEncoding ? Fr("mapTexelToLinear", a.mapEncoding) : "", a.matcapEncoding ? Fr("matcapTexelToLinear", a.matcapEncoding) : "", a.envMapEncoding ? Fr("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? Fr("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? function (e, t) {
				var n = Br(t);
				return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
			}("linearToOutputTexel", a.outputEncoding) : "", a.depthPacking ? "#define DEPTH_PACKING " + r.depthPacking : "", "\n"].filter(jr).join("\n")), c = Gr(c = Hr(c = Vr(c), a), a), u = Gr(u = Hr(u = Vr(u), a), a), c = Wr(c), u = Wr(u), o.isWebGL2 && !r.isRawShaderMaterial) {
			var w = !1,
				_ = /^\s*#version\s+300\s+es\s*\n/;
			r.isShaderMaterial && null !== c.match(_) && null !== u.match(_) && (w = !0, c = c.replace(_, ""), u = u.replace(_, "")), m = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + m, v = ["#version 300 es\n", "#define varying in", w ? "" : "out highp vec4 pc_fragColor;", w ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v
		}
		var M = v + u,
			S = zr(s, 35633, m + c),
			T = zr(s, 35632, M);
		s.attachShader(b, S), s.attachShader(b, T), void 0 !== r.index0AttributeName ? s.bindAttribLocation(b, 0, r.index0AttributeName) : !0 === a.morphTargets && s.bindAttribLocation(b, 0, "position"), s.linkProgram(b);
		var E, P, L = s.getProgramInfoLog(b).trim(),
			R = s.getShaderInfoLog(S).trim(),
			O = s.getShaderInfoLog(T).trim(),
			k = !0,
			I = !0;
		return !1 === s.getProgramParameter(b, 35714) ? (k = !1, console.error("THREE.WebGLProgram: shader error: ", s.getError(), "35715", s.getProgramParameter(b, 35715), "gl.getProgramInfoLog", L, R, O)) : "" !== L ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", L) : "" !== R && "" !== O || (I = !1), I && (this.diagnostics = {
			runnable: k,
			material: r,
			programLog: L,
			vertexShader: {
				log: R,
				prefix: m
			},
			fragmentShader: {
				log: O,
				prefix: v
			}
		}), s.deleteShader(S), s.deleteShader(T), this.getUniforms = function () {
			return void 0 === E && (E = new Dr(s, b, e)), E
		}, this.getAttributes = function () {
			return void 0 === P && (P = function (e, t) {
				for (var n = {}, r = e.getProgramParameter(t, 35721), i = 0; i < r; i++) {
					var a = e.getActiveAttrib(t, i).name;
					n[a] = e.getAttribLocation(t, a)
				}
				return n
			}(s, b)), P
		}, this.destroy = function () {
			s.deleteProgram(b), this.program = void 0
		}, Object.defineProperties(this, {
			uniforms: {
				get: function () {
					return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
				}
			},
			attributes: {
				get: function () {
					return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
				}
			}
		}), this.name = i.name, this.id = Ur++, this.code = n, this.usedTimes = 1, this.program = b, this.vertexShader = S, this.fragmentShader = T, this
	}

	function Xr(e, t, n) {
		var r = [],
			i = {
				MeshDepthMaterial: "depth",
				MeshDistanceMaterial: "distanceRGBA",
				MeshNormalMaterial: "normal",
				MeshBasicMaterial: "basic",
				MeshLambertMaterial: "lambert",
				MeshPhongMaterial: "phong",
				MeshToonMaterial: "phong",
				MeshStandardMaterial: "physical",
				MeshPhysicalMaterial: "physical",
				MeshMatcapMaterial: "matcap",
				LineBasicMaterial: "basic",
				LineDashedMaterial: "dashed",
				PointsMaterial: "points",
				ShadowMaterial: "shadow",
				SpriteMaterial: "sprite"
			},
			a = ["precision", "supportsVertexTextures", "map", "mapEncoding", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];

		function o(e, t) {
			var n;
			return e ? e.isTexture ? n = e.encoding : e.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), n = e.texture.encoding) : n = Pt, n === Pt && t && (n = Rt), n
		}
		this.getParameters = function (t, r, a, s, l, c, u) {
			var h = i[t.type],
				p = u.isSkinnedMesh ? function (e) {
					var t = e.skeleton.bones;
					if (n.floatVertexTextures) return 1024;
					var r = n.maxVertexUniforms,
						i = Math.floor((r - 20) / 4),
						a = Math.min(i, t.length);
					return a < t.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + t.length + " bones. This GPU supports " + a + "."), 0) : a
				}(u) : 0,
				d = n.precision;
			null !== t.precision && (d = n.getMaxPrecision(t.precision)) !== t.precision && console.warn("THREE.WebGLProgram.getParameters:", t.precision, "not supported, using", d, "instead.");
			var f = e.getRenderTarget();
			return {
				shaderID: h,
				precision: d,
				supportsVertexTextures: n.vertexTextures,
				outputEncoding: o(f ? f.texture : null, e.gammaOutput),
				map: !!t.map,
				mapEncoding: o(t.map, e.gammaInput),
				matcap: !!t.matcap,
				matcapEncoding: o(t.matcap, e.gammaInput),
				envMap: !!t.envMap,
				envMapMode: t.envMap && t.envMap.mapping,
				envMapEncoding: o(t.envMap, e.gammaInput),
				envMapCubeUV: !!t.envMap && (t.envMap.mapping === Se || t.envMap.mapping === Te),
				lightMap: !!t.lightMap,
				aoMap: !!t.aoMap,
				emissiveMap: !!t.emissiveMap,
				emissiveMapEncoding: o(t.emissiveMap, e.gammaInput),
				bumpMap: !!t.bumpMap,
				normalMap: !!t.normalMap,
				objectSpaceNormalMap: t.normalMapType === Bt,
				displacementMap: !!t.displacementMap,
				roughnessMap: !!t.roughnessMap,
				metalnessMap: !!t.metalnessMap,
				specularMap: !!t.specularMap,
				alphaMap: !!t.alphaMap,
				gradientMap: !!t.gradientMap,
				combine: t.combine,
				vertexColors: t.vertexColors,
				fog: !!s,
				useFog: t.fog,
				fogExp: s && s.isFogExp2,
				flatShading: t.flatShading,
				sizeAttenuation: t.sizeAttenuation,
				logarithmicDepthBuffer: n.logarithmicDepthBuffer,
				skinning: t.skinning && p > 0,
				maxBones: p,
				useVertexTexture: n.floatVertexTextures,
				morphTargets: t.morphTargets,
				morphNormals: t.morphNormals,
				maxMorphTargets: e.maxMorphTargets,
				maxMorphNormals: e.maxMorphNormals,
				numDirLights: r.directional.length,
				numPointLights: r.point.length,
				numSpotLights: r.spot.length,
				numRectAreaLights: r.rectArea.length,
				numHemiLights: r.hemi.length,
				numClippingPlanes: l,
				numClipIntersection: c,
				dithering: t.dithering,
				shadowMapEnabled: e.shadowMap.enabled && u.receiveShadow && a.length > 0,
				shadowMapType: e.shadowMap.type,
				toneMapping: e.toneMapping,
				physicallyCorrectLights: e.physicallyCorrectLights,
				premultipliedAlpha: t.premultipliedAlpha,
				alphaTest: t.alphaTest,
				doubleSided: t.side === R,
				flipSided: t.side === L,
				depthPacking: void 0 !== t.depthPacking && t.depthPacking
			}
		}, this.getProgramCode = function (t, n) {
			var r = [];
			if (n.shaderID ? r.push(n.shaderID) : (r.push(t.fragmentShader), r.push(t.vertexShader)), void 0 !== t.defines)
				for (var i in t.defines) r.push(i), r.push(t.defines[i]);
			for (var o = 0; o < a.length; o++) r.push(n[a[o]]);
			return r.push(t.onBeforeCompile.toString()), r.push(e.gammaOutput), r.push(e.gammaFactor), r.join()
		}, this.acquireProgram = function (i, a, o, s) {
			for (var l, c = 0, u = r.length; c < u; c++) {
				var h = r[c];
				if (h.code === s) {
					++(l = h).usedTimes;
					break
				}
			}
			return void 0 === l && (l = new qr(e, t, s, i, a, o, n), r.push(l)), l
		}, this.releaseProgram = function (e) {
			if (0 == --e.usedTimes) {
				var t = r.indexOf(e);
				r[t] = r[r.length - 1], r.pop(), e.destroy()
			}
		}, this.programs = r
	}

	function Yr(e, t) {
		return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program && t.program && e.program !== t.program ? e.program.id - t.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
	}

	function Jr(e, t) {
		return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
	}

	function Zr() {
		var e = {};
		return {
			get: function (t, n) {
				var r = t.id + "," + n.id,
					i = e[r];
				return void 0 === i && (i = new function () {
					var e = [],
						t = 0,
						n = [],
						r = [];
					return {
						opaque: n,
						transparent: r,
						init: function () {
							t = 0, n.length = 0, r.length = 0
						},
						push: function (i, a, o, s, l) {
							var c = e[t];
							void 0 === c ? (c = {
								id: i.id,
								object: i,
								geometry: a,
								material: o,
								program: o.program,
								renderOrder: i.renderOrder,
								z: s,
								group: l
							}, e[t] = c) : (c.id = i.id, c.object = i, c.geometry = a, c.material = o, c.program = o.program, c.renderOrder = i.renderOrder, c.z = s, c.group = l), (!0 === o.transparent ? r : n).push(c), t++
						},
						sort: function () {
							n.length > 1 && n.sort(Yr), r.length > 1 && r.sort(Jr)
						}
					}
				}, e[r] = i), i
			},
			dispose: function () {
				e = {}
			}
		}
	}
	var $r = 0;

	function Qr() {
		var e = new function () {
				var e = {};
				return {
					get: function (t) {
						if (void 0 !== e[t.id]) return e[t.id];
						var n;
						switch (t.type) {
							case "DirectionalLight":
								n = {
									direction: new Vt,
									color: new sn,
									shadow: !1,
									shadowBias: 0,
									shadowRadius: 1,
									shadowMapSize: new jt
								};
								break;
							case "SpotLight":
								n = {
									position: new Vt,
									direction: new Vt,
									color: new sn,
									distance: 0,
									coneCos: 0,
									penumbraCos: 0,
									decay: 0,
									shadow: !1,
									shadowBias: 0,
									shadowRadius: 1,
									shadowMapSize: new jt
								};
								break;
							case "PointLight":
								n = {
									position: new Vt,
									color: new sn,
									distance: 0,
									decay: 0,
									shadow: !1,
									shadowBias: 0,
									shadowRadius: 1,
									shadowMapSize: new jt,
									shadowCameraNear: 1,
									shadowCameraFar: 1e3
								};
								break;
							case "HemisphereLight":
								n = {
									direction: new Vt,
									skyColor: new sn,
									groundColor: new sn
								};
								break;
							case "RectAreaLight":
								n = {
									color: new sn,
									position: new Vt,
									halfWidth: new Vt,
									halfHeight: new Vt
								}
						}
						return e[t.id] = n, n
					}
				}
			},
			t = {
				id: $r++,
				hash: {
					stateID: -1,
					directionalLength: -1,
					pointLength: -1,
					spotLength: -1,
					rectAreaLength: -1,
					hemiLength: -1,
					shadowsLength: -1
				},
				ambient: [0, 0, 0],
				directional: [],
				directionalShadowMap: [],
				directionalShadowMatrix: [],
				spot: [],
				spotShadowMap: [],
				spotShadowMatrix: [],
				rectArea: [],
				point: [],
				pointShadowMap: [],
				pointShadowMatrix: [],
				hemi: []
			},
			n = new Vt,
			r = new Ht,
			i = new Ht;
		return {
			setup: function (a, o, s) {
				for (var l = 0, c = 0, u = 0, h = 0, p = 0, d = 0, f = 0, m = 0, v = s.matrixWorldInverse, g = 0, y = a.length; g < y; g++) {
					var x = a[g],
						b = x.color,
						w = x.intensity,
						_ = x.distance,
						M = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
					if (x.isAmbientLight) l += b.r * w, c += b.g * w, u += b.b * w;
					else if (x.isDirectionalLight) {
						if ((T = e.get(x)).color.copy(x.color).multiplyScalar(x.intensity), T.direction.setFromMatrixPosition(x.matrixWorld), n.setFromMatrixPosition(x.target.matrixWorld), T.direction.sub(n), T.direction.transformDirection(v), T.shadow = x.castShadow, x.castShadow) {
							var S = x.shadow;
							T.shadowBias = S.bias, T.shadowRadius = S.radius, T.shadowMapSize = S.mapSize
						}
						t.directionalShadowMap[h] = M, t.directionalShadowMatrix[h] = x.shadow.matrix, t.directional[h] = T, h++
					} else if (x.isSpotLight)(T = e.get(x)).position.setFromMatrixPosition(x.matrixWorld), T.position.applyMatrix4(v), T.color.copy(b).multiplyScalar(w), T.distance = _, T.direction.setFromMatrixPosition(x.matrixWorld), n.setFromMatrixPosition(x.target.matrixWorld), T.direction.sub(n), T.direction.transformDirection(v), T.coneCos = Math.cos(x.angle), T.penumbraCos = Math.cos(x.angle * (1 - x.penumbra)), T.decay = x.decay, T.shadow = x.castShadow, x.castShadow && (S = x.shadow, T.shadowBias = S.bias, T.shadowRadius = S.radius, T.shadowMapSize = S.mapSize), t.spotShadowMap[d] = M, t.spotShadowMatrix[d] = x.shadow.matrix, t.spot[d] = T, d++;
					else if (x.isRectAreaLight)(T = e.get(x)).color.copy(b).multiplyScalar(w), T.position.setFromMatrixPosition(x.matrixWorld), T.position.applyMatrix4(v), i.identity(), r.copy(x.matrixWorld), r.premultiply(v), i.extractRotation(r), T.halfWidth.set(.5 * x.width, 0, 0), T.halfHeight.set(0, .5 * x.height, 0), T.halfWidth.applyMatrix4(i), T.halfHeight.applyMatrix4(i), t.rectArea[f] = T, f++;
					else if (x.isPointLight)(T = e.get(x)).position.setFromMatrixPosition(x.matrixWorld), T.position.applyMatrix4(v), T.color.copy(x.color).multiplyScalar(x.intensity), T.distance = x.distance, T.decay = x.decay, T.shadow = x.castShadow, x.castShadow && (S = x.shadow, T.shadowBias = S.bias, T.shadowRadius = S.radius, T.shadowMapSize = S.mapSize, T.shadowCameraNear = S.camera.near, T.shadowCameraFar = S.camera.far), t.pointShadowMap[p] = M, t.pointShadowMatrix[p] = x.shadow.matrix, t.point[p] = T, p++;
					else if (x.isHemisphereLight) {
						var T;
						(T = e.get(x)).direction.setFromMatrixPosition(x.matrixWorld), T.direction.transformDirection(v), T.direction.normalize(), T.skyColor.copy(x.color).multiplyScalar(w), T.groundColor.copy(x.groundColor).multiplyScalar(w), t.hemi[m] = T, m++
					}
				}
				t.ambient[0] = l, t.ambient[1] = c, t.ambient[2] = u, t.directional.length = h, t.spot.length = d, t.rectArea.length = f, t.point.length = p, t.hemi.length = m, t.hash.stateID = t.id, t.hash.directionalLength = h, t.hash.pointLength = p, t.hash.spotLength = d, t.hash.rectAreaLength = f, t.hash.hemiLength = m, t.hash.shadowsLength = o.length
			},
			state: t
		}
	}

	function Kr() {
		var e = new Qr,
			t = [],
			n = [];
		return {
			init: function () {
				t.length = 0, n.length = 0
			},
			state: {
				lightsArray: t,
				shadowsArray: n,
				lights: e
			},
			setupLights: function (r) {
				e.setup(t, n, r)
			},
			pushLight: function (e) {
				t.push(e)
			},
			pushShadow: function (e) {
				n.push(e)
			}
		}
	}

	function ei(e) {
		Un.call(this), this.type = "MeshDepthMaterial", this.depthPacking = Dt, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(e)
	}

	function ti(e) {
		Un.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new Vt, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.lights = !1, this.setValues(e)
	}

	function ni(e, t, n) {
		for (var r = new nn, i = new Ht, a = new jt, o = new jt(n, n), s = new Vt, l = new Vt, c = 1, u = 2, h = 1 + (c | u), p = new Array(h), d = new Array(h), f = {}, m = {
				0: L,
				1: P,
				2: R
			}, v = [new Vt(1, 0, 0), new Vt(-1, 0, 0), new Vt(0, 0, 1), new Vt(0, 0, -1), new Vt(0, 1, 0), new Vt(0, -1, 0)], g = [new Vt(0, 1, 0), new Vt(0, 1, 0), new Vt(0, 1, 0), new Vt(0, 1, 0), new Vt(0, 0, 1), new Vt(0, 0, -1)], y = [new Jt, new Jt, new Jt, new Jt, new Jt, new Jt], x = 0; x !== h; ++x) {
			var b = 0 != (x & c),
				w = 0 != (x & u),
				_ = new ei({
					depthPacking: zt,
					morphTargets: b,
					skinning: w
				});
			p[x] = _;
			var M = new ti({
				morphTargets: b,
				skinning: w
			});
			d[x] = M
		}
		var S = this;

		function T(t, n, r, i, a, o) {
			var s = t.geometry,
				l = null,
				h = p,
				v = t.customDepthMaterial;
			if (r && (h = d, v = t.customDistanceMaterial), v) l = v;
			else {
				var g = !1;
				n.morphTargets && (s && s.isBufferGeometry ? g = s.morphAttributes && s.morphAttributes.position && s.morphAttributes.position.length > 0 : s && s.isGeometry && (g = s.morphTargets && s.morphTargets.length > 0)), t.isSkinnedMesh && !1 === n.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", t);
				var y = t.isSkinnedMesh && n.skinning,
					x = 0;
				g && (x |= c), y && (x |= u), l = h[x]
			}
			if (e.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length) {
				var b = l.uuid,
					w = n.uuid,
					_ = f[b];
				void 0 === _ && (_ = {}, f[b] = _);
				var M = _[w];
				void 0 === M && (M = l.clone(), _[w] = M), l = M
			}
			return l.visible = n.visible, l.wireframe = n.wireframe, l.side = null != n.shadowSide ? n.shadowSide : m[n.side], l.clipShadows = n.clipShadows, l.clippingPlanes = n.clippingPlanes, l.clipIntersection = n.clipIntersection, l.wireframeLinewidth = n.wireframeLinewidth, l.linewidth = n.linewidth, r && l.isMeshDistanceMaterial && (l.referencePosition.copy(i), l.nearDistance = a, l.farDistance = o), l
		}

		function E(n, i, a, o) {
			if (!1 !== n.visible) {
				if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && n.castShadow && (!n.frustumCulled || r.intersectsObject(n))) {
					n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
					var s = t.update(n),
						c = n.material;
					if (Array.isArray(c))
						for (var u = s.groups, h = 0, p = u.length; h < p; h++) {
							var d = u[h],
								f = c[d.materialIndex];
							if (f && f.visible) {
								var m = T(n, f, o, l, a.near, a.far);
								e.renderBufferDirect(a, null, s, m, n, d)
							}
						} else if (c.visible) {
							m = T(n, c, o, l, a.near, a.far);
							e.renderBufferDirect(a, null, s, m, n, null)
						}
				}
				for (var v = n.children, g = 0, y = v.length; g < y; g++) E(v[g], i, a, o)
			}
		}
		this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = C, this.render = function (t, n, c) {
			if (!1 !== S.enabled && (!1 !== S.autoUpdate || !1 !== S.needsUpdate) && 0 !== t.length) {
				e.context;
				var u, h = e.state;
				h.disable(3042), h.buffers.color.setClear(1, 1, 1, 1), h.buffers.depth.setTest(!0), h.setScissorTest(!1);
				for (var p = 0, d = t.length; p < d; p++) {
					var f = t[p],
						m = f.shadow,
						x = f && f.isPointLight;
					if (void 0 !== m) {
						var b = m.camera;
						if (a.copy(m.mapSize), a.min(o), x) {
							var w = a.x,
								_ = a.y;
							y[0].set(2 * w, _, w, _), y[1].set(0, _, w, _), y[2].set(3 * w, _, w, _), y[3].set(w, _, w, _), y[4].set(3 * w, 0, w, _), y[5].set(w, 0, w, _), a.x *= 4, a.y *= 2
						}
						if (null === m.map) {
							var M = {
								minFilter: Pe,
								magFilter: Pe,
								format: Je
							};
							m.map = new Zt(a.x, a.y, M), m.map.texture.name = f.name + ".shadowMap", b.updateProjectionMatrix()
						}
						m.isSpotLightShadow && m.update(f);
						var T = m.map,
							C = m.matrix;
						l.setFromMatrixPosition(f.matrixWorld), b.position.copy(l), x ? (u = 6, C.makeTranslation(-l.x, -l.y, -l.z)) : (u = 1, s.setFromMatrixPosition(f.target.matrixWorld), b.lookAt(s), b.updateMatrixWorld(), C.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), C.multiply(b.projectionMatrix), C.multiply(b.matrixWorldInverse)), e.setRenderTarget(T), e.clear();
						for (var A = 0; A < u; A++) {
							if (x) {
								s.copy(b.position), s.add(v[A]), b.up.copy(g[A]), b.lookAt(s), b.updateMatrixWorld();
								var P = y[A];
								h.viewport(P)
							}
							i.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse), r.setFromMatrix(i), E(n, c, b, x)
						}
					} else console.warn("THREE.WebGLShadowMap:", f, "has no shadow.")
				}
				S.needsUpdate = !1
			}
		}
	}

	function ri(e, t, n, r, i, a, o) {
		var s, l = {};

		function c(e, t) {
			if (e.width > t || e.height > t) {
				if ("data" in e) return void console.warn("THREE.WebGLRenderer: image in DataTexture is too big (" + e.width + "x" + e.height + ").");
				var n = t / Math.max(e.width, e.height),
					r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
				return r.width = Math.floor(e.width * n), r.height = Math.floor(e.height * n), r.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, r.width, r.height), console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + r.width + "x" + r.height), r
			}
			return e
		}

		function u(e) {
			return Ft.isPowerOfTwo(e.width) && Ft.isPowerOfTwo(e.height)
		}

		function h(e, t) {
			return e.generateMipmaps && t && e.minFilter !== Pe && e.minFilter !== Oe
		}

		function p(t, n, i, a) {
			e.generateMipmap(t), r.get(n).__maxMipLevel = Math.log(Math.max(i, a)) * Math.LOG2E
		}

		function d(e, t) {
			if (!i.isWebGL2) return e;
			if (6403 === e) {
				if (5126 === t) return 33326;
				if (5131 === t) return 33325;
				if (5121 === t) return 33321
			}
			if (6407 === e) {
				if (5126 === t) return 34837;
				if (5131 === t) return 34843;
				if (5121 === t) return 32849
			}
			if (6408 === e) {
				if (5126 === t) return 34836;
				if (5131 === t) return 34842;
				if (5121 === t) return 32856
			}
			return e
		}

		function f(e) {
			return e === Pe || e === Le || e === Re ? 9728 : 9729
		}

		function m(t) {
			var n = t.target;
			n.removeEventListener("dispose", m),
				function (t) {
					var n = r.get(t);
					if (t.image && n.__image__webglTextureCube) e.deleteTexture(n.__image__webglTextureCube);
					else {
						if (void 0 === n.__webglInit) return;
						e.deleteTexture(n.__webglTexture)
					}
					r.remove(t)
				}(n), n.isVideoTexture && delete l[n.id], o.memory.textures--
		}

		function v(t) {
			var n = t.target;
			n.removeEventListener("dispose", v),
				function (t) {
					var n = r.get(t),
						i = r.get(t.texture);
					if (!t) return;
					void 0 !== i.__webglTexture && e.deleteTexture(i.__webglTexture);
					t.depthTexture && t.depthTexture.dispose();
					if (t.isWebGLRenderTargetCube)
						for (var a = 0; a < 6; a++) e.deleteFramebuffer(n.__webglFramebuffer[a]), n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[a]);
					else e.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer);
					r.remove(t.texture), r.remove(t)
				}(n), o.memory.textures--
		}

		function g(e, t) {
			var i = r.get(e);
			if (e.isVideoTexture && function (e) {
					var t = e.id,
						n = o.render.frame;
					l[t] !== n && (l[t] = n, e.update())
				}(e), e.version > 0 && i.__version !== e.version) {
				var a = e.image;
				if (void 0 === a) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
				else {
					if (!1 !== a.complete) return void x(i, e, t);
					console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
				}
			}
			n.activeTexture(33984 + t), n.bindTexture(3553, i.__webglTexture)
		}

		function y(n, o, s) {
			var l;
			if (s ? (e.texParameteri(n, 10242, a.convert(o.wrapS)), e.texParameteri(n, 10243, a.convert(o.wrapT)), e.texParameteri(n, 10240, a.convert(o.magFilter)), e.texParameteri(n, 10241, a.convert(o.minFilter))) : (e.texParameteri(n, 10242, 33071), e.texParameteri(n, 10243, 33071), o.wrapS === Ce && o.wrapT === Ce || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(n, 10240, f(o.magFilter)), e.texParameteri(n, 10241, f(o.minFilter)), o.minFilter !== Pe && o.minFilter !== Oe && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), l = t.get("EXT_texture_filter_anisotropic")) {
				if (o.type === je && null === t.get("OES_texture_float_linear")) return;
				if (o.type === He && null === (i.isWebGL2 || t.get("OES_texture_half_float_linear"))) return;
				(o.anisotropy > 1 || r.get(o).__currentAnisotropy) && (e.texParameterf(n, l.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, i.getMaxAnisotropy())), r.get(o).__currentAnisotropy = o.anisotropy)
			}
		}

		function x(t, r, l) {
			var f;
			f = r.isDataTexture3D ? 32879 : 3553, void 0 === t.__webglInit && (t.__webglInit = !0, r.addEventListener("dispose", m), t.__webglTexture = e.createTexture(), o.memory.textures++), n.activeTexture(33984 + l), n.bindTexture(f, t.__webglTexture), e.pixelStorei(37440, r.flipY), e.pixelStorei(37441, r.premultiplyAlpha), e.pixelStorei(3317, r.unpackAlignment);
			var v = c(r.image, i.maxTextureSize);
			(function (e) {
				return !i.isWebGL2 && (e.wrapS !== Ce || e.wrapT !== Ce || e.minFilter !== Pe && e.minFilter !== Oe)
			})(r) && !1 === u(v) && (v = function (e) {
				return e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof ImageBitmap ? (void 0 === s && (s = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), s.width = Ft.floorPowerOfTwo(e.width), s.height = Ft.floorPowerOfTwo(e.height), s.getContext("2d").drawImage(e, 0, 0, s.width, s.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + e.width + "x" + e.height + "). Resized to " + s.width + "x" + s.height), s) : e
			}(v));
			var g = u(v),
				x = a.convert(r.format),
				b = a.convert(r.type),
				w = d(x, b);
			y(f, r, g);
			var _, M = r.mipmaps;
			if (r.isDepthTexture) {
				if (w = 6402, r.type === je) {
					if (!i.isWebGL2) throw new Error("Float Depth Texture only supported in WebGL2.0");
					w = 36012
				} else i.isWebGL2 && (w = 33189);
				r.format === Qe && 6402 === w && r.type !== Ue && r.type !== Fe && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), r.type = Ue, b = a.convert(r.type)), r.format === Ke && (w = 34041, r.type !== qe && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), r.type = qe, b = a.convert(r.type))), n.texImage2D(3553, 0, w, v.width, v.height, 0, x, b, null)
			} else if (r.isDataTexture)
				if (M.length > 0 && g) {
					for (var S = 0, T = M.length; S < T; S++) _ = M[S], n.texImage2D(3553, S, w, _.width, _.height, 0, x, b, _.data);
					r.generateMipmaps = !1, t.__maxMipLevel = M.length - 1
				} else n.texImage2D(3553, 0, w, v.width, v.height, 0, x, b, v.data), t.__maxMipLevel = 0;
			else if (r.isCompressedTexture) {
				for (S = 0, T = M.length; S < T; S++) _ = M[S], r.format !== Je && r.format !== Ye ? n.getCompressedTextureFormats().indexOf(x) > -1 ? n.compressedTexImage2D(3553, S, w, _.width, _.height, 0, _.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(3553, S, w, _.width, _.height, 0, x, b, _.data);
				t.__maxMipLevel = M.length - 1
			} else if (r.isDataTexture3D) n.texImage3D(32879, 0, w, v.width, v.height, v.depth, 0, x, b, v.data), t.__maxMipLevel = 0;
			else if (M.length > 0 && g) {
				for (S = 0, T = M.length; S < T; S++) _ = M[S], n.texImage2D(3553, S, w, x, b, _);
				r.generateMipmaps = !1, t.__maxMipLevel = M.length - 1
			} else n.texImage2D(3553, 0, w, x, b, v), t.__maxMipLevel = 0;
			h(r, g) && p(3553, r, v.width, v.height), t.__version = r.version, r.onUpdate && r.onUpdate(r)
		}

		function b(t, i, o, s) {
			var l = a.convert(i.texture.format),
				c = a.convert(i.texture.type),
				u = d(l, c);
			n.texImage2D(s, 0, u, i.width, i.height, 0, l, c, null), e.bindFramebuffer(36160, t), e.framebufferTexture2D(36160, o, s, r.get(i.texture).__webglTexture, 0), e.bindFramebuffer(36160, null)
		}

		function w(t, n) {
			e.bindRenderbuffer(36161, t), n.depthBuffer && !n.stencilBuffer ? (e.renderbufferStorage(36161, 33189, n.width, n.height), e.framebufferRenderbuffer(36160, 36096, 36161, t)) : n.depthBuffer && n.stencilBuffer ? (e.renderbufferStorage(36161, 34041, n.width, n.height), e.framebufferRenderbuffer(36160, 33306, 36161, t)) : e.renderbufferStorage(36161, 32854, n.width, n.height), e.bindRenderbuffer(36161, null)
		}

		function _(t) {
			var n = r.get(t),
				i = !0 === t.isWebGLRenderTargetCube;
			if (t.depthTexture) {
				if (i) throw new Error("target.depthTexture not supported in Cube render targets");
				! function (t, n) {
					if (n && n.isWebGLRenderTargetCube) throw new Error("Depth Texture with cube render targets is not supported");
					if (e.bindFramebuffer(36160, t), !n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
					r.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), g(n.depthTexture, 0);
					var i = r.get(n.depthTexture).__webglTexture;
					if (n.depthTexture.format === Qe) e.framebufferTexture2D(36160, 36096, 3553, i, 0);
					else {
						if (n.depthTexture.format !== Ke) throw new Error("Unknown depthTexture format");
						e.framebufferTexture2D(36160, 33306, 3553, i, 0)
					}
				}(n.__webglFramebuffer, t)
			} else if (i) {
				n.__webglDepthbuffer = [];
				for (var a = 0; a < 6; a++) e.bindFramebuffer(36160, n.__webglFramebuffer[a]), n.__webglDepthbuffer[a] = e.createRenderbuffer(), w(n.__webglDepthbuffer[a], t)
			} else e.bindFramebuffer(36160, n.__webglFramebuffer), n.__webglDepthbuffer = e.createRenderbuffer(), w(n.__webglDepthbuffer, t);
			e.bindFramebuffer(36160, null)
		}
		this.setTexture2D = g, this.setTexture3D = function (e, t) {
			var i = r.get(e);
			e.version > 0 && i.__version !== e.version ? x(i, e, t) : (n.activeTexture(33984 + t), n.bindTexture(32879, i.__webglTexture))
		}, this.setTextureCube = function (t, s) {
			var l = r.get(t);
			if (6 === t.image.length)
				if (t.version > 0 && l.__version !== t.version) {
					l.__image__webglTextureCube || (t.addEventListener("dispose", m), l.__image__webglTextureCube = e.createTexture(), o.memory.textures++), n.activeTexture(33984 + s), n.bindTexture(34067, l.__image__webglTextureCube), e.pixelStorei(37440, t.flipY);
					for (var f = t && t.isCompressedTexture, v = t.image[0] && t.image[0].isDataTexture, g = [], x = 0; x < 6; x++) g[x] = f || v ? v ? t.image[x].image : t.image[x] : c(t.image[x], i.maxCubemapSize);
					var b = g[0],
						w = u(b),
						_ = a.convert(t.format),
						M = a.convert(t.type),
						S = d(_, M);
					for (y(34067, t, w), x = 0; x < 6; x++)
						if (f)
							for (var T, E = g[x].mipmaps, C = 0, A = E.length; C < A; C++) T = E[C], t.format !== Je && t.format !== Ye ? n.getCompressedTextureFormats().indexOf(_) > -1 ? n.compressedTexImage2D(34069 + x, C, S, T.width, T.height, 0, T.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(34069 + x, C, S, T.width, T.height, 0, _, M, T.data);
						else v ? n.texImage2D(34069 + x, 0, S, g[x].width, g[x].height, 0, _, M, g[x].data) : n.texImage2D(34069 + x, 0, S, _, M, g[x]);
					l.__maxMipLevel = f ? E.length - 1 : 0, h(t, w) && p(34067, t, b.width, b.height), l.__version = t.version, t.onUpdate && t.onUpdate(t)
				} else n.activeTexture(33984 + s), n.bindTexture(34067, l.__image__webglTextureCube)
		}, this.setTextureCubeDynamic = function (e, t) {
			n.activeTexture(33984 + t), n.bindTexture(34067, r.get(e).__webglTexture)
		}, this.setupRenderTarget = function (t) {
			var i = r.get(t),
				a = r.get(t.texture);
			t.addEventListener("dispose", v), a.__webglTexture = e.createTexture(), o.memory.textures++;
			var s = !0 === t.isWebGLRenderTargetCube,
				l = u(t);
			if (s) {
				i.__webglFramebuffer = [];
				for (var c = 0; c < 6; c++) i.__webglFramebuffer[c] = e.createFramebuffer()
			} else i.__webglFramebuffer = e.createFramebuffer();
			if (s) {
				for (n.bindTexture(34067, a.__webglTexture), y(34067, t.texture, l), c = 0; c < 6; c++) b(i.__webglFramebuffer[c], t, 36064, 34069 + c);
				h(t.texture, l) && p(34067, t.texture, t.width, t.height), n.bindTexture(34067, null)
			} else n.bindTexture(3553, a.__webglTexture), y(3553, t.texture, l), b(i.__webglFramebuffer, t, 36064, 3553), h(t.texture, l) && p(3553, t.texture, t.width, t.height), n.bindTexture(3553, null);
			t.depthBuffer && _(t)
		}, this.updateRenderTargetMipmap = function (e) {
			var t = e.texture;
			if (h(t, u(e))) {
				var i = e.isWebGLRenderTargetCube ? 34067 : 3553,
					a = r.get(t).__webglTexture;
				n.bindTexture(i, a), p(i, t, e.width, e.height), n.bindTexture(i, null)
			}
		}
	}

	function ii() {
		vn.call(this), this.type = "Group"
	}

	function ai() {
		vn.call(this), this.type = "Camera", this.matrixWorldInverse = new Ht, this.projectionMatrix = new Ht, this.projectionMatrixInverse = new Ht
	}

	function oi(e, t, n, r) {
		ai.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== e ? e : 50, this.zoom = 1, this.near = void 0 !== n ? n : .1, this.far = void 0 !== r ? r : 2e3, this.focus = 10, this.aspect = void 0 !== t ? t : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
	}

	function si(e) {
		oi.call(this), this.cameras = e || []
	}
	ei.prototype = Object.create(Un.prototype), ei.prototype.constructor = ei, ei.prototype.isMeshDepthMaterial = !0, ei.prototype.copy = function (e) {
		return Un.prototype.copy.call(this, e), this.depthPacking = e.depthPacking, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
	}, ti.prototype = Object.create(Un.prototype), ti.prototype.constructor = ti, ti.prototype.isMeshDistanceMaterial = !0, ti.prototype.copy = function (e) {
		return Un.prototype.copy.call(this, e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
	}, ii.prototype = Object.assign(Object.create(vn.prototype), {
		constructor: ii,
		isGroup: !0
	}), ai.prototype = Object.assign(Object.create(vn.prototype), {
		constructor: ai,
		isCamera: !0,
		copy: function (e, t) {
			return vn.prototype.copy.call(this, e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this
		},
		getWorldDirection: function (e) {
			void 0 === e && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), e = new Vt), this.updateMatrixWorld(!0);
			var t = this.matrixWorld.elements;
			return e.set(-t[8], -t[9], -t[10]).normalize()
		},
		updateMatrixWorld: function (e) {
			vn.prototype.updateMatrixWorld.call(this, e), this.matrixWorldInverse.getInverse(this.matrixWorld)
		},
		clone: function () {
			return (new this.constructor).copy(this)
		}
	}), oi.prototype = Object.assign(Object.create(ai.prototype), {
		constructor: oi,
		isPerspectiveCamera: !0,
		copy: function (e, t) {
			return ai.prototype.copy.call(this, e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = null === e.view ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
		},
		setFocalLength: function (e) {
			var t = .5 * this.getFilmHeight() / e;
			this.fov = 2 * Ft.RAD2DEG * Math.atan(t), this.updateProjectionMatrix()
		},
		getFocalLength: function () {
			var e = Math.tan(.5 * Ft.DEG2RAD * this.fov);
			return .5 * this.getFilmHeight() / e
		},
		getEffectiveFOV: function () {
			return 2 * Ft.RAD2DEG * Math.atan(Math.tan(.5 * Ft.DEG2RAD * this.fov) / this.zoom)
		},
		getFilmWidth: function () {
			return this.filmGauge * Math.min(this.aspect, 1)
		},
		getFilmHeight: function () {
			return this.filmGauge / Math.max(this.aspect, 1)
		},
		setViewOffset: function (e, t, n, r, i, a) {
			this.aspect = e / t, null === this.view && (this.view = {
				enabled: !0,
				fullWidth: 1,
				fullHeight: 1,
				offsetX: 0,
				offsetY: 0,
				width: 1,
				height: 1
			}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix()
		},
		clearViewOffset: function () {
			null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
		},
		updateProjectionMatrix: function () {
			var e = this.near,
				t = e * Math.tan(.5 * Ft.DEG2RAD * this.fov) / this.zoom,
				n = 2 * t,
				r = this.aspect * n,
				i = -.5 * r,
				a = this.view;
			if (null !== this.view && this.view.enabled) {
				var o = a.fullWidth,
					s = a.fullHeight;
				i += a.offsetX * r / o, t -= a.offsetY * n / s, r *= a.width / o, n *= a.height / s
			}
			var l = this.filmOffset;
			0 !== l && (i += e * l / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
		},
		toJSON: function (e) {
			var t = vn.prototype.toJSON.call(this, e);
			return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
		}
	}), si.prototype = Object.assign(Object.create(oi.prototype), {
		constructor: si,
		isArrayCamera: !0
	});
	var li, ci = new Vt,
		ui = new Vt;

	function hi(e, t, n) {
		ci.setFromMatrixPosition(t.matrixWorld), ui.setFromMatrixPosition(n.matrixWorld);
		var r = ci.distanceTo(ui),
			i = t.projectionMatrix.elements,
			a = n.projectionMatrix.elements,
			o = i[14] / (i[10] - 1),
			s = i[14] / (i[10] + 1),
			l = (i[9] + 1) / i[5],
			c = (i[9] - 1) / i[5],
			u = (i[8] - 1) / i[0],
			h = (a[8] + 1) / a[0],
			p = o * u,
			d = o * h,
			f = r / (-u + h),
			m = f * -u;
		t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(m), e.translateZ(f), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.getInverse(e.matrixWorld);
		var v = o + f,
			g = s + f,
			y = p - m,
			x = d + (r - m),
			b = l * s / g * v,
			w = c * s / g * v;
		e.projectionMatrix.makePerspective(y, x, b, w, v, g)
	}

	function pi(e) {
		var t = this,
			n = null,
			r = null,
			i = null,
			a = [],
			o = new Ht,
			s = new Ht,
			l = 1,
			c = "stage";
		"undefined" != typeof window && "VRFrameData" in window && (r = new window.VRFrameData, window.addEventListener("vrdisplaypresentchange", x, !1));
		var u = new Ht,
			h = new Gt,
			p = new Vt,
			d = new oi;
		d.bounds = new Jt(0, 0, .5, 1), d.layers.enable(1);
		var f = new oi;
		f.bounds = new Jt(.5, 0, .5, 1), f.layers.enable(2);
		var m, v, g = new si([d, f]);

		function y() {
			return null !== n && !0 === n.isPresenting
		}

		function x() {
			if (y()) {
				var r = n.getEyeParameters("left"),
					i = r.renderWidth * l,
					a = r.renderHeight * l;
				v = e.getPixelRatio(), m = e.getSize(), e.setDrawingBufferSize(2 * i, a, 1), _.start()
			} else t.enabled && e.setDrawingBufferSize(m.width, m.height, v), _.stop()
		}
		g.layers.enable(1), g.layers.enable(2);
		var b = [];

		function w(e) {
			for (var t = navigator.getGamepads && navigator.getGamepads(), n = 0, r = 0, i = t.length; n < i; n++) {
				var a = t[n];
				if (a && ("Daydream Controller" === a.id || "Gear VR Controller" === a.id || "Oculus Go Controller" === a.id || "OpenVR Gamepad" === a.id || a.id.startsWith("Oculus Touch") || a.id.startsWith("Spatial Controller"))) {
					if (r === e) return a;
					r++
				}
			}
		}
		this.enabled = !1, this.getController = function (e) {
			var t = a[e];
			return void 0 === t && ((t = new ii).matrixAutoUpdate = !1, t.visible = !1, a[e] = t), t
		}, this.getDevice = function () {
			return n
		}, this.setDevice = function (e) {
			void 0 !== e && (n = e), _.setContext(e)
		}, this.setFramebufferScaleFactor = function (e) {
			l = e
		}, this.setFrameOfReferenceType = function (e) {
			c = e
		}, this.setPoseTarget = function (e) {
			void 0 !== e && (i = e)
		}, this.getCamera = function (e) {
			var t = "stage" === c ? 1.6 : 0;
			if (null === n) return e.position.set(0, t, 0), e;
			if (n.depthNear = e.near, n.depthFar = e.far, n.getFrameData(r), "stage" === c) {
				var l = n.stageParameters;
				l ? o.fromArray(l.sittingToStandingTransform) : o.makeTranslation(0, t, 0)
			}
			var m = r.pose,
				v = null !== i ? i : e;
			if (v.matrix.copy(o), v.matrix.decompose(v.position, v.quaternion, v.scale), null !== m.orientation && (h.fromArray(m.orientation), v.quaternion.multiply(h)), null !== m.position && (h.setFromRotationMatrix(o), p.fromArray(m.position), p.applyQuaternion(h), v.position.add(p)), v.updateMatrixWorld(), !1 === n.isPresenting) return e;
			d.near = e.near, f.near = e.near, d.far = e.far, f.far = e.far, d.matrixWorldInverse.fromArray(r.leftViewMatrix), f.matrixWorldInverse.fromArray(r.rightViewMatrix), s.getInverse(o), "stage" === c && (d.matrixWorldInverse.multiply(s), f.matrixWorldInverse.multiply(s));
			var y = v.parent;
			null !== y && (u.getInverse(y.matrixWorld), d.matrixWorldInverse.multiply(u), f.matrixWorldInverse.multiply(u)), d.matrixWorld.getInverse(d.matrixWorldInverse), f.matrixWorld.getInverse(f.matrixWorldInverse), d.projectionMatrix.fromArray(r.leftProjectionMatrix), f.projectionMatrix.fromArray(r.rightProjectionMatrix), hi(g, d, f);
			var x = n.getLayers();
			if (x.length) {
				var _ = x[0];
				null !== _.leftBounds && 4 === _.leftBounds.length && d.bounds.fromArray(_.leftBounds), null !== _.rightBounds && 4 === _.rightBounds.length && f.bounds.fromArray(_.rightBounds)
			}
			return function () {
				for (var e = 0; e < a.length; e++) {
					var t = a[e],
						n = w(e);
					if (void 0 !== n && void 0 !== n.pose) {
						if (null === n.pose) return;
						var r = n.pose;
						!1 === r.hasPosition && t.position.set(.2, -.6, -.05), null !== r.position && t.position.fromArray(r.position), null !== r.orientation && t.quaternion.fromArray(r.orientation), t.matrix.compose(t.position, t.quaternion, t.scale), t.matrix.premultiply(o), t.matrix.decompose(t.position, t.quaternion, t.scale), t.matrixWorldNeedsUpdate = !0, t.visible = !0;
						var i = "Daydream Controller" === n.id ? 0 : 1;
						b[e] !== n.buttons[i].pressed && (b[e] = n.buttons[i].pressed, !0 === b[e] ? t.dispatchEvent({
							type: "selectstart"
						}) : (t.dispatchEvent({
							type: "selectend"
						}), t.dispatchEvent({
							type: "select"
						})))
					} else t.visible = !1
				}
			}(), g
		}, this.getStandingMatrix = function () {
			return o
		}, this.isPresenting = y;
		var _ = new un;
		this.setAnimationLoop = function (e) {
			_.setAnimationLoop(e)
		}, this.submitFrame = function () {
			y() && n.submitFrame()
		}, this.dispose = function () {
			"undefined" != typeof window && window.removeEventListener("vrdisplaypresentchange", x)
		}
	}

	function di(e) {
		console.log("THREE.WebGLRenderer", M);
		var t = void 0 !== (e = e || {}).canvas ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
			n = void 0 !== e.context ? e.context : null,
			r = void 0 !== e.alpha && e.alpha,
			i = void 0 === e.depth || e.depth,
			a = void 0 === e.stencil || e.stencil,
			o = void 0 !== e.antialias && e.antialias,
			s = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
			l = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
			c = void 0 !== e.powerPreference ? e.powerPreference : "default",
			u = null,
			h = null;
		this.domElement = t, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = me, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
		var p, d, f, m, v, g, y, x, b, w, _, C, A, O, k, I, he, pe, de = this,
			fe = !1,
			ve = null,
			ge = null,
			ye = null,
			xe = -1,
			be = {
				geometry: null,
				program: null,
				wireframe: !1
			},
			we = null,
			_e = null,
			Me = new Jt,
			Se = new Jt,
			Te = null,
			St = 0,
			Tt = t.width,
			Pt = t.height,
			Lt = 1,
			Rt = new Jt(0, 0, Tt, Pt),
			Ot = new Jt(0, 0, Tt, Pt),
			kt = !1,
			It = new nn,
			Nt = new function () {
				var e = this,
					t = null,
					n = 0,
					r = !1,
					i = !1,
					a = new tn,
					o = new Wt,
					s = {
						value: null,
						needsUpdate: !1
					};

				function l() {
					s.value !== t && (s.value = t, s.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0
				}

				function c(t, n, r, i) {
					var l = null !== t ? t.length : 0,
						c = null;
					if (0 !== l) {
						if (c = s.value, !0 !== i || null === c) {
							var u = r + 4 * l,
								h = n.matrixWorldInverse;
							o.getNormalMatrix(h), (null === c || c.length < u) && (c = new Float32Array(u));
							for (var p = 0, d = r; p !== l; ++p, d += 4) a.copy(t[p]).applyMatrix4(h, o), a.normal.toArray(c, d), c[d + 3] = a.constant
						}
						s.value = c, s.needsUpdate = !0
					}
					return e.numPlanes = l, c
				}
				this.uniform = s, this.numPlanes = 0, this.numIntersection = 0, this.init = function (e, i, a) {
					var o = 0 !== e.length || i || 0 !== n || r;
					return r = i, t = c(e, a, 0), n = e.length, o
				}, this.beginShadows = function () {
					i = !0, c(null)
				}, this.endShadows = function () {
					i = !1, l()
				}, this.setState = function (e, a, o, u, h, p) {
					if (!r || null === e || 0 === e.length || i && !o) i ? c(null) : l();
					else {
						var d = i ? 0 : n,
							f = 4 * d,
							m = h.clippingState || null;
						s.value = m, m = c(e, u, f, p);
						for (var v = 0; v !== f; ++v) m[v] = t[v];
						h.clippingState = m, this.numIntersection = a ? this.numPlanes : 0, this.numPlanes += d
					}
				}
			},
			Dt = !1,
			zt = !1,
			Ut = new Ht,
			Bt = new Vt;

		function jt() {
			return null === ge ? Lt : 1
		}
		try {
			var Gt = {
				alpha: r,
				depth: i,
				stencil: a,
				antialias: o,
				premultipliedAlpha: s,
				preserveDrawingBuffer: l,
				powerPreference: c
			};
			if (t.addEventListener("webglcontextlost", Zt, !1), t.addEventListener("webglcontextrestored", $t, !1), null === (p = n || t.getContext("webgl", Gt) || t.getContext("experimental-webgl", Gt))) throw null !== t.getContext("webgl") ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
			void 0 === p.getShaderPrecisionFormat && (p.getShaderPrecisionFormat = function () {
				return {
					rangeMin: 1,
					rangeMax: 1,
					precision: 1
				}
			})
		} catch (e) {
			console.error("THREE.WebGLRenderer: " + e.message)
		}

		function qt() {
			d = new function (e) {
				var t = {};
				return {
					get: function (n) {
						if (void 0 !== t[n]) return t[n];
						var r;
						switch (n) {
							case "WEBGL_depth_texture":
								r = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
								break;
							case "EXT_texture_filter_anisotropic":
								r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
								break;
							case "WEBGL_compressed_texture_s3tc":
								r = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
								break;
							case "WEBGL_compressed_texture_pvrtc":
								r = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
								break;
							default:
								r = e.getExtension(n)
						}
						return null === r && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), t[n] = r, r
					}
				}
			}(p), (f = new function (e, t, n) {
				var r;

				function i(t) {
					if ("highp" === t) {
						if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
						t = "mediump"
					}
					return "mediump" === t && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
				}
				var a = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext,
					o = void 0 !== n.precision ? n.precision : "highp",
					s = i(o);
				s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);
				var l = !0 === n.logarithmicDepthBuffer,
					c = e.getParameter(34930),
					u = e.getParameter(35660),
					h = e.getParameter(3379),
					p = e.getParameter(34076),
					d = e.getParameter(34921),
					f = e.getParameter(36347),
					m = e.getParameter(36348),
					v = e.getParameter(36349),
					g = u > 0,
					y = a || !!t.get("OES_texture_float");
				return {
					isWebGL2: a,
					getMaxAnisotropy: function () {
						if (void 0 !== r) return r;
						var n = t.get("EXT_texture_filter_anisotropic");
						return r = null !== n ? e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
					},
					getMaxPrecision: i,
					precision: o,
					logarithmicDepthBuffer: l,
					maxTextures: c,
					maxVertexTextures: u,
					maxTextureSize: h,
					maxCubemapSize: p,
					maxAttributes: d,
					maxVertexUniforms: f,
					maxVaryings: m,
					maxFragmentUniforms: v,
					vertexTextures: g,
					floatFragmentTextures: y,
					floatVertexTextures: g && y
				}
			}(p, d, e)).isWebGL2 || (d.get("WEBGL_depth_texture"), d.get("OES_texture_float"), d.get("OES_texture_half_float"), d.get("OES_texture_half_float_linear"), d.get("OES_standard_derivatives"), d.get("OES_element_index_uint"), d.get("ANGLE_instanced_arrays")), d.get("OES_texture_float_linear"), pe = new function (e, t, n) {
				return {
					convert: function (e) {
						var r;
						if (e === Ee) return 10497;
						if (e === Ce) return 33071;
						if (e === Ae) return 33648;
						if (e === Pe) return 9728;
						if (e === Le) return 9984;
						if (e === Re) return 9986;
						if (e === Oe) return 9729;
						if (e === ke) return 9985;
						if (e === Ie) return 9987;
						if (e === Ne) return 5121;
						if (e === Ge) return 32819;
						if (e === Ve) return 32820;
						if (e === We) return 33635;
						if (e === De) return 5120;
						if (e === ze) return 5122;
						if (e === Ue) return 5123;
						if (e === Be) return 5124;
						if (e === Fe) return 5125;
						if (e === je) return 5126;
						if (e === He) {
							if (n.isWebGL2) return 5131;
							if (null !== (r = t.get("OES_texture_half_float"))) return r.HALF_FLOAT_OES
						}
						if (e === Xe) return 6406;
						if (e === Ye) return 6407;
						if (e === Je) return 6408;
						if (e === Ze) return 6409;
						if (e === $e) return 6410;
						if (e === Qe) return 6402;
						if (e === Ke) return 34041;
						if (e === et) return 6403;
						if (e === j) return 32774;
						if (e === H) return 32778;
						if (e === G) return 32779;
						if (e === q) return 0;
						if (e === X) return 1;
						if (e === Y) return 768;
						if (e === J) return 769;
						if (e === Z) return 770;
						if (e === $) return 771;
						if (e === Q) return 772;
						if (e === K) return 773;
						if (e === ee) return 774;
						if (e === te) return 775;
						if (e === ne) return 776;
						if ((e === tt || e === nt || e === rt || e === it) && null !== (r = t.get("WEBGL_compressed_texture_s3tc"))) {
							if (e === tt) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
							if (e === nt) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
							if (e === rt) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
							if (e === it) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
						}
						if ((e === at || e === ot || e === st || e === lt) && null !== (r = t.get("WEBGL_compressed_texture_pvrtc"))) {
							if (e === at) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
							if (e === ot) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
							if (e === st) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
							if (e === lt) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
						}
						if (e === ct && null !== (r = t.get("WEBGL_compressed_texture_etc1"))) return r.COMPRESSED_RGB_ETC1_WEBGL;
						if ((e === ut || e === ht || e === pt || e === dt || e === ft || e === mt || e === vt || e === gt || e === yt || e === xt || e === bt || e === wt || e === _t || e === Mt) && null !== (r = t.get("WEBGL_compressed_texture_astc"))) return e;
						if (e === V || e === W) {
							if (n.isWebGL2) {
								if (e === V) return 32775;
								if (e === W) return 32776
							}
							if (null !== (r = t.get("EXT_blend_minmax"))) {
								if (e === V) return r.MIN_EXT;
								if (e === W) return r.MAX_EXT
							}
						}
						if (e === qe) {
							if (n.isWebGL2) return 34042;
							if (null !== (r = t.get("WEBGL_depth_texture"))) return r.UNSIGNED_INT_24_8_WEBGL
						}
						return 0
					}
				}
			}(p, d, f), (m = new function (e, t, n, r) {
				var i = new function () {
						var t = !1,
							n = new Jt,
							r = null,
							i = new Jt(0, 0, 0, 0);
						return {
							setMask: function (n) {
								r === n || t || (e.colorMask(n, n, n, n), r = n)
							},
							setLocked: function (e) {
								t = e
							},
							setClear: function (t, r, a, o, s) {
								!0 === s && (t *= o, r *= o, a *= o), n.set(t, r, a, o), !1 === i.equals(n) && (e.clearColor(t, r, a, o), i.copy(n))
							},
							reset: function () {
								t = !1, r = null, i.set(-1, 0, 0, 0)
							}
						}
					},
					a = new function () {
						var t = !1,
							n = null,
							r = null,
							i = null;
						return {
							setTest: function (e) {
								e ? $(2929) : Q(2929)
							},
							setMask: function (r) {
								n === r || t || (e.depthMask(r), n = r)
							},
							setFunc: function (t) {
								if (r !== t) {
									if (t) switch (t) {
										case re:
											e.depthFunc(512);
											break;
										case ie:
											e.depthFunc(519);
											break;
										case ae:
											e.depthFunc(513);
											break;
										case oe:
											e.depthFunc(515);
											break;
										case se:
											e.depthFunc(514);
											break;
										case le:
											e.depthFunc(518);
											break;
										case ce:
											e.depthFunc(516);
											break;
										case ue:
											e.depthFunc(517);
											break;
										default:
											e.depthFunc(515)
									} else e.depthFunc(515);
									r = t
								}
							},
							setLocked: function (e) {
								t = e
							},
							setClear: function (t) {
								i !== t && (e.clearDepth(t), i = t)
							},
							reset: function () {
								t = !1, n = null, r = null, i = null
							}
						}
					},
					o = new function () {
						var t = !1,
							n = null,
							r = null,
							i = null,
							a = null,
							o = null,
							s = null,
							l = null,
							c = null;
						return {
							setTest: function (e) {
								e ? $(2960) : Q(2960)
							},
							setMask: function (r) {
								n === r || t || (e.stencilMask(r), n = r)
							},
							setFunc: function (t, n, o) {
								r === t && i === n && a === o || (e.stencilFunc(t, n, o), r = t, i = n, a = o)
							},
							setOp: function (t, n, r) {
								o === t && s === n && l === r || (e.stencilOp(t, n, r), o = t, s = n, l = r)
							},
							setLocked: function (e) {
								t = e
							},
							setClear: function (t) {
								c !== t && (e.clearStencil(t), c = t)
							},
							reset: function () {
								t = !1, n = null, r = null, i = null, a = null, o = null, s = null, l = null, c = null
							}
						}
					},
					s = e.getParameter(34921),
					l = new Uint8Array(s),
					c = new Uint8Array(s),
					u = new Uint8Array(s),
					h = {},
					p = null,
					d = null,
					f = null,
					m = null,
					v = null,
					g = null,
					y = null,
					x = null,
					b = null,
					w = null,
					_ = !1,
					M = null,
					C = null,
					A = null,
					P = null,
					O = null,
					k = e.getParameter(35661),
					I = !1,
					H = 0,
					G = e.getParameter(7938); - 1 !== G.indexOf("WebGL") ? (H = parseFloat(/^WebGL\ ([0-9])/.exec(G)[1]), I = H >= 1) : -1 !== G.indexOf("OpenGL ES") && (H = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(G)[1]), I = H >= 2);
				var V = null,
					W = {},
					q = new Jt,
					X = new Jt;

				function Y(t, n, r) {
					var i = new Uint8Array(4),
						a = e.createTexture();
					e.bindTexture(t, a), e.texParameteri(t, 10241, 9728), e.texParameteri(t, 10240, 9728);
					for (var o = 0; o < r; o++) e.texImage2D(n + o, 0, 6408, 1, 1, 0, 6408, 5121, i);
					return a
				}
				var J = {};

				function Z(n, i) {
					l[n] = 1, 0 === c[n] && (e.enableVertexAttribArray(n), c[n] = 1), u[n] !== i && ((r.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[r.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, i), u[n] = i)
				}

				function $(t) {
					!0 !== h[t] && (e.enable(t), h[t] = !0)
				}

				function Q(t) {
					!1 !== h[t] && (e.disable(t), h[t] = !1)
				}

				function K(t, r, i, a, o, s, l, c) {
					if (t !== N) {
						if (f || ($(3042), f = !0), t === F) o = o || r, s = s || i, l = l || a, r === v && o === x || (e.blendEquationSeparate(n.convert(r), n.convert(o)), v = r, x = o), i === g && a === y && s === b && l === w || (e.blendFuncSeparate(n.convert(i), n.convert(a), n.convert(s), n.convert(l)), g = i, y = a, b = s, w = l), m = t, _ = null;
						else if (t !== m || c !== _) {
							if (v === j && x === j || (e.blendEquation(32774), v = j, x = j), c) switch (t) {
								case D:
									e.blendFuncSeparate(1, 771, 1, 771);
									break;
								case z:
									e.blendFunc(1, 1);
									break;
								case U:
									e.blendFuncSeparate(0, 0, 769, 771);
									break;
								case B:
									e.blendFuncSeparate(0, 768, 0, 770);
									break;
								default:
									console.error("THREE.WebGLState: Invalid blending: ", t)
							} else switch (t) {
								case D:
									e.blendFuncSeparate(770, 771, 1, 771);
									break;
								case z:
									e.blendFunc(770, 1);
									break;
								case U:
									e.blendFunc(0, 769);
									break;
								case B:
									e.blendFunc(0, 768);
									break;
								default:
									console.error("THREE.WebGLState: Invalid blending: ", t)
							}
							g = null, y = null, b = null, w = null, m = t, _ = c
						}
					} else f && (Q(3042), f = !1)
				}

				function ee(t) {
					M !== t && (t ? e.frontFace(2304) : e.frontFace(2305), M = t)
				}

				function te(t) {
					t !== S ? ($(2884), t !== C && (t === T ? e.cullFace(1029) : t === E ? e.cullFace(1028) : e.cullFace(1032))) : Q(2884), C = t
				}

				function ne(t, n, r) {
					t ? ($(32823), P === n && O === r || (e.polygonOffset(n, r), P = n, O = r)) : Q(32823)
				}

				function he(t) {
					void 0 === t && (t = 33984 + k - 1), V !== t && (e.activeTexture(t), V = t)
				}
				return J[3553] = Y(3553, 3553, 1), J[34067] = Y(34067, 34069, 6), i.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), $(2929), a.setFunc(oe), ee(!1), te(T), $(2884), K(N), {
					buffers: {
						color: i,
						depth: a,
						stencil: o
					},
					initAttributes: function () {
						for (var e = 0, t = l.length; e < t; e++) l[e] = 0
					},
					enableAttribute: function (e) {
						Z(e, 0)
					},
					enableAttributeAndDivisor: Z,
					disableUnusedAttributes: function () {
						for (var t = 0, n = c.length; t !== n; ++t) c[t] !== l[t] && (e.disableVertexAttribArray(t), c[t] = 0)
					},
					enable: $,
					disable: Q,
					getCompressedTextureFormats: function () {
						if (null === p && (p = [], t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc") || t.get("WEBGL_compressed_texture_etc1") || t.get("WEBGL_compressed_texture_astc")))
							for (var n = e.getParameter(34467), r = 0; r < n.length; r++) p.push(n[r]);
						return p
					},
					useProgram: function (t) {
						return d !== t && (e.useProgram(t), d = t, !0)
					},
					setBlending: K,
					setMaterial: function (e, t) {
						e.side === R ? Q(2884) : $(2884);
						var n = e.side === L;
						t && (n = !n), ee(n), e.blending === D && !1 === e.transparent ? K(N) : K(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha), a.setFunc(e.depthFunc), a.setTest(e.depthTest), a.setMask(e.depthWrite), i.setMask(e.colorWrite), ne(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
					},
					setFlipSided: ee,
					setCullFace: te,
					setLineWidth: function (t) {
						t !== A && (I && e.lineWidth(t), A = t)
					},
					setPolygonOffset: ne,
					setScissorTest: function (e) {
						e ? $(3089) : Q(3089)
					},
					activeTexture: he,
					bindTexture: function (t, n) {
						null === V && he();
						var r = W[V];
						void 0 === r && (r = {
							type: void 0,
							texture: void 0
						}, W[V] = r), r.type === t && r.texture === n || (e.bindTexture(t, n || J[t]), r.type = t, r.texture = n)
					},
					compressedTexImage2D: function () {
						try {
							e.compressedTexImage2D.apply(e, arguments)
						} catch (e) {
							console.error("THREE.WebGLState:", e)
						}
					},
					texImage2D: function () {
						try {
							e.texImage2D.apply(e, arguments)
						} catch (e) {
							console.error("THREE.WebGLState:", e)
						}
					},
					texImage3D: function () {
						try {
							e.texImage3D.apply(e, arguments)
						} catch (e) {
							console.error("THREE.WebGLState:", e)
						}
					},
					scissor: function (t) {
						!1 === q.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), q.copy(t))
					},
					viewport: function (t) {
						!1 === X.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), X.copy(t))
					},
					reset: function () {
						for (var t = 0; t < c.length; t++) 1 === c[t] && (e.disableVertexAttribArray(t), c[t] = 0);
						h = {}, p = null, V = null, W = {}, d = null, m = null, M = null, C = null, i.reset(), a.reset(), o.reset()
					}
				}
			}(p, d, pe, f)).scissor(Se.copy(Ot).multiplyScalar(Lt)), m.viewport(Me.copy(Rt).multiplyScalar(Lt)), v = new function (e) {
				var t = {
					frame: 0,
					calls: 0,
					triangles: 0,
					points: 0,
					lines: 0
				};
				return {
					memory: {
						geometries: 0,
						textures: 0
					},
					render: t,
					programs: null,
					autoReset: !0,
					reset: function () {
						t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0
					},
					update: function (e, n, r) {
						switch (r = r || 1, t.calls++, n) {
							case 4:
								t.triangles += r * (e / 3);
								break;
							case 5:
							case 6:
								t.triangles += r * (e - 2);
								break;
							case 1:
								t.lines += r * (e / 2);
								break;
							case 3:
								t.lines += r * (e - 1);
								break;
							case 2:
								t.lines += r * e;
								break;
							case 0:
								t.points += r * e;
								break;
							default:
								console.error("THREE.WebGLInfo: Unknown draw mode:", n)
						}
					}
				}
			}(p), g = new function () {
				var e = new WeakMap;
				return {
					get: function (t) {
						var n = e.get(t);
						return void 0 === n && (n = {}, e.set(t, n)), n
					},
					remove: function (t) {
						e.delete(t)
					},
					update: function (t, n, r) {
						e.get(t)[n] = r
					},
					dispose: function () {
						e = new WeakMap
					}
				}
			}, y = new ri(p, d, m, g, f, pe, v), x = new hn(p), b = new function (e, t, n) {
				var r = {},
					i = {};

				function a(e) {
					var o = e.target,
						s = r[o.id];
					for (var l in null !== s.index && t.remove(s.index), s.attributes) t.remove(s.attributes[l]);
					o.removeEventListener("dispose", a), delete r[o.id];
					var c = i[s.id];
					c && (t.remove(c), delete i[s.id]), n.memory.geometries--
				}
				return {
					get: function (e, t) {
						var i = r[t.id];
						return i || (t.addEventListener("dispose", a), t.isBufferGeometry ? i = t : t.isGeometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new On).setFromObject(e)), i = t._bufferGeometry), r[t.id] = i, n.memory.geometries++, i)
					},
					update: function (e) {
						var n = e.index,
							r = e.attributes;
						for (var i in null !== n && t.update(n, 34963), r) t.update(r[i], 34962);
						var a = e.morphAttributes;
						for (var i in a)
							for (var o = a[i], s = 0, l = o.length; s < l; s++) t.update(o[s], 34962)
					},
					getWireframeAttribute: function (e) {
						var n = i[e.id];
						if (n) return n;
						var r, a = [],
							o = e.index,
							s = e.attributes;
						if (null !== o)
							for (var l = 0, c = (r = o.array).length; l < c; l += 3) {
								var u = r[l + 0],
									h = r[l + 1],
									p = r[l + 2];
								a.push(u, h, h, p, p, u)
							} else
								for (l = 0, c = (r = s.position.array).length / 3 - 1; l < c; l += 3) u = l + 0, h = l + 1, p = l + 2, a.push(u, h, h, p, p, u);
						return n = new(Ln(a) > 65535 ? En : Sn)(a, 1), t.update(n, 34963), i[e.id] = n, n
					}
				}
			}(p, x, v), w = new function (e, t) {
				var n = {};
				return {
					update: function (r) {
						var i = t.render.frame,
							a = r.geometry,
							o = e.get(r, a);
						return n[o.id] !== i && (a.isGeometry && o.updateFromObject(r), e.update(o), n[o.id] = i), o
					},
					dispose: function () {
						n = {}
					}
				}
			}(b, v), k = new function (e) {
				var t = {},
					n = new Float32Array(8);
				return {
					update: function (r, i, a, o) {
						var s = r.morphTargetInfluences,
							l = s.length,
							c = t[i.id];
						if (void 0 === c) {
							c = [];
							for (var u = 0; u < l; u++) c[u] = [u, 0];
							t[i.id] = c
						}
						var h = a.morphTargets && i.morphAttributes.position,
							p = a.morphNormals && i.morphAttributes.normal;
						for (u = 0; u < l; u++) 0 !== (d = c[u])[1] && (h && i.removeAttribute("morphTarget" + u), p && i.removeAttribute("morphNormal" + u));
						for (u = 0; u < l; u++)(d = c[u])[0] = u, d[1] = s[u];
						for (c.sort(Vn), u = 0; u < 8; u++) {
							var d;
							if (d = c[u]) {
								var f = d[0],
									m = d[1];
								if (m) {
									h && i.addAttribute("morphTarget" + u, h[f]), p && i.addAttribute("morphNormal" + u, p[f]), n[u] = m;
									continue
								}
							}
							n[u] = 0
						}
						o.getUniforms().setValue(e, "morphTargetInfluences", n)
					}
				}
			}(p), _ = new Xr(de, d, f), C = new Zr, A = new function () {
				var e = {};
				return {
					get: function (t, n) {
						var r;
						return void 0 === e[t.id] ? (r = new Kr, e[t.id] = {}, e[t.id][n.id] = r) : void 0 === e[t.id][n.id] ? (r = new Kr, e[t.id][n.id] = r) : r = e[t.id][n.id], r
					},
					dispose: function () {
						e = {}
					}
				}
			}, O = new function (e, t, n, r) {
				var i, a, o = new sn(0),
					s = 0;

				function l(e, n) {
					t.buffers.color.setClear(e.r, e.g, e.b, n, r)
				}
				return {
					getClearColor: function () {
						return o
					},
					setClearColor: function (e, t) {
						o.set(e), l(o, s = void 0 !== t ? t : 1)
					},
					getClearAlpha: function () {
						return s
					},
					setClearAlpha: function (e) {
						l(o, s = e)
					},
					render: function (t, r, c, u) {
						var h = r.background;
						null === h ? l(o, s) : h && h.isColor && (l(h, 1), u = !0), (e.autoClear || u) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), h && (h.isCubeTexture || h.isWebGLRenderTargetCube) ? (void 0 === a && ((a = new Gn(new In(1, 1, 1), new Bn({
							type: "BackgroundCubeMaterial",
							uniforms: an.clone(cn.cube.uniforms),
							vertexShader: cn.cube.vertexShader,
							fragmentShader: cn.cube.fragmentShader,
							side: L,
							depthTest: !0,
							depthWrite: !1,
							fog: !1
						}))).geometry.removeAttribute("normal"), a.geometry.removeAttribute("uv"), a.onBeforeRender = function (e, t, n) {
							this.matrixWorld.copyPosition(n.matrixWorld)
						}, n.update(a)), a.material.uniforms.tCube.value = h.isWebGLRenderTargetCube ? h.texture : h, a.material.uniforms.tFlip.value = h.isWebGLRenderTargetCube ? 1 : -1, t.push(a, a.geometry, a.material, 0, null)) : h && h.isTexture && (void 0 === i && ((i = new Gn(new Dn(2, 2), new Bn({
							type: "BackgroundMaterial",
							uniforms: an.clone(cn.background.uniforms),
							vertexShader: cn.background.vertexShader,
							fragmentShader: cn.background.fragmentShader,
							side: P,
							depthTest: !0,
							depthWrite: !1,
							fog: !1
						}))).geometry.removeAttribute("normal"), n.update(i)), i.material.uniforms.t2D.value = h, !0 === h.matrixAutoUpdate && h.updateMatrix(), i.material.uniforms.uvTransform.value.copy(h.matrix), t.push(i, i.geometry, i.material, 0, null))
					}
				}
			}(de, m, w, s), I = new function (e, t, n, r) {
				var i;
				this.setMode = function (e) {
					i = e
				}, this.render = function (t, r) {
					e.drawArrays(i, t, r), n.update(r, i)
				}, this.renderInstances = function (a, o, s) {
					var l;
					if (r.isWebGL2) l = e;
					else if (null === (l = t.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
					l[r.isWebGL2 ? "drawArraysInstanced" : "drawArraysInstancedANGLE"](i, o, s, a.maxInstancedCount), n.update(s, i, a.maxInstancedCount)
				}
			}(p, d, v, f), he = new function (e, t, n, r) {
				var i, a, o;
				this.setMode = function (e) {
					i = e
				}, this.setIndex = function (e) {
					a = e.type, o = e.bytesPerElement
				}, this.render = function (t, r) {
					e.drawElements(i, r, a, t * o), n.update(r, i)
				}, this.renderInstances = function (s, l, c) {
					var u;
					if (r.isWebGL2) u = e;
					else if (null === (u = t.get("ANGLE_instanced_arrays"))) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
					u[r.isWebGL2 ? "drawElementsInstanced" : "drawElementsInstancedANGLE"](i, c, a, l * o, s.maxInstancedCount), n.update(c, i, s.maxInstancedCount)
				}
			}(p, d, v, f), v.programs = _.programs, de.context = p, de.capabilities = f, de.extensions = d, de.properties = g, de.renderLists = C, de.state = m, de.info = v
		}
		qt();
		var Xt = null;
		"undefined" != typeof navigator && (Xt = "xr" in navigator ? new function (e) {
			var t = e.context,
				n = null,
				r = null,
				i = 1,
				a = null,
				o = "stage",
				s = null,
				l = [],
				c = [];

			function u() {
				return null !== r && null !== a
			}
			var h = new oi;
			h.layers.enable(1), h.viewport = new Jt;
			var p = new oi;
			p.layers.enable(2), p.viewport = new Jt;
			var d = new si([h, p]);

			function f(e) {
				var t = l[c.indexOf(e.inputSource)];
				t && t.dispatchEvent({
					type: e.type
				})
			}

			function m() {
				e.setFramebuffer(null), y.stop()
			}

			function v(e, t) {
				null === t ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.getInverse(e.matrixWorld)
			}
			d.layers.enable(1), d.layers.enable(2), this.enabled = !1, this.getController = function (e) {
				var t = l[e];
				return void 0 === t && ((t = new ii).matrixAutoUpdate = !1, t.visible = !1, l[e] = t), t
			}, this.getDevice = function () {
				return n
			}, this.setDevice = function (e) {
				void 0 !== e && (n = e), e instanceof XRDevice && t.setCompatibleXRDevice(e)
			}, this.setFramebufferScaleFactor = function (e) {
				i = e
			}, this.setFrameOfReferenceType = function (e) {
				o = e
			}, this.setSession = function (n) {
				null !== (r = n) && (r.addEventListener("select", f), r.addEventListener("selectstart", f), r.addEventListener("selectend", f), r.addEventListener("end", m), r.baseLayer = new XRWebGLLayer(r, t, {
					framebufferScaleFactor: i
				}), r.requestFrameOfReference(o).then(function (t) {
					a = t, e.setFramebuffer(r.baseLayer.framebuffer), y.setContext(r), y.start()
				}), c = r.getInputSources(), r.addEventListener("inputsourceschange", function () {
					c = r.getInputSources(), console.log(c);
					for (var e = 0; e < l.length; e++) l[e].userData.inputSource = c[e]
				}))
			}, this.getCamera = function (e) {
				if (u()) {
					var t = e.parent,
						n = d.cameras;
					v(d, t);
					for (var r = 0; r < n.length; r++) v(n[r], t);
					e.matrixWorld.copy(d.matrixWorld);
					for (var i = e.children, a = (r = 0, i.length); r < a; r++) i[r].updateMatrixWorld(!0);
					return hi(d, h, p), d
				}
				return e
			}, this.isPresenting = u;
			var g = null,
				y = new un;
			y.setAnimationLoop(function (e, t) {
				if (null !== (s = t.getDevicePose(a)))
					for (var n = r.baseLayer, i = t.views, o = 0; o < i.length; o++) {
						var u = i[o],
							h = n.getViewport(u),
							p = s.getViewMatrix(u),
							f = d.cameras[o];
						f.matrix.fromArray(p).getInverse(f.matrix), f.projectionMatrix.fromArray(u.projectionMatrix), f.viewport.set(h.x, h.y, h.width, h.height), 0 === o && d.matrix.copy(f.matrix)
					}
				for (o = 0; o < l.length; o++) {
					var m = l[o],
						v = c[o];
					if (v) {
						var y = t.getInputPose(v, a);
						if (null !== y) {
							"targetRay" in y ? m.matrix.elements = y.targetRay.transformMatrix : "pointerMatrix" in y && (m.matrix.elements = y.pointerMatrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.visible = !0;
							continue
						}
					}
					m.visible = !1
				}
				g && g(e)
			}), this.setAnimationLoop = function (e) {
				g = e
			}, this.dispose = function () {}, this.getStandingMatrix = function () {
				return console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed."), new THREE.Matrix4
			}, this.submitFrame = function () {}
		}(de) : new pi(de)), this.vr = Xt;
		var Yt = new ni(de, w, f.maxTextureSize);

		function Zt(e) {
			e.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), fe = !0
		}

		function $t() {
			console.log("THREE.WebGLRenderer: Context Restored."), fe = !1, qt()
		}

		function Kt(e) {
			var t = e.target;
			t.removeEventListener("dispose", Kt),
				function (e) {
					en(e), g.remove(e)
				}(t)
		}

		function en(e) {
			var t = g.get(e).program;
			e.program = void 0, void 0 !== t && _.releaseProgram(t)
		}
		this.shadowMap = Yt, this.getContext = function () {
			return p
		}, this.getContextAttributes = function () {
			return p.getContextAttributes()
		}, this.forceContextLoss = function () {
			var e = d.get("WEBGL_lose_context");
			e && e.loseContext()
		}, this.forceContextRestore = function () {
			var e = d.get("WEBGL_lose_context");
			e && e.restoreContext()
		}, this.getPixelRatio = function () {
			return Lt
		}, this.setPixelRatio = function (e) {
			void 0 !== e && (Lt = e, this.setSize(Tt, Pt, !1))
		}, this.getSize = function () {
			return {
				width: Tt,
				height: Pt
			}
		}, this.setSize = function (e, n, r) {
			Xt.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (Tt = e, Pt = n, t.width = e * Lt, t.height = n * Lt, !1 !== r && (t.style.width = e + "px", t.style.height = n + "px"), this.setViewport(0, 0, e, n))
		}, this.getDrawingBufferSize = function () {
			return {
				width: Tt * Lt,
				height: Pt * Lt
			}
		}, this.setDrawingBufferSize = function (e, n, r) {
			Tt = e, Pt = n, Lt = r, t.width = e * r, t.height = n * r, this.setViewport(0, 0, e, n)
		}, this.getCurrentViewport = function () {
			return Me
		}, this.setViewport = function (e, t, n, r) {
			Rt.set(e, Pt - t - r, n, r), m.viewport(Me.copy(Rt).multiplyScalar(Lt))
		}, this.setScissor = function (e, t, n, r) {
			Ot.set(e, Pt - t - r, n, r), m.scissor(Se.copy(Ot).multiplyScalar(Lt))
		}, this.setScissorTest = function (e) {
			m.setScissorTest(kt = e)
		}, this.getClearColor = function () {
			return O.getClearColor()
		}, this.setClearColor = function () {
			O.setClearColor.apply(O, arguments)
		}, this.getClearAlpha = function () {
			return O.getClearAlpha()
		}, this.setClearAlpha = function () {
			O.setClearAlpha.apply(O, arguments)
		}, this.clear = function (e, t, n) {
			var r = 0;
			(void 0 === e || e) && (r |= 16384), (void 0 === t || t) && (r |= 256), (void 0 === n || n) && (r |= 1024), p.clear(r)
		}, this.clearColor = function () {
			this.clear(!0, !1, !1)
		}, this.clearDepth = function () {
			this.clear(!1, !0, !1)
		}, this.clearStencil = function () {
			this.clear(!1, !1, !0)
		}, this.dispose = function () {
			t.removeEventListener("webglcontextlost", Zt, !1), t.removeEventListener("webglcontextrestored", $t, !1), C.dispose(), A.dispose(), g.dispose(), w.dispose(), Xt.dispose(), on.stop()
		}, this.renderBufferImmediate = function (e, t) {
			m.initAttributes();
			var n = g.get(e);
			e.hasPositions && !n.position && (n.position = p.createBuffer()), e.hasNormals && !n.normal && (n.normal = p.createBuffer()), e.hasUvs && !n.uv && (n.uv = p.createBuffer()), e.hasColors && !n.color && (n.color = p.createBuffer());
			var r = t.getAttributes();
			e.hasPositions && (p.bindBuffer(34962, n.position), p.bufferData(34962, e.positionArray, 35048), m.enableAttribute(r.position), p.vertexAttribPointer(r.position, 3, 5126, !1, 0, 0)), e.hasNormals && (p.bindBuffer(34962, n.normal), p.bufferData(34962, e.normalArray, 35048), m.enableAttribute(r.normal), p.vertexAttribPointer(r.normal, 3, 5126, !1, 0, 0)), e.hasUvs && (p.bindBuffer(34962, n.uv), p.bufferData(34962, e.uvArray, 35048), m.enableAttribute(r.uv), p.vertexAttribPointer(r.uv, 2, 5126, !1, 0, 0)), e.hasColors && (p.bindBuffer(34962, n.color), p.bufferData(34962, e.colorArray, 35048), m.enableAttribute(r.color), p.vertexAttribPointer(r.color, 3, 5126, !1, 0, 0)), m.disableUnusedAttributes(), p.drawArrays(4, 0, e.count), e.count = 0
		}, this.renderBufferDirect = function (e, t, n, r, i, a) {
			var o = i.isMesh && i.normalMatrix.determinant() < 0;
			m.setMaterial(r, o);
			var s = mn(e, t, r, i),
				l = !1;
			be.geometry === n.id && be.program === s.id && be.wireframe === (!0 === r.wireframe) || (be.geometry = n.id, be.program = s.id, be.wireframe = !0 === r.wireframe, l = !0), i.morphTargetInfluences && (k.update(i, n, r, s), l = !0);
			var c, u = n.index,
				h = n.attributes.position,
				v = 1;
			!0 === r.wireframe && (u = b.getWireframeAttribute(n), v = 2);
			var g = I;
			null !== u && (c = x.get(u), (g = he).setIndex(c)), l && (! function (e, t, n) {
				if (n && n.isInstancedBufferGeometry & !f.isWebGL2 && null === d.get("ANGLE_instanced_arrays")) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
				m.initAttributes();
				var r = n.attributes,
					i = t.getAttributes(),
					a = e.defaultAttributeValues;
				for (var o in i) {
					var s = i[o];
					if (s >= 0) {
						var l = r[o];
						if (void 0 !== l) {
							var c = l.normalized,
								u = l.itemSize,
								h = x.get(l);
							if (void 0 === h) continue;
							var v = h.buffer,
								g = h.type,
								y = h.bytesPerElement;
							if (l.isInterleavedBufferAttribute) {
								var b = l.data,
									w = b.stride,
									_ = l.offset;
								b && b.isInstancedInterleavedBuffer ? (m.enableAttributeAndDivisor(s, b.meshPerAttribute), void 0 === n.maxInstancedCount && (n.maxInstancedCount = b.meshPerAttribute * b.count)) : m.enableAttribute(s), p.bindBuffer(34962, v), p.vertexAttribPointer(s, u, g, c, w * y, _ * y)
							} else l.isInstancedBufferAttribute ? (m.enableAttributeAndDivisor(s, l.meshPerAttribute), void 0 === n.maxInstancedCount && (n.maxInstancedCount = l.meshPerAttribute * l.count)) : m.enableAttribute(s), p.bindBuffer(34962, v), p.vertexAttribPointer(s, u, g, c, 0, 0)
						} else if (void 0 !== a) {
							var M = a[o];
							if (void 0 !== M) switch (M.length) {
								case 2:
									p.vertexAttrib2fv(s, M);
									break;
								case 3:
									p.vertexAttrib3fv(s, M);
									break;
								case 4:
									p.vertexAttrib4fv(s, M);
									break;
								default:
									p.vertexAttrib1fv(s, M)
							}
						}
					}
				}
				m.disableUnusedAttributes()
			}(r, s, n), null !== u && p.bindBuffer(34963, c.buffer));
			var y = 1 / 0;
			null !== u ? y = u.count : void 0 !== h && (y = h.count);
			var w = n.drawRange.start * v,
				_ = n.drawRange.count * v,
				M = null !== a ? a.start * v : 0,
				S = null !== a ? a.count * v : 1 / 0,
				T = Math.max(w, M),
				E = Math.min(y, w + _, M + S) - 1,
				C = Math.max(0, E - T + 1);
			if (0 !== C) {
				if (i.isMesh)
					if (!0 === r.wireframe) m.setLineWidth(r.wireframeLinewidth * jt()), g.setMode(1);
					else switch (i.drawMode) {
						case Et:
							g.setMode(4);
							break;
						case Ct:
							g.setMode(5);
							break;
						case At:
							g.setMode(6)
					} else if (i.isLine) {
						var A = r.linewidth;
						void 0 === A && (A = 1), m.setLineWidth(A * jt()), i.isLineSegments ? g.setMode(1) : i.isLineLoop ? g.setMode(2) : g.setMode(3)
					} else i.isPoints ? g.setMode(0) : i.isSprite && g.setMode(4);
				n && n.isInstancedBufferGeometry ? n.maxInstancedCount > 0 && g.renderInstances(n, T, C) : g.render(T, C)
			}
		}, this.compile = function (e, t) {
			(h = A.get(e, t)).init(), e.traverse(function (e) {
				e.isLight && (h.pushLight(e), e.castShadow && h.pushShadow(e))
			}), h.setupLights(t), e.traverse(function (t) {
				if (t.material)
					if (Array.isArray(t.material))
						for (var n = 0; n < t.material.length; n++) fn(t.material[n], e.fog, t);
					else fn(t.material, e.fog, t)
			})
		};
		var rn = null;
		var on = new un;

		function pn(e, t, n, r) {
			for (var i = 0, a = e.length; i < a; i++) {
				var o = e[i],
					s = o.object,
					l = o.geometry,
					c = void 0 === r ? o.material : r,
					u = o.group;
				if (n.isArrayCamera) {
					_e = n;
					for (var p = n.cameras, d = 0, f = p.length; d < f; d++) {
						var v = p[d];
						if (s.layers.test(v.layers)) {
							if ("viewport" in v) m.viewport(Me.copy(v.viewport));
							else {
								var g = v.bounds,
									y = g.x * Tt,
									x = g.y * Pt,
									b = g.z * Tt,
									w = g.w * Pt;
								m.viewport(Me.set(y, x, b, w).multiplyScalar(Lt))
							}
							h.setupLights(v), dn(s, t, v, l, c, u)
						}
					}
				} else _e = null, dn(s, t, n, l, c, u)
			}
		}

		function dn(e, t, n, r, i, a) {
			if (e.onBeforeRender(de, t, n, r, i, a), h = A.get(t, _e || n), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), e.isImmediateRenderObject) {
				m.setMaterial(i);
				var o = mn(n, t.fog, i, e);
				be.geometry = null, be.program = null, be.wireframe = !1,
					function (e, t) {
						e.render(function (e) {
							de.renderBufferImmediate(e, t)
						})
					}(e, o)
			} else de.renderBufferDirect(n, t.fog, r, i, e, a);
			e.onAfterRender(de, t, n, r, i, a), h = A.get(t, _e || n)
		}

		function fn(e, t, n) {
			var r = g.get(e),
				i = h.state.lights,
				a = h.state.shadowsArray,
				o = r.lightsHash,
				s = i.state.hash,
				l = _.getParameters(e, i.state, a, t, Nt.numPlanes, Nt.numIntersection, n),
				c = _.getProgramCode(e, l),
				u = r.program,
				p = !0;
			if (void 0 === u) e.addEventListener("dispose", Kt);
			else if (u.code !== c) en(e);
			else if (o.stateID !== s.stateID || o.directionalLength !== s.directionalLength || o.pointLength !== s.pointLength || o.spotLength !== s.spotLength || o.rectAreaLength !== s.rectAreaLength || o.hemiLength !== s.hemiLength || o.shadowsLength !== s.shadowsLength) o.stateID = s.stateID, o.directionalLength = s.directionalLength, o.pointLength = s.pointLength, o.spotLength = s.spotLength, o.rectAreaLength = s.rectAreaLength, o.hemiLength = s.hemiLength, o.shadowsLength = s.shadowsLength, p = !1;
			else {
				if (void 0 !== l.shaderID) return;
				p = !1
			}
			if (p) {
				if (l.shaderID) {
					var d = cn[l.shaderID];
					r.shader = {
						name: e.type,
						uniforms: an.clone(d.uniforms),
						vertexShader: d.vertexShader,
						fragmentShader: d.fragmentShader
					}
				} else r.shader = {
					name: e.type,
					uniforms: e.uniforms,
					vertexShader: e.vertexShader,
					fragmentShader: e.fragmentShader
				};
				e.onBeforeCompile(r.shader, de), c = _.getProgramCode(e, l), u = _.acquireProgram(e, r.shader, l, c), r.program = u, e.program = u
			}
			var f = u.getAttributes();
			if (e.morphTargets) {
				e.numSupportedMorphTargets = 0;
				for (var m = 0; m < de.maxMorphTargets; m++) f["morphTarget" + m] >= 0 && e.numSupportedMorphTargets++
			}
			if (e.morphNormals) {
				e.numSupportedMorphNormals = 0;
				for (m = 0; m < de.maxMorphNormals; m++) f["morphNormal" + m] >= 0 && e.numSupportedMorphNormals++
			}
			var v = r.shader.uniforms;
			(e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping || (r.numClippingPlanes = Nt.numPlanes, r.numIntersection = Nt.numIntersection, v.clippingPlanes = Nt.uniform), r.fog = t, void 0 === o && (r.lightsHash = o = {}), o.stateID = s.stateID, o.directionalLength = s.directionalLength, o.pointLength = s.pointLength, o.spotLength = s.spotLength, o.rectAreaLength = s.rectAreaLength, o.hemiLength = s.hemiLength, o.shadowsLength = s.shadowsLength, e.lights && (v.ambientLightColor.value = i.state.ambient, v.directionalLights.value = i.state.directional, v.spotLights.value = i.state.spot, v.rectAreaLights.value = i.state.rectArea, v.pointLights.value = i.state.point, v.hemisphereLights.value = i.state.hemi, v.directionalShadowMap.value = i.state.directionalShadowMap, v.directionalShadowMatrix.value = i.state.directionalShadowMatrix, v.spotShadowMap.value = i.state.spotShadowMap, v.spotShadowMatrix.value = i.state.spotShadowMatrix, v.pointShadowMap.value = i.state.pointShadowMap, v.pointShadowMatrix.value = i.state.pointShadowMatrix);
			var y = r.program.getUniforms(),
				x = Dr.seqWithValue(y.seq, v);
			r.uniformsList = x
		}

		function mn(e, t, n, r) {
			St = 0;
			var i = g.get(n),
				a = h.state.lights,
				o = i.lightsHash,
				s = a.state.hash;
			if (Dt && (zt || e !== we)) {
				var l = e === we && n.id === xe;
				Nt.setState(n.clippingPlanes, n.clipIntersection, n.clipShadows, e, i, l)
			}!1 === n.needsUpdate && (void 0 === i.program ? n.needsUpdate = !0 : n.fog && i.fog !== t ? n.needsUpdate = !0 : (!n.lights || o.stateID === s.stateID && o.directionalLength === s.directionalLength && o.pointLength === s.pointLength && o.spotLength === s.spotLength && o.rectAreaLength === s.rectAreaLength && o.hemiLength === s.hemiLength && o.shadowsLength === s.shadowsLength) && (void 0 === i.numClippingPlanes || i.numClippingPlanes === Nt.numPlanes && i.numIntersection === Nt.numIntersection) || (n.needsUpdate = !0)), n.needsUpdate && (fn(n, t, r), n.needsUpdate = !1);
			var c = !1,
				u = !1,
				d = !1,
				v = i.program,
				y = v.getUniforms(),
				x = i.shader.uniforms;
			if (m.useProgram(v.program) && (c = !0, u = !0, d = !0), n.id !== xe && (xe = n.id, u = !0), c || we !== e) {
				if (y.setValue(p, "projectionMatrix", e.projectionMatrix), f.logarithmicDepthBuffer && y.setValue(p, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), we !== e && (we = e, u = !0, d = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshStandardMaterial || n.envMap) {
					var b = y.map.cameraPosition;
					void 0 !== b && b.setValue(p, Bt.setFromMatrixPosition(e.matrixWorld))
				}(n.isMeshPhongMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.skinning) && y.setValue(p, "viewMatrix", e.matrixWorldInverse)
			}
			if (n.skinning) {
				y.setOptional(p, r, "bindMatrix"), y.setOptional(p, r, "bindMatrixInverse");
				var w = r.skeleton;
				if (w) {
					var _ = w.bones;
					if (f.floatVertexTextures) {
						if (void 0 === w.boneTexture) {
							var M = Math.sqrt(4 * _.length);
							M = Ft.ceilPowerOfTwo(M), M = Math.max(M, 4);
							var S = new Float32Array(M * M * 4);
							S.set(w.boneMatrices);
							var T = new Qt(S, M, M, Je, je);
							T.needsUpdate = !0, w.boneMatrices = S, w.boneTexture = T, w.boneTextureSize = M
						}
						y.setValue(p, "boneTexture", w.boneTexture), y.setValue(p, "boneTextureSize", w.boneTextureSize)
					} else y.setOptional(p, w, "boneMatrices")
				}
			}
			return u && (y.setValue(p, "toneMappingExposure", de.toneMappingExposure), y.setValue(p, "toneMappingWhitePoint", de.toneMappingWhitePoint), n.lights && function (e, t) {
				e.ambientLightColor.needsUpdate = t, e.directionalLights.needsUpdate = t, e.pointLights.needsUpdate = t, e.spotLights.needsUpdate = t, e.rectAreaLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t
			}(x, d), t && n.fog && function (e, t) {
				e.fogColor.value = t.color, t.isFog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t.isFogExp2 && (e.fogDensity.value = t.density)
			}(x, t), n.isMeshBasicMaterial ? vn(x, n) : n.isMeshLambertMaterial ? (vn(x, n), function (e, t) {
				t.emissiveMap && (e.emissiveMap.value = t.emissiveMap)
			}(x, n)) : n.isMeshPhongMaterial ? (vn(x, n), n.isMeshToonMaterial ? function (e, t) {
				gn(e, t), t.gradientMap && (e.gradientMap.value = t.gradientMap)
			}(x, n) : gn(x, n)) : n.isMeshStandardMaterial ? (vn(x, n), n.isMeshPhysicalMaterial ? function (e, t) {
				yn(e, t), e.reflectivity.value = t.reflectivity, e.clearCoat.value = t.clearCoat, e.clearCoatRoughness.value = t.clearCoatRoughness
			}(x, n) : yn(x, n)) : n.isMeshMatcapMaterial ? (vn(x, n), function (e, t) {
				t.matcap && (e.matcap.value = t.matcap);
				t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, t.side === L && (e.bumpScale.value *= -1));
				t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), t.side === L && e.normalScale.value.negate());
				t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
			}(x, n)) : n.isMeshDepthMaterial ? (vn(x, n), function (e, t) {
				t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
			}(x, n)) : n.isMeshDistanceMaterial ? (vn(x, n), function (e, t) {
				t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias);
				e.referencePosition.value.copy(t.referencePosition), e.nearDistance.value = t.nearDistance, e.farDistance.value = t.farDistance
			}(x, n)) : n.isMeshNormalMaterial ? (vn(x, n), function (e, t) {
				t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, t.side === L && (e.bumpScale.value *= -1));
				t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), t.side === L && e.normalScale.value.negate());
				t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
			}(x, n)) : n.isLineBasicMaterial ? (function (e, t) {
				e.diffuse.value = t.color, e.opacity.value = t.opacity
			}(x, n), n.isLineDashedMaterial && function (e, t) {
				e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale
			}(x, n)) : n.isPointsMaterial ? function (e, t) {
				e.diffuse.value = t.color, e.opacity.value = t.opacity, e.size.value = t.size * Lt, e.scale.value = .5 * Pt, e.map.value = t.map, null !== t.map && (!0 === t.map.matrixAutoUpdate && t.map.updateMatrix(), e.uvTransform.value.copy(t.map.matrix))
			}(x, n) : n.isSpriteMaterial ? function (e, t) {
				e.diffuse.value = t.color, e.opacity.value = t.opacity, e.rotation.value = t.rotation, e.map.value = t.map, null !== t.map && (!0 === t.map.matrixAutoUpdate && t.map.updateMatrix(), e.uvTransform.value.copy(t.map.matrix))
			}(x, n) : n.isShadowMaterial && (x.color.value = n.color, x.opacity.value = n.opacity), void 0 !== x.ltc_1 && (x.ltc_1.value = ln.LTC_1), void 0 !== x.ltc_2 && (x.ltc_2.value = ln.LTC_2), Dr.upload(p, i.uniformsList, x, de)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Dr.upload(p, i.uniformsList, x, de), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && y.setValue(p, "center", r.center), y.setValue(p, "modelViewMatrix", r.modelViewMatrix), y.setValue(p, "normalMatrix", r.normalMatrix), y.setValue(p, "modelMatrix", r.matrixWorld), v
		}

		function vn(e, t) {
			var n;
			e.opacity.value = t.opacity, t.color && (e.diffuse.value = t.color), t.emissive && e.emissive.value.copy(t.emissive).multiplyScalar(t.emissiveIntensity), t.map && (e.map.value = t.map), t.alphaMap && (e.alphaMap.value = t.alphaMap), t.specularMap && (e.specularMap.value = t.specularMap), t.envMap && (e.envMap.value = t.envMap, e.flipEnvMap.value = t.envMap && t.envMap.isCubeTexture ? -1 : 1, e.reflectivity.value = t.reflectivity, e.refractionRatio.value = t.refractionRatio, e.maxMipLevel.value = g.get(t.envMap).__maxMipLevel), t.lightMap && (e.lightMap.value = t.lightMap, e.lightMapIntensity.value = t.lightMapIntensity), t.aoMap && (e.aoMap.value = t.aoMap, e.aoMapIntensity.value = t.aoMapIntensity), t.map ? n = t.map : t.specularMap ? n = t.specularMap : t.displacementMap ? n = t.displacementMap : t.normalMap ? n = t.normalMap : t.bumpMap ? n = t.bumpMap : t.roughnessMap ? n = t.roughnessMap : t.metalnessMap ? n = t.metalnessMap : t.alphaMap ? n = t.alphaMap : t.emissiveMap && (n = t.emissiveMap), void 0 !== n && (n.isWebGLRenderTarget && (n = n.texture), !0 === n.matrixAutoUpdate && n.updateMatrix(), e.uvTransform.value.copy(n.matrix))
		}

		function gn(e, t) {
			e.specular.value = t.specular, e.shininess.value = Math.max(t.shininess, 1e-4), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, t.side === L && (e.bumpScale.value *= -1)), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), t.side === L && e.normalScale.value.negate()), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
		}

		function yn(e, t) {
			e.roughness.value = t.roughness, e.metalness.value = t.metalness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap), t.metalnessMap && (e.metalnessMap.value = t.metalnessMap), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale, t.side === L && (e.bumpScale.value *= -1)), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale), t.side === L && e.normalScale.value.negate()), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)
		}
		on.setAnimationLoop(function (e) {
			Xt.isPresenting() || rn && rn(e)
		}), "undefined" != typeof window && on.setContext(window), this.setAnimationLoop = function (e) {
			rn = e, Xt.setAnimationLoop(e), on.start()
		}, this.render = function (e, t, n, r) {
			if (t && t.isCamera) {
				if (!fe) {
					be.geometry = null, be.program = null, be.wireframe = !1, xe = -1, we = null, !0 === e.autoUpdate && e.updateMatrixWorld(), null === t.parent && t.updateMatrixWorld(), Xt.enabled && (t = Xt.getCamera(t)), (h = A.get(e, t)).init(), e.onBeforeRender(de, e, t, n), Ut.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), It.setFromMatrix(Ut), zt = this.localClippingEnabled, Dt = Nt.init(this.clippingPlanes, zt, t), (u = C.get(e, t)).init(),
						function e(t, n, r) {
							if (!1 === t.visible) return;
							var i = t.layers.test(n.layers);
							if (i)
								if (t.isLight) h.pushLight(t), t.castShadow && h.pushShadow(t);
								else if (t.isSprite) {
								if (!t.frustumCulled || It.intersectsSprite(t)) {
									r && Bt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Ut);
									var a = w.update(t),
										o = t.material;
									u.push(t, a, o, Bt.z, null)
								}
							} else if (t.isImmediateRenderObject) r && Bt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Ut), u.push(t, null, t.material, Bt.z, null);
							else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.update(), !t.frustumCulled || It.intersectsObject(t))) {
								r && Bt.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Ut);
								var a = w.update(t),
									o = t.material;
								if (Array.isArray(o))
									for (var s = a.groups, l = 0, c = s.length; l < c; l++) {
										var p = s[l],
											d = o[p.materialIndex];
										d && d.visible && u.push(t, a, d, Bt.z, p)
									} else o.visible && u.push(t, a, o, Bt.z, null)
							}
							var f = t.children;
							for (var l = 0, c = f.length; l < c; l++) e(f[l], n, r)
						}(e, t, de.sortObjects), !0 === de.sortObjects && u.sort(), Dt && Nt.beginShadows();
					var i = h.state.shadowsArray;
					Yt.render(i, e, t), h.setupLights(t), Dt && Nt.endShadows(), this.info.autoReset && this.info.reset(), void 0 === n && (n = null), this.setRenderTarget(n), O.render(u, e, t, r);
					var a = u.opaque,
						o = u.transparent;
					if (e.overrideMaterial) {
						var s = e.overrideMaterial;
						a.length && pn(a, e, t, s), o.length && pn(o, e, t, s)
					} else a.length && pn(a, e, t), o.length && pn(o, e, t);
					n && y.updateRenderTargetMipmap(n), m.buffers.depth.setTest(!0), m.buffers.depth.setMask(!0), m.buffers.color.setMask(!0), m.setPolygonOffset(!1), e.onAfterRender(de, e, t), Xt.enabled && Xt.submitFrame(), u = null, h = null
				}
			} else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
		}, this.allocTextureUnit = function () {
			var e = St;
			return e >= f.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + e + " texture units while this GPU supports only " + f.maxTextures), St += 1, e
		}, this.setTexture2D = function () {
			var e = !1;
			return function (t, n) {
				t && t.isWebGLRenderTarget && (e || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), e = !0), t = t.texture), y.setTexture2D(t, n)
			}
		}(), this.setTexture3D = function (e, t) {
			y.setTexture3D(e, t)
		}, this.setTexture = function () {
			var e = !1;
			return function (t, n) {
				e || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), e = !0), y.setTexture2D(t, n)
			}
		}(), this.setTextureCube = function () {
			var e = !1;
			return function (t, n) {
				t && t.isWebGLRenderTargetCube && (e || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), e = !0), t = t.texture), t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? y.setTextureCube(t, n) : y.setTextureCubeDynamic(t, n)
			}
		}(), this.setFramebuffer = function (e) {
			ve = e
		}, this.getRenderTarget = function () {
			return ge
		}, this.setRenderTarget = function (e) {
			ge = e, e && void 0 === g.get(e).__webglFramebuffer && y.setupRenderTarget(e);
			var t = ve,
				n = !1;
			if (e) {
				var r = g.get(e).__webglFramebuffer;
				e.isWebGLRenderTargetCube ? (t = r[e.activeCubeFace], n = !0) : t = r, Me.copy(e.viewport), Se.copy(e.scissor), Te = e.scissorTest
			} else Me.copy(Rt).multiplyScalar(Lt), Se.copy(Ot).multiplyScalar(Lt), Te = kt;
			if (ye !== t && (p.bindFramebuffer(36160, t), ye = t), m.viewport(Me), m.scissor(Se), m.setScissorTest(Te), n) {
				var i = g.get(e.texture);
				p.framebufferTexture2D(36160, 36064, 34069 + e.activeCubeFace, i.__webglTexture, e.activeMipMapLevel)
			}
		}, this.readRenderTargetPixels = function (e, t, n, r, i, a) {
			if (e && e.isWebGLRenderTarget) {
				var o = g.get(e).__webglFramebuffer;
				if (o) {
					var s = !1;
					o !== ye && (p.bindFramebuffer(36160, o), s = !0);
					try {
						var l = e.texture,
							c = l.format,
							u = l.type;
						if (c !== Je && pe.convert(c) !== p.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
						if (!(u === Ne || pe.convert(u) === p.getParameter(35738) || u === je && (f.isWebGL2 || d.get("OES_texture_float") || d.get("WEBGL_color_buffer_float")) || u === He && (f.isWebGL2 ? d.get("EXT_color_buffer_float") : d.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
						36053 === p.checkFramebufferStatus(36160) ? t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && p.readPixels(t, n, r, i, pe.convert(c), pe.convert(u), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
					} finally {
						s && p.bindFramebuffer(36160, ye)
					}
				}
			} else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
		}, this.copyFramebufferToTexture = function (e, t, n) {
			var r = t.image.width,
				i = t.image.height,
				a = pe.convert(t.format);
			this.setTexture2D(t, 0), p.copyTexImage2D(3553, n || 0, a, e.x, e.y, r, i, 0)
		}, this.copyTextureToTexture = function (e, t, n, r) {
			var i = t.image.width,
				a = t.image.height,
				o = pe.convert(n.format),
				s = pe.convert(n.type);
			this.setTexture2D(n, 0), t.isDataTexture ? p.texSubImage2D(3553, r || 0, e.x, e.y, i, a, o, s, t.image.data) : p.texSubImage2D(3553, r || 0, e.x, e.y, o, s, t.image)
		}
	}

	function fi(e, t) {
		this.name = "", this.color = new sn(e), this.density = void 0 !== t ? t : 25e-5
	}

	function mi(e, t, n) {
		this.name = "", this.color = new sn(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== n ? n : 1e3
	}

	function vi() {
		vn.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
	}

	function gi(e, t) {
		this.array = e, this.stride = t, this.count = void 0 !== e ? e.length / t : 0, this.dynamic = !1, this.updateRange = {
			offset: 0,
			count: -1
		}, this.version = 0
	}

	function yi(e, t, n, r) {
		this.data = e, this.itemSize = t, this.offset = n, this.normalized = !0 === r
	}

	function xi(e) {
		Un.call(this), this.type = "SpriteMaterial", this.color = new sn(16777215), this.map = null, this.rotation = 0, this.sizeAttenuation = !0, this.lights = !1, this.transparent = !0, this.setValues(e)
	}

	function bi(e) {
		if (vn.call(this), this.type = "Sprite", void 0 === li) {
			li = new On;
			var t = new gi(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
			li.setIndex([0, 1, 2, 0, 2, 3]), li.addAttribute("position", new yi(t, 3, 0, !1)), li.addAttribute("uv", new yi(t, 2, 3, !1))
		}
		this.geometry = li, this.material = void 0 !== e ? e : new xi, this.center = new jt(.5, .5)
	}

	function wi() {
		vn.call(this), this.type = "LOD", Object.defineProperties(this, {
			levels: {
				enumerable: !0,
				value: []
			}
		})
	}

	function _i(e, t) {
		if (e = e || [], this.bones = e.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === t) this.calculateInverses();
		else if (this.bones.length === t.length) this.boneInverses = t.slice(0);
		else {
			console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
			for (var n = 0, r = this.bones.length; n < r; n++) this.boneInverses.push(new Ht)
		}
	}

	function Mi() {
		vn.call(this), this.type = "Bone"
	}

	function Si(e, t) {
		Gn.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ht, this.bindMatrixInverse = new Ht;
		var n = new _i(this.initBones());
		this.bind(n, this.matrixWorld), this.normalizeSkinWeights()
	}

	function Ti(e) {
		Un.call(this), this.type = "LineBasicMaterial", this.color = new sn(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(e)
	}

	function Ei(e, t, n) {
		1 === n && console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."), vn.call(this), this.type = "Line", this.geometry = void 0 !== e ? e : new On, this.material = void 0 !== t ? t : new Ti({
			color: 16777215 * Math.random()
		})
	}

	function Ci(e, t) {
		Ei.call(this, e, t), this.type = "LineSegments"
	}

	function Ai(e, t) {
		Ei.call(this, e, t), this.type = "LineLoop"
	}

	function Pi(e) {
		Un.call(this), this.type = "PointsMaterial", this.color = new sn(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.lights = !1, this.setValues(e)
	}

	function Li(e, t) {
		vn.call(this), this.type = "Points", this.geometry = void 0 !== e ? e : new On, this.material = void 0 !== t ? t : new Pi({
			color: 16777215 * Math.random()
		})
	}

	function Ri(e, t, n, r, i, a, o, s, l) {
		Yt.call(this, e, t, n, r, i, a, o, s, l), this.generateMipmaps = !1
	}

	function Oi(e, t, n, r, i, a, o, s, l, c, u, h) {
		Yt.call(this, null, a, o, s, l, c, r, i, u, h), this.image = {
			width: t,
			height: n
		}, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1
	}

	function ki(e, t, n, r, i, a, o, s, l) {
		Yt.call(this, e, t, n, r, i, a, o, s, l), this.needsUpdate = !0
	}

	function Ii(e, t, n, r, i, a, o, s, l, c) {
		if ((c = void 0 !== c ? c : Qe) !== Qe && c !== Ke) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		void 0 === n && c === Qe && (n = Ue), void 0 === n && c === Ke && (n = qe), Yt.call(this, null, r, i, a, o, s, c, n, l), this.image = {
			width: e,
			height: t
		}, this.magFilter = void 0 !== o ? o : Pe, this.minFilter = void 0 !== s ? s : Pe, this.flipY = !1, this.generateMipmaps = !1
	}

	function Ni(e) {
		On.call(this), this.type = "WireframeGeometry";
		var t, n, r, i, a, o, s, l, c, u, h = [],
			p = [0, 0],
			d = {},
			f = ["a", "b", "c"];
		if (e && e.isGeometry) {
			var m = e.faces;
			for (t = 0, r = m.length; t < r; t++) {
				var v = m[t];
				for (n = 0; n < 3; n++) s = v[f[n]], l = v[f[(n + 1) % 3]], p[0] = Math.min(s, l), p[1] = Math.max(s, l), void 0 === d[c = p[0] + "," + p[1]] && (d[c] = {
					index1: p[0],
					index2: p[1]
				})
			}
			for (c in d) o = d[c], u = e.vertices[o.index1], h.push(u.x, u.y, u.z), u = e.vertices[o.index2], h.push(u.x, u.y, u.z)
		} else if (e && e.isBufferGeometry) {
			var g, y, x, b, w, _, M;
			if (u = new Vt, null !== e.index) {
				for (g = e.attributes.position, y = e.index, 0 === (x = e.groups).length && (x = [{
						start: 0,
						count: y.count,
						materialIndex: 0
					}]), i = 0, a = x.length; i < a; ++i)
					for (t = w = (b = x[i]).start, r = w + b.count; t < r; t += 3)
						for (n = 0; n < 3; n++) s = y.getX(t + n), l = y.getX(t + (n + 1) % 3), p[0] = Math.min(s, l), p[1] = Math.max(s, l), void 0 === d[c = p[0] + "," + p[1]] && (d[c] = {
							index1: p[0],
							index2: p[1]
						});
				for (c in d) o = d[c], u.fromBufferAttribute(g, o.index1), h.push(u.x, u.y, u.z), u.fromBufferAttribute(g, o.index2), h.push(u.x, u.y, u.z)
			} else
				for (t = 0, r = (g = e.attributes.position).count / 3; t < r; t++)
					for (n = 0; n < 3; n++) _ = 3 * t + n, u.fromBufferAttribute(g, _), h.push(u.x, u.y, u.z), M = 3 * t + (n + 1) % 3, u.fromBufferAttribute(g, M), h.push(u.x, u.y, u.z)
		}
		this.addAttribute("position", new Cn(h, 3))
	}

	function Di(e, t, n) {
		yn.call(this), this.type = "ParametricGeometry", this.parameters = {
			func: e,
			slices: t,
			stacks: n
		}, this.fromBufferGeometry(new zi(e, t, n)), this.mergeVertices()
	}

	function zi(e, t, n) {
		On.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
			func: e,
			slices: t,
			stacks: n
		};
		var r, i, a = [],
			o = [],
			s = [],
			l = [],
			c = new Vt,
			u = new Vt,
			h = new Vt,
			p = new Vt,
			d = new Vt;
		e.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
		var f = t + 1;
		for (r = 0; r <= n; r++) {
			var m = r / n;
			for (i = 0; i <= t; i++) {
				var v = i / t;
				e(v, m, u), o.push(u.x, u.y, u.z), v - 1e-5 >= 0 ? (e(v - 1e-5, m, h), p.subVectors(u, h)) : (e(v + 1e-5, m, h), p.subVectors(h, u)), m - 1e-5 >= 0 ? (e(v, m - 1e-5, h), d.subVectors(u, h)) : (e(v, m + 1e-5, h), d.subVectors(h, u)), c.crossVectors(p, d).normalize(), s.push(c.x, c.y, c.z), l.push(v, m)
			}
		}
		for (r = 0; r < n; r++)
			for (i = 0; i < t; i++) {
				var g = r * f + i,
					y = r * f + i + 1,
					x = (r + 1) * f + i + 1,
					b = (r + 1) * f + i;
				a.push(g, y, b), a.push(y, x, b)
			}
		this.setIndex(a), this.addAttribute("position", new Cn(o, 3)), this.addAttribute("normal", new Cn(s, 3)), this.addAttribute("uv", new Cn(l, 2))
	}

	function Ui(e, t, n, r) {
		yn.call(this), this.type = "PolyhedronGeometry", this.parameters = {
			vertices: e,
			indices: t,
			radius: n,
			detail: r
		}, this.fromBufferGeometry(new Bi(e, t, n, r)), this.mergeVertices()
	}

	function Bi(e, t, n, r) {
		On.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
			vertices: e,
			indices: t,
			radius: n,
			detail: r
		}, n = n || 1;
		var i = [],
			a = [];

		function o(e, t, n, r) {
			var i, a, o = Math.pow(2, r),
				l = [];
			for (i = 0; i <= o; i++) {
				l[i] = [];
				var c = e.clone().lerp(n, i / o),
					u = t.clone().lerp(n, i / o),
					h = o - i;
				for (a = 0; a <= h; a++) l[i][a] = 0 === a && i === o ? c : c.clone().lerp(u, a / h)
			}
			for (i = 0; i < o; i++)
				for (a = 0; a < 2 * (o - i) - 1; a++) {
					var p = Math.floor(a / 2);
					a % 2 == 0 ? (s(l[i][p + 1]), s(l[i + 1][p]), s(l[i][p])) : (s(l[i][p + 1]), s(l[i + 1][p + 1]), s(l[i + 1][p]))
				}
		}

		function s(e) {
			i.push(e.x, e.y, e.z)
		}

		function l(t, n) {
			var r = 3 * t;
			n.x = e[r + 0], n.y = e[r + 1], n.z = e[r + 2]
		}

		function c(e, t, n, r) {
			r < 0 && 1 === e.x && (a[t] = e.x - 1), 0 === n.x && 0 === n.z && (a[t] = r / 2 / Math.PI + .5)
		}

		function u(e) {
			return Math.atan2(e.z, -e.x)
		}

		function h(e) {
			return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z))
		}! function (e) {
			for (var n = new Vt, r = new Vt, i = new Vt, a = 0; a < t.length; a += 3) l(t[a + 0], n), l(t[a + 1], r), l(t[a + 2], i), o(n, r, i, e)
		}(r = r || 0),
		function (e) {
			for (var t = new Vt, n = 0; n < i.length; n += 3) t.x = i[n + 0], t.y = i[n + 1], t.z = i[n + 2], t.normalize().multiplyScalar(e), i[n + 0] = t.x, i[n + 1] = t.y, i[n + 2] = t.z
		}(n),
		function () {
			for (var e = new Vt, t = 0; t < i.length; t += 3) {
				e.x = i[t + 0], e.y = i[t + 1], e.z = i[t + 2];
				var n = u(e) / 2 / Math.PI + .5,
					r = h(e) / Math.PI + .5;
				a.push(n, 1 - r)
			}(function () {
				for (var e = new Vt, t = new Vt, n = new Vt, r = new Vt, o = new jt, s = new jt, l = new jt, h = 0, p = 0; h < i.length; h += 9, p += 6) {
					e.set(i[h + 0], i[h + 1], i[h + 2]), t.set(i[h + 3], i[h + 4], i[h + 5]), n.set(i[h + 6], i[h + 7], i[h + 8]), o.set(a[p + 0], a[p + 1]), s.set(a[p + 2], a[p + 3]), l.set(a[p + 4], a[p + 5]), r.copy(e).add(t).add(n).divideScalar(3);
					var d = u(r);
					c(o, p + 0, e, d), c(s, p + 2, t, d), c(l, p + 4, n, d)
				}
			})(),
			function () {
				for (var e = 0; e < a.length; e += 6) {
					var t = a[e + 0],
						n = a[e + 2],
						r = a[e + 4],
						i = Math.max(t, n, r),
						o = Math.min(t, n, r);
					i > .9 && o < .1 && (t < .2 && (a[e + 0] += 1), n < .2 && (a[e + 2] += 1), r < .2 && (a[e + 4] += 1))
				}
			}()
		}(), this.addAttribute("position", new Cn(i, 3)), this.addAttribute("normal", new Cn(i.slice(), 3)), this.addAttribute("uv", new Cn(a, 2)), 0 === r ? this.computeVertexNormals() : this.normalizeNormals()
	}

	function Fi(e, t) {
		yn.call(this), this.type = "TetrahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		}, this.fromBufferGeometry(new ji(e, t)), this.mergeVertices()
	}

	function ji(e, t) {
		Bi.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], e, t), this.type = "TetrahedronBufferGeometry", this.parameters = {
			radius: e,
			detail: t
		}
	}

	function Hi(e, t) {
		yn.call(this), this.type = "OctahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		}, this.fromBufferGeometry(new Gi(e, t)), this.mergeVertices()
	}

	function Gi(e, t) {
		Bi.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, t), this.type = "OctahedronBufferGeometry", this.parameters = {
			radius: e,
			detail: t
		}
	}

	function Vi(e, t) {
		yn.call(this), this.type = "IcosahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		}, this.fromBufferGeometry(new Wi(e, t)), this.mergeVertices()
	}

	function Wi(e, t) {
		var n = (1 + Math.sqrt(5)) / 2,
			r = [-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1];
		Bi.call(this, r, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e, t), this.type = "IcosahedronBufferGeometry", this.parameters = {
			radius: e,
			detail: t
		}
	}

	function qi(e, t) {
		yn.call(this), this.type = "DodecahedronGeometry", this.parameters = {
			radius: e,
			detail: t
		}, this.fromBufferGeometry(new Xi(e, t)), this.mergeVertices()
	}

	function Xi(e, t) {
		var n = (1 + Math.sqrt(5)) / 2,
			r = 1 / n,
			i = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, -r, -n, 0, -r, n, 0, r, -n, 0, r, n, 0, -n, 0, -r, n, 0, -r, -n, 0, r, n, 0, r];
		Bi.call(this, i, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], e, t), this.type = "DodecahedronBufferGeometry", this.parameters = {
			radius: e,
			detail: t
		}
	}

	function Yi(e, t, n, r, i, a) {
		yn.call(this), this.type = "TubeGeometry", this.parameters = {
			path: e,
			tubularSegments: t,
			radius: n,
			radialSegments: r,
			closed: i
		}, void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
		var o = new Ji(e, t, n, r, i);
		this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices()
	}

	function Ji(e, t, n, r, i) {
		On.call(this), this.type = "TubeBufferGeometry", this.parameters = {
			path: e,
			tubularSegments: t,
			radius: n,
			radialSegments: r,
			closed: i
		}, t = t || 64, n = n || 1, r = r || 8, i = i || !1;
		var a = e.computeFrenetFrames(t, i);
		this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
		var o, s, l = new Vt,
			c = new Vt,
			u = new jt,
			h = new Vt,
			p = [],
			d = [],
			f = [],
			m = [];

		function v(i) {
			h = e.getPointAt(i / t, h);
			var o = a.normals[i],
				u = a.binormals[i];
			for (s = 0; s <= r; s++) {
				var f = s / r * Math.PI * 2,
					m = Math.sin(f),
					v = -Math.cos(f);
				c.x = v * o.x + m * u.x, c.y = v * o.y + m * u.y, c.z = v * o.z + m * u.z, c.normalize(), d.push(c.x, c.y, c.z), l.x = h.x + n * c.x, l.y = h.y + n * c.y, l.z = h.z + n * c.z, p.push(l.x, l.y, l.z)
			}
		}! function () {
			for (o = 0; o < t; o++) v(o);
			v(!1 === i ? t : 0),
				function () {
					for (o = 0; o <= t; o++)
						for (s = 0; s <= r; s++) u.x = o / t, u.y = s / r, f.push(u.x, u.y)
				}(),
				function () {
					for (s = 1; s <= t; s++)
						for (o = 1; o <= r; o++) {
							var e = (r + 1) * (s - 1) + (o - 1),
								n = (r + 1) * s + (o - 1),
								i = (r + 1) * s + o,
								a = (r + 1) * (s - 1) + o;
							m.push(e, n, a), m.push(n, i, a)
						}
				}()
		}(), this.setIndex(m), this.addAttribute("position", new Cn(p, 3)), this.addAttribute("normal", new Cn(d, 3)), this.addAttribute("uv", new Cn(f, 2))
	}

	function Zi(e, t, n, r, i, a, o) {
		yn.call(this), this.type = "TorusKnotGeometry", this.parameters = {
			radius: e,
			tube: t,
			tubularSegments: n,
			radialSegments: r,
			p: i,
			q: a
		}, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new $i(e, t, n, r, i, a)), this.mergeVertices()
	}

	function $i(e, t, n, r, i, a) {
		On.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
			radius: e,
			tube: t,
			tubularSegments: n,
			radialSegments: r,
			p: i,
			q: a
		}, e = e || 1, t = t || .4, n = Math.floor(n) || 64, r = Math.floor(r) || 8, i = i || 2, a = a || 3;
		var o, s, l = [],
			c = [],
			u = [],
			h = [],
			p = new Vt,
			d = new Vt,
			f = new Vt,
			m = new Vt,
			v = new Vt,
			g = new Vt,
			y = new Vt;
		for (o = 0; o <= n; ++o) {
			var x = o / n * i * Math.PI * 2;
			for (C(x, i, a, e, f), C(x + .01, i, a, e, m), g.subVectors(m, f), y.addVectors(m, f), v.crossVectors(g, y), y.crossVectors(v, g), v.normalize(), y.normalize(), s = 0; s <= r; ++s) {
				var b = s / r * Math.PI * 2,
					w = -t * Math.cos(b),
					_ = t * Math.sin(b);
				p.x = f.x + (w * y.x + _ * v.x), p.y = f.y + (w * y.y + _ * v.y), p.z = f.z + (w * y.z + _ * v.z), c.push(p.x, p.y, p.z), d.subVectors(p, f).normalize(), u.push(d.x, d.y, d.z), h.push(o / n), h.push(s / r)
			}
		}
		for (s = 1; s <= n; s++)
			for (o = 1; o <= r; o++) {
				var M = (r + 1) * (s - 1) + (o - 1),
					S = (r + 1) * s + (o - 1),
					T = (r + 1) * s + o,
					E = (r + 1) * (s - 1) + o;
				l.push(M, S, E), l.push(S, T, E)
			}

		function C(e, t, n, r, i) {
			var a = Math.cos(e),
				o = Math.sin(e),
				s = n / t * e,
				l = Math.cos(s);
			i.x = r * (2 + l) * .5 * a, i.y = r * (2 + l) * o * .5, i.z = r * Math.sin(s) * .5
		}
		this.setIndex(l), this.addAttribute("position", new Cn(c, 3)), this.addAttribute("normal", new Cn(u, 3)), this.addAttribute("uv", new Cn(h, 2))
	}

	function Qi(e, t, n, r, i) {
		yn.call(this), this.type = "TorusGeometry", this.parameters = {
			radius: e,
			tube: t,
			radialSegments: n,
			tubularSegments: r,
			arc: i
		}, this.fromBufferGeometry(new Ki(e, t, n, r, i)), this.mergeVertices()
	}

	function Ki(e, t, n, r, i) {
		On.call(this), this.type = "TorusBufferGeometry", this.parameters = {
			radius: e,
			tube: t,
			radialSegments: n,
			tubularSegments: r,
			arc: i
		}, e = e || 1, t = t || .4, n = Math.floor(n) || 8, r = Math.floor(r) || 6, i = i || 2 * Math.PI;
		var a, o, s = [],
			l = [],
			c = [],
			u = [],
			h = new Vt,
			p = new Vt,
			d = new Vt;
		for (a = 0; a <= n; a++)
			for (o = 0; o <= r; o++) {
				var f = o / r * i,
					m = a / n * Math.PI * 2;
				p.x = (e + t * Math.cos(m)) * Math.cos(f), p.y = (e + t * Math.cos(m)) * Math.sin(f), p.z = t * Math.sin(m), l.push(p.x, p.y, p.z), h.x = e * Math.cos(f), h.y = e * Math.sin(f), d.subVectors(p, h).normalize(), c.push(d.x, d.y, d.z), u.push(o / r), u.push(a / n)
			}
		for (a = 1; a <= n; a++)
			for (o = 1; o <= r; o++) {
				var v = (r + 1) * a + o - 1,
					g = (r + 1) * (a - 1) + o - 1,
					y = (r + 1) * (a - 1) + o,
					x = (r + 1) * a + o;
				s.push(v, g, x), s.push(g, y, x)
			}
		this.setIndex(s), this.addAttribute("position", new Cn(l, 3)), this.addAttribute("normal", new Cn(c, 3)), this.addAttribute("uv", new Cn(u, 2))
	}
	fi.prototype.isFogExp2 = !0, fi.prototype.clone = function () {
		return new fi(this.color, this.density)
	}, fi.prototype.toJSON = function () {
		return {
			type: "FogExp2",
			color: this.color.getHex(),
			density: this.density
		}
	}, mi.prototype.isFog = !0, mi.prototype.clone = function () {
		return new mi(this.color, this.near, this.far)
	}, mi.prototype.toJSON = function () {
		return {
			type: "Fog",
			color: this.color.getHex(),
			near: this.near,
			far: this.far
		}
	}, vi.prototype = Object.assign(Object.create(vn.prototype), {
		constructor: vi,
		copy: function (e, t) {
			return vn.prototype.copy.call(this, e, t), null !== e.background && (this.background = e.background.clone()), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
		},
		toJSON: function (e) {
			var t = vn.prototype.toJSON.call(this, e);
			return null !== this.background && (t.object.background = this.background.toJSON(e)), null !== this.fog && (t.object.fog = this.fog.toJSON()), t
		}
	}), Object.defineProperty(gi.prototype, "needsUpdate", {
		set: function (e) {
			!0 === e && this.version++
		}
	}), Object.assign(gi.prototype, {
		isInterleavedBuffer: !0,
		onUploadCallback: function () {},
		setArray: function (e) {
			if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
			return this.count = void 0 !== e ? e.length / this.stride : 0, this.array = e, this
		},
		setDynamic: function (e) {
			return this.dynamic = e, this
		},
		copy: function (e) {
			return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.dynamic = e.dynamic, this
		},
		copyAt: function (e, t, n) {
			e *= this.stride, n *= t.stride;
			for (var r = 0, i = this.stride; r < i; r++) this.array[e + r] = t.array[n + r];
			return this
		},
		set: function (e, t) {
			return void 0 === t && (t = 0), this.array.set(e, t), this
		},
		clone: function () {
			return (new this.constructor).copy(this)
		},
		onUpload: function (e) {
			return this.onUploadCallback = e, this
		}
	}), Object.defineProperties(yi.prototype, {
		count: {
			get: function () {
				return this.data.count
			}
		},
		array: {
			get: function () {
				return this.data.array
			}
		}
	}), Object.assign(yi.prototype, {
		isInterleavedBufferAttribute: !0,
		setX: function (e, t) {
			return this.data.array[e * this.data.stride + this.offset] = t, this
		},
		setY: function (e, t) {
			return this.data.array[e * this.data.stride + this.offset + 1] = t, this
		},
		setZ: function (e, t) {
			return this.data.array[e * this.data.stride + this.offset + 2] = t, this
		},
		setW: function (e, t) {
			return this.data.array[e * this.data.stride + this.offset + 3] = t, this
		},
		getX: function (e) {
			return this.data.array[e * this.data.stride + this.offset]
		},
		getY: function (e) {
			return this.data.array[e * this.data.stride + this.offset + 1]
		},
		getZ: function (e) {
			return this.data.array[e * this.data.stride + this.offset + 2]
		},
		getW: function (e) {
			return this.data.array[e * this.data.stride + this.offset + 3]
		},
		setXY: function (e, t, n) {
			return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this
		},
		setXYZ: function (e, t, n, r) {
			return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this
		},
		setXYZW: function (e, t, n, r, i) {
			return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = r, this.data.array[e + 3] = i, this
		}
	}), xi.prototype = Object.create(Un.prototype), xi.prototype.constructor = xi, xi.prototype.isSpriteMaterial = !0, xi.prototype.copy = function (e) {
		return Un.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this
	}, bi.prototype = Object.assign(Object.create(vn.prototype), {
		constructor: bi,
		isSprite: !0,
		raycast: function () {
			var e = new Vt,
				t = new Vt,
				n = new Vt,
				r = new jt,
				i = new jt,
				a = new Ht,
				o = new Vt,
				s = new Vt,
				l = new Vt,
				c = new jt,
				u = new jt,
				h = new jt;

			function p(e, t, n, o, s, l) {
				r.subVectors(e, n).addScalar(.5).multiply(o), void 0 !== s ? (i.x = l * r.x - s * r.y, i.y = s * r.x + l * r.y) : i.copy(r), e.copy(t), e.x += i.x, e.y += i.y, e.applyMatrix4(a)
			}
			return function (r, i) {
				t.setFromMatrixScale(this.matrixWorld), a.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld), n.setFromMatrixPosition(this.modelViewMatrix);
				var d, f, m = this.material.rotation;
				0 !== m && (f = Math.cos(m), d = Math.sin(m));
				var v = this.center;
				p(o.set(-.5, -.5, 0), n, v, t, d, f), p(s.set(.5, -.5, 0), n, v, t, d, f), p(l.set(.5, .5, 0), n, v, t, d, f), c.set(0, 0), u.set(1, 0), h.set(1, 1);
				var g = r.ray.intersectTriangle(o, s, l, !1, e);
				if (null !== g || (p(s.set(-.5, .5, 0), n, v, t, d, f), u.set(0, 1), null !== (g = r.ray.intersectTriangle(o, l, s, !1, e)))) {
					var y = r.ray.origin.distanceTo(e);
					y < r.near || y > r.far || i.push({
						distance: y,
						point: e.clone(),
						uv: jn.getUV(e, o, s, l, c, u, h, new jt),
						face: null,
						object: this
					})
				}
			}
		}(),
		clone: function () {
			return new this.constructor(this.material).copy(this)
		},
		copy: function (e) {
			return vn.prototype.copy.call(this, e), void 0 !== e.center && this.center.copy(e.center), this
		}
	}), wi.prototype = Object.assign(Object.create(vn.prototype), {
		constructor: wi,
		copy: function (e) {
			vn.prototype.copy.call(this, e, !1);
			for (var t = e.levels, n = 0, r = t.length; n < r; n++) {
				var i = t[n];
				this.addLevel(i.object.clone(), i.distance)
			}
			return this
		},
		addLevel: function (e, t) {
			void 0 === t && (t = 0), t = Math.abs(t);
			for (var n = this.levels, r = 0; r < n.length && !(t < n[r].distance); r++);
			n.splice(r, 0, {
				distance: t,
				object: e
			}), this.add(e)
		},
		getObjectForDistance: function (e) {
			for (var t = this.levels, n = 1, r = t.length; n < r && !(e < t[n].distance); n++);
			return t[n - 1].object
		},
		raycast: function () {
			var e = new Vt;
			return function (t, n) {
				e.setFromMatrixPosition(this.matrixWorld);
				var r = t.ray.origin.distanceTo(e);
				this.getObjectForDistance(r).raycast(t, n)
			}
		}(),
		update: function () {
			var e = new Vt,
				t = new Vt;
			return function (n) {
				var r = this.levels;
				if (r.length > 1) {
					e.setFromMatrixPosition(n.matrixWorld), t.setFromMatrixPosition(this.matrixWorld);
					var i = e.distanceTo(t);
					r[0].object.visible = !0;
					for (var a = 1, o = r.length; a < o && i >= r[a].distance; a++) r[a - 1].object.visible = !1, r[a].object.visible = !0;
					for (; a < o; a++) r[a].object.visible = !1
				}
			}
		}(),
		toJSON: function (e) {
			var t = vn.prototype.toJSON.call(this, e);
			t.object.levels = [];
			for (var n = this.levels, r = 0, i = n.length; r < i; r++) {
				var a = n[r];
				t.object.levels.push({
					object: a.object.uuid,
					distance: a.distance
				})
			}
			return t
		}
	}), Object.assign(_i.prototype, {
		calculateInverses: function () {
			this.boneInverses = [];
			for (var e = 0, t = this.bones.length; e < t; e++) {
				var n = new Ht;
				this.bones[e] && n.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(n)
			}
		},
		pose: function () {
			var e, t, n;
			for (t = 0, n = this.bones.length; t < n; t++)(e = this.bones[t]) && e.matrixWorld.getInverse(this.boneInverses[t]);
			for (t = 0, n = this.bones.length; t < n; t++)(e = this.bones[t]) && (e.parent && e.parent.isBone ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
		},
		update: function () {
			var e = new Ht,
				t = new Ht;
			return function () {
				for (var n = this.bones, r = this.boneInverses, i = this.boneMatrices, a = this.boneTexture, o = 0, s = n.length; o < s; o++) {
					var l = n[o] ? n[o].matrixWorld : t;
					e.multiplyMatrices(l, r[o]), e.toArray(i, 16 * o)
				}
				void 0 !== a && (a.needsUpdate = !0)
			}
		}(),
		clone: function () {
			return new _i(this.bones, this.boneInverses)
		},
		getBoneByName: function (e) {
			for (var t = 0, n = this.bones.length; t < n; t++) {
				var r = this.bones[t];
				if (r.name === e) return r
			}
		}
	}), Mi.prototype = Object.assign(Object.create(vn.prototype), {
		constructor: Mi,
		isBone: !0
	}), Si.prototype = Object.assign(Object.create(Gn.prototype), {
		constructor: Si,
		isSkinnedMesh: !0,
		initBones: function () {
			var e, t, n, r, i = [];
			if (this.geometry && void 0 !== this.geometry.bones) {
				for (n = 0, r = this.geometry.bones.length; n < r; n++) t = this.geometry.bones[n], e = new Mi, i.push(e), e.name = t.name, e.position.fromArray(t.pos), e.quaternion.fromArray(t.rotq), void 0 !== t.scl && e.scale.fromArray(t.scl);
				for (n = 0, r = this.geometry.bones.length; n < r; n++) - 1 !== (t = this.geometry.bones[n]).parent && null !== t.parent && void 0 !== i[t.parent] ? i[t.parent].add(i[n]) : this.add(i[n])
			}
			return this.updateMatrixWorld(!0), i
		},
		bind: function (e, t) {
			this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t)
		},
		pose: function () {
			this.skeleton.pose()
		},
		normalizeSkinWeights: function () {
			var e, t;
			if (this.geometry && this.geometry.isGeometry)
				for (t = 0; t < this.geometry.skinWeights.length; t++) {
					var n = this.geometry.skinWeights[t];
					(e = 1 / n.manhattanLength()) !== 1 / 0 ? n.multiplyScalar(e) : n.set(1, 0, 0, 0)
				} else if (this.geometry && this.geometry.isBufferGeometry) {
					var r = new Jt,
						i = this.geometry.attributes.skinWeight;
					for (t = 0; t < i.count; t++) r.x = i.getX(t), r.y = i.getY(t), r.z = i.getZ(t), r.w = i.getW(t), (e = 1 / r.manhattanLength()) !== 1 / 0 ? r.multiplyScalar(e) : r.set(1, 0, 0, 0), i.setXYZW(t, r.x, r.y, r.z, r.w)
				}
		},
		updateMatrixWorld: function (e) {
			Gn.prototype.updateMatrixWorld.call(this, e), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
		},
		clone: function () {
			return new this.constructor(this.geometry, this.material).copy(this)
		}
	}), Ti.prototype = Object.create(Un.prototype), Ti.prototype.constructor = Ti, Ti.prototype.isLineBasicMaterial = !0, Ti.prototype.copy = function (e) {
		return Un.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this
	}, Ei.prototype = Object.assign(Object.create(vn.prototype), {
		constructor: Ei,
		isLine: !0,
		computeLineDistances: function () {
			var e = new Vt,
				t = new Vt;
			return function () {
				var n = this.geometry;
				if (n.isBufferGeometry)
					if (null === n.index) {
						for (var r = n.attributes.position, i = [0], a = 1, o = r.count; a < o; a++) e.fromBufferAttribute(r, a - 1), t.fromBufferAttribute(r, a), i[a] = i[a - 1], i[a] += e.distanceTo(t);
						n.addAttribute("lineDistance", new Cn(i, 1))
					} else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
				else if (n.isGeometry) {
					var s = n.vertices;
					(i = n.lineDistances)[0] = 0;
					for (a = 1, o = s.length; a < o; a++) i[a] = i[a - 1], i[a] += s[a - 1].distanceTo(s[a])
				}
				return this
			}
		}(),
		raycast: function () {
			var e = new Ht,
				t = new Fn,
				n = new en;
			return function (r, i) {
				var a = r.linePrecision,
					o = this.geometry,
					s = this.matrixWorld;
				if (null === o.boundingSphere && o.computeBoundingSphere(), n.copy(o.boundingSphere), n.applyMatrix4(s), n.radius += a, !1 !== r.ray.intersectsSphere(n)) {
					e.getInverse(s), t.copy(r.ray).applyMatrix4(e);
					var l = a / ((this.scale.x + this.scale.y + this.scale.z) / 3),
						c = l * l,
						u = new Vt,
						h = new Vt,
						p = new Vt,
						d = new Vt,
						f = this && this.isLineSegments ? 2 : 1;
					if (o.isBufferGeometry) {
						var m = o.index,
							v = o.attributes.position.array;
						if (null !== m)
							for (var g = m.array, y = 0, x = g.length - 1; y < x; y += f) {
								var b = g[y],
									w = g[y + 1];
								if (u.fromArray(v, 3 * b), h.fromArray(v, 3 * w), !(t.distanceSqToSegment(u, h, d, p) > c)) d.applyMatrix4(this.matrixWorld), (S = r.ray.origin.distanceTo(d)) < r.near || S > r.far || i.push({
									distance: S,
									point: p.clone().applyMatrix4(this.matrixWorld),
									index: y,
									face: null,
									faceIndex: null,
									object: this
								})
							} else
								for (y = 0, x = v.length / 3 - 1; y < x; y += f) {
									if (u.fromArray(v, 3 * y), h.fromArray(v, 3 * y + 3), !(t.distanceSqToSegment(u, h, d, p) > c)) d.applyMatrix4(this.matrixWorld), (S = r.ray.origin.distanceTo(d)) < r.near || S > r.far || i.push({
										distance: S,
										point: p.clone().applyMatrix4(this.matrixWorld),
										index: y,
										face: null,
										faceIndex: null,
										object: this
									})
								}
					} else if (o.isGeometry) {
						var _ = o.vertices,
							M = _.length;
						for (y = 0; y < M - 1; y += f) {
							var S;
							if (!(t.distanceSqToSegment(_[y], _[y + 1], d, p) > c)) d.applyMatrix4(this.matrixWorld), (S = r.ray.origin.distanceTo(d)) < r.near || S > r.far || i.push({
								distance: S,
								point: p.clone().applyMatrix4(this.matrixWorld),
								index: y,
								face: null,
								faceIndex: null,
								object: this
							})
						}
					}
				}
			}
		}(),
		copy: function (e) {
			return vn.prototype.copy.call(this, e), this.geometry.copy(e.geometry), this.material.copy(e.material), this
		},
		clone: function () {
			return (new this.constructor).copy(this)
		}
	}), Ci.prototype = Object.assign(Object.create(Ei.prototype), {
		constructor: Ci,
		isLineSegments: !0,
		computeLineDistances: function () {
			var e = new Vt,
				t = new Vt;
			return function () {
				var n = this.geometry;
				if (n.isBufferGeometry)
					if (null === n.index) {
						for (var r = n.attributes.position, i = [], a = 0, o = r.count; a < o; a += 2) e.fromBufferAttribute(r, a), t.fromBufferAttribute(r, a + 1), i[a] = 0 === a ? 0 : i[a - 1], i[a + 1] = i[a] + e.distanceTo(t);
						n.addAttribute("lineDistance", new Cn(i, 1))
					} else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
				else if (n.isGeometry) {
					var s = n.vertices;
					for (i = n.lineDistances, a = 0, o = s.length; a < o; a += 2) e.copy(s[a]), t.copy(s[a + 1]), i[a] = 0 === a ? 0 : i[a - 1], i[a + 1] = i[a] + e.distanceTo(t)
				}
				return this
			}
		}()
	}), Ai.prototype = Object.assign(Object.create(Ei.prototype), {
		constructor: Ai,
		isLineLoop: !0
	}), Pi.prototype = Object.create(Un.prototype), Pi.prototype.constructor = Pi, Pi.prototype.isPointsMaterial = !0, Pi.prototype.copy = function (e) {
		return Un.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.morphTargets = e.morphTargets, this
	}, Li.prototype = Object.assign(Object.create(vn.prototype), {
		constructor: Li,
		isPoints: !0,
		raycast: function () {
			var e = new Ht,
				t = new Fn,
				n = new en;
			return function (r, i) {
				var a = this,
					o = this.geometry,
					s = this.matrixWorld,
					l = r.params.Points.threshold;
				if (null === o.boundingSphere && o.computeBoundingSphere(), n.copy(o.boundingSphere), n.applyMatrix4(s), n.radius += l, !1 !== r.ray.intersectsSphere(n)) {
					e.getInverse(s), t.copy(r.ray).applyMatrix4(e);
					var c = l / ((this.scale.x + this.scale.y + this.scale.z) / 3),
						u = c * c,
						h = new Vt,
						p = new Vt;
					if (o.isBufferGeometry) {
						var d = o.index,
							f = o.attributes.position.array;
						if (null !== d)
							for (var m = d.array, v = 0, g = m.length; v < g; v++) {
								var y = m[v];
								h.fromArray(f, 3 * y), w(h, y)
							} else {
								v = 0;
								for (var x = f.length / 3; v < x; v++) h.fromArray(f, 3 * v), w(h, v)
							}
					} else {
						var b = o.vertices;
						for (v = 0, x = b.length; v < x; v++) w(b[v], v)
					}
				}

				function w(e, n) {
					var o = t.distanceSqToPoint(e);
					if (o < u) {
						t.closestPointToPoint(e, p), p.applyMatrix4(s);
						var l = r.ray.origin.distanceTo(p);
						if (l < r.near || l > r.far) return;
						i.push({
							distance: l,
							distanceToRay: Math.sqrt(o),
							point: p.clone(),
							index: n,
							face: null,
							object: a
						})
					}
				}
			}
		}(),
		clone: function () {
			return new this.constructor(this.geometry, this.material).copy(this)
		}
	}), Ri.prototype = Object.assign(Object.create(Yt.prototype), {
		constructor: Ri,
		isVideoTexture: !0,
		update: function () {
			var e = this.image;
			e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
		}
	}), Oi.prototype = Object.create(Yt.prototype), Oi.prototype.constructor = Oi, Oi.prototype.isCompressedTexture = !0, ki.prototype = Object.create(Yt.prototype), ki.prototype.constructor = ki, ki.prototype.isCanvasTexture = !0, Ii.prototype = Object.create(Yt.prototype), Ii.prototype.constructor = Ii, Ii.prototype.isDepthTexture = !0, Ni.prototype = Object.create(On.prototype), Ni.prototype.constructor = Ni, Di.prototype = Object.create(yn.prototype), Di.prototype.constructor = Di, zi.prototype = Object.create(On.prototype), zi.prototype.constructor = zi, Ui.prototype = Object.create(yn.prototype), Ui.prototype.constructor = Ui, Bi.prototype = Object.create(On.prototype), Bi.prototype.constructor = Bi, Fi.prototype = Object.create(yn.prototype), Fi.prototype.constructor = Fi, ji.prototype = Object.create(Bi.prototype), ji.prototype.constructor = ji, Hi.prototype = Object.create(yn.prototype), Hi.prototype.constructor = Hi, Gi.prototype = Object.create(Bi.prototype), Gi.prototype.constructor = Gi, Vi.prototype = Object.create(yn.prototype), Vi.prototype.constructor = Vi, Wi.prototype = Object.create(Bi.prototype), Wi.prototype.constructor = Wi, qi.prototype = Object.create(yn.prototype), qi.prototype.constructor = qi, Xi.prototype = Object.create(Bi.prototype), Xi.prototype.constructor = Xi, Yi.prototype = Object.create(yn.prototype), Yi.prototype.constructor = Yi, Ji.prototype = Object.create(On.prototype), Ji.prototype.constructor = Ji, Zi.prototype = Object.create(yn.prototype), Zi.prototype.constructor = Zi, $i.prototype = Object.create(On.prototype), $i.prototype.constructor = $i, Qi.prototype = Object.create(yn.prototype), Qi.prototype.constructor = Qi, Ki.prototype = Object.create(On.prototype), Ki.prototype.constructor = Ki;
	var ea = function (e, t, n) {
		n = n || 2;
		var r, i, a, o, s, l, c, u = t && t.length,
			h = u ? t[0] * n : e.length,
			p = ta(e, 0, h, n, !0),
			d = [];
		if (!p) return d;
		if (u && (p = function (e, t, n, r) {
				var i, a, o, s, l, c = [];
				for (i = 0, a = t.length; i < a; i++) o = t[i] * r, s = i < a - 1 ? t[i + 1] * r : e.length, (l = ta(e, o, s, r, !1)) === l.next && (l.steiner = !0), c.push(ha(l));
				for (c.sort(la), i = 0; i < c.length; i++) ca(c[i], n), n = na(n, n.next);
				return n
			}(e, t, p, n)), e.length > 80 * n) {
			r = a = e[0], i = o = e[1];
			for (var f = n; f < h; f += n) s = e[f], l = e[f + 1], s < r && (r = s), l < i && (i = l), s > a && (a = s), l > o && (o = l);
			c = 0 !== (c = Math.max(a - r, o - i)) ? 1 / c : 0
		}
		return ra(p, d, n, r, i, c), d
	};

	function ta(e, t, n, r, i) {
		var a, o;
		if (i === function (e, t, n, r) {
				for (var i = 0, a = t, o = n - r; a < n; a += r) i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
				return i
			}(e, t, n, r) > 0)
			for (a = t; a < n; a += r) o = xa(a, e[a], e[a + 1], o);
		else
			for (a = n - r; a >= t; a -= r) o = xa(a, e[a], e[a + 1], o);
		return o && ma(o, o.next) && (ba(o), o = o.next), o
	}

	function na(e, t) {
		if (!e) return e;
		t || (t = e);
		var n, r = e;
		do {
			if (n = !1, r.steiner || !ma(r, r.next) && 0 !== fa(r.prev, r, r.next)) r = r.next;
			else {
				if (ba(r), (r = t = r.prev) === r.next) break;
				n = !0
			}
		} while (n || r !== t);
		return t
	}

	function ra(e, t, n, r, i, a, o) {
		if (e) {
			!o && a && function (e, t, n, r) {
				var i = e;
				do {
					null === i.z && (i.z = ua(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next
				} while (i !== e);
				i.prevZ.nextZ = null, i.prevZ = null,
					function (e) {
						var t, n, r, i, a, o, s, l, c = 1;
						do {
							for (n = e, e = null, a = null, o = 0; n;) {
								for (o++, r = n, s = 0, t = 0; t < c && (s++, r = r.nextZ); t++);
								for (l = c; s > 0 || l > 0 && r;) 0 !== s && (0 === l || !r || n.z <= r.z) ? (i = n, n = n.nextZ, s--) : (i = r, r = r.nextZ, l--), a ? a.nextZ = i : e = i, i.prevZ = a, a = i;
								n = r
							}
							a.nextZ = null, c *= 2
						} while (o > 1)
					}(i)
			}(e, r, i, a);
			for (var s, l, c = e; e.prev !== e.next;)
				if (s = e.prev, l = e.next, a ? aa(e, r, i, a) : ia(e)) t.push(s.i / n), t.push(e.i / n), t.push(l.i / n), ba(e), e = l.next, c = l.next;
				else if ((e = l) === c) {
				o ? 1 === o ? ra(e = oa(e, t, n), t, n, r, i, a, 2) : 2 === o && sa(e, t, n, r, i, a) : ra(na(e), t, n, r, i, a, 1);
				break
			}
		}
	}

	function ia(e) {
		var t = e.prev,
			n = e,
			r = e.next;
		if (fa(t, n, r) >= 0) return !1;
		for (var i = e.next.next; i !== e.prev;) {
			if (pa(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) && fa(i.prev, i, i.next) >= 0) return !1;
			i = i.next
		}
		return !0
	}

	function aa(e, t, n, r) {
		var i = e.prev,
			a = e,
			o = e.next;
		if (fa(i, a, o) >= 0) return !1;
		for (var s = i.x < a.x ? i.x < o.x ? i.x : o.x : a.x < o.x ? a.x : o.x, l = i.y < a.y ? i.y < o.y ? i.y : o.y : a.y < o.y ? a.y : o.y, c = i.x > a.x ? i.x > o.x ? i.x : o.x : a.x > o.x ? a.x : o.x, u = i.y > a.y ? i.y > o.y ? i.y : o.y : a.y > o.y ? a.y : o.y, h = ua(s, l, t, n, r), p = ua(c, u, t, n, r), d = e.nextZ; d && d.z <= p;) {
			if (d !== e.prev && d !== e.next && pa(i.x, i.y, a.x, a.y, o.x, o.y, d.x, d.y) && fa(d.prev, d, d.next) >= 0) return !1;
			d = d.nextZ
		}
		for (d = e.prevZ; d && d.z >= h;) {
			if (d !== e.prev && d !== e.next && pa(i.x, i.y, a.x, a.y, o.x, o.y, d.x, d.y) && fa(d.prev, d, d.next) >= 0) return !1;
			d = d.prevZ
		}
		return !0
	}

	function oa(e, t, n) {
		var r = e;
		do {
			var i = r.prev,
				a = r.next.next;
			!ma(i, a) && va(i, r, r.next, a) && ga(i, a) && ga(a, i) && (t.push(i.i / n), t.push(r.i / n), t.push(a.i / n), ba(r), ba(r.next), r = e = a), r = r.next
		} while (r !== e);
		return r
	}

	function sa(e, t, n, r, i, a) {
		var o = e;
		do {
			for (var s = o.next.next; s !== o.prev;) {
				if (o.i !== s.i && da(o, s)) {
					var l = ya(o, s);
					return o = na(o, o.next), l = na(l, l.next), ra(o, t, n, r, i, a), void ra(l, t, n, r, i, a)
				}
				s = s.next
			}
			o = o.next
		} while (o !== e)
	}

	function la(e, t) {
		return e.x - t.x
	}

	function ca(e, t) {
		if (t = function (e, t) {
				var n, r = t,
					i = e.x,
					a = e.y,
					o = -1 / 0;
				do {
					if (a <= r.y && a >= r.next.y && r.next.y !== r.y) {
						var s = r.x + (a - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
						if (s <= i && s > o) {
							if (o = s, s === i) {
								if (a === r.y) return r;
								if (a === r.next.y) return r.next
							}
							n = r.x < r.next.x ? r : r.next
						}
					}
					r = r.next
				} while (r !== t);
				if (!n) return null;
				if (i === o) return n.prev;
				var l, c = n,
					u = n.x,
					h = n.y,
					p = 1 / 0;
				r = n.next;
				for (; r !== c;) i >= r.x && r.x >= u && i !== r.x && pa(a < h ? i : o, a, u, h, a < h ? o : i, a, r.x, r.y) && ((l = Math.abs(a - r.y) / (i - r.x)) < p || l === p && r.x > n.x) && ga(r, e) && (n = r, p = l), r = r.next;
				return n
			}(e, t)) {
			var n = ya(t, e);
			na(n, n.next)
		}
	}

	function ua(e, t, n, r, i) {
		return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * i) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) * i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
	}

	function ha(e) {
		var t = e,
			n = e;
		do {
			t.x < n.x && (n = t), t = t.next
		} while (t !== e);
		return n
	}

	function pa(e, t, n, r, i, a, o, s) {
		return (i - o) * (t - s) - (e - o) * (a - s) >= 0 && (e - o) * (r - s) - (n - o) * (t - s) >= 0 && (n - o) * (a - s) - (i - o) * (r - s) >= 0
	}

	function da(e, t) {
		return e.next.i !== t.i && e.prev.i !== t.i && ! function (e, t) {
			var n = e;
			do {
				if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && va(n, n.next, e, t)) return !0;
				n = n.next
			} while (n !== e);
			return !1
		}(e, t) && ga(e, t) && ga(t, e) && function (e, t) {
			var n = e,
				r = !1,
				i = (e.x + t.x) / 2,
				a = (e.y + t.y) / 2;
			do {
				n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next
			} while (n !== e);
			return r
		}(e, t)
	}

	function fa(e, t, n) {
		return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
	}

	function ma(e, t) {
		return e.x === t.x && e.y === t.y
	}

	function va(e, t, n, r) {
		return !!(ma(e, t) && ma(n, r) || ma(e, r) && ma(n, t)) || fa(e, t, n) > 0 != fa(e, t, r) > 0 && fa(n, r, e) > 0 != fa(n, r, t) > 0
	}

	function ga(e, t) {
		return fa(e.prev, e, e.next) < 0 ? fa(e, t, e.next) >= 0 && fa(e, e.prev, t) >= 0 : fa(e, t, e.prev) < 0 || fa(e, e.next, t) < 0
	}

	function ya(e, t) {
		var n = new wa(e.i, e.x, e.y),
			r = new wa(t.i, t.x, t.y),
			i = e.next,
			a = t.prev;
		return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r
	}

	function xa(e, t, n, r) {
		var i = new wa(e, t, n);
		return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i
	}

	function ba(e) {
		e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
	}

	function wa(e, t, n) {
		this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
	}
	var _a = {
		area: function (e) {
			for (var t = e.length, n = 0, r = t - 1, i = 0; i < t; r = i++) n += e[r].x * e[i].y - e[i].x * e[r].y;
			return .5 * n
		},
		isClockWise: function (e) {
			return _a.area(e) < 0
		},
		triangulateShape: function (e, t) {
			var n = [],
				r = [],
				i = [];
			Ma(e), Sa(n, e);
			var a = e.length;
			t.forEach(Ma);
			for (var o = 0; o < t.length; o++) r.push(a), a += t[o].length, Sa(n, t[o]);
			var s = ea(n, r);
			for (o = 0; o < s.length; o += 3) i.push(s.slice(o, o + 3));
			return i
		}
	};

	function Ma(e) {
		var t = e.length;
		t > 2 && e[t - 1].equals(e[0]) && e.pop()
	}

	function Sa(e, t) {
		for (var n = 0; n < t.length; n++) e.push(t[n].x), e.push(t[n].y)
	}

	function Ta(e, t) {
		yn.call(this), this.type = "ExtrudeGeometry", this.parameters = {
			shapes: e,
			options: t
		}, this.fromBufferGeometry(new Ea(e, t)), this.mergeVertices()
	}

	function Ea(e, t) {
		On.call(this), this.type = "ExtrudeBufferGeometry", this.parameters = {
			shapes: e,
			options: t
		};
		for (var n = this, r = [], i = [], a = 0, o = (e = Array.isArray(e) ? e : [e]).length; a < o; a++) {
			s(e[a])
		}

		function s(e) {
			var a = [],
				o = void 0 !== t.curveSegments ? t.curveSegments : 12,
				s = void 0 !== t.steps ? t.steps : 1,
				l = void 0 !== t.depth ? t.depth : 100,
				c = void 0 === t.bevelEnabled || t.bevelEnabled,
				u = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
				h = void 0 !== t.bevelSize ? t.bevelSize : u - 2,
				p = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
				d = t.extrudePath,
				f = void 0 !== t.UVGenerator ? t.UVGenerator : Ca;
			void 0 !== t.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), l = t.amount);
			var m, v, g, y, x, b, w, _, M = !1;
			d && (m = d.getSpacedPoints(s), M = !0, c = !1, v = d.computeFrenetFrames(s, !1), g = new Vt, y = new Vt, x = new Vt), c || (p = 0, u = 0, h = 0);
			var S = e.extractPoints(o),
				T = S.shape,
				E = S.holes;
			if (!_a.isClockWise(T))
				for (T = T.reverse(), w = 0, _ = E.length; w < _; w++) b = E[w], _a.isClockWise(b) && (E[w] = b.reverse());
			var C = _a.triangulateShape(T, E),
				A = T;
			for (w = 0, _ = E.length; w < _; w++) b = E[w], T = T.concat(b);

			function P(e, t, n) {
				return t || console.error("THREE.ExtrudeGeometry: vec does not exist"), t.clone().multiplyScalar(n).add(e)
			}
			var L, R, O, k, I, N, D = T.length,
				z = C.length;

			function U(e, t, n) {
				var r, i, a, o = e.x - t.x,
					s = e.y - t.y,
					l = n.x - e.x,
					c = n.y - e.y,
					u = o * o + s * s,
					h = o * c - s * l;
				if (Math.abs(h) > Number.EPSILON) {
					var p = Math.sqrt(u),
						d = Math.sqrt(l * l + c * c),
						f = t.x - s / p,
						m = t.y + o / p,
						v = ((n.x - c / d - f) * c - (n.y + l / d - m) * l) / (o * c - s * l),
						g = (r = f + o * v - e.x) * r + (i = m + s * v - e.y) * i;
					if (g <= 2) return new jt(r, i);
					a = Math.sqrt(g / 2)
				} else {
					var y = !1;
					o > Number.EPSILON ? l > Number.EPSILON && (y = !0) : o < -Number.EPSILON ? l < -Number.EPSILON && (y = !0) : Math.sign(s) === Math.sign(c) && (y = !0), y ? (r = -s, i = o, a = Math.sqrt(u)) : (r = o, i = s, a = Math.sqrt(u / 2))
				}
				return new jt(r / a, i / a)
			}
			for (var B = [], F = 0, j = A.length, H = j - 1, G = F + 1; F < j; F++, H++, G++) H === j && (H = 0), G === j && (G = 0), B[F] = U(A[F], A[H], A[G]);
			var V, W, q = [],
				X = B.concat();
			for (w = 0, _ = E.length; w < _; w++) {
				for (b = E[w], V = [], F = 0, H = (j = b.length) - 1, G = F + 1; F < j; F++, H++, G++) H === j && (H = 0), G === j && (G = 0), V[F] = U(b[F], b[H], b[G]);
				q.push(V), X = X.concat(V)
			}
			for (L = 0; L < p; L++) {
				for (O = L / p, k = u * Math.cos(O * Math.PI / 2), R = h * Math.sin(O * Math.PI / 2), F = 0, j = A.length; F < j; F++) J((I = P(A[F], B[F], R)).x, I.y, -k);
				for (w = 0, _ = E.length; w < _; w++)
					for (b = E[w], V = q[w], F = 0, j = b.length; F < j; F++) J((I = P(b[F], V[F], R)).x, I.y, -k)
			}
			for (R = h, F = 0; F < D; F++) I = c ? P(T[F], X[F], R) : T[F], M ? (y.copy(v.normals[0]).multiplyScalar(I.x), g.copy(v.binormals[0]).multiplyScalar(I.y), x.copy(m[0]).add(y).add(g), J(x.x, x.y, x.z)) : J(I.x, I.y, 0);
			for (W = 1; W <= s; W++)
				for (F = 0; F < D; F++) I = c ? P(T[F], X[F], R) : T[F], M ? (y.copy(v.normals[W]).multiplyScalar(I.x), g.copy(v.binormals[W]).multiplyScalar(I.y), x.copy(m[W]).add(y).add(g), J(x.x, x.y, x.z)) : J(I.x, I.y, l / s * W);
			for (L = p - 1; L >= 0; L--) {
				for (O = L / p, k = u * Math.cos(O * Math.PI / 2), R = h * Math.sin(O * Math.PI / 2), F = 0, j = A.length; F < j; F++) J((I = P(A[F], B[F], R)).x, I.y, l + k);
				for (w = 0, _ = E.length; w < _; w++)
					for (b = E[w], V = q[w], F = 0, j = b.length; F < j; F++) I = P(b[F], V[F], R), M ? J(I.x, I.y + m[s - 1].y, m[s - 1].x + k) : J(I.x, I.y, l + k)
			}

			function Y(e, t) {
				var n, r;
				for (F = e.length; --F >= 0;) {
					n = F, (r = F - 1) < 0 && (r = e.length - 1);
					var i = 0,
						a = s + 2 * p;
					for (i = 0; i < a; i++) {
						var o = D * i,
							l = D * (i + 1);
						$(t + n + o, t + r + o, t + r + l, t + n + l)
					}
				}
			}

			function J(e, t, n) {
				a.push(e), a.push(t), a.push(n)
			}

			function Z(e, t, i) {
				Q(e), Q(t), Q(i);
				var a = r.length / 3,
					o = f.generateTopUV(n, r, a - 3, a - 2, a - 1);
				K(o[0]), K(o[1]), K(o[2])
			}

			function $(e, t, i, a) {
				Q(e), Q(t), Q(a), Q(t), Q(i), Q(a);
				var o = r.length / 3,
					s = f.generateSideWallUV(n, r, o - 6, o - 3, o - 2, o - 1);
				K(s[0]), K(s[1]), K(s[3]), K(s[1]), K(s[2]), K(s[3])
			}

			function Q(e) {
				r.push(a[3 * e + 0]), r.push(a[3 * e + 1]), r.push(a[3 * e + 2])
			}

			function K(e) {
				i.push(e.x), i.push(e.y)
			}! function () {
				var e = r.length / 3;
				if (c) {
					var t = 0,
						i = D * t;
					for (F = 0; F < z; F++) Z((N = C[F])[2] + i, N[1] + i, N[0] + i);
					for (i = D * (t = s + 2 * p), F = 0; F < z; F++) Z((N = C[F])[0] + i, N[1] + i, N[2] + i)
				} else {
					for (F = 0; F < z; F++) Z((N = C[F])[2], N[1], N[0]);
					for (F = 0; F < z; F++) Z((N = C[F])[0] + D * s, N[1] + D * s, N[2] + D * s)
				}
				n.addGroup(e, r.length / 3 - e, 0)
			}(),
			function () {
				var e = r.length / 3,
					t = 0;
				for (Y(A, t), t += A.length, w = 0, _ = E.length; w < _; w++) Y(b = E[w], t), t += b.length;
				n.addGroup(e, r.length / 3 - e, 1)
			}()
		}
		this.addAttribute("position", new Cn(r, 3)), this.addAttribute("uv", new Cn(i, 2)), this.computeVertexNormals()
	}
	Ta.prototype = Object.create(yn.prototype), Ta.prototype.constructor = Ta, Ta.prototype.toJSON = function () {
		var e = yn.prototype.toJSON.call(this);
		return Aa(this.parameters.shapes, this.parameters.options, e)
	}, Ea.prototype = Object.create(On.prototype), Ea.prototype.constructor = Ea, Ea.prototype.toJSON = function () {
		var e = On.prototype.toJSON.call(this);
		return Aa(this.parameters.shapes, this.parameters.options, e)
	};
	var Ca = {
		generateTopUV: function (e, t, n, r, i) {
			var a = t[3 * n],
				o = t[3 * n + 1],
				s = t[3 * r],
				l = t[3 * r + 1],
				c = t[3 * i],
				u = t[3 * i + 1];
			return [new jt(a, o), new jt(s, l), new jt(c, u)]
		},
		generateSideWallUV: function (e, t, n, r, i, a) {
			var o = t[3 * n],
				s = t[3 * n + 1],
				l = t[3 * n + 2],
				c = t[3 * r],
				u = t[3 * r + 1],
				h = t[3 * r + 2],
				p = t[3 * i],
				d = t[3 * i + 1],
				f = t[3 * i + 2],
				m = t[3 * a],
				v = t[3 * a + 1],
				g = t[3 * a + 2];
			return Math.abs(s - u) < .01 ? [new jt(o, 1 - l), new jt(c, 1 - h), new jt(p, 1 - f), new jt(m, 1 - g)] : [new jt(s, 1 - l), new jt(u, 1 - h), new jt(d, 1 - f), new jt(v, 1 - g)]
		}
	};

	function Aa(e, t, n) {
		if (n.shapes = [], Array.isArray(e))
			for (var r = 0, i = e.length; r < i; r++) {
				var a = e[r];
				n.shapes.push(a.uuid)
			} else n.shapes.push(e.uuid);
		return void 0 !== t.extrudePath && (n.options.extrudePath = t.extrudePath.toJSON()), n
	}

	function Pa(e, t) {
		yn.call(this), this.type = "TextGeometry", this.parameters = {
			text: e,
			parameters: t
		}, this.fromBufferGeometry(new La(e, t)), this.mergeVertices()
	}

	function La(e, t) {
		var n = (t = t || {}).font;
		if (!n || !n.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new yn;
		var r = n.generateShapes(e, t.size);
		t.depth = void 0 !== t.height ? t.height : 50, void 0 === t.bevelThickness && (t.bevelThickness = 10), void 0 === t.bevelSize && (t.bevelSize = 8), void 0 === t.bevelEnabled && (t.bevelEnabled = !1), Ea.call(this, r, t), this.type = "TextBufferGeometry"
	}

	function Ra(e, t, n, r, i, a, o) {
		yn.call(this), this.type = "SphereGeometry", this.parameters = {
			radius: e,
			widthSegments: t,
			heightSegments: n,
			phiStart: r,
			phiLength: i,
			thetaStart: a,
			thetaLength: o
		}, this.fromBufferGeometry(new Oa(e, t, n, r, i, a, o)), this.mergeVertices()
	}

	function Oa(e, t, n, r, i, a, o) {
		On.call(this), this.type = "SphereBufferGeometry", this.parameters = {
			radius: e,
			widthSegments: t,
			heightSegments: n,
			phiStart: r,
			phiLength: i,
			thetaStart: a,
			thetaLength: o
		}, e = e || 1, t = Math.max(3, Math.floor(t) || 8), n = Math.max(2, Math.floor(n) || 6), r = void 0 !== r ? r : 0, i = void 0 !== i ? i : 2 * Math.PI;
		var s, l, c = (a = void 0 !== a ? a : 0) + (o = void 0 !== o ? o : Math.PI),
			u = 0,
			h = [],
			p = new Vt,
			d = new Vt,
			f = [],
			m = [],
			v = [],
			g = [];
		for (l = 0; l <= n; l++) {
			var y = [],
				x = l / n;
			for (s = 0; s <= t; s++) {
				var b = s / t;
				p.x = -e * Math.cos(r + b * i) * Math.sin(a + x * o), p.y = e * Math.cos(a + x * o), p.z = e * Math.sin(r + b * i) * Math.sin(a + x * o), m.push(p.x, p.y, p.z), d.set(p.x, p.y, p.z).normalize(), v.push(d.x, d.y, d.z), g.push(b, 1 - x), y.push(u++)
			}
			h.push(y)
		}
		for (l = 0; l < n; l++)
			for (s = 0; s < t; s++) {
				var w = h[l][s + 1],
					_ = h[l][s],
					M = h[l + 1][s],
					S = h[l + 1][s + 1];
				(0 !== l || a > 0) && f.push(w, _, S), (l !== n - 1 || c < Math.PI) && f.push(_, M, S)
			}
		this.setIndex(f), this.addAttribute("position", new Cn(m, 3)), this.addAttribute("normal", new Cn(v, 3)), this.addAttribute("uv", new Cn(g, 2))
	}

	function ka(e, t, n, r, i, a) {
		yn.call(this), this.type = "RingGeometry", this.parameters = {
			innerRadius: e,
			outerRadius: t,
			thetaSegments: n,
			phiSegments: r,
			thetaStart: i,
			thetaLength: a
		}, this.fromBufferGeometry(new Ia(e, t, n, r, i, a)), this.mergeVertices()
	}

	function Ia(e, t, n, r, i, a) {
		On.call(this), this.type = "RingBufferGeometry", this.parameters = {
			innerRadius: e,
			outerRadius: t,
			thetaSegments: n,
			phiSegments: r,
			thetaStart: i,
			thetaLength: a
		}, e = e || .5, t = t || 1, i = void 0 !== i ? i : 0, a = void 0 !== a ? a : 2 * Math.PI, n = void 0 !== n ? Math.max(3, n) : 8;
		var o, s, l, c = [],
			u = [],
			h = [],
			p = [],
			d = e,
			f = (t - e) / (r = void 0 !== r ? Math.max(1, r) : 1),
			m = new Vt,
			v = new jt;
		for (s = 0; s <= r; s++) {
			for (l = 0; l <= n; l++) o = i + l / n * a, m.x = d * Math.cos(o), m.y = d * Math.sin(o), u.push(m.x, m.y, m.z), h.push(0, 0, 1), v.x = (m.x / t + 1) / 2, v.y = (m.y / t + 1) / 2, p.push(v.x, v.y);
			d += f
		}
		for (s = 0; s < r; s++) {
			var g = s * (n + 1);
			for (l = 0; l < n; l++) {
				var y = o = l + g,
					x = o + n + 1,
					b = o + n + 2,
					w = o + 1;
				c.push(y, x, w), c.push(x, b, w)
			}
		}
		this.setIndex(c), this.addAttribute("position", new Cn(u, 3)), this.addAttribute("normal", new Cn(h, 3)), this.addAttribute("uv", new Cn(p, 2))
	}

	function Na(e, t, n, r) {
		yn.call(this), this.type = "LatheGeometry", this.parameters = {
			points: e,
			segments: t,
			phiStart: n,
			phiLength: r
		}, this.fromBufferGeometry(new Da(e, t, n, r)), this.mergeVertices()
	}

	function Da(e, t, n, r) {
		On.call(this), this.type = "LatheBufferGeometry", this.parameters = {
			points: e,
			segments: t,
			phiStart: n,
			phiLength: r
		}, t = Math.floor(t) || 12, n = n || 0, r = r || 2 * Math.PI, r = Ft.clamp(r, 0, 2 * Math.PI);
		var i, a, o, s = [],
			l = [],
			c = [],
			u = 1 / t,
			h = new Vt,
			p = new jt;
		for (a = 0; a <= t; a++) {
			var d = n + a * u * r,
				f = Math.sin(d),
				m = Math.cos(d);
			for (o = 0; o <= e.length - 1; o++) h.x = e[o].x * f, h.y = e[o].y, h.z = e[o].x * m, l.push(h.x, h.y, h.z), p.x = a / t, p.y = o / (e.length - 1), c.push(p.x, p.y)
		}
		for (a = 0; a < t; a++)
			for (o = 0; o < e.length - 1; o++) {
				var v = i = o + a * e.length,
					g = i + e.length,
					y = i + e.length + 1,
					x = i + 1;
				s.push(v, g, x), s.push(g, y, x)
			}
		if (this.setIndex(s), this.addAttribute("position", new Cn(l, 3)), this.addAttribute("uv", new Cn(c, 2)), this.computeVertexNormals(), r === 2 * Math.PI) {
			var b = this.attributes.normal.array,
				w = new Vt,
				_ = new Vt,
				M = new Vt;
			for (i = t * e.length * 3, a = 0, o = 0; a < e.length; a++, o += 3) w.x = b[o + 0], w.y = b[o + 1], w.z = b[o + 2], _.x = b[i + o + 0], _.y = b[i + o + 1], _.z = b[i + o + 2], M.addVectors(w, _).normalize(), b[o + 0] = b[i + o + 0] = M.x, b[o + 1] = b[i + o + 1] = M.y, b[o + 2] = b[i + o + 2] = M.z
		}
	}

	function za(e, t) {
		yn.call(this), this.type = "ShapeGeometry", "object" == typeof t && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), t = t.curveSegments), this.parameters = {
			shapes: e,
			curveSegments: t
		}, this.fromBufferGeometry(new Ua(e, t)), this.mergeVertices()
	}

	function Ua(e, t) {
		On.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
			shapes: e,
			curveSegments: t
		}, t = t || 12;
		var n = [],
			r = [],
			i = [],
			a = [],
			o = 0,
			s = 0;
		if (!1 === Array.isArray(e)) c(e);
		else
			for (var l = 0; l < e.length; l++) c(e[l]), this.addGroup(o, s, l), o += s, s = 0;

		function c(e) {
			var o, l, c, u = r.length / 3,
				h = e.extractPoints(t),
				p = h.shape,
				d = h.holes;
			if (!1 === _a.isClockWise(p))
				for (p = p.reverse(), o = 0, l = d.length; o < l; o++) c = d[o], !0 === _a.isClockWise(c) && (d[o] = c.reverse());
			var f = _a.triangulateShape(p, d);
			for (o = 0, l = d.length; o < l; o++) c = d[o], p = p.concat(c);
			for (o = 0, l = p.length; o < l; o++) {
				var m = p[o];
				r.push(m.x, m.y, 0), i.push(0, 0, 1), a.push(m.x, m.y)
			}
			for (o = 0, l = f.length; o < l; o++) {
				var v = f[o],
					g = v[0] + u,
					y = v[1] + u,
					x = v[2] + u;
				n.push(g, y, x), s += 3
			}
		}
		this.setIndex(n), this.addAttribute("position", new Cn(r, 3)), this.addAttribute("normal", new Cn(i, 3)), this.addAttribute("uv", new Cn(a, 2))
	}

	function Ba(e, t) {
		if (t.shapes = [], Array.isArray(e))
			for (var n = 0, r = e.length; n < r; n++) {
				var i = e[n];
				t.shapes.push(i.uuid)
			} else t.shapes.push(e.uuid);
		return t
	}

	function Fa(e, t) {
		On.call(this), this.type = "EdgesGeometry", this.parameters = {
			thresholdAngle: t
		}, t = void 0 !== t ? t : 1;
		var n, r, i, a, o = [],
			s = Math.cos(Ft.DEG2RAD * t),
			l = [0, 0],
			c = {},
			u = ["a", "b", "c"];
		e.isBufferGeometry ? (a = new yn).fromBufferGeometry(e) : a = e.clone(), a.mergeVertices(), a.computeFaceNormals();
		for (var h = a.vertices, p = a.faces, d = 0, f = p.length; d < f; d++)
			for (var m = p[d], v = 0; v < 3; v++) n = m[u[v]], r = m[u[(v + 1) % 3]], l[0] = Math.min(n, r), l[1] = Math.max(n, r), void 0 === c[i = l[0] + "," + l[1]] ? c[i] = {
				index1: l[0],
				index2: l[1],
				face1: d,
				face2: void 0
			} : c[i].face2 = d;
		for (i in c) {
			var g = c[i];
			if (void 0 === g.face2 || p[g.face1].normal.dot(p[g.face2].normal) <= s) {
				var y = h[g.index1];
				o.push(y.x, y.y, y.z), y = h[g.index2], o.push(y.x, y.y, y.z)
			}
		}
		this.addAttribute("position", new Cn(o, 3))
	}

	function ja(e, t, n, r, i, a, o, s) {
		yn.call(this), this.type = "CylinderGeometry", this.parameters = {
			radiusTop: e,
			radiusBottom: t,
			height: n,
			radialSegments: r,
			heightSegments: i,
			openEnded: a,
			thetaStart: o,
			thetaLength: s
		}, this.fromBufferGeometry(new Ha(e, t, n, r, i, a, o, s)), this.mergeVertices()
	}

	function Ha(e, t, n, r, i, a, o, s) {
		On.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
			radiusTop: e,
			radiusBottom: t,
			height: n,
			radialSegments: r,
			heightSegments: i,
			openEnded: a,
			thetaStart: o,
			thetaLength: s
		};
		var l = this;
		e = void 0 !== e ? e : 1, t = void 0 !== t ? t : 1, n = n || 1, r = Math.floor(r) || 8, i = Math.floor(i) || 1, a = void 0 !== a && a, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : 2 * Math.PI;
		var c = [],
			u = [],
			h = [],
			p = [],
			d = 0,
			f = [],
			m = n / 2,
			v = 0;

		function g(n) {
			var i, a, f, g = new jt,
				y = new Vt,
				x = 0,
				b = !0 === n ? e : t,
				w = !0 === n ? 1 : -1;
			for (a = d, i = 1; i <= r; i++) u.push(0, m * w, 0), h.push(0, w, 0), p.push(.5, .5), d++;
			for (f = d, i = 0; i <= r; i++) {
				var _ = i / r * s + o,
					M = Math.cos(_),
					S = Math.sin(_);
				y.x = b * S, y.y = m * w, y.z = b * M, u.push(y.x, y.y, y.z), h.push(0, w, 0), g.x = .5 * M + .5, g.y = .5 * S * w + .5, p.push(g.x, g.y), d++
			}
			for (i = 0; i < r; i++) {
				var T = a + i,
					E = f + i;
				!0 === n ? c.push(E, E + 1, T) : c.push(E + 1, E, T), x += 3
			}
			l.addGroup(v, x, !0 === n ? 1 : 2), v += x
		}! function () {
			var a, g, y = new Vt,
				x = new Vt,
				b = 0,
				w = (t - e) / n;
			for (g = 0; g <= i; g++) {
				var _ = [],
					M = g / i,
					S = M * (t - e) + e;
				for (a = 0; a <= r; a++) {
					var T = a / r,
						E = T * s + o,
						C = Math.sin(E),
						A = Math.cos(E);
					x.x = S * C, x.y = -M * n + m, x.z = S * A, u.push(x.x, x.y, x.z), y.set(C, w, A).normalize(), h.push(y.x, y.y, y.z), p.push(T, 1 - M), _.push(d++)
				}
				f.push(_)
			}
			for (a = 0; a < r; a++)
				for (g = 0; g < i; g++) {
					var P = f[g][a],
						L = f[g + 1][a],
						R = f[g + 1][a + 1],
						O = f[g][a + 1];
					c.push(P, L, O), c.push(L, R, O), b += 6
				}
			l.addGroup(v, b, 0), v += b
		}(), !1 === a && (e > 0 && g(!0), t > 0 && g(!1)), this.setIndex(c), this.addAttribute("position", new Cn(u, 3)), this.addAttribute("normal", new Cn(h, 3)), this.addAttribute("uv", new Cn(p, 2))
	}

	function Ga(e, t, n, r, i, a, o) {
		ja.call(this, 0, e, t, n, r, i, a, o), this.type = "ConeGeometry", this.parameters = {
			radius: e,
			height: t,
			radialSegments: n,
			heightSegments: r,
			openEnded: i,
			thetaStart: a,
			thetaLength: o
		}
	}

	function Va(e, t, n, r, i, a, o) {
		Ha.call(this, 0, e, t, n, r, i, a, o), this.type = "ConeBufferGeometry", this.parameters = {
			radius: e,
			height: t,
			radialSegments: n,
			heightSegments: r,
			openEnded: i,
			thetaStart: a,
			thetaLength: o
		}
	}

	function Wa(e, t, n, r) {
		yn.call(this), this.type = "CircleGeometry", this.parameters = {
			radius: e,
			segments: t,
			thetaStart: n,
			thetaLength: r
		}, this.fromBufferGeometry(new qa(e, t, n, r)), this.mergeVertices()
	}

	function qa(e, t, n, r) {
		On.call(this), this.type = "CircleBufferGeometry", this.parameters = {
			radius: e,
			segments: t,
			thetaStart: n,
			thetaLength: r
		}, e = e || 1, t = void 0 !== t ? Math.max(3, t) : 8, n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
		var i, a, o = [],
			s = [],
			l = [],
			c = [],
			u = new Vt,
			h = new jt;
		for (s.push(0, 0, 0), l.push(0, 0, 1), c.push(.5, .5), a = 0, i = 3; a <= t; a++, i += 3) {
			var p = n + a / t * r;
			u.x = e * Math.cos(p), u.y = e * Math.sin(p), s.push(u.x, u.y, u.z), l.push(0, 0, 1), h.x = (s[i] / e + 1) / 2, h.y = (s[i + 1] / e + 1) / 2, c.push(h.x, h.y)
		}
		for (i = 1; i <= t; i++) o.push(i, i + 1, 0);
		this.setIndex(o), this.addAttribute("position", new Cn(s, 3)), this.addAttribute("normal", new Cn(l, 3)), this.addAttribute("uv", new Cn(c, 2))
	}
	Pa.prototype = Object.create(yn.prototype), Pa.prototype.constructor = Pa, La.prototype = Object.create(Ea.prototype), La.prototype.constructor = La, Ra.prototype = Object.create(yn.prototype), Ra.prototype.constructor = Ra, Oa.prototype = Object.create(On.prototype), Oa.prototype.constructor = Oa, ka.prototype = Object.create(yn.prototype), ka.prototype.constructor = ka, Ia.prototype = Object.create(On.prototype), Ia.prototype.constructor = Ia, Na.prototype = Object.create(yn.prototype), Na.prototype.constructor = Na, Da.prototype = Object.create(On.prototype), Da.prototype.constructor = Da, za.prototype = Object.create(yn.prototype), za.prototype.constructor = za, za.prototype.toJSON = function () {
		var e = yn.prototype.toJSON.call(this);
		return Ba(this.parameters.shapes, e)
	}, Ua.prototype = Object.create(On.prototype), Ua.prototype.constructor = Ua, Ua.prototype.toJSON = function () {
		var e = On.prototype.toJSON.call(this);
		return Ba(this.parameters.shapes, e)
	}, Fa.prototype = Object.create(On.prototype), Fa.prototype.constructor = Fa, ja.prototype = Object.create(yn.prototype), ja.prototype.constructor = ja, Ha.prototype = Object.create(On.prototype), Ha.prototype.constructor = Ha, Ga.prototype = Object.create(ja.prototype), Ga.prototype.constructor = Ga, Va.prototype = Object.create(Ha.prototype), Va.prototype.constructor = Va, Wa.prototype = Object.create(yn.prototype), Wa.prototype.constructor = Wa, qa.prototype = Object.create(On.prototype), qa.prototype.constructor = qa;
	var Xa = Object.freeze({
		WireframeGeometry: Ni,
		ParametricGeometry: Di,
		ParametricBufferGeometry: zi,
		TetrahedronGeometry: Fi,
		TetrahedronBufferGeometry: ji,
		OctahedronGeometry: Hi,
		OctahedronBufferGeometry: Gi,
		IcosahedronGeometry: Vi,
		IcosahedronBufferGeometry: Wi,
		DodecahedronGeometry: qi,
		DodecahedronBufferGeometry: Xi,
		PolyhedronGeometry: Ui,
		PolyhedronBufferGeometry: Bi,
		TubeGeometry: Yi,
		TubeBufferGeometry: Ji,
		TorusKnotGeometry: Zi,
		TorusKnotBufferGeometry: $i,
		TorusGeometry: Qi,
		TorusBufferGeometry: Ki,
		TextGeometry: Pa,
		TextBufferGeometry: La,
		SphereGeometry: Ra,
		SphereBufferGeometry: Oa,
		RingGeometry: ka,
		RingBufferGeometry: Ia,
		PlaneGeometry: Nn,
		PlaneBufferGeometry: Dn,
		LatheGeometry: Na,
		LatheBufferGeometry: Da,
		ShapeGeometry: za,
		ShapeBufferGeometry: Ua,
		ExtrudeGeometry: Ta,
		ExtrudeBufferGeometry: Ea,
		EdgesGeometry: Fa,
		ConeGeometry: Ga,
		ConeBufferGeometry: Va,
		CylinderGeometry: ja,
		CylinderBufferGeometry: Ha,
		CircleGeometry: Wa,
		CircleBufferGeometry: qa,
		BoxGeometry: kn,
		BoxBufferGeometry: In
	});

	function Ya(e) {
		Un.call(this), this.type = "ShadowMaterial", this.color = new sn(0), this.transparent = !0, this.setValues(e)
	}

	function Ja(e) {
		Bn.call(this, e), this.type = "RawShaderMaterial"
	}

	function Za(e) {
		Un.call(this), this.defines = {
			STANDARD: ""
		}, this.type = "MeshStandardMaterial", this.color = new sn(16777215), this.roughness = .5, this.metalness = .5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new sn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ut, this.normalScale = new jt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
	}

	function $a(e) {
		Za.call(this), this.defines = {
			PHYSICAL: ""
		}, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(e)
	}

	function Qa(e) {
		Un.call(this), this.type = "MeshPhongMaterial", this.color = new sn(16777215), this.specular = new sn(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new sn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ut, this.normalScale = new jt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = he, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
	}

	function Ka(e) {
		Qa.call(this), this.defines = {
			TOON: ""
		}, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(e)
	}

	function eo(e) {
		Un.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ut, this.normalScale = new jt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
	}

	function to(e) {
		Un.call(this), this.type = "MeshLambertMaterial", this.color = new sn(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new sn(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = he, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
	}

	function no(e) {
		if (Un.call(this), this.defines = {
				MATCAP: ""
			}, this.type = "MeshMatcapMaterial", this.color = new sn(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ut, this.normalScale = new jt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.lights = !1, this.setValues(e), null === this.matcap) {
			var t = document.createElement("canvas");
			t.width = 1, t.height = 1;
			var n = t.getContext("2d");
			n.fillStyle = "#fff", n.fillRect(0, 0, 1, 1), this.matcap = new THREE.CanvasTexture(t)
		}
	}

	function ro(e) {
		Ti.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e)
	}
	Ya.prototype = Object.create(Un.prototype), Ya.prototype.constructor = Ya, Ya.prototype.isShadowMaterial = !0, Ya.prototype.copy = function (e) {
		return Un.prototype.copy.call(this, e), this.color.copy(e.color), this
	}, Ja.prototype = Object.create(Bn.prototype), Ja.prototype.constructor = Ja, Ja.prototype.isRawShaderMaterial = !0, Za.prototype = Object.create(Un.prototype), Za.prototype.constructor = Za, Za.prototype.isMeshStandardMaterial = !0, Za.prototype.copy = function (e) {
		return Un.prototype.copy.call(this, e), this.defines = {
			STANDARD: ""
		}, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
	}, $a.prototype = Object.create(Za.prototype), $a.prototype.constructor = $a, $a.prototype.isMeshPhysicalMaterial = !0, $a.prototype.copy = function (e) {
		return Za.prototype.copy.call(this, e), this.defines = {
			PHYSICAL: ""
		}, this.reflectivity = e.reflectivity, this.clearCoat = e.clearCoat, this.clearCoatRoughness = e.clearCoatRoughness, this
	}, Qa.prototype = Object.create(Un.prototype), Qa.prototype.constructor = Qa, Qa.prototype.isMeshPhongMaterial = !0, Qa.prototype.copy = function (e) {
		return Un.prototype.copy.call(this, e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
	}, Ka.prototype = Object.create(Qa.prototype), Ka.prototype.constructor = Ka, Ka.prototype.isMeshToonMaterial = !0, Ka.prototype.copy = function (e) {
		return Qa.prototype.copy.call(this, e), this.gradientMap = e.gradientMap, this
	}, eo.prototype = Object.create(Un.prototype), eo.prototype.constructor = eo, eo.prototype.isMeshNormalMaterial = !0, eo.prototype.copy = function (e) {
		return Un.prototype.copy.call(this, e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
	}, to.prototype = Object.create(Un.prototype), to.prototype.constructor = to, to.prototype.isMeshLambertMaterial = !0, to.prototype.copy = function (e) {
		return Un.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
	}, no.prototype = Object.create(Un.prototype), no.prototype.constructor = no, no.prototype.isMeshMatcapMaterial = !0, no.prototype.copy = function (e) {
		return Un.prototype.copy.call(this, e), this.defines = {
			MATCAP: ""
		}, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
	}, ro.prototype = Object.create(Ti.prototype), ro.prototype.constructor = ro, ro.prototype.isLineDashedMaterial = !0, ro.prototype.copy = function (e) {
		return Ti.prototype.copy.call(this, e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this
	};
	var io = Object.freeze({
			ShadowMaterial: Ya,
			SpriteMaterial: xi,
			RawShaderMaterial: Ja,
			ShaderMaterial: Bn,
			PointsMaterial: Pi,
			MeshPhysicalMaterial: $a,
			MeshStandardMaterial: Za,
			MeshPhongMaterial: Qa,
			MeshToonMaterial: Ka,
			MeshNormalMaterial: eo,
			MeshLambertMaterial: to,
			MeshDepthMaterial: ei,
			MeshDistanceMaterial: ti,
			MeshBasicMaterial: Hn,
			MeshMatcapMaterial: no,
			LineDashedMaterial: ro,
			LineBasicMaterial: Ti,
			Material: Un
		}),
		ao = {
			arraySlice: function (e, t, n) {
				return ao.isTypedArray(e) ? new e.constructor(e.subarray(t, void 0 !== n ? n : e.length)) : e.slice(t, n)
			},
			convertArray: function (e, t, n) {
				return !e || !n && e.constructor === t ? e : "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
			},
			isTypedArray: function (e) {
				return ArrayBuffer.isView(e) && !(e instanceof DataView)
			},
			getKeyframeOrder: function (e) {
				for (var t = e.length, n = new Array(t), r = 0; r !== t; ++r) n[r] = r;
				return n.sort(function (t, n) {
					return e[t] - e[n]
				}), n
			},
			sortedArray: function (e, t, n) {
				for (var r = e.length, i = new e.constructor(r), a = 0, o = 0; o !== r; ++a)
					for (var s = n[a] * t, l = 0; l !== t; ++l) i[o++] = e[s + l];
				return i
			},
			flattenJSON: function (e, t, n, r) {
				for (var i = 1, a = e[0]; void 0 !== a && void 0 === a[r];) a = e[i++];
				if (void 0 !== a) {
					var o = a[r];
					if (void 0 !== o)
						if (Array.isArray(o))
							do {
								void 0 !== (o = a[r]) && (t.push(a.time), n.push.apply(n, o)), a = e[i++]
							} while (void 0 !== a);
						else if (void 0 !== o.toArray)
						do {
							void 0 !== (o = a[r]) && (t.push(a.time), o.toArray(n, n.length)), a = e[i++]
						} while (void 0 !== a);
					else
						do {
							void 0 !== (o = a[r]) && (t.push(a.time), n.push(o)), a = e[i++]
						} while (void 0 !== a)
				}
			}
		};

	function oo(e, t, n, r) {
		this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = void 0 !== r ? r : new t.constructor(n), this.sampleValues = t, this.valueSize = n
	}

	function so(e, t, n, r) {
		oo.call(this, e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
	}

	function lo(e, t, n, r) {
		oo.call(this, e, t, n, r)
	}

	function co(e, t, n, r) {
		oo.call(this, e, t, n, r)
	}

	function uo(e, t, n, r) {
		if (void 0 === e) throw new Error("THREE.KeyframeTrack: track name is undefined");
		if (void 0 === t || 0 === t.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
		this.name = e, this.times = ao.convertArray(t, this.TimeBufferType), this.values = ao.convertArray(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation)
	}

	function ho(e, t, n) {
		uo.call(this, e, t, n)
	}

	function po(e, t, n, r) {
		uo.call(this, e, t, n, r)
	}

	function fo(e, t, n, r) {
		uo.call(this, e, t, n, r)
	}

	function mo(e, t, n, r) {
		oo.call(this, e, t, n, r)
	}

	function vo(e, t, n, r) {
		uo.call(this, e, t, n, r)
	}

	function go(e, t, n, r) {
		uo.call(this, e, t, n, r)
	}

	function yo(e, t, n, r) {
		uo.call(this, e, t, n, r)
	}

	function xo(e, t, n) {
		this.name = e, this.tracks = n, this.duration = void 0 !== t ? t : -1, this.uuid = Ft.generateUUID(), this.duration < 0 && this.resetDuration()
	}

	function bo(e) {
		if (void 0 === e.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
		var t = function (e) {
			switch (e.toLowerCase()) {
				case "scalar":
				case "double":
				case "float":
				case "number":
				case "integer":
					return fo;
				case "vector":
				case "vector2":
				case "vector3":
				case "vector4":
					return yo;
				case "color":
					return po;
				case "quaternion":
					return vo;
				case "bool":
				case "boolean":
					return ho;
				case "string":
					return go
			}
			throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e)
		}(e.type);
		if (void 0 === e.times) {
			var n = [],
				r = [];
			ao.flattenJSON(e.keys, n, r, "value"), e.times = n, e.values = r
		}
		return void 0 !== t.parse ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation)
	}
	Object.assign(oo.prototype, {
			evaluate: function (e) {
				var t = this.parameterPositions,
					n = this._cachedIndex,
					r = t[n],
					i = t[n - 1];
				e: {
					t: {
						var a;n: {
							r: if (!(e < r)) {
								for (var o = n + 2;;) {
									if (void 0 === r) {
										if (e < i) break r;
										return n = t.length, this._cachedIndex = n, this.afterEnd_(n - 1, e, i)
									}
									if (n === o) break;
									if (i = r, e < (r = t[++n])) break t
								}
								a = t.length;
								break n
							}if (e >= i) break e;
							var s = t[1];e < s && (n = 2, i = s);
							for (o = n - 2;;) {
								if (void 0 === i) return this._cachedIndex = 0, this.beforeStart_(0, e, r);
								if (n === o) break;
								if (r = i, e >= (i = t[--n - 1])) break t
							}
							a = n,
							n = 0
						}
						for (; n < a;) {
							var l = n + a >>> 1;
							e < t[l] ? a = l : n = l + 1
						}
						if (r = t[n], void 0 === (i = t[n - 1])) return this._cachedIndex = 0,
						this.beforeStart_(0, e, r);
						if (void 0 === r) return n = t.length,
						this._cachedIndex = n,
						this.afterEnd_(n - 1, i, e)
					}
					this._cachedIndex = n,
					this.intervalChanged_(n, i, r)
				}
				return this.interpolate_(n, i, e, r)
			},
			settings: null,
			DefaultSettings_: {},
			getSettings_: function () {
				return this.settings || this.DefaultSettings_
			},
			copySampleValue_: function (e) {
				for (var t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r, a = 0; a !== r; ++a) t[a] = n[i + a];
				return t
			},
			interpolate_: function () {
				throw new Error("call to abstract method")
			},
			intervalChanged_: function () {}
		}),
		//!\ DECLARE ALIAS AFTER assign prototype !
		Object.assign(oo.prototype, {
			beforeStart_: oo.prototype.copySampleValue_,
			afterEnd_: oo.prototype.copySampleValue_
		}), so.prototype = Object.assign(Object.create(oo.prototype), {
			constructor: so,
			DefaultSettings_: {
				endingStart: Tt,
				endingEnd: Tt
			},
			intervalChanged_: function (e, t, n) {
				var r = this.parameterPositions,
					i = e - 2,
					a = e + 1,
					o = r[i],
					s = r[a];
				if (void 0 === o) switch (this.getSettings_().endingStart) {
					case 2401:
						i = e, o = 2 * t - n;
						break;
					case 2402:
						o = t + r[i = r.length - 2] - r[i + 1];
						break;
					default:
						i = e, o = n
				}
				if (void 0 === s) switch (this.getSettings_().endingEnd) {
					case 2401:
						a = e, s = 2 * n - t;
						break;
					case 2402:
						a = 1, s = n + r[1] - r[0];
						break;
					default:
						a = e - 1, s = t
				}
				var l = .5 * (n - t),
					c = this.valueSize;
				this._weightPrev = l / (t - o), this._weightNext = l / (s - n), this._offsetPrev = i * c, this._offsetNext = a * c
			},
			interpolate_: function (e, t, n, r) {
				for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, l = s - o, c = this._offsetPrev, u = this._offsetNext, h = this._weightPrev, p = this._weightNext, d = (n - t) / (r - t), f = d * d, m = f * d, v = -h * m + 2 * h * f - h * d, g = (1 + h) * m + (-1.5 - 2 * h) * f + (-.5 + h) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, x = p * m - p * f, b = 0; b !== o; ++b) i[b] = v * a[c + b] + g * a[l + b] + y * a[s + b] + x * a[u + b];
				return i
			}
		}), lo.prototype = Object.assign(Object.create(oo.prototype), {
			constructor: lo,
			interpolate_: function (e, t, n, r) {
				for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, l = s - o, c = (n - t) / (r - t), u = 1 - c, h = 0; h !== o; ++h) i[h] = a[l + h] * u + a[s + h] * c;
				return i
			}
		}), co.prototype = Object.assign(Object.create(oo.prototype), {
			constructor: co,
			interpolate_: function (e) {
				return this.copySampleValue_(e - 1)
			}
		}), Object.assign(uo, {
			toJSON: function (e) {
				var t, n = e.constructor;
				if (void 0 !== n.toJSON) t = n.toJSON(e);
				else {
					t = {
						name: e.name,
						times: ao.convertArray(e.times, Array),
						values: ao.convertArray(e.values, Array)
					};
					var r = e.getInterpolation();
					r !== e.DefaultInterpolation && (t.interpolation = r)
				}
				return t.type = e.ValueTypeName, t
			}
		}), Object.assign(uo.prototype, {
			constructor: uo,
			TimeBufferType: Float32Array,
			ValueBufferType: Float32Array,
			DefaultInterpolation: 2301,
			InterpolantFactoryMethodDiscrete: function (e) {
				return new co(this.times, this.values, this.getValueSize(), e)
			},
			InterpolantFactoryMethodLinear: function (e) {
				return new lo(this.times, this.values, this.getValueSize(), e)
			},
			InterpolantFactoryMethodSmooth: function (e) {
				return new so(this.times, this.values, this.getValueSize(), e)
			},
			setInterpolation: function (e) {
				var t;
				switch (e) {
					case 2300:
						t = this.InterpolantFactoryMethodDiscrete;
						break;
					case 2301:
						t = this.InterpolantFactoryMethodLinear;
						break;
					case 2302:
						t = this.InterpolantFactoryMethodSmooth
				}
				if (void 0 === t) {
					var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
					if (void 0 === this.createInterpolant) {
						if (e === this.DefaultInterpolation) throw new Error(n);
						this.setInterpolation(this.DefaultInterpolation)
					}
					return console.warn("THREE.KeyframeTrack:", n), this
				}
				return this.createInterpolant = t, this
			},
			getInterpolation: function () {
				switch (this.createInterpolant) {
					case this.InterpolantFactoryMethodDiscrete:
						return 2300;
					case this.InterpolantFactoryMethodLinear:
						return 2301;
					case this.InterpolantFactoryMethodSmooth:
						return 2302
				}
			},
			getValueSize: function () {
				return this.values.length / this.times.length
			},
			shift: function (e) {
				if (0 !== e)
					for (var t = this.times, n = 0, r = t.length; n !== r; ++n) t[n] += e;
				return this
			},
			scale: function (e) {
				if (1 !== e)
					for (var t = this.times, n = 0, r = t.length; n !== r; ++n) t[n] *= e;
				return this
			},
			trim: function (e, t) {
				for (var n = this.times, r = n.length, i = 0, a = r - 1; i !== r && n[i] < e;) ++i;
				for (; - 1 !== a && n[a] > t;) --a;
				if (++a, 0 !== i || a !== r) {
					i >= a && (i = (a = Math.max(a, 1)) - 1);
					var o = this.getValueSize();
					this.times = ao.arraySlice(n, i, a), this.values = ao.arraySlice(this.values, i * o, a * o)
				}
				return this
			},
			validate: function () {
				var e = !0,
					t = this.getValueSize();
				t - Math.floor(t) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
				var n = this.times,
					r = this.values,
					i = n.length;
				0 === i && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
				for (var a = null, o = 0; o !== i; o++) {
					var s = n[o];
					if ("number" == typeof s && isNaN(s)) {
						console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s), e = !1;
						break
					}
					if (null !== a && a > s) {
						console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a), e = !1;
						break
					}
					a = s
				}
				if (void 0 !== r && ao.isTypedArray(r)) {
					o = 0;
					for (var l = r.length; o !== l; ++o) {
						var c = r[o];
						if (isNaN(c)) {
							console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1;
							break
						}
					}
				}
				return e
			},
			optimize: function () {
				for (var e = this.times, t = this.values, n = this.getValueSize(), r = 2302 === this.getInterpolation(), i = 1, a = e.length - 1, o = 1; o < a; ++o) {
					var s = !1,
						l = e[o];
					if (l !== e[o + 1] && (1 !== o || l !== l[0]))
						if (r) s = !0;
						else
							for (var c = o * n, u = c - n, h = c + n, p = 0; p !== n; ++p) {
								var d = t[c + p];
								if (d !== t[u + p] || d !== t[h + p]) {
									s = !0;
									break
								}
							}
					if (s) {
						if (o !== i) {
							e[i] = e[o];
							var f = o * n,
								m = i * n;
							for (p = 0; p !== n; ++p) t[m + p] = t[f + p]
						}++i
					}
				}
				if (a > 0) {
					e[i] = e[a];
					for (f = a * n, m = i * n, p = 0; p !== n; ++p) t[m + p] = t[f + p];
					++i
				}
				return i !== e.length && (this.times = ao.arraySlice(e, 0, i), this.values = ao.arraySlice(t, 0, i * n)), this
			}
		}), ho.prototype = Object.assign(Object.create(uo.prototype), {
			constructor: ho,
			ValueTypeName: "bool",
			ValueBufferType: Array,
			DefaultInterpolation: 2300,
			InterpolantFactoryMethodLinear: void 0,
			InterpolantFactoryMethodSmooth: void 0
		}), po.prototype = Object.assign(Object.create(uo.prototype), {
			constructor: po,
			ValueTypeName: "color"
		}), fo.prototype = Object.assign(Object.create(uo.prototype), {
			constructor: fo,
			ValueTypeName: "number"
		}), mo.prototype = Object.assign(Object.create(oo.prototype), {
			constructor: mo,
			interpolate_: function (e, t, n, r) {
				for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, l = (n - t) / (r - t), c = s + o; s !== c; s += 4) Gt.slerpFlat(i, 0, a, s - o, a, s, l);
				return i
			}
		}), vo.prototype = Object.assign(Object.create(uo.prototype), {
			constructor: vo,
			ValueTypeName: "quaternion",
			DefaultInterpolation: 2301,
			InterpolantFactoryMethodLinear: function (e) {
				return new mo(this.times, this.values, this.getValueSize(), e)
			},
			InterpolantFactoryMethodSmooth: void 0
		}), go.prototype = Object.assign(Object.create(uo.prototype), {
			constructor: go,
			ValueTypeName: "string",
			ValueBufferType: Array,
			DefaultInterpolation: 2300,
			InterpolantFactoryMethodLinear: void 0,
			InterpolantFactoryMethodSmooth: void 0
		}), yo.prototype = Object.assign(Object.create(uo.prototype), {
			constructor: yo,
			ValueTypeName: "vector"
		}), Object.assign(xo, {
			parse: function (e) {
				for (var t = [], n = e.tracks, r = 1 / (e.fps || 1), i = 0, a = n.length; i !== a; ++i) t.push(bo(n[i]).scale(r));
				return new xo(e.name, e.duration, t)
			},
			toJSON: function (e) {
				for (var t = [], n = e.tracks, r = {
						name: e.name,
						duration: e.duration,
						tracks: t,
						uuid: e.uuid
					}, i = 0, a = n.length; i !== a; ++i) t.push(uo.toJSON(n[i]));
				return r
			},
			CreateFromMorphTargetSequence: function (e, t, n, r) {
				for (var i = t.length, a = [], o = 0; o < i; o++) {
					var s = [],
						l = [];
					s.push((o + i - 1) % i, o, (o + 1) % i), l.push(0, 1, 0);
					var c = ao.getKeyframeOrder(s);
					s = ao.sortedArray(s, 1, c), l = ao.sortedArray(l, 1, c), r || 0 !== s[0] || (s.push(i), l.push(l[0])), a.push(new fo(".morphTargetInfluences[" + t[o].name + "]", s, l).scale(1 / n))
				}
				return new xo(e, -1, a)
			},
			findByName: function (e, t) {
				var n = e;
				if (!Array.isArray(e)) {
					var r = e;
					n = r.geometry && r.geometry.animations || r.animations
				}
				for (var i = 0; i < n.length; i++)
					if (n[i].name === t) return n[i];
				return null
			},
			CreateClipsFromMorphTargetSequences: function (e, t, n) {
				for (var r = {}, i = /^([\w-]*?)([\d]+)$/, a = 0, o = e.length; a < o; a++) {
					var s = e[a],
						l = s.name.match(i);
					if (l && l.length > 1) {
						var c = r[h = l[1]];
						c || (r[h] = c = []), c.push(s)
					}
				}
				var u = [];
				for (var h in r) u.push(xo.CreateFromMorphTargetSequence(h, r[h], t, n));
				return u
			},
			parseAnimation: function (e, t) {
				if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
				for (var n = function (e, t, n, r, i) {
						if (0 !== n.length) {
							var a = [],
								o = [];
							ao.flattenJSON(n, a, o, r), 0 !== a.length && i.push(new e(t, a, o))
						}
					}, r = [], i = e.name || "default", a = e.length || -1, o = e.fps || 30, s = e.hierarchy || [], l = 0; l < s.length; l++) {
					var c = s[l].keys;
					if (c && 0 !== c.length)
						if (c[0].morphTargets) {
							for (var u = {}, h = 0; h < c.length; h++)
								if (c[h].morphTargets)
									for (var p = 0; p < c[h].morphTargets.length; p++) u[c[h].morphTargets[p]] = -1;
							for (var d in u) {
								var f = [],
									m = [];
								for (p = 0; p !== c[h].morphTargets.length; ++p) {
									var v = c[h];
									f.push(v.time), m.push(v.morphTarget === d ? 1 : 0)
								}
								r.push(new fo(".morphTargetInfluence[" + d + "]", f, m))
							}
							a = u.length * (o || 1)
						} else {
							var g = ".bones[" + t[l].name + "]";
							n(yo, g + ".position", c, "pos", r), n(vo, g + ".quaternion", c, "rot", r), n(yo, g + ".scale", c, "scl", r)
						}
				}
				return 0 === r.length ? null : new xo(i, a, r)
			}
		}), Object.assign(xo.prototype, {
			resetDuration: function () {
				for (var e = 0, t = 0, n = this.tracks.length; t !== n; ++t) {
					var r = this.tracks[t];
					e = Math.max(e, r.times[r.times.length - 1])
				}
				return this.duration = e, this
			},
			trim: function () {
				for (var e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
				return this
			},
			validate: function () {
				for (var e = !0, t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
				return e
			},
			optimize: function () {
				for (var e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
				return this
			}
		});
	var wo = {
		enabled: !1,
		files: {},
		add: function (e, t) {
			!1 !== this.enabled && (this.files[e] = t)
		},
		get: function (e) {
			if (!1 !== this.enabled) return this.files[e]
		},
		remove: function (e) {
			delete this.files[e]
		},
		clear: function () {
			this.files = {}
		}
	};

	function _o(e, t, n) {
		var r = this,
			i = !1,
			a = 0,
			o = 0,
			s = void 0;
		this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function (e) {
			o++, !1 === i && void 0 !== r.onStart && r.onStart(e, a, o), i = !0
		}, this.itemEnd = function (e) {
			a++, void 0 !== r.onProgress && r.onProgress(e, a, o), a === o && (i = !1, void 0 !== r.onLoad && r.onLoad())
		}, this.itemError = function (e) {
			void 0 !== r.onError && r.onError(e)
		}, this.resolveURL = function (e) {
			return s ? s(e) : e
		}, this.setURLModifier = function (e) {
			return s = e, this
		}
	}
	var Mo = new _o,
		So = {};

	function To(e) {
		this.manager = void 0 !== e ? e : Mo
	}

	function Eo(e) {
		this.manager = void 0 !== e ? e : Mo, this._parser = null
	}

	function Co(e) {
		this.manager = void 0 !== e ? e : Mo
	}

	function Ao(e) {
		this.manager = void 0 !== e ? e : Mo
	}

	function Po(e) {
		this.manager = void 0 !== e ? e : Mo
	}

	function Lo() {
		this.type = "Curve", this.arcLengthDivisions = 200
	}

	function Ro(e, t, n, r, i, a, o, s) {
		Lo.call(this), this.type = "EllipseCurve", this.aX = e || 0, this.aY = t || 0, this.xRadius = n || 1, this.yRadius = r || 1, this.aStartAngle = i || 0, this.aEndAngle = a || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = s || 0
	}

	function Oo(e, t, n, r, i, a) {
		Ro.call(this, e, t, n, n, r, i, a), this.type = "ArcCurve"
	}

	function ko() {
		var e = 0,
			t = 0,
			n = 0,
			r = 0;

		function i(i, a, o, s) {
			e = i, t = o, n = -3 * i + 3 * a - 2 * o - s, r = 2 * i - 2 * a + o + s
		}
		return {
			initCatmullRom: function (e, t, n, r, a) {
				i(t, n, a * (n - e), a * (r - t))
			},
			initNonuniformCatmullRom: function (e, t, n, r, a, o, s) {
				var l = (t - e) / a - (n - e) / (a + o) + (n - t) / o,
					c = (n - t) / o - (r - t) / (o + s) + (r - n) / s;
				i(t, n, l *= o, c *= o)
			},
			calc: function (i) {
				var a = i * i;
				return e + t * i + n * a + r * (a * i)
			}
		}
	}
	Object.assign(To.prototype, {
		load: function (e, t, n, r) {
			void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
			var i = this,
				a = wo.get(e);
			if (void 0 !== a) return i.manager.itemStart(e), setTimeout(function () {
				t && t(a), i.manager.itemEnd(e)
			}, 0), a;
			if (void 0 === So[e]) {
				var o = e.match(/^data:(.*?)(;base64)?,(.*)$/);
				if (o) {
					var s = o[1],
						l = !!o[2],
						c = o[3];
					c = decodeURIComponent(c), l && (c = atob(c));
					try {
						var u, h = (this.responseType || "").toLowerCase();
						switch (h) {
							case "arraybuffer":
							case "blob":
								for (var p = new Uint8Array(c.length), d = 0; d < c.length; d++) p[d] = c.charCodeAt(d);
								u = "blob" === h ? new Blob([p.buffer], {
									type: s
								}) : p.buffer;
								break;
							case "document":
								var f = new DOMParser;
								u = f.parseFromString(c, s);
								break;
							case "json":
								u = JSON.parse(c);
								break;
							default:
								u = c
						}
						setTimeout(function () {
							t && t(u), i.manager.itemEnd(e)
						}, 0)
					} catch (t) {
						setTimeout(function () {
							r && r(t), i.manager.itemError(e), i.manager.itemEnd(e)
						}, 0)
					}
				} else {
					So[e] = [], So[e].push({
						onLoad: t,
						onProgress: n,
						onError: r
					});
					var m = new XMLHttpRequest;
					for (var v in m.open("GET", e, !0), m.addEventListener("load", function (t) {
							var n = this.response;
							wo.add(e, n);
							var r = So[e];
							if (delete So[e], 200 === this.status || 0 === this.status) {
								0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received.");
								for (var a = 0, o = r.length; a < o; a++) {
									(s = r[a]).onLoad && s.onLoad(n)
								}
								i.manager.itemEnd(e)
							} else {
								for (a = 0, o = r.length; a < o; a++) {
									var s;
									(s = r[a]).onError && s.onError(t)
								}
								i.manager.itemError(e), i.manager.itemEnd(e)
							}
						}, !1), m.addEventListener("progress", function (t) {
							for (var n = So[e], r = 0, i = n.length; r < i; r++) {
								var a = n[r];
								a.onProgress && a.onProgress(t)
							}
						}, !1), m.addEventListener("error", function (t) {
							var n = So[e];
							delete So[e];
							for (var r = 0, a = n.length; r < a; r++) {
								var o = n[r];
								o.onError && o.onError(t)
							}
							i.manager.itemError(e), i.manager.itemEnd(e)
						}, !1), m.addEventListener("abort", function (t) {
							var n = So[e];
							delete So[e];
							for (var r = 0, a = n.length; r < a; r++) {
								var o = n[r];
								o.onError && o.onError(t)
							}
							i.manager.itemError(e), i.manager.itemEnd(e)
						}, !1), void 0 !== this.responseType && (m.responseType = this.responseType), void 0 !== this.withCredentials && (m.withCredentials = this.withCredentials), m.overrideMimeType && m.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) m.setRequestHeader(v, this.requestHeader[v]);
					m.send(null)
				}
				return i.manager.itemStart(e), m
			}
			So[e].push({
				onLoad: t,
				onProgress: n,
				onError: r
			})
		},
		setPath: function (e) {
			return this.path = e, this
		},
		setResponseType: function (e) {
			return this.responseType = e, this
		},
		setWithCredentials: function (e) {
			return this.withCredentials = e, this
		},
		setMimeType: function (e) {
			return this.mimeType = e, this
		},
		setRequestHeader: function (e) {
			return this.requestHeader = e, this
		}
	}), Object.assign(function (e) {
		this.manager = void 0 !== e ? e : Mo
	}.prototype, {
		load: function (e, t, n, r) {
			var i = this,
				a = new To(i.manager);
			a.setPath(i.path), a.load(e, function (e) {
				t(i.parse(JSON.parse(e)))
			}, n, r)
		},
		parse: function (e, t) {
			for (var n = [], r = 0; r < e.length; r++) {
				var i = xo.parse(e[r]);
				n.push(i)
			}
			t(n)
		},
		setPath: function (e) {
			return this.path = e, this
		}
	}), Object.assign(function (e) {
		this.manager = void 0 !== e ? e : Mo, this._parser = null
	}.prototype, {
		load: function (e, t, n, r) {
			var i = this,
				a = [],
				o = new Oi;
			o.image = a;
			var s = new To(this.manager);

			function l(l) {
				s.load(e[l], function (e) {
					var n = i._parser(e, !0);
					a[l] = {
						width: n.width,
						height: n.height,
						format: n.format,
						mipmaps: n.mipmaps
					}, 6 === (c += 1) && (1 === n.mipmapCount && (o.minFilter = Oe), o.format = n.format, o.needsUpdate = !0, t && t(o))
				}, n, r)
			}
			if (s.setPath(this.path), s.setResponseType("arraybuffer"), Array.isArray(e))
				for (var c = 0, u = 0, h = e.length; u < h; ++u) l(u);
			else s.load(e, function (e) {
				var n = i._parser(e, !0);
				if (n.isCubemap)
					for (var r = n.mipmaps.length / n.mipmapCount, s = 0; s < r; s++) {
						a[s] = {
							mipmaps: []
						};
						for (var l = 0; l < n.mipmapCount; l++) a[s].mipmaps.push(n.mipmaps[s * n.mipmapCount + l]), a[s].format = n.format, a[s].width = n.width, a[s].height = n.height
					} else o.image.width = n.width, o.image.height = n.height, o.mipmaps = n.mipmaps;
				1 === n.mipmapCount && (o.minFilter = Oe), o.format = n.format, o.needsUpdate = !0, t && t(o)
			}, n, r);
			return o
		},
		setPath: function (e) {
			return this.path = e, this
		}
	}), Object.assign(Eo.prototype, {
		load: function (e, t, n, r) {
			var i = this,
				a = new Qt,
				o = new To(this.manager);
			return o.setResponseType("arraybuffer"), o.setPath(this.path), o.load(e, function (e) {
				var n = i._parser(e);
				n && (void 0 !== n.image ? a.image = n.image : void 0 !== n.data && (a.image.width = n.width, a.image.height = n.height, a.image.data = n.data), a.wrapS = void 0 !== n.wrapS ? n.wrapS : Ce, a.wrapT = void 0 !== n.wrapT ? n.wrapT : Ce, a.magFilter = void 0 !== n.magFilter ? n.magFilter : Oe, a.minFilter = void 0 !== n.minFilter ? n.minFilter : Ie, a.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1, void 0 !== n.format && (a.format = n.format), void 0 !== n.type && (a.type = n.type), void 0 !== n.mipmaps && (a.mipmaps = n.mipmaps), 1 === n.mipmapCount && (a.minFilter = Oe), a.needsUpdate = !0, t && t(a, n))
			}, n, r), a
		},
		setPath: function (e) {
			return this.path = e, this
		}
	}), Object.assign(Co.prototype, {
		crossOrigin: "anonymous",
		load: function (e, t, n, r) {
			void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
			var i = this,
				a = wo.get(e);
			if (void 0 !== a) return i.manager.itemStart(e), setTimeout(function () {
				t && t(a), i.manager.itemEnd(e)
			}, 0), a;
			var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

			function s() {
				o.removeEventListener("load", s, !1), o.removeEventListener("error", l, !1), wo.add(e, this), t && t(this), i.manager.itemEnd(e)
			}

			function l(t) {
				o.removeEventListener("load", s, !1), o.removeEventListener("error", l, !1), r && r(t), i.manager.itemError(e), i.manager.itemEnd(e)
			}
			return o.addEventListener("load", s, !1), o.addEventListener("error", l, !1), "data:" !== e.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), i.manager.itemStart(e), o.src = e, o
		},
		setCrossOrigin: function (e) {
			return this.crossOrigin = e, this
		},
		setPath: function (e) {
			return this.path = e, this
		}
	}), Object.assign(Ao.prototype, {
		crossOrigin: "anonymous",
		load: function (e, t, n, r) {
			var i = new Wn,
				a = new Co(this.manager);
			a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
			var o = 0;

			function s(n) {
				a.load(e[n], function (e) {
					i.images[n] = e, 6 === ++o && (i.needsUpdate = !0, t && t(i))
				}, void 0, r)
			}
			for (var l = 0; l < e.length; ++l) s(l);
			return i
		},
		setCrossOrigin: function (e) {
			return this.crossOrigin = e, this
		},
		setPath: function (e) {
			return this.path = e, this
		}
	}), Object.assign(Po.prototype, {
		crossOrigin: "anonymous",
		load: function (e, t, n, r) {
			var i = new Yt,
				a = new Co(this.manager);
			return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function (n) {
				i.image = n;
				var r = e.search(/\.jpe?g$/i) > 0 || 0 === e.search(/^data\:image\/jpeg/);
				i.format = r ? Ye : Je, i.needsUpdate = !0, void 0 !== t && t(i)
			}, n, r), i
		},
		setCrossOrigin: function (e) {
			return this.crossOrigin = e, this
		},
		setPath: function (e) {
			return this.path = e, this
		}
	}), Object.assign(Lo.prototype, {
		getPoint: function () {
			return console.warn("THREE.Curve: .getPoint() not implemented."), null
		},
		getPointAt: function (e, t) {
			var n = this.getUtoTmapping(e);
			return this.getPoint(n, t)
		},
		getPoints: function (e) {
			void 0 === e && (e = 5);
			for (var t = [], n = 0; n <= e; n++) t.push(this.getPoint(n / e));
			return t
		},
		getSpacedPoints: function (e) {
			void 0 === e && (e = 5);
			for (var t = [], n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
			return t
		},
		getLength: function () {
			var e = this.getLengths();
			return e[e.length - 1]
		},
		getLengths: function (e) {
			if (void 0 === e && (e = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
			this.needsUpdate = !1;
			var t, n, r = [],
				i = this.getPoint(0),
				a = 0;
			for (r.push(0), n = 1; n <= e; n++) a += (t = this.getPoint(n / e)).distanceTo(i), r.push(a), i = t;
			return this.cacheArcLengths = r, r
		},
		updateArcLengths: function () {
			this.needsUpdate = !0, this.getLengths()
		},
		getUtoTmapping: function (e, t) {
			var n, r = this.getLengths(),
				i = 0,
				a = r.length;
			n = t || e * r[a - 1];
			for (var o, s = 0, l = a - 1; s <= l;)
				if ((o = r[i = Math.floor(s + (l - s) / 2)] - n) < 0) s = i + 1;
				else {
					if (!(o > 0)) {
						l = i;
						break
					}
					l = i - 1
				} if (r[i = l] === n) return i / (a - 1);
			var c = r[i];
			return (i + (n - c) / (r[i + 1] - c)) / (a - 1)
		},
		getTangent: function (e) {
			var t = e - 1e-4,
				n = e + 1e-4;
			t < 0 && (t = 0), n > 1 && (n = 1);
			var r = this.getPoint(t);
			return this.getPoint(n).clone().sub(r).normalize()
		},
		getTangentAt: function (e) {
			var t = this.getUtoTmapping(e);
			return this.getTangent(t)
		},
		computeFrenetFrames: function (e, t) {
			var n, r, i, a = new Vt,
				o = [],
				s = [],
				l = [],
				c = new Vt,
				u = new Ht;
			for (n = 0; n <= e; n++) r = n / e, o[n] = this.getTangentAt(r), o[n].normalize();
			s[0] = new Vt, l[0] = new Vt;
			var h = Number.MAX_VALUE,
				p = Math.abs(o[0].x),
				d = Math.abs(o[0].y),
				f = Math.abs(o[0].z);
			for (p <= h && (h = p, a.set(1, 0, 0)), d <= h && (h = d, a.set(0, 1, 0)), f <= h && a.set(0, 0, 1), c.crossVectors(o[0], a).normalize(), s[0].crossVectors(o[0], c), l[0].crossVectors(o[0], s[0]), n = 1; n <= e; n++) s[n] = s[n - 1].clone(), l[n] = l[n - 1].clone(), c.crossVectors(o[n - 1], o[n]), c.length() > Number.EPSILON && (c.normalize(), i = Math.acos(Ft.clamp(o[n - 1].dot(o[n]), -1, 1)), s[n].applyMatrix4(u.makeRotationAxis(c, i))), l[n].crossVectors(o[n], s[n]);
			if (!0 === t)
				for (i = Math.acos(Ft.clamp(s[0].dot(s[e]), -1, 1)), i /= e, o[0].dot(c.crossVectors(s[0], s[e])) > 0 && (i = -i), n = 1; n <= e; n++) s[n].applyMatrix4(u.makeRotationAxis(o[n], i * n)), l[n].crossVectors(o[n], s[n]);
			return {
				tangents: o,
				normals: s,
				binormals: l
			}
		},
		clone: function () {
			return (new this.constructor).copy(this)
		},
		copy: function (e) {
			return this.arcLengthDivisions = e.arcLengthDivisions, this
		},
		toJSON: function () {
			var e = {
				metadata: {
					version: 4.5,
					type: "Curve",
					generator: "Curve.toJSON"
				}
			};
			return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e
		},
		fromJSON: function (e) {
			return this.arcLengthDivisions = e.arcLengthDivisions, this
		}
	}), Ro.prototype = Object.create(Lo.prototype), Ro.prototype.constructor = Ro, Ro.prototype.isEllipseCurve = !0, Ro.prototype.getPoint = function (e, t) {
		for (var n = t || new jt, r = 2 * Math.PI, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < Number.EPSILON; i < 0;) i += r;
		for (; i > r;) i -= r;
		i < Number.EPSILON && (i = a ? 0 : r), !0 !== this.aClockwise || a || (i === r ? i = -r : i -= r);
		var o = this.aStartAngle + e * i,
			s = this.aX + this.xRadius * Math.cos(o),
			l = this.aY + this.yRadius * Math.sin(o);
		if (0 !== this.aRotation) {
			var c = Math.cos(this.aRotation),
				u = Math.sin(this.aRotation),
				h = s - this.aX,
				p = l - this.aY;
			s = h * c - p * u + this.aX, l = h * u + p * c + this.aY
		}
		return n.set(s, l)
	}, Ro.prototype.copy = function (e) {
		return Lo.prototype.copy.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
	}, Ro.prototype.toJSON = function () {
		var e = Lo.prototype.toJSON.call(this);
		return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e
	}, Ro.prototype.fromJSON = function (e) {
		return Lo.prototype.fromJSON.call(this, e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
	}, Oo.prototype = Object.create(Ro.prototype), Oo.prototype.constructor = Oo, Oo.prototype.isArcCurve = !0;
	var Io = new Vt,
		No = new ko,
		Do = new ko,
		zo = new ko;

	function Uo(e, t, n, r) {
		Lo.call(this), this.type = "CatmullRomCurve3", this.points = e || [], this.closed = t || !1, this.curveType = n || "centripetal", this.tension = r || .5
	}

	function Bo(e, t, n, r, i) {
		var a = .5 * (r - t),
			o = .5 * (i - n),
			s = e * e;
		return (2 * n - 2 * r + a + o) * (e * s) + (-3 * n + 3 * r - 2 * a - o) * s + a * e + n
	}

	function Fo(e, t, n, r) {
		return function (e, t) {
			var n = 1 - e;
			return n * n * t
		}(e, t) + function (e, t) {
			return 2 * (1 - e) * e * t
		}(e, n) + function (e, t) {
			return e * e * t
		}(e, r)
	}

	function jo(e, t, n, r, i) {
		return function (e, t) {
			var n = 1 - e;
			return n * n * n * t
		}(e, t) + function (e, t) {
			var n = 1 - e;
			return 3 * n * n * e * t
		}(e, n) + function (e, t) {
			return 3 * (1 - e) * e * e * t
		}(e, r) + function (e, t) {
			return e * e * e * t
		}(e, i)
	}

	function Ho(e, t, n, r) {
		Lo.call(this), this.type = "CubicBezierCurve", this.v0 = e || new jt, this.v1 = t || new jt, this.v2 = n || new jt, this.v3 = r || new jt
	}

	function Go(e, t, n, r) {
		Lo.call(this), this.type = "CubicBezierCurve3", this.v0 = e || new Vt, this.v1 = t || new Vt, this.v2 = n || new Vt, this.v3 = r || new Vt
	}

	function Vo(e, t) {
		Lo.call(this), this.type = "LineCurve", this.v1 = e || new jt, this.v2 = t || new jt
	}

	function Wo(e, t) {
		Lo.call(this), this.type = "LineCurve3", this.v1 = e || new Vt, this.v2 = t || new Vt
	}

	function qo(e, t, n) {
		Lo.call(this), this.type = "QuadraticBezierCurve", this.v0 = e || new jt, this.v1 = t || new jt, this.v2 = n || new jt
	}

	function Xo(e, t, n) {
		Lo.call(this), this.type = "QuadraticBezierCurve3", this.v0 = e || new Vt, this.v1 = t || new Vt, this.v2 = n || new Vt
	}

	function Yo(e) {
		Lo.call(this), this.type = "SplineCurve", this.points = e || []
	}
	Uo.prototype = Object.create(Lo.prototype), Uo.prototype.constructor = Uo, Uo.prototype.isCatmullRomCurve3 = !0, Uo.prototype.getPoint = function (e, t) {
		var n, r, i, a, o = t || new Vt,
			s = this.points,
			l = s.length,
			c = (l - (this.closed ? 0 : 1)) * e,
			u = Math.floor(c),
			h = c - u;
		if (this.closed ? u += u > 0 ? 0 : (Math.floor(Math.abs(u) / l) + 1) * l : 0 === h && u === l - 1 && (u = l - 2, h = 1), this.closed || u > 0 ? n = s[(u - 1) % l] : (Io.subVectors(s[0], s[1]).add(s[0]), n = Io), r = s[u % l], i = s[(u + 1) % l], this.closed || u + 2 < l ? a = s[(u + 2) % l] : (Io.subVectors(s[l - 1], s[l - 2]).add(s[l - 1]), a = Io), "centripetal" === this.curveType || "chordal" === this.curveType) {
			var p = "chordal" === this.curveType ? .5 : .25,
				d = Math.pow(n.distanceToSquared(r), p),
				f = Math.pow(r.distanceToSquared(i), p),
				m = Math.pow(i.distanceToSquared(a), p);
			f < 1e-4 && (f = 1), d < 1e-4 && (d = f), m < 1e-4 && (m = f), No.initNonuniformCatmullRom(n.x, r.x, i.x, a.x, d, f, m), Do.initNonuniformCatmullRom(n.y, r.y, i.y, a.y, d, f, m), zo.initNonuniformCatmullRom(n.z, r.z, i.z, a.z, d, f, m)
		} else "catmullrom" === this.curveType && (No.initCatmullRom(n.x, r.x, i.x, a.x, this.tension), Do.initCatmullRom(n.y, r.y, i.y, a.y, this.tension), zo.initCatmullRom(n.z, r.z, i.z, a.z, this.tension));
		return o.set(No.calc(h), Do.calc(h), zo.calc(h)), o
	}, Uo.prototype.copy = function (e) {
		Lo.prototype.copy.call(this, e), this.points = [];
		for (var t = 0, n = e.points.length; t < n; t++) {
			var r = e.points[t];
			this.points.push(r.clone())
		}
		return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
	}, Uo.prototype.toJSON = function () {
		var e = Lo.prototype.toJSON.call(this);
		e.points = [];
		for (var t = 0, n = this.points.length; t < n; t++) {
			var r = this.points[t];
			e.points.push(r.toArray())
		}
		return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e
	}, Uo.prototype.fromJSON = function (e) {
		Lo.prototype.fromJSON.call(this, e), this.points = [];
		for (var t = 0, n = e.points.length; t < n; t++) {
			var r = e.points[t];
			this.points.push((new Vt).fromArray(r))
		}
		return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
	}, Ho.prototype = Object.create(Lo.prototype), Ho.prototype.constructor = Ho, Ho.prototype.isCubicBezierCurve = !0, Ho.prototype.getPoint = function (e, t) {
		var n = t || new jt,
			r = this.v0,
			i = this.v1,
			a = this.v2,
			o = this.v3;
		return n.set(jo(e, r.x, i.x, a.x, o.x), jo(e, r.y, i.y, a.y, o.y)), n
	}, Ho.prototype.copy = function (e) {
		return Lo.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
	}, Ho.prototype.toJSON = function () {
		var e = Lo.prototype.toJSON.call(this);
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
	}, Ho.prototype.fromJSON = function (e) {
		return Lo.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
	}, Go.prototype = Object.create(Lo.prototype), Go.prototype.constructor = Go, Go.prototype.isCubicBezierCurve3 = !0, Go.prototype.getPoint = function (e, t) {
		var n = t || new Vt,
			r = this.v0,
			i = this.v1,
			a = this.v2,
			o = this.v3;
		return n.set(jo(e, r.x, i.x, a.x, o.x), jo(e, r.y, i.y, a.y, o.y), jo(e, r.z, i.z, a.z, o.z)), n
	}, Go.prototype.copy = function (e) {
		return Lo.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
	}, Go.prototype.toJSON = function () {
		var e = Lo.prototype.toJSON.call(this);
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
	}, Go.prototype.fromJSON = function (e) {
		return Lo.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
	}, Vo.prototype = Object.create(Lo.prototype), Vo.prototype.constructor = Vo, Vo.prototype.isLineCurve = !0, Vo.prototype.getPoint = function (e, t) {
		var n = t || new jt;
		return 1 === e ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
	}, Vo.prototype.getPointAt = function (e, t) {
		return this.getPoint(e, t)
	}, Vo.prototype.getTangent = function () {
		return this.v2.clone().sub(this.v1).normalize()
	}, Vo.prototype.copy = function (e) {
		return Lo.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
	}, Vo.prototype.toJSON = function () {
		var e = Lo.prototype.toJSON.call(this);
		return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
	}, Vo.prototype.fromJSON = function (e) {
		return Lo.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
	}, Wo.prototype = Object.create(Lo.prototype), Wo.prototype.constructor = Wo, Wo.prototype.isLineCurve3 = !0, Wo.prototype.getPoint = function (e, t) {
		var n = t || new Vt;
		return 1 === e ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n
	}, Wo.prototype.getPointAt = function (e, t) {
		return this.getPoint(e, t)
	}, Wo.prototype.copy = function (e) {
		return Lo.prototype.copy.call(this, e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
	}, Wo.prototype.toJSON = function () {
		var e = Lo.prototype.toJSON.call(this);
		return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
	}, Wo.prototype.fromJSON = function (e) {
		return Lo.prototype.fromJSON.call(this, e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
	}, qo.prototype = Object.create(Lo.prototype), qo.prototype.constructor = qo, qo.prototype.isQuadraticBezierCurve = !0, qo.prototype.getPoint = function (e, t) {
		var n = t || new jt,
			r = this.v0,
			i = this.v1,
			a = this.v2;
		return n.set(Fo(e, r.x, i.x, a.x), Fo(e, r.y, i.y, a.y)), n
	}, qo.prototype.copy = function (e) {
		return Lo.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
	}, qo.prototype.toJSON = function () {
		var e = Lo.prototype.toJSON.call(this);
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
	}, qo.prototype.fromJSON = function (e) {
		return Lo.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
	}, Xo.prototype = Object.create(Lo.prototype), Xo.prototype.constructor = Xo, Xo.prototype.isQuadraticBezierCurve3 = !0, Xo.prototype.getPoint = function (e, t) {
		var n = t || new Vt,
			r = this.v0,
			i = this.v1,
			a = this.v2;
		return n.set(Fo(e, r.x, i.x, a.x), Fo(e, r.y, i.y, a.y), Fo(e, r.z, i.z, a.z)), n
	}, Xo.prototype.copy = function (e) {
		return Lo.prototype.copy.call(this, e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
	}, Xo.prototype.toJSON = function () {
		var e = Lo.prototype.toJSON.call(this);
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
	}, Xo.prototype.fromJSON = function (e) {
		return Lo.prototype.fromJSON.call(this, e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
	}, Yo.prototype = Object.create(Lo.prototype), Yo.prototype.constructor = Yo, Yo.prototype.isSplineCurve = !0, Yo.prototype.getPoint = function (e, t) {
		var n = t || new jt,
			r = this.points,
			i = (r.length - 1) * e,
			a = Math.floor(i),
			o = i - a,
			s = r[0 === a ? a : a - 1],
			l = r[a],
			c = r[a > r.length - 2 ? r.length - 1 : a + 1],
			u = r[a > r.length - 3 ? r.length - 1 : a + 2];
		return n.set(Bo(o, s.x, l.x, c.x, u.x), Bo(o, s.y, l.y, c.y, u.y)), n
	}, Yo.prototype.copy = function (e) {
		Lo.prototype.copy.call(this, e), this.points = [];
		for (var t = 0, n = e.points.length; t < n; t++) {
			var r = e.points[t];
			this.points.push(r.clone())
		}
		return this
	}, Yo.prototype.toJSON = function () {
		var e = Lo.prototype.toJSON.call(this);
		e.points = [];
		for (var t = 0, n = this.points.length; t < n; t++) {
			var r = this.points[t];
			e.points.push(r.toArray())
		}
		return e
	}, Yo.prototype.fromJSON = function (e) {
		Lo.prototype.fromJSON.call(this, e), this.points = [];
		for (var t = 0, n = e.points.length; t < n; t++) {
			var r = e.points[t];
			this.points.push((new jt).fromArray(r))
		}
		return this
	};
	var Jo = Object.freeze({
		ArcCurve: Oo,
		CatmullRomCurve3: Uo,
		CubicBezierCurve: Ho,
		CubicBezierCurve3: Go,
		EllipseCurve: Ro,
		LineCurve: Vo,
		LineCurve3: Wo,
		QuadraticBezierCurve: qo,
		QuadraticBezierCurve3: Xo,
		SplineCurve: Yo
	});

	function Zo() {
		Lo.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
	}

	function $o(e) {
		Zo.call(this), this.type = "Path", this.currentPoint = new jt, e && this.setFromPoints(e)
	}

	function Qo(e) {
		$o.call(this, e), this.uuid = Ft.generateUUID(), this.type = "Shape", this.holes = []
	}

	function Ko(e, t) {
		vn.call(this), this.type = "Light", this.color = new sn(e), this.intensity = void 0 !== t ? t : 1, this.receiveShadow = void 0
	}

	function es(e, t, n) {
		Ko.call(this, e, n), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(vn.DefaultUp), this.updateMatrix(), this.groundColor = new sn(t)
	}

	function ts(e) {
		this.camera = e, this.bias = 0, this.radius = 1, this.mapSize = new jt(512, 512), this.map = null, this.matrix = new Ht
	}

	function ns() {
		ts.call(this, new oi(50, 1, .5, 500))
	}

	function rs(e, t, n, r, i, a) {
		Ko.call(this, e, t), this.type = "SpotLight", this.position.copy(vn.DefaultUp), this.updateMatrix(), this.target = new vn, Object.defineProperty(this, "power", {
			get: function () {
				return this.intensity * Math.PI
			},
			set: function (e) {
				this.intensity = e / Math.PI
			}
		}), this.distance = void 0 !== n ? n : 0, this.angle = void 0 !== r ? r : Math.PI / 3, this.penumbra = void 0 !== i ? i : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new ns
	}

	function is(e, t, n, r) {
		Ko.call(this, e, t), this.type = "PointLight", Object.defineProperty(this, "power", {
			get: function () {
				return 4 * this.intensity * Math.PI
			},
			set: function (e) {
				this.intensity = e / (4 * Math.PI)
			}
		}), this.distance = void 0 !== n ? n : 0, this.decay = void 0 !== r ? r : 1, this.shadow = new ts(new oi(90, 1, .5, 500))
	}

	function as(e, t, n, r, i, a) {
		ai.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = void 0 !== e ? e : -1, this.right = void 0 !== t ? t : 1, this.top = void 0 !== n ? n : 1, this.bottom = void 0 !== r ? r : -1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
	}

	function os() {
		ts.call(this, new as(-5, 5, 5, -5, .5, 500))
	}

	function ss(e, t) {
		Ko.call(this, e, t), this.type = "DirectionalLight", this.position.copy(vn.DefaultUp), this.updateMatrix(), this.target = new vn, this.shadow = new os
	}

	function ls(e, t) {
		Ko.call(this, e, t), this.type = "AmbientLight", this.castShadow = void 0
	}

	function cs(e, t, n, r) {
		Ko.call(this, e, t), this.type = "RectAreaLight", this.width = void 0 !== n ? n : 10, this.height = void 0 !== r ? r : 10
	}

	function us(e) {
		this.manager = void 0 !== e ? e : Mo, this.textures = {}
	}
	Zo.prototype = Object.assign(Object.create(Lo.prototype), {
		constructor: Zo,
		add: function (e) {
			this.curves.push(e)
		},
		closePath: function () {
			var e = this.curves[0].getPoint(0),
				t = this.curves[this.curves.length - 1].getPoint(1);
			e.equals(t) || this.curves.push(new Vo(t, e))
		},
		getPoint: function (e) {
			for (var t = e * this.getLength(), n = this.getCurveLengths(), r = 0; r < n.length;) {
				if (n[r] >= t) {
					var i = n[r] - t,
						a = this.curves[r],
						o = a.getLength(),
						s = 0 === o ? 0 : 1 - i / o;
					return a.getPointAt(s)
				}
				r++
			}
			return null
		},
		getLength: function () {
			var e = this.getCurveLengths();
			return e[e.length - 1]
		},
		updateArcLengths: function () {
			this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
		},
		getCurveLengths: function () {
			if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
			for (var e = [], t = 0, n = 0, r = this.curves.length; n < r; n++) t += this.curves[n].getLength(), e.push(t);
			return this.cacheLengths = e, e
		},
		getSpacedPoints: function (e) {
			void 0 === e && (e = 40);
			for (var t = [], n = 0; n <= e; n++) t.push(this.getPoint(n / e));
			return this.autoClose && t.push(t[0]), t
		},
		getPoints: function (e) {
			e = e || 12;
			for (var t, n = [], r = 0, i = this.curves; r < i.length; r++)
				for (var a = i[r], o = a && a.isEllipseCurve ? 2 * e : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? e * a.points.length : e, s = a.getPoints(o), l = 0; l < s.length; l++) {
					var c = s[l];
					t && t.equals(c) || (n.push(c), t = c)
				}
			return this.autoClose && n.length > 1 && !n[n.length - 1].equals(n[0]) && n.push(n[0]), n
		},
		copy: function (e) {
			Lo.prototype.copy.call(this, e), this.curves = [];
			for (var t = 0, n = e.curves.length; t < n; t++) {
				var r = e.curves[t];
				this.curves.push(r.clone())
			}
			return this.autoClose = e.autoClose, this
		},
		toJSON: function () {
			var e = Lo.prototype.toJSON.call(this);
			e.autoClose = this.autoClose, e.curves = [];
			for (var t = 0, n = this.curves.length; t < n; t++) {
				var r = this.curves[t];
				e.curves.push(r.toJSON())
			}
			return e
		},
		fromJSON: function (e) {
			Lo.prototype.fromJSON.call(this, e), this.autoClose = e.autoClose, this.curves = [];
			for (var t = 0, n = e.curves.length; t < n; t++) {
				var r = e.curves[t];
				this.curves.push((new Jo[r.type]).fromJSON(r))
			}
			return this
		}
	}), $o.prototype = Object.assign(Object.create(Zo.prototype), {
		constructor: $o,
		setFromPoints: function (e) {
			this.moveTo(e[0].x, e[0].y);
			for (var t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y)
		},
		moveTo: function (e, t) {
			this.currentPoint.set(e, t)
		},
		lineTo: function (e, t) {
			var n = new Vo(this.currentPoint.clone(), new jt(e, t));
			this.curves.push(n), this.currentPoint.set(e, t)
		},
		quadraticCurveTo: function (e, t, n, r) {
			var i = new qo(this.currentPoint.clone(), new jt(e, t), new jt(n, r));
			this.curves.push(i), this.currentPoint.set(n, r)
		},
		bezierCurveTo: function (e, t, n, r, i, a) {
			var o = new Ho(this.currentPoint.clone(), new jt(e, t), new jt(n, r), new jt(i, a));
			this.curves.push(o), this.currentPoint.set(i, a)
		},
		splineThru: function (e) {
			var t = new Yo([this.currentPoint.clone()].concat(e));
			this.curves.push(t), this.currentPoint.copy(e[e.length - 1])
		},
		arc: function (e, t, n, r, i, a) {
			var o = this.currentPoint.x,
				s = this.currentPoint.y;
			this.absarc(e + o, t + s, n, r, i, a)
		},
		absarc: function (e, t, n, r, i, a) {
			this.absellipse(e, t, n, n, r, i, a)
		},
		ellipse: function (e, t, n, r, i, a, o, s) {
			var l = this.currentPoint.x,
				c = this.currentPoint.y;
			this.absellipse(e + l, t + c, n, r, i, a, o, s)
		},
		absellipse: function (e, t, n, r, i, a, o, s) {
			var l = new Ro(e, t, n, r, i, a, o, s);
			if (this.curves.length > 0) {
				var c = l.getPoint(0);
				c.equals(this.currentPoint) || this.lineTo(c.x, c.y)
			}
			this.curves.push(l);
			var u = l.getPoint(1);
			this.currentPoint.copy(u)
		},
		copy: function (e) {
			return Zo.prototype.copy.call(this, e), this.currentPoint.copy(e.currentPoint), this
		},
		toJSON: function () {
			var e = Zo.prototype.toJSON.call(this);
			return e.currentPoint = this.currentPoint.toArray(), e
		},
		fromJSON: function (e) {
			return Zo.prototype.fromJSON.call(this, e), this.currentPoint.fromArray(e.currentPoint), this
		}
	}), Qo.prototype = Object.assign(Object.create($o.prototype), {
		constructor: Qo,
		getPointsHoles: function (e) {
			for (var t = [], n = 0, r = this.holes.length; n < r; n++) t[n] = this.holes[n].getPoints(e);
			return t
		},
		extractPoints: function (e) {
			return {
				shape: this.getPoints(e),
				holes: this.getPointsHoles(e)
			}
		},
		copy: function (e) {
			$o.prototype.copy.call(this, e), this.holes = [];
			for (var t = 0, n = e.holes.length; t < n; t++) {
				var r = e.holes[t];
				this.holes.push(r.clone())
			}
			return this
		},
		toJSON: function () {
			var e = $o.prototype.toJSON.call(this);
			e.uuid = this.uuid, e.holes = [];
			for (var t = 0, n = this.holes.length; t < n; t++) {
				var r = this.holes[t];
				e.holes.push(r.toJSON())
			}
			return e
		},
		fromJSON: function (e) {
			$o.prototype.fromJSON.call(this, e), this.uuid = e.uuid, this.holes = [];
			for (var t = 0, n = e.holes.length; t < n; t++) {
				var r = e.holes[t];
				this.holes.push((new $o).fromJSON(r))
			}
			return this
		}
	}), Ko.prototype = Object.assign(Object.create(vn.prototype), {
		constructor: Ko,
		isLight: !0,
		copy: function (e) {
			return vn.prototype.copy.call(this, e), this.color.copy(e.color), this.intensity = e.intensity, this
		},
		toJSON: function (e) {
			var t = vn.prototype.toJSON.call(this, e);
			return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (t.object.distance = this.distance), void 0 !== this.angle && (t.object.angle = this.angle), void 0 !== this.decay && (t.object.decay = this.decay), void 0 !== this.penumbra && (t.object.penumbra = this.penumbra), void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()), t
		}
	}), es.prototype = Object.assign(Object.create(Ko.prototype), {
		constructor: es,
		isHemisphereLight: !0,
		copy: function (e) {
			return Ko.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this
		}
	}), Object.assign(ts.prototype, {
		copy: function (e) {
			return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
		},
		clone: function () {
			return (new this.constructor).copy(this)
		},
		toJSON: function () {
			var e = {};
			return 0 !== this.bias && (e.bias = this.bias), 1 !== this.radius && (e.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
		}
	}), ns.prototype = Object.assign(Object.create(ts.prototype), {
		constructor: ns,
		isSpotLightShadow: !0,
		update: function (e) {
			var t = this.camera,
				n = 2 * Ft.RAD2DEG * e.angle,
				r = this.mapSize.width / this.mapSize.height,
				i = e.distance || t.far;
			n === t.fov && r === t.aspect && i === t.far || (t.fov = n, t.aspect = r, t.far = i, t.updateProjectionMatrix())
		}
	}), rs.prototype = Object.assign(Object.create(Ko.prototype), {
		constructor: rs,
		isSpotLight: !0,
		copy: function (e) {
			return Ko.prototype.copy.call(this, e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
		}
	}), is.prototype = Object.assign(Object.create(Ko.prototype), {
		constructor: is,
		isPointLight: !0,
		copy: function (e) {
			return Ko.prototype.copy.call(this, e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
		}
	}), as.prototype = Object.assign(Object.create(ai.prototype), {
		constructor: as,
		isOrthographicCamera: !0,
		copy: function (e, t) {
			return ai.prototype.copy.call(this, e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = null === e.view ? null : Object.assign({}, e.view), this
		},
		setViewOffset: function (e, t, n, r, i, a) {
			null === this.view && (this.view = {
				enabled: !0,
				fullWidth: 1,
				fullHeight: 1,
				offsetX: 0,
				offsetY: 0,
				width: 1,
				height: 1
			}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix()
		},
		clearViewOffset: function () {
			null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
		},
		updateProjectionMatrix: function () {
			var e = (this.right - this.left) / (2 * this.zoom),
				t = (this.top - this.bottom) / (2 * this.zoom),
				n = (this.right + this.left) / 2,
				r = (this.top + this.bottom) / 2,
				i = n - e,
				a = n + e,
				o = r + t,
				s = r - t;
			if (null !== this.view && this.view.enabled) {
				var l = this.zoom / (this.view.width / this.view.fullWidth),
					c = this.zoom / (this.view.height / this.view.fullHeight),
					u = (this.right - this.left) / this.view.width,
					h = (this.top - this.bottom) / this.view.height;
				a = (i += u * (this.view.offsetX / l)) + u * (this.view.width / l), s = (o -= h * (this.view.offsetY / c)) - h * (this.view.height / c)
			}
			this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far), this.projectionMatrixInverse.getInverse(this.projectionMatrix)
		},
		toJSON: function (e) {
			var t = vn.prototype.toJSON.call(this, e);
			return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, null !== this.view && (t.object.view = Object.assign({}, this.view)), t
		}
	}), os.prototype = Object.assign(Object.create(ts.prototype), {
		constructor: os
	}), ss.prototype = Object.assign(Object.create(Ko.prototype), {
		constructor: ss,
		isDirectionalLight: !0,
		copy: function (e) {
			return Ko.prototype.copy.call(this, e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
		}
	}), ls.prototype = Object.assign(Object.create(Ko.prototype), {
		constructor: ls,
		isAmbientLight: !0
	}), cs.prototype = Object.assign(Object.create(Ko.prototype), {
		constructor: cs,
		isRectAreaLight: !0,
		copy: function (e) {
			return Ko.prototype.copy.call(this, e), this.width = e.width, this.height = e.height, this
		},
		toJSON: function (e) {
			var t = Ko.prototype.toJSON.call(this, e);
			return t.object.width = this.width, t.object.height = this.height, t
		}
	}), Object.assign(us.prototype, {
		load: function (e, t, n, r) {
			var i = this,
				a = new To(i.manager);
			a.setPath(i.path), a.load(e, function (e) {
				t(i.parse(JSON.parse(e)))
			}, n, r)
		},
		parse: function (e) {
			var t = this.textures;

			function n(e) {
				return void 0 === t[e] && console.warn("THREE.MaterialLoader: Undefined texture", e), t[e]
			}
			var r = new io[e.type];
			if (void 0 !== e.uuid && (r.uuid = e.uuid), void 0 !== e.name && (r.name = e.name), void 0 !== e.color && r.color.setHex(e.color), void 0 !== e.roughness && (r.roughness = e.roughness), void 0 !== e.metalness && (r.metalness = e.metalness), void 0 !== e.emissive && r.emissive.setHex(e.emissive), void 0 !== e.specular && r.specular.setHex(e.specular), void 0 !== e.shininess && (r.shininess = e.shininess), void 0 !== e.clearCoat && (r.clearCoat = e.clearCoat), void 0 !== e.clearCoatRoughness && (r.clearCoatRoughness = e.clearCoatRoughness), void 0 !== e.vertexColors && (r.vertexColors = e.vertexColors), void 0 !== e.fog && (r.fog = e.fog), void 0 !== e.flatShading && (r.flatShading = e.flatShading), void 0 !== e.blending && (r.blending = e.blending), void 0 !== e.combine && (r.combine = e.combine), void 0 !== e.side && (r.side = e.side), void 0 !== e.opacity && (r.opacity = e.opacity), void 0 !== e.transparent && (r.transparent = e.transparent), void 0 !== e.alphaTest && (r.alphaTest = e.alphaTest), void 0 !== e.depthTest && (r.depthTest = e.depthTest), void 0 !== e.depthWrite && (r.depthWrite = e.depthWrite), void 0 !== e.colorWrite && (r.colorWrite = e.colorWrite), void 0 !== e.wireframe && (r.wireframe = e.wireframe), void 0 !== e.wireframeLinewidth && (r.wireframeLinewidth = e.wireframeLinewidth), void 0 !== e.wireframeLinecap && (r.wireframeLinecap = e.wireframeLinecap), void 0 !== e.wireframeLinejoin && (r.wireframeLinejoin = e.wireframeLinejoin), void 0 !== e.rotation && (r.rotation = e.rotation), 1 !== e.linewidth && (r.linewidth = e.linewidth), void 0 !== e.dashSize && (r.dashSize = e.dashSize), void 0 !== e.gapSize && (r.gapSize = e.gapSize), void 0 !== e.scale && (r.scale = e.scale), void 0 !== e.polygonOffset && (r.polygonOffset = e.polygonOffset), void 0 !== e.polygonOffsetFactor && (r.polygonOffsetFactor = e.polygonOffsetFactor), void 0 !== e.polygonOffsetUnits && (r.polygonOffsetUnits = e.polygonOffsetUnits), void 0 !== e.skinning && (r.skinning = e.skinning), void 0 !== e.morphTargets && (r.morphTargets = e.morphTargets), void 0 !== e.dithering && (r.dithering = e.dithering), void 0 !== e.visible && (r.visible = e.visible), void 0 !== e.userData && (r.userData = e.userData), void 0 !== e.uniforms)
				for (var i in e.uniforms) {
					var a = e.uniforms[i];
					switch (r.uniforms[i] = {}, a.type) {
						case "t":
							r.uniforms[i].value = n(a.value);
							break;
						case "c":
							r.uniforms[i].value = (new sn).setHex(a.value);
							break;
						case "v2":
							r.uniforms[i].value = (new jt).fromArray(a.value);
							break;
						case "v3":
							r.uniforms[i].value = (new Vt).fromArray(a.value);
							break;
						case "v4":
							r.uniforms[i].value = (new Jt).fromArray(a.value);
							break;
						case "m4":
							r.uniforms[i].value = (new Ht).fromArray(a.value);
							break;
						default:
							r.uniforms[i].value = a.value
					}
				}
			if (void 0 !== e.defines && (r.defines = e.defines), void 0 !== e.vertexShader && (r.vertexShader = e.vertexShader), void 0 !== e.fragmentShader && (r.fragmentShader = e.fragmentShader), void 0 !== e.shading && (r.flatShading = 1 === e.shading), void 0 !== e.size && (r.size = e.size), void 0 !== e.sizeAttenuation && (r.sizeAttenuation = e.sizeAttenuation), void 0 !== e.map && (r.map = n(e.map)), void 0 !== e.alphaMap && (r.alphaMap = n(e.alphaMap), r.transparent = !0), void 0 !== e.bumpMap && (r.bumpMap = n(e.bumpMap)), void 0 !== e.bumpScale && (r.bumpScale = e.bumpScale), void 0 !== e.normalMap && (r.normalMap = n(e.normalMap)), void 0 !== e.normalMapType && (r.normalMapType = e.normalMapType), void 0 !== e.normalScale) {
				var o = e.normalScale;
				!1 === Array.isArray(o) && (o = [o, o]), r.normalScale = (new jt).fromArray(o)
			}
			return void 0 !== e.displacementMap && (r.displacementMap = n(e.displacementMap)), void 0 !== e.displacementScale && (r.displacementScale = e.displacementScale), void 0 !== e.displacementBias && (r.displacementBias = e.displacementBias), void 0 !== e.roughnessMap && (r.roughnessMap = n(e.roughnessMap)), void 0 !== e.metalnessMap && (r.metalnessMap = n(e.metalnessMap)), void 0 !== e.emissiveMap && (r.emissiveMap = n(e.emissiveMap)), void 0 !== e.emissiveIntensity && (r.emissiveIntensity = e.emissiveIntensity), void 0 !== e.specularMap && (r.specularMap = n(e.specularMap)), void 0 !== e.envMap && (r.envMap = n(e.envMap)), void 0 !== e.envMapIntensity && (r.envMapIntensity = e.envMapIntensity), void 0 !== e.reflectivity && (r.reflectivity = e.reflectivity), void 0 !== e.lightMap && (r.lightMap = n(e.lightMap)), void 0 !== e.lightMapIntensity && (r.lightMapIntensity = e.lightMapIntensity), void 0 !== e.aoMap && (r.aoMap = n(e.aoMap)), void 0 !== e.aoMapIntensity && (r.aoMapIntensity = e.aoMapIntensity), void 0 !== e.gradientMap && (r.gradientMap = n(e.gradientMap)), r
		},
		setPath: function (e) {
			return this.path = e, this
		},
		setTextures: function (e) {
			return this.textures = e, this
		}
	});
	var hs = function (e) {
		var t = e.lastIndexOf("/");
		return -1 === t ? "./" : e.substr(0, t + 1)
	};

	function ps(e) {
		this.manager = void 0 !== e ? e : Mo
	}
	Object.assign(ps.prototype, {
		load: function (e, t, n, r) {
			var i = this,
				a = new To(i.manager);
			a.setPath(i.path), a.load(e, function (e) {
				t(i.parse(JSON.parse(e)))
			}, n, r)
		},
		parse: function (e) {
			var t = new On,
				n = e.data.index;
			if (void 0 !== n) {
				var r = new ds[n.type](n.array);
				t.setIndex(new xn(r, 1))
			}
			var i = e.data.attributes;
			for (var a in i) {
				var o = i[a];
				r = new ds[o.type](o.array);
				t.addAttribute(a, new xn(r, o.itemSize, o.normalized))
			}
			var s = e.data.groups || e.data.drawcalls || e.data.offsets;
			if (void 0 !== s)
				for (var l = 0, c = s.length; l !== c; ++l) {
					var u = s[l];
					t.addGroup(u.start, u.count, u.materialIndex)
				}
			var h = e.data.boundingSphere;
			if (void 0 !== h) {
				var p = new Vt;
				void 0 !== h.center && p.fromArray(h.center), t.boundingSphere = new en(p, h.radius)
			}
			return t
		},
		setPath: function (e) {
			return this.path = e, this
		}
	});
	var ds = {
		Int8Array: Int8Array,
		Uint8Array: Uint8Array,
		Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
		Int16Array: Int16Array,
		Uint16Array: Uint16Array,
		Int32Array: Int32Array,
		Uint32Array: Uint32Array,
		Float32Array: Float32Array,
		Float64Array: Float64Array
	};

	function fs() {}

	function ms(e) {
		"boolean" == typeof e && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), e = void 0), this.manager = void 0 !== e ? e : Mo, this.withCredentials = !1
	}

	function vs(e) {
		this.manager = void 0 !== e ? e : Mo, this.resourcePath = ""
	}
	fs.Handlers = {
		handlers: [],
		add: function (e, t) {
			this.handlers.push(e, t)
		},
		get: function (e) {
			for (var t = this.handlers, n = 0, r = t.length; n < r; n += 2) {
				var i = t[n],
					a = t[n + 1];
				if (i.test(e)) return a
			}
			return null
		}
	}, Object.assign(fs.prototype, {
		crossOrigin: "anonymous",
		onLoadStart: function () {},
		onLoadProgress: function () {},
		onLoadComplete: function () {},
		initMaterials: function (e, t, n) {
			for (var r = [], i = 0; i < e.length; ++i) r[i] = this.createMaterial(e[i], t, n);
			return r
		},
		createMaterial: function () {
			var e = {
					NoBlending: N,
					NormalBlending: D,
					AdditiveBlending: z,
					SubtractiveBlending: U,
					MultiplyBlending: B,
					CustomBlending: F
				},
				t = new sn,
				n = new Po,
				r = new us;
			return function (i, a, o) {
				var s = {};

				function l(e, t, r, i, l) {
					var c, u = a + e,
						h = fs.Handlers.get(u);
					null !== h ? c = h.load(u) : (n.setCrossOrigin(o), c = n.load(u)), void 0 !== t && (c.repeat.fromArray(t), 1 !== t[0] && (c.wrapS = Ee), 1 !== t[1] && (c.wrapT = Ee)), void 0 !== r && c.offset.fromArray(r), void 0 !== i && ("repeat" === i[0] && (c.wrapS = Ee), "mirror" === i[0] && (c.wrapS = Ae), "repeat" === i[1] && (c.wrapT = Ee), "mirror" === i[1] && (c.wrapT = Ae)), void 0 !== l && (c.anisotropy = l);
					var p = Ft.generateUUID();
					return s[p] = c, p
				}
				var c = {
					uuid: Ft.generateUUID(),
					type: "MeshLambertMaterial"
				};
				for (var u in i) {
					var h = i[u];
					switch (u) {
						case "DbgColor":
						case "DbgIndex":
						case "opticalDensity":
						case "illumination":
							break;
						case "DbgName":
							c.name = h;
							break;
						case "blending":
							c.blending = e[h];
							break;
						case "colorAmbient":
						case "mapAmbient":
							console.warn("THREE.Loader.createMaterial:", u, "is no longer supported.");
							break;
						case "colorDiffuse":
							c.color = t.fromArray(h).getHex();
							break;
						case "colorSpecular":
							c.specular = t.fromArray(h).getHex();
							break;
						case "colorEmissive":
							c.emissive = t.fromArray(h).getHex();
							break;
						case "specularCoef":
							c.shininess = h;
							break;
						case "shading":
							"basic" === h.toLowerCase() && (c.type = "MeshBasicMaterial"), "phong" === h.toLowerCase() && (c.type = "MeshPhongMaterial"), "standard" === h.toLowerCase() && (c.type = "MeshStandardMaterial");
							break;
						case "mapDiffuse":
							c.map = l(h, i.mapDiffuseRepeat, i.mapDiffuseOffset, i.mapDiffuseWrap, i.mapDiffuseAnisotropy);
							break;
						case "mapDiffuseRepeat":
						case "mapDiffuseOffset":
						case "mapDiffuseWrap":
						case "mapDiffuseAnisotropy":
							break;
						case "mapEmissive":
							c.emissiveMap = l(h, i.mapEmissiveRepeat, i.mapEmissiveOffset, i.mapEmissiveWrap, i.mapEmissiveAnisotropy);
							break;
						case "mapEmissiveRepeat":
						case "mapEmissiveOffset":
						case "mapEmissiveWrap":
						case "mapEmissiveAnisotropy":
							break;
						case "mapLight":
							c.lightMap = l(h, i.mapLightRepeat, i.mapLightOffset, i.mapLightWrap, i.mapLightAnisotropy);
							break;
						case "mapLightRepeat":
						case "mapLightOffset":
						case "mapLightWrap":
						case "mapLightAnisotropy":
							break;
						case "mapAO":
							c.aoMap = l(h, i.mapAORepeat, i.mapAOOffset, i.mapAOWrap, i.mapAOAnisotropy);
							break;
						case "mapAORepeat":
						case "mapAOOffset":
						case "mapAOWrap":
						case "mapAOAnisotropy":
							break;
						case "mapBump":
							c.bumpMap = l(h, i.mapBumpRepeat, i.mapBumpOffset, i.mapBumpWrap, i.mapBumpAnisotropy);
							break;
						case "mapBumpScale":
							c.bumpScale = h;
							break;
						case "mapBumpRepeat":
						case "mapBumpOffset":
						case "mapBumpWrap":
						case "mapBumpAnisotropy":
							break;
						case "mapNormal":
							c.normalMap = l(h, i.mapNormalRepeat, i.mapNormalOffset, i.mapNormalWrap, i.mapNormalAnisotropy);
							break;
						case "mapNormalFactor":
							c.normalScale = h;
							break;
						case "mapNormalRepeat":
						case "mapNormalOffset":
						case "mapNormalWrap":
						case "mapNormalAnisotropy":
							break;
						case "mapSpecular":
							c.specularMap = l(h, i.mapSpecularRepeat, i.mapSpecularOffset, i.mapSpecularWrap, i.mapSpecularAnisotropy);
							break;
						case "mapSpecularRepeat":
						case "mapSpecularOffset":
						case "mapSpecularWrap":
						case "mapSpecularAnisotropy":
							break;
						case "mapMetalness":
							c.metalnessMap = l(h, i.mapMetalnessRepeat, i.mapMetalnessOffset, i.mapMetalnessWrap, i.mapMetalnessAnisotropy);
							break;
						case "mapMetalnessRepeat":
						case "mapMetalnessOffset":
						case "mapMetalnessWrap":
						case "mapMetalnessAnisotropy":
							break;
						case "mapRoughness":
							c.roughnessMap = l(h, i.mapRoughnessRepeat, i.mapRoughnessOffset, i.mapRoughnessWrap, i.mapRoughnessAnisotropy);
							break;
						case "mapRoughnessRepeat":
						case "mapRoughnessOffset":
						case "mapRoughnessWrap":
						case "mapRoughnessAnisotropy":
							break;
						case "mapAlpha":
							c.alphaMap = l(h, i.mapAlphaRepeat, i.mapAlphaOffset, i.mapAlphaWrap, i.mapAlphaAnisotropy);
							break;
						case "mapAlphaRepeat":
						case "mapAlphaOffset":
						case "mapAlphaWrap":
						case "mapAlphaAnisotropy":
							break;
						case "flipSided":
							c.side = L;
							break;
						case "doubleSided":
							c.side = R;
							break;
						case "transparency":
							console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), c.opacity = h;
							break;
						case "depthTest":
						case "depthWrite":
						case "colorWrite":
						case "opacity":
						case "reflectivity":
						case "transparent":
						case "visible":
						case "wireframe":
							c[u] = h;
							break;
						case "vertexColors":
							!0 === h && (c.vertexColors = I), "face" === h && (c.vertexColors = k);
							break;
						default:
							console.error("THREE.Loader.createMaterial: Unsupported", u, h)
					}
				}
				return "MeshBasicMaterial" === c.type && delete c.emissive, "MeshPhongMaterial" !== c.type && delete c.specular, c.opacity < 1 && (c.transparent = !0), r.setTextures(s), r.parse(c)
			}
		}()
	}), Object.assign(ms.prototype, {
		crossOrigin: "anonymous",
		load: function (e, t, n, r) {
			var i = this,
				a = void 0 === this.path ? hs(e) : this.path,
				o = new To(this.manager);
			o.setPath(this.path), o.setWithCredentials(this.withCredentials), o.load(e, function (n) {
				var r = JSON.parse(n),
					o = r.metadata;
				if (void 0 !== o) {
					var s = o.type;
					if (void 0 !== s && "object" === s.toLowerCase()) return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.")
				}
				var l = i.parse(r, a);
				t(l.geometry, l.materials)
			}, n, r)
		},
		setPath: function (e) {
			return this.path = e, this
		},
		setResourcePath: function (e) {
			return this.resourcePath = e, this
		},
		setCrossOrigin: function (e) {
			return this.crossOrigin = e, this
		},
		parse: function () {
			return function (e, t) {
				void 0 !== e.data && (e = e.data), void 0 !== e.scale ? e.scale = 1 / e.scale : e.scale = 1;
				var n = new yn;
				return function (e, t) {
						function n(e, t) {
							return e & 1 << t
						}
						var r, i, a, o, s, l, c, u, h, p, d, f, m, v, g, y, x, b, w, _, M, S, T, E, C, A = e.faces,
							P = e.vertices,
							L = e.normals,
							R = e.colors,
							O = e.scale,
							k = 0;
						if (void 0 !== e.uvs) {
							for (r = 0; r < e.uvs.length; r++) e.uvs[r].length && k++;
							for (r = 0; r < k; r++) t.faceVertexUvs[r] = []
						}
						for (o = 0, s = P.length; o < s;)(b = new Vt).x = P[o++] * O, b.y = P[o++] * O, b.z = P[o++] * O, t.vertices.push(b);
						for (o = 0, s = A.length; o < s;)
							if (d = n(p = A[o++], 0), f = n(p, 1), m = n(p, 3), v = n(p, 4), g = n(p, 5), y = n(p, 6), x = n(p, 7), d) {
								if ((_ = new pn).a = A[o], _.b = A[o + 1], _.c = A[o + 3], (M = new pn).a = A[o + 1], M.b = A[o + 2], M.c = A[o + 3], o += 4, f && (h = A[o++], _.materialIndex = h, M.materialIndex = h), a = t.faces.length, m)
									for (r = 0; r < k; r++)
										for (E = e.uvs[r], t.faceVertexUvs[r][a] = [], t.faceVertexUvs[r][a + 1] = [], i = 0; i < 4; i++) C = new jt(E[2 * (u = A[o++])], E[2 * u + 1]), 2 !== i && t.faceVertexUvs[r][a].push(C), 0 !== i && t.faceVertexUvs[r][a + 1].push(C);
								if (v && (c = 3 * A[o++], _.normal.set(L[c++], L[c++], L[c]), M.normal.copy(_.normal)), g)
									for (r = 0; r < 4; r++) c = 3 * A[o++], T = new Vt(L[c++], L[c++], L[c]), 2 !== r && _.vertexNormals.push(T), 0 !== r && M.vertexNormals.push(T);
								if (y && (S = R[l = A[o++]], _.color.setHex(S), M.color.setHex(S)), x)
									for (r = 0; r < 4; r++) S = R[l = A[o++]], 2 !== r && _.vertexColors.push(new sn(S)), 0 !== r && M.vertexColors.push(new sn(S));
								t.faces.push(_), t.faces.push(M)
							} else {
								if ((w = new pn).a = A[o++], w.b = A[o++], w.c = A[o++], f && (h = A[o++], w.materialIndex = h), a = t.faces.length, m)
									for (r = 0; r < k; r++)
										for (E = e.uvs[r], t.faceVertexUvs[r][a] = [], i = 0; i < 3; i++) C = new jt(E[2 * (u = A[o++])], E[2 * u + 1]), t.faceVertexUvs[r][a].push(C);
								if (v && (c = 3 * A[o++], w.normal.set(L[c++], L[c++], L[c])), g)
									for (r = 0; r < 3; r++) c = 3 * A[o++], T = new Vt(L[c++], L[c++], L[c]), w.vertexNormals.push(T);
								if (y && (l = A[o++], w.color.setHex(R[l])), x)
									for (r = 0; r < 3; r++) l = A[o++], w.vertexColors.push(new sn(R[l]));
								t.faces.push(w)
							}
					}(e, n),
					function (e, t) {
						var n = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
						if (e.skinWeights)
							for (var r = 0, i = e.skinWeights.length; r < i; r += n) {
								var a = e.skinWeights[r],
									o = n > 1 ? e.skinWeights[r + 1] : 0,
									s = n > 2 ? e.skinWeights[r + 2] : 0,
									l = n > 3 ? e.skinWeights[r + 3] : 0;
								t.skinWeights.push(new Jt(a, o, s, l))
							}
						if (e.skinIndices)
							for (r = 0, i = e.skinIndices.length; r < i; r += n) {
								var c = e.skinIndices[r],
									u = n > 1 ? e.skinIndices[r + 1] : 0,
									h = n > 2 ? e.skinIndices[r + 2] : 0,
									p = n > 3 ? e.skinIndices[r + 3] : 0;
								t.skinIndices.push(new Jt(c, u, h, p))
							}
						t.bones = e.bones, t.bones && t.bones.length > 0 && (t.skinWeights.length !== t.skinIndices.length || t.skinIndices.length !== t.vertices.length) && console.warn("When skinning, number of vertices (" + t.vertices.length + "), skinIndices (" + t.skinIndices.length + "), and skinWeights (" + t.skinWeights.length + ") should match.")
					}(e, n),
					function (e, t) {
						var n = e.scale;
						if (void 0 !== e.morphTargets)
							for (var r = 0, i = e.morphTargets.length; r < i; r++) {
								t.morphTargets[r] = {}, t.morphTargets[r].name = e.morphTargets[r].name, t.morphTargets[r].vertices = [];
								for (var a = t.morphTargets[r].vertices, o = e.morphTargets[r].vertices, s = 0, l = o.length; s < l; s += 3) {
									var c = new Vt;
									c.x = o[s] * n, c.y = o[s + 1] * n, c.z = o[s + 2] * n, a.push(c)
								}
							}
						if (void 0 !== e.morphColors && e.morphColors.length > 0) {
							console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
							var u = t.faces,
								h = e.morphColors[0].colors;
							for (r = 0, i = u.length; r < i; r++) u[r].color.fromArray(h, 3 * r)
						}
					}(e, n),
					function (e, t) {
						var n = [],
							r = [];
						void 0 !== e.animation && r.push(e.animation), void 0 !== e.animations && (e.animations.length ? r = r.concat(e.animations) : r.push(e.animations));
						for (var i = 0; i < r.length; i++) {
							var a = xo.parseAnimation(r[i], t.bones);
							a && n.push(a)
						}
						if (t.morphTargets) {
							var o = xo.CreateClipsFromMorphTargetSequences(t.morphTargets, 10);
							n = n.concat(o)
						}
						n.length > 0 && (t.animations = n)
					}(e, n), n.computeFaceNormals(), n.computeBoundingSphere(), void 0 === e.materials || 0 === e.materials.length ? {
						geometry: n
					} : {
						geometry: n,
						materials: fs.prototype.initMaterials(e.materials, this.resourcePath || t, this.crossOrigin)
					}
			}
		}()
	}), Object.assign(vs.prototype, {
		crossOrigin: "anonymous",
		load: function (e, t, n, r) {
			var i = this,
				a = void 0 === this.path ? hs(e) : this.path;
			this.resourcePath = this.resourcePath || a;
			var o = new To(i.manager);
			o.setPath(this.path), o.load(e, function (n) {
				var a = null;
				try {
					a = JSON.parse(n)
				} catch (t) {
					return void 0 !== r && r(t), void console.error("THREE:ObjectLoader: Can't parse " + e + ".", t.message)
				}
				var o = a.metadata;
				void 0 !== o && void 0 !== o.type && "geometry" !== o.type.toLowerCase() ? i.parse(a, t) : console.error("THREE.ObjectLoader: Can't load " + e + ". Use THREE.JSONLoader instead.")
			}, n, r)
		},
		setPath: function (e) {
			return this.path = e, this
		},
		setResourcePath: function (e) {
			return this.resourcePath = e, this
		},
		setCrossOrigin: function (e) {
			return this.crossOrigin = e, this
		},
		parse: function (e, t) {
			var n = this.parseShape(e.shapes),
				r = this.parseGeometries(e.geometries, n),
				i = this.parseImages(e.images, function () {
					void 0 !== t && t(s)
				}),
				a = this.parseTextures(e.textures, i),
				o = this.parseMaterials(e.materials, a),
				s = this.parseObject(e.object, r, o);
			return e.animations && (s.animations = this.parseAnimations(e.animations)), void 0 !== e.images && 0 !== e.images.length || void 0 !== t && t(s), s
		},
		parseShape: function (e) {
			var t = {};
			if (void 0 !== e)
				for (var n = 0, r = e.length; n < r; n++) {
					var i = (new Qo).fromJSON(e[n]);
					t[i.uuid] = i
				}
			return t
		},
		parseGeometries: function (e, t) {
			var n = {};
			if (void 0 !== e)
				for (var r = new ms, i = new ps, a = 0, o = e.length; a < o; a++) {
					var s, l = e[a];
					switch (l.type) {
						case "PlaneGeometry":
						case "PlaneBufferGeometry":
							s = new Xa[l.type](l.width, l.height, l.widthSegments, l.heightSegments);
							break;
						case "BoxGeometry":
						case "BoxBufferGeometry":
						case "CubeGeometry":
							s = new Xa[l.type](l.width, l.height, l.depth, l.widthSegments, l.heightSegments, l.depthSegments);
							break;
						case "CircleGeometry":
						case "CircleBufferGeometry":
							s = new Xa[l.type](l.radius, l.segments, l.thetaStart, l.thetaLength);
							break;
						case "CylinderGeometry":
						case "CylinderBufferGeometry":
							s = new Xa[l.type](l.radiusTop, l.radiusBottom, l.height, l.radialSegments, l.heightSegments, l.openEnded, l.thetaStart, l.thetaLength);
							break;
						case "ConeGeometry":
						case "ConeBufferGeometry":
							s = new Xa[l.type](l.radius, l.height, l.radialSegments, l.heightSegments, l.openEnded, l.thetaStart, l.thetaLength);
							break;
						case "SphereGeometry":
						case "SphereBufferGeometry":
							s = new Xa[l.type](l.radius, l.widthSegments, l.heightSegments, l.phiStart, l.phiLength, l.thetaStart, l.thetaLength);
							break;
						case "DodecahedronGeometry":
						case "DodecahedronBufferGeometry":
						case "IcosahedronGeometry":
						case "IcosahedronBufferGeometry":
						case "OctahedronGeometry":
						case "OctahedronBufferGeometry":
						case "TetrahedronGeometry":
						case "TetrahedronBufferGeometry":
							s = new Xa[l.type](l.radius, l.detail);
							break;
						case "RingGeometry":
						case "RingBufferGeometry":
							s = new Xa[l.type](l.innerRadius, l.outerRadius, l.thetaSegments, l.phiSegments, l.thetaStart, l.thetaLength);
							break;
						case "TorusGeometry":
						case "TorusBufferGeometry":
							s = new Xa[l.type](l.radius, l.tube, l.radialSegments, l.tubularSegments, l.arc);
							break;
						case "TorusKnotGeometry":
						case "TorusKnotBufferGeometry":
							s = new Xa[l.type](l.radius, l.tube, l.tubularSegments, l.radialSegments, l.p, l.q);
							break;
						case "LatheGeometry":
						case "LatheBufferGeometry":
							s = new Xa[l.type](l.points, l.segments, l.phiStart, l.phiLength);
							break;
						case "PolyhedronGeometry":
						case "PolyhedronBufferGeometry":
							s = new Xa[l.type](l.vertices, l.indices, l.radius, l.details);
							break;
						case "ShapeGeometry":
						case "ShapeBufferGeometry":
							for (var c = [], u = 0, h = l.shapes.length; u < h; u++) {
								var p = t[l.shapes[u]];
								c.push(p)
							}
							s = new Xa[l.type](c, l.curveSegments);
							break;
						case "ExtrudeGeometry":
						case "ExtrudeBufferGeometry":
							for (c = [], u = 0, h = l.shapes.length; u < h; u++) {
								p = t[l.shapes[u]];
								c.push(p)
							}
							var d = l.options.extrudePath;
							void 0 !== d && (l.options.extrudePath = (new Jo[d.type]).fromJSON(d)), s = new Xa[l.type](c, l.options);
							break;
						case "BufferGeometry":
							s = i.parse(l);
							break;
						case "Geometry":
							s = r.parse(l, this.resourcePath).geometry;
							break;
						default:
							console.warn('THREE.ObjectLoader: Unsupported geometry type "' + l.type + '"');
							continue
					}
					s.uuid = l.uuid, void 0 !== l.name && (s.name = l.name), !0 === s.isBufferGeometry && void 0 !== l.userData && (s.userData = l.userData), n[l.uuid] = s
				}
			return n
		},
		parseMaterials: function (e, t) {
			var n = {},
				r = {};
			if (void 0 !== e) {
				var i = new us;
				i.setTextures(t);
				for (var a = 0, o = e.length; a < o; a++) {
					var s = e[a];
					if ("MultiMaterial" === s.type) {
						for (var l = [], c = 0; c < s.materials.length; c++) {
							var u = s.materials[c];
							void 0 === n[u.uuid] && (n[u.uuid] = i.parse(u)), l.push(n[u.uuid])
						}
						r[s.uuid] = l
					} else r[s.uuid] = i.parse(s), n[s.uuid] = r[s.uuid]
				}
			}
			return r
		},
		parseAnimations: function (e) {
			for (var t = [], n = 0; n < e.length; n++) {
				var r = e[n],
					i = xo.parse(r);
				void 0 !== r.uuid && (i.uuid = r.uuid), t.push(i)
			}
			return t
		},
		parseImages: function (e, t) {
			var n = this,
				r = {};

			function i(e) {
				return n.manager.itemStart(e), a.load(e, function () {
					n.manager.itemEnd(e)
				}, void 0, function () {
					n.manager.itemError(e), n.manager.itemEnd(e)
				})
			}
			if (void 0 !== e && e.length > 0) {
				var a = new Co(new _o(t));
				a.setCrossOrigin(this.crossOrigin);
				for (var o = 0, s = e.length; o < s; o++) {
					var l = e[o],
						c = l.url;
					if (Array.isArray(c)) {
						r[l.uuid] = [];
						for (var u = 0, h = c.length; u < h; u++) {
							var p = c[u],
								d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p) ? p : n.resourcePath + p;
							r[l.uuid].push(i(d))
						}
					} else {
						d = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url) ? l.url : n.resourcePath + l.url;
						r[l.uuid] = i(d)
					}
				}
			}
			return r
		},
		parseTextures: function (e, t) {
			function n(e, t) {
				return "number" == typeof e ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e), t[e])
			}
			var r = {};
			if (void 0 !== e)
				for (var i = 0, a = e.length; i < a; i++) {
					var o, s = e[i];
					void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === t[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image), (o = Array.isArray(t[s.image]) ? new Wn(t[s.image]) : new Yt(t[s.image])).needsUpdate = !0, o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), void 0 !== s.mapping && (o.mapping = n(s.mapping, ys)), void 0 !== s.offset && o.offset.fromArray(s.offset), void 0 !== s.repeat && o.repeat.fromArray(s.repeat), void 0 !== s.center && o.center.fromArray(s.center), void 0 !== s.rotation && (o.rotation = s.rotation), void 0 !== s.wrap && (o.wrapS = n(s.wrap[0], xs), o.wrapT = n(s.wrap[1], xs)), void 0 !== s.format && (o.format = s.format), void 0 !== s.minFilter && (o.minFilter = n(s.minFilter, bs)), void 0 !== s.magFilter && (o.magFilter = n(s.magFilter, bs)), void 0 !== s.anisotropy && (o.anisotropy = s.anisotropy), void 0 !== s.flipY && (o.flipY = s.flipY), r[s.uuid] = o
				}
			return r
		},
		parseObject: function (e, t, n) {
			var r;

			function i(e) {
				return void 0 === t[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e), t[e]
			}

			function a(e) {
				if (void 0 !== e) {
					if (Array.isArray(e)) {
						for (var t = [], r = 0, i = e.length; r < i; r++) {
							var a = e[r];
							void 0 === n[a] && console.warn("THREE.ObjectLoader: Undefined material", a), t.push(n[a])
						}
						return t
					}
					return void 0 === n[e] && console.warn("THREE.ObjectLoader: Undefined material", e), n[e]
				}
			}
			switch (e.type) {
				case "Scene":
					r = new vi, void 0 !== e.background && Number.isInteger(e.background) && (r.background = new sn(e.background)), void 0 !== e.fog && ("Fog" === e.fog.type ? r.fog = new mi(e.fog.color, e.fog.near, e.fog.far) : "FogExp2" === e.fog.type && (r.fog = new fi(e.fog.color, e.fog.density)));
					break;
				case "PerspectiveCamera":
					r = new oi(e.fov, e.aspect, e.near, e.far), void 0 !== e.focus && (r.focus = e.focus), void 0 !== e.zoom && (r.zoom = e.zoom), void 0 !== e.filmGauge && (r.filmGauge = e.filmGauge), void 0 !== e.filmOffset && (r.filmOffset = e.filmOffset), void 0 !== e.view && (r.view = Object.assign({}, e.view));
					break;
				case "OrthographicCamera":
					r = new as(e.left, e.right, e.top, e.bottom, e.near, e.far), void 0 !== e.zoom && (r.zoom = e.zoom), void 0 !== e.view && (r.view = Object.assign({}, e.view));
					break;
				case "AmbientLight":
					r = new ls(e.color, e.intensity);
					break;
				case "DirectionalLight":
					r = new ss(e.color, e.intensity);
					break;
				case "PointLight":
					r = new is(e.color, e.intensity, e.distance, e.decay);
					break;
				case "RectAreaLight":
					r = new cs(e.color, e.intensity, e.width, e.height);
					break;
				case "SpotLight":
					r = new rs(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
					break;
				case "HemisphereLight":
					r = new es(e.color, e.groundColor, e.intensity);
					break;
				case "SkinnedMesh":
					console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
				case "Mesh":
					var o = i(e.geometry),
						s = a(e.material);
					r = o.bones && o.bones.length > 0 ? new Si(o, s) : new Gn(o, s);
					break;
				case "LOD":
					r = new wi;
					break;
				case "Line":
					r = new Ei(i(e.geometry), a(e.material), e.mode);
					break;
				case "LineLoop":
					r = new Ai(i(e.geometry), a(e.material));
					break;
				case "LineSegments":
					r = new Ci(i(e.geometry), a(e.material));
					break;
				case "PointCloud":
				case "Points":
					r = new Li(i(e.geometry), a(e.material));
					break;
				case "Sprite":
					r = new bi(a(e.material));
					break;
				case "Group":
					r = new ii;
					break;
				default:
					r = new vn
			}
			if (r.uuid = e.uuid, void 0 !== e.name && (r.name = e.name), void 0 !== e.matrix ? (r.matrix.fromArray(e.matrix), void 0 !== e.matrixAutoUpdate && (r.matrixAutoUpdate = e.matrixAutoUpdate), r.matrixAutoUpdate && r.matrix.decompose(r.position, r.quaternion, r.scale)) : (void 0 !== e.position && r.position.fromArray(e.position), void 0 !== e.rotation && r.rotation.fromArray(e.rotation), void 0 !== e.quaternion && r.quaternion.fromArray(e.quaternion), void 0 !== e.scale && r.scale.fromArray(e.scale)), void 0 !== e.castShadow && (r.castShadow = e.castShadow), void 0 !== e.receiveShadow && (r.receiveShadow = e.receiveShadow), e.shadow && (void 0 !== e.shadow.bias && (r.shadow.bias = e.shadow.bias), void 0 !== e.shadow.radius && (r.shadow.radius = e.shadow.radius), void 0 !== e.shadow.mapSize && r.shadow.mapSize.fromArray(e.shadow.mapSize), void 0 !== e.shadow.camera && (r.shadow.camera = this.parseObject(e.shadow.camera))), void 0 !== e.visible && (r.visible = e.visible), void 0 !== e.frustumCulled && (r.frustumCulled = e.frustumCulled), void 0 !== e.renderOrder && (r.renderOrder = e.renderOrder), void 0 !== e.userData && (r.userData = e.userData), void 0 !== e.layers && (r.layers.mask = e.layers), void 0 !== e.children)
				for (var l = e.children, c = 0; c < l.length; c++) r.add(this.parseObject(l[c], t, n));
			if ("LOD" === e.type)
				for (var u = e.levels, h = 0; h < u.length; h++) {
					var p = u[h],
						d = r.getObjectByProperty("uuid", p.object);
					void 0 !== d && r.addLevel(d, p.distance)
				}
			return r
		}
	});
	var gs, ys = {
			UVMapping: 300,
			CubeReflectionMapping: xe,
			CubeRefractionMapping: be,
			EquirectangularReflectionMapping: we,
			EquirectangularRefractionMapping: _e,
			SphericalReflectionMapping: Me,
			CubeUVReflectionMapping: Se,
			CubeUVRefractionMapping: Te
		},
		xs = {
			RepeatWrapping: Ee,
			ClampToEdgeWrapping: Ce,
			MirroredRepeatWrapping: Ae
		},
		bs = {
			NearestFilter: Pe,
			NearestMipMapNearestFilter: Le,
			NearestMipMapLinearFilter: Re,
			LinearFilter: Oe,
			LinearMipMapNearestFilter: ke,
			LinearMipMapLinearFilter: Ie
		};

	function ws(e) {
		"undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.manager = void 0 !== e ? e : Mo, this.options = void 0
	}

	function _s() {
		this.type = "ShapePath", this.color = new sn, this.subPaths = [], this.currentPath = null
	}

	function Ms(e) {
		this.type = "Font", this.data = e
	}

	function Ss(e, t, n, r, i) {
		var a = i.glyphs[e] || i.glyphs["?"];
		if (a) {
			var o, s, l, c, u, h, p, d, f = new _s;
			if (a.o)
				for (var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), v = 0, g = m.length; v < g;) {
					switch (m[v++]) {
						case "m":
							o = m[v++] * t + n, s = m[v++] * t + r, f.moveTo(o, s);
							break;
						case "l":
							o = m[v++] * t + n, s = m[v++] * t + r, f.lineTo(o, s);
							break;
						case "q":
							l = m[v++] * t + n, c = m[v++] * t + r, u = m[v++] * t + n, h = m[v++] * t + r, f.quadraticCurveTo(u, h, l, c);
							break;
						case "b":
							l = m[v++] * t + n, c = m[v++] * t + r, u = m[v++] * t + n, h = m[v++] * t + r, p = m[v++] * t + n, d = m[v++] * t + r, f.bezierCurveTo(u, h, p, d, l, c)
					}
				}
			return {
				offsetX: a.ha * t,
				path: f
			}
		}
	}
	ws.prototype = {
		constructor: ws,
		setOptions: function (e) {
			return this.options = e, this
		},
		load: function (e, t, n, r) {
			void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
			var i = this,
				a = wo.get(e);
			if (void 0 !== a) return i.manager.itemStart(e), setTimeout(function () {
				t && t(a), i.manager.itemEnd(e)
			}, 0), a;
			fetch(e).then(function (e) {
				return e.blob()
			}).then(function (e) {
				return createImageBitmap(e, i.options)
			}).then(function (n) {
				wo.add(e, n), t && t(n), i.manager.itemEnd(e)
			}).catch(function (t) {
				r && r(t), i.manager.itemError(e), i.manager.itemEnd(e)
			})
		},
		setCrossOrigin: function () {
			return this
		},
		setPath: function (e) {
			return this.path = e, this
		}
	}, Object.assign(_s.prototype, {
		moveTo: function (e, t) {
			this.currentPath = new $o, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t)
		},
		lineTo: function (e, t) {
			this.currentPath.lineTo(e, t)
		},
		quadraticCurveTo: function (e, t, n, r) {
			this.currentPath.quadraticCurveTo(e, t, n, r)
		},
		bezierCurveTo: function (e, t, n, r, i, a) {
			this.currentPath.bezierCurveTo(e, t, n, r, i, a)
		},
		splineThru: function (e) {
			this.currentPath.splineThru(e)
		},
		toShapes: function (e, t) {
			function n(e) {
				for (var t = [], n = 0, r = e.length; n < r; n++) {
					var i = e[n],
						a = new Qo;
					a.curves = i.curves, t.push(a)
				}
				return t
			}

			function r(e, t) {
				for (var n = t.length, r = !1, i = n - 1, a = 0; a < n; i = a++) {
					var o = t[i],
						s = t[a],
						l = s.x - o.x,
						c = s.y - o.y;
					if (Math.abs(c) > Number.EPSILON) {
						if (c < 0 && (o = t[a], l = -l, s = t[i], c = -c), e.y < o.y || e.y > s.y) continue;
						if (e.y === o.y) {
							if (e.x === o.x) return !0
						} else {
							var u = c * (e.x - o.x) - l * (e.y - o.y);
							if (0 === u) return !0;
							if (u < 0) continue;
							r = !r
						}
					} else {
						if (e.y !== o.y) continue;
						if (s.x <= e.x && e.x <= o.x || o.x <= e.x && e.x <= s.x) return !0
					}
				}
				return r
			}
			var i = _a.isClockWise,
				a = this.subPaths;
			if (0 === a.length) return [];
			if (!0 === t) return n(a);
			var o, s, l, c = [];
			if (1 === a.length) return s = a[0], (l = new Qo).curves = s.curves, c.push(l), c;
			var u = !i(a[0].getPoints());
			u = e ? !u : u;
			var h, p, d = [],
				f = [],
				m = [],
				v = 0;
			f[v] = void 0, m[v] = [];
			for (var g = 0, y = a.length; g < y; g++) o = i(h = (s = a[g]).getPoints()), (o = e ? !o : o) ? (!u && f[v] && v++, f[v] = {
				s: new Qo,
				p: h
			}, f[v].s.curves = s.curves, u && v++, m[v] = []) : m[v].push({
				h: s,
				p: h[0]
			});
			if (!f[0]) return n(a);
			if (f.length > 1) {
				for (var x = !1, b = [], w = 0, _ = f.length; w < _; w++) d[w] = [];
				for (w = 0, _ = f.length; w < _; w++)
					for (var M = m[w], S = 0; S < M.length; S++) {
						for (var T = M[S], E = !0, C = 0; C < f.length; C++) r(T.p, f[C].p) && (w !== C && b.push({
							froms: w,
							tos: C,
							hole: S
						}), E ? (E = !1, d[C].push(T)) : x = !0);
						E && d[w].push(T)
					}
				b.length > 0 && (x || (m = d))
			}
			g = 0;
			for (var A = f.length; g < A; g++) {
				l = f[g].s, c.push(l);
				for (var P = 0, L = (p = m[g]).length; P < L; P++) l.holes.push(p[P].h)
			}
			return c
		}
	}), Object.assign(Ms.prototype, {
		isFont: !0,
		generateShapes: function (e, t) {
			void 0 === t && (t = 100);
			for (var n = [], r = function (e, t, n) {
					for (var r = Array.from ? Array.from(e) : String(e).split(""), i = t / n.resolution, a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * i, o = [], s = 0, l = 0, c = 0; c < r.length; c++) {
						var u = r[c];
						if ("\n" === u) s = 0, l -= a;
						else {
							var h = Ss(u, i, s, l, n);
							s += h.offsetX, o.push(h.path)
						}
					}
					return o
				}(e, t, this.data), i = 0, a = r.length; i < a; i++) Array.prototype.push.apply(n, r[i].toShapes());
			return n
		}
	}), Object.assign(function (e) {
		this.manager = void 0 !== e ? e : Mo
	}.prototype, {
		load: function (e, t, n, r) {
			var i = this,
				a = new To(this.manager);
			a.setPath(this.path), a.load(e, function (e) {
				var n;
				try {
					n = JSON.parse(e)
				} catch (t) {
					console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(e.substring(65, e.length - 2))
				}
				var r = i.parse(n);
				t && t(r)
			}, n, r)
		},
		parse: function (e) {
			return new Ms(e)
		},
		setPath: function (e) {
			return this.path = e, this
		}
	});
	var Ts = {
		getContext: function () {
			return void 0 === gs && (gs = new(window.AudioContext || window.webkitAudioContext)), gs
		},
		setContext: function (e) {
			gs = e
		}
	};

	function Es(e) {
		this.manager = void 0 !== e ? e : Mo
	}

	function Cs(e, t, n, r) {
		vn.call(this), this.type = "CubeCamera";
		var i = new oi(90, 1, e, t);
		i.up.set(0, -1, 0), i.lookAt(new Vt(1, 0, 0)), this.add(i);
		var a = new oi(90, 1, e, t);
		a.up.set(0, -1, 0), a.lookAt(new Vt(-1, 0, 0)), this.add(a);
		var o = new oi(90, 1, e, t);
		o.up.set(0, 0, 1), o.lookAt(new Vt(0, 1, 0)), this.add(o);
		var s = new oi(90, 1, e, t);
		s.up.set(0, 0, -1), s.lookAt(new Vt(0, -1, 0)), this.add(s);
		var l = new oi(90, 1, e, t);
		l.up.set(0, -1, 0), l.lookAt(new Vt(0, 0, 1)), this.add(l);
		var c = new oi(90, 1, e, t);
		c.up.set(0, -1, 0), c.lookAt(new Vt(0, 0, -1)), this.add(c), r = r || {
			format: Ye,
			magFilter: Oe,
			minFilter: Oe
		}, this.renderTarget = new $t(n, n, r), this.renderTarget.texture.name = "CubeCamera", this.update = function (e, t) {
			null === this.parent && this.updateMatrixWorld();
			var n = this.renderTarget,
				r = n.texture.generateMipmaps;
			n.texture.generateMipmaps = !1, n.activeCubeFace = 0, e.render(t, i, n), n.activeCubeFace = 1, e.render(t, a, n), n.activeCubeFace = 2, e.render(t, o, n), n.activeCubeFace = 3, e.render(t, s, n), n.activeCubeFace = 4, e.render(t, l, n), n.texture.generateMipmaps = r, n.activeCubeFace = 5, e.render(t, c, n), e.setRenderTarget(null)
		}, this.clear = function (e, t, n, r) {
			for (var i = this.renderTarget, a = 0; a < 6; a++) i.activeCubeFace = a, e.setRenderTarget(i), e.clear(t, n, r);
			e.setRenderTarget(null)
		}
	}

	function As(e) {
		this.autoStart = void 0 === e || e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
	}

	function Ps() {
		vn.call(this), this.type = "AudioListener", this.context = Ts.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0
	}

	function Ls(e) {
		vn.call(this), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.loop = !1, this.startTime = 0, this.offset = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
	}

	function Rs(e) {
		Ls.call(this, e), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
	}

	function Os(e, t) {
		this.analyser = e.context.createAnalyser(), this.analyser.fftSize = void 0 !== t ? t : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser)
	}

	function ks(e, t, n) {
		this.binding = e, this.valueSize = n;
		var r, i = Float64Array;
		switch (t) {
			case "quaternion":
				r = this._slerp;
				break;
			case "string":
			case "bool":
				i = Array, r = this._select;
				break;
			default:
				r = this._lerp
		}
		this.buffer = new i(4 * n), this._mixBufferRegion = r, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
	}
	Object.assign(Es.prototype, {
		load: function (e, t, n, r) {
			var i = new To(this.manager);
			i.setResponseType("arraybuffer"), i.setPath(this.path), i.load(e, function (e) {
				var n = e.slice(0);
				Ts.getContext().decodeAudioData(n, function (e) {
					t(e)
				})
			}, n, r)
		},
		setPath: function (e) {
			return this.path = e, this
		}
	}), Object.assign(function () {
		this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new oi, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new oi, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
	}.prototype, {
		update: function () {
			var e, t, n, r, i, a, o, s, l = new Ht,
				c = new Ht;
			return function (u) {
				if (e !== this || t !== u.focus || n !== u.fov || r !== u.aspect * this.aspect || i !== u.near || a !== u.far || o !== u.zoom || s !== this.eyeSep) {
					e = this, t = u.focus, n = u.fov, r = u.aspect * this.aspect, i = u.near, a = u.far, o = u.zoom;
					var h, p, d = u.projectionMatrix.clone(),
						f = (s = this.eyeSep / 2) * i / t,
						m = i * Math.tan(Ft.DEG2RAD * n * .5) / o;
					c.elements[12] = -s, l.elements[12] = s, h = -m * r + f, p = m * r + f, d.elements[0] = 2 * i / (p - h), d.elements[8] = (p + h) / (p - h), this.cameraL.projectionMatrix.copy(d), h = -m * r - f, p = m * r - f, d.elements[0] = 2 * i / (p - h), d.elements[8] = (p + h) / (p - h), this.cameraR.projectionMatrix.copy(d)
				}
				this.cameraL.matrixWorld.copy(u.matrixWorld).multiply(c), this.cameraR.matrixWorld.copy(u.matrixWorld).multiply(l)
			}
		}()
	}), Cs.prototype = Object.create(vn.prototype), Cs.prototype.constructor = Cs, Object.assign(As.prototype, {
		start: function () {
			this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
		},
		stop: function () {
			this.getElapsedTime(), this.running = !1, this.autoStart = !1
		},
		getElapsedTime: function () {
			return this.getDelta(), this.elapsedTime
		},
		getDelta: function () {
			var e = 0;
			if (this.autoStart && !this.running) return this.start(), 0;
			if (this.running) {
				var t = ("undefined" == typeof performance ? Date : performance).now();
				e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e
			}
			return e
		}
	}), Ps.prototype = Object.assign(Object.create(vn.prototype), {
		constructor: Ps,
		getInput: function () {
			return this.gain
		},
		removeFilter: function () {
			return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this
		},
		getFilter: function () {
			return this.filter
		},
		setFilter: function (e) {
			return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this
		},
		getMasterVolume: function () {
			return this.gain.gain.value
		},
		setMasterVolume: function (e) {
			return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
		},
		updateMatrixWorld: function () {
			var e = new Vt,
				t = new Gt,
				n = new Vt,
				r = new Vt,
				i = new As;
			return function (a) {
				vn.prototype.updateMatrixWorld.call(this, a);
				var o = this.context.listener,
					s = this.up;
				if (this.timeDelta = i.getDelta(), this.matrixWorld.decompose(e, t, n), r.set(0, 0, -1).applyQuaternion(t), o.positionX) {
					var l = this.context.currentTime + this.timeDelta;
					o.positionX.linearRampToValueAtTime(e.x, l), o.positionY.linearRampToValueAtTime(e.y, l), o.positionZ.linearRampToValueAtTime(e.z, l), o.forwardX.linearRampToValueAtTime(r.x, l), o.forwardY.linearRampToValueAtTime(r.y, l), o.forwardZ.linearRampToValueAtTime(r.z, l), o.upX.linearRampToValueAtTime(s.x, l), o.upY.linearRampToValueAtTime(s.y, l), o.upZ.linearRampToValueAtTime(s.z, l)
				} else o.setPosition(e.x, e.y, e.z), o.setOrientation(r.x, r.y, r.z, s.x, s.y, s.z)
			}
		}()
	}), Ls.prototype = Object.assign(Object.create(vn.prototype), {
		constructor: Ls,
		getOutput: function () {
			return this.gain
		},
		setNodeSource: function (e) {
			return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this
		},
		setMediaElementSource: function (e) {
			return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this
		},
		setBuffer: function (e) {
			return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this
		},
		play: function () {
			if (!0 !== this.isPlaying) {
				if (!1 !== this.hasPlaybackControl) {
					var e = this.context.createBufferSource();
					return e.buffer = this.buffer, e.loop = this.loop, e.onended = this.onEnded.bind(this), e.playbackRate.setValueAtTime(this.playbackRate, this.startTime), this.startTime = this.context.currentTime, e.start(this.startTime, this.offset), this.isPlaying = !0, this.source = e, this.connect()
				}
				console.warn("THREE.Audio: this Audio has no playback control.")
			} else console.warn("THREE.Audio: Audio is already playing.")
		},
		pause: function () {
			if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this.source.stop(), this.source.onended = null, this.offset += (this.context.currentTime - this.startTime) * this.playbackRate, this.isPlaying = !1), this;
			console.warn("THREE.Audio: this Audio has no playback control.")
		},
		stop: function () {
			if (!1 !== this.hasPlaybackControl) return this.source.stop(), this.source.onended = null, this.offset = 0, this.isPlaying = !1, this;
			console.warn("THREE.Audio: this Audio has no playback control.")
		},
		connect: function () {
			if (this.filters.length > 0) {
				this.source.connect(this.filters[0]);
				for (var e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
				this.filters[this.filters.length - 1].connect(this.getOutput())
			} else this.source.connect(this.getOutput());
			return this
		},
		disconnect: function () {
			if (this.filters.length > 0) {
				this.source.disconnect(this.filters[0]);
				for (var e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
				this.filters[this.filters.length - 1].disconnect(this.getOutput())
			} else this.source.disconnect(this.getOutput());
			return this
		},
		getFilters: function () {
			return this.filters
		},
		setFilters: function (e) {
			return e || (e = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = e, this.connect()) : this.filters = e, this
		},
		getFilter: function () {
			return this.getFilters()[0]
		},
		setFilter: function (e) {
			return this.setFilters(e ? [e] : [])
		},
		setPlaybackRate: function (e) {
			if (!1 !== this.hasPlaybackControl) return this.playbackRate = e, !0 === this.isPlaying && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime), this;
			console.warn("THREE.Audio: this Audio has no playback control.")
		},
		getPlaybackRate: function () {
			return this.playbackRate
		},
		onEnded: function () {
			this.isPlaying = !1
		},
		getLoop: function () {
			return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
		},
		setLoop: function (e) {
			if (!1 !== this.hasPlaybackControl) return this.loop = e, !0 === this.isPlaying && (this.source.loop = this.loop), this;
			console.warn("THREE.Audio: this Audio has no playback control.")
		},
		getVolume: function () {
			return this.gain.gain.value
		},
		setVolume: function (e) {
			return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
		}
	}), Rs.prototype = Object.assign(Object.create(Ls.prototype), {
		constructor: Rs,
		getOutput: function () {
			return this.panner
		},
		getRefDistance: function () {
			return this.panner.refDistance
		},
		setRefDistance: function (e) {
			return this.panner.refDistance = e, this
		},
		getRolloffFactor: function () {
			return this.panner.rolloffFactor
		},
		setRolloffFactor: function (e) {
			return this.panner.rolloffFactor = e, this
		},
		getDistanceModel: function () {
			return this.panner.distanceModel
		},
		setDistanceModel: function (e) {
			return this.panner.distanceModel = e, this
		},
		getMaxDistance: function () {
			return this.panner.maxDistance
		},
		setMaxDistance: function (e) {
			return this.panner.maxDistance = e, this
		},
		setDirectionalCone: function (e, t, n) {
			return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = n, this
		},
		updateMatrixWorld: function () {
			var e = new Vt,
				t = new Gt,
				n = new Vt,
				r = new Vt;
			return function (i) {
				vn.prototype.updateMatrixWorld.call(this, i);
				var a = this.panner;
				if (this.matrixWorld.decompose(e, t, n), r.set(0, 0, 1).applyQuaternion(t), a.positionX) {
					var o = this.context.currentTime + this.listener.timeDelta;
					a.positionX.linearRampToValueAtTime(e.x, o), a.positionY.linearRampToValueAtTime(e.y, o), a.positionZ.linearRampToValueAtTime(e.z, o), a.orientationX.linearRampToValueAtTime(r.x, o), a.orientationY.linearRampToValueAtTime(r.y, o), a.orientationZ.linearRampToValueAtTime(r.z, o)
				} else a.setPosition(e.x, e.y, e.z), a.setOrientation(r.x, r.y, r.z)
			}
		}()
	}), Object.assign(Os.prototype, {
		getFrequencyData: function () {
			return this.analyser.getByteFrequencyData(this.data), this.data
		},
		getAverageFrequency: function () {
			for (var e = 0, t = this.getFrequencyData(), n = 0; n < t.length; n++) e += t[n];
			return e / t.length
		}
	}), Object.assign(ks.prototype, {
		accumulate: function (e, t) {
			var n = this.buffer,
				r = this.valueSize,
				i = e * r + r,
				a = this.cumulativeWeight;
			if (0 === a) {
				for (var o = 0; o !== r; ++o) n[i + o] = n[o];
				a = t
			} else {
				var s = t / (a += t);
				this._mixBufferRegion(n, i, 0, s, r)
			}
			this.cumulativeWeight = a
		},
		apply: function (e) {
			var t = this.valueSize,
				n = this.buffer,
				r = e * t + t,
				i = this.cumulativeWeight,
				a = this.binding;
			if (this.cumulativeWeight = 0, i < 1) {
				var o = 3 * t;
				this._mixBufferRegion(n, r, o, 1 - i, t)
			}
			for (var s = t, l = t + t; s !== l; ++s)
				if (n[s] !== n[s + t]) {
					a.setValue(n, r);
					break
				}
		},
		saveOriginalState: function () {
			var e = this.binding,
				t = this.buffer,
				n = this.valueSize,
				r = 3 * n;
			e.getValue(t, r);
			for (var i = n, a = r; i !== a; ++i) t[i] = t[r + i % n];
			this.cumulativeWeight = 0
		},
		restoreOriginalState: function () {
			var e = 3 * this.valueSize;
			this.binding.setValue(this.buffer, e)
		},
		_select: function (e, t, n, r, i) {
			if (r >= .5)
				for (var a = 0; a !== i; ++a) e[t + a] = e[n + a]
		},
		_slerp: function (e, t, n, r) {
			Gt.slerpFlat(e, t, e, t, e, n, r)
		},
		_lerp: function (e, t, n, r, i) {
			for (var a = 1 - r, o = 0; o !== i; ++o) {
				var s = t + o;
				e[s] = e[s] * a + e[n + o] * r
			}
		}
	});
	var Is, Ns;

	function Ds(e, t, n) {
		var r = n || zs.parseTrackName(t);
		this._targetGroup = e, this._bindings = e.subscribe_(t, r)
	}

	function zs(e, t, n) {
		this.path = t, this.parsedPath = n || zs.parseTrackName(t), this.node = zs.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e
	}

	function Us(e, t, n) {
		this._mixer = e, this._clip = t, this._localRoot = n || null;
		for (var r = t.tracks, i = r.length, a = new Array(i), o = {
				endingStart: Tt,
				endingEnd: Tt
			}, s = 0; s !== i; ++s) {
			var l = r[s].createInterpolant(null);
			a[s] = l, l.settings = o
		}
		this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(i), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = St, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
	}

	function Bs(e) {
		this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
	}

	function Fs(e) {
		"string" == typeof e && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = arguments[1]), this.value = e
	}

	function js() {
		On.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
	}

	function Hs(e, t, n) {
		gi.call(this, e, t), this.meshPerAttribute = n || 1
	}

	function Gs(e, t, n, r) {
		"number" == typeof n && (r = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), xn.call(this, e, t, n), this.meshPerAttribute = r || 1
	}

	function Vs(e, t, n, r) {
		this.ray = new Fn(e, t), this.near = n || 0, this.far = r || 1 / 0, this.params = {
			Mesh: {},
			Line: {},
			LOD: {},
			Points: {
				threshold: 1
			},
			Sprite: {}
		}, Object.defineProperties(this.params, {
			PointCloud: {
				get: function () {
					return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
				}
			}
		})
	}

	function Ws(e, t) {
		return e.distance - t.distance
	}

	function qs(e, t, n, r) {
		if (!1 !== e.visible && (e.raycast(t, n), !0 === r))
			for (var i = e.children, a = 0, o = i.length; a < o; a++) qs(i[a], t, n, !0)
	}

	function Xs(e, t) {
		this.min = void 0 !== e ? e : new jt(1 / 0, 1 / 0), this.max = void 0 !== t ? t : new jt(-1 / 0, -1 / 0)
	}

	function Ys(e, t) {
		this.start = void 0 !== e ? e : new Vt, this.end = void 0 !== t ? t : new Vt
	}

	function Js(e) {
		vn.call(this), this.material = e, this.render = function () {}
	}

	function Zs(e, t, n, r) {
		this.object = e, this.size = void 0 !== t ? t : 1;
		var i = void 0 !== n ? n : 16711680,
			a = void 0 !== r ? r : 1,
			o = 0,
			s = this.object.geometry;
		s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count);
		var l = new On,
			c = new Cn(2 * o * 3, 3);
		l.addAttribute("position", c), Ci.call(this, l, new Ti({
			color: i,
			linewidth: a
		})), this.matrixAutoUpdate = !1, this.update()
	}

	function $s(e, t) {
		vn.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t;
		for (var n = new On, r = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], i = 0, a = 1; i < 32; i++, a++) {
			var o = i / 32 * Math.PI * 2,
				s = a / 32 * Math.PI * 2;
			r.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
		}
		n.addAttribute("position", new Cn(r, 3));
		var l = new Ti({
			fog: !1
		});
		this.cone = new Ci(n, l), this.add(this.cone), this.update()
	}

	function Qs(e) {
		for (var t = function e(t) {
				var n = [];
				t && t.isBone && n.push(t);
				for (var r = 0; r < t.children.length; r++) n.push.apply(n, e(t.children[r]));
				return n
			}(e), n = new On, r = [], i = [], a = new sn(0, 0, 1), o = new sn(0, 1, 0), s = 0; s < t.length; s++) {
			var l = t[s];
			l.parent && l.parent.isBone && (r.push(0, 0, 0), r.push(0, 0, 0), i.push(a.r, a.g, a.b), i.push(o.r, o.g, o.b))
		}
		n.addAttribute("position", new Cn(r, 3)), n.addAttribute("color", new Cn(i, 3));
		var c = new Ti({
			vertexColors: I,
			depthTest: !1,
			depthWrite: !1,
			transparent: !0
		});
		Ci.call(this, n, c), this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
	}

	function Ks(e, t, n) {
		this.light = e, this.light.updateMatrixWorld(), this.color = n;
		var r = new Oa(t, 4, 2),
			i = new Hn({
				wireframe: !0,
				fog: !1
			});
		Gn.call(this, r, i), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
	}

	function el(e, t) {
		vn.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = t;
		var n = new Ti({
				fog: !1
			}),
			r = new On;
		r.addAttribute("position", new xn(new Float32Array(15), 3)), this.line = new Ei(r, n), this.add(this.line), this.update()
	}

	function tl(e, t, n) {
		vn.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n;
		var r = new Gi(t);
		r.rotateY(.5 * Math.PI), this.material = new Hn({
			wireframe: !0,
			fog: !1
		}), void 0 === this.color && (this.material.vertexColors = I);
		var i = r.getAttribute("position"),
			a = new Float32Array(3 * i.count);
		r.addAttribute("color", new xn(a, 3)), this.add(new Gn(r, this.material)), this.update()
	}

	function nl(e, t, n, r) {
		e = e || 10, t = t || 10, n = new sn(void 0 !== n ? n : 4473924), r = new sn(void 0 !== r ? r : 8947848);
		for (var i = t / 2, a = e / t, o = e / 2, s = [], l = [], c = 0, u = 0, h = -o; c <= t; c++, h += a) {
			s.push(-o, 0, h, o, 0, h), s.push(h, 0, -o, h, 0, o);
			var p = c === i ? n : r;
			p.toArray(l, u), u += 3, p.toArray(l, u), u += 3, p.toArray(l, u), u += 3, p.toArray(l, u), u += 3
		}
		var d = new On;
		d.addAttribute("position", new Cn(s, 3)), d.addAttribute("color", new Cn(l, 3));
		var f = new Ti({
			vertexColors: I
		});
		Ci.call(this, d, f)
	}

	function rl(e, t, n, r, i, a) {
		e = e || 10, t = t || 16, n = n || 8, r = r || 64, i = new sn(void 0 !== i ? i : 4473924), a = new sn(void 0 !== a ? a : 8947848);
		var o, s, l, c, u, h, p, d = [],
			f = [];
		for (c = 0; c <= t; c++) l = c / t * (2 * Math.PI), o = Math.sin(l) * e, s = Math.cos(l) * e, d.push(0, 0, 0), d.push(o, 0, s), p = 1 & c ? i : a, f.push(p.r, p.g, p.b), f.push(p.r, p.g, p.b);
		for (c = 0; c <= n; c++)
			for (p = 1 & c ? i : a, h = e - e / n * c, u = 0; u < r; u++) l = u / r * (2 * Math.PI), o = Math.sin(l) * h, s = Math.cos(l) * h, d.push(o, 0, s), f.push(p.r, p.g, p.b), l = (u + 1) / r * (2 * Math.PI), o = Math.sin(l) * h, s = Math.cos(l) * h, d.push(o, 0, s), f.push(p.r, p.g, p.b);
		var m = new On;
		m.addAttribute("position", new Cn(d, 3)), m.addAttribute("color", new Cn(f, 3));
		var v = new Ti({
			vertexColors: I
		});
		Ci.call(this, m, v)
	}

	function il(e, t, n, r) {
		this.object = e, this.size = void 0 !== t ? t : 1;
		var i = void 0 !== n ? n : 16776960,
			a = void 0 !== r ? r : 1,
			o = 0,
			s = this.object.geometry;
		s && s.isGeometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
		var l = new On,
			c = new Cn(2 * o * 3, 3);
		l.addAttribute("position", c), Ci.call(this, l, new Ti({
			color: i,
			linewidth: a
		})), this.matrixAutoUpdate = !1, this.update()
	}

	function al(e, t, n) {
		vn.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, void 0 === t && (t = 1);
		var r = new On;
		r.addAttribute("position", new Cn([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3));
		var i = new Ti({
			fog: !1
		});
		this.lightPlane = new Ei(r, i), this.add(this.lightPlane), (r = new On).addAttribute("position", new Cn([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Ei(r, i), this.add(this.targetLine), this.update()
	}

	function ol(e) {
		var t = new On,
			n = new Ti({
				color: 16777215,
				vertexColors: k
			}),
			r = [],
			i = [],
			a = {},
			o = new sn(16755200),
			s = new sn(16711680),
			l = new sn(43775),
			c = new sn(16777215),
			u = new sn(3355443);

		function h(e, t, n) {
			p(e, n), p(t, n)
		}

		function p(e, t) {
			r.push(0, 0, 0), i.push(t.r, t.g, t.b), void 0 === a[e] && (a[e] = []), a[e].push(r.length / 3 - 1)
		}
		h("n1", "n2", o), h("n2", "n4", o), h("n4", "n3", o), h("n3", "n1", o), h("f1", "f2", o), h("f2", "f4", o), h("f4", "f3", o), h("f3", "f1", o), h("n1", "f1", o), h("n2", "f2", o), h("n3", "f3", o), h("n4", "f4", o), h("p", "n1", s), h("p", "n2", s), h("p", "n3", s), h("p", "n4", s), h("u1", "u2", l), h("u2", "u3", l), h("u3", "u1", l), h("c", "t", c), h("p", "c", u), h("cn1", "cn2", u), h("cn3", "cn4", u), h("cf1", "cf2", u), h("cf3", "cf4", u), t.addAttribute("position", new Cn(r, 3)), t.addAttribute("color", new Cn(i, 3)), Ci.call(this, t, n), this.camera = e, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update()
	}

	function sl(e, t) {
		this.object = e, void 0 === t && (t = 16776960);
		var n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
			r = new Float32Array(24),
			i = new On;
		i.setIndex(new xn(n, 1)), i.addAttribute("position", new xn(r, 3)), Ci.call(this, i, new Ti({
			color: t
		})), this.matrixAutoUpdate = !1, this.update()
	}

	function ll(e, t) {
		this.type = "Box3Helper", this.box = e;
		var n = void 0 !== t ? t : 16776960,
			r = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
			i = new On;
		i.setIndex(new xn(r, 1)), i.addAttribute("position", new Cn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), Ci.call(this, i, new Ti({
			color: n
		})), this.geometry.computeBoundingSphere()
	}

	function cl(e, t, n) {
		this.type = "PlaneHelper", this.plane = e, this.size = void 0 === t ? 1 : t;
		var r = void 0 !== n ? n : 16776960,
			i = new On;
		i.addAttribute("position", new Cn([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), i.computeBoundingSphere(), Ei.call(this, i, new Ti({
			color: r
		}));
		var a = new On;
		a.addAttribute("position", new Cn([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), a.computeBoundingSphere(), this.add(new Gn(a, new Hn({
			color: r,
			opacity: .2,
			transparent: !0,
			depthWrite: !1
		})))
	}

	function ul(e, t, n, r, i, a) {
		vn.call(this), void 0 === e && (e = new THREE.Vector3(0, 0, 1)), void 0 === t && (t = new THREE.Vector3(0, 0, 0)), void 0 === n && (n = 1), void 0 === r && (r = 16776960), void 0 === i && (i = .2 * n), void 0 === a && (a = .2 * i), void 0 === Is && ((Is = new On).addAttribute("position", new Cn([0, 0, 0, 0, 1, 0], 3)), (Ns = new Ha(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(t), this.line = new Ei(Is, new Ti({
			color: r
		})), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Gn(Ns, new Hn({
			color: r
		})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(e), this.setLength(n, i, a)
	}

	function hl(e) {
		var t = [0, 0, 0, e = e || 1, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
			n = new On;
		n.addAttribute("position", new Cn(t, 3)), n.addAttribute("color", new Cn([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3));
		var r = new Ti({
			vertexColors: I
		});
		Ci.call(this, n, r)
	}
	Object.assign(Ds.prototype, {
			getValue: function (e, t) {
				this.bind();
				var n = this._targetGroup.nCachedObjects_,
					r = this._bindings[n];
				void 0 !== r && r.getValue(e, t)
			},
			setValue: function (e, t) {
				for (var n = this._bindings, r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t)
			},
			bind: function () {
				for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind()
			},
			unbind: function () {
				for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind()
			}
		}), Object.assign(zs, {
			Composite: Ds,
			create: function (e, t, n) {
				return e && e.isAnimationObjectGroup ? new zs.Composite(e, t, n) : new zs(e, t, n)
			},
			sanitizeNodeName: function () {
				var e = new RegExp("[\\[\\]\\.:\\/]", "g");
				return function (t) {
					return t.replace(/\s/g, "_").replace(e, "")
				}
			}(),
			parseTrackName: function () {
				var e = "[^\\[\\]\\.:\\/]",
					t = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
					n = /((?:WC+[\/:])*)/.source.replace("WC", e),
					r = /(WCOD+)?/.source.replace("WCOD", t),
					i = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", e),
					a = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", e),
					o = new RegExp("^" + n + r + i + a + "$"),
					s = ["material", "materials", "bones"];
				return function (e) {
					var t = o.exec(e);
					if (!t) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
					var n = {
							nodeName: t[2],
							objectName: t[3],
							objectIndex: t[4],
							propertyName: t[5],
							propertyIndex: t[6]
						},
						r = n.nodeName && n.nodeName.lastIndexOf(".");
					if (void 0 !== r && -1 !== r) {
						var i = n.nodeName.substring(r + 1); - 1 !== s.indexOf(i) && (n.nodeName = n.nodeName.substring(0, r), n.objectName = i)
					}
					if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
					return n
				}
			}(),
			findNode: function (e, t) {
				if (!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid) return e;
				if (e.skeleton) {
					var n = e.skeleton.getBoneByName(t);
					if (void 0 !== n) return n
				}
				if (e.children) {
					var r = function (e) {
							for (var n = 0; n < e.length; n++) {
								var i = e[n];
								if (i.name === t || i.uuid === t) return i;
								var a = r(i.children);
								if (a) return a
							}
							return null
						},
						i = r(e.children);
					if (i) return i
				}
				return null
			}
		}), Object.assign(zs.prototype, {
			_getValue_unavailable: function () {},
			_setValue_unavailable: function () {},
			BindingType: {
				Direct: 0,
				EntireArray: 1,
				ArrayElement: 2,
				HasFromToArray: 3
			},
			Versioning: {
				None: 0,
				NeedsUpdate: 1,
				MatrixWorldNeedsUpdate: 2
			},
			GetterByBindingType: [function (e, t) {
				e[t] = this.node[this.propertyName]
			}, function (e, t) {
				for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) e[t++] = n[r]
			}, function (e, t) {
				e[t] = this.resolvedProperty[this.propertyIndex]
			}, function (e, t) {
				this.resolvedProperty.toArray(e, t)
			}],
			SetterByBindingTypeAndVersioning: [
				[function (e, t) {
					this.targetObject[this.propertyName] = e[t]
				}, function (e, t) {
					this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0
				}, function (e, t) {
					this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
				}],
				[function (e, t) {
					for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) n[r] = e[t++]
				}, function (e, t) {
					for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
					this.targetObject.needsUpdate = !0
				}, function (e, t) {
					for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
					this.targetObject.matrixWorldNeedsUpdate = !0
				}],
				[function (e, t) {
					this.resolvedProperty[this.propertyIndex] = e[t]
				}, function (e, t) {
					this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0
				}, function (e, t) {
					this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
				}],
				[function (e, t) {
					this.resolvedProperty.fromArray(e, t)
				}, function (e, t) {
					this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0
				}, function (e, t) {
					this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0
				}]
			],
			getValue: function (e, t) {
				this.bind(), this.getValue(e, t)
			},
			setValue: function (e, t) {
				this.bind(), this.setValue(e, t)
			},
			bind: function () {
				var e = this.node,
					t = this.parsedPath,
					n = t.objectName,
					r = t.propertyName,
					i = t.propertyIndex;
				if (e || (e = zs.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, e) {
					if (n) {
						var a = t.objectIndex;
						switch (n) {
							case "materials":
								if (!e.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
								if (!e.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
								e = e.material.materials;
								break;
							case "bones":
								if (!e.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
								e = e.skeleton.bones;
								for (var o = 0; o < e.length; o++)
									if (e[o].name === a) {
										a = o;
										break
									} break;
							default:
								if (void 0 === e[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
								e = e[n]
						}
						if (void 0 !== a) {
							if (void 0 === e[a]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
							e = e[a]
						}
					}
					var s = e[r];
					if (void 0 !== s) {
						var l = this.Versioning.None;
						this.targetObject = e, void 0 !== e.needsUpdate ? l = this.Versioning.NeedsUpdate : void 0 !== e.matrixWorldNeedsUpdate && (l = this.Versioning.MatrixWorldNeedsUpdate);
						var c = this.BindingType.Direct;
						if (void 0 !== i) {
							if ("morphTargetInfluences" === r) {
								if (!e.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
								if (e.geometry.isBufferGeometry) {
									if (!e.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
									for (o = 0; o < this.node.geometry.morphAttributes.position.length; o++)
										if (e.geometry.morphAttributes.position[o].name === i) {
											i = o;
											break
										}
								} else {
									if (!e.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
									for (o = 0; o < this.node.geometry.morphTargets.length; o++)
										if (e.geometry.morphTargets[o].name === i) {
											i = o;
											break
										}
								}
							}
							c = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = i
						} else void 0 !== s.fromArray && void 0 !== s.toArray ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (c = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = r;
						this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][l]
					} else {
						var u = t.nodeName;
						console.error("THREE.PropertyBinding: Trying to update property for track: " + u + "." + r + " but it wasn't found.", e)
					}
				} else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
			},
			unbind: function () {
				this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
			}
		}),
		//!\ DECLARE ALIAS AFTER assign prototype !
		Object.assign(zs.prototype, {
			_getValue_unbound: zs.prototype.getValue,
			_setValue_unbound: zs.prototype.setValue
		}), Object.assign(function () {
			this.uuid = Ft.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
			var e = {};
			this._indicesByUUID = e;
			for (var t = 0, n = arguments.length; t !== n; ++t) e[arguments[t].uuid] = t;
			this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
			var r = this;
			this.stats = {
				objects: {
					get total() {
						return r._objects.length
					},
					get inUse() {
						return this.total - r.nCachedObjects_
					}
				},
				get bindingsPerObject() {
					return r._bindings.length
				}
			}
		}.prototype, {
			isAnimationObjectGroup: !0,
			add: function () {
				for (var e = this._objects, t = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, l = void 0, c = 0, u = arguments.length; c !== u; ++c) {
					var h = arguments[c],
						p = h.uuid,
						d = r[p];
					if (void 0 === d) {
						d = t++, r[p] = d, e.push(h);
						for (var f = 0, m = s; f !== m; ++f) o[f].push(new zs(h, i[f], a[f]))
					} else if (d < n) {
						l = e[d];
						var v = --n,
							g = e[v];
						r[g.uuid] = d, e[d] = g, r[p] = v, e[v] = h;
						for (f = 0, m = s; f !== m; ++f) {
							var y = o[f],
								x = y[v],
								b = y[d];
							y[d] = x, void 0 === b && (b = new zs(h, i[f], a[f])), y[v] = b
						}
					} else e[d] !== l && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
				}
				this.nCachedObjects_ = n
			},
			remove: function () {
				for (var e = this._objects, t = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, i = r.length, a = 0, o = arguments.length; a !== o; ++a) {
					var s = arguments[a],
						l = s.uuid,
						c = n[l];
					if (void 0 !== c && c >= t) {
						var u = t++,
							h = e[u];
						n[h.uuid] = c, e[c] = h, n[l] = u, e[u] = s;
						for (var p = 0, d = i; p !== d; ++p) {
							var f = r[p],
								m = f[u],
								v = f[c];
							f[c] = m, f[u] = v
						}
					}
				}
				this.nCachedObjects_ = t
			},
			uncache: function () {
				for (var e = this._objects, t = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, i = this._bindings, a = i.length, o = 0, s = arguments.length; o !== s; ++o) {
					var l = arguments[o].uuid,
						c = r[l];
					if (void 0 !== c)
						if (delete r[l], c < n) {
							var u = --n,
								h = e[u],
								p = e[g = --t];
							r[h.uuid] = c, e[c] = h, r[p.uuid] = u, e[u] = p, e.pop();
							for (var d = 0, f = a; d !== f; ++d) {
								var m = (y = i[d])[u],
									v = y[g];
								y[c] = m, y[u] = v, y.pop()
							}
						} else {
							var g;
							r[(p = e[g = --t]).uuid] = c, e[c] = p, e.pop();
							for (d = 0, f = a; d !== f; ++d) {
								var y;
								(y = i[d])[c] = y[g], y.pop()
							}
						}
				}
				this.nCachedObjects_ = n
			},
			subscribe_: function (e, t) {
				var n = this._bindingsIndicesByPath,
					r = n[e],
					i = this._bindings;
				if (void 0 !== r) return i[r];
				var a = this._paths,
					o = this._parsedPaths,
					s = this._objects,
					l = s.length,
					c = this.nCachedObjects_,
					u = new Array(l);
				r = i.length, n[e] = r, a.push(e), o.push(t), i.push(u);
				for (var h = c, p = s.length; h !== p; ++h) {
					var d = s[h];
					u[h] = new zs(d, e, t)
				}
				return u
			},
			unsubscribe_: function (e) {
				var t = this._bindingsIndicesByPath,
					n = t[e];
				if (void 0 !== n) {
					var r = this._paths,
						i = this._parsedPaths,
						a = this._bindings,
						o = a.length - 1,
						s = a[o];
					t[e[o]] = n, a[n] = s, a.pop(), i[n] = i[o], i.pop(), r[n] = r[o], r.pop()
				}
			}
		}), Object.assign(Us.prototype, {
			play: function () {
				return this._mixer._activateAction(this), this
			},
			stop: function () {
				return this._mixer._deactivateAction(this), this.reset()
			},
			reset: function () {
				return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
			},
			isRunning: function () {
				return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
			},
			isScheduled: function () {
				return this._mixer._isActiveAction(this)
			},
			startAt: function (e) {
				return this._startTime = e, this
			},
			setLoop: function (e, t) {
				return this.loop = e, this.repetitions = t, this
			},
			setEffectiveWeight: function (e) {
				return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading()
			},
			getEffectiveWeight: function () {
				return this._effectiveWeight
			},
			fadeIn: function (e) {
				return this._scheduleFading(e, 0, 1)
			},
			fadeOut: function (e) {
				return this._scheduleFading(e, 1, 0)
			},
			crossFadeFrom: function (e, t, n) {
				if (e.fadeOut(t), this.fadeIn(t), n) {
					var r = this._clip.duration,
						i = e._clip.duration,
						a = i / r,
						o = r / i;
					e.warp(1, a, t), this.warp(o, 1, t)
				}
				return this
			},
			crossFadeTo: function (e, t, n) {
				return e.crossFadeFrom(this, t, n)
			},
			stopFading: function () {
				var e = this._weightInterpolant;
				return null !== e && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
			},
			setEffectiveTimeScale: function (e) {
				return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping()
			},
			getEffectiveTimeScale: function () {
				return this._effectiveTimeScale
			},
			setDuration: function (e) {
				return this.timeScale = this._clip.duration / e, this.stopWarping()
			},
			syncWith: function (e) {
				return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping()
			},
			halt: function (e) {
				return this.warp(this._effectiveTimeScale, 0, e)
			},
			warp: function (e, t, n) {
				var r = this._mixer,
					i = r.time,
					a = this._timeScaleInterpolant,
					o = this.timeScale;
				null === a && (a = r._lendControlInterpolant(), this._timeScaleInterpolant = a);
				var s = a.parameterPositions,
					l = a.sampleValues;
				return s[0] = i, s[1] = i + n, l[0] = e / o, l[1] = t / o, this
			},
			stopWarping: function () {
				var e = this._timeScaleInterpolant;
				return null !== e && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
			},
			getMixer: function () {
				return this._mixer
			},
			getClip: function () {
				return this._clip
			},
			getRoot: function () {
				return this._localRoot || this._mixer._root
			},
			_update: function (e, t, n, r) {
				if (this.enabled) {
					var i = this._startTime;
					if (null !== i) {
						var a = (e - i) * n;
						if (a < 0 || 0 === n) return;
						this._startTime = null, t = n * a
					}
					t *= this._updateTimeScale(e);
					var o = this._updateTime(t),
						s = this._updateWeight(e);
					if (s > 0)
						for (var l = this._interpolants, c = this._propertyBindings, u = 0, h = l.length; u !== h; ++u) l[u].evaluate(o), c[u].accumulate(r, s)
				} else this._updateWeight(e)
			},
			_updateWeight: function (e) {
				var t = 0;
				if (this.enabled) {
					t = this.weight;
					var n = this._weightInterpolant;
					if (null !== n) {
						var r = n.evaluate(e)[0];
						t *= r, e > n.parameterPositions[1] && (this.stopFading(), 0 === r && (this.enabled = !1))
					}
				}
				return this._effectiveWeight = t, t
			},
			_updateTimeScale: function (e) {
				var t = 0;
				if (!this.paused) {
					t = this.timeScale;
					var n = this._timeScaleInterpolant;
					if (null !== n) t *= n.evaluate(e)[0], e > n.parameterPositions[1] && (this.stopWarping(), 0 === t ? this.paused = !0 : this.timeScale = t)
				}
				return this._effectiveTimeScale = t, t
			},
			_updateTime: function (e) {
				var t = this.time + e,
					n = this._clip.duration,
					r = this.loop,
					i = this._loopCount,
					a = 2202 === r;
				if (0 === e) return -1 === i ? t : a && 1 == (1 & i) ? n - t : t;
				if (2200 === r) {
					-1 === i && (this._loopCount = 0, this._setEndings(!0, !0, !1));
					e: {
						if (t >= n) t = n;
						else {
							if (!(t < 0)) break e;
							t = 0
						}
						this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
						this._mixer.dispatchEvent({
							type: "finished",
							action: this,
							direction: e < 0 ? -1 : 1
						})
					}
				} else {
					if (-1 === i && (e >= 0 ? (i = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), t >= n || t < 0) {
						var o = Math.floor(t / n);
						t -= n * o, i += Math.abs(o);
						var s = this.repetitions - i;
						if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, t = e > 0 ? n : 0, this._mixer.dispatchEvent({
							type: "finished",
							action: this,
							direction: e > 0 ? 1 : -1
						});
						else {
							if (1 === s) {
								var l = e < 0;
								this._setEndings(l, !l, a)
							} else this._setEndings(!1, !1, a);
							this._loopCount = i, this._mixer.dispatchEvent({
								type: "loop",
								action: this,
								loopDelta: o
							})
						}
					}
					if (a && 1 == (1 & i)) return this.time = t, n - t
				}
				return this.time = t, t
			},
			_setEndings: function (e, t, n) {
				var r = this._interpolantSettings;
				n ? (r.endingStart = 2401, r.endingEnd = 2401) : (r.endingStart = e ? this.zeroSlopeAtStart ? 2401 : Tt : 2402, r.endingEnd = t ? this.zeroSlopeAtEnd ? 2401 : Tt : 2402)
			},
			_scheduleFading: function (e, t, n) {
				var r = this._mixer,
					i = r.time,
					a = this._weightInterpolant;
				null === a && (a = r._lendControlInterpolant(), this._weightInterpolant = a);
				var o = a.parameterPositions,
					s = a.sampleValues;
				return o[0] = i, s[0] = t, o[1] = i + e, s[1] = n, this
			}
		}), Bs.prototype = Object.assign(Object.create(_.prototype), {
			constructor: Bs,
			_bindAction: function (e, t) {
				var n = e._localRoot || this._root,
					r = e._clip.tracks,
					i = r.length,
					a = e._propertyBindings,
					o = e._interpolants,
					s = n.uuid,
					l = this._bindingsByRootAndName,
					c = l[s];
				void 0 === c && (c = {}, l[s] = c);
				for (var u = 0; u !== i; ++u) {
					var h = r[u],
						p = h.name,
						d = c[p];
					if (void 0 !== d) a[u] = d;
					else {
						if (void 0 !== (d = a[u])) {
							null === d._cacheIndex && (++d.referenceCount, this._addInactiveBinding(d, s, p));
							continue
						}
						var f = t && t._propertyBindings[u].binding.parsedPath;
						++(d = new ks(zs.create(n, p, f), h.ValueTypeName, h.getValueSize())).referenceCount, this._addInactiveBinding(d, s, p), a[u] = d
					}
					o[u].resultBuffer = d.buffer
				}
			},
			_activateAction: function (e) {
				if (!this._isActiveAction(e)) {
					if (null === e._cacheIndex) {
						var t = (e._localRoot || this._root).uuid,
							n = e._clip.uuid,
							r = this._actionsByClip[n];
						this._bindAction(e, r && r.knownActions[0]), this._addInactiveAction(e, n, t)
					}
					for (var i = e._propertyBindings, a = 0, o = i.length; a !== o; ++a) {
						var s = i[a];
						0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
					}
					this._lendAction(e)
				}
			},
			_deactivateAction: function (e) {
				if (this._isActiveAction(e)) {
					for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
						var i = t[n];
						0 == --i.useCount && (i.restoreOriginalState(), this._takeBackBinding(i))
					}
					this._takeBackAction(e)
				}
			},
			_initMemoryManager: function () {
				this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
				var e = this;
				this.stats = {
					actions: {
						get total() {
							return e._actions.length
						},
						get inUse() {
							return e._nActiveActions
						}
					},
					bindings: {
						get total() {
							return e._bindings.length
						},
						get inUse() {
							return e._nActiveBindings
						}
					},
					controlInterpolants: {
						get total() {
							return e._controlInterpolants.length
						},
						get inUse() {
							return e._nActiveControlInterpolants
						}
					}
				}
			},
			_isActiveAction: function (e) {
				var t = e._cacheIndex;
				return null !== t && t < this._nActiveActions
			},
			_addInactiveAction: function (e, t, n) {
				var r = this._actions,
					i = this._actionsByClip,
					a = i[t];
				if (void 0 === a) a = {
					knownActions: [e],
					actionByRoot: {}
				}, e._byClipCacheIndex = 0, i[t] = a;
				else {
					var o = a.knownActions;
					e._byClipCacheIndex = o.length, o.push(e)
				}
				e._cacheIndex = r.length, r.push(e), a.actionByRoot[n] = e
			},
			_removeInactiveAction: function (e) {
				var t = this._actions,
					n = t[t.length - 1],
					r = e._cacheIndex;
				n._cacheIndex = r, t[r] = n, t.pop(), e._cacheIndex = null;
				var i = e._clip.uuid,
					a = this._actionsByClip,
					o = a[i],
					s = o.knownActions,
					l = s[s.length - 1],
					c = e._byClipCacheIndex;
				l._byClipCacheIndex = c, s[c] = l, s.pop(), e._byClipCacheIndex = null, delete o.actionByRoot[(e._localRoot || this._root).uuid], 0 === s.length && delete a[i], this._removeInactiveBindingsForAction(e)
			},
			_removeInactiveBindingsForAction: function (e) {
				for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
					var i = t[n];
					0 == --i.referenceCount && this._removeInactiveBinding(i)
				}
			},
			_lendAction: function (e) {
				var t = this._actions,
					n = e._cacheIndex,
					r = this._nActiveActions++,
					i = t[r];
				e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i
			},
			_takeBackAction: function (e) {
				var t = this._actions,
					n = e._cacheIndex,
					r = --this._nActiveActions,
					i = t[r];
				e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i
			},
			_addInactiveBinding: function (e, t, n) {
				var r = this._bindingsByRootAndName,
					i = r[t],
					a = this._bindings;
				void 0 === i && (i = {}, r[t] = i), i[n] = e, e._cacheIndex = a.length, a.push(e)
			},
			_removeInactiveBinding: function (e) {
				var t = this._bindings,
					n = e.binding,
					r = n.rootNode.uuid,
					i = n.path,
					a = this._bindingsByRootAndName,
					o = a[r],
					s = t[t.length - 1],
					l = e._cacheIndex;
				s._cacheIndex = l, t[l] = s, t.pop(), delete o[i];
				e: {
					for (var c in o) break e;delete a[r]
				}
			},
			_lendBinding: function (e) {
				var t = this._bindings,
					n = e._cacheIndex,
					r = this._nActiveBindings++,
					i = t[r];
				e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i
			},
			_takeBackBinding: function (e) {
				var t = this._bindings,
					n = e._cacheIndex,
					r = --this._nActiveBindings,
					i = t[r];
				e._cacheIndex = r, t[r] = e, i._cacheIndex = n, t[n] = i
			},
			_lendControlInterpolant: function () {
				var e = this._controlInterpolants,
					t = this._nActiveControlInterpolants++,
					n = e[t];
				return void 0 === n && ((n = new lo(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = t, e[t] = n), n
			},
			_takeBackControlInterpolant: function (e) {
				var t = this._controlInterpolants,
					n = e.__cacheIndex,
					r = --this._nActiveControlInterpolants,
					i = t[r];
				e.__cacheIndex = r, t[r] = e, i.__cacheIndex = n, t[n] = i
			},
			_controlInterpolantsResultBuffer: new Float32Array(1),
			clipAction: function (e, t) {
				var n = t || this._root,
					r = n.uuid,
					i = "string" == typeof e ? xo.findByName(n, e) : e,
					a = null !== i ? i.uuid : e,
					o = this._actionsByClip[a],
					s = null;
				if (void 0 !== o) {
					var l = o.actionByRoot[r];
					if (void 0 !== l) return l;
					s = o.knownActions[0], null === i && (i = s._clip)
				}
				if (null === i) return null;
				var c = new Us(this, i, t);
				return this._bindAction(c, s), this._addInactiveAction(c, a, r), c
			},
			existingAction: function (e, t) {
				var n = t || this._root,
					r = n.uuid,
					i = "string" == typeof e ? xo.findByName(n, e) : e,
					a = i ? i.uuid : e,
					o = this._actionsByClip[a];
				return void 0 !== o && o.actionByRoot[r] || null
			},
			stopAllAction: function () {
				var e = this._actions,
					t = this._nActiveActions,
					n = this._bindings,
					r = this._nActiveBindings;
				this._nActiveActions = 0, this._nActiveBindings = 0;
				for (var i = 0; i !== t; ++i) e[i].reset();
				for (i = 0; i !== r; ++i) n[i].useCount = 0;
				return this
			},
			update: function (e) {
				e *= this.timeScale;
				for (var t = this._actions, n = this._nActiveActions, r = this.time += e, i = Math.sign(e), a = this._accuIndex ^= 1, o = 0; o !== n; ++o) {
					t[o]._update(r, e, i, a)
				}
				var s = this._bindings,
					l = this._nActiveBindings;
				for (o = 0; o !== l; ++o) s[o].apply(a);
				return this
			},
			getRoot: function () {
				return this._root
			},
			uncacheClip: function (e) {
				var t = this._actions,
					n = e.uuid,
					r = this._actionsByClip,
					i = r[n];
				if (void 0 !== i) {
					for (var a = i.knownActions, o = 0, s = a.length; o !== s; ++o) {
						var l = a[o];
						this._deactivateAction(l);
						var c = l._cacheIndex,
							u = t[t.length - 1];
						l._cacheIndex = null, l._byClipCacheIndex = null, u._cacheIndex = c, t[c] = u, t.pop(), this._removeInactiveBindingsForAction(l)
					}
					delete r[n]
				}
			},
			uncacheRoot: function (e) {
				var t = e.uuid,
					n = this._actionsByClip;
				for (var r in n) {
					var i = n[r].actionByRoot[t];
					void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
				}
				var a = this._bindingsByRootAndName[t];
				if (void 0 !== a)
					for (var o in a) {
						var s = a[o];
						s.restoreOriginalState(), this._removeInactiveBinding(s)
					}
			},
			uncacheAction: function (e, t) {
				var n = this.existingAction(e, t);
				null !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
			}
		}), Fs.prototype.clone = function () {
			return new Fs(void 0 === this.value.clone ? this.value : this.value.clone())
		}, js.prototype = Object.assign(Object.create(On.prototype), {
			constructor: js,
			isInstancedBufferGeometry: !0,
			copy: function (e) {
				return On.prototype.copy.call(this, e), this.maxInstancedCount = e.maxInstancedCount, this
			},
			clone: function () {
				return (new this.constructor).copy(this)
			}
		}), Hs.prototype = Object.assign(Object.create(gi.prototype), {
			constructor: Hs,
			isInstancedInterleavedBuffer: !0,
			copy: function (e) {
				return gi.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
			}
		}), Gs.prototype = Object.assign(Object.create(xn.prototype), {
			constructor: Gs,
			isInstancedBufferAttribute: !0,
			copy: function (e) {
				return xn.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
			}
		}), Object.assign(Vs.prototype, {
			linePrecision: 1,
			set: function (e, t) {
				this.ray.set(e, t)
			},
			setFromCamera: function (e, t) {
				t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize()) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
			},
			intersectObject: function (e, t, n) {
				var r = n || [];
				return qs(e, this, r, t), r.sort(Ws), r
			},
			intersectObjects: function (e, t, n) {
				var r = n || [];
				if (!1 === Array.isArray(e)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), r;
				for (var i = 0, a = e.length; i < a; i++) qs(e[i], this, r, t);
				return r.sort(Ws), r
			}
		}), Object.assign(function (e, t, n) {
			return this.radius = void 0 !== e ? e : 1, this.phi = void 0 !== t ? t : 0, this.theta = void 0 !== n ? n : 0, this
		}.prototype, {
			set: function (e, t, n) {
				return this.radius = e, this.phi = t, this.theta = n, this
			},
			clone: function () {
				return (new this.constructor).copy(this)
			},
			copy: function (e) {
				return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this
			},
			makeSafe: function () {
				return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
			},
			setFromVector3: function (e) {
				return this.setFromCartesianCoords(e.x, e.y, e.z)
			},
			setFromCartesianCoords: function (e, t, n) {
				return this.radius = Math.sqrt(e * e + t * t + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Ft.clamp(t / this.radius, -1, 1))), this
			}
		}), Object.assign(function (e, t, n) {
			return this.radius = void 0 !== e ? e : 1, this.theta = void 0 !== t ? t : 0, this.y = void 0 !== n ? n : 0, this
		}.prototype, {
			set: function (e, t, n) {
				return this.radius = e, this.theta = t, this.y = n, this
			},
			clone: function () {
				return (new this.constructor).copy(this)
			},
			copy: function (e) {
				return this.radius = e.radius, this.theta = e.theta, this.y = e.y, this
			},
			setFromVector3: function (e) {
				return this.setFromCartesianCoords(e.x, e.y, e.z)
			},
			setFromCartesianCoords: function (e, t, n) {
				return this.radius = Math.sqrt(e * e + n * n), this.theta = Math.atan2(e, n), this.y = t, this
			}
		}), Object.assign(Xs.prototype, {
			set: function (e, t) {
				return this.min.copy(e), this.max.copy(t), this
			},
			setFromPoints: function (e) {
				this.makeEmpty();
				for (var t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
				return this
			},
			setFromCenterAndSize: function () {
				var e = new jt;
				return function (t, n) {
					var r = e.copy(n).multiplyScalar(.5);
					return this.min.copy(t).sub(r), this.max.copy(t).add(r), this
				}
			}(),
			clone: function () {
				return (new this.constructor).copy(this)
			},
			copy: function (e) {
				return this.min.copy(e.min), this.max.copy(e.max), this
			},
			makeEmpty: function () {
				return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
			},
			isEmpty: function () {
				return this.max.x < this.min.x || this.max.y < this.min.y
			},
			getCenter: function (e) {
				return void 0 === e && (console.warn("THREE.Box2: .getCenter() target is now required"), e = new jt), this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
			},
			getSize: function (e) {
				return void 0 === e && (console.warn("THREE.Box2: .getSize() target is now required"), e = new jt), this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
			},
			expandByPoint: function (e) {
				return this.min.min(e), this.max.max(e), this
			},
			expandByVector: function (e) {
				return this.min.sub(e), this.max.add(e), this
			},
			expandByScalar: function (e) {
				return this.min.addScalar(-e), this.max.addScalar(e), this
			},
			containsPoint: function (e) {
				return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y)
			},
			containsBox: function (e) {
				return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y
			},
			getParameter: function (e, t) {
				return void 0 === t && (console.warn("THREE.Box2: .getParameter() target is now required"), t = new jt), t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
			},
			intersectsBox: function (e) {
				return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y)
			},
			clampPoint: function (e, t) {
				return void 0 === t && (console.warn("THREE.Box2: .clampPoint() target is now required"), t = new jt), t.copy(e).clamp(this.min, this.max)
			},
			distanceToPoint: function () {
				var e = new jt;
				return function (t) {
					return e.copy(t).clamp(this.min, this.max).sub(t).length()
				}
			}(),
			intersect: function (e) {
				return this.min.max(e.min), this.max.min(e.max), this
			},
			union: function (e) {
				return this.min.min(e.min), this.max.max(e.max), this
			},
			translate: function (e) {
				return this.min.add(e), this.max.add(e), this
			},
			equals: function (e) {
				return e.min.equals(this.min) && e.max.equals(this.max)
			}
		}), Object.assign(Ys.prototype, {
			set: function (e, t) {
				return this.start.copy(e), this.end.copy(t), this
			},
			clone: function () {
				return (new this.constructor).copy(this)
			},
			copy: function (e) {
				return this.start.copy(e.start), this.end.copy(e.end), this
			},
			getCenter: function (e) {
				return void 0 === e && (console.warn("THREE.Line3: .getCenter() target is now required"), e = new Vt), e.addVectors(this.start, this.end).multiplyScalar(.5)
			},
			delta: function (e) {
				return void 0 === e && (console.warn("THREE.Line3: .delta() target is now required"), e = new Vt), e.subVectors(this.end, this.start)
			},
			distanceSq: function () {
				return this.start.distanceToSquared(this.end)
			},
			distance: function () {
				return this.start.distanceTo(this.end)
			},
			at: function (e, t) {
				return void 0 === t && (console.warn("THREE.Line3: .at() target is now required"), t = new Vt), this.delta(t).multiplyScalar(e).add(this.start)
			},
			closestPointToPointParameter: function () {
				var e = new Vt,
					t = new Vt;
				return function (n, r) {
					e.subVectors(n, this.start), t.subVectors(this.end, this.start);
					var i = t.dot(t),
						a = t.dot(e) / i;
					return r && (a = Ft.clamp(a, 0, 1)), a
				}
			}(),
			closestPointToPoint: function (e, t, n) {
				var r = this.closestPointToPointParameter(e, t);
				return void 0 === n && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new Vt), this.delta(n).multiplyScalar(r).add(this.start)
			},
			applyMatrix4: function (e) {
				return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
			},
			equals: function (e) {
				return e.start.equals(this.start) && e.end.equals(this.end)
			}
		}), Js.prototype = Object.create(vn.prototype), Js.prototype.constructor = Js, Js.prototype.isImmediateRenderObject = !0, Zs.prototype = Object.create(Ci.prototype), Zs.prototype.constructor = Zs, Zs.prototype.update = function () {
			var e = new Vt,
				t = new Vt,
				n = new Wt;
			return function () {
				var r = ["a", "b", "c"];
				this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
				var i = this.object.matrixWorld,
					a = this.geometry.attributes.position,
					o = this.object.geometry;
				if (o && o.isGeometry)
					for (var s = o.vertices, l = o.faces, c = 0, u = 0, h = l.length; u < h; u++)
						for (var p = l[u], d = 0, f = p.vertexNormals.length; d < f; d++) {
							var m = s[p[r[d]]],
								v = p.vertexNormals[d];
							e.copy(m).applyMatrix4(i), t.copy(v).applyMatrix3(n).normalize().multiplyScalar(this.size).add(e), a.setXYZ(c, e.x, e.y, e.z), c += 1, a.setXYZ(c, t.x, t.y, t.z), c += 1
						} else if (o && o.isBufferGeometry) {
							var g = o.attributes.position,
								y = o.attributes.normal;
							for (c = 0, d = 0, f = g.count; d < f; d++) e.set(g.getX(d), g.getY(d), g.getZ(d)).applyMatrix4(i), t.set(y.getX(d), y.getY(d), y.getZ(d)), t.applyMatrix3(n).normalize().multiplyScalar(this.size).add(e), a.setXYZ(c, e.x, e.y, e.z), c += 1, a.setXYZ(c, t.x, t.y, t.z), c += 1
						} a.needsUpdate = !0
			}
		}(), $s.prototype = Object.create(vn.prototype), $s.prototype.constructor = $s, $s.prototype.dispose = function () {
			this.cone.geometry.dispose(), this.cone.material.dispose()
		}, $s.prototype.update = function () {
			var e = new Vt,
				t = new Vt;
			return function () {
				this.light.updateMatrixWorld();
				var n = this.light.distance ? this.light.distance : 1e3,
					r = n * Math.tan(this.light.angle);
				this.cone.scale.set(r, r, n), e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(t.sub(e)), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
			}
		}(), Qs.prototype = Object.create(Ci.prototype), Qs.prototype.constructor = Qs, Qs.prototype.updateMatrixWorld = function () {
			var e = new Vt,
				t = new Ht,
				n = new Ht;
			return function (r) {
				var i = this.bones,
					a = this.geometry,
					o = a.getAttribute("position");
				n.getInverse(this.root.matrixWorld);
				for (var s = 0, l = 0; s < i.length; s++) {
					var c = i[s];
					c.parent && c.parent.isBone && (t.multiplyMatrices(n, c.matrixWorld), e.setFromMatrixPosition(t), o.setXYZ(l, e.x, e.y, e.z), t.multiplyMatrices(n, c.parent.matrixWorld), e.setFromMatrixPosition(t), o.setXYZ(l + 1, e.x, e.y, e.z), l += 2)
				}
				a.getAttribute("position").needsUpdate = !0, vn.prototype.updateMatrixWorld.call(this, r)
			}
		}(), Ks.prototype = Object.create(Gn.prototype), Ks.prototype.constructor = Ks, Ks.prototype.dispose = function () {
			this.geometry.dispose(), this.material.dispose()
		}, Ks.prototype.update = function () {
			void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
		}, el.prototype = Object.create(vn.prototype), el.prototype.constructor = el, el.prototype.dispose = function () {
			this.children[0].geometry.dispose(), this.children[0].material.dispose()
		}, el.prototype.update = function () {
			var e = .5 * this.light.width,
				t = .5 * this.light.height,
				n = this.line.geometry.attributes.position,
				r = n.array;
			r[0] = e, r[1] = -t, r[2] = 0, r[3] = e, r[4] = t, r[5] = 0, r[6] = -e, r[7] = t, r[8] = 0, r[9] = -e, r[10] = -t, r[11] = 0, r[12] = e, r[13] = -t, r[14] = 0, n.needsUpdate = !0, void 0 !== this.color ? this.line.material.color.set(this.color) : this.line.material.color.copy(this.light.color)
		}, tl.prototype = Object.create(vn.prototype), tl.prototype.constructor = tl, tl.prototype.dispose = function () {
			this.children[0].geometry.dispose(), this.children[0].material.dispose()
		}, tl.prototype.update = function () {
			var e = new Vt,
				t = new sn,
				n = new sn;
			return function () {
				var r = this.children[0];
				if (void 0 !== this.color) this.material.color.set(this.color);
				else {
					var i = r.geometry.getAttribute("color");
					t.copy(this.light.color), n.copy(this.light.groundColor);
					for (var a = 0, o = i.count; a < o; a++) {
						var s = a < o / 2 ? t : n;
						i.setXYZ(a, s.r, s.g, s.b)
					}
					i.needsUpdate = !0
				}
				r.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate())
			}
		}(), nl.prototype = Object.create(Ci.prototype), nl.prototype.constructor = nl, rl.prototype = Object.create(Ci.prototype), rl.prototype.constructor = rl, il.prototype = Object.create(Ci.prototype), il.prototype.constructor = il, il.prototype.update = function () {
			var e = new Vt,
				t = new Vt,
				n = new Wt;
			return function () {
				this.object.updateMatrixWorld(!0), n.getNormalMatrix(this.object.matrixWorld);
				for (var r = this.object.matrixWorld, i = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, l = 0, c = 0, u = s.length; c < u; c++) {
					var h = s[c],
						p = h.normal;
					e.copy(o[h.a]).add(o[h.b]).add(o[h.c]).divideScalar(3).applyMatrix4(r), t.copy(p).applyMatrix3(n).normalize().multiplyScalar(this.size).add(e), i.setXYZ(l, e.x, e.y, e.z), l += 1, i.setXYZ(l, t.x, t.y, t.z), l += 1
				}
				i.needsUpdate = !0
			}
		}(), al.prototype = Object.create(vn.prototype), al.prototype.constructor = al, al.prototype.dispose = function () {
			this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
		}, al.prototype.update = function () {
			var e = new Vt,
				t = new Vt,
				n = new Vt;
			return function () {
				e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), n.subVectors(t, e), this.lightPlane.lookAt(n), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(n), this.targetLine.scale.z = n.length()
			}
		}(), ol.prototype = Object.create(Ci.prototype), ol.prototype.constructor = ol, ol.prototype.update = function () {
			var e, t, n = new Vt,
				r = new ai;

			function i(i, a, o, s) {
				n.set(a, o, s).unproject(r);
				var l = t[i];
				if (void 0 !== l)
					for (var c = e.getAttribute("position"), u = 0, h = l.length; u < h; u++) c.setXYZ(l[u], n.x, n.y, n.z)
			}
			return function () {
				e = this.geometry, t = this.pointMap;
				r.projectionMatrix.copy(this.camera.projectionMatrix), i("c", 0, 0, -1), i("t", 0, 0, 1), i("n1", -1, -1, -1), i("n2", 1, -1, -1), i("n3", -1, 1, -1), i("n4", 1, 1, -1), i("f1", -1, -1, 1), i("f2", 1, -1, 1), i("f3", -1, 1, 1), i("f4", 1, 1, 1), i("u1", .7, 1.1, -1), i("u2", -.7, 1.1, -1), i("u3", 0, 2, -1), i("cf1", -1, 0, 1), i("cf2", 1, 0, 1), i("cf3", 0, -1, 1), i("cf4", 0, 1, 1), i("cn1", -1, 0, -1), i("cn2", 1, 0, -1), i("cn3", 0, -1, -1), i("cn4", 0, 1, -1), e.getAttribute("position").needsUpdate = !0
			}
		}(), sl.prototype = Object.create(Ci.prototype), sl.prototype.constructor = sl, sl.prototype.update = function () {
			var e = new Kt;
			return function (t) {
				if (void 0 !== t && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && e.setFromObject(this.object), !e.isEmpty()) {
					var n = e.min,
						r = e.max,
						i = this.geometry.attributes.position,
						a = i.array;
					a[0] = r.x, a[1] = r.y, a[2] = r.z, a[3] = n.x, a[4] = r.y, a[5] = r.z, a[6] = n.x, a[7] = n.y, a[8] = r.z, a[9] = r.x, a[10] = n.y, a[11] = r.z, a[12] = r.x, a[13] = r.y, a[14] = n.z, a[15] = n.x, a[16] = r.y, a[17] = n.z, a[18] = n.x, a[19] = n.y, a[20] = n.z, a[21] = r.x, a[22] = n.y, a[23] = n.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere()
				}
			}
		}(), sl.prototype.setFromObject = function (e) {
			return this.object = e, this.update(), this
		}, sl.prototype.copy = function (e) {
			return Ci.prototype.copy.call(this, e), this.object = e.object, this
		}, sl.prototype.clone = function () {
			return (new this.constructor).copy(this)
		}, ll.prototype = Object.create(Ci.prototype), ll.prototype.constructor = ll, ll.prototype.updateMatrixWorld = function (e) {
			var t = this.box;
			t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(.5), vn.prototype.updateMatrixWorld.call(this, e))
		}, cl.prototype = Object.create(Ei.prototype), cl.prototype.constructor = cl, cl.prototype.updateMatrixWorld = function (e) {
			var t = -this.plane.constant;
			Math.abs(t) < 1e-8 && (t = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, t), this.children[0].material.side = t < 0 ? L : P, this.lookAt(this.plane.normal), vn.prototype.updateMatrixWorld.call(this, e)
		}, ul.prototype = Object.create(vn.prototype), ul.prototype.constructor = ul, ul.prototype.setDirection = function () {
			var e, t = new Vt;
			return function (n) {
				n.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : n.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (t.set(n.z, 0, -n.x).normalize(), e = Math.acos(n.y), this.quaternion.setFromAxisAngle(t, e))
			}
		}(), ul.prototype.setLength = function (e, t, n) {
			void 0 === t && (t = .2 * e), void 0 === n && (n = .2 * t), this.line.scale.set(1, Math.max(0, e - t), 1), this.line.updateMatrix(), this.cone.scale.set(n, t, n), this.cone.position.y = e, this.cone.updateMatrix()
		}, ul.prototype.setColor = function (e) {
			this.line.material.color.copy(e), this.cone.material.color.copy(e)
		}, ul.prototype.copy = function (e) {
			return vn.prototype.copy.call(this, e, !1), this.line.copy(e.line), this.cone.copy(e.cone), this
		}, ul.prototype.clone = function () {
			return (new this.constructor).copy(this)
		}, hl.prototype = Object.create(Ci.prototype), hl.prototype.constructor = hl;

	function pl(e) {
		console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Uo.call(this, e), this.type = "catmullrom"
	}
	Lo.create = function (e, t) {
		return console.log("THREE.Curve.create() has been deprecated"), e.prototype = Object.create(Lo.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e
	}, Object.assign(Zo.prototype, {
		createPointsGeometry: function (e) {
			console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
			var t = this.getPoints(e);
			return this.createGeometry(t)
		},
		createSpacedPointsGeometry: function (e) {
			console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
			var t = this.getSpacedPoints(e);
			return this.createGeometry(t)
		},
		createGeometry: function (e) {
			console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
			for (var t = new yn, n = 0, r = e.length; n < r; n++) {
				var i = e[n];
				t.vertices.push(new Vt(i.x, i.y, i.z || 0))
			}
			return t
		}
	}), Object.assign($o.prototype, {
		fromPoints: function (e) {
			console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(e)
		}
	}), Object.create(Uo.prototype), Object.create(Uo.prototype), pl.prototype = Object.create(Uo.prototype), Object.assign(pl.prototype, {
		initFromArray: function () {
			console.error("THREE.Spline: .initFromArray() has been removed.")
		},
		getControlPointsArray: function () {
			console.error("THREE.Spline: .getControlPointsArray() has been removed.")
		},
		reparametrizeByArcLength: function () {
			console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
		}
	}), nl.prototype.setColors = function () {
		console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
	}, Qs.prototype.update = function () {
		console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
	}, Object.assign(fs.prototype, {
		extractUrlBase: function (e) {
			return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), hs(e)
		}
	}), Object.assign(ms.prototype, {
		setTexturePath: function (e) {
			return console.warn("THREE.JSONLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(e)
		}
	}), Object.assign(vs.prototype, {
		setTexturePath: function (e) {
			return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."), this.setResourcePath(e)
		}
	}), Object.assign(Xs.prototype, {
		center: function (e) {
			return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(e)
		},
		empty: function () {
			return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
		},
		isIntersectionBox: function (e) {
			return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
		},
		size: function (e) {
			return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(e)
		}
	}), Object.assign(Kt.prototype, {
		center: function (e) {
			return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(e)
		},
		empty: function () {
			return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
		},
		isIntersectionBox: function (e) {
			return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
		},
		isIntersectionSphere: function (e) {
			return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
		},
		size: function (e) {
			return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(e)
		}
	}), Ys.prototype.center = function (e) {
		return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(e)
	}, Object.assign(Ft, {
		random16: function () {
			return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
		},
		nearestPowerOfTwo: function (e) {
			return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), Ft.floorPowerOfTwo(e)
		},
		nextPowerOfTwo: function (e) {
			return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), Ft.ceilPowerOfTwo(e)
		}
	}), Object.assign(Wt.prototype, {
		flattenToArrayOffset: function (e, t) {
			return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t)
		},
		multiplyVector3: function (e) {
			return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
		},
		multiplyVector3Array: function () {
			console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
		},
		applyToBuffer: function (e) {
			return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(e)
		},
		applyToVector3Array: function () {
			console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
		}
	}), Object.assign(Ht.prototype, {
		extractPosition: function (e) {
			return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
		},
		flattenToArrayOffset: function (e, t) {
			return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t)
		},
		getPosition: function () {
			var e;
			return function () {
				return void 0 === e && (e = new Vt), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), e.setFromMatrixColumn(this, 3)
			}
		}(),
		setRotationFromQuaternion: function (e) {
			return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e)
		},
		multiplyToArray: function () {
			console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
		},
		multiplyVector3: function (e) {
			return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
		},
		multiplyVector4: function (e) {
			return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
		},
		multiplyVector3Array: function () {
			console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
		},
		rotateAxis: function (e) {
			console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
		},
		crossVector: function (e) {
			return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
		},
		translate: function () {
			console.error("THREE.Matrix4: .translate() has been removed.")
		},
		rotateX: function () {
			console.error("THREE.Matrix4: .rotateX() has been removed.")
		},
		rotateY: function () {
			console.error("THREE.Matrix4: .rotateY() has been removed.")
		},
		rotateZ: function () {
			console.error("THREE.Matrix4: .rotateZ() has been removed.")
		},
		rotateByAxis: function () {
			console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
		},
		applyToBuffer: function (e) {
			return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(e)
		},
		applyToVector3Array: function () {
			console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
		},
		makeFrustum: function (e, t, n, r, i, a) {
			return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(e, t, r, n, i, a)
		}
	}), tn.prototype.isIntersectionLine = function (e) {
		return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e)
	}, Gt.prototype.multiplyVector3 = function (e) {
		return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
	}, Object.assign(Fn.prototype, {
		isIntersectionBox: function (e) {
			return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
		},
		isIntersectionPlane: function (e) {
			return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e)
		},
		isIntersectionSphere: function (e) {
			return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
		}
	}), Object.assign(jn.prototype, {
		area: function () {
			return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
		},
		barycoordFromPoint: function (e, t) {
			return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(e, t)
		},
		midpoint: function (e) {
			return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(e)
		},
		normal: function (e) {
			return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(e)
		},
		plane: function (e) {
			return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(e)
		}
	}), Object.assign(jn, {
		barycoordFromPoint: function (e, t, n, r, i) {
			return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), jn.getBarycoord(e, t, n, r, i)
		},
		normal: function (e, t, n, r) {
			return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), jn.getNormal(e, t, n, r)
		}
	}), Object.assign(Qo.prototype, {
		extractAllPoints: function (e) {
			return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(e)
		},
		extrude: function (e) {
			return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Ta(this, e)
		},
		makeGeometry: function (e) {
			return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new za(this, e)
		}
	}), Object.assign(jt.prototype, {
		fromAttribute: function (e, t, n) {
			return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
		},
		distanceToManhattan: function (e) {
			return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e)
		},
		lengthManhattan: function () {
			return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
		}
	}), Object.assign(Vt.prototype, {
		setEulerFromRotationMatrix: function () {
			console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
		},
		setEulerFromQuaternion: function () {
			console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
		},
		getPositionFromMatrix: function (e) {
			return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
		},
		getScaleFromMatrix: function (e) {
			return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
		},
		getColumnFromMatrix: function (e, t) {
			return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e)
		},
		applyProjection: function (e) {
			return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(e)
		},
		fromAttribute: function (e, t, n) {
			return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
		},
		distanceToManhattan: function (e) {
			return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e)
		},
		lengthManhattan: function () {
			return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
		}
	}), Object.assign(Jt.prototype, {
		fromAttribute: function (e, t, n) {
			return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, n)
		},
		lengthManhattan: function () {
			return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
		}
	}), Object.assign(yn.prototype, {
		computeTangents: function () {
			console.error("THREE.Geometry: .computeTangents() has been removed.")
		},
		computeLineDistances: function () {
			console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
		}
	}), Object.assign(vn.prototype, {
		getChildByName: function (e) {
			return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e)
		},
		renderDepth: function () {
			console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
		},
		translate: function (e, t) {
			return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e)
		},
		getWorldRotation: function () {
			console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
		}
	}), Object.defineProperties(vn.prototype, {
		eulerOrder: {
			get: function () {
				return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
			},
			set: function (e) {
				console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e
			}
		},
		useQuaternion: {
			get: function () {
				console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
			},
			set: function () {
				console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
			}
		}
	}), Object.defineProperties(wi.prototype, {
		objects: {
			get: function () {
				return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
			}
		}
	}), Object.defineProperty(_i.prototype, "useVertexTexture", {
		get: function () {
			console.warn("THREE.Skeleton: useVertexTexture has been removed.")
		},
		set: function () {
			console.warn("THREE.Skeleton: useVertexTexture has been removed.")
		}
	}), Object.defineProperty(Lo.prototype, "__arcLengthDivisions", {
		get: function () {
			return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
		},
		set: function (e) {
			console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = e
		}
	}), oi.prototype.setLens = function (e, t) {
		console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== t && (this.filmGauge = t), this.setFocalLength(e)
	}, Object.defineProperties(Ko.prototype, {
		onlyShadow: {
			set: function () {
				console.warn("THREE.Light: .onlyShadow has been removed.")
			}
		},
		shadowCameraFov: {
			set: function (e) {
				console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e
			}
		},
		shadowCameraLeft: {
			set: function (e) {
				console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e
			}
		},
		shadowCameraRight: {
			set: function (e) {
				console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e
			}
		},
		shadowCameraTop: {
			set: function (e) {
				console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e
			}
		},
		shadowCameraBottom: {
			set: function (e) {
				console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e
			}
		},
		shadowCameraNear: {
			set: function (e) {
				console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e
			}
		},
		shadowCameraFar: {
			set: function (e) {
				console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e
			}
		},
		shadowCameraVisible: {
			set: function () {
				console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
			}
		},
		shadowBias: {
			set: function (e) {
				console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e
			}
		},
		shadowDarkness: {
			set: function () {
				console.warn("THREE.Light: .shadowDarkness has been removed.")
			}
		},
		shadowMapWidth: {
			set: function (e) {
				console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e
			}
		},
		shadowMapHeight: {
			set: function (e) {
				console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e
			}
		}
	}), Object.defineProperties(xn.prototype, {
		length: {
			get: function () {
				return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
			}
		},
		copyIndicesArray: function () {
			console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
		}
	}), Object.assign(On.prototype, {
		addIndex: function (e) {
			console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e)
		},
		addDrawCall: function (e, t, n) {
			void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t)
		},
		clearDrawCalls: function () {
			console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
		},
		computeTangents: function () {
			console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
		},
		computeOffsets: function () {
			console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
		}
	}), Object.defineProperties(On.prototype, {
		drawcalls: {
			get: function () {
				return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
			}
		},
		offsets: {
			get: function () {
				return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
			}
		}
	}), Object.assign(Ea.prototype, {
		getArrays: function () {
			console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
		},
		addShapeList: function () {
			console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
		},
		addShape: function () {
			console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
		}
	}), Object.defineProperties(Fs.prototype, {
		dynamic: {
			set: function () {
				console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
			}
		},
		onUpdate: {
			value: function () {
				return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
			}
		}
	}), Object.defineProperties(Un.prototype, {
		wrapAround: {
			get: function () {
				console.warn("THREE.Material: .wrapAround has been removed.")
			},
			set: function () {
				console.warn("THREE.Material: .wrapAround has been removed.")
			}
		},
		overdraw: {
			get: function () {
				console.warn("THREE.Material: .overdraw has been removed.")
			},
			set: function () {
				console.warn("THREE.Material: .overdraw has been removed.")
			}
		},
		wrapRGB: {
			get: function () {
				return console.warn("THREE.Material: .wrapRGB has been removed."), new sn
			}
		},
		shading: {
			get: function () {
				console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
			},
			set: function (e) {
				console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === e
			}
		}
	}), Object.defineProperties(Qa.prototype, {
		metal: {
			get: function () {
				return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
			},
			set: function () {
				console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
			}
		}
	}), Object.defineProperties(Bn.prototype, {
		derivatives: {
			get: function () {
				return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
			},
			set: function (e) {
				console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e
			}
		}
	}), Object.assign(di.prototype, {
		clearTarget: function (e, t, n, r) {
			console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(e), this.clear(t, n, r)
		},
		animate: function (e) {
			console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(e)
		},
		getCurrentRenderTarget: function () {
			return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
		},
		getMaxAnisotropy: function () {
			return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
		},
		getPrecision: function () {
			return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
		},
		resetGLState: function () {
			return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
		},
		supportsFloatTextures: function () {
			return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
		},
		supportsHalfFloatTextures: function () {
			return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
		},
		supportsStandardDerivatives: function () {
			return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
		},
		supportsCompressedTextureS3TC: function () {
			return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
		},
		supportsCompressedTexturePVRTC: function () {
			return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
		},
		supportsBlendMinMax: function () {
			return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
		},
		supportsVertexTextures: function () {
			return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
		},
		supportsInstancedArrays: function () {
			return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
		},
		enableScissorTest: function (e) {
			console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e)
		},
		initMaterial: function () {
			console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
		},
		addPrePlugin: function () {
			console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
		},
		addPostPlugin: function () {
			console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
		},
		updateShadowMap: function () {
			console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
		},
		setFaceCulling: function () {
			console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
		}
	}), Object.defineProperties(di.prototype, {
		shadowMapEnabled: {
			get: function () {
				return this.shadowMap.enabled
			},
			set: function (e) {
				console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e
			}
		},
		shadowMapType: {
			get: function () {
				return this.shadowMap.type
			},
			set: function (e) {
				console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e
			}
		},
		shadowMapCullFace: {
			get: function () {
				console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
			},
			set: function () {
				console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
			}
		}
	}), Object.defineProperties(ni.prototype, {
		cullFace: {
			get: function () {
				console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
			},
			set: function () {
				console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
			}
		},
		renderReverseSided: {
			get: function () {
				console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
			},
			set: function () {
				console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
			}
		},
		renderSingleSided: {
			get: function () {
				console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
			},
			set: function () {
				console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
			}
		}
	}), Object.defineProperties(Zt.prototype, {
		wrapS: {
			get: function () {
				return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
			},
			set: function (e) {
				console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e
			}
		},
		wrapT: {
			get: function () {
				return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
			},
			set: function (e) {
				console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e
			}
		},
		magFilter: {
			get: function () {
				return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
			},
			set: function (e) {
				console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e
			}
		},
		minFilter: {
			get: function () {
				return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
			},
			set: function (e) {
				console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e
			}
		},
		anisotropy: {
			get: function () {
				return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
			},
			set: function (e) {
				console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e
			}
		},
		offset: {
			get: function () {
				return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
			},
			set: function (e) {
				console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e
			}
		},
		repeat: {
			get: function () {
				return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
			},
			set: function (e) {
				console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e
			}
		},
		format: {
			get: function () {
				return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
			},
			set: function (e) {
				console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e
			}
		},
		type: {
			get: function () {
				return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
			},
			set: function (e) {
				console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e
			}
		},
		generateMipmaps: {
			get: function () {
				return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
			},
			set: function (e) {
				console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e
			}
		}
	}), Object.defineProperties(pi.prototype, {
		standing: {
			set: function () {
				console.warn("THREE.WebVRManager: .standing has been removed.")
			}
		},
		userHeight: {
			set: function () {
				console.warn("THREE.WebVRManager: .userHeight has been removed.")
			}
		}
	}), Ls.prototype.load = function (e) {
		console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
		var t = this;
		return (new Es).load(e, function (e) {
			t.setBuffer(e)
		}), this
	}, Os.prototype.getData = function () {
		return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
	}, Cs.prototype.updateCubeMap = function (e, t) {
		return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(e, t)
	};
	qt.crossOrigin = void 0, qt.loadTexture = function (e, t, n, r) {
		console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
		var i = new Po;
		i.setCrossOrigin(this.crossOrigin);
		var a = i.load(e, n, void 0, r);
		return t && (a.mapping = t), a
	}, qt.loadTextureCube = function (e, t, n, r) {
		console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
		var i = new Ao;
		i.setCrossOrigin(this.crossOrigin);
		var a = i.load(e, n, void 0, r);
		return t && (a.mapping = t), a
	}, qt.loadCompressedTexture = function () {
		console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
	}, qt.loadCompressedTextureCube = function () {
		console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
	};
	n(20);
	var dl = ["UXD", "AUDIO", "VISUAL", "C.V.", "DEV", "P.R."],
		fl = function (e) {
			for (var t = new ii, n = new ii, r = new yn, i = 0; i < dl.length; i++) {
				var a = new yn,
					o = document.createElement("canvas");
				o.width = 1024, o.height = 1024;
				var s = o.getContext("2d");
				s.fillStyle = "#000000", s.textAlign = "left", s.font = "normal 195px Cutive Mono, monospace", s.fillText(dl[i], 256, 1024 / 3);
				var l = new Yt(o);
				l.needsUpdate = !0;
				var c = new Vt;
				c.x = 1.2 * Ft.randFloatSpread(20), c.y = Ft.randFloatSpread(20) + 10, c.z = 1.2 * Ft.randFloatSpread(20), a.vertices.push(c), r.vertices.push(c);
				var u = new Pi({
						size: 10,
						map: l,
						depthTest: !1,
						transparent: !0
					}),
					h = new Li(a, new Pi({
						size: 1.4,
						color: 0,
						depthTest: !0,
						transparent: !0
					})),
					p = new Li(a, u);
				switch (i) {
					case i:
						h.name = dl[i]
				}
				p.add(h), n.add(p)
			}
			t.add(n);
			var d = new Ai(r, new Ti({
				color: 0,
				depthTest: !0,
				opacity: .2,
				transparent: !0
			}));
			return t.add(d), e.add(t), {
				update: function (e) {
					t.rotation.y += .005 * Math.random()
				}
			}
		},
		ml = function (e) {
			var t = new is("#4CAF50", 30),
				n = new is("#2196F3", 10);
			n.position.set(40, 20, 40), e.add(t), e.add(n);
			var r = 80;
			return {
				update: function (e) {
					var t = r * Math.sin(.2 * e);
					n.position.x = t
				}
			}
		},
		vl = function (e) {
			var t, n = [],
				r = [],
				i = new Vs,
				a = new jt,
				o = new As,
				s = new Vt(0, 0, 0),
				l = {
					width: e.width,
					height: e.height
				},
				c = {
					x: 0,
					y: 0
				},
				u = function () {
					var e = new vi;
					return e.background = new sn("#FFF"), e
				}(),
				h = function (t) {
					var n = t.width,
						r = t.height,
						i = new di({
							canvas: e,
							antialias: !0,
							alpha: !0
						}),
						a = window.devicePixelRatio ? window.devicePixelRatio : 1;
					return i.setPixelRatio(a), i.setSize(n, r), i.gammaInput = !0, i.gammaOutput = !0, i
				}(l),
				p = function (e) {
					var t = e.width,
						n = e.height,
						r = new oi(40, t / n, 20, 1e3);
					return r.position.z = 80, r
				}(l),
				d = function (e) {
					for (var t = [new ml(e), new fl(e)], r = 0; r < dl.length; r++) n.push(e.children[2].children[0].children[r].children[0]);
					return t
				}(u);
			return {
				update: function () {
					for (var e = o.getElapsedTime(), t = 0; t < d.length; t++) d[t].update(e);
					p.position.x += 1.2 * (10 * c.x - 1 * p.position.x), p.position.y += 1.3 * (-10 * c.y - 1 * p.position.y), p.lookAt(s), h.render(u, p)
				},
				onWindowResize: function () {
					var t = e.width,
						n = e.height;
					l.width = t, l.height = n, p.aspect = t / n, p.updateProjectionMatrix(), h.setSize(t, n)
				},
				onMouseMove: function (e, o) {
					c.x = e / l.width, c.y = o / l.height, a.x = 2 * c.x - 1, a.y = 2 * -c.y + 1, i.setFromCamera(a, p), (r = i.intersectObjects(n)).length > 0 ? t != r[0].object && (t && t.material.color.setHex(t.currentHex), (t = r[0].object).currentHex = t.material.color.getHex(), t.material.color.setHex(16392738)) : (t && t.material.color.setHex(t.currentHex), t = null)
				},
				onMouseClick: function (e) {
					r.length > 0 && $l.fire(r[0].object.name)
				}
			}
		};

	function gl(e) {
		return (gl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function yl(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}

	function xl(e, t) {
		return !t || "object" !== gl(t) && "function" != typeof t ? function (e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function bl(e) {
		return (bl = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function wl(e, t) {
		return (wl = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}
	var _l = s.a.div.withConfig({
			displayName: "canvas__Diver",
			componentId: "fimg30-0"
		})(["position:absolute;height:100vh;width:100vw;z-index:0;"]),
		Ml = function (e) {
			function t() {
				return function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t), xl(this, bl(t).apply(this, arguments))
			}
			return function (e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && wl(e, t)
				}(t, i.a.Component),
				function (e, t, n) {
					t && yl(e.prototype, t), n && yl(e, n)
				}(t, [{
					key: "componentDidMount",
					value: function () {
						! function (e) {
							var t = function (e, t) {
									var n = e.createElement("canvas");
									return t.appendChild(n), n
								}(document, e),
								n = new vl(t);

							function r() {
								t.style.width = "100%", t.style.height = "100%", t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.width = t.offsetWidth, t.height = t.offsetHeight, n.onWindowResize()
							}

							function i(e) {
								var t = e.clientX,
									r = e.clientY;
								n.onMouseMove(t, r)
							}

							function a(e) {
								n.onMouseClick(e)
							}
							window.onresize = r, window.onmousemove = i, window.onclick = a, r(),
								function e(t) {
									requestAnimationFrame(e), n.update()
								}()
						}(this.threeRootElement)
					}
				}, {
					key: "render",
					value: function () {
						var e = this;
						return i.a.createElement(_l, {
							ref: function (t) {
								return e.threeRootElement = t
							}
						})
					}
				}]), t
		}();

	function Sl(e) {
		return (Sl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function Tl(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}

	function El(e, t) {
		return !t || "object" !== Sl(t) && "function" != typeof t ? function (e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function Cl(e) {
		return (Cl = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function Al(e, t) {
		return (Al = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}
	var Pl = n(22),
		Ll = s.a.div.withConfig({
			displayName: "banner__TextField",
			componentId: "sc-6f3xf6-0"
		})(["grid-row:2/2;grid-column:1/2;z-index:1;text-align:left;padding-right:10px;padding-left:10px;overflow:scroll;@media (max-width:110vh){grid-column:1/4;}"]),
		Rl = s.a.ul.withConfig({
			displayName: "banner__TextList",
			componentId: "sc-6f3xf6-1"
		})(["list-style:none;"]),
		Ol = s.a.h1.withConfig({
			displayName: "banner__Header",
			componentId: "sc-6f3xf6-2"
		})(["font-family:'Questrial',sans-serif;font-weight:normal;font-size:3em;"]),
		kl = s.a.li.withConfig({
			displayName: "banner__Pgraph",
			componentId: "sc-6f3xf6-3"
		})(["font-family:'Questrial',sans-serif;line-height:1.5em;text-align:left;"]),
		Il = function (e) {
			function t(e) {
				var n;
				return function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t), (n = El(this, Cl(t).call(this, e))).state = {
					textContent: Pl.Default.text,
					textContent1: Pl.Default.head
				}, n
			}
			return function (e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && Al(e, t)
				}(t, i.a.Component),
				function (e, t, n) {
					t && Tl(e.prototype, t), n && Tl(e, n)
				}(t, [{
					key: "componentWillMount",
					value: function () {
						$l.subscribe(dl[0], this.displayOne.bind(this)), $l.subscribe(dl[1], this.displayTwo.bind(this)), $l.subscribe(dl[2], this.displayThree.bind(this)), $l.subscribe(dl[3], this.displayFour.bind(this)), $l.subscribe(dl[4], this.displayFive.bind(this)), $l.subscribe(dl[5], this.displaySix.bind(this))
					}
				}, {
					key: "displayOne",
					value: function () {
						this.setState({
							textContent: Pl.Banner1.text,
							textContent1: Pl.Banner1.head
						})
					}
				}, {
					key: "displayTwo",
					value: function () {
						this.setState({
							textContent: Pl.Banner2.text,
							textContent1: Pl.Banner2.head
						})
					}
				}, {
					key: "displayThree",
					value: function () {
						this.setState({
							textContent: Pl.Banner3.text,
							textContent1: Pl.Banner3.head
						})
					}
				}, {
					key: "displayFour",
					value: function () {
						this.setState({
							textContent: Pl.Banner4.text,
							textContent1: Pl.Banner4.head
						})
					}
				}, {
					key: "displayFive",
					value: function () {
						this.setState({
							textContent: Pl.Banner5.text,
							textContent1: Pl.Banner5.head
						})
					}
				}, {
					key: "displaySix",
					value: function () {
						this.setState({
							textContent: Pl.Banner6.text,
							textContent1: Pl.Banner6.head
						})
					}
				}, {
					key: "render",
					value: function () {
						var e = this.state.textContent,
							t = this.state.textContent1;
						return i.a.createElement(Ll, null, i.a.createElement(Ol, null, t), i.a.createElement(Rl, null, e.split("/n").map(function (e, t) {
							return i.a.createElement(kl, {
								key: t
							}, e)
						})))
					}
				}]), t
		}();

	function Nl(e) {
		return (Nl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function Dl(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}

	function zl(e, t) {
		return !t || "object" !== Nl(t) && "function" != typeof t ? function (e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function Ul(e) {
		return (Ul = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function Bl(e, t) {
		return (Bl = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}
	var Fl = s.a.div.withConfig({
			displayName: "footer__Foot",
			componentId: "extjse-0"
		})(["position:fixed;bottom:0;height:25px;width:100%;grid-column:1/5;background-color:black;z-index:2;margin-left:-10px;text-align:center;opacity:.7;"]),
		jl = s.a.a.withConfig({
			displayName: "footer__SocialLink",
			componentId: "extjse-1"
		})(["color:white;text-decoration:none;font-family:'Cutive Mono';margin-left:10%;"]),
		Hl = s.a.span.withConfig({
			displayName: "footer__CP",
			componentId: "extjse-2"
		})(["position:absolute;font-size:.7em;color:white;text-decoration:none;font-family:'Cutive Mono';right:10px;bottom:5px;"]),
		Gl = function (e) {
			function t() {
				return function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t), zl(this, Ul(t).apply(this, arguments))
			}
			return function (e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && Bl(e, t)
				}(t, i.a.Component),
				function (e, t, n) {
					t && Dl(e.prototype, t), n && Dl(e, n)
				}(t, [{
					key: "render",
					value: function () {
						return i.a.createElement(Fl, null, i.a.createElement(jl, {
							href: "https://www.soundcloud.com/spreadpando"
						}, "soundcloud"), i.a.createElement(jl, {
							href: "https://www.github.com/spreadpando"
						}, "github"), i.a.createElement(jl, {
							href: "https://www.instagram.com/spreadpando"
						}, "instagram"), i.a.createElement(jl, {
							href: "https://www.facebook.com/spreadpando"
						}, "facebook"), i.a.createElement(Hl, null, " © Pando Systems Design"))
					}
				}]), t
		}();

	function Vl(e) {
		return (Vl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		})(e)
	}

	function Wl(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
		}
	}

	function ql(e, t) {
		return !t || "object" !== Vl(t) && "function" != typeof t ? function (e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}(e) : t
	}

	function Xl(e) {
		return (Xl = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
			return e.__proto__ || Object.getPrototypeOf(e)
		})(e)
	}

	function Yl(e, t) {
		return (Yl = Object.setPrototypeOf || function (e, t) {
			return e.__proto__ = t, e
		})(e, t)
	}
	var Jl = s.a.div.withConfig({
			displayName: "app__AppGlobal",
			componentId: "ybjsd-0"
		})(["position:absolute;height:100vh;width:100vw;display:grid;grid-template-columns:40% 30% 20% 10%;grid-template-rows:55% 40% 5%;"]),
		Zl = function (e) {
			function t() {
				return function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t), ql(this, Xl(t).apply(this, arguments))
			}
			return function (e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && Yl(e, t)
				}(t, i.a.Component),
				function (e, t, n) {
					t && Wl(e.prototype, t), n && Wl(e, n)
				}(t, [{
					key: "render",
					value: function () {
						return i.a.createElement(Jl, null, i.a.createElement(w, null), i.a.createElement(Ml, null), i.a.createElement(Il, null), i.a.createElement(Gl, null))
					}
				}]), t
		}();
	n.d(t, "EventBus", function () {
		return $l
	});
	var $l = function () {
		var e = [],
			t = {
				subscribe: function (t, i) {
					var a = n(t);
					a ? a.callbacks.push(i) : e.push(new r(t, i))
				},
				fire: function (e, t) {
					var r = n(e);
					r ? r.callbacks.forEach(function (e) {
						e(t)
					}) : console.log("Error, no listeners for ", e, ", event!")
				}
			},
			n = function (t) {
				return e.find(function (e) {
					return e.eventType === t
				})
			},
			r = function (e, t) {
				this.eventType = e, this.callbacks = [t]
			};
		return t
	}();
	o.a.render(i.a.createElement(Zl, null), document.getElementById("root"))
}]);