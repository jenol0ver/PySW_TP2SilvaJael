$(document).ready(function () {

    // Bootstrap validation
    (() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();

    $('#contactForm').on('submit', function (e) {
      if (this.checkValidity() === false) {
        // Si el formulario es inválido, no mostramos el spinner
        return;
      }
      e.preventDefault();
  
      // Mostrar spinner y desactivar botón
      $('#spinner').removeClass('d-none').fadeIn(200);
      $('#submitBtn').prop('disabled', true);
  
      // Simula envío (reemplaza por tu AJAX si lo necesitas)
      setTimeout(function () {
        $('#spinner').fadeOut(200, function () {
          $(this).addClass('d-none');
        });
        $('#submitBtn').prop('disabled', false);
  
        // Mostrar modal de confirmación y resetear formulario
        var confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
        confirmModal.show();
        $('#contactForm')[0].reset();
        $('#contactForm').removeClass('was-validated');
      }, 2000);
    });
  
    // Bootstrap validation visual
    $('#contactForm').on('submit', function (event) {
      if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      $(this).addClass('was-validated');
    });
  });



