const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true,
  },
  year: {
    type: String,
  },
  author: {
    type: String,
    trim: true,
    lowecase: true,
  },
});

model.exports = model("book", bookSchema);
