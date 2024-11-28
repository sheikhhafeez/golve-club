// blogslider start
$(".testi-slider").slick({
    dots: true,
    arrows: true,
    autoplay: false,
    infinite: false,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});

var burger = $(".hamburger-box");

burger.on("click", function (e) {
  $(this).toggleClass("active");
  $('.js-nav').parent().find('.menu').toggleClass('active');
});




