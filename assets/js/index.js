// function menuWrapper() {
//   console.log('hello world');
//   var x = document.getElementById("primary-menu");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

function closeIcons(){
  var y = document.getElementById('primary-id-items1');
  var z = document.getElementById('primary-id-items2');
  var w = document.getElementById('celsius-header-search-icons');
  var A = document.getElementById('celsius-header-close-icons');
  y.style.display = "block";
  z.style.display = "none";
   w.style.display = 'block';
   A.style.display = 'none';
   }
function searchIcon() {
  console.log('hello world');
  var y = document.getElementById('primary-id-items1');
  var z = document.getElementById('primary-id-items2');
  var w = document.getElementById('celsius-header-search-icons');
  var A = document.getElementById('celsius-header-close-icons');
    y.style.display = "none";
    z.style.display = "block";
    w.style.display = 'none';
  A.style.display = 'block';
}
