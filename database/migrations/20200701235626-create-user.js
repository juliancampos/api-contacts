'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('user', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('user');
  }
};
