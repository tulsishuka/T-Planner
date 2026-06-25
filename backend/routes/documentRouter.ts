import { Router } from "express";

import {
  uploadDocument,
  getDocuments,
  updateDocument,
  deleteDocument,
  getDocumentById,
  getSharedTrip,
} from "../controllers/documentController";

import { protectedMiddleware } from "../middlewares/authMiddleware";

import { upload } from "../middlewares/uploadMiddleware";

const router = Router();

router.post(
  "/upload",
  protectedMiddleware,
  upload.array("document", 20), // up to 20 files
  uploadDocument
);
// router.post(
//   "/upload",
//   protectedMiddleware,
//   upload.array("document"), // ✅ FIX HERE
//   uploadDocument
// );

router.get("/", protectedMiddleware, getDocuments);

router.get("/:id", protectedMiddleware, getDocumentById);

router.put("/:id", protectedMiddleware, updateDocument);

router.delete("/:id", protectedMiddleware, deleteDocument);
router.get(
  "/share/:shareId",
  getSharedTrip
);

export default router;