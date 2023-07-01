/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/

// document.addEventListener('DOMContentLoaded', function(event) {
//   console.log('ready');
//   const btn = document.getElementById('moveDiv')
//   const btnHid = document.getElementById('moveDiv')
//   const btn = document.getElementById('moveDiv')
//   const btn = document.getElementById('moveDiv')
//   });

// let button = document.querySelector('moveDiv');

// button.addEventListener('click', event => {
//   button.innerHTML = `Nombre de clics : ${event.detail}`;
// });

// const clic = document.getElementById('moveDiv').addEventListener('onclick', function(event){
//   let div = document.querySelector('.red');
//   for (let count=0; count<4; count++) {    
//     if (count === 1) {
//       div.style.left = "250px";
//     }
//     else if (count === 2) {
//       div.style.top = "250px";
//       // div.style.left = "250px";
//     }
//     else if (count === 3) {
//       div.style.top = "250px";
//       div.style.left = "0"
//     }
//     else 
//     div = document.querySelector('.red');
//   }
// }) 

// let count = 0;
// let div = document.querySelector('.red');

// for (count=0; count<4; count++) {
//   let count = 0;
//   let div = document.querySelector('.red');

//   if (clic === 1) {
//     div.style.left = "250px";
//   }
//   else if (clic === 2) {
//     div.style.top = "250px";
//     div.style.left = "250px";
//   }
//   else if (clic === 3) {
//     div.style.top = "250px";
//   }
//   else 
//   div = div;
// }

// ++++++++++ CORECTION ++++++++++++
/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('moveDiv')
  const btnHid = document.getElementById('hideModal')
  const blockRed = document.querySelector('.red')
  const modal = document.querySelector('.modal')

  let count = 0

  btn.addEventListener('click', function(e) {
      count++
      if(count === 1) {
          blockRed.style.marginLeft = "40%"
          modal.classList.remove('active')
          document.body.classList.remove('modal-active')

      } 
      else if(count === 2) blockRed.style.marginTop = "20%"
      else if(count === 3) blockRed.style.marginLeft = "0"
      else {
          blockRed.style.marginTop = "0"
          modal.classList.add('active')
          document.body.classList.add('modal-active')
          count = 0
      }
  })

  btnHid.addEventListener('click', function(e) {
      modal.classList.remove('active')
      document.body.classList.remove('modal-active')
  })
})