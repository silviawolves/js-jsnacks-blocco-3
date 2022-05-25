'use strict'

//faccio inserire un numero all'utente
let numeroUtente = parseInt(prompt('Inserisci un numero!'))
console.log(numeroUtente)

let arrayNuovo = []

//creo un numero di array uguale al numero inserito dall'utente
for (let k = 0; k < numeroUtente; k++) {
    arrayNuovo === numeroUtente[k]

    // per ogni array creo 10 numeri random da 1 - 100
    for (let i = 0; i < 10; i++) {
        arrayNuovo[i] = Math.floor(Math.random() * 100) + 1
    }
    console.log(arrayNuovo)
}





/*
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
Ogni volta che ne crei uno, stampalo.
*/