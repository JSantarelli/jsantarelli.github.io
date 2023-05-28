
let stock = parseInt(prompt('Ingrese una cantidad de articulos (una cifra): '))

// Función
function recorrerMedicamentos() {
  // Ciclo
  for(let i = 0; i < stock; i++) {
    console.log(stock, i)
    }
    // Condicional
    if (stock >= 7) {
      console.error('No tenemos esa cantidad de articulos')
    } else {
      console.warn('Estos son los articulos en stock: ', stock)
      }
  }

recorrerMedicamentos()