$(document).ready(function () {
//  document.getElementsByClassName('celsius-header-search-icons');
 $('.celsius-header-heart-icon').click(function(e){
 e.preventDefault();
  var test=$('.celsius-header-heart-icon').parentElement;
console.log(test);
 })


//   $("body").click(function(e) {
//     if ($(e.target).attr('id') == 'main-head') {
//         return;
//     } else {
//         $('#main-head').fadeTo("slow", 0.5);
//     }
// });



  $(".fa-search").click(function (e) {
  e.preventDefault();

    $(".celsius-navbar-searchIcons").css("display", "block");
    $(".celsius-header-search-icons .fa-search").css("display","none");
    // $("body").fadeTo("slow", 0.5);
    // $("body").addClass("celsius-whole-overlay");
    $("#primary-id-items1").css("display", "none");
    $(".celsius-header-heart-icon,.celsius-dropdown").css("visibility", "hidden");

    $("#primary-id-items2").css("display", "block");
    $(".close-icons").css("display", "block");
   $('.celsius-overlay-menu-bar,.celsius-cooking-site-branding,.celsius-dropdown ,.celsius-header-heart-icon ').addClass('menu-item-display');
   $('.celsius-header-right-items ').addClass('menu-item-display1');
     

  }),
    $(".fa-xmark").click(function (e) {
  e.preventDefault();

      $(".close-icons").css("display", "none");
      // $("body").fadeTo("slow", 1);
    // $("body").removeClass("celsius-whole-overlay");
    $(".celsius-header-search-icons .fa-search").css("display","block");
  
      $("#primary-id-items1").css("display", "block");
      $(".celsius-header-heart-icon,.celsius-dropdown").css("visibility","visible");

      $("#primary-id-items2").css("display", "none");
      $(".celsius-header-search-icons").css("display", "block");
   $('.celsius-overlay-menu-bar,.celsius-cooking-site-branding,.celsius-dropdown ,.celsius-header-heart-icon ').removeClass('menu-item-display');
   $('.celsius-header-right-items ').removeClass('menu-item-display1');
    
    }),
      $('body').click(function()
      {})




    $("#celsius-overlay1").click(function () {
      $("body").removeClass("celsius-whole-overlay");
 

    }),



    $(".celsius-overlay-menu-bar").click(function () {
      $(".menuitems , #primary-id-items1").css("left", "0vw");
  }),
       $(".fa-angle-down").click(function () {
         $("#recipes-items").toggle(); 
       }),
       $(".fa-xmark").click(function () {

      $(".menuitems , #primary-id-items1").css("left", "-100vw");
  }),
 $(".celsius-search-item-wrap-main-section,.celsius-search-second-item-wrap-main-section").slick({
    infinite: false,
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    draggable: false,
    adaptiveHeight: true,
  })
});




 
  