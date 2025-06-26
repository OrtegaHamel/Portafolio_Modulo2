
$(document).ready(function () {
  $('.nav-link').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Efecto de animación al hacer scroll a las secciones
  $('section').hide().fadeIn(1500);
});
