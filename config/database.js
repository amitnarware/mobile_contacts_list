const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mobile_contacts', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize.sync({ force: true }) // use force: true with caution
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.log('Error creating database:', err);
  });
// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to MySQL database established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;