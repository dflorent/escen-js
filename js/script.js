// Options :
// longueur du mot de passe à générer
var length = 12;

// Chargement du DOM
document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('form');

    // Evénement soumission du formulaire
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Récupère les valeurs des champs du formulaire
        var serviceName = document.querySelector('#service-name').value;
        var login = document.querySelector('#login').value;
        var masterPassword = document.querySelector('#master-password').value;

        /*
        Hachage
        */
        var salt = btoa(serviceName + ":" + login + ":" + masterPassword);
        var derived = '';
        var hash = '';

        // On récupère uniquement les lettres
        for(var i = 0; i < salt.length; i++) {
            var char = salt.charAt(i);
            if (char.match(/[A-Za-z]/)) {
                derived += char;
            }
        }

        // On alterne les majuscules et les minuscules
        for(var i = 0; i < derived.length; i++) {
            var char = derived.charAt(i);
            if (i % 2 === 0) {
                hash += char.toUpperCase();
            } else {
                hash += char.toLowerCase();
            }
        }

        // On ajoute un nombre et des symboles en début de chaîne
        hash = hash.charCodeAt(0) + hash ;
        hash = '@%#' + hash;

        if (hash.length < length) {
            alert('Erreur : Hachage trop court !');
            return;
        }

        // On coupe à la longueur définie en option
        // et on affiche à l'utilisateur
        alert(hash.slice(0, length));
    });
});
