"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("properties", "users_UserID", {
      type: Sequelize.INTEGER,
      allowNull: true, // or false, depending on your requirements
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("properties", "users_UserID");
  },
};
