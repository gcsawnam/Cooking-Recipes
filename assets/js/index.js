$(document).ready(function () {
  let isSearchclick = false;
  const Search = document.querySelector(".celsius-header-search-icons");
  const SearchBtn = document.createElement("img");
  
  SearchBtn.classList.add("search_icon");
  SearchBtn.src = "./assets/images/magnifying-glass-solid.svg";
  Search.appendChild(SearchBtn);

  $(".celsius-header-search-icons").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    isSearchclick
    ? (SearchBtn.src = "./assets/images/magnifying-glass-solid.svg")
    : (SearchBtn.src = "./assets/images/circle-xmark-solid.svg");

    
    isSearchclick
    ? $(".celsius-cooking-navbar-items").css("display","flex")
     
    :$(".celsius-cooking-navbar-items").css("display","none");

    isSearchclick
    ? $("#primary-id-items2").css("display","none")
     
    :$("#primary-id-items2").css("display","block");

    isSearchclick
    ? $(".celsius-cooking-site-branding").removeClass("branding") 
    : $(".celsius-cooking-site-branding").addClass("branding");

    isSearchclick = !isSearchclick;
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
    $(
      ".celsius-search-item-wrap-main-section,.celsius-search-second-item-wrap-main-section"
    ).slick({
      infinite: false,
      speed: 300,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      draggable: false,
      adaptiveHeight: true,
    });
});
