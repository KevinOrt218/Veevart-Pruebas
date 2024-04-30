// TEST 9 - Ascensor

//Se crea el array que va a contener los 29 pisos del edificio.
let pisos = Array.from({ length: 29 }, (_, i) => i + 1);
/* console.log(pisosEdificio); */

//se define un arreglo que contiene los pisos a los que el elevador debe llegar.
const arregloPisos = [5, 29, 13, 10];
const pisoInicial = 4;

//Se crea el mapa de pisos ingresados
const pisosIngresados = new Map();

pisosIngresados.set(5, 2);
pisosIngresados.set(29, 10);
pisosIngresados.set(13, 1);
pisosIngresados.set(10, 1);

/* console.log(pisosIngresados) */

//Se crea una función que que recibira como parametros el arreglo de los pisos, el piso inicial y el mapa de pisos creados.
const moverElevador = (arregloDePisos, pisoInicial, mapaDePisos) => {
// Se declara una para almacenar el piso al que se ha ingresado y otra para el último piso al que llega el ascensor.
  let pisoIngresado;
  let ultimoPiso;
//mediante un do while se ejecutara el recorrido del elevador hasta que no haya más pisos en el arreglo arregloDePisos
  do {
    if (pisoInicial < arregloDePisos[0]) {
      for (let i = pisoInicial; i < pisos.length; i++) {
        //Se verifica si el piso inicial es menor que el primer piso en el arreglo o si el último piso alcanzado es mayor o igual que el primer piso en el arreglo. Dependiendo de la condición, el elevador subirá o bajará.
        if (arregloDePisos.includes(pisos[i])) {
          console.log("Subiendo");
          console.log("ingresa al piso", pisos[i]);
          //Necesito un metodo que no me mute el arreglo!!!
          //Se elimina el piso al que el elevador ha llegado del arreglo de pisos.
          arregloDePisos.splice(arregloDePisos.indexOf(pisos[i]), 1);
            //Se obtiene el piso al que se puede acceder desde el piso actual
          pisoIngresado = mapaDePisos.get(pisos[i]);

          console.log(pisoIngresado, "Piso ingresado");
          ultimoPiso = pisos[i]; //Se actualiza el valor del último piso alcanzado.

          //se agrega el piso ingresado
          arregloDePisos.push(pisoIngresado);
        }
      }
    } else if (ultimoPiso >= arregloDePisos[0]) {
        for (let j = ultimoPiso; j >= 0; j--) {
            if (arregloDePisos.includes(pisos[j])) {
            console.log("Bajando");
            //Se elimina el piso al que el elevador ha llegado del arreglo de pisos
            arregloDePisos.splice(arregloDePisos.indexOf(pisos[j]), 1);
            //Se actualiza el valor del último piso alcanzado
            ultimoPiso = pisos[j];
            console.log(ultimoPiso, "es el ultimo piso de bajada");
        }
      }
    }
  } while (arregloDePisos.length !== 0);
};

moverElevador(arregloPisos, pisoInicial, pisosIngresados);