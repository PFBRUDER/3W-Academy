// il existe 5 boucles en javaScript
// for
// while
// do while
// for in
// for of
//               0          1          2          3     4     5      6      7
//let arrays = ["fraise", "chocolat", "cerise", "banane"]
let age = prompt('ton age')
while (isNaN(age)) {

}

// for (let index = arrays.length - 1; index >= 0; index--) {
//     console.log(index)
//     const element = arrays[index];
//     console.log(element);
// }
// // Boucle For
// for (let index = 0; index < arrays.length; index++) {
//     console.log(arrays[index])
//     let element = arrays[index]
//     console.log(element)
// }

 // Boucle While
let number = Math.random()// retourn un chiffre a virgule entre 0 et 1
// while (number < 0.9) {
//     number = Math.random()
//     console.log(number)
// }

// // boucle Do While
// let numb;
// do { 
//     numb = Math.random()
//     console.log(numb)
// } while(numb < 0.9)

// // boucle For IN
//               0          1          2          3
let arrays = ["fraise", "chocolat", "cerise", "banane"]

// for (var element in arrays) {
//     console.log(arrays[element]); // affiche 0, 1, 2, 3 dans la console
// }
// // // // boucle For OF
// for (var element of arrays) {
//     if(element === 'chocolat') {
//         console.log('____________')
//         console.log(element)
//     } // affiche a, b, c dans la console
// }

// //Manipule directement le tableau
// // permet d'exécuter une fonction donnée sur chaque élement du tableau
arrays.forEach((element, index) => console.log(element, index));