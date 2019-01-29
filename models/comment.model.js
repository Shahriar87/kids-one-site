var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    title: String,
    image: String,
    source: String,
    description: String
});

module.exports = mongoose.model("Comment", commentSchema);