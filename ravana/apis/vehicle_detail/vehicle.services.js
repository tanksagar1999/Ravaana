const _ = require("lodash");
const moment = require("moment");

const Vehicle = require("./vehicle-history.model");
const { vehicleRoutes } = require(".");


exports.updateTruck = async () => {
  try {
    const URL = "https://india.pointerbi.com/FleetAPI/api/Vehicle/GetVehiclesInfo?Accounts=426&LicensePlates=&VehicleIds=&ExternalIds=&Key=90733144320000036&OptionalProps=2&OptionalProps=2";
    let response = await fetch(URL);
    let vehicles = await response.json();

    if(vehicles.Result && vehicles.Result["422_Others"]){
      let updateTruckData = await fetch('https://app.suvegafleet.com/api/send-current-vehicle-information', {
          method: 'post',
          body:    JSON.stringify(vehicles.Result["422_Others"]),
          headers: { 'Content-Type': 'application/json' },
      });
      console.log("response data : ",updateTruckData);
      return await updateTruckData.json();
    }else{
      return [];
    }
    
  } catch (error) {
    console.log(error);
  }
};

exports.dumpVehicle = async () => {
  try {
    const URL = "https://india.pointerbi.com/FleetAPI/api/Vehicle/GetVehiclesInfo?Accounts=426&LicensePlates=&VehicleIds=&ExternalIds=&Key=70643187120000039&OptionalProps=2&OptionalProps=2";
    let response = await fetch(URL);
    let vehicles = await response.json();
    console.log("vehicles", vehicles);
    //console.log("vehicles", vehicles.Result['422_Others']);
    if(vehicles.Result && vehicles.Result["422_Others"]){
      var newArr = _.map(vehicles.Result["422_Others"], function (element) {
        element.location = {
          type: "Point",
          coordinates: [element.Long, element.Lat],
        };
        element.LastLocationTime = moment.utc(element.LastLocationTime).format();
        element.LastMessageTime = moment.utc(element.LastMessageTime).format();
  
        if (element.SensorsData && element.SensorsData.Sensors && element.SensorsData.Sensors.length > 0) {
          console.log("Sensor Data Found!!");
          if (element.SensorsData.CANBusDateTime) {
            element.SensorsData.CANBusDateTime = moment.utc(element.SensorsData.CANBusDateTime).format();
          }
  
          let object = _.find(element.SensorsData.Sensors, {
            Name: "Water in Fuel Indicator",
          });
          console.log("Water IN Fuel Indicator", object);
  
          element.Water_in_Fuel_Indicator = _.find(element.SensorsData.Sensors, {
            Name: "Water in Fuel Indicator",
          })
            ? _.find(element.SensorsData.Sensors, {
                Name: "Water in Fuel Indicator",
              })
            : {};
          element.Vehicle_Speed = _.find(element.SensorsData.Sensors, {
            Name: "Vehicle Speed",
          })
            ? _.find(element.SensorsData.Sensors, { Name: "Vehicle Speed" })
            : {};
          element.Total_Vehicle_Distance = _.find(element.SensorsData.Sensors, {
            Name: "Total Vehicle Distance",
          })
            ? _.find(element.SensorsData.Sensors, {
                Name: "Total Vehicle Distance",
              })
            : {};
          element.Real_Ground_vehicle_speed = _.find(element.SensorsData.Sensors, { Name: "Real-Ground vehicle speed" })
            ? _.find(element.SensorsData.Sensors, {
                Name: "Real-Ground vehicle speed",
              })
            : {};
          element.Engine_speed_RPM = _.find(element.SensorsData.Sensors, {
            Name: "Engine speed (RPM) ",
          })
            ? _.find(element.SensorsData.Sensors, { Name: "Engine speed (RPM) " })
            : {};
          element.Engine_Retarder_Selection_Engine_Brake = _.find(element.SensorsData.Sensors, { Name: "Engine Retarder Selection / Engine Brake" })
            ? _.find(element.SensorsData.Sensors, {
                Name: "Engine Retarder Selection / Engine Brake",
              })
            : {};
          element.Engine_Oil_Pressure = _.find(element.SensorsData.Sensors, {
            Name: "Engine Oil Pressure",
          })
            ? _.find(element.SensorsData.Sensors, { Name: "Engine Oil Pressure" })
            : {};
          element.Engine_Intake_Manifold_1_Temperature = _.find(element.SensorsData.Sensors, { Name: "Engine Intake Manifold 1 Temperature" })
            ? _.find(element.SensorsData.Sensors, {
                Name: "Engine Intake Manifold 1 Temperature",
              })
            : {};
          element.Engine_Intake_Manifold_1_Pressure = _.find(element.SensorsData.Sensors, { Name: "Engine Intake Manifold 1 Pressure" })
            ? _.find(element.SensorsData.Sensors, {
                Name: "Engine Intake Manifold 1 Pressure",
              })
            : {};
          element.Engine_Fuel_Rate = _.find(element.SensorsData.Sensors, {
            Name: "Engine Fuel Rate",
          })
            ? _.find(element.SensorsData.Sensors, { Name: "Engine Fuel Rate" })
            : {};
          element.Engine_Coolant_Temperature = _.find(element.SensorsData.Sensors, { Name: "Engine Coolant Temperature" })
            ? _.find(element.SensorsData.Sensors, {
                Name: "Engine Coolant Temperature",
              })
            : {};
          element.Engine_Coolant_Level = _.find(element.SensorsData.Sensors, {
            Name: "Engine Coolant Level",
          })
            ? _.find(element.SensorsData.Sensors, {
                Name: "Engine Coolant Level",
              })
            : {};
          element.Clutch_Pedal_Switch = _.find(element.SensorsData.Sensors, {
            Name: "Clutch Pedal Switch",
          })
            ? _.find(element.SensorsData.Sensors, { Name: "Clutch Pedal Switch" })
            : {};
          element.Catalyst_Tank_Temperature = _.find(element.SensorsData.Sensors, { Name: "Catalyst Tank Temperature" })
            ? _.find(element.SensorsData.Sensors, {
                Name: "Catalyst Tank Temperature",
              })
            : {};
          element.Catalyst_Tank_Level = _.find(element.SensorsData.Sensors, {
            Name: "Catalyst Tank Level",
          })
            ? _.find(element.SensorsData.Sensors, { Name: "Catalyst Tank Level" })
            : {};
          element.Brake_Pedal_Switch = _.find(element.SensorsData.Sensors, {
            Name: "Brake Pedal Switch  ",
          })
            ? _.find(element.SensorsData.Sensors, {
                Name: "Brake Pedal Switch  ",
              })
            : {};
          element.Actual_Engine_Percent_Torque = _.find(element.SensorsData.Sensors, { Name: "Actual Engine - Percent Torque" })
            ? _.find(element.SensorsData.Sensors, {
                Name: "Actual Engine - Percent Torque",
              })
            : {};
          element.Accelerator_Pedal_Position = _.find(element.SensorsData.Sensors, { Name: "Accelerator Pedal Position" })
            ? _.find(element.SensorsData.Sensors, {
                Name: "Accelerator Pedal Position",
              })
            : {};
          element.Fuel_Quantity = _.find(element.SensorsData.Sensors, {
            Name: "Fuel Quantity",
          })
            ? _.find(element.SensorsData.Sensors, { Name: "Fuel Quantity" })
            : {};
          element.Engine_Fuel_Temperature = _.find(element.SensorsData.Sensors, {
            Name: "Engine Fuel Temperature",
          })
            ? _.find(element.SensorsData.Sensors, {
                Name: "Engine Fuel Temperature",
              })
            : {};
          element.Engine_Oil_Temperature = _.find(element.SensorsData.Sensors, {
            Name: "Engine Oil Temperature",
          })
            ? _.find(element.SensorsData.Sensors, {
                Name: "Engine Oil Temperature",
              })
            : {};
        } else {
          console.log("Sensor Data Not Found!!");
        }
  
        console.log("element", element);
        element.Long = element.Long.toString();
        element.Lat = element.Lat.toString();
        return element;
      });
    }else{
      newArr = [];
    }
    console.log("NewArr", newArr);

    await Vehicle.insertMany(newArr);
  } catch (error) {
    console.log(error);
  }
};

