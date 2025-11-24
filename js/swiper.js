var swiper = new Swiper(".logo-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 4000, // Slow continuous speed
    autoplay: {
        delay: 0, // No delay for continuous effect 
        disableOnInteraction: false,
        // pauseOnMouseEnter: true, // Pause when user hovers
    },
    breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
        1400:{
            slidesPerView: 9,
            spaceBetween: 30,
        }
    },
    allowTouchMove: true, // Allow manual swipe
});

var mobileLogoSwiper = new Swiper(".mobile-logo-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    speed: 4000, // Slow continuous speed
    autoplay: {
        delay: 0, // No delay for continuous effect 
        disableOnInteraction: false,
        reverseDirection: true,
        // pauseOnMouseEnter: true, // Pause when user hovers
    },
    breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
    allowTouchMove: true, // Allow manual swipe
});


// Initialize Swiper for Web Projects (NEW)
var webSwiper = new Swiper(".web-project-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 600,
    navigation: {
        nextEl: ".web-next",
        prevEl: ".web-prev",
    },
    pagination: {
        el: ".project-swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }
});

// Initialize Swiper for Testimonials
var testimonialSwiper = new Swiper(".testimonial-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 800, // Standard smooth ease
    autoplay: {
        delay: 5000, // Wait 5 seconds to read
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".testimonial-swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }
});