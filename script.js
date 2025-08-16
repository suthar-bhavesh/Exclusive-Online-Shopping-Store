// banner Carousel

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
        ]
    });
});


// mobile-nav

function toggleMenu() {
    $('.mobile-nav').toggleClass('show');
}

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".hamburger");
    const nav = document.querySelector(".mobile-nav");


    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});

// search input
function toggleSearch() {
    document.getElementById("searchbox").focus();
}


function profilemanage() {
    $('#clickable-account-drop').toggleClass('account-setting');
}


//sale Timer

let endTime = localStorage.getItem("FlashSaleEndtime");
if (!endTime) {
    endTime = new Date().getTime() + (4 * 24 * 60 * 60 * 1000);
    localStorage.setItem("FlashSaleEndtime", endTime);
} else {
    endTime = Number(endTime);
}

document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("days")) {
        return;
    }

    const targetDate = new Date("2025-08-20T23:59:59").getTime();


    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const daysE1 = document.getElementById("days");
        const hoursE1 = document.getElementById("hours");
        const minutesE1 = document.getElementById("minutes");
        const secondsE1 = document.getElementById("seconds");


        if (distance <= 0) {
            daysE1.textContent = "00";
            hoursE1.textContent = "00";
            minutesE1.textContent = "00";
            secondsE1.textContent = "00";

            clearInterval(timer);
            return;
        }


        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);


        daysE1.textContent = String(days).padStart(2, '0');
        hoursE1.textContent = String(hours).padStart(2, '0');
        minutesE1.textContent = String(minutes).padStart(2, '0');
        secondsE1.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);
})


// Get wishlist from localStorage
function getWishlist() {
    const raw = localStorage.getItem('wishlist') || '[]';

    try {
        const list = JSON.parse(raw);
        return Array.isArray(list) ? list.filter(Boolean) : [];
    } catch (e) {
        console.error("Invalid JSON in localStorage:", raw);
        return [];
    }
}


// Save wishlist back to localStorage
function setWishlist(list) {
    const cleaned = list.filter(Boolean); // remove nulls if any
    localStorage.setItem('wishlist', JSON.stringify(cleaned));
}

// Toggle item in wishlist
function toggleWishlist(heart) {
    const productId = heart.dataset.productId;
    let wishlist = getWishlist();

    const index = wishlist.indexOf(productId);

    if (index > -1) {
        wishlist.splice(index, 1);
        heart.classList.remove('filled');
        heart.classList.remove('fa-solid');
        heart.classList.add('fa-regular');
    } else {
        wishlist.push(productId);
        heart.classList.add('filled');
        heart.classList.remove('fa-regular');
        heart.classList.add('fa-solid');
    }

    setWishlist(wishlist);
    updateWishlistCount();
}

// Update wishlist count
function updateWishlistCount() {
    const count = getWishlist().length;
    const countEl = document.getElementById('item-count');
    if (countEl) {
        countEl.innerText = count;
    }
}

// Highlight saved hearts on page load
function highlightSavedHearts() {
    const saved = new Set(getWishlist());
    document.querySelectorAll('.heart-icon').forEach(heart => {
        if (saved.has(heart.dataset.productId)) {
            heart.classList.add('filled');
            heart.classList.remove('fa-regular');
            heart.classList.add('fa-solid');
        }
    });
}

// Run on page load
updateWishlistCount();
highlightSavedHearts();


function itemColor(el) {
    document.querySelectorAll('.border-item-color').forEach(item => {
        item.classList.remove('active');
    });

    el.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const swiperContainer = document.querySelector(".mobile-swiper");

    if (swiperContainer && typeof Swiper !== "undefined") {
        const slides = parseInt(swiperContainer.dataset.slides) || 1;
        const loop = swiperContainer.dataset.loop === "true";

        new Swiper(".mobile-swiper", {
            slidesPerView: slides,
            loop: loop,
            autoplay: true,
            autoplaySpeed: 1000
        });
    }
});



// On Scroll Click arrow 
window.onscroll = function () {
    const btn = document.getElementById("scroll-up");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }

};

document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scroll-up");
    if (scrollBtn) {
        scrollBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".m-product-carousel");

    // Run only if element exists and Slick is available
    if (carousel && typeof $ !== "undefined" && typeof $.fn.slick !== "undefined") {
        $(".m-product-carousel").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            dots: true,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 768, settings: { slidesToShow: 1 } }
            ]
        });
    }
});

