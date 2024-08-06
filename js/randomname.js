

    
// for (name = 0;name <= name.lenght; --name) {}



function generateRandomName() {


let name = ["Jean", "Jeanne", "Steve", "Djo", "Ben"];

console.log(name);

let random = Math.floor(Math.random() * name.lenght);
let randomName = name[random];

document.querySelector("p").innerText =` ${randomName} a été choisi`;

// randomname = generateRandomName;

// console.log(randomname);
// document.write(randomname);
}


// for (i = 0; i === name.lenght; i++) {
//     randomname = generatename;
//     console.log(name[i]);
//     document.write(`<p>${generatename}</p>`);
// }







// Tirage de sort de noms
// Le but est de créer un tableau de plusieurs noms et de faire en sorte d'en générer un au hasard à chaque fois qu' l'on clique sur le bouton.

// Détails
// Votre script se lancera donc forcément à l'aide d'une fonction.
// Dans cas où le prénom aura déjà été sélectionné, il faudra en avertir l'utilisateur et relancer le tirage.
// Ce prénom ne sera plus sélectionnable une fois qu'on aura informé l'utilisateur !
// Si tous les prénoms ont été sélectionnés, informer l'utilisateur et arrêter la fonction.