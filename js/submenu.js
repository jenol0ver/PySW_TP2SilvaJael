// Mostrar y ocultar el submenu cuando se hace clic en el botón
$('.toggle-submenu').click(function(e) {
    e.stopPropagation(); // Prevenir que el clic afecte otros elementos
    var submenu = $(this).next('.submenu'); // Selecciona el submenu correspondiente
    submenu.toggle(); // Alternar la visibilidad del submenu
});

// Ocultar el submenu si se hace clic fuera del botón o del submenu
$(document).click(function(e) {
    if (!$(e.target).closest('.dropdown-custom').length) {
        $('.submenu').hide(); // Ocultar el submenu si no se hace clic en el menú o el botón
    }
});