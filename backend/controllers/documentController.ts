import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import { TravelDocument } from "../models/documentModel";

interface AuthRequest extends Request {
  user?: any;
}

export const uploadDocument = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const file = req.file;

    if (!file) {
      res.status(400);
      throw new Error("Please upload a file");
    }

    const document =

await TravelDocument.create({
  userId: req.user._id,

  tripName: req.body.tripName,

  destination: req.body.destination,

  travelStyle: req.body.travelStyle,

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
    const docs =
      await TravelDocument.find({
        userId: req.user._id,
      });

    res.status(200).json({
      success: true,
      docs,
    });
  }
);

export const updateDocument = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const doc =
      await TravelDocument.findOneAndUpdate(
        {
          _id: req.params.id,
          userId: req.user._id,
        },
        {
          tripName: req.body.tripName,
          destination: req.body.destination,
        },
        { new: true }
      );

    res.status(200).json({
      success: true,
      doc,
    });
  }
);