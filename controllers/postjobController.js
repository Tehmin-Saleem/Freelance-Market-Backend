const PostJob = require("../models/clientModels/postjobModel");
const mongoose = require("mongoose");

// Create a new job post
exports.createJobPost = async (req, res) => {
  const {
    jobTitle,
    description,
    skills,
    budget,
    projectDuration,
    attachment,
    jobCategory,
    clientId,
  } = req.body;

  try {
    // Create a new job post
    const newJobPost = new PostJob({
      jobTitle,
      description,
      skills,
      budget,
      projectDuration,
      attachment,
      jobCategory,
      clientId,
    });

    await newJobPost.save();
    res
      .status(201)
      .json({ message: "Job post created successfully", newJobPost });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all job posts
exports.getAllJobPosts = async (req, res) => {
  try {
    const jobPosts = await PostJob.find().populate(
      "clientId",
      "firstName lastName email"
    );
    res.status(200).json(jobPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single job post by ID
exports.getJobPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const jobPost = await PostJob.findById(id).populate(
      "clientId",
      "firstName lastName email"
    );

    if (!jobPost) {
      return res.status(404).json({ message: "Job post not found" });
    }

    res.status(200).json(jobPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a job post
exports.updateJobPost = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const jobPost = await PostJob.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!jobPost) {
      return res.status(404).json({ message: "Job post not found" });
    }

    res.status(200).json({ message: "Job post updated successfully", jobPost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a job post
exports.deleteJobPost = async (req, res) => {
  const { id } = req.params;

  try {
    const jobPost = await PostJob.findByIdAndDelete(id);

    if (!jobPost) {
      return res.status(404).json({ message: "Job post not found" });
    }

    res.status(200).json({ message: "Job post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
