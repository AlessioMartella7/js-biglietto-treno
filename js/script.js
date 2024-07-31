/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.


/* 
1-recupero gli elementi di mio interesse dal DOM.
2-creo una costante prezzo/km.
3-creo una costante per lo sconto del 20%.
4-creo una costante per lo sconto del 40%.
5-chiedo all'utente i km che vuole percorrere.
6-chiedo all'utente la sua età.
7-calcolo il prezzo in base ai kilometri.
8-applico uno sconto se possibile.
9-stampo il documento.
*/

//1-recupero gli elementi di mio interesse dal DOM.

const regularPrice = document.getElementById('regular-price');
console.log('regularPrice', regularPrice)

const userAge = document.getElementById('age');
console.log('userAge', userAge)

const distanceKm = document.getElementById('distance');
console.log('distanceKm', distanceKm)

const finalPrice = document.getElementById('total');
console.log('finalPrice', finalPrice)
