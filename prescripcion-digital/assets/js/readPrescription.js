// Vista resumen
displaySummary = () => {
    prescription.forEach((localPrescription, i) => containerSummary.innerHTML += 
    ` For the following drug:
      <p id="drugName"><b>${localPrescription.nombreComercial}</b></p>
      You will take
      <span>
      <p id="drugCount--${i}"></p>
      <p id="drugType">${localPrescription.presentacion.formaFarmaceutica}</p>
      </span>
      for
      <p id="drugLapse--${i}"></p>
      <p id="timeFormat--${i}"></p>
      starting on
      <h5 id="startDateHolder--${i}" class="startDateHolder"></h5>
      up to
      <h5 id="endDateHolder--${i}" class="endDateHolder"></h5>
      `
    )
  }
  
  displaySummary() 
