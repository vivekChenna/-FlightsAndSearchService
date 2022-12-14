# Welcome to Flight Service

## Project Setup

- clone the project on your local

-Execute `npm install` on the same path as of your root directory of your downloaded project

-Create a `.env` file in the root directory and add the following environment
variable

- `PORT = <PORT NUMBER> `

-Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```

{
 "development": {
   "username": <YOUR_DB_LOGIN_NAME>,
   "password": <YOUR_DB_PASSWORD>,
   "database": "Flights_Search_DB_Dev",
   "host": "127.0.0.1",
   "dialect": "mysql"
 },
}


```

- Once you have added your db config as listed above , go to the src folder and execute from your terminal `npx sequelize db:create `
