//Récupérer les éléments du DOM
var clickButton = document.getElementById("clickButton");
var resetButton = document.getElementById("resetButton");
var counter = document.getElementById("counter");

//Variable pour le nombre de clics

var count = 0;

//Fonction pour mettre à jour le compteur
function updateCounter() {
    counter.innerText = count;
}
//augmente le nombre a chaque clique
clickButton.addEventListener("click", function(){
    count++;
    updateCounter();
})
//Remettre à 0 le compteur
resetButton.addEventListener("click", function(){
    count = 0
    updateCounter();
})