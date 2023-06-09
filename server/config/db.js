const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb+srv://graphql:graphql@cluster0.0x2t8nw.mongodb.net/?retryWrites=true&w=majority");

  console.log(`MongoDB Connected:`.cyan.underline.bold);
};

module.exports = connectDB;
