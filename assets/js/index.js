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
    arrows: true,
    // prevArrow: '.previous-arrow',
    nextArrow:'.previous-arrow-right',
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
  });
});

$(document).ready(function () {
  $(".celsius-search-item-wrap-main-section,.previous-arrow-right").hover(function () {
    $('.previous-arrow-right').css('display','block');
  }, function () {
    $('.previous-arrow-right').hide();
  });
});
