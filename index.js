const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT || 3000, () => {
  console.log(__dirname);
  console.log("Server started on port " + PORT);
});
