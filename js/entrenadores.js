$(document).ready(function(){
    // Flip en móvil (click)
    $('.flip-card').on('click', function(){
      $(this).toggleClass('flipped');

      $(this).find('.progress-bar').each(function () {
        const $bar = $(this);
        const valor = $bar.data('value');
        $bar.animate({ width: valor + '%' }, 800);
      });
    });
      
    // También activamos animación en hover por si se usa en desktop
    $('.flip-card').on('mouseenter', function () {
      $(this).find('.progress-bar').each(function () {
        const $bar = $(this);
        const valor = $bar.data('value');
        $bar.animate({ width: valor + '%' }, 800);
      });
    });

    $('.star-rating input[type="radio"]').on('change', function () {
        const valor = $(this).val();
        // Busca el span dentro de .rating-value en el .star-rating actual
        $(this).closest('.star-rating').find('.rating-value span').text(valor);
    });
    
      // Mostrar hover activo en móviles
      $('.star-rating label').on('click', function () {
        $(this).prevAll().addBack().css('color', '#FFC107');
        $(this).nextAll().css('color', '#bbb');
      });
});