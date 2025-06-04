/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

let ris = "";
const iniziali = [];

// Dichiara la funzione qui.
function inizialiPush() {
  for (let i = 0; i < names.length; i++) {
    const nameIthems = names[i];
    //console.log(nameIthems);
    const iniziale = 1;
    ris = nameIthems.slice(0, iniziale);
    return iniziali.push(ris);
    // console.log(ris);
  }
}
// Invoca la funzione qui e stampa il risultato in console

console.log(inizialiPush);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

// c'è un modo per selezionare solo la parte iniziale di un valore?

// possibile che serva un ciclo per separare gli elementi ?
