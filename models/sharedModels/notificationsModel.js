// Import mongoose
const mongoose = require("mongoose");

// Define Notification Schema
const notificationSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  read: {
    type: Boolean,
    default: false,
  },
});

// Create Notification model
const Notification = mongoose.model("Notification", notificationSchema);

// Export the model
module.exports = Notification;
