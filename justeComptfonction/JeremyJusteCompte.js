// Création de l'élément input
const go = document.getElementById("go");

go.addEventListener('click', function() {
    
    const inputElement = document.createElement("input");
    
    // Configuration de l'élément input
    inputElement.type = "text";
    inputElement.id = "myInput";
    inputElement.placeholder = "Entrez votre texte ici";
    
    // Ajout de l'élément input à un élément existant dans le DOM
    let containerElement = document.getElementById("container");
    containerElement.appendChild(inputElement);
    console.log(inputElement)


    const myInput = document.getElementById("myInput");
    
    myInput.addEventListener('keydown', function(event) {
        if(event.key === 'Enter') {
            event.preventDefault()
            console.log(myInput.value)
        }
    })


})
