const swiper = new Swiper('.mySwiper', {
    loop: true, // Безкінечний свайп
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Кружечки клікабельні
    },
    autoplay: {
        delay: 3000, // Автоперемикання кожні 3 секунди
        disableOnInteraction: false,
    },
    slidesPerView: 1, // Один слайд на екрані
    breakpoints: {
        768: {
            slidesPerView: 2, // На середніх екранах — 2 слайди
        },
        1024: {
            slidesPerView: 3, // На великих екранах — 3 слайди
        },
    },
});
