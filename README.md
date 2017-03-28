jQuery game
===

Objectifs
---

- Télécharger et importer jQuery
- Utiliser le `$(document).ready()`
- Déclarer des variables
- Manipuler le DOM
- Manipuler les événements
- Utiliser la déclaration "if"
- Utiliser la déclaration "for"
- Déclarer et appeler des fonctions

Ex1 : Téléchargement et importation de jQuery
---

Téléchargez la librairie jQuery depuis http://jquery.com/. Importez le fichier téléchargé dans `index.html`
à l'aide d'une balise `<script>`.

Ex2 : `$(document).ready()`
---

Une page ne peut pas être manipulée en toute sécurité tant que le document n'est pas prêt. Entourez donc le code de votre projet avec `$(document).ready(function() {...})`. Se référer à la documentation pour y connaître l'usage.

Ex3 : Variables de configuration et d'initialisation
---

Déclarez les variables suivantes :

- `LEFT_KEY` initialisée à 37 (Number)
- `UP_KEY` initialisée à 38 (Number)
- `RIGHT_KEY` initialisée à 39 (Number)
- `DOWN_KEY` initialisée à 40 (Number)
- `$character` un element jQuery représentant l'élément `<div class="character"></div>`
- `$stage` un element jQuery représentant l'élément `<div class="stage">...</div>`
- `$progress` un element jQuery représentant l'élément `<div class="progress"></div>`
- `speed` initialisée à 400 (Number)
- `square_size` initialisée à 32 (Number)
- `cpt` initialisée à 0 (Number)
- `xy` un tableau contenant des objets à remplir par vos soins en vous aidant de l'exemple suivant :

```js
// id : valeur d'un attribut id="" (doit être unique !)
// x : position sur la scène d'une 'potion' sur l'axe horizontal (multiple de 32, square_size ici)
// y : position sur la scène d'une 'potion' sur l'axe vertical (multiple de 32, square_size ici)
[
  {id: 'foo', x: 128, y: 64},
  // ...
]
```

Ex4 : Affichage des potions sur la scène de jeu
---

À l'aide de l'instruction `for`, parcourez votre tableau `xy` afin de créer des éléments jQuery `$('...')`
possédant les attributs `class="item-flask"` et `id="VALEUR_DE_xy[index].id"`. Les injecter dans
`<div class="stage">...</div>`. Utilisez la méthode `css()` (http://api.jquery.com/css/) pour placer
vos potions sur la scène (propriétés `left` et `top`).

Ex5 : Initialiser l'affichage de la progression du jeu
---

À l'aide de la méthode `html()` (http://api.jquery.com/html/) initialisez la progression du jeu grace aux valeurs des
variables `$progress`, `cpt` et la longeur du tableau `xy`. Exemple d'affichage : `0/5 complete`.

Ex6 : Mouvements du personnage
---

### Ex6.1

Écoutez l'événement jQuery `keyup`. Passez `e` en argument de la fonction de callback.


### Ex6.2

En utilisant `e.keyCode`, `UP_KEY`, `RIGHT_KEY`, `DOWN_KEY`, `LEFT_KEY` et l'instruction `if` récupérez les événements
déclanchés par les flèches du clavier. On utilisera les 2 lignes suivantes juste après l'instruction `if` :

```js
e.preventDefault();
$character.stop(true, true);
```

### Ex6.3

À l'aide de la variable `$character` et de la méthode `position()` (http://api.jquery.com/position/), crééz 2 nouvelles
variables `x` et `y` afin de stocker la position courrante du personnage sur les 2 axes au relachement d'une flèche du clavier.

### Ex6.4

Pour la gestion des directions du personnage vous pouvez utiliser `e.keyCode`, `UP_KEY`, `RIGHT_KEY`, `DOWN_KEY`, `LEFT_KEY` et l'instruction `if`. Utilisez ensuite `$character`, `animate()` (http://api.jquery.com/animate/), `x`, `y`, `square_size` et `speed` pour déplacer le personnage dans la bonne direction.

### Ex6.5

Modifiez les instructions `if` afin d'empêchez le personnage du sortir de la zone de jeu. `x`, `y`, `$stage`,
`width()` (http://api.jquery.com/width/), `height()` (http://api.jquery.com/height/), `square_size`
seront utilisés.

Ex7 : Gestion des collisions
---

__À cette étape, vous pouvez faire appel au professeur pour plus d'explications sur la méthode à utiliser.__

Créez une fonction `is_collide` prenant en arguments `x` et `y` représentant les positions courantes du personnage sur les 2 axes. Cette fonction sera appelée à chaque déplacement du joueur. Elle déterminera si le personnage ramasse une potion. La progression sera mise à jour. L'élément `<div class="item-flask" id="..."></div>` correspondant sera supprimé du DOM.

Ex8 : Fin du jeu
---

Manipulez l'événement `click` sur l'élément `<button class="restart">restart</button>`. Utilisez la méthode `reload()`
de l'object `window` de JavaScript. On utilisera le code suivant dans la fonction callback de l'événement :

```js
e.preventDefault();
```
