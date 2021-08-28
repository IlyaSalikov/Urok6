const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

app.get("/", (req, res) => {
    res.status(200).send("JavaScript");
});

app.get("/contact", (req, res) => {
    res.status(200).send("<h1>8(800)-555-35-35<h1>" +
        "<h2>Восемь-восемьсот-пять-пять-пять-три-пять-три-пять</h2>" +
        "<h3>Проще позвонить, чем домашку выполнять!</h3>");
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.listen(port, () => {
     console.log(`Listening to requests on http://localhost:${port}`);
 });