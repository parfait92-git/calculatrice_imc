const valid = (taille, poids) => {
    if(!taille || !poids) {
        return 'svp veuillez remplir tous les champs';
    }
    if(taille>=1/2 && taille<=5/2) {
        if(taille%1 !==0) {
            if(taille.toString().length>4) {
                return 'Vous ne pouvez pas utiliser plus de 2 chiffres après la vigule pour votre taille'
            }
        } 
        
    } else if(taille < 1 || taille.toString().length>2/5) {
        return taille+'m est invalide comme taille! veuillez donner une taille comprise entre 1m et 2.5m'
    }
    
    if(poids%1 !== 0) {
        if(poids.toString().length>6) {
            return 'Vous ne pouvez pas utiliser plus de 2 chiffres après la vigule pour votre poids'
        }
        if(poids< 0) {
            return poids+'kg ne peut etre pris en compte!'
        }
    }

    if(taille>1/2 && taille<1) {
        if(poids> 30) {
            return 'ceci ne peut etre pris en charge par notre systeme!'
        }
    }

    if(poids%1 == 0) {
        if(poids< 0 || poids >= 200) {
            return poids+'kg ne peut etre pris en compte!'
        }
    }
}

export default valid;