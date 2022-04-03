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
        "LastMessageTime" : {
          type: Date,
        }, 
        "LastLocationTime" : {
          type: Date,
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
        }
  },
  { timestamps: { createdAt: "created_at" } }
);

vehiclesSchema.index({ location: "2dsphere" });
module.exports = mongoose.model("vehicles", vehiclesSchema);
