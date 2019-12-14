var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8005;

var tables = [
    {
        name: "Tulus",
        phone: 8058675309,
        email: "email@domain.com",
        id: 21,
        time: "7:30"
    }
];

var waitlist = [];

//pseudocoding this bit
// if (tables.length > 5) {
//     waitlist.push(reservation);
// }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"))
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname + "/make.html"))
})

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname + "/view.html"))
    return res.json(tables);
    return res.json(waitlist);
    // for (let i = 0; i < tables.length; i++) {
    //     return res.json(tables[i])
    // }

    // for (let j = 0; j < waitlist.length; j++) {
    //     return res.json()
    // }
})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});