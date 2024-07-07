// models/UserContact.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Contact = require('./Contact');

const UserContact = sequelize.define('UserContact', {
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
  contact_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Contact,
      key: 'id'
    }
  }
}, {
  tableName: 'UserContacts'
});

module.exports = UserContact;



