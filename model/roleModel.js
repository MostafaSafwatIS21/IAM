import mongoose from "mongoose";
import permissionSchema from "./schemas/permission.js";
const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Role name is required"],
    unique: [true, "Role name must be unique"],
  },
  permissions: [permissionSchema],
});
export default mongoose.model("Role", roleSchema);
