function si_nombre_est_premier(){
    premierValide = 0;
    for (j = 2; j < Math.sqrt(nombre); j++){
        if (nombre % j === 0) break;
        else if(j + 1 > Math.sqrt(nombre)){premierValide = 1;}
    }
    if (nombre == 2 || nombre == 3){premierValide = 1;}
    
    // else {nombre = nombre +1;}
}