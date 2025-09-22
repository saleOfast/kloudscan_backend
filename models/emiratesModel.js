"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class EmiratesID extends Model {
    static associate(models) {
      // Define associations later if needed (e.g., link with User table)
    }
  }

  EmiratesID.init(
    {
      ID_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dob: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      expiry_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      Front_EmiratesID1: {
        type: DataTypes.STRING, // store filename or path
        allowNull: true,
      },
      Back_EmiratesID2: {
        type: DataTypes.STRING, // store filename or path
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "EmiratesID",
      tableName: "EmiratesIDs",
      timestamps: true, // adds createdAt & updatedAt
    }
  );

  return EmiratesID;
};
