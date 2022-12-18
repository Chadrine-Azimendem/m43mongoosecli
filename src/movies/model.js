// define the database we are going to create
const mongoose = require("mongoose");

//create the schema or model
const movieSchema = new mongoose.Schema({
  // define the title, actor, directorand rating fields
  title: {
    type: String,
    unique: true,
    require: true,
  },
  actor: {
    type: String,
    default: "Not specified",
  },
  director: {
    type: String,
    default: "Not specified",
  },
  rating: {
    type: Number,
    default: 5,
    min: 1,
    max: 5,
  },
});

// mongoose.set("strictQuery", true);
// create the collection
const MovieCollection = mongoose.model("Movies", movieSchema);

module.exports = MovieCollection;
