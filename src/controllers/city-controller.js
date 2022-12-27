const { query } = require("express");
const { CityService } = require("../services/index");

const cityService = new CityService();


// METHOD -> POST
const create = async (req, res) => {
  try {
    const response = await cityService.createCity(req.body);

    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city ",
      err: error,
    });
  }
};

// METHOD -> DELETE
// url --> /city/:id
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);

    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully deleted a city ",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to delete a city ",
      err: error,
    });
  }
};

//  METHOD --> GET
const get = async (req, res) => {
  console.log(" i am in the city-controller file " + req.params.id);
  try {
    const city = await cityService.getCity(req.params.id);

    return res.status(200).json({
      data: city,
      success: true,
      message: "successfully fetched a city ",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(501).json({
      data: {},
      success: false,
      message: "not able to fetch a city ",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const cities = await cityService.getAllCities(req.query);

    return res.status(200).json({
      data: cities,
      success: true,
      message: "successfully fetched all cities",
      err: {},
    });
  } catch (error) {
    return res.status(501).json({
      data: {},
      success: false,
      message: "not able to fetch the cities ",
      err: error,
    });
  }
};

// METHOD  --> PATCH
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);

    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully updated a city ",
      err: {},
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      data: {},
      success: true,
      message: "not able to update a city ",
      err: error,
    });
  }
};

const createAll = async (req,res)=>
{

  try {

    console.log(req.body);
    const response = await cityService.createAll(req.body);

    console.log(response);
  
    return res.status(201).json({
  
      data : response,
      success : true,
      message : "successfully created cities",
      err : {}
  
    });
    
  } catch (error) {
    

    console.log(error);

    return res.status(501).json({
      err : error,
      success : false,
      message : "not able to create cities",
    })
    

  }


}


const getAllAirports = async (req,res)=>{


  try {
      const airports = await cityService.getAllAirports(req.params.id);

      return res.status(200).json({


        data : airports,
        success : true,
        message : 'successfully fetched all airports',
        err : {}
      })
     


    
  } catch (error) {
    
    console.log(error);
    return res.status(501).json({


      data : airports,
      success : false,
      message : 'not able to  fetch all airports',
      err : {error}
    })

  }




}



module.exports = {
  create,
  destroy,
  get,
  getAll,
  update,
  createAll,
  getAllAirports
};
