const router = require("express").Router();
const axios = require("axios");

// get account info from xbox live using gamertag
router.get("/:gamertag", async (req, res) => {
    const response = await axios({
        method: "get",
        url: `http://xbl.io/api/v2/friends/search?gt=${req.params.gamertag}`,
        responseType: "json",
        headers: { "X-Authorization": "wsscs0cswwgkg4s4ko40804o40s0444kckc" },
    });
    return res.json(response.data);
});

module.exports = router;
