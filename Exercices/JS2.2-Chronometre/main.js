'use strict'

// document.addEventListener('DOMContentLoaded', function() {
//   const event = window.setTimeout(function() {
//       alert('Je suis Jonathan')
//   }, 5000)
//   console.log(event)

//   document.getElementById('stop').addEventListener('click', function() {
//       clearTimeout(event)
//   })
// 
// })

let chronoDOM;
let chrono = 0;

document.addEventListener('DOMContentLoaded', function () {
  chronoDOM = document.querySelector('#chrono');
  window.setTimeout(updateChrono, 1000);
  console.log(chronoDOM);
});

function updateChrono () {
  chronoDOM.innerText = ++chrono;
  window.setTimeout(updateChrono, 1000);
  console.log(chronoDOM);
}

// BONUS 1




// document.addEventListener('DOMContentLoaded', function() {
//   const seconde =window.setTimeout(function(){
//     console.log(seconde)
//   },1000)
//   const chronomètre = window.setTimeout(function(){
//     console.log(chronomètre + seconde)
//   },1000)

// }
// )
// function chronomètre(callBack) {
//   const chronomètre = setTimeout + setTimeout
//   callback (seconde)
//   console.log(chronomètre)
// }
// console.log(seconde)



//   let chronomètre = window.setTimeout(chrono, 1000)
//   function chrono () {
//     let timer = 0;
//     console.log(chronomètre + seconde)
//   }
// }
// )

// let alertId = window.setTimeout(
//   function(){window.alert('Cela fait 3 secondes que cette ligne Javascript a été lu par le navigateur !')},
//   3000);
//   En utilisant une fonction fonction de callBackFunction nommée
//   let alertId = window.setTimeout(alertInfo,3000);
//   function alertInfo() {
//   window.alert('Cela fait 3 secondes que cette ligne Javascript a été lu par le navigateur !');
//   }