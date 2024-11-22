
// Tooltip
includeHTML(() => {
    document.addEventListener("DOMContentLoaded", () => {
      const tooltipWrapper = document.querySelectorAll('.tooltip__wrapper');
      const tooltipPobreza = document.getElementById('tooltip-pobreza');
      const tooltipOportunidades = document.getElementById('tooltip-pobreza');
      const tooltipIndigencia = document.getElementById('tooltip-pobreza');
    
      tooltipWrapper.addEventListener('click', (event) => {
        event.stopPropagation();
        tooltipPobreza.style.visibility = 'visible';
        tooltipPobreza.style.opacity = '1';
        tooltipOportunidades.style.visibility = 'visible';
        tooltipOportunidades.style.opacity = '1';
        tooltipIndigencia.style.visibility = 'visible';
        tooltipIndigencia.style.opacity = '1';
      });
    
      document.addEventListener('click', () => {
        tooltipPobreza.style.visibility = 'hidden';
        tooltipPobreza.style.opacity = '0';
        tooltipOportunidades.style.visibility = 'hidden';
        tooltipOportunidades.style.opacity = '0';
        tooltipIndigencia.style.visibility = 'hidden';
        tooltipIndigencia.style.opacity = '0';
      });
    
      tooltipWrapper.addEventListener('mouseleave', () => {
        tooltipPobreza.style.visibility = 'hidden';
        tooltipPobreza.style.opacity = '0';
        tooltipOportunidades.style.visibility = 'hidden';
        tooltipOportunidades.style.opacity = '0';
        tooltipIndigencia.style.visibility = 'hidden';
        tooltipIndigencia.style.opacity = '0';
      });
    });
  }
)
