import mongoose from 'mongoose';

const connectDB = () => {
    if(mongoose.connections[0].readyState) {
        console.log('vous etes deja connecté');
        return;
    }

    mongoose.connect(process.env.MONGODB_URL, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, err => {
        if(err) throw err;
        console.log("Vous vene de vous connecter a mongoDB");
    })
}

export default connectDB;