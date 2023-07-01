// function add(x, y) {
function add(x = null, y = null) {
  const total = x + y
  return total
}

console.log(add(5, 5))



//===================== 10 BONJOUR ==================

let i = 0
function bonjour(nbF, msg = 'Bonjour') {
    document.write(`<p>${msg} ${i}</p>`)
    i++
   if(i < nbF) {
       bonjour(10, 'Salut Mathieu')
   }
}

bonjour(10, 'Salut Mathieu')


// ========= OBJETS de TABLEAUX ==========

const tableau = ['1','2','3']
const tableauD = [
    //0 
    ['jouer','LOL','Foot'],
    //1
    ['Dostrel','jonthan','25']
]

const userObject = {
    firstName: "Magali",
    age: 22,
    hobbies: ["Ski", "Jeux-vidéos", "Peinture sur soie"]
};

console.log(userObject['firstName'])
console.log(userObject.age)
console.log(userObject.firstName)
console.log(userObject.hobbies[2])