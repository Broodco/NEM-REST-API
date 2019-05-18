const express = require("express");
const Album = require("../models/albums");

const router = express.Router();

// Get a list of albums from the db
router.get("/albums", (req, res, next) => {
    console.log("GET request");
    res.send({
        type: "GET",
    }).catch(next);
});

// Add a new album to the db
router.post("/albums", (req, res, next) => {
    Album.create(req.body)
        .then(album => {
            res.send(album);
        })
        .catch(next);
});

// Update an album info from the db
router.put("/albums/:id", (req, res, next) => {
    console.log("PUT request");
    res.send({
        type: "PUT",
    }).catch(next);
});

// Delete an album from the db
router.delete("/albums/:id", (req, res, next) => {
    Album.findByIdAndRemove({_id: req.params.id})
        .then(album => res.send(album))
        .catch(next);
});

module.exports = router;
