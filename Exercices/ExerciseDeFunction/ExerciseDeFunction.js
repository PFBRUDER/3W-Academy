// 1- Créer une fonction qui aura pour but de retourner l’incrément du nombre :
// cette fonction prendra 2 arguments, le 2ieme a une valeur par defaut de "1" 
// console.log(increment(8)); // 9
// console.log(increment(3, 2)); // 5
//     1.1 : en fonction déclarative
//     1.2 : en fonction fléchée

function increment0(nb, step=1) {
    document.write(nb + step)
}
increment0(8) 
increment0(3,2)

const increment = (nb, step=1) => nb + step; 

increment(8)
increment(3,2)
// document.write(increment(2, 3))

// // 2- 
// // const tab = ["Hello", "Coucou", "Salut"];
// // Avec une boucle foreach (fonction fléchée), afficher les éléments du tableau dans la console
const tab = ["Hello", "Coucou", "Salut"];
tab.forEach(element => console.log(element));


// // 3- 
// // const names = ["Dupont", "Durand", "Dubois"];
// // Ajouter dans le tableau M. Devant chacun des noms :
// //     3.1: avec une boucle for of
// //     3.2 : avec la méthode map
const names = ["Dupont", "Durand", "Dubois"];
// for (const iterator of names) {
//     console.log("M." + iterator)
// }

for (let element of names) {
    console.log("M." + element);
}
for (const key in names) {
    names[key] = `M. ${names[key]}`
}
console.log(names)


// names.map(x => console.log("Mr." + x))

//names.map(x => console.log("M." + x));

// 4- 
// const animaux = [
//     { nom: "Medor", espece: "Chien", age: 6 },
//     { nom: "Mistigri", espece: "Chat", age: 2 },
//     { nom: "Léonard", espece: "Chien", age: 4 },
//     { nom: "Robert", espece: "Caméléon", age: 1 },
// ];
//     4.1 : Transformer en un tableau de strings au format "Médor est un Chien de 6 ans » en utilisant la méthode map (afficher le tableau dans la console)
//     4.2 : /* La méthode filter permet de créer un nouveau tableau gardant seulement certaines valeurs du tableau de départ */
//         // Garder uniquement les chiens
//         // Renvoyer un tableau de chiens sous forme de strings
//         // donc appliquer d'abord un filter puis un map

const animaux = [
    { nom: "Medor", espece: "Chien", age: 6 },
    { nom: "Mistigri", espece: "Chat", age: 2 },
    { nom: "Léonard", espece: "Chien", age: 4 },
    { nom: "Robert", espece: "Caméléon", age: 1 },
];

for (let index = 0; index < animaux.length; index++) {
    const element = animaux[index];
    console.log(element.nom, element.espece, element.age)
}

const animauxStrings = animaux
.map(
    animal =>
        `   ${animal.nom} est un ${animal.espece.toLowerCase()} de ${animal.age} 
            ${animal.age > 1 ? "ans" : "an"}
        `
);

//console.log(animaux.filter((animal) => animal.espece === "Chien"));

const chiensStrings = animaux.filter((animal) => animal.espece === "Chien")
.map(
    (animal) =>
        `${animal.nom} est un ${animal.espece.toLowerCase()} de ${animal.age} ${
            animal.age > 1 ? "ans" : "an"
        }`
    );
console.log(chiensStrings);

// 5-	
// créer un bouton en HTML avec l’id de votre choix
// L’ exercice est simple au moment du clic je lance une fonction qui va afficher  10 fois Bonjour
// Le 5e Bonjour doit être différent des autres, par une couleur ou un texte plus gros  ou autre

document.getElementById("btn").addEventListener("click", function() {
    for (let index = 0; index <= 9; index++) {
        let text = "Bonjour"
        if (index == 4) {
            document.write(text.fontcolor("red") + "<br>")
        } else {
            document.write(text + "<br>")
        }
    }
})