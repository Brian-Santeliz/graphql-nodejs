const Books = require("../database/model");

const resolvers = {
  Query: {
    getBooks: async () => {
      try {
        return await Books.find();
      } catch (error) {
        console.error(`Error:${error}`);
      }
    },
    getBookId: async (_, { id }) => {
      try {
        return await Books.findById({ _id: id });
      } catch (error) {
        console.error(`Error:${error}`);
      }
    },
  },
  Mutation: {
    createBook: async (parent, args, context, info) => {
      try {
        const book = new Books(args.input);
        return await book.save();
      } catch (error) {
        console.error(`Error:${error}`);
      }
    },
    deleteBook: async (_, { id }) => {
      try {
        return await Books.findByIdAndRemove({ _id: id });
      } catch (error) {
        console.error(`Error:${error}`);
      }
    },
    updateBook: async (_, args) => {
      const {
        input: { id, ...updateData },
      } = args;
      try {
        return await Books.findByIdAndUpdate({ _id: id }, updateData, {
          new: true,
        });
      } catch (error) {
        console.error(`Error:${error}`);
      }
    },
  },
};

module.exports = resolvers;
