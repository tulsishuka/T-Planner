// import mongoose from "mongoose";

// const documentSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

  
// shareId: {
//   type: String,
//   unique: true,
// },
   

//     itinerary: {
//   type: String,
// },
// extractedData: {
//   type: Object,
// },
//     startDate: Date,

//     endDate: Date,

  

//     notes: String,

//     fileName: String,

//     filePath: String,

//     fileType: String,
//   },
//   {
//     timestamps: true,
//   }
// );

// export const TravelDocument = mongoose.model(
//   "TravelDocument",
//   documentSchema
// );


import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    shareId: {
      type: String,
      unique: true,
    },

    startDate: Date,
    endDate: Date,
    notes: String,

    files: [
      {
        fileName: String,
        filePath: String,
        fileType: String,
        extractedData: Object,
      },
    ],
  },
  { timestamps: true }
);
export const TravelDocument = mongoose.model(
  "TravelDocument",
  documentSchema
);