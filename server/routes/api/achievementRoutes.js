const router = require("express").Router();
const axios = require("axios");

// get all achievement info
router.get("/:xuid", async (req, res) => {
    // const user = JSON.parse(localStorage.getItem("user"));
    const response = await axios({
        method: "get",
        url: `https://xbl.io/api/v2/achievements/player/${req.params.xuid}`,
        responseType: "json",
        headers: { "X-Authorization": "wsscs0cswwgkg4s4ko40804o40s0444kckc" },
    });
    return res.json(response.data);
});

module.exports = router;
