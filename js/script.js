// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età

//1) Creo un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var student = {
    nome : 'mario',
    cognome : 'rossi',
    eta : 25
}

//2) Stampo A SCHERMO attraverso un ciclo for-in tutte le proprietà dell'oggetto.
var studentCarachter = '';

for (var k in student){
    studentCarachter += student[k] + ' ';
}

document.getElementById('student').innerHTML = studentCarachter;

//3) Creo un' array di oggetti di studenti.
var students = [
    student,
    {
        nome : 'luca',
        cognome : 'bianchi',
        eta : 24
    },
    {
        nome : 'maria',
        cognome : 'gialli',
        eta : 23
    }
];

//4) Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
var studentNameLast = '';

for (var i = 0; i < students.length; i++){
    for (var k in students[i]){

        if(k != 'eta'){
            studentNameLast += students[i][k] + ' ';
        }
        document.getElementById('name-lastname').innerHTML = studentNameLast;
    }
}

//5) Do la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età

var userName = prompt('inserisci il nome');
var userLastName = prompt('inserisci il tuo cognome');
var userAge = parseInt(prompt('inserisci l\'età'));

var user = {
    nome : userName,
    cognome : userLastName,
    eta : userAge
}

students.push(user);

console.log(students);
