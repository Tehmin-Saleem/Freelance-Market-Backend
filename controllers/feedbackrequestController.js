const FeedbackRequest = require("../models/freelancerModels/feedbackrequestModel");
const User = require("../models/UserModel");
const PostJob = require("../models/clientModels/postjobModel");

// Create a new feedback request
exports.createFeedbackRequest = async (req, res) => {
  const { freelancerId, clientId, jobId, status } = req.body;

  try {
    // Validate the user IDs and job ID
    const freelancer = await User.findById(freelancerId);
    const client = await User.findById(clientId);
    const job = await PostJob.findById(jobId);

    if (!freelancer || !client || !job) {
      return res
        .status(400)
        .json({ message: "Invalid freelancer, client, or job ID" });
    }

    // Create the feedback request
    const feedbackRequest = new FeedbackRequest({
      freelancerId,
      clientId,
      jobId,
      status,
    });

    await feedbackRequest.save();
    res.status(201).json({
      message: "Feedback request created successfully",
      feedbackRequest,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get feedback requests by user ID (either freelancer or client)
exports.getFeedbackRequestsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const feedbackRequests = await FeedbackRequest.find({
      $or: [{ freelancerId: userId }, { clientId: userId }],
    }).populate("freelancerId clientId jobId");

    if (!feedbackRequests.length) {
      return res
        .status(404)
        .json({ message: "No feedback requests found for the given user ID" });
    }

    res.status(200).json({ feedbackRequests });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update feedback request status
exports.updateFeedbackRequestStatus = async (req, res) => {
  const { feedbackRequestId } = req.params;
  const { status } = req.body;

  try {
    const feedbackRequest = await FeedbackRequest.findById(feedbackRequestId);

    if (!feedbackRequest) {
      return res.status(404).json({ message: "Feedback request not found" });
    }

    feedbackRequest.status = status;
    await feedbackRequest.save();

    res.status(200).json({
      message: "Feedback request status updated successfully",
      feedbackRequest,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete feedback request
exports.deleteFeedbackRequest = async (req, res) => {
  const { feedbackRequestId } = req.params;

  try {
    const feedbackRequest = await FeedbackRequest.findById(feedbackRequestId);

    if (!feedbackRequest) {
      return res.status(404).json({ message: "Feedback request not found" });
    }

    await feedbackRequest.remove();
    res.status(200).json({ message: "Feedback request deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
