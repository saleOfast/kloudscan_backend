const express = require("express");
const router = express.Router();
const { verifyEmiratesId, saveEmiratesId } = require("./controller");
const multer = require("multer");
const path = require("path");

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "_" + uniqueSuffix);
  },
});
const upload = multer({ storage });

// Upload front & back for scanning and verification
router.post(
  "/scan",
  upload.fields([
    { name: "Front_EmiratesID1", maxCount: 1 },
    { name: "Back_EmiratesID2", maxCount: 1 },
  ]),
  verifyEmiratesId
);

// Verify Emirates ID (OCR only)
router.post(
  "/verify-emirates",
  upload.fields([
    { name: "Front_EmiratesID1", maxCount: 1 },
    { name: "Back_EmiratesID2", maxCount: 1 },
  ]),
  verifyEmiratesId
);

// Save Emirates ID data to database
router.post(
  "/save-emirates",
  upload.fields([
    { name: "Front_EmiratesID1", maxCount: 1 },
    { name: "Back_EmiratesID2", maxCount: 1 },
  ]),
  saveEmiratesId
);

module.exports = router;
