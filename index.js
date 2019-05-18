const express = require("express");

// Set up the express app
const app = express();

// Initialize routes
app.use("/api", require("./routes/api"));

// Listen
app.listen(process.env.port || 4000, () => {
    console.log("now listening for requests");
});
