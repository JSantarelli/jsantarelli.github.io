 // DOSIS

  let medCount = document.getElementById('medCount')
  
    
// Cantidad
getMedCount = (i) => {
  const inputsCount = document.querySelectorAll('[id^="inputCount--"]')
  const holderCount = document.querySelectorAll('[id^="drugCount--"]')

  for (let i = 0; i < inputsCount.length; i++) {
    inputsCount[i].onclick = function() {
      holderCount[i].innerHTML = inputsCount[i].value
      console.log(inputsCount[i].value, holderCount[i])
    }
  }
}

// Forma farmacéutica
getMedTypes = () => {
  const arrayCategorias = vademecum.map ((med)=> { return med.presentacion.formaFarmaceutica })
  const categoriasUnicas = [...new Set (arrayCategorias)]
  document.querySelectorAll('[id^="selectType--"]').forEach((select) =>
      categoriasUnicas.forEach((formaFarmaceutica) => {
      const results = vademecum.filter((med)=> med.presentacion.formaFarmaceutica === formaFarmaceutica)
      
        for(let i = 0; i < results.length; i++) {
          select.innerHTML += 
            `<option>${results[i].presentacion.formaFarmaceutica}</option>`
         }
        }
      )
    )
}
    
getMedTypes()


selectedType = () => {
  const selectTypes = document.querySelectorAll('[id^="selectType--"')
  const drugType = document.querySelectorAll('[id^="drugType--"')

  for(let i = 0; i < selectTypes.length; i++) {
    console.log(selectTypes[i].options[selectTypes[i].selectedIndex])
    console.log(drugType[i])

  }
}

// Frecuencia
getLapse = (i) => {
  const inputsLapse = document.querySelectorAll('[id^="inputLapse--"]')
  const holderLapse = document.querySelectorAll('[id^="drugLapse--"]')

  for (let i = 0; i < inputsLapse.length; i++) {
    inputsLapse[i].onclick = function() {
      holderLapse[i].innerHTML = inputsLapse[i].value
      console.log(inputsLapse[i].value, holderLapse[i])
    }
  }
}

// Intervalo de tiempo
const inputsFormat = document.querySelectorAll('[id^="inputFormat--"]')
const holderFormat = document.querySelectorAll('[id^="timeFormat--"]')

const timeFormats = ['Minutes (min)', 'Hours (hs)', 'Days (d)', 'Weeks (w)']


getTimeFormat = (i) => {
  for(let i = 0; i < inputsFormat.length; i++) {

    let formatValue = inputsFormat[i].options[inputsFormat[i].selectedIndex]
    holderFormat[i].innerHTML = formatValue.value
  
}
}

function listTimeFormats() {  
    timeFormats.forEach(() => {
   
        for (let i in inputsFormat) {
            inputsFormat[i].innerHTML += `<option>${timeFormats[i]}</option>`
        }
    })
}
    
listTimeFormats()      


// Duración tratamiento
const inputsStartDate = document.querySelectorAll('[id^="startDate--"]')
const inputsEndDate = document.querySelectorAll('[id^="endDate--"]')
const startDateHolder = document.querySelectorAll('[id^="startDateHolder--"]')
const endDateHolder = document.querySelectorAll('[id^="endDateHolder--"]')

calcDuration = () => {
    inputsStartDate.forEach((startHolder) => {
      
      if (inputsStartDate.textContent !== '') {
        const n = document.getElementById(startHolder.id).value
        let x = new Date(n).getTime()
        console.log(x)
      }  })
      
      endDateHolder.forEach((endHolder) => {
        if (endDateHolder.textContent !== '') {
          const c = document.getElementById(endHolder.id).value
          let d = new Date(c).getTime()
          console.log(d)
        }
      })     
  }


getStartDate = (i) => {
  for (let i = 0; i < inputsStartDate.length; i++) {
    startDateHolder[i].textContent = inputsStartDate[i].value
    let d = inputsStartDate[i].value
    let x = new Date(d).getTime()
    if (startDateHolder.textContent != '') {
    }
  }
}

getEndDate = (i) => {
  for (let i = 0; i < inputsEndDate.length; i++) {
    endDateHolder[i].textContent = inputsEndDate[i].value
    }
  }
