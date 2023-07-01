const ul = document.querySelectorAll('ul> li:first-child, ul>li:last-child')

const li = ul[0]
const lii = ul[1]
li.classList.add('toto')
console.log(li)


document.addEventListener('click', function(e) {
  console.log('ready')
})
document.addEventListener('keydown', function(e) {
  console.log(e);
  if (e.keyCode === 65 || e.keyCode === 'a') {
    console.log('super!!')
  }
})


document.querySelector('#btn').addEventListener('click', function() {
  li.classList.toggle('toto')
})

document.addEventListener('DOMContentLoaded', function() {
  console.log('ready')
})

function domReady(event) {
  console.log('domReady');
  console.log(event);
  }
  document.addEventListener('DOMContentLoaded', domReady);


  // clique gauche simple
document.getElementById("btn").addEventListener('click', function(event) {
  console.log("je clique")

  //On empêche le comportement par défaut de l'élément :
  //Si l'élément est un lien, il dirigera pas la ou le href indique : il ne fera rien.

  event.preventDefault();

  // On log l'élément qu'on a cliqué :
  console.log(event.target);
  });

  // double clique :
document.getElementById("btnDouble").addEventListener('dblclick', function(event) {
  console.log("je double clique")
  event.preventDefault();
  console.log(event);
  });

  // mouvement de la souris
  document.querySelector('section').addEventListener('mousemove', function(move) {
    document.querySelector('section').style.background = "blue"
  console.log("changement de couleur")
  });


