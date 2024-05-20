const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

  profileImage: {
    type: String,
    required: true,
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
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  portfolio: {
    projectTitle: {
      type: String,
      required: true,
    },
    toolUsed: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    attachment: {
      type: String,
    },
    url: {
      type: String,
    },
    
  },
});

module.exports = mongoose.model('Profile', profileSchema);
