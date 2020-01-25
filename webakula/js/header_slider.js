$('.header_slider').slick({
  dots: false,
  infinite: true,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  arrows: false,
  pauseOnFocus: false,
  swipe: false,
  responsive: [
  {
    breakpoint: 992,
    settings: {
      autoplay: false,
    }
  }
  ]
});
