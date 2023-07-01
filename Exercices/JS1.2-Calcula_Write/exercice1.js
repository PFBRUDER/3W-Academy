/**
 * Calculawrite
 */
// ========== EXRCICE WHILE ============

// ++++++++++ if +++++++++

// let num1 = window.prompt("Premier nombre :");

// // while(isNaN(num1) {
// // num1=window.prompt("Merci d'entrer un nombre :")
// // }

// // let operator = window.prompt("Opérateur arithmétique :");

// // while (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
// //   operator = window.prompt('Merci d\'entrer un opérateur arithmétique');
// // }

// // let num2 = window.prompt("Second nombre :")

// // while(isNaN(num2) || num2 === '0') {
// // num2=window.prompt("Merci d'entrer un nombre :")
// // }


// // const textFormula = num1 + " " + operator + " " + num2;
// // document.write(textFormula);
// // document.write("<br/>");

// nb1 = Number(num1);
// nb2 = Number(num2);

// // let result;
// // if (operator === "+") {
// // result = num1 + num2;
// // document.write(result.toString());
// // } 

// // else if (operator === "-") {
// // result = num1 - num2;
// // document.write(result.toString());
// // } 

// // else if (operator === "*") {
// // result = num1 * num2
// // document.write(result.toString());
// // }

// // else {
// // result = num1 / num2;
// // document.write(result.toString());
// // }



// =============== BOUCLE WHILE ==============

// let num1 = Number(window.prompt("Premier nombre :"));

// while(isNaN(num1) || num1 === 0) {
//   num1=Number(window.prompt("Merci d'entrer un nombre :"))
// }


// let operator = window.prompt("Opérateur arithmétique :");

// while (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
//   operator = window.prompt('Merci d\'entrer un opérateur arithmétique');
// }

// let num2 = Number(window.prompt("Second nombre :"))

// while(isNaN(num2) || num2 === 0) {
// num2=window.prompt("Merci d'entrer un nombre :")
// }


// // const textFormula = num1 + " " + operator + " " + num2;
// const textFormula = `${num1} ${operator} ${num2}`;
// document.write(textFormula);
// document.write("<br/>");

// nb1 = Number(num1);
// nb2 = Number(num2);

// let result;
// if (operator === "+") {
// result = num1 + num2;
// document.write(result.toString());
// } 

// else if (operator === "-") {
// result = num1 - num2;
// document.write(result.toString());
// } 

// else if (operator === "*") {
// result = num1 * num2
// document.write(result.toString());
// }

// else {
// result = num1 / num2;
// document.write(result.toString());
// }

let num1 = Number(window.prompt("Premier nombre :"));

while(isNaN(num1) || num1 === 0) {
  num1=Number(window.prompt("Merci d'entrer un nombre :"))
}


let operator = window.prompt("Opérateur arithmétique :");

while (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
  operator = window.prompt('Merci d\'entrer un opérateur arithmétique');
}

// 

let num2 = Number(window.prompt("Second nombre :"))

while(isNaN(num2) || num2 === 0) {
num2=window.prompt("Merci d'entrer un nombre :")
}


// const textFormula = num1 + " " + operator + " " + num2;
const textFormula = `${num1} ${operator} ${num2}`;
document.write(textFormula);
document.write("<br/>");

nb1 = Number(num1);
nb2 = Number(num2);

let result;
if (operator === "+") {
result = num1 + num2;
document.write(result.toString());
} 

else if (operator === "-") {
result = num1 - num2;
document.write(result.toString());
} 

else if (operator === "*") {
result = num1 * num2
document.write(result.toString());
}

else {
result = num1 / num2;
document.write(result.toString());
}

