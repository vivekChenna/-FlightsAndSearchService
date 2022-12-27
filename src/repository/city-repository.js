const { City } = require("../models/index");

const { Op } = require("sequelize");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });

      // console.log(city);

      return city;
    } catch (error) {
      throw { error };
    }
  }

  async DeleteCity(CityId) {
    try {
      await City.destroy({
        where: {
          id: CityId,
        },
      });

      return true;
    } catch (error) {
      throw { error };
    }
  }

  async getAllCities(
    filter // this filter can be an empty parameter also ) // if filter is empty then we will be returning all of the cities
  ) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });

        return cities;
      }

      console.log(filter);
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async UpdateCity(cityId, data) {
    try {
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });

      // return city;

      const city = await City.findByPk(cityId);

      city.name = data.name;

      console.log(city.name);

      await city.save();

      return city;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async createAll(data) {
    try {
      console.log("i am in the repository layer");
      console.log(data);

      // for (let i = 0; i < data.length; i++) {
      //   let store = data[i];
      //   console.log(store);

      const city = await City.bulkCreate(data,{returning : true});
      // }

      return city;

      // return city;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw error;
    }
  }

  async getCity(cityId) {
    console.log("i am in the repository layer" + cityId);
    try {
      const city = await City.findOne({
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }


  async getAllAirports(id)
  {

    try {

      const city = await City.findOne({
        where : {
          id : id,
        }
      });

         const airports = await city.getAirports();


         return airports;


      
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }

  }
}

module.exports = CityRepository;
