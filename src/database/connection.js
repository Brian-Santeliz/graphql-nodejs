const { connect } = require("mongoose");

const startDatabase = async function () {
  try {
    await connect("mongodb://127.0.1/graphql-book", {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(`Base de datos error: ${error} `);
  }
};
module.exports = startDatabase;
