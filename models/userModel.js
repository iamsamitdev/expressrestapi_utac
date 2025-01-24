import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  tel: { type: String, required: true }
}, {
  timestamps: true,
  versionKey: false
})

export default mongoose.model("User", userSchema)