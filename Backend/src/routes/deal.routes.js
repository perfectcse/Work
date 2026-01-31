const express = require("express");
const router = express.Router();
const { getDeals, getDealById } = require("../controllers/deal.controller");

router.get("/", getDeals);
router.get("/:id", getDealById);

module.exports = router;