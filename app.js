"use strict";
const express = require("express");
const app = express();
const port = 3000;
const logger = require("morgan");
const cors = require("cors");
const filterHeaders = require("./routes/services/filterHeaders");

//////////// MIDDLEWARE //////////////
app.use(logger("common")); // middleare for logging http request
app.use(express.urlencoded({ extended: true })); //middleware for parsing urlencoded data
app.use(express.json()); // middleware for parsing incoming json
app.use(cors()); // enable cors
//////////////////////////////////////

/////////////// ROUTES ///////////////
app.use("/api/v1", filterHeaders, require("./routes"));
//////////////////////////////////////

app.listen(port, () => {
  console.log(`Server listening on port ${3000}`);
});
