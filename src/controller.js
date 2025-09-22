const { EmiratesID } = require("../models")
const fs = require("fs");
const path = require("path");
const axios = require("axios");


// helper: convert file to base64 string
const toBase64 = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  return `data:image/png;base64,${fileData.toString("base64")}`;
};

exports.verifyEmiratesId = async (req, res) => {
  try {
    const { Front_EmiratesID1, Back_EmiratesID2 } = req.files;

    if (!Front_EmiratesID1 || !Back_EmiratesID2) {
      return res.status(400).json({ message: "Both front and back documents are required" });
    }

    // save with unique names
    const frontFileName = `Front_EmiratesID1_${Date.now()}.png`;
    const backFileName = `Back_EmiratesID2_${Date.now()}.png`;

    const frontPath = path.join("uploads", frontFileName);
    const backPath = path.join("uploads", backFileName);

    fs.renameSync(Front_EmiratesID1[0].path, frontPath);
    fs.renameSync(Back_EmiratesID2[0].path, backPath);

    // convert to base64
    const frontBase64 = toBase64(frontPath);
    const backBase64 = toBase64(backPath);

    // call Pixl.AI front endpoint
    const frontResp = await axios.post(
      `${process.env.PIXLAI_BASE_URL}${process.env.PIXLAI_FRONT_ENDPOINT}`,
      { recordId: "1", image: frontBase64 },
      { headers: { "Content-Type": "application/json", key: process.env.PIXLAI_API_KEY } }
    );

    // call Pixl.AI back endpoint
    const backResp = await axios.post(
      `${process.env.PIXLAI_BASE_URL}${process.env.PIXLAI_BACK_ENDPOINT}`,
      { recordId: "1", image: backBase64 },
      { headers: { "Content-Type": "application/json", key: process.env.PIXLAI_API_KEY } }
    );

    // build URLs
    const frontUrl = `${process.env.BASE_URL}/uploads/${frontFileName}`;
    const backUrl = `${process.env.BASE_URL}/uploads/${backFileName}`;

    res.json({
      message: "Verification successful",
      data: {
        front_result: frontResp.data,
        back_result: backResp.data,
        Front_EmiratesID1: frontUrl,
        Back_EmiratesID2: backUrl,
      },
    });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ message: err.message, details: err.response?.data });
  }
};




exports.saveEmiratesId = async (req, res) => {
  try {
    const { ID_number, name, sex, dob, nationality, expiry_date, Front_EmiratesID1, Back_EmiratesID2 } = req.body;

    // Map sex to gender field for database
    const gender = sex ? sex.charAt(0).toUpperCase() + sex.slice(1).toLowerCase() : null;

    if (!ID_number || !name || !dob || !Front_EmiratesID1 || !Back_EmiratesID2) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const record = await EmiratesID.create({
      ID_number,
      name,
      gender,
      dob,
      nationality,
      expiry_date,
      Front_EmiratesID1,
      Back_EmiratesID2,
    });

    res.json({ message: "Data saved successfully", record });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
