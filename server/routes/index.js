const router = require("express").Router();
const apiRoutes = require("./api");

// prefix all routes with /api
router.use("/api", apiRoutes);

module.exports = router;
