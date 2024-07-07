// models/index.js
const sequelize = require('../config/database');
const User = require('./User');
const Contact = require('./Contact');
const UserContact = require('./UserContact');
const SpamNumber = require("./SpamNumber");

const models = {
  User,
  Contact,
  UserContact,
  SpamNumber
};

Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

User.associate({ Contact, UserContact, SpamNumber });
Contact.associate({ User, UserContact });
SpamNumber.associate({ User });

module.exports = {
  sequelize,
  ...models
};
