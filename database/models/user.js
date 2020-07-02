module.exports = (sequelize, DataTypes) => sequelize.define('user', {
  name: DataTypes.STRING(100),
  createdAt: {
    type: DataTypes.DATE(3),
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
  },
  updatedAt: {
    type: DataTypes.DATE(3),
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
  }
}, {
  freezeTableName: true,
  tableName: 'user'
})