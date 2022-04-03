let messages = {
  DEFAULT: "Success",
  INVALID_APP_KEY_MISSING: "Invalid API Key.",
  APP_KEY_MISSING: "Invalid Request. App Key is Missing in header.",
};

const getMessage = (code, defaultcode) => {
  console.log("code", code);
  console.log("messages[code]", messages[code]);
  return messages[code] ? messages[code] : messages[defaultcode];
};

exports.getErrorMessage = (code, defaultcode) => {
  return getMessage(code, defaultcode);
};

exports.error = (res, code = "", statusCode = 400) => {
  console.log("Error Code", code);
  const resData = {
    error: true,
    message: getMessage(code, "DEFAULT"),
    statusCode: statusCode,
    messageCode: code,
  };
  return res.status(statusCode).json(resData);
};

exports.success = (res, code = "", statusCode = 200, data = {}) => {
  const resData = {
    error: false,
    message: getMessage(code, "DEFAULT"),
    statusCode: statusCode,
    messageCode: code,
    data,
  };
  return res.status(statusCode).json(resData);
};

exports.notFound = (res, code, statusCode = 404) => {
  const resData = {
    success: false,
    statusCode: statusCode,
    message: getMessage(code, "DEFAULTERR") || "Invalid request data",
    data: {},
    messageCode: code,
  };
  return res.status(statusCode).send(resData);
};

exports.unAuthentication = (res, data, code = "", statusCode = 401) => {
  const resData = {
    success: false,
    statusCode: statusCode,
    message: getMessage(code, "DEFAULT_AUTH"),
    data,
    messageCode: code ? code : "DEFAULT_AUTH",
  };
  return res.status(statusCode).send(resData);
};
