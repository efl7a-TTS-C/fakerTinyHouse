  $('.slick-slider').slick({
    // dots: false,
    infinite: true,
    // speed: 300,
    draggable: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ".slick-prev.slick-custom-arrow",
    nextArrow: ".slick-next.slick-custom-arrow",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  