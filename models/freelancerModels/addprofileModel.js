const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  //user profile title
  title: {
    type: String,
    required: true,
  },

  profileImage: {
    type: String,
  },
  experience: {
    type: String,
    required: true,
  },
  hourlyRate: {
    type: Number,
    required: true,
  },
  profileDescription: {
    type: String,
  },
  qualification: {
    type: String,
  },
  skills: {
    type: [String],
  },
  portfolio: {
    projectTitle: {
      type: String,
    },
    toolUsed: {
      type: String,
    },
    category: {
      type: String,
    },
    attachment: {
      type: String,
    },
    url: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Profile", profileSchema);
