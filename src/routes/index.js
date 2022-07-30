const { Router } = require("express");
const { auth } = require("../utils");

const router = Router();

router.get("/", async (req, res) => {
  let response = await auth().then((res) => {
    console.log(res);
  });
  res.json({
    response,
  });
});

module.exports = router;
