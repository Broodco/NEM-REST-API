const express = require("express");
const mongoose = require("mongoose");

// Set up the express app
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost/musicdb", {useNewUrlParser: true});

// Set up static folder
app.use(express.static("public"));

// Set up request parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Initialize routes
app.use("/api", require("./routes/api"));

// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(422).send({
        error: err.message,
    });
});

// Listen
app.listen(process.env.port || 4000, () => {
    console.log("now listening for requests");
});
