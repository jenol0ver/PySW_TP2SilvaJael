$(document).ready(function() {
    // Filtro por tags
    $('.filtro-btn').click(function() {
      var filtro = $(this).data('filtro');
      $('.filtro-btn').removeClass('btn-primary').addClass('btn-outline-secondary');
      $(this).removeClass('btn-outline-secondary').addClass('btn-primary');
      if (filtro === 'todas') {
        $('.blog-article').fadeIn();
      } else {
        $('.blog-article').hide().filter(function() {
          return $(this).data('tags').includes(filtro);
        }).fadeIn();
      }
    });
  
    // Destacar comentario
    $('.highlight-btn').click(function() {
      $(this).closest('.comment').toggleClass('highlight');
    });
  
    // Iniciales de avatar dinámicas (opcional)
    $('.comment').each(function() {
      var name = $(this).find('.fw-semibold').text().trim();
      var initial = name.charAt(0).toUpperCase();
      $(this).find('.avatar').text(initial);
    });
  
    // Scroll reveal con AOS
    AOS.init({
      duration: 800,
      once: true
     });
    
    // Mostrar formulario de respuesta al hacer click en "Responder"
    $('.reply-btn').on('click', function () {
        const comentario = $(this).closest('.comment');
        // Evita agregar más de un formulario
        if (comentario.next('.form-respuesta').length === 0) {
        comentario.after(`
            <form class="form-respuesta mt-2 ms-5">
            <input type="text" class="form-control mb-2" placeholder="Escribí tu respuesta...">
            <button type="submit" class="btn btn-sm btn-primary">Enviar</button>
            </form>
        `);
        }
    });
  
  // Enviar respuesta (opcional: prevent default + mostrar feedback)
  $(document).on('submit', '.form-respuesta', function (e) {
    e.preventDefault();
    alert('Respuesta enviada ✨');
    $(this).remove();
  });
  });