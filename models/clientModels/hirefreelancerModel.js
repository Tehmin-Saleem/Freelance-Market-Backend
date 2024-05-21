const mongoose = require("mongoose");
const hireFreelancer = mongoose.Schema({
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    // required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    // required: true,
  },
  //detailed description ref for hire freelancer
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PostJob", // Reference to the User model
    // required: true,
  },
});
module.exports = mongoose.model("HireFreelancer", hireFreelancer);
