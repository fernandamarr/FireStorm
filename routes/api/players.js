const router = require("express").Router();
const playerController = require("../../controllers/playerController");


// routing for all players when we first want to find one and add one

        // Matches with "/api/players"
router.route("/")
.get(playerController.findAll)
.post(playerController.create);

// when logging back in or if the player already exist
// in the event we want a player to delete their progress route is added

        // Matches with "/api/players/:id"
router 
    .route("/:id")
    .get(playerController.findById)
    .put(playerController.update)
    .delete(playerController.remove);

module.exports = router;