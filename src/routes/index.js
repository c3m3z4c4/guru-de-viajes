const { Router } = require("express");
const { auth } = require("../utils");
const { filteredAirports } = require("../utils/countryFilter");

const router = Router();

router.get("/", async (req, res) => {
  let response = await auth().then((res) => {
    console.log(res);
    console.log(filteredAirports);
  });
  res.json({
    filteredAirports,
  });
  return res;
});

router.post("/form", async (req, res) => {
  let data = req.body;
  console.log(data);
  res.json(data);
  return res;
});

module.exports = router;
