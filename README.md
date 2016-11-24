JavaScript — ESCEN
==================

Au début de la session...
-------------------------

```
echo 6.0.0 > .node-version
npm i -g copycast browser-sync
browser-sync start --server --files 'css/*.css, js/*.js, *.html' --no-open
copycast
```

Notions couvertes par cet exercice
----------------------------------

- L'affectation de variables
- La manipulation du DOM
- La gestion d'événements
- La déclaration "if"
- L'accès aux cookies navigateur

Ressources
----------

- https://developer.mozilla.org/fr/docs/Web/HTML/Element/script
- https://developer.mozilla.org/fr/docs/Web/API/Document
- https://developer.mozilla.org/fr/docs/Web/Events
- https://developer.mozilla.org/fr/docs/Web/API/Document/createElement
- https://developer.mozilla.org/fr/docs/Web/API/Element/innertHTML
- https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute
- https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild
- https://developer.mozilla.org/fr/docs/Web/API/Node/insertBefore
- https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/indexOf

Énoncé
------

1. Créer une page HTML simple

2. Intégrer un fichier *cookieconsent.js* à l'aide de l'élément HTML *script*

3. Ajouter un écouteur d'événement javascript afin de détecter lorsque le document HTML a été complètement chargé

4. Créer les éléments HTML nécessaires à l'affichage du bandeau de cookies, en définir le contenu et les insérer dans la page

5. Déclarer une variable globale contenant le nom du cookie de consentement

6. Écouter l'événement *click* sur le bouton de consentement

7. Supprimer l'affichage de la bannière au click sur le bouton de consentement

8. Déposer un cookie permettant de ne plus afficher la bannière à l'utilisateur lors de sa prochaine visite

9. Vérifier la présence du cookie avant d'afficher le bandeau à l'utilisateur

10. Réaliser au choix l'un des exemples d'affichage présentés ci-dessous :

![examples](https://raw.githubusercontent.com/dflorent/escen-js-b2/cookie-consent/img/examples.jpg)
