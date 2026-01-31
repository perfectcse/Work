const Claim = require("../models/Claim");
const Deal = require("../models/Deal");

exports.claimDeal = async (req, res) => {
  try {
    const userId = req.user.id;
    const dealId = req.params.dealId;

    const deal = await Deal.findById(dealId);
    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    if (deal.isLocked) {
      return res.status(403).json({ message: "Deal is locked" });
    }

    const existing = await Claim.findOne({
      user: userId,
      dealId,
    });

    if (existing) {
      return res.status(400).json({ message: "Already claimed" });
    }

    const claim = await Claim.create({
      user: userId,
      dealId,
      status: "pending",
    });

    res.status(201).json(claim);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Claim failed" });
  }
};

exports.myClaims = async (req, res) => {
  const claims = await Claim.find({ user: req.user.id }).populate(
    "dealId",
    "title partner"
  );

  res.json(claims);
};