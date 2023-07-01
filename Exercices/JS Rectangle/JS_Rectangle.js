




document.addEventListener('DOMContentLoaded',function () {
  let canvasDom = document.getElementById('canvasRectangle')
  let ctx = canvasDom.getContext('2d')

// ===============================
// =========== Rectangle =========
// ===============================

  // un rectangle sans remplissage avec un contour noir,
  ctx.strokeStyle="#000000"
  ctx.strokeRect(100,100,300,100)

  // un rectangle sans remplissage avec un contour vert,
  ctx.strokeStyle="#008000"
  ctx.strokeRect(100,300,300,100)

  // un rectangle plein, rempli de rouge.
  ctx.fillStyle='#FF0000'
  ctx.fillRect(100, 500, 300, 100 )


// ===============================
// =========== TEXTE =============
// ===============================
  // On définit la police de caractère pour tous les textes


   ctx.font= 'italic 15px Verdana';

  // Couleur pour écrire Hello
  ctx.fillStyle='#2E8B57';
  ctx.fillText('Hello', 100, 50);

  // Couleur pour écrire World
  ctx.fillStyle = '#FFFF00';
  ctx.fillText('world', 100+ctx.measureText('Hello').width+10, 50 );

  // pour ajouter'!' au bout de la phrase
  ctx.fillStyle = '#FF0000';
  ctx.fillText('!', 110+ctx.measureText('Hello').width + ctx.measureText('world').width+10, 50);


// ===============================
// ===== Incruster une image =====
// ===============================


  let img = new Image();
  img.src = 'http://picsum.photos/400/200/';

  img.addEventListener('load', function () {
        // On place l'image
    ctx.drawImage(img, 400, 400, 300, 100);
    addImage(img, 50, 50, ctx, 200, 150);
    
  })

  


})

