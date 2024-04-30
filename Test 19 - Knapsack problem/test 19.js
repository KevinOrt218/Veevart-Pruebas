// TEST 19 - Knapsack problem

// se inicialiaza un varialbe con el arreglo de elementos
let objetos = [
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6]
];

// se inicializa una variable con la capacidad de la mochila
let capacidadMax = 8;

// se crea una funcion que reciba como parametro una lista de elementos y la capacidad maxima de la mochila 
knapsack = (elementos, capacidadMax) => {
    // se crea una matriz auxiliar que servira como segunda mochila para almacenar los resultados en subproblemas
    let mochilaAux = [];
    for (let i = 0; i <= elementos.length; i++) {
        mochilaAux[i] = [];
        for (let j = 0; j <= capacidadMax; j++) {
            mochilaAux[i][j] = 0;
        }
    }

    // se llena la matriz auxiliar con los resultados de los subproblemas
    for (let i = 1; i <= elementos.length; i++) {
        // le asignamos el valor de peso y valor, comenzando con la primera fila y columna del la lista de elementos
        let wi = elementos[i - 1][0];
        let vi = elementos[i - 1][1];

        for (let j = 0; j <= capacidadMax; j++) {
            if (wi > j) {
                mochilaAux[i][j] = mochilaAux[i - 1][j];
            } else {
                mochilaAux[i][j] = Math.max(mochilaAux[i - 1][j], mochilaAux[i - 1][j - wi] + vi);
            }
        }
        
    }

    // se reconstruye la lista con los elementos seleccionados para la mochila
    let elementoSeleccionado = [];
    let i = elementos.length;
    let j = capacidadMax;
    while (i > 0 && j > 0) {
        if (mochilaAux[i][j] !== mochilaAux[i - 1][j]) {
            elementoSeleccionado.push(elementos[i - 1]);
            j -= elementos[i - 1][0];
        }
        i--;
    }

    //BONUS 2
    // se reconstruye la lista de elementos no seleccionados
    let elementosNoSeleccionados = [];
    for (let k = 0; k < elementos.length; k++) {
        if (!elementoSeleccionado.includes(elementos[k])) {
            elementosNoSeleccionados.push(elementos[k]);
        }
    }

    // se calcula el valor total de los elementos no seleccionados
    let valorTotalNoSeleccionado = 0;
    for (let k = 0; k < elementosNoSeleccionados.length; k++) {
        valorTotalNoSeleccionado += elementosNoSeleccionados[k][1];
    }

    // Devolvemos la lista de elementos seleccionados, la lista de elementos no seleccionados y los valores totales
    let valorTotalSeleccionado = mochilaAux[elementos.length][capacidadMax];
    return {
        elementosSeleccionados: elementoSeleccionado,
        elementosNoSeleccionados: elementosNoSeleccionados,
        valorTotalSeleccionado: valorTotalSeleccionado,
        valorTotalNoSeleccionado: valorTotalNoSeleccionado
    };
}


let resultado = knapsack(objetos, capacidadMax);

console.log("Elementos seleccionados:", resultado.elementosSeleccionados);
console.log("Elementos no seleccionados:", resultado.elementosNoSeleccionados);
console.log("Valor total obtenido de elementos seleccionados:" + resultado.valorTotalSeleccionado);
console.log("Valor total obtenido de los elementos no seleccionados:" + resultado.valorTotalNoSeleccionado);
