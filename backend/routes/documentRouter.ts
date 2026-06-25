import { Router } from "express";

import {
  uploadDocument,
  getDocuments,
  updateDocument,
} from "../controllers/documentController";

import { protectedMiddleware } from "../middlewares/authMiddleware";

import { upload } from "../middlewares/uploadMiddleware";

const router = Router();

router.post(
  "/upload",
  protectedMiddleware,
  upload.single("document"),
 
  uploadDocument
);

router.get(
  "/",
  protectedMiddleware,
  getDocuments
);

router.put(
  "/:id",
  protectedMiddleware,
  updateDocument
);

export default router;