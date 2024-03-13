const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://meemanshasingh77:mern123@cluster0.sk8mvcz.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => { // Define mongoDB function as async
    try {
        await mongoose.connect(mongoURI); // Wait for connection to be established
        console.log('connected');
        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray( function(err,data) {
            if(err) console.log(err);
            else console.log(data)
        });
    } catch (err) {
        console.log('error connecting to MongoDB:', err);
    }
}

module.exports = mongoDB;
