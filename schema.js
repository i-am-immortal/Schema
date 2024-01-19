import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unnique: true,
    lowercase: true,
  },
  email: {
    type: String,
    unnique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    lowercase: true,
    required: [true, "Password is required"],
  },
  phoneNo:{
    type:Number,
    required:true
  }
});
export const User = mongoose.model("User", userSchema);
