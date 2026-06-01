

  
  
  
  document.addEventListener('DOMContentLoaded', function() {

    /* Portfolio Carousel   */
    const filmsSwiper = new Swiper('.filmsSwiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: false,
      speed: 600,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2.2,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 2.5,
          spaceBetween: 24,
        },
      },
      navigation: {
        nextEl: '.films-next',
        prevEl: '.films-prev',
      },
    });






    document.querySelectorAll(".projectSwiper").forEach((el) => {
    const swiper = new Swiper(el, {
      loop: true,
      slidesPerView: 1,
      autoplay: false,
      speed: 650,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      pagination: {
        el: el.querySelector(".swiper-pagination"),
        clickable: true,
      },
    });

    let autoSlideInterval = null;

    el.addEventListener("mouseenter", () => {
      swiper.slideNext();
      autoSlideInterval = setInterval(() => swiper.slideNext(), 1700);
    });

    el.addEventListener("mouseleave", () => {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    });
  });

  if (typeof lucide !== 'undefined') lucide.createIcons();
  });
