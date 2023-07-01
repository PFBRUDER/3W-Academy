/**
 * Créer ici le projet « Hello You ».
 * indice => prompt
 * Afficher le dans un alert()
 */

const userFirstName = window.prompt("Hey ! Quel est votre prénom ?");
const greetingMsg = `Salut ${userFirstName}`;
alert(greetingMsg);

//Bonus 1
// const userLastName = window.prompt("Quel est votre nom ?");
// const userYear = window.prompt("Quel est votre année de naissance ?");
// const currentYear = 2022
// const diff = currentYear - userYear

// const getResult = `Salut ${userFirstName} ${userLastName}, cette année tu a ${diff} ans`
// alert(getResult);

//Bonus 2
// const userLastName = window.prompt("Quel est votre nom ?");
// const userYear = window.prompt("Quel est votre année de naissance ?");
// const currentYear = new Date().getFullYear();
// const diff = currentYear - userYear

// const getResult = `Salut ${userFirstName} ${userLastName}, cette année tu a ${diff} ans`
// alert(getResult);

//Bonus 3
const userLastName = window.prompt("Quel est votre nom ?");
const userDayYear = window.prompt("Quel est votre jour de naissance ?");
const userMonthYear = window.prompt("Quel est votre mois de naissance ?");
const userYear = window.prompt("Quel est votre année de naissance ?");
//date current
const currentYear = new Date();
// date user date('03-13-2001')
// Mois-jour-Annee
const dateUser = new Date(`${userMonthYear}-${userDayYear}-${userYear}`)

const diff = currentYear - dateUser 
//La différence en jours (1 seconde = 1000 ms, 1 heure = 60*60 secondes, 1 jour = 24 * 1 heure)
const age = diff / 1000 / (60 * 60 * 24)
const result = Math.floor(age / 365.25);


const getResult = `Salut ${userFirstName} ${userLastName}, cette année tu a ${result} ans`
alert(getResult);

