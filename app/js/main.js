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
    //     $('.slider_three').slick({
    //         dots: true,
    //         arrows: false,
    //         slidesToShow: 2,
    //         slidesToScroll: 2
    //     });
     }
});

$(window).on("load", function() {
    var wow = new WOW({
        offset: 60
    })
    wow.init();
});


const wrap_btn = document.querySelectorAll(".wrap_arrow");

wrap_btn.forEach(item => {
    const btn = item.querySelector(".read_more");
    const more = item.querySelector("#more");
    const more_two = item.querySelector("#more_two");
    const hide_bg = item.querySelector("#hide_bg");
    const hide_bgs = item.querySelector("#hide_bgs");

    btn.addEventListener("click", function (e) {
        if (hide_bg.style.display === "none") {
            hide_bg.style.display = "inline";
            e.target.innerHTML = "Read More";
            more.style.display = "none";
            arrow_down.style.transform = "rotate(0)"
        } else {
            hide_bg.style.display = "none";
            e.target.innerHTML = "hide";
            more.style.display = "inline";
            arrow_down.style.transform = "rotate(180deg)"
        }
    })
});