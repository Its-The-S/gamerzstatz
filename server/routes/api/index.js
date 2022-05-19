const router = require("express").Router();
const accountRoutes = require("./accountRoutes");
const achievementRoutes = require("./achievementRoutes");

// route one more level down to account or achieve
router.use("/account", accountRoutes);
router.use("/achieve", achievementRoutes);

module.exports = router;
