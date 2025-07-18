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


// mobile-nav

function toggleMenu() {
    $('.mobile-nav').toggleClass('show');
}

// search input

$(document).ready(function () {
    $('#search-body').ready(function () {
        $('#searchbox').focus();
        $('.search-input').addClass('show');
    })

});


//sale Timer

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