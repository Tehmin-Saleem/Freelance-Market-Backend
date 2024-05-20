const chatSchema = new mongoose.Schema({
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
    freelancerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
      required: true,
    },
  });
  
  module.exports = mongoose.model("Chat", chatSchema);