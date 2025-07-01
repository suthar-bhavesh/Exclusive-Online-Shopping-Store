$(document).ready(function () {
    $('.banner-carousel').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,  
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

function toggleMenu() {
    $('.mobile-nav').toggleClass('show');
}




$(document).ready(function () {
    $('#search-body').ready(function () {
        $('#searchbox').focus();
        $('.search-input').addClass('show');
    })

});