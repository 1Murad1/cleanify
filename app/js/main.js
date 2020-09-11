$('.slider').slick({
    arrows: true,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                dots: true,
                arrows: false
           }
        }
    ]
});


$(window).on('load resize', function() {
    if ($(window).width() < 1024) {
        $('.slider_icon').slick({
            dots: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2
        });
    }
});

$(window).on("load", function() {
    var wow = new WOW({
        offset: 60
    })
    wow.init();
});

const btn = document.getElementById("read_more");
btn.addEventListener("click", function (e) {
   const hide_bg = document.getElementById("hide_bg");
   const more = $("#more");
   if(hide_bg.style.display === "none") {
       hide_bg.style.display = "inline";
       $('#read_more').removeClass('open')
       more.slideUp()
   } else {
       hide_bg.style.display = "none";
       $('#read_more').addClass('open')
       more.slideDown()
   }

});
