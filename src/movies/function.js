const MovieCollection = require("./model");

const createMovie = async (movieObject) => {
  try {
    const newMovie = await MovieCollection.create(movieObject);
    console.log(newMovie);
  } catch (error) {
    console.log(error);
  }
};

// const readMovie = async () => {
//   try {
//   } catch (error) {
//     console.log(error);
//   }
// };

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

module.exports = { createMovie };
