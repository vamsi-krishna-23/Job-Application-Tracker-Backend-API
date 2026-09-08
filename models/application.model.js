import mongoose from "mongoose"


const applicationSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      trim: true,
    },

    jobType: {
      type: String,
      enum: ["Full Time", "Part Time", "Internship", "Contract", "Freelance"],
    },

    jobUrl: {
      type: String,
      trim: true,
    },

    appliedDate: {
      type: Date,
      required: true,
    },

    salary: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: [
        "Saved",
        "Applied",
        "Screening",
        "Interview",
        "Offer",
        "Rejected",
        "Withdrawn",
      ],
      default: "Saved",
    },

    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", applicationSchema);

export {Application}