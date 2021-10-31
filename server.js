const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.post("/", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "public/index.html"));
});

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "public/index.html"));
});

app.listen(process.env.PORT || 5000);