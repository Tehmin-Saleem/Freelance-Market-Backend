// const mongoose = require("mongoose");

// // Define the credit/debit card schema
// const cardSchema = new mongoose.Schema({
//   cardNumber: {
//     type: String,
//     required: true,
//     validate: {
//       validator: function(v) {
//         return /\d{4} \d{4} \d{4} \d{4}/.test(v); // Basic regex for card number format validation
//       },
//       message: props => `${props.value} is not a valid card number format!`
//     }
//   },
//   firstName: {
//     type: String,
//     required: true
//   },
//   lastName: {
//     type: String,
//     required: true
//   },
//   securityCode: {
//     type: String,
//     required: true,
//     validate: {
//       validator: function(v) {
//         return /\d{4}/.test(v); // Basic regex for security code format validation
//       },
//       message: props => `${props.value} is not a valid security code format!`
//     }
//   },
//   billingAddress: {
//     type: String,
//     required: true
//   },
//   addressLine: {
//     type: String,
//     required: true
//   },
//   city: {
//     type: String,
//     required: true
//   },
//   postalCode: {
//     type: String
//   }
// });

// // Define the main payment method schema
// const paymentSchema = new mongoose.Schema({
//   paymentType: {
//     type: String,
//     enum: ['Credit/Debit card', 'PayPal'],
//     required: true
//   },
//   cardDetails: {
//     type: cardSchema,
//     required: function() {
//       return this.paymentType === 'Credit/Debit card';
//     }
//   },
//   paypalDetails: {
//     type: String,
//     required: function() {
//       return this.paymentType === 'PayPal';
//     }
//   }
// });

// module.exports = mongoose.model('PaymentMethod', paymentSchema);
