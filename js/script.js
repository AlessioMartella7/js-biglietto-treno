/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.


/* 
1-recupero gli elementi di mio interesse dal DOM.
2-creo una costante prezzo/km.
3-chiedo all'utente i km che vuole percorrere.
4-chiedo all'utente la sua età.
5-calcolo il prezzo base del biglietto
6-creo una costante per lo sconto del 20% per i minorenni.
7-creo una costante per lo sconto del 40% per gli over 65.
8-calcolo il prezzo finale.
9-stampo il documento.
*/

//1-recupero gli elementi di mio interesse dal DOM.

const regularPriceElement = document.getElementById('regular-price');
console.log('regularPriceElement', regularPriceElement);

const ageElement = document.getElementById('age');
console.log('ageElement', ageElement);

const distanceElement = document.getElementById('distance');
console.log('distanceElement', distanceElement);

const finalPriceElement = document.getElementById('total');
console.log('finalPriceElement', finalPriceElement);

//2-creo una costante prezzo/km.

const priceByKm = 0.21;
console.log('priceByKm', priceByKm);

//3-chiedo all'utente i km che vuole percorrere.

const userDistance = parseInt(prompt('Quanti Kilometri vuoi percorrere?',128));
console.log('userDistance', userDistance);

//4-chiedo all'utente la sua età.

const userAge = parseInt(prompt('Quanti anni hai?',72));
console.log('userAge', userAge);

//5-calcolo il prezzo base del biglietto

const basePrice = (userDistance * 0.21)
console.log('basePrice',basePrice);

//6-creo una costante per lo sconto del 20% per i minorenni.

const underDiscount = ((basePrice * 20)/100);
console.log('underDiscount',underDiscount)

//7-creo una costante per lo sconto del 40% per gli over 65.

const overDiscount = ((basePrice * 40)/100);
console.log('overDiscount',overDiscount)

//8-calcolo il prezzo finale.

let finalPrice = `${basePrice} €`;

if (userAge <= 18) {
    finalPrice = (basePrice - underDiscount).toFixed(2) + ' €';
} else if (userAge >= 65 ) {
    finalPrice = (basePrice - overDiscount).toFixed(2) + ' €';
} 

console.log('finalPrice', finalPrice);

// stampo il documento

regularPriceElement.innerText = basePrice + ' €';
ageElement.innerText = userAge;
distanceElement.innerText = userDistance + ' Km';
finalPriceElement.innerText = finalPrice;

