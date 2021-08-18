// Linking my dependancies with the Server
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// setting up an instance for Express.js and listening to port 8000
const app = express();
app.listen(8000,() => {
    console.log("server running on port 8000");
})

// using body-parser middleware with every route
app.use(bodyParser.json());

// Import Routes
const postRoute = require("./routes/Post");
const getPosts = require("./routes/Get")
const deletePost = require("./routes/Delete");
const updatePost = require("./routes/Update");

app.use("/", getPosts)
app.use("/post", postRoute)
app.use("/delete", deletePost)
app.use("/update", updatePost)

// Linking the .env file
require("dotenv").config({path: "./config/.env"})


// Connecting the atlas database to the app
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));