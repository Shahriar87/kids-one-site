var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
    title: String,
    imageLink: String,
    link: String
});

module.exports = mongoose.model("Game", gameSchema);