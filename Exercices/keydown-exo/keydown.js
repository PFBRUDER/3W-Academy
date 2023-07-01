// document.addEventListener('DOMContentLoaded', () => {
//   let body = document.querySelector('body');
//   body = body.style.position = 'relative';
//   let divMove = document.getElementsByClassName('.move');

//   document.querySelector('.move').style.position = "absolute";

//   document.querySelector('.move').classList.add('active');
  // document.querySelector('body').addEventListener('keydown', function(event) {
//     let key = event.keydown;
//     switch (key) {
      
//       case 38 :
//       document.querySelector('.move').style.marginBottom= '1%';
//       break;
    
//       case 39 :
//         document.querySelector('.move').style.marginLeft = '1%';
//       break;
      
//       case 40 :
//         document.querySelector('.move').style.marginTop = '1%';
//       break;
      
//       case 37 :
//         document.querySelector('.move').style.marginRight = '1%';
//       break;
//     }
//   })  
// })


console.log("tete")
//document.onkeydown = clavier; // si une touche du clavier est touché, nous exécutons la fonction nommée "clavier"

	function clavier(e) { // e représente l'événement.
        console.log('rte')
		e = e || window.event;

		if (e.keyCode == '38') { // 38 correspond à la fléche du haut.
			//console.log('haut');
			move.style.top = (move.offsetTop - 10) + "px";
		}
		else if (e.keyCode == '40') { // 40 correspond à la fléche du bas.
			//console.log('bas');
			move.style.top = (move.offsetTop) + "px";
		}
		else if (e.keyCode == '37') { // 37 correspond à la fléche de gauche.
			//console.log('gauche');
			move.style.left = (move.offsetLeft - 10) + "px";
		}
		else if (e.keyCode == '39') { // 39 correspond à la fléche de droite.
			//console.log('droite');
			move.style.left = (move.offsetLeft) + "px";
		}
	}
  let teste = document.querySelector("body").addEventListener("keydown", function(e){
    clavier(e)
  })






// document.addEventListener('keydown', function(e) {
//   console.log(e);
//   if (e.keyCode === 65 || e.keyCode === 'a') {
//     console.log('super!!')
//   }
// })