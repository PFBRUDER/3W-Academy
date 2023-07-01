/*
====== Afficher l'âge ==========

Demander puis afficher le prenom
Demander puis afficher le nom
Demander puis afficher la date de naissance
calculer et afficher l'âge de l'utilisateur en le saluant et lui annonçant son âge.

*/

const userName = window.prompt('Bonjour, quel est votre nom?');
const userFirstName = window.prompt('Votre prénom ?');

// pour faciliter la suite, on met des valeurs en brut dans les const à la place d'une réponse à saisir chaque fois
// const userName = "brubru";
// const userFirstName = "PF";
// const userDay = 2;
// console.log(userDay);
// const userMonth = 2;
// console.log(userMonth);
// const userYear = 1984;
// console.log(userYear);

const userDay = window.prompt('Votre jour de naissance?')
console.log(userDay);
const userMonth = window.prompt('Votre mois de naissance?')
console.log(userMonth);
const userYear = window.prompt('Votre année de naissance?')
console.log(userYear);




const msg = `Bonjour ${userFirstName} ${userName}, vous êtes né le ${userDay}.${userMonth}.${userYear}. Maintenant, calculons votre âge.`;
console.log(msg);
document.write(msg);
document.write(`<br/>`);

let currentDate = new Date();
console.log(currentDate);
console.log(typeof currentDate);

let currentDay = currentDate.getDay();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
console.log(currentDay);
console.log(typeof currentDay);
console.log(currentMonth);
console.log(currentYear);

let annéeActuelleEnJour = currentYear*365.25 + currentMonth*30.4167 + currentDay;
let dateAnnivEnJour = parseInt(userYear*365.25) + parseInt(userMonth*30.4167) + parseInt(userDay)

const userAge = Math.floor((annéeActuelleEnJour - dateAnnivEnJour) / 365.25);


document.write(`Hey ${userFirstName} ${userName}, tu as exactement ${userAge} ans`)
console.log(userAge);

// La version simple mais fausse en fonction du mois:
// const userAge = currentYear - userYear;



