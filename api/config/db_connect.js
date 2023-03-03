const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dbConnect = async () => {
  await mongoose.connect(
    process.env.DB_CONNECTION_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log(`Database connection is successfully established`);
    }
  );
};

module.exports = dbConnect;
