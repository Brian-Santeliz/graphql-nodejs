const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    trim: true,
    lowecase: true,
    required: true,
  },
});

module.exports = model("book", bookSchema);
