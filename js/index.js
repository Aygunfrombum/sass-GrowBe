$(document).ready(function () {
  $(".clients-slider").slick({
    centerMode: true,
    dots: true,
    slidesToShow: 2,
    initialSlide: 1,
    arrows: false,
    centerPadding: "280px",
    infinite: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".news-slider").slick({
    centerMode: true,
    dots: true,
    slidesToShow: 1,
    initialSlide: 1,
    arrows: false,
    centerPadding: "350px",
    infinite: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
    ],
  });
});
