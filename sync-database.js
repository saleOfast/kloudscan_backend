require("dotenv").config();
const { sequelize } = require("./models");

// Sync the database to create tables
async function syncDatabase() {
  try {
    console.log("Connecting to database...");
    await sequelize.authenticate();
    console.log("Database connection established successfully.");

    console.log("Syncing database models...");
    await sequelize.sync({ force: false }); // Use force: true to drop and recreate tables
    console.log("Database synced successfully!");

    console.log("EmiratesIDs table created/verified.");
    process.exit(0);
  } catch (error) {
    console.error("Unable to sync database:", error);
    process.exit(1);
  }
}

module.exports = syncDatabase;

//syncDatabase();
