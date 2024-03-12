const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://feedMeNow:mern1234@cluster0.p72zczp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB =() =>{
    mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected');
    })
    .catch((err) => {
        console.log('error connecting to mongoDB:', err);
    });
}
    

module.exports = mongoDB;

