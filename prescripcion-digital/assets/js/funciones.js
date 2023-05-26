
meds = ['ABIRATERONA', 'DOXILAMINA', 'IBUPROFENO', 'OMEPRAZOL', 'OXICODONA', 'SALBUTAMOL', 'VALSARTAN']

let med = parseInt(prompt('Ingrese una cantidad de articulos (una cifra): '))

function recorrerMedicamentos() {
  for(let i = 0; i < meds; i++) {
    console.log(meds, i)
    }
    if (med >= meds.length) {
      console.error('No tenemos esa cantidad de articulos')
    } else {
      console.warn('Estos son los articulos en stock: ', meds)
      }
  }

recorrerMedicamentos()


// Obtengo cantidad de medicación inicial
let cantidadMedicacion = parseInt(prompt('Ingrese cantidad de comprimidos disponibles: '))
console.log(cantidadMedicacion)

// Obtengo duración del tratamiento
let duracionTratamiento = parseInt(prompt('Ingrese duración del tratamiento (días): '))
console.log(duracionTratamiento)

// Obtengo duración del tratamiento
let dosisDiaria = parseInt(prompt('Cuántos comprimidos diarios debe consumir? '))
console.log(dosisDiaria)

calcularDosis = () => {
  let dosisTotal = dosisDiaria * duracionTratamiento
  let diferenciaDosis = dosisTotal - cantidadMedicacion

  if (dosisTotal <= cantidadMedicacion) {
    alert('Tienes suficiente medicación: ' + dosisTotal + ' comprimidos')
  } else {
    alert('Necesitarás: ' + diferenciaDosis + ' comprimidos extra')
    console.warn('Necesitarás: ' + diferenciaDosis + ' comprimidos extra')
  }
}

calcularDosis()
