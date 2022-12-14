const dotenv = require('dotenv');

// const path = require('path');

// require('dotenv').config({path : path.resolve(__dirname,'.../.env')});

// console.log(path);

dotenv.config();


module.exports = {

    PORT : process.env.PORT

}