let age = window.prompt("Quel est votre âge ?");
while (isNaN(age)) {
age = window.prompt("Merci de répondre un nombre. Quel est votre âge ?");
}
console.log("Vous avez " + age + " ans.");

