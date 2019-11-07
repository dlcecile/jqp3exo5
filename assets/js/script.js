$(document).keydown(function(e){
// on recupére le code de la touche gràce à l'objet event(il enregistre tous ce qui se passe dans le navigateur)
var maxWidth =$(document).width();
// alert(maxWidth);
// permet d'avoir la largeur totale de la page de la fenetre (des deux bords)
var minWidth = 0;
var minHeight = 0;
var maxHeight =$(document).height();
// alert(maxHeight);
// permet d'avoir la hauteur totale de la page de la fenetre
var stepX, stepY;
var squareSize = $('#moove').outerWidth(true);
// outerWidth taille totale de la boite avec les paddings et les borders et true prend les margins. On engloble tous le carré


var positionX =$('#moove').offset().left
// + $('#moove').outerWidth(true); l'alerte va afficher une valeur, permet de calculer le left du css 1219px.
// alert(positionX)
// offset permet de localiser notre élement sur l'axe des abcisses et il envoie la distance qui sépare le bords gauche de la fenetre
var positionY=$('#moove').offset().top
    switch (e.which){
// en fonction du support on peut prendre which ou keyCode.le which est mieux supporter en jquery.
    case 37:    // flèche gauche
 stepX=(positionX >= minWidth) ? '-=10' : maxWidth - squareSize;

        $("#moove").finish().animate({
// finish permet d arreter l animation lors du relachement de la touche.
            left: stepX
        });
        break;
    case 38:    // flèche haut
stepY=(positionY >= minHeight) ? '-=10' : maxHeight - squareSize;
        $("#moove").finish().animate({
            top: stepY
        });
        break;
    case 39:    // flèche droite
 stepX = ((positionX + squareSize) <= maxWidth) ? '+=10':'0';
// les ternaires
        $("#moove").finish().animate({
            left: stepX
        });
        break;
    case 40:    // flèche du bas
    stepY = ((positionY + squareSize) <= maxHeight) ? '+=10':'0';
        $("#moove").finish().animate({
            top: stepY
        });
        break;
    }

// if($('#moove').offset() == 0){
// }
// offset il permet de detecter la position relative d'un élément par rapport à la fenetre.

});
