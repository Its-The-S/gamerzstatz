const router = require("express").Router();
const axios = require("axios");

// get account info
router.get("/", async (req, res) => {
    const response = await axios({
        method: "get",
        url: "http://xbl.io/api/v2/account",
        responseType: "json",
        headers: { "X-Authorization": "wsscs0cswwgkg4s4ko40804o40s0444kckc" },
    });
    return res.json(response.data);
});

module.exports = router;
