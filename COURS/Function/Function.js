// les functions
// Il existe quatre syntaxes différentes nous permettant de créer une fonction en JavaScript. 
// On va ainsi pouvoir créer une fonction en utilisant 
// une déclaration de fonction ;
// une expression de fonction ;
// une fonction fléchée ;
//map()

// 0)_______________________________________________________
//- fonction sans paramètre : 
function bonjourSansPara()
{
    alert("Bonjour à toi!");
}
//bonjourSansPara(); // affiche "Bonjour à toi!


// 1)_______________________________________________________
// Pour créer une expression de fonction, nous allons utiliser une syntaxe similaire à celle-ci-dessus à la 
//différence qu’on va cette fois-ci directement assigner notre fonction à une variable dont on choisira le nom.

// Généralement, lorsqu’on crée une fonction de cette manière, on utilise une fonction anonyme qu’on 
// assigne ensuite à une variable. Pour appeler une fonction créée comme cela, on va pouvoir utiliser 
// la variable comme une fonction, c’est-à-dire avec un couple de parenthèses après son nom.
const disBonjour = function() {
    alert('Bonjour');
};
//disBonjour()


// 2)_______________________________________________________
const disBonjourPrenom = function bonjour(prenom)
{
    if (prenom){
        //alert('Bonjour ' + prenom);
        alert(`Bonjour ${prenom}`);
    }else{
        bonjour('inconnu');
    }
}
Affichage :
// uttilisation de la fonction:
//disBonjourPrenom(); // affiche "Bonjour inconnu!"
//disBonjourPrenom("Jean"); // affiche "Bonjour Jean!"
//disBonjourPrenom("Olive"); // affiche "Bonjour Olive!"
//disBonjourPrenom("Machin"); // affiche "Bonjour Machin!"


// 3)_______________________________________________________
// une fonction qui calcule le carre d'un nombre.
// function carre(nombre)
// {
//     return nombre * nombre ;
// }
// // on exécute la fonction une seule fois
// let result = carre(5);
// console.log(result)
// document.write(result);

// 4)_______________________________________________________
// on exécute la fonction une seule fois
//var resultat = carre(4);

// on affiche le résultat brut...

// ...ou on décide d'afficher un message
// var message = " la réponse et " + result;
// document.write(message);
//- expression de fonction : 


// 5)_______________________________________________________
//Fonction déclarative :
// function carre(n)
// {
//     console.log(n * n);
// }
// carre(4); // 16


// 6)_______________________________________________________
//Expression de fonction : 
// var carre = function(n)
// {
//     console.log(n * n);
// };
// carre(4); // 16


// 7)_______________________________________________________
// fonction fléchée équivalente : les parenthèses sont optionnelles lorsqu’il n’y a qu’un seul paramètre
var c1 = (n) => 
{
   
    return n * n;
};


// 8)_______________________________________________________

// Lorsqu'il y a une seule instruction (return n * n;), l'expression simple ne nécessite pas d'accolades ({}). L'expression est également la valeur de retour implicite pour cette fonction :
var c1 = n =>  n * n;


// 9)_______________________________________________________
// Une fonction fléchée sans paramètre a besoin d'une paire de parenthèses vides :
var bonjour = () => 'hello!';
//bonjour(); // hello!


// 10)_______________________________________________________

var aaa = 42; // contexte global

function foo()
{
    var aaaz = 42; // contexte local
}
//console.log(aaaz); // undefined

function bar()
{
    var bbb = 42; // contexte local
}
//console.log(bbb); // undefined


// //La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie 
// //sur chaque élément du tableau appelant.
const array = [1, 2, 4, 5]
console.log("*******************************")
const map = array.map(x => x * 2)
console.log(map)


/** *********************************************************************************************************** */
/** *********************************************************************************************************** */
const soldYesterday = [20, 40.55, 3.12, 99.95]; 
const soldToday = [15, 45.55, 13.55, 130.99]; 
const vatRate = 21; 

function removeVatFromPrices(prices, vatRate) { 
    for (let i = 0; i < prices.length; ++i) { 
        prices[i] = prices[i] - prices[i] * vatRate / 100; 
        console.log(prices[i])
    } 
} 

// removeVatFromPrices(soldYesterday, vatRate); 
// console.log("*********************************************************")
// removeVatFromPrices(soldToday, vatRate); 
