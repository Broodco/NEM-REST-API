const express = require("express");

// Set up the express app
const app = express();

// Set up request parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Initialize routes
app.use("/api", require("./routes/api"));

// Listen
app.listen(process.env.port || 4000, () => {
    console.log("now listening for requests");
});
