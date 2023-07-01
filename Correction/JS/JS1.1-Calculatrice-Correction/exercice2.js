/**
 * Voici une façon parmi d'autres d'atteindre le résultat souhaité.
 *
 * Le challenge ici est de découvrir la fonction `eval` en apprenant à faire
 * des recherches sur le web.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
 *
 * Notez toutefois que la fonction `eval` représente de sérieux risques de
 * sécurité. Nous l'utilisons ici à des fins pédagogiques, mais elle n'a pas
 * sa place dans un projet réel. (:
 */

const expression = window.prompt("Entrez un calcul :");
// La fonction eval() évalue le code JavaScript représenté sous forme de chaîne.
const result = eval(expression);

console.log("Calcul : " + expression);
console.log("Résultat : " + result);
