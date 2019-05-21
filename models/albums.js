const mongoose = require("mongoose");

const {Schema} = mongoose;

// Create album Schema & model
const AlbumSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title field is required"],
    },
    artist: {
        type: String,
    },
    release_year: {
        type: Number,
    },
    categories: {
        type: [String],
    },
    numberOfTracks: {
        type: Number,
    },
});

const Album = mongoose.model("album", AlbumSchema);

module.exports = Album;
