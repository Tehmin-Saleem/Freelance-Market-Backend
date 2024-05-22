// routes/clientRoutes.js

const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");
const postjobController = require("../controllers/postjobController");
const hireFreelancerController = require("../controllers/hirefreelancerController");
const reviewController = require("../controllers/reviewController");
// const authenticate = require("../middleware/authenticate");
router.post("/signup", clientController.signUp);
router.post("/login", clientController.login);
//routes for post a job
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
