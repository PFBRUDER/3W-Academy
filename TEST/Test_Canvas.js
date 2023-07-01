document.addEventListener('DOMContentLoaded',function () {
  let canvasDOM= document.getElementById('canvas')
 console.log(canvasDOM)

//  OBLIGATOIRE
// L'objet du DOM Canvas
  let ctx = canvasDOM.getContext('2d')

  ctx.strokeRect(50, 50, 200, 150)
  // (axeX,axeY, width, height )

  // On dit au contexte que la couleur de contour (stroke) est rouge (en gros, on prend un crayon)
	ctx.strokeStyle  =  "#FF00DD";

  // On trace le contour (stroke) d'un rectangle (puis on dessine avec le crayon)
  ctx.strokeRect(50,50,200,150);
  // bidouiller les axes pour placer le rectangle

  // On dit au contexte que la couleur de remplissage est rouge
	ctx.fillStyle="#FF0000";

  ctx.fillRect(255,205,200,150)

  // Stroke: carré vide
  // fill: remplissage du carré

   // On définie la police de caractère pour tous les textes
  ctx.font = 'bold 18px Verdana'

  // Couleur pour écrire Hello
  ctx.fillStyle ='#D1256'

  // On ecrit Hello
  ctx.fillText('Hello', 75, 100)
  
  // Couleur pour écrire World
  ctx.fillStyle ='#223F5'

  // ctx.fillText('World, 130, 100') une horreur à modifier manuellement
  //  On fait plutôt comme ça: 

  // On reprend les valeurs de position du hello juste au-dessus (75, 100)
  ctx.fillText('World', 75 + ctx.measureText('Hello').width+10, 100)

  // choix de couleur
  ctx.fillStyle = '#54D144';

  // ajout de texte
  ctx.fillText('Je suis PF', 75 + ctx.measureText('Hello').width + ctx.measureText('World').width+20, 100);

  // Couleur pour écrire '!'
  ctx.fillStyle = '#54D144';

    // On ecrit !
    ctx.fillText('!', 75 + ctx.measureText('Je suis PF').width + ctx.measureText('Hello').width + ctx.measureText('World').width+20, 100);

  let imageDOM = new Image()
  imageDOM.src = 'http://picsum.photos/400/200/';

  imageDOM.onload = function () {
    ctx.drawImage(imageDOM, 50, 205, 190, 140)
  }


  addImage(imageDOM, 50, 50, ctx, 200, 150);
  addImage(imageDOM, 50, 205, ctx, 200, 150);
  addImage(imageDOM, 255, 205, ctx, 200, 150);

  function addImage (image, posX, posY, ctx, w, h) {
    let imageDOM = new Image()
    imageDOM.src = image
    // imageDOM.src = 'http://picsum.photos/400/200/'
    imageDOM.onload = function () {
      ctx.drawImage(imageDOM, posX, posY, w, h)
    }

    console.log(imageDOM)

  
    console.log(ctx)
  }
})