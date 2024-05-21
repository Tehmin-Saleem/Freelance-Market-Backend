const Profile = require("../models/freelancerModels/addprofileModel");

// Create a new profile
exports.createProfile = async (req, res) => {
  const {
    firstName,
    lastName,
    title,
    profileImage,
    experience,
    hourlyRate,
    profileDescription,
    skills,
    portfolio,
  } = req.body;

  try {
    const profile = new Profile({
      firstName,
      lastName,
      title,
      profileImage,
      experience,
      hourlyRate,
      profileDescription,
      skills,
      portfolio,
    });

    await profile.save();
    res.status(201).json({ message: "Profile created successfully", profile });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all profiles
exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get profile by ID
exports.getProfileById = async (req, res) => {
  const { id } = req.params;

  try {
    const profile = await Profile.findById(id);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update profile by ID
exports.updateProfileById = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const profile = await Profile.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json({ message: "Profile updated successfully", profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete profile by ID
exports.deleteProfileById = async (req, res) => {
  const { id } = req.params;

  try {
    const profile = await Profile.findByIdAndDelete(id);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
