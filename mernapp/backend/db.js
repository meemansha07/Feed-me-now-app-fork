const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://feedMeNow:mern1234@cluster0.p72zczp.mongodb.net/feedMeNow';

const mongoDB = async () => {
    console.log("Connecting to database");
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
        
        // Access the database object
        const db = mongoose.connection.db;

        // Fetch data from the "food_items" collection if needed
        const fetchedData = await db.collection("food_items").find({}).toArray();
        console.log("Fetched Data from 'food_items' Collection:");
        console.log(fetchedData);

        return fetchedData; // Return fetched data if needed
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err; // Re-throw the error to be handled by the caller
    }
}

module.exports = mongoDB;
