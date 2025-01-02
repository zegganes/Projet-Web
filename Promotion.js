// Ajouter un écouteur d'événement pour le clic sur le bouton
button.addEventListener('click', function() {
    // Basculer la classe 'dark-mode' sur le body
    body.classList.toggle('dark-mode');

    // Modifier le texte du bouton en fonction du thème
    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Mode clair';
    } else {
        button.textContent = 'Mode sombre';
    }
});