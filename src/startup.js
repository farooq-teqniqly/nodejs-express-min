const express = require("express");

const app = express();

app.use(express.json());
app.use("/weather", require("./routes"));

app.all("*", (req, res) => {
  return res.status(404);
});

module.exports = app;
