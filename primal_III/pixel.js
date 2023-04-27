function nouveau_pixel(){
    pixel = document.createElement('div');    
        nommage_pixel();
        css_pixel();
        dimension_pixel();
        position_pixel();
        couleur_pixel();
    spirale.appendChild(pixel);
}

function couleur_pixel(){pixel.style.backgroundColor = couleur;}

function nommage_pixel(){pixel.innerHTML = nombre;}

function css_pixel(){pixel.classList.add("pixel");}

function dimension_pixel(){
    pixel.style.width = largeur +"px";
    pixel.style.height = largeur +"px";
}

function position_pixel(){
    position = "translateX(" + xx + "px) translateY(" + yy + "px)";
    pixel.style.transform = position;
}