require("./db/connection");
const yargs = require("yargs"); //import yargs for the cli
const mongoose = require("mongoose");
const { createMovie, readMovies } = require("./movies/function");

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
    // put read code here
    await readMovies(yargsinput);
  } else if (yargsinput.update) {
    // put update code here
  } else if (yargsinput.delete) {
    // put delete code here
  } else {
    console.log("Unrecognised Command");
  }

  // close the connection
  await mongoose.disconnect();
};

app(yargs.argv);
