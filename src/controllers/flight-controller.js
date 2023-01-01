const { FlightService } = require("../services/index");

const { SuccessCodes } = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    filterData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };

    const flight = await flightService.createFlight(filterData);

    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      message: "successfully created a flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      data: {},
      success: false,
      message: "not able to create a flight ",
      err: { error },
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlights(req.query);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "successfully fetched all flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      data: {},
      success: false,
      message: "not able to fetched all flights ",
      err: { error },
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await flightService.getFlight(req.params.id);
    return res.status(SuccessCodes.CREATED).json({
      data: response,
      success: true,
      message: "successfully fetched the details of the flight ",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetch the flight ",
      err: { error },
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await flightService.updateFlight(req.params.id, req.body);

    res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "successfully updated the details of flight",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: {},
      err: { error },
      message: "not able to update the details of flight",
    });
  }
};

module.exports = {
  create,
  getAll,
  get,
  update,
};
