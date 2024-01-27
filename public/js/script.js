/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('callback - particles.js config loaded');
});
/* Bulma load navburger */
$(document).ready(function () {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });
});

// /* Loading for Animate.css animations*/
// $(document).ready(function() {
//   // Check if element is scrolled into view
//   function isScrolledIntoView(elem) {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
//   }
//   // If element is scrolled into view, fade it in
//   $(window).scroll(function() {
//     $('.scroll-animations .animated').each(function() {
//       if (isScrolledIntoView(this) === true) {
//         $(this).removeClass('hidden')
//         $(this).addClass('slideInUp');

//       }
//     });
//   });
// }); 

/* Preloader */


$(document).ready(function () {
  setTimeout(function () {
    document.getElementById('preloader').style['display'] = 'none';
    document.getElementById('loader').style['display'] = 'none';
  }, 1500);
});


