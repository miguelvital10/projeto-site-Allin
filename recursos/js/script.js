$(document).ready(function () {
  $(".nav-bar").on("click", function () {
    $(".menu-lateral").toggleClass("active");
    $(".nav-bar i").toggleClass("fa-xmark fa-bars-staggered");
  });

  $(".videos .itens").slick({
    dots: true,
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
