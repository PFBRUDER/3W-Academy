let ball = {
  color: "#FF0000",
  radius:20,
  posX:300,
  posY: 100,
  // posX : null,
  // posY : null,
  directionX : null,
  // directionY : 1,
  directionY : null,
  speed : null
}

let boardGame = {
  background : 'rgb(136, 136, 136)',
  width : 800,
  height : 600,
  canvasDom : null,
  ctx : null,
  gameOver : false
}

let paddle = {
  colorPad : 'blue',
  widthPad : 150,
  heightPad : 10, 
  posPadX : 400,
  posPadY : 550,
  speedPad : 3
}

let msg = {
  font: 'bold 50px Verdana',
  msgColor : '#2223F5',
  text : 'Game Over'
}



document.addEventListener('DOMContentLoaded', function() {

  ball.directionY = 1
  ball.speed = 2

  // objet du DOM canvas
  boardGame.canvasDom = document.getElementById('canvas')

  //  le contexte utilisé 
  boardGame.ctx = boardGame.canvasDom.getContext('2d')


  // taille du boardgame
  boardGame.canvasDom.width = boardGame.width
  boardGame.canvasDom.height = boardGame.height



  // pour animer la balle, on appelle sa fonction
  dessin()

  // Pour faire bouger le paddle
  document.addEventListener('keydown', movePaddle)

  // pour détexter les collisions
  Collisions()

  // pour animer la balle
  requestAnimationFrame(moveGame)
 

})


function dessin () {
    // On vide le canvas avant de redessiner
    boardGame.ctx.clearRect(0, 0, boardGame.canvasDom.width, boardGame.canvasDom.height)

    //  On dit au contexte la couleur du background
    boardGame.ctx.fillStyle = boardGame.background
  
  
    boardGame.ctx.fillRect(0,0,boardGame.canvasDom.width, boardGame.canvasDom.height)
  
    // couleur de la balle
    boardGame.ctx.fillStyle = ball.color
    boardGame.ctx.fillRect(ball.posX, ball.posY, ball.radius, 0, 2*Math.PI)
  
    // on forme la balle
    boardGame.ctx.beginPath()
    boardGame.ctx.arc(ball.posX, ball.posY, ball.radius, 0, 2*Math.PI)
    boardGame.ctx.fill()  

    // ONFORME UN PADDLE
    // couleur du plateau
    boardGame.ctx.beginPath()
    boardGame.ctx.fillStyle = paddle.colorPad
    boardGame.ctx.fillRect(paddle.posPadX, paddle.posPadY, paddle.widthPad, paddle.heightPad);
    boardGame.ctx.fill()   
    
    // Message de game over
    boardGame.ctx.beginPath()
    boardGame.ctx.font = msg.font
    boardGame.ctx.fillStyle = msg.msgColor
    boardGame.ctx.fillText(msg.text, null, null)
    boardGame.ctx.fill() 

        // pour tester où mettre le msg de game over déplacer ce console.log
        console.log(boardGame.ctx.fillText(msg.text, 200, 200))


}


function moveGame () {
  
  ball.posY += ball.speed * ball.directionY
//  console.log(ball.directionY)
  if(ball.posY - ball.radius <= 0 || ball.posY + ball.radius >= boardGame.height  )
  {    
    ball.directionY *= -1   
  }

  dessin()

  // Pour mettre le jeu en standby le temps de tout configurer, commenter requestAnimationFrame
  // requestAnimationFrame(moveGame)
  Collisions()

}

function movePaddle(e) {

  switch(e.key)
  {
    case 'ArrowLeft':if(paddle.posPadX > 0) paddle.posPadX--;
    break
    case 'ArrowRight':if(paddle.posPadX + paddle.widthPad < boardGame.canvasDom.width) paddle.posPadX++;
    break
    // default: game.msgErreur = 'bad touche'
    // break

  }
  dessin()
}

function Collisions() {

  // si la position Y de la balle est égale à la position Y du paddle
    // ET
    // si la position X de la balle est inférieure à la position X du paddle (donc devant le début du paddle)
    // => la balle continue

    if (ball.posY == paddle.posPadY && ball.posX < paddle.posPadX ) 
    {
      ball.directionY *= 1;      
    }

    // OU

    // si la position Y de la balle est égale à la position Y du paddle
    // ET
    // si la position X de la balle est inférieure à la position X + la longueur du paddle (donc quand la balle touche la largeur du paddle)
    // => la balle repart dans l'autre sens

    else if (ball.posY == paddle.posPadY && ball.posX < paddle.posPadX + paddle.widthPad ) {
      ball.directionY *= -1
    }

    // SINON
    // si la position X de la balle est supérieure à la position X + la longueur du paddle (donc plus loin que la largeur du paddle)
    // => la balle continue

    else if ( ball.posX > ball.posX + paddle.widthPad) {
      ball.direction *= 1
    }

    console.log(msg)

    // Si la balle entre en collision avec le bas du jeu, game over

    if (ball.posY + ball.radius == boardGame.height) {
      // définir l'Id de l'animation pour pouvoir l'arêter
      // cancelAnimationFrame(moveGame)
      

      console.log('Game Over')   
    }
    dessin()

}

