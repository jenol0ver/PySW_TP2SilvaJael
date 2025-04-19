$(document).ready(function(){
  $('.tabla-planes td, .tabla-planes th[scope="row"]').hover(function(){
    var $cell = $(this);
    var colIndex = $cell.index() + 1; // +1 por selector nth-child (1-based)
    // Resalta fila
    $cell.closest('tr').addClass('table-active');
    // Resalta columna
    $('.tabla-planes tr').each(function(){
      $(this).find('td:nth-child(' + colIndex + '), th:nth-child(' + colIndex + ')').addClass('table-active');
    });
  }, function(){
    var $cell = $(this);
    var colIndex = $cell.index() + 1;
    // Quita resalte de fila
    $cell.closest('tr').removeClass('table-active');
    // Quita resalte de columna
    $('.tabla-planes tr').each(function(){
      $(this).find('td:nth-child(' + colIndex + '), th:nth-child(' + colIndex + ')').removeClass('table-active');
    });
  });

    // Precios de ejemplo (ajusta si lo deseas)
    const precios = {
      anual: {
        basico: "$24000",
        premium: "$36000",
        elite: "$48000"
      },
      mensual: {
        basico: "$2500",
        premium: "$3400",
        elite: "$4400"
      }
    };
  
    // Tabla: precios con /año o /mes
    function actualizarPrecios(tipo) {
        $(".precio-básico").text(tipo === "anual" ? precios.anual.basico : precios.mensual.basico);
        $(".precio-premium").text(tipo === "anual" ? precios.anual.premium : precios.mensual.premium);
        $(".precio-elite").text(tipo === "anual" ? precios.anual.elite : precios.mensual.elite);
        $(".unidad-precio").text(tipo === "anual" ? "/año" : "/mes");
      }
  
    // Detecta cambios en el toggle
    $("#toggle-precio").on("change", function() {
      if ($(this).is(":checked")) {
        actualizarPrecios("anual");
      } else {
        actualizarPrecios("mensual");
      }
    });
  
    // Inicializa con anual (por si recargas)
    actualizarPrecios($("#toggle-precio").is(":checked") ? "anual" : "mensual");
});