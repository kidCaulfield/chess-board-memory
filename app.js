const express = require("express");
const app = express();
const port = 3000;
const logger = require("morgan");
const filterHeaders = require("./routes/services/filterHeaders");

//////////// MIDDLEWARE //////////////
app.use(logger("common"));
app.use(express.urlencoded({ extended: true })); //middleware for parsing urlencoded data
app.use(express.json()); // middleware for parsing incoming json
//////////////////////////////////////

/////////////// ROUTES ///////////////
app.use("/api/v1", filterHeaders, require("./routes"));
//////////////////////////////////////

app.listen(port, () => {
  console.log(`Server listening on port ${3000}`);
});
