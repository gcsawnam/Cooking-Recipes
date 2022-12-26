$(document).ready(function () {
  $(".celsius-header-search-icons").click(function () {
    $(this).css("display", "none");
    $("body").fadeTo("slow", 0.5);
    $("#primary-id-items1").css("display", "none");
    $("#primary-id-items2").css("display", "block");
    $("#celsius-header-close-icons").css("display", "block");
  }),
    $("#celsius-header-close-icons").click(function () {
      $(this).css("display", "none");
      $("body").fadeTo("slow", 1);
      $("#primary-id-items1").css("display", "block");
      $("#primary-id-items2").css("display", "none");
      $(".celsius-header-search-icons").css("display", "block");
    }),
 $(".celsius-search-item-wrap-main-section").slick({
    infinite: false,
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    draggable: false,
    adaptiveHeight: true,
  }),
  $(".celsius-search-second-item-wrap-main-section").slick({
    infinite: false,
    speed: 300,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
  });
});
