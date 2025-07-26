import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    type: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    roles: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    lastLogin: {
      type: Date,
    },
    profilePicture: String,
    provider: {
      type: String,
      enum: ["google"],
    },
  },

  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};
export default mongoose.model("User", userSchema);
