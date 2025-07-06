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


let endTime = localStorage.getItem("FlashSaleEndtime");
if (!endTime) {
    endTime = new Date().getTime() + (4 * 24 * 60 * 60 * 1000);
    localStorage.setItem("FlashSaleEndtime", endTime);
} else {
    endTime = Number(endTime);
}


function updateCountdown() {
    const now = new Date().getTime();

    const distance = endTime - now;

    if (distance <= 0) {
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);


    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

