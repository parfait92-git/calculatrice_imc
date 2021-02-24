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
    let remarque = "";
    let msg = "";
    if(imc <= 16.5) {
        msg = "Vous etes d'une tellement maigre et vous risquez votre vie.Penser à bien vous nourrir pour avoir en normale un ";
        remarque = parseFloat(poidsNormal).toString().length<=3?msg+ parseFloat(poidsNormal).toFixed(0)+ "kg":msg+ parseFloat(poidsNormal).toFixed(2)+ "kg";
    } else if(imc > 16.5 && imc<=18.5) {
        msg = "Vous etes d'une maigreur anormale penser à bien vous nourrir pour avoir en normale un poids de ";
        remarque = parseFloat(poidsNormal).toString().length<=3?msg+ parseFloat(poidsNormal).toFixed(0)+ "kg":msg+ parseFloat(poidsNormal).toFixed(2)+ "kg";
    } else if(imc===25) {
        remarque = "Votre corpulence est normale";
    } else if(imc > 18.5 && imc<25) {
        msg = "votre corpulence est normale mais chercher a avoir un poids de ";
        remarque = parseFloat(poidsNormal).toString().length<=3?msg+ parseFloat(poidsNormal).toFixed(0)+ "kg":msg+ parseFloat(poidsNormal).toFixed(2)+ "kg";
    } else if(imc > 25 && imc<=30) {
        msg = "vous avez pris un surpoids il vous faut un poids de ";
        remarque = parseFloat(poidsNormal).toString().length<=3?msg + parseFloat(poidsNormal).toFixed(0)+ "kg":msg+ parseFloat(poidsNormal).toFixed(2)+ "kg";
    } else if(imc > 30 && imc<=35) {
        msg = "Vous etes atteint d'une obésité modérée il vous faut perdre du poids pour avoir un poid de ";
        remarque = parseFloat(poidsNormal).toString().length<=3?msg+ parseFloat(poidsNormal).toFixed(0)+ "kg":msg+ parseFloat(poidsNormal).toFixed(2)+ "kg";
    } else if(imc > 35 && imc<=40) {
        msg ="Vous etes atteint d'une obésité obésité sévère. il vous faut perdre du poids pour avoir un poids de ";
        remarque = parseFloat(poidsNormal).toString().length<=3?msg+ parseFloat(poidsNormal).toFixed(0)+ "kg":msg+ parseFloat(poidsNormal).toFixed(2)+ "kg";
    } else if(imc > 40) {
        msg ="Vous etes atteint d'une obésité morbide ou massive. il vous faut perdre du poids pour avoir un poids de ";
        remarque = parseFloat(poidsNormal).toString().length<=3?msg + parseFloat(poidsNormal).toFixed(0)+ "kg":msg+ parseFloat(poidsNormal).toFixed(2)+ "kg";
    }

    return remarque;
 }

 module.exports = { CalculImc, PoidsNormal, Interprete }