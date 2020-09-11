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
   const more = document.getElementById("more");
   if(hide_bg.style.display === "none") {
       hide_bg.style.display = "inline";
       e.target.innerHTML= "Read More";
       more.style.display ="none"
   } else {
       hide_bg.style.display = "none";
       e.target.innerHTML= "hide";
       more.style.display ="inline"
   }

});
