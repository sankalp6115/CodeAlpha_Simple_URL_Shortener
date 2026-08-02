const express = require('express');
const urlRoute = require('./routes/url');
const { connectToMongoDB } = require("./connect");

const app = express()
const PORT = 8000;

const DB_URL = "mongodb://admin:password@localhost:27017/short-url?authSource=admin";
connectToMongoDB(DB_URL)
.then(() => console.log("Connected"))

app.use(express.json())

app.use("/url", urlRoute)
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})