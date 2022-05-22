const router = require("express").Router();
const accountRoutes = require("./accountRoutes");
const achievementRoutes = require("./achievementRoutes");
const gameRoutes = require("./gameRoutes");
const friendRoutes = require("./friendRoutes");

// route one more level down to /account, /achieve, /game, or /friend
router.use("/account", accountRoutes);
router.use("/achieve", achievementRoutes);
router.use("/game", gameRoutes);
router.use("/friend", friendRoutes);

module.exports = router;
