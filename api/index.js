/*-------------required packages----------------*/
const validator = require("validator");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/*-------------express app----------------*/

const app = express();

/*-------------express app----------------*/

/*-------------configure env variables----------------*/
require("dotenv").config();
/*-------------configure env variables----------------*/

/*-------------internal modules----------------*/

const { notFound, errorHandler } = require("./middleware/Errorhandel");
const dbConnect = require("./config/db_connect");
const router = require("./routes/auth_route");

/*-------------internal modules----------------*/

/*-------------middelwares----------------*/
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/images", express.static("images"));

app.use("/api/v1/user", router);

app.use(notFound);
app.use(errorHandler);

/*-------------middelwares----------------*/

/*--------------DB CONNECTION----------*/
const PORT = process.env.PORT || 8080;
dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

/*--------------DB CONNECTION----------*/
