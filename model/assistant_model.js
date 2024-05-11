import { Schema, model } from "mongoose";

const assistantSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
      minLength: [3, "Name must be at least 5 characters"],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      unique: true,
      match: [/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email format"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile is required"],
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    department: {
      type: String,
      required: [true, "Department is required"],
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

const Assistant = model("Assistant", assistantSchema);
export default Assistant;
