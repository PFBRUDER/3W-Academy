const num1 = window.prompt('Entrez un nombre');
const arithmétique = window.prompt('opérateur arithmétique');
const num2 = window.prompt('Entrez un deuxième nombre');

console.log(`${parseInt(num1)} ${arithmétique} ${parseInt(num2)}`);

// si num1 n'est pas un nombre, demander d'entrer un nb
// if (isNaN(num1)) {
//   num1 = window.prompt(`Merci d'entrer un nombre`);
// } 


if (arithmétique === '+') {
  console.log(parseInt(num1) + parseInt(num2));   

} else if (arithmétique === '-') {
  console.log(num1 - num2)

} else if (arithmétique === '*') {
  console.log(num1 * num2)

} else if (arithmétique === '/') {
  console.log(num1 / num2)
}



