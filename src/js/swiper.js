const swiper_customers = new Swiper('.customers__slider', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        dots: !1,
        infinite: !0,
        speed: 3e3,
        slidesToShow: 1,
        adaptiveHeight: !0,
        autoplay: !0,
        autoplaySpeed: 2e3,
      });
      const swiper_gallery = new Swiper('.gallery__slider', {
        //   pagination: {
        //     el: '.swiper-pagination',
        //   },
        dots: !1,
        infinite: !0,
        speed: 1e3,
        slidesToShow: 1,
        adaptiveHeight: !0,
        autoplay: !0,
        autoplaySpeed: 2e3,
      });
    