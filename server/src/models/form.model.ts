import mongoose from "mongoose";

const formModel = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String },
  fields: {
    label: { type: String, required: true },
    type: {
      type: String,
      enum: ["text", "textarea", "checkbox", "radio", "select"],
      required: true,
    },
    options: {
      type: String,
    },
  },
});

export default mongoose.model("forms", formModel);
