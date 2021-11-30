let voiture = {
    Nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    Couleur : "Marron",
    Contructeur : "Citroen",
    Carburant : "Solaire",
    nombrePortes : 3,
    Autonomie : "450km",
    vitesseMaxi : "120km/h"
};

let divContainer = document.getElementById("container");
let img = document.createElement("img");
img.src = voiture.imgUrl;
divContainer.append(img);

divContainer.innerHTML += "<br>";
divContainer.innerHTML += voiture.Nom + "<br>";
divContainer.innerHTML += voiture.nombresRoues + "<br>";
divContainer.innerHTML += voiture.Couleur + "<br>";
divContainer.innerHTML += voiture.Contructeur + "<br>";
divContainer.innerHTML += voiture.Carburant + "<br>";
divContainer.innerHTML += voiture.nombrePortes + "<br>";
divContainer.innerHTML += voiture.Autonomie + "<br>";
divContainer.innerHTML += voiture.vitesseMaxi;