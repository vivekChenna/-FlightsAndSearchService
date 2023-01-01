const { FlightRepository, AirplaneRepository } = require("../repository/index");

const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw {
          error:
            "departure time and date cannot be greater than arrival time and date ",
        };
      }

      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );

      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });

      return flight;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async getFlight(data) {
    try {
      const flight = await this.flightRepository.getFlight(data);

      return flight;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async updateFlight(FlightId, data) {
    try {
      const flight = await this.flightRepository.updateFlight(FlightId, data);

      return flight;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async getAllFlights(data) {
    console.log(data);
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = FlightService;

/**
 flightNumber,
 airplaneId,
 departureAirportId,
 arrivalAirportId,
 departureTime,
 arrivalTime

 totalSeats -> airplane
 */
