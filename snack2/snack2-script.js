'use strict'

//faccio inserire un numero all'utente
let numeroUtente = parseInt(prompt('Inserisci un numero!'))
console.log(numeroUtente)

let arrayNuovi = []
let k = 0

while (k < numeroUtente) {
    arrayNuovi === numeroUtente[k]
        for (let i = 0; i < 10; i++) {
            arrayNuovi[i] = Math.floor(Math.random() * 100) + 1
        }
    console.log(arrayNuovi)
    k++
}

/*
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
Ogni volta che ne crei uno, stampalo.
*/