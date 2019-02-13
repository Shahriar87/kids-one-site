var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var activitySchema = new Schema({
    title: String,
    imageLink: String,
    link: Number
});

var Activity = mongoose.model("Activity", activitySchema);

// ----- Exporting Activity model
module.exports = Activity;