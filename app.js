const express = require("express");
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));
var newServerItem = [];
let workList = [];

app.get("/", function(req, res) {
    var day = date("en-US");
    res.render("list", { listTitle: day, newListItem: newServerItem });
});

app.post("/", function(req, res) {
    if (req.body.list === "Work List") {
        workList.push(req.body.newItem);
        res.redirect("/work");
    } else {
        newServerItem.push(req.body.newItem);
        res.redirect("/");
    }
});

app.post("/reset", function(req, res) {
    if (req.body.reset === "Work List") {
        workList = [];
        res.redirect("/work");
    } else {
        newServerItem = [];
        res.redirect("/");
    }
})

app.get("/about", function(req, res) {
    res.render("about");
})

app.get("/work", function(req, res) {
    res.render("list", { listTitle: "Work List", newListItem: workList });
});

app.listen(3000, function() {});