! function(e) {
    "use strict";
    e.fn.rPopup = function(r) {
        return r = e.extend({
            video: {
                embed: !1,
                autoplay: !0
            },
            image: !1
        }, r), this.each(function(i, a) {
            var p, s = e(this);
            r.video, r.image;
            s.on("click", function(i) {
                i.preventDefault(), e("body").append('<div class="rpopup-overlay"></div>');
                var a = e(".rpopup-overlay");
                if (r.image) var o = `<div class="img-wrapper"><img src="${l=s.attr("href")}" alt=""/></div>`;
                if (r.video.embed) {
                    var l = s.attr("href"),
                        n = r.video.autoplay ? 1 : 0;
                    if (/(?:.mp4|.MOV|.avi|.AVI|.FLV|.MKV )/g.test(l)) o = `<div id="rpopup_video__player" class="rpopup_video__player"><video class="rpopup_video__Player"><source src="${l}"></video>\n                        <div class="rvideo_player__extra_wrap">\n                            <div class="rvideo_player__progress_wrap">\n                                    <span class="rvideo_player__progress_active"></span>\n                                </div>\n                                <div class="rvideo_player__controls_wrap">\n                                    <div class="rvideo_player__buttons">\n                                        <span class="rvideo_player_btn rvideo_play"></span>\n                                        <div class="rvideo_player_time_wrap">\n                                            <span class="rvideo_player_start_time">0:00</span>/\n                                            <span class="rvideo_player_duration">2:00</span>\n                                        </div>\n                                    </div>\n                                    <div class="rvideo_player_volume_wrap">\n                                        <span class="rvideo_player_volume_icon"></span>\n                                        <div class="rvideo_player_volume_progress_wrap">\n                                            <input type="range" class="rvideo_player_volume_range" min="0" max="100" step="10" value="10">\n                                        </div>\n                                    </div>\n                                </div> \n                            </div>\n                    </div>`;
                    if (/v=([^\s]+)/g.test(l)) o = `<iframe id="rpopupIframe" src="${l="https://www.youtube.com/embed/"+/v=([^\s]+)/g.exec(l)[1]}?autoplay=${n}" frameborder="0" allowfullscreen=""></iframe>`
                }
                e("body").append(`\n                <div class="roppup-modal">\n                    <div class="roppup-area">\n                        <div class="rpopup-content">\n                        <div class="rpopup-preloader active">\n                            <div class="sk-circle">\n                                <div class="sk-circle1 sk-child"></div>\n                                <div class="sk-circle2 sk-child"></div>\n                                <div class="sk-circle3 sk-child"></div>\n                                <div class="sk-circle4 sk-child"></div>\n                                <div class="sk-circle5 sk-child"></div>\n                                <div class="sk-circle6 sk-child"></div>\n                                <div class="sk-circle7 sk-child"></div>\n                                <div class="sk-circle8 sk-child"></div>\n                                <div class="sk-circle9 sk-child"></div>\n                                <div class="sk-circle10 sk-child"></div>\n                                <div class="sk-circle11 sk-child"></div>\n                                <div class="sk-circle12 sk-child"></div>\n                            </div>\n                        </div>  \n                        <span class="rpopup-close">X</span>\n                            ${o}\n                        </div>\n                    </div>\n                </div>\n                `), a.addClass("show"), e("#rpopup_video__player").bind("contextmenu", function() {
                    return !1
                }), e(".rpopup-content .img-wrapper,.rpopup-content iframe").ready(function() {
                    e(".rpopup-preloader").removeClass("active")
                });
                var d = document.querySelector(".rpopup_video__Player");
                if (null != d) {
                    d.currentTime, d.duration;

                    function v() {
                        var r = parseInt(d.currentTime / 60, 10),
                            i = d.currentTime % 60,
                            a = r + ":" + ("0" + (i = Math.floor(i))).slice(-2);
                        e(".rpopup_video__player .rvideo_player_start_time").text(a)
                    }

                    function c(r) {
                        p && clearInterval(p), p = setInterval(function() {
                            var e = d.currentTime / d.duration * 100;
                            v(), t(e)
                        }, 1e3), (r = e(".rpopup_video__player .rvideo_player_btn")).hasClass("rvideo_play") ? (d.play(), r.addClass("rvideo_pause").removeClass("rvideo_play")) : r.hasClass("rvideo_pause") && (clearInterval(p), d.pause(), r.addClass("rvideo_play").removeClass("rvideo_pause"))
                    }
                    r.video.autoplay && (d.play(), c(e(".rvideo_player_btn, .rpopup_video__Player"))), d.onloadedmetadata = function() {
                        var r = parseInt(d.duration / 60, 10),
                            i = d.duration % 60,
                            a = r + ":" + Math.floor(i);
                        e(".rvideo_player_duration").text(a)
                    }, e(".rpopup_video__player .rvideo_player_btn, .rpopup_video__Player").click(function(r) {
                        r.preventDefault(), c(e(this))
                    }), e(".rpopup_video__player .rvideo_player__progress_wrap").on("click", function(r) {
                        var i = e(this),
                            a = r.offsetX / i.width() * d.duration;
                        d.currentTime = a;
                        var p = d.currentTime / d.duration * 100;
                        v(), t(p)
                    }), e(".rpopup_video__player .rvideo_player_volume_range").on("change", function() {
                        var r = e(this);
                        d.volume = r.val() / 100
                    })
                }

                function t(r) {
                    e(".rpopup_video__player .rvideo_player__progress_active").css({
                        width: r + "%"
                    })
                }
            })
        })
    }, e(document).on("click", ".rpopup-overlay", function(r) {
        e(this).remove()
    }), e(document).on("click", ".rpopup-close", function(r) {
        e(this).parent().parent().parent().remove(), e(".rpopup-overlay").remove()
    })
}(jQuery);