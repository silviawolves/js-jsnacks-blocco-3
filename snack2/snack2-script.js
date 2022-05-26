'use strict'

//faccio inserire un numero all'utente
const numeroUtente = parseInt(prompt('Inserisci un numero!'))
console.log(numeroUtente)

const arrayGenerati = []

while (arrayGenerati.length < numeroUtente) {
    const nuovoArray = []

    while (nuovoArray.length < 10) {
        const numeroCasuale = Math.floor(Math.random() * 100) + 1

        if (!nuovoArray.includes(numeroCasuale)) {
            nuovoArray.push(numeroCasuale)
        }
    }

    arrayGenerati.push(nuovoArray)
}
console.log(arrayGenerati)


/* come avevo fatto l'esercizio io

let k = 0
while (k < numeroUtente) {
    arrayNuovi === numeroUtente[k]
        for (let i = 0; i < 10; i++) {
            arrayNuovi[i] = Math.floor(Math.random() * 100) + 1
        }
    k++
    console.log(arrayNuovi)
}*/

/*
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
Ogni volta che ne crei uno, stampalo.
*/