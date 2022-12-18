const MovieCollection = require("./model");

const createMovie = async (movieObject) => {
  try {
    const newMovie = await MovieCollection.create(movieObject);
    console.log(newMovie);
  } catch (error) {
    console.log(error);
  }
};

const readMovies = async () => {
  try {
    const listOfMovies = await MovieCollection.find({});
    let newobjetsArr = [];
    for (let i = 0; i < listOfMovies.length; i++) {
      newobjetsArr.push({
        title: listOfMovies[i].title,
        actor: listOfMovies[i].actor,
        director: listOfMovies[i].director,
        rating: listOfMovies[i].rating,
      });
    }
    console.table(newobjetsArr);
  } catch (error) {
    console.log(error);
  }
};

const update = async (movieObject) => {
  try {
    const filter = { title: movieObject.title };
    if (movieObject.actor) {
      const actorUpdate = { actor: movieObject.actor };

      let newMovie = await MovieCollection.findOneAndUpdate(
        filter,
        actorUpdate,
        {
          new: true,
        }
      );
      console.log("Actor updated", newMovie);
    } else if (movieObject.director) {
      const update = { director: movieObject.director };

      let newMovie = await MovieCollection.findOneAndUpdate(filter, update, {
        new: true,
      });
      console.log("Director updated", newMovie);
    } else if (movieObject.rating) {
      const Update = { rating: movieObject.rating };

      let newMovie = await MovieCollection.findOneAndUpdate(filter, Update, {
        new: true,
      });
      console.log("Rating updated", newMovie);
    } else {
      console.log("Nothing updated");
    }
  } catch (error) {
    console.log(error);
  }
};

// const deleteMovie = async () => {
//   try {
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = { createMovie, readMovies, update };
