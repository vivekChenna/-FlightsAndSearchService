const express = require("express");

const  {PORT} = require('./config/serverConfig');

const BodyParser = require("body-parser");
const bodyParser = require("body-parser");

const setUpAndStartServer = async () => {
  const app = express();

  // const PORT  = 3000;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true})); 

  console.log(PORT);

  app.listen(PORT, () => {
    console.log(`server started successfully at ${PORT} `);
  });
};

setUpAndStartServer();