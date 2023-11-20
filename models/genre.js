const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const genreSchema = new Schema({
    name: { type: String, minLength: 3, maxLength: 100, required: true },

});
//Virtual for genre's JSON file location on disk
genreSchema.virtual("url").get(function() {
    return "/catalog/genre/" + this._id;
})

//Export the model.
module.exports = mongoose.model("Genre", genreSchema);