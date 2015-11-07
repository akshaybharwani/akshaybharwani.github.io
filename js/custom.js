$(document).ready(function () {
   $('.mainWrapper').hide();
  
  var top = $('#work').offset().top;
  
  if (window).scroll(function() {
      if($(window).scrollTop() > top) {
          $('navName').show(200);
      }
  });
});