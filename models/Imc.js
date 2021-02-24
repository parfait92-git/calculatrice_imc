import mongoose from 'mongoose';

const ImcSchema = new mongoose.Schema({
    taille: {
        type: Number,
        required: [true, 's\'il vous plait veuillez renseigner votre taille!'],
        trim: true,
        maxLength: [3, 'ne peut depasser 3 caractères!']
    },
    poids: {
        type: Number,
        required: [true, 's\'il vous plait veuillez renseigner votre poids!'],
        trim: true,
        maxLength: [4, 'ne peut depasser 4 caractères!']
    },
    imc:  {
        type: Number
    },
    remarque: {
        type: String
    }
}, {
    timestamps: true
});

let DataSet = mongoose.models.indices || mongoose.model('indices', ImcSchema);

export default DataSet;