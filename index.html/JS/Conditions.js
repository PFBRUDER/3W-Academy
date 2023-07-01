/* === / == */

/* // == valeur = valeur */
/* // === valeur et type = valeur et le type */

/* const mathieu = 'Mathieu';
const nom = window.prompt('ton prenom ?')
console.log(nom===mathieu)

if(nom===mathieu)
console.log('salut mathieu')
ellipseconsole log(salut inconnue)

qqn essaie de rentrer en boite et n'a pas 18 ans
Si + de 18 ans bienvenue
sinon dehors
 */

// const ageRequis = 18;
// const userAge = window.prompt('ton age?')
// if(userAge >= ageRequis) {
//   console.log(`Bienvenue`)
// } else {
//   console.log('Tu sors')
// }

// =========== Maintenant essaie de rentrer dans une boîte réservée uniquement à ceux qui ont 18 ans==================
// const ageRequis = 18;
// if(ageRequis === parseInt(userAge))
  
const ageRequis= Number(window.prompt('ton age?'))
if (ageRequis === 18) {
  console.log(`Bienvenue`)
} else {
  console.log('Tu sors')
}

