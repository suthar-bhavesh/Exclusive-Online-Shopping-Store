// banner Carousel

$(document).ready(function () {
    $('.banner-carousel').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
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

function toggleCate() {
    $('.m-categories').toggleClass('show-categories')
}

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".hamburger");
    const nav = document.querySelector(".mobile-nav");


    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".categries-menu");
    const nav = document.querySelector(".m-categories");


    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("categories-active");
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
let endTime = localStorage.getItem("FlashSaleEnd");
if (!endTime) {
    endTime = new Date().getTime() + (4 * 24 * 60 * 60 * 1000);
    localStorage.setItem("FlashSaleEnd", endTime);
} else {
    endTime = Number(endTime);
}


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

    if (!btn) return;

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


const myform = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const username = document.querySelector('.username');
const useremail = document.querySelector('.useremail');
const usernumber = document.querySelector('.contactnumber');
const userpassword = document.querySelector('.userpassword');
const createAccountbtn = document.querySelector('.account-creation');
const fieldError = document.querySelectorAll('.error');
const logform = document.querySelector('.login-form')
const Userloginbtn = document.querySelector('.account-login')


logform.addEventListener('submit', () => {
    e.preventDefault()

    let loginError = false


    fieldError.forEach(err => err.textContent = "");


    
})


myform.addEventListener("submit", function (e) {
    e.preventDefault();

    let hasError = false;


    fieldError.forEach(err => err.textContent = "");


    if (username.value.trim() === "") {
        fieldError[0].textContent = "Please enter username";
        hasError = true;
    }

    if (useremail.value.trim() === "") {
        fieldError[1].textContent = "Please enter email";
        hasError = true;
    }


    if (usernumber.value.trim() === "") {
        fieldError[2].textContent = "Please enter number";
        hasError = true;
    }


    if (userpassword.value.trim() === "") {
        fieldError[3].textContent = "Please enter password";
        hasError = true;
    }


    if (!hasError) {
        myform.submit();
    }
});

