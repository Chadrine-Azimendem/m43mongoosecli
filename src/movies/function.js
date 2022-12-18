const MovieCollection = require("./model");

const createMovie = async (movieObject) => {
  try {
    const newMovie = await MovieCollection.create(movieObject);
    console.log(newMovie);
  } catch (error) {
    console.log(error);
  }
};

const readMovies = async (movieObject) => {
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

// const updateMovie = async () => {
//   try {
//   } catch (error) {
//     console.log(error);
//   }
// };

// const deleteMovie = async () => {
//   try {
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = { createMovie, readMovies };
