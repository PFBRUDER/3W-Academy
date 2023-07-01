let carre = {
  color: "#FF0000",
  length:30,
  posX:10,
  posY:10

};

let game = {
  speed:0.5,
  width: 600,
  height:400,
  background:'rgb(136, 136, 136)',
  canvasDOM:null,
  ctx: null,
  msgErreur:null
}





document.addEventListener('DOMContentLoaded',function () {
  game.canvasDOM= document.getElementById('canvas')

  game.canvasDOM.width = game.width
  game.canvasDOM.height = game.height

  // L'objet du DOM Canvas
  game.ctx = game.canvasDOM.getContext('2d')


  dessinCarre();


// POUR FAIRE BOUGER LE CARRE AVEC LE CLAVIER on appelle ici la fonction et on construit la fonction plus bas
  document.addEventListener('keydown', bougeCarre)
})

function dessinCarre () {
  // qu'on aurait aussi pu appeler fonction balle puisqu'on transforme le carré en balle

  // On vide le Canvas avant de redessiner
  game.ctx.clearRect(0, 0, game.canvasDOM.width, game.canvasDOM.height);

  game.ctx.fillStyle = game.background;
  game.ctx.fillRect(0,0,game.canvasDOM.width,game.canvasDOM.height)

  game.ctx.fillStyle = carre.color;
  game.ctx.fillRect(carre.posX, carre.posY, carre.length, carre.length);


  // SI ON VEUT UNE BALLE
  game.ctx.beginPath()
  game.ctx.arc(carre.posX, carre.posY, carre.length, 0, 2 * Math.PI);
  game.ctx.fill()

  // SI ON N'APPUIE PAS SUR UNE TOUCHE DIRECTIONNELLE

  if (game.msgErreur != null) {
    game.ctx.font = '60px Verdana';
    game.ctx.fillStyle = 'red';
    game.ctx.fillText(game.msgErreur,100,200);
  }

}



function bougeCarre(e) {
  console.log(e.key)
  
  switch(e.key)
  {
    case 'ArrowUp': if (carre.posY > 0) carre.posY--;
    break
    case 'ArrowDown':if (carre.posY + carre.length < game.canvasDOM.height) carre.posY++;
    break
    case 'ArrowLeft':if(carre.posX > 0) carre.posX--;
    break
    case 'ArrowRight':if(carre.posX + carre.length < game.canvasDOM.width) carre.posX++;
    break
    default: game.msgErreur = 'bad touche'
    break

  }
  dessinCarre()
}


