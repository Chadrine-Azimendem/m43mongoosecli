require("./db/connection");
const yargs = require("yargs"); //import yargs for the cli
const mongoose = require("mongoose");
const {
  createMovie,
  readMovies,
  update,
  deleteMovie,
} = require("./movies/function");

const app = async (yargsinput) => {
  if (yargsinput.create) {
    // create movie
    await createMovie({
      title: yargsinput.title,
      actor: yargsinput.actor,
      director: yargsinput.director,
      rating: yargsinput.rating,
    });
  } else if (yargsinput.read) {
    //read all movies
    await readMovies(yargsinput);
  } else if (yargsinput.update) {
    //update movies by field
    await update(yargsinput);
  } else if (yargsinput.delete) {
    // put delete code here
    await deleteMovie(yargsinput);
  } else {
    console.log("Unrecognised Command");
  }

  // close the connection
  await mongoose.disconnect();
};

app(yargs.argv);
