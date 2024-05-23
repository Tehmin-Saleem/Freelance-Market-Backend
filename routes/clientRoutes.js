// routes/clientRoutes.js

const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");
const postjobController = require("../controllers/postjobController");
const hireFreelancerController = require("../controllers/hirefreelancerController");
const reviewController = require("../controllers/reviewController");
const authMiddleware = require("../middleware/auth");
const roleCheck = require("../middleware/roleCheck");

// const authenticate = require("../middleware/authenticate");
router.post("/signup", clientController.signUp);
router.post("/login", clientController.login);
// , roleCheck("client")
router.use(authMiddleware());
//routes for post a job
const notificationController = require("../controllers/notificationsController");

// Route to get all notifications for the logged-in user
router.get("/notifications", notificationController.getNotifications);

// Route to mark a notification as read by its ID
router.put("/notifications/:id/mark-read", notificationController.markAsRead);
router.post("/postjob", postjobController.createJobPost);
router.get("/postjob", postjobController.getAllJobPosts);
router.get("/postjob/:id", postjobController.getJobPostById);
router.put("/postjob/:id", postjobController.updateJobPost);
router.delete("/postjob/:id", postjobController.deleteJobPost);
const proposalController = require("../controllers/proposalController");
//routes for hire a freelancer

// Create a new hiring record
router.post("/hire", hireFreelancerController.createHiringRecord);
router.get("/proposal", proposalController.getAllProposals);
// // Get all hiring records
// router.get("/hire", hireFreelancerController.getAllHiringRecords);

// // Get hiring record by ID
// router.get("/hire/:id", hireFreelancerController.getHiringRecordById);

// // Delete hiring record by ID
// router.delete("/hire/:id", hireFreelancerController.deleteHiringRecordById);

//routes for giving review to freelancer
router.post("/review", reviewController.createRating);
module.exports = router;
