'use strict'

//creo array per inserire i numeri e farne la somma + variabile per la somma
const arrayNumeri = []
let sommaArray = 0

//creo il ciclo do-while per chiedere i numeri 5 volte e fare la somma
do {
    const numeroUtente = parseInt(prompt('Inserisci un numero!'))

        if (isNaN(numeroUtente)) {
            alert('Inserisci un numero corretto!')
        } else {
            arrayNumeri.push(numeroUtente)
            sommaArray += numeroUtente
        }
        
} while (arrayNumeri.length < 5)

//mostro contenuto array + somma di quel contenuto
console.log(arrayNumeri)
console.log(sommaArray)


/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/