/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const onlyA = [];

// Dichiara la funzione qui.

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

// metodo di "inizia con"

// cilo per separare le stringhe

for (let i = 0; i < names.length; i++) {
  const nameIthems = names[i];
  const letterA = nameIthems.startsWith("A");
  console.log(nameIthems);
}
