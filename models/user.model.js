const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    isDeleted: {
        type: Boolean,
        default: false
    },
    signUpDate: {
        type: Date,
        default: Date.now()
    },
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

UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);