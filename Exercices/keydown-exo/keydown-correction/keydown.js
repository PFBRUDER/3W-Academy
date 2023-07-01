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
