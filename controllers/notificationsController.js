// Import Notification model
const Notification = require("../models/sharedModels/notificationsModel");

// Controller to get all notifications for a specific user (either client or freelancer)
// controllers/notificationsController.js

// Controller to get all notifications for a specific user
exports.getNotifications = async (req, res) => {
  const userId = req.user._id; // User ID extracted from authentication middleware

  try {
    // Find all notifications for the user
    const notifications = await Notification.find({
      $or: [{ clientId: userId }, { freelancerId: userId }],
    }).sort({ createdAt: -1 });

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to mark a notification as read
exports.markAsRead = async (req, res) => {
  const notificationId = req.params.id; // Assuming the notification ID is passed in the request parameters

  try {
    // Find the notification by ID and update the 'read' field to true
    const notification = await Notification.findByIdAndUpdate(
      notificationId,
      { read: true },
      { new: true }
    );

    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }

    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
