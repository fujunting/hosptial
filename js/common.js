$(function () {
    $(".nav span").mouseenter(function () {
        $(this).addClass("current");
        $(this).find("p").fadeIn();
    });

    $(".nav span").mouseleave(function () {
        $(this).removeClass("current");
        $(this).find("p").fadeOut();
    });

    var Swiper1 = new Swiper('.banner .swiper-container', {
        autoHeight: true,
        observer: true,
        observeParents: true,
        autoplay: true,
        pagination: {
            el: '.banner .swiper-pagination',
            clickable: true,
        },
    });

    var Swiper2 = new Swiper('.picture .swiper-container', {
        autoHeight: true,
        observer: true,
        observeParents: true,
        autoplay: true,
        pagination: {
            el: '.picture .swiper-pagination',
            clickable: true,
        },
    });

    var Swiper3 = new Swiper('.doctors .swiper-container', {
        simulateTouch: false,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.doctors .swiper-button-next',
            prevEl: '.doctors .swiper-button-prev',
        },
    });
});