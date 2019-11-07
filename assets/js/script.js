$(document).keydown(function(e){
    switch (e.which){
    case 37:    // flèche gauche
        $("#moove").finish().animate({
            left: "-=10"
        });
        break;
    case 38:    // flèche haut
        $("#moove").finish().animate({
            top: "-=10"
        });
        break;
    case 39:    // flèche droite
        $("#moove").finish().animate({
            left: "+=10"
        });
        break;
    case 40:    // flèche du bas
        $("#moove").finish().animate({
            top: "+=10"
        });
        break;
    }
});
