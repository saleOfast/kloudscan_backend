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
    const { 
      front_result, 
      back_result, 
      Front_EmiratesID1, 
      Back_EmiratesID2 
    } = req.body;

    if (!front_result || !back_result || !Front_EmiratesID1 || !Back_EmiratesID2) {
      return res.status(400).json({ message: "Missing required fields: front_result, back_result, Front_EmiratesID1, Back_EmiratesID2" });
    }

    // Extract data from front_result
    const frontData = front_result.data || {};
    const backData = back_result.data || {};

    // Helper function to parse date strings
    const parseDate = (dateString) => {
      if (!dateString) return null;
      // Handle different date formats: DD-MM-YYYY, MM/DD/YYYY, etc.
      const date = new Date(dateString);
      return isNaN(date.getTime()) ? null : date.toISOString().split('T')[0];
    };

    // Create the record with all OCR data
    const record = await EmiratesID.create({
      // Main fields (prioritize back data as it's usually more complete)
      ID_number: backData.idNumber || frontData.idNumber,
      name: backData.name || frontData.name,
      gender: backData.sex || frontData.sex,
      dob: parseDate(backData.DOB || frontData.DOB),
      nationality: backData.nationality || frontData.nationality,
      expiry_date: parseDate(backData.expiryDate || frontData.expiryDate),
      Front_EmiratesID1,
      Back_EmiratesID2,
      
      // Front OCR result fields
      front_record_id: front_result.recordId,
      front_data_retrieval_status: front_result.dataRetrievalStatus,
      front_id_number: frontData.idNumber,
      front_name: frontData.name,
      front_sex: frontData.sex,
      front_nationality: frontData.nationality,
      front_dob: parseDate(frontData.DOB),
      front_issue_date: parseDate(frontData.issueDate),
      front_expiry_date: parseDate(frontData.expiryDate),
      front_utc_time_stamp: front_result.utc_time_stamp,
      front_arabic_name_status: frontData.arabic_name_status,
      front_arabic_name: frontData.arabic_name,
      
      // Back OCR result fields
      back_record_id: back_result.recordId,
      back_data_retrieval_status: back_result.dataRetrievalStatus,
      back_id_number: backData.idNumber,
      back_card_number: backData.cardNumber,
      back_name: backData.name,
      back_sex: backData.sex,
      back_nationality: backData.nationality,
      back_dob: parseDate(backData.DOB),
      back_issue_date: parseDate(backData.issueDate),
      back_issue_place: backData.issuePlace,
      back_expiry_date: parseDate(backData.expiryDate),
      back_occupation: backData.occupation,
      back_employer: backData.employer,
      back_family_sponsor: backData.familySponsor,
      back_utc_time_stamp: back_result.utc_time_stamp,
    });

    res.json({ 
      message: "Data saved successfully", 
      record: {
        id: record.id,
        ID_number: record.ID_number,
        name: record.name,
        created_at: record.createdAt
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
