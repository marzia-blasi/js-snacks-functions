/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function inizialiPush(arraylist) {
  const iniziali = [];
  for (let i = 0; i < arraylist.length; i++) {
    iniziali.push(arraylist[i].charAt(0));
  }
  return iniziali;
}
// Invoca la funzione qui e stampa il risultato in console

console.log(inizialiPush(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

// c'è un modo per selezionare solo la parte iniziale di un valore?

// possibile che serva un ciclo per separare gli elementi ?
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i].charAt(0));
// }
