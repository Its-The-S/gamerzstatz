const router = require("express").Router();
const axios = require("axios");

// get list of a user's friends from xbox live using the user's xbox unique id
router.get("/:xuid", async (req, res) => {
    const response = await axios({
        method: "get",
        url: `https://xbl.io/api/v2/friends?xuid=${req.params.xuid}`,
        responseType: "json",
        headers: { "X-Authorization": "wsscs0cswwgkg4s4ko40804o40s0444kckc" },
    });
    return res.json(response.data);
});

module.exports = router;
