const express = require('express');
const colors = require('colors');
require('dotenv').config();
const {graphqlHTTP} = require("express-graphql");
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql:true,
    })
  );
  
// Connect to database
connectDB();

app.listen(port, console.log(`Server is running on port ${port}`))