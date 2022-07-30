const { Router } = require("express");
const { auth } = require('../utils');

const router = Router();

router.get("/", (req, res) => {
  auth().then((res) => {
    console.log(res);
  })
  res.json({
    status: 200,
  });
});

module.exports = router;

