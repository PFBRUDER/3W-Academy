// 1- Créer une fonction qui aura pour but de retourner l’incrément du nombre : 
// console.log(increment(8)); // 9
// console.log(increment(3, 2)); // 5
//     1.1 : en fonction déclarative
//     1.2 : en fonction fléchée

// let x = 'nombre'
// function increment (x) {
// if (x === Number(x)) {
//   x = Number(x + 1)
//   console.log(x)
// }
// }
// console.log(increment (8))


// function increment (a) {
// for (i=0; i<2; i++) {
//   let b = a + i
//   return (b)
//   console.log(b)
// }
// }
// increment (8)
// console.log(increment (8))


// const add = (x, y) => {
//   return ((x + y))
// }
// console.log(add (3, 2))





// // 2- 
// // const tab = ["Hello", "Coucou", "Salut"];
// // Avec une boucle foreach (fonction fléchée), afficher les éléments du tableau dans la console

// const tab = ["Hello", "Coucou", "Salut"]
// console.log(tab)
// function showList (tab) {
//   tab.forEach (tab => {
//     console.log(tab)
//   {  )
//   console.log(el)
// }
// }




// // 3- 
// // const names = ["Dupont", "Durand", "Dubois"];
// // Ajouter dans le tableau M. Devant chacun des noms :
// //     3.1: avec une boucle for
// //     3.2 : avec la méthode map

// 3.1
// const names = ["Dupont", "Durand", "Dubois"];
// for (i=0; i<names.length; i++) {
//   // const key of names
//   names.splice(i, 1, (`Mr ${names[i]}`))  
// }
// console.log (names)

// for (const iterator of names) {
//   console.log(names)
// }


// 3.2
// const names = ["Dupont", "Durand", "Dubois"];
// const map = names.map(element => element.splice(`Mr ${names}`))
// // console.log(element),
                     
// //   names.splice(element, 1, (`Mr ${names[element]}`))
// // )
// // console.log(names)

// +++++++++++++++++ EXEMPLE +++++++++++++++++++
// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // Expected output: Array [2, 8, 18, 32]

  



// 4- 
// const animaux = [
//     { nom: "Medor", espece: "Chien", age: 6 },
//     { nom: "Mistigri", espece: "Chat", age: 2 },
//     { nom: "Léonard", espece: "Chien", age: 4 },
//     { nom: "Robert", espece: "Caméléon", age: 1 },
// ];
// //     4.1 : Transformer en un tableau de strings au format "Médor est un Chien de 6 ans » en utilisant la méthode map (afficher le tableau dans la console)

// const animauxString = [];
// for (let el in animaux) { 
//   console.log(animaux[el])
//     animauxString.recup = (animaux[el])
//     console.log(animauxString)
  
  // const tab = animaux.map(el => el.)
  // console.log('===========')
// const tabString = animaux.map (el => console.log(el))
// }



//     4.2 : /* La méthode filter permet de créer un nouveau tableau gardant seulement certaines valeurs du tableau de départ */
//         // Garder uniquement les chiens
//         // Renvoyer un tableau de chiens sous forme de strings
//         // donc appliquer d'abord un filter puis un map





// 5-	
// créer un bouton en HTML avec l’id de votre choix
// L’ exercice est simple au moment du clic je lance une fonction qui va afficher  10 fois Bonjour
// Le 5e Bonjour doit être différent des autres, par une couleur ou un texte plus gros  ou autre


let bonjour = 'bonjour'
for ( let bonj=0; bonj<10; bonj++) {
  if (bonj === 4) {
    document.write(`${bonjour.fontcolor:('red')} </br>`)
  }
}








// ++++++++++++ ce qui suit est pour le jeu du 

// let pointDeVie = 5;
// let essai = 1;
// let CoupsJoues = [];

// function game () {
//   let 
// }