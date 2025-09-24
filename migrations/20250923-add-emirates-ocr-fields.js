module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('EmiratesIDs', 'front_record_id', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'front_data_retrieval_status', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'front_id_number', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'front_name', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'front_sex', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'front_nationality', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'front_dob', {
      type: Sequelize.DATEONLY,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'front_issue_date', {
      type: Sequelize.DATEONLY,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'front_expiry_date', {
      type: Sequelize.DATEONLY,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'front_utc_time_stamp', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'front_arabic_name_status', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'front_arabic_name', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'back_record_id', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'back_data_retrieval_status', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'back_id_number', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'back_card_number', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'back_name', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'back_sex', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'back_nationality', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'back_dob', {
      type: Sequelize.DATEONLY,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'back_issue_date', {
      type: Sequelize.DATEONLY,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'back_issue_place', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'back_expiry_date', {
      type: Sequelize.DATEONLY,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'back_occupation', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'back_employer', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'back_family_sponsor', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('EmiratesIDs', 'back_utc_time_stamp', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('EmiratesIDs', 'front_record_id');
    await queryInterface.removeColumn('EmiratesIDs', 'front_data_retrieval_status');
    await queryInterface.removeColumn('EmiratesIDs', 'front_id_number');
    await queryInterface.removeColumn('EmiratesIDs', 'front_name');
    await queryInterface.removeColumn('EmiratesIDs', 'front_sex');
    await queryInterface.removeColumn('EmiratesIDs', 'front_nationality');
    await queryInterface.removeColumn('EmiratesIDs', 'front_dob');
    await queryInterface.removeColumn('EmiratesIDs', 'front_issue_date');
    await queryInterface.removeColumn('EmiratesIDs', 'front_expiry_date');
    await queryInterface.removeColumn('EmiratesIDs', 'front_utc_time_stamp');
    await queryInterface.removeColumn('EmiratesIDs', 'front_arabic_name_status');
    await queryInterface.removeColumn('EmiratesIDs', 'front_arabic_name');
    await queryInterface.removeColumn('EmiratesIDs', 'back_record_id');
    await queryInterface.removeColumn('EmiratesIDs', 'back_data_retrieval_status');
    await queryInterface.removeColumn('EmiratesIDs', 'back_id_number');
    await queryInterface.removeColumn('EmiratesIDs', 'back_card_number');
    await queryInterface.removeColumn('EmiratesIDs', 'back_name');
    await queryInterface.removeColumn('EmiratesIDs', 'back_sex');
    await queryInterface.removeColumn('EmiratesIDs', 'back_nationality');
    await queryInterface.removeColumn('EmiratesIDs', 'back_dob');
    await queryInterface.removeColumn('EmiratesIDs', 'back_issue_date');
    await queryInterface.removeColumn('EmiratesIDs', 'back_issue_place');
    await queryInterface.removeColumn('EmiratesIDs', 'back_expiry_date');
    await queryInterface.removeColumn('EmiratesIDs', 'back_occupation');
    await queryInterface.removeColumn('EmiratesIDs', 'back_employer');
    await queryInterface.removeColumn('EmiratesIDs', 'back_family_sponsor');
    await queryInterface.removeColumn('EmiratesIDs', 'back_utc_time_stamp');
  }
};
