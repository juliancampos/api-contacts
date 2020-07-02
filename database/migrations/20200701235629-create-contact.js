'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('contact', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(100)
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('contact');
  }
};
