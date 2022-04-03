const commonResponse = require("./commonResponse");

const verify_api_key = async (req, res, next) => {
  try {
    if (req.headers["app-key"]) {
      let appKey = req.headers["app-key"];
      try {
        console.log("appkey:", appKey);
        console.log("API_KEY", process.env.API_KEY);
        if (appKey == process.env.API_KEY) {
          return next();
        } else {
          console.log("Key is wrong");
          commonResponse.error(res, "INVALID_APP_KEY_MISSING");
          next();
        }
      } catch (error) {
        console.log("ManualErrorHandling");
        return next(error);
      }
    } else {
      console.log("Key is missing");
      commonResponse.error(res, "APP_KEY_MISSING");
      next();
    }
  } catch (error) {
    console.log("error-m", error);
    return next(error);
  }
};

module.exports = {
  verify_api_key,
};
