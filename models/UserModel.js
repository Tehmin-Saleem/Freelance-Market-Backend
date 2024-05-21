const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  // Additional fields specific to  freelancers
  countryName: {
    type: [String], // Array of strings to hold multiple countries
  },
  // Other user properties
  role: {
    type: String,
    enum: ["client", "freelancer"],
  },
});

module.exports = mongoose.model("User", userSchema);
