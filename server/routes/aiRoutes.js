const express = require("express");

const router = express.Router();

router.post("/suggest", async (req, res) => {

  const { code } = req.body;

  // Future AI Logic

  res.json({
    suggestion: "Try using map() instead of loop",
  });
});

module.exports = router;