exports.get = async (query = {}) => {
  try {
    //let date = moment.utc().format();
    //console.log("date", date);
    return await Vehicle.findOne({
      //LicensePlate: query.LicensePlate,
      //LastLocationTime: query.LastLocationTime,
      location: {
        $near: {
          $maxDistance: parseInt(query.Radius) * 3000,
          $geometry: {
            type: "Point",
            coordinates: [query.Long, query.Lat],
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.getAll = async (query = {}) => {
  try {
    const URL = "https://india.pointerbi.com/FleetAPI/api/Vehicle/GetVehiclesInfo?Accounts=426&LicensePlates=&VehicleIds=&ExternalIds=&Key=70643187120000039&OptionalProps=2&OptionalProps=2";
    let response = await fetch(URL);
    let vehicles = await response.json();
    console.log("vehicles", vehicles);
    //console.log("vehicles", vehicles.Result['422_Others']);

    var newArr = _.map(vehicles.Result["422_Others"], function (element) {
      element.location = {
        type: "Point",
        coordinates: [element.Long, element.Lat],
      };
      element.LastLocationTime = moment.utc(element.LastLocationTime).format();
      element.LastMessageTime = moment.utc(element.LastMessageTime).format();

      if (element.SensorsData && element.SensorsData.Sensors && element.SensorsData.Sensors.length > 0) {
        console.log("Sensor Data Found!!");

        if (element.SensorsData.CANBusDateTime) {
          element.SensorsData.CANBusDateTime = moment.utc(element.SensorsData.CANBusDateTime).format();
        }

        let object = _.find(element.SensorsData.Sensors, {
          Name: "Water in Fuel Indicator",
        });
        console.log("Water IN Fuel Indicator", object);

        element.Water_in_Fuel_Indicator = _.find(element.SensorsData.Sensors, {
          Name: "Water in Fuel Indicator",
        })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Water in Fuel Indicator",
            })
          : {};
        element.Vehicle_Speed = _.find(element.SensorsData.Sensors, {
          Name: "Vehicle Speed",
        })
          ? _.find(element.SensorsData.Sensors, { Name: "Vehicle Speed" })
          : {};
        element.Total_Vehicle_Distance = _.find(element.SensorsData.Sensors, {
          Name: "Total Vehicle Distance",
        })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Total Vehicle Distance",
            })
          : {};
        element.Real_Ground_vehicle_speed = _.find(element.SensorsData.Sensors, { Name: "Real-Ground vehicle speed" })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Real-Ground vehicle speed",
            })
          : {};
        element.Engine_speed_RPM = _.find(element.SensorsData.Sensors, {
          Name: "Engine speed (RPM) ",
        })
          ? _.find(element.SensorsData.Sensors, { Name: "Engine speed (RPM) " })
          : {};
        element.Engine_Retarder_Selection_Engine_Brake = _.find(element.SensorsData.Sensors, { Name: "Engine Retarder Selection / Engine Brake" })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Engine Retarder Selection / Engine Brake",
            })
          : {};
        element.Engine_Oil_Pressure = _.find(element.SensorsData.Sensors, {
          Name: "Engine Oil Pressure",
        })
          ? _.find(element.SensorsData.Sensors, { Name: "Engine Oil Pressure" })
          : {};
        element.Engine_Intake_Manifold_1_Temperature = _.find(element.SensorsData.Sensors, { Name: "Engine Intake Manifold 1 Temperature" })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Engine Intake Manifold 1 Temperature",
            })
          : {};
        element.Engine_Intake_Manifold_1_Pressure = _.find(element.SensorsData.Sensors, { Name: "Engine Intake Manifold 1 Pressure" })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Engine Intake Manifold 1 Pressure",
            })
          : {};
        element.Engine_Fuel_Rate = _.find(element.SensorsData.Sensors, {
          Name: "Engine Fuel Rate",
        })
          ? _.find(element.SensorsData.Sensors, { Name: "Engine Fuel Rate" })
          : {};
        element.Engine_Coolant_Temperature = _.find(element.SensorsData.Sensors, { Name: "Engine Coolant Temperature" })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Engine Coolant Temperature",
            })
          : {};
        element.Engine_Coolant_Level = _.find(element.SensorsData.Sensors, {
          Name: "Engine Coolant Level",
        })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Engine Coolant Level",
            })
          : {};
        element.Clutch_Pedal_Switch = _.find(element.SensorsData.Sensors, {
          Name: "Clutch Pedal Switch",
        })
          ? _.find(element.SensorsData.Sensors, { Name: "Clutch Pedal Switch" })
          : {};
        element.Catalyst_Tank_Temperature = _.find(element.SensorsData.Sensors, { Name: "Catalyst Tank Temperature" })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Catalyst Tank Temperature",
            })
          : {};
        element.Catalyst_Tank_Level = _.find(element.SensorsData.Sensors, {
          Name: "Catalyst Tank Level",
        })
          ? _.find(element.SensorsData.Sensors, { Name: "Catalyst Tank Level" })
          : {};
        element.Brake_Pedal_Switch = _.find(element.SensorsData.Sensors, {
          Name: "Brake Pedal Switch  ",
        })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Brake Pedal Switch  ",
            })
          : {};
        element.Actual_Engine_Percent_Torque = _.find(element.SensorsData.Sensors, { Name: "Actual Engine - Percent Torque" })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Actual Engine - Percent Torque",
            })
          : {};
        element.Accelerator_Pedal_Position = _.find(element.SensorsData.Sensors, { Name: "Accelerator Pedal Position" })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Accelerator Pedal Position",
            })
          : {};
        element.Fuel_Quantity = _.find(element.SensorsData.Sensors, {
          Name: "Fuel Quantity",
        })
          ? _.find(element.SensorsData.Sensors, { Name: "Fuel Quantity" })
          : {};
        element.Engine_Fuel_Temperature = _.find(element.SensorsData.Sensors, {
          Name: "Engine Fuel Temperature",
        })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Engine Fuel Temperature",
            })
          : {};
        element.Engine_Oil_Temperature = _.find(element.SensorsData.Sensors, {
          Name: "Engine Oil Temperature",
        })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Engine Oil Temperature",
            })
          : {};
      } else {
        console.log("Sensor Data Not Found!!");
      }
      delete element.SensorsData;
      return element;
    });

    return newArr;
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.filterByLicensse = async (query = {}) => {
  try {
    const URL = "https://india.pointerbi.com/FleetAPI/api/Vehicle/GetVehiclesInfo?Accounts=426&LicensePlates=" + query.LicensePlate + "&VehicleIds=&ExternalIds=&Key=70643187120000039&OptionalProps=2&OptionalProps=2";
    console.log("URL", URL);
    let response = await fetch(URL);
    let vehicles = await response.json();
    console.log("vehicles", vehicles);
    //console.log("vehicles", vehicles.Result['422_Others']);
    var newArr = [];
    newArr = _.map(vehicles.Result["422_Others"], function (element) {
      element.location = {
        type: "Point",
        coordinates: [element.Long, element.Lat],
      };
      element.LastLocationTime = moment.utc(element.LastLocationTime).format();
      element.LastMessageTime = moment.utc(element.LastMessageTime).format();

      if (element.SensorsData && element.SensorsData.Sensors && element.SensorsData.Sensors.length > 0) {
        console.log("Sensor Data Found!!", element.SensorsData.Sensor);
        element.SensorsDataLength = element.SensorsData.Sensors.length;

        if (element.SensorsData.CANBusDateTime) {
          element.SensorsData.CANBusDateTime = moment.utc(element.SensorsData.CANBusDateTime).format();
        }

        let object = _.find(element.SensorsData.Sensors, {
          Name: "Water in Fuel Indicator",
        });
        console.log("Water IN Fuel Indicator", object);

        element.Water_in_Fuel_Indicator = _.find(element.SensorsData.Sensors, {
          Name: "Water in Fuel Indicator",
        })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Water in Fuel Indicator",
            })
          : {};
        element.Vehicle_Speed = _.find(element.SensorsData.Sensors, {
          Name: "Vehicle Speed",
        })
          ? _.find(element.SensorsData.Sensors, { Name: "Vehicle Speed" })
          : {};
        element.Total_Vehicle_Distance = _.find(element.SensorsData.Sensors, {
          Name: "Total Vehicle Distance",
        })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Total Vehicle Distance",
            })
          : {};
        element.Real_Ground_vehicle_speed = _.find(element.SensorsData.Sensors, { Name: "Real-Ground vehicle speed" })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Real-Ground vehicle speed",
            })
          : {};
        element.Engine_speed_RPM = _.find(element.SensorsData.Sensors, {
          Name: "Engine speed (RPM) ",
        })
          ? _.find(element.SensorsData.Sensors, { Name: "Engine speed (RPM) " })
          : {};
        element.Engine_Retarder_Selection_Engine_Brake = _.find(element.SensorsData.Sensors, { Name: "Engine Retarder Selection / Engine Brake" })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Engine Retarder Selection / Engine Brake",
            })
          : {};
        element.Engine_Oil_Pressure = _.find(element.SensorsData.Sensors, {
          Name: "Engine Oil Pressure",
        })
          ? _.find(element.SensorsData.Sensors, { Name: "Engine Oil Pressure" })
          : {};
        element.Engine_Intake_Manifold_1_Temperature = _.find(element.SensorsData.Sensors, { Name: "Engine Intake Manifold 1 Temperature" })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Engine Intake Manifold 1 Temperature",
            })
          : {};
        element.Engine_Intake_Manifold_1_Pressure = _.find(element.SensorsData.Sensors, { Name: "Engine Intake Manifold 1 Pressure" })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Engine Intake Manifold 1 Pressure",
            })
          : {};
        element.Engine_Fuel_Rate = _.find(element.SensorsData.Sensors, {
          Name: "Engine Fuel Rate",
        })
          ? _.find(element.SensorsData.Sensors, { Name: "Engine Fuel Rate" })
          : {};
        element.Engine_Coolant_Temperature = _.find(element.SensorsData.Sensors, { Name: "Engine Coolant Temperature" })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Engine Coolant Temperature",
            })
          : {};
        element.Engine_Coolant_Level = _.find(element.SensorsData.Sensors, {
          Name: "Engine Coolant Level",
        })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Engine Coolant Level",
            })
          : {};
        element.Clutch_Pedal_Switch = _.find(element.SensorsData.Sensors, {
          Name: "Clutch Pedal Switch",
        })
          ? _.find(element.SensorsData.Sensors, { Name: "Clutch Pedal Switch" })
          : {};
        element.Catalyst_Tank_Temperature = _.find(element.SensorsData.Sensors, { Name: "Catalyst Tank Temperature" })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Catalyst Tank Temperature",
            })
          : {};
        element.Catalyst_Tank_Level = _.find(element.SensorsData.Sensors, {
          Name: "Catalyst Tank Level",
        })
          ? _.find(element.SensorsData.Sensors, { Name: "Catalyst Tank Level" })
          : {};
        element.Brake_Pedal_Switch = _.find(element.SensorsData.Sensors, {
          Name: "Brake Pedal Switch  ",
        })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Brake Pedal Switch  ",
            })
          : {};
        element.Actual_Engine_Percent_Torque = _.find(element.SensorsData.Sensors, { Name: "Actual Engine - Percent Torque" })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Actual Engine - Percent Torque",
            })
          : {};
        element.Accelerator_Pedal_Position = _.find(element.SensorsData.Sensors, { Name: "Accelerator Pedal Position" })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Accelerator Pedal Position",
            })
          : {};
        element.Fuel_Quantity = _.find(element.SensorsData.Sensors, {
          Name: "Fuel Quantity",
        })
          ? _.find(element.SensorsData.Sensors, { Name: "Fuel Quantity" })
          : {};
        element.Engine_Fuel_Temperature = _.find(element.SensorsData.Sensors, {
          Name: "Engine Fuel Temperature",
        })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Engine Fuel Temperature",
            })
          : {};
        element.Engine_Oil_Temperature = _.find(element.SensorsData.Sensors, {
          Name: "Engine Oil Temperature",
        })
          ? _.find(element.SensorsData.Sensors, {
              Name: "Engine Oil Temperature",
            })
          : {};
      } else {
        element.SensorsDataLength = 0;
        console.log("Sensor Data Not Found!!");
      }
      //delete element.SensorsData;
      return element;
    });

    console.log("newArray", newArr);
    if (newArr.length > 0) {
      console.log("TRUE");

      if (newArr[0].SensorsDataLength != 0) {
        return newArr;
      } else {
        try {
          let records = await Vehicle.findOne({
            LicensePlate: query.LicensePlate,
            Vehicle_Speed: { $ne: null },
            Total_Vehicle_Distance: { $ne: null },
          })
            .sort({ created_at: -1 })
            .limit(1)
            .lean();

          if (records) {
            records.Lat = newArr[0].Lat;
            records.Long = newArr[0].Long;
            records.Address = newArr[0].Address;
            records.LastMessageTime = newArr[0].LastMessageTime;
            records.LastLocationTime = newArr[0].LastLocationTime;

            newArr[0] = records;
            if (newArr.length > 0) {
              newArr[0].SensorsDataLength = 0;

              newArr;

              return newArr;
            }
          }
          return newArr;
        } catch (error) {
          console.log("filter mongo query error", error);
        }
      }
    } else {
      console.log("FALSE");
      try {
        let records = await Vehicle.findOne({
          LicensePlate: query.LicensePlate,
          Vehicle_Speed: { $ne: null },
          Total_Vehicle_Distance: { $ne: null },
        })
          .sort({ created_at: -1 })
          .limit(1)
          .lean();

        if (records) {
          records.Lat = newArr[0].Lat;
          records.Long = newArr[0].Long;
          records.Address = newArr[0].Address;
          records.LastMessageTime = newArr[0].LastMessageTime;
          records.LastLocationTime = newArr[0].LastLocationTime;

          newArr[0] = records;
          if (newArr.length > 0) {
            newArr[0].SensorsDataLength = 0;
            return newArr;
          }
        }
        return newArr;
      } catch (error) {
        console.log("filter mongo query error", error);
      }
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.filterByLicensseFromHistory = async (query = {}) => {
  try {
    return await Vehicle.findOne({
      LicensePlate: query.LicensePlate,
      Vehicle_Speed: { $ne: null },
      Total_Vehicle_Distance: { $ne: null },
    })
      .sort({ created_at: -1 })
      .limit(1)
      .lean();
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.getFuelConsumption = async (query = {}) => {
  try {
    console.log(query);
    console.log(moment.utc(query.start_date).format());
    let condition = {
      LicensePlate: query.LicensePlate,
      LastLocationTime: { $gte: moment.utc(query.start_date).format(), $lte: moment.utc(query.end_date).format() },
    };
    let data = await Vehicle.find(condition).sort({ created_at: -1 }).lean();

    /*let total = await _.sumBy(data, function (o) {
      //console.log(o);
      //return parseFloat(o.Engine_Fuel_Rate.Value);
      return o.Engine_Fuel_Rate ? parseFloat(o.Engine_Fuel_Rate.Value) : 0;
    });*/
    console.log("LENGTH", data.length);
    console.log("First", data[0].LastLocationTime);
    console.log("LAST", data[data.length - 1].LastLocationTime);
    let total = 0;
    let temp_total = 0;
    for (let i = 0; i < data.length; i++) {
      console.log("ENFURATE => ", parseFloat(data[i].Engine_Fuel_Rate.Value));
      //temp_total = temp_total + parseFloat(data[i].Engine_Fuel_Rate.Value);
      //console.log("TEMP_TOTAL", temp_total);
      total += (parseFloat(data[i].Engine_Fuel_Rate.Value) * 20) / (60 * 60);
      console.log("TOTAL ", total);
    }
    return { total: total.toFixed(2) };

    /*return await Vehicle.aggregate([
      {
        $match: condition,
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$Engine_Fuel_Rate.Value",
          },
        },
      },
    ]);*/
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.getFuelConsumptionV2 = async (query = {}) => {
  console.log("645");
  try {
    const URL = "https://india.pointerbi.com/FleetAPI/api/Vehicle/GetVehicleRouteHistoryInfo?Key=70643187120000039&StartDate=" + query.start_date + "&EndDate=" + query.end_date + "&LicensePlate=" + query.LicensePlate + "&OptionalProps=2";
    let response = await fetch(URL);
    let vehicles = await response.json();
    //console.log("vehicles", vehicles);
    //console.log("vehicles", vehicles.Result['422_Others']);
    let total = 0;
    let totalDistanceStart = 0;
    let totalDistanceEnd = 0;
    let flag = 0;
    var newArr = _.map(vehicles.Result, function (element) {
      if (element.SensorsData && element.SensorsData.Sensors && element.SensorsData.Sensors.length > 0) {
        console.log("Sensor Data Found!! - 12");

        let temp1 = _.find(element.SensorsData.Sensors, {
          Name: "Engine Fuel Rate",
        })
          ? _.find(element.SensorsData.Sensors, { Name: "Engine Fuel Rate" })
          : {};

        console.log("TEMP1", temp1);

        console.log("ENFURATE => ", parseFloat(temp1.Value));
        total += (parseFloat(temp1.Value) * 20) / (60 * 60);
        console.log("TOTAL ", total);

        let distance = _.find(element.SensorsData.Sensors, {
          Name: "Total Vehicle Distance",
        })
          ? _.find(element.SensorsData.Sensors, { Name: "Total Vehicle Distance" })
          : {};
        console.log("distanceValue", distance.Value);
        totalDistanceEnd = parseFloat(distance.Value) > 0 ? parseFloat(distance.Value) : 0;

        if (flag == 0) {
          console.log("FIRST-TIME", flag);
          let distance = _.find(element.SensorsData.Sensors, {
            Name: "Total Vehicle Distance",
          })
            ? _.find(element.SensorsData.Sensors, { Name: "Total Vehicle Distance" })
            : {};
          console.log("first-distanceValue", distance.Value);
          totalDistanceStart = parseFloat(distance.Value) > 0 ? parseFloat(distance.Value) : 0;
          flag = 1;
        }
      } else {
        console.log("Sensor Data Not Found!!");
      }

      return element;
    });

    //console.log("NewArr", newArr);
    console.log("TTTTOTAL", total);
    return { total: total.toFixed(2), totalDistanceStart, totalDistanceEnd };
  } catch (error) {
    console.log(error);
  }
};
