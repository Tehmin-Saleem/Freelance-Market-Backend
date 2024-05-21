const Rating = require("../models/clientModels/reviewModel");

// Create a new rating
exports.createRating = async (req, res) => {
  const { description, freelancerId, clientId, stars } = req.body;

  try {
    const rating = new Rating({
      description,
      freelancerId,
      clientId,
      stars,
    });

    await rating.save();
    res.status(201).json({ message: "Rating created successfully", rating });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all ratings
exports.getAllRatings = async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get rating by ID
exports.getRatingById = async (req, res) => {
  const { id } = req.params;

  try {
    const rating = await Rating.findById(id);
    if (!rating) {
      return res.status(404).json({ message: "Rating not found" });
    }
    res.status(200).json(rating);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete rating by ID
exports.deleteRatingById = async (req, res) => {
  const { id } = req.params;

  try {
    const rating = await Rating.findByIdAndDelete(id);
    if (!rating) {
      return res.status(404).json({ message: "Rating not found" });
    }
    res.status(200).json({ message: "Rating deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
