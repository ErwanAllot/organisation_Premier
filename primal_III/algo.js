//========================FIN


// dessiner des points aussi !!!
// algos ================__________

// while(nombre < 10){
//     dom(); 
//     // changement_quartier(); 
//     compteur_de_la_valeur_en_pixel()
//     nombre += 1;
       
//     // roseDesVents();
//     // nouveau_pixel();
    
// }

function quantite_de_la_valeur_en_pixel(){
    while(compteur < nombre){
        x_ne = x_ne + 1;
        y_ne = y_ne + 1;
        compteur += 1;
        dom(); 
    }
}


function changement_quartier(){
    if (compteur == nombre) {compteur = 1; vent += 1; if (vent == 5){vent = 1;}}
    else {compteur += 1;}
}





function nord_E(){
    color = 'BLUE';
    switch(x_ne){
        case 0 :
            xx = x_ne * cote;
            yy = y_ne * cote;
            break;
        case 1 :
            // xx = x_no;
            color = 'green';
            break;
    }
}

function nord_O(){
    color = 'green';
    switch(x_no){
        case 0 :
            xx = x_no;
            yy = y_no + cote;
            x_no = x_no - cote;
            break;
        case 1 :
            xx = x_no - cote;
            color = 'red';
            break;
            default:
                console.log("Désolé, nous n'avons plus de " + expr + ".");
    }
}




