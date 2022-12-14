// $('.celsius-search-item-wrap-main-section ').slick();

$(document).ready(function(){
$('.celsius-header-search-icons').click(function(){
  $(this).css('display','none');
  $('#primary-id-items1').css('display','none');
  $('#primary-id-items2').css('display','block');
  $('#celsius-header-close-icons').css('display','block');
  }),
  $('#celsius-header-close-icons').click(function(){
    $(this).css('display','none');
    $('#primary-id-items1').css('display','block');
    $('#primary-id-items2').css('display','none');
  $('.celsius-header-search-icons').css('display','block');
 })
});



     



