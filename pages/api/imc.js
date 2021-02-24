import * as imcSvc from './services/imc.service';
import ImcSchema from '../../models/Imc';
import connectDB from '../../utils/connectDB';
import valid from '../../utils/valid';

connectDB();

export default async function handler(req, res) {
  if(req.method === 'POST') {
    console.log(req);
    const poids = req.body.poids;
    const taille = req.body.taille;
    const imc = imcSvc.CalculImc(taille, poids);
    res.status(200).json(imc)
  }
  
}


