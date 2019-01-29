var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    username: String,
    favouriteGame: {
        type: Schema.Types.ObjectId,
        ref: "Game"
    },
    favouriteVideo: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    favouriteActivity: {
        type: Schema.Types.ObjectId,
        ref: "Activity"
    },
    favouriteNewsArticle: {
        type: Schema.Types.ObjectId,
        ref: "NewsArticle"
    }
});

module.exports = mongoose.model("User", userSchema);