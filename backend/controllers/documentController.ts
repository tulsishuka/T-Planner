
import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import { TravelDocument } from "../models/documentModel";
import fs from "fs";
import { model } from "../config/gemini";
import { extractTextFromFile } from "../utils/extractText";

interface AuthRequest extends Request {
  user?: any;
}

export const uploadDocument = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const file = req.file;
    console.log("FILE RECEIVED:", file);

    if (!file) {
      res.status(400);
      throw new Error("Please upload a file");
    }

    let extractedText = "";

    // PDF
    if (file.mimetype === "application/pdf") {
      extractedText = await extractTextFromFile(
        file.path,
        file.mimetype
      );
    }


    let itinerary = "";

    // IMAGE
    if (
      file.mimetype.startsWith("image/")
    ) {
      const imageBase64 = fs
        .readFileSync(file.path)
        .toString("base64");

      const result =
        await model.generateContent([
          {
            inlineData: {
              data: imageBase64,
              mimeType: file.mimetype,
            },
          },

          `
          Analyze this travel document.

          Extract:
          - Flights
          - Hotels
          - Booking numbers
          - Dates
          - Locations

          Then generate a detailed travel itinerary.
          `,
        ]);

      itinerary =
        result.response.text();
    }

    // PDF
    else {
      const result =
        await model.generateContent(`
Generate a professional travel itinerary.

Trip Name:
${req.body.tripName}

Destination:
${req.body.destination}

Travel Style:
${req.body.travelStyle}

Start Date:
${req.body.startDate}

End Date:
${req.body.endDate}

Notes:
${req.body.notes}

Extracted Document Data:
${extractedText}
`);

      itinerary =
        result.response.text();
    }
console.log("EXTRACTED TEXT SENT TO GEMINI:");
console.log(extractedText);
    const document =
      await TravelDocument.create({
        userId: req.user._id,

        tripName: req.body.tripName,

        destination: req.body.destination,

        travelStyle: req.body.travelStyle,

        itinerary,

        startDate: req.body.startDate,

        endDate: req.body.endDate,

        notes: req.body.notes,

        fileName: file.filename,

        filePath: file.path,

        fileType: file.mimetype,
      });

    res.status(201).json({
      success: true,
      document,
    });
  }
);

export const getDocuments = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const docs = await TravelDocument.find({
      userId: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      docs,
    });
  }
);

export const updateDocument = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const doc = await TravelDocument.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user._id,
      },
      {
        tripName: req.body.tripName,
        destination: req.body.destination,
        travelStyle: req.body.travelStyle,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        notes: req.body.notes,
      },
      {
        new: true,
      }
    );

    if (!doc) {
      res.status(404);
      throw new Error("Document not found");
    }

    res.status(200).json({
      success: true,
      doc,
    });
  }
);

export const getDocumentById = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const doc = await TravelDocument.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!doc) {
      res.status(404);
      throw new Error("Document not found");
    }

    res.status(200).json({
      success: true,
      doc,
    });
  }
);

export const deleteDocument = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const doc = await TravelDocument.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!doc) {
      res.status(404);
      throw new Error("Document not found");
    }

    res.status(200).json({
      success: true,
      message: "Trip deleted successfully",
    });
  }
);