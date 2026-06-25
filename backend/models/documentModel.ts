

import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    tripName: {
      type: String,
      required: true,
    },

    destination: {
      type: String,
      required: true,
    },

    travelStyle: {
      type: String,
      default: "Adventure",
    },

    startDate: Date,

    endDate: Date,

  

    notes: String,

    fileName: String,

    filePath: String,

    fileType: String,
  },
  {
    timestamps: true,
  }
);

export const TravelDocument = mongoose.model(
  "TravelDocument",
  documentSchema
);