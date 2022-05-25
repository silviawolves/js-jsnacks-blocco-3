'use strict'

const invitatiGatsby = ['Zelda Sayre', 'Daisy Fay', 'Jordan Baker', 'Nick Carraway', 'Francis Scott Fitzgerald', 'Myrtle Wilson', 'Tom Buchanan', 'George Wilson', 'Meyer Wolfsheim']
console.log(invitatiGatsby)

const nomeInserito = prompt("Inserisci il tuo nome per entrare a villa Gatsby.")
let invitoFesta = false

do {
    for (let i = 0; i < invitatiGatsby.length; i++) {
        if (nomeInserito === invitatiGatsby[i]) {
            invitoFesta = true
            console.log(`${nomeInserito} puoi partecipare alla festa!`)
        }
    console.log(invitatiGatsby[i])
    }
} while (invitoFesta = false)


/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
Interrompi il ciclo appena il nome è stato trovato.
*/