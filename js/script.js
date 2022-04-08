
/* SCROLL NAVBAR */ 
$(() => {
    $('.new-card').slice(0, 4).show()
    $('.load-more').click(function (e) {
        e.preventDefault()
        $('.new-card:hidden').slice(0, 4).slideDown()
    })
})

/* ACTIVE LINK NAVBAR */ 
$(document).ready(function () {
    $('.nav-link').click(function () {
        $('.nav-link').removeClass('active')
        $(this).addClass('active')
    })
})


/* SLIDER */ 
var swiper = new Swiper(".mySwiperPopuler", {
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bxs-chevron-left-circle",
    },

});

// AOS
AOS.init();