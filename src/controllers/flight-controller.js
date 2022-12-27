const { FlightService } = require("../services/index");

const {SuccessCodes} = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req, res) => {
  try {


        filterData = {

          flightNumber : req.body.flightNumber,
          airplaneId : req.body.airplaneId,
          departureAirportId : req.body.departureAirportId,
          arrivalAirportId  : req.body.arrivalAirportId,
          arrivalTime : req.body.arrivalTime,
          departureTime : req.body.departureTime,
          price : req.body.price


        }


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


const getAll  = async (req,res)=>
{

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

}

module.exports = {
  create,
  getAll,
};
