const Deal = require("../models/Deal");

/**
 * Get all deals
 */
const getDeals = async (req, res) => {
  try {
    const deals = await Deal.find();
    res.status(200).json(deals);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch deals" });
  }
};

/**
 * Get single deal by ID
 */
const getDealById = async (req, res) => {
  try {
    const deal = await Deal.findById(req.params.id);

    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    res.status(200).json(deal);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch deal" });
  }
};

module.exports = { getDeals, getDealById };