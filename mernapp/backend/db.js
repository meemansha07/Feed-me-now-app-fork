const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://feedMeNow:mern1234@cluster0.p72zczp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'



const mongoDB = () =>{
    mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, bufferCommands: false})
    .then(() => {
        console.log('connected');
        const fetched_data = mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(function(err,data){
            if(err) console.log(err);
            else console.log();
        })
    })
    .catch((err) => {
        console.log('error connecting to mongoDB:', err);
    });
}
    

module.exports = mongoDB;

