// a)
// • Déclarer une variable avec le mot clé `let` ayant comme nom « nom ».
// • Puis, sur la ligne suivante, lui assigner la valeur « votre nom ».


let nom;
nom = "Dostrel";
/**
 * B)
 * Déclarer une variable avec le mot-clé `const` ayant comme nom « prenom ».
 * assigner la valeur « Votre prénom » sur la meme ligne.
 */

 const prenom = "Jonathan";

 /**
  * C)
 * Déclarer une variable avec le mot-clé `var` ayant comme nom « age ».
 * Puis, sur la ligne suivante, lui assigner la valeur « votre age ».
 */
  var age;
  age = 30;

/**
 * d)
 * afficher dans la console « je m'appelle Jonathan Dostrel et j'ai 30 ans »
 */  
  console.log('je m\'appelle ' + nom + ' ' + prenom + ' ' + age);
  console.log(`je m\'appelle ${nom} ${prenom} ${age}`); //ES6

  //alert("je m'appelle " + nom +  prenom + "et j'ai " + age + " ans")
  //alert(`je m'appelle ${nom} ${prenom} et j'ai ${age} ans`)

/**
 * F)
 * Déclarer une variable « msg » avec le mot-clé `const` en lui assignant une
 * valeur de votre choix, telle qu'un message ou un nombre.
 * Afficher la valeur de cette variable dans la console du navigateur.
 */

const msg = "Salut la planète";
console.log(msg);

/**
 * G)
 * Déclarer une variable ayant pour type String.
 * Afficher la valeur de cette variable dans la console du navigateur.
 */

 const message = "Hello";
 console.log(message);

 /**
  * H)
 * Déclarer une variable `x` dont la valeur est égale à `66`.
 * Déclarer une variable `y` dont la valeur est égale à `12`.
 * Déclarer une variable `result` dont la valeur est égale à la somme de `x`
 * et `y`.
 * Afficher la valeur de la variable `result` dans la console du navigateur.
 */

const x = 66;
const y = 12;
const result = x + y;
console.log(result);


/**
 * I)
 * Déclarer deux variables de type String et qui auront chacun un nombre de votre choix 
 * Additionner les deux variables
 * exemple 20 + 5 = 25 ok    /  20 + 5 = 205 faux
 */

const number = "20", number1 = "5"
console.log(parseInt(number) + parseInt(number1)) // 25
console.log(number + number1) // 205


/**
 * J)
* Vous voulez savoir quel âge vous aurez? Calculez-le!
* Stockez votre année de naissance dans une variable.
* Stockez une année future dans une variable.
* Calculez vos 2 âges possibles pour cette année en fonction des valeurs stockées.
* Par exemple, si vous êtes né en 1988, vous aurez 37 ou 38 ans en 2026, selon le mois en 2026.
* Sortez-les à l’écran comme ça: « J'aurai soit NN ou NN en AAAA », en remplaçant NN par les valeurs
 */
var birthYear = 1984;
var futureYear  = 2012;
var age  = futureYear - birthYear;
console.log("J'aurai soit " + age + " ou " + (age - 1) + " en " + futureYear);
console.log(`J'aurai soit ${age} ou ${age - 1} en ${futureYear}`);

/** 
* K)
*  Vous êtes-vous déjà demandé combien coûte un « approvisionnement à vie » de votre collation préférée? Ne vous étonnez plus!
*  Stockez votre âge actuel dans une variable.
*  Stockez un âge maximum dans une variable.
*  Conservez une quantité estimée par jour (sous forme de nombre).
*  Calculez combien vous mangeriez au total pour le reste de votre vie.
* Sortez le résultat à l’écran exemple: « Vous aurez besoin de NN  tasses de thé pour tenir jusqu'à l'âge de 100
*/

var age = 28;
var maxAge = 100;
var numPerDay = 2;
var totalNeeded = (numPerDay * 365) * (maxAge - age);
var message1 = 'Vous aurez besoin de ' + totalNeeded + " tasses de thé pour tenir jusqu'à l'âge de " + maxAge;
var message2 = `Vous aurez besoin de ${totalNeeded} tasses de thé pour tenir jusqu'à l'âge de ${maxAge}`;
console.log(message1);
console.log(message2);

/**
 * L)
 * Échanger les valeurs de deux variables. Si au départ a=7 et b=3, il faudrait qu'à la fin b=7 et a=3.
  Cet exercice semble facile si l'on fait intervenir provisoirement une troisième variable c, qui permettra les étapes :
 */
let a = 7;
let b = 3;
let c = a // c = 7
//c = 7 , a = 7, b = 3
a = b  // a = 3
b = c  // b = 7
console.log(a, b)

// Bonus reprendre l'exercice L et refaites le son utilisé une 3e variable
let d = 7;
let f = 3;
d = d + f // result 10 d = 7,  d = 10
f = d - f //  d = 10 - f = 3 : result = 7
d = d - f // d = 10 - f = 7 result = 3
//d = 3 , f = 7
console.log(d , f)


