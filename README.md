Souscription à une newsletter
===

1. Téléchargez le projet de base à l'adresse suivante : https://github.com/dflorent/escen-js/archive/newsletter-subscription.zip

2. Téléchargez et liez la dernière version de la librairie jQuery au fichier `index.html`. Votre fichier jQuery sera organisé dans un dossier nommé `js`.

3. Créez et liez un fichier `script.js` stocké dans votre répertoire `js`. Uniquement le code de ce fichier sera évalué.

4. Vous allez manipuler un document HTML depuis JavaScript, entourez donc votre code avec `$(document).ready(function() {...})`

5. Après 5 secondes de navigation, ouvrez la modale en ajoutant la classe `modal-open` sur l'élément `body` et la classe `in` sur l'élément HTML possédant la classe `modal`.

6. Créez une fonction permettant de fermer la modale.

7. Au clic sur la croix (modale ouverte), appelez votre fonction pour fermer la modale.

8. Récupérez l'événement de soumission du formulaire. Empêchez le rechargement de la page. Réalisez un appel ajax de type `POST` sur un fichier PHP à l'URL de votre choix et passez comme donnée la valeur de l'email soumise depuis le formulaire. En cas de succès de la réponse, appelez votre fonction pour fermer la modale.

9. Modifiez votre code pour enregistrer un cookie lors d'une fermeture de la modal et n'afficher la modale que si aucun cookie n'est valide.

Bon courage !
