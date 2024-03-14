const express = require('express');
//const cors = require('cors');
const mongoose = require('mongoose');
const mongoDB = require("./db")
const app = express();
const port = 5000;

mongoDB();
/*
mongoose.connect('mongodb+srv://feedMeNow:mern1234@cluster0.p72zczp.mongodb.net/feedMeNow',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('DB connected');
}).catch((error) => {
  console.log("Error connecting to database", error);
});*/

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use('/api', require('./Routes/CreatUser')); // To see User History 

app.listen(port, () => {
  console.log('Example app listening on port ${port}');
});