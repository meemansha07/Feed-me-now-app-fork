const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")

app.get('/', (req, res) => {
  res.send('Hello World!') 
})
app.use(express.json())
app.use('/api', require("./Routes/CreatUser"));           //TO see User History 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})