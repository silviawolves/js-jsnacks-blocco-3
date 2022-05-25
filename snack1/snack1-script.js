'use strict'

//creo l'array vuoto dove finitanno i numeri inseriti dall'utente
const arrayNumeri = []

//creo una costante a 0 per la somma che devo operare sui numeri inseriti nell'array
let sommaNumeri = 0

//creo un ciclo while per chiedere i numeri all'utente finché la somma non è minore di 50
do {
    const numeriUtente = parseInt(prompt('Inserisci un numero!'))
    sommaNumeri += numeriUtente
    console.log(numeriUtente)

        if (sommaNumeri < 50) {
            arrayNumeri.push(numeriUtente)
        }
} while (sommaNumeri < 50 )

console.log(sommaNumeri)
console.log(arrayNumeri)


/*
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
*/