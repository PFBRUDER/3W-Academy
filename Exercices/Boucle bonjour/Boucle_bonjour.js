/**
 * Crée une fonction qui retourne 10 fois bonjours
 * le 5ieme bonjour doit être différent des autres (par une couleur ou autre)
 * avec un document.write 
 * changements de couleur : couleur fontcolor
 * 
 * Bonus : ajouter un parametre aillons pour valeur par défaut Bonjour
 * a) afficher 10 * bonjour 
 * b) afficher autre chose que bonjour 
 * 
 *  * bonus 2 : ecrivez le bonjour dans la page HTML a l'aide de l'id  "li0"
 * * changements de couleur : style color
 * 
 */

// let bonjour = 'bonjour';

// for (let bonjour=0; bonjour<10, bonjour++) {
//   if (bonjour===4) {
//     document.write(`bonjour.font-color('red')`)
//   } 
//   else {
//     document.write(bonjour += '</br>')
//   }

// }


let i = 0
function bonjour(nbF, msg = 'Bonjour') {
    document.write(`<p>${msg} ${i}</p>`)
    i++
   if(i < nbF) {
       bonjour(10, 'Salut Mathieu')
   }
}

bonjour(10, 'Salut Mathieu')


