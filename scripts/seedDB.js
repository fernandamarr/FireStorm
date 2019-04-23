const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/firestorm"
);

const playerSeed = [

    {
        name: "Cesar",
        email: "cesar@gmail.com",
        password: "1234",
        date: new Date(Date.now())
    },
    {
        name: "Fernanda",
        email: "fer@gmail.com",
        password: "1234",
        date: new Date(Date.now())
    },
    {
        name: "Myk",
        email: "myk@gmail.com",
        password: "1234",
        date: new Date(Date.now())
    }
];

db.Player
    .remove({})
    .then(() => db.Player.collection.insertMany(playerSeed))
    .then(data => {
        console.log(data.result.n + "PLAYER ADDED");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });