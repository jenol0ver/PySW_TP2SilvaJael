$(".card-hover").hover(
    function () {
      $(this).find(".card-overlay").fadeIn(200);
    },
    function () {
      $(this).find(".card-overlay").fadeOut(200);
    }
  );

  $(document).ready(function () {
      const $grid = $('.row[data-masonry]');

      $grid.imagesLoaded(function () {
        $grid.masonry({
          itemSelector: '.masonry-item',
          percentPosition: true,
          columnWidth: '.grid-sizer'
        });
      });

      $('.filtro-btn').on('click', function () {
  const filtro = $(this).data('filtro');

  $('.filtro-btn').removeClass('btn-primary').addClass('btn-outline-primary');
  $(this).removeClass('btn-outline-primary').addClass('btn-primary');

  if (filtro === 'todas') {
    $('.masonry-item').show();
  } else {
    $('.masonry-item').hide();
    $('.masonry-item.' + filtro).show();
  }

  $grid.masonry('layout');
});
    });
