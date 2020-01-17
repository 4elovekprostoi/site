  $('.main').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 5000,


  responsive: [
    {
      breakpoint: 1226,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 846,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});