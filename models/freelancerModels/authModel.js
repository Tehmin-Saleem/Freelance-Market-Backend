const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
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
  countryName: {
    type: [String], // Array of strings to hold multiple countries
    required: true,
  },

});



const loginSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
  },
 
  password: {
    type: String,
    required: true,
  },
 
});
module.exports = {
Freelancerlogin:mongoose.model("Freelancerlogin", loginSchema),
Freelancersignup:mongoose.model("Freelancersignup", signupSchema),
}