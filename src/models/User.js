import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userScheme = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  locaton: String,
});

userScheme.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userScheme);
export default User;
