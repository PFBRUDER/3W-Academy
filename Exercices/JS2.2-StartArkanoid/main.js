'use strict'

let ball = null;
let ballDirectionX = null
let ballPostX = null
let speed = null
let limitRight = null

document.addEventListener('DOMContentLoaded', function() {

    ballPostX = 100
    ballDirectionX = 1 
    speed = 2
    ball = document.getElementById('ball')
    limitRight = window.innerWidth - ball.clientWidth / 2

    requestAnimationFrame(annimationBall);
    requestAnimationFrame(annimationBallY);

})

function annimationBall() {
  ballPostX += speed * ballDirectionX

  ball.style.left = `${ballPostX}px`
  
  if(ballPostX <= 0 || ballPostX >= limitRight) {
    ballDirectionX *= -1
  } 
  requestAnimationFrame(annimationBall);
}

let ballDirectionY = null
let ballPostY = null
let limitBottom = null

document.addEventListener('DOMContentLoaded', function() {

  ballPostY = 100
  ballDirectionY = 1 
  speed = 2
  ball = document.getElementById('ball')
  limitBottom = window.innerHeight - ball.clientWidth / 2

  requestAnimationFrame(annimationBall);
  requestAnimationFrame(annimationBallY);

})


function annimationBallY() {
  ballPostY += speed * ballDirectionY

  ball.style.top = `${ballPostY}px`
  
  if(ballPostY <= 0 || ballPostY >= limitBottom) {
    ballDirectionY *= -1
  } 
  requestAnimationFrame(annimationBallY);
}

window.captureEvents(Event.onclick)
window.addEventListener('onclick', function(event) {
  if (this.window.onclick) {
    annimationBallYPlaystate:pause;
    annimationBallPlaystate:pause;
  }
  else if (this.window.onclick && annimationBallYPlaystate===pause && annimationBallPlaystate===pause  ) {
    annimationBallYPlaystate:play;
    annimationBallPlaystate:play;
  }

})

// var anim = document.querySelectorAll('.display-anim');
// document.getElementById('play_stop').onclick = function () {
//     for (var i = 0; i < anim.length; i++) {
//         if (anim[i].style.animationPlayState == 'paused') {
//             anim[i].style.animationPlayState = 'running';
//         }
//         else {
//             anim[i].style.animationPlayState = 'paused';
//         }
//     }
// }

// function reg() {
//   window.captureEvents(Event.CLICK);
//   window.onclick = page_click;
//   console.log ('reg')
// }

// function page_click() {
//   alert('événement de clic sur la page détecté!');
//   console.log('page_click')
// }

//pause de l'animation: animation:pause

// ### Bonus 1 

// Donner un angle de départ de 45° vers le bas en plus d'une direction à droits. 
// La balle rebondira alors en bas puis à droite de l'écran, puis en haut, etc...
// Utilisez des objets Javascript pour gérer la balle et l'écran.

// ### Bonus 2
// Un clique sur la page met en pause ou reprend l'animation.
