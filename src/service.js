const { EmiratesID } = require("../models");
const axios = require("axios");

exports.verifyAndSave = async (qrData) => {
  const response = await axios.post(process.env.CLIENT_API, {
    ID_number: qrData.ID_number,
  });

  if (!response.data || !response.data.valid) {
    throw new Error("Invalid Emirates ID");
  }

  const newEntry = await EmiratesID.create(qrData);

  return { message: "Verified and saved", data: newEntry };
};
