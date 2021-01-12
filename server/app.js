const express = require("express");
const path = require("path");
const app = express();

app.use(
  "/static",
  express.static(path.join(__dirname, "../client/build/static"))
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is up and running.");
});
