
function iniciarContadores() {
    $(".numero").each(function () {
      const $this = $(this);
      const objetivo = parseInt($this.attr("data-objetivo"));
      let actual = 0;
      const duracion = 2000; // duración total en ms
      const intervalo = 30; // intervalo entre actualizaciones
      const incremento = Math.ceil(objetivo / (duracion / intervalo));

      const contador = setInterval(() => {
        actual += incremento;
        if (actual >= objetivo) {
          actual = objetivo;
          clearInterval(contador);
        }
        $this.text(actual);
      }, intervalo);
    });
}

$(document).ready(function() {
    // Animaciones para el overlay del hero
    $('.hero .overlay').hide().delay(500).fadeIn(1000);
    
    // Animar cada palabra del título de manera secuencial
    $('.hero .fade-word').each(function(index) {
        $(this).hide().delay(1000 + (index * 500)).slideDown(800);
    });
    
    // Animar el texto y el botón después del título
    $('.hero p').hide().delay(2500).slideDown(800);
    $('.hero .btn-primary').hide().delay(2700).slideDown(800);

    // Animaciones para las cards de clases destacadas
    $('.clases-destacadas .card').hover(
        function() {
            $(this).stop().animate({
                marginTop: '-10px',
                boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
            }, 300);
        },
        function() {
            $(this).stop().animate({
                marginTop: '0',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }, 300);
        }
    );

    // Pausa el carrusel al hacer hover
    $('.testimonial-card').hover(
        function() {
            $('#testimonialCarousel').carousel('pause');
        },
        function() {
            $('#testimonialCarousel').carousel('cycle');
        }
    );

    // Ajustar la velocidad del carrusel
    $('#testimonialCarousel').carousel({
        interval: 3000 // 3 segundos entre cambios
    });

    // Funcionalidad del formulario de suscripción
    $(".suscripcion-form").submit(function (e) {
        e.preventDefault();
    
        const $form = $(this);
        const $btn = $form.find(".submit-btn");
        const $spinner = $btn.find(".spinner-border");
        const $text = $btn.find("span.ms-2");

        $spinner.removeClass("d-none");
        $text.text("Enviando...");
        $btn.prop("disabled", true);
    
        setTimeout(function () {
          $spinner.addClass("d-none");
          $text.text("Suscribirse");
          $btn.prop("disabled", false);

          alert("¡Gracias por suscribirte! 📨");
        }, 2000);
      });
});

// Usar IntersectionObserver para que el contador empiece al entrar en vista
const observer = new IntersectionObserver(
    function (entries, observer) {
      if (entries[0].isIntersecting) {
        iniciarContadores();
        observer.unobserve(entries[0].target);
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(document.querySelector(".contadores"));

