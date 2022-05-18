const router = require("express").Router();
const axios = require("axios");

// get account info
router.get("/:gamertag", async (req, res) => {
    // router.get("/", async (req, res) => {
    // const response = await axios({
    //     method: "get",
    //     // update to use gamertag PARAM
    //     url: "http://xbl.io/api/v2/friends/search?gt=Itali4NStali0nz",
    //     responseType: "json",
    //     headers: { "X-Authorization": "wsscs0cswwgkg4s4ko40804o40s0444kckc" },
    // });

    const response = await axios({
        method: "get",
        // update to use gamertag PARAM
        url: `http://xbl.io/api/v2/friends/search?gt=${req.params.gamertag}`,
        responseType: "json",
        headers: { "X-Authorization": "wsscs0cswwgkg4s4ko40804o40s0444kckc" },
    });
    return res.json(response.data);
});

module.exports = router;
