// routes/freelancerRoutes.js
const express = require("express");
const router = express.Router();
const freelancerController = require("../controllers/freelancerController");
const profileController = require("../controllers/profileController");
// Freelancer login route
router.post("/signup", freelancerController.signUp);
router.post("/login", freelancerController.login);

// Create a new profile
router.post("/profile", profileController.createProfile);

// Get all profiles
router.get("/profile", profileController.getAllProfiles);

// Get profile by ID
router.get("/profile/:id", profileController.getProfileById);

// Update profile by ID
router.put("/profile/:id", profileController.updateProfileById);

// Delete profile by ID
router.delete("/profile/:id", profileController.deleteProfileById);

module.exports = router;
