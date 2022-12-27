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



## DB DESIGN
    - Airplane Table
    - Flight
    - Airport
    - City

- A flight belongs to an airplane but one airplane can be used for many flights

- A city can have many airports and an airport belongs to an city

- One airport can have many flights, but a flight belongs to one city

```
{
  "flightNumber" : "Uk 820",
 "airplaneId":"1",
 "departureAirportId":"1",
 "arrivalAirportId":"4",
 "departureTime":" 2022-01-22 03:30:00",
 "arrivalTime":" 2022-01-22 06:30:00",
 "price":"5000"
}
```



### City -> id,name,created_at,updated_at

### Airport -> id,name,address,City_Id,created_at,updated_at

RELATIONSHIP B/W City and Airport(One to Many)

City has many airports and airport belong to One particular city

