const express = require("express");
const router = express.Router();

const Claim = require("../models/Claim");
const Deal = require("../models/Deal");
const auth = require("../middlewares/auth.middleware");

/**
 * @route   POST /api/claims/:dealId
 * @desc    Claim a deal
 * @access  Private
 */
router.post("/:dealId", auth, async (req, res) => {
  try {
    const { dealId } = req.params;

    // Check deal exists
    const deal = await Deal.findById(dealId);
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    // Prevent duplicate claim
    const existingClaim = await Claim.findOne({
      user: req.user._id,
      deal: dealId,
    });

    if (existingClaim) {
      return res.status(400).json({ message: "Deal already claimed" });
    }

    // Create claim
    const claim = await Claim.create({
      user: req.user._id,
      deal: dealId,
      status: "pending",
    });

    res.status(201).json(claim);
  } catch (error) {
    console.error("Claim error:", error);
    res.status(500).json({ message: "Failed to claim deal" });
  }
});

/**
 * @route   GET /api/claims/my
 * @desc    Get logged-in user's claims
 * @access  Private
 */
router.get("/my", auth, async (req, res) => {
  try {
    const claims = await Claim.find({ user: req.user._id })
      .populate("deal"); // 🔥 THIS IS THE KEY LINE

    res.json(claims);
  } catch (error) {
    console.error("Fetch claims error:", error);
    res.status(500).json({ message: "Failed to fetch claims" });
  }
});

module.exports = router;