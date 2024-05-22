// routes/freelancerRoutes.js
const express = require("express");
const router = express.Router();
const freelancerController = require("../controllers/freelancerController");
const profileController = require("../controllers/profileController");
const feedbackRequestController = require("../controllers/feedbackrequestController");
const myJobsController = require("../controllers/myjobsController");
const proposalController = require("../controllers/proposalController");
// Freelancer login route
router.post("/signup", freelancerController.signUp);
router.post("/login", freelancerController.login);

//feedback request routes
router.post("/feedbackreq", feedbackRequestController.createFeedbackRequest);
router.get(
  "/user/:userId",
  feedbackRequestController.getFeedbackRequestsByUserId
);
router.put(
  "/update/:feedbackRequestId",
  feedbackRequestController.updateFeedbackRequestStatus
);
router.delete(
  "/delete/:feedbackRequestId",
  feedbackRequestController.deleteFeedbackRequest
);

router.post("/proposal", proposalController.createProposal);

// router.get("/:jobId", proposalController.getProposalsByJobId);
router.put("/update/:proposalId", proposalController.updateProposalById);
router.delete("/delete/:proposalId", proposalController.deleteProposalById);

router.get("/myjobs", myJobsController.getAllJobRecords);
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
