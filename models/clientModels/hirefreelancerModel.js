const mongoose = require("mongoose");

//  budget schema as a nested schema
const budgetSchema = new mongoose.Schema({
    userType: {
      type: String,
      enum: ['Client', 'Freelancer'],
      required: true
    },
    rateType: {
      type: String,
      enum: ['Hourly rate', 'Fixed price'],
      required: true
    },
    budgetRange: {
      from: {
        type: Number,
        required: function() {
          return this.userType === 'Client' && this.rateType === 'Hourly rate';
        }
      },
      to: {
        type: Number,
        required: function() {
          return this.userType === 'Client' && this.rateType === 'Hourly rate';
        }
      },
      fixed: {
        type: Number,
        required: function() {
          return this.userType === 'Freelancer' && this.rateType === 'Fixed price';
        }
      }
    }
  });
  const projectDurationSchema = new mongoose.Schema({
    projectSize: {
      type: String,
      enum: ['medium', 'large', 'small'],
      required: true
    },
    durationOfWork: {
      type: String,
      enum: ['3 to 6 months', '1 to 3 months', 'less than one month'],
      required: true
    },
    levelOfExperience: {
      type: String,
      enum: ['entry', 'intermediate', 'expert'],
      required: true
    }
  });
  
// main schema for hiring a freelancer
const hireFreelancerSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  budget: {
    type: budgetSchema,
    required: true
  },
  projectDuration: {
    type: projectDurationSchema,
    required: true
  },
  attachment:{
    file:{
        type: String,
        
    },
    description:{
    type: String,

    }
  }
});

module.exports = mongoose.model('HireFreelancer', hireFreelancerSchema);
