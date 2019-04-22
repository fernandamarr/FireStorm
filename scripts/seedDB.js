const mongoose = require("mongoose");
const db = require("../models");

// This will empty the Players collection and insert the NEW Player login below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/firestormDB"
);

const playerSeed = [
    // first/last name is set
    // email is default same with password for when we demo

    {
       firstName: "Cesar",
       lastName: "Marroquin",
       email:"cesar.marroquin@gmail.com",
       password: "1234",
       date: new Date(Date.now())
    },
    {
        firstName: "Fernanda",
        lastName: "Marroquin",
        email: "fern.marroquin@gmail.com",
        password: "1234",
        date: new Date(Date.now())
    },
    {
        firstName: "Tequila",
        lastName: "Loco",
        email: "tequila.loco@gmail.com",
        password: "1234",
        date: new Date(Date.now())
    }
];

db.Player
.remove({})
.then(()=> db.Player.collection.insertMany(playerSeed))
.then(data => {
    console.log(data.result.n + "PLAYERS INSERTED");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});