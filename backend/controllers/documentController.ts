
import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import { TravelDocument } from "../models/documentModel";
import fs from "fs";
import { model } from "../config/gemini";
import { extractTextFromFile } from "../utils/extractText";

import { v4 as uuidv4 } from "uuid";

interface AuthRequest extends Request {
  user?: any;
}
export const uploadDocument = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const files = req.files as Express.Multer.File[];

    if (!files || files.length === 0) {
      res.status(400);
      throw new Error("Please upload files");
    }

    const shareId = uuidv4();
    const fileResults = [];

    for (const file of files) {
      let rawResponse = "";
      let extractedData: any = {};

      try {
        // IMAGE
        if (file.mimetype.startsWith("image/")) {
          const base64 = fs.readFileSync(file.path).toString("base64");

          const result = await model.generateContent([
            {
              inlineData: {
                data: base64,
                mimeType: file.mimetype,
              },
            },
            `Return ONLY JSON with flight details`,
          ]);

          rawResponse = result.response.text();
        }

        // PDF
        else if (file.mimetype === "application/pdf") {
          const text = await extractTextFromFile(file.path, file.mimetype);

          const result = await model.generateContent(`
Extract JSON from:
${text}
Return ONLY JSON
          `);

          rawResponse = result.response.text();
        }

        // SAFE JSON PARSE
        const match = rawResponse.match(/\{[\s\S]*\}/);

        if (match) {
          try {
            extractedData = JSON.parse(match[0]);
          } catch {
            extractedData = {};
          }
        }

        fileResults.push({
          fileName: file.filename,
          filePath: file.path,
          fileType: file.mimetype,
          extractedData,
        });
      } catch (err) {
        console.log("FILE PROCESS ERROR:", err);

        fileResults.push({
          fileName: file.filename,
          filePath: file.path,
          fileType: file.mimetype,
          extractedData: {},
        });
      }
    }

    const document = await TravelDocument.create({
      userId: req.user._id,
      shareId,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      notes: req.body.notes,
      files: fileResults,
    });

    return res.status(201).json({
      success: true,
      document,
    });
  }
);



// export const getDocuments = asyncHandler(
//   async (req: AuthRequest, res: Response) => {
//     const docs = await TravelDocument.find({
//       userId: req.user._id,
//     }).sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       docs,
//     });
//   }
// );


export const getDocuments = asyncHandler(
  async (req: AuthRequest, res: Response) => {
    const docs = await TravelDocument.find({
      userId: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      user: {
        name: req.user.name,
        email: req.user.email,
      },
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


////////////////
export const getSharedTrip = asyncHandler(
  async (req: Request, res: Response) => {
    const trip = await TravelDocument.findOne({
      shareId: req.params.shareId,
    });

    if (!trip) {
      res.status(404);
      throw new Error("Trip not found");
    }

    res.status(200).json({
      success: true,
      trip,
    });
  }
)