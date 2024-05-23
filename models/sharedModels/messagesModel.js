const messageSchema = new mongoose.Schema({
  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chat", // Reference to the Chat model
    required: true,
  },
  attachment: {
    type: String,
  },
  sendBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  sendTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
});

module.exports = mongoose.model("Messages", messageSchema);
