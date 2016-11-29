var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });
var colors = require('colors');

var request = 'ecole escen lyon';

nightmare
  .goto('http://google.fr')
  .type('#lst-ib', request)
  .click('input[type="submit"]')
  .wait('.srg')
  .evaluate(function() {
    var links = document.querySelectorAll('h3.r > a');
    var found = false;
    var counter = 0;
    var index = false;

    while(counter < links.length && !found) {
        if (links[counter].href === 'http://www.escen.fr/') {
            index = counter + 1;
            found = true;
        }
        counter++;
    }

    return index;
  })
  .end()
  .then(function (result) {
    if (result) {
      console.log("Le site de l'ESCEN arrive au rang "
          + colors.red(result)
          + " sur Google pour la recherche \""
          + colors.green(request)
          + "\"");
    } else {
      console.log("Aucun resultat");
    }
  })
  .catch(function (error) {
    console.error('Erreur :', error);
  });
