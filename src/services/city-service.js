const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("something went wrong in the service layer ");
      throw { error };
    }
  }

  async deleteCity(CityId) {
    try {
      const response = await this.cityRepository.DeleteCity(CityId);
    } catch (error) {
      console.log("something went wrong in the service layer ");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      const response = await this.cityRepository.getAllCities(filter);
      return response;
    } catch (error) {
      console.log("something went wrong in the service layer ");
      throw { error };
    }
  }

  async updateCity(CityId, data) {
    try {
      const response = await this.cityRepository.UpdateCity(CityId, data);

      return response;
    } catch (error) {
      console.log("something went wrong in the service layer ");
      throw { error };
    }
  }

  async getCity(cityId) {
    console.log("i am in the service layer " + cityId);

    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in the service layer");
      // console.log(error);
      throw error;
    }
  }

async createAll(data)
{
  

  try {
    console.log("i am in the service layer ");
    console.log(data);
    const cities = await this.cityRepository.createAll(data);
    return cities;
    
  } catch (error) {
    
    console.log('something went wrong in the service layer');
    throw error;
  }
 

}


async getAllAirports(data)
{ 
 try {
    console.log("i am in the service layer ");
    console.log(data);
    const cities = await this.cityRepository.getAllAirports(data);
    return cities;
    
  } catch (error) {
    
    console.log('something went wrong in the service layer');
    throw error;
  }
}

}

module.exports = CityService;
