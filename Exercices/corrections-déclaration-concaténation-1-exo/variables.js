// a)
// • Déclarer une variable avec le mot clé `let` ayant comme nom « nom ».
// • Puis, sur la ligne suivante, lui assigner la valeur « votre nom ».
let nom;
nom = 'BRUDER';
console.log(nom);


/**
 * B)
 * Déclarer une variable avec le mot-clé `const` ayant comme nom « prenom ».
 * assigner la valeur « Votre prénom » sur la meme ligne.
 */
const prenom = 'Pierre-François';
console.log(prenom);


 /**
  * C)
 * Déclarer une variable avec le mot-clé `var` ayant comme nom « age ».
 * Puis, sur la ligne suivante, lui assigner la valeur « votre age ».
 */
var age;
age = 39;
console.log(age)

/**
 * d)
 * afficher dans la console « je m'appelle Jonathan Dostrel et j'ai 30 ans »
 */  
console.log((`je m'appelle ${nom} ${prenom} et j'ai ${age} ans`))



  //alert("je m'appelle " + nom +  prenom + "et j'ai " + age + " ans")
  // alert(`je m'appelle ${nom} ${prenom} et j'ai ${age} ans`)

/**
 * F)
 * Déclarer une variable « msg » avec le mot-clé `const` en lui assignant une
 * valeur de votre choix, telle qu'un message ou un nombre.
 * Afficher la valeur de cette variable dans la console du navigateur.
 */

const msg = 'you rock';
console.log(msg)


/**
 * G)
 * Déclarer une variable ayant pour type String.
 * Afficher la valeur de cette variable dans la console du navigateur.
 */

let test = 'que suis-je?'
console.log(typeof(test));



 /**
  * H)
 * Déclarer une variable `x` dont la valeur est égale à `66`.
 * Déclarer une variable `y` dont la valeur est égale à `12`.
 * Déclarer une variable `result` dont la valeur est égale à la somme de `x`
 * et `y`.
 * Afficher la valeur de la variable `result` dans la console du navigateur.
 */
let x = 66;
let y = 12;
const result = x + y;
console.log(result)


/**
 * I)
 * Déclarer deux variables de type String et qui auront chacun un nombre de votre choix 
 * Additionner les deux variables
 * exemple 20 + 5 = 25 ok    /  20 + 5 = 205 faux
 */
let number1 = '20';
let number2 = '5';
number1 = parseInt(number1);
number2 = parseInt(number2);
const total = number1 + number2;

// const total = parseInt(number1) + parseInt(number2);

console.log(total);


/**
 * J)
* Vous voulez savoir quel âge vous aurez? Calculez-le!
* Stockez votre année de naissance dans une variable.
* Stockez une année future dans une variable.
* Calculez vos 2 âges possibles pour cette année en fonction des valeurs stockées.
* Par exemple, si vous êtes né en 1988, vous aurez 37 ou 38 ans en 2026, selon le mois en 2026.
* Sortez-les à l’écran comme ça: «  », en remplaçant NN par les valeurs
 */

let birthdate = 1984;
let futur = 2084;
let NN = futur - birthdate;
console.log(NN);
let N = NN - 1;
console.log(N);
console.log(`Jaurai soit ${N} ou ${NN} en ${futur}`);

/** 
* K)
*  Vous êtes-vous déjà demandé combien coûte un « approvisionnement à vie » de votre collation préférée? Ne vous étonnez plus!
*  Stockez votre âge actuel dans une variable.
*  Stockez un âge maximum dans une variable.
*  Conservez une quantité estimée par jour (sous forme de nombre).
*  Calculez combien vous mangeriez au total pour le reste de votre vie.
* Sortez le résultat à l’écran exemple: « Vous aurez besoin de NN  tasses de thé pour tenir jusqu'à l'âge de 100
*/

let ageToday = 39;
let ageMax = 139;
let estimation = 10;
const quantite = (ageMax - ageToday) * 365 * 10;
console.log(quantite);
// alert(`Vous aurez besoin de ${quantite} bananes pour tenir jusqu'à l'âge de ${ageMax}`);
console.log(`Vous aurez besoin de ${quantite} bananes pour tenir jusqu'à l'âge de ${ageMax}`);


/**
 * L)
 * Échanger les valeurs de deux variables. Si au départ a=7 et b=3, il faudrait qu'à la fin b=7 et a=3.
  Cet exercice semble facile si l'on fait intervenir provisoirement une troisième variable c, qui permettra les étapes :
 */

  let a = 7;
  let b = 3;
  console.log("========== avant inversion =========");
  console.log("A : " + a);
  console.log("B : " + b);

  let temp = a;
  a = b;
  b = temp;
  console.log("=========== après inversion =======")
  console.log("A : " + a)
  console.log("B : " + b)


// Bonus reprendre l'exercice L et refaites le son utilisé une 3e variable

let aBonus = 7;
let bBonus = 3;
console.log("========== avant inversion =========");
console.log("Abonus : " + aBonus);
console.log("Bbonus : " + bBonus);

aBonus = aBonus + bBonus;
bBonus = aBonus - bBonus
aBonus = aBonus - bBonus;

console.log("=========== après inversion =======")
console.log("Abonus : " + aBonus);
console.log("Bbonus : " + bBonus);


