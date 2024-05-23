const Proposal = require("../models/freelancerModels/proposalModel");

// Create a new proposal
exports.createProposal = async (req, res) => {
  const {
    freelancerId,
    clientId,
    jobId,
    coverLetter,
    attachment,
    portfolioLink,
    addRequirements,
  } = req.body;

  try {
    // Create the proposal
    const proposal = new Proposal({
      freelancerId,
      clientId,
      jobId,
      coverLetter,
      attachment,
      portfolioLink,
      addRequirements,
    });

    await proposal.save();
    res
      .status(201)
      .json({ message: "Proposal created successfully", proposal });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all proposals
exports.getAllProposals = async (req, res) => {
  try {
    const proposals = await Proposal.find().populate(
      "freelancerId",
      "firstName lastName countryName"
    );

    if (!proposals.length) {
      return res.status(404).json({ message: "No proposals found" });
    }

    res.status(200).json({ proposals });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get proposals by job ID
exports.getProposalsByJobId = async (req, res) => {
  const { jobId } = req.params;

  try {
    const proposals = await Proposal.find({ jobId }).populate(
      "freelancerId  jobId"
    );

    if (!proposals.length) {
      return res
        .status(404)
        .json({ message: "No proposals found for the given job ID" });
    }

    res.status(200).json({ proposals });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update proposal by ID
exports.updateProposalById = async (req, res) => {
  const { proposalId } = req.params;
  const { coverLetter, attachment, portfolioLink, addRequirements } = req.body;

  try {
    const proposal = await Proposal.findById(proposalId);

    if (!proposal) {
      return res.status(404).json({ message: "Proposal not found" });
    }

    proposal.coverLetter = coverLetter;
    proposal.attachment = attachment;
    proposal.portfolioLink = portfolioLink;
    proposal.addRequirements = addRequirements;

    await proposal.save();

    res
      .status(200)
      .json({ message: "Proposal updated successfully", proposal });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete proposal by ID
exports.deleteProposalById = async (req, res) => {
  const { proposalId } = req.params;

  try {
    const proposal = await Proposal.findById(proposalId);

    if (!proposal) {
      return res.status(404).json({ message: "Proposal not found" });
    }

    await proposal.remove();
    res.status(200).json({ message: "Proposal deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
