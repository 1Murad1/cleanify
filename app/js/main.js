$('.slider').slick({
    autoPlay: true,
    autoplaySpeed: 2000,
    arrows: true
});

$(window).on("load", function() {
    var wow = new WOW({
        offset: 60
    })
    wow.init();
})
