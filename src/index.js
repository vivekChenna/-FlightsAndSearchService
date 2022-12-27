const express = require("express");

const { PORT } = require("./config/serverConfig");

const bodyParser = require("body-parser");

const CityRepository = require("./repository/city-repository");


const ApiAirport  = require('./routes/index');

const ApiRoutes = require('./routes/index');

const v1Flights = require('./routes/index');

const { City, Airport } = require("./models/index");

const db = require('./models/index');

const setUpAndStartServer = async () => {
  const app = express();

  // const PORT  = 3000;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiAirport,ApiRoutes,v1Flights);



  

  console.log(PORT);

  app.listen(PORT, async () => {
    console.log(`server started successfully at ${PORT} `);

    let repo = new CityRepository();

    // repo.createCity({name:"Surat"});

    // repo.DeleteCity(10);

    // repo.UpdateCity(18,{name:"Kedarnath"});

    //  await repo.getCity(14);

    // const results = await Airport.findAll({
    //   include :[{
    //     model : City
    //   }]
    // });

    // console.log(results);


    // db.sequelize.sync({alter : true});

    // const city = await City.findOne({
    //   where: {
    //     id: 16,
    //   },
    // });


    // const airports = await city.getAirports();
    // console.log('hi');
    // console.log('hi');
    // console.log('hi');
    // console.log('hi');
    // console.log(city,airports);

    // console.log(city);

    // const newAirport = await Airport.create({
    //   name : 'Jindal VijayNagar Airport',
    //   cityId:15
    // })

    // const newAirport = await Airport.findOne({
    //   where : {
    //     id : 6
    //   }
    // });


    // await city.addAirport(newAirport);


    // const allAirports = await Airport.findAll();

    // console.log(allAirports);

    if(process.env.SYNC_DB)
    {
      db.sequelize.sync({alter : true});
    }




  });
};

setUpAndStartServer();
