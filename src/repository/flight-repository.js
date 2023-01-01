const { Flight } = require("../models/index");

const { Op } = require("sequelize");
class FlightRepository {
  #createFilter(data) {
    let filter = {};

    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    if (data.minPrice && data.maxPrice) {
      Object.assign(filter, {
        [Op.and]: [
          { price: { [Op.gte]: data.minPrice } },
          { price: { [Op.lte]: data.maxPrice } },
        ],
      });
    }

    let priceFilter = [];

    if (data.maxPrice) {
      // Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });

      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }

    if (data.minPrice) {
      // Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }

    Object.assign(filter, { [Op.and]: priceFilter });

    console.log(filter);

    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flight.create(data);

      return flight;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async getFlight(id) {
    try {
      const flight = await Flight.findByPk(id);
      return flight;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);

      console.log(filterObject);
      const flights = await Flight.findAll({
        where: filterObject,
      });

      return flights;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateFlight(flightId, data) {
    try {
      await Flight.update(data, {
        where: {
          id: flightId,
        },
      });

      return true;
    } catch (error) {
      console.log("something went wrong in the repository layer");

      throw { error };
    }
  }
}

module.exports = FlightRepository;
