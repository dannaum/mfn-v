
    ($.fn.isInViewport = function () {
        var a = $(this).offset().top,
            c = a + $(this).outerHeight(),
            b = $(window).scrollTop(),
            d = b + $(window).height();
        return c > b && a < d;
    });

    var screenWidth = $(window).width();

    for (var b = document.getElementsByClassName("animated-word"), a = 0; a < b.length; a++) {
        var c = b.item(a);
        c.innerHTML = c.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="letter">$2</span>');
    }
    var aPlayed = false;
    function animationsRender() {
        if ($(window).width() > 991) {


            var a = anime.timeline({ loop: !1, autoplay: !1 });
            a.add({
                targets: ".fadeup0 .letter",
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutQuint",
                duration: 800,
                delay: (b, a) => 30 * a,
                begin() {
                    $(".fadeup0").css("opacity", "1");
                },
            });
            $(document).ready(function () {
                a.play();
                $(window).focus(function () {
                    if (!aPlayed) {
                        a.restart();
                        aPlayed = true;
                    }
                    else {
                    }
                });
            });

            var b = anime.timeline({ loop: !1, autoplay: !1 });
            b.add({
                targets: ".fadeup1 .letter",
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutQuint",
                duration: 800,
                delay: (b, a) => 30 * a,
                begin() {
                    $(".fadeup1").css("opacity", "1");
                },
            });
            

            $(window).scroll(function() {
                if ($(".fadeup1").isInViewport(e)) {
                    b.play();
                    $(this).off(e);
                }
            });
        }
    }

        animationsRender();
        $(window).on("orientationchange", function () {
            if ($(window).width() > 991) {
                animationsRender();
                $('.animated-word').css('opacity', '1');
            }
        });