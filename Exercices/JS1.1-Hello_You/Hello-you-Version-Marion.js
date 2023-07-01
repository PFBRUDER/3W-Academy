const userPrenom = window.prompt("Quel est ton prenom?")
const userNom = window.prompt("Quel est ton nom?")
const userAnne = window.prompt("Quel est ton anné de naissance?")
const userMois = window.prompt("Quel est ton mois de naissance?")
const userDay =  window.prompt("Quel est ton jour de naissance?" )
let date = new Date();
let annee = date.getFullYear()
let mois = date.getMonth()
let jour = date.getDay()
let jour1= annee*365.25+mois*30.4167 + jour
let jour2 = parseInt(userAnne)*365.25 + parseInt(userMois)*30.4167 + parseInt(userDay)
let age = (jour1 - jour2)/365.25
console.log("Bonjour"+" "+userPrenom + " "+userNom+ " "+ "tu as "+" "+ Math.floor(age)+" "+"ans!")

/*
====== Afficher l'âge ==========

Demander puis afficher le prenom
Demander puis afficher le nom
Demander puis afficher la date de naissance
calculer et afficher l'âge de l'utilisateur en le saluant et lui annonçant son âge.

*/