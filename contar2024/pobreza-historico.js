const datos = [
  {
    año: 0,
    pobrezaTotal: { porcentaje: 0, cantidad: '0' },
    indigencia: { porcentaje: 0, cantidad: '0' },
    pobreza: { porcentaje: 0, cantidad: '0' },
    poblacionTotal: '46.052.000',
    noPobres: { porcentaje: 100, cantidad: '46.052.000' }
  },
  {
    año: 2003,
    pobrezaTotal: { porcentaje: 58.2, cantidad: '22.270.000' },
    indigencia: { porcentaje: 21.1, cantidad: '8.058.000' },
    pobreza: { porcentaje: 37.1, cantidad: '14.212.000' },
    poblacionTotal: '38.115.000',
    noPobres: { porcentaje: 41.8, cantidad: '15.845.000' }
  },
  {
    año: 2004,
    pobrezaTotal: { porcentaje: 54.55, cantidad: '21.336.000' },
    indigencia: { porcentaje: 18.2, cantidad: '7.197.000' },
    pobreza: { porcentaje: 36.35, cantidad: '14.139.000' },
    poblacionTotal: '39.276.000', 
    noPobres: { porcentaje: 45.45, cantidad: '17.940.000' }
  },
  {
    año: 2005,
    pobrezaTotal: { porcentaje: 48.7, cantidad: '19.290.000' },
    indigencia: { porcentaje: 14.2, cantidad: '5.608.500' },
    pobreza: { porcentaje: 34.5, cantidad: '13.681.500' },
    poblacionTotal: '39.570.000', 
    noPobres: { porcentaje: 51.3, cantidad: '20.280.000' }
  },
  {
    año: 2006,
    pobrezaTotal: { porcentaje: 41.45, cantidad: '15.973.500' },
    indigencia: { porcentaje: 11.1, cantidad: '4.267.500' },
    pobreza: { porcentaje: 30.35, cantidad: '11.706.000' },
    poblacionTotal: '38.850.000', 
    noPobres: { porcentaje: 58.55, cantidad: '22.876.500' }
  },
  {
    año: 2007,
    pobrezaTotal: { porcentaje: 37.4, cantidad: '14.599.500' },
    indigencia: { porcentaje: 8.85, cantidad: '3.452.000' },
    pobreza: { porcentaje: 28.55, cantidad: '11.147.500' },
    poblacionTotal: '39.041.000', 
    noPobres: { porcentaje: 62.6, cantidad: '24.441.500' }
  },
  {
    año: 2008,
    pobrezaTotal: { porcentaje: 35.55, cantidad: '14.067.000' },
    indigencia: { porcentaje: 8.25, cantidad: '3.262.000' },
    pobreza: { porcentaje: 27.3, cantidad: '10.805.000' },
    poblacionTotal: '39.243.000', 
    noPobres: { porcentaje: 64.45, cantidad: '25.176.000' }
  },
  {
    año: 2009,
    pobrezaTotal: { porcentaje: 33.7, cantidad: '13.267.500' },
    indigencia: { porcentaje: 7.75, cantidad: '3.051.000' },
    pobreza: { porcentaje: 25.95, cantidad: '10.216.500' },
    poblacionTotal: '39.417.000', 
    noPobres: { porcentaje: 66.3, cantidad: '26.149.500' }
  },
  {
    año: 2010,
    pobrezaTotal: { porcentaje: 32.25, cantidad: '12.925.000' },
    indigencia: { porcentaje: 7.55, cantidad: '3.024.500' },
    pobreza: { porcentaje: 24.7, cantidad: '9.900.500' },
    poblacionTotal: '40.117.096',
    noPobres: { porcentaje: 67.75, cantidad: '27.192.096' }
  },
  {
    año: 2011,
    pobrezaTotal: { porcentaje: 28.7, cantidad: '11.385.000' },
    indigencia: { porcentaje: 6.4, cantidad: '2.539.000' },
    pobreza: { porcentaje: 22.3, cantidad: '8.846.000' },
    poblacionTotal: '40.320.000', 
    noPobres: { porcentaje: 71.3, cantidad: '28.935.000' }
  },
  {
    año: 2012,
    pobrezaTotal: { porcentaje: 27.8, cantidad: '11.378.500' },
    indigencia: { porcentaje: 6.25, cantidad: '2.553.500' },
    pobreza: { porcentaje: 21.55, cantidad: '8.825.000' },
    poblacionTotal: '40.508.000', 
    noPobres: { porcentaje: 72.2, cantidad: '29.129.500' }
  },
  {
    año: 2013,
    pobrezaTotal: { porcentaje: 27.45, cantidad: '11.419.500' },
    indigencia: { porcentaje: 5.85, cantidad: '2.432.000' },
    pobreza: { porcentaje: 21.6, cantidad: '8.987.500' },
    poblacionTotal: '40.730.000', 
    noPobres: { porcentaje: 72.55, cantidad: '29.310.500' }
  },
  {
    año: 2014,
    pobrezaTotal: { porcentaje: 31.25, cantidad: '12.973.000' },
    indigencia: { porcentaje: 6.55, cantidad: '2.719.500' },
    pobreza: { porcentaje: 24.7, cantidad: '10.253.500' },
    poblacionTotal: '41.021.000', 
    noPobres: { porcentaje: 68.75, cantidad: '28.048.000' }
  },
  {
    año: 2015,
    pobrezaTotal: { porcentaje: 30.1, cantidad: '12.738.000' },
    indigencia: { porcentaje: 5.9, cantidad: '2.501.000' },
    pobreza: { porcentaje: 24.2, cantidad: '10.237.000' },
    poblacionTotal: '41.377.000', 
    noPobres: { porcentaje: 69.9, cantidad: '28.639.000' }
  },
  {
    año: 2016,
    pobrezaTotal: { porcentaje: 30.85, cantidad: '12.875.500' },
    indigencia: { porcentaje: 6.25, cantidad: '2.610.500' },
    pobreza: { porcentaje: 24.6, cantidad: '10.265.000' },
    poblacionTotal: '41.701.000', 
    noPobres: { porcentaje: 69.15, cantidad: '28.825.500' }
  },
  {
    año: 2017,
    pobrezaTotal: { porcentaje: 27.15, cantidad: '11.038.000' },
    indigencia: { porcentaje: 5.5, cantidad: '2.235.500' },
    pobreza: { porcentaje: 21.65, cantidad: '8.802.500' },
    poblacionTotal: '42.006.000', 
    noPobres: { porcentaje: 72.85, cantidad: '30.968.000' }
  },
  {
    año: 2018,
    pobrezaTotal: { porcentaje: 29.65, cantidad: '11.691.500' },
    indigencia: { porcentaje: 5.8, cantidad: '2.288.000' },
    pobreza: { porcentaje: 23.85, cantidad: '9.403.500' },
    poblacionTotal: '42.399.000', 
    noPobres: { porcentaje: 70.35, cantidad: '30.707.500' }
  },
  {
    año: 2019,
    pobrezaTotal: { porcentaje: 35.45, cantidad: '14.729.000' },
    indigencia: { porcentaje: 7.85, cantidad: '3.262.000' },
    pobreza: { porcentaje: 27.6, cantidad: '11.467.000' },
    poblacionTotal: '44.278.000', 
    noPobres: { porcentaje: 64.55, cantidad: '29.549.000' }
  },
  {
    año: 2020,
    pobrezaTotal: { porcentaje: 41.45, cantidad: '17.106.000' },
    indigencia: { porcentaje: 10.5, cantidad: '4.335.000' },
    pobreza: { porcentaje: 30.95, cantidad: '12.771.000' },
    poblacionTotal: '44.859.000', 
    noPobres: { porcentaje: 58.55, cantidad: '27.753.000' }
  },
  {
    año: 2021,
    pobrezaTotal: { porcentaje: 38.95, cantidad: '16.954.500' },
    indigencia: { porcentaje: 9.45, cantidad: '4.116.500' },
    pobreza: { porcentaje: 29.5, cantidad: '12.838.000' },
    poblacionTotal: '45.206.000', 
    noPobres: { porcentaje: 61.05, cantidad: '28.251.500' }
  },
  {
    año: 2022,
    pobrezaTotal: { porcentaje: 37.85, cantidad: '16.821.000' },
    indigencia: { porcentaje: 8.45, cantidad: '3.755.000' },
    pobreza: { porcentaje: 29.4, cantidad: '13.066.000' },
    poblacionTotal: '46.044.703',  // Censo 2022 oficial
    noPobres: { porcentaje: 62.15, cantidad: '29.223.703' }
  },
  {
    año: 2023,
    pobrezaTotal: { porcentaje: 40.9, cantidad: '17.910.000' },
    indigencia: { porcentaje: 10.6, cantidad: '4.640.500' },
    pobreza: { porcentaje: 30.3, cantidad: '13.269.500' },
    poblacionTotal: '45.645.000', 
    noPobres: { porcentaje: 59.1, cantidad: '27.735.000' }
  },
  {
    año: 2024,
    pobrezaTotal: { porcentaje: 52.9, cantidad: '24.455.670' },
    indigencia: { porcentaje: 18.1, cantidad: '8.367.630' },
    pobreza: { porcentaje: 34.8, cantidad: '16.088.040' },
    poblacionTotal: '46.052.000', 
    noPobres: { porcentaje: 47.1, cantidad: '21.596.330' }
  }
];


