const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName:{
    type:String,
    required:true,
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
  // Other user properties
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
  // Other user properties
});
module.exports = {
Clientlogin:mongoose.model("Clientlogin", loginSchema),
Clientsignup:mongoose.model("Clientsignup", signupSchema),
}