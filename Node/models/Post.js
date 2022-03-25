const mongoose = require('mongoose');




const PostSchema = mongoose.Schema({
    surgeon: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    anesthsiste: {
        type: String,
    },
    nurse1: {
        type: String,
        required: true
    },
    nurse2: {
        type: String,
        required: true
    },
    roomNumber: {
        type: Number,
        required: true
    },
    intervention: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Posts', PostSchema);