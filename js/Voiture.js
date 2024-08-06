let voiture = {}
console.log(voiture);
let gens = [
    passager1 = "passager1",
    passager2 = "passager2",
];

voiture.passager1 = gens;

voiture.marque = "marque";
console.log(voiture.marque);

voiture.année = "année";
console.log(voiture.année);

voiture.dateachat = "date d'achat";
console.log(voiture.dateachat);

document.write(`<p>${gens[1].passager1}</p>`);



//  // Création de l'objet voiture vide
//  let voiture = {};

//  // Ajout des propriétés à l'objet voiture
//  voiture.marque = "Toyota";
//  voiture.anneeFabrication = 2018;
//  voiture.dateAchat = new Date('2022-06-15');
//  voiture.passagers = ["Alice", "Bob"];

//  // Fonction pour afficher les propriétés de la voiture sous forme de liste HTML
//  function afficherVoiture(voiture) {
//      let carInfoList = document.getElementById("car-info");

//      // Marque
//      let marqueItem = document.createElement("li");
//      marqueItem.textContent = "Marque: " + voiture.marque;
//      carInfoList.appendChild(marqueItem);

//      // Année de fabrication
//      let anneeItem = document.createElement("li");
//      anneeItem.textContent = "Année de fabrication: " + voiture.anneeFabrication;
//      carInfoList.appendChild(anneeItem);

//      // Date d'achat
//      let dateAchatItem = document.createElement("li");
//      dateAchatItem.textContent = "Date d'achat: " + voiture.dateAchat.toDateString();
//      carInfoList.appendChild(dateAchatItem);

//      // Passagers
//      let passagersItem = document.createElement("li");
//      passagersItem.textContent = "Passagers: " + voiture.passagers.join(", ");
//      carInfoList.appendChild(passagersItem);
//  }

//  // Appel de la fonction pour afficher les informations de la voiture
//  afficherVoiture(voiture);



// # Voiture sous forme d'objet

// ## Énoncé

// Créer puis afficher en HTML un objet représentant une voiture :

// 1. La marque de la voiture
// 2. Son année de fabrication
// 3. Sa date d'achat (avec l'objet Date)
// 4. La liste des passagers (au moins 2), avec le prénom de chacun des passagers

// Attention au départ l'objet sera créé vide !

// ## Détails

// * Afficher les propriétés de l'objet voiture sous la forme d'une liste HTML
// * On peut représenter n'importe quelle date en JavaScript en donnant une chaîne de caractères à la création d'une instance de la classe *Date* :

// <code>
//     // Représente la date du 5 avril 2014, format américain YYYY-MM-DD.
//     let myBirthday = new Date('2014-04-05');
// </code>

// ## Rappels

// * On peut stocker un objet dans un tableau tout comme on peut stocker un tableau dans un objet...