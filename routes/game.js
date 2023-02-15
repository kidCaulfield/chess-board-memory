const express = require("express");
const router = express.Router();
const gameControler = require("../controllers/game");

router.get("", gameControler.get);
router.get("/start", gameControler.start);
router.post("/end", gameControler.end);

module.exports = router;
