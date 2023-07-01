/**
 * juste compte
 * mise en place d'un mini-jeu où l'objectif est de trouver le nombre aléatoire qui a été généré
 * si le nombre choisi et plus petit que le nombre aléatoire, affiché dans le prompt le nombre caché est plus grand :))>>
 * si le nombre choisi et plus grand que le nombre aléatoire, affiché dans le prompt le nombre caché est plus petit :))>>
 * si le nombre choisi et le même que le nombre aléatoire, affiché dans un alert Bravo vous avez trouvé le nombre caché :))>>
 * 
 * Utilisation : boucle, prompt, condition(if, else, etc..), Math random => pour générer un nombre aléatoire
 * 
 * Bonus 1 : 
 * ajouté un système de points de vie pour que l'utilisateur soit limité en nombre de coups a joué exemple (5 chances avant de trouver le nombre caché)
 * 
 * Bonus 2 : quand l'utilisateur donne un nombre incorrect retourné lui dans le prompt avec le nombre de points de vie restante
 * 
 * Bonus 3 : au lancement du jeu affichait les règles du jeu
 * afficher les coups joués par l'utilisateur dans la page HTML qu'ils où elles ont perdu ou pas 
 * afficher aussi le nombre généré aléatoirement 
 * 
 * ATTENTION : vérifié bien que l'utilisateur entre bien un nombre 
 */

//initialisation des variable
let nbAleatoire = null;
let numberRep = null;
let play = true;
let table = [];
let live = 1;
let reste = 5;

//Event
let nombreUser = document.getElementById("nombreUser");

let info = document.getElementById("info");
let nbCacher = document.getElementById("nbCacher");
let trouver = document.getElementById("trouver");
let labelInput = document.getElementById("labelInput");

nombreUser.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        // event.preventDefault();

        //converti le string en int
        numberRep = Number(nombreUser.value)

        table.push(numberRep)

        if(numberRep !== nbAleatoire && reste === 0) {
            labelInput.innerHTML = `${reste}`
            trouver.innerHTML =`
                vous avez utilié vos 5 vies ! u lose <br>
                nombre généré : ${nbAleatoire} <br> 
                nombre de coup éffectuer : ${table.length} <br>
                détail des coups éffectuers : ${table} <br>
            `
        } 
        else if(numberRep === nbAleatoire && reste >= 0) {
            trouver.innerHTML=`
                Bravo!!! vous avez trouvé le nombre caché  <br> 
                nombre généré : ${nbAleatoire}  
                nombre de coup éffectuer : ${table.length} <br>
                détail des coups éffectuers : ${table} <br>
            `
        }
        else {
            afficheInfos()
        }
    }
})

//annonce du jeu
//alert("Titre : Juste de compte \n un nombres a été généré aléatoirement \n entre 0 et 100 \n l'objectif du jeu est de  trouver le nombre généré :)) ")

//nombre généré aléatoirement
function genereNombreAleatoire() {
    if(nbAleatoire === null) {

        nbAleatoire = Math.floor(Math.random() * 100);
        document.getElementById("chargement").innerHTML = `Le nombre a été généré :) `
        nbCacher.innerHTML = `${nbAleatoire}`
    
        //Affiche ou non le nombre généré
        document.getElementById("afficher").addEventListener("click", function() {
            nbCacher.classList.toggle("hidden")
        })
    }
    
}

function afficheInfos() {
    live++
    reste--
    //annonce
    labelInput.innerHTML = `${reste}`
    labelInput.style.color = "red"

    if(numberRep > nbAleatoire) {
        info.innerHTML = "le nombre caché est plus petit :)) ";
        nombreUser.value = ""
    } 
    else if(numberRep < nbAleatoire) {
        info.innerHTML ="le nombre caché est plus grand :)) ";
        nombreUser.value = ""
    }
}

genereNombreAleatoire()
