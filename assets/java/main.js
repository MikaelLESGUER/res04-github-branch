function createRainbowBoxes() {
    var colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];
    var boxes = document.getElementsByClassName('box');
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        box.style.backgroundColor = colors[i];
        box.style.opacity = 0;
        setTimeout((function(element) {
            return function() {
                element.style.opacity = 1;
            };
        })(box), i * 1000);
    }
}

window.addEventListener('DOMContentLoaded', function() {
    createRainbowBoxes(); // Appeler la fonction pour la première fois

    // Répéter l'appel à la fonction toutes les 30 secondes
    setInterval(function() {
        createRainbowBoxes();
    }, 15000);
});
