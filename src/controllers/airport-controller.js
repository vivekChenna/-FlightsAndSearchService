const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const response = await airportService.create(req.body);

    return res.status(200).json({
      success: true,
      data: response,
      message: "successfully created a airport",
      err: {},
    });
  } catch (error) {
    return res.status(501).json({
      success: false,
      data: {},
      message: "not able to create a airport",
      err: { error },
    });
  }
};

module.exports = {
  create,
};
