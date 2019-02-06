var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
    title: {
        type: String,
        // required: true
    },
    brief: {
        type: String,
        // required: true
    },
    body: {
        type: String,
        // required: true
    },
    imageLink: {
        type: String,
        // required: true
    },
    link: {
        type: String,
        // required: true
    },
    isSaved: {
        type: Boolean,
        default: false,
        required: true
    }
});

var Activity = mongoose.model("Activity", ActivitySchema);

// ----- Exporting Activity model
module.exports = Activity;