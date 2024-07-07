const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const SpamNumber = sequelize.define('SpamNumber', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  spam_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

SpamNumber.associate = (models) => {
  SpamNumber.belongsTo(models.User, {
    foreignKey: 'userId',
  });
};

module.exports = SpamNumber;
