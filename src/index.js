const express = require("express");

const {PORT} = require('./config/serverConfig');

const BodyParser = require("body-parser");

const setUpAndStartServer = async () => {
  const app = express();


  console.log(PORT);
  app.listen(PORT, () => {
    console.log(`server started successfully at ${PORT} `);
  });
};


setUpAndStartServer();