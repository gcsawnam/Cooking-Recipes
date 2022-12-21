$(document).ready(function () {
  $(".celsius-header-search-icons").click(function () {
    $(this).css("display", "none");
    $("#primary-id-items1").css("display", "none");
    $("#primary-id-items2").css("display", "block");
    $("#celsius-header-close-icons").css("display", "block");
  }),
    $("#celsius-header-close-icons").click(function () {
      $(this).css("display", "none");
      $("#primary-id-items1").css("display", "block");
      $("#primary-id-items2").css("display", "none");
      $(".celsius-header-search-icons").css("display", "block");
    });
});

$(document).ready(function () {
  $(".celsius-search-item-wrap-main-section").slick({
    infinite: true,
    speed: 300,
   arrows:true,

    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    
  
  });


  $(".celsius-search-second-item-wrap-main-section").slick({
    infinite: true,
    speed: 300,
   arrows:true,

    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
  });
});


$('.slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  if (nextSlide === 0) {
    $('.slick-prev').hide();
    $('.slick-next').show();
  } else if (nextSlide === slick.slideCount - 1) {
    $('.slick-prev').show();
    $('.slick-next').hide();
  } else {
    $('.slick-prev').show();
    $('.slick-next').show();
  }
});
console.log('hello world');

$('.slick-prev').click(function() {
  $('.celsius-search-item-wrap-main-section').slick('.slick-prev');
});

$('.slick-next').click(function() {
  $('.celsius-search-item-wrap-main-section').slick('.slick-next');
});






