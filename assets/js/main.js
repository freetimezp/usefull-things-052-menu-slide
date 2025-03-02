TweenMax.from(".navbar", 2, {
    left: "-20%",
    ease: Expo.easeInOut,
    delay: 0.4
});

var tl = new TimelineMax({ paused: true });

tl.to(".nav", 1.8, {
    width: "94%",
    ease: Expo.easeInOut
});

tl.staggerTo(".nav-item a", 0.6, {
    top: "0px",
    ease: Expo.easeInOut
}, 0.1, "-=0.8");

tl.reverse();

$(document).on("click", ".nav-toggle", function () {
    tl.reversed(!tl.reversed());
});

$(document).on("click", ".nav-item a", function () {
    tl.reversed(!tl.reversed());
});















