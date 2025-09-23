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
      // name: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      // gender: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
      // dob: {
      //   type: DataTypes.DATEONLY,
      //   allowNull: true,
      // },
      // nationality: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
      // expiry_date: {
      //   type: DataTypes.DATEONLY,
      //   allowNull: true,
      // },
      // Front_EmiratesID1: {
      //   type: DataTypes.STRING, // store filename or path
      //   allowNull: true,
      // },
      // Back_EmiratesID2: {
      //   type: DataTypes.STRING, // store filename or path
      //   allowNull: true,
      // },
      // Front OCR result fields
      front_record_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      front_data_retrieval_status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      front_id_number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      front_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      front_sex: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      front_nationality: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      front_dob: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      front_issue_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      front_expiry_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      front_utc_time_stamp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      front_arabic_name_status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      front_arabic_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      // Back OCR result fields
      back_record_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      back_data_retrieval_status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      back_id_number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      back_card_number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      back_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      back_sex: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      back_nationality: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      back_dob: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      back_issue_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      back_issue_place: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      back_expiry_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      back_occupation: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      back_employer: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      back_family_sponsor: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      back_utc_time_stamp: {
        type: DataTypes.STRING,
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
