const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));
var newServerItem = [];

app.get("/", function(req, res) {
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { kindOfDay: day, newListItem: newServerItem });

});

app.post("/", function(req, res) {
    newServerItem.push(req.body.newItem);

    res.redirect("/");
});

app.post("/reset", function(req, res) {
    newServerItem = [];
    res.redirect("/");
})


app.listen(3000, function() {});