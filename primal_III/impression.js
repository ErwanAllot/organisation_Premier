function impression_de_la_data(){
    les_coordonnees();
    la_couleur();
    nouveau_pixel();
}

function les_coordonnees(){
    // xx = x_ne * cote;
    // yy = y_ne * cote;
    switch(vent){
        case 1 : 
            xx = x_se * cote;
            yy = y_se * cote;
            break;
        case 2 : 
            xx = x_so * cote + cote;
            yy = y_so * cote;
            break;
        case 3 : 
            xx = x_no * cote + cote;
            yy = y_no * cote + cote;
            break;
        case 4 : 
            xx = x_ne * cote;
            yy = y_ne * cote + cote;
            break;
    }
}
