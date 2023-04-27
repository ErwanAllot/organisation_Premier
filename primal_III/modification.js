function modification_de_la_data(){
    prochain_pixel_du_quartier();
    le_tour_est_il_fini();
}

function le_tour_est_il_fini(){
    if(compteur == nombre){compteur = 1; nombre += 1; vent += 1; if(vent == 5){vent = 1;}}
    else{compteur += 1;}
}

function prochain_pixel_du_quartier(){
        switch(vent){
        case 1 : 
            if(y_se == 1)   {   y_se = x_se + 1;    x_se = 1;}
            else            {   x_se = x_se + 1;    y_se = y_se - 1;}
            break;
        case 2 : 
            if(x_so == -1)   {   x_so = -1 *(y_so + 1);    y_so = 1;}
            else            {   x_so = x_so + 1;    y_so = y_so + 1;}
            break;
        case 3 : 
            if(y_no == -1)   {   y_no = x_no - 1;    x_no = -1;}
            else           {   x_no = x_no - 1;    y_no = y_no + 1;}
            break;
        case 4 : 
            if(x_ne == 1)   {   x_ne = -1 *(y_ne - 1);    y_ne = -1;}
            else           {   x_ne = x_ne - 1;    y_ne = y_ne - 1;}
            break;
    }
}