function updateYear(selectedYear) {
  document.getElementById('selectedYear').innerText = selectedYear;
  document.getElementById('yearRangeSelected').innerText = selectedYear;

  const data = datos.find(d => d.año == selectedYear);
  
  if (data) {
    let pobrezaHeight = data.pobreza.porcentaje;
    let indigenciaHeight = data.indigencia.porcentaje;
    let middleStripeHeight = 100 - pobrezaHeight - indigenciaHeight;

    document.getElementById('pobreza').style.setProperty('--flag__stripe--height', pobrezaHeight + '%');
    document.getElementById('indigencia').style.setProperty('--flag__stripe--height', indigenciaHeight + '%');
    document.getElementById('oportunidades').style.setProperty('--flag__stripe--height', middleStripeHeight + '%');
    
    const porcentajePobrezaTotal = document.getElementById('porcentaje-pobrezaTotal');
    const porcentajePobreza = document.getElementById('porcentaje-pobreza');
    const porcentajeIndigencia = document.getElementById('porcentaje-indigencia');
    const porcentajeNoPobres = document.getElementById('porcentaje-noPobres');

    const personasPobrezaTotal = document.getElementById('personas-pobrezaTotal');
    const personasPobreza = document.getElementById('personas-pobreza');
    const personasIndigencia = document.getElementById('personas-indigencia');
    const personasNoPobres = document.getElementById('personas-noPobres');

    personasPobreza.textContent = `${data.pobreza.cantidad} personas`;
    personasPobrezaTotal.textContent = `${data.pobrezaTotal.cantidad} personas`;
    personasIndigencia.textContent = `${data.indigencia.cantidad} personas`;
    personasNoPobres.textContent = `${data.noPobres.cantidad} personas`;

    const holderPorcentajePob = document.querySelector('.flag__output--top');
    const holderPorcentajeNoPobres = document.querySelector('.flag__output--middle');
    const holderPorcentajeInd = document.querySelector('.flag__output--bottom');
    const holderPorcentajePobTotal = document.querySelector('.flag__output');
    
    porcentajePobrezaTotal.textContent = `${data.pobrezaTotal.porcentaje}%`;
    porcentajePobreza.textContent = `${data.pobreza.porcentaje}%`;
    porcentajeIndigencia.textContent = `${data.indigencia.porcentaje}%`;
    porcentajeNoPobres.textContent = `${data.noPobres.porcentaje}%`;

    holderPorcentajePobTotal.textContent = `${data.poblacionTotal} hab.`;
    holderPorcentajePob.textContent = `${data.pobreza.porcentaje}%`;
    holderPorcentajeInd.textContent = `${data.indigencia.porcentaje}%`;
    holderPorcentajeNoPobres.textContent = `${data.noPobres.porcentaje}%`;
   

    
    // Blink effect
    const slider = document.getElementById('yearRange');

    slider.onchange = function () {
      document.querySelector('.flag__stripe--bottom').classList.add('stripe__blink--bottom');
      document.querySelector('.flag__stripe--top').classList.add('stripe__blink--top');
      const bottomStripe = document.getElementById('indigencia');
      const topStripe = document.getElementById('pobreza');
        setTimeout(function() {
          bottomStripe.classList.remove('stripe__blink--bottom');
          topStripe.classList.remove('stripe__blink--top');
      }, 3000);
    }
  }
}

