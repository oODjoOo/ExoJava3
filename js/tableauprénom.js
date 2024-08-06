let array = [];

let prénom = [""];

for (let i = 0; i <= 5; i++) {
    let user = prompt("Votre prénom?");
    document.write(`${user} ,`);

}




    // let names = [];
    // let maxNames = 5;

    // for (let i = 0; i < maxNames; i++) {
    //     let name = prompt("Entrez un prénom:");
        
    //     // Vérifiez que l'entrée n'est pas un nombre
    //     if (!isNaN(name)) {
    //         alert("Veuillez entrer un prénom, pas un nombre.");
    //         i--; // Décrémentez le compteur pour redemander un prénom
    //         continue;
    //     }

    //     // Ajoutez le prénom au tableau
    //     if (name) {
    //         names.push(name);
    //     } else {
    //         break; // Si l'utilisateur ne saisit rien, arrêtez la boucle
    //     }
    // }

    // // Affichez le tableau de prénoms ou un message si vide
    // if (names.length > 0) {
    //     document.getElementById("result").innerText = "Les prénoms sont: " + names.join(", ");
    // } else {
    //     document.getElementById("result").innerText = "Aucun prénom n'a été entré.";
    // }








// Tableau de prénoms
// Demandez des prénoms à l'utilisateur et stockez les dans un tableau (vide au départ). À la fin, il faudra afficher le contenu du tableau sur la page du navigateur seulement si le tableau contient des prénoms.
// En effet, ça ne sert à rien de l 'afficher s'il ne contient rien. Pour l 'affichage,
// séparez chaque prénom par une virgule. Si le tableau ne contient rien, faites-le savoir à l’ utilisateur avec un message sur la page.

// NB: Limitez le tableau à 5 prénoms
// BONUS: Vérifiez que l'utilisateur ne cherche pas à enregistrer des nombres