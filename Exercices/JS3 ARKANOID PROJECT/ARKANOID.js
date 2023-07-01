let carre = {
  color: "#FF0000",
  length:30,
  posX:100,
  posY:100
};

let moveBall = {
  ball: null,
  ballPosX : null,
  ballposY : null,
  ballDirectionX : null,
  ballDirectionY : null,
  ballSpeed :null
}

let ballGame = {
  widthGame : 600,
  heightGame : 400,
  background:'rgb(136, 136, 136)',
  canvasDOM:null,
  ctx: null,
  limitRight : null,
  limitBottom : null,
  canvasDOM : null,
  ctx: null
}


document.addEventListener('DOMContentLoaded',function () {
  ballGame.canvasDOM = document.getElementById('canvas')

  ballGame.canvasDOM.width = ballGame.widthGame
  ballGame.canvasDOM.height = ballGame.heightGame

  // L'objet du DOM Canvas
  ballGame.ctx = ballGame.canvasDOM.getContext('2d')

  

  dessinBall();
  playGame ();
  requestAnimationFrame(playGame)

})

function dessinBall () {
  // qu'on aurait aussi pu appeler fonction balle puisqu'on transforme le carré en balle

  // On vide le Canvas avant de redessiner
  // game.ctx.clearRect(0, 0, game.canvasDOM.width, game.canvasDOM.height);

  // 
  // game.ctx.fillStyle = game.background;
  // game.ctx.fillRect(0,0,game.canvasDOM.width,game.canvasDOM.height)

  ballGame.ctx.fillStyle = carre.color;
  // ballGame.ctx.fillRect(carre.posX, carre.posY, carre.length, carre.length);


  // SI ON VEUT UNE BALLE
  ballGame.ctx.beginPath()
  ballGame.ctx.arc(carre.posX, carre.posY, carre.length, 0, 2 * Math.PI);
  ballGame.ctx.fill()

  // SI ON N'APPUIE PAS SUR UNE TOUCHE DIRECTIONNELLE

  // if (game.msgErreur != null) {
  //   game.ctx.font = '60px Verdana';
  //   game.ctx.fillStyle = 'red';
  //   game.ctx.fillText(game.msgErreur,100,200);
  // }

}




document.addEventListener('DOMContentLoaded', function() {

  // ballPosX = 100
  ballPosY = 100

  // ballDirectionX = 1
  ballDirectionY = 1

  ballSpeed = 2
  moveBall = document.getElementById('moveBall')
  // limitRight = widthGame - ball.clientWidth / 2
  limitBottom = heightGame - ball.clientHeight / 2

  requestAnimationFrame(playGame);

})

function playGame() {

  ballGameWindow.canvasDOM.widthGame = ballGameWindow.widthGame
  ballGameWindow.canvasDOM.heightGame = ballGameWindow.heightGame
  ballGameWindow.ctx.clearRect(0, 0, ballGameWindow.canvasDOM.widthGame, ballGameWindow.canvasDOM.heightGame);

  ballPosY += ballSpeed * ballDirectionY
  moveBall.style.top = `${ballPosY}px`

  if(ballPosY <= 0 || ballPosY >= limitBottom) {
    ballDirectionY *= -1
  } 

  requestAnimationFrame(playGame)
}









// POUR FAIRE BOUGER LE CARRE AVEC LE CLAVIER on appelle ici la fonction et on construit la fonction plus bas
  // document.addEventListener('keydown', bougeCarre)


// POUR LE JEU DIRECTIONNEL

// let game = {
//   speed:0.5,
//   width: 600,
//   height:400,
//   background:'rgb(136, 136, 136)',
//   canvasDOM:null,
//   ctx: null,
//   msgErreur:null
// }

// pour faire bouger le carre


// function bougeCarre(e) {
//   console.log(e.key)
  
//   switch(e.key)
//   {
//     case 'ArrowUp': if (carre.posY > 0) carre.posY--;
//     break
//     case 'ArrowDown':if (carre.posY + carre.length < game.canvasDOM.height) carre.posY++;
//     break
//     case 'ArrowLeft':if(carre.posX > 0) carre.posX--;
//     break
//     case 'ArrowRight':if(carre.posX + carre.length < game.canvasDOM.width) carre.posX++;
//     break
//     default: game.msgErreur = 'bad touche'
//     break

//   }
//   dessinCarre()
// }