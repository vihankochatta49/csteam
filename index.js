const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/team.html"));
});

app.get("/present-team", (req, res) => {
  res.sendFile(path.join(__dirname, "/presentTeam.html"));
});

app.get("/past-teams", (req, res) => {
  res.sendFile(path.join(__dirname, "/pastTeam.html"));
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
