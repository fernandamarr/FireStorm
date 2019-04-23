const router = require("express").Router();
const playerRoutes = require("./players.js");

// player Routes

router.use("/player", playerRoutes);

module.exports = router;