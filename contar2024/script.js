  window.onload = function() {
    const selectElement = document.getElementById("regionSelect");
    const selectElement2 = document.getElementById("customSelect");
    selectElement.value = "Seleccione una ciudad o región";
    selectElement2.value = "Seleccione una ciudad o región";
    actualizarBanderaPorRegion('regionSelect');
    actualizarBanderaPorRegion('customSelect');
  };
