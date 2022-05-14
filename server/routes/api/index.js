const router = require("express").Router();
const accountRoutes = require("./accountRoutes");

// Prefix all routes defined in `accountRoutes.js` with `/books
router.use("/account", accountRoutes);

module.exports = router;
