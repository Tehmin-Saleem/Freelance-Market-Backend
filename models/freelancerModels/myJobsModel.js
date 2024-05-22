const mongoose = require("mongoose");
const MyJobsSchema = mongoose.Schema({
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PostJob", // Reference to the User model
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "pending", "completed"],
  },
});
module.exports = mongoose.model("MyJobs", MyJobsSchema);
