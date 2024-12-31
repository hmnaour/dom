(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() { return t(1178) }])
        },
        1178: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, { __N_SSG: function() { return Me }, default: function() { return Ee } });
            var r = t(5893),
                i = t(9815),
                o = t(7294),
                a = t(7568),
                u = t(4051),
                s = t.n(u),
                l = t(1438),
                c = t(8029),
                d = t(6567),
                h = new(function(e) {
                    (0, c.Z)(t, e);
                    var n = (0, d.Z)(t);

                    function t() { var e; return (0, l.Z)(this, t), (e = n.call(this, "pipTracker")).version(1).stores({ snapshotRecords: "++id,imageData,boundingBoxProps,imageWidth,imageHeight" }), e }
                    return t
                }(t(9520).default)),
                f = t(1039),
                p = (0, o.createContext)(null),
                v = function() {
                    var e = (0, a.Z)(s().mark((function e(n) {
                        var t;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = n.boundingBoxProps.reduce((function(e, n) { return e + n.pipValue }), 0), void 0 !== n.id) { e.next = 6; break }
                                    return e.next = 4, h.snapshotRecords.add({ boundingBoxProps: JSON.stringify(n.boundingBoxProps), imageHeight: n.imageHeight, imageWidth: n.imageWidth, imageData: n.imageData, total: t });
                                case 4:
                                    e.next = 8;
                                    break;
                                case 6:
                                    return e.next = 8, h.snapshotRecords.update(n.id, { boundingBoxProps: JSON.stringify(n.boundingBoxProps), total: t });
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) { return e.apply(this, arguments) }
                }(),
                g = function(e) {
                    var n = (0, o.useState)(null),
                        t = n[0],
                        i = n[1],
                        a = (0, f.useLiveQuery)((function() { return h.snapshotRecords.toArray() })),
                        u = (null === a || void 0 === a ? void 0 : a.map((function(e) { return { boundingBoxProps: JSON.parse(e.boundingBoxProps), imageData: e.imageData, imageHeight: e.imageHeight, imageWidth: e.imageWidth, total: e.total, id: e.id } }))) || [];
                    return (0, r.jsx)(p.Provider, { value: { activeSnapshot: t, setActiveSnapshot: function(e) { i(e) }, allImages: u, loading: null == a }, children: e.children })
                },
                x = t(4970),
                m = t.n(x),
                b = t(3946),
                j = t(7036),
                Z = t(8237),
                w = t(7711),
                y = t(5125),
                S = new(t(1545).Q);
            S.load();
            var P = t(1799),
                k = t(828),
                C = t(657),
                M = t(6514),
                E = t(4776),
                H = t(7918),
                B = t(6447),
                W = t(9653),
                T = t(5683),
                _ = t(4373),
                D = t(5578),
                N = o.forwardRef((function(e, n) { return (0, r.jsx)(E.Z, (0, P.Z)({ direction: "down", ref: n }, e)) }));

            function R(e) {
                var n = e.livePreview,
                    t = void 0 === n || n,
                    i = e.onPreviewChange,
                    a = e.debug,
                    u = void 0 !== a && a,
                    s = e.onDebugChange,
                    l = (0, k.Z)(o.useState(!1), 2),
                    c = l[0],
                    d = l[1],
                    h = (0, k.Z)(o.useState(t), 2),
                    f = h[0],
                    p = h[1],
                    v = (0, k.Z)(o.useState(u), 2),
                    g = v[0],
                    x = v[1],
                    m = function() { d(!1) };
                return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(H.Z, { label: (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(T.Z, {}), c ? (0, r.jsx)(_.Z, {}) : (0, r.jsx)(D.Z, {})] }), onClick: c ? m : function() { d(!0) }, sx: { position: "absolute", zIndex: 99, color: j.Z[200], right: "12px", top: "20px" } }), (0, r.jsx)(C.Z, { open: c, TransitionComponent: N, keepMounted: !0, onClose: m, "aria-describedby": "alert-dialog-slide-description", children: (0, r.jsx)(M.Z, { children: (0, r.jsxs)(B.Z, { children: [(0, r.jsxs)(B.Z, { direction: "row", justifyContent: "space-between", alignItems: "flex-start", spacing: 10, children: [(0, r.jsx)("div", { children: "Live Preview" }), (0, r.jsx)(W.Z, { checked: f, onChange: function(e) { i(e), p(e.target.checked) } })] }), (0, r.jsxs)(B.Z, { direction: "row", justifyContent: "space-between", alignItems: "flex-start", spacing: 10, children: [(0, r.jsx)("div", { children: "Debug Mode" }), (0, r.jsx)(W.Z, { checked: g, onChange: function(e) { s(e), x(e.target.checked) } })] }), (0, r.jsxs)(B.Z, { direction: "row", justifyContent: "space-between", alignItems: "flex-start", spacing: 8, children: [(0, r.jsx)("div", { children: "Detection Speed" }), (0, r.jsx)("div", { children: "Coming soon" })] })] }) }) })] })
            }
            var I = function(e) {
                    var n = e.setMode,
                        t = e.goBack,
                        i = (0, o.useRef)(null),
                        u = (0, o.useRef)(null),
                        l = (0, o.useContext)(p).setActiveSnapshot,
                        c = 0,
                        d = null,
                        h = (0, o.useRef)(!1),
                        f = (0, o.useRef)(!0),
                        v = null,
                        g = null,
                        x = !1,
                        P = null,
                        k = function() {
                            var e = (0, a.Z)(s().mark((function e() {
                                var n, t, r, o, a;
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("undefined" === typeof i.current || null === i.current || null === i.current.video || 4 !== i.current.video.readyState || null === u.current || null === P || x) { e.next = 13; break }
                                            return x = !0, t = i.current.video, u.current.width !== t.offsetWidth && u.current.height !== t.offsetHeight && (u.current.width = t.offsetWidth, u.current.height = t.offsetHeight), r = new Date, e.next = 8, S.predictAndGetResults(C(t), .65, t.offsetHeight, t.offsetWidth);
                                        case 8:
                                            o = e.sent, c < 10 ? c++ : d = d ? (d + (new Date).getTime() - r.getTime()) / 2 : (new Date).getTime() - r.getTime(), a = null === (n = u.current) || void 0 === n ? void 0 : n.getContext("2d"), requestAnimationFrame((function() {
                                                if (a) {
                                                    a.clearRect(0, 0, t.offsetWidth, t.offsetHeight), (0, y.M)(o, a, { debug: h.current }), a.font = "12px sans-serif", a.fillStyle = "white";
                                                    var e = h.current && d ? " - FPS: " + Math.round(1 / (d / 1e3)) : "";
                                                    a.fillText("Total - " + o.reduce((function(e, n) { return e + n.pipValue }), 0) + e, 0, t.offsetHeight - 14)
                                                }
                                            })), x = !1;
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }(),
                        C = function(e) {
                            if (!e) return null;
                            if (!e.videoHeight) return null;
                            var n = Math.floor(e.offsetHeight / (e.videoHeight / e.videoWidth)),
                                t = Math.floor((n - e.offsetWidth) / 2),
                                r = e.videoWidth / n * e.offsetWidth,
                                i = e.videoWidth / n * t;
                            if (!v) {
                                var o = e.videoWidth,
                                    a = e.videoHeight,
                                    u = o / a;
                                a = (o = e.clientWidth) / u, (g = document.createElement("canvas")).width = r, g.height = e.videoHeight, v = g.getContext("2d")
                            }
                            return v && g && (v.imageSmoothingEnabled = !0, v.drawImage(e, Math.floor(i), 0, Math.floor(r), e.videoHeight, 0, 0, r, e.videoHeight)), g
                        };
                    (0, o.useEffect)((function() {
                        var e = setInterval((0, a.Z)(s().mark((function e() {
                            var n, t;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 3, S.load();
                                    case 3:
                                        P = e.sent, f.current ? k() : (null === (n = i.current) || void 0 === n ? void 0 : n.video) && u.current && (null === (t = u.current.getContext("2d")) || void 0 === t || t.clearRect(0, 0, i.current.video.offsetWidth, i.current.video.offsetHeight));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), 16);
                        return function() { window.clearInterval(e) }
                    }), []);
                    var M = function() {
                        var e = (0, a.Z)(s().mark((function e() {
                            var t, r, o;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = i.current.video, r = C(t), e.next = 4, S.predictAndGetResults(r, .65, t.offsetHeight, t.offsetWidth);
                                    case 4:
                                        o = e.sent, gtag && gtag("event", "FPS", { event_label: Math.floor(d || 0).toFixed(2), event_category: "Capture" }), l({ imageData: r.toDataURL("image/jpeg"), boundingBoxProps: o.sort((function(e, n) { return e.xmin - n.xmin })), imageWidth: t.offsetWidth, imageHeight: t.offsetHeight }), n(1);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() { return e.apply(this, arguments) }
                    }();
                    return (0, r.jsxs)("div", { id: "container", children: [(0, r.jsxs)("div", { id: "vid_container", children: [(0, r.jsx)(b.Z, { onClick: function() { return t() }, sx: { position: "absolute", zIndex: 99, color: j.Z[200], left: "12px", top: "12px" }, children: (0, r.jsx)(Z.Z, { fontSize: "large" }) }), (0, r.jsx)(R, { onPreviewChange: function(e) { f.current = e.target.checked }, onDebugChange: function(e) { h.current = e.target.checked }, livePreview: f.current, debug: h.current }), (0, r.jsx)(m(), { ref: i, muted: !0, id: "video", audio: !1, videoConstraints: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 1280 } } }), (0, r.jsx)("canvas", { ref: u, id: "video_overlay" })] }), (0, r.jsx)("div", { id: "gui_controls", children: (0, r.jsx)(b.Z, { size: "large", id: "take_photo", onClick: M, children: (0, r.jsx)(w.Z, { fontSize: "inherit" }) }) })] })
                },
                V = t(6886),
                L = t(1703),
                z = t(44),
                O = t(3321),
                A = t(983),
                U = t(3298),
                X = t(1797),
                F = t(7645),
                G = t(4054),
                Y = t(315),
                Q = t(5819),
                q = t(1425);
            var J = function(e) {
                var n = e.open,
                    t = e.onClose,
                    i = e.onCancel,
                    a = e.onComplete,
                    u = e.value,
                    s = (0, o.useState)(null),
                    l = s[0],
                    c = s[1];
                return (0, o.useEffect)((function() { c(u) }), [u]), (0, r.jsxs)(C.Z, { open: n, onClose: t, maxWidth: "xs", sx: { "& .MuiDialog-paper": { width: "80%" } }, children: [(0, r.jsx)(F.Z, { children: "Edit selection" }), (0, r.jsx)(G.Z, { children: (0, r.jsx)(Y.Z, { value: null !== l && void 0 !== l ? l : "", onChange: function(e) { c(Number(e.target.value)) }, children: Object.keys(S.labelMap).map((function(e) { return (0, r.jsx)(Q.Z, { value: e, children: S.labelMap[e].displayValue }) })) }) }), (0, r.jsxs)(q.Z, { children: [(0, r.jsx)(O.Z, { disableElevation: !0, onClick: i, children: "Cancel" }), (0, r.jsx)(O.Z, { disableElevation: !0, onClick: function() { a(l) }, children: "OK" })] })] })
            };
            var K = function(e) {
                    var n = e.setMode,
                        t = e.goBack,
                        i = (0, o.useRef)(null),
                        u = (0, o.useState)(0),
                        l = u[0],
                        c = u[1],
                        d = (0, o.useReducer)((function(e) { return e + 1 }), 0),
                        h = (d[0], d[1]),
                        f = (0, o.useState)(null),
                        g = f[0],
                        x = f[1],
                        m = (0, o.useContext)(p).activeSnapshot;
                    if (!m) throw new Error("Cannot render without an active snapshot");
                    var w = m.boundingBoxProps.reduce((function(e, n) { return e + n.pipValue }), 0),
                        P = m.boundingBoxProps.reduce((function(e, n) { return { allHeight: e.allHeight + (n.ymax - n.ymin), allWidth: e.allWidth + (n.xmax - n.xmin) } }), { allHeight: 0, allWidth: 0 }),
                        k = P.allWidth / m.boundingBoxProps.length,
                        C = P.allHeight / m.boundingBoxProps.length;
                    (0, o.useEffect)((function() {
                        if (null !== i.current) {
                            var e = i.current.getContext("2d");
                            null === e || void 0 === e || e.clearRect(0, 0, m.imageWidth, m.imageHeight), (0, y.M)(m.boundingBoxProps, e, { highlightIndex: l }), i.current.addEventListener("touchstart", M)
                        }
                        return function() { null !== i.current && i.current.removeEventListener("touchstart", M) }
                    }));
                    var M = function(e) {
                            if (1 === e.targetTouches.length) {
                                var n = e.targetTouches[0],
                                    t = m.boundingBoxProps.findIndex((function(e) { return e.xmin <= n.clientX && e.xmax >= n.clientX && e.ymin <= n.clientY && e.ymax >= n.clientY }));
                                if (t >= 0) c(t);
                                else {
                                    var r = Math.round(n.clientX - k / 2),
                                        i = Math.round(n.clientY - C / 2);
                                    x([{ class: "1", classIndex: 0, pipValue: 0, xmin: r, xmax: r + k, ymin: i, ymax: i + C, predictedLabel: "None" }, -1])
                                }
                            }
                        },
                        E = function() {
                            var e = (0, a.Z)(s().mark((function e() {
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, v(m);
                                        case 2:
                                            n(2);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return (0, r.jsxs)("div", { id: "container", children: [(0, r.jsx)(b.Z, { onClick: function() { return t() }, sx: { position: "absolute", zIndex: 99, color: j.Z[200], left: "12px", top: "12px" }, children: (0, r.jsx)(Z.Z, { fontSize: "large" }) }), (0, r.jsxs)("div", { id: "vid_container", children: [(0, r.jsx)("img", { src: m.imageData, style: { height: "100%", width: "100%" } }), (0, r.jsx)("canvas", { id: "video_overlay", ref: i, height: m.imageHeight, width: m.imageWidth })] }), (0, r.jsx)("div", { id: "gui_controls", children: (0, r.jsxs)(V.ZP, { container: !0, direction: "column", justifyContent: "space-between", alignItems: "flex-start", margin: 0, height: "100%", children: [(0, r.jsx)(V.ZP, { item: !0, width: "100%", children: (0, r.jsx)(L.Z, { value: l, onChange: function(e, n) { c(n) }, variant: "scrollable", scrollButtons: "auto", children: m.boundingBoxProps.map((function(e) { return (0, r.jsx)(z.Z, { label: e.pipValue, disableRipple: !0 }) })) }) }), (0, r.jsxs)(V.ZP, { container: !0, item: !0, columnSpacing: 3, direction: "row", justifyContent: "space-around", alignItems: "center", marginBottom: "20px", children: [(0, r.jsx)(V.ZP, { item: !0, children: (0, r.jsx)(O.Z, { variant: "contained", startIcon: (0, r.jsx)(A.Z, {}), color: "success", onClick: E, children: w }) }), m.boundingBoxProps && m.boundingBoxProps.length > 0 && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(V.ZP, { item: !0, children: (0, r.jsx)(O.Z, { variant: "contained", startIcon: (0, r.jsx)(U.Z, {}), color: "error", onClick: function() { m.boundingBoxProps.splice(l, 1), 0 === l ? h() : c(l - 1) }, children: "Remove" }) }), (0, r.jsx)(V.ZP, { item: !0, children: (0, r.jsx)(O.Z, { variant: "contained", startIcon: (0, r.jsx)(X.Z, {}), color: "info", onClick: function() { x([m.boundingBoxProps[l], l]) }, children: m.boundingBoxProps[l].pipValue.toString().padStart(2, "\xa0") }) })] })] })] }) }), (0, r.jsx)(J, { open: null !== g, onClose: function() {}, onCancel: function() { x(null) }, onComplete: function(e) { g[0].classIndex = e, g[0].pipValue = S.labelMap[e].displayValue, g[0].class = S.labelMap[e].name, -1 === g[1] && (m.boundingBoxProps.push(g[0]), c(m.boundingBoxProps.length - 1)), x(null) }, value: null !== g && g.length > 0 ? g[0].classIndex : null })] })
                },
                $ = t(9396),
                ee = t(6278),
                ne = t(5123),
                te = t(7003),
                re = t(7152),
                ie = t(7322),
                oe = t(5861),
                ae = t(5450),
                ue = t(9007),
                se = t(9225),
                le = t(2293),
                ce = t(155),
                de = t(8032),
                he = t(1873),
                fe = t(122),
                pe = t(6214),
                ve = t(8206),
                ge = t(1737),
                xe = t(6949),
                me = t(1458),
                be = t(5418),
                je = t(9534),
                Ze = t(8078),
                we = function(e) {
                    var n = e.loadingHeight,
                        t = e.loadingWidth,
                        i = (0, je.Z)(e, ["loadingHeight", "loadingWidth"]),
                        a = (0, o.useState)(null),
                        u = a[0],
                        s = a[1];
                    return (0, o.useEffect)((function() {
                        if (s(null), i.src) {
                            var e = function() { s(i.src) },
                                n = new Image;
                            return n.addEventListener("load", e), n.src = i.src,
                                function() { n.removeEventListener("load", e) }
                        }
                    }), [i.src]), u === i.src ? (0, r.jsx)("img", (0, P.Z)({}, i)) : (0, r.jsx)(Ze.Z, { sx: { bgcolor: "grey.900" }, variant: "rectangular", width: t, height: n })
                },
                ye = function(e) {
                    (function(e) { return "touches" in e })(e) && e.touches.length < 2 && e.preventDefault && e.cancelable && e.preventDefault()
                },
                Se = function(e, n, t, r) {
                    var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                        a = i.shouldPreventDefault,
                        u = void 0 === a || a,
                        s = i.delay,
                        l = void 0 === s ? 300 : s,
                        c = (0, o.useState)(!1),
                        d = c[0],
                        h = c[1],
                        f = (0, o.useState)(!1),
                        p = f[0],
                        v = f[1],
                        g = (0, o.useRef)(),
                        x = (0, o.useRef)(),
                        m = (0, o.useCallback)((function(n) { u && n.currentTarget && (n.currentTarget.addEventListener("touchend", ye, { passive: !1 }), x.current = n.currentTarget), g.current = setTimeout((function() { n.currentTarget = x.current, e(n), h(!0) }), l), v(!1) }), [e, l, u]),
                        b = (0, o.useCallback)((function(e) {
                            var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            g.current && clearTimeout(g.current), r && !d && !p && t(e), r && d && n(), h(!1), u && x.current && x.current.removeEventListener("touchend", ye)
                        }), [u, t, d]);
                    return { onMouseDown: function(e) { return m(e) }, onTouchStart: function(e) { return m(e) }, onMouseUp: function(e) { return b(e) }, onMouseLeave: function(e) { return b(e, !1) }, onTouchEnd: function(e) { return b(e) }, onTouchCancel: function(e) { return b(e, !1) }, onTouchMove: function(e) { d || (v(!0), b(e, !1)), r(e) } }
                },
                Pe = function(e) {
                    var n;
                    ! function(e) { e[e.NONE = 0] = "NONE", e[e.UP = 1] = "UP", e[e.DOWN = 2] = "DOWN" }(n || (n = {}));
                    var t = (0, o.useRef)(n.NONE),
                        r = (0, o.useRef)(!1),
                        i = (0, o.useRef)(),
                        a = (0, o.useRef)(),
                        u = function() {
                            if (r.current && null !== e.current) {
                                var o = e.current.scrollTop,
                                    a = o;
                                t.current === n.UP ? a -= 5 : t.current === n.DOWN && (a += 5), a !== o && (e.current.scrollTop = a, i.current = window.setTimeout(u, 10))
                            }
                        },
                        s = function(e) {
                            if (r.current) {
                                var i = Math.floor(.8 * window.innerHeight),
                                    o = Math.floor(.2 * window.innerHeight),
                                    a = e.touches.item(0).clientY;
                                e.cancelable && e.preventDefault(), a >= i && t.current !== n.DOWN ? (t.current = n.DOWN, u()) : a <= o && t.current !== n.UP ? (t.current = n.UP, u()) : a < i && a > o && t.current !== n.NONE && (t.current = n.NONE)
                            }
                        };
                    (0, o.useEffect)((function() {
                        return window.addEventListener("touchmove", s, { passive: !1 }), window.addEventListener("touchend", (function() { l(!1) })),
                            function() { window.removeEventListener("touchmove", s) }
                    }), []);
                    var l = function(e) { r.current = e, r.current ? (document.body.style.overflowX = "hidden", document.documentElement.style.overflowX = "hidden", document.body.style.position = "relative", document.documentElement.style.position = "relative", a.current = void 0) : (document.body.style.overflowX = "", document.body.style.position = "", document.documentElement.style.overflowX = "", document.documentElement.style.position = "") };
                    return { setShouldHandle: l }
                };
            var ke = function(e) {
                var n = e.setMode,
                    t = (0, o.useState)(null),
                    i = t[0],
                    u = t[1],
                    l = (0, o.useState)(!1),
                    c = l[0],
                    d = l[1],
                    f = (0, o.useState)(null),
                    v = f[0],
                    g = f[1],
                    x = (0, o.useContext)(p),
                    m = x.setActiveSnapshot,
                    Z = x.allImages,
                    w = x.loading,
                    y = (0, o.useState)(!1),
                    S = y[0],
                    C = y[1],
                    M = (0, o.useState)(null),
                    E = M[0],
                    H = M[1],
                    B = (0, o.useState)(null),
                    W = B[0],
                    T = B[1],
                    _ = (0, o.useState)(new Set),
                    D = _[0],
                    N = _[1],
                    R = (0, o.useRef)(null),
                    I = Pe(R).setShouldHandle;
                (0, o.useEffect)((function() {
                    (null === document || void 0 === document ? void 0 : document.documentElement) && document.documentElement !== R.current && (R.current = document.documentElement)
                }), []);
                var V, L = Z.reduce((function(e, n) { return e + n.total }), 0),
                    z = Boolean(i),
                    O = function() {
                        var e = (0, a.Z)(s().mark((function e() {
                            var n, t, r, i, o;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (0 !== Z.length) { e.next = 2; break }
                                        return e.abrupt("return");
                                    case 2:
                                        return u(null), d(!0), g(null), e.prev = 5, n = Z.map((function(e) {
                                            var n = e.imageHeight,
                                                t = e.imageWidth,
                                                r = e.imageData,
                                                i = e.boundingBoxProps,
                                                o = (0, k.Z)(r.split(";base64,"), 2),
                                                a = o[0],
                                                u = o[1],
                                                s = a.split(":")[1];
                                            return JSON.stringify({
                                                imageData: u,
                                                mediaType: s,
                                                imageWidth: t,
                                                imageHeight: n,
                                                boundingBoxProps: i.map((function(e) {
                                                    var n = e.xmax,
                                                        t = e.xmin,
                                                        r = e.ymax,
                                                        i = e.ymin,
                                                        o = e.class,
                                                        a = e.predictedLabel,
                                                        u = e.score;
                                                    return { xmax: n, xmin: t, ymax: r, ymin: i, label: o, predictedLabel: a, predictionScore: void 0 === u ? 0 : u }
                                                }))
                                            })
                                        })), t = new URLSearchParams(window.location.search), r = t.get("code"), e.next = 11, Promise.all(n.map((function(e) { return fetch("https://uploader-api-eeoexn3tza-uc.a.run.app/snapshot", { method: "POST", body: e, headers: { Authorization: "Bearer ".concat(r), "Content-Type": "application/json" } }) })));
                                    case 11:
                                        i = e.sent, (o = i.filter((function(e) { return e.status > 299 }))).length > 0 ? g({ count: o.length, success: !1 }) : g({ count: i.length, success: !0 });
                                    case 14:
                                        return e.prev = 14, d(!1), e.finish(14);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [5, , 14, 17]
                            ])
                        })));
                        return function() { return e.apply(this, arguments) }
                    }(),
                    A = Se((function(e) {
                        var n;
                        e.currentTarget && (C(!0), H(Number.parseInt(e.currentTarget.value)), T(Number.parseInt(e.currentTarget.value)), null === document || void 0 === document || null === (n = document.documentElement) || void 0 === n || n.classList.add("no_scoll_overflow"), I(!0))
                    }), (function() {
                        var e;
                        if (S && null !== W && null !== E) {
                            C(!1);
                            var n = Math.min(E, W),
                                t = Math.max(E, W) + 1;
                            N(new Set(Array.from(Array(t - n).keys(), (function(e) { return e + n })))), null === document || void 0 === document || null === (e = document.documentElement) || void 0 === e || e.classList.remove("no_scoll_overflow"), I(!1)
                        }
                    }), (function(e) {
                        var t = Number.parseInt(e.currentTarget.value);
                        D.size > 0 ? (D.has(t) ? D.delete(t) : D.add(t), N(new Set(D))) : (m(Z[t]), n(1))
                    }), (function(e) {
                        var n;
                        if (S) {
                            var t = e.touches.item(0),
                                r = t.clientX,
                                i = t.clientY,
                                o = null === (n = document.elementFromPoint(r, i)) || void 0 === n ? void 0 : n.getAttribute("value");
                            if (null !== o && void 0 !== o) {
                                var a = Number.parseInt(o);
                                a !== W && T(a)
                            }
                        }
                    }), { shouldPreventDefault: !0, delay: 500 });
                if (S && null !== E && null !== W) {
                    var U = Math.min(E, W),
                        X = Math.max(E, W) + 1;
                    V = new Set(Array.from(Array(X - U).keys(), (function(e) { return e + U })))
                } else V = D || new Set;
                var F = V.size > 0 ? ee.Z : ne.Z;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(be.Z, {
                        sx: { minHeight: "100vh" },
                        bgcolor: j.Z[100],
                        children: [(0, r.jsxs)(oe.Z, { variant: "h5", gutterBottom: !0, component: "div", sx: { p: 2, pb: 0 }, children: ["برمجه حسن منصور ", ] }), w && (0, r.jsx)(me.Z, {}), (0, r.jsx)(ae.Z, {
                            sx: { marginBottom: "56px" },
                            cols: 2,
                            rowHeight: 164,
                            children: Z.map((function(e, n) {
                                var t = e.imageHeight / e.imageWidth * 164,
                                    i = Math.floor(t / 2),
                                    o = V.has(n);
                                return (0, r.jsxs)(ue.Z, (0, $.Z)((0, P.Z)({ sx: { overflow: "hidden", boxSizing: "border-box", border: o ? 5 : 0, borderColor: xe.Z[500], transition: "border-width 0.1s linear" }, value: n }, A), { children: [(0, r.jsx)(we, { loadingHeight: "100%", loadingWidth: "100%", src: e.imageData || "", srcSet: e.imageData || "", loading: "lazy", style: { objectPosition: "0 -".concat(i, "px") } }), (0, r.jsx)(se.Z, { title: e.total, className: "no_touch_events" })] }), n)
                            }))
                        })]
                    }), (0, r.jsx)(le.Z, { position: "fixed", color: "primary", sx: { top: "auto", bottom: 0 }, children: (0, r.jsxs)(ce.Z, { children: [(0, r.jsx)(de.Z, { color: "primary", onClick: function() { D.size > 0 ? (h.snapshotRecords.bulkDelete(Array.from(D).map((function(e) { return Z[e].id }))), N(new Set)) : n(0) }, sx: { position: "absolute", top: -30, left: 0, right: 0, margin: "0 auto" }, children: (0, r.jsx)(F, {}) }), (0, r.jsx)(be.Z, { sx: { flexGrow: 1 } }), (0, r.jsx)(b.Z, { color: "inherit", onClick: function(e) { u(e.currentTarget) }, children: (0, r.jsx)(te.Z, {}) })] }) }), (0, r.jsxs)(he.Z, { open: z, anchorEl: i, onClose: function() { u(null) }, children: [(0, r.jsxs)(Q.Z, { onClick: O, children: [(0, r.jsx)(re.Z, { sx: { pr: "8px" } }), "Upload screenshots"] }), (0, r.jsxs)(Q.Z, { component: fe.Z, href: "/rules", children: [(0, r.jsx)(ie.Z, { sx: { pr: "8px" } }), "Rules"] }), (0, r.jsxs)(Q.Z, { onClick: function() { h.snapshotRecords.clear(), u(null) }, children: [(0, r.jsx)(ee.Z, { sx: { pr: "8px" }, id: "delete_forever" }), "Delete all"] })] }), (0, r.jsx)(pe.Z, { open: c, children: (0, r.jsx)(ve.Z, { message: "Uploading..." }) }), (0, r.jsx)(pe.Z, { open: !c && null !== v, autoHideDuration: 5e3, onClose: function() { return g(null) }, children: (null === v || void 0 === v ? void 0 : v.success) ? (0, r.jsx)(ge.Z, { severity: "success", sx: { width: "100%" }, children: "Successfully uploaded" }) : (0, r.jsx)(ge.Z, { severity: "error", sx: { width: "100%" }, children: "There was an error!" }) })]
                })
            };
            var Ce = function() {
                    var e, n = (0, o.useState)([2]),
                        t = n[0],
                        a = n[1],
                        u = function(e) { a(2 === e ? [2] : [e].concat((0, i.Z)(t))) },
                        s = function() { a(t.slice(1)) };
                    switch (t[0]) {
                        case 0:
                            e = (0, r.jsx)(I, { setMode: u, goBack: s });
                            break;
                        case 1:
                            e = (0, r.jsx)(K, { setMode: u, goBack: s });
                            break;
                        case 2:
                            e = (0, r.jsx)(ke, { setMode: u })
                    }
                    return (0, r.jsx)(g, { children: e })
                },
                Me = !0,
                Ee = function(e) { e.init; return (0, r.jsx)(Ce, {}) }
        },
        1545: function(e, n, t) {
            "use strict";
            t.d(n, { Q: function() { return c } });
            var r = t(7568),
                i = t(1438),
                o = t(2951),
                a = t(828),
                u = t(4051),
                s = t.n(u),
                l = t(2623),
                c = function() {
                    function e() {
                        (0, i.Z)(this, e), this.labelMap = { 0: { name: "pip-1", displayValue: 1 }, 1: { name: "pip-2", displayValue: 2 }, 2: { name: "pip-3", displayValue: 3 }, 3: { name: "pip-4", displayValue: 4 }, 4: { name: "pip-5", displayValue: 5 }, 5: { name: "pip-6", displayValue: 6 }, 6: { name: "pip-7", displayValue: 7 }, 7: { name: "pip-8", displayValue: 8 }, 8: { name: "pip-9", displayValue: 9 }, 9: { name: "pip-10", displayValue: 10 }, 10: { name: "pip-11", displayValue: 11 }, 11: { name: "pip-12", displayValue: 12 } };
                        var n = this;
                        this.predictAndGetResults = function() {
                            var e = (0, r.Z)(s().mark((function e(t, r, i, o) {
                                var u, c, d, h, f, p, v, g, x, m, b, j, Z, w, y, S, P;
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return u = n.loadedModel, c = (0, a.Z)(u.inputs[0].shape.slice(1, 3), 2), d = c[0], h = c[1], f = l.lub((function() {
                                                var e = l.BHj.resizeBilinear(l.Xhn.fromPixels(t), [d, h]).div(255).expandDims(0),
                                                    n = u.execute(e).squeeze(),
                                                    r = (0, a.Z)(n.slice([0, 0], [-1, 4]).split(4, -1), 4),
                                                    i = r[0],
                                                    o = r[1],
                                                    s = r[2],
                                                    c = r[3],
                                                    f = n.slice([0, 4], [-1, 1]).squeeze(),
                                                    p = l.zoF([i.sub(s.div(2)), o.sub(c.div(2)), i.add(s.div(2)), o.add(c.div(2))], -1),
                                                    v = l.BHj.nonMaxSuppressionWithScore(p, f, 100, .5, .7),
                                                    g = v.selectedIndices,
                                                    x = v.selectedScores;
                                                return [p.gather(g), x, n.slice([0, 5], [-1, -1]).argMax(-1).gather(g)]
                                            })), e.t0 = a.Z, e.next = 6, Promise.all([f[0].array(), f[1].data(), f[2].data()]);
                                        case 6:
                                            for (e.t1 = e.sent, p = (0, e.t0)(e.t1, 3), v = p[0], g = p[1], x = p[2], m = [], b = 0; b < v.length; ++b) g[b] >= r && (j = (0, a.Z)(v[b], 4), Z = j[0], w = j[1], y = j[2], S = j[3], Z *= o, y *= o, w *= i, S *= i, P = x[b], m.push({ xmin: Z, xmax: y, ymin: w, ymax: S, class: n.labelMap[P].name, predictedLabel: n.labelMap[P].name, classIndex: P, pipValue: n.labelMap[P].displayValue, score: g[b] }));
                                            return l.B90([v, g, x]), e.abrupt("return", m);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n, t, r, i) { return e.apply(this, arguments) }
                        }()
                    }
                    return e.prototype.load = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "./yolov5_custom/model.json";
                        if (this.loadedModelPromise) return this.loadedModelPromise;
                        var n = this;
                        return this.loadedModelPromise = new Promise(function() {
                            var t = (0, r.Z)(s().mark((function t(r, i) {
                                return s().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return l.G48(), t.next = 3, l.YLj(e);
                                        case 3:
                                            n.loadedModel = t.sent, r(n.loadedModel), gtag && gtag("set", "user_properties", { model_family: "yolo", model_backend: l.N_N(), model_version: n.loadedModel.metadata.version });
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e, n) { return t.apply(this, arguments) }
                        }()), this.loadedModelPromise
                    }, (0, o.Z)(e, [{ key: "shape", get: function() { var e = (0, a.Z)(this.loadedModel.inputs[0].shape.slice(1, 3), 2); return { width: e[0], height: e[1] } } }]), e
                }();
            l.iwz("TensorScatterUpdate", (function(e) {
                var n = e.inputs[0],
                    t = e.inputs[1],
                    r = e.inputs[2],
                    i = l.P84(r),
                    o = l.dC7(n, l.snQ(t, i, n.shape)),
                    a = l.snQ(t, r, n.shape);
                return o.add(a)
            }))
        },
        5125: function(e, n, t) {
            "use strict";
            t.d(n, { M: function() { return o } });
            var r = t(5137),
                i = { 0: { color: "blueviolet" }, 1: { color: "red" }, 2: { color: "yellow" }, 3: { color: "lime" }, 4: { color: "blue" }, 5: { color: "green" }, 6: { color: "fuchsia" }, 7: { color: "purple" }, 8: { color: "aqua" }, 9: { color: "deeppink" }, 10: { color: "dodgerblue" }, 11: { color: "indianred" }, 12: { color: "mediumvioletred" } },
                o = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { debug: !1 },
                        o = t.debug,
                        a = t.highlightIndex;
                    e.forEach((function(e, t) {
                        var u = e.xmin,
                            s = e.xmax,
                            l = e.ymin,
                            c = e.ymax,
                            d = e.score,
                            h = void 0 === d ? 0 : d,
                            f = e.classIndex,
                            p = e.class,
                            v = "12px sans-serif";
                        n.strokeStyle = null !== a && a === t ? r.Z[500] : "#1976d2", n.strokeStyle = o ? i[f].color : n.strokeStyle, n.lineWidth = 2, n.font = v, n.textBaseline = "top", n.fillStyle = "black";
                        var g = o ? p + " - " + Math.round(100 * h) / 100 : p,
                            x = n.measureText(g).width,
                            m = parseInt(v, 10);
                        n.fillRect(u, l, x + 8, m + 4), n.fillStyle = "white", n.beginPath(), n.fillText(g, u + 4, l + 2), n.strokeRect(u, l, s - u, c - l), n.stroke()
                    }))
                }
        },
        914: function() {},
        5410: function() {},
        8628: function() {},
        5778: function() {},
        1601: function() {},
        7792: function() {},
        4977: function() {},
        5042: function() {}
    },
    function(e) {
        e.O(0, [864, 723, 132, 974, 904, 702, 631, 570, 774, 888, 179], (function() { return n = 8312, e(e.s = n); var n }));
        var n = e.O();
        _N_E = n
    }
]);