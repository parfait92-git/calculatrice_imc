function CalculImc(taille, poids) {
    const careeTaille = taille*taille;
    const res = poids/careeTaille;
    const poidsNormal = PoidsNormal(taille);
    const ineterpretation = Interprete(res, poidsNormal);
    const obj = {imc: res, taille:taille, poids: poids, remarque: ineterpretation };
    return obj
}

function PoidsNormal(taille) {
    const careeTaille = taille*taille;
    const poids_normal = 25*careeTaille;
    return poids_normal;
}

function Interprete(imc, poidsNormal) { 
    let msg = message(imc);
    let remarque = parseFloat(poidsNormal).toString().length<=3?msg+ parseFloat(poidsNormal).toFixed(0)+ "kg":msg+ parseFloat(poidsNormal).toFixed(2)+ "kg";
    if(imc <= 16.5) {
        return remarque;
    } else if(imc<=18.5) {
        return remarque;
    } else if(imc===25) {
    } else if(imc<25) {
        return remarque;
    } else if(imc<=30) {
        return remarque;
    } else if(imc<=35) {
        return remarque;
    } else if(imc<=40) {
        return remarque;
    } else if(imc > 40) {
        return remarque;
    }

    function message(imc) {
        if(imc <= 16.5) {
            return  "Vous etes d'une tellement maigre et vous risquez votre vie.Penser à bien vous nourrir pour avoir en normale un ";
        } else if(imc<=18.5) {
            return  "Vous etes d'une maigreur anormale penser à bien vous nourrir pour avoir en normale un poids de ";
        } else if(imc===25) {
           return  "Votre corpulence est normale";
        } else if(imc<25) {
           return  "votre corpulence est normale mais chercher a avoir un poids de ";
        } else if(imc<=30) {
            return  "vous avez pris un surpoids il vous faut un poids de ";
        } else if(imc<=35) {
            return  "Vous etes atteint d'une obésité modérée il vous faut perdre du poids pour avoir un poid de ";
        } else if(imc<=40) {
            return "Vous etes atteint d'une obésité obésité sévère. il vous faut perdre du poids pour avoir un poids de ";
        } else if(imc > 40) {
           return "Vous etes atteint d'une obésité morbide ou massive. il vous faut perdre du poids pour avoir un poids de ";
        }
    }

 }

 module.exports = { CalculImc, PoidsNormal, Interprete }