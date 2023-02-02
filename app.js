const express = require("express");
const app = express();
const port = 3000;
const logger = require("morgan");

app.use(logger("common"));

app.use("/api/v1", require("./routes"));

app.listen(port, () => {
  console.log(`Server listening on port ${3000}`);
});
