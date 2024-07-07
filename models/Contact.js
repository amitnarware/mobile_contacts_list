// models/Contact.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Contact = sequelize.define('Contact', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Contacts'
});

Contact.associate = (models) => {
  Contact.belongsToMany(models.User, {
    through: models.UserContact,
    foreignKey: 'contact_id',
  });
};

module.exports = Contact;


