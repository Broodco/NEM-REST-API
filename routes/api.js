const express = require("express");

const router = express.Router();

// Get a list of albums from the db
router.get("/albums", (req, res) => {
    console.log("GET request");
    res.send({
        type: "GET",
    });
});

// Add a new album to the db
router.post("/albums", (req, res) => {
    console.log("POST request");
    res.send({
        type: "POST",
    });
});

// Update an album info from the db
router.put("/albums/:id", (req, res) => {
    console.log("PUT request");
    res.send({
        type: "PUT",
    });
});

// Delete an album from the db
router.delete("/albums/:id", (req, res) => {
    console.log("DELETE request");
    res.send({
        type: "DELETE",
    });
});

module.exports = router;
