const mongoose = require("mongoose");

// Main schema for hiring a freelancer
const postjobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  budget: {
    budgetType: {
      type: String,
      enum: ["Hourly rate", "Fixed price"],
      required: true,
    },
    budgetRange: {
      from: {
        type: Number,
      },
      to: {
        type: Number,
      },
      fixed: {
        type: Number,
      },
    },
  },
  projectDuration: {
    projectSize: {
      type: String,
      enum: ["medium", "large", "small"],
      required: true,
    },
    durationOfWork: {
      type: String,
      enum: ["3 to 6 months", "1 to 3 months", "less than one month"],
      required: true,
    },
    levelOfExperience: {
      type: String,
      enum: ["entry", "intermediate", "expert"],
      required: true,
    },
  },
  attachment: {
    file: {
      type: String,
    },
    status: {
      type: String,
      enum: ["public", "private"],
    },
    detailedDescription: {
      type: String,
    },
  },

  jobCategory: {
    availability: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now, // Set the default value to the current timestamp
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("PostJob", postjobSchema);
