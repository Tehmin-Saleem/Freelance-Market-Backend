const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Additional fields specific to clients or freelancers
  countryName: {
    type: [String], // Array of strings to hold multiple countries
   
  },
  // Other user properties
  role: {
    type: String,
    enum: ['client', 'freelancer'],
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
