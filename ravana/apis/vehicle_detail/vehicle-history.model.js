const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehiclesSchema = new Schema(
  {
    ExternalId: {
      type: Number,
    },
    "Long" : {
      type: String,
    },
    "Lat" : {
      type: String,
    }, 
    "AccountID" : {
      type: Number,
    }, 
        "GroupId" : {
          type: Number,
        }, 
        "AccountName" : {
          type: String,
        }, 
        "UnitID" : {
          type: Number,
        }, 
        "LicensePlate" : {
          type: String,
        }, 
        "FleetAlias" : {
          type: String,
        }, 
        "FleetNumber" : {
          type: String,
        }, 
        "FuelType" : {
          type: Number,
        },
        "Manufacturer" : {
          type: String,
        }, 
        "Model" : {
          type: String,
        }, 
        "Year" : {
          type: String,
        }, 
        "VehicleID" : {
          type: Number,
        }, 
        /*"LastMessageTime" : {
          type: Date,
        }, 
        "LastLocationTime" : {
          type: Date,
        },*/
        "LastMessageTime" : {
          type: String,
        }, 
        "LastLocationTime" : {
          type: String,
        }, 
        location: {
          type: { type: String, default: "Point" },
          coordinates: { type: [Number], default: [0, 0] },
        },
        "Address" : {
          type: String,
        }, 
        "Speed" : {
          type: Number,
        }, 
        "Battery" : {
          type: String,
        }, 
        "Ignition" : {
          type: Number,
        }, 
        "DriverName" : {
          type: String,
        }, 
        "SensorsData" :{
          type: Object,
        },
        "Water_in_Fuel_Indicator": {
          type: Object,
          default: null
        },
        "Vehicle_Speed": {
          type: Object,
          default: null
        },
        "Total_Vehicle_Distance": {
          type: Object,
          default: null
        },
        "Real_Ground_vehicle_speed": {
          type: Object,
          default: null
        },
        "Engine_speed_RPM": {
          type: Object,
          default: null
        },
        "Engine_Retarder_Selection_Engine_Brake": {
          type: Object,
          default: null
        },
        "Engine_Oil_Pressure": {
          type: Object,
          default: null
        }, 
        "Engine_Intake_Manifold_1_Temperature": {
          type: Object,
          default: null
        },
        "Engine_Intake_Manifold_1_Pressure": {
          type: Object,
          default: null
        }, 
        "Engine_Fuel_Rate": {
          type: Object,
          default: null
        },
        "Engine_Coolant_Temperature": {
          type: Object,
          default: null
        },
        "Engine_Coolant_Level": {
          type: Object,
          default: null
        },
        "Clutch_Pedal_Switch": {
          type: Object,
          default: null
        },
        "Catalyst_Tank_Temperature": {
          type: Object,
          default: null
        },
        "Catalyst_Tank_Level": {
          type: Object,
          default: null
        },
        "Brake_Pedal_Switch": {
          type: Object,
          default: null
        },
        "Actual_Engine_Percent_Torque": {
          type: Object,
          default: null
        },
        "Accelerator_Pedal_Position": {
          type: Object,
          default: null
        },
        "Fuel_Quantity": {
          type: Object,
          default: null
        },
        "Engine_Fuel_Temperature": {
          type: Object,
          default: null
        },
        "Engine_Oil_Temperature":{
          type: Object,
          default: null
        }
  },
  { timestamps: { createdAt: "created_at" } }
);

vehiclesSchema.index({ location: "2dsphere" });
module.exports = mongoose.model("vehicle-history", vehiclesSchema);
