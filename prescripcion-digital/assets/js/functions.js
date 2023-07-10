/* 

FLUJO BASICO
1. Usuario busca medicamento
    a. Usuario selecciona fecha inicio / fin
    b. Sistema calcula duración
    c. Sistema calcula dosis necesaria
    d. El resultado es mostrado en el contenedor al confirmar
2. Selección med
3. Meds seleccionados se muestran en contenedor
4. Usuario guarda prescripción
*/

// Muestro info paciente
const patientName = document.querySelector('#patientInfo')
const savePatient = document.querySelector('#btnRegister')

savePatient.addEventListener('click', () => {
    if (patientName.value !== '') {
        localStorage.setItem('namePatient', patientName.value)
        displayPatientInfo()
    }
})

// Renderizo resultados
const resultsContainer = document.getElementById('containerResults')

// Declaraciones prescripción
const selectedMeds = () => JSON.parse(localStorage.getItem('prescription')) || []
const prescription = selectedMeds()
const url = 'assets/js/meds.json'
const meds = [] 


// Armado de prescripcion en base a meds seleccionados
getList = (med) => {
  return `
      <li role="button" aria-label="${med.nombreComercial}" class="">
          <h3>${med.nombreComercial}</h3>
          <small>${med.concentracion} ${med.presentacion.formaFarmaceutica}</small>
          <button id="${med.id}" class="card__btn--outline">Agregar</button>
      </li>
      `
}

getError = () => {
  getError = () => {
    return `
            <h3>
              Error!
            </h3>
            `
      }
    }

listMeds = () => {
  resultsContainer.innerHTML = ''
  vademecum.length > 0 ? vademecum.forEach((med) => resultsContainer.innerHTML += getList(med))
                  : resultsContainer.innerHTML = getError()
  activateButtons()
}

activateButtons = () => {
  const addButtons = document.querySelectorAll('button.card__btn--outline')
  for (let btn of addButtons) {
    btn.addEventListener('click', (e)=> {
        const selectedMed = vademecum.find((med) => med.id === parseInt(e.target.id))
        console.log(e.target.id, selectedMed)

        // MODAL
        confirmMed = () => {
          Swal.fire (
            {
              title: `The med '${selectedMed.nombreComercial}' has been added`,
              showCancelButton: true,
              confirmButtonText: 'Confirm',
              cancelButtonText: 'Cancel',
              // Define estructura para manipular respuestas según interacción del usuario
            }).then((result) => {
              if (result.isConfirmed) {
                  prescription.push(selectedMed)
                  localStorage.setItem('prescription', JSON.stringify(prescription))
                  Swal.fire( `${selectedMed.nombreComercial} has been added`, 'Description text' , 'success')
                      } else if (result.isDenied) {
                      Swal.fire( `${selectedMed.nombreComercial} could not be added`, '', 'info')
              }
          })
        }
        confirmMed()
      })
    }
}


listMeds()


// Cargo tarjetas de meds
const containerMeds = document.querySelector('div#containerMeds')

displayPrescription = () => {
  prescription.forEach((localPrescription, i) => containerMeds.innerHTML += 
     `<div class="card--vertical">
            <h3>${localPrescription.nombreComercial}</h3>
            <small>${localPrescription.presentacion.cantidad} ${localPrescription.presentacion.formaFarmaceutica}</small>
            <form>
              <fieldset>
              <legend>Dosage</legend>
                <label for="inputCount--${i}">Amount</label><br>
                <input type="number" id="inputCount--${i}" onchange="getMedCount(${i})"/><br>

                <label for="selectType--${i}">Type</label><br>
                <select name="selectType--${i}" class="selectTypes" id="selectType--${i}" onchange="selectedType()">
                  <option id="0">Select a type</option>
                </select><br>
                
                <label for="inputLapse--${i}">Every</label><br>
                <input type="number" name="inputLapse--${i}" id="inputLapse--${i}" onchange="getLapse(${i})"><br>
      
                <label for="inputFormat--${i}">Time format</label><br>
                <select name="inputFormat--${i}" id="inputFormat--${i}" onchange="getTimeFormat(${i})">
                    <option value="formatValue--${i}">Select time format</option>
                </select>

                <hr>

                <legend>Time frame</legend>
                  <label for="${i}">Start date</label>
                  <input type="date" id="startDate--${i}" onchange="getStartDate(${i})"/>

                  <label for="${i}">End date</label>
                  <input type="date" id="endDate--${i}" onchange="getEndDate(${i})"/>
              </fieldset>
            </form>
          </div>`
    )
  }

  displayPrescription()


// Info paciente
displayPatientInfo = () => {
    if (localStorage.getItem('namePatient')) {
      patientName.value = localStorage.getItem('namePatient')
    }
    document.getElementById('namePatient').innerHTML = patientName.value
  }

const summaryContainer = document.getElementById('containerSummary')
summaryContainer.style.display = 'none'

savePrescription = () => {
  if (summaryContainer.style.display === 'none') {
    summaryContainer.style.display = 'block'
    containerMeds.style.display = 'none'
  }

  document.querySelectorAll('[id^="saveButton--"]').forEach((btn) => {

      btn.addEventListener('click', (e)=> {
        calcDuration()
      }
    ) 
  }) 
}

backPrescriptions = () => {
  if (summaryContainer.style.display === 'block') {
    summaryContainer.style.display = 'none'
  }
  if (containerMeds.style.display === 'none') {
    containerMeds.style.display = 'grid'
  }
}

// Borrar prescripción entera
const removeBtn = document.getElementById('removePrescription')

removeBtn.addEventListener('click', (e)=> {
    localStorage.removeItem('prescription')
  }
)

// Borrado selectivo
removeMed = () => {
    const xBtn = document.querySelectorAll('[id^="removeBtn--"]')
    console.log(xBtn.length)
    for (let i = 0; i < xBtn.length; i++) {
      xBtn[i].addEventListener('click', (e)=> {
        
        const selectedLocalMed = prescription.find((localMed) => localMed.id === parseInt(e.target.id))
        prescription.splice(selectedLocalMed, i)
        }
      )
    }
}
