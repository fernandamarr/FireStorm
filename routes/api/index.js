const router = require("express").Router();
const playerRoutes = require("./players");

// player Routes

router.use("/players", playerRoutes);

module.exports = router;