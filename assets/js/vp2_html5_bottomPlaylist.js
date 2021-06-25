/*
 * HTML5 Video Player with Bottom Playlist v4.6
 *
 * Copyright 2012-2016, LambertGroup
 * 
 */

(function(c) {
    c.fn.vp2_html5_bottomPlaylist_Video = function(a) {
        var d, ga, ha, ia, A = !1,
            ja, ka, la, R, S, ma, T, U, na, V, N = !1,
            D, B, O;
        a = c.extend({
            skin: "universalBlack",
            initialVolume: 1,
            showInfo: !0,
            autoPlayFirstMovie: !1,
            autoPlay: !1,
            loop: !0,
            autoHideControllers: !0,
            seekBarAdjust: 255,
            borderWidth: 12,
            borderColor: "#e9e9e9",
            numberOfThumbsPerScreen: 4,
            thumbsReflection: 50,
            isSliderInitialized: !1,
            isProgressInitialized: !1,
            responsive: !0,
            responsiveRelativeToBrowser: !0,
            width: 0,
            height: 0,
            width100Proc: !1,
            height100Proc: !1,
            setOrigWidthHeight: !0,
            thumbsOnMarginTop: 0,
            origWidth: 0,
            origHeight: 0,
            origThumbW: 0,
            origThumbH: 0,
            origthumbsHolderWrapperH: 121,
            origthumbsHolder_MarginTop: 0,
            windowOrientationScreenSize0: 0,
            windowOrientationScreenSize90: 0,
            windowOrientationScreenSize_90: 0,
            windowCurOrientation: 0
        }, a);
        var K = function() {
            var a = -1;
            if ("Microsoft Internet Explorer" == navigator.appName) { var c = navigator.userAgent,
                    d = /MSIE ([0-9]{1,}[.0-9]{0,})/;
                null != d.exec(c) && (a = parseFloat(RegExp.$1)) } else "Netscape" == navigator.appName && (c = navigator.userAgent, d = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/,
                null != d.exec(c) && (a = parseFloat(RegExp.$1)));
            return parseInt(a, 10)
        }();
        return this.each(function() {
            function P() {
                if (document.getElementById(d).readyState) {
                    B = document.getElementById(d).duration;
                    u.slider({ value: 0, step: .01, orientation: "horizontal", range: "min", max: B, animate: !0, slide: function() { X = !0 }, stop: function(a, v) { X = !1;
                            document.getElementById(d).currentTime = v.value }, create: function(v, b) { a.isSliderInitialized = !0 } });
                    var v = 0;
                    z.progressbar({ value: v, create: function(v, b) { a.isProgressInitialized = !0 } });
                    e.bind("progress",
                        function() { v = document.getElementById(d).buffered.end(document.getElementById(d).buffered.length - 1);
                            0 < v && z.progressbar({ value: v * z.css("width").substring(0, z.css("width").length - 2) / B }) });
                    n.show()
                } else setTimeout(P, 200)
            }
            var e = c(this);
            d = e.attr("id");
            var W = 0,
                E = 0,
                w = 0,
                n = c('<div class="VideoControls"><a class="VideoRewind" title="Rewind"></a><a class="VideoPlay" title="Play/Pause"></a><div class="VideoBuffer"></div><div class="VideoSeek"></div><a class="VideoShowHidePlaylist" title="Show/Hide Playlist"></a><a class="VideoInfoBut" title="Info"></a><div class="VideoTimer">00:00</div><div class="VolumeAll"><div class="VolumeSlider"></div><a class="VolumeButton" title="Mute/Unmute"></a></div><a class="VideoFullScreen" title="FullScreen"></a></div> <div class="VideoInfoBox"></div>    <div class="thumbsHolderWrapper"><div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div></div>    </div>'),
                b = e.parent(".vp2_html5_bottomPlaylist"),
                t = b.parent(".vp2_html5_bottomPlaylistBorder");
            b.addClass(a.skin);
            b.append(n);
            var n = c(".VideoControls", b),
                p = c(".VideoInfoBox", b),
                wa = c(".VideoRewind", b),
                F = c(".VideoPlay", b),
                z = c(".VideoBuffer", b),
                u = c(".VideoSeek", b),
                oa = c(".VideoInfoBut", b);
            a.showInfo || oa.addClass("hideElement");
            var Y = c(".VideoShowHidePlaylist", b),
                I = c(".VideoTimer", b),
                pa = c(".VolumeAll", b),
                Z = c(".VolumeSlider", b),
                L = c(".VolumeButton", b),
                G = c(".VideoFullScreen", b),
                f = c(".thumbsHolderWrapper", b),
                H = c(".thumbsHolderVisibleWrapper",
                    b),
                q = c(".thumbsHolder", b),
                r, l;
            r = c('<div class="carouselLeftNav"></div>');
            l = c('<div class="carouselRightNav"></div>');
            f.append(r);
            f.append(l);
            l.css("left", f.width() - l.width() + "px");
            q.css("width", r.width() + "px");
            n.width(e.width());
            t.width(e.width() + 2 * a.borderWidth);
            t.height(e.height() + 3 * a.borderWidth + f.height());
            t.css("background", a.borderColor);
            b.css({ width: e.width() + "px", height: e.height() + "px", top: a.borderWidth + "px", left: a.borderWidth + "px" });
            u.css("width", e[0].offsetWidth - a.seekBarAdjust + "px");
            z.css("width",
                u.css("width"));
            p.css("width", e[0].offsetWidth - 40 + "px");
            n.hide();
            a.origWidth = document.getElementById(d).offsetWidth;
            a.origHeight = document.getElementById(d).offsetHeight;
            a.width = a.origWidth;
            a.height = a.origHeight;
            ja = e.css("position");
            ka = e.css("left");
            la = e.css("top");
            R = b[0].offsetWidth;
            S = b[0].offsetHeight;
            ma = b.css("position");
            T = b.css("left");
            U = b.css("top");
            V = p.css("position");
            na = n.css("position");
            f.css("width", a.origWidth + "px");
            ha = t.css("position");
            ia = t.css("z-index");
            videoContainerOrigZIndex = b.css("z-index");
            videoControllersOrigBottom = n.css("bottom");
            V = p.css("position");
            a.responsive && (a.width100Proc || a.height100Proc) && (a.setOrigWidthHeight = !1);
            ga = c("html").css("overflow");
            n.css("width", "100%");
            var aa = function() { return document.getElementById(d).canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') },
                xa = function() {
                    c(y[h]).addClass("thumbsHolder_ThumbON");
                    M();
                    var a = g[h].sources_webm,
                        b = navigator.userAgent.toLowerCase();
                    if (-1 != b.indexOf("chrome") || -1 != b.indexOf("msie") || -1 != b.indexOf("safari") || -1 != b.indexOf("android")) a =
                        g[h].sources_mp4;
                    if (-1 != b.indexOf("ipad") || -1 != b.indexOf("iphone") || -1 != b.indexOf("ipod") || -1 != b.indexOf("webos")) a = g[h].sources_mp4; - 1 != b.indexOf("android") && (a = g[h].sources_mp4); - 1 != K && (a = g[h].sources_mp4); - 1 != b.indexOf("opera") && (a = g[h].sources_webm, "" != aa() && (a = g[h].sources_mp4)); - 1 != b.indexOf("opr/") && (a = g[h].sources_webm, "" != aa() && (a = g[h].sources_mp4));
                    if (-1 != b.indexOf("firefox") || -1 != b.indexOf("mozzila")) a = g[h].sources_webm, "" != aa() && (a = g[h].sources_mp4);
                    return a
                },
                J = !1,
                C = 0,
                h = 0,
                k = 0,
                g = [],
                m;
            c(".xplaylist",
                e).children().each(function() {
                currentElement = c(this);
                k++;
                g[k - 1] = [];
                g[k - 1].title = "";
                g[k - 1].desc = "";
                g[k - 1].thumb = "";
                g[k - 1].preview = "";
                g[k - 1].xsources_mp4 = "";
                g[k - 1].xsources_ogv = "";
                g[k - 1].xsources_webm = "";
                g[k - 1].xsources_mp4v = "";
                null != currentElement.find(".xtitle").html() && (g[k - 1].title = currentElement.find(".xtitle").html());
                null != currentElement.find(".xdesc").html() && (g[k - 1].desc = currentElement.find(".xdesc").html());
                null != currentElement.find(".xthumb").html() && (g[k - 1].thumb = currentElement.find(".xthumb").html());
                null != currentElement.find(".xpreview").html() && (g[k - 1].preview = currentElement.find(".xpreview").html());
                null != currentElement.find(".xsources_mp4").html() && (g[k - 1].sources_mp4 = currentElement.find(".xsources_mp4").html());
                null != currentElement.find(".xsources_ogv").html() && (g[k - 1].sources_ogv = currentElement.find(".xsources_ogv").html());
                null != currentElement.find(".xsources_webm").html() && (g[k - 1].sources_webm = currentElement.find(".xsources_webm").html());
                null != currentElement.find(".xsources_mp4v").html() &&
                    (g[k - 1].sources_mp4v = currentElement.find(".xsources_mp4v").html());
                m = c('<div class="thumbsHolder_ThumbOFF" rel="' + (k - 1) + '"><img src="' + g[k - 1].thumb + '"></div>');
                q.append(m);
                w = Math.floor((f.width() - r.width() - l.width() - m.width() * a.numberOfThumbsPerScreen) / (a.numberOfThumbsPerScreen - 1));
                q.css("width", q.width() + w + m.width() + "px");
                1 >= k ? m.css("margin-left", Math.floor((f.width() - r.width() - l.width() - (w + m.width()) * (a.numberOfThumbsPerScreen - 1) - m.width()) / 2) + "px") : m.css("margin-left", w + "px");
                a.origThumbW = m.width();
                a.origThumbH = m.height();
                a.origthumbsHolderWrapperH = f.height();
                thumbsHolder_MarginTop = parseInt((f.height() - parseInt(m.css("height").substring(0, m.css("height").length - 2))) / 2)
            });
            H.css("width", H.width() - r.width() - l.width());
            H.css("left", r.width());
            E = (m.width() + w) * a.numberOfThumbsPerScreen;
            0 === Math.floor(h / a.numberOfThumbsPerScreen) && r.addClass("carouselLeftNavDisabled");
            Math.floor(h / a.numberOfThumbsPerScreen) == Math.floor(k / a.numberOfThumbsPerScreen) && l.addClass("carouselRightNavDisabled");
            f.css("top",
                e[0].offsetHeight + a.borderWidth + "px");
            0 < a.thumbsReflection && (thumbsHolder_MarginTop -= 7);
            var qa = c(".thumbsHolder_ThumbOFF", b).find("img:first");
            qa.css("margin-top", thumbsHolder_MarginTop + "px");
            var ya = { opacity: a.thumbsReflection / 100 };
            0 < a.thumbsReflection && qa.reflect(ya);
            m.css("background-position", "center " + a.thumbsOnMarginTop + "px");
            r.click(function() { J || (C = q.css("left").substr(0, q.css("left").lastIndexOf("px")), 0 > C && M(1)) });
            l.click(function() {
                J || (C = q.css("left").substr(0, q.css("left").lastIndexOf("px")),
                    Math.abs(C - E) < (m.width() + w) * k && M(-1))
            });
            var M = function(b) { C = q.css("left").substr(0, q.css("left").lastIndexOf("px"));
                    1 === b || -1 === b ? (J = !0, q.css("opacity", "0.5"), q.animate({ opacity: 1, left: "+=" + b * E }, 500, "easeOutCubic", function() { ra();
                        J = !1 })) : C != -1 * Math.floor(h / a.numberOfThumbsPerScreen) * E && (J = !0, q.css("opacity", "0.5"), q.animate({ opacity: 1, left: -1 * Math.floor(h / a.numberOfThumbsPerScreen) * E }, 500, "easeOutCubic", function() { ra();
                        J = !1 })) },
                ra = function() {
                    C = q.css("left").substr(0, q.css("left").lastIndexOf("px"));
                    0 > C ? r.hasClass("carouselLeftNavDisabled") && r.removeClass("carouselLeftNavDisabled") : r.addClass("carouselLeftNavDisabled");
                    Math.abs(C - E) < (m.width() + w) * k ? l.hasClass("carouselRightNavDisabled") && l.removeClass("carouselRightNavDisabled") : l.addClass("carouselRightNavDisabled")
                },
                y = c(".thumbsHolder_ThumbOFF", b);
            y.click(function() { var b = c(this).attr("rel");
                h != b && (c(y[h]).removeClass("thumbsHolder_ThumbON"), h = b, ba(a.autoPlay)) });
            y.mouseenter(function() { var a = c(this);
                a.attr("rel");
                a.addClass("thumbsHolder_ThumbON") });
            y.mouseleave(function() { var a = c(this),
                    b = a.attr("rel");
                h != b && a.removeClass("thumbsHolder_ThumbON") });
            y.dblclick(function(a) { a = c(this);
                a.attr("rel");
                a.addClass("thumbsHolder_ThumbON") });
            var ba = function(b) {
                a.isSliderInitialized && (u.slider("destroy"), a.isSliderInitialized = !1);
                a.isProgressInitialized && (z.progressbar("destroy"), e.unbind("progress"), a.isProgressInitialized = !1);
                O = "Infinity";
                document.getElementById(d).poster = g[h].preview;
                p.html('<p class="movieTitle">' + g[h].title + '</p><p class="movieDesc">' +
                    g[h].desc + "</p>");
                document.getElementById(d).src = xa();
                document.getElementById(d).load();
                var c = navigator.userAgent.toLowerCase(); - 1 != c.indexOf("ipad") || -1 != c.indexOf("iphone") || -1 != c.indexOf("ipod") || -1 != c.indexOf("webos") || -1 != c.indexOf("android") ? (b ? (document.getElementById(d).play(), F.addClass("VideoPause")) : F.removeClass("VideoPause"), P()) : (clearInterval(O), O = setInterval(function() {
                    0 < document.getElementById(d).readyState && !isNaN(document.getElementById(d).duration) && "Infinity" != document.getElementById(d).duration &&
                        (B = document.getElementById(d).duration, P(), b ? (document.getElementById(d).play(), F.addClass("VideoPause")) : F.removeClass("VideoPause"), clearInterval(O))
                }, 700))
            };
            ba(a.autoPlayFirstMovie);
            wa.click(function() { document.getElementById(d).currentTime = 0;
                document.getElementById(d).play() });
            var ca = function() { 0 == document.getElementById(d).paused ? document.getElementById(d).pause() : document.getElementById(d).play() };
            F.click(ca);
            e.click(ca);
            e.bind("play", function() { F.addClass("VideoPause") });
            e.bind("pause", function() { F.removeClass("VideoPause") });
            var x = navigator.userAgent.toLowerCase(); - 1 == x.indexOf("ipad") && -1 == x.indexOf("iphone") && -1 == x.indexOf("ipod") && -1 == x.indexOf("webos") && (b.mouseover(function() { a.autoHideControllers && n.show() }), b.mouseout(function() { a.autoHideControllers && 120 > pa.css("height").substring(0, pa.css("height").length - 2) && n.hide() }));
            b.keydown(function(a) { 32 == a.keyCode && ca() });
            var sa = function() {
                    A = !0;
                    G.removeClass("VideoFullScreen");
                    G.addClass("VideoFullScreenIn");
                    c("html").css("overflow", "hidden");
                    c("body").css("margin",
                        0);
                    c(".vp2_html5_bottomPlaylist").css("display", "none");
                    b.css("display", "block");
                    var v, d;
                    "none" != f.css("display") ? (v = window.innerHeight - f.height(), d = window.innerHeight - v + "px") : (v = window.innerHeight, d = videoControllersOrigBottom);
                    e.css("position", "fixed");
                    e.css("width", window.innerWidth + "px");
                    e.css("height", v + "px");
                    e.css("top", 0);
                    e.css("left", 0);
                    b.css("position", "fixed");
                    b.css("width", "100%");
                    b.css("height", "20000px");
                    b.css("top", 0);
                    b.css("left", 0);
                    b.css("z-index", 1E4);
                    n.css("position", "fixed");
                    n.css("bottom",
                        d);
                    u.css("width", window.innerWidth - a.seekBarAdjust + "px");
                    z.css("width", u.css("width"));
                    p.css("position", "fixed");
                    p.css("width", window.innerWidth - 40 + "px");
                    "none" != f.css("display") && p.css("margin-bottom", f.height() + "px");
                    f.css("top", window.innerHeight - f.height() + "px");
                    f.css("margin-left", Math.round((window.innerWidth - a.origWidth) / 2))
                },
                ta = function() {
                    A = !1;
                    G.removeClass("VideoFullScreenIn");
                    G.addClass("VideoFullScreen");
                    c("body").css("margin", void 0);
                    c("html").css("overflow", ga);
                    c(".vp2_html5_bottomPlaylist").css("display",
                        "block");
                    t.css("position", ha);
                    t.css("width", a.origWidth + 2 * a.borderWidth + "px");
                    t.css("height", a.origHeight + 3 * a.borderWidth + f.height() + "px");
                    t.css("background", a.borderColor);
                    t.css("z-index", ia);
                    b.css("position", ma);
                    b.css("width", R + "px");
                    b.css("height", S + "px");
                    b.css("top", U);
                    b.css("left", T);
                    b.css("z-index", videoContainerOrigZIndex);
                    b.css("top", U);
                    b.css("left", T);
                    n.css("position", na);
                    n.css({ bottom: 0, "margin-bottom": 0 });
                    u.css("width", a.origWidth - a.seekBarAdjust + "px");
                    z.css("width", u.css("width"));
                    p.css("width",
                        a.origWidth - 40 + "px");
                    p.css("position", V);
                    p.css("margin-bottom", "0px");
                    var d;
                    e.css("position", ja);
                    e.css("width", a.origWidth + "px");
                    d = "none" != f.css("display") ? a.origHeight : a.origHeight + f.height() + a.borderWidth;
                    e.css("height", d + "px");
                    b.css("height", d + "px");
                    e.css("top", la);
                    e.css("left", ka);
                    f.css("margin-left", 0);
                    f.css("top", e[0].offsetHeight + a.borderWidth + "px")
                };
            b.dblclick(function() { A || G.click() });
            G.click(function() {
                screenfull.enabled ? (b.css("display", "none"), screenfull.toggle(t[0]), screenfull.onchange =
                    function(c) { a.responsive && a.width != a.origWidth && !A && (a.width = a.origWidth, a.height = a.origHeight, e.css("width", a.width + "px"), e.css("height", a.height + "px"), b.css("width", a.width + "px"), b.css("height", a.height + "px"), n.css("bottom", videoControllersOrigBottom), u.css("width", a.width - a.seekBarAdjust + "px"), z.css("width", u.css("width")), p.css("width", a.width - 40 + "px"), da());
                        delayTime = 50;
                        11 <= K && (delayTime = 200);
                        setTimeout(function() { A ? ta() : sa() }, delayTime) }) : (-1 != K || -1 != x.indexOf("ipad") || -1 != x.indexOf("iphone") ||
                    -1 != x.indexOf("ipod") || -1 != x.indexOf("webos")) && a.responsive && a.responsiveRelativeToBrowser && a.width100Proc && a.height100Proc || (A ? ta() : sa())
            });
            var ea = !1;
            I.mouseover(function() { ea = !0;
                D = document.getElementById(d).currentTime;
                B = document.getElementById(d).duration;
                I.text("-" + Q(B - D)) });
            I.mouseout(function() { ea = !1;
                D = document.getElementById(d).currentTime;
                B = document.getElementById(d).duration;
                I.text(Q(D)) });
            var X = !1;
            P();
            var Q = function(a) {
                var b = 10 > Math.floor(a / 60) ? "0" + Math.floor(a / 60) : Math.floor(a / 60);
                return b +
                    ":" + (10 > Math.floor(a - 60 * b) ? "0" + Math.floor(a - 60 * b) : Math.floor(a - 60 * b))
            };
            e.bind("timeupdate", function() { a.isSliderInitialized && (D = document.getElementById(d).currentTime, B = document.getElementById(d).duration, X || u.slider("value", D), ea ? I.text("-" + Q(B - D)) : I.text(Q(D))) });
            oa.click(function() { "giant" == a.skin ? "none" == p.css("display") ? p.fadeIn() : p.fadeOut() : p.slideToggle(300) });
            Y.click(function() {
                if (!N)
                    if (N = !0, "none" != f.css("display")) {
                        var c;
                        c = e[0].offsetHeight + a.borderWidth + f.height();
                        Y.addClass("VideoShowHidePlaylist_onlyShow");
                        A ? (n.css({ bottom: 0, "margin-bottom": 0 }), p.css("margin-bottom", 0)) : b.css("height", c + "px");
                        f.animate({ opacity: 0 }, 150, function() { f.css("display", "none") });
                        e.animate({ height: c }, 300, function() { N = !1 })
                    } else c = e[0].offsetHeight - a.borderWidth - f.height(), Y.removeClass("VideoShowHidePlaylist_onlyShow"), A ? (n.css("margin-bottom", f.height() + "px"), p.css("margin-bottom", f.height() + "px")) : b.css("height", a.height + "px"), f.css("display", "block"), f.css("top", c + a.borderWidth + "px"), f.animate({ opacity: 1 }, 600, function() {
                        N = !1;
                        M()
                    }), e.animate({ height: c }, 300, function() {})
            });
            e[0].addEventListener("ended", function(b) { a.loop && -1 == x.indexOf("android") && (c(y[h]).removeClass("thumbsHolder_ThumbON"), h == k - 1 ? h = 0 : h++, ba(a.autoPlay)) }, !1);
            var ua = 1;
            Z.slider({ value: a.initialVolume, orientation: "vertical", range: "min", max: 1, step: .05, animate: !0, slide: function(a, b) { document.getElementById(d).muted = !1;
                    ua = b.value;
                    document.getElementById(d).volume = b.value } });
            document.getElementById(d).volume = a.initialVolume;
            L.click(function() {
                1 == document.getElementById(d).muted ?
                    (document.getElementById(d).muted = !1, Z.slider("value", ua), L.removeClass("VolumeButtonMute"), L.addClass("VolumeButton")) : (document.getElementById(d).muted = !0, Z.slider("value", "0"), L.removeClass("VolumeButton"), L.addClass("VolumeButtonMute"))
            });
            e.removeAttr("controls");
            var da = function() {
                f.css({ top: e[0].offsetHeight + a.borderWidth + "px", width: a.width + "px", height: parseInt(a.origthumbsHolderWrapperH / (a.origWidth / a.width), 10) + "px" });
                thumbIconCorrection = -7;
                bgTopCorrection = 0;
                1 == a.origWidth / a.width && 0 < a.thumbsReflection &&
                    (bgTopCorrection = -7, thumbIconCorrection = 0);
                r.css("background-position", "0px " + ((f.height() - a.origthumbsHolderWrapperH) / 2 + bgTopCorrection + 3) + "px");
                l.css("background-position", "0px " + ((f.height() - a.origthumbsHolderWrapperH) / 2 + bgTopCorrection + 3) + "px");
                l.css("left", f.width() - l.width() + "px");
                H.css("width", a.width - r.width() - l.width());
                a.origWidthThumbsHolderVisibleWrapper = a.origWidth - r.width() - l.width();
                y.css({
                    width: parseInt(a.origThumbW / (a.origWidthThumbsHolderVisibleWrapper / H.width()), 10) + "px",
                    height: parseInt(a.origThumbH /
                        (a.origWidthThumbsHolderVisibleWrapper / H.width()), 10) + "px"
                });
                a.numberOfThumbsPerScreen >= k && H.css("left", parseInt((f.width() - (m.width() + w) * k) / 2, 10) + parseInt(w / 2, 10) + "px");
                var d = c(".thumbsHolder_ThumbOFF", b).find("img:first");
                0 < a.thumbsReflection && d.unreflect();
                d.css({ width: y.width() + "px", height: y.height() + "px", "margin-top": parseInt((f.height() - y.height()) / 2, 10) + bgTopCorrection + "px" });
                1 == a.origWidth / a.width && 0 < a.thumbsReflection && d.reflect({ opacity: a.thumbsReflection / 100 });
                w = Math.floor((f.width() - r.width() -
                    l.width() - m.width() * a.numberOfThumbsPerScreen) / (a.numberOfThumbsPerScreen - 1));
                thumb_i = -1;
                q.children().each(function() { thumb_i++;
                    theThumb = c(this);
                    theThumb.css("background-position", "center " + parseInt((a.thumbsOnMarginTop - thumbIconCorrection) / (a.origWidth / a.width), 10) + "px");
                    0 >= thumb_i ? theThumb.css("margin-left", Math.floor((f.width() - r.width() - l.width() - (w + theThumb.width()) * (a.numberOfThumbsPerScreen - 1) - theThumb.width()) / 2) + "px") : theThumb.css("margin-left", w + "px") });
                E = (m.width() + w) * a.numberOfThumbsPerScreen
            };
            da();
            var va = function() {
                    if (A) - 1 == x.indexOf("ipad") && -1 == x.indexOf("iphone") && -1 == x.indexOf("ipod") && -1 == x.indexOf("webos") || G.click();
                    else if (responsiveWidth = t.parent().width(), responsiveHeight = t.parent().height(), a.responsiveRelativeToBrowser && (responsiveWidth = c(window).width(), responsiveHeight = c(window).height()), a.width100Proc && (a.width = responsiveWidth - 1), a.height100Proc && (a.height = responsiveHeight), a.origWidth != responsiveWidth || a.width100Proc) {
                        a.origWidth > responsiveWidth || a.width100Proc ? a.width =
                            responsiveWidth : a.width100Proc || (a.width = a.origWidth);
                        a.height100Proc || (a.height = a.width * a.origHeight / a.origWidth);
                        a.width = responsiveWidth > a.width ? parseInt(a.width, 10) : parseInt(a.width, 10) - 2 * a.borderWidth;
                        a.height = parseInt(a.height, 10);
                        var d = a.height;
                        "none" == f.css("display") && (d = a.height + a.borderWidth + f.height());
                        e.css("width", a.width + "px");
                        e.css("height", d + "px");
                        b.css("width", a.width + "px");
                        b.css("height", d + "px");
                        n.css("bottom", videoControllersOrigBottom);
                        u.css("width", a.width - a.seekBarAdjust + "px");
                        z.css("width", u.css("width"));
                        p.css("width", a.width - 40 + "px");
                        a.setOrigWidthHeight || (a.origWidth = a.width, a.origHeight = a.height, R = b[0].offsetWidth, S = b[0].offsetHeight);
                        da();
                        M();
                        t.width(e.width() + 2 * a.borderWidth);
                        "none" != f.css("display") ? t.height(e.height() + 3 * a.borderWidth + f.height()) : t.height(d + 2 * a.borderWidth)
                    }
                },
                fa = !1;
            c(window).resize(function() {
                doResizeNow = !0; - 1 != K && 9 == K && 0 == W && (doResizeNow = !1);
                W == c(window).width() ? (doResizeNow = !1, a.windowCurOrientation != window.orientation && -1 != navigator.userAgent.indexOf("Android") &&
                    (a.windowCurOrientation = window.orientation, doResizeNow = !0)) : W = c(window).width();
                a.responsive && doResizeNow && (!1 !== fa && clearTimeout(fa), fa = setTimeout(function() { va() }, 300))
            });
            a.responsive && va()
        })
    };
    c.fn.vp2_html5_bottomPlaylist_Video.skins = {}
})(jQuery);