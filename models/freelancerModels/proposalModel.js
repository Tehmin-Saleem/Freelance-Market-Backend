const mongoose = require("mongoose");

const proposalSchema = mongoose.Schema({
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PostJob",
    required: true,
  },
  coverLetter: {
    type: String,
  },
  attachment: {
    type: String,
  },
  portfolioLink: {
    type: String,
  },
  addRequirements: {
    bymilestones: [
      {
        milestoneNumber: {
          type: Number,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        dueDate: {
          type: Date,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
      },
    ],
    byProposal: {
      bidAmount: {
        type: Number,
      },
      bidDueDate: {
        type: Date,
      },
    },
  },
});

module.exports = mongoose.model("Proposal", proposalSchema);
