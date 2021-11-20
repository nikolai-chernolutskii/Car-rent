$(function () {

    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        fade: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                dots: false
              }
            },
          ]
    });

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1171,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            }
          },
          {
            breakpoint: 871,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            }
          },
          {
            breakpoint: 601,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
          },
        ]
    });

    // $('.menu__btn').on('click', function(){
    //     $('.menu__list').toggleClass('menu__list--active');
    // });

    $('.menu__btn').on('click', function(){
      $('.menu__list').slideToggle();
  });

    $('.menu__btn').on('click', function(){
      $('.top__text').toggleClass('top__text--disabled')
  });
});