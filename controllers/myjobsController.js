const MyJobs = require("../models/freelancerModels/myJobsModel");

// Get all job records
exports.getAllJobRecords = async (req, res) => {
  try {
    const jobRecords = await MyJobs.find().populate(
      "freelancerId clientId jobId"
    );

    if (!jobRecords.length) {
      return res.status(404).json({ message: "No job records found" });
    }

    res.status(200).json({ jobRecords });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
