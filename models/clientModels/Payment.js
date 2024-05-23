const mongoose = require("mongoose");

// Define the payment method schema
const paymentSchema = new mongoose.Schema({
  paymentType: {
    type: String,
    enum: ["Credit/Debit card", "PayPal"],
    required: true,
  },
  cardNumber: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{4} \d{4} \d{4} \d{4}/.test(v); // Basic regex for card number format validation
      },
      message: (props) => `${props.value} is not a valid card number format!`,
      required: function () {
        return this.paymentType === "Credit/Debit card";
      },
    },
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  securityCode: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{4}/.test(v); // Basic regex for security code format validation
      },
      message: (props) => `${props.value} is not a valid security code format!`,
      required: function () {
        return this.paymentType === "Credit/Debit card";
      },
    },
  },
  billingAddress: {
    type: String,
    required: true,
  },
  addressLine: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
  },
  paypalDetails: {
    type: String,
    required: function () {
      return this.paymentType === "PayPal";
    },
  },
});

module.exports = mongoose.model("PaymentMethod", paymentSchema);
