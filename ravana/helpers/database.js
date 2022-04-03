const mongoose = require("mongoose");
mongoose.set("debug", true);
exports.getConnection = async () => {
  await mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("Mongodb Connected");
    })
    .catch((err) => {
      console.error("Error to Connect Mongodb as ", err);
    });

  mongoose.set("debug", true);

  return mongoose;
};