updateYear(2003);

// Reset
document.getElementById("resetBtn").addEventListener("click", function() {
  const rangeInput = document.getElementById("yearRange");
  rangeInput.disabled = false;
  rangeInput.value = 0;
  updateYear(2003);
})

// Pobreza 0%
document.getElementById("pobrezaCero").addEventListener("click", function() {
  const rangeInput = document.getElementById("yearRange");
  rangeInput.disabled = true;
  rangeInput.value = 0;
  updateYear(0);
  
  const topStripe =  document.getElementById('pobreza');
  const bottomStripe =  document.getElementById('indigencia');
  bottomStripe.classList.remove('stripe__blink--bottom');
  topStripe.classList.remove('stripe__blink--top');

  let pobrezaHeight = 0;
  let indigenciaHeight = 0;
  let middleStripeHeight = 100 - pobrezaHeight - indigenciaHeight;

  document.getElementById('pobreza').style.setProperty('--flag__stripe--height', pobrezaHeight + '%');
  document.getElementById('indigencia').style.setProperty('--flag__stripe--height', indigenciaHeight + '%');
  document.getElementById('oportunidades').style.setProperty('--flag__stripe--height', middleStripeHeight + '%');


  const porcentajePobrezaTotal = document.getElementById('porcentaje-pobrezaTotal');
  const porcentajePobreza = document.getElementById('porcentaje-pobreza');
  const porcentajeIndigencia = document.getElementById('porcentaje-indigencia');
  const porcentajeNoPobres = document.getElementById('porcentaje-noPobres');

  const personasPobrezaTotal = document.getElementById('personas-pobrezaTotal');
  const personasPobreza = document.getElementById('personas-pobreza');
  const personasIndigencia = document.getElementById('personas-indigencia');
  const personasNoPobres = document.getElementById('personas-noPobres');

  personasPobreza.textContent = `${data[0].pobreza.cantidad} personas`;
  personasPobrezaTotal.textContent = `${data[0].pobrezaTotal.cantidad} personas`;
  personasIndigencia.textContent = `${data[0].indigencia.cantidad} personas`;
  personasNoPobres.textContent = `${data[0].noPobres.cantidad} personas`;

  const holderPorcentajePob = document.querySelector('.flag__output--top');
  const holderPorcentajeNoPobres = document.querySelector('.flag__output--middle');
  const holderPorcentajeInd = document.querySelector('.flag__output--bottom');
  const holderPorcentajePobTotal = document.querySelector('.flag__output');
  
  porcentajePobrezaTotal.textContent = `${data[0].pobrezaTotal.porcentaje}%`;
  porcentajePobreza.textContent = `${data[0].pobreza.porcentaje}%`;
  porcentajeIndigencia.textContent = `${data[0].indigencia.porcentaje}%`;
  porcentajeNoPobres.textContent = `${data[0].noPobres.porcentaje}%`;

  holderPorcentajePobTotal.textContent = `${data[0].poblacionTotal} hab.`;
  holderPorcentajePob.textContent = `${data[0].pobreza.porcentaje}%`;
  holderPorcentajeInd.textContent = `${data[0].indigencia.porcentaje}%`;
  holderPorcentajeNoPobres.textContent = `${data[0].noPobres.porcentaje}% oportunidades`;
});
  