// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// Lista Cognomi
var lista = ["Acquafresca", "Amauri", "Dellafiore", "Fantini", "Valiani", "Cois", "Vergassola", "Dainelli"];

// Chiedere all’utente il cognome
var cognomeUser = prompt("Qual è il tuo cognome?");

// inserirlo in un array con altri cognomi + trasformazione in caso di errori "umani"
var iniziale = cognomeUser.charAt(0).toUpperCase();
var resto = cognomeUser.slice(1).toLowerCase();
cognomeUser = iniziale + resto;
lista.push(cognomeUser);

// stampa la lista ordinata alfabeticamente
lista.sort();

for (var i = 0; i < lista.length; i++) {
  document.getElementById('list').innerHTML += "<li>" + lista[i] + "</li>";
}

// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
var trovato = false;

var i = 0;
while (i < lista.length && trovato == false) {
  if (cognomeUser == lista[i]) {
    trovato = true;
  }
  i++;
}

document.getElementById('position').innerHTML = "Ti trovi al numero " + i;
console.log(i);
