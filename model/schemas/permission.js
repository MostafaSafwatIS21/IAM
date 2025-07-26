import mongoose from "mongoose";
import systemPages from "../../enums/systemRole.js";
export default new mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
      enum: {
        values: Object.values(systemPages),
        message: `Model must be one of the following: ${Object.values(
          systemPages
        ).join(", ")}`,
      },
    },
    viewing: { type: Boolean, default: false },
    editing: { type: Boolean, default: false },
    deleting: { type: Boolean, default: false },
    creating: { type: Boolean, default: false },
  },
  { _id: false, timestamps: false }
);
