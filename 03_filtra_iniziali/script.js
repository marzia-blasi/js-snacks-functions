/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const users = ["Annooo", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function pushIthems(stringList, letter) {
  const onlyA = [];

  for (let i = 0; i < stringList.length; i++) {
    const nameIthems = stringList[i];
    // console.log(nameIthems);
    if (nameIthems.startsWith("A")) {
      onlyA.push(nameIthems);
    }
  }
  return onlyA;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(pushIthems(names));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

// metodo di "inizia con"

// // cilo per separare le stringhe

// for (let i = 0; i < names.length; i++) {
//   const nameIthems = names[i];
//   // console.log(nameIthems);
//   if (nameIthems.startsWith("A")) {
//     onlyA.push(nameIthems);
//   }
// }
