exports.generateOTP = async () => {
  let currentDate = new Date();
  currentDate.setMinutes(currentDate.getMinutes() + 5);
  let otp_expiration_time = currentDate.toISOString();
  let randomArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let random1 =
    "" + randomArray[Math.floor(Math.random() * randomArray.length)];
  let random2 =
    "" + randomArray[Math.floor(Math.random() * randomArray.length)];
  let random3 =
    "" + randomArray[Math.floor(Math.random() * randomArray.length)];
  let random4 =
    "" + randomArray[Math.floor(Math.random() * randomArray.length)];
  let random5 =
    "" + randomArray[Math.floor(Math.random() * randomArray.length)];
  let random6 =
    "" + randomArray[Math.floor(Math.random() * randomArray.length)];
  let otp = "" + random6 + random5 + random4 + random3 + random2 + random1;
  return otp;
};
