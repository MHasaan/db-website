const { Sequelize } = require('sequelize');
const tedious = require('tedious');

const sequelize = new Sequelize('Hello', null, null, {
  host: 'DESKTOP-DTNJB1H\\SQLEXPRESS',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      useUTC: false,
      dateFirst: 1,
      trustedConnection: true,
      // Add these lines
      encrypt: true,
      trustServerCertificate: true,
      authentication: {
        type: 'ntlm',
        options: {
          userName: 'Ahmadraza',
          password: '145802',
        },
      },
    },
  },
  dialectModule: tedious,
});

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(error => console.error('Unable to connect to the database:', error